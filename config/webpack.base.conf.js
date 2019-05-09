const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin');
// const StylelintPlugin = require('stylelint-webpack-plugin')
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
var mainPath = path.resolve(__dirname, '..', 'src', 'main.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: mainPath,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname + '/dist/',
    hot: true,
    host: 'localhost',
    port: 8080
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  // optimization: {
  //   sideEffects: false,
  //   splitChunks: {
  //     hidePathInfo: false,
  //     minSize: 30000
  //   }
  // },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.png', '.jpg', '.jpeg', '.gif', '.svg'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.DedupePlugin(), // dedupe similar code
    // new webpack.optimize.UglifyJsPlugin(), // minify everything
    // new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(),
    // new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new StylelintPlugin({
    //   configFile: '.stylelintrc',
    //   files: [
    //     '**/*.vue',
    //     '**/*.scss'
    //   ],
    //   syntax: [
    //     'scss'
    //   ]
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: 3000,
    //   proxy: 'http://localhost:8080/',
    //   reload: false
    // // })
    // new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
