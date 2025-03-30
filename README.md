
# Combat Power Calculator

A comprehensive tool for calculating the Combat Power (CP) of Pokémon in Pokémon GO.

## Deployment to Shared Hosting

### Build Instructions

1. Run the build command:
   ```
   npm run build
   ```

2. The build process will create a `dist` folder containing all the production-ready static files.

3. Upload all files from the `dist` folder to your shared hosting environment's public directory (often called `public_html`, `www`, or `htdocs`).

4. Ensure the `.htaccess` file is uploaded to the root directory of your website.

### Important Files

- `index.html`: Main HTML file
- `.htaccess`: Apache configuration for SPA routing
- `assets/`: Folder containing all compiled JS, CSS, and media files
- `robots.txt`: Instructions for search engine crawlers
- `sitemap.xml`: Site structure information for search engines

### Post-Deployment Checklist

- Verify that all pages are accessible through direct URLs
- Check that all internal links work correctly
- Test the site on multiple devices and browsers
- Validate that SEO meta tags are correctly displayed
- Ensure the Combat Power Calculator functions properly

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
