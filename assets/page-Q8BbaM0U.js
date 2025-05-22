import{j as e,l as a}from"./index-BIH90SC5.js";import{d as o,b as t,c as r}from"./button-BcLPkHor.js";import{G as s,A as p}from"./index-BAqG3Wzf.js";import{S as m}from"./icon-Bz58gY_Q.js";import{I as c,C as l}from"./icon-iTgp0FJD.js";import{A as x}from"./index-Brs4_diQ.js";import"./index-C2Q-eOag.js";import"./iconBase-Bx-3qh5G.js";import"./index-CkCbG6bs.js";import"./index-B4g9YTQJ.js";import"./index--gd1Bdtg.js";const n=o(t)`
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
`,f=o(t)`
  height: 80%;
  aspect-ratio: 1/1;
`;function d(){return e.jsxs(f,{$gap:"0.5",children:[e.jsx(n,{$gap:"0.5",$direction:r.COLUMN}),e.jsx(n,{$gap:"0.5",$direction:r.COLUMN})]})}const h=s,g=[{name:"十步万度",path:"./sbwd",icon:e.jsx(m,{})},{name:"俄罗斯方块",path:"./elsfk",icon:e.jsx(d,{})},{name:"扫雷",path:"./sl",icon:e.jsx(h,{})},{name:"中国象棋",path:"./zgxq",icon:e.jsx(c,{type:l.Jiang,color:"black"})}],j=o(t)`
  padding: var(--page-padding);
`;function k(){return e.jsx(x,{onFirstAppear:()=>a.appear("game-list"),children:e.jsx(j,{children:e.jsx(p,{appListHander:()=>g.map(i=>({...i,contentStyle:{width:"10rem",height:"10rem"},iconStyle:{fontSize:"8rem"},labelStyle:{fontSize:"1.8rem"}}))})})})}const w={title:"游戏列表",crumbLabel:"列表"};export{k as Component,w as handle};
