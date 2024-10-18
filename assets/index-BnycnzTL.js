import{w as Pt,x as Dt,y as Mt}from"./index-oQJcAC9d.js";import{r as Fe,av as At,R as Rt}from"./index-_tsl3Qgu.js";const $t={BASE_URL:"/desktop-tools/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},He=e=>{let t;const r=new Set,n=(d,y)=>{const p=typeof d=="function"?d(t):d;if(!Object.is(p,t)){const m=t;t=y??(typeof p!="object"||p===null)?p:Object.assign({},t,p),r.forEach(v=>v(t,m))}},s=()=>t,c={setState:n,getState:s,getInitialState:()=>u,subscribe:d=>(r.add(d),()=>r.delete(d)),destroy:()=>{($t?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},u=t=e(n,s,c);return c},xt=e=>e?He(e):He;var et={exports:{}},tt={},rt={exports:{}},nt={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=Fe;function Ct(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Ct,Lt=J.useState,jt=J.useEffect,zt=J.useLayoutEffect,Nt=J.useDebugValue;function Ht(e,t){var r=t(),n=Lt({inst:{value:r,getSnapshot:t}}),s=n[0].inst,o=n[1];return zt(function(){s.value=r,s.getSnapshot=t,be(s)&&o({inst:s})},[e,r,t]),jt(function(){return be(s)&&o({inst:s}),e(function(){be(s)&&o({inst:s})})},[e]),Nt(r),r}function be(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ft(e,r)}catch{return!0}}function Tt(e,t){return t()}var Ut=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Tt:Ht;nt.useSyncExternalStore=J.useSyncExternalStore!==void 0?J.useSyncExternalStore:Ut;rt.exports=nt;var Bt=rt.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=Fe,Wt=Bt;function Jt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:Jt,qt=Wt.useSyncExternalStore,Gt=me.useRef,Xt=me.useEffect,Yt=me.useMemo,Qt=me.useDebugValue;tt.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var o=Gt(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Yt(function(){function c(m){if(!u){if(u=!0,d=m,m=n(m),s!==void 0&&a.hasValue){var v=a.value;if(s(v,m))return y=v}return y=m}if(v=y,Kt(d,m))return v;var h=n(m);return s!==void 0&&s(v,h)?v:(d=m,y=h)}var u=!1,d,y,p=r===void 0?null:r;return[function(){return c(t())},p===null?void 0:function(){return c(p())}]},[t,r,n,s]);var i=qt(e,o[0],o[1]);return Xt(function(){a.hasValue=!0,a.value=i},[i]),Qt(i),i};et.exports=tt;var Zt=et.exports;const Vt=At(Zt),st={BASE_URL:"/desktop-tools/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},{useDebugValue:er}=Rt,{useSyncExternalStoreWithSelector:tr}=Vt;let Te=!1;const rr=e=>e;function nr(e,t=rr,r){(st?"production":void 0)!=="production"&&r&&!Te&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Te=!0);const n=tr(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return er(n),n}const Ue=e=>{(st?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?xt(e):e,r=(n,s)=>nr(t,n,s);return Object.assign(r,t),r},ot=e=>e?Ue(e):Ue,at="cl:storage:flows";function it(e){const t=Fe.useRef({});return r=>{if(!r)return t.current;const n=Pt(r,e);return Dt(t.current,n)?t.current:t.current=n}}const sr=ot(e=>({messageInfo:null,showMessage:t=>e({messageInfo:t})})),Nr=e=>sr(it(e)),or={BASE_URL:"/desktop-tools/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function ct(e,t){let r;try{r=e()}catch{return}return{getItem:s=>{var o;const a=c=>c===null?null:JSON.parse(c,void 0),i=(o=r.getItem(s))!=null?o:null;return i instanceof Promise?i.then(a):a(i)},setItem:(s,o)=>r.setItem(s,JSON.stringify(o,void 0)),removeItem:s=>r.removeItem(s)}}const V=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then(n){return V(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return V(n)(r)}}}},ar=(e,t)=>(r,n,s)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:l=>l,version:0,merge:(l,g)=>({...g,...l}),...t},a=!1;const i=new Set,c=new Set;let u;try{u=o.getStorage()}catch{}if(!u)return e((...l)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...l)},n,s);const d=V(o.serialize),y=()=>{const l=o.partialize({...n()});let g;const f=d({state:l,version:o.version}).then(S=>u.setItem(o.name,S)).catch(S=>{g=S});if(g)throw g;return f},p=s.setState;s.setState=(l,g)=>{p(l,g),y()};const m=e((...l)=>{r(...l),y()},n,s);let v;const h=()=>{var l;if(!u)return;a=!1,i.forEach(f=>f(n()));const g=((l=o.onRehydrateStorage)==null?void 0:l.call(o,n()))||void 0;return V(u.getItem.bind(u))(o.name).then(f=>{if(f)return o.deserialize(f)}).then(f=>{if(f)if(typeof f.version=="number"&&f.version!==o.version){if(o.migrate)return o.migrate(f.state,f.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return f.state}).then(f=>{var S;return v=o.merge(f,(S=n())!=null?S:m),r(v,!0),y()}).then(()=>{g==null||g(v,void 0),a=!0,c.forEach(f=>f(v))}).catch(f=>{g==null||g(void 0,f)})};return s.persist={setOptions:l=>{o={...o,...l},l.getStorage&&(u=l.getStorage())},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>h(),hasHydrated:()=>a,onHydrate:l=>(i.add(l),()=>{i.delete(l)}),onFinishHydration:l=>(c.add(l),()=>{c.delete(l)})},h(),v||m},ir=(e,t)=>(r,n,s)=>{let o={storage:ct(()=>localStorage),partialize:h=>h,version:0,merge:(h,l)=>({...l,...h}),...t},a=!1;const i=new Set,c=new Set;let u=o.storage;if(!u)return e((...h)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...h)},n,s);const d=()=>{const h=o.partialize({...n()});return u.setItem(o.name,{state:h,version:o.version})},y=s.setState;s.setState=(h,l)=>{y(h,l),d()};const p=e((...h)=>{r(...h),d()},n,s);s.getInitialState=()=>p;let m;const v=()=>{var h,l;if(!u)return;a=!1,i.forEach(f=>{var S;return f((S=n())!=null?S:p)});const g=((l=o.onRehydrateStorage)==null?void 0:l.call(o,(h=n())!=null?h:p))||void 0;return V(u.getItem.bind(u))(o.name).then(f=>{if(f)if(typeof f.version=="number"&&f.version!==o.version){if(o.migrate)return[!0,o.migrate(f.state,f.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,f.state];return[!1,void 0]}).then(f=>{var S;const[P,we]=f;if(m=o.merge(we,(S=n())!=null?S:p),r(m,!0),P)return d()}).then(()=>{g==null||g(m,void 0),m=n(),a=!0,c.forEach(f=>f(m))}).catch(f=>{g==null||g(void 0,f)})};return s.persist={setOptions:h=>{o={...o,...h},h.storage&&(u=h.storage)},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>v(),hasHydrated:()=>a,onHydrate:h=>(i.add(h),()=>{i.delete(h)}),onFinishHydration:h=>(c.add(h),()=>{c.delete(h)})},o.skipHydration||v(),m||p},cr=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((or?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),ar(e,t)):ir(e,t),ur=cr;var ut=Symbol.for("immer-nothing"),Be=Symbol.for("immer-draftable"),w=Symbol.for("immer-state");function E(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var K=Object.getPrototypeOf;function q(e){return!!e&&!!e[w]}function A(e){var t;return e?lt(e)||Array.isArray(e)||!!e[Be]||!!((t=e.constructor)!=null&&t[Be])||ge(e)||ve(e):!1}var lr=Object.prototype.constructor.toString();function lt(e){if(!e||typeof e!="object")return!1;const t=K(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===lr}function de(e,t){pe(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function pe(e){const t=e[w];return t?t.type_:Array.isArray(e)?1:ge(e)?2:ve(e)?3:0}function Pe(e,t){return pe(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ft(e,t,r){const n=pe(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function fr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ge(e){return e instanceof Map}function ve(e){return e instanceof Set}function D(e){return e.copy_||e.base_}function De(e,t){if(ge(e))return new Map(e);if(ve(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=lt(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[w];let s=Reflect.ownKeys(n);for(let o=0;o<s.length;o++){const a=s[o],i=n[a];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(n[a]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[a]})}return Object.create(K(e),n)}else{const n=K(e);if(n!==null&&r)return{...e};const s=Object.create(n);return Object.assign(s,e)}}function Le(e,t=!1){return _e(e)||q(e)||!A(e)||(pe(e)>1&&(e.set=e.add=e.clear=e.delete=dr),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>Le(n,!0))),e}function dr(){E(2)}function _e(e){return Object.isFrozen(e)}var yr={};function R(e){const t=yr[e];return t||E(0,e),t}var ee;function dt(){return ee}function hr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function We(e,t){t&&(R("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Me(e){Ae(e),e.drafts_.forEach(mr),e.drafts_=null}function Ae(e){e===ee&&(ee=e.parent_)}function Je(e){return ee=hr(ee,e)}function mr(e){const t=e[w];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ke(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[w].modified_&&(Me(t),E(4)),A(e)&&(e=ye(t,e),t.parent_||he(t,e)),t.patches_&&R("Patches").generateReplacementPatches_(r[w].base_,e,t.patches_,t.inversePatches_)):e=ye(t,r,[]),Me(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ut?e:void 0}function ye(e,t,r){if(_e(t))return t;const n=t[w];if(!n)return de(t,(s,o)=>qe(e,n,t,s,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return he(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let o=s,a=!1;n.type_===3&&(o=new Set(s),s.clear(),a=!0),de(o,(i,c)=>qe(e,n,s,i,c,r,a)),he(e,s,!1),r&&e.patches_&&R("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function qe(e,t,r,n,s,o,a){if(q(s)){const i=o&&t&&t.type_!==3&&!Pe(t.assigned_,n)?o.concat(n):void 0,c=ye(e,s,i);if(ft(r,n,c),q(c))e.canAutoFreeze_=!1;else return}else a&&r.add(s);if(A(s)&&!_e(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ye(e,s),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&he(e,s)}}function he(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Le(t,r)}function pr(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:dt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,o=je;r&&(s=[n],o=te);const{revoke:a,proxy:i}=Proxy.revocable(s,o);return n.draft_=i,n.revoke_=a,i}var je={get(e,t){if(t===w)return e;const r=D(e);if(!Pe(r,t))return gr(e,r,t);const n=r[t];return e.finalized_||!A(n)?n:n===Ee(e.base_,t)?(ke(e),e.copy_[t]=$e(n,e)):n},has(e,t){return t in D(e)},ownKeys(e){return Reflect.ownKeys(D(e))},set(e,t,r){const n=yt(D(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const s=Ee(D(e),t),o=s==null?void 0:s[w];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(fr(r,s)&&(r!==void 0||Pe(e.base_,t)))return!0;ke(e),Re(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Ee(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,ke(e),Re(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=D(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){E(11)},getPrototypeOf(e){return K(e.base_)},setPrototypeOf(){E(12)}},te={};de(je,(e,t)=>{te[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});te.deleteProperty=function(e,t){return te.set.call(this,e,t,void 0)};te.set=function(e,t,r){return je.set.call(this,e[0],t,r,e[0])};function Ee(e,t){const r=e[w];return(r?D(r):e)[t]}function gr(e,t,r){var s;const n=yt(t,r);return n?"value"in n?n.value:(s=n.get)==null?void 0:s.call(e.draft_):void 0}function yt(e,t){if(!(t in e))return;let r=K(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=K(r)}}function Re(e){e.modified_||(e.modified_=!0,e.parent_&&Re(e.parent_))}function ke(e){e.copy_||(e.copy_=De(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var vr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const a=this;return function(c=o,...u){return a.produce(c,d=>r.call(this,d,...u))}}typeof r!="function"&&E(6),n!==void 0&&typeof n!="function"&&E(7);let s;if(A(t)){const o=Je(this),a=$e(t,void 0);let i=!0;try{s=r(a),i=!1}finally{i?Me(o):Ae(o)}return We(o,n),Ke(s,o)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===ut&&(s=void 0),this.autoFreeze_&&Le(s,!0),n){const o=[],a=[];R("Patches").generateReplacementPatches_(t,s,o,a),n(o,a)}return s}else E(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(a,...i)=>this.produceWithPatches(a,c=>t(c,...i));let n,s;return[this.produce(t,r,(a,i)=>{n=a,s=i}),n,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){A(e)||E(8),q(e)&&(e=_r(e));const t=Je(this),r=$e(e,void 0);return r[w].isManual_=!0,Ae(t),r}finishDraft(e,t){const r=e&&e[w];(!r||!r.isManual_)&&E(9);const{scope_:n}=r;return We(n,t),Ke(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const n=R("Patches").applyPatches_;return q(e)?n(e,t):this.produce(e,s=>n(s,t))}};function $e(e,t){const r=ge(e)?R("MapSet").proxyMap_(e,t):ve(e)?R("MapSet").proxySet_(e,t):pr(e,t);return(t?t.scope_:dt()).drafts_.push(r),r}function _r(e){return q(e)||E(10,e),ht(e)}function ht(e){if(!A(e)||_e(e))return e;const t=e[w];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=De(e,t.scope_.immer_.useStrictShallowCopy_)}else r=De(e,!0);return de(r,(n,s)=>{ft(r,n,ht(s))}),t&&(t.finalized_=!1),r}var b=new vr,Ie=b.produce;b.produceWithPatches.bind(b);b.setAutoFreeze.bind(b);b.setUseStrictShallowCopy.bind(b);b.applyPatches.bind(b);b.createDraft.bind(b);b.finishDraft.bind(b);var W={};const se=Symbol&&Symbol("empty")||{},Sr=["url","map","set","weakmap","weakset"],mt=Reflect!=null&&Reflect.apply?e=>{let t=se;return(...r)=>(t===se&&(t=e()),typeof t!="function"?t:Reflect.apply(t,null,r))}:e=>{let t=se;return(...r)=>(t===se&&(t=e()),typeof t!="function"?t:t.apply(null,r))},wr=mt(()=>globalThis.navigator?globalThis.navigator.userAgent||globalThis.navigator.swuserAgent:process?`Node.js/${process.version} (${process.platform}; ${process.arch}) ${W.SHELL} ${W.LANG} ${W.TERM_PROGRAM}`:""),br=mt(()=>!wr().toLocaleLowerCase().includes("node")&&window&&"onload"in window);function ne(...e){var t;(t=globalThis==null?void 0:globalThis.__ClConfig__)!=null&&t.disableWarning||console.warn("@cmtlyt/base:>",...e)}function ze(e){return br()?typeof window<"u"&&window[e]!==void 0:(ne("caniuse 只能在浏览器环境中使用"),!1)}function pt(e,t=new WeakMap){if(e===null||typeof e!="object"||Sr.includes(function(n){const s=typeof n;return s!=="object"&&s!=="function"?s:Object.prototype.toString.call(n).slice(8,-1).toLowerCase()}(e)))return e;if(t.has(e))return t.get(e);const r=Array.isArray(e)?[]:{};t.set(e,r);for(const n in e)e.hasOwnProperty(n)&&(r[n]=pt(e[n],t));return r}var G=1e3,$=6e4,x=60*$,C=24*x,Er=7*C;function oe(e,t,r,n){var s=t>=1.5*r;return Math.round(e/r)+" "+n+(s?"s":"")}function _(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}function Z(e,t,r,n,s){if(typeof t=="function"?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,r),r}(function(e){e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")&&e.default})(function(e,t){t=t||{};var r=typeof e;if(r==="string"&&e.length>0)return function(n){if(!((n=String(n)).length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(s){var o=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*o;case"weeks":case"week":case"w":return o*Er;case"days":case"day":case"d":return o*C;case"hours":case"hour":case"hrs":case"hr":case"h":return o*x;case"minutes":case"minute":case"mins":case"min":case"m":return o*$;case"seconds":case"second":case"secs":case"sec":case"s":return o*G;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}(e);if(r==="number"&&isFinite(e))return t.long?function(n){var s=Math.abs(n);return s>=C?oe(n,s,C,"day"):s>=x?oe(n,s,x,"hour"):s>=$?oe(n,s,$,"minute"):s>=G?oe(n,s,G,"second"):n+" ms"}(e):function(n){var s=Math.abs(n);return s>=C?Math.round(n/C)+"d":s>=x?Math.round(n/x)+"h":s>=$?Math.round(n/$)+"m":s>=G?Math.round(n/G)+"s":n+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}),typeof SuppressedError=="function"&&SuppressedError,typeof SuppressedError=="function"&&SuppressedError;var ae,X=1e3,F=6e4,L=60*F,j=24*L,kr=7*j;function ie(e,t,r,n){var s=t>=1.5*r;return Math.round(e/r)+" "+n+(s?"s":"")}ae=function(e,t){t=t||{};var r=typeof e;if(r==="string"&&e.length>0)return function(n){if(!((n=String(n)).length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(s){var o=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*o;case"weeks":case"week":case"w":return o*kr;case"days":case"day":case"d":return o*j;case"hours":case"hour":case"hrs":case"hr":case"h":return o*L;case"minutes":case"minute":case"mins":case"min":case"m":return o*F;case"seconds":case"second":case"secs":case"sec":case"s":return o*X;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}(e);if(r==="number"&&isFinite(e))return t.long?function(n){var s=Math.abs(n);return s>=j?ie(n,s,j,"day"):s>=L?ie(n,s,L,"hour"):s>=F?ie(n,s,F,"minute"):s>=X?ie(n,s,X,"second"):n+" ms"}(e):function(n){var s=Math.abs(n);return s>=j?Math.round(n/j)+"d":s>=L?Math.round(n/L)+"h":s>=F?Math.round(n/F)+"m":s>=X?Math.round(n/X)+"s":n+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))},ae&&ae.__esModule&&Object.prototype.hasOwnProperty.call(ae,"default");const gt=["string","number","boolean"];let xe=0;function z(e,t=new Map){const r=function(o){const a=typeof o;return a!=="object"&&a!=="function"?a:Object.prototype.toString.call(o).slice(8,-1).toLowerCase()}(e),n={type:r,id:xe,value:"unknown"};t.has(e)?n.id=t.get(e):(++xe,t.set(e,n.id));let s=n;return gt.includes(r)&&(s={...n,value:e}),r==="array"?s={...n,value:e.map(o=>z(o,t))}:r==="object"?s={...n,value:Object.keys(e).sort().reduce((o,a)=>(o[a]=z(e[a],t),o),{})}:r==="map"?s={...n,value:[...e.entries()].map(([o,a])=>({key:z(o,t),value:z(a,t)}))}:r==="set"?s={...n,value:[...e.values()].map(o=>z(o,t))}:r==="function"||r==="asyncfunction"?s={...n,value:(()=>{const o=e.toString();return/^.*?=>/.test(o)?`return ${o}`:o.indexOf("async")===0?o.replace("async","return async function"):o.indexOf("function")===0?`return ${o}`:`return function ${o}`})()}:r==="date"?s={...n,value:e.toISOString()}:r==="regexp"&&(s={...n,value:{source:e.source,flags:e.flags}}),s}function N(e,t={}){const r=e.type;if(gt.includes(r))return e.value;if(t[e.id])return t[e.id];let n="unknown";return r==="array"?n=e.value.map(s=>N(s),t):r==="object"?n=Object.keys(e.value).reduce((s,o)=>(s[o]=N(e.value[o],t),s),{}):r==="map"?n=new Map(e.value.map(({key:s,value:o})=>[N(s,t),N(o,t)])):r==="set"?n=new Set(e.value.map(s=>N(s,t))):r==="function"||r==="asyncfunction"?n=new Function(e.value)():r==="date"?n=new Date(e.value):r==="regexp"&&(n=new RegExp(e.value.source,e.value.flags)),t[e.id]=n,n}function Ir(e){let t={};const r=N(JSON.parse(e),t);for(const n in t)delete t[n];return t=null,r}const ce=Symbol&&Symbol("empty")||{},Ne=Reflect!=null&&Reflect.apply?e=>{let t=ce;return(...r)=>(t===ce&&(t=e()),typeof t!="function"?t:Reflect.apply(t,null,r))}:e=>{let t=ce;return(...r)=>(t===ce&&(t=e()),typeof t!="function"?t:t.apply(null,r))},Or=Ne(()=>globalThis.navigator?globalThis.navigator.userAgent||globalThis.navigator.swuserAgent:process?`Node.js/${process.version} (${process.platform}; ${process.arch}) ${W.SHELL} ${W.LANG} ${W.TERM_PROGRAM}`:""),Pr=Ne(()=>!Or().toLocaleLowerCase().includes("node")&&window&&"onload"in window);function vt(...e){var t;(t=globalThis==null?void 0:globalThis.__ClConfig__)!=null&&t.disableWarning||console.warn("@cmtlyt/base:>",...e)}function I(e){return Pr()?typeof window<"u"&&window[e]!==void 0:(vt("caniuse 只能在浏览器环境中使用"),!1)}var ue,Y=1e3,H=6e4,T=60*H,U=24*T,Dr=7*U;function le(e,t,r,n){var s=t>=1.5*r;return Math.round(e/r)+" "+n+(s?"s":"")}function re(e=8){const t=Math.random().toString(36).slice(2,e+2);return t.length===e?t:t+re(e-t.length)}function Ge(e){const t=new Blob([e]);return URL.createObjectURL(t)}function Xe(e){return new Worker(e)}function Oe(){const e=[],t=n=>{e.push(n)},r=n=>{e.splice(e.indexOf(n),1)};return{on:t,remove:r,clearOn:()=>{e.length=0},onOnce:n=>{const s=(...o)=>{n.apply(null,o),r(s)};t(s)},emit:n=>{for(const s of e)s(n)}}}function Ye({emit:e,type:t,result:r,error:n,resolve:s=()=>{},reject:o=()=>{},isSysCall:a,eventData:i}){if(a)t==="success"?s(r):o(n);else{const{__clUserCall:c,data:u}=i;e(c?u:i)}}function Qe(e,t=[],r){if(!I("Worker"))return vt("不支持 web worker 已降级"),{run:async(...c)=>await e(...c),dispose:()=>{},...Oe()};const{reuse:n=!0,needPost:s=!1}=r,o=function(c,u=[],d=!1){return`
${u.length?`importScripts("${u.join('", "')}");`:""}
const func = ${c};

const { postMessage } = (()=>{
  const postMessage = (data) => {
    self.postMessage({ __clUserCall: true, data })
  };
  return { postMessage: (data) => postMessage(data) };
})();

self.onmessage = async (e) => {
  const { callId, data: args } = e.data
  try {
    const result = await func.apply(null, ${d?"[postMessage, ...args]":"args"});
    self.postMessage({ __clSysCall: true, type: 'success', result, callId });
  } catch (e) {
    self.postMessage({ __clSysCall: true, callId, type: 'error', error: e })
  }
}
self.onerror = (e) => {
  self.postMessage({ __clSysCall: true, type: 'error', error: e })
}`}(e,function(c){const u=[],d=[];return c.forEach(y=>{typeof y=="string"?d.push(y):typeof y=="function"&&u.push(y)}),d.push(Ge(u.map(y=>`function ${y.name}(...args) { return (${y})(...args); }`).join(`
`))),d}(t),s),a=Ge(o);return n?function(u){const d=Xe(u);let y=!1,p={};const{emit:m,...v}=Oe();return d.onmessage=h=>{const{type:l,result:g,error:f,callId:S,__clSysCall:P}=h.data,{resolve:we,reject:Ot}=p[S]||{};P&&delete p[S],Ye({emit:m,type:l,result:g,error:f,resolve:we,reject:Ot,isSysCall:P,eventData:h.data})},{run:async(...h)=>{if(y)throw new Error("worker资源已释放");const l=re(16);return new Promise((g,f)=>{p[l]={resolve:g,reject:f},d.postMessage({callId:l,data:h})})},dispose:()=>{d.terminate(),p=null,y=!0,URL.revokeObjectURL(u)},...v}}(a):function(c){let u=!1;const{emit:d,...y}=Oe();return{run:async(...p)=>{if(u)throw new Error("worker资源已释放");const m=Xe(c);return new Promise((v,h)=>{m.onmessage=l=>{const{type:g,result:f,error:S,__clSysCall:P}=l.data;P&&m.terminate(),Ye({emit:d,type:g,result:f,error:S,resolve:v,reject:h,isSysCall:P,eventData:l.data})},m.postMessage({data:p})})},dispose:()=>{u=!0,URL.revokeObjectURL(c)},...y}}(a)}function Ce(e,t){let r,n=0;const s=36**t;for(;e.includes(r=re(t))&&++n<s;);return r}function Ze(e){return"#"}function _t(e,t,r="#",n={}){const s=new RegExp(`(^{.*?(.{${t}})})|({.*?(.{${t}})}$)`),o=r.length+2;for(let a=0;a++<e.length;){const i=e.slice(a,a+t+o);if(e.includes(i,a+t+o))for(let c=a+t+o+1;c++<e.length;){const u=e.slice(a,c);if(!e.includes(u,c)){const d=Ce(Object.keys(n),t),y=e.slice(a,c-1);if(s.test(y))break;n[d]=y,e=e.replace(new RegExp(y.replace(/([[{(?)\\])/g,"\\$1"),"g"),`{${r}${d}}`),a+=9;break}}}return e}function St(e,t=6){const r={},n=_t(e,t,"#",r);return JSON.stringify({cache:r,source:n,keyLength:t})}function wt(e,t="#"){const{keyLength:r,cache:n}=e;let s,{source:o}=e;for(;s=new RegExp(`{${t}(.{${r}})}`,"g").exec(o);){const[a,i]=Array.from(s);o=o.replace(new RegExp(a,"g"),n[i])}return o}function bt(e){return wt(JSON.parse(e),"#")}ue=function(e,t){t=t||{};var r=typeof e;if(r==="string"&&e.length>0)return function(n){if(!((n=String(n)).length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(s){var o=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*o;case"weeks":case"week":case"w":return o*Dr;case"days":case"day":case"d":return o*U;case"hours":case"hour":case"hrs":case"hr":case"h":return o*T;case"minutes":case"minute":case"mins":case"min":case"m":return o*H;case"seconds":case"second":case"secs":case"sec":case"s":return o*Y;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}(e);if(r==="number"&&isFinite(e))return t.long?function(n){var s=Math.abs(n);return s>=U?le(n,s,U,"day"):s>=T?le(n,s,T,"hour"):s>=H?le(n,s,H,"minute"):s>=Y?le(n,s,Y,"second"):n+" ms"}(e):function(n){var s=Math.abs(n);return s>=U?Math.round(n/U)+"d":s>=T?Math.round(n/T)+"h":s>=H?Math.round(n/H)+"m":s>=Y?Math.round(n/Y)+"s":n+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))},ue&&ue.__esModule&&Object.prototype.hasOwnProperty.call(ue,"default"),Qe(St,[_t,Ze,Ce,re],{reuse:!1}),Qe(bt,[wt,Ze,Ce,re],{reuse:!1});const Et=Ne(()=>I("TextEncoder")&&I("ReadableStream")&&I("ArrayBuffer")&&I("Uint8Array")&&I("btoa")&&I("atob")&&I("TextDecoder"));async function Mr(e,t=6){if(!I("CompressionStream")||!Et())return St(e,t);const r=function(n){const s=new TextEncoder;return new ReadableStream({start(o){o.enqueue(s.encode(n)),o.close()}})}(e).pipeThrough(new CompressionStream("gzip"));return async function(n){return function(s){return btoa(String.fromCharCode.apply(null,new Uint8Array(s)))}(await async function(s){const o=s.getReader(),a=[];let i=0;for(;;){const{done:d,value:y}=await o.read();if(d)break;a.push(y),i+=y.byteLength}const c=new ArrayBuffer(i);let u=0;for(const d of a){const y=new Uint8Array(d);new Uint8Array(c,u,y.length).set(y),u+=y.length}return c}(n))}(r)}async function Ar(e){return I("DecompressionStream")&&Et()?async function(t){const r=t.getReader(),n=[];let s="";for(;;){const{done:a,value:i}=await r.read();if(a)break;n.push(i)}const o=new TextDecoder("utf-8");for(const a of n)s+=o.decode(a);return s+=o.decode(),s}(function(t){return function(r){return new ReadableStream({start(n){n.enqueue(r),n.close()}})}(function(r){const n=atob(r),s=n.length,o=new Uint8Array(s);for(let a=0;a<s;a++)o[a]=n.charCodeAt(a);return o}(t))}(e).pipeThrough(new DecompressionStream("gzip"))):bt(e)}var k,O,B,M,kt,fe;class Se{constructor(t){k.set(this,{}),O.set(this,void 0),this.config={},this.config=function(r={}){return{dbName:"cl-storage",autoSaveDelay:3e5,zipKeyLength:6,...r}}(t),Z(this,O,new Promise((r,n)=>{this._createHook(pt(this.config)),(async()=>{try{const s=await this.init();Z(this,k,typeof s=="string"?Ir(await Ar(s)):s||{},"f"),r()}catch(s){n(s)}})(),this._createdHook()})),this._createAutoSaveInterval()}_createAutoSaveInterval(){this.config.autoSaveDelay<1||setTimeout(async()=>{const t=await this.getDataSchema();this.autoSave(t),this._createAutoSaveInterval()},this.config.autoSaveDelay)}get length(){return Object.keys(_(this,k,"f")).length}_createHook(t){}_createdHook(){}_setItemBeforeHook(t,r){}_setItemAfterHook(t,r){}_getItemBeforeHook(t){}_getItemAfterHook(t,r){}_removeItemBeforeHook(t){}_removeItemAfterHook(t){}_clearBeforeHook(){}_clearAfterHook(){}_getKeysBeforeHook(){}_getKeysAfterHook(t){}autoSave(t){}async getDataSchema(){return Mr(function(t){xe=0;let r=new Map;const n=z(t,r);return r.clear(),r=null,JSON.stringify(n)}(_(this,k,"f")),this.config.zipKeyLength)}async setItem(t,r){return _(this,O,"f").then(()=>{r=this._setItemBeforeHook(t,r)??r,_(this,k,"f")[t]=r,this._setItemAfterHook(t,r)})}async getItem(t){return _(this,O,"f").then(()=>{this._getItemBeforeHook(t);let r=_(this,k,"f")[t];return r=this._getItemAfterHook(t,r)??r,r})}async removeItem(t){return _(this,O,"f").then(()=>{this._removeItemBeforeHook(t),delete _(this,k,"f")[t],this._removeItemAfterHook(t)})}async clear(){return _(this,O,"f").then(()=>{this._clearBeforeHook(),Z(this,k,{}),this._clearAfterHook()})}async getKeys(){return _(this,O,"f").then(()=>{this._getKeysBeforeHook();let t=Object.keys(_(this,k,"f"));return t=this._getKeysAfterHook(t)??t,t})}}k=new WeakMap,O=new WeakMap;class Rr extends Se{constructor(t){super({...t,autoSaveDelay:0})}init(){return{}}autoSave(t){ne("MemaryStorage(内存存储) 不支持保存数据")}}class $r extends Se{constructor(t){if(!ze("sessionStorage"))return ne("当前浏览器不支持 sessionStorage, 已自动降级为 MemaryStorage"),new Rr(t);super({dbName:"cl-storage",autoSaveDelay:6e4,...t})}init(){const t=this.config.dbName;return sessionStorage.getItem(t)||{}}autoSave(t){const r=this.config.dbName;sessionStorage.setItem(r,t)}}class xr extends Se{constructor(t){if(ze("localStorage"))return ne("当前浏览器不支持 localStorage, 已自动降级为 SessionStorage"),new $r(t);super({dbName:"cl-storage",autoSaveDelay:6e4,...t})}init(){const t=this.config.dbName;return localStorage.getItem(t)||{}}autoSave(t){const r=this.config.dbName;localStorage.setItem(r,t)}}const Ve="value";class Cr extends Se{constructor(t){if(!ze("indexedDB"))return ne("当前浏览器不支持 IndexedDB, 已自动降级为 LocalStorage"),new xr(t);super({dbName:"cl-storage",autoSaveDelay:6e4,...t}),B.add(this),M.set(this,void 0)}autoSave(t){_(this,B,"m",fe).call(this,t)}init(){const t=this.config.dbName,r=indexedDB.open(t,1);return new Promise((n,s)=>{r.addEventListener("error",s),r.addEventListener("upgradeneeded",()=>{const o=Z(this,M,r.result);o.objectStoreNames.contains(t)||(o.createObjectStore(t),_(this,B,"m",fe).call(this,""))}),r.addEventListener("success",()=>{Z(this,M,_(this,M,"f")??r.result),_(this,B,"m",kt).call(this).then(n,s)})})}async forceSave(){return _(this,B,"m",fe).call(this,await this.getDataSchema())}}M=new WeakMap,B=new WeakSet,kt=async function(){const e=_(this,M,"f").transaction([this.config.dbName],"readonly").objectStore(this.config.dbName).get(Ve);return new Promise((t,r)=>{e.addEventListener("error",r),e.addEventListener("success",()=>{t(e.result)})})},fe=async function(e){const t=_(this,M,"f").transaction([this.config.dbName],"readwrite").objectStore(this.config.dbName).put(e,Ve);return new Promise((r,n)=>{t.addEventListener("error",n),t.addEventListener("success",()=>{r(t.result)})})};const Q=new Cr({dbName:at,autoSaveDelay:0}),Fr={async getItem(e){return await Q.getItem(e)},async setItem(e,t){await Q.setItem(e,t),Q.forceSave()},async removeItem(e){await Q.removeItem(e),Q.forceSave()}},Lr=e=>({addFlow:t=>{e(r=>Ie(r,n=>{const s={...t,id:`local-${Mt(16)}`,creator:"test",account:t.amountDistributions[0].account,amount:String(t.amountDistributions.reduce((o,a)=>o+ +a.amount,0)),createTime:new Date().toLocaleString(),updateTime:new Date().toLocaleString()};n.flows.unshift(s)}))},updateFlow:(t,r)=>{e(n=>Ie(n,s=>{const o=s.flows.findIndex(a=>a.id===t);o<0||s.flows.splice(o,1,{...s.flows[o],...r,id:s.flows[o].id,amount:String(r.amountDistributions.reduce((a,i)=>a+ +i.amount,0)),updateTime:new Date().toLocaleString()})}))},deleteFlow:t=>{e(r=>Ie(r,n=>{n.flows.splice(n.flows.findIndex(s=>s.id===t),1)}))}}),It=ot(ur((e,t)=>({flows:[],...Lr(e)}),{name:at,storage:ct(()=>Fr)})),Hr=e=>It(it(e)),Tr=()=>It.getState();function Ur(e){const{if:t,children:r}=e;return t?r:null}export{Ur as S,it as a,Hr as b,ot as c,Tr as g,Nr as u};
