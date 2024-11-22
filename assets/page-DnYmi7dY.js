import{x as e}from"./index-DYjrMXHZ.js";import{d as o,b as t,c as r,l as a}from"./index-0X-70R4H.js";import{G as s,A as p}from"./index-8p9S4-Et.js";import{S as c}from"./icon-CeL00gAQ.js";import{I as m,C as l}from"./icon-BAxs2c6x.js";import{A as x}from"./index--YHp1ku1.js";import"./index-BP10bJhH.js";import"./iconBase-DnWwjABG.js";import"./index-CH1SscMq.js";import"./index-4EZ3uj4Q.js";const n=o(t)`
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
`;function d(){return e.jsxs(f,{$gap:"0.5",children:[e.jsx(n,{$gap:"0.5",$direction:r.COLUMN}),e.jsx(n,{$gap:"0.5",$direction:r.COLUMN})]})}const h=s,g=[{name:"十步万度",path:"./sbwd",icon:e.jsx(c,{})},{name:"俄罗斯方块",path:"./elsfk",icon:e.jsx(d,{})},{name:"扫雷",path:"./sl",icon:e.jsx(h,{})},{name:"中国象棋",path:"./zgxq",icon:e.jsx(m,{type:l.Jiang,color:"black"})}],j=o(t)`
  padding: var(--page-padding);
`;function F(){return e.jsx(x,{onFirstAppear:()=>a.appear("game-list"),children:e.jsx(j,{children:e.jsx(p,{appListHander:()=>g.map(i=>({...i,contentStyle:{width:"10rem",height:"10rem"},iconStyle:{fontSize:"8rem"},labelStyle:{fontSize:"1.8rem"}}))})})})}const k={title:"游戏列表",crumbLabel:"列表"};export{F as Component,k as handle};
