var _t=Object.defineProperty,dt=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var Pe=(a,f,r)=>f in a?_t(a,f,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[f]=r,X=(a,f)=>{for(var r in f||(f={}))Oe.call(f,r)&&Pe(a,r,f[r]);if(L)for(var r of L(f))qe.call(f,r)&&Pe(a,r,f[r]);return a},H=(a,f)=>dt(a,At(f));var Ie=(a,f)=>{var r={};for(var $ in a)Oe.call(a,$)&&f.indexOf($)<0&&(r[$]=a[$]);if(a!=null&&L)for(var $ of L(a))f.indexOf($)<0&&qe.call(a,$)&&(r[$]=a[$]);return r};import{b as ke,d as wt,e as yt}from"./index.b9de54bd.js";function bt(a,f){function r(){this.constructor=a}r.prototype=f.prototype,a.prototype=new r}function D(a,f,r,$){var g=Error.call(this,a);return Object.setPrototypeOf&&Object.setPrototypeOf(g,D.prototype),g.expected=f,g.found=r,g.location=$,g.name="SyntaxError",g}bt(D,Error);function J(a,f,r){return r=r||" ",a.length>f?a:(f-=a.length,r+=r.repeat(f),a+r.slice(0,f))}D.prototype.format=function(a){var f="peg error: "+this.message;if(this.location){var r=null,$;for($=0;$<a.length;$++)if(a[$].source===this.location.source){r=a[$].text.split(/\r\n|\n|\r/g);break}var g=this.location.start,m=this.location.source+":"+g.line+":"+g.column;if(r){var w=this.location.end,A=J("",g.line.toString().length," "),E=r[g.line-1],_=g.line===w.line?w.column:E.length+1,h=_-g.column||1;f+=`
 --> `+m+`
`+A+` |
`+g.line+" | "+E+`
`+A+" | "+J("",g.column-1," ")+J("",h,"^")}else f+=`
 at `+m}return f};D.buildMessage=function(a,f){var r={literal:function(_){return'"'+g(_.text)+'"'},class:function(_){var h=_.parts.map(function(b){return Array.isArray(b)?m(b[0])+"-"+m(b[1]):m(b)});return"["+(_.inverted?"^":"")+h.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(_){return _.description}};function $(_){return _.charCodeAt(0).toString(16).toUpperCase()}function g(_){return _.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(h){return"\\x0"+$(h)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(h){return"\\x"+$(h)})}function m(_){return _.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(h){return"\\x0"+$(h)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(h){return"\\x"+$(h)})}function w(_){return r[_.type](_)}function A(_){var h=_.map(w),b,F;if(h.sort(),h.length>0){for(b=1,F=1;b<h.length;b++)h[b-1]!==h[b]&&(h[F]=h[b],F++);h.length=F}switch(h.length){case 1:return h[0];case 2:return h[0]+" or "+h[1];default:return h.slice(0,-1).join(", ")+", or "+h[h.length-1]}}function E(_){return _?'"'+g(_)+'"':"end of input"}return"Expected "+A(a)+" but "+E(f)+" found."};function Ne(a,f){f=f!==void 0?f:{};var r={},$=f.grammarSource,g={start:xe},m=xe,w=".",A="-",E="+",_="0",h=",",b="|",F='"',Me="'",We="#",Ze="^",Ge="_",Ue=":",Y="[",ee="]",Xe="<",He=">",Je="@",Ke="!",Qe="(",Ve=")",Ye="/",er="*",rr="%",sr="?",re="struct",se="target",te="euclid",ne="slow",ae="rotL",ie="rotR",fe="fast",oe="scale",ce="//",le="cat",tr="$",ue="setcps",pe="setbpm",ge="hush",nr=/^[1-9]/,ar=/^[eE]/,ir=/^[0-9]/,ve=/^[ \n\r\t]/,fr=/^[0-9a-zA-Z~]/,$e=/^[^\n]/,or=be("number"),he=p(".",!1),cr=j([["1","9"]],!1,!1),lr=j(["e","E"],!1,!1),me=p("-",!1),ur=p("+",!1),pr=p("0",!1),gr=j([["0","9"]],!1,!1),vr=be("whitespace"),_e=j([" ",`
`,"\r","	"],!1,!1),$r=p(",",!1),hr=p("|",!1),mr=p('"',!1),_r=p("'",!1),dr=j([["0","9"],["a","z"],["A","Z"],"~"],!1,!1),Ar=p("#",!1),wr=p("^",!1),yr=p("_",!1),br=p(":",!1),de=p("[",!1),Ae=p("]",!1),Cr=p("<",!1),xr=p(">",!1),Er=p("@",!1),Fr=p("!",!1),jr=p("(",!1),Sr=p(")",!1),Rr=p("/",!1),Pr=p("*",!1),Or=p("%",!1),qr=p("?",!1),Ir=p("struct",!1),Dr=p("target",!1),kr=p("euclid",!1),Nr=p("slow",!1),Br=p("rotL",!1),Tr=p("rotR",!1),zr=p("fast",!1),Lr=p("scale",!1),Mr=p("//",!1),we=j([`
`],!0,!1),Wr=p("cat",!1),Zr=p("$",!1),Gr=p("setcps",!1),Ur=p("setbpm",!1),Xr=p("hush",!1),Hr=function(){return parseFloat(Fs())},Jr=function(e){return e.join("")},Kr=function(e){return e},Qr=function(e){return e.arguments_.alignment="t",e},Vr=function(e){return{weight:e}},Yr=function(e){return{replicate:e}},es=function(e,t,n){return{operator:{type_:"bjorklund",arguments_:{pulse:e,step:t,rotation:n||0}}}},rs=function(e){return{operator:{type_:"stretch",arguments_:{amount:e}}}},ss=function(e){return{operator:{type_:"stretch",arguments_:{amount:"1/"+e}}}},ts=function(e){return{operator:{type_:"fixed-step",arguments_:{amount:e}}}},ns=function(e){return{operator:{type_:"degradeBy",arguments_:{amount:e||.5}}}},as=function(e,t){return new mt(e,t)},is=function(e){return new G(e,"h")},fs=function(e){return{alignment:"v",list:e}},os=function(e){return{alignment:"r",list:e}},cs=function(e,t){return t&&t.list.length>0?new G([e,...t.list],t.alignment):e},ls=function(e){return e},us=function(e){return{name:"struct",args:{sequence:e}}},ps=function(e){return{name:"target",args:{name:e}}},gs=function(e,t,n){return{name:"bjorklund",args:{pulse:parseInt(e),step:parseInt(t)}}},vs=function(e){return{name:"stretch",args:{amount:e}}},$s=function(e){return{name:"shift",args:{amount:"-"+e}}},hs=function(e){return{name:"shift",args:{amount:e}}},ms=function(e){return{name:"stretch",args:{amount:"1/"+e}}},_s=function(e){return{name:"scale",args:{scale:e.join("")}}},ye=function(e,t){return t},ds=function(e,t){return t.unshift(e),new G(t,"t")},As=function(e){return e},ws=function(e,t){return new ht(e.name,e.args,t)},ys=function(e){return e},bs=function(e){return e},Cs=function(e){return new U("setcps",{value:e})},xs=function(e){return new U("setcps",{value:e/120/2})},Es=function(){return new U("hush")},s=0,v=0,N=[{line:1,column:1}],x=0,M=[],o=0,B;if("startRule"in f){if(!(f.startRule in g))throw new Error(`Can't start parsing from rule "`+f.startRule+'".');m=g[f.startRule]}function Fs(){return a.substring(v,s)}function js(){return W(v,s)}function p(e,t){return{type:"literal",text:e,ignoreCase:t}}function j(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function Ss(){return{type:"end"}}function be(e){return{type:"other",description:e}}function Ce(e){var t=N[e],n;if(t)return t;for(n=e-1;!N[n];)n--;for(t=N[n],t={line:t.line,column:t.column};n<e;)a.charCodeAt(n)===10?(t.line++,t.column=1):t.column++,n++;return N[e]=t,t}function W(e,t){var n=Ce(e),i=Ce(t);return{source:$,start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:i.line,column:i.column}}}function c(e){s<x||(s>x&&(x=s,M=[]),M.push(e))}function Rs(e,t,n){return new D(D.buildMessage(e,t),e,t,n)}function xe(){var e;return e=$t(),e}function y(){var e,t;return o++,e=s,Ee(),t=T(),t!==r?(Ds(),Is(),v=e,e=Hr()):(s=e,e=r),o--,e===r&&o===0&&c(or),e}function Ps(){var e;return a.charCodeAt(s)===46?(e=w,s++):(e=r,o===0&&c(he)),e}function Os(){var e;return nr.test(a.charAt(s))?(e=a.charAt(s),s++):(e=r,o===0&&c(cr)),e}function qs(){var e;return ar.test(a.charAt(s))?(e=a.charAt(s),s++):(e=r,o===0&&c(lr)),e}function Is(){var e,t,n,i,l;if(e=s,t=qs(),t!==r){if(n=Ee(),n===r&&(n=ks()),n===r&&(n=null),i=[],l=S(),l!==r)for(;l!==r;)i.push(l),l=S();else i=r;i!==r?(t=[t,n,i],e=t):(s=e,e=r)}else s=e,e=r;return e}function Ds(){var e,t,n,i;if(e=s,t=Ps(),t!==r){if(n=[],i=S(),i!==r)for(;i!==r;)n.push(i),i=S();else n=r;n!==r?(t=[t,n],e=t):(s=e,e=r)}else s=e,e=r;return e}function T(){var e,t,n,i;if(e=Ns(),e===r)if(e=s,t=Os(),t!==r){for(n=[],i=S();i!==r;)n.push(i),i=S();t=[t,n],e=t}else s=e,e=r;return e}function Ee(){var e;return a.charCodeAt(s)===45?(e=A,s++):(e=r,o===0&&c(me)),e}function ks(){var e;return a.charCodeAt(s)===43?(e=E,s++):(e=r,o===0&&c(ur)),e}function Ns(){var e;return a.charCodeAt(s)===48?(e=_,s++):(e=r,o===0&&c(pr)),e}function S(){var e;return ir.test(a.charAt(s))?(e=a.charAt(s),s++):(e=r,o===0&&c(gr)),e}function u(){var e,t;for(o++,e=[],ve.test(a.charAt(s))?(t=a.charAt(s),s++):(t=r,o===0&&c(_e));t!==r;)e.push(t),ve.test(a.charAt(s))?(t=a.charAt(s),s++):(t=r,o===0&&c(_e));return o--,t=r,o===0&&c(vr),e}function R(){var e,t,n,i;return e=s,t=u(),a.charCodeAt(s)===44?(n=h,s++):(n=r,o===0&&c($r)),n!==r?(i=u(),t=[t,n,i],e=t):(s=e,e=r),e}function Fe(){var e,t,n,i;return e=s,t=u(),a.charCodeAt(s)===124?(n=b,s++):(n=r,o===0&&c(hr)),n!==r?(i=u(),t=[t,n,i],e=t):(s=e,e=r),e}function P(){var e;return a.charCodeAt(s)===34?(e=F,s++):(e=r,o===0&&c(mr)),e===r&&(a.charCodeAt(s)===39?(e=Me,s++):(e=r,o===0&&c(_r))),e}function z(){var e;return fr.test(a.charAt(s))?(e=a.charAt(s),s++):(e=r,o===0&&c(dr)),e===r&&(a.charCodeAt(s)===45?(e=A,s++):(e=r,o===0&&c(me)),e===r&&(a.charCodeAt(s)===35?(e=We,s++):(e=r,o===0&&c(Ar)),e===r&&(a.charCodeAt(s)===46?(e=w,s++):(e=r,o===0&&c(he)),e===r&&(a.charCodeAt(s)===94?(e=Ze,s++):(e=r,o===0&&c(wr)),e===r&&(a.charCodeAt(s)===95?(e=Ge,s++):(e=r,o===0&&c(yr)),e===r&&(a.charCodeAt(s)===58?(e=Ue,s++):(e=r,o===0&&c(br)))))))),e}function je(){var e,t,n;if(e=s,u(),t=[],n=z(),n!==r)for(;n!==r;)t.push(n),n=z();else t=r;return t!==r?(n=u(),v=e,e=Jr(t)):(s=e,e=r),e}function Bs(){var e,t,n,i;return e=s,u(),a.charCodeAt(s)===91?(t=Y,s++):(t=r,o===0&&c(de)),t!==r?(u(),n=Re(),n!==r?(u(),a.charCodeAt(s)===93?(i=ee,s++):(i=r,o===0&&c(Ae)),i!==r?(u(),v=e,e=Kr(n)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function Ts(){var e,t,n,i;return e=s,u(),a.charCodeAt(s)===60?(t=Xe,s++):(t=r,o===0&&c(Cr)),t!==r?(u(),n=O(),n!==r?(u(),a.charCodeAt(s)===62?(i=He,s++):(i=r,o===0&&c(xr)),i!==r?(u(),v=e,e=Qr(n)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function zs(){var e;return e=je(),e===r&&(e=Bs(),e===r&&(e=Ts())),e}function Ls(){var e;return e=Ms(),e===r&&(e=Zs(),e===r&&(e=Gs(),e===r&&(e=Us(),e===r&&(e=Xs(),e===r&&(e=Ws(),e===r&&(e=Hs())))))),e}function Ms(){var e,t,n;return e=s,a.charCodeAt(s)===64?(t=Je,s++):(t=r,o===0&&c(Er)),t!==r?(n=y(),n!==r?(v=e,e=Vr(n)):(s=e,e=r)):(s=e,e=r),e}function Ws(){var e,t,n;return e=s,a.charCodeAt(s)===33?(t=Ke,s++):(t=r,o===0&&c(Fr)),t!==r?(n=y(),n!==r?(v=e,e=Yr(n)):(s=e,e=r)):(s=e,e=r),e}function Zs(){var e,t,n,i,l,d,C;return e=s,a.charCodeAt(s)===40?(t=Qe,s++):(t=r,o===0&&c(jr)),t!==r?(u(),n=y(),n!==r?(u(),i=R(),i!==r?(u(),l=y(),l!==r?(u(),R(),u(),d=y(),d===r&&(d=null),u(),a.charCodeAt(s)===41?(C=Ve,s++):(C=r,o===0&&c(Sr)),C!==r?(v=e,e=es(n,l,d)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function Gs(){var e,t,n;return e=s,a.charCodeAt(s)===47?(t=Ye,s++):(t=r,o===0&&c(Rr)),t!==r?(n=y(),n!==r?(v=e,e=rs(n)):(s=e,e=r)):(s=e,e=r),e}function Us(){var e,t,n;return e=s,a.charCodeAt(s)===42?(t=er,s++):(t=r,o===0&&c(Pr)),t!==r?(n=y(),n!==r?(v=e,e=ss(n)):(s=e,e=r)):(s=e,e=r),e}function Xs(){var e,t,n;return e=s,a.charCodeAt(s)===37?(t=rr,s++):(t=r,o===0&&c(Or)),t!==r?(n=y(),n!==r?(v=e,e=ts(n)):(s=e,e=r)):(s=e,e=r),e}function Hs(){var e,t,n;return e=s,a.charCodeAt(s)===63?(t=sr,s++):(t=r,o===0&&c(qr)),t!==r?(n=y(),n===r&&(n=null),v=e,e=ns(n)):(s=e,e=r),e}function Se(){var e,t,n;return e=s,t=zs(),t!==r?(n=Ls(),n===r&&(n=null),v=e,e=as(t,n)):(s=e,e=r),e}function O(){var e,t,n;if(e=s,t=[],n=Se(),n!==r)for(;n!==r;)t.push(n),n=Se();else t=r;return t!==r&&(v=e,t=is(t)),e=t,e}function Js(){var e,t,n,i,l;if(e=s,t=[],n=s,i=R(),i!==r?(l=O(),l!==r?n=l:(s=n,n=r)):(s=n,n=r),n!==r)for(;n!==r;)t.push(n),n=s,i=R(),i!==r?(l=O(),l!==r?n=l:(s=n,n=r)):(s=n,n=r);else t=r;return t!==r&&(v=e,t=fs(t)),e=t,e}function Ks(){var e,t,n,i,l;if(e=s,t=[],n=s,i=Fe(),i!==r?(l=O(),l!==r?n=l:(s=n,n=r)):(s=n,n=r),n!==r)for(;n!==r;)t.push(n),n=s,i=Fe(),i!==r?(l=O(),l!==r?n=l:(s=n,n=r)):(s=n,n=r);else t=r;return t!==r&&(v=e,t=os(t)),e=t,e}function Re(){var e,t,n;return e=s,t=O(),t!==r?(n=Js(),n===r&&(n=Ks()),n===r&&(n=null),v=e,e=cs(t,n)):(s=e,e=r),e}function Qs(){var e,t,n,i;return e=s,u(),t=P(),t!==r?(n=Re(),n!==r?(i=P(),i!==r?(v=e,e=ls(n)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function Vs(){var e;return e=it(),e===r&&(e=st(),e===r&&(e=at(),e===r&&(e=et(),e===r&&(e=rt(),e===r&&(e=Ys(),e===r&&(e=nt(),e===r&&(e=tt()))))))),e}function Ys(){var e,t,n;return e=s,a.substr(s,6)===re?(t=re,s+=6):(t=r,o===0&&c(Ir)),t!==r?(u(),n=q(),n!==r?(v=e,e=us(n)):(s=e,e=r)):(s=e,e=r),e}function et(){var e,t,n,i,l;return e=s,a.substr(s,6)===se?(t=se,s+=6):(t=r,o===0&&c(Dr)),t!==r?(u(),n=P(),n!==r?(i=je(),i!==r?(l=P(),l!==r?(v=e,e=ps(i)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function rt(){var e,t,n,i;return e=s,a.substr(s,6)===te?(t=te,s+=6):(t=r,o===0&&c(kr)),t!==r?(u(),n=T(),n!==r?(u(),i=T(),i!==r?(u(),T(),v=e,e=gs(n,i)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function st(){var e,t,n;return e=s,a.substr(s,4)===ne?(t=ne,s+=4):(t=r,o===0&&c(Nr)),t!==r?(u(),n=y(),n!==r?(v=e,e=vs(n)):(s=e,e=r)):(s=e,e=r),e}function tt(){var e,t,n;return e=s,a.substr(s,4)===ae?(t=ae,s+=4):(t=r,o===0&&c(Br)),t!==r?(u(),n=y(),n!==r?(v=e,e=$s(n)):(s=e,e=r)):(s=e,e=r),e}function nt(){var e,t,n;return e=s,a.substr(s,4)===ie?(t=ie,s+=4):(t=r,o===0&&c(Tr)),t!==r?(u(),n=y(),n!==r?(v=e,e=hs(n)):(s=e,e=r)):(s=e,e=r),e}function at(){var e,t,n;return e=s,a.substr(s,4)===fe?(t=fe,s+=4):(t=r,o===0&&c(zr)),t!==r?(u(),n=y(),n!==r?(v=e,e=ms(n)):(s=e,e=r)):(s=e,e=r),e}function it(){var e,t,n,i,l;if(e=s,a.substr(s,5)===oe?(t=oe,s+=5):(t=r,o===0&&c(Lr)),t!==r)if(u(),n=P(),n!==r){if(i=[],l=z(),l!==r)for(;l!==r;)i.push(l),l=z();else i=r;i!==r?(l=P(),l!==r?(v=e,e=_s(i)):(s=e,e=r)):(s=e,e=r)}else s=e,e=r;else s=e,e=r;return e}function Z(){var e,t,n,i;if(e=s,a.substr(s,2)===ce?(t=ce,s+=2):(t=r,o===0&&c(Mr)),t!==r){for(n=[],$e.test(a.charAt(s))?(i=a.charAt(s),s++):(i=r,o===0&&c(we));i!==r;)n.push(i),$e.test(a.charAt(s))?(i=a.charAt(s),s++):(i=r,o===0&&c(we));t=[t,n],e=t}else s=e,e=r;return e}function ft(){var e,t,n,i,l,d,C,I;if(e=s,a.substr(s,3)===le?(t=le,s+=3):(t=r,o===0&&c(Wr)),t!==r)if(u(),a.charCodeAt(s)===91?(n=Y,s++):(n=r,o===0&&c(de)),n!==r)if(u(),i=q(),i!==r){for(l=[],d=s,C=R(),C!==r?(I=q(),I!==r?(v=d,d=ye(i,I)):(s=d,d=r)):(s=d,d=r);d!==r;)l.push(d),d=s,C=R(),C!==r?(I=q(),I!==r?(v=d,d=ye(i,I)):(s=d,d=r)):(s=d,d=r);d=u(),a.charCodeAt(s)===93?(C=ee,s++):(C=r,o===0&&c(Ae)),C!==r?(v=e,e=ds(i,l)):(s=e,e=r)}else s=e,e=r;else s=e,e=r;else s=e,e=r;return e}function ot(){var e;return e=ft(),e===r&&(e=Qs()),e}function q(){var e,t,n,i,l;if(e=s,t=ot(),t!==r){for(u(),n=[],i=Z();i!==r;)n.push(i),i=Z();v=e,e=As(t)}else s=e,e=r;return e===r&&(e=s,t=Vs(),t!==r?(u(),a.charCodeAt(s)===36?(n=tr,s++):(n=r,o===0&&c(Zr)),n!==r?(i=u(),l=q(),l!==r?(v=e,e=ws(t,l)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r)),e}function ct(){var e,t;return e=s,t=q(),t!==r&&(v=e,t=ys(t)),e=t,e===r&&(e=Z()),e}function lt(){var e;return e=ct(),e}function ut(){var e,t;return e=s,u(),t=pt(),t===r&&(t=gt(),t===r&&(t=vt())),t!==r?(u(),v=e,e=bs(t)):(s=e,e=r),e}function pt(){var e,t,n;return e=s,a.substr(s,6)===ue?(t=ue,s+=6):(t=r,o===0&&c(Gr)),t!==r?(u(),n=y(),n!==r?(v=e,e=Cs(n)):(s=e,e=r)):(s=e,e=r),e}function gt(){var e,t,n;return e=s,a.substr(s,6)===pe?(t=pe,s+=6):(t=r,o===0&&c(Ur)),t!==r?(u(),n=y(),n!==r?(v=e,e=xs(n)):(s=e,e=r)):(s=e,e=r),e}function vt(){var e,t;return e=s,a.substr(s,4)===ge?(t=ge,s+=4):(t=r,o===0&&c(Xr)),t!==r&&(v=e,t=Es()),e=t,e}function $t(){var e;return e=lt(),e===r&&(e=ut()),e}var G=function(e,t){this.type_="pattern",this.arguments_={alignment:t},this.source_=e},ht=function(e,t,n){this.type_=e,this.arguments_=t,this.source_=n},mt=function(e,t){this.type_="element",this.source_=e,this.options_=t,this.location_=js()},U=function(e,t){this.type_="command",this.name_=e,this.options_=t};if(B=m(),B!==r&&s===a.length)return B;throw B!==r&&s<a.length&&c(Ss()),Rs(M,x<a.length?a.charAt(x):null,x<a.length?W(x,x+1):W(x,x))}const{pure:Ct,Pattern:Q,Fraction:Be,stack:xt,slowcat:Et,sequence:Te,timeCat:Ft,silence:De,reify:K}=yt;var jt=0;const ze=2e-4;function Le(){return jt++}const St=a=>(f,r)=>{const g=a.source_[r].options_,m=g==null?void 0:g.operator;if(m){switch(m.type_){case"stretch":{const A=Be(m.arguments_.amount).inverse();return K(f).fast(A)}case"bjorklund":return f.euclid(m.arguments_.pulse,m.arguments_.step,m.arguments_.rotation);case"degradeBy":return K(f)._degradeByWith(ke.early(ze*Le()).segment(1),m.arguments_.amount)}console.warn(`operator "${m.type_}" not implemented`)}if(g!=null&&g.weight)return f;const w=Object.keys(g||{}).filter(A=>A!=="operator");return w.length&&console.warn(`option${w.length>1?"s":""} ${w.map(A=>`"${A}"`).join(", ")} not implemented`),f};function Rt(a){a.source_=a.source_.map(f=>{const g=f.options_||{},{replicate:r}=g,$=Ie(g,["replicate"]);return r?H(X({},f),{options_:H(X({},$),{weight:r}),source_:{type_:"pattern",arguments_:{alignment:"h"},source_:[{type_:"element",source_:f.source_,location_:f.location_,options_:{operator:{type_:"stretch",arguments_:{amount:Be(r).inverse().toString()}}}}]}}):f})}function k(a){switch(a.type_){case"pattern":{Rt(a);const f=a.source_.map(k).map(St(a)),r=a.arguments_.alignment;if(r==="v")return xt(...f);if(r==="r")return wt(ke.early(ze*Le()).segment(1),f);const $=a.source_.some(g=>{var m;return!!((m=g.options_)!=null&&m.weight)});if(!$&&r==="t")return Et(...f);if($){const g=Ft(...a.source_.map((m,w)=>{var A;return[((A=m.options_)==null?void 0:A.weight)||1,f[w]]}));if(r==="t"){const m=a.source_.reduce((w,A)=>{var E;return w+(((E=A.options_)==null?void 0:E.weight)||1)},0);return g._slow(m)}return g}return Te(...f)}case"element":{if(a.source_==="~")return De;if(typeof a.source_!="object"){if(!a.location_)return console.warn("no location for",a),a.source_;const{start:f,end:r}=a.location_,$=isNaN(Number(a.source_))?a.source_:Number(a.source_);return Ct($).withLocation([f.line,f.column,f.offset],[r.line,r.column,r.offset])}return k(a.source_)}case"stretch":return k(a.source_).slow(a.arguments_.amount);default:return console.warn(`node type "${a.type_}" not implemented -> returning silence`),De}}const V=(...a)=>{const f=a.map(r=>{const $=Ne(`"${r}"`);return k($)});return Te(...f)},Pt=a=>{const f=Ne(a);return k(f)};Q.prototype.define("mini",V,{composable:!0});Q.prototype.define("m",V,{composable:!0});Q.prototype.define("h",Pt,{composable:!0});function It(a){return typeof a=="string"?V(a):K(a)}export{D as SyntaxError,Pt as h,V as mini,It as minify,Ne as parse,k as patternifyAST};
