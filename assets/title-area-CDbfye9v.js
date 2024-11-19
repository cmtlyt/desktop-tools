const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BimYECcK.js","assets/index-CHoudlAF.js","assets/index-KTSSkvwb.css","assets/index-C5spFGCl.js","assets/index-KNKRzeP1.js","assets/index-BS8jw4SZ.css"])))=>i.map(i=>d[i]);
import{r,U as E,x as t}from"./index-CHoudlAF.js";import{u as p,U as S}from"./util-C0PoipaT.js";import{d as s,c as u,a as g,F as j,b as l,h as y,w as C,C as N}from"./index-KNKRzeP1.js";import{S as L}from"./index-D9GgxVnM.js";import{S as $}from"./index-udt3VjFz.js";import{g as T}from"./opfs-BPlJtuxg.js";const A=r.lazy(()=>E(()=>import("./index-BimYECcK.js").then(o=>o.K),__vite__mapDeps([0,1,2,3,4,5]))),f=s(l)`
  display: none;
  position: absolute;
  inset: 0;
`,_=s.section``,x=s(l)`
  position: absolute;
  inset: 0;
`,b=s(l)`
  position: relative;

  ${x}:empty + ${f} {
    display: flex;
  }
`,w=r.memo(r.forwardRef(function(n,e){const{content:i,readOnly:a}=n;return t.jsxs(b,{$flex:"1",$direction:u.COLUMN,children:[t.jsx(x,{$flex:"1",$direction:u.COLUMN,children:t.jsx(L,{if:!a||i,children:()=>t.jsx(A,{content:i,readOnly:a,ref:e})})}),t.jsx(f,{$flex:"1",$alignItems:g.CENTER,$justifyContent:j.CENTER,children:t.jsx($,{delay:100,size:"large",children:t.jsx(_,{})})})]})})),B=r.memo(r.forwardRef(function({readOnly:n},e){const{currentNotepad:i}=p("currentNotepad"),[a,m]=r.useState("");return r.useEffect(()=>{i&&(async()=>{const{url:c,content:h}=i;let d=h||"";c&&(d=await T(c)),S(d).then(m)})()},[i]),t.jsx(w,{content:a,readOnly:n,ref:e})})),{useStore:M,useStoreSlice:P,getStore:F}=y(o=>({title:"",setTitle:n=>o({title:n})})),O=s.input`
  all: inherit;
  border: none;
  outline: none;
`,R=o=>{F().setTitle(o.target.value)},v=N(R,300);function V(o){const{readOnly:n}=o,{currentNotepad:e}=p("currentNotepad");return t.jsx(l,{children:t.jsx(C,{if:!n,fullback:t.jsx("span",{children:e==null?void 0:e.title}),children:()=>t.jsx(O,{defaultValue:e==null?void 0:e.title,placeholder:"请输入笔记标题",onChange:v})})})}export{B as A,V as T,F as g};
