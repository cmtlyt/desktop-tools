import{z as i,r as a,y as e}from"./index-CjNiMQur.js";import{h as s,d as p,A as n,l as d,b as m}from"./index-BjqInUx_.js";import{B as l}from"./index-DtJMEvcR.js";import{F as c,P as u}from"./flow-form-CYtvrJf-.js";import"./index-svORPkEr.js";import"./index-BxL5tSbX.js";import"./asyncToGenerator-BUpkVDYh.js";import"./store-Dvwz9hlM.js";import"./index-D9GgxVnM.js";import"./index-BT2Wt7M7.js";import"./pickAttrs-BwkYZJhX.js";import"./compact-item-5UiBu6aY.js";import"./LoadingOutlined-Bm8CwLXu.js";import"./index-CjAyEFFt.js";import"./index-DqR7uQyZ.js";import"./PurePanel-DZPRj-ZC.js";import"./render-DXrmojxF.js";const{useStore:v,useStoreSlice:o,getState:z}=s(t=>({id:"",setId:r=>t({id:r})})),x=p(m)`
  padding: var(--page-padding);
`;function C(){const{id:t}=i(),{setId:r}=o("setId");return a.useEffect(()=>{r(t)},[t,r]),e.jsx(n,{onFirstAppear:()=>d.appear("flow-detail",{id:t}),children:e.jsx(x,{children:e.jsx(c,{pageStatus:u.VIEW})})})}async function H({params:t}){return{id:t.id}}function f(){const{id:t}=o("id");return e.jsx(l,{buttons:[{text:"编辑",to:`/flow/editor/${t}`}]})}const R={title:"流水详情",crumbLabel:"详情",needBackIcon:!0,rightArea:e.jsx(f,{})};export{C as Component,R as handle,H as loader};
