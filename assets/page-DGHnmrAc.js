import{r as S,x as u}from"./index-B5RjiNqJ.js";import{h as J,D as Q,C as L,g as j,l as V,d as C,c as N,w as Z,b as x,a as P,F as B}from"./index-DoCnFQRe.js";import{C as w,I as _}from"./icon-gVt2vWDT.js";import{S as q,c as Y}from"./Subject-C94a1-Sf.js";import{i as D}from"./is-phone-CHBbk88e.js";import{B as W}from"./index-CrNmdQio.js";import"./iconBase-TDYtjeoV.js";import"./index-QYGYit47.js";import"./index-Fi7SR150.js";import"./asyncToGenerator-Bi7AMGDP.js";const b={width:9,height:10,chessInfo:["0,0-black-che","0,1-black-ma","0,2-black-xiang","0,3-black-shi","0,4-black-jiang","0,5-black-shi","0,6-black-xiang","0,7-black-ma","0,8-black-che","2,1-black-pao","2,7-black-pao","3,0-black-bing","3,2-black-bing","3,4-black-bing","3,6-black-bing","3,8-black-bing","6,0-red-bing","6,2-red-bing","6,4-red-bing","6,6-red-bing","6,8-red-bing","7,1-red-pao","7,7-red-pao","9,0-red-che","9,1-red-ma","9,2-red-xiang","9,3-red-shi","9,4-red-jiang","9,5-red-shi","9,6-red-xiang","9,7-red-ma","9,8-red-che"]},{useStore:Fe,useStoreSlice:M,getStore:k}=J((e,r,l)=>({checkerboard:ce(),currentChessMovePoints:void 0,currentChess:void 0,currentUser:"red",changeCheckerboard(t){e({checkerboard:Q(r().checkerboard,a=>t(a))})},setCheckerboard(t){e({checkerboard:t})},setCurrentChessMovePoints(t){e({currentChessMovePoints:t})},setCurrentChess(t){e({currentChess:t})},changeUser(){e({currentUser:r().currentUser==="red"?"black":"red"})},restart(){K(),e(l.getInitialState())}}));let m=-1,R=null;const $=[];function K(){$.length=0,m=-1,R=null}function ee(e){$[++m]=e,$.length=m+1}function U(e){const{changeCheckerboard:r}=k(),{from:l,to:t}=e;r(a=>{const{chess:n,pos:i}=t,{chess:g,pos:f}=l;a[i[0]][i[1]]=n,a[f[0]][f[1]]=g})}const re=L(function(){const r=$[++m];if(!r)return--m;const{to:l,from:t}=r;U({from:{...t,pos:l.pos},to:{chess:null,pos:t.pos}})},30),le=L(function(){const r=$[m--];if(!r)return++m;U(r)},30);function te(){const{checkerboard:e}=k(),{showMessage:r}=j();R={currIdx:m,situation:JSON.stringify(e)},r({content:"已保存当前局势",type:"success"})}function ae(){const{showMessage:e}=j();if(!R)return e({content:"没有已保存的局势",type:"warning"});const{setCheckerboard:r}=k(),{currIdx:l,situation:t}=R;m=l,r(JSON.parse(t)),e({content:"已恢复保存的局势",type:"success"})}var E=(e=>(e.GAME_OVER="game_over",e))(E||{});const F=new q;function ne(e){var r;F.next(e),(r=e.ext)!=null&&r.disableAutoLogger||V.event("zgxq-action",e)}const ie=Y(F);function ce(){const{width:e,height:r,chessInfo:l}=b||{},t=Array.from({length:r},()=>Array.from({length:e},()=>null));return l.forEach(a=>{const[n,i,g]=a.split("-"),[f,c]=n.split(",").map(Number),o={type:g,color:i,isActive:!1};t[f][c]=o}),t}function se(e){if(!e){const{width:n,height:i}=b;return(g,f)=>g>=0&&f>=0&&g<i&&f<n}const[[r,l],[t,a]]=e.map(n=>n.split(",").map(Number));return(n,i)=>n>=r&&n<=t&&i>=l&&i<=a}function oe(e,r){const l=[...e];return r.forEach(t=>{const[a,n]=t.split(",").map(Number);l[0]+=a,l[1]+=n}),l}function ve(e,r,l){const{pos:t,color:a}=r,[n,i]=t,{[a]:g,middleBreak:f=!1,moveNextsConfs:c=[],valider:o}=l,{limitArea:s,moveNextsConfs:v=c}=g||{},p=se(s);return(Array.isArray(v)?v:v({checkerboard:e,chess:r,moveInfo:l})).map(h=>{const z=h.split("|"),G=z.length;let y=n,A=i;return(o==null?void 0:o({checkerboard:e,chess:r,moveNexts:z,moveInfo:l,limitAreaCheck:p}))||z.every((O,H)=>{const[T,X]=O.split(",").map(Number);if(y=y+T,A=A+X,!p(y,A))return!1;const I=e[y][A];return I?G===H+1?I.color!==a:!f:!0})?oe(t,z):null}).filter(h=>Array.isArray(h)).map(h=>h.join(","))}const he={[w.Bing]:{moveNextsConfs(e){const{chess:r}=e,{color:l,pos:t}=r,{height:a}=b,[n]=t,i=[];return l==="red"?(i.push("-1,0"),n<a/2&&i.push("0,1","0,-1")):(i.push("1,0"),n+1>a/2&&i.push("0,1","0,-1")),i}},[w.Pao]:{moveNextsConfs(e){const{chess:r,checkerboard:l}=e,{pos:t,color:a}=r,[n,i]=t,{width:g,height:f}=b,c=[];let o=[!0,!0],s=[!1,!1];for(let v=1;v<g;++v){const p=i-v,d=i+v;if(o[0]&&p>=0){const h=l[n][p];s[0]?h&&h.color!==a&&(c.push(`0,${-v}`),o[0]=!1):h?s[0]=!0:c.push(`0,${-v}`)}if(o[1]&&d<g){const h=l[n][d];s[1]?h&&h.color!==a&&(c.push(`0,${v}`),o[1]=!1):h?s[1]=!0:c.push(`0,${v}`)}}o=[!0,!0],s=[!1,!1];for(let v=1;v<f;++v){const p=n-v,d=n+v;if(o[0]&&p>=0){const h=l[p][i];s[0]?h&&h.color!==a&&(c.push(`${-v},0`),o[0]=!1):h?s[0]=!0:c.push(`${-v},0`)}if(o[1]&&d<f){const h=l[d][i];s[1]?h&&h.color!==a&&(c.push(`${v},0`),o[1]=!1):h?s[1]=!0:c.push(`${v},0`)}}return c}},[w.Che]:{moveNextsConfs(e){const{chess:r,checkerboard:l}=e,{pos:t,color:a}=r,[n,i]=t,{width:g,height:f}=b,c=[];let o=[!0,!0];for(let s=1;s<g;++s){const v=i-s,p=i+s;if(o[0]&&v>=0){const d=l[n][v];d?(d.color!==a&&c.push(`0,${-s}`),o[0]=!1):c.push(`0,${-s}`)}if(o[1]&&p<g){const d=l[n][p];d?(d.color!==a&&c.push(`0,${s}`),o[1]=!1):c.push(`0,${s}`)}}o=[!0,!0];for(let s=1;s<f;++s){const v=n-s,p=n+s;if(o[0]&&v>=0){const d=l[v][i];d?(d.color!==a&&c.push(`${-s},0`),o[0]=!1):c.push(`${-s},0`)}if(o[1]&&p<f){const d=l[p][i];d?(d.color!==a&&c.push(`${s},0`),o[1]=!1):c.push(`${s},0`)}}return c}},[w.Ma]:{moveNextsConfs:["1,0|1,-1","1,0|1,1","-1,0|-1,-1","-1,0|-1,1","0,1|-1,1","0,1|1,1","0,-1|-1,-1","0,-1|1,-1"],middleBreak:!0},[w.Xiang]:{moveNextsConfs:["1,1|1,1","1,-1|1,-1","-1,1|-1,1","-1,-1|-1,-1"],middleBreak:!0},[w.Shi]:{red:{limitArea:["7,3","9,5"]},black:{limitArea:["0,3","2,5"]},moveNextsConfs:["1,1","1,-1","-1,1","-1,-1"]},[w.Jiang]:{red:{limitArea:["7,3","9,5"]},black:{limitArea:["0,3","2,5"]},moveNextsConfs:["0,1","0,-1","1,0","-1,0"]}};function ge(e,r,l){const t=he[r];return t?ve(e,l,t):[]}function de(e,r,l){const{pos:t,...a}=r,[n,i]=t,[g,f]=l;e[n][i]=null;const c=e[g][f],o=c?{...c}:null;e[g][f]=a,ee({from:{chess:r,pos:t},to:{pos:l,chess:o}}),(c==null?void 0:c.type)===w.Jiang&&ne({id:"zgxq-game-over",type:E.GAME_OVER,ext:{winColor:r.color}})}const fe=C(x)`
  width: 100%;
  transition: transform 0.3s 0.5s;
`,pe=S.memo(C(x)`
  --cell-size: ${D()?"9vmin":"7vmin"};
  --base-line-width: 0.1rem;
  --line-width: var(--base-line-width);
  --line-gap: 0.5rem;
  --base-line-length: 1rem;
  --line-length: var(--base-line-length);

  position: relative;
  width: calc(${b.width-1} * var(--cell-size));
  height: calc(${b.height-1} * var(--cell-size));

  &::before,
  &::after {
    --spacing: 1.76em;
    padding-left: var(--spacing);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -170%) rotate(180deg);
    content: '123456789';
    letter-spacing: var(--spacing);
    font-size: 3vmin;
    white-space: nowrap;
  }

  &::after {
    --spacing: 1.35em;
    content: '一二三四五六七八九';
    top: unset;
    bottom: 0;
    transform: translate(-50%, 170%);
  }
`),ue=C(x)`
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
`,me=S.memo(C.section`
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
`),we=C(x)`
  position: relative;
  flex: 1;
  width: 100%;
`,ze=C(x)`
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
`,be=C(_)`
  background-color: #fff;

  @keyframes twinkle {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  ${({color:e})=>`transform: rotate(${e==="black"?"180":"0"}deg);`}

  ${({$actived:e})=>e?`
      animation: twinkle 500ms infinite alternate;
    `:""}
`,Ce=S.memo(()=>{const{checkerboard:e}=M("checkerboard");return u.jsx(ue,{$direction:N.COLUMN,children:e.map((r,l)=>u.jsx(xe,{rowInfo:r,row:l},l))})}),xe=e=>{const{rowInfo:r,row:l}=e,{currentChessMovePoints:t}=M("currentChessMovePoints");return u.jsx(we,{children:r.map((a,n)=>u.jsx(ye,{info:a,row:l,cel:n,activePoints:t},n))})};function ke(e,r){const{isActive:l,type:t}=e,a=k(),{currentUser:n}=a;if(n!==e.color)return;const{checkerboard:i,currentChess:g,changeCheckerboard:f,setCurrentChessMovePoints:c,setCurrentChess:o}=a,[s,v]=r;f(d=>{if(g){const{pos:z}=g;d[z[0]][z[1]].isActive=!1}const h=d[s][v];h.isActive=!l});const p=l?void 0:ge(i,t,{...e,pos:r});c(p),o(l?void 0:{...e,pos:r})}function $e(e){const{currentChess:r,changeCheckerboard:l,setCurrentChess:t,setCurrentChessMovePoints:a,changeUser:n}=k();l(i=>{de(i,r,e)}),t(void 0),a(void 0),n()}function ye(e){const{info:r,row:l,cel:t,activePoints:a}=e,n=a==null?void 0:a.includes(`${l},${t}`),{isActive:i,...g}=r||{};return u.jsx(ze,{$actived:n,onClick:()=>n&&$e([l,t]),children:u.jsx(Z,{if:r,fullback:u.jsx("section",{}),children:()=>u.jsx(be,{$actived:i,...g,onClick:()=>{n||ke(r,[l,t])}})})})}function Ae(){return u.jsx(W,{buttons:[{text:"后退",noLog:!0,onClick:le},{text:"前进",noLog:!0,onClick:re},{text:"保存局势",noLog:!0,onClick:te},{text:"恢复局势",noLog:!0,onClick:ae},{text:"重开",noLog:!0,onClick:k().restart}]})}function Ge(){const{currentUser:e}=M("currentUser");return ie(r=>{const{ext:l}=r,t=l==null?void 0:l.winColor;if(!t)return;const{showMessage:a}=j();a({content:`${t==="red"?"红":"黑"}方胜利`,type:"success"})},E.GAME_OVER),u.jsx(x,{$flex:"1",$direction:N.COLUMN,$alignItems:P.CENTER,$justifyContent:B.CENTER,children:u.jsx(fe,{style:{transform:`rotate(${e==="red"?0:180}deg)`},$flex:"1",$alignItems:P.CENTER,$justifyContent:B.CENTER,children:u.jsxs(pe,{$direction:N.COLUMN,children:[u.jsx(me,{}),u.jsx(Ce,{})]})})})}const Oe={title:"中国象棋-单人推演模式",needBackIcon:!0,rightArea:u.jsx(Ae,{})};export{Ge as Component,Oe as handle};
