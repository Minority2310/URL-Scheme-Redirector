# URL-Scheme-Redirector
> Convert scheme URLs to HTTP redirect URLs

# Usage
> This project aims to solve the issue where specific URL formats generated by some applications cannot be correctly recognized and effectively redirected.

# Example
> Hyperlinks generated by SiYuan notes may not be recognized by some applications. The webpage deployed by this project can perform the conversion. The converted links support redirecting to applications.

![image](https://github.com/user-attachments/assets/2b1b4041-b5d7-4c33-a265-f575b68e257a)
![image](https://github.com/user-attachments/assets/af6642a7-07f1-4e5c-8dc4-903904c75853)
![image](https://github.com/user-attachments/assets/e7b1e53b-b226-4fce-8364-8099e0058560)

# Deploy
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
