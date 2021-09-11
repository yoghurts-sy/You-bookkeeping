require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{589:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(35),n=s.n(o),i=s(590);n.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new n.a(i.a).$mount()},590:function(t,e,s){"use strict";var o=s(592),n=s(614),i=!1;var r=function(t){i||s(591)},a=s(17)(o.a,n.a,r,"data-v-7efcd81b",null);a.options.__file="src\\pages\\index\\index.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.a=a.exports},591:function(t,e){},592:function(t,e,s){"use strict";var o=s(593),n=s(597),i=s(140);e.a={components:{login:o.a,accounts:n.a},data:function(){return{notLogin:!0}},onLoad:function(t){"true"===t.logout&&(this.notLogin=!0)},mounted:function(){wx.getStorageSync("userinfo")?(this.notLogin=!1,console.log("here!"),this.getRecord()):wx.hideTabBar()},methods:{loginSuccess:function(){this.notLogin=!1,wx.showTabBar(),wx.showToast({title:"登录成功",icon:"success",mask:!0,duration:2e3}),this.getRecord()},getRecord:function(){var t=this;console.log(wx.getStorageSync("userinfo").openId),wx.request({url:i.a.accountUrl+"/all",data:{userid:wx.getStorageSync("userinfo").openId},method:"GET",header:{"content-type":"application/json"},success:function(e){console.log(e.data),console.log(t.$refs),t.$refs.accounts.items=e.data.reverse(),t.$refs.accounts.processItemInfo()}})}}}},593:function(t,e,s){"use strict";var o=s(595),n=s(596),i=!1;var r=function(t){i||s(594)},a=s(17)(o.a,n.a,r,null,null);a.options.__file="src\\components\\index\\login.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions."),e.a=a.exports},594:function(t,e){},595:function(t,e,s){"use strict";var o=s(140);e.a={methods:{getUserInfo:function(t){var e=this,s=t.target.userInfo,n=o.a.loginUrl;wx.login({success:function(t){t.code?wx.request({url:n,data:{code:t.code},success:function(t){s.openId=JSON.parse(t.data.msg).openid,wx.setStorage({key:"userinfo",data:s}),e.$emit("loginsuccess")}}):(console.log(t.code),console.log("登录失败！"+t.errMsg))}})}}}},596:function(t,e,s){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{attrs:{"open-type":"getUserInfo",eventid:"0"},on:{getuserinfo:this.getUserInfo}},[this._v("授权登录")])],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},597:function(t,e,s){"use strict";var o=s(599),n=s(613),i=!1;var r=function(t){i||s(598)},a=s(17)(o.a,n.a,r,null,null);a.options.__file="src\\components\\index\\accounts.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] accounts.vue: functional components are not supported with templates, they should use render functions."),e.a=a.exports},598:function(t,e){},599:function(t,e,s){"use strict";var o=s(132),n=s.n(o),i=s(242),r=s(600),a=(s.n(r),s(601)),c=null,u=0,l=0,d=0;e.a={data:function(){return{currentUser:{},items:[],processedItems:[],income:0,pay:0,surplus:0,echarts:r,onInit:null,options:null}},components:{mpvueEcharts:a.a},onShareAppMessage:function(){},mounted:function(){this.processItemInfo(),console.log("mounted---\x3e>>"+this.surplus),console.log("mounted->"+this.options.series[0].data[2].value)},updated:function(){this.onInit=this.initChart},methods:{initChart:function(t,e,s){c=r.init(t,null,{width:e,height:s}),t.setChart(c);var o=this.options;return console.log("init--\x3e"+this.options.series[0].data[2].value),c.setOption(o,!0),c},processItemInfo:function(){this.processedItems=[],console.log(this.items),this.pay=0,this.income=0,this.surplus=0;for(var t=0;t<this.items.length;t++){var e={};for(var s in this.items[t])"pay"===s?(e.payEn=this.items[t].pay,e.payCn=this.getPayName(this.items[t].pay)):e[s]="category"===s?this.items[t].category.substring(0,1):this.items[t][s];e.opacity=1,e.width=100,this.processedItems.push(e),0===this.items[t].record_type?this.pay+=this.items[t].record_value:1===this.items[t].record_type&&(this.income+=this.items[t].record_value)}u=this.income,l=this.pay,this.surplus=this.income-this.pay,console.log(this.income),d=this.surplus,this.options={tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"访问来源",type:"pie",radius:["80%","20%"],data:[{value:u,name:"收入"},{value:l,name:"支出"},{value:d,name:"结余"}],color:["#91CC75","#DF2A4E","#5470C6"],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},console.log("info---\x3e>>"+this.surplus)},getPayName:function(t){var e=!0,s=!1,o=void 0;try{for(var r,a=n()(i.a);!(e=(r=a.next()).done);e=!0){var c=r.value;if(c.payEn===t)return c.payCn}}catch(t){s=!0,o=t}finally{try{!e&&a.return&&a.return()}finally{if(s)throw o}}},scrolltolower:function(){for(var t=0;t<this.processedItems.length;t++)this.processedItems[t].opacity=1,this.processedItems[t].width=100;console.log("lower")},scroll:function(t){this.exitStyle(t.target.scrollTop),console.log("scroll--\x3e"+t.target.scrollTop)},exitStyle:function(t){var e=Math.floor(t/80);console.log("index--\x3e"+e);var s=t/80-e;console.log("level--\x3e"+s);for(var o=e;o<e+2;o++)this.processedItems[o].opacity=1,this.processedItems[o].width=100;for(var n=e;n<e+2;n++)n===e?(this.processedItems[n].opacity=1-s,this.processedItems[n].width=5*(1-s)+95):(this.processedItems[n].opacity=1,this.processedItems[n].width=100)}}}},601:function(t,e,s){"use strict";var o=s(603),n=s(612),i=!1;var r=function(t){i||s(602)},a=s(17)(o.a,n.a,r,"data-v-3345b39f",null);a.options.__file="node_modules\\mpvue-echarts\\src\\echarts.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] echarts.vue: functional components are not supported with templates, they should use render functions."),e.a=a.exports},602:function(t,e){},603:function(t,e,s){"use strict";var o=s(604),n=s.n(o),i=s(611);function r(t){for(var e=0;e<t.mp.touches.length;e+=1){var s=t.mp.touches[e];s.offsetX=s.x,s.offsetY=s.y}return t}e.a={props:{echarts:{required:!0,type:Object,default:function(){return null}},onInit:{type:Function,default:null},canvasId:{type:String,default:"ec-canvas"},lazyLoad:{type:Boolean,default:!1},disableTouch:{type:Boolean,default:!1},throttleTouch:{type:Boolean,default:!1}},onReady:function(){this.echarts?this.lazyLoad||this.init():console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>')},methods:{init:function(t){var e=this,s=wx.version.version.split(".").map(function(t){return parseInt(t,10)});if(s[0]>1||1===s[0]&&s[1]>9||1===s[0]&&9===s[1]&&s[2]>=91){var o=this.canvasId;this.ctx=wx.createCanvasContext(o);var n=new i.a(this.ctx,o);this.echarts.setCanvasCreator(function(){return n}),wx.createSelectorQuery().select("#"+o).boundingClientRect(function(s){if(s){var o=s.width,i=s.height;if("function"==typeof t?e.chart=t(n,o,i):"function"==typeof e.onInit&&(e.chart=e.onInit(n,o,i)),e.chart){var r=e.chart.getZr().handler;e.handler=r,e.processGesture=r.proxy.processGesture||function(){}}}else setTimeout(function(){return e.init()},50)}).exec()}else console.error("微信基础库版本过低，需大于等于 1.9.91。参见：https://github.com/ecomfe/echarts-for-weixin#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82")},canvasToTempFilePath:function(t){var e=this.canvasId;this.ctx.draw(!0,function(){wx.canvasToTempFilePath(n()({canvasId:e},t))})},touchStart:function(t){var e=this.disableTouch,s=this.chart;if(!e&&s&&t.mp.touches.length){var o=t.mp.touches[0];this.handler.dispatch("mousedown",{zrX:o.x,zrY:o.y}),this.handler.dispatch("mousemove",{zrX:o.x,zrY:o.y}),this.processGesture(r(t),"start")}},touchMove:function(t){var e=this.disableTouch,s=this.throttleTouch,o=this.chart,n=this.lastMoveTime;if(!e&&o&&t.mp.touches.length){if(s){var i=Date.now();if(i-n<240)return;this.lastMoveTime=i}var a=t.mp.touches[0];this.handler.dispatch("mousemove",{zrX:a.x,zrY:a.y}),this.processGesture(r(t),"change")}},touchEnd:function(t){var e=this.disableTouch,s=this.chart;if(!e&&s){var o=t.mp.changedTouches?t.mp.changedTouches[0]:{};this.handler.dispatch("mouseup",{zrX:o.x,zrY:o.y}),this.handler.dispatch("click",{zrX:o.x,zrY:o.y}),this.processGesture(r(t),"end")}}}}},612:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.canvasId?s("canvas",{staticClass:"ec-canvas",attrs:{id:t.canvasId,canvasId:t.canvasId,eventid:"0"},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,error:t.error}}):t._e()};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},613:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"wrap"},[s("mpvue-echarts",{attrs:{echarts:t.echarts,onInit:t.onInit,canvasId:"demo-canvas",mpcomid:"0"}})],1),t._v(" "),s("div",{staticClass:"wrapR"},[s("div",{staticClass:"wrapR-item",staticStyle:{color:"#91CC75"}},[t._v("收入:"+t._s(t.income))]),t._v(" "),s("div",{staticClass:"wrapR-item",staticStyle:{color:"#DF2A4E"}},[t._v("支出:"+t._s(t.pay))]),t._v(" "),s("div",{staticClass:"wrapR-item",staticStyle:{color:"#5470C6"}},[t._v("结余:"+t._s(t.surplus))])]),t._v(" "),s("scroll-view",{staticClass:"account-area",attrs:{"scroll-y":!0,eventid:"0"},on:{scrolltolower:t.scrolltolower,scroll:t.scroll}},[s("div",{staticClass:"item"},t._l(t.processedItems,function(e,o){return s("div",{key:o,staticClass:"item-details",style:"opacity:"+e.opacity+";width: "+e.width+"%"},[s("div",{staticClass:"item-details-left"},[s("div",{staticClass:"item-details-category"},[s("span",[t._v(t._s(e.category))])])]),t._v(" "),s("div",{staticClass:"item-details-middle"},[s("div",{staticClass:"details-top"},[s("div",{staticClass:"item-details-subcategory"},[s("span",[t._v("\n                "+t._s(e.subcategory)+"\n              ")])]),t._v(" "),s("div",{staticClass:"item-details-pay"},[s("span",{class:"pay-by-"+e.payEn},[t._v("\n              "+t._s(e.payCn)+"\n            ")])])]),t._v(" "),s("div",{staticClass:"details-bottom"},[s("div",{staticClass:"item-details-desc"},[s("span",[t._v("\n              "+t._s(e.record_desc)+"\n            ")])])])]),t._v(" "),s("div",{staticClass:"item-details-right"},[s("div",{staticClass:"item-details-value"},[s("span",{class:0===e.record_type?"out":"in"},[t._v(t._s(e.record_value))])])])])}))])],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},614:function(t,e,s){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.notLogin?e("div",[e("login",{attrs:{eventid:"0",mpcomid:"0"},on:{loginsuccess:this.loginSuccess}})],1):e("div",{staticStyle:{"border-radius":"10px"}},[e("accounts",{ref:"accounts",attrs:{mpcomid:"1"}})],1)])};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n}},[589]);