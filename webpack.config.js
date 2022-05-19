const path  = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// main config object
module.exports = {
    // entry is the root of the bundle and the beginning of the dependency graph
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schdule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },

    // where we want the output bundle form entry to be placed
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
   
    // tell webpack that we are using libarie's global variables (i.e: jquery) in this case
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }), 
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        })
    ],
    
    devServer: {
        static: {
          directory: path.join(__dirname, ""),
        },
    },

    // the way webpack will run 
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jpg$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name (file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function(url) {
                                return url.replace("../", 'assets')
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    }
};