import{_ as $e,a as Me,b as We,c as Le,R as x,r as v,d as ze,u as xe,w as Re,i as Ne,e as Ie,f as ae,g as Te,h as le,j as s,l as Z,k as ue,m as ve,S as Fe,O as _e}from"./index-Ch4bek_b.js";import{F as Be,a as ce,b as U,d as p,S as de,c as Q,u as Oe}from"./button-ChdjSb5e.js";import{G as ke}from"./iconBase-DzU9LrI2.js";import{S as He}from"./index-Baf81WNP.js";import{u as Pe}from"./use-navigate-Cl-uM-Ch.js";import{i as De}from"./is-phone-DqVyIJsf.js";import{L as Ge}from"./index-D88M7-Vq.js";import{T as Ue}from"./index-D3_intBt.js";import{A as Xe}from"./index-CaQ5mziD.js";import{M as Ye}from"./index-CVP5UKem.js";import{S as Ve}from"./index-Bc7HFi3C.js";import{W as qe}from"./context-D9gjIaun.js";import"./index-Dt8jJWz2.js";import"./index-B4g9YTQJ.js";import"./UnstableContext-u56mSdlo.js";import"./asyncToGenerator-CdfDXCsZ.js";import"./LoadingOutlined-Bls90OqU.js";import"./pickAttrs-CGR3EVLK.js";import"./ExclamationCircleFilled-D-roEu99.js";import"./InfoCircleFilled-BW2pLvUB.js";import"./reactNode-xDrto8Ml.js";const ye=(e,n=!1)=>n&&e==null?[]:Array.isArray(e)?e:[e];x.Component;var Je={subtree:!0,childList:!0,attributeFilter:["style","class"]};function Ke(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Je;v.useEffect(function(){if(!(!ze()||!e)){var r,a=Array.isArray(e)?e:[e];return"MutationObserver"in window&&(r=new MutationObserver(n),a.forEach(function(o){r.observe(o,t)})),function(){var o,l;(o=r)===null||o===void 0||o.takeRecords(),(l=r)===null||l===void 0||l.disconnect()}}},[t,e])}const be=3,ie=(e,n,t=1)=>{const r=document.createElement("canvas"),a=r.getContext("2d"),o=e*t,l=n*t;return r.setAttribute("width",`${o}px`),r.setAttribute("height",`${l}px`),a.save(),[a,r,o,l]},Ze=(e,n,t)=>{const r=e*Math.cos(t)-n*Math.sin(t),a=e*Math.sin(t)+n*Math.cos(t);return[r,a]},Qe=()=>{const e=(n,t,r,a,o,l,d,f)=>{const[h,I,$,T]=ie(a,o,r);if(n instanceof HTMLImageElement)h.drawImage(n,0,0,$,T);else{const{color:w,fontSize:N,fontStyle:H,fontWeight:P,fontFamily:D,textAlign:re}=l,oe=Number(N)*r;h.font=`${H} normal ${P} ${oe}px/${o}px ${D}`,h.fillStyle=w,h.textAlign=re,h.textBaseline="top";const G=ye(n);G==null||G.forEach((V,se)=>{h.fillText(V??"",$/2,se*(oe+be*r))})}const q=Math.PI/180*Number(t),k=Math.max(a,o),[F,ee,M]=ie(k,k,r);F.translate(M/2,M/2),F.rotate(q),$>0&&T>0&&F.drawImage(I,-$/2,-T/2);let W=0,_=0,A=0,B=0;const L=$/2,E=T/2;[[0-L,0-E],[0+L,0-E],[0+L,0+E],[0-L,0+E]].forEach(([w,N])=>{const[H,P]=Ze(w,N,q);W=Math.min(W,H),_=Math.max(_,H),A=Math.min(A,P),B=Math.max(B,P)});const X=W+M/2,Y=A+M/2,y=_-W,b=B-A,z=d*r,R=f*r,J=(y+z)*2,C=b+R,[ne,K]=ie(J,C),O=(w=0,N=0)=>{ne.drawImage(ee,X,Y,y,b,w,N,y,b)};return O(),O(y+z,-b/2-R/2),O(y+z,+b/2+R/2),[K.toDataURL(),J/r,C/r]};return x.useCallback(e,[])};function et(e){const n=x.useRef(!1),t=x.useRef(null),r=xe(e);return()=>{n.current||(n.current=!0,r(),t.current=Re(()=>{n.current=!1}))}}function tt(){const e=v.useRef([null,null]);return(t,r)=>{const a=t.map(o=>o instanceof HTMLElement||Number.isNaN(o)?"":o);return Ne(e.current[0],a)||(e.current=[a,r()]),e.current[1]}}function nt(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function rt(e){return Object.keys(e).map(n=>`${nt(n)}: ${e[n]};`).join(" ")}function ot(){return window.devicePixelRatio||1}const st=(e,n)=>{let t=!1;return e.removedNodes.length&&(t=Array.from(e.removedNodes).some(r=>n(r))),e.type==="attributes"&&n(e.target)&&(t=!0),t},at={visibility:"visible !important"};function it(e){const n=v.useRef(new Map);return[(o,l,d)=>{if(d){if(!n.current.get(d)){const h=document.createElement("div");n.current.set(d,h)}const f=n.current.get(d);f.setAttribute("style",rt(Object.assign(Object.assign(Object.assign({},e),{backgroundImage:`url('${o}')`,backgroundSize:`${Math.floor(l)}px`}),at))),f.removeAttribute("class"),f.removeAttribute("hidden"),f.parentElement!==d&&d.append(f)}return n.current.get(d)},o=>{const l=n.current.get(o);l&&o&&o.removeChild(l),n.current.delete(o)},o=>Array.from(n.current.values()).includes(o)]}function me(e,n){return e.size===n.size?e:n}const pe=100,he=100,ge={position:"relative",overflow:"hidden"},ct=e=>{var n,t;const{zIndex:r=9,rotate:a=-22,width:o,height:l,image:d,content:f,font:h={},style:I,className:$,rootClassName:T,gap:q=[pe,he],offset:k,children:F,inherit:ee=!0}=e,M=Object.assign(Object.assign({},ge),I),[,W]=Ie(),{color:_=W.colorFill,fontSize:A=W.fontSizeLG,fontWeight:B="normal",fontStyle:L="normal",fontFamily:E="sans-serif",textAlign:te="center"}=h,[X=pe,Y=he]=q,y=X/2,b=Y/2,z=(n=k==null?void 0:k[0])!==null&&n!==void 0?n:y,R=(t=k==null?void 0:k[1])!==null&&t!==void 0?t:b,J=x.useMemo(()=>{const i={zIndex:r,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"};let c=z-y,u=R-b;return c>0&&(i.left=`${c}px`,i.width=`calc(100% - ${c}px)`,c=0),u>0&&(i.top=`${u}px`,i.height=`calc(100% - ${u}px)`,u=0),i.backgroundPosition=`${c}px ${u}px`,i},[r,z,y,R,b]),[C,ne]=x.useState(),[K,O]=x.useState(()=>new Set),w=x.useMemo(()=>{const i=C?[C]:[];return[].concat(i,ae(Array.from(K)))},[C,K]),N=i=>{let c=120,u=64;if(!d&&i.measureText){i.font=`${Number(A)}px ${E}`;const S=ye(f),j=S.map(g=>{const m=i.measureText(g);return[m.width,m.fontBoundingBoxAscent+m.fontBoundingBoxDescent]});c=Math.ceil(Math.max.apply(Math,ae(j.map(g=>g[0])))),u=Math.ceil(Math.max.apply(Math,ae(j.map(g=>g[1]))))*S.length+(S.length-1)*be}return[o??c,l??u]},H=Qe(),P=tt(),[D,re]=x.useState(null),G=et(()=>{const c=document.createElement("canvas").getContext("2d");if(c){const u=ot(),[S,j]=N(c),g=m=>{const fe=[m||"",a,u,S,j,{color:_,fontSize:A,fontStyle:L,fontWeight:B,fontFamily:E,textAlign:te},X,Y],[Ee,je]=P(fe,()=>H.apply(void 0,fe));re([Ee,je])};if(d){const m=new Image;m.onload=()=>{g(m)},m.onerror=()=>{g(f)},m.crossOrigin="anonymous",m.referrerPolicy="no-referrer",m.src=d}else g(f)}}),[V,se,Ce]=it(J);v.useEffect(()=>{D&&w.forEach(i=>{V(D[0],D[1],i)})},[D,w]);const we=xe(i=>{i.forEach(c=>{if(st(c,Ce))G();else if(c.target===C&&c.attributeName==="style"){const u=Object.keys(ge);for(let S=0;S<u.length;S+=1){const j=u[S],g=M[j],m=C.style[j];g&&g!==m&&(C.style[j]=g)}}})});Ke(w,we),v.useEffect(G,[a,r,o,l,d,f,_,A,B,L,E,te,X,Y,z,R]);const Se=x.useMemo(()=>({add:i=>{O(c=>{const u=new Set(c);return u.add(i),me(c,u)})},remove:i=>{se(i),O(c=>{const u=new Set(c);return u.delete(i),me(c,u)})}}),[]),Ae=ee?x.createElement(qe.Provider,{value:Se},F):F;return x.createElement("div",{ref:ne,className:Te($,T),style:M},Ae)};function lt(e){return ke({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M321.94 98 158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"},child:[]}]})(e)}const ut=p(de)`
  position: relative;
  z-index: 2;
  height: 5rem;
  padding: 0 ${De()?"1rem":"2rem"};
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0;
  }
`,dt=p(lt)`
  margin-right: 1rem;
  padding: 1rem;
  background: var(--color-gray-3);
  border-radius: var(--radius-button);
`,ft=p.span`
  flex: 1;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
  overflow: hidden;
  text-overflow: ellipsis;
`,mt=p(U)`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
`;function pt(){var d,f,h,I;const e=Pe(),n=le(),t=v.useMemo(()=>n.at(-1),[n]),r=(d=t==null?void 0:t.handle)==null?void 0:d.title,a=(f=t==null?void 0:t.handle)==null?void 0:f.needBackIcon,o=(h=t==null?void 0:t.handle)==null?void 0:h.rightArea,l=(I=t==null?void 0:t.handle)==null?void 0:I.titleArea;return s.jsxs(ut,{$gap:"1",$justifyContent:Be.BETWEEN,children:[s.jsxs(mt,{$alignItems:ce.CENTER,children:[s.jsx(He,{when:a,children:()=>s.jsx(dt,{onClick:()=>{Z.click("header-back-icon"),e(-1)}})}),s.jsx(ft,{children:l||r})]}),s.jsx(U,{$alignItems:ce.CENTER,children:o})]})}function ht(e){return ke({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"},child:[]}]})(e)}const gt=p(Ge)`
  display: flex;
  color: var(--color-gray-5);
  transition: color 300ms;

  &:hover {
    color: var(--color-hover);
  }
`,xt=p.span`
  display: flex;
  color: var(--color-active);
`,vt=p(U)`
  font-size: 1.4rem;
`;function kt(){const e=le(),n=v.useMemo(()=>e.map(t=>{var r,a;return{label:((r=t.handle)==null?void 0:r.crumbLabel)||((a=t.handle)==null?void 0:a.title),path:t.pathname}}).filter(t=>t.label),[e]);return s.jsx(vt,{children:n.map((t,r,a)=>r<a.length-1?s.jsxs(gt,{to:t.path,onClick:()=>Z.click("crumb-link-click"),children:["/",t.label]},t.path):s.jsxs(xt,{onClick:()=>Z.click("crumb-acitve-text-click"),children:["/",t.label]},t.path))})}const yt=p(de)`
  position: relative;
  z-index: 2;
  padding: 1rem 2rem;
`,bt=p(ht)`
  font-size: 2rem;
  transition: transform 300ms;
  transform: ${({$expandAside:e})=>e?"rotate(180deg)":"rotate(0)"};
`;function Ct(){const{expandAside:e}=ue("expandAside"),n=()=>{ve().setExpandAside(!e),Z.click("footer-expand-icon",{expandAside:!e})};return s.jsx("footer",{children:s.jsxs(yt,{$gap:"1",$alignItems:ce.CENTER,children:[s.jsx(bt,{onClick:n,$expandAside:e}),s.jsx(kt,{})]})})}const wt=p(Xe)`
  margin: 0 0.5rem;
`,St=v.memo(()=>s.jsx(wt,{needActiveStyle:!0,direction:Q.COLUMN,shadowOption:{$blur:"0.8rem"},appListHander:e=>[{name:"首页",path:"/",icon:s.jsx(Ue,{})},...e]})),At=p(de)`
  height: 100%;
  overflow: hidden;
`,Et=p.aside`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: ${({$width:e,$expandAside:n})=>n?e:"0"};
  transition: grid-template-columns 300ms;
`;function jt(){const e=Oe(),[n,t]=v.useState(""),r=v.useRef(null),{expandAside:a}=ue("expandAside");return v.useEffect(()=>{r.current&&t(`${r.current.offsetWidth/e}rem`)},[e]),s.jsx(Et,{ref:r,$width:n,$expandAside:a,children:s.jsx(At,{$direction:Q.COLUMN,children:s.jsx(St,{})})})}const $t=200;function Mt(){const{loading:e}=ue("loading"),n=le();return v.useEffect(()=>{ve().setLoading(!1)},[n]),s.jsx(Ve,{spinning:e,delay:$t,size:"large",fullscreen:!0})}const Wt=p(U)`
  position: relative;
  z-index: 1;
  overflow-y: auto;
`,Lt=p(ct)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;function Qt(){return s.jsxs(Lt,{content:["cmtlyt","desktop-tools"],font:{color:"rgba(0,0,0,0.05)"},children:[s.jsx(Mt,{}),s.jsx(Fe,{}),s.jsx(Ye,{}),s.jsxs(U,{$flex:"1",style:{height:"100%"},children:[s.jsx(jt,{}),s.jsxs(U,{$flex:"1",$direction:Q.COLUMN,style:{overflow:"hidden"},children:[s.jsx(pt,{}),s.jsx(Wt,{$flex:"1",$direction:Q.COLUMN,children:s.jsx(_e,{})}),s.jsx(Ct,{})]})]})]})}export{Qt as Component};
