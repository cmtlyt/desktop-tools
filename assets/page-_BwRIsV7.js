import{x as r,y as a}from"./index-D9Ti2l9s.js";import{A as i}from"./index-qAIdwdQd.js";import{l as n}from"./index-BuV4sdBQ.js";import{A as s,T as p}from"./title-area-Ymgv_dta.js";import{u as d,a as m,U as u,g as c}from"./util-Ba7Faf_w.js";import{B as l}from"./index-DEpECmp6.js";import"./index-D9GgxVnM.js";import"./index-B2u9DX8u.js";import"./asyncToGenerator-Di2GTAJM.js";import"./opfs-CNYPQYcz.js";import"./opfs-key-D0VDwJ2Y.js";import"./iconBase-BT1Ex9Hv.js";import"./index-BCwKMmEt.js";import"./index-DZHc1nto.js";function f(){const{currentNotepad:t}=d("currentNotepad");return t?r.jsx(l,{buttons:[{text:"分享",logInfo:{id:t.id},onClick:()=>m(t)}]}):null}function D(){const t=a();return r.jsx(i,{onFirstAppear:()=>n.appear("notepad-preview",{id:t.id,isShare:t.isShare}),children:r.jsx(s,{readOnly:!0})})}const E={title:"预览笔记",crumbLabel:"预览",needBackIcon:!0,rightArea:r.jsx(f,{}),titleArea:r.jsx(p,{readOnly:!0})};async function I({params:t}){const{source:e}=t;return e&&u(e).then(o=>{c().setNotepad(JSON.parse(o))}),{id:t.id,isShare:!!e}}export{D as Component,E as handle,I as loader};
