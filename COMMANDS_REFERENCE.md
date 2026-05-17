# 🔧 Command Reference - Yaaz Clinic Deployment

## Copy-Paste Ready Commands

Use these commands exactly as shown to deploy your project.

---

## Phase 1: Local Verification (Optional but Recommended)

### Test the build locally
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
npm run build
```

**Expected Output:**
```
✓ Compiled successfully
✓ File sizes: 125.83 kB JS + 12.7 kB CSS
```

### Test production build locally
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
npm install -g serve
serve -s build
# Opens http://localhost:3000
```

---

## Phase 2: Push to GitHub

```bash
# Navigate to project root
cd C:\Users\sharu\Desktop\Yaaz_clinic-main

# Initialize git (only if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Yaaz Clinic - Production Ready"

# Rename branch to main (if needed)
git branch -M main

# Add remote origin - REPLACE YOUR_USERNAME and REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/yaaz-clinic.git

# Push to GitHub
git push -u origin main
```

---

## Phase 3: Deploy on Vercel

### Option A: Vercel Dashboard (Easiest)

1. Visit https://vercel.com
2. Click "Sign In" → Choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "New Project"
5. Find and select "yaaz-clinic" repository
6. Click "Deploy"
7. Wait 1-2 minutes for deployment to complete
8. Copy your new URL from the congratulations page

### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project root
cd C:\Users\sharu\Desktop\Yaaz_clinic-main

# Deploy
vercel

# Follow the prompts and press Enter to confirm
```

---

## Phase 4: Add Custom Domain (Optional)

```bash
# In Vercel Dashboard:
# 1. Go to your project
# 2. Settings → Domains
# 3. Add your domain (e.g., yaaz-clinic.com)
# 4. Update DNS records as instructed
```

---

## Phase 5: Verify Deployment

```bash
# Check your Vercel dashboard for:
# ✓ Build Status: Success
# ✓ Deployment Status: Ready
# ✓ URL: https://yaaz-clinic.vercel.app
```

---

## Common Commands for Development

### Start development server
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
npm start
```

### Build for production
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
npm run build
```

### Install new package
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
npm install package-name --legacy-peer-deps
```

### Fix npm issues
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
rm -r node_modules
npm cache clean --force
npm install --legacy-peer-deps
```

### Check for vulnerabilities
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
npm audit
```

### Update dependencies (careful!)
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
npm update --legacy-peer-deps
```

---

## Git Commands

### View git status
```bash
git status
```

### View git history
```bash
git log
```

### Undo last commit (before push)
```bash
git reset --soft HEAD~1
```

### View current branch
```bash
git branch
```

### Switch branch
```bash
git checkout branch-name
```

---

## Environment Variables (If Needed)

### Set environment variables in Vercel:
1. Go to Vercel Dashboard → Project Settings
2. Click "Environment Variables"
3. Add variables (e.g., `REACT_APP_API_URL`)
4. Redeploy:
```bash
vercel --prod
```

---

## Troubleshooting Commands

### Check Node version
```bash
node --version
```

### Check npm version
```bash
npm --version
```

### Clear npm cache
```bash
npm cache clean --force
```

### Force reinstall all dependencies
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
rm -r node_modules package-lock.json
npm install --legacy-peer-deps
```

### View available npm scripts
```bash
cd "C:\Users\sharu\Desktop\Yaaz_clinic-main\frontend"
npm run
```

---

## Deployment Checklist

- [ ] Verified build locally: `npm run build`
- [ ] GitHub account created
- [ ] Pushed code to GitHub: `git push -u origin main`
- [ ] Vercel account created (via GitHub)
- [ ] Project imported on Vercel
- [ ] Deployment completed successfully
- [ ] Live URL working and accessible
- [ ] Components rendering correctly
- [ ] No console errors on live site
- [ ] Performance acceptable (load time < 3s)

---

## Useful Links

- 📚 Vercel Docs: https://vercel.com/docs
- 🔗 GitHub: https://github.com
- ⚛️ React Docs: https://react.dev
- 🎨 Tailwind CSS: https://tailwindcss.com
- 📦 npm Docs: https://docs.npmjs.com

---

## Quick Reference

| Action | Command |
|--------|---------|
| Start dev | `npm start` |
| Build | `npm run build` |
| Test build | `serve -s build` |
| Install pkg | `npm install pkg --legacy-peer-deps` |
| Check status | `git status` |
| Commit | `git commit -m "message"` |
| Push | `git push origin main` |
| Deploy | Visit vercel.com dashboard |

---

## 🎊 That's It!

Your Yaaz Clinic website is ready to go. Follow these commands and you'll be live in minutes!

**Questions?** Check DEPLOYMENT_GUIDE.md or DEPLOYMENT_STATUS.md

Happy deploying! 🚀
