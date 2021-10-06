// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.userid);
  let res = await axios.get("http://121.5.168.45:8081/api/account/all",{
    params:{
      userid:event.userid
    }
  })
  return res.data
}


let res = exports.main({
  userid:"oYW2U4rZoWXP8ZlRFTnT4hfEQKlM"
},{}).then(res=>{
  console.log(res)
})