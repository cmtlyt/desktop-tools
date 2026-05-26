import{r as e,j as t}from"./index-DJrG1xPe.js";import{d as h}from"./styled-components.browser.esm-DqKzGx4B.js";import{u as A,b as i}from"./button-PCnrASaF.js";const f=h(i)`
  overflow: hidden;
`,g=h.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`,w=e.forwardRef(function(l,c){const{leftArea:u,rightArea:m,children:p}=l,a=e.useRef(null),o=e.useRef(null),[d,x]=e.useState({leftAreaWidth:0,rightAreaWidth:0}),r=A(),s=e.useCallback(()=>{const n={leftAreaWidth:0,rightAreaWidth:0};a.current&&(n.leftAreaWidth=a.current.offsetWidth/r),o.current&&(n.rightAreaWidth=o.current.offsetWidth/r),x(n)},[r]);return e.useEffect(s,[r,s]),e.useImperativeHandle(c,()=>({updateSize:s})),t.jsxs(g,{style:{"--left-area-width":`${d.leftAreaWidth}rem`,"--right-area-width":`${d.rightAreaWidth}rem`},children:[t.jsx(f,{children:t.jsx(i,{ref:a,children:u})}),t.jsx(i,{children:p}),t.jsx(f,{children:t.jsx(i,{ref:o,children:m})})]})});export{w as H};
