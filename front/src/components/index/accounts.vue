<template>
  <div>
    <div class="wrap">
      <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas"/>
    </div>
    <div class="wrapR">
      <div class="wrapR-item" style="color:#91CC75 ">收入:{{income}}</div>
      <div class="wrapR-item" style="color:#DF2A4E ">支出:{{pay}}</div>
      <div class="wrapR-item" style="color:#5470C6 ">结余:{{surplus}}</div>
    </div>
    <scroll-view class="account-area" :scroll-y="true" @scrolltolower="scrolltolower" @scroll="scroll">
      <div class="item">
        <div v-for="(item,index) in processedItems" :key="index" class="item-details"
             :style="'opacity:'+ item.opacity+';width: '+item.width + '%'">
          <div class="item-details-left">
            <div class="item-details-category">
              <span>{{item.category}}</span>
            </div>
          </div>
          <div class="item-details-middle">
            <div class="details-top">
              <div class="item-details-subcategory">
                <span>
                  {{item.subcategory}}
                </span>
              </div>
              <div class="item-details-pay">
              <span :class="'pay-by-'+item.payEn">
                {{item.payCn}}
              </span>
              </div>
            </div>
            <div class="details-bottom">
              <div class="item-details-desc">
              <span>
                {{item.record_desc}}
              </span>

              </div>
            </div>
          </div>
          <div class="item-details-right">
            <div class="item-details-value">
              <span :class="item.record_type===0?'out':'in'">{{item.record_value}}</span>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
    import {payConfig} from "../../customConfig/payConfig";

    import * as echarts from 'echarts/dist/echarts.simple.min';
    import mpvueEcharts from 'mpvue-echarts';
    let chart = null;
    let E_i = 0;
    let E_p = 0;
    let E_s = 0;

    export default {
        data() {
            return {
                currentUser:{},
                items: [/*{
                        id:1,
                        type:0,
                        category:'食物',
                        subCategory:'零食',
                        desc:'aaa',
                        value:50,
                        date:'2020/5/13',
                        pay:'weChat',
                        user:'openid'
                    }*/],
                processedItems: [],
                income:0,
                pay:0,
                surplus:0,
                echarts,
                onInit:null,
                options:null
            }
        },
      components: {
          mpvueEcharts
      },
      onShareAppMessage () {},
        mounted() {
            this.processItemInfo();
            console.log("mounted--->>>"+ this.surplus);
            console.log("mounted->"+this.options.series[0].data[2].value);
        },
        updated() {
            this.onInit = this.initChart;
        },
        methods: {
            initChart(canvas, width, height) {
                //var _this = this;
                chart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(chart);
                var labelRight = {
                    position: 'right'
                };
                var option = this.options/*{
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['80%',"20%"],
                            data: [
                                {value: E_i, name: '收入'},
                                {value: E_p, name: '支出'},
                                {value: E_s, name: '结余'}
                            ],
                            color:["#91CC75","#DF2A4E", "#5470C6"],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }*/; // ECharts 配置项
                console.log("init-->"+this.options.series[0].data[2].value);
                chart.setOption(option, true);
                return chart; // 返回 chart 后可以自动绑定触摸操作
            },
            processItemInfo() {
                var _this = this
                _this.processedItems = []
                console.log(_this.items)
                _this.pay = 0;
                _this.income = 0;
                _this.surplus = 0;
                for (let i = 0; i < _this.items.length; i++) {
                    let newItem = {}
                    for (let attr in _this.items[i]) {
                        if (attr === 'pay') {
                            newItem['payEn'] = _this.items[i].pay
                            newItem['payCn'] = _this.getPayName(_this.items[i].pay)
                        } else if (attr === 'category') {
                            newItem[attr] = _this.items[i].category.substring(0, 1)
                        } else {
                            newItem[attr] = _this.items[i][attr]
                        }
                    }
                    newItem.opacity = 1
                    newItem.width = 100
                    _this.processedItems.push(newItem)
                    if (_this.items[i].record_type === 0) {//out
                        _this.pay += _this.items[i].record_value;
                    } else if (_this.items[i].record_type === 1){//in
                        _this.income += _this.items[i].record_value;
                    }
                }
                E_i = _this.income;
                E_p = _this.pay;
                _this.surplus = _this.income - _this.pay;
                console.log(_this.income);
                E_s = _this.surplus;
                _this.options = {
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['80%',"20%"],
                            data: [
                                {value: E_i, name: '收入'},
                                {value: E_p, name: '支出'},
                                {value: E_s, name: '结余'}
                            ],
                            color:["#91CC75","#DF2A4E", "#5470C6"],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                console.log("info--->>>"+ _this.surplus);
            },
            getPayName (pay) {//获取支付方式
                for (const payItem of payConfig) {
                    if (payItem.payEn === pay) {
                        return payItem.payCn
                    }
                }
            },
            scrolltolower(){
                console.log('lower')
            },
            scroll(e) {
                this.exitStyle(e.target.scrollTop)
                console.log(e.target.scrollTop)
            },
            /*还有点小bug*/
            exitStyle(position) {
                const index = Math.floor(position/80)
                const level = position/80 - index
                for(let i=index;i<index+2;i++){
                    if(i === index){
                        this.processedItems[i].opacity = 1 - level
                        this.processedItems[i].width = (1 - level)*5 + 95
                    }
                    else{
                        this.processedItems[i].opacity = 1
                        this.processedItems[i].width = 100
                    }
                }
            }
        }
    }


</script>

<style lang="scss">
  .wrap {
    height: 19vh;
    width: 48%;
    margin-top: 0;
    margin-left: 20px;
    //border: solid 2px red;
    float: left;
  }
  .wrapR {
    height: 19vh;
    width: 38%;
    margin-top: 0;
    //border: solid 2px dodgerblue;
    float: right;
  }
  .wrapR-item {
    height: 30%;
    margin-top: 2px;
    //border: solid 1px red;
    font-size: small;
    font-weight: bolder;
    margin-left: 10px;
  }


  .account-area {
    position: absolute;
    top: 14vh;
    height: 85vh;
    margin-top: 20px;
    padding-top: 20px;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.7);
  }
  .item {
    width: 90%;
    margin: auto;
    .item-details{
      box-shadow:0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11);
      border-radius: 4px;
      color: #322f3b;
      font-weight: lighter;
      margin: auto auto 5px;
      display: flex;
      flex-direction: row;
      height: 80px;
      transition: width 0.2s;
      .item-details-left {
        width: 15%;
        display: flex;
        flex-direction: row;
        .item-details-category{
          height: 40px;
          width: 40px;
          display: flex;
          flex-direction: column;
          align-self: center;
          background-color: #322f3b;
          font-size: 20px;
          color: #e2e1e4;
          font-weight: bolder;
          border-radius: 99px;
          margin-left: 5px;
          span {
            line-height: 40px;
            text-align: center;
          }
        }
      }

      .item-details-middle{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .details-top{
          height: 30px;
          display: flex;
          flex-direction: row;
          .item-details-subcategory{
            margin-left: 15px;
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            span {
              background-color: #322f3b;
              color: #e2e1e4;
              text-align: center;
              border-radius: 4px;
              font-size: 12px;
              padding: 2px;
              font-weight: bolder;
            }
          }
          .item-details-pay{
            margin-left: 15px;
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            span {
              color: #e2e1e4;
              text-align: center;
              border-radius: 4px;
              font-size: 12px;
              padding: 2px;
              font-weight: bolder;
            }
          }
        }
        .details-bottom{
          height: 50px;
          display: flex;
          flex-direction: row;
          .item-details-desc {
            font-weight: bolder;
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            align-self: center;
            border: 1px dashed #e2e1e4;
            border-radius: 10px;
            padding: 3px;
            width: 100%;
            span {
              text-align: center;
              font-size: 12px;
            }
          }
        }

      }

      .item-details-right {
        margin-left:auto;
        margin-right: 10px;
        display: flex;
        flex-direction: row;
        .item-details-value {
          display: flex;
          flex-direction: column;
          align-self: center;
          height: 80px;
          span {
            line-height: 80px;
            font-size: 30px;
          }
        }
      }
    }
  }

  .in {
    color: green;
  }
  .out {
    color: crimson;
  }
  .pay-by-weChat {
    background-color: limegreen;
  }
  .pay-by-bankCard {
    background-color: midnightblue;
  }
  .pay-by-aliPay {
    background-color: dodgerblue;
  }
  .pay-by-other {
    background-color: #322f3b;
  }
  .pay-by-ICBC {
    background-color: #c7000b;
  }
  .pay-by-ABC {
    background-color: #37b7a5;
  }
</style>
