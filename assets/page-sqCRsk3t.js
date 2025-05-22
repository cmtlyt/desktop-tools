import{aS as A,r as h,l as R,k as F,j as l,bs as L}from"./index-BAKjkSY0.js";import{u as W}from"./use-navigate-rz7zF6sf.js";import{A as B}from"./index-iDuKKinc.js";import{d as m,b as w}from"./button-Cgk2TAWm.js";import{S as H}from"./index-Baf81WNP.js";import{P as K}from"./constant-B9Cu8HkW.js";function M(r,a=()=>{}){const{has:t,keys:s}=A(["has","keys"]),[o,e]=h.useState(!1),n=h.useRef(a);return h.useEffect(()=>{n.current=a},[a]),h.useEffect(()=>{const i=t(r);e(i),i||(R.error("非法访问"),F().showMessage({type:"error",content:"非法访问, 系统将会记录本次访问",duration:2,onClose:n.current}))},[s]),o}const O=m(w)`
  padding: var(--page-padding);
`,U=m.input`
  position: absolute;
  inset: 0;
  opacity: 0;
`,_=m(w)`
  position: absolute;
  inset: 0;
  background: var(--color-bg-1);
  border-radius: var(--radius-base);
  cursor: pointer;
  outline: 0.1rem dotted black;
  font-size: 2rem;

  &:hover {
    outline: 0.1rem dotted var(--color-active);
  }
`,z=m(w)`
  box-sizing: border-box;
  position: relative;
  padding: 1rem;
  width: 100%;
  min-height: 12rem;
`,D=m.img`
  flex-shrink: 0;
  width: 10rem;
  height: 10rem;
  object-fit: contain;
`;function T(r){const{onChange:a,...t}=r,[s,o]=h.useState([]),e=n=>{const{files:i}=n.target;if(!i)return;const u=Array.from(i).map(c=>URL.createObjectURL(c));o(u),a==null||a(u)};return l.jsxs(z,{$wrap:"wrap",children:[l.jsx(U,{type:"file",multiple:!0,accept:"image/*",...t,onChange:e}),l.jsx(H,{when:!s.length,children:()=>l.jsx(_,{$alignItems:"center",$justifyContent:"center",children:"请选择图片"})}),s.map(n=>l.jsx(D,{src:n,alt:""},n))]})}const G=m.canvas`
  flex: 1;
  width: 100%;
  object-fit: contain;
`;function N(r){var o;if(r.startsWith("#")){const[e,n,i]=((o=r.match(/\w{2}/g))==null?void 0:o.map(u=>parseInt(u,16)))??[];return{r:e,g:n,b:i}}else r.startsWith("rgb")&&(r=r.replace(/^rgba?\((.*?)\)$/,"$1"));const[a=0,t=0,s=0]=r.split(",").map(e=>parseInt(e.trim(),10)).filter(e=>!L(e));return{r:a,g:t,b:s}}function V(r,a,t){return r.every((s,o)=>Math.abs(s-a[o])<t)}const Y=h.memo(h.forwardRef(function(r,a){const t=h.useRef(null),s=e=>{if(!t.current||!e)return;const n=t.current.getContext("2d");n&&(n.clearRect(0,0,t.current.width,t.current.height),t.current.width=e.width,t.current.height=e.height,n.putImageData(e,0,0))},o=async(e,n={})=>{if(!t.current||!e.length)return null;const i=document.createElement("canvas"),u=i.getContext("2d");return u?Promise.all(e.map(c=>{const p=new Image;return new Promise(d=>{p.onload=()=>d(p),p.src=c})})).then(c=>{if(!c.length)return null;const{replaceColor:p="#000000",jitterRange:d=10}=n,{r:y,g:C,b:S}=N(p),E=[y,C,S],{width:b,height:v}=c[0],j={width:b,height:v,data:new Array(b*v*4)};return c.forEach(g=>{i.width=g.width,i.height=g.height,u.drawImage(g,0,0);const k=u.getImageData(0,0,g.width,g.height);u.clearRect(0,0,g.width,g.height);const{data:x}=k;for(let f=0;f<x.length;f+=4){const I=[x[f],x[f+1],x[f+2],x[f+3]];V(I.slice(0,3),E,d)||I.forEach((P,$)=>j.data[f+$]=P)}}),j}).then(c=>{if(!c)return null;const{autoRender:p=!0}=n,d=u.createImageData(c.width,c.height,{colorSpace:"srgb"});return d.data.set(c.data),p&&s(d),d}):null};return h.useImperativeHandle(a,()=>({compose:o,render:s})),l.jsx(G,{ref:t})}));function te(){const r=h.useRef(null),a=W();if(!M(K,()=>{a(-1)}))return null;const s=o=>{var e;(e=r.current)==null||e.compose(o,{jitterRange:30})};return l.jsx(B,{onFirstAppear:()=>R.appear("tool-pht"),children:l.jsxs(O,{$flex:"1",$direction:"column",children:[l.jsx(T,{onChange:s}),l.jsx(Y,{ref:r})]})})}const re={title:"拼好图",needBackIcon:!0};export{te as Component,re as handle};
