import{V as l}from"./index-KNKRzeP1.js";function H(){return"storage"in navigator}function w(t){return t.startsWith("opfs://")}function i(t){if(!t.startsWith("opfs://"))throw new Error(`${t} Not a opfs url`)}const f=l(async()=>await navigator.storage.getDirectory());async function u(t,n=!0){const e=await f(),o=t.length;let r=e;for(let a=0,s=t[a];a<o&&s;s=t[++a])r=await r.getDirectoryHandle(s,{create:n});return r}async function d(t,n=!0){i(t);const e=t.replace("opfs://","");return u(e.split("/"),n)}async function c(t,n=!0){i(t);const e=t.split("/"),o=e.pop(),r=e.join("/");return(await d(r,n)).getFileHandle(o,{create:n})}async function y(t,n=!1,e=!0){return i(t),(await c(t,e)).createWritable({keepExistingData:n})}async function g(t){return i(t),(await c(t,!1)).getFile()}async function F(t){const n=await g(t),e=new FileReader;return e.readAsText(n),new Promise((o,r)=>{e.onload=()=>o(e.result),e.onerror=()=>r(e.error)})}export{y as a,g as b,F as g,w as i,H as o};