import{r as m,x as c}from"./index-ZawOXNeP.js";import{i as ce,C as B,j as ae,d as x,c as M,b as w,a as O,l as k,F as $,D as ie,E as ue,g as le,H as me,A as fe}from"./index-DkylwoUz.js";import{G as X,M as de}from"./index-eW_nIvZE.js";import{S as pe,c as he}from"./create-action-subscribe-hook-DgpuR3Yx.js";import{H as ge,E as Z,a as xe,b as we,e as Ee,c as Se}from"./index-DGp3lBRW.js";import{B as Re}from"./index-BdJiswBQ.js";import{D as Ce}from"./index-BIV1eAdg.js";import"./array-Al3mLqzm.js";import"./ContextIsolator-BOGHCJ8S.js";import"./asyncToGenerator-CfVfm9K9.js";import"./context-YV9YL65A.js";import"./genStyleUtils-D7t1e2gT.js";import"./index-Su3iJh06.js";import"./index-xfXXIjx0.js";const V=["0/15/0/0","2/2/3","3/3","3/6/0","6/3/0","0/7/2","2/2/6"];function ye(e,t){return r=>new Array(r?e:t).fill(0)}function b(e,t,r){return t.map((n,s)=>n|r[s+e])}function K(e){const t=Math.floor(Math.random()*V.length),r=V[t].split("/"),n=r.length,s=Math.floor((e-n)/2),l=r.map(o=>parseInt(o,10));return{size:n,elementData:l,rightSpace:s,topPos:0,width:q(l)}}function je(e,t,r){return(n,s,l)=>{const o=[...l];switch(n){case"left":{if(o.some((a,i)=>{const d=s[i-r];return d&&d&a<<1?!0:a&1<<e-1}))break;return o.map(a=>a<<1)}case"right":{if(o.some((a,i)=>{const d=s[i-r];return d&&d&a>>1?!0:a&1}))break;return o.map(a=>a>>1)}case"bottom":{const a=o.slice(2).some((d,S)=>s[S+1]&d),i=o[t-1];if(a||i)throw{custom:!0,action:"submit"};return o.unshift(0),o.pop(),o}default:return l}return l}}function Ae(e,t){return t.map(r=>r.toString(2).padStart(e,"0").split(""))}function q(e){return e.reduce((r,n)=>r|n).toString(2).replace(/(^0+)|(0+$)/g,"").length}function z(e,t){const{elementData:r,rightSpace:n,topPos:s,width:l,size:o}=t;let a=n;return a-l/2<0?a=0:a+l>=e&&(a=e-o),t.rightSpace=a,new Array(s).fill(0).concat(r.map(i=>i<<a))}function _(e){const{size:t,elementData:r}=e,n=Ae(t,r),s=Array.from({length:n.length},()=>new Array(n.length));for(let o=0;o<n.length;++o){const a=n[o];for(let i=0;i<a.length;++i)s[t-1-i][o]=n[o][i]}const l=s.map(o=>parseInt(o.join(""),2));return{...e,elementData:l,width:q(l)}}function ve(e,t,r){const n=[];for(let s=0;s<e;++s)t[s]===r&&n.push(s);return n}function ke(e,t){return e.toString(2).padStart(t).split("")}function Y(e,t){m.useEffect(()=>(window.addEventListener(e,t),()=>window.removeEventListener(e,t)),[e,t])}var g=(e=>(e.RUNNING="running",e.PAUSE="pause",e.OVER="over",e))(g||{});const Q=ce(e=>({gameId:B(),row:20,col:10,moveAddRow:2,gameStatus:"over",setRow:t=>e({row:t}),setCol:t=>e({col:t}),setMoveAddRow:t=>e({moveAddRow:t}),updateGameId:()=>e({gameId:B(),gameStatus:"over"}),setGameStatus:t=>e({gameStatus:t})})),F=e=>Q(ae(e)),C=()=>Q.getState();function $e(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 8 8 12 12 16"},child:[]},{tag:"line",attr:{x1:"16",y1:"12",x2:"8",y2:"12"},child:[]}]})(e)}function Me(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 16 16 12 12 8"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const ee=x(w)`
  width: 100%;
  height: 100%;
  max-width: 35vh;
  max-height: 70vh;
  aspect-ratio: 1/2;
  color: var(--color-primary);
`,Le=x(ee)`
  width: 15vmin;
  height: 15vmin;
`,De=x.div`
  flex: 1;
  color: ${e=>e.$active?"inherit":"#0002"};
  box-shadow:
    inset 0 0 0 0.2rem currentColor,
    inset 0 0 0 0.8rem #fff ${e=>e.$active?", inset 0 0 0 10rem currentColor":""};
`,Ne=x.span`
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
`;function te(e){const{rowData:t,$isClear:r,col:n}=e,{col:s}=F("col");return c.jsx(Ie,{$flex:"1",$gap:"0.5",$isClear:r,children:ke(t,n||s).map((l,o)=>c.jsx(De,{$active:String(l)==="1"},o))})}const be=m.memo(function(e){const{elementInfo:t}=e,{elementData:r=[],size:n}=t;return c.jsx(Le,{$gap:"0.5",$direction:M.COLUMN,children:r.map((s,l)=>c.jsx(te,{rowData:s,col:n},l))})}),T=x(w)`
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
`,Te=x(w)`
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 40%;
  }
`;function Oe(e){const{move:t,rotate:r}=e;return c.jsxs(Te,{$gap:"1",$alignItems:O.CENTER,children:[c.jsx(T,{onClick:()=>t("left"),children:c.jsx($e,{})}),c.jsx(T,{onClick:()=>t("right"),children:c.jsx(Me,{})}),c.jsx(T,{onClick:()=>r(),children:c.jsx(de,{})})]})}const Fe=x(w)`
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`,Ue=x(w)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;var E=(e=>(e.START="start",e.PAUSE="pause",e.RELOAD="reload",e))(E||{});const re=new pe;function J(e){re.next(e),k.event("ELSFK-action",e)}const Ge=he(re);function He(){const{gameStatus:e}=F("gameStatus"),[t,r]=m.useState(!1),n=e===g.RUNNING;return c.jsxs(c.Fragment,{children:[c.jsx(Re,{buttons:[{text:n?"暂停":"开始",onClick(){J({id:`elsfk-${n?"pause":"start"}`,type:n?E.PAUSE:E.START})}},{text:"重置",onClick(){J({id:"elsfk-reload",type:E.RELOAD})}},{text:"游戏记录",onClick:()=>r(!0)}]}),c.jsx(ge,{open:t,storeKey:Z,onClose:()=>r(!1),children:s=>c.jsx(xe,{$direction:M.COLUMN,$gap:"0.5",children:c.jsxs(we,{$alignItems:O.CENTER,$justifyContent:$.BETWEEN,children:[c.jsxs("span",{children:["分数: ",s.score]}),c.jsx(Ce,{format:"yyyy-MM-DD hh:mm:ss",children:s.time})]})},s.gameId)})]})}function tt(){const{row:e,col:t,moveAddRow:r}=F(["row","col","moveAddRow"]),n=e+r,s=m.useRef(500),l=m.useRef(!1),o=m.useMemo(()=>ye(n,e),[n,e]),a=m.useRef(o(!1)),i=m.useRef(o(!0)),d=m.useRef({}),S=m.useRef({}),[U,ne]=m.useState(b(r,a.current,i.current)),[oe,G]=m.useState([]),y=m.useRef(0),H=m.useMemo(()=>(1<<t)-1,[t]),j=m.useCallback(()=>{ne(b(r,a.current,i.current))},[r]),D=m.useMemo(()=>je(t,n,r),[t,n,r]),A=m.useCallback(()=>{const u=S.current;let f=K(t);new Array(Math.floor(Math.random()*4)).forEach(()=>f=_(f));const p=z(t,u);S.current=f,d.current=u,i.current=o(!0),i.current.unshift(...p),i.current.splice(n)},[o,n,t]),N=u=>{const f={left:1,right:-1,bottom:0}[u]||0,p=i.current,h=D(u,a.current,i.current);p!==h&&(i.current=h,d.current.rightSpace+=f,j())},P=()=>{const u=d.current;d.current=_(d.current);const f=z(t,d.current),p=a.current;if(f.some((h,R)=>{const L=p[R-r];return L&&L&h})){d.current=u;return}i.current=[...f].concat(new Array(n-f.length).fill(0)),j()};Y("keydown",u=>{if(u.code==="ArrowLeft")N("left");else if(u.code==="ArrowRight")N("right");else if(u.code==="ArrowUp")P();else if(u.code==="ArrowDown"){if(l.current)return;l.current=!0,s.current/=4}}),Y("keyup",u=>{u.code==="ArrowDown"&&(l.current=!1,s.current*=4)});const W=m.useCallback(()=>{C().setGameStatus(g.OVER);const u={gameId:C().gameId,score:y.current};ie(Z,{...u,time:Date.now()}),ue(),k.event("game-elsfk-over",u),k.expose("game-elsfk-over"),Ee({id:"reload-history",type:Se.RELOAD_HISTORY}),le().showMessage({content:`游戏结束, 得分: ${y.current}`})},[]),v=m.useMemo(()=>me(()=>{C().gameStatus===g.RUNNING&&setTimeout(()=>{try{i.current=D("bottom",a.current,i.current),d.current.topPos+=1}catch(f){const p=f;if(!p.custom)return k.error("elsfk-next-tick",f);if(p.action!=="submit")return;const h=b(r,a.current,i.current);a.current=h;const R=ve(e,h,H);if(R.length){y.current+=R.length*t,G(R),setTimeout(()=>{R.forEach(L=>{h.splice(L,1),h.unshift(0)}),G([]),A(),v()},2e3);return}if(h[0])return W();A()}j(),v()},s.current)},10),[D,A,H,r,e,t,j,W]),I=m.useCallback((u=!1)=>{a.current=o(!1),i.current=o(!0),S.current=u?{}:K(t),s.current=500,l.current=!1,y.current=0},[o,t]),se=m.useCallback(()=>{C().gameStatus===g.OVER&&(C().setGameStatus(g.RUNNING),I(),A(),v())},[A,v,I]);return Ge(({type:u})=>{const{setGameStatus:f,gameStatus:p}=C();u===E.START?p===g.PAUSE?(f(g.RUNNING),v()):se():u===E.PAUSE?f(g.PAUSE):u===E.RELOAD&&(I(!0),f(g.OVER),j())}),c.jsx(fe,{onFirstAppear:()=>k.expose("game-elsfk"),children:c.jsxs(w,{$flex:"1",$alignItems:O.CENTER,$justifyContent:$.CENTER,$gap:"1",$direction:M.COLUMN,children:[c.jsxs(Ne,{children:["当前得分: ",y.current]}),c.jsxs(Ue,{$flex:"1",$gap:"1",$justifyContent:$.CENTER,style:{width:"100%"},children:[c.jsx(w,{$justifyContent:$.CENTER,children:c.jsx(ee,{$gap:"0.5",$direction:M.COLUMN,children:U.map((u,f)=>c.jsx(te,{rowData:u,$isClear:oe.includes(f)},f))})}),c.jsxs(Fe,{$direction:M.ROW,$justifyContent:$.BETWEEN,children:[c.jsx(Oe,{move:N,rotate:P}),c.jsx(be,{elementInfo:S.current})]})]})]})})}const rt={title:"俄罗斯方块",needBackIcon:!0,rightArea:c.jsx(He,{})};export{tt as Component,rt as handle};
