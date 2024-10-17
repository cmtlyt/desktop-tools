import{R as u,o as l,L as C,n as E,r as g,aw as y}from"./index-Svs3ILB_.js";import{d as m,o as p,S as A,a as w,q as M,l as N,c as F,b as L,F as k,n as z}from"./index-CkkFVO2k.js";var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=u.createContext&&u.createContext(O),I=["attr","size","title"];function _(t,e){if(t==null)return{};var r=B(t,e),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function B(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?j(Object(r),!0).forEach(function(n){D(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function D(t,e,r){return e=W(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function W(t){var e=T(t,"string");return typeof e=="symbol"?e:e+""}function T(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function x(t){return t&&t.map((e,r)=>u.createElement(e.tag,h({key:r},e.attr),x(e.child)))}function P(t){return e=>u.createElement(R,f({attr:h({},t.attr)},e),x(t.child))}function R(t){var e=r=>{var{attr:n,size:a,title:o}=t,d=_(t,I),s=a||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),u.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,d,{className:c,style:h(h({color:t.color||r.color},r.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&u.createElement("title",null,o),t.children)};return b!==void 0?u.createElement(b.Consumer,null,r=>e(r)):e(O)}function X(t){return P({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"},child:[]}]})(t)}function G(t){return P({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1"},child:[]},{tag:"path",attr:{d:"M8 16h8"},child:[]},{tag:"path",attr:{d:"M8.322 12.582l7.956 .836"},child:[]},{tag:"path",attr:{d:"M8.787 9.168l7.826 1.664"},child:[]},{tag:"path",attr:{d:"M10.096 5.764l7.608 2.472"},child:[]}]})(t)}const H=[{name:"流水",path:"/flow",deepMatch:!0,icon:l.jsx(G,{})}],q=m(C)`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${p("$style")}

  ${t=>{const{$isActive:e}=t;if(e)return"color: var(--color-active);"}}
`,J=m(A)`
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-button);

  ${p("$style")}
`,K=m(w)`
  font-size: 2.4rem;

  ${p("$style")}
`,Q=m.span`
  font-size: 1.2rem;
  line-height: 1;

  ${p.bind(null,"$style")}
`;function Y(t){const{direction:e,needActiveStyle:r,shadowOption:n,className:a,appListHander:o=i=>i}=t,d=E(),s=g.useMemo(()=>d.at(-1),[d]),c=g.useCallback((i,S=!1)=>S?r&&d.some(v=>!!y((v==null?void 0:v.pathname)||"",i)):r&&!!y((s==null?void 0:s.pathname)||"",i),[r,s,d]),$=g.useMemo(()=>o(H),[o]);return l.jsx(w,{$wrap:M.wrap,$direction:e,className:a,children:$.map(i=>l.jsx(q,{to:i.path,$isActive:c(i.path,i.deepMatch),$style:i.wrapperStyle,onClick:()=>N.click("app-list-click",{app:i}),children:l.jsxs(J,{$direction:F.column,$alignItems:L.center,$justifyContent:k.between,$style:i.contentStyle,...n,children:[l.jsx(K,{$style:i.iconStyle,children:l.jsx(z,{if:typeof i.icon=="string",fullback:i.icon,children:l.jsx("span",{children:i.icon})})}),l.jsx(Q,{$style:i.labelStyle,children:i.name})]})},i.path))})}export{Y as A,P as G,X as T};
