module.exports = {
  entry: './src/index',
  output: {
    path: './dist',
    filename: 'runner.js',
    library: 'initRunner',
    libraryTarget: 'umd'
  },
  postcss: function () {
    return [ require( 'autoprefixer' ) ];
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  plugins: []
};

