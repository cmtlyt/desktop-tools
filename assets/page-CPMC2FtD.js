import{r as $,x as u}from"./index-BGAh7qpc.js";import{h as Q,D as V,C as B,g as E,l as Z,d as x,c as M,w as _,b as k,a as L,F as U}from"./index-CXd2CK8p.js";import{C as w,I as q}from"./icon-TgvLXCut.js";import{S as Y,c as D}from"./Subject-DgdmjSy7.js";import{i as S}from"./is-phone-Dqj9etkY.js";import{B as W}from"./index-DXc5HYWZ.js";import"./iconBase-CHnLXWzx.js";import"./index-DRbkL0gd.js";import"./index-DncGXj_P.js";import"./asyncToGenerator-FELUvHS0.js";const b={width:9,height:10,chessInfo:["0,0-black-che","0,1-black-ma","0,2-black-xiang","0,3-black-shi","0,4-black-jiang","0,5-black-shi","0,6-black-xiang","0,7-black-ma","0,8-black-che","2,1-black-pao","2,7-black-pao","3,0-black-bing","3,2-black-bing","3,4-black-bing","3,6-black-bing","3,8-black-bing","6,0-red-bing","6,2-red-bing","6,4-red-bing","6,6-red-bing","6,8-red-bing","7,1-red-pao","7,7-red-pao","9,0-red-che","9,1-red-ma","9,2-red-xiang","9,3-red-shi","9,4-red-jiang","9,5-red-shi","9,6-red-xiang","9,7-red-ma","9,8-red-che"]},{useStore:Fe,useStoreSlice:j,getStore:C}=Q((e,r,t)=>({checkerboard:ie(),currentChessMovePoints:void 0,currentChess:void 0,currentUser:"red",lockRotate:!1,changeCheckerboard(l){e({checkerboard:V(r().checkerboard,a=>l(a))})},setCheckerboard(l){e({checkerboard:l})},setCurrentChessMovePoints(l){e({currentChessMovePoints:l})},setCurrentChess(l){e({currentChess:l})},changeUser(){e({currentUser:r().currentUser==="red"?"black":"red"})},restart(){K(),e(t.getInitialState())},setLockRotate(l){e({lockRotate:l})}}));let m=-1,N=null;const R=[];function K(){R.length=0,m=-1,N=null}function ee(e){R[++m]=e,R.length=m+1}function F(e){const{currentChess:r,changeCheckerboard:t,changeUser:l,setCurrentChessMovePoints:a,setCurrentChess:n}=C(),{from:c,to:g}=e;t(d=>{const{chess:i,pos:o}=g,{chess:s,pos:v}=c;if(d[o[0]][o[1]]=i,d[v[0]][v[1]]=s,r){const{pos:p}=r;d[p[0]][p[1]].isActive=!1}}),l(),a(void 0),n(void 0)}const re=B(function(){const r=R[++m];if(!r)return--m;const{to:t,from:l}=r;F({from:{...l,pos:t.pos},to:{chess:null,pos:l.pos}})},30),te=B(function(){const r=R[m--];if(!r)return++m;F(r)},30);function le(){const{checkerboard:e}=C(),{showMessage:r}=E();N={currIdx:m,situation:JSON.stringify(e)},r({content:"已保存当前局势",type:"success"})}function ae(){const{showMessage:e}=E();if(!N)return e({content:"没有已保存的局势",type:"warning"});const{setCheckerboard:r}=C(),{currIdx:t,situation:l}=N;m=t,r(JSON.parse(l)),e({content:"已恢复保存的局势",type:"success"})}var P=(e=>(e.GAME_OVER="game_over",e))(P||{});const G=new Y;function ne(e){var r;G.next(e),(r=e.ext)!=null&&r.disableAutoLogger||Z.event("zgxq-action",e)}const ce=D(G);function ie(){const{width:e,height:r,chessInfo:t}=b||{},l=Array.from({length:r},()=>Array.from({length:e},()=>null));return t.forEach(a=>{const[n,c,g]=a.split("-"),[d,i]=n.split(",").map(Number),o={type:g,color:c,isActive:!1};l[d][i]=o}),l}function se(e){if(!e){const{width:n,height:c}=b;return(g,d)=>g>=0&&d>=0&&g<c&&d<n}const[[r,t],[l,a]]=e.map(n=>n.split(",").map(Number));return(n,c)=>n>=r&&n<=l&&c>=t&&c<=a}function oe(e,r){const t=[...e];return r.forEach(l=>{const[a,n]=l.split(",").map(Number);t[0]+=a,t[1]+=n}),t}function ve(e,r,t){const{pos:l,color:a}=r,[n,c]=l,{[a]:g,middleBreak:d=!1,moveNextsConfs:i=[],valider:o}=t,{limitArea:s,moveNextsConfs:v=i}=g||{},p=se(s);return(Array.isArray(v)?v:v({checkerboard:e,chess:r,moveInfo:t})).map(h=>{const z=h.split("|"),O=z.length;let y=n,A=c;return(o==null?void 0:o({checkerboard:e,chess:r,moveNexts:z,moveInfo:t,limitAreaCheck:p}))||z.every((H,T)=>{const[X,J]=H.split(",").map(Number);if(y=y+X,A=A+J,!p(y,A))return!1;const I=e[y][A];return I?O===T+1?I.color!==a:!d:!0})?oe(l,z):null}).filter(h=>Array.isArray(h)).map(h=>h.join(","))}const he={[w.Bing]:{moveNextsConfs(e){const{chess:r}=e,{color:t,pos:l}=r,{height:a}=b,[n]=l,c=[];return t==="red"?(c.push("-1,0"),n<a/2&&c.push("0,1","0,-1")):(c.push("1,0"),n+1>a/2&&c.push("0,1","0,-1")),c}},[w.Pao]:{moveNextsConfs(e){const{chess:r,checkerboard:t}=e,{pos:l,color:a}=r,[n,c]=l,{width:g,height:d}=b,i=[];let o=[!0,!0],s=[!1,!1];for(let v=1;v<g;++v){const p=c-v,f=c+v;if(o[0]&&p>=0){const h=t[n][p];s[0]?h&&h.color!==a&&(i.push(`0,${-v}`),o[0]=!1):h?s[0]=!0:i.push(`0,${-v}`)}if(o[1]&&f<g){const h=t[n][f];s[1]?h&&h.color!==a&&(i.push(`0,${v}`),o[1]=!1):h?s[1]=!0:i.push(`0,${v}`)}}o=[!0,!0],s=[!1,!1];for(let v=1;v<d;++v){const p=n-v,f=n+v;if(o[0]&&p>=0){const h=t[p][c];s[0]?h&&h.color!==a&&(i.push(`${-v},0`),o[0]=!1):h?s[0]=!0:i.push(`${-v},0`)}if(o[1]&&f<d){const h=t[f][c];s[1]?h&&h.color!==a&&(i.push(`${v},0`),o[1]=!1):h?s[1]=!0:i.push(`${v},0`)}}return i}},[w.Che]:{moveNextsConfs(e){const{chess:r,checkerboard:t}=e,{pos:l,color:a}=r,[n,c]=l,{width:g,height:d}=b,i=[];let o=[!0,!0];for(let s=1;s<g;++s){const v=c-s,p=c+s;if(o[0]&&v>=0){const f=t[n][v];f?(f.color!==a&&i.push(`0,${-s}`),o[0]=!1):i.push(`0,${-s}`)}if(o[1]&&p<g){const f=t[n][p];f?(f.color!==a&&i.push(`0,${s}`),o[1]=!1):i.push(`0,${s}`)}}o=[!0,!0];for(let s=1;s<d;++s){const v=n-s,p=n+s;if(o[0]&&v>=0){const f=t[v][c];f?(f.color!==a&&i.push(`${-s},0`),o[0]=!1):i.push(`${-s},0`)}if(o[1]&&p<d){const f=t[p][c];f?(f.color!==a&&i.push(`${s},0`),o[1]=!1):i.push(`${s},0`)}}return i}},[w.Ma]:{moveNextsConfs:["1,0|1,-1","1,0|1,1","-1,0|-1,-1","-1,0|-1,1","0,1|-1,1","0,1|1,1","0,-1|-1,-1","0,-1|1,-1"],middleBreak:!0},[w.Xiang]:{moveNextsConfs:["1,1|1,1","1,-1|1,-1","-1,1|-1,1","-1,-1|-1,-1"],middleBreak:!0},[w.Shi]:{red:{limitArea:["7,3","9,5"]},black:{limitArea:["0,3","2,5"]},moveNextsConfs:["1,1","1,-1","-1,1","-1,-1"]},[w.Jiang]:{red:{limitArea:["7,3","9,5"]},black:{limitArea:["0,3","2,5"]},moveNextsConfs:["0,1","0,-1","1,0","-1,0"]}};function ge(e,r,t){const l=he[r];return l?ve(e,t,l):[]}function de(e,r,t){const{pos:l,...a}=r,[n,c]=l,[g,d]=t;e[n][c]=null;const i=e[g][d],o=i?{...i}:null;e[g][d]=a,ee({from:{chess:r,pos:l},to:{pos:t,chess:o}}),(i==null?void 0:i.type)===w.Jiang&&ne({id:"zgxq-game-over",type:P.GAME_OVER,ext:{winColor:r.color}})}const fe=$.memo(x(function(r){const{currentUser:t,lockRotate:l}=j(["currentUser","lockRotate"]),a=$.useRef(0);return l||(a.current=t==="red"?0:180),u.jsx(k,{$flex:"1",$alignItems:L.CENTER,$justifyContent:U.CENTER,...r,style:{transform:`rotate(${a.current}deg)`}})})`
  padding: 4rem 0;
  width: 100%;
  transition: transform 0.3s 0.5s;
  overflow-x: hidden;
`),pe=$.memo(x(k)`
  --cell-size: ${S()?"9vmin":"7vmin"};
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
    --spacing: ${S()?"2.44em":"1.76em"};
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
    --spacing: ${S()?"2em":"1.35em"};
    content: '一二三四五六七八九';
    top: unset;
    bottom: 0;
    transform: translate(-50%, 170%);
  }
`),ue=x(k)`
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
`,me=$.memo(x.section`
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
`),we=x(k)`
  position: relative;
  flex: 1;
  width: 100%;
`,ze=x(k)`
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
`,be=x(q)`
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
`,Ce=$.memo(()=>{const{checkerboard:e}=j("checkerboard");return u.jsx(ue,{$direction:M.COLUMN,children:e.map((r,t)=>u.jsx(xe,{rowInfo:r,row:t},t))})}),xe=e=>{const{rowInfo:r,row:t}=e,{currentChessMovePoints:l}=j("currentChessMovePoints");return u.jsx(we,{children:r.map((a,n)=>u.jsx(Re,{info:a,row:t,cel:n,activePoints:l},n))})};function ke(e,r){const{isActive:t,type:l}=e,a=C(),{currentUser:n}=a;if(n!==e.color)return;const{checkerboard:c,currentChess:g,changeCheckerboard:d,setCurrentChessMovePoints:i,setCurrentChess:o}=a,[s,v]=r;d(f=>{if(g){const{pos:z}=g;f[z[0]][z[1]].isActive=!1}const h=f[s][v];h.isActive=!t});const p=t?void 0:ge(c,l,{...e,pos:r});i(p),o(t?void 0:{...e,pos:r})}function $e(e){const{currentChess:r,changeCheckerboard:t,setCurrentChess:l,setCurrentChessMovePoints:a,changeUser:n}=C();t(c=>{de(c,r,e)}),l(void 0),a(void 0),n()}function Re(e){const{info:r,row:t,cel:l,activePoints:a}=e,n=a==null?void 0:a.includes(`${t},${l}`),{isActive:c,...g}=r||{};return u.jsx(ze,{$actived:n,onClick:()=>n&&$e([t,l]),children:u.jsx(_,{if:r,fullback:u.jsx("section",{}),children:()=>u.jsx(be,{$actived:c,...g,onClick:()=>{n||ke(r,[t,l])}})})})}function ye(){const{lockRotate:e}=j("lockRotate");return u.jsx(W,{buttons:[{text:"锁定旋转",checkBtn:{value:e,onChange:r=>{console.debug(r),C().setLockRotate(r)}}},{text:"后退",noLog:!0,onClick:te},{text:"前进",noLog:!0,onClick:re},{text:"保存局势",noLog:!0,onClick:le},{text:"恢复局势",noLog:!0,onClick:ae},{text:"重开",noLog:!0,onClick:C().restart}]})}function Ge(){return ce(e=>{const{ext:r}=e,t=r==null?void 0:r.winColor;if(!t)return;const{showMessage:l}=E();l({content:`${t==="red"?"红":"黑"}方胜利`,type:"success"})},P.GAME_OVER),u.jsx(k,{$flex:"1",$direction:M.COLUMN,$alignItems:L.CENTER,$justifyContent:U.CENTER,children:u.jsx(fe,{children:u.jsxs(pe,{$direction:M.COLUMN,children:[u.jsx(me,{}),u.jsx(Ce,{})]})})})}const Oe={title:"中国象棋-单人推演模式",needBackIcon:!0,rightArea:u.jsx(ye,{})};export{Ge as Component,Oe as handle};