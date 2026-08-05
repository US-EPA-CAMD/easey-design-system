const removePublishDirectory = (path) => path.replace(/^(\.\/)?lib\//, './');

export const createPublishManifest = (sourceManifest) => {
  const manifest = {
    ...sourceManifest,
    exports: {
      ...sourceManifest.exports,
      '.': {
        ...sourceManifest.exports['.'],
      },
    },
  };

  manifest.main = removePublishDirectory(manifest.main);
  manifest.module = removePublishDirectory(manifest.module);
  manifest.types = removePublishDirectory(manifest.types);

  for (const [condition, path] of Object.entries(manifest.exports['.'])) {
    manifest.exports['.'][condition] = removePublishDirectory(path);
  }

  return manifest;
};
