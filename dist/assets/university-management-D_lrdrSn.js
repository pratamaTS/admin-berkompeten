import{a as x}from"./VGrid-DdhISMTF.js";import{_ as P,u as $,f as r,N as T,g as S,o as p,c as k,a,d as o,w as t,b as i,a1 as g,e as V,t as d,J as C,F as z,a2 as F,V as w,Q as M,R}from"./index-BuweSC7k.js";import{V as U}from"./VTextField-BCyqz9Ge.js";import{V as I}from"./VAlert-DmGkpJ_B.js";import{V as E,a as J,b as Q}from"./VCardText-Da75-8QG.js";import{V as j}from"./VTable-BE-7RkGY.js";import"./forwardRefs-DhnuETI-.js";import"./index-D6g7V8uL.js";const q=_=>(M("data-v-cbd10651"),_=_(),R(),_),G={class:"table-header"},H={class:"table-container"},K=q(()=>a("thead",null,[a("tr",null,[a("th",null,"ID"),a("th",null,"Name"),a("th",null,"Is Active"),a("th",null,"Created Date"),a("th",null,"Actions")])],-1)),O={class:"pagination"},W={__name:"UniversityList",setup(_){const u=$(),f=localStorage.getItem("token"),m=r([]),s=r("");r(null),r([]);const n=r({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});r(!1),r(null);const y=r(""),b=r(""),v=async(c=1,l="")=>{try{let e=`https://gateway.berkompeten.com/api/admin/master/university?page=${c}`;l&&(e+=`&search=${l.toLowerCase()}`);const h=await x.get(e,{headers:{Authorization:`Bearer ${f}`}});m.value=h.data.data.data,n.value=h.data.data}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),u.push("/login"))}};T([s],([c])=>{v(1,c)});const B=()=>{n.value.next_page_url&&v(n.value.current_page+1,s.value)},D=()=>{n.value.prev_page_url&&v(n.value.current_page-1,s.value)},N=()=>{localStorage.removeItem("id"),u.push("/university/detail")},A=c=>{localStorage.setItem("id",c),u.push("/university/detail")},L=async c=>{try{await x.delete(`https://gateway.berkompeten.com/api/admin/master/university?id=${c}`,{headers:{Authorization:`Bearer ${f}`}}),v(n.value.current_page)}catch(l){console.log("err: ",l)}};return S(()=>{v()}),(c,l)=>(p(),k("div",null,[a("div",G,[o(U,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value=e),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),o(g,{color:"#0080ff",class:"mx-1",onClick:N},{default:t(()=>[i("Create")]),_:1})]),o(E,null,{default:t(()=>[y.value?(p(),V(I,{key:0,type:"success",dismissible:"","onClick:close":l[1]||(l[1]=e=>y.value="")},{default:t(()=>[i(d(y.value),1)]),_:1})):C("",!0),b.value?(p(),V(I,{key:1,type:"error",dismissible:"","onClick:close":l[2]||(l[2]=e=>b.value="")},{default:t(()=>[i(d(b.value),1)]),_:1})):C("",!0)]),_:1}),a("div",H,[o(j,{"fixed-header":""},{default:t(()=>[K,a("tbody",null,[(p(!0),k(z,null,F(m.value,e=>(p(),k("tr",{key:e.id},[a("td",null,d(e.id),1),a("td",null,d(e.name),1),a("td",null,d(e.is_active),1),a("td",null,d(e.created_date),1),a("td",null,[a("div",null,[o(g,{icon:"",onClick:h=>A(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:t(()=>[o(w,{style:{color:"orange"}},{default:t(()=>[i("ri-edit-line")]),_:1})]),_:2},1032,["onClick"]),o(g,{icon:"",onClick:h=>L(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:t(()=>[o(w,{style:{color:"red"}},{default:t(()=>[i("ri-delete-bin-line")]),_:1})]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),a("div",O,[o(g,{onClick:D,disabled:!n.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[i("Previous")]),_:1},8,["disabled"]),o(g,{onClick:B,disabled:!n.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[i("Next")]),_:1},8,["disabled"])])]))}},X=P(W,[["__scopeId","data-v-cbd10651"]]),re={__name:"university-management",setup(_){const u=localStorage.getItem("token"),f=r(null),m=$();return S(async()=>{if(u)try{const s=await x.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${u}`}});f.value=s.data}catch(s){s.response&&s.response.status===401&&m.push("/login")}else m.push("/login")}),(s,n)=>(p(),V(J,{class:"match-height"},{default:t(()=>[o(Q,{cols:"12",md:"12"},{default:t(()=>[o(X)]),_:1})]),_:1}))}};export{re as default};