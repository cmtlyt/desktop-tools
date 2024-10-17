import{r as p,p as W,o as h,u as X}from"./index-Svs3ILB_.js";import{c as Z,u as z}from"./index-DD5AjTiC.js";import{P as F,F as N}from"./flow-form-Cws6eucc.js";import{B as rr}from"./flow-Bwqlsksu.js";import{_ as w,f as A,g as x,h as m,l as P,A as tr,a as er,B as nr}from"./index-CkkFVO2k.js";import{f as or}from"./layout-B_z3JHBG.js";const ir=Z(e=>({id:"",setId:t=>e({id:t})})),V=e=>ir(z(e));function l(e){return typeof e=="function"}function k(e){var t=function(n){Error.call(n),n.stack=new Error().stack},r=e(t);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var _=k(function(e){return function(r){e(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(n,o){return o+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function C(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var S=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,r,n,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=w(s),c=u.next();!c.done;c=u.next()){var E=c.value;E.remove(this)}}catch(a){t={error:a}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(t)throw t.error}}else s.remove(this);var I=this.initialTeardown;if(l(I))try{I()}catch(a){i=a instanceof _?a.errors:[a]}var O=this._finalizers;if(O){this._finalizers=null;try{for(var b=w(O),f=b.next();!f.done;f=b.next()){var Q=f.value;try{T(Q)}catch(a){i=i??[],a instanceof _?i=A(A([],x(i)),x(a.errors)):i.push(a)}}}catch(a){n={error:a}}finally{try{f&&!f.done&&(o=b.return)&&o.call(b)}finally{if(n)throw n.error}}}if(i)throw new _(i)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)T(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(t)}},e.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},e.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},e.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&C(r,t)},e.prototype.remove=function(t){var r=this._finalizers;r&&C(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),D=S.EMPTY;function Y(e){return e instanceof S||e&&"closed"in e&&l(e.remove)&&l(e.add)&&l(e.unsubscribe)}function T(e){l(e)?e():e.unsubscribe()}var L={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},H={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return setTimeout.apply(void 0,A([e,t],x(r)))},clearTimeout:function(e){var t=H.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function sr(e){H.setTimeout(function(){throw e})}function U(){}function y(e){e()}var $=function(e){m(t,e);function t(r){var n=e.call(this)||this;return n.isStopped=!1,r?(n.destination=r,Y(r)&&r.add(n)):n.destination=lr,n}return t.create=function(r,n,o){return new j(r,n,o)},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(S),ur=Function.prototype.bind;function g(e,t){return ur.call(e,t)}var cr=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(n){v(n)}},e.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(n){v(n)}else v(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(r){v(r)}},e}(),j=function(e){m(t,e);function t(r,n,o){var i=e.call(this)||this,s;if(l(r)||!r)s={next:r??void 0,error:n??void 0,complete:o??void 0};else{var u;i&&L.useDeprecatedNextContext?(u=Object.create(r),u.unsubscribe=function(){return i.unsubscribe()},s={next:r.next&&g(r.next,u),error:r.error&&g(r.error,u),complete:r.complete&&g(r.complete,u)}):s=r}return i.destination=new cr(s),i}return t}($);function v(e){sr(e)}function ar(e){throw e}var lr={closed:!0,next:U,error:ar,complete:U},fr=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function pr(e){return e}function hr(e){return e.length===0?pr:e.length===1?e[0]:function(r){return e.reduce(function(n,o){return o(n)},r)}}var R=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(t,r,n){var o=this,i=br(t)?t:new j(t,r,n);return y(function(){var s=o,u=s.operator,c=s.source;i.add(u?u.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},e.prototype.forEach=function(t,r){var n=this;return r=B(r),new r(function(o,i){var s=new j({next:function(u){try{t(u)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});n.subscribe(s)})},e.prototype._subscribe=function(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)},e.prototype[fr]=function(){return this},e.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return hr(t)(this)},e.prototype.toPromise=function(t){var r=this;return t=B(t),new t(function(n,o){var i;r.subscribe(function(s){return i=s},function(s){return o(s)},function(){return n(i)})})},e.create=function(t){return new e(t)},e}();function B(e){var t;return(t=e??L.Promise)!==null&&t!==void 0?t:Promise}function dr(e){return e&&l(e.next)&&l(e.error)&&l(e.complete)}function br(e){return e&&e instanceof $||dr(e)&&Y(e)}var vr=k(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),q=function(e){m(t,e);function t(){var r=e.call(this)||this;return r.closed=!1,r.currentObservers=null,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return t.prototype.lift=function(r){var n=new M(this,this);return n.operator=r,n},t.prototype._throwIfClosed=function(){if(this.closed)throw new vr},t.prototype.next=function(r){var n=this;y(function(){var o,i;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var s=w(n.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(r)}}catch(E){o={error:E}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},t.prototype.error=function(r){var n=this;y(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=r;for(var o=n.observers;o.length;)o.shift().error(r)}})},t.prototype.complete=function(){var r=this;y(function(){if(r._throwIfClosed(),!r.isStopped){r.isStopped=!0;for(var n=r.observers;n.length;)n.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var r;return((r=this.observers)===null||r===void 0?void 0:r.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(r){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,r)},t.prototype._subscribe=function(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)},t.prototype._innerSubscribe=function(r){var n=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?D:(this.currentObservers=null,u.push(r),new S(function(){n.currentObservers=null,C(u,r)}))},t.prototype._checkFinalizedStatuses=function(r){var n=this,o=n.hasError,i=n.thrownError,s=n.isStopped;o?r.error(i):s&&r.complete()},t.prototype.asObservable=function(){var r=new R;return r.source=this,r},t.create=function(r,n){return new M(r,n)},t}(R),M=function(e){m(t,e);function t(r,n){var o=e.call(this)||this;return o.destination=r,o.source=n,o}return t.prototype.next=function(r){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.next)===null||o===void 0||o.call(n,r)},t.prototype.error=function(r){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.error)===null||o===void 0||o.call(n,r)},t.prototype.complete=function(){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.complete)===null||n===void 0||n.call(r)},t.prototype._subscribe=function(r){var n,o;return(o=(n=this.source)===null||n===void 0?void 0:n.subscribe(r))!==null&&o!==void 0?o:D},t}(q),d=(e=>(e.SAVE="save",e.SAVE_SUCCESS="save_success",e))(d||{});const G=new q;function J(e){G.next(e)}function K(e,t){const r=p.useMemo(()=>t&&(Array.isArray(t)?t:[t]),[t]);p.useEffect(()=>{const n=G.subscribe(o=>{r&&!r.includes(o.type)||e(o)});return()=>{n.unsubscribe()}},[e,r])}function Ar(){const{id:e}=W(),{setId:t}=V("setId"),r=p.useRef({}),n=e?F.EDITOR:F.CREATE;p.useEffect(()=>{t(e||"")},[t,e]),K(i=>{if(i.id!==e)return P.error("action.id !== id",i);r.current.form.validateFields().then(()=>{r.current.form.submit()})},d.SAVE);const o=p.useCallback(i=>{window.logger.todo("flowInfo",i),J({id:e,type:d.SAVE_SUCCESS})},[e]);return h.jsx(tr,{onFirstAppear:()=>P.appear("flow-editor",{id:e,pageStatus:n}),children:h.jsx(er,{children:h.jsx(N,{ref:r,pageStatus:n,onFinish:o})})})}function yr(){const{id:e}=V("id"),{showMessage:t}=or("showMessage"),r=X();return K(n=>{if(n.id!==e)return P.error("action.id !== id",n);t({type:"success",content:"保存成功",onClose(){r("/flow")}})},d.SAVE_SUCCESS),h.jsx(rr,{buttons:[{text:"取消",onClick(){r(-1)}},{text:"保存",$presetTheme:nr.PRIMARY,onClick(){J({id:e,type:d.SAVE})}}]})}const xr={title:"编辑",needBackIcon:!0,rightArea:h.jsx(yr,{})};async function Pr({params:e}){return{id:e.id||""}}export{Ar as Component,xr as handle,Pr as loader};