import{u as C,M as I,am as w,f as _,g as T,o as c,e as y,w as t,d as s,an as M,H as m,c as O,J as V,a1 as S,b as g,t as x}from"./index-CokC2mfA.js";import{a as h}from"./VGrid-B9a-pGL5.js";import{b as n,V as A,a as v}from"./VCardText-DW4hcY7g.js";import{V as z}from"./VCard-DI1j0OlF.js";import{V as L}from"./VForm-BzAThomw.js";import{V as P}from"./VSelect-Cj8a9aAN.js";import{V as U}from"./VTextField-B66quWHk.js";import{V as j}from"./VSwitch-DTpWaNdE.js";import{V as B}from"./VAlert-Lt2LGhh_.js";import"./VCardTitle-CstqRpxX.js";import"./VAvatar-CYXK-J6H.js";import"./VImg-CpOBpd-e.js";import"./index-Cb_XTOA9.js";import"./forwardRefs-D73nERc7.js";import"./VList-a_KuEvFt.js";import"./ssrBoot-3-ZWv-fo.js";import"./VOverlay-BqcZVHKV.js";import"./lazy-BQs2d2M0.js";import"./VMenu-B9JIjcyJ.js";import"./VCheckboxBtn-C1YD2hgI.js";import"./VSelectionControl-CcNvkdCY.js";import"./VChip-D56JZ-ZQ.js";const F={key:0,class:"text-red-500 text-sm"},N={__name:"TopicDetailUpsert",setup($){const p=C();I();const u=localStorage.getItem("id"),a=w({system_id:0,topic:"",is_active:0}),r=w({}),d=localStorage.getItem("token"),f=_(""),l=_(""),b=_([]),R=async o=>{try{const e=await h.get(`https://gateway.berkompeten.com/api/admin/master/topic/detail?id=${o}`,{headers:{Authorization:`Bearer ${d}`}});Object.assign(a,e.data.data)}catch(e){console.error("Error fetching topic data:",e)}},E=async()=>{try{const o=await h.get("https://gateway.berkompeten.com/api/admin/master/system/fetch",{headers:{Authorization:`Bearer ${d}`}});b.value=o.data.data.map(e=>({id:e.id,name:e.topic}))}catch(o){console.error("Error fetching system options:",o)}},D=async()=>{try{await h({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/topic/upsert",data:a,headers:{Authorization:`Bearer ${d}`}}),f.value="Topic saved successfully!",setTimeout(()=>{k(),p.push("/topic-management")},2e3)}catch(o){console.error("Error submitting form:",o),o.response&&o.response.data?o.response.status===500?l.value=o.response.data.message||"An error occurred while saving. Please try again.":o.response.data.error?(Object.assign(r,o.response.data.message),console.log("ERROR: ",r)):l.value="An error occurred while saving. Please try again.":l.value="An error occurred while saving. Please try again."}},k=()=>{Object.assign(a,{system_id:0,topic:"",is_active:0})};return T(()=>{E(),u?R(u):localStorage.removeItem("id")}),(o,e)=>(c(),y(v,null,{default:t(()=>[s(n,{cols:"12"},{default:t(()=>[s(z,{title:"Topic Details"},{default:t(()=>[s(A,null,{default:t(()=>[s(L,{onSubmit:M(D,["prevent"])},{default:t(()=>[s(v,null,{default:t(()=>[s(n,{cols:"12"},{default:t(()=>[s(P,{modelValue:a.system_id,"onUpdate:modelValue":e[0]||(e[0]=i=>a.system_id=i),"error-messages":r.system_id,label:"System List",items:m(b),placeholder:"Select System List","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),s(n,{cols:"12"},{default:t(()=>[s(U,{modelValue:a.topic,"onUpdate:modelValue":e[1]||(e[1]=i=>a.topic=i),"error-messages":r.topic,label:"Topic"},null,8,["modelValue","error-messages"])]),_:1}),s(n,{cols:"12"},{default:t(()=>[s(j,{color:"#0080ff",modelValue:a.is_active,"onUpdate:modelValue":e[2]||(e[2]=i=>a.is_active=i),"error-messages":r.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),r.image_url?(c(),O("div",F)):V("",!0)]),_:1}),s(n,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[s(S,{type:"submit",color:"#0080ff"},{default:t(()=>[g("Save")]),_:1}),s(S,{onClick:k,color:"secondary",variant:"outlined"},{default:t(()=>[g("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(A,null,{default:t(()=>[m(f)?(c(),y(B,{key:0,type:"success",dismissible:"","onClick:close":e[3]||(e[3]=i=>f.value="")},{default:t(()=>[g(x(m(f)),1)]),_:1})):V("",!0),m(l)?(c(),y(B,{key:1,type:"error",dismissible:"","onClick:close":e[4]||(e[4]=i=>l.value="")},{default:t(()=>[g(x(m(l)),1)]),_:1})):V("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},ue={__name:"topic-detail",setup($){const p=localStorage.getItem("token"),u=_(null),a=C();return T(async()=>{if(p)try{const r=await h.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${p}`}});u.value=r.data}catch(r){r.response&&r.response.status===401&&a.push("/login")}else a.push("/login")}),(r,d)=>(c(),y(v,{class:"match-height"},{default:t(()=>[s(n,{cols:"12",md:"12"},{default:t(()=>[s(N)]),_:1})]),_:1}))}};export{ue as default};
