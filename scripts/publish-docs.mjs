import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { postCollections } from '../src/content/posts.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(root, 'dist');
const docsDir = join(root, 'docs');
const indexFile = join(docsDir, 'index.html');

// Directory indexes let static hosting serve extensionless URLs on a refresh.
const routeFiles = new Set(['404.html']);

for (const collection of Object.values(postCollections)) {
  routeFiles.add(`${collection.path.slice(1)}/index.html`);

  for (const post of collection.posts) {
    routeFiles.add(`${collection.path.slice(1)}/${post.slug}/index.html`);
  }
}

await rm(docsDir, { force: true, recursive: true });
await mkdir(docsDir, { recursive: true });
await cp(distDir, docsDir, { recursive: true });

for (const routeFile of routeFiles) {
  const target = join(docsDir, routeFile);
  await mkdir(dirname(target), { recursive: true });
  await cp(indexFile, target);
}
