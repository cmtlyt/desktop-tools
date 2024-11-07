import{y as e}from"./index-BOrfBne2.js";import{d as t,b as o,c as r,l as a}from"./index-8__tipZY.js";import{G as s,A as p}from"./index-yJXWzJgb.js";import{S as c}from"./icon-ukDJRFFc.js";import{A as m}from"./index-CdsISOgV.js";import"./index-BgwUozG3.js";import"./index-BXBs98Jn.js";import"./index-DxpTPqtl.js";const n=t(o)`
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
`;function $(){return e.jsx(m,{onFirstAppear:()=>a.appear("game-list"),children:e.jsx(h,{children:e.jsx(p,{appListHander:()=>d.map(i=>({...i,contentStyle:{width:"10rem",height:"10rem"},iconStyle:{fontSize:"8rem"},labelStyle:{fontSize:"1.8rem"}}))})})})}const y={title:"游戏列表",crumbLabel:"列表"};export{$ as Component,y as handle};
