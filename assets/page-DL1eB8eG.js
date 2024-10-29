import{r as s,x as t,y as z}from"./index-jyCDBXP7.js";import{d as c,e as L,b as m,r as N,m as R,a as F,s as a,T as p,t as y,v as B,w as W,x as k,S as _,B as A,y as M,A as U,l as O,c as H,z as G,k as Y}from"./index-DNgY6zfM.js";import{u as C}from"./store-DErdy8nq.js";import{D as V,E as q}from"./index-DPOAMcPj.js";import{B as T}from"./index-DdYnPdQb.js";import{S as $}from"./index-DLUWWLMN.js";import{u as J}from"./use-navigate-HqZBfUB2.js";import"./index-xlKs_BxJ.js";import"./genStyleUtils-CvZ653pK.js";import"./index-COoaQ8Z_.js";const E=c(m)`
  overflow: hidden;
`,K=c.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,Q=s.forwardRef(function(o,e){const{leftArea:r,rightArea:n,children:d}=o,l=s.useRef(null),i=s.useRef(null),[x,w]=s.useState({leftAreaWidth:0,rightAreaWidth:0}),h=L(),f=s.useCallback(()=>{const u={leftAreaWidth:0,rightAreaWidth:0};l.current&&(u.leftAreaWidth=l.current.offsetWidth/h),i.current&&(u.rightAreaWidth=i.current.offsetWidth/h),w(u)},[h]);return s.useEffect(f,[h,f]),s.useImperativeHandle(e,()=>({updateSize:f})),t.jsxs(K,{style:{"--left-area-width":`${x.leftAreaWidth}rem`,"--right-area-width":`${x.rightAreaWidth}rem`},children:[t.jsx(E,{children:t.jsx(m,{ref:l,children:r})}),t.jsx(m,{children:d}),t.jsx(E,{children:t.jsx(m,{ref:i,children:n})})]})}),S=c.span`
  ${o=>{const{$color:e,$fontSize:r}=o;return{color:e,fontSize:r}}}}
`,X=s.memo(function(e){const{value:r,fontSize:n=20,decimalSize:d=16,symbolSize:l=14,color:i,decimalColor:x,symbolColor:w,showPrefix:h=!1,className:f}=e,[u,g]=String(r).split("."),[,D]=s.useState(),[P,b,v]=N([l,n,d]);return R(u)?null:t.jsxs(m,{className:f,$alignItems:F.baseline,onClick:I=>{I.stopPropagation(),D(Math.random())},children:[t.jsx($,{if:h,children:t.jsx(S,{$fontSize:P,$color:w||i,children:"¥"})}),t.jsx(S,{$fontSize:b,$color:i,children:u}),t.jsx($,{if:(g==null?void 0:g.length)>0,children:t.jsx(S,{$fontSize:v,$color:x||i,children:`.${g}`})})]})}),j=c(k)`
  margin-right: 1rem;
`,Z=s.memo(({children:o})=>{const e={[a.PAID]:{$presetTheme:p.SUCCESS},[a.UNPAID]:{$presetTheme:p.PROCESSING},[a.REFUNDED]:{$presetTheme:p.WARNING},[a.CANCELED]:{$presetTheme:p.INFO},[a.INCOME]:{$presetTheme:p.SUCCESS}}[o],r=y[o];return t.jsx(j,{...e,children:r})}),ee=s.memo(({children:o})=>{const e=B[o];return t.jsx(j,{children:e})}),te=s.memo(({children:o})=>{const e=W[o];return t.jsx(j,{children:e})}),oe=c(V)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,re=c.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,se=c(_)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,ne=c(T)`
  padding-left: 1rem;
`;function ie(o){const{flow:e,onDelete:r}=o,{id:n}=e,{setFlow:d}=C("setFlow");return t.jsx(ne,{wrapperProps:{$alignItems:F.center},buttons:[{text:"编辑",$presetTheme:A.PRIMARY,to:`/flow/editor/${n}`,onClick:()=>d(e)},{text:"删除",$presetTheme:A.DANGER,logInfo:{id:n},onClick(l){l.stopPropagation(),r==null||r(n)}}]})}function ae(o){switch(o){case a.PAID:return"var(--color-theme-7)";case a.UNPAID:return"var(--color-gray-6)";case a.REFUNDED:case a.INCOME:return"#52c41a";case a.CANCELED:return"var(--color-gray-5)"}}const le=c(X)`
  margin-right: 1rem;
  ${o=>{const{$status:e}=o;return{color:ae(e),textDecoration:e===a.CANCELED?"line-through":"none"}}}
`,ce=s.memo(o=>{const{flow:e,onClick:r,onDelete:n}=o;return t.jsx(se,{onClick:r,children:t.jsxs(Q,{rightArea:t.jsx(ie,{flow:e,onDelete:n}),children:[t.jsxs(m,{$flex:"1",$alignItems:F.center,children:[t.jsx(Z,{children:e.status}),t.jsx(ee,{children:e.account}),t.jsx(te,{children:e.category}),t.jsx(le,{value:e.amount,$status:e.status,showPrefix:!0}),t.jsx(re,{children:e.title})]}),t.jsx(oe,{children:e.createTime})]})},e.id)}),de=c(m)`
  padding: var(--page-padding);
`;function me(o){const{deleteFlow:e}=Y();e(o)}function $e(){const o=z(),{setFlow:e}=C("setFlow"),{flows:r}=M("flows"),{flows:n}=o,d=J(),l=s.useMemo(()=>n||r,[r,n]);return s.useEffect(()=>{e(void 0)},[e]),t.jsx(U,{onFirstAppear:()=>O.appear("flow-list"),children:t.jsx(de,{$direction:H.column,children:t.jsx(G,{if:l.length>0,fullback:t.jsx(q,{}),children:l.map(i=>t.jsx(ce,{flow:i,onDelete:me,onClick:()=>{e(i),d(`/flow/detail/${i.id}`)}},i.id))})})})}async function Ee(){return window.logger.todo("请求接口加载流水信息, 报错时使用本地存储中的流水信息"),{flows:null}}function he(){return t.jsx(T,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:A.PRIMARY}]})}const Ce={title:"流水列表",crumbLabel:"列表",rightArea:t.jsx(he,{})};export{$e as Component,Ce as handle,Ee as loader};
