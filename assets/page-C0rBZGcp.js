import{r,g as q,R as S,A as bt,c as T,f as B,a as pe,b as U,_ as ge,B as Be,D as be,s as yt,E as Me,F as xt,G as N,i as ht,H as $t,j as ae,I as St,l as He,v as Et,m as Ot,J as wt,y as w}from"./index-CfwBVzOL.js";import{h as Pt,z as ye,i as Rt,A as Ae,l as J,b as Y,c as oe,a as De,F as ue,p as Nt,B as It,d as le,g as xe,C as Tt,D as jt,H as Bt,E as Mt}from"./index-CnrgWnd9.js";import{H as Ht,S as ze,a as At,b as Dt,e as zt,c as Ft}from"./index-CwUGTOSB.js";import{B as Lt}from"./index-BSUe0tgs.js";import{D as Wt}from"./index-Dlw-UWBC.js";import{u as _t,r as Vt}from"./render-BtMbuUGD.js";import{u as Fe,b as Gt,a as qt,R as Ut}from"./LoadingOutlined-SeezGcqP.js";import{R as Xt}from"./InfoCircleFilled-B30TAvqA.js";import{K as he,a as Le,g as Kt,m as Yt,u as Qt,z as Zt,b as Jt,C as kt}from"./asyncToGenerator-CFFvzZYl.js";import{u as en,P as tn,a as Ce,i as nn,b as on,C as rn,g as re}from"./index-2Fq0qy_u.js";import{A as We}from"./ActionButton-xOPjUF54.js";import{p as _e,R as Ve}from"./pickAttrs-djDJA2nm.js";import{u as an,p as $e,S as ln}from"./array-BpJYGSJj.js";import{u as sn}from"./context-D-fBrFUT.js";import{B as Ge,c as cn,w as dn}from"./PurePanel-D4MpnO5H.js";import{S as un}from"./icon-BoNys38h.js";import"./create-action-subscribe-hook-D5eI3god.js";import"./index-DqussmJY.js";import"./compact-item-DhqJn8Xy.js";function mn(){const[e,t]=r.useState([]),o=r.useCallback(n=>(t(a=>[].concat(q(a),[n])),()=>{t(a=>a.filter(l=>l!==n))}),[]);return[e,o]}const k=S.createContext({}),{Provider:qe}=k,Se=()=>{const{autoFocusButton:e,cancelButtonProps:t,cancelTextLocale:o,isSilent:n,mergedOkCancel:a,rootPrefixCls:l,close:u,onCancel:d,onConfirm:s}=r.useContext(k);return a?S.createElement(We,{isSilent:n,actionFn:d,close:function(){u==null||u.apply(void 0,arguments),s==null||s(!1)},autoFocus:e==="cancel",buttonProps:t,prefixCls:`${l}-btn`},o):null},Ee=()=>{const{autoFocusButton:e,close:t,isSilent:o,okButtonProps:n,rootPrefixCls:a,okTextLocale:l,okType:u,onConfirm:d,onOk:s}=r.useContext(k);return S.createElement(We,{isSilent:o,type:u||"primary",actionFn:s,close:function(){t==null||t.apply(void 0,arguments),d==null||d(!0)},autoFocus:e==="ok",buttonProps:n,prefixCls:`${a}-btn`},l)};var Ue=r.createContext({});function Oe(e,t,o){var n=t;return!n&&o&&(n="".concat(e,"-").concat(o)),n}function we(e,t){var o=e["page".concat(t?"Y":"X","Offset")],n="scroll".concat(t?"Top":"Left");if(typeof o!="number"){var a=e.document;o=a.documentElement[n],typeof o!="number"&&(o=a.body[n])}return o}function fn(e){var t=e.getBoundingClientRect(),o={left:t.left,top:t.top},n=e.ownerDocument,a=n.defaultView||n.parentWindow;return o.left+=we(a),o.top+=we(a,!0),o}const gn=r.memo(function(e){var t=e.children;return t},function(e,t){var o=t.shouldUpdate;return!o});var Pe={width:0,height:0,overflow:"hidden",outline:"none"},Cn={outline:"none"},Xe=S.forwardRef(function(e,t){var o=e.prefixCls,n=e.className,a=e.style,l=e.title,u=e.ariaId,d=e.footer,s=e.closable,c=e.closeIcon,i=e.onClose,g=e.children,f=e.bodyStyle,b=e.bodyProps,E=e.modalRender,m=e.onMouseDown,y=e.onMouseUp,C=e.holderRef,v=e.visible,P=e.forceRender,x=e.width,$=e.height,p=e.classNames,h=e.styles,O=S.useContext(Ue),R=O.panel,A=bt(C,R),H=r.useRef(),z=r.useRef(),W=r.useRef();S.useImperativeHandle(t,function(){return{focus:function(){var j;(j=W.current)===null||j===void 0||j.focus({preventScroll:!0})},changeActive:function(j){var ie=document,te=ie.activeElement;j&&te===z.current?H.current.focus({preventScroll:!0}):!j&&te===H.current&&z.current.focus({preventScroll:!0})}}});var M={};x!==void 0&&(M.width=x),$!==void 0&&(M.height=$);var F=d?S.createElement("div",{className:T("".concat(o,"-footer"),p==null?void 0:p.footer),style:B({},h==null?void 0:h.footer)},d):null,V=l?S.createElement("div",{className:T("".concat(o,"-header"),p==null?void 0:p.header),style:B({},h==null?void 0:h.header)},S.createElement("div",{className:"".concat(o,"-title"),id:u},l)):null,_=r.useMemo(function(){return pe(s)==="object"&&s!==null?s:s?{closeIcon:c??S.createElement("span",{className:"".concat(o,"-close-x")})}:{}},[s,c,o]),X=_e(_,!0),Z=pe(s)==="object"&&s.disabled,Q=s?S.createElement("button",U({type:"button",onClick:i,"aria-label":"Close"},X,{className:"".concat(o,"-close"),disabled:Z}),_.closeIcon):null,G=S.createElement("div",{className:T("".concat(o,"-content"),p==null?void 0:p.content),style:h==null?void 0:h.content},Q,V,S.createElement("div",U({className:T("".concat(o,"-body"),p==null?void 0:p.body),style:B(B({},f),h==null?void 0:h.body)},b),g),F);return S.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":l?u:null,"aria-modal":"true",ref:A,style:B(B({},a),M),className:T(o,n),onMouseDown:m,onMouseUp:y},S.createElement("div",{tabIndex:0,ref:H,style:Pe,"aria-hidden":"true"}),S.createElement("div",{ref:W,tabIndex:-1,style:Cn},S.createElement(gn,{shouldUpdate:v||P},E?E(G):G)),S.createElement("div",{tabIndex:0,ref:z,style:Pe,"aria-hidden":"true"}))}),Ke=r.forwardRef(function(e,t){var o=e.prefixCls,n=e.title,a=e.style,l=e.className,u=e.visible,d=e.forceRender,s=e.destroyOnClose,c=e.motionName,i=e.ariaId,g=e.onVisibleChanged,f=e.mousePosition,b=r.useRef(),E=r.useState(),m=ge(E,2),y=m[0],C=m[1],v={};y&&(v.transformOrigin=y);function P(){var x=fn(b.current);C(f&&(f.x||f.y)?"".concat(f.x-x.left,"px ").concat(f.y-x.top,"px"):"")}return r.createElement(Be,{visible:u,onVisibleChanged:g,onAppearPrepare:P,onEnterPrepare:P,forceRender:d,motionName:c,removeOnLeave:s,ref:b},function(x,$){var p=x.className,h=x.style;return r.createElement(Xe,U({},e,{ref:t,title:n,ariaId:i,prefixCls:o,holderRef:$,style:B(B(B({},h),a),v),className:T(l,p)}))})});Ke.displayName="Content";var vn=function(t){var o=t.prefixCls,n=t.style,a=t.visible,l=t.maskProps,u=t.motionName,d=t.className;return r.createElement(Be,{key:"mask",visible:a,motionName:u,leavedClassName:"".concat(o,"-mask-hidden")},function(s,c){var i=s.className,g=s.style;return r.createElement("div",U({ref:c,style:B(B({},g),n),className:T("".concat(o,"-mask"),i,d)},l))})},pn=function(t){var o=t.prefixCls,n=o===void 0?"rc-dialog":o,a=t.zIndex,l=t.visible,u=l===void 0?!1:l,d=t.keyboard,s=d===void 0?!0:d,c=t.focusTriggerAfterClose,i=c===void 0?!0:c,g=t.wrapStyle,f=t.wrapClassName,b=t.wrapProps,E=t.onClose,m=t.afterOpenChange,y=t.afterClose,C=t.transitionName,v=t.animation,P=t.closable,x=P===void 0?!0:P,$=t.mask,p=$===void 0?!0:$,h=t.maskTransitionName,O=t.maskAnimation,R=t.maskClosable,A=R===void 0?!0:R,H=t.maskStyle,z=t.maskProps,W=t.rootClassName,M=t.classNames,F=t.styles,V=r.useRef(),_=r.useRef(),X=r.useRef(),Z=r.useState(u),Q=ge(Z,2),G=Q[0],L=Q[1],j=en();function ie(){be(_.current,document.activeElement)||(V.current=document.activeElement)}function te(){if(!be(_.current,document.activeElement)){var I;(I=X.current)===null||I===void 0||I.focus()}}function ft(I){if(I)te();else{if(L(!1),p&&V.current&&i){try{V.current.focus({preventScroll:!0})}catch{}V.current=null}G&&(y==null||y())}m==null||m(I)}function se(I){E==null||E(I)}var ne=r.useRef(!1),ce=r.useRef(),gt=function(){clearTimeout(ce.current),ne.current=!0},Ct=function(){ce.current=setTimeout(function(){ne.current=!1})},ve=null;A&&(ve=function(de){ne.current?ne.current=!1:_.current===de.target&&se(de)});function vt(I){if(s&&I.keyCode===he.ESC){I.stopPropagation(),se(I);return}u&&I.keyCode===he.TAB&&X.current.changeActive(!I.shiftKey)}r.useEffect(function(){u&&(L(!0),ie())},[u]),r.useEffect(function(){return function(){clearTimeout(ce.current)}},[]);var pt=B(B(B({zIndex:a},g),F==null?void 0:F.wrapper),{},{display:G?null:"none"});return r.createElement("div",U({className:T("".concat(n,"-root"),W)},_e(t,{data:!0})),r.createElement(vn,{prefixCls:n,visible:p&&u,motionName:Oe(n,h,O),style:B(B({zIndex:a},H),F==null?void 0:F.mask),maskProps:z,className:M==null?void 0:M.mask}),r.createElement("div",U({tabIndex:-1,onKeyDown:vt,className:T("".concat(n,"-wrap"),f,M==null?void 0:M.wrapper),ref:_,onClick:ve,style:pt},b),r.createElement(Ke,U({},t,{onMouseDown:gt,onMouseUp:Ct,ref:X,closable:x,ariaId:j,prefixCls:n,visible:u&&G,onClose:se,onVisibleChanged:ft,motionName:Oe(n,C,v)}))))},Ye=function(t){var o=t.visible,n=t.getContainer,a=t.forceRender,l=t.destroyOnClose,u=l===void 0?!1:l,d=t.afterClose,s=t.panelRef,c=r.useState(o),i=ge(c,2),g=i[0],f=i[1],b=r.useMemo(function(){return{panel:s}},[s]);return r.useEffect(function(){o&&f(!0)},[o]),!a&&u&&!g?null:r.createElement(Ue.Provider,{value:b},r.createElement(tn,{open:o||a||g,autoDestroy:!1,getContainer:n,autoLock:o||g},r.createElement(pn,U({},t,{destroyOnClose:u,afterClose:function(){d==null||d(),f(!1)}}))))};Ye.displayName="Dialog";const bn=()=>yt()&&window.document.documentElement,Re=()=>{const{cancelButtonProps:e,cancelTextLocale:t,onCancel:o}=r.useContext(k);return S.createElement(Ge,Object.assign({onClick:o},e),t)},Ne=()=>{const{confirmLoading:e,okButtonProps:t,okType:o,okTextLocale:n,onOk:a}=r.useContext(k);return S.createElement(Ge,Object.assign({},cn(o),{loading:e,onClick:a},t),n)};function Qe(e,t){return S.createElement("span",{className:`${e}-close-x`},t||S.createElement(Ve,{className:`${e}-close-icon`}))}const Ze=e=>{const{okText:t,okType:o="primary",cancelText:n,confirmLoading:a,onOk:l,onCancel:u,okButtonProps:d,cancelButtonProps:s,footer:c}=e,[i]=Ce("Modal",Me()),g=t||(i==null?void 0:i.okText),f=n||(i==null?void 0:i.cancelText),b={confirmLoading:a,okButtonProps:d,cancelButtonProps:s,okTextLocale:g,cancelTextLocale:f,okType:o,onOk:l,onCancel:u},E=S.useMemo(()=>b,q(Object.values(b)));let m;return typeof c=="function"||typeof c>"u"?(m=S.createElement(S.Fragment,null,S.createElement(Re,null),S.createElement(Ne,null)),typeof c=="function"&&(m=c(m,{OkBtn:Ne,CancelBtn:Re})),m=S.createElement(qe,{value:E},m)):m=c,S.createElement(xt,{disabled:!1},m)},yn=new Le("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),xn=new Le("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),hn=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:o}=e,n=`${o}-fade`,a=t?"&":"";return[nn(n,yn,xn,e.motionDurationMid,t),{[`
        ${a}${n}-enter,
        ${a}${n}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${a}${n}-leave`]:{animationTimingFunction:"linear"}}]};function Ie(e){return{position:e,inset:0}}const $n=e=>{const{componentCls:t,antCls:o}=e;return[{[`${t}-root`]:{[`${t}${o}-zoom-enter, ${t}${o}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${t}${o}-zoom-leave ${t}-content`]:{pointerEvents:"none"},[`${t}-mask`]:Object.assign(Object.assign({},Ie("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${t}-hidden`]:{display:"none"}}),[`${t}-wrap`]:Object.assign(Object.assign({},Ie("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${t}-root`]:hn(e)}]},Sn=e=>{const{componentCls:t}=e;return[{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl"},[`${t}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[t]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{maxWidth:"calc(100vw - 16px)",margin:`${N(e.marginXS)} auto`},[`${t}-centered`]:{[t]:{flex:1}}}}},{[t]:Object.assign(Object.assign({},ht(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${N(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${t}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${t}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${t}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:N(e.modalCloseBtnSize),justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},$t(e)),[`${t}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${N(e.borderRadiusLG)} ${N(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${t}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding,[`${t}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",margin:`${N(e.margin)} auto`}},[`${t}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${t}-open`]:{overflow:"hidden"}})},{[`${t}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${t}-confirm-body`]:{marginBottom:"auto"}}}]},En=e=>{const{componentCls:t}=e;return{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl",[`${t}-confirm-body`]:{direction:"rtl"}}}}},Je=e=>{const t=e.padding,o=e.fontSizeHeading5,n=e.lineHeightHeading5;return Yt(e,{modalHeaderHeight:e.calc(e.calc(n).mul(o).equal()).add(e.calc(t).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},ke=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${N(e.paddingMD)} ${N(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${N(e.padding)} ${N(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${N(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${N(e.paddingXS)} ${N(e.padding)}`:0,footerBorderTop:e.wireframe?`${N(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${N(e.borderRadiusLG)} ${N(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${N(e.padding*2)} ${N(e.padding*2)} ${N(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM}),et=Kt("Modal",e=>{const t=Je(e);return[Sn(t),En(t),$n(t),on(t,"zoom")]},ke,{unitless:{titleLineHeight:!0}});var On=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};let me;const wn=e=>{me={x:e.pageX,y:e.pageY},setTimeout(()=>{me=null},100)};bn()&&document.documentElement.addEventListener("click",wn,!0);const tt=e=>{var t;const{getPopupContainer:o,getPrefixCls:n,direction:a,modal:l}=r.useContext(ae),u=L=>{const{onCancel:j}=e;j==null||j(L)},d=L=>{const{onOk:j}=e;j==null||j(L)},{prefixCls:s,className:c,rootClassName:i,open:g,wrapClassName:f,centered:b,getContainer:E,focusTriggerAfterClose:m=!0,style:y,visible:C,width:v=520,footer:P,classNames:x,styles:$,children:p,loading:h}=e,O=On(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles","children","loading"]),R=n("modal",s),A=n(),H=Fe(R),[z,W,M]=et(R,H),F=T(f,{[`${R}-centered`]:!!b,[`${R}-wrap-rtl`]:a==="rtl"}),V=P!==null&&!h?r.createElement(Ze,Object.assign({},e,{onOk:d,onCancel:u})):null,[_,X]=an($e(e),$e(l),{closable:!0,closeIcon:r.createElement(Ve,{className:`${R}-close-icon`}),closeIconRender:L=>Qe(R,L)}),Z=sn(`.${R}-content`),[Q,G]=Qt("Modal",O.zIndex);return z(r.createElement(rn,{form:!0,space:!0},r.createElement(Zt.Provider,{value:G},r.createElement(Ye,Object.assign({width:v},O,{zIndex:Q,getContainer:E===void 0?o:E,prefixCls:R,rootClassName:T(W,i,M,H),footer:V,visible:g??C,mousePosition:(t=O.mousePosition)!==null&&t!==void 0?t:me,onClose:u,closable:_,closeIcon:X,focusTriggerAfterClose:m,transitionName:re(A,"zoom",e.transitionName),maskTransitionName:re(A,"fade",e.maskTransitionName),className:T(W,c,l==null?void 0:l.className),style:Object.assign(Object.assign({},l==null?void 0:l.style),y),classNames:Object.assign(Object.assign(Object.assign({},l==null?void 0:l.classNames),x),{wrapper:T(F,x==null?void 0:x.wrapper)}),styles:Object.assign(Object.assign({},l==null?void 0:l.styles),$),panelRef:Z}),h?r.createElement(ln,{active:!0,title:!1,paragraph:{rows:4},className:`${R}-body-skeleton`}):p))))},Pn=e=>{const{componentCls:t,titleFontSize:o,titleLineHeight:n,modalConfirmIconSize:a,fontSize:l,lineHeight:u,modalTitleHeight:d,fontHeight:s,confirmBodyPadding:c}=e,i=`${t}-confirm`;return{[i]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${i}-body-wrapper`]:Object.assign({},St()),[`&${t} ${t}-body`]:{padding:c},[`${i}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:a,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(s).sub(a).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(d).sub(a).equal()).div(2).equal()}},[`${i}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS},[`${e.iconCls} + ${i}-paragraph`]:{maxWidth:`calc(100% - ${N(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${i}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:o,lineHeight:n},[`${i}-content`]:{color:e.colorText,fontSize:l,lineHeight:u},[`${i}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${i}-error ${i}-body > ${e.iconCls}`]:{color:e.colorError},[`${i}-warning ${i}-body > ${e.iconCls},
        ${i}-confirm ${i}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${i}-info ${i}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${i}-success ${i}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},Rn=Jt(["Modal","confirm"],e=>{const t=Je(e);return[Pn(t)]},ke,{order:-1e3});var Nn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};function nt(e){const{prefixCls:t,icon:o,okText:n,cancelText:a,confirmPrefixCls:l,type:u,okCancel:d,footer:s,locale:c}=e,i=Nn(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let g=o;if(!o&&o!==null)switch(u){case"info":g=r.createElement(Xt,null);break;case"success":g=r.createElement(Ut,null);break;case"error":g=r.createElement(qt,null);break;default:g=r.createElement(Gt,null)}const f=d??u==="confirm",b=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[E]=Ce("Modal"),m=c||E,y=n||(f?m==null?void 0:m.okText:m==null?void 0:m.justOkText),C=a||(m==null?void 0:m.cancelText),v=Object.assign({autoFocusButton:b,cancelTextLocale:C,okTextLocale:y,mergedOkCancel:f},i),P=r.useMemo(()=>v,q(Object.values(v))),x=r.createElement(r.Fragment,null,r.createElement(Se,null),r.createElement(Ee,null)),$=e.title!==void 0&&e.title!==null,p=`${l}-body`;return r.createElement("div",{className:`${l}-body-wrapper`},r.createElement("div",{className:T(p,{[`${p}-has-title`]:$})},g,r.createElement("div",{className:`${l}-paragraph`},$&&r.createElement("span",{className:`${l}-title`},e.title),r.createElement("div",{className:`${l}-content`},e.content))),s===void 0||typeof s=="function"?r.createElement(qe,{value:P},r.createElement("div",{className:`${l}-btns`},typeof s=="function"?s(x,{OkBtn:Ee,CancelBtn:Se}):x)):s,r.createElement(Rn,{prefixCls:t}))}const In=e=>{const{close:t,zIndex:o,afterClose:n,open:a,keyboard:l,centered:u,getContainer:d,maskStyle:s,direction:c,prefixCls:i,wrapClassName:g,rootPrefixCls:f,bodyStyle:b,closable:E=!1,closeIcon:m,modalRender:y,focusTriggerAfterClose:C,onConfirm:v,styles:P}=e,x=`${i}-confirm`,$=e.width||416,p=e.style||{},h=e.mask===void 0?!0:e.mask,O=e.maskClosable===void 0?!1:e.maskClosable,R=T(x,`${x}-${e.type}`,{[`${x}-rtl`]:c==="rtl"},e.className),[,A]=Et(),H=r.useMemo(()=>o!==void 0?o:A.zIndexPopupBase+kt,[o,A]);return r.createElement(tt,{prefixCls:i,className:R,wrapClassName:T({[`${x}-centered`]:!!e.centered},g),onCancel:()=>{t==null||t({triggerCancel:!0}),v==null||v(!1)},open:a,title:"",footer:null,transitionName:re(f||"","zoom",e.transitionName),maskTransitionName:re(f||"","fade",e.maskTransitionName),mask:h,maskClosable:O,style:p,styles:Object.assign({body:b,mask:s},P),width:$,zIndex:H,afterClose:n,keyboard:l,centered:u,getContainer:d,closable:E,closeIcon:m,modalRender:y,focusTriggerAfterClose:C},r.createElement(nt,Object.assign({},e,{confirmPrefixCls:x})))},ot=e=>{const{rootPrefixCls:t,iconPrefixCls:o,direction:n,theme:a}=e;return r.createElement(He,{prefixCls:t,iconPrefixCls:o,direction:n,theme:a},r.createElement(In,Object.assign({},e)))},K=[];let rt="";function at(){return rt}const Tn=e=>{var t,o;const{prefixCls:n,getContainer:a,direction:l}=e,u=Me(),d=r.useContext(ae),s=at()||d.getPrefixCls(),c=n||`${s}-modal`;let i=a;return i===!1&&(i=void 0),S.createElement(ot,Object.assign({},e,{rootPrefixCls:s,prefixCls:c,iconPrefixCls:d.iconPrefixCls,theme:d.theme,direction:l??d.direction,locale:(o=(t=d.locale)===null||t===void 0?void 0:t.Modal)!==null&&o!==void 0?o:u,getContainer:i}))};function ee(e){const t=Ot(),o=document.createDocumentFragment();let n=Object.assign(Object.assign({},e),{close:d,open:!0}),a;function l(){for(var c,i=arguments.length,g=new Array(i),f=0;f<i;f++)g[f]=arguments[f];if(g.some(m=>m==null?void 0:m.triggerCancel)){var E;(c=e.onCancel)===null||c===void 0||(E=c).call.apply(E,[e,()=>{}].concat(q(g.slice(1))))}for(let m=0;m<K.length;m++)if(K[m]===d){K.splice(m,1);break}_t(o)}function u(c){clearTimeout(a),a=setTimeout(()=>{const i=t.getPrefixCls(void 0,at()),g=t.getIconPrefixCls(),f=t.getTheme(),b=S.createElement(Tn,Object.assign({},c));Vt(S.createElement(He,{prefixCls:i,iconPrefixCls:g,theme:f},t.holderRender?t.holderRender(b):b),o)})}function d(){for(var c=arguments.length,i=new Array(c),g=0;g<c;g++)i[g]=arguments[g];n=Object.assign(Object.assign({},n),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),l.apply(this,i)}}),n.visible&&delete n.visible,u(n)}function s(c){typeof c=="function"?n=c(n):n=Object.assign(Object.assign({},n),c),u(n)}return u(n),K.push(d),{destroy:d,update:s}}function lt(e){return Object.assign(Object.assign({},e),{type:"warning"})}function it(e){return Object.assign(Object.assign({},e),{type:"info"})}function st(e){return Object.assign(Object.assign({},e),{type:"success"})}function ct(e){return Object.assign(Object.assign({},e),{type:"error"})}function dt(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function jn(e){let{rootPrefixCls:t}=e;rt=t}var Bn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const Mn=(e,t)=>{var o,{afterClose:n,config:a}=e,l=Bn(e,["afterClose","config"]);const[u,d]=r.useState(!0),[s,c]=r.useState(a),{direction:i,getPrefixCls:g}=r.useContext(ae),f=g("modal"),b=g(),E=()=>{var v;n(),(v=s.afterClose)===null||v===void 0||v.call(s)},m=function(){var v;d(!1);for(var P=arguments.length,x=new Array(P),$=0;$<P;$++)x[$]=arguments[$];if(x.some(O=>O==null?void 0:O.triggerCancel)){var h;(v=s.onCancel)===null||v===void 0||(h=v).call.apply(h,[s,()=>{}].concat(q(x.slice(1))))}};r.useImperativeHandle(t,()=>({destroy:m,update:v=>{c(P=>Object.assign(Object.assign({},P),v))}}));const y=(o=s.okCancel)!==null&&o!==void 0?o:s.type==="confirm",[C]=Ce("Modal",wt.Modal);return r.createElement(ot,Object.assign({prefixCls:f,rootPrefixCls:b},s,{close:m,open:u,afterClose:E,okText:s.okText||(y?C==null?void 0:C.okText:C==null?void 0:C.justOkText),direction:s.direction||i,cancelText:s.cancelText||(C==null?void 0:C.cancelText)},l))},Hn=r.forwardRef(Mn);let Te=0;const An=r.memo(r.forwardRef((e,t)=>{const[o,n]=mn();return r.useImperativeHandle(t,()=>({patchElement:n}),[]),r.createElement(r.Fragment,null,o)}));function Dn(){const e=r.useRef(null),[t,o]=r.useState([]);r.useEffect(()=>{t.length&&(q(t).forEach(u=>{u()}),o([]))},[t]);const n=r.useCallback(l=>function(d){var s;Te+=1;const c=r.createRef();let i;const g=new Promise(y=>{i=y});let f=!1,b;const E=r.createElement(Hn,{key:`modal-${Te}`,config:l(d),ref:c,afterClose:()=>{b==null||b()},isSilent:()=>f,onConfirm:y=>{i(y)}});return b=(s=e.current)===null||s===void 0?void 0:s.patchElement(E),b&&K.push(b),{destroy:()=>{function y(){var C;(C=c.current)===null||C===void 0||C.destroy()}c.current?y():o(C=>[].concat(q(C),[y]))},update:y=>{function C(){var v;(v=c.current)===null||v===void 0||v.update(y)}c.current?C():o(v=>[].concat(q(v),[C]))},then:y=>(f=!0,g.then(y))}},[]);return[r.useMemo(()=>({info:n(it),success:n(st),error:n(ct),warning:n(lt),confirm:n(dt)}),[]),r.createElement(An,{key:"modal-holder",ref:e})]}var zn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const Fn=e=>{const{prefixCls:t,className:o,closeIcon:n,closable:a,type:l,title:u,children:d,footer:s}=e,c=zn(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:i}=r.useContext(ae),g=i(),f=t||i("modal"),b=Fe(g),[E,m,y]=et(f,b),C=`${f}-confirm`;let v={};return l?v={closable:a??!1,title:"",footer:"",children:r.createElement(nt,Object.assign({},e,{prefixCls:f,confirmPrefixCls:C,rootPrefixCls:g,content:d}))}:v={closable:a??!0,title:u,footer:s!==null&&r.createElement(Ze,Object.assign({},e)),children:d},E(r.createElement(Xe,Object.assign({prefixCls:f,className:T(m,`${f}-pure-panel`,l&&C,l&&`${C}-${l}`,o,y,b)},c,{closeIcon:Qe(f,n),closable:a},v)))},Ln=dn(Fn);function ut(e){return ee(lt(e))}const D=tt;D.useModal=Dn;D.info=function(t){return ee(it(t))};D.success=function(t){return ee(st(t))};D.error=function(t){return ee(ct(t))};D.warning=ut;D.warn=ut;D.confirm=function(t){return ee(dt(t))};D.destroyAll=function(){for(;K.length;){const t=K.pop();t&&t()}};D.config=jn;D._InternalPanelDoNotUseOrYouWillBeFired=Ln;const mt=Pt(e=>({speed:500,currentGameId:ye(),replayStep:null,setSpeed:t=>e({speed:t}),reset:()=>e({currentGameId:ye()}),replay:t=>e({replayStep:t})})),Wn=e=>mt(Rt(e)),fe=()=>mt.getState();function _n(){const[e,t]=r.useState(!1);return w.jsxs(w.Fragment,{children:[w.jsx(Lt,{buttons:[{text:"游戏规则",onClick(){D.info({title:"游戏规则",okText:"知道了",centered:!0,content:w.jsx(Ae,{onFirstAppear:()=>J.appear("game-sbwd-rule"),children:w.jsxs(Y,{$gap:"0.3",$direction:oe.COLUMN,children:[w.jsx("span",{children:"1. 点击指针, 其指针顺时针旋转 90 度后指向的圆圈指针依次旋转"}),w.jsx("span",{children:"2. 剩余步数用完, 游戏结束"})]})})})}},{text:"游戏记录",onClick:()=>t(!0)},{text:"重置",onClick:()=>fe().reset()}]}),w.jsx(Ht,{open:e,storeKey:ze,onClose:()=>t(!1),children:o=>w.jsxs(At,{$direction:oe.COLUMN,$gap:"0.5",children:[w.jsxs(Dt,{$alignItems:De.CENTER,$justifyContent:ue.BETWEEN,children:[w.jsxs("span",{children:["分数: ",o.totalRotate]}),w.jsx(Wt,{format:"yyyy-MM-DD hh:mm:ss",children:o.time})]}),w.jsx(Y,{$justifyContent:ue.END,children:w.jsx(Nt,{$presetTheme:It.PRIMARY,onClick:()=>{const n=o.stepHistory;t(!1),fe().replay(n),J.click("game-sbwd-history-replay",{stepHistory:n})},children:"重放"})})]},o.gameId)})]})}const Vn=le(Y)`
  padding: var(--page-padding);
`,Gn=le(Y)`
  width: 60vmin;
  height: 60vmin;
`,qn=r.memo(le(un)`
  width: 100%;
  height: 100%;
  transform: rotate(${({$rotate:e})=>e}deg);
  transition: transform ${({$speed:e})=>e}ms;
`),je=le.span`
  font-size: 3rem;
`;function Un(e){return e%360===0?"top":e%360===90?"right":e%360===180?"bottom":"left"}function Xn(e,t,o){return o==="top"?[e-1,t]:o==="right"?[e,t+1]:o==="bottom"?[e+1,t]:[e,t-1]}function go(){const e=[5,5],[t,o]=e,{speed:n,currentGameId:a,replayStep:l}=Wn(["speed","currentGameId","replayStep"]),[u,d]=r.useState(Array.from({length:t},()=>new Array(o).fill(0))),[s,c]=r.useState(0),[i,g]=r.useState(10),[f,b]=r.useState(!1),E=r.useRef([]),m=r.useRef(a),y=r.useRef(l),C=r.useRef(!1),v=r.useMemo(()=>{const $=Bt((p,h)=>{c(O=>O+90),d(Mt(O=>{var M;const R=O[p][h]=O[p][h]+90,A=Un(R),[H,z]=Xn(p,h,A),W=(M=O[H])==null?void 0:M[z];setTimeout(()=>{if(W===void 0)return b(!1);$(H,z)},n)}))},10,!0);return $},[n]),P=r.useCallback(($,p)=>{f||(E.current.push(`${$},${p}`),b(!0),v($,p),g(h=>h-1))},[f,v]),x=r.useCallback(()=>{E.current=[],d(Array.from({length:t},()=>new Array(o).fill(0))),g(10),c(0),C.current=!1},[t,o]);return r.useEffect(()=>{if(!f&&i<=0){if(C.current)return xe().showMessage({content:"回放结束"});const $={gameId:m.current,totalRotate:s,stepHistory:E.current};Tt(ze,{...$,time:Date.now()}),jt(),J.event("game-sbwd-over",$),J.expose("game-sbwd-over"),zt({id:"reload-history",type:Ft.RELOAD_HISTORY}),xe().showMessage({content:`游戏结束, 当前分数 ${s}!`,onClose:x})}},[f,x,s,i]),r.useEffect(()=>{m.current!==a&&(m.current=a,x())},[a,x]),r.useEffect(()=>{var p;if(!l)return;(p=y.current)!=null&&p.length||(x(),C.current=!0,y.current=l.slice());const $=setInterval(()=>{var R;if(f)return;const[h,O]=((R=y.current.shift())==null?void 0:R.split(",").map(Number))||[];if(P(h,O),!y.current.length){clearInterval($),fe().replay(null);return}},n);return()=>clearInterval($)},[l,n,f,P,x]),w.jsx(Ae,{onFirstAppear:()=>J.appear("game-sbwd"),children:w.jsxs(Vn,{$flex:"1",$gap:"5",$direction:oe.COLUMN,$alignItems:De.CENTER,$justifyContent:ue.CENTER,children:[w.jsxs(Y,{$gap:"1",children:[w.jsxs(je,{children:["剩余步数: ",i]}),w.jsxs(je,{children:["当前度数: ",s]})]}),w.jsx(Gn,{$direction:oe.COLUMN,$gap:"1",children:u.map(($,p)=>w.jsx(Y,{$gap:"1",children:$.map((h,O)=>w.jsx(Y,{$flex:"1",onClick:()=>P(p,O),children:w.jsx(qn,{$rotate:h,$speed:n})},O))},p))})]})})}const Co={title:"十步万度",needBackIcon:!0,rightArea:w.jsx(_n,{})};export{go as Component,Co as handle};