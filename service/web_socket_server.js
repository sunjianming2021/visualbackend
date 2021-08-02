const {join} = require('path')
const {getFileJsonData} = require('../utils/file_utils')
const WebSocket = require('ws')
//创建webSocket 服务器对象
const ws = new WebSocket.Server({
    port: 9999
})
// 对客户端链接事件进行监听
module.exports.listen = ()=>{
    ws.on('connection',client=>{
        console.log('有客户端链接成功');
        //  对客户端的连接对象进行message事件的监听
        // msg 由客户端发给服务器的数据
        client.on('message',async msg=>{
            console.log('客户端发送的数据',msg+'')
            let payload = JSON.parse(msg)
            let {action,chartName} = payload
            switch(action){
                case 'getData':
                    let filePath = join(__dirname,'../data/'+chartName+'.json')
                    const ret = await getFileJsonData(filePath)
                    payload.data = ret
                    client.send(JSON.stringify(payload))
                    console.log(1)
                    break;
                default:
                    console.log(2,msg+'')
                    ws.clients.forEach(client=>{
                        client.send(msg+'')
                    })
                    break;

            }
          
        })
    })
}