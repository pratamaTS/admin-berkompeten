import{p as ye,l as we,a3 as ke,a0 as $,f as p,ab as qe,ac as Ce,g as ae,N as q,Y as Ie,B as Pe,a9 as Se,d as t,G as W,F as X,D as ie,ad as Fe,ae as Ee,$ as Z,aa as Ae,af as Be,ag as Re,u as ve,M as Ue,ah as ue,o as A,e as H,w as l,a as C,a1 as O,H as w,V as ce,c as de,t as ee,J as T,ai as $e,b as G}from"./index-jC4VJkdh.js";import{a as me}from"./avatar-1-BeeGmpGQ.js";import{a as k}from"./VGrid-DZ5pAPxE.js";import{b as c,V as te,a as oe}from"./VCardText-B-WBPdm4.js";import{V as De}from"./VCard-Sz-Ibnvp.js";import{V as ze}from"./VAvatar-_I2zlYPy.js";import{V as Ne}from"./ssrBoot-CmDonteH.js";import{V as Me}from"./VForm-Dll0Xsmm.js";import{V as fe}from"./VSelect-BVozGXkd.js";import{m as Oe,a as Te,u as Ge,b as pe,f as He,c as Qe,d as je,V as y}from"./VTextField-J0_Kbct6.js";import{f as Le}from"./forwardRefs-B9aKzA1m.js";import{I as Je}from"./index-BfC2A7Vi.js";import{V as Ye}from"./VSwitch-B0wdHf2V.js";import{V as ge}from"./VAlert-aBdAoC_b.js";import"./VImg-IhBpem5M.js";import"./VList-D1KOjItf.js";import"./VOverlay--IA0BrtW.js";import"./lazy-DEMGuKN1.js";import"./VMenu-gV72_mcB.js";import"./VCheckboxBtn-CFnjU5vl.js";import"./VSelectionControl-Bdvw4wSN.js";import"./VChip-BXoNAHfh.js";const Ke=ye({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Oe(),...Te()},"VTextarea"),_e=we()({name:"VTextarea",directives:{Intersect:Je},inheritAttrs:!1,props:Ke(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,I){let{attrs:g,emit:v,slots:u}=I;const o=ke(e,"modelValue"),{isFocused:n,focus:V,blur:D}=Ge(e),Q=$(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),P=$(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function h(i,f){var d,_;!e.autofocus||!i||(_=(d=f[0].target)==null?void 0:d.focus)==null||_.call(d)}const z=p(),S=p(),B=qe(""),F=p(),R=$(()=>e.persistentPlaceholder||n.value||e.active);function U(){var i;F.value!==document.activeElement&&((i=F.value)==null||i.focus()),n.value||V()}function j(i){U(),v("click:control",i)}function L(i){v("mousedown:control",i)}function r(i){i.stopPropagation(),U(),Z(()=>{o.value="",Ae(e["onClick:clear"],i)})}function a(i){var d;const f=i.target;if(o.value=f.value,(d=e.modelModifiers)!=null&&d.trim){const _=[f.selectionStart,f.selectionEnd];Z(()=>{f.selectionStart=_[0],f.selectionEnd=_[1]})}}const s=p(),m=p(+e.rows),J=$(()=>["plain","underlined"].includes(e.variant));Ce(()=>{e.autoGrow||(m.value=+e.rows)});function E(){e.autoGrow&&Z(()=>{if(!s.value||!S.value)return;const i=getComputedStyle(s.value),f=getComputedStyle(S.value.$el),d=parseFloat(i.getPropertyValue("--v-field-padding-top"))+parseFloat(i.getPropertyValue("--v-input-padding-top"))+parseFloat(i.getPropertyValue("--v-field-padding-bottom")),_=s.value.scrollHeight,N=parseFloat(i.lineHeight),Y=Math.max(parseFloat(e.rows)*N+d,parseFloat(f.getPropertyValue("--v-input-control-height"))),K=parseFloat(e.maxRows)*N+d||1/0,x=Re(_??0,Y,K);m.value=Math.floor((x-d)/N),B.value=Be(x)})}ae(E),q(o,E),q(()=>e.rows,E),q(()=>e.maxRows,E),q(()=>e.density,E);let b;return q(s,i=>{i?(b=new ResizeObserver(E),b.observe(s.value)):b==null||b.disconnect()}),Ie(()=>{b==null||b.disconnect()}),Pe(()=>{const i=!!(u.counter||e.counter||e.counterValue),f=!!(i||u.details),[d,_]=Se(g),{modelValue:N,...Y}=pe.filterProps(e),K=He(e);return t(pe,W({ref:z,modelValue:o.value,"onUpdate:modelValue":x=>o.value=x,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":J.value},e.class],style:e.style},d,Y,{centerAffix:m.value===1&&!J.value,focused:n.value}),{...u,default:x=>{let{id:M,isDisabled:se,isDirty:re,isReadonly:Ve,isValid:he}=x;return t(Qe,W({ref:S,style:{"--v-textarea-control-height":B.value},onClick:j,onMousedown:L,"onClick:clear":r,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},K,{id:M.value,active:R.value||re.value,centerAffix:m.value===1&&!J.value,dirty:re.value||e.dirty,disabled:se.value,focused:n.value,error:he.value===!1}),{...u,default:be=>{let{props:{class:le,...ne}}=be;return t(X,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ie(t("textarea",W({ref:F,class:le,value:o.value,onInput:a,autofocus:e.autofocus,readonly:Ve.value,disabled:se.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:U,onBlur:D},ne,_),null),[[Fe("intersect"),{handler:h},null,{once:!0}]]),e.autoGrow&&ie(t("textarea",{class:[le,"v-textarea__sizer"],id:`${ne.id}-sizer`,"onUpdate:modelValue":xe=>o.value=xe,ref:s,readonly:!0,"aria-hidden":"true"},null),[[Ee,o.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:f?x=>{var M;return t(X,null,[(M=u.details)==null?void 0:M.call(u,x),i&&t(X,null,[t("span",null,null),t(je,{active:e.persistentCounter||n.value,value:Q.value,max:P.value},u.counter)])])}:void 0})}),Le({},z,S,F)}}),We={class:"d-flex flex-column justify-center gap-5"},Xe={class:"d-flex flex-wrap gap-2"},Ze=C("span",{class:"d-none d-sm-block"},"Upload new photo",-1),et=C("span",{class:"d-none d-sm-block"},"Reset",-1),tt=C("p",{class:"text-body-1 mb-0"},"Allowed JPG, GIF or PNG. Max size of 2048MB",-1),ot={key:0,class:"text-red-500 text-sm"},at={style:{color:"red"}},st={key:0,class:"text-red-500 text-sm"},rt={__name:"QuestionDetailUpsert",setup(e){const I=ve();Ue();const g=localStorage.getItem("question_id"),v=p([]),u=p([]),o=ue({image_url:me,question_packet_id:"",subtopic_list_id:"",scenario:"",question:"",option_a:"",option_b:"",option_c:"",option_d:"",option_e:"",correct_answer:"",image_url:"",discussion:"",is_active:0}),n=ue({}),V=localStorage.getItem("token"),D=p(null),Q=$(()=>o.image_url||me),P=p(""),h=p(""),z=async r=>{try{const a=await k.get(`https://gateway.berkompeten.com/api/admin/master/question/detail?id=${r}`,{headers:{Authorization:`Bearer ${V}`}});Object.assign(o,a.data.data)}catch(a){console.error("Error fetching question data:",a)}},S=async()=>{try{o.is_active=o.is_active?1:0,await k({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/question/upsert",data:o,headers:{Authorization:`Bearer ${V}`}}),P.value="Question saved successfully!",setTimeout(()=>{B(),I.push("/question-management")},2e3)}catch(r){console.error("Error submitting form:",r),r.response&&r.response.data?r.response.status===500?h.value=r.response.data.message||"An error occurred while saving. Please try again.":r.response.data.error?(Object.assign(n,r.response.data.message),console.log("ERROR: ",n)):h.value="An error occurred while saving. Please try again.":h.value="An error occurred while saving the question. Please try again."}},B=()=>{Object.assign(o,{image_url:null,question_packet_id:null,subtopic_list_id:null,question_number:null,scenario:"",question:"",option_a:"",option_b:"",option_c:"",option_d:"",option_e:"",correct_answer:"",image_url:"",discussion:"",is_active:0})},F=async()=>{try{const r=await k.get("https://gateway.berkompeten.com/api/admin/master/question-packet/fetch",{headers:{Authorization:`Bearer ${V}`}});v.value=r.data.data.map(a=>({id:a.id,name:a.name}))}catch(r){console.error("Error fetching question packet options:",r)}},R=async(r="")=>{try{const a=await k.get(`https://gateway.berkompeten.com/api/admin/master/subtopic/fetch?search=${r}`,{headers:{Authorization:`Bearer ${V}`}});u.value=a.data.data.map(s=>({id:s.id,name:s.subtopic}))}catch(a){console.error("Error fetching subtopic list:",a)}},U=async()=>{try{var r="https://gateway.berkompeten.com/api/admin/master/question/next-number";o.question_packet_id&&(r=r+"?question_packet_id="+o.question_packet_id);const a=await k.get(r,{headers:{Authorization:`Bearer ${V}`}});o.question_number=a.data.data.next_number,console.log("next number: ",o.question_number)}catch(a){console.error("Error fetching next number:",a)}},j=async r=>{const a=r.target.files[0],s=new FormData;s.append("image",a);try{const m=await k.post("https://gateway.berkompeten.com/api/admin/master/upload-image",s,{headers:{Authorization:`Bearer ${V}`,"Content-Type":"multipart/form-data"}});o.image_url=m.data.data.image_url}catch(m){console.error("Error uploading image:",m)}},L=()=>{o.image_url="",o.is_active=o.is_active?1:0};return q(()=>o.question_packet_id,(r,a)=>{console.log(`question_packet_id changed from ${a} to ${r}`),r&&!g&&U()}),ae(()=>{F(),R(),g?z(g):localStorage.removeItem("question_id")}),q(()=>o.subtopic_list_id,r=>{r===""&&R("")}),(r,a)=>(A(),H(oe,null,{default:l(()=>[t(c,{cols:"12"},{default:l(()=>[t(De,{title:"Question Details"},{default:l(()=>[t(te,{class:"d-flex"},{default:l(()=>[t(ze,{rounded:"lg",size:"100",class:"me-6",image:Q.value},null,8,["image"]),C("form",We,[C("div",Xe,[t(O,{color:"#0080ff",onClick:a[0]||(a[0]=s=>{var m;return(m=w(D))==null?void 0:m.click()})},{default:l(()=>[t(ce,{icon:"ri-upload-cloud-line",class:"d-sm-none"}),Ze]),_:1}),C("input",{ref_key:"refInputEl",ref:D,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:j},null,544),t(O,{type:"reset",color:"error",variant:"outlined",onClick:L},{default:l(()=>[et,t(ce,{icon:"ri-refresh-line",class:"d-sm-none"})]),_:1})]),tt,n.image_url?(A(),de("div",ot,[C("span",at,ee(n.image_url[0]),1)])):T("",!0)])]),_:1}),t(Ne),t(te,null,{default:l(()=>[t(Me,{onSubmit:$e(S,["prevent"])},{default:l(()=>[t(oe,null,{default:l(()=>[t(c,{cols:"12"},{default:l(()=>[t(fe,{modelValue:o.question_packet_id,"onUpdate:modelValue":a[1]||(a[1]=s=>o.question_packet_id=s),"error-messages":n.question_packet_id,label:"Question Packet",items:w(v),placeholder:"Select question packet","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(fe,{modelValue:o.subtopic_list_id,"onUpdate:modelValue":a[2]||(a[2]=s=>o.subtopic_list_id=s),"error-messages":n.subtopic_list_id,label:"Sub Topic List",items:w(u),placeholder:"Select Sub Topic List","item-value":"id","item-title":"name","onUpdate:search":R},null,8,["modelValue","error-messages","items"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(y,{modelValue:o.question_number,"onUpdate:modelValue":a[3]||(a[3]=s=>o.question_number=s),"error-messages":n.question_number,label:"Question Number",readonly:""},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(y,{modelValue:o.scenario,"onUpdate:modelValue":a[4]||(a[4]=s=>o.scenario=s),"error-messages":n.scenario,label:"Scenario"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(_e,{modelValue:o.question,"onUpdate:modelValue":a[5]||(a[5]=s=>o.question=s),"error-messages":n.question,label:"Question",placeholder:"Enter question"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(y,{modelValue:o.option_a,"onUpdate:modelValue":a[6]||(a[6]=s=>o.option_a=s),"error-messages":n.option_a,label:"Option A",placeholder:"Enter option A"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(y,{modelValue:o.option_b,"onUpdate:modelValue":a[7]||(a[7]=s=>o.option_b=s),"error-messages":n.option_b,label:"Option B",placeholder:"Enter option B"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(y,{modelValue:o.option_c,"onUpdate:modelValue":a[8]||(a[8]=s=>o.option_c=s),"error-messages":n.option_c,label:"Option C",placeholder:"Enter option C"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(y,{modelValue:o.option_d,"onUpdate:modelValue":a[9]||(a[9]=s=>o.option_d=s),"error-messages":n.option_d,label:"Option D",placeholder:"Enter option D"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(y,{modelValue:o.option_e,"onUpdate:modelValue":a[10]||(a[10]=s=>o.option_e=s),"error-messages":n.option_e,label:"Option E",placeholder:"Enter option E"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(y,{modelValue:o.correct_answer,"onUpdate:modelValue":a[11]||(a[11]=s=>o.correct_answer=s),"error-messages":n.correct_answer,label:"Correct Answer",placeholder:"Enter correct answer"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(_e,{modelValue:o.discussion,"onUpdate:modelValue":a[12]||(a[12]=s=>o.discussion=s),"error-messages":n.discussion,label:"Discussion",placeholder:"Enter discussion"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(Ye,{color:"#0080ff",modelValue:o.is_active,"onUpdate:modelValue":a[13]||(a[13]=s=>o.is_active=s),"error-messages":n.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),n.image_url?(A(),de("div",st)):T("",!0)]),_:1}),t(c,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[t(O,{type:"submit",color:"#0080ff"},{default:l(()=>[G("Save")]),_:1}),t(O,{onClick:B,color:"secondary",variant:"outlined"},{default:l(()=>[G("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(te,null,{default:l(()=>[w(P)?(A(),H(ge,{key:0,type:"success",dismissible:"","onClick:close":a[14]||(a[14]=s=>P.value="")},{default:l(()=>[G(ee(w(P)),1)]),_:1})):T("",!0),w(h)?(A(),H(ge,{key:1,type:"error",dismissible:"","onClick:close":a[15]||(a[15]=s=>h.value="")},{default:l(()=>[G(ee(w(h)),1)]),_:1})):T("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},Pt={__name:"question-detail",setup(e){const I=localStorage.getItem("token"),g=p(null),v=ve();return ae(async()=>{if(I)try{const u=await k.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${I}`}});g.value=u.data}catch(u){u.response&&u.response.status===401&&v.push("/login")}else v.push("/login")}),(u,o)=>(A(),H(oe,{class:"match-height"},{default:l(()=>[t(c,{cols:"12",md:"12"},{default:l(()=>[t(rt)]),_:1})]),_:1}))}};export{Pt as default};
