import{y as e}from"./index-DIsRsnX7.js";import{d as t,b as o,c as r,A as a,l as s}from"./index-DcfwSh00.js";import{G as p,A as c}from"./index-CYxRV4Yo.js";import{S as m}from"./icon-CvZ8WcPc.js";import"./index-C6McjbsO.js";import"./index-9IP8vwo3.js";import"./index-Wp-boRJJ.js";const n=t(o)`
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
`;function x(){return e.jsxs(l,{$gap:"0.5",children:[e.jsx(n,{$gap:"0.5",$direction:r.COLUMN}),e.jsx(n,{$gap:"0.5",$direction:r.COLUMN})]})}const d=p,f=[{name:"十步万度",path:"./sbwd",icon:e.jsx(m,{})},{name:"俄罗斯方块",path:"./elsfk",icon:e.jsx(x,{})},{name:"扫雷",path:"./sl",icon:e.jsx(d,{})}],h=t(o)`
  padding: var(--page-padding);
`;function C(){return e.jsx(a,{onFirstAppear:()=>s.appear("game-list"),children:e.jsx(h,{children:e.jsx(c,{appListHander:()=>f.map(i=>({...i,contentStyle:{width:"10rem",height:"10rem"},iconStyle:{fontSize:"8rem"},labelStyle:{fontSize:"1.8rem"}}))})})})}const $={title:"游戏列表",crumbLabel:"列表"};export{C as Component,$ as handle};