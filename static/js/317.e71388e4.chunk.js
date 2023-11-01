"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[317],{5047:function(e,r,n){var t=n(5861),i=n(4687),a=n.n(i),c=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"08e108d01762394f2ae50fa4fb841dfd"}}),s=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get(r);case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();r.Z=s},1317:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(5861),i=n(9439),a=n(4687),c=n.n(a),s=n(2791),o=n(5047),l=n(7689),u=n(1087),d="HomeMovieList_movie_List__vclKl",f=n(5090),m=n(9696),p=n(6640),h=n(3387),v=n(9589),x=n(2715),y=n(184),j=function(e){var r=e.movies,n=(0,l.TH)();return(0,y.jsx)("ul",{className:d,children:r.map((function(e){var r=e.id,t=e.title,i=e.vote_average,a=e.vote_count,c=e.poster_path;return(0,y.jsx)("li",{children:(0,y.jsx)(u.rU,{state:{from:n},to:"/movies/".concat(r),children:(0,y.jsx)(f.Z,{maxW:"200px",h:"359px",children:(0,y.jsxs)(m.e,{children:[(0,y.jsx)(p.E,{h:"240px",src:c?"https://image.tmdb.org/t/p/w200".concat(c):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300",alt:"",borderRadius:"lg"}),(0,y.jsxs)(h.K,{mt:"8px",spacing:"1.5px",children:[(0,y.jsx)(v.X,{fontSize:"16px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:t}),(0,y.jsxs)(x.x,{color:"grey",children:["Rating: ",i]}),(0,y.jsxs)(x.x,{color:"grey",children:["Vote Count: ",a]})]})]})})})},r)}))})},g=function(){var e=(0,s.useState)([]),r=(0,i.Z)(e,2),n=r[0],a=r[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Z)("/trending/movie/day");case 3:r=e.sent,n=r.results,a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,y.jsx)("div",{children:(0,y.jsx)(j,{movies:n})})}},9696:function(e,r,n){n.d(r,{e:function(){return d}});var t=n(1413),i=n(4925),a=n(2217),c=n(6992),s=n(5597),o=n(5812),l=n(184),u=["className"],d=(0,s.G)((function(e,r){var n=e.className,s=(0,i.Z)(e,u),d=(0,a.v)();return(0,l.jsx)(o.m.div,(0,t.Z)({ref:r,className:(0,c.cx)("chakra-card__body",n),__css:d.body},s))}))},2217:function(e,r,n){n.d(r,{Y:function(){return c},v:function(){return s}});var t=n(9439),i=(0,n(9416).eC)("Card"),a=(0,t.Z)(i,2),c=a[0],s=a[1]},5090:function(e,r,n){n.d(r,{Z:function(){return m}});var t=n(1413),i=n(4925),a=n(2217),c=n(6992),s=n(5597),o=n(2996),l=n(6516),u=n(5812),d=n(184),f=["className","children","direction","justify","align"],m=(0,s.G)((function(e,r){var n=(0,o.Lr)(e),s=n.className,m=n.children,p=n.direction,h=void 0===p?"column":p,v=n.justify,x=n.align,y=(0,i.Z)(n,f),j=(0,l.jC)("Card",e);return(0,d.jsx)(u.m.div,(0,t.Z)((0,t.Z)({ref:r,className:(0,c.cx)("chakra-card",s),__css:(0,t.Z)({display:"flex",flexDirection:h,justifyContent:v,alignItems:x,position:"relative",minWidth:0,wordWrap:"break-word"},j.container)},y),{},{children:(0,d.jsx)(a.Y,{value:j,children:m})}))}))},3387:function(e,r,n){n.d(r,{K:function(){return f}});var t=n(1413),i=n(4925),a=n(5812),c=n(184),s=function(e){return(0,c.jsx)(a.m.div,(0,t.Z)((0,t.Z)({className:"chakra-stack__item"},e),{},{__css:(0,t.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};s.displayName="StackItem";var o=n(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);var l=n(2791);var u=n(5597),d=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],f=(0,u.G)((function(e,r){var n=e.isInline,u=e.direction,f=e.align,m=e.justify,p=e.spacing,h=void 0===p?"0.5rem":p,v=e.wrap,x=e.children,y=e.divider,j=e.className,g=e.shouldWrapChildren,_=(0,i.Z)(e,d),b=n?"row":null!=u?u:"column",k=(0,l.useMemo)((function(){return function(e){var r,n,t=e.spacing,i=e.direction,a={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(r=i,n=function(e){return a[e]},Array.isArray(r)?r.map((function(e){return null===e?null:n(e)})):(0,o.Kn)(r)?Object.keys(r).reduce((function(e,t){return e[t]=n(r[t]),e}),{}):null!=r?n(r):null)}}({spacing:h,direction:b})}),[h,b]),Z=!!y,w=!g&&!Z,W=(0,l.useMemo)((function(){var e=function(e){return l.Children.toArray(e).filter((function(e){return(0,l.isValidElement)(e)}))}(x);return w?e:e.map((function(r,n){var t="undefined"!==typeof r.key?r.key:n,i=n+1===e.length,a=g?(0,c.jsx)(s,{children:r},t):r;if(!Z)return a;var o=(0,l.cloneElement)(y,{__css:k}),u=i?null:o;return(0,c.jsxs)(l.Fragment,{children:[a,u]},t)}))}),[y,k,Z,w,g,x]),N=(0,o.cx)("chakra-stack",j);return(0,c.jsx)(a.m.div,(0,t.Z)((0,t.Z)({ref:r,display:"flex",alignItems:f,justifyContent:m,flexDirection:b,flexWrap:v,gap:Z?void 0:h,className:N},_),{},{children:W}))}));f.displayName="Stack"}}]);
//# sourceMappingURL=317.e71388e4.chunk.js.map