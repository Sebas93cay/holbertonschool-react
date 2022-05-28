const filePath = path.join(__dirname, './public/js/');
const fileName = 'bundle.js';
const PATHS = {
  src: path.join(__dirname, './src/'),
  dist: path.join(__dirname, 'public'),
};

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
    contentBase: PATHS.dist,
    compress: false,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
};
