import{a as g}from"./VGrid-CSSzMaaB.js";import{u as S,f as n,g as b,o as s,e as d,w as t,d as o,H as a,S as B,J as c,Z as C,b as T,c as m,t as V}from"./index-DPEDR26h.js";import{V as h}from"./VCol-C23xuD4c.js";import{g as I,e as k,d as M}from"./VTextField-DCNpKg2D.js";import{V as N}from"./VForm-B0uUG2kg.js";import{V as y}from"./VRow-C6F8yCX9.js";import"./forwardRefs-BeqTK34e.js";import"./VImg-w7ApfuSw.js";const O={key:1,class:"mt-2 text-success"},R={key:2,class:"mt-2 text-danger",style:{color:"#ff5252"}},$={__name:"OtpVerification",setup(x){const u=S(),r=n(!1),p=n(""),i=n(""),l=n(""),f=localStorage.getItem("token");b(async()=>{try{const e=await g.get("https://gateway.berkompeten.com/api/student/change-password/status",{headers:{Authorization:`Bearer ${f}`}});r.value=e.data.data.otp_submitted}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),u.push("/login"))}});const v=async()=>{try{const e=await g.post("https://gateway.berkompeten.com/api/student/otp-verification",{otp:l},{headers:{Authorization:`Bearer ${f}`}});console.log("resp otp: ",e),p.value=e.data.message,u.push("/profile/security")}catch(e){console.error("reset otp:",e),i.value=e.response.data.message}};return(e,_)=>(s(),d(y,null,{default:t(()=>[o(h,{cols:"12"},{default:t(()=>[o(I,{title:"Otp"},{default:t(()=>[o(N,null,{default:t(()=>[a(r)==!0?(s(),d(k,{key:0},{default:t(()=>[o(y,null,{default:t(()=>[o(h,{cols:"12",md:"6"},{default:t(()=>[o(M,{modelValue:a(l),"onUpdate:modelValue":_[0]||(_[0]=w=>B(l)?l.value=w:null),label:"OTP",autocomplete:"on",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):c("",!0),o(k,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[a(r)==!0?(s(),d(C,{key:0,onClick:v},{default:t(()=>[T("Save changes")]),_:1})):c("",!0),a(p)?(s(),m("div",O,V(a(p)),1)):c("",!0),a(i)?(s(),m("div",R,V(a(i)),1)):c("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},U={__name:"otp",setup(x){return(u,r)=>(s(),m("div",null,[o($)]))}};export{U as default};