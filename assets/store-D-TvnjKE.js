import{o as e,L as w}from"./index-_tsl3Qgu.js";import{d as F,a as S,n as b,l as m,v as h,i as j}from"./index-oQJcAC9d.js";import{c as k,a as B}from"./index-BnycnzTL.js";const $=F(S)`
  gap: ${r=>{const{$gap:t}=r;if(typeof t=="string"){const s=parseFloat(t);return!isNaN(s)&&String(s)===t?`${t}rem`:t}return`${t}rem`}};
`;function E(r){const{buttons:t,wrapperProps:s,$gap:f=1,className:g}=r;return e.jsx($,{...s,$gap:f,className:g,children:t.map(({action:i,text:c,to:o,logInfo:x,onClick:n,...l},d)=>{const u={text:c,buttonProps:l,to:o,...x},p=e.jsx(b,{...l,onClick:a=>{o||m.click({action:i||"button-list-click",...u}),n==null||n(a)},children:c});return e.jsx(h,{if:!j(o),fullback:p,children:e.jsx(w,{to:o,children:p,onClick:a=>{a.stopPropagation(),m.click({action:i||"button-list-link-click",...u})}})},d)})})}const L=k(r=>({currentFlow:void 0,setFlow:t=>r({currentFlow:t})})),I=r=>L(B(r));export{E as B,I as u};
