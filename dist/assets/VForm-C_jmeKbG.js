import{p,m as v,l as b,f as F,B as V,d as y}from"./index-CPp79PcY.js";import{k as h,l as R}from"./VTextField-fQhUOe9b.js";import{f as k}from"./forwardRefs-BpuzTU2e.js";const P=p({...v(),...h()},"VForm"),g=b()({name:"VForm",props:P(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=R(r),s=F();function l(t){t.preventDefault(),a.reset()}function u(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return V(()=>{var t;return y("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,a)])}),k(a,s)}});export{g as V};