import{N as s,r as i,L as e}from"./index-CJ_IAsxN.js";import{c as n}from"./index-nwGVCKA8.js";import{B as d}from"./store-D3quMkSH.js";import{F as p,P as c}from"./flow-form-teuYSDoQ.js";import{A as m}from"./index-D6UBKmSS.js";import{l as u}from"./index-BUSCz6YA.js";import"./layout-CZY5c0iG.js";const r=n(t=>({id:"",setId:o=>t({id:o})}));function D(){const{id:t}=s(),{setDetailId:o}=r(a=>({setDetailId:a.setId}));return i.useEffect(()=>{o(t)},[t,o]),e.jsx(m,{onFirstAppear:()=>u.appear("flow-detail",{id:t}),children:e.jsx(p,{pageStatus:c.VIEW})})}async function F({params:t}){return{id:t.id}}function l(){const{id:t}=r(o=>({id:o.id}));return e.jsx(d,{buttons:[{text:"编辑",to:`/flow/editor/${t}`}]})}const w={title:"流水详情",crumbLabel:"详情",needBackIcon:!0,rightArea:e.jsx(l,{})};export{D as Component,w as handle,F as loader};
