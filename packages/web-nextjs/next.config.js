/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */
const path = require('path');

// https://github.com/martpie/next-transpile-modules/issues/101
const withTM = require('next-transpile-modules')([
    'components'
  ], {
  debug: true
})

module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
})
