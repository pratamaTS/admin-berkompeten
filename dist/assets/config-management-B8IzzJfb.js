import{a as w}from"./VGrid-CFN8hlD6.js";import{_ as N,u as I,f as s,N as L,g as S,o as d,c as k,d as l,w as t,b as c,a,a1 as g,e as x,t as m,J as C,F as T,a2 as M,V as P,Q as F,R}from"./index-CSwMTQuY.js";import{V as z}from"./VCardTitle-DjaHoF-C.js";import{V as E}from"./VTextField-CqgAXwW9.js";import{V as y}from"./VAlert-BbjSIF3a.js";import{V as J,a as Q,b as U}from"./VCardText-GD4OtdgV.js";import{V as j}from"./VTable-x5-Y-gfv.js";import"./forwardRefs-BHna7vXh.js";import"./index-CVNu2mTP.js";const q=p=>(F("data-v-beee9a5b"),p=p(),R(),p),G={class:"table-header"},H={class:"table-container"},K=q(()=>a("thead",null,[a("tr",null,[a("th",null,"ID"),a("th",null,"Advice Analys Limit"),a("th",null,"Created Date"),a("th",null,"Actions")])],-1)),O={class:"pagination"},W={__name:"ConfigList",setup(p){const u=I(),v=localStorage.getItem("token"),_=s([]),o=s("");s(null),s([]);const n=s({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});s(!1),s(null);const h=s(""),b=s(""),f=async(i=1,r="")=>{try{let e=`https://gateway.berkompeten.com/api/admin/master/config?page=${i}`;r&&(e+=`&search=${r.toLowerCase()}`);const V=await w.get(e,{headers:{Authorization:`Bearer ${v}`}});_.value=V.data.data.data,n.value=V.data.data}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),u.push("/login"))}};L([o],([i])=>{f(1,i)});const $=()=>{n.value.next_page_url&&f(n.value.current_page+1,o.value)},B=()=>{n.value.prev_page_url&&f(n.value.current_page-1,o.value)},A=()=>{localStorage.removeItem("id"),u.push("/config/detail")},D=i=>{localStorage.setItem("id",i),u.push("/config/detail")};return S(()=>{f()}),(i,r)=>(d(),k("div",null,[l(z,{class:"mb-4"},{default:t(()=>[c("Config Management")]),_:1}),a("div",G,[l(E,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=e=>o.value=e),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),l(g,{color:"#0080ff",class:"mx-1",onClick:A},{default:t(()=>[c("Create")]),_:1})]),l(J,null,{default:t(()=>[h.value?(d(),x(y,{key:0,type:"success",dismissible:"","onClick:close":r[1]||(r[1]=e=>h.value="")},{default:t(()=>[c(m(h.value),1)]),_:1})):C("",!0),b.value?(d(),x(y,{key:1,type:"error",dismissible:"","onClick:close":r[2]||(r[2]=e=>b.value="")},{default:t(()=>[c(m(b.value),1)]),_:1})):C("",!0)]),_:1}),a("div",H,[l(j,{"fixed-header":""},{default:t(()=>[K,a("tbody",null,[(d(!0),k(T,null,M(_.value,e=>(d(),k("tr",{key:e.id},[a("td",null,m(e.id),1),a("td",null,m(e.advice_analys),1),a("td",null,m(e.created_date),1),a("td",null,[a("div",null,[l(g,{icon:"",onClick:V=>D(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:t(()=>[l(P,{style:{color:"orange"}},{default:t(()=>[c("ri-edit-line")]),_:1})]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),a("div",O,[l(g,{onClick:B,disabled:!n.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[c("Previous")]),_:1},8,["disabled"]),l(g,{onClick:$,disabled:!n.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[c("Next")]),_:1},8,["disabled"])])]))}},X=N(W,[["__scopeId","data-v-beee9a5b"]]),ne={__name:"config-management",setup(p){const u=localStorage.getItem("token"),v=s(null),_=I();return S(async()=>{if(u)try{const o=await w.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${u}`}});v.value=o.data}catch(o){o.response&&o.response.status===401&&_.push("/login")}else _.push("/login")}),(o,n)=>(d(),x(Q,{class:"match-height"},{default:t(()=>[l(U,{cols:"12",md:"12"},{default:t(()=>[l(X)]),_:1})]),_:1}))}};export{ne as default};
