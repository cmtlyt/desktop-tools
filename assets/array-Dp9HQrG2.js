import{r as o,aa as Ue,R as T,c as b,E as K,j as A,b as Q,g as Ye,e as Ze,H as Je,z as Qe,_ as xe,I as ke,f as D,d as Oe,A as Ne,M as et}from"./index-BD1Ju0R1.js";import{B as tt,c as nt,o as we,P as at,C as ot,e as Ee}from"./PurePanel-BE8a1k1t.js";import{e as st,p as ie,a as lt,I as rt,K as he,f as it,z as ct}from"./render-CW5T92mo.js";import{u as dt}from"./context-CM01rj_v.js";import{g as He,m as Be}from"./genStyleUtils-ClZHSRCW.js";function be(e){return!!(e!=null&&e.then)}const en=e=>{const{type:t,children:n,prefixCls:a,buttonProps:s,close:l,autoFocus:c,emitEvent:r,isSilent:i,quitOnNullishReturnValue:u,actionFn:f}=e,m=o.useRef(!1),p=o.useRef(null),[g,h]=Ue(!1),d=function(){l==null||l.apply(void 0,arguments)};o.useEffect(()=>{let C=null;return c&&(C=setTimeout(()=>{var v;(v=p.current)===null||v===void 0||v.focus()})),()=>{C&&clearTimeout(C)}},[]);const k=C=>{be(C)&&(h(!0),C.then(function(){h(!1,!0),d.apply(void 0,arguments),m.current=!1},v=>{if(h(!1,!0),m.current=!1,!(i!=null&&i()))return Promise.reject(v)}))},E=C=>{if(m.current)return;if(m.current=!0,!f){d();return}let v;if(r){if(v=f(C),u&&!be(v)){m.current=!1,d(C);return}}else if(f.length)v=f(l),m.current=!1;else if(v=f(),!be(v)){d();return}k(v)};return o.createElement(tt,Object.assign({},nt(t),{onClick:E,loading:g,prefixCls:a},s,{ref:p}),n)};function je(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function Ie(e){const{closable:t,closeIcon:n}=e||{};return T.useMemo(()=>{if(!t&&(t===!1||n===!1||n===null))return!1;if(t===void 0&&n===void 0)return null;let a={closeIcon:typeof n!="boolean"&&n!==null?n:void 0};return t&&typeof t=="object"&&(a=Object.assign(Object.assign({},a),t)),a},[t,n])}function Pe(){const e={};for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.forEach(s=>{s&&Object.keys(s).forEach(l=>{s[l]!==void 0&&(e[l]=s[l])})}),e}const ut={};function mt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ut;const a=Ie(e),s=Ie(t),l=T.useMemo(()=>Object.assign({closeIcon:T.createElement(st,null)},n),[n]),c=T.useMemo(()=>a===!1?!1:a?Pe(l,s,a):s===!1?!1:s?Pe(l,s):l.closable?l:!1,[a,s,l]);return T.useMemo(()=>{if(c===!1)return[!1,null];const{closeIconRender:r}=l,{closeIcon:i}=c;let u=i;if(u!=null){r&&(u=r(i));const f=ie(c,!0);Object.keys(f).length&&(u=T.isValidElement(u)?T.cloneElement(u,f):T.createElement("span",Object.assign({},f),u))}return[!0,u]},[c,l])}const ce=e=>{const{prefixCls:t,className:n,style:a,size:s,shape:l}=e,c=b({[`${t}-lg`]:s==="large",[`${t}-sm`]:s==="small"}),r=b({[`${t}-circle`]:l==="circle",[`${t}-square`]:l==="square",[`${t}-round`]:l==="round"}),i=o.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return o.createElement("span",{className:b(t,c,r,n),style:Object.assign(Object.assign({},i),a)})},gt=new lt("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),de=e=>({height:e,lineHeight:K(e)}),ee=e=>Object.assign({width:e},de(e)),ft=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:gt,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),pe=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},de(e)),vt=e=>{const{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:a,controlHeightLG:s,controlHeightSM:l}=e;return{[t]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},ee(a)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},ee(s)),[`${t}${t}-sm`]:Object.assign({},ee(l))}},ht=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:a,controlHeightLG:s,controlHeightSM:l,gradientFromColor:c,calc:r}=e;return{[a]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:n},pe(t,r)),[`${a}-lg`]:Object.assign({},pe(s,r)),[`${a}-sm`]:Object.assign({},pe(l,r))}},Re=e=>Object.assign({width:e},de(e)),bt=e=>{const{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:a,borderRadiusSM:s,calc:l}=e;return{[t]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:a,borderRadius:s},Re(l(n).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},Re(n)),{maxWidth:l(n).mul(4).equal(),maxHeight:l(n).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},Ce=(e,t,n)=>{const{skeletonButtonCls:a}=e;return{[`${n}${a}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${a}-round`]:{borderRadius:t}}},ye=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},de(e)),pt=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:a,controlHeightLG:s,controlHeightSM:l,gradientFromColor:c,calc:r}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:t,width:r(a).mul(2).equal(),minWidth:r(a).mul(2).equal()},ye(a,r))},Ce(e,a,n)),{[`${n}-lg`]:Object.assign({},ye(s,r))}),Ce(e,s,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},ye(l,r))}),Ce(e,l,`${n}-sm`))},Ct=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:a,skeletonParagraphCls:s,skeletonButtonCls:l,skeletonInputCls:c,skeletonImageCls:r,controlHeight:i,controlHeightLG:u,controlHeightSM:f,gradientFromColor:m,padding:p,marginSM:g,borderRadius:h,titleHeight:d,blockRadius:k,paragraphLiHeight:E,controlHeightXS:C,paragraphMarginTop:v}=e;return{[t]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:p,verticalAlign:"top",[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:m},ee(i)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},ee(u)),[`${n}-sm`]:Object.assign({},ee(f))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[a]:{width:"100%",height:d,background:m,borderRadius:k,[`+ ${s}`]:{marginBlockStart:f}},[s]:{padding:0,"> li":{width:"100%",height:E,listStyle:"none",background:m,borderRadius:k,"+ li":{marginBlockStart:C}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${a}, ${s} > li`]:{borderRadius:h}}},[`${t}-with-avatar ${t}-content`]:{[a]:{marginBlockStart:g,[`+ ${s}`]:{marginBlockStart:v}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},pt(e)),vt(e)),ht(e)),bt(e)),[`${t}${t}-block`]:{width:"100%",[l]:{width:"100%"},[c]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${a},
        ${s} > li,
        ${n},
        ${l},
        ${c},
        ${r}
      `]:Object.assign({},ft(e))}}},yt=e=>{const{colorFillContent:t,colorFill:n}=e,a=t,s=n;return{color:a,colorGradientEnd:s,gradientFromColor:a,gradientToColor:s,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},te=He("Skeleton",e=>{const{componentCls:t,calc:n}=e,a=Be(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:n(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[Ct(a)]},yt,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),$t=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,shape:l="circle",size:c="default"}=e,{getPrefixCls:r}=o.useContext(A),i=r("skeleton",t),[u,f,m]=te(i),p=we(e,["prefixCls","className"]),g=b(i,`${i}-element`,{[`${i}-active`]:s},n,a,f,m);return u(o.createElement("div",{className:g},o.createElement(ce,Object.assign({prefixCls:`${i}-avatar`,shape:l,size:c},p))))},xt=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,block:l=!1,size:c="default"}=e,{getPrefixCls:r}=o.useContext(A),i=r("skeleton",t),[u,f,m]=te(i),p=we(e,["prefixCls"]),g=b(i,`${i}-element`,{[`${i}-active`]:s,[`${i}-block`]:l},n,a,f,m);return u(o.createElement("div",{className:g},o.createElement(ce,Object.assign({prefixCls:`${i}-button`,size:c},p))))},wt="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",St=e=>{const{prefixCls:t,className:n,rootClassName:a,style:s,active:l}=e,{getPrefixCls:c}=o.useContext(A),r=c("skeleton",t),[i,u,f]=te(r),m=b(r,`${r}-element`,{[`${r}-active`]:l},n,a,u,f);return i(o.createElement("div",{className:m},o.createElement("div",{className:b(`${r}-image`,n),style:s},o.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${r}-image-svg`},o.createElement("title",null,"Image placeholder"),o.createElement("path",{d:wt,className:`${r}-image-path`})))))},kt=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,block:l,size:c="default"}=e,{getPrefixCls:r}=o.useContext(A),i=r("skeleton",t),[u,f,m]=te(i),p=we(e,["prefixCls"]),g=b(i,`${i}-element`,{[`${i}-active`]:s,[`${i}-block`]:l},n,a,f,m);return u(o.createElement("div",{className:g},o.createElement(ce,Object.assign({prefixCls:`${i}-input`,size:c},p))))};var Ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},Nt=function(t,n){return o.createElement(rt,Q({},t,{ref:n,icon:Ot}))},Et=o.forwardRef(Nt);const jt=e=>{const{prefixCls:t,className:n,rootClassName:a,style:s,active:l,children:c}=e,{getPrefixCls:r}=o.useContext(A),i=r("skeleton",t),[u,f,m]=te(i),p=b(i,`${i}-element`,{[`${i}-active`]:l},f,n,a,m),g=c??o.createElement(Et,null);return u(o.createElement("div",{className:p},o.createElement("div",{className:b(`${i}-image`,n),style:s},g)))},It=(e,t)=>{const{width:n,rows:a=2}=t;if(Array.isArray(n))return n[e];if(a-1===e)return n},Pt=e=>{const{prefixCls:t,className:n,style:a,rows:s}=e,l=Ye(Array(s)).map((c,r)=>o.createElement("li",{key:r,style:{width:It(r,e)}}));return o.createElement("ul",{className:b(t,n),style:a},l)},Rt=e=>{let{prefixCls:t,className:n,width:a,style:s}=e;return o.createElement("h3",{className:b(t,n),style:Object.assign({width:a},s)})};function $e(e){return e&&typeof e=="object"?e:{}}function Mt(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Dt(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function zt(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const ne=e=>{const{prefixCls:t,loading:n,className:a,rootClassName:s,style:l,children:c,avatar:r=!1,title:i=!0,paragraph:u=!0,active:f,round:m}=e,{getPrefixCls:p,direction:g,skeleton:h}=o.useContext(A),d=p("skeleton",t),[k,E,C]=te(d);if(n||!("loading"in e)){const v=!!r,w=!!i,y=!!u;let O;if(v){const R=Object.assign(Object.assign({prefixCls:`${d}-avatar`},Mt(w,y)),$e(r));O=o.createElement("div",{className:`${d}-header`},o.createElement(ce,Object.assign({},R)))}let N;if(w||y){let R;if(w){const z=Object.assign(Object.assign({prefixCls:`${d}-title`},Dt(v,y)),$e(i));R=o.createElement(Rt,Object.assign({},z))}let I;if(y){const z=Object.assign(Object.assign({prefixCls:`${d}-paragraph`},zt(v,w)),$e(u));I=o.createElement(Pt,Object.assign({},z))}N=o.createElement("div",{className:`${d}-content`},R,I)}const j=b(d,{[`${d}-with-avatar`]:v,[`${d}-active`]:f,[`${d}-rtl`]:g==="rtl",[`${d}-round`]:m},h==null?void 0:h.className,a,s,E,C);return k(o.createElement("div",{className:j,style:Object.assign(Object.assign({},h==null?void 0:h.style),l)},O,N))}return c??null};ne.Button=xt;ne.Avatar=$t;ne.Input=kt;ne.Image=St;ne.Node=jt;var Me=o.createContext(null),Ae=o.createContext({}),Ht=["prefixCls","className","containerRef"],Bt=function(t){var n=t.prefixCls,a=t.className,s=t.containerRef,l=Ze(t,Ht),c=o.useContext(Ae),r=c.panel,i=Je(r,s);return o.createElement("div",Q({className:b("".concat(n,"-content"),a),role:"dialog",ref:i},ie(t,{aria:!0}),{"aria-modal":"true"},l))};function De(e){return typeof e=="string"&&String(Number(e))===e?(Qe(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var ze={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function At(e,t){var n,a,s,l=e.prefixCls,c=e.open,r=e.placement,i=e.inline,u=e.push,f=e.forceRender,m=e.autoFocus,p=e.keyboard,g=e.classNames,h=e.rootClassName,d=e.rootStyle,k=e.zIndex,E=e.className,C=e.id,v=e.style,w=e.motion,y=e.width,O=e.height,N=e.children,j=e.mask,R=e.maskClosable,I=e.maskMotion,z=e.maskClassName,G=e.maskStyle,_=e.afterOpenChange,L=e.onClose,q=e.onMouseEnter,ae=e.onMouseOver,oe=e.onMouseLeave,X=e.onClick,se=e.onKeyDown,le=e.onKeyUp,x=e.styles,H=e.drawerRender,M=o.useRef(),B=o.useRef(),F=o.useRef();o.useImperativeHandle(t,function(){return M.current});var ue=function(P){var Y=P.keyCode,Z=P.shiftKey;switch(Y){case he.TAB:{if(Y===he.TAB){if(!Z&&document.activeElement===F.current){var J;(J=B.current)===null||J===void 0||J.focus({preventScroll:!0})}else if(Z&&document.activeElement===B.current){var ve;(ve=F.current)===null||ve===void 0||ve.focus({preventScroll:!0})}}break}case he.ESC:{L&&p&&(P.stopPropagation(),L(P));break}}};o.useEffect(function(){if(c&&m){var $;($=M.current)===null||$===void 0||$.focus({preventScroll:!0})}},[c]);var me=o.useState(!1),ge=xe(me,2),re=ge[0],U=ge[1],S=o.useContext(Me),fe;typeof u=="boolean"?fe=u?{}:{distance:0}:fe=u||{};var V=(n=(a=(s=fe)===null||s===void 0?void 0:s.distance)!==null&&a!==void 0?a:S==null?void 0:S.pushDistance)!==null&&n!==void 0?n:180,Ve=o.useMemo(function(){return{pushDistance:V,push:function(){U(!0)},pull:function(){U(!1)}}},[V]);o.useEffect(function(){if(c){var $;S==null||($=S.push)===null||$===void 0||$.call(S)}else{var P;S==null||(P=S.pull)===null||P===void 0||P.call(S)}},[c]),o.useEffect(function(){return function(){var $;S==null||($=S.pull)===null||$===void 0||$.call(S)}},[]);var We=j&&o.createElement(ke,Q({key:"mask"},I,{visible:c}),function($,P){var Y=$.className,Z=$.style;return o.createElement("div",{className:b("".concat(l,"-mask"),Y,g==null?void 0:g.mask,z),style:D(D(D({},Z),G),x==null?void 0:x.mask),onClick:R&&c?L:void 0,ref:P})}),Ke=typeof w=="function"?w(r):w,W={};if(re&&V)switch(r){case"top":W.transform="translateY(".concat(V,"px)");break;case"bottom":W.transform="translateY(".concat(-V,"px)");break;case"left":W.transform="translateX(".concat(V,"px)");break;default:W.transform="translateX(".concat(-V,"px)");break}r==="left"||r==="right"?W.width=De(y):W.height=De(O);var Ge={onMouseEnter:q,onMouseOver:ae,onMouseLeave:oe,onClick:X,onKeyDown:se,onKeyUp:le},Xe=o.createElement(ke,Q({key:"panel"},Ke,{visible:c,forceRender:f,onVisibleChanged:function(P){_==null||_(P)},removeOnLeave:!1,leavedClassName:"".concat(l,"-content-wrapper-hidden")}),function($,P){var Y=$.className,Z=$.style,J=o.createElement(Bt,Q({id:C,containerRef:P,prefixCls:l,className:b(E,g==null?void 0:g.content),style:D(D({},v),x==null?void 0:x.content)},ie(e,{aria:!0}),Ge),N);return o.createElement("div",Q({className:b("".concat(l,"-content-wrapper"),g==null?void 0:g.wrapper,Y),style:D(D(D({},W),Z),x==null?void 0:x.wrapper)},ie(e,{data:!0})),H?H(J):J)}),Se=D({},d);return k&&(Se.zIndex=k),o.createElement(Me.Provider,{value:Ve},o.createElement("div",{className:b(l,"".concat(l,"-").concat(r),h,Oe(Oe({},"".concat(l,"-open"),c),"".concat(l,"-inline"),i)),style:Se,tabIndex:-1,ref:M,onKeyDown:ue},We,o.createElement("div",{tabIndex:0,ref:B,style:ze,"aria-hidden":"true","data-sentinel":"start"}),Xe,o.createElement("div",{tabIndex:0,ref:F,style:ze,"aria-hidden":"true","data-sentinel":"end"})))}var Lt=o.forwardRef(At),Tt=function(t){var n=t.open,a=n===void 0?!1:n,s=t.prefixCls,l=s===void 0?"rc-drawer":s,c=t.placement,r=c===void 0?"right":c,i=t.autoFocus,u=i===void 0?!0:i,f=t.keyboard,m=f===void 0?!0:f,p=t.width,g=p===void 0?378:p,h=t.mask,d=h===void 0?!0:h,k=t.maskClosable,E=k===void 0?!0:k,C=t.getContainer,v=t.forceRender,w=t.afterOpenChange,y=t.destroyOnClose,O=t.onMouseEnter,N=t.onMouseOver,j=t.onMouseLeave,R=t.onClick,I=t.onKeyDown,z=t.onKeyUp,G=t.panelRef,_=o.useState(!1),L=xe(_,2),q=L[0],ae=L[1],oe=o.useState(!1),X=xe(oe,2),se=X[0],le=X[1];Ne(function(){le(!0)},[]);var x=se?a:!1,H=o.useRef(),M=o.useRef();Ne(function(){x&&(M.current=document.activeElement)},[x]);var B=function(re){var U;if(ae(re),w==null||w(re),!re&&M.current&&!((U=H.current)!==null&&U!==void 0&&U.contains(M.current))){var S;(S=M.current)===null||S===void 0||S.focus({preventScroll:!0})}},F=o.useMemo(function(){return{panel:G}},[G]);if(!v&&!q&&!x&&y)return null;var ue={onMouseEnter:O,onMouseOver:N,onMouseLeave:j,onClick:R,onKeyDown:I,onKeyUp:z},me=D(D({},t),{},{open:x,prefixCls:l,placement:r,autoFocus:u,keyboard:m,width:g,mask:d,maskClosable:E,inline:C===!1,afterOpenChange:B,ref:H},ue);return o.createElement(Ae.Provider,{value:F},o.createElement(at,{open:x||v||q,autoDestroy:!1,getContainer:C,autoLock:d&&(x||q)},o.createElement(Lt,me)))};const Le=e=>{var t,n;const{prefixCls:a,title:s,footer:l,extra:c,loading:r,onClose:i,headerStyle:u,bodyStyle:f,footerStyle:m,children:p,classNames:g,styles:h}=e,{drawer:d}=o.useContext(A),k=o.useCallback(y=>o.createElement("button",{type:"button",onClick:i,"aria-label":"Close",className:`${a}-close`},y),[i]),[E,C]=mt(je(e),je(d),{closable:!0,closeIconRender:k}),v=o.useMemo(()=>{var y,O;return!s&&!E?null:o.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(y=d==null?void 0:d.styles)===null||y===void 0?void 0:y.header),u),h==null?void 0:h.header),className:b(`${a}-header`,{[`${a}-header-close-only`]:E&&!s&&!c},(O=d==null?void 0:d.classNames)===null||O===void 0?void 0:O.header,g==null?void 0:g.header)},o.createElement("div",{className:`${a}-header-title`},C,s&&o.createElement("div",{className:`${a}-title`},s)),c&&o.createElement("div",{className:`${a}-extra`},c))},[E,C,c,u,a,s]),w=o.useMemo(()=>{var y,O;if(!l)return null;const N=`${a}-footer`;return o.createElement("div",{className:b(N,(y=d==null?void 0:d.classNames)===null||y===void 0?void 0:y.footer,g==null?void 0:g.footer),style:Object.assign(Object.assign(Object.assign({},(O=d==null?void 0:d.styles)===null||O===void 0?void 0:O.footer),m),h==null?void 0:h.footer)},l)},[l,m,a]);return o.createElement(o.Fragment,null,v,o.createElement("div",{className:b(`${a}-body`,g==null?void 0:g.body,(t=d==null?void 0:d.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(n=d==null?void 0:d.styles)===null||n===void 0?void 0:n.body),f),h==null?void 0:h.body)},r?o.createElement(ne,{active:!0,title:!1,paragraph:{rows:5},className:`${a}-body-skeleton`}):p),w)},_t=e=>{const t="100%";return{left:`translateX(-${t})`,right:`translateX(${t})`,top:`translateY(-${t})`,bottom:`translateY(${t})`}[e]},Te=(e,t)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":t}),"&-leave":Object.assign(Object.assign({},t),{"&-active":e})}),_e=(e,t)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${t}`}}},Te({opacity:e},{opacity:1})),qt=(e,t)=>[_e(.7,t),Te({transform:_t(e)},{transform:"none"})],Ft=e=>{const{componentCls:t,motionDurationSlow:n}=e;return{[t]:{[`${t}-mask-motion`]:_e(0,n),[`${t}-panel-motion`]:["left","right","top","bottom"].reduce((a,s)=>Object.assign(Object.assign({},a),{[`&-${s}`]:qt(s,n)}),{})}}},Vt=e=>{const{borderRadiusSM:t,componentCls:n,zIndexPopup:a,colorBgMask:s,colorBgElevated:l,motionDurationSlow:c,motionDurationMid:r,paddingXS:i,padding:u,paddingLG:f,fontSizeLG:m,lineHeightLG:p,lineWidth:g,lineType:h,colorSplit:d,marginXS:k,colorIcon:E,colorIconHover:C,colorBgTextHover:v,colorBgTextActive:w,colorText:y,fontWeightStrong:O,footerPaddingBlock:N,footerPaddingInline:j,calc:R}=e,I=`${n}-content-wrapper`;return{[n]:{position:"fixed",inset:0,zIndex:a,pointerEvents:"none",color:y,"&-pure":{position:"relative",background:l,display:"flex",flexDirection:"column",[`&${n}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${n}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${n}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${n}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${n}-mask`]:{position:"absolute",inset:0,zIndex:a,background:s,pointerEvents:"auto"},[I]:{position:"absolute",zIndex:a,maxWidth:"100vw",transition:`all ${c}`,"&-hidden":{display:"none"}},[`&-left > ${I}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${I}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${I}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${I}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${n}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:l,pointerEvents:"auto"},[`${n}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${K(u)} ${K(f)}`,fontSize:m,lineHeight:p,borderBottom:`${K(g)} ${h} ${d}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${n}-extra`]:{flex:"none"},[`${n}-close`]:Object.assign({display:"inline-flex",width:R(m).add(i).equal(),height:R(m).add(i).equal(),borderRadius:t,justifyContent:"center",alignItems:"center",marginInlineEnd:k,color:E,fontWeight:O,fontSize:m,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${r}`,textRendering:"auto","&:hover":{color:C,backgroundColor:v,textDecoration:"none"},"&:active":{backgroundColor:w}},et(e)),[`${n}-title`]:{flex:1,margin:0,fontWeight:e.fontWeightStrong,fontSize:m,lineHeight:p},[`${n}-body`]:{flex:1,minWidth:0,minHeight:0,padding:f,overflow:"auto",[`${n}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},[`${n}-footer`]:{flexShrink:0,padding:`${K(N)} ${K(j)}`,borderTop:`${K(g)} ${h} ${d}`},"&-rtl":{direction:"rtl"}}}},Wt=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding}),qe=He("Drawer",e=>{const t=Be(e,{});return[Vt(t),Ft(t)]},Wt);var Fe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]]);return n};const Kt={distance:180},Gt=e=>{const{rootClassName:t,width:n,height:a,size:s="default",mask:l=!0,push:c=Kt,open:r,afterOpenChange:i,onClose:u,prefixCls:f,getContainer:m,style:p,className:g,visible:h,afterVisibleChange:d,maskStyle:k,drawerStyle:E,contentWrapperStyle:C}=e,v=Fe(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:w,getPrefixCls:y,direction:O,drawer:N}=o.useContext(A),j=y("drawer",f),[R,I,z]=qe(j),G=m===void 0&&w?()=>w(document.body):m,_=b({"no-mask":!l,[`${j}-rtl`]:O==="rtl"},t,I,z),L=o.useMemo(()=>n??(s==="large"?736:378),[n,s]),q=o.useMemo(()=>a??(s==="large"?736:378),[a,s]),ae={motionName:Ee(j,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},oe=F=>({motionName:Ee(j,`panel-motion-${F}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),X=dt(),[se,le]=it("Drawer",v.zIndex),{classNames:x={},styles:H={}}=v,{classNames:M={},styles:B={}}=N||{};return R(o.createElement(ot,{form:!0,space:!0},o.createElement(ct.Provider,{value:le},o.createElement(Tt,Object.assign({prefixCls:j,onClose:u,maskMotion:ae,motion:oe},v,{classNames:{mask:b(x.mask,M.mask),content:b(x.content,M.content),wrapper:b(x.wrapper,M.wrapper)},styles:{mask:Object.assign(Object.assign(Object.assign({},H.mask),k),B.mask),content:Object.assign(Object.assign(Object.assign({},H.content),E),B.content),wrapper:Object.assign(Object.assign(Object.assign({},H.wrapper),C),B.wrapper)},open:r??h,mask:l,push:c,width:L,height:q,style:Object.assign(Object.assign({},N==null?void 0:N.style),p),className:b(N==null?void 0:N.className,g),rootClassName:_,getContainer:G,afterOpenChange:i??d,panelRef:X,zIndex:se}),o.createElement(Le,Object.assign({prefixCls:j},v,{onClose:u}))))))},Xt=e=>{const{prefixCls:t,style:n,className:a,placement:s="right"}=e,l=Fe(e,["prefixCls","style","className","placement"]),{getPrefixCls:c}=o.useContext(A),r=c("drawer",t),[i,u,f]=qe(r),m=b(r,`${r}-pure`,`${r}-${s}`,u,f,a);return i(o.createElement("div",{className:m,style:n},o.createElement(Le,Object.assign({prefixCls:r},l))))};Gt._InternalPanelDoNotUseOrYouWillBeFired=Xt;function tn(e){return e.slice().reverse()}export{en as A,Gt as D,ne as S,je as p,tn as r,mt as u};