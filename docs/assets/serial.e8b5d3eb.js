import{P as h}from"./index.ee259813.js";var f,g=!1;async function m(a=38400){if(!g){if(g=!0,f)return f;if("serial"in navigator){const o=await navigator.serial.requestPort();await o.open({baudRate:a});const t=new TextEncoder,n=o.writable.getWriter();f=function(s,c){const r=t.encode(s);if(!c)n.write(r);else{const i=new Uint8Array(4);i[0]=124,i[1]=c>>8&255,i[2]=c&255,i[3]=59;const e=new Uint8Array(r.length+4);e.set(r),e.set(i,r.length),n.write(e)}}}else throw"Webserial is not available in this browser."}}const y=.1;function A(a){const o=a.length;if(o==0)return 0;for(var t=65535,n=0;n<o;++n){t^=a.charCodeAt(n)<<8;for(var s=0;s<8;++s)t=(t&32768)>0?t<<1^4129:t<<1}return t&65535}h.prototype.serial=function(a=38400,o=!1,t=!1){return this.withHap(n=>{f||m(a);const s=(c,r,i)=>{var e="",v=0;if(typeof r.value=="object")if("action"in r.value){var u=r.value.action;t&&(u=u.charAt(0)),e+=u+"(";var w=!0;for(var[l,x]of Object.entries(r.value))l!=="action"&&(w?w=!1:e+=",",t&&(l=l.charAt(0)),e+=l+":"+x);e+=")",o&&(v=A(e))}else for(const[F,d]of Object.entries(r.value))e+=`${F}:${d}`;else e=r.value;const b=(c-i+y)*1e3;window.setTimeout(function(){f(e,v)},b)};return n.setContext({...n.context,onTrigger:s,dominantTrigger:!0})})};export{m as getWriter};
//# sourceMappingURL=serial.e8b5d3eb.js.map
