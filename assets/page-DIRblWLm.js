import{z as i,r as a,y as e}from"./index-566Ptau1.js";import{h as s,d as p,l as n,b as m}from"./index-C_F239hU.js";import{B as d}from"./index-CAKjnHWk.js";import{F as l,P as c}from"./flow-form-Jp_nzJ7x.js";import{A as u}from"./index-CVBc4MXj.js";import"./index-oTfSKDWY.js";import"./index-DeVuV3A2.js";import"./asyncToGenerator-Cb_jwySD.js";import"./store-BeciFBbT.js";import"./index-D9GgxVnM.js";import"./index-D1JuaCwJ.js";import"./pickAttrs-CEmwIjSb.js";import"./compact-item-B5PG22ly.js";import"./LoadingOutlined-BToj7NDv.js";import"./index-BYZQLEm2.js";import"./index-D8qQuXtf.js";import"./index-DTuDIH_z.js";import"./PurePanel-CBAYPnm4.js";import"./render-BOxlht-3.js";const{useStore:C,useStoreSlice:o,getStore:H}=s(t=>({id:"",setId:r=>t({id:r})})),x=p(m)`
  padding: var(--page-padding);
`;function R(){const{id:t}=i(),{setId:r}=o("setId");return a.useEffect(()=>{r(t)},[t,r]),e.jsx(u,{onFirstAppear:()=>n.appear("flow-detail",{id:t}),children:e.jsx(x,{children:e.jsx(l,{pageStatus:c.VIEW})})})}async function V({params:t}){return{id:t.id}}function f(){const{id:t}=o("id");return e.jsx(d,{buttons:[{text:"编辑",to:`/flow/editor/${t}`}]})}const $={title:"流水详情",crumbLabel:"详情",needBackIcon:!0,rightArea:e.jsx(f,{})};export{R as Component,$ as handle,V as loader};
