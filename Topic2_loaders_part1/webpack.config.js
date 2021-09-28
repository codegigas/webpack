const path = require("path");

let config = {
  mode: 'production',
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    compress: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env", 
                {
                  useBuiltIns: 'usage',
                  corejs: "3"
                }
              ]
            ]
          }
        }
      },
    ]
  }
}

module.exports = config;