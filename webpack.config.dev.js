// import path from 'path';
// import webpack from 'webpack';

// export default {
//   devtool:'eval-source-map',
//   entry:[
//     'webpack-hot-middleware/client',
//     path.join(__dirname,'/client/index.js')],
//   output:{
//      path: '/',
//      publicPath: '/',
//      filename: 'bundle.js'
//     },
//     plugins:[
//       new webpack.NoErrorsPlugin(),
//       new webpack.optimize.OccurrenceOrderPlugin(),
//       new webpack.LoaderOptionsPlugin(),
//       new webpack.HotModuleReplacementPlugin()
//     ],
//   module: {
//     loaders:[
//       {
//         test:/\.js$/,
//         include: path.join(__dirname, 'client'),
//         loaders:['react-hot-loader','babel-loader']
//       }
//     ]
//   },
//   resolve:{
//     extensions:['.js','.jsx'],
//     loaders:['react-hot-loader','babel-loader']
//   }
// }

import path from 'path'
import webpack from 'webpack';

export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js' 
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loader: require.resolve('babel-loader'),
        options: {
          // This is a feature of `babel-loader` for Webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      }
    ]
  },
  resolve: {
    extensions: [ '.js','.jsx' ]
  }
}