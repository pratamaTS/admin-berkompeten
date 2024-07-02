import{a as w}from"./VGrid-CSSzMaaB.js";import{_ as T,u as x,f as m,N as O,W as P,g as y,o as C,c as k,a as e,d as s,w as r,b as u,Z as d,F as U,Y as z,t as n,V as L,Q as E,R,e as F}from"./index-De0cW8vH.js";import{V as q}from"./VTextField-B7mySahN.js";import{V as M}from"./VSelect-26C6jQtc.js";import{V as H}from"./VTable-BqDyC4Lm.js";import{V as j}from"./VRow-Ck8Nnqqw.js";import{V as W}from"./VCol-Dn84ANm3.js";import"./forwardRefs-Cvn-j6Kf.js";import"./VImg-CJEcbLYz.js";import"./VMenu-R4DhkYxG.js";import"./lazy-BoBgL-kr.js";import"./VCheckboxBtn-DIrEybdV.js";const Y=_=>(E("data-v-36fe1d48"),_=_(),R(),_),Z={class:"table-header"},G={class:"table-container"},J=Y(()=>e("thead",null,[e("tr",null,[e("th",null,"Packet Name"),e("th",null,"Subtopic Name"),e("th",null,"Question Number"),e("th",null,"Question"),e("th",null,"Option A"),e("th",null,"Option B"),e("th",null,"Option C"),e("th",null,"Option D"),e("th",null,"Option E"),e("th",null,"Correct Answer"),e("th",null,"Discussion"),e("th",null,"Is Active"),e("th",null,"Created At"),e("th",null,"Actions")])],-1)),K=["innerHTML"],X={class:"pagination"},ee={__name:"QuestionList",setup(_){const c=x(),p=localStorage.getItem("token"),h=m([]),a=m(""),v=m(null),b=m([]),i=m({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0}),f=async(l=1,o=null)=>{try{let t=`https://gateway.berkompeten.com/api/admin/master/question?page=${l}`;o&&(console.log("Q: ",o),t+=`&question_packet_id=${o}`);const g=await w.get(t,{headers:{Authorization:`Bearer ${p}`}});h.value=g.data.data.data,i.value=g.data.data}catch(t){console.log("err: ",t),t.response&&t.response.status===401&&(localStorage.removeItem("token"),c.push("/login"))}},V=async()=>{try{const l=await w.get("https://gateway.berkompeten.com/api/admin/master/question-packet/fetch",{headers:{Authorization:`Bearer ${p}`}});b.value=l.data.data.map(o=>({id:o.id,name:o.name}))}catch(l){console.error("Error fetching question packet options:",l)}};O(v,l=>{f(1,l)});const B=P(()=>{let l=h.value;return a.value&&(l=l.filter(o=>o.question_packet.name.toLowerCase().includes(a.value.toLowerCase())||o.subtopic_list.subtopic.toLowerCase().includes(a.value.toLowerCase())||o.question_number.toLowerCase().includes(a.value.toLowerCase())||o.scenario.toLowerCase().includes(a.value.toLowerCase())||o.question.toLowerCase().includes(a.value.toLowerCase())||o.option_a.toLowerCase().includes(a.value.toLowerCase())||o.option_b.toLowerCase().includes(a.value.toLowerCase())||o.option_c.toLowerCase().includes(a.value.toLowerCase())||o.option_d.toLowerCase().includes(a.value.toLowerCase())||o.option_e.toLowerCase().includes(a.value.toLowerCase())||o.correct_answer.toLowerCase().includes(a.value.toLowerCase())||o.image_url.toLowerCase().includes(a.value.toLowerCase())||o.discussion.toLowerCase().includes(a.value.toLowerCase())||o.created_at.toLowerCase().includes(a.value.toLowerCase()))),l}),A=()=>{i.value.next_page_url&&f(i.value.current_page+1)},S=()=>{i.value.prev_page_url&&f(i.value.current_page-1)},$=()=>{c.push("/question/detail")},D=async()=>{try{const l=await w.get("https://gateway.berkompeten.com/api/admin/master/question/download-template",{responseType:"blob",headers:{Authorization:`Bearer ${p}`}}),o=window.URL.createObjectURL(new Blob([l.data])),t=document.createElement("a");t.href=o,t.setAttribute("download","questions_template.xlsx"),document.body.appendChild(t),t.click()}catch(l){console.error("Error downloading template:",l)}},I=()=>{c.push("/bulk-upsert")},N=l=>{localStorage.setItem("question_packet_id",l),c.push("/question/detail")},Q=async l=>{try{await w.delete(`https://gateway.berkompeten.com/api/admin/master/question?question_id=${l}`,{headers:{Authorization:`Bearer ${p}`}}),f(i.value.current_page)}catch(o){console.log("err: ",o)}};return y(()=>{f(),V()}),(l,o)=>(C(),k("div",null,[e("div",Z,[s(q,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"]),s(M,{modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=t=>v.value=t),items:b.value,"item-value":"id","item-title":"name",label:"Filter by Packet",class:"mx-3",solo:"",clearable:""},null,8,["modelValue","items"]),s(d,{color:"#0080ff",class:"mx-1",onClick:$},{default:r(()=>[u("Create")]),_:1}),s(d,{color:"#0080ff",class:"mx-1",onClick:I},{default:r(()=>[u("Bulk Upsert")]),_:1}),s(d,{color:"#0080ff",class:"mx-1",onClick:D},{default:r(()=>[u("Download Template")]),_:1})]),e("div",G,[s(H,{"fixed-header":""},{default:r(()=>[J,e("tbody",null,[(C(!0),k(U,null,z(B.value,t=>(C(),k("tr",{key:t.id},[e("td",null,n(t.question_packet.name),1),e("td",null,n(t.subtopic_list.subtopic),1),e("td",null,n(t.question_number),1),e("td",null,n(t.question),1),e("td",null,n(t.option_a),1),e("td",null,n(t.option_b),1),e("td",null,n(t.option_c),1),e("td",null,n(t.option_d),1),e("td",null,n(t.option_e),1),e("td",null,n(t.correct_answer),1),e("td",{innerHTML:t.discussion},null,8,K),e("td",null,n(t.is_active),1),e("td",null,n(t.created_at),1),e("td",null,[s(d,{icon:"",onClick:g=>N(t.question_packet.id),class:"mx-1",color:"#0080ff"},{default:r(()=>[s(L,null,{default:r(()=>[u("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),s(d,{icon:"",onClick:g=>Q(t.id),class:"mx-1",color:"#0080ff"},{default:r(()=>[s(L,null,{default:r(()=>[u("mdi-delete")]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),e("div",X,[s(d,{onClick:S,disabled:!i.value.prev_page_url,class:"mx-1",color:"#0080ff"},{default:r(()=>[u("Previous")]),_:1},8,["disabled"]),s(d,{onClick:A,disabled:!i.value.next_page_url,class:"mx-1",color:"#0080ff"},{default:r(()=>[u("Next")]),_:1},8,["disabled"])])]))}},te=T(ee,[["__scopeId","data-v-36fe1d48"]]),_e={__name:"question-management",setup(_){const c=localStorage.getItem("token"),p=m(null),h=x();return y(async()=>{if(c)try{const a=await w.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${c}`}});p.value=a.data}catch(a){a.response&&a.response.status===401&&h.push("/login")}else h.push("/login")}),(a,v)=>(C(),F(j,{class:"match-height"},{default:r(()=>[s(W,{cols:"12",md:"12"},{default:r(()=>[s(te)]),_:1})]),_:1}))}};export{_e as default};