import{x as e,r as s}from"./index-0LAKHuTr.js";import{B as c}from"./index-4p12tTF1.js";import{u as i}from"./store-Cod_P8-O.js";import{Q as a,l,w as u}from"./index-Dnz2Iu2C.js";import{E as m}from"./index-CRSTVvtR.js";import"./iconBase-sKEVBBKf.js";import"./index-CLFsw9Wl.js";import"./index-Cc3XqGQH.js";import"./asyncToGenerator-CJUAp7vk.js";import"./index-B2hQfkSL.js";function p(){return e.jsx(c,{buttons:[{text:"下载",onClick(){window.logger.todo("下载视频")}}]})}async function f(t){if(!t)return"";const{url:r,content:n}=t;if(r)return r;if(!n)return"";const o=a(n);return URL.createObjectURL(o)}function E(){const{currentRecord:t}=i("currentRecord"),[r,n]=s.useState("");return s.useEffect(()=>{(async()=>{try{const o=await f(t);n(o)}catch(o){l.error("get-play-url",o.message)}})()},[t]),e.jsx(u,{if:!!r,fullback:e.jsx(m,{}),children:()=>e.jsx("video",{src:r,controls:!0})})}const S={title:"回放",needBackIcon:!0,rightArea:e.jsx(p,{})};export{E as Component,S as handle};
