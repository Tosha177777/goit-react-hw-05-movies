"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{5047:function(e,r,n){var t=n(5861),i=n(4687),a=n.n(i),l=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"08e108d01762394f2ae50fa4fb841dfd"}}),o=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get(r);case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();r.Z=o},7158:function(e,r,n){n.r(r),n.d(r,{default:function(){return $}});var t,i=n(5861),a=n(9439),l=n(4687),o=n.n(l),s=n(2791),c=["title","titleId"];function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}function d(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f(e,r){var n=e.title,i=e.titleId,a=d(e,c);return s.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 24 24",ref:r,"aria-labelledby":i},a),n?s.createElement("title",{id:i},n):null,t||(t=s.createElement("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"})))}var v=s.forwardRef(f),m=(n.p,n(1087)),h=n(5047),p=n(3356),g={movie_List:"Search_movie_List__2P+If",movie_card:"Search_movie_card__YuQ4L",titleMain:"Search_titleMain__XYmYC",castBox:"Search_castBox__TV36l"},x=n(7689),b=n(5090),y=n(9696),Z=n(6640),k=n(3387),j=n(9589),_=n(2715),N=n(184),w=function(e){var r=e.movies,n=(0,x.TH)();return(0,N.jsx)("ul",{className:g.movie_List,style:{marginTop:"15px"},children:r.map((function(e){var r=e.id,t=e.title,i=e.vote_average,a=e.vote_count,l=e.poster_path;return(0,N.jsx)("li",{children:(0,N.jsx)(m.rU,{state:{from:n},to:"/movies/".concat(r),className:g.movieLink,children:(0,N.jsx)(b.Z,{maxW:"200px",h:"359px",children:(0,N.jsxs)(y.e,{children:[(0,N.jsx)(Z.E,{h:"240px",src:l?"https://image.tmdb.org/t/p/w200".concat(l):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300",alt:"",borderRadius:"lg"}),(0,N.jsxs)(k.K,{mt:"8px",spacing:"1.5px",children:[(0,N.jsx)(j.X,{fontSize:"16px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:t}),(0,N.jsxs)(_.x,{color:"grey",children:["Rating: ",i]}),(0,N.jsxs)(_.x,{color:"grey",children:["Vote Count: ",a]})]})]})})})},r)}))})},O=n(1413),I=n(4925),S=n(9886);function C(e,r){if(null!=e)if("function"!==typeof e)try{e.current=r}catch(n){throw new Error("Cannot assign value '".concat(r,"' to ref '").concat(e,"'"))}else e(r)}function R(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(e){r.forEach((function(r){C(r,e)}))}}var F=n(5597),P=n(6516),q=n(2996),L=n(5812),B=n(6992),T=["id","isRequired","isInvalid","isDisabled","isReadOnly"],E=["getRootProps","htmlProps"],W=(0,S.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),D=(0,a.Z)(W,2),H=D[0],G=D[1],z=(0,S.k)({strict:!1,name:"FormControlContext"}),M=(0,a.Z)(z,2),A=M[0],Y=M[1];var Q=(0,F.G)((function(e,r){var n=(0,P.jC)("Form",e),t=function(e){var r=e.id,n=e.isRequired,t=e.isInvalid,i=e.isDisabled,l=e.isReadOnly,o=(0,I.Z)(e,T),c=(0,s.useId)(),u=r||"field-".concat(c),d="".concat(u,"-label"),f="".concat(u,"-feedback"),v="".concat(u,"-helptext"),m=(0,s.useState)(!1),h=(0,a.Z)(m,2),p=h[0],g=h[1],x=(0,s.useState)(!1),b=(0,a.Z)(x,2),y=b[0],Z=b[1],k=(0,s.useState)(!1),j=(0,a.Z)(k,2),_=j[0],N=j[1],w=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,O.Z)((0,O.Z)({id:v},e),{},{ref:R(r,(function(e){e&&Z(!0)}))})}),[v]),S=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,O.Z)((0,O.Z)({},e),{},{ref:r,"data-focus":(0,B.PB)(_),"data-disabled":(0,B.PB)(i),"data-invalid":(0,B.PB)(t),"data-readonly":(0,B.PB)(l),id:void 0!==e.id?e.id:d,htmlFor:void 0!==e.htmlFor?e.htmlFor:u})}),[u,i,_,t,l,d]),C=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,O.Z)((0,O.Z)({id:f},e),{},{ref:R(r,(function(e){e&&g(!0)})),"aria-live":"polite"})}),[f]),F=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,O.Z)((0,O.Z)((0,O.Z)({},e),o),{},{ref:r,role:"group"})}),[o]),P=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,O.Z)((0,O.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!l,isDisabled:!!i,isFocused:!!_,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},hasFeedbackText:p,setHasFeedbackText:g,hasHelpText:y,setHasHelpText:Z,id:u,labelId:d,feedbackId:f,helpTextId:v,htmlProps:o,getHelpTextProps:w,getErrorMessageProps:C,getRootProps:F,getLabelProps:S,getRequiredIndicatorProps:P}}((0,q.Lr)(e)),i=t.getRootProps,l=(t.htmlProps,(0,I.Z)(t,E)),o=(0,B.cx)("chakra-form-control",e.className);return(0,N.jsx)(A,{value:l,children:(0,N.jsx)(H,{value:n,children:(0,N.jsx)(L.m.div,(0,O.Z)((0,O.Z)({},i({},r)),{},{className:o,__css:n.container}))})})}));Q.displayName="FormControl",(0,F.G)((function(e,r){var n=Y(),t=G(),i=(0,B.cx)("chakra-form__helper-text",e.className);return(0,N.jsx)(L.m.div,(0,O.Z)((0,O.Z)({},null==n?void 0:n.getHelpTextProps(e,r)),{},{__css:t.helperText,className:i}))})).displayName="FormHelperText";var K=["isDisabled","isInvalid","isReadOnly","isRequired"],U=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function V(e){var r=function(e){var r,n,t,i=Y(),a=e.id,l=e.disabled,o=e.readOnly,s=e.required,c=e.isRequired,u=e.isInvalid,d=e.isReadOnly,f=e.isDisabled,v=e.onFocus,m=e.onBlur,h=(0,I.Z)(e,U),p=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&p.push(i.feedbackId);(null==i?void 0:i.hasHelpText)&&p.push(i.helpTextId);return(0,O.Z)((0,O.Z)({},h),{},{"aria-describedby":p.join(" ")||void 0,id:null!=a?a:null==i?void 0:i.id,isDisabled:null!=(r=null!=l?l:f)?r:null==i?void 0:i.isDisabled,isReadOnly:null!=(n=null!=o?o:d)?n:null==i?void 0:i.isReadOnly,isRequired:null!=(t=null!=s?s:c)?t:null==i?void 0:i.isRequired,isInvalid:null!=u?u:null==i?void 0:i.isInvalid,onFocus:(0,B.v0)(null==i?void 0:i.onFocus,v),onBlur:(0,B.v0)(null==i?void 0:i.onBlur,m)})}(e),n=r.isDisabled,t=r.isInvalid,i=r.isReadOnly,a=r.isRequired,l=(0,I.Z)(r,K);return(0,O.Z)((0,O.Z)({},l),{},{disabled:n,readOnly:i,required:a,"aria-invalid":(0,B.Qm)(t),"aria-required":(0,B.Qm)(a),"aria-readonly":(0,B.Qm)(i)})}var X=["htmlSize"],J=(0,F.G)((function(e,r){var n=e.htmlSize,t=(0,I.Z)(e,X),i=(0,P.jC)("Input",t),a=V((0,q.Lr)(t)),l=(0,B.cx)("chakra-input",e.className);return(0,N.jsx)(L.m.input,(0,O.Z)((0,O.Z)({size:n},a),{},{__css:i.field,ref:r,className:l}))}));J.displayName="Input",J.id="Input";var $=function(){var e=(0,m.lr)(),r=(0,a.Z)(e,2),n=r[0],t=r[1],l=(0,s.useState)(null),c=(0,a.Z)(l,2),u=c[0],d=c[1],f=(0,s.useState)(!1),g=(0,a.Z)(f,2),x=g[0],b=g[1],y=n.get("query");(0,s.useEffect)((function(){if(y){var e=function(){var e=(0,i.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,h.Z)("search/movie?query=".concat(y));case 4:r=e.sent,d(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[y]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=e.currentTarget.elements.searchMovieByName.value;t({query:r})},style:{display:"flex",alignItems:"center"},children:[(0,N.jsx)("label",{children:(0,N.jsx)(J,{type:"text",name:"searchMovieByName",required:!0})}),(0,N.jsx)("button",{type:"submit",style:{display:"inline-block",backgroundColor:"inherit",border:"none"},children:(0,N.jsx)(v,{})})]}),x&&(0,N.jsx)(p.NB,{visible:x}),u&&(0,N.jsx)(w,{movies:u})]})}},9696:function(e,r,n){n.d(r,{e:function(){return d}});var t=n(1413),i=n(4925),a=n(2217),l=n(6992),o=n(5597),s=n(5812),c=n(184),u=["className"],d=(0,o.G)((function(e,r){var n=e.className,o=(0,i.Z)(e,u),d=(0,a.v)();return(0,c.jsx)(s.m.div,(0,t.Z)({ref:r,className:(0,l.cx)("chakra-card__body",n),__css:d.body},o))}))},2217:function(e,r,n){n.d(r,{Y:function(){return l},v:function(){return o}});var t=n(9439),i=(0,n(9416).eC)("Card"),a=(0,t.Z)(i,2),l=a[0],o=a[1]},5090:function(e,r,n){n.d(r,{Z:function(){return v}});var t=n(1413),i=n(4925),a=n(2217),l=n(6992),o=n(5597),s=n(2996),c=n(6516),u=n(5812),d=n(184),f=["className","children","direction","justify","align"],v=(0,o.G)((function(e,r){var n=(0,s.Lr)(e),o=n.className,v=n.children,m=n.direction,h=void 0===m?"column":m,p=n.justify,g=n.align,x=(0,i.Z)(n,f),b=(0,c.jC)("Card",e);return(0,d.jsx)(u.m.div,(0,t.Z)((0,t.Z)({ref:r,className:(0,l.cx)("chakra-card",o),__css:(0,t.Z)({display:"flex",flexDirection:h,justifyContent:p,alignItems:g,position:"relative",minWidth:0,wordWrap:"break-word"},b.container)},x),{},{children:(0,d.jsx)(a.Y,{value:b,children:v})}))}))},6640:function(e,r,n){n.d(r,{E:function(){return h}});var t=n(1413),i=n(4925),a=n(7762),l=n(5597),o=n(184),s=["htmlWidth","htmlHeight","alt"],c=(0,l.G)((function(e,r){var n=e.htmlWidth,a=e.htmlHeight,l=e.alt,c=(0,i.Z)(e,s);return(0,o.jsx)("img",(0,t.Z)({width:n,height:a,ref:r,alt:l},c))}));c.displayName="NativeImage";var u=n(9439),d=n(9205),f=n(2791);var v=n(5812),m=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var h=(0,l.G)((function(e,r){var n=e.fallbackSrc,l=e.fallback,s=e.src,h=e.srcSet,p=e.align,g=e.fit,x=e.loading,b=e.ignoreFallback,y=e.crossOrigin,Z=e.fallbackStrategy,k=void 0===Z?"beforeLoadOrError":Z,j=e.referrerPolicy,_=(0,i.Z)(e,m),N=null!=x||b||!(void 0!==n||void 0!==l),w=function(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,a=e.onError,l=e.crossOrigin,o=e.sizes,s=e.ignoreFallback,c=(0,f.useState)("pending"),v=(0,u.Z)(c,2),m=v[0],h=v[1];(0,f.useEffect)((function(){h(n?"loading":"pending")}),[n]);var p=(0,f.useRef)(),g=(0,f.useCallback)((function(){if(n){x();var e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),o&&(e.sizes=o),r&&(e.loading=r),e.onload=function(e){x(),h("loaded"),null==i||i(e)},e.onerror=function(e){x(),h("failed"),null==a||a(e)},p.current=e}}),[n,l,t,o,i,a,r]),x=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,d.G)((function(){if(!s)return"loading"===m&&g(),function(){x()}}),[m,g,s]),s?"loaded":m}((0,t.Z)((0,t.Z)({},e),{},{crossOrigin:y,ignoreFallback:N})),O=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(w,k),I=(0,t.Z)({ref:r,objectFit:g,objectPosition:p},N?_:function(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.assign({},e),i=(0,a.Z)(n);try{for(i.s();!(r=i.n()).done;){var l=r.value;l in t&&delete t[l]}}catch(o){i.e(o)}finally{i.f()}return t}(_,["onError","onLoad"]));return O?l||(0,o.jsx)(v.m.img,(0,t.Z)({as:c,className:"chakra-image__placeholder",src:n},I)):(0,o.jsx)(v.m.img,(0,t.Z)({as:c,src:s,srcSet:h,crossOrigin:y,loading:x,referrerPolicy:j,className:"chakra-image"},I))}));h.displayName="Image"},2715:function(e,r,n){n.d(r,{x:function(){return f}});var t=n(1413),i=n(4925),a=n(5597),l=n(6516),o=n(2996),s=n(5812),c=n(6992);var u=n(184),d=["className","align","decoration","casing"],f=(0,a.G)((function(e,r){var n=(0,l.mq)("Text",e),a=(0,o.Lr)(e),f=(a.className,a.align,a.decoration,a.casing,(0,i.Z)(a,d)),v=function(e){var r=Object.assign({},e);for(var n in r)void 0===r[n]&&delete r[n];return r}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(s.m.p,(0,t.Z)((0,t.Z)((0,t.Z)({ref:r,className:(0,c.cx)("chakra-text",e.className)},v),f),{},{__css:n}))}));f.displayName="Text"},9589:function(e,r,n){n.d(r,{X:function(){return f}});var t=n(1413),i=n(4925),a=n(5597),l=n(6516),o=n(2996),s=n(5812),c=n(6992),u=n(184),d=["className"],f=(0,a.G)((function(e,r){var n=(0,l.mq)("Heading",e),a=(0,o.Lr)(e),f=(a.className,(0,i.Z)(a,d));return(0,u.jsx)(s.m.h2,(0,t.Z)((0,t.Z)({ref:r,className:(0,c.cx)("chakra-heading",e.className)},f),{},{__css:n}))}));f.displayName="Heading"},3387:function(e,r,n){n.d(r,{K:function(){return f}});var t=n(1413),i=n(4925),a=n(5812),l=n(184),o=function(e){return(0,l.jsx)(a.m.div,(0,t.Z)((0,t.Z)({className:"chakra-stack__item"},e),{},{__css:(0,t.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};o.displayName="StackItem";var s=n(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);var c=n(2791);var u=n(5597),d=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],f=(0,u.G)((function(e,r){var n=e.isInline,u=e.direction,f=e.align,v=e.justify,m=e.spacing,h=void 0===m?"0.5rem":m,p=e.wrap,g=e.children,x=e.divider,b=e.className,y=e.shouldWrapChildren,Z=(0,i.Z)(e,d),k=n?"row":null!=u?u:"column",j=(0,c.useMemo)((function(){return function(e){var r,n,t=e.spacing,i=e.direction,a={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(r=i,n=function(e){return a[e]},Array.isArray(r)?r.map((function(e){return null===e?null:n(e)})):(0,s.Kn)(r)?Object.keys(r).reduce((function(e,t){return e[t]=n(r[t]),e}),{}):null!=r?n(r):null)}}({spacing:h,direction:k})}),[h,k]),_=!!x,N=!y&&!_,w=(0,c.useMemo)((function(){var e=function(e){return c.Children.toArray(e).filter((function(e){return(0,c.isValidElement)(e)}))}(g);return N?e:e.map((function(r,n){var t="undefined"!==typeof r.key?r.key:n,i=n+1===e.length,a=y?(0,l.jsx)(o,{children:r},t):r;if(!_)return a;var s=(0,c.cloneElement)(x,{__css:j}),u=i?null:s;return(0,l.jsxs)(c.Fragment,{children:[a,u]},t)}))}),[x,j,_,N,y,g]),O=(0,s.cx)("chakra-stack",b);return(0,l.jsx)(a.m.div,(0,t.Z)((0,t.Z)({ref:r,display:"flex",alignItems:f,justifyContent:v,flexDirection:k,flexWrap:p,gap:_?void 0:h,className:O},Z),{},{children:w}))}));f.displayName="Stack"}}]);
//# sourceMappingURL=158.5a57b66a.chunk.js.map