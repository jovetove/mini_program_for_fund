(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge"],{"0728":function(t,e,n){"use strict";n.r(e);var u=n("8608"),i=n("da33");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("d157");var r,d=n("f0c5"),o=Object(d["a"])(i["default"],u["b"],u["c"],!1,null,"21311508",null,!1,u["a"],r);e["default"]=o.exports},8608:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},ab0d:function(t,e,n){},d157:function(t,e,n){"use strict";var u=n("ab0d"),i=n.n(u);i.a},da33:function(t,e,n){"use strict";n.r(e);var u=n("de30"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=i.a},de30:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component',
    {
        'node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0728"))
        })
    },
    [['node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge-create-component']]
]);
