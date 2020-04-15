const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: 'development',

  entry: path.join(__dirname,'./src/main.js'),
  // 启动命令 webpack
  output: {
    filename: 'bundel.[hash:16].js',
    path: path.join(__dirname, './dist'),
    // 所有模块规范都适用
    library: 'umd'
  },
  
  // 启动命令 webpack-dev-server --open --config ./webpack.config.js
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    host: '127.0.0.1',
    overlay: {errors: true},
    hot: true,
    port: 9000
  },  

  module: {
    rules:[
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test:/\.(jpg|jpeg|gif|png|svg)$/,
        use: {
          loader:'url-loader',
          options: {
            limit: 1024,
            // 关闭ES6模块导入方法，使用commonjs模块导入规范
            esModule: false,
            name: 'resources/[path][name]-[hash:16].[ext]'
          }
        }
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        include:/src/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.css$/,
        exclude:/node_modules/,
        include:/src/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      {
        test:/\.(scss|sass)$/,
        exclude:/node_modules/,
        include:/src/,
        use: ['vue-style-loader',MiniCssExtractPlugin.loader,'css-loader','sass-loader']        
      },
      {
        test:/\.vue$/,
        exclude:/node_modules/,
        include:/src/,
        use: ['vue-loader'] 
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }

    ]
  },
  resolve: {
    // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。  resolve.extensions 用于配置在尝试过程中用到的后缀列表
    extensions: [
      '.js', '.vue', '.json'
    ],
    // 通过别名来把原导入路径映射成一个新的导入路径, 指定vue文件版本类型
    // 生产环境用vue.runtime.esm.js，比完整版小30%左右，前端性能更优
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new HtmlWebpackPlugin({template: 'public/index.html'}),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: "styles.[chunkHash:16].css"})
  ]
}