require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{625:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(35),n=s.n(i),r=s(626);new n.a(r.a).$mount()},626:function(t,e,s){"use strict";var i=s(628),n=s(629),r=!1;var a=function(t){r||s(627)},o=s(17)(i.a,n.a,a,null,null);o.options.__file="src\\pages\\user_center\\index.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.a=o.exports},627:function(t,e){},628:function(t,e,s){"use strict";e.a={data:function(){return{currentUser:{avatarUrl:"",nickName:""}}},mounted:function(){wx.getStorageSync("userinfo")?(console.log("进入用户中心"),this.currentUser=wx.getStorageSync("userinfo")):console.log("异常登录进入")},methods:{logout:function(){wx.removeStorage({key:"userinfo",success:function(){wx.hideTabBar(),wx.showToast({title:"退出登录",icon:"success",duration:1e3}),wx.reLaunch({url:"/pages/index/main?logout=true"})}})}}}},629:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"headLine"},[t._v("——· 优记账 ·——")]),t._v(" "),s("div",{staticClass:"avatar-container"},[s("div",[t._v(t._s(t.currentUser.nickName))]),t._v(" "),s("img",{attrs:{src:t.currentUser.avatarUrl,alt:""}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("button",{staticClass:"logout",attrs:{eventid:"0"},on:{click:t.logout}},[t._v("退出")])],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-options"},[e("div",{staticClass:"left-msg"},[this._v("用户子页面")]),this._v(" "),e("div",{staticClass:"right-msg"},[this._v(" > ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-options"},[e("div",{staticClass:"left-msg"},[this._v("用户子页面")]),this._v(" "),e("div",{staticClass:"right-msg"},[this._v(" > ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-options"},[e("div",{staticClass:"left-msg"},[this._v("用户子页面")]),this._v(" "),e("div",{staticClass:"right-msg"},[this._v(" > ")])])}]};e.a=n}},[625]);