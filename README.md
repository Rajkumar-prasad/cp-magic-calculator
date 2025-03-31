
# Combat Power Calculator

A comprehensive tool for calculating the Combat Power (CP) of Pokémon in Pokémon GO.

## Quick Start Deployment Guide

### For Non-Technical Users

1. Download and install Node.js from [nodejs.org](https://nodejs.org/) (choose the "LTS" version)

2. After installation, download your project files and extract them to a folder

3. Open a command prompt or terminal:
   - Windows: Press Windows+R, type "cmd" and press Enter
   - Mac: Open Terminal from Applications > Utilities

4. Navigate to your project folder (Use the `cd` command followed by the path to your folder)
   ```
   cd path/to/your/folder
   ```

5. Run this single command:
   ```
   node deploy.js
   ```

6. The script will:
   - Install all required dependencies
   - Build the project
   - Create a `dist-files.zip` file with all the files needed for your website
   - Try to open the folder containing the zip file automatically

7. Upload this zip file to your web hosting control panel and extract it there

### What the Script Does

The `deploy.js` script handles everything for you:
- Installs all necessary dependencies
- Builds the project
- Copies important configuration files
- Creates a downloadable zip file with all the files your website needs
- Provides clear instructions for uploading to your hosting provider

### Troubleshooting

If you encounter any issues:

1. Make sure Node.js is installed correctly (type `node -v` in your terminal to check)
2. If the automatic script fails, try running these commands one by one:
   ```
   npm install
   npm run build
   node deploy.js
   ```
3. If you still have issues, contact your web hosting provider for assistance with uploading and extracting the zip file

## Detailed Technical Documentation

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:8080`

### Troubleshooting Common Issues

#### 404 Page Not Found Errors

If you're experiencing 404 errors when navigating to routes directly, make sure:
- The `.htaccess` file was properly uploaded
- Your hosting has `mod_rewrite` enabled
- AllowOverride is set to "All" in your Apache configuration

#### Missing Styles or Scripts

If styles or scripts are not loading:
- Check browser console for path errors
- Verify that all files in the `assets` folder were uploaded
- Make sure file permissions allow reading (644 for files)

## Contact Support

If you encounter any issues during deployment, please contact us through the website contact form.
