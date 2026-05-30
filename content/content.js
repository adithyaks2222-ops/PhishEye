function scanPage() {

  const pageText =
    document.body.innerText.toLowerCase();

  const passwordFields =
    document.querySelectorAll(
      'input[type="password"]'
    );

  const suspiciousKeywords = [
    "verify account",
    "confirm identity",
    "reset password",
    "update payment",
    "secure login",
    "bank verification"
  ];

  let findings = [];

  suspiciousKeywords.forEach(keyword => {

    if (pageText.includes(keyword)) {

      findings.push(
        `Suspicious keyword found: ${keyword}`
      );

    }

  });



  if (passwordFields.length > 0) {

    findings.push(
      `Password fields detected: ${passwordFields.length}`
    );

  }

  chrome.storage.local.set({
    pageFindings: findings
  });
  
console.log("PhishEye Content Scanner Running");
console.log("Findings:", findings);
}

scanPage();
