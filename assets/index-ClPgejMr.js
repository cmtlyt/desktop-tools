import{r as m,x as e}from"./index-CiXsOv_w.js";import{B as f}from"./index-bcboQ_ce.js";import{l as p,d,S as y,b as l,A as u,c as S,G as g,I as h,D as H}from"./index-25doOVbC.js";import{S as b}from"./index-DFWCW1bo.js";import{E as w}from"./index-DlGY0WFD.js";import{S as j,c as A}from"./create-action-subscribe-hook-DkCU7tJa.js";import{r as D,D as E}from"./array-Dvc7CZ80.js";var n=(t=>(t.RELOAD_HISTORY="reload_history",t))(n||{});const x=new j;function I(t){x.next(t),p.event("Game-action",t)}const O=A(x),T=d(y)`
  padding: 1rem;
`,Y=d(l)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;function R(t){const{storeKey:o,children:s}=t,[r,a]=m.useState([]),c=async()=>{const i=await g(o);a(D(i))};return m.useEffect(()=>{c()},[]),O(()=>{c()},n.RELOAD_HISTORY),e.jsx(u,{onFirstAppear:()=>p.appear("game-sbwd-history"),children:e.jsx(l,{$direction:S.COLUMN,$gap:"1",children:e.jsx(b,{if:r.length>0,fullback:e.jsx(w,{}),children:r==null?void 0:r.map(i=>s(i))})})})}function G(t){const{open:o,storeKey:s,children:r,onClose:a}=t;return e.jsx(E,{title:"对局记录",onClose:a,open:o,width:"40rem",styles:{body:{padding:"var(--page-padding)"}},extra:e.jsx(f,{buttons:[{text:"清空记录",async onClick(){await h(s,[]),await H(),I({id:"clear-history",type:n.RELOAD_HISTORY})}}]}),children:e.jsx(R,{storeKey:s,children:r})})}export{G as H,T as a,Y as b,n as c,I as e};
