import{h as C,O as q,al as b,r as h,i as B,o as n,f as g,w as e,d as t,am as D,c as E,L as v,a2 as w,b as p,u as f,t as x}from"./index-AryBdys7.js";import{a as k}from"./VGrid-H4nAnDsn.js";import{b as c,V as S,a as V}from"./VCardText-Ccz8IcNf.js";import{V as I}from"./VCard-DRv5nRi-.js";import{V as O}from"./VForm-2GwK3Akv.js";import{V as M}from"./VTextField-ZuzApsZG.js";import{V as N}from"./VSwitch-BK7-Uxyt.js";import{V as A}from"./VAlert-Dclja9nK.js";import"./VCardTitle-gQEIOlk7.js";import"./VAvatar-Bk7bSWw5.js";import"./VImg-BnnpGyml.js";import"./index-DYhDWbac.js";import"./VInput-0JT9cSES.js";import"./forwardRefs-BgKS6qNZ.js";import"./easing-DY7PVvcf.js";import"./VSelectionControl-COivTBzk.js";const Q={key:0,class:"text-red-500 text-sm"},T={__name:"QuestionPacketDetailUpsert",setup(P){const u=C();q();const m=localStorage.getItem("id"),s=b({name:"",is_active:0}),r=b({}),_=localStorage.getItem("token"),d=h(""),l=h(""),R=async o=>{try{const a=await k.get(`https://gateway.berkompeten.com/api/admin/master/question-packet/detail?id=${o}`,{headers:{Authorization:`Bearer ${_}`}});Object.assign(s,a.data.data),o&&(s.old_name=a.data.data.name)}catch(a){console.error("Error fetching question packet data:",a)}},$=async()=>{s.is_active=s.is_active?1:0;try{await k({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/question-packet/upsert",data:s,headers:{Authorization:`Bearer ${_}`}}),d.value="Question packet saved successfully!",setTimeout(()=>{y(),u.push("/question-packet-management")},2e3)}catch(o){console.error("Error submitting form:",o),o.response&&o.response.data?o.response.status===500?l.value=o.response.data.message||"An error occurred while saving. Please try again.":o.response.data.error?(Object.assign(r,o.response.data.message),console.log("ERROR: ",r)):l.value="An error occurred while saving. Please try again.":l.value="An error occurred while saving. Please try again."}},y=()=>{Object.assign(s,{name:"",is_active:0})};return B(()=>{m?R(m):localStorage.removeItem("id")}),(o,a)=>(n(),g(V,null,{default:e(()=>[t(c,{cols:"12"},{default:e(()=>[t(I,{title:"Question Packet Details"},{default:e(()=>[t(S,null,{default:e(()=>[t(O,{onSubmit:D($,["prevent"])},{default:e(()=>[t(V,null,{default:e(()=>[t(c,{cols:"12"},{default:e(()=>[t(M,{modelValue:s.name,"onUpdate:modelValue":a[0]||(a[0]=i=>s.name=i),"error-messages":r.name,label:"Question Packet Name"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:e(()=>[t(N,{color:"#0080ff",modelValue:s.is_active,"onUpdate:modelValue":a[1]||(a[1]=i=>s.is_active=i),"error-messages":r.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),r.image_url?(n(),E("div",Q)):v("",!0)]),_:1}),t(c,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:e(()=>[t(w,{type:"submit",color:"#0080ff"},{default:e(()=>[p("Save")]),_:1}),t(w,{onClick:y,color:"secondary",variant:"outlined"},{default:e(()=>[p("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(S,null,{default:e(()=>[f(d)?(n(),g(A,{key:0,type:"success",dismissible:"","onClick:close":a[2]||(a[2]=i=>d.value="")},{default:e(()=>[p(x(f(d)),1)]),_:1})):v("",!0),f(l)?(n(),g(A,{key:1,type:"error",dismissible:"","onClick:close":a[3]||(a[3]=i=>l.value="")},{default:e(()=>[p(x(f(l)),1)]),_:1})):v("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},se={__name:"question-packet-detail",setup(P){const u=localStorage.getItem("token"),m=h(null),s=C();return B(async()=>{if(u)try{const r=await k.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${u}`}});m.value=r.data}catch(r){r.response&&r.response.status===401&&s.push("/login")}else s.push("/login")}),(r,_)=>(n(),g(V,{class:"match-height"},{default:e(()=>[t(c,{cols:"12",md:"12"},{default:e(()=>[t(T)]),_:1})]),_:1}))}};export{se as default};