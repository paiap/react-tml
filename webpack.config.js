const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.j|tsx$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
    client: {
      progress: true
    }
  },
  mode: 'development'
};
