# Contributing Guide

Thank you for your interest in contributing! This document outlines the process to help you submit successful contributions.

## Prerequisites
- A GitHub account with SSH or HTTPS access configured
- Git, Node.js, and npm (or yarn) installed locally
- Familiarity with our coding standards and linting rules (see README)

## Fork the Repository
1. Navigate to the project repository on GitHub.
2. Click **Fork** to create your copy under your GitHub account.
3. Clone your fork locally:
   ```bash
   git clone git@github.com:<your-username>/<repository>.git
   cd <repository>
   ```
4. Add the upstream remote to keep your fork in sync:
   ```bash
   git remote add upstream git@github.com:ORIGINAL_ORG/REPO_NAME.git
   ```

## Create a Branch
1. Ensure your local main branch is up to date:
   ```bash
   git checkout main
   git pull upstream main
   ```
2. Create a descriptive feature branch:
   ```bash
   git checkout -b feat-your-short-description
   ```
   Use prefixes such as `feat/`, `fix/`, or `docs/` to describe the change type.

## Make Changes
- Follow the project coding standards and conventions.
- Include tests and documentation updates where applicable.
- Run the full lint and test suite before committing:
  ```bash
  npm run lint
  npm test
  ```

## Commit Guidelines
- Make small, focused commits with clear messages.
- Use the imperative mood, e.g., `Add user login validation`.
- Reference related issues in commit messages when relevant.

## Sync with Upstream
Before opening a pull request, fetch and rebase on the latest main branch:
```bash
git fetch upstream
git rebase upstream/main
```
Resolve merge conflicts locally, rerun tests, and force-push if necessary:
```bash
git push --force-with-lease origin feat-your-short-description
```

## Submit a Pull Request
1. Push your branch to your fork:
   ```bash
   git push origin feat-your-short-description
   ```
2. Open a PR from your branch to the upstream `main` branch.
3. Provide a concise summary and detailed description of changes.
4. Link related issues (e.g., `Closes #123`).
5. Ensure status checks pass; address review feedback promptly.

## Code Review Process
- Maintain respectful and constructive communication.
- Respond to review comments within two business days.
- Implement requested changes or discuss alternatives with reviewers.

## After Merge
- Delete your feature branch locally and remotely:
  ```bash
  git branch -d feat-your-short-description
  git push origin --delete feat-your-short-description
  ```
- Sync your local main branch with upstream for future work.

We appreciate your contributions and effort to keep the project healthy and growing!