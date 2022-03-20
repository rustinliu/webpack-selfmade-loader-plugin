# clear-output-plugin

输出 asset 到 output 目录之前清理 output 目录

## Installation

```bash
npm install --save-dev clear-output-plugin
```

## Usage

```js

const clearOutput = require('clear-output-plugin');


plugins: [
    //...
    new clearOutput({ exclude: 'a' }),
],

```

## Options

exclude:保留的文件名
