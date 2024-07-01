import{b as Xe,V as Le,m as Fe,u as We,a as Ge}from"./lazy-CQsNRKmd.js";import{a as L}from"./VGrid-CSSzMaaB.js";import{u as Ce,aB as je,g as V,h as Te,o as A,f as X,w as f,d as u,aJ as w,aR as Q,aK as D,a as W,c as G,F as ce,aU as ze,V as ee,t as Z,aV as F,b as ue,p as q,aj as qe,aW as Ke,s as K,A as Je,P as S,L as E,D as J,J as ie,I as pe,m as de,aX as Ze,l as ve,aY as Qe,aD as Pe,aA as et,aZ as Be,a_ as xe,ak as tt,a5 as Ie,aH as at,av as ot,Z as lt,O as nt,a9 as st,v as ut,x as H,ag as it,a$ as rt,au as re,b0 as Re,q as ct,a6 as dt,z as vt,M as ft,G as Ae,ad as mt,b1 as ht,K as gt,b2 as yt,H as bt,as as pt,aM as xt}from"./index-B5nBLcgW.js";import{V as C}from"./VCol-05f2kP35.js";import{V as Ee,a as j,b as $e,c as P}from"./VTextField-DxK0UCgj.js";import{e as _t,a as St,s as wt,i as _e}from"./forwardRefs-C3oh-94J.js";import{V as te}from"./VRow-Kjp9ojPd.js";import{M as Vt}from"./VImg-C1Lhj3zD.js";const kt={__name:"AccountSettingsAccount",setup(e){const s=Ce(),t=je({avatarImg:Xe,firstName:"",lastName:"",email:"",role:"",phone:"",year_of_entry:"",gender:"",target_exam_date:"",university:"",educational_status:"",timezone:"(GMT-11:00) International Date Line West",currency:"USD"});V(!1);const n=localStorage.getItem("token");Te(async()=>{try{const a=await L.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${n}`}}),l=a.data.profile;t.email=l.email;const o=l.name.split(" ");t.firstName=o[0],t.lastName=o.slice(1).join(" "),t.phone=l.phone_number,t.role=l.role,t.gender=l.gender,t.year_of_entry=l.year_of_entry,t.target_exam_date=l.target_exam_date,await i(l.educational_status_id),await v(l.university_id),console.log("resp profile: ",a.data.profile),console.log("name: ",a.data.profile.name)}catch(a){console.log("err: ",a),a.response&&a.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),s.push("/login"))}});const v=async a=>{try{console.log("param universitas: ",a);const l=await L.get("https://gateway.berkompeten.com/api/student/master/university/detail?id="+a,{headers:{Authorization:`Bearer ${n}`}});console.log("response universitas: ",l);const o=l.data.university;t.university=o.name}catch(l){console.error("Error fetching university options:",l)}},i=async a=>{try{console.log("param edu: ",a);const l=await L.get("https://gateway.berkompeten.com/api/student/master/educational-status/detail?id="+a,{headers:{Authorization:`Bearer ${n}`}});console.log("response edu: ",l);const o=l.data.educational_status;t.educational_status=o.name}catch(l){console.error("Error fetching educational status options:",l)}};return(a,l)=>(A(),X(te,null,{default:f(()=>[u(C,{cols:"12"},{default:f(()=>[u(Ee,{title:"Account Details"},{default:f(()=>[u(j,{class:"d-flex"},{default:f(()=>[u(_t,{rounded:"lg",size:"100",class:"me-6",image:t.avatarImg},null,8,["image"])]),_:1}),u(Le),u(j,null,{default:f(()=>[u($e,{class:"mt-6"},{default:f(()=>[u(te,null,{default:f(()=>[u(C,{md:"6",cols:"12"},{default:f(()=>[u(P,{modelValue:t.firstName,"onUpdate:modelValue":l[0]||(l[0]=o=>t.firstName=o),placeholder:"John",label:"First Name",readonly:""},null,8,["modelValue"])]),_:1}),u(C,{md:"6",cols:"12"},{default:f(()=>[u(P,{modelValue:t.lastName,"onUpdate:modelValue":l[1]||(l[1]=o=>t.lastName=o),placeholder:"Doe",label:"Last Name",readonly:""},null,8,["modelValue"])]),_:1}),u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:t.email,"onUpdate:modelValue":l[2]||(l[2]=o=>t.email=o),label:"E-mail",placeholder:"johndoe@gmail.com",type:"email",readonly:""},null,8,["modelValue"])]),_:1}),u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:t.role,"onUpdate:modelValue":l[3]||(l[3]=o=>t.role=o),label:"Role",placeholder:"Student",readonly:""},null,8,["modelValue"])]),_:1}),u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:t.phone,"onUpdate:modelValue":l[4]||(l[4]=o=>t.phone=o),label:"Phone Number",placeholder:"+1 (917) 543-9876",readonly:""},null,8,["modelValue"])]),_:1}),u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:t.gender,"onUpdate:modelValue":l[5]||(l[5]=o=>t.gender=o),label:"Jenis Kelamin",placeholder:"123 Main St, New York, NY 10001",readonly:""},null,8,["modelValue"])]),_:1}),u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:t.year_of_entry,"onUpdate:modelValue":l[6]||(l[6]=o=>t.year_of_entry=o),label:"Tahun Masuk",placeholder:"New York",readonly:""},null,8,["modelValue"])]),_:1}),u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:t.target_exam_date,"onUpdate:modelValue":l[7]||(l[7]=o=>t.target_exam_date=o),label:"Tanggal Ujian",placeholder:"10001",readonly:""},null,8,["modelValue"])]),_:1}),u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:t.university,"onUpdate:modelValue":l[8]||(l[8]=o=>t.university=o),label:"Universitas",placeholder:"10001",readonly:""},null,8,["modelValue"])]),_:1}),u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:t.educational_status,"onUpdate:modelValue":l[9]||(l[9]=o=>t.educational_status=o),label:"Status Edukasi",placeholder:"10001",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Ct=W("p",{class:"text-base font-weight-medium mt-2"}," Password Requirements: ",-1),Tt={class:"d-flex flex-column gap-y-3"},zt={class:"font-weight-medium"},Pt={key:2,class:"mt-2 text-success"},Bt={key:3,class:"mt-2 text-danger",style:{color:"#ff5252"}},It={__name:"AccountSettingsSecurity",setup(e){const s=Ce();V(!1);const t=V(!1),n=V(!1);V("");const v=V(""),i=V(""),a=V(!1),l=V(""),o=V(""),r=localStorage.getItem("token");Te(async()=>{try{const m=await L.get("https://gateway.berkompeten.com/api/student/change-password/status",{headers:{Authorization:`Bearer ${r}`}});a.value=m.data.data.change_password,console.log("change password: ",m.data.data.change_password)}catch(m){console.log("err: ",m),m.response&&m.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),s.push("/login"))}});const b=async()=>{try{console.log("token reset password: ",r);const m=await L.get("https://gateway.berkompeten.com/api/student/reset-password",{headers:{Authorization:`Bearer ${r}`}});console.log("resp reset password: ",m),l.value=m.data.message}catch(m){console.error("reset password error:",m),o.value=m.response.data.message}},h=async()=>{try{if(o.value="",v.value!==i.value){o.value="Your password doesn't match with the confirmation password";return}const m=await L.post("https://gateway.berkompeten.com/api/student/change-password",{password:v.value,password_confirmation:i.value},{headers:{Authorization:`Bearer ${r}`}});console.log("change password otp: ",m),l.value=m.data.message,s.push("/profile/security")}catch(m){m.response&&m.response.data?o.value=m.response.data.errors:o.value="An unexpected error occurred."}},x=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"];return(m,c)=>(A(),X(te,null,{default:f(()=>[u(C,{cols:"12"},{default:f(()=>[u(Ee,{title:"Change Password"},{default:f(()=>[u($e,null,{default:f(()=>[w(a)==!0?(A(),X(j,{key:0},{default:f(()=>[u(te,null,{default:f(()=>[u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:w(v),"onUpdate:modelValue":c[0]||(c[0]=_=>Q(v)?v.value=_:null),type:w(t)?"text":"password","append-inner-icon":w(t)?"ri-eye-off-line":"ri-eye-line",label:"New Password",autocomplete:"on",placeholder:"","onClick:appendInner":c[1]||(c[1]=_=>t.value=!w(t))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),u(C,{cols:"12",md:"6"},{default:f(()=>[u(P,{modelValue:w(i),"onUpdate:modelValue":c[2]||(c[2]=_=>Q(i)?i.value=_:null),type:w(n)?"text":"password","append-inner-icon":w(n)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Confirm New Password",placeholder:"","onClick:appendInner":c[3]||(c[3]=_=>n.value=!w(n))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})):D("",!0),w(a)==!0?(A(),X(j,{key:1},{default:f(()=>[Ct,W("ul",Tt,[(A(),G(ce,null,ze(x,_=>W("li",{key:_,class:"d-flex"},[W("div",null,[u(ee,{size:"7",icon:"ri-checkbox-blank-circle-fill",class:"me-3"})]),W("span",zt,Z(_),1)])),64))])]),_:1})):D("",!0),u(j,{class:"d-flex flex-wrap gap-4"},{default:f(()=>[w(a)==!0?(A(),X(F,{key:0,onClick:h},{default:f(()=>[ue("Save changes")]),_:1})):D("",!0),w(a)==!1?(A(),X(F,{key:1,type:"reset",color:"secondary",variant:"outlined",onClick:b},{default:f(()=>[ue(" Reset ")]),_:1})):D("",!0),w(l)?(A(),G("div",Pt,Z(w(l)),1)):D("",!0),w(o)?(A(),G("div",Bt,Z(w(o)),1)):D("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Me=Symbol.for("vuetify:v-tabs"),Rt=q({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...qe(Ke({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),He=K()({name:"VTab",props:Rt(),setup(e,s){let{slots:t,attrs:n}=s;const{textColorClasses:v,textColorStyles:i}=Je(e,"sliderColor"),a=S(()=>e.direction==="horizontal"),l=E(!1),o=V(),r=V();function b(h){var m,c;let{value:x}=h;if(l.value=x,x){const _=(c=(m=o.value)==null?void 0:m.$el.parentElement)==null?void 0:c.querySelector(".v-tab--selected .v-tab__slider"),$=r.value;if(!_||!$)return;const Y=getComputedStyle(_).color,T=_.getBoundingClientRect(),B=$.getBoundingClientRect(),y=a.value?"x":"y",p=a.value?"X":"Y",k=a.value?"right":"bottom",I=a.value?"width":"height",ae=T[y],N=B[y],M=ae>N?T[k]-B[k]:T[y]-B[y],oe=Math.sign(M)>0?a.value?"right":"bottom":Math.sign(M)<0?a.value?"left":"top":"center",le=(Math.abs(M)+(Math.sign(M)<0?T[I]:B[I]))/Math.max(T[I],B[I])||0,z=T[I]/B[I]||0,O=1.5;St($,{backgroundColor:[Y,"currentcolor"],transform:[`translate${p}(${M}px) scale${p}(${z})`,`translate${p}(${M/O}px) scale${p}(${(le-1)/O+1})`,"none"],transformOrigin:Array(3).fill(oe)},{duration:225,easing:wt})}}return J(()=>{const h=F.filterProps(e);return u(F,ie({symbol:Me,ref:o,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1},h,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":b}),{...t,default:()=>{var x;return u(ce,null,[((x=t.default)==null?void 0:x.call(t))??e.text,!e.hideSlider&&u("div",{ref:r,class:["v-tab__slider",v.value],style:i.value},null)])}})}),{}}});function Se(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function we(e){let{selectedElement:s,containerSize:t,contentSize:n,isRtl:v,currentScrollOffset:i,isHorizontal:a}=e;const l=a?s.clientWidth:s.clientHeight,o=a?s.offsetLeft:s.offsetTop,r=v&&a?n-o-l:o,b=t+i,h=l+r,x=l*.4;return r<=i?i=Math.max(r-x,0):b<=h&&(i=Math.min(i-(b-h-x),n-t)),i}function At(e){let{selectedElement:s,containerSize:t,contentSize:n,isRtl:v,isHorizontal:i}=e;const a=i?s.clientWidth:s.clientHeight,l=i?s.offsetLeft:s.offsetTop,o=v&&i?n-l-a/2-t/2:l+a/2-t/2;return Math.min(n-t,Math.max(0,o))}const Et=Symbol.for("vuetify:v-slide-group"),Ye=q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Et},nextIcon:{type:pe,default:"$next"},prevIcon:{type:pe,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...de(),...Ze(),...ve(),...Qe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Ve=K()({name:"VSlideGroup",props:Ye(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{isRtl:n}=Pe(),{displayClasses:v,mobile:i}=et(e),a=Be(e,e.symbol),l=E(!1),o=E(0),r=E(0),b=E(0),h=S(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:m}=xe(),{resizeRef:c,contentRect:_}=xe(),$=S(()=>a.selected.value.length?a.items.value.findIndex(d=>d.id===a.selected.value[0]):-1),Y=S(()=>a.selected.value.length?a.items.value.findIndex(d=>d.id===a.selected.value[a.selected.value.length-1]):-1);if(tt){let d=-1;Ie(()=>[a.selected.value,m.value,_.value,h.value],()=>{cancelAnimationFrame(d),d=requestAnimationFrame(()=>{if(m.value&&_.value){const g=h.value?"width":"height";r.value=m.value[g],b.value=_.value[g],l.value=r.value+1<b.value}if($.value>=0&&c.value){const g=c.value.children[Y.value];$.value===0||!l.value?o.value=0:e.centerActive?o.value=At({selectedElement:g,containerSize:r.value,contentSize:b.value,isRtl:n.value,isHorizontal:h.value}):l.value&&(o.value=we({selectedElement:g,containerSize:r.value,contentSize:b.value,isRtl:n.value,currentScrollOffset:o.value,isHorizontal:h.value}))}})})}const T=E(!1);let B=0,y=0;function p(d){const g=h.value?"clientX":"clientY";y=(n.value&&h.value?-1:1)*o.value,B=d.touches[0][g],T.value=!0}function k(d){if(!l.value)return;const g=h.value?"clientX":"clientY",R=n.value&&h.value?-1:1;o.value=R*(y+B-d.touches[0][g])}function I(d){const g=b.value-r.value;o.value<0||!l.value?o.value=0:o.value>=g&&(o.value=g),T.value=!1}function ae(){x.value&&(x.value[h.value?"scrollLeft":"scrollTop"]=0)}const N=E(!1);function M(d){if(N.value=!0,!(!l.value||!c.value)){for(const g of d.composedPath())for(const R of c.value.children)if(R===g){o.value=we({selectedElement:R,containerSize:r.value,contentSize:b.value,isRtl:n.value,currentScrollOffset:o.value,isHorizontal:h.value});return}}}function oe(d){N.value=!1}function fe(d){var g;!N.value&&!(d.relatedTarget&&((g=c.value)!=null&&g.contains(d.relatedTarget)))&&z()}function le(d){c.value&&(h.value?d.key==="ArrowRight"?z(n.value?"prev":"next"):d.key==="ArrowLeft"&&z(n.value?"next":"prev"):d.key==="ArrowDown"?z("next"):d.key==="ArrowUp"&&z("prev"),d.key==="Home"?z("first"):d.key==="End"&&z("last"))}function z(d){var g,R,ge,ye,be;if(c.value)if(!d)(g=at(c.value)[0])==null||g.focus();else if(d==="next"){const U=(R=c.value.querySelector(":focus"))==null?void 0:R.nextElementSibling;U?U.focus():z("first")}else if(d==="prev"){const U=(ge=c.value.querySelector(":focus"))==null?void 0:ge.previousElementSibling;U?U.focus():z("last")}else d==="first"?(ye=c.value.firstElementChild)==null||ye.focus():d==="last"&&((be=c.value.lastElementChild)==null||be.focus())}function O(d){const g=o.value+(d==="prev"?-1:1)*r.value;o.value=ot(g,0,b.value-r.value)}const De=S(()=>{let d=o.value>b.value-r.value?-(b.value-r.value)+Se(b.value-r.value-o.value):-o.value;o.value<=0&&(d=Se(-o.value));const g=n.value&&h.value?-1:1;return{transform:`translate${h.value?"X":"Y"}(${g*d}px)`,transition:T.value?"none":"",willChange:T.value?"transform":""}}),ne=S(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),se=S(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!i.value;case!0:return l.value||Math.abs(o.value)>0;case"mobile":return i.value||l.value||Math.abs(o.value)>0;default:return!i.value&&(l.value||Math.abs(o.value)>0)}}),me=S(()=>Math.abs(o.value)>0),he=S(()=>b.value>Math.abs(o.value)+r.value);return J(()=>u(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!h.value,"v-slide-group--has-affixes":se.value,"v-slide-group--is-overflowing":l.value},v.value,e.class],style:e.style,tabindex:N.value||a.selected.value.length?-1:0,onFocus:fe},{default:()=>{var d,g,R;return[se.value&&u("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!me.value}],onClick:()=>me.value&&O("prev")},[((d=t.prev)==null?void 0:d.call(t,ne.value))??u(_e,null,{default:()=>[u(ee,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),u("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:ae},[u("div",{ref:c,class:"v-slide-group__content",style:De.value,onTouchstartPassive:p,onTouchmovePassive:k,onTouchendPassive:I,onFocusin:M,onFocusout:oe,onKeydown:le},[(g=t.default)==null?void 0:g.call(t,ne.value)])]),se.value&&u("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!he.value}],onClick:()=>he.value&&O("next")},[((R=t.next)==null?void 0:R.call(t,ne.value))??u(_e,null,{default:()=>[u(ee,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:O,scrollOffset:o,focus:z}}});function $t(e){return e?e.map(s=>rt(s)?s:{text:s,value:s}):[]}const Mt=q({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ye({mandatory:"force"}),...lt(),...ve()},"VTabs"),Ht=K()({name:"VTabs",props:Mt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const n=nt(e,"modelValue"),v=S(()=>$t(e.items)),{densityClasses:i}=st(e),{backgroundColorClasses:a,backgroundColorStyles:l}=ut(H(e,"bgColor"));return it({VTab:{color:H(e,"color"),direction:H(e,"direction"),stacked:H(e,"stacked"),fixed:H(e,"fixedTabs"),sliderColor:H(e,"sliderColor"),hideSlider:H(e,"hideSlider")}}),J(()=>{const o=Ve.filterProps(e);return u(Ve,ie(o,{modelValue:n.value,"onUpdate:modelValue":r=>n.value=r,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},i.value,a.value,e.class],style:[{"--v-tabs-height":re(e.height)},l.value,e.style],role:"tablist",symbol:Me}),{default:()=>[t.default?t.default():v.value.map(r=>u(He,ie(r,{key:r.text}),null))]})}),{}}}),Yt=e=>{const{touchstartX:s,touchendX:t,touchstartY:n,touchendY:v}=e,i=.5,a=16;e.offsetX=t-s,e.offsetY=v-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<s-a&&e.left(e),e.right&&t>s+a&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&v<n-a&&e.up(e),e.down&&v>n+a&&e.down(e))};function Nt(e,s){var n;const t=e.changedTouches[0];s.touchstartX=t.clientX,s.touchstartY=t.clientY,(n=s.start)==null||n.call(s,{originalEvent:e,...s})}function Ot(e,s){var n;const t=e.changedTouches[0];s.touchendX=t.clientX,s.touchendY=t.clientY,(n=s.end)==null||n.call(s,{originalEvent:e,...s}),Yt(s)}function Ut(e,s){var n;const t=e.changedTouches[0];s.touchmoveX=t.clientX,s.touchmoveY=t.clientY,(n=s.move)==null||n.call(s,{originalEvent:e,...s})}function Dt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Nt(t,s),touchend:t=>Ot(t,s),touchmove:t=>Ut(t,s)}}function Xt(e,s){var l;const t=s.value,n=t!=null&&t.parent?e.parentElement:e,v=(t==null?void 0:t.options)??{passive:!0},i=(l=s.instance)==null?void 0:l.$.uid;if(!n||!i)return;const a=Dt(s.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[i]=a,Re(a).forEach(o=>{n.addEventListener(o,a[o],v)})}function Lt(e,s){var i,a;const t=(i=s.value)!=null&&i.parent?e.parentElement:e,n=(a=s.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const v=t._touchHandlers[n];Re(v).forEach(l=>{t.removeEventListener(l,v[l])}),delete t._touchHandlers[n]}const Ne={mounted:Xt,unmounted:Lt},Oe=Symbol.for("vuetify:v-window"),Ue=Symbol.for("vuetify:v-window-group"),Ft=q({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...de(),...ve(),...ct()},"VWindow"),Wt=K()({name:"VWindow",directives:{Touch:Ne},props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{themeClasses:n}=dt(e),{isRtl:v}=Pe(),{t:i}=vt(),a=Be(e,Ue),l=V(),o=S(()=>v.value?!e.reverse:e.reverse),r=E(!1),b=S(()=>{const y=e.direction==="vertical"?"y":"x",k=(o.value?!r.value:r.value)?"-reverse":"";return`v-window-${y}${k}-transition`}),h=E(0),x=V(void 0),m=S(()=>a.items.value.findIndex(y=>a.selected.value.includes(y.id)));Ie(m,(y,p)=>{const k=a.items.value.length,I=k-1;k<=2?r.value=y<p:y===I&&p===0?r.value=!0:y===0&&p===I?r.value=!1:r.value=y<p}),ft(Oe,{transition:b,isReversed:r,transitionCount:h,transitionHeight:x,rootRef:l});const c=S(()=>e.continuous||m.value!==0),_=S(()=>e.continuous||m.value!==a.items.value.length-1);function $(){c.value&&a.prev()}function Y(){_.value&&a.next()}const T=S(()=>{const y=[],p={icon:v.value?e.nextIcon:e.prevIcon,class:`v-window__${o.value?"right":"left"}`,onClick:a.prev,ariaLabel:i("$vuetify.carousel.prev")};y.push(c.value?t.prev?t.prev({props:p}):u(F,p,null):u("div",null,null));const k={icon:v.value?e.prevIcon:e.nextIcon,class:`v-window__${o.value?"left":"right"}`,onClick:a.next,ariaLabel:i("$vuetify.carousel.next")};return y.push(_.value?t.next?t.next({props:k}):u(F,k,null):u("div",null,null)),y}),B=S(()=>e.touch===!1?e.touch:{...{left:()=>{o.value?$():Y()},right:()=>{o.value?Y():$()},start:p=>{let{originalEvent:k}=p;k.stopPropagation()}},...e.touch===!0?{}:e.touch});return J(()=>Ae(u(e.tag,{ref:l,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var y,p;return[u("div",{class:"v-window__container",style:{height:x.value}},[(y=t.default)==null?void 0:y.call(t,{group:a}),e.showArrows!==!1&&u("div",{class:"v-window__controls"},[T.value])]),(p=t.additional)==null?void 0:p.call(t,{group:a})]}}),[[mt("touch"),B.value]])),{group:a}}}),Gt=q({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...de(),...ht(),...Fe()},"VWindowItem"),ke=K()({name:"VWindowItem",directives:{Touch:Ne},props:Gt(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:t}=s;const n=gt(Oe),v=yt(e,Ue),{isBooted:i}=We();if(!n||!v)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=E(!1),l=S(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function o(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function r(){var c;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=re((c=n.rootRef.value)==null?void 0:c.clientHeight)),n.transitionCount.value+=1)}function b(){o()}function h(c){a.value&&pt(()=>{!l.value||!a.value||!n||(n.transitionHeight.value=re(c.clientHeight))})}const x=S(()=>{const c=n.isReversed.value?e.reverseTransition:e.transition;return l.value?{name:typeof c!="string"?n.transition.value:c,onBeforeEnter:r,onAfterEnter:o,onEnterCancelled:b,onBeforeLeave:r,onAfterLeave:o,onLeaveCancelled:b,onEnter:h}:!1}),{hasContent:m}=Ge(e,v.isSelected);return J(()=>u(Vt,{transition:x.value,disabled:!i.value},{default:()=>{var c;return[Ae(u("div",{class:["v-window-item",v.selectedClass.value,e.class],style:e.style},[m.value&&((c=t.default)==null?void 0:c.call(t))]),[[bt,v.isSelected.value]])]}})),{groupItem:v}}}),aa={__name:"account-settings",setup(e){const s=xt(),t=V(s.params.tab),n=[{title:"Account",icon:"ri-group-line",tab:"account"},{title:"Security",icon:"ri-lock-line",tab:"security"}];return(v,i)=>(A(),G("div",null,[u(Ht,{modelValue:w(t),"onUpdate:modelValue":i[0]||(i[0]=a=>Q(t)?t.value=a:null),"show-arrows":""},{default:f(()=>[(A(),G(ce,null,ze(n,a=>u(He,{key:a.icon,value:a.tab},{default:f(()=>[u(ee,{size:"20",start:"",icon:a.icon},null,8,["icon"]),ue(" "+Z(a.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),u(Wt,{modelValue:w(t),"onUpdate:modelValue":i[1]||(i[1]=a=>Q(t)?t.value=a:null),class:"mt-5 disable-tab-transition",touch:!1},{default:f(()=>[u(ke,{value:"account"},{default:f(()=>[u(kt)]),_:1}),u(ke,{value:"security"},{default:f(()=>[u(It)]),_:1})]),_:1},8,["modelValue"])]))}};export{aa as default};