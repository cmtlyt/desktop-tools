const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BzBjg8j7.js","assets/index-CzNlTqUz.js","assets/index-KTSSkvwb.css","assets/index-C5spFGCl.js","assets/index-CELHUhAD.js","assets/index-BS8jw4SZ.css"])))=>i.map(i=>d[i]);
import{r,U as E,x as t}from"./index-CzNlTqUz.js";import{u as p,U as S}from"./util-W7Og_l9n.js";import{d as s,c as u,a as g,F as j,b as l,h as y,w as C,C as N}from"./index-CELHUhAD.js";import{S as L}from"./index-Baf81WNP.js";import{S as $}from"./index-Dqw2P_tZ.js";import{g as w}from"./opfs-DvJ12b68.js";const T=r.lazy(()=>E(()=>import("./index-BzBjg8j7.js").then(o=>o.K),__vite__mapDeps([0,1,2,3,4,5]))),f=s(l)`
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
`,b=r.memo(r.forwardRef(function(n,e){const{content:i,readOnly:a}=n;return t.jsxs(_,{$flex:"1",$direction:u.COLUMN,children:[t.jsx(x,{$flex:"1",$direction:u.COLUMN,children:t.jsx(L,{when:!a||i,children:()=>t.jsx(T,{content:i,readOnly:a,ref:e})})}),t.jsx(f,{$flex:"1",$alignItems:g.CENTER,$justifyContent:j.CENTER,children:t.jsx($,{delay:100,size:"large",children:t.jsx(A,{})})})]})})),B=r.memo(r.forwardRef(function({readOnly:n},e){const{currentNotepad:i}=p("currentNotepad"),[a,h]=r.useState("");return r.useEffect(()=>{i&&(async()=>{const{url:c,content:m}=i;let d=m||"";c&&(d=await w(c)),S(d).then(h)})()},[i]),t.jsx(b,{content:a,readOnly:n,ref:e})})),{useStore:M,useStoreSlice:P,getStore:F}=y(o=>({title:"",setTitle:n=>o({title:n})})),O=s.input`
  all: inherit;
  border: none;
  outline: none;
`,R=o=>{F().setTitle(o.target.value)},v=N(R,300);function V(o){const{readOnly:n}=o,{currentNotepad:e}=p("currentNotepad");return t.jsx(l,{children:t.jsx(C,{when:!n,fullback:t.jsx("span",{children:e==null?void 0:e.title}),children:()=>t.jsx(O,{defaultValue:e==null?void 0:e.title,placeholder:"请输入笔记标题",onChange:v})})})}export{B as A,V as T,F as g};
