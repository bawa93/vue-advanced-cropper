(window.webpackJsonp=window.webpackJsonp||[]).push([[18,37],{11:function(t,e,a){},12:function(t,e,a){"use strict";var n=a(11);a.n(n).a},14:function(t,e,a){"use strict";a.r(e);a(12);var n=a(1),s=Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"example-wrapper"},[this._t("default")],2)},[],!1,null,null,null);e.default=s.exports},170:function(t,e,a){},371:function(t,e,a){t.exports=a.p+"assets/img/reset.618864b7.svg"},372:function(t,e,a){"use strict";var n=a(170);a.n(n).a},401:function(t,e,a){"use strict";a.r(e);var n=a(13),s=a(14),r={components:{Cropper:n.c,ExampleWrapper:s.default},data:function(){return{image:null}},methods:{reset:function(){this.image=null},uploadImage:function(t){var e=this,a=t.target;if(a.files&&a.files[0]){var n=new FileReader;n.onload=function(t){e.image=t.target.result},n.readAsDataURL(a.files[0])}}}},i=(a(372),a(1)),l=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-example"},[n("div",{staticClass:"cropper-wrapper"},[n("Cropper",{staticClass:"upload-example-cropper",attrs:{"check-orientation":"",src:t.image}}),t._v(" "),n("div",{staticClass:"reset-button",attrs:{title:"Reset Image"},on:{click:function(e){return t.reset()}}},[n("img",{attrs:{src:a(371)}})])],1),t._v(" "),n("div",{staticClass:"button-wrapper"},[n("span",{staticClass:"button",on:{click:function(e){return t.$refs.file.click()}}},[n("input",{ref:"file",attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.uploadImage(e)}}}),t._v("\n\t\t\tUpload image\n\t\t")])])])},[],!1,null,null,null);e.default=l.exports}}]);