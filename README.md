# 恐龙快跑!

更容易嵌入的"恐龙快跑!"游戏.

恐龙快跑!(T-Rex Runner) 是 Chrome 浏览器在离线时出现的小游戏彩蛋.你可以断开网络后,在 Chrome 进入任意链接看到这个游戏.

虽然已经有人将这个游戏抽离出来了(见 https://github.com/wayou/t-rex-runner ),但为了更方便的将游戏嵌入第三方网站,于是有了这个项目.

## 如何使用

That's all:

```html
<div id="container"></div>
<script src="path/to/runner.js"></script>
<script>
 initRunner('#container');
</script>
```

## 安装

### 下载 runner.js

鼠标右键点击下面的链接并选择"链接另存为"可以下载 runner.js:

https://npmcdn.com/t-rex-runner/dist/runner.js

### 通过 NPM 安装

运行 `npm i t-rex-runner`,在 `dist` 文件夹下可以找到 `runner.js`.

## 参与开发

使用 `npm install` 安装依赖,然后:

 - 运行 `npm start` 之后打开 http://0.0.0.0:8080/ ,编辑代码时这个网页会自动刷新
 - 运行 `npm run build` 后, `dist` 文件夹下会生成 `runner.js`
