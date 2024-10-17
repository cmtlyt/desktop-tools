import{r as i,o as e,p as M,u as L}from"./index-Svs3ILB_.js";import{d as u,u as v,a as h,k as z,i as B,b as F,T as x,m as Y,S as U,B as I,A as W,l as G,c as H}from"./index-CkkFVO2k.js";import{a,A as c,F as n,B as N,u as j}from"./flow-Bwqlsksu.js";import{S as D}from"./index-DD5AjTiC.js";function O(r,t){const o=new Date(r),l={yyyy:o.getFullYear(),yy:o.getFullYear()%100,MM:o.getMonth()+1,DD:o.getDate(),hh:o.getHours(),mm:o.getMinutes(),ss:o.getSeconds(),SS:o.getMilliseconds()};return t.replace(/[YyMDhmsS]+/g,s=>{var d;return((d=l[s])==null?void 0:d.toString().padStart(2,"0"))||s})}const k=i.memo(r=>{const{date:t,children:o,format:l="yyyy-MM-DD",className:s}=r,d=t||o;if(!d)return null;const m=O(d,l);return e.jsx("span",{className:s,children:m})}),C=u(h)`
  overflow: hidden;
`,_=u.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,V=i.forwardRef(function(r,t){const{leftArea:o,rightArea:l,children:s}=r,d=i.useRef(null),m=i.useRef(null),[p,S]=i.useState({leftAreaWidth:0,rightAreaWidth:0}),f=v(),g=i.useCallback(()=>{const A={leftAreaWidth:0,rightAreaWidth:0};d.current&&(A.leftAreaWidth=d.current.offsetWidth/f),m.current&&(A.rightAreaWidth=m.current.offsetWidth/f),S(A)},[f]);return i.useEffect(g,[f,g]),i.useImperativeHandle(t,()=>({updateSize:g})),e.jsxs(_,{style:{"--left-area-width":`${p.leftAreaWidth}rem`,"--right-area-width":`${p.rightAreaWidth}rem`},children:[e.jsx(C,{children:e.jsx(h,{ref:d,children:o})}),e.jsx(h,{children:s}),e.jsx(C,{children:e.jsx(h,{ref:m,children:l})})]})}),E=u.span`
  ${r=>{const{$color:t,$fontSize:o}=r;return{color:t,fontSize:o}}}}
`,K=i.memo(function(t){const{value:o,fontSize:l=20,decimalSize:s=16,symbolSize:d=14,color:m,decimalColor:p,symbolColor:S,showPrefix:f=!1,className:g}=t,[A,w]=String(o).split("."),[,P]=i.useState(),[R,$,y]=z([d,l,s]);return B(A)?null:e.jsxs(h,{className:g,$alignItems:F.baseline,onClick:b=>{b.stopPropagation(),P(Math.random())},children:[e.jsx(D,{if:f,children:e.jsx(E,{$fontSize:R,$color:S||m,children:"¥"})}),e.jsx(E,{$fontSize:$,$color:m,children:A}),e.jsx(D,{if:w.length>0,children:e.jsx(E,{$fontSize:y,$color:p||m,children:`.${w}`})})]})}),T=u(Y)`
  margin-right: 1rem;
`,X=i.memo(({children:r})=>{const{text:t,...o}={[a.PAID]:{$presetTheme:x.SUCCESS,text:"已支付"},[a.UNPAID]:{$presetTheme:x.PROCESSING,text:"待支付"},[a.REFUNDED]:{$presetTheme:x.WARNING,text:"已退款"},[a.CANCELED]:{$presetTheme:x.INFO,text:"已取消"},[a.INCOME]:{$presetTheme:x.SUCCESS,text:"收入"}}[r];return e.jsx(T,{...o,children:t})}),q=i.memo(({children:r})=>{const t={[c.ALIPAY]:"支付宝",[c.WECHAT]:"微信",[c.BANK_CARD]:"银行卡",[c.CASH]:"现金",[c.HUABEI]:"花呗",[c.XIAN_YONG_HOU_FU]:"先用后付"}[r];return e.jsx(T,{children:t})}),J=i.memo(({children:r})=>{const t={[n.CATERING]:"餐饮",[n.DEBIT]:"借记",[n.EDUCATION]:"教育",[n.ENTERTAINMENT]:"娱乐",[n.INCOME]:"收入",[n.MEDICAL]:"医疗",[n.LIFE]:"生活",[n.NET_SHOPPING]:"网购",[n.PAY]:"支出",[n.REFUND]:"退款",[n.SALARY]:"工资",[n.SHOPPING]:"购物",[n.TRANSFER]:"转账",[n.TRAVEL]:"差旅"}[r];return e.jsx(T,{children:t})}),Q=u(k)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,Z=u.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,tt=u(U)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,et=u(N)`
  padding-left: 1rem;
`;function ot(r){const{flow:t}=r,{id:o}=t,{setFlow:l}=j("setFlow");return e.jsx(et,{wrapperProps:{$alignItems:F.center},buttons:[{text:"编辑",$presetTheme:I.PRIMARY,to:`/flow/editor/${o}`,onClick:()=>l(t)},{text:"删除",$presetTheme:I.DANGER,onClick(s){s.stopPropagation(),window.logger.todo("delete id:",o)}}]})}function rt(r){switch(r){case a.PAID:return"var(--color-theme-7)";case a.UNPAID:return"var(--color-gray-6)";case a.REFUNDED:case a.INCOME:return"#52c41a";case a.CANCELED:return"var(--color-gray-5)"}}const nt=u(K)`
  margin-right: 1rem;
  ${r=>{const{$status:t}=r;return{color:rt(t),textDecoration:t===a.CANCELED?"line-through":"none"}}}
`;function at(r){const{flow:t,onClick:o}=r;return e.jsx(tt,{onClick:o,children:e.jsxs(V,{rightArea:e.jsx(ot,{flow:t}),children:[e.jsxs(h,{$flex:"1",$alignItems:F.center,children:[e.jsx(X,{children:t.status}),e.jsx(q,{children:t.account}),e.jsx(J,{children:t.category}),e.jsx(nt,{value:t.amount,$status:t.status,showPrefix:!0}),e.jsx(Z,{children:t.title})]}),e.jsx(Q,{children:t.createTime})]})},t.id)}const st=u(h)`
  padding: 1.8rem;
`;function mt(){const r=M(),{setFlow:t}=j("setFlow"),{flows:o}=r,l=L();return i.useEffect(()=>{t(void 0)},[t]),e.jsx(W,{onFirstAppear:()=>G.appear("flow-list"),children:e.jsx(st,{$direction:H.column,children:o.map(s=>e.jsx(at,{flow:s,onClick:()=>{t(s),l(`/flow/detail/${s.id}`)}},s.id))})})}async function ht(){return{flows:[{id:"1",title:"流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1",status:a.PAID,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水1创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[{account:c.ALIPAY,amount:(Math.random()*10).toFixed(2)}]},{id:"2",title:"流水2",status:a.INCOME,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水2创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"3",title:"流水3",status:a.CANCELED,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水3创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"4",title:"流水4",status:a.REFUNDED,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水4创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"5",title:"流水5",status:a.UNPAID,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水5创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]}]}}function it(){return e.jsx(N,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:I.PRIMARY}]})}const ft={title:"流水列表",crumbLabel:"列表",rightArea:e.jsx(it,{})};export{mt as Component,ft as handle,ht as loader};
