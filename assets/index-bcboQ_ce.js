import{x as n}from"./index-CiXsOv_w.js";import{d,b as h,q as j,l as u,m as k}from"./index-25doOVbC.js";import{S as B}from"./index-DFWCW1bo.js";import{L as $}from"./index-DOtAjDz2.js";const L=d(h)`
  gap: ${i=>{const{$gap:r}=i;if(typeof r=="string"){const t=parseFloat(r);return!isNaN(t)&&String(t)===r?`${r}rem`:r}return`${r}rem`}};
`;function q(i){const{buttons:r,wrapperProps:t,$gap:f=1,className:g}=i;return n.jsx(L,{...t,$gap:f,className:g,children:r.map(({action:e,text:c,to:s,logInfo:x,onClick:o,...p},b)=>{const l={text:c,buttonProps:p,to:s,...x},m=n.jsx(j,{...p,onClick:a=>{s||u.click(e||"button-list-click",l),o==null||o(a)},children:c});return n.jsx(B,{if:!k(s),fullback:m,children:n.jsx($,{to:s,children:m,onClick:a=>{a.stopPropagation(),u.click(e||"button-list-link-click",l)}})},b)})})}export{q as B};
