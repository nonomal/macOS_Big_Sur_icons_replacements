(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"09e0":function(e,t,a){},"2b56":function(e,t,a){"use strict";a("09e0")},7277:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("coral-toast",{attrs:{id:"iconUpdated",variant:"success"}},[e._v(" All icons have been updated ")]),a("coral-toast",{attrs:{id:"iconApproved",variant:"success"}},[e._v(" Icon has been approved ")]),a("coral-toast",{attrs:{id:"approveError",variant:"error"}},[e._v(" There has been an error, please Approve again ")]),a("coral-toast",{attrs:{id:"error",variant:"error"}},[e._v(" There has been an error, please try again. ")]),e.isAuth?e._e():a("div",{staticClass:"coral-Well m-t-50",attrs:{id:"signIn-wrapper"}},[a("div",{staticClass:"m-b-20"},[a("coral-textfield",{tag:"input",attrs:{id:"email",type:"email",placeholder:"Email","aria-label":"text input"}})],1),a("div",{staticClass:"m-b-20"},[a("coral-textfield",{tag:"input",attrs:{id:"password",type:"password",placeholder:"Password","aria-label":"text input"}})],1),a("div",{staticClass:"m-t-40 m-b-5",attrs:{id:"signin-button"}},[a("coral-button",{tag:"button",attrs:{variant:"cta"},on:{click:e.signIn}},[e._v("Sign In")])],1)]),e.isObjEmpty(e.icons)&e.isAuth?a("h3",{staticClass:"coral-Heading--M m-t-50",attrs:{id:"noIcons"}},[e._v(" No icons to aprove ")]):e._e(),a("div",{staticClass:"m-t-40"}),a("coral-dialog",{attrs:{id:"editUserDialog"}},[a("coral-dialog-header",[e._v(e._s(e.selectedUser.usersName))]),a("coral-dialog-content",[a("form",{staticClass:"coral-Form coral-Form--vertical",staticStyle:{"max-width":"300px"}},[a("label",{staticClass:"coral-FieldLabel",attrs:{id:"nameEditUser"}},[e._v("usersName")]),a("coral-textfield",{tag:"input",staticClass:"coral-Form-field",attrs:{id:"nameEditUserInput",value:e.selectedUser.usersName,labelledby:"nameEditUser"},on:{change:function(t){return e.editDoc(e.selectedUser,t,"usersName",!0)}}}),a("label",{staticClass:"coral-FieldLabel",attrs:{id:"creditEditUser"}},[e._v("Credit")]),a("coral-textfield",{tag:"input",staticClass:"coral-Form-field",attrs:{id:"creditEditUserInput",value:e.selectedUser.creditUrl,labelledby:"creditEditUser"},on:{change:function(t){return e.editDoc(e.selectedUser,t,"credit",!0)}}}),a("label",{staticClass:"coral-FieldLabel",attrs:{id:"emailEditUser"}},[e._v("email")]),a("coral-textfield",{tag:"input",staticClass:"coral-Form-field",attrs:{id:"emailEditUserInput",value:e.selectedUser.email,labelledby:"emailEditUser"},on:{change:function(t){return e.editDoc(e.selectedUser,t,"email",!0)}}})],1)]),a("coral-dialog-footer",[a("coral-button",{tag:"button",attrs:{variant:"primary","coral-close":""}},[e._v("Done")])],1)],1),a("section",{staticClass:"dashBoard"},[e.isAuth?a("div",{staticClass:"main-search-wrapper coral-bg p-b-15",on:{click:function(t){e.isSearch=!0}}},[a("div",{staticClass:"m-auto main-search"},[a("div",{staticClass:"shadow main-border-radius"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],staticClass:"_coral-Search-input _coral-Textfield searchBar",attrs:{placeholder:"(Not working yet) - Icons to approve: "+e.iconListLen,type:"text",name:"name","aria-label":"text input"},domProps:{value:e.searchString},on:{input:function(t){t.target.composing||(e.searchString=t.target.value)}}}),a("svg",{staticClass:"icon fill-dark searchBar-left",attrs:{id:"coral-css-icon-Magnifier",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M15.77 14.71l-4.534-4.535a6.014 6.014 0 1 0-1.06 1.06l4.533 4.535a.75.75 0 1 0 1.061-1.06zM6.5 11A4.5 4.5 0 1 1 11 6.5 4.505 4.505 0 0 1 6.5 11z"}})])])])]):e._e(),a("div",{staticClass:"p-t-20 p-b-50 dashboard-wrapper"},e._l(e.icons,(function(t){return a("div",{key:t.usersName,staticClass:"p-b-30"},[a("h3",{staticClass:"coral-Heading--M p-b-10 text-left"},[a("a",{attrs:{href:"mailto:"+t.email+"?subject=macOS icons submission"}},[e._v(" "+e._s(t.usersName)+" ")]),a("img",{staticClass:"dashboard-edit-user",attrs:{src:e.coralIcons.edit,alt:""},on:{click:function(a){return e.showDialog("editUserDialog",t)}}})]),a("div",{staticClass:"icon-list-area"},e._l(t.icons,(function(t){return a("div",{key:t.fileName,staticClass:"card-wrapper coral-card"},[a("div",{staticClass:"card-img-wrapper",staticStyle:{"max-width":"120px"}},[t.isReview?a("div",{staticClass:"loading-approval-wrapper"},[a("div",{staticClass:"loading-approval"})]):e._e(),a("a",{attrs:{href:t.imgUrl,target:"_blank"}},[a("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",loading:e.coralIcons.loading},expression:"{ selector: 'img', loading: coralIcons.loading }"}]},[a("img",{staticClass:"w-full",attrs:{"data-src":t.imgUrl}})])]),a("div",{staticClass:"quick-actions-wrapper"},[a("div",{staticClass:"quick-action-el"},[a("coral-icon",{staticClass:"h-full quick-action-icon",attrs:{id:t.fileName,icon:e.coralIcons.delete,title:"Delete"},on:{click:function(a){return e.deleteSubmission(t)}}})],1)])]),a("div",{staticClass:"card-text-wrapper p-l-15 p-r-15 p-b-0"},[a("p",{staticClass:"coral-Body--XS opacity-60 m-b-0"},[a("coral-textfield",{tag:"input",staticClass:"editable-input coral-Body--XS opacity-50 m-b-0",attrs:{type:"text",variant:"quiet",value:e.getDate(t.timeStamp),"aria-label":"text input"},on:{change:function(a){return e.changeDate(t,a)}}})],1),a("h3",{staticClass:"coral-font-color m-b-0"},[a("coral-textfield",{tag:"input",staticClass:"editable-input f-w-800 m-b-0",attrs:{type:"text",variant:"quiet",value:e.prettifyName(t.appName),"aria-label":"text input"},on:{change:function(a){return e.editDoc(t,a,"appName",!1)}}})],1),a("p",{staticClass:"coral-Body--XS p-b-0 opacity-80 m-b-0"},[a("coral-textfield",{tag:"input",staticClass:"editable-input",attrs:{type:"text",variant:"quiet",value:t.usersName,"aria-label":"text input"},on:{change:function(a){return e.editDoc(t,a,"usersName")}}})],1),""!=t.credit?a("p",{staticClass:"coral-Body--XS p-b-0 opacity-50 m-b-0"},[a("coral-textfield",{tag:"input",staticClass:"editable-input small-text",attrs:{type:"text",variant:"quiet",value:t.credit,"aria-label":"text input"},on:{change:function(a){return e.editDoc(t,a,"credit")}}})],1):e._e(),""==t.credit?a("p",{staticClass:"coral-Body--XS p-b-0 opacity-50 m-b-0"},[a("coral-textfield",{tag:"input",staticClass:"editable-input small-text",attrs:{type:"text",variant:"quiet",value:"n/a","aria-label":"text input"},on:{change:function(a){return e.editDoc(t,a,"credit")}}})],1):e._e(),a("div",{staticClass:"p-t-15"},[a("button",{staticClass:"coral-btn coral-btn-primary",on:{click:function(a){return e.approveIcon(t)}}},[e._v("Approve")]),"user@email.com"!=t.email?a("div",{staticClass:"p-t-10"},[a("a",{staticClass:"coral-Link",attrs:{href:"mailto:"+t.email+"?subject=macOS icons submission&body="+t.usersName}},[e._v(" email ")])]):e._e()])])])})),0)])})),0)])],1)},s=[],i=(a("7db0"),a("b0c0"),a("b64b"),a("d3b7"),a("ddb0"),a("ade3")),o=(a("96cf"),a("1da1")),r=a("5530"),c=a("2b0e"),l=a("2f62"),d=a("bf48"),u=a.n(d);u.a.initialize("macOSicons"),u.a.serverURL="https://media.macosicons.com/parse";var p=u.a.Object.extend("Icons");u.a.User.enableUnsafeCurrentUser();var m=u.a.User.current(),g=20,f={components:{},data:function(){return{icons:{},isSearch:!1,searchString:"",iconListLen:0,howManyRecords:0,sortBy:"usersName",emailMsg:"Thanks you for your submission to macosicons.com! I'm just getting in touch with you to ask if you could ..., otherwise the icons won't work propperly. You can either email me back or re-submit the icons on macosicons.com. Thanks again, Elias webbites.io",approvedIcons:{},isAuth:!1,selectedUser:{},scrolledToBottom:!0,coralIcons:{addIcon:a("76a4"),delete:a("0d45"),newItem:a("a859"),edit:a("daf0"),loading:a("ad7e")}}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["showToast"])),{},{uploadFile:function(){var e=document.getElementById("profilePhotoFileUpload");if(e.files.length>0){var t=e.files[0];console.log(t);var a=t.name;console.log(a);var n=new u.a.File(a,t);n.save().then((function(e){console.log("Success: ",e)}),(function(e){console.log(e)}))}},showDialog:function(e,t){var a=this,n=document.getElementById("nameEditUserInput"),s=document.getElementById("creditEditUserInput"),i=document.getElementById("emailEditUserInput");n.value=t.usersName,s.value=t.creditUrl,i.value=t.email,document.getElementById(e).show(),a.selectedUser=t,console.log(t)},getDate:function(e){var t=new Date(e),a=t.getUTCDate();a<10&&(a="0"+a);var n=t.getUTCMonth()+1;n<10&&(n="0"+n);var s=t.getFullYear(),i=a+"/"+n+"/"+s;return i},editDoc:function(e,t,a,n){var s=this;return Object(o["a"])(regeneratorRuntime.mark((function o(){var r,c,l,d,p,m,g,f;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(s,r=t.target.value,console.log(r),!n){o.next=20;break}Object.keys(e.icons).length,0,o.t0=regeneratorRuntime.keys(e.icons);case 7:if((o.t1=o.t0()).done){o.next=18;break}return c=o.t1.value,l=u.a.Object.extend("Icons"),d=new u.a.Query(l),o.next=13,d.get(e.icons[c].id);case 13:p=o.sent,p.set(Object(i["a"])({},a,r)),p.save().then((function(){console.log(a,"updated.")})).catch((function(e){document.getElementById("error").show()})),o.next=7;break;case 18:o.next=28;break;case 20:if(n){o.next=28;break}return m=u.a.Object.extend("Icons"),g=new u.a.Query(m),o.next=25,g.get(e.id);case 25:f=o.sent,f.set(Object(i["a"])({},a,r)),f.save().then((function(){console.log(a,"updated.")})).catch((function(e){document.getElementById("error").show()}));case 28:case"end":return o.stop()}}),o)})))()},signIn:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=document.getElementById("email").value,a=document.getElementById("password").value,console.log(t),n=new u.a.User,n.set({username:t,password:a,email:t}),e.next=7,console.log(n);case 7:return e.prev=7,e.next=10,n.signUp().then((function(){parent.isAuth=!0}));case 10:console.log(),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](7),console.log(e.t0.code),202==e.t0.code&&u.a.User.logIn(t,a).then((function(e){parent.isAuth=!0,console.log(e)})).catch((function(e){console.log(e)}));case 17:case"end":return e.stop()}}),e,null,[[7,13]])})))()},isObjEmpty:function(e){return 0==Object.keys(e).length},deleteSubmission:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t,console.log(e),s=new u.a.Query(p),a.next=5,s.get(e.id);case 5:i=a.sent,i.destroy().then((function(){c["a"].delete(n.icons[e.usersName].icons,e.appName),0==Object.keys(n.icons[e.usersName].icons).length&&c["a"].delete(n.icons,e.usersName)})).catch((function(e){console.log(e)}));case 7:case"end":return a.stop()}}),a)})))()},prettifyName:function(e){return e=e.replaceAll("_"," "),e},approveIcon:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=t,console.log(e),s=n.icons[e.usersName].icons[e.appName],u.a.Cloud.run("approve",e).then((function(e){console.log(e),c["a"].set(s,"isReview",!0),n.showToast({id:"iconApproved"})})).catch((function(e){console.log(e),n.showToast({id:"approveError"})}));case 4:case"end":return a.stop()}}),a)})))()},indexIcon:function(e){console.log(e),functions.useFunctionsEmulator("http://localhost:5001");var t=functions.httpsCallable("indexIconTest");t(e).then((function(e){console.log(e.data)}))},getIconListLen:function(e){var t=this;e.count().then((function(e){console.log(e),t.iconListLen=e}))},loadMore:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n,s,i,o,r,l,d,m,f,v,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=a.howManyRecords,a.howManyRecords=n+g,s=new u.a.Query(p),s.equalTo("approved",!1),s.ascending(a.sortBy),s.skip(n),s.limit(g),t.next=10,s.find();case 10:for(o in i=t.sent,setTimeout((function(){a.scrolledToBottom=!0}),800),i){for(d in r=i[o].attributes,r,l={},r)l[d]=r[d];l.imgUrl="",m=l.usersName,f=l.appName,v=l.email,h=l.credit,l.id=i[o].id,""==m||void 0==m?(console.log("usersName undefined "),console.log("docData: ",l)):void 0==a.icons[m]?(c["a"].set(a.icons,m,{usersName:m,email:v,icons:{},creditUrl:h}),c["a"].set(a.icons[m].icons,f,l),c["a"].set(a.icons[m].icons[f],"imgUrl",l.highResPngUrl)):(c["a"].set(a.icons[m].icons,f,l),c["a"].set(a.icons[m].icons[f],"imgUrl",l.highResPngUrl))}case 13:case"end":return t.stop()}}),t)})))()},scroll:function(){var e=this;window.onscroll=function(){var t=document.documentElement.offsetHeight-(Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight)<1200;t&&e.scrolledToBottom&&!e.isSearch&&(e.scrolledToBottom=!1,e.loadMore())}}}),mounted:function(){var e=this;function t(e){switch(e.code){case u.a.Error.INVALID_SESSION_TOKEN:u.a.User.logOut(),window.location.reload();break;default:break}}if(m){if(!u.a.User.current().attributes.isAdmin)return e.$router.push({path:"/"}),u.a.User.logOut(),void console.log("Hiii");function a(){return n.apply(this,arguments)}function n(){return n=Object(o["a"])(regeneratorRuntime.mark((function a(){var n,s,i,o,r,l,d,m,f;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new u.a.Query(p),n.equalTo("approved",!1),n.ascending("usersName"),n.limit(g),a.prev=4,a.next=7,n.find();case 7:s=a.sent,a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](4),console.log(a.t0),t(a.t0);case 14:for(i in e.getIconListLen(n),e.howManyRecords=g,s)o=s[i].attributes,r=JSON.parse(JSON.stringify(o)),r.id=s[i].id,r.imgUrl=r.highResPngUrl,l=r.usersName,d=r.appName,m=r.email,f=r.credit,void 0,""==l||void 0==l?void 0==e.icons["Undefined"]?(c["a"].set(e.icons,"Undefined",{usersName:"Undefined",email:m,icons:{},creditUrl:f}),c["a"].set(e.icons["Undefined"].icons,d,r),c["a"].set(e.icons["Undefined"].icons[d],"usersName","Undefined"),c["a"].set(e.icons["Undefined"],"usersName","Undefined")):(c["a"].set(e.icons["Undefined"].icons,d,r),c["a"].set(e.icons["Undefined"].icons[d],"usersName","Undefined"),c["a"].set(e.icons["Undefined"],"usersName","Undefined")):void 0==e.icons[l]?(c["a"].set(e.icons,l,{usersName:l,email:m,icons:{},creditUrl:f}),c["a"].set(e.icons[l].icons,d,r)):c["a"].set(e.icons[l].icons,d,r);e.scroll();case 18:case"end":return a.stop()}}),a,null,[[4,10]])}))),n.apply(this,arguments)}e.isAuth=!0,a()}else e.isAuth=!1,console.log("You are not logged in")},computed:{}},v=f,h=(a("2b56"),a("2877")),b=Object(h["a"])(v,n,s,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=about.4e4265bc.js.map