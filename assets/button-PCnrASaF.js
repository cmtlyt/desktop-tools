import{d as u}from"./styled-components.browser.esm-DqKzGx4B.js";import{r as c,G as p,bC as N,bD as E}from"./index-DJrG1xPe.js";const $=document.documentElement,f=()=>parseFloat(getComputedStyle($).fontSize);function S(){const[r,o]=c.useState(f());return c.useEffect(()=>{o(f());const t=p(()=>o(f()),300);return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)}},[]),r}function R(){const[,r]=c.useState(0);return c.useCallback(()=>{r(o=>++o%10)},[])}function i(r,o,t){const n=e=>t?t(e,o):e,a=e=>{if(typeof e=="string"){const s=parseFloat(e);return N(s)?n(e):String(s)===e?t?n(s):`${s}rem`:n(e)}return t?n(e):`${e/o}rem`};return Array.isArray(r)?r.map(a):a(r)}function W(r,o){const t=S(),n=c.useRef(i(r,t,o)),a=R();return c.useEffect(()=>{const e=i(r,t,o);E(n.current,e)||(n.current=e,a())},[r,t,a,o]),n.current}function h(r){const o=f();return i(r,o)}const w=["children","className"];function I(r,o=[],t=Object.keys(r)){const n={},a=[...w,...o];return t.forEach(e=>{a.includes(e)||(e.startsWith("$")?n[e.slice(1)]=r[e]:n[e]=r[e])}),n}function y(r){return o=>o[r]}function b(r){const{font:o="",bg:t="",border:n=""}=r;return{"--font-color":o,"--bg-color":t,"--border-color":n}}function g(r){return Object.entries(r).map(([o,t])=>`${o}: ${t};`).join(`
`)}var v=(r=>(r.ROW="row",r.COLUMN="column",r))(v||{}),m=(r=>(r.NOWRAP="nowrap",r.WRAP="wrap",r))(m||{}),C=(r=>(r.START="flex-start",r.END="flex-end",r.CENTER="center",r.BASELINE="baseline",r.STRETCH="stretch",r))(C||{}),A=(r=>(r.START="flex-start",r.END="flex-end",r.CENTER="center",r.BETWEEN="space-between",r.AROUND="space-around",r))(A||{});const O=["$flex","$justifyContent","$alignItems","$justifyItems","$alignContent"];function G(r){const{$direction:o,$wrap:t,$gap:n=0,...a}=r,e=h(n);return{flexDirection:o,flexWrap:t,gap:e,...I(a,[],O)}}const x=u.section`
  display: flex;
  ${G}
`;function D(r){const{$x:o="0",$y:t="0",$blur:n="1rem",$spread:a="-0.4rem",$color:e="var(--color-shadow)"}=r;return`box-shadow: ${o} ${t} ${n} ${a} ${e}`}const T=u(x)`
  background-color: white;
  ${D}
`;var P=(r=>(r.SUCCESS="SUCCESS",r.WARNING="WARNING",r.DANGER="DANGER",r.INFO="INFO",r.PROCESSING="PROCESSING",r))(P||{});function d(r){switch(r){case"SUCCESS":return{font:"#52c41a",bg:"#f6ffed",border:"#b7eb8f"};case"WARNING":return{font:"#faad14",bg:"#fffbe6",border:"#ffe58f"};case"DANGER":return{font:"#ff4d4f",bg:"#fff2f0",border:"#ffccc7"};case"PROCESSING":return{font:"#1677ff",bg:"#e6f4ff",border:"#91caff"};case"INFO":case void 0:return{font:"rgba(0, 0, 0, 0.88)",bg:"#fafafa",border:"rgb(217, 217, 217)"};default:return{font:"rgba(0, 0, 0, 0.88)",bg:"#fafafa",border:"rgb(217, 217, 217)"}}}const z=u.section`
  ${r=>{const{$type:o="DEFAULT",$presetTheme:t,$color:n=d(t)}=r,a=d(),e=b({...a,...n});return o==="SOLID"?e["--border-color"]="transparent":o==="OUTLINE"&&(e["--bg-color"]="transparent"),g(e)}}

  padding: 0.5rem 1rem;
  height: max-content;
  font-size: 1.2rem;
  border-radius: var(--radius-full);
  line-height: 1;
  color: var(--font-color);
  background-color: var(--bg-color);
  outline: 0.1rem solid var(--border-color);
  flex-shrink: 0;
  white-space: nowrap;
`;var F=(r=>(r.PRIMARY="PRIMARY",r.WARNING="WARNING",r.DANGER="DANGER",r.INFO="INFO",r))(F||{});function l(r){switch(r){case"PRIMARY":return{font:"#fff",bg:"#1677ff",border:"#1677ff"};case"WARNING":return{font:"#fff",bg:"#faad14",border:"#faad14"};case"DANGER":return{font:"#fff",bg:"#f5222d",border:"#f5222d"};case"INFO":case void 0:return{font:"rgba(0, 0, 0, 0.88)",bg:"#fafafa",border:"rgb(217, 217, 217)"};default:return{font:"rgba(0, 0, 0, 0.88)",bg:"#fafafa",border:"rgb(217, 217, 217)"}}}const j=u.button`
  ${r=>{const{$type:o="DEFAULT",$presetTheme:t,$color:n=l(t)}=r,a=l(),e=b({...a,...n});return o==="OUTLINE"&&(e["--font-color"]=e["--bg-color"],e["--bg-color"]="transparent"),g(e)}}

  padding: 0 2rem;
  height: 3rem;
  font-size: 1.4rem;
  border: none;
  border-radius: var(--radius-button);
  line-height: 1;
  color: var(--font-color);
  background-color: var(--bg-color);
  outline: 0.1rem solid var(--border-color);
  flex-shrink: 0;
  white-space: nowrap;
  user-select: none;
  touch-action: none;

  ${r=>r.$disabled?{opacity:.5,pointerEvents:"none"}:""}
`;export{F as B,A as F,T as S,P as T,C as a,x as b,v as c,j as d,R as e,W as f,z as g,m as h,y as i,S as u};
