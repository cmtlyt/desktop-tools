import{r as i,x as m}from"./index-DVtMNKSb.js";import{E as o}from"./index-CC5aZwRs.js";function l(s,a){const t=new Date(s),n={yyyy:t.getFullYear(),yy:t.getFullYear()%100,MM:t.getMonth()+1,DD:t.getDate(),hh:t.getHours(),mm:t.getMinutes(),ss:t.getSeconds(),SS:t.getMilliseconds()};return a.replace(/[YyMDhmsS]+/g,r=>{var e;return((e=n[r])==null?void 0:e.toString().padStart(2,"0"))||r})}const D=i.memo(s=>{const{date:a,children:t,format:n="yyyy-MM-DD",className:r}=s,e=a||t;if(!e)return null;const c=l(e,n);return m.jsx("span",{className:r,children:c})}),g=()=>m.jsx(o,{image:o.PRESENTED_IMAGE_SIMPLE});export{D,g as E};
