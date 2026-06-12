import{j as e,r as a,l as s}from"./index-Bt_SosG2.js";import{d as o}from"./styled-components.browser.esm-C0OZs9VM.js";import{G as p,A as c}from"./index-Bma3K7W3.js";import{S as m}from"./icon-DwfWzDlY.js";import{c as r,b as t}from"./button-DjDsBg2q.js";import{I as l,C as x}from"./icon-B2xTZok3.js";import{A as f}from"./index-DtP3i8-f.js";import"./index-5sP1oYbb.js";import"./iconBase-CzRJWf3n.js";import"./index-BURcQo3x.js";import"./index-B4g9YTQJ.js";import"./index-BSwfBWhW.js";const i=o(t)`
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
`,d=o(t)`
  height: 80%;
  aspect-ratio: 1/1;
`;function h(){return e.jsxs(d,{$gap:"0.5",children:[e.jsx(i,{$gap:"0.5",$direction:r.COLUMN}),e.jsx(i,{$gap:"0.5",$direction:r.COLUMN})]})}const g=p,j=a.memo(function(){return e.jsx("span",{style:{fontSize:22,lineHeight:1},children:"🀄"})}),u=[{name:"十步万度",path:"./sbwd",icon:e.jsx(m,{})},{name:"俄罗斯方块",path:"./elsfk",icon:e.jsx(h,{})},{name:"扫雷",path:"./sl",icon:e.jsx(g,{})},{name:"中国象棋",path:"./zgxq",icon:e.jsx(l,{type:x.Jiang,color:"black"})},{name:"乐清麻将",path:"./majiang",icon:e.jsx(j,{})}],S=o(t)`
  padding: var(--page-padding);
`;function w(){return e.jsx(f,{onFirstAppear:()=>s.appear("game-list"),children:e.jsx(S,{children:e.jsx(c,{appListHander:()=>u.map(n=>({...n,contentStyle:{width:"10rem",height:"10rem"},iconStyle:{fontSize:"8rem"},labelStyle:{fontSize:"1.8rem"}}))})})})}const E={title:"游戏列表",crumbLabel:"列表"};export{w as Component,E as handle};
