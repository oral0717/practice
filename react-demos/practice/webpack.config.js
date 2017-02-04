// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app/main.js',// 入口文件
	output: {
		path: __dirname + '/public',// 打包后的文件存放的地方
		filename: 'bundle.js'// 打包后输出文件的文件名
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules!postcss'
			},
			{
				test: /\.styl$/,
			  loader: 'style-loader!css-loader?modules&localIdentName=[path][name]-[local]-[hash:base64:5]!stylus-loader'
			}
		]
	},

	postcss: [
		require('autoprefixer')
	],
	devServer: {
		contentBase: './public',// 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在的目录
		port: 8080,// 监听端口
		colors: true,// 使终端输出的文件是彩色的
		historyApiFallback: true,// 依赖于HTML5 history API，如果设置为true,所有的跳转将指向index.html,单页应用有用
		inline: true// 当源文件改变时会自动刷新页面
	}
}
