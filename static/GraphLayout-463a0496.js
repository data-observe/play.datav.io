import{S as m,r as l,U as v,g$ as E,V as s,ay as S,cl as L,cL as R}from"./index-3a76b207.js";var $=m?l.useLayoutEffect:l.useEffect;const z=$;var x={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function k(){var t=l.useState(null),r=t[0],n=t[1],u=l.useState(x),f=u[0],a=u[1],d=l.useMemo(function(){return new window.ResizeObserver(function(i){if(i[0]){var o=i[0].contentRect,p=o.x,h=o.y,e=o.width,c=o.height,b=o.top,y=o.left,g=o.bottom,w=o.right;a({x:p,y:h,width:e,height:c,top:b,left:y,bottom:g,right:w})}})},[]);return z(function(){if(r)return d.observe(r),function(){d.disconnect()}},[r]),[n,f]}const I=m&&typeof window.ResizeObserver<"u"?k:function(){return[v,x]},M=({width:t,height:r,legend:n,children:u})=>{const f=E(D),a={display:"flex",width:`${t}px`,height:`${r}px`},[d,i]=I();if(!n)return s.createElement("div",{tabIndex:0,style:a,className:f.viz},u(t,r));const{placement:o,maxHeight:p="35%",maxWidth:h="60%"}=n.props;let e=null;const c={};switch(o){case"bottom":a.flexDirection="column",c.maxHeight=p,i&&(e={width:t,height:r-i.height});break;case"right":a.flexDirection="row",c.maxWidth=h,i&&(e={width:t-i.width,height:r}),n.props.width&&(c.width=n.props.width,e={width:t-n.props.width,height:r});break}return(e==null?void 0:e.width)===0&&(e.width=t),(e==null?void 0:e.height)===0&&(e.height=r),s.createElement("div",{style:a},s.createElement("div",{tabIndex:0,className:f.viz},e&&u(e.width,e.height)),s.createElement(S,{className:"graph-legend",style:c,ref:d,paddingLeft:o=="bottom"?"20px":0,paddingRight:o=="bottom"?"10px":0,minWidth:"fit-content"},s.createElement(L,{hideHorizontalTrack:!0},n)))},D=t=>({viz:R({flexGrow:2,borderRadius:1,"&:focus-visible":G(t)})}),F=({children:t})=>s.createElement(s.Fragment,null,t);M.Legend=F;function G(t){return{outline:"2px dotted transparent",outlineOffset:"2px",boxShadow:`0 0 0 2px ${t.colors.background.canvas}, 0 0 0px 4px ${t.colors.primary.main}`,transitionTimingFunction:"cubic-bezier(0.19, 1, 0.22, 1)",transitionDuration:"0.2s",transitionProperty:"outline, outline-offset, box-shadow"}}export{M as G};