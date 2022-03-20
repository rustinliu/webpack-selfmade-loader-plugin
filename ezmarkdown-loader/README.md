# Markdown Loader

A markdown loader for webpack using markdown-it.

## Installation

```bash
npm install --save-dev ezmarkdown-loader
```

## Usage

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                        options: {
                            html: true,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/views/index.html',
        }),
    ],
};
```
