import{r as s,L as o,N as M,J as R}from"./index-BS0tImix.js";import{d as l,a as d,b as A,T as g,e as L,S as U,B as w,c as W}from"./button-DaDRjw6E.js";import{R as B,C as k,a as O,B as N,u as j,l as H}from"./index-DQDdgmr0.js";import"./index-DDuXCf6a.js";var i=(e=>(e.PAID="PAID",e.UNPAID="UNPAID",e.REFUNDED="REFUNDED",e.CANCELED="CANCELED",e.INCOME="INCOME",e))(i||{});function Y(e,t){const r=new Date(e),a={yyyy:r.getFullYear(),yy:r.getFullYear()%100,MM:r.getMonth()+1,DD:r.getDate(),hh:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),SS:r.getMilliseconds()};return t.replace(/[YyMDhmsS]+/g,n=>{var c;return((c=a[n])==null?void 0:c.toString().padStart(2,"0"))||n})}const G=s.memo(e=>{const{date:t,children:r,format:a="yyyy-MM-DD",className:n}=e,c=t||r;if(!c)return null;const u=Y(c,a);return o.jsx("span",{className:n,children:u})}),_=document.documentElement,D=()=>parseFloat(getComputedStyle(_).fontSize);function I(){const[e,t]=s.useState(D());return s.useEffect(()=>{t(D());const r=B(()=>t(D()),300);return window.addEventListener("resize",r),window.addEventListener("orientationchange",r),()=>{window.removeEventListener("resize",r),window.removeEventListener("orientationchange",r)}},[]),e}const C=l(d)`
  overflow: hidden;
`,J=l.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,V=s.forwardRef(function(e,t){const{leftArea:r,rightArea:a,children:n}=e,c=s.useRef(null),u=s.useRef(null),[p,x]=s.useState({leftAreaWidth:0,rightAreaWidth:0}),m=I(),f=s.useCallback(()=>{const h={leftAreaWidth:0,rightAreaWidth:0};c.current&&(h.leftAreaWidth=c.current.offsetWidth/m),u.current&&(h.rightAreaWidth=u.current.offsetWidth/m),x(h)},[m]);return s.useEffect(f,[m,f]),s.useImperativeHandle(t,()=>({updateSize:f})),o.jsxs(J,{style:{"--left-area-width":`${p.leftAreaWidth}rem`,"--right-area-width":`${p.rightAreaWidth}rem`},children:[o.jsx(C,{children:o.jsx(d,{ref:c,children:r})}),o.jsx(d,{children:n}),o.jsx(C,{children:o.jsx(d,{ref:u,children:a})})]})});function $(e,t){if(typeof e=="string"){const r=parseFloat(e);return k(r)?e:String(r)===e?`${r}rem`:e}return`${e/t}rem`}function E(e){const t=I(),[r,a]=s.useState($(e,t));return s.useEffect(()=>{a($(e,t))},[e,t]),r}const S=l.span`
  ${e=>{const{$color:t,$fontSize:r}=e;return{color:t,fontSize:r}}}}
`,q=s.memo(function(t){const{value:r,fontSize:a=20,decimalSize:n=16,symbolSize:c=14,color:u,decimalColor:p,symbolColor:x,showPrefix:m=!1,className:f}=t,[h,F]=String(r).split("."),[,b]=s.useState(),v=E(c),y=E(a),z=E(n);return O(h)?null:o.jsxs(d,{className:f,$alignItems:A.baseline,onClick:P=>{P.stopPropagation(),b(Math.random())},children:[m&&o.jsx(S,{$fontSize:v,$color:x||u,children:"¥"}),o.jsx(S,{$fontSize:y,$color:u,children:h}),F&&o.jsx(S,{$fontSize:z,$color:p||u,children:`.${F}`})]})}),T=l(L)`
  margin-right: 1rem;
`,K=s.memo(({children:e})=>{const{text:t,...r}={[i.PAID]:{$presetTheme:g.SUCCESS,text:"已支付"},[i.UNPAID]:{$presetTheme:g.PROCESSING,text:"待支付"},[i.REFUNDED]:{$presetTheme:g.WARNING,text:"已退款"},[i.CANCELED]:{$presetTheme:g.INFO,text:"已取消"},[i.INCOME]:{$presetTheme:g.SUCCESS,text:"收入"}}[e];return o.jsx(T,{...r,children:t})}),Q=l(G)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,X=l.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Z=l(U)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,ee=l(N)`
  padding-left: 1rem;
`;function te(e){const{flow:t}=e,{id:r}=t,a=j(n=>n.setFlow);return o.jsx(ee,{wrapperProps:{$alignItems:A.center},buttons:[{text:"编辑",$presetTheme:w.PRIMARY,to:`/flow/editor/${r}`,onClick:()=>a(t)},{text:"删除",$presetTheme:w.DANGER,onClick(n){n.stopPropagation(),H.debug("delete id:",r)}}]})}function re(e){switch(e){case i.PAID:return"var(--color-theme-7)";case i.UNPAID:return"var(--color-gray-6)";case i.REFUNDED:case i.INCOME:return"#52c41a";case i.CANCELED:return"var(--color-gray-5)"}}const oe=l(q)`
  margin-right: 1rem;
  ${e=>{const{$status:t}=e;return{color:re(t),textDecoration:t===i.CANCELED?"line-through":"none"}}}
`;function ne(e){const{flow:t,onClick:r}=e;return o.jsx(Z,{onClick:r,children:o.jsxs(V,{rightArea:o.jsx(te,{flow:t}),children:[o.jsxs(d,{$flex:"1",$alignItems:A.center,children:[o.jsx(K,{children:t.status}),o.jsx(T,{children:t.account}),o.jsx(oe,{value:t.amount,$status:t.status,showPrefix:!0}),o.jsx(X,{children:t.title})]}),o.jsx(Q,{children:t.createTime})]})},t.id)}const ie=l(d)`
  padding: 1.8rem;
`;function de(){const e=M(),t=j(n=>n.setFlow),{flows:r}=e,a=R();return s.useEffect(()=>{t(void 0)},[t]),o.jsx(ie,{$direction:W.column,children:r.map(n=>o.jsx(ne,{flow:n,onClick:()=>{t(n),a(`/flow/detail/${n.id}`)}},n.id))})}async function me(){return{flows:[{id:"1",title:"流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1",status:i.PAID,account:"流水1账号",amount:(Math.random()*10).toFixed(2),creator:"流水1创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"2",title:"流水2",status:i.INCOME,account:"流水2账号",amount:(Math.random()*10).toFixed(2),creator:"流水2创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"3",title:"流水3",status:i.CANCELED,account:"流水3账号",amount:(Math.random()*10).toFixed(2),creator:"流水3创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"4",title:"流水4",status:i.REFUNDED,account:"流水4账号",amount:(Math.random()*10).toFixed(2),creator:"流水4创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"5",title:"流水5",status:i.UNPAID,account:"流水5账号",amount:(Math.random()*10).toFixed(2),creator:"流水5创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]}]}}function se(){return o.jsx(N,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:w.PRIMARY}]})}const he={title:"流水列表",crumbLabel:"列表",rightArea:o.jsx(se,{})};export{de as Component,he as handle,me as loader};
