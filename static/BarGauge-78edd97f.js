import{r as z,bk as c,V as y,aP as B,df as E,d9 as G,d5 as T}from"./index-3a76b207.js";import{B as O}from"./BarGauge-2322fffd.js";import{c as D,d as l,B as m,k as U}from"./index-9076ce45.js";import"./useLandscapeMode-e7a72966.js";const P=z.memo(i=>{const{panel:d,height:t,width:f}=i;if(c(i.data))return y.createElement(B,{height:"100%"},"No data");if(!E(i.data))return y.createElement(B,{height:"100%"},"Data format not support!");const r=z.useMemo(()=>i.data.flat(),[i.data]),[o,u]=C(r,d),e=i.panel.plugins.barGauge;return y.createElement(O,{threshods:e.thresholds,mode:e.mode,width:f,height:t,data:o,textWidth:u,orientation:e.orientation,showUnfilled:e.style.showUnfilled,titleSize:e.style.titleSize,textSize:e.style.valueSize,showMax:e.showMax,showMin:e.showMin,onClick:e.enableClick?e.clickAction:null})}),C=(i,d)=>{const t=d.plugins.barGauge,f=[];let r=t.max,o=t.min,u=0;for(const e of i){const a=D(d,e.name),h=l(a,m.SeriesUnits),n=l(a,m.SeriesName),x=l(a,m.SeriesDecimal)??t.value.decimal,v=(h==null?void 0:h.units)||t.value.units;for(const s of e.fields)if(s.type==="number"){const g=Math.max(...s.values),w=Math.min(...s.values);(!r||g>r)&&(r=g),(!o||w<o)&&(o=w);const b=G(s.values,t.value.calc),k=U(b,v,x),p=T(k.toString(),t.style.valueSize).width;p>u&&(u=p);let M;n!=null&&n.name?n.overrideField?M=n.name:M=n.name+"-"+s.name:M=e.name+"-"+s.name,f.push({rawTitle:e.name,title:M,min:w,max:g,value:b,text:k.toString(),units:v,decimal:x})}}for(const e of f){const a=D(d,e.rawTitle),h=e.min,n=e.max;t.maxminFrom=="all"&&(e.max=r,e.min=o),c(t.min)||(e.min=t.min),c(t.max)||(e.max=t.max);const S=l(a,m.SeriesFromMinMax);c(S)||(S=="all"?(e.max=r,e.min=o):(e.max=n,e.min=h));const x=l(a,m.SeriesMin),v=l(a,m.SeriesMax);c(x)||(e.min=x),c(v)||(e.max=v);const s=l(a,m.SeriesThresholds);e.thresholds=s}return[f,u]};export{P as default};