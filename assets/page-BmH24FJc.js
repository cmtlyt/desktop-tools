import{p as s,r as a,o}from"./index-Svs3ILB_.js";import{c as i,u as n}from"./index-DD5AjTiC.js";import{B as u}from"./flow-Bwqlsksu.js";import{F as c,P as l}from"./flow-form-Cws6eucc.js";import{A as p,l as d}from"./index-CkkFVO2k.js";import"./layout-B_z3JHBG.js";const m=i(t=>({id:"",setId:e=>t({id:e})})),r=t=>m(n(t));function B(){const{id:t}=s(),{setId:e}=r("setId");return a.useEffect(()=>{e(t)},[t,e]),o.jsx(p,{onFirstAppear:()=>d.appear("flow-detail",{id:t}),children:o.jsx(c,{pageStatus:l.VIEW})})}async function D({params:t}){return{id:t.id}}function f(){const{id:t}=r("id");return o.jsx(u,{buttons:[{text:"编辑",to:`/flow/editor/${t}`}]})}const F={title:"流水详情",crumbLabel:"详情",needBackIcon:!0,rightArea:o.jsx(f,{})};export{B as Component,F as handle,D as loader};
