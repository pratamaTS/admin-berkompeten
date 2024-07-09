import{m as ne,V as oe,u as ue,a as M}from"./VOverlay-C__J3Ob_.js";import{f as L}from"./forwardRefs-C3HCJjqu.js";import{p as U,l as j,Y as G,f as B,Z as ie,N as E,$ as W,a0 as p,G as I,B as Y,d as r,a1 as re,a2 as se,a3 as ce,x as de,a4 as O,a5 as fe,F as z,a6 as ve}from"./index-BDrsxP1q.js";import{m as me,c as pe,u as ge,d as T,f as ye,e as Ve,g as he}from"./VTextField-CPU-l1ku.js";import{V as Ce}from"./VChip-DgAaibyC.js";const Pe=U({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ne({origin:"center center",scrollStrategy:"block",transition:{component:oe},zIndex:2400})},"VDialog"),ze=j()({name:"VDialog",props:Pe(),emits:{"update:modelValue":e=>!0},setup(e,y){let{slots:V}=y;const d=G(e,"modelValue"),{scopeId:n}=ue(),o=B();function l(s){var c,f;const u=s.relatedTarget,i=s.target;if(u!==i&&((c=o.value)!=null&&c.contentEl)&&((f=o.value)!=null&&f.globalTop)&&![document,o.value.contentEl].includes(i)&&!o.value.contentEl.contains(i)){const v=se(o.value.contentEl);if(!v.length)return;const S=v[0],k=v[v.length-1];u===S?k.focus():S.focus()}}ie&&E(()=>d.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0}),E(d,async s=>{var u,i;await W(),s?(u=o.value.contentEl)==null||u.focus({preventScroll:!0}):(i=o.value.activatorEl)==null||i.focus({preventScroll:!0})});const h=p(()=>I({"aria-haspopup":"dialog","aria-expanded":String(d.value)},e.activatorProps));return Y(()=>{const s=M.filterProps(e);return r(M,I({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:d.value,"onUpdate:modelValue":u=>d.value=u,"aria-modal":"true",activatorProps:h.value,role:"dialog"},n),{activator:V.activator,default:function(){for(var u=arguments.length,i=new Array(u),c=0;c<u;c++)i[c]=arguments[c];return r(re,{root:"VDialog"},{default:()=>{var f;return[(f=V.default)==null?void 0:f.call(V,...i)]}})}})}),L({},o)}}),be=U({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...me({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ce(e).every(y=>y!=null&&typeof y=="object")},...pe({clearable:!0})},"VFileInput"),Ee=j()({name:"VFileInput",inheritAttrs:!1,props:be(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,y){let{attrs:V,emit:d,slots:n}=y;const{t:o}=de(),l=G(e,"modelValue"),{isFocused:h,focus:s,blur:u}=ge(e),i=p(()=>typeof e.showSize!="boolean"?e.showSize:void 0),c=p(()=>(l.value??[]).reduce((t,a)=>{let{size:C=0}=a;return t+C},0)),f=p(()=>O(c.value,i.value)),v=p(()=>(l.value??[]).map(t=>{const{name:a="",size:C=0}=t;return e.showSize?`${a} (${O(C,i.value)})`:a})),S=p(()=>{var a;const t=((a=l.value)==null?void 0:a.length)??0;return e.showSize?o(e.counterSizeString,t,f.value):o(e.counterString,t)}),k=B(),R=B(),g=B(),Z=p(()=>h.value||e.active),A=p(()=>["plain","underlined"].includes(e.variant));function w(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),h.value||s()}function q(t){D(t)}function H(t){d("mousedown:control",t)}function D(t){var a;(a=g.value)==null||a.click(),d("click:control",t)}function J(t){t.stopPropagation(),w(),W(()=>{l.value=[],ve(e["onClick:clear"],t)})}return E(l,t=>{(!Array.isArray(t)||!t.length)&&g.value&&(g.value.value="")}),Y(()=>{const t=!!(n.counter||e.counter),a=!!(t||n.details),[C,K]=fe(V),{modelValue:Ie,...Q}=T.filterProps(e),X=ye(e);return r(T,I({ref:k,modelValue:l.value,"onUpdate:modelValue":P=>l.value=P,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":A.value},e.class],style:e.style,"onClick:prepend":q},C,Q,{centerAffix:!A.value,focused:h.value}),{...n,default:P=>{let{id:F,isDisabled:b,isDirty:x,isReadonly:N,isValid:_}=P;return r(Ve,I({ref:R,"prepend-icon":e.prependIcon,onMousedown:H,onClick:D,"onClick:clear":J,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},X,{id:F.value,active:Z.value||x.value,dirty:x.value,disabled:b.value,focused:h.value,error:_.value===!1}),{...n,default:ee=>{var $;let{props:{class:te,...le}}=ee;return r(z,null,[r("input",I({ref:g,type:"file",readonly:N.value,disabled:b.value,multiple:e.multiple,name:e.name,onClick:m=>{m.stopPropagation(),N.value&&m.preventDefault(),w()},onChange:m=>{if(!m.target)return;const ae=m.target;l.value=[...ae.files??[]]},onFocus:w,onBlur:u},le,K),null),r("div",{class:te},[!!(($=l.value)!=null&&$.length)&&(n.selection?n.selection({fileNames:v.value,totalBytes:c.value,totalBytesReadable:f.value}):e.chips?v.value.map(m=>r(Ce,{key:m,size:"small",color:e.color},{default:()=>[m]})):v.value.join(", "))])])}})},details:a?P=>{var F,b;return r(z,null,[(F=n.details)==null?void 0:F.call(n,P),t&&r(z,null,[r("span",null,null),r(he,{active:!!((b=l.value)!=null&&b.length),value:S.value},n.counter)])])}:void 0})}),L({},k,R,g)}});export{Ee as V,ze as a};