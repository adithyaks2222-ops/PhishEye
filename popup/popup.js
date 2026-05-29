const scanBtn = document.getElementById("scanBtn");

const scoreElement = document.getElementById("score");

const resultsElement = document.getElementById("results");

const statusBox = document.getElementById("statusBox");

scanBtn.addEventListener("click", async () => {

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  const url = tab.pendingUrl || tab.url;

  console.log("Detected URL:", url);

  let score = 100;

  let warnings = [];

  // Rule 1
  if (url.startsWith("http://")) {
    score -= 30;
    warnings.push("Insecure HTTP detected.");
  }

  // Rule 2
  if (url.includes("login")) {
    score -= 10;
    warnings.push("Login keyword detected.");
  }

  // Rule 3
  if (url.includes("verify")) {
    score -= 10;
    warnings.push("Verify keyword detected.");
  }

  // Rule 4
  if (url.includes("account")) {
    score -= 10;
    warnings.push("Account keyword detected.");
  }

  // Rule 5
  const hyphenCount = (url.match(/-/g) || []).length;

  if (hyphenCount >= 3) {
    score -= 15;
    warnings.push("Excessive hyphens detected.");
  }

  // Prevent negative values
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

  // Update UI
  scoreElement.textContent = score;

  statusBox.textContent = status;

  statusBox.className = "status";

  if (status === "SAFE") {
    statusBox.classList.add("safe");
  }

  if (status === "WARNING") {
    statusBox.classList.add("warning");
  }

  if (status === "DANGER") {
    statusBox.classList.add("danger");
  }

  // Show warnings
  if (warnings.length === 0) {

    resultsElement.innerHTML = `
      ✅ No suspicious indicators detected.
    `;

  } else {

    resultsElement.innerHTML = `
      <strong>Detected Warnings:</strong>
      <br><br>
      ${warnings.join("<br>")}
    `;

  }

  console.log("Final Score:", score);
  console.log("Warnings:", warnings);

});