import{r as m,x as u}from"./index-BWFAPQ-v.js";import{i as se,C as W,j as ce,l as y,d as h,c as L,b as x,a as Y,D as ae,E as ie,g as ue,H as le,A as me,F as $}from"./index-Cf_foYDs.js";import{B as fe}from"./index-C-pW0C9g.js";import{S as de,c as ge}from"./create-action-subscribe-hook-iJICDf3r.js";import{G as J,M as he}from"./index-gIhoy8k6.js";import{E as pe}from"./constant-DnvxCFPa.js";import"./index-DBx4hCvh.js";const _=["0/15/0/0","2/2/3","3/3","3/6/0","6/3/0","0/7/2","2/2/6"];function xe(e,t){return n=>new Array(n?e:t).fill(0)}function I(e,t,n){return t.map((o,c)=>o|n[c+e])}function V(e){const t=Math.floor(Math.random()*_.length),n=_[t].split("/"),o=n.length,c=Math.floor((e-o)/2),l=n.map(r=>parseInt(r,10));return{size:o,elementData:l,rightSpace:c,topPos:0,width:X(l)}}function we(e,t,n){return(o,c,l)=>{const r=[...l];switch(o){case"left":{if(r.some((a,i)=>{const d=c[i-n];return d&&d&a<<1?!0:a&1<<e-1}))break;return r.map(a=>a<<1)}case"right":{if(r.some((a,i)=>{const d=c[i-n];return d&&d&a>>1?!0:a&1}))break;return r.map(a=>a>>1)}case"bottom":{const a=r.slice(2).some((d,w)=>c[w+1]&d),i=r[t-1];if(a||i)throw{custom:!0,action:"submit"};r.unshift(0),r.pop();break}default:return r}return r}}function Re(e,t){return t.map(n=>n.toString(2).padStart(e,"0").split(""))}function X(e){return Math.max(...e.map(t=>t.toString(2).replace(/(^0+)|(0+$)/g,"").length))}function H(e,t){const{elementData:n,rightSpace:o,topPos:c,width:l}=t;let r=o;return r-l/2<0?r=0:r+l>e&&(r=e-l),t.rightSpace=r,new Array(c).fill(0).concat(n.map(a=>a<<r))}function K(e){const{size:t,elementData:n}=e,o=Re(t,n),c=Array.from({length:o.length},()=>new Array(o.length));for(let r=0;r<o.length;++r){const a=o[r];for(let i=0;i<a.length;++i)c[t-1-i][r]=o[r][i]}const l=c.map(r=>parseInt(r.join(""),2));return{...e,elementData:l,width:X(l)}}function Se(e,t,n){const o=[];for(let c=0;c<e;++c)t[c]===n&&o.push(c);return o}function Ee(e,t){return e.toString(2).padStart(t).split("")}function z(e,t){m.useEffect(()=>(window.addEventListener(e,t),()=>window.removeEventListener(e,t)),[e,t])}var g=(e=>(e.RUNNING="running",e.PAUSE="pause",e.OVER="over",e))(g||{});const Z=se(e=>({gameId:W(),row:20,col:10,moveAddRow:2,gameStatus:"over",setRow:t=>e({row:t}),setCol:t=>e({col:t}),setMoveAddRow:t=>e({moveAddRow:t}),updateGameId:()=>e({gameId:W(),gameStatus:"over"}),setGameStatus:t=>e({gameStatus:t})})),T=e=>Z(ce(e)),S=()=>Z.getState();var p=(e=>(e.RELOAD_HISTORY="reload_history",e.START="start",e.PAUSE="pause",e.RELOAD="reload",e))(p||{});const q=new de;function O(e){q.next(e),y.event("ELSFK-action",e)}const Ce=ge(q);function ve(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 8 8 12 12 16"},child:[]},{tag:"line",attr:{x1:"16",y1:"12",x2:"8",y2:"12"},child:[]}]})(e)}function Ae(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 16 16 12 12 8"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const Q=h(x)`
  width: 100%;
  height: 100%;
  max-width: 35vh;
  max-height: 70vh;
  aspect-ratio: 1/2;
  color: var(--color-primary);
`,je=h(Q)`
  width: 15vmin;
  height: 15vmin;
`,ke=h.div`
  flex: 1;
  color: ${e=>e.$active?"inherit":"#0002"};
  box-shadow:
    inset 0 0 0 0.2rem currentColor,
    inset 0 0 0 0.8rem #fff ${e=>e.$active?", inset 0 0 0 10rem currentColor":""};
`,$e=h.span`
  font-size: 2rem;
`,ye=h(x)`
  ${({$isClear:e})=>e?"animation: clear-row 500ms ease-in-out infinite alternate;":""}

  @keyframes clear-row {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;function ee(e){const{rowData:t,$isClear:n,col:o}=e,{col:c}=T("col");return u.jsx(ye,{$flex:"1",$gap:"0.5",$isClear:n,children:Ee(t,o||c).map((l,r)=>u.jsx(ke,{$active:String(l)==="1"},r))})}const Le=m.memo(function(e){const{elementInfo:t}=e,{elementData:n=[],size:o}=t;return u.jsx(je,{$gap:"0.5",$direction:L.COLUMN,children:n.map((c,l)=>u.jsx(ee,{rowData:c,col:o},l))})});function Me(){const{gameStatus:e}=T("gameStatus"),t=e===g.RUNNING;return u.jsx(fe,{buttons:[{text:t?"暂停":"开始",onClick(){O({id:`elsfk-${t?"pause":"start"}`,type:t?p.PAUSE:p.START})}},{text:"重置",onClick(){O({id:"elsfk-reload",type:p.RELOAD})}}]})}const b=h(x)`
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
`,Ne=h(x)`
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 40%;
  }
`;function De(e){const{move:t,rotate:n}=e;return u.jsxs(Ne,{$gap:"1",$alignItems:Y.CENTER,children:[u.jsx(b,{onClick:()=>t("left"),children:u.jsx(ve,{})}),u.jsx(b,{onClick:()=>t("right"),children:u.jsx(Ae,{})}),u.jsx(b,{onClick:()=>n(),children:u.jsx(he,{})})]})}const Ie=h(x)`
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`,be=h(x)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;function We(){const{row:e,col:t,moveAddRow:n}=T(["row","col","moveAddRow"]),o=e+n,c=m.useRef(500),l=m.useRef(!1),r=m.useMemo(()=>xe(o,e),[o,e]),a=m.useRef(r(!1)),i=m.useRef(r(!0)),d=m.useRef({}),w=m.useRef({}),[U,te]=m.useState(I(n,a.current,i.current)),[re,F]=m.useState([]),j=m.useRef(0),G=m.useMemo(()=>(1<<t)-1,[t]),E=m.useCallback(()=>{te(I(n,a.current,i.current))},[n]),M=m.useMemo(()=>we(t,o,n),[t,o,n]),C=m.useCallback(()=>{const s=w.current;let f=V(t);new Array(Math.floor(Math.random()*4)).forEach(()=>f=K(f));const R=H(t,s);w.current=f,d.current=s,i.current=r(!0),i.current.unshift(...R),i.current.splice(o)},[r,o,t]),N=s=>{const f={left:1,right:-1,bottom:0}[s]||0;i.current=M(s,a.current,i.current),d.current.rightSpace+=f,E()},P=()=>{d.current=K(d.current);const s=H(t,d.current);i.current=[...s].concat(new Array(o-s.length).fill(0)),E()};z("keydown",s=>{if(s.code==="ArrowLeft")N("left");else if(s.code==="ArrowRight")N("right");else if(s.code==="ArrowUp")P();else if(s.code==="ArrowDown"){if(l.current)return;l.current=!0,c.current/=4}}),z("keyup",s=>{s.code==="ArrowDown"&&(l.current=!1,c.current*=4)});const B=m.useCallback(()=>{S().setGameStatus(g.OVER);const s={gameId:S().gameId,score:j.current};ae(pe,{...s,time:Date.now()}),ie(),y.event("game-elsfk-over",s),y.expose("game-elsfk-over"),O({id:"reload-history",type:p.RELOAD_HISTORY}),ue().showMessage({content:`游戏结束, 得分: ${j.current}`})},[]),v=m.useMemo(()=>le(()=>{S().gameStatus===g.RUNNING&&setTimeout(()=>{try{i.current=M("bottom",a.current,i.current),d.current.topPos+=1}catch(f){const R=f;if(!R.custom)return y.error("elsfk-next-tick",f);if(R.action!=="submit")return;const A=I(n,a.current,i.current);a.current=A;const k=Se(e,A,G);if(k.length){j.current+=k.length*t,F(k),setTimeout(()=>{k.forEach(oe=>{A.splice(oe,1),A.unshift(0)}),F([]),C(),v()},2e3);return}if(A[0])return B();C()}E(),v()},c.current)},10),[M,C,G,n,e,t,E,B]),D=m.useCallback((s=!1)=>{a.current=r(!1),i.current=r(!0),w.current=s?{}:V(t),c.current=500,l.current=!1},[r,t]),ne=m.useCallback(()=>{S().gameStatus===g.OVER&&(S().setGameStatus(g.RUNNING),D(),C(),v())},[C,v,D]);return Ce(({type:s})=>{const{setGameStatus:f,gameStatus:R}=S();s===p.START?R===g.PAUSE?(f(g.RUNNING),v()):ne():s===p.PAUSE?f(g.PAUSE):s===p.RELOAD&&(D(!0),f(g.OVER),E())}),u.jsx(me,{children:u.jsxs(x,{$flex:"1",$alignItems:Y.CENTER,$justifyContent:$.CENTER,$gap:"1",$direction:L.COLUMN,children:[u.jsxs($e,{children:["当前得分: ",j.current]}),u.jsxs(be,{$flex:"1",$gap:"1",$justifyContent:$.CENTER,style:{width:"100%"},children:[u.jsx(x,{$justifyContent:$.CENTER,children:u.jsx(Q,{$gap:"0.5",$direction:L.COLUMN,children:U.map((s,f)=>u.jsx(ee,{rowData:s,$isClear:re.includes(f)},f))})}),u.jsxs(Ie,{$direction:L.ROW,$justifyContent:$.BETWEEN,children:[u.jsx(De,{move:N,rotate:P}),u.jsx(Le,{elementInfo:w.current})]})]})]})})}const _e={title:"俄罗斯方块",needBackIcon:!0,rightArea:u.jsx(Me,{})};export{We as Component,_e as handle};
