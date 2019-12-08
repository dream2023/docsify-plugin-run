# docsify-plugin-run | docsify 在线运行 Vue 单文件

## 🍏 介绍

`docsify-plugin-run` 通过对 [vue-run-sfc](https://github.com/dream2023/vue-run-sfc) 的封装, 实现了 docsify 在线运行和编辑 Vue 单文件的能力, 简直是写 DEMO 福音, 再也不用担心 `JSFiddle` 或 `Codepen` 无法访问了.

```html
``html run
<template>
  <h2 class="title">{{name}} DEMO利器!</h2>
</template>
<script>
  export default {
    data () {
      return {
        name: 'docsify-plugin-run'
      }
    }
  }
</script>
<style>
  .title {
    color: #42b983;
  }
</style>
``  <== 这里和上面的 ` 有 3 个
```

## DEMO & DOC
[https://dream2023.github.io/docsify-plugin-run/](https://dream2023.github.io/docsify-plugin-run/)

## 🍎 使用

```html
<script>
  window.$docsify = {
    // 配置, 更多属性解释请往下面翻 ↓
    run: {
      themeColor: 'green',
      themeBorderColor: '#eee',
      reverse: true,
      // ...
    }
  }
</script>

<!-- 引入Vue -->
<script src="//unpkg.com/vue/dist/vue.min.js"></script>
<!-- 引入 vue-run-sfc -->
<script src="//unpkg.com/vue-run-sfc"></script>
<!-- docsify -->
<script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
```

## 🍊示例

### 全局配置: 运行 element-ui

```html
<script>
  window.$docsify = {
    run: {
      jsLabs: ['https://unpkg.com/element-ui/lib/index.js'],
      cssLabs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
    }
  }
</script>
```

```html
``html run
<template>
  <el-tabs type="border-card">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
``  <== 这里和上面的 ` 有 3 个
```

### 局部配置: 自定义显示

```html
``html run [title=局部配置] [height=200px] [row=true]
<template>
  <div>通过局部配置实现<b>高度自定义</b>和<b>左右布局</b></div>
</template>
<style>
b {
  color: #42b983;
}
</style>
`` <== 这里和上面的 ` 有 3 个
```

## 🍇 配置属性列表

具体属性请参考: [vue-run-sfc](https://github.com/dream2023/vue-run-sfc#props-%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E)

```js
{
  /**
   * js 库
   * @example: ['https://unpkg.com/element-ui/lib/index.js']
   */
  jsLabs: Array,

  /**
   * css 库
   * @example: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css']
   */
  cssLabs: Array,

  /**
   * js 字符串
   * @example: 'alert(1)'
   */
  js: [Array, String],

  /**
   * css 字符串
   * @example: 'body { color: red }'
   */
  css: [Array, String],

  // 主题色
  // 默认值为: #42b983
  themeColor: {
    type: String,
    default: '#42b983'
  },

  // 主题色
  // 默认值为: #42b983
  themeBorderColor: {
    type: String,
    default: 'rgba(0,0,0,.07)'
  },

  /**
   * 代码编辑器和效果预览排列方式
   * 当为 false 时, 上下排列
   * 当为 true 时, 左右排列
   */
  row: {
    type: Boolean,
    default: undefined
  },

  /**
   * 当 `row` 为 true 时, 编辑区和展示区上下位置
   * 当为 false 时, 编辑器在下, 展示区在上
   * 当为 true 时, 编辑器在上, 展示区在下
   */
  reverse: Boolean,

  /**
   * 高度
   * @example: '400px'
   */
  height: String,

  /**
   * 初始加载是否打开编辑区
   * 当为 false 时, 默认是关闭编辑区
   * 当为 true 时, 默认是打开编辑区
   */
  open: Boolean,
  /**
   * 是否隐藏头部
   */
  isHideHeader: Boolean
}
```

## 相关链接

- [vue-run-sfc](https://github.com/dream2023/vue-run-sfc)
- [vuep.run](http://vuep.run/)
