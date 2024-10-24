import{r as p,o as r}from"./index-B0lFOTcI.js";import{d as g,A as y,l as A,c as S,b as C,F,a as f,H as v}from"./index-DBbXVGRZ.js";import{b as T,p as B}from"./flow-C09FetVe.js";import{S as D}from"./icon-i73GiklA.js";const k=g(f)`
  padding: var(--page-padding);
`,w=g(f)`
  width: 60vmin;
  height: 60vmin;
`,z=g(D)`
  width: 100%;
  height: 100%;
  transform: rotate(${({$rotate:t})=>t}deg);
  transition: transform ${({$speed:t})=>t}ms;
`,b=g.span`
  font-size: 3rem;
`;function E(t){return t%360===0?"top":t%360===90?"right":t%360===180?"bottom":"left"}function H(t,s,a){return a==="top"?[t-1,s]:a==="right"?[t,s+1]:a==="bottom"?[t+1,s]:[t,s-1]}function M(t,s,a,h){const u=v((e,n)=>{a(o=>o+90),s(B(o=>{var i;const m=o[e][n]=o[e][n]+90,d=E(m),[c,x]=H(e,n,d),$=(i=o[c])==null?void 0:i[x];setTimeout(()=>{if($===void 0)return h.current=!1;u(c,x)},t)}))},10,!0);return(e,n)=>{u(e,n)}}function N(){const t=[5,5],[s,a]=t,[h,u]=p.useState(Array.from({length:s},()=>new Array(a).fill(0))),e=500,[n,o]=p.useState(0),[m,d]=p.useState(10),c=p.useRef(!1),x=p.useMemo(()=>M(e,u,o,c),[e]),$=(i,l)=>{if(!c.current){if(c.current=!0,m<=0){A.event("game-sbwd-over",{totalRotate:n}),T().showMessage({content:`游戏结束, 当前分数 ${n}!`,onClose(){u(Array.from({length:i},()=>new Array(l).fill(0))),d(10),o(0)}});return}d(j=>j-1),x(i,l)}};return r.jsx(y,{onFirstAppear:()=>A.appear("game-sbwd"),children:r.jsxs(k,{$flex:"1",$gap:"5",$direction:S.column,$alignItems:C.center,$justifyContent:F.center,children:[r.jsxs(f,{$gap:"1",children:[r.jsxs(b,{children:["剩余步数: ",m]}),r.jsxs(b,{children:["当前度数: ",n]})]}),r.jsx(w,{$direction:S.column,$gap:"1",children:h.map((i,l)=>r.jsx(f,{$gap:"1",children:i.map((j,R)=>r.jsx(f,{$flex:"1",children:r.jsx(z,{$rotate:j,$speed:e,onClick:()=>$(l,R)})},R))},l))})]})})}const P={title:"十步万度",needBackIcon:!0};export{N as Component,P as handle};
