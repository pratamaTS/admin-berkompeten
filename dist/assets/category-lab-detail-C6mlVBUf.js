import{u as A,M as E,al as k,f as g,g as B,o as i,e as _,w as e,d as a,am as I,c as M,J as v,a1 as w,b as p,H as f,t as x}from"./index-CsCPL0t8.js";import{a as b}from"./VGrid-DYlVCkO2.js";import{b as c,V as C,a as h}from"./VCardText-DuUJmCgQ.js";import{V as N}from"./VCard-s8PJZUiK.js";import{V as O}from"./VForm-Di60KPYi.js";import{V as P}from"./VTextField-DzPHJB6Q.js";import{V as T}from"./VSwitch-BpLtaYZr.js";import{V as S}from"./VAlert-DRfOAluB.js";import"./VCardTitle-J5_B7Lwg.js";import"./VAvatar-B4HF2XqX.js";import"./VImg-DHBuhUwJ.js";import"./index-BtbVXw8u.js";import"./forwardRefs-CSxQ6vV6.js";import"./VSelectionControl-DkdlQg_K.js";const j={key:0,class:"text-red-500 text-sm"},z={__name:"CategoryLabDetailUpsert",setup(R){const m=A();E();const u=localStorage.getItem("id"),o=k({name:"",is_active:0}),s=k({}),y=localStorage.getItem("token"),d=g(""),l=g("");g([]);const $=async r=>{try{const t=await b.get(`https://gateway.berkompeten.com/api/admin/master/category-lab/detail?id=${r}`,{headers:{Authorization:`Bearer ${y}`}});Object.assign(o,t.data.data)}catch(t){console.error("Error fetching category lab data:",t)}},D=async()=>{try{await b({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/category-lab/upsert",data:o,headers:{Authorization:`Bearer ${y}`}}),d.value="Category lab saved successfully!",setTimeout(()=>{V(),m.push("/category-lab-management")},2e3)}catch(r){console.error("Error submitting form:",r),r.response&&r.response.data?r.response.status===500?l.value=r.response.data.message||"An error occurred while saving. Please try again.":r.response.data.error?(Object.assign(s,r.response.data.message),console.log("ERROR: ",s)):l.value="An error occurred while saving. Please try again.":l.value="An error occurred while saving. Please try again."}},V=()=>{Object.assign(o,{name:"",is_active:0})};return B(()=>{u?$(u):localStorage.removeItem("id")}),(r,t)=>(i(),_(h,null,{default:e(()=>[a(c,{cols:"12"},{default:e(()=>[a(N,{title:"Category Lab Details"},{default:e(()=>[a(C,null,{default:e(()=>[a(O,{onSubmit:I(D,["prevent"])},{default:e(()=>[a(h,null,{default:e(()=>[a(c,{cols:"12"},{default:e(()=>[a(P,{modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=n=>o.name=n),"error-messages":s.name,label:"Name"},null,8,["modelValue","error-messages"])]),_:1}),a(c,{cols:"12"},{default:e(()=>[a(T,{color:"#0080ff",modelValue:o.is_active,"onUpdate:modelValue":t[1]||(t[1]=n=>o.is_active=n),"error-messages":s.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),s.image_url?(i(),M("div",j)):v("",!0)]),_:1}),a(c,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:e(()=>[a(w,{type:"submit",color:"#0080ff"},{default:e(()=>[p("Save")]),_:1}),a(w,{onClick:V,color:"secondary",variant:"outlined"},{default:e(()=>[p("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(C,null,{default:e(()=>[f(d)?(i(),_(S,{key:0,type:"success",dismissible:"","onClick:close":t[2]||(t[2]=n=>d.value="")},{default:e(()=>[p(x(f(d)),1)]),_:1})):v("",!0),f(l)?(i(),_(S,{key:1,type:"error",dismissible:"","onClick:close":t[3]||(t[3]=n=>l.value="")},{default:e(()=>[p(x(f(l)),1)]),_:1})):v("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},ae={__name:"category-lab-detail",setup(R){const m=localStorage.getItem("token"),u=g(null),o=A();return B(async()=>{if(m)try{const s=await b.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${m}`}});u.value=s.data}catch(s){s.response&&s.response.status===401&&o.push("/login")}else o.push("/login")}),(s,y)=>(i(),_(h,{class:"match-height"},{default:e(()=>[a(c,{cols:"12",md:"12"},{default:e(()=>[a(z)]),_:1})]),_:1}))}};export{ae as default};