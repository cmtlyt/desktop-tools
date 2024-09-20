import{L as s,M as m}from"./index-TvLNaLRo.js";import{d as f,a as x,f as g}from"./button-D7d_GL8l.js";const l=f(x)`
  gap: ${n=>{const{$gap:t}=n;if(typeof t=="string"){const r=parseFloat(t);return!isNaN(r)&&String(r)===t?`${t}rem`:t}return`${t}rem`}};
`;function d(n){const{buttons:t,wrapperProps:r,$gap:p=1,className:i}=n;return s.jsx(l,{...r,$gap:p,className:i,children:t.map(({text:u,to:e,...c},o)=>{const a=s.jsx(g,{...c,children:u},o);return e?s.jsx(m,{to:e,children:a},o):a})})}export{d as B};
