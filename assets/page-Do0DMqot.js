import{x as e,r as s}from"./index-BUm1efIT.js";import{B as i}from"./index-C1796vyK.js";import{u as a}from"./store-BB5Ujue5.js";import{W as l,l as u,w as m}from"./index-C3E55VMa.js";import{U as p}from"./index.esm-hAynTbL8.js";import{E as f}from"./index-Dao0OglI.js";import"./iconBase-ChGnTlbA.js";import"./index-BtcKOnEI.js";import"./index-2tQZx52y.js";import"./asyncToGenerator-DxuXOBX7.js";import"./index-BTB-7vBd.js";function x(){return e.jsx(i,{buttons:[{text:"下载",onClick(){window.logger.todo("下载视频")}}]})}async function y(t){if(!t)return"";const{url:r,content:n}=t;if(r)return r;if(!n)return"";const o=await p(n),c=new Blob([l(o)]);return URL.createObjectURL(c)}function k(){const{currentRecord:t}=a("currentRecord"),[r,n]=s.useState("");return s.useEffect(()=>{(async()=>{try{const o=await y(t);n(o)}catch(o){u.error("get-play-url",o)}})()},[t]),e.jsx(m,{if:!!r,fullback:e.jsx(f,{}),children:()=>e.jsx("video",{src:r,controls:!0})})}const L={title:"回放",needBackIcon:!0,rightArea:e.jsx(x,{})};export{k as Component,L as handle};
