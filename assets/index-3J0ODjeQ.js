import{R as a,y as v,af as O}from"./index-vpEv5sD-.js";import{g as y}from"./index-DsMCs7Ru.js";var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=a.createContext&&a.createContext(p),d=["attr","size","title"];function j(t,e){if(t==null)return{};var r=P(t,e),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function P(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?m(Object(r),!0).forEach(function(n){h(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function h(t,e,r){return e=w(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){var e=x(t,"string");return typeof e=="symbol"?e:e+""}function x(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function b(t){return t&&t.map((e,r)=>a.createElement(e.tag,u({key:r},e.attr),b(e.child)))}function _(t){return e=>a.createElement(E,c({attr:u({},t.attr)},e),b(t.child))}function E(t){var e=r=>{var{attr:n,size:i,title:o}=t,g=j(t,d),s=i||r.size||"1em",l;return r.className&&(l=r.className),t.className&&(l=(l?l+" ":"")+t.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,g,{className:l,style:u(u({color:t.color||r.color},r.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),t.children)};return f!==void 0?a.createElement(f.Consumer,null,r=>e(r)):e(p)}function C(t){const{onClick:e,...r}=t;return v.jsx(O,{...r,onClick:n=>{y().setLoading(!0),e==null||e(n)}})}export{_ as G,C as L};
