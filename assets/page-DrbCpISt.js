import{m as oe,B as W,r as m,j as a,l as v,C as se,D as ce,k as ae,E as ie}from"./index-Cj4d-NSq.js";import{A as ue}from"./index-D0CGa0-b.js";import{d as x,c as M,b as w,a as O,F as $}from"./button-BB6UOCFL.js";import{u as V}from"./use-global-event-Di9NpVmn.js";import{G as q}from"./iconBase-DeZfe_tQ.js";import{M as le}from"./index-DcIG1icn.js";import{S as me,c as pe}from"./Subject-CDYJbb3o.js";import{H as fe,E as J,a as de,b as he,e as ge,c as xe}from"./index-ChuS5VU_.js";import{B as we}from"./index-BKIhgYM7.js";import{D as Se}from"./index-zOecaIuv.js";import"./index-B4g9YTQJ.js";import"./index-DxUizZtc.js";import"./index-DEhNnajA.js";import"./useLocale-yBWL3Cll.js";import"./asyncToGenerator-Db3WZ056.js";import"./index-B91fkpHe.js";import"./index-CKcgsg6A.js";import"./reactNode-KkrOY377.js";import"./KeyCode-DNlgD2sM.js";import"./pickAttrs-BVr0Qvrq.js";import"./context-BSP1UJLN.js";import"./Skeleton-CXCIFJq5.js";import"./index-Bv86NiwP.js";import"./is-phone-B81vXL3j.js";import"./index-D-jR-I7g.js";const Ee=[["0/15/0/0","2/2/3","3/3","3/6/0","6/3/0","0/7/2","2/2/6"],["0/7/0","1/3","3/3/3","6/6/4","3/3/1"],["0/7/5","1/7/4","4/7/1","1"],["1/3/6","1/3/7","1/1"],["1/2/4","7/7/7"]];function Re(e){const t=~~(e/200)+1;return Ee.slice(0,t).flat()}function Ce(e,t){return r=>new Array(r?e:t).fill(0)}function b(e,t,r){return t.map((n,s)=>n|r[s+e])}function K(e,t){const r=Re(t),n=Math.floor(Math.random()*r.length),s=r[n].split("/"),l=s.length,c=Math.floor((e-l)/2),o=s.map(i=>parseInt(i,10));return{size:l,elementData:o,rightSpace:c,topPos:0,width:X(o)}}function ye(e,t,r){return(n,s,l)=>{const c=[...l];switch(n){case"left":{if(c.some((o,i)=>{const f=s[i-r];return f&&f&o<<1?!0:o&1<<e-1}))break;return c.map(o=>o<<1)}case"right":{if(c.some((o,i)=>{const f=s[i-r];return f&&f&o>>1?!0:o&1}))break;return c.map(o=>o>>1)}case"bottom":{const o=c.slice(2).some((f,R)=>s[R+1]&f),i=c[t-1];if(o||i)throw{custom:!0,action:"submit"};return c.unshift(0),c.pop(),c}default:return l}return l}}function je(e,t){return t.map(r=>r.toString(2).padStart(e,"0").split(""))}function X(e){return e.reduce((r,n)=>r|n).toString(2).replace(/(^0+)|(0+$)/g,"").length}function z(e,t){const{elementData:r,rightSpace:n,topPos:s,width:l,size:c}=t;let o=n;return o-l/2<0?o=0:o+l>=e&&(o=e-c),t.rightSpace=o,new Array(s).fill(0).concat(r.map(i=>i<<o))}function _(e){const{size:t,elementData:r}=e,n=je(t,r),s=Array.from({length:n.length},()=>new Array(n.length));for(let c=0;c<n.length;++c){const o=n[c];for(let i=0;i<o.length;++i)s[t-1-i][c]=n[c][i]}const l=s.map(c=>parseInt(c.join(""),2));return{...e,elementData:l,width:X(l)}}function Ae(e,t,r){const n=[];for(let s=0;s<e;++s)t[s]===r&&n.push(s);return n}function ke(e,t){return e.toString(2).padStart(t).split("")}var h=(e=>(e.RUNNING="running",e.PAUSE="pause",e.OVER="over",e))(h||{});const{useStore:mt,useStoreSlice:F,getStore:y}=oe(e=>({gameId:W(),row:20,col:10,moveAddRow:2,gameStatus:"over",setRow:t=>e({row:t}),setCol:t=>e({col:t}),setMoveAddRow:t=>e({moveAddRow:t}),updateGameId:()=>e({gameId:W(),gameStatus:"over"}),setGameStatus:t=>e({gameStatus:t})}));function ve(e){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 8 8 12 12 16"},child:[]},{tag:"line",attr:{x1:"16",y1:"12",x2:"8",y2:"12"},child:[]}]})(e)}function $e(e){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 16 16 12 12 8"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const Z=x(w)`
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
`;function Q(e){const{rowData:t,$isClear:r,col:n}=e,{col:s}=F("col");return a.jsx(Ie,{$flex:"1",$gap:"0.5",$isClear:r,children:ke(t,n||s).map((l,c)=>a.jsx(Ne,{$active:String(l)==="1"},c))})}const Le=m.memo(function(e){const{elementInfo:t}=e,{elementData:r=[],size:n}=t;return a.jsx(Me,{$gap:"0.5",$direction:M.COLUMN,children:r.map((s,l)=>a.jsx(Q,{rowData:s,col:n},l))})}),T=x(w)`
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
`;function Te(e){const{move:t,rotate:r}=e;return a.jsxs(be,{$gap:"1",$alignItems:O.CENTER,children:[a.jsx(T,{onClick:()=>t("left"),children:a.jsx(ve,{})}),a.jsx(T,{onClick:()=>t("right"),children:a.jsx($e,{})}),a.jsx(T,{onClick:()=>r(),children:a.jsx(le,{})})]})}const Oe=x(w)`
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`,Fe=x(w)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;var E=(e=>(e.START="start",e.PAUSE="pause",e.RELOAD="reload",e))(E||{});const ee=new me;function Y(e){ee.next(e),v.event("ELSFK-action",e)}const Ue=pe(ee);function Ge(){const{gameStatus:e}=F("gameStatus"),[t,r]=m.useState(!1),n=e===h.RUNNING;return a.jsxs(a.Fragment,{children:[a.jsx(we,{buttons:[{text:n?"暂停":"开始",onClick(){Y({id:`elsfk-${n?"pause":"start"}`,type:n?E.PAUSE:E.START})}},{text:"重置",onClick(){Y({id:"elsfk-reload",type:E.RELOAD})}},{text:"游戏记录",onClick:()=>r(!0)}]}),a.jsx(fe,{open:t,storeKey:J,onClose:()=>r(!1),children:s=>a.jsx(de,{$direction:M.COLUMN,$gap:"0.5",children:a.jsxs(he,{$alignItems:O.CENTER,$justifyContent:$.BETWEEN,children:[a.jsxs("span",{children:["分数: ",s.score]}),a.jsx(Se,{format:"yyyy-MM-DD hh:mm:ss",children:s.time})]})},s.gameId)})]})}function pt(){const{row:e,col:t,moveAddRow:r}=F(["row","col","moveAddRow"]),n=e+r,s=m.useRef(500),l=m.useRef(!1),c=m.useMemo(()=>Ce(n,e),[n,e]),o=m.useRef(c(!1)),i=m.useRef(c(!0)),f=m.useRef({}),R=m.useRef({}),[U,te]=m.useState(b(r,o.current,i.current)),[re,G]=m.useState([]),S=m.useRef(0),H=m.useMemo(()=>(1<<t)-1,[t]),j=m.useCallback(()=>{te(b(r,o.current,i.current))},[r]),D=m.useMemo(()=>ye(t,n,r),[t,n,r]),A=m.useCallback(()=>{const u=R.current;let p=K(t,S.current);new Array(Math.floor(Math.random()*4)).forEach(()=>p=_(p));const d=z(t,u);R.current=p,f.current=u,i.current=c(!0),i.current.unshift(...d),i.current.splice(n)},[c,n,t]),I=u=>{const p={left:1,right:-1,bottom:0}[u]||0,d=i.current,g=D(u,o.current,i.current);d!==g&&(i.current=g,f.current.rightSpace+=p,j())},B=()=>{const u=f.current;f.current=_(f.current);const p=z(t,f.current),d=o.current;if(p.some((g,C)=>{const N=d[C-r];return N&&N&g})){f.current=u;return}i.current=[...p].concat(new Array(n-p.length).fill(0)),j()};V("keydown",u=>{if(u.code==="ArrowLeft")I("left");else if(u.code==="ArrowRight")I("right");else if(u.code==="ArrowUp")B();else if(u.code==="ArrowDown"){if(l.current)return;l.current=!0,s.current/=4}}),V("keyup",u=>{u.code==="ArrowDown"&&(l.current=!1,s.current*=4)});const P=m.useCallback(()=>{y().setGameStatus(h.OVER);const u={gameId:y().gameId,score:S.current};se(J,{...u,time:Date.now()}),ce(),v.event("game-elsfk-over",u),v.expose("game-elsfk-over"),ge({id:"reload-history",type:xe.RELOAD_HISTORY}),ae().showMessage({content:`游戏结束, 得分: ${S.current}`})},[]),k=m.useMemo(()=>ie(()=>{y().gameStatus===h.RUNNING&&setTimeout(()=>{try{i.current=D("bottom",o.current,i.current),f.current.topPos+=1}catch(p){const d=p;if(!d.custom)return v.error("elsfk-next-tick",p);if(d.action!=="submit")return;const g=b(r,o.current,i.current);o.current=g;const C=Ae(e,g,H);if(C.length){S.current+=C.length*t,G(C),setTimeout(()=>{C.forEach(N=>{g.splice(N,1),g.unshift(0)}),G([]),A(),k()},2e3);return}if(i.current[n-e-1])return P();A()}j(),k()},s.current)},10),[D,A,H,r,n,e,t,j,P]),L=m.useCallback((u=!1)=>{o.current=c(!1),i.current=c(!0),s.current=500,l.current=!1,S.current=0,R.current=u?{}:K(t,S.current)},[c,t]),ne=m.useCallback(()=>{y().gameStatus===h.OVER&&(y().setGameStatus(h.RUNNING),L(),A(),k())},[A,k,L]);return Ue(({type:u})=>{const{setGameStatus:p,gameStatus:d}=y();u===E.START?d===h.PAUSE?(p(h.RUNNING),k()):ne():u===E.PAUSE?p(h.PAUSE):u===E.RELOAD&&(L(!0),p(h.OVER),j())}),a.jsx(ue,{onFirstAppear:()=>v.expose("game-elsfk"),children:a.jsxs(w,{$flex:"1",$alignItems:O.CENTER,$justifyContent:$.CENTER,$gap:"1",$direction:M.COLUMN,children:[a.jsxs(De,{children:["当前得分: ",S.current]}),a.jsxs(Fe,{$flex:"1",$gap:"1",$justifyContent:$.CENTER,style:{width:"100%"},children:[a.jsx(w,{$justifyContent:$.CENTER,children:a.jsx(Z,{$gap:"0.5",$direction:M.COLUMN,children:U.map((u,p)=>a.jsx(Q,{rowData:u,$isClear:re.includes(p)},p))})}),a.jsxs(Oe,{$direction:M.ROW,$justifyContent:$.BETWEEN,children:[a.jsx(Te,{move:I,rotate:B}),a.jsx(Le,{elementInfo:R.current})]})]})]})})}const ft={title:"俄罗斯方块",needBackIcon:!0,rightArea:a.jsx(Ge,{})};export{pt as Component,ft as handle};
