import{l as g,m as y,a8 as z,B as f,d as n,p as I,I as u,aO as h,a9 as b,a1 as H,ax as Q,a2 as U,bv as W,h as q,ay as G,i as J,aP as K,j as X,k as Y,aQ as Z,aR as $,a5 as ee,a3 as ae,aT as te,aU as ne,az as ie,a4 as de,bj as le,A as se,aA as re,v as ce,aS as ue,a0 as V,D as oe,ap as ve,bk as me,aW as ke}from"./index-BOG201kq.js";import{c as P}from"./VGrid-Cc9xDJ2L.js";import{V as A}from"./VAvatar-DytI58__.js";import{V as be}from"./VCardText-CI-HyNsl.js";import{V as ge}from"./VImg-DAaXXU5K.js";const ye=g()({name:"VCardActions",props:y(),setup(e,d){let{slots:t}=d;return z({VBtn:{slim:!0,variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=P("v-card-subtitle"),pe=P("v-card-title"),Ce=I({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...y(),...h()},"VCardItem"),Ve=g()({name:"VCardItem",props:Ce(),setup(e,d){let{slots:t}=d;return f(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),v=!!(l||t.append),m=!!(e.title!=null||t.title),k=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(b,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(A,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(pe,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),k&&n(fe,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(b,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):l&&n(A,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ae=I({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...H(),...y(),...h(),...Q(),...U(),...W(),...q(),...G(),...J(),...K(),...X(),...Y(),...Z({variant:"elevated"})},"VCard"),Te=g()({name:"VCard",directives:{Ripple:$},props:Ae(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:o}=ee(e),{borderClasses:l}=ae(e),{colorClasses:v,colorStyles:m,variantClasses:k}=te(e),{densityClasses:s}=ne(e),{dimensionStyles:i}=ie(e),{elevationClasses:S}=de(e),{loaderClasses:x}=le(e),{locationStyles:T}=se(e),{positionClasses:B}=re(e),{roundedClasses:D}=ce(e),r=ue(e,t),L=V(()=>e.link!==!1&&r.isLink.value),c=V(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return f(()=>{const _=L.value?"a":e.tag,N=!!(a.title||e.title!=null),R=!!(a.subtitle||e.subtitle!=null),j=N||R,O=!!(a.append||e.appendAvatar||e.appendIcon),E=!!(a.prepend||e.prependAvatar||e.prependIcon),F=!!(a.image||e.image),M=j||E||O,w=!!(a.text||e.text!=null);return oe(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":c.value},o.value,l.value,v.value,s.value,S.value,x.value,B.value,D.value,k.value,e.class],style:[m.value,i.value,T.value,e.style],href:r.href.value,onClick:c.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[F&&n("div",{key:"image",class:"v-card__image"},[a.image?n(b,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(me,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),M&&n(Ve,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),w&&n(be,{key:"text"},{default:()=>{var C;return[((C=a.text)==null?void 0:C.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ye,null,{default:a.actions}),ke(c.value,"v-card")]}}),[[ve("ripple"),c.value&&e.ripple]])}),{}}});export{Te as V,pe as a,ye as b,Ve as c};
