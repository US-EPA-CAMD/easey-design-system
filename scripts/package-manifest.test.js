import { createPublishManifest } from './package-manifest';

describe('createPublishManifest', () => {
  it('makes package paths relative to the publish directory', () => {
    const source = {
      main: 'lib/index.cjs',
      module: 'lib/index.esm.js',
      types: 'lib/index.d.ts',
      exports: {
        '.': {
          types: './lib/index.d.ts',
          import: './lib/index.esm.js',
          require: './lib/index.cjs',
          default: './lib/index.esm.js',
        },
      },
    };

    expect(createPublishManifest(source)).toEqual({
      main: './index.cjs',
      module: './index.esm.js',
      types: './index.d.ts',
      exports: {
        '.': {
          types: './index.d.ts',
          import: './index.esm.js',
          require: './index.cjs',
          default: './index.esm.js',
        },
      },
    });
    expect(source.main).toBe('lib/index.cjs');
  });
});
