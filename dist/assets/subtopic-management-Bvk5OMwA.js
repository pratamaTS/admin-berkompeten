import{a as y}from"./VGrid-H4nAnDsn.js";import{_ as L,h as I,r,P as N,i as $,o as p,c as x,d as l,w as o,b as u,a as e,a2 as v,f as V,t as i,L as C,F as M,j as z,V as w,R as F,S as R}from"./index-AryBdys7.js";import{V as j}from"./VCardTitle-gQEIOlk7.js";import{V as E}from"./VTextField-ZuzApsZG.js";import{V as S}from"./VAlert-Dclja9nK.js";import{V as U,a as q,b as G}from"./VCardText-Ccz8IcNf.js";import{V as H}from"./VTable-ClaSuRDA.js";import"./forwardRefs-BgKS6qNZ.js";import"./index-DYhDWbac.js";import"./VInput-0JT9cSES.js";import"./easing-DY7PVvcf.js";const J=m=>(F("data-v-5b8f1609"),m=m(),R(),m),K={class:"table-header"},O={class:"table-container"},Q=J(()=>e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Topic"),e("th",null,"SubTopic"),e("th",null,"Competence"),e("th",null,"Is Active"),e("th",null,"Created Date"),e("th",null,"Actions")])],-1)),W={class:"pagination"},X={__name:"SubTopicList",setup(m){const d=I(),h=localStorage.getItem("token"),_=r([]),s=r("");r(null),r([]);const n=r({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});r(!1),r(null);const b=r(""),g=r(""),f=async(c=1,t="")=>{try{let a=`https://gateway.berkompeten.com/api/admin/master/subtopic?page=${c}`;t&&(a+=`&search=${t.toLowerCase()}`);const k=await y.get(a,{headers:{Authorization:`Bearer ${h}`}});_.value=k.data.data.data,n.value=k.data.data}catch(a){console.log("err: ",a),a.response&&a.response.status===401&&(localStorage.removeItem("token"),d.push("/login"))}};N([s],([c])=>{f(1,c)});const T=()=>{n.value.next_page_url&&f(n.value.current_page+1,s.value)},A=()=>{n.value.prev_page_url&&f(n.value.current_page-1,s.value)},B=()=>{localStorage.removeItem("id"),d.push("/subtopic/detail")},D=c=>{localStorage.setItem("id",c),d.push("/subtopic/detail")},P=async c=>{try{const t=await y.delete(`https://gateway.berkompeten.com/api/admin/master/subtopic?id=${c}`,{headers:{Authorization:`Bearer ${h}`}});b.value=t.data.message,f(n.value.current_page,s)}catch(t){console.log("err: ",t),t.response&&t.response.data?g.value=t.response.data.message||"An error occurred while deleting. Please try again.":g.value="An error occurred while deleting. Please try again."}};return $(()=>{f()}),(c,t)=>(p(),x("div",null,[l(j,{class:"mb-4"},{default:o(()=>[u("Sub Topic Management")]),_:1}),e("div",K,[l(E,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),l(v,{color:"#0080ff",class:"mx-1",onClick:B},{default:o(()=>[u("Create")]),_:1})]),l(U,null,{default:o(()=>[b.value?(p(),V(S,{key:0,type:"success",dismissible:"","onClick:close":t[1]||(t[1]=a=>b.value="")},{default:o(()=>[u(i(b.value),1)]),_:1})):C("",!0),g.value?(p(),V(S,{key:1,type:"error",dismissible:"","onClick:close":t[2]||(t[2]=a=>g.value="")},{default:o(()=>[u(i(g.value),1)]),_:1})):C("",!0)]),_:1}),e("div",O,[l(H,{"fixed-header":""},{default:o(()=>[Q,e("tbody",null,[(p(!0),x(M,null,z(_.value,a=>(p(),x("tr",{key:a.id},[e("td",null,i(a.id),1),e("td",null,i(a.topic.topic),1),e("td",null,i(a.subtopic),1),e("td",null,i(a.competence),1),e("td",null,i(a.is_active),1),e("td",null,i(a.created_date),1),e("td",null,[e("div",null,[l(v,{icon:"",onClick:k=>D(a.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:o(()=>[l(w,{style:{color:"orange"}},{default:o(()=>[u("ri-edit-line")]),_:1})]),_:2},1032,["onClick"]),l(v,{icon:"",onClick:k=>P(a.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:o(()=>[l(w,{style:{color:"red"}},{default:o(()=>[u("ri-delete-bin-line")]),_:1})]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),e("div",W,[l(v,{onClick:A,disabled:!n.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:o(()=>[u("Previous")]),_:1},8,["disabled"]),l(v,{onClick:T,disabled:!n.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:o(()=>[u("Next")]),_:1},8,["disabled"])])]))}},Y=L(X,[["__scopeId","data-v-5b8f1609"]]),ie={__name:"subtopic-management",setup(m){const d=localStorage.getItem("token"),h=r(null),_=I();return $(async()=>{if(d)try{const s=await y.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${d}`}});h.value=s.data}catch(s){s.response&&s.response.status===401&&_.push("/login")}else _.push("/login")}),(s,n)=>(p(),V(q,{class:"match-height"},{default:o(()=>[l(G,{cols:"12",md:"12"},{default:o(()=>[l(Y)]),_:1})]),_:1}))}};export{ie as default};
