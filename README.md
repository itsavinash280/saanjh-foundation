# Saanjh Foundation

Scrapbook-themed website built with React, TypeScript and Vite. The application is in the `redesign` directory.

```sh
cd redesign
npm install
npm run dev
```

Run `npm run build` from `redesign` to create a production build.

## Deploy to Netlify

Import this GitHub repository into Netlify. The root `netlify.toml` configures the `redesign` base directory, `npm run build`, and `dist` publish directory. Use Node.js 22 or later. No environment variables are required.

For a manual deploy, run `npm ci` and `npm run build` inside `redesign`, then upload the contents of `redesign/dist` to Netlify.
