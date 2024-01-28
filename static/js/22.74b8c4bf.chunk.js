"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[22],{935:function(n,t,r){var e=r(689),a=r(87),i=r(7),u=r.n(i),o=r(184);t.Z=function(n){var t=n.movies,r=(0,e.TH)();return(0,o.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.title;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:{pathname:"/movies/".concat(t),state:{from:r}},children:e})},t)}))})},u().MoviesList={movies:u().arrayOf(u().shape({id:u().string.isRequired,title:u().string.isRequired}))}},487:function(n,t,r){r.d(t,{Bt:function(){return d},Y5:function(){return c},bI:function(){return p},uV:function(){return f},vw:function(){return s}});var e=r(861),a=r(757),i=r.n(a),u=r(340),o="535714c0a80e6a8943da768c0c2085c9",s=function(){var n=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:o}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:o,query:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},559:function(n,t,r){r.r(t),r.d(t,{default:function(){return Z}});var e,a,i,u=r(861),o=r(439),s=r(757),c=r.n(s),p=r(791),f=r(168),d=r(924),v=d.zo.form(e||(e=(0,f.Z)(["\n  margin: 20px;\n \n"]))),m=d.zo.button(a||(a=(0,f.Z)(["\n  cursor: pointer;\n  margin: 0 auto;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #000;\n  outline: none;\n  &:focus {\n    border: 2px solid #000;\n  }\n"]))),h=d.zo.input(i||(i=(0,f.Z)(["\n  margin: 0 auto;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  width: 300px;\n  margin-bottom: 20px;\n  margin-right: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #000;\n  outline: none;\n  &:focus {\n    border: 2px solid #000;\n  }\n"]))),l=r(184),x=function(n){var t=n.onSubmit;return(0,l.jsxs)(v,{onSubmit:t,children:[(0,l.jsx)(h,{type:"text",name:"input"}),(0,l.jsx)(m,{type:"submit",children:"Search"})]})},g=r(87),b=r(935),w=r(487),Z=function(){var n=(0,g.lr)(),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=r.get("movie"),i=(0,p.useState)([]),s=(0,o.Z)(i,2),f=s[0],d=s[1],v=(0,p.useState)([]),m=(0,o.Z)(v,2),h=m[0],Z=m[1],k=(0,p.useState)([]),y=(0,o.Z)(k,2),j=y[0],_=y[1];(0,p.useEffect)((function(){var n=function(){var n=(0,u.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.t0=d,n.next=5,(0,w.bI)(a);case 5:n.t1=n.sent,(0,n.t0)(n.t1),n.next=12;break;case 9:n.prev=9,n.t2=n.catch(0),_(n.t2.message);case 12:return n.prev=12,Z(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();a&&n()}),[a]);return(0,l.jsxs)("div",{children:[h&&(0,l.jsx)("p",{children:"...Loading"}),j&&(0,l.jsx)("p",{children:j}),(0,l.jsx)("h1",{children:"Search"}),(0,l.jsx)(x,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.input.value;e({movie:t}),n.target.reset()}}),(0,l.jsx)(b.Z,{movies:f})]})}}}]);
//# sourceMappingURL=22.74b8c4bf.chunk.js.map