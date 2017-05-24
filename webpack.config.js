module.exports = {

	entry: ['./app/index.js'],

	output: {

		path: __dirname + '/build',
		filename: 'bundle.js'

	},

	module:{
		loaders:[				//don't include this one if babel not installeld
			{
			loader:'babel-loader',
			test:/\.js$/,
			exclude:/node_modules/
			}

		]


	},

	devServer:{

		port:3005,
		contentBase: './build',
		inline:true


	}



}