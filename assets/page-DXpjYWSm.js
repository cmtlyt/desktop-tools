import{x as o,y as A,r as d}from"./index-CuVosfZX.js";import{A as g}from"./index-Cx47vcjc.js";import{l as a,B as x,M as v,N as m,g as S}from"./index-tcDppvfS.js";import{B as b}from"./index-D9FkW4Wt.js";import{S as y,c as E}from"./Subject-aub5UeNy.js";import{u as j}from"./use-navigate-BC6KTyUP.js";import{u as k}from"./use-global-event-C2FY4bjy.js";import{g as h,A as w,T as B}from"./title-area-DpKOzUAB.js";import{s as N}from"./util-BKYlSt5L.js";import"./iconBase-CyOH_aAc.js";import"./index-C8v1i4st.js";import"./is-phone-CKXxet_x.js";import"./index-hqFzXAUY.js";import"./asyncToGenerator-Yu8HGACV.js";import"./index-Baf81WNP.js";import"./index-C02WKBIm.js";import"./opfs-key-D0VDwJ2Y.js";var n=(t=>(t.SAVE="save",t))(n||{});const l=new y;function R(t){l.next(t),a.event("notepad-editor-action",t)}const L=E(l);function M(){return o.jsx(b,{buttons:[{text:"保存",$presetTheme:x.PRIMARY,onClick:()=>R({id:"notepad-editor-save",type:n.SAVE})}]})}function U(){const{id:t}=A(),s=d.useRef(null),i=j(),p=d.useCallback(async()=>{var u;const e=(u=s.current)==null?void 0:u.getMarkdown();if(!e)return;a.event("notepad-editor-save",{id:t});const{title:c}=h(),r={id:t,title:c,url:"",content:""};if(v()){const f=await N(c,e);r.url=f}else r.content=e;t?m().updateNotepad(t,r):m().addNotepad(r),S().showMessage({content:"保存成功",type:"success",onClose:()=>i(-1)})},[t,i]);return L(p,n.SAVE),k("keydown",e=>{e.key==="s"&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),p())}),o.jsx(g,{onFirstAppear:()=>a.appear("notepad-editor"),children:o.jsx(w,{ref:s})})}const W={title:"编辑笔记",crumbLabel:"编辑",needBackIcon:!0,rightArea:o.jsx(M,{}),titleArea:o.jsx(B,{})};async function X({params:t}){return{id:t.id}}export{U as Component,W as handle,X as loader};
