const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            utils: path.resolve(__dirname, 'src/utils'),
            context: path.resolve(__dirname, 'src/context'),
            images: path.resolve(__dirname, 'src/assets/images'),
            styles: path.resolve(__dirname, 'src/assets/styles'),
            fonts: path.resolve(__dirname, 'src/assets/fonts'),
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
                test: /\.(png|jpe?g|gif)$/i,
                loaders: [
                    'file-loader?{name: "[name].webp", outputPath: "imgs", esModule: false}',
                    'webp-loader?{quality: 80}',
                ],
            },
            {
                test: /\.ico$/i,
                loader:
                    'file-loader?{name: "[name].[ext]", outputPath: "imgs", esModule: false}',
            },
            {
                test: /\.svg$/i,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.ttf$/i,
                loader: 'file-loader?name=[name].[ext]&outputPath=fonts/',
            },
        ],
    },
};
