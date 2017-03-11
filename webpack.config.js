// 🎌 WE'RE USING WEBPACK TO TRANSPILE AND ROLL UP MODULES 🎌

module.exports = {
  entry: {
    // 🎌 OUR SOURCE FILE 🎌
    jsSource: './js/source.js'
  },
  output: {
    // 🎌 OUR DESTINATION 🎌
    filename: './js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }
    ]
  }
}
