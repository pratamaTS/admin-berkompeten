import{a as m}from"./VGrid-Ba-3M4gR.js";import{_ as j,f as g,u as B,g as M,o as h,e as v,w as s,d as a,H as R,a as o,t as d,X as S,b,c as P,F as q,W as D,Q as L,R as T}from"./index-DnZYFYUY.js";import{b as V,c as N,V as u,a as p}from"./VCardItem-CWrf9pCa.js";import{V as E}from"./VImg-DonsHJwK.js";import{V as F}from"./VCard-BaxeRZUM.js";const H="/assets/review-DBMVeA3p.png",y=c=>(L("data-v-9e792eb8"),c=c(),T(),c),K=y(()=>o("span",{style:{color:"#0080ff","font-size":"larger"}},[o("b",null,"Review kembali hasil pengerjaan test Anda")],-1)),U={class:"me-n3",style:{padding:"20px"}},W=y(()=>o("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"}," Soal yang telah dikerjakan: ",-1)),X={style:{color:"#0080ff","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},G=y(()=>o("p",{style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"}," Soal yang belum dikerjakan: ",-1)),J={style:{color:"red","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},O={style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},Y={style:{color:"#0080ff"}},Z={style:{"max-block-size":"300px","overflow-y":"auto"}},ee={class:"me-n3",style:{padding:"10px"}},te={style:{color:"black","padding-block-start":"15px"},class:"font-weight-semibold mb-1"},se={__name:"QuestionReview",setup(c){const l=g({}),_=g([]),n=B();var r=localStorage.getItem("token");const i=g([]);M(async()=>{await z(),await C()});const z=async()=>{if(r)try{const e=localStorage.getItem("paket"),t=await m.get("https://gateway.berkompeten.com/api/student/user/test/review?id="+e,{headers:{Authorization:`Bearer ${r}`}});l.value=t.data.data}catch(e){k(e)}else n.push("/login")},C=async()=>{if(r)try{const e=localStorage.getItem("paket"),t=await m.get("https://gateway.berkompeten.com/api/student/user/skip/questions?id="+e,{headers:{Authorization:`Bearer ${r}`}});_.value=t.data.data}catch(e){k(e)}else n.push("/login")},k=e=>{e.response&&e.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),n.push("/login"))},Q=()=>{n.push("/soal")},A=async()=>{const e=localStorage.getItem("paket");try{console.log("paket id: ",e);const t=await m.post("https://gateway.berkompeten.com/api/student/user/finish-the-test",{question_packet_id:e},{headers:{Authorization:`Bearer ${r}`}});n.push("/result")}catch(t){k(t),t.response&&t.response.data&&(errorMessage.value=t.response.data.errors)}},$=async e=>{try{localStorage.setItem("number",e),n.push("/soal")}catch(t){console.error("answer failed:",t),t.response&&t.response.data?errorMessage.value=t.response.data.errors:errorMessage.value="An unexpected error occurred during login."}},w=(e,t)=>{i.value[e]&&(t?i.value[e].classList.add("hovered"):i.value[e].classList.remove("hovered"))};return(e,t)=>(h(),v(F,null,{default:s(()=>[a(V,{class:"text-center"},{default:s(()=>[a(E,{src:R(H),style:{"block-size":"150px","inline-size":"150px"},class:"mx-auto"},null,8,["src"]),a(N,null,{default:s(()=>[K]),_:1}),o("div",U,[a(u,{align:"center"},{default:s(()=>[a(p,{cols:"6",md:"6"},{default:s(()=>[W,o("p",X,d(l.value.total_answered),1)]),_:1}),a(p,{cols:"6",md:"6"},{default:s(()=>[G,o("p",J,d(l.value.total_skip),1)]),_:1})]),_:1}),a(u,{class:"justify-center"},{default:s(()=>[a(p,{cols:"6",class:"mb-1"},{default:s(()=>[a(S,{onClick:A,color:"#0080ff",block:""},{default:s(()=>[b("Selesaikan Tes")]),_:1})]),_:1}),a(p,{cols:"6",class:"mb-1"},{default:s(()=>[a(S,{onClick:Q,color:"#0080ff",variant:"outlined",block:""},{default:s(()=>[b(" Kembali Mengerjakan ")]),_:1})]),_:1})]),_:1}),a(u,{class:"d-flex flex-wrap justify-center"},{default:s(()=>[o("p",O,[b(" Berikut di bawah ini adalah soal-soal yang belum diberikan jawaban : "),o("span",Y,"Ada "+d(l.value.total_skip)+" Soal",1)])]),_:1})])]),_:1}),o("div",Z,[(h(!0),P(q,null,D(_.value,(f,x)=>(h(),v(V,{key:f.id,class:"outlined-card-item",onClick:I=>$(f.question_number),onMouseenter:I=>w(x,!0),onMouseleave:I=>w(x,!1),ref_for:!0,ref_key:"cardItems",ref:i},{default:s(()=>[o("div",ee,[a(u,{align:"center"},{default:s(()=>[o("p",te,d(f.question_number)+" "+d(f.question),1)]),_:2},1024)])]),_:2},1032,["onClick","onMouseenter","onMouseleave"]))),128))])]),_:1}))}},ae=j(se,[["__scopeId","data-v-9e792eb8"]]),ie={__name:"question-packet-review",setup(c){const l=localStorage.getItem("token"),_=g(null),n=B();return M(async()=>{if(l)try{const r=await m.get("https://gateway.berkompeten.com/api/student/profile",{headers:{Authorization:`Bearer ${l}`}});_.value=r.data}catch(r){r.response&&r.response.status===401&&n.push("/login")}else n.push("/login")}),(r,i)=>(h(),v(u,{class:"match-height"},{default:s(()=>[a(p,{cols:"12",md:"12"},{default:s(()=>[a(ae)]),_:1})]),_:1}))}};export{ie as default};
