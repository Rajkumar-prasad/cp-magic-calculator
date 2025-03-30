
const fs = require('fs');
const path = require('path');

// Function to check if directory exists and create it if not
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// Copy .htaccess to dist folder
console.log('Copying .htaccess to dist folder...');
fs.copyFile('.htaccess', 'dist/.htaccess', (err) => {
  if (err) {
    console.error('Error copying .htaccess:', err);
  } else {
    console.log('.htaccess copied successfully');
  }
});

// Verify if dist folder exists
if (fs.existsSync('dist')) {
  console.log('Build folder exists. Deployment files prepared successfully.');
  console.log('\nTo deploy to shared hosting:');
  console.log('1. Upload all files from the "dist" folder to your web server\'s public directory');
  console.log('2. Ensure the .htaccess file is included');
  console.log('3. Set the correct file permissions (typically 644 for files and 755 for directories)');
} else {
  console.error('Build folder not found. Please run "npm run build" first.');
}
