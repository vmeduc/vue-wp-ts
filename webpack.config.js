const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'output'),
    },
	module: {
		rules: [
            {
                test: /\.ts$/, 
                loader: 'ts-loader'
            },
            {
                test: /\.vue$/, 
                use: 'vue-loader'
            }
		]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules')
        ]
    },
    plugins: [new VueLoaderPlugin()]
};