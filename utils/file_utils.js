//读取文件方法
const fs = require("fs")
//   读取文件内容
module.exports.getFileJsonData = (filePath)=> {
   try{
    return fs.readFileSync(filePath,'utf-8')
   }catch(err){
    return {
        message:"读取文件失败，文件资源不存在",
        status: 404
    }
   }
}