import{x as e}from"./index-V60pkeaL.js";import{d as t,b as o,c as r,l as a}from"./index-Q2Cm2R8W.js";import{G as s,A as p}from"./index-Bkb_yESD.js";import{S as c}from"./icon-DYDdmrQg.js";import{A as m}from"./index-BNMbFDeS.js";import"./index-B6Gv526v.js";import"./index-D5UiNxzC.js";import"./index-DXD1Wqtt.js";const n=t(o)`
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
`,l=t(o)`
  height: 80%;
  aspect-ratio: 1/1;
`;function x(){return e.jsxs(l,{$gap:"0.5",children:[e.jsx(n,{$gap:"0.5",$direction:r.COLUMN}),e.jsx(n,{$gap:"0.5",$direction:r.COLUMN})]})}const f=s,d=[{name:"十步万度",path:"./sbwd",icon:e.jsx(c,{})},{name:"俄罗斯方块",path:"./elsfk",icon:e.jsx(x,{})},{name:"扫雷",path:"./sl",icon:e.jsx(f,{})}],h=t(o)`
  padding: var(--page-padding);
`;function $(){return e.jsx(m,{onFirstAppear:()=>a.appear("game-list"),children:e.jsx(h,{children:e.jsx(p,{appListHander:()=>d.map(i=>({...i,contentStyle:{width:"10rem",height:"10rem"},iconStyle:{fontSize:"8rem"},labelStyle:{fontSize:"1.8rem"}}))})})})}const B={title:"游戏列表",crumbLabel:"列表"};export{$ as Component,B as handle};
