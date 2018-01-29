var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      './spec/tests.webpack.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      './spec/tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['dots', 'junit', 'coverage'],
    singleRun: true,
    junitReporter: {
        outputDir: '',
        outputFile: undefined,
        suite: '',
        useBrowserName: true
    },
    coverageReporter: {
    	 reporters: [{
             type: 'html',
             dir: 'coverage/'
         }, {
             type: 'lcov',
             dir: 'coverage/'
         }, {
             type: 'cobertura',
             dir: 'coverage/'
         }]
    },
    webpack: {
      module: {
        loaders: [
          {
              test: /.html$/,
              loader: 'ngtemplate?relativeTo=/app!html?root=' + __dirname + '/../app'
          },
          {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
          },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.(png|woff|woff2|eot|ttf|gif|svg)$/, loader: 'url-loader?limit=100000' },
         
          {
              test: /\.png$/,
              loader: 'file-loader'
          }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /(test|node_modules)/,
                loader: 'isparta-loader'
            },
            {
                test: /test.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
      },
      resolve: {
          root: path.resolve(__dirname, '../app/'),
          extensions: ['', '.js']
      },
      plugins: [
          new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery'
          })
      ],
      watch: true,
      sassLoader: {
          includePaths: [path.resolve(__dirname, "../app")]
      },
      isparta: {
          babel: {
              presets: 'es2015'
          }
      }
    },
    webpackServer: {
      noInfo: true,
    }
  });
};
