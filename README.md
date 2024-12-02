# URL-Scheme-Redirector
> Convert scheme URLs to HTTP redirect URLs

To deploy to Cloudflare Pages:

1. First, build your project locally using `npm run build`
2. Go to the Cloudflare Dashboard ([https://dash.cloudflare.com](https://dash.cloudflare.com/))
3. Navigate to Pages
4. Click "Create a project"
5. Connect your GitHub repository or upload your build output directory (`dist`)
6. Configure your build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Add environment variable: Name: `NODE_VERSION` Value: `18`
7. Deploy!
