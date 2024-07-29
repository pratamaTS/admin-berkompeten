import{a as y}from"./VGrid-Bx3jIM7Z.js";import{_ as T,u as I,f as r,N as E,g as $,o as p,c as x,d as o,w as s,b as c,a,a1 as v,e as V,t as i,J as C,F as L,a2 as M,V as w,Q as z,R as F}from"./index-CGJF5qjT.js";import{V as R}from"./VCardTitle-Q_din3Ee.js";import{V as J}from"./VTextField-BZk4YyTq.js";import{V as S}from"./VAlert-vP6LZXE9.js";import{V as Q,a as U,b as j}from"./VCardText-DZwg6GDd.js";import{V as q}from"./VTable-CvGf44Z5.js";import"./forwardRefs-DIq3cHIV.js";import"./index-DtH3vwdd.js";const G=m=>(z("data-v-6852e41d"),m=m(),F(),m),H={class:"table-header"},K={class:"table-container"},O=G(()=>a("thead",null,[a("tr",null,[a("th",null,"ID"),a("th",null,"Name"),a("th",null,"Is Active"),a("th",null,"Created Date"),a("th",null,"Actions")])],-1)),W={class:"pagination"},X={__name:"EducationalStatusList",setup(m){const d=I(),h=localStorage.getItem("token"),_=r([]),l=r("");r(null),r([]);const n=r({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});r(!1),r(null);const k=r(""),g=r(""),f=async(u=1,t="")=>{try{let e=`https://gateway.berkompeten.com/api/admin/master/educational-status?page=${u}`;t&&(e+=`&search=${t.toLowerCase()}`);const b=await y.get(e,{headers:{Authorization:`Bearer ${h}`}});_.value=b.data.data.data,n.value=b.data.data}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),d.push("/login"))}};E([l],([u])=>{f(1,u)});const A=()=>{n.value.next_page_url&&f(n.value.current_page+1,l.value)},B=()=>{n.value.prev_page_url&&f(n.value.current_page-1,l.value)},D=()=>{localStorage.removeItem("id"),d.push("/educational-status/detail")},N=u=>{localStorage.setItem("id",u),d.push("/educational-status/detail")},P=async u=>{try{const t=await y.delete(`https://gateway.berkompeten.com/api/admin/master/educational-status?id=${u}`,{headers:{Authorization:`Bearer ${h}`}});k.value=t.data.message,f(n.value.current_page)}catch(t){console.log("err: ",t),t.response&&t.response.data?g.value=t.response.data.message||"An error occurred while deleting. Please try again.":g.value="An error occurred while deleting. Please try again."}};return $(()=>{f()}),(u,t)=>(p(),x("div",null,[o(R,{class:"mb-4"},{default:s(()=>[c("Educational Status Management")]),_:1}),a("div",H,[o(J,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),o(v,{color:"#0080ff",class:"mx-1",onClick:D},{default:s(()=>[c("Create")]),_:1})]),o(Q,null,{default:s(()=>[k.value?(p(),V(S,{key:0,type:"success",dismissible:"","onClick:close":t[1]||(t[1]=e=>k.value="")},{default:s(()=>[c(i(k.value),1)]),_:1})):C("",!0),g.value?(p(),V(S,{key:1,type:"error",dismissible:"","onClick:close":t[2]||(t[2]=e=>g.value="")},{default:s(()=>[c(i(g.value),1)]),_:1})):C("",!0)]),_:1}),a("div",K,[o(q,{"fixed-header":""},{default:s(()=>[O,a("tbody",null,[(p(!0),x(L,null,M(_.value,e=>(p(),x("tr",{key:e.id},[a("td",null,i(e.id),1),a("td",null,i(e.name),1),a("td",null,i(e.is_active),1),a("td",null,i(e.created_date),1),a("td",null,[a("div",null,[o(v,{icon:"",onClick:b=>N(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:s(()=>[o(w,{style:{color:"orange"}},{default:s(()=>[c("ri-edit-line")]),_:1})]),_:2},1032,["onClick"]),o(v,{icon:"",onClick:b=>P(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:s(()=>[o(w,{style:{color:"red"}},{default:s(()=>[c("ri-delete-bin-line")]),_:1})]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),a("div",W,[o(v,{onClick:B,disabled:!n.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:s(()=>[c("Previous")]),_:1},8,["disabled"]),o(v,{onClick:A,disabled:!n.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:s(()=>[c("Next")]),_:1},8,["disabled"])])]))}},Y=T(X,[["__scopeId","data-v-6852e41d"]]),ue={__name:"educational-status-management",setup(m){const d=localStorage.getItem("token"),h=r(null),_=I();return $(async()=>{if(d)try{const l=await y.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${d}`}});h.value=l.data}catch(l){l.response&&l.response.status===401&&_.push("/login")}else _.push("/login")}),(l,n)=>(p(),V(U,{class:"match-height"},{default:s(()=>[o(j,{cols:"12",md:"12"},{default:s(()=>[o(Y)]),_:1})]),_:1}))}};export{ue as default};
