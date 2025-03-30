
# Combat Power Calculator

A comprehensive tool for calculating the Combat Power (CP) of Pokémon in Pokémon GO.

## Deployment to Shared Hosting

### Build and Prepare Files

1. Install dependencies if you haven't already:
   ```
   npm install
   ```

2. Run the build command:
   ```
   npm run build
   ```

3. Run the deployment helper script:
   ```
   node deploy.js
   ```

4. The build process will create a `dist` folder containing all the production-ready static files, and the deploy script will copy necessary configuration files.

### Upload Files

1. Connect to your shared hosting using FTP/SFTP client (like FileZilla, Cyberduck, etc.)

2. Upload all files from the `dist` folder to your shared hosting environment's public directory (often called `public_html`, `www`, or `htdocs`).

3. Important: Make sure the `.htaccess` file is uploaded to the root directory of your website. This file is crucial for proper routing of the single-page application.

### Set Permissions

1. For files: Set permissions to 644 (rw-r--r--)
2. For directories: Set permissions to 755 (rwxr-xr-x)

Most FTP clients allow you to set these permissions by right-clicking on files or directories.

### DNS and Domain Configuration

1. Point your domain to your hosting provider according to their instructions
2. If using a subdomain, create the appropriate DNS records

### Post-Deployment Checklist

- Verify that all pages are accessible through direct URLs
- Check that all internal links work correctly
- Test the site on multiple devices and browsers
- Validate that SEO meta tags are correctly displayed
- Ensure the Combat Power Calculator functions properly

## Important Files for Shared Hosting

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
