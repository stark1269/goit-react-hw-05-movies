"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[3],{713:function(n,t,e){e.d(t,{BC:function(){return s},M1:function(){return h},gH:function(){return f},kW:function(){return d},tx:function(){return m}});var r=e(861),a=e(757),c=e.n(a),u=e(924),i="https://api.themoviedb.org/3",o="d9881d8d11d61bffba0c06d8dae5cb01";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"//search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"/movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},116:function(n,t,e){e.d(t,{e:function(){return h}});var r,a,c,u,i=e(168),o=e(444),s=e(87),p=(0,o.ZP)(s.rU)(r||(r=(0,i.Z)(["\ncolor: black;\nfont-size: 18px;\nfont-weight: 500;\n\n:hover {\n  color: red;\n}\n"]))),f=e(184),l=function(n){var t=n.movie,e=n.location;return(0,f.jsx)("li",{children:(0,f.jsx)(p,{state:{from:e},to:"/movies/".concat(t.id),children:t.title})})},d=o.ZP.section(a||(a=(0,i.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 32px;\nwidth: 500px;\npadding: 32px;\n"]))),v=(o.ZP.h2(c||(c=(0,i.Z)(["\nfont-size: 42px;\n"]))),o.ZP.ul(u||(u=(0,i.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\n"])))),h=function(n){var t=n.movie,e=n.location;return(0,f.jsx)(d,{children:(0,f.jsx)(v,{children:t.map((function(n){return(0,f.jsx)(l,{movie:n,location:e},n.id)}))})})}},3:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,u=e(861),i=e(439),o=e(757),s=e.n(o),p=e(713),f=e(168),l=e(444),d=l.ZP.form(r||(r=(0,f.Z)(["\ndisplay: flex;\njustify-content: center;\ngap: 16px;\npadding: 18px;\n"]))),v=l.ZP.input(a||(a=(0,f.Z)(["\npadding: 8px;\nfont-size: 18px;\n"]))),h=l.ZP.button(c||(c=(0,f.Z)(["\npadding: 8px;\n"]))),x=e(791),m=e(184),y=function(n){var t=n.onSubmit,e=(0,x.useState)(""),r=(0,i.Z)(e,2),a=r[0],c=r[1];return(0,m.jsxs)(d,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query.value;e.trim()&&(t(e),c(""),n.target.reset())},children:[(0,m.jsx)(v,{value:a,name:"query",type:"text",onChange:function(n){return c(n.currentTarget.value)}}),(0,m.jsx)(h,{type:"submit",children:"Search"})]})},Z=e(87),g=e(689),w=e(116),b=function(){var n=(0,Z.lr)(),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,g.TH)(),c=(0,x.useState)([]),o=(0,i.Z)(c,2),f=o[0],l=o[1];(0,x.useEffect)((function(){var n,t=null!==(n=e.get("query"))&&void 0!==n?n:"";if(t){var r=function(){var n=(0,u.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.gH)(t);case 3:e=n.sent,l(e),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();r()}}),[e]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{onSubmit:function(n){r({query:n})}}),f.length?(0,m.jsx)(w.e,{movie:f,location:a}):(0,m.jsx)("h1",{children:"Movie search"})]})}}}]);
//# sourceMappingURL=3.c0120ea1.chunk.js.map