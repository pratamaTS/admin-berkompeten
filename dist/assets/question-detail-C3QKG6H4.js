import{p as ye,l as we,Y as ke,a0 as U,f as p,ab as qe,ac as Ce,g as ae,N as E,ad as Ie,B as Se,a5 as Fe,d as t,G as K,F as X,D as ie,ae as Pe,af as Ee,$ as Z,a6 as Be,aa as Ae,ag as Re,u as ve,M as Ue,ah as ue,o as B,e as G,w as l,a as q,W as M,H as w,V as ce,c as de,t as ee,J as T,ai as De,b as O}from"./index-B2uTGNIn.js";import{a as me}from"./avatar-1-BeeGmpGQ.js";import{a as k}from"./VGrid-CSSzMaaB.js";import{m as $e,c as ze,u as Ne,d as fe,f as Me,e as Te,g as Oe,b as c,a as te,V as b}from"./VTextField-DwcV8rx7.js";import{V as Ge}from"./VCard-CrryP-Qy.js";import{V as He}from"./VAvatar-AhXlFfXf.js";import{V as Qe}from"./ssrBoot-DPxRLudO.js";import{V as je}from"./VForm-DvxvO_VM.js";import{V as oe}from"./VRow-Be-xk2vu.js";import{V as pe}from"./VSelect-DYRt2K0a.js";import{f as Le}from"./forwardRefs-Bb7VBe2S.js";import{I as Je}from"./index-DLFc4Mbc.js";import{V as We}from"./VSwitch-BA1EkYcz.js";import{V as ge}from"./VAlert-6OGfZE4H.js";import"./VImg-HgiTR8XF.js";import"./VMenu-DrmoD_pf.js";import"./VOverlay-yvzz_hLo.js";import"./lazy-BsolpoiJ.js";import"./VCheckboxBtn-CqMmkWKM.js";import"./VSelectionControl-DhCDo2Al.js";import"./VChip-Czz1Ezfh.js";const Ye=ye({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...$e(),...ze()},"VTextarea"),_e=we()({name:"VTextarea",directives:{Intersect:Je},inheritAttrs:!1,props:Ye(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,C){let{attrs:g,emit:v,slots:u}=C;const a=ke(e,"modelValue"),{isFocused:r,focus:V,blur:D}=Ne(e),H=U(()=>typeof e.counterValue=="function"?e.counterValue(a.value):(a.value||"").toString().length),I=U(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function y(i,f){var d,_;!e.autofocus||!i||(_=(d=f[0].target)==null?void 0:d.focus)==null||_.call(d)}const $=p(),S=p(),A=qe(""),F=p(),Q=U(()=>e.persistentPlaceholder||r.value||e.active);function R(){var i;F.value!==document.activeElement&&((i=F.value)==null||i.focus()),r.value||V()}function j(i){R(),v("click:control",i)}function L(i){v("mousedown:control",i)}function n(i){i.stopPropagation(),R(),Z(()=>{a.value="",Be(e["onClick:clear"],i)})}function o(i){var d;const f=i.target;if(a.value=f.value,(d=e.modelModifiers)!=null&&d.trim){const _=[f.selectionStart,f.selectionEnd];Z(()=>{f.selectionStart=_[0],f.selectionEnd=_[1]})}}const s=p(),m=p(+e.rows),J=U(()=>["plain","underlined"].includes(e.variant));Ce(()=>{e.autoGrow||(m.value=+e.rows)});function P(){e.autoGrow&&Z(()=>{if(!s.value||!S.value)return;const i=getComputedStyle(s.value),f=getComputedStyle(S.value.$el),d=parseFloat(i.getPropertyValue("--v-field-padding-top"))+parseFloat(i.getPropertyValue("--v-input-padding-top"))+parseFloat(i.getPropertyValue("--v-field-padding-bottom")),_=s.value.scrollHeight,z=parseFloat(i.lineHeight),W=Math.max(parseFloat(e.rows)*z+d,parseFloat(f.getPropertyValue("--v-input-control-height"))),Y=parseFloat(e.maxRows)*z+d||1/0,x=Re(_??0,W,Y);m.value=Math.floor((x-d)/z),A.value=Ae(x)})}ae(P),E(a,P),E(()=>e.rows,P),E(()=>e.maxRows,P),E(()=>e.density,P);let h;return E(s,i=>{i?(h=new ResizeObserver(P),h.observe(s.value)):h==null||h.disconnect()}),Ie(()=>{h==null||h.disconnect()}),Se(()=>{const i=!!(u.counter||e.counter||e.counterValue),f=!!(i||u.details),[d,_]=Fe(g),{modelValue:z,...W}=fe.filterProps(e),Y=Me(e);return t(fe,K({ref:$,modelValue:a.value,"onUpdate:modelValue":x=>a.value=x,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":J.value},e.class],style:e.style},d,W,{centerAffix:m.value===1&&!J.value,focused:r.value}),{...u,default:x=>{let{id:N,isDisabled:se,isDirty:le,isReadonly:Ve,isValid:he}=x;return t(Te,K({ref:S,style:{"--v-textarea-control-height":A.value},onClick:j,onMousedown:L,"onClick:clear":n,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},Y,{id:N.value,active:Q.value||le.value,centerAffix:m.value===1&&!J.value,dirty:le.value||e.dirty,disabled:se.value,focused:r.value,error:he.value===!1}),{...u,default:xe=>{let{props:{class:ne,...re}}=xe;return t(X,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ie(t("textarea",K({ref:F,class:ne,value:a.value,onInput:o,autofocus:e.autofocus,readonly:Ve.value,disabled:se.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:R,onBlur:D},re,_),null),[[Pe("intersect"),{handler:y},null,{once:!0}]]),e.autoGrow&&ie(t("textarea",{class:[ne,"v-textarea__sizer"],id:`${re.id}-sizer`,"onUpdate:modelValue":be=>a.value=be,ref:s,readonly:!0,"aria-hidden":"true"},null),[[Ee,a.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:f?x=>{var N;return t(X,null,[(N=u.details)==null?void 0:N.call(u,x),i&&t(X,null,[t("span",null,null),t(Oe,{active:e.persistentCounter||r.value,value:H.value,max:I.value},u.counter)])])}:void 0})}),Le({},$,S,F)}}),Ke={class:"d-flex flex-column justify-center gap-5"},Xe={class:"d-flex flex-wrap gap-2"},Ze=q("span",{class:"d-none d-sm-block"},"Upload new photo",-1),et=q("span",{class:"d-none d-sm-block"},"Reset",-1),tt=q("p",{class:"text-body-1 mb-0"},"Allowed JPG, GIF or PNG. Max size of 2048MB",-1),ot={key:0,class:"text-red-500 text-sm"},at={style:{color:"red"}},st={key:0,class:"text-red-500 text-sm"},lt={__name:"QuestionDetailUpsert",setup(e){const C=ve();Ue();const g=localStorage.getItem("question_id"),v=p([]),u=p([]),a=ue({image_url:me,question_packet_id:"",subtopic_list_id:"",scenario:"",question:"",option_a:"",option_b:"",option_c:"",option_d:"",option_e:"",correct_answer:"",image_url:"",discussion:"",is_active:0}),r=ue({}),V=localStorage.getItem("token"),D=p(null),H=U(()=>a.image_url||me),I=p(""),y=p(""),$=async n=>{try{const o=await k.get(`https://gateway.berkompeten.com/api/admin/master/question/detail?id=${n}`,{headers:{Authorization:`Bearer ${V}`}});Object.assign(a,o.data.data)}catch(o){console.error("Error fetching question data:",o)}},S=async()=>{try{await k({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/question/upsert",data:a,headers:{Authorization:`Bearer ${V}`}}),I.value="Question saved successfully!",setTimeout(()=>{A(),C.push("/question-management")},2e3)}catch(n){console.error("Error submitting form:",n),n.response&&n.response.data&&n.response.data.error?(Object.assign(r,n.response.data.message),console.log("ERROR: ",r)):y.value="An error occurred while saving the question. Please try again."}},A=()=>{Object.assign(a,{image_url:null,question_packet_id:null,subtopic_list_id:null,question_number:null,scenario:"",question:"",option_a:"",option_b:"",option_c:"",option_d:"",option_e:"",correct_answer:"",image_url:"",discussion:"",is_active:0})},F=async()=>{try{const n=await k.get("https://gateway.berkompeten.com/api/admin/master/question-packet/fetch",{headers:{Authorization:`Bearer ${V}`}});v.value=n.data.data.map(o=>({id:o.id,name:o.name}))}catch(n){console.error("Error fetching question packet options:",n)}},Q=async()=>{try{const n=await k.get("https://gateway.berkompeten.com/api/admin/master/subtopic/fetch",{headers:{Authorization:`Bearer ${V}`}});u.value=n.data.data.map(o=>({id:o.id,name:o.subtopic}))}catch(n){console.error("Error fetching sub topic options:",n)}},R=async()=>{try{var n="https://gateway.berkompeten.com/api/admin/master/question/next-number";a.question_packet_id&&(n=n+"?question_packet_id="+a.question_packet_id);const o=await k.get(n,{headers:{Authorization:`Bearer ${V}`}});a.question_number=o.data.data.next_number,console.log("next number: ",a.question_number)}catch(o){console.error("Error fetching next number:",o)}},j=async n=>{const o=n.target.files[0],s=new FormData;s.append("image",o);try{const m=await k.post("https://gateway.berkompeten.com/api/admin/master/upload-image",s,{headers:{Authorization:`Bearer ${V}`,"Content-Type":"multipart/form-data"}});a.image_url=m.data.data.image_url}catch(m){console.error("Error uploading image:",m)}},L=()=>{a.image_url=""};return E(()=>a.question_packet_id,(n,o)=>{console.log(`question_packet_id changed from ${o} to ${n}`),n&&!g&&R()}),ae(()=>{F(),Q(),g?$(g):localStorage.removeItem("question_id")}),(n,o)=>(B(),G(oe,null,{default:l(()=>[t(c,{cols:"12"},{default:l(()=>[t(Ge,{title:"Question Details"},{default:l(()=>[t(te,{class:"d-flex"},{default:l(()=>[t(He,{rounded:"lg",size:"100",class:"me-6",image:H.value},null,8,["image"]),q("form",Ke,[q("div",Xe,[t(M,{color:"#0080ff",onClick:o[0]||(o[0]=s=>{var m;return(m=w(D))==null?void 0:m.click()})},{default:l(()=>[t(ce,{icon:"ri-upload-cloud-line",class:"d-sm-none"}),Ze]),_:1}),q("input",{ref_key:"refInputEl",ref:D,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:j},null,544),t(M,{type:"reset",color:"error",variant:"outlined",onClick:L},{default:l(()=>[et,t(ce,{icon:"ri-refresh-line",class:"d-sm-none"})]),_:1})]),tt,r.image_url?(B(),de("div",ot,[q("span",at,ee(r.image_url[0]),1)])):T("",!0)])]),_:1}),t(Qe),t(te,null,{default:l(()=>[t(je,{onSubmit:De(S,["prevent"])},{default:l(()=>[t(oe,null,{default:l(()=>[t(c,{cols:"12"},{default:l(()=>[t(pe,{modelValue:a.question_packet_id,"onUpdate:modelValue":o[1]||(o[1]=s=>a.question_packet_id=s),"error-messages":r.question_packet_id,label:"Question Packet",items:w(v),placeholder:"Select question packet","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(pe,{modelValue:a.subtopic_list_id,"onUpdate:modelValue":o[2]||(o[2]=s=>a.subtopic_list_id=s),"error-messages":r.subtopic_list_id,label:"Sub Topic List",items:w(u),placeholder:"Select Sub Topic List","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(b,{modelValue:a.question_number,"onUpdate:modelValue":o[3]||(o[3]=s=>a.question_number=s),"error-messages":r.question_number,label:"Question Number",readonly:""},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(b,{modelValue:a.scenario,"onUpdate:modelValue":o[4]||(o[4]=s=>a.scenario=s),"error-messages":r.scenario,label:"Scenario"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(_e,{modelValue:a.question,"onUpdate:modelValue":o[5]||(o[5]=s=>a.question=s),"error-messages":r.question,label:"Question",placeholder:"Enter question"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(b,{modelValue:a.option_a,"onUpdate:modelValue":o[6]||(o[6]=s=>a.option_a=s),"error-messages":r.option_a,label:"Option A",placeholder:"Enter option A"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(b,{modelValue:a.option_b,"onUpdate:modelValue":o[7]||(o[7]=s=>a.option_b=s),"error-messages":r.option_b,label:"Option B",placeholder:"Enter option B"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(b,{modelValue:a.option_c,"onUpdate:modelValue":o[8]||(o[8]=s=>a.option_c=s),"error-messages":r.option_c,label:"Option C",placeholder:"Enter option C"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(b,{modelValue:a.option_d,"onUpdate:modelValue":o[9]||(o[9]=s=>a.option_d=s),"error-messages":r.option_d,label:"Option D",placeholder:"Enter option D"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(b,{modelValue:a.option_e,"onUpdate:modelValue":o[10]||(o[10]=s=>a.option_e=s),"error-messages":r.option_e,label:"Option E",placeholder:"Enter option E"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(b,{modelValue:a.correct_answer,"onUpdate:modelValue":o[11]||(o[11]=s=>a.correct_answer=s),"error-messages":r.correct_answer,label:"Correct Answer",placeholder:"Enter correct answer"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(_e,{modelValue:a.discussion,"onUpdate:modelValue":o[12]||(o[12]=s=>a.discussion=s),"error-messages":r.discussion,label:"Discussion",placeholder:"Enter discussion"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(We,{color:"#0080ff",modelValue:a.is_active,"onUpdate:modelValue":o[13]||(o[13]=s=>a.is_active=s),"error-messages":r.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),r.image_url?(B(),de("div",st)):T("",!0)]),_:1}),t(c,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[t(M,{type:"submit",color:"#0080ff"},{default:l(()=>[O("Save")]),_:1}),t(M,{onClick:A,color:"secondary",variant:"outlined"},{default:l(()=>[O("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(te,null,{default:l(()=>[w(I)?(B(),G(ge,{key:0,type:"success",dismissible:"","onClick:close":o[14]||(o[14]=s=>I.value="")},{default:l(()=>[O(ee(w(I)),1)]),_:1})):T("",!0),w(y)?(B(),G(ge,{key:1,type:"error",dismissible:"","onClick:close":o[15]||(o[15]=s=>y.value="")},{default:l(()=>[O(ee(w(y)),1)]),_:1})):T("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},It={__name:"question-detail",setup(e){const C=localStorage.getItem("token"),g=p(null),v=ve();return ae(async()=>{if(C)try{const u=await k.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${C}`}});g.value=u.data}catch(u){u.response&&u.response.status===401&&v.push("/login")}else v.push("/login")}),(u,a)=>(B(),G(oe,{class:"match-height"},{default:l(()=>[t(c,{cols:"12",md:"12"},{default:l(()=>[t(lt)]),_:1})]),_:1}))}};export{It as default};
