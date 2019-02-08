!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.multisig=r():t.multisig=r()}(window,function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=6)}([function(t,r,e){const n=e(3);n.isBrowser?void 0===window.StellarSdk?console.error("Missing dependency: StellarSdk"):t.exports=window.StellarSdk:t.exports=n.nodeRequire("stellar-sdk")},function(t,r,e){t.exports=e(8)},function(t,r,e){var n=e(1);function i(t){return function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,r,e,n,i,o,u){try{var a=t[o](u),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,i)}function u(t){return function(){var r=this,e=arguments;return new Promise(function(n,i){var u=t.apply(r,e);function a(t){o(u,n,i,a,c,"next",t)}function c(t){o(u,n,i,a,c,"throw",t)}a(void 0)})}}var a=r,c=e(13),s=e(0);function f(t){if(t)return"public"===t?s.Networks.PUBLIC:"test"===t?s.Networks.TESTNET:t;var r=s.Network.current();return r?r.networkPassphrase():void 0}a.server=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.network,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.server,n=f(r);if(!n)throw new Error("No network selected.");return h(n,e)},a.network=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.network,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.server,n=f(),i=f(r);if(n!==i)console.log("Switch to network: "+r),s.Network.use(new s.Network(i)),n=i;else if(!n)throw new Error("No network selected.");return h(n,e)};var l={},p={};function h(t,r){if(r?p[t]=r:r=p[t],!r)throw new Error("No default server for requested network.");return l[r]||(l[r]=new s.Server(r)),l[r]}h(s.Networks.PUBLIC,"https://horizon.stellar.org"),h(s.Networks.TESTNET,"https://horizon-testnet.stellar.org"),a.accountCacheExpiration=300;var d={};function v(){return(v=u(n.mark(function t(r,e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d[r]=e,t.next=3,c.timeout(1e3*a.accountCacheExpiration);case 3:delete d[r];case 4:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function m(){return(m=u(n.mark(function t(r,e){var i,o,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.FederationServer.resolve(e);case 2:if(i=t.sent,o=i.account_id){t.next=6;break}throw new Error("Invalid response from federation server.");case 6:return i.memo_type||void 0===i.memo||delete i.memo,e!==o&&(i.address=e),(u=r.aliases&&r.aliases[o])&&(i.alias=u),t.abrupt("return",i);case 11:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function w(t,r){return g.apply(this,arguments)}function g(){return(g=u(n.mark(function t(r,e){var o;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=a.txSources(r,e),t.abrupt("return",a.signersList.apply(a,[r].concat(i(o))));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}a.address=function(t,r){if(d[r])return d[r];var e=function(t,r){return m.apply(this,arguments)}(t,r);return function(t,r){v.apply(this,arguments)}(r,e),e},a.account=function(){var t=u(n.mark(function t(r,e){var i,o,u,c,s,f=arguments;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=f.length>2&&void 0!==f[2]?f[2]:r.network,o=a.server(r,i),t.next=4,a.address(r,e);case 4:return u=t.sent,c=u.account_id,t.next=8,o.loadAccount(c);case 8:return s=t.sent,t.abrupt("return",s);case 10:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),a.accountIsEmpty=function(){var t=u(n.mark(function t(r,e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.account(r,e).then(function(){return!1}).catch(function(){return!0}));case 1:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),a.transaction=function(){var t=u(n.mark(function t(r,e){var i;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.server.transactions(),t.abrupt("return",i.transaction(e).call());case 2:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),a.accountSigners=function(){var t=u(n.mark(function t(r,e){var i;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.account(r,e);case 2:return i=t.sent,t.abrupt("return",i.signers);case 4:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),a.signersTable=function(){var t=u(n.mark(function t(r){var e,i,o,u,c,s,f=arguments;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e={},i=f.length,o=new Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=f[u];t.t0=n.keys(o);case 3:if((t.t1=t.t0()).done){t.next=11;break}return c=t.t1.value,t.next=7,a.account(r,o[c]);case 7:s=t.sent,e[s.id]||(e[s.id]=s.signers),t.next=3;break;case 11:return t.abrupt("return",e);case 12:case"end":return t.stop()}},t,this)}));return function(r){return t.apply(this,arguments)}}(),a.signersList=function(){var t=u(n.mark(function t(r){var e,i,o,u,c,s=arguments;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e=[],i=s.length,o=new Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=s[u];t.t0=n.keys(o);case 3:if((t.t1=t.t0()).done){t.next=11;break}return c=t.t1.value,t.next=7,a.account(r,o[c]);case 7:t.sent.signers.forEach(function(t){e.find(function(r){return r.key===t.key})||e.push(t.key)}),t.next=3;break;case 11:return t.abrupt("return",e);case 12:case"end":return t.stop()}},t,this)}));return function(r){return t.apply(this,arguments)}}(),a.txSources=function(t,r){var e=x(r);if(e.sources)return e.sources;var n=[r.source],i=function(t){var e=r.operations[t].source;e&&!n.find(function(t){return t===e})&&n.push(e)};for(var o in r.operations)i(o);return e.sources=n,n},a.txSignersList=function(){var t=u(n.mark(function t(r,e){var i;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(i=x(e)).signers||(i.signers=w(r,e)),t.abrupt("return",i.signers);case 3:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}();var y="extra_ocmultisig";function x(t){return t[y]||(t[y]={}),t[y]}},function(module,exports,__webpack_require__){(function(process,global){const env=exports;if(env.isBrowser="undefined"!=typeof window&&void 0!==window.document,env.isNode=void 0!==process&&process.versions&&process.versions.node,env.isEmbedded=env.isBrowser&&window.self!==window.top,env.window=env.isBrowser&&window,env.global=env.isNode&&global,env.nodeRequire=(()=>{}),env.isNode){const stealth_require=eval("require");env.nodeRequire=(t=>stealth_require(t))}}).call(this,__webpack_require__(11),__webpack_require__(12))},function(t,r,e){const n=e(3);if(n.isBrowser){const r="0000000000000000000000000000000000000000000000000000000000000000",n=new(e(0).Memo)("hash",r);t.exports=n.value.__proto__.constructor}else t.exports=n.nodeRequire("safe-buffer").Buffer},function(t,r,e){var n=e(1);function i(t,r,e,n,i,o,u){try{var a=t[o](u),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,i)}function o(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var u=t.apply(r,e);function a(t){i(u,n,o,a,c,"next",t)}function c(t){i(u,n,o,a,c,"throw",t)}a(void 0)})}}var u=r,a=e(4),c=e(15),s=e(0),f=e(2);function l(t,r){if("string"==typeof r){var e=a.from(r).slice(0,28).toString();r=new s.Memo("text",e)}r&&t.addMemo(r)}function p(t,r,e){return h.apply(this,arguments)}function h(){return(h=o(n.mark(function t(r,e,i){var o,u,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Array.isArray(i)||(i=[i]),t.t0=n.keys(i);case 2:if((t.t1=t.t0()).done){t.next=11;break}return o=t.t1.value,u=i[o],t.next=7,d(r,u);case 7:a=t.sent,e.addOperation(a),t.next=2;break;case 11:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function d(t,r){return v.apply(this,arguments)}function v(){return(v=o(n.mark(function t(r,e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.accountIsEmpty(r,e);case 2:if(!t.sent){t.next=6;break}return t.abrupt("return",w("createAccount",{destination:e,startingBalance:"1"}));case 6:return t.abrupt("return",w("payment",{destination:e,asset:s.Asset.native(),amount:"0.0000001"}));case 7:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function m(t,r){r instanceof a||(r=a.from(r));var e=100-t.operations.length;r.length>64*e&&console.log("Warning: message will be truncated.");for(var n=0;n<e;n++){var i=r.slice(64*n,64*n+64);if(0===i.length)break;var o=w("manageData",{name:"Send",value:i});t.addOperation(o)}}function w(t,r){return s.Operation[t](r)}function g(t){return"hash"===t._type||"return"===t._type?t._value.toString("hex"):t._value.toString("utf8")}function y(t){var r=[];return t.operations.forEach(function(t){(function(t){return"manageData"===t.type&&"Send"===t.name})(t)&&r.push(t.value)}),a.concat(r)}function x(t){return function(r){return!(r.operation_count<2)&&(!t||t(r))}}u.send=function(){var t=o(n.mark(function t(r,e,i,o,a){var c,s,l;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.account(r,e.publicKey());case 2:return c=t.sent,t.next=5,u.encode(r,c,i,o,a);case 5:return(s=t.sent).sign(e),l=f.network(r),t.abrupt("return",l.submitTransaction(s));case 9:case"end":return t.stop()}},t,this)}));return function(r,e,n,i,o){return t.apply(this,arguments)}}(),u.encode=function(){var t=o(n.mark(function t(r,e,i,o,u){var a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l(a=new s.TransactionBuilder(e),o),t.next=4,p(r,a,i);case 4:return m(a,u),t.abrupt("return",a.setTimeout(s.InfiniteTimeout).build());case 6:case"end":return t.stop()}},t,this)}));return function(r,e,n,i,o){return t.apply(this,arguments)}}(),u.read=function(){var t=o(n.mark(function t(r,e){var i,o,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=f.network(r),o=i.transactions().transaction(e),t.next=4,o.call();case 4:return a=t.sent,t.abrupt("return",u.decode(r,a));case 6:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),u.decode=function(t,r){var e=new s.Transaction(r.envelope_xdr);return e.operations.length<2?null:{sender:r.source_account,object:g(e.memo),date:r.created_at,content:y(e)}},u.list=function(){var t=o(n.mark(function t(r,e,i){var o;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.listRaw(r,e,i);case 2:return o=t.sent,t.abrupt("return",o.map(function(t){return u.decode(r,t)}));case 4:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}(),u.listRaw=function(){var t=o(n.mark(function t(r,e){var i,o,u,a=arguments;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=a.length>2&&void 0!==a[2]?a[2]:{},t.next=3,f.accountIsEmpty(r,e);case 3:if(!t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:return o=f.server(r),u=o.transactions().forAccount(e),i.cursor&&u.cursor(i.cursor),i.order&&u.order(i.order),i.filter=x(i.filter),t.abrupt("return",c(u,i));case 11:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),u.find=function(){var t=o(n.mark(function t(r,e,i){var o;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.list(r,e,{limit:1,filter:i});case 2:if(!(o=t.sent)[0]){t.next=5;break}return t.abrupt("return",o[0]);case 5:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}()},function(t,r,e){var n={};function i(t){return function(){for(var r=Object.create(n),e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return t.apply(void 0,[r].concat(i))}}t.exports=function(t){var r={};for(var e in t)"function"==typeof t[e]&&(r[e]=i(t[e]));return Object.assign({},t,r)}(e(7))},function(t,r,e){var n=e(1);function i(t,r,e,n,i,o,u){try{var a=t[o](u),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,i)}function o(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var u=t.apply(r,e);function a(t){i(u,n,o,a,c,"next",t)}function c(t){i(u,n,o,a,c,"throw",t)}a(void 0)})}}var u,a=r,c=e(10),s=e(4),f=e(0),l=e(2),p=e(14),h=e(16);function d(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e.id||t.multisig.id||f.Keypair.random().publicKey(),i=new f.TransactionBuilder(r);i.addMemo(new f.Memo("text","Setup signature sharing"));var o=!0,u=function(t,r){i.addOperation(f.Operation.manageData({name:t,value:r})),o=!1};return n!==t.multisig.id&&u("config:multisig",n),e.network||(e.network="test"),(e.network||t.multisig.network)&&e.network!==t.multisig.network&&u("config:multisig:network",e.network),(e.server||t.multisig.server)&&e.server!==t.multisig.server&&u("config:multisig:server",e.server),o?null:i.setTimeout(f.InfiniteTimeout).build()}function v(t,r){var e=new f.TransactionBuilder(r);e.addMemo(new f.Memo("text","Disable signature sharing"));var n=function(t,r){e.addOperation(f.Operation.manageData({name:t,value:r}))};return n("config:multisig",null),r.data_attr["multisig:network"]&&n("config:multisig:network",null),r.data_attr["multisig:server"]&&n("config:multisig:server",null),e.setTimeout(f.InfiniteTimeout).build()}function m(t){return{id:w(t.data_attr["config:multisig"]),network:w(t.data_attr["config:multisig:network"])||"test",server:w(t.data_attr["config:multisig:server"])}}function w(t){if(t)return s.from(t,"base64").toString("utf8")}function g(t,r){return y.apply(this,arguments)}function y(){return(y=o(n.mark(function t(r,e){var i;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((n=e)&&n._baseAccount&&n._baseAccount instanceof f.Account)){t.next=4;break}return t.abrupt("return",e);case 4:if(!(e instanceof f.Keypair)){t.next=8;break}e=e.publicKey(),t.next=14;break;case 8:if(!(e instanceof f.Account)){t.next=12;break}e=e._accountId,t.next=14;break;case 12:if("string"==typeof e){t.next=14;break}throw new TypeError("Invalid user parameter.");case 14:return t.next=16,l.account(r,e);case 16:return i=t.sent,t.abrupt("return",i);case 18:case"end":return t.stop()}var n},t,this)}))).apply(this,arguments)}function x(t,r){return b.apply(this,arguments)}function b(){return(b=o(n.mark(function t(r,e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.accountIsEmpty(r,e);case 2:if(!t.sent){t.next=8;break}if("test"!==r.network){t.next=7;break}return t.abrupt("return",c("https://friendbot.stellar.org/?addr="+e));case 7:throw new Error("Account doesn't exist on the requested network: "+r.network);case 8:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function k(t,r,e){return _.apply(this,arguments)}function _(){return(_=o(n.mark(function t(r,e,i){var o,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e instanceof f.Transaction)){t.next=8;break}return o=l.network(r),e.sign(i),(u=o.submitTransaction(e)).catch(function(t){return console.error(t.response)}),t.abrupt("return",u);case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function E(){u=f.Network.current()}function T(){f.Network.current()!==u&&(console.log("Restore network"),f.Network.use(u))}a.isEnabled=function(){var t=o(n.mark(function t(r,e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.config(r,e);case 2:return r.multisig=t.sent,t.abrupt("return",!!r.multisig);case 4:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),a.config=function(){var t=o(n.mark(function t(r,e){var i;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(r,e);case 2:if(i=t.sent,r.multisig=m(i),!r.multisig.id){t.next=8;break}return t.abrupt("return",r.multisig);case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),a.enable=function(){var t=o(n.mark(function t(r,e,i){var o,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(r,e);case 2:if(o=t.sent,r.multisig=m(o),!r.multisig.id){t.next=7;break}return console.log("On-chain signature sharing is already enabled on this account."),t.abrupt("return",null);case 7:return u=d(r,o,i),t.abrupt("return",k(r,u,e));case 9:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}(),a.setup=function(){var t=o(n.mark(function t(r,e,i){var o,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(r,e);case 2:if(o=t.sent,r.multisig=m(o),r.multisig.id){t.next=6;break}throw new Error("On-chain signature sharing in not enabled on this account.");case 6:return u=d(r,o,i),t.abrupt("return",k(r,u,e));case 8:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}(),a.disable=function(){var t=o(n.mark(function t(r,e){var i,o;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(r,e);case 2:if(i=t.sent,r.multisig=m(i),r.multisig.id){t.next=7;break}return console.log("On-chain signature sharing is already disabled on this account."),t.abrupt("return",null);case 7:return o=v(r,i),t.abrupt("return",k(r,o,e));case 9:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),a.pushSignatures=function(){var t=o(n.mark(function t(r,e,i){var o,u,a,c;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.account(r,e.source);case 2:if(o=t.sent,r.multisig=m(o),r.multisig.id){t.next=6;break}throw new Error("On-chain signature sharing in not enabled on this account.");case 6:return E(),u=i.publicKey(),t.next=10,x(r.multisig,u);case 10:return t.next=12,p.makePushTx(r,e,u);case 12:return a=t.sent,(c=k(r.multisig,a,i)).finally(T),t.abrupt("return",c);case 16:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}(),a.pullSignatures=function(){var t=o(n.mark(function t(r,e){var i,o;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(r,e.source);case 2:if(i=t.sent,r.multisig=m(i),r.multisig.id){t.next=6;break}throw new Error("On-chain signature sharing in not enabled on this account.");case 6:return E(),t.next=9,p.pull(r,e);case 9:return o=t.sent,T(),t.abrupt("return",o);case 12:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),a.pushTransaction=function(){var t=o(n.mark(function t(r,e,i){var o,u,a,c;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(r,i);case 2:if(o=t.sent,r.multisig=m(o),r.multisig.id){t.next=6;break}throw new Error("On-chain transaction sharing is not enabled on this account.");case 6:if(u=i.publicKey(),o.signers.map(function(t){return t.key}).find(function(t){return t===u})){t.next=10;break}throw new Error("Not a co-signer for transaction source account: "+u);case 10:return E(),t.next=13,x(r.multisig,u);case 13:return(e=Object.create(e)).signatures=[],t.next=17,h.makePushTx(r,e,u);case 17:return a=t.sent,(c=k(r.multisig,a,i)).finally(T),t.abrupt("return",c);case 21:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}(),a.listTransactions=function(){var t=o(n.mark(function t(r,e,i){var o;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(r,e);case 2:if(o=t.sent,r.multisig=m(o),r.multisig.id){t.next=6;break}throw new Error("On-chain transaction sharing is not enabled on this account.");case 6:return t.abrupt("return",h.list(r,o,i));case 7:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}(),a.useNetwork=function(t,r,e){return l.network(t.__proto__,r,e)}},function(t,r,e){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e(9),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,r){!function(r){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",s="object"==typeof t,f=r.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=r.regeneratorRuntime=s?t.exports:{}).wrap=x;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},m={};m[u]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(N([])));g&&g!==n&&i.call(g,u)&&(m=g);var y=E.prototype=k.prototype=Object.create(m);_.prototype=y.constructor=E,E.constructor=_,E[c]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===_||"GeneratorFunction"===(r.displayName||r.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},f.awrap=function(t){return{__await:t}},T(S.prototype),S.prototype[a]=function(){return this},f.AsyncIterator=S,f.async=function(t,r,e,n){var i=new S(x(t,r,e,n));return f.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},T(y),y[c]="Generator",y[u]=function(){return this},y.toString=function(){return"[object Generator]"},f.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},f.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,i){return a.type="throw",a.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var c=i.call(u,"catchLoc"),s=i.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;P(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}}}function x(t,r,e,n){var i=r&&r.prototype instanceof k?r:k,o=Object.create(i.prototype),u=new j(n||[]);return o._invoke=function(t,r,e){var n=l;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return A()}for(e.method=i,e.arg=o;;){var u=e.delegate;if(u){var a=O(u,e);if(a){if(a===v)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var c=b(t,r,e);if("normal"===c.type){if(n=e.done?d:p,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=d,e.method="throw",e.arg=c.arg)}}}(t,e,u),o}function b(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function k(){}function _(){}function E(){}function T(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function S(t){var r;this._invoke=function(e,n){function o(){return new Promise(function(r,o){!function r(e,n,o,u){var a=b(t[e],t,n);if("throw"!==a.type){var c=a.arg,s=c.value;return s&&"object"==typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,o,u)},function(t){r("throw",t,o,u)}):Promise.resolve(s).then(function(t){c.value=t,o(c)},function(t){return r("throw",t,o,u)})}u(a.arg)}(e,n,r,o)})}return r=r?r.then(o,o):o()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=b(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(i.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:e,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,r,e){const n=e(3);n.isBrowser?t.exports=e(0).axios:t.exports=n.nodeRequire("axios")},function(t,r){var e,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var c,s=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&h())}function h(){if(!f){var t=a(p);f=!0;for(var r=s.length;r;){for(c=s,s=[];++l<r;)c&&c[l].run();l=-1,r=s.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(r){try{return n.call(null,t)}catch(r){return n.call(this,t)}}}(t)}}function d(t,r){this.fun=t,this.array=r}function v(){}i.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];s.push(new d(t,r)),1!==s.length||f||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";const n=r;n.delay=function(t){let r,e=!0;return function(){return e&&(e=!1,r=new Promise(r=>r(t()))),r}},n.timeout=function(t){return new Promise(r=>setTimeout(r,t))},n.capitalize=function(t){return t.substr(0,1).toUpperCase()+t.slice(1)},n.shorter=function(t){return t.length>50?t.substr(0,5)+"..."+t.substr(-5):t},n.setHiddenProperty=function(t,r,e){Object.defineProperty(t,r,{value:e,enumerable:!1,configurable:!0})},n.deprecated=function(t,r,e){console.error(`Warning: ${r} is deprecated and will be removed after ${t}. Please use ${e} instead.`)},n.useExtra=function(t){return t[i]||n.setHiddenProperty(t,i,{}),t[i]};const i="@cosmic-plus";n.isUtf8=function(t){return!t.match(/[\0-\x1F\x7F-\x9F\xAD\uD7FC-\uF8FF]/)},n.isBase64=function(t){return!!t.match(/^[0-9a-zA-Z+\/]*=*$/)},n.copy=(()=>console.error("misc.copy() have been moved to html.copyString()"))},function(t,r,e){var n=e(1);function i(t,r,e,n,i,o,u){try{var a=t[o](u),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,i)}function o(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var u=t.apply(r,e);function a(t){i(u,n,o,a,c,"next",t)}function c(t){i(u,n,o,a,c,"throw",t)}a(void 0)})}}var u=r,a=e(4),c=e(0),s=e(5),f=e(2);function l(t,r){return t.filter(function(t){return!r.find(function(r){return t.toString()===r.toString()})})}function p(t,r,e){return h.apply(this,arguments)}function h(){return(h=o(n.mark(function t(r,e,i){var o,u,a,l,p,h;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.toString("base64"),t.next=3,f.accountIsEmpty(r.multisig,r.multisig.id);case 3:if(!t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:return t.next=7,s.listRaw(r.multisig,r.multisig.id,{filter:function(t){return"return"===t.memo_type&&t.memo===o}});case 7:u=t.sent,a=[],t.t0=n.keys(u);case 10:if((t.t1=t.t0()).done){t.next=19;break}if(l=t.t1.value,p=u[l],d(h=new c.Transaction(p.envelope_xdr),i)){t.next=16;break}return t.abrupt("continue",10);case 16:h.operations.forEach(function(t){v(t)&&a.push(t.value)}),t.next=10;break;case 19:return t.abrupt("return",a);case 20:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function d(t,r){return r.find(function(r){return r===t.source})}function v(t){return"manageData"===t.type&&"Send"===t.name}function m(t,r,e,n){var i=!1,o=t.signatures.map(function(t){return t.signature().toString()}),u=n.map(function(t){return c.Keypair.fromPublicKey(t)}),a=function(n){var a=r[n];if(o.find(function(t){return t===a.toString()}))return"continue";var s=u.find(function(t){return t.verify(e,a)});if(!s)return"continue";var f=function(t,r){return new(0,c.xdr.DecoratedSignature)({hint:t.signatureHint(),signature:r})}(s,a);t.signatures.push(f),o.push(a.toString()),i=!0};for(var s in r)a(s);return i}u.makePushTx=function(){var t=o(n.mark(function t(r,e,i){var o,u,h,d,v,m,w,g;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.signatures.map(function(t){return t.signature()}),e.signatures.length){t.next=3;break}return t.abrupt("return",null);case 3:return u=e.hash(),t.next=6,f.txSignersList(r,e);case 6:return h=t.sent,t.next=9,p(r,u,h);case 9:if(d=t.sent,l(o,d).length){t.next=13;break}return t.abrupt("return",null);case 13:return t.next=15,f.account(r.multisig,i);case 15:return v=t.sent,m=r.multisig.id,w=new c.Memo("return",u),g=a.concat(o),t.abrupt("return",s.encode(r.multisig,v,m,w,g));case 20:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}(),u.pull=function(){var t=o(n.mark(function t(r,e){var i,o,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.hash(),t.next=3,f.txSignersList(r,e);case 3:return o=t.sent,t.next=6,p(r,i,o);case 6:return u=t.sent,t.abrupt("return",m(e,u,i,o));case 8:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}()},function(t,r){t.exports=async function(t,r={}){const e=r.limit?Math.min(r.limit,200):200,n=await t.limit(e).call();return r.filter||r.breaker?async function(t,r){const e=[];for(;t.records.length;){for(let n in t.records){if(r.limit&&e.length===r.limit)return e;const i=t.records[n];if(r.breaker){const t=await r.breaker(i);if(t)return e}if(r.filter){const t=await r.filter(i);if(!t)continue}e.push(i)}t=await t.next()}return e}(n,r):async function(t,r){let e=[];for(;t.records.length;){if(r){const n=e.length+t.records.length;if(r===n)return e.concat(t.records);if(n>r){const n=r-e.length,i=t.records.slice(0,n);return e.concat(i)}}e=e.concat(t.records),t=await t.next()}return e}(n,r.limit)}},function(t,r,e){var n=e(1);function i(t,r,e,n,i,o,u){try{var a=t[o](u),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,i)}function o(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var u=t.apply(r,e);function a(t){i(u,n,o,a,c,"next",t)}function c(t){i(u,n,o,a,c,"throw",t)}a(void 0)})}}var u=r,a=e(0),c=e(5),s=e(2);function f(t,r){return"hash"===t.memo_type&&r.find(function(r){return r===t.source_account})}function l(t){var r=c.decode(null,t);return r.ledger=t.ledger_attr,r.xdr=r.content.toString("base64"),delete r.content,delete r.object,r}function p(t,r){return h.apply(this,arguments)}function h(){return(h=o(n.mark(function t(r,e){var i,o,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.toString("base64"),o=function(t){return d(t,"hash",i)},t.next=4,c.find(r.multisig,r.multisig.id,o);case 4:return u=t.sent,t.abrupt("return",!!u);case 6:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function d(t,r,e){return t.memo_type===r&&t.memo===e}function v(t){return t.signers.map(function(t){return t.key})}u.list=function(){var t=o(n.mark(function t(r,e){var i,o,u,a,s=arguments;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"number"!=typeof(i=s.length>2&&void 0!==s[2]?s[2]:0)&&(i=+i),o={},u=v(e),o.filter=function(t){return f(t,u)},i&&(o.breaker=function(t){return t.ledger_attr<=i}),t.next=8,c.listRaw(r.multisig,r.multisig.id,o);case 8:return a=t.sent,t.abrupt("return",a.map(l));case 10:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),u.makePushTx=function(){var t=o(n.mark(function t(r,e,i){var o,u,f,l,h;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.hash(),t.next=3,p(r,o);case 3:if(!t.sent){t.next=6;break}return console.log("Transaction have already been pushed"),t.abrupt("return",null);case 6:return t.next=8,s.account(r.multisig,i);case 8:return u=t.sent,f=r.multisig.id,l=new a.Memo("hash",o),h=e.toEnvelope().toXDR(),t.abrupt("return",c.encode(r.multisig,u,f,l,h));case 13:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}()}])});
//# sourceMappingURL=multisig.js.map