const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CAtyBQV4.js","assets/index-DRi9_Ped.js","assets/index-KTSSkvwb.css","assets/index-C5spFGCl.js","assets/index-BcM3eVF-.js","assets/index-BS8jw4SZ.css"])))=>i.map(i=>d[i]);
import{r as n,U as h,x as t}from"./index-DRi9_Ped.js";import{u as d,U as m}from"./store-CfoADinw.js";import{d as s,c,a as S,F as g,b as a,h as j,w as N,H as y}from"./index-BcM3eVF-.js";import{S as T}from"./index-kWpyzbj7.js";const C=n.lazy(()=>h(()=>import("./index-CAtyBQV4.js").then(o=>o.K),__vite__mapDeps([0,1,2,3,4,5]))),u=s(a)`
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
`,A=n.memo(n.forwardRef(function(r,e){const{content:i,readOnly:l}=r;return t.jsxs($,{$flex:"1",$direction:c.COLUMN,children:[t.jsx(p,{$flex:"1",$direction:c.COLUMN,children:t.jsx(C,{content:i,readOnly:l,ref:e})}),t.jsx(u,{$flex:"1",$alignItems:S.CENTER,$justifyContent:g.CENTER,children:t.jsx(T,{delay:100,size:"large",children:t.jsx(L,{})})})]})})),z=n.memo(n.forwardRef(function({readOnly:r},e){const{currentNotepad:i}=d("currentNotepad"),[l,x]=n.useState(""),[f,E]=n.useTransition();return n.useEffect(()=>{i&&E(()=>{m(i.content).then(x)})},[i]),f?null:t.jsx(A,{content:l,readOnly:r,ref:e})})),{useStore:U,useStoreSlice:D,getStore:_}=j(o=>({title:"",setTitle:r=>o({title:r})})),b=s.input`
  all: inherit;
  border: none;
  outline: none;
`,R=o=>{_().setTitle(o.target.value)},F=y(R,300);function I(o){const{readOnly:r}=o,{currentNotepad:e}=d("currentNotepad");return t.jsx(a,{children:t.jsx(N,{if:!r,fullback:t.jsx("span",{children:e==null?void 0:e.title}),children:()=>t.jsx(b,{defaultValue:e==null?void 0:e.title,placeholder:"请输入笔记标题",onChange:F})})})}export{z as A,I as T,_ as g};
