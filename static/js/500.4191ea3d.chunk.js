(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{935:function(e,t,r){"use strict";var n=r(689),a=r(87),s=r(7),i=r.n(s),u=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:{pathname:"/movies/".concat(t),state:{from:r}},children:n})},t)}))})},i().MoviesList={movies:i().arrayOf(i().shape({id:i().string.isRequired,title:i().string.isRequired}))}},487:function(e,t,r){"use strict";r.d(t,{Bt:function(){return v},Y5:function(){return o},bI:function(){return p},uV:function(){return f},vw:function(){return c}});var n=r(861),a=r(757),s=r.n(a),i=r(340),u="535714c0a80e6a8943da768c0c2085c9",c=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:u}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:u}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:u,query:t}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:u}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:u}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},500:function(e,t,r){"use strict";r.r(t);var n=r(861),a=r(439),s=r(757),i=r.n(s),u=r(791),c=r(487),o=r(935),p=r(184);t.default=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],f=(0,u.useState)([]),v=(0,a.Z)(f,2),h=v[0],d=v[1],m=(0,u.useState)([]),l=(0,a.Z)(m,2),y=l[0],x=l[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.t0=s,e.next=5,(0,c.vw)();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),x(e.t2.message);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{children:[h&&(0,p.jsx)("p",{children:"...Loading"}),y&&(0,p.jsx)("p",{children:y}),(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(o.Z,{movies:r})]})}},888:function(e,t,r){"use strict";var n=r(47);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,s,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=500.4191ea3d.chunk.js.map