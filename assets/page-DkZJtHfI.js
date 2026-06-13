import{j as e,r as a,l as s}from"./index-BQk0NrRP.js";import{c as r,d as t,b as o}from"./button-BDYDdio0.js";import{G as p,A as c}from"./index-DGCK4Ep6.js";import{S as m}from"./icon-sd8NSynS.js";import{I as l,C as x}from"./icon-C56RcGLa.js";import{A as f}from"./index-DXT5NbQt.js";import"./index-CT-iivKP.js";import"./iconBase-DdATYJaJ.js";import"./index-xqNrI3TK.js";import"./index-B4g9YTQJ.js";import"./index-D68u9faf.js";const i=t(o)`
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
`,d=t(o)`
  height: 80%;
  aspect-ratio: 1/1;
`;function h(){return e.jsxs(d,{$gap:"0.5",children:[e.jsx(i,{$gap:"0.5",$direction:r.COLUMN}),e.jsx(i,{$gap:"0.5",$direction:r.COLUMN})]})}const g=p,j=a.memo(function(){return e.jsx("span",{style:{fontSize:22,lineHeight:1},children:"🀄"})}),u=[{name:"十步万度",path:"./sbwd",icon:e.jsx(m,{})},{name:"俄罗斯方块",path:"./elsfk",icon:e.jsx(h,{})},{name:"扫雷",path:"./sl",icon:e.jsx(g,{})},{name:"中国象棋",path:"./zgxq",icon:e.jsx(l,{type:x.Jiang,color:"black"})},{name:"乐清麻将",path:"./majiang",icon:e.jsx(j,{})}],S=t(o)`
  padding: var(--page-padding);
`;function k(){return e.jsx(f,{onFirstAppear:()=>s.appear("game-list"),children:e.jsx(S,{children:e.jsx(c,{appListHander:()=>u.map(n=>({...n,contentStyle:{width:"10rem",height:"10rem"},iconStyle:{fontSize:"8rem"},labelStyle:{fontSize:"1.8rem"}}))})})})}const w={title:"游戏列表",crumbLabel:"列表"};export{k as Component,w as handle};
