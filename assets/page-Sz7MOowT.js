import{x as r,y as a}from"./index-BY3nrP9r.js";import{A as i}from"./index-DTikepZ9.js";import{l as n}from"./index-oAfEQjl6.js";import{A as s,T as p}from"./title-area-DNM63x6i.js";import{u as d,a as m,U as u,g as c}from"./util-CT8keR3M.js";import{B as l}from"./index-D3-29qhB.js";import"./index-D9GgxVnM.js";import"./index-BPIq5Q5V.js";import"./asyncToGenerator-BLr0nK3v.js";import"./opfs-Cjf7SGZ4.js";import"./opfs-key-D0VDwJ2Y.js";import"./iconBase-Dc0FsvGZ.js";import"./index-CxaQHrrZ.js";import"./index-DKNDKZhC.js";function f(){const{currentNotepad:t}=d("currentNotepad");return t?r.jsx(l,{buttons:[{text:"分享",logInfo:{id:t.id},onClick:()=>m(t)}]}):null}function D(){const t=a();return r.jsx(i,{onFirstAppear:()=>n.appear("notepad-preview",{id:t.id,isShare:t.isShare}),children:r.jsx(s,{readOnly:!0})})}const E={title:"预览笔记",crumbLabel:"预览",needBackIcon:!0,rightArea:r.jsx(f,{}),titleArea:r.jsx(p,{readOnly:!0})};async function I({params:t}){const{source:e}=t;return e&&u(e).then(o=>{c().setNotepad(JSON.parse(o))}),{id:t.id,isShare:!!e}}export{D as Component,E as handle,I as loader};
