var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
  entry: {
    app: path.resolve(SRC_PATH, 'app.jsx')
    //for redux example
    //app: path.resolve(APP_PATH, 'index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'node_modules': path.resolve(ROOT_PATH, 'node_modules/'),
      'utils': path.resolve(SRC_PATH, 'utils/'),
      'components': path.resolve(SRC_PATH, 'components/')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
        include: SRC_PATH
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Deskmark app'
    })
  ]
}
