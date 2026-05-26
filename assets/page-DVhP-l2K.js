import{n as J,r as n,j as e,l as Q}from"./index-DJrG1xPe.js";import{u as X}from"./use-navigate-Tszv5y-d.js";import{u as ee}from"./use-key-guard-j8HtTEQG.js";import{S as j}from"./index-Baf81WNP.js";import{A as te}from"./index-D5WFTPvK.js";import{P as se}from"./constant-Dqe_e0L0.js";import{d as i,m as ae}from"./styled-components.browser.esm-DqKzGx4B.js";const ne={difficulty:2,duration:15,cumOption:.5},O={gameTime:0,speed:0,cumFactor:0,finishType:null},{useStoreSlice:y,getStore:v}=J(s=>({setup:{...ne},status:"setup",runtime:{...O},setSetup:r=>s(o=>({setup:{...o.setup,...r}})),setStatus:r=>s({status:r}),setRuntime:r=>s(o=>({runtime:{...o.runtime,...r}})),reset:()=>s({status:"setup",runtime:{...O}})})),z={first:[{text:"快速达到边缘吧！",duration:45,repeats:2}],go:[{text:"现在你可以打飞机了！",duration:30,repeats:2},{text:"现在用你最快的速度去撸！",duration:15,repeats:4},{text:"快速而努力地做到这一点！",duration:10,repeats:4},{text:"快速而努力地做着吧！",duration:8,repeats:6},{text:"继续！去感受边缘！",duration:6,repeats:6},{text:"继续保持下去！",duration:6,repeats:6},{text:"现在！更快地去得到它！",duration:5,repeats:8},{text:"千万别停下！",duration:4,repeats:8},{text:"想象着你认为最性感的事！",duration:5,repeats:8},{text:"快来了，继续！",duration:4,repeats:8},{text:"到了吗？还没到吗？快到了？",duration:4,repeats:10},{text:"不要想别的！继续！",duration:4,repeats:10},{text:"继续边缘！",duration:4,repeats:10},{text:"边缘！边缘！边缘！",duration:4,repeats:10},{text:"继续！就快到了！",duration:3,repeats:15},{text:"就是现在！",duration:3,repeats:15},{text:"就是现在！继续！",duration:3,repeats:15},{text:"想要射了吗？还不行哦！",duration:3,repeats:15},{text:"是不是很兴奋？",duration:3,repeats:15},{text:"想要更快吗？",duration:3,repeats:15}],stop:[{text:"停下！",duration:10,repeats:2},{text:"别动！",duration:8,repeats:4},{text:"站着别动！",duration:8,repeats:4},{text:"不准动！",duration:6,repeats:6},{text:"是不是很难？",duration:6,repeats:6},{text:"是不是忍受不了了？",duration:6,repeats:6},{text:"坚持住！",duration:4,repeats:8},{text:"忍住！",duration:4,repeats:8},{text:"难受的话就对了！",duration:4,repeats:8},{text:"再停一会就好！",duration:4,repeats:8},{text:"如果很兴奋就对了！",duration:4,repeats:8},{text:"现在想射了吗？",duration:4,repeats:10},{text:"停下来，感受一下！",duration:4,repeats:10},{text:"想想别的事！",duration:4,repeats:10},{text:"离边缘远一点！",duration:4,repeats:10}],end:[{text:"时间到了！不能射精！",duration:0,repeats:0,cumFactor:0},{text:"时间到了！但你不能射精！",duration:0,repeats:0,cumFactor:0},{text:"结束了，但是你不能射！",duration:0,repeats:0,cumFactor:0},{text:"结束了！不许射精！",duration:0,repeats:0,cumFactor:0},{text:"今天到此为止，不能射精！",duration:0,repeats:0,cumFactor:0},{text:"结束了，不幸的是你不能射精！",duration:0,repeats:0,cumFactor:0},{text:"时间到！今天不能射！",duration:0,repeats:0,cumFactor:0},{text:"结束了！你被禁止射精！",duration:0,repeats:0,cumFactor:0},{text:"结束了！现在把手拿开！",duration:0,repeats:0,cumFactor:0},{text:"结束了！不要射精！",duration:0,repeats:0,cumFactor:0},{text:"射精吧！",duration:0,repeats:0,cumFactor:.1},{text:"射吧！",duration:0,repeats:0,cumFactor:.1},{text:"想射就射吧！",duration:0,repeats:0,cumFactor:.1},{text:"已经到了射的时候了！射吧！",duration:0,repeats:0,cumFactor:.1},{text:"你可以射了！",duration:0,repeats:0,cumFactor:.15},{text:"想射的话就射吧！",duration:0,repeats:0,cumFactor:.15},{text:"准备好了吗？要射了！",duration:0,repeats:0,cumFactor:.15},{text:"不准停，继续！",duration:0,repeats:0,cumFactor:0},{text:"不要停下，继续！",duration:0,repeats:0,cumFactor:0},{text:"继续到射为止！",duration:0,repeats:0,cumFactor:0}]};function B(s){return s[Math.floor(Math.random()*s.length)]}let N=0;function P(s){return s==="go"||s==="first"}function re(){y("setup"),y("status");const{setStatus:s}=v(),r=n.useRef({}),o=n.useRef(null),a=n.useRef(null),l=n.useRef(0),c=n.useRef(0),[F,m]=n.useState(""),[b,g]=n.useState(!1),[T,C]=n.useState(!1),[D,k]=n.useState(!1),[L,w]=n.useState(0),[_,S]=n.useState(0),[q,h]=n.useState(""),[U,M]=n.useState(""),[K,$]=n.useState(null),p=n.useCallback(()=>{o.current!==null&&(clearInterval(o.current),o.current=null),a.current!==null&&(clearTimeout(a.current),a.current=null),l.current=++N},[]);n.useEffect(()=>p,[p]);const I=n.useCallback(t=>B(z[t]),[]),R=n.useCallback(()=>{const t=r.current;t.finished=!0;const u=B(z.end),f=v().setup.cumOption+(u.cumFactor??0),d=Math.random()<f;t.cumAllowed=d,t.cumFactor=f,t.message=u.text,m(u.text),C(!0),k(!0),$(d?"cum":"edge"),h(d?"射精！":"不能射！"),S(100)},[]),A=n.useCallback(()=>{const t=r.current;if(t.finished)return;t.phase=t.phase==="first"||t.phase==="stop"?"go":"stop";const u=I(t.phase);t.message=u.text,t.msgDurationMs=u.duration*1e3,t.msgTimer=u.duration*u.repeats*1e3,c.current=0,m(u.text)},[I]),W=n.useCallback(()=>{const t=r.current;if(t.finished)return;t.elapsed+=100,t.msgTimer-=100;const u=t.msgTimer,x=t.msgDurationMs*Math.max(1,Math.ceil(u/t.msgDurationMs));t.msgDurationMs>0&&(c.current=Math.min(1-u/x,1)),P(t.phase)?(w(c.current*100),h(`边缘 ${Math.round(c.current*100)}%`)):(w((1-c.current)*100),h(`边缘 ${Math.round((1-c.current)*100)}%`)),P(t.phase)&&g(Math.floor(t.elapsed/500)%2===0);const f=t.elapsed/t.playTimeMs;let d=0;if(f>=.05&&(d=1),f>=.15&&(d=2),f>=.3&&(d=3),d!==t.speed&&(t.speed=d,M(["","· 越来越快","· 更快了","· 最快的！"][d]||"")),t.elapsed>=t.playTimeMs){R();return}t.msgTimer<=0&&A()},[R,A]),Y=n.useCallback(()=>{p();const t=v().setup,u=++N;l.current=u;const x=z.first[0];r.current={elapsed:0,speed:0,phase:"first",msgTimer:x.duration*x.repeats*1e3,msgDurationMs:x.duration*1e3,message:x.text,finished:!1,cumAllowed:!1,cumFactor:0,playTimeMs:t.duration*60*1e3},c.current=0,m(x.text),g(!1),C(!1),k(!1),w(0),S(0),h("边缘 0%"),M(""),$(null),s("playing"),a.current=setTimeout(()=>{l.current===u&&(o.current=window.setInterval(W,100))},500)},[p,W,s]),H=n.useCallback(()=>{r.current.cumAllowed&&(r.current.cumAllowed=!1,m("💦 射了！"),h("已射"),S(100),p())},[p]),V=n.useCallback(()=>{p(),s("setup"),m(""),g(!1),C(!1),k(!1),w(0),S(0),h(""),M(""),$(null)},[p,s]);return{message:F,flashOn:b,showFlash:T,showCumZone:D,edgeWidth:L,cumWidth:_,barText:q,speedText:U,finishType:K,startGame:Y,doCum:H,resetGame:V}}const oe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding: 24px;
  background: #000;
  color: #fff;
  font-family: -apple-system, 'Segoe UI', system-ui, sans-serif;
  font-size: 18px;
`,ie=i.div`
  width: 100%;
  max-width: 600px;
  margin-top: 8vh;
`,ue=i.h1`
  font-family: Georgia, 'Noto Serif SC', serif;
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 6px;
  color: #fff;
`,le=i.p`
  color: #aaa;
  font-size: 16px;
  margin-bottom: 28px;
`,ce=i.ul`
  background: #111;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 28px;
  font-size: 15px;
  line-height: 1.8;
  color: #ccc;
  list-style: disc inside;

  li {
    margin-bottom: 8px;
  }
  li::marker {
    color: #666;
  }
`,de=i.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 14px;

  span {
    width: 130px;
    flex-shrink: 0;
    font-size: 15px;
    color: #aaa;
  }
`,pe=i.select`
  flex: 1;
  padding: 10px 12px;
  background: #111;
  color: #fff;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #0f0;
  }
`,G=i.button`
  width: 100%;
  margin-top: 10px;
  padding: 14px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`,xe=i.div`
  width: 100%;
  max-width: 700px;
  margin-top: 6vh;
  text-align: center;
`,me=i.div`
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 44px;
  line-height: 1.4;
  min-height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin-top: 5%;
`,he=ae`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
`,fe=i.div`
  display: ${s=>s.$visible?"flex":"none"};
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #0f0;
  margin: 20px auto;
  font-size: 28px;
  font-weight: 700;
  color: #0f0;
  background: rgba(0, 255, 0, 0.1);
  animation: ${s=>s.$on?he:"none"} 1s infinite;
`,ge=i.div`
  margin: 50px auto 0;
  width: 80%;
  max-width: 500px;
  height: 32px;
  background: #1a1a1a;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #333;
`,be=i.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`,we=i.div`
  height: 100%;
  width: ${s=>s.$width}%;
  background: linear-gradient(90deg, #006600, #00cc00);
  transition: width 0.1s linear;
`,Se=i.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 25%;
  display: ${s=>s.$show?"block":"none"};
  z-index: 1;
  background: #002200;
`,ve=i.div`
  height: 100%;
  width: ${s=>s.$width}%;
  background: linear-gradient(90deg, #cc0000, #ff0000);
  transition: width 0.1s linear;
`,je=i.div`
  position: absolute;
  top: 0;
  left: 75%;
  bottom: 0;
  width: 6px;
  z-index: 10;
  background: #ff0000;
  box-shadow: 0 0 8px #ff0000, 0 0 16px rgba(255, 0, 0, 0.6);
`,Z=i.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #888;
  ${s=>s.$side==="edge"?"left: 8px;":"right: 8px;"}
`,ye=i.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
`,Fe=i.div`
  margin-top: 20px;
  font-size: 18px;
  color: #ffaa00;
  font-weight: 600;
`,E=n.memo(function({label:r,options:o,...a}){return e.jsxs(de,{children:[e.jsx("span",{children:r}),e.jsx(pe,{...a,children:o.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))})]})});function Te({onStart:s}){const{setup:r}=y("setup"),o=a=>l=>{const c=Number(l.target.value);v().setSetup({[a]:c})};return e.jsxs(ie,{children:[e.jsx(ue,{children:"EdgeMePlease"}),e.jsx(le,{children:"控射 / 边缘控制 · 中文复刻版"}),e.jsxs(ce,{children:[e.jsx("li",{children:"Go 阶段打飞机，Stop 阶段停下。交替进行，直到时间结束。"}),e.jsx("li",{children:"速度会随着时间推移越来越快，做好心理准备。"}),e.jsx("li",{children:"最后能否射精由运气和你自己的选择决定。"}),e.jsx("li",{children:"如果屏幕亮红色，今天你不太走运，不能射。"}),e.jsx("li",{children:"祝你好运！"})]}),e.jsx(E,{label:"持续时间",value:String(r.duration),onChange:o("duration"),options:[{value:"2",label:"快枪手 (2分)"},{value:"7",label:"短 (7分)"},{value:"15",label:"普通 (15分)"},{value:"30",label:"长 (30分)"},{value:"60",label:"非常长 (60分)"}]}),e.jsx(E,{label:"选择难度",value:String(r.difficulty),onChange:o("difficulty"),options:[{value:"0",label:"无聊的"},{value:"1",label:"简单"},{value:"2",label:"普通"},{value:"3",label:"困难"},{value:"4",label:"不可能的"}]}),e.jsx(E,{label:"想射吗？",value:String(r.cumOption),onChange:o("cumOption"),options:[{value:"0",label:"不了，我待会再射"},{value:"0.2",label:"不太想射"},{value:"0.5",label:"听你的吧"},{value:"0.7",label:"想，让我射吧"},{value:"0.9",label:"求你了！让我射吧！"}]}),e.jsx(G,{type:"button",onClick:s,children:"开始"})]})}function Ce({message:s,flashOn:r,showFlash:o,showCumZone:a,edgeWidth:l,cumWidth:c,barText:F,speedText:m,finishType:b,onCum:g,onReset:T}){return e.jsxs(xe,{children:[e.jsx(me,{children:s}),e.jsx(fe,{$on:r,$visible:o,children:e.jsx("span",{children:"冲"})}),e.jsxs(ge,{children:[e.jsx(be,{children:e.jsx(we,{$width:l})}),e.jsx(Se,{$show:a,children:e.jsx(ve,{$width:c})}),e.jsx(je,{}),e.jsx(Z,{$side:"edge",children:"边缘区"}),e.jsx(Z,{$side:"cum",children:"射精区"}),e.jsx(ye,{children:F})]}),e.jsx(Fe,{children:m}),e.jsx(j,{when:b==="cum",children:()=>e.jsx(G,{type:"button",onClick:g,style:{marginTop:30,maxWidth:300},children:"💦 射！"})}),e.jsx(j,{when:b!==null,children:()=>e.jsx(G,{type:"button",onClick:T,style:{marginTop:12,maxWidth:300,background:"#555"},children:"重新开始"})})]})}function ke(){const s=X(),r=ee(se,()=>{s(-1)}),{status:o}=y("status"),a=re();return r?e.jsx(te,{onFirstAppear:()=>Q.appear("tool-edgemeplease"),children:e.jsxs(oe,{children:[e.jsx(j,{when:o==="setup",children:()=>e.jsx(Te,{onStart:a.startGame})}),e.jsx(j,{when:o==="playing"||o==="finished",children:()=>e.jsx(Ce,{message:a.message,flashOn:a.flashOn,showFlash:a.showFlash,showCumZone:a.showCumZone,edgeWidth:a.edgeWidth,cumWidth:a.cumWidth,barText:a.barText,speedText:a.speedText,finishType:a.finishType,onCum:a.doCum,onReset:a.resetGame})})]})}):null}function We(){return e.jsx(ke,{})}const Oe={title:"边缘控制",needBackIcon:!0};export{We as Component,Oe as handle};
