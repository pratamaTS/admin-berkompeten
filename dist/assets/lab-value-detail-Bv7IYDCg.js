import{u as $,M as I,ah as k,f as g,g as B,o as b,e as _,w as t,d as a,ai as M,H as u,a1 as C,b as f,t as x,J as S}from"./index-BdypHxYq.js";import{a as y}from"./VGrid-Bj6fBhbQ.js";import{b as n,V as A,a as v}from"./VCardText-wf_msf2G.js";import{V as O}from"./VCard-C2knPemY.js";import{V as z}from"./VForm-CU4LWlFA.js";import{V as P}from"./VSelect-DYEZgxYV.js";import{V}from"./VTextField-CMwSyf7E.js";import{V as R}from"./VAlert-CWW2At3V.js";import"./VAvatar-CgLcntZO.js";import"./VImg-Re4CKkkJ.js";import"./index-BsKuHeyD.js";import"./forwardRefs-Crp4BM6_.js";import"./VList-aRLYBpYa.js";import"./ssrBoot-DKIfSqQ2.js";import"./VOverlay-KQSsT9qn.js";import"./lazy-uRRNO_iK.js";import"./VMenu-2W8-MkZ_.js";import"./VCheckboxBtn-C4cQR2ar.js";import"./VSelectionControl-DI6AocWB.js";import"./VChip-C7EZpB14.js";const T={__name:"LabValueDetailUpsert",setup(L){const m=$();I();const c=localStorage.getItem("id"),o=k({category_lab_id:0,indicator:"",unit:"",reference_value:""}),s=k({}),d=localStorage.getItem("token"),p=g(""),i=g(""),h=g([]),U=async r=>{try{const e=await y.get(`https://gateway.berkompeten.com/api/admin/master/lab-value/detail?id=${r}`,{headers:{Authorization:`Bearer ${d}`}});Object.assign(o,e.data.data)}catch(e){console.error("Error fetching lab value data:",e)}},D=async()=>{try{const r=await y.get("https://gateway.berkompeten.com/api/admin/master/category-lab/fetch",{headers:{Authorization:`Bearer ${d}`}});h.value=r.data.data.map(e=>({id:e.id,name:e.name}))}catch(r){console.error("Error fetching category options:",r)}},E=async()=>{try{await y({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/lab-value/upsert",data:o,headers:{Authorization:`Bearer ${d}`}}),p.value="Lab value saved successfully!",setTimeout(()=>{w(),m.push("/lab-value-management")},2e3)}catch(r){console.error("Error submitting form:",r),r.response&&r.response.data?r.response.status===500?i.value=r.response.data.message||"An error occurred while saving. Please try again.":r.response.data.error?(Object.assign(s,r.response.data.message),console.log("ERROR: ",s)):i.value="An error occurred while saving. Please try again.":i.value="An error occurred while saving. Please try again."}},w=()=>{Object.assign(o,{category_lab_id:0,indicator:"",unit:"",reference_value:""})};return B(()=>{D(),c?U(c):localStorage.removeItem("id")}),(r,e)=>(b(),_(v,null,{default:t(()=>[a(n,{cols:"12"},{default:t(()=>[a(O,{title:"Lab Value Details"},{default:t(()=>[a(A,null,{default:t(()=>[a(z,{onSubmit:M(E,["prevent"])},{default:t(()=>[a(v,null,{default:t(()=>[a(n,{cols:"12"},{default:t(()=>[a(P,{modelValue:o.category_lab_id,"onUpdate:modelValue":e[0]||(e[0]=l=>o.category_lab_id=l),"error-messages":s.category_lab_id,label:"Category Lab",items:u(h),placeholder:"Select Category Lab","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),a(n,{cols:"12"},{default:t(()=>[a(V,{modelValue:o.indicator,"onUpdate:modelValue":e[1]||(e[1]=l=>o.indicator=l),"error-messages":s.indicator,label:"Indicator"},null,8,["modelValue","error-messages"])]),_:1}),a(n,{cols:"12"},{default:t(()=>[a(V,{modelValue:o.unit,"onUpdate:modelValue":e[2]||(e[2]=l=>o.unit=l),"error-messages":s.unit,label:"Unit"},null,8,["modelValue","error-messages"])]),_:1}),a(n,{cols:"12"},{default:t(()=>[a(V,{modelValue:o.reference_value,"onUpdate:modelValue":e[3]||(e[3]=l=>o.reference_value=l),"error-messages":s.reference_value,label:"Reference Value"},null,8,["modelValue","error-messages"])]),_:1}),a(n,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[a(C,{type:"submit",color:"#0080ff"},{default:t(()=>[f("Save")]),_:1}),a(C,{onClick:w,color:"secondary",variant:"outlined"},{default:t(()=>[f("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(A,null,{default:t(()=>[u(p)?(b(),_(R,{key:0,type:"success",dismissible:"","onClick:close":e[4]||(e[4]=l=>p.value="")},{default:t(()=>[f(x(u(p)),1)]),_:1})):S("",!0),u(i)?(b(),_(R,{key:1,type:"error",dismissible:"","onClick:close":e[5]||(e[5]=l=>i.value="")},{default:t(()=>[f(x(u(i)),1)]),_:1})):S("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},ne={__name:"lab-value-detail",setup(L){const m=localStorage.getItem("token"),c=g(null),o=$();return B(async()=>{if(m)try{const s=await y.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${m}`}});c.value=s.data}catch(s){s.response&&s.response.status===401&&o.push("/login")}else o.push("/login")}),(s,d)=>(b(),_(v,{class:"match-height"},{default:t(()=>[a(n,{cols:"12",md:"12"},{default:t(()=>[a(T)]),_:1})]),_:1}))}};export{ne as default};