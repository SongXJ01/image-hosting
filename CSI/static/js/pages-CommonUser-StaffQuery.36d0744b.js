(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-CommonUser-StaffQuery"],{"003e":function(t,n,e){"use strict";var a=e("4ea4");e("a9e3"),e("498a"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("87e6")),s={name:"u-input",mixins:[i.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,n){this.defaultValue=t,t!=n&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var n=this,e=t.detail.value;this.trim&&(e=this.$u.trim(e)),this.$emit("input",e),this.defaultValue=e,setTimeout((function(){n.dispatch("u-form-item","on-form-change",e)}),40)},handleBlur:function(t){var n=this;setTimeout((function(){n.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){n.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};n.default=s},"080e":function(t,n,e){"use strict";e.r(n);var a=e("003e"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},"0afa":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-input[data-v-5c361d36]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-input__input[data-v-5c361d36]{font-size:%?28?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input__textarea[data-v-5c361d36]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input--border[data-v-5c361d36]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-5c361d36]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-5c361d36]{margin-left:%?10?%}.u-input__right-icon--select[data-v-5c361d36]{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-5c361d36]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=n},"11e0":function(t,n,e){"use strict";e.r(n);var a=e("a6d5"),i=e("34a2");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("1770");var r,o=e("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"7327c6ea",null,!1,a["a"],r);n["default"]=u.exports},1770:function(t,n,e){"use strict";var a=e("c6a0"),i=e.n(a);i.a},"34a2":function(t,n,e){"use strict";e.r(n);var a=e("f72b"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},8500:function(t,n,e){"use strict";var a=e("a5eb"),i=e.n(a);i.a},"8f1e":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 橘色圆角边框 */.staffBorder[data-v-7327c6ea]{border-radius:%?30?%;border-style:solid;border-color:#f37b1d;border-width:1.5px}",""]),t.exports=n},9811:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}));var a={uIcon:e("5606").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?e("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.handleInput.apply(void 0,arguments)},blur:function(n){arguments[0]=n=t.$handleEvent(n),t.handleBlur.apply(void 0,arguments)},focus:function(n){arguments[0]=n=t.$handleEvent(n),t.onFocus.apply(void 0,arguments)},confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.onConfirm.apply(void 0,arguments)}}}):e("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(n){arguments[0]=n=t.$handleEvent(n),t.onFocus.apply(void 0,arguments)},blur:function(n){arguments[0]=n=t.$handleEvent(n),t.handleBlur.apply(void 0,arguments)},input:function(n){arguments[0]=n=t.$handleEvent(n),t.handleInput.apply(void 0,arguments)},confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.onConfirm.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?e("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClear.apply(void 0,arguments)}}},[e("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?e("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[e("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?e("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[e("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},s=[]},a5eb:function(t,n,e){var a=e("0afa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("3ffa14f4",a,!0,{sourceMap:!1,shadowMode:!1})},a6d5:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}));var a={uInput:e("b4e3").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-view",{staticClass:"fixed"},[e("cu-custom",{attrs:{isBack:!0,bgColor:"text-white"}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("员工查询")])],2)],1),e("v-uni-view",{staticClass:"UCenter-bg"},[e("v-uni-image",{staticClass:"png",attrs:{src:"/static/Logo.png",mode:"widthFix"}}),e("v-uni-image",{staticClass:"gif-wave",attrs:{src:"/static/wave.gif",mode:"scaleToFill"}})],1),e("v-uni-view",{staticClass:" flex margin-sm align-center"},[e("u-input",{staticClass:"margin-sm",attrs:{placeholder:"员工名",type:"text",border:!0},model:{value:t.searchStaff,callback:function(n){t.searchStaff=n},expression:"searchStaff"}}),e("u-input",{staticClass:"margin-sm",attrs:{placeholder:"部门名",type:"text",border:!0},model:{value:t.searchDepart,callback:function(n){t.searchDepart=n},expression:"searchDepart"}}),e("v-uni-button",{staticClass:"padding cu-btn round bg-gradual-blue shadow margin-tb",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.queryStaff()}}},[t._v("筛选")])],1),e("v-uni-view",{staticClass:"padding-sm "},[e("v-uni-view",{staticClass:"cu-list menu sm-border card-menu margin-lr myBorder"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",[e("v-uni-text",{staticClass:"cuIcon-circlefill text-red margin-sm"}),e("v-uni-text",{staticClass:"text-bold"},[t._v("员工列表")])],1)],1),t._l(t.StaffList,(function(n,a){return e("v-uni-view",{key:n.id,staticClass:"cu-item arrow"},[e("v-uni-view",{staticClass:"align-center cf"},[e("v-uni-text",{staticClass:"margin-right-sm cuIcon-title text-blue"}),e("v-uni-text",{staticClass:"text-grey",attrs:{id:a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDetail(n)}}},[t._v(t._s(n.emp_name))]),e("v-uni-text",{class:"margin-left-xl cu-tag light round text-sm fr bg-"+t.colorList[n.dept_id]},[t._v(t._s(n.dept_name))])],1)],1)}))],2)],1),t.pageNum>=t.allPages?e("v-uni-view",{staticClass:"bottom-text"},[e("v-uni-text",[t._v("已经到底了~")])],1):t._e(),e("v-uni-view",{staticClass:"cu-modal",class:"modelDetail"==t.modalName?"show":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideDetail()}}},[e("v-uni-view",{staticClass:"cu-dialog bg-white"},[e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"content"},[t._v(t._s(t.nowStaff.emp_name)),e("v-uni-text",{class:"margin-left-sm cu-tag light round text-sm bg-"+t.colorList[t.nowStaff.dept_id]},[t._v(t._s(t.nowStaff.dept_name))])],1),e("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideDetail.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),e("v-uni-view",{staticClass:"padding margin text-left staffBorder"},[e("v-uni-view",{staticClass:"margin-sm"},[e("v-uni-text",{staticClass:"cuIcon-peoplefill text-orange margin-right-sm"}),t._v("员工ID："+t._s(t.nowStaff.emp_id)),e("v-uni-text",{staticClass:"margin-left",class:0==t.nowStaff.sex?"cuIcon-male text-blue":"cuIcon-female text-pink"})],1),e("v-uni-view",{staticClass:"margin-sm"},[e("v-uni-text",{staticClass:"cuIcon-dianhua text-orange margin-right-sm"}),t._v("电话："+t._s(t.nowStaff.phone))],1),e("v-uni-view",{staticClass:"margin-sm"},[e("v-uni-text",{staticClass:"cuIcon-newsfill text-orange margin-right-sm"}),t._v("邮箱："+t._s(t.nowStaff.email))],1),e("v-uni-view",{staticClass:"margin-sm"},[e("v-uni-text",{staticClass:"cuIcon-homefill text-orange margin-right-sm"}),t._v("地址："+t._s(t.nowStaff.address))],1),e("v-uni-view",{staticClass:"margin-sm"},[e("v-uni-text",{staticClass:"cuIcon-medalfill text-orange margin-right-sm"}),t._v("学历："+t._s(t.nowStaff.speciality)+" -\n\t\t\t\t\t"+t._s(t.nowStaff.education))],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-tabbar-height"}),e("v-uni-view",{staticClass:"cu-tabbar-height"}),e("v-uni-view",{staticClass:"cu-tabbar-height"}),e("v-uni-view",{staticClass:"cu-tabbar-height"}),e("v-uni-view",{staticClass:"cu-tabbar-height"})],1)},s=[]},b4e3:function(t,n,e){"use strict";e.r(n);var a=e("9811"),i=e("080e");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("8500");var r,o=e("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5c361d36",null,!1,a["a"],r);n["default"]=u.exports},c6a0:function(t,n,e){var a=e("8f1e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("4b8e3cb0",a,!0,{sourceMap:!1,shadowMode:!1})},f72b:function(t,n,e){"use strict";(function(t){e("99af"),e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{colorList:this.$store.state.colorList,StaffList:"",modalName:"",nowStaff:"",searchStaff:"",searchDepart:"",pageNum:1,pageSize:10,allPages:1e4}},onLoad:function(){var t=this;this.getStaffList().then((function(n){t.StaffList=n}))},onReachBottom:function(){var n=this;t("log","触底加载数据",this.pageNum," at pages/CommonUser/StaffQuery.vue:113"),this.getStaffList().then((function(t){n.pageNum=n.pageNum+1,n.StaffList=n.StaffList.concat(t)}))},methods:{getStaffList:function(){var n=this;return new Promise((function(e,a){n.pageNum<n.allPages&&(uni.showLoading({title:"加载中"}),uni.request({url:n.$store.state.apiPath+"/employee/queryByIdAndDept",method:"POST",data:{pageNum:n.pageNum,pageSize:n.pageSize,emp_name:n.searchStaff,dept_name:n.searchDepart},success:function(a){n.allPages=a.data.allPages,t("log",a," at pages/CommonUser/StaffQuery.vue:138");var i=a.data.employees;uni.hideLoading(),e(i)},fail:function(t){a(t)}}))}))},queryStaff:function(){var t=this;this.pageNum=1,this.getStaffList().then((function(n){t.StaffList=n}))},showDetail:function(n){t("log","展示详情视图: ",n.emp_name," at pages/CommonUser/StaffQuery.vue:161"),this.nowStaff=n,this.modalName="modelDetail"},hideDetail:function(){t("log","隐藏详情视图"," at pages/CommonUser/StaffQuery.vue:167"),this.nowStaff="",this.modalName=""}}};n.default=a}).call(this,e("0de9")["log"])}}]);