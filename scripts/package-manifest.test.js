import {
  createPublishManifest,
  syncSourceManifestVersion,
} from './package-manifest';

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

describe('syncSourceManifestVersion', () => {
  it('updates only the source version from the publish manifest', () => {
    const source = {
      version: '1.38.5',
      main: 'lib/index.cjs',
      exports: {
        '.': {
          import: './lib/index.esm.js',
          require: './lib/index.cjs',
        },
      },
    };

    expect(
      syncSourceManifestVersion(source, {
        version: '1.38.6',
        main: './index.cjs',
      })
    ).toEqual({
      version: '1.38.6',
      main: 'lib/index.cjs',
      exports: {
        '.': {
          import: './lib/index.esm.js',
          require: './lib/index.cjs',
        },
      },
    });
    expect(source.version).toBe('1.38.5');
  });

  it('requires the publish manifest version', () => {
    expect(() => syncSourceManifestVersion({}, {})).toThrow(
      'The publish manifest must define a version.'
    );
  });
});
