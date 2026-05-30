# PhishEye 👁️

Browser phishing detection extension under the JARVX cybersecurity ecosystem.

## Overview

PhishEye is a Chrome Extension that helps users identify potentially malicious websites through URL intelligence and webpage content analysis. It evaluates phishing indicators, calculates a threat score, and classifies websites as Safe, Warning, or Danger.

## Features

### Phase 1 — Foundation ✅

* URL scanning
* Threat scoring system
* HTTP detection
* Suspicious keyword detection
* Safety classification

### Phase 2 — Advanced URL Intelligence ✅

* IP address URL detection
* Suspicious TLD detection
* Brand impersonation detection
* URL shortener detection
* Excessive subdomain detection

### Phase 3 — Page Content Analysis ✅

* Password field detection
* Credential harvesting keyword detection
* Content-based threat scoring
* URL + webpage intelligence integration

## Screenshots

### Safe Scan

![Safe Scan](Screenshots/safe-scan.png)

### Warning Scan

![Warning Scan](Screenshots/warning-scan.png)

### Danger Scan

![Danger Scan](Screenshots/danger-scan.png)

## Installation

1. Clone the repository

```bash
git clone https://github.com/adithyaks2222-ops/PhishEye.git
```

2. Open Chrome

```txt
chrome://extensions
```

3. Enable Developer Mode

4. Click **Load unpacked**

5. Select the PhishEye folder

## Current Architecture

```txt
Website
   │
   ▼
Content Scanner
   │
   ▼
Page Analysis
   │
   ▼
URL Analysis
   │
   ▼
Threat Score Engine
   │
   ▼
SAFE / WARNING / DANGER
```

## Version History

### v0.1.0-alpha

* Initial extension foundation
* Basic URL analysis
* Threat scoring engine

### v0.2.0-alpha

* Advanced URL intelligence
* Brand impersonation detection
* Suspicious TLD analysis
* IP URL detection

### v0.3.0-alpha

* Page content analysis
* Password field detection
* Phishing keyword detection
* Combined threat scoring

## Roadmap

### Phase 4 🚧

* Threat Intelligence Engine
* Weighted risk calculation
* False-positive reduction
* Risk explanation system

### Future

* On-page warning overlays
* Threat intelligence API integration
* Security dashboard
* AI-powered threat explanations

## Tech Stack

* JavaScript
* HTML
* CSS
* Chrome Extension Manifest V3

## License

MIT License
