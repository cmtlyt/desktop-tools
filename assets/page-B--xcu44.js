import{y as a,r as s,x as e}from"./index-DVtMNKSb.js";import{i,j as n,d as p,A as d,l as c,b as l}from"./index-D9b1AL4p.js";import{B as m}from"./index-B8xuHP0V.js";import{F as u,P as x}from"./flow-form-C8xWXBqo.js";import"./index-BZiJsBzZ.js";import"./store-q-C-w9E8.js";import"./index-DLUWWLMN.js";import"./index-DvO76_bd.js";import"./PurePanel-Zt-Lds_e.js";import"./genStyleUtils-D6fACTR8.js";import"./render-DKgLDTEZ.js";import"./index-CC5aZwRs.js";const f=i(t=>({id:"",setId:r=>t({id:r})})),o=t=>f(n(t)),g=p(l)`
  padding: var(--page-padding);
`;function P(){const{id:t}=a(),{setId:r}=o("setId");return s.useEffect(()=>{r(t)},[t,r]),e.jsx(d,{onFirstAppear:()=>c.appear("flow-detail",{id:t}),children:e.jsx(g,{children:e.jsx(u,{pageStatus:x.VIEW})})})}async function W({params:t}){return{id:t.id}}function j(){const{id:t}=o("id");return e.jsx(m,{buttons:[{text:"编辑",to:`/flow/editor/${t}`}]})}const k={title:"流水详情",crumbLabel:"详情",needBackIcon:!0,rightArea:e.jsx(j,{})};export{P as Component,k as handle,W as loader};
