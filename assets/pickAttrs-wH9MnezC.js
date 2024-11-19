import{J as B,a as w,R as b,f as c,ad as U,r as l,ae as I,af as F,e as N,_ as P,ag as K,c as W,d as x,b as _}from"./index-D9Ti2l9s.js";import{f as V}from"./asyncToGenerator-Di2GTAJM.js";function q(n){return n.replace(/-(.)/g,function(e,o){return o.toUpperCase()})}function G(n,e){B(n,"[@ant-design/icons] ".concat(e))}function S(n){return w(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(w(n.icon)==="object"||typeof n.icon=="function")}function E(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,o){var a=n[o];switch(o){case"class":e.className=a,delete e.class;break;default:delete e[o],e[q(o)]=a}return e},{})}function v(n,e,o){return o?b.createElement(n.tag,c(c({key:e},E(n.attrs)),o),(n.children||[]).map(function(a,r){return v(a,"".concat(e,"-").concat(n.tag,"-").concat(r))})):b.createElement(n.tag,c({key:e},E(n.attrs)),(n.children||[]).map(function(a,r){return v(a,"".concat(e,"-").concat(n.tag,"-").concat(r))}))}function D(n){return U(n)[0]}function L(n){return n?Array.isArray(n)?n:[n]:[]}var H=`
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
`,J=function(e){var o=l.useContext(I),a=o.csp,r=o.prefixCls,i=H;r&&(i=i.replace(/anticon/g,r)),l.useEffect(function(){var s=e.current,d=V(s);F(i,"@ant-design-icons",{prepend:!0,csp:a,attachTo:d})},[])},Q=["icon","className","onClick","style","primaryColor","secondaryColor"],f={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function X(n){var e=n.primaryColor,o=n.secondaryColor;f.primaryColor=e,f.secondaryColor=o||D(e),f.calculated=!!o}function Y(){return c({},f)}var m=function(e){var o=e.icon,a=e.className,r=e.onClick,i=e.style,s=e.primaryColor,d=e.secondaryColor,p=N(e,Q),g=l.useRef(),u=f;if(s&&(u={primaryColor:s,secondaryColor:d||D(s)}),J(g),G(S(o),"icon should be icon definiton, but got ".concat(o)),!S(o))return null;var t=o;return t&&typeof t.icon=="function"&&(t=c(c({},t),{},{icon:t.icon(u.primaryColor,u.secondaryColor)})),v(t.icon,"svg-".concat(t.name),c(c({className:a,onClick:r,style:i,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},p),{},{ref:g}))};m.displayName="IconReact";m.getTwoToneColors=Y;m.setTwoToneColors=X;function M(n){var e=L(n),o=P(e,2),a=o[0],r=o[1];return m.setTwoToneColors({primaryColor:a,secondaryColor:r})}function Z(){var n=m.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var nn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];M(K.primary);var C=l.forwardRef(function(n,e){var o=n.className,a=n.icon,r=n.spin,i=n.rotate,s=n.tabIndex,d=n.onClick,p=n.twoToneColor,g=N(n,nn),u=l.useContext(I),t=u.prefixCls,y=t===void 0?"anticon":t,R=u.rootClassName,O=W(R,y,x(x({},"".concat(y,"-").concat(a.name),!!a.name),"".concat(y,"-spin"),!!r||a.name==="loading"),o),h=s;h===void 0&&d&&(h=-1);var z=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,A=L(p),T=P(A,2),j=T[0],$=T[1];return l.createElement("span",_({role:"img","aria-label":a.name},g,{ref:e,tabIndex:h,onClick:d,className:O}),l.createElement(m,{icon:a,primaryColor:j,secondaryColor:$,style:z}))});C.displayName="AntdIcon";C.getTwoToneColor=Z;C.setTwoToneColor=M;var en={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},on=function(e,o){return l.createElement(C,_({},e,{ref:o,icon:en}))},un=l.forwardRef(on),an=`accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,tn="".concat(an," ").concat(rn).split(/[\s\n]+/),cn="aria-",ln="data-";function k(n,e){return n.indexOf(e)===0}function mn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o;e===!1?o={aria:!0,data:!0,attr:!0}:e===!0?o={aria:!0}:o=c({},e);var a={};return Object.keys(n).forEach(function(r){(o.aria&&(r==="role"||k(r,cn))||o.data&&k(r,ln)||o.attr&&tn.includes(r))&&(a[r]=n[r])}),a}export{C as I,un as R,mn as p};
