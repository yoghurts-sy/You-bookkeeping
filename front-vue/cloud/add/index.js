// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.ac);
  let res = await axios.post("http://121.5.168.45:8081/api/account/add",event.ac)
  return res.data
}

let account = {
  category: "衣饰",
  pay: "weChat",
  record_date: "2021/10/6",
  record_desc: "qweqwe",
  record_type: 0,
  record_value: "123.00",
  subcategory: "衣服",
  userid: "oYW2U4rZoWXP8ZlRFTnT4hfEQKlM"
}
let res = exports.main({
  ac:account
},{}).then(res=>{
  console.log(res)
})