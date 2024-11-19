import{r as H,x as u}from"./index-CHoudlAF.js";import{h as X,D as J,C as P,g as S,l as Q,d as C,c as N,w as V,b as $,a as Z,F as T}from"./index-KNKRzeP1.js";import{C as z,I as _}from"./icon-ByFMBRSF.js";import{S as q,c as Y}from"./Subject-DV7yB97b.js";import{i as D}from"./is-phone-BPh1lWQO.js";import{B as W}from"./index-sYXgAuYL.js";import"./iconBase-d73V5-N0.js";import"./index-BOsBzvxJ.js";import"./index-DvQpSxGL.js";import"./asyncToGenerator-Bnzkvon6.js";const b={width:9,height:10,chessInfo:["0,0-black-che","0,1-black-ma","0,2-black-xiang","0,3-black-shi","0,4-black-jiang","0,5-black-shi","0,6-black-xiang","0,7-black-ma","0,8-black-che","2,1-black-pao","2,7-black-pao","3,0-black-bing","3,2-black-bing","3,4-black-bing","3,6-black-bing","3,8-black-bing","6,0-red-bing","6,2-red-bing","6,4-red-bing","6,6-red-bing","6,8-red-bing","7,1-red-pao","7,7-red-pao","9,0-red-che","9,1-red-ma","9,2-red-xiang","9,3-red-shi","9,4-red-jiang","9,5-red-shi","9,6-red-xiang","9,7-red-ma","9,8-red-che"]},{useStore:Fe,useStoreSlice:I,getStore:x}=X((e,r,l)=>({checkerboard:ie(),currentChessMovePoints:void 0,currentChess:void 0,currentUser:"red",changeCheckerboard(a){e({checkerboard:J(r().checkerboard,n=>a(n))})},setCheckerboard(a){e({checkerboard:a})},setCurrentChessMovePoints(a){e({currentChessMovePoints:a})},setCurrentChess(a){e({currentChess:a})},changeUser(){e({currentUser:r().currentUser==="red"?"black":"red"})},restart(){K(),e(l.getInitialState())}}));let m=-1,R=null;const k=[];function K(){k.length=0,m=-1,R=null}function ee(e){k[++m]=e,k.length=m+1}function E(e){const{changeCheckerboard:r}=x(),{from:l,to:a}=e;r(n=>{const{chess:t,pos:c}=a,{chess:g,pos:f}=l;n[c[0]][c[1]]=t,n[f[0]][f[1]]=g})}const re=P(function(){const r=k[++m];if(!r)return--m;const{to:l,from:a}=r;E({from:{...a,pos:l.pos},to:{chess:null,pos:a.pos}})},30),le=P(function(){const r=k[m--];if(!r)return++m;E(r)},30);function ae(){const{checkerboard:e}=x(),{showMessage:r}=S();R={currIdx:m,situation:JSON.stringify(e)},r({content:"已保存当前局势",type:"success"})}function te(){const{showMessage:e}=S();if(!R)return e({content:"没有已保存的局势",type:"warning"});const{setCheckerboard:r}=x(),{currIdx:l,situation:a}=R;m=l,r(JSON.parse(a)),e({content:"已恢复保存的局势",type:"success"})}var j=(e=>(e.GAME_OVER="game_over",e))(j||{});const L=new q;function ne(e){var r;L.next(e),(r=e.ext)!=null&&r.disableAutoLogger||Q.event("zgxq-action",e)}const ce=Y(L);function ie(){const{width:e,height:r,chessInfo:l}=b||{},a=Array.from({length:r},()=>Array.from({length:e},()=>null));return l.forEach(n=>{const[t,c,g]=n.split("-"),[f,i]=t.split(",").map(Number),o={type:g,color:c,isActive:!1};a[f][i]=o}),a}function se(e){if(!e){const{width:t,height:c}=b;return(g,f)=>g>=0&&f>=0&&g<c&&f<t}const[[r,l],[a,n]]=e.map(t=>t.split(",").map(Number));return(t,c)=>t>=r&&t<=a&&c>=l&&c<=n}function oe(e,r){const l=[...e];return r.forEach(a=>{const[n,t]=a.split(",").map(Number);l[0]+=n,l[1]+=t}),l}function ve(e,r,l){const{pos:a,color:n}=r,[t,c]=a,{[n]:g,middleBreak:f=!1,moveNextsConfs:i=[],valider:o}=l,{limitArea:s,moveNextsConfs:v=i}=g||{},p=se(s);return(Array.isArray(v)?v:v({checkerboard:e,chess:r,moveInfo:l})).map(h=>{const w=h.split("|"),B=w.length;let A=t,y=c;return(o==null?void 0:o({checkerboard:e,chess:r,moveNexts:w,moveInfo:l,limitAreaCheck:p}))||w.every((F,U)=>{const[G,O]=F.split(",").map(Number);if(A=A+G,y=y+O,!p(A,y))return!1;const M=e[A][y];return M?B===U+1?M.color!==n:!f:!0})?oe(a,w):null}).filter(h=>Array.isArray(h)).map(h=>h.join(","))}const he={[z.Bing]:{moveNextsConfs(e){const{chess:r}=e,{color:l,pos:a}=r,{height:n}=b,[t]=a,c=[];return l==="red"?(c.push("-1,0"),t<n/2&&c.push("0,1","0,-1")):(c.push("1,0"),t+1>n/2&&c.push("0,1","0,-1")),c}},[z.Pao]:{moveNextsConfs(e){const{chess:r,checkerboard:l}=e,{pos:a,color:n}=r,[t,c]=a,{width:g,height:f}=b,i=[];let o=[!0,!0],s=[!1,!1];for(let v=1;v<g;++v){const p=c-v,d=c+v;if(o[0]&&p>=0){const h=l[t][p];s[0]?h&&h.color!==n&&(i.push(`0,${-v}`),o[0]=!1):h?s[0]=!0:i.push(`0,${-v}`)}if(o[1]&&d<g){const h=l[t][d];s[1]?h&&h.color!==n&&(i.push(`0,${v}`),o[1]=!1):h?s[1]=!0:i.push(`0,${v}`)}}o=[!0,!0],s=[!1,!1];for(let v=1;v<f;++v){const p=t-v,d=t+v;if(o[0]&&p>=0){const h=l[p][c];s[0]?h&&h.color!==n&&(i.push(`${-v},0`),o[0]=!1):h?s[0]=!0:i.push(`${-v},0`)}if(o[1]&&d<f){const h=l[d][c];s[1]?h&&h.color!==n&&(i.push(`${v},0`),o[1]=!1):h?s[1]=!0:i.push(`${v},0`)}}return i}},[z.Che]:{moveNextsConfs(e){const{chess:r,checkerboard:l}=e,{pos:a,color:n}=r,[t,c]=a,{width:g,height:f}=b,i=[];let o=[!0,!0];for(let s=1;s<g;++s){const v=c-s,p=c+s;if(o[0]&&v>=0){const d=l[t][v];d?(d.color!==n&&i.push(`0,${-s}`),o[0]=!1):i.push(`0,${-s}`)}if(o[1]&&p<g){const d=l[t][p];d?(d.color!==n&&i.push(`0,${s}`),o[1]=!1):i.push(`0,${s}`)}}o=[!0,!0];for(let s=1;s<f;++s){const v=t-s,p=t+s;if(o[0]&&v>=0){const d=l[v][c];d?(d.color!==n&&i.push(`${-s},0`),o[0]=!1):i.push(`${-s},0`)}if(o[1]&&p<f){const d=l[p][c];d?(d.color!==n&&i.push(`${s},0`),o[1]=!1):i.push(`${s},0`)}}return i}},[z.Ma]:{moveNextsConfs:["1,0|1,-1","1,0|1,1","-1,0|-1,-1","-1,0|-1,1","0,1|-1,1","0,1|1,1","0,-1|-1,-1","0,-1|1,-1"],middleBreak:!0},[z.Xiang]:{moveNextsConfs:["1,1|1,1","1,-1|1,-1","-1,1|-1,1","-1,-1|-1,-1"],middleBreak:!0},[z.Shi]:{red:{limitArea:["7,3","9,5"]},black:{limitArea:["0,3","2,5"]},moveNextsConfs:["1,1","1,-1","-1,1","-1,-1"]},[z.Jiang]:{red:{limitArea:["7,3","9,5"]},black:{limitArea:["0,3","2,5"]},moveNextsConfs:["0,1","0,-1","1,0","-1,0"]}};function ge(e,r,l){const a=he[r];return a?ve(e,l,a):[]}function de(e,r,l){const{pos:a,...n}=r,[t,c]=a,[g,f]=l;e[t][c]=null;const i=e[g][f],o=i?{...i}:null;e[g][f]=n,ee({from:{chess:r,pos:a},to:{pos:l,chess:o}}),(i==null?void 0:i.type)===z.Jiang&&ne({id:"zgxq-game-over",type:j.GAME_OVER,ext:{winColor:r.color}})}const fe=C($)`
  --cell-size: ${D()?"9vmin":"7vmin"};
  --base-line-width: 0.1rem;
  --line-width: var(--base-line-width);
  --line-gap: 0.5rem;
  --base-line-length: 1rem;
  --line-length: var(--base-line-length);

  position: relative;
  width: calc(${b.width-1} * var(--cell-size));
  height: calc(${b.height-1} * var(--cell-size));
`,pe=C($)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  height: max-content;

  &::before {
    content: '楚河';
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translateY(-50%) rotate(90deg);
    font-size: calc(var(--cell-size) / 2);
    writing-mode: vertical-lr;
    letter-spacing: 0.5em;
  }
  &::after {
    content: '汉界';
    position: absolute;
    top: 50%;
    right: 25%;
    transform: translateY(-50%) rotate(-90deg);
    font-size: calc(var(--cell-size) / 2);
    writing-mode: vertical-lr;
    letter-spacing: 0.5em;
  }
`,ue=C.section`
  position: absolute;
  inset: 0;
  background-image: 
    // 中间白块
    linear-gradient(#fff, #fff),
    // 网格
    repeating-linear-gradient(
        #000,
        #000 var(--line-width),
        transparent var(--line-width),
        transparent var(--cell-size)
      ),
    repeating-linear-gradient(
      90deg,
      #000,
      #000 var(--line-width),
      transparent var(--line-width),
      transparent var(--cell-size)
    ),
    // 棋盘上方的虚线1
    repeating-linear-gradient(transparent 0, transparent 0.5rem, #fff 0.5rem, #fff 1rem),
    linear-gradient(
      45deg,
      transparent,
      transparent calc(50% - var(--line-width) / 2),
      #000 calc(50% - var(--line-width) / 2),
      #000 calc(50% + var(--line-width) / 2),
      transparent calc(50% + var(--line-width) / 2),
      transparent 0
    ),
    // 棋盘上方的虚线2
    linear-gradient(
        -45deg,
        transparent,
        transparent calc(50% - var(--line-width) / 2),
        #000 calc(50% - var(--line-width) / 2),
        #000 calc(50% + var(--line-width) / 2),
        transparent calc(50% + var(--line-width) / 2),
        transparent 0
      ),
    // 棋盘下方的虚线1
    repeating-linear-gradient(transparent 0, transparent 0.5rem, #fff 0.5rem, #fff 1rem),
    linear-gradient(
      45deg,
      transparent,
      transparent calc(50% - var(--line-width) / 2),
      #000 calc(50% - var(--line-width) / 2),
      #000 calc(50% + var(--line-width) / 2),
      transparent calc(50% + var(--line-width) / 2),
      transparent 0
    ),
    // 棋盘下方的虚线2
    linear-gradient(
        -45deg,
        transparent,
        transparent calc(50% - var(--line-width) / 2),
        #000 calc(50% - var(--line-width) / 2),
        #000 calc(50% + var(--line-width) / 2),
        transparent calc(50% + var(--line-width) / 2),
        transparent 0
      );
  background-position:
    var(--line-width) calc(50% + var(--line-width)),
    0 0,
    0 0,
    50% 0,
    50% 0,
    calc(50% + var(--line-width)) 0,
    calc(50% + var(--line-width)) calc(100% + var(--line-width)),
    calc(50% + var(--line-width)) calc(100% + var(--line-width)),
    calc(50% + var(--line-width)) calc(100% + var(--line-width));
  background-size:
    calc(100% - var(--line-width) * 2) calc(var(--cell-size) - var(--line-width)),
    100% 100%,
    100% 100%,
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2);
  background-repeat: no-repeat;

  border: var(--line-width) solid #000;
  border-top-width: 0;
  border-left-width: 0;

  outline: var(--line-width) solid #000;
  outline-offset: 5px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: calc(var(--cell-size) * 2 - var(--line-gap));
    left: calc(var(--cell-size) + var(--line-gap) * 1.25);
    width: var(--line-length);
    height: var(--line-width);
    background: #000;
    box-shadow:
      0 calc(var(--line-gap) * 2),
      calc(var(--line-length) * -1 - var(--line-gap) * 2) 0,
      calc(var(--line-length) * -1 - var(--line-gap) * 2) calc(var(--line-gap) * 2),
      calc(var(--cell-size) * 6) 0,
      calc(var(--cell-size) * 6) calc(var(--line-gap) * 2),
      calc(var(--cell-size) * 6 - var(--line-length) - var(--line-gap) * 2) 0,
      calc(var(--cell-size) * 6 - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2),
      calc(var(--cell-size) * -1) var(--cell-size),
      calc(var(--cell-size) * -1) calc(var(--line-gap) * 2 + var(--cell-size)),
      var(--cell-size) var(--cell-size),
      var(--cell-size) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 3) var(--cell-size),
      calc(var(--cell-size) * 3) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 3 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 3 - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 5) var(--cell-size),
      calc(var(--cell-size) * 5) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 5 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 5 - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 7 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 7 - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--cell-size));
    -webkit-box-reflect: below calc(var(--cell-size) * 5 + 0.75rem);
    box-reflect: below calc(var(--cell-size) * 5 + 0.75rem);
  }

  &::after {
    --line-width: var(--base-line-length);
    --line-length: var(--base-line-width);
    top: calc(var(--cell-size) * 2 - var(--line-gap) - var(--line-width));
    transform: translateY(calc(var(--line-length) / 2));
    box-shadow:
      0 calc(var(--line-gap) * 2 + var(--line-width)),
      calc(var(--line-length) * -1 - var(--line-gap) * 2) 0,
      calc(var(--line-length) * -1 - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--line-width)),
      calc(var(--cell-size) * 6) 0,
      calc(var(--cell-size) * 6) calc(var(--line-gap) * 2 + var(--line-width)),
      calc(var(--cell-size) * 6 - var(--line-length) - var(--line-gap) * 2) 0,
      calc(var(--cell-size) * 6 - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--line-width)),
      calc(var(--cell-size) * -1) var(--cell-size),
      calc(var(--cell-size) * -1) calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      var(--cell-size) var(--cell-size),
      var(--cell-size) calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 3) var(--cell-size),
      calc(var(--cell-size) * 3) calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 3 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 3 - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 5) var(--cell-size),
      calc(var(--cell-size) * 5) calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 5 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 5 - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 7 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 7 - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width));
    -webkit-box-reflect: below calc(var(--cell-size) * 5 + 0.95rem);
    box-reflect: below calc(var(--cell-size) * 5 + 0.95rem);
  }
`,me=C($)`
  position: relative;
  flex: 1;
  width: 100%;
`,ze=C($)`
  position: relative;
  flex: 1;
  box-sizing: border-box;
  padding: 0.5rem;
  width: var(--cell-size);
  height: var(--cell-size);
  font-size: calc(var(--cell-size) - 3vmin);

  ${({$actived:e})=>e?`
      &::before{
        content:'';
        position:absolute;
        inset: 40%;
        z-index: 1;
        border-radius:50%;
        background: yellowgreen;
      }
    `:""}
`,we=C(_)`
  background-color: #fff;

  @keyframes twinkle {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  ${({$actived:e})=>e?`
      animation: twinkle 500ms infinite alternate;
    `:""}
`,be=H.memo(()=>{const{checkerboard:e}=I("checkerboard");return u.jsx(pe,{$direction:N.COLUMN,children:e.map((r,l)=>u.jsx(Ce,{rowInfo:r,row:l},l))})}),Ce=e=>{const{rowInfo:r,row:l}=e,{currentChessMovePoints:a}=I("currentChessMovePoints");return u.jsx(me,{children:r.map((n,t)=>u.jsx($e,{info:n,row:l,cel:t,activePoints:a},t))})};function xe(e,r){const{isActive:l,type:a}=e,n=x(),{currentUser:t}=n;if(t!==e.color)return;const{checkerboard:c,currentChess:g,changeCheckerboard:f,setCurrentChessMovePoints:i,setCurrentChess:o}=n,[s,v]=r;f(d=>{if(g){const{pos:w}=g;d[w[0]][w[1]].isActive=!1}const h=d[s][v];h.isActive=!l});const p=l?void 0:ge(c,a,{...e,pos:r});i(p),o(l?void 0:{...e,pos:r})}function ke(e){const{currentChess:r,changeCheckerboard:l,setCurrentChess:a,setCurrentChessMovePoints:n,changeUser:t}=x();l(c=>{de(c,r,e)}),a(void 0),n(void 0),t()}function $e(e){const{info:r,row:l,cel:a,activePoints:n}=e,t=n==null?void 0:n.includes(`${l},${a}`),{isActive:c,...g}=r||{};return u.jsx(ze,{$actived:t,onClick:()=>t&&ke([l,a]),children:u.jsx(V,{if:r,fullback:u.jsx("section",{}),children:()=>u.jsx(we,{$actived:c,...g,onClick:()=>{t||xe(r,[l,a])}})})})}function Ae(){return u.jsx(W,{buttons:[{text:"后退",noLog:!0,onClick:le},{text:"前进",noLog:!0,onClick:re},{text:"保存局势",noLog:!0,onClick:ae},{text:"恢复局势",noLog:!0,onClick:te},{text:"重开",noLog:!0,onClick:x().restart}]})}function Ue(){return ce(e=>{const{ext:r}=e,l=r==null?void 0:r.winColor;if(!l)return;const{showMessage:a}=S();a({content:`${l==="red"?"红":"黑"}方胜利`,type:"success"})},j.GAME_OVER),u.jsx($,{$flex:"1",$direction:N.COLUMN,$alignItems:Z.CENTER,$justifyContent:T.CENTER,children:u.jsxs(fe,{$direction:N.COLUMN,children:[u.jsx(ue,{}),u.jsx(be,{})]})})}const Ge={title:"中国象棋-单人推演模式",needBackIcon:!0,rightArea:u.jsx(Ae,{})};export{Ue as Component,Ge as handle};
