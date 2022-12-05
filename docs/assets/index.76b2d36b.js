import{b as ut,d as Se,e as pt}from"./index.9be083e6.js";function gt(a,c){function r(){this.constructor=a}r.prototype=c.prototype,a.prototype=new r}function D(a,c,r,m){var v=Error.call(this,a);return Object.setPrototypeOf&&Object.setPrototypeOf(v,D.prototype),v.expected=c,v.found=r,v.location=m,v.name="SyntaxError",v}gt(D,Error);function U(a,c,r){return r=r||" ",a.length>c?a:(c-=a.length,r+=r.repeat(c),a+r.slice(0,c))}D.prototype.format=function(a){var c="peg error: "+this.message;if(this.location){var r=null,m;for(m=0;m<a.length;m++)if(a[m].source===this.location.source){r=a[m].text.split(/\r\n|\n|\r/g);break}var v=this.location.start,h=this.location.source+":"+v.line+":"+v.column;if(r){var w=this.location.end,A=U("",v.line.toString().length," "),E=r[v.line-1],_=v.line===w.line?w.column:E.length+1,$=_-v.column||1;c+=`
 --> `+h+`
`+A+` |
`+v.line+" | "+E+`
`+A+" | "+U("",v.column-1," ")+U("",$,"^")}else c+=`
 at `+h}return c};D.buildMessage=function(a,c){var r={literal:function(_){return'"'+v(_.text)+'"'},class:function(_){var $=_.parts.map(function(b){return Array.isArray(b)?h(b[0])+"-"+h(b[1]):h(b)});return"["+(_.inverted?"^":"")+$.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(_){return _.description}};function m(_){return _.charCodeAt(0).toString(16).toUpperCase()}function v(_){return _.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function($){return"\\x0"+m($)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function($){return"\\x"+m($)})}function h(_){return _.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function($){return"\\x0"+m($)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function($){return"\\x"+m($)})}function w(_){return r[_.type](_)}function A(_){var $=_.map(w),b,F;if($.sort(),$.length>0){for(b=1,F=1;b<$.length;b++)$[b-1]!==$[b]&&($[F]=$[b],F++);$.length=F}switch($.length){case 1:return $[0];case 2:return $[0]+" or "+$[1];default:return $.slice(0,-1).join(", ")+", or "+$[$.length-1]}}function E(_){return _?'"'+v(_)+'"':"end of input"}return"Expected "+A(a)+" but "+E(c)+" found."};function Re(a,c){c=c!==void 0?c:{};var r={},m=c.grammarSource,v={start:ye},h=ye,w=".",A="-",E="+",_="0",$=",",b="|",F='"',De="'",ke="#",Ne="^",Be="_",Te=":",K="[",Q="]",ze="<",Le=">",Me="@",We="!",Ze="(",Ge=")",Ue="/",Xe="*",He="%",Je="?",V="struct",Y="target",ee="euclid",re="slow",se="rotL",te="rotR",ne="fast",ae="scale",ie="//",fe="cat",Ke="$",oe="setcps",ce="setbpm",le="hush",Qe=/^[1-9]/,Ve=/^[eE]/,Ye=/^[0-9]/,ue=/^[ \n\r\t]/,er=/^[0-9a-zA-Z~]/,pe=/^[^\n]/,rr=Ae("number"),ge=p(".",!1),sr=j([["1","9"]],!1,!1),tr=j(["e","E"],!1,!1),ve=p("-",!1),nr=p("+",!1),ar=p("0",!1),ir=j([["0","9"]],!1,!1),fr=Ae("whitespace"),$e=j([" ",`
`,"\r","	"],!1,!1),or=p(",",!1),cr=p("|",!1),lr=p('"',!1),ur=p("'",!1),pr=j([["0","9"],["a","z"],["A","Z"],"~"],!1,!1),gr=p("#",!1),vr=p("^",!1),$r=p("_",!1),hr=p(":",!1),he=p("[",!1),me=p("]",!1),mr=p("<",!1),_r=p(">",!1),dr=p("@",!1),Ar=p("!",!1),wr=p("(",!1),yr=p(")",!1),br=p("/",!1),Cr=p("*",!1),xr=p("%",!1),Er=p("?",!1),Fr=p("struct",!1),jr=p("target",!1),Sr=p("euclid",!1),Rr=p("slow",!1),Pr=p("rotL",!1),Or=p("rotR",!1),qr=p("fast",!1),Ir=p("scale",!1),Dr=p("//",!1),_e=j([`
`],!0,!1),kr=p("cat",!1),Nr=p("$",!1),Br=p("setcps",!1),Tr=p("setbpm",!1),zr=p("hush",!1),Lr=function(){return parseFloat(As())},Mr=function(e){return e.join("")},Wr=function(e){return e},Zr=function(e){return e.arguments_.alignment="t",e},Gr=function(e){return{weight:e}},Ur=function(e){return{replicate:e}},Xr=function(e,t,n){return{operator:{type_:"bjorklund",arguments_:{pulse:e,step:t,rotation:n||0}}}},Hr=function(e){return{operator:{type_:"stretch",arguments_:{amount:e}}}},Jr=function(e){return{operator:{type_:"stretch",arguments_:{amount:"1/"+e}}}},Kr=function(e){return{operator:{type_:"fixed-step",arguments_:{amount:e}}}},Qr=function(e){return{operator:{type_:"degradeBy",arguments_:{amount:e||.5}}}},Vr=function(e,t){return new lt(e,t)},Yr=function(e){return new Z(e,"h")},es=function(e){return{alignment:"v",list:e}},rs=function(e){return{alignment:"r",list:e}},ss=function(e,t){return t&&t.list.length>0?new Z([e,...t.list],t.alignment):e},ts=function(e){return e},ns=function(e){return{name:"struct",args:{sequence:e}}},as=function(e){return{name:"target",args:{name:e}}},is=function(e,t,n){return{name:"bjorklund",args:{pulse:parseInt(e),step:parseInt(t)}}},fs=function(e){return{name:"stretch",args:{amount:e}}},os=function(e){return{name:"shift",args:{amount:"-"+e}}},cs=function(e){return{name:"shift",args:{amount:e}}},ls=function(e){return{name:"stretch",args:{amount:"1/"+e}}},us=function(e){return{name:"scale",args:{scale:e.join("")}}},de=function(e,t){return t},ps=function(e,t){return t.unshift(e),new Z(t,"t")},gs=function(e){return e},vs=function(e,t){return new ct(e.name,e.args,t)},$s=function(e){return e},hs=function(e){return e},ms=function(e){return new G("setcps",{value:e})},_s=function(e){return new G("setcps",{value:e/120/2})},ds=function(){return new G("hush")},s=0,g=0,N=[{line:1,column:1}],x=0,L=[],f=0,B;if("startRule"in c){if(!(c.startRule in v))throw new Error(`Can't start parsing from rule "`+c.startRule+'".');h=v[c.startRule]}function As(){return a.substring(g,s)}function ws(){return M(g,s)}function p(e,t){return{type:"literal",text:e,ignoreCase:t}}function j(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function ys(){return{type:"end"}}function Ae(e){return{type:"other",description:e}}function we(e){var t=N[e],n;if(t)return t;for(n=e-1;!N[n];)n--;for(t=N[n],t={line:t.line,column:t.column};n<e;)a.charCodeAt(n)===10?(t.line++,t.column=1):t.column++,n++;return N[e]=t,t}function M(e,t){var n=we(e),i=we(t);return{source:m,start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:i.line,column:i.column}}}function o(e){s<x||(s>x&&(x=s,L=[]),L.push(e))}function bs(e,t,n){return new D(D.buildMessage(e,t),e,t,n)}function ye(){var e;return e=ot(),e}function y(){var e,t;return f++,e=s,be(),t=T(),t!==r?(js(),Fs(),g=e,e=Lr()):(s=e,e=r),f--,e===r&&f===0&&o(rr),e}function Cs(){var e;return a.charCodeAt(s)===46?(e=w,s++):(e=r,f===0&&o(ge)),e}function xs(){var e;return Qe.test(a.charAt(s))?(e=a.charAt(s),s++):(e=r,f===0&&o(sr)),e}function Es(){var e;return Ve.test(a.charAt(s))?(e=a.charAt(s),s++):(e=r,f===0&&o(tr)),e}function Fs(){var e,t,n,i,l;if(e=s,t=Es(),t!==r){if(n=be(),n===r&&(n=Ss()),n===r&&(n=null),i=[],l=S(),l!==r)for(;l!==r;)i.push(l),l=S();else i=r;i!==r?(t=[t,n,i],e=t):(s=e,e=r)}else s=e,e=r;return e}function js(){var e,t,n,i;if(e=s,t=Cs(),t!==r){if(n=[],i=S(),i!==r)for(;i!==r;)n.push(i),i=S();else n=r;n!==r?(t=[t,n],e=t):(s=e,e=r)}else s=e,e=r;return e}function T(){var e,t,n,i;if(e=Rs(),e===r)if(e=s,t=xs(),t!==r){for(n=[],i=S();i!==r;)n.push(i),i=S();t=[t,n],e=t}else s=e,e=r;return e}function be(){var e;return a.charCodeAt(s)===45?(e=A,s++):(e=r,f===0&&o(ve)),e}function Ss(){var e;return a.charCodeAt(s)===43?(e=E,s++):(e=r,f===0&&o(nr)),e}function Rs(){var e;return a.charCodeAt(s)===48?(e=_,s++):(e=r,f===0&&o(ar)),e}function S(){var e;return Ye.test(a.charAt(s))?(e=a.charAt(s),s++):(e=r,f===0&&o(ir)),e}function u(){var e,t;for(f++,e=[],ue.test(a.charAt(s))?(t=a.charAt(s),s++):(t=r,f===0&&o($e));t!==r;)e.push(t),ue.test(a.charAt(s))?(t=a.charAt(s),s++):(t=r,f===0&&o($e));return f--,t=r,f===0&&o(fr),e}function R(){var e,t,n,i;return e=s,t=u(),a.charCodeAt(s)===44?(n=$,s++):(n=r,f===0&&o(or)),n!==r?(i=u(),t=[t,n,i],e=t):(s=e,e=r),e}function Ce(){var e,t,n,i;return e=s,t=u(),a.charCodeAt(s)===124?(n=b,s++):(n=r,f===0&&o(cr)),n!==r?(i=u(),t=[t,n,i],e=t):(s=e,e=r),e}function P(){var e;return a.charCodeAt(s)===34?(e=F,s++):(e=r,f===0&&o(lr)),e===r&&(a.charCodeAt(s)===39?(e=De,s++):(e=r,f===0&&o(ur))),e}function z(){var e;return er.test(a.charAt(s))?(e=a.charAt(s),s++):(e=r,f===0&&o(pr)),e===r&&(a.charCodeAt(s)===45?(e=A,s++):(e=r,f===0&&o(ve)),e===r&&(a.charCodeAt(s)===35?(e=ke,s++):(e=r,f===0&&o(gr)),e===r&&(a.charCodeAt(s)===46?(e=w,s++):(e=r,f===0&&o(ge)),e===r&&(a.charCodeAt(s)===94?(e=Ne,s++):(e=r,f===0&&o(vr)),e===r&&(a.charCodeAt(s)===95?(e=Be,s++):(e=r,f===0&&o($r)),e===r&&(a.charCodeAt(s)===58?(e=Te,s++):(e=r,f===0&&o(hr)))))))),e}function xe(){var e,t,n;if(e=s,u(),t=[],n=z(),n!==r)for(;n!==r;)t.push(n),n=z();else t=r;return t!==r?(n=u(),g=e,e=Mr(t)):(s=e,e=r),e}function Ps(){var e,t,n,i;return e=s,u(),a.charCodeAt(s)===91?(t=K,s++):(t=r,f===0&&o(he)),t!==r?(u(),n=Fe(),n!==r?(u(),a.charCodeAt(s)===93?(i=Q,s++):(i=r,f===0&&o(me)),i!==r?(u(),g=e,e=Wr(n)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function Os(){var e,t,n,i;return e=s,u(),a.charCodeAt(s)===60?(t=ze,s++):(t=r,f===0&&o(mr)),t!==r?(u(),n=O(),n!==r?(u(),a.charCodeAt(s)===62?(i=Le,s++):(i=r,f===0&&o(_r)),i!==r?(u(),g=e,e=Zr(n)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function qs(){var e;return e=xe(),e===r&&(e=Ps(),e===r&&(e=Os())),e}function Is(){var e;return e=Ds(),e===r&&(e=Ns(),e===r&&(e=Bs(),e===r&&(e=Ts(),e===r&&(e=zs(),e===r&&(e=ks(),e===r&&(e=Ls())))))),e}function Ds(){var e,t,n;return e=s,a.charCodeAt(s)===64?(t=Me,s++):(t=r,f===0&&o(dr)),t!==r?(n=y(),n!==r?(g=e,e=Gr(n)):(s=e,e=r)):(s=e,e=r),e}function ks(){var e,t,n;return e=s,a.charCodeAt(s)===33?(t=We,s++):(t=r,f===0&&o(Ar)),t!==r?(n=y(),n!==r?(g=e,e=Ur(n)):(s=e,e=r)):(s=e,e=r),e}function Ns(){var e,t,n,i,l,d,C;return e=s,a.charCodeAt(s)===40?(t=Ze,s++):(t=r,f===0&&o(wr)),t!==r?(u(),n=y(),n!==r?(u(),i=R(),i!==r?(u(),l=y(),l!==r?(u(),R(),u(),d=y(),d===r&&(d=null),u(),a.charCodeAt(s)===41?(C=Ge,s++):(C=r,f===0&&o(yr)),C!==r?(g=e,e=Xr(n,l,d)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function Bs(){var e,t,n;return e=s,a.charCodeAt(s)===47?(t=Ue,s++):(t=r,f===0&&o(br)),t!==r?(n=y(),n!==r?(g=e,e=Hr(n)):(s=e,e=r)):(s=e,e=r),e}function Ts(){var e,t,n;return e=s,a.charCodeAt(s)===42?(t=Xe,s++):(t=r,f===0&&o(Cr)),t!==r?(n=y(),n!==r?(g=e,e=Jr(n)):(s=e,e=r)):(s=e,e=r),e}function zs(){var e,t,n;return e=s,a.charCodeAt(s)===37?(t=He,s++):(t=r,f===0&&o(xr)),t!==r?(n=y(),n!==r?(g=e,e=Kr(n)):(s=e,e=r)):(s=e,e=r),e}function Ls(){var e,t,n;return e=s,a.charCodeAt(s)===63?(t=Je,s++):(t=r,f===0&&o(Er)),t!==r?(n=y(),n===r&&(n=null),g=e,e=Qr(n)):(s=e,e=r),e}function Ee(){var e,t,n;return e=s,t=qs(),t!==r?(n=Is(),n===r&&(n=null),g=e,e=Vr(t,n)):(s=e,e=r),e}function O(){var e,t,n;if(e=s,t=[],n=Ee(),n!==r)for(;n!==r;)t.push(n),n=Ee();else t=r;return t!==r&&(g=e,t=Yr(t)),e=t,e}function Ms(){var e,t,n,i,l;if(e=s,t=[],n=s,i=R(),i!==r?(l=O(),l!==r?n=l:(s=n,n=r)):(s=n,n=r),n!==r)for(;n!==r;)t.push(n),n=s,i=R(),i!==r?(l=O(),l!==r?n=l:(s=n,n=r)):(s=n,n=r);else t=r;return t!==r&&(g=e,t=es(t)),e=t,e}function Ws(){var e,t,n,i,l;if(e=s,t=[],n=s,i=Ce(),i!==r?(l=O(),l!==r?n=l:(s=n,n=r)):(s=n,n=r),n!==r)for(;n!==r;)t.push(n),n=s,i=Ce(),i!==r?(l=O(),l!==r?n=l:(s=n,n=r)):(s=n,n=r);else t=r;return t!==r&&(g=e,t=rs(t)),e=t,e}function Fe(){var e,t,n;return e=s,t=O(),t!==r?(n=Ms(),n===r&&(n=Ws()),n===r&&(n=null),g=e,e=ss(t,n)):(s=e,e=r),e}function Zs(){var e,t,n,i;return e=s,u(),t=P(),t!==r?(n=Fe(),n!==r?(i=P(),i!==r?(g=e,e=ts(n)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function Gs(){var e;return e=Ys(),e===r&&(e=Js(),e===r&&(e=Vs(),e===r&&(e=Xs(),e===r&&(e=Hs(),e===r&&(e=Us(),e===r&&(e=Qs(),e===r&&(e=Ks()))))))),e}function Us(){var e,t,n;return e=s,a.substr(s,6)===V?(t=V,s+=6):(t=r,f===0&&o(Fr)),t!==r?(u(),n=q(),n!==r?(g=e,e=ns(n)):(s=e,e=r)):(s=e,e=r),e}function Xs(){var e,t,n,i,l;return e=s,a.substr(s,6)===Y?(t=Y,s+=6):(t=r,f===0&&o(jr)),t!==r?(u(),n=P(),n!==r?(i=xe(),i!==r?(l=P(),l!==r?(g=e,e=as(i)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function Hs(){var e,t,n,i;return e=s,a.substr(s,6)===ee?(t=ee,s+=6):(t=r,f===0&&o(Sr)),t!==r?(u(),n=T(),n!==r?(u(),i=T(),i!==r?(u(),T(),g=e,e=is(n,i)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r),e}function Js(){var e,t,n;return e=s,a.substr(s,4)===re?(t=re,s+=4):(t=r,f===0&&o(Rr)),t!==r?(u(),n=y(),n!==r?(g=e,e=fs(n)):(s=e,e=r)):(s=e,e=r),e}function Ks(){var e,t,n;return e=s,a.substr(s,4)===se?(t=se,s+=4):(t=r,f===0&&o(Pr)),t!==r?(u(),n=y(),n!==r?(g=e,e=os(n)):(s=e,e=r)):(s=e,e=r),e}function Qs(){var e,t,n;return e=s,a.substr(s,4)===te?(t=te,s+=4):(t=r,f===0&&o(Or)),t!==r?(u(),n=y(),n!==r?(g=e,e=cs(n)):(s=e,e=r)):(s=e,e=r),e}function Vs(){var e,t,n;return e=s,a.substr(s,4)===ne?(t=ne,s+=4):(t=r,f===0&&o(qr)),t!==r?(u(),n=y(),n!==r?(g=e,e=ls(n)):(s=e,e=r)):(s=e,e=r),e}function Ys(){var e,t,n,i,l;if(e=s,a.substr(s,5)===ae?(t=ae,s+=5):(t=r,f===0&&o(Ir)),t!==r)if(u(),n=P(),n!==r){if(i=[],l=z(),l!==r)for(;l!==r;)i.push(l),l=z();else i=r;i!==r?(l=P(),l!==r?(g=e,e=us(i)):(s=e,e=r)):(s=e,e=r)}else s=e,e=r;else s=e,e=r;return e}function W(){var e,t,n,i;if(e=s,a.substr(s,2)===ie?(t=ie,s+=2):(t=r,f===0&&o(Dr)),t!==r){for(n=[],pe.test(a.charAt(s))?(i=a.charAt(s),s++):(i=r,f===0&&o(_e));i!==r;)n.push(i),pe.test(a.charAt(s))?(i=a.charAt(s),s++):(i=r,f===0&&o(_e));t=[t,n],e=t}else s=e,e=r;return e}function et(){var e,t,n,i,l,d,C,I;if(e=s,a.substr(s,3)===fe?(t=fe,s+=3):(t=r,f===0&&o(kr)),t!==r)if(u(),a.charCodeAt(s)===91?(n=K,s++):(n=r,f===0&&o(he)),n!==r)if(u(),i=q(),i!==r){for(l=[],d=s,C=R(),C!==r?(I=q(),I!==r?(g=d,d=de(i,I)):(s=d,d=r)):(s=d,d=r);d!==r;)l.push(d),d=s,C=R(),C!==r?(I=q(),I!==r?(g=d,d=de(i,I)):(s=d,d=r)):(s=d,d=r);d=u(),a.charCodeAt(s)===93?(C=Q,s++):(C=r,f===0&&o(me)),C!==r?(g=e,e=ps(i,l)):(s=e,e=r)}else s=e,e=r;else s=e,e=r;else s=e,e=r;return e}function rt(){var e;return e=et(),e===r&&(e=Zs()),e}function q(){var e,t,n,i,l;if(e=s,t=rt(),t!==r){for(u(),n=[],i=W();i!==r;)n.push(i),i=W();g=e,e=gs(t)}else s=e,e=r;return e===r&&(e=s,t=Gs(),t!==r?(u(),a.charCodeAt(s)===36?(n=Ke,s++):(n=r,f===0&&o(Nr)),n!==r?(i=u(),l=q(),l!==r?(g=e,e=vs(t,l)):(s=e,e=r)):(s=e,e=r)):(s=e,e=r)),e}function st(){var e,t;return e=s,t=q(),t!==r&&(g=e,t=$s(t)),e=t,e===r&&(e=W()),e}function tt(){var e;return e=st(),e}function nt(){var e,t;return e=s,u(),t=at(),t===r&&(t=it(),t===r&&(t=ft())),t!==r?(u(),g=e,e=hs(t)):(s=e,e=r),e}function at(){var e,t,n;return e=s,a.substr(s,6)===oe?(t=oe,s+=6):(t=r,f===0&&o(Br)),t!==r?(u(),n=y(),n!==r?(g=e,e=ms(n)):(s=e,e=r)):(s=e,e=r),e}function it(){var e,t,n;return e=s,a.substr(s,6)===ce?(t=ce,s+=6):(t=r,f===0&&o(Tr)),t!==r?(u(),n=y(),n!==r?(g=e,e=_s(n)):(s=e,e=r)):(s=e,e=r),e}function ft(){var e,t;return e=s,a.substr(s,4)===le?(t=le,s+=4):(t=r,f===0&&o(zr)),t!==r&&(g=e,t=ds()),e=t,e}function ot(){var e;return e=tt(),e===r&&(e=nt()),e}var Z=function(e,t){this.type_="pattern",this.arguments_={alignment:t},this.source_=e},ct=function(e,t,n){this.type_=e,this.arguments_=t,this.source_=n},lt=function(e,t){this.type_="element",this.source_=e,this.options_=t,this.location_=ws()},G=function(e,t){this.type_="command",this.name_=e,this.options_=t};if(B=h(),B!==r&&s===a.length)return B;throw B!==r&&s<a.length&&o(ys()),bs(L,x<a.length?a.charAt(x):null,x<a.length?M(x,x+1):M(x,x))}const{pure:vt,Pattern:H,Fraction:Pe,stack:$t,slowcat:ht,sequence:Oe,timeCat:mt,silence:je,reify:X}=pt;var _t=0;const qe=2e-4;function Ie(){return _t++}const dt=a=>(c,r)=>{const v=a.source_[r].options_,h=v==null?void 0:v.operator;if(h){switch(h.type_){case"stretch":{const A=Pe(h.arguments_.amount).inverse();return X(c).fast(A)}case"bjorklund":return c.euclid(h.arguments_.pulse,h.arguments_.step,h.arguments_.rotation);case"degradeBy":return X(c)._degradeByWith(Se.early(qe*Ie()).segment(1),h.arguments_.amount)}console.warn(`operator "${h.type_}" not implemented`)}if(v!=null&&v.weight)return c;const w=Object.keys(v||{}).filter(A=>A!=="operator");return w.length&&console.warn(`option${w.length>1?"s":""} ${w.map(A=>`"${A}"`).join(", ")} not implemented`),c};function At(a){a.source_=a.source_.map(c=>{const{replicate:r,...m}=c.options_||{};return r?{...c,options_:{...m,weight:r},source_:{type_:"pattern",arguments_:{alignment:"h"},source_:[{type_:"element",source_:c.source_,location_:c.location_,options_:{operator:{type_:"stretch",arguments_:{amount:Pe(r).inverse().toString()}}}}]}}:c})}function k(a){switch(a.type_){case"pattern":{At(a);const c=a.source_.map(k).map(dt(a)),r=a.arguments_.alignment;if(r==="v")return $t(...c);if(r==="r")return ut(Se.early(qe*Ie()).segment(1),c);const m=a.source_.some(v=>{var h;return!!((h=v.options_)!=null&&h.weight)});if(!m&&r==="t")return ht(...c);if(m){const v=mt(...a.source_.map((h,w)=>{var A;return[((A=h.options_)==null?void 0:A.weight)||1,c[w]]}));if(r==="t"){const h=a.source_.reduce((w,A)=>{var E;return w+(((E=A.options_)==null?void 0:E.weight)||1)},0);return v._slow(h)}return v}return Oe(...c)}case"element":{if(a.source_==="~")return je;if(typeof a.source_!="object"){if(!a.location_)return console.warn("no location for",a),a.source_;const{start:c,end:r}=a.location_,m=isNaN(Number(a.source_))?a.source_:Number(a.source_);return vt(m).withLocation([c.line,c.column,c.offset],[r.line,r.column,r.offset])}return k(a.source_)}case"stretch":return k(a.source_).slow(a.arguments_.amount);default:return console.warn(`node type "${a.type_}" not implemented -> returning silence`),je}}const J=(...a)=>{const c=a.map(r=>{const m=Re(`"${r}"`);return k(m)});return Oe(...c)},wt=a=>{const c=Re(a);return k(c)};H.prototype.define("mini",J,{composable:!0});H.prototype.define("m",J,{composable:!0});H.prototype.define("h",wt,{composable:!0});function bt(a){return typeof a=="string"?J(a):X(a)}export{D as SyntaxError,wt as h,J as mini,bt as minify,Re as parse,k as patternifyAST};
//# sourceMappingURL=index.76b2d36b.js.map
