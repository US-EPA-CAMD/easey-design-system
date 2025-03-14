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
    rollupOptions: {
      input: resolve(__dirname, 'src/index.ts'),
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        // Ensure that the output is not in ES module format for CommonJS
        exports: 'named',
        interop: 'auto'
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