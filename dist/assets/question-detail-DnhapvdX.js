import{p as he,l as be,$ as oe,ac as Be,f as v,W as R,ad as Fe,B as ye,a6 as xe,d as t,G as H,F as W,V as le,ae as Ae,af as Ee,ag as Ue,ah as Re,g as ne,N,ai as De,D as ce,aj as ze,X as $e,a1 as ee,a7 as Ne,ab as Te,ak as Me,u as ke,M as Oe,al as me,o as T,e as X,w as n,a as D,Z as Q,H as E,c as fe,t as te,J as L,am as Ge,b as J}from"./index-DPEDR26h.js";import{a as pe}from"./avatar-1-BeeGmpGQ.js";import{a as U}from"./VGrid-CSSzMaaB.js";import{V as c}from"./VCol-C23xuD4c.js";import{m as we,u as Ce,V as Z,a as He,f as je,b as Qe,c as Le,g as Je,e as ae,d as F}from"./VTextField-DCNpKg2D.js";import{a as We,f as Xe,V as Ze}from"./forwardRefs-BeqTK34e.js";import{V as Ke}from"./lazy-CmXcimDv.js";import{V as Ye}from"./VForm-B0uUG2kg.js";import{V as se}from"./VRow-C6F8yCX9.js";import{a as ge,b as ve}from"./VSelect-DSacmhDJ.js";import{I as et}from"./VImg-w7ApfuSw.js";import{m as tt,V as _e}from"./VCheckboxBtn-D5-kZFid.js";import"./VMenu-B2Yka7ZX.js";const at=he({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...we(),...tt()},"VSwitch"),ot=be()({name:"VSwitch",inheritAttrs:!1,props:at(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,k){let{attrs:V,slots:p}=k;const u=oe(e,"indeterminate"),o=oe(e,"modelValue"),{loaderClasses:i}=Be(e),{isFocused:h,focus:z,blur:M}=Ce(e),y=v(),x=R(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),$=Fe(),w=R(()=>e.id||`switch-${$}`);function A(){u.value&&(u.value=!1)}function C(S){var b,q;S.stopPropagation(),S.preventDefault(),(q=(b=y.value)==null?void 0:b.input)==null||q.click()}return ye(()=>{const[S,b]=xe(V),q=Z.filterProps(e),O=_e.filterProps(e);return t(Z,H({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":u.value},i.value,e.class]},S,q,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,id:w.value,focused:h.value,style:e.style}),{...p,default:s=>{let{id:a,messagesId:l,isDisabled:g,isReadonly:G,isValid:P}=s;return t(_e,H({ref:y},O,{modelValue:o.value,"onUpdate:modelValue":[f=>o.value=f,A],id:a.value,"aria-describedby":l.value,type:"checkbox","aria-checked":u.value?"mixed":void 0,disabled:g.value,readonly:G.value,onFocus:z,onBlur:M},b),{...p,default:f=>{let{backgroundColorClasses:r,backgroundColorStyles:d}=f;return t("div",{class:["v-switch__track",...r.value],style:d.value,onClick:C},null)},input:f=>{let{inputNode:r,icon:d,backgroundColorClasses:m,backgroundColorStyles:_}=f;return t(W,null,[r,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":d||e.loading},e.inset?void 0:m.value],style:e.inset?void 0:_.value},[t(We,null,{default:()=>[e.loading?t(Ae,{name:"v-switch",active:!0,color:P.value===!1?void 0:x.value},{default:I=>p.loader?p.loader(I):t(Ee,{active:I.isActive,color:I.color,indeterminate:!0,size:"16",width:"2"},null)}):d&&t(le,{key:d,icon:d,size:"x-small"},null)]})])])}})}})}),{}}}),lt=he({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...we(),...He()},"VTextarea"),Ve=be()({name:"VTextarea",directives:{Intersect:et},inheritAttrs:!1,props:lt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,k){let{attrs:V,emit:p,slots:u}=k;const o=oe(e,"modelValue"),{isFocused:i,focus:h,blur:z}=Ce(e),M=R(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),y=R(()=>{if(V.maxlength)return V.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function x(r,d){var m,_;!e.autofocus||!r||(_=(m=d[0].target)==null?void 0:m.focus)==null||_.call(m)}const $=v(),w=v(),A=Ue(""),C=v(),S=R(()=>e.persistentPlaceholder||i.value||e.active);function b(){var r;C.value!==document.activeElement&&((r=C.value)==null||r.focus()),i.value||h()}function q(r){b(),p("click:control",r)}function O(r){p("mousedown:control",r)}function s(r){r.stopPropagation(),b(),ee(()=>{o.value="",Ne(e["onClick:clear"],r)})}function a(r){var m;const d=r.target;if(o.value=d.value,(m=e.modelModifiers)!=null&&m.trim){const _=[d.selectionStart,d.selectionEnd];ee(()=>{d.selectionStart=_[0],d.selectionEnd=_[1]})}}const l=v(),g=v(+e.rows),G=R(()=>["plain","underlined"].includes(e.variant));Re(()=>{e.autoGrow||(g.value=+e.rows)});function P(){e.autoGrow&&ee(()=>{if(!l.value||!w.value)return;const r=getComputedStyle(l.value),d=getComputedStyle(w.value.$el),m=parseFloat(r.getPropertyValue("--v-field-padding-top"))+parseFloat(r.getPropertyValue("--v-input-padding-top"))+parseFloat(r.getPropertyValue("--v-field-padding-bottom")),_=l.value.scrollHeight,I=parseFloat(r.lineHeight),K=Math.max(parseFloat(e.rows)*I+m,parseFloat(d.getPropertyValue("--v-input-control-height"))),Y=parseFloat(e.maxRows)*I+m||1/0,B=Me(_??0,K,Y);g.value=Math.floor((B-m)/I),A.value=Te(B)})}ne(P),N(o,P),N(()=>e.rows,P),N(()=>e.maxRows,P),N(()=>e.density,P);let f;return N(l,r=>{r?(f=new ResizeObserver(P),f.observe(l.value)):f==null||f.disconnect()}),De(()=>{f==null||f.disconnect()}),ye(()=>{const r=!!(u.counter||e.counter||e.counterValue),d=!!(r||u.details),[m,_]=xe(V),{modelValue:I,...K}=Z.filterProps(e),Y=je(e);return t(Z,H({ref:$,modelValue:o.value,"onUpdate:modelValue":B=>o.value=B,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":G.value},e.class],style:e.style},m,K,{centerAffix:g.value===1&&!G.value,focused:i.value}),{...u,default:B=>{let{id:j,isDisabled:re,isDirty:ie,isReadonly:Se,isValid:qe}=B;return t(Qe,H({ref:w,style:{"--v-textarea-control-height":A.value},onClick:q,onMousedown:O,"onClick:clear":s,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},Y,{id:j.value,active:S.value||ie.value,centerAffix:g.value===1&&!G.value,dirty:ie.value||e.dirty,disabled:re.value,focused:i.value,error:qe.value===!1}),{...u,default:Pe=>{let{props:{class:ue,...de}}=Pe;return t(W,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ce(t("textarea",H({ref:C,class:ue,value:o.value,onInput:a,autofocus:e.autofocus,readonly:Se.value,disabled:re.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:b,onBlur:z},de,_),null),[[ze("intersect"),{handler:x},null,{once:!0}]]),e.autoGrow&&ce(t("textarea",{class:[ue,"v-textarea__sizer"],id:`${de.id}-sizer`,"onUpdate:modelValue":Ie=>o.value=Ie,ref:l,readonly:!0,"aria-hidden":"true"},null),[[$e,o.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:d?B=>{var j;return t(W,null,[(j=u.details)==null?void 0:j.call(u,B),r&&t(W,null,[t("span",null,null),t(Le,{active:e.persistentCounter||i.value,value:M.value,max:y.value},u.counter)])])}:void 0})}),Xe({},$,w,C)}}),st={class:"d-flex flex-column justify-center gap-5"},nt={class:"d-flex flex-wrap gap-2"},rt=D("span",{class:"d-none d-sm-block"},"Upload new photo",-1),it=D("span",{class:"d-none d-sm-block"},"Reset",-1),ut=D("p",{class:"text-body-1 mb-0"},"Allowed JPG, GIF or PNG. Max size of 2048MB",-1),dt={key:0,class:"text-red-500 text-sm"},ct={style:{color:"red"}},mt={key:0,class:"text-red-500 text-sm"},ft={__name:"QuestionDetailUpsert",setup(e){const k=ke();Oe();const V=localStorage.getItem("question_packet_id"),p=v([]),u=v([]),o=me({image_url:pe,question_packet_id:"",subtopic_list_id:"",scenario:"",question:"",option_a:"",option_b:"",option_c:"",option_d:"",option_e:"",correct_answer:"",image_url:"",discussion:"",is_active:0}),i=me({}),h=localStorage.getItem("token"),z=v(null),M=R(()=>o.image_url||pe),y=v(""),x=v(""),$=async s=>{try{const a=await U.get(`https://gateway.berkompeten.com/api/admin/master/question/detail?id=${s}`,{headers:{Authorization:`Bearer ${h}`}});Object.assign(o,a.data.data)}catch(a){console.error("Error fetching question data:",a)}},w=async()=>{try{await U({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/question/upsert",data:o,headers:{Authorization:`Bearer ${h}`}}),y.value="Question saved successfully!",setTimeout(()=>{localStorage.removeItem("question_packet_id"),A(),k.push("/question-management")},2e3)}catch(s){console.error("Error submitting form:",s),s.response&&s.response.data&&s.response.data.error?(Object.assign(i,s.response.data.message),console.log("ERROR: ",i)):x.value="An error occurred while saving the question. Please try again."}},A=()=>{localStorage.removeItem("question_packet_id"),Object.assign(o,{image_url:null,question_packet_id:null,subtopic_list_id:null,question_number:null,scenario:"",question:"",option_a:"",option_b:"",option_c:"",option_d:"",option_e:"",correct_answer:"",image_url:"",discussion:"",is_active:0})},C=async()=>{try{const s=await U.get("https://gateway.berkompeten.com/api/admin/master/question-packet/fetch",{headers:{Authorization:`Bearer ${h}`}});p.value=s.data.data.map(a=>({id:a.id,name:a.name}))}catch(s){console.error("Error fetching question packet options:",s)}},S=async()=>{try{const s=await U.get("https://gateway.berkompeten.com/api/admin/master/subtopic/fetch",{headers:{Authorization:`Bearer ${h}`}});u.value=s.data.data.map(a=>({id:a.id,name:a.subtopic}))}catch(s){console.error("Error fetching sub topic options:",s)}},b=async()=>{try{var s="https://gateway.berkompeten.com/api/admin/master/question/next-number";o.question_packet_id&&(s=s+"?question_packet_id="+o.question_packet_id);const a=await U.get(s,{headers:{Authorization:`Bearer ${h}`}});o.question_number=a.data.data.next_number,console.log("next number: ",o.question_number)}catch(a){console.error("Error fetching next number:",a)}},q=async s=>{const a=s.target.files[0],l=new FormData;l.append("image",a);try{const g=await U.post("https://gateway.berkompeten.com/api/admin/master/upload-image",l,{headers:{Authorization:`Bearer ${h}`,"Content-Type":"multipart/form-data"}});o.image_url=g.data.data.image_url}catch(g){console.error("Error uploading image:",g)}},O=()=>{o.image_url=""};return N(()=>o.question_packet_id,(s,a)=>{console.log(`question_packet_id changed from ${a} to ${s}`),s&&b()}),ne(()=>{V&&$(V),C(),S()}),(s,a)=>(T(),X(se,null,{default:n(()=>[t(c,{cols:"12"},{default:n(()=>[t(Je,{title:"Question Details"},{default:n(()=>[t(ae,{class:"d-flex"},{default:n(()=>[t(Ze,{rounded:"lg",size:"100",class:"me-6",image:M.value},null,8,["image"]),D("form",st,[D("div",nt,[t(Q,{color:"#0080ff",onClick:a[0]||(a[0]=l=>{var g;return(g=E(z))==null?void 0:g.click()})},{default:n(()=>[t(le,{icon:"ri-upload-cloud-line",class:"d-sm-none"}),rt]),_:1}),D("input",{ref_key:"refInputEl",ref:z,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:q},null,544),t(Q,{type:"reset",color:"error",variant:"outlined",onClick:O},{default:n(()=>[it,t(le,{icon:"ri-refresh-line",class:"d-sm-none"})]),_:1})]),ut,i.image_url?(T(),fe("div",dt,[D("span",ct,te(i.image_url[0]),1)])):L("",!0)])]),_:1}),t(Ke),t(ae,null,{default:n(()=>[t(Ye,{onSubmit:Ge(w,["prevent"])},{default:n(()=>[t(se,null,{default:n(()=>[t(c,{cols:"12"},{default:n(()=>[t(ge,{modelValue:o.question_packet_id,"onUpdate:modelValue":a[1]||(a[1]=l=>o.question_packet_id=l),"error-messages":i.question_packet_id,label:"Question Packet",items:E(p),placeholder:"Select question packet","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(ge,{modelValue:o.subtopic_list_id,"onUpdate:modelValue":a[2]||(a[2]=l=>o.subtopic_list_id=l),"error-messages":i.subtopic_list_id,label:"Sub Topic List",items:E(u),placeholder:"Select Sub Topic List","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(F,{modelValue:o.question_number,"onUpdate:modelValue":a[3]||(a[3]=l=>o.question_number=l),"error-messages":i.question_number,label:"Question Number",readonly:""},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(F,{modelValue:o.scenario,"onUpdate:modelValue":a[4]||(a[4]=l=>o.scenario=l),"error-messages":i.scenario,label:"Scenario"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(Ve,{modelValue:o.question,"onUpdate:modelValue":a[5]||(a[5]=l=>o.question=l),"error-messages":i.question,label:"Question",placeholder:"Enter question"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(F,{modelValue:o.option_a,"onUpdate:modelValue":a[6]||(a[6]=l=>o.option_a=l),"error-messages":i.option_a,label:"Option A",placeholder:"Enter option A"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(F,{modelValue:o.option_b,"onUpdate:modelValue":a[7]||(a[7]=l=>o.option_b=l),"error-messages":i.option_b,label:"Option B",placeholder:"Enter option B"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(F,{modelValue:o.option_c,"onUpdate:modelValue":a[8]||(a[8]=l=>o.option_c=l),"error-messages":i.option_c,label:"Option C",placeholder:"Enter option C"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(F,{modelValue:o.option_d,"onUpdate:modelValue":a[9]||(a[9]=l=>o.option_d=l),"error-messages":i.option_d,label:"Option D",placeholder:"Enter option D"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(F,{modelValue:o.option_e,"onUpdate:modelValue":a[10]||(a[10]=l=>o.option_e=l),"error-messages":i.option_e,label:"Option E",placeholder:"Enter option E"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(F,{modelValue:o.correct_answer,"onUpdate:modelValue":a[11]||(a[11]=l=>o.correct_answer=l),"error-messages":i.correct_answer,label:"Correct Answer",placeholder:"Enter correct answer"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(Ve,{modelValue:o.discussion,"onUpdate:modelValue":a[12]||(a[12]=l=>o.discussion=l),"error-messages":i.discussion,label:"Discussion",placeholder:"Enter discussion"},null,8,["modelValue","error-messages"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(ot,{color:"#0080ff",modelValue:o.is_active,"onUpdate:modelValue":a[13]||(a[13]=l=>o.is_active=l),"error-messages":i.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),i.image_url?(T(),fe("div",mt)):L("",!0)]),_:1}),t(c,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:n(()=>[t(Q,{type:"submit",color:"#0080ff"},{default:n(()=>[J("Save")]),_:1}),t(Q,{onClick:A,color:"secondary",variant:"outlined"},{default:n(()=>[J("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(ae,null,{default:n(()=>[E(y)?(T(),X(ve,{key:0,type:"success",dismissible:"","onClick:close":a[14]||(a[14]=l=>y.value="")},{default:n(()=>[J(te(E(y)),1)]),_:1})):L("",!0),E(x)?(T(),X(ve,{key:1,type:"error",dismissible:"","onClick:close":a[15]||(a[15]=l=>x.value="")},{default:n(()=>[J(te(E(x)),1)]),_:1})):L("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},qt={__name:"question-detail",setup(e){const k=localStorage.getItem("token"),V=v(null),p=ke();return ne(async()=>{if(k)try{const u=await U.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${k}`}});V.value=u.data}catch(u){u.response&&u.response.status===401&&p.push("/login")}else p.push("/login")}),(u,o)=>(T(),X(se,{class:"match-height"},{default:n(()=>[t(c,{cols:"12",md:"12"},{default:n(()=>[t(ft)]),_:1})]),_:1}))}};export{qt as default};
