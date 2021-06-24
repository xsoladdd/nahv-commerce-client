(this.webpackJsonpcommerce=this.webpackJsonpcommerce||[]).push([[5],{132:function(e,a,t){"use strict";t.d(a,"b",(function(){return j})),t.d(a,"a",(function(){return b}));var s=t(112),r=t.n(s),n=t(113),c=t(136),i=t.n(c),l=t(35),o=t.n(l),d=i.a.create();d.defaults.headers.common.Authorization=o.a.get("access_token");var u=d,m="http://localhost:8000",j=function(){var e=Object(n.a)(r.a.mark((function e(a){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.data,e.next=3,u.post("".concat(m,"/register"),t);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(r.a.mark((function e(a){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.data,e.next=3,u.post("".concat(m,"/login"),t);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},297:function(e,a,t){"use strict";t.r(a);var s=t(112),r=t.n(s),n=t(113),c=t(47),i=t(33),l=t(0),o=t.n(l),d=t(133),u=t(296),m=t(1),j=t(3),b=t(6),p=t.n(b),h=t(7),x=["bsPrefix","className","noGutters","as"],f=["xl","lg","md","sm","xs"],O=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.noGutters,n=e.as,c=void 0===n?"div":n,i=Object(j.a)(e,x),l=Object(h.a)(t,"row"),d=l+"-cols",u=[];return f.forEach((function(e){var a,t=i[e];delete i[e];var s="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&u.push(""+d+s+"-"+a)})),o.a.createElement(c,Object(m.a)({ref:a},i,{className:p.a.apply(void 0,[s,l,r&&"no-gutters"].concat(u))}))}));O.displayName="Row",O.defaultProps={noGutters:!1};var v=O,N=t(294),w=t(298),g=t(56),P=t(168),k=t(169),y=k.a().shape({firstName:k.c().required("First name is required").min(2,"Too Short!").max(20,"Too Long!"),middleName:k.c(),lastName:k.c().required("Last name is required").min(2,"Too Short!").max(20,"Too Long!"),password:k.c().min(8,"Too Short!").max(15,"Too Long!").required("Password is required"),repeatPassword:k.c().min(8,"Too Short!").max(15,"Too Long!").required("Password is required").oneOf([k.b("password"),null],"Passwords must match"),email:k.c().email("Invalid email").required("Email is required")}),T=t(301),q=t(132),I=t(167),L=t(5),S=function(e){Object(i.a)(e);var a=Object(l.useState)({message:"",variant:"danger"}),t=Object(c.a)(a,2),s=t[0],o=t[1],m=Object(T.a)((function(e){return Object(q.b)(e)}),{onSuccess:function(e){return 200!==e.status?o({message:"Registration Failed. ".concat(e.message),variant:"danger"}):o({message:"Registration Success",variant:"success"})}}).mutateAsync;return Object(L.jsxs)(d.a,{className:"pt-5",children:[Object(L.jsxs)("blockquote",{className:"blockquote text-center",children:[Object(L.jsx)("h1",{className:" mb-0",children:"Register"}),Object(L.jsx)("footer",{className:"blockquote-footer",children:"Fillup the form to join us"})]}),Object(L.jsx)(P.b,{initialValues:{email:"",firstName:"",lastName:"",password:"",repeatPassword:"",middleName:""},validationSchema:y,onSubmit:Object(I.debounce)(function(){var e=Object(n.a)(r.a.mark((function e(a,t){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.setSubmitting,e.next=3,m({data:a});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),1e3),children:function(e){var a=e.values,t=e.errors,r=e.touched,n=e.handleSubmit,c=e.isSubmitting;return Object(L.jsxs)(u.a,{onSubmit:n,noValidate:!0,children:[Object(L.jsxs)(v,{children:[Object(L.jsx)(N.a,{children:Object(L.jsxs)(u.a.Group,{controlId:"firstName",children:[Object(L.jsx)(u.a.Label,{children:"Name"}),Object(L.jsx)(u.a.Control,{as:P.a,type:"text",placeholder:"First",value:a.firstName,isInvalid:r.firstName&&!!t.firstName}),t.firstName&&r.firstName?Object(L.jsx)(u.a.Text,{className:"invalid-feedback pl-2",children:t.firstName}):null]})}),Object(L.jsx)(N.a,{children:Object(L.jsxs)(u.a.Group,{controlId:"middleName",children:[Object(L.jsx)(u.a.Label,{children:"\xa0"}),Object(L.jsx)(u.a.Control,{as:P.a,type:"text",placeholder:"Middle",value:a.middleName,isInvalid:r.middleName&&!!t.middleName}),t.middleName&&r.middleName?Object(L.jsx)(u.a.Text,{className:"invalid-feedback pl-2",children:t.middleName}):null]})}),Object(L.jsx)(N.a,{children:Object(L.jsxs)(u.a.Group,{controlId:"lastName",children:[Object(L.jsx)(u.a.Label,{children:"\xa0"}),Object(L.jsx)(u.a.Control,{as:P.a,type:"text",placeholder:"Last",value:a.lastName,isInvalid:r.lastName&&!!t.lastName}),t.lastName&&r.lastName?Object(L.jsx)(u.a.Text,{className:"invalid-feedback pl-2",children:t.lastName}):null]})})]}),Object(L.jsxs)(u.a.Group,{controlId:"email",children:[Object(L.jsx)(u.a.Label,{children:"Email address"}),Object(L.jsx)(u.a.Control,{as:P.a,type:"email",placeholder:"Enter email",value:a.email,isInvalid:r.email&&!!t.email}),t.email&&r.email?Object(L.jsx)(u.a.Text,{className:"invalid-feedback pl-2",children:t.email}):null]}),Object(L.jsxs)(v,{children:[Object(L.jsx)(N.a,{children:Object(L.jsxs)(u.a.Group,{controlId:"password",children:[Object(L.jsx)(u.a.Label,{children:"Password"}),Object(L.jsx)(u.a.Control,{as:P.a,type:"password",placeholder:"Password",value:a.password,isInvalid:r.password&&!!t.password}),t.password&&r.password?Object(L.jsx)(u.a.Text,{className:"invalid-feedback pl-2",children:t.password}):null]})}),Object(L.jsx)(N.a,{children:Object(L.jsxs)(u.a.Group,{controlId:"repeatPassword",children:[Object(L.jsx)(u.a.Label,{children:"Password"}),Object(L.jsx)(u.a.Control,{as:P.a,type:"password",placeholder:"Repeat Password",value:a.repeatPassword,isInvalid:r.repeatPassword&&!!t.repeatPassword}),t.repeatPassword&&r.repeatPassword?Object(L.jsx)(u.a.Text,{className:"invalid-feedback pl-2",children:t.repeatPassword}):null]})})]}),s.message&&Object(L.jsx)(w.a,{variant:s.variant,children:s.message}),Object(L.jsx)(g.a,{variant:"primary",type:"submit",disabled:c,children:c?"Loading...":"Register"})]})}})]})};a.default=S}}]);
//# sourceMappingURL=5.7bb20f2b.chunk.js.map