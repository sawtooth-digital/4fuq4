(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{171:function(e,t,o){var content=o(176);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(52).default)("035dbfb5",content,!0,{sourceMap:!1})},172:function(e,t,o){var content=o(178);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(52).default)("3e1badb4",content,!0,{sourceMap:!1})},175:function(e,t,o){"use strict";var n=o(171);o.n(n).a},176:function(e,t,o){(e.exports=o(51)(!1)).push([e.i,".text__section{display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;justify-content:center;z-index:1;position:absolute;top:50%;right:5%;-webkit-transform:translateY(-50%);transform:translateY(-50%);padding:30px 40px;max-width:480px}.text__section__overlay{position:absolute;top:0;left:0;opacity:.8;background:#232323;width:100%;height:100%}.text__section__text{z-index:1;position:relative}h1{font-size:3em;margin:10px 0;font-weight:200}h1,h2{line-height:1em}h2{font-size:2em;margin:10px 0 14px;font-weight:500}h2 span{font-weight:800}p{font-size:1em;line-height:1.2em;margin:8px 0;font-weight:500}ul{margin:14px 0}li{margin:10px 0}li,ul{font-size:1em;line-height:1.2em;font-weight:500}hr{margin:20px 0 10px}.text__section__form{z-index:1;position:relative;transition:max-height .5s;overflow:hidden;max-height:0}form{margin:10px 0 0}fieldset{border:none;padding:0}input{margin:10px 0;padding:10px 16px;font-size:1em;border:none;box-shadow:none}button,input{width:100%;line-height:1em}button{padding:14px 20px;text-transform:uppercase;background-color:#23adb4;border-radius:15px;text-align:center;margin:24px 0 10px;font-size:1.1em;border:none;color:#fff;font-weight:700;letter-spacing:1px;cursor:pointer}.text__section__success{text-align:center;z-index:1;position:relative;flex-direction:column;align-content:center;justify-content:center;max-height:0;transition:max-height 1.6s;overflow:hidden}.text__section__success h3,.text__section__success h4{margin:10px 0}.text__section__success p{font-size:.8em;line-height:1.2em;margin:20px 0 0}.text__section__success a{color:#fff}.show__success{max-height:400px}",""])},177:function(e,t,o){"use strict";var n=o(172);o.n(n).a},178:function(e,t,o){(e.exports=o(51)(!1)).push([e.i,"main{min-height:100vh;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;color:#fff}.main__overlay{min-width:100vw;min-height:100vh;position:absolute;top:0;left:0;opacity:.35;z-index:0}.overlay--dark{background-color:#000}.overlay--light{background-color:#fff}",""])},183:function(e,t,o){"use strict";o.r(t);var n=o(65),r={props:{squeeze:Object},data:function(){return{success:!0,formData:{firstname:"",email:"",type1:this.squeeze.type_of_product,type2:this.squeeze.type_of_product_2,type3:this.squeeze.type_of_product_3}}},methods:{handleSubmit:function(){var data={opt:"on",first_name:this.formData.firstname,email_address:this.formData.email,type:this.formData.type1,type2:this.formData.type2,type3:this.formData.type3},th=this;n.post("https://www.4fuq.com/directus/public/_/items/squeeze",data).then(function(e){th.success=!1})},sumbitSuccess:function(){document.querySelector(".text__section__form").textContent="Sent! Check Your Email!"}}},c=(o(175),o(18)),l={components:{TextSection:Object(c.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text__section"},[o("div",{staticClass:"text__section__overlay"}),e._v(" "),o("div",{staticClass:"text__section__text"},[e.squeeze.name_of_product?o("h1",[e._v(e._s(e.squeeze.name_of_product))]):e._e(),e._v(" "),e.squeeze.sub_headline?o("h2",{domProps:{innerHTML:e._s(e.squeeze.sub_headline)}}):e._e(),e._v(" "),e.squeeze.text_area?o("div",{domProps:{innerHTML:e._s(e.squeeze.text_area)}}):e._e(),e._v(" "),o("hr")]),e._v(" "),o("div",{staticClass:"text__section__form",class:{show__success:e.success}},[o("form",{attrs:{id:"contact__form",action:"",method:"post"},on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[o("fieldset",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.firstname,expression:"formData.firstname"}],attrs:{"aria-label":"First Name",placeholder:"Your First Name",type:"text",required:"",autofocus:""},domProps:{value:e.formData.firstname},on:{input:function(t){t.target.composing||e.$set(e.formData,"firstname",t.target.value)}}})]),e._v(" "),o("fieldset",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],attrs:{"aria-label":"Email Address",placeholder:"Your Email Address",type:"email",required:""},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}})]),e._v(" "),o("fieldset",[o("button",{staticClass:"site__button",attrs:{"data-submit":"Sending"}},[e._v(e._s(e.squeeze.button_text))])])])]),e._v(" "),o("div",{staticClass:"text__section__success",class:{show__success:!e.success}},[o("h3",[e._v("Success!")]),e._v(" "),o("h4",[e._v("The "+e._s(e.squeeze.name_of_product)+" has been sent to your email.")]),e._v(" "),o("h4",[e._v("Enjoy!")]),e._v(" "),o("p",[e._v("Please let us know "),e.squeeze.contact_us_email?o("a",{attrs:{href:"mailTo:"+e.squeeze.contact_us_email}},[e._v("here")]):e._e(),e._v(", if there's anything we can change or add to make your experience better!")])])])},[],!1,null,null,null).exports},computed:{squeeze:function(){return console.log(this.$store.state.squeeze),this.$store.state.squeeze},productname:function(){return console.log(this.$route.params.product),this.$route.params.product}},head:function(){return{title:this.$store.state.squeeze[this.$route.params.product].name_of_product,meta:[{hid:"description",name:"description",content:this.$store.state.squeeze[this.$route.params.product].description}]}}},_=(o(177),Object(c.a)(l,function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.squeeze[e.productname].background_image?o("main",{staticClass:"main",style:{backgroundImage:"url("+e.squeeze[e.productname].background_image.data.full_url+")"}},[o("div",{staticClass:"main__overlay overlay--dark"}),e._v(" "),o("TextSection",{attrs:{squeeze:e.squeeze[e.productname]}})],1):e._e()},[],!1,null,null,null));t.default=_.exports}}]);