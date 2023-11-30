# vue-tj

This template should help get you started developing with Vue 3 in Vite.

## 技术栈

```sh
vue3、vite、Ant-Design-Vue、sass、WindiCss、pinia、vue-router
```

## 提交规范

```sh
feat：新功能
fix：修补 BUG
docs：修改文档，比如 README, CHANGELOG, CONTRIBUTE 等等
style：不改变代码逻辑 (仅仅修改了空格、格式缩进、逗号等等)
refactor：重构（既不修复错误也不添加功能）
perf：优化相关，比如提升性能、体验
test：增加测试，包括单元测试、集成测试等
build：构建系统或外部依赖项的更改
ci：自动化流程配置或脚本修改
chore：非 src 和 test 的修改，发布版本等
revert：恢复先前的提交
```

## 获取代码

```sh
git clone http://172.16.10.190:8090/gaozhuning/vue3template.git
```

### 运行

```sh
npm run dev
```

### 打包

```sh
npm run build
```

### 预览打包后的项目

```sh
npm run preview
```

## 环境变量配置

```sh
.env 所有环境适用
.env.development 开发环境使用
.env.production 生产环境使用
```

### 如何新增一个可动态修改的配置项

```sh
1.在 .env 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 VITE_GLOB_开头
2.useGlobSetting 函数中添加刚新增的返回值即可
```

### 路由

```sh
项目路由配置存放于 src/router/routes 下面。 src/router/routes/modules用于存放路由模块，在该目录下的文件会自动注册。
```
