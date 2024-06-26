import{a as Xe}from"./avatar-1-BeeGmpGQ.js";import{a as L,V as Le}from"./VGrid-Ba-3M4gR.js";import{u as Ce,a8 as Fe,f as V,g as Te,o as E,e as X,w as f,d as r,H as w,S as Q,J as D,a as W,c as G,F as ce,W as ze,V as ee,t as Z,X as F,b as re,p as q,a4 as We,a9 as Ge,l as J,y as je,Z as _,aa as A,B as K,G as ie,I as be,m as de,ab as qe,j as ve,ac as Je,ad as Pe,L as Ke,ae as Be,af as xe,a0 as Ze,N as Ie,a3 as Qe,ag as et,ah as tt,$ as at,ai as ot,q as lt,s as H,aj as nt,ak as st,al as ue,am as Re,k as rt,an as it,x as ut,ao as ct,D as Ee,ap as dt,aq as vt,ar as ft,as as mt,E as ht,a1 as gt,M as yt}from"./index-DnZYFYUY.js";import{a as C,V as te}from"./VCardItem-CWrf9pCa.js";import{V as Ae,a as j}from"./VCard-BaxeRZUM.js";import{V as pt}from"./VDivider-DyDCzL29.js";import{V as $e,a as P}from"./VTextField-DsPONFF5.js";import{a as bt,s as xt}from"./forwardRefs-DWGaNmQL.js";import{V as Se}from"./index-BsfLE0aX.js";import{m as St,u as _t}from"./lazy-DvqizpB5.js";import{u as wt}from"./ssrBoot-CJuGYomj.js";import{M as Vt}from"./VImg-DonsHJwK.js";import"./VInput-DL8649RE.js";const kt={__name:"AccountSettingsAccount",setup(e){const s=Ce(),t=Fe({avatarImg:Xe,firstName:"",lastName:"",email:"",role:"",phone:"",year_of_entry:"",gender:"",target_exam_date:"",university:"",educational_status:"",timezone:"(GMT-11:00) International Date Line West",currency:"USD"});V(!1);const n=localStorage.getItem("token");Te(async()=>{try{const a=await L.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${n}`}}),l=a.data.profile;t.email=l.email;const o=l.name.split(" ");t.firstName=o[0],t.lastName=o.slice(1).join(" "),t.phone=l.phone_number,t.role=l.role,t.gender=l.gender,t.year_of_entry=l.year_of_entry,t.target_exam_date=l.target_exam_date,await i(l.educational_status_id),await v(l.university_id),console.log("resp profile: ",a.data.profile),console.log("name: ",a.data.profile.name)}catch(a){console.log("err: ",a),a.response&&a.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),s.push("/login"))}});const v=async a=>{try{console.log("param universitas: ",a);const l=await L.get("https://gateway.berkompeten.com/api/student/master/university/detail?id="+a,{headers:{Authorization:`Bearer ${n}`}});console.log("response universitas: ",l);const o=l.data.university;t.university=o.name}catch(l){console.error("Error fetching university options:",l)}},i=async a=>{try{console.log("param edu: ",a);const l=await L.get("https://gateway.berkompeten.com/api/student/master/educational-status/detail?id="+a,{headers:{Authorization:`Bearer ${n}`}});console.log("response edu: ",l);const o=l.data.educational_status;t.educational_status=o.name}catch(l){console.error("Error fetching educational status options:",l)}};return(a,l)=>(E(),X(te,null,{default:f(()=>[r(C,{cols:"12"},{default:f(()=>[r(Ae,{title:"Account Details"},{default:f(()=>[r(j,{class:"d-flex"},{default:f(()=>[r(Le,{rounded:"lg",size:"100",class:"me-6",image:t.avatarImg},null,8,["image"])]),_:1}),r(pt),r(j,null,{default:f(()=>[r($e,{class:"mt-6"},{default:f(()=>[r(te,null,{default:f(()=>[r(C,{md:"6",cols:"12"},{default:f(()=>[r(P,{modelValue:t.firstName,"onUpdate:modelValue":l[0]||(l[0]=o=>t.firstName=o),placeholder:"John",label:"First Name",readonly:""},null,8,["modelValue"])]),_:1}),r(C,{md:"6",cols:"12"},{default:f(()=>[r(P,{modelValue:t.lastName,"onUpdate:modelValue":l[1]||(l[1]=o=>t.lastName=o),placeholder:"Doe",label:"Last Name",readonly:""},null,8,["modelValue"])]),_:1}),r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:t.email,"onUpdate:modelValue":l[2]||(l[2]=o=>t.email=o),label:"E-mail",placeholder:"johndoe@gmail.com",type:"email",readonly:""},null,8,["modelValue"])]),_:1}),r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:t.role,"onUpdate:modelValue":l[3]||(l[3]=o=>t.role=o),label:"Role",placeholder:"Student",readonly:""},null,8,["modelValue"])]),_:1}),r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:t.phone,"onUpdate:modelValue":l[4]||(l[4]=o=>t.phone=o),label:"Phone Number",placeholder:"+1 (917) 543-9876",readonly:""},null,8,["modelValue"])]),_:1}),r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:t.gender,"onUpdate:modelValue":l[5]||(l[5]=o=>t.gender=o),label:"Jenis Kelamin",placeholder:"123 Main St, New York, NY 10001",readonly:""},null,8,["modelValue"])]),_:1}),r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:t.year_of_entry,"onUpdate:modelValue":l[6]||(l[6]=o=>t.year_of_entry=o),label:"Tahun Masuk",placeholder:"New York",readonly:""},null,8,["modelValue"])]),_:1}),r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:t.target_exam_date,"onUpdate:modelValue":l[7]||(l[7]=o=>t.target_exam_date=o),label:"Tanggal Ujian",placeholder:"10001",readonly:""},null,8,["modelValue"])]),_:1}),r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:t.university,"onUpdate:modelValue":l[8]||(l[8]=o=>t.university=o),label:"Universitas",placeholder:"10001",readonly:""},null,8,["modelValue"])]),_:1}),r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:t.educational_status,"onUpdate:modelValue":l[9]||(l[9]=o=>t.educational_status=o),label:"Status Edukasi",placeholder:"10001",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Ct=W("p",{class:"text-base font-weight-medium mt-2"}," Password Requirements: ",-1),Tt={class:"d-flex flex-column gap-y-3"},zt={class:"font-weight-medium"},Pt={key:2,class:"mt-2 text-success"},Bt={key:3,class:"mt-2 text-danger",style:{color:"#ff5252"}},It={__name:"AccountSettingsSecurity",setup(e){const s=Ce();V(!1);const t=V(!1),n=V(!1);V("");const v=V(""),i=V(""),a=V(!1),l=V(""),o=V(""),u=localStorage.getItem("token");Te(async()=>{try{const m=await L.get("https://gateway.berkompeten.com/api/student/change-password/status",{headers:{Authorization:`Bearer ${u}`}});a.value=m.data.data.change_password,console.log("change password: ",m.data.data.change_password)}catch(m){console.log("err: ",m),m.response&&m.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),s.push("/login"))}});const p=async()=>{try{console.log("token reset password: ",u);const m=await L.get("https://gateway.berkompeten.com/api/student/reset-password",{headers:{Authorization:`Bearer ${u}`}});console.log("resp reset password: ",m),l.value=m.data.message}catch(m){console.error("reset password error:",m),o.value=m.response.data.message}},h=async()=>{try{if(o.value="",v.value!==i.value){o.value="Your password doesn't match with the confirmation password";return}const m=await L.post("https://gateway.berkompeten.com/api/student/change-password",{password:v.value,password_confirmation:i.value},{headers:{Authorization:`Bearer ${u}`}});console.log("change password otp: ",m),l.value=m.data.message,s.push("/profile/security")}catch(m){m.response&&m.response.data?o.value=m.response.data.errors:o.value="An unexpected error occurred."}},x=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"];return(m,c)=>(E(),X(te,null,{default:f(()=>[r(C,{cols:"12"},{default:f(()=>[r(Ae,{title:"Change Password"},{default:f(()=>[r($e,null,{default:f(()=>[w(a)==!0?(E(),X(j,{key:0},{default:f(()=>[r(te,null,{default:f(()=>[r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:w(v),"onUpdate:modelValue":c[0]||(c[0]=S=>Q(v)?v.value=S:null),type:w(t)?"text":"password","append-inner-icon":w(t)?"ri-eye-off-line":"ri-eye-line",label:"New Password",autocomplete:"on",placeholder:"","onClick:appendInner":c[1]||(c[1]=S=>t.value=!w(t))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),r(C,{cols:"12",md:"6"},{default:f(()=>[r(P,{modelValue:w(i),"onUpdate:modelValue":c[2]||(c[2]=S=>Q(i)?i.value=S:null),type:w(n)?"text":"password","append-inner-icon":w(n)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Confirm New Password",placeholder:"","onClick:appendInner":c[3]||(c[3]=S=>n.value=!w(n))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})):D("",!0),w(a)==!0?(E(),X(j,{key:1},{default:f(()=>[Ct,W("ul",Tt,[(E(),G(ce,null,ze(x,S=>W("li",{key:S,class:"d-flex"},[W("div",null,[r(ee,{size:"7",icon:"ri-checkbox-blank-circle-fill",class:"me-3"})]),W("span",zt,Z(S),1)])),64))])]),_:1})):D("",!0),r(j,{class:"d-flex flex-wrap gap-4"},{default:f(()=>[w(a)==!0?(E(),X(F,{key:0,onClick:h},{default:f(()=>[re("Save changes")]),_:1})):D("",!0),w(a)==!1?(E(),X(F,{key:1,type:"reset",color:"secondary",variant:"outlined",onClick:p},{default:f(()=>[re(" Reset ")]),_:1})):D("",!0),w(l)?(E(),G("div",Pt,Z(w(l)),1)):D("",!0),w(o)?(E(),G("div",Bt,Z(w(o)),1)):D("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Me=Symbol.for("vuetify:v-tabs"),Rt=q({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...We(Ge({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),He=J()({name:"VTab",props:Rt(),setup(e,s){let{slots:t,attrs:n}=s;const{textColorClasses:v,textColorStyles:i}=je(e,"sliderColor"),a=_(()=>e.direction==="horizontal"),l=A(!1),o=V(),u=V();function p(h){var m,c;let{value:x}=h;if(l.value=x,x){const S=(c=(m=o.value)==null?void 0:m.$el.parentElement)==null?void 0:c.querySelector(".v-tab--selected .v-tab__slider"),$=u.value;if(!S||!$)return;const N=getComputedStyle(S).color,T=S.getBoundingClientRect(),B=$.getBoundingClientRect(),y=a.value?"x":"y",b=a.value?"X":"Y",k=a.value?"right":"bottom",I=a.value?"width":"height",ae=T[y],Y=B[y],M=ae>Y?T[k]-B[k]:T[y]-B[y],oe=Math.sign(M)>0?a.value?"right":"bottom":Math.sign(M)<0?a.value?"left":"top":"center",le=(Math.abs(M)+(Math.sign(M)<0?T[I]:B[I]))/Math.max(T[I],B[I])||0,z=T[I]/B[I]||0,O=1.5;bt($,{backgroundColor:[N,"currentcolor"],transform:[`translate${b}(${M}px) scale${b}(${z})`,`translate${b}(${M/O}px) scale${b}(${(le-1)/O+1})`,"none"],transformOrigin:Array(3).fill(oe)},{duration:225,easing:xt})}}return K(()=>{const h=F.filterProps(e);return r(F,ie({symbol:Me,ref:o,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1},h,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":p}),{...t,default:()=>{var x;return r(ce,null,[((x=t.default)==null?void 0:x.call(t))??e.text,!e.hideSlider&&r("div",{ref:u,class:["v-tab__slider",v.value],style:i.value},null)])}})}),{}}});function _e(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function we(e){let{selectedElement:s,containerSize:t,contentSize:n,isRtl:v,currentScrollOffset:i,isHorizontal:a}=e;const l=a?s.clientWidth:s.clientHeight,o=a?s.offsetLeft:s.offsetTop,u=v&&a?n-o-l:o,p=t+i,h=l+u,x=l*.4;return u<=i?i=Math.max(u-x,0):p<=h&&(i=Math.min(i-(p-h-x),n-t)),i}function Et(e){let{selectedElement:s,containerSize:t,contentSize:n,isRtl:v,isHorizontal:i}=e;const a=i?s.clientWidth:s.clientHeight,l=i?s.offsetLeft:s.offsetTop,o=v&&i?n-l-a/2-t/2:l+a/2-t/2;return Math.min(n-t,Math.max(0,o))}const At=Symbol.for("vuetify:v-slide-group"),Ne=q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:At},nextIcon:{type:be,default:"$next"},prevIcon:{type:be,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...de(),...qe(),...ve(),...Je({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Ve=J()({name:"VSlideGroup",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{isRtl:n}=Pe(),{displayClasses:v,mobile:i}=Ke(e),a=Be(e,e.symbol),l=A(!1),o=A(0),u=A(0),p=A(0),h=_(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:m}=xe(),{resizeRef:c,contentRect:S}=xe(),$=_(()=>a.selected.value.length?a.items.value.findIndex(d=>d.id===a.selected.value[0]):-1),N=_(()=>a.selected.value.length?a.items.value.findIndex(d=>d.id===a.selected.value[a.selected.value.length-1]):-1);if(Ze){let d=-1;Ie(()=>[a.selected.value,m.value,S.value,h.value],()=>{cancelAnimationFrame(d),d=requestAnimationFrame(()=>{if(m.value&&S.value){const g=h.value?"width":"height";u.value=m.value[g],p.value=S.value[g],l.value=u.value+1<p.value}if($.value>=0&&c.value){const g=c.value.children[N.value];$.value===0||!l.value?o.value=0:e.centerActive?o.value=Et({selectedElement:g,containerSize:u.value,contentSize:p.value,isRtl:n.value,isHorizontal:h.value}):l.value&&(o.value=we({selectedElement:g,containerSize:u.value,contentSize:p.value,isRtl:n.value,currentScrollOffset:o.value,isHorizontal:h.value}))}})})}const T=A(!1);let B=0,y=0;function b(d){const g=h.value?"clientX":"clientY";y=(n.value&&h.value?-1:1)*o.value,B=d.touches[0][g],T.value=!0}function k(d){if(!l.value)return;const g=h.value?"clientX":"clientY",R=n.value&&h.value?-1:1;o.value=R*(y+B-d.touches[0][g])}function I(d){const g=p.value-u.value;o.value<0||!l.value?o.value=0:o.value>=g&&(o.value=g),T.value=!1}function ae(){x.value&&(x.value[h.value?"scrollLeft":"scrollTop"]=0)}const Y=A(!1);function M(d){if(Y.value=!0,!(!l.value||!c.value)){for(const g of d.composedPath())for(const R of c.value.children)if(R===g){o.value=we({selectedElement:R,containerSize:u.value,contentSize:p.value,isRtl:n.value,currentScrollOffset:o.value,isHorizontal:h.value});return}}}function oe(d){Y.value=!1}function fe(d){var g;!Y.value&&!(d.relatedTarget&&((g=c.value)!=null&&g.contains(d.relatedTarget)))&&z()}function le(d){c.value&&(h.value?d.key==="ArrowRight"?z(n.value?"prev":"next"):d.key==="ArrowLeft"&&z(n.value?"next":"prev"):d.key==="ArrowDown"?z("next"):d.key==="ArrowUp"&&z("prev"),d.key==="Home"?z("first"):d.key==="End"&&z("last"))}function z(d){var g,R,ge,ye,pe;if(c.value)if(!d)(g=Qe(c.value)[0])==null||g.focus();else if(d==="next"){const U=(R=c.value.querySelector(":focus"))==null?void 0:R.nextElementSibling;U?U.focus():z("first")}else if(d==="prev"){const U=(ge=c.value.querySelector(":focus"))==null?void 0:ge.previousElementSibling;U?U.focus():z("last")}else d==="first"?(ye=c.value.firstElementChild)==null||ye.focus():d==="last"&&((pe=c.value.lastElementChild)==null||pe.focus())}function O(d){const g=o.value+(d==="prev"?-1:1)*u.value;o.value=et(g,0,p.value-u.value)}const De=_(()=>{let d=o.value>p.value-u.value?-(p.value-u.value)+_e(p.value-u.value-o.value):-o.value;o.value<=0&&(d=_e(-o.value));const g=n.value&&h.value?-1:1;return{transform:`translate${h.value?"X":"Y"}(${g*d}px)`,transition:T.value?"none":"",willChange:T.value?"transform":""}}),ne=_(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),se=_(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!i.value;case!0:return l.value||Math.abs(o.value)>0;case"mobile":return i.value||l.value||Math.abs(o.value)>0;default:return!i.value&&(l.value||Math.abs(o.value)>0)}}),me=_(()=>Math.abs(o.value)>0),he=_(()=>p.value>Math.abs(o.value)+u.value);return K(()=>r(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!h.value,"v-slide-group--has-affixes":se.value,"v-slide-group--is-overflowing":l.value},v.value,e.class],style:e.style,tabindex:Y.value||a.selected.value.length?-1:0,onFocus:fe},{default:()=>{var d,g,R;return[se.value&&r("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!me.value}],onClick:()=>me.value&&O("prev")},[((d=t.prev)==null?void 0:d.call(t,ne.value))??r(Se,null,{default:()=>[r(ee,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),r("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:ae},[r("div",{ref:c,class:"v-slide-group__content",style:De.value,onTouchstartPassive:b,onTouchmovePassive:k,onTouchendPassive:I,onFocusin:M,onFocusout:oe,onKeydown:le},[(g=t.default)==null?void 0:g.call(t,ne.value)])]),se.value&&r("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!he.value}],onClick:()=>he.value&&O("next")},[((R=t.next)==null?void 0:R.call(t,ne.value))??r(Se,null,{default:()=>[r(ee,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:O,scrollOffset:o,focus:z}}});function $t(e){return e?e.map(s=>st(s)?s:{text:s,value:s}):[]}const Mt=q({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ne({mandatory:"force"}),...tt(),...ve()},"VTabs"),Ht=J()({name:"VTabs",props:Mt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const n=at(e,"modelValue"),v=_(()=>$t(e.items)),{densityClasses:i}=ot(e),{backgroundColorClasses:a,backgroundColorStyles:l}=lt(H(e,"bgColor"));return nt({VTab:{color:H(e,"color"),direction:H(e,"direction"),stacked:H(e,"stacked"),fixed:H(e,"fixedTabs"),sliderColor:H(e,"sliderColor"),hideSlider:H(e,"hideSlider")}}),K(()=>{const o=Ve.filterProps(e);return r(Ve,ie(o,{modelValue:n.value,"onUpdate:modelValue":u=>n.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},i.value,a.value,e.class],style:[{"--v-tabs-height":ue(e.height)},l.value,e.style],role:"tablist",symbol:Me}),{default:()=>[t.default?t.default():v.value.map(u=>r(He,ie(u,{key:u.text}),null))]})}),{}}}),Nt=e=>{const{touchstartX:s,touchendX:t,touchstartY:n,touchendY:v}=e,i=.5,a=16;e.offsetX=t-s,e.offsetY=v-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<s-a&&e.left(e),e.right&&t>s+a&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&v<n-a&&e.up(e),e.down&&v>n+a&&e.down(e))};function Yt(e,s){var n;const t=e.changedTouches[0];s.touchstartX=t.clientX,s.touchstartY=t.clientY,(n=s.start)==null||n.call(s,{originalEvent:e,...s})}function Ot(e,s){var n;const t=e.changedTouches[0];s.touchendX=t.clientX,s.touchendY=t.clientY,(n=s.end)==null||n.call(s,{originalEvent:e,...s}),Nt(s)}function Ut(e,s){var n;const t=e.changedTouches[0];s.touchmoveX=t.clientX,s.touchmoveY=t.clientY,(n=s.move)==null||n.call(s,{originalEvent:e,...s})}function Dt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Yt(t,s),touchend:t=>Ot(t,s),touchmove:t=>Ut(t,s)}}function Xt(e,s){var l;const t=s.value,n=t!=null&&t.parent?e.parentElement:e,v=(t==null?void 0:t.options)??{passive:!0},i=(l=s.instance)==null?void 0:l.$.uid;if(!n||!i)return;const a=Dt(s.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[i]=a,Re(a).forEach(o=>{n.addEventListener(o,a[o],v)})}function Lt(e,s){var i,a;const t=(i=s.value)!=null&&i.parent?e.parentElement:e,n=(a=s.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const v=t._touchHandlers[n];Re(v).forEach(l=>{t.removeEventListener(l,v[l])}),delete t._touchHandlers[n]}const Ye={mounted:Xt,unmounted:Lt},Oe=Symbol.for("vuetify:v-window"),Ue=Symbol.for("vuetify:v-window-group"),Ft=q({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...de(),...ve(),...rt()},"VWindow"),Wt=J()({name:"VWindow",directives:{Touch:Ye},props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{themeClasses:n}=it(e),{isRtl:v}=Pe(),{t:i}=ut(),a=Be(e,Ue),l=V(),o=_(()=>v.value?!e.reverse:e.reverse),u=A(!1),p=_(()=>{const y=e.direction==="vertical"?"y":"x",k=(o.value?!u.value:u.value)?"-reverse":"";return`v-window-${y}${k}-transition`}),h=A(0),x=V(void 0),m=_(()=>a.items.value.findIndex(y=>a.selected.value.includes(y.id)));Ie(m,(y,b)=>{const k=a.items.value.length,I=k-1;k<=2?u.value=y<b:y===I&&b===0?u.value=!0:y===0&&b===I?u.value=!1:u.value=y<b}),ct(Oe,{transition:p,isReversed:u,transitionCount:h,transitionHeight:x,rootRef:l});const c=_(()=>e.continuous||m.value!==0),S=_(()=>e.continuous||m.value!==a.items.value.length-1);function $(){c.value&&a.prev()}function N(){S.value&&a.next()}const T=_(()=>{const y=[],b={icon:v.value?e.nextIcon:e.prevIcon,class:`v-window__${o.value?"right":"left"}`,onClick:a.prev,ariaLabel:i("$vuetify.carousel.prev")};y.push(c.value?t.prev?t.prev({props:b}):r(F,b,null):r("div",null,null));const k={icon:v.value?e.prevIcon:e.nextIcon,class:`v-window__${o.value?"left":"right"}`,onClick:a.next,ariaLabel:i("$vuetify.carousel.next")};return y.push(S.value?t.next?t.next({props:k}):r(F,k,null):r("div",null,null)),y}),B=_(()=>e.touch===!1?e.touch:{...{left:()=>{o.value?$():N()},right:()=>{o.value?N():$()},start:b=>{let{originalEvent:k}=b;k.stopPropagation()}},...e.touch===!0?{}:e.touch});return K(()=>Ee(r(e.tag,{ref:l,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var y,b;return[r("div",{class:"v-window__container",style:{height:x.value}},[(y=t.default)==null?void 0:y.call(t,{group:a}),e.showArrows!==!1&&r("div",{class:"v-window__controls"},[T.value])]),(b=t.additional)==null?void 0:b.call(t,{group:a})]}}),[[dt("touch"),B.value]])),{group:a}}}),Gt=q({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...de(),...vt(),...St()},"VWindowItem"),ke=J()({name:"VWindowItem",directives:{Touch:Ye},props:Gt(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:t}=s;const n=ft(Oe),v=mt(e,Ue),{isBooted:i}=wt();if(!n||!v)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=A(!1),l=_(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function o(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function u(){var c;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=ue((c=n.rootRef.value)==null?void 0:c.clientHeight)),n.transitionCount.value+=1)}function p(){o()}function h(c){a.value&&gt(()=>{!l.value||!a.value||!n||(n.transitionHeight.value=ue(c.clientHeight))})}const x=_(()=>{const c=n.isReversed.value?e.reverseTransition:e.transition;return l.value?{name:typeof c!="string"?n.transition.value:c,onBeforeEnter:u,onAfterEnter:o,onEnterCancelled:p,onBeforeLeave:u,onAfterLeave:o,onLeaveCancelled:p,onEnter:h}:!1}),{hasContent:m}=_t(e,v.isSelected);return K(()=>r(Vt,{transition:x.value,disabled:!i.value},{default:()=>{var c;return[Ee(r("div",{class:["v-window-item",v.selectedClass.value,e.class],style:e.style},[m.value&&((c=t.default)==null?void 0:c.call(t))]),[[ht,v.isSelected.value]])]}})),{groupItem:v}}}),ra={__name:"account-settings",setup(e){const s=yt(),t=V(s.params.tab),n=[{title:"Account",icon:"ri-group-line",tab:"account"},{title:"Security",icon:"ri-lock-line",tab:"security"}];return(v,i)=>(E(),G("div",null,[r(Ht,{modelValue:w(t),"onUpdate:modelValue":i[0]||(i[0]=a=>Q(t)?t.value=a:null),"show-arrows":""},{default:f(()=>[(E(),G(ce,null,ze(n,a=>r(He,{key:a.icon,value:a.tab},{default:f(()=>[r(ee,{size:"20",start:"",icon:a.icon},null,8,["icon"]),re(" "+Z(a.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),r(Wt,{modelValue:w(t),"onUpdate:modelValue":i[1]||(i[1]=a=>Q(t)?t.value=a:null),class:"mt-5 disable-tab-transition",touch:!1},{default:f(()=>[r(ke,{value:"account"},{default:f(()=>[r(kt)]),_:1}),r(ke,{value:"security"},{default:f(()=>[r(It)]),_:1})]),_:1},8,["modelValue"])]))}};export{ra as default};
