/*** used for created d.ts (typescript definition files) ***/
import dts from 'rollup-plugin-dts';

/*** fastest available compiler (currently) for building esnext modules ***/
import esbuild from 'rollup-plugin-esbuild';

/*** resolves node_module resolutions ***/
import resolve from '@rollup/plugin-node-resolve';

/*** convert commonjs to es6 ***/
import commonjs from '@rollup/plugin-commonjs';

/*** integrate with typescript ***/
import typescript from '@rollup/plugin-typescript';

/*** css manipulation with ecmascript ***/
import postcss from 'rollup-plugin-postcss';

/*** node filestream library ***/
import fs from 'fs';

// *** extract the name from package.json main section and strip off the .js
const name = require('./package.json').main.replace(/\.js$/, '');

// *** file extensions to be included in the bundle (used by file-gathering function)
const extensionList = ['.js', '.ts', '.jsx', '.tsx'];

// *** file to be designated as 'input file'; will be used as entrypoint for compilation,
// *** and should be excluded from rest of bundle
const inputFile = './src/components/index.ts';

const getFiles = (entry, inputFile, extensions = [], excludeExtensions = []) => {
  let fileNames = [];
  const dirs = fs.readdirSync(entry);

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`;

    // *** traverse all directories recursively
    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [...fileNames, ...getFiles(path, extensions, excludeExtensions)];
      return;
    }

    // *** include in the bundle unless on the exclusion list, or if file is an entry file
    // *** NOTE: file specified as an entry file cannot be a part of the bundle
    if (
      !excludeExtensions.some((exclude) => dir.endsWith(exclude)) &&
      extensions.some((ext) => dir.endsWith(ext)) &&
      inputFile.indexOf(path) === -1
    ) {
      fileNames.push(path);
    }
  });

  return fileNames;
};

/***** GENERATED BUNDLE *****/
// *** bundle wrapper, adds general parameters to each generated individual bundle
const bundle = (config) => ({
  ...config,
  input: [inputFile, ...getFiles('./src/components', inputFile, extensionList)],
  external: ['node_modules'],
});

// *** rollup config, consisting of 2 sub-bundles
const rollupConfig = [
  // * ecmascript sub-bundle
  bundle({
    plugins: [esbuild(), resolve(), commonjs(), typescript(), postcss()],
    output: [
      // common javascript portion
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      // ecmascript portion
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  //  typescript sub-bundle
  bundle({
    plugins: [dts(), resolve(), commonjs(), typescript(), postcss()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
];

export default rollupConfig;
