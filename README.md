

### static 目录
放一些静态资源，如：字体、图片、css，打包的时候会直接拷贝到项目包里面。包体积优化的时候可以替换为网络资源。

### uni.scss
编译的时候会直接应用到项目中，可以在之中引入一些自定义的变量样式。开发状态下，更改文件内容需要重启项目。
- 引入
```
@import 'common/scss/index.scss';
```
一些公共的样式，建议新建一个`common`文件夹，放入其中。

### vite.config.js
使用vue3版本开发，需要打包配置的情况下使用。放在根目录，打包的时候会自动读取配置

#### unplugin-aotu-import 插件使用
在页面中通常引入一些钩子函数之类的东西，如：
```js
import { onBeforeMount, onMounted, ref } from 'vue'
import {onLoad,onShow,onReady} from '@dcloudio/uni-app'
```

配置插件之后，无需手动引入。

1. 安装依赖
```bash
npm install unplugin-auto-inport

# 安装失败 检查镜像地址
npm config set registry https://registry.npmmirror.com
```
*注意：使用插件之后，启动项目之前需要先执行`npm i` 安装依赖。* 
安装依赖后，会生成一个`node_modules`文件夹。在通过git同步代码到仓库的时候需要忽略这个文件夹。
在`.gitignore`文件中配置

2. 新建`vite.comfig.js` 进行配置
```js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
 
export default defineConfig({
    plugins: [
        uni(),        
        // 自动导入配置
        AutoImport({
            imports:[
                // 预设
                'vue',
                'uni-app'                
            ]
        })
    ]    
})
```


### 其他
苹果手机有虚拟home，存在一个安全区域。这个高度通过`env(safe-area-inset-bottom)`