import{p as l,m as v,k as m,l as h,a8 as f,y as g,s as y,a0 as r,aa as i,B,d as k,ab as u,g as C,T as S,N as x}from"./index-B4j2Yefz.js";const T=l({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...m()},"VDivider"),b=h()({name:"VDivider",props:T(),setup(e,a){let{attrs:t}=a;const{themeClasses:s}=f(e),{textColorClasses:o,textColorStyles:c}=g(y(e,"color")),d=r(()=>{const n={};return e.length&&(n[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(n[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),n});return B(()=>k("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[d.value,c.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});function w(){const e=u(!1);return C(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:r(()=>e.value?void 0:{transition:"none !important"}),isBooted:S(e)}}const z=l({eager:Boolean},"lazy");function D(e,a){const t=u(!1),s=r(()=>t.value||e.eager||a.value);x(a,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:s,onAfterLeave:o}}export{b as V,D as a,z as m,w as u};
