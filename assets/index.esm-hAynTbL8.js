var E={};const k=Symbol&&Symbol("empty")||{},U=Reflect!=null&&Reflect.apply?e=>{let r=k;return(...s)=>(r===k&&(r=e()),typeof r!="function"?r:Reflect.apply(r,null,s))}:e=>{let r=k;return(...s)=>(r===k&&(r=e()),typeof r!="function"?r:r.apply(null,s))},H=U(()=>globalThis.navigator?globalThis.navigator.userAgent||globalThis.navigator.swuserAgent:process?`Node.js/${process.version} (${process.platform}; ${process.arch}) ${E.SHELL} ${E.LANG} ${E.TERM_PROGRAM}`:""),K=U(()=>!H().toLocaleLowerCase().includes("node")&&window&&"onload"in window);function I(...e){var r;(r=globalThis==null?void 0:globalThis.__ClConfig__)!=null&&r.disableWarning||console.warn("@cmtlyt/base:>",...e)}function d(e){return K()?typeof window<"u"&&window[e]!==void 0:(I("caniuse 只能在浏览器环境中使用"),!1)}async function Q(e){return function(r){return btoa(String.fromCharCode.apply(null,new Uint8Array(r)))}(await async function(r){const s=r.getReader(),t=[];let n=0;for(;;){const{done:f,value:a}=await s.read();if(f)break;t.push(a),n+=a.byteLength}const o=new ArrayBuffer(n);let c=0;for(const f of t){const a=new Uint8Array(f);new Uint8Array(o,c,a.length).set(a),c+=a.length}return o}(e))}function V(e){return function(r){return new ReadableStream({start(s){s.enqueue(r),s.close()}})}(function(r){const s=atob(r),t=s.length,n=new Uint8Array(t);for(let o=0;o<t;o++)n[o]=s.charCodeAt(o);return n}(e))}var M,$=1e3,m=6e4,h=60*m,w=24*h,X=7*w;function L(e,r,s,t){var n=r>=1.5*s;return Math.round(e/s)+" "+t+(n?"s":"")}function C(e=8){const r=Math.random().toString(36).slice(2,e+2);return r.length===e?r:r+C(e-r.length)}function x(e){const r=new Blob([e]);return URL.createObjectURL(r)}function T(e){return new Worker(e)}function O(){const e=[],r=t=>{e.push(t)},s=t=>{e.splice(e.indexOf(t),1)};return{on:r,remove:s,clearOn:()=>{e.length=0},onOnce:t=>{const n=(...o)=>{t.apply(null,o),s(n)};r(n)},emit:t=>{for(const n of e)n(t)}}}function D({emit:e,type:r,result:s,error:t,resolve:n=()=>{},reject:o=()=>{},isSysCall:c,eventData:f}){if(c)r==="success"?n(s):o(t);else{const{__clUserCall:a,data:l}=f;e(a?l:f)}}function N(e,r=[],s){if(!d("Worker"))return I("不支持 web worker 已降级"),{run:async(...a)=>await e(...a),dispose:()=>{},...O()};const{reuse:t=!0,needPost:n=!1}=s,o=function(a,l=[],i=!1){return`
${l.length?`importScripts("${l.join('", "')}");`:""}
const func = ${a};

const { postMessage } = (()=>{
  const postMessage = (data) => {
    self.postMessage({ __clUserCall: true, data })
  };
  return { postMessage: (data) => postMessage(data) };
})();

self.onmessage = async (e) => {
  const { callId, data: args } = e.data
  try {
    const result = await func.apply(null, ${i?"[postMessage, ...args]":"args"});
    self.postMessage({ __clSysCall: true, type: 'success', result, callId });
  } catch (e) {
    self.postMessage({ __clSysCall: true, callId, type: 'error', error: e })
  }
}
self.onerror = (e) => {
  self.postMessage({ __clSysCall: true, type: 'error', error: e })
}`}(e,function(a){const l=[],i=[];return a.forEach(u=>{typeof u=="string"?i.push(u):typeof u=="function"&&l.push(u)}),i.push(x(l.map(u=>`function ${u.name}(...args) { return (${u})(...args); }`).join(`
`))),i}(r),n),c=x(o);return t?function(l){const i=T(l);let u=!1,y={};const{emit:b,...A}=O();return i.onmessage=g=>{const{type:p,result:v,error:S,callId:R,__clSysCall:_}=g.data,{resolve:F,reject:G}=y[R]||{};_&&delete y[R],D({emit:b,type:p,result:v,error:S,resolve:F,reject:G,isSysCall:_,eventData:g.data})},{run:async(...g)=>{if(u)throw new Error("worker资源已释放");const p=C(16);return new Promise((v,S)=>{y[p]={resolve:v,reject:S},i.postMessage({callId:p,data:g})})},dispose:()=>{i.terminate(),y=null,u=!0,URL.revokeObjectURL(l)},...A}}(c):function(a){let l=!1;const{emit:i,...u}=O();return{run:async(...y)=>{if(l)throw new Error("worker资源已释放");const b=T(a);return new Promise((A,g)=>{b.onmessage=p=>{const{type:v,result:S,error:R,__clSysCall:_}=p.data;_&&b.terminate(),D({emit:i,type:v,result:S,error:R,resolve:A,reject:g,isSysCall:_,eventData:p.data})},b.postMessage({data:y})})},dispose:()=>{l=!0,URL.revokeObjectURL(a)},...u}}(c)}function j(e,r){let s,t=0;const n=36**r;for(;e.includes(s=C(r))&&++t<n;);return s}function P(e){return"#"}function B(e,r,s="#",t={}){const n=new RegExp(`(^{.*?(.{${r}})})|({.*?(.{${r}})}$)`),o=s.length+2;for(let c=0;c++<e.length;){const f=e.slice(c,c+r+o);if(e.includes(f,c+r+o))for(let a=c+r+o+1;a++<e.length;){const l=e.slice(c,a);if(!e.includes(l,a)){const i=j(Object.keys(t),r),u=e.slice(c,a-1);if(n.test(u))break;t[i]=u,e=e.replace(new RegExp(u.replace(/([[{(?)\\])/g,"\\$1"),"g"),`{${s}${i}}`),c+=9;break}}}return e}function J(e,r=6){const s={},t=B(e,r,"#",s);return JSON.stringify({cache:s,source:t,keyLength:r})}M=function(e,r){r=r||{};var s=typeof e;if(s==="string"&&e.length>0)return function(t){if(!((t=String(t)).length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(n){var o=parseFloat(n[1]);switch((n[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*o;case"weeks":case"week":case"w":return o*X;case"days":case"day":case"d":return o*w;case"hours":case"hour":case"hrs":case"hr":case"h":return o*h;case"minutes":case"minute":case"mins":case"min":case"m":return o*m;case"seconds":case"second":case"secs":case"sec":case"s":return o*$;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}(e);if(s==="number"&&isFinite(e))return r.long?function(t){var n=Math.abs(t);return n>=w?L(t,n,w,"day"):n>=h?L(t,n,h,"hour"):n>=m?L(t,n,m,"minute"):n>=$?L(t,n,$,"second"):t+" ms"}(e):function(t){var n=Math.abs(t);return n>=w?Math.round(t/w)+"d":n>=h?Math.round(t/h)+"h":n>=m?Math.round(t/m)+"m":n>=$?Math.round(t/$)+"s":t+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))},M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")&&M.default;N(J,[B,P,j,C],{reuse:!1});function W(e,r="#"){const{keyLength:s,cache:t}=e;let n,{source:o}=e;for(;n=new RegExp(`{${r}(.{${s}})}`,"g").exec(o);){const[c,f]=Array.from(n);o=o.replace(new RegExp(c,"g"),t[f])}return o}function q(e){return W(JSON.parse(e),"#")}N(q,[W,P,j,C],{reuse:!1});const z=U(()=>d("TextEncoder")&&d("ReadableStream")&&d("ArrayBuffer")&&d("Uint8Array")&&d("btoa")&&d("atob")&&d("TextDecoder"));async function Y(e,r=6){if(!d("CompressionStream")||!z())return J(e,r);const s=function(t){const n=new TextEncoder;return new ReadableStream({start(o){o.enqueue(n.encode(t)),o.close()}})}(e).pipeThrough(new CompressionStream("gzip"));return Q(s)}async function Z(e){return!d("DecompressionStream")||!z()?q(e):async function(r){const s=r.getReader(),t=[];let n="";for(;;){const{done:c,value:f}=await s.read();if(c)break;t.push(f)}const o=new TextDecoder("utf-8");for(const c of t)n+=o.decode(c);return n+=o.decode(),n}(V(e).pipeThrough(new DecompressionStream("gzip")))}export{Y as O,Z as U};
