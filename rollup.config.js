import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

import fs from 'fs';

const name = require('./package.json').main.replace(/\.js$/, '');

const extensionList = ['.js', '.ts', '.jsx', '.tsx'];

const inputFile = './src/components/index.ts';

const getFiles = (entry, inputFile, extensions = [], excludeExtensions = []) => {
  let fileNames = [];
  const dirs = fs.readdirSync(entry);

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [...fileNames, ...getFiles(path, extensions, excludeExtensions)];

      return;
    }

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

const bundle = (config) => ({
  ...config,
  input: [inputFile, ...getFiles('./src/components', inputFile, extensionList)],
  external: ['node_modules'],
});

const rollupConfig = [
  bundle({
    plugins: [
      esbuild(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'lib',
      }),
      postcss(),
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [
      dts(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'lib',
      }),
      postcss(),
    ],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
];

export default rollupConfig;
