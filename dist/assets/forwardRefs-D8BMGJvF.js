import{l as v,bj as R,bo as w,m as P,K as x,bp as T,aO as b,p as O}from"./index-B4j2Yefz.js";class p{constructor(a){let{x:r,y:i,width:o,height:e}=a;this.x=r,this.y=i,this.width=o,this.height=e}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function A(s,a){return{x:{before:Math.max(0,a.left-s.left),after:Math.max(0,s.right-a.right)},y:{before:Math.max(0,a.top-s.top),after:Math.max(0,s.bottom-a.bottom)}}}function E(s){return Array.isArray(s)?new p({x:s[0],y:s[1],width:0,height:0}):s.getBoundingClientRect()}function $(s){const a=s.getBoundingClientRect(),r=getComputedStyle(s),i=r.transform;if(i){let o,e,t,n,f;if(i.startsWith("matrix3d("))o=i.slice(9,-1).split(/, /),e=+o[0],t=+o[5],n=+o[12],f=+o[13];else if(i.startsWith("matrix("))o=i.slice(7,-1).split(/, /),e=+o[0],t=+o[3],n=+o[4],f=+o[5];else return new p(a);const l=r.transformOrigin,c=a.x-n-(1-e)*parseFloat(l),d=a.y-f-(1-t)*parseFloat(l.slice(l.indexOf(" ")+1)),h=e?a.width/e:s.offsetWidth+1,g=t?a.height/t:s.offsetHeight+1;return new p({x:c,y:d,width:h,height:g})}else return new p(a)}function L(s,a,r){if(typeof s.animate>"u")return{finished:Promise.resolve()};let i;try{i=s.animate(a,r)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(o=>{i.onfinish=()=>{o(i)}})),i}function C(s){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",r=arguments.length>2?arguments[2]:void 0;return v()({name:r??R(w(s.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...P()},setup(i,o){let{slots:e}=o;return()=>{var t;return x(i.tag,{class:[s,i.class],style:i.style},(t=e.default)==null?void 0:t.call(e))}}})}const F="cubic-bezier(0.4, 0, 0.2, 1)",z="cubic-bezier(0.0, 0, 0.2, 1)",V="cubic-bezier(0.4, 0, 1, 1)",B=O({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function u(s,a,r){return v()({name:s,props:B({mode:r,origin:a}),setup(i,o){let{slots:e}=o;const t={onBeforeEnter(n){i.origin&&(n.style.transformOrigin=i.origin)},onLeave(n){if(i.leaveAbsolute){const{offsetTop:f,offsetLeft:l,offsetWidth:c,offsetHeight:d}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${f}px`,n.style.left=`${l}px`,n.style.width=`${c}px`,n.style.height=`${d}px`}i.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(i.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:f,top:l,left:c,width:d,height:h}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=f||"",n.style.top=l||"",n.style.left=c||"",n.style.width=d||"",n.style.height=h||""}}};return()=>{const n=i.group?T:b;return x(n,{name:i.disabled?"":s,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:t},e.default)}}})}function S(s,a){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return v()({name:s,props:{mode:{type:String,default:r},disabled:Boolean},setup(i,o){let{slots:e}=o;return()=>x(b,{name:i.disabled?"":s,css:!i.disabled,...i.disabled?{}:a},e.default)}})}function _(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=w(`offset-${r}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[r]:t.style[r]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const f=`${t[i]}px`;t.style[r]="0",t.offsetHeight,t.style.transition=n.transition,s&&t._parent&&t._parent.classList.add(s),requestAnimationFrame(()=>{t.style[r]=f})},onAfterEnter:e,onEnterCancelled:e,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[r]:t.style[r]},t.style.overflow="hidden",t.style[r]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[r]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(t){s&&t._parent&&t._parent.classList.remove(s),e(t)}function e(t){const n=t._initialStyle[r];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[r]=n),delete t._initialStyle}}u("fab-transition","center center","out-in");u("dialog-bottom-transition");u("dialog-top-transition");const j=u("fade-transition"),D=u("scale-transition");u("scroll-x-transition");u("scroll-x-reverse-transition");u("scroll-y-transition");u("scroll-y-reverse-transition");u("slide-x-transition");u("slide-x-reverse-transition");const H=u("slide-y-transition");u("slide-y-reverse-transition");const I=S("expand-transition",_()),M=S("expand-x-transition",_("",!0)),y=Symbol("Forwarded refs");function m(s,a){let r=s;for(;r;){const i=Reflect.getOwnPropertyDescriptor(r,a);if(i)return i;r=Object.getPrototypeOf(r)}}function q(s){for(var a=arguments.length,r=new Array(a>1?a-1:0),i=1;i<a;i++)r[i-1]=arguments[i];return s[y]=r,new Proxy(s,{get(o,e){if(Reflect.has(o,e))return Reflect.get(o,e);if(!(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))){for(const t of r)if(t.value&&Reflect.has(t.value,e)){const n=Reflect.get(t.value,e);return typeof n=="function"?n.bind(t.value):n}}},has(o,e){if(Reflect.has(o,e))return!0;if(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))return!1;for(const t of r)if(t.value&&Reflect.has(t.value,e))return!0;return!1},set(o,e,t){if(Reflect.has(o,e))return Reflect.set(o,e,t);if(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))return!1;for(const n of r)if(n.value&&Reflect.has(n.value,e))return Reflect.set(n.value,e,t);return!1},getOwnPropertyDescriptor(o,e){var n;const t=Reflect.getOwnPropertyDescriptor(o,e);if(t)return t;if(!(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))){for(const f of r){if(!f.value)continue;const l=m(f.value,e)??("_"in f.value?m((n=f.value._)==null?void 0:n.setupState,e):void 0);if(l)return l}for(const f of r){const l=f.value&&f.value[y];if(!l)continue;const c=l.slice();for(;c.length;){const d=c.shift(),h=m(d.value,e);if(h)return h;const g=d.value&&d.value[y];g&&c.push(...g)}}}}})}export{p as B,M as V,L as a,V as b,C as c,z as d,I as e,q as f,E as g,A as h,D as i,j,H as k,$ as n,F as s};
