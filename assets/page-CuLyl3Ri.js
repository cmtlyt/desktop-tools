import{y as i,r as a,x as r}from"./index-BXTVpx5s.js";import{h as s,d as p,l as n,b as m}from"./index-CJBIeleO.js";import{B as d}from"./index-CrZUkE4J.js";import{F as l,P as c}from"./flow-form-C5wEEOsf.js";import{A as u}from"./index-qC2de8WL.js";import"./iconBase-D6LGKFIw.js";import"./index-Kg_0Nt3Z.js";import"./is-phone-Do99lBrp.js";import"./index-viMoPrKA.js";import"./asyncToGenerator-BAsnat87.js";import"./store-G0oxPTBS.js";import"./index-D9GgxVnM.js";import"./index-CR3H2Abc.js";import"./pickAttrs-NIi1Il2z.js";import"./compact-item-gd4egg3J.js";import"./LoadingOutlined-dKrsdTV8.js";import"./index-CkfmCXHd.js";import"./index-ZYrv-Tfo.js";import"./index-BfIwtvgN.js";import"./PurePanel-Dli38PzI.js";import"./render-BOgoBHmE.js";const{useStore:V,useStoreSlice:e,getStore:$}=s(t=>({id:"",setId:o=>t({id:o})})),x=p(m)`
  padding: var(--page-padding);
`;function q(){const{id:t}=i(),{setId:o}=e("setId");return a.useEffect(()=>{o(t)},[t,o]),r.jsx(u,{onFirstAppear:()=>n.appear("flow-detail",{id:t}),children:r.jsx(x,{children:r.jsx(l,{pageStatus:c.VIEW})})})}async function z({params:t}){return{id:t.id}}function f(){const{id:t}=e("id");return r.jsx(d,{buttons:[{text:"编辑",to:`/flow/editor/${t}`}]})}const G={title:"流水详情",crumbLabel:"详情",needBackIcon:!0,rightArea:r.jsx(f,{})};export{q as Component,G as handle,z as loader};
