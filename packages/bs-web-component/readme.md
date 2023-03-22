## 使用组件

### CDN引用方式（Script tag）
- 将包npm到本地，然后传到服务器上
- 引入 `<script type='module' src='https://[你的服务器地址]/dist/bs-web-component.esm.js'></script>`  index.html 的 head 中
- 然后，您可以在template、JSX、html等中的任何位置使用该元素

### 采用node模块的引用方式（Node Modules）
- 运行 `npm install bs-web-component --save`
- 引入 `<script type='module' src='node_modules/bs-web-component/dist/bs-web-component.esm.js'></script>` index.html 的 head 中
- 然后，您可以在template、JSX、html等中的任何位置使用该元素

### npm应用方式(In a stencil-starter app) 
- 运行 `npm install bs-web-component --save`
- 向npm包添加导入 `import bs-web-component;`
- 然后，您可以在template、JSX、html等中的任何位置使用该元素

