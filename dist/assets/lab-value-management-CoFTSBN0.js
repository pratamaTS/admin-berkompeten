import{a as V}from"./VGrid-DdhISMTF.js";import{_ as P,u as $,f as r,N as R,g as S,o as p,c as x,a as e,d as l,w as t,b as d,a1 as f,e as y,t as c,J as C,F as T,a2 as z,V as w,Q as F,R as M}from"./index-BuweSC7k.js";import{V as U}from"./VTextField-BCyqz9Ge.js";import{V as I}from"./VAlert-DmGkpJ_B.js";import{V as E,a as J,b as Q}from"./VCardText-Da75-8QG.js";import{V as j}from"./VTable-BE-7RkGY.js";import"./forwardRefs-DhnuETI-.js";import"./index-D6g7V8uL.js";const q=_=>(F("data-v-d2c8058c"),_=_(),M(),_),G={class:"table-header"},H={class:"table-container"},K=q(()=>e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Category Lab"),e("th",null,"Indicator"),e("th",null,"Unit"),e("th",null,"Reference Value"),e("th",null,"Created Date"),e("th",null,"Actions")])],-1)),O={class:"pagination"},W={__name:"LabValueList",setup(_){const i=$(),v=localStorage.getItem("token"),m=r([]),o=r("");r(null),r([]);const n=r({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});r(!1),r(null);const b=r(""),k=r(""),g=async(u=1,s="")=>{try{let a=`https://gateway.berkompeten.com/api/admin/master/lab-value?page=${u}`;s&&(a+=`&search=${s.toLowerCase()}`);const h=await V.get(a,{headers:{Authorization:`Bearer ${v}`}});m.value=h.data.data.data,n.value=h.data.data}catch(a){console.log("err: ",a),a.response&&a.response.status===401&&(localStorage.removeItem("token"),i.push("/login"))}};R([o],([u])=>{g(1,u)});const B=()=>{n.value.next_page_url&&g(n.value.current_page+1,o.value)},D=()=>{n.value.prev_page_url&&g(n.value.current_page-1,o.value)},L=()=>{localStorage.removeItem("id"),i.push("/lab-value/detail")},N=u=>{localStorage.setItem("id",u),i.push("/lab-value/detail")},A=async u=>{try{await V.delete(`https://gateway.berkompeten.com/api/admin/master/lab-value?id=${u}`,{headers:{Authorization:`Bearer ${v}`}}),g(n.value.current_page)}catch(s){console.log("err: ",s)}};return S(()=>{g()}),(u,s)=>(p(),x("div",null,[e("div",G,[l(U,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),l(f,{color:"#0080ff",class:"mx-1",onClick:L},{default:t(()=>[d("Create")]),_:1})]),l(E,null,{default:t(()=>[b.value?(p(),y(I,{key:0,type:"success",dismissible:"","onClick:close":s[1]||(s[1]=a=>b.value="")},{default:t(()=>[d(c(b.value),1)]),_:1})):C("",!0),k.value?(p(),y(I,{key:1,type:"error",dismissible:"","onClick:close":s[2]||(s[2]=a=>k.value="")},{default:t(()=>[d(c(k.value),1)]),_:1})):C("",!0)]),_:1}),e("div",H,[l(j,{"fixed-header":""},{default:t(()=>[K,e("tbody",null,[(p(!0),x(T,null,z(m.value,a=>(p(),x("tr",{key:a.id},[e("td",null,c(a.id),1),e("td",null,c(a.category_lab.name),1),e("td",null,c(a.indicator),1),e("td",null,c(a.unit),1),e("td",null,c(a.reference_value),1),e("td",null,c(a.created_date),1),e("td",null,[e("div",null,[l(f,{icon:"",onClick:h=>N(a.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:t(()=>[l(w,{style:{color:"orange"}},{default:t(()=>[d("ri-edit-line")]),_:1})]),_:2},1032,["onClick"]),l(f,{icon:"",onClick:h=>A(a.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:t(()=>[l(w,{style:{color:"red"}},{default:t(()=>[d("ri-delete-bin-line")]),_:1})]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),e("div",O,[l(f,{onClick:D,disabled:!n.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[d("Previous")]),_:1},8,["disabled"]),l(f,{onClick:B,disabled:!n.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:t(()=>[d("Next")]),_:1},8,["disabled"])])]))}},X=P(W,[["__scopeId","data-v-d2c8058c"]]),re={__name:"lab-value-management",setup(_){const i=localStorage.getItem("token"),v=r(null),m=$();return S(async()=>{if(i)try{const o=await V.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${i}`}});v.value=o.data}catch(o){o.response&&o.response.status===401&&m.push("/login")}else m.push("/login")}),(o,n)=>(p(),y(J,{class:"match-height"},{default:t(()=>[l(Q,{cols:"12",md:"12"},{default:t(()=>[l(X)]),_:1})]),_:1}))}};export{re as default};