const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const dist = "public";

module.exports = (env, argv) => {
  return {
    entry: './src/js/main.js',
    output: {
      path: path.resolve(__dirname, dist, 'js'),
      publicPath: '/js/',
      filename: 'project.min.js',
      chunkFilename: '[chunkhash].min.js'
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: {
            plugins: ["lodash"],
            presets: ["@babel/preset-env"]
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            (env.WEBPACK_SERVE) ? "style-loader" :
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/css/'
                }
              },
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '../css/styles.min.css',
        chunkFilename: '../css/[chunkhash].min.css'
      }),
      new LodashModuleReplacementPlugin({
        'collections': true,
        'paths': true,
        'shorthands': true,
        'caching': true,
        'cloning': true
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 2017,
            warnings: false,
            parse: {},
            compress: {},
            mangle: true
          }
        }),
        new CssMinimizerPlugin()
      ]
    },
    devtool: (argv.mode == 'production') ? '' : 'eval-source-map'
  };
};
