import{h as A,O as D,al as V,r as _,i as S,o as m,f as d,w as e,d as a,am as O,a2 as b,b as u,t as k,L as w}from"./index-AryBdys7.js";import{a as v}from"./VGrid-H4nAnDsn.js";import{b as p,V as C,a as y}from"./VCardText-Ccz8IcNf.js";import{V as E}from"./VCard-DRv5nRi-.js";import{V as I}from"./VForm-2GwK3Akv.js";import{V as M}from"./VTextField-ZuzApsZG.js";import{V as x}from"./VAlert-Dclja9nK.js";import"./VCardTitle-gQEIOlk7.js";import"./VAvatar-Bk7bSWw5.js";import"./VImg-BnnpGyml.js";import"./index-DYhDWbac.js";import"./VInput-0JT9cSES.js";import"./forwardRefs-BgKS6qNZ.js";import"./easing-DY7PVvcf.js";const P={__name:"ConfigDetailUpsert",setup(R){const n=A();D();const i=localStorage.getItem("id"),r=V({advice_analys:0}),o=V({}),f=localStorage.getItem("token"),c=_(""),l=_(""),$=async t=>{try{const s=await v.get(`https://gateway.berkompeten.com/api/admin/master/config/detail?id=${t}`,{headers:{Authorization:`Bearer ${f}`}});Object.assign(r,s.data.data)}catch(s){console.error("Error fetching config data:",s)}},B=async()=>{try{await v({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/config/upsert",data:r,headers:{Authorization:`Bearer ${f}`}}),c.value="Config saved successfully!",setTimeout(()=>{h(),n.push("/config-management")},2e3)}catch(t){console.error("Error submitting form:",t),t.response&&t.response.data?t.response.status===500?l.value=t.response.data.message||"An error occurred while saving. Please try again.":t.response.data.error?(Object.assign(o,t.response.data.message),console.log("ERROR: ",o)):l.value="An error occurred while saving. Please try again.":l.value="An error occurred while saving. Please try again."}},h=()=>{Object.assign(r,{advice_analys:0})};return S(()=>{i?$(i):localStorage.removeItem("id")}),(t,s)=>(m(),d(y,null,{default:e(()=>[a(p,{cols:"12"},{default:e(()=>[a(E,{title:"Config Details"},{default:e(()=>[a(C,null,{default:e(()=>[a(I,{onSubmit:O(B,["prevent"])},{default:e(()=>[a(y,null,{default:e(()=>[a(p,{cols:"12"},{default:e(()=>[a(M,{modelValue:r.advice_analys,"onUpdate:modelValue":s[0]||(s[0]=g=>r.advice_analys=g),"error-messages":o.advice_analys,label:"Advice Analys Limit",type:"number"},null,8,["modelValue","error-messages"])]),_:1}),a(p,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:e(()=>[a(b,{type:"submit",color:"#0080ff"},{default:e(()=>[u("Save")]),_:1}),a(b,{onClick:h,color:"secondary",variant:"outlined"},{default:e(()=>[u("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(C,null,{default:e(()=>[c.value?(m(),d(x,{key:0,type:"success",dismissible:"","onClick:close":s[1]||(s[1]=g=>c.value="")},{default:e(()=>[u(k(c.value),1)]),_:1})):w("",!0),l.value?(m(),d(x,{key:1,type:"error",dismissible:"","onClick:close":s[2]||(s[2]=g=>l.value="")},{default:e(()=>[u(k(l.value),1)]),_:1})):w("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},X={__name:"config-detail",setup(R){const n=localStorage.getItem("token"),i=_(null),r=A();return S(async()=>{if(n)try{const o=await v.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${n}`}});i.value=o.data}catch(o){o.response&&o.response.status===401&&r.push("/login")}else r.push("/login")}),(o,f)=>(m(),d(y,{class:"match-height"},{default:e(()=>[a(p,{cols:"12",md:"12"},{default:e(()=>[a(P)]),_:1})]),_:1}))}};export{X as default};
