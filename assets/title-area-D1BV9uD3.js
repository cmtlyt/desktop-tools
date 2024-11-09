const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BsDnAY6j.js","assets/index-D_l-mUWw.js","assets/index-KTSSkvwb.css","assets/button-DApavvTt.js","assets/index-BS8jw4SZ.css"])))=>i.map(i=>d[i]);
import{r as n,U as E,x as t}from"./index-D_l-mUWw.js";import{u as d,U as h}from"./store-sdMls9fm.js";import{d as s,c,a as S,F as g,b as a,h as j,H as N}from"./button-DApavvTt.js";import{S as y}from"./index-5SVPp1EH.js";import{S as T}from"./index-BquPhuVZ.js";const C=n.lazy(()=>E(()=>import("./index-BsDnAY6j.js").then(o=>o.K),__vite__mapDeps([0,1,2,3,4]))),u=s(a)`
  display: none;
  position: absolute;
  inset: 0;
`,L=s.section``,p=s(a)`
  position: absolute;
  inset: 0;
`,$=s(a)`
  position: relative;

  ${p}:empty + ${u} {
    display: flex;
  }
`,A=n.memo(n.forwardRef(function(r,e){const{content:i,readOnly:l}=r;return t.jsxs($,{$flex:"1",$direction:c.COLUMN,children:[t.jsx(p,{$flex:"1",$direction:c.COLUMN,children:t.jsx(C,{content:i,readOnly:l,ref:e})}),t.jsx(u,{$flex:"1",$alignItems:S.CENTER,$justifyContent:g.CENTER,children:t.jsx(y,{delay:100,size:"large",children:t.jsx(L,{})})})]})})),w=n.memo(n.forwardRef(function({readOnly:r},e){const{currentNotepad:i}=d("currentNotepad"),[l,x]=n.useState(""),[f,m]=n.useTransition();return n.useEffect(()=>{i&&m(()=>{h(i.content).then(x)})},[i]),f?null:t.jsx(A,{content:l,readOnly:r,ref:e})})),{useStore:D,useStoreSlice:I,getStore:_}=j(o=>({title:"",setTitle:r=>o({title:r})})),b=s.input`
  all: inherit;
  border: none;
  outline: none;
`,R=o=>{_().setTitle(o.target.value)},F=N(R,300);function P(o){const{readOnly:r}=o,{currentNotepad:e}=d("currentNotepad");return t.jsx(a,{children:t.jsx(T,{if:!r,fullback:t.jsx("span",{children:e==null?void 0:e.title}),children:()=>t.jsx(b,{defaultValue:e==null?void 0:e.title,placeholder:"请输入笔记标题",onChange:F})})})}export{w as A,P as T,_ as g};
