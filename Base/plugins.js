const pages = require('./entry')
// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let htmls = [];
Object.keys(pages).forEach(function (key) {
  let html = new HtmlWebpackPlugin({
    chunks:[key],
    template: key==='index'? 'src/index.html':`src/${key}/index.html`,
    filename: key==='index'? 'index.html':`${key}/index.html`
  })
  htmls.push(html)
});

// console.log(htmls)

module.exports = [
  ...htmls,
  new CleanWebpackPlugin()
]