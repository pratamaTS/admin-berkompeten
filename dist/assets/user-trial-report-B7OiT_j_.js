import{a as Ne}from"./VGrid-BYjwICuz.js";import{aF as _t,p as L,m as Ge,j as Me,l as G,aG as He,B as U,d as o,f as $,aH as kt,I as q,ar as wt,aI as Vt,at as It,i as Dt,aJ as Tt,k as Ct,aK as Bt,a3 as j,x as se,av as Lt,L as At,ac as Ft,aL as ge,aM as $t,a0 as _,aq as te,s as C,a1 as H,G as R,aN as we,$ as Ve,ag as je,aO as Q,aP as J,ak as ce,aQ as Ot,aj as K,aR as Rt,aS as Et,aT as Ue,a7 as fe,aU as re,aV as ae,aW as Nt,aB as Gt,q as Mt,aD as Ht,F as W,V as jt,b as T,am as Ie,t as F,an as ve,aX as le,aY as Ut,N as ze,_ as zt,u as qe,O as qt,o as z,e as ee,w,J as De,c as Kt,a2 as Wt,Q as Qt,R as Jt,a as V,g as Xt}from"./index-C36xa0Wr.js";import{V as Te}from"./VCard-BLZKdDOb.js";import{V as Ce}from"./VCardTitle-nMYPEHtL.js";import{V as Be,a as me,b as ne}from"./VCardText-4NTKzozB.js";import{V as Yt}from"./VForm-U5JDSMGo.js";import{V as Zt}from"./VTextField-db20J-lE.js";import{V as Le}from"./VAlert-By6MTNh1.js";import{V as ea}from"./VSelect--56JqYJU.js";import{V as he}from"./VCheckboxBtn-DPdo2lN-.js";import{m as ta,V as Ae}from"./VTable-Dfv0vLqx.js";import{m as aa,u as la}from"./filter-Bto-mwRW.js";import{V as Ke}from"./ssrBoot-Bru9ZXGm.js";import{c as na,V as ra}from"./VList-DH-Neb7v.js";import"./VAvatar-B9gDgSow.js";import"./VImg-BFE3XH6t.js";import"./index-BXCnWi6L.js";import"./forwardRefs-CqyWju4A.js";import"./VOverlay-D8l69ZI1.js";import"./lazy-CtDkSPpA.js";import"./VMenu-DMLDTa3z.js";import"./VChip-70J_-hO3.js";import"./VSelectionControl-WpaTkqco.js";function Fe(e,l,a){return Object.keys(e).filter(t=>_t(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}const sa=L({fluid:{type:Boolean,default:!1},...Ge(),...Me()},"VContainer"),oa=G()({name:"VContainer",props:sa(),setup(e,l){let{slots:a}=l;const{rtlClasses:t}=He();return U(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},a)),{}}});function ua(){const e=$([]);kt(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const ia=L({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:q,default:"$first"},prevIcon:{type:q,default:"$prev"},nextIcon:{type:q,default:"$next"},lastIcon:{type:q,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...wt(),...Ge(),...Vt(),...It(),...Dt(),...Tt(),...Me({tag:"nav"}),...Ct(),...Bt({variant:"text"})},"VPagination"),da=G()({name:"VPagination",props:ia(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=j(e,"modelValue"),{t:r,n:d}=se(),{isRtl:u}=He(),{themeClasses:s}=Lt(e),{width:f}=At(),c=Ft(-1);ge(void 0,{scoped:!0});const{resizeRef:g}=$t(y=>{if(!y.length)return;const{target:P,contentRect:k}=y[0],B=P.querySelector(".v-pagination__list > *");if(!B)return;const O=k.width,M=B.offsetWidth+parseFloat(getComputedStyle(B).marginRight)*2;c.value=p(O,M)}),i=_(()=>parseInt(e.length,10)),m=_(()=>parseInt(e.start,10)),h=_(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):c.value>=0?c.value:p(f.value,58));function p(y,P){const k=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((y-P*k)/P).toFixed(2)))}const v=_(()=>{if(i.value<=0||isNaN(i.value)||i.value>Number.MAX_SAFE_INTEGER)return[];if(h.value<=0)return[];if(h.value===1)return[n.value];if(i.value<=h.value)return te(i.value,m.value);const y=h.value%2===0,P=y?h.value/2:Math.floor(h.value/2),k=y?P:P+1,B=i.value-P;if(k-n.value>=0)return[...te(Math.max(1,h.value-1),m.value),e.ellipsis,i.value];if(n.value-B>=(y?1:0)){const O=h.value-1,M=i.value-O+m.value;return[m.value,e.ellipsis,...te(O,M)]}else{const O=Math.max(1,h.value-3),M=O===1?n.value:n.value-Math.ceil(O/2)+m.value;return[m.value,e.ellipsis,...te(O,M),e.ellipsis,i.value]}});function b(y,P,k){y.preventDefault(),n.value=P,k&&t(k,P)}const{refs:S,updateRef:D}=ua();ge({VPaginationBtn:{color:C(e,"color"),border:C(e,"border"),density:C(e,"density"),size:C(e,"size"),variant:C(e,"variant"),rounded:C(e,"rounded"),elevation:C(e,"elevation")}});const x=_(()=>v.value.map((y,P)=>{const k=B=>D(B,P);if(typeof y=="string")return{isActive:!1,key:`ellipsis-${P}`,page:y,props:{ref:k,ellipsis:!0,icon:!0,disabled:!0}};{const B=y===n.value;return{isActive:B,key:y,page:d(y),props:{ref:k,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:B?e.activeColor:e.color,ariaCurrent:B,ariaLabel:r(B?e.currentPageAriaLabel:e.pageAriaLabel,y),onClick:O=>b(O,y)}}}})),A=_(()=>{const y=!!e.disabled||n.value<=m.value,P=!!e.disabled||n.value>=m.value+i.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:k=>b(k,m.value,"first"),disabled:y,ariaLabel:r(e.firstAriaLabel),ariaDisabled:y}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:k=>b(k,n.value-1,"prev"),disabled:y,ariaLabel:r(e.previousAriaLabel),ariaDisabled:y},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:k=>b(k,n.value+1,"next"),disabled:P,ariaLabel:r(e.nextAriaLabel),ariaDisabled:P},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:k=>b(k,m.value+i.value-1,"last"),disabled:P,ariaLabel:r(e.lastAriaLabel),ariaDisabled:P}:void 0}});function N(){var P;const y=n.value-m.value;(P=S.value[y])==null||P.$el.focus()}function X(y){y.key===we.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,Ve(N)):y.key===we.right&&!e.disabled&&n.value<m.value+i.value-1&&(n.value=n.value+1,Ve(N))}return U(()=>o(e.tag,{ref:g,class:["v-pagination",s.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:X,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(A.value.first):o(H,R({_as:"VPaginationBtn"},A.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(A.value.prev):o(H,R({_as:"VPaginationBtn"},A.value.prev),null)]),x.value.map((y,P)=>o("li",{key:y.key,class:["v-pagination__item",{"v-pagination__item--is-active":y.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(y):o(H,R({_as:"VPaginationBtn"},y.props),{default:()=>[y.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(A.value.next):o(H,R({_as:"VPaginationBtn"},A.value.next),null)]),e.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(A.value.last):o(H,R({_as:"VPaginationBtn"},A.value.last),null)])])]})),{}}}),ca=L({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),We=Symbol.for("vuetify:data-table-pagination");function fa(e){const l=j(e,"page",void 0,t=>+(t??1)),a=j(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function va(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=_(()=>a.value===-1?0:a.value*(l.value-1)),r=_(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),d=_(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));je(()=>{l.value>d.value&&(l.value=d.value)});function u(i){a.value=i,l.value=1}function s(){l.value=ce(l.value+1,1,d.value)}function f(){l.value=ce(l.value-1,1,d.value)}function c(i){l.value=ce(i,1,d.value)}const g={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:d,itemsLength:t,nextPage:s,prevPage:f,setPage:c,setItemsPerPage:u};return Q(We,g),g}function ga(){const e=J(We);if(!e)throw new Error("Missing pagination!");return e}function ma(e){const{items:l,startIndex:a,stopIndex:t,itemsPerPage:n}=e;return{paginatedItems:_(()=>n.value<=0?l.value:l.value.slice(a.value,t.value))}}const Qe=L({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),$e=G()({name:"VDataTableFooter",props:Qe(),setup(e,l){let{slots:a}=l;const{t}=se(),{page:n,pageCount:r,startIndex:d,stopIndex:u,itemsLength:s,itemsPerPage:f,setItemsPerPage:c}=ga(),g=_(()=>e.itemsPerPageOptions.map(i=>typeof i=="number"?{value:i,title:i===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(i)}:{...i,title:t(i.title)}));return U(()=>{var i;return o("div",{class:"v-data-table-footer"},[(i=a.prepend)==null?void 0:i.call(a),o("div",{class:"v-data-table-footer__items-per-page"},[o("span",null,[t(e.itemsPerPageText)]),o(ea,{items:g.value,modelValue:f.value,"onUpdate:modelValue":m=>c(Number(m)),density:"compact",variant:"outlined","hide-details":!0},null)]),o("div",{class:"v-data-table-footer__info"},[o("div",null,[t(e.pageText,s.value?d.value+1:0,u.value,s.value)])]),o("div",{class:"v-data-table-footer__pagination"},[o(da,{modelValue:n.value,"onUpdate:modelValue":m=>n.value=m,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},null)])])}),{}}}),be=Ot({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return o(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:K(e.height),width:K(e.width),left:K(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),pa=L({headers:Array},"DataTable-header"),Je=Symbol.for("vuetify:data-table-headers"),Xe={title:"",sortable:!1},ha={...Xe,width:48};function ba(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function pe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)pe(a,l);return l}function Ye(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&Ye(a.children,l);return l}function ya(e){if(e.key){if(e.key==="data-table-group")return Xe;if(["data-table-expand","data-table-select"].includes(e.key))return ha}}function ye(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>ye(a,l+1))):l}function xa(e){let l=!1;function a(r){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(d&&(r.fixed=!0),r.fixed)if(r.children)for(let u=r.children.length-1;u>=0;u--)a(r.children[u],!0);else l?isNaN(+r.width)&&Et(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let u=r.children.length-1;u>=0;u--)a(r.children[u]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return d;if(r.children){r.fixedOffset=d;for(const u of r.children)d=t(u,d)}else r.fixed&&(r.fixedOffset=d,d+=parseFloat(r.width||"0")||0);return d}let n=0;for(const r of e)n=t(r,n)}function Pa(e,l){const a=[];let t=0;const n=ba(e);for(;n.size()>0;){let d=n.count();const u=[];let s=1;for(;d>0;){const{element:f,priority:c}=n.dequeue(),g=l-t-ye(f);if(u.push({...f,rowspan:g??1,colspan:f.children?pe(f).length:1}),f.children)for(const i of f.children){const m=c%1+s/Math.pow(10,t+2);n.enqueue(i,t+g+m)}s+=1,d-=1}t+=1,a.push(u)}return{columns:e.map(d=>pe(d)).flat(),headers:a}}function Ze(e){const l=[];for(const a of e){const t={...ya(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,d={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?Ze(t.children):void 0};l.push(d)}return l}function Sa(e,l){const a=$([]),t=$([]),n=$(),r=$();je(()=>{var h,p,v;const s=(e.headers||Object.keys(e.items[0]??{}).map(b=>({key:b,title:Rt(b)}))).slice(),f=Ye(s);(h=l==null?void 0:l.groupBy)!=null&&h.value.length&&!f.has("data-table-group")&&s.unshift({key:"data-table-group",title:"Group"}),(p=l==null?void 0:l.showSelect)!=null&&p.value&&!f.has("data-table-select")&&s.unshift({key:"data-table-select"}),(v=l==null?void 0:l.showExpand)!=null&&v.value&&!f.has("data-table-expand")&&s.push({key:"data-table-expand"});const c=Ze(s);xa(c);const g=Math.max(...c.map(b=>ye(b)))+1,i=Pa(c,g);a.value=i.headers,t.value=i.columns;const m=i.headers.flat(1);n.value=m.reduce((b,S)=>(S.sortable&&S.key&&S.sort&&(b[S.key]=S.sort),b),{}),r.value=m.reduce((b,S)=>(S.key&&S.filter&&(b[S.key]=S.filter),b),{})});const d={headers:a,columns:t,sortFunctions:n,filterFunctions:r};return Q(Je,d),d}function oe(){const e=J(Je);if(!e)throw new Error("Missing headers!");return e}const _a={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},et={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return et.select({items:a,value:l,selected:t})}},tt={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return tt.select({items:a,value:l,selected:t})}},ka=L({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Ue}},"DataTable-select"),at=Symbol.for("vuetify:data-table-selection");function wa(e,l){let{allItems:a,currentPage:t}=l;const n=j(e,"modelValue",e.modelValue,v=>new Set(fe(v).map(b=>{var S;return((S=a.value.find(D=>e.valueComparator(b,D.value)))==null?void 0:S.value)??b})),v=>[...v.values()]),r=_(()=>a.value.filter(v=>v.selectable)),d=_(()=>t.value.filter(v=>v.selectable)),u=_(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return _a;case"all":return tt;case"page":default:return et}});function s(v){return fe(v).every(b=>n.value.has(b.value))}function f(v){return fe(v).some(b=>n.value.has(b.value))}function c(v,b){const S=u.value.select({items:v,value:b,selected:new Set(n.value)});n.value=S}function g(v){c([v],!s([v]))}function i(v){const b=u.value.selectAll({value:v,allItems:r.value,currentPage:d.value,selected:new Set(n.value)});n.value=b}const m=_(()=>n.value.size>0),h=_(()=>{const v=u.value.allSelected({allItems:r.value,currentPage:d.value});return!!v.length&&s(v)}),p={toggleSelect:g,select:c,selectAll:i,isSelected:s,isSomeSelected:f,someSelected:m,allSelected:h,showSelectAll:u.value.showSelectAll};return Q(at,p),p}function ue(){const e=J(at);if(!e)throw new Error("Missing selection!");return e}const Va=L({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),lt=Symbol.for("vuetify:data-table-sort");function Ia(e){const l=j(e,"sortBy"),a=C(e,"mustSort"),t=C(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function Da(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=s=>{if(s.key==null)return;let f=l.value.map(g=>({...g}))??[];const c=f.find(g=>g.key===s.key);c?c.order==="desc"?a.value?c.order="asc":f=f.filter(g=>g.key!==s.key):c.order="desc":t.value?f=[...f,{key:s.key,order:"asc"}]:f=[{key:s.key,order:"asc"}],l.value=f,n&&(n.value=1)};function d(s){return!!l.value.find(f=>f.key===s.key)}const u={sortBy:l,toggleSort:r,isSorted:d};return Q(lt,u),u}function Ta(){const e=J(lt);if(!e)throw new Error("Missing sort!");return e}function Ca(e,l,a,t){const n=se();return{sortedItems:_(()=>a.value.length?Ba(l.value,a.value,n.current.value,{...e.customKeySort,...t==null?void 0:t.value}):l.value)}}function Ba(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((r,d)=>{for(let u=0;u<l.length;u++){const s=l[u].key,f=l[u].order??"asc";if(f===!1)continue;let c=re(r.raw,s),g=re(d.raw,s);if(f==="desc"&&([c,g]=[g,c]),t!=null&&t[s]){const i=t[s](c,g);if(!i)continue;return i}if(c instanceof Date&&g instanceof Date)return c.getTime()-g.getTime();if([c,g]=[c,g].map(i=>i!=null?i.toString().toLocaleLowerCase():i),c!==g)return ae(c)&&ae(g)?0:ae(c)?-1:ae(g)?1:!isNaN(c)&&!isNaN(g)?Number(c)-Number(g):n.compare(c,g)}return 0})}const nt=L({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:q,default:"$sortAsc"},sortDescIcon:{type:q,default:"$sortDesc"},...Nt()},"VDataTableHeaders"),Oe=G()({name:"VDataTableHeaders",props:nt(),setup(e,l){let{slots:a}=l;const{toggleSort:t,sortBy:n,isSorted:r}=Ta(),{someSelected:d,allSelected:u,selectAll:s,showSelectAll:f}=ue(),{columns:c,headers:g}=oe(),{loaderClasses:i}=Gt(e);function m(D,x){if(!(!e.sticky&&!D.fixed))return{position:"sticky",left:D.fixed?K(D.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${x})`:void 0}}function h(D){const x=n.value.find(A=>A.key===D.key);return x?x.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:p,backgroundColorStyles:v}=Mt(e,"color"),b=_(()=>({headers:g.value,columns:c.value,toggleSort:t,isSorted:r,sortBy:n.value,someSelected:d.value,allSelected:u.value,selectAll:s,getSortIcon:h})),S=D=>{let{column:x,x:A,y:N}=D;const X=x.key==="data-table-select"||x.key==="data-table-expand";return o(be,R({tag:"th",align:x.align,class:["v-data-table__th",{"v-data-table__th--sortable":x.sortable,"v-data-table__th--sorted":r(x),"v-data-table__th--fixed":x.fixed},i.value],style:{width:K(x.width),minWidth:K(x.minWidth),...m(x,N)},colspan:x.colspan,rowspan:x.rowspan,onClick:x.sortable?()=>t(x):void 0,fixed:x.fixed,lastFixed:x.lastFixed,noPadding:X},x.headerProps),{default:()=>{var k;const y=`header.${x.key}`,P={column:x,selectAll:s,isSorted:r,toggleSort:t,sortBy:n.value,someSelected:d.value,allSelected:u.value,getSortIcon:h};return a[y]?a[y](P):x.key==="data-table-select"?((k=a["header.data-table-select"])==null?void 0:k.call(a,P))??(f&&o(he,{modelValue:u.value,indeterminate:d.value&&!u.value,"onUpdate:modelValue":s},null)):o("div",{class:"v-data-table-header__content"},[o("span",null,[x.title]),x.sortable&&o(jt,{key:"icon",class:"v-data-table-header__sort-icon",icon:h(x)},null),e.multiSort&&r(x)&&o("div",{key:"badge",class:["v-data-table-header__sort-badge",...p.value],style:v.value},[n.value.findIndex(B=>B.key===x.key)+1])])}})};U(()=>o(W,null,[a.headers?a.headers(b.value):g.value.map((D,x)=>o("tr",null,[D.map((A,N)=>o(S,{column:A,x:N,y:x},null))])),e.loading&&o("tr",{class:"v-data-table-progress"},[o("th",{colspan:c.value.length},[o(Ht,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),La=L({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),rt=Symbol.for("vuetify:data-table-group");function Aa(e){return{groupBy:j(e,"groupBy")}}function Fa(e){const{groupBy:l,sortBy:a}=e,t=$(new Set),n=_(()=>l.value.map(f=>({...f,order:f.order??!1})).concat(a.value));function r(f){return t.value.has(f.id)}function d(f){const c=new Set(t.value);r(f)?c.delete(f.id):c.add(f.id),t.value=c}function u(f){function c(g){const i=[];for(const m of g.items)"type"in m&&m.type==="group"?i.push(...c(m)):i.push(m);return i}return c({type:"group",items:f,id:"dummy",key:"dummy",value:"dummy",depth:0})}const s={sortByWithGroups:n,toggleGroup:d,opened:t,groupBy:l,extractRows:u,isGroupOpen:r};return Q(rt,s),s}function st(){const e=J(rt);if(!e)throw new Error("Missing group!");return e}function $a(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=re(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function ot(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=$a(e,l[0]),r=[],d=l.slice(1);return n.forEach((u,s)=>{const f=l[0],c=`${t}_${f}_${s}`;r.push({depth:a,id:c,key:f,value:s,items:d.length?ot(u,d,a+1,c):u,type:"group"})}),r}function ut(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...ut(t.items,l))):a.push(t);return a}function Oa(e,l,a){return{flatItems:_(()=>{if(!l.value.length)return e.value;const n=ot(e.value,l.value.map(r=>r.key));return ut(n,a.value)})}}const Ra=L({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Ea=G()({name:"VDataTableGroupHeaderRow",props:Ra(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=st(),{isSelected:d,isSomeSelected:u,select:s}=ue(),{columns:f}=oe(),c=_(()=>r([e.item]));return()=>o("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[f.value.map(g=>{var i,m;if(g.key==="data-table-group"){const h=t(e.item)?"$expand":"$next",p=()=>n(e.item);return((i=a["data-table-group"])==null?void 0:i.call(a,{item:e.item,count:c.value.length,props:{icon:h,onClick:p}}))??o(be,{class:"v-data-table-group-header-row__column"},{default:()=>[o(H,{size:"small",variant:"text",icon:h,onClick:p},null),o("span",null,[e.item.value]),o("span",null,[T("("),c.value.length,T(")")])]})}if(g.key==="data-table-select"){const h=d(c.value),p=u(c.value)&&!h,v=b=>s(c.value,b);return((m=a["data-table-select"])==null?void 0:m.call(a,{props:{modelValue:h,indeterminate:p,"onUpdate:modelValue":v}}))??o("td",null,[o(he,{modelValue:h,indeterminate:p,"onUpdate:modelValue":v},null)])}return o("td",null,null)})])}}),Na=L({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),it=Symbol.for("vuetify:datatable:expanded");function Ga(e){const l=C(e,"expandOnClick"),a=j(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function t(u,s){const f=new Set(a.value);s?f.add(u.value):f.delete(u.value),a.value=f}function n(u){return a.value.has(u.value)}function r(u){t(u,!n(u))}const d={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return Q(it,d),d}function dt(){const e=J(it);if(!e)throw new Error("foo");return e}const Ma=L({index:Number,item:Object,cellProps:[Object,Function],onClick:ve(),onContextmenu:ve(),onDblclick:ve()},"VDataTableRow"),Ha=G()({name:"VDataTableRow",props:Ma(),setup(e,l){let{slots:a}=l;const{isSelected:t,toggleSelect:n}=ue(),{isExpanded:r,toggleExpand:d}=dt(),{columns:u}=oe();U(()=>o("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&u.value.map((s,f)=>{const c=e.item,g=`item.${s.key}`,i={index:e.index,item:c.raw,internalItem:c,value:re(c.columns,s.key),column:s,isSelected:t,toggleSelect:n,isExpanded:r,toggleExpand:d},m=typeof e.cellProps=="function"?e.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value,column:s}):e.cellProps,h=typeof s.cellProps=="function"?s.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value}):s.cellProps;return o(be,R({align:s.align,fixed:s.fixed,fixedOffset:s.fixedOffset,lastFixed:s.lastFixed,noPadding:s.key==="data-table-select"||s.key==="data-table-expand",width:s.width},m,h),{default:()=>{var p,v;return a[g]?a[g](i):s.key==="data-table-select"?((p=a["item.data-table-select"])==null?void 0:p.call(a,i))??o(he,{disabled:!c.selectable,modelValue:t([c]),onClick:Ie(()=>n(c),["stop"])},null):s.key==="data-table-expand"?((v=a["item.data-table-expand"])==null?void 0:v.call(a,i))??o(H,{icon:r(c)?"$collapse":"$expand",size:"small",variant:"text",onClick:Ie(()=>d(c),["stop"])},null):F(i.value)}})})]))}}),ct=L({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),Re=G()({name:"VDataTableRows",inheritAttrs:!1,props:ct(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=oe(),{expandOnClick:r,toggleExpand:d,isExpanded:u}=dt(),{isSelected:s,toggleSelect:f}=ue(),{toggleGroup:c,isGroupOpen:g}=st(),{t:i}=se();return U(()=>{var m,h;return e.loading&&(!e.items.length||t.loading)?o("tr",{class:"v-data-table-rows-loading",key:"loading"},[o("td",{colspan:n.value.length},[((m=t.loading)==null?void 0:m.call(t))??i(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?o("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[o("td",{colspan:n.value.length},[((h=t["no-data"])==null?void 0:h.call(t))??i(e.noDataText)])]):o(W,null,[e.items.map((p,v)=>{var D;if(p.type==="group"){const x={index:v,item:p,columns:n.value,isExpanded:u,toggleExpand:d,isSelected:s,toggleSelect:f,toggleGroup:c,isGroupOpen:g};return t["group-header"]?t["group-header"](x):o(Ea,R({key:`group-header_${p.id}`,item:p},Fe(a,":group-header",()=>x)),t)}const b={index:v,item:p.raw,internalItem:p,columns:n.value,isExpanded:u,toggleExpand:d,isSelected:s,toggleSelect:f},S={...b,props:R({key:`item_${p.key??p.index}`,onClick:r.value?()=>{d(p)}:void 0,index:v,item:p,cellProps:e.cellProps},Fe(a,":row",()=>b),typeof e.rowProps=="function"?e.rowProps({item:b.item,index:b.index,internalItem:b.internalItem}):e.rowProps)};return o(W,{key:S.props.key},[t.item?t.item(S):o(Ha,S.props,t),u(p)&&((D=t["expanded-row"])==null?void 0:D.call(t,b))])})])}),{}}}),ja=L({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Ua(e,l,a,t){const n=e.returnObject?l:le(l,e.itemValue),r=le(l,e.itemSelectable,!0),d=t.reduce((u,s)=>(s.key!=null&&(u[s.key]=le(l,s.value)),u),{});return{type:"item",key:e.returnObject?le(l,e.itemValue):n,index:a,value:n,selectable:r,columns:d,raw:l}}function za(e,l,a){return l.map((t,n)=>Ua(e,t,n,a))}function qa(e,l){return{items:_(()=>za(e,e.items,l.value))}}function Ka(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const d=Ut("VDataTable"),u=_(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let s=null;ze(u,()=>{Ue(s,u.value)||((s==null?void 0:s.search)!==u.value.search&&(l.value=1),d.emit("update:options",u.value),s=u.value)},{deep:!0,immediate:!0})}const Wa=L({...ct(),width:[String,Number],search:String,...Na(),...La(),...pa(),...ja(),...ka(),...Va(),...nt(),...ta()},"DataTable"),Qa=L({...ca(),...Wa(),...aa(),...Qe()},"VDataTable"),Ee=G()({name:"VDataTable",props:Qa(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=Aa(e),{sortBy:r,multiSort:d,mustSort:u}=Ia(e),{page:s,itemsPerPage:f}=fa(e),{columns:c,headers:g,sortFunctions:i,filterFunctions:m}=Sa(e,{groupBy:n,showSelect:C(e,"showSelect"),showExpand:C(e,"showExpand")}),{items:h}=qa(e,c),p=C(e,"search"),{filteredItems:v}=la(e,h,p,{transform:Y=>Y.columns,customKeyFilter:m}),{toggleSort:b}=Da({sortBy:r,multiSort:d,mustSort:u,page:s}),{sortByWithGroups:S,opened:D,extractRows:x,isGroupOpen:A,toggleGroup:N}=Fa({groupBy:n,sortBy:r}),{sortedItems:X}=Ca(e,v,S,i),{flatItems:y}=Oa(X,n,D),P=_(()=>y.value.length),{startIndex:k,stopIndex:B,pageCount:O,setItemsPerPage:M}=va({page:s,itemsPerPage:f,itemsLength:P}),{paginatedItems:ie}=ma({items:y,startIndex:k,stopIndex:B,itemsPerPage:f}),de=_(()=>x(ie.value)),{isSelected:ft,select:vt,selectAll:gt,toggleSelect:mt,someSelected:pt,allSelected:ht}=wa(e,{allItems:h,currentPage:de}),{isExpanded:bt,toggleExpand:yt}=Ga(e);Ka({page:s,itemsPerPage:f,sortBy:r,groupBy:n,search:p}),ge({VDataTableRows:{hideNoData:C(e,"hideNoData"),noDataText:C(e,"noDataText"),loading:C(e,"loading"),loadingText:C(e,"loadingText")}});const E=_(()=>({page:s.value,itemsPerPage:f.value,sortBy:r.value,pageCount:O.value,toggleSort:b,setItemsPerPage:M,someSelected:pt.value,allSelected:ht.value,isSelected:ft,select:vt,selectAll:gt,toggleSelect:mt,isExpanded:bt,toggleExpand:yt,isGroupOpen:A,toggleGroup:N,items:de.value.map(Y=>Y.raw),internalItems:de.value,groupedItems:ie.value,columns:c.value,headers:g.value}));return U(()=>{const Y=$e.filterProps(e),xt=Oe.filterProps(e),Pt=Re.filterProps(e),St=Ae.filterProps(e);return o(Ae,R({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},St),{top:()=>{var Z;return(Z=t.top)==null?void 0:Z.call(t,E.value)},default:()=>{var Z,xe,Pe,Se,_e,ke;return t.default?t.default(E.value):o(W,null,[(Z=t.colgroup)==null?void 0:Z.call(t,E.value),o("thead",null,[o(Oe,xt,t)]),(xe=t.thead)==null?void 0:xe.call(t,E.value),o("tbody",null,[(Pe=t["body.prepend"])==null?void 0:Pe.call(t,E.value),t.body?t.body(E.value):o(Re,R(a,Pt,{items:ie.value}),t),(Se=t["body.append"])==null?void 0:Se.call(t,E.value)]),(_e=t.tbody)==null?void 0:_e.call(t,E.value),(ke=t.tfoot)==null?void 0:ke.call(t,E.value)])},bottom:()=>t.bottom?t.bottom(E.value):o(W,null,[o(Ke,null,null),o($e,Y,{prepend:t["footer.prepend"]})])})}),{}}}),I=e=>(Qt("data-v-2b0d3d41"),e=e(),Jt(),e),Ja=I(()=>V("strong",null,"Gender:",-1)),Xa=I(()=>V("br",null,null,-1)),Ya=I(()=>V("strong",null,"Role:",-1)),Za=I(()=>V("br",null,null,-1)),el=I(()=>V("strong",null,"Year of Entry:",-1)),tl=I(()=>V("br",null,null,-1)),al=I(()=>V("strong",null,"Target Exam Date:",-1)),ll=I(()=>V("br",null,null,-1)),nl=I(()=>V("strong",null,"University ID:",-1)),rl=I(()=>V("br",null,null,-1)),sl=I(()=>V("strong",null,"Educational Status ID:",-1)),ol=I(()=>V("strong",null,"Trial Packet Completion Date:",-1)),ul=I(()=>V("br",null,null,-1)),il=I(()=>V("strong",null,"Is User Silver:",-1)),dl=I(()=>V("br",null,null,-1)),cl=I(()=>V("strong",null,"Is User Gold:",-1)),fl=I(()=>V("br",null,null,-1)),vl=I(()=>V("strong",null,"Is User Platinum:",-1)),gl=I(()=>V("h4",null,"Login Activities",-1)),ml=I(()=>V("h4",null,"Student To-Do Lists",-1)),pl={__name:"UserTrialReportList",setup(e){const l=qe(),a=localStorage.getItem("token"),t=$(""),n=$([]),r=$(""),d=$(""),u=$([]),s=$({current_page:1,from:1,last_page:1,next_page_url:null,prev_page_url:null,total:0}),f=[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone Number",value:"phone_number"},{text:"Created At",value:"created_at"},{text:"Actions",value:"actions",sortable:!1}],c=[{text:"ID",value:"id"},{text:"Question Packet ID",value:"question_packet_id"},{text:"Start Date",value:"start_date"},{text:"Finish Date",value:"finish_date"},{text:"Score",value:"score"},{text:"Is Done",value:"is_done"}],g=async(m=1,h="")=>{try{const p=await Ne.get("https://gateway.berkompeten.com/api/admin/report/user/trial",{headers:{Authorization:`Bearer ${a}`},params:{page:m,search:h.toLowerCase()}});p.data.error&&(r.value=p.data.message,n.value=[]),d.value=p.data.message,n.value=p.data.data.data,s.value=p.data.data}catch(p){r.value="Failed to fetch user trial report. Please try again.",console.log("err: ",p),p.response&&p.response.status===401&&(localStorage.removeItem("token"),l.push("/login"))}};ze([t],([m])=>{g(s.value.current_page,m)});const i=m=>m?new Date(m).toLocaleDateString("en-US"):"N/A";return(m,h)=>{const p=qt("v-list-item-content");return z(),ee(oa,null,{default:w(()=>[o(Te,null,{default:w(()=>[o(Ce,null,{default:w(()=>[T("User Trial Report")]),_:1}),o(Be,null,{default:w(()=>[o(Yt,null,{default:w(()=>[o(me,null,{default:w(()=>[o(ne,{cols:"12"},{default:w(()=>[o(Zt,{modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=v=>t.value=v),label:"Search",class:"mx-3",solo:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),r.value?(z(),ee(Le,{key:0,type:"error",dismissible:"","onClick:close":h[1]||(h[1]=v=>r.value="")},{default:w(()=>[T(F(r.value),1)]),_:1})):De("",!0),d.value?(z(),ee(Le,{key:1,type:"success",dismissible:"","onClick:close":h[2]||(h[2]=v=>d.value="")},{default:w(()=>[T(F(d.value),1)]),_:1})):De("",!0),o(Ee,{headers:f,items:n.value,"item-value":"id",class:"elevation-1","show-expand":"",expanded:u.value,"item-class":"getRowClass"},{"item.expand":w(({item:v})=>[o(Te,{class:"mb-3"},{default:w(()=>[o(Ce,null,{default:w(()=>[T("Additional Details for "+F(v.name),1)]),_:2},1024),o(Be,null,{default:w(()=>[o(me,null,{default:w(()=>[o(ne,{cols:"12",sm:"6"},{default:w(()=>[Ja,T(" "+F(v.gender),1),Xa,Ya,T(" "+F(v.role),1),Za,el,T(" "+F(v.year_of_entry),1),tl,al,T(" "+F(i(v.target_exam_date)),1),ll,nl,T(" "+F(v.university_id),1),rl,sl,T(" "+F(v.educational_status_id),1)]),_:2},1024),o(ne,{cols:"12",sm:"6"},{default:w(()=>[ol,T(" "+F(i(v.trial_packet_completion_date)),1),ul,il,T(" "+F(v.is_user_silver),1),dl,cl,T(" "+F(v.is_user_gold),1),fl,vl,T(" "+F(v.is_user_platinum),1)]),_:2},1024)]),_:2},1024),o(Ke,{class:"my-3"}),gl,o(na,{dense:""},{default:w(()=>[(z(!0),Kt(W,null,Wt(v.login_activities,(b,S)=>(z(),ee(ra,{key:S},{default:w(()=>[o(p,null,{default:w(()=>[T(F(b),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),ml,o(Ee,{headers:c,items:v.student_to_do_lists,"item-value":"id",class:"elevation-1"},null,8,["items"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["items","expanded"])]),_:1})]),_:1})]),_:1})}}},hl=zt(pl,[["__scopeId","data-v-2b0d3d41"]]),Ml={__name:"user-trial-report",setup(e){const l=localStorage.getItem("token"),a=$(null),t=qe();return Xt(async()=>{if(l)try{const n=await Ne.get("https://gateway.berkompeten.com/api/admin/profile",{headers:{Authorization:`Bearer ${l}`}});a.value=n.data}catch(n){n.response&&n.response.status===401&&t.push("/login")}else t.push("/login")}),(n,r)=>(z(),ee(me,{class:"match-height"},{default:w(()=>[o(ne,{cols:"12",md:"12"},{default:w(()=>[o(hl)]),_:1})]),_:1}))}};export{Ml as default};
