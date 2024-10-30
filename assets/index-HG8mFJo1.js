import{x as e,v as j,r as h,Q as u}from"./index-BWFAPQ-v.js";import{d as r,N as s,S as z,b as g,O as C,l as k,c as w,a as p,F as v,z as L}from"./index-Cf_foYDs.js";import{G as d,a as b}from"./index-gIhoy8k6.js";import{L as A}from"./index-DBx4hCvh.js";function G(a){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"},child:[]}]})(a)}function E(a){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1"},child:[]},{tag:"path",attr:{d:"M8 16h8"},child:[]},{tag:"path",attr:{d:"M8.322 12.582l7.956 .836"},child:[]},{tag:"path",attr:{d:"M8.787 9.168l7.826 1.664"},child:[]},{tag:"path",attr:{d:"M10.096 5.764l7.608 2.472"},child:[]}]})(a)}function S(a){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M176.938 24.03V75.44c-52.96 6.715-94.96 48.652-101.72 101.593H24.564v160.096h50.75c7.034 52.62 48.895 94.247 101.624 100.938V489.5H337v-51.374c53.01-6.453 95.158-48.183 102.22-101h50.811V177.03h-50.717C432.526 123.893 390.238 81.85 337 75.376V24.03H176.938zm18.687 18.69h122.688v139.75L257.25 243.5l-61.625-61.625V42.72zm61.656 17.436c-24.524 0-44.405 19.88-44.405 44.407 0 24.525 19.88 44.406 44.406 44.406 24.524 0 44.376-19.882 44.376-44.407 0-24.526-19.85-44.407-44.375-44.407zM43.25 195.72h139.78l61.032 61.03-61.718 61.688H43.25v-122.72zm288.25 0h139.844v122.718H332.188L270.5 256.75l61-61.03zm-226.406 16.624c-24.525 0-44.406 19.88-44.406 44.406 0 24.525 19.88 44.406 44.406 44.406 24.525 0 44.406-19.88 44.406-44.406 0-24.523-19.88-44.406-44.406-44.406zm304.344 0c-24.526 0-44.407 19.88-44.407 44.406 0 24.525 19.882 44.406 44.408 44.406 24.525 0 44.406-19.88 44.406-44.406 0-24.523-19.88-44.406-44.406-44.406zM257.25 269.938L318.313 331v139.813H195.625v-139.22l61.625-61.656zm.03 94.562c-24.524 0-44.405 19.88-44.405 44.406 0 24.525 19.88 44.406 44.406 44.406 24.524 0 44.376-19.88 44.376-44.406 0-24.525-19.85-44.406-44.375-44.406z"},child:[]}]})(a)}const F=[{name:"流水",path:"/flow",deepMatch:!0,icon:e.jsx(E,{})},{name:"日志",path:"/log-history",icon:e.jsx(b,{})},{name:"游戏",path:"/game-center",deepMatch:!0,icon:e.jsx(S,{})}],H=r(A)`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${s("$style")}

  ${a=>{const{$isActive:o}=a;if(o)return"color: var(--color-active);"}}
`,N=r(z)`
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-button);

  ${s("$style")}
`,B=r(g)`
  width: 100%;
  height: 100%;
  font-size: 2.4rem;

  ${s("$style")}
`,T=r.span`
  font-size: 1.2rem;
  line-height: 1;

  ${s.bind(null,"$style")}
`;function O(a){const{direction:o,needActiveStyle:l,shadowOption:x,className:f,appListHander:m=t=>t}=a,i=j(),n=h.useMemo(()=>i.at(-1),[i]),$=h.useCallback((t,M=!1)=>M?l&&i.some(c=>!!u((c==null?void 0:c.pathname)||"",t)):l&&!!u((n==null?void 0:n.pathname)||"",t),[l,n,i]),y=h.useMemo(()=>m(F),[m]);return e.jsx(g,{$wrap:C.WRAP,$direction:o,className:f,children:y.map(t=>e.jsx(H,{to:t.path,$isActive:$(t.path,t.deepMatch),$style:t.wrapperStyle,onClick:()=>k.click("app-list-click",t),children:e.jsxs(N,{$direction:w.COLUMN,$alignItems:p.CENTER,$justifyContent:v.BETWEEN,$style:t.contentStyle,...x,children:[e.jsx(B,{$style:t.iconStyle,$alignItems:p.CENTER,$justifyContent:v.CENTER,children:e.jsx(L,{if:typeof t.icon=="string",fullback:t.icon,children:e.jsx("span",{children:t.icon})})}),e.jsx(T,{$style:t.labelStyle,children:t.name})]})},t.path))})}export{O as A,G as T};
