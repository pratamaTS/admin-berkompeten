import{_ as Q,h as U,r as d,P as j,i as $,o as b,f as y,w as t,d as a,b as s,am as I,t as r,L as N,a as l,R as q,S as G}from"./index-AryBdys7.js";import{a as F}from"./VGrid-H4nAnDsn.js";import{V as L}from"./VCard-DRv5nRi-.js";import{V as R}from"./VCardTitle-gQEIOlk7.js";import{V as T,a as w,b as c}from"./VCardText-Ccz8IcNf.js";import{V as H}from"./VForm-2GwK3Akv.js";import{V as k}from"./VTextField-ZuzApsZG.js";import{V as J}from"./VSelect-kxivoCMj.js";import{V as P}from"./VAlert-Dclja9nK.js";import{V as K,a as W}from"./VDataTable-D_b2Lhdj.js";import{V as X}from"./VChip-0NNzlpK8.js";import"./VAvatar-Bk7bSWw5.js";import"./VImg-BnnpGyml.js";import"./index-DYhDWbac.js";import"./VInput-0JT9cSES.js";import"./forwardRefs-BgKS6qNZ.js";import"./easing-DY7PVvcf.js";import"./VMenu-CwDODdxf.js";import"./ssrBoot-P8F_o1ED.js";import"./VOverlay-souyEm7B.js";import"./lazy-IcXCMn0l.js";import"./VCheckboxBtn-CNvXUyKk.js";import"./VSelectionControl-COivTBzk.js";import"./VTable-ClaSuRDA.js";import"./filter-DHuJU8EQ.js";const o=_=>(q("data-v-26324b44"),_=_(),G(),_),Y=["colspan"],Z=o(()=>l("strong",null,"Sender Bank Type:",-1)),ee=o(()=>l("br",null,null,-1)),te=o(()=>l("strong",null,"Payment URL:",-1)),ae=["href"],le=o(()=>l("br",null,null,-1)),oe=o(()=>l("strong",null,"Virtual Account Number:",-1)),se=o(()=>l("br",null,null,-1)),re=o(()=>l("strong",null,"Transaction Reference Number:",-1)),ne=o(()=>l("br",null,null,-1)),ue=o(()=>l("strong",null,"Settlement Status:",-1)),de=o(()=>l("br",null,null,-1)),ie=o(()=>l("strong",null,"Bill Link:",-1)),ce=o(()=>l("br",null,null,-1)),me=o(()=>l("strong",null,"Completed At:",-1)),pe=o(()=>l("br",null,null,-1)),_e=o(()=>l("strong",null,"Reference ID:",-1)),fe=o(()=>l("br",null,null,-1)),ve=o(()=>l("strong",null,"Settlement Date:",-1)),ge={__name:"PaymentReportList",setup(_){const f=U(),S=localStorage.getItem("token"),m=d(""),i=d([]),p=d(""),v=d(""),M=d([]),C=d({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0}),g=d("2024-06-01"),h=d("2024-06-30"),V=d("created_at"),D=d("sort_desc"),z=[{title:"Created At",value:"created_at"},{title:"Amount",value:"amount"},{title:"Sender Name",value:"sender_name"}],A=[{title:"ID",value:"id"},{title:"Bill Title",value:"bill_title"},{title:"Sender Name",value:"sender_name"},{title:"Sender Bank",value:"sender_bank"},{title:"Amount",value:"amount"},{title:"Status",value:"status"},{title:"Created At",value:"created_at"}],B=async(u=1,n="")=>{try{const e=await F.get("https://gateway.berkompeten.com/api/admin/report/bills",{headers:{Authorization:`Bearer ${S}`},params:{page:u,search:n.toLowerCase(),start_date:g.value,end_date:h.value,sort_by:V.value,sort_type:D.value}});if(e.data.error){p.value=e.data.message,i.value=[];return}v.value=e.data.message,i.value=e.data.data.data,C.value=e.data.data}catch(e){p.value="Failed to fetch bills. Please try again.",console.log("err: ",e),e.response&&e.response.status===401&&(localStorage.removeItem("token"),f.push("/login"))}};j([m,g,h,V,D],([u])=>{B(C.value.current_page,u)});const x=u=>u?new Date(u).toLocaleDateString("en-US"):"N/A",E=u=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(u),O=u=>{switch(u.toLowerCase()){case"successful":return"success";case"pending":return"warning";case"failed":return"error";default:return"info"}};return $(()=>{B()}),(u,n)=>(b(),y(W,null,{default:t(()=>[a(L,null,{default:t(()=>[a(R,null,{default:t(()=>[s("Bill List")]),_:1}),a(T,null,{default:t(()=>[a(H,null,{default:t(()=>[a(w,null,{default:t(()=>[a(c,{cols:"12",md:"4"},{default:t(()=>[a(k,{modelValue:m.value,"onUpdate:modelValue":n[0]||(n[0]=e=>m.value=e),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"])]),_:1}),a(c,{cols:"12",md:"3"},{default:t(()=>[a(k,{modelValue:g.value,"onUpdate:modelValue":n[1]||(n[1]=e=>g.value=e),label:"Start Date",type:"date",class:"mx-3",solo:""},null,8,["modelValue"])]),_:1}),a(c,{cols:"12",md:"3"},{default:t(()=>[a(k,{modelValue:h.value,"onUpdate:modelValue":n[2]||(n[2]=e=>h.value=e),label:"End Date",type:"date",class:"mx-3",solo:""},null,8,["modelValue"])]),_:1}),a(c,{cols:"12",md:"2"},{default:t(()=>[a(J,{items:z,modelValue:V.value,"onUpdate:modelValue":n[3]||(n[3]=e=>V.value=e),"item-text":"title","item-value":"value",label:"Sort By"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),a(T,null,{default:t(()=>[p.value?(b(),y(P,{key:0,type:"error",dismissible:"",onClick:n[4]||(n[4]=I(e=>p.value="",["stop"]))},{default:t(()=>[s(r(p.value),1)]),_:1})):N("",!0),v.value?(b(),y(P,{key:1,type:"success",dismissible:"",onClick:n[5]||(n[5]=I(e=>v.value="",["stop"]))},{default:t(()=>[s(r(v.value),1)]),_:1})):N("",!0),a(K,{headers:A,items:i.value,"item-value":"id",class:"elevation-1","show-expand":"",expanded:M.value,"single-expand":u.singleExpand},{"item.amount":t(({item:e})=>[s(r(E(e.amount)),1)]),"item.created_at":t(({item:e})=>[s(r(x(e.created_at)),1)]),"item.status":t(({item:e})=>[a(X,{color:O(e.status),dark:""},{default:t(()=>[s(r(e.status),1)]),_:2},1032,["color"])]),"expanded-row":t(({item:e})=>[l("td",{colspan:A.length,class:"expanded-row"},[a(L,{flat:"",class:"pa-3"},{default:t(()=>[a(R,null,{default:t(()=>[s("Additional Details for Bill ID: "+r(e.id),1)]),_:2},1024),a(w,null,{default:t(()=>[a(c,{cols:"12",sm:"6"},{default:t(()=>[Z,s(" "+r(e.sender_bank_type),1),ee,te,s(),l("a",{href:e.payment_url,target:"_blank"},r(e.payment_url),9,ae),le,oe,s(" "+r(e.virtual_account_number),1),se,re,s(" "+r(e.transaction_reference_number||"N/A"),1),ne]),_:2},1024),a(c,{cols:"12",sm:"6"},{default:t(()=>[ue,s(" "+r(e.settlement_status),1),de,ie,s(" "+r(e.bill_link),1),ce,me,s(" "+r(x(e.completed_at)),1),pe,_e,s(" "+r(e.reference_id||"N/A"),1),fe,ve,s(" "+r(x(e.settlement_date)||"N/A"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)],8,Y)]),_:1},8,["items","expanded","single-expand"])]),_:1})]),_:1})]),_:1}))}},he=Q(ge,[["__scopeId","data-v-26324b44"]]),je={__name:"payment-report",setup(_){const f=localStorage.getItem("token"),S=d(null),m=U();return $(async()=>{if(f)try{const i=await F.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${f}`}});S.value=i.data}catch(i){i.response&&i.response.status===401&&m.push("/login")}else m.push("/login")}),(i,p)=>(b(),y(w,{class:"match-height"},{default:t(()=>[a(c,{cols:"12",md:"12"},{default:t(()=>[a(he)]),_:1})]),_:1}))}};export{je as default};
