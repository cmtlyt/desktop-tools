import{r as U,x as u}from"./index-D9Ti2l9s.js";import{h as G,D as H,C as y,l as O,d as x,c as N,w as X,b as k,a as Q,F as T}from"./index-BuV4sdBQ.js";import{C as m,I as V}from"./icon-BgahmQHA.js";import{S as Z}from"./Subject-CbTjWRvp.js";import{B as q}from"./index-DEpECmp6.js";import"./iconBase-BT1Ex9Hv.js";import"./index-BCwKMmEt.js";import"./index-DZHc1nto.js";import"./asyncToGenerator-Di2GTAJM.js";const w={width:9,height:10,chessInfo:["0,0-black-che","0,1-black-ma","0,2-black-xiang","0,3-black-shi","0,4-black-jiang","0,5-black-shi","0,6-black-xiang","0,7-black-ma","0,8-black-che","2,1-black-pao","2,7-black-pao","3,0-black-bing","3,2-black-bing","3,4-black-bing","3,6-black-bing","3,8-black-bing","6,0-red-bing","6,2-red-bing","6,4-red-bing","6,6-red-bing","6,8-red-bing","7,1-red-pao","7,7-red-pao","9,0-red-che","9,1-red-ma","9,2-red-xiang","9,3-red-shi","9,4-red-jiang","9,5-red-shi","9,6-red-xiang","9,7-red-ma","9,8-red-che"]},{useStore:ye,useStoreSlice:M,getStore:R}=G((e,l,r)=>({checkerboard:ee(),currentChessMovePoints:void 0,currentChess:void 0,currentUser:"red",setCheckerboard(a){e({checkerboard:H(l().checkerboard,n=>a(n))})},setCurrentChessMovePoints(a){e({currentChessMovePoints:a})},setCurrentChess(a){e({currentChess:a})},changeUser(){e({currentUser:l().currentUser==="red"?"black":"red"})},restart(){J(),e(r.getInitialState())}}));let b=-1;const C=[];function J(){C.length=0,b=-1}function Y(e){C[++b]=e,C.length=b+1}function P(e){const{setCheckerboard:l}=R(),{from:r,to:a}=e;l(n=>{const{chess:t,pos:i}=a,{chess:d,pos:f}=r;n[i[0]][i[1]]=t,n[f[0]][f[1]]=d})}const _=y(function(){const l=C[++b];if(!l)return--b;const{to:r,from:a}=l;P({from:{...a,pos:r.pos},to:{chess:null,pos:a.pos}})},30),D=y(function(){const l=C[b--];if(!l)return++b;P(l)},30);var S=(e=>(e.GAME_OVER="game_over",e))(S||{});const W=new Z;function K(e){var l;W.next(e),(l=e.ext)!=null&&l.disableAutoLogger||O.event("zgxq-action",e)}function ee(){const{width:e,height:l,chessInfo:r}=w||{},a=Array.from({length:l},()=>Array.from({length:e},()=>null));return r.forEach(n=>{const[t,i,d]=n.split("-"),[f,c]=t.split(",").map(Number),o={type:d,color:i,isActive:!1};a[f][c]=o}),a}function le(e){if(!e){const{width:t,height:i}=w;return(d,f)=>d>=0&&f>=0&&d<i&&f<t}const[[l,r],[a,n]]=e.map(t=>t.split(",").map(Number));return(t,i)=>t>=l&&t<=a&&i>=r&&i<=n}function re(e,l){const r=[...e];return l.forEach(a=>{const[n,t]=a.split(",").map(Number);r[0]+=n,r[1]+=t}),r}function ae(e,l,r){const{pos:a,color:n}=l,[t,i]=a,{[n]:d,middleBreak:f=!1,moveNextsConfs:c=[],valider:o}=r,{limitArea:s,moveNextsConfs:v=c}=d||{},p=le(s);return(Array.isArray(v)?v:v({checkerboard:e,chess:l,moveInfo:r})).map(h=>{const z=h.split("|"),I=z.length;let $=t,A=i;return(o==null?void 0:o({checkerboard:e,chess:l,moveNexts:z,moveInfo:r,limitAreaCheck:p}))||z.every((B,E)=>{const[L,F]=B.split(",").map(Number);if($=$+L,A=A+F,!p($,A))return!1;const j=e[$][A];return j?I===E+1?j.color!==n:!f:!0})?re(a,z):null}).filter(h=>Array.isArray(h)).map(h=>h.join(","))}const te={[m.Bing]:{moveNextsConfs(e){const{chess:l}=e,{color:r,pos:a}=l,{height:n}=w,[t]=a,i=[];return r==="red"?(i.push("-1,0"),t<n/2&&i.push("0,1","0,-1")):(i.push("1,0"),t+1>n/2&&i.push("0,1","0,-1")),i}},[m.Pao]:{moveNextsConfs(e){const{chess:l,checkerboard:r}=e,{pos:a,color:n}=l,[t,i]=a,{width:d,height:f}=w,c=[];let o=[!0,!0],s=[!1,!1];for(let v=1;v<d;++v){const p=i-v,g=i+v;if(o[0]&&p>=0){const h=r[t][p];s[0]?h&&h.color!==n&&(c.push(`0,${-v}`),o[0]=!1):h?s[0]=!0:c.push(`0,${-v}`)}if(o[1]&&g<d){const h=r[t][g];s[1]?h&&h.color!==n&&(c.push(`0,${v}`),o[1]=!1):h?s[1]=!0:c.push(`0,${v}`)}}o=[!0,!0],s=[!1,!1];for(let v=1;v<f;++v){const p=t-v,g=t+v;if(o[0]&&p>=0){const h=r[p][i];s[0]?h&&h.color!==n&&(c.push(`${-v},0`),o[0]=!1):h?s[0]=!0:c.push(`${-v},0`)}if(o[1]&&g<f){const h=r[g][i];s[1]?h&&h.color!==n&&(c.push(`${v},0`),o[1]=!1):h?s[1]=!0:c.push(`${v},0`)}}return c}},[m.Che]:{moveNextsConfs(e){const{chess:l,checkerboard:r}=e,{pos:a,color:n}=l,[t,i]=a,{width:d,height:f}=w,c=[];let o=[!0,!0];for(let s=1;s<d;++s){const v=i-s,p=i+s;if(o[0]&&v>=0){const g=r[t][v];g?(g.color!==n&&c.push(`0,${-s}`),o[0]=!1):c.push(`0,${-s}`)}if(o[1]&&p<d){const g=r[t][p];g?(g.color!==n&&c.push(`0,${s}`),o[1]=!1):c.push(`0,${s}`)}}o=[!0,!0];for(let s=1;s<f;++s){const v=t-s,p=t+s;if(o[0]&&v>=0){const g=r[v][i];g?(g.color!==n&&c.push(`${-s},0`),o[0]=!1):c.push(`${-s},0`)}if(o[1]&&p<f){const g=r[p][i];g?(g.color!==n&&c.push(`${s},0`),o[1]=!1):c.push(`${s},0`)}}return c}},[m.Ma]:{moveNextsConfs:["1,0|1,-1","1,0|1,1","-1,0|-1,-1","-1,0|-1,1","0,1|-1,1","0,1|1,1","0,-1|-1,-1","0,-1|1,-1"],middleBreak:!0},[m.Xiang]:{moveNextsConfs:["1,1|1,1","1,-1|1,-1","-1,1|-1,1","-1,-1|-1,-1"],middleBreak:!0},[m.Shi]:{red:{limitArea:["7,3","9,5"]},black:{limitArea:["0,3","2,5"]},moveNextsConfs:["1,1","1,-1","-1,1","-1,-1"]},[m.Jiang]:{red:{limitArea:["7,3","9,5"]},black:{limitArea:["0,3","2,5"]},moveNextsConfs:["0,1","0,-1","1,0","-1,0"]}};function ne(e,l,r){const a=te[l];return a?ae(e,r,a):[]}function ie(e,l,r){const{pos:a,...n}=l,[t,i]=a,[d,f]=r;e[t][i]=null;const c=e[d][f],o=c?{...c}:null;e[d][f]=n,Y({from:{chess:l,pos:a},to:{pos:r,chess:o}}),(c==null?void 0:c.type)===m.Jiang&&K({id:"zgxq-game-over",type:S.GAME_OVER,ext:{user:l.color}})}const ce=x(k)`
  --cell-size: 7vmin;
  --base-line-width: 0.2rem;
  --line-width: var(--base-line-width);
  --line-gap: 0.5rem;
  --base-line-length: 1rem;
  --line-length: var(--base-line-length);

  position: relative;
  width: calc(${w.width-1} * var(--cell-size));
  height: calc(${w.height-1} * var(--cell-size));
`,se=x(k)`
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
`,oe=x.section`
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
`,ve=x(k)`
  position: relative;
  flex: 1;
  width: 100%;
`,he=x(k)`
  position: relative;
  flex: 1;
  box-sizing: border-box;
  padding: 0.5rem;
  width: 7vmin;
  height: 7vmin;
  font-size: 5vmin;

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
`,de=x(V)`
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
`,ge=U.memo(()=>{const{checkerboard:e}=M("checkerboard");return u.jsx(se,{$direction:N.COLUMN,children:e.map((l,r)=>u.jsx(fe,{rowInfo:l,row:r},r))})}),fe=e=>{const{rowInfo:l,row:r}=e,{currentChessMovePoints:a}=M("currentChessMovePoints");return u.jsx(ve,{children:l.map((n,t)=>u.jsx(me,{info:n,row:r,cel:t,activePoints:a},t))})};function pe(e,l){const{isActive:r,type:a}=e,n=R(),{currentUser:t}=n;if(t!==e.color)return;const{checkerboard:i,currentChess:d,setCheckerboard:f,setCurrentChessMovePoints:c,setCurrentChess:o}=n,[s,v]=l;f(g=>{if(d){const{pos:z}=d;g[z[0]][z[1]].isActive=!1}const h=g[s][v];h.isActive=!r});const p=r?void 0:ne(i,a,{...e,pos:l});c(p),o(r?void 0:{...e,pos:l})}function ue(e){const{currentChess:l,setCheckerboard:r,setCurrentChess:a,setCurrentChessMovePoints:n,changeUser:t}=R();r(i=>{ie(i,l,e)}),a(void 0),n(void 0),t()}function me(e){const{info:l,row:r,cel:a,activePoints:n}=e,t=n==null?void 0:n.includes(`${r},${a}`),{isActive:i,...d}=l||{};return u.jsx(he,{$actived:t,onClick:()=>t&&ue([r,a]),children:u.jsx(X,{if:l,fullback:u.jsx("section",{}),children:()=>u.jsx(de,{$actived:i,...d,onClick:()=>{t||pe(l,[r,a])}})})})}function ze(){return u.jsx(q,{buttons:[{text:"后退",noLog:!0,onClick:D},{text:"前进",noLog:!0,onClick:_},{text:"重开",noLog:!0,onClick:R().restart}]})}function Me(){return u.jsx(k,{$flex:"1",$direction:N.COLUMN,$alignItems:Q.CENTER,$justifyContent:T.CENTER,children:u.jsxs(ce,{$direction:N.COLUMN,children:[u.jsx(oe,{}),u.jsx(ge,{})]})})}const Pe={title:"中国象棋-单人推演模式",needBackIcon:!0,rightArea:u.jsx(ze,{})};export{Me as Component,Pe as handle};
