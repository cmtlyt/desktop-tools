import{z as i,r as a,y as r}from"./index-CfwBVzOL.js";import{h as s,i as p,d as n,A as m,l as d,b as c}from"./index-CnrgWnd9.js";import{B as l}from"./index-BSUe0tgs.js";import{F as u,P as x}from"./flow-form-C6onhznF.js";import"./index-DqussmJY.js";import"./index-2Fq0qy_u.js";import"./asyncToGenerator-CFFvzZYl.js";import"./store-Cwvo1eqR.js";import"./index-D9GgxVnM.js";import"./index-DsYdomRQ.js";import"./pickAttrs-djDJA2nm.js";import"./compact-item-DhqJn8Xy.js";import"./LoadingOutlined-SeezGcqP.js";import"./index-DatP7iKg.js";import"./index-C75LepOK.js";import"./PurePanel-D4MpnO5H.js";import"./render-BtMbuUGD.js";const f=s(t=>({id:"",setId:o=>t({id:o})})),e=t=>f(p(t)),g=n(c)`
  padding: var(--page-padding);
`;function C(){const{id:t}=i(),{setId:o}=e("setId");return a.useEffect(()=>{o(t)},[t,o]),r.jsx(m,{onFirstAppear:()=>d.appear("flow-detail",{id:t}),children:r.jsx(g,{children:r.jsx(u,{pageStatus:x.VIEW})})})}async function R({params:t}){return{id:t.id}}function j(){const{id:t}=e("id");return r.jsx(l,{buttons:[{text:"编辑",to:`/flow/editor/${t}`}]})}const V={title:"流水详情",crumbLabel:"详情",needBackIcon:!0,rightArea:r.jsx(j,{})};export{C as Component,V as handle,R as loader};