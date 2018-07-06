import axios from 'axios'
import {
    Message
} from 'element-ui'
// import store from '../store'
// import {
//     getToken
// } from '@/utils/auth'

axios.defaults.withCredentials = true
    // 创建axios实例
const service = axios.create({
    baseURL: "", // api的base_url
    timeout: 30000 // 请求超时时间
})

// respone拦截器
service.interceptors.response.use(
    response => {

        const res = response.data // 返回的数据资源

        if (res.status === false) { // 数据资源状态

            // console.log(res.data); // 数据资源的可用数据

            // 弹框提示
            Message({
                message: res.data.errormsg,
                type: 'error',
                duration: 5 * 1000
            })

            // 810: 过期了 重新登录;
            if (res.data.code === 810) {

                Message({
                    message: res.data.errormsg,
                    type: 'error',
                    duration: 5 * 1000
                })

                // store.dispatch('FedLogOut').then(() => {
                //     location.reload() // 重新实例化vue-router对象
                // })

            }

            // return Promise.reject('error')

        }
        // else {
        //   // let successMsg = res.data.msg ? '数据加载完毕' : res.data.msg
        //   // Message({
        //   //   message: successMsg,
        //   //   type: 'success',
        //   //   duration: 1 * 1000
        //   // })

        //   return response.data
        // }
        return res

    },
    // 非200状态（系统错误） 走下面 需要 catch 捕获
    error => {

        console.log('err' + error) // for debug
        Message({
            message: '系统异常',
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service