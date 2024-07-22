import{a as y}from"./VGrid-Bj6fBhbQ.js";import{_ as L,u as $,f as n,N as M,g as S,o as p,c as x,a as e,d as l,w as t,b as d,a1 as g,e as V,t as r,J as C,F as R,a2 as T,V as w,Q as z,R as F}from"./index-BdypHxYq.js";import{V as U}from"./VTextField-CMwSyf7E.js";import{V as I}from"./VAlert-CWW2At3V.js";import{V as E,a as J,b as Q}from"./VCardText-wf_msf2G.js";import{V as j}from"./VTable-CZAyuiKn.js";import"./forwardRefs-Crp4BM6_.js";import"./index-BsKuHeyD.js";const q=m=>(z("data-v-81d07b01"),m=m(),F(),m),G={class:"table-header"},H={class:"table-container"},K=q(()=>e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Class"),e("th",null,"Description"),e("th",null,"Image URL"),e("th",null,"Price"),e("th",null,"Activation Period"),e("th",null,"Is Active"),e("th",null,"Created Date"),e("th",null,"Actions")])],-1)),O={class:"pagination"},W={__name:"MembershipList",setup(m){const i=$(),f=localStorage.getItem("token"),_=n([]),o=n("");n(null),n([]);const c=n({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});n(!1),n(null);const b=n(""),k=n(""),h=async(u=1,s="")=>{try{let a=`https://gateway.berkompeten.com/api/admin/master/membership?page=${u}`;s&&(a+=`&search=${s.toLowerCase()}`);const v=await y.get(a,{headers:{Authorization:`Bearer ${f}`}});_.value=v.data.data.data,c.value=v.data.data}catch(a){console.log("err: ",a),a.response&&a.response.status===401&&(localStorage.removeItem("token"),i.push("/login"))}};M([o],([u])=>{h(1,u)});const B=()=>{c.value.next_page_url&&h(c.value.current_page+1,o.value)},D=()=>{c.value.prev_page_url&&h(c.value.current_page-1,o.value)},A=()=>{localStorage.removeItem("id"),i.push("/membership/detail")},N=u=>{localStorage.setItem("id",u),i.push("/membership/detail")},P=async u=>{try{await y.delete(`https://gateway.berkompeten.com/api/admin/master/membership?id=${u}`,{headers:{Authorization:`Bearer ${f}`}}),h(c.value.current_page)}catch(s){console.log("err: ",s)}};return S(()=>{h()}),(u,s)=>(p(),x("div",null,[e("div",G,[l(U,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),l(g,{color:"#0080ff",class:"mx-1",onClick:A},{default:t(()=>[d("Create")]),_:1})]),l(E,null,{default:t(()=>[b.value?(p(),V(I,{key:0,type:"success",dismissible:"","onClick:close":s[1]||(s[1]=a=>b.value="")},{default:t(()=>[d(r(b.value),1)]),_:1})):C("",!0),k.value?(p(),V(I,{key:1,type:"error",dismissible:"","onClick:close":s[2]||(s[2]=a=>k.value="")},{default:t(()=>[d(r(k.value),1)]),_:1})):C("",!0)]),_:1}),e("div",H,[l(j,{"fixed-header":""},{default:t(()=>[K,e("tbody",null,[(p(!0),x(R,null,T(_.value,a=>(p(),x("tr",{key:a.id},[e("td",null,r(a.id),1),e("td",null,r(a.name),1),e("td",null,r(a.class),1),e("td",null,r(a.description),1),e("td",null,r(a.image_url),1),e("td",null,r(a.price),1),e("td",null,r(a.activation_period),1),e("td",null,r(a.is_active),1),e("td",null,r(a.created_date),1),e("td",null,[e("div",null,[l(g,{icon:"",onClick:v=>N(a.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:t(()=>[l(w,{style:{color:"orange"}},{default:t(()=>[d("ri-edit-line")]),_:1})]),_:2},1032,["onClick"]),l(g,{icon:"",onClick:v=>P(a.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:t(()=>[l(w,{style:{color:"red"}},{default:t(()=>[d("ri-delete-bin-line")]),_:1})]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),e("div",O,[l(g,{onClick:D,disabled:!c.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[d("Previous")]),_:1},8,["disabled"]),l(g,{onClick:B,disabled:!c.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[d("Next")]),_:1},8,["disabled"])])]))}},X=L(W,[["__scopeId","data-v-81d07b01"]]),re={__name:"membership-management",setup(m){const i=localStorage.getItem("token"),f=n(null),_=$();return S(async()=>{if(i)try{const o=await y.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${i}`}});f.value=o.data}catch(o){o.response&&o.response.status===401&&_.push("/login")}else _.push("/login")}),(o,c)=>(p(),V(J,{class:"match-height"},{default:t(()=>[l(Q,{cols:"12",md:"12"},{default:t(()=>[l(X)]),_:1})]),_:1}))}};export{re as default};