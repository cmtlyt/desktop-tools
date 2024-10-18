import{r as n,o as t,p as N,u as v}from"./index-_tsl3Qgu.js";import{d,u as z,a as u,o as L,i as M,b as F,p as c,T as g,q as R,r as B,s as W,t as _,S as k,B as A,A as O,l as U,c as H}from"./index-oQJcAC9d.js";import{B as C,u as E}from"./store-D-TvnjKE.js";import{S as $,b as Y,g as G}from"./index-BnycnzTL.js";function q(o,e){const r=new Date(o),s={yyyy:r.getFullYear(),yy:r.getFullYear()%100,MM:r.getMonth()+1,DD:r.getDate(),hh:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),SS:r.getMilliseconds()};return e.replace(/[YyMDhmsS]+/g,l=>{var a;return((a=s[l])==null?void 0:a.toString().padStart(2,"0"))||l})}const V=n.memo(o=>{const{date:e,children:r,format:s="yyyy-MM-DD",className:l}=o,a=e||r;if(!a)return null;const i=q(a,s);return t.jsx("span",{className:l,children:i})}),D=d(u)`
  overflow: hidden;
`,J=d.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,K=n.forwardRef(function(o,e){const{leftArea:r,rightArea:s,children:l}=o,a=n.useRef(null),i=n.useRef(null),[p,w]=n.useState({leftAreaWidth:0,rightAreaWidth:0}),m=z(),f=n.useCallback(()=>{const h={leftAreaWidth:0,rightAreaWidth:0};a.current&&(h.leftAreaWidth=a.current.offsetWidth/m),i.current&&(h.rightAreaWidth=i.current.offsetWidth/m),w(h)},[m]);return n.useEffect(f,[m,f]),n.useImperativeHandle(e,()=>({updateSize:f})),t.jsxs(J,{style:{"--left-area-width":`${p.leftAreaWidth}rem`,"--right-area-width":`${p.rightAreaWidth}rem`},children:[t.jsx(D,{children:t.jsx(u,{ref:a,children:r})}),t.jsx(u,{children:l}),t.jsx(D,{children:t.jsx(u,{ref:i,children:s})})]})}),S=d.span`
  ${o=>{const{$color:e,$fontSize:r}=o;return{color:e,fontSize:r}}}}
`,Q=n.memo(function(e){const{value:r,fontSize:s=20,decimalSize:l=16,symbolSize:a=14,color:i,decimalColor:p,symbolColor:w,showPrefix:m=!1,className:f}=e,[h,x]=String(r).split("."),[,T]=n.useState(),[y,b,I]=L([a,s,l]);return M(h)?null:t.jsxs(u,{className:f,$alignItems:F.baseline,onClick:P=>{P.stopPropagation(),T(Math.random())},children:[t.jsx($,{if:m,children:t.jsx(S,{$fontSize:y,$color:w||i,children:"¥"})}),t.jsx(S,{$fontSize:b,$color:i,children:h}),t.jsx($,{if:(x==null?void 0:x.length)>0,children:t.jsx(S,{$fontSize:I,$color:p||i,children:`.${x}`})})]})}),j=d(_)`
  margin-right: 1rem;
`,X=n.memo(({children:o})=>{const e={[c.PAID]:{$presetTheme:g.SUCCESS},[c.UNPAID]:{$presetTheme:g.PROCESSING},[c.REFUNDED]:{$presetTheme:g.WARNING},[c.CANCELED]:{$presetTheme:g.INFO},[c.INCOME]:{$presetTheme:g.SUCCESS}}[o],r=R[o];return t.jsx(j,{...e,children:r})}),Z=n.memo(({children:o})=>{const e=B[o];return t.jsx(j,{children:e})}),ee=n.memo(({children:o})=>{const e=W[o];return t.jsx(j,{children:e})}),te=d(V)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,oe=d.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,re=d(k)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,se=d(C)`
  padding-left: 1rem;
`;function ne(o){const{flow:e,onDelete:r}=o,{id:s}=e,{setFlow:l}=E("setFlow");return t.jsx(se,{wrapperProps:{$alignItems:F.center},buttons:[{text:"编辑",$presetTheme:A.PRIMARY,to:`/flow/editor/${s}`,onClick:()=>l(e)},{text:"删除",$presetTheme:A.DANGER,logInfo:{id:s},onClick(a){a.stopPropagation(),r==null||r(s)}}]})}function ae(o){switch(o){case c.PAID:return"var(--color-theme-7)";case c.UNPAID:return"var(--color-gray-6)";case c.REFUNDED:case c.INCOME:return"#52c41a";case c.CANCELED:return"var(--color-gray-5)"}}const ie=d(Q)`
  margin-right: 1rem;
  ${o=>{const{$status:e}=o;return{color:ae(e),textDecoration:e===c.CANCELED?"line-through":"none"}}}
`,le=n.memo(o=>{const{flow:e,onClick:r,onDelete:s}=o;return t.jsx(re,{onClick:r,children:t.jsxs(K,{rightArea:t.jsx(ne,{flow:e,onDelete:s}),children:[t.jsxs(u,{$flex:"1",$alignItems:F.center,children:[t.jsx(X,{children:e.status}),t.jsx(Z,{children:e.account}),t.jsx(ee,{children:e.category}),t.jsx(ie,{value:e.amount,$status:e.status,showPrefix:!0}),t.jsx(oe,{children:e.title})]}),t.jsx(te,{children:e.createTime})]})},e.id)}),ce=d(u)`
  padding: 1.8rem;
`;function de(o){const{deleteFlow:e}=G();e(o)}function pe(){const o=N(),{setFlow:e}=E("setFlow"),{flows:r}=Y("flows"),{flows:s}=o,l=v(),a=n.useMemo(()=>s||r,[r,s]);return n.useEffect(()=>{e(void 0)},[e]),t.jsx(O,{onFirstAppear:()=>U.appear("flow-list"),children:t.jsx(ce,{$direction:H.column,children:a.map(i=>t.jsx(le,{flow:i,onDelete:de,onClick:()=>{e(i),l(`/flow/detail/${i.id}`)}},i.id))})})}async function xe(){return window.logger.todo("请求接口加载流水信息, 报错时使用本地存储中的流水信息"),{flows:null}}function ue(){return t.jsx(C,{buttons:[{text:"新建",to:"/flow/editor",$presetTheme:A.PRIMARY}]})}const we={title:"流水列表",crumbLabel:"列表",rightArea:t.jsx(ue,{})};export{pe as Component,we as handle,xe as loader};
