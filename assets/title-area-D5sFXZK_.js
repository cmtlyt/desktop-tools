const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BW7xZrPI.js","assets/index-BQG4kE1A.js","assets/index-KTSSkvwb.css","assets/index-C5spFGCl.js","assets/index-Zg-Db6dE.js","assets/index-BS8jw4SZ.css"])))=>i.map(i=>d[i]);
import{r,U as E,x as t}from"./index-BQG4kE1A.js";import{u as p,U as S}from"./util-D3yoSNbf.js";import{d as s,c as u,a as g,F as j,b as l,P as y,h as C,w as N,C as L}from"./index-Zg-Db6dE.js";import{S as $}from"./index-Baf81WNP.js";import{S as w}from"./index-D6JaqPvY.js";const T=r.lazy(()=>E(()=>import("./index-BW7xZrPI.js").then(o=>o.K),__vite__mapDeps([0,1,2,3,4,5]))),x=s(l)`
  display: none;
  position: absolute;
  inset: 0;
`,A=s.section``,f=s(l)`
  position: absolute;
  inset: 0;
`,_=s(l)`
  position: relative;

  ${f}:empty + ${x} {
    display: flex;
  }
`,b=r.memo(r.forwardRef(function(n,e){const{content:i,readOnly:a}=n;return t.jsxs(_,{$flex:"1",$direction:u.COLUMN,children:[t.jsx(f,{$flex:"1",$direction:u.COLUMN,children:t.jsx($,{when:!a||i,children:()=>t.jsx(T,{content:i,readOnly:a,ref:e})})}),t.jsx(x,{$flex:"1",$alignItems:g.CENTER,$justifyContent:j.CENTER,children:t.jsx(w,{delay:100,size:"large",children:t.jsx(A,{})})})]})})),P=r.memo(r.forwardRef(function({readOnly:n},e){const{currentNotepad:i}=p("currentNotepad"),[a,h]=r.useState("");return r.useEffect(()=>{i&&(async()=>{const{url:c,content:m}=i;let d=m||"";c&&(d=await y(c)),S(d).then(h)})()},[i]),t.jsx(b,{content:a,readOnly:n,ref:e})})),{useStore:W,useStoreSlice:B,getStore:F}=C(o=>({title:"",setTitle:n=>o({title:n})})),O=s.input`
  all: inherit;
  border: none;
  outline: none;
`,R=o=>{F().setTitle(o.target.value)},v=L(R,300);function M(o){const{readOnly:n}=o,{currentNotepad:e}=p("currentNotepad");return t.jsx(l,{children:t.jsx(N,{when:!n,fullback:t.jsx("span",{children:e==null?void 0:e.title}),children:()=>t.jsx(O,{defaultValue:e==null?void 0:e.title,placeholder:"请输入笔记标题",onChange:v})})})}export{P as A,M as T,F as g};
