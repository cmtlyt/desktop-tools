import{R as u,L as c,M as C,K as E,r as g,Q as y}from"./index-DTR37HZ-.js";import{d as h,g as p,S as M,a as j,h as A,c as N,b as F,F as L}from"./button-CmO3GyJC.js";var w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=u.createContext&&u.createContext(w),z=["attr","size","title"];function I(t,e){if(t==null)return{};var r=_(t,e),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function _(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?O(Object(r),!0).forEach(function(n){B(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function B(t,e,r){return e=D(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function D(t){var e=W(t,"string");return typeof e=="symbol"?e:e+""}function W(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function x(t){return t&&t.map((e,r)=>u.createElement(e.tag,m({key:r},e.attr),x(e.child)))}function P(t){return e=>u.createElement(T,f({attr:m({},t.attr)},e),x(t.child))}function T(t){var e=r=>{var{attr:n,size:a,title:o}=t,d=I(t,z),l=a||r.size||"1em",s;return r.className&&(s=r.className),t.className&&(s=(s?s+" ":"")+t.className),u.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,d,{className:s,style:m(m({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&u.createElement("title",null,o),t.children)};return b!==void 0?u.createElement(b.Consumer,null,r=>e(r)):e(w)}function U(t){return P({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"},child:[]}]})(t)}function k(t){return P({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1"},child:[]},{tag:"path",attr:{d:"M8 16h8"},child:[]},{tag:"path",attr:{d:"M8.322 12.582l7.956 .836"},child:[]},{tag:"path",attr:{d:"M8.787 9.168l7.826 1.664"},child:[]},{tag:"path",attr:{d:"M10.096 5.764l7.608 2.472"},child:[]}]})(t)}const R=[{name:"流水",path:"/flow",deepMatch:!0,icon:c.jsx(k,{})}],G=h(C)`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${p("$style")}

  ${t=>{const{$isActive:e}=t;if(e)return"color: var(--color-active);"}}
`,H=h(M)`
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-button);

  ${p("$style")}
`,K=h(j)`
  font-size: 2.4rem;

  ${p("$style")}
`,J=h.span`
  font-size: 1.2rem;
  line-height: 1;

  ${p.bind(null,"$style")}
`;function V(t){const{direction:e,needActiveStyle:r,shadowOption:n,className:a,appListHander:o=i=>i}=t,d=E(),l=g.useMemo(()=>d.at(-1),[d]),s=g.useCallback((i,S=!1)=>S?r&&d.some(v=>!!y((v==null?void 0:v.pathname)||"",i)):r&&!!y((l==null?void 0:l.pathname)||"",i),[r,l,d]),$=g.useMemo(()=>o(R),[o]);return c.jsx(j,{$wrap:A.wrap,$direction:e,className:a,children:$.map(i=>c.jsx(G,{to:i.path,$isActive:s(i.path,i.deepMatch),$style:i.wrapperStyle,children:c.jsxs(H,{$direction:N.column,$alignItems:F.center,$justifyContent:L.between,$style:i.contentStyle,...n,children:[c.jsx(K,{$style:i.iconStyle,children:typeof i.icon=="string"?c.jsx("span",{children:i.icon}):i.icon}),c.jsx(J,{$style:i.labelStyle,children:i.name})]})},i.path))})}export{V as A,P as G,U as T};
