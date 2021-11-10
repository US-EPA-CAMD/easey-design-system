/*** used for created d.ts (typescript definition files) ***/
import dts from 'rollup-plugin-dts';

/*** fastest available compiler (currently) for building esnext modules ***/
import esbuild from 'rollup-plugin-esbuild';

/*** used to convert accompanying scss to css ***/
//import bundleScss from 'rollup-plugin-bundle-scss';
import postcss from 'rollup-plugin-postcss';

/*** resolves node_module resolutions ***/
import resolve from '@rollup/plugin-node-resolve';

/*** convert commonjs to es6 ***/
import commonjs from '@rollup/plugin-commonjs';

/*** integrate with typescript ***/
import typescript from '@rollup/plugin-typescript';

import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';

// *** save package.json locally to refer to its members
const packageJson = require('./package.json');

/***** GENERATE BUNDLE *****/
// *** bundle wrapper, adds general parameters to each generated individual bundle
const bundle = (config) => ({
  ...config,
  input: 'src/components/index.ts',
  external: ['react', 'react-dom'],
});

// *** rollup config, consisting of 2 sub-bundles
const rollupConfig = [
  // * javascript sub-bundle
  bundle({
    plugins: [
      resolve(),
      esbuild(),
      commonjs(),
      typescript({
        declaration: true,
        declarationDir: 'lib',
      }),
      postcss({
        extract: false,
        modules: false,
        use: ['sass'],
      }),
      url(),
      svgr(),
    ],
    output: [
      // common javascript (support for apps using old CJS standard)
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
        name: 'react-ts-lib',
      },
      // ecmascript (more modern ESM standard)
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
  }),
  // * typescript sub-bundle
  bundle({
    plugins: [
      resolve(),
      dts(),
      commonjs(),
      typescript({
        declaration: true,
        declarationDir: 'lib',
      }),
      postcss({
        extract: true,
        modules: false,
        use: ['sass'],
      }),
      url(),
      svgr(),
    ],
    output: {
      file: packageJson.types,
      format: 'esm',
      sourcemap: true,
    },
  }),
];

export default rollupConfig;
