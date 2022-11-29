import{c as H,P as nt,B as Oe,l as rt}from"./index.c2dbfb48.js";var Ee={exports:{}};(function(D,T){(function(g,u){D.exports=u()})(H,function(){function g(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,e)}return n}function u(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(e){S(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function f(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function P(r,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function l(r,t,n){return t&&P(r.prototype,t),n&&P(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}function S(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function d(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&L(r,t)}function h(r){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(r)}function L(r,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},L(r,t)}function W(r,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(r)}function v(r){var t=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var n,e=h(r);if(t){var o=h(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return W(this,n)}}function Ce(r,t){for(;!Object.prototype.hasOwnProperty.call(r,t)&&(r=h(r))!==null;);return r}function w(){return w=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(r,t,n){var e=Ce(r,t);if(e){var o=Object.getOwnPropertyDescriptor(e,t);return o.get?o.get.call(arguments.length<3?r:n):o.value}},w.apply(this,arguments)}function m(r){return Number(r)===r&&r%1==0}function re(r){return Number(r)===r}function y(r){return typeof r=="string"}function oe(r){return typeof r=="boolean"}function se(r){return r===1/0}function j(r){return Object.prototype.toString.call(r)==="[object Array]"}function G(r){return Object.prototype.toString.call(r)==="[object Object]"}function B(r){return typeof r=="function"}function ie(r){return r instanceof Uint8Array}function Pe(r){return r instanceof Date}function A(r){return r===void 0}function ae(r){return r===null}function _(r){return r+3&-4}function ue(r){return Object.prototype.hasOwnProperty.call(typeof H!="undefined"?H:window,r)}function Ae(r){return r.buffer?new DataView(r.buffer):r instanceof ArrayBuffer?new DataView(r):new DataView(new Uint8Array(r))}function ce(r){if(m(r))return"i";if(t=r,Number(t)===t&&t%1!=0)return"f";if(y(r))return"s";if(ie(r))return"b";if(oe(r))return r?"T":"F";if(ae(r))return"N";if(se(r))return"I";var t;throw new Error("OSC typeTag() found unknown value type")}function N(r){var t="";if(j(r))return"/".concat(r.join("/"));if(y(r))return(t=r).length>1&&t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),t.length>1&&t[0]!=="/"&&(t="/".concat(t)),t;throw new Error("OSC prepareAddress() needs addresses of type array or string")}function fe(r){if(!y(r))throw new Error("OSC prepareRegExPattern() needs strings");return r.replace(/\./g,"\\.").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\{/g,"(").replace(/\}/g,")").replace(/,/g,"|").replace(/\[!/g,"[^").replace(/\?/g,".").replace(/\*/g,".*")}var le=function(){function r(){f(this,r),this.data=[],this.byteLength=0}return l(r,[{key:"add",value:function(t){if(oe(t)||se(t)||ae(t))return this;var n=t.pack();return this.byteLength+=n.byteLength,this.data.push(n),this}},{key:"merge",value:function(){var t=new Uint8Array(this.byteLength),n=0;return this.data.forEach(function(e){t.set(e,n),n+=e.byteLength}),t}}]),r}(),C=function(){function r(t){f(this,r),this.value=t,this.offset=0}return l(r,[{key:"pack",value:function(t,n){if(!t||!n)throw new Error("OSC Atomic cant't be packed without given method or byteLength");var e=new Uint8Array(n),o=new DataView(e.buffer);if(A(this.value))throw new Error("OSC Atomic cant't be encoded with empty value");return o[t](this.offset,this.value,!1),e}},{key:"unpack",value:function(t,n,e){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(!(t&&n&&e))throw new Error("OSC Atomic cant't be unpacked without given dataView, method or byteLength");if(!(t instanceof DataView))throw new Error("OSC Atomic expects an instance of type DataView");return this.value=t[n](o,!1),this.offset=o+e,this.offset}}]),r}(),R=function(r){d(n,r);var t=v(n);function n(e){if(f(this,n),e&&!m(e))throw new Error("OSC AtomicInt32 constructor expects value of type number");return t.call(this,e)}return l(n,[{key:"pack",value:function(){return w(h(n.prototype),"pack",this).call(this,"setInt32",4)}},{key:"unpack",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return w(h(n.prototype),"unpack",this).call(this,e,"getInt32",4,o)}}]),n}(C),he="utf-8";function Ie(r){if(ue("Buffer"))return Buffer.from(r).toString(he);if(ue("TextDecoder"))return new TextDecoder(he).decode(new Int8Array(r));for(var t="",n=0;n<r.length;n+=65537)t+=String.fromCharCode.apply(null,r.slice(n,n+65537));return t}var b=function(r){d(n,r);var t=v(n);function n(e){if(f(this,n),e&&!y(e))throw new Error("OSC AtomicString constructor expects value of type string");return t.call(this,e)}return l(n,[{key:"pack",value:function(){if(A(this.value))throw new Error("OSC AtomicString can not be encoded with empty value");for(var e="".concat(this.value,"\0"),o=_(e.length),s=new Uint8Array(o),i=0;i<e.length;i+=1)s[i]=e.charCodeAt(i);return s}},{key:"unpack",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(e instanceof DataView))throw new Error("OSC AtomicString expects an instance of type DataView");for(var s,i=o,a=[];i<e.byteLength;i+=1){if((s=e.getUint8(i))===0){i+=1;break}a.push(s)}if(i===e.length)throw new Error("OSC AtomicString found a malformed OSC string");return this.offset=_(i),this.value=Ie(a),this.offset}}]),n}(C),pe=2208988800,de=4294967296,$=function(){function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(f(this,r),!m(t)||!m(n))throw new Error("OSC Timetag constructor expects values of type integer number");this.seconds=t,this.fractions=n}return l(r,[{key:"timestamp",value:function(t){var n;if(typeof t=="number"){n=t/1e3;var e=Math.floor(n);return this.seconds=e+pe,this.fractions=Math.round(de*(n-e)),t}return 1e3*((n=this.seconds-pe)+Math.round(this.fractions/de))}}]),r}(),x=function(r){d(n,r);var t=v(n);function n(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Date.now();f(this,n);var o=new $;return e instanceof $?o=e:m(e)?o.timestamp(e):Pe(e)&&o.timestamp(e.getTime()),t.call(this,o)}return l(n,[{key:"pack",value:function(){if(A(this.value))throw new Error("OSC AtomicTimetag can not be encoded with empty value");var e=this.value,o=e.seconds,s=e.fractions,i=new Uint8Array(8),a=new DataView(i.buffer);return a.setInt32(0,o,!1),a.setInt32(4,s,!1),i}},{key:"unpack",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(e instanceof DataView))throw new Error("OSC AtomicTimetag expects an instance of type DataView");var s=e.getUint32(o,!1),i=e.getUint32(o+4,!1);return this.value=new $(s,i),this.offset=o+8,this.offset}}]),n}(C),ge=function(r){d(n,r);var t=v(n);function n(e){if(f(this,n),e&&!ie(e))throw new Error("OSC AtomicBlob constructor expects value of type Uint8Array");return t.call(this,e)}return l(n,[{key:"pack",value:function(){if(A(this.value))throw new Error("OSC AtomicBlob can not be encoded with empty value");var e=_(this.value.byteLength),o=new Uint8Array(e+4);return new DataView(o.buffer).setInt32(0,this.value.byteLength,!1),o.set(this.value,4),o}},{key:"unpack",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(e instanceof DataView))throw new Error("OSC AtomicBlob expects an instance of type DataView");var s=e.getInt32(o,!1);return this.value=new Uint8Array(e.buffer,o+4,s),this.offset=_(o+4+s),this.offset}}]),n}(C),ve=function(r){d(n,r);var t=v(n);function n(e){if(f(this,n),e&&!re(e))throw new Error("OSC AtomicFloat32 constructor expects value of type float");return t.call(this,e)}return l(n,[{key:"pack",value:function(){return w(h(n.prototype),"pack",this).call(this,"setFloat32",4)}},{key:"unpack",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return w(h(n.prototype),"unpack",this).call(this,e,"getFloat32",4,o)}}]),n}(C),we=function(r){d(n,r);var t=v(n);function n(e){if(f(this,n),e&&!re(e))throw new Error("OSC AtomicFloat64 constructor expects value of type float");return t.call(this,e)}return l(n,[{key:"pack",value:function(){return w(h(n.prototype),"pack",this).call(this,"setFloat64",8)}},{key:"unpack",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return w(h(n.prototype),"unpack",this).call(this,e,"getFloat64",8,o)}}]),n}(C),De=BigInt("9223372036854775807"),je=BigInt("-9223372036854775808"),ye=function(r){d(n,r);var t=v(n);function n(e){if(f(this,n),e&&typeof e!="bigint")throw new Error("OSC AtomicInt64 constructor expects value of type BigInt");if(e&&(e<je||e>De))throw new Error("OSC AtomicInt64 value is out of bounds");var o;return e&&(o=BigInt.asIntN(64,e)),t.call(this,o)}return l(n,[{key:"pack",value:function(){return w(h(n.prototype),"pack",this).call(this,"setBigInt64",8)}},{key:"unpack",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return w(h(n.prototype),"unpack",this).call(this,e,"getBigInt64",8,o)}}]),n}(C),Be=BigInt("18446744073709551615"),me=function(r){d(n,r);var t=v(n);function n(e){if(f(this,n),e&&typeof e!="bigint")throw new Error("OSC AtomicUInt64 constructor expects value of type BigInt");if(e&&(e<0||e>Be))throw new Error("OSC AtomicUInt64 value is out of bounds");var o;return e&&(o=BigInt.asUintN(64,e)),t.call(this,o)}return l(n,[{key:"pack",value:function(){return w(h(n.prototype),"pack",this).call(this,"setBigUint64",8)}},{key:"unpack",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return w(h(n.prototype),"unpack",this).call(this,e,"getBigUint64",8,o)}}]),n}(C),Z=!0,q=!1,J=null,K=1/0,Q=function(){function r(t,n){var e=this;if(f(this,r),this.offset=0,this.address="",this.types="",this.args=[],!A(t)){if(!y(t)&&!j(t))throw new Error("OSC Message constructor first argument (address) must be a string or array");this.address=N(t)}if(!A(n)){if(!j(n))throw new Error("OSC Message constructor second argument (args) must be an array");n.forEach(function(o){return e.add(o.type,o.value)})}}return l(r,[{key:"add",value:function(t,n){if(A(t))throw new Error("OSC Message needs a valid OSC Atomic Data Type");t==="N"?this.args.push(J):t==="T"?this.args.push(Z):t==="F"?this.args.push(q):t==="I"?this.args.push(K):this.args.push(n),this.types+=t}},{key:"pack",value:function(){var t=this;if(this.address.length===0||this.address[0]!=="/")throw new Error("OSC Message has an invalid address");var n=new le;if(n.add(new b(this.address)),n.add(new b(",".concat(this.types))),this.args.length>0){var e;if(this.args.length>this.types.length)throw new Error("OSC Message argument and type tag mismatch");this.args.forEach(function(o,s){var i=t.types[s];if(i==="i")e=new R(o);else if(i==="h")e=new ye(o);else if(i==="t")e=new me(o);else if(i==="f")e=new ve(o);else if(i==="d")e=new we(o);else if(i==="s")e=new b(o);else if(i==="b")e=new ge(o);else if(i==="T")e=Z;else if(i==="F")e=q;else if(i==="N")e=J;else{if(i!=="I")throw new Error("OSC Message found unknown argument type");e=K}n.add(e)})}return n.merge()}},{key:"unpack",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(t instanceof DataView))throw new Error("OSC Message expects an instance of type DataView.");var e=new b;e.unpack(t,n);var o=new b;if(o.unpack(t,e.offset),e.value.length===0||e.value[0]!=="/")throw new Error("OSC Message found malformed or missing address string");if(o.value.length===0&&o.value[0]!==",")throw new Error("OSC Message found malformed or missing type string");for(var s,i,a=o.offset,c=[],p=1;p<o.value.length;p+=1){if(s=null,(i=o.value[p])==="i")s=new R;else if(i==="h")s=new ye;else if(i==="t")s=new me;else if(i==="f")s=new ve;else if(i==="d")s=new we;else if(i==="s")s=new b;else if(i==="b")s=new ge;else if(i==="T")c.push(Z);else if(i==="F")c.push(q);else if(i==="N")c.push(J);else{if(i!=="I")throw new Error("OSC Message found unsupported argument type");c.push(K)}s&&(a=s.unpack(t,a),c.push(s.value))}return this.offset=a,this.address=e.value,this.types=o.value,this.args=c,this.offset}}]),r}(),O=function(r){d(n,r);var t=v(n);function n(e){var o,s;f(this,n);for(var i=arguments.length,a=new Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];return a.length>0&&a[0]instanceof Array&&(s=a.shift()),o=t.call(this,e,s),a.length>0&&(o.types=a.map(function(p){return ce(p)}).join(""),o.args=a),o}return l(n,[{key:"add",value:function(e){w(h(n.prototype),"add",this).call(this,ce(e),e)}}]),n}(Q),F="#bundle",I=function(){function r(){var t=this;f(this,r),this.offset=0,this.timetag=new x,this.bundleElements=[];for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];e.length>0&&(e[0]instanceof Date||m(e[0])?this.timetag=new x(e[0]):j(e[0])?(e[0].forEach(function(s){t.add(s)}),e.length>1&&(e[1]instanceof Date||m(e[1]))&&(this.timetag=new x(e[1]))):e.forEach(function(s){t.add(s)}))}return l(r,[{key:"timestamp",value:function(t){if(!m(t))throw new Error("OSC Bundle needs an integer for setting the timestamp");this.timetag=new x(t)}},{key:"add",value:function(t){if(!(t instanceof O||t instanceof r))throw new Error("OSC Bundle contains only Messages and Bundles");this.bundleElements.push(t)}},{key:"pack",value:function(){var t=new le;return t.add(new b(F)),this.timetag||(this.timetag=new x),t.add(this.timetag),this.bundleElements.forEach(function(n){t.add(new R(n.pack().byteLength)),t.add(n)}),t.merge()}},{key:"unpack",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(t instanceof DataView))throw new Error("OSC Bundle expects an instance of type DataView");var e=new b;if(e.unpack(t,n),e.value!==F)throw new Error("OSC Bundle does not contain a valid #bundle head");var o=new x,s=o.unpack(t,e.offset);for(this.bundleElements=[];s<t.byteLength;){var i=new b,a=new R;s=a.unpack(t,s);var c=void 0;i.unpack(t,s),s=(c=i.value===F?new r:new O).unpack(t,s),this.bundleElements.push(c)}return this.offset=s,this.timetag=o,this.offset}}]),r}(),M=function(){function r(t){if(f(this,r),t&&!(t instanceof O||t instanceof I))throw new Error("OSC Packet value has to be Message or Bundle");this.value=t,this.offset=0}return l(r,[{key:"pack",value:function(){if(!this.value)throw new Error("OSC Packet can not be encoded with empty body");return this.value.pack()}},{key:"unpack",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(t instanceof DataView))throw new Error("OSC Packet expects an instance of type DataView");if(t.byteLength%4!=0)throw new Error("OSC Packet byteLength has to be a multiple of four");var e,o=new b;return o.unpack(t,n),(e=o.value===F?new I:new O).unpack(t,n),this.offset=e.offset,this.value=e,this.offset}}]),r}(),xe={discardLateMessages:!1},Me=function(){function r(t){f(this,r),this.options=u(u({},xe),t),this.addressHandlers=[],this.eventHandlers={open:[],error:[],close:[]},this.uuid=0}return l(r,[{key:"dispatch",value:function(t,n){var e=this;if(!(t instanceof M))throw new Error("OSC EventHander dispatch() accepts only arguments of type Packet");if(!t.value)throw new Error("OSC EventHander dispatch() can't read empty Packets");if(t.value instanceof I){var o=t.value;return o.bundleElements.forEach(function(i){if(i instanceof I){if(o.timetag.value.timestamp()<i.timetag.value.timestamp())throw new Error("OSC Bundle timestamp is older than the timestamp of enclosed Bundles");return e.dispatch(i)}if(i instanceof O){var a=i;return e.notify(a.address,a,o.timetag.value.timestamp(),n)}throw new Error("OSC EventHander dispatch() can't dispatch unknown Packet value")})}if(t.value instanceof O){var s=t.value;return this.notify(s.address,s,0,n)}throw new Error("OSC EventHander dispatch() can't dispatch unknown Packet value")}},{key:"call",value:function(t,n,e){var o=!1;if(y(t)&&t in this.eventHandlers)return this.eventHandlers[t].forEach(function(a){a.callback(n,e),o=!0}),o;var s=Object.keys(this.addressHandlers),i=this.addressHandlers;return s.forEach(function(a){var c=!1,p=new RegExp(fe(N(t)),"g");if(p.test(a)&&a.length===p.lastIndex&&(c=!0),!c){var E=new RegExp(fe(N(a)),"g");E.test(t)&&t.length===E.lastIndex&&(c=!0)}c&&i[a].forEach(function(Y){Y.callback(n,e),o=!0})}),o}},{key:"notify",value:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];if(n.length===0)throw new Error("OSC EventHandler can not be called without any argument");if(n[0]instanceof M)return this.dispatch(n[0],n[1]);if(n[0]instanceof I||n[0]instanceof O)return this.dispatch(new M(n[0]),n[1]);if(!y(n[0])){var o=new M;return o.unpack(Ae(n[0])),this.dispatch(o,n[1])}var s=n[0],i=null;n.length>1&&(i=n[1]);var a=null;if(n.length>2)if(m(n[2]))a=n[2];else{if(!(n[2]instanceof Date))throw new Error("OSC EventHandler timestamp has to be a number or Date");a=n[2].getTime()}var c=null;if(n.length>=3&&(c=n[3]),a){var p=Date.now();if(p>a&&!this.options.discardLateMessages)return this.call(s,i,c);var E=this;return setTimeout(function(){E.call(s,i,c)},a-p),!0}return this.call(s,i,c)}},{key:"on",value:function(t,n){if(!y(t)&&!j(t))throw new Error("OSC EventHandler accepts only strings or arrays for address patterns");if(!B(n))throw new Error("OSC EventHandler callback has to be a function");this.uuid+=1;var e={id:this.uuid,callback:n};if(y(t)&&t in this.eventHandlers)return this.eventHandlers[t].push(e),this.uuid;var o=N(t);return o in this.addressHandlers||(this.addressHandlers[o]=[]),this.addressHandlers[o].push(e),this.uuid}},{key:"off",value:function(t,n){if(!y(t)&&!j(t))throw new Error("OSC EventHandler accepts only strings or arrays for address patterns");if(!m(n))throw new Error("OSC EventHandler subscription id has to be a number");var e,o;return y(t)&&t in this.eventHandlers?(e=t,o=this.eventHandlers):(e=N(t),o=this.addressHandlers),e in o&&o[e].some(function(s,i){return s.id===n&&(o[e].splice(i,1),!0)})}}]),r}(),V=function(){function r(){if(f(this,r),this.constructor===r)throw new Error("Plugin is an abstract class. Please create or use an implementation!")}return l(r,[{key:"status",value:function(){throw new Error("Abstract method!")}},{key:"open",value:function(){throw new Error("Abstract method!")}},{key:"close",value:function(){throw new Error("Abstract method!")}},{key:"send",value:function(t){throw new Error("Abstract method!")}}]),r}(),He=0,Te=1,Le=2,Ne=3,Ve=function(r){d(n,r);var t=v(n);function n(){throw f(this,n),t.call(this),new Error("DatagramPlugin can not be used in browser context")}return l(n,[{key:"registerNotify",value:function(e){this.notify=e}},{key:"status",value:function(){return this.socketStatus}},{key:"open",value:function(){var e=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=u(u({},this.options.open),o),i=s.port,a=s.exclusive;this.socketStatus=He,this.socket.bind({address:s.host,port:i,exclusive:a},function(){e.socketStatus=Te,e.notify("open")})}},{key:"close",value:function(){var e=this;this.socketStatus=Le,this.socket.close(function(){e.socketStatus=Ne,e.notify("close")})}},{key:"send",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=u(u({},this.options.send),o),i=s.port,a=s.host;this.socket.send(Buffer.from(e),0,e.byteLength,i,a)}}]),n}(V),ke=typeof WebSocket!="undefined"?WebSocket:typeof MozWebSocket!="undefined"?MozWebSocket:typeof H!="undefined"?H.WebSocket||H.MozWebSocket:typeof window!="undefined"?window.WebSocket||window.MozWebSocket:typeof self!="undefined"?self.WebSocket||self.MozWebSocket:void 0,X=void 0,Ue=0,We=1,_e=2,Re=3,z={udpServer:{host:"localhost",port:41234,exclusive:!1},udpClient:{host:"localhost",port:41235},wsServer:{host:"localhost",port:8080},receiver:"ws"};function be(r,t){return u(u(u(u({},z),r),t),{},{udpServer:u(u(u({},z.udpServer),r.udpServer),t.udpServer),udpClient:u(u(u({},z.udpClient),r.udpClient),t.udpClient),wsServer:u(u(u({},z.wsServer),r.wsServer),t.wsServer)})}var Fe=function(r){d(n,r);var t=v(n);function n(){throw f(this,n),t.call(this),new Error("BridgePlugin can not be used in browser context")}return l(n,[{key:"registerNotify",value:function(e){this.notify=e}},{key:"status",value:function(){return this.socketStatus}},{key:"open",value:function(){var e=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=be(this.options,o);this.socketStatus=Ue,this.socket.bind({address:s.udpServer.host,port:s.udpServer.port,exclusive:s.udpServer.exclusive},function(){var i={};s.wsServer.server?i.server=s.wsServer.server:i=s.wsServer,e.websocket=new X(i),e.websocket.binaryType="arraybuffer",e.websocket.on("listening",function(){e.socketStatus=We,e.notify("open")}),e.websocket.on("error",function(a){e.notify("error",a)}),e.websocket.on("connection",function(a){a.on("message",function(c,p){e.send(c,{receiver:"udp"}),e.notify(new Uint8Array(c),p)})})})}},{key:"close",value:function(){var e=this;this.socketStatus=_e,this.socket.close(function(){e.websocket.close(function(){e.socketStatus=Re,e.notify("close")})})}},{key:"send",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=be(this.options,o),i=s.receiver;if(i==="udp"){var a=e instanceof Buffer?e:Buffer.from(e);this.socket.send(a,0,a.byteLength,s.udpClient.port,s.udpClient.host)}else{if(i!=="ws")throw new Error("BridgePlugin can not send message to unknown receiver");this.websocket.clients.forEach(function(c){c.send(e,{binary:!0})})}}}]),n}(V),ze=-1,Ge=0,$e=1,Ze=2,qe=3,Je={host:"localhost",port:8080,secure:!1,protocol:[]},Se=function(r){d(n,r);var t=v(n);function n(e){var o;if(f(this,n),o=t.call(this),!ke)throw new Error("WebsocketClientPlugin can't find a WebSocket class");return o.options=u(u({},Je),e),o.socket=null,o.socketStatus=ze,o.notify=function(){},o}return l(n,[{key:"registerNotify",value:function(e){this.notify=e}},{key:"status",value:function(){return this.socketStatus}},{key:"open",value:function(){var e=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=u(u({},this.options),o),i=s.port,a=s.host,c=s.secure,p=s.protocol;this.socket&&this.close();var E=c?"wss":"ws",Y={address:a,family:E,port:i,size:0};this.socket=new ke("".concat(E,"://").concat(a,":").concat(i),p),this.socket.binaryType="arraybuffer",this.socketStatus=Ge,this.socket.onopen=function(){e.socketStatus=$e,e.notify("open")},this.socket.onclose=function(){e.socketStatus=qe,e.notify("close")},this.socket.onerror=function(ee){e.notify("error",ee)},this.socket.onmessage=function(ee){e.notify(ee.data,Y)}}},{key:"close",value:function(){this.socketStatus=Ze,this.socket.close()}},{key:"send",value:function(e){this.socket.send(e)}}]),n}(V),Ke=0,Qe=1,Xe=2,Ye=3,et=function(r){d(n,r);var t=v(n);function n(e){throw f(this,n),t.call(this),new Error("WebsocketServerPlugin can not be used in browser context")}return l(n,[{key:"registerNotify",value:function(e){this.notify=e}},{key:"status",value:function(){return this.socketStatus}},{key:"open",value:function(){var e=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=u(u({},this.options),o),i=s.port,a=s.host,c={address:a,family:"wsserver",port:i,size:0};this.socket&&this.close(),s.server?this.socket=new X({server:s.server}):this.socket=new X({host:a,port:i}),this.socket.binaryType="arraybuffer",this.socketStatus=Ke,this.socket.on("listening",function(){e.socketStatus=Qe,e.notify("open")}),this.socket.on("error",function(p){e.notify("error",p)}),this.socket.on("connection",function(p){p.on("message",function(E){e.notify(new Uint8Array(E),c)})})}},{key:"close",value:function(){var e=this;this.socketStatus=Xe,this.socket.close(function(){e.socketStatus=Ye,e.notify("close")})}},{key:"send",value:function(e){this.socket.clients.forEach(function(o){o.send(e,{binary:!0})})}}]),n}(V),tt={discardLateMessages:!1,plugin:new Se},k=function(){function r(t){if(f(this,r),t&&!G(t))throw new Error("OSC options argument has to be an object.");this.options=u(u({},tt),t),this.eventHandler=new Me({discardLateMessages:this.options.discardLateMessages});var n=this.eventHandler;this.options.plugin&&this.options.plugin.registerNotify&&this.options.plugin.registerNotify(function(){return n.notify.apply(n,arguments)})}return l(r,[{key:"on",value:function(t,n){if(!y(t)||!B(n))throw new Error("OSC on() needs event- or address string and callback function");return this.eventHandler.on(t,n)}},{key:"off",value:function(t,n){if(!y(t)||!m(n))throw new Error("OSC off() needs string and number (subscriptionId) to unsubscribe");return this.eventHandler.off(t,n)}},{key:"open",value:function(t){if(t&&!G(t))throw new Error("OSC open() options argument needs to be an object");if(!this.options.plugin||!B(this.options.plugin.open))throw new Error("OSC Plugin API #open is not implemented!");return this.options.plugin.open(t)}},{key:"status",value:function(){if(!this.options.plugin||!B(this.options.plugin.status))throw new Error("OSC Plugin API #status is not implemented!");return this.options.plugin.status()}},{key:"close",value:function(){if(!this.options.plugin||!B(this.options.plugin.close))throw new Error("OSC Plugin API #close is not implemented!");return this.options.plugin.close()}},{key:"send",value:function(t,n){if(!this.options.plugin||!B(this.options.plugin.send))throw new Error("OSC Plugin API #send is not implemented!");if(!(t instanceof Q||t instanceof O||t instanceof I||t instanceof M))throw new Error("OSC send() needs Messages, Bundles or Packets");if(n&&!G(n))throw new Error("OSC send() options argument has to be an object");return this.options.plugin.send(t.pack(),n)}}]),r}();return k.STATUS={IS_NOT_INITIALIZED:-1,IS_CONNECTING:0,IS_OPEN:1,IS_CLOSING:2,IS_CLOSED:3},k.Packet=M,k.Bundle=I,k.Message=O,k.TypedMessage=Q,k.Plugin=V,k.DatagramPlugin=Ve,k.WebsocketClientPlugin=Se,k.WebsocketServerPlugin=et,k.BridgePlugin=Fe,k})})(Ee);var ne=Ee.exports;let U;function ot(){return U||(U=new Promise((D,T)=>{const g=new ne;g.open(),g.on("open",()=>{var f,P,l;const u=(l=(P=(f=g.options)==null?void 0:f.plugin)==null?void 0:P.socket)==null?void 0:l.url;rt(`[osc] connected${u?` to ${u}`:""}`),D(g)}),g.on("close",()=>{U=void 0,console.log("[osc] disconnected"),T("OSC connection closed")}),g.on("error",u=>T(u))}).catch(D=>{throw U=void 0,new Error("Could not connect to OSC server. Is it running?")})),U}const st=.1;let te=-1;nt.prototype.osc=async function(){const D=await ot();return this.onTrigger((T,g,u,f=1)=>{const P=g.wholeOrPart().begin.valueOf(),l=g.duration.valueOf();te<0&&(te=Date.now()-u*1e3);const S=Object.assign({},{cps:f,cycle:P,delta:l},g.value);S.n&&(S.n=Oe(S.n)),S.note&&(S.note=Oe(S.note));const d=Object.entries(S).flat(),h=Math.floor(te+(T+st)*1e3),L=new ne.Message("/dirt/play",...d),W=new ne.Bundle([L],h);W.timestamp(h),D.send(W)})};
