"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[350],{5047:function(e,t,r){var n=r(5861),i=r(4687),s=r.n(i),a=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"08e108d01762394f2ae50fa4fb841dfd"}}),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get(t);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.Z=l},5350:function(e,t,r){r.r(t),r.d(t,{default:function(){return A}});var n,i=r(5861),s=r(9439),a=r(4687),l=r.n(a),c=r(8410),o=r(2791),u=["title","titleId"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function d(e,t){var r=e.title,i=e.titleId,s=f(e,u);return o.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 24 24",ref:t,"aria-labelledby":i},s),r?o.createElement("title",{id:i},r):null,n||(n=o.createElement("path",{fill:"currentColor",d:"m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L9.55 12Z"})))}var v=o.forwardRef(d),x=(r.p,"Details_detailsContainer__IC-MX"),h="Details_infoBox__EkBIu",m="Details_detPar__ZUAs4",j=r(7689),b=r(1087),w=r(3356),y=r(1413),g=r(4925),_=r(5812),Z=r(5597),k=r(184),O=["size","centerContent"],C=["size"],z=(0,_.m)("div");z.displayName="Box";var S=(0,Z.G)((function(e,t){var r=e.size,n=e.centerContent,i=void 0===n||n,s=(0,g.Z)(e,O),a=i?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,k.jsx)(z,(0,y.Z)({ref:t,boxSize:r,__css:(0,y.Z)((0,y.Z)({},a),{},{flexShrink:0,flexGrow:0})},s))}));S.displayName="Square",(0,Z.G)((function(e,t){var r=e.size,n=(0,g.Z)(e,C);return(0,k.jsx)(S,(0,y.Z)({size:r,ref:t,borderRadius:"9999px"},n))})).displayName="Circle";var q=r(6640),N=r(9589),U=r(2715),E=r(6762),I=(0,o.lazy)((function(){return r.e(64).then(r.bind(r,4064))})),B=(0,o.lazy)((function(){return r.e(294).then(r.bind(r,9294))})),W=function(e){var t,r,n=e.movie;console.log("movie: ",n);var i=(0,j.TH)(),s=(0,o.useRef)(null!==(t=null===(r=i.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/");return(0,k.jsxs)("div",{className:x,children:[(0,k.jsx)(b.rU,{to:s.current,children:(0,k.jsx)(v,{})}),(0,k.jsx)(z,{children:(0,k.jsx)(q.E,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x281",alt:n.title})}),(0,k.jsxs)("div",{className:h,children:[(0,k.jsx)(N.X,{children:n.title}),(0,k.jsx)(U.x,{fontSize:"18px",className:m,children:n.overview}),(0,k.jsxs)("div",{children:[(0,k.jsxs)(E.U,{children:[(0,k.jsx)(b.rU,{to:"cast",children:"Cast"}),(0,k.jsx)(b.rU,{to:"reviews",children:"Review"})]}),(0,k.jsx)("div",{children:(0,k.jsx)(o.Suspense,{fallback:(0,k.jsx)(w.NB,{visible:!0}),children:(0,k.jsx)(c.W,{maxWidth:"1200px",children:(0,k.jsxs)(j.Z5,{children:[(0,k.jsx)(j.AW,{path:"cast",element:(0,k.jsx)(I,{})}),(0,k.jsx)(j.AW,{path:"reviews",element:(0,k.jsx)(B,{})})]})})})})]})]})]})},R=r(5047),A=function(){var e=(0,j.UO)().movieId,t=(0,o.useState)(null),r=(0,s.Z)(t,2),n=r[0],a=r[1],u=(0,o.useState)(!1),p=(0,s.Z)(u,2),f=p[0],d=p[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,i.Z)(l().mark((function t(){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.prev=1,t.next=4,(0,R.Z)("movie/".concat(e));case 4:r=t.sent,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:return t.prev=11,d(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,k.jsx)("section",{children:(0,k.jsxs)(c.W,{margin:"0 auto",maxW:"1440px",p:"0 15px",children:[f&&(0,k.jsx)(w.NB,{visible:f}),n&&(0,k.jsx)(W,{movie:n})]})})}}}]);
//# sourceMappingURL=350.dda08ff0.chunk.js.map