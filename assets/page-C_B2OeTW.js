import{y as i,r as a,x as r}from"./index-0LAKHuTr.js";import{h as s,d as p,l as n,b as m}from"./index-Dnz2Iu2C.js";import{B as d}from"./index-4p12tTF1.js";import{F as l,P as c}from"./flow-form-C-4Jy4Rn.js";import{A as u}from"./index-BftM7raP.js";import"./iconBase-sKEVBBKf.js";import"./index-CLFsw9Wl.js";import"./index-Cc3XqGQH.js";import"./asyncToGenerator-CJUAp7vk.js";import"./store-tO8DAWnn.js";import"./index-D9GgxVnM.js";import"./index-Py8ww93l.js";import"./pickAttrs-2xNah1Gy.js";import"./compact-item-CIkR8hs0.js";import"./LoadingOutlined-3iW9N3ui.js";import"./index-B2hQfkSL.js";import"./index-CU5Cp99j.js";import"./index-o2_paYW5.js";import"./PurePanel-CWQjk1dx.js";import"./render-v6DF3aS7.js";const{useStore:R,useStoreSlice:o,getStore:V}=s(t=>({id:"",setId:e=>t({id:e})})),x=p(m)`
  padding: var(--page-padding);
`;function $(){const{id:t}=i(),{setId:e}=o("setId");return a.useEffect(()=>{e(t)},[t,e]),r.jsx(u,{onFirstAppear:()=>n.appear("flow-detail",{id:t}),children:r.jsx(x,{children:r.jsx(l,{pageStatus:c.VIEW})})})}async function q({params:t}){return{id:t.id}}function f(){const{id:t}=o("id");return r.jsx(d,{buttons:[{text:"编辑",to:`/flow/editor/${t}`}]})}const z={title:"流水详情",crumbLabel:"详情",needBackIcon:!0,rightArea:r.jsx(f,{})};export{$ as Component,z as handle,q as loader};
