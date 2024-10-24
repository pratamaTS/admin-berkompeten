import{p as U,m as j,as as A,v as F,ax as q,E as W,d as a,a1 as h,aJ as J,ac as S,r as L,P as R,X as K,a_ as X,a0 as Z,Z as $,H as C,ah as G,F as Q,K as Y,aj as p,J as ee}from"./index-VbzBk9vn.js";import{m as te,I as ae,M as _}from"./index--BNXqmfu.js";function re(e){return{aspectStyles:h(()=>{const c=Number(e.aspectRatio);return c?{paddingBottom:String(1/c*100)+"%"}:void 0})}}const E=U({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...j(),...A()},"VResponsive"),N=F()({name:"VResponsive",props:E(),setup(e,c){let{slots:u}=c;const{aspectStyles:s}=re(e),{dimensionStyles:v}=q(e);return W(()=>{var d;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[v.value,e.style]},[a("div",{class:"v-responsive__sizer",style:s.value},null),(d=u.additional)==null?void 0:d.call(u),u.default&&a("div",{class:["v-responsive__content",e.contentClass]},[u.default()])])}),{}}}),ne=U({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...E(),...j(),...te()},"VImg"),se=F()({name:"VImg",directives:{intersect:ae},props:ne(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,c){let{emit:u,slots:s}=c;const v=J("VImg"),d=S(""),l=L(),n=S(e.eager?"loading":"idle"),g=S(),y=S(),i=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=h(()=>i.value.aspect||g.value/y.value||0);R(()=>e.src,()=>{b(n.value!=="idle")}),R(m,(t,r)=>{!t&&r&&l.value&&f(l.value)}),K(()=>b());function b(t){if(!(e.eager&&t)&&!(X&&!t&&!e.eager)){if(n.value="loading",i.value.lazySrc){const r=new Image;r.src=i.value.lazySrc,f(r,null)}i.value.src&&Z(()=>{var r;u("loadstart",((r=l.value)==null?void 0:r.currentSrc)||i.value.src),setTimeout(()=>{var o;if(!v.isUnmounted)if((o=l.value)!=null&&o.complete){if(l.value.naturalWidth||P(),n.value==="error")return;m.value||f(l.value,null),n.value==="loading"&&I()}else m.value||f(l.value),T()})})}}function I(){var t;v.isUnmounted||(T(),f(l.value),n.value="loaded",u("load",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function P(){var t;v.isUnmounted||(n.value="error",u("error",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function T(){const t=l.value;t&&(d.value=t.currentSrc||t.src)}let z=-1;$(()=>{clearTimeout(z)});function f(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const o=()=>{if(clearTimeout(z),v.isUnmounted)return;const{naturalHeight:B,naturalWidth:k}=t;B||k?(g.value=k,y.value=B):!t.complete&&n.value==="loading"&&r!=null?z=window.setTimeout(o,r):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,y.value=1)};o()}const V=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{var o;if(!i.value.src||n.value==="idle")return null;const t=a("img",{class:["v-img__img",V.value],style:{objectPosition:e.position},src:i.value.src,srcset:i.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:I,onError:P},null),r=(o=s.sources)==null?void 0:o.call(s);return a(_,{transition:e.transition,appear:!0},{default:()=>[C(r?a("picture",{class:"v-img__picture"},[r,t]):t,[[ee,n.value==="loaded"]])]})},D=()=>a(_,{transition:e.transition},{default:()=>[i.value.lazySrc&&n.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",V.value],style:{objectPosition:e.position},src:i.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),H=()=>s.placeholder?a(_,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!s.error)&&a("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,M=()=>s.error?a(_,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&a("div",{class:"v-img__error"},[s.error()])]}):null,O=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,w=S(!1);{const t=R(m,r=>{r&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{w.value=!0})}),t())})}return W(()=>{const t=N.filterProps(e);return C(a(N,Y({class:["v-img",{"v-img--booting":!w.value},e.class],style:[{width:p(e.width==="auto"?g.value:e.width)},e.style]},t,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>a(Q,null,[a(x,null,null),a(D,null,null),a(O,null,null),a(H,null,null),a(M,null,null)]),default:s.default}),[[G("intersect"),{handler:b,options:e.options},null,{once:!0}]])}),{currentSrc:d,image:l,state:n,naturalWidth:g,naturalHeight:y}}});export{se as V};
