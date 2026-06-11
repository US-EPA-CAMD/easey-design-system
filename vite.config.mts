import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';


import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'lib',
      insertTypesEntry: true
    })
  ],
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EaseyDesignSystem',
      fileName: (format) => {
        if (format === 'es') {
          return 'index.esm.js';
        } else if (format === 'cjs') {
          return 'index.js';
        }
        return `index.${format}.js`;
      },
      formats: ['es', 'cjs'] // Specify the formats you want to generate
    },
    rolldownOptions: {
      input: resolve(__dirname, 'src/index.ts'),
      // Externalize React AND react-uswds. react-uswds is CJS-only and does `require("react")`;
      // Rolldown intentionally keeps an external `require()` as-is, so bundling react-uswds here
      // leaks that call into consumers' browser bundles (crash). Externalizing it means the
      // consuming app bundles react-uswds itself (where React is in-graph, not external), which
      // resolves the require cleanly. react-uswds must therefore be declared as a runtime
      // dependency/peerDependency of this package (see package.json).
      external: [
        /^react(\/|$)/,
        /^react-dom(\/|$)/,
        /^@trussworks\/react-uswds(\/|$)/,
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        // Ensure that the output is not in ES module format for CommonJS
        exports: 'named'
        // `interop` is not a valid Rolldown option in Vite 8 (it warned and was ignored).
        // 'auto' was already the default behavior, so dropping it does not change output.
      }
    },
    cssCodeSplit: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          './node_modules/@uswds',
          './node_modules/@uswds/uswds/packages',
        ],
      }
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
});