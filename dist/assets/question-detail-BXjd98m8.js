import{p as Ie,f as F,a0 as B,H as $,ab as Le,a7 as Fe,ac as Ge,ad as He,l as $e,x as Qe,ae as ne,a3 as _e,y as Je,N as j,$ as ce,a4 as We,B as ze,d as t,F as ae,G as ee,V as ye,af as Ye,a5 as Xe,b as ie,ag as Ze,ah as Re,g as Pe,Y as et,a9 as tt,D as De,ai as at,aj as lt,aa as ot,ak as nt,al as st,u as Ke,M as rt,am as Ee,o as se,e as Ve,w as m,a as te,a1 as pe,c as qe,t as we,J as he,an as ut}from"./index-B9R8xUIM.js";import{a as Be}from"./avatar-1-BeeGmpGQ.js";import{a as Z}from"./VGrid-DltV4JLN.js";import{b as A,V as Ce,a as Se}from"./VCardText-CL4Y-5xR.js";import{V as it}from"./VCard-Bz6IbJMo.js";import{V as ct}from"./VAvatar-CkWqXRMR.js";import{V as dt}from"./ssrBoot-B2VSkaZD.js";import{V as mt}from"./VForm-t-dCkdAR.js";import{m as ft,u as vt,a as gt,V as pt}from"./VSelect-BXgyW-tx.js";import{e as ht,g as _t,V as K,m as Vt,a as yt,u as bt,b as Ue,f as xt,c as kt,d as wt}from"./VTextField-CKdyHjxX.js";import{f as je}from"./forwardRefs-Do-ZFgiD.js";import{u as Ct,c as Ft,V as Oe}from"./VList-Bh2GQ6BZ.js";import{m as St,I as It}from"./index-Cw9yalR4.js";import{V as Pt}from"./VMenu-C5IScYJl.js";import{V as At}from"./VCheckboxBtn-D5RD4CeC.js";import{V as Mt}from"./VChip-CpzCghRW.js";import{V as Rt}from"./VSwitch-C-6RlZer.js";import{V as Te}from"./VAlert-Cy14iNEw.js";import"./VCardTitle-CuCQsqOf.js";import"./VImg-DJPBhNBZ.js";import"./VOverlay-BuXFtNrG.js";import"./lazy-Cj1e-PCd.js";import"./VSelectionControl-qCQSc6oY.js";const Dt=(e,f,a)=>e==null||f==null?-1:e.toString().toLocaleLowerCase().indexOf(f.toString().toLocaleLowerCase()),Et=Ie({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function qt(e,f,a){var y;const _=[],i=(a==null?void 0:a.default)??Dt,l=a!=null&&a.filterKeys?Fe(a.filterKeys):!1,u=Object.keys((a==null?void 0:a.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return _;e:for(let b=0;b<e.length;b++){const[M,S=M]=Fe(e[b]),d={},c={};let h=-1;if(f&&!(a!=null&&a.noFilter)){if(typeof M=="object"){const T=l||Object.keys(S);for(const R of T){const Q=Ge(S,R,S),G=(y=a==null?void 0:a.customKeyFilter)==null?void 0:y[R];if(h=G?G(Q,f,M):i(Q,f,M),h!==-1&&h!==!1)G?d[R]=h:c[R]=h;else if((a==null?void 0:a.filterMode)==="every")continue e}}else h=i(M,f,M),h!==-1&&h!==!1&&(c.title=h);const D=Object.keys(c).length,I=Object.keys(d).length;if(!D&&!I||(a==null?void 0:a.filterMode)==="union"&&I!==u&&!D||(a==null?void 0:a.filterMode)==="intersection"&&(I!==u||!D))continue}_.push({index:b,matches:{...c,...d}})}return _}function Bt(e,f,a,_){const i=F([]),l=F(new Map),u=B(()=>$(f));Le(()=>{const b=typeof a=="function"?a():$(a),M=typeof b!="string"&&typeof b!="number"?"":String(b),S=qt(u.value,M,{customKeyFilter:{...e.customKeyFilter,...$(_==null?void 0:_.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),d=$(f),c=[],h=new Map;S.forEach(D=>{let{index:I,matches:T}=D;const R=d[I];c.push(R),h.set(R.value,T)}),i.value=c,l.value=h});function y(b){return l.value.get(b.value)}return{filteredItems:i,filteredMatches:l,getMatches:y}}function Ut(e,f,a){if(f==null)return e;if(Array.isArray(f))throw new Error("Multiple matches is not implemented");return typeof f=="number"&&~f?t(ae,null,[t("span",{class:"v-autocomplete__unmask"},[e.substr(0,f)]),t("span",{class:"v-autocomplete__mask"},[e.substr(f,a)]),t("span",{class:"v-autocomplete__unmask"},[e.substr(f+a)])]):e}const Ot=Ie({autoSelectFirst:{type:[Boolean,String]},search:String,...Et({filterKeys:["title"]}),...ft(),...He(ht({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...St({transition:!1})},"VAutocomplete"),Tt=$e()({name:"VAutocomplete",props:Ot(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,f){let{slots:a}=f;const{t:_}=Qe(),i=F(),l=ne(!1),u=ne(!0),y=ne(!1),b=F(),M=F(),S=_e(e,"menu"),d=B({get:()=>S.value,set:n=>{var v;S.value&&!n&&((v=b.value)!=null&&v.ΨopenChildren)||(S.value=n)}}),c=ne(-1),h=B(()=>{var n;return(n=i.value)==null?void 0:n.color}),D=B(()=>d.value?e.closeText:e.openText),{items:I,transformIn:T,transformOut:R}=Ct(e),{textColorClasses:Q,textColorStyles:G}=Je(h),V=_e(e,"search",""),s=_e(e,"modelValue",[],n=>T(n===null?[null]:Fe(n)),n=>{const v=R(n);return e.multiple?v:v[0]??null}),o=B(()=>typeof e.counterValue=="function"?e.counterValue(s.value):typeof e.counterValue=="number"?e.counterValue:s.value.length),r=_t(),{filteredItems:E,getMatches:J}=Bt(e,I,()=>u.value?"":V.value),x=B(()=>e.hideSelected?E.value.filter(n=>!s.value.some(v=>v.value===n.value)):E.value),p=B(()=>s.value.map(n=>n.props.value)),P=B(()=>{var v;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&V.value===((v=x.value[0])==null?void 0:v.title))&&x.value.length>0&&!u.value&&!y.value}),w=B(()=>e.hideNoData&&!I.value.length||e.readonly||(r==null?void 0:r.isReadonly.value)),U=F(),{onListScroll:le,onListKeydown:re}=vt(U,i);function ue(n){e.openOnClear&&(d.value=!0),V.value=""}function z(){w.value||(d.value=!0)}function oe(n){w.value||(l.value&&(n.preventDefault(),n.stopPropagation()),d.value=!d.value)}function de(n){var N,g,q;if(e.readonly||r!=null&&r.isReadonly.value)return;const v=i.value.selectionStart,C=s.value.length;if((c.value>-1||["Enter","ArrowDown","ArrowUp"].includes(n.key))&&n.preventDefault(),["Enter","ArrowDown"].includes(n.key)&&(d.value=!0),["Escape"].includes(n.key)&&(d.value=!1),P.value&&["Enter","Tab"].includes(n.key)&&H(x.value[0]),n.key==="ArrowDown"&&P.value&&((N=U.value)==null||N.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(n.key)){if(c.value<0){n.key==="Backspace"&&!V.value&&(c.value=C-1);return}const k=c.value,L=s.value[c.value];L&&!L.props.disabled&&H(L),c.value=k>=C-1?C-2:k}if(n.key==="ArrowLeft"){if(c.value<0&&v>0)return;const k=c.value>-1?c.value-1:C-1;s.value[k]?c.value=k:(c.value=-1,i.value.setSelectionRange((g=V.value)==null?void 0:g.length,(q=V.value)==null?void 0:q.length))}if(n.key==="ArrowRight"){if(c.value<0)return;const k=c.value+1;s.value[k]?c.value=k:(c.value=-1,i.value.setSelectionRange(0,0))}}}function me(n){if(Re(i.value,":autofill")||Re(i.value,":-webkit-autofill")){const v=I.value.find(C=>C.title===n.target.value);v&&H(v)}}function be(){var n;l.value&&(u.value=!0,(n=i.value)==null||n.focus())}function xe(n){l.value=!0,setTimeout(()=>{y.value=!0})}function ke(n){y.value=!1}function fe(n){(n==null||n===""&&!e.multiple)&&(s.value=[])}const W=ne(!1);function H(n){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!n.props.disabled)if(e.multiple){const C=s.value.findIndex(N=>e.valueComparator(N.value,n.value));if(C===-1)s.value=[...s.value,n];else{const N=[...s.value];N.splice(C,1),s.value=N}}else s.value=v?[n]:[],W.value=!0,V.value=v?n.title:"",d.value=!1,u.value=!0,ce(()=>W.value=!1)}return j(l,(n,v)=>{var C;n!==v&&(n?(W.value=!0,V.value=e.multiple?"":String(((C=s.value.at(-1))==null?void 0:C.props.title)??""),u.value=!0,ce(()=>W.value=!1)):(!e.multiple&&V.value==null?s.value=[]:P.value&&!y.value&&!s.value.some(N=>{let{value:g}=N;return g===x.value[0].value})&&H(x.value[0]),d.value=!1,V.value="",c.value=-1))}),j(V,n=>{!l.value||W.value||(n&&(d.value=!0),u.value=!n)}),j(d,()=>{if(!e.hideSelected&&d.value&&s.value.length){const n=x.value.findIndex(v=>s.value.some(C=>v.value===C.value));We&&window.requestAnimationFrame(()=>{var v;n>=0&&((v=M.value)==null||v.scrollToIndex(n))})}}),ze(()=>{const n=!!(e.chips||a.chip),v=!!(!e.hideNoData||x.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),C=s.value.length>0,N=K.filterProps(e);return t(K,ee({ref:i},N,{modelValue:V.value,"onUpdate:modelValue":[g=>V.value=g,fe],focused:l.value,"onUpdate:focused":g=>l.value=g,validationValue:s.externalValue,counterValue:o.value,dirty:C,onChange:me,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!a.selection,"v-autocomplete--selecting-index":c.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:C?void 0:e.placeholder,"onClick:clear":ue,"onMousedown:control":z,onKeydown:de}),{...a,default:()=>t(ae,null,[t(Pt,ee({ref:b,modelValue:d.value,"onUpdate:modelValue":g=>d.value=g,activator:"parent",contentClass:"v-autocomplete__content",disabled:w.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:be},e.menuProps),{default:()=>[v&&t(Ft,{ref:U,selected:p.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:g=>g.preventDefault(),onKeydown:re,onFocusin:xe,onFocusout:ke,onScrollPassive:le,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var g,q,k;return[(g=a["prepend-item"])==null?void 0:g.call(a),!x.value.length&&!e.hideNoData&&(((q=a["no-data"])==null?void 0:q.call(a))??t(Oe,{title:_(e.noDataText)},null)),t(gt,{ref:M,renderless:!0,items:x.value},{default:L=>{var Me;let{item:O,index:Y,itemRef:X}=L;const Ae=ee(O.props,{ref:X,key:Y,active:P.value&&Y===0?!0:void 0,onClick:()=>H(O)});return((Me=a.item)==null?void 0:Me.call(a,{item:O,index:Y,props:Ae}))??t(Oe,Ae,{prepend:ve=>{let{isSelected:ge}=ve;return t(ae,null,[e.multiple&&!e.hideSelected?t(At,{key:O.value,modelValue:ge,ripple:!1,tabindex:"-1"},null):void 0,O.props.prependIcon&&t(ye,{icon:O.props.prependIcon},null)])},title:()=>{var ve,ge;return u.value?O.title:Ut(O.title,(ve=J(O))==null?void 0:ve.title,((ge=V.value)==null?void 0:ge.length)??0)}})}}),(k=a["append-item"])==null?void 0:k.call(a)]}})]}),s.value.map((g,q)=>{function k(X){X.stopPropagation(),X.preventDefault(),H(g,!1)}const L={"onClick:close":k,onMousedown(X){X.preventDefault(),X.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},O=n?!!a.chip:!!a.selection,Y=O?Ye(n?a.chip({item:g,index:q,props:L}):a.selection({item:g,index:q})):void 0;if(!(O&&!Y))return t("div",{key:g.value,class:["v-autocomplete__selection",q===c.value&&["v-autocomplete__selection--selected",Q.value]],style:q===c.value?G.value:{}},[n?a.chip?t(Xe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:g.title}}},{default:()=>[Y]}):t(Mt,ee({key:"chip",closable:e.closableChips,size:"small",text:g.title,disabled:g.props.disabled},L),null):Y??t("span",{class:"v-autocomplete__selection-text"},[g.title,e.multiple&&q<s.value.length-1&&t("span",{class:"v-autocomplete__selection-comma"},[ie(",")])])])})]),"append-inner":function(){var L;for(var g=arguments.length,q=new Array(g),k=0;k<g;k++)q[k]=arguments[k];return t(ae,null,[(L=a["append-inner"])==null?void 0:L.call(a,...q),e.menuIcon?t(ye,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:oe,onClick:Ze,"aria-label":_(D.value),title:_(D.value)},null):void 0])}})}),je({isFocused:l,isPristine:u,menu:d,search:V,filteredItems:E,select:H},i)}}),Nt=Ie({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Vt(),...yt()},"VTextarea"),Ne=$e()({name:"VTextarea",directives:{Intersect:It},inheritAttrs:!1,props:Nt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:a,emit:_,slots:i}=f;const l=_e(e,"modelValue"),{isFocused:u,focus:y,blur:b}=bt(e),M=B(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value||"").toString().length),S=B(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function d(p,P){var w,U;!e.autofocus||!p||(U=(w=P[0].target)==null?void 0:w.focus)==null||U.call(w)}const c=F(),h=F(),D=ne(""),I=F(),T=B(()=>e.persistentPlaceholder||u.value||e.active);function R(){var p;I.value!==document.activeElement&&((p=I.value)==null||p.focus()),u.value||y()}function Q(p){R(),_("click:control",p)}function G(p){_("mousedown:control",p)}function V(p){p.stopPropagation(),R(),ce(()=>{l.value="",ot(e["onClick:clear"],p)})}function s(p){var w;const P=p.target;if(l.value=P.value,(w=e.modelModifiers)!=null&&w.trim){const U=[P.selectionStart,P.selectionEnd];ce(()=>{P.selectionStart=U[0],P.selectionEnd=U[1]})}}const o=F(),r=F(+e.rows),E=B(()=>["plain","underlined"].includes(e.variant));Le(()=>{e.autoGrow||(r.value=+e.rows)});function J(){e.autoGrow&&ce(()=>{if(!o.value||!h.value)return;const p=getComputedStyle(o.value),P=getComputedStyle(h.value.$el),w=parseFloat(p.getPropertyValue("--v-field-padding-top"))+parseFloat(p.getPropertyValue("--v-input-padding-top"))+parseFloat(p.getPropertyValue("--v-field-padding-bottom")),U=o.value.scrollHeight,le=parseFloat(p.lineHeight),re=Math.max(parseFloat(e.rows)*le+w,parseFloat(P.getPropertyValue("--v-input-control-height"))),ue=parseFloat(e.maxRows)*le+w||1/0,z=st(U??0,re,ue);r.value=Math.floor((z-w)/le),D.value=nt(z)})}Pe(J),j(l,J),j(()=>e.rows,J),j(()=>e.maxRows,J),j(()=>e.density,J);let x;return j(o,p=>{p?(x=new ResizeObserver(J),x.observe(o.value)):x==null||x.disconnect()}),et(()=>{x==null||x.disconnect()}),ze(()=>{const p=!!(i.counter||e.counter||e.counterValue),P=!!(p||i.details),[w,U]=tt(a),{modelValue:le,...re}=Ue.filterProps(e),ue=xt(e);return t(Ue,ee({ref:c,modelValue:l.value,"onUpdate:modelValue":z=>l.value=z,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":E.value},e.class],style:e.style},w,re,{centerAffix:r.value===1&&!E.value,focused:u.value}),{...i,default:z=>{let{id:oe,isDisabled:de,isDirty:me,isReadonly:be,isValid:xe}=z;return t(kt,ee({ref:h,style:{"--v-textarea-control-height":D.value},onClick:Q,onMousedown:G,"onClick:clear":V,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},ue,{id:oe.value,active:T.value||me.value,centerAffix:r.value===1&&!E.value,dirty:me.value||e.dirty,disabled:de.value,focused:u.value,error:xe.value===!1}),{...i,default:ke=>{let{props:{class:fe,...W}}=ke;return t(ae,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),De(t("textarea",ee({ref:I,class:fe,value:l.value,onInput:s,autofocus:e.autofocus,readonly:be.value,disabled:de.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:R,onBlur:b},W,U),null),[[at("intersect"),{handler:d},null,{once:!0}]]),e.autoGrow&&De(t("textarea",{class:[fe,"v-textarea__sizer"],id:`${W.id}-sizer`,"onUpdate:modelValue":H=>l.value=H,ref:o,readonly:!0,"aria-hidden":"true"},null),[[lt,l.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:P?z=>{var oe;return t(ae,null,[(oe=i.details)==null?void 0:oe.call(i,z),p&&t(ae,null,[t("span",null,null),t(wt,{active:e.persistentCounter||u.value,value:M.value,max:S.value},i.counter)])])}:void 0})}),je({},c,h,I)}}),Lt={class:"d-flex flex-column justify-center gap-5"},$t={class:"d-flex flex-wrap gap-2"},zt=te("span",{class:"d-none d-sm-block"},"Upload new photo",-1),Kt=te("span",{class:"d-none d-sm-block"},"Reset",-1),jt=te("p",{class:"text-body-1 mb-0"},"Allowed JPG, GIF or PNG. Max size of 2048MB",-1),Gt={key:0,class:"text-red-500 text-sm"},Ht={style:{color:"red"}},Qt={key:0,class:"text-red-500 text-sm"},Jt={__name:"QuestionDetailUpsert",setup(e){const f=Ke();rt();const a=localStorage.getItem("question_id"),_=F([]),i=F([]),l=Ee({image_url:Be,question_packet_id:"",subtopic_list_id:"",scenario:"",question:"",option_a:"",option_b:"",option_c:"",option_d:"",option_e:"",correct_answer:"",image_url:"",discussion:"",is_active:0}),u=Ee({}),y=localStorage.getItem("token"),b=F(null),M=B(()=>l.image_url||Be),S=F(""),d=F(""),c=async s=>{try{const o=await Z.get(`https://gateway.berkompeten.com/api/admin/master/question/detail?id=${s}`,{headers:{Authorization:`Bearer ${y}`}});Object.assign(l,o.data.data)}catch(o){console.error("Error fetching question data:",o)}},h=async()=>{try{l.is_active=l.is_active?1:0,await Z({method:"post",url:"https://gateway.berkompeten.com/api/admin/master/question/upsert",data:l,headers:{Authorization:`Bearer ${y}`}}),S.value="Question saved successfully!",setTimeout(()=>{D(),f.push("/question-management")},2e3)}catch(s){console.error("Error submitting form:",s),s.response&&s.response.data?s.response.status===500?d.value=s.response.data.message||"An error occurred while saving. Please try again.":s.response.data.error?(Object.assign(u,s.response.data.message),console.log("ERROR: ",u)):d.value="An error occurred while saving. Please try again.":d.value="An error occurred while saving the question. Please try again."}},D=()=>{Object.assign(l,{image_url:null,question_packet_id:null,subtopic_list_id:null,question_number:null,scenario:"",question:"",option_a:"",option_b:"",option_c:"",option_d:"",option_e:"",correct_answer:"",image_url:"",discussion:"",is_active:0})},I=async()=>{try{const s=await Z.get("https://gateway.berkompeten.com/api/admin/master/question-packet/fetch",{headers:{Authorization:`Bearer ${y}`}});_.value=s.data.data.map(o=>({id:o.id,name:o.name}))}catch(s){console.error("Error fetching question packet options:",s)}},T=async(s="")=>{try{const o=await Z.get(`https://gateway.berkompeten.com/api/admin/master/subtopic/fetch?search=${s}`,{headers:{Authorization:`Bearer ${y}`}});i.value=o.data.data.map(r=>({id:r.id,name:r.subtopic}))}catch(o){console.error("Error fetching subtopic list:",o)}},R=async()=>{try{var s="https://gateway.berkompeten.com/api/admin/master/question/next-number";l.question_packet_id&&(s=s+"?question_packet_id="+l.question_packet_id);const o=await Z.get(s,{headers:{Authorization:`Bearer ${y}`}});l.question_number=o.data.data.next_number,console.log("next number: ",l.question_number)}catch(o){console.error("Error fetching next number:",o)}},Q=async s=>{const o=s.target.files[0],r=new FormData;r.append("image",o);try{const E=await Z.post("https://gateway.berkompeten.com/api/admin/master/upload-image",r,{headers:{Authorization:`Bearer ${y}`,"Content-Type":"multipart/form-data"}});l.image_url=E.data.data.image_url}catch(E){console.error("Error uploading image:",E)}},G=()=>{l.image_url="",l.is_active=l.is_active?1:0};j(()=>l.question_packet_id,(s,o)=>{console.log(`question_packet_id changed from ${o} to ${s}`),s&&!a&&R()}),Pe(()=>{I(),T(),a?c(a):localStorage.removeItem("question_id")});const V=s=>{T(s)};return j(()=>l.subtopic_list_id,s=>{s===""&&T("")}),(s,o)=>(se(),Ve(Se,null,{default:m(()=>[t(A,{cols:"12"},{default:m(()=>[t(it,{title:"Question Details"},{default:m(()=>[t(Ce,{class:"d-flex"},{default:m(()=>[t(ct,{rounded:"lg",size:"100",class:"me-6",image:M.value},null,8,["image"]),te("form",Lt,[te("div",$t,[t(pe,{color:"#0080ff",onClick:o[0]||(o[0]=r=>{var E;return(E=$(b))==null?void 0:E.click()})},{default:m(()=>[t(ye,{icon:"ri-upload-cloud-line",class:"d-sm-none"}),zt]),_:1}),te("input",{ref_key:"refInputEl",ref:b,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:Q},null,544),t(pe,{type:"reset",color:"error",variant:"outlined",onClick:G},{default:m(()=>[Kt,t(ye,{icon:"ri-refresh-line",class:"d-sm-none"})]),_:1})]),jt,u.image_url?(se(),qe("div",Gt,[te("span",Ht,we(u.image_url[0]),1)])):he("",!0)])]),_:1}),t(dt),t(Ce,null,{default:m(()=>[t(mt,{onSubmit:ut(h,["prevent"])},{default:m(()=>[t(Se,null,{default:m(()=>[t(A,{cols:"12"},{default:m(()=>[t(pt,{modelValue:l.question_packet_id,"onUpdate:modelValue":o[1]||(o[1]=r=>l.question_packet_id=r),"error-messages":u.question_packet_id,label:"Question Packet",items:$(_),placeholder:"Select question packet","item-value":"id","item-title":"name"},null,8,["modelValue","error-messages","items"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(Tt,{modelValue:l.subtopic_list_id,"onUpdate:modelValue":o[2]||(o[2]=r=>l.subtopic_list_id=r),"error-messages":u.subtopic_list_id,label:"Sub Topic List",items:$(i),placeholder:"Select Sub Topic List","item-value":"id","item-title":"name","search-input":s.searchInput,"onUpdate:searchInput":V},null,8,["modelValue","error-messages","items","search-input"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(K,{modelValue:l.question_number,"onUpdate:modelValue":o[3]||(o[3]=r=>l.question_number=r),"error-messages":u.question_number,label:"Question Number",readonly:""},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(K,{modelValue:l.scenario,"onUpdate:modelValue":o[4]||(o[4]=r=>l.scenario=r),"error-messages":u.scenario,label:"Scenario"},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(Ne,{modelValue:l.question,"onUpdate:modelValue":o[5]||(o[5]=r=>l.question=r),"error-messages":u.question,label:"Question",placeholder:"Enter question"},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(K,{modelValue:l.option_a,"onUpdate:modelValue":o[6]||(o[6]=r=>l.option_a=r),"error-messages":u.option_a,label:"Option A",placeholder:"Enter option A"},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(K,{modelValue:l.option_b,"onUpdate:modelValue":o[7]||(o[7]=r=>l.option_b=r),"error-messages":u.option_b,label:"Option B",placeholder:"Enter option B"},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(K,{modelValue:l.option_c,"onUpdate:modelValue":o[8]||(o[8]=r=>l.option_c=r),"error-messages":u.option_c,label:"Option C",placeholder:"Enter option C"},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(K,{modelValue:l.option_d,"onUpdate:modelValue":o[9]||(o[9]=r=>l.option_d=r),"error-messages":u.option_d,label:"Option D",placeholder:"Enter option D"},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(K,{modelValue:l.option_e,"onUpdate:modelValue":o[10]||(o[10]=r=>l.option_e=r),"error-messages":u.option_e,label:"Option E",placeholder:"Enter option E"},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(K,{modelValue:l.correct_answer,"onUpdate:modelValue":o[11]||(o[11]=r=>l.correct_answer=r),"error-messages":u.correct_answer,label:"Correct Answer",placeholder:"Enter correct answer"},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(Ne,{modelValue:l.discussion,"onUpdate:modelValue":o[12]||(o[12]=r=>l.discussion=r),"error-messages":u.discussion,label:"Discussion",placeholder:"Enter discussion"},null,8,["modelValue","error-messages"])]),_:1}),t(A,{cols:"12"},{default:m(()=>[t(Rt,{color:"#0080ff",modelValue:l.is_active,"onUpdate:modelValue":o[13]||(o[13]=r=>l.is_active=r),"error-messages":u.is_active,label:"Is Active"},null,8,["modelValue","error-messages"]),u.image_url?(se(),qe("div",Qt)):he("",!0)]),_:1}),t(A,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:m(()=>[t(pe,{type:"submit",color:"#0080ff"},{default:m(()=>[ie("Save")]),_:1}),t(pe,{onClick:D,color:"secondary",variant:"outlined"},{default:m(()=>[ie("Reset")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(Ce,null,{default:m(()=>[$(S)?(se(),Ve(Te,{key:0,type:"success",dismissible:"","onClick:close":o[14]||(o[14]=r=>S.value="")},{default:m(()=>[ie(we($(S)),1)]),_:1})):he("",!0),$(d)?(se(),Ve(Te,{key:1,type:"error",dismissible:"","onClick:close":o[15]||(o[15]=r=>d.value="")},{default:m(()=>[ie(we($(d)),1)]),_:1})):he("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}},Va={__name:"question-detail",setup(e){const f=localStorage.getItem("token"),a=F(null),_=Ke();return Pe(async()=>{if(f)try{const i=await Z.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${f}`}});a.value=i.data}catch(i){i.response&&i.response.status===401&&_.push("/login")}else _.push("/login")}),(i,l)=>(se(),Ve(Se,{class:"match-height"},{default:m(()=>[t(A,{cols:"12",md:"12"},{default:m(()=>[t(Jt)]),_:1})]),_:1}))}};export{Va as default};
