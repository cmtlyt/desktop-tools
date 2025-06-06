import{l,r as m,j as s,I as d,J as f,E as y}from"./index-DwZ3VcdL.js";import{B as h}from"./index-Rcsh-DYt.js";import{d as p,b as S,c as u,S as E}from"./button-BxUGn_cn.js";import{A as H}from"./index-D7gmBVc6.js";import{S as g}from"./index-B4g9YTQJ.js";import{E as O}from"./index-RXfxmJ7z.js";import{S as R,c as _}from"./Subject-Nip3sQUI.js";import{r as b}from"./array-Cp_sd-Sf.js";import{D as w}from"./index-kDSs74VK.js";const C="cl:storage:sbwd:history",G="cl:storage:elsfk:history",W="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const x=new R;function A(t){x.next(t),l.event("history-action",t)}const j=_(x),$=p(E)`
  padding: 1rem;
`,z=p(S)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function I(t){const{storeKey:e,children:o}=t,[r,a]=m.useState([]),c=async()=>{const i=await d(e);a(b(i))};return m.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(H,{onFirstAppear:()=>l.appear("game-sbwd-history"),children:s.jsx(S,{$direction:u.COLUMN,$gap:"1",children:s.jsx(g,{when:r.length>0,fullback:s.jsx(O,{}),children:()=>r==null?void 0:r.map(i=>o(i))})})})}function J(t){const{open:e,storeKey:o,children:r,onClose:a}=t;return s.jsx(w,{title:"对局记录",onClose:a,open:e,extra:s.jsx(h,{buttons:[{text:"清空记录",async onClick(){await f(o,[]),await y(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(I,{storeKey:o,children:r})})}export{G as E,J as H,C as S,$ as a,z as b,n as c,W as d,A as e};
