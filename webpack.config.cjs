const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',            
  output: {
    filename: 'main.js',               
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development',  
  devServer: {
    static: './dist',
    open: true,
    port: 8080,
    compress: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            sourceType: 'unambiguous',
            presets: [
              ['@babel/preset-env'],  
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'), 
    }),
  ],
};