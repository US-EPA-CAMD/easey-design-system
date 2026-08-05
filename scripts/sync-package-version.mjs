import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { syncSourceManifestVersion } from './package-manifest.js';

const source = fileURLToPath(new URL('../package.json', import.meta.url));
const publish = fileURLToPath(new URL('../lib/package.json', import.meta.url));
const sourceManifest = JSON.parse(await readFile(source, 'utf8'));
const publishManifest = JSON.parse(await readFile(publish, 'utf8'));
const updatedManifest = syncSourceManifestVersion(
  sourceManifest,
  publishManifest
);

await writeFile(source, `${JSON.stringify(updatedManifest, null, 2)}\n`);
