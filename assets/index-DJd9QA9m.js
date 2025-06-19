import{r as e,j as t}from"./index-D6qafkXg.js";import{u as A,b as i,d as h}from"./button-BEX9rA1c.js";const f=h(i)`
  overflow: hidden;
`,g=h.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,v=e.forwardRef(function(l,c){const{leftArea:u,rightArea:x,children:m}=l,a=e.useRef(null),s=e.useRef(null),[d,p]=e.useState({leftAreaWidth:0,rightAreaWidth:0}),r=A(),o=e.useCallback(()=>{const n={leftAreaWidth:0,rightAreaWidth:0};a.current&&(n.leftAreaWidth=a.current.offsetWidth/r),s.current&&(n.rightAreaWidth=s.current.offsetWidth/r),p(n)},[r]);return e.useEffect(o,[r,o]),e.useImperativeHandle(c,()=>({updateSize:o})),t.jsxs(g,{style:{"--left-area-width":`${d.leftAreaWidth}rem`,"--right-area-width":`${d.rightAreaWidth}rem`},children:[t.jsx(f,{children:t.jsx(i,{ref:a,children:u})}),t.jsx(i,{children:m}),t.jsx(f,{children:t.jsx(i,{ref:s,children:x})})]})});export{v as H};
