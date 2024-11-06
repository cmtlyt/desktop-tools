import{y as e,x as M,r as m,Q as d}from"./index-DIsRsnX7.js";import{d as a,R as c,S as L,b as x,U as j,l as b,c as A,a as p,F as u,y as w}from"./index-DcfwSh00.js";import{b as C}from"./index-C6McjbsO.js";import{b as E}from"./index-Wp-boRJJ.js";import{G as v,L as S}from"./index-9IP8vwo3.js";function H(s){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M176.938 24.03V75.44c-52.96 6.715-94.96 48.652-101.72 101.593H24.564v160.096h50.75c7.034 52.62 48.895 94.247 101.624 100.938V489.5H337v-51.374c53.01-6.453 95.158-48.183 102.22-101h50.811V177.03h-50.717C432.526 123.893 390.238 81.85 337 75.376V24.03H176.938zm18.687 18.69h122.688v139.75L257.25 243.5l-61.625-61.625V42.72zm61.656 17.436c-24.524 0-44.405 19.88-44.405 44.407 0 24.525 19.88 44.406 44.406 44.406 24.524 0 44.376-19.882 44.376-44.407 0-24.526-19.85-44.407-44.375-44.407zM43.25 195.72h139.78l61.032 61.03-61.718 61.688H43.25v-122.72zm288.25 0h139.844v122.718H332.188L270.5 256.75l61-61.03zm-226.406 16.624c-24.525 0-44.406 19.88-44.406 44.406 0 24.525 19.88 44.406 44.406 44.406 24.525 0 44.406-19.88 44.406-44.406 0-24.523-19.88-44.406-44.406-44.406zm304.344 0c-24.526 0-44.407 19.88-44.407 44.406 0 24.525 19.882 44.406 44.408 44.406 24.525 0 44.406-19.88 44.406-44.406 0-24.523-19.88-44.406-44.406-44.406zM257.25 269.938L318.313 331v139.813H195.625v-139.22l61.625-61.656zm.03 94.562c-24.524 0-44.405 19.88-44.405 44.406 0 24.525 19.88 44.406 44.406 44.406 24.524 0 44.376-19.88 44.376-44.406 0-24.525-19.85-44.406-44.375-44.406z"},child:[]}]})(s)}function O(s){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M239 263h43v213h-43zM447 36v211H61V36zM299 197.33v-25.14l46-23.35-7.24-14.27L307.44 150A59.58 59.58 0 1 0 195 122.42a61.11 61.11 0 0 0 9.45 31.91l-32.75-14.9-6.63 14.57L210 174.43v25l-38.74 19.66 7.24 14.27L228.45 208h55.37l52.76 24 6.63-14.56zm-13.45-44l-2.55 2.31V192h-57v-36.36l-2.17-2.34a43.88 43.88 0 0 1 .17-61.76 43.59 43.59 0 1 1 61.54 61.75zm-46.76-1.23a11.12 11.12 0 1 0-11.12-11.12 11.12 11.12 0 0 0 11.12 11.08zm26 16.94l-9.93-17.15L245 169zm16.95-28.06a11.12 11.12 0 1 0-11.12 11.12 11.12 11.12 0 0 0 11.14-11.16zM155.18 384.75c-24.85 0-45 3.81-45 8.5 0 4.69 20.15 8.5 45 8.5s45-3.81 45-8.5c0-4.69-20.18-8.5-45-8.5zM446.55 332c-16.29 0-29.5 2.19-29.5 4.89 0 2.7 13.21 4.89 29.5 4.89s29.5-2.19 29.5-4.89c0-2.7-13.21-4.89-29.5-4.89zm-390.1-36.75c-11.32 0-20.5 1.34-20.5 3s9.18 3 20.5 3 20.5-1.34 20.5-3-9.18-3-20.5-3zm280.22-.42c-11.32 0-20.5 1.43-20.5 3.2 0 1.77 9.18 3.2 20.5 3.2s20.5-1.43 20.5-3.2c0-1.77-9.17-3.2-20.5-3.2zm62.69 122.41c-39.76 0-72 7.81-72 17.45s32.24 17.45 72 17.45 72-7.81 72-17.45-32.23-17.45-72-17.45z"},child:[]}]})(s)}const k=[{name:"流水",path:"/flow",deepMatch:!0,icon:e.jsx(C,{})},{name:"日志",path:"/log-history",icon:e.jsx(E,{})},{name:"游戏",path:"/game-center",deepMatch:!0,icon:e.jsx(H,{})}],F=a(S)`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${c("$style")}

  ${s=>{const{$isActive:o}=s;if(o)return"color: var(--color-active);"}}
`,N=a(L)`
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-button);

  ${c("$style")}
`,V=a(x)`
  width: 100%;
  height: 100%;
  font-size: 2.4rem;

  ${c("$style")}
`,B=a.span`
  font-size: 1.2rem;
  line-height: 1;

  ${c.bind(null,"$style")}
`;function P(s){const{direction:o,needActiveStyle:r,shadowOption:y,className:z,appListHander:h=t=>t}=s,i=M(),n=m.useMemo(()=>i.at(-1),[i]),f=m.useCallback((t,g=!1)=>g?r&&i.some(l=>!!d((l==null?void 0:l.pathname)||"",t)):r&&!!d((n==null?void 0:n.pathname)||"",t),[r,n,i]),$=m.useMemo(()=>h(k),[h]);return e.jsx(x,{$wrap:j.WRAP,$direction:o,className:z,children:$.map(t=>e.jsx(F,{to:t.path,$isActive:f(t.path,t.deepMatch),$style:t.wrapperStyle,onClick:()=>b.click("app-list-click",t),children:e.jsxs(N,{$direction:A.COLUMN,$alignItems:p.CENTER,$justifyContent:u.BETWEEN,$style:t.contentStyle,...y,children:[e.jsx(V,{$style:t.iconStyle,$alignItems:p.CENTER,$justifyContent:u.CENTER,children:e.jsx(w,{if:typeof t.icon=="string",fullback:t.icon,children:()=>e.jsx("span",{children:t.icon})})}),e.jsx(B,{$style:t.labelStyle,children:t.name})]})},t.path))})}export{P as A,O as G};
