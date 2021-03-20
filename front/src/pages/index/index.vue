<!--
  待完善的需求
  1. 用户界面的美化
  2. 查询记录的时候应该是查询单一个对应的appid
  3. 能不能使用echarts进行统计的显示
  4. 实现上线！
-->


<template>
  <div>
    <div v-if="notLogin" >
      <login @loginsuccess="loginSuccess"></login>
    </div>
    <div style="border-radius: 10px;" v-else>
      <accounts ref="accounts"></accounts>
    </div>
  </div>

</template>

<script>
import login from "../../components/index/login";
import accounts from "../../components/index/accounts";
import config from "../../config";

export default {
    components: {
        login,
        accounts
    },

  data () {
    return {
        notLogin:true
    }
  },

    onLoad(option) {
      if (option.logout === 'true') {
          this.notLogin = true
      }
    },

    mounted() {
        if (wx.getStorageSync('userinfo')) {
            this.notLogin = false
            console.log("here!")
            this.getRecord()
        } else {
            wx.hideTabBar()
        }
    },
    methods:{
        loginSuccess() {
            this.notLogin = false
            wx.showTabBar()
            wx.showToast({
                title:'登录成功',
                icon:'success',
                mask:true,
                duration:2000
            })
            this.getRecord()
        },
        getRecord() {
            var _this = this
            console.log(wx.getStorageSync('userinfo').openId)
            wx.request({
                url: config.accountUrl + '/all', //仅为示例，并非真实的接口地址
                data: {
                    userid : wx.getStorageSync('userinfo').openId
                },
                method:'GET',
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success (res) {
                    console.log(res.data)
                    console.log(_this.$refs)
                    _this.$refs.accounts.items = res.data.reverse()
                    _this.$refs.accounts.processItemInfo()
                }
            })
        }
    }

}
</script>

<style scoped lang="scss">
  .index-title {
    height: 15vh;
    background-color: #322f3b;
    overflow: hidden;
  }
  .index-title > img {
    width: 100%;
    position: relative;
    top: -96px;
  }

  .login-area{
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #e2e1e4;
  }

</style>
