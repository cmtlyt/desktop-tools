import{x as n}from"./index-ZawOXNeP.js";import{d,b as h,q as j,l as m,z as k,m as B}from"./index-DkylwoUz.js";import{L as $}from"./index-Su3iJh06.js";const L=d(h)`
  gap: ${i=>{const{$gap:t}=i;if(typeof t=="string"){const r=parseFloat(t);return!isNaN(r)&&String(r)===t?`${t}rem`:t}return`${t}rem`}};
`;function S(i){const{buttons:t,wrapperProps:r,$gap:f=1,className:g}=i;return n.jsx(L,{...r,$gap:f,className:g,children:t.map(({action:e,text:c,to:s,logInfo:x,onClick:a,...p},b)=>{const l={text:c,buttonProps:p,to:s,...x},u=n.jsx(j,{...p,onClick:o=>{s||m.click(e||"button-list-click",l),a==null||a(o)},children:c});return n.jsx(k,{if:!B(s),fullback:u,children:n.jsx($,{to:s,children:u,onClick:o=>{o.stopPropagation(),m.click(e||"button-list-link-click",l)}})},b)})})}export{S as B};
