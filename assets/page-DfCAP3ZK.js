import{r as s,o as t,p as z,u as L}from"./index-CM8FQ-JX.js";import{d as l,u as N,b as m,k as R,f as B,a as F,m as a,T as p,n as W,o as y,p as _,q as k,S as M,B as A,A as U,l as O,c as H}from"./index-CZXyBz8p.js";import{u as E}from"./store-C_9zK4rd.js";import{D as G}from"./index-ZBvmYnkZ.js";import{B as T}from"./index-nBSeIYP-.js";import{S as $}from"./index-DLUWWLMN.js";import{d as Y,b as q}from"./flow-CfbDztJr.js";import"./index-DFWCW1bo.js";const C=l(m)`
  overflow: hidden;
`,V=l.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,J=s.forwardRef(function(o,e){const{leftArea:r,rightArea:n,children:d}=o,c=s.useRef(null),i=s.useRef(null),[g,w]=s.useState({leftAreaWidth:0,rightAreaWidth:0}),u=N(),h=s.useCallback(()=>{const f={leftAreaWidth:0,rightAreaWidth:0};c.current&&(f.leftAreaWidth=c.current.offsetWidth/u),i.current&&(f.rightAreaWidth=i.current.offsetWidth/u),w(f)},[u]);return s.useEffect(h,[u,h]),s.useImperativeHandle(e,()=>({updateSize:h})),t.jsxs(V,{style:{"--left-area-width":`${g.leftAreaWidth}rem`,"--right-area-width":`${g.rightAreaWidth}rem`},children:[t.jsx(C,{children:t.jsx(m,{ref:c,children:r})}),t.jsx(m,{children:d}),t.jsx(C,{children:t.jsx(m,{ref:i,children:n})})]})}),S=l.span`
  ${o=>{const{$color:e,$fontSize:r}=o;return{color:e,fontSize:r}}}}
`,K=s.memo(function(e){const{value:r,fontSize:n=20,decimalSize:d=16,symbolSize:c=14,color:i,decimalColor:g,symbolColor:w,showPrefix:u=!1,className:h}=e,[f,x]=String(r).split("."),[,D]=s.useState(),[P,b,I]=R([c,n,d]);return B(f)?null:t.jsxs(m,{className:h,$alignItems:F.baseline,onClick:v=>{v.stopPropagation(),D(Math.random())},children:[t.jsx($,{if:u,children:t.jsx(S,{$fontSize:P,$color:w||i,children:"¥"})}),t.jsx(S,{$fontSize:b,$color:i,children:f}),t.jsx($,{if:(x==null?void 0:x.length)>0,children:t.jsx(S,{$fontSize:I,$color:g||i,children:`.${x}`})})]})}),j=l(k)`
  margin-right: 1rem;
`,Q=s.memo(({children:o})=>{const e={[a.PAID]:{$presetTheme:p.SUCCESS},[a.UNPAID]:{$presetTheme:p.PROCESSING},[a.REFUNDED]:{$presetTheme:p.WARNING},[a.CANCELED]:{$presetTheme:p.INFO},[a.INCOME]:{$presetTheme:p.SUCCESS}}[o],r=W[o];return t.jsx(j,{...e,children:r})}),X=s.memo(({children:o})=>{const e=y[o];return t.jsx(j,{children:e})}),Z=s.memo(({children:o})=>{const e=_[o];return t.jsx(j,{children:e})}),ee=l(G)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,te=l.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,oe=l(M)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,re=l(T)`
  padding-left: 1rem;
`;function se(o){const{flow:e,onDelete:r}=o,{id:n}=e,{setFlow:d}=E("setFlow");return t.jsx(re,{wrapperProps:{$alignItems:F.center},buttons:[{text:"编辑",$presetTheme:A.PRIMARY,to:`/flow/editor/${n}`,onClick:()=>d(e)},{text:"删除",$presetTheme:A.DANGER,logInfo:{id:n},onClick(c){c.stopPropagation(),r==null||r(n)}}]})}function ne(o){switch(o){case a.PAID:return"var(--color-theme-7)";case a.UNPAID:return"var(--color-gray-6)";case a.REFUNDED:case a.INCOME:return"#52c41a";case a.CANCELED:return"var(--color-gray-5)"}}const ie=l(K)`
  margin-right: 1rem;
  ${o=>{const{$status:e}=o;return{color:ne(e),textDecoration:e===a.CANCELED?"line-through":"none"}}}
`,ae=s.memo(o=>{const{flow:e,onClick:r,onDelete:n}=o;return t.jsx(oe,{onClick:r,children:t.jsxs(J,{rightArea:t.jsx(se,{flow:e,onDelete:n}),children:[t.jsxs(m,{$flex:"1",$alignItems:F.center,children:[t.jsx(Q,{children:e.status}),t.jsx(X,{children:e.account}),t.jsx(Z,{children:e.category}),t.jsx(ie,{value:e.amount,$status:e.status,showPrefix:!0}),t.jsx(te,{children:e.title})]}),t.jsx(ee,{children:e.createTime})]})},e.id)}),le=l(m)`
  padding: var(--page-padding);
`;function ce(o){const{deleteFlow:e}=q();e(o)}function Se(){const o=z(),{setFlow:e}=E("setFlow"),{flows:r}=Y("flows"),{flows:n}=o,d=L(),c=s.useMemo(()=>n||r,[r,n]);return s.useEffect(()=>{e(void 0)},[e]),t.jsx(U,{onFirstAppear:()=>O.appear("flow-list"),children:t.jsx(le,{$direction:H.column,children:c.map(i=>t.jsx(ae,{flow:i,onDelete:ce,onClick:()=>{e(i),d(`/flow/detail/${i.id}`)}},i.id))})})}async function Ae(){return window.logger.todo("请求接口加载流水信息, 报错时使用本地存储中的流水信息"),{flows:null}}function de(){return t.jsx(T,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:A.PRIMARY}]})}const Fe={title:"流水列表",crumbLabel:"列表",rightArea:t.jsx(de,{})};export{Se as Component,Fe as handle,Ae as loader};
