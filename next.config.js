const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
module.exports = withPlugins([withImages], {
  target: 'serverless',
  // env: {
  //   GOOGLE_PLACES_API_KEY: ""
  // },
  webpack: (config) => {
    config.node = {
    fs: "empty",
  };
  config.module.rules.push({
    test: /\.(glb|gltf|bin)$/,
    use: {
      loader: "file-loader",
    },
  });
  config.plugins.push(
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }));
  return config;
  },
});