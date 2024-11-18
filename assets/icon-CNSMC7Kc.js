import{r as o,x as s}from"./index-BKDFre3L.js";import{d as c}from"./index-DmRvx7aK.js";var t=(e=>(e.Bing="bing",e.Pao="pao",e.Che="che",e.Ma="ma",e.Xiang="xiang",e.Shi="shi",e.Jiang="jiang",e))(t||{});function d(e,r){switch(e){case t.Bing:return r==="red"?"兵":"卒";case t.Pao:return r==="red"?"炮":"砲";case t.Che:return r==="red"?"车":"車";case t.Ma:return r==="red"?"马":"馬";case t.Xiang:return r==="red"?"相":"象";case t.Shi:return r==="red"?"仕":"士";case t.Jiang:return r==="red"?"帅":"將"}}const u=c.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${e=>e.$color};
  font-size: 50%;
  font-weight: bold;
  line-height: 1;
  border-radius: 50%;
  aspect-ratio: 1 / 1;

  &::before,
  &::after {
    position: absolute;
    content: '';
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 0.2rem currentColor;
  }

  &::after {
    inset: 10%;
  }
`,m=o.memo(function(r){const{type:i,color:n,className:a}=r;return s.jsx(u,{$color:n,className:a,children:d(i,n)})});export{t as C,m as I};
