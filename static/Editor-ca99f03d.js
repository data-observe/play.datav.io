import{H as p,I as s,J as C,K as x,T as h}from"./index-9076ce45.js";import{r as T,a3 as v,V as e,c5 as g,b9 as c,bl as b,h2 as S,Y as k,ax as u,cx as o,cv as m,b3 as d,b5 as w,ao as f,h3 as A}from"./index-3a76b207.js";import{AlertFilterEditor as P}from"./Editor-cc855df0.js";import{C as B}from"./ClickActionsEditor-c78e2fd4.js";import"./useLandscapeMode-e7a72966.js";const N=T.memo(y=>{const{panel:a,onChange:n}=y,r=v(f),i=v(A);return e.createElement(e.Fragment,null,e.createElement(p,{title:"Tooltip"},e.createElement(s,{title:r.mode},e.createElement(g,{options:[{label:"Single",value:"single"},{label:"All",value:"all"},{label:"Hidden",value:"hidden"}],value:a.plugins.graph.tooltip.mode,onChange:l=>n(t=>{t.plugins.graph.tooltip.mode=l})}))),e.createElement(p,{title:"Legend"},e.createElement(s,{title:r.mode},e.createElement(g,{options:[{label:"Table",value:"table"},{label:"Hidden",value:"hidden"}],value:a.plugins.graph.legend.mode,onChange:l=>n(t=>{t.plugins.graph.legend.mode=l})})),a.plugins.graph.legend.mode!="hidden"&&e.createElement(e.Fragment,null,e.createElement(s,{title:i.placement},e.createElement(g,{options:[{label:"Bottom",value:"bottom"},{label:"Right",value:"right"}],value:a.plugins.graph.legend.placement,onChange:l=>n(t=>{t.plugins.graph.legend.placement=l})})),a.plugins.graph.legend.placement=="right"&&e.createElement(s,{title:i.width},e.createElement(c,{value:a.plugins.graph.legend.width,min:100,step:50,onChange:l=>n(t=>{t.plugins.graph.legend.width=l<=100?100:l})})),a.plugins.graph.legend.placement=="right"&&e.createElement(s,{title:i.nameWidth,desc:i.nameWidthTips},e.createElement(b,{value:a.plugins.graph.legend.nameWidth,onChange:l=>n(t=>{t.plugins.graph.legend.nameWidth=l})})),e.createElement(s,{title:i.values,desc:i.valuesTips},e.createElement(S,{value:a.plugins.graph.legend.valueCalcs,isMulti:!0,options:Object.keys(k).map(l=>({label:l,value:l})),onChange:l=>n(t=>{t.plugins.graph.legend.valueCalcs=l})})))),e.createElement(p,{title:i.graphStyles},e.createElement(s,{title:r.type},e.createElement(g,{options:[{label:"Lines",value:"lines"},{label:"Bars",value:"bars"},{label:"points",value:"points"}],value:a.plugins.graph.styles.style,onChange:l=>n(t=>{t.plugins.graph.styles.style=l})})),a.plugins.graph.styles.style=="bars"&&e.createElement(e.Fragment,null,e.createElement(s,{title:i.barRadius},e.createElement(c,{value:a.plugins.graph.styles.barRadius,min:0,max:.5,step:.1,onChange:l=>n(t=>{t.plugins.graph.styles.barRadius=l,u(o+t.id)})})),e.createElement(s,{title:i.barGap},e.createElement(c,{value:a.plugins.graph.styles.barGap,min:0,max:100,step:5,onChange:l=>n(t=>{t.plugins.graph.styles.barGap=l,u(o+t.id)})}))),e.createElement(e.Fragment,null,e.createElement(s,{title:i.lineWidth},e.createElement(m,{value:a.plugins.graph.styles.lineWidth,min:0,max:10,step:1,onChange:l=>n(t=>{t.plugins.graph.styles.lineWidth=l})})),e.createElement(s,{title:i.gradient},e.createElement(g,{options:[{label:"None",value:"none"},{label:"Opacity",value:"opacity"}],value:a.plugins.graph.styles.gradientMode,onChange:l=>n(t=>{t.plugins.graph.styles.gradientMode=l})})),e.createElement(s,{title:i.opacity},e.createElement(m,{value:a.plugins.graph.styles.fillOpacity,min:0,max:100,step:1,onChange:l=>{n(t=>{t.plugins.graph.styles.fillOpacity=l}),u(o+a.id)}})),e.createElement(s,{title:i.showPoints},e.createElement(g,{options:[{label:"Auto",value:"auto"},{label:"Always",value:"always"},{label:"Never",value:"never"}],value:a.plugins.graph.styles.showPoints,onChange:l=>n(t=>{t.plugins.graph.styles.showPoints=l})}))),e.createElement(s,{title:i.pointSize},e.createElement(m,{value:a.plugins.graph.styles.pointSize,min:1,max:20,step:1,onChange:l=>n(t=>{t.plugins.graph.styles.pointSize=l})})),e.createElement(s,{title:i.connectNull},e.createElement(d,{defaultChecked:a.plugins.graph.styles.connectNulls,onChange:l=>n(t=>{t.plugins.graph.styles.connectNulls=l.currentTarget.checked})})),e.createElement(s,{title:"Stack"},e.createElement(d,{defaultChecked:a.plugins.graph.styles.enableStack,onChange:l=>n(t=>{t.plugins.graph.styles.enableStack=l.currentTarget.checked})}))),e.createElement(p,{title:r.axis},e.createElement(s,{title:r.label},e.createElement(b,{value:a.plugins.graph.axis.label,onChange:l=>n(t=>{t.plugins.graph.axis.label=l})})),e.createElement(s,{title:i.showGrid},e.createElement(g,{options:[{label:"Show",value:!0},{label:"Hidden",value:!1}],value:a.plugins.graph.axis.showGrid,onChange:l=>n(t=>{t.plugins.graph.axis.showGrid=l})})),e.createElement(s,{title:r.scale},e.createElement(g,{options:[{label:"Linear",value:"linear"},{label:"Log",value:"log"}],value:a.plugins.graph.axis.scale,onChange:l=>n(t=>{t.plugins.graph.axis.scale=l})})),a.plugins.graph.axis.scale=="log"&&e.createElement(s,{title:"Scale Base"},e.createElement(g,{options:[{label:"Base 2",value:"2"},{label:"Base 10",value:"10"}],value:a.plugins.graph.axis.scaleBase,onChange:l=>n(t=>{t.plugins.graph.axis.scaleBase=l})}))),e.createElement(p,{title:"Value"},e.createElement(s,{title:r.unit},e.createElement(C,{value:a.plugins.graph.value,onChange:l=>n(t=>{t.plugins.graph.value.units=l.units,t.plugins.graph.value.unitsType=l.unitsType})})),e.createElement(s,{title:r.decimal},e.createElement(c,{value:a.plugins.graph.value.decimal,min:0,max:5,step:1,onChange:l=>n(t=>{t.plugins.graph.value.decimal=l})}))),e.createElement(p,{title:r.interaction},e.createElement(B,{panel:a,onChange:l=>{n(t=>{t.plugins.graph.clickActions=l})},actions:a.plugins.graph.clickActions})),e.createElement(p,{title:"Thresholds"},e.createElement(x,{value:a.plugins.graph.thresholds,onChange:l=>n(t=>{t.plugins.graph.thresholds=l,u(o+t.id)})}),e.createElement(s,{title:i.thresholdsDisplay},e.createElement(w,{value:a.plugins.graph.thresholdsDisplay,onChange:l=>{const t=l.currentTarget.value;n(E=>{E.plugins.graph.thresholdsDisplay=t,u(o+E.id)})}},Object.keys(h).map(l=>e.createElement("option",{value:h[l]},h[l]))))),e.createElement(p,{title:i.alertCorrelation},e.createElement(s,{title:"Enable",desc:i.alertCorrelationTips},e.createElement(d,{defaultChecked:a.plugins.graph.enableAlert,onChange:l=>n(t=>{t.plugins.graph.enableAlert=l.currentTarget.checked})}))),a.plugins.graph.enableAlert&&e.createElement(P,{panel:a,onChange:n,filter:a.plugins.graph.alertFilter}))});export{N as default};