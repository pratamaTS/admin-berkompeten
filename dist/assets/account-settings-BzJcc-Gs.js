import{a as Fe}from"./avatar-1-BeeGmpGQ.js";import{a as K}from"./VGrid-CSSzMaaB.js";import{u as Ce,aq as We,f as V,g as Te,o as B,e as X,w as m,d as l,H as _,S as Q,J as N,a as D,c as G,F as ce,Y as ze,V as ee,t as Z,Z as W,b as ie,p as j,aM as De,bc as Ge,l as q,y as Ue,W as w,aj as R,B as J,G as ue,I as xe,m as de,bd as je,j as ve,at as qe,b6 as Pe,L as Je,au as Ie,aG as Se,aJ as Ke,N as Be,ba as Ze,ap as Qe,$ as et,a7 as tt,a1 as at,q as ot,s as M,av as nt,be as lt,a2 as re,bf as Re,k as st,a0 as it,x as ut,aU as rt,D as Ae,am as ct,ay as dt,aT as vt,aE as ft,E as mt,an as ht,M as gt}from"./index-De0cW8vH.js";import{V as $}from"./VCol-Dn84ANm3.js";import{V as Ee,a as U,b as $e}from"./VForm-COAMR_Wg.js";import{V as yt,d as bt,s as xt,k as pe}from"./forwardRefs-Cvn-j6Kf.js";import{V as St,m as pt,u as wt,a as _t}from"./lazy-BoBgL-kr.js";import{V as te}from"./VRow-Ck8Nnqqw.js";import{V as F}from"./VTextField-B7mySahN.js";import{M as Vt}from"./VImg-CJEcbLYz.js";const kt={__name:"AccountSettingsAccount",setup(e){const n=Ce(),t=We({avatarImg:Fe,firstName:"",lastName:"",email:"",role:"",phone:"",year_of_entry:"",gender:"",target_exam_date:"",university:"",educational_status:"",timezone:"(GMT-11:00) International Date Line West",currency:"USD"});V(!1);const o=localStorage.getItem("token");return Te(async()=>{try{const s=(await K.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${o}`}})).data.data;t.email=s.email;const a=s.name.split(" ");t.firstName=a[0],t.lastName=a.slice(1).join(" "),t.role="Admin"}catch(u){console.log("err: ",u),u.response&&u.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),n.push("/login"))}}),(u,s)=>(B(),X(te,null,{default:m(()=>[l($,{cols:"12"},{default:m(()=>[l(Ee,{title:"Account Details"},{default:m(()=>[l(U,{class:"d-flex"},{default:m(()=>[l(yt,{rounded:"lg",size:"100",class:"me-6",image:t.avatarImg},null,8,["image"])]),_:1}),l(St),l(U,null,{default:m(()=>[l($e,{class:"mt-6"},{default:m(()=>[l(te,null,{default:m(()=>[l($,{md:"6",cols:"12"},{default:m(()=>[l(F,{modelValue:t.firstName,"onUpdate:modelValue":s[0]||(s[0]=a=>t.firstName=a),placeholder:"John",label:"First Name",readonly:""},null,8,["modelValue"])]),_:1}),l($,{md:"6",cols:"12"},{default:m(()=>[l(F,{modelValue:t.lastName,"onUpdate:modelValue":s[1]||(s[1]=a=>t.lastName=a),placeholder:"Doe",label:"Last Name",readonly:""},null,8,["modelValue"])]),_:1}),l($,{cols:"12",md:"6"},{default:m(()=>[l(F,{modelValue:t.email,"onUpdate:modelValue":s[2]||(s[2]=a=>t.email=a),label:"E-mail",placeholder:"johndoe@gmail.com",type:"email",readonly:""},null,8,["modelValue"])]),_:1}),l($,{cols:"12",md:"6"},{default:m(()=>[l(F,{modelValue:t.role,"onUpdate:modelValue":s[3]||(s[3]=a=>t.role=a),label:"Role",placeholder:"Student",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Ct=D("p",{class:"text-base font-weight-medium mt-2"}," Password Requirements: ",-1),Tt={class:"d-flex flex-column gap-y-3"},zt={class:"font-weight-medium"},Pt={key:2,class:"mt-2 text-success"},It={key:3,class:"mt-2 text-danger",style:{color:"#ff5252"}},Bt={__name:"AccountSettingsSecurity",setup(e){const n=Ce();V(!1);const t=V(!1),o=V(!1);V("");const u=V(""),s=V(""),a=V(!1),r=V(""),i=V(""),c=localStorage.getItem("token");Te(async()=>{try{const f=await K.get("https://gateway.berkompeten.com/api/student/change-password/status",{headers:{Authorization:`Bearer ${c}`}});a.value=f.data.data.change_password,console.log("change password: ",f.data.data.change_password)}catch(f){console.log("err: ",f),f.response&&f.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),n.push("/login"))}});const b=async()=>{try{console.log("token reset password: ",c);const f=await K.get("https://gateway.berkompeten.com/api/student/reset-password",{headers:{Authorization:`Bearer ${c}`}});console.log("resp reset password: ",f),r.value=f.data.message}catch(f){console.error("reset password error:",f),i.value=f.response.data.message}},h=async()=>{try{if(i.value="",u.value!==s.value){i.value="Your password doesn't match with the confirmation password";return}const f=await K.post("https://gateway.berkompeten.com/api/student/change-password",{password:u.value,password_confirmation:s.value},{headers:{Authorization:`Bearer ${c}`}});console.log("change password otp: ",f),r.value=f.data.message,n.push("/profile/security")}catch(f){f.response&&f.response.data?i.value=f.response.data.errors:i.value="An unexpected error occurred."}},S=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"];return(f,d)=>(B(),X(te,null,{default:m(()=>[l($,{cols:"12"},{default:m(()=>[l(Ee,{title:"Change Password"},{default:m(()=>[l($e,null,{default:m(()=>[_(a)==!0?(B(),X(U,{key:0},{default:m(()=>[l(te,null,{default:m(()=>[l($,{cols:"12",md:"6"},{default:m(()=>[l(F,{modelValue:_(u),"onUpdate:modelValue":d[0]||(d[0]=p=>Q(u)?u.value=p:null),type:_(t)?"text":"password","append-inner-icon":_(t)?"ri-eye-off-line":"ri-eye-line",label:"New Password",autocomplete:"on",placeholder:"","onClick:appendInner":d[1]||(d[1]=p=>t.value=!_(t))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),l($,{cols:"12",md:"6"},{default:m(()=>[l(F,{modelValue:_(s),"onUpdate:modelValue":d[2]||(d[2]=p=>Q(s)?s.value=p:null),type:_(o)?"text":"password","append-inner-icon":_(o)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Confirm New Password",placeholder:"","onClick:appendInner":d[3]||(d[3]=p=>o.value=!_(o))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})):N("",!0),_(a)==!0?(B(),X(U,{key:1},{default:m(()=>[Ct,D("ul",Tt,[(B(),G(ce,null,ze(S,p=>D("li",{key:p,class:"d-flex"},[D("div",null,[l(ee,{size:"7",icon:"ri-checkbox-blank-circle-fill",class:"me-3"})]),D("span",zt,Z(p),1)])),64))])]),_:1})):N("",!0),l(U,{class:"d-flex flex-wrap gap-4"},{default:m(()=>[_(a)==!0?(B(),X(W,{key:0,onClick:h},{default:m(()=>[ie("Save changes")]),_:1})):N("",!0),_(a)==!1?(B(),X(W,{key:1,type:"reset",color:"secondary",variant:"outlined",onClick:b},{default:m(()=>[ie(" Reset ")]),_:1})):N("",!0),_(r)?(B(),G("div",Pt,Z(_(r)),1)):N("",!0),_(i)?(B(),G("div",It,Z(_(i)),1)):N("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Me=Symbol.for("vuetify:v-tabs"),Rt=j({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...De(Ge({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),He=q()({name:"VTab",props:Rt(),setup(e,n){let{slots:t,attrs:o}=n;const{textColorClasses:u,textColorStyles:s}=Ue(e,"sliderColor"),a=w(()=>e.direction==="horizontal"),r=R(!1),i=V(),c=V();function b(h){var f,d;let{value:S}=h;if(r.value=S,S){const p=(d=(f=i.value)==null?void 0:f.$el.parentElement)==null?void 0:d.querySelector(".v-tab--selected .v-tab__slider"),A=c.value;if(!p||!A)return;const H=getComputedStyle(p).color,C=p.getBoundingClientRect(),z=A.getBoundingClientRect(),y=a.value?"x":"y",x=a.value?"X":"Y",k=a.value?"right":"bottom",P=a.value?"width":"height",ae=C[y],O=z[y],E=ae>O?C[k]-z[k]:C[y]-z[y],oe=Math.sign(E)>0?a.value?"right":"bottom":Math.sign(E)<0?a.value?"left":"top":"center",ne=(Math.abs(E)+(Math.sign(E)<0?C[P]:z[P]))/Math.max(C[P],z[P])||0,T=C[P]/z[P]||0,Y=1.5;bt(A,{backgroundColor:[H,"currentcolor"],transform:[`translate${x}(${E}px) scale${x}(${T})`,`translate${x}(${E/Y}px) scale${x}(${(ne-1)/Y+1})`,"none"],transformOrigin:Array(3).fill(oe)},{duration:225,easing:xt})}}return J(()=>{const h=W.filterProps(e);return l(W,ue({symbol:Me,ref:i,class:["v-tab",e.class],style:e.style,tabindex:r.value?0:-1,role:"tab","aria-selected":String(r.value),active:!1},h,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":b}),{...t,default:()=>{var S;return l(ce,null,[((S=t.default)==null?void 0:S.call(t))??e.text,!e.hideSlider&&l("div",{ref:c,class:["v-tab__slider",u.value],style:s.value},null)])}})}),{}}});function we(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function _e(e){let{selectedElement:n,containerSize:t,contentSize:o,isRtl:u,currentScrollOffset:s,isHorizontal:a}=e;const r=a?n.clientWidth:n.clientHeight,i=a?n.offsetLeft:n.offsetTop,c=u&&a?o-i-r:i,b=t+s,h=r+c,S=r*.4;return c<=s?s=Math.max(c-S,0):b<=h&&(s=Math.min(s-(b-h-S),o-t)),s}function At(e){let{selectedElement:n,containerSize:t,contentSize:o,isRtl:u,isHorizontal:s}=e;const a=s?n.clientWidth:n.clientHeight,r=s?n.offsetLeft:n.offsetTop,i=u&&s?o-r-a/2-t/2:r+a/2-t/2;return Math.min(o-t,Math.max(0,i))}const Et=Symbol.for("vuetify:v-slide-group"),Oe=j({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Et},nextIcon:{type:xe,default:"$next"},prevIcon:{type:xe,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...de(),...je(),...ve(),...qe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Ve=q()({name:"VSlideGroup",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{isRtl:o}=Pe(),{displayClasses:u,mobile:s}=Je(e),a=Ie(e,e.symbol),r=R(!1),i=R(0),c=R(0),b=R(0),h=w(()=>e.direction==="horizontal"),{resizeRef:S,contentRect:f}=Se(),{resizeRef:d,contentRect:p}=Se(),A=w(()=>a.selected.value.length?a.items.value.findIndex(v=>v.id===a.selected.value[0]):-1),H=w(()=>a.selected.value.length?a.items.value.findIndex(v=>v.id===a.selected.value[a.selected.value.length-1]):-1);if(Ke){let v=-1;Be(()=>[a.selected.value,f.value,p.value,h.value],()=>{cancelAnimationFrame(v),v=requestAnimationFrame(()=>{if(f.value&&p.value){const g=h.value?"width":"height";c.value=f.value[g],b.value=p.value[g],r.value=c.value+1<b.value}if(A.value>=0&&d.value){const g=d.value.children[H.value];A.value===0||!r.value?i.value=0:e.centerActive?i.value=At({selectedElement:g,containerSize:c.value,contentSize:b.value,isRtl:o.value,isHorizontal:h.value}):r.value&&(i.value=_e({selectedElement:g,containerSize:c.value,contentSize:b.value,isRtl:o.value,currentScrollOffset:i.value,isHorizontal:h.value}))}})})}const C=R(!1);let z=0,y=0;function x(v){const g=h.value?"clientX":"clientY";y=(o.value&&h.value?-1:1)*i.value,z=v.touches[0][g],C.value=!0}function k(v){if(!r.value)return;const g=h.value?"clientX":"clientY",I=o.value&&h.value?-1:1;i.value=I*(y+z-v.touches[0][g])}function P(v){const g=b.value-c.value;i.value<0||!r.value?i.value=0:i.value>=g&&(i.value=g),C.value=!1}function ae(){S.value&&(S.value[h.value?"scrollLeft":"scrollTop"]=0)}const O=R(!1);function E(v){if(O.value=!0,!(!r.value||!d.value)){for(const g of v.composedPath())for(const I of d.value.children)if(I===g){i.value=_e({selectedElement:I,containerSize:c.value,contentSize:b.value,isRtl:o.value,currentScrollOffset:i.value,isHorizontal:h.value});return}}}function oe(v){O.value=!1}function fe(v){var g;!O.value&&!(v.relatedTarget&&((g=d.value)!=null&&g.contains(v.relatedTarget)))&&T()}function ne(v){d.value&&(h.value?v.key==="ArrowRight"?T(o.value?"prev":"next"):v.key==="ArrowLeft"&&T(o.value?"next":"prev"):v.key==="ArrowDown"?T("next"):v.key==="ArrowUp"&&T("prev"),v.key==="Home"?T("first"):v.key==="End"&&T("last"))}function T(v){var g,I,ge,ye,be;if(d.value)if(!v)(g=Ze(d.value)[0])==null||g.focus();else if(v==="next"){const L=(I=d.value.querySelector(":focus"))==null?void 0:I.nextElementSibling;L?L.focus():T("first")}else if(v==="prev"){const L=(ge=d.value.querySelector(":focus"))==null?void 0:ge.previousElementSibling;L?L.focus():T("last")}else v==="first"?(ye=d.value.firstElementChild)==null||ye.focus():v==="last"&&((be=d.value.lastElementChild)==null||be.focus())}function Y(v){const g=i.value+(v==="prev"?-1:1)*c.value;i.value=Qe(g,0,b.value-c.value)}const Xe=w(()=>{let v=i.value>b.value-c.value?-(b.value-c.value)+we(b.value-c.value-i.value):-i.value;i.value<=0&&(v=we(-i.value));const g=o.value&&h.value?-1:1;return{transform:`translate${h.value?"X":"Y"}(${g*v}px)`,transition:C.value?"none":"",willChange:C.value?"transform":""}}),le=w(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),se=w(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!s.value;case!0:return r.value||Math.abs(i.value)>0;case"mobile":return s.value||r.value||Math.abs(i.value)>0;default:return!s.value&&(r.value||Math.abs(i.value)>0)}}),me=w(()=>Math.abs(i.value)>0),he=w(()=>b.value>Math.abs(i.value)+c.value);return J(()=>l(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!h.value,"v-slide-group--has-affixes":se.value,"v-slide-group--is-overflowing":r.value},u.value,e.class],style:e.style,tabindex:O.value||a.selected.value.length?-1:0,onFocus:fe},{default:()=>{var v,g,I;return[se.value&&l("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!me.value}],onClick:()=>me.value&&Y("prev")},[((v=t.prev)==null?void 0:v.call(t,le.value))??l(pe,null,{default:()=>[l(ee,{icon:o.value?e.nextIcon:e.prevIcon},null)]})]),l("div",{key:"container",ref:S,class:"v-slide-group__container",onScroll:ae},[l("div",{ref:d,class:"v-slide-group__content",style:Xe.value,onTouchstartPassive:x,onTouchmovePassive:k,onTouchendPassive:P,onFocusin:E,onFocusout:oe,onKeydown:ne},[(g=t.default)==null?void 0:g.call(t,le.value)])]),se.value&&l("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!he.value}],onClick:()=>he.value&&Y("next")},[((I=t.next)==null?void 0:I.call(t,le.value))??l(pe,null,{default:()=>[l(ee,{icon:o.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:Y,scrollOffset:i,focus:T}}});function $t(e){return e?e.map(n=>lt(n)?n:{text:n,value:n}):[]}const Mt=j({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Oe({mandatory:"force"}),...et(),...ve()},"VTabs"),Ht=q()({name:"VTabs",props:Mt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=tt(e,"modelValue"),u=w(()=>$t(e.items)),{densityClasses:s}=at(e),{backgroundColorClasses:a,backgroundColorStyles:r}=ot(M(e,"bgColor"));return nt({VTab:{color:M(e,"color"),direction:M(e,"direction"),stacked:M(e,"stacked"),fixed:M(e,"fixedTabs"),sliderColor:M(e,"sliderColor"),hideSlider:M(e,"hideSlider")}}),J(()=>{const i=Ve.filterProps(e);return l(Ve,ue(i,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,a.value,e.class],style:[{"--v-tabs-height":re(e.height)},r.value,e.style],role:"tablist",symbol:Me}),{default:()=>[t.default?t.default():u.value.map(c=>l(He,ue(c,{key:c.text}),null))]})}),{}}}),Ot=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:u}=e,s=.5,a=16;e.offsetX=t-n,e.offsetY=u-o,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&t<n-a&&e.left(e),e.right&&t>n+a&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&u<o-a&&e.up(e),e.down&&u>o+a&&e.down(e))};function Yt(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function Lt(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),Ot(n)}function Nt(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function Xt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Yt(t,n),touchend:t=>Lt(t,n),touchmove:t=>Nt(t,n)}}function Ft(e,n){var r;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,u=(t==null?void 0:t.options)??{passive:!0},s=(r=n.instance)==null?void 0:r.$.uid;if(!o||!s)return;const a=Xt(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[s]=a,Re(a).forEach(i=>{o.addEventListener(i,a[i],u)})}function Wt(e,n){var s,a;const t=(s=n.value)!=null&&s.parent?e.parentElement:e,o=(a=n.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const u=t._touchHandlers[o];Re(u).forEach(r=>{t.removeEventListener(r,u[r])}),delete t._touchHandlers[o]}const Ye={mounted:Ft,unmounted:Wt},Le=Symbol.for("vuetify:v-window"),Ne=Symbol.for("vuetify:v-window-group"),Dt=j({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...de(),...ve(),...st()},"VWindow"),Gt=q()({name:"VWindow",directives:{Touch:Ye},props:Dt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=it(e),{isRtl:u}=Pe(),{t:s}=ut(),a=Ie(e,Ne),r=V(),i=w(()=>u.value?!e.reverse:e.reverse),c=R(!1),b=w(()=>{const y=e.direction==="vertical"?"y":"x",k=(i.value?!c.value:c.value)?"-reverse":"";return`v-window-${y}${k}-transition`}),h=R(0),S=V(void 0),f=w(()=>a.items.value.findIndex(y=>a.selected.value.includes(y.id)));Be(f,(y,x)=>{const k=a.items.value.length,P=k-1;k<=2?c.value=y<x:y===P&&x===0?c.value=!0:y===0&&x===P?c.value=!1:c.value=y<x}),rt(Le,{transition:b,isReversed:c,transitionCount:h,transitionHeight:S,rootRef:r});const d=w(()=>e.continuous||f.value!==0),p=w(()=>e.continuous||f.value!==a.items.value.length-1);function A(){d.value&&a.prev()}function H(){p.value&&a.next()}const C=w(()=>{const y=[],x={icon:u.value?e.nextIcon:e.prevIcon,class:`v-window__${i.value?"right":"left"}`,onClick:a.prev,ariaLabel:s("$vuetify.carousel.prev")};y.push(d.value?t.prev?t.prev({props:x}):l(W,x,null):l("div",null,null));const k={icon:u.value?e.prevIcon:e.nextIcon,class:`v-window__${i.value?"left":"right"}`,onClick:a.next,ariaLabel:s("$vuetify.carousel.next")};return y.push(p.value?t.next?t.next({props:k}):l(W,k,null):l("div",null,null)),y}),z=w(()=>e.touch===!1?e.touch:{...{left:()=>{i.value?A():H()},right:()=>{i.value?H():A()},start:x=>{let{originalEvent:k}=x;k.stopPropagation()}},...e.touch===!0?{}:e.touch});return J(()=>Ae(l(e.tag,{ref:r,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var y,x;return[l("div",{class:"v-window__container",style:{height:S.value}},[(y=t.default)==null?void 0:y.call(t,{group:a}),e.showArrows!==!1&&l("div",{class:"v-window__controls"},[C.value])]),(x=t.additional)==null?void 0:x.call(t,{group:a})]}}),[[ct("touch"),z.value]])),{group:a}}}),Ut=j({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...de(),...dt(),...pt()},"VWindowItem"),ke=q()({name:"VWindowItem",directives:{Touch:Ye},props:Ut(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=vt(Le),u=ft(e,Ne),{isBooted:s}=wt();if(!o||!u)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=R(!1),r=w(()=>s.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function i(){!a.value||!o||(a.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function c(){var d;a.value||!o||(a.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=re((d=o.rootRef.value)==null?void 0:d.clientHeight)),o.transitionCount.value+=1)}function b(){i()}function h(d){a.value&&ht(()=>{!r.value||!a.value||!o||(o.transitionHeight.value=re(d.clientHeight))})}const S=w(()=>{const d=o.isReversed.value?e.reverseTransition:e.transition;return r.value?{name:typeof d!="string"?o.transition.value:d,onBeforeEnter:c,onAfterEnter:i,onEnterCancelled:b,onBeforeLeave:c,onAfterLeave:i,onLeaveCancelled:b,onEnter:h}:!1}),{hasContent:f}=_t(e,u.isSelected);return J(()=>l(Vt,{transition:S.value,disabled:!s.value},{default:()=>{var d;return[Ae(l("div",{class:["v-window-item",u.selectedClass.value,e.class],style:e.style},[f.value&&((d=t.default)==null?void 0:d.call(t))]),[[mt,u.isSelected.value]])]}})),{groupItem:u}}}),na={__name:"account-settings",setup(e){const n=gt(),t=V(n.params.tab),o=[{title:"Account",icon:"ri-group-line",tab:"account"},{title:"Security",icon:"ri-lock-line",tab:"security"}];return(u,s)=>(B(),G("div",null,[l(Ht,{modelValue:_(t),"onUpdate:modelValue":s[0]||(s[0]=a=>Q(t)?t.value=a:null),"show-arrows":""},{default:m(()=>[(B(),G(ce,null,ze(o,a=>l(He,{key:a.icon,value:a.tab},{default:m(()=>[l(ee,{size:"20",start:"",icon:a.icon},null,8,["icon"]),ie(" "+Z(a.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),l(Gt,{modelValue:_(t),"onUpdate:modelValue":s[1]||(s[1]=a=>Q(t)?t.value=a:null),class:"mt-5 disable-tab-transition",touch:!1},{default:m(()=>[l(ke,{value:"account"},{default:m(()=>[l(kt)]),_:1}),l(ke,{value:"security"},{default:m(()=>[l(Bt)]),_:1})]),_:1},8,["modelValue"])]))}};export{na as default};
