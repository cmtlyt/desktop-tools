import{r as s,L as c}from"./index-JOKciGYI.js";import{f as a,l as n}from"./button-DuG-K6hD.js";import{u as i}from"./store-DX5c-A6s.js";import{u as l}from"./layout-B1K8iT6y.js";var f=(r=>(r.CREATE="create",r.EDITOR="editor",r.VIEW="view",r))(f||{});function E(r){const{pageStatus:o}=r,{currentFlow:e}=i("currentFlow"),{showMessage:t}=l("showMessage");return s.useEffect(()=>{a(e)&&o!=="create"&&(n.error("非法访问"),t({type:"error",content:"非法访问, 系统将会记录本次访问"}))},[e,t,o]),console.log(e,o),c.jsx("div",{children:"flowForm"})}export{E as F,f as P};