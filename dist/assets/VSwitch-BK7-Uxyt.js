import{V as R}from"./forwardRefs-BgKS6qNZ.js";import{m as T,u as K,V as f}from"./VInput-0JT9cSES.js";import{m as M,V}from"./VSelectionControl-COivTBzk.js";import{p as $,v as j,a3 as g,aB as q,r as G,a1 as h,aC as H,E as J,a9 as O,d as a,K as C,F as Q,V as W,aD as X,aE as Y}from"./index-AryBdys7.js";const Z=$({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...T(),...M()},"VSwitch"),oe=j()({name:"VSwitch",inheritAttrs:!1,props:Z(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,k){let{attrs:y,slots:o}=k;const n=g(e,"indeterminate"),s=g(e,"modelValue"),{loaderClasses:w}=q(e),{isFocused:b,focus:S,blur:P}=K(e),v=G(),B=h(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),F=H(),_=h(()=>e.id||`switch-${F}`);function x(){n.value&&(n.value=!1)}function A(i){var u,r;i.stopPropagation(),i.preventDefault(),(r=(u=v.value)==null?void 0:u.input)==null||r.click()}return J(()=>{const[i,u]=O(y),r=f.filterProps(e),I=V.filterProps(e);return a(f,C({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},w.value,e.class]},i,r,{modelValue:s.value,"onUpdate:modelValue":d=>s.value=d,id:_.value,focused:b.value,style:e.style}),{...o,default:d=>{let{id:p,messagesId:D,isDisabled:U,isReadonly:z,isValid:E}=d;return a(V,C({ref:v},I,{modelValue:s.value,"onUpdate:modelValue":[l=>s.value=l,x],id:p.value,"aria-describedby":D.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:U.value,readonly:z.value,onFocus:S,onBlur:P},u),{...o,default:l=>{let{backgroundColorClasses:c,backgroundColorStyles:t}=l;return a("div",{class:["v-switch__track",...c.value],style:t.value,onClick:A},null)},input:l=>{let{inputNode:c,icon:t,backgroundColorClasses:L,backgroundColorStyles:N}=l;return a(Q,null,[c,a("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":t||e.loading},e.inset?void 0:L.value],style:e.inset?void 0:N.value},[a(R,null,{default:()=>[e.loading?a(X,{name:"v-switch",active:!0,color:E.value===!1?void 0:B.value},{default:m=>o.loader?o.loader(m):a(Y,{active:m.isActive,color:m.color,indeterminate:!0,size:"16",width:"2"},null)}):t&&a(W,{key:t,icon:t,size:"x-small"},null)]})])])}})}})}),{}}});export{oe as V};
