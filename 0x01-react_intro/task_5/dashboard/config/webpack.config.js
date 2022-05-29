const path = require('path');
module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMaps: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [],
          },
        },
      },
    ],
  },
  watch: true,
  watchOptions: {
    ignored: '/node_modules/',
  },
  devServer: {
    static: path.join(__dirname, '../dist'),
    compress: false,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
};
