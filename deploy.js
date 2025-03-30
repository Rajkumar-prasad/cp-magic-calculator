
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Function to check if directory exists and create it if not
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// Verify if dist folder exists, if not tell user to run build
if (!fs.existsSync('dist')) {
  console.error('\x1b[31m%s\x1b[0m', 'Build folder not found. Please run "npm run build" first.');
  console.log('\x1b[33m%s\x1b[0m', 'Run: npm run build');
  process.exit(1);
}

// Copy .htaccess to dist folder
console.log('Copying .htaccess to dist folder...');
fs.copyFile('.htaccess', 'dist/.htaccess', (err) => {
  if (err) {
    console.error('\x1b[31m%s\x1b[0m', 'Error copying .htaccess:', err);
  } else {
    console.log('\x1b[32m%s\x1b[0m', '.htaccess copied successfully');
  }
});

// Copy robots.txt and sitemap.xml to dist folder if they exist
if (fs.existsSync('public/robots.txt')) {
  console.log('Copying robots.txt to dist folder...');
  fs.copyFile('public/robots.txt', 'dist/robots.txt', (err) => {
    if (err) {
      console.error('\x1b[31m%s\x1b[0m', 'Error copying robots.txt:', err);
    } else {
      console.log('\x1b[32m%s\x1b[0m', 'robots.txt copied successfully');
    }
  });
}

if (fs.existsSync('public/sitemap.xml')) {
  console.log('Copying sitemap.xml to dist folder...');
  fs.copyFile('public/sitemap.xml', 'dist/sitemap.xml', (err) => {
    if (err) {
      console.error('\x1b[31m%s\x1b[0m', 'Error copying sitemap.xml:', err);
    } else {
      console.log('\x1b[32m%s\x1b[0m', 'sitemap.xml copied successfully');
    }
  });
}

// Create a README.txt file in the dist folder with deployment instructions
const readmeContent = `
Combat Power Calculator - Deployment Files
==========================================

These files are ready for deployment to your shared hosting server.

Deployment Instructions:
------------------------

1. Upload all files and folders from this directory to your web server's public directory
   (often called 'public_html', 'www', or 'htdocs').

2. Ensure the .htaccess file is included in the upload.

3. Set the correct file permissions:
   - 644 for files (rw-r--r--)
   - 755 for directories (rwxr-xr-x)

4. Access your website through your domain name.

Note: This is a Single Page Application (SPA). The .htaccess file is critical
for ensuring that all routes work correctly.

For any issues, please refer to the project documentation.
`;

ensureDirectoryExistence('dist/README.txt');
fs.writeFile('dist/README.txt', readmeContent, (err) => {
  if (err) {
    console.error('\x1b[31m%s\x1b[0m', 'Error creating README.txt:', err);
  } else {
    console.log('\x1b[32m%s\x1b[0m', 'README.txt created successfully');
  }
});

// List all files in the dist folder
console.log('\n\x1b[36m%s\x1b[0m', 'Files in the dist folder:');
function listFiles(dir, indent = '') {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      console.log(`${indent}📁 ${file}`);
      listFiles(filePath, indent + '  ');
    } else {
      console.log(`${indent}📄 ${file}`);
    }
  });
}
try {
  listFiles('dist');
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', 'Error listing files:', error);
}

// Create a downloadable zip file of the dist folder
console.log('\n\x1b[36m%s\x1b[0m', 'Creating downloadable zip file...');
const output = fs.createWriteStream('dist-files.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log('\x1b[32m%s\x1b[0m', `Successfully created zip file: dist-files.zip (${archive.pointer()} total bytes)`);
  console.log('\x1b[33m%s\x1b[0m', 'You can now download this zip file and upload it to your hosting provider.');
});

archive.on('error', function(err) {
  console.error('\x1b[31m%s\x1b[0m', 'Error creating zip file:', err);
});

// Pipe archive data to the file
archive.pipe(output);

// Add the entire dist directory to the archive
archive.directory('dist/', false);

// Finalize the archive (i.e., finish writing the zip file)
archive.finalize();

console.log('\n\x1b[32m%s\x1b[0m', 'Build folder exists. Deployment files prepared successfully.');
console.log('\n\x1b[33m%s\x1b[0m', 'To deploy to shared hosting:');
console.log('\x1b[37m%s\x1b[0m', '1. Download the "dist-files.zip" file');
console.log('\x1b[37m%s\x1b[0m', '2. Extract all files from the zip to your computer');
console.log('\x1b[37m%s\x1b[0m', '3. Upload all extracted files to your web server\'s public directory');
console.log('\x1b[37m%s\x1b[0m', '4. Ensure the .htaccess file is included');
