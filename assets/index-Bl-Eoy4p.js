import{r as l,y as s}from"./index-WxUN2MyK.js";import{B as x}from"./index-B9O1XAP0.js";import{l as d,d as m,S as y,b as p,A as f,c as u,y as h,I as g,J as E,D as H}from"./index-C1cWDTV3.js";import{E as b}from"./index-C7aWIezb.js";import{S as w,c as O}from"./create-action-subscribe-hook-DAXO3uId.js";import{r as R,D as _}from"./array-B5eS41d4.js";const F="cl:storage:sbwd:history",k="cl:storage:elsfk:history",C="cl:storage:sl:history";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const S=new w;function A(t){S.next(t),d.event("history-action",t)}const j=O(S),G=m(y)`
  padding: 1rem;
`,$=m(p)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function D(t){const{storeKey:r,children:o}=t,[e,a]=l.useState([]),c=async()=>{const i=await g(r);a(R(i))};return l.useEffect(()=>{c()},[]),j(()=>{c()},n.RELOAD_HISTORY),s.jsx(f,{onFirstAppear:()=>d.appear("game-sbwd-history"),children:s.jsx(p,{$direction:u.COLUMN,$gap:"1",children:s.jsx(h,{if:e.length>0,fullback:s.jsx(b,{}),children:()=>e==null?void 0:e.map(i=>o(i))})})})}function I(t){const{...r}=t;return s.jsx(_,{width:"40rem",styles:{body:{padding:"var(--page-padding)"}},...r})}function W(t){const{open:r,storeKey:o,children:e,onClose:a}=t;return s.jsx(I,{title:"对局记录",onClose:a,open:r,extra:s.jsx(x,{buttons:[{text:"清空记录",async onClick(){await E(o,[]),await H(),A({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:s.jsx(D,{storeKey:o,children:e})})}export{I as D,k as E,W as H,F as S,G as a,$ as b,n as c,C as d,A as e};
