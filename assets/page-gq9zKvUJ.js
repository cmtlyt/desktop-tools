import{y as r,z as a}from"./index-566Ptau1.js";import{A as i}from"./index-CVBc4MXj.js";import{l as n}from"./index-C_F239hU.js";import{A as s,T as p}from"./title-area-D7jckSRf.js";import{u as d,U as u,g as m}from"./store-DLxM_2yZ.js";import{B as c}from"./index-CAKjnHWk.js";import{s as l}from"./util-DuJM4hy5.js";import"./index-oTfSKDWY.js";import"./index-DeVuV3A2.js";import"./asyncToGenerator-Cb_jwySD.js";function f(){const{currentNotepad:t}=d("currentNotepad");return t?r.jsx(c,{buttons:[{text:"分享",logInfo:{id:t.id},onClick:()=>l(t)}]}):null}function b(){const t=a();return r.jsx(i,{onFirstAppear:()=>n.appear("notepad-preview",{id:t.id,isShare:t.isShare}),children:r.jsx(s,{readOnly:!0})})}const O={title:"预览笔记",crumbLabel:"预览",needBackIcon:!0,rightArea:r.jsx(f,{}),titleArea:r.jsx(p,{readOnly:!0})};async function k({params:t}){const{source:e}=t;return e&&u(e).then(o=>{m().setNotepad(JSON.parse(o))}),{id:t.id,isShare:!!e}}export{b as Component,O as handle,k as loader};
