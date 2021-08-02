const Koa = require('koa')
const app = new Koa()
// 获取总时间
const responseDuration = require('./middleware/koa_reponse_duration')
// 设置头部
const responseHeader = require('./middleware/koa_reponse_header')
// 读取文件
const responseData = require('./middleware/koa_response_data')
app.use(responseDuration)
app.use(responseHeader)
app.use(responseData)
app.listen(8888,()=>{
    console.log('启动成功')
})

const webSocketService = require('./service/web_socket_server')

webSocketService.listen()