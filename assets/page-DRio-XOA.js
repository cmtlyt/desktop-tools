import{x as a,r as l}from"./index-CIO1EJr6.js";import{h as S,l as g,R as b,g as m,U as v,V as w,d as f,B as p,b as x,w as E,C as T,P as y}from"./index-CZQCmRb_.js";import{B as A}from"./index-Bly0Eql_.js";import{S as C,c as D}from"./Subject-CmatmSiu.js";import"./iconBase-DCQR57Nx.js";import"./index-C8luulw1.js";import"./index-Dh1aMqhL.js";import"./asyncToGenerator-B4yDn-rU.js";const{useStore:ee,useStoreSlice:d,getStore:i}=S(e=>({name:null,stream:null,recorder:null,result:null,setName:t=>e({name:t}),setStream:t=>e({stream:t}),setRecorder:t=>e({recorder:t}),setResult:t=>e({result:t}),clear:()=>e({name:null,stream:null,recorder:null,result:null})}));var u=(e=>(e.RECORD_END="RECORD_END",e))(u||{});const R=new C;function j(e){R.next(e),g.event("recording-action",e)}const k=D(R);function M(e){const t=new AudioContext,o=t.createMediaStreamDestination();return e.forEach(n=>{t.createMediaStreamSource(n).connect(o)}),o.stream}async function N(){try{const e=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:{channelCount:2}}),t=await navigator.mediaDevices.getUserMedia({audio:{channelCount:2}}),o=M([e,t]),n=new MediaStream;return e.getVideoTracks().forEach(r=>n.addTrack(r)),o.getTracks().forEach(r=>n.addTrack(r)),{stream:n,stopTraces(){e.getTracks().forEach(r=>r.stop()),t.getTracks().forEach(r=>r.stop())}}}catch(e){return g.error("get-screen-and-audio-stream",e.message),{}}}const h=w(()=>["video/webm;codecs=daala,opus","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm;codecs=h264","video/webm","video/mp4","video/mpeg"].find(e=>MediaRecorder.isTypeSupported(e))||"");function B(e){const t=h();if(!t)throw new Error("No supported mime type found");return new MediaRecorder(e,{mimeType:t})}const{startRecording:I,stopRecording:O,listener:H}=(()=>{let e=[];return{startRecording:r=>{const c=B(r);return c.start(100),c},stopRecording:r=>{r.stop()},listener:(r,c)=>{r.ondataavailable=s=>{e.push(s.data)},r.onstop=()=>{r.stop();const s=new Blob(e,{type:h()});e=[],c(s)},console.debug(r)}}})();async function _(){const{stream:e,stopTraces:t}=await N();if(!e)return;const{recorder:o,setStream:n,setRecorder:r}=i();if(o)return;n(e);for(let s=5;s>0;s--)m().showMessage({content:`${s}秒后开始录制`}),await v(1e3);m().showMessage({content:"开始录制"});const c=I(e);H(c,s=>{t==null||t(),i().setResult(s),j({id:"recording-end",type:u.RECORD_END})}),r(c)}async function P(){const{recorder:e}=i();e&&O(e)}async function V(){const{result:e}=i();return e?b(e):""}const $=f.span``;function L(){const{name:e,recorder:t}=d(["name","recorder"]);return e?a.jsx(A,{buttons:[{text:"停止录制",$presetTheme:p.DANGER,hidden:!t,onClick:()=>P()},{text:"保存录制",$presetTheme:p.PRIMARY,hidden:!!t,onClick:()=>_()}]}):a.jsx($,{children:"请先输入视频名称"})}const U=f.input`
  all: inherit;
  border: none;
  outline: none;
`,q=e=>{i().setName(e.target.value)},F=T(q,300);function G(e){const{readOnly:t}=e,{name:o,recorder:n}=d(["name","recorder"]);return a.jsx(x,{children:a.jsx(E,{if:!t||!!n,fullback:a.jsx("span",{children:o}),children:()=>a.jsx(U,{defaultValue:o||"",placeholder:"请输入笔记标题",onChange:F})})})}function te(){const e=l.useRef(null),{stream:t}=d("stream");return k(()=>{const{addRecord:o}=y(),{name:n,clear:r}=i();n&&V().then(c=>{r(),o({name:n,content:c})})},u.RECORD_END),l.useEffect(()=>{e.current&&t&&(e.current.srcObject=t)},[t]),a.jsx("video",{ref:e,muted:!0,autoPlay:!0})}const re={title:"录制器",needBackIcon:!0,rightArea:a.jsx(L,{}),titleArea:a.jsx(G,{})};export{te as Component,re as handle};
