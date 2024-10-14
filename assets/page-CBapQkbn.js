import{r as i,L as o,N as M,J as R}from"./index-BJqnyuct.js";import{R as L,d as l,a as u,C as U,f as W,b as A,T as p,g as B,S as k,B as w,l as O,c as H}from"./button-DQLaDtHU.js";import{B as N,u as j}from"./store-DBDRI7lj.js";import{A as Y}from"./index-D3-a4OEu.js";import"./use-selector-CjkgcRiq.js";function G(e,t){const r=new Date(e),a={yyyy:r.getFullYear(),yy:r.getFullYear()%100,MM:r.getMonth()+1,DD:r.getDate(),hh:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),SS:r.getMilliseconds()};return t.replace(/[YyMDhmsS]+/g,s=>{var c;return((c=a[s])==null?void 0:c.toString().padStart(2,"0"))||s})}const _=i.memo(e=>{const{date:t,children:r,format:a="yyyy-MM-DD",className:s}=e,c=t||r;if(!c)return null;const d=G(c,a);return o.jsx("span",{className:s,children:d})});var n=(e=>(e.PAID="PAID",e.UNPAID="UNPAID",e.REFUNDED="REFUNDED",e.CANCELED="CANCELED",e.INCOME="INCOME",e))(n||{});const J=document.documentElement,D=()=>parseFloat(getComputedStyle(J).fontSize);function I(){const[e,t]=i.useState(D());return i.useEffect(()=>{t(D());const r=L(()=>t(D()),300);return window.addEventListener("resize",r),window.addEventListener("orientationchange",r),()=>{window.removeEventListener("resize",r),window.removeEventListener("orientationchange",r)}},[]),e}const C=l(u)`
  overflow: hidden;
`,V=l.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,q=i.forwardRef(function(e,t){const{leftArea:r,rightArea:a,children:s}=e,c=i.useRef(null),d=i.useRef(null),[g,x]=i.useState({leftAreaWidth:0,rightAreaWidth:0}),m=I(),f=i.useCallback(()=>{const h={leftAreaWidth:0,rightAreaWidth:0};c.current&&(h.leftAreaWidth=c.current.offsetWidth/m),d.current&&(h.rightAreaWidth=d.current.offsetWidth/m),x(h)},[m]);return i.useEffect(f,[m,f]),i.useImperativeHandle(t,()=>({updateSize:f})),o.jsxs(V,{style:{"--left-area-width":`${g.leftAreaWidth}rem`,"--right-area-width":`${g.rightAreaWidth}rem`},children:[o.jsx(C,{children:o.jsx(u,{ref:c,children:r})}),o.jsx(u,{children:s}),o.jsx(C,{children:o.jsx(u,{ref:d,children:a})})]})});function $(e,t){if(typeof e=="string"){const r=parseFloat(e);return U(r)?e:String(r)===e?`${r}rem`:e}return`${e/t}rem`}function E(e){const t=I(),[r,a]=i.useState($(e,t));return i.useEffect(()=>{a($(e,t))},[e,t]),r}const S=l.span`
  ${e=>{const{$color:t,$fontSize:r}=e;return{color:t,fontSize:r}}}}
`,K=i.memo(function(t){const{value:r,fontSize:a=20,decimalSize:s=16,symbolSize:c=14,color:d,decimalColor:g,symbolColor:x,showPrefix:m=!1,className:f}=t,[h,F]=String(r).split("."),[,b]=i.useState(),v=E(c),y=E(a),z=E(s);return W(h)?null:o.jsxs(u,{className:f,$alignItems:A.baseline,onClick:P=>{P.stopPropagation(),b(Math.random())},children:[m&&o.jsx(S,{$fontSize:v,$color:x||d,children:"¥"}),o.jsx(S,{$fontSize:y,$color:d,children:h}),F&&o.jsx(S,{$fontSize:z,$color:g||d,children:`.${F}`})]})}),T=l(B)`
  margin-right: 1rem;
`,Q=i.memo(({children:e})=>{const{text:t,...r}={[n.PAID]:{$presetTheme:p.SUCCESS,text:"已支付"},[n.UNPAID]:{$presetTheme:p.PROCESSING,text:"待支付"},[n.REFUNDED]:{$presetTheme:p.WARNING,text:"已退款"},[n.CANCELED]:{$presetTheme:p.INFO,text:"已取消"},[n.INCOME]:{$presetTheme:p.SUCCESS,text:"收入"}}[e];return o.jsx(T,{...r,children:t})}),X=l(_)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,Z=l.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ee=l(k)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,te=l(N)`
  padding-left: 1rem;
`;function re(e){const{flow:t}=e,{id:r}=t,{setFlow:a}=j("setFlow");return o.jsx(te,{wrapperProps:{$alignItems:A.center},buttons:[{text:"编辑",$presetTheme:w.PRIMARY,to:`/flow/editor/${r}`,onClick:()=>a(t)},{text:"删除",$presetTheme:w.DANGER,onClick(s){s.stopPropagation(),window.logger.todo("delete id:",r)}}]})}function oe(e){switch(e){case n.PAID:return"var(--color-theme-7)";case n.UNPAID:return"var(--color-gray-6)";case n.REFUNDED:case n.INCOME:return"#52c41a";case n.CANCELED:return"var(--color-gray-5)"}}const ne=l(K)`
  margin-right: 1rem;
  ${e=>{const{$status:t}=e;return{color:oe(t),textDecoration:t===n.CANCELED?"line-through":"none"}}}
`;function ie(e){const{flow:t,onClick:r}=e;return o.jsx(ee,{onClick:r,children:o.jsxs(q,{rightArea:o.jsx(re,{flow:t}),children:[o.jsxs(u,{$flex:"1",$alignItems:A.center,children:[o.jsx(Q,{children:t.status}),o.jsx(T,{children:t.account}),o.jsx(ne,{value:t.amount,$status:t.status,showPrefix:!0}),o.jsx(Z,{children:t.title})]}),o.jsx(X,{children:t.createTime})]})},t.id)}const se=l(u)`
  padding: 1.8rem;
`;function he(){const e=M(),{setFlow:t}=j("setFlow"),{flows:r}=e,a=R();return i.useEffect(()=>{t(void 0)},[t]),o.jsx(Y,{onFirstAppear:()=>O.appear("flow-list"),children:o.jsx(se,{$direction:H.column,children:r.map(s=>o.jsx(ie,{flow:s,onClick:()=>{t(s),a(`/flow/detail/${s.id}`)}},s.id))})})}async function fe(){return{flows:[{id:"1",title:"流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1",status:n.PAID,account:"流水1账号",amount:(Math.random()*10).toFixed(2),creator:"流水1创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"2",title:"流水2",status:n.INCOME,account:"流水2账号",amount:(Math.random()*10).toFixed(2),creator:"流水2创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"3",title:"流水3",status:n.CANCELED,account:"流水3账号",amount:(Math.random()*10).toFixed(2),creator:"流水3创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"4",title:"流水4",status:n.REFUNDED,account:"流水4账号",amount:(Math.random()*10).toFixed(2),creator:"流水4创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"5",title:"流水5",status:n.UNPAID,account:"流水5账号",amount:(Math.random()*10).toFixed(2),creator:"流水5创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]}]}}function ae(){return o.jsx(N,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:w.PRIMARY}]})}const pe={title:"流水列表",crumbLabel:"列表",rightArea:o.jsx(ae,{})};export{he as Component,pe as handle,fe as loader};
