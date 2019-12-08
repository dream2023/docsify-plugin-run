// 获取 自定义设置
const getCustomOptions = function (str) {
  const regexp = /\[(.+?)\]/g
  return (str.match(regexp) || [])
    .map(item => item.substr(1, item.length - 2).split('='))
    .reduce((acc, cur) => {
      let [key, val = true] = cur
      if (val === 'false') val = false
      if (val === 'true') val = true
      acc[key] = val
      return acc
    }, {})
}

// 替换markdown内容
const replaceContent = function (content) {
  const regexp = /^```\s*html\s+run(.*\r\n)([^]*?)```/gm
  const globalOptions = window.$docsify.run

  return content.replace(regexp, (matched, optionsStr, code) => {
    const customOptions = getCustomOptions(optionsStr.trim())
    const options = Object.assign({}, { themeColor: '#42b983', themeBorderColor: 'rgba(0,0,0,0.07)' }, globalOptions, customOptions)

    return `<vue-run-sfc v-bind='${JSON.stringify(
      options
    )}' code="${encodeURIComponent(code)}"></vue-run-sfc>`
  })
}

const install = function (hook) {
  hook.beforeEach(replaceContent)
}

$docsify.plugins = [].concat(install, $docsify.plugins)
