const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dom-to-image-8cAeFNGE.js","assets/index-D6qafkXg.js","assets/index-Dk2L6hWJ.css"])))=>i.map(i=>d[i]);
import{n as Y,r as p,j as e,aJ as j,G as z,m as I,H as O,aK as G,a4 as C,l as k,aL as V,a3 as U}from"./index-D6qafkXg.js";import{R as B}from"./index-DtoVEizs.js";import{d as g,b as w,e as q}from"./button-BEX9rA1c.js";import{a as K,b as X}from"./index-BwoaI6mQ.js";import{a as J,b as Q}from"./index-DgZYQSx_.js";import{I as Z}from"./index-BQqbvU2j.js";import{D as L}from"./index-ohRqktcN.js";import{S as D}from"./index-Baf81WNP.js";import{S as _}from"./index-B4g9YTQJ.js";import{S as H}from"./index-C5yRtDQn.js";import{i as ee}from"./is-phone-DmeUSy3K.js";import{u as te}from"./use-web-worker-taU7doeu.js";import"./index-D__kxlsE.js";import"./index-BfZnFP6J.js";import"./iconBase-C8K_Ks35.js";import"./index-BTT1drAB.js";import"./index-CpIN0JpX.js";import"./asyncToGenerator-C4OknW4p.js";import"./reactNode-CKAGupvb.js";import"./pickAttrs-GL5_t112.js";import"./compact-item-DYfPSb72.js";import"./fade-Dj5uC7g3.js";import"./LoadingOutlined-EDFBw0zl.js";import"./useForceUpdate-mz-u3tRA.js";import"./PurePanel-96qofwkm.js";import"./UnstableContext-qJUlZigy.js";import"./useLocale-BsDeC3l3.js";import"./EyeOutlined-b_40ih6Y.js";import"./index-CYMNkKmj.js";import"./context-pfO3D9hv.js";import"./Skeleton-FnxQeD2s.js";import"./useVariants-BcLj5rll.js";import"./index-DOYL18B9.js";const{useStoreSlice:E,getStore:x}=Y((i,n)=>({images:[],showForm:!1,printMod:"snapdom",saveSize:{width:0,height:0,aspectRatio:1,scale:2},setImages:t=>i({images:t}),setShowForm:t=>i({showForm:t}),setPrintMod:t=>i({printMod:t}),setSaveSize:t=>i({saveSize:{...n().saveSize,...t}})})),ne=g.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  vertical-align: middle;
`,oe=g.section`
  position: relative;
  z-index: ${i=>i.$zIndex||0};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 2em;
  line-height: 2em;

  ${i=>i.$option?G(["bg","text"],i.$option):{}}

  input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    font-size: 0;
  }
`,ie=g.section`
  position: relative;

  flex: 1;
  display: grid;
  grid-template-rows: ${i=>{const n=["auto"],t=i.$list,s=t.length;for(let l=1;l<s;++l){const{fontSize:m}=t[l];n.push(i.$extendList.has(l)?"auto":m?`${parseFloat(m)*2}px`:"2em")}return n.join(" ")}};

  max-width: 40rem;
`,re=g.img`
  position: relative;
  vertical-align: middle;
  width: 100%;
`,se=g.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ae=new Set(["bg","color","fontSize"]);function N(i){const{data:n,idx:t,zIndex:s,onClick:l}=i;return e.jsxs(oe,{$zIndex:s,$option:n,onClick:()=>l(t),children:[e.jsx(re,{src:n.bg,alt:n.text,crossOrigin:"anonymous"}),e.jsx(ne,{children:n.text})]},t)}const ce=p.memo(p.forwardRef((i,n)=>{const{list:t,...s}=i,l=p.useRef(new Set),[,m]=p.useState(0),c=p.useCallback(()=>{m(d=>(d+1)%10)},[]),r=p.useCallback(d=>{l.current[l.current.has(d)?"delete":"add"](d),c()},[c]);return e.jsxs("section",{style:{padding:"1rem"},children:[e.jsx(D,{when:!t.length,children:()=>e.jsx(w,{$justifyContent:"center",children:"请点击右上方配置按钮, 配置信息"})}),e.jsx(ie,{ref:n,$list:t,$extendList:l.current,...s,children:t.map((d,o)=>e.jsx(N,{data:d,idx:o,onClick:r,zIndex:t.length-o},o))})]})})),le=g(w)`
  input {
    padding-inline: 1rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 1rem;
  }
`,de=g(w)`
  .ant-select {
    flex: 1;
  }
  & > svg {
    font-size: 2rem;
  }
`,T=p.memo(i=>{const{idx:n,data:t={},disableRemove:s=!1,images:l,onChange:m,onEditOption:c=j,onRemove:r=j}=i;return e.jsxs(w,{$direction:"column",$gap:"0.5rem",children:[e.jsxs(de,{$alignItems:"center",$gap:"0.5rem",children:[e.jsx(H,{value:t.bg||"",options:l,onChange:d=>m(n,"bg",d)}),e.jsx(D,{when:!s,children:()=>e.jsx(Q,{onClick:()=>r(n)})})]}),e.jsxs(le,{$gap:"0.5rem",children:[e.jsx("input",{type:"text",defaultValue:t.text||"",onChange:d=>m(n,"text",d.target.value)}),e.jsx(q,{onClick:()=>c({...t,idx:n}),children:"配置"})]})]})});function ue(i,n,t){!t[n]||i[0][n]||i.forEach(s=>{s[n]||(s[n]=t[n])})}const P=g.label`
  display: flex;
  align-items: center;
  line-height: 1;

  span {
    flex: 1;
    font-size: 1.6rem;

    &::after {
      content: ':';
      padding-right: 1rem;
    }
  }

  input {
    box-sizing: border-box;
    flex: 2;
    height: 2em;
  }
`;function me(i){const{data:n,onChange:t}=i,[s,l]=p.useState(n),m=p.useCallback(z(t,500),[t]),c=p.useCallback((r,d)=>{l(r),m(r.idx,d,r[d])},[m]);return e.jsxs(e.Fragment,{children:[e.jsx(N,{data:s,idx:s.idx,zIndex:0,onClick:j}),e.jsxs(w,{$direction:"column",$gap:"1rem",style:{paddingTop:"1rem"},children:[e.jsxs(P,{children:[e.jsx("span",{children:"文字颜色"}),e.jsx("input",{type:"color",value:s.color||"",onChange:r=>c({...s,color:r.target.value},"color")})]}),e.jsxs(P,{children:[e.jsx("span",{children:"文字大小"}),e.jsx("input",{type:"number",value:s.fontSize?parseFloat(s.fontSize):"",onChange:r=>c({...s,fontSize:`${r.target.value}px`},"fontSize")})]})]})]})}const he=p.memo(i=>{const{list:n,onChange:t}=i,{images:s}=E("images"),l=p.useRef({inheritIdx:0}),[m,c]=p.useState(null),r=p.useCallback(z((o,a,h)=>{t(O(u=>{const f=o>=u.length;if(f&&!h)return;const v=u[o]||{...l.current,idx:o};f&&u.push(v),v[a]=h||"",ae.has(a)&&(!l.current[a]||l.current.inheritIdx<=o&&l.current[a]!==h)&&(l.current.inheritIdx=o,l.current[a]=h,ue(u,a,l.current))}))},500),[t]),d=p.useCallback(o=>{t(O(a=>{a.splice(o,1)}))},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs(w,{$direction:"column",$gap:"0.8rem",children:[n.map((o,a)=>e.jsx(T,{idx:a,images:s,data:o,onChange:r,onEditOption:c,onRemove:d},a)),e.jsx(T,{idx:n.length,images:s,disableRemove:!0,onChange:r},n.length)]}),e.jsx(L,{open:!!m,title:"文本配置",onClose:()=>c(null),children:m&&e.jsx(me,{data:m,onChange:r})})]})}),M=g(L)`
  background: transparent !important;

  .ant-drawer-header,
  .ant-drawer-body {
    background: #fff;
  }

  .ant-drawer-body {
    opacity: ${ee()?"0.7":"1"};
  }
`,pe=g(w)`
  padding-bottom: 1.5rem;

  input {
    padding-inline: 1rem;
    width: 100%;
    height: 2em;
    border: 1px solid #ccc;
    border-radius: 1rem;
  }
`,fe=g(w)`
  & > svg {
    font-size: 2rem;
  }
`,ge=p.memo(({applyDomSize:i})=>{const{saveSize:n,printMod:t}=E(["saveSize","printMod"]),[s,l]=p.useState(!0),m=p.useCallback((r,d)=>{const{saveSize:o,setSaveSize:a}=x(),{...h}=o;if(r==="scale")h.scale=Number(d);else if(s){const u=o.aspectRatio;r==="width"?(h.width=Number(d),h.height=Number(d)/u):(h.height=Number(d),h.width=Number(d)*u)}else h[r]=Number(d),h.aspectRatio=h.width/h.height;a(h)},[s]),c=p.useCallback(()=>{l(r=>!r)},[]);return e.jsxs(pe,{$direction:"column",$gap:"0.5rem",children:[e.jsx(H,{value:t,options:[{label:"snapdom",value:"snapdom"},{label:"domToImage",value:"domToImage"}],onChange:r=>x().setPrintMod(r)}),e.jsx(w,{$gap:"0.5rem",$alignItems:"center",children:e.jsx(_,{when:t==="domToImage",fullback:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"scale:"}),e.jsx("input",{type:"number",value:n.scale,onChange:r=>m("scale",r.target.value)})]}),children:()=>e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"number",value:n.width,onChange:r=>m("width",r.target.value)}),e.jsx("input",{type:"number",value:n.height,onChange:r=>m("height",r.target.value)}),e.jsxs(fe,{$alignItems:"center",$gap:"0.5rem",onClick:c,children:[e.jsx(_,{when:s,fullback:e.jsx(X,{}),children:()=>e.jsx(K,{})}),e.jsx(J,{onClick:()=>{i(),I().showMessage({type:"success",content:"同步成功",duration:1})}})]})]})})})]})}),xe=p.memo(i=>{const{list:n,applyDomSize:t=j,onChange:s=j}=i,{showForm:l}=E(["showForm"]),[m,c]=p.useState(!1),r=p.useCallback(z((d,o)=>{x().setImages(o.map(a=>({value:a.url,label:a.name}))),I().showMessage({type:"success",content:"图片上传成功"})},300),[]);return e.jsxs(M,{open:l,className:M,title:"配置信息",width:"40rem",onClose:()=>x().setShowForm(!1),extra:e.jsx(B,{buttons:[{text:"图片管理",onClick:()=>c(!0)}]}),children:[e.jsx(ge,{applyDomSize:t}),e.jsx(he,{list:n,onChange:s}),e.jsx(L,{open:m,title:"图片管理",width:"40rem",onClose:()=>c(!1),children:e.jsx(Z,{placeholderText:"上传图片资源",onChange:r})})]})});var W={exports:{}};(function(i,n){(function(t,s){s()})(C,function(){function t(o,a){return typeof a>"u"?a={autoBom:!1}:typeof a!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function s(o,a,h){var u=new XMLHttpRequest;u.open("GET",o),u.responseType="blob",u.onload=function(){d(u.response,a,h)},u.onerror=function(){console.error("could not download file")},u.send()}function l(o){var a=new XMLHttpRequest;a.open("HEAD",o,!1);try{a.send()}catch{}return 200<=a.status&&299>=a.status}function m(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(a)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof C=="object"&&C.global===C?C:void 0,r=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(o,a,h){var u=c.URL||c.webkitURL,f=document.createElement("a");a=a||o.name||"download",f.download=a,f.rel="noopener",typeof o=="string"?(f.href=o,f.origin===location.origin?m(f):l(f.href)?s(o,a,h):m(f,f.target="_blank")):(f.href=u.createObjectURL(o),setTimeout(function(){u.revokeObjectURL(f.href)},4e4),setTimeout(function(){m(f)},0))}:"msSaveOrOpenBlob"in navigator?function(o,a,h){if(a=a||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(t(o,h),a);else if(l(o))s(o,a,h);else{var u=document.createElement("a");u.href=o,u.target="_blank",setTimeout(function(){m(u)})}}:function(o,a,h,u){if(u=u||open("","_blank"),u&&(u.document.title=u.document.body.innerText="downloading..."),typeof o=="string")return s(o,a,h);var f=o.type==="application/octet-stream",v=/constructor/i.test(c.HTMLElement)||c.safari,F=/CriOS\/[\d]+/.test(navigator.userAgent);if((F||f&&v||r)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var S=y.result;S=F?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=S:location=S,u=null},y.readAsDataURL(o)}else{var $=c.URL||c.webkitURL,R=$.createObjectURL(o);u?u.location=R:location.href=R,u=null,setTimeout(function(){$.revokeObjectURL(R)},4e4)}});c.saveAs=d.saveAs=d,i.exports=d})})(W);var we=W.exports;const ve="/desktop-tools/assets/resize-worker-OlxEQlEm.js";function be(i){const[n,t]=p.useState(),s=p.useRef(),l=p.useRef(j);return p.useEffect(()=>{if(!i)return;const m=(r=!1)=>{const d=i.getBoundingClientRect(),{saveSize:o,setSaveSize:a}=x();let h=o.width||d.width,u=o.height||d.height;if(r)h=d.width,u=d.height;else if(s.current){const{width:f,height:v}=s.current;f===h&&(h=d.width),v===u&&(u=d.height)}a({width:h,height:u,aspectRatio:h/u}),s.current=d,t(d)},c=new ResizeObserver(()=>m());return m(),l.current=()=>m(!0),c.observe(i),()=>c.disconnect()},[i]),[n,l.current]}const b={};async function A(i){return i==="snapdom"?b.snapdom||(b.snapdom=(await U(async()=>{const{snapdom:n}=await import("./snapdom-Bu09OrPZ.js");return{snapdom:n}},[])).snapdom):i==="domToImage"?b.domToImage||(b.domToImage=(await U(async()=>{const{default:n}=await import("./dom-to-image-8cAeFNGE.js").then(t=>t.d);return{default:n}},__vite__mapDeps([0,1,2]))).default):null}async function je(i,n="snapdom"){if(!i)return Promise.resolve("");if(n==="snapdom"){const{saveSize:{scale:t}}=x();return(await A(n))(i,{scale:window.devicePixelRatio*t}).then(s=>s.toCanvas()).then(s=>{const{promise:l,resolve:m}=V();return s.toBlob(c=>m(URL.createObjectURL(c)),"image/webp",1),l})}else if(n==="domToImage")return(await A(n)).toBlob(i).then(t=>URL.createObjectURL(t))}function Se(){const i=te(ve);return p.useCallback(async n=>{if(!n)return;let t=!1;const{printMod:s}=x();let l=0,m=0,c={};if(s!=="snapdom"){const{saveSize:r}=x();c=n.getBoundingClientRect(),l=r.width||c.width,m=r.height||c.height,t=l!==c.width||m!==c.height}return k.appear("dyylpt.download",{mod:s}),je(n,s).then(r=>{if(r)return t?(k.appear("dyylpt.resize-download",{ow:c.width,oh:c.height,nw:l,nh:m}),i.action("resize",{url:r,width:l,height:m}).then(d=>(URL.revokeObjectURL(r),d))):r}).then(r=>{r&&(we.saveAs(r,`${new Date().toLocaleString()}.${s==="snapdom"?"webp":"png"}`),URL.revokeObjectURL(r))})},[i])}function ot(){const[i,n]=p.useState([]),t=p.useRef(null),[,s]=be(t.current),l=p.useCallback(m=>n(c=>{const r=m(c);return k.event("dyylpt.updatePreviewList",{oldLength:c.length,newLength:r.length}),r}),[]);return e.jsxs(se,{children:[e.jsx(ce,{id:"preview-area",ref:t,list:i}),e.jsx(xe,{list:i,applyDomSize:s,onChange:l})]})}function Ce(){const i=Se();return e.jsx(B,{buttons:[{text:"配置",onClick:()=>x().setShowForm(!0)},{text:"保存",onClick:()=>{i(document.getElementById("preview-area")).then(()=>{I().showMessage({type:"success",content:"保存成功"})})}}]})}const it={title:"电影语录拼图",needBackIcon:!0,rightArea:e.jsx(Ce,{})};export{ot as Component,it as handle};
