(this.webpackJsonpcodezilla=this.webpackJsonpcodezilla||[]).push([[0],{116:function(e,t,a){},118:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),s=a.n(r),c=a(13),i=a.n(c),o=(a(116),a(117),a(118),a(14)),l=a(83),d=a(84),j=a(85),h=a(96),b=a(95),u=a(187),x=a(208),p=a(63),O=a(207),m=a(191),f=a(192),g=a(51);a(150),a(119),a(121);g.a.initializeApp({apiKey:"AIzaSyARnlQxjXAGNdUzgCZtRxeOlmeEuIe5tro",authDomain:"zilla-22191.firebaseapp.com",projectId:"zilla-22191",storageBucket:"zilla-22191.appspot.com",messagingSenderId:"270016157956",appId:"1:270016157956:web:9b3fce79816a3233c21851",measurementId:"G-FDSJ121Z3C"});var w=g.a.auth(),v=g.a.firestore(),y=(g.a,function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handlechange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.login=function(){var e=!0;n.state.email_error=null,n.state.password_error=null,""===n.state.email&&(n.state.email_error="required!!",e=!1),""===n.state.password&&(n.state.password_error="required!!",e=!1),e&&(n.state.show_progress=!0),n.setState({update:!0}),e&&v.collection("users").where("email","==",n.state.email).where("isAdmin","==",!0).get().then((function(e){e.empty?(n.state.email_error="Not Allowed!!",n.setState({show_progress:!1})):w.signInWithEmailAndPassword(n.state.email,n.state.password).then((function(e){n.props.history.replace("/")})).catch((function(e){console.log(e.code),"auth/wrong-password"===e.code&&(n.state.password_error="Incorrect Password!!"),n.setState({show_progress:!1})}))}))},n.state={email:"",password:"",show_progress:!1},n.handlechange=n.handlechange.bind(),n.login=n.login.bind(),n}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)(u.a,{maxWidth:"sm",children:Object(n.jsxs)(x.a,{bgcolor:"white",textAlign:"center",borderRadius:"12",p:"24px",mt:"50px",boxShadow:"2",children:[Object(n.jsx)(p.a,{varient:"h5",color:"textSecondary",children:"ADMIN"}),Object(n.jsx)(O.a,{label:"Email",margin:"normal",id:"outlined-size-small",variant:"outlined",fullWidth:!0,name:"email",error:null!=this.state.email_error,helperText:this.state.email_error,onChange:this.handlechange,size:"small",color:"secondary"}),Object(n.jsx)(O.a,{label:"Password",margin:"normal",id:"outlined-size-small",name:"password",error:null!=this.state.password_error,helperText:this.state.password_error,onChange:this.handlechange,type:"password",color:"secondary",variant:"outlined",fullWidth:!0,size:"small"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),this.state.show_progress?Object(n.jsx)(m.a,{size:24,thickness:4,color:"primary"}):null,Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(f.a,{disableElevation:!0,fullWidth:!0,variant:"contained",color:"primary",onClick:this.login,children:"Login"})]})})}}]),a}(r.Component)),I=a(193),S=a(210),z=a(195),_=a(194),A=a(196),C=a(190),N=a(204),k=a(197),D=a(198),E=a(200),G=a(199),W=a(201),P=a(202),B=a(203),F=a(34),J=function(){return Object(n.jsx)("div",{children:"In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes.In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes.In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes."})},R=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"images"})})},T=a(67),q=a.n(T),L=a(90),M=a(61),Z=a(91),H=a.n(Z),K=a(97),Q=a(92),U=a.n(Q),X=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.text.id}),Object(n.jsx)("td",{children:e.text.title}),Object(n.jsx)("td",{children:e.text.body}),Object(n.jsx)("td",{children:Object(n.jsx)(U.a,{})})]})})},V=function(){var e=Object(r.useState)([]),t=Object(M.a)(e,2),a=t[0],s=t[1];Object(r.useEffect)((function(){function e(){return(e=Object(L.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("https://jsonplaceholder.typicode.com/posts");case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}));var c=function(e){console.log("delete triggered"),s((function(t){return t.filter((function(t,a){return a!==e}))}))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(K.a,{responsive:"lg",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"S.No"}),Object(n.jsx)("th",{children:"Title"}),Object(n.jsx)("th",{children:"Content"}),Object(n.jsx)("th",{children:"Action"})]})}),Object(n.jsx)("tbody",{children:a.map((function(e,t){return Object(n.jsx)(X,{id:t,text:e,onSelect:c},t)}))})]})})},Y=function(e){var t=Object(r.useState)(null),a=Object(M.a)(t,2),s=a[0],c=a[1];if(w.onAuthStateChanged((function(e){c(!!e)})),e.nonAuthenticated){if(null==s)return"loding...";if(!s)return e.children;if(s)return Object(n.jsx)(o.a,{to:"/"})}else{if(null==s)return"loding...";if(s)return e.children;if(!s)return Object(n.jsx)(o.a,{to:"/login"})}},$=Object(I.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}}));function ee(){var e=$();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(_.a,{}),Object(n.jsx)(z.a,{position:"fixed",className:e.appBar,children:Object(n.jsx)(A.a,{children:Object(n.jsx)(p.a,{variant:"h4",noWrap:!0,children:"Go...GO..."})})}),Object(n.jsxs)(S.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},children:[Object(n.jsx)(A.a,{}),Object(n.jsxs)("div",{className:e.drawerContainer,children:[Object(n.jsx)(F.b,{to:"/home",activeClassName:"active",children:Object(n.jsx)(C.a,{children:Object(n.jsxs)(k.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(E.a,{primary:"Home"})]})})}),Object(n.jsx)(F.b,{to:"/gallery",activeClassName:"active",children:Object(n.jsx)(C.a,{children:Object(n.jsxs)(k.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(W.a,{})}),Object(n.jsx)(E.a,{primary:"Gallery"})]})})}),Object(n.jsx)(F.b,{to:"/dashdata",activeClassName:"active",children:Object(n.jsx)(C.a,{children:Object(n.jsxs)(k.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(P.a,{})}),Object(n.jsx)(E.a,{primary:"Dashboard"})]})})}),Object(n.jsx)(F.b,{to:"/login",children:Object(n.jsx)(C.a,{children:Object(n.jsxs)(k.a,{button:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(B.a,{})}),Object(n.jsx)(E.a,{primary:"Logout"})]})})}),Object(n.jsx)(N.a,{})]})]}),Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)(A.a,{}),Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{exact:!0,path:"/home",component:J}),Object(n.jsx)(o.b,{exact:!0,path:"/gallery",component:R}),Object(n.jsx)(o.b,{exact:!0,path:"/dashdata",component:V})]})]})]})}var te=function(){return Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{path:"/",children:Object(n.jsx)(Y,{children:Object(n.jsx)(ee,{})})}),Object(n.jsx)(o.b,{exact:!0,path:"/login",children:Object(n.jsx)(Y,{nonAuthenticated:!0,children:Object(n.jsx)(y,{})})})]})},ae=a(94),ne=a(206),re=a(62),se=a(205),ce=Object(ae.a)({palette:{primary:re.a,secondary:se.a}});i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(ne.a,{theme:ce,children:Object(n.jsx)(F.a,{children:Object(n.jsx)(te,{})})})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.25568e98.chunk.js.map