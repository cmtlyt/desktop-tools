import{r as p,j as t,n as u,aN as x,l,aM as h}from"./index-v5e0f-P3.js";import{A as f}from"./index-B78ipe0G.js";import{b as g,a as m,B as d}from"./button-Bx1TJ7Ps.js";import{u as N}from"./use-navigate-Ce0oyjfh.js";import{u as c,a as j}from"./util-ux7fxVbr.js";import{B as E}from"./index-CT5t4fRZ.js";import{S as A}from"./index-B4g9YTQJ.js";import{E as B}from"./index-12j_fjYD.js";import{I,H as R,a as k,b as C,R as T,P as $}from"./index-C2Xn0Jz0.js";import"./opfs-key-D0VDwJ2Y.js";import"./iconBase-rvs65X0U.js";import"./index-CGZTnnKG.js";import"./is-phone-B6SY9HpL.js";import"./index-CBTbymhI.js";import"./asyncToGenerator-BX-mj2jX.js";import"./reactNode-CXmVbTch.js";import"./index-BzB6WiPj.js";import"./index-Cupkf4B-.js";function b(a){const{notepad:e,onDelete:o}=a,{id:s}=e,{setNotepad:i}=c("setNotepad");return t.jsx(T,{wrapperProps:{$alignItems:m.CENTER},buttons:[{text:"编辑",$presetTheme:d.PRIMARY,to:`/notepad/editor/${s}`,onClick:()=>i(e)},{text:"分享",async onClick(r){r.stopPropagation(),j(e)}},{text:"删除",$presetTheme:d.DANGER,logInfo:{id:s},onClick(r){r.stopPropagation(),o==null||o(s)}}]})}const P=p.memo(a=>{const{notepad:e,onDelete:o,onClick:s}=a;return t.jsx(I,{onClick:s,children:t.jsxs(R,{rightArea:t.jsx(b,{notepad:e,onDelete:o}),children:[t.jsx(g,{$flex:"1",$alignItems:m.CENTER,children:t.jsx(k,{children:e.title})}),t.jsx(C,{children:e.createTime})]})})});function S(a){h().deleteNotepad(a)}function X(){const a=u(),{setNotepad:e}=c("setNotepad"),{notepads:o}=x("notepads"),{notepads:s}=a,i=N(),r=p.useMemo(()=>s||o,[o,s]);return p.useEffect(()=>{e(void 0)},[e]),t.jsx(f,{onFirstAppear:()=>l.appear("notepad-list"),children:t.jsx($,{children:t.jsx(A,{when:r.length>0,fullback:t.jsx(B,{}),children:()=>r.map(n=>t.jsx(P,{notepad:n,onClick:()=>{e(n),l.click("notepad-item-click",{id:n.id}),i(`/notepad/preview/${n.id}`)},onDelete:S},n.id))})})})}function w(){return t.jsx(E,{buttons:[{text:"新建",to:"/notepad/editor",$presetTheme:d.PRIMARY}]})}const Z={title:"笔记列表",crumbLabel:"列表",rightArea:t.jsx(w,{})};async function _(){return window.logger.todo("请求接口加载笔记信息, 报错时使用本地存储中的笔记信息"),{notepads:null}}export{X as Component,Z as handle,_ as loader};
