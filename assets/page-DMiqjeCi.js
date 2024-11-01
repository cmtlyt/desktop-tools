import{x as e}from"./index-CiXsOv_w.js";import{d as t,b as r,c as o,A as a,l as s}from"./index-25doOVbC.js";import{G as p,A as c}from"./index-B0nki2Gi.js";import{S as m}from"./icon-DOJlGU2q.js";import"./index-BR0syzoR.js";import"./index-DFWCW1bo.js";import"./index-DOtAjDz2.js";const n=t(r)`
  flex: 1;

  &::before,
  &::after {
    content: '';
    flex: 1;
    box-shadow:
      inset 0 0 0 0.4rem currentColor,
      inset 0 0 0 0.8rem #fff,
      inset 0 0 0 10rem currentColor;
  }
`,l=t(r)`
  height: 80%;
  aspect-ratio: 1/1;
`;function x(){return e.jsxs(l,{$gap:"0.5",children:[e.jsx(n,{$gap:"0.5",$direction:o.COLUMN}),e.jsx(n,{$gap:"0.5",$direction:o.COLUMN})]})}const d=[{name:"十步万度",path:"./sbwd",icon:e.jsx(m,{})},{name:"俄罗斯方块",path:"./elsfk",icon:e.jsx(x,{})},{name:"扫雷",path:"./sl",icon:e.jsx(p,{})}],f=t(r)`
  padding: var(--page-padding);
`;function A(){return e.jsx(a,{onFirstAppear:()=>s.appear("game-list"),children:e.jsx(f,{children:e.jsx(c,{appListHander:()=>d.map(i=>({...i,contentStyle:{width:"10rem",height:"10rem"},iconStyle:{fontSize:"8rem"},labelStyle:{fontSize:"1.8rem"}}))})})})}const C={title:"游戏列表",crumbLabel:"列表"};export{A as Component,C as handle};
