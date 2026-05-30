import {
  suspiciousTLDs,
  protectedBrands,
  urlShorteners
} from "./threatDatabase.js";

import { applyPenalty } from "./scoringEngine.js";

export function analyzeURL(url) {

  let score = 100;

  let warnings = [];

  // HTTP
  if (url.startsWith("http://")) {
    score = applyPenalty(score, 30);

    warnings.push(
      "Insecure HTTP connection detected."
    );
  }

  // IP Address URL
  const ipRegex =
    /(https?:\/\/)?(\d{1,3}\.){3}\d{1,3}/;

  if (ipRegex.test(url)) {

    score = applyPenalty(score, 25);

    warnings.push(
      "IP-based URL detected."
    );
  }

  // Long URL
  if (url.length > 100) {

    score = applyPenalty(score, 15);

    warnings.push(
      "Unusually long URL detected."
    );
  }

  // Suspicious TLD
  suspiciousTLDs.forEach(tld => {

    if (url.includes(tld)) {

      score = applyPenalty(score, 20);

      warnings.push(
        `Suspicious TLD detected: ${tld}`
      );
    }

  });

  // URL Shorteners
  urlShorteners.forEach(service => {

    if (url.includes(service)) {

      score = applyPenalty(score, 25);

      warnings.push(
        `URL shortener detected: ${service}`
      );
    }

  });

  // Brand impersonation
  protectedBrands.forEach(brand => {

    if (
      url.toLowerCase().includes(brand) &&
      !url.includes(`${brand}.com`)
    ) {

      score = applyPenalty(score, 25);

      warnings.push(
        `Possible impersonation of ${brand}`
      );
    }

  });

  // Subdomain count
  try {

    const hostname =
      new URL(url).hostname;

    const subdomains =
      hostname.split(".").length;

    if (subdomains > 4) {

      score = applyPenalty(score, 15);

      warnings.push(
        "Excessive subdomains detected."
      );
    }

  } catch {}

  let status = "SAFE";

  if (score < 80) {
    status = "WARNING";
  }

  if (score < 50) {
    status = "DANGER";
  }

  return {
    score,
    warnings,
    status
  };
}