import{a as C}from"./VGrid-H4nAnDsn.js";import{_ as L,h as S,r,P as T,i as $,o as i,c as x,d as s,w as o,b as u,a as t,a2 as v,f as w,t as p,L as V,F as M,j as z,V as I,R as F,S as Q}from"./index-AryBdys7.js";import{V as R}from"./VCardTitle-gQEIOlk7.js";import{V as E}from"./VTextField-ZuzApsZG.js";import{V as P}from"./VAlert-Dclja9nK.js";import{V as j,a as U,b as G}from"./VCardText-Ccz8IcNf.js";import{V as H}from"./VTable-ClaSuRDA.js";import"./forwardRefs-BgKS6qNZ.js";import"./index-DYhDWbac.js";import"./VInput-0JT9cSES.js";import"./easing-DY7PVvcf.js";const J=_=>(F("data-v-6216c7f7"),_=_(),Q(),_),K={class:"table-header"},O={class:"table-container"},W=J(()=>t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Packet Name"),t("th",null,"Is Active"),t("th",null,"Created Date"),t("th",null,"Actions")])],-1)),X={key:0},Y={class:"pagination"},Z={__name:"QuestionPacketList",setup(_){const d=S(),h=localStorage.getItem("token"),m=r([]),l=r(""),y=r(null);r([]);const n=r({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0});r(!1),r(null);const k=r(""),g=r(""),f=async(c=1,a="")=>{try{let e=`https://gateway.berkompeten.com/api/admin/master/question-packet?page=${c}`;a&&(e+=`&search=${a.toLowerCase()}`);const b=await C.get(e,{headers:{Authorization:`Bearer ${h}`}});m.value=b.data.data.data,n.value=b.data.data}catch(e){console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),d.push("/login"))}};T([l],([c])=>{f(n.value.current_page,c)});const q=()=>{n.value.next_page_url&&f(n.value.current_page+1,questionPacketId,l.value)},A=()=>{y.value&&(questionPacketId=y.value),n.value.prev_page_url&&f(n.value.current_page-1,questionPacketId,l.value)},B=()=>{localStorage.removeItem("id"),d.push("/question-packet/detail")},D=c=>{localStorage.setItem("id",c),d.push("/question-packet/detail")},N=async c=>{try{const a=await C.delete(`https://gateway.berkompeten.com/api/admin/master/question-packet?question_packet_id=${c}`,{headers:{Authorization:`Bearer ${h}`}});k.value=a.data.message,f(n.value.current_page)}catch(a){console.log("Error: ",a),a.response&&a.response.data?g.value=a.response.data.message||"An error occurred while deleting. Please try again.":g.value="An error occurred while deleting. Please try again."}};return $(()=>{f()}),(c,a)=>(i(),x("div",null,[s(R,{class:"mb-4"},{default:o(()=>[u("Question Packet Management")]),_:1}),t("div",K,[s(E,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),s(v,{color:"#0080ff",class:"mx-1",onClick:B},{default:o(()=>[u("Create")]),_:1})]),s(j,null,{default:o(()=>[k.value?(i(),w(P,{key:0,type:"success",dismissible:"","onClick:close":a[1]||(a[1]=e=>k.value="")},{default:o(()=>[u(p(k.value),1)]),_:1})):V("",!0),g.value?(i(),w(P,{key:1,type:"error",dismissible:"","onClick:close":a[2]||(a[2]=e=>g.value="")},{default:o(()=>[u(p(g.value),1)]),_:1})):V("",!0)]),_:1}),t("div",O,[s(H,{"fixed-header":""},{default:o(()=>[W,t("tbody",null,[(i(!0),x(M,null,z(m.value,e=>(i(),x("tr",{key:e.id},[t("td",null,p(e.id),1),t("td",null,p(e.name),1),t("td",null,p(e.is_active),1),t("td",null,p(e.created_date),1),t("td",null,[e.is_used===!1?(i(),x("div",X,[s(v,{icon:"",onClick:b=>D(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:o(()=>[s(I,{style:{color:"orange"}},{default:o(()=>[u("ri-edit-line")]),_:1})]),_:2},1032,["onClick"]),s(v,{icon:"",onClick:b=>N(e.id),class:"mx-1",color:"transparent",style:{padding:"0",border:"none","background-color":"transparent","box-shadow":"none"}},{default:o(()=>[s(I,{style:{color:"red"}},{default:o(()=>[u("ri-delete-bin-line")]),_:1})]),_:2},1032,["onClick"])])):V("",!0)])]))),128))])]),_:1})]),t("div",Y,[s(v,{onClick:A,disabled:!n.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:o(()=>[u("Previous")]),_:1},8,["disabled"]),s(v,{onClick:q,disabled:!n.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:o(()=>[u("Next")]),_:1},8,["disabled"])])]))}},ee=L(Z,[["__scopeId","data-v-6216c7f7"]]),pe={__name:"question-packet-management",setup(_){const d=localStorage.getItem("token"),h=r(null),m=S();return $(async()=>{if(d)try{const l=await C.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${d}`}});h.value=l.data}catch(l){l.response&&l.response.status===401&&m.push("/login")}else m.push("/login")}),(l,y)=>(i(),w(U,{class:"match-height"},{default:o(()=>[s(G,{cols:"12",md:"12"},{default:o(()=>[s(ee)]),_:1})]),_:1}))}};export{pe as default};
