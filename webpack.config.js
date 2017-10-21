const webpack = require('webpack');
const path = require('path');

const { AotPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function root(pathStr) {
	return path.join(__dirname, pathStr);
}

module.exports = function(env) {
  env = env || {};

  return {

    resolve: {
      extensions: ['.ts', '.js', '.html', '.scss', '.md', '.styl'],
    },

    devtool: 'source-map',

    entry: {
        'polyfills': root('src/polyfills.ts'),
        'app': root('src/main.webpack.ts')
      },

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: '@ngtools/webpack'
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
        },
        {
          test: /\.md$/,
          use: [
            'raw-loader',
            'markdown-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'to-string-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'sass-loader',
            }
          ]
        },
        {
          test: /\.styl$/,
          use: [
            'to-string-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'stylus-loader',
            }
          ]
        }
      ]
    },

    plugins: [
      new AotPlugin({
        tsConfigPath: root('src/tsconfig.webpack.json'),
        entryModule: root('src/app/app.module.webpack#AppModule'),
        skipCodeGeneration: env.aot ? false : true,
        defaultStyleType: 'scss'
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'polyfills']
      }),

      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, '../src')
      ),

      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],

    output: {
      path: path.join(__dirname, '../build'),
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },


    devServer: {
      historyApiFallback: true,
      stats: 'minimal',
      port: 4200
    }
  };
}
