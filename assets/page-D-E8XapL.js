import{y as b,r as n,x as s}from"./index-CHoudlAF.js";import{h as C,l as a,d as h,i as F,b as w,g as j,B as v}from"./index-KNKRzeP1.js";import{P as p,F as B}from"./flow-form-DWGXpDCb.js";import{B as R}from"./index-sYXgAuYL.js";import{A as I}from"./index-BitVjYMC.js";import{S as V,c as k}from"./Subject-DV7yB97b.js";import{u as y}from"./use-navigate-D3hswbGr.js";import"./store-BzCwuAk0.js";import"./index-D9GgxVnM.js";import"./index-hnKyZ0Lg.js";import"./index-DvQpSxGL.js";import"./asyncToGenerator-Bnzkvon6.js";import"./pickAttrs-fF1EGGK3.js";import"./compact-item-BTly7nuA.js";import"./LoadingOutlined-BnHu2zNf.js";import"./index-CK-FtDdO.js";import"./index-B10lHOP7.js";import"./index-P8B0AtRj.js";import"./PurePanel-D2q8tB-3.js";import"./render-DnN8iV6w.js";import"./iconBase-d73V5-N0.js";import"./index-BOsBzvxJ.js";import"./is-phone-BPh1lWQO.js";const{useStore:it,useStoreSlice:u,getStore:_}=C(t=>({id:"",setId:e=>t({id:e})}));var i=(t=>(t.SAVE="save",t.SAVE_SUCCESS="save_success",t))(i||{});const m=new V;function S(t){m.next(t),a.event("flow-editor-action",t)}const l=k(m),D=h(w)`
  padding: var(--page-padding);
`;function nt(){const{id:t}=b(),{setId:e}=u("setId"),o=n.useRef({}),[f,E]=n.useState(!1),c=t?p.EDITOR:p.CREATE;n.useEffect(()=>{e(t||"")},[e,t]),l(r=>{if(r.id!==t)return a.error("action.id !== id",r);o.current.form.validateFields().then(()=>{o.current.form.submit(),E(!0)})},i.SAVE);const g=n.useCallback(r=>{const{id:d}=_(),{addFlow:x,updateFlow:A}=F();d.length?A(d,r):x(r),S({id:d,type:i.SAVE_SUCCESS})},[]);return s.jsx(I,{onFirstAppear:()=>a.appear("flow-editor",{id:t,pageStatus:c}),children:s.jsx(D,{children:s.jsx(B,{ref:o,disabled:f,pageStatus:c,onFinish:g})})})}function L(){const{id:t}=u("id"),e=y();return l(o=>{if(o.id!==t)return a.error("action.id !== id",o);j().showMessage({type:"success",content:"保存成功",onClose(){e("/flow")}})},i.SAVE_SUCCESS),s.jsx(R,{buttons:[{text:"取消",onClick(){e(-1)}},{text:"保存",$presetTheme:v.PRIMARY,onClick(){S({id:t,type:i.SAVE})}}]})}const at={title:"编辑",needBackIcon:!0,rightArea:s.jsx(L,{})};async function dt({params:t}){return{id:t.id||""}}export{nt as Component,at as handle,dt as loader};