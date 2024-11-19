import{r as m,x as s}from"./index-D9Ti2l9s.js";import{B as S}from"./index-DEpECmp6.js";import{l,d as p,S as y,b as d,c as f,w as u,G as h,H as g,z as H}from"./index-BuV4sdBQ.js";import{A as E}from"./index-qAIdwdQd.js";import{E as w}from"./index-C0Cnifrc.js";import{S as b}from"./Subject-CbTjWRvp.js";import{c as O}from"./create-action-subscribe-hook-C3BDlNnB.js";import{r as R,D as _}from"./array-DrUWRJfX.js";const G="cl:storage:sbwd:history",C="cl:storage:elsfk:history",$="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const x=new b;function A(t){x.next(t),l.event("history-action",t)}const j=O(x),z=p(y)`
  padding: 1rem;
`,W=p(d)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function D(t){const{storeKey:e,children:o}=t,[r,a]=m.useState([]),c=async()=>{const i=await h(e);a(R(i))};return m.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(E,{onFirstAppear:()=>l.appear("game-sbwd-history"),children:s.jsx(d,{$direction:f.COLUMN,$gap:"1",children:s.jsx(u,{if:r.length>0,fullback:s.jsx(w,{}),children:()=>r==null?void 0:r.map(i=>o(i))})})})}function I(t){const{...e}=t;return s.jsx(_,{width:"40rem",styles:{body:{padding:"var(--page-padding)"}},...e})}function M(t){const{open:e,storeKey:o,children:r,onClose:a}=t;return s.jsx(I,{title:"对局记录",onClose:a,open:e,extra:s.jsx(S,{buttons:[{text:"清空记录",async onClick(){await g(o,[]),await H(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(D,{storeKey:o,children:r})})}export{I as D,C as E,M as H,G as S,z as a,W as b,n as c,$ as d,A as e};
