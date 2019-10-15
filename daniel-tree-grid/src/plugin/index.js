var myPlugin = Object.create(null)
myPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    console.log('我是全局方法')
  }

  // 2. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    console.log('我是实例方法')
  }
}
export default myPlugin
