import{r as s,x as t,y as L}from"./index-CiXsOv_w.js";import{d as c,e as R,b as m,r as b,m as z,a as F,s as a,T as p,t as B,v as y,w as W,x as k,S as _,B as A,y as M,A as U,l as O,c as H,k as G}from"./index-25doOVbC.js";import{u as $}from"./store-CDoYtksN.js";import{D as Y,E as V}from"./index-DlGY0WFD.js";import{B as T}from"./index-bcboQ_ce.js";import{S as j}from"./index-DLUWWLMN.js";import{u as q}from"./use-navigate-Cc6h913Z.js";import{S as J}from"./index-DFWCW1bo.js";import"./index-K5P66uCC.js";import"./genStyleUtils-gSzc1bPH.js";import"./index-DOtAjDz2.js";const C=c(m)`
  overflow: hidden;
`,K=c.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,Q=s.forwardRef(function(o,e){const{leftArea:r,rightArea:n,children:d}=o,l=s.useRef(null),i=s.useRef(null),[x,w]=s.useState({leftAreaWidth:0,rightAreaWidth:0}),h=R(),u=s.useCallback(()=>{const f={leftAreaWidth:0,rightAreaWidth:0};l.current&&(f.leftAreaWidth=l.current.offsetWidth/h),i.current&&(f.rightAreaWidth=i.current.offsetWidth/h),w(f)},[h]);return s.useEffect(u,[h,u]),s.useImperativeHandle(e,()=>({updateSize:u})),t.jsxs(K,{style:{"--left-area-width":`${x.leftAreaWidth}rem`,"--right-area-width":`${x.rightAreaWidth}rem`},children:[t.jsx(C,{children:t.jsx(m,{ref:l,children:r})}),t.jsx(m,{children:d}),t.jsx(C,{children:t.jsx(m,{ref:i,children:n})})]})}),S=c.span`
  ${o=>{const{$color:e,$fontSize:r}=o;return{color:e,fontSize:r}}}}
`,X=s.memo(function(e){const{value:r,fontSize:n=20,decimalSize:d=16,symbolSize:l=14,color:i,decimalColor:x,symbolColor:w,showPrefix:h=!1,className:u}=e,[f,g]=String(r).split("."),[,N]=s.useState(),[D,I,P]=b([l,n,d]);return z(f)?null:t.jsxs(m,{className:u,$alignItems:F.BASELINE,onClick:v=>{v.stopPropagation(),N(Math.random())},children:[t.jsx(j,{if:h,children:t.jsx(S,{$fontSize:D,$color:w||i,children:"¥"})}),t.jsx(S,{$fontSize:I,$color:i,children:f}),t.jsx(j,{if:(g==null?void 0:g.length)>0,children:t.jsx(S,{$fontSize:P,$color:x||i,children:`.${g}`})})]})}),E=c(k)`
  margin-right: 1rem;
`,Z=s.memo(({children:o})=>{const e={[a.PAID]:{$presetTheme:p.SUCCESS},[a.UNPAID]:{$presetTheme:p.PROCESSING},[a.REFUNDED]:{$presetTheme:p.WARNING},[a.CANCELED]:{$presetTheme:p.INFO},[a.INCOME]:{$presetTheme:p.SUCCESS}}[o],r=B[o];return t.jsx(E,{...e,children:r})}),ee=s.memo(({children:o})=>{const e=y[o];return t.jsx(E,{children:e})}),te=s.memo(({children:o})=>{const e=W[o];return t.jsx(E,{children:e})}),oe=c(Y)`
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
`;function ie(o){const{flow:e,onDelete:r}=o,{id:n}=e,{setFlow:d}=$("setFlow");return t.jsx(ne,{wrapperProps:{$alignItems:F.CENTER},buttons:[{text:"编辑",$presetTheme:A.PRIMARY,to:`/flow/editor/${n}`,onClick:()=>d(e)},{text:"删除",$presetTheme:A.DANGER,logInfo:{id:n},onClick(l){l.stopPropagation(),r==null||r(n)}}]})}function ae(o){switch(o){case a.PAID:return"var(--color-theme-7)";case a.UNPAID:return"var(--color-gray-6)";case a.REFUNDED:case a.INCOME:return"#52c41a";case a.CANCELED:return"var(--color-gray-5)"}}const le=c(X)`
  margin-right: 1rem;
  ${o=>{const{$status:e}=o;return{color:ae(e),textDecoration:e===a.CANCELED?"line-through":"none"}}}
`,ce=s.memo(o=>{const{flow:e,onClick:r,onDelete:n}=o;return t.jsx(se,{onClick:r,children:t.jsxs(Q,{rightArea:t.jsx(ie,{flow:e,onDelete:n}),children:[t.jsxs(m,{$flex:"1",$alignItems:F.CENTER,children:[t.jsx(Z,{children:e.status}),t.jsx(ee,{children:e.account}),t.jsx(te,{children:e.category}),t.jsx(le,{value:e.amount,$status:e.status,showPrefix:!0}),t.jsx(re,{children:e.title})]}),t.jsx(oe,{children:e.createTime})]})},e.id)}),de=c(m)`
  padding: var(--page-padding);
`;function me(o){const{deleteFlow:e}=G();e(o)}function Ce(){const o=L(),{setFlow:e}=$("setFlow"),{flows:r}=M("flows"),{flows:n}=o,d=q(),l=s.useMemo(()=>n||r,[r,n]);return s.useEffect(()=>{e(void 0)},[e]),t.jsx(U,{onFirstAppear:()=>O.appear("flow-list"),children:t.jsx(de,{$direction:H.COLUMN,children:t.jsx(J,{if:l.length>0,fullback:t.jsx(V,{}),children:l.map(i=>t.jsx(ce,{flow:i,onDelete:me,onClick:()=>{e(i),d(`/flow/detail/${i.id}`)}},i.id))})})})}async function $e(){return window.logger.todo("请求接口加载流水信息, 报错时使用本地存储中的流水信息"),{flows:null}}function he(){return t.jsx(T,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:A.PRIMARY}]})}const Te={title:"流水列表",crumbLabel:"列表",rightArea:t.jsx(he,{})};export{Ce as Component,Te as handle,$e as loader};
