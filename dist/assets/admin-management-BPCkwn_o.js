import{a as V}from"./VGrid-H4nAnDsn.js";import{_ as L,h as A,r,P as T,i as S,o as u,c as x,d as l,w as o,b as i,a,a2 as v,f as C,t as c,L as y,F as M,j as z,V as w,R as F,S as R}from"./index-AryBdys7.js";import{V as E}from"./VCardTitle-gQEIOlk7.js";import{V as j}from"./VTextField-ZuzApsZG.js";import{V as I}from"./VAlert-Dclja9nK.js";import{V as U,a as q,b as G}from"./VCardText-Ccz8IcNf.js";import{V as H}from"./VTable-ClaSuRDA.js";import"./forwardRefs-BgKS6qNZ.js";import"./index-DYhDWbac.js";import"./VInput-0JT9cSES.js";import"./easing-DY7PVvcf.js";const J=m=>(F("data-v-ed99c40a"),m=m(),R(),m),K={class:"table-header"},O={class:"table-container"},Q=J(()=>a("thead",null,[a("tr",null,[a("th",null,"ID"),a("th",null,"Name"),a("th",null,"Email"),a("th",null,"Is Active"),a("th",null,"Created Date"),a("th",null,"Actions")])],-1)),W={key:0},X={class:"pagination"},Y={__name:"AdminList",setup(m){const p=A(),h=localStorage.getItem("token"),_=r([]),s=r("");r(null),r([]);const n=r({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});r(!1),r(null);const k=r(""),g=r(""),f=async(d=1,t="")=>{try{let e=`https://gateway.berkompeten.com/api/admin/master/admin?page=${d}`;t&&(e+=`&search=${t.toLowerCase()}`);const b=await V.get(e,{headers:{Authorization:`Bearer ${h}`}});_.value=b.data.data.data,n.value=b.data.data}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),p.push("/login"))}};T([s],([d])=>{f(1,d)});const $=()=>{n.value.next_page_url&&f(n.value.current_page+1,s.value)},B=()=>{n.value.prev_page_url&&f(n.value.current_page-1,s.value)},D=()=>{localStorage.removeItem("id"),p.push("/admin/detail")},P=d=>{localStorage.setItem("id",d),p.push("/admin/detail")},N=async d=>{try{const t=await V.delete(`https://gateway.berkompeten.com/api/admin/master/admin?id=${d}`,{headers:{Authorization:`Bearer ${h}`}});k.value=t.data.message,f(n.value.current_page)}catch(t){console.log("err: ",t),t.response&&t.response.data?g.value=t.response.data.message||"An error occurred while deleting. Please try again.":g.value="An error occurred while deleting. Please try again."}};return S(()=>{f()}),(d,t)=>(u(),x("div",null,[l(E,{class:"mb-4"},{default:o(()=>[i("Admin Management")]),_:1}),a("div",K,[l(j,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),l(v,{color:"#0080ff",class:"mx-1",onClick:D},{default:o(()=>[i("Create")]),_:1})]),l(U,null,{default:o(()=>[k.value?(u(),C(I,{key:0,type:"success",dismissible:"","onClick:close":t[1]||(t[1]=e=>k.value="")},{default:o(()=>[i(c(k.value),1)]),_:1})):y("",!0),g.value?(u(),C(I,{key:1,type:"error",dismissible:"","onClick:close":t[2]||(t[2]=e=>g.value="")},{default:o(()=>[i(c(g.value),1)]),_:1})):y("",!0)]),_:1}),a("div",O,[l(H,{"fixed-header":""},{default:o(()=>[Q,a("tbody",null,[(u(!0),x(M,null,z(_.value,e=>(u(),x("tr",{key:e.id},[a("td",null,c(e.id),1),a("td",null,c(e.name),1),a("td",null,c(e.email),1),a("td",null,c(e.is_active),1),a("td",null,c(e.created_date),1),a("td",null,[e.is_superadmin?(u(),x("div",W,[l(v,{icon:"",onClick:b=>P(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:o(()=>[l(w,{style:{color:"orange"}},{default:o(()=>[i("ri-edit-line")]),_:1})]),_:2},1032,["onClick"]),l(v,{icon:"",onClick:b=>N(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:o(()=>[l(w,{style:{color:"red"}},{default:o(()=>[i("ri-delete-bin-line")]),_:1})]),_:2},1032,["onClick"])])):y("",!0)])]))),128))])]),_:1})]),a("div",X,[l(v,{onClick:B,disabled:!n.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:o(()=>[i("Previous")]),_:1},8,["disabled"]),l(v,{onClick:$,disabled:!n.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:o(()=>[i("Next")]),_:1},8,["disabled"])])]))}},Z=L(Y,[["__scopeId","data-v-ed99c40a"]]),ue={__name:"admin-management",setup(m){const p=localStorage.getItem("token"),h=r(null),_=A();return S(async()=>{if(p)try{const s=await V.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${p}`}});h.value=s.data}catch(s){s.response&&s.response.status===401&&_.push("/login")}else _.push("/login")}),(s,n)=>(u(),C(q,{class:"match-height"},{default:o(()=>[l(G,{cols:"12",md:"12"},{default:o(()=>[l(Z)]),_:1})]),_:1}))}};export{ue as default};