import{u as A,M as q,ah as b,f as k,g as B,o as i,e as g,w as e,d as t,ai as D,c as E,J as h,W as w,b as p,H as f,t as x}from"./index-B4j2Yefz.js";import{a as V}from"./VGrid-CSSzMaaB.js";import{b as c,a as S,V as I}from"./VTextField-jPXgiNlO.js";import{V as M}from"./VCard-Ds_wUGJR.js";import{V as N}from"./VForm-oLvxhrkx.js";import{V as v}from"./VRow-0kInVaLP.js";import{V as O}from"./VSwitch-By9cH-tB.js";import{V as C}from"./VAlert-WqkAkPf2.js";import"./forwardRefs-D8BMGJvF.js";import"./index-C8w0GLow.js";import"./VAvatar-DiaRAqhm.js";import"./VImg-D4U87yj6.js";import"./VSelectionControl-d1S99i4D.js";const Q={key:0,class:"text-red-500 text-sm"},T={__name:"QuestionPacketDetailUpsert",setup(R){const u=A();q();const m=localStorage.getItem("id"),s=b({name:"",is_active:0}),o=b({}),_=localStorage.getItem("token"),d=k(""),l=k(""),$=async r=>{try{const a=await V.get(`https://gateway.berkompeten.com/api/admin/master/question-packet/detail?id=${r}`,{headers:{Authorization:`Bearer ${_}`}});Object.assign(s,a.data.data),r&&(s.old_name=a.data.data.name)}catch(a){console.error("Error fetching question data:",a)}},P=async()=>{try{await V({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/question-packet/upsert",data:s,headers:{Authorization:`Bearer ${_}`}}),d.value="Question packet saved successfully!",setTimeout(()=>{y(),u.push("/question-packet-management")},2e3)}catch(r){console.error("Error submitting form:",r),r.response&&r.response.data&&r.response.data.error?(Object.assign(o,r.response.data.message),console.log("ERROR: ",o)):l.value="An error occurred while saving. Please try again."}},y=()=>{Object.assign(s,{name:"",is_active:0})};return B(()=>{m?$(m):localStorage.removeItem("id")}),(r,a)=>(i(),g(v,null,{default:e(()=>[t(c,{cols:"12"},{default:e(()=>[t(M,{title:"Question Packet Details"},{default:e(()=>[t(S,null,{default:e(()=>[t(N,{onSubmit:D(P,["prevent"])},{default:e(()=>[t(v,null,{default:e(()=>[t(c,{cols:"12"},{default:e(()=>[t(I,{modelValue:s.name,"onUpdate:modelValue":a[0]||(a[0]=n=>s.name=n),"error-messages":o.name,label:"Question Packet Name"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:e(()=>[t(O,{color:"#0080ff",modelValue:s.is_active,"onUpdate:modelValue":a[1]||(a[1]=n=>s.is_active=n),"error-messages":o.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),o.image_url?(i(),E("div",Q)):h("",!0)]),_:1}),t(c,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:e(()=>[t(w,{type:"submit",color:"#0080ff"},{default:e(()=>[p("Save")]),_:1}),t(w,{onClick:y,color:"secondary",variant:"outlined"},{default:e(()=>[p("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(S,null,{default:e(()=>[f(d)?(i(),g(C,{key:0,type:"success",dismissible:"","onClick:close":a[2]||(a[2]=n=>d.value="")},{default:e(()=>[p(x(f(d)),1)]),_:1})):h("",!0),f(l)?(i(),g(C,{key:1,type:"error",dismissible:"","onClick:close":a[3]||(a[3]=n=>l.value="")},{default:e(()=>[p(x(f(l)),1)]),_:1})):h("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},ee={__name:"question-packet-detail",setup(R){const u=localStorage.getItem("token"),m=k(null),s=A();return B(async()=>{if(u)try{const o=await V.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${u}`}});m.value=o.data}catch(o){o.response&&o.response.status===401&&s.push("/login")}else s.push("/login")}),(o,_)=>(i(),g(v,{class:"match-height"},{default:e(()=>[t(c,{cols:"12",md:"12"},{default:e(()=>[t(T)]),_:1})]),_:1}))}};export{ee as default};
