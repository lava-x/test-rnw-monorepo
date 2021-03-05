/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */
const path = require('path');

// https://github.com/martpie/next-transpile-modules/issues/101
const withTM = require('next-transpile-modules')([
    '@components/shared'
  ], {
  debug: true
})

module.exports = withTM({
  webpack: (config, { defaultLoaders }) => {
    // const resolvedBaseUrl = path.resolve(config.context, '../../')
    // // This extra config allows to use paths defined in tsconfig
    // // rather than next-transpile-modules.
    // // @link https://github.com/vercel/next.js/pull/13542
    // config.module.rules = [
    //   ...config.module.rules,
    //   {
    //     test: /\.(tsx|ts|js|mjs|jsx)$/,
    //     include: [resolvedBaseUrl],
    //     use: defaultLoaders.babel,
    //     exclude: (excludePath) => {
    //       return /node_modules/.test(excludePath)
    //     },
    //   },
    // ]

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
