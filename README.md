# jd_components
## 1. webpack配置
##### 1. entry,output
1. filename, chunkFilename
2. [name].[hash:8].js, [name].[chunkhash:8].js
##### 2. devServer配置
1. port:9000
2. hot:true
##### 3. loader配置
  1. vue-loader
  2. vue-style-loader 插入style标签
  3. style-loader 插入style标签
  4. css-loader 
  5. babel-loader
  6. sass-loader 处理scss,sass
  7. html-loader
  8. url-loader 处理图片文件 关闭es6模块导入图片的方法，esModule: false
  9. px2rem-loader 自适应方案

##### 4. resolve别名配置，加载不同环境下vue版本，生产环境运行时版本runtime.esm版本，开发环境esm版本

##### 5. plugins配置
  1. HtmlWebpackPlugin
  2. CleanWebpackPlugin
  3. VueLoaderPlugin

##### 6. css与js分离 MiniCssExtractPlugin
1. new MiniCssExtractPlugin({filename: "styles.[contenthash:8].css"})
2. 去除vue-style-loader, style-loader

##### 7. css-loader 配置cssModule模块化

##### 8. 配置使用 postcss,autoprefix 后编译方案

##### 9. plugins配置webpack热重载，webpack打包抽取单独文件
1. new webpack.HotModuleReplacementPlugin()
2. optimization 配置抽取vendor.js,runtime.js,main.js,main.css
3. webpack打包文件可视化分析

##### 10. eslint配置
  1. eslint loader

## 2.项目目录结构
pddir/public/index.html,favicon.icon
pddir/src/views
pddir/src/components
pddir/src/layouts
pddir/src/css
pddir/src/assets
pddir/src/App.vue, main.js
pddir/src/webpack.config.js
pddir/webpack.config.js

## 3.问题
vue项目中如何使用post-css