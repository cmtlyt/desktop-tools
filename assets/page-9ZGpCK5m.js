import{r as s,o as e,p as M,u as R}from"./index-BTF902Fp.js";import{d as l,u as v,a as u,o as z,i as B,b as T,p as n,T as p,q as W,r as Y,s as _,t as U,S as O,B as F,A as k,l as G,c as H,v as f,w as x}from"./index-q87_Cv0L.js";import{B as I,u as $}from"./store-Ch5fr3uF.js";import{S as C}from"./index-CE715fXl.js";function q(o,t){const r=new Date(o),i={yyyy:r.getFullYear(),yy:r.getFullYear()%100,MM:r.getMonth()+1,DD:r.getDate(),hh:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),SS:r.getMilliseconds()};return t.replace(/[YyMDhmsS]+/g,a=>{var c;return((c=i[a])==null?void 0:c.toString().padStart(2,"0"))||a})}const V=s.memo(o=>{const{date:t,children:r,format:i="yyyy-MM-DD",className:a}=o,c=t||r;if(!c)return null;const d=q(c,i);return e.jsx("span",{className:a,children:d})}),j=l(u)`
  overflow: hidden;
`,J=l.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,K=s.forwardRef(function(o,t){const{leftArea:r,rightArea:i,children:a}=o,c=s.useRef(null),d=s.useRef(null),[A,S]=s.useState({leftAreaWidth:0,rightAreaWidth:0}),m=v(),g=s.useCallback(()=>{const h={leftAreaWidth:0,rightAreaWidth:0};c.current&&(h.leftAreaWidth=c.current.offsetWidth/m),d.current&&(h.rightAreaWidth=d.current.offsetWidth/m),S(h)},[m]);return s.useEffect(g,[m,g]),s.useImperativeHandle(t,()=>({updateSize:g})),e.jsxs(J,{style:{"--left-area-width":`${A.leftAreaWidth}rem`,"--right-area-width":`${A.rightAreaWidth}rem`},children:[e.jsx(j,{children:e.jsx(u,{ref:c,children:r})}),e.jsx(u,{children:a}),e.jsx(j,{children:e.jsx(u,{ref:d,children:i})})]})}),w=l.span`
  ${o=>{const{$color:t,$fontSize:r}=o;return{color:t,fontSize:r}}}}
`,Q=s.memo(function(t){const{value:r,fontSize:i=20,decimalSize:a=16,symbolSize:c=14,color:d,decimalColor:A,symbolColor:S,showPrefix:m=!1,className:g}=t,[h,E]=String(r).split("."),[,y]=s.useState(),[P,N,b]=z([c,i,a]);return B(h)?null:e.jsxs(u,{className:g,$alignItems:T.baseline,onClick:L=>{L.stopPropagation(),y(Math.random())},children:[e.jsx(C,{if:m,children:e.jsx(w,{$fontSize:P,$color:S||d,children:"¥"})}),e.jsx(w,{$fontSize:N,$color:d,children:h}),e.jsx(C,{if:E.length>0,children:e.jsx(w,{$fontSize:b,$color:A||d,children:`.${E}`})})]})}),D=l(U)`
  margin-right: 1rem;
`,X=s.memo(({children:o})=>{const t={[n.PAID]:{$presetTheme:p.SUCCESS},[n.UNPAID]:{$presetTheme:p.PROCESSING},[n.REFUNDED]:{$presetTheme:p.WARNING},[n.CANCELED]:{$presetTheme:p.INFO},[n.INCOME]:{$presetTheme:p.SUCCESS}}[o],r=W[o];return e.jsx(D,{...t,children:r})}),Z=s.memo(({children:o})=>{const t=Y[o];return e.jsx(D,{children:t})}),tt=s.memo(({children:o})=>{const t=_[o];return e.jsx(D,{children:t})}),et=l(V)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,ot=l.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,rt=l(O)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,nt=l(I)`
  padding-left: 1rem;
`;function at(o){const{flow:t}=o,{id:r}=t,{setFlow:i}=$("setFlow");return e.jsx(nt,{wrapperProps:{$alignItems:T.center},buttons:[{text:"编辑",$presetTheme:F.PRIMARY,to:`/flow/editor/${r}`,onClick:()=>i(t)},{text:"删除",$presetTheme:F.DANGER,onClick(a){a.stopPropagation(),window.logger.todo("delete id:",r)}}]})}function st(o){switch(o){case n.PAID:return"var(--color-theme-7)";case n.UNPAID:return"var(--color-gray-6)";case n.REFUNDED:case n.INCOME:return"#52c41a";case n.CANCELED:return"var(--color-gray-5)"}}const it=l(Q)`
  margin-right: 1rem;
  ${o=>{const{$status:t}=o;return{color:st(t),textDecoration:t===n.CANCELED?"line-through":"none"}}}
`;function ct(o){const{flow:t,onClick:r}=o;return e.jsx(rt,{onClick:r,children:e.jsxs(K,{rightArea:e.jsx(at,{flow:t}),children:[e.jsxs(u,{$flex:"1",$alignItems:T.center,children:[e.jsx(X,{children:t.status}),e.jsx(Z,{children:t.account}),e.jsx(tt,{children:t.category}),e.jsx(it,{value:t.amount,$status:t.status,showPrefix:!0}),e.jsx(ot,{children:t.title})]}),e.jsx(et,{children:t.createTime})]})},t.id)}const lt=l(u)`
  padding: 1.8rem;
`;function gt(){const o=M(),{setFlow:t}=$("setFlow"),{flows:r}=o,i=R();return s.useEffect(()=>{t(void 0)},[t]),e.jsx(k,{onFirstAppear:()=>G.appear("flow-list"),children:e.jsx(lt,{$direction:H.column,children:r.map(a=>e.jsx(ct,{flow:a,onClick:()=>{t(a),i(`/flow/detail/${a.id}`)}},a.id))})})}async function pt(){return{flows:[{id:"1",title:"流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1",status:n.PAID,account:f.ALIPAY,category:x.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水1创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[{account:f.ALIPAY,amount:(Math.random()*10).toFixed(2)}]},{id:"2",title:"流水2",status:n.INCOME,account:f.ALIPAY,category:x.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水2创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"3",title:"流水3",status:n.CANCELED,account:f.ALIPAY,category:x.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水3创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"4",title:"流水4",status:n.REFUNDED,account:f.ALIPAY,category:x.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水4创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"5",title:"流水5",status:n.UNPAID,account:f.ALIPAY,category:x.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水5创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]}]}}function dt(){return e.jsx(I,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:F.PRIMARY}]})}const xt={title:"流水列表",crumbLabel:"列表",rightArea:e.jsx(dt,{})};export{gt as Component,xt as handle,pt as loader};
