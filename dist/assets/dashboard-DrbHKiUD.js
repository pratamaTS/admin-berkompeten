import{a as n}from"./VGrid-CSSzMaaB.js";import{f as c,u as l,M as u,g as m,H as i,e as p,J as f,o as g}from"./index-CPp79PcY.js";import{V as k}from"./VRow-BeiFp3aB.js";const v={__name:"dashboard",setup(h){const a=c(null),r=l(),s=u();var e=localStorage.getItem("token");return m(async()=>{const t=s.query.token;if(console.log("token get das: ",t),t&&(e=t,localStorage.setItem("token",e),console.log("token from route: ",e)),e)try{const o=await n.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${e}`}});console.log(o),a.value=o.data}catch(o){o.response&&o.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("profile"),r.push("/login"))}else r.push("/login")}),(t,o)=>i(e)?(g(),p(k,{key:0,class:"match-height"})):f("",!0)}};export{v as default};