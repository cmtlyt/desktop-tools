import{_ as xe,a as Ne,b as z,c as it,d as ct,e as Se,f as J,g as R,h as D,u as Ke,i as _t,t as we,j as Ve,R as U,k as Pt,r as a,C as me,l as lt,m as At,n as wt,o as Mt,p as kt,w as Lt,q as Ft,I as ut,s as jt,v as Te,x as Ut,y as Q,z as W,A as $t,B as ce,D as Dt,E as Ht,F as Kt,G as Vt,H as zt,J as Bt,K as ft,L as P,M as Gt,O as Wt}from"./index-JOKciGYI.js";import{d as Y,F as Qt,a as le,b as ze,S as Fe,c as Ee,e as Yt}from"./button-DuG-K6hD.js";import{G as qt,T as Xt,A as Zt}from"./index-ByfdBwFS.js";import{u as Jt}from"./layout-B1K8iT6y.js";import"./use-selector-0zMNoO-R.js";var Be=function(){function e(t,n){Ne(this,e),z(this,"name",void 0),z(this,"style",void 0),z(this,"_keyframe",!0),this.name=t,this.style=n}return xe(e,[{key:"getName",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return n?"".concat(n,"-").concat(this.name):this.name}}]),e}(),dt=xe(function e(){Ne(this,e)}),vt="CALC_UNIT",en=new RegExp(vt,"g");function Me(e){return typeof e=="number"?"".concat(e).concat(vt):e}var tn=function(e){it(n,e);var t=ct(n);function n(r,o){var s;Ne(this,n),s=t.call(this),z(Se(s),"result",""),z(Se(s),"unitlessCssVar",void 0),z(Se(s),"lowPriority",void 0);var i=J(r);return s.unitlessCssVar=o,r instanceof n?s.result="(".concat(r.result,")"):i==="number"?s.result=Me(r):i==="string"&&(s.result=r),s}return xe(n,[{key:"add",value:function(o){return o instanceof n?this.result="".concat(this.result," + ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," + ").concat(Me(o))),this.lowPriority=!0,this}},{key:"sub",value:function(o){return o instanceof n?this.result="".concat(this.result," - ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," - ").concat(Me(o))),this.lowPriority=!0,this}},{key:"mul",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof n?this.result="".concat(this.result," * ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," * ").concat(o)),this.lowPriority=!1,this}},{key:"div",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof n?this.result="".concat(this.result," / ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," / ").concat(o)),this.lowPriority=!1,this}},{key:"getResult",value:function(o){return this.lowPriority||o?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(o){var s=this,i=o||{},l=i.unit,c=!0;return typeof l=="boolean"?c=l:Array.from(this.unitlessCssVar).some(function(v){return s.result.includes(v)})&&(c=!1),this.result=this.result.replace(en,c?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),n}(dt),nn=function(e){it(n,e);var t=ct(n);function n(r){var o;return Ne(this,n),o=t.call(this),z(Se(o),"result",0),r instanceof n?o.result=r.result:typeof r=="number"&&(o.result=r),o}return xe(n,[{key:"add",value:function(o){return o instanceof n?this.result+=o.result:typeof o=="number"&&(this.result+=o),this}},{key:"sub",value:function(o){return o instanceof n?this.result-=o.result:typeof o=="number"&&(this.result-=o),this}},{key:"mul",value:function(o){return o instanceof n?this.result*=o.result:typeof o=="number"&&(this.result*=o),this}},{key:"div",value:function(o){return o instanceof n?this.result/=o.result:typeof o=="number"&&(this.result/=o),this}},{key:"equal",value:function(){return this.result}}]),n}(dt),on=function(t,n){var r=t==="css"?tn:nn;return function(o){return new r(o,n)}},Ge=function(t,n){return"".concat([n,t.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-"))};function We(e,t,n,r){var o=R({},t[e]);if(r!=null&&r.deprecatedTokens){var s=r.deprecatedTokens;s.forEach(function(l){var c=D(l,2),v=c[0],p=c[1];if(o!=null&&o[v]||o!=null&&o[p]){var C;(C=o[p])!==null&&C!==void 0||(o[p]=o==null?void 0:o[v])}})}var i=R(R({},n),o);return Object.keys(i).forEach(function(l){i[l]===t[l]&&delete i[l]}),i}var mt=typeof CSSINJS_STATISTIC<"u",ke=!0;function je(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!mt)return Object.assign.apply(Object,[{}].concat(t));ke=!1;var r={};return t.forEach(function(o){if(J(o)==="object"){var s=Object.keys(o);s.forEach(function(i){Object.defineProperty(r,i,{configurable:!0,enumerable:!0,get:function(){return o[i]}})})}}),ke=!0,r}var Qe={};function rn(){}var an=function(t){var n,r=t,o=rn;return mt&&typeof Proxy<"u"&&(n=new Set,r=new Proxy(t,{get:function(i,l){return ke&&n.add(l),i[l]}}),o=function(i,l){var c;Qe[i]={global:Array.from(n),component:R(R({},(c=Qe[i])===null||c===void 0?void 0:c.component),l)}}),{token:r,keys:n,flush:o}};function Ye(e,t,n){if(typeof n=="function"){var r;return n(je(t,(r=t[e])!==null&&r!==void 0?r:{}))}return n??{}}function sn(e){return e==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return"max(".concat(r.map(function(s){return Ke(s)}).join(","),")")},min:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return"min(".concat(r.map(function(s){return Ke(s)}).join(","),")")}}}var cn=function(){return{}};function ln(e){var t=e.useCSP,n=t===void 0?cn:t,r=e.useToken,o=e.usePrefix,s=e.getResetStyles,i=e.getCommonStyle,l=e.getCompUnitless;function c(f,E,h,d){var y=Array.isArray(f)?f[0]:f;function w(g){return"".concat(String(y)).concat(g.slice(0,1).toUpperCase()).concat(g.slice(1))}var b=(d==null?void 0:d.unitless)||{},O=typeof l=="function"?l(f):{},N=R(R({},O),{},z({},w("zIndexPopup"),!0));Object.keys(b).forEach(function(g){N[w(g)]=b[g]});var I=R(R({},d),{},{unitless:N,prefixToken:w}),x=p(f,E,h,I),k=v(y,h,I);return function(g){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g,T=x(g,u),S=D(T,2),L=S[1],j=k(u),A=D(j,2),K=A[0],M=A[1];return[K,L,M]}}function v(f,E,h){var d=h.unitless,y=h.injectStyle,w=y===void 0?!0:y,b=h.prefixToken,O=h.ignore,N=function(k){var g=k.rootCls,u=k.cssVar,T=u===void 0?{}:u,S=r(),L=S.realToken;return Pt({path:[f],prefix:T.prefix,key:T.key,unitless:d,ignore:O,token:L,scope:g},function(){var j=Ye(f,L,E),A=We(f,L,j,{deprecatedTokens:h==null?void 0:h.deprecatedTokens});return Object.keys(j).forEach(function(K){A[b(K)]=A[K],delete A[K]}),A}),null},I=function(k){var g=r(),u=g.cssVar;return[function(T){return w&&u?U.createElement(U.Fragment,null,U.createElement(N,{rootCls:k,cssVar:u,component:f}),T):T},u==null?void 0:u.key]};return I}function p(f,E,h){var d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},y=Array.isArray(f)?f:[f,f],w=D(y,1),b=w[0],O=y.join("-");return function(N){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N,x=r(),k=x.theme,g=x.realToken,u=x.hashId,T=x.token,S=x.cssVar,L=o(),j=L.rootPrefixCls,A=L.iconPrefixCls,K=n(),M=S?"css":"js",V=_t(function(){var $=new Set;return S&&Object.keys(d.unitless||{}).forEach(function(H){$.add(we(H,S.prefix)),$.add(we(H,Ge(b,S.prefix)))}),on(M,$)},[M,b,S==null?void 0:S.prefix]),G=sn(M),ee=G.max,re=G.min,ae={theme:k,token:T,hashId:u,nonce:function(){return K.nonce},clientOnly:d.clientOnly,layer:{name:"antd"},order:d.order||-999};Ve(R(R({},ae),{},{clientOnly:!1,path:["Shared",j]}),function(){return typeof s=="function"?s(T):[]});var te=Ve(R(R({},ae),{},{path:[O,N,A]}),function(){if(d.injectStyle===!1)return[];var $=an(T),H=$.token,_=$.flush,F=Ye(b,g,h),fe=".".concat(N),se=We(b,g,F,{deprecatedTokens:d.deprecatedTokens});S&&J(F)==="object"&&Object.keys(F).forEach(function(ie){F[ie]="var(".concat(we(ie,Ge(b,S.prefix)),")")});var q=je(H,{componentCls:fe,prefixCls:N,iconCls:".".concat(A),antCls:".".concat(j),calc:V,max:ee,min:re},S?F:se),X=E(q,{hashId:u,prefixCls:N,rootPrefixCls:j,iconPrefixCls:A});_(b,se);var Oe=typeof i=="function"?i(q,N,I,d.resetFont):null;return[d.resetStyle===!1?null:Oe,X]});return[te,u]}}function C(f,E,h){var d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},y=p(f,E,h,R({resetStyle:!1,order:-998},d)),w=function(O){var N=O.prefixCls,I=O.rootCls,x=I===void 0?N:I;return y(N,x),null};return w}return{genStyleHooks:c,genSubStyleComponent:C,genComponentStyleHook:p}}const{genStyleHooks:un,genComponentStyleHook:tr,genSubStyleComponent:nr}=ln({usePrefix:()=>{const{getPrefixCls:e,iconPrefixCls:t}=a.useContext(me);return{rootPrefixCls:e(),iconPrefixCls:t}},useToken:()=>{const[e,t,n,r,o]=lt();return{theme:e,realToken:t,hashId:n,token:r,cssVar:o}},useCSP:()=>{const{csp:e,iconPrefixCls:t}=a.useContext(me);return At(t,e),e??{}},getResetStyles:e=>[{"&":wt(e)}],getCommonStyle:Mt,getCompUnitless:()=>kt});var fn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};function gt(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}function dn(e){return gt(e)instanceof ShadowRoot}function vn(e){return dn(e)?gt(e):null}function mn(e){return e.replace(/-(.)/g,function(t,n){return n.toUpperCase()})}function gn(e,t){Lt(e,"[@ant-design/icons] ".concat(t))}function qe(e){return J(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(J(e.icon)==="object"||typeof e.icon=="function")}function Xe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,n){var r=e[n];switch(n){case"class":t.className=r,delete t.class;break;default:delete t[n],t[mn(n)]=r}return t},{})}function Le(e,t,n){return n?U.createElement(e.tag,R(R({key:t},Xe(e.attrs)),n),(e.children||[]).map(function(r,o){return Le(r,"".concat(t,"-").concat(e.tag,"-").concat(o))})):U.createElement(e.tag,R({key:t},Xe(e.attrs)),(e.children||[]).map(function(r,o){return Le(r,"".concat(t,"-").concat(e.tag,"-").concat(o))}))}function Ct(e){return Ft(e)[0]}function pt(e){return e?Array.isArray(e)?e:[e]:[]}var Cn=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,pn=function(t){var n=a.useContext(ut),r=n.csp,o=n.prefixCls,s=Cn;o&&(s=s.replace(/anticon/g,o)),a.useEffect(function(){var i=t.current,l=vn(i);jt(s,"@ant-design-icons",{prepend:!0,csp:r,attachTo:l})},[])},hn=["icon","className","onClick","style","primaryColor","secondaryColor"],ve={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function yn(e){var t=e.primaryColor,n=e.secondaryColor;ve.primaryColor=t,ve.secondaryColor=n||Ct(t),ve.calculated=!!n}function Sn(){return R({},ve)}var ue=function(t){var n=t.icon,r=t.className,o=t.onClick,s=t.style,i=t.primaryColor,l=t.secondaryColor,c=Te(t,hn),v=a.useRef(),p=ve;if(i&&(p={primaryColor:i,secondaryColor:l||Ct(i)}),pn(v),gn(qe(n),"icon should be icon definiton, but got ".concat(n)),!qe(n))return null;var C=n;return C&&typeof C.icon=="function"&&(C=R(R({},C),{},{icon:C.icon(p.primaryColor,p.secondaryColor)})),Le(C.icon,"svg-".concat(C.name),R(R({className:r,onClick:o,style:s,"data-icon":C.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c),{},{ref:v}))};ue.displayName="IconReact";ue.getTwoToneColors=Sn;ue.setTwoToneColors=yn;function ht(e){var t=pt(e),n=D(t,2),r=n[0],o=n[1];return ue.setTwoToneColors({primaryColor:r,secondaryColor:o})}function En(){var e=ue.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var xn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];ht(Ut.primary);var Z=a.forwardRef(function(e,t){var n=e.className,r=e.icon,o=e.spin,s=e.rotate,i=e.tabIndex,l=e.onClick,c=e.twoToneColor,v=Te(e,xn),p=a.useContext(ut),C=p.prefixCls,f=C===void 0?"anticon":C,E=p.rootClassName,h=Q(E,f,z(z({},"".concat(f,"-").concat(r.name),!!r.name),"".concat(f,"-spin"),!!o||r.name==="loading"),n),d=i;d===void 0&&l&&(d=-1);var y=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,w=pt(c),b=D(w,2),O=b[0],N=b[1];return a.createElement("span",W({role:"img","aria-label":r.name},v,{ref:t,tabIndex:d,onClick:l,className:h}),a.createElement(ue,{icon:r,primaryColor:O,secondaryColor:N,style:y}))});Z.displayName="AntdIcon";Z.getTwoToneColor=En;Z.setTwoToneColor=ht;var Nn=function(t,n){return a.createElement(Z,W({},t,{ref:n,icon:fn}))},Tn=a.forwardRef(Nn),bn={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"},On=function(t,n){return a.createElement(Z,W({},t,{ref:n,icon:bn}))},In=a.forwardRef(On),Rn={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},_n=function(t,n){return a.createElement(Z,W({},t,{ref:n,icon:Rn}))},Pn=a.forwardRef(_n),An={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},wn=function(t,n){return a.createElement(Z,W({},t,{ref:n,icon:An}))},Mn=a.forwardRef(wn),kn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},Ln=function(t,n){return a.createElement(Z,W({},t,{ref:n,icon:kn}))},Fn=a.forwardRef(Ln),jn=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,Un=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,$n="".concat(jn," ").concat(Un).split(/[\s\n]+/),Dn="aria-",Hn="data-";function Ze(e,t){return e.indexOf(t)===0}function Kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;t===!1?n={aria:!0,data:!0,attr:!0}:t===!0?n={aria:!0}:n=R({},t);var r={};return Object.keys(e).forEach(function(o){(n.aria&&(o==="role"||Ze(o,Dn))||n.data&&Ze(o,Hn)||n.attr&&$n.includes(o))&&(r[o]=e[o])}),r}const yt=e=>{const[,,,,t]=lt();return t?`${e}-css-var`:""};var m={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var n=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||n>=m.F1&&n<=m.F12)return!1;switch(n){case m.ALT:case m.CAPS_LOCK:case m.CONTEXT_MENU:case m.CTRL:case m.DOWN:case m.END:case m.ESC:case m.HOME:case m.INSERT:case m.LEFT:case m.MAC_FF_META:case m.META:case m.NUMLOCK:case m.NUM_CENTER:case m.PAGE_DOWN:case m.PAGE_UP:case m.PAUSE:case m.PRINT_SCREEN:case m.RIGHT:case m.SHIFT:case m.UP:case m.WIN_KEY:case m.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=m.ZERO&&t<=m.NINE||t>=m.NUM_ZERO&&t<=m.NUM_MULTIPLY||t>=m.A&&t<=m.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case m.SPACE:case m.QUESTION_MARK:case m.NUM_PLUS:case m.NUM_MINUS:case m.NUM_PERIOD:case m.NUM_DIVISION:case m.SEMICOLON:case m.DASH:case m.EQUALS:case m.COMMA:case m.PERIOD:case m.SLASH:case m.APOSTROPHE:case m.SINGLE_QUOTE:case m.OPEN_SQUARE_BRACKET:case m.BACKSLASH:case m.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},St=a.forwardRef(function(e,t){var n=e.prefixCls,r=e.style,o=e.className,s=e.duration,i=s===void 0?4.5:s,l=e.showProgress,c=e.pauseOnHover,v=c===void 0?!0:c,p=e.eventKey,C=e.content,f=e.closable,E=e.closeIcon,h=E===void 0?"x":E,d=e.props,y=e.onClick,w=e.onNoticeClose,b=e.times,O=e.hovering,N=a.useState(!1),I=D(N,2),x=I[0],k=I[1],g=a.useState(0),u=D(g,2),T=u[0],S=u[1],L=a.useState(0),j=D(L,2),A=j[0],K=j[1],M=O||x,V=i>0&&l,G=function(){w(p)},ee=function(_){(_.key==="Enter"||_.code==="Enter"||_.keyCode===m.ENTER)&&G()};a.useEffect(function(){if(!M&&i>0){var H=Date.now()-A,_=setTimeout(function(){G()},i*1e3-A);return function(){v&&clearTimeout(_),K(Date.now()-H)}}},[i,M,b]),a.useEffect(function(){if(!M&&V&&(v||A===0)){var H=performance.now(),_,F=function fe(){cancelAnimationFrame(_),_=requestAnimationFrame(function(se){var q=se+A-H,X=Math.min(q/(i*1e3),1);S(X*100),X<1&&fe()})};return F(),function(){v&&cancelAnimationFrame(_)}}},[i,A,M,V,b]);var re=a.useMemo(function(){return J(f)==="object"&&f!==null?f:f?{closeIcon:h}:{}},[f,h]),ae=Kn(re,!0),te=100-(!T||T<0?0:T>100?100:T),$="".concat(n,"-notice");return a.createElement("div",W({},d,{ref:t,className:Q($,o,z({},"".concat($,"-closable"),f)),style:r,onMouseEnter:function(_){var F;k(!0),d==null||(F=d.onMouseEnter)===null||F===void 0||F.call(d,_)},onMouseLeave:function(_){var F;k(!1),d==null||(F=d.onMouseLeave)===null||F===void 0||F.call(d,_)},onClick:y}),a.createElement("div",{className:"".concat($,"-content")},C),f&&a.createElement("a",W({tabIndex:0,className:"".concat($,"-close"),onKeyDown:ee,"aria-label":"Close"},ae,{onClick:function(_){_.preventDefault(),_.stopPropagation(),G()}}),re.closeIcon),V&&a.createElement("progress",{className:"".concat($,"-progress"),max:"100",value:te},te+"%"))}),Et=U.createContext({}),Vn=function(t){var n=t.children,r=t.classNames;return U.createElement(Et.Provider,{value:{classNames:r}},n)},Je=8,et=3,tt=16,zn=function(t){var n={offset:Je,threshold:et,gap:tt};if(t&&J(t)==="object"){var r,o,s;n.offset=(r=t.offset)!==null&&r!==void 0?r:Je,n.threshold=(o=t.threshold)!==null&&o!==void 0?o:et,n.gap=(s=t.gap)!==null&&s!==void 0?s:tt}return[!!t,n]},Bn=["className","style","classNames","styles"],Gn=function(t){var n=t.configList,r=t.placement,o=t.prefixCls,s=t.className,i=t.style,l=t.motion,c=t.onAllNoticeRemoved,v=t.onNoticeClose,p=t.stack,C=a.useContext(Et),f=C.classNames,E=a.useRef({}),h=a.useState(null),d=D(h,2),y=d[0],w=d[1],b=a.useState([]),O=D(b,2),N=O[0],I=O[1],x=n.map(function(M){return{config:M,key:String(M.key)}}),k=zn(p),g=D(k,2),u=g[0],T=g[1],S=T.offset,L=T.threshold,j=T.gap,A=u&&(N.length>0||x.length<=L),K=typeof l=="function"?l(r):l;return a.useEffect(function(){u&&N.length>1&&I(function(M){return M.filter(function(V){return x.some(function(G){var ee=G.key;return V===ee})})})},[N,x,u]),a.useEffect(function(){var M;if(u&&E.current[(M=x[x.length-1])===null||M===void 0?void 0:M.key]){var V;w(E.current[(V=x[x.length-1])===null||V===void 0?void 0:V.key])}},[x,u]),U.createElement($t,W({key:r,className:Q(o,"".concat(o,"-").concat(r),f==null?void 0:f.list,s,z(z({},"".concat(o,"-stack"),!!u),"".concat(o,"-stack-expanded"),A)),style:i,keys:x,motionAppear:!0},K,{onAllRemoved:function(){c(r)}}),function(M,V){var G=M.config,ee=M.className,re=M.style,ae=M.index,te=G,$=te.key,H=te.times,_=String($),F=G,fe=F.className,se=F.style,q=F.classNames,X=F.styles,Oe=Te(F,Bn),ie=x.findIndex(function(ye){return ye.key===_}),he={};if(u){var de=x.length-1-(ie>-1?ie:ae-1),De=r==="top"||r==="bottom"?"-50%":"0";if(de>0){var Ie,Re,_e;he.height=A?(Ie=E.current[_])===null||Ie===void 0?void 0:Ie.offsetHeight:y==null?void 0:y.offsetHeight;for(var He=0,Pe=0;Pe<de;Pe++){var Ae;He+=((Ae=E.current[x[x.length-1-Pe].key])===null||Ae===void 0?void 0:Ae.offsetHeight)+j}var Ot=(A?He:de*S)*(r.startsWith("top")?1:-1),It=!A&&y!==null&&y!==void 0&&y.offsetWidth&&(Re=E.current[_])!==null&&Re!==void 0&&Re.offsetWidth?((y==null?void 0:y.offsetWidth)-S*2*(de<3?de:3))/((_e=E.current[_])===null||_e===void 0?void 0:_e.offsetWidth):1;he.transform="translate3d(".concat(De,", ").concat(Ot,"px, 0) scaleX(").concat(It,")")}else he.transform="translate3d(".concat(De,", 0, 0)")}return U.createElement("div",{ref:V,className:Q("".concat(o,"-notice-wrapper"),ee,q==null?void 0:q.wrapper),style:R(R(R({},re),he),X==null?void 0:X.wrapper),onMouseEnter:function(){return I(function(ne){return ne.includes(_)?ne:[].concat(ce(ne),[_])})},onMouseLeave:function(){return I(function(ne){return ne.filter(function(Rt){return Rt!==_})})}},U.createElement(St,W({},Oe,{ref:function(ne){ie>-1?E.current[_]=ne:delete E.current[_]},prefixCls:o,classNames:q,styles:X,className:Q(fe,f==null?void 0:f.notice),style:se,times:H,key:$,eventKey:$,onNoticeClose:v,hovering:u&&N.length>0})))})},Wn=a.forwardRef(function(e,t){var n=e.prefixCls,r=n===void 0?"rc-notification":n,o=e.container,s=e.motion,i=e.maxCount,l=e.className,c=e.style,v=e.onAllRemoved,p=e.stack,C=e.renderNotifications,f=a.useState([]),E=D(f,2),h=E[0],d=E[1],y=function(u){var T,S=h.find(function(L){return L.key===u});S==null||(T=S.onClose)===null||T===void 0||T.call(S),d(function(L){return L.filter(function(j){return j.key!==u})})};a.useImperativeHandle(t,function(){return{open:function(u){d(function(T){var S=ce(T),L=S.findIndex(function(K){return K.key===u.key}),j=R({},u);if(L>=0){var A;j.times=(((A=T[L])===null||A===void 0?void 0:A.times)||0)+1,S[L]=j}else j.times=0,S.push(j);return i>0&&S.length>i&&(S=S.slice(-i)),S})},close:function(u){y(u)},destroy:function(){d([])}}});var w=a.useState({}),b=D(w,2),O=b[0],N=b[1];a.useEffect(function(){var g={};h.forEach(function(u){var T=u.placement,S=T===void 0?"topRight":T;S&&(g[S]=g[S]||[],g[S].push(u))}),Object.keys(O).forEach(function(u){g[u]=g[u]||[]}),N(g)},[h]);var I=function(u){N(function(T){var S=R({},T),L=S[u]||[];return L.length||delete S[u],S})},x=a.useRef(!1);if(a.useEffect(function(){Object.keys(O).length>0?x.current=!0:x.current&&(v==null||v(),x.current=!1)},[O]),!o)return null;var k=Object.keys(O);return Dt.createPortal(a.createElement(a.Fragment,null,k.map(function(g){var u=O[g],T=a.createElement(Gn,{key:g,configList:u,placement:g,prefixCls:r,className:l==null?void 0:l(g),style:c==null?void 0:c(g),motion:s,onNoticeClose:y,onAllNoticeRemoved:I,stack:p});return C?C(T,{prefixCls:r,key:g}):T})),o)}),Qn=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],Yn=function(){return document.body},nt=0;function qn(){for(var e={},t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(o){o&&Object.keys(o).forEach(function(s){var i=o[s];i!==void 0&&(e[s]=i)})}),e}function Xn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,n=t===void 0?Yn:t,r=e.motion,o=e.prefixCls,s=e.maxCount,i=e.className,l=e.style,c=e.onAllRemoved,v=e.stack,p=e.renderNotifications,C=Te(e,Qn),f=a.useState(),E=D(f,2),h=E[0],d=E[1],y=a.useRef(),w=a.createElement(Wn,{container:h,ref:y,prefixCls:o,motion:r,maxCount:s,className:i,style:l,onAllRemoved:c,stack:v,renderNotifications:p}),b=a.useState([]),O=D(b,2),N=O[0],I=O[1],x=a.useMemo(function(){return{open:function(g){var u=qn(C,g);(u.key===null||u.key===void 0)&&(u.key="rc-notification-".concat(nt),nt+=1),I(function(T){return[].concat(ce(T),[{type:"open",config:u}])})},close:function(g){I(function(u){return[].concat(ce(u),[{type:"close",key:g}])})},destroy:function(){I(function(g){return[].concat(ce(g),[{type:"destroy"}])})}}},[]);return a.useEffect(function(){d(n())}),a.useEffect(function(){y.current&&N.length&&(N.forEach(function(k){switch(k.type){case"open":y.current.open(k.config);break;case"close":y.current.close(k.key);break;case"destroy":y.current.destroy();break}}),I(function(k){return k.filter(function(g){return!N.includes(g)})}))},[N]),[x,w]}var Zn={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},Jn=function(t,n){return a.createElement(Z,W({},t,{ref:n,icon:Zn}))},eo=a.forwardRef(Jn);const to=100,no=10,oo=to*no,ro=e=>{const{componentCls:t,iconCls:n,boxShadow:r,colorText:o,colorSuccess:s,colorError:i,colorWarning:l,colorInfo:c,fontSizeLG:v,motionEaseInOutCirc:p,motionDurationSlow:C,marginXS:f,paddingXS:E,borderRadiusLG:h,zIndexPopup:d,contentPadding:y,contentBg:w}=e,b=`${t}-notice`,O=new Be("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:E,transform:"translateY(0)",opacity:1}}),N=new Be("MessageMoveOut",{"0%":{maxHeight:e.height,padding:E,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),I={padding:E,textAlign:"center",[`${t}-custom-content`]:{display:"flex",alignItems:"center"},[`${t}-custom-content > ${n}`]:{marginInlineEnd:f,fontSize:v},[`${b}-content`]:{display:"inline-block",padding:y,background:w,borderRadius:h,boxShadow:r,pointerEvents:"all"},[`${t}-success > ${n}`]:{color:s},[`${t}-error > ${n}`]:{color:i},[`${t}-warning > ${n}`]:{color:l},[`${t}-info > ${n},
      ${t}-loading > ${n}`]:{color:c}};return[{[t]:Object.assign(Object.assign({},Ht(e)),{color:o,position:"fixed",top:f,width:"100%",pointerEvents:"none",zIndex:d,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:O,animationDuration:C,animationPlayState:"paused",animationTimingFunction:p},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:N,animationDuration:C,animationPlayState:"paused",animationTimingFunction:p},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${b}-wrapper`]:Object.assign({},I)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},I),{padding:0,textAlign:"start"})}]},ao=e=>({zIndexPopup:e.zIndexPopupBase+oo+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}),xt=un("Message",e=>{const t=je(e,{height:150});return[ro(t)]},ao);var so=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const io={info:a.createElement(Fn,null),success:a.createElement(Tn,null),error:a.createElement(In,null),warning:a.createElement(Mn,null),loading:a.createElement(eo,null)},Nt=e=>{let{prefixCls:t,type:n,icon:r,children:o}=e;return a.createElement("div",{className:Q(`${t}-custom-content`,`${t}-${n}`)},r||io[n],a.createElement("span",null,o))},co=e=>{const{prefixCls:t,className:n,type:r,icon:o,content:s}=e,i=so(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:l}=a.useContext(me),c=t||l("message"),v=yt(c),[p,C,f]=xt(c,v);return p(a.createElement(St,Object.assign({},i,{prefixCls:c,className:Q(n,C,`${c}-notice-pure-panel`,f,v),eventKey:"pure",duration:null,content:a.createElement(Nt,{prefixCls:c,type:r,icon:o},s)})))};function lo(e,t){return{motionName:t??`${e}-move-up`}}function Ue(e){let t;const n=new Promise(o=>{t=e(()=>{o(!0)})}),r=()=>{t==null||t()};return r.then=(o,s)=>n.then(o,s),r.promise=n,r}var uo=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const fo=8,vo=3,mo=e=>{let{children:t,prefixCls:n}=e;const r=yt(n),[o,s,i]=xt(n,r);return o(a.createElement(Vn,{classNames:{list:Q(s,i,r)}},t))},go=(e,t)=>{let{prefixCls:n,key:r}=t;return a.createElement(mo,{prefixCls:n,key:r},e)},Co=a.forwardRef((e,t)=>{const{top:n,prefixCls:r,getContainer:o,maxCount:s,duration:i=vo,rtl:l,transitionName:c,onAllRemoved:v}=e,{getPrefixCls:p,getPopupContainer:C,message:f,direction:E}=a.useContext(me),h=r||p("message"),d=()=>({left:"50%",transform:"translateX(-50%)",top:n??fo}),y=()=>Q({[`${h}-rtl`]:l??E==="rtl"}),w=()=>lo(h,c),b=a.createElement("span",{className:`${h}-close-x`},a.createElement(Pn,{className:`${h}-close-icon`})),[O,N]=Xn({prefixCls:h,style:d,className:y,motion:w,closable:!1,closeIcon:b,duration:i,getContainer:()=>(o==null?void 0:o())||(C==null?void 0:C())||document.body,maxCount:s,onAllRemoved:v,renderNotifications:go});return a.useImperativeHandle(t,()=>Object.assign(Object.assign({},O),{prefixCls:h,message:f})),N});let ot=0;function Tt(e){const t=a.useRef(null);return[a.useMemo(()=>{const r=c=>{var v;(v=t.current)===null||v===void 0||v.close(c)},o=c=>{if(!t.current){const x=()=>{};return x.then=()=>{},x}const{open:v,prefixCls:p,message:C}=t.current,f=`${p}-notice`,{content:E,icon:h,type:d,key:y,className:w,style:b,onClose:O}=c,N=uo(c,["content","icon","type","key","className","style","onClose"]);let I=y;return I==null&&(ot+=1,I=`antd-message-${ot}`),Ue(x=>(v(Object.assign(Object.assign({},N),{key:I,content:a.createElement(Nt,{prefixCls:p,type:d,icon:h},E),placement:"top",className:Q(d&&`${f}-${d}`,w,C==null?void 0:C.className),style:Object.assign(Object.assign({},C==null?void 0:C.style),b),onClose:()=>{O==null||O(),x()}})),()=>{r(I)}))},i={open:o,destroy:c=>{var v;c!==void 0?r(c):(v=t.current)===null||v===void 0||v.destroy()}};return["info","success","warning","error","loading"].forEach(c=>{const v=(p,C,f)=>{let E;p&&typeof p=="object"&&"content"in p?E=p:E={content:p};let h,d;typeof C=="function"?d=C:(h=C,d=f);const y=Object.assign(Object.assign({onClose:d,duration:h},E),{type:c});return o(y)};i[c]=v}),i},[]),a.createElement(Co,Object.assign({key:"message-holder"},e,{ref:t}))]}function po(e){return Tt(e)}var pe=R({},Kt),ho=pe.version,yo=pe.render;pe.unmountComponentAtNode;var $e;try{var So=Number((ho||"").split(".")[0]);So>=18&&($e=pe.createRoot)}catch{}function rt(e){var t=pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&J(t)==="object"&&(t.usingClientEntryPoint=e)}var at="__rc_react_root__";function Eo(e,t){rt(!0);var n=t[at]||$e(t);rt(!1),n.render(e),t[at]=n}function xo(e,t){yo(e,t)}function No(e,t){if($e){Eo(e,t);return}xo(e,t)}const To=U.createContext({});let B=null,oe=e=>e(),ge=[],Ce={};function st(){const{getContainer:e,duration:t,rtl:n,maxCount:r,top:o}=Ce,s=(e==null?void 0:e())||document.body;return{getContainer:()=>s,duration:t,rtl:n,maxCount:r,top:o}}const bo=U.forwardRef((e,t)=>{const{messageConfig:n,sync:r}=e,{getPrefixCls:o}=a.useContext(me),s=Ce.prefixCls||o("message"),i=a.useContext(To),[l,c]=Tt(Object.assign(Object.assign(Object.assign({},n),{prefixCls:s}),i.message));return U.useImperativeHandle(t,()=>{const v=Object.assign({},l);return Object.keys(v).forEach(p=>{v[p]=function(){return r(),l[p].apply(l,arguments)}}),{instance:v,sync:r}}),c}),Oo=U.forwardRef((e,t)=>{const[n,r]=U.useState(st),o=()=>{r(st)};U.useEffect(o,[]);const s=zt(),i=s.getRootPrefixCls(),l=s.getIconPrefixCls(),c=s.getTheme(),v=U.createElement(bo,{ref:t,sync:o,messageConfig:n});return U.createElement(Vt,{prefixCls:i,iconPrefixCls:l,theme:c},s.holderRender?s.holderRender(v):v)});function be(){if(!B){const e=document.createDocumentFragment(),t={fragment:e};B=t,oe(()=>{No(U.createElement(Oo,{ref:n=>{const{instance:r,sync:o}=n||{};Promise.resolve().then(()=>{!t.instance&&r&&(t.instance=r,t.sync=o,be())})}}),e)});return}B.instance&&(ge.forEach(e=>{const{type:t,skipped:n}=e;if(!n)switch(t){case"open":{oe(()=>{const r=B.instance.open(Object.assign(Object.assign({},Ce),e.config));r==null||r.then(e.resolve),e.setCloseFn(r)});break}case"destroy":oe(()=>{B==null||B.instance.destroy(e.key)});break;default:oe(()=>{var r;const o=(r=B.instance)[t].apply(r,ce(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),ge=[])}function Io(e){Ce=Object.assign(Object.assign({},Ce),e),oe(()=>{var t;(t=B==null?void 0:B.sync)===null||t===void 0||t.call(B)})}function Ro(e){const t=Ue(n=>{let r;const o={type:"open",config:e,resolve:n,setCloseFn:s=>{r=s}};return ge.push(o),()=>{r?oe(()=>{r()}):o.skipped=!0}});return be(),t}function _o(e,t){const n=Ue(r=>{let o;const s={type:e,args:t,resolve:r,setCloseFn:i=>{o=i}};return ge.push(s),()=>{o?oe(()=>{o()}):s.skipped=!0}});return be(),n}const Po=e=>{ge.push({type:"destroy",key:e}),be()},Ao=["success","info","warning","error","loading"],wo={open:Ro,destroy:Po,config:Io,useMessage:po,_InternalPanelDoNotUseOrYouWillBeFired:co},bt=wo;Ao.forEach(e=>{bt[e]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _o(e,n)}});function Mo(e){return qt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M321.94 98 158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"},child:[]}]})(e)}const ko=Y(Fe)`
  height: 5rem;
  padding: 0 2rem;
`,Lo=Y(Mo)`
  margin-right: 1rem;
  padding: 1rem;
  background: var(--color-gray-3);
  border-radius: var(--radius-button);
`,Fo=Y.span`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
`;function jo(){var i,l,c;const e=Bt(),t=ft(),n=a.useMemo(()=>t.at(-1),[t]),r=(i=n==null?void 0:n.handle)==null?void 0:i.title,o=(l=n==null?void 0:n.handle)==null?void 0:l.needBackIcon,s=(c=n==null?void 0:n.handle)==null?void 0:c.rightArea;return P.jsx("header",{children:P.jsxs(ko,{$justifyContent:Qt.between,children:[P.jsxs(le,{$alignItems:ze.center,children:[o&&P.jsx(Lo,{onClick:()=>e(-1)}),P.jsx(Fo,{children:r})]}),P.jsx(le,{$alignItems:ze.center,children:s})]})})}const Uo=Y(Gt)`
  display: flex;
  color: var(--color-gray-5);
  transition: color 300ms;

  &:hover {
    color: var(--color-hover);
  }
`,$o=Y.span`
  display: flex;
  color: var(--color-active);
`,Do=Y(le)`
  font-size: 1.4rem;
`;function Ho(){const e=ft(),t=a.useMemo(()=>e.map(n=>{var r,o;return{label:((r=n.handle)==null?void 0:r.crumbLabel)||((o=n.handle)==null?void 0:o.title),path:n.pathname}}).filter(n=>n.label),[e]);return P.jsx(Do,{children:t.map((n,r,o)=>r<o.length-1?P.jsxs(Uo,{to:n.path,children:["/",n.label]},n.path):P.jsxs($o,{children:["/",n.label]},n.path))})}const Ko=Y(Fe)`
  padding: 1rem 2rem;
`;function Vo(){return P.jsx("footer",{children:P.jsx(Ko,{children:P.jsx(Ho,{})})})}const zo=Y(Zt)`
  margin: 0 0.5rem;
`,Bo=a.memo(()=>P.jsx(zo,{needActiveStyle:!0,direction:Ee.column,shadowOption:{$blur:"0.8rem"},appListHander:e=>[{name:"首页",path:"/",icon:P.jsx(Xt,{})},...e]})),Go=Y(Fe)`
  height: 100%;
`,Wo=Y.aside`
  position: relative;
`;function Qo(){return P.jsx(Wo,{children:P.jsx(Go,{$direction:Ee.column,children:P.jsx(Bo,{})})})}function Yo(){const[e,t]=bt.useMessage(),{messageInfo:n}=Jt("messageInfo");return a.useEffect(()=>{n&&e.open(n)},[n,e]),t}function or(){return P.jsxs(P.Fragment,{children:[P.jsx(Yt,{}),P.jsx(Yo,{}),P.jsxs(le,{$flex:"1",children:[P.jsx(Qo,{}),P.jsxs(le,{$flex:"1",$direction:Ee.column,style:{overflow:"hidden"},children:[P.jsx(jo,{}),P.jsx(le,{$flex:"1",$direction:Ee.column,style:{overflowY:"auto"},children:P.jsx(Wt,{})}),P.jsx(Vo,{})]})]})]})}export{or as Component};