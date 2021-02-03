const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.export = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: path.resolve(__dirname, 'build'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
}
