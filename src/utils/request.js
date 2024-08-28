// 导入用户参数的模块
import { useUserStore } from '@/stores/user'
// 导入axios
import axios from 'axios'
// 导入路由
import router from '@/router'
// element-plus库中导入ElMessage组件或功能，以便在你的代码中使用它。ElMessage通常用于在Vue应用中显示消息提示
import { ElMessage } from 'element-plus'
// baseURL 是默认请求网址
const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  baseURL, //默认请求网址
  timeout: 100000 //timeout配置项可能用于指定axios请求的超时时间。
})

// axios请求的拦截器
// 这是设置axios请求拦截器的方法。当发出一个axios请求时，这个拦截器会被触发。
instance.interceptors.request.use(
  (config) => {
    // 把用户参数模块的所有变量和方法赋值给userStore
    const userStore = useUserStore()
    // 判断 userStore.token有没有东西，是不是空数组，是就不执行，不是就执行
    if (userStore.token) {
      // 用于设置HTTP请求的头部信息、
      // config: 这是一个对象，通常用于配置HTTP请求的参数。
      // headers: 这是config对象的一个属性，用于设置HTTP请求的头部（header）信息。
      // Authorization: 这是一个HTTP头部字段的键，通常用于提供认证信息，如令牌（token）或其他认证凭据。
      // userStore.token就是用户参数的模块中的token这个变量里面的值
      config.headers.Authorization = userStore.token
    }
    // 服务器返回的HTTP请求的配置信息
    return config
  },
  // err代表“错误”是形参  把上面获取的错误信息，传递到方法里面的形参位置  错误信息是config
  // 待定（pending）：初始状态，既没有被兑现，也没有被拒绝。
  // 已兑现（fulfilled）：意味着操作成功完成。
  // 已拒绝（rejected）：意味着操作失败。
  // Promise.reject（） 静态方法返回一个已拒绝（err）的 对象，拒绝原因为给定的参数。Promise
  (err) => Promise.reject(err)
)

// 是 Axios 库中用于设置响应拦截器的方法
instance.interceptors.response.use(
  // 函数接收一个参数res  res就是服务器传递过来的对象
  (res) => {
    // 判断res.data.code是不是等于0  等于0代表成功相反不等于0就是失败
    if (res.data.code === 0) {
      // 把服务器发来的对象,返回出去
      return res
    }
    // 组件错误提示框  ElMessage通常用于在Vue应用中显示消息提示
    // 如果有服务器发来的值就提示服务器的值,没有就提示我们自己设置的默认的
    ElMessage({ message: res.data.message || '服务异常', type: 'error' }) // message 是提示框的提示词 error代表 是错误提示框
    // Promise.reject（） 静态方法返回一个已拒绝（）的 对象
    // 返回的对象是服务器发来的 res对象里的data属性 res.data
    return Promise.reject(res.data)
  },
  // err代表“错误”是形参  把上面获取的错误信息，传递到方法里面的形参位置  错误信息是 res.data
  (err) => {
    // 组件错误提示框  ElMessage通常用于在Vue应用中显示消息提示
    // 如果有服务器发来的值就提示服务器的值,没有就提示我们自己设置的默认的
    ElMessage({
      // message 是提示框的提示词
      message: err.response.data.message || '服务异常',
      // error代表  是错误提示框
      type: 'error'
    })
    // 把错误信息是 res.data 打印到控制台
    console.log(err)
    // 判断 res.data.response 对象的 status 值是不是等于 401
    if (err.response?.status === 401) {
      // 是的话就返回到首页
      router.push('/login')
    }
    // Promise.reject（） 静态方法返回一个已拒绝（）的 对象
    // 返回的对象是服务器发来的 res对象里的data属性 res.data
    return Promise.reject(err)
  }
)
// 导出
// 默认导出 导出全部对象或方法
// 命名导出 只要命名的那个对象或方法
// 这行代码的意思是导出模块的一个默认输出。在这里，instance 是被导出的对象或变量。
export default instance
// 这行代码是导出模块中的一个命名输出。这里，baseURL 是一个变量或常量，它被命名为导出。其他模块或文件可以通过特定的名称来导入这个 baseURL。
export { baseURL }
