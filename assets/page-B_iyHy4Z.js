import{x as e}from"./index-jyCDBXP7.js";import{d as t,b as r,c as o,A as i,l as s}from"./index-DNgY6zfM.js";import{A as p}from"./index-DRqbGzbU.js";import{S as c}from"./icon-CfObmwZO.js";import"./index-COoaQ8Z_.js";const n=t(r)`
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
`,m=t(r)`
  height: 80%;
  aspect-ratio: 1/1;
`;function l(){return e.jsxs(m,{$gap:"0.5",children:[e.jsx(n,{$gap:"0.5",$direction:o.column}),e.jsx(n,{$gap:"0.5",$direction:o.column})]})}const x=[{name:"十步万度",path:"./sbwd",icon:e.jsx(c,{})},{name:"俄罗斯方块",path:"./elsfk",icon:e.jsx(l,{})}],d=t(r)`
  padding: var(--page-padding);
`;function S(){return e.jsx(i,{onFirstAppear:()=>s.appear("game-list"),children:e.jsx(d,{children:e.jsx(p,{appListHander:()=>x.map(a=>({...a,contentStyle:{width:"10rem",height:"10rem"},iconStyle:{fontSize:"8rem"},labelStyle:{fontSize:"1.8rem"}}))})})})}const b={title:"游戏列表",crumbLabel:"列表"};export{S as Component,b as handle};
