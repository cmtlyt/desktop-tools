import{x as o,r as a}from"./index-DQHwS1gT.js";import{B as l}from"./index-CKMlsb51.js";import{Q as m,l as s,w as p}from"./index-BHQnjDV8.js";import{g as u,u as i}from"./store-BT_2aFHX.js";import{i as f,b as d}from"./opfs-B4in1ogH.js";import{E as y}from"./index-CK9AGql7.js";import{A as x}from"./index-B8WpFrNo.js";import"./iconBase-DKtpF4Ea.js";import"./index-C91J-VvU.js";import"./is-phone-Cn6rv9_e.js";import"./index-DHUDzx2j.js";import"./asyncToGenerator-Dm7hMuGV.js";import"./index-BT5GcXJL.js";async function w(t){if(!f(t))return t;const e=await d(t);return URL.createObjectURL(e)}async function c(t){if(!t)return"";const{url:e,content:r}=t;if(e)return await w(e);if(!r)return"";const n=m(r);return URL.createObjectURL(n)}async function U(){const{currentRecord:t}=u(),e=await c(t),r=document.createElement("a");r.style.display="none",r.href=e,r.download=`${t==null?void 0:t.name}.webm`,r.click(),setTimeout(()=>{window.URL.revokeObjectURL(e)},100)}function g(){return o.jsx(l,{buttons:[{text:"下载",onClick:U}]})}function j(){const{currentRecord:t}=i("currentRecord");return(t==null?void 0:t.name)||"回放"}function v(){const{currentRecord:t}=i("currentRecord"),[e,r]=a.useState("");return a.useEffect(()=>{(async()=>{try{const n=await c(t);r(n)}catch(n){s.error("get-play-url",n.message)}})()},[t]),o.jsx(x,{onFirstAppear:()=>s.appear("playback"),children:o.jsx(p,{when:!!e,fullback:o.jsx(y,{}),children:()=>o.jsx("video",{src:e,controls:!0})})})}const T={title:"回放",needBackIcon:!0,rightArea:o.jsx(g,{}),titleArea:o.jsx(j,{})};export{v as Component,T as handle};
