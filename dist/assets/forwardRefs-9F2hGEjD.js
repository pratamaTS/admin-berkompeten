import{l as v,bv as _,bh as x,K as w,p as R,bt as P}from"./index-ZfcOUqFe.js";class y{constructor(a){let{x:s,y:i,width:o,height:n}=a;this.x=s,this.y=i,this.width=o,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function O(r,a){return{x:{before:Math.max(0,a.left-r.left),after:Math.max(0,r.right-a.right)},y:{before:Math.max(0,a.top-r.top),after:Math.max(0,r.bottom-a.bottom)}}}function W(r){return Array.isArray(r)?new y({x:r[0],y:r[1],width:0,height:0}):r.getBoundingClientRect()}function A(r){const a=r.getBoundingClientRect(),s=getComputedStyle(r),i=s.transform;if(i){let o,n,t,e,f;if(i.startsWith("matrix3d("))o=i.slice(9,-1).split(/, /),n=+o[0],t=+o[5],e=+o[12],f=+o[13];else if(i.startsWith("matrix("))o=i.slice(7,-1).split(/, /),n=+o[0],t=+o[3],e=+o[4],f=+o[5];else return new y(a);const l=s.transformOrigin,c=a.x-e-(1-n)*parseFloat(l),d=a.y-f-(1-t)*parseFloat(l.slice(l.indexOf(" ")+1)),h=n?a.width/n:r.offsetWidth+1,g=t?a.height/t:r.offsetHeight+1;return new y({x:c,y:d,width:h,height:g})}else return new y(a)}function E(r,a,s){if(typeof r.animate>"u")return{finished:Promise.resolve()};let i;try{i=r.animate(a,s)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(o=>{i.onfinish=()=>{o(i)}})),i}const $="cubic-bezier(0.4, 0, 0.2, 1)",L="cubic-bezier(0.0, 0, 0.2, 1)",C="cubic-bezier(0.4, 0, 1, 1)",T=R({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function u(r,a,s){return v()({name:r,props:T({mode:s,origin:a}),setup(i,o){let{slots:n}=o;const t={onBeforeEnter(e){i.origin&&(e.style.transformOrigin=i.origin)},onLeave(e){if(i.leaveAbsolute){const{offsetTop:f,offsetLeft:l,offsetWidth:c,offsetHeight:d}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${f}px`,e.style.left=`${l}px`,e.style.width=`${c}px`,e.style.height=`${d}px`}i.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(i.leaveAbsolute&&(e!=null&&e._transitionInitialStyles)){const{position:f,top:l,left:c,width:d,height:h}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=f||"",e.style.top=l||"",e.style.left=c||"",e.style.width=d||"",e.style.height=h||""}}};return()=>{const e=i.group?_:x;return w(e,{name:i.disabled?"":r,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:t},n.default)}}})}function b(r,a){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return v()({name:r,props:{mode:{type:String,default:s},disabled:Boolean},setup(i,o){let{slots:n}=o;return()=>w(x,{name:i.disabled?"":r,css:!i.disabled,...i.disabled?{}:a},n.default)}})}function S(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=P(`offset-${s}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[s]:t.style[s]}},onEnter(t){const e=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const f=`${t[i]}px`;t.style[s]="0",t.offsetHeight,t.style.transition=e.transition,r&&t._parent&&t._parent.classList.add(r),requestAnimationFrame(()=>{t.style[s]=f})},onAfterEnter:n,onEnterCancelled:n,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[s]:t.style[s]},t.style.overflow="hidden",t.style[s]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[s]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(t){r&&t._parent&&t._parent.classList.remove(r),n(t)}function n(t){const e=t._initialStyle[s];t.style.overflow=t._initialStyle.overflow,e!=null&&(t.style[s]=e),delete t._initialStyle}}u("fab-transition","center center","out-in");u("dialog-bottom-transition");u("dialog-top-transition");const F=u("fade-transition"),z=u("scale-transition");u("scroll-x-transition");u("scroll-x-reverse-transition");u("scroll-y-transition");u("scroll-y-reverse-transition");u("slide-x-transition");u("slide-x-reverse-transition");const V=u("slide-y-transition");u("slide-y-reverse-transition");const D=b("expand-transition",S()),H=b("expand-x-transition",S("",!0)),p=Symbol("Forwarded refs");function m(r,a){let s=r;for(;s;){const i=Reflect.getOwnPropertyDescriptor(s,a);if(i)return i;s=Object.getPrototypeOf(s)}}function I(r){for(var a=arguments.length,s=new Array(a>1?a-1:0),i=1;i<a;i++)s[i-1]=arguments[i];return r[p]=s,new Proxy(r,{get(o,n){if(Reflect.has(o,n))return Reflect.get(o,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const t of s)if(t.value&&Reflect.has(t.value,n)){const e=Reflect.get(t.value,n);return typeof e=="function"?e.bind(t.value):e}}},has(o,n){if(Reflect.has(o,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const t of s)if(t.value&&Reflect.has(t.value,n))return!0;return!1},set(o,n,t){if(Reflect.has(o,n))return Reflect.set(o,n,t);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const e of s)if(e.value&&Reflect.has(e.value,n))return Reflect.set(e.value,n,t);return!1},getOwnPropertyDescriptor(o,n){var e;const t=Reflect.getOwnPropertyDescriptor(o,n);if(t)return t;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const f of s){if(!f.value)continue;const l=m(f.value,n)??("_"in f.value?m((e=f.value._)==null?void 0:e.setupState,n):void 0);if(l)return l}for(const f of s){const l=f.value&&f.value[p];if(!l)continue;const c=l.slice();for(;c.length;){const d=c.shift(),h=m(d.value,n);if(h)return h;const g=d.value&&d.value[p];g&&c.push(...g)}}}}})}export{y as B,F as V,z as a,D as b,H as c,E as d,L as e,I as f,C as g,W as h,O as i,V as j,A as n,$ as s};
