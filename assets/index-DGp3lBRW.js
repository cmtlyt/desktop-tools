import{r as l,x as s}from"./index-ZawOXNeP.js";import{B as x}from"./index-BdJiswBQ.js";import{l as d,d as m,S as y,b as p,A as f,c as h,z as u,N as g,O as E,E as H}from"./index-DkylwoUz.js";import{E as O}from"./index-BIV1eAdg.js";import{S as b,c as R}from"./create-action-subscribe-hook-DgpuR3Yx.js";import{r as _,D as w}from"./array-Al3mLqzm.js";const v="cl:storage:sbwd:history",F="cl:storage:elsfk:history",k="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const S=new b;function A(t){S.next(t),d.event("history-action",t)}const j=R(S),C=m(y)`
  padding: 1rem;
`,G=m(p)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function I(t){const{storeKey:o,children:r}=t,[e,a]=l.useState([]),c=async()=>{const i=await g(o);a(_(i))};return l.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(f,{onFirstAppear:()=>d.appear("game-sbwd-history"),children:s.jsx(p,{$direction:h.COLUMN,$gap:"1",children:s.jsx(u,{if:e.length>0,fullback:s.jsx(O,{}),children:e==null?void 0:e.map(i=>r(i))})})})}function z(t){const{open:o,storeKey:r,children:e,onClose:a}=t;return s.jsx(w,{title:"对局记录",onClose:a,open:o,width:"40rem",styles:{body:{padding:"var(--page-padding)"}},extra:s.jsx(x,{buttons:[{text:"清空记录",async onClick(){await E(r,[]),await H(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(I,{storeKey:r,children:e})})}export{F as E,z as H,v as S,C as a,G as b,n as c,k as d,A as e};
