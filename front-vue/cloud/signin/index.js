// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

// 云函数入口函数
exports.main = async (event, context) => {
  let res = await axios.get('http://121.5.168.45:8081/api/login',{
    params:{
      code:event.code
    }
  })
  return res.data
}

let res = exports.main({
  code:"093kfPFa16aASB0m42Ga1jZFWk1kfPFE"
},{}).then(res=>{
  console.log(res)
})
