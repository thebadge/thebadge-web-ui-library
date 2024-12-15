// eslint-disable-next-line @typescript-eslint/no-var-requires
import path from 'path'
// Imports the Storybook's configuration API
import type { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    '@storybook/storybook-addon-designs',
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    const alias = {
      ...config?.resolve?.alias,
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@hooks': path.resolve(__dirname, '../src/hooks/index'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@businessLogic': path.resolve(__dirname, '../src/business-logic'),
      '@helpers': path.resolve(__dirname, '../src/helpers'),
    }

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias,
      },
    }
  },
}

module.exports = config
