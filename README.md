# 🧪 Test Automation Project – UI & API

## 📌 Overview

This project contains automated tests for:

* **UI (End-to-End tests)** using Nightwatch.js
* **API tests** using Cucumber (BDD approach)

The goal is to ensure high quality and reliability of the application by covering critical user journeys and API endpoints.

---

## 🏗️ Project Structure

```
ornikar-nightwatch/
│
├── commands/                     # Custom Nightwatch commands (e.g. cookies handling)
│
├── tests/
│   ├── e2e/
│   │   ├── tests/               # UI test files
│   │   ├── page-objects/        # Page Object Model (POM)
│   │
│   └── api/
│       ├── features/            # Gherkin feature files
│       └── step-definitions/    # Step definitions (Cucumber)
│
├── nightwatch.conf.cjs          # Nightwatch configuration
├── package.json
└── README.md
```

---

## 🚀 Technologies Used

### UI Testing

* Nightwatch.js
* Page Object Model (POM)
* Custom commands (e.g. cookie banner handling)

### API Testing

* Cucumber (Gherkin syntax)
* Node.js HTTP requests (e.g. fetch / axios)

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd ornikar-nightwatch
```

2. Install dependencies:

```bash
npm install
```

---

## 🧪 Running Tests

### ▶️ Run all UI tests

```bash
npm run test:e2e
```

---

### ▶️ Run a single UI test

```bash
npm run test:e2e -- --test tests/e2e/tests/insuranceTiersDisplay.test.js
```

---

### ▶️ Run API tests (Cucumber)

```bash
npm run test:api
```

---

## 🧩 Test Architecture

### UI Tests (Nightwatch)

* **Page Object Model (POM)** is used to separate:

  * selectors
  * actions
  * test logic

Example:

```js
const page = browser.page.assuranceAuto();

page.open();
browser.closeCookiesIfPresent();
page.clickQuoteRequestCta();
```

---

### Custom Commands

Reusable actions are stored in:

```
commands/
```

Example:

```js
browser.closeCookiesIfPresent();
```

Used to handle global UI elements like cookie banners.

---

### API Tests (Cucumber)

BDD approach using Gherkin:

```
Feature: Vehicle suggestions

  Scenario: Get vehicle suggestions from a valid license plate
    Given a valid license plate
    When I request vehicle suggestions
    Then the response status should be 200
```

---

## 🧠 Testing Strategy

### UI

* Focus on **critical user journeys**
* Validate:

  * navigation
  * redirections
  * key actions (CTA clicks, forms)

### API

* Validate:

  * status codes
  * response structure (contract)
  * business data

---

## 🔁 CI/CD (Recommended)

Tests can be integrated into CI pipelines (e.g. GitHub Actions):

* Run UI tests on pull requests
* Run API tests on each commit
* Generate reports

---

## 💡 Best Practices

* Use **stable selectors** (data attributes or text)
* Avoid flaky tests (handle cookies, waits properly)
* Keep tests **independent**
* Reuse logic via:

  * page objects
  * custom commands

---

## 📊 Reporting
UI tests

Nightwatch generates HTML reports in:

```
tests_output/nightwatch-html-report/
```

API tests use Cucumber with JSON output, which is converted into an HTML report for better readability.

### Generate API report

```bash
npm run test:api:report


