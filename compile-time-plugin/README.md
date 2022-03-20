# compile-time-plugin

A webpack plugin ,show the compilation time in the console.

## Installation

```bash
npm install --save-dev compile-time-plugin
```

## Usage

```js

const compileTime = require('compile-time-plugin');


plugins: [
    //...
    new compileTime(),
],

```
