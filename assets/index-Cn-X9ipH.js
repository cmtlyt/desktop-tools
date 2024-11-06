import{r as l,y as s}from"./index-vpEv5sD-.js";import{B as S}from"./index-ILW44Arb.js";import{l as d,d as m,S as y,b as p,A as f,c as u,x as h,G as g,I as E,C as H}from"./index-DsMCs7Ru.js";import{E as b}from"./index-9tW2lGkj.js";import{S as w,c as O}from"./Subject-Cu9Eq_vQ.js";import{r as R,D as _}from"./array-BiXLsPdu.js";const F="cl:storage:sbwd:history",k="cl:storage:elsfk:history",C="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const x=new w;function A(t){x.next(t),d.event("history-action",t)}const j=O(x),G=m(y)`
  padding: 1rem;
`,$=m(p)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function I(t){const{storeKey:r,children:o}=t,[e,a]=l.useState([]),c=async()=>{const i=await g(r);a(R(i))};return l.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(f,{onFirstAppear:()=>d.appear("game-sbwd-history"),children:s.jsx(p,{$direction:u.COLUMN,$gap:"1",children:s.jsx(h,{if:e.length>0,fullback:s.jsx(b,{}),children:()=>e==null?void 0:e.map(i=>o(i))})})})}function D(t){const{...r}=t;return s.jsx(_,{width:"40rem",styles:{body:{padding:"var(--page-padding)"}},...r})}function W(t){const{open:r,storeKey:o,children:e,onClose:a}=t;return s.jsx(D,{title:"对局记录",onClose:a,open:r,extra:s.jsx(S,{buttons:[{text:"清空记录",async onClick(){await E(o,[]),await H(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(I,{storeKey:o,children:e})})}export{D,k as E,W as H,F as S,G as a,$ as b,n as c,C as d,A as e};
