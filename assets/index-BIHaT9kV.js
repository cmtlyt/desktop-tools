import{l,r as m,j as s,$ as x,a0 as y,D as f}from"./index-BAKjkSY0.js";import{B as u}from"./index-Di8hVGHc.js";import{d as p,S as h,b as d,c as g}from"./button-Cgk2TAWm.js";import{A as E}from"./index-iDuKKinc.js";import{S as H}from"./index-B4g9YTQJ.js";import{E as w}from"./index-CysM0xTh.js";import{S as b,c as O}from"./Subject-BcgiwtPd.js";import{r as R,D as _}from"./index-DACUpQNC.js";const $="cl:storage:sbwd:history",C="cl:storage:elsfk:history",G="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const S=new b;function j(t){S.next(t),l.event("history-action",t)}const A=O(S),W=p(h)`
  padding: 1rem;
`,z=p(d)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function D(t){const{storeKey:e,children:o}=t,[r,a]=m.useState([]),c=async()=>{const i=await x(e);a(R(i))};return m.useEffect(()=>{c()},[]),A(()=>{c()},n.RELOAD_HISTORY),s.jsx(E,{onFirstAppear:()=>l.appear("game-sbwd-history"),children:s.jsx(d,{$direction:g.COLUMN,$gap:"1",children:s.jsx(H,{when:r.length>0,fullback:s.jsx(w,{}),children:()=>r==null?void 0:r.map(i=>o(i))})})})}function I(t){const{...e}=t;return s.jsx(_,{width:"40rem",styles:{body:{padding:"var(--page-padding)"}},...e})}function M(t){const{open:e,storeKey:o,children:r,onClose:a}=t;return s.jsx(I,{title:"对局记录",onClose:a,open:e,extra:s.jsx(u,{buttons:[{text:"清空记录",async onClick(){await y(o,[]),await f(),j({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(D,{storeKey:o,children:r})})}export{I as D,C as E,M as H,$ as S,W as a,z as b,n as c,G as d,j as e};
