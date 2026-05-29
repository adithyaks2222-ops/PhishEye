export function analyzeURL(url) {

  let score = 100;

  let warnings = [];

  // Detect insecure HTTP
  if (url.startsWith("http://")) {
    score -= 30;

    warnings.push(
      "Website is using insecure HTTP connection."
    );
  }

  // Detect suspicious keywords
  const suspiciousKeywords = [
    "login",
    "verify",
    "secure",
    "account",
    "banking",
    "update"
  ];

  suspiciousKeywords.forEach(keyword => {

    if (url.toLowerCase().includes(keyword)) {

      score -= 10;

      warnings.push(
        `Suspicious keyword detected: ${keyword}`
      );
    }

  });

  // Detect suspicious symbols
  if (url.includes("@")) {

    score -= 20;

    warnings.push(
      "URL contains suspicious @ symbol."
    );
  }

  // Detect excessive hyphens
  const hyphenCount = (url.match(/-/g) || []).length;

  if (hyphenCount >= 3) {

    score -= 15;

    warnings.push(
      "URL contains excessive hyphens."
    );
  }

  // Prevent negative score
  if (score < 0) {
    score = 0;
  }

  // Determine status
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