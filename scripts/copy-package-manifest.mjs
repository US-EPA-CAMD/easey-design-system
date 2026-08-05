import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { createPublishManifest } from './package-manifest.js';

const source = fileURLToPath(new URL('../package.json', import.meta.url));
const destination = fileURLToPath(new URL('../lib/package.json', import.meta.url));
const manifest = createPublishManifest(
  JSON.parse(await readFile(source, 'utf8'))
);

await writeFile(destination, `${JSON.stringify(manifest, null, 2)}\n`);
