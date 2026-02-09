# Web Testing with Playwright and TypeScript

This repository provides a starter template for web testing using **Playwright** and **TypeScript**.

It includes an example test case, an example page object, and configuration files to help you get started quickly.

Also, you can run all in docker and on GitHub Actions if you'd like.

## 📁 Project Structure

```
# Forder for test files written in TypeScript (ending with *.spec.ts )
/tests

# Base file adding some lines before/after tests
/tests/base.ts

# Base test file so you can copy/paste/edit
/tests/website.spec.ts

# Page objects folder
/pages

# Provide a step wrapper to take snapshots automatically
/pages/common/StepController.ts

# Provide page objects a way to add log lines and
# extra snapshots into the Playwright HTML report
/pages/common/TestInfoPage.ts

# Sample Page Object, adding it as a fixture
/pages/WebsitePage.ts

# Playwright configuration (loading dotenv already)
playwright.config.ts

# TypeScript configuration with some remap imports already
tsconfig.json

# Scripts and dependencies to make life easier
package.json

# Prettier configs
.prettierrc.json

# ESLint configs (including Playwright plugin)
.eslint.config.mjs

# Support to run tests in Docker
Dockerfile
docker-compose.yml
```

## 🚀 Getting Started

```bash
# To run all locally
npm install # install dependencies
cp .env.example .env # configure environment variables
npm run format # make sure all is formatted
npm test # eslint checks will be run

# Alternatively run all in Docker
cp .env.example .env # configure environment variables
npm run docker
```

## 🛠️ Useful Scripts

| Script           | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| `npm test`       | Run all tests locally                                      |
| `npm run docker` | Run all tests in docker                                    |
| `npm run report` | Open the latest HTML test report                           |
| `npm run open`   | Open Playwright codegen pointing to your `.env` `BASE_URL` |
| `npm run clean`  | Clear reports                                              |
| `npm run check`  | Run ESLint checks (run as part of `npm test` already)      |
| `npm run format` | Fix files according to Prettier rules                      |

## 📚 Resources

- Playwright Docs: https://playwright.dev/docs/intro
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Testing Best Practices: https://playwright.dev/docs/best-practices

## 📜 License

MIT License

---

_Happy testing!_ 🎉
