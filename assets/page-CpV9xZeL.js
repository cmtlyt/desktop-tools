import{r as s,L as o,N as M,J as R}from"./index-ChyLS-Vg.js";import{R as L,d as l,a as u,C as U,f as W,b as A,T as p,g as B,S as k,B as w,l as O,c as H}from"./index-SEmrXPO9.js";import{B as N,u as j}from"./store-C9tzj9B-.js";import{A as Y}from"./index-Dw75OGKc.js";import"./index-CrQEDCOW.js";var i=(e=>(e.PAID="PAID",e.UNPAID="UNPAID",e.REFUNDED="REFUNDED",e.CANCELED="CANCELED",e.INCOME="INCOME",e))(i||{});function G(e,t){const r=new Date(e),a={yyyy:r.getFullYear(),yy:r.getFullYear()%100,MM:r.getMonth()+1,DD:r.getDate(),hh:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),SS:r.getMilliseconds()};return t.replace(/[YyMDhmsS]+/g,n=>{var c;return((c=a[n])==null?void 0:c.toString().padStart(2,"0"))||n})}const _=s.memo(e=>{const{date:t,children:r,format:a="yyyy-MM-DD",className:n}=e,c=t||r;if(!c)return null;const d=G(c,a);return o.jsx("span",{className:n,children:d})}),J=document.documentElement,D=()=>parseFloat(getComputedStyle(J).fontSize);function I(){const[e,t]=s.useState(D());return s.useEffect(()=>{t(D());const r=L(()=>t(D()),300);return window.addEventListener("resize",r),window.addEventListener("orientationchange",r),()=>{window.removeEventListener("resize",r),window.removeEventListener("orientationchange",r)}},[]),e}const C=l(u)`
  overflow: hidden;
`,V=l.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,q=s.forwardRef(function(e,t){const{leftArea:r,rightArea:a,children:n}=e,c=s.useRef(null),d=s.useRef(null),[g,x]=s.useState({leftAreaWidth:0,rightAreaWidth:0}),m=I(),f=s.useCallback(()=>{const h={leftAreaWidth:0,rightAreaWidth:0};c.current&&(h.leftAreaWidth=c.current.offsetWidth/m),d.current&&(h.rightAreaWidth=d.current.offsetWidth/m),x(h)},[m]);return s.useEffect(f,[m,f]),s.useImperativeHandle(t,()=>({updateSize:f})),o.jsxs(V,{style:{"--left-area-width":`${g.leftAreaWidth}rem`,"--right-area-width":`${g.rightAreaWidth}rem`},children:[o.jsx(C,{children:o.jsx(u,{ref:c,children:r})}),o.jsx(u,{children:n}),o.jsx(C,{children:o.jsx(u,{ref:d,children:a})})]})});function $(e,t){if(typeof e=="string"){const r=parseFloat(e);return U(r)?e:String(r)===e?`${r}rem`:e}return`${e/t}rem`}function E(e){const t=I(),[r,a]=s.useState($(e,t));return s.useEffect(()=>{a($(e,t))},[e,t]),r}const S=l.span`
  ${e=>{const{$color:t,$fontSize:r}=e;return{color:t,fontSize:r}}}}
`,K=s.memo(function(t){const{value:r,fontSize:a=20,decimalSize:n=16,symbolSize:c=14,color:d,decimalColor:g,symbolColor:x,showPrefix:m=!1,className:f}=t,[h,F]=String(r).split("."),[,b]=s.useState(),v=E(c),y=E(a),z=E(n);return W(h)?null:o.jsxs(u,{className:f,$alignItems:A.baseline,onClick:P=>{P.stopPropagation(),b(Math.random())},children:[m&&o.jsx(S,{$fontSize:v,$color:x||d,children:"¥"}),o.jsx(S,{$fontSize:y,$color:d,children:h}),F&&o.jsx(S,{$fontSize:z,$color:g||d,children:`.${F}`})]})}),T=l(B)`
  margin-right: 1rem;
`,Q=s.memo(({children:e})=>{const{text:t,...r}={[i.PAID]:{$presetTheme:p.SUCCESS,text:"已支付"},[i.UNPAID]:{$presetTheme:p.PROCESSING,text:"待支付"},[i.REFUNDED]:{$presetTheme:p.WARNING,text:"已退款"},[i.CANCELED]:{$presetTheme:p.INFO,text:"已取消"},[i.INCOME]:{$presetTheme:p.SUCCESS,text:"收入"}}[e];return o.jsx(T,{...r,children:t})}),X=l(_)`
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
`;function re(e){const{flow:t}=e,{id:r}=t,a=j(n=>n.setFlow);return o.jsx(te,{wrapperProps:{$alignItems:A.center},buttons:[{text:"编辑",$presetTheme:w.PRIMARY,to:`/flow/editor/${r}`,onClick:()=>a(t)},{text:"删除",$presetTheme:w.DANGER,onClick(n){n.stopPropagation(),window.logger.todo("delete id:",r)}}]})}function oe(e){switch(e){case i.PAID:return"var(--color-theme-7)";case i.UNPAID:return"var(--color-gray-6)";case i.REFUNDED:case i.INCOME:return"#52c41a";case i.CANCELED:return"var(--color-gray-5)"}}const ne=l(K)`
  margin-right: 1rem;
  ${e=>{const{$status:t}=e;return{color:oe(t),textDecoration:t===i.CANCELED?"line-through":"none"}}}
`;function ie(e){const{flow:t,onClick:r}=e;return o.jsx(ee,{onClick:r,children:o.jsxs(q,{rightArea:o.jsx(re,{flow:t}),children:[o.jsxs(u,{$flex:"1",$alignItems:A.center,children:[o.jsx(Q,{children:t.status}),o.jsx(T,{children:t.account}),o.jsx(ne,{value:t.amount,$status:t.status,showPrefix:!0}),o.jsx(Z,{children:t.title})]}),o.jsx(X,{children:t.createTime})]})},t.id)}const se=l(u)`
  padding: 1.8rem;
`;function he(){const e=M(),t=j(n=>n.setFlow),{flows:r}=e,a=R();return s.useEffect(()=>{t(void 0)},[t]),o.jsx(Y,{onFirstAppear:()=>O.appear("flow-list"),children:o.jsx(se,{$direction:H.column,children:r.map(n=>o.jsx(ie,{flow:n,onClick:()=>{t(n),a(`/flow/detail/${n.id}`)}},n.id))})})}async function fe(){return{flows:[{id:"1",title:"流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1",status:i.PAID,account:"流水1账号",amount:(Math.random()*10).toFixed(2),creator:"流水1创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"2",title:"流水2",status:i.INCOME,account:"流水2账号",amount:(Math.random()*10).toFixed(2),creator:"流水2创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"3",title:"流水3",status:i.CANCELED,account:"流水3账号",amount:(Math.random()*10).toFixed(2),creator:"流水3创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"4",title:"流水4",status:i.REFUNDED,account:"流水4账号",amount:(Math.random()*10).toFixed(2),creator:"流水4创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"5",title:"流水5",status:i.UNPAID,account:"流水5账号",amount:(Math.random()*10).toFixed(2),creator:"流水5创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]}]}}function ae(){return o.jsx(N,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:w.PRIMARY}]})}const pe={title:"流水列表",crumbLabel:"列表",rightArea:o.jsx(ae,{})};export{he as Component,pe as handle,fe as loader};
