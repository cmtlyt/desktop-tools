import{bg as B,r as l,bh as I,bi as U,a7 as W,Q as b,R as w,W as s,V as P,P as N,g as F,T as x,q as D,b7 as K}from"./index-D6qafkXg.js";import{e as V}from"./asyncToGenerator-C4OknW4p.js";function q(n){return n.replace(/-(.)/g,function(e,o){return o.toUpperCase()})}function G(n,e){W(n,"[@ant-design/icons] ".concat(e))}function S(n){return b(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(b(n.icon)==="object"||typeof n.icon=="function")}function E(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,o){var a=n[o];switch(o){case"class":e.className=a,delete e.class;break;default:delete e[o],e[q(o)]=a}return e},{})}function v(n,e,o){return o?w.createElement(n.tag,s(s({key:e},E(n.attrs)),o),(n.children||[]).map(function(a,r){return v(a,"".concat(e,"-").concat(n.tag,"-").concat(r))})):w.createElement(n.tag,s({key:e},E(n.attrs)),(n.children||[]).map(function(a,r){return v(a,"".concat(e,"-").concat(n.tag,"-").concat(r))}))}function L(n){return B(n)[0]}function M(n){return n?Array.isArray(n)?n:[n]:[]}var H=`
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
`,Q=function(e){var o=l.useContext(I),a=o.csp,r=o.prefixCls,c=o.layer,t=H;r&&(t=t.replace(/anticon/g,r)),c&&(t="@layer ".concat(c,` {
`).concat(t,`
}`)),l.useEffect(function(){var d=e.current,f=V(d);U(t,"@ant-design-icons",{prepend:!c,csp:a,attachTo:f})},[])},J=["icon","className","onClick","style","primaryColor","secondaryColor"],g={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function X(n){var e=n.primaryColor,o=n.secondaryColor;g.primaryColor=e,g.secondaryColor=o||L(e),g.calculated=!!o}function Y(){return s({},g)}var m=function(e){var o=e.icon,a=e.className,r=e.onClick,c=e.style,t=e.primaryColor,d=e.secondaryColor,f=P(e,J),C=l.useRef(),u=g;if(t&&(u={primaryColor:t,secondaryColor:d||L(t)}),Q(C),G(S(o),"icon should be icon definiton, but got ".concat(o)),!S(o))return null;var i=o;return i&&typeof i.icon=="function"&&(i=s(s({},i),{},{icon:i.icon(u.primaryColor,u.secondaryColor)})),v(i.icon,"svg-".concat(i.name),s(s({className:a,onClick:r,style:c,"data-icon":i.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f),{},{ref:C}))};m.displayName="IconReact";m.getTwoToneColors=Y;m.setTwoToneColors=X;function _(n){var e=M(n),o=N(e,2),a=o[0],r=o[1];return m.setTwoToneColors({primaryColor:a,secondaryColor:r})}function Z(){var n=m.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var nn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];_(K.primary);var p=l.forwardRef(function(n,e){var o=n.className,a=n.icon,r=n.spin,c=n.rotate,t=n.tabIndex,d=n.onClick,f=n.twoToneColor,C=P(n,nn),u=l.useContext(I),i=u.prefixCls,y=i===void 0?"anticon":i,R=u.rootClassName,O=F(R,y,x(x({},"".concat(y,"-").concat(a.name),!!a.name),"".concat(y,"-spin"),!!r||a.name==="loading"),o),h=t;h===void 0&&d&&(h=-1);var z=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,A=M(f),T=N(A,2),j=T[0],$=T[1];return l.createElement("span",D({role:"img","aria-label":a.name},C,{ref:e,tabIndex:h,onClick:d,className:O}),l.createElement(m,{icon:a,primaryColor:j,secondaryColor:$,style:z}))});p.displayName="AntdIcon";p.getTwoToneColor=Z;p.setTwoToneColor=_;var en={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},on=function(e,o){return l.createElement(p,D({},e,{ref:o,icon:en}))},un=l.forwardRef(on),an=`accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`,rn=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,tn="".concat(an," ").concat(rn).split(/[\s\n]+/),cn="aria-",ln="data-";function k(n,e){return n.indexOf(e)===0}function mn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o;e===!1?o={aria:!0,data:!0,attr:!0}:e===!0?o={aria:!0}:o=s({},e);var a={};return Object.keys(n).forEach(function(r){(o.aria&&(r==="role"||k(r,cn))||o.data&&k(r,ln)||o.attr&&tn.includes(r))&&(a[r]=n[r])}),a}export{p as I,un as R,mn as p};
