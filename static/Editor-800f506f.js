import{H as d,I as r}from"./index-9076ce45.js";import{a3 as o,V as t,bl as m,ax as l,cx as s,b3 as u,ao as E}from"./index-3a76b207.js";import"./useLandscapeMode-e7a72966.js";const g=({panel:i,onChange:c})=>{const n=o(E);return t.createElement(d,{title:n.basic},t.createElement(r,{title:"Default service"},t.createElement(m,{value:i.plugins.trace.defaultService,onChange:a=>c(e=>{e.plugins.trace.defaultService=a,l(s+e.id)})})),t.createElement(r,{title:"Enable edit service",desc:"when diabled, service will be automatically set to default service"},t.createElement(u,{isChecked:i.plugins.trace.enableEditService,onChange:a=>c(e=>{e.plugins.trace.enableEditService=a.target.checked,l(s+e.id)})})))};export{g as default};