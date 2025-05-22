import{r as s,j as r,y as j,l as g}from"./index-m0fknXHx.js";import{d as p,b as v,c as I,e as x,B as R}from"./button-DDtcZCnc.js";import{G as w}from"./iconBase-DSO4SzvC.js";import{S as b}from"./index-B4g9YTQJ.js";import{L as B}from"./index-BEm_9xIx.js";import{i as C}from"./is-phone-BQf9901K.js";import{e as L}from"./index-FHc5WFOz.js";function $(i){return w({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0 5C0 3.34315 1.34315 2 3 2H21C22.6569 2 24 3.34315 24 5V19C24 20.6569 22.6569 22 21 22H3C1.34315 22 0 20.6569 0 19V5ZM3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44771 4 3 4Z",fill:"currentColor"},child:[]}]})(i)}const N=p(v)`
  gap: ${i=>{const{$gap:e}=i;if(typeof e=="string"){const n=parseFloat(e);return!isNaN(n)&&String(n)===e?`${e}rem`:e}return`${e}rem`}};
`,y=p($)`
  height: 100%;
`,H=p.label`
  & > input {
    margin: 0;
    padding: 0;
    width: 0;
    height: 0;
    visibility: hidden;
    overflow: hidden;
  }
`,P=i=>{const{action:e,text:n,to:o,logInfo:a,noLog:l,onClick:c,checkBtn:t,...u}=i,h=s.useRef(!1),k={text:n,buttonProps:u,to:o,checked:t==null?void 0:t.value,...a},m=s.useMemo(()=>{if(!l)return e||(o?"button-list-link-click":t?"button-list-checkbtn-click":"button-list-click")},[e,o,l,t]),f=d=>r.jsx(x,{...u,...d,onClick:M=>{if(h.current)return h.current=!1,l?void 0:g.click("more-button-click");m&&g.click(m,k),t==null||t.onChange(!t.value),c==null||c(M)},children:n});if(t){const{value:d}=t;return r.jsxs(H,{children:[r.jsx("input",{type:"checkbox",checked:d,onChange:()=>{}}),f({$presetTheme:R[d?"PRIMARY":"INFO"]})]})}return r.jsx(b,{when:!j(o),fullback:f(),children:()=>r.jsx(B,{to:o,children:f()})})};function G(i){const{buttons:e,wrapperProps:n,$gap:o=1,className:a}=i,l=s.useMemo(()=>e.filter(t=>!t.hidden),[e]),c=s.useMemo(()=>r.jsx(N,{...n,$gap:o,$direction:I[C()?"COLUMN":"ROW"],className:a,children:l.map((t,u)=>s.createElement(P,{...t,key:u}))}),[l,o,n,a]);return r.jsx(b,{when:C()&&e.length>1,fullback:c,children:()=>r.jsx(L,{content:c,trigger:"click",children:r.jsx(x,{children:r.jsx(y,{})})})})}export{G as B};
