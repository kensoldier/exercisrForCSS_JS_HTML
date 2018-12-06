const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
	
    rules: [
      {
        test: /\.css|scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
			},
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		],
		
  }
	  ,
	  devServer: {
		port: 9000, // 端口
		open:true
		},
	 plugins: [
    new HtmlWebpackPlugin({
      title: 'ken', // 默认值：Webpack App
      filename: 'index.html', // 默认值： 'index.html'
      template: path.resolve(__dirname, 'src/main.html'),
      minify: {
        collapseWhitespace: false,
        removeComments: true, // 是否移除注释
        removeAttributeQuotes: true // 移除属性的引号
      }
	}),
	new ExtractTextPlugin({
		filename: './css/indes.css'

	})
  ]
}