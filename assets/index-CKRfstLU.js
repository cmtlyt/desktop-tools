import{r,_ as ae,a as Ue,b as xe,c as B,d as Me,R as L,C as vt,e as Ke,f as pe,g as se,h as ht,i as Ve,j as $e,k as yt,u as xt,l as Ct,m as St,n as bt,o as $t,p as Et,q as Nt,s as wt,t as Ye,w as Ot,v as It,x as Pe,y as k,O as Mt}from"./index-WxUN2MyK.js";import{d as V,F as kt,a as ke,A as Pt,l as ge,b as ue,S as je,u as Ee,g as Qe,c as Ce,e as jt,f as At}from"./index-C1cWDTV3.js";import{G as Je,L as Rt}from"./index-D_YVm9DO.js";import{S as Lt}from"./index-D9GgxVnM.js";import{u as Tt}from"./use-navigate-DIaJPf-V.js";import{T as zt}from"./index-03Zwd3qR.js";import{A as Dt}from"./index-A-CkJeve.js";import{r as _t}from"./render-CiHJTBvv.js";import{u as Ze,R as Ft,a as Wt,b as Ht,c as Bt}from"./LoadingOutlined-D83zWLCg.js";import{R as Gt}from"./InfoCircleFilled-DLPX5sZv.js";import{K as Xt,g as et,m as tt,a as Se,C as qt,c as Ut}from"./asyncToGenerator-DDsaJ0Ub.js";import{p as Kt,R as Vt}from"./pickAttrs-CauX5D37.js";import{W as Yt}from"./context-ByjqG_yS.js";import"./index-BcJSY77Q.js";var nt=r.forwardRef(function(e,t){var o=e.prefixCls,n=e.style,a=e.className,s=e.duration,i=s===void 0?4.5:s,u=e.showProgress,c=e.pauseOnHover,l=c===void 0?!0:c,y=e.eventKey,g=e.content,f=e.closable,m=e.closeIcon,$=m===void 0?"x":m,v=e.props,C=e.onClick,P=e.onNoticeClose,S=e.times,d=e.hovering,E=r.useState(!1),b=ae(E,2),x=b[0],M=b[1],h=r.useState(0),p=ae(h,2),w=p[0],O=p[1],R=r.useState(0),z=ae(R,2),T=z[0],U=z[1],N=d||x,_=i>0&&u,Y=function(){P(y)},oe=function(I){(I.key==="Enter"||I.code==="Enter"||I.keyCode===Xt.ENTER)&&Y()};r.useEffect(function(){if(!N&&i>0){var H=Date.now()-T,I=setTimeout(function(){Y()},i*1e3-T);return function(){l&&clearTimeout(I),U(Date.now()-H)}}},[i,N,S]),r.useEffect(function(){if(!N&&_&&(l||T===0)){var H=performance.now(),I,W=function ie(){cancelAnimationFrame(I),I=requestAnimationFrame(function(re){var Z=re+T-H,ne=Math.min(Z/(i*1e3),1);O(ne*100),ne<1&&ie()})};return W(),function(){l&&cancelAnimationFrame(I)}}},[i,T,N,_,S]);var J=r.useMemo(function(){return Ue(f)==="object"&&f!==null?f:f?{closeIcon:$}:{}},[f,$]),K=Kt(J,!0),q=100-(!w||w<0?0:w>100?100:w),F="".concat(o,"-notice");return r.createElement("div",xe({},v,{ref:t,className:B(F,a,Me({},"".concat(F,"-closable"),f)),style:n,onMouseEnter:function(I){var W;M(!0),v==null||(W=v.onMouseEnter)===null||W===void 0||W.call(v,I)},onMouseLeave:function(I){var W;M(!1),v==null||(W=v.onMouseLeave)===null||W===void 0||W.call(v,I)},onClick:C}),r.createElement("div",{className:"".concat(F,"-content")},g),f&&r.createElement("a",xe({tabIndex:0,className:"".concat(F,"-close"),onKeyDown:oe,"aria-label":"Close"},K,{onClick:function(I){I.preventDefault(),I.stopPropagation(),Y()}}),J.closeIcon),_&&r.createElement("progress",{className:"".concat(F,"-progress"),max:"100",value:q},q+"%"))}),ot=L.createContext({}),Qt=function(t){var o=t.children,n=t.classNames;return L.createElement(ot.Provider,{value:{classNames:n}},o)},Re=8,Le=3,Te=16,Jt=function(t){var o={offset:Re,threshold:Le,gap:Te};if(t&&Ue(t)==="object"){var n,a,s;o.offset=(n=t.offset)!==null&&n!==void 0?n:Re,o.threshold=(a=t.threshold)!==null&&a!==void 0?a:Le,o.gap=(s=t.gap)!==null&&s!==void 0?s:Te}return[!!t,o]},Zt=["className","style","classNames","styles"],en=function(t){var o=t.configList,n=t.placement,a=t.prefixCls,s=t.className,i=t.style,u=t.motion,c=t.onAllNoticeRemoved,l=t.onNoticeClose,y=t.stack,g=r.useContext(ot),f=g.classNames,m=r.useRef({}),$=r.useState(null),v=ae($,2),C=v[0],P=v[1],S=r.useState([]),d=ae(S,2),E=d[0],b=d[1],x=o.map(function(N){return{config:N,key:String(N.key)}}),M=Jt(y),h=ae(M,2),p=h[0],w=h[1],O=w.offset,R=w.threshold,z=w.gap,T=p&&(E.length>0||x.length<=R),U=typeof u=="function"?u(n):u;return r.useEffect(function(){p&&E.length>1&&b(function(N){return N.filter(function(_){return x.some(function(Y){var oe=Y.key;return _===oe})})})},[E,x,p]),r.useEffect(function(){var N;if(p&&m.current[(N=x[x.length-1])===null||N===void 0?void 0:N.key]){var _;P(m.current[(_=x[x.length-1])===null||_===void 0?void 0:_.key])}},[x,p]),L.createElement(vt,xe({key:n,className:B(a,"".concat(a,"-").concat(n),f==null?void 0:f.list,s,Me(Me({},"".concat(a,"-stack"),!!p),"".concat(a,"-stack-expanded"),T)),style:i,keys:x,motionAppear:!0},U,{onAllRemoved:function(){c(n)}}),function(N,_){var Y=N.config,oe=N.className,J=N.style,K=N.index,q=Y,F=q.key,H=q.times,I=String(F),W=Y,ie=W.className,re=W.style,Z=W.classNames,ne=W.styles,we=Ke(W,Zt),de=x.findIndex(function(ye){return ye.key===I}),j={};if(p){var A=x.length-1-(de>-1?de:K-1),D=n==="top"||n==="bottom"?"-50%":"0";if(A>0){var Q,ee,G;j.height=T?(Q=m.current[I])===null||Q===void 0?void 0:Q.offsetHeight:C==null?void 0:C.offsetHeight;for(var X=0,fe=0;fe<A;fe++){var me;X+=((me=m.current[x[x.length-1-fe].key])===null||me===void 0?void 0:me.offsetHeight)+z}var mt=(T?X:A*O)*(n.startsWith("top")?1:-1),pt=!T&&C!==null&&C!==void 0&&C.offsetWidth&&(ee=m.current[I])!==null&&ee!==void 0&&ee.offsetWidth?((C==null?void 0:C.offsetWidth)-O*2*(A<3?A:3))/((G=m.current[I])===null||G===void 0?void 0:G.offsetWidth):1;j.transform="translate3d(".concat(D,", ").concat(mt,"px, 0) scaleX(").concat(pt,")")}else j.transform="translate3d(".concat(D,", 0, 0)")}return L.createElement("div",{ref:_,className:B("".concat(a,"-notice-wrapper"),oe,Z==null?void 0:Z.wrapper),style:pe(pe(pe({},J),j),ne==null?void 0:ne.wrapper),onMouseEnter:function(){return b(function(ce){return ce.includes(I)?ce:[].concat(se(ce),[I])})},onMouseLeave:function(){return b(function(ce){return ce.filter(function(gt){return gt!==I})})}},L.createElement(nt,xe({},we,{ref:function(ce){de>-1?m.current[I]=ce:delete m.current[I]},prefixCls:a,classNames:Z,styles:ne,className:B(ie,f==null?void 0:f.notice),style:re,times:H,key:F,eventKey:F,onNoticeClose:l,hovering:p&&E.length>0})))})},tn=r.forwardRef(function(e,t){var o=e.prefixCls,n=o===void 0?"rc-notification":o,a=e.container,s=e.motion,i=e.maxCount,u=e.className,c=e.style,l=e.onAllRemoved,y=e.stack,g=e.renderNotifications,f=r.useState([]),m=ae(f,2),$=m[0],v=m[1],C=function(p){var w,O=$.find(function(R){return R.key===p});O==null||(w=O.onClose)===null||w===void 0||w.call(O),v(function(R){return R.filter(function(z){return z.key!==p})})};r.useImperativeHandle(t,function(){return{open:function(p){v(function(w){var O=se(w),R=O.findIndex(function(U){return U.key===p.key}),z=pe({},p);if(R>=0){var T;z.times=(((T=w[R])===null||T===void 0?void 0:T.times)||0)+1,O[R]=z}else z.times=0,O.push(z);return i>0&&O.length>i&&(O=O.slice(-i)),O})},close:function(p){C(p)},destroy:function(){v([])}}});var P=r.useState({}),S=ae(P,2),d=S[0],E=S[1];r.useEffect(function(){var h={};$.forEach(function(p){var w=p.placement,O=w===void 0?"topRight":w;O&&(h[O]=h[O]||[],h[O].push(p))}),Object.keys(d).forEach(function(p){h[p]=h[p]||[]}),E(h)},[$]);var b=function(p){E(function(w){var O=pe({},w),R=O[p]||[];return R.length||delete O[p],O})},x=r.useRef(!1);if(r.useEffect(function(){Object.keys(d).length>0?x.current=!0:x.current&&(l==null||l(),x.current=!1)},[d]),!a)return null;var M=Object.keys(d);return ht.createPortal(r.createElement(r.Fragment,null,M.map(function(h){var p=d[h],w=r.createElement(en,{key:h,configList:p,placement:h,prefixCls:n,className:u==null?void 0:u(h),style:c==null?void 0:c(h),motion:s,onNoticeClose:C,onAllNoticeRemoved:b,stack:y});return g?g(w,{prefixCls:n,key:h}):w})),a)}),nn=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],on=function(){return document.body},ze=0;function an(){for(var e={},t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return o.forEach(function(a){a&&Object.keys(a).forEach(function(s){var i=a[s];i!==void 0&&(e[s]=i)})}),e}function rn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,o=t===void 0?on:t,n=e.motion,a=e.prefixCls,s=e.maxCount,i=e.className,u=e.style,c=e.onAllRemoved,l=e.stack,y=e.renderNotifications,g=Ke(e,nn),f=r.useState(),m=ae(f,2),$=m[0],v=m[1],C=r.useRef(),P=r.createElement(tn,{container:$,ref:C,prefixCls:a,motion:n,maxCount:s,className:i,style:u,onAllRemoved:c,stack:l,renderNotifications:y}),S=r.useState([]),d=ae(S,2),E=d[0],b=d[1],x=r.useMemo(function(){return{open:function(h){var p=an(g,h);(p.key===null||p.key===void 0)&&(p.key="rc-notification-".concat(ze),ze+=1),b(function(w){return[].concat(se(w),[{type:"open",config:p}])})},close:function(h){b(function(p){return[].concat(se(p),[{type:"close",key:h}])})},destroy:function(){b(function(h){return[].concat(se(h),[{type:"destroy"}])})}}},[]);return r.useEffect(function(){v(o())}),r.useEffect(function(){C.current&&E.length&&(E.forEach(function(M){switch(M.type){case"open":C.current.open(M.config);break;case"close":C.current.close(M.key);break;case"destroy":C.current.destroy();break}}),b(function(M){return M.filter(function(h){return!E.includes(h)})}))},[E]),[x,P]}const sn=e=>{const{componentCls:t,iconCls:o,boxShadow:n,colorText:a,colorSuccess:s,colorError:i,colorWarning:u,colorInfo:c,fontSizeLG:l,motionEaseInOutCirc:y,motionDurationSlow:g,marginXS:f,paddingXS:m,borderRadiusLG:$,zIndexPopup:v,contentPadding:C,contentBg:P}=e,S=`${t}-notice`,d=new Se("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:m,transform:"translateY(0)",opacity:1}}),E=new Se("MessageMoveOut",{"0%":{maxHeight:e.height,padding:m,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),b={padding:m,textAlign:"center",[`${t}-custom-content`]:{display:"flex",alignItems:"center"},[`${t}-custom-content > ${o}`]:{marginInlineEnd:f,fontSize:l},[`${S}-content`]:{display:"inline-block",padding:C,background:P,borderRadius:$,boxShadow:n,pointerEvents:"all"},[`${t}-success > ${o}`]:{color:s},[`${t}-error > ${o}`]:{color:i},[`${t}-warning > ${o}`]:{color:u},[`${t}-info > ${o},
      ${t}-loading > ${o}`]:{color:c}};return[{[t]:Object.assign(Object.assign({},Ve(e)),{color:a,position:"fixed",top:f,width:"100%",pointerEvents:"none",zIndex:v,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:d,animationDuration:g,animationPlayState:"paused",animationTimingFunction:y},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:E,animationDuration:g,animationPlayState:"paused",animationTimingFunction:y},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${S}-wrapper`]:Object.assign({},b)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},b),{padding:0,textAlign:"start"})}]},cn=e=>({zIndexPopup:e.zIndexPopupBase+qt+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}),at=et("Message",e=>{const t=tt(e,{height:150});return[sn(t)]},cn);var ln=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const un={info:r.createElement(Gt,null),success:r.createElement(Ft,null),error:r.createElement(Wt,null),warning:r.createElement(Ht,null),loading:r.createElement(Bt,null)},rt=e=>{let{prefixCls:t,type:o,icon:n,children:a}=e;return r.createElement("div",{className:B(`${t}-custom-content`,`${t}-${o}`)},n||un[o],r.createElement("span",null,a))},dn=e=>{const{prefixCls:t,className:o,type:n,icon:a,content:s}=e,i=ln(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:u}=r.useContext($e),c=t||u("message"),l=Ze(c),[y,g,f]=at(c,l);return y(r.createElement(nt,Object.assign({},i,{prefixCls:c,className:B(o,g,`${c}-notice-pure-panel`,f,l),eventKey:"pure",duration:null,content:r.createElement(rt,{prefixCls:c,type:n,icon:a},s)})))};function fn(e,t){return{motionName:t??`${e}-move-up`}}function Ae(e){let t;const o=new Promise(a=>{t=e(()=>{a(!0)})}),n=()=>{t==null||t()};return n.then=(a,s)=>o.then(a,s),n.promise=o,n}var mn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const pn=8,gn=3,vn=e=>{let{children:t,prefixCls:o}=e;const n=Ze(o),[a,s,i]=at(o,n);return a(r.createElement(Qt,{classNames:{list:B(s,i,n)}},t))},hn=(e,t)=>{let{prefixCls:o,key:n}=t;return r.createElement(vn,{prefixCls:o,key:n},e)},yn=r.forwardRef((e,t)=>{const{top:o,prefixCls:n,getContainer:a,maxCount:s,duration:i=gn,rtl:u,transitionName:c,onAllRemoved:l}=e,{getPrefixCls:y,getPopupContainer:g,message:f,direction:m}=r.useContext($e),$=n||y("message"),v=()=>({left:"50%",transform:"translateX(-50%)",top:o??pn}),C=()=>B({[`${$}-rtl`]:u??m==="rtl"}),P=()=>fn($,c),S=r.createElement("span",{className:`${$}-close-x`},r.createElement(Vt,{className:`${$}-close-icon`})),[d,E]=rn({prefixCls:$,style:v,className:C,motion:P,closable:!1,closeIcon:S,duration:i,getContainer:()=>(a==null?void 0:a())||(g==null?void 0:g())||document.body,maxCount:s,onAllRemoved:l,renderNotifications:hn});return r.useImperativeHandle(t,()=>Object.assign(Object.assign({},d),{prefixCls:$,message:f})),E});let De=0;function st(e){const t=r.useRef(null);return yt(),[r.useMemo(()=>{const n=c=>{var l;(l=t.current)===null||l===void 0||l.close(c)},a=c=>{if(!t.current){const x=()=>{};return x.then=()=>{},x}const{open:l,prefixCls:y,message:g}=t.current,f=`${y}-notice`,{content:m,icon:$,type:v,key:C,className:P,style:S,onClose:d}=c,E=mn(c,["content","icon","type","key","className","style","onClose"]);let b=C;return b==null&&(De+=1,b=`antd-message-${De}`),Ae(x=>(l(Object.assign(Object.assign({},E),{key:b,content:r.createElement(rt,{prefixCls:y,type:v,icon:$},m),placement:"top",className:B(v&&`${f}-${v}`,P,g==null?void 0:g.className),style:Object.assign(Object.assign({},g==null?void 0:g.style),S),onClose:()=>{d==null||d(),x()}})),()=>{n(b)}))},i={open:a,destroy:c=>{var l;c!==void 0?n(c):(l=t.current)===null||l===void 0||l.destroy()}};return["info","success","warning","error","loading"].forEach(c=>{const l=(y,g,f)=>{let m;y&&typeof y=="object"&&"content"in y?m=y:m={content:y};let $,v;typeof g=="function"?v=g:($=g,v=f);const C=Object.assign(Object.assign({onClose:v,duration:$},m),{type:c});return a(C)};i[c]=l}),i},[]),r.createElement(yn,Object.assign({key:"message-holder"},e,{ref:t}))]}function xn(e){return st(e)}const Cn=L.createContext({});function Sn(e,t,o){var n=o||{},a=n.noTrailing,s=a===void 0?!1:a,i=n.noLeading,u=i===void 0?!1:i,c=n.debounceMode,l=c===void 0?void 0:c,y,g=!1,f=0;function m(){y&&clearTimeout(y)}function $(C){var P=C||{},S=P.upcomingOnly,d=S===void 0?!1:S;m(),g=!d}function v(){for(var C=arguments.length,P=new Array(C),S=0;S<C;S++)P[S]=arguments[S];var d=this,E=Date.now()-f;if(g)return;function b(){f=Date.now(),t.apply(d,P)}function x(){y=void 0}!u&&l&&!y&&b(),m(),l===void 0&&E>e?u?(f=Date.now(),s||(y=setTimeout(l?x:b,e))):b():s!==!0&&(y=setTimeout(l?x:b,l===void 0?e-E:e))}return v.cancel=$,v}function bn(e,t,o){var n={},a=n.atBegin,s=a===void 0?!1:a;return Sn(e,t,{debounceMode:s!==!1})}const be=100,it=be/5,ct=be/2-it/2,Oe=ct*2*Math.PI,_e=50,Fe=e=>{const{dotClassName:t,style:o,hasCircleCls:n}=e;return r.createElement("circle",{className:B(`${t}-circle`,{[`${t}-circle-bg`]:n}),r:ct,cx:_e,cy:_e,strokeWidth:it,style:o})},$n=e=>{let{percent:t,prefixCls:o}=e;const n=`${o}-dot`,a=`${n}-holder`,s=`${a}-hidden`,[i,u]=r.useState(!1);xt(()=>{t!==0&&u(!0)},[t!==0]);const c=Math.max(Math.min(t,100),0);if(!i)return null;const l={strokeDashoffset:`${Oe/4}`,strokeDasharray:`${Oe*c/100} ${Oe*(100-c)/100}`};return r.createElement("span",{className:B(a,`${n}-progress`,c<=0&&s)},r.createElement("svg",{viewBox:`0 0 ${be} ${be}`,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c},r.createElement(Fe,{dotClassName:n,hasCircleCls:!0}),r.createElement(Fe,{dotClassName:n,style:l})))};function En(e){const{prefixCls:t,percent:o=0}=e,n=`${t}-dot`,a=`${n}-holder`,s=`${a}-hidden`;return r.createElement(r.Fragment,null,r.createElement("span",{className:B(a,o>0&&s)},r.createElement("span",{className:B(n,`${t}-dot-spin`)},[1,2,3,4].map(i=>r.createElement("i",{className:`${t}-dot-item`,key:i})))),r.createElement($n,{prefixCls:t,percent:o}))}function Nn(e){const{prefixCls:t,indicator:o,percent:n}=e,a=`${t}-dot`;return o&&r.isValidElement(o)?Ut(o,{className:B(o.props.className,a),percent:n}):r.createElement(En,{prefixCls:t,percent:n})}const wn=new Se("antSpinMove",{to:{opacity:1}}),On=new Se("antRotate",{to:{transform:"rotate(405deg)"}}),In=e=>{const{componentCls:t,calc:o}=e;return{[t]:Object.assign(Object.assign({},Ve(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"relative",display:"inline-block",opacity:1},[`${t}-text`]:{fontSize:e.fontSize,paddingTop:o(o(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${e.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[t]:{[`${t}-dot-holder`]:{color:e.colorWhite},[`${t}-text`]:{color:e.colorTextLightSolid}}},"&-nested-loading":{position:"relative",[`> div > ${t}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${t}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:o(e.dotSize).mul(-1).div(2).equal()},[`${t}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${e.colorBgContainer}`},[`&${t}-show-text ${t}-dot`]:{marginTop:o(e.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${t}-dot`]:{margin:o(e.dotSizeSM).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:o(o(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:o(e.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${t}-dot`]:{margin:o(e.dotSizeLG).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:o(o(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:o(e.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${t}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${t}-dot-holder`]:{width:"1em",height:"1em",fontSize:e.dotSize,display:"inline-block",transition:`transform ${e.motionDurationSlow} ease, opacity ${e.motionDurationSlow} ease`,transformOrigin:"50% 50%",lineHeight:1,color:e.colorPrimary,"&-hidden":{transform:"scale(0.3)",opacity:0}},[`${t}-dot-progress`]:{position:"absolute",top:"50%",transform:"translate(-50%, -50%)",insetInlineStart:"50%"},[`${t}-dot`]:{position:"relative",display:"inline-block",fontSize:e.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:o(e.dotSize).sub(o(e.marginXXS).div(2)).div(2).equal(),height:o(e.dotSize).sub(o(e.marginXXS).div(2)).div(2).equal(),background:"currentColor",borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:wn,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:On,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"},"&-circle":{strokeLinecap:"round",transition:["stroke-dashoffset","stroke-dasharray","stroke","stroke-width","opacity"].map(n=>`${n} ${e.motionDurationSlow} ease`).join(","),fillOpacity:0,stroke:"currentcolor"},"&-circle-bg":{stroke:e.colorFillSecondary}},[`&-sm ${t}-dot`]:{"&, &-holder":{fontSize:e.dotSizeSM}},[`&-sm ${t}-dot-holder`]:{i:{width:o(o(e.dotSizeSM).sub(o(e.marginXXS).div(2))).div(2).equal(),height:o(o(e.dotSizeSM).sub(o(e.marginXXS).div(2))).div(2).equal()}},[`&-lg ${t}-dot`]:{"&, &-holder":{fontSize:e.dotSizeLG}},[`&-lg ${t}-dot-holder`]:{i:{width:o(o(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),height:o(o(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()}},[`&${t}-show-text ${t}-text`]:{display:"block"}})}},Mn=e=>{const{controlHeightLG:t,controlHeight:o}=e;return{contentHeight:400,dotSize:t/2,dotSizeSM:t*.35,dotSizeLG:o}},kn=et("Spin",e=>{const t=tt(e,{spinDotDefault:e.colorTextDescription});return[In(t)]},Mn),Pn=200,We=[[30,.05],[70,.03],[96,.01]];function jn(e,t){const[o,n]=r.useState(0),a=r.useRef(),s=t==="auto";return r.useEffect(()=>(s&&e&&(n(0),a.current=setInterval(()=>{n(i=>{const u=100-i;for(let c=0;c<We.length;c+=1){const[l,y]=We[c];if(i<=l)return i+u*y}return i})},Pn)),()=>{clearInterval(a.current)}),[s,e]),s?o:t}var An=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};let lt;function Rn(e,t){return!!e&&!!t&&!isNaN(Number(t))}const ut=e=>{var t;const{prefixCls:o,spinning:n=!0,delay:a=0,className:s,rootClassName:i,size:u="default",tip:c,wrapperClassName:l,style:y,children:g,fullscreen:f=!1,indicator:m,percent:$}=e,v=An(e,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen","indicator","percent"]),{getPrefixCls:C,direction:P,spin:S}=r.useContext($e),d=C("spin",o),[E,b,x]=kn(d),[M,h]=r.useState(()=>n&&!Rn(n,a)),p=jn(M,$);r.useEffect(()=>{if(n){const N=bn(a,()=>{h(!0)});return N(),()=>{var _;(_=N==null?void 0:N.cancel)===null||_===void 0||_.call(N)}}h(!1)},[a,n]);const w=r.useMemo(()=>typeof g<"u"&&!f,[g,f]),O=B(d,S==null?void 0:S.className,{[`${d}-sm`]:u==="small",[`${d}-lg`]:u==="large",[`${d}-spinning`]:M,[`${d}-show-text`]:!!c,[`${d}-rtl`]:P==="rtl"},s,!f&&i,b,x),R=B(`${d}-container`,{[`${d}-blur`]:M}),z=(t=m??(S==null?void 0:S.indicator))!==null&&t!==void 0?t:lt,T=Object.assign(Object.assign({},S==null?void 0:S.style),y),U=r.createElement("div",Object.assign({},v,{style:T,className:O,"aria-live":"polite","aria-busy":M}),r.createElement(Nn,{prefixCls:d,indicator:z,percent:p}),c&&(w||f)?r.createElement("div",{className:`${d}-text`},c):null);return E(w?r.createElement("div",Object.assign({},v,{className:B(`${d}-nested-loading`,l,b,x)}),M&&r.createElement("div",{key:"loading"},U),r.createElement("div",{className:R,key:"container"},g)):f?r.createElement("div",{className:B(`${d}-fullscreen`,{[`${d}-fullscreen-show`]:M},i,b,x)},U):U)};ut.setDefaultIndicator=e=>{lt=e};let te=null,le=e=>e(),ve=[],he={};function He(){const{getContainer:e,duration:t,rtl:o,maxCount:n,top:a}=he,s=(e==null?void 0:e())||document.body;return{getContainer:()=>s,duration:t,rtl:o,maxCount:n,top:a}}const Ln=L.forwardRef((e,t)=>{const{messageConfig:o,sync:n}=e,{getPrefixCls:a}=r.useContext($e),s=he.prefixCls||a("message"),i=r.useContext(Cn),[u,c]=st(Object.assign(Object.assign(Object.assign({},o),{prefixCls:s}),i.message));return L.useImperativeHandle(t,()=>{const l=Object.assign({},u);return Object.keys(l).forEach(y=>{l[y]=function(){return n(),u[y].apply(u,arguments)}}),{instance:l,sync:n}}),c}),Tn=L.forwardRef((e,t)=>{const[o,n]=L.useState(He),a=()=>{n(He)};L.useEffect(a,[]);const s=St(),i=s.getRootPrefixCls(),u=s.getIconPrefixCls(),c=s.getTheme(),l=L.createElement(Ln,{ref:t,sync:a,messageConfig:o});return L.createElement(Ct,{prefixCls:i,iconPrefixCls:u,theme:c},s.holderRender?s.holderRender(l):l)});function Ne(){if(!te){const e=document.createDocumentFragment(),t={fragment:e};te=t,le(()=>{_t(L.createElement(Tn,{ref:o=>{const{instance:n,sync:a}=o||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=a,Ne())})}}),e)});return}te.instance&&(ve.forEach(e=>{const{type:t,skipped:o}=e;if(!o)switch(t){case"open":{le(()=>{const n=te.instance.open(Object.assign(Object.assign({},he),e.config));n==null||n.then(e.resolve),e.setCloseFn(n)});break}case"destroy":le(()=>{te==null||te.instance.destroy(e.key)});break;default:le(()=>{var n;const a=(n=te.instance)[t].apply(n,se(e.args));a==null||a.then(e.resolve),e.setCloseFn(a)})}}),ve=[])}function zn(e){he=Object.assign(Object.assign({},he),e),le(()=>{var t;(t=te==null?void 0:te.sync)===null||t===void 0||t.call(te)})}function Dn(e){const t=Ae(o=>{let n;const a={type:"open",config:e,resolve:o,setCloseFn:s=>{n=s}};return ve.push(a),()=>{n?le(()=>{n()}):a.skipped=!0}});return Ne(),t}function _n(e,t){const o=Ae(n=>{let a;const s={type:e,args:t,resolve:n,setCloseFn:i=>{a=i}};return ve.push(s),()=>{a?le(()=>{a()}):s.skipped=!0}});return Ne(),o}const Fn=e=>{ve.push({type:"destroy",key:e}),Ne()},Wn=["success","info","warning","error","loading"],Hn={open:Dn,destroy:Fn,config:zn,useMessage:xn,_InternalPanelDoNotUseOrYouWillBeFired:dn},dt=Hn;Wn.forEach(e=>{dt[e]=function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return _n(e,o)}});L.Component;var Bn={subtree:!0,childList:!0,attributeFilter:["style","class"]};function Gn(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Bn;r.useEffect(function(){if(!(!wt()||!e)){var n,a=Array.isArray(e)?e:[e];return"MutationObserver"in window&&(n=new MutationObserver(t),a.forEach(function(s){n.observe(s,o)})),function(){var s,i;(s=n)===null||s===void 0||s.takeRecords(),(i=n)===null||i===void 0||i.disconnect()}}},[o,e])}const ft=3;function Ie(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;const n=document.createElement("canvas"),a=n.getContext("2d"),s=e*o,i=t*o;return n.setAttribute("width",`${s}px`),n.setAttribute("height",`${i}px`),a.save(),[a,n,s,i]}function Xn(){function e(t,o,n,a,s,i,u,c){const[l,y,g,f]=Ie(a,s,n);if(t instanceof HTMLImageElement)l.drawImage(t,0,0,g,f);else{const{color:K,fontSize:q,fontStyle:F,fontWeight:H,fontFamily:I,textAlign:W}=i,ie=Number(q)*n;l.font=`${F} normal ${H} ${ie}px/${s}px ${I}`,l.fillStyle=K,l.textAlign=W,l.textBaseline="top";const re=Array.isArray(t)?t:[t];re==null||re.forEach((Z,ne)=>{l.fillText(Z??"",g/2,ne*(ie+ft*n))})}const m=Math.PI/180*Number(o),$=Math.max(a,s),[v,C,P]=Ie($,$,n);v.translate(P/2,P/2),v.rotate(m),g>0&&f>0&&v.drawImage(y,-g/2,-f/2);function S(K,q){const F=K*Math.cos(m)-q*Math.sin(m),H=K*Math.sin(m)+q*Math.cos(m);return[F,H]}let d=0,E=0,b=0,x=0;const M=g/2,h=f/2;[[0-M,0-h],[0+M,0-h],[0+M,0+h],[0-M,0+h]].forEach(K=>{let[q,F]=K;const[H,I]=S(q,F);d=Math.min(d,H),E=Math.max(E,H),b=Math.min(b,I),x=Math.max(x,I)});const w=d+P/2,O=b+P/2,R=E-d,z=x-b,T=u*n,U=c*n,N=(R+T)*2,_=z+U,[Y,oe]=Ie(N,_);function J(){let K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Y.drawImage(C,w,O,R,z,K,q,R,z)}return J(),J(R+T,-z/2-U/2),J(R+T,+z/2+U/2),[oe.toDataURL(),N/n,_/n]}return e}function qn(e){const t=L.useRef(!1),o=L.useRef(),n=Ye(e);return()=>{t.current||(t.current=!0,n(),o.current=Ot(()=>{t.current=!1}))}}function Un(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function Kn(e){return Object.keys(e).map(t=>`${Un(t)}: ${e[t]};`).join(" ")}function Vn(){return window.devicePixelRatio||1}const Yn=(e,t)=>{let o=!1;return e.removedNodes.length&&(o=Array.from(e.removedNodes).some(n=>t(n))),e.type==="attributes"&&t(e.target)&&(o=!0),o},Qn={visibility:"visible !important"};function Jn(e){const[t]=r.useState(()=>new Map);return[(s,i,u)=>{if(u){if(!t.get(u)){const l=document.createElement("div");t.set(u,l)}const c=t.get(u);c.setAttribute("style",Kn(Object.assign(Object.assign(Object.assign({},e),{backgroundImage:`url('${s}')`,backgroundSize:`${Math.floor(i)}px`}),Qn))),c.removeAttribute("class"),c.parentElement!==u&&u.append(c)}return t.get(u)},s=>{const i=t.get(s);i&&s&&s.removeChild(i),t.delete(s)},s=>Array.from(t.values()).includes(s)]}function Be(e,t){return e.size===t.size?e:t}const Ge=100,Xe=100,qe={position:"relative",overflow:"hidden"},Zn=e=>{var t,o;const{zIndex:n=9,rotate:a=-22,width:s,height:i,image:u,content:c,font:l={},style:y,className:g,rootClassName:f,gap:m=[Ge,Xe],offset:$,children:v,inherit:C=!0}=e,P=Object.assign(Object.assign({},qe),y),[,S]=It(),{color:d=S.colorFill,fontSize:E=S.fontSizeLG,fontWeight:b="normal",fontStyle:x="normal",fontFamily:M="sans-serif",textAlign:h="center"}=l,[p=Ge,w=Xe]=m,O=p/2,R=w/2,z=(t=$==null?void 0:$[0])!==null&&t!==void 0?t:O,T=(o=$==null?void 0:$[1])!==null&&o!==void 0?o:R,U=L.useMemo(()=>{const j={zIndex:n,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"};let A=z-O,D=T-R;return A>0&&(j.left=`${A}px`,j.width=`calc(100% - ${A}px)`,A=0),D>0&&(j.top=`${D}px`,j.height=`calc(100% - ${D}px)`,D=0),j.backgroundPosition=`${A}px ${D}px`,j},[n,z,O,T,R]),[N,_]=L.useState(),[Y,oe]=L.useState(new Set),J=L.useMemo(()=>{const j=N?[N]:[];return[].concat(j,se(Array.from(Y)))},[N,Y]),K=j=>{let A=120,D=64;if(!u&&j.measureText){j.font=`${Number(E)}px ${M}`;const Q=Array.isArray(c)?c:[c],ee=Q.map(G=>{const X=j.measureText(G);return[X.width,X.fontBoundingBoxAscent+X.fontBoundingBoxDescent]});A=Math.ceil(Math.max.apply(Math,se(ee.map(G=>G[0])))),D=Math.ceil(Math.max.apply(Math,se(ee.map(G=>G[1]))))*Q.length+(Q.length-1)*ft}return[s??A,i??D]},q=Xn(),[F,H]=L.useState(null),W=qn(()=>{const A=document.createElement("canvas").getContext("2d");if(A){const D=Vn(),[Q,ee]=K(A),G=X=>{const[fe,me]=q(X||"",a,D,Q,ee,{color:d,fontSize:E,fontStyle:x,fontWeight:b,fontFamily:M,textAlign:h},p,w);H([fe,me])};if(u){const X=new Image;X.onload=()=>{G(X)},X.onerror=()=>{G(c)},X.crossOrigin="anonymous",X.referrerPolicy="no-referrer",X.src=u}else G(c)}}),[ie,re,Z]=Jn(U);r.useEffect(()=>{F&&J.forEach(j=>{ie(F[0],F[1],j)})},[F,J]);const ne=Ye(j=>{j.forEach(A=>{if(Yn(A,Z))W();else if(A.target===N&&A.attributeName==="style"){const D=Object.keys(qe);for(let Q=0;Q<D.length;Q+=1){const ee=D[Q],G=P[ee],X=N.style[ee];G&&G!==X&&(N.style[ee]=G)}}})});Gn(J,ne),r.useEffect(W,[a,n,s,i,u,c,d,E,b,x,M,h,p,w,z,T]);const we=L.useMemo(()=>({add:j=>{oe(A=>{const D=new Set(A);return D.add(j),Be(A,D)})},remove:j=>{re(j),oe(A=>{const D=new Set(A);return D.delete(j),Be(A,D)})}}),[]),de=C?L.createElement(Yt.Provider,{value:we},v):v;return L.createElement("div",{ref:_,className:B(g,f),style:P},de)};function eo(e){return Je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M321.94 98 158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"},child:[]}]})(e)}const to=V(je)`
  height: 5rem;
  padding: 0 2rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0;
  }
`,no=V(eo)`
  margin-right: 1rem;
  padding: 1rem;
  background: var(--color-gray-3);
  border-radius: var(--radius-button);
`,oo=V.span`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
`,ao=V(ue)`
  flex-shrink: 0;
`;function ro(){var i,u,c;const e=Tt(),t=Pe(),o=r.useMemo(()=>t.at(-1),[t]),n=(i=o==null?void 0:o.handle)==null?void 0:i.title,a=(u=o==null?void 0:o.handle)==null?void 0:u.needBackIcon,s=(c=o==null?void 0:o.handle)==null?void 0:c.rightArea;return k.jsxs(to,{$gap:"1",$justifyContent:kt.BETWEEN,children:[k.jsxs(ao,{$alignItems:ke.CENTER,children:[k.jsx(Lt,{if:a,children:()=>k.jsx(Pt,{onFirstAppear:()=>ge.appear("header-back-icon"),children:k.jsx(no,{onClick:()=>{ge.click("header-back-icon"),e(-1)}})})}),k.jsx(oo,{children:n})]}),k.jsx(ue,{$alignItems:ke.CENTER,children:s})]})}function so(e){return Je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"},child:[]}]})(e)}const io=V(Rt)`
  display: flex;
  color: var(--color-gray-5);
  transition: color 300ms;

  &:hover {
    color: var(--color-hover);
  }
`,co=V.span`
  display: flex;
  color: var(--color-active);
`,lo=V(ue)`
  font-size: 1.4rem;
`;function uo(){const e=Pe(),t=r.useMemo(()=>e.map(o=>{var n,a;return{label:((n=o.handle)==null?void 0:n.crumbLabel)||((a=o.handle)==null?void 0:a.title),path:o.pathname}}).filter(o=>o.label),[e]);return k.jsx(lo,{children:t.map((o,n,a)=>n<a.length-1?k.jsxs(io,{to:o.path,onClick:()=>ge.click("crumb-link-click"),children:["/",o.label]},o.path):k.jsxs(co,{onClick:()=>ge.click("crumb-acitve-text-click"),children:["/",o.label]},o.path))})}const fo=V(je)`
  padding: 1rem 2rem;
`,mo=V(so)`
  font-size: 2rem;
  transition: transform 300ms;
  transform: ${({$expandAside:e})=>e?"rotate(180deg)":"rotate(0)"};
`;function po(){const{expandAside:e}=Ee("expandAside"),t=()=>{Qe().setExpandAside(!e),ge.click("footer-expand-icon",{expandAside:!e})};return k.jsx("footer",{children:k.jsxs(fo,{$gap:"1",$alignItems:ke.CENTER,children:[k.jsx(mo,{onClick:t,$expandAside:e}),k.jsx(uo,{})]})})}const go=V(Dt)`
  margin: 0 0.5rem;
`,vo=r.memo(()=>k.jsx(go,{needActiveStyle:!0,direction:Ce.COLUMN,shadowOption:{$blur:"0.8rem"},appListHander:e=>[{name:"首页",path:"/",icon:k.jsx(zt,{})},...e]})),ho=V(je)`
  height: 100%;
  overflow: hidden;
`,yo=V.aside`
  position: relative;
  display: grid;
  grid-template-columns: ${({$width:e,$expandAside:t})=>t?e:"0"};
  transition: grid-template-columns 300ms;
`;function xo(){const e=jt(),[t,o]=r.useState(""),n=r.useRef(null),{expandAside:a}=Ee("expandAside");return r.useEffect(()=>{n.current&&o(`${n.current.offsetWidth/e}rem`)},[e]),k.jsx(yo,{ref:n,$width:t,$expandAside:a,children:k.jsx(ho,{$direction:Ce.COLUMN,children:k.jsx(vo,{})})})}function Co(){const[e,t]=dt.useMessage(),{messageInfo:o}=Ee("messageInfo");return r.useEffect(()=>{o&&e.open(o)},[o,e]),t}const So=200;function bo(){const{loading:e}=Ee("loading"),t=Pe();return r.useEffect(()=>{Qe().setLoading(!1)},[t]),k.jsx(ut,{spinning:e,delay:So,size:"large",fullscreen:!0})}const $o=V(ue)`
  position: relative;
  overflow-y: auto;
`,Eo=V(Zn)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;function _o(){return k.jsxs(Eo,{content:["cmtlyt","desktop-tools"],font:{color:"rgba(0,0,0,0.05)"},children:[k.jsx(bo,{}),k.jsx(At,{}),k.jsx(Co,{}),k.jsxs(ue,{$flex:"1",style:{height:"100%"},children:[k.jsx(xo,{}),k.jsxs(ue,{$flex:"1",$direction:Ce.COLUMN,style:{overflow:"hidden"},children:[k.jsx(ro,{}),k.jsx($o,{$flex:"1",$direction:Ce.COLUMN,children:k.jsx(Mt,{})}),k.jsx(po,{})]})]})]})}export{_o as Component};
