"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{935:function(t,e,r){var n=r(689),a=r(87),u=r(184);e.Z=function(t){var e=t.movies,r=(0,n.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:{pathname:"/movies/".concat(e),state:{from:r}},children:n})},e)}))})}},487:function(t,e,r){r.d(e,{Bt:function(){return v},Y5:function(){return o},bI:function(){return p},uV:function(){return f},vw:function(){return i}});var n=r(861),a=r(757),u=r.n(a),c=r(340),s="535714c0a80e6a8943da768c0c2085c9",i=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:s}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:s,query:e}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},500:function(t,e,r){r.r(e);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(487),o=r(935),p=r(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],f=(0,s.useState)([]),v=(0,a.Z)(f,2),h=v[0],d=v[1],m=(0,s.useState)([]),l=(0,a.Z)(m,2),x=l[0],w=l[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.t0=u,t.next=5,(0,i.vw)();case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(0),w(t.t2.message);case 12:return t.prev=12,d(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)("div",{children:[h&&(0,p.jsx)("p",{children:"...Loading"}),x&&(0,p.jsx)("p",{children:x}),(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(o.Z,{movies:r})]})}}}]);
//# sourceMappingURL=500.4319b04f.chunk.js.map