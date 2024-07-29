import{_ as k,u as x,M as g,ah as M,f as _,g as T,z as C,a0 as P,c as p,d as a,w as s,o as c,a as m,H as R,ai as I,a1 as N,b as S,t as w,J as V,Q as B,R as E}from"./index-D7Nu8G_N.js";import{l as U}from"./berkompeten_logo-eijgBe6e.js";import{a as q,b as A}from"./auth-v1-mask-light-Dw7KYw8D.js";import{a as H}from"./VGrid-4KGuE3NF.js";import{V as L,b as j}from"./VCard-CvQrjiQ6.js";import{V as v,a as D,b as d}from"./VCardText-DWEiCRui.js";import{V as F}from"./VForm-CMXpPfGS.js";import{V as i}from"./VTextField-BrT_NraW.js";import"./VCardTitle-CsO794Id.js";import"./VAvatar-BJZ7P79q.js";import"./VImg-GIizpo8G.js";import"./index-DzP5K4c9.js";import"./forwardRefs-C40N3eV6.js";const b=n=>(B("data-v-348aab2b"),n=n(),E(),n),z={class:"auth-wrapper d-flex align-center justify-center pa-4"},J={class:"d-flex"},Q=["innerHTML"],G=b(()=>m("h5",{class:"text-h5 font-weight-semibold mb-1"},"Reset Password",-1)),K=b(()=>m("p",{class:"mb-0"},"Enter your new password",-1)),O={key:0,class:"mt-2 text-danger",style:{color:"#ff5252"}},W={key:1,class:"mt-2 text-success"},X={__name:"reset-password",setup(n){x();const f=g(),e=M({email:"",token:"",password:"",password_confirmation:""}),r=_(null),u=_(null);T(()=>{e.email=f.query.email||"",e.token=f.query.token||""});const y=async()=>{try{if(e.password===""||e.password_confirmation===""){r.value="All fields are required";return}const l=await H.post("https://gateway.berkompeten.com/api/reset-password",{email:e.email,token:e.token,password:e.password,password_confirmation:e.password_confirmation});u.value=l.data.message,r.value=null}catch(l){l.response&&l.response.data?r.value=l.response.data.message||"An error occurred":r.value="An unexpected error occurred",u.value=null}},h=C();return P(()=>h.global.name.value==="light"?q:A),(l,o)=>(c(),p("div",z,[a(L,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:s(()=>[a(j,{class:"justify-center"},{prepend:s(()=>[m("div",J,[m("div",{innerHTML:R(U)},null,8,Q)])]),_:1}),a(v,{class:"pt-2"},{default:s(()=>[G,K]),_:1}),a(v,null,{default:s(()=>[a(F,{onSubmit:I(y,["prevent"])},{default:s(()=>[a(D,null,{default:s(()=>[a(d,{cols:"12"},{default:s(()=>[a(i,{modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=t=>e.email=t),label:"Email",type:"email",readonly:""},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:s(()=>[a(i,{modelValue:e.token,"onUpdate:modelValue":o[1]||(o[1]=t=>e.token=t),label:"Token",type:"text",readonly:""},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:s(()=>[a(i,{modelValue:e.password,"onUpdate:modelValue":o[2]||(o[2]=t=>e.password=t),label:"New Password",type:"password"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:s(()=>[a(i,{modelValue:e.password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=t=>e.password_confirmation=t),label:"Confirm Password",type:"password"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:s(()=>[a(N,{block:"",type:"submit",color:"#0080ff"},{default:s(()=>[S("Reset Password")]),_:1}),r.value?(c(),p("div",O,w(r.value),1)):V("",!0),u.value?(c(),p("div",W,w(u.value),1)):V("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}},ie=k(X,[["__scopeId","data-v-348aab2b"]]);export{ie as default};
