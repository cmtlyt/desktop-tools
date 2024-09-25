import{r as i,L as a,N,J as C}from"./index-CTC7TyoZ.js";import{d as l,a as h,T as g,e as R,S as F,b as I,B as A,c as $}from"./button-C93UrfCU.js";import{B as T}from"./index-Dq6RwU9W.js";import{l as L}from"./logger-aHjIWQC2.js";var c=(e=>(e.PAID="PAID",e.UNPAID="UNPAID",e.REFUNDED="REFUNDED",e.CANCELED="CANCELED",e.INCOME="INCOME",e))(c||{});function P(e,t){const n=new Date(e),r={yyyy:n.getFullYear(),yy:n.getFullYear()%100,MM:n.getMonth()+1,DD:n.getDate(),hh:n.getHours(),mm:n.getMinutes(),ss:n.getSeconds(),SS:n.getMilliseconds()};return t.replace(/[YyMDhmsS]+/g,s=>{var o;return((o=r[s])==null?void 0:o.toString().padStart(2,"0"))||s})}const W=i.memo(e=>{const{date:t,children:n,format:r="yyyy-MM-DD",className:s}=e,o=t||n;if(!o)return null;const p=P(o,r);return a.jsx("span",{className:s,children:p})});const x=Symbol&&Symbol("empty")||{},z=Reflect!=null&&Reflect.apply?e=>{let t=x;return(...n)=>(t===x&&(t=e()),typeof t!="function"?t:Reflect.apply(t,null,n))}:e=>{let t=x;return(...n)=>(t===x&&(t=e()),typeof t!="function"?t:t.apply(null,n))};function B(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var d=1e3,m=60*d,f=60*m,u=24*f,O=7*u,k=365.25*u;function y(e,t,n,r){var s=t>=1.5*n;return Math.round(e/n)+" "+r+(s?"s":"")}B(function(e,t){t=t||{};var n=typeof e;if(n==="string"&&e.length>0)return function(r){if(!((r=String(r)).length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(s){var o=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return o*k;case"weeks":case"week":case"w":return o*O;case"days":case"day":case"d":return o*u;case"hours":case"hour":case"hrs":case"hr":case"h":return o*f;case"minutes":case"minute":case"mins":case"min":case"m":return o*m;case"seconds":case"second":case"secs":case"sec":case"s":return o*d;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}(e);if(n==="number"&&isFinite(e))return t.long?function(r){var s=Math.abs(r);return s>=u?y(r,s,u,"day"):s>=f?y(r,s,f,"hour"):s>=m?y(r,s,m,"minute"):s>=d?y(r,s,d,"second"):r+" ms"}(e):function(r){var s=Math.abs(r);return s>=u?Math.round(r/u)+"d":s>=f?Math.round(r/f)+"h":s>=m?Math.round(r/m)+"m":s>=d?Math.round(r/d)+"s":r+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))});function U(e,t=1e3,n=!1){if(t<=0)return e;let r=null;return z(()=>n?(...s)=>{r?clearTimeout(r):e.apply(null,s),r=setTimeout(()=>{r=null},t)}:(...s)=>{r&&clearTimeout(r),r=setTimeout(()=>{e.apply(null,s)},t)})}const H=document.documentElement,S=()=>parseFloat(getComputedStyle(H).fontSize);function Y(){const[e,t]=i.useState(S());return i.useEffect(()=>{t(S());const n=U(()=>t(S()),300);return window.addEventListener("resize",n),window.addEventListener("orientationchange",n),()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)}},[]),e}const j=l(h)`
  overflow: hidden;
`,G=l.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,J=i.forwardRef(function(e,t){const{leftArea:n,rightArea:r,children:s}=e,o=i.useRef(null),p=i.useRef(null),[D,M]=i.useState({leftAreaWidth:0,rightAreaWidth:0}),w=Y(),v=()=>{const E={leftAreaWidth:0,rightAreaWidth:0};o.current&&(E.leftAreaWidth=o.current.offsetWidth/w),p.current&&(E.rightAreaWidth=p.current.offsetWidth/w),M(E)};return i.useEffect(v,[w]),i.useImperativeHandle(t,()=>({updateSize:v})),a.jsxs(G,{style:{"--left-area-width":`${D.leftAreaWidth}rem`,"--right-area-width":`${D.rightAreaWidth}rem`},children:[a.jsx(j,{children:a.jsx(h,{ref:o,children:n})}),a.jsx(h,{children:s}),a.jsx(j,{children:a.jsx(h,{ref:p,children:r})})]})}),b=l(R)`
  margin-right: 1rem;
`,_=i.memo(({children:e})=>{const{text:t,...n}={[c.PAID]:{$presetTheme:g.SUCCESS,text:"已支付"},[c.UNPAID]:{$presetTheme:g.PROCESSING,text:"待支付"},[c.REFUNDED]:{$presetTheme:g.WARNING,text:"已退款"},[c.CANCELED]:{$presetTheme:g.INFO,text:"已取消"},[c.INCOME]:{$presetTheme:g.SUCCESS,text:"收入"}}[e];return a.jsx(b,{...n,children:t})}),V=l(W)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,q=l.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,K=l(F)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,Q=l(T)`
  padding-left: 1rem;
`;function X(e){const{flow:t}=e,{id:n}=t;return a.jsx(Q,{wrapperProps:{$alignItems:I.center},buttons:[{text:"编辑",$presetTheme:A.PRIMARY,to:`/flow/editor/${n}`},{text:"删除",$presetTheme:A.DANGER,onClick(r){r.stopPropagation(),L.debug("delete id:",n)}}]})}function Z(e){const{flow:t,onClick:n}=e;return a.jsx(K,{onClick:n,children:a.jsxs(J,{rightArea:a.jsx(X,{flow:t}),children:[a.jsxs(h,{$flex:"1",$alignItems:I.center,children:[a.jsx(_,{children:t.status}),a.jsx(b,{children:t.account}),a.jsx(q,{children:t.title})]}),a.jsx(V,{children:t.createTime})]})},t.id)}const ee=l(h)`
  padding: 1.8rem;
`;function oe(){const e=N(),{flows:t}=e,n=C();return a.jsx(ee,{$direction:$.column,children:t.map(r=>a.jsx(Z,{flow:r,onClick:()=>n(`/flow/detail/${r.id}`)},r.id))})}async function ie(){return{flows:[{id:"1",title:"流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1",status:c.PAID,account:"流水1账号",creator:"流水1创建人",createTime:"2024/09/18"},{id:"2",title:"流水2",status:c.INCOME,account:"流水2账号",creator:"流水2创建人",createTime:"2024/09/18"}]}}function te(){return a.jsx(T,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:A.PRIMARY}]})}const ce={title:"流水列表",crumbLabel:"列表",rightArea:a.jsx(te,{})};export{oe as Component,ce as handle,ie as loader};
