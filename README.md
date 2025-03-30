
# Combat Power Calculator

A comprehensive tool for calculating the Combat Power (CP) of Pokémon in Pokémon GO.

## Deployment to Shared Hosting

### For Non-Technical Users

1. Install Node.js from [nodejs.org](https://nodejs.org/) if you haven't already

2. Open a command prompt or terminal:
   - Windows: Press Windows+R, type "cmd" and press Enter
   - Mac: Open Terminal from Applications > Utilities

3. Navigate to your project folder (where the files are located)

4. Run these commands one by one:
   ```
   npm install archiver
   npm install
   npm run build
   node deploy.js
   ```

5. After running these commands, you will have a file named `dist-files.zip` in your project folder

6. Download this zip file to your computer

7. Log in to your web hosting control panel (like cPanel)

8. Use the File Manager in your hosting control panel to:
   - Navigate to your website's public directory (often called "public_html", "www", or "htdocs")
   - Upload and extract the zip file contents to this directory

9. That's it! Your website should now be live at your domain

### For Technical Users

1. Install dependencies if you haven't already:
   ```
   npm install
   npm install archiver
   ```

2. Run the build command:
   ```
   npm run build
   ```

3. Run the deployment helper script:
   ```
   node deploy.js
   ```

4. The build process will create a `dist` folder containing all the production-ready static files, and the deploy script will:
   - Copy necessary configuration files
   - Create a downloadable zip file of all deployment files called `dist-files.zip`

5. Upload the contents of the zip file to your shared hosting environment's public directory

### Important Files for Shared Hosting

- `index.html`: Main HTML file
- `.htaccess`: Apache configuration for SPA routing
- `assets/`: Folder containing all compiled JS, CSS, and media files
- `robots.txt`: Instructions for search engine crawlers
- `sitemap.xml`: Site structure information for search engines

## Troubleshooting Common Issues

### 404 Page Not Found Errors

If you're experiencing 404 errors when navigating to routes directly, make sure:
- The `.htaccess` file was properly uploaded
- Your hosting has `mod_rewrite` enabled
- AllowOverride is set to "All" in your Apache configuration

### Missing Styles or Scripts

If styles or scripts are not loading:
- Check browser console for path errors
- Verify that all files in the `assets` folder were uploaded
- Make sure file permissions allow reading (644 for files)

## Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:8080`

## Contact Support

If you encounter any issues during deployment, please contact us through the website contact form.
