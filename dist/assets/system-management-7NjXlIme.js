import{a as x}from"./VGrid-CqE69c7c.js";import{_ as T,u as I,f as r,N as L,g as $,o as p,c as b,d as o,w as s,b as d,a,a1 as v,e as V,t as i,J as C,F as M,a2 as z,V as w,Q as F,R}from"./index-Boi5WVWA.js";import{V as E}from"./VCardTitle-Q55YjdmG.js";import{V as J}from"./VTextField-289x-O7D.js";import{V as S}from"./VAlert-CEEuOw0I.js";import{V as Q,a as U,b as j}from"./VCardText-DwVsWKdt.js";import{V as q}from"./VTable-BvDkD2Ea.js";import"./forwardRefs-BzL20nvp.js";import"./index-X0neCc54.js";const G=m=>(F("data-v-92aadaec"),m=m(),R(),m),H={class:"table-header"},K={class:"table-container"},O=G(()=>a("thead",null,[a("tr",null,[a("th",null,"ID"),a("th",null,"Topic"),a("th",null,"Is Active"),a("th",null,"Created Date"),a("th",null,"Actions")])],-1)),W={class:"pagination"},X={__name:"SystemList",setup(m){const u=I(),h=localStorage.getItem("token"),_=r([]),l=r("");r(null),r([]);const n=r({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});r(!1),r(null);const y=r(""),g=r(""),f=async(c=1,t="")=>{try{let e=`https://gateway.berkompeten.com/api/admin/master/system?page=${c}`;t&&(e+=`&search=${t.toLowerCase()}`);const k=await x.get(e,{headers:{Authorization:`Bearer ${h}`}});_.value=k.data.data.data,n.value=k.data.data}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),u.push("/login"))}};L([l],([c])=>{f(1,c)});const A=()=>{n.value.next_page_url&&f(n.value.current_page+1,l.value)},B=()=>{n.value.prev_page_url&&f(n.value.current_page-1,l.value)},D=()=>{localStorage.removeItem("id"),u.push("/system/detail")},N=c=>{localStorage.setItem("id",c),u.push("/system/detail")},P=async c=>{try{const t=await x.delete(`https://gateway.berkompeten.com/api/admin/master/system?id=${c}`,{headers:{Authorization:`Bearer ${h}`}});y.value=t.data.message,f(n.value.current_page)}catch(t){console.log("err: ",t),t.response&&t.response.data?g.value=t.response.data.message||"An error occurred while deleting. Please try again.":g.value="An error occurred while deleting. Please try again."}};return $(()=>{f()}),(c,t)=>(p(),b("div",null,[o(E,{class:"mb-4"},{default:s(()=>[d("System Management")]),_:1}),a("div",H,[o(J,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),o(v,{color:"#0080ff",class:"mx-1",onClick:D},{default:s(()=>[d("Create")]),_:1})]),o(Q,null,{default:s(()=>[y.value?(p(),V(S,{key:0,type:"success",dismissible:"","onClick:close":t[1]||(t[1]=e=>y.value="")},{default:s(()=>[d(i(y.value),1)]),_:1})):C("",!0),g.value?(p(),V(S,{key:1,type:"error",dismissible:"","onClick:close":t[2]||(t[2]=e=>g.value="")},{default:s(()=>[d(i(g.value),1)]),_:1})):C("",!0)]),_:1}),a("div",K,[o(q,{"fixed-header":""},{default:s(()=>[O,a("tbody",null,[(p(!0),b(M,null,z(_.value,e=>(p(),b("tr",{key:e.id},[a("td",null,i(e.id),1),a("td",null,i(e.topic),1),a("td",null,i(e.is_active),1),a("td",null,i(e.created_date),1),a("td",null,[a("div",null,[o(v,{icon:"",onClick:k=>N(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:s(()=>[o(w,{style:{color:"orange"}},{default:s(()=>[d("ri-edit-line")]),_:1})]),_:2},1032,["onClick"]),o(v,{icon:"",onClick:k=>P(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:s(()=>[o(w,{style:{color:"red"}},{default:s(()=>[d("ri-delete-bin-line")]),_:1})]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),a("div",W,[o(v,{onClick:B,disabled:!n.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:s(()=>[d("Previous")]),_:1},8,["disabled"]),o(v,{onClick:A,disabled:!n.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:s(()=>[d("Next")]),_:1},8,["disabled"])])]))}},Y=T(X,[["__scopeId","data-v-92aadaec"]]),ce={__name:"system-management",setup(m){const u=localStorage.getItem("token"),h=r(null),_=I();return $(async()=>{if(u)try{const l=await x.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${u}`}});h.value=l.data}catch(l){l.response&&l.response.status===401&&_.push("/login")}else _.push("/login")}),(l,n)=>(p(),V(U,{class:"match-height"},{default:s(()=>[o(j,{cols:"12",md:"12"},{default:s(()=>[o(Y)]),_:1})]),_:1}))}};export{ce as default};