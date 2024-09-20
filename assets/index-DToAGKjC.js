import{r as i,L as a,J as N,N as C}from"./index-DTR37HZ-.js";import{d as l,a as h,T as g,e as R,S as F,b as I,B as A,c as $}from"./button-CmO3GyJC.js";import{B as T}from"./index-CHeuSkoy.js";var c=(e=>(e.PAID="PAID",e.UNPAID="UNPAID",e.REFUNDED="REFUNDED",e.CANCELED="CANCELED",e.INCOME="INCOME",e))(c||{});function L(e,t){const r=new Date(e),n={yyyy:r.getFullYear(),yy:r.getFullYear()%100,MM:r.getMonth()+1,DD:r.getDate(),hh:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),SS:r.getMilliseconds()};return t.replace(/[YyMDhmsS]+/g,s=>{var o;return((o=n[s])==null?void 0:o.toString().padStart(2,"0"))||s})}const P=i.memo(e=>{const{date:t,children:r,format:n="yyyy-MM-DD",className:s}=e,o=t||r;if(!o)return null;const p=L(o,n);return a.jsx("span",{className:s,children:p})});const x=Symbol&&Symbol("empty")||{},W=Reflect!=null&&Reflect.apply?e=>{let t=x;return(...r)=>(t===x&&(t=e()),typeof t!="function"?t:Reflect.apply(t,null,r))}:e=>{let t=x;return(...r)=>(t===x&&(t=e()),typeof t!="function"?t:t.apply(null,r))};function z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var d=1e3,m=60*d,f=60*m,u=24*f,B=7*u,O=365.25*u;function y(e,t,r,n){var s=t>=1.5*r;return Math.round(e/r)+" "+n+(s?"s":"")}z(function(e,t){t=t||{};var r=typeof e;if(r==="string"&&e.length>0)return function(n){if(!((n=String(n)).length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(s){var o=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return o*O;case"weeks":case"week":case"w":return o*B;case"days":case"day":case"d":return o*u;case"hours":case"hour":case"hrs":case"hr":case"h":return o*f;case"minutes":case"minute":case"mins":case"min":case"m":return o*m;case"seconds":case"second":case"secs":case"sec":case"s":return o*d;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}(e);if(r==="number"&&isFinite(e))return t.long?function(n){var s=Math.abs(n);return s>=u?y(n,s,u,"day"):s>=f?y(n,s,f,"hour"):s>=m?y(n,s,m,"minute"):s>=d?y(n,s,d,"second"):n+" ms"}(e):function(n){var s=Math.abs(n);return s>=u?Math.round(n/u)+"d":s>=f?Math.round(n/f)+"h":s>=m?Math.round(n/m)+"m":s>=d?Math.round(n/d)+"s":n+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))});function k(e,t=1e3,r=!1){if(t<=0)return e;let n=null;return W(()=>r?(...s)=>{n?clearTimeout(n):e.apply(null,s),n=setTimeout(()=>{n=null},t)}:(...s)=>{n&&clearTimeout(n),n=setTimeout(()=>{e.apply(null,s)},t)})}const U=document.documentElement,S=()=>parseFloat(getComputedStyle(U).fontSize);function H(){const[e,t]=i.useState(S());return i.useEffect(()=>{t(S());const r=k(()=>t(S()),300);return window.addEventListener("resize",r),window.addEventListener("orientationchange",r),()=>{window.removeEventListener("resize",r),window.removeEventListener("orientationchange",r)}},[]),e}const j=l(h)`
  overflow: hidden;
`,Y=l.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,G=i.forwardRef(function(e,t){const{leftArea:r,rightArea:n,children:s}=e,o=i.useRef(null),p=i.useRef(null),[D,M]=i.useState({leftAreaWidth:0,rightAreaWidth:0}),w=H(),v=()=>{const E={leftAreaWidth:0,rightAreaWidth:0};o.current&&(E.leftAreaWidth=o.current.offsetWidth/w),p.current&&(E.rightAreaWidth=p.current.offsetWidth/w),M(E)};return i.useEffect(v,[w]),i.useImperativeHandle(t,()=>({updateSize:v})),a.jsxs(Y,{style:{"--left-area-width":`${D.leftAreaWidth}rem`,"--right-area-width":`${D.rightAreaWidth}rem`},children:[a.jsx(j,{children:a.jsx(h,{ref:o,children:r})}),a.jsx(h,{children:s}),a.jsx(j,{children:a.jsx(h,{ref:p,children:n})})]})}),b=l(R)`
  margin-right: 1rem;
`,J=i.memo(({children:e})=>{const{text:t,...r}={[c.PAID]:{$presetTheme:g.SUCCESS,text:"已支付"},[c.UNPAID]:{$presetTheme:g.PROCESSING,text:"待支付"},[c.REFUNDED]:{$presetTheme:g.WARNING,text:"已退款"},[c.CANCELED]:{$presetTheme:g.INFO,text:"已取消"},[c.INCOME]:{$presetTheme:g.SUCCESS,text:"收入"}}[e];return a.jsx(b,{...r,children:t})}),_=l(P)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,V=l.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,q=l(F)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,K=l(T)`
  padding-left: 1rem;
`;function Q(e){const{flow:t}=e,{id:r}=t;return a.jsx(K,{wrapperProps:{$alignItems:I.center},buttons:[{text:"编辑",$presetTheme:A.PRIMARY,to:`/flow/editor/${r}`},{text:"删除",$presetTheme:A.DANGER,onClick(n){n.stopPropagation(),console.debug("delete id:",r)}}]})}function X(e){const{flow:t}=e,r=N();return a.jsx(q,{onClick:()=>r(`/flow/detail/${t.id}`),children:a.jsxs(G,{rightArea:a.jsx(Q,{flow:t}),children:[a.jsxs(h,{$flex:"1",$alignItems:I.center,children:[a.jsx(J,{children:t.status}),a.jsx(b,{children:t.account}),a.jsx(V,{children:t.title})]}),a.jsx(_,{children:t.createTime})]})},t.id)}const Z=l(h)`
  padding: 1.8rem;
`;function se(){const e=C(),{flows:t}=e;return a.jsx(Z,{$direction:$.column,children:t.map(r=>a.jsx(X,{flow:r},r.id))})}async function ae(){return{flows:[{id:"1",title:"流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1",status:c.PAID,account:"流水1账号",creator:"流水1创建人",createTime:"2024/09/18"},{id:"2",title:"流水2",status:c.INCOME,account:"流水2账号",creator:"流水2创建人",createTime:"2024/09/18"}]}}function ee(){return a.jsx(T,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:A.PRIMARY}]})}const oe={title:"流水列表",crumbLabel:"列表",rightArea:a.jsx(ee,{})};export{se as Component,oe as handle,ae as loader};
