const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Bd-0bvGY.js","assets/index-Bl_K51Ya.js","assets/index-Dk2L6hWJ.css","assets/index-C5spFGCl.js","assets/button-DslU_EYW.js","assets/index-BcXDEbgm.css"])))=>i.map(i=>d[i]);
import{r,a2 as E,j as t,ay as S,ax as j,m as g,E as y}from"./index-Bl_K51Ya.js";import{u as p}from"./util-CuA2p1FM.js";import{d as s,c as u,a as C,F as N,b as l}from"./button-DslU_EYW.js";import{S as L}from"./index-Baf81WNP.js";import{S as $}from"./index-DkpBeWks.js";import{S as T}from"./index-B4g9YTQJ.js";const w=r.lazy(()=>E(()=>import("./index-Bd-0bvGY.js").then(o=>o.K),__vite__mapDeps([0,1,2,3,4,5]))),f=s(l)`
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
`,b=r.memo(r.forwardRef(function(n,e){const{content:i,readOnly:a}=n;return t.jsxs(_,{$flex:"1",$direction:u.COLUMN,children:[t.jsx(x,{$flex:"1",$direction:u.COLUMN,children:t.jsx(L,{when:!a||i,children:()=>t.jsx(w,{content:i,readOnly:a,ref:e})})}),t.jsx(f,{$flex:"1",$alignItems:C.CENTER,$justifyContent:N.CENTER,children:t.jsx($,{delay:100,size:"large",children:t.jsx(A,{})})})]})})),M=r.memo(r.forwardRef(function({readOnly:n},e){const{currentNotepad:i}=p("currentNotepad"),[a,m]=r.useState("");return r.useEffect(()=>{i&&(async()=>{const{url:c,content:h}=i;let d=h||"";c&&(d=await S(c)),j(d).then(m)})()},[i]),t.jsx(b,{content:a,readOnly:n,ref:e})})),{useStore:P,useStoreSlice:U,getStore:F}=g(o=>({title:"",setTitle:n=>o({title:n})})),O=s.input`
  all: inherit;
  border: none;
  outline: none;
`,R=o=>{F().setTitle(o.target.value)},v=y(R,300);function V(o){const{readOnly:n}=o,{currentNotepad:e}=p("currentNotepad");return t.jsx(l,{children:t.jsx(T,{when:!n,fullback:t.jsx("span",{children:e==null?void 0:e.title}),children:()=>t.jsx(O,{defaultValue:e==null?void 0:e.title,placeholder:"请输入笔记标题",onChange:v})})})}export{M as A,V as T,F as g};
