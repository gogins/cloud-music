var Bn=Object.defineProperty,Hn=Object.defineProperties;var Ln=Object.getOwnPropertyDescriptors;var kt=Object.getOwnPropertySymbols;var Un=Object.prototype.hasOwnProperty,Xn=Object.prototype.propertyIsEnumerable;var Rt=(t,n,e)=>n in t?Bn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,y=(t,n)=>{for(var e in n||(n={}))Un.call(n,e)&&Rt(t,e,n[e]);if(kt)for(var e of kt(n))Xn.call(n,e)&&Rt(t,e,n[e]);return t},g=(t,n)=>Hn(t,Ln(n));import{P as w,m as Kn,g as Qn,c as Y,a as Yn,r as Zn,H as Jn,s as Wn}from"./index.43866394.js";const x=(t,n)=>Array(Math.abs(n)+1).join(t);function A(t,n,e){return function(...o){return console.warn(`${t} is deprecated. Use ${n}.`),e.apply(this,o)}}function q(t){return t!==null&&typeof t=="object"&&typeof t.name=="string"}function G(t){return t!==null&&typeof t=="object"&&typeof t.step=="number"&&typeof t.alt=="number"}const Yt=[0,2,4,-1,1,3,5],Zt=Yt.map(t=>Math.floor(t*7/12));function et(t){const{step:n,alt:e,oct:o,dir:r=1}=t,i=Yt[n]+7*e;if(o===void 0)return[r*i];const a=o-Zt[n]-4*e;return[r*i,r*a]}const te=[3,0,4,1,5,2,6];function ot(t){const[n,e,o]=t,r=te[ne(n)],i=Math.floor((n+1)/7);if(e===void 0)return{step:r,alt:i,dir:o};const a=e+4*i+Zt[r];return{step:r,alt:i,oct:a,dir:o}}function ne(t){const n=(t+1)%7;return n<0?7+n:n}const Jt={empty:!0,name:"",pc:"",acc:""},Ot=new Map,At=t=>"CDEFGAB".charAt(t),k=t=>t<0?x("b",-t):x("#",t),B=t=>t[0]==="b"?-t.length:t.length;function u(t){const n=Ot.get(t);if(n)return n;const e=typeof t=="string"?re(t):G(t)?u(ie(t)):q(t)?u(t.name):Jt;return Ot.set(t,e),e}const ee=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function rt(t){const n=ee.exec(t);return[n[1].toUpperCase(),n[2].replace(/x/g,"##"),n[3],n[4]]}function z(t){return u(ot(t))}const oe=(t,n)=>(t%n+n)%n,ht=[0,2,4,5,7,9,11];function re(t){const n=rt(t);if(n[0]===""||n[3]!=="")return Jt;const e=n[0],o=n[1],r=n[2],i=(e.charCodeAt(0)+3)%7,a=B(o),s=r.length?+r:void 0,c=et({step:i,alt:a,oct:s}),l=e+o+r,m=e+o,d=(ht[i]+a+120)%12,M=s===void 0?oe(ht[i]+a,12)-12*99:ht[i]+a+12*(s+1),b=M>=0&&M<=127?M:null,p=s===void 0?null:Math.pow(2,(M-69)/12)*440;return{empty:!1,acc:o,alt:a,chroma:d,coord:c,freq:p,height:M,letter:e,midi:b,name:l,oct:s,pc:m,step:i}}function ie(t){const{step:n,alt:e,oct:o}=t,r=At(n);if(!r)return"";const i=r+k(e);return o||o===0?i+o:i}const yt={empty:!0,name:"",acc:""},ae="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",se="(AA|A|P|M|m|d|dd)([-+]?\\d+)",ce=new RegExp("^"+ae+"|"+se+"$");function Nt(t){const n=ce.exec(`${t}`);return n===null?["",""]:n[1]?[n[1],n[2]]:[n[4],n[3]]}const Ft={};function f(t){return typeof t=="string"?Ft[t]||(Ft[t]=me(t)):G(t)?f(le(t)):q(t)?f(t.name):yt}const zt=[0,2,4,5,7,9,11],Wt="PMMPPMM";function me(t){const n=Nt(t);if(n[0]==="")return yt;const e=+n[0],o=n[1],r=(Math.abs(e)-1)%7,i=Wt[r];if(i==="M"&&o==="P")return yt;const a=i==="M"?"majorable":"perfectable",s=""+e+o,c=e<0?-1:1,l=e===8||e===-8?e:c*(r+1),m=ue(a,o),d=Math.floor((Math.abs(e)-1)/7),M=c*(zt[r]+m+12*d),b=(c*(zt[r]+m)%12+12)%12,p=et({step:r,alt:m,oct:d,dir:c});return{empty:!1,name:s,num:e,q:o,step:r,alt:m,dir:c,type:a,simple:l,semitones:M,chroma:b,coord:p,oct:d}}function H(t,n){const[e,o=0]=t,r=e*7+o*12<0,i=n||r?[-e,-o,-1]:[e,o,1];return f(ot(i))}function ue(t,n){return n==="M"&&t==="majorable"||n==="P"&&t==="perfectable"?0:n==="m"&&t==="majorable"?-1:/^A+$/.test(n)?n.length:/^d+$/.test(n)?-1*(t==="perfectable"?n.length:n.length+1):0}function le(t){const{step:n,alt:e,oct:o=0,dir:r}=t;if(!r)return"";const i=n+1+7*o,a=i===0?n+1:i,s=r<0?"-":"",c=Wt[n]==="M"?"majorable":"perfectable";return s+a+de(c,e)}function de(t,n){return n===0?t==="majorable"?"M":"P":n===-1&&t==="majorable"?"m":n>0?x("A",n):x("d",t==="perfectable"?n:n+1)}function P(t,n){const e=u(t),o=f(n);if(e.empty||o.empty)return"";const r=e.coord,i=o.coord,a=r.length===1?[r[0]+i[0]]:[r[0]+i[0],r[1]+i[1]];return z(a).name}function R(t,n){const e=u(t),o=u(n);if(e.empty||o.empty)return"";const r=e.coord,i=o.coord,a=i[0]-r[0],s=r.length===2&&i.length===2?i[1]-r[1]:-Math.floor(a*7/12),c=o.height===e.height&&o.midi!==null&&e.midi!==null&&e.step>o.step;return H([a,s],c).name}var tn=Object.freeze(Object.defineProperty({__proto__:null,accToAlt:B,altToAcc:k,coordToInterval:H,coordToNote:z,decode:ot,deprecate:A,distance:R,encode:et,fillStr:x,interval:f,isNamed:q,isPitch:G,note:u,stepToLetter:At,tokenizeInterval:Nt,tokenizeNote:rt,transpose:P},Symbol.toStringTag,{value:"Module"}));const qt=(t,n)=>Array(n+1).join(t),Me=/^(_{1,}|=|\^{1,}|)([abcdefgABCDEFG])([,']*)$/;function nn(t){const n=Me.exec(t);return n?[n[1],n[2],n[3]]:["","",""]}function W(t){const[n,e,o]=nn(t);if(e==="")return"";let r=4;for(let a=0;a<o.length;a++)r+=o.charAt(a)===","?-1:1;const i=n[0]==="_"?n.replace(/_/g,"b"):n[0]==="^"?n.replace(/\^/g,"#"):"";return e.charCodeAt(0)>96?e.toUpperCase()+i+(r+1):e+i+r}function en(t){const n=u(t);if(n.empty||!n.oct&&n.oct!==0)return"";const{letter:e,acc:o,oct:r}=n,i=o[0]==="b"?o.replace(/b/g,"_"):o.replace(/#/g,"^"),a=r>4?e.toLowerCase():e,s=r===5?"":r>4?qt("'",r-5):qt(",",4-r);return i+a+s}function fe(t,n){return en(P(W(t),n))}function Pe(t,n){return R(W(t),W(n))}var pe={abcToScientificNotation:W,scientificToAbcNotation:en,tokenize:nn,transpose:fe,distance:Pe};function he(t,n){const e=[];for(;n--;e[n]=n+t);return e}function ye(t,n){const e=[];for(;n--;e[n]=t-n);return e}function ge(t,n){return t<n?he(t,n-t+1):ye(t,t-n+1)}function be(t,n){const e=n.length,o=(t%e+e)%e;return n.slice(o,e).concat(n.slice(0,o))}function ve(t){return t.filter(n=>n===0||n)}function on(t){return t.map(e=>u(e)).filter(e=>!e.empty).sort((e,o)=>e.height-o.height).map(e=>e.name)}function Ae(t){return on(t).filter((n,e,o)=>e===0||n!==o[e-1])}function Ne(t,n=Math.random){let e,o,r=t.length;for(;r;)e=Math.floor(n()*r--),o=t[r],t[r]=t[e],t[e]=o;return t}function rn(t){return t.length===0?[[]]:rn(t.slice(1)).reduce((n,e)=>n.concat(t.map((o,r)=>{const i=e.slice();return i.splice(r,0,t[0]),i})),[])}var $e=Object.freeze(Object.defineProperty({__proto__:null,compact:ve,permutations:rn,range:ge,rotate:be,shuffle:Ne,sortedNoteNames:on,sortedUniqNoteNames:Ae},Symbol.toStringTag,{value:"Module"}));function Ie(t,n){const e=[];for(;n--;e[n]=n+t);return e}function je(t,n){const e=[];for(;n--;e[n]=t-n);return e}function it(t,n){return t<n?Ie(t,n-t+1):je(t,t-n+1)}function L(t,n){const e=n.length,o=(t%e+e)%e;return n.slice(o,e).concat(n.slice(0,o))}function $t(t){return t.filter(n=>n===0||n)}function Te(t,n=Math.random){let e,o,r=t.length;for(;r;)e=Math.floor(n()*r--),o=t[r],t[r]=t[e],t[e]=o;return t}function an(t){return t.length===0?[[]]:an(t.slice(1)).reduce((n,e)=>n.concat(t.map((o,r)=>{const i=e.slice();return i.splice(r,0,t[0]),i})),[])}var Se={compact:$t,permutations:an,range:it,rotate:L,shuffle:Te};const C={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},It=t=>Number(t).toString(2),Gt=t=>parseInt(t,2),Ve=/^[01]{12}$/;function sn(t){return Ve.test(t)}const Ce=t=>typeof t=="number"&&t>=0&&t<=4095,_e=t=>t&&sn(t.chroma),Bt={[C.chroma]:C};function h(t){const n=sn(t)?t:Ce(t)?It(t):Array.isArray(t)?Be(t):_e(t)?t.chroma:C.chroma;return Bt[n]=Bt[n]||Ge(n)}const we=A("Pcset.pcset","Pcset.get",h),xe=t=>h(t).chroma,Ee=t=>h(t).intervals,De=t=>h(t).setNum,ke=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Re(t){const n=[];for(let e=0;e<12;e++)t.charAt(e)==="1"&&n.push(ke[e]);return n}function Oe(){return it(2048,4095).map(It)}function jt(t,n=!0){const o=h(t).chroma.split("");return $t(o.map((r,i)=>{const a=L(i,o);return n&&a[0]==="0"?null:a.join("")}))}function Fe(t,n){return h(t).setNum===h(n).setNum}function at(t){const n=h(t).setNum;return e=>{const o=h(e).setNum;return n&&n!==o&&(o&n)===o}}function st(t){const n=h(t).setNum;return e=>{const o=h(e).setNum;return n&&n!==o&&(o|n)===o}}function cn(t){const n=h(t);return e=>{const o=u(e);return n&&!o.empty&&n.chroma.charAt(o.chroma)==="1"}}function ze(t){const n=cn(t);return e=>e.filter(n)}var mn={get:h,chroma:xe,num:De,intervals:Ee,chromas:Oe,isSupersetOf:st,isSubsetOf:at,isNoteIncludedIn:cn,isEqual:Fe,filter:ze,modes:jt,pcset:we};function qe(t){const n=t.split("");return n.map((e,o)=>L(o,n).join(""))}function Ge(t){const n=Gt(t),e=qe(t).map(Gt).filter(i=>i>=2048).sort()[0],o=It(e),r=Re(t);return{empty:!1,name:"",setNum:n,chroma:t,normalized:o,intervals:r}}function Be(t){if(t.length===0)return C.chroma;let n;const e=[0,0,0,0,0,0,0,0,0,0,0,0];for(let o=0;o<t.length;o++)n=u(t[o]),n.empty&&(n=f(t[o])),n.empty||(e[n.chroma]=1);return e.join("")}const He=[["1P 3M 5P","major","M ^ "],["1P 3M 5P 7M","major seventh","maj7 \u0394 ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 \u03949 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth/ninth","6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim \xB0 o"],["1P 3m 5d 7d","diminished seventh","dim7 \xB07 o7"],["1P 3m 5d 7m","half-diminished","m7b5 \xF8 -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 \u03949#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],Le=g(y({},C),{name:"",quality:"Unknown",intervals:[],aliases:[]});let O=[],S={};function Tt(t){return S[t]||Le}const Ue=A("ChordType.chordType","ChordType.get",Tt);function Xe(){return O.map(t=>t.name).filter(t=>t)}function Ke(){return O.map(t=>t.aliases[0]).filter(t=>t)}function Qe(){return Object.keys(S)}function F(){return O.slice()}const Ye=A("ChordType.entries","ChordType.all",F);function Ze(){O=[],S={}}function un(t,n,e){const o=We(t),r=g(y({},h(t)),{name:e||"",quality:o,intervals:t,aliases:n});O.push(r),r.name&&(S[r.name]=r),S[r.setNum]=r,S[r.chroma]=r,r.aliases.forEach(i=>Je(r,i))}function Je(t,n){S[n]=t}function We(t){const n=e=>t.indexOf(e)!==-1;return n("5A")?"Augmented":n("3M")?"Major":n("5d")?"Diminished":n("3m")?"Minor":"Unknown"}He.forEach(([t,n,e])=>un(t.split(" "),e.split(" "),n));O.sort((t,n)=>t.setNum-n.setNum);var ln={names:Xe,symbols:Ke,get:Tt,all:F,add:un,removeAll:Ze,keys:Qe,entries:Ye,chordType:Ue};const to=t=>{const n=t.reduce((e,o)=>{const r=u(o).chroma;return r!==void 0&&(e[r]=e[r]||u(o).name),e},{});return e=>n[e]};function no(t){const n=t.map(o=>u(o).pc).filter(o=>o);return u.length===0?[]:eo(n,1).filter(o=>o.weight).sort((o,r)=>r.weight-o.weight).map(o=>o.name)}function eo(t,n){const e=t[0],o=u(e).chroma,r=to(t),i=jt(t,!1),a=[];return i.forEach((s,c)=>{F().filter(m=>m.chroma===s).forEach(m=>{const d=m.aliases[0],M=r(c);c!==o?a.push({weight:.5*n,name:`${M}${d}/${e}`}):a.push({weight:1*n,name:`${M}${d}`})})}),a}const oo=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neopolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5P pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7M pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neopolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 7m","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neopolitan major"],["1P 2M 3m 4P 5P 6m 7m","aeolian","minor"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],ro=g(y({},C),{intervals:[],aliases:[]});let ct=[],V={};function dn(){return ct.map(t=>t.name)}function mt(t){return V[t]||ro}const io=A("ScaleDictionary.scaleType","ScaleType.get",mt);function U(){return ct.slice()}const ao=A("ScaleDictionary.entries","ScaleType.all",U);function so(){return Object.keys(V)}function co(){ct=[],V={}}function Mn(t,n,e=[]){const o=g(y({},h(t)),{name:n,intervals:t,aliases:e});return ct.push(o),V[o.name]=o,V[o.setNum]=o,V[o.chroma]=o,o.aliases.forEach(r=>mo(o,r)),o}function mo(t,n){V[n]=t}oo.forEach(([t,n,...e])=>Mn(t.split(" "),n,e));var fn={names:dn,get:mt,all:U,add:Mn,removeAll:co,keys:so,entries:ao,scaleType:io};const gt={empty:!0,name:"",symbol:"",root:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]},uo=/^(6|64|7|9|11|13)$/;function ut(t){const[n,e,o,r]=rt(t);return n===""?["",t]:n==="A"&&r==="ug"?["","aug"]:!r&&(o==="4"||o==="5")?[n+e,o]:uo.test(o)?[n+e,o+r]:[n+e+o,r]}function X(t){if(t==="")return gt;if(Array.isArray(t)&&t.length===2)return Z(t[1],t[0]);{const[n,e]=ut(t),o=Z(e,n);return o.empty?Z(t):o}}function Z(t,n,e){const o=Tt(t),r=u(n||""),i=u(e||"");if(o.empty||n&&r.empty||e&&i.empty)return gt;const a=R(r.pc,i.pc),s=o.intervals.indexOf(a)+1;if(!i.empty&&!s)return gt;const c=Array.from(o.intervals);for(let M=1;M<s;M++){const b=c[0][0],p=c[0][1],pt=parseInt(b,10)+7;c.push(`${pt}${p}`),c.shift()}const l=r.empty?[]:c.map(M=>P(r,M));t=o.aliases.indexOf(t)!==-1?t:o.aliases[0];const m=`${r.empty?"":r.pc}${t}${i.empty||s<=1?"":"/"+i.pc}`,d=`${n?r.pc+" ":""}${o.name}${s>1&&e?" over "+i.pc:""}`;return g(y({},o),{name:d,symbol:m,type:o.name,root:i.name,intervals:c,rootDegree:s,tonic:r.name,notes:l})}const lo=A("Chord.chord","Chord.get",X);function Mo(t,n){const[e,o]=ut(t);return e?P(e,n)+o:t}function fo(t){const n=X(t),e=st(n.chroma);return U().filter(o=>e(o.chroma)).map(o=>o.name)}function Po(t){const n=X(t),e=st(n.chroma);return F().filter(o=>e(o.chroma)).map(o=>n.tonic+o.aliases[0])}function po(t){const n=X(t),e=at(n.chroma);return F().filter(o=>e(o.chroma)).map(o=>n.tonic+o.aliases[0])}var ho={getChord:Z,get:X,detect:no,chordScales:fo,extended:Po,reduced:po,tokenize:ut,transpose:Mo,chord:lo};const yo=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],lt=[];yo.forEach(([t,n,e])=>jo(t,n,e));const go={empty:!0,name:"",value:0,fraction:[0,0],shorthand:"",dots:"",names:[]};function bo(){return lt.reduce((t,n)=>(n.names.forEach(e=>t.push(e)),t),[])}function vo(){return lt.map(t=>t.shorthand)}const Ao=/^([^.]+)(\.*)$/;function St(t){const[n,e,o]=Ao.exec(t)||[],r=lt.find(s=>s.shorthand===e||s.names.includes(e));if(!r)return go;const i=To(r.fraction,o.length),a=i[0]/i[1];return g(y({},r),{name:t,dots:o,value:a,fraction:i})}const No=t=>St(t).value,$o=t=>St(t).fraction;var Io={names:bo,shorthands:vo,get:St,value:No,fraction:$o};function jo(t,n,e){lt.push({empty:!1,dots:"",name:"",value:1/t,fraction:t<1?[1/t,1]:[1,t],shorthand:n,names:e})}function To(t,n){const e=Math.pow(2,n);let o=t[0]*e,r=t[1]*e;const i=o;for(let a=0;a<n;a++)o+=i/Math.pow(2,a+1);for(;o%2===0&&r%2===0;)o/=2,r/=2;return[o,r]}function So(){return"1P 2M 3M 4P 5P 6m 7m".split(" ")}const Pn=f,Vo=t=>f(t).name,Co=t=>f(t).semitones,_o=t=>f(t).q,wo=t=>f(t).num;function pn(t){const n=f(t);return n.empty?"":n.simple+n.q}function xo(t){const n=f(t);if(n.empty)return"";const e=(7-n.step)%7,o=n.type==="perfectable"?-n.alt:-(n.alt+1);return f({step:e,alt:o,oct:n.oct,dir:n.dir}).name}const Eo=[1,2,2,3,3,4,5,5,6,6,7,7],Do="P m M m M P d P m M m M".split(" ");function ko(t){const n=t<0?-1:1,e=Math.abs(t),o=e%12,r=Math.floor(e/12);return n*(Eo[o]+7*r)+Do[o]}const Ro=R,hn=gn((t,n)=>[t[0]+n[0],t[1]+n[1]]),Oo=t=>n=>hn(t,n),Fo=gn((t,n)=>[t[0]-n[0],t[1]-n[1]]);function yn(t,n){const e=Pn(t);if(e.empty)return"";const[o,r,i]=e.coord;return H([o+n,r,i]).name}var bt={names:So,get:Pn,name:Vo,num:wo,semitones:Co,quality:_o,fromSemitones:ko,distance:Ro,invert:xo,simplify:pn,add:hn,addTo:Oo,substract:Fo,transposeFifths:yn};function gn(t){return(n,e)=>{const o=f(n).coord,r=f(e).coord;if(o&&r){const i=t(o,r);return H(i).name}}}function bn(t){return+t>=0&&+t<=127}function vn(t){if(bn(t))return+t;const n=u(t);return n.empty?null:n.midi}function zo(t,n=440){return Math.pow(2,(t-69)/12)*n}const qo=Math.log(2),Go=Math.log(440);function Vt(t){const n=12*(Math.log(t)-Go)/qo+69;return Math.round(n*100)/100}const Bo="C C# D D# E F F# G G# A A# B".split(" "),Ho="C Db D Eb E F Gb G Ab A Bb B".split(" ");function T(t,n={}){if(isNaN(t)||t===-1/0||t===1/0)return"";t=Math.round(t);const o=(n.sharps===!0?Bo:Ho)[t%12];if(n.pitchClass)return o;const r=Math.floor(t/12)-1;return o+r}var Lo={isMidi:bn,toMidi:vn,midiToFreq:zo,midiToNoteName:T,freqToMidi:Vt};const Uo=["C","D","E","F","G","A","B"],An=t=>t.name,Nn=t=>t.map(u).filter(n=>!n.empty);function Xo(t){return t===void 0?Uo.slice():Array.isArray(t)?Nn(t).map(An):[]}const v=u,Ko=t=>v(t).name,Qo=t=>v(t).pc,Yo=t=>v(t).acc,Zo=t=>v(t).oct,Jo=t=>v(t).midi,Wo=t=>v(t).freq,tr=t=>v(t).chroma;function $n(t){return T(t)}function nr(t){return T(Vt(t))}function er(t){return T(Vt(t),{sharps:!0})}function or(t){return T(t,{sharps:!0})}const Ct=P,rr=P,In=t=>n=>Ct(n,t),ir=In,jn=t=>n=>Ct(t,n),ar=jn;function tt(t,n){const e=v(t);if(e.empty)return"";const[o,r]=e.coord;return z(r===void 0?[o+n]:[o+n,r]).name}const sr=tt,_t=(t,n)=>t.height-n.height,cr=(t,n)=>n.height-t.height;function Tn(t,n){return n=n||_t,Nn(t).sort(n).map(An)}function Sn(t){return Tn(t,_t).filter((n,e,o)=>e===0||n!==o[e-1])}const mr=t=>{const n=v(t);return n.empty?"":T(n.midi||n.chroma,{sharps:n.alt>0,pitchClass:n.midi===null})};function Vn(t,n){const e=v(t);if(e.empty)return"";const o=v(n||T(e.midi||e.chroma,{sharps:e.alt<0,pitchClass:!0}));if(o.empty||o.chroma!==e.chroma)return"";if(e.oct===void 0)return o.pc;const r=e.chroma-e.alt,i=o.chroma-o.alt,a=r>11||i<0?-1:r<0||i>11?1:0,s=e.oct+a;return o.pc+s}var E={names:Xo,get:v,name:Ko,pitchClass:Qo,accidentals:Yo,octave:Zo,midi:Jo,ascending:_t,descending:cr,sortedNames:Tn,sortedUniqNames:Sn,fromMidi:$n,fromMidiSharps:or,freq:Wo,fromFreq:nr,fromFreqSharps:er,chroma:tr,transpose:Ct,tr:rr,transposeBy:In,trBy:ir,transposeFrom:jn,trFrom:ar,transposeFifths:tt,trFifths:sr,simplify:mr,enharmonic:Vn};const Cn={empty:!0,name:"",chordType:""},Ht={};function I(t){return typeof t=="string"?Ht[t]||(Ht[t]=pr(t)):typeof t=="number"?I(dt[t]||""):G(t)?dr(t):q(t)?I(t.name):Cn}const ur=A("RomanNumeral.romanNumeral","RomanNumeral.get",I);function lr(t=!0){return(t?dt:Pr).slice()}function dr(t){return I(k(t.alt)+dt[t.step])}const Mr=/^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;function fr(t){return Mr.exec(t)||["","","",""]}const _n="I II III IV V VI VII",dt=_n.split(" "),Pr=_n.toLowerCase().split(" ");function pr(t){const[n,e,o,r]=fr(t);if(!o)return Cn;const i=o.toUpperCase(),a=dt.indexOf(i),s=B(e),c=1;return{empty:!1,name:n,roman:o,interval:f({step:a,alt:s,dir:c}).name,acc:e,chordType:r,alt:s,step:a,major:o===i,oct:0,dir:c}}var hr={names:lr,get:I,romanNumeral:ur};const N=Object.freeze([]),wn={type:"major",tonic:"",alteration:0,keySignature:""},J={tonic:"",grades:N,intervals:N,scale:N,chords:N,chordsHarmonicFunction:N,chordScales:N},yr=g(y(y({},wn),J),{type:"major",minorRelative:"",scale:N,secondaryDominants:N,secondaryDominantsMinorRelative:N,substituteDominants:N,substituteDominantsMinorRelative:N}),gr=g(y({},wn),{type:"minor",relativeMajor:"",natural:J,harmonic:J,melodic:J}),Lt=(t,n,e="")=>n.map((o,r)=>`${t[r]}${e}${o}`);function Mt(t,n,e,o){return r=>{const i=t.map(s=>I(s).interval||""),a=i.map(s=>P(r,s));return{tonic:r,grades:t,intervals:i,scale:a,chords:Lt(a,n),chordsHarmonicFunction:e.slice(),chordScales:Lt(a,o," ")}}}const xn=(t,n)=>{const e=u(t),o=u(n);return e.empty||o.empty?0:o.coord[0]-e.coord[0]},br=Mt("I II III IV V VI VII".split(" "),"maj7 m7 m7 maj7 7 m7 m7b5".split(" "),"T SD T SD D T D".split(" "),"major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(",")),vr=Mt("I II bIII IV V bVI bVII".split(" "),"m7 m7b5 maj7 m7 m7 maj7 7".split(" "),"T SD T SD D SD SD".split(" "),"minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(",")),Ar=Mt("I II bIII IV V bVI VII".split(" "),"mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "),"T SD T SD D SD D".split(" "),"harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(",")),Nr=Mt("I II bIII IV V VI VII".split(" "),"m6 m7 +maj7 7 7 m7b5 m7b5".split(" "),"T SD T SD D  ".split(" "),"melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(","));function $r(t){const n=u(t).pc;if(!n)return yr;const e=br(n),o=xn("C",n),r=i=>{const a=I(i);return a.empty?"":P(t,a.interval)+a.chordType};return g(y({},e),{type:"major",minorRelative:P(n,"-3m"),alteration:o,keySignature:k(o),secondaryDominants:"- VI7 VII7 I7 II7 III7 -".split(" ").map(r),secondaryDominantsMinorRelative:"- IIIm7b5 IV#m7 Vm7 VIm7 VIIm7b5 -".split(" ").map(r),substituteDominants:"- bIII7 IV7 bV7 bVI7 bVII7 -".split(" ").map(r),substituteDominantsMinorRelative:"- IIIm7 Im7 IIbm7 VIm7 IVm7 -".split(" ").map(r)})}function Ir(t){const n=u(t).pc;if(!n)return gr;const e=xn("C",n)-3;return{type:"minor",tonic:n,relativeMajor:P(n,"3m"),alteration:e,keySignature:k(e),natural:vr(n),harmonic:Ar(n),melodic:Nr(n)}}function jr(t){return typeof t=="number"?tt("C",t):typeof t=="string"&&/^b+|#+$/.test(t)?tt("C",B(t)):null}var Tr={majorKey:$r,majorTonicFromKeySignature:jr,minorKey:Ir};const wt=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],Ut=g(y({},C),{name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]}),xt=wt.map(_r),vt={};xt.forEach(t=>{vt[t.name]=t,t.aliases.forEach(n=>{vt[n]=t})});function _(t){return typeof t=="string"?vt[t.toLowerCase()]||Ut:t&&t.name?_(t.name):Ut}const Sr=A("Mode.mode","Mode.get",_);function En(){return xt.slice()}const Vr=A("Mode.mode","Mode.all",En);function Cr(){return xt.map(t=>t.name)}function _r(t){const[n,e,o,r,i,a,s]=t,c=s?[s]:[],l=Number(e).toString(2),m=mt(r).intervals;return{empty:!1,intervals:m,modeNum:n,chroma:l,normalized:l,name:r,setNum:e,alt:o,triad:i,seventh:a,aliases:c}}function wr(t,n){return _(t).intervals.map(e=>P(n,e))}function Dn(t){return(n,e)=>{const o=_(n);if(o.empty)return[];const r=L(o.modeNum,t),i=o.intervals.map(a=>P(e,a));return r.map((a,s)=>i[s]+a)}}const xr=Dn(wt.map(t=>t[4])),Er=Dn(wt.map(t=>t[5]));function kn(t,n){const e=_(n),o=_(t);return e.empty||o.empty?"":pn(yn("1P",o.alt-e.alt))}function Dr(t,n,e){return P(e,kn(t,n))}var kr={get:_,names:Cr,all:En,distance:kn,relativeTonic:Dr,notes:wr,triads:xr,seventhChords:Er,entries:Vr,mode:Sr};function Rr(t,n){return n.map(I).map(o=>P(t,f(o))+o.chordType)}function Or(t,n){return n.map(e=>{const[o,r]=ut(e),i=R(t,o);return I(f(i)).name+r})}var Fr={fromRomanNumerals:Rr,toRomanNumerals:Or};function Rn(t){const n=$t(t.map(vn));return!t.length||n.length!==t.length?[]:n.reduce((e,o)=>{const r=e[e.length-1];return e.concat(it(r,o).slice(1))},[n[0]])}function zr(t,n){return Rn(t).map(e=>T(e,n))}var qr={numeric:Rn,chromatic:zr};const Gr={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function On(t){if(typeof t!="string")return["",""];const n=t.indexOf(" "),e=u(t.substring(0,n));if(e.empty){const r=u(t);return r.empty?["",t]:[r.name,""]}const o=t.substring(e.name.length+1);return[e.name,o.length?o:""]}const Br=dn;function j(t){const n=Array.isArray(t)?t:On(t),e=u(n[0]).name,o=mt(n[1]);if(o.empty)return Gr;const r=o.name,i=e?o.intervals.map(s=>P(e,s)):[],a=e?e+" "+r:r;return g(y({},o),{name:a,type:r,tonic:e,notes:i})}const Hr=A("Scale.scale","Scale.get",j);function Lr(t){const n=j(t),e=at(n.chroma);return F().filter(o=>e(o.chroma)).map(o=>o.aliases[0])}function Ur(t){const n=j(t),e=st(n.chroma);return U().filter(o=>e(o.chroma)).map(o=>o.name)}function Xr(t){const n=at(j(t).chroma);return U().filter(e=>n(e.chroma)).map(e=>e.name)}function Fn(t){const n=t.map(r=>u(r).pc).filter(r=>r),e=n[0],o=Sn(n);return L(o.indexOf(e),o)}function Kr(t){const n=j(t);if(n.empty)return[];const e=n.tonic?n.notes:n.intervals;return jt(n.chroma).map((o,r)=>{const i=j(o).name;return i?[e[r],i]:["",""]}).filter(o=>o[0])}function Qr(t){const n=Array.isArray(t)?Fn(t):j(t).notes,e=n.map(o=>u(o).chroma);return o=>{const r=u(typeof o=="number"?$n(o):o),i=r.height;if(i===void 0)return;const a=i%12,s=e.indexOf(a);if(s!==-1)return Vn(r.name,n[s])}}function Yr(t){const n=Qr(t);return(e,o)=>{const r=u(e).height,i=u(o).height;return r===void 0||i===void 0?[]:it(r,i).map(n).filter(a=>a)}}var nt={get:j,names:Br,extended:Ur,modeNames:Kr,reduced:Xr,scaleChords:Lr,scaleNotes:Fn,tokenize:On,rangeOf:Yr,scale:Hr};const Zr={empty:!0,name:"",upper:void 0,lower:void 0,type:void 0,additive:[]},Jr=["4/4","3/4","2/4","2/2","12/8","9/8","6/8","3/8"];function Wr(){return Jr.slice()}const ti=/^(\d?\d(?:\+\d)*)\/(\d)$/,Xt=new Map;function ni(t){const n=Xt.get(t);if(n)return n;const e=oi(Et(t));return Xt.set(t,e),e}function Et(t){if(typeof t=="string"){const[i,a,s]=ti.exec(t)||[];return Et([a,s])}const[n,e]=t,o=+e;if(typeof n=="number")return[n,o];const r=n.split("+").map(i=>+i);return r.length===1?[r[0],o]:[r,o]}var ei={names:Wr,parse:Et,get:ni};function oi([t,n]){const e=Array.isArray(t)?t.reduce((s,c)=>s+c,0):t,o=n;if(e===0||o===0)return Zr;const r=Array.isArray(t)?`${t.join("+")}/${n}`:`${t}/${n}`,i=Array.isArray(t)?t:[],a=o===4||o===2?"simple":o===8&&e%3===0?"compound":"irregular";return{empty:!1,name:r,type:a,upper:e,lower:o,additive:i}}const ri=tn,ii=mn,ai=ln,si=fn;var ci=Object.freeze(Object.defineProperty({__proto__:null,Array:$e,Core:tn,ChordDictionary:ai,PcSet:ii,ScaleDictionary:si,Tonal:ri,AbcNotation:pe,Chord:ho,ChordType:ln,Collection:Se,DurationValue:Io,Interval:bt,Key:Tr,Midi:Lo,Mode:kr,Note:E,Pcset:mn,Progression:Fr,Range:qr,RomanNumeral:hr,Scale:nt,ScaleType:fn,TimeSignature:ei,accToAlt:B,altToAcc:k,coordToInterval:H,coordToNote:z,decode:ot,deprecate:A,distance:R,encode:et,fillStr:x,interval:f,isNamed:q,isPitch:G,note:u,stepToLetter:At,tokenizeInterval:Nt,tokenizeNote:rt,transpose:P},Symbol.toStringTag,{value:"Module"}));function zn(t,n,e){let[o,r]=nt.tokenize(t),{notes:i}=nt.get(`${o} ${r}`);if(i=i.map(b=>E.get(b).pc),n=Number(n),isNaN(n))throw new Error(`scale offset "${n}" not a number`);const{pc:a,oct:s=3}=E.get(e),c=i.indexOf(a);if(c===-1)throw new Error(`note "${e}" is not in scale "${t}"`);let l=c,m=s,d=a;const M=Math.sign(n);for(;Math.abs(l-c)<Math.abs(n);){l+=M;const b=Kn(l,i.length);M<0&&d[0]==="C"&&(m+=M),d=i[b],M>0&&d[0]==="C"&&(m+=M)}return d+m}w.prototype._transpose=function(t){return this.withHap(n=>{const e=isNaN(Number(t))?String(t):bt.fromSemitones(t);if(typeof n.value=="number"){const o=typeof e=="string"?bt.semitones(e)||0:e;return n.withValue(()=>n.value+o)}return n.withValue(()=>E.simplify(E.transpose(n.value,e)))})};w.prototype._scaleTranspose=function(t){return this.withHap(n=>{if(!n.context.scale)throw new Error("can only use scaleTranspose after .scale");if(typeof n.value!="string")throw new Error("can only use scaleTranspose with notes");return n.withValue(()=>zn(n.context.scale,Number(t),n.value))})};w.prototype._scale=function(t){return this.withHap(n=>{let e=n.value;const o=Number(e);if(!isNaN(o)){let[r,i]=nt.tokenize(t);const{pc:a,oct:s=3}=E.get(r);e=zn(a+" "+i,o,a+s)}return n.withValue(()=>e).setContext(g(y({},n.context),{scale:t}))})};w.prototype.define("transpose",(t,n)=>n.transpose(t),{composable:!0,patternified:!0});w.prototype.define("scale",(t,n)=>n.scale(t),{composable:!0,patternified:!0});w.prototype.define("scaleTranspose",(t,n)=>n.scaleTranspose(t),{composable:!0,patternified:!0});var qn={},Dt={},K={};K.__esModule=!0;K.getBestVoicing=void 0;function mi(t){var n=t.chord,e=t.range,o=t.finder,r=t.picker,i=t.lastVoicing,a=o(n,e);return a.length?r(a,i):[]}K.getBestVoicing=mi;var ft={},Gn=Qn(ci),Q={};Q.__esModule=!0;Q.tokenizeChord=void 0;function ui(t){var n=(t||"").match(/^([A-G][b#]*)([^\/]*)[\/]?([A-G][b#]*)?$/);return n?n.slice(1):[]}Q.tokenizeChord=ui;ft.__esModule=!0;ft.voicingsInRange=void 0;var $=Gn,li=Dt,di=Q;function Mi(t,n,e){n===void 0&&(n=li.lefthand),e===void 0&&(e=["D3","A4"]);var o=(0,di.tokenizeChord)(t),r=o[0],i=o[1];if(!n[i])return[];var a=n[i].map(function(c){return c.split(" ")}),s=$.Range.chromatic(e);return a.reduce(function(c,l){var m=l.map(function(p){return $.Interval.substract(p,l[0])}),d=$.Note.transpose(r,l[0]),M=s.filter(function(p){return $.Note.chroma(p)===$.Note.chroma(d)}).filter(function(p){return $.Note.midi($.Note.transpose(p,m[m.length-1]))<=$.Note.midi(e[1])}).map(function(p){return $.Note.enharmonic(p,d)}),b=M.map(function(p){return m.map(function(pt){return $.Note.transpose(p,pt)})});return c.concat(b)},[])}ft.voicingsInRange=Mi;(function(t){var n=Y&&Y.__assign||function(){return n=Object.assign||function(s){for(var c,l=1,m=arguments.length;l<m;l++){c=arguments[l];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(s[d]=c[d])}return s},n.apply(this,arguments)},e=Y&&Y.__rest||function(s,c){var l={};for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&c.indexOf(m)<0&&(l[m]=s[m]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,m=Object.getOwnPropertySymbols(s);d<m.length;d++)c.indexOf(m[d])<0&&Object.prototype.propertyIsEnumerable.call(s,m[d])&&(l[m[d]]=s[m[d]]);return l};t.__esModule=!0,t.dictionaryVoicing=t.dictionaryVoicingFinder=t.triads=t.guidetones=t.lefthand=void 0;var o=K,r=ft;t.lefthand={m7:["3m 5P 7m 9M","7m 9M 10m 12P"],"7":["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],"69":["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},t.guidetones={m7:["3m 7m","7m 10m"],m9:["3m 7m","7m 10m"],"7":["3M 7m","7m 10M"],"^7":["3M 7M","7M 10M"],"^9":["3M 7M","7M 10M"],"69":["3M 6M"],"6":["3M 6M","6M 10M"],m7b5:["3m 7m","7m 10m"],"7b9":["3M 7m","7m 10M"],"7b13":["3M 7m","7m 10M"],o7:["3m 6M","6M 10m"],"7#11":["3M 7m","7m 10M"],"7#9":["3M 7m","7m 10M"],mM7:["3m 7M","7M 10m"],m6:["3m 6M","6M 10m"]},t.triads={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3m 5A","3m 5A 8P","5A 8P 10m"]};var i=function(s){return function(c,l){return(0,r.voicingsInRange)(c,s,l)}};t.dictionaryVoicingFinder=i;var a=function(s){var c=s.dictionary,l=s.range,m=e(s,["dictionary","range"]);return(0,o.getBestVoicing)(n(n({},m),{range:l,finder:(0,t.dictionaryVoicingFinder)(c)}))};t.dictionaryVoicing=a})(Dt);var Pt={};Pt.__esModule=!0;Pt.minTopNoteDiff=void 0;var Kt=Gn;function fi(t,n){if(!n)return t[0];var e=function(o){return Math.abs(Kt.Note.midi(n[n.length-1])-Kt.Note.midi(o[o.length-1]))};return t.reduce(function(o,r){return e(r)<e(o)?r:o},t[0])}Pt.minTopNoteDiff=fi;(function(t){t.__esModule=!0;var n=Dt,e=Pt,o=K,r=Q;t.default={tokenizeChord:r.tokenizeChord,getBestVoicing:o.getBestVoicing,dictionaryVoicing:n.dictionaryVoicing,dictionaryVoicingFinder:n.dictionaryVoicingFinder,lefthand:n.lefthand,guidetones:n.guidetones,triads:n.triads,minTopNoteDiff:e.minTopNoteDiff}})(qn);var Qt=Yn(qn);const{dictionaryVoicing:Pi,minTopNoteDiff:pi,lefthand:hi}=Qt.default||Qt,yi=(t,n,e=["F3","A4"])=>Pi({chord:t,dictionary:hi,range:e,picker:pi,lastVoicing:n}),D=w;D.prototype.fmapNested=function(t){return new D(n=>this.query(n).map(e=>Zn(t(e)).query(n).map(o=>new Jn(e.whole,e.part,o.value,o.context))).flat())};D.prototype.voicings=function(t){let n;return t!=null&&t.length||(t=["F3","A4"]),this.fmapNested(e=>(n=yi(e.value,n,t),Wn(...n).withContext(()=>({locations:e.context.locations||[]}))))};D.prototype._rootNotes=function(t=2){return this.fmap(n=>{const[e,o]=n.match(/^([a-gA-G][b#]?).*$/);return o+t})};D.prototype.define("voicings",(t,n)=>n.voicings(t),{composable:!0});D.prototype.define("rootNotes",(t,n)=>n.rootNotes(t),{composable:!0,patternified:!0});
