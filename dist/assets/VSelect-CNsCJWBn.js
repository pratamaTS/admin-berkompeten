import{h as Ve,i as we,V as se}from"./VTextField-C1SY7NTo.js";import{p as $,m as ve,l as ne,av as me,N as q,B as ae,d as v,F as K,G as N,L as Se,a7 as F,a8 as ie,f as U,a0 as D,aw as he,ad as te,ax as ke,$ as be,Z as pe,al as Pe,ay as Te,aq as xe,s as Ce,az as Ie,g as Re,ac as Z,I as De,at as Ae,x as Be,Y as re,a3 as Fe,V as ce,aA as _e,a1 as Le,b as Oe,aB as de}from"./index-C_ljhpMr.js";import{f as Me}from"./forwardRefs-CwhYbBCS.js";import{m as Ee,u as He,c as Ne,V as fe}from"./VList-Bitd-23r.js";import{m as Ue}from"./index-DUgFqvxH.js";import{g as qe,V as ze}from"./VOverlay-CTyO5Knt.js";import{V as Ke}from"./VMenu-CyyymfSq.js";import{V as $e}from"./VCheckboxBtn-CR7tOEO8.js";import{V as We}from"./VChip-BMJcdelD.js";const je=$({renderless:Boolean,...ve()},"VVirtualScrollItem"),Ye=ne()({name:"VVirtualScrollItem",inheritAttrs:!1,props:je(),emits:{"update:height":e=>!0},setup(e,c){let{attrs:n,emit:d,slots:u}=c;const{resizeRef:f,contentRect:y}=me(void 0,"border");q(()=>{var o;return(o=y.value)==null?void 0:o.height},o=>{o!=null&&d("update:height",o)}),ae(()=>{var o,a;return e.renderless?v(K,null,[(o=u.default)==null?void 0:o.call(u,{itemRef:f})]):v("div",N({ref:f,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(a=u.default)==null?void 0:a.call(u)])})}}),Ge=-1,Xe=1,le=100,Ze=$({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Je(e,c){const n=Se(),d=F(0);ie(()=>{d.value=parseFloat(e.itemHeight||0)});const u=F(0),f=F(Math.ceil((parseInt(e.height)||n.height.value)/(d.value||16))||1),y=F(0),o=F(0),a=U(),g=U();let R=0;const{resizeRef:A,contentRect:i}=me();ie(()=>{A.value=a.value});const w=D(()=>{var t;return a.value===document.documentElement?n.height.value:((t=i.value)==null?void 0:t.height)||parseInt(e.height)||0}),S=D(()=>!!(a.value&&g.value&&w.value&&d.value));let P=Array.from({length:c.value.length}),m=Array.from({length:c.value.length});const T=F(0);let C=-1;function W(t){return P[t]||d.value}const B=ke(()=>{const t=performance.now();m[0]=0;const s=c.value.length;for(let V=1;V<=s-1;V++)m[V]=(m[V-1]||0)+W(V-1);T.value=Math.max(T.value,performance.now()-t)},T),j=q(S,t=>{t&&(j(),R=g.value.offsetTop,B.immediate(),_(),~C&&be(()=>{pe&&window.requestAnimationFrame(()=>{X(C),C=-1})}))});q(w,(t,s)=>{s&&_()}),he(()=>{B.clear()});function J(t,s){const V=P[t],b=d.value;d.value=b?Math.min(d.value,s):s,(V!==s||b!==d.value)&&(P[t]=s,B())}function k(t){return t=te(t,0,c.value.length-1),m[t]||0}function Y(t){return Qe(m,t)}let O=0,M=0,z=0;function Q(){if(!a.value||!g.value)return;const t=a.value.scrollTop,s=performance.now();s-z>500?(M=Math.sign(t-O),R=g.value.offsetTop):M=t-O,O=t,z=s,_()}function E(){!a.value||!g.value||(M=0,z=0,_())}let G=-1;function _(){cancelAnimationFrame(G),G=requestAnimationFrame(ee)}function ee(){if(!a.value||!w.value)return;const t=O-R,s=Math.sign(M),V=Math.max(0,t-le),b=te(Y(V),0,c.value.length),r=t+w.value+le,h=te(Y(r)+1,b+1,c.value.length);if((s!==Ge||b<u.value)&&(s!==Xe||h>f.value)){const p=k(u.value)-k(b),I=k(h)-k(f.value);Math.max(p,I)>le?(u.value=b,f.value=h):(b<=0&&(u.value=b),h>=c.value.length&&(f.value=h))}y.value=k(u.value),o.value=k(c.value.length)-k(f.value)}function X(t){const s=k(t);!a.value||t&&!s?C=t:a.value.scrollTop=s}const l=D(()=>c.value.slice(u.value,f.value).map((t,s)=>({raw:t,index:s+u.value})));return q(c,()=>{P=Array.from({length:c.value.length}),m=Array.from({length:c.value.length}),B.immediate(),_()},{deep:!0}),{containerRef:a,markerRef:g,computedItems:l,paddingTop:y,paddingBottom:o,scrollToIndex:X,handleScroll:Q,handleScrollend:E,handleItemResize:J}}function Qe(e,c){let n=e.length-1,d=0,u=0,f=null,y=-1;if(e[n]<c)return n;for(;d<=n;)if(u=d+n>>1,f=e[u],f>c)n=u-1;else if(f<c)y=u,d=u+1;else return f===c?u:d;return y}const et=$({items:{type:Array,default:()=>[]},renderless:Boolean,...Ze(),...ve(),...Pe()},"VVirtualScroll"),tt=ne()({name:"VVirtualScroll",props:et(),setup(e,c){let{slots:n}=c;const d=Te("VVirtualScroll"),{dimensionStyles:u}=xe(e),{containerRef:f,markerRef:y,handleScroll:o,handleScrollend:a,handleItemResize:g,scrollToIndex:R,paddingTop:A,paddingBottom:i,computedItems:w}=Je(e,Ce(e,"items"));return Ie(()=>e.renderless,()=>{function S(){var T,C;const m=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";f.value===document.documentElement?(document[m]("scroll",o,{passive:!0}),document[m]("scrollend",a)):((T=f.value)==null||T[m]("scroll",o,{passive:!0}),(C=f.value)==null||C[m]("scrollend",a))}Re(()=>{f.value=qe(d.vnode.el,!0),S(!0)}),he(S)}),ae(()=>{const S=w.value.map(P=>v(Ye,{key:P.index,renderless:e.renderless,"onUpdate:height":m=>g(P.index,m)},{default:m=>{var T;return(T=n.default)==null?void 0:T.call(n,{item:P.raw,index:P.index,...m})}}));return e.renderless?v(K,null,[v("div",{ref:y,class:"v-virtual-scroll__spacer",style:{paddingTop:Z(A.value)}},null),S,v("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Z(i.value)}},null)]):v("div",{ref:f,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:a,style:[u.value,e.style]},[v("div",{ref:y,class:"v-virtual-scroll__container",style:{paddingTop:Z(A.value),paddingBottom:Z(i.value)}},[S])])}),{scrollToIndex:R}}});function lt(e,c){const n=F(!1);let d;function u(o){cancelAnimationFrame(d),n.value=!0,d=requestAnimationFrame(()=>{d=requestAnimationFrame(()=>{n.value=!1})})}async function f(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(n.value){const a=q(n,()=>{a(),o()})}else o()})}async function y(o){var R,A;if(o.key==="Tab"&&((R=c.value)==null||R.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const a=(A=e.value)==null?void 0:A.$el;if(!a)return;(o.key==="Home"||o.key==="End")&&a.scrollTo({top:o.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await f();const g=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const i=a.getBoundingClientRect().top;for(const w of g)if(w.getBoundingClientRect().top>=i){w.focus();break}}else{const i=a.getBoundingClientRect().bottom;for(const w of[...g].reverse())if(w.getBoundingClientRect().bottom<=i){w.focus();break}}}return{onListScroll:u,onListKeydown:y}}const nt=$({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:De,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Ee({itemChildren:!1})},"Select"),at=$({...nt(),...Ae(Ve({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ue({transition:{component:ze}})},"VSelect"),mt=ne()({name:"VSelect",props:at(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:n}=c;const{t:d}=Be(),u=U(),f=U(),y=U(),o=re(e,"menu"),a=D({get:()=>o.value,set:l=>{var t;o.value&&!l&&((t=f.value)!=null&&t.ΨopenChildren)||(o.value=l)}}),{items:g,transformIn:R,transformOut:A}=He(e),i=re(e,"modelValue",[],l=>R(l===null?[null]:Fe(l)),l=>{const t=A(l);return e.multiple?t:t[0]??null}),w=D(()=>typeof e.counterValue=="function"?e.counterValue(i.value):typeof e.counterValue=="number"?e.counterValue:i.value.length),S=we(),P=D(()=>i.value.map(l=>l.value)),m=F(!1),T=D(()=>a.value?e.closeText:e.openText);let C="",W;const B=D(()=>e.hideSelected?g.value.filter(l=>!i.value.some(t=>t===l)):g.value),j=D(()=>e.hideNoData&&!g.value.length||e.readonly||(S==null?void 0:S.isReadonly.value)),J=D(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),k=U(),{onListScroll:Y,onListKeydown:O}=lt(k,u);function M(l){e.openOnClear&&(a.value=!0)}function z(){j.value||(a.value=!a.value)}function Q(l){var r,h;if(!l.key||e.readonly||S!=null&&S.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(a.value=!0),["Escape","Tab"].includes(l.key)&&(a.value=!1),l.key==="Home"?(r=k.value)==null||r.focus("first"):l.key==="End"&&((h=k.value)==null||h.focus("last"));const t=1e3;function s(p){const I=p.key.length===1,x=!p.ctrlKey&&!p.metaKey&&!p.altKey;return I&&x}if(e.multiple||!s(l))return;const V=performance.now();V-W>t&&(C=""),C+=l.key.toLowerCase(),W=V;const b=g.value.find(p=>p.title.toLowerCase().startsWith(C));b!==void 0&&(i.value=[b])}function E(l){if(e.multiple){const t=i.value.findIndex(s=>e.valueComparator(s.value,l.value));if(t===-1)i.value=[...i.value,l];else{const s=[...i.value];s.splice(t,1),i.value=s}}else i.value=[l],a.value=!1}function G(l){var t;(t=k.value)!=null&&t.$el.contains(l.relatedTarget)||(a.value=!1)}function _(){var l;m.value&&((l=u.value)==null||l.focus())}function ee(l){m.value=!0}function X(l){if(l==null)i.value=[];else if(de(u.value,":autofill")||de(u.value,":-webkit-autofill")){const t=g.value.find(s=>s.title===l);t&&E(t)}else u.value&&(u.value.value="")}return q(a,()=>{if(!e.hideSelected&&a.value&&i.value.length){const l=B.value.findIndex(t=>i.value.some(s=>e.valueComparator(s.value,t.value)));pe&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=y.value)==null||t.scrollToIndex(l))})}}),ae(()=>{const l=!!(e.chips||n.chip),t=!!(!e.hideNoData||B.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),s=i.value.length>0,V=se.filterProps(e),b=s||!m.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return v(se,N({ref:u},V,{modelValue:i.value.map(r=>r.props.value).join(", "),"onUpdate:modelValue":X,focused:m.value,"onUpdate:focused":r=>m.value=r,validationValue:i.externalValue,counterValue:w.value,dirty:s,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":i.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:b,"onClick:clear":M,"onMousedown:control":z,onBlur:G,onKeydown:Q,"aria-label":d(T.value),title:d(T.value)}),{...n,default:()=>v(K,null,[v(Ke,N({ref:f,modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,activator:"parent",contentClass:"v-select__content",disabled:j.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:_},J.value),{default:()=>[t&&v(Ne,{ref:k,selected:P.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:r=>r.preventDefault(),onKeydown:O,onFocusin:ee,onScrollPassive:Y,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var r,h,p;return[(r=n["prepend-item"])==null?void 0:r.call(n),!B.value.length&&!e.hideNoData&&(((h=n["no-data"])==null?void 0:h.call(n))??v(fe,{title:d(e.noDataText)},null)),v(tt,{ref:y,renderless:!0,items:B.value},{default:I=>{var ue;let{item:x,index:H,itemRef:L}=I;const oe=N(x.props,{ref:L,key:H,onClick:()=>E(x)});return((ue=n.item)==null?void 0:ue.call(n,{item:x,index:H,props:oe}))??v(fe,N(oe,{role:"option"}),{prepend:ge=>{let{isSelected:ye}=ge;return v(K,null,[e.multiple&&!e.hideSelected?v($e,{key:x.value,modelValue:ye,ripple:!1,tabindex:"-1"},null):void 0,x.props.prependIcon&&v(ce,{icon:x.props.prependIcon},null)])}})}}),(p=n["append-item"])==null?void 0:p.call(n)]}})]}),i.value.map((r,h)=>{function p(L){L.stopPropagation(),L.preventDefault(),E(r)}const I={"onClick:close":p,onMousedown(L){L.preventDefault(),L.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},x=l?!!n.chip:!!n.selection,H=x?_e(l?n.chip({item:r,index:h,props:I}):n.selection({item:r,index:h})):void 0;if(!(x&&!H))return v("div",{key:r.value,class:"v-select__selection"},[l?n.chip?v(Le,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:r.title}}},{default:()=>[H]}):v(We,N({key:"chip",closable:e.closableChips,size:"small",text:r.title,disabled:r.props.disabled},I),null):H??v("span",{class:"v-select__selection-text"},[r.title,e.multiple&&h<i.value.length-1&&v("span",{class:"v-select__selection-comma"},[Oe(",")])])])})]),"append-inner":function(){var I;for(var r=arguments.length,h=new Array(r),p=0;p<r;p++)h[p]=arguments[p];return v(K,null,[(I=n["append-inner"])==null?void 0:I.call(n,...h),e.menuIcon?v(ce,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Me({isFocused:m,menu:a,select:E},u)}});export{mt as V};
