var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/app.module.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    
    module: {
        preLoaders: [
            /*{
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }*/
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate?add=true!babel',
                exclude: /node_modules/
            },
            {
                test: /.html$/,
                loader: 'ngtemplate?relativeTo=' + __dirname +'/app!html?root=' + __dirname + '/app'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?root=' + __dirname + '/app', 'autoprefixer-loader?browsers=last 2 versions', 'sass'],
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.png$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true, output: { comments: false }}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    resolve: {
        root: [path.resolve('app/'),
        	 path.resolve('node_modules/')],
        extensions: ['', '.js']
    },
    eslint: {
        failOnError: true
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./app"),path.resolve(__dirname, "./node_modules")]
    },
    devtool: '#source-map'
};
