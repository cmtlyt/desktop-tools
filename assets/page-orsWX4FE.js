import{r as s,o as t,p as N,u as v}from"./index-Cr9n8lBe.js";import{d,u as z,a as u,o as L,i as M,b as F,p as c,T as g,q as R,r as B,s as W,t as _,S as k,B as A,A as O,l as U,c as Y}from"./index-D23sbB6u.js";import{B as D,u as E}from"./store-Cb7sWamG.js";import{S as $,b as H}from"./index-DVwjrZR6.js";function G(r,e){const o=new Date(r),i={yyyy:o.getFullYear(),yy:o.getFullYear()%100,MM:o.getMonth()+1,DD:o.getDate(),hh:o.getHours(),mm:o.getMinutes(),ss:o.getSeconds(),SS:o.getMilliseconds()};return e.replace(/[YyMDhmsS]+/g,l=>{var a;return((a=i[l])==null?void 0:a.toString().padStart(2,"0"))||l})}const q=s.memo(r=>{const{date:e,children:o,format:i="yyyy-MM-DD",className:l}=r,a=e||o;if(!a)return null;const n=G(a,i);return t.jsx("span",{className:l,children:n})}),C=d(u)`
  overflow: hidden;
`,V=d.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,J=s.forwardRef(function(r,e){const{leftArea:o,rightArea:i,children:l}=r,a=s.useRef(null),n=s.useRef(null),[p,w]=s.useState({leftAreaWidth:0,rightAreaWidth:0}),h=z(),f=s.useCallback(()=>{const m={leftAreaWidth:0,rightAreaWidth:0};a.current&&(m.leftAreaWidth=a.current.offsetWidth/h),n.current&&(m.rightAreaWidth=n.current.offsetWidth/h),w(m)},[h]);return s.useEffect(f,[h,f]),s.useImperativeHandle(e,()=>({updateSize:f})),t.jsxs(V,{style:{"--left-area-width":`${p.leftAreaWidth}rem`,"--right-area-width":`${p.rightAreaWidth}rem`},children:[t.jsx(C,{children:t.jsx(u,{ref:a,children:o})}),t.jsx(u,{children:l}),t.jsx(C,{children:t.jsx(u,{ref:n,children:i})})]})}),S=d.span`
  ${r=>{const{$color:e,$fontSize:o}=r;return{color:e,fontSize:o}}}}
`,K=s.memo(function(e){const{value:o,fontSize:i=20,decimalSize:l=16,symbolSize:a=14,color:n,decimalColor:p,symbolColor:w,showPrefix:h=!1,className:f}=e,[m,x]=String(o).split("."),[,T]=s.useState(),[y,b,P]=L([a,i,l]);return M(m)?null:t.jsxs(u,{className:f,$alignItems:F.baseline,onClick:I=>{I.stopPropagation(),T(Math.random())},children:[t.jsx($,{if:h,children:t.jsx(S,{$fontSize:y,$color:w||n,children:"¥"})}),t.jsx(S,{$fontSize:b,$color:n,children:m}),t.jsx($,{if:(x==null?void 0:x.length)>0,children:t.jsx(S,{$fontSize:P,$color:p||n,children:`.${x}`})})]})}),j=d(_)`
  margin-right: 1rem;
`,Q=s.memo(({children:r})=>{const e={[c.PAID]:{$presetTheme:g.SUCCESS},[c.UNPAID]:{$presetTheme:g.PROCESSING},[c.REFUNDED]:{$presetTheme:g.WARNING},[c.CANCELED]:{$presetTheme:g.INFO},[c.INCOME]:{$presetTheme:g.SUCCESS}}[r],o=R[r];return t.jsx(j,{...e,children:o})}),X=s.memo(({children:r})=>{const e=B[r];return t.jsx(j,{children:e})}),Z=s.memo(({children:r})=>{const e=W[r];return t.jsx(j,{children:e})}),ee=d(q)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,te=d.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,oe=d(k)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,re=d(D)`
  padding-left: 1rem;
`;function se(r){const{flow:e}=r,{id:o}=e,{setFlow:i}=E("setFlow");return t.jsx(re,{wrapperProps:{$alignItems:F.center},buttons:[{text:"编辑",$presetTheme:A.PRIMARY,to:`/flow/editor/${o}`,onClick:()=>i(e)},{text:"删除",$presetTheme:A.DANGER,onClick(l){l.stopPropagation(),window.logger.todo("delete id:",o)}}]})}function ne(r){switch(r){case c.PAID:return"var(--color-theme-7)";case c.UNPAID:return"var(--color-gray-6)";case c.REFUNDED:case c.INCOME:return"#52c41a";case c.CANCELED:return"var(--color-gray-5)"}}const ae=d(K)`
  margin-right: 1rem;
  ${r=>{const{$status:e}=r;return{color:ne(e),textDecoration:e===c.CANCELED?"line-through":"none"}}}
`;function ie(r){const{flow:e,onClick:o}=r;return t.jsx(oe,{onClick:o,children:t.jsxs(J,{rightArea:t.jsx(se,{flow:e}),children:[t.jsxs(u,{$flex:"1",$alignItems:F.center,children:[t.jsx(Q,{children:e.status}),t.jsx(X,{children:e.account}),t.jsx(Z,{children:e.category}),t.jsx(ae,{value:e.amount,$status:e.status,showPrefix:!0}),t.jsx(te,{children:e.title})]}),t.jsx(ee,{children:e.createTime})]})},e.id)}const le=d(u)`
  padding: 1.8rem;
`;function fe(){const r=N(),{setFlow:e}=E("setFlow"),{flows:o}=H("flows"),{flows:i}=r,l=v(),a=s.useMemo(()=>i||o,[o,i]);return s.useEffect(()=>{e(void 0)},[e]),t.jsx(O,{onFirstAppear:()=>U.appear("flow-list"),children:t.jsx(le,{$direction:Y.column,children:a.map(n=>t.jsx(ie,{flow:n,onClick:()=>{e(n),l(`/flow/detail/${n.id}`)}},n.id))})})}async function ge(){return window.logger.todo("请求接口加载流水信息, 报错时使用本地存储中的流水信息"),{flows:null}}function ce(){return t.jsx(D,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:A.PRIMARY}]})}const pe={title:"流水列表",crumbLabel:"列表",rightArea:t.jsx(ce,{})};export{fe as Component,pe as handle,ge as loader};
