import{r as s,x as r}from"./index-DQHwS1gT.js";import{d as h,b as j,c as v,w as x,n as b,B as w,j as I,l as C}from"./index-BHQnjDV8.js";import{G as R}from"./iconBase-DKtpF4Ea.js";import{L as B}from"./index-C91J-VvU.js";import{i as m}from"./is-phone-Cn6rv9_e.js";import{l as L}from"./index-DHUDzx2j.js";function $(i){return R({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0 5C0 3.34315 1.34315 2 3 2H21C22.6569 2 24 3.34315 24 5V19C24 20.6569 22.6569 22 21 22H3C1.34315 22 0 20.6569 0 19V5ZM3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44771 4 3 4Z",fill:"currentColor"},child:[]}]})(i)}const N=h(j)`
  gap: ${i=>{const{$gap:e}=i;if(typeof e=="string"){const n=parseFloat(e);return!isNaN(n)&&String(n)===e?`${e}rem`:e}return`${e}rem`}};
`,H=h($)`
  height: 100%;
`,P=h.label`
  & > input {
    margin: 0;
    padding: 0;
    width: 0;
    height: 0;
    visibility: hidden;
    overflow: hidden;
  }
`,Z=i=>{const{action:e,text:n,to:o,logInfo:a,noLog:l,onClick:c,checkBtn:t,...u}=i,p=s.useRef(!1),k={text:n,buttonProps:u,to:o,checked:t==null?void 0:t.value,...a},g=s.useMemo(()=>{if(!l)return e||(o?"button-list-link-click":t?"button-list-checkbtn-click":"button-list-click")},[e,o,l,t]),f=d=>r.jsx(b,{...u,...d,onClick:M=>{if(p.current)return p.current=!1,l?void 0:C.click("more-button-click");g&&C.click(g,k),t==null||t.onChange(!t.value),c==null||c(M)},children:n});if(t){const{value:d}=t;return r.jsxs(P,{children:[r.jsx("input",{type:"checkbox",checked:d,onChange:()=>{}}),f({$presetTheme:w[d?"PRIMARY":"INFO"]})]})}return r.jsx(x,{when:!I(o),fullback:f(),children:()=>r.jsx(B,{to:o,children:f()})})};function G(i){const{buttons:e,wrapperProps:n,$gap:o=1,className:a}=i,l=s.useMemo(()=>e.filter(t=>!t.hidden),[e]),c=s.useMemo(()=>r.jsx(N,{...n,$gap:o,$direction:v[m()?"COLUMN":"ROW"],className:a,children:l.map((t,u)=>s.createElement(Z,{...t,key:u}))}),[l,o,n,a]);return r.jsx(x,{when:m()&&e.length>1,fullback:c,children:()=>r.jsx(L,{content:c,trigger:"click",children:r.jsx(b,{children:r.jsx(H,{})})})})}export{G as B};
