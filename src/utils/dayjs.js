/**
 * 初始化dayjs相关配置
 */
import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

//配置使用处理相对时间
dayjs.extend(relativeTime)
//例如日期格式化
dayjs.locale('zh-cn')

/**
 * 把处理时间的代码包装为全局过滤器，然后就可以在任何组件中
 * 使用，所谓的过滤器就是一个可以在模板中调用的函数而已。
 * 在组件的模板中使用过滤器：{{xxx|relativeTime}}
 * 管道符前面的内容会作为参数传递给过滤函数
 * 过滤器的返回值会渲染到使用过滤器的模板中
 */

  //使用在得在main.js中加载到全局
Vue.filter('relativeTime',value=>{
  return dayjs(value).format('DD/MM/YYYY hh:mm:ss')
}) 