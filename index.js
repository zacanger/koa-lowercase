require('babel-register')({
  babelrc: false
, presets: [ require('babel-preset-latest') ]
, plugins: [
    require('babel-plugin-transform-es2015-modules-commonjs')
  , require('babel-plugin-transform-async-to-generator')
  ]
})
require('babel-polyfill')
module.exports = require('./src')
