var multisig=function(t){var r={};function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var a in t)e.d(n,a,function(r){return t[r]}.bind(null,a));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=3)}([function(t,r,e){t.exports=e(6)},function(t,r,e){"use strict";var n=new StellarSdk.Memo("hash","0000000000000000000000000000000000000000000000000000000000000000");t.exports=n.value.__proto__.constructor},function(t,r,e){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(e(0)),a=function(){var t=c(n.default.mark(function t(r,e){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return h[r]=e,t.next=3,f.timeout(1e3*s.accountCacheExpiration);case 3:delete h[r];case 4:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),o=function(){var t=c(n.default.mark(function t(r,e){var a,o,u;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(56===e.length||e.match(/.*\*.*\..*/)){t.next=2;break}throw new Error("Invalid address: "+f.shorter(e));case 2:return t.prev=2,t.next=5,StellarSdk.FederationServer.resolve(e);case 5:if(a=t.sent,o=a.account_id){t.next=9;break}throw new Error("Empty account");case 9:return a.memo_type||void 0===a.memo||delete a.memo,e!==o&&(a.address=e),(u=r.aliases&&r.aliases[o])&&(a.alias=u),t.abrupt("return",a);case 16:throw t.prev=16,t.t0=t.catch(2),console.error(t.t0),new Error("Can't resolve: "+f.shorter(e));case 20:case"end":return t.stop()}},t,this,[[2,16]])}));return function(r,e){return t.apply(this,arguments)}}(),u=function(){var t=c(n.default.mark(function t(r,e){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.txSources(r,e),t.abrupt("return",s.signersList.apply(s,[r].concat(i(a))));case 2:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}();function i(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}function c(t){return function(){var r=t.apply(this,arguments);return new Promise(function(t,e){return function n(a,o){try{var u=r[a](o),i=u.value}catch(t){return void e(t)}if(!u.done)return Promise.resolve(i).then(function(t){n("next",t)},function(t){n("throw",t)});t(i)}("next")})}}var s=r,f=e(8);s.network=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.network,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.server;switch(r){case"test":StellarSdk.Network.useTestNetwork(),e||(e=l);break;case"public":StellarSdk.Network.usePublicNetwork(),e||(e=p);break;default:throw new Error("Invalid network: "+r)}if(e instanceof StellarSdk.Server)t.server=e;else{if("string"!=typeof e)throw new TypeError("Invalid server: "+e);t.server=new StellarSdk.Server(e)}return t.server};var l=new StellarSdk.Server("https://horizon-testnet.stellar.org"),p=new StellarSdk.Server("https://horizon.stellar.org");s.accountCacheExpiration=300;var h={};s.address=function(t,r){if(h[r])return h[r];var e=o(t,r);return a(r,e),e},s.account=function(){var t=c(n.default.mark(function t(r,e){var a,o,u,i,c,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.network;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.network(r,l),t.next=3,s.address(r,e);case 3:return o=t.sent,u=o.account_id,t.prev=5,t.next=8,a.loadAccount(u);case 8:return i=t.sent,t.abrupt("return",i);case 12:throw t.prev=12,t.t0=t.catch(5),console.error(t.t0),c=f.shorter(e),new Error("Empty account: "+c);case 17:case"end":return t.stop()}},t,this,[[5,12]])}));return function(r,e){return t.apply(this,arguments)}}(),s.transaction=function(){var t=c(n.default.mark(function t(r,e){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.server.transactions(),t.abrupt("return",a.transaction(e).call());case 2:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),s.accountSigners=function(){var t=c(n.default.mark(function t(r,e){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.account(r,e);case 2:return a=t.sent,t.abrupt("return",a.signers);case 4:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),s.signersTable=function(){var t=c(n.default.mark(function t(r){for(var e=arguments.length,a=Array(e>1?e-1:0),o=1;o<e;o++)a[o-1]=arguments[o];var u,i,c;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:u={},t.t0=n.default.keys(a);case 2:if((t.t1=t.t0()).done){t.next=10;break}return i=t.t1.value,t.next=6,s.account(r,a[i]);case 6:c=t.sent,u[c.id]||(u[c.id]=c.signers),t.next=2;break;case 10:return t.abrupt("return",u);case 11:case"end":return t.stop()}},t,this)}));return function(r){return t.apply(this,arguments)}}(),s.signersList=function(){var t=c(n.default.mark(function t(r){for(var e=arguments.length,a=Array(e>1?e-1:0),o=1;o<e;o++)a[o-1]=arguments[o];var u,i;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:u=[],t.t0=n.default.keys(a);case 2:if((t.t1=t.t0()).done){t.next=10;break}return i=t.t1.value,t.next=6,s.account(r,a[i]);case 6:t.sent.signers.forEach(function(t){u.find(function(r){return r.key===t.key})||u.push(t.key)}),t.next=2;break;case 10:return t.abrupt("return",u);case 11:case"end":return t.stop()}},t,this)}));return function(r){return t.apply(this,arguments)}}(),s.txSources=function(t,r){var e=v(r);if(e.sources)return e.sources;var n=[r.source],a=function(t){var e=r.operations[t].source;e&&!n.find(function(t){return t===e})&&n.push(e)};for(var o in r.operations)a(o);return e.sources=n,n},s.txSignersList=function(){var t=c(n.default.mark(function t(r,e){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(a=v(e)).signers||(a.signers=u(r,e)),t.abrupt("return",a.signers);case 3:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}();var d="extra_ocmultisig";function v(t){return t.extra||(t[d]={}),t[d]}},function(module,exports,__webpack_require__){"use strict";(function(global){var isBrowser=new Function("try { return this === window } catch (e) { return false }"),isNode=new Function("try { return this === global } catch (e) { return false }");if(isBrowser()){if("undefined"==typeof StellarSdk)throw new Error("stellar-ledger-wallet depends on StellarSdk.")}else if(isNode()){var stealth_require=eval("require");global.StellarSdk=stealth_require("stellar-sdk")}function prepare(t){var r={};for(var e in t)"function"==typeof t[e]&&(r[e]=passConfig(t[e]));return Object.assign({},t,r)}function passConfig(t){return function(){for(var r=arguments.length,e=Array(r),n=0;n<r;n++)e[n]=arguments[n];return t.apply(void 0,[this].concat(e))}}module.exports=prepare(__webpack_require__(5))}).call(this,__webpack_require__(4))},function(t,r){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(e(0)),a=function(){var t=u(n.default.mark(function t(r,e,a,o){var u,i,c,s,l,p;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=g(r,e),i=a.toString("base64"),t.next=4,f.filter(r,u,function(t){return"hash"===t.memo_type&&t.memo===i});case 4:c=t.sent,s=[],l=function(t){var r=c[t],e=new StellarSdk.Transaction(r.envelope_xdr);if(!o.find(function(t){return t===e.source}))return"continue";e.operations.forEach(function(t){"manageData"===t.type&&"Send"===t.name&&s.push(t.value)})},t.t0=n.default.keys(c);case 8:if((t.t1=t.t0()).done){t.next=15;break}if(p=t.t1.value,"continue"!==l(p)){t.next=13;break}return t.abrupt("continue",8);case 13:t.next=8;break;case 15:return t.abrupt("return",s);case 16:case"end":return t.stop()}},t,this)}));return function(r,e,n,a){return t.apply(this,arguments)}}(),o=function(){var t=u(n.default.mark(function t(r,e){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!y(e)){t.next=4;break}return t.abrupt("return",e);case 4:if(!(e instanceof StellarSdk.Keypair)){t.next=8;break}e=e.publicKey(),t.next=14;break;case 8:if(!(e instanceof StellarSdk.Account)){t.next=12;break}e=e._accountId,t.next=14;break;case 12:if("string"==typeof e){t.next=14;break}throw new TypeError("Invalid user parameter.");case 14:return t.next=16,s.account(r,e);case 16:return a=t.sent,t.abrupt("return",a);case 18:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}();function u(t){return function(){var r=t.apply(this,arguments);return new Promise(function(t,e){return function n(a,o){try{var u=r[a](o),i=u.value}catch(t){return void e(t)}if(!u.done)return Promise.resolve(i).then(function(t){n("next",t)},function(t){n("throw",t)});t(i)}("next")})}}var i=r,c=e(1),s=e(2),f=e(9);function l(t,r){return t.filter(function(t){return!r.find(function(r){return t.toString()===r.toString()})})}function p(t,r){var e=StellarSdk.Keypair.random().publicKey(),n=new StellarSdk.TransactionBuilder(r);return n.addMemo(new StellarSdk.Memo("text","Enable signature sharing")),n.addOperation(StellarSdk.Operation.manageData({name:"config:multisig",value:e})),n.addOperation(StellarSdk.Operation.createAccount({destination:e,startingBalance:"1",asset:StellarSdk.Asset.native()})),n.build()}function h(t,r){var e=new StellarSdk.TransactionBuilder(r);return e.addMemo(new StellarSdk.Memo("text","Disable signature sharing")),e.addOperation(StellarSdk.Operation.manageData({name:"config:multisig",value:""})),e.build()}function d(t,r,e,n){var a=new StellarSdk.Memo("hash",e),o=g(t,r),u=c.concat(n);return f.sendTx(r,o,a,u)}function v(t,r,e,n,a){var o=!1,u=r.signatures.map(function(t){return t.signature().toString()}),i=a.map(function(t){return StellarSdk.Keypair.fromPublicKey(t)}),c=function(t){var a=e[t];if(u.find(function(t){return t===a.toString()}))return"continue";var c=i.find(function(t){return t.verify(n,a)});if(!c)return"continue";r.signatures.push(function(t,r){return new(0,StellarSdk.xdr.DecoratedSignature)({hint:t.signatureHint(),signature:r})}(c,a)),u.push(a.toString()),o=!0};for(var s in e)c(s);return o}function g(t,r){var e=r.data_attr["config:multisig"];return e&&c.from(e,"base64").toString("utf8")}function y(t){return t&&t._baseAccount&&t._baseAccount instanceof StellarSdk.Account}function w(t,r,e){return e instanceof StellarSdk.Keypair&&e.canSign()?(r.sign(e),t.server.submitTransaction(r)):r}i.network="test",i.server="https://horizon-testnet.stellar.org",i.isEnabled=function(){var t=u(n.default.mark(function t(r,e){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.config(r,e);case 2:if(!t.sent){t.next=6;break}return t.abrupt("return",!0);case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),i.config=function(){var t=u(n.default.mark(function t(r,e){var a,u;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(r,e);case 2:if(a=t.sent,!(u=g(r,a))){t.next=8;break}return t.abrupt("return",{multisig:u,network:r.network});case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),i.enable=function(){var t=u(n.default.mark(function t(r,e){var a,u;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(r,e);case 2:return a=t.sent,t.next=5,i.config(r,a);case 5:if(!t.sent){t.next=10;break}return console.log("On-chain signature sharing is already enabled on this account."),t.abrupt("return",null);case 10:return u=p(r,a),t.abrupt("return",w(r,u,e));case 12:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),i.disable=function(){var t=u(n.default.mark(function t(r,e){var a,u;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(r,e);case 2:return a=t.sent,t.next=5,i.config(r,a);case 5:if(t.sent){t.next=10;break}return console.log("On-chain signature sharing is already disabled on this account."),t.abrupt("return",null);case 10:return u=h(r,a),t.abrupt("return",w(r,u,e));case 12:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),i.pushSignatures=function(){var t=u(n.default.mark(function t(r,e,u){var c,f,p,h,v,g,y;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=u||e.source,t.next=3,o(r,u);case 3:return c=t.sent,t.next=6,i.config(r,c);case 6:if(t.sent){t.next=8;break}throw new Error("On-chain signature sharing in not enabled on this account.");case 8:if(f=e.hash(),p=e.signatures.map(function(t){return t.signature()}),e.signatures.length){t.next=12;break}return t.abrupt("return",null);case 12:return t.next=14,s.txSignersList(r,e);case 14:return h=t.sent,t.next=17,a(r,c,f,h);case 17:if(v=t.sent,(g=l(p,v)).length){t.next=21;break}return t.abrupt("return",null);case 21:return y=d(r,c,f,g),t.abrupt("return",w(r,y,u));case 23:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}(),i.pullSignatures=function(){var t=u(n.default.mark(function t(r,e){var u,c,f,l;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(r,e.source);case 2:return u=t.sent,t.next=5,i.config(r,u);case 5:if(t.sent){t.next=7;break}throw new Error("On-chain signature sharing in not enabled on this account.");case 7:return t.next=9,s.txSignersList(r,e);case 9:return c=t.sent,f=e.hash(),t.next=13,a(r,u,f,c);case 13:return l=t.sent,t.abrupt("return",v(r,e,l,f,c));case 15:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}()},function(t,r,e){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e(7),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,r){!function(r){"use strict";var e,n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",s="object"==typeof t,f=r.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=r.regeneratorRuntime=s?t.exports:{}).wrap=x;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},g={};g[u]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(A([])));w&&w!==n&&a.call(w,u)&&(g=w);var m=_.prototype=k.prototype=Object.create(g);S.prototype=m.constructor=_,_.constructor=S,_[c]=S.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===S||"GeneratorFunction"===(r.displayName||r.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[i]=function(){return this},f.AsyncIterator=O,f.async=function(t,r,e,n){var a=new O(x(t,r,e,n));return f.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(m),m[c]="Generator",m[u]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},f.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],i=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var c=a.call(u,"catchLoc"),s=a.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var a=n.arg;P(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}}}function x(t,r,e,n){var a=r&&r.prototype instanceof k?r:k,o=Object.create(a.prototype),u=new j(n||[]);return o._invoke=function(t,r,e){var n=l;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return M()}for(e.method=a,e.arg=o;;){var u=e.delegate;if(u){var i=L(u,e);if(i){if(i===v)continue;return i}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var c=b(t,r,e);if("normal"===c.type){if(n=e.done?d:p,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=d,e.method="throw",e.arg=c.arg)}}}(t,e,u),o}function b(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function k(){}function S(){}function _(){}function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function O(t){var r;this._invoke=function(e,n){function o(){return new Promise(function(r,o){!function r(e,n,o,u){var i=b(t[e],t,n);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,o,u)},function(t){r("throw",t,o,u)}):Promise.resolve(s).then(function(t){c.value=t,o(c)},u)}u(i.arg)}(e,n,r,o)})}return r=r?r.then(o,o):o()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=b(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:M}}function M(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},function(t,r,e){"use strict";var n=r;n.timeout=function(t){return new Promise(function(r){setTimeout(r,t)})},n.shorter=function(t){return t.length>50?t.substr(0,5)+"..."+t.substr(-5):t}},function(t,r,e){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(e(0)),a=function(){var t=u(n.default.mark(function t(r,e,o){var u;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o||(o=[]),t.next=3,r;case 3:if(0!==(u=t.sent).records.length){t.next=6;break}return t.abrupt("return",o);case 6:if(!(e&&o.length+u.records.length>e)){t.next=8;break}return t.abrupt("return",o.concat(u.records.slice(0,e-o.length)));case 8:return o=o.concat(u.records),t.abrupt("return",a(u.next(),e,o));case 10:case"end":return t.stop()}},t,this)}));return function(r,e,n){return t.apply(this,arguments)}}(),o=function(){var t=u(n.default.mark(function t(r,e,a,u){var i,c,s;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u||(u=[]),t.next=3,r;case 3:if(0!==(i=t.sent).records.length){t.next=6;break}return t.abrupt("return",u);case 6:t.t0=n.default.keys(i.records);case 7:if((t.t1=t.t0()).done){t.next=15;break}if(c=t.t1.value,s=i.records[c],e(s)&&u.push(s),u.length!==a){t.next=13;break}return t.abrupt("return",u);case 13:t.next=7;break;case 15:return t.abrupt("return",o(i.next(),e,a,u));case 16:case"end":return t.stop()}},t,this)}));return function(r,e,n,a){return t.apply(this,arguments)}}();function u(t){return function(){var r=t.apply(this,arguments);return new Promise(function(t,e){return function n(a,o){try{var u=r[a](o),i=u.value}catch(t){return void e(t)}if(!u.done)return Promise.resolve(i).then(function(t){n("next",t)},function(t){n("throw",t)});t(i)}("next")})}}var i=r,c=e(1),s=e(2);function f(t){return new StellarSdk.Transaction(t.envelope_xdr).memo}function l(t){if(t.operation_count<2)return null;var r=[];return new StellarSdk.Transaction(t.envelope_xdr).operations.forEach(function(t){"manageData"===t.type&&"Send"===t.name&&r.push(t.value)}),c.concat(r)}i.sendTx=function(t,r,e,n){if(e||(e=new StellarSdk.Memo("none")),n||(n=""),"string"==typeof e)e=new StellarSdk.Memo("text",c.from(e).slice(0,28).toString());else if(!(e instanceof StellarSdk.Memo))throw new TypeError("memo is not a string nor a memo.");if("string"!=typeof n&&!(n instanceof c))throw new TypeError("message is not a string nor a buffer.");var a=new StellarSdk.TransactionBuilder(t);a.addMemo(e),"array"!=typeof r&&(r=[r]),r.forEach(function(t){a.addOperation(StellarSdk.Operation.payment({destination:t,asset:StellarSdk.Asset.native(),amount:"0.0000001"}))}),n instanceof c||(n=c.from(n));var o=100-r.length;n.length>64*o&&console.log("Warning: message will be truncated.");for(var u=0;u<o;u++){var i=n.slice(64*u,64*u+64);if(0===i.length)break;a.addOperation(StellarSdk.Operation.manageData({name:"Send",value:i}))}return a.build()},i.read=function(){var t=u(n.default.mark(function t(r,e){var a,o;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s.network(r),a=r.server.transactions(),t.next=4,a.transaction(e).call();case 4:return o=t.sent,t.abrupt("return",{sender:o.source_account,memo:f(o),date:o.created_at,message:l(o)});case 6:case"end":return t.stop()}},t,this)}));return function(r,e){return t.apply(this,arguments)}}(),i.list=function(t,r,e){s.network(t);var n=t.server.transactions().forAccount(r).limit(200);return a(n.call(),e)},i.find=function(t,r,e){return i.filter(t,r,e,1)},i.filter=function(t,r,e,n){s.network(t);var a=t.server.transactions().forAccount(r).limit(200);return o(a.call(),e,n)}}]);
//# sourceMappingURL=multisig.js.map