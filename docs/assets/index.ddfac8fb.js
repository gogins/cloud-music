import{P as p,f as y,C as M,l as r}from"./index.14f87e30.js";p.prototype.csnd=async function(...n){return this.onTrigger((a,e,l)=>{var _,c;const u=n[0],g=a-l,d=e.duration.valueOf();let $=y(e);const w=M($),f=127*((c=(_=e.context)==null?void 0:_.velocity)!=null?c:.9);let o;n.length>1?o=n[1]:o=0;let s;n.length>2?s=n[2]:s=0;let t=`i ${u} ${g} ${d} ${w} ${f} ${o} ${s}`;if(n.length>3)for(let i=3;i<n.length;++i)t=t+` ${n[i]}`;t+=`
`,r(`[csnd] ${t}`),window.__csound__?window.__csound__.inputMessage?window.__csound__.inputMessage(t):window.__csound__.InputMessage(t):r("[csnd] Error: Csound is not defined!")})};
//# sourceMappingURL=index.ddfac8fb.js.map
