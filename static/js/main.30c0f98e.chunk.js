(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{119:function(e,t,a){e.exports=a(178)},124:function(e,t,a){},125:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},126:function(e,t,a){},127:function(e,t,a){},132:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(124),a(125),a(126),a(15)),i=a(16),s=a(18),m=a(17),u=a(233),d=a(221),p=(a(67),a(127),a(58)),h=a.n(p),f=a(218),E=(r.a.Component,a(132),r.a.Component,a(25)),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{component:"span",m:1},r.a.createElement(d.a,{className:"HeaderCss",maxWidth:"ex lg sm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{xs:3},r.a.createElement("h1",null,"Bookish"),r.a.createElement("pre",null,"Be Confident-Be yourself")),r.a.createElement("div",{className:"Header-Links",xs:9},r.a.createElement(E.b,{to:"/login"},"Login In"),"\xa0\xa0",r.a.createElement(E.b,{to:"/hello-reacts"},"Sign Up")))))}}]),a}(r.a.Component),b=(a(141),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{component:"span",m:1},r.a.createElement(d.a,{className:"FooterCss",maxWidth:"ex lg sm"},r.a.createElement("h3",null,"Contact us")))}}]),a}(r.a.Component)),v=a(230),j=a(65),C=a(232),y=(a(142),a(231)),O=(a(101),a(106),a(222)),x=(a(4),a(223),a(224),a(226),a(227),a(228),a(229),a(234),a(225),a(63));a(103),a(104),a(105),a(102),Object(O.a)((function(e){return{root:{maxWidth:345,marginTop:"50%",alignContent:"Centre"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:x.a[500]}}}));a(143);var k=a(144),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={userName:""},n}return Object(i.a)(a,[{key:"updateUserName",value:function(e){this.setState({userName:e.target.value})}},{key:"fetchFeed",value:function(){console.log("userName "+this.state.userName),k.get("https://jsonplaceholder.typicode.com/todos/1").then((function(e){console.log(e)})).catch((function(e){console.log(e)})).finally((function(){}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null),r.a.createElement(d.a,{maxWidth:"lg"},r.a.createElement(j.a,{component:"div",style:{backgroundColor:"white",height:"50vh",marginTop:"66%",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}),r.a.createElement(u.a,{component:"span",m:1},r.a.createElement("form",{action:"post",className:"instaform",noValidate:"false",autoComplete:"off"},r.a.createElement("h2",{style:{marginTop:"58%",marginLeft:"2%"}},"Instagram"),r.a.createElement(C.a,{id:"outlined-basic",label:"Instagram ID",variant:"outlined",onChange:this.updateUserName.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{onClick:this.fetchFeed.bind(this),type:"Submit",variant:"contained",color:"primary"},"Submit")))))}}]),a}(r.a.Component),N=a(24),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(N.Row,null,r.a.createElement(N.Col,{xs:12,md:4},r.a.createElement(g,null)),r.a.createElement(N.Col,{xs:12,md:4},this.props.children),r.a.createElement(N.Col,{xs:12,md:4},r.a.createElement(b,null))))}}]),a}(r.a.Component),F=a(64),I=(a(94),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"InstaPostCss"},r.a.createElement(d.a,null,r.a.createElement(N.Row,null,r.a.createElement(N.Col,{lg:4,md:4,className:"column"},r.a.createElement(F.a,{src:"saloon1.jpg",fluid:!0,style:{width:"100%"}})),r.a.createElement(N.Col,{lg:4,md:4},r.a.createElement(F.a,{src:"saloon2.jpg",style:{width:"100%"}})),r.a.createElement(N.Col,{lg:4,md:4},r.a.createElement(F.a,{src:"saloon3.jpg",style:{width:"100%"}})))))}}]),a}(r.a.Component));var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E.d,{history:E.e},r.a.createElement(E.c,{path:"/hello-reacts",component:B},r.a.createElement(E.a,{component:B}),r.a.createElement(E.c,{path:"/login",component:w}),r.a.createElement(E.c,{path:"/post",component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(73),L=a.n(W);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L.a,{basename:"/hello-reacts"},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){},94:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.30c0f98e.chunk.js.map