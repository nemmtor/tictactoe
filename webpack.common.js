const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            utils: path.resolve(__dirname, 'src/utils'),
            images: path.resolve(__dirname, 'src/assets/images'),
            styles: path.resolve(__dirname, 'src/assets/styles'),
        },
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
});
