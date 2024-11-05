import{r as l,x as s}from"./index-ykcWsmCX.js";import{B as S}from"./index-DlucLp_U.js";import{l as d,d as m,S as y,b as p,A as f,c as u,z as h,N as g,O as E,E as H}from"./index-00ZVflCa.js";import{E as O}from"./index-BXMsAlve.js";import{S as b,c as w}from"./create-action-subscribe-hook-UXgup1r-.js";import{r as R,D as _}from"./array-Djr6Tjt0.js";const F="cl:storage:sbwd:history",k="cl:storage:elsfk:history",C="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const x=new b;function A(t){x.next(t),d.event("history-action",t)}const j=w(x),G=m(y)`
  padding: 1rem;
`,$=m(p)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function D(t){const{storeKey:r,children:o}=t,[e,a]=l.useState([]),c=async()=>{const i=await g(r);a(R(i))};return l.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(f,{onFirstAppear:()=>d.appear("game-sbwd-history"),children:s.jsx(p,{$direction:u.COLUMN,$gap:"1",children:s.jsx(h,{if:e.length>0,fullback:s.jsx(O,{}),children:e==null?void 0:e.map(i=>o(i))})})})}function I(t){const{...r}=t;return s.jsx(_,{width:"40rem",styles:{body:{padding:"var(--page-padding)"}},...r})}function z(t){const{open:r,storeKey:o,children:e,onClose:a}=t;return s.jsx(I,{title:"对局记录",onClose:a,open:r,extra:s.jsx(S,{buttons:[{text:"清空记录",async onClick(){await E(o,[]),await H(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(D,{storeKey:o,children:e})})}export{I as D,k as E,z as H,F as S,G as a,$ as b,n as c,C as d,A as e};
