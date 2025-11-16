# Deploying to Vercel

This guide will help you deploy your CEL website to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Method 1: Via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git repository
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Configure Build Settings** (if needed)
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as root)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel

   # For production deployment
   vercel --prod
   ```

## Environment Variables

If you add any environment variables later, add them in Vercel:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add variables with `VITE_` prefix for frontend access
   - Example: `VITE_API_URL`, `VITE_ANALYTICS_ID`

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your domain and follow the DNS configuration instructions

## Automatic Deployments

Vercel automatically deploys:
- **Production**: When you push to the `main` branch
- **Preview**: When you create a pull request

## Build Configuration

The build configuration is specified in `vercel.json`:
- Output directory: `dist/public`
- All routes redirect to `/index.html` for client-side routing
- Build command: `npm run build`

## Troubleshooting

### Build Fails
- Check that `npm run build` works locally
- Ensure all dependencies are in `package.json` (not devDependencies that are needed for build)

### 404 Errors on Page Refresh
- This is handled by the rewrite rule in `vercel.json`
- All routes redirect to `/index.html` for React Router compatibility

### Images Not Loading
- Ensure images are imported correctly using Vite's `@assets` alias
- Check that `attached_assets` folder is committed to your repository

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
