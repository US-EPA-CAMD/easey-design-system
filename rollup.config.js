/*** used for created d.ts (typescript definition files) ***/
import dts from 'rollup-plugin-dts';

/*** fastest available compiler (currently) for building esnext modules ***/
import esbuild from 'rollup-plugin-esbuild';

/*** used to convert accompanying scss to css ***/
import scss from 'rollup-plugin-scss';

/*** resolves node_module resolutions ***/
import resolve from '@rollup/plugin-node-resolve';

/*** convert commonjs to es6 ***/
import commonjs from '@rollup/plugin-commonjs';

/*** integrate with typescript ***/
import typescript from '@rollup/plugin-typescript';

/*** css manipulation with ecmascript ***/
import postcss from 'rollup-plugin-postcss';

// *** save package.json locally to refer to its members
const packageJson = require('./package.json');

// *** extract the name from package.json main section and strip off the .js
const name = packageJson.main.replace(/\.js$/, '');

/***** GENERATE BUNDLE *****/
// *** bundle wrapper, adds general parameters to each generated individual bundle
const bundle = (config) => ({
  ...config,
  input: 'src/components/index.ts',
  external: [/\.scss$/, /\.css$/],
});

// *** rollup config, consisting of 2 sub-bundles
const rollupConfig = [
  // * javascript sub-bundle
  bundle({
    plugins: [
      esbuild(),
      resolve(),
      commonjs(),
      typescript({
        declaration: true,
        declarationDir: 'lib',
      }),
      scss({
        output: `${name}.css`,
      }),
      postcss(),
    ],
    output: [
      // common javascript (support for apps using old CJS standard)
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-ts-lib',
      },
      // ecmascript (more modern ESM standard)
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
  }),
  // * typescript sub-bundle
  bundle({
    plugins: [
      dts(),
      resolve(),
      commonjs(),
      typescript({
        declaration: true,
        declarationDir: 'lib',
      }),
      scss({
        output: `${name}.css`,
      }),
      postcss(),
    ],
    output: {
      file: packageJson.types,
      format: 'esm',
      sourcemap: true,
    },
  }),
];

export default rollupConfig;
