import{_ as h,p as g,h as _}from"./chunks/hooks.module.91ff0612.js";import{l as v,p as b}from"./chunks/preact.module.dfa46238.js";const{replace:w}="",y=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,k={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},O=r=>k[r],C=r=>w.call(r,y,O);var I=0;function l(r,o,i,a,u){var n,t,s={};for(t in o)t=="ref"?n=o[t]:s[t]=o[t];var e={type:r,props:s,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--I,__source:u,__self:a};if(typeof r=="function"&&(n=r.defaultProps))for(t in n)s[t]===void 0&&(s[t]=n[t]);return v.vnode&&v.vnode(e),e}const A=({headings:r=[]})=>{const o=h(),i="on-this-page-heading",a=h([]),[u,n]=g("overview");_(()=>{const e=()=>{const f=document.querySelectorAll("article :is(h1, h2, h3, h4)");a.current=Array.from(f).map(c=>({id:c.id,topOffset:c.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),_(()=>{if(!o.current)return;const e=p=>{for(const d of p)if(d.isIntersecting){const{id:m}=d.target;if(m===i)continue;n(d.target.id);break}},f={rootMargin:"-100px 0% -66%",threshold:1},c=new IntersectionObserver(e,f);return document.querySelectorAll("article :is(h1,h2,h3)").forEach(p=>c.observe(p)),()=>c.disconnect()},[o.current]);const t=e=>{n(e.target.getAttribute("href").replace("#",""))},s=1;return l(b,{children:l("ul",{ref:o,children:r.filter(({depth:e})=>e>=s&&e<4).map(e=>l("li",{className:"w-full",children:l("a",{href:`#${e.slug}`,onClick:t,className:`py-0.5 block cursor-pointer w-full border-l-4 border-header hover:bg-header ${["pl-4","pl-9","pl-12"][e.depth-s]} ${u===e.slug?"bg-header":""}`.trim(),children:C(e.text)})}))})})};export{A as default};