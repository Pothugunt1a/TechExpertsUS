#!/bin/bash

echo "=========================================="
echo "Tech Expertsus - cPanel Deployment Prep"
echo "=========================================="
echo ""

# Check if Node.js is installed
echo "✓ Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20.x first."
    exit 1
fi

NODE_VERSION=$(node -v)
echo "  Node.js version: $NODE_VERSION"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo "✓ Dependencies installed"
echo ""

# Build the application
echo "🔨 Building application..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✓ Build completed"
echo ""

# Verify build output
echo "🔍 Verifying build output..."
if [ ! -d "dist" ]; then
    echo "❌ dist/ folder not found"
    exit 1
fi

if [ ! -d "dist/public" ]; then
    echo "❌ dist/public/ folder not found"
    exit 1
fi

if [ ! -f "dist/index.js" ]; then
    echo "❌ dist/index.js not found"
    exit 1
fi

if [ ! -f "dist/public/index.html" ]; then
    echo "❌ dist/public/index.html not found"
    exit 1
fi

echo "✓ Build output verified"
echo ""

# Create .env.example if it doesn't exist
if [ ! -f ".env.example" ]; then
    echo "📝 Creating .env.example..."
    cat > .env.example << 'EOF'
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# Server Configuration
NODE_ENV=production
PORT=3000

# Session Secret (generate a random string for production)
SESSION_SECRET=change-this-to-a-random-secret-string
EOF
    echo "✓ .env.example created"
else
    echo "✓ .env.example already exists"
fi
echo ""

# Generate a sample session secret
echo "🔐 Sample SESSION_SECRET (use this in your .env on cPanel):"
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
echo ""

# Summary
echo "=========================================="
echo "✅ DEPLOYMENT PREPARATION COMPLETE!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Review CPANEL_DEPLOYMENT.md for detailed instructions"
echo "2. Use DEPLOYMENT_CHECKLIST.md to track your progress"
echo "3. Upload these files to your cPanel hosting:"
echo "   - dist/ (entire folder)"
echo "   - package.json"
echo "   - package-lock.json"
echo "   - drizzle.config.ts"
echo "   - shared/"
echo ""
echo "4. On your cPanel server:"
echo "   - Create .env file with your actual credentials"
echo "   - Run: npm install --production"
echo "   - Run: npm run db:push"
echo "   - Start the application"
echo ""
echo "📚 Documentation created:"
echo "   - CPANEL_DEPLOYMENT.md (detailed guide)"
echo "   - DEPLOYMENT_CHECKLIST.md (step-by-step checklist)"
echo "   - .env.example (environment variables template)"
echo ""
echo "Good luck with your deployment! 🚀"
