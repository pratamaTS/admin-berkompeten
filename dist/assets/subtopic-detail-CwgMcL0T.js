import{u as B,M as O,ar as k,f as b,N as F,g as R,o as m,e as _,w as s,d as t,as as I,H as n,c as U,J as h,ah as S,b as g,t as x}from"./index-BOG201kq.js";import{a as V}from"./VGrid-Cc9xDJ2L.js";import{b as l,V as A,a as v}from"./VCardText-CI-HyNsl.js";import{V as z}from"./VCard-B0mg4lY7.js";import{V as L}from"./VForm-czq-yGoZ.js";import{V as N}from"./VSelect-BtOrAO_k.js";import{V as T}from"./VTextField-DMfMzZ70.js";import{V as P}from"./VSwitch-BZTOq9_l.js";import{V as C}from"./VAlert-CsF9NLAL.js";import"./VAvatar-DytI58__.js";import"./VImg-DAaXXU5K.js";import"./index-B3ZOUsAr.js";import"./forwardRefs-BpzAAnfm.js";import"./VList-RM-sCRY4.js";import"./ssrBoot-BXbWiMUv.js";import"./VDivider-DAHy--7g.js";import"./VOverlay-CRLkgQNs.js";import"./lazy-YsMwEZS7.js";import"./VMenu-CpGZzkBU.js";import"./VCheckboxBtn-b5EOm6N7.js";import"./VSelectionControl-CA0QZVAb.js";import"./VChip-OpGoVRRM.js";const j={key:0,class:"text-red-500 text-sm"},H={__name:"SubTopicDetailUpsert",setup($){const p=B();O();const u=localStorage.getItem("id"),a=k({topic_id:0,subtopic:"",competence:0,is_active:0}),r=k({}),d=localStorage.getItem("token"),f=b(""),c=b(""),y=b([]),D=async o=>{try{const e=await V.get(`https://gateway.berkompeten.com/api/admin/master/subtopic/detail?id=${o}`,{headers:{Authorization:`Bearer ${d}`}});Object.assign(a,e.data.data)}catch(e){console.error("Error fetching subtopic data:",e)}},E=async()=>{try{const o=await V.get("https://gateway.berkompeten.com/api/admin/master/topic/fetch",{headers:{Authorization:`Bearer ${d}`}});y.value=o.data.data.map(e=>({id:e.id,name:e.topic}))}catch(o){console.error("Error fetching sub topic options:",o)}};F(()=>a.competence,o=>{a.competence=parseFloat(o)});const M=async()=>{try{const o="https://gateway.berkompeten.com/api/admin/master/subtopic/upsert",e="post";console.log("FORM DATA: ",a),await V({method:e,url:o,data:a,headers:{Authorization:`Bearer ${d}`}}),f.value="Sub topic saved successfully!",setTimeout(()=>{w(),p.push("/subtopic-management")},2e3)}catch(o){console.error("Error submitting form:",o),o.response&&o.response.data?o.response.status===500?c.value=o.response.data.message||"An error occurred while saving. Please try again.":o.response.data.error?(Object.assign(r,o.response.data.message),console.log("ERROR: ",r)):c.value="An error occurred while saving. Please try again.":c.value="An error occurred while saving. Please try again."}},w=()=>{Object.assign(a,{topic_id:0,subtopic:"",competence:0,is_active:0})};return R(()=>{E(),u?D(u):localStorage.removeItem("id")}),(o,e)=>(m(),_(v,null,{default:s(()=>[t(l,{cols:"12"},{default:s(()=>[t(z,{title:"Sub Topic Details"},{default:s(()=>[t(A,null,{default:s(()=>[t(L,{onSubmit:I(M,["prevent"])},{default:s(()=>[t(v,null,{default:s(()=>[t(l,{cols:"12"},{default:s(()=>[t(N,{modelValue:a.topic_id,"onUpdate:modelValue":e[0]||(e[0]=i=>a.topic_id=i),"error-messages":r.topic_id,label:"Topic List",items:n(y),placeholder:"Select Topic List","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),t(l,{cols:"12"},{default:s(()=>[t(T,{modelValue:a.subtopic,"onUpdate:modelValue":e[1]||(e[1]=i=>a.subtopic=i),"error-messages":r.subtopic,label:"Sub Topic"},null,8,["modelValue","error-messages"])]),_:1}),t(l,{cols:"12"},{default:s(()=>[t(T,{modelValue:a.competence,"onUpdate:modelValue":e[2]||(e[2]=i=>a.competence=i),"error-messages":r.competence,type:"number",step:"0.01",label:"Competence"},null,8,["modelValue","error-messages"])]),_:1}),t(l,{cols:"12"},{default:s(()=>[t(P,{color:"#0080ff",modelValue:a.is_active,"onUpdate:modelValue":e[3]||(e[3]=i=>a.is_active=i),"error-messages":r.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),r.image_url?(m(),U("div",j)):h("",!0)]),_:1}),t(l,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:s(()=>[t(S,{type:"submit",color:"#0080ff"},{default:s(()=>[g("Save")]),_:1}),t(S,{onClick:w,color:"secondary",variant:"outlined"},{default:s(()=>[g("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(A,null,{default:s(()=>[n(f)?(m(),_(C,{key:0,type:"success",dismissible:"","onClick:close":e[4]||(e[4]=i=>f.value="")},{default:s(()=>[g(x(n(f)),1)]),_:1})):h("",!0),n(c)?(m(),_(C,{key:1,type:"error",dismissible:"","onClick:close":e[5]||(e[5]=i=>c.value="")},{default:s(()=>[g(x(n(c)),1)]),_:1})):h("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},de={__name:"subtopic-detail",setup($){const p=localStorage.getItem("token"),u=b(null),a=B();return R(async()=>{if(p)try{const r=await V.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${p}`}});u.value=r.data}catch(r){r.response&&r.response.status===401&&a.push("/login")}else a.push("/login")}),(r,d)=>(m(),_(v,{class:"match-height"},{default:s(()=>[t(l,{cols:"12",md:"12"},{default:s(()=>[t(H)]),_:1})]),_:1}))}};export{de as default};
