// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let getResponse = await got('http://121.5.168.45:8081/api/hello')
  return getResponse.body
}