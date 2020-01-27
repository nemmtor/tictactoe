const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/app/index.js'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            // Convert all images to .webp files
            // WARNING: Safari doesnt load .webp images!
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                loaders: [
                    'file-loader?{name: "[name].webp", outputPath: "imgs", esModule: false}',
                    'webp-loader?{quality: 80}',
                ],
            },
        ],
    },
};
