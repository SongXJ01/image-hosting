(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Manage-StaffDetail"],{4434:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uRadioGroup:a("9d95").default,uRadio:a("37cf").default,uToast:a("5d05").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBack:!0,bgColor:"text-white"}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("员工管理")])],2)],1),a("v-uni-view",{staticClass:"UCenter-bg"},[a("v-uni-image",{staticClass:"png",attrs:{src:"/static/Logo.png",mode:"widthFix"}}),a("v-uni-image",{staticClass:"gif-wave",attrs:{src:"/static/wave.gif",mode:"scaleToFill"}})],1),a("v-uni-view",{staticClass:"padding-xl text-left"},[a("v-uni-view",{staticClass:"margin-sm text-bold text-lg"},[a("v-uni-text",{staticClass:"cuIcon-peoplefill text-orange margin-right-sm"}),t._v("员工 ID："+t._s(t.nowStaff.emp_id)),a("u-radio-group",{staticClass:"margin-left-lg",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioGroupChange.apply(void 0,arguments)}},model:{value:t.nowStaff.sex,callback:function(e){t.$set(t.nowStaff,"sex",e)},expression:"nowStaff.sex"}},t._l(t.genderlist,(function(t,e){return a("u-radio",{key:e,attrs:{name:t.name,disabled:t.disabled}},[a("v-uni-text",{class:0==t.name?"cuIcon-male text-blue":"cuIcon-female text-pink"})],1)})),1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"cuIcon-peoplefill text-green margin-right-sm"}),t._v("姓名：")],1),a("v-uni-input",{attrs:{placeholder:"(请填写姓名)",type:"text"},model:{value:t.nowStaff.emp_name,callback:function(e){t.$set(t.nowStaff,"emp_name",e)},expression:"nowStaff.emp_name"}}),a("v-uni-picker",{attrs:{value:t.deptIndex,range:t.deptPicker},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.deptPickerChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker text-left"},[t._v(t._s(""==t.nowStaff.dept_name?"(请选择部门)":t.nowStaff.dept_name))])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"cuIcon-dianhua text-green margin-right-sm"}),t._v("电话：")],1),a("v-uni-input",{attrs:{placeholder:"(请填写电话)",type:"text"},model:{value:t.nowStaff.phone,callback:function(e){t.$set(t.nowStaff,"phone",e)},expression:"nowStaff.phone"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"cuIcon-newsfill text-green margin-right-sm"}),t._v("邮箱：")],1),a("v-uni-input",{attrs:{placeholder:"(请填写邮箱)",type:"text"},model:{value:t.nowStaff.email,callback:function(e){t.$set(t.nowStaff,"email",e)},expression:"nowStaff.email"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"cuIcon-homefill text-green margin-right-sm"}),t._v("地址：")],1),a("v-uni-input",{attrs:{placeholder:"(请填写地址)",type:"text"},model:{value:t.nowStaff.address,callback:function(e){t.$set(t.nowStaff,"address",e)},expression:"nowStaff.address"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"cuIcon-medalfill text-green margin-right-sm"}),t._v("学历：")],1),a("v-uni-input",{attrs:{placeholder:"(专业)",type:"text"},model:{value:t.nowStaff.speciality,callback:function(e){t.$set(t.nowStaff,"speciality",e)},expression:"nowStaff.speciality"}}),a("v-uni-picker",{attrs:{value:t.eduIndex,range:t.eduPicker},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.eduPickerChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker"},[t._v(t._s(""==t.nowStaff.education?"(请选择学历)":t.nowStaff.education))])],1)],1)],1),a("v-uni-view",{staticClass:"text-center"},[a("v-uni-button",{staticClass:"padding cu-btn round line-orange shadow margin",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateStaffSubmit()}}},[t._v("确认修改")])],1),a("u-toast",{ref:"uToast"}),a("v-uni-view",{staticClass:"cu-tabbar-height"}),a("v-uni-view",{staticClass:"cu-tabbar-height"}),a("v-uni-view",{staticClass:"cu-tabbar-height"})],1)},s=[]},e67f:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("2f62"),n={computed:(0,i.mapState)({nowStaff:function(t){return t.staff}}),data:function(){return{genderlist:[{name:0,disabled:!1},{name:1,disabled:!1}],eduPicker:["高中及以下","本科","硕士","博士及以上"],eduIndex:-1,deptPicker:["人事部","公关部","办公室","宣传部"],deptIndex:-1}},methods:{eduPickerChange:function(t){this.nowStaff.education=this.eduPicker[t.detail.value]},deptPickerChange:function(t){this.nowStaff.dept_name=this.deptPicker[t.detail.value]},updateStaffSubmit:function(){var e=this;this.verification()&&(uni.showLoading({title:"添加中"}),uni.request({url:this.$store.state.apiPath+"/employee/update",method:"POST",data:{dept_id:1,dept_name:this.nowStaff.dept_name,emp_id:this.nowStaff.emp_id,emp_name:this.nowStaff.emp_name,sex:this.nowStaff.sex,phone:this.nowStaff.phone,address:this.nowStaff.address,email:this.nowStaff.email,education:this.nowStaff.education,speciality:this.nowStaff.speciality},success:function(a){t("log",a," at pages/Manage/StaffDetail.vue:135"),uni.hideLoading(),e.$refs.uToast.show({title:"修改成功",type:"success"}),setTimeout((function(){uni.navigateBack()}),500)}}))},verification:function(){if(this.nowStaff.address<1||this.nowStaff.address<100)return this.$refs.uToast.show({title:"请正确填写地址",type:"error"}),!1;if(this.nowStaff.emp_name<1||this.nowStaff.emp_name<50)return this.$refs.uToast.show({title:"请正确填写姓名",type:"error"}),!1;if(this.nowStaff.education<1||this.nowStaff.education<50)return this.$refs.uToast.show({title:"请正确填写学历",type:"error"}),!1;var e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(!e.test(this.nowStaff.email))return t("log",this.nowStaff.email," at pages/Manage/StaffDetail.vue:174"),this.$refs.uToast.show({title:"请正确填写邮箱",type:"error"}),!1;var a=/^1[3456789]\d{9}$/;return!!a.test(this.nowStaff.phone)||(t("log",this.nowStaff.phone," at pages/Manage/StaffDetail.vue:183"),this.$refs.uToast.show({title:"请填写11位电话号码",type:"error"}),!1)},radioGroupChange:function(e){t("log","修改性别：",this.nowStaff.sex," at pages/Manage/StaffDetail.vue:195")}}};e.default=n}).call(this,a("0de9")["log"])},ec0c:function(t,e,a){"use strict";a.r(e);var i=a("4434"),n=a("f0f1");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var o,u=a("f0c5"),f=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"3773b05f",null,!1,i["a"],o);e["default"]=f.exports},f0f1:function(t,e,a){"use strict";a.r(e);var i=a("e67f"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a}}]);