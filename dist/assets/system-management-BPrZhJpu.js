import{a as x}from"./VGrid-H4nAnDsn.js";import{_ as L,h as I,r,P as N,i as $,o as p,c as b,d as o,w as s,b as d,a,a2 as v,f as V,t as u,L as C,F as M,j as z,V as w,R as F,S as R}from"./index-AryBdys7.js";import{V as j}from"./VCardTitle-gQEIOlk7.js";import{V as E}from"./VTextField-ZuzApsZG.js";import{V as S}from"./VAlert-Dclja9nK.js";import{V as U,a as q,b as G}from"./VCardText-Ccz8IcNf.js";import{V as H}from"./VTable-ClaSuRDA.js";import"./forwardRefs-BgKS6qNZ.js";import"./index-DYhDWbac.js";import"./VInput-0JT9cSES.js";import"./easing-DY7PVvcf.js";const J=m=>(F("data-v-92aadaec"),m=m(),R(),m),K={class:"table-header"},O={class:"table-container"},Q=J(()=>a("thead",null,[a("tr",null,[a("th",null,"ID"),a("th",null,"Topic"),a("th",null,"Is Active"),a("th",null,"Created Date"),a("th",null,"Actions")])],-1)),W={class:"pagination"},X={__name:"SystemList",setup(m){const i=I(),h=localStorage.getItem("token"),_=r([]),l=r("");r(null),r([]);const n=r({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});r(!1),r(null);const y=r(""),g=r(""),f=async(c=1,t="")=>{try{let e=`https://gateway.berkompeten.com/api/admin/master/system?page=${c}`;t&&(e+=`&search=${t.toLowerCase()}`);const k=await x.get(e,{headers:{Authorization:`Bearer ${h}`}});_.value=k.data.data.data,n.value=k.data.data}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),i.push("/login"))}};N([l],([c])=>{f(1,c)});const A=()=>{n.value.next_page_url&&f(n.value.current_page+1,l.value)},B=()=>{n.value.prev_page_url&&f(n.value.current_page-1,l.value)},D=()=>{localStorage.removeItem("id"),i.push("/system/detail")},P=c=>{localStorage.setItem("id",c),i.push("/system/detail")},T=async c=>{try{const t=await x.delete(`https://gateway.berkompeten.com/api/admin/master/system?id=${c}`,{headers:{Authorization:`Bearer ${h}`}});y.value=t.data.message,f(n.value.current_page)}catch(t){console.log("err: ",t),t.response&&t.response.data?g.value=t.response.data.message||"An error occurred while deleting. Please try again.":g.value="An error occurred while deleting. Please try again."}};return $(()=>{f()}),(c,t)=>(p(),b("div",null,[o(j,{class:"mb-4"},{default:s(()=>[d("System Management")]),_:1}),a("div",K,[o(E,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),o(v,{color:"#0080ff",class:"mx-1",onClick:D},{default:s(()=>[d("Create")]),_:1})]),o(U,null,{default:s(()=>[y.value?(p(),V(S,{key:0,type:"success",dismissible:"","onClick:close":t[1]||(t[1]=e=>y.value="")},{default:s(()=>[d(u(y.value),1)]),_:1})):C("",!0),g.value?(p(),V(S,{key:1,type:"error",dismissible:"","onClick:close":t[2]||(t[2]=e=>g.value="")},{default:s(()=>[d(u(g.value),1)]),_:1})):C("",!0)]),_:1}),a("div",O,[o(H,{"fixed-header":""},{default:s(()=>[Q,a("tbody",null,[(p(!0),b(M,null,z(_.value,e=>(p(),b("tr",{key:e.id},[a("td",null,u(e.id),1),a("td",null,u(e.topic),1),a("td",null,u(e.is_active),1),a("td",null,u(e.created_date),1),a("td",null,[a("div",null,[o(v,{icon:"",onClick:k=>P(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:s(()=>[o(w,{style:{color:"orange"}},{default:s(()=>[d("ri-edit-line")]),_:1})]),_:2},1032,["onClick"]),o(v,{icon:"",onClick:k=>T(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:s(()=>[o(w,{style:{color:"red"}},{default:s(()=>[d("ri-delete-bin-line")]),_:1})]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),a("div",W,[o(v,{onClick:B,disabled:!n.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:s(()=>[d("Previous")]),_:1},8,["disabled"]),o(v,{onClick:A,disabled:!n.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:s(()=>[d("Next")]),_:1},8,["disabled"])])]))}},Y=L(X,[["__scopeId","data-v-92aadaec"]]),ie={__name:"system-management",setup(m){const i=localStorage.getItem("token"),h=r(null),_=I();return $(async()=>{if(i)try{const l=await x.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${i}`}});h.value=l.data}catch(l){l.response&&l.response.status===401&&_.push("/login")}else _.push("/login")}),(l,n)=>(p(),V(q,{class:"match-height"},{default:s(()=>[o(G,{cols:"12",md:"12"},{default:s(()=>[o(Y)]),_:1})]),_:1}))}};export{ie as default};