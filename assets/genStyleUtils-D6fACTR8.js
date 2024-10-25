import{p as Z,q as B,n as ie,o as oe,d as M,al as $,a as F,f as y,_ as z,E as Y,av as me,aw as H,ax as D,R as K,ay as xe,r as ee,j as te,t as ke,az as Pe,aA as Te,aB as be,aC as Ve}from"./index-DVtMNKSb.js";var ue=Z(function n(){B(this,n)}),le="CALC_UNIT",je=new RegExp(le,"g");function L(n){return typeof n=="number"?"".concat(n).concat(le):n}var we=function(n){ie(t,n);var s=oe(t);function t(r,e){var a;B(this,t),a=s.call(this),M($(a),"result",""),M($(a),"unitlessCssVar",void 0),M($(a),"lowPriority",void 0);var i=F(r);return a.unitlessCssVar=e,r instanceof t?a.result="(".concat(r.result,")"):i==="number"?a.result=L(r):i==="string"&&(a.result=r),a}return Z(t,[{key:"add",value:function(e){return e instanceof t?this.result="".concat(this.result," + ").concat(e.getResult()):(typeof e=="number"||typeof e=="string")&&(this.result="".concat(this.result," + ").concat(L(e))),this.lowPriority=!0,this}},{key:"sub",value:function(e){return e instanceof t?this.result="".concat(this.result," - ").concat(e.getResult()):(typeof e=="number"||typeof e=="string")&&(this.result="".concat(this.result," - ").concat(L(e))),this.lowPriority=!0,this}},{key:"mul",value:function(e){return this.lowPriority&&(this.result="(".concat(this.result,")")),e instanceof t?this.result="".concat(this.result," * ").concat(e.getResult(!0)):(typeof e=="number"||typeof e=="string")&&(this.result="".concat(this.result," * ").concat(e)),this.lowPriority=!1,this}},{key:"div",value:function(e){return this.lowPriority&&(this.result="(".concat(this.result,")")),e instanceof t?this.result="".concat(this.result," / ").concat(e.getResult(!0)):(typeof e=="number"||typeof e=="string")&&(this.result="".concat(this.result," / ").concat(e)),this.lowPriority=!1,this}},{key:"getResult",value:function(e){return this.lowPriority||e?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(e){var a=this,i=e||{},o=i.unit,g=!0;return typeof o=="boolean"?g=o:Array.from(this.unitlessCssVar).some(function(U){return a.result.includes(U)})&&(g=!1),this.result=this.result.replace(je,g?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),t}(ue),Ae=function(n){ie(t,n);var s=oe(t);function t(r){var e;return B(this,t),e=s.call(this),M($(e),"result",0),r instanceof t?e.result=r.result:typeof r=="number"&&(e.result=r),e}return Z(t,[{key:"add",value:function(e){return e instanceof t?this.result+=e.result:typeof e=="number"&&(this.result+=e),this}},{key:"sub",value:function(e){return e instanceof t?this.result-=e.result:typeof e=="number"&&(this.result-=e),this}},{key:"mul",value:function(e){return e instanceof t?this.result*=e.result:typeof e=="number"&&(this.result*=e),this}},{key:"div",value:function(e){return e instanceof t?this.result/=e.result:typeof e=="number"&&(this.result/=e),this}},{key:"equal",value:function(){return this.result}}]),t}(ue),Re=function(s,t){var r=s==="css"?we:Ae;return function(e){return new r(e,t)}},re=function(s,t){return"".concat([t,s.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-"))};function ne(n,s,t,r){var e=y({},s[n]);if(r!=null&&r.deprecatedTokens){var a=r.deprecatedTokens;a.forEach(function(o){var g=z(o,2),U=g[0],w=g[1];if(e!=null&&e[U]||e!=null&&e[w]){var E;(E=e[w])!==null&&E!==void 0||(e[w]=e==null?void 0:e[U])}})}var i=y(y({},t),e);return Object.keys(i).forEach(function(o){i[o]===s[o]&&delete i[o]}),i}var ce=typeof CSSINJS_STATISTIC<"u",N=!0;function fe(){for(var n=arguments.length,s=new Array(n),t=0;t<n;t++)s[t]=arguments[t];if(!ce)return Object.assign.apply(Object,[{}].concat(s));N=!1;var r={};return s.forEach(function(e){if(F(e)==="object"){var a=Object.keys(e);a.forEach(function(i){Object.defineProperty(r,i,{configurable:!0,enumerable:!0,get:function(){return e[i]}})})}}),N=!0,r}var se={};function _e(){}var Ue=function(s){var t,r=s,e=_e;return ce&&typeof Proxy<"u"&&(t=new Set,r=new Proxy(s,{get:function(i,o){return N&&t.add(o),i[o]}}),e=function(i,o){var g;se[i]={global:Array.from(t),component:y(y({},(g=se[i])===null||g===void 0?void 0:g.component),o)}}),{token:r,keys:t,flush:e}};function ae(n,s,t){if(typeof t=="function"){var r;return t(fe(s,(r=s[n])!==null&&r!==void 0?r:{}))}return t??{}}function Ee(n){return n==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return"max(".concat(r.map(function(a){return Y(a)}).join(","),")")},min:function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return"min(".concat(r.map(function(a){return Y(a)}).join(","),")")}}}var Ie=function(){return{}};function Oe(n){var s=n.useCSP,t=s===void 0?Ie:s,r=n.useToken,e=n.usePrefix,a=n.getResetStyles,i=n.getCommonStyle,o=n.getCompUnitless;function g(u,A,v,l){var x=Array.isArray(u)?u[0]:u;function k(c){return"".concat(String(x)).concat(c.slice(0,1).toUpperCase()).concat(c.slice(1))}var C=(l==null?void 0:l.unitless)||{},T=typeof o=="function"?o(u):{},h=y(y({},T),{},M({},k("zIndexPopup"),!0));Object.keys(C).forEach(function(c){h[k(c)]=C[c]});var P=y(y({},l),{},{unitless:h,prefixToken:k}),S=w(u,A,v,P),b=U(x,v,P);return function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c,p=S(c,f),d=z(p,2),V=d[1],j=b(f),m=z(j,2),R=m[0],I=m[1];return[R,V,I]}}function U(u,A,v){var l=v.unitless,x=v.injectStyle,k=x===void 0?!0:x,C=v.prefixToken,T=v.ignore,h=function(b){var c=b.rootCls,f=b.cssVar,p=f===void 0?{}:f,d=r(),V=d.realToken;return xe({path:[u],prefix:p.prefix,key:p.key,unitless:l,ignore:T,token:V,scope:c},function(){var j=ae(u,V,A),m=ne(u,V,j,{deprecatedTokens:v==null?void 0:v.deprecatedTokens});return Object.keys(j).forEach(function(R){m[C(R)]=m[R],delete m[R]}),m}),null},P=function(b){var c=r(),f=c.cssVar;return[function(p){return k&&f?K.createElement(K.Fragment,null,K.createElement(h,{rootCls:b,cssVar:f,component:u}),p):p},f==null?void 0:f.key]};return P}function w(u,A,v){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},x=Array.isArray(u)?u:[u,u],k=z(x,1),C=k[0],T=x.join("-");return function(h){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:h,S=r(),b=S.theme,c=S.realToken,f=S.hashId,p=S.token,d=S.cssVar,V=e(),j=V.rootPrefixCls,m=V.iconPrefixCls,R=t(),I=d?"css":"js",ve=me(function(){var _=new Set;return d&&Object.keys(l.unitless||{}).forEach(function(q){_.add(H(q,d.prefix)),_.add(H(q,re(C,d.prefix)))}),Re(I,_)},[I,C,d==null?void 0:d.prefix]),J=Ee(I),he=J.max,de=J.min,G={theme:b,token:p,hashId:f,nonce:function(){return R.nonce},clientOnly:l.clientOnly,layer:{name:"antd"},order:l.order||-999};D(y(y({},G),{},{clientOnly:!1,path:["Shared",j]}),function(){return typeof a=="function"?a(p):[]});var ye=D(y(y({},G),{},{path:[T,h,m]}),function(){if(l.injectStyle===!1)return[];var _=Ue(p),q=_.token,ge=_.flush,O=ae(C,c,v),Ce=".".concat(h),Q=ne(C,c,O,{deprecatedTokens:l.deprecatedTokens});d&&F(O)==="object"&&Object.keys(O).forEach(function(X){O[X]="var(".concat(H(X,re(C,d.prefix)),")")});var W=fe(q,{componentCls:Ce,prefixCls:h,iconCls:".".concat(m),antCls:".".concat(j),calc:ve,max:he,min:de},d?O:Q),Se=A(W,{hashId:f,prefixCls:h,rootPrefixCls:j,iconPrefixCls:m});ge(C,Q);var pe=typeof i=="function"?i(W,h,P,l.resetFont):null;return[l.resetStyle===!1?null:pe,Se]});return[ye,f]}}function E(u,A,v){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},x=w(u,A,v,y({resetStyle:!1,order:-998},l)),k=function(T){var h=T.prefixCls,P=T.rootCls,S=P===void 0?h:P;return x(h,S),null};return k}return{genStyleHooks:g,genSubStyleComponent:E,genComponentStyleHook:w}}const{genStyleHooks:qe,genComponentStyleHook:$e,genSubStyleComponent:ze}=Oe({usePrefix:()=>{const{getPrefixCls:n,iconPrefixCls:s}=ee.useContext(te);return{rootPrefixCls:n(),iconPrefixCls:s}},useToken:()=>{const[n,s,t,r,e]=ke();return{theme:n,realToken:s,hashId:t,token:r,cssVar:e}},useCSP:()=>{const{csp:n,iconPrefixCls:s}=ee.useContext(te);return Pe(s,n),n??{}},getResetStyles:n=>[{"&":Te(n)}],getCommonStyle:be,getCompUnitless:()=>Ve});export{ze as a,$e as b,qe as g,fe as m};
