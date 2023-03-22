![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# 关于本仓库

本仓库基于 ionic 公司的 Stencil。

关于 [Stencil](https://stenciljs.com/) 

# Stencil 简介

Stencil 是用于构建可重用、可扩展设计系统的工具链。生成在每个浏览器中运行的小型、快速且100%基于标准的Web Components。

Stencil 是一个使用 web Components 构建快速web应用程序的编译器.

Stencil 将最流行的前端框架的最佳概念结合到编译时而不是运行时工具中。Stencil采用TypeScript、JSX、一个微小的虚拟DOM层、高效的单向数据绑定、异步渲染管道（类似于React Fiber）和开箱即用的惰性加载，并生成100%基于标准的Web组件，可在任何支持Custom Elements v1规范的浏览器中运行。

Stencil 输出的是Web Components，因此它们可以在任何主要框架中工作，也可以在根本没有框架的情况下工作。


# Stencil Component 示例程序

使用 Stencil 构建一个独立的 Web Component 组件集合.

对此你可以访问他们的示例程序 [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) .

## 如何启动本仓库

要开始使用Stencil构建新的web组件，请将此repo克隆到新目录:

```bash
git clone https://github.com/waliu/bs-ui-kit.git BSUIKitProject
cd BSUIKitProject
git remote rm origin
```

并运行:

```bash
npm install
npm run start-r
```

要为生产构建组件，请运行:

```bash
npm run build
```

要运行组件的单元测试，请运行:

```bash
npm test
```

需要帮助吗？查看ionic Stencil的文档 [here](https://stenciljs.com/docs/my-first-component).


## 命名组件

创建新的组件标记时，建议不要在组件名称中使用“stencil”（例如：“＜stencil-datepicker＞”）。这是因为生成的组件与模具几乎没有关系；它只是一个web 组件！

相反，请使用适合您公司的前缀或一组相关组件的任何名称。例如，所有Ionic生成的web组件都使用前缀“ion”。

## 使用组件

我们建议使用使用Stencil构建的web组件有三种策略。

所有这三种策略的第一步是[向NPM发布](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Script tag

- 引入 `<script type='module' src='https://unpkg.com/bs-web-component@0.0.1/dist/bs-web-component.esm.js'></script>`  index.html 的 head 中
- 然后，您可以在template、JSX、html等中的任何位置使用该元素

### Node Modules
- 运行 `npm install my-component --save`
- 引入 `<script type='module' src='node_modules/bs-web-component/dist/bs-web-component.esm.js'></script>` index.html 的 head 中
- 然后，您可以在template、JSX、html等中的任何位置使用该元素

### In a stencil-starter app
- 运行 `npm install bs-web-component --save`
- 向npm包添加导入 `import bs-web-component;`
- 然后，您可以在template、JSX、html等中的任何位置使用该元素

### 集成到 angular 中
angular 打包文档 [点击这里](./doc/angular.md).