import { access, readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const publishDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '../lib');
const manifest = JSON.parse(
  await readFile(resolve(publishDirectory, 'package.json'), 'utf8')
);
const packageExport = manifest.exports?.['.'];

if (!packageExport || typeof packageExport !== 'object') {
  throw new Error('The published package must define a root export.');
}

const paths = {
  main: manifest.main,
  module: manifest.module,
  types: manifest.types,
  import: packageExport.import,
  require: packageExport.require,
  default: packageExport.default,
};

for (const [field, path] of Object.entries(paths)) {
  if (typeof path !== 'string') {
    throw new Error(`The published package is missing its ${field} path.`);
  }

  await access(resolve(publishDirectory, path));
}

if (!paths.require.endsWith('.cjs')) {
  throw new Error('The CommonJS export must use a .cjs extension.');
}

const esm = await readFile(resolve(publishDirectory, paths.import), 'utf8');
const commonJs = await readFile(resolve(publishDirectory, paths.require), 'utf8');
const reactImport = /from\s+["']react["']/;
const reactRequire = /require\s*\(\s*["']react["']\s*\)/;
const externalReactCall =
  /\(\s*["'](?:react(?:\/jsx(?:-dev)?-runtime)?|react-dom(?:\/client)?)["']\s*\)/;

if (!reactImport.test(esm) || externalReactCall.test(esm)) {
  throw new Error('The ESM build must import React without CommonJS require.');
}

if (!reactRequire.test(commonJs)) {
  throw new Error('The CommonJS build must retain its external React require.');
}

const esmModule = await import(
  pathToFileURL(resolve(publishDirectory, paths.import))
);
const commonJsModule = createRequire(import.meta.url)(
  resolve(publishDirectory, paths.require)
);

if (
  Object.keys(esmModule).length === 0 ||
  Object.keys(commonJsModule).length === 0
) {
  throw new Error('The ESM and CommonJS builds must expose named components.');
}

console.log('Verified design-system ESM and CommonJS package artifacts.');
