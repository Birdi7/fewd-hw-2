const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "my-first-webpack.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        use: "raw-loader",
      },
    ],
  },
  mode: "development",
  externals: ["react"],
};
