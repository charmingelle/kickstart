const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) => {
  return {
    // todo: [watch]
    // watch: true,

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,

      // todo: [hmr]
      hot: true,
    },

    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          // test: /\.css$/,

          // todo: [sass]
          test: /(\.css$)|(\.scss$)/,

          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },

            // todo: [sass]
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      // new BundleAnalyzerPlugin(),

      // todo: [hmr]
      new webpack.HotModuleReplacementPlugin(),
    ],
  }
}
