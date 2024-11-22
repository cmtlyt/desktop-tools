import{r as l,x as s}from"./index-DYjrMXHZ.js";import{B as S}from"./index-Cew9Wmlt.js";import{l as m,d,S as y,b as p,c as f,w as u,G as h,H as g,z as H}from"./index-0X-70R4H.js";import{A as E}from"./index--YHp1ku1.js";import{E as w}from"./index-DL3hlEqD.js";import{S as b,c as O}from"./Subject-BK6XmYv5.js";import{r as R,D as _}from"./array-DOOb6wpy.js";const k="cl:storage:sbwd:history",G="cl:storage:elsfk:history",C="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const x=new b;function A(t){x.next(t),m.event("history-action",t)}const j=O(x),$=d(y)`
  padding: 1rem;
`,z=d(p)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function D(t){const{storeKey:r,children:o}=t,[e,a]=l.useState([]),c=async()=>{const i=await h(r);a(R(i))};return l.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(E,{onFirstAppear:()=>m.appear("game-sbwd-history"),children:s.jsx(p,{$direction:f.COLUMN,$gap:"1",children:s.jsx(u,{when:e.length>0,fullback:s.jsx(w,{}),children:()=>e==null?void 0:e.map(i=>o(i))})})})}function I(t){const{...r}=t;return s.jsx(_,{width:"40rem",styles:{body:{padding:"var(--page-padding)"}},...r})}function W(t){const{open:r,storeKey:o,children:e,onClose:a}=t;return s.jsx(I,{title:"对局记录",onClose:a,open:r,extra:s.jsx(S,{buttons:[{text:"清空记录",async onClick(){await g(o,[]),await H(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(D,{storeKey:o,children:e})})}export{I as D,G as E,W as H,k as S,$ as a,z as b,n as c,C as d,A as e};
