import{p as c,m as d,k as v,l as m,a5 as h,y as u,s as g,a0 as k,aa as r,B as y,d as C}from"./index-BOG201kq.js";const x=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...d(),...v()},"VDivider"),f=m()({name:"VDivider",props:x(),setup(e,i){let{attrs:t}=i;const{themeClasses:s}=h(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=k(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),a});return y(()=>C("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};
