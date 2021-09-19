const webpack = require('webpack');
const path = require('path');

webpack({
    entry: './src/ignore',
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'ignore.js'
    },
    mode: 'development',
    devtool: false,
    resolve: {
        fallback: {
            assert: false
        }
    }
}, (err, stats) => {
    if (err) console.error(err);

    console.log(stats?.toString())
});
