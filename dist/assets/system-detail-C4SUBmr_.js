import{u as C,M as E,al as k,f as g,g as B,o as n,e as _,w as e,d as t,am as I,c as M,J as v,a1 as w,b as p,H as f,t as x}from"./index-ZfcOUqFe.js";import{a as h}from"./VGrid-DfNlf30I.js";import{b as c,V as S,a as V}from"./VCardText-CYzyVpOT.js";import{V as T}from"./VCard-ry5NTToz.js";import{V as O}from"./VForm-ZO7WpgU5.js";import{V as P}from"./VTextField-DMLAsWD6.js";import{V as j}from"./VSwitch-CQqPkzhH.js";import{V as A}from"./VAlert-B24_u475.js";import"./VCardTitle-FMAA5SMx.js";import"./VAvatar--9pECRuO.js";import"./VImg-CmDK9nYg.js";import"./index-9p2-Y4KR.js";import"./forwardRefs-9F2hGEjD.js";import"./VSelectionControl-BYlEbrso.js";const z={key:0,class:"text-red-500 text-sm"},F={__name:"SystemDetailUpsert",setup(R){const m=C();E();const u=localStorage.getItem("id"),r=k({topic:"",is_active:0}),a=k({}),y=localStorage.getItem("token"),d=g(""),l=g("");g([]);const $=async o=>{try{const s=await h.get(`https://gateway.berkompeten.com/api/admin/master/system/detail?id=${o}`,{headers:{Authorization:`Bearer ${y}`}});Object.assign(r,s.data.data)}catch(s){console.error("Error fetching system data:",s)}},D=async()=>{try{await h({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/system/upsert",data:r,headers:{Authorization:`Bearer ${y}`}}),d.value="System saved successfully!",setTimeout(()=>{b(),m.push("/system-management")},2e3)}catch(o){console.error("Error submitting form:",o),o.response&&o.response.data?o.response.status===500?l.value=o.response.data.message||"An error occurred while saving. Please try again.":o.response.data.error?(Object.assign(a,o.response.data.message),console.log("ERROR: ",a)):l.value="An error occurred while saving. Please try again.":l.value="An error occurred while saving. Please try again."}},b=()=>{Object.assign(r,{topic:"",is_active:0})};return B(()=>{u?$(u):localStorage.removeItem("id")}),(o,s)=>(n(),_(V,null,{default:e(()=>[t(c,{cols:"12"},{default:e(()=>[t(T,{title:"System Details"},{default:e(()=>[t(S,null,{default:e(()=>[t(O,{onSubmit:I(D,["prevent"])},{default:e(()=>[t(V,null,{default:e(()=>[t(c,{cols:"12"},{default:e(()=>[t(P,{modelValue:r.topic,"onUpdate:modelValue":s[0]||(s[0]=i=>r.topic=i),"error-messages":a.topic,label:"Topic"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:e(()=>[t(j,{color:"#0080ff",modelValue:r.is_active,"onUpdate:modelValue":s[1]||(s[1]=i=>r.is_active=i),"error-messages":a.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),a.image_url?(n(),M("div",z)):v("",!0)]),_:1}),t(c,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:e(()=>[t(w,{type:"submit",color:"#0080ff"},{default:e(()=>[p("Save")]),_:1}),t(w,{onClick:b,color:"secondary",variant:"outlined"},{default:e(()=>[p("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(S,null,{default:e(()=>[f(d)?(n(),_(A,{key:0,type:"success",dismissible:"","onClick:close":s[2]||(s[2]=i=>d.value="")},{default:e(()=>[p(x(f(d)),1)]),_:1})):v("",!0),f(l)?(n(),_(A,{key:1,type:"error",dismissible:"","onClick:close":s[3]||(s[3]=i=>l.value="")},{default:e(()=>[p(x(f(l)),1)]),_:1})):v("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},te={__name:"system-detail",setup(R){const m=localStorage.getItem("token"),u=g(null),r=C();return B(async()=>{if(m)try{const a=await h.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${m}`}});u.value=a.data}catch(a){a.response&&a.response.status===401&&r.push("/login")}else r.push("/login")}),(a,y)=>(n(),_(V,{class:"match-height"},{default:e(()=>[t(c,{cols:"12",md:"12"},{default:e(()=>[t(F)]),_:1})]),_:1}))}};export{te as default};
