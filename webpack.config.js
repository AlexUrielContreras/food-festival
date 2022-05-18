const path  = require('path');
const webpack = require('webpack');

// main config object
module.exports = {
    // entry is the root of the bundle and the beginning of the dependency graph
    entry: './assets/js/script.js',

    // where we want the output bundle form entry to be placed
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },

    // tell webpack that we are using libarie's global variables (i.e: jquery) in this case
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],

    // the way webpack will run 
    mode: 'development'
};