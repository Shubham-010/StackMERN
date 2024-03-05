const path = require('path');

module.exports = {
    entry: './src/index.js', // Your entry point file
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output filename
    },
    // Other webpack configurations such as loaders, plugins, etc.
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify")
        }
    }
};
