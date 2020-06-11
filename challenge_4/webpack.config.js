const path = require('path');

module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, "client", "src", "index.js")},
  output: { path: path.resolve(__dirname, "client", "dist")},
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-react' ]
          }
        }
      },
      {
        test: '/\.html$/',
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }

    ]
  },
  watch: true

  //need to bundle with babel-loader

}