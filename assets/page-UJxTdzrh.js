import{r,o as e}from"./index-VHn9tDtt.js";import{d as p,l as d,A as w,c as C,b as E,F as z,a as u,H}from"./index-DZG1hYte.js";import{b as I,p as M}from"./flow-DF_Z1WUi.js";import{S as W}from"./icon-uJ3-9BtB.js";const J=p(u)`
  padding: var(--page-padding);
`,L=p(u)`
  width: 60vmin;
  height: 60vmin;
`,N=r.memo(p(W)`
  width: 100%;
  height: 100%;
  transform: rotate(${({$rotate:t})=>t}deg);
  transition: transform ${({$speed:t})=>t}ms;
`),y=p.span`
  font-size: 3rem;
`;function P(t){return t%360===0?"top":t%360===90?"right":t%360===180?"bottom":"left"}function V(t,n,a){return a==="top"?[t-1,n]:a==="right"?[t,n+1]:a==="bottom"?[t+1,n]:[t,n-1]}function Q(){const t=[5,5],[n,a]=t,[F,g]=r.useState(Array.from({length:n},()=>new Array(a).fill(0))),m=500,[l,h]=r.useState(0),[f,$]=r.useState(10),[x,j]=r.useState(!1),v=r.useMemo(()=>{const c=H((s,i)=>{h(o=>o+90),g(M(o=>{var A;const T=o[s][i]=o[s][i]+90,k=P(T),[R,S]=V(s,i,k),B=(A=o[R])==null?void 0:A[S];setTimeout(()=>{if(B===void 0)return j(!1);c(R,S)},m)}))},10,!0);return c},[m]),D=(c,s)=>{x||(j(!0),v(c,s),$(i=>i-1))},b=r.useCallback(()=>{g(Array.from({length:n},()=>new Array(a).fill(0))),$(10),h(0)},[n,a]);return r.useEffect(()=>{!x&&f<=0&&(d.event("game-sbwd-over",{totalRotate:l}),d.expose(),I().showMessage({content:`游戏结束, 当前分数 ${l}!`,onClose:b}))},[x,b,l,f]),e.jsx(w,{onFirstAppear:()=>d.appear("game-sbwd"),children:e.jsxs(J,{$flex:"1",$gap:"5",$direction:C.column,$alignItems:E.center,$justifyContent:z.center,children:[e.jsxs(u,{$gap:"1",children:[e.jsxs(y,{children:["剩余步数: ",f]}),e.jsxs(y,{children:["当前度数: ",l]})]}),e.jsx(L,{$direction:C.column,$gap:"1",children:F.map((c,s)=>e.jsx(u,{$gap:"1",children:c.map((i,o)=>e.jsx(u,{$flex:"1",onClick:()=>D(s,o),children:e.jsx(N,{$rotate:i,$speed:m})},o))},s))})]})})}const U={title:"十步万度",needBackIcon:!0};export{Q as Component,U as handle};
