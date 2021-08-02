const {join} = require('path')
const {getFileJsonData} = require("../utils/file_utils")
module.exports = async (ctx,next)=>{
 // 根据url
    const {url} = ctx.request
    let filePath = url.replace('/api','')
    filePath = '../data'+filePath+'.json'
    filePath = join(__dirname,filePath)
    const res = getFileJsonData(filePath)
    ctx.body = res
    await next()
}