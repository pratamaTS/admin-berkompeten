import{a as I}from"./VGrid-DnO04gSH.js";import{_ as L,u as $,f as n,N as M,g as F,o as p,c as w,a as s,d as l,w as t,b as u,a1 as V,e as h,t as m,J as y,F as P,a2 as z,Q as R,R as E}from"./index-BBcl78-p.js";import{V as j}from"./VTextField-BamGcXK4.js";import{V as C}from"./VAlert-knmClwcs.js";import{V as U,a as J,b as O}from"./VCardText-DbTF5BIu.js";import{V as Q}from"./VTable-v0KGVnBi.js";import{V as G,a as H,b as K}from"./VCard-rzuixeDo.js";import{V as W,a as X}from"./VFileInput-Awi01qyI.js";import{V as Y}from"./VSpacer-DgbYndEI.js";import"./forwardRefs-Bpvoceak.js";import"./index-UdQ1TRXr.js";import"./VAvatar-DEJi0zCo.js";import"./VImg-DMAHUUgE.js";import"./VOverlay-feEda5nM.js";import"./lazy-BatdYb-9.js";import"./VChip-Cxn3ODfM.js";const Z=v=>(R("data-v-2be77732"),v=v(),E(),v),q={class:"table-header"},ee={class:"table-container"},ae=Z(()=>s("thead",null,[s("tr",null,[s("th",null,"File Name"),s("th",null,"URL"),s("th",null,"Created At")])],-1)),te={class:"pagination"},le={__name:"MediaList",setup(v){const k=$(),x=localStorage.getItem("token"),_=n([]),r=n("");n(null),n([]);const i=n({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0}),b=n(!1),f=n(null),d=n(""),o=n(""),g=async(c=1,e="")=>{try{let a=`https://gateway.berkompeten.com/api/admin/master/media?page=${c}`;e&&(a+=`&search=${e.toLowerCase()}`);const T=await I.get(a,{headers:{Authorization:`Bearer ${x}`}});_.value=T.data.data.data,i.value=T.data.data}catch(a){console.log("err: ",a),a.response&&a.response.status===401&&(localStorage.removeItem("token"),k.push("/login"))}};M([r],([c])=>{g(1,c)});const B=()=>{i.value.next_page_url&&g(i.value.current_page+1,r.value)},N=()=>{i.value.prev_page_url&&g(i.value.current_page-1,r.value)},D=()=>{localStorage.removeItem("question_id"),b.value=!0},S=()=>{b.value=!1,f.value=null,d.value="",o.value=""},A=async()=>{if(!f.value){o.value="Please upload a file",setTimeout(()=>{o.value=""},5e3);return}const c=new FormData;c.append("image",f.value[0]),console.log("FILE: ",f.value[0]);try{const e=await I.post("https://gateway.berkompeten.com/api/admin/master/upload-image",c,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${x}`}});d.value="Upload image completed successfully",setTimeout(()=>{S(),g(i.value.current_page)},2e3)}catch(e){e.response&&e.response.status===422?(o.value="Validation error: "+JSON.stringify(e.response.data.message.file[0]),setTimeout(()=>{o.value=""},5e3)):(o.value="Error upload image: "+e.response.data.message,setTimeout(()=>{o.value=""},5e3))}};return F(()=>{g()}),(c,e)=>(p(),w("div",null,[s("div",q,[l(j,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),l(V,{color:"#0080ff",class:"mx-1",onClick:D},{default:t(()=>[u("Upload")]),_:1})]),l(U,null,{default:t(()=>[d.value?(p(),h(C,{key:0,type:"success",dismissible:"","onClick:close":e[1]||(e[1]=a=>d.value="")},{default:t(()=>[u(m(d.value),1)]),_:1})):y("",!0),o.value?(p(),h(C,{key:1,type:"error",dismissible:"","onClick:close":e[2]||(e[2]=a=>o.value="")},{default:t(()=>[u(m(o.value),1)]),_:1})):y("",!0)]),_:1}),s("div",ee,[l(Q,{"fixed-header":""},{default:t(()=>[ae,s("tbody",null,[(p(!0),w(P,null,z(_.value,a=>(p(),w("tr",{key:a.id},[s("td",null,m(a.filename),1),s("td",null,m(a.url),1),s("td",null,m(a.created_at),1),u("az ")]))),128))])]),_:1})]),s("div",te,[l(V,{onClick:N,disabled:!i.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[u("Previous")]),_:1},8,["disabled"]),l(V,{onClick:B,disabled:!i.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[u("Next")]),_:1},8,["disabled"])]),l(X,{modelValue:b.value,"onUpdate:modelValue":e[6]||(e[6]=a=>b.value=a),"max-width":"500px"},{default:t(()=>[l(G,null,{default:t(()=>[l(H,{class:"text-h5"},{default:t(()=>[u("Upload Image")]),_:1}),l(U,null,{default:t(()=>[l(W,{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=a=>f.value=a),label:"Upload File",accept:".jpg,.jpeg,.png","prepend-icon":"mdi-upload"},null,8,["modelValue"])]),_:1}),l(K,null,{default:t(()=>[l(Y),l(V,{color:"blue darken-1",text:"",onClick:S},{default:t(()=>[u("Cancel")]),_:1}),l(V,{color:"#0080ff",text:"",onClick:A},{default:t(()=>[u("Upload")]),_:1})]),_:1}),l(U,null,{default:t(()=>[d.value?(p(),h(C,{key:0,type:"success",dismissible:"","onClick:close":e[4]||(e[4]=a=>d.value="")},{default:t(()=>[u(m(d.value),1)]),_:1})):y("",!0),o.value?(p(),h(C,{key:1,type:"error",dismissible:"","onClick:close":e[5]||(e[5]=a=>o.value="")},{default:t(()=>[u(m(o.value),1)]),_:1})):y("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},oe=L(le,[["__scopeId","data-v-2be77732"]]),xe={__name:"media-management",setup(v){const k=localStorage.getItem("token"),x=n(null),_=$();return F(async()=>{if(k)try{const r=await I.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${k}`}});x.value=r.data}catch(r){r.response&&r.response.status===401&&_.push("/login")}else _.push("/login")}),(r,i)=>(p(),h(J,{class:"match-height"},{default:t(()=>[l(O,{cols:"12",md:"12"},{default:t(()=>[l(oe)]),_:1})]),_:1}))}};export{xe as default};
