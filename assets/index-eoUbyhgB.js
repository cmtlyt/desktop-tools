import{r as l,x as s}from"./index-0LAKHuTr.js";import{B as S}from"./index-4p12tTF1.js";import{l as m,d,S as y,b as p,c as f,w as u,G as h,H as g,z as H}from"./index-Dnz2Iu2C.js";import{A as E}from"./index-BftM7raP.js";import{E as w}from"./index-CRSTVvtR.js";import{S as b,c as O}from"./Subject-Dy5BDqAo.js";import{r as R,D as _}from"./array-DRRSujUX.js";const k="cl:storage:sbwd:history",G="cl:storage:elsfk:history",C="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const x=new b;function A(t){x.next(t),m.event("history-action",t)}const j=O(x),$=d(y)`
  padding: 1rem;
`,z=d(p)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function D(t){const{storeKey:e,children:o}=t,[r,a]=l.useState([]),c=async()=>{const i=await h(e);a(R(i))};return l.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(E,{onFirstAppear:()=>m.appear("game-sbwd-history"),children:s.jsx(p,{$direction:f.COLUMN,$gap:"1",children:s.jsx(u,{if:r.length>0,fullback:s.jsx(w,{}),children:()=>r==null?void 0:r.map(i=>o(i))})})})}function I(t){const{...e}=t;return s.jsx(_,{width:"40rem",styles:{body:{padding:"var(--page-padding)"}},...e})}function W(t){const{open:e,storeKey:o,children:r,onClose:a}=t;return s.jsx(I,{title:"对局记录",onClose:a,open:e,extra:s.jsx(S,{buttons:[{text:"清空记录",async onClick(){await g(o,[]),await H(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(D,{storeKey:o,children:r})})}export{I as D,G as E,W as H,k as S,$ as a,z as b,n as c,C as d,A as e};
