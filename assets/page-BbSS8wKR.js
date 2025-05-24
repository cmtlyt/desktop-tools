import{n as oe,C as B,r as m,j as a,l as v,D as se,E as ce,m as ae,G as ie}from"./index-Ch4bek_b.js";import{A as le}from"./index-D0Yvu1ca.js";import{d as x,a as O,c as M,b as w,F as $}from"./button-ChdjSb5e.js";import{u as V}from"./use-global-event-CyXmMiEp.js";import{G as q}from"./iconBase-DzU9LrI2.js";import{M as ue}from"./index-Dt8jJWz2.js";import{c as me,S as fe}from"./Subject-CC7OZsq2.js";import{H as pe,E as J,a as de,b as he,e as ge,c as xe}from"./index-DhIaIRmc.js";import{B as we}from"./index-CiOg3lfn.js";import{D as Ee}from"./index-BpUMhzI1.js";import"./index-B4g9YTQJ.js";import"./index-DUNRm7oh.js";import"./index-BkUqqAG2.js";import"./useLocale-CkrnKRaz.js";import"./asyncToGenerator-CdfDXCsZ.js";import"./index-B7KP0Gm3.js";import"./index-D6D3cjcs.js";import"./reactNode-xDrto8Ml.js";import"./pickAttrs-CGR3EVLK.js";import"./context-D9gjIaun.js";import"./Skeleton-DYPGJwkD.js";import"./index-D88M7-Vq.js";import"./is-phone-DqVyIJsf.js";const Se=[["0/15/0/0","2/2/3","3/3","3/6/0","6/3/0","0/7/2","2/2/6"],["0/7/0","1/3","3/3/3","6/6/4","3/3/1"],["0/7/5","1/7/4","4/7/1","1"],["1/3/6","1/3/7","1/1"],["1/2/4","7/7/7"]];function Re(e){const t=~~(e/200)+1;return Se.slice(0,t).flat()}function Ce(e,t){return r=>new Array(r?e:t).fill(0)}function b(e,t,r){return t.map((n,s)=>n|r[s+e])}function K(e,t){const r=Re(t),n=Math.floor(Math.random()*r.length),s=r[n].split("/"),u=s.length,c=Math.floor((e-u)/2),o=s.map(i=>parseInt(i,10));return{size:u,elementData:o,rightSpace:c,topPos:0,width:X(o)}}function ye(e,t,r){return(n,s,u)=>{const c=[...u];switch(n){case"left":{if(c.some((o,i)=>{const p=s[i-r];return p&&p&o<<1?!0:o&1<<e-1}))break;return c.map(o=>o<<1)}case"right":{if(c.some((o,i)=>{const p=s[i-r];return p&&p&o>>1?!0:o&1}))break;return c.map(o=>o>>1)}case"bottom":{const o=c.slice(2).some((p,R)=>s[R+1]&p),i=c[t-1];if(o||i)throw{custom:!0,action:"submit"};return c.unshift(0),c.pop(),c}default:return u}return u}}function je(e,t){return t.map(r=>r.toString(2).padStart(e,"0").split(""))}function X(e){return e.reduce((r,n)=>r|n).toString(2).replace(/(^0+)|(0+$)/g,"").length}function z(e,t){const{elementData:r,rightSpace:n,topPos:s,width:u,size:c}=t;let o=n;return o-u/2<0?o=0:o+u>=e&&(o=e-c),t.rightSpace=o,new Array(s).fill(0).concat(r.map(i=>i<<o))}function _(e){const{size:t,elementData:r}=e,n=je(t,r),s=Array.from({length:n.length},()=>new Array(n.length));for(let c=0;c<n.length;++c){const o=n[c];for(let i=0;i<o.length;++i)s[t-1-i][c]=n[c][i]}const u=s.map(c=>parseInt(c.join(""),2));return{...e,elementData:u,width:X(u)}}function Ae(e,t,r){const n=[];for(let s=0;s<e;++s)t[s]===r&&n.push(s);return n}function ke(e,t){return e.toString(2).padStart(t).split("")}var h=(e=>(e.RUNNING="running",e.PAUSE="pause",e.OVER="over",e))(h||{});const{useStoreSlice:U,getStore:y}=oe(e=>({gameId:B(),row:20,col:10,moveAddRow:2,gameStatus:"over",setRow:t=>e({row:t}),setCol:t=>e({col:t}),setMoveAddRow:t=>e({moveAddRow:t}),updateGameId:()=>e({gameId:B(),gameStatus:"over"}),setGameStatus:t=>e({gameStatus:t})}));function ve(e){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 8 8 12 12 16"},child:[]},{tag:"line",attr:{x1:"16",y1:"12",x2:"8",y2:"12"},child:[]}]})(e)}function $e(e){return q({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 16 16 12 12 8"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const Z=x(w)`
  width: 100%;
  height: 100%;
  max-width: 35vh;
  max-height: 70vh;
  aspect-ratio: 1/2;
  color: var(--color-primary);
`,Me=x(Z)`
  width: 15vmin;
  height: 15vmin;
`,Ne=x.div`
  flex: 1;
  color: ${e=>e.$active?"inherit":"#0002"};
  box-shadow:
    inset 0 0 0 0.2rem currentColor,
    inset 0 0 0 0.8rem #fff ${e=>e.$active?", inset 0 0 0 10rem currentColor":""};
`,De=x.span`
  font-size: 2rem;
`,Ie=x(w)`
  ${({$isClear:e})=>e?"animation: clear-row 500ms ease-in-out infinite alternate;":""}

  @keyframes clear-row {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;function Q(e){const{rowData:t,$isClear:r,col:n}=e,{col:s}=U("col");return a.jsx(Ie,{$flex:"1",$gap:"0.5",$isClear:r,children:ke(t,n||s).map((u,c)=>a.jsx(Ne,{$active:String(u)==="1"},c))})}const Le=m.memo(function(e){const{elementInfo:t}=e,{elementData:r=[],size:n}=t;return a.jsx(Me,{$gap:"0.5",$direction:M.COLUMN,children:r.map((s,u)=>a.jsx(Q,{rowData:s,col:n},u))})}),T=x(w)`
  height: 70%;
  aspect-ratio: 1/1;

  & > svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    height: unset;
    width: 40%;
  }
`,be=x(w)`
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 40%;
  }
`;function Te(e){const{move:t,rotate:r}=e;return a.jsxs(be,{$gap:"1",$alignItems:O.CENTER,children:[a.jsx(T,{onClick:()=>t("left"),children:a.jsx(ve,{})}),a.jsx(T,{onClick:()=>t("right"),children:a.jsx($e,{})}),a.jsx(T,{onClick:()=>r(),children:a.jsx(ue,{})})]})}const Oe=x(w)`
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`,Ue=x(w)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;var S=(e=>(e.START="start",e.PAUSE="pause",e.RELOAD="reload",e))(S||{});const ee=new fe;function Y(e){ee.next(e),v.event("ELSFK-action",e)}const Fe=me(ee);function Ge(){const{gameStatus:e}=U("gameStatus"),[t,r]=m.useState(!1),n=e===h.RUNNING;return a.jsxs(a.Fragment,{children:[a.jsx(we,{buttons:[{text:n?"暂停":"开始",onClick(){Y({id:`elsfk-${n?"pause":"start"}`,type:n?S.PAUSE:S.START})}},{text:"重置",onClick(){Y({id:"elsfk-reload",type:S.RELOAD})}},{text:"游戏记录",onClick:()=>r(!0)}]}),a.jsx(pe,{open:t,storeKey:J,onClose:()=>r(!1),children:s=>a.jsx(de,{$direction:M.COLUMN,$gap:"0.5",children:a.jsxs(he,{$alignItems:O.CENTER,$justifyContent:$.BETWEEN,children:[a.jsxs("span",{children:["分数: ",s.score]}),a.jsx(Ee,{format:"yyyy-MM-DD hh:mm:ss",children:s.time})]})},s.gameId)})]})}function lt(){const{row:e,col:t,moveAddRow:r}=U(["row","col","moveAddRow"]),n=e+r,s=m.useRef(500),u=m.useRef(!1),c=m.useMemo(()=>Ce(n,e),[n,e]),o=m.useRef(c(!1)),i=m.useRef(c(!0)),p=m.useRef({}),R=m.useRef({}),[F,te]=m.useState(b(r,o.current,i.current)),[re,G]=m.useState([]),E=m.useRef(0),H=m.useMemo(()=>(1<<t)-1,[t]),j=m.useCallback(()=>{te(b(r,o.current,i.current))},[r]),D=m.useMemo(()=>ye(t,n,r),[t,n,r]),A=m.useCallback(()=>{const l=R.current;let f=K(t,E.current);new Array(Math.floor(Math.random()*4)).forEach(()=>f=_(f));const d=z(t,l);R.current=f,p.current=l,i.current=c(!0),i.current.unshift(...d),i.current.splice(n)},[c,n,t]),I=l=>{const f={left:1,right:-1,bottom:0}[l]||0,d=i.current,g=D(l,o.current,i.current);d!==g&&(i.current=g,p.current.rightSpace+=f,j())},P=()=>{const l=p.current;p.current=_(p.current);const f=z(t,p.current),d=o.current;if(f.some((g,C)=>{const N=d[C-r];return N&&N&g})){p.current=l;return}i.current=[...f].concat(new Array(n-f.length).fill(0)),j()};V("keydown",l=>{if(l.code==="ArrowLeft")I("left");else if(l.code==="ArrowRight")I("right");else if(l.code==="ArrowUp")P();else if(l.code==="ArrowDown"){if(u.current)return;u.current=!0,s.current/=4}}),V("keyup",l=>{l.code==="ArrowDown"&&(u.current=!1,s.current*=4)});const W=m.useCallback(()=>{y().setGameStatus(h.OVER);const l={gameId:y().gameId,score:E.current};se(J,{...l,time:Date.now()}),ce(),v.event("game-elsfk-over",l),v.expose("game-elsfk-over"),ge({id:"reload-history",type:xe.RELOAD_HISTORY}),ae().showMessage({content:`游戏结束, 得分: ${E.current}`})},[]),k=m.useMemo(()=>ie(()=>{y().gameStatus===h.RUNNING&&setTimeout(()=>{try{i.current=D("bottom",o.current,i.current),p.current.topPos+=1}catch(f){const d=f;if(!d.custom)return v.error("elsfk-next-tick",f);if(d.action!=="submit")return;const g=b(r,o.current,i.current);o.current=g;const C=Ae(e,g,H);if(C.length){E.current+=C.length*t,G(C),setTimeout(()=>{C.forEach(N=>{g.splice(N,1),g.unshift(0)}),G([]),A(),k()},2e3);return}if(i.current[n-e-1])return W();A()}j(),k()},s.current)},10),[D,A,H,r,n,e,t,j,W]),L=m.useCallback((l=!1)=>{o.current=c(!1),i.current=c(!0),s.current=500,u.current=!1,E.current=0,R.current=l?{}:K(t,E.current)},[c,t]),ne=m.useCallback(()=>{y().gameStatus===h.OVER&&(y().setGameStatus(h.RUNNING),L(),A(),k())},[A,k,L]);return Fe(({type:l})=>{const{setGameStatus:f,gameStatus:d}=y();l===S.START?d===h.PAUSE?(f(h.RUNNING),k()):ne():l===S.PAUSE?f(h.PAUSE):l===S.RELOAD&&(L(!0),f(h.OVER),j())}),a.jsx(le,{onFirstAppear:()=>v.expose("game-elsfk"),children:a.jsxs(w,{$flex:"1",$alignItems:O.CENTER,$justifyContent:$.CENTER,$gap:"1",$direction:M.COLUMN,children:[a.jsxs(De,{children:["当前得分: ",E.current]}),a.jsxs(Ue,{$flex:"1",$gap:"1",$justifyContent:$.CENTER,style:{width:"100%"},children:[a.jsx(w,{$justifyContent:$.CENTER,children:a.jsx(Z,{$gap:"0.5",$direction:M.COLUMN,children:F.map((l,f)=>a.jsx(Q,{rowData:l,$isClear:re.includes(f)},f))})}),a.jsxs(Oe,{$direction:M.ROW,$justifyContent:$.BETWEEN,children:[a.jsx(Te,{move:I,rotate:P}),a.jsx(Le,{elementInfo:R.current})]})]})]})})}const ut={title:"俄罗斯方块",needBackIcon:!0,rightArea:a.jsx(Ge,{})};export{lt as Component,ut as handle};
