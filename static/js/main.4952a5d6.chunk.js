(this.webpackJsonpposapp=this.webpackJsonpposapp||[]).push([[0],{104:function(e,t,a){e.exports=a(133)},109:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),l=(a(109),a(36)),c=a.n(l),s=a(33),m=a(35),u=a(11),p=a(134),d=a(178),g=a(189),h=a(180),f=a(181),b=a(7),E=a(174),x=Object(E.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f2f7",padding:"25px",height:"100vh"},form:{padding:"40px",maxWidth:"400px",width:"400px",backgroundColor:"#fff",border:"1px solid #ced4da",display:"flex",flexDirection:"column",justifyContent:"center"},input:{marginBottom:"25px",width:"100%"},logo:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"block",fontSize:"36px",color:"#1b84e7",fontWeight:"bold"}),secondary:{fontWeight:"300",margin:"0",marginBottom:"50px",fontSize:" 1.53125rem",color:"#868ba1"},primary:{fontWeight:"300",marginBottom:"0.5rem",fontSize:" 1.75rem",color:"#212529"},btn:{fontWeight:"500",fontSize:"13px",textTransform:"uppercase",letterSpacing:"1px",border:"0",minHeight:"40px",backgroundImage:"linear-gradient(to right, #1b84e7 0%, #6f42c1 100%)",backgroundRepeat:"repeat-x",color:"#fff",display:"flex",width:"100%"},wrapper:{position:"relative",color:"#fff"},buttonProgress:{color:"green",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})),w=a(190),v=function(e){var t=e.message,a=e.open,n=e.handleClose,o=x();return r.a.createElement("div",null,r.a.createElement(w.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:a,onClose:n,dir:"rtl"},r.a.createElement("div",{className:o.paper},r.a.createElement("h2",{id:"simple-modal-title"},t))))},O=function(e){var t=e.text,a=x(),o=Object(n.useState)(""),i=Object(u.a)(o,2),l=i[0],m=i[1],b=Object(n.useState)(""),E=Object(u.a)(b,2),w=E[0],O=E[1],k=Object(n.useState)(400),j=Object(u.a)(k,2),S=j[0],y=j[1],C=Object(n.useState)(),N=Object(u.a)(C,2),I=N[0],B=N[1],z=Object(n.useState)(!1),W=Object(u.a)(z,2),L=W[0],M=W[1],D=Object(n.useState)(!1),R=Object(u.a)(D,2),T=R[0],A=R[1],P=200==S?r.a.createElement(s.a,{to:"/",exact:!0}):null;return r.a.createElement("div",{className:a.root,dir:"ar"==localStorage.getItem("lang")?"rtl":"ltr"},r.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault(),A(!0),c.a.post("https://inventory.tasawk.net/api/v1/cashier",{email:l,password:w}).then((function(e){var t=e.data.data.info.api_token;localStorage.setItem("user",JSON.stringify(t)),y(e.data.status)})).catch((function(e){B(e.response.data.message),y(e.response.data.status),M(!0)})).then((function(){A(!1)}))}},r.a.createElement(p.a,{variant:"h1",noWrap:!0},r.a.createElement(d.a,{href:"#",onClick:function(e){return e.preventDefault()},className:a.logo,underline:"none"},"pos.")),r.a.createElement("h2",{className:a.primary},t.t("Welcome to React and react-i18next")),r.a.createElement("h3",{className:a.secondary},"Sign in to continue."),r.a.createElement(g.a,{id:"email",label:"E-Mail",className:a.input,onChange:function(e){m(e.target.value)}}),r.a.createElement(g.a,{id:"password",label:"Password",className:a.input,onChange:function(e){O(e.target.value)}}),r.a.createElement("div",{className:a.wrapper},r.a.createElement(h.a,{id:"sub",variant:"contained",className:a.btn,type:"submit",disabled:T},"Login"),T&&r.a.createElement(f.a,{size:24,className:a.buttonProgress})),P,r.a.createElement(v,{message:I,handleClose:function(){M(!1)},open:L})))},k=a(184),j=a(185),S=a(137),y=a(193),C=a(183),N=a(182),I=a(97),B=a(92),z=a.n(B),W=a(91),L=a.n(W),M=a(71),D=a.n(M),R=a(69),T=a.n(R),A=a(70),P=a.n(A),J=a(90),F=a.n(J),_=a(13),G=Object(E.a)((function(e){var t,a;return{grow:{flexGrow:1},menuButton:{marginLeft:e.spacing(2),border:"1px solid #ced4da",color:"#adb5bd"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:e.palette.common.white,boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)",position:"fixed"},appBarShift:{width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:240,backgroundColor:e.palette.common.white,boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)",position:"fixed"},search:(t={position:"relative",backgroundColor:Object(_.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%",borderRadius:"50px",border:"1px solid #dee2e6"},Object(b.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),Object(b.a)(t,"textAlign","right"),Object(b.a)(t,"color","#495057"),Object(b.a)(t,"height",46),t),searchIcon:{width:"40px",height:"40px",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",backgroundColor:" #4662D4",color:"#fff",top:"50%",transform:"translateY(-50%)",left:3,zIndex:99},inputRoot:{color:"inherit",height:"100%"},inputInput:(a={padding:e.spacing(1,2,1,7),transition:e.transitions.create("width"),height:"100%",width:"100%"},Object(b.a)(a,e.breakpoints.up("md"),{width:200}),Object(b.a)(a,"textAlign","right"),a),sectionDesktop:Object(b.a)({display:"none",color:"#6c757d"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(b.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),dropdownMenu:{position:"relative",zIndex:"1000",minWidth:"15rem",padding:"0.5rem 0",fontSize:"0.875rem",color:"#868ba1",textAlign:"left",listStyle:"none",backgroundColor:"#fff",backgroundClip:"padding-box",border:"1px solid rgba(0, 0, 0, 0.15)",borderTop:"none",borderRadius:"3px"},relative:{position:"relative"}}})),H=a(179),Y=function(e){var t,a,n=e.handleDrawerOpen,o=e.open,i=e.handleDrawerClose,l=r.a.useState(!1),c=Object(u.a)(l,2),p=c[0],d=c[1],g=G(),h=r.a.useState(null),f=Object(u.a)(h,2),E=f[0],x=f[1],w=r.a.useState(null),v=Object(u.a)(w,2),B=v[0],W=v[1],M=r.a.useState(null),R=Object(u.a)(M,2),A=R[0],J=R[1],_=r.a.useState(null),Y=Object(u.a)(_,2),$=Y[0],q=Y[1],K=Boolean(E),Q=Boolean(A),U=Boolean(B),V=Boolean($),X=function(e){x(e.currentTarget)},Z=function(){q(null)},ee=function(){x(null),W(null),J(null),Z()},te="primary-search-account-menu",ae=r.a.createElement(I.a,{elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},id:te,open:K,onClose:ee},r.a.createElement(H.a,{className:g.dropdownMenu},r.a.createElement(N.a,{onClick:ee},r.a.createElement(m.b,{to:"/Account"},"My Account")),r.a.createElement(N.a,{onClick:function(){localStorage.removeItem("user"),d(!0)}},"Logout"))),ne=r.a.createElement(I.a,{elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},id:"primary-search-notification-menu",open:U,onClose:ee},r.a.createElement(H.a,{className:g.dropdownMenu},"Notification")),re=r.a.createElement(I.a,{elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},id:"primary-search-Msg-menu",open:Q,onClose:ee},r.a.createElement(H.a,{className:g.dropdownMenu},"Msg")),oe=r.a.createElement(I.a,{anchorEl:$,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:V,onClose:Z},r.a.createElement(N.a,null,r.a.createElement(S.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(C.a,{badgeContent:4,color:"secondary"},r.a.createElement(T.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(N.a,null,r.a.createElement(S.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(C.a,{badgeContent:11,color:"secondary"},r.a.createElement(P.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(N.a,{onClick:X},r.a.createElement(S.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(D.a,null)),r.a.createElement("p",null,"Profile"))),ie=p?r.a.createElement(s.a,{exact:!0,to:"/Log",component:O}):null;return r.a.createElement("div",{className:g.grow},r.a.createElement(k.a,{position:"static",className:o?g.appBarShift:g.appBar},r.a.createElement(j.a,null,r.a.createElement("div",{className:g.sectionDesktop},r.a.createElement(S.a,(t={"aria-label":"show 4 new mails",color:"inherit",edge:"end"},Object(b.a)(t,"aria-label","account of current user"),Object(b.a)(t,"aria-controls","primary-search-Msg-menu"),Object(b.a)(t,"aria-haspopup","true"),Object(b.a)(t,"onClick",(function(e){J(e.currentTarget)})),Object(b.a)(t,"color","inherit"),t),r.a.createElement(C.a,{badgeContent:4,color:"secondary"},r.a.createElement(T.a,null))),r.a.createElement(S.a,(a={"aria-label":"show 17 new notifications",color:"inherit",edge:"end"},Object(b.a)(a,"aria-label","account of current user"),Object(b.a)(a,"aria-controls","primary-search-notification-menu"),Object(b.a)(a,"aria-haspopup","true"),Object(b.a)(a,"onClick",(function(e){W(e.currentTarget)})),Object(b.a)(a,"color","inherit"),a),r.a.createElement(C.a,{badgeContent:17,color:"secondary"},r.a.createElement(P.a,null))),r.a.createElement(S.a,{edge:"end","aria-label":"account of current user","aria-controls":te,"aria-haspopup":"true",onClick:X,color:"inherit"},r.a.createElement(D.a,null))),r.a.createElement("div",{className:g.sectionMobile},r.a.createElement(S.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){q(e.currentTarget)},color:"inherit",className:g.menuButton},r.a.createElement(F.a,null))),r.a.createElement("div",{className:g.grow}),r.a.createElement("div",{className:g.search},r.a.createElement("div",{className:g.searchIcon},r.a.createElement(L.a,null)),r.a.createElement(y.a,{placeholder:"Search\u2026",classes:{root:g.inputRoot,input:g.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(S.a,{edge:"start",className:g.menuButton,color:"inherit","aria-label":"open drawer",onClick:o?i:n},r.a.createElement(z.a,null)))),oe,ae,ne,re,r.a.createElement(s.d,null,ie))},$=a(191),q=a(186),K=Object(E.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:240},logo:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"flex",fontSize:"36px",color:"#1b84e7",fontWeight:"bold",width:205,height:64,padding:"0 25px",alignItems:"center"}),drawer:{width:240,flexShrink:0},drawerPaper:{width:240,border:"none"},content:{flexGrow:1,borderLeft:"1px solid rgba(0, 0, 0, 0.12)"},acc:{boxShadow:"None",margin:0,padding:0}}})),Q=a(59),U=a(192),V=a(187),X=a(188),Z=a(136),ee=function(e){var t=e.children,a=t?t.map((function(e){return r.a.createElement(Z.a,null,e.Link)})):null;return r.a.createElement(H.a,null,a)},te=Object(Q.b)((function(e){return e}))((function(e){var t=e.open,a=e.links,n=K(),o=r.a.useState(""),i=Object(u.a)(o,2),l=i[0],c=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{className:n.drawer,variant:"persistent",anchor:"right",open:t,classes:{paper:n.drawerPaper},dir:"rtl"},r.a.createElement(p.a,{variant:"h1",noWrap:!0},r.a.createElement(d.a,{href:"#",onClick:function(e){return e.preventDefault()},className:n.logo,underline:"none",align:"right"},"pos.")),r.a.createElement(q.a,null),r.a.createElement(H.a,{className:n.content},a?a.map((function(e){return e.children.length?r.a.createElement(Z.a,null,r.a.createElement(U.a,{className:n.acc,expanded:l===e.link,onChange:(t=e.link,function(e,a){c(!!a&&t)})},r.a.createElement(V.a,{"aria-controls":e.link,id:e.link,className:n.acc},e.link),r.a.createElement(X.a,null,r.a.createElement(ee,{children:e.children})))):r.a.createElement(Z.a,null,e.link);var t})):null)))})),ae=Object(E.a)((function(e){return{content:{width:"100%",padding:"50px"},form:{padding:"40px",maxWidth:"100%",width:"100%",backgroundColor:"#fff",display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto"},input:{marginBottom:"25px",width:"100%"},logo:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"block",fontSize:"36px",color:"#1b84e7",fontWeight:"bold"}),secondary:{fontWeight:"300",margin:"0",marginBottom:"50px",fontSize:" 1.53125rem",color:"#868ba1"},primary:{fontWeight:"300",marginBottom:"0.5rem",fontSize:" 1.75rem",color:"#212529"},btn:{fontWeight:"500",fontSize:"13px",textTransform:"uppercase",letterSpacing:"1px",border:"0",minHeight:"40px",backgroundImage:"linear-gradient(to right, #1b84e7 0%, #6f42c1 100%)",backgroundRepeat:"repeat-x",color:"#fff",display:"flex",width:"100px"},wrapper:{position:"relative",color:"#fff"},buttonProgress:{color:"green",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})),ne=function(){var e=ae(),t=JSON.parse(localStorage.getItem("user")),a="https://inventory.tasawk.net/api/v1",o=Object(n.useState)(""),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),d=p[0],f=p[1];Object(n.useEffect)((function(){c.a.get(a+"/cashier",{params:{api_token:t}}).then((function(e){var t=e.data.data.info;document.getElementById("Name").value=t.name,document.getElementById("email").value=t.email})).catch((function(e){console.log(e.response)}))}),[""]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement("div",{className:e.content},r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),c()({url:a+"/cashier/",method:"post",data:JSON.stringify({api_token:t,name:d,email:l,permissions:[]}),headers:{"Content-Type":"application/x-www-form-urlencoded"},proxy:{target:"http://localhost:3000",changeOrigin:!0},json:!1,cache:!1,withCredentials:!0,credentials:"same-origin"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},r.a.createElement("h3",null,"Edit Account Info."),r.a.createElement(g.a,{id:"Name",label:"Name",className:e.input,InputLabelProps:{shrink:!0},onChange:function(e){f(e.target.value)}}),r.a.createElement(g.a,{id:"email",label:"E-Mail",className:e.input,InputLabelProps:{shrink:!0},onChange:function(e){s(e.target.value)}}),r.a.createElement("div",null,r.a.createElement(h.a,{id:"sub",variant:"contained",className:e.btn,type:"submit"},"Save")))))},re=function(){var e=JSON.parse(localStorage.getItem("open")),t=Object(n.useState)(e),a=Object(u.a)(t,2),o=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{handleDrawerClose:function(){i(!1),localStorage.setItem("open",!1)},handleDrawerOpen:function(){i(!0),localStorage.setItem("open",!0)},open:o}),r.a.createElement(te,{open:o}))},oe=a(49),ie={ar:{translation:a(94)}},le=function(e){var t=localStorage.getItem("lang");oe.a.init({resources:ie,lng:t,fallbackLng:"en"});var a=e.store,o=JSON.parse(localStorage.getItem("user"));Object(n.useEffect)((function(){c.a.get("https://5e0dcaf036b80000143db8a4.mockapi.io/links").then((function(e){var t=[];e.data.forEach((function(e){t.push(e)})),a.dispatch({type:"Links",links:t})}))}));var i=o?r.a.createElement(s.a,{exact:!0,to:"/",component:re}):r.a.createElement(s.a,{exact:!0,to:"/Log",component:O});return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){window.location.reload(!1),"ar"==t?localStorage.setItem("lang","en"):localStorage.setItem("lang","ar")},className:"lang"},"ar"==t?"En":"\u0639"),r.a.createElement(m.a,{hashType:"noslash"},r.a.createElement(s.b,{exact:!0,path:"/Log",component:function(){return o?r.a.createElement(re,{text:oe.a.t("welcome")}):r.a.createElement(O,{text:oe.a})}}),r.a.createElement(s.b,{exact:!0,path:"/",component:function(){return r.a.createElement(re,{text:oe.a.t("welcome")})}}),r.a.createElement(s.b,{exact:!0,path:"/Account",component:ne}),r.a.createElement(s.d,null,i)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(48),se=a(95),me=a(96),ue=function(e,t){if("Links"===t.type)return Object(me.a)({},e,{links:t.links})},pe=Object(ce.c)(ue,Object(ce.a)(se.a));i.a.render(r.a.createElement(Q.a,{store:pe},r.a.createElement(le,{store:pe})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},94:function(e){e.exports=JSON.parse('{"Welcome to React and react-i18next":"Welcome"}')}},[[104,1,2]]]);
//# sourceMappingURL=main.4952a5d6.chunk.js.map