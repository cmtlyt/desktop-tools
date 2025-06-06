const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DXjb8220.js","assets/index-DwZ3VcdL.js","assets/index-Dk2L6hWJ.css","assets/index-C5spFGCl.js","assets/button-BxUGn_cn.js","assets/index-D8fCY6O7.css"])))=>i.map(i=>d[i]);
import{r,j as t,a3 as E,ay as j,ax as g,n as y,G as S}from"./index-DwZ3VcdL.js";import{u as p}from"./util-BotlGmke.js";import{c as u,F as C,a as N,d as s,b as l}from"./button-BxUGn_cn.js";import{S as L}from"./index-Baf81WNP.js";import{S as $}from"./index-D2i9Awo8.js";import{S as T}from"./index-B4g9YTQJ.js";const w=r.lazy(()=>E(()=>import("./index-DXjb8220.js").then(n=>n.K),__vite__mapDeps([0,1,2,3,4,5]))),f=s(l)`
  display: none;
  position: absolute;
  inset: 0;
`,A=s.section``,x=s(l)`
  position: absolute;
  inset: 0;
`,_=s(l)`
  position: relative;

  ${x}:empty + ${f} {
    display: flex;
  }
`,b=r.memo(r.forwardRef(function(o,e){const{content:i,readOnly:a}=o;return t.jsxs(_,{$flex:"1",$direction:u.COLUMN,children:[t.jsx(x,{$flex:"1",$direction:u.COLUMN,children:t.jsx(L,{when:!a||i,children:()=>t.jsx(w,{content:i,readOnly:a,ref:e})})}),t.jsx(f,{$flex:"1",$alignItems:N.CENTER,$justifyContent:C.CENTER,children:t.jsx($,{delay:100,size:"large",children:t.jsx(A,{})})})]})})),M=r.memo(r.forwardRef(function({readOnly:o},e){const{currentNotepad:i}=p("currentNotepad"),[a,m]=r.useState("");return r.useEffect(()=>{i&&(async()=>{const{url:c,content:h}=i;let d=h||"";c&&(d=await j(c)),g(d).then(m)})()},[i]),t.jsx(b,{content:a,readOnly:o,ref:e})})),{getStore:F}=y(n=>({title:"",setTitle:o=>n({title:o})})),O=s.input`
  all: inherit;
  border: none;
  outline: none;
`,R=n=>{F().setTitle(n.target.value)},v=S(R,300);function P(n){const{readOnly:o}=n,{currentNotepad:e}=p("currentNotepad");return t.jsx(l,{children:t.jsx(T,{when:!o,fullback:t.jsx("span",{children:e==null?void 0:e.title}),children:()=>t.jsx(O,{defaultValue:e==null?void 0:e.title,placeholder:"请输入笔记标题",onChange:v})})})}export{M as A,P as T,F as g};
