import{r as i,o as e,p as M,u as L}from"./index-C9CLDyVu.js";import{d as u,u as v,a as h,k as E,i as z,b as T,T as x,m as B,S as Y,B as F,A as U,l as W,c as G}from"./index-DmB9cTB4.js";import{a,A as c,F as n,B as N,u as j}from"./flow-CwMZcboo.js";import"./use-selector-FKe-248l.js";function H(r,t){const o=new Date(r),l={yyyy:o.getFullYear(),yy:o.getFullYear()%100,MM:o.getMonth()+1,DD:o.getDate(),hh:o.getHours(),mm:o.getMinutes(),ss:o.getSeconds(),SS:o.getMilliseconds()};return t.replace(/[YyMDhmsS]+/g,s=>{var d;return((d=l[s])==null?void 0:d.toString().padStart(2,"0"))||s})}const O=i.memo(r=>{const{date:t,children:o,format:l="yyyy-MM-DD",className:s}=r,d=t||o;if(!d)return null;const m=H(d,l);return e.jsx("span",{className:s,children:m})}),C=u(h)`
  overflow: hidden;
`,k=u.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,_=i.forwardRef(function(r,t){const{leftArea:o,rightArea:l,children:s}=r,d=i.useRef(null),m=i.useRef(null),[p,S]=i.useState({leftAreaWidth:0,rightAreaWidth:0}),f=v(),g=i.useCallback(()=>{const A={leftAreaWidth:0,rightAreaWidth:0};d.current&&(A.leftAreaWidth=d.current.offsetWidth/f),m.current&&(A.rightAreaWidth=m.current.offsetWidth/f),S(A)},[f]);return i.useEffect(g,[f,g]),i.useImperativeHandle(t,()=>({updateSize:g})),e.jsxs(k,{style:{"--left-area-width":`${p.leftAreaWidth}rem`,"--right-area-width":`${p.rightAreaWidth}rem`},children:[e.jsx(C,{children:e.jsx(h,{ref:d,children:o})}),e.jsx(h,{children:s}),e.jsx(C,{children:e.jsx(h,{ref:m,children:l})})]})}),I=u.span`
  ${r=>{const{$color:t,$fontSize:o}=r;return{color:t,fontSize:o}}}}
`,V=i.memo(function(t){const{value:o,fontSize:l=20,decimalSize:s=16,symbolSize:d=14,color:m,decimalColor:p,symbolColor:S,showPrefix:f=!1,className:g}=t,[A,D]=String(o).split("."),[,P]=i.useState(),R=E(d),$=E(l),y=E(s);return z(A)?null:e.jsxs(h,{className:g,$alignItems:T.baseline,onClick:b=>{b.stopPropagation(),P(Math.random())},children:[f&&e.jsx(I,{$fontSize:R,$color:S||m,children:"¥"}),e.jsx(I,{$fontSize:$,$color:m,children:A}),D&&e.jsx(I,{$fontSize:y,$color:p||m,children:`.${D}`})]})}),w=u(B)`
  margin-right: 1rem;
`,K=i.memo(({children:r})=>{const{text:t,...o}={[a.PAID]:{$presetTheme:x.SUCCESS,text:"已支付"},[a.UNPAID]:{$presetTheme:x.PROCESSING,text:"待支付"},[a.REFUNDED]:{$presetTheme:x.WARNING,text:"已退款"},[a.CANCELED]:{$presetTheme:x.INFO,text:"已取消"},[a.INCOME]:{$presetTheme:x.SUCCESS,text:"收入"}}[r];return e.jsx(w,{...o,children:t})}),X=i.memo(({children:r})=>{const t={[c.ALIPAY]:"支付宝",[c.WECHAT]:"微信",[c.BANK_CARD]:"银行卡",[c.CASH]:"现金",[c.HUABEI]:"花呗",[c.XIAN_YONG_HOU_FU]:"先用后付"}[r];return e.jsx(w,{children:t})}),q=i.memo(({children:r})=>{const t={[n.CATERING]:"餐饮",[n.DEBIT]:"借记",[n.EDUCATION]:"教育",[n.ENTERTAINMENT]:"娱乐",[n.INCOME]:"收入",[n.MEDICAL]:"医疗",[n.LIFE]:"生活",[n.NET_SHOPPING]:"网购",[n.PAY]:"支出",[n.REFUND]:"退款",[n.SALARY]:"工资",[n.SHOPPING]:"购物",[n.TRANSFER]:"转账",[n.TRAVEL]:"差旅"}[r];return e.jsx(w,{children:t})}),J=u(O)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,Q=u.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Z=u(Y)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,tt=u(N)`
  padding-left: 1rem;
`;function et(r){const{flow:t}=r,{id:o}=t,{setFlow:l}=j("setFlow");return e.jsx(tt,{wrapperProps:{$alignItems:T.center},buttons:[{text:"编辑",$presetTheme:F.PRIMARY,to:`/flow/editor/${o}`,onClick:()=>l(t)},{text:"删除",$presetTheme:F.DANGER,onClick(s){s.stopPropagation(),window.logger.todo("delete id:",o)}}]})}function ot(r){switch(r){case a.PAID:return"var(--color-theme-7)";case a.UNPAID:return"var(--color-gray-6)";case a.REFUNDED:case a.INCOME:return"#52c41a";case a.CANCELED:return"var(--color-gray-5)"}}const rt=u(V)`
  margin-right: 1rem;
  ${r=>{const{$status:t}=r;return{color:ot(t),textDecoration:t===a.CANCELED?"line-through":"none"}}}
`;function nt(r){const{flow:t,onClick:o}=r;return e.jsx(Z,{onClick:o,children:e.jsxs(_,{rightArea:e.jsx(et,{flow:t}),children:[e.jsxs(h,{$flex:"1",$alignItems:T.center,children:[e.jsx(K,{children:t.status}),e.jsx(X,{children:t.account}),e.jsx(q,{children:t.category}),e.jsx(rt,{value:t.amount,$status:t.status,showPrefix:!0}),e.jsx(Q,{children:t.title})]}),e.jsx(J,{children:t.createTime})]})},t.id)}const at=u(h)`
  padding: 1.8rem;
`;function ut(){const r=M(),{setFlow:t}=j("setFlow"),{flows:o}=r,l=L();return i.useEffect(()=>{t(void 0)},[t]),e.jsx(U,{onFirstAppear:()=>W.appear("flow-list"),children:e.jsx(at,{$direction:G.column,children:o.map(s=>e.jsx(nt,{flow:s,onClick:()=>{t(s),l(`/flow/detail/${s.id}`)}},s.id))})})}async function mt(){return{flows:[{id:"1",title:"流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1",status:a.PAID,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水1创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[{account:c.ALIPAY,amount:(Math.random()*10).toFixed(2)}]},{id:"2",title:"流水2",status:a.INCOME,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水2创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"3",title:"流水3",status:a.CANCELED,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水3创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"4",title:"流水4",status:a.REFUNDED,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水4创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]},{id:"5",title:"流水5",status:a.UNPAID,account:c.ALIPAY,category:n.CATERING,amount:(Math.random()*10).toFixed(2),creator:"流水5创建人",createTime:"2024/09/18",updateTime:"2024/09/18",amountDistributions:[]}]}}function st(){return e.jsx(N,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:F.PRIMARY}]})}const ht={title:"流水列表",crumbLabel:"列表",rightArea:e.jsx(st,{})};export{ut as Component,ht as handle,mt as loader};
