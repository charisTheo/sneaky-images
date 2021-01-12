
// ? https://www.npmjs.com/package/next-workbox-webpack-plugin
// const nextWorkboxWebpackPlugin = require('next-workbox-webpack-plugin');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  webpack: config => {
    config.plugins.push(
      new InjectManifest({
        swSrc: 'service-worker.js',
        // exclude: ['']
      }),
    )

    return config
  },
}
