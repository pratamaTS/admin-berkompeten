import{_ as re,o as T,c as D,a as _,b as x,t as A,d as u,V as M,r as H,n as O,u as k,e as B,f as C,w as f,g as Se,h as ne,i as oe,F as Z,j as le,p as Ye,I as $e,m as Te,k as Be,l as Ne,q as ke,s as De,v as We,x as Ve,y as se,z as Oe,A as qe,B as je,C as Fe,D as Ke,E as Re,G as Ue,H as ze,J as Je,K as ie,L as Xe,M as R,N as Me,O as ae,P as He,Q as J,R as Ge,S as Qe,T as Ze,U as et,W as tt}from"./index-AryBdys7.js";import{a as G}from"./VGrid-H4nAnDsn.js";import{V as F,a as K,b as ce,c as rt,d as nt}from"./VMenu-CwDODdxf.js";import{m as ot,M as at}from"./index-DYhDWbac.js";import{V as ue}from"./VAvatar-Bk7bSWw5.js";import{V as he}from"./VImg-BnnpGyml.js";import{V as de}from"./ssrBoot-P8F_o1ED.js";import{l as Ae}from"./berkompeten_logo-eijgBe6e.js";import{V as lt}from"./VSpacer-V9-cM7Gz.js";import"./forwardRefs-BgKS6qNZ.js";import"./VOverlay-souyEm7B.js";import"./easing-DY7PVvcf.js";import"./lazy-IcXCMn0l.js";const st={},it={class:"h-100 d-flex align-center justify-space-between"},ct={class:"d-flex align-center"},ut=_("a",{href:"https://themeselection.com",target:"_blank",rel:"noopener noreferrer",class:"text-primary ms-1"},"Harjonan",-1),ht=_("span",{class:"d-md-flex gap-x-4 text-primary d-none"},[_("a",{href:"https://themeselection.com/license/",target:"noopener noreferrer"},"License"),_("a",{href:"https://themeselection.com/",target:"noopener noreferrer"},"More Themes"),_("a",{href:"https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/",target:"noopener noreferrer"},"Documentation")],-1);function dt(e,t){return T(),D("div",it,[_("span",ct,[x(" © "+A(new Date().getFullYear())+" Made With ",1),u(M,{icon:"ri-heart-line",color:"error",size:"1.25rem",class:"mx-1"}),x(" By "),ut]),ht])}const ft=re(st,[["render",dt]]),mt={class:"nav-item-title"},pt={class:"nav-group-children-wrapper"},vt={class:"nav-group-children"},fe={__name:"VerticalNavGroup",props:{item:{type:Object,required:!0}},setup(e){const t=H(!1);return(o,n)=>(T(),D("li",{class:O(["nav-group",k(t)&&"open"])},[_("div",{class:"nav-group-label",onClick:n[0]||(n[0]=s=>t.value=!k(t))},[u(M,{icon:e.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),_("span",mt,A(e.item.title),1),_("span",{class:O(["nav-item-badge",e.item.badgeClass])},A(e.item.badgeContent),3),u(M,{icon:"ri-arrow-right-s-line",class:"nav-group-arrow"})]),_("div",pt,[_("ul",vt,[B(o.$slots,"default")])])],2))}},gt={class:"nav-item-title"},ee={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(e){return(t,o)=>(T(),D("li",{class:O(["nav-link",{disabled:e.item.disable}])},[(T(),C(Se(e.item.to?"RouterLink":"a"),{to:e.item.to,href:e.item.href,target:e.item.target},{default:f(()=>[u(M,{icon:e.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),_("span",gt,A(e.item.title),1),_("span",{class:O(["nav-item-badge",e.item.badgeClass])},A(e.item.badgeContent),3)]),_:1},8,["to","href","target"]))],2))}},bt={__name:"NavItems",setup(e){const t=localStorage.getItem("token"),o=H(null),n=ne();oe(async()=>{if(t)try{const i=await G.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${t}`}});o.value=i.data}catch(i){i.response&&i.response.status===401&&n.push("/login")}else n.push("/login")});const s={reports:{title:"Reports",items:[{title:"User Trial Report",to:"/user-trial-report",icon:"ri-file-list-3-line"},{title:"User Premium Report",to:"/user-premium-report",icon:"ri-vip-crown-line"},{title:"Payment Report",to:"/payment-report",icon:"ri-money-dollar-box-line"}],icon:"ri-file-chart-line"},management:{title:"Management",items:[{title:"System Management",to:"/system-management",icon:"ri-settings-3-line"},{title:"Topic Management",to:"/topic-management",icon:"ri-booklet-line"},{title:"Sub Topic Management",to:"/subtopic-management",icon:"ri-bookmark-line"},{title:"Media Management",to:"/media-management",icon:"ri-image-line"},{title:"Question Packet Management",to:"/question-packet-management",icon:"ri-file-paper-2-line"},{title:"Question Management",to:"/question-management",icon:"ri-question-line"},{title:"Student Management",to:"/student-management",icon:"ri-user-line"},{title:"Admin Management",to:"/admin-management",icon:"ri-shield-user-line"},{title:"Membership Management",to:"/membership-management",icon:"ri-user-star-line"},{title:"Category Lab Management",to:"/category-lab-management",icon:"ri-flask-line"},{title:"Lab Values Management",to:"/lab-value-management",icon:"ri-file-edit-line"},{title:"University Management",to:"/university-management",icon:"ri-bank-line"},{title:"Educational Status Management",to:"/educational-status-management",icon:"ri-bar-chart-box-line"},{title:"Exam Dates Management",to:"/exam-dates-management",icon:"ri-calendar-line"},{title:"Config Management",to:"/config-management",icon:"ri-tools-line"}],icon:"ri-settings-line"}};return(i,a)=>(T(),D(Z,null,[u(ee,{item:{title:"Beranda",to:"/dashboard",icon:"ri-home-smile-line"}}),u(fe,{item:s.reports},{default:f(()=>[(T(!0),D(Z,null,le(s.reports.items,(l,r)=>(T(),C(ee,{key:r,item:l},null,8,["item"]))),128))]),_:1},8,["item"]),u(fe,{item:s.management},{default:f(()=>[(T(!0),D(Z,null,le(s.management.items,(l,r)=>(T(),C(ee,{key:r,item:l},null,8,["item"]))),128))]),_:1},8,["item"])],64))}},me="/assets/profile_bw-BiZRVl2M.jpg",yt=Ye({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:$e,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...Te(),...Be({location:"top end"}),...Ne(),...ke(),...De(),...ot({transition:"scale-rotate-transition"})},"VBadge"),pe=We()({name:"VBadge",inheritAttrs:!1,props:yt(),setup(e,t){const{backgroundColorClasses:o,backgroundColorStyles:n}=Ve(se(e,"color")),{roundedClasses:s}=Oe(e),{t:i}=qe(),{textColorClasses:a,textColorStyles:l}=je(se(e,"textColor")),{themeClasses:r}=Fe(),{locationStyles:c}=Ke(e,!0,h=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(h)?+(e.offsetY??0):["left","right"].includes(h)?+(e.offsetX??0):0));return Re(()=>{const h=Number(e.content),g=!e.max||isNaN(h)?e.content:h<=+e.max?h:`${e.max}+`,[v,y]=Ue(t.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return u(e.tag,ie({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},y,{style:e.style}),{default:()=>{var d,m;return[u("div",{class:"v-badge__wrapper"},[(m=(d=t.slots).default)==null?void 0:m.call(d),u(at,{transition:e.transition},{default:()=>{var S,b;return[ze(u("span",ie({class:["v-badge__badge",r.value,o.value,s.value,a.value],style:[n.value,l.value,e.inline?{}:c.value],"aria-atomic":"true","aria-label":i(e.label,h),"aria-live":"polite",role:"status"},v),[e.dot?void 0:t.slots.badge?(b=(S=t.slots).badge)==null?void 0:b.call(S):e.icon?u(M,{icon:e.icon},null):g]),[[Je,e.modelValue]])]}})])]}})}),{}}}),wt=Ye({start:Boolean,end:Boolean,...Te(),...ke()},"VListItemAction"),te=We()({name:"VListItemAction",props:wt(),setup(e,t){let{slots:o}=t;return Re(()=>u(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},o)),{}}}),_t={__name:"UserProfile",setup(e){const t=ne(),o=localStorage.getItem("token"),n=H(null);oe(async()=>{try{const a=await G.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${o}`}});n.value=a.data.data,console.log("profile: ",n),console.log("name: ",name)}catch(a){console.log("err: ",a),a.response&&a.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),t.push("/login"))}});const s=async()=>{try{console.log("profile: ",n),t.push("/profile/account")}catch(a){console.error("Profile error:",a)}},i=async()=>{try{const a=await G.post("https://gateway.berkompeten.com/api/admin/logout",null,{headers:{Authorization:`Bearer ${o}`}});console.log("resp logout: ",a),localStorage.removeItem("token"),localStorage.removeItem("profile"),t.push("/login")}catch(a){console.error("Logout error:",a)}};return(a,l)=>n.value?(T(),C(te,{key:0,start:""},{default:f(()=>[u(F,null,{prepend:f(()=>[u(te,{start:""},{default:f(()=>[u(pe,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:f(()=>[u(ue,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:f(()=>[u(he,{src:k(me)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:f(()=>[u(K,{class:"font-weight-semibold"},{default:f(()=>[x(A(n.value.name),1)]),_:1}),u(ce,null,{default:f(()=>[x("Admin")]),_:1})]),_:1}),u(rt,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:f(()=>[u(nt,null,{default:f(()=>[u(F,null,{prepend:f(()=>[u(te,{start:""},{default:f(()=>[u(pe,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:f(()=>[u(ue,{color:"primary",variant:"tonal"},{default:f(()=>[u(he,{src:k(me)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:f(()=>[u(K,{class:"font-weight-semibold"},{default:f(()=>[x(A(n.value.name),1)]),_:1}),u(ce,null,{default:f(()=>[x("Admin")]),_:1})]),_:1}),u(de,{class:"my-2"}),u(F,{onClick:s},{prepend:f(()=>[u(M,{class:"me-2",icon:"ri-user-line",size:"22"})]),default:f(()=>[u(K,null,{default:f(()=>[x("Profile")]),_:1})]),_:1}),u(de,{class:"my-2"}),u(F,{onClick:i},{prepend:f(()=>[u(M,{class:"me-2",icon:"ri-logout-box-r-line",size:"22"})]),default:f(()=>[u(K,null,{default:f(()=>[x("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):Xe("",!0)}};/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function X(e){return getComputedStyle(e)}function Y(e,t){for(var o in t){var n=t[o];typeof n=="number"&&(n=n+"px"),e.style[o]=n}return e}function U(e){var t=document.createElement("div");return t.className=e,t}var ve=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function P(e,t){if(!ve)throw new Error("No element matching method supported");return ve.call(e,t)}function N(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function ge(e,t){return Array.prototype.filter.call(e.children,function(o){return P(o,t)})}var L={main:"ps",rtl:"ps__rtl",element:{thumb:function(e){return"ps__thumb-"+e},rail:function(e){return"ps__rail-"+e},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(e){return"ps--active-"+e},scrolling:function(e){return"ps--scrolling-"+e}}},Ee={x:null,y:null};function xe(e,t){var o=e.element.classList,n=L.state.scrolling(t);o.contains(n)?clearTimeout(Ee[t]):o.add(n)}function Pe(e,t){Ee[t]=setTimeout(function(){return e.isAlive&&e.element.classList.remove(L.state.scrolling(t))},e.settings.scrollingThreshold)}function Lt(e,t){xe(e,t),Pe(e,t)}var q=function(t){this.element=t,this.handlers={}},Ce={isEmpty:{configurable:!0}};q.prototype.bind=function(t,o){typeof this.handlers[t]>"u"&&(this.handlers[t]=[]),this.handlers[t].push(o),this.element.addEventListener(t,o,!1)};q.prototype.unbind=function(t,o){var n=this;this.handlers[t]=this.handlers[t].filter(function(s){return o&&s!==o?!0:(n.element.removeEventListener(t,s,!1),!1)})};q.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)};Ce.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every(function(t){return e.handlers[t].length===0})};Object.defineProperties(q.prototype,Ce);var V=function(){this.eventElements=[]};V.prototype.eventElement=function(t){var o=this.eventElements.filter(function(n){return n.element===t})[0];return o||(o=new q(t),this.eventElements.push(o)),o};V.prototype.bind=function(t,o,n){this.eventElement(t).bind(o,n)};V.prototype.unbind=function(t,o,n){var s=this.eventElement(t);s.unbind(o,n),s.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(s),1)};V.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]};V.prototype.once=function(t,o,n){var s=this.eventElement(t),i=function(a){s.unbind(o,i),n(a)};s.bind(o,i)};function z(e){if(typeof window.CustomEvent=="function")return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t}function Q(e,t,o,n,s){n===void 0&&(n=!0),s===void 0&&(s=!1);var i;if(t==="top")i=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(t==="left")i=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");St(e,o,i,n,s)}function St(e,t,o,n,s){var i=o[0],a=o[1],l=o[2],r=o[3],c=o[4],h=o[5];n===void 0&&(n=!0),s===void 0&&(s=!1);var g=e.element;e.reach[r]=null,g[l]<1&&(e.reach[r]="start"),g[l]>e[i]-e[a]-1&&(e.reach[r]="end"),t&&(g.dispatchEvent(z("ps-scroll-"+r)),t<0?g.dispatchEvent(z("ps-scroll-"+c)):t>0&&g.dispatchEvent(z("ps-scroll-"+h)),n&&Lt(e,r)),e.reach[r]&&(t||s)&&g.dispatchEvent(z("ps-"+r+"-reach-"+e.reach[r]))}function w(e){return parseInt(e,10)||0}function Yt(e){return P(e,"input,[contenteditable]")||P(e,"select,[contenteditable]")||P(e,"textarea,[contenteditable]")||P(e,"button,[contenteditable]")}function Tt(e){var t=X(e);return w(t.width)+w(t.paddingLeft)+w(t.paddingRight)+w(t.borderLeftWidth)+w(t.borderRightWidth)}var $={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function E(e){var t=e.element,o=Math.floor(t.scrollTop),n=t.getBoundingClientRect();e.containerWidth=Math.round(n.width),e.containerHeight=Math.round(n.height),e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||(ge(t,L.element.rail("x")).forEach(function(s){return N(s)}),t.appendChild(e.scrollbarXRail)),t.contains(e.scrollbarYRail)||(ge(t,L.element.rail("y")).forEach(function(s){return N(s)}),t.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=be(e,w(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=w((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=be(e,w(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=w(o*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),kt(t,e),e.scrollbarXActive?t.classList.add(L.state.active("x")):(t.classList.remove(L.state.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=e.isRtl===!0?e.contentWidth:0),e.scrollbarYActive?t.classList.add(L.state.active("y")):(t.classList.remove(L.state.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0)}function be(e,t){return e.settings.minScrollbarLength&&(t=Math.max(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=Math.min(t,e.settings.maxScrollbarLength)),t}function kt(e,t){var o={width:t.railXWidth},n=Math.floor(e.scrollTop);t.isRtl?o.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth-t.contentWidth:o.left=e.scrollLeft,t.isScrollbarXUsingBottom?o.bottom=t.scrollbarXBottom-n:o.top=t.scrollbarXTop+n,Y(t.scrollbarXRail,o);var s={top:n,height:t.railYHeight};t.isScrollbarYUsingRight?t.isRtl?s.right=t.contentWidth-(t.negativeScrollAdjustment+e.scrollLeft)-t.scrollbarYRight-t.scrollbarYOuterWidth-9:s.right=t.scrollbarYRight-e.scrollLeft:t.isRtl?s.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth*2-t.contentWidth-t.scrollbarYLeft-t.scrollbarYOuterWidth:s.left=t.scrollbarYLeft+e.scrollLeft,Y(t.scrollbarYRail,s),Y(t.scrollbarX,{left:t.scrollbarXLeft,width:t.scrollbarXWidth-t.railBorderXWidth}),Y(t.scrollbarY,{top:t.scrollbarYTop,height:t.scrollbarYHeight-t.railBorderYWidth})}function Wt(e){e.element,e.event.bind(e.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),e.event.bind(e.scrollbarYRail,"mousedown",function(t){var o=t.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top,n=o>e.scrollbarYTop?1:-1;e.element.scrollTop+=n*e.containerHeight,E(e),t.stopPropagation()}),e.event.bind(e.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),e.event.bind(e.scrollbarXRail,"mousedown",function(t){var o=t.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left,n=o>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=n*e.containerWidth,E(e),t.stopPropagation()})}function Rt(e){ye(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),ye(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function ye(e,t){var o=t[0],n=t[1],s=t[2],i=t[3],a=t[4],l=t[5],r=t[6],c=t[7],h=t[8],g=e.element,v=null,y=null,d=null;function m(p){p.touches&&p.touches[0]&&(p[s]=p.touches[0].pageY),g[r]=v+d*(p[s]-y),xe(e,c),E(e),p.stopPropagation(),p.type.startsWith("touch")&&p.changedTouches.length>1&&p.preventDefault()}function S(){Pe(e,c),e[h].classList.remove(L.state.clicking),e.event.unbind(e.ownerDocument,"mousemove",m)}function b(p,W){v=g[r],W&&p.touches&&(p[s]=p.touches[0].pageY),y=p[s],d=(e[n]-e[o])/(e[i]-e[l]),W?e.event.bind(e.ownerDocument,"touchmove",m):(e.event.bind(e.ownerDocument,"mousemove",m),e.event.once(e.ownerDocument,"mouseup",S),p.preventDefault()),e[h].classList.add(L.state.clicking),p.stopPropagation()}e.event.bind(e[a],"mousedown",function(p){b(p)}),e.event.bind(e[a],"touchstart",function(p){b(p,!0)})}function Xt(e){var t=e.element,o=function(){return P(t,":hover")},n=function(){return P(e.scrollbarX,":focus")||P(e.scrollbarY,":focus")};function s(i,a){var l=Math.floor(t.scrollTop);if(i===0){if(!e.scrollbarYActive)return!1;if(l===0&&a>0||l>=e.contentHeight-e.containerHeight&&a<0)return!e.settings.wheelPropagation}var r=t.scrollLeft;if(a===0){if(!e.scrollbarXActive)return!1;if(r===0&&i<0||r>=e.contentWidth-e.containerWidth&&i>0)return!e.settings.wheelPropagation}return!0}e.event.bind(e.ownerDocument,"keydown",function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&!(!o()&&!n())){var a=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(a){if(a.tagName==="IFRAME")a=a.contentDocument.activeElement;else for(;a.shadowRoot;)a=a.shadowRoot.activeElement;if(Yt(a))return}var l=0,r=0;switch(i.which){case 37:i.metaKey?l=-e.contentWidth:i.altKey?l=-e.containerWidth:l=-30;break;case 38:i.metaKey?r=e.contentHeight:i.altKey?r=e.containerHeight:r=30;break;case 39:i.metaKey?l=e.contentWidth:i.altKey?l=e.containerWidth:l=30;break;case 40:i.metaKey?r=-e.contentHeight:i.altKey?r=-e.containerHeight:r=-30;break;case 32:i.shiftKey?r=e.containerHeight:r=-e.containerHeight;break;case 33:r=e.containerHeight;break;case 34:r=-e.containerHeight;break;case 36:r=e.contentHeight;break;case 35:r=-e.contentHeight;break;default:return}e.settings.suppressScrollX&&l!==0||e.settings.suppressScrollY&&r!==0||(t.scrollTop-=r,t.scrollLeft+=l,E(e),s(l,r)&&i.preventDefault())}})}function Mt(e){var t=e.element;function o(a,l){var r=Math.floor(t.scrollTop),c=t.scrollTop===0,h=r+t.offsetHeight===t.scrollHeight,g=t.scrollLeft===0,v=t.scrollLeft+t.offsetWidth===t.scrollWidth,y;return Math.abs(l)>Math.abs(a)?y=c||h:y=g||v,y?!e.settings.wheelPropagation:!0}function n(a){var l=a.deltaX,r=-1*a.deltaY;return(typeof l>"u"||typeof r>"u")&&(l=-1*a.wheelDeltaX/6,r=a.wheelDeltaY/6),a.deltaMode&&a.deltaMode===1&&(l*=10,r*=10),l!==l&&r!==r&&(l=0,r=a.wheelDelta),a.shiftKey?[-r,-l]:[l,r]}function s(a,l,r){if(!$.isWebKit&&t.querySelector("select:focus"))return!0;if(!t.contains(a))return!1;for(var c=a;c&&c!==t;){if(c.classList.contains(L.element.consuming))return!0;var h=X(c);if(r&&h.overflowY.match(/(scroll|auto)/)){var g=c.scrollHeight-c.clientHeight;if(g>0&&(c.scrollTop>0&&r<0||c.scrollTop<g&&r>0))return!0}if(l&&h.overflowX.match(/(scroll|auto)/)){var v=c.scrollWidth-c.clientWidth;if(v>0&&(c.scrollLeft>0&&l<0||c.scrollLeft<v&&l>0))return!0}c=c.parentNode}return!1}function i(a){var l=n(a),r=l[0],c=l[1];if(!s(a.target,r,c)){var h=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(c?t.scrollTop-=c*e.settings.wheelSpeed:t.scrollTop+=r*e.settings.wheelSpeed,h=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(r?t.scrollLeft+=r*e.settings.wheelSpeed:t.scrollLeft-=c*e.settings.wheelSpeed,h=!0):(t.scrollTop-=c*e.settings.wheelSpeed,t.scrollLeft+=r*e.settings.wheelSpeed),E(e),h=h||o(r,c),h&&!a.ctrlKey&&(a.stopPropagation(),a.preventDefault())}}typeof window.onwheel<"u"?e.event.bind(t,"wheel",i):typeof window.onmousewheel<"u"&&e.event.bind(t,"mousewheel",i)}function Ht(e){if(!$.supportsTouch&&!$.supportsIePointer)return;var t=e.element;function o(d,m){var S=Math.floor(t.scrollTop),b=t.scrollLeft,p=Math.abs(d),W=Math.abs(m);if(W>p){if(m<0&&S===e.contentHeight-e.containerHeight||m>0&&S===0)return window.scrollY===0&&m>0&&$.isChrome}else if(p>W&&(d<0&&b===e.contentWidth-e.containerWidth||d>0&&b===0))return!0;return!0}function n(d,m){t.scrollTop-=m,t.scrollLeft-=d,E(e)}var s={},i=0,a={},l=null;function r(d){return d.targetTouches?d.targetTouches[0]:d}function c(d){return d.pointerType&&d.pointerType==="pen"&&d.buttons===0?!1:!!(d.targetTouches&&d.targetTouches.length===1||d.pointerType&&d.pointerType!=="mouse"&&d.pointerType!==d.MSPOINTER_TYPE_MOUSE)}function h(d){if(c(d)){var m=r(d);s.pageX=m.pageX,s.pageY=m.pageY,i=new Date().getTime(),l!==null&&clearInterval(l)}}function g(d,m,S){if(!t.contains(d))return!1;for(var b=d;b&&b!==t;){if(b.classList.contains(L.element.consuming))return!0;var p=X(b);if(S&&p.overflowY.match(/(scroll|auto)/)){var W=b.scrollHeight-b.clientHeight;if(W>0&&(b.scrollTop>0&&S<0||b.scrollTop<W&&S>0))return!0}if(m&&p.overflowX.match(/(scroll|auto)/)){var I=b.scrollWidth-b.clientWidth;if(I>0&&(b.scrollLeft>0&&m<0||b.scrollLeft<I&&m>0))return!0}b=b.parentNode}return!1}function v(d){if(c(d)){var m=r(d),S={pageX:m.pageX,pageY:m.pageY},b=S.pageX-s.pageX,p=S.pageY-s.pageY;if(g(d.target,b,p))return;n(b,p),s=S;var W=new Date().getTime(),I=W-i;I>0&&(a.x=b/I,a.y=p/I,i=W),o(b,p)&&d.preventDefault()}}function y(){e.settings.swipeEasing&&(clearInterval(l),l=setInterval(function(){if(e.isInitialized){clearInterval(l);return}if(!a.x&&!a.y){clearInterval(l);return}if(Math.abs(a.x)<.01&&Math.abs(a.y)<.01){clearInterval(l);return}if(!e.element){clearInterval(l);return}n(a.x*30,a.y*30),a.x*=.8,a.y*=.8},10))}$.supportsTouch?(e.event.bind(t,"touchstart",h),e.event.bind(t,"touchmove",v),e.event.bind(t,"touchend",y)):$.supportsIePointer&&(window.PointerEvent?(e.event.bind(t,"pointerdown",h),e.event.bind(t,"pointermove",v),e.event.bind(t,"pointerup",y)):window.MSPointerEvent&&(e.event.bind(t,"MSPointerDown",h),e.event.bind(t,"MSPointerMove",v),e.event.bind(t,"MSPointerUp",y)))}var At=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},Et={"click-rail":Wt,"drag-thumb":Rt,keyboard:Xt,wheel:Mt,touch:Ht},j=function(t,o){var n=this;if(o===void 0&&(o={}),typeof t=="string"&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=t,t.classList.add(L.main),this.settings=At();for(var s in o)this.settings[s]=o[s];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var i=function(){return t.classList.add(L.state.focus)},a=function(){return t.classList.remove(L.state.focus)};this.isRtl=X(t).direction==="rtl",this.isRtl===!0&&t.classList.add(L.rtl),this.isNegativeScroll=function(){var c=t.scrollLeft,h=null;return t.scrollLeft=-1,h=t.scrollLeft<0,t.scrollLeft=c,h}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new V,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=U(L.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=U(L.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",i),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var l=X(this.scrollbarXRail);this.scrollbarXBottom=parseInt(l.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=w(l.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=w(l.borderLeftWidth)+w(l.borderRightWidth),Y(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=w(l.marginLeft)+w(l.marginRight),Y(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=U(L.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=U(L.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",i),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var r=X(this.scrollbarYRail);this.scrollbarYRight=parseInt(r.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=w(r.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?Tt(this.scrollbarY):null,this.railBorderYWidth=w(r.borderTopWidth)+w(r.borderBottomWidth),Y(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=w(r.marginTop)+w(r.marginBottom),Y(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return Et[c](n)}),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",function(c){return n.onScroll(c)}),E(this)};j.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,Y(this.scrollbarXRail,{display:"block"}),Y(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=w(X(this.scrollbarXRail).marginLeft)+w(X(this.scrollbarXRail).marginRight),this.railYMarginHeight=w(X(this.scrollbarYRail).marginTop)+w(X(this.scrollbarYRail).marginBottom),Y(this.scrollbarXRail,{display:"none"}),Y(this.scrollbarYRail,{display:"none"}),E(this),Q(this,"top",0,!1,!0),Q(this,"left",0,!1,!0),Y(this.scrollbarXRail,{display:""}),Y(this.scrollbarYRail,{display:""}))};j.prototype.onScroll=function(t){this.isAlive&&(E(this),Q(this,"top",this.element.scrollTop-this.lastScrollTop),Q(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};j.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),N(this.scrollbarX),N(this.scrollbarY),N(this.scrollbarXRail),N(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};j.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")};const we=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var xt={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:we,data(){return{ps:null}},watch:{watchOptions(e){!e&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new j(this.$el,this.options),we.forEach(e=>{this.ps.element.addEventListener(e,t=>this.$emit(e,t))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return R(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}};const Pt=e=>(Ge("data-v-b1c77191"),e=e(),Qe(),e),Ct={class:"nav-header"},It={class:"d-flex align-items-center"},$t=["innerHTML"],Bt=Pt(()=>_("div",{class:"vertical-nav-items-shadow"},null,-1)),Nt={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(e){const t=e,{mdAndDown:o}=Me(),n=H(),s=ae();He(()=>s.path,()=>{t.toggleIsOverlayNavActive(!1)});const i=H(!1),a=c=>i.value=c,l=c=>{i.value=c.target.scrollTop>0},r=()=>{t.toggleIsOverlayNavActive(!t.isOverlayNavActive)};return(c,h)=>{const g=J("RouterLink");return T(),C(Se(t.tag),{ref_key:"refNav",ref:n,class:O(["layout-vertical-nav",[{visible:e.isOverlayNavActive,scrolled:k(i),"overlay-nav":k(o)}]])},{default:f(()=>[_("div",Ct,[_("div",It,[u(g,{to:"/",class:"app-logo app-title-wrapper"},{default:f(()=>[_("div",{class:"d-flex",innerHTML:k(Ae)},null,8,$t)]),_:1}),_("button",{onClick:r,class:"header-action"},[u(M,{icon:"ri-menu-line"})])])]),B(c.$slots,"before-nav-items",{},()=>[Bt],!0),B(c.$slots,"nav-items",{updateIsVerticalNavScrolled:a},()=>[u(k(xt),{tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:l},{default:f(()=>[B(c.$slots,"default",{},void 0,!0)]),_:3})],!0),B(c.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}},Dt=re(Nt,[["__scopeId","data-v-b1c77191"]]);function _e(e){return typeof e=="function"?e():k(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function Vt(e,t){function o(...n){return new Promise((s,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(s).catch(i)})}return o}const Ie=e=>e();function Ot(e=Ie){const t=H(!0);function o(){t.value=!1}function n(){t.value=!0}const s=(...i)=>{t.value&&e(...i)};return{isActive:et(t),pause:o,resume:n,eventFilter:s}}function qt(e,t,o={}){const{eventFilter:n=Ie,...s}=o;return He(e,Vt(n,t),s)}function Le(e,t,o={}){const{eventFilter:n,...s}=o,{eventFilter:i,pause:a,resume:l,isActive:r}=Ot(n);return{stop:qt(e,t,{...s,eventFilter:i}),pause:a,resume:l,isActive:r}}function jt(e,t,...[o]){const{flush:n="sync",deep:s=!1,immediate:i=!0,direction:a="both",transform:l={}}=o||{},r=[],c="ltr"in l&&l.ltr||(v=>v),h="rtl"in l&&l.rtl||(v=>v);return(a==="both"||a==="ltr")&&r.push(Le(e,v=>{r.forEach(y=>y.pause()),t.value=c(v),r.forEach(y=>y.resume())},{flush:n,deep:s,immediate:i})),(a==="both"||a==="rtl")&&r.push(Le(t,v=>{r.forEach(y=>y.pause()),e.value=h(v),r.forEach(y=>y.resume())},{flush:n,deep:s,immediate:i})),()=>{r.forEach(v=>v.stop())}}function Ft(e=!1,t={}){const{truthyValue:o=!0,falsyValue:n=!1}=t,s=Ze(e),i=H(e);function a(l){if(arguments.length)return i.value=l,i.value;{const r=_e(o);return i.value=i.value===r?_e(n):r,i.value}}return s?a:[i,a]}const Kt=tt({setup(e,{slots:t}){const o=H(!1),n=H(!1),s=Ft(o),i=ae(),{mdAndDown:a}=Me();return jt(o,n),()=>{var v,y,d;const l=R(Dt,{isOverlayNavActive:o.value,toggleIsOverlayNavActive:s},{"nav-header":()=>{var m;return(m=t["vertical-nav-header"])==null?void 0:m.call(t,{toggleIsOverlayNavActive:s})},"before-nav-items":()=>{var m;return(m=t["before-vertical-nav-items"])==null?void 0:m.call(t)},default:()=>{var m;return(m=t["vertical-nav-content"])==null?void 0:m.call(t)},"after-nav-items":()=>{var m;return(m=t["after-vertical-nav-items"])==null?void 0:m.call(t)}}),r=R("header",{class:["layout-navbar navbar-blur"]},[R("div",{class:"navbar-content-container"},(v=t.navbar)==null?void 0:v.call(t,{toggleVerticalOverlayNavActive:s}))]),c=R("main",{class:"layout-page-content"},R("div",{class:"page-content-container"},(y=t.default)==null?void 0:y.call(t))),h=R("footer",{class:"layout-footer"},[R("div",{class:"footer-content-container"},(d=t.footer)==null?void 0:d.call(t))]),g=R("div",{class:["layout-overlay",{visible:n.value}],onClick:()=>{n.value=!n.value}});return R("div",{class:["layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",a.value&&"layout-overlay-nav",i.meta.layoutWrapperClasses]},[l,R("div",{class:"layout-content-wrapper"},[r,c,h]),g])}}}),Ut={class:"d-flex h-100 align-center"},zt={class:"d-flex flex-column",style:{"padding-block-start":"20px"}},Jt={class:"welcome-text text-h5 font-weight-semibold mb-1"},Gt={class:"date-text font-weight-semibold mb-1"},Qt=["innerHTML"],Zt={__name:"DefaultLayoutWithVerticalNav",setup(e){const t=ne(),o=ae();var n=localStorage.getItem("token");const s=H(""),a=(()=>{const l=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],r=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],c=new Date,h=l[c.getDay()],g=c.getDate(),v=r[c.getMonth()],y=c.getFullYear();return`${h}, ${g} ${v} ${y}`})();return oe(async()=>{console.log("token def: ",n);const l=o.query.token;if(console.log("token route: ",l),l&&(n=l,localStorage.setItem("token",n),console.log("token from route: ",n),t.push("/dashboard")),n)try{const r=await G.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${n}`}});s.value=r.data.data.name,console.log("data: ",r.data),console.log("name: ",s)}catch(r){console.log("err: ",r),r.response&&r.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),t.push("/login"))}else t.push("/login");l&&window.location.reload()}),(l,r)=>{const c=J("IconBtn"),h=J("RouterLink");return k(n)?(T(),C(Kt,{key:0},{navbar:f(({toggleVerticalOverlayNavActive:g})=>[_("div",Ut,[u(c,{class:"ms-n3 d-lg-none",onClick:v=>g(!0)},{default:f(()=>[u(M,{icon:"ri-menu-line"})]),_:2},1032,["onClick"]),_("div",zt,[_("h5",Jt," Hi, "+A(s.value)+" Selamat Datang ",1),_("p",Gt,A(k(a)),1)]),u(lt),u(_t)])]),"vertical-nav-header":f(({toggleIsOverlayNavActive:g})=>[u(c,{class:"ms-n3 d-lg-none",onClick:r[0]||(r[0]=v=>l.toggleVerticalOverlayNavActive(!0))},{default:f(()=>[u(M,{icon:"ri-menu-line"})]),_:1}),u(h,{to:"/",class:"app-logo app-title-wrapper"},{default:f(()=>[_("div",{class:"d-flex",innerHTML:k(Ae)},null,8,Qt)]),_:1})]),"vertical-nav-content":f(()=>[u(bt)]),footer:f(()=>[u(ft)]),default:f(()=>[B(l.$slots,"default",{},void 0,!0)]),_:3})):Xe("",!0)}}},er=re(Zt,[["__scopeId","data-v-cf90b3d1"]]),mr={__name:"default",setup(e){return(t,o)=>{const n=J("RouterView");return T(),C(er,null,{default:f(()=>[u(n)]),_:1})}}};export{mr as default};