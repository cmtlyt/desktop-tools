import{r as e,x as t}from"./index-0MpH2wOD.js";import{d as r,e as g,b as a,S as w}from"./button-DyoL0WWn.js";import{D as A}from"./index-CtbB1Y7q.js";const f=r(a)`
  overflow: hidden;
`,W=r.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,I=e.forwardRef(function(h,c){const{leftArea:m,rightArea:p,children:u}=h,o=e.useRef(null),s=e.useRef(null),[l,x]=e.useState({leftAreaWidth:0,rightAreaWidth:0}),i=g(),n=e.useCallback(()=>{const d={leftAreaWidth:0,rightAreaWidth:0};o.current&&(d.leftAreaWidth=o.current.offsetWidth/i),s.current&&(d.rightAreaWidth=s.current.offsetWidth/i),x(d)},[i]);return e.useEffect(n,[i,n]),e.useImperativeHandle(c,()=>({updateSize:n})),t.jsxs(W,{style:{"--left-area-width":`${l.leftAreaWidth}rem`,"--right-area-width":`${l.rightAreaWidth}rem`},children:[t.jsx(f,{children:t.jsx(a,{ref:o,children:m})}),t.jsx(a,{children:u}),t.jsx(f,{children:t.jsx(a,{ref:s,children:p})})]})}),R=r.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,S=r(A)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,k=r(w)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`;export{I as H,k as I,R as a,S as b};
