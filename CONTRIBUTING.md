# Elite Solution - Git Workflow Guide

## Branch Structure

```
main        ← Production-ready (protected)
  └── develop   ← Integration branch
       └── feature/*  ← Individual features
```

## Quick Reference

### Create a Feature Branch
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

### Submit Changes via PR
```bash
# Commit your changes
git add .
git commit -m "feat: description of changes"

# Push feature branch
git push origin feature/your-feature-name

# Create PR on GitHub: feature/* → develop
```

### Sync with Upstream (ark4u/elite-solution)
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### Release to Production
```bash
# Create PR on GitHub: develop → main
# After approval and merge, tag the release:
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin --tags
```

## Commit Message Convention

| Type | Description |
|------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation |
| `style:` | Formatting, no code change |
| `refactor:` | Code refactoring |
| `test:` | Adding tests |
| `chore:` | Maintenance |

**Example:** `feat: Add NVR category to product listing`

## Branch Protection (GitHub Setup Required)

Go to **Settings → Branches → Add rule** for `main`:

- ✅ Require pull request before merging
- ✅ Require approvals (1+)
- ✅ Dismiss stale reviews when new commits pushed
- ✅ Require status checks to pass (if CI configured)

---

## Remotes Configured

| Remote | URL | Purpose |
|--------|-----|---------|
| `origin` | amanyty/elite-solution | Working fork |
| `upstream` | ark4u/elite-solution | Original repo |
