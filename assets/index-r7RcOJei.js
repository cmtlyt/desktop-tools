import{_ as Ae,a as je,b as $e,R as x,c as Me,r as v,d as We,u as xe,w as Le,e as ze,f as ie,g as Ie,h as ue,j as o,l as re,i as de,k as ve,S as Re,O as Te}from"./index-v5e0f-P3.js";import{d as p,F as Ne,a as le,b as D,S as me,c as oe,u as Fe}from"./button-Bx1TJ7Ps.js";import{G as ke}from"./iconBase-rvs65X0U.js";import{S as _e}from"./index-Baf81WNP.js";import{u as Be}from"./use-navigate-Ce0oyjfh.js";import{i as Oe}from"./is-phone-B6SY9HpL.js";import{L as He}from"./index-CGZTnnKG.js";import{T as Pe}from"./index-Dt5i28nu.js";import{A as De}from"./index-DG5Rfm5H.js";import{M as Ge}from"./index-Q5Qne5HK.js";import{S as Ue}from"./index-igbV9Zas.js";import{W as Xe}from"./context-B7gWZtei.js";import"./index-Ch40Iobr.js";import"./index-B4g9YTQJ.js";import"./UnstableContext-huqaNDVZ.js";import"./asyncToGenerator-BX-mj2jX.js";import"./LoadingOutlined-XudtVr26.js";import"./pickAttrs-DdvaCHuI.js";import"./InfoCircleFilled-Dmk1t-zD.js";import"./reactNode-CXmVbTch.js";function ye(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)&&e==null?[]:Array.isArray(e)?e:[e]}x.Component;var Ye={subtree:!0,childList:!0,attributeFilter:["style","class"]};function Ve(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ye;v.useEffect(function(){if(!(!We()||!e)){var r,c=Array.isArray(e)?e:[e];return"MutationObserver"in window&&(r=new MutationObserver(n),c.forEach(function(s){r.observe(s,t)})),function(){var s,l;(s=r)===null||s===void 0||s.takeRecords(),(l=r)===null||l===void 0||l.disconnect()}}},[t,e])}const be=3;function ce(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;const r=document.createElement("canvas"),c=r.getContext("2d"),s=e*t,l=n*t;return r.setAttribute("width",`${s}px`),r.setAttribute("height",`${l}px`),c.save(),[c,r,s,l]}function Je(){function e(n,t,r,c,s,l,d,m){const[g,B,W,O]=ce(c,s,r);if(n instanceof HTMLImageElement)g.drawImage(n,0,0,W,O);else{const{color:k,fontSize:y,fontStyle:b,fontWeight:$,fontFamily:Y,textAlign:te}=l,ne=Number(y)*r;g.font=`${b} normal ${$} ${ne}px/${s}px ${Y}`,g.fillStyle=k,g.textAlign=te,g.textBaseline="top";const V=ye(n);V==null||V.forEach((J,ae)=>{g.fillText(J??"",W/2,ae*(ne+be*r))})}const L=Math.PI/180*Number(t),w=Math.max(c,s),[H,se,z]=ce(w,w,r);H.translate(z/2,z/2),H.rotate(L),W>0&&O>0&&H.drawImage(B,-W/2,-O/2);function Z(k,y){const b=k*Math.cos(L)-y*Math.sin(L),$=k*Math.sin(L)+y*Math.cos(L);return[b,$]}let I=0,R=0,T=0,P=0;const j=W/2,N=O/2;[[0-j,0-N],[0+j,0-N],[0+j,0+N],[0-j,0+N]].forEach(k=>{let[y,b]=k;const[$,Y]=Z(y,b);I=Math.min(I,$),R=Math.max(R,$),T=Math.min(T,Y),P=Math.max(P,Y)});const G=I+z/2,U=T+z/2,C=R-I,S=P-T,F=d*r,X=m*r,E=(C+F)*2,K=S+X,[Q,ee]=ce(E,K);function _(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Q.drawImage(se,G,U,C,S,k,y,C,S)}return _(),_(C+F,-S/2-X/2),_(C+F,+S/2+X/2),[ee.toDataURL(),E/r,K/r]}return e}function Ze(e){const n=x.useRef(!1),t=x.useRef(null),r=xe(e);return()=>{n.current||(n.current=!0,r(),t.current=Le(()=>{n.current=!1}))}}function qe(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function Ke(e){return Object.keys(e).map(n=>`${qe(n)}: ${e[n]};`).join(" ")}function Qe(){return window.devicePixelRatio||1}const et=(e,n)=>{let t=!1;return e.removedNodes.length&&(t=Array.from(e.removedNodes).some(r=>n(r))),e.type==="attributes"&&n(e.target)&&(t=!0),t},tt={visibility:"visible !important"};function nt(e){const[n]=v.useState(()=>new Map);return[(s,l,d)=>{if(d){if(!n.get(d)){const g=document.createElement("div");n.set(d,g)}const m=n.get(d);m.setAttribute("style",Ke(Object.assign(Object.assign(Object.assign({},e),{backgroundImage:`url('${s}')`,backgroundSize:`${Math.floor(l)}px`}),tt))),m.removeAttribute("class"),m.parentElement!==d&&d.append(m)}return n.get(d)},s=>{const l=n.get(s);l&&s&&s.removeChild(l),n.delete(s)},s=>Array.from(n.values()).includes(s)]}function fe(e,n){return e.size===n.size?e:n}const pe=100,ge=100,he={position:"relative",overflow:"hidden"},rt=e=>{var n,t;const{zIndex:r=9,rotate:c=-22,width:s,height:l,image:d,content:m,font:g={},style:B,className:W,rootClassName:O,gap:L=[pe,ge],offset:w,children:H,inherit:se=!0}=e,z=Object.assign(Object.assign({},he),B),[,Z]=ze(),{color:I=Z.colorFill,fontSize:R=Z.fontSizeLG,fontWeight:T="normal",fontStyle:P="normal",fontFamily:j="sans-serif",textAlign:N="center"}=g,[q=pe,G=ge]=L,U=q/2,C=G/2,S=(n=w==null?void 0:w[0])!==null&&n!==void 0?n:U,F=(t=w==null?void 0:w[1])!==null&&t!==void 0?t:C,X=x.useMemo(()=>{const a={zIndex:r,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"};let i=S-U,u=F-C;return i>0&&(a.left=`${i}px`,a.width=`calc(100% - ${i}px)`,i=0),u>0&&(a.top=`${u}px`,a.height=`calc(100% - ${u}px)`,u=0),a.backgroundPosition=`${i}px ${u}px`,a},[r,S,U,F,C]),[E,K]=x.useState(),[Q,ee]=x.useState(new Set),_=x.useMemo(()=>{const a=E?[E]:[];return[].concat(a,ie(Array.from(Q)))},[E,Q]),k=a=>{let i=120,u=64;if(!d&&a.measureText){a.font=`${Number(R)}px ${j}`;const A=ye(m),M=A.map(h=>{const f=a.measureText(h);return[f.width,f.fontBoundingBoxAscent+f.fontBoundingBoxDescent]});i=Math.ceil(Math.max.apply(Math,ie(M.map(h=>h[0])))),u=Math.ceil(Math.max.apply(Math,ie(M.map(h=>h[1]))))*A.length+(A.length-1)*be}return[s??i,l??u]},y=Je(),[b,$]=x.useState(null),te=Ze(()=>{const i=document.createElement("canvas").getContext("2d");if(i){const u=Qe(),[A,M]=k(i),h=f=>{const[Se,Ee]=y(f||"",c,u,A,M,{color:I,fontSize:R,fontStyle:P,fontWeight:T,fontFamily:j,textAlign:N},q,G);$([Se,Ee])};if(d){const f=new Image;f.onload=()=>{h(f)},f.onerror=()=>{h(m)},f.crossOrigin="anonymous",f.referrerPolicy="no-referrer",f.src=d}else h(m)}}),[ne,V,J]=nt(X);v.useEffect(()=>{b&&_.forEach(a=>{ne(b[0],b[1],a)})},[b,_]);const ae=xe(a=>{a.forEach(i=>{if(et(i,J))te();else if(i.target===E&&i.attributeName==="style"){const u=Object.keys(he);for(let A=0;A<u.length;A+=1){const M=u[A],h=z[M],f=E.style[M];h&&h!==f&&(E.style[M]=h)}}})});Ve(_,ae),v.useEffect(te,[c,r,s,l,d,m,I,R,T,P,j,N,q,G,S,F]);const we=x.useMemo(()=>({add:a=>{ee(i=>{const u=new Set(i);return u.add(a),fe(i,u)})},remove:a=>{V(a),ee(i=>{const u=new Set(i);return u.delete(a),fe(i,u)})}}),[]),Ce=se?x.createElement(Xe.Provider,{value:we},H):H;return x.createElement("div",{ref:K,className:Ie(W,O),style:z},Ce)};function ot(e){return ke({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M321.94 98 158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"},child:[]}]})(e)}const st=p(me)`
  position: relative;
  z-index: 2;
  height: 5rem;
  padding: 0 ${Oe()?"1rem":"2rem"};
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0;
  }
`,at=p(ot)`
  margin-right: 1rem;
  padding: 1rem;
  background: var(--color-gray-3);
  border-radius: var(--radius-button);
`,it=p.span`
  flex: 1;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
  overflow: hidden;
  text-overflow: ellipsis;
`,ct=p(D)`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
`;function lt(){var d,m,g,B;const e=Be(),n=ue(),t=v.useMemo(()=>n.at(-1),[n]),r=(d=t==null?void 0:t.handle)==null?void 0:d.title,c=(m=t==null?void 0:t.handle)==null?void 0:m.needBackIcon,s=(g=t==null?void 0:t.handle)==null?void 0:g.rightArea,l=(B=t==null?void 0:t.handle)==null?void 0:B.titleArea;return o.jsxs(st,{$gap:"1",$justifyContent:Ne.BETWEEN,children:[o.jsxs(ct,{$alignItems:le.CENTER,children:[o.jsx(_e,{when:c,children:()=>o.jsx(at,{onClick:()=>{re.click("header-back-icon"),e(-1)}})}),o.jsx(it,{children:l||r})]}),o.jsx(D,{$alignItems:le.CENTER,children:s})]})}function ut(e){return ke({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"},child:[]}]})(e)}const dt=p(He)`
  display: flex;
  color: var(--color-gray-5);
  transition: color 300ms;

  &:hover {
    color: var(--color-hover);
  }
`,mt=p.span`
  display: flex;
  color: var(--color-active);
`,ft=p(D)`
  font-size: 1.4rem;
`;function pt(){const e=ue(),n=v.useMemo(()=>e.map(t=>{var r,c;return{label:((r=t.handle)==null?void 0:r.crumbLabel)||((c=t.handle)==null?void 0:c.title),path:t.pathname}}).filter(t=>t.label),[e]);return o.jsx(ft,{children:n.map((t,r,c)=>r<c.length-1?o.jsxs(dt,{to:t.path,onClick:()=>re.click("crumb-link-click"),children:["/",t.label]},t.path):o.jsxs(mt,{onClick:()=>re.click("crumb-acitve-text-click"),children:["/",t.label]},t.path))})}const gt=p(me)`
  position: relative;
  z-index: 2;
  padding: 1rem 2rem;
`,ht=p(ut)`
  font-size: 2rem;
  transition: transform 300ms;
  transform: ${({$expandAside:e})=>e?"rotate(180deg)":"rotate(0)"};
`;function xt(){const{expandAside:e}=de("expandAside"),n=()=>{ve().setExpandAside(!e),re.click("footer-expand-icon",{expandAside:!e})};return o.jsx("footer",{children:o.jsxs(gt,{$gap:"1",$alignItems:le.CENTER,children:[o.jsx(ht,{onClick:n,$expandAside:e}),o.jsx(pt,{})]})})}const vt=p(De)`
  margin: 0 0.5rem;
`,kt=v.memo(()=>o.jsx(vt,{needActiveStyle:!0,direction:oe.COLUMN,shadowOption:{$blur:"0.8rem"},appListHander:e=>[{name:"首页",path:"/",icon:o.jsx(Pe,{})},...e]})),yt=p(me)`
  height: 100%;
  overflow: hidden;
`,bt=p.aside`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: ${({$width:e,$expandAside:n})=>n?e:"0"};
  transition: grid-template-columns 300ms;
`;function wt(){const e=Fe(),[n,t]=v.useState(""),r=v.useRef(null),{expandAside:c}=de("expandAside");return v.useEffect(()=>{r.current&&t(`${r.current.offsetWidth/e}rem`)},[e]),o.jsx(bt,{ref:r,$width:n,$expandAside:c,children:o.jsx(yt,{$direction:oe.COLUMN,children:o.jsx(kt,{})})})}const Ct=200;function St(){const{loading:e}=de("loading"),n=ue();return v.useEffect(()=>{ve().setLoading(!1)},[n]),o.jsx(Ue,{spinning:e,delay:Ct,size:"large",fullscreen:!0})}const Et=p(D)`
  position: relative;
  z-index: 1;
  overflow-y: auto;
`,At=p(rt)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;function Yt(){return o.jsxs(At,{content:["cmtlyt","desktop-tools"],font:{color:"rgba(0,0,0,0.05)"},children:[o.jsx(St,{}),o.jsx(Re,{}),o.jsx(Ge,{}),o.jsxs(D,{$flex:"1",style:{height:"100%"},children:[o.jsx(wt,{}),o.jsxs(D,{$flex:"1",$direction:oe.COLUMN,style:{overflow:"hidden"},children:[o.jsx(lt,{}),o.jsx(Et,{$flex:"1",$direction:oe.COLUMN,children:o.jsx(Te,{})}),o.jsx(xt,{})]})]})]})}export{Yt as Component};
