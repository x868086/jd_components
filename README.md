# jd_components
## 1. webpack配置
##### 1. entry,output
##### 2. devServer配置
##### 3. loader配置
  1. vue loader
  2. css loader postcss,autoprefix 
  3. babel loader
  4. scss loader
  5. html loader
  6. url loader

##### 4. resolve别名配置，加载不同环境下vue版本，生产环境运行时版本runtime.esm版本，开发环境esm版本
##### 5. plugins配置
  1. HtmlWebpackPlugin
  2. CleanWebpackPlugin
  3. VueLoaderPlugin

##### 6. css与js分离 ExtractTextPlugin

##### 7. 配置使用px2rem方案

##### 8. css module配置

##### 9. plugins配置webpack配置项目
1. new webpack.DefinePlugin()
2. new webpack.HotModuleReplacementPlugin()
3. new webpack.NoEmitOnErrorsPlugin()
4. new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
5. new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })

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