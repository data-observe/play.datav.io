import{H as S,I as u,M as w,O as ee}from"./index-9076ce45.js";import{r as W,a3 as T,V as e,b3 as x,ax as f,cx as b,cv as U,b9 as H,bl as te,cD as ne,b5 as P,aN as k,c5 as ae,av as O,a5 as _,dV as J,ac as I,ba as Q,ab as F,aS as Y,aQ as g,cU as j,ay as B,cu as R,M as Z,a8 as K,a9 as X,aa as $,aL as z,aG as V,aU as le,cs as oe,e5 as re,gb as ie,ga as ce,bd as se,ao as A,gJ as M,au as N,_ as q}from"./index-3a76b207.js";import"./useLandscapeMode-e7a72966.js";const Ee=W.memo(h=>{const m=T(A),r=T(M),{panel:a,onChange:c}=h;return e.createElement(e.Fragment,null,e.createElement(S,{title:m.basic},e.createElement(u,{title:"Zoom canvas",desc:"Scroll the canvas by wheeling"},e.createElement(x,{defaultChecked:a.plugins.nodeGraph.zoomCanvas,onChange:n=>{const t=n.currentTarget.checked;c(o=>{o.plugins.nodeGraph.zoomCanvas=t,f(b+o.id)})}})),!a.plugins.nodeGraph.zoomCanvas&&e.createElement(u,{title:"Scroll canvas",desc:"Scroll the canvas by wheeling"},e.createElement(x,{defaultChecked:a.plugins.nodeGraph.scrollCanvas,onChange:n=>{const t=n.currentTarget.checked;c(o=>{o.plugins.nodeGraph.scrollCanvas=t,f(b+o.id)})}})),e.createElement(u,{title:"Drag canvas"},e.createElement(x,{defaultChecked:a.plugins.nodeGraph.dragCanvas,onChange:n=>{const t=n.currentTarget.checked;c(o=>{o.plugins.nodeGraph.dragCanvas=t,f(b+o.id)})}})),e.createElement(u,{title:"Drag node"},e.createElement(x,{defaultChecked:a.plugins.nodeGraph.dragNode,onChange:n=>{const t=n.currentTarget.checked;c(o=>{o.plugins.nodeGraph.dragNode=t,f(b+o.id)})}}))),e.createElement(S,{title:r.node},e.createElement(u,{title:r.baseSize},e.createElement(U,{value:a.plugins.nodeGraph.node.baseSize,min:20,max:100,step:2,onChange:n=>c(t=>{t.plugins.nodeGraph.node.baseSize=n})})),e.createElement(u,{title:r.maxSize},e.createElement(H,{value:a.plugins.nodeGraph.node.maxSize,min:1,max:5,onChange:n=>c(t=>{t.plugins.nodeGraph.node.maxSize=n})})),e.createElement(de,{panel:a,onChange:n=>{c(n),f(b+a.id)}}),a.plugins.nodeGraph.node.shape=="donut"&&e.createElement(me,{...h}),e.createElement(u,{title:m.borderColor},e.createElement(w,{color:a.plugins.nodeGraph.node.borderColor,onChange:n=>c(t=>{t.plugins.nodeGraph.node.borderColor=n}),circlePicker:!0})),e.createElement(u,{title:r.enableHighlight},e.createElement(x,{defaultChecked:a.plugins.nodeGraph.node.enableHighlight,onChange:n=>{const t=n.currentTarget.checked;c(o=>{o.plugins.nodeGraph.node.enableHighlight=t})}})),a.plugins.nodeGraph.node.enableHighlight&&e.createElement(u,{title:r.highlightNodes,desc:r.highlightNodesTips},e.createElement(te,{value:a.plugins.nodeGraph.node.highlightNodes,onChange:n=>c(t=>{t.plugins.nodeGraph.node.highlightNodes=n}),placeholder:r.highlightNodesInputTips})),a.plugins.nodeGraph.node.enableHighlight&&e.createElement(u,{desc:r.highlightNodesFuncTips},e.createElement(ne,{value:a.plugins.nodeGraph.node.highlightNodesByFunc,onChange:n=>c(t=>{t.plugins.nodeGraph.node.highlightNodesByFunc=n})})),a.plugins.nodeGraph.node.enableHighlight&&a.plugins.nodeGraph.node.highlightNodes&&e.createElement(u,{title:m.highlightColor},e.createElement(w,{color:a.plugins.nodeGraph.node.highlightColor,onChange:n=>c(t=>{t.plugins.nodeGraph.node.highlightColor=n})}))),e.createElement(S,{title:r.edge},e.createElement(u,{title:r.shape},e.createElement(P,{value:a.plugins.nodeGraph.edge.shape,onChange:n=>c(t=>{t.plugins.nodeGraph.edge.shape=n.currentTarget.value})},e.createElement("option",{value:"quadratic"},r.quadratic),e.createElement("option",{value:"line"},r.line),e.createElement("option",{value:"polyline"},r.polyline))),e.createElement(u,{title:r.displayLabel},e.createElement(x,{defaultChecked:a.plugins.nodeGraph.edge.display,onChange:n=>{const t=n.currentTarget.checked;c(o=>{o.plugins.nodeGraph.edge.display=t,f(b+o.id)})}})),e.createElement(u,{title:r.arrow},e.createElement(P,{value:a.plugins.nodeGraph.edge.arrow,onChange:n=>c(t=>{t.plugins.nodeGraph.edge.arrow=n.currentTarget.value})},e.createElement("option",{value:"default"},"default"),e.createElement("option",{value:"triangle"},"triangle"),e.createElement("option",{value:"circle"},"circle"),e.createElement("option",{value:"vee"},"vee"),e.createElement("option",{value:"diamond"},"diamond"),e.createElement("option",{value:"triangleRect"},"triangleRect"))),e.createElement(u,{title:r.edgeColor},e.createElement(k,null,e.createElement(w,{color:a.plugins.nodeGraph.edge.color.light,onChange:n=>c(t=>{t.plugins.nodeGraph.edge.color.light=n}),buttonText:r.pickLightColor})),e.createElement(k,null,e.createElement(w,{color:a.plugins.nodeGraph.edge.color.dark,onChange:n=>c(t=>{t.plugins.nodeGraph.edge.color.dark=n}),buttonText:r.pickDarkColor}))),e.createElement(u,{title:m.opacity,desc:r.opacityTips},e.createElement(U,{value:a.plugins.nodeGraph.edge.opacity,min:0,max:1,step:.1,onChange:n=>c(t=>{t.plugins.nodeGraph.edge.opacity=n})}))),e.createElement(S,{title:m.interaction},e.createElement(u,{title:r.tooltipTrigger},e.createElement(ae,{options:[{label:"Hover",value:"mouseenter"},{label:"Click",value:"click"}],value:a.plugins.nodeGraph.node.tooltipTrigger,onChange:n=>c(t=>{t.plugins.nodeGraph.node.tooltipTrigger=n,f(b+t.id)})})),e.createElement(ue,{...h})),e.createElement(S,{title:"legend"},e.createElement(u,{title:m.enable},e.createElement(x,{defaultChecked:a.plugins.nodeGraph.legend.enable,onChange:n=>c(t=>{t.plugins.nodeGraph.legend.enable=n.currentTarget.checked,f(b+t.id)})}))),e.createElement(S,{title:r.layout},e.createElement(u,{title:r.nodeStrength,desc:r.nodeStrengthTips},e.createElement(H,{value:a.plugins.nodeGraph.layout.nodeStrength,min:100,max:1e4,onChange:n=>c(t=>{t.plugins.nodeGraph.layout.nodeStrength=n})})),e.createElement(u,{title:r.nodeGravity,desc:r.nodeGravityTips},e.createElement(H,{value:a.plugins.nodeGraph.layout.gravity,min:0,max:200,onChange:n=>c(t=>{t.plugins.nodeGraph.layout.gravity=n})}))))}),L={key:"",value:"",icon:"",type:"label"},de=({panel:h,onChange:m})=>{const r=T(M),a=O(),{isOpen:c,onOpen:n,onClose:t}=_(),[o,y]=J(L),p=()=>{if(N.isEmpty(o.value)||N.isEmpty(o.icon)||o.type=="data"&&N.isEmpty(o.key)){a({description:"field cannot be empty",status:"warning",duration:2e3,isClosable:!0});return}for(const s of h.plugins.nodeGraph.node.icon)if(s.key==o.key&&s.value==o.value){a({description:"the same key/value already exist",status:"warning",duration:2e3,isClosable:!0});return}m(s=>{s.plugins.nodeGraph.node.icon.unshift(o)}),y(L),t()},C=s=>{m(v=>{v.plugins.nodeGraph.node.icon.splice(s,1)})};return e.createElement(e.Fragment,null,e.createElement(u,{title:r.icon},e.createElement(I,{size:"xs",onClick:n},r.setIcon),e.createElement(Q,{mt:"2"}),e.createElement(F,{alignItems:"sleft",mt:"1"},h.plugins.nodeGraph.node.icon.map((s,v)=>e.createElement(Y,{key:v,justifyContent:"space-between",alignItems:"center"},e.createElement(k,{fontSize:"0.9rem"},e.createElement(k,{spacing:0},e.createElement(g,null,s.type),s.type=="data"&&e.createElement(g,null,".",s.key),e.createElement(g,null," = ",s.value),e.createElement(g,{className:"color-text"}," ->")),e.createElement(j,{src:s.icon,width:"30px",height:"30px"})),e.createElement(B,{layerStyle:"textFourth",cursor:"pointer",onClick:()=>C(v)},e.createElement(R,null)))))),e.createElement(Z,{isOpen:c,onClose:t},e.createElement(K,null),e.createElement(X,{minWidth:"800px"},e.createElement($,null,e.createElement(k,null,e.createElement(g,{fontWeight:"600"},"When "),e.createElement(I,{size:"sm",variant:"outline",onClick:()=>{y(s=>{s.type=o.type=="label"?"data":"label"})}},o.type),o.type=="data"&&e.createElement(z,{onChange:s=>{const v=s.currentTarget.value.trim();y(G=>{G.key=v})},placeholder:"key, hover a node to see, e.g service_type",size:"sm",width:"300px"}),e.createElement(g,{fontWeight:"600"},"="),e.createElement(z,{onChange:s=>{const v=s.currentTarget.value.trim();y(G=>{G.value=v})},placeholder:o.type=="label"?"label name, e.g mysql":"data attribute value, e.g database",size:"sm",width:"260px"})),e.createElement(k,null,e.createElement(g,{fontWeight:"600"},"show icon "),e.createElement(z,{onChange:s=>{const v=s.currentTarget.value.trim();y(G=>{G.icon=v})},placeholder:"icon url",size:"sm",width:"250px"}),o.icon&&e.createElement(j,{src:o.icon,width:"30px",height:"30px"})),e.createElement(I,{my:"4",size:"sm",onClick:p},"Submit"),e.createElement(V,{status:"success",flexDir:"column",alignItems:"left"},e.createElement(g,null,"1. You can find data attributes by hovering on a node, e.g 'error: 45' , 'error' is attribute name, '45' is value"))))))},ue=({panel:h,onChange:m})=>{const r=T(A),a=T(M),c={name:"",event:ee,enable:!0},n=O(),{isOpen:t,onOpen:o,onClose:y}=_(),[p,C]=J(c),s=()=>{for(const l of h.plugins.nodeGraph.node.menu)if(l.name==p.name&&l.id!=p.id){n({description:"same name exist",status:"warning",duration:2e3,isClosable:!0});return}p.id?m(l=>{for(let i=0;i<l.plugins.nodeGraph.node.menu.length;i++)l.plugins.nodeGraph.node.menu[i].id==p.id&&(l.plugins.nodeGraph.node.menu[i]=p)}):(p.id=new Date().getTime(),m(l=>{l.plugins.nodeGraph.node.menu.unshift(p)})),C(c),f(b+h.id),y()},v=l=>{m(i=>{i.plugins.nodeGraph.node.menu.splice(l,1)})},G=l=>{m(i=>{const E=i.plugins.nodeGraph.node.menu,D=E[l-1];E[l-1]=E[l],E[l]=D})},d=l=>{m(i=>{const E=i.plugins.nodeGraph.node.menu,D=E[l+1];E[l+1]=E[l],E[l]=D})};return e.createElement(e.Fragment,null,e.createElement(u,{title:a.rightClick,info:e.createElement(g,null,r.applyToSeeEffect)},e.createElement(I,{size:"xs",onClick:()=>{o(),C(c)}},a.addMenuItem),h.plugins.nodeGraph.node.menu.length>0&&e.createElement(Q,{my:"2"}),e.createElement(F,{alignItems:"left",pl:"2"},h.plugins.nodeGraph.node.menu.map((l,i)=>e.createElement(Y,{alignItems:"center",justifyContent:"space-between"},e.createElement(le,{label:l.event},e.createElement(g,null,l.name)),e.createElement(k,{layerStyle:"textFourth"},i!=0&&e.createElement(oe,{cursor:"pointer",onClick:()=>G(i)}),i!=h.plugins.nodeGraph.node.menu.length-1&&e.createElement(re,{cursor:"pointer",onClick:()=>d(i)}),e.createElement(ie,{onClick:()=>{C(l),o()},cursor:"pointer"}),e.createElement(ce,{className:l.enable?"color-text":null,cursor:"pointer",onClick:()=>{m(E=>{E.plugins.nodeGraph.node.menu[i].enable=!l.enable}),f(b+h.id)}}),e.createElement(R,{onClick:()=>v(i),cursor:"pointer"})))))),e.createElement(Z,{isOpen:t,onClose:y},e.createElement(K,null),e.createElement(X,{minWidth:"800px"},e.createElement($,{p:"0"},e.createElement(k,null,e.createElement(g,{fontWeight:"600"},a.menuItemName),e.createElement(z,{value:p.name,onChange:l=>{const i=l.currentTarget.value;C(E=>{E.name=i})},placeholder:"e.g view service",size:"sm",width:"250px"})),e.createElement(g,{fontWeight:"600",mt:"4"},a.defineClickEvent),e.createElement(B,{height:"300px"},e.createElement(se,{value:p.event,onChange:l=>{C(i=>{i.event=l})}})),e.createElement(I,{my:"4",size:"sm",onClick:s},r.submit),e.createElement(V,{status:"success",flexDir:"column",alignItems:"left"},e.createElement(g,null))))))},me=h=>{const{panel:m,onChange:r,data:a}=h;if(!a||a.length==0||!a[0].nodes)return null;const c=O(),n=T(A),t=T(M),[o,y]=W.useState(m.plugins.nodeGraph.node.donutColors),p=W.useMemo(()=>{let d;a.length>0&&(d=a[0].nodes);let l=[];return d.length>0&&(l=Object.keys(d[0].data)),l},[a]),C=()=>{const d=N.cloneDeep(o);y(d),r(l=>{l.plugins.nodeGraph.node.donutColors=d})},s=()=>{let d;for(const l of p)if(!o.find(i=>i.attr==l)){d=l;break}d?(o.unshift({attr:d,color:q[o.length%q.length]}),C()):c({description:"No attrs to set",status:"info",duration:2e3,isClosable:!0})},v=d=>{o.splice(d,1),C()},G=o.filter(d=>p.includes(d.attr));return e.createElement(u,{title:t.donutColors,info:e.createElement(F,{alignItems:"left",fontWeight:"600"},e.createElement(g,null,t.donutTips1),e.createElement(g,null,"1. ",t.donutTips2),e.createElement(g,null,"2. ",t.donutTips3),e.createElement(g,null,"3. ",t.donutTips4),e.createElement(V,{status:"success"},t.donutTips5))},e.createElement(B,null,G.length<p.length&&e.createElement(I,{onClick:s,width:"100%",size:"sm",colorScheme:"gray"},"+ ",n.new),e.createElement(F,{alignItems:"left",mt:"2"},G.map((d,l)=>e.createElement(k,{key:d.attr+l+d.color,spacing:1},e.createElement(w,{color:d.color,onChange:i=>{d.color=i,C()},circlePicker:!0}),e.createElement(P,{value:d.attr,onChange:i=>{G.find(E=>E.attr==i.currentTarget.value)||(d.attr=i.currentTarget.value,C())}},p.map(i=>e.createElement("option",{value:i},i))),e.createElement(R,{opacity:.6,fontSize:"0.8rem",onClick:()=>v(l)}))))))};export{Ee as default};