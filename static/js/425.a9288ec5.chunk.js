"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[425],{713:function(t,n,r){r.d(n,{BC:function(){return o},M1:function(){return v},gH:function(){return f},kW:function(){return d},tx:function(){return m}});var e=r(861),a=r(757),c=r.n(a),u=r(924),i="https://api.themoviedb.org/3",s="d9881d8d11d61bffba0c06d8dae5cb01";function o(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(i,"/trending/movie/day?api_key=").concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(i,"//search/movie?api_key=").concat(s,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(i,"/movie/").concat(n,"?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},425:function(t,n,r){r.r(n),r.d(n,{default:function(){return l}});var e,a=r(861),c=r(439),u=r(757),i=r.n(u),s=r(689),o=r(791),p=r(713),f=r(168),h=r(444).ZP.ul(e||(e=(0,f.Z)(["\npadding: 18px;\ndisplay: flex;\nflex-wrap: wrap;\ngap: 8px;\n"]))),d=r(184),l=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),r=n[0],e=n[1],u=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.M1)(u);case 3:n=t.sent,r=n.cast,e(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[u]),(0,d.jsx)(h,{children:r.map((function(t){return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200/".concat(t.profile_path):"",alt:t.name}),(0,d.jsx)("p",{children:t.name}),(0,d.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}}}]);
//# sourceMappingURL=425.a9288ec5.chunk.js.map