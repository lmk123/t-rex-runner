const webpack = require( 'webpack' ),
  config = require( './webpack.base.config' );

config.devtool = '#source-map';
config.watch = true;
config.devServer = {
  host: '0.0.0.0',
  contentBase: './dev'
};

module.exports = config;
