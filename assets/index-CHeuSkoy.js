import{L as s,M as f}from"./index-DTR37HZ-.js";import{d as g,a as l,f as x}from"./button-CmO3GyJC.js";const B=g(l)`
  gap: ${n=>{const{$gap:t}=n;if(typeof t=="string"){const r=parseFloat(t);return!isNaN(r)&&String(r)===t?`${t}rem`:t}return`${t}rem`}};
`;function j(n){const{buttons:t,wrapperProps:r,$gap:p=1,className:i}=n;return s.jsx(B,{...r,$gap:p,className:i,children:t.map(({text:u,to:o,...c},a)=>{const e=s.jsx(x,{...c,children:u},a);return o?s.jsx(f,{to:o,children:e,onClick:m=>m.stopPropagation()},a):e})})}export{j as B};
