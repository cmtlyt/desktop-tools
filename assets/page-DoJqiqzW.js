import{r as c,L as s,N as B,J as O}from"./index-B7i3nDIQ.js";import{d as u,a as m,b as j,T as y,e as U,S as H,B as T,c as Y}from"./button-BUzUG6R6.js";import{F as i}from"./flow-DFISXyJe.js";import{B as N}from"./index-CuLnbr0d.js";import{l as _}from"./index-CQNBU3hG.js";function G(e,t){const r=new Date(e),n={yyyy:r.getFullYear(),yy:r.getFullYear()%100,MM:r.getMonth()+1,DD:r.getDate(),hh:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),SS:r.getMilliseconds()};return t.replace(/[YyMDhmsS]+/g,o=>{var a;return((a=n[o])==null?void 0:a.toString().padStart(2,"0"))||o})}const J=c.memo(e=>{const{date:t,children:r,format:n="yyyy-MM-DD",className:o}=e,a=t||r;if(!a)return null;const l=G(a,n);return s.jsx("span",{className:o,children:l})});const F=Symbol&&Symbol("empty")||{},V=Reflect!=null&&Reflect.apply?e=>{let t=F;return(...r)=>(t===F&&(t=e()),typeof t!="function"?t:Reflect.apply(t,null,r))}:e=>{let t=F;return(...r)=>(t===F&&(t=e()),typeof t!="function"?t:t.apply(null,r))};function q(e){return e==="undefined"||e===void 0}function K(e){return typeof e=="number"&&e!=e}function Q(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=1e3,g=60*p,x=60*g,d=24*x,X=7*d,Z=365.25*d;function E(e,t,r,n){var o=t>=1.5*r;return Math.round(e/r)+" "+n+(o?"s":"")}Q(function(e,t){t=t||{};var r=typeof e;if(r==="string"&&e.length>0)return function(n){if(!((n=String(n)).length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(o){var a=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*Z;case"weeks":case"week":case"w":return a*X;case"days":case"day":case"d":return a*d;case"hours":case"hour":case"hrs":case"hr":case"h":return a*x;case"minutes":case"minute":case"mins":case"min":case"m":return a*g;case"seconds":case"second":case"secs":case"sec":case"s":return a*p;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}(e);if(r==="number"&&isFinite(e))return t.long?function(n){var o=Math.abs(n);return o>=d?E(n,o,d,"day"):o>=x?E(n,o,x,"hour"):o>=g?E(n,o,g,"minute"):o>=p?E(n,o,p,"second"):n+" ms"}(e):function(n){var o=Math.abs(n);return o>=d?Math.round(n/d)+"d":o>=x?Math.round(n/x)+"h":o>=g?Math.round(n/g)+"m":o>=p?Math.round(n/p)+"s":n+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))});function ee(e,t=1e3,r=!1){if(t<=0)return e;let n=null;return V(()=>r?(...o)=>{n?clearTimeout(n):e.apply(null,o),n=setTimeout(()=>{n=null},t)}:(...o)=>{n&&clearTimeout(n),n=setTimeout(()=>{e.apply(null,o)},t)})}const te=document.documentElement,v=()=>parseFloat(getComputedStyle(te).fontSize);function z(){const[e,t]=c.useState(v());return c.useEffect(()=>{t(v());const r=ee(()=>t(v()),300);return window.addEventListener("resize",r),window.addEventListener("orientationchange",r),()=>{window.removeEventListener("resize",r),window.removeEventListener("orientationchange",r)}},[]),e}const C=u(m)`
  overflow: hidden;
`,re=u.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,ne=c.forwardRef(function(e,t){const{leftArea:r,rightArea:n,children:o}=e,a=c.useRef(null),l=c.useRef(null),[w,$]=c.useState({leftAreaWidth:0,rightAreaWidth:0}),f=z(),S=c.useCallback(()=>{const h={leftAreaWidth:0,rightAreaWidth:0};a.current&&(h.leftAreaWidth=a.current.offsetWidth/f),l.current&&(h.rightAreaWidth=l.current.offsetWidth/f),$(h)},[f]);return c.useEffect(S,[f,S]),c.useImperativeHandle(t,()=>({updateSize:S})),s.jsxs(re,{style:{"--left-area-width":`${w.leftAreaWidth}rem`,"--right-area-width":`${w.rightAreaWidth}rem`},children:[s.jsx(C,{children:s.jsx(m,{ref:a,children:r})}),s.jsx(m,{children:o}),s.jsx(C,{children:s.jsx(m,{ref:l,children:n})})]})});function M(e,t){if(typeof e=="string"){const r=parseFloat(e);return K(r)?e:String(r)===e?`${r}rem`:e}return`${e/t}rem`}function D(e){const t=z(),[r,n]=c.useState(M(e,t));return c.useEffect(()=>{n(M(e,t))},[e,t]),r}const A=u.span`
  ${e=>{const{$color:t,$fontSize:r}=e;return{color:t,fontSize:r}}}}
`,oe=c.memo(function(t){const{value:r,fontSize:n=20,decimalSize:o=16,symbolSize:a=14,color:l,decimalColor:w,symbolColor:$,showPrefix:f=!1,className:S}=t,[h,b]=String(r).split("."),[,R]=c.useState(),P=D(a),L=D(n),W=D(o);return q(h)?null:s.jsxs(m,{className:S,$alignItems:j.baseline,onClick:k=>{k.stopPropagation(),R(Math.random())},children:[f&&s.jsx(A,{$fontSize:P,$color:$||l,children:"¥"}),s.jsx(A,{$fontSize:L,$color:l,children:h}),b&&s.jsx(A,{$fontSize:W,$color:w||l,children:`.${b}`})]})}),I=u(U)`
  margin-right: 1rem;
`,se=c.memo(({children:e})=>{const{text:t,...r}={[i.PAID]:{$presetTheme:y.SUCCESS,text:"已支付"},[i.UNPAID]:{$presetTheme:y.PROCESSING,text:"待支付"},[i.REFUNDED]:{$presetTheme:y.WARNING,text:"已退款"},[i.CANCELED]:{$presetTheme:y.INFO,text:"已取消"},[i.INCOME]:{$presetTheme:y.SUCCESS,text:"收入"}}[e];return s.jsx(I,{...r,children:t})}),ae=u(J)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,ie=u.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ce=u(H)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,ue=u(N)`
  padding-left: 1rem;
`;function le(e){const{flow:t}=e,{id:r}=t;return s.jsx(ue,{wrapperProps:{$alignItems:j.center},buttons:[{text:"编辑",$presetTheme:T.PRIMARY,to:`/flow/editor/${r}`},{text:"删除",$presetTheme:T.DANGER,onClick(n){n.stopPropagation(),_.debug("delete id:",r)}}]})}function de(e){switch(e){case i.PAID:return"var(--color-theme-7)";case i.UNPAID:return"var(--color-gray-6)";case i.REFUNDED:case i.INCOME:return"#52c41a";case i.CANCELED:return"var(--color-gray-5)"}}const me=u(oe)`
  margin-right: 1rem;
  ${e=>{const{$status:t}=e;return{color:de(t),textDecoration:t===i.CANCELED?"line-through":"none"}}}
`;function fe(e){const{flow:t,onClick:r}=e;return s.jsx(ce,{onClick:r,children:s.jsxs(ne,{rightArea:s.jsx(le,{flow:t}),children:[s.jsxs(m,{$flex:"1",$alignItems:j.center,children:[s.jsx(se,{children:t.status}),s.jsx(I,{children:t.account}),s.jsx(me,{value:t.amount,$status:t.status,showPrefix:!0}),s.jsx(ie,{children:t.title})]}),s.jsx(ae,{children:t.createTime})]})},t.id)}const he=u(m)`
  padding: 1.8rem;
`;function Fe(){const e=B(),{flows:t}=e,r=O();return s.jsx(he,{$direction:Y.column,children:t.map(n=>s.jsx(fe,{flow:n,onClick:()=>r(`/flow/detail/${n.id}`)},n.id))})}async function Ee(){return{flows:[{id:"1",title:"流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1",status:i.PAID,account:"流水1账号",amount:(Math.random()*10).toFixed(2),creator:"流水1创建人",createTime:"2024/09/18",updateTime:"2024/09/18"},{id:"2",title:"流水2",status:i.INCOME,account:"流水2账号",amount:(Math.random()*10).toFixed(2),creator:"流水2创建人",createTime:"2024/09/18",updateTime:"2024/09/18"},{id:"3",title:"流水3",status:i.CANCELED,account:"流水3账号",amount:(Math.random()*10).toFixed(2),creator:"流水3创建人",createTime:"2024/09/18",updateTime:"2024/09/18"},{id:"4",title:"流水4",status:i.REFUNDED,account:"流水4账号",amount:(Math.random()*10).toFixed(2),creator:"流水4创建人",createTime:"2024/09/18",updateTime:"2024/09/18"},{id:"5",title:"流水5",status:i.UNPAID,account:"流水5账号",amount:(Math.random()*10).toFixed(2),creator:"流水5创建人",createTime:"2024/09/18",updateTime:"2024/09/18"}]}}function pe(){return s.jsx(N,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:T.PRIMARY}]})}const $e={title:"流水列表",crumbLabel:"列表",rightArea:s.jsx(pe,{})};export{Fe as Component,$e as handle,Ee as loader};
