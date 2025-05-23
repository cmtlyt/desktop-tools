import{r as e,j as r}from"./index-Bl_K51Ya.js";import{d as t,u as x,b as i,S as w}from"./button-DslU_EYW.js";import{D as A}from"./index-8OQC0R1D.js";import{B as W}from"./index-94h8NUV9.js";const f=t(i)`
  overflow: hidden;
`,b=t.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,I=e.forwardRef(function(c,h){const{leftArea:m,rightArea:p,children:u}=c,o=e.useRef(null),s=e.useRef(null),[l,g]=e.useState({leftAreaWidth:0,rightAreaWidth:0}),a=x(),n=e.useCallback(()=>{const d={leftAreaWidth:0,rightAreaWidth:0};o.current&&(d.leftAreaWidth=o.current.offsetWidth/a),s.current&&(d.rightAreaWidth=s.current.offsetWidth/a),g(d)},[a]);return e.useEffect(n,[a,n]),e.useImperativeHandle(h,()=>({updateSize:n})),r.jsxs(b,{style:{"--left-area-width":`${l.leftAreaWidth}rem`,"--right-area-width":`${l.rightAreaWidth}rem`},children:[r.jsx(f,{children:r.jsx(i,{ref:o,children:m})}),r.jsx(i,{children:u}),r.jsx(f,{children:r.jsx(i,{ref:s,children:p})})]})}),S=t.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,k=t(A)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,z=t(w)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`,E=t(i)`
  padding: var(--page-padding);
  flex-direction: column;
`,H=t(W)`
  padding-left: 1rem;
`;export{I as H,z as I,E as P,H as R,S as a,k as b};
