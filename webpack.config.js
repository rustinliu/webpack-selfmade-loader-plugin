const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CountTimePlugin = require('compile-time-plugin');

const EmptyPlugin = require('clear-output-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
    },

    module: {
        rules: [
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'ezmarkdown-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/views/index.html',
            title: 'webpack loader and plugin test',
        }),
        new EmptyPlugin({ exclude: 'a' }),
        new CountTimePlugin(),
    ],
};
