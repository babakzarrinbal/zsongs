(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/zsongs/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07d1":function(e,t,n){"use strict";var r=n("b673"),s=n.n(r);s.a},1449:function(e,t,n){"use strict";n.r(t);n("c5f6"),n("96cf");var r=n("3b8d");window.delay=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Number.prototype.round=function(e){var t=window.Math.pow(10,e);return window.Math.round(this*t)/t}},"3db7":function(e,t,n){"use strict";var r=n("4a49"),s=n.n(r);s.a},"4a49":function(e,t,n){},5571:function(e,t,n){"use strict";var r=n("db8e"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("8e6e"),n("ac6a"),n("456d"),n("96cf");var r,s=n("3b8d"),o=n("bd86");n("cadf"),n("551c"),n("f751"),n("097d");r={socket:{url:"https://diliviri.com/",namespace:"superadmin"},http:{main:"db/"}};var a=r,i=(n("ab8b"),n("75fc")),c=a.http,l=Object.keys(c),u={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(o,a){var d,p,f,w,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return d=e,p=t.resolve?function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.retry){e.next=9;break}return t.retry--,e.t0=o,e.next=5,u.get(d,t,n);case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 9:return e.abrupt("return",o({data:null,error:r}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.retry){e.next=2;break}return e.abrupt("return",a(r));case 2:return t.retry--,e.prev=3,e.next=6,u.get(d,t,n);case 6:s=e.sent,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](3),e.abrupt("return",a(e.t0));case 12:return e.abrupt("return",f(s));case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),f=t.resolve?function(e){o({data:e,error:null})}:o,e.slice(0,!0)&&(e=(t.host?c[t.host]:c[l[0]])+e),t.data&&(e+="?"+Object.keys(t.data).reduce((function(e,n){return[].concat(Object(i["a"])(e),[n+"="+t.data[n]])}),[]).join("&")),n.method="get",r.next=8,window.fetch(e,n);case 8:if(w=r.sent,w.ok){r.next=11;break}return r.abrupt("return",p(w));case 11:return r.prev=11,r.next=14,w.json();case 14:m=r.sent,r.next=29;break;case 17:return r.prev=17,r.t0=r["catch"](11),r.prev=19,r.next=22,w.text();case 22:m=r.sent,r.next=29;break;case 25:return r.prev=25,r.t1=r["catch"](19),t.retry=0,r.abrupt("return",p(r.t1));case 29:return r.abrupt("return",f(m));case 30:case"end":return r.stop()}}),r,null,[[11,17],[19,25]])})));return function(e,t){return r.apply(this,arguments)}}())},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(o,a){var i,d,p,f,w;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e,d=t.resolve?function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.retry){e.next=9;break}return t.retry--,e.t0=o,e.next=5,u.post(i,t,n);case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 9:return e.abrupt("return",o({data:null,error:r}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.retry){e.next=2;break}return e.abrupt("return",a(r));case 2:return t.retry--,e.prev=3,e.next=6,u.post(i,t,n);case 6:s=e.sent,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](3),e.abrupt("return",a(e.t0));case 12:return e.abrupt("return",p(s));case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),p=t.resolve?function(e){o({data:e,error:null})}:a,e.slice(0,!0)&&(e=(t.host?c[t.host]:c[l[0]])+e),n.body=n.body||t.data,n.method="post",r.next=8,window.fetch(e,n);case 8:if(f=r.sent,f.ok){r.next=11;break}return r.abrupt("return",d(f));case 11:return r.prev=11,r.next=14,f.json();case 14:w=r.sent,r.next=29;break;case 17:return r.prev=17,r.t0=r["catch"](11),r.prev=19,r.next=22,f.text();case 22:w=r.sent,r.next=29;break;case 25:return r.prev=25,r.t1=r["catch"](19),t.retry=0,r.abrupt("return",d(r.t1));case 29:return r.abrupt("return",p(w));case 30:case"end":return r.stop()}}),r,null,[[11,17],[19,25]])})));return function(e,t){return r.apply(this,arguments)}}())}},d=u,p=(n("87b8"),n("9180"),n("2b0e")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"opacity"}},[e.userresolved?n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"mainloader"}}),e.$root.user?n("div",{staticStyle:{position:"relative",height:"100%"}},[n("div",{attrs:{id:"header"}},[n("div",{staticClass:"float-right",staticStyle:{float:"right",height:"30px",width:"30px",padding:"4px"},on:{click:function(t){e.settingvis=!0}}},[n("img",{staticStyle:{height:"calc(100% - 6px)",padding:"0 3px"},attrs:{src:"img/icons/menu.png",alt:""}})]),n("div",{staticClass:"clearfix"})]),n("transition",{attrs:{name:"slideleft"}},[e.settingvis?n("settings",{on:{hide:function(t){e.settingvis=0}}}):e._e()],1),n("transition",{attrs:{name:"slideleft"}},[e.$root.showmoviedetail?n("moviedetail",{on:{hide:function(t){e.$root.showmoviedetail=0}}}):e._e()],1),n("transition",{attrs:{name:"component-"+e.transisionname}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view",{staticClass:"mainrouteview",attrs:{id:"pagecontainer"}}):e._e()],1)],1),n("div",{staticClass:"d-flex justify-content-around",attrs:{id:"nav"}},[n("a",{class:{"router-link-exact-active router-link-active":1==e.$route.meta.mainindex},on:{click:function(t){return e.nav(t,"/")}}},[e._v("\n          On Line\n        ")]),n("a",{class:{"router-link-exact-active router-link-active":2==e.$route.meta.mainindex},on:{click:function(t){return e.nav(t,"/offline")}}},[e._v("Off Line")])])],1):n("login")],1):e._e()])},w=[],m=(n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-center align-items-center flex-column",attrs:{id:"loginview"}},[e.loginerror?n("div",{staticClass:"alert alert-danger alert-dismissible fade show"},[n("strong",[e._v("error!")]),e._v(" wrong username or password !\n  ")]):e._e(),n("div",{staticClass:"form-group"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"float-left",attrs:{for:"usr"}},[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"email",id:"usr",placeholder:"Email"},domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}})]),n("div",{staticClass:"form-group",staticStyle:{position:"relative"}},[n("label",{staticClass:"float-left",attrs:{for:"pass"}},[e._v("Password:")]),"checkbox"===(e.showpass?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{id:"pass",placeholder:"Password",type:"checkbox"},domProps:{checked:Array.isArray(e.credentials.password)?e._i(e.credentials.password,null)>-1:e.credentials.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginrequest()},change:function(t){var n=e.credentials.password,r=t.target,s=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&e.$set(e.credentials,"password",n.concat([o])):a>-1&&e.$set(e.credentials,"password",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.credentials,"password",s)}}}):"radio"===(e.showpass?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{id:"pass",placeholder:"Password",type:"radio"},domProps:{checked:e._q(e.credentials.password,null)},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginrequest()},change:function(t){return e.$set(e.credentials,"password",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{id:"pass",placeholder:"Password",type:e.showpass?"text":"password"},domProps:{value:e.credentials.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginrequest()},input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}}),e.credentials.password?n("img",{staticClass:"seeimg",staticStyle:{position:"absolute",right:"6px",top:"41px",height:"20px",width:"20px"},attrs:{src:"/img/icon/"+(e.showpass?"not":"")+"see.png"},on:{click:function(t){e.showpass=!e.showpass}}}):e._e()]),n("div",{staticClass:"form-group btn btn-success",staticStyle:{width:"100%",position:"relative"},on:{click:function(t){return e.loginrequest()}}},[e._v("\n      Login\n      "),e.loading?n("img",{staticClass:"loader",attrs:{src:"img/rings.svg"}}):e._e()])])])}),g=[],v={data:function(){return{loginerror:!1,showpass:!1,credentials:{email:null,password:null},loading:!1}},methods:{loginrequest:function(){var e=this;e.loginerror=!1,e.loading=!0,e.socketcall("users/login",e.credentials).then((function(t){if(t.error||!t.data)return e.loading=!1,e.loginerror=!0,window.localStorage.setItem("api_token",null);window.localStorage.setItem("api_token",t.data.message),e.socketreconnect()}))}}},h=v,b=(n("5571"),n("2877")),y=Object(b["a"])(h,m,g,!1,null,null,null),k=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings"},on:{click:function(t){return e.hideme()}}},[n("div",{staticClass:"window",on:{click:function(e){e.stopPropagation()}}},[n("div",{staticClass:"btn btn-danger",staticStyle:{width:"calc(100% - 10px)"},on:{click:function(t){return e.logout()}}},[e._v("logout")]),n("div",{staticClass:"btn btn-warning mt-2",staticStyle:{width:"calc(100% - 10px)"},on:{click:function(t){return e.updateapp()}}},[e._v("Update/reset")]),n("div",{staticClass:"btn btn-info mt-2",staticStyle:{width:"calc(100% - 10px)"},on:{click:function(t){e.showpassform=!e.showpassform}}},[e._v("change password")]),e.showpassform?n("div",{staticClass:"my-2 mx-auto",staticStyle:{width:"calc(100% - 10px)"}},[n("div",{staticClass:"form-group",staticStyle:{position:"relative"}},["checkbox"===(e.showoldpass?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.oldpass,expression:"oldpass"}],staticClass:"form-control",attrs:{placeholder:"Old Password",type:"checkbox"},domProps:{checked:Array.isArray(e.oldpass)?e._i(e.oldpass,null)>-1:e.oldpass},on:{change:function(t){var n=e.oldpass,r=t.target,s=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&(e.oldpass=n.concat([o])):a>-1&&(e.oldpass=n.slice(0,a).concat(n.slice(a+1)))}else e.oldpass=s}}}):"radio"===(e.showoldpass?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.oldpass,expression:"oldpass"}],staticClass:"form-control",attrs:{placeholder:"Old Password",type:"radio"},domProps:{checked:e._q(e.oldpass,null)},on:{change:function(t){e.oldpass=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.oldpass,expression:"oldpass"}],staticClass:"form-control",attrs:{placeholder:"Old Password",type:e.showoldpass?"text":"password"},domProps:{value:e.oldpass},on:{input:function(t){t.target.composing||(e.oldpass=t.target.value)}}}),n("img",{staticClass:"seeimg",staticStyle:{position:"absolute",right:"2px",top:"4px"},attrs:{src:"/img/icon/"+(e.showoldpass?"not":"")+"see.png"},on:{click:function(t){e.showoldpass=!e.showoldpass}}})]),n("div",{staticClass:"form-group",staticStyle:{position:"relative"}},["checkbox"===(e.shownewpass?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.newpass,expression:"newpass"}],staticClass:"form-control",attrs:{placeholder:"New Password",type:"checkbox"},domProps:{checked:Array.isArray(e.newpass)?e._i(e.newpass,null)>-1:e.newpass},on:{change:function(t){var n=e.newpass,r=t.target,s=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&(e.newpass=n.concat([o])):a>-1&&(e.newpass=n.slice(0,a).concat(n.slice(a+1)))}else e.newpass=s}}}):"radio"===(e.shownewpass?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.newpass,expression:"newpass"}],staticClass:"form-control",attrs:{placeholder:"New Password",type:"radio"},domProps:{checked:e._q(e.newpass,null)},on:{change:function(t){e.newpass=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.newpass,expression:"newpass"}],staticClass:"form-control",attrs:{placeholder:"New Password",type:e.shownewpass?"text":"password"},domProps:{value:e.newpass},on:{input:function(t){t.target.composing||(e.newpass=t.target.value)}}}),n("img",{staticClass:"seeimg",staticStyle:{position:"absolute",right:"2px",top:"4px"},attrs:{src:"/img/icon/"+(e.shownewpass?"not":"")+"see.png"},on:{click:function(t){e.shownewpass=!e.shownewpass}}})]),n("div",{staticClass:"btn btn-success mt-2",staticStyle:{width:"calc(100% - 30px)"},on:{click:function(t){return e.savepassword()}}},[e._v("\n        save\n        "),e.savingpassword?n("img",{staticClass:"loader",staticStyle:{margin:"-15px 0"},attrs:{src:"img/rings.svg"}}):e._e()])]):e._e()])])},O=[],S={name:"settings",data:function(){return{showpassform:!1,shownewpass:!1,showoldpass:!1,savingpassword:!1,oldpass:null,newpass:null}},created:function(){},methods:{hideme:function(){this.$emit("hide")},logout:function(){window.localStorage.setItem("api_token",null),this.$root.user=null,this.socketreconnect(),this.hideme()},updateapp:function(){window.location.reload(!0)},savepassword:function(){var e=this;if(!e.savingpassword){if(!e.newpass)return window.toastr.warning("new password is not filled");e.savingpassword=!0,e.socketcall("users/changepass",{newpass:e.newpass,oldpass:e.oldpass}).then((function(t){if(e.savingpassword=!1,t.error)return window.toastr.error((t.error||{}).message||"couldn't save new password");window.toastr.success("password changed!"),e.oldpass=null,e.newpass=null,e.showpassform=!1}))}}},computed:{}},_=S,j=(n("07d1"),Object(b["a"])(_,x,O,!1,null,"6d4afb1c",null)),P=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"maincontainer"}},[n("div",{staticClass:"btn close",on:{click:function(t){return e.$emit("hide")}}},[e._v("X")]),n("div",{staticClass:"videocontainer"},[n("video",{attrs:{src:e.currentlink,controls:""}})]),n("div",{staticClass:"detail"},[n("div",{staticClass:"title"},[e._v(e._s(e.movie.title))]),n("a",{attrs:{href:"http://fdc5.berlincloud.pw/storage/26/Power.S06E02.480p.WEB-DL.Hastidl.mkv"}},[e._v("downloadlink")])])])},$=[],R={data:function(){return{currentlink:"http://fdc5.berlincloud.pw/storage/26/Power.S06E01.480p.WEB-DL.Hastidl.mkv"}},components:{},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem,window.webkitStorageInfo.requestQuota(window.PERSISTENT,1048576,(function(e){window.requestFileSystem(window.PERSISTENT,e,console.log,console.error)}),console.error);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),methods:{},watch:{},computed:{movie:function(){return this.$root.movie}}},E=R,L=(n("3db7"),Object(b["a"])(E,C,$,!1,null,"63bb9fcc",null)),N=L.exports;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={data:function(){return{userresolved:!1,settingvis:!1,transisionname:"slideleft",storageAmount:0,songList:JSON.parse(window.localStorage.getItem("bzsongs-offline"))}},components:{login:k,settings:P,moviedetail:N},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this,t.getuser(),this.$root.getStorageInfo();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getuser:function(){var e=this;e.$root.user={},e.userresolved=!0;var t=document.getElementById("preloader");if(t){var n=function(){window.clearTimeout(r),t&&t.parentNode.removeChild(t),t=null},r=window.setTimeout(n,3e3);t.addEventListener("transitionend",n),document.getElementById("preloader").style.opacity=0}},nav:function(e,t){var n=this.$route.meta.mainindex,r=this.$router.resolve(t).route.meta.mainindex;n!==r&&(this.transisionname=n>r?"slideright":"slideleft",this.$router.push(t))},queryhandeler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n="string"==t.type?JSON.parse(t.data):t,n){e.next=3;break}return e.abrupt("return");case 3:r=this.$router,r.replace(I({},r.currentRoute,{query:null}));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},watch:{},computed:{}},A=q,D=(n("5c0b"),Object(b["a"])(A,f,w,!1,null,null,null)),U=D.exports,z=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid bg-dark text-light"},[n("div",{staticClass:"songs"},e._l(e.list,(function(t,r){return n("div",{key:r,staticClass:"w-100 my-2 shadow bg-light text-dark clickable d-flex",on:{click:function(n){e.selecteditem=t}}},[n("audio",{staticStyle:{height:"25px"},attrs:{src:t.url,controls:"",preload:"metadata"}}),n("span",{staticClass:"flex-grow-1"},[e._v(e._s(t.title))]),n("a",{staticClass:"clickable",attrs:{href:t.url+"?id=adf",target:"_blank",download:"rihanna--"+t.title}},[e._v("download")])])})),0)])},F=[],W={data:function(){return{list:[]}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.fetch("https://babakzarrinbal.github.io/db/zsongs/songs/rihanna.json").then((function(e){return e.json()}));case 2:this.list=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{}},J=W,B=Object(b["a"])(J,M,F,!1,null,null,null),H=B.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid bg-dark"},[n("div",{staticClass:"position-fixed d-flex",staticStyle:{top:"0",left:"0","z-index":"99"}},[n("div",{staticClass:"px-2 clickable font-weight-bold text-light pt-1",on:{click:e.addStorage}},[e._v("storage:"+e._s(e.$root.storeUsed+"/"+e.$root.storeTotal)+" MB")]),n("div",{staticClass:"btn btn-primary px-1 py-1",staticStyle:{"font-size":"12px"},on:{click:function(t){return e.$refs.fileinput.click()}}},[e._v("directory")]),n("input",{ref:"fileinput",staticStyle:{display:"none"},attrs:{type:"file",multiple:"",webkitdirectory:"true"},on:{change:function(t){return e.addSongs(t)}}})]),n("audio",{ref:"audioEl",staticClass:"w-100 d-block",attrs:{src:e.loc+e.selectedSong.name,controls:""}}),n("div",{staticClass:"list"},e._l(e.songList,(function(t,r){return n("div",{key:r,staticClass:"song my-2 py-2 text-center bg-light clickable",on:{click:function(n){return e.changeSong(t)}}},[e._v(e._s(t.title))])})),0)])},K=[],X=(n("6762"),n("2fdb"),n("7f7f"),n("5df3"),n("c5f6"),{data:function(){return{loc:"",selectedSong:{},songList:[],fs:null}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.songList=JSON.parse(window.localStorage.getItem("bzsongs-offline")||[]),window.song=this.songList,this.selectedSong=this.songList[0]||{},this.loc="filesystem:"+window.location.origin+"/persistent/songs/";case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{addStorage:function(){var e=this,t=Number(window.prompt("How much (in MB)"));console.log(t),t&&window.webkitStorageInfo.requestQuota(window.PERSISTENT,1048576*t,(function(){e.$root.getStorageInfo(),e.$root.storeTotal||(window.requestFileSystem||window.webkitRequestFileSystem)(window.PERSISTENT,1048576*e.$root.storeTotal,(function(e){return e.root.getDirectory("songs",{create:!0,exclusive:!1},console.log,(function(){return window.alert("error creating folder!!!")}))}),(function(){return window.alert("error getting sotrage!!!")}))}),(function(){return window.alert("Error Happend!")}))},addSongs:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,s,o,a,c,l,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return(window.requestFileSystem||window.webkitRequestFileSystem)(window.PERSISTENT,1048576*(u.$root.storeTotal-u.$root.storeUsed),(function(t){return u.loc=t.root.toURL()+"songs/",e(t)}),(function(){return window.alert("error getting sotrage!!!")}))}));case 2:n=e.sent,window.fs=n,r=t.target.files,n.root.getDirectory("songs",{create:!0,exclusive:!1},console.log),s=[],o=function(e){var t=r[e];if(![".mp3"].includes(t.name.slice(-4).toLowerCase()))return"continue";var o=void 0,a=void 0;s.push(new Promise((function(e){return o=e}))),n.root.getFile("songs/"+t.name,{create:!0},(function(e){if(e.size)return o(null);e.createWriter((function(n){n.onwriteend=function(){return o(a?null:t)},n.onerror=function(){a=!0,u.$root.storUsed==u.$root.storeTotal&&window.alert("Storage is full"),e.remove((function(){return window.console.log("file ",t.name,"deleted!",window.console.error)}))},n.write(t)}),console.error)}),console.error)},a=0;case 9:if(!(a<r.length)){e.next=16;break}if(c=o(a),"continue"!==c){e.next=13;break}return e.abrupt("continue",13);case 13:a++,e.next=9;break;case 16:return e.next=18,Promise.all(s);case 18:l=e.sent,l=l.filter((function(e){return e})).map((function(e){return{title:e.name.slice(0,e.name.lastIndexOf(".")),name:e.name,size:e.size,type:e.type,webkitRelativePath:e.webkitRelativePath}})),console.log(l),this.songList=[].concat(Object(i["a"])(this.songList),Object(i["a"])(l)),window.localStorage.setItem("bzsongs-offline",JSON.stringify(this.songList));case 23:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),changeSong:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.selectedSong=t,e.next=3,this.$nextTick();case 3:this.$refs.audioEl.play();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}}),G=X,V=Object(b["a"])(G,Q,K,!1,null,null,null),Y=V.exports;p["a"].use(z["a"]);var Z=new z["a"]({routes:[{path:"/",name:"newList",component:H,meta:{mainindex:1,keepAlive:!0}},{path:"/offline",name:"offlineList",component:Y,meta:{mainindex:2,keepAlive:!0}}]}),ee=Z;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n("1449"),window.serverconfig=a;var re=n("fe3c");re.attach(document.body),n("8aa8"),p["a"].mixin({data:function(){return ne({},d)}}),p["a"].config.productionTip=!0,new p["a"]({router:ee,data:{user:null,storeTotal:0,storeUsed:0,getStorageInfo:function(){var e=this;window.webkitStorageInfo.queryUsageAndQuota(window.PERSISTENT,(function(t,n){e.$root.storeUsed=window.Math.round(t/1048576),e.$root.storeTotal=window.Math.round((t+n)/1048576)}),(function(){this.$root.storeUsed="Error !!!",this.$root.storeTotal="Error !!!"}))}},render:function(e){return e(U)}}).$mount("#app");var se=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.navigator.wakeLock.request("screen");case 3:window.wakeLock=e.sent,window.wakeLock.addEventListener("release",(function(){console.log("Wake Lock was released")})),console.log("Wake Lock is active"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();se();var oe=function(){null!==window.wakeLock&&"visible"===window.document.visibilityState&&se()};window.document.addEventListener("visibilitychange",oe),window.document.addEventListener("fullscreenchange",oe)},"5c0b":function(e,t,n){"use strict";var r=n("e332"),s=n.n(r);s.a},"87b8":function(e,t,n){},"8aa8":function(e,t,n){"use strict";n.r(t);n("34ef"),n("a481"),n("14b9");var r,s,o=n("9483"),a="BJIGTwPsHQ_J1Yg_9xbUDLnrz_jTq8-nDxuU3_nXPF7-DNU645CLMBsrm73g6HefM74RSTjtLr2upgWKQ30SFLk";function i(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n),s=new Uint8Array(r.length),o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}window.serviceWorkerPromise=new Promise((function(e){return r=e})),window.subscribeUser=function(){return new Promise((function(e,t){if("granted"==window.Notification.permission)return e('localStorage.getItem("pushNotificationCredentials")');window.serviceWorkerPromise.then((function(n){n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:i(a)}).then((function(t){window.localStorage.setItem("pushNotificationCredentials",JSON.stringify(t)),e(t)})).catch(t)}))}))},window.propforinstall=null,Object(o["a"])("".concat("/zsongs/","service-worker.js"),{registered:r}),(window.navigator||{}).serviceWorker&&window.navigator.serviceWorker.ready.then((function(){window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),s=e,window.propforinstall=function(){s.prompt(),s.userChoice.then((function(e){"accepted"===e.outcome&&window.subscribeUser(),s=null}))}}))}))},9180:function(e,t,n){},b673:function(e,t,n){},db8e:function(e,t,n){},e332:function(e,t,n){}});