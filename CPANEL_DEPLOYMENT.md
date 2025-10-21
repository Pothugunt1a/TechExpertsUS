# cPanel Deployment Guide

This guide will help you deploy your Tech Expertsus application to cPanel hosting.

## Prerequisites

Before deploying, ensure your cPanel hosting has:
- ✅ **Node.js 20.x** support (via Node.js Selector or similar)
- ✅ **PostgreSQL** database access
- ✅ **SSH access** (highly recommended) or File Manager
- ✅ At least **512MB RAM** (1GB+ recommended)

## Step 1: Prepare Your Files

### 1.1 Build the Application Locally (on Replit or your computer)

```bash
npm install
npm run build
```

This creates a `dist` folder with:
- `dist/public/` - Your built React frontend
- `dist/index.js` - Your compiled backend server

### 1.2 Files to Upload to cPanel

Upload these files/folders to your cPanel account (e.g., `/home/yourusername/tech-expertsus/`):

```
✅ dist/                  (entire folder - built application)
✅ node_modules/          (if not using SSH, otherwise install on server)
✅ package.json
✅ package-lock.json
✅ drizzle.config.ts
✅ shared/                (database schema)
✅ server/                (only if you need to rebuild)
✅ .env                   (create on server - see Step 2)
```

**DO NOT upload:**
- ❌ client/ (already built into dist/public)
- ❌ node_modules/ (install on server via SSH)
- ❌ .git/
- ❌ attached_assets/ (already bundled in dist)

## Step 2: Set Up PostgreSQL Database

### 2.1 Create Database in cPanel
1. Log into cPanel
2. Go to **PostgreSQL Databases**
3. Create a new database (e.g., `yourusername_techexpertsus`)
4. Create a database user with a strong password
5. Add the user to the database with ALL PRIVILEGES

### 2.2 Note Your Database Connection Details
You'll need:
- Database name: `yourusername_techexpertsus`
- Database user: `yourusername_dbuser`
- Database password: `your_password`
- Database host: `localhost` (usually)
- Database port: `5432` (default PostgreSQL port)

## Step 3: Configure Environment Variables

Create a `.env` file in your application root directory on cPanel:

```bash
# Navigate to your application directory
cd ~/tech-expertsus

# Create .env file
nano .env
```

Add the following content (replace with your actual values):

```env
# Database Configuration
DATABASE_URL=postgresql://yourusername_dbuser:your_password@localhost:5432/yourusername_techexpertsus

# Server Configuration
NODE_ENV=production
PORT=3000

# Session Secret (generate a random string)
SESSION_SECRET=your-super-secret-random-string-here-make-it-long-and-random
```

**Important:** Replace all placeholder values with your actual credentials!

To generate a secure SESSION_SECRET, you can use:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Step 4: Install Dependencies (via SSH)

If you have SSH access:

```bash
# Navigate to your app directory
cd ~/tech-expertsus

# Install production dependencies
npm install --production

# Or install all dependencies if you need to rebuild
npm install
```

## Step 5: Set Up Database Schema

Push your database schema to PostgreSQL:

```bash
npm run db:push
```

This creates all necessary tables in your PostgreSQL database.

## Step 6: Configure Node.js Application in cPanel

### 6.1 Using cPanel Node.js Selector

1. Go to **Setup Node.js App** in cPanel
2. Click **Create Application**
3. Configure:
   - **Node.js version:** 20.x
   - **Application mode:** Production
   - **Application root:** `tech-expertsus` (or your folder name)
   - **Application URL:** Your domain or subdomain
   - **Application startup file:** `dist/index.js`
   - **Port:** Leave default or use 3000

4. Click **Create**

### 6.2 Environment Variables in cPanel Node.js App

In the Node.js app settings, add environment variables:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NODE_ENV`: `production`
- `PORT`: (use the port assigned by cPanel, usually auto-configured)
- `SESSION_SECRET`: Your secret key

### 6.3 Start the Application

Click **Start App** or **Restart** button in cPanel Node.js App interface.

## Step 7: Configure Domain/Subdomain (Optional)

1. Go to **Domains** in cPanel
2. Add a subdomain or use your main domain
3. Point it to the application URL from Node.js App setup

## Step 8: Verify Deployment

1. Visit your domain/subdomain in a browser
2. Check if the homepage loads
3. Test navigation between pages (Home, About, Services, Consult, Contact)
4. Check browser console for errors (F12)

## Troubleshooting

### Application Won't Start

**Check logs:**
```bash
# Via SSH
cd ~/tech-expertsus
npm start  # See if there are errors
```

Common issues:
- ❌ **Database connection failed:** Check DATABASE_URL in .env
- ❌ **Port already in use:** Change PORT in .env
- ❌ **Missing dependencies:** Run `npm install`
- ❌ **dist folder missing:** Run `npm run build`

### Database Errors

```bash
# Verify database connection
psql -h localhost -U yourusername_dbuser -d yourusername_techexpertsus

# Re-push schema
npm run db:push --force
```

### Application Running but Pages Show 404

This usually means the static files aren't being served correctly.

**Fix:**
1. Verify `dist/public/` folder exists and contains `index.html`, `assets/`, etc.
2. Check that NODE_ENV is set to `production`
3. Restart the application

### Can't Access Database

- Verify PostgreSQL is running on your cPanel server
- Check if your database user has proper permissions
- Ensure the database host is `localhost` or the correct hostname

## Alternative: Manual Process Manager Setup

If your cPanel doesn't have Node.js Selector, use PM2:

```bash
# Install PM2 globally (if not installed)
npm install -g pm2

# Start application with PM2
cd ~/tech-expertsus
pm2 start dist/index.js --name "tech-expertsus"

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## Updating Your Application

When you make changes:

```bash
# 1. Build locally
npm run build

# 2. Upload new dist/ folder to server

# 3. Via SSH, restart the app
cd ~/tech-expertsus
# If using cPanel Node.js App:
# Just click "Restart" in cPanel interface

# If using PM2:
pm2 restart tech-expertsus
```

## Performance Tips

1. **Enable gzip compression** in your .htaccess (if supported)
2. **Use a CDN** for static assets
3. **Monitor memory usage** - Upgrade hosting if needed
4. **Set up SSL certificate** (Let's Encrypt via cPanel)
5. **Regular backups** of database and files

## Support

If you encounter issues:
1. Check cPanel error logs
2. Check application logs (via SSH or Node.js App interface)
3. Verify all environment variables are set correctly
4. Contact your hosting provider for Node.js/PostgreSQL support

---

## Quick Reference Commands

```bash
# Build application
npm run build

# Install dependencies
npm install --production

# Push database schema
npm run db:push

# Start application manually
npm start

# Check if app is running
ps aux | grep node

# View application logs (if using PM2)
pm2 logs tech-expertsus
```

Good luck with your deployment! 🚀
