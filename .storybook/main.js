export default {
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      legacyRootApi: true
    }
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  core: {
    builder: '@storybook/builder-vite',
  }
}