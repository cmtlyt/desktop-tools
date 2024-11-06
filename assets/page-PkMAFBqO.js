import{r as m,y as a}from"./index-CfwBVzOL.js";import{h as se,z as B,i as ce,d as x,c as M,b as w,a as O,l as k,F as $,C as ae,D as ie,g as ue,H as le,A as me}from"./index-CnrgWnd9.js";import{G as J}from"./index-DqussmJY.js";import{M as fe}from"./index-CgLqdXiJ.js";import{S as de,c as pe}from"./create-action-subscribe-hook-D5eI3god.js";import{H as he,E as X,a as ge,b as xe,e as we,c as Ee}from"./index-CwUGTOSB.js";import{B as Se}from"./index-BSUe0tgs.js";import{D as Re}from"./index-Dlw-UWBC.js";import"./array-BpJYGSJj.js";import"./index-2Fq0qy_u.js";import"./asyncToGenerator-CFFvzZYl.js";import"./pickAttrs-djDJA2nm.js";import"./context-D-fBrFUT.js";const Ce=[["0/15/0/0","2/2/3","3/3","3/6/0","6/3/0","0/7/2","2/2/6"],["0/7/0","1/3","3/3/3","6/6/4","3/3/1"],["0/7/5","1/7/4","4/7/1","1"],["1/3/6","1/3/7","1/1"],["1/2/4","7/7/7"]];function ye(e){const t=~~(e/200)+1;return Ce.slice(0,t).flat()}function je(e,t){return r=>new Array(r?e:t).fill(0)}function b(e,t,r){return t.map((n,s)=>n|r[s+e])}function V(e,t){const r=ye(t),n=Math.floor(Math.random()*r.length),s=r[n].split("/"),l=s.length,c=Math.floor((e-l)/2),o=s.map(i=>parseInt(i,10));return{size:l,elementData:o,rightSpace:c,topPos:0,width:Z(o)}}function Ae(e,t,r){return(n,s,l)=>{const c=[...l];switch(n){case"left":{if(c.some((o,i)=>{const d=s[i-r];return d&&d&o<<1?!0:o&1<<e-1}))break;return c.map(o=>o<<1)}case"right":{if(c.some((o,i)=>{const d=s[i-r];return d&&d&o>>1?!0:o&1}))break;return c.map(o=>o>>1)}case"bottom":{const o=c.slice(2).some((d,R)=>s[R+1]&d),i=c[t-1];if(o||i)throw{custom:!0,action:"submit"};return c.unshift(0),c.pop(),c}default:return l}return l}}function ve(e,t){return t.map(r=>r.toString(2).padStart(e,"0").split(""))}function Z(e){return e.reduce((r,n)=>r|n).toString(2).replace(/(^0+)|(0+$)/g,"").length}function K(e,t){const{elementData:r,rightSpace:n,topPos:s,width:l,size:c}=t;let o=n;return o-l/2<0?o=0:o+l>=e&&(o=e-c),t.rightSpace=o,new Array(s).fill(0).concat(r.map(i=>i<<o))}function z(e){const{size:t,elementData:r}=e,n=ve(t,r),s=Array.from({length:n.length},()=>new Array(n.length));for(let c=0;c<n.length;++c){const o=n[c];for(let i=0;i<o.length;++i)s[t-1-i][c]=n[c][i]}const l=s.map(c=>parseInt(c.join(""),2));return{...e,elementData:l,width:Z(l)}}function ke(e,t,r){const n=[];for(let s=0;s<e;++s)t[s]===r&&n.push(s);return n}function $e(e,t){return e.toString(2).padStart(t).split("")}function _(e,t){m.useEffect(()=>(window.addEventListener(e,t),()=>window.removeEventListener(e,t)),[e,t])}var h=(e=>(e.RUNNING="running",e.PAUSE="pause",e.OVER="over",e))(h||{});const q=se(e=>({gameId:B(),row:20,col:10,moveAddRow:2,gameStatus:"over",setRow:t=>e({row:t}),setCol:t=>e({col:t}),setMoveAddRow:t=>e({moveAddRow:t}),updateGameId:()=>e({gameId:B(),gameStatus:"over"}),setGameStatus:t=>e({gameStatus:t})})),F=e=>q(ce(e)),y=()=>q.getState();function Me(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 8 8 12 12 16"},child:[]},{tag:"line",attr:{x1:"16",y1:"12",x2:"8",y2:"12"},child:[]}]})(e)}function Le(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 16 16 12 12 8"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const Q=x(w)`
  width: 100%;
  height: 100%;
  max-width: 35vh;
  max-height: 70vh;
  aspect-ratio: 1/2;
  color: var(--color-primary);
`,De=x(Q)`
  width: 15vmin;
  height: 15vmin;
`,Ne=x.div`
  flex: 1;
  color: ${e=>e.$active?"inherit":"#0002"};
  box-shadow:
    inset 0 0 0 0.2rem currentColor,
    inset 0 0 0 0.8rem #fff ${e=>e.$active?", inset 0 0 0 10rem currentColor":""};
`,Ie=x.span`
  font-size: 2rem;
`,be=x(w)`
  ${({$isClear:e})=>e?"animation: clear-row 500ms ease-in-out infinite alternate;":""}

  @keyframes clear-row {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;function ee(e){const{rowData:t,$isClear:r,col:n}=e,{col:s}=F("col");return a.jsx(be,{$flex:"1",$gap:"0.5",$isClear:r,children:$e(t,n||s).map((l,c)=>a.jsx(Ne,{$active:String(l)==="1"},c))})}const Te=m.memo(function(e){const{elementInfo:t}=e,{elementData:r=[],size:n}=t;return a.jsx(De,{$gap:"0.5",$direction:M.COLUMN,children:r.map((s,l)=>a.jsx(ee,{rowData:s,col:n},l))})}),T=x(w)`
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
`,Oe=x(w)`
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 40%;
  }
`;function Fe(e){const{move:t,rotate:r}=e;return a.jsxs(Oe,{$gap:"1",$alignItems:O.CENTER,children:[a.jsx(T,{onClick:()=>t("left"),children:a.jsx(Me,{})}),a.jsx(T,{onClick:()=>t("right"),children:a.jsx(Le,{})}),a.jsx(T,{onClick:()=>r(),children:a.jsx(fe,{})})]})}const Ue=x(w)`
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`,Ge=x(w)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;var S=(e=>(e.START="start",e.PAUSE="pause",e.RELOAD="reload",e))(S||{});const te=new de;function Y(e){te.next(e),k.event("ELSFK-action",e)}const He=pe(te);function Pe(){const{gameStatus:e}=F("gameStatus"),[t,r]=m.useState(!1),n=e===h.RUNNING;return a.jsxs(a.Fragment,{children:[a.jsx(Se,{buttons:[{text:n?"暂停":"开始",onClick(){Y({id:`elsfk-${n?"pause":"start"}`,type:n?S.PAUSE:S.START})}},{text:"重置",onClick(){Y({id:"elsfk-reload",type:S.RELOAD})}},{text:"游戏记录",onClick:()=>r(!0)}]}),a.jsx(he,{open:t,storeKey:X,onClose:()=>r(!1),children:s=>a.jsx(ge,{$direction:M.COLUMN,$gap:"0.5",children:a.jsxs(xe,{$alignItems:O.CENTER,$justifyContent:$.BETWEEN,children:[a.jsxs("span",{children:["分数: ",s.score]}),a.jsx(Re,{format:"yyyy-MM-DD hh:mm:ss",children:s.time})]})},s.gameId)})]})}function tt(){const{row:e,col:t,moveAddRow:r}=F(["row","col","moveAddRow"]),n=e+r,s=m.useRef(500),l=m.useRef(!1),c=m.useMemo(()=>je(n,e),[n,e]),o=m.useRef(c(!1)),i=m.useRef(c(!0)),d=m.useRef({}),R=m.useRef({}),[U,re]=m.useState(b(r,o.current,i.current)),[ne,G]=m.useState([]),E=m.useRef(0),H=m.useMemo(()=>(1<<t)-1,[t]),j=m.useCallback(()=>{re(b(r,o.current,i.current))},[r]),D=m.useMemo(()=>Ae(t,n,r),[t,n,r]),A=m.useCallback(()=>{const u=R.current;let f=V(t,E.current);new Array(Math.floor(Math.random()*4)).forEach(()=>f=z(f));const p=K(t,u);R.current=f,d.current=u,i.current=c(!0),i.current.unshift(...p),i.current.splice(n)},[c,n,t]),N=u=>{const f={left:1,right:-1,bottom:0}[u]||0,p=i.current,g=D(u,o.current,i.current);p!==g&&(i.current=g,d.current.rightSpace+=f,j())},P=()=>{const u=d.current;d.current=z(d.current);const f=K(t,d.current),p=o.current;if(f.some((g,C)=>{const L=p[C-r];return L&&L&g})){d.current=u;return}i.current=[...f].concat(new Array(n-f.length).fill(0)),j()};_("keydown",u=>{if(u.code==="ArrowLeft")N("left");else if(u.code==="ArrowRight")N("right");else if(u.code==="ArrowUp")P();else if(u.code==="ArrowDown"){if(l.current)return;l.current=!0,s.current/=4}}),_("keyup",u=>{u.code==="ArrowDown"&&(l.current=!1,s.current*=4)});const W=m.useCallback(()=>{y().setGameStatus(h.OVER);const u={gameId:y().gameId,score:E.current};ae(X,{...u,time:Date.now()}),ie(),k.event("game-elsfk-over",u),k.expose("game-elsfk-over"),we({id:"reload-history",type:Ee.RELOAD_HISTORY}),ue().showMessage({content:`游戏结束, 得分: ${E.current}`})},[]),v=m.useMemo(()=>le(()=>{y().gameStatus===h.RUNNING&&setTimeout(()=>{try{i.current=D("bottom",o.current,i.current),d.current.topPos+=1}catch(f){const p=f;if(!p.custom)return k.error("elsfk-next-tick",f);if(p.action!=="submit")return;const g=b(r,o.current,i.current);o.current=g;const C=ke(e,g,H);if(C.length){E.current+=C.length*t,G(C),setTimeout(()=>{C.forEach(L=>{g.splice(L,1),g.unshift(0)}),G([]),A(),v()},2e3);return}if(i.current[n-e-1])return W();A()}j(),v()},s.current)},10),[D,A,H,r,n,e,t,j,W]),I=m.useCallback((u=!1)=>{o.current=c(!1),i.current=c(!0),s.current=500,l.current=!1,E.current=0,R.current=u?{}:V(t,E.current)},[c,t]),oe=m.useCallback(()=>{y().gameStatus===h.OVER&&(y().setGameStatus(h.RUNNING),I(),A(),v())},[A,v,I]);return He(({type:u})=>{const{setGameStatus:f,gameStatus:p}=y();u===S.START?p===h.PAUSE?(f(h.RUNNING),v()):oe():u===S.PAUSE?f(h.PAUSE):u===S.RELOAD&&(I(!0),f(h.OVER),j())}),a.jsx(me,{onFirstAppear:()=>k.expose("game-elsfk"),children:a.jsxs(w,{$flex:"1",$alignItems:O.CENTER,$justifyContent:$.CENTER,$gap:"1",$direction:M.COLUMN,children:[a.jsxs(Ie,{children:["当前得分: ",E.current]}),a.jsxs(Ge,{$flex:"1",$gap:"1",$justifyContent:$.CENTER,style:{width:"100%"},children:[a.jsx(w,{$justifyContent:$.CENTER,children:a.jsx(Q,{$gap:"0.5",$direction:M.COLUMN,children:U.map((u,f)=>a.jsx(ee,{rowData:u,$isClear:ne.includes(f)},f))})}),a.jsxs(Ue,{$direction:M.ROW,$justifyContent:$.BETWEEN,children:[a.jsx(Fe,{move:N,rotate:P}),a.jsx(Te,{elementInfo:R.current})]})]})]})})}const rt={title:"俄罗斯方块",needBackIcon:!0,rightArea:a.jsx(Pe,{})};export{tt as Component,rt as handle};
