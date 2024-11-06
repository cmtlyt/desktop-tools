import{R as T,c as h,r as o,G as K,j as A,b as Q,g as Xe,e as Ue,A as Ye,K as Ze,_ as $e,B as Se,f as D,d as ke,u as Oe,H as Je}from"./index-CfwBVzOL.js";import{o as xe,P as Qe,C as et,g as Ne}from"./index-2Fq0qy_u.js";import{g as ze,m as He,a as tt,K as he,u as nt,z as at}from"./asyncToGenerator-CFFvzZYl.js";import{R as ot,p as ie,I as st}from"./pickAttrs-djDJA2nm.js";import{u as lt}from"./context-D-fBrFUT.js";function Ee(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function je(e){const{closable:t,closeIcon:n}=e||{};return T.useMemo(()=>{if(!t&&(t===!1||n===!1||n===null))return!1;if(t===void 0&&n===void 0)return null;let a={closeIcon:typeof n!="boolean"&&n!==null?n:void 0};return t&&typeof t=="object"&&(a=Object.assign(Object.assign({},a),t)),a},[t,n])}function Ie(){const e={};for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.forEach(s=>{s&&Object.keys(s).forEach(l=>{s[l]!==void 0&&(e[l]=s[l])})}),e}const rt={};function it(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:rt;const a=je(e),s=je(t),l=T.useMemo(()=>Object.assign({closeIcon:T.createElement(ot,null)},n),[n]),c=T.useMemo(()=>a===!1?!1:a?Ie(l,s,a):s===!1?!1:s?Ie(l,s):l.closable?l:!1,[a,s,l]);return T.useMemo(()=>{if(c===!1)return[!1,null];const{closeIconRender:r}=l,{closeIcon:i}=c;let u=i;if(u!=null){r&&(u=r(i));const f=ie(c,!0);Object.keys(f).length&&(u=T.isValidElement(u)?T.cloneElement(u,f):T.createElement("span",Object.assign({},f),u))}return[!0,u]},[c,l])}const ce=e=>{const{prefixCls:t,className:n,style:a,size:s,shape:l}=e,c=h({[`${t}-lg`]:s==="large",[`${t}-sm`]:s==="small"}),r=h({[`${t}-circle`]:l==="circle",[`${t}-square`]:l==="square",[`${t}-round`]:l==="round"}),i=o.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return o.createElement("span",{className:h(t,c,r,n),style:Object.assign(Object.assign({},i),a)})},ct=new tt("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),de=e=>({height:e,lineHeight:K(e)}),ee=e=>Object.assign({width:e},de(e)),dt=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:ct,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),be=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},de(e)),ut=e=>{const{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:a,controlHeightLG:s,controlHeightSM:l}=e;return{[t]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},ee(a)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},ee(s)),[`${t}${t}-sm`]:Object.assign({},ee(l))}},mt=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:a,controlHeightLG:s,controlHeightSM:l,gradientFromColor:c,calc:r}=e;return{[a]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:n},be(t,r)),[`${a}-lg`]:Object.assign({},be(s,r)),[`${a}-sm`]:Object.assign({},be(l,r))}},Pe=e=>Object.assign({width:e},de(e)),gt=e=>{const{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:a,borderRadiusSM:s,calc:l}=e;return{[t]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:a,borderRadius:s},Pe(l(n).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},Pe(n)),{maxWidth:l(n).mul(4).equal(),maxHeight:l(n).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},pe=(e,t,n)=>{const{skeletonButtonCls:a}=e;return{[`${n}${a}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${a}-round`]:{borderRadius:t}}},Ce=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},de(e)),ft=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:a,controlHeightLG:s,controlHeightSM:l,gradientFromColor:c,calc:r}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:t,width:r(a).mul(2).equal(),minWidth:r(a).mul(2).equal()},Ce(a,r))},pe(e,a,n)),{[`${n}-lg`]:Object.assign({},Ce(s,r))}),pe(e,s,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},Ce(l,r))}),pe(e,l,`${n}-sm`))},vt=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:a,skeletonParagraphCls:s,skeletonButtonCls:l,skeletonInputCls:c,skeletonImageCls:r,controlHeight:i,controlHeightLG:u,controlHeightSM:f,gradientFromColor:g,padding:b,marginSM:m,borderRadius:v,titleHeight:d,blockRadius:O,paragraphLiHeight:N,controlHeightXS:E,paragraphMarginTop:y}=e;return{[t]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:b,verticalAlign:"top",[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:g},ee(i)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},ee(u)),[`${n}-sm`]:Object.assign({},ee(f))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[a]:{width:"100%",height:d,background:g,borderRadius:O,[`+ ${s}`]:{marginBlockStart:f}},[s]:{padding:0,"> li":{width:"100%",height:N,listStyle:"none",background:g,borderRadius:O,"+ li":{marginBlockStart:E}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${a}, ${s} > li`]:{borderRadius:v}}},[`${t}-with-avatar ${t}-content`]:{[a]:{marginBlockStart:m,[`+ ${s}`]:{marginBlockStart:y}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},ft(e)),ut(e)),mt(e)),gt(e)),[`${t}${t}-block`]:{width:"100%",[l]:{width:"100%"},[c]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${a},
        ${s} > li,
        ${n},
        ${l},
        ${c},
        ${r}
      `]:Object.assign({},dt(e))}}},ht=e=>{const{colorFillContent:t,colorFill:n}=e,a=t,s=n;return{color:a,colorGradientEnd:s,gradientFromColor:a,gradientToColor:s,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},te=ze("Skeleton",e=>{const{componentCls:t,calc:n}=e,a=He(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:n(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[vt(a)]},ht,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),bt=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,shape:l="circle",size:c="default"}=e,{getPrefixCls:r}=o.useContext(A),i=r("skeleton",t),[u,f,g]=te(i),b=xe(e,["prefixCls","className"]),m=h(i,`${i}-element`,{[`${i}-active`]:s},n,a,f,g);return u(o.createElement("div",{className:m},o.createElement(ce,Object.assign({prefixCls:`${i}-avatar`,shape:l,size:c},b))))},pt=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,block:l=!1,size:c="default"}=e,{getPrefixCls:r}=o.useContext(A),i=r("skeleton",t),[u,f,g]=te(i),b=xe(e,["prefixCls"]),m=h(i,`${i}-element`,{[`${i}-active`]:s,[`${i}-block`]:l},n,a,f,g);return u(o.createElement("div",{className:m},o.createElement(ce,Object.assign({prefixCls:`${i}-button`,size:c},b))))},Ct="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",yt=e=>{const{prefixCls:t,className:n,rootClassName:a,style:s,active:l}=e,{getPrefixCls:c}=o.useContext(A),r=c("skeleton",t),[i,u,f]=te(r),g=h(r,`${r}-element`,{[`${r}-active`]:l},n,a,u,f);return i(o.createElement("div",{className:g},o.createElement("div",{className:h(`${r}-image`,n),style:s},o.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${r}-image-svg`},o.createElement("title",null,"Image placeholder"),o.createElement("path",{d:Ct,className:`${r}-image-path`})))))},$t=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,block:l,size:c="default"}=e,{getPrefixCls:r}=o.useContext(A),i=r("skeleton",t),[u,f,g]=te(i),b=xe(e,["prefixCls"]),m=h(i,`${i}-element`,{[`${i}-active`]:s,[`${i}-block`]:l},n,a,f,g);return u(o.createElement("div",{className:m},o.createElement(ce,Object.assign({prefixCls:`${i}-input`,size:c},b))))};var xt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},wt=function(t,n){return o.createElement(st,Q({},t,{ref:n,icon:xt}))},St=o.forwardRef(wt);const kt=e=>{const{prefixCls:t,className:n,rootClassName:a,style:s,active:l,children:c}=e,{getPrefixCls:r}=o.useContext(A),i=r("skeleton",t),[u,f,g]=te(i),b=h(i,`${i}-element`,{[`${i}-active`]:l},f,n,a,g),m=c??o.createElement(St,null);return u(o.createElement("div",{className:b},o.createElement("div",{className:h(`${i}-image`,n),style:s},m)))},Ot=(e,t)=>{const{width:n,rows:a=2}=t;if(Array.isArray(n))return n[e];if(a-1===e)return n},Nt=e=>{const{prefixCls:t,className:n,style:a,rows:s}=e,l=Xe(Array(s)).map((c,r)=>o.createElement("li",{key:r,style:{width:Ot(r,e)}}));return o.createElement("ul",{className:h(t,n),style:a},l)},Et=e=>{let{prefixCls:t,className:n,width:a,style:s}=e;return o.createElement("h3",{className:h(t,n),style:Object.assign({width:a},s)})};function ye(e){return e&&typeof e=="object"?e:{}}function jt(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function It(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function Pt(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const ne=e=>{const{prefixCls:t,loading:n,className:a,rootClassName:s,style:l,children:c,avatar:r=!1,title:i=!0,paragraph:u=!0,active:f,round:g}=e,{getPrefixCls:b,direction:m,skeleton:v}=o.useContext(A),d=b("skeleton",t),[O,N,E]=te(d);if(n||!("loading"in e)){const y=!!r,x=!!i,p=!!u;let S;if(y){const R=Object.assign(Object.assign({prefixCls:`${d}-avatar`},jt(x,p)),ye(r));S=o.createElement("div",{className:`${d}-header`},o.createElement(ce,Object.assign({},R)))}let k;if(x||p){let R;if(x){const z=Object.assign(Object.assign({prefixCls:`${d}-title`},It(y,p)),ye(i));R=o.createElement(Et,Object.assign({},z))}let I;if(p){const z=Object.assign(Object.assign({prefixCls:`${d}-paragraph`},Pt(y,x)),ye(u));I=o.createElement(Nt,Object.assign({},z))}k=o.createElement("div",{className:`${d}-content`},R,I)}const j=h(d,{[`${d}-with-avatar`]:y,[`${d}-active`]:f,[`${d}-rtl`]:m==="rtl",[`${d}-round`]:g},v==null?void 0:v.className,a,s,N,E);return O(o.createElement("div",{className:j,style:Object.assign(Object.assign({},v==null?void 0:v.style),l)},S,k))}return c??null};ne.Button=pt;ne.Avatar=bt;ne.Input=$t;ne.Image=yt;ne.Node=kt;var Re=o.createContext(null),Be=o.createContext({}),Rt=["prefixCls","className","containerRef"],Mt=function(t){var n=t.prefixCls,a=t.className,s=t.containerRef,l=Ue(t,Rt),c=o.useContext(Be),r=c.panel,i=Ye(r,s);return o.createElement("div",Q({className:h("".concat(n,"-content"),a),role:"dialog",ref:i},ie(t,{aria:!0}),{"aria-modal":"true"},l))};function Me(e){return typeof e=="string"&&String(Number(e))===e?(Ze(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var De={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Dt(e,t){var n,a,s,l=e.prefixCls,c=e.open,r=e.placement,i=e.inline,u=e.push,f=e.forceRender,g=e.autoFocus,b=e.keyboard,m=e.classNames,v=e.rootClassName,d=e.rootStyle,O=e.zIndex,N=e.className,E=e.id,y=e.style,x=e.motion,p=e.width,S=e.height,k=e.children,j=e.mask,R=e.maskClosable,I=e.maskMotion,z=e.maskClassName,G=e.maskStyle,_=e.afterOpenChange,L=e.onClose,q=e.onMouseEnter,ae=e.onMouseOver,oe=e.onMouseLeave,X=e.onClick,se=e.onKeyDown,le=e.onKeyUp,$=e.styles,H=e.drawerRender,M=o.useRef(),B=o.useRef(),F=o.useRef();o.useImperativeHandle(t,function(){return M.current});var ue=function(P){var Y=P.keyCode,Z=P.shiftKey;switch(Y){case he.TAB:{if(Y===he.TAB){if(!Z&&document.activeElement===F.current){var J;(J=B.current)===null||J===void 0||J.focus({preventScroll:!0})}else if(Z&&document.activeElement===B.current){var ve;(ve=F.current)===null||ve===void 0||ve.focus({preventScroll:!0})}}break}case he.ESC:{L&&b&&(P.stopPropagation(),L(P));break}}};o.useEffect(function(){if(c&&g){var C;(C=M.current)===null||C===void 0||C.focus({preventScroll:!0})}},[c]);var me=o.useState(!1),ge=$e(me,2),re=ge[0],U=ge[1],w=o.useContext(Re),fe;typeof u=="boolean"?fe=u?{}:{distance:0}:fe=u||{};var V=(n=(a=(s=fe)===null||s===void 0?void 0:s.distance)!==null&&a!==void 0?a:w==null?void 0:w.pushDistance)!==null&&n!==void 0?n:180,Fe=o.useMemo(function(){return{pushDistance:V,push:function(){U(!0)},pull:function(){U(!1)}}},[V]);o.useEffect(function(){if(c){var C;w==null||(C=w.push)===null||C===void 0||C.call(w)}else{var P;w==null||(P=w.pull)===null||P===void 0||P.call(w)}},[c]),o.useEffect(function(){return function(){var C;w==null||(C=w.pull)===null||C===void 0||C.call(w)}},[]);var Ve=j&&o.createElement(Se,Q({key:"mask"},I,{visible:c}),function(C,P){var Y=C.className,Z=C.style;return o.createElement("div",{className:h("".concat(l,"-mask"),Y,m==null?void 0:m.mask,z),style:D(D(D({},Z),G),$==null?void 0:$.mask),onClick:R&&c?L:void 0,ref:P})}),We=typeof x=="function"?x(r):x,W={};if(re&&V)switch(r){case"top":W.transform="translateY(".concat(V,"px)");break;case"bottom":W.transform="translateY(".concat(-V,"px)");break;case"left":W.transform="translateX(".concat(V,"px)");break;default:W.transform="translateX(".concat(-V,"px)");break}r==="left"||r==="right"?W.width=Me(p):W.height=Me(S);var Ke={onMouseEnter:q,onMouseOver:ae,onMouseLeave:oe,onClick:X,onKeyDown:se,onKeyUp:le},Ge=o.createElement(Se,Q({key:"panel"},We,{visible:c,forceRender:f,onVisibleChanged:function(P){_==null||_(P)},removeOnLeave:!1,leavedClassName:"".concat(l,"-content-wrapper-hidden")}),function(C,P){var Y=C.className,Z=C.style,J=o.createElement(Mt,Q({id:E,containerRef:P,prefixCls:l,className:h(N,m==null?void 0:m.content),style:D(D({},y),$==null?void 0:$.content)},ie(e,{aria:!0}),Ke),k);return o.createElement("div",Q({className:h("".concat(l,"-content-wrapper"),m==null?void 0:m.wrapper,Y),style:D(D(D({},W),Z),$==null?void 0:$.wrapper)},ie(e,{data:!0})),H?H(J):J)}),we=D({},d);return O&&(we.zIndex=O),o.createElement(Re.Provider,{value:Fe},o.createElement("div",{className:h(l,"".concat(l,"-").concat(r),v,ke(ke({},"".concat(l,"-open"),c),"".concat(l,"-inline"),i)),style:we,tabIndex:-1,ref:M,onKeyDown:ue},Ve,o.createElement("div",{tabIndex:0,ref:B,style:De,"aria-hidden":"true","data-sentinel":"start"}),Ge,o.createElement("div",{tabIndex:0,ref:F,style:De,"aria-hidden":"true","data-sentinel":"end"})))}var zt=o.forwardRef(Dt),Ht=function(t){var n=t.open,a=n===void 0?!1:n,s=t.prefixCls,l=s===void 0?"rc-drawer":s,c=t.placement,r=c===void 0?"right":c,i=t.autoFocus,u=i===void 0?!0:i,f=t.keyboard,g=f===void 0?!0:f,b=t.width,m=b===void 0?378:b,v=t.mask,d=v===void 0?!0:v,O=t.maskClosable,N=O===void 0?!0:O,E=t.getContainer,y=t.forceRender,x=t.afterOpenChange,p=t.destroyOnClose,S=t.onMouseEnter,k=t.onMouseOver,j=t.onMouseLeave,R=t.onClick,I=t.onKeyDown,z=t.onKeyUp,G=t.panelRef,_=o.useState(!1),L=$e(_,2),q=L[0],ae=L[1],oe=o.useState(!1),X=$e(oe,2),se=X[0],le=X[1];Oe(function(){le(!0)},[]);var $=se?a:!1,H=o.useRef(),M=o.useRef();Oe(function(){$&&(M.current=document.activeElement)},[$]);var B=function(re){var U;if(ae(re),x==null||x(re),!re&&M.current&&!((U=H.current)!==null&&U!==void 0&&U.contains(M.current))){var w;(w=M.current)===null||w===void 0||w.focus({preventScroll:!0})}},F=o.useMemo(function(){return{panel:G}},[G]);if(!y&&!q&&!$&&p)return null;var ue={onMouseEnter:S,onMouseOver:k,onMouseLeave:j,onClick:R,onKeyDown:I,onKeyUp:z},me=D(D({},t),{},{open:$,prefixCls:l,placement:r,autoFocus:u,keyboard:g,width:m,mask:d,maskClosable:N,inline:E===!1,afterOpenChange:B,ref:H},ue);return o.createElement(Be.Provider,{value:F},o.createElement(Qe,{open:$||y||q,autoDestroy:!1,getContainer:E,autoLock:d&&($||q)},o.createElement(zt,me)))};const Ae=e=>{var t,n;const{prefixCls:a,title:s,footer:l,extra:c,loading:r,onClose:i,headerStyle:u,bodyStyle:f,footerStyle:g,children:b,classNames:m,styles:v}=e,{drawer:d}=o.useContext(A),O=o.useCallback(p=>o.createElement("button",{type:"button",onClick:i,"aria-label":"Close",className:`${a}-close`},p),[i]),[N,E]=it(Ee(e),Ee(d),{closable:!0,closeIconRender:O}),y=o.useMemo(()=>{var p,S;return!s&&!N?null:o.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(p=d==null?void 0:d.styles)===null||p===void 0?void 0:p.header),u),v==null?void 0:v.header),className:h(`${a}-header`,{[`${a}-header-close-only`]:N&&!s&&!c},(S=d==null?void 0:d.classNames)===null||S===void 0?void 0:S.header,m==null?void 0:m.header)},o.createElement("div",{className:`${a}-header-title`},E,s&&o.createElement("div",{className:`${a}-title`},s)),c&&o.createElement("div",{className:`${a}-extra`},c))},[N,E,c,u,a,s]),x=o.useMemo(()=>{var p,S;if(!l)return null;const k=`${a}-footer`;return o.createElement("div",{className:h(k,(p=d==null?void 0:d.classNames)===null||p===void 0?void 0:p.footer,m==null?void 0:m.footer),style:Object.assign(Object.assign(Object.assign({},(S=d==null?void 0:d.styles)===null||S===void 0?void 0:S.footer),g),v==null?void 0:v.footer)},l)},[l,g,a]);return o.createElement(o.Fragment,null,y,o.createElement("div",{className:h(`${a}-body`,m==null?void 0:m.body,(t=d==null?void 0:d.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(n=d==null?void 0:d.styles)===null||n===void 0?void 0:n.body),f),v==null?void 0:v.body)},r?o.createElement(ne,{active:!0,title:!1,paragraph:{rows:5},className:`${a}-body-skeleton`}):b),x)},Bt=e=>{const t="100%";return{left:`translateX(-${t})`,right:`translateX(${t})`,top:`translateY(-${t})`,bottom:`translateY(${t})`}[e]},Le=(e,t)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":t}),"&-leave":Object.assign(Object.assign({},t),{"&-active":e})}),Te=(e,t)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${t}`}}},Le({opacity:e},{opacity:1})),At=(e,t)=>[Te(.7,t),Le({transform:Bt(e)},{transform:"none"})],Lt=e=>{const{componentCls:t,motionDurationSlow:n}=e;return{[t]:{[`${t}-mask-motion`]:Te(0,n),[`${t}-panel-motion`]:["left","right","top","bottom"].reduce((a,s)=>Object.assign(Object.assign({},a),{[`&-${s}`]:At(s,n)}),{})}}},Tt=e=>{const{borderRadiusSM:t,componentCls:n,zIndexPopup:a,colorBgMask:s,colorBgElevated:l,motionDurationSlow:c,motionDurationMid:r,paddingXS:i,padding:u,paddingLG:f,fontSizeLG:g,lineHeightLG:b,lineWidth:m,lineType:v,colorSplit:d,marginXS:O,colorIcon:N,colorIconHover:E,colorBgTextHover:y,colorBgTextActive:x,colorText:p,fontWeightStrong:S,footerPaddingBlock:k,footerPaddingInline:j,calc:R}=e,I=`${n}-content-wrapper`;return{[n]:{position:"fixed",inset:0,zIndex:a,pointerEvents:"none",color:p,"&-pure":{position:"relative",background:l,display:"flex",flexDirection:"column",[`&${n}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${n}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${n}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${n}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${n}-mask`]:{position:"absolute",inset:0,zIndex:a,background:s,pointerEvents:"auto"},[I]:{position:"absolute",zIndex:a,maxWidth:"100vw",transition:`all ${c}`,"&-hidden":{display:"none"}},[`&-left > ${I}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${I}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${I}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${I}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${n}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:l,pointerEvents:"auto"},[`${n}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${K(u)} ${K(f)}`,fontSize:g,lineHeight:b,borderBottom:`${K(m)} ${v} ${d}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${n}-extra`]:{flex:"none"},[`${n}-close`]:Object.assign({display:"inline-flex",width:R(g).add(i).equal(),height:R(g).add(i).equal(),borderRadius:t,justifyContent:"center",alignItems:"center",marginInlineEnd:O,color:N,fontWeight:S,fontSize:g,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${r}`,textRendering:"auto","&:hover":{color:E,backgroundColor:y,textDecoration:"none"},"&:active":{backgroundColor:x}},Je(e)),[`${n}-title`]:{flex:1,margin:0,fontWeight:e.fontWeightStrong,fontSize:g,lineHeight:b},[`${n}-body`]:{flex:1,minWidth:0,minHeight:0,padding:f,overflow:"auto",[`${n}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},[`${n}-footer`]:{flexShrink:0,padding:`${K(k)} ${K(j)}`,borderTop:`${K(m)} ${v} ${d}`},"&-rtl":{direction:"rtl"}}}},_t=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding}),_e=ze("Drawer",e=>{const t=He(e,{});return[Tt(t),Lt(t)]},_t);var qe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]]);return n};const qt={distance:180},Ft=e=>{const{rootClassName:t,width:n,height:a,size:s="default",mask:l=!0,push:c=qt,open:r,afterOpenChange:i,onClose:u,prefixCls:f,getContainer:g,style:b,className:m,visible:v,afterVisibleChange:d,maskStyle:O,drawerStyle:N,contentWrapperStyle:E}=e,y=qe(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:x,getPrefixCls:p,direction:S,drawer:k}=o.useContext(A),j=p("drawer",f),[R,I,z]=_e(j),G=g===void 0&&x?()=>x(document.body):g,_=h({"no-mask":!l,[`${j}-rtl`]:S==="rtl"},t,I,z),L=o.useMemo(()=>n??(s==="large"?736:378),[n,s]),q=o.useMemo(()=>a??(s==="large"?736:378),[a,s]),ae={motionName:Ne(j,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},oe=F=>({motionName:Ne(j,`panel-motion-${F}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),X=lt(),[se,le]=nt("Drawer",y.zIndex),{classNames:$={},styles:H={}}=y,{classNames:M={},styles:B={}}=k||{};return R(o.createElement(et,{form:!0,space:!0},o.createElement(at.Provider,{value:le},o.createElement(Ht,Object.assign({prefixCls:j,onClose:u,maskMotion:ae,motion:oe},y,{classNames:{mask:h($.mask,M.mask),content:h($.content,M.content),wrapper:h($.wrapper,M.wrapper)},styles:{mask:Object.assign(Object.assign(Object.assign({},H.mask),O),B.mask),content:Object.assign(Object.assign(Object.assign({},H.content),N),B.content),wrapper:Object.assign(Object.assign(Object.assign({},H.wrapper),E),B.wrapper)},open:r??v,mask:l,push:c,width:L,height:q,style:Object.assign(Object.assign({},k==null?void 0:k.style),b),className:h(k==null?void 0:k.className,m),rootClassName:_,getContainer:G,afterOpenChange:i??d,panelRef:X,zIndex:se}),o.createElement(Ae,Object.assign({prefixCls:j},y,{onClose:u}))))))},Vt=e=>{const{prefixCls:t,style:n,className:a,placement:s="right"}=e,l=qe(e,["prefixCls","style","className","placement"]),{getPrefixCls:c}=o.useContext(A),r=c("drawer",t),[i,u,f]=_e(r),g=h(r,`${r}-pure`,`${r}-${s}`,u,f,a);return i(o.createElement("div",{className:g,style:n},o.createElement(Ae,Object.assign({prefixCls:r},l))))};Ft._InternalPanelDoNotUseOrYouWillBeFired=Vt;function Yt(e){return Array.isArray(e)?e.slice().reverse():[]}export{Ft as D,ne as S,Ee as p,Yt as r,it as u};