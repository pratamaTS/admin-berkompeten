import{u as C,M as I,ae as w,f as _,g as T,o as c,e as y,w as t,d as s,af as M,H as m,c as O,J as V,W as S,b as g,t as x}from"./index-BDrsxP1q.js";import{a as h}from"./VGrid-CSSzMaaB.js";import{b as n,a as A,V as z}from"./VTextField-CPU-l1ku.js";import{V as L}from"./VCard-D9kaTBSX.js";import{V as P}from"./VForm-GPoFlzfr.js";import{V as v}from"./VRow-iTGUAHtC.js";import{V as U}from"./VSelect-uTKNq9Fb.js";import{V as j}from"./VSwitch-CAnPfAjw.js";import{V as B}from"./VAlert-B72qt7dZ.js";import"./forwardRefs-C3HCJjqu.js";import"./index-CyOeB6Fv.js";import"./VAvatar-D4_RSSa4.js";import"./VImg-CcHyAXnu.js";import"./VMenu-BC6gY9m0.js";import"./ssrBoot-1haO9Llf.js";import"./VOverlay-C__J3Ob_.js";import"./lazy-DMPIjaJn.js";import"./VCheckboxBtn-A_hCDBSz.js";import"./VSelectionControl-D55fzav1.js";import"./VChip-DgAaibyC.js";const F={key:0,class:"text-red-500 text-sm"},N={__name:"TopicDetailUpsert",setup($){const u=C();I();const d=localStorage.getItem("id"),o=w({system_id:0,topic:"",is_active:0}),r=w({}),p=localStorage.getItem("token"),f=_(""),l=_(""),b=_([]),R=async a=>{try{const e=await h.get(`https://gateway.berkompeten.com/api/admin/master/topic/detail?id=${a}`,{headers:{Authorization:`Bearer ${p}`}});Object.assign(o,e.data.data)}catch(e){console.error("Error fetching topic data:",e)}},E=async()=>{try{const a=await h.get("https://gateway.berkompeten.com/api/admin/master/system/fetch",{headers:{Authorization:`Bearer ${p}`}});b.value=a.data.data.map(e=>({id:e.id,name:e.topic}))}catch(a){console.error("Error fetching system options:",a)}},D=async()=>{try{await h({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/topic/upsert",data:o,headers:{Authorization:`Bearer ${p}`}}),f.value="Topic saved successfully!",setTimeout(()=>{k(),u.push("/topic-management")},2e3)}catch(a){console.error("Error submitting form:",a),a.response&&a.response.data?a.response.status===500?l.value=a.response.data.message||"An error occurred while saving. Please try again.":a.response.data.error?(Object.assign(r,a.response.data.message),console.log("ERROR: ",r)):l.value="An error occurred while saving. Please try again.":l.value="An error occurred while saving. Please try again."}},k=()=>{Object.assign(o,{system_id:0,topic:"",is_active:0})};return T(()=>{E(),d?R(d):localStorage.removeItem("id")}),(a,e)=>(c(),y(v,null,{default:t(()=>[s(n,{cols:"12"},{default:t(()=>[s(L,{title:"Topic Details"},{default:t(()=>[s(A,null,{default:t(()=>[s(P,{onSubmit:M(D,["prevent"])},{default:t(()=>[s(v,null,{default:t(()=>[s(n,{cols:"12"},{default:t(()=>[s(U,{modelValue:o.system_id,"onUpdate:modelValue":e[0]||(e[0]=i=>o.system_id=i),"error-messages":r.system_id,label:"System List",items:m(b),placeholder:"Select System List","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),s(n,{cols:"12"},{default:t(()=>[s(z,{modelValue:o.topic,"onUpdate:modelValue":e[1]||(e[1]=i=>o.topic=i),"error-messages":r.topic,label:"Topic"},null,8,["modelValue","error-messages"])]),_:1}),s(n,{cols:"12"},{default:t(()=>[s(j,{color:"#0080ff",modelValue:o.is_active,"onUpdate:modelValue":e[2]||(e[2]=i=>o.is_active=i),"error-messages":r.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),r.image_url?(c(),O("div",F)):V("",!0)]),_:1}),s(n,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[s(S,{type:"submit",color:"#0080ff"},{default:t(()=>[g("Save")]),_:1}),s(S,{onClick:k,color:"secondary",variant:"outlined"},{default:t(()=>[g("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(A,null,{default:t(()=>[m(f)?(c(),y(B,{key:0,type:"success",dismissible:"","onClick:close":e[3]||(e[3]=i=>f.value="")},{default:t(()=>[g(x(m(f)),1)]),_:1})):V("",!0),m(l)?(c(),y(B,{key:1,type:"error",dismissible:"","onClick:close":e[4]||(e[4]=i=>l.value="")},{default:t(()=>[g(x(m(l)),1)]),_:1})):V("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},ce={__name:"topic-detail",setup($){const u=localStorage.getItem("token"),d=_(null),o=C();return T(async()=>{if(u)try{const r=await h.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${u}`}});d.value=r.data}catch(r){r.response&&r.response.status===401&&o.push("/login")}else o.push("/login")}),(r,p)=>(c(),y(v,{class:"match-height"},{default:t(()=>[s(n,{cols:"12",md:"12"},{default:t(()=>[s(N)]),_:1})]),_:1}))}};export{ce as default};