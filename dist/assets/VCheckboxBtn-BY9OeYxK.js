import{m as V,V as o}from"./VSelectionControl-bJ4Y4K4n.js";import{p as f,I as v,v as I,a3 as c,a1 as l,E as k,ab as x,d as b,K as h}from"./index-VbzBk9vn.js";const C=f({indeterminate:Boolean,indeterminateIcon:{type:v,default:"$checkboxIndeterminate"},...V({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),y=I()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:s}=r;const t=c(e,"indeterminate"),n=c(e,"modelValue");function u(a){t.value&&(t.value=!1)}const i=l(()=>t.value?e.indeterminateIcon:e.falseIcon),m=l(()=>t.value?e.indeterminateIcon:e.trueIcon);return k(()=>{const a=x(o.filterProps(e),["modelValue"]);return b(o,h(a,{modelValue:n.value,"onUpdate:modelValue":[d=>n.value=d,u],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:m.value,"aria-checked":t.value?"mixed":void 0}),s)}),{}}});export{y as V,C as m};
