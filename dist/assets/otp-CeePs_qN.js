import{a as g}from"./VGrid-CSSzMaaB.js";import{u as b,f as n,g as S,o as s,e as d,w as t,d as o,H as a,S as B,J as c,Z as C,b as T,c as m,t as V}from"./index-De0cW8vH.js";import{V as h}from"./VCol-Dn84ANm3.js";import{V as I,b as M,a as k}from"./VForm-COAMR_Wg.js";import{V as y}from"./VRow-Ck8Nnqqw.js";import{V as N}from"./VTextField-B7mySahN.js";import"./forwardRefs-Cvn-j6Kf.js";import"./VImg-CJEcbLYz.js";const O={key:1,class:"mt-2 text-success"},R={key:2,class:"mt-2 text-danger",style:{color:"#ff5252"}},$={__name:"OtpVerification",setup(x){const u=b(),r=n(!1),p=n(""),i=n(""),l=n(""),f=localStorage.getItem("token");S(async()=>{try{const e=await g.get("https://gateway.berkompeten.com/api/student/change-password/status",{headers:{Authorization:`Bearer ${f}`}});r.value=e.data.data.otp_submitted}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),u.push("/login"))}});const v=async()=>{try{const e=await g.post("https://gateway.berkompeten.com/api/student/otp-verification",{otp:l},{headers:{Authorization:`Bearer ${f}`}});console.log("resp otp: ",e),p.value=e.data.message,u.push("/profile/security")}catch(e){console.error("reset otp:",e),i.value=e.response.data.message}};return(e,_)=>(s(),d(y,null,{default:t(()=>[o(h,{cols:"12"},{default:t(()=>[o(I,{title:"Otp"},{default:t(()=>[o(M,null,{default:t(()=>[a(r)==!0?(s(),d(k,{key:0},{default:t(()=>[o(y,null,{default:t(()=>[o(h,{cols:"12",md:"6"},{default:t(()=>[o(N,{modelValue:a(l),"onUpdate:modelValue":_[0]||(_[0]=w=>B(l)?l.value=w:null),label:"OTP",autocomplete:"on",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):c("",!0),o(k,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[a(r)==!0?(s(),d(C,{key:0,onClick:v},{default:t(()=>[T("Save changes")]),_:1})):c("",!0),a(p)?(s(),m("div",O,V(a(p)),1)):c("",!0),a(i)?(s(),m("div",R,V(a(i)),1)):c("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},U={__name:"otp",setup(x){return(u,r)=>(s(),m("div",null,[o($)]))}};export{U as default};
