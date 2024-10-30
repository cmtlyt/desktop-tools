import{r as l,x as e}from"./index-Da5SARoI.js";import{B as S}from"./index-NgrMwzGA.js";import{l as m,d,S as y,b as p,A as f,c as u,z as g,I as h,J as E,E as H}from"./index-D_6Vb4y8.js";import{E as b}from"./index-3gj4c8_3.js";import{S as w,c as A}from"./create-action-subscribe-hook-CI3YOGUQ.js";import{r as O,D as R}from"./array-DMHEtffr.js";const F="cl:storage:sbwd:history",K="cl:storage:elsfk:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const x=new w;function j(t){x.next(t),m.event("Game-action",t)}const I=A(x),k=d(y)`
  padding: 1rem;
`,C=d(p)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function _(t){const{storeKey:o,children:r}=t,[s,a]=l.useState([]),c=async()=>{const i=await h(o);a(O(i))};return l.useEffect(()=>{c()},[]),I(()=>{c()},n.RELOAD_HISTORY),e.jsx(f,{onFirstAppear:()=>m.appear("game-sbwd-history"),children:e.jsx(p,{$direction:u.COLUMN,$gap:"1",children:e.jsx(g,{if:s.length>0,fullback:e.jsx(b,{}),children:s==null?void 0:s.map(i=>r(i))})})})}function G(t){const{open:o,storeKey:r,children:s,onClose:a}=t;return e.jsx(R,{title:"对局记录",onClose:a,open:o,width:"40rem",styles:{body:{padding:"var(--page-padding)"}},extra:e.jsx(S,{buttons:[{text:"清空记录",async onClick(){await E(r,[]),await H(),j({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:e.jsx(_,{storeKey:r,children:s})})}export{K as E,G as H,F as S,k as a,C as b,n as c,j as e};
