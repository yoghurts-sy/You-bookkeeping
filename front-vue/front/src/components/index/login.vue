<template>
  <div>
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
  </div>
</template>

<script>
  import config from "../../config";

  export default {
    methods:{
        getUserInfo(e) {
            let _this = this
            let currentUser = e.target.userInfo;
            const loginUrl = config.loginUrl;
            wx.login({
                success (res) {
                    if (res.code) {
                        wx.cloud.callFunction({
                          name:"signin",
                          data:{
                            code: res.code
                          }
                        }).then(res=>{
                          let loginRes = res.result
                          currentUser['openId'] = (JSON.parse(loginRes.msg))['openid']
                               wx.setStorage({
                                   key:"userinfo",
                                   data: currentUser
                               })
                                _this.$emit('loginsuccess')
                        })

                        /*wx.request({
                            url: loginUrl,
                            data: {
                                code: res.code//代表登录用户的信息
                            },
                            success(loginRes) {
                                currentUser['openId'] = (JSON.parse(loginRes.data.msg))['openid']
                               wx.setStorage({
                                   key:"userinfo",
                                   data: currentUser
                               })
                                _this.$emit('loginsuccess')
                            }
                        })*/
                    } else {
                        console.log('登录失败！' + res.errMsg)
                    }
                }
            })
        }
    }
  }
</script>
<style lang="scss">

</style>
