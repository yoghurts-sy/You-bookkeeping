<template>
  <div class="edit-container">
    <div class="edit-items" @click="deactivateTools">
      <div class="edit-item-tip">——·   收支金额   ·——</div>
      <div class="edit-item-val-type" @click.stop="callCalculator" @touchstart="touchStart" @touchend="touchEnd">
        <div :class="accountItem.record_type === 0 ? 'edit-item-type out':'edit-item-type in'">{{accountItem.record_type === 0 ? '支出':'收入'}}</div>
        <div :class="accountItem.record_type === 0 ? 'edit-item-value out':'edit-item-value in'">{{accountItem.record_value}}</div>
      </div>

      <div class="edit-item-tip">——·   分类   ·——</div>
      <div class="edit-item-cat" @click.stop="callCatSelector">
        <div>{{accountItem.category}}</div>
        <div>></div>
        <div>{{accountItem.subcategory}}</div>
      </div>

      <div class="edit-item-tip">——·   日期   ·——</div>
      <div class="edit-item-cat" @click.stop="callDateSelector">
        <div>{{accountItem.record_date}}</div>
      </div>

      <div class="edit-item-tip">——·   描述   ·——</div>
      <textarea placeholder="输入一些描述吧..." class="edit-item-desc" v-model="accountItem.record_desc"></textarea>

      <div class="edit-item-tip">——·   支付方式   ·——</div>
      <div class="edit-item-pay">
        <ul>
          <li v-for="(item, index) in payMethod" :key="index" @click="activatePay(index)"
              :class="!item.isSelected?'deactivate-pay pay':'pay'" :style="'background-color:'+ item.color">{{item.payCn}}
          </li>
        </ul>
      </div>
      <div @click="submit" class="log">记账!</div>
    </div>

    <div class="cal-root" >
      <calculator @res="getCalRes" v-if="showCalculator"></calculator>
    </div>

    <div v-show="showSelector" class="cal-root">
      <scroll-selector  @res="getSelectRes" ref="selector"></scroll-selector>
    </div>

  </div>
</template>

<script>
    import {Category} from "../../customConfig/catConfig";
    import  {payConfig} from "../../customConfig/payConfig";
    import calculator from "../../components/add/calculator";
    import scrollSelector from "../../components/add/scrollSelector";
    import config from "../../config";

    export default {
        components: {
            calculator,
            scrollSelector
        },
        data () {
            return {
                payMethod: [],
                selectType:'',
                showCalculator: false,
                showSelector: false,
                accountItem: {
                    record_type: 0,
                    record_value : '0.00',
                    category: Category[0].name,
                    subcategory: Category[0].subCat[0].name,
                    record_date:'',
                    record_desc:'',
                    pay:''
                },
                touchStartX:null
            }
        },

        created () {
            for (const item of payConfig) {
                this.payMethod.push({
                    payEn: item.payEn,
                    payCn: item.payCn,
                    color: item.color,
                    isSelected: false
                })
            }
        },

        mounted () {
            this.getToday()
        },

        methods: {
            check () {
                if (this.accountItem.record_value === '0.00') {
                    wx.showToast({
                        title: '请填入有效收支金额',
                        icon: 'none',
                        duration: 1000
                    })
                    return false
                }
                if (this.accountItem.pay === '') {
                    wx.showToast({
                        title: '请选择支付钱包',
                        icon: 'none',
                        duration: 1000
                    })
                    return false
                }
                return true
            },
            clear () {
                this.accountItem = {
                    record_type: 0,
                    record_value : '0.00',
                    category: Category[0].name,
                    subcategory: Category[0].subCat[0].name,
                    record_date:'',
                    record_desc:'',
                    pay:''
                }
                this.activatePay(-1)
            },

            submit () {
                if (this.check()) {
                    let _this = this
                    _this.accountItem['userid'] = wx.getStorageSync('userinfo').openId
                    wx.cloud.callFunction({
                          name:"add",
                          data: {
                            ac:_this.accountItem
                          }
                        }).then(res=>{
                            if (res.result.msg === "ok") {
                                wx.showToast({
                                    title:'记账成功！',
                                    icon:'success',
                                    mask:true,
                                    duration:2000
                                })
                                _this.clear()
                                wx.reLaunch({
                                    url: '../index/main',
                                    success(res) {
                                        //console.log(res)
                                    },
                                    error(res) {
                                        console.log(res)
                                    }
                                })
                            }
                        })
                    /** 本地测试环境使用下面的代码
                        wx.request({
                        url: config.accountUrl + '/add',
                        data: _this.accountItem,
                        method:'POST',
                        header: {
                            'content-type': 'application/json' // 默认值
                        },
                        success (res) {
                            console.log(res)
                            if (res.data.msg === "ok") {
                                wx.showToast({
                                    title:'记账成功！',
                                    icon:'success',
                                    mask:true,
                                    duration:2000
                                })
                                _this.clear()
                                wx.reLaunch({
                                    url: '../index/main',
                                    success(res) {
                                        console.log(res)
                                    },
                                    error(res) {
                                        console.log(res)
                                    }
                                })
                            }
                        }
                    })*/
                }
            },

            getToday () {
                const today = new Date()
                this.accountItem.record_date = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate();
            },

            deactivateTools () {
                if (this.showCalculator) {
                    this.showCalculator = false
                }
                if (this.showSelector) {
                    this.showSelector = false
                    this.$refs.selector.close()
                }
            },

            getCalRes (res){
                this.accountItem.record_value = res
            },
            callCalculator() {
                this.showCalculator = !this.showCalculator
                if (this.showCalculator) {
                    this.showSelector = false
                }
            },

            touchStart (e) {
                this.touchStartX = e.pageX
            },
            touchEnd(e){
                if(Math.abs(e.mp.changedTouches[0].pageX - this.touchStartX) > 50){
                    this.accountItem.record_type = 1 - this.accountItem.record_type
                }
            },

            callCatSelector() {
                if (this.showSelector) { // 关闭唤醒
                    this.showSelector = false
                    this.$refs.selector.close()
                } else { // 唤醒
                    this.showSelector = true
                    this.showCalculator = false
                    this.selectType = 'cat'
                    this.$refs.selector.colCount = 2
                    this.$refs.selector.cols= [Category,Category[0].subCat]
                    this.$refs.selector.open()
                    this.$refs.selector.record_type = 'custom'
                }
            },
            callDateSelector() {
                if (this.showSelector) { // 关闭唤醒
                    this.showSelector = false
                    this.$refs.selector.close()
                } else { // 唤醒
                    this.showSelector = true
                    this.showCalculator = false
                    this.selectType = 'date'
                    this.$refs.selector.dateMode(this.accountItem.record_date.split('/'))
                    this.$refs.selector.open()

                }
            },
            getSelectRes (res, type) {
                if (this.selectType === 'cat' && type === 'custom') {
                    this.accountItem.category = Category[res[0]].name
                    this.accountItem.subcategory = Category[res[0]].subCat[res[1]].name
                    this.$refs.selector.cols.splice(1, 1, Category[res[0]].subCat) // array.splice(indexOfItem, 1, newValue)
                    //this.$refs.selector.cols[1]= Category[res[0]].subCat
                }
                else if (this.selectType === 'date' && type === 'date') {
                    this.accountItem.record_date = (2010 + res[0])+'/'+(1+res[1])+'/'+ (1+res[2])
                }
            },

            activatePay (index) {
                for (const i in this.payMethod) {
                    if (i === index.toString()) {
                        this.accountItem.pay = this.payMethod[i].payEn
                        this.payMethod[i].isSelected = true
                    } else {
                        this.payMethod[i].isSelected = false
                    }
                }
            }


        }
    }
</script>

<style lang="scss">
  .line {
    margin: 20px;
    border-bottom: 1px solid #cccccc;
    box-shadow:0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11);
  }
  .edit-item-tip {
    text-align: center;
    font-size: 15px;
    color: #cccccc;
  }
  .edit-item-pay {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .deactivate-pay {
        background-color: rgba(0, 0, 0, 0.3)!important;
      }
      .pay {
        box-shadow:0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11);
        width: 25%;
        margin: 10px;
        color: white;
        text-align: center;
        border-radius: 4px;
        font-size: 12px;
        padding: 2px;
        font-weight: bolder;
      }
    }
  }

  .edit-container{
    padding: 10px;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    .edit-items {
      flex: 1 0 auto;
      border-radius: 4px;
      padding: 5px;
      .edit-item-desc {
        width: auto!important;
        margin-left: 20px;
        margin-right: 20px;
        padding: 20px;
        height: 60px;
      }
    }
    .cal-root {
      position: fixed;
      bottom: 10px;
      width: 90%;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }
  .edit-item-val-type {
    margin-top: 10px;
    border: 1px solid white;
    border-radius: 4px;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    font-weight: bolder;
    text-shadow: 0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11);
    display: flex;
    .edit-item-type {
      font-size: 12px;
      margin-left: 50px;
    }
    .edit-item-value {
      text-align: center;
      translate: -10%;
      flex: 1;
    }

  }
  .in {
    color: green;
  }
  .out {
    color: crimson;
  }
  .edit-item-cat {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    :first-child {
      font-weight: bolder;
      color: #322f3b;
      border: 1px solid white;
      border-radius: 4px;
    }
    :last-child {
      font-weight: bolder;
      color: #322f3b;
      border: 1px solid white;
      border-radius: 4px;
    }
    div {
      font-weight: bolder;
      padding: 5px;
      border-radius: 4px;
      width: 30%;
      text-align: center;
      height: 30px;
      line-height: 30px;
    }
  }
  .picker-view {
    width: 100%;
    height: 300px;
  }
  .picker-view-col {
    line-height: 50px;
    text-align: center;
  }
  .log {
    text-align: center;
    border-radius: 4px;
    font-weight: bolder;
    background-color: deepskyblue;
    color: white;
    height: 30px;
    line-height: 30px;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    border: 0;
    box-shadow:0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11);
  }
</style>
