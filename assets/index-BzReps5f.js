import{l,r as m,j as s,I as d,J as f,E as y}from"./index-DJrG1xPe.js";import{B as h}from"./index-DO56UWJv.js";import{d as p}from"./styled-components.browser.esm-DqKzGx4B.js";import{A as u}from"./index-D5WFTPvK.js";import{b as S,c as E,S as H}from"./button-PCnrASaF.js";import{S as g}from"./index-B4g9YTQJ.js";import{E as O}from"./index-BhserhjS.js";import{S as R,c as _}from"./Subject-Chsq3tE-.js";import{r as b}from"./array-Cp_sd-Sf.js";import{D as w}from"./index-DTMKmHFD.js";const G="cl:storage:sbwd:history",W="cl:storage:elsfk:history",$="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const x=new R;function A(t){x.next(t),l.event("history-action",t)}const j=_(x),z=p(H)`
  padding: 1rem;
`,J=p(S)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function I(t){const{storeKey:e,children:o}=t,[r,a]=m.useState([]),c=async()=>{const i=await d(e);a(b(i))};return m.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(u,{onFirstAppear:()=>l.appear("game-sbwd-history"),children:s.jsx(S,{$direction:E.COLUMN,$gap:"1",children:s.jsx(g,{when:r.length>0,fullback:s.jsx(O,{}),children:()=>r==null?void 0:r.map(i=>o(i))})})})}function M(t){const{open:e,storeKey:o,children:r,onClose:a}=t;return s.jsx(w,{title:"对局记录",onClose:a,open:e,extra:s.jsx(h,{buttons:[{text:"清空记录",async onClick(){await f(o,[]),await y(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(I,{storeKey:o,children:r})})}export{W as E,M as H,G as S,z as a,J as b,n as c,$ as d,A as e};
