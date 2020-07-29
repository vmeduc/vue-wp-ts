const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'out')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    }
};