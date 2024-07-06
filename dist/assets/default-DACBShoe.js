import{_ as ee,o as x,c as te,a as L,b as A,t as C,d as u,V as P,e as V,w as f,n as Z,r as we,f as H,u as re,g as ne,F as Pe,p as _e,I as Ce,m as Le,h as Ie,i as Be,j as Ye,k as Ne,l as Se,q as De,s as ae,v as $e,x as Ve,y as Oe,z as Fe,A as Ke,B as Te,C as qe,D as Ue,E as je,G as le,H as X,J as We,K as R,L as Re,M as oe,N as Xe,O as z,P as $,Q as ze,R as Je,S as Qe,T as Ge,U as Ze}from"./index-B2uTGNIn.js";import{a as J}from"./VGrid-CSSzMaaB.js";import{a as se}from"./avatar-1-BeeGmpGQ.js";import{V as K,a as q,b as ie,c as et,d as tt}from"./VMenu-DrmoD_pf.js";import{m as rt,M as nt}from"./index-DLFc4Mbc.js";import{V as ce}from"./VAvatar-AhXlFfXf.js";import{V as ue}from"./VImg-HgiTR8XF.js";import{V as he}from"./ssrBoot-DPxRLudO.js";import{l as ke}from"./berkompeten_logo-eijgBe6e.js";import{V as ot}from"./VSpacer-CLj8aUTV.js";import"./forwardRefs-Bb7VBe2S.js";import"./VOverlay-yvzz_hLo.js";import"./lazy-BsolpoiJ.js";const at={},lt={class:"h-100 d-flex align-center justify-space-between"},st={class:"d-flex align-center"},it=L("a",{href:"https://themeselection.com",target:"_blank",rel:"noopener noreferrer",class:"text-primary ms-1"},"Harjonan",-1),ct=L("span",{class:"d-md-flex gap-x-4 text-primary d-none"},[L("a",{href:"https://themeselection.com/license/",target:"noopener noreferrer"},"License"),L("a",{href:"https://themeselection.com/",target:"noopener noreferrer"},"More Themes"),L("a",{href:"https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/",target:"noopener noreferrer"},"Documentation")],-1);function ut(e,t){return x(),te("div",lt,[L("span",st,[A(" © "+C(new Date().getFullYear())+" Made With ",1),u(P,{icon:"ri-heart-line",color:"error",size:"1.25rem",class:"mx-1"}),A(" By "),it]),ct])}const ht=ee(at,[["render",ut]]),dt={class:"nav-item-title"},T={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(e){return(t,o)=>(x(),te("li",{class:Z(["nav-link",{disabled:e.item.disable}])},[(x(),V(we(e.item.to?"RouterLink":"a"),{to:e.item.to,href:e.item.href,target:e.item.target},{default:f(()=>[u(P,{icon:e.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),L("span",dt,C(e.item.title),1),L("span",{class:Z(["nav-item-badge",e.item.badgeClass])},C(e.item.badgeContent),3)]),_:1},8,["to","href","target"]))],2))}},ft={__name:"NavItems",setup(e){const t=localStorage.getItem("token"),o=H(null),n=re();return ne(async()=>{if(t)try{const l=await J.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${t}`}});o.value=l.data}catch(l){l.response&&l.response.status===401&&n.push("/login")}else n.push("/login")}),(l,i)=>(x(),te(Pe,null,[u(T,{item:{title:"Beranda",to:"/dashboard",icon:"ri-home-smile-line"}}),u(T,{item:{title:"Sub Topic Management",to:"/subtopic-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"Media Management",to:"/media-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"Question Packet Management",to:"/question-packet-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"Question Management",to:"/question-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"User Management",to:"/user-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"Admin Management",to:"/admin-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"Membership Management",to:"/membership-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"Category Lab Management",to:"/category-lab-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"University Management",to:"/university-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"Educational Status Management",to:"/educational-status-management",icon:"ri-file-edit-line"}}),u(T,{item:{title:"Exam Dates Management",to:"/exam-dates-management",icon:"ri-file-edit-line"}})],64))}},pt=_e({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Ce,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...Le(),...Ie({location:"top end"}),...Be(),...Ye(),...Ne(),...rt({transition:"scale-rotate-transition"})},"VBadge"),de=Se()({name:"VBadge",inheritAttrs:!1,props:pt(),setup(e,t){const{backgroundColorClasses:o,backgroundColorStyles:n}=De(ae(e,"color")),{roundedClasses:l}=$e(e),{t:i}=Ve(),{textColorClasses:a,textColorStyles:s}=Oe(ae(e,"textColor")),{themeClasses:r}=Fe(),{locationStyles:c}=Ke(e,!0,h=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(h)?+(e.offsetY??0):["left","right"].includes(h)?+(e.offsetX??0):0));return Te(()=>{const h=Number(e.content),g=!e.max||isNaN(h)?e.content:h<=+e.max?h:`${e.max}+`,[m,y]=qe(t.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return u(e.tag,le({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},y,{style:e.style}),{default:()=>{var d,p;return[u("div",{class:"v-badge__wrapper"},[(p=(d=t.slots).default)==null?void 0:p.call(d),u(nt,{transition:e.transition},{default:()=>{var Y,b;return[Ue(u("span",le({class:["v-badge__badge",r.value,o.value,l.value,a.value],style:[n.value,s.value,e.inline?{}:c.value],"aria-atomic":"true","aria-label":i(e.label,h),"aria-live":"polite",role:"status"},m),[e.dot?void 0:t.slots.badge?(b=(Y=t.slots).badge)==null?void 0:b.call(Y):e.icon?u(P,{icon:e.icon},null):g]),[[je,e.modelValue]])]}})])]}})}),{}}}),vt=_e({start:Boolean,end:Boolean,...Le(),...Ye()},"VListItemAction"),G=Se()({name:"VListItemAction",props:vt(),setup(e,t){let{slots:o}=t;return Te(()=>u(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},o)),{}}}),mt={__name:"UserProfile",setup(e){const t=re(),o=localStorage.getItem("token"),n=H(null);ne(async()=>{try{const a=await J.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${o}`}});n.value=a.data.data,console.log("profile: ",n),console.log("name: ",name)}catch(a){console.log("err: ",a),a.response&&a.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),t.push("/login"))}});const l=async()=>{try{console.log("profile: ",n),t.push("/profile/account")}catch(a){console.error("Profile error:",a)}},i=async()=>{try{const a=await J.post("https://gateway.berkompeten.com/api/admin/logout",null,{headers:{Authorization:`Bearer ${o}`}});console.log("resp logout: ",a),localStorage.removeItem("token"),localStorage.removeItem("profile"),t.push("/login")}catch(a){console.error("Logout error:",a)}};return(a,s)=>n.value?(x(),V(G,{key:0,start:""},{default:f(()=>[u(K,null,{prepend:f(()=>[u(G,{start:""},{default:f(()=>[u(de,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:f(()=>[u(ce,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:f(()=>[u(ue,{src:X(se)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:f(()=>[u(q,{class:"font-weight-semibold"},{default:f(()=>[A(C(n.value.name),1)]),_:1}),u(ie,null,{default:f(()=>[A("Admin")]),_:1})]),_:1}),u(et,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:f(()=>[u(tt,null,{default:f(()=>[u(K,null,{prepend:f(()=>[u(G,{start:""},{default:f(()=>[u(de,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:f(()=>[u(ce,{color:"primary",variant:"tonal"},{default:f(()=>[u(ue,{src:X(se)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:f(()=>[u(q,{class:"font-weight-semibold"},{default:f(()=>[A(C(n.value.name),1)]),_:1}),u(ie,null,{default:f(()=>[A("Admin")]),_:1})]),_:1}),u(he,{class:"my-2"}),u(K,{onClick:l},{prepend:f(()=>[u(P,{class:"me-2",icon:"ri-user-line",size:"22"})]),default:f(()=>[u(q,null,{default:f(()=>[A("Profile")]),_:1})]),_:1}),u(he,{class:"my-2"}),u(K,{onClick:i},{prepend:f(()=>[u(P,{class:"me-2",icon:"ri-logout-box-r-line",size:"22"})]),default:f(()=>[u(q,null,{default:f(()=>[A("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):We("",!0)}};/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function k(e){return getComputedStyle(e)}function S(e,t){for(var o in t){var n=t[o];typeof n=="number"&&(n=n+"px"),e.style[o]=n}return e}function U(e){var t=document.createElement("div");return t.className=e,t}var fe=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function E(e,t){if(!fe)throw new Error("No element matching method supported");return fe.call(e,t)}function N(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function pe(e,t){return Array.prototype.filter.call(e.children,function(o){return E(o,t)})}var _={main:"ps",rtl:"ps__rtl",element:{thumb:function(e){return"ps__thumb-"+e},rail:function(e){return"ps__rail-"+e},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(e){return"ps--active-"+e},scrolling:function(e){return"ps--scrolling-"+e}}},He={x:null,y:null};function Me(e,t){var o=e.element.classList,n=_.state.scrolling(t);o.contains(n)?clearTimeout(He[t]):o.add(n)}function Ae(e,t){He[t]=setTimeout(function(){return e.isAlive&&e.element.classList.remove(_.state.scrolling(t))},e.settings.scrollingThreshold)}function gt(e,t){Me(e,t),Ae(e,t)}var O=function(t){this.element=t,this.handlers={}},Ee={isEmpty:{configurable:!0}};O.prototype.bind=function(t,o){typeof this.handlers[t]>"u"&&(this.handlers[t]=[]),this.handlers[t].push(o),this.element.addEventListener(t,o,!1)};O.prototype.unbind=function(t,o){var n=this;this.handlers[t]=this.handlers[t].filter(function(l){return o&&l!==o?!0:(n.element.removeEventListener(t,l,!1),!1)})};O.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)};Ee.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every(function(t){return e.handlers[t].length===0})};Object.defineProperties(O.prototype,Ee);var D=function(){this.eventElements=[]};D.prototype.eventElement=function(t){var o=this.eventElements.filter(function(n){return n.element===t})[0];return o||(o=new O(t),this.eventElements.push(o)),o};D.prototype.bind=function(t,o,n){this.eventElement(t).bind(o,n)};D.prototype.unbind=function(t,o,n){var l=this.eventElement(t);l.unbind(o,n),l.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(l),1)};D.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]};D.prototype.once=function(t,o,n){var l=this.eventElement(t),i=function(a){l.unbind(o,i),n(a)};l.bind(o,i)};function j(e){if(typeof window.CustomEvent=="function")return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t}function Q(e,t,o,n,l){n===void 0&&(n=!0),l===void 0&&(l=!1);var i;if(t==="top")i=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(t==="left")i=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");bt(e,o,i,n,l)}function bt(e,t,o,n,l){var i=o[0],a=o[1],s=o[2],r=o[3],c=o[4],h=o[5];n===void 0&&(n=!0),l===void 0&&(l=!1);var g=e.element;e.reach[r]=null,g[s]<1&&(e.reach[r]="start"),g[s]>e[i]-e[a]-1&&(e.reach[r]="end"),t&&(g.dispatchEvent(j("ps-scroll-"+r)),t<0?g.dispatchEvent(j("ps-scroll-"+c)):t>0&&g.dispatchEvent(j("ps-scroll-"+h)),n&&gt(e,r)),e.reach[r]&&(t||l)&&g.dispatchEvent(j("ps-"+r+"-reach-"+e.reach[r]))}function w(e){return parseInt(e,10)||0}function yt(e){return E(e,"input,[contenteditable]")||E(e,"select,[contenteditable]")||E(e,"textarea,[contenteditable]")||E(e,"button,[contenteditable]")}function wt(e){var t=k(e);return w(t.width)+w(t.paddingLeft)+w(t.paddingRight)+w(t.borderLeftWidth)+w(t.borderRightWidth)}var B={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function M(e){var t=e.element,o=Math.floor(t.scrollTop),n=t.getBoundingClientRect();e.containerWidth=Math.round(n.width),e.containerHeight=Math.round(n.height),e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||(pe(t,_.element.rail("x")).forEach(function(l){return N(l)}),t.appendChild(e.scrollbarXRail)),t.contains(e.scrollbarYRail)||(pe(t,_.element.rail("y")).forEach(function(l){return N(l)}),t.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=ve(e,w(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=w((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=ve(e,w(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=w(o*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),_t(t,e),e.scrollbarXActive?t.classList.add(_.state.active("x")):(t.classList.remove(_.state.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=e.isRtl===!0?e.contentWidth:0),e.scrollbarYActive?t.classList.add(_.state.active("y")):(t.classList.remove(_.state.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0)}function ve(e,t){return e.settings.minScrollbarLength&&(t=Math.max(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=Math.min(t,e.settings.maxScrollbarLength)),t}function _t(e,t){var o={width:t.railXWidth},n=Math.floor(e.scrollTop);t.isRtl?o.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth-t.contentWidth:o.left=e.scrollLeft,t.isScrollbarXUsingBottom?o.bottom=t.scrollbarXBottom-n:o.top=t.scrollbarXTop+n,S(t.scrollbarXRail,o);var l={top:n,height:t.railYHeight};t.isScrollbarYUsingRight?t.isRtl?l.right=t.contentWidth-(t.negativeScrollAdjustment+e.scrollLeft)-t.scrollbarYRight-t.scrollbarYOuterWidth-9:l.right=t.scrollbarYRight-e.scrollLeft:t.isRtl?l.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth*2-t.contentWidth-t.scrollbarYLeft-t.scrollbarYOuterWidth:l.left=t.scrollbarYLeft+e.scrollLeft,S(t.scrollbarYRail,l),S(t.scrollbarX,{left:t.scrollbarXLeft,width:t.scrollbarXWidth-t.railBorderXWidth}),S(t.scrollbarY,{top:t.scrollbarYTop,height:t.scrollbarYHeight-t.railBorderYWidth})}function Lt(e){e.element,e.event.bind(e.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),e.event.bind(e.scrollbarYRail,"mousedown",function(t){var o=t.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top,n=o>e.scrollbarYTop?1:-1;e.element.scrollTop+=n*e.containerHeight,M(e),t.stopPropagation()}),e.event.bind(e.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),e.event.bind(e.scrollbarXRail,"mousedown",function(t){var o=t.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left,n=o>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=n*e.containerWidth,M(e),t.stopPropagation()})}function Yt(e){me(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),me(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function me(e,t){var o=t[0],n=t[1],l=t[2],i=t[3],a=t[4],s=t[5],r=t[6],c=t[7],h=t[8],g=e.element,m=null,y=null,d=null;function p(v){v.touches&&v.touches[0]&&(v[l]=v.touches[0].pageY),g[r]=m+d*(v[l]-y),Me(e,c),M(e),v.stopPropagation(),v.type.startsWith("touch")&&v.changedTouches.length>1&&v.preventDefault()}function Y(){Ae(e,c),e[h].classList.remove(_.state.clicking),e.event.unbind(e.ownerDocument,"mousemove",p)}function b(v,W){m=g[r],W&&v.touches&&(v[l]=v.touches[0].pageY),y=v[l],d=(e[n]-e[o])/(e[i]-e[s]),W?e.event.bind(e.ownerDocument,"touchmove",p):(e.event.bind(e.ownerDocument,"mousemove",p),e.event.once(e.ownerDocument,"mouseup",Y),v.preventDefault()),e[h].classList.add(_.state.clicking),v.stopPropagation()}e.event.bind(e[a],"mousedown",function(v){b(v)}),e.event.bind(e[a],"touchstart",function(v){b(v,!0)})}function St(e){var t=e.element,o=function(){return E(t,":hover")},n=function(){return E(e.scrollbarX,":focus")||E(e.scrollbarY,":focus")};function l(i,a){var s=Math.floor(t.scrollTop);if(i===0){if(!e.scrollbarYActive)return!1;if(s===0&&a>0||s>=e.contentHeight-e.containerHeight&&a<0)return!e.settings.wheelPropagation}var r=t.scrollLeft;if(a===0){if(!e.scrollbarXActive)return!1;if(r===0&&i<0||r>=e.contentWidth-e.containerWidth&&i>0)return!e.settings.wheelPropagation}return!0}e.event.bind(e.ownerDocument,"keydown",function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&!(!o()&&!n())){var a=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(a){if(a.tagName==="IFRAME")a=a.contentDocument.activeElement;else for(;a.shadowRoot;)a=a.shadowRoot.activeElement;if(yt(a))return}var s=0,r=0;switch(i.which){case 37:i.metaKey?s=-e.contentWidth:i.altKey?s=-e.containerWidth:s=-30;break;case 38:i.metaKey?r=e.contentHeight:i.altKey?r=e.containerHeight:r=30;break;case 39:i.metaKey?s=e.contentWidth:i.altKey?s=e.containerWidth:s=30;break;case 40:i.metaKey?r=-e.contentHeight:i.altKey?r=-e.containerHeight:r=-30;break;case 32:i.shiftKey?r=e.containerHeight:r=-e.containerHeight;break;case 33:r=e.containerHeight;break;case 34:r=-e.containerHeight;break;case 36:r=e.contentHeight;break;case 35:r=-e.contentHeight;break;default:return}e.settings.suppressScrollX&&s!==0||e.settings.suppressScrollY&&r!==0||(t.scrollTop-=r,t.scrollLeft+=s,M(e),l(s,r)&&i.preventDefault())}})}function Tt(e){var t=e.element;function o(a,s){var r=Math.floor(t.scrollTop),c=t.scrollTop===0,h=r+t.offsetHeight===t.scrollHeight,g=t.scrollLeft===0,m=t.scrollLeft+t.offsetWidth===t.scrollWidth,y;return Math.abs(s)>Math.abs(a)?y=c||h:y=g||m,y?!e.settings.wheelPropagation:!0}function n(a){var s=a.deltaX,r=-1*a.deltaY;return(typeof s>"u"||typeof r>"u")&&(s=-1*a.wheelDeltaX/6,r=a.wheelDeltaY/6),a.deltaMode&&a.deltaMode===1&&(s*=10,r*=10),s!==s&&r!==r&&(s=0,r=a.wheelDelta),a.shiftKey?[-r,-s]:[s,r]}function l(a,s,r){if(!B.isWebKit&&t.querySelector("select:focus"))return!0;if(!t.contains(a))return!1;for(var c=a;c&&c!==t;){if(c.classList.contains(_.element.consuming))return!0;var h=k(c);if(r&&h.overflowY.match(/(scroll|auto)/)){var g=c.scrollHeight-c.clientHeight;if(g>0&&(c.scrollTop>0&&r<0||c.scrollTop<g&&r>0))return!0}if(s&&h.overflowX.match(/(scroll|auto)/)){var m=c.scrollWidth-c.clientWidth;if(m>0&&(c.scrollLeft>0&&s<0||c.scrollLeft<m&&s>0))return!0}c=c.parentNode}return!1}function i(a){var s=n(a),r=s[0],c=s[1];if(!l(a.target,r,c)){var h=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(c?t.scrollTop-=c*e.settings.wheelSpeed:t.scrollTop+=r*e.settings.wheelSpeed,h=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(r?t.scrollLeft+=r*e.settings.wheelSpeed:t.scrollLeft-=c*e.settings.wheelSpeed,h=!0):(t.scrollTop-=c*e.settings.wheelSpeed,t.scrollLeft+=r*e.settings.wheelSpeed),M(e),h=h||o(r,c),h&&!a.ctrlKey&&(a.stopPropagation(),a.preventDefault())}}typeof window.onwheel<"u"?e.event.bind(t,"wheel",i):typeof window.onmousewheel<"u"&&e.event.bind(t,"mousewheel",i)}function Wt(e){if(!B.supportsTouch&&!B.supportsIePointer)return;var t=e.element;function o(d,p){var Y=Math.floor(t.scrollTop),b=t.scrollLeft,v=Math.abs(d),W=Math.abs(p);if(W>v){if(p<0&&Y===e.contentHeight-e.containerHeight||p>0&&Y===0)return window.scrollY===0&&p>0&&B.isChrome}else if(v>W&&(d<0&&b===e.contentWidth-e.containerWidth||d>0&&b===0))return!0;return!0}function n(d,p){t.scrollTop-=p,t.scrollLeft-=d,M(e)}var l={},i=0,a={},s=null;function r(d){return d.targetTouches?d.targetTouches[0]:d}function c(d){return d.pointerType&&d.pointerType==="pen"&&d.buttons===0?!1:!!(d.targetTouches&&d.targetTouches.length===1||d.pointerType&&d.pointerType!=="mouse"&&d.pointerType!==d.MSPOINTER_TYPE_MOUSE)}function h(d){if(c(d)){var p=r(d);l.pageX=p.pageX,l.pageY=p.pageY,i=new Date().getTime(),s!==null&&clearInterval(s)}}function g(d,p,Y){if(!t.contains(d))return!1;for(var b=d;b&&b!==t;){if(b.classList.contains(_.element.consuming))return!0;var v=k(b);if(Y&&v.overflowY.match(/(scroll|auto)/)){var W=b.scrollHeight-b.clientHeight;if(W>0&&(b.scrollTop>0&&Y<0||b.scrollTop<W&&Y>0))return!0}if(p&&v.overflowX.match(/(scroll|auto)/)){var I=b.scrollWidth-b.clientWidth;if(I>0&&(b.scrollLeft>0&&p<0||b.scrollLeft<I&&p>0))return!0}b=b.parentNode}return!1}function m(d){if(c(d)){var p=r(d),Y={pageX:p.pageX,pageY:p.pageY},b=Y.pageX-l.pageX,v=Y.pageY-l.pageY;if(g(d.target,b,v))return;n(b,v),l=Y;var W=new Date().getTime(),I=W-i;I>0&&(a.x=b/I,a.y=v/I,i=W),o(b,v)&&d.preventDefault()}}function y(){e.settings.swipeEasing&&(clearInterval(s),s=setInterval(function(){if(e.isInitialized){clearInterval(s);return}if(!a.x&&!a.y){clearInterval(s);return}if(Math.abs(a.x)<.01&&Math.abs(a.y)<.01){clearInterval(s);return}if(!e.element){clearInterval(s);return}n(a.x*30,a.y*30),a.x*=.8,a.y*=.8},10))}B.supportsTouch?(e.event.bind(t,"touchstart",h),e.event.bind(t,"touchmove",m),e.event.bind(t,"touchend",y)):B.supportsIePointer&&(window.PointerEvent?(e.event.bind(t,"pointerdown",h),e.event.bind(t,"pointermove",m),e.event.bind(t,"pointerup",y)):window.MSPointerEvent&&(e.event.bind(t,"MSPointerDown",h),e.event.bind(t,"MSPointerMove",m),e.event.bind(t,"MSPointerUp",y)))}var Rt=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},Xt={"click-rail":Lt,"drag-thumb":Yt,keyboard:St,wheel:Tt,touch:Wt},F=function(t,o){var n=this;if(o===void 0&&(o={}),typeof t=="string"&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=t,t.classList.add(_.main),this.settings=Rt();for(var l in o)this.settings[l]=o[l];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var i=function(){return t.classList.add(_.state.focus)},a=function(){return t.classList.remove(_.state.focus)};this.isRtl=k(t).direction==="rtl",this.isRtl===!0&&t.classList.add(_.rtl),this.isNegativeScroll=function(){var c=t.scrollLeft,h=null;return t.scrollLeft=-1,h=t.scrollLeft<0,t.scrollLeft=c,h}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new D,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=U(_.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=U(_.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",i),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var s=k(this.scrollbarXRail);this.scrollbarXBottom=parseInt(s.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=w(s.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=w(s.borderLeftWidth)+w(s.borderRightWidth),S(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=w(s.marginLeft)+w(s.marginRight),S(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=U(_.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=U(_.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",i),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var r=k(this.scrollbarYRail);this.scrollbarYRight=parseInt(r.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=w(r.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?wt(this.scrollbarY):null,this.railBorderYWidth=w(r.borderTopWidth)+w(r.borderBottomWidth),S(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=w(r.marginTop)+w(r.marginBottom),S(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return Xt[c](n)}),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",function(c){return n.onScroll(c)}),M(this)};F.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,S(this.scrollbarXRail,{display:"block"}),S(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=w(k(this.scrollbarXRail).marginLeft)+w(k(this.scrollbarXRail).marginRight),this.railYMarginHeight=w(k(this.scrollbarYRail).marginTop)+w(k(this.scrollbarYRail).marginBottom),S(this.scrollbarXRail,{display:"none"}),S(this.scrollbarYRail,{display:"none"}),M(this),Q(this,"top",0,!1,!0),Q(this,"left",0,!1,!0),S(this.scrollbarXRail,{display:""}),S(this.scrollbarYRail,{display:""}))};F.prototype.onScroll=function(t){this.isAlive&&(M(this),Q(this,"top",this.element.scrollTop-this.lastScrollTop),Q(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};F.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),N(this.scrollbarX),N(this.scrollbarY),N(this.scrollbarXRail),N(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};F.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")};const ge=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var kt={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:ge,data(){return{ps:null}},watch:{watchOptions(e){!e&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new F(this.$el,this.options),ge.forEach(e=>{this.ps.element.addEventListener(e,t=>this.$emit(e,t))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return R(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}};const Ht=e=>(ze("data-v-b1c77191"),e=e(),Je(),e),Mt={class:"nav-header"},At={class:"d-flex align-items-center"},Et=["innerHTML"],xt=Ht(()=>L("div",{class:"vertical-nav-items-shadow"},null,-1)),Pt={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(e){const t=e,{mdAndDown:o}=Re(),n=H(),l=oe();Xe(()=>l.path,()=>{t.toggleIsOverlayNavActive(!1)});const i=H(!1),a=c=>i.value=c,s=c=>{i.value=c.target.scrollTop>0},r=()=>{t.toggleIsOverlayNavActive(!t.isOverlayNavActive)};return(c,h)=>{const g=z("RouterLink");return x(),V(we(t.tag),{ref_key:"refNav",ref:n,class:Z(["layout-vertical-nav",[{visible:e.isOverlayNavActive,scrolled:X(i),"overlay-nav":X(o)}]])},{default:f(()=>[L("div",Mt,[L("div",At,[u(g,{to:"/",class:"app-logo app-title-wrapper"},{default:f(()=>[L("div",{class:"d-flex",innerHTML:X(ke)},null,8,Et)]),_:1}),L("button",{onClick:r,class:"header-action"},[u(P,{icon:"ri-menu-line"})])])]),$(c.$slots,"before-nav-items",{},()=>[xt],!0),$(c.$slots,"nav-items",{updateIsVerticalNavScrolled:a},()=>[u(X(kt),{tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:s},{default:f(()=>[$(c.$slots,"default",{},void 0,!0)]),_:3})],!0),$(c.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}},Ct=ee(Pt,[["__scopeId","data-v-b1c77191"]]);function be(e){return typeof e=="function"?e():X(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function It(e,t){function o(...n){return new Promise((l,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(l).catch(i)})}return o}const xe=e=>e();function Bt(e=xe){const t=H(!0);function o(){t.value=!1}function n(){t.value=!0}const l=(...i)=>{t.value&&e(...i)};return{isActive:Ge(t),pause:o,resume:n,eventFilter:l}}function Nt(e,t,o={}){const{eventFilter:n=xe,...l}=o;return Xe(e,It(n,t),l)}function ye(e,t,o={}){const{eventFilter:n,...l}=o,{eventFilter:i,pause:a,resume:s,isActive:r}=Bt(n);return{stop:Nt(e,t,{...l,eventFilter:i}),pause:a,resume:s,isActive:r}}function Dt(e,t,...[o]){const{flush:n="sync",deep:l=!1,immediate:i=!0,direction:a="both",transform:s={}}=o||{},r=[],c="ltr"in s&&s.ltr||(m=>m),h="rtl"in s&&s.rtl||(m=>m);return(a==="both"||a==="ltr")&&r.push(ye(e,m=>{r.forEach(y=>y.pause()),t.value=c(m),r.forEach(y=>y.resume())},{flush:n,deep:l,immediate:i})),(a==="both"||a==="rtl")&&r.push(ye(t,m=>{r.forEach(y=>y.pause()),e.value=h(m),r.forEach(y=>y.resume())},{flush:n,deep:l,immediate:i})),()=>{r.forEach(m=>m.stop())}}function $t(e=!1,t={}){const{truthyValue:o=!0,falsyValue:n=!1}=t,l=Qe(e),i=H(e);function a(s){if(arguments.length)return i.value=s,i.value;{const r=be(o);return i.value=i.value===r?be(n):r,i.value}}return l?a:[i,a]}const Vt=Ze({setup(e,{slots:t}){const o=H(!1),n=H(!1),l=$t(o),i=oe(),{mdAndDown:a}=Re();return Dt(o,n),()=>{var m,y,d;const s=R(Ct,{isOverlayNavActive:o.value,toggleIsOverlayNavActive:l},{"nav-header":()=>{var p;return(p=t["vertical-nav-header"])==null?void 0:p.call(t,{toggleIsOverlayNavActive:l})},"before-nav-items":()=>{var p;return(p=t["before-vertical-nav-items"])==null?void 0:p.call(t)},default:()=>{var p;return(p=t["vertical-nav-content"])==null?void 0:p.call(t)},"after-nav-items":()=>{var p;return(p=t["after-vertical-nav-items"])==null?void 0:p.call(t)}}),r=R("header",{class:["layout-navbar navbar-blur"]},[R("div",{class:"navbar-content-container"},(m=t.navbar)==null?void 0:m.call(t,{toggleVerticalOverlayNavActive:l}))]),c=R("main",{class:"layout-page-content"},R("div",{class:"page-content-container"},(y=t.default)==null?void 0:y.call(t))),h=R("footer",{class:"layout-footer"},[R("div",{class:"footer-content-container"},(d=t.footer)==null?void 0:d.call(t))]),g=R("div",{class:["layout-overlay",{visible:n.value}],onClick:()=>{n.value=!n.value}});return R("div",{class:["layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",a.value&&"layout-overlay-nav",i.meta.layoutWrapperClasses]},[s,R("div",{class:"layout-content-wrapper"},[r,c,h]),g])}}}),Ot={class:"d-flex h-100 align-center"},Ft={class:"d-flex flex-column",style:{"padding-block-start":"20px"}},Kt={class:"welcome-text text-h5 font-weight-semibold mb-1"},qt={class:"date-text font-weight-semibold mb-1"},Ut=["innerHTML"],jt={__name:"DefaultLayoutWithVerticalNav",setup(e){const t=re(),o=oe();var n=localStorage.getItem("token");const l=H(""),a=(()=>{const s=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],r=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],c=new Date,h=s[c.getDay()],g=c.getDate(),m=r[c.getMonth()],y=c.getFullYear();return`${h}, ${g} ${m} ${y}`})();return ne(async()=>{console.log("token def: ",n);const s=o.query.token;if(console.log("token route: ",s),s&&(n=s,localStorage.setItem("token",n),console.log("token from route: ",n),t.push("/dashboard")),n)try{const r=await J.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${n}`}});l.value=r.data.data.name,console.log("data: ",r.data),console.log("name: ",l)}catch(r){console.log("err: ",r),r.response&&r.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),t.push("/login"))}else t.push("/login");s&&window.location.reload()}),(s,r)=>{const c=z("IconBtn"),h=z("RouterLink");return X(n)?(x(),V(Vt,{key:0},{navbar:f(({toggleVerticalOverlayNavActive:g})=>[L("div",Ot,[u(c,{class:"ms-n3 d-lg-none",onClick:m=>g(!0)},{default:f(()=>[u(P,{icon:"ri-menu-line"})]),_:2},1032,["onClick"]),L("div",Ft,[L("h5",Kt," Hi, "+C(l.value)+" Selamat Datang ",1),L("p",qt,C(X(a)),1)]),u(ot),u(mt)])]),"vertical-nav-header":f(({toggleIsOverlayNavActive:g})=>[u(c,{class:"ms-n3 d-lg-none",onClick:r[0]||(r[0]=m=>s.toggleVerticalOverlayNavActive(!0))},{default:f(()=>[u(P,{icon:"ri-menu-line"})]),_:1}),u(h,{to:"/",class:"app-logo app-title-wrapper"},{default:f(()=>[L("div",{class:"d-flex",innerHTML:X(ke)},null,8,Ut)]),_:1})]),"vertical-nav-content":f(()=>[u(ft)]),footer:f(()=>[u(ht)]),default:f(()=>[$(s.$slots,"default",{},void 0,!0)]),_:3})):We("",!0)}}},zt=ee(jt,[["__scopeId","data-v-cf90b3d1"]]),cr={__name:"default",setup(e){return(t,o)=>{const n=z("RouterView");return x(),V(zt,null,{default:f(()=>[u(n)]),_:1})}}};export{cr as default};
