(this["webpackJsonpreact-crud-operation"]=this["webpackJsonpreact-crud-operation"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(11),r=n.n(c),i=n(35),l=n(12),s=n(15),o=n.n(s),j=n(25),d=n(41),u=n(44),b=n(28),h=n(153),x=n(170),O=n(155),m=n(167),p=n(169),f=n(168),g=n(166),v=n(57),C=n(157),k=n(158),w=n(159),y=n(160),N=n(161),S=n(162),W=n(163),A=n(172),H=n(165),E=n(56),D=n(83),q=n.n(D),F=n(84),L=n.n(F),I=n(85),P=n.n(I),B=n(26),T=n.n(B),U=n(2),z=Object(h.a)({stuListColor:{backgroundColor:E.a[400],color:"white"},tableHeadCell:{color:"white",fontWeight:"bold",fontSize:16}}),J=function(){var e=z(),t=Object(a.useState)([]),n=Object(b.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://656b9b6fdac3630cf7284279.mockapi.io/students");case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Something is Wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.delete("https://656b9b6fdac3630cf7284279.mockapi.io/students/".concat(t));case 2:n=c.filter((function(e){return e.id!==t})),r(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(x.a,{textAlign:"center",p:2,className:e.stuListColor,children:Object(U.jsx)(O.a,{variant:"h4",children:"Student List"})}),Object(U.jsx)(C.a,{component:k.a,children:Object(U.jsxs)(w.a,{children:[Object(U.jsx)(y.a,{children:Object(U.jsxs)(N.a,{style:{backgroundColor:"#616161"},children:[Object(U.jsx)(S.a,{align:"center",className:e.tableHeadCell,children:"No"}),Object(U.jsx)(S.a,{align:"center",className:e.tableHeadCell,children:"Name"}),Object(U.jsx)(S.a,{align:"center",className:e.tableHeadCell,children:"Email"}),Object(U.jsx)(S.a,{align:"center",className:e.tableHeadCell,children:"Action"})]})}),Object(U.jsx)(W.a,{children:c.map((function(e,t){return Object(U.jsxs)(N.a,{children:[Object(U.jsx)(S.a,{align:"center",children:t+1}),Object(U.jsx)(S.a,{align:"center",children:e.stuname}),Object(U.jsx)(S.a,{align:"center",children:e.email}),Object(U.jsxs)(S.a,{align:"center",children:[Object(U.jsx)(A.a,{title:"View",children:Object(U.jsx)(H.a,{children:Object(U.jsx)(i.b,{to:"/view/".concat(e.id),children:Object(U.jsx)(q.a,{color:"primary"})})})}),Object(U.jsx)(A.a,{title:"Edit",children:Object(U.jsx)(H.a,{children:Object(U.jsx)(i.b,{to:"/edit/".concat(e.id),children:Object(U.jsx)(L.a,{})})})}),Object(U.jsx)(A.a,{title:"Delete",children:Object(U.jsx)(H.a,{onClick:function(){return l(e.id)},children:Object(U.jsx)(P.a,{color:"secondary"})})})]})]},t)}))})]})})]})},R=Object(h.a)({headingColor:{backgroundColor:g.a[400],color:"white"},addStuColor:{backgroundColor:v.a[400],color:"white"}}),V=function e(){var t=R(),n=Object(a.useState)({stuname:"",email:"",phone:""}),c=Object(b.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(),s=Object(b.a)(l,2),h=s[0],g=s[1];function v(e){i(Object(u.a)(Object(u.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))}function C(){return(C=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,T.a.post("https://656b9b6fdac3630cf7284279.mockapi.io/students",r);case 4:g(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("Something is Wrong");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return h?Object(U.jsx)(e,{}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(x.a,{textAlign:"center",className:t.headingColor,p:2,mb:2,children:Object(U.jsx)(O.a,{variant:"h2",children:"STUDENT LIST"})}),Object(U.jsxs)(m.a,{container:!0,justify:"center",spacing:4,children:[Object(U.jsxs)(m.a,{item:!0,md:5,xs:12,children:[Object(U.jsx)(x.a,{textAlign:"center",p:2,className:t.addStuColor,mb:2,children:Object(U.jsx)(O.a,{variant:"h4",children:"Add Student"})}),Object(U.jsxs)("form",{noValidate:!0,children:[Object(U.jsxs)(m.a,{container:!0,spacing:2,children:[Object(U.jsx)(m.a,{item:!0,xs:12,children:Object(U.jsx)(p.a,{autoComplete:"stuname",name:"stuname",variant:"outlined",required:!0,fullWidth:!0,id:"stuname",label:"Name",onChange:function(e){return v(e)}})}),Object(U.jsx)(m.a,{item:!0,xs:12,children:Object(U.jsx)(p.a,{autoComplete:"email",name:"email",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",onChange:function(e){return v(e)}})}),Object(U.jsx)(m.a,{item:!0,xs:12,children:Object(U.jsx)(p.a,{autoComplete:"phone",name:"phone",variant:"outlined",required:!0,fullWidth:!0,id:"phone",label:"Phone Number",onChange:function(e){return v(e)}})})]}),Object(U.jsx)(x.a,{m:3,children:Object(U.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,onClick:function(e){return function(e){return C.apply(this,arguments)}(e)},children:"Add"})})]})]}),Object(U.jsx)(m.a,{item:!0,md:7,xs:12,children:Object(U.jsx)(J,{})})]})]})},G=Object(h.a)({stuListColor:{backgroundColor:E.a[400],color:"white"},tableHeadCell:{color:"white",fontWeight:"bold",fontSize:16}}),K=function(){var e=G(),t=Object(l.g)().id,n=Object(a.useState)([]),c=Object(b.a)(n,2),r=c[0],i=c[1],s=Object(l.f)();return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://656b9b6fdac3630cf7284279.mockapi.io/students/".concat(t));case 3:n=e.sent,i(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Something is Wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(x.a,{textAlign:"center",p:2,className:e.stuListColor,children:Object(U.jsx)(O.a,{variant:"h4",children:"Student Detail"})}),Object(U.jsx)(m.a,{container:!0,justify:"center",spacing:2,children:Object(U.jsx)(m.a,{item:!0,xs:12,md:8,lg:6,children:Object(U.jsx)(C.a,{component:k.a,children:Object(U.jsxs)(w.a,{children:[Object(U.jsx)(y.a,{children:Object(U.jsxs)(N.a,{style:{backgroundColor:"#616161"},children:[Object(U.jsx)(S.a,{align:"center",className:e.tableHeadCell,children:"ID"}),Object(U.jsx)(S.a,{align:"center",className:e.tableHeadCell,children:"Name"}),Object(U.jsx)(S.a,{align:"center",className:e.tableHeadCell,children:"Email"}),Object(U.jsx)(S.a,{align:"center",className:e.tableHeadCell,children:"Phone Number"})]})}),Object(U.jsx)(W.a,{children:Object(U.jsxs)(N.a,{children:[Object(U.jsx)(S.a,{align:"center",children:r.id}),Object(U.jsx)(S.a,{align:"center",children:r.stuname}),Object(U.jsx)(S.a,{align:"center",children:r.email}),Object(U.jsx)(S.a,{align:"center",children:r.phone})]})})]})})})}),Object(U.jsx)(x.a,{m:3,textAlign:"center",children:Object(U.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){s.push("/")},children:"Back to Home"})})]})},M=Object(h.a)({headingColor:{backgroundColor:g.a[400],color:"white"},addStuColor:{backgroundColor:v.a[400],color:"white"}}),Q=function(){var e=M(),t=Object(l.g)().id,n=Object(l.f)(),c=Object(a.useState)({stuname:"",email:"",phone:""}),r=Object(b.a)(c,2),i=r[0],s=r[1];function h(e){s(Object(u.a)(Object(u.a)({},i),{},Object(d.a)({},e.target.name,e.target.value)))}function g(){return(g=Object(j.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,T.a.put("https://656b9b6fdac3630cf7284279.mockapi.io/students/".concat(t),i);case 4:n.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("Something is Wrong");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://656b9b6fdac3630cf7284279.mockapi.io/students/".concat(t));case 3:n=e.sent,s(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Something is Wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(x.a,{textAlign:"center",p:2,className:e.headingColor,mb:2,children:Object(U.jsx)(O.a,{variant:"h2",children:"React CRUD with API Call"})}),Object(U.jsx)(m.a,{container:!0,justify:"center",spacing:4,children:Object(U.jsxs)(m.a,{item:!0,md:6,xs:12,children:[Object(U.jsx)(x.a,{textAlign:"center",p:2,className:e.addStuColor,mb:2,children:Object(U.jsx)(O.a,{variant:"h4",children:"Edit Student"})}),Object(U.jsxs)("form",{children:[Object(U.jsxs)(m.a,{container:!0,spacing:2,children:[Object(U.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(U.jsx)(p.a,{autoComplete:"id",name:"id",variant:"outlined",required:!0,fullWidth:!0,id:"id",label:"ID",autoFocus:!0,value:t,disabled:!0})}),Object(U.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(U.jsx)(p.a,{autoComplete:"stuname",name:"stuname",variant:"outlined",required:!0,fullWidth:!0,id:"stuname",label:"Name",value:i.stuname,onChange:function(e){return h(e)}})}),Object(U.jsx)(m.a,{item:!0,xs:12,children:Object(U.jsx)(p.a,{autoComplete:"email",name:"email",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",value:i.email,onChange:function(e){return h(e)}})}),Object(U.jsx)(m.a,{item:!0,xs:12,children:Object(U.jsx)(p.a,{autoComplete:"phone",name:"phone",variant:"outlined",required:!0,fullWidth:!0,id:"phone",label:"Phone Number",value:i.email,onChange:function(e){return h(e)}})})]}),Object(U.jsx)(x.a,{m:3,children:Object(U.jsx)(f.a,{type:"button",variant:"contained",color:"primary",fullWidth:!0,onClick:function(e){return function(e){return g.apply(this,arguments)}(e)},children:" Update "})})]}),Object(U.jsx)(x.a,{m:3,textAlign:"center",children:Object(U.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){n.push("/")},children:"Back to Home"})})]})})]})};var X=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(i.a,{children:Object(U.jsxs)(l.c,{children:[Object(U.jsx)(l.a,{exact:!0,path:"/",component:V}),Object(U.jsx)(l.a,{exact:!0,path:"/view/:id",component:K}),Object(U.jsx)(l.a,{exact:!0,path:"/edit/:id",component:Q})]})})})};r.a.render(Object(U.jsx)(X,{}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.8bcfb224.chunk.js.map