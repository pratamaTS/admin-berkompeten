import{_ as tt,o as x,c as et,a as L,b as M,t as C,d as u,V as P,e as V,w as f,n as Z,r as wt,f as H,u as rt,g as ot,F as Pt,p as _t,I as Ct,m as Lt,h as It,i as Bt,j as Yt,k as Nt,l as St,q as Dt,s as at,v as $t,x as Vt,y as Ot,z as Ft,A as Kt,B as Tt,C as qt,D as Ut,E as jt,G as lt,H as X,J as Wt,K as W,L as Rt,M as nt,N as Xt,O as z,P as $,Q as zt,R as Jt,S as Qt,T as Gt,U as Zt}from"./index-DPEDR26h.js";import{a as J}from"./VGrid-CSSzMaaB.js";import{a as st}from"./avatar-1-BeeGmpGQ.js";import{V as K,a as q,b as it,c as te,d as ee}from"./VMenu-B2Yka7ZX.js";import{m as re,M as oe,V as ct}from"./VImg-w7ApfuSw.js";import{V as ut}from"./forwardRefs-BeqTK34e.js";import{V as ht}from"./lazy-CmXcimDv.js";import{l as kt}from"./berkompeten_logo-eijgBe6e.js";import{V as ne}from"./VSpacer-3161MXxN.js";const ae={},le={class:"h-100 d-flex align-center justify-space-between"},se={class:"d-flex align-center"},ie=L("a",{href:"https://themeselection.com",target:"_blank",rel:"noopener noreferrer",class:"text-primary ms-1"},"Harjonan",-1),ce=L("span",{class:"d-md-flex gap-x-4 text-primary d-none"},[L("a",{href:"https://themeselection.com/license/",target:"noopener noreferrer"},"License"),L("a",{href:"https://themeselection.com/",target:"noopener noreferrer"},"More Themes"),L("a",{href:"https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/",target:"noopener noreferrer"},"Documentation")],-1);function ue(t,e){return x(),et("div",le,[L("span",se,[M(" © "+C(new Date().getFullYear())+" Made With ",1),u(P,{icon:"ri-heart-line",color:"error",size:"1.25rem",class:"mx-1"}),M(" By "),ie]),ce])}const he=tt(ae,[["render",ue]]),de={class:"nav-item-title"},R={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){return(e,n)=>(x(),et("li",{class:Z(["nav-link",{disabled:t.item.disable}])},[(x(),V(wt(t.item.to?"RouterLink":"a"),{to:t.item.to,href:t.item.href,target:t.item.target},{default:f(()=>[u(P,{icon:t.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),L("span",de,C(t.item.title),1),L("span",{class:Z(["nav-item-badge",t.item.badgeClass])},C(t.item.badgeContent),3)]),_:1},8,["to","href","target"]))],2))}},fe={__name:"NavItems",setup(t){const e=localStorage.getItem("token"),n=H(null),o=rt();return ot(async()=>{if(e)try{const l=await J.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${e}`}});n.value=l.data}catch(l){l.response&&l.response.status===401&&o.push("/login")}else o.push("/login")}),(l,i)=>(x(),et(Pt,null,[u(R,{item:{title:"Beranda",to:"/dashboard",icon:"ri-home-smile-line"}}),u(R,{item:{title:"Question Packet Management",to:"/question-packet-management",icon:"ri-file-edit-line"}}),u(R,{item:{title:"Question Management",to:"/question-management",icon:"ri-file-edit-line"}}),u(R,{item:{title:"User Management",to:"/user-management",icon:"ri-file-edit-line"}}),u(R,{item:{title:"Admin Management",to:"/admin-management",icon:"ri-file-edit-line"}}),u(R,{item:{title:"Membership Management",to:"/membership-management",icon:"ri-file-edit-line"}}),u(R,{item:{title:"Category Lab Management",to:"/category-lab-management",icon:"ri-file-edit-line"}}),u(R,{item:{title:"University Management",to:"/university-management",icon:"ri-file-edit-line"}}),u(R,{item:{title:"Educational Status Management",to:"/educational-status-management",icon:"ri-file-edit-line"}}),u(R,{item:{title:"Exam Dates Management",to:"/exam-dates-management",icon:"ri-file-edit-line"}})],64))}},ve=_t({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Ct,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...Lt(),...It({location:"top end"}),...Bt(),...Yt(),...Nt(),...re({transition:"scale-rotate-transition"})},"VBadge"),dt=St()({name:"VBadge",inheritAttrs:!1,props:ve(),setup(t,e){const{backgroundColorClasses:n,backgroundColorStyles:o}=Dt(at(t,"color")),{roundedClasses:l}=$t(t),{t:i}=Vt(),{textColorClasses:a,textColorStyles:s}=Ot(at(t,"textColor")),{themeClasses:r}=Ft(),{locationStyles:c}=Kt(t,!0,h=>(t.floating?t.dot?2:4:t.dot?8:12)+(["top","bottom"].includes(h)?+(t.offsetY??0):["left","right"].includes(h)?+(t.offsetX??0):0));return Tt(()=>{const h=Number(t.content),g=!t.max||isNaN(h)?t.content:h<=+t.max?h:`${t.max}+`,[m,y]=qt(e.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return u(t.tag,lt({class:["v-badge",{"v-badge--bordered":t.bordered,"v-badge--dot":t.dot,"v-badge--floating":t.floating,"v-badge--inline":t.inline},t.class]},y,{style:t.style}),{default:()=>{var d,v;return[u("div",{class:"v-badge__wrapper"},[(v=(d=e.slots).default)==null?void 0:v.call(d),u(oe,{transition:t.transition},{default:()=>{var Y,b;return[Ut(u("span",lt({class:["v-badge__badge",r.value,n.value,l.value,a.value],style:[o.value,s.value,t.inline?{}:c.value],"aria-atomic":"true","aria-label":i(t.label,h),"aria-live":"polite",role:"status"},m),[t.dot?void 0:e.slots.badge?(b=(Y=e.slots).badge)==null?void 0:b.call(Y):t.icon?u(P,{icon:t.icon},null):g]),[[jt,t.modelValue]])]}})])]}})}),{}}}),pe=_t({start:Boolean,end:Boolean,...Lt(),...Yt()},"VListItemAction"),G=St()({name:"VListItemAction",props:pe(),setup(t,e){let{slots:n}=e;return Tt(()=>u(t.tag,{class:["v-list-item-action",{"v-list-item-action--start":t.start,"v-list-item-action--end":t.end},t.class],style:t.style},n)),{}}}),me={__name:"UserProfile",setup(t){const e=rt(),n=localStorage.getItem("token"),o=H(null);ot(async()=>{try{const a=await J.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${n}`}});o.value=a.data.data,console.log("profile: ",o),console.log("name: ",name)}catch(a){console.log("err: ",a),a.response&&a.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),e.push("/login"))}});const l=async()=>{try{console.log("profile: ",o),e.push("/profile/account")}catch(a){console.error("Profile error:",a)}},i=async()=>{try{const a=await J.post("https://gateway.berkompeten.com/api/admin/logout",null,{headers:{Authorization:`Bearer ${n}`}});console.log("resp logout: ",a),localStorage.removeItem("token"),localStorage.removeItem("profile"),e.push("/login")}catch(a){console.error("Logout error:",a)}};return(a,s)=>o.value?(x(),V(G,{key:0,start:""},{default:f(()=>[u(K,null,{prepend:f(()=>[u(G,{start:""},{default:f(()=>[u(dt,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:f(()=>[u(ut,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:f(()=>[u(ct,{src:X(st)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:f(()=>[u(q,{class:"font-weight-semibold"},{default:f(()=>[M(C(o.value.name),1)]),_:1}),u(it,null,{default:f(()=>[M("Admin")]),_:1})]),_:1}),u(te,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:f(()=>[u(ee,null,{default:f(()=>[u(K,null,{prepend:f(()=>[u(G,{start:""},{default:f(()=>[u(dt,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:f(()=>[u(ut,{color:"primary",variant:"tonal"},{default:f(()=>[u(ct,{src:X(st)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:f(()=>[u(q,{class:"font-weight-semibold"},{default:f(()=>[M(C(o.value.name),1)]),_:1}),u(it,null,{default:f(()=>[M("Admin")]),_:1})]),_:1}),u(ht,{class:"my-2"}),u(K,{onClick:l},{prepend:f(()=>[u(P,{class:"me-2",icon:"ri-user-line",size:"22"})]),default:f(()=>[u(q,null,{default:f(()=>[M("Profile")]),_:1})]),_:1}),u(ht,{class:"my-2"}),u(K,{onClick:i},{prepend:f(()=>[u(P,{class:"me-2",icon:"ri-logout-box-r-line",size:"22"})]),default:f(()=>[u(q,null,{default:f(()=>[M("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):Wt("",!0)}};/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function k(t){return getComputedStyle(t)}function S(t,e){for(var n in e){var o=e[n];typeof o=="number"&&(o=o+"px"),t.style[n]=o}return t}function U(t){var e=document.createElement("div");return e.className=t,e}var ft=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function E(t,e){if(!ft)throw new Error("No element matching method supported");return ft.call(t,e)}function N(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){return Array.prototype.filter.call(t.children,function(n){return E(n,e)})}var _={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},Ht={x:null,y:null};function At(t,e){var n=t.element.classList,o=_.state.scrolling(e);n.contains(o)?clearTimeout(Ht[e]):n.add(o)}function Mt(t,e){Ht[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(_.state.scrolling(e))},t.settings.scrollingThreshold)}function ge(t,e){At(t,e),Mt(t,e)}var O=function(e){this.element=e,this.handlers={}},Et={isEmpty:{configurable:!0}};O.prototype.bind=function(e,n){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(n),this.element.addEventListener(e,n,!1)};O.prototype.unbind=function(e,n){var o=this;this.handlers[e]=this.handlers[e].filter(function(l){return n&&l!==n?!0:(o.element.removeEventListener(e,l,!1),!1)})};O.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};Et.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(O.prototype,Et);var D=function(){this.eventElements=[]};D.prototype.eventElement=function(e){var n=this.eventElements.filter(function(o){return o.element===e})[0];return n||(n=new O(e),this.eventElements.push(n)),n};D.prototype.bind=function(e,n,o){this.eventElement(e).bind(n,o)};D.prototype.unbind=function(e,n,o){var l=this.eventElement(e);l.unbind(n,o),l.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(l),1)};D.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};D.prototype.once=function(e,n,o){var l=this.eventElement(e),i=function(a){l.unbind(n,i),o(a)};l.bind(n,i)};function j(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function Q(t,e,n,o,l){o===void 0&&(o=!0),l===void 0&&(l=!1);var i;if(e==="top")i=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")i=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");be(t,n,i,o,l)}function be(t,e,n,o,l){var i=n[0],a=n[1],s=n[2],r=n[3],c=n[4],h=n[5];o===void 0&&(o=!0),l===void 0&&(l=!1);var g=t.element;t.reach[r]=null,g[s]<1&&(t.reach[r]="start"),g[s]>t[i]-t[a]-1&&(t.reach[r]="end"),e&&(g.dispatchEvent(j("ps-scroll-"+r)),e<0?g.dispatchEvent(j("ps-scroll-"+c)):e>0&&g.dispatchEvent(j("ps-scroll-"+h)),o&&ge(t,r)),t.reach[r]&&(e||l)&&g.dispatchEvent(j("ps-"+r+"-reach-"+t.reach[r]))}function w(t){return parseInt(t,10)||0}function ye(t){return E(t,"input,[contenteditable]")||E(t,"select,[contenteditable]")||E(t,"textarea,[contenteditable]")||E(t,"button,[contenteditable]")}function we(t){var e=k(t);return w(e.width)+w(e.paddingLeft)+w(e.paddingRight)+w(e.borderLeftWidth)+w(e.borderRightWidth)}var B={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function A(t){var e=t.element,n=Math.floor(e.scrollTop),o=e.getBoundingClientRect();t.containerWidth=Math.round(o.width),t.containerHeight=Math.round(o.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(vt(e,_.element.rail("x")).forEach(function(l){return N(l)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(vt(e,_.element.rail("y")).forEach(function(l){return N(l)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=pt(t,w(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=w((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=pt(t,w(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=w(n*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),_e(e,t),t.scrollbarXActive?e.classList.add(_.state.active("x")):(e.classList.remove(_.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(_.state.active("y")):(e.classList.remove(_.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function pt(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function _e(t,e){var n={width:e.railXWidth},o=Math.floor(t.scrollTop);e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-o:n.top=e.scrollbarXTop+o,S(e.scrollbarXRail,n);var l={top:o,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?l.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:l.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?l.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:l.left=e.scrollbarYLeft+t.scrollLeft,S(e.scrollbarYRail,l),S(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),S(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function Le(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var n=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,o=n>t.scrollbarYTop?1:-1;t.element.scrollTop+=o*t.containerHeight,A(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var n=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,o=n>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=o*t.containerWidth,A(t),e.stopPropagation()})}function Ye(t){mt(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),mt(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function mt(t,e){var n=e[0],o=e[1],l=e[2],i=e[3],a=e[4],s=e[5],r=e[6],c=e[7],h=e[8],g=t.element,m=null,y=null,d=null;function v(p){p.touches&&p.touches[0]&&(p[l]=p.touches[0].pageY),g[r]=m+d*(p[l]-y),At(t,c),A(t),p.stopPropagation(),p.type.startsWith("touch")&&p.changedTouches.length>1&&p.preventDefault()}function Y(){Mt(t,c),t[h].classList.remove(_.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",v)}function b(p,T){m=g[r],T&&p.touches&&(p[l]=p.touches[0].pageY),y=p[l],d=(t[o]-t[n])/(t[i]-t[s]),T?t.event.bind(t.ownerDocument,"touchmove",v):(t.event.bind(t.ownerDocument,"mousemove",v),t.event.once(t.ownerDocument,"mouseup",Y),p.preventDefault()),t[h].classList.add(_.state.clicking),p.stopPropagation()}t.event.bind(t[a],"mousedown",function(p){b(p)}),t.event.bind(t[a],"touchstart",function(p){b(p,!0)})}function Se(t){var e=t.element,n=function(){return E(e,":hover")},o=function(){return E(t.scrollbarX,":focus")||E(t.scrollbarY,":focus")};function l(i,a){var s=Math.floor(e.scrollTop);if(i===0){if(!t.scrollbarYActive)return!1;if(s===0&&a>0||s>=t.contentHeight-t.containerHeight&&a<0)return!t.settings.wheelPropagation}var r=e.scrollLeft;if(a===0){if(!t.scrollbarXActive)return!1;if(r===0&&i<0||r>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&!(!n()&&!o())){var a=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(a){if(a.tagName==="IFRAME")a=a.contentDocument.activeElement;else for(;a.shadowRoot;)a=a.shadowRoot.activeElement;if(ye(a))return}var s=0,r=0;switch(i.which){case 37:i.metaKey?s=-t.contentWidth:i.altKey?s=-t.containerWidth:s=-30;break;case 38:i.metaKey?r=t.contentHeight:i.altKey?r=t.containerHeight:r=30;break;case 39:i.metaKey?s=t.contentWidth:i.altKey?s=t.containerWidth:s=30;break;case 40:i.metaKey?r=-t.contentHeight:i.altKey?r=-t.containerHeight:r=-30;break;case 32:i.shiftKey?r=t.containerHeight:r=-t.containerHeight;break;case 33:r=t.containerHeight;break;case 34:r=-t.containerHeight;break;case 36:r=t.contentHeight;break;case 35:r=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&s!==0||t.settings.suppressScrollY&&r!==0||(e.scrollTop-=r,e.scrollLeft+=s,A(t),l(s,r)&&i.preventDefault())}})}function Te(t){var e=t.element;function n(a,s){var r=Math.floor(e.scrollTop),c=e.scrollTop===0,h=r+e.offsetHeight===e.scrollHeight,g=e.scrollLeft===0,m=e.scrollLeft+e.offsetWidth===e.scrollWidth,y;return Math.abs(s)>Math.abs(a)?y=c||h:y=g||m,y?!t.settings.wheelPropagation:!0}function o(a){var s=a.deltaX,r=-1*a.deltaY;return(typeof s>"u"||typeof r>"u")&&(s=-1*a.wheelDeltaX/6,r=a.wheelDeltaY/6),a.deltaMode&&a.deltaMode===1&&(s*=10,r*=10),s!==s&&r!==r&&(s=0,r=a.wheelDelta),a.shiftKey?[-r,-s]:[s,r]}function l(a,s,r){if(!B.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(a))return!1;for(var c=a;c&&c!==e;){if(c.classList.contains(_.element.consuming))return!0;var h=k(c);if(r&&h.overflowY.match(/(scroll|auto)/)){var g=c.scrollHeight-c.clientHeight;if(g>0&&(c.scrollTop>0&&r<0||c.scrollTop<g&&r>0))return!0}if(s&&h.overflowX.match(/(scroll|auto)/)){var m=c.scrollWidth-c.clientWidth;if(m>0&&(c.scrollLeft>0&&s<0||c.scrollLeft<m&&s>0))return!0}c=c.parentNode}return!1}function i(a){var s=o(a),r=s[0],c=s[1];if(!l(a.target,r,c)){var h=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=r*t.settings.wheelSpeed,h=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(r?e.scrollLeft+=r*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,h=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=r*t.settings.wheelSpeed),A(t),h=h||n(r,c),h&&!a.ctrlKey&&(a.stopPropagation(),a.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",i):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",i)}function We(t){if(!B.supportsTouch&&!B.supportsIePointer)return;var e=t.element;function n(d,v){var Y=Math.floor(e.scrollTop),b=e.scrollLeft,p=Math.abs(d),T=Math.abs(v);if(T>p){if(v<0&&Y===t.contentHeight-t.containerHeight||v>0&&Y===0)return window.scrollY===0&&v>0&&B.isChrome}else if(p>T&&(d<0&&b===t.contentWidth-t.containerWidth||d>0&&b===0))return!0;return!0}function o(d,v){e.scrollTop-=v,e.scrollLeft-=d,A(t)}var l={},i=0,a={},s=null;function r(d){return d.targetTouches?d.targetTouches[0]:d}function c(d){return d.pointerType&&d.pointerType==="pen"&&d.buttons===0?!1:!!(d.targetTouches&&d.targetTouches.length===1||d.pointerType&&d.pointerType!=="mouse"&&d.pointerType!==d.MSPOINTER_TYPE_MOUSE)}function h(d){if(c(d)){var v=r(d);l.pageX=v.pageX,l.pageY=v.pageY,i=new Date().getTime(),s!==null&&clearInterval(s)}}function g(d,v,Y){if(!e.contains(d))return!1;for(var b=d;b&&b!==e;){if(b.classList.contains(_.element.consuming))return!0;var p=k(b);if(Y&&p.overflowY.match(/(scroll|auto)/)){var T=b.scrollHeight-b.clientHeight;if(T>0&&(b.scrollTop>0&&Y<0||b.scrollTop<T&&Y>0))return!0}if(v&&p.overflowX.match(/(scroll|auto)/)){var I=b.scrollWidth-b.clientWidth;if(I>0&&(b.scrollLeft>0&&v<0||b.scrollLeft<I&&v>0))return!0}b=b.parentNode}return!1}function m(d){if(c(d)){var v=r(d),Y={pageX:v.pageX,pageY:v.pageY},b=Y.pageX-l.pageX,p=Y.pageY-l.pageY;if(g(d.target,b,p))return;o(b,p),l=Y;var T=new Date().getTime(),I=T-i;I>0&&(a.x=b/I,a.y=p/I,i=T),n(b,p)&&d.preventDefault()}}function y(){t.settings.swipeEasing&&(clearInterval(s),s=setInterval(function(){if(t.isInitialized){clearInterval(s);return}if(!a.x&&!a.y){clearInterval(s);return}if(Math.abs(a.x)<.01&&Math.abs(a.y)<.01){clearInterval(s);return}if(!t.element){clearInterval(s);return}o(a.x*30,a.y*30),a.x*=.8,a.y*=.8},10))}B.supportsTouch?(t.event.bind(e,"touchstart",h),t.event.bind(e,"touchmove",m),t.event.bind(e,"touchend",y)):B.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",h),t.event.bind(e,"pointermove",m),t.event.bind(e,"pointerup",y)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",h),t.event.bind(e,"MSPointerMove",m),t.event.bind(e,"MSPointerUp",y)))}var Re=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},Xe={"click-rail":Le,"drag-thumb":Ye,keyboard:Se,wheel:Te,touch:We},F=function(e,n){var o=this;if(n===void 0&&(n={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(_.main),this.settings=Re();for(var l in n)this.settings[l]=n[l];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var i=function(){return e.classList.add(_.state.focus)},a=function(){return e.classList.remove(_.state.focus)};this.isRtl=k(e).direction==="rtl",this.isRtl===!0&&e.classList.add(_.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,h=null;return e.scrollLeft=-1,h=e.scrollLeft<0,e.scrollLeft=c,h}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new D,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=U(_.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=U(_.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",i),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var s=k(this.scrollbarXRail);this.scrollbarXBottom=parseInt(s.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=w(s.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=w(s.borderLeftWidth)+w(s.borderRightWidth),S(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=w(s.marginLeft)+w(s.marginRight),S(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=U(_.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=U(_.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",i),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var r=k(this.scrollbarYRail);this.scrollbarYRight=parseInt(r.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=w(r.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?we(this.scrollbarY):null,this.railBorderYWidth=w(r.borderTopWidth)+w(r.borderBottomWidth),S(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=w(r.marginTop)+w(r.marginBottom),S(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return Xe[c](o)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return o.onScroll(c)}),A(this)};F.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,S(this.scrollbarXRail,{display:"block"}),S(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=w(k(this.scrollbarXRail).marginLeft)+w(k(this.scrollbarXRail).marginRight),this.railYMarginHeight=w(k(this.scrollbarYRail).marginTop)+w(k(this.scrollbarYRail).marginBottom),S(this.scrollbarXRail,{display:"none"}),S(this.scrollbarYRail,{display:"none"}),A(this),Q(this,"top",0,!1,!0),Q(this,"left",0,!1,!0),S(this.scrollbarXRail,{display:""}),S(this.scrollbarYRail,{display:""}))};F.prototype.onScroll=function(e){this.isAlive&&(A(this),Q(this,"top",this.element.scrollTop-this.lastScrollTop),Q(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};F.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),N(this.scrollbarX),N(this.scrollbarY),N(this.scrollbarXRail),N(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};F.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const gt=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var ke={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:gt,data(){return{ps:null}},watch:{watchOptions(t){!t&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new F(this.$el,this.options),gt.forEach(t=>{this.ps.element.addEventListener(t,e=>this.$emit(t,e))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return W(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}};const He=t=>(zt("data-v-b1c77191"),t=t(),Jt(),t),Ae={class:"nav-header"},Me={class:"d-flex align-items-center"},Ee=["innerHTML"],xe=He(()=>L("div",{class:"vertical-nav-items-shadow"},null,-1)),Pe={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const e=t,{mdAndDown:n}=Rt(),o=H(),l=nt();Xt(()=>l.path,()=>{e.toggleIsOverlayNavActive(!1)});const i=H(!1),a=c=>i.value=c,s=c=>{i.value=c.target.scrollTop>0},r=()=>{e.toggleIsOverlayNavActive(!e.isOverlayNavActive)};return(c,h)=>{const g=z("RouterLink");return x(),V(wt(e.tag),{ref_key:"refNav",ref:o,class:Z(["layout-vertical-nav",[{visible:t.isOverlayNavActive,scrolled:X(i),"overlay-nav":X(n)}]])},{default:f(()=>[L("div",Ae,[L("div",Me,[u(g,{to:"/",class:"app-logo app-title-wrapper"},{default:f(()=>[L("div",{class:"d-flex",innerHTML:X(kt)},null,8,Ee)]),_:1}),L("button",{onClick:r,class:"header-action"},[u(P,{icon:"ri-menu-line"})])])]),$(c.$slots,"before-nav-items",{},()=>[xe],!0),$(c.$slots,"nav-items",{updateIsVerticalNavScrolled:a},()=>[u(X(ke),{tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:s},{default:f(()=>[$(c.$slots,"default",{},void 0,!0)]),_:3})],!0),$(c.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}},Ce=tt(Pe,[["__scopeId","data-v-b1c77191"]]);function bt(t){return typeof t=="function"?t():X(t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function Ie(t,e){function n(...o){return new Promise((l,i)=>{Promise.resolve(t(()=>e.apply(this,o),{fn:e,thisArg:this,args:o})).then(l).catch(i)})}return n}const xt=t=>t();function Be(t=xt){const e=H(!0);function n(){e.value=!1}function o(){e.value=!0}const l=(...i)=>{e.value&&t(...i)};return{isActive:Gt(e),pause:n,resume:o,eventFilter:l}}function Ne(t,e,n={}){const{eventFilter:o=xt,...l}=n;return Xt(t,Ie(o,e),l)}function yt(t,e,n={}){const{eventFilter:o,...l}=n,{eventFilter:i,pause:a,resume:s,isActive:r}=Be(o);return{stop:Ne(t,e,{...l,eventFilter:i}),pause:a,resume:s,isActive:r}}function De(t,e,...[n]){const{flush:o="sync",deep:l=!1,immediate:i=!0,direction:a="both",transform:s={}}=n||{},r=[],c="ltr"in s&&s.ltr||(m=>m),h="rtl"in s&&s.rtl||(m=>m);return(a==="both"||a==="ltr")&&r.push(yt(t,m=>{r.forEach(y=>y.pause()),e.value=c(m),r.forEach(y=>y.resume())},{flush:o,deep:l,immediate:i})),(a==="both"||a==="rtl")&&r.push(yt(e,m=>{r.forEach(y=>y.pause()),t.value=h(m),r.forEach(y=>y.resume())},{flush:o,deep:l,immediate:i})),()=>{r.forEach(m=>m.stop())}}function $e(t=!1,e={}){const{truthyValue:n=!0,falsyValue:o=!1}=e,l=Qt(t),i=H(t);function a(s){if(arguments.length)return i.value=s,i.value;{const r=bt(n);return i.value=i.value===r?bt(o):r,i.value}}return l?a:[i,a]}const Ve=Zt({setup(t,{slots:e}){const n=H(!1),o=H(!1),l=$e(n),i=nt(),{mdAndDown:a}=Rt();return De(n,o),()=>{var m,y,d;const s=W(Ce,{isOverlayNavActive:n.value,toggleIsOverlayNavActive:l},{"nav-header":()=>{var v;return(v=e["vertical-nav-header"])==null?void 0:v.call(e,{toggleIsOverlayNavActive:l})},"before-nav-items":()=>{var v;return(v=e["before-vertical-nav-items"])==null?void 0:v.call(e)},default:()=>{var v;return(v=e["vertical-nav-content"])==null?void 0:v.call(e)},"after-nav-items":()=>{var v;return(v=e["after-vertical-nav-items"])==null?void 0:v.call(e)}}),r=W("header",{class:["layout-navbar navbar-blur"]},[W("div",{class:"navbar-content-container"},(m=e.navbar)==null?void 0:m.call(e,{toggleVerticalOverlayNavActive:l}))]),c=W("main",{class:"layout-page-content"},W("div",{class:"page-content-container"},(y=e.default)==null?void 0:y.call(e))),h=W("footer",{class:"layout-footer"},[W("div",{class:"footer-content-container"},(d=e.footer)==null?void 0:d.call(e))]),g=W("div",{class:["layout-overlay",{visible:o.value}],onClick:()=>{o.value=!o.value}});return W("div",{class:["layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",a.value&&"layout-overlay-nav",i.meta.layoutWrapperClasses]},[s,W("div",{class:"layout-content-wrapper"},[r,c,h]),g])}}}),Oe={class:"d-flex h-100 align-center"},Fe={class:"d-flex flex-column",style:{"padding-block-start":"20px"}},Ke={class:"welcome-text text-h5 font-weight-semibold mb-1"},qe={class:"date-text font-weight-semibold mb-1"},Ue=["innerHTML"],je={__name:"DefaultLayoutWithVerticalNav",setup(t){const e=rt(),n=nt();var o=localStorage.getItem("token");const l=H(""),a=(()=>{const s=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],r=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],c=new Date,h=s[c.getDay()],g=c.getDate(),m=r[c.getMonth()],y=c.getFullYear();return`${h}, ${g} ${m} ${y}`})();return ot(async()=>{console.log("token def: ",o);const s=n.query.token;if(console.log("token route: ",s),s&&(o=s,localStorage.setItem("token",o),console.log("token from route: ",o),e.push("/dashboard")),o)try{const r=await J.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${o}`}});l.value=r.data.data.name,console.log("data: ",r.data),console.log("name: ",l)}catch(r){console.log("err: ",r),r.response&&r.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),e.push("/login"))}else e.push("/login");s&&window.location.reload()}),(s,r)=>{const c=z("IconBtn"),h=z("RouterLink");return X(o)?(x(),V(Ve,{key:0},{navbar:f(({toggleVerticalOverlayNavActive:g})=>[L("div",Oe,[u(c,{class:"ms-n3 d-lg-none",onClick:m=>g(!0)},{default:f(()=>[u(P,{icon:"ri-menu-line"})]),_:2},1032,["onClick"]),L("div",Fe,[L("h5",Ke," Hi, "+C(l.value)+" Selamat Datang ",1),L("p",qe,C(X(a)),1)]),u(ne),u(me)])]),"vertical-nav-header":f(({toggleIsOverlayNavActive:g})=>[u(c,{class:"ms-n3 d-lg-none",onClick:r[0]||(r[0]=m=>s.toggleVerticalOverlayNavActive(!0))},{default:f(()=>[u(P,{icon:"ri-menu-line"})]),_:1}),u(h,{to:"/",class:"app-logo app-title-wrapper"},{default:f(()=>[L("div",{class:"d-flex",innerHTML:X(kt)},null,8,Ue)]),_:1})]),"vertical-nav-content":f(()=>[u(fe)]),footer:f(()=>[u(he)]),default:f(()=>[$(s.$slots,"default",{},void 0,!0)]),_:3})):Wt("",!0)}}},ze=tt(je,[["__scopeId","data-v-cf90b3d1"]]),ar={__name:"default",setup(t){return(e,n)=>{const o=z("RouterView");return x(),V(ze,null,{default:f(()=>[u(o)]),_:1})}}};export{ar as default};
