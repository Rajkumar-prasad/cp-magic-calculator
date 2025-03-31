
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const { execSync } = require('child_process');

// Function to check if directory exists and create it if not
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// Attempt to run the build command if dist folder doesn't exist
if (!fs.existsSync('dist')) {
  console.log('\x1b[33m%s\x1b[0m', 'Build folder not found. Attempting to run build process...');
  
  try {
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    
    console.log('Running build process...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('\x1b[32m%s\x1b[0m', 'Build completed successfully!');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'Error during build process:');
    console.error(error.message);
    console.log('\x1b[33m%s\x1b[0m', 'Please run the following commands manually:');
    console.log('1. npm install');
    console.log('2. npm run build');
    process.exit(1);
  }
}

console.log('Creating deployment package...');

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
  
  // Get absolute path to the zip file
  const zipPath = path.resolve('dist-files.zip');
  console.log('\x1b[32m%s\x1b[0m', `Your zip file is located at: ${zipPath}`);
  
  // Try to open the folder containing the zip file
  try {
    const command = process.platform === 'win32' 
      ? `explorer "${path.dirname(zipPath)}"` 
      : process.platform === 'darwin' 
        ? `open "${path.dirname(zipPath)}"` 
        : `xdg-open "${path.dirname(zipPath)}"`;
    
    execSync(command);
    console.log('\x1b[32m%s\x1b[0m', 'Opening folder containing the zip file...');
  } catch (error) {
    console.log('\x1b[33m%s\x1b[0m', 'Could not open the folder automatically. Please navigate to the project directory to find the zip file.');
  }
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

console.log('\n\x1b[32m%s\x1b[0m', 'Deployment preparation completed!');
console.log('\n\x1b[33m%s\x1b[0m', 'IMPORTANT: To deploy to shared hosting:');
console.log('\x1b[37m%s\x1b[0m', '1. Locate the "dist-files.zip" file in your project folder');
console.log('\x1b[37m%s\x1b[0m', '2. Upload this zip file to your hosting provider');
console.log('\x1b[37m%s\x1b[0m', '3. Extract all files on the server to your web server\'s public directory');
console.log('\x1b[37m%s\x1b[0m', '4. Ensure the .htaccess file is included');
