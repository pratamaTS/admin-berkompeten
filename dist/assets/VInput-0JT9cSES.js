import{p as B,m as _,s as q,v as w,E as z,d as m,A as G,V as J,bu as K,a3 as E,a1 as c,aM as A,a7 as x,B as Q,ac as D,r as F,P as C,aI as W,y as ee,aH as ae,aC as Y,u as ne,X as te,Z as se,i as le,bb as N,a0 as ie,I as U,aO as ue,aY as re,bk as oe}from"./index-AryBdys7.js";import{b as de}from"./forwardRefs-BgKS6qNZ.js";import{m as ce,M as ve}from"./index-DYhDWbac.js";const fe=B({text:String,clickable:Boolean,..._(),...q()},"VLabel"),Be=w()({name:"VLabel",props:fe(),setup(e,d){let{slots:r}=d;return z(()=>{var n;return m("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(n=r.default)==null?void 0:n.call(r)])}),{}}});function ge(e){const{t:d}=G();function r(n){let{name:o}=n;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],t=e[`onClick:${o}`],f=t&&a?d(`$vuetify.input.${a}`,e.label??""):void 0;return m(J,{icon:e[`${o}Icon`],"aria-label":f,onClick:t},null)}return{InputIcon:r}}const me=B({focused:Boolean,"onUpdate:focused":A()},"focus");function Ce(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();const r=E(e,"focused"),n=c(()=>({[`${d}--focused`]:r.value}));function o(){r.value=!0}function a(){r.value=!1}return{focusClasses:n,isFocused:r,focus:o,blur:a}}const ye=B({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},..._(),...ce({transition:{component:de,leaveAbsolute:!0,group:!0}})},"VMessages"),he=w()({name:"VMessages",props:ye(),setup(e,d){let{slots:r}=d;const n=c(()=>x(e.messages)),{textColorClasses:o,textColorStyles:a}=Q(c(()=>e.color));return z(()=>m(ve,{transition:e.transition,tag:"div",class:["v-messages",o.value,e.class],style:[a.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((t,f)=>m("div",{class:"v-messages__message",key:`${f}-${n.value}`},[r.message?r.message({message:t}):t]))]})),{}}}),j=Symbol.for("vuetify:form"),Pe=B({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function xe(e){const d=E(e,"modelValue"),r=c(()=>e.disabled),n=c(()=>e.readonly),o=D(!1),a=F([]),t=F([]);async function f(){const s=[];let l=!0;t.value=[],o.value=!0;for(const v of a.value){const i=await v.validate();if(i.length>0&&(l=!1,s.push({id:v.id,errorMessages:i})),!l&&e.fastFail)break}return t.value=s,o.value=!1,{valid:l,errors:t.value}}function k(){a.value.forEach(s=>s.reset())}function V(){a.value.forEach(s=>s.resetValidation())}return C(a,()=>{let s=0,l=0;const v=[];for(const i of a.value)i.isValid===!1?(l++,v.push({id:i.id,errorMessages:i.errorMessages})):i.isValid===!0&&s++;t.value=v,d.value=l>0?!1:s===a.value.length?!0:null},{deep:!0}),W(j,{register:s=>{let{id:l,validate:v,reset:i,resetValidation:p}=s;a.value.some(I=>I.id===l),a.value.push({id:l,validate:v,reset:i,resetValidation:p,isValid:null,errorMessages:[]})},unregister:s=>{a.value=a.value.filter(l=>l.id!==s)},update:(s,l,v)=>{const i=a.value.find(p=>p.id===s);i&&(i.isValid=l,i.errorMessages=v)},isDisabled:r,isReadonly:n,isValidating:o,isValid:d,items:a,validateOn:ee(e,"validateOn")}),{errors:t,isDisabled:r,isReadonly:n,isValidating:o,isValid:d,items:a,validate:f,reset:k,resetValidation:V}}function pe(){return ae(j,null)}const Ve=B({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...me()},"validation");function be(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K(),r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Y();const n=E(e,"modelValue"),o=c(()=>e.validationValue===void 0?n.value:e.validationValue),a=pe(),t=F([]),f=D(!0),k=c(()=>!!(x(n.value===""?null:n.value).length||x(o.value===""?null:o.value).length)),V=c(()=>!!(e.disabled??(a==null?void 0:a.isDisabled.value))),s=c(()=>!!(e.readonly??(a==null?void 0:a.isReadonly.value))),l=c(()=>{var u;return(u=e.errorMessages)!=null&&u.length?x(e.errorMessages).concat(t.value).slice(0,Math.max(0,+e.maxErrors)):t.value}),v=c(()=>{let u=(e.validateOn??(a==null?void 0:a.validateOn.value))||"input";u==="lazy"&&(u="input lazy");const g=new Set((u==null?void 0:u.split(" "))??[]);return{blur:g.has("blur")||g.has("input"),input:g.has("input"),submit:g.has("submit"),lazy:g.has("lazy")}}),i=c(()=>{var u;return e.error||(u=e.errorMessages)!=null&&u.length?!1:e.rules.length?f.value?t.value.length||v.value.lazy?null:!0:!t.value.length:!0}),p=D(!1),I=c(()=>({[`${d}--error`]:i.value===!1,[`${d}--dirty`]:k.value,[`${d}--disabled`]:V.value,[`${d}--readonly`]:s.value})),M=c(()=>e.name??ne(r));te(()=>{a==null||a.register({id:M.value,validate:y,reset:P,resetValidation:S})}),se(()=>{a==null||a.unregister(M.value)}),le(async()=>{v.value.lazy||await y(!0),a==null||a.update(M.value,i.value,l.value)}),N(()=>v.value.input,()=>{C(o,()=>{if(o.value!=null)y();else if(e.focused){const u=C(()=>e.focused,g=>{g||y(),u()})}})}),N(()=>v.value.blur,()=>{C(()=>e.focused,u=>{u||y()})}),C(i,()=>{a==null||a.update(M.value,i.value,l.value)});function P(){n.value=null,ie(S)}function S(){f.value=!0,v.value.lazy?t.value=[]:y(!0)}async function y(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const g=[];p.value=!0;for(const b of e.rules){if(g.length>=+(e.maxErrors??1))break;const h=await(typeof b=="function"?b:()=>b)(o.value);if(h!==!0){if(h!==!1&&typeof h!="string"){console.warn(`${h} is not a valid value. Rule functions must return boolean true or a string.`);continue}g.push(h||"")}}return t.value=g,p.value=!1,f.value=u,t.value}return{errorMessages:l,isDirty:k,isDisabled:V,isReadonly:s,isPristine:f,isValid:i,isValidating:p,reset:P,resetValidation:S,validate:y,validationClasses:I}}const Me=B({id:String,appendIcon:U,centerAffix:{type:Boolean,default:!0},prependIcon:U,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":A(),"onClick:append":A(),..._(),...ue(),...Ve()},"VInput"),$e=w()({name:"VInput",props:{...Me()},emits:{"update:modelValue":e=>!0},setup(e,d){let{attrs:r,slots:n,emit:o}=d;const{densityClasses:a}=re(e),{rtlClasses:t}=oe(),{InputIcon:f}=ge(e),k=Y(),V=c(()=>e.id||`input-${k}`),s=c(()=>`${V.value}-messages`),{errorMessages:l,isDirty:v,isDisabled:i,isReadonly:p,isPristine:I,isValid:M,isValidating:P,reset:S,resetValidation:y,validate:u,validationClasses:g}=be(e,"v-input",V),b=c(()=>({id:V,messagesId:s,isDirty:v,isDisabled:i,isReadonly:p,isPristine:I,isValid:M,isValidating:P,reset:S,resetValidation:y,validate:u})),$=c(()=>{var h;return(h=e.errorMessages)!=null&&h.length||!I.value&&l.value.length?l.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return z(()=>{var O,T,L,H;const h=!!(n.prepend||e.prependIcon),X=!!(n.append||e.appendIcon),R=$.value.length>0,Z=!e.hideDetails||e.hideDetails==="auto"&&(R||!!n.details);return m("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,t.value,g.value,e.class],style:e.style},[h&&m("div",{key:"prepend",class:"v-input__prepend"},[(O=n.prepend)==null?void 0:O.call(n,b.value),e.prependIcon&&m(f,{key:"prepend-icon",name:"prepend"},null)]),n.default&&m("div",{class:"v-input__control"},[(T=n.default)==null?void 0:T.call(n,b.value)]),X&&m("div",{key:"append",class:"v-input__append"},[e.appendIcon&&m(f,{key:"append-icon",name:"append"},null),(L=n.append)==null?void 0:L.call(n,b.value)]),Z&&m("div",{class:"v-input__details"},[m(he,{id:s.value,active:R,messages:$.value},{message:n.message}),(H=n.details)==null?void 0:H.call(n,b.value)])])}),{reset:S,resetValidation:y,validate:u,isValid:M,errorMessages:l}}});export{$e as V,pe as a,Be as b,me as c,ge as d,Pe as e,xe as f,Me as m,Ce as u};
