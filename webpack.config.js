const path = require('path');
require('jquery');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const TsConfigPathsPlugin = require('awesome-typescript-loader');

const DEV = process.env.NODE_ENV === 'dev';
const PROD = process.env.NODE_ENV === 'prod';

const entry = [path.resolve(__dirname, 'src/index.tsx')];
const outputFileName = DEV? 'bundle.js': 'bundle-[hash].js';
const vendorFileName = DEV? 'vendor-bundle.js': 'vendor-bundle-[hash].js';
const cssFileName = DEV? 'style.css': 'style-[hash].css';

const webpackConfig = {
  entry,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFileName,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader!sass-loader',
        }),
      }, {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader', 'ts-loader?silent=true'],
      }, {
        test: /\.(otf|eot|svg|ttf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: { name: '/assets/fonts/[name].[ext]' },
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ],
  },

  // postcss: [autoprefixer],

  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
  },

  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      title: '',
      template: 'src/indexTemplate.ejs',
      inject: 'body',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: vendorFileName,
    }),
    
    new ExtractTextPlugin({
      filename: cssFileName,
      allChunks: true,
    }),
  ],

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};

if (DEV) {
  webpackConfig.devtool = "source-map";
  webpackConfig.module.rules.unshift({
    enforce: 'pre', test: /\.js$/, loader: "source-map-loader"
  });
  webpackConfig.devServer = {
    contentBase: './dist',
    hot: true,
    hotOnly: true,
    inline: true,
  };
  webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());
}

if (PROD) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    })
  )
}

module.exports = webpackConfig;
