import{r as m,x as s}from"./index-D_l-mUWw.js";import{B as x}from"./index-BNzImgop.js";import{l,d as p,S as y,b as d,c as f,D as u,E as h,y as g}from"./button-DApavvTt.js";import{A as E}from"./index-DZW-8e34.js";import{S as H}from"./index-BquPhuVZ.js";import{E as b}from"./index-5lsUDpTA.js";import{S as w,c as O}from"./Subject-Cm_kmLML.js";import{r as R,D as _}from"./array-Dz89XjWi.js";const C="cl:storage:sbwd:history",G="cl:storage:elsfk:history",$="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const S=new w;function A(t){S.next(t),l.event("history-action",t)}const j=O(S),W=p(y)`
  padding: 1rem;
`,z=p(d)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function D(t){const{storeKey:e,children:o}=t,[r,a]=m.useState([]),c=async()=>{const i=await u(e);a(R(i))};return m.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(E,{onFirstAppear:()=>l.appear("game-sbwd-history"),children:s.jsx(d,{$direction:f.COLUMN,$gap:"1",children:s.jsx(H,{if:r.length>0,fullback:s.jsx(b,{}),children:()=>r==null?void 0:r.map(i=>o(i))})})})}function I(t){const{...e}=t;return s.jsx(_,{width:"40rem",styles:{body:{padding:"var(--page-padding)"}},...e})}function M(t){const{open:e,storeKey:o,children:r,onClose:a}=t;return s.jsx(I,{title:"对局记录",onClose:a,open:e,extra:s.jsx(x,{buttons:[{text:"清空记录",async onClick(){await h(o,[]),await g(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(D,{storeKey:o,children:r})})}export{I as D,G as E,M as H,C as S,W as a,z as b,n as c,$ as d,A as e};
