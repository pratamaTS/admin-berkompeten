import{p as N,m as Y,v as O,a1 as u,E as U,d as l,H as G,J as le,I as K,aM as X,bp as re,l as ue,s as de,aV as ce,aB as fe,z as ve,bk as me,aC as ye,r as B,x as ge,y as be,B as xe,P as Ce,aj as he,aD as Ve,F as E,K as M,b9 as ke,bs as _e,a3 as Ie,a9 as Pe,ah as Fe,bt as Se,a0 as Z,aa as Be}from"./index-AryBdys7.js";import{b as we,c as Re,f as Te}from"./forwardRefs-BgKS6qNZ.js";import{m as Le,M as Ae,I as $e}from"./index-DYhDWbac.js";import{b as pe,c as De,u as te,d as Ee,m as Me,V as ee}from"./VInput-0JT9cSES.js";import{n as Ne,a as Oe,s as Ue}from"./easing-DY7PVvcf.js";const je=N({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Y(),...Le({transition:{component:we}})},"VCounter"),ze=O()({name:"VCounter",functional:!0,props:je(),setup(e,g){let{slots:a}=g;const V=u(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return U(()=>l(Ae,{transition:e.transition},{default:()=>[G(l("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:V.value,max:e.max,value:e.value}):V.value]),[[le,e.active]])]})),{}}}),We=N({floating:Boolean,...Y()},"VFieldLabel"),D=O()({name:"VFieldLabel",props:We(),setup(e,g){let{slots:a}=g;return U(()=>l(pe,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),qe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ne=N({appendInnerIcon:K,bgColor:String,clearable:Boolean,clearIcon:{type:K,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:K,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>qe.includes(e)},"onClick:clear":X(),"onClick:appendInner":X(),"onClick:prependInner":X(),...Y(),...re(),...ue(),...de()},"VField"),ae=O()({name:"VField",inheritAttrs:!1,props:{id:String,...De(),...ne()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,g){let{attrs:a,emit:V,slots:t}=g;const{themeClasses:b}=ce(e),{loaderClasses:C}=fe(e),{focusClasses:j,isFocused:w,focus:R,blur:T}=te(e),{InputIcon:k}=Ee(e),{roundedClasses:z}=ve(e),{rtlClasses:L}=me(),h=u(()=>e.dirty||e.active),f=u(()=>!e.singleLine&&!!(e.label||t.label)),W=ye(),o=u(()=>e.id||`input-${W}`),q=u(()=>`${o.value}-messages`),A=B(),_=B(),$=B(),n=u(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:d,backgroundColorStyles:c}=ge(be(e,"bgColor")),{textColorClasses:v,textColorStyles:H}=xe(u(()=>e.error||e.disabled?void 0:h.value&&w.value?e.color:e.baseColor));Ce(h,s=>{if(f.value){const i=A.value.$el,m=_.value.$el;requestAnimationFrame(()=>{const y=Ne(i),r=m.getBoundingClientRect(),P=r.x-y.x,F=r.y-y.y-(y.height/2-r.height/2),x=r.width/.75,S=Math.abs(x-y.width)>1?{maxWidth:he(x)}:void 0,p=getComputedStyle(i),Q=getComputedStyle(m),ie=parseFloat(p.transitionDuration)*1e3||150,oe=parseFloat(Q.getPropertyValue("--v-field-label-scale")),se=Q.getPropertyValue("color");i.style.visibility="visible",m.style.visibility="hidden",Oe(i,{transform:`translate(${P}px, ${F}px) scale(${oe})`,color:se,...S},{duration:ie,easing:Ue,direction:s?"normal":"reverse"}).finished.then(()=>{i.style.removeProperty("visibility"),m.style.removeProperty("visibility")})})}},{flush:"post"});const I=u(()=>({isActive:h,isFocused:w,controlRef:$,blur:T,focus:R}));function J(s){s.target!==document.activeElement&&s.preventDefault()}return U(()=>{var P,F,x;const s=e.variant==="outlined",i=t["prepend-inner"]||e.prependInnerIcon,m=!!(e.clearable||t.clear),y=!!(t["append-inner"]||e.appendInnerIcon||m),r=()=>t.label?t.label({...I.value,label:e.label,props:{for:o.value}}):e.label;return l("div",M({class:["v-field",{"v-field--active":h.value,"v-field--appended":y,"v-field--center-affix":e.centerAffix??!n.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":i,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!r(),[`v-field--variant-${e.variant}`]:!0},b.value,d.value,j.value,C.value,z.value,L.value,e.class],style:[c.value,e.style],onClick:J},a),[l("div",{class:"v-field__overlay"},null),l(Ve,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),i&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(k,{key:"prepend-icon",name:"prependInner"},null),(P=t["prepend-inner"])==null?void 0:P.call(t,I.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&f.value&&l(D,{key:"floating-label",ref:_,class:[v.value],floating:!0,for:o.value,style:H.value},{default:()=>[r()]}),l(D,{ref:A,for:o.value},{default:()=>[r()]}),(F=t.default)==null?void 0:F.call(t,{...I.value,props:{id:o.value,class:"v-field__input","aria-describedby":q.value},focus:R,blur:T})]),m&&l(Re,{key:"clear"},{default:()=>[G(l("div",{class:"v-field__clearable",onMousedown:S=>{S.preventDefault(),S.stopPropagation()}},[t.clear?t.clear():l(k,{name:"clear"},null)]),[[le,e.dirty]])]}),y&&l("div",{key:"append",class:"v-field__append-inner"},[(x=t["append-inner"])==null?void 0:x.call(t,I.value),e.appendInnerIcon&&l(k,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",v.value],style:H.value},[s&&l(E,null,[l("div",{class:"v-field__outline__start"},null),f.value&&l("div",{class:"v-field__outline__notch"},[l(D,{ref:_,floating:!0,for:o.value},{default:()=>[r()]})]),l("div",{class:"v-field__outline__end"},null)]),n.value&&f.value&&l(D,{ref:_,floating:!0,for:o.value},{default:()=>[r()]})])])}),{controlRef:$}}});function He(e){const g=Object.keys(ae.props).filter(a=>!ke(a)&&a!=="class"&&a!=="style");return _e(e,g)}const Je=["color","file","time","date","datetime-local","week","month"],Ke=N({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Me(),...ne()},"VTextField"),el=O()({name:"VTextField",directives:{Intersect:$e},inheritAttrs:!1,props:Ke(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,g){let{attrs:a,emit:V,slots:t}=g;const b=Ie(e,"modelValue"),{isFocused:C,focus:j,blur:w}=te(e),R=u(()=>typeof e.counterValue=="function"?e.counterValue(b.value):typeof e.counterValue=="number"?e.counterValue:(b.value??"").toString().length),T=u(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),k=u(()=>["plain","underlined"].includes(e.variant));function z(n,d){var c,v;!e.autofocus||!n||(v=(c=d[0].target)==null?void 0:c.focus)==null||v.call(c)}const L=B(),h=B(),f=B(),W=u(()=>Je.includes(e.type)||e.persistentPlaceholder||C.value||e.active);function o(){var n;f.value!==document.activeElement&&((n=f.value)==null||n.focus()),C.value||j()}function q(n){V("mousedown:control",n),n.target!==f.value&&(o(),n.preventDefault())}function A(n){o(),V("click:control",n)}function _(n){n.stopPropagation(),o(),Z(()=>{b.value=null,Be(e["onClick:clear"],n)})}function $(n){var c;const d=n.target;if(b.value=d.value,(c=e.modelModifiers)!=null&&c.trim&&["text","search","password","tel","url"].includes(e.type)){const v=[d.selectionStart,d.selectionEnd];Z(()=>{d.selectionStart=v[0],d.selectionEnd=v[1]})}}return U(()=>{const n=!!(t.counter||e.counter!==!1&&e.counter!=null),d=!!(n||t.details),[c,v]=Pe(a),{modelValue:H,...I}=ee.filterProps(e),J=He(e);return l(ee,M({ref:L,modelValue:b.value,"onUpdate:modelValue":s=>b.value=s,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":k.value},e.class],style:e.style},c,I,{centerAffix:!k.value,focused:C.value}),{...t,default:s=>{let{id:i,isDisabled:m,isDirty:y,isReadonly:r,isValid:P}=s;return l(ae,M({ref:h,onMousedown:q,onClick:A,"onClick:clear":_,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},J,{id:i.value,active:W.value||y.value,dirty:y.value||e.dirty,disabled:m.value,focused:C.value,error:P.value===!1}),{...t,default:F=>{let{props:{class:x,...S}}=F;const p=G(l("input",M({ref:f,value:b.value,onInput:$,autofocus:e.autofocus,readonly:r.value,disabled:m.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:o,onBlur:w},S,v),null),[[Fe("intersect"),{handler:z},null,{once:!0}]]);return l(E,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:x,"data-no-activator":""},[t.default(),p]):Se(p,{class:x}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:d?s=>{var i;return l(E,null,[(i=t.details)==null?void 0:i.call(t,s),n&&l(E,null,[l("span",null,null),l(ze,{active:e.persistentCounter||C.value,value:R.value,max:T.value},t.counter)])])}:void 0})}),Te({},L,h,f)}});export{el as V,ae as a,ze as b,Ke as c,He as f,ne as m};
