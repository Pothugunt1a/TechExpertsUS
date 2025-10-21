# cPanel Deployment Checklist

Use this checklist to ensure you don't miss any steps when deploying to cPanel.

## Pre-Deployment (On Replit/Local)

- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run build` to create production build
- [ ] Verify `dist/` folder contains:
  - [ ] `dist/public/` folder with index.html and assets
  - [ ] `dist/index.js` server file
- [ ] Test the build locally: `npm start`
- [ ] Create `.env.example` file (already done ✓)

## cPanel Setup

- [ ] Verify hosting requirements:
  - [ ] Node.js 20.x support available
  - [ ] PostgreSQL database support
  - [ ] SSH access (recommended)
  - [ ] Sufficient disk space (at least 500MB)
  - [ ] RAM: 512MB minimum (1GB+ recommended)

## Database Configuration

- [ ] Create PostgreSQL database in cPanel
- [ ] Create database user
- [ ] Grant ALL PRIVILEGES to user on database
- [ ] Note down:
  - [ ] Database name
  - [ ] Database username  
  - [ ] Database password
  - [ ] Database host (usually `localhost`)
  - [ ] Database port (usually `5432`)

## File Upload

- [ ] Create application folder on cPanel (e.g., `~/tech-expertsus/`)
- [ ] Upload files to cPanel:
  - [ ] `dist/` folder (complete)
  - [ ] `package.json`
  - [ ] `package-lock.json`
  - [ ] `drizzle.config.ts`
  - [ ] `shared/` folder
  - [ ] `server/` folder (optional, for rebuilding)

## Environment Configuration

- [ ] Create `.env` file on server
- [ ] Add `DATABASE_URL` with correct PostgreSQL connection string
- [ ] Add `NODE_ENV=production`
- [ ] Add `PORT` (match cPanel assigned port)
- [ ] Generate and add secure `SESSION_SECRET`
- [ ] Verify `.env` file permissions (readable by app only)

## Dependencies Installation

- [ ] SSH into cPanel server
- [ ] Navigate to application directory
- [ ] Run `npm install --production`
- [ ] Verify installation completed without errors

## Database Schema

- [ ] Run `npm run db:push` to create tables
- [ ] Verify tables created successfully
- [ ] Check PostgreSQL database for tables:
  - [ ] Verify schema matches expected structure

## Node.js App Configuration

### If using cPanel Node.js Selector:
- [ ] Go to "Setup Node.js App"
- [ ] Create new application
- [ ] Set Node.js version to 20.x
- [ ] Set application mode to Production
- [ ] Set application root folder
- [ ] Set startup file to `dist/index.js`
- [ ] Configure environment variables in UI
- [ ] Save configuration

### If using PM2:
- [ ] Install PM2: `npm install -g pm2`
- [ ] Start app: `pm2 start dist/index.js --name tech-expertsus`
- [ ] Save PM2 configuration: `pm2 save`
- [ ] Setup startup script: `pm2 startup`

## Start Application

- [ ] Start the application (via cPanel UI or PM2)
- [ ] Check if application starts without errors
- [ ] Verify process is running: `ps aux | grep node`

## Domain Configuration

- [ ] Configure domain or subdomain in cPanel
- [ ] Point domain to application URL
- [ ] Wait for DNS propagation (if needed)
- [ ] Setup SSL certificate (Let's Encrypt recommended)

## Testing

- [ ] Open website in browser
- [ ] Test homepage loads correctly
- [ ] Test all navigation links:
  - [ ] Home page
  - [ ] About page
  - [ ] Services page
  - [ ] Consult page
  - [ ] Contact page
- [ ] Check browser console (F12) for JavaScript errors
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify background images load:
  - [ ] Home carousel (About.png)
  - [ ] Services banner (Services.webp)
  - [ ] Contact Business Hours (Contactmap.jpg)
- [ ] Test dark mode toggle
- [ ] Verify no console errors

## Post-Deployment

- [ ] Monitor application logs for errors
- [ ] Set up monitoring/alerts (if available)
- [ ] Configure automatic backups:
  - [ ] Database backups
  - [ ] File backups
- [ ] Document deployment date and configuration
- [ ] Create rollback plan
- [ ] Test application performance
- [ ] Set up analytics (if needed)

## Security Checklist

- [ ] Verify `.env` file is NOT publicly accessible
- [ ] Ensure SESSION_SECRET is strong and unique
- [ ] Database password is strong
- [ ] SSL/HTTPS is enabled
- [ ] Update Node.js packages if security updates available
- [ ] Restrict database access to localhost only
- [ ] Review file permissions

## Troubleshooting (if needed)

- [ ] Check application logs
- [ ] Check cPanel error logs
- [ ] Verify all environment variables are set
- [ ] Test database connection manually
- [ ] Verify dist/public folder contains all assets
- [ ] Check file permissions
- [ ] Restart application
- [ ] Clear browser cache and test again

## Maintenance Plan

- [ ] Schedule regular updates
- [ ] Plan for database backups (daily/weekly)
- [ ] Monitor disk space usage
- [ ] Monitor memory/CPU usage
- [ ] Keep Node.js version updated
- [ ] Update npm packages periodically

---

## Deployment Complete! 🎉

Once all items are checked, your Tech Expertsus application should be live on cPanel.

**Final Steps:**
1. Share the URL with stakeholders
2. Monitor for first 24-48 hours
3. Address any issues that arise
4. Document any customizations or issues encountered

**Need help?** Refer to `CPANEL_DEPLOYMENT.md` for detailed instructions.
