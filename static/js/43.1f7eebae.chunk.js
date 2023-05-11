"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[43],{713:function(n,e,t){t.d(e,{BC:function(){return u},M1:function(){return x},gH:function(){return l},kW:function(){return f},tx:function(){return m}});var r=t(861),c=t(757),a=t.n(c),i=t(924),s="https://api.themoviedb.org/3",o="d9881d8d11d61bffba0c06d8dae5cb01";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"//search/movie?api_key=").concat(o,"&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"/movie/").concat(e,"?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},43:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,c,a,i,s,o,u,p,l=t(861),d=t(439),f=t(757),v=t.n(f),x=t(713),h=t(689),m=t(791),Z=t(168),w=t(444),j=t(87),k=(0,w.ZP)(j.OL)(r||(r=(0,Z.Z)(["\ncolor: black;\n\n:hover {\n  color: red;\n}\n&.active {\n    color: red;\n  };\n"]))),y=w.ZP.main(c||(c=(0,Z.Z)(["\nposition: relative;\n"]))),g=(0,w.ZP)(j.rU)(a||(a=(0,Z.Z)(["\ncolor: black;\nposition: absolute;\nleft: 12px;\ntop: 12px;\n\n:hover {\n  color: red;\n}\n"]))),b=w.ZP.div(i||(i=(0,Z.Z)(["\npadding: 48px;\ndisplay: flex;\ngap: 18px;\n"]))),_=w.ZP.div(s||(s=(0,Z.Z)(["\ndisplay: flex;\nflex-direction: column;\npadding: 32px;\ngap: 18px;\n"]))),P=w.ZP.span(o||(o=(0,Z.Z)(["\nfont-weight: 700;\nfont-size: 22px;\n"]))),C=w.ZP.h2(u||(u=(0,Z.Z)(["\nfont-size: 32px;\n"]))),F=w.ZP.p(p||(p=(0,Z.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 8px;\n"]))),O=t(184),S=function(n){var e,t,r=n.movie,c=r.title,a=r.release_date,i=r.poster_path,s=r.vote_average,o=r.overview,u=r.genres,p=(0,h.TH)(),l=(0,m.useRef)(null!==(e=null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),d=i?"https://image.tmdb.org/t/p/w400/".concat(i):"",f=new Date(a).getFullYear(),v="".concat((10*s).toFixed(0),"%");return(0,O.jsxs)(y,{children:[(0,O.jsx)(g,{to:l.current,children:"Go Back"}),(0,O.jsxs)(b,{children:[(0,O.jsx)("img",{src:d,alt:c}),(0,O.jsxs)(_,{children:[(0,O.jsxs)(C,{children:[c," (",f,")"]}),(0,O.jsxs)("p",{children:["User Score: ",v]}),(0,O.jsxs)(F,{children:[(0,O.jsx)(P,{children:"Overview"}),o]}),u&&(0,O.jsxs)(F,{children:[(0,O.jsx)(P,{children:"Genres"}),u.map((function(n){return n.name})).join(", ")]})]})]}),(0,O.jsxs)(_,{children:[(0,O.jsx)(C,{children:"Additional information"}),(0,O.jsx)(k,{to:"cast",children:"Cast"}),(0,O.jsx)(k,{to:"reviews",children:"Reviews"})]})]})},U=t(243),z=function(){var n=(0,m.useState)({}),e=(0,d.Z)(n,2),t=e[0],r=e[1],c=(0,h.UO)().movieId;return(0,m.useEffect)((function(){var n=function(){var n=(0,l.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.kW)(c);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[c]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(S,{movie:t}),(0,O.jsx)(m.Suspense,{fallback:(0,O.jsx)(U.gy,{}),children:(0,O.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=43.1f7eebae.chunk.js.map