const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: '/src/main.js',
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
      {
        test: /\.css$/i,
        // css-loader is responsible for to import stylesheer into the files, and style-loader is responsible for to inject those stylesheet into index.js
        use: ['style-loader', 'css-loader'], // these loaders gets loaded from right to left
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  /* this says I am going to generate a file index.html, 
  and then I am going to take file name and the path where you defined bundle.js(defined path in output) and inject that into created index.html*/
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
  //mode: 'development', // or production
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
}

// LOADERS

/* loaders - like loading stylesheets, svgs,e tc
the job of the loader to simply work into the things while things are getting loaded,
before final js is beign created before that, the configuration we need is done by loader

rules is an array of multiple objects,
for ex. for first rule of svg, since javascript can't directly load svg, we are telling here that whenever there is an svg
use svg-inline-loader for that.
*/

// PLUGINS
/*
Loaders are something which does something before final compilation is being done,
but plugins are something that does things after words for you

now we need somthing that inject our js files into index.html
for that we have plugin that do this thing -- html-webpack-plugin
*/

// in package.json, specify the scripts to run the webpack
