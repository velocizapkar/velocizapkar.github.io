# Personal site

React and Vite site published to GitHub Pages from `docs/`.

## Development

- `npm run dev` starts the development server on port 3000.
- `npm run lint` checks code quality.
- `npm run build` builds the site and regenerates `docs/` for deployment.
- `npm run preview` previews the Vite build locally.

## URLs and GitHub Pages

The site uses browser routing with clean paths such as `/writing` and `/research`.

Posts live under their collection, such as `/writing/research-agenda`.
The build creates directory indexes for collection pages and posts.
This lets GitHub Pages serve direct
links and refreshes without relying on a development server's routing fallback.
Directory URLs may gain a trailing slash when opened directly. `404.html` loads
the app's not-found page for unknown paths.

Add posts in `src/content/posts.js`; their static entry files are generated on
the next build. When adding a new top-level route in `src/App.jsx`, also add its
entry file in `scripts/publish-docs.mjs`.

Run `npm run build` and publish the updated `docs/` folder with the source changes.
