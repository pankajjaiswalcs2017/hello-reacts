(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{101:function(e,t,a){e.exports=a(161)},106:function(e,t,a){},107:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},108:function(e,t,a){},109:function(e,t,a){},115:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},154:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=(a(106),a(107),a(108),a(14)),s=a(15),m=a(17),i=a(16),u=a(197),p=a(192),d=(a(70),a(109),a(53)),h=a.n(d),E=a(189),f=(r.a.Component,a(115),r.a.Component,a(20)),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{component:"span",m:1},r.a.createElement(p.a,{className:"HeaderCss",maxWidth:"ex lg sm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{xs:3},r.a.createElement("h1",null,"Bookish"),r.a.createElement("pre",null,"Be Confident-Be yourself")),r.a.createElement("div",{className:"Header-Links",xs:9},r.a.createElement(f.b,{to:"/login"},"Login In"),"\xa0\xa0",r.a.createElement(f.b,{to:"/hello-reacts"},"Sign Up")))))}}]),a}(r.a.Component),g=(a(124),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{component:"span",m:1},r.a.createElement(p.a,{className:"FooterCss",maxWidth:"ex lg sm"},r.a.createElement("h3",null,"Contact us")))}}]),a}(r.a.Component)),v=a(193),j=a(194),y=a(195),C=(a(125),a(198)),O=a(126),k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={userName:""},n}return Object(s.a)(a,[{key:"updateUserName",value:function(e){this.setState({userName:e.target.value})}},{key:"fetchFeed",value:function(){console.log("userName "+this.state.userName),f.e.push("/post"),O.get("https://jsonplaceholder.typicode.com/todos/1").then((function(e){console.log(e)})).catch((function(e){console.log(e)})).finally((function(){}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null),r.a.createElement(p.a,{maxWidth:"lg"},r.a.createElement(j.a,{component:"div",style:{backgroundColor:"white",height:"50vh",marginTop:"66%",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}),r.a.createElement(u.a,{component:"span",m:1},r.a.createElement("form",{className:"instaform",noValidate:"false",autoComplete:"off"},r.a.createElement("h2",{style:{marginTop:"58%",marginLeft:"2%"}},"Instagram"),r.a.createElement(y.a,{id:"outlined-basic",label:"Instagram ID",variant:"outlined",onChange:this.updateUserName.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C.a,{onClick:this.fetchFeed.bind(this),type:"Submit",variant:"contained",color:"primary"},"Submit")))))}}]),a}(r.a.Component),w=a(25),x=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(w.Row,null,r.a.createElement(w.Col,{xs:12,md:4},r.a.createElement(b,null)),r.a.createElement(w.Col,{xs:12,md:4},this.props.children),r.a.createElement(w.Col,{xs:12,md:4},r.a.createElement(g,null))))}}]),a}(r.a.Component),N=a(56),B=(a(154),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"InstaPostCss"},r.a.createElement(p.a,null,r.a.createElement(w.Row,null,r.a.createElement(w.Col,{lg:4,md:4,className:"column"},r.a.createElement(N.a,{src:"saloon1.jpg",style:{width:"100%"}})),r.a.createElement(w.Col,{lg:4,md:4},r.a.createElement(N.a,{src:"saloon2.jpg",style:{width:"100%"}})),r.a.createElement(w.Col,{lg:4,md:4},r.a.createElement(N.a,{src:"saloon3.jpg",style:{width:"100%"}})))))}}]),a}(r.a.Component));var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.d,{history:f.e},r.a.createElement(f.c,{path:"/hello-reacts",component:x},r.a.createElement(f.a,{component:x}),r.a.createElement(f.c,{path:"/login",component:k}),r.a.createElement(f.c,{path:"/post",component:B}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(63),S=a.n(I);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,{basename:"/hello-reacts"},r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.9e57a718.chunk.js.map