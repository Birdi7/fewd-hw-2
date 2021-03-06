// // Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = isProduction
//   ? MiniCssExtractPlugin.loader
//   : "style-loader";

// const config = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//   },
//   devServer: {
//     open: true,
//     host: "localhost",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "index.html",
//     }),

//     // Add your plugins here
//     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/i,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.css$/i,
//         use: [stylesHandler, "css-loader"],
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//         type: "asset",
//       },

//       // Add your rules for custom modules here
//       // Learn more about loaders from https://webpack.js.org/loaders/
//     ],
//   },
// };

// module.exports = () => {
//   if (isProduction) {
//     config.mode = "production";

//     config.plugins.push(new MiniCssExtractPlugin());
//   } else {
//     config.mode = "development";
//   }
//   return config;
// };

// https://www.toptal.com/react/webpack-react-tutorial-pt-1

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "my-first-webpack.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|ico)$/i,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      inject: true,
      favicon: "./public/favicon.ico",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
