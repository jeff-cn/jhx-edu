(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-register"],{"0761":function(t,e,n){t.exports=n.p+"static/img/logo.5da50423.png"},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",(function(){return h})),n.d(e,"install",(function(){return M})),n.d(e,"mapState",(function(){return O})),n.d(e,"mapMutations",(function(){return E})),n.d(e,"mapGetters",(function(){return j})),n.d(e,"mapActions",(function(){return B})),n.d(e,"createNamespacedHelpers",(function(){return T}));
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){r.emit("vuex:mutation",t,e)})))}function a(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},d={namespaced:{configurable:!0}};d.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,d);var l=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;p(t.concat(i),e.getChild(i),n.modules[i])}}l.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},l.prototype.update=function(t){p([],this.root,t)},l.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new u(e,n);if(0===t.length)this.root=r;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],r)}e.modules&&a(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var f;var h=function(t){var e=this;void 0===t&&(t={}),!f&&"undefined"!==typeof window&&window.Vue&&M(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=i,w(this,r,[],this._modules.root),b(this,r),n.forEach((function(t){return t(e)})),f.config.devtools&&o(this)},m={state:{configurable:!0}};function v(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function g(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;w(t,n,[],t._modules.root,!0),b(t,n,e)}function b(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,o={};a(r,(function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=f.config.silent;f.config.silent=!0,t._vm=new f({data:{$$state:e},computed:o}),f.config.silent=s,t.strict&&$(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),f.nextTick((function(){return i.$destroy()})))}function w(t,e,n,i,r){var o=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a]=i),!o&&!r){var s=S(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){f.set(s,c,i.state)}))}var u=i.context=_(t,a,n);i.forEachMutation((function(e,n){var i=a+n;C(t,i,e,u)})),i.forEachAction((function(e,n){var i=e.root?n:a+n,r=e.handler||e;k(t,i,r,u)})),i.forEachGetter((function(e,n){var i=a+n;x(t,i,e,u)})),i.forEachChild((function(i,o){w(t,e,n.concat(o),i,r)}))}function _(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var o=P(n,i,r),a=o.payload,s=o.options,c=o.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:i?t.commit:function(n,i,r){var o=P(n,i,r),a=o.payload,s=o.options,c=o.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return y(t,e)}},state:{get:function(){return S(t.state,n)}}}),r}function y(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return t.getters[r]},enumerable:!0})}})),n}function C(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,i.state,e)}))}function k(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e,r){var o=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return c(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):o}))}function x(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function $(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function S(t,e){return e.length?e.reduce((function(t,e){return t[e]}),t):t}function P(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function M(t){f&&t===f||(f=t,i(f))}m.state.get=function(){return this._vm._data.$$state},m.state.set=function(t){0},h.prototype.commit=function(t,e,n){var i=this,r=P(t,e,n),o=r.type,a=r.payload,s=(r.options,{type:o,payload:a}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(a)}))})),this._subscribers.forEach((function(t){return t(s,i.state)})))},h.prototype.dispatch=function(t,e){var n=this,i=P(t,e),r=i.type,o=i.payload,a={type:r,payload:o},s=this._actions[r];if(s)return this._actionSubscribers.forEach((function(t){return t(a,n.state)})),s.length>1?Promise.all(s.map((function(t){return t(o)}))):s[0](o)},h.prototype.subscribe=function(t){return v(t,this._subscribers)},h.prototype.subscribeAction=function(t){return v(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),w(this,this.state,t,this._modules.get(t),n.preserveState),b(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=S(e.state,t.slice(0,-1));f.delete(n,t[t.length-1])})),g(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),g(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,m);var O=q((function(t,e){var n={};return G(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=A(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n})),E=q((function(t,e){var n={};return G(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var o=A(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),j=q((function(t,e){var n={};return G(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||A(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n})),B=q((function(t,e){var n={};return G(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var o=A(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),T=function(t){return{mapState:O.bind(null,t),mapGetters:j.bind(null,t),mapMutations:E.bind(null,t),mapActions:B.bind(null,t)}};function G(t){return Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}}))}function q(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function A(t,e,n){var i=t._modulesNamespaceMap[n];return i}var R={Store:h,install:M,version:"3.0.1",mapState:O,mapMutations:E,mapGetters:j,mapActions:B,createNamespacedHelpers:T};e["default"]=R},3529:function(t,e,n){"use strict";n.r(e);var i=n("8801"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},5241:function(t,e,n){"use strict";var i=n("75e2"),r=n.n(i);r.a},"6b1b":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.Public=void 0;var r=i(n("276c")),o=i(n("e954")),a=i(n("92a6")),s=i(n("920b")),c=n("9373"),u=function(t){(0,s.default)(n,t);var e=(0,a.default)(n);function n(){return(0,r.default)(this,n),e.call(this)}return(0,o.default)(n,[{key:"login",value:function(t,e){var n={url:"site/login",data:t,method:"post",sCallback:function(t){e&&e(t)}};this.request(n)}},{key:"register",value:function(t,e){var n={url:"site/register",data:t,method:"post",sCallback:function(t){e&&e(t)}};this.request(n)}},{key:"config",value:function(t,e){var n={url:"site/config",data:t,method:"post",sCallback:function(t){e&&e(t)}};this.request(n)}}]),n}(c.Base);e.Public=u},"75e2":function(t,e,n){var i=n("aee0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("64db1954",i,!0,{sourceMap:!1,shadowMode:!1})},8801:function(t,e,n){"use strict";var i=n("ee27");n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("c964")),o=i(n("f3f3")),a=n("2f62"),s=i(n("bd1e")),c=n("6b1b"),u=new c.Public,d={data:function(){return{registerParams:{mobile:"",password:"",password_repetition:"",code:""},btnLoading:!1,reqBody:{},codeSeconds:0,smsCodeBtnDisabled:!0,sendCodeTime:60,config:{}}},onLoad:function(t){var e=(0,s.default)().valueOf()/1e3-uni.getStorageSync("registerSmsCodeTime");e<60?(this.codeSeconds=this.$data.sendCodeTime-parseInt(e,10),this.handleSmsCodeTime(this.codeSeconds)):(this.codeSeconds=this.$data.sendCodeTime,this.smsCodeBtnDisabled=!1,uni.removeStorageSync("registerSmsCodeTime")),this.registerParams.promoCode=t.promo_code,this.getConfig()},methods:(0,o.default)({},(0,a.mapMutations)(["login"]),{navBack:function(){this.$mRouter.back()},navTo:function(t){uni.navigateTo({url:t})},getConfig:function(){var t=this,e=this,n={};u.config(n,(function(n){e.$data.config=n.data,wx.setStorageSync("config",t.config)}))},getSmsCode:function(){var t=this;this.reqBody["mobile"]=this.registerParams["mobile"];var e=this.$mGraceChecker.check(this.reqBody,this.$mFormRule.sendCodeRule);e?this.$http.post(smsCode,{mobile:this.registerParams.mobile,usage:"register"}).then((function(e){t.$mHelper.toast("验证码发送成功, 验证码是".concat(e.data)),t.smsCodeBtnDisabled=!0,uni.setStorageSync("registerSmsCodeTime",(0,s.default)().valueOf()/1e3),t.handleSmsCodeTime(59)})):this.$mHelper.toast(this.$mGraceChecker.error)},handleSmsCodeTime:function(t){var e=this,n=setInterval((function(){0===t?(clearInterval(n),e.smsCodeBtnDisabled=!1):(e.codeSeconds=t,e.smsCodeBtnDisabled=!0,t--)}),1e3)},toRegister:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=uni.getStorageSync("userInfo"),t.reqBody["mobile"]=t.registerParams["mobile"],t.reqBody["password"]=t.registerParams["password"],t.reqBody["code"]=t.registerParams["code"],i=t.$mGraceChecker.check(t.reqBody,t.$mFormRule.registerRule),i){e.next=8;break}return uni.showToast({icon:"none",title:t.$mGraceChecker.error}),e.abrupt("return");case 8:if(t.registerParams["password"]===t.registerParams["password_repetition"]){e.next=11;break}return uni.showToast({icon:"none",title:"两次输入的密码不一致"}),e.abrupt("return");case 11:t.reqBody["password_repetition"]=t.registerParams["password_repetition"],t.reqBody.group="jhxEduH5",t.reqBody.oauth_client="wechat",t.btnLoading=!0,r=n?(0,o.default)({},n,{},t.reqBody,{gender:n.sex||n.gender,oauth_client_user_id:n.openid||n.openId,head_portrait:n.headimgurl||n.avatarUrl}):(0,o.default)({},t.reqBody),u.register(r,(function(e){if(t.btnLoading=!1,200==e.code){var n=e.data.member;uni.setStorageSync("accessToken",e.data.access_token),uni.setStorageSync("refreshToken",e.data.refresh_token),uni.setStorageSync("userInfo",n),uni.navigateBack({})}}));case 17:case"end":return e.stop()}}),e)})))()}})};e.default=d},a3fa:function(t,e,n){"use strict";n.r(e);var i=n("dcf5"),r=n("3529");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("5241");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"3c8e8b48",null,!1,i["a"],a);e["default"]=c.exports},aee0:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-3c8e8b48]{background-color:#fff}.container[data-v-3c8e8b48]{padding-top:60px;position:relative;width:100vw;\r\n  /*height: 100vh;*/overflow:hidden;background:#fff}.container .wrapper[data-v-3c8e8b48]{position:relative;width:100vw;z-index:90;background:#fff;padding-bottom:%?40?%}.container .wrapper .welcome[data-v-3c8e8b48]{position:relative;top:%?-90?%;color:#555;text-align:center}.container .wrapper .input-content[data-v-3c8e8b48]{padding:0 %?60?%}.container .wrapper .input-item[data-v-3c8e8b48]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?30?%;height:%?120?%;border-radius:4px;margin-bottom:%?50?%;border-bottom:1px solid #f1f1f1}.container .wrapper .input-item[data-v-3c8e8b48]:last-child{margin-bottom:0}.container .wrapper .input-item .tit[data-v-3c8e8b48]{height:%?50?%;line-height:%?56?%}.container .wrapper .input-item uni-input[data-v-3c8e8b48]{height:%?60?%;width:100%}.container .wrapper .input-item-sms-code[data-v-3c8e8b48]{position:relative;width:100%}.container .wrapper .input-item-sms-code .sms-code-btn[data-v-3c8e8b48]{position:absolute;color:#111;right:%?20?%;bottom:%?20?%;font-size:%?28?%}.container .wrapper .input-item-sms-code .sms-code-resend[data-v-3c8e8b48]{color:#999}.container .wrapper .input-item-sms-code .sms-code-btn[data-v-3c8e8b48]:after{border:none;background-color:initial}.container .wrapper .forget-section[data-v-3c8e8b48]{text-align:center;margin-top:%?40?%}.container .back-btn[data-v-3c8e8b48]{position:absolute;left:%?40?%;z-index:9999;padding-top:0;top:%?40?%;font-size:%?40?%}.container .left-top-sign[data-v-3c8e8b48]{font-size:%?120?%;position:relative;left:%?-16?%}.container .right-top-sign[data-v-3c8e8b48]{position:absolute;top:%?80?%;right:%?-30?%;z-index:95}.container .register-section[data-v-3c8e8b48]{margin:%?30?% 0 %?50?%;width:100%;text-align:center}.container .register-section uni-text[data-v-3c8e8b48]{margin-left:%?10?%}.footer[data-v-3c8e8b48]{width:100%;text-align:center;margin:%?20?% 0 %?20?%}.footer .protocol[data-v-3c8e8b48]{margin:0 %?10?%}.confirm-btn[data-v-3c8e8b48]{width:80%;background-color:#ef7c38;margin-top:%?50?%;color:#fff;border-radius:30px}.logo[data-v-3c8e8b48]{width:%?80?%;height:%?80?%;border-radius:50%;margin-bottom:%?15?%}body.?%PAGE?%[data-v-3c8e8b48]{background-color:#fff}',""]),t.exports=e},dcf5:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-text",{staticClass:"back-btn iconfont iconzuojiantou-up",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navBack.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"right-top-sign"}),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"welcome"},[i("v-uni-image",{staticClass:"logo",attrs:{src:n("0761")}}),i("v-uni-view",[t._v("以墨文化")])],1),i("v-uni-view",{staticClass:"input-content"},[i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("手机号码")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号码",maxlength:"11"},model:{value:t.registerParams.mobile,callback:function(e){t.$set(t.registerParams,"mobile",e)},expression:"registerParams.mobile"}})],1),i("v-uni-view",{staticClass:"input-item input-item-sms-code"},[i("v-uni-view",{staticClass:"input-wrapper"},[i("v-uni-view",{staticClass:"rf-input-wrapper"},[i("v-uni-view",{staticClass:"tit"},[t._v("验证码")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入验证码",maxlength:"4","data-key":"mobile"},model:{value:t.registerParams.code,callback:function(e){t.$set(t.registerParams,"code",e)},expression:"registerParams.code"}})],1),i("v-uni-button",{staticClass:"sms-code-btn",attrs:{disabled:t.smsCodeBtnDisabled},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getSmsCode.apply(void 0,arguments)}}},[t.smsCodeBtnDisabled?i("v-uni-text",{staticClass:"sms-code-resend"},[t._v(t._s("重新发送 ("+t.codeSeconds+")"))]):i("v-uni-text",[t._v("获取验证码")])],1)],1)],1),1==t.config["register_require_pass"]?i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("密码")]),i("v-uni-input",{attrs:{type:"password",placeholder:"请输入密码",maxlength:"18"},model:{value:t.registerParams.password,callback:function(e){t.$set(t.registerParams,"password",e)},expression:"registerParams.password"}})],1):t._e(),1==t.config["register_require_pass"]?i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("确认密码")]),i("v-uni-input",{attrs:{type:"password",placeholder:"请输入确认密码",maxlength:"18"},model:{value:t.registerParams.password_repetition,callback:function(e){t.$set(t.registerParams,"password_repetition",e)},expression:"registerParams.password_repetition"}})],1):t._e()],1),i("v-uni-button",{staticClass:"confirm-btn",attrs:{disabled:t.btnLoading,loading:t.btnLoading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRegister.apply(void 0,arguments)}}},[t._v("注册")])],1),i("v-uni-view",{staticClass:"register-section"},[t._v("已经注册过了?"),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/public/login")}}},[t._v("马上登录")])],1)],1)},o=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))}}]);