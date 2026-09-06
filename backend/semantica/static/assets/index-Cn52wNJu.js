const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DecisionWorkspace-B7CDR6ts.js","assets/query-vendor-CCrh9h3E.js","assets/info-W_17K-C_.js","assets/DiffMergeWorkspace-CymDipps.js","assets/registryStore-Du62jEWc.js","assets/circle-check-BEClewqN.js","assets/loader-circle-CM2oxwD5.js","assets/GraphWorkspace-ZxOdLglw.js","assets/graph-vendor-C_DST6AN.js","assets/triangle-alert-Jxv8haeW.js","assets/refresh-cw-DK5jtF7l.js","assets/layers-kYTIgkha.js","assets/git-branch-CVKzfdnr.js","assets/play-vijwVK8X.js","assets/x-t0u1OnPu.js","assets/ImportExportWorkspace-bMkJoCUA.js","assets/index-CNJ9qzBq.js","assets/cloud-upload-CEyOl4fG.js","assets/file-text-9DkLkF_7.js","assets/download-CTwOZgte.js","assets/LineageDiagram-olGXW84l.js","assets/style-Cc9ovnM6.js","assets/index-CVqD6U61.js","assets/style-BZV40eAE.css","assets/ReasoningWorkspace-DkmwsOUq.js","assets/SparqlWorkspace-CWf3e1qC.js","assets/index-DnpP-rNA.js","assets/VocabularyWorkspace-BJ-ANtWj.js","assets/queries-BXEZvWsX.js","assets/chevron-down-B8JijZAg.js","assets/chevron-right-B0TunMva.js","assets/RegistryTab-LBMm85WX.js","assets/trash-2-CLzEc8Jf.js","assets/EntityResolutionTab-51cRFvi5.js","assets/KGOverviewTab-C_uXSGP_.js","assets/OntologySummaryTab-DRrpQ1Sa.js","assets/book-open-zFH4Ywfz.js","assets/external-link-DyLQjK7F.js","assets/KnowledgeEngineeringWorkspace-BQDOs9bj.js","assets/sparkles-D1Tn4o9A.js","assets/index-BfsN1_uG.js"])))=>i.map(i=>d[i]);
import{r as kf,a as Y,j as r,Q as d1,b as g1}from"./query-vendor-CCrh9h3E.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))g(w);new MutationObserver(w=>{for(const j of w)if(j.type==="childList")for(const k of j.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&g(k)}).observe(document,{childList:!0,subtree:!0});function _(w){const j={};return w.integrity&&(j.integrity=w.integrity),w.referrerPolicy&&(j.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?j.credentials="include":w.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function g(w){if(w.ep)return;w.ep=!0;const j=_(w);fetch(w.href,j)}})();var Nf={exports:{}},li={},Df={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function m1(){return Cd||(Cd=1,(function(o){function c(x,A){var C=x.length;x.push(A);e:for(;0<C;){var $=C-1>>>1,F=x[$];if(0<w(F,A))x[$]=A,x[C]=F,C=$;else break e}}function _(x){return x.length===0?null:x[0]}function g(x){if(x.length===0)return null;var A=x[0],C=x.pop();if(C!==A){x[0]=C;e:for(var $=0,F=x.length,Se=F>>>1;$<Se;){var ce=2*($+1)-1,J=x[ce],be=ce+1,Fe=x[be];if(0>w(J,C))be<F&&0>w(Fe,J)?(x[$]=Fe,x[be]=C,$=be):(x[$]=J,x[ce]=C,$=ce);else if(be<F&&0>w(Fe,C))x[$]=Fe,x[be]=C,$=be;else break e}}return A}function w(x,A){var C=x.sortIndex-A.sortIndex;return C!==0?C:x.id-A.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;o.unstable_now=function(){return j.now()}}else{var k=Date,B=k.now();o.unstable_now=function(){return k.now()-B}}var O=[],v=[],D=1,T=null,R=3,Q=!1,te=!1,V=!1,ee=!1,ue=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function Ae(x){for(var A=_(v);A!==null;){if(A.callback===null)g(v);else if(A.startTime<=x)g(v),A.sortIndex=A.expirationTime,c(O,A);else break;A=_(v)}}function ve(x){if(V=!1,Ae(x),!te)if(_(O)!==null)te=!0,pe||(pe=!0,ge());else{var A=_(v);A!==null&&ke(ve,A.startTime-x)}}var pe=!1,we=-1,xe=5,Re=-1;function $e(){return ee?!0:!(o.unstable_now()-Re<xe)}function Oe(){if(ee=!1,pe){var x=o.unstable_now();Re=x;var A=!0;try{e:{te=!1,V&&(V=!1,de(we),we=-1),Q=!0;var C=R;try{l:{for(Ae(x),T=_(O);T!==null&&!(T.expirationTime>x&&$e());){var $=T.callback;if(typeof $=="function"){T.callback=null,R=T.priorityLevel;var F=$(T.expirationTime<=x);if(x=o.unstable_now(),typeof F=="function"){T.callback=F,Ae(x),A=!0;break l}T===_(O)&&g(O),Ae(x)}else g(O);T=_(O)}if(T!==null)A=!0;else{var Se=_(v);Se!==null&&ke(ve,Se.startTime-x),A=!1}}break e}finally{T=null,R=C,Q=!1}A=void 0}}finally{A?ge():pe=!1}}}var ge;if(typeof ae=="function")ge=function(){ae(Oe)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Qe=He.port2;He.port1.onmessage=Oe,ge=function(){Qe.postMessage(null)}}else ge=function(){ue(Oe,0)};function ke(x,A){we=ue(function(){x(o.unstable_now())},A)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(x){x.callback=null},o.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<x?Math.floor(1e3/x):5},o.unstable_getCurrentPriorityLevel=function(){return R},o.unstable_next=function(x){switch(R){case 1:case 2:case 3:var A=3;break;default:A=R}var C=R;R=A;try{return x()}finally{R=C}},o.unstable_requestPaint=function(){ee=!0},o.unstable_runWithPriority=function(x,A){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var C=R;R=x;try{return A()}finally{R=C}},o.unstable_scheduleCallback=function(x,A,C){var $=o.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?$+C:$):C=$,x){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=C+F,x={id:D++,callback:A,priorityLevel:x,startTime:C,expirationTime:F,sortIndex:-1},C>$?(x.sortIndex=C,c(v,x),_(O)===null&&x===_(v)&&(V?(de(we),we=-1):V=!0,ke(ve,C-$))):(x.sortIndex=F,c(O,x),te||Q||(te=!0,pe||(pe=!0,ge()))),x},o.unstable_shouldYield=$e,o.unstable_wrapCallback=function(x){var A=R;return function(){var C=R;R=A;try{return x.apply(this,arguments)}finally{R=C}}}})(Mf)),Mf}var Ud;function h1(){return Ud||(Ud=1,Df.exports=m1()),Df.exports}var jf={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function p1(){if(Rd)return Je;Rd=1;var o=kf();function c(O){var v="https://react.dev/errors/"+O;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)v+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+O+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var g={d:{f:_,r:function(){throw Error(c(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},w=Symbol.for("react.portal");function j(O,v,D){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:T==null?null:""+T,children:O,containerInfo:v,implementation:D}}var k=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(O,v){if(O==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Je.createPortal=function(O,v){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(c(299));return j(O,v,null,D)},Je.flushSync=function(O){var v=k.T,D=g.p;try{if(k.T=null,g.p=2,O)return O()}finally{k.T=v,g.p=D,g.d.f()}},Je.preconnect=function(O,v){typeof O=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,g.d.C(O,v))},Je.prefetchDNS=function(O){typeof O=="string"&&g.d.D(O)},Je.preinit=function(O,v){if(typeof O=="string"&&v&&typeof v.as=="string"){var D=v.as,T=B(D,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,Q=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;D==="style"?g.d.S(O,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:T,integrity:R,fetchPriority:Q}):D==="script"&&g.d.X(O,{crossOrigin:T,integrity:R,fetchPriority:Q,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Je.preinitModule=function(O,v){if(typeof O=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var D=B(v.as,v.crossOrigin);g.d.M(O,{crossOrigin:D,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&g.d.M(O)},Je.preload=function(O,v){if(typeof O=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var D=v.as,T=B(D,v.crossOrigin);g.d.L(O,D,{crossOrigin:T,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Je.preloadModule=function(O,v){if(typeof O=="string")if(v){var D=B(v.as,v.crossOrigin);g.d.m(O,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:D,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else g.d.m(O)},Je.requestFormReset=function(O){g.d.r(O)},Je.unstable_batchedUpdates=function(O,v){return O(v)},Je.useFormState=function(O,v,D){return k.H.useFormState(O,v,D)},Je.useFormStatus=function(){return k.H.useHostTransitionStatus()},Je.version="19.2.5",Je}var Hd;function y1(){if(Hd)return jf.exports;Hd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),jf.exports=p1(),jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function b1(){if(kd)return li;kd=1;var o=h1(),c=kf(),_=y1();function g(e){var l="https://react.dev/errors/"+e;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)l+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function j(e){var l=e,t=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(t=l.return),e=l.return;while(e)}return l.tag===3?t:null}function k(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function B(e){if(e.tag===31){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function O(e){if(j(e)!==e)throw Error(g(188))}function v(e){var l=e.alternate;if(!l){if(l=j(e),l===null)throw Error(g(188));return l!==e?null:e}for(var t=e,a=l;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){t=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return O(n),e;if(i===a)return O(n),l;i=i.sibling}throw Error(g(188))}if(t.return!==a.return)t=n,a=i;else{for(var u=!1,f=n.child;f;){if(f===t){u=!0,t=n,a=i;break}if(f===a){u=!0,a=n,t=i;break}f=f.sibling}if(!u){for(f=i.child;f;){if(f===t){u=!0,t=i,a=n;break}if(f===a){u=!0,a=i,t=n;break}f=f.sibling}if(!u)throw Error(g(189))}}if(t.alternate!==a)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?e:l}function D(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e;for(e=e.child;e!==null;){if(l=D(e),l!==null)return l;e=e.sibling}return null}var T=Object.assign,R=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),te=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),de=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),$e=Symbol.for("react.memo_cache_sentinel"),Oe=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=Oe&&e[Oe]||e["@@iterator"],typeof e=="function"?e:null)}var He=Symbol.for("react.client.reference");function Qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===He?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case ue:return"Profiler";case ee:return"StrictMode";case ve:return"Suspense";case pe:return"SuspenseList";case Re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case te:return"Portal";case ae:return e.displayName||"Context";case de:return(e._context.displayName||"Context")+".Consumer";case Ae:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return l=e.displayName||null,l!==null?l:Qe(e.type)||"Memo";case xe:l=e._payload,e=e._init;try{return Qe(e(l))}catch{}}return null}var ke=Array.isArray,x=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C={pending:!1,data:null,method:null,action:null},$=[],F=-1;function Se(e){return{current:e}}function ce(e){0>F||(e.current=$[F],$[F]=null,F--)}function J(e,l){F++,$[F]=e.current,e.current=l}var be=Se(null),Fe=Se(null),cl=Se(null),Dl=Se(null);function Xl(e,l){switch(J(cl,l),J(Fe,e),J(be,null),l.nodeType){case 9:case 11:e=(e=l.documentElement)&&(e=e.namespaceURI)?td(e):0;break;default:if(e=l.tagName,l=l.namespaceURI)l=td(l),e=ad(l,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ce(be),J(be,e)}function fl(){ce(be),ce(Fe),ce(cl)}function Bl(e){e.memoizedState!==null&&J(Dl,e);var l=be.current,t=ad(l,e.type);l!==t&&(J(Fe,e),J(be,t))}function Ml(e){Fe.current===e&&(ce(be),ce(Fe)),Dl.current===e&&(ce(Dl),Fn._currentValue=C)}var gt,Lt;function yl(e){if(gt===void 0)try{throw Error()}catch(t){var l=t.stack.trim().match(/\n( *(at )?)/);gt=l&&l[1]||"",Lt=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gt+e+Lt}var mt=!1;function ht(e,l){if(!e||mt)return"";mt=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(b){var y=b}Reflect.construct(e,[],E)}else{try{E.call()}catch(b){y=b}e.call(E.prototype)}}else{try{throw Error()}catch(b){y=b}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],f=i[1];if(u&&f){var s=u.split(`
`),p=f.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===p.length)for(a=s.length-1,n=p.length-1;1<=a&&0<=n&&s[a]!==p[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==p[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==p[n]){var S=`
`+s[a].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=a&&0<=n);break}}}finally{mt=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?yl(t):""}function pa(e,l){switch(e.tag){case 26:case 27:case 5:return yl(e.type);case 16:return yl("Lazy");case 13:return e.child!==l&&l!==null?yl("Suspense Fallback"):yl("Suspense");case 19:return yl("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return yl("Activity");default:return""}}function Xt(e){try{var l="",t=null;do l+=pa(e,t),t=e,e=e.return;while(e);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var pt=Object.prototype.hasOwnProperty,yt=o.unstable_scheduleCallback,bt=o.unstable_cancelCallback,ya=o.unstable_shouldYield,ba=o.unstable_requestPaint,Be=o.unstable_now,va=o.unstable_getCurrentPriorityLevel,Zt=o.unstable_ImmediatePriority,Kt=o.unstable_UserBlockingPriority,Zl=o.unstable_NormalPriority,xa=o.unstable_LowPriority,Jt=o.unstable_IdlePriority,Sa=o.log,za=o.unstable_setDisableYieldValue,bl=null,Ne=null;function ol(e){if(typeof Sa=="function"&&za(e),Ne&&typeof Ne.setStrictMode=="function")try{Ne.setStrictMode(bl,e)}catch{}}var qe=Math.clz32?Math.clz32:Ta,Ea=Math.log,_a=Math.LN2;function Ta(e){return e>>>=0,e===0?32:31-(Ea(e)/_a|0)|0}var jl=256,Cl=262144,Ul=4194304;function vl(e){var l=e&42;if(l!==0)return l;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kl(e,l,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?n=vl(a):(u&=f,u!==0?n=vl(u):t||(t=f&~e,t!==0&&(n=vl(t))))):(f=a&~i,f!==0?n=vl(f):u!==0?n=vl(u):t||(t=a&~e,t!==0&&(n=vl(t)))),n===0?0:l!==0&&l!==n&&(l&i)===0&&(i=n&-n,t=l&-l,i>=t||i===32&&(t&4194048)!==0)?l:n}function ql(e,l){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&l)===0}function Aa(e,l){switch(e){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(){var e=Ul;return Ul<<=1,(Ul&62914560)===0&&(Ul=4194304),e}function vt(e){for(var l=[],t=0;31>t;t++)l.push(e);return l}function Gl(e,l){e.pendingLanes|=l,l!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ai(e,l,t,a,n,i){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,s=e.expirationTimes,p=e.hiddenUpdates;for(t=u&~t;0<t;){var S=31-qe(t),E=1<<S;f[S]=0,s[S]=-1;var y=p[S];if(y!==null)for(p[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}t&=~E}a!==0&&Jl(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~l))}function Jl(e,l,t){e.pendingLanes|=l,e.suspendedLanes&=~l;var a=31-qe(l);e.entangledLanes|=l,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Bf(e,l){var t=e.entangledLanes|=l;for(e=e.entanglements;t;){var a=31-qe(t),n=1<<a;n&l|e[a]&l&&(e[a]|=l),t&=~n}}function qf(e,l){var t=l&-l;return t=(t&42)!==0?1:yu(t),(t&(e.suspendedLanes|l))!==0?0:t}function yu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gf(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:Ad(e.type))}function Yf(e,l){var t=A.p;try{return A.p=e,l()}finally{A.p=t}}var xt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+xt,Pe="__reactProps$"+xt,wa="__reactContainer$"+xt,vu="__reactEvents$"+xt,l0="__reactListeners$"+xt,t0="__reactHandles$"+xt,Qf="__reactResources$"+xt,dn="__reactMarker$"+xt;function xu(e){delete e[Ve],delete e[Pe],delete e[vu],delete e[l0],delete e[t0]}function Oa(e){var l=e[Ve];if(l)return l;for(var t=e.parentNode;t;){if(l=t[wa]||t[Ve]){if(t=l.alternate,l.child!==null||t!==null&&t.child!==null)for(e=sd(e);e!==null;){if(t=e[Ve])return t;e=sd(e)}return l}e=t,t=e.parentNode}return null}function Na(e){if(e=e[Ve]||e[wa]){var l=e.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return e}return null}function gn(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e.stateNode;throw Error(g(33))}function Da(e){var l=e[Qf];return l||(l=e[Qf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Ge(e){e[dn]=!0}var Vf=new Set,Lf={};function $t(e,l){Ma(e,l),Ma(e+"Capture",l)}function Ma(e,l){for(Lf[e]=l,e=0;e<l.length;e++)Vf.add(l[e])}var a0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xf={},Zf={};function n0(e){return pt.call(Zf,e)?!0:pt.call(Xf,e)?!1:a0.test(e)?Zf[e]=!0:(Xf[e]=!0,!1)}function ni(e,l,t){if(n0(l))if(t===null)e.removeAttribute(l);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(l);return}}e.setAttribute(l,""+t)}}function ii(e,l,t){if(t===null)e.removeAttribute(l);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttribute(l,""+t)}}function Wl(e,l,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(l,t,""+a)}}function xl(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kf(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function i0(e,l,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,l);if(!e.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return n.call(this)},set:function(u){t=""+u,i.call(this,u)}}),Object.defineProperty(e,l,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function Su(e){if(!e._valueTracker){var l=Kf(e)?"checked":"value";e._valueTracker=i0(e,l,""+e[l])}}function Jf(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var t=l.getValue(),a="";return e&&(a=Kf(e)?e.checked?"true":"false":e.value),e=a,e!==t?(l.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var u0=/[\n"\\]/g;function Sl(e){return e.replace(u0,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function zu(e,l,t,a,n,i,u,f){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),l!=null?u==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+xl(l)):e.value!==""+xl(l)&&(e.value=""+xl(l)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),l!=null?Eu(e,u,xl(l)):t!=null?Eu(e,u,xl(t)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+xl(f):e.removeAttribute("name")}function Wf(e,l,t,a,n,i,u,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),l!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||l!=null)){Su(e);return}t=t!=null?""+xl(t):"",l=l!=null?""+xl(l):t,f||l===e.value||(e.value=l),e.defaultValue=l}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Su(e)}function Eu(e,l,t){l==="number"&&ui(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ja(e,l,t,a){if(e=e.options,l){l={};for(var n=0;n<t.length;n++)l["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=l.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&a&&(e[t].defaultSelected=!0)}else{for(t=""+xl(t),l=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}l!==null||e[n].disabled||(l=e[n])}l!==null&&(l.selected=!0)}}function $f(e,l,t){if(l!=null&&(l=""+xl(l),l!==e.value&&(e.value=l),t==null)){e.defaultValue!==l&&(e.defaultValue=l);return}e.defaultValue=t!=null?""+xl(t):""}function Ff(e,l,t,a){if(l==null){if(a!=null){if(t!=null)throw Error(g(92));if(ke(a)){if(1<a.length)throw Error(g(93));a=a[0]}t=a}t==null&&(t=""),l=t}t=xl(l),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),Su(e)}function Ca(e,l){if(l){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=l;return}}e.textContent=l}var c0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function If(e,l,t){var a=l.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="":a?e.setProperty(l,t):typeof t!="number"||t===0||c0.has(l)?l==="float"?e.cssFloat=t:e[l]=(""+t).trim():e[l]=t+"px"}function Pf(e,l,t){if(l!=null&&typeof l!="object")throw Error(g(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in l)a=l[n],l.hasOwnProperty(n)&&t[n]!==a&&If(e,n,a)}else for(var i in l)l.hasOwnProperty(i)&&If(e,i,l[i])}function _u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var f0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),o0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ci(e){return o0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $l(){}var Tu=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,Ra=null;function eo(e){var l=Na(e);if(l&&(e=l.stateNode)){var t=e[Pe]||null;e:switch(e=l.stateNode,l.type){case"input":if(zu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),l=t.name,t.type==="radio"&&l!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Sl(""+l)+'"][type="radio"]'),l=0;l<t.length;l++){var a=t[l];if(a!==e&&a.form===e.form){var n=a[Pe]||null;if(!n)throw Error(g(90));zu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<t.length;l++)a=t[l],a.form===e.form&&Jf(a)}break e;case"textarea":$f(e,t.value,t.defaultValue);break e;case"select":l=t.value,l!=null&&ja(e,!!t.multiple,l,!1)}}}var wu=!1;function lo(e,l,t){if(wu)return e(l,t);wu=!0;try{var a=e(l);return a}finally{if(wu=!1,(Ua!==null||Ra!==null)&&(Ji(),Ua&&(l=Ua,e=Ra,Ra=Ua=null,eo(l),e)))for(l=0;l<e.length;l++)eo(e[l])}}function mn(e,l){var t=e.stateNode;if(t===null)return null;var a=t[Pe]||null;if(a===null)return null;t=a[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(g(231,l,typeof t));return t}var Fl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if(Fl)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{Ou=!1}var St=null,Nu=null,fi=null;function to(){if(fi)return fi;var e,l=Nu,t=l.length,a,n="value"in St?St.value:St.textContent,i=n.length;for(e=0;e<t&&l[e]===n[e];e++);var u=t-e;for(a=1;a<=u&&l[t-a]===n[i-a];a++);return fi=n.slice(e,1<a?1-a:void 0)}function oi(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function ao(){return!1}function el(e){function l(t,a,n,i,u){this._reactName=t,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?si:ao,this.isPropagationStopped=ao,this}return T(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),l}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=el(Ft),pn=T({},Ft,{view:0,detail:0}),s0=el(pn),Du,Mu,yn,di=T({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yn&&(yn&&e.type==="mousemove"?(Du=e.screenX-yn.screenX,Mu=e.screenY-yn.screenY):Mu=Du=0,yn=e),Du)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),no=el(di),r0=T({},di,{dataTransfer:0}),d0=el(r0),g0=T({},pn,{relatedTarget:0}),ju=el(g0),m0=T({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=el(m0),p0=T({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y0=el(p0),b0=T({},Ft,{data:0}),io=el(b0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=S0[e])?!!l[e]:!1}function Cu(){return z0}var E0=T({},pn,{key:function(e){if(e.key){var l=v0[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_0=el(E0),T0=T({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=el(T0),A0=T({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),w0=el(A0),O0=T({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=el(O0),D0=T({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=el(D0),j0=T({},Ft,{newState:0,oldState:0}),C0=el(j0),U0=[9,13,27,32],Uu=Fl&&"CompositionEvent"in window,bn=null;Fl&&"documentMode"in document&&(bn=document.documentMode);var R0=Fl&&"TextEvent"in window&&!bn,co=Fl&&(!Uu||bn&&8<bn&&11>=bn),fo=" ",oo=!1;function so(e,l){switch(e){case"keyup":return U0.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ro(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ha=!1;function H0(e,l){switch(e){case"compositionend":return ro(l);case"keypress":return l.which!==32?null:(oo=!0,fo);case"textInput":return e=l.data,e===fo&&oo?null:e;default:return null}}function k0(e,l){if(Ha)return e==="compositionend"||!Uu&&so(e,l)?(e=to(),fi=Nu=St=null,Ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return co&&l.locale!=="ko"?null:l.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function go(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!B0[e.type]:l==="textarea"}function mo(e,l,t,a){Ua?Ra?Ra.push(a):Ra=[a]:Ua=a,l=lu(l,"onChange"),0<l.length&&(t=new ri("onChange","change",null,t,a),e.push({event:t,listeners:l}))}var vn=null,xn=null;function q0(e){$r(e,0)}function gi(e){var l=gn(e);if(Jf(l))return e}function ho(e,l){if(e==="change")return l}var po=!1;if(Fl){var Ru;if(Fl){var Hu="oninput"in document;if(!Hu){var yo=document.createElement("div");yo.setAttribute("oninput","return;"),Hu=typeof yo.oninput=="function"}Ru=Hu}else Ru=!1;po=Ru&&(!document.documentMode||9<document.documentMode)}function bo(){vn&&(vn.detachEvent("onpropertychange",vo),xn=vn=null)}function vo(e){if(e.propertyName==="value"&&gi(xn)){var l=[];mo(l,xn,e,Au(e)),lo(q0,l)}}function G0(e,l,t){e==="focusin"?(bo(),vn=l,xn=t,vn.attachEvent("onpropertychange",vo)):e==="focusout"&&bo()}function Y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(xn)}function Q0(e,l){if(e==="click")return gi(l)}function V0(e,l){if(e==="input"||e==="change")return gi(l)}function L0(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var sl=typeof Object.is=="function"?Object.is:L0;function Sn(e,l){if(sl(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var t=Object.keys(e),a=Object.keys(l);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var n=t[a];if(!pt.call(l,n)||!sl(e[n],l[n]))return!1}return!0}function xo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function So(e,l){var t=xo(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=l&&a>=l)return{node:t,offset:l-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xo(t)}}function zo(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?zo(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function Eo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var l=ui(e.document);l instanceof e.HTMLIFrameElement;){try{var t=typeof l.contentWindow.location.href=="string"}catch{t=!1}if(t)e=l.contentWindow;else break;l=ui(e.document)}return l}function ku(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}var X0=Fl&&"documentMode"in document&&11>=document.documentMode,ka=null,Bu=null,zn=null,qu=!1;function _o(e,l,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;qu||ka==null||ka!==ui(a)||(a=ka,"selectionStart"in a&&ku(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),zn&&Sn(zn,a)||(zn=a,a=lu(Bu,"onSelect"),0<a.length&&(l=new ri("onSelect","select",null,l,t),e.push({event:l,listeners:a}),l.target=ka)))}function It(e,l){var t={};return t[e.toLowerCase()]=l.toLowerCase(),t["Webkit"+e]="webkit"+l,t["Moz"+e]="moz"+l,t}var Ba={animationend:It("Animation","AnimationEnd"),animationiteration:It("Animation","AnimationIteration"),animationstart:It("Animation","AnimationStart"),transitionrun:It("Transition","TransitionRun"),transitionstart:It("Transition","TransitionStart"),transitioncancel:It("Transition","TransitionCancel"),transitionend:It("Transition","TransitionEnd")},Gu={},To={};Fl&&(To=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function Pt(e){if(Gu[e])return Gu[e];if(!Ba[e])return e;var l=Ba[e],t;for(t in l)if(l.hasOwnProperty(t)&&t in To)return Gu[e]=l[t];return e}var Ao=Pt("animationend"),wo=Pt("animationiteration"),Oo=Pt("animationstart"),Z0=Pt("transitionrun"),K0=Pt("transitionstart"),J0=Pt("transitioncancel"),No=Pt("transitionend"),Do=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Rl(e,l){Do.set(e,l),$t(l,[e])}var mi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zl=[],qa=0,Qu=0;function hi(){for(var e=qa,l=Qu=qa=0;l<e;){var t=zl[l];zl[l++]=null;var a=zl[l];zl[l++]=null;var n=zl[l];zl[l++]=null;var i=zl[l];if(zl[l++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Mo(t,n,i)}}function pi(e,l,t,a){zl[qa++]=e,zl[qa++]=l,zl[qa++]=t,zl[qa++]=a,Qu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Vu(e,l,t,a){return pi(e,l,t,a),yi(e)}function ea(e,l){return pi(e,null,null,l),yi(e)}function Mo(e,l,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var n=!1,i=e.return;i!==null;)i.childLanes|=t,a=i.alternate,a!==null&&(a.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&l!==null&&(n=31-qe(t),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[l]:a.push(l),l.lane=t|536870912),i):null}function yi(e){if(50<Ln)throw Ln=0,Ic=null,Error(g(185));for(var l=e.return;l!==null;)e=l,l=e.return;return e.tag===3?e.stateNode:null}var Ga={};function W0(e,l,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rl(e,l,t,a){return new W0(e,l,t,a)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Il(e,l){var t=e.alternate;return t===null?(t=rl(e.tag,l,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=l,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function jo(e,l){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=l,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),e}function bi(e,l,t,a,n,i){var u=0;if(a=e,typeof e=="function")Lu(e)&&(u=1);else if(typeof e=="string")u=e1(e,t,be.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Re:return e=rl(31,t,l,n),e.elementType=Re,e.lanes=i,e;case V:return la(t.children,n,i,l);case ee:u=8,n|=24;break;case ue:return e=rl(12,t,l,n|2),e.elementType=ue,e.lanes=i,e;case ve:return e=rl(13,t,l,n),e.elementType=ve,e.lanes=i,e;case pe:return e=rl(19,t,l,n),e.elementType=pe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:u=10;break e;case de:u=9;break e;case Ae:u=11;break e;case we:u=14;break e;case xe:u=16,a=null;break e}u=29,t=Error(g(130,e===null?"null":typeof e,"")),a=null}return l=rl(u,t,l,n),l.elementType=e,l.type=a,l.lanes=i,l}function la(e,l,t,a){return e=rl(7,e,a,l),e.lanes=t,e}function Xu(e,l,t){return e=rl(6,e,null,l),e.lanes=t,e}function Co(e){var l=rl(18,null,null,0);return l.stateNode=e,l}function Zu(e,l,t){return l=rl(4,e.children!==null?e.children:[],e.key,l),l.lanes=t,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}var Uo=new WeakMap;function El(e,l){if(typeof e=="object"&&e!==null){var t=Uo.get(e);return t!==void 0?t:(l={value:e,source:l,stack:Xt(l)},Uo.set(e,l),l)}return{value:e,source:l,stack:Xt(l)}}var Ya=[],Qa=0,vi=null,En=0,_l=[],Tl=0,zt=null,Yl=1,Ql="";function Pl(e,l){Ya[Qa++]=En,Ya[Qa++]=vi,vi=e,En=l}function Ro(e,l,t){_l[Tl++]=Yl,_l[Tl++]=Ql,_l[Tl++]=zt,zt=e;var a=Yl;e=Ql;var n=32-qe(a)-1;a&=~(1<<n),t+=1;var i=32-qe(l)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Yl=1<<32-qe(l)+n|t<<n|a,Ql=i+e}else Yl=1<<i|t<<n|a,Ql=e}function Ku(e){e.return!==null&&(Pl(e,1),Ro(e,1,0))}function Ju(e){for(;e===vi;)vi=Ya[--Qa],Ya[Qa]=null,En=Ya[--Qa],Ya[Qa]=null;for(;e===zt;)zt=_l[--Tl],_l[Tl]=null,Ql=_l[--Tl],_l[Tl]=null,Yl=_l[--Tl],_l[Tl]=null}function Ho(e,l){_l[Tl++]=Yl,_l[Tl++]=Ql,_l[Tl++]=zt,Yl=l.id,Ql=l.overflow,zt=e}var Le=null,me=null,W=!1,Et=null,Al=!1,Wu=Error(g(519));function _t(e){var l=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _n(El(l,e)),Wu}function ko(e){var l=e.stateNode,t=e.type,a=e.memoizedProps;switch(l[Ve]=e,l[Pe]=a,t){case"dialog":X("cancel",l),X("close",l);break;case"iframe":case"object":case"embed":X("load",l);break;case"video":case"audio":for(t=0;t<Zn.length;t++)X(Zn[t],l);break;case"source":X("error",l);break;case"img":case"image":case"link":X("error",l),X("load",l);break;case"details":X("toggle",l);break;case"input":X("invalid",l),Wf(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":X("invalid",l);break;case"textarea":X("invalid",l),Ff(l,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||l.textContent===""+t||a.suppressHydrationWarning===!0||ed(l.textContent,t)?(a.popover!=null&&(X("beforetoggle",l),X("toggle",l)),a.onScroll!=null&&X("scroll",l),a.onScrollEnd!=null&&X("scrollend",l),a.onClick!=null&&(l.onclick=$l),l=!0):l=!1,l||_t(e,!0)}function Bo(e){for(Le=e.return;Le;)switch(Le.tag){case 5:case 31:case 13:Al=!1;return;case 27:case 3:Al=!0;return;default:Le=Le.return}}function Va(e){if(e!==Le)return!1;if(!W)return Bo(e),W=!0,!1;var l=e.tag,t;if((t=l!==3&&l!==27)&&((t=l===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||mf(e.type,e.memoizedProps)),t=!t),t&&me&&_t(e),Bo(e),l===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));me=od(e)}else if(l===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));me=od(e)}else l===27?(l=me,Bt(e.type)?(e=vf,vf=null,me=e):me=l):me=Le?Ol(e.stateNode.nextSibling):null;return!0}function ta(){me=Le=null,W=!1}function $u(){var e=Et;return e!==null&&(nl===null?nl=e:nl.push.apply(nl,e),Et=null),e}function _n(e){Et===null?Et=[e]:Et.push(e)}var Fu=Se(null),aa=null,et=null;function Tt(e,l,t){J(Fu,l._currentValue),l._currentValue=t}function lt(e){e._currentValue=Fu.current,ce(Fu)}function Iu(e,l,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),e===t)break;e=e.return}}function Pu(e,l,t,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var s=0;s<l.length;s++)if(f.context===l[s]){i.lanes|=t,f=i.alternate,f!==null&&(f.lanes|=t),Iu(i.return,t,e),a||(u=null);break e}i=f.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(g(341));u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),Iu(u,t,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function La(e,l,t,a){e=null;for(var n=l,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(g(387));if(u=u.memoizedProps,u!==null){var f=n.type;sl(n.pendingProps.value,u.value)||(e!==null?e.push(f):e=[f])}}else if(n===Dl.current){if(u=n.alternate,u===null)throw Error(g(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Fn):e=[Fn])}n=n.return}e!==null&&Pu(l,e,t,a),l.flags|=262144}function xi(e){for(e=e.firstContext;e!==null;){if(!sl(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){aa=e,et=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return qo(aa,e)}function Si(e,l){return aa===null&&na(e),qo(e,l)}function qo(e,l){var t=l._currentValue;if(l={context:l,memoizedValue:t,next:null},et===null){if(e===null)throw Error(g(308));et=l,e.dependencies={lanes:0,firstContext:l},e.flags|=524288}else et=et.next=l;return t}var $0=typeof AbortController<"u"?AbortController:function(){var e=[],l=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){l.aborted=!0,e.forEach(function(t){return t()})}},F0=o.unstable_scheduleCallback,I0=o.unstable_NormalPriority,De={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ec(){return{controller:new $0,data:new Map,refCount:0}}function Tn(e){e.refCount--,e.refCount===0&&F0(I0,function(){e.controller.abort()})}var An=null,lc=0,Xa=0,Za=null;function P0(e,l){if(An===null){var t=An=[];lc=0,Xa=nf(),Za={status:"pending",value:void 0,then:function(a){t.push(a)}}}return lc++,l.then(Go,Go),l}function Go(){if(--lc===0&&An!==null){Za!==null&&(Za.status="fulfilled");var e=An;An=null,Xa=0,Za=null;for(var l=0;l<e.length;l++)(0,e[l])()}}function eg(e,l){var t=[],a={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){a.status="fulfilled",a.value=l;for(var n=0;n<t.length;n++)(0,t[n])(l)},function(n){for(a.status="rejected",a.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),a}var Yo=x.S;x.S=function(e,l){_r=Be(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&P0(e,l),Yo!==null&&Yo(e,l)};var ia=Se(null);function tc(){var e=ia.current;return e!==null?e:re.pooledCache}function zi(e,l){l===null?J(ia,ia.current):J(ia,l.pool)}function Qo(){var e=tc();return e===null?null:{parent:De._currentValue,pool:e}}var Ka=Error(g(460)),ac=Error(g(474)),Ei=Error(g(542)),_i={then:function(){}};function Vo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lo(e,l,t){switch(t=e[t],t===void 0?e.push(l):t!==l&&(l.then($l,$l),l=t),l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,Zo(e),e;default:if(typeof l.status=="string")l.then($l,$l);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(g(482));e=l,e.status="pending",e.then(function(a){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=a}},function(a){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,Zo(e),e}throw ca=l,Ka}}function ua(e){try{var l=e._init;return l(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ca=t,Ka):t}}var ca=null;function Xo(){if(ca===null)throw Error(g(459));var e=ca;return ca=null,e}function Zo(e){if(e===Ka||e===Ei)throw Error(g(483))}var Ja=null,wn=0;function Ti(e){var l=wn;return wn+=1,Ja===null&&(Ja=[]),Lo(Ja,e,l)}function On(e,l){l=l.props.ref,e.ref=l!==void 0?l:null}function Ai(e,l){throw l.$$typeof===R?Error(g(525)):(e=Object.prototype.toString.call(l),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e)))}function Ko(e){function l(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)l(m,d),d=d.sibling;return null}function a(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function n(m,d){return m=Il(m,d),m.index=0,m.sibling=null,m}function i(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=67108866,d):h):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function u(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function f(m,d,h,z){return d===null||d.tag!==6?(d=Xu(h,m.mode,z),d.return=m,d):(d=n(d,h),d.return=m,d)}function s(m,d,h,z){var U=h.type;return U===V?S(m,d,h.props.children,z,h.key):d!==null&&(d.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===xe&&ua(U)===d.type)?(d=n(d,h.props),On(d,h),d.return=m,d):(d=bi(h.type,h.key,h.props,null,m.mode,z),On(d,h),d.return=m,d)}function p(m,d,h,z){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Zu(h,m.mode,z),d.return=m,d):(d=n(d,h.children||[]),d.return=m,d)}function S(m,d,h,z,U){return d===null||d.tag!==7?(d=la(h,m.mode,z,U),d.return=m,d):(d=n(d,h),d.return=m,d)}function E(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Xu(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Q:return h=bi(d.type,d.key,d.props,null,m.mode,h),On(h,d),h.return=m,h;case te:return d=Zu(d,m.mode,h),d.return=m,d;case xe:return d=ua(d),E(m,d,h)}if(ke(d)||ge(d))return d=la(d,m.mode,h,null),d.return=m,d;if(typeof d.then=="function")return E(m,Ti(d),h);if(d.$$typeof===ae)return E(m,Si(m,d),h);Ai(m,d)}return null}function y(m,d,h,z){var U=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return U!==null?null:f(m,d,""+h,z);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Q:return h.key===U?s(m,d,h,z):null;case te:return h.key===U?p(m,d,h,z):null;case xe:return h=ua(h),y(m,d,h,z)}if(ke(h)||ge(h))return U!==null?null:S(m,d,h,z,null);if(typeof h.then=="function")return y(m,d,Ti(h),z);if(h.$$typeof===ae)return y(m,d,Si(m,h),z);Ai(m,h)}return null}function b(m,d,h,z,U){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return m=m.get(h)||null,f(d,m,""+z,U);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Q:return m=m.get(z.key===null?h:z.key)||null,s(d,m,z,U);case te:return m=m.get(z.key===null?h:z.key)||null,p(d,m,z,U);case xe:return z=ua(z),b(m,d,h,z,U)}if(ke(z)||ge(z))return m=m.get(h)||null,S(d,m,z,U,null);if(typeof z.then=="function")return b(m,d,h,Ti(z),U);if(z.$$typeof===ae)return b(m,d,h,Si(d,z),U);Ai(d,z)}return null}function N(m,d,h,z){for(var U=null,I=null,M=d,G=d=0,K=null;M!==null&&G<h.length;G++){M.index>G?(K=M,M=null):K=M.sibling;var P=y(m,M,h[G],z);if(P===null){M===null&&(M=K);break}e&&M&&P.alternate===null&&l(m,M),d=i(P,d,G),I===null?U=P:I.sibling=P,I=P,M=K}if(G===h.length)return t(m,M),W&&Pl(m,G),U;if(M===null){for(;G<h.length;G++)M=E(m,h[G],z),M!==null&&(d=i(M,d,G),I===null?U=M:I.sibling=M,I=M);return W&&Pl(m,G),U}for(M=a(M);G<h.length;G++)K=b(M,m,G,h[G],z),K!==null&&(e&&K.alternate!==null&&M.delete(K.key===null?G:K.key),d=i(K,d,G),I===null?U=K:I.sibling=K,I=K);return e&&M.forEach(function(Vt){return l(m,Vt)}),W&&Pl(m,G),U}function H(m,d,h,z){if(h==null)throw Error(g(151));for(var U=null,I=null,M=d,G=d=0,K=null,P=h.next();M!==null&&!P.done;G++,P=h.next()){M.index>G?(K=M,M=null):K=M.sibling;var Vt=y(m,M,P.value,z);if(Vt===null){M===null&&(M=K);break}e&&M&&Vt.alternate===null&&l(m,M),d=i(Vt,d,G),I===null?U=Vt:I.sibling=Vt,I=Vt,M=K}if(P.done)return t(m,M),W&&Pl(m,G),U;if(M===null){for(;!P.done;G++,P=h.next())P=E(m,P.value,z),P!==null&&(d=i(P,d,G),I===null?U=P:I.sibling=P,I=P);return W&&Pl(m,G),U}for(M=a(M);!P.done;G++,P=h.next())P=b(M,m,G,P.value,z),P!==null&&(e&&P.alternate!==null&&M.delete(P.key===null?G:P.key),d=i(P,d,G),I===null?U=P:I.sibling=P,I=P);return e&&M.forEach(function(r1){return l(m,r1)}),W&&Pl(m,G),U}function se(m,d,h,z){if(typeof h=="object"&&h!==null&&h.type===V&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Q:e:{for(var U=h.key;d!==null;){if(d.key===U){if(U=h.type,U===V){if(d.tag===7){t(m,d.sibling),z=n(d,h.props.children),z.return=m,m=z;break e}}else if(d.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===xe&&ua(U)===d.type){t(m,d.sibling),z=n(d,h.props),On(z,h),z.return=m,m=z;break e}t(m,d);break}else l(m,d);d=d.sibling}h.type===V?(z=la(h.props.children,m.mode,z,h.key),z.return=m,m=z):(z=bi(h.type,h.key,h.props,null,m.mode,z),On(z,h),z.return=m,m=z)}return u(m);case te:e:{for(U=h.key;d!==null;){if(d.key===U)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(m,d.sibling),z=n(d,h.children||[]),z.return=m,m=z;break e}else{t(m,d);break}else l(m,d);d=d.sibling}z=Zu(h,m.mode,z),z.return=m,m=z}return u(m);case xe:return h=ua(h),se(m,d,h,z)}if(ke(h))return N(m,d,h,z);if(ge(h)){if(U=ge(h),typeof U!="function")throw Error(g(150));return h=U.call(h),H(m,d,h,z)}if(typeof h.then=="function")return se(m,d,Ti(h),z);if(h.$$typeof===ae)return se(m,d,Si(m,h),z);Ai(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,d!==null&&d.tag===6?(t(m,d.sibling),z=n(d,h),z.return=m,m=z):(t(m,d),z=Xu(h,m.mode,z),z.return=m,m=z),u(m)):t(m,d)}return function(m,d,h,z){try{wn=0;var U=se(m,d,h,z);return Ja=null,U}catch(M){if(M===Ka||M===Ei)throw M;var I=rl(29,M,null,m.mode);return I.lanes=z,I.return=m,I}}}var fa=Ko(!0),Jo=Ko(!1),At=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ic(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ot(e,l,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(le&2)!==0){var n=a.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),a.pending=l,l=yi(e),Mo(e,null,t),l}return pi(e,a,l,t),yi(e)}function Nn(e,l,t){if(l=l.updateQueue,l!==null&&(l=l.shared,(t&4194048)!==0)){var a=l.lanes;a&=e.pendingLanes,t|=a,l.lanes=t,Bf(e,t)}}function uc(e,l){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?n=i=l:i=i.next=l}else n=i=l;t={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=l:e.next=l,t.lastBaseUpdate=l}var cc=!1;function Dn(){if(cc){var e=Za;if(e!==null)throw e}}function Mn(e,l,t,a){cc=!1;var n=e.updateQueue;At=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var s=f,p=s.next;s.next=null,u===null?i=p:u.next=p,u=s;var S=e.alternate;S!==null&&(S=S.updateQueue,f=S.lastBaseUpdate,f!==u&&(f===null?S.firstBaseUpdate=p:f.next=p,S.lastBaseUpdate=s))}if(i!==null){var E=n.baseState;u=0,S=p=s=null,f=i;do{var y=f.lane&-536870913,b=y!==f.lane;if(b?(Z&y)===y:(a&y)===y){y!==0&&y===Xa&&(cc=!0),S!==null&&(S=S.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var N=e,H=f;y=l;var se=t;switch(H.tag){case 1:if(N=H.payload,typeof N=="function"){E=N.call(se,E,y);break e}E=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=H.payload,y=typeof N=="function"?N.call(se,E,y):N,y==null)break e;E=T({},E,y);break e;case 2:At=!0}}y=f.callback,y!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[y]:b.push(y))}else b={lane:y,tag:f.tag,payload:f.payload,callback:f.callback,next:null},S===null?(p=S=b,s=E):S=S.next=b,u|=y;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;b=f,f=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);S===null&&(s=E),n.baseState=s,n.firstBaseUpdate=p,n.lastBaseUpdate=S,i===null&&(n.shared.lanes=0),Ct|=u,e.lanes=u,e.memoizedState=E}}function Wo(e,l){if(typeof e!="function")throw Error(g(191,e));e.call(l)}function $o(e,l){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Wo(t[e],l)}var Wa=Se(null),wi=Se(0);function Fo(e,l){e=st,J(wi,e),J(Wa,l),st=e|l.baseLanes}function fc(){J(wi,st),J(Wa,Wa.current)}function oc(){st=wi.current,ce(Wa),ce(wi)}var dl=Se(null),wl=null;function Nt(e){var l=e.alternate;J(_e,_e.current&1),J(dl,e),wl===null&&(l===null||Wa.current!==null||l.memoizedState!==null)&&(wl=e)}function sc(e){J(_e,_e.current),J(dl,e),wl===null&&(wl=e)}function Io(e){e.tag===22?(J(_e,_e.current),J(dl,e),wl===null&&(wl=e)):Dt()}function Dt(){J(_e,_e.current),J(dl,dl.current)}function gl(e){ce(dl),wl===e&&(wl=null),ce(_e)}var _e=Se(0);function Oi(e){for(var l=e;l!==null;){if(l.tag===13){var t=l.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||yf(t)||bf(t)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var tt=0,q=null,fe=null,Me=null,Ni=!1,$a=!1,oa=!1,Di=0,jn=0,Fa=null,lg=0;function ze(){throw Error(g(321))}function rc(e,l){if(l===null)return!1;for(var t=0;t<l.length&&t<e.length;t++)if(!sl(e[t],l[t]))return!1;return!0}function dc(e,l,t,a,n,i){return tt=i,q=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,x.H=e===null||e.memoizedState===null?Rs:wc,oa=!1,i=t(a,n),oa=!1,$a&&(i=es(l,t,a,n)),Po(e),i}function Po(e){x.H=Rn;var l=fe!==null&&fe.next!==null;if(tt=0,Me=fe=q=null,Ni=!1,jn=0,Fa=null,l)throw Error(g(300));e===null||je||(e=e.dependencies,e!==null&&xi(e)&&(je=!0))}function es(e,l,t,a){q=e;var n=0;do{if($a&&(Fa=null),jn=0,$a=!1,25<=n)throw Error(g(301));if(n+=1,Me=fe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=Hs,i=l(t,a)}while($a);return i}function tg(){var e=x.H,l=e.useState()[0];return l=typeof l.then=="function"?Cn(l):l,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(q.flags|=1024),l}function gc(){var e=Di!==0;return Di=0,e}function mc(e,l,t){l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~t}function hc(e){if(Ni){for(e=e.memoizedState;e!==null;){var l=e.queue;l!==null&&(l.pending=null),e=e.next}Ni=!1}tt=0,Me=fe=q=null,$a=!1,jn=Di=0,Fa=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?q.memoizedState=Me=e:Me=Me.next=e,Me}function Te(){if(fe===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var l=Me===null?q.memoizedState:Me.next;if(l!==null)Me=l,fe=e;else{if(e===null)throw q.alternate===null?Error(g(467)):Error(g(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Me===null?q.memoizedState=Me=e:Me=Me.next=e}return Me}function Mi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cn(e){var l=jn;return jn+=1,Fa===null&&(Fa=[]),e=Lo(Fa,e,l),l=q,(Me===null?l.memoizedState:Me.next)===null&&(l=l.alternate,x.H=l===null||l.memoizedState===null?Rs:wc),e}function ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cn(e);if(e.$$typeof===ae)return Xe(e)}throw Error(g(438,String(e)))}function pc(e){var l=null,t=q.updateQueue;if(t!==null&&(l=t.memoCache),l==null){var a=q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),t===null&&(t=Mi(),q.updateQueue=t),t.memoCache=l,t=l.data[l.index],t===void 0)for(t=l.data[l.index]=Array(e),a=0;a<e;a++)t[a]=$e;return l.index++,t}function at(e,l){return typeof l=="function"?l(e):l}function Ci(e){var l=Te();return yc(l,fe,e)}function yc(e,l,t){var a=e.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=t;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}l.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{l=n.next;var f=u=null,s=null,p=l,S=!1;do{var E=p.lane&-536870913;if(E!==p.lane?(Z&E)===E:(tt&E)===E){var y=p.revertLane;if(y===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),E===Xa&&(S=!0);else if((tt&y)===y){p=p.next,y===Xa&&(S=!0);continue}else E={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(f=s=E,u=i):s=s.next=E,q.lanes|=y,Ct|=y;E=p.action,oa&&t(i,E),i=p.hasEagerState?p.eagerState:t(i,E)}else y={lane:E,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(f=s=y,u=i):s=s.next=y,q.lanes|=E,Ct|=E;p=p.next}while(p!==null&&p!==l);if(s===null?u=i:s.next=f,!sl(i,e.memoizedState)&&(je=!0,S&&(t=Za,t!==null)))throw t;e.memoizedState=i,e.baseState=u,e.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function bc(e){var l=Te(),t=l.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var a=t.dispatch,n=t.pending,i=l.memoizedState;if(n!==null){t.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);sl(i,l.memoizedState)||(je=!0),l.memoizedState=i,l.baseQueue===null&&(l.baseState=i),t.lastRenderedState=i}return[i,a]}function ls(e,l,t){var a=q,n=Te(),i=W;if(i){if(t===void 0)throw Error(g(407));t=t()}else t=l();var u=!sl((fe||n).memoizedState,t);if(u&&(n.memoizedState=t,je=!0),n=n.queue,Sc(ns.bind(null,a,n,e),[e]),n.getSnapshot!==l||u||Me!==null&&Me.memoizedState.tag&1){if(a.flags|=2048,Ia(9,{destroy:void 0},as.bind(null,a,n,t,l),null),re===null)throw Error(g(349));i||(tt&127)!==0||ts(a,l,t)}return t}function ts(e,l,t){e.flags|=16384,e={getSnapshot:l,value:t},l=q.updateQueue,l===null?(l=Mi(),q.updateQueue=l,l.stores=[e]):(t=l.stores,t===null?l.stores=[e]:t.push(e))}function as(e,l,t,a){l.value=t,l.getSnapshot=a,is(l)&&us(e)}function ns(e,l,t){return t(function(){is(l)&&us(e)})}function is(e){var l=e.getSnapshot;e=e.value;try{var t=l();return!sl(e,t)}catch{return!0}}function us(e){var l=ea(e,2);l!==null&&il(l,e,2)}function vc(e){var l=Ie();if(typeof e=="function"){var t=e;if(e=t(),oa){ol(!0);try{t()}finally{ol(!1)}}}return l.memoizedState=l.baseState=e,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:e},l}function cs(e,l,t,a){return e.baseState=t,yc(e,fe,typeof a=="function"?a:at)}function ag(e,l,t,a,n){if(Hi(e))throw Error(g(485));if(e=l.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};x.T!==null?t(!0):i.isTransition=!1,a(i),t=l.pending,t===null?(i.next=l.pending=i,fs(l,i)):(i.next=t.next,l.pending=t.next=i)}}function fs(e,l){var t=l.action,a=l.payload,n=e.state;if(l.isTransition){var i=x.T,u={};x.T=u;try{var f=t(n,a),s=x.S;s!==null&&s(u,f),os(e,l,f)}catch(p){xc(e,l,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),x.T=i}}else try{i=t(n,a),os(e,l,i)}catch(p){xc(e,l,p)}}function os(e,l,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){ss(e,l,a)},function(a){return xc(e,l,a)}):ss(e,l,t)}function ss(e,l,t){l.status="fulfilled",l.value=t,rs(l),e.state=t,l=e.pending,l!==null&&(t=l.next,t===l?e.pending=null:(t=t.next,l.next=t,fs(e,t)))}function xc(e,l,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=t,rs(l),l=l.next;while(l!==a)}e.action=null}function rs(e){e=e.listeners;for(var l=0;l<e.length;l++)(0,e[l])()}function ds(e,l){return l}function gs(e,l){if(W){var t=re.formState;if(t!==null){e:{var a=q;if(W){if(me){l:{for(var n=me,i=Al;n.nodeType!==8;){if(!i){n=null;break l}if(n=Ol(n.nextSibling),n===null){n=null;break l}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){me=Ol(n.nextSibling),a=n.data==="F!";break e}}_t(a)}a=!1}a&&(l=t[0])}}return t=Ie(),t.memoizedState=t.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:l},t.queue=a,t=js.bind(null,q,a),a.dispatch=t,a=vc(!1),i=Ac.bind(null,q,!1,a.queue),a=Ie(),n={state:l,dispatch:null,action:e,pending:null},a.queue=n,t=ag.bind(null,q,n,i,t),n.dispatch=t,a.memoizedState=e,[l,t,!1]}function ms(e){var l=Te();return hs(l,fe,e)}function hs(e,l,t){if(l=yc(e,l,ds)[0],e=Ci(at)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Cn(l)}catch(u){throw u===Ka?Ei:u}else a=l;l=Te();var n=l.queue,i=n.dispatch;return t!==l.memoizedState&&(q.flags|=2048,Ia(9,{destroy:void 0},ng.bind(null,n,t),null)),[a,i,e]}function ng(e,l){e.action=l}function ps(e){var l=Te(),t=fe;if(t!==null)return hs(l,t,e);Te(),l=l.memoizedState,t=Te();var a=t.queue.dispatch;return t.memoizedState=e,[l,a,!1]}function Ia(e,l,t,a){return e={tag:e,create:t,deps:a,inst:l,next:null},l=q.updateQueue,l===null&&(l=Mi(),q.updateQueue=l),t=l.lastEffect,t===null?l.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,l.lastEffect=e),e}function ys(){return Te().memoizedState}function Ui(e,l,t,a){var n=Ie();q.flags|=e,n.memoizedState=Ia(1|l,{destroy:void 0},t,a===void 0?null:a)}function Ri(e,l,t,a){var n=Te();a=a===void 0?null:a;var i=n.memoizedState.inst;fe!==null&&a!==null&&rc(a,fe.memoizedState.deps)?n.memoizedState=Ia(l,i,t,a):(q.flags|=e,n.memoizedState=Ia(1|l,i,t,a))}function bs(e,l){Ui(8390656,8,e,l)}function Sc(e,l){Ri(2048,8,e,l)}function ig(e){q.flags|=4;var l=q.updateQueue;if(l===null)l=Mi(),q.updateQueue=l,l.events=[e];else{var t=l.events;t===null?l.events=[e]:t.push(e)}}function vs(e){var l=Te().memoizedState;return ig({ref:l,nextImpl:e}),function(){if((le&2)!==0)throw Error(g(440));return l.impl.apply(void 0,arguments)}}function xs(e,l){return Ri(4,2,e,l)}function Ss(e,l){return Ri(4,4,e,l)}function zs(e,l){if(typeof l=="function"){e=e();var t=l(e);return function(){typeof t=="function"?t():l(null)}}if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function Es(e,l,t){t=t!=null?t.concat([e]):null,Ri(4,4,zs.bind(null,l,e),t)}function zc(){}function _s(e,l){var t=Te();l=l===void 0?null:l;var a=t.memoizedState;return l!==null&&rc(l,a[1])?a[0]:(t.memoizedState=[e,l],e)}function Ts(e,l){var t=Te();l=l===void 0?null:l;var a=t.memoizedState;if(l!==null&&rc(l,a[1]))return a[0];if(a=e(),oa){ol(!0);try{e()}finally{ol(!1)}}return t.memoizedState=[a,l],a}function Ec(e,l,t){return t===void 0||(tt&1073741824)!==0&&(Z&261930)===0?e.memoizedState=l:(e.memoizedState=t,e=Ar(),q.lanes|=e,Ct|=e,t)}function As(e,l,t,a){return sl(t,l)?t:Wa.current!==null?(e=Ec(e,t,a),sl(e,l)||(je=!0),e):(tt&42)===0||(tt&1073741824)!==0&&(Z&261930)===0?(je=!0,e.memoizedState=t):(e=Ar(),q.lanes|=e,Ct|=e,l)}function ws(e,l,t,a,n){var i=A.p;A.p=i!==0&&8>i?i:8;var u=x.T,f={};x.T=f,Ac(e,!1,l,t);try{var s=n(),p=x.S;if(p!==null&&p(f,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var S=eg(s,a);Un(e,l,S,pl(e))}else Un(e,l,a,pl(e))}catch(E){Un(e,l,{then:function(){},status:"rejected",reason:E},pl())}finally{A.p=i,u!==null&&f.types!==null&&(u.types=f.types),x.T=u}}function ug(){}function _c(e,l,t,a){if(e.tag!==5)throw Error(g(476));var n=Os(e).queue;ws(e,n,l,C,t===null?ug:function(){return Ns(e),t(a)})}function Os(e){var l=e.memoizedState;if(l!==null)return l;l={memoizedState:C,baseState:C,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:C},next:null};var t={};return l.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:t},next:null},e.memoizedState=l,e=e.alternate,e!==null&&(e.memoizedState=l),l}function Ns(e){var l=Os(e);l.next===null&&(l=e.alternate.memoizedState),Un(e,l.next.queue,{},pl())}function Tc(){return Xe(Fn)}function Ds(){return Te().memoizedState}function Ms(){return Te().memoizedState}function cg(e){for(var l=e.return;l!==null;){switch(l.tag){case 24:case 3:var t=pl();e=wt(t);var a=Ot(l,e,t);a!==null&&(il(a,l,t),Nn(a,l,t)),l={cache:ec()},e.payload=l;return}l=l.return}}function fg(e,l,t){var a=pl();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Hi(e)?Cs(l,t):(t=Vu(e,l,t,a),t!==null&&(il(t,e,a),Us(t,l,a)))}function js(e,l,t){var a=pl();Un(e,l,t,a)}function Un(e,l,t,a){var n={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Hi(e))Cs(l,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=l.lastRenderedReducer,i!==null))try{var u=l.lastRenderedState,f=i(u,t);if(n.hasEagerState=!0,n.eagerState=f,sl(f,u))return pi(e,l,n,0),re===null&&hi(),!1}catch{}if(t=Vu(e,l,n,a),t!==null)return il(t,e,a),Us(t,l,a),!0}return!1}function Ac(e,l,t,a){if(a={lane:2,revertLane:nf(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hi(e)){if(l)throw Error(g(479))}else l=Vu(e,t,a,2),l!==null&&il(l,e,2)}function Hi(e){var l=e.alternate;return e===q||l!==null&&l===q}function Cs(e,l){$a=Ni=!0;var t=e.pending;t===null?l.next=l:(l.next=t.next,t.next=l),e.pending=l}function Us(e,l,t){if((t&4194048)!==0){var a=l.lanes;a&=e.pendingLanes,t|=a,l.lanes=t,Bf(e,t)}}var Rn={readContext:Xe,use:ji,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};Rn.useEffectEvent=ze;var Rs={readContext:Xe,use:ji,useCallback:function(e,l){return Ie().memoizedState=[e,l===void 0?null:l],e},useContext:Xe,useEffect:bs,useImperativeHandle:function(e,l,t){t=t!=null?t.concat([e]):null,Ui(4194308,4,zs.bind(null,l,e),t)},useLayoutEffect:function(e,l){return Ui(4194308,4,e,l)},useInsertionEffect:function(e,l){Ui(4,2,e,l)},useMemo:function(e,l){var t=Ie();l=l===void 0?null:l;var a=e();if(oa){ol(!0);try{e()}finally{ol(!1)}}return t.memoizedState=[a,l],a},useReducer:function(e,l,t){var a=Ie();if(t!==void 0){var n=t(l);if(oa){ol(!0);try{t(l)}finally{ol(!1)}}}else n=l;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=fg.bind(null,q,e),[a.memoizedState,e]},useRef:function(e){var l=Ie();return e={current:e},l.memoizedState=e},useState:function(e){e=vc(e);var l=e.queue,t=js.bind(null,q,l);return l.dispatch=t,[e.memoizedState,t]},useDebugValue:zc,useDeferredValue:function(e,l){var t=Ie();return Ec(t,e,l)},useTransition:function(){var e=vc(!1);return e=ws.bind(null,q,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,l,t){var a=q,n=Ie();if(W){if(t===void 0)throw Error(g(407));t=t()}else{if(t=l(),re===null)throw Error(g(349));(Z&127)!==0||ts(a,l,t)}n.memoizedState=t;var i={value:t,getSnapshot:l};return n.queue=i,bs(ns.bind(null,a,i,e),[e]),a.flags|=2048,Ia(9,{destroy:void 0},as.bind(null,a,i,t,l),null),t},useId:function(){var e=Ie(),l=re.identifierPrefix;if(W){var t=Ql,a=Yl;t=(a&~(1<<32-qe(a)-1)).toString(32)+t,l="_"+l+"R_"+t,t=Di++,0<t&&(l+="H"+t.toString(32)),l+="_"}else t=lg++,l="_"+l+"r_"+t.toString(32)+"_";return e.memoizedState=l},useHostTransitionStatus:Tc,useFormState:gs,useActionState:gs,useOptimistic:function(e){var l=Ie();l.memoizedState=l.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=t,l=Ac.bind(null,q,!0,t),t.dispatch=l,[e,l]},useMemoCache:pc,useCacheRefresh:function(){return Ie().memoizedState=cg.bind(null,q)},useEffectEvent:function(e){var l=Ie(),t={impl:e};return l.memoizedState=t,function(){if((le&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}},wc={readContext:Xe,use:ji,useCallback:_s,useContext:Xe,useEffect:Sc,useImperativeHandle:Es,useInsertionEffect:xs,useLayoutEffect:Ss,useMemo:Ts,useReducer:Ci,useRef:ys,useState:function(){return Ci(at)},useDebugValue:zc,useDeferredValue:function(e,l){var t=Te();return As(t,fe.memoizedState,e,l)},useTransition:function(){var e=Ci(at)[0],l=Te().memoizedState;return[typeof e=="boolean"?e:Cn(e),l]},useSyncExternalStore:ls,useId:Ds,useHostTransitionStatus:Tc,useFormState:ms,useActionState:ms,useOptimistic:function(e,l){var t=Te();return cs(t,fe,e,l)},useMemoCache:pc,useCacheRefresh:Ms};wc.useEffectEvent=vs;var Hs={readContext:Xe,use:ji,useCallback:_s,useContext:Xe,useEffect:Sc,useImperativeHandle:Es,useInsertionEffect:xs,useLayoutEffect:Ss,useMemo:Ts,useReducer:bc,useRef:ys,useState:function(){return bc(at)},useDebugValue:zc,useDeferredValue:function(e,l){var t=Te();return fe===null?Ec(t,e,l):As(t,fe.memoizedState,e,l)},useTransition:function(){var e=bc(at)[0],l=Te().memoizedState;return[typeof e=="boolean"?e:Cn(e),l]},useSyncExternalStore:ls,useId:Ds,useHostTransitionStatus:Tc,useFormState:ps,useActionState:ps,useOptimistic:function(e,l){var t=Te();return fe!==null?cs(t,fe,e,l):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:pc,useCacheRefresh:Ms};Hs.useEffectEvent=vs;function Oc(e,l,t,a){l=e.memoizedState,t=t(a,l),t=t==null?l:T({},l,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Nc={enqueueSetState:function(e,l,t){e=e._reactInternals;var a=pl(),n=wt(a);n.payload=l,t!=null&&(n.callback=t),l=Ot(e,n,a),l!==null&&(il(l,e,a),Nn(l,e,a))},enqueueReplaceState:function(e,l,t){e=e._reactInternals;var a=pl(),n=wt(a);n.tag=1,n.payload=l,t!=null&&(n.callback=t),l=Ot(e,n,a),l!==null&&(il(l,e,a),Nn(l,e,a))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var t=pl(),a=wt(t);a.tag=2,l!=null&&(a.callback=l),l=Ot(e,a,t),l!==null&&(il(l,e,t),Nn(l,e,t))}};function ks(e,l,t,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):l.prototype&&l.prototype.isPureReactComponent?!Sn(t,a)||!Sn(n,i):!0}function Bs(e,l,t,a){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(t,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(t,a),l.state!==e&&Nc.enqueueReplaceState(l,l.state,null)}function sa(e,l){var t=l;if("ref"in l){t={};for(var a in l)a!=="ref"&&(t[a]=l[a])}if(e=e.defaultProps){t===l&&(t=T({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function qs(e){mi(e)}function Gs(e){console.error(e)}function Ys(e){mi(e)}function ki(e,l){try{var t=e.onUncaughtError;t(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function Qs(e,l,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Dc(e,l,t){return t=wt(t),t.tag=3,t.payload={element:null},t.callback=function(){ki(e,l)},t}function Vs(e){return e=wt(e),e.tag=3,e}function Ls(e,l,t,a){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Qs(l,t,a)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Qs(l,t,a),typeof n!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function og(e,l,t,a,n){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=t.alternate,l!==null&&La(l,t,n,!0),t=dl.current,t!==null){switch(t.tag){case 31:case 13:return wl===null?Wi():t.alternate===null&&Ee===0&&(Ee=3),t.flags&=-257,t.flags|=65536,t.lanes=n,a===_i?t.flags|=16384:(l=t.updateQueue,l===null?t.updateQueue=new Set([a]):l.add(a),lf(e,a,n)),!1;case 22:return t.flags|=65536,a===_i?t.flags|=16384:(l=t.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=l):(t=l.retryQueue,t===null?l.retryQueue=new Set([a]):t.add(a)),lf(e,a,n)),!1}throw Error(g(435,t.tag))}return lf(e,a,n),Wi(),!1}if(W)return l=dl.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,a!==Wu&&(e=Error(g(422),{cause:a}),_n(El(e,t)))):(a!==Wu&&(l=Error(g(423),{cause:a}),_n(El(l,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=El(a,t),n=Dc(e.stateNode,a,n),uc(e,n),Ee!==4&&(Ee=2)),!1;var i=Error(g(520),{cause:a});if(i=El(i,t),Vn===null?Vn=[i]:Vn.push(i),Ee!==4&&(Ee=2),l===null)return!0;a=El(a,t),t=l;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=Dc(t.stateNode,a,e),uc(t,e),!1;case 1:if(l=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ut===null||!Ut.has(i))))return t.flags|=65536,n&=-n,t.lanes|=n,n=Vs(n),Ls(n,e,t,a),uc(t,n),!1}t=t.return}while(t!==null);return!1}var Mc=Error(g(461)),je=!1;function Ze(e,l,t,a){l.child=e===null?Jo(l,null,t,a):fa(l,e.child,t,a)}function Xs(e,l,t,a,n){t=t.render;var i=l.ref;if("ref"in a){var u={};for(var f in a)f!=="ref"&&(u[f]=a[f])}else u=a;return na(l),a=dc(e,l,t,u,i,n),f=gc(),e!==null&&!je?(mc(e,l,n),nt(e,l,n)):(W&&f&&Ku(l),l.flags|=1,Ze(e,l,a,n),l.child)}function Zs(e,l,t,a,n){if(e===null){var i=t.type;return typeof i=="function"&&!Lu(i)&&i.defaultProps===void 0&&t.compare===null?(l.tag=15,l.type=i,Ks(e,l,i,a,n)):(e=bi(t.type,null,a,l,l.mode,n),e.ref=l.ref,e.return=l,l.child=e)}if(i=e.child,!qc(e,n)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:Sn,t(u,a)&&e.ref===l.ref)return nt(e,l,n)}return l.flags|=1,e=Il(i,a),e.ref=l.ref,e.return=l,l.child=e}function Ks(e,l,t,a,n){if(e!==null){var i=e.memoizedProps;if(Sn(i,a)&&e.ref===l.ref)if(je=!1,l.pendingProps=a=i,qc(e,n))(e.flags&131072)!==0&&(je=!0);else return l.lanes=e.lanes,nt(e,l,n)}return jc(e,l,t,a,n)}function Js(e,l,t,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(a=l.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,l.child=null;return Ws(e,l,i,t,a)}if((t&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},e!==null&&zi(l,i!==null?i.cachePool:null),i!==null?Fo(l,i):fc(),Io(l);else return a=l.lanes=536870912,Ws(e,l,i!==null?i.baseLanes|t:t,t,a)}else i!==null?(zi(l,i.cachePool),Fo(l,i),Dt(),l.memoizedState=null):(e!==null&&zi(l,null),fc(),Dt());return Ze(e,l,n,t),l.child}function Hn(e,l){return e!==null&&e.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Ws(e,l,t,a,n){var i=tc();return i=i===null?null:{parent:De._currentValue,pool:i},l.memoizedState={baseLanes:t,cachePool:i},e!==null&&zi(l,null),fc(),Io(l),e!==null&&La(e,l,a,!0),l.childLanes=n,null}function Bi(e,l){return l=Gi({mode:l.mode,children:l.children},e.mode),l.ref=e.ref,e.child=l,l.return=e,l}function $s(e,l,t){return fa(l,e.child,null,t),e=Bi(l,l.pendingProps),e.flags|=2,gl(l),l.memoizedState=null,e}function sg(e,l,t){var a=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,e===null){if(W){if(a.mode==="hidden")return e=Bi(l,a),l.lanes=536870912,Hn(null,e);if(sc(l),(e=me)?(e=fd(e,Al),e=e!==null&&e.data==="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:zt!==null?{id:Yl,overflow:Ql}:null,retryLane:536870912,hydrationErrors:null},t=Co(e),t.return=l,l.child=t,Le=l,me=null)):e=null,e===null)throw _t(l);return l.lanes=536870912,null}return Bi(l,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(sc(l),n)if(l.flags&256)l.flags&=-257,l=$s(e,l,t);else if(l.memoizedState!==null)l.child=e.child,l.flags|=128,l=null;else throw Error(g(558));else if(je||La(e,l,t,!1),n=(t&e.childLanes)!==0,je||n){if(a=re,a!==null&&(u=qf(a,t),u!==0&&u!==i.retryLane))throw i.retryLane=u,ea(e,u),il(a,e,u),Mc;Wi(),l=$s(e,l,t)}else e=i.treeContext,me=Ol(u.nextSibling),Le=l,W=!0,Et=null,Al=!1,e!==null&&Ho(l,e),l=Bi(l,a),l.flags|=4096;return l}return e=Il(e.child,{mode:a.mode,children:a.children}),e.ref=l.ref,l.child=e,e.return=l,e}function qi(e,l){var t=l.ref;if(t===null)e!==null&&e.ref!==null&&(l.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(g(284));(e===null||e.ref!==t)&&(l.flags|=4194816)}}function jc(e,l,t,a,n){return na(l),t=dc(e,l,t,a,void 0,n),a=gc(),e!==null&&!je?(mc(e,l,n),nt(e,l,n)):(W&&a&&Ku(l),l.flags|=1,Ze(e,l,t,n),l.child)}function Fs(e,l,t,a,n,i){return na(l),l.updateQueue=null,t=es(l,a,t,n),Po(e),a=gc(),e!==null&&!je?(mc(e,l,i),nt(e,l,i)):(W&&a&&Ku(l),l.flags|=1,Ze(e,l,t,i),l.child)}function Is(e,l,t,a,n){if(na(l),l.stateNode===null){var i=Ga,u=t.contextType;typeof u=="object"&&u!==null&&(i=Xe(u)),i=new t(a,i),l.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Nc,l.stateNode=i,i._reactInternals=l,i=l.stateNode,i.props=a,i.state=l.memoizedState,i.refs={},nc(l),u=t.contextType,i.context=typeof u=="object"&&u!==null?Xe(u):Ga,i.state=l.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Oc(l,t,u,a),i.state=l.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Nc.enqueueReplaceState(i,i.state,null),Mn(l,a,i,n),Dn(),i.state=l.memoizedState),typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(e===null){i=l.stateNode;var f=l.memoizedProps,s=sa(t,f);i.props=s;var p=i.context,S=t.contextType;u=Ga,typeof S=="object"&&S!==null&&(u=Xe(S));var E=t.getDerivedStateFromProps;S=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=l.pendingProps!==f,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||p!==u)&&Bs(l,i,a,u),At=!1;var y=l.memoizedState;i.state=y,Mn(l,a,i,n),Dn(),p=l.memoizedState,f||y!==p||At?(typeof E=="function"&&(Oc(l,t,E,a),p=l.memoizedState),(s=At||ks(l,t,s,a,y,p,u))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(l.flags|=4194308)):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=p),i.props=a,i.state=p,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{i=l.stateNode,ic(e,l),u=l.memoizedProps,S=sa(t,u),i.props=S,E=l.pendingProps,y=i.context,p=t.contextType,s=Ga,typeof p=="object"&&p!==null&&(s=Xe(p)),f=t.getDerivedStateFromProps,(p=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==E||y!==s)&&Bs(l,i,a,s),At=!1,y=l.memoizedState,i.state=y,Mn(l,a,i,n),Dn();var b=l.memoizedState;u!==E||y!==b||At||e!==null&&e.dependencies!==null&&xi(e.dependencies)?(typeof f=="function"&&(Oc(l,t,f,a),b=l.memoizedState),(S=At||ks(l,t,S,a,y,b,s)||e!==null&&e.dependencies!==null&&xi(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,s)),typeof i.componentDidUpdate=="function"&&(l.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=b),i.props=a,i.state=b,i.context=s,a=S):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(l.flags|=1024),a=!1)}return i=a,qi(e,l),a=(l.flags&128)!==0,i||a?(i=l.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:i.render(),l.flags|=1,e!==null&&a?(l.child=fa(l,e.child,null,n),l.child=fa(l,null,t,n)):Ze(e,l,t,n),l.memoizedState=i.state,e=l.child):e=nt(e,l,n),e}function Ps(e,l,t,a){return ta(),l.flags|=256,Ze(e,l,t,a),l.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(e){return{baseLanes:e,cachePool:Qo()}}function Rc(e,l,t){return e=e!==null?e.childLanes&~t:0,l&&(e|=hl),e}function er(e,l,t){var a=l.pendingProps,n=!1,i=(l.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),u&&(n=!0,l.flags&=-129),u=(l.flags&32)!==0,l.flags&=-33,e===null){if(W){if(n?Nt(l):Dt(),(e=me)?(e=fd(e,Al),e=e!==null&&e.data!=="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:zt!==null?{id:Yl,overflow:Ql}:null,retryLane:536870912,hydrationErrors:null},t=Co(e),t.return=l,l.child=t,Le=l,me=null)):e=null,e===null)throw _t(l);return bf(e)?l.lanes=32:l.lanes=536870912,null}var f=a.children;return a=a.fallback,n?(Dt(),n=l.mode,f=Gi({mode:"hidden",children:f},n),a=la(a,n,t,null),f.return=l,a.return=l,f.sibling=a,l.child=f,a=l.child,a.memoizedState=Uc(t),a.childLanes=Rc(e,u,t),l.memoizedState=Cc,Hn(null,a)):(Nt(l),Hc(l,f))}var s=e.memoizedState;if(s!==null&&(f=s.dehydrated,f!==null)){if(i)l.flags&256?(Nt(l),l.flags&=-257,l=kc(e,l,t)):l.memoizedState!==null?(Dt(),l.child=e.child,l.flags|=128,l=null):(Dt(),f=a.fallback,n=l.mode,a=Gi({mode:"visible",children:a.children},n),f=la(f,n,t,null),f.flags|=2,a.return=l,f.return=l,a.sibling=f,l.child=a,fa(l,e.child,null,t),a=l.child,a.memoizedState=Uc(t),a.childLanes=Rc(e,u,t),l.memoizedState=Cc,l=Hn(null,a));else if(Nt(l),bf(f)){if(u=f.nextSibling&&f.nextSibling.dataset,u)var p=u.dgst;u=p,a=Error(g(419)),a.stack="",a.digest=u,_n({value:a,source:null,stack:null}),l=kc(e,l,t)}else if(je||La(e,l,t,!1),u=(t&e.childLanes)!==0,je||u){if(u=re,u!==null&&(a=qf(u,t),a!==0&&a!==s.retryLane))throw s.retryLane=a,ea(e,a),il(u,e,a),Mc;yf(f)||Wi(),l=kc(e,l,t)}else yf(f)?(l.flags|=192,l.child=e.child,l=null):(e=s.treeContext,me=Ol(f.nextSibling),Le=l,W=!0,Et=null,Al=!1,e!==null&&Ho(l,e),l=Hc(l,a.children),l.flags|=4096);return l}return n?(Dt(),f=a.fallback,n=l.mode,s=e.child,p=s.sibling,a=Il(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,p!==null?f=Il(p,f):(f=la(f,n,t,null),f.flags|=2),f.return=l,a.return=l,a.sibling=f,l.child=a,Hn(null,a),a=l.child,f=e.child.memoizedState,f===null?f=Uc(t):(n=f.cachePool,n!==null?(s=De._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Qo(),f={baseLanes:f.baseLanes|t,cachePool:n}),a.memoizedState=f,a.childLanes=Rc(e,u,t),l.memoizedState=Cc,Hn(e.child,a)):(Nt(l),t=e.child,e=t.sibling,t=Il(t,{mode:"visible",children:a.children}),t.return=l,t.sibling=null,e!==null&&(u=l.deletions,u===null?(l.deletions=[e],l.flags|=16):u.push(e)),l.child=t,l.memoizedState=null,t)}function Hc(e,l){return l=Gi({mode:"visible",children:l},e.mode),l.return=e,e.child=l}function Gi(e,l){return e=rl(22,e,null,l),e.lanes=0,e}function kc(e,l,t){return fa(l,e.child,null,t),e=Hc(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function lr(e,l,t){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l),Iu(e.return,l,t)}function Bc(e,l,t,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:n,treeForkCount:i}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=t,u.tailMode=n,u.treeForkCount=i)}function tr(e,l,t){var a=l.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=_e.current,f=(u&2)!==0;if(f?(u=u&1|2,l.flags|=128):u&=1,J(_e,u),Ze(e,l,a,t),a=W?En:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lr(e,t,l);else if(e.tag===19)lr(e,t,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=l.child,n=null;t!==null;)e=t.alternate,e!==null&&Oi(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=l.child,l.child=null):(n=t.sibling,t.sibling=null),Bc(l,!1,n,t,i,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=l.child,l.child=null;n!==null;){if(e=n.alternate,e!==null&&Oi(e)===null){l.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}Bc(l,!0,t,null,i,a);break;case"together":Bc(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function nt(e,l,t){if(e!==null&&(l.dependencies=e.dependencies),Ct|=l.lanes,(t&l.childLanes)===0)if(e!==null){if(La(e,l,t,!1),(t&l.childLanes)===0)return null}else return null;if(e!==null&&l.child!==e.child)throw Error(g(153));if(l.child!==null){for(e=l.child,t=Il(e,e.pendingProps),l.child=t,t.return=l;e.sibling!==null;)e=e.sibling,t=t.sibling=Il(e,e.pendingProps),t.return=l;t.sibling=null}return l.child}function qc(e,l){return(e.lanes&l)!==0?!0:(e=e.dependencies,!!(e!==null&&xi(e)))}function rg(e,l,t){switch(l.tag){case 3:Xl(l,l.stateNode.containerInfo),Tt(l,De,e.memoizedState.cache),ta();break;case 27:case 5:Bl(l);break;case 4:Xl(l,l.stateNode.containerInfo);break;case 10:Tt(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,sc(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(Nt(l),l.flags|=128,null):(t&l.child.childLanes)!==0?er(e,l,t):(Nt(l),e=nt(e,l,t),e!==null?e.sibling:null);Nt(l);break;case 19:var n=(e.flags&128)!==0;if(a=(t&l.childLanes)!==0,a||(La(e,l,t,!1),a=(t&l.childLanes)!==0),n){if(a)return tr(e,l,t);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),J(_e,_e.current),a)break;return null;case 22:return l.lanes=0,Js(e,l,t,l.pendingProps);case 24:Tt(l,De,e.memoizedState.cache)}return nt(e,l,t)}function ar(e,l,t){if(e!==null)if(e.memoizedProps!==l.pendingProps)je=!0;else{if(!qc(e,t)&&(l.flags&128)===0)return je=!1,rg(e,l,t);je=(e.flags&131072)!==0}else je=!1,W&&(l.flags&1048576)!==0&&Ro(l,En,l.index);switch(l.lanes=0,l.tag){case 16:e:{var a=l.pendingProps;if(e=ua(l.elementType),l.type=e,typeof e=="function")Lu(e)?(a=sa(e,a),l.tag=1,l=Is(null,l,e,a,t)):(l.tag=0,l=jc(null,l,e,a,t));else{if(e!=null){var n=e.$$typeof;if(n===Ae){l.tag=11,l=Xs(null,l,e,a,t);break e}else if(n===we){l.tag=14,l=Zs(null,l,e,a,t);break e}}throw l=Qe(e)||e,Error(g(306,l,""))}}return l;case 0:return jc(e,l,l.type,l.pendingProps,t);case 1:return a=l.type,n=sa(a,l.pendingProps),Is(e,l,a,n,t);case 3:e:{if(Xl(l,l.stateNode.containerInfo),e===null)throw Error(g(387));a=l.pendingProps;var i=l.memoizedState;n=i.element,ic(e,l),Mn(l,a,null,t);var u=l.memoizedState;if(a=u.cache,Tt(l,De,a),a!==i.cache&&Pu(l,[De],t,!0),Dn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},l.updateQueue.baseState=i,l.memoizedState=i,l.flags&256){l=Ps(e,l,a,t);break e}else if(a!==n){n=El(Error(g(424)),l),_n(n),l=Ps(e,l,a,t);break e}else for(e=l.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,me=Ol(e.firstChild),Le=l,W=!0,Et=null,Al=!0,t=Jo(l,null,a,t),l.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ta(),a===n){l=nt(e,l,t);break e}Ze(e,l,a,t)}l=l.child}return l;case 26:return qi(e,l),e===null?(t=md(l.type,null,l.pendingProps,null))?l.memoizedState=t:W||(t=l.type,e=l.pendingProps,a=tu(cl.current).createElement(t),a[Ve]=l,a[Pe]=e,Ke(a,t,e),Ge(a),l.stateNode=a):l.memoizedState=md(l.type,e.memoizedProps,l.pendingProps,e.memoizedState),null;case 27:return Bl(l),e===null&&W&&(a=l.stateNode=rd(l.type,l.pendingProps,cl.current),Le=l,Al=!0,n=me,Bt(l.type)?(vf=n,me=Ol(a.firstChild)):me=n),Ze(e,l,l.pendingProps.children,t),qi(e,l),e===null&&(l.flags|=4194304),l.child;case 5:return e===null&&W&&((n=a=me)&&(a=Yg(a,l.type,l.pendingProps,Al),a!==null?(l.stateNode=a,Le=l,me=Ol(a.firstChild),Al=!1,n=!0):n=!1),n||_t(l)),Bl(l),n=l.type,i=l.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,mf(n,i)?a=null:u!==null&&mf(n,u)&&(l.flags|=32),l.memoizedState!==null&&(n=dc(e,l,tg,null,null,t),Fn._currentValue=n),qi(e,l),Ze(e,l,a,t),l.child;case 6:return e===null&&W&&((e=t=me)&&(t=Qg(t,l.pendingProps,Al),t!==null?(l.stateNode=t,Le=l,me=null,e=!0):e=!1),e||_t(l)),null;case 13:return er(e,l,t);case 4:return Xl(l,l.stateNode.containerInfo),a=l.pendingProps,e===null?l.child=fa(l,null,a,t):Ze(e,l,a,t),l.child;case 11:return Xs(e,l,l.type,l.pendingProps,t);case 7:return Ze(e,l,l.pendingProps,t),l.child;case 8:return Ze(e,l,l.pendingProps.children,t),l.child;case 12:return Ze(e,l,l.pendingProps.children,t),l.child;case 10:return a=l.pendingProps,Tt(l,l.type,a.value),Ze(e,l,a.children,t),l.child;case 9:return n=l.type._context,a=l.pendingProps.children,na(l),n=Xe(n),a=a(n),l.flags|=1,Ze(e,l,a,t),l.child;case 14:return Zs(e,l,l.type,l.pendingProps,t);case 15:return Ks(e,l,l.type,l.pendingProps,t);case 19:return tr(e,l,t);case 31:return sg(e,l,t);case 22:return Js(e,l,t,l.pendingProps);case 24:return na(l),a=Xe(De),e===null?(n=tc(),n===null&&(n=re,i=ec(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=t),n=i),l.memoizedState={parent:a,cache:n},nc(l),Tt(l,De,n)):((e.lanes&t)!==0&&(ic(e,l),Mn(l,null,null,t),Dn()),n=e.memoizedState,i=l.memoizedState,n.parent!==a?(n={parent:a,cache:a},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),Tt(l,De,a)):(a=i.cache,Tt(l,De,a),a!==n.cache&&Pu(l,[De],t,!0))),Ze(e,l,l.pendingProps.children,t),l.child;case 29:throw l.pendingProps}throw Error(g(156,l.tag))}function it(e){e.flags|=4}function Gc(e,l,t,a,n){if((l=(e.mode&32)!==0)&&(l=!1),l){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Dr())e.flags|=8192;else throw ca=_i,ac}else e.flags&=-16777217}function nr(e,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vd(l))if(Dr())e.flags|=8192;else throw ca=_i,ac}function Yi(e,l){l!==null&&(e.flags|=4),e.flags&16384&&(l=e.tag!==22?Wt():536870912,e.lanes|=l,tn|=l)}function kn(e,l){if(!W)switch(e.tailMode){case"hidden":l=e.tail;for(var t=null;l!==null;)l.alternate!==null&&(t=l),l=l.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function he(e){var l=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(l)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=t,l}function dg(e,l,t){var a=l.pendingProps;switch(Ju(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(l),null;case 1:return he(l),null;case 3:return t=l.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),lt(De),fl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Va(l)?it(l):e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,$u())),he(l),null;case 26:var n=l.type,i=l.memoizedState;return e===null?(it(l),i!==null?(he(l),nr(l,i)):(he(l),Gc(l,n,null,a,t))):i?i!==e.memoizedState?(it(l),he(l),nr(l,i)):(he(l),l.flags&=-16777217):(e=e.memoizedProps,e!==a&&it(l),he(l),Gc(l,n,e,a,t)),null;case 27:if(Ml(l),t=cl.current,n=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==a&&it(l);else{if(!a){if(l.stateNode===null)throw Error(g(166));return he(l),null}e=be.current,Va(l)?ko(l):(e=rd(n,a,t),l.stateNode=e,it(l))}return he(l),null;case 5:if(Ml(l),n=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==a&&it(l);else{if(!a){if(l.stateNode===null)throw Error(g(166));return he(l),null}if(i=be.current,Va(l))ko(l);else{var u=tu(cl.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Ve]=l,i[Pe]=a;e:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break e;for(;u.sibling===null;){if(u.return===null||u.return===l)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=i;e:switch(Ke(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&it(l)}}return he(l),Gc(l,l.type,e===null?null:e.memoizedProps,l.pendingProps,t),null;case 6:if(e&&l.stateNode!=null)e.memoizedProps!==a&&it(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(g(166));if(e=cl.current,Va(l)){if(e=l.stateNode,t=l.memoizedProps,a=null,n=Le,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ve]=l,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||ed(e.nodeValue,t)),e||_t(l,!0)}else e=tu(e).createTextNode(a),e[Ve]=l,l.stateNode=e}return he(l),null;case 31:if(t=l.memoizedState,e===null||e.memoizedState!==null){if(a=Va(l),t!==null){if(e===null){if(!a)throw Error(g(318));if(e=l.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(557));e[Ve]=l}else ta(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;he(l),e=!1}else t=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return l.flags&256?(gl(l),l):(gl(l),null);if((l.flags&128)!==0)throw Error(g(558))}return he(l),null;case 13:if(a=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Va(l),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(g(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Ve]=l}else ta(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;he(l),n=!1}else n=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(gl(l),l):(gl(l),null)}return gl(l),(l.flags&128)!==0?(l.lanes=t,l):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=l.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),t!==e&&t&&(l.child.flags|=8192),Yi(l,l.updateQueue),he(l),null);case 4:return fl(),e===null&&of(l.stateNode.containerInfo),he(l),null;case 10:return lt(l.type),he(l),null;case 19:if(ce(_e),a=l.memoizedState,a===null)return he(l),null;if(n=(l.flags&128)!==0,i=a.rendering,i===null)if(n)kn(a,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(i=Oi(e),i!==null){for(l.flags|=128,kn(a,!1),e=i.updateQueue,l.updateQueue=e,Yi(l,e),l.subtreeFlags=0,e=t,t=l.child;t!==null;)jo(t,e),t=t.sibling;return J(_e,_e.current&1|2),W&&Pl(l,a.treeForkCount),l.child}e=e.sibling}a.tail!==null&&Be()>Zi&&(l.flags|=128,n=!0,kn(a,!1),l.lanes=4194304)}else{if(!n)if(e=Oi(i),e!==null){if(l.flags|=128,n=!0,e=e.updateQueue,l.updateQueue=e,Yi(l,e),kn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!W)return he(l),null}else 2*Be()-a.renderingStartTime>Zi&&t!==536870912&&(l.flags|=128,n=!0,kn(a,!1),l.lanes=4194304);a.isBackwards?(i.sibling=l.child,l.child=i):(e=a.last,e!==null?e.sibling=i:l.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Be(),e.sibling=null,t=_e.current,J(_e,n?t&1|2:t&1),W&&Pl(l,a.treeForkCount),e):(he(l),null);case 22:case 23:return gl(l),oc(),a=l.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(t&536870912)!==0&&(l.flags&128)===0&&(he(l),l.subtreeFlags&6&&(l.flags|=8192)):he(l),t=l.updateQueue,t!==null&&Yi(l,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==t&&(l.flags|=2048),e!==null&&ce(ia),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),l.memoizedState.cache!==t&&(l.flags|=2048),lt(De),he(l),null;case 25:return null;case 30:return null}throw Error(g(156,l.tag))}function gg(e,l){switch(Ju(l),l.tag){case 1:return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return lt(De),fl(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 26:case 27:case 5:return Ml(l),null;case 31:if(l.memoizedState!==null){if(gl(l),l.alternate===null)throw Error(g(340));ta()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 13:if(gl(l),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(g(340));ta()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return ce(_e),null;case 4:return fl(),null;case 10:return lt(l.type),null;case 22:case 23:return gl(l),oc(),e!==null&&ce(ia),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 24:return lt(De),null;case 25:return null;default:return null}}function ir(e,l){switch(Ju(l),l.tag){case 3:lt(De),fl();break;case 26:case 27:case 5:Ml(l);break;case 4:fl();break;case 31:l.memoizedState!==null&&gl(l);break;case 13:gl(l);break;case 19:ce(_e);break;case 10:lt(l.type);break;case 22:case 23:gl(l),oc(),e!==null&&ce(ia);break;case 24:lt(De)}}function Bn(e,l){try{var t=l.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var n=a.next;t=n;do{if((t.tag&e)===e){a=void 0;var i=t.create,u=t.inst;a=i(),u.destroy=a}t=t.next}while(t!==n)}}catch(f){ie(l,l.return,f)}}function Mt(e,l,t){try{var a=l.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,f=u.destroy;if(f!==void 0){u.destroy=void 0,n=l;var s=t,p=f;try{p()}catch(S){ie(n,s,S)}}}a=a.next}while(a!==i)}}catch(S){ie(l,l.return,S)}}function ur(e){var l=e.updateQueue;if(l!==null){var t=e.stateNode;try{$o(l,t)}catch(a){ie(e,e.return,a)}}}function cr(e,l,t){t.props=sa(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ie(e,l,a)}}function qn(e,l){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(n){ie(e,l,n)}}function Vl(e,l){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(n){ie(e,l,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){ie(e,l,n)}else t.current=null}function fr(e){var l=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(l){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(n){ie(e,e.return,n)}}function Yc(e,l,t){try{var a=e.stateNode;Rg(a,e.type,t,l),a[Pe]=l}catch(n){ie(e,e.return,n)}}function or(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bt(e.type)||e.tag===4}function Qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||or(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,l,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,l?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,l):(l=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.appendChild(e),t=t._reactRootContainer,t!=null||l.onclick!==null||(l.onclick=$l));else if(a!==4&&(a===27&&Bt(e.type)&&(t=e.stateNode,l=null),e=e.child,e!==null))for(Vc(e,l,t),e=e.sibling;e!==null;)Vc(e,l,t),e=e.sibling}function Qi(e,l,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,l?t.insertBefore(e,l):t.appendChild(e);else if(a!==4&&(a===27&&Bt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Qi(e,l,t),e=e.sibling;e!==null;)Qi(e,l,t),e=e.sibling}function sr(e){var l=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);Ke(l,a,t),l[Ve]=e,l[Pe]=t}catch(i){ie(e,e.return,i)}}var ut=!1,Ce=!1,Lc=!1,rr=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function mg(e,l){if(e=e.containerInfo,df=ou,e=Eo(e),ku(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var u=0,f=-1,s=-1,p=0,S=0,E=e,y=null;l:for(;;){for(var b;E!==t||n!==0&&E.nodeType!==3||(f=u+n),E!==i||a!==0&&E.nodeType!==3||(s=u+a),E.nodeType===3&&(u+=E.nodeValue.length),(b=E.firstChild)!==null;)y=E,E=b;for(;;){if(E===e)break l;if(y===t&&++p===n&&(f=u),y===i&&++S===a&&(s=u),(b=E.nextSibling)!==null)break;E=y,y=E.parentNode}E=b}t=f===-1||s===-1?null:{start:f,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(gf={focusedElem:e,selectionRange:t},ou=!1,Ye=l;Ye!==null;)if(l=Ye,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,Ye=e;else for(;Ye!==null;){switch(l=Ye,i=l.alternate,e=l.flags,l.tag){case 0:if((e&4)!==0&&(e=l.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=l,n=i.memoizedProps,i=i.memoizedState,a=t.stateNode;try{var N=sa(t.type,n);e=a.getSnapshotBeforeUpdate(N,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(H){ie(t,t.return,H)}}break;case 3:if((e&1024)!==0){if(e=l.stateNode.containerInfo,t=e.nodeType,t===9)pf(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(g(163))}if(e=l.sibling,e!==null){e.return=l.return,Ye=e;break}Ye=l.return}}function dr(e,l,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ft(e,t),a&4&&Bn(5,t);break;case 1:if(ft(e,t),a&4)if(e=t.stateNode,l===null)try{e.componentDidMount()}catch(u){ie(t,t.return,u)}else{var n=sa(t.type,l.memoizedProps);l=l.memoizedState;try{e.componentDidUpdate(n,l,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ie(t,t.return,u)}}a&64&&ur(t),a&512&&qn(t,t.return);break;case 3:if(ft(e,t),a&64&&(e=t.updateQueue,e!==null)){if(l=null,t.child!==null)switch(t.child.tag){case 27:case 5:l=t.child.stateNode;break;case 1:l=t.child.stateNode}try{$o(e,l)}catch(u){ie(t,t.return,u)}}break;case 27:l===null&&a&4&&sr(t);case 26:case 5:ft(e,t),l===null&&a&4&&fr(t),a&512&&qn(t,t.return);break;case 12:ft(e,t);break;case 31:ft(e,t),a&4&&hr(e,t);break;case 13:ft(e,t),a&4&&pr(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Eg.bind(null,t),Vg(e,t))));break;case 22:if(a=t.memoizedState!==null||ut,!a){l=l!==null&&l.memoizedState!==null||Ce,n=ut;var i=Ce;ut=a,(Ce=l)&&!i?ot(e,t,(t.subtreeFlags&8772)!==0):ft(e,t),ut=n,Ce=i}break;case 30:break;default:ft(e,t)}}function gr(e){var l=e.alternate;l!==null&&(e.alternate=null,gr(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&xu(l)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,ll=!1;function ct(e,l,t){for(t=t.child;t!==null;)mr(e,l,t),t=t.sibling}function mr(e,l,t){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(bl,t)}catch{}switch(t.tag){case 26:Ce||Vl(t,l),ct(e,l,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ce||Vl(t,l);var a=ye,n=ll;Bt(t.type)&&(ye=t.stateNode,ll=!1),ct(e,l,t),Jn(t.stateNode),ye=a,ll=n;break;case 5:Ce||Vl(t,l);case 6:if(a=ye,n=ll,ye=null,ct(e,l,t),ye=a,ll=n,ye!==null)if(ll)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(t.stateNode)}catch(i){ie(t,l,i)}else try{ye.removeChild(t.stateNode)}catch(i){ie(t,l,i)}break;case 18:ye!==null&&(ll?(e=ye,ud(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),rn(e)):ud(ye,t.stateNode));break;case 4:a=ye,n=ll,ye=t.stateNode.containerInfo,ll=!0,ct(e,l,t),ye=a,ll=n;break;case 0:case 11:case 14:case 15:Mt(2,t,l),Ce||Mt(4,t,l),ct(e,l,t);break;case 1:Ce||(Vl(t,l),a=t.stateNode,typeof a.componentWillUnmount=="function"&&cr(t,l,a)),ct(e,l,t);break;case 21:ct(e,l,t);break;case 22:Ce=(a=Ce)||t.memoizedState!==null,ct(e,l,t),Ce=a;break;default:ct(e,l,t)}}function hr(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rn(e)}catch(t){ie(l,l.return,t)}}}function pr(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rn(e)}catch(t){ie(l,l.return,t)}}function hg(e){switch(e.tag){case 31:case 13:case 19:var l=e.stateNode;return l===null&&(l=e.stateNode=new rr),l;case 22:return e=e.stateNode,l=e._retryCache,l===null&&(l=e._retryCache=new rr),l;default:throw Error(g(435,e.tag))}}function Vi(e,l){var t=hg(e);l.forEach(function(a){if(!t.has(a)){t.add(a);var n=_g.bind(null,e,a);a.then(n,n)}})}function tl(e,l){var t=l.deletions;if(t!==null)for(var a=0;a<t.length;a++){var n=t[a],i=e,u=l,f=u;e:for(;f!==null;){switch(f.tag){case 27:if(Bt(f.type)){ye=f.stateNode,ll=!1;break e}break;case 5:ye=f.stateNode,ll=!1;break e;case 3:case 4:ye=f.stateNode.containerInfo,ll=!0;break e}f=f.return}if(ye===null)throw Error(g(160));mr(i,u,n),ye=null,ll=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)yr(l,e),l=l.sibling}var Hl=null;function yr(e,l){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tl(l,e),al(e),a&4&&(Mt(3,e,e.return),Bn(3,e),Mt(5,e,e.return));break;case 1:tl(l,e),al(e),a&512&&(Ce||t===null||Vl(t,t.return)),a&64&&ut&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var n=Hl;if(tl(l,e),al(e),a&512&&(Ce||t===null||Vl(t,t.return)),a&4){var i=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,n=n.ownerDocument||n;l:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[dn]||i[Ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ke(i,a,t),i[Ve]=e,Ge(i),a=i;break e;case"link":var u=yd("link","href",n).get(a+(t.href||""));if(u){for(var f=0;f<u.length;f++)if(i=u[f],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(f,1);break l}}i=n.createElement(a),Ke(i,a,t),n.head.appendChild(i);break;case"meta":if(u=yd("meta","content",n).get(a+(t.content||""))){for(f=0;f<u.length;f++)if(i=u[f],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(f,1);break l}}i=n.createElement(a),Ke(i,a,t),n.head.appendChild(i);break;default:throw Error(g(468,a))}i[Ve]=e,Ge(i),a=i}e.stateNode=a}else bd(n,e.type,e.stateNode);else e.stateNode=pd(n,a,e.memoizedProps);else i!==a?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,a===null?bd(n,e.type,e.stateNode):pd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,t.memoizedProps)}break;case 27:tl(l,e),al(e),a&512&&(Ce||t===null||Vl(t,t.return)),t!==null&&a&4&&Yc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(tl(l,e),al(e),a&512&&(Ce||t===null||Vl(t,t.return)),e.flags&32){n=e.stateNode;try{Ca(n,"")}catch(N){ie(e,e.return,N)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Yc(e,n,t!==null?t.memoizedProps:n)),a&1024&&(Lc=!0);break;case 6:if(tl(l,e),al(e),a&4){if(e.stateNode===null)throw Error(g(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(N){ie(e,e.return,N)}}break;case 3:if(iu=null,n=Hl,Hl=au(l.containerInfo),tl(l,e),Hl=n,al(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{rn(l.containerInfo)}catch(N){ie(e,e.return,N)}Lc&&(Lc=!1,br(e));break;case 4:a=Hl,Hl=au(e.stateNode.containerInfo),tl(l,e),al(e),Hl=a;break;case 12:tl(l,e),al(e);break;case 31:tl(l,e),al(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Vi(e,a)));break;case 13:tl(l,e),al(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Xi=Be()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Vi(e,a)));break;case 22:n=e.memoizedState!==null;var s=t!==null&&t.memoizedState!==null,p=ut,S=Ce;if(ut=p||n,Ce=S||s,tl(l,e),Ce=S,ut=p,al(e),a&8192)e:for(l=e.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(t===null||s||ut||Ce||ra(e)),t=null,l=e;;){if(l.tag===5||l.tag===26){if(t===null){s=t=l;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=s.stateNode;var E=s.memoizedProps.style,y=E!=null&&E.hasOwnProperty("display")?E.display:null;f.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(N){ie(s,s.return,N)}}}else if(l.tag===6){if(t===null){s=l;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(N){ie(s,s.return,N)}}}else if(l.tag===18){if(t===null){s=l;try{var b=s.stateNode;n?cd(b,!0):cd(s.stateNode,!1)}catch(N){ie(s,s.return,N)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;t===l&&(t=null),l=l.return}t===l&&(t=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Vi(e,t))));break;case 19:tl(l,e),al(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Vi(e,a)));break;case 30:break;case 21:break;default:tl(l,e),al(e)}}function al(e){var l=e.flags;if(l&2){try{for(var t,a=e.return;a!==null;){if(or(a)){t=a;break}a=a.return}if(t==null)throw Error(g(160));switch(t.tag){case 27:var n=t.stateNode,i=Qc(e);Qi(e,i,n);break;case 5:var u=t.stateNode;t.flags&32&&(Ca(u,""),t.flags&=-33);var f=Qc(e);Qi(e,f,u);break;case 3:case 4:var s=t.stateNode.containerInfo,p=Qc(e);Vc(e,p,s);break;default:throw Error(g(161))}}catch(S){ie(e,e.return,S)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function br(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var l=e;br(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),e=e.sibling}}function ft(e,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)dr(e,l.alternate,l),l=l.sibling}function ra(e){for(e=e.child;e!==null;){var l=e;switch(l.tag){case 0:case 11:case 14:case 15:Mt(4,l,l.return),ra(l);break;case 1:Vl(l,l.return);var t=l.stateNode;typeof t.componentWillUnmount=="function"&&cr(l,l.return,t),ra(l);break;case 27:Jn(l.stateNode);case 26:case 5:Vl(l,l.return),ra(l);break;case 22:l.memoizedState===null&&ra(l);break;case 30:ra(l);break;default:ra(l)}e=e.sibling}}function ot(e,l,t){for(t=t&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,n=e,i=l,u=i.flags;switch(i.tag){case 0:case 11:case 15:ot(n,i,t),Bn(4,i);break;case 1:if(ot(n,i,t),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ie(a,a.return,p)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Wo(s[n],f)}catch(p){ie(a,a.return,p)}}t&&u&64&&ur(i),qn(i,i.return);break;case 27:sr(i);case 26:case 5:ot(n,i,t),t&&a===null&&u&4&&fr(i),qn(i,i.return);break;case 12:ot(n,i,t);break;case 31:ot(n,i,t),t&&u&4&&hr(n,i);break;case 13:ot(n,i,t),t&&u&4&&pr(n,i);break;case 22:i.memoizedState===null&&ot(n,i,t),qn(i,i.return);break;case 30:break;default:ot(n,i,t)}l=l.sibling}}function Xc(e,l){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Tn(t))}function Zc(e,l){e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&Tn(e))}function kl(e,l,t,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)vr(e,l,t,a),l=l.sibling}function vr(e,l,t,a){var n=l.flags;switch(l.tag){case 0:case 11:case 15:kl(e,l,t,a),n&2048&&Bn(9,l);break;case 1:kl(e,l,t,a);break;case 3:kl(e,l,t,a),n&2048&&(e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&Tn(e)));break;case 12:if(n&2048){kl(e,l,t,a),e=l.stateNode;try{var i=l.memoizedProps,u=i.id,f=i.onPostCommit;typeof f=="function"&&f(u,l.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ie(l,l.return,s)}}else kl(e,l,t,a);break;case 31:kl(e,l,t,a);break;case 13:kl(e,l,t,a);break;case 23:break;case 22:i=l.stateNode,u=l.alternate,l.memoizedState!==null?i._visibility&2?kl(e,l,t,a):Gn(e,l):i._visibility&2?kl(e,l,t,a):(i._visibility|=2,Pa(e,l,t,a,(l.subtreeFlags&10256)!==0||!1)),n&2048&&Xc(u,l);break;case 24:kl(e,l,t,a),n&2048&&Zc(l.alternate,l);break;default:kl(e,l,t,a)}}function Pa(e,l,t,a,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var i=e,u=l,f=t,s=a,p=u.flags;switch(u.tag){case 0:case 11:case 15:Pa(i,u,f,s,n),Bn(8,u);break;case 23:break;case 22:var S=u.stateNode;u.memoizedState!==null?S._visibility&2?Pa(i,u,f,s,n):Gn(i,u):(S._visibility|=2,Pa(i,u,f,s,n)),n&&p&2048&&Xc(u.alternate,u);break;case 24:Pa(i,u,f,s,n),n&&p&2048&&Zc(u.alternate,u);break;default:Pa(i,u,f,s,n)}l=l.sibling}}function Gn(e,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var t=e,a=l,n=a.flags;switch(a.tag){case 22:Gn(t,a),n&2048&&Xc(a.alternate,a);break;case 24:Gn(t,a),n&2048&&Zc(a.alternate,a);break;default:Gn(t,a)}l=l.sibling}}var Yn=8192;function en(e,l,t){if(e.subtreeFlags&Yn)for(e=e.child;e!==null;)xr(e,l,t),e=e.sibling}function xr(e,l,t){switch(e.tag){case 26:en(e,l,t),e.flags&Yn&&e.memoizedState!==null&&l1(t,Hl,e.memoizedState,e.memoizedProps);break;case 5:en(e,l,t);break;case 3:case 4:var a=Hl;Hl=au(e.stateNode.containerInfo),en(e,l,t),Hl=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Yn,Yn=16777216,en(e,l,t),Yn=a):en(e,l,t));break;default:en(e,l,t)}}function Sr(e){var l=e.alternate;if(l!==null&&(e=l.child,e!==null)){l.child=null;do l=e.sibling,e.sibling=null,e=l;while(e!==null)}}function Qn(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var t=0;t<l.length;t++){var a=l[t];Ye=a,Er(a,e)}Sr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zr(e),e=e.sibling}function zr(e){switch(e.tag){case 0:case 11:case 15:Qn(e),e.flags&2048&&Mt(9,e,e.return);break;case 3:Qn(e);break;case 12:Qn(e);break;case 22:var l=e.stateNode;e.memoizedState!==null&&l._visibility&2&&(e.return===null||e.return.tag!==13)?(l._visibility&=-3,Li(e)):Qn(e);break;default:Qn(e)}}function Li(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var t=0;t<l.length;t++){var a=l[t];Ye=a,Er(a,e)}Sr(e)}for(e=e.child;e!==null;){switch(l=e,l.tag){case 0:case 11:case 15:Mt(8,l,l.return),Li(l);break;case 22:t=l.stateNode,t._visibility&2&&(t._visibility&=-3,Li(l));break;default:Li(l)}e=e.sibling}}function Er(e,l){for(;Ye!==null;){var t=Ye;switch(t.tag){case 0:case 11:case 15:Mt(8,t,l);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Tn(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ye=a;else e:for(t=e;Ye!==null;){a=Ye;var n=a.sibling,i=a.return;if(gr(a),a===t){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var pg={getCacheForType:function(e){var l=Xe(De),t=l.data.get(e);return t===void 0&&(t=e(),l.data.set(e,t)),t},cacheSignal:function(){return Xe(De).controller.signal}},yg=typeof WeakMap=="function"?WeakMap:Map,le=0,re=null,L=null,Z=0,ne=0,ml=null,jt=!1,ln=!1,Kc=!1,st=0,Ee=0,Ct=0,da=0,Jc=0,hl=0,tn=0,Vn=null,nl=null,Wc=!1,Xi=0,_r=0,Zi=1/0,Ki=null,Ut=null,Ue=0,Rt=null,an=null,rt=0,$c=0,Fc=null,Tr=null,Ln=0,Ic=null;function pl(){return(le&2)!==0&&Z!==0?Z&-Z:x.T!==null?nf():Gf()}function Ar(){if(hl===0)if((Z&536870912)===0||W){var e=Cl;Cl<<=1,(Cl&3932160)===0&&(Cl=262144),hl=e}else hl=536870912;return e=dl.current,e!==null&&(e.flags|=32),hl}function il(e,l,t){(e===re&&(ne===2||ne===9)||e.cancelPendingCommit!==null)&&(nn(e,0),Ht(e,Z,hl,!1)),Gl(e,t),((le&2)===0||e!==re)&&(e===re&&((le&2)===0&&(da|=t),Ee===4&&Ht(e,Z,hl,!1)),Ll(e))}function wr(e,l,t){if((le&6)!==0)throw Error(g(327));var a=!t&&(l&127)===0&&(l&e.expiredLanes)===0||ql(e,l),n=a?xg(e,l):ef(e,l,!0),i=a;do{if(n===0){ln&&!a&&Ht(e,l,0,!1);break}else{if(t=e.current.alternate,i&&!bg(t)){n=ef(e,l,!1),i=!1;continue}if(n===2){if(i=l,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){l=u;e:{var f=e;n=Vn;var s=f.current.memoizedState.isDehydrated;if(s&&(nn(f,u).flags|=256),u=ef(f,u,!1),u!==2){if(Kc&&!s){f.errorRecoveryDisabledLanes|=i,da|=i,n=4;break e}i=nl,nl=n,i!==null&&(nl===null?nl=i:nl.push.apply(nl,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){nn(e,0),Ht(e,l,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(g(345));case 4:if((l&4194048)!==l)break;case 6:Ht(a,l,hl,!jt);break e;case 2:nl=null;break;case 3:case 5:break;default:throw Error(g(329))}if((l&62914560)===l&&(n=Xi+300-Be(),10<n)){if(Ht(a,l,hl,!jt),Kl(a,0,!0)!==0)break e;rt=l,a.timeoutHandle=nd(Or.bind(null,a,t,nl,Ki,Wc,l,hl,da,tn,jt,i,"Throttled",-0,0),n);break e}Or(a,t,nl,Ki,Wc,l,hl,da,tn,jt,i,null,-0,0)}}break}while(!0);Ll(e)}function Or(e,l,t,a,n,i,u,f,s,p,S,E,y,b){if(e.timeoutHandle=-1,E=l.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$l},xr(l,i,E);var N=(i&62914560)===i?Xi-Be():(i&4194048)===i?_r-Be():0;if(N=t1(E,N),N!==null){rt=i,e.cancelPendingCommit=N(Hr.bind(null,e,l,i,t,a,n,u,f,s,S,E,null,y,b)),Ht(e,i,u,!p);return}}Hr(e,l,i,t,a,n,u,f,s)}function bg(e){for(var l=e;;){var t=l.tag;if((t===0||t===11||t===15)&&l.flags&16384&&(t=l.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var n=t[a],i=n.getSnapshot;n=n.value;try{if(!sl(i(),n))return!1}catch{return!1}}if(t=l.child,l.subtreeFlags&16384&&t!==null)t.return=l,l=t;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Ht(e,l,t,a){l&=~Jc,l&=~da,e.suspendedLanes|=l,e.pingedLanes&=~l,a&&(e.warmLanes|=l),a=e.expirationTimes;for(var n=l;0<n;){var i=31-qe(n),u=1<<i;a[i]=-1,n&=~u}t!==0&&Jl(e,t,l)}function Ji(){return(le&6)===0?(Xn(0),!1):!0}function Pc(){if(L!==null){if(ne===0)var e=L.return;else e=L,et=aa=null,hc(e),Ja=null,wn=0,e=L;for(;e!==null;)ir(e.alternate,e),e=e.return;L=null}}function nn(e,l){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Bg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),rt=0,Pc(),re=e,L=t=Il(e.current,null),Z=l,ne=0,ml=null,jt=!1,ln=ql(e,l),Kc=!1,tn=hl=Jc=da=Ct=Ee=0,nl=Vn=null,Wc=!1,(l&8)!==0&&(l|=l&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=l;0<a;){var n=31-qe(a),i=1<<n;l|=e[n],a&=~i}return st=l,hi(),t}function Nr(e,l){q=null,x.H=Rn,l===Ka||l===Ei?(l=Xo(),ne=3):l===ac?(l=Xo(),ne=4):ne=l===Mc?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,ml=l,L===null&&(Ee=1,ki(e,El(l,e.current)))}function Dr(){var e=dl.current;return e===null?!0:(Z&4194048)===Z?wl===null:(Z&62914560)===Z||(Z&536870912)!==0?e===wl:!1}function Mr(){var e=x.H;return x.H=Rn,e===null?Rn:e}function jr(){var e=x.A;return x.A=pg,e}function Wi(){Ee=4,jt||(Z&4194048)!==Z&&dl.current!==null||(ln=!0),(Ct&134217727)===0&&(da&134217727)===0||re===null||Ht(re,Z,hl,!1)}function ef(e,l,t){var a=le;le|=2;var n=Mr(),i=jr();(re!==e||Z!==l)&&(Ki=null,nn(e,l)),l=!1;var u=Ee;e:do try{if(ne!==0&&L!==null){var f=L,s=ml;switch(ne){case 8:Pc(),u=6;break e;case 3:case 2:case 9:case 6:dl.current===null&&(l=!0);var p=ne;if(ne=0,ml=null,un(e,f,s,p),t&&ln){u=0;break e}break;default:p=ne,ne=0,ml=null,un(e,f,s,p)}}vg(),u=Ee;break}catch(S){Nr(e,S)}while(!0);return l&&e.shellSuspendCounter++,et=aa=null,le=a,x.H=n,x.A=i,L===null&&(re=null,Z=0,hi()),u}function vg(){for(;L!==null;)Cr(L)}function xg(e,l){var t=le;le|=2;var a=Mr(),n=jr();re!==e||Z!==l?(Ki=null,Zi=Be()+500,nn(e,l)):ln=ql(e,l);e:do try{if(ne!==0&&L!==null){l=L;var i=ml;l:switch(ne){case 1:ne=0,ml=null,un(e,l,i,1);break;case 2:case 9:if(Vo(i)){ne=0,ml=null,Ur(l);break}l=function(){ne!==2&&ne!==9||re!==e||(ne=7),Ll(e)},i.then(l,l);break e;case 3:ne=7;break e;case 4:ne=5;break e;case 7:Vo(i)?(ne=0,ml=null,Ur(l)):(ne=0,ml=null,un(e,l,i,7));break;case 5:var u=null;switch(L.tag){case 26:u=L.memoizedState;case 5:case 27:var f=L;if(u?vd(u):f.stateNode.complete){ne=0,ml=null;var s=f.sibling;if(s!==null)L=s;else{var p=f.return;p!==null?(L=p,$i(p)):L=null}break l}}ne=0,ml=null,un(e,l,i,5);break;case 6:ne=0,ml=null,un(e,l,i,6);break;case 8:Pc(),Ee=6;break e;default:throw Error(g(462))}}Sg();break}catch(S){Nr(e,S)}while(!0);return et=aa=null,x.H=a,x.A=n,le=t,L!==null?0:(re=null,Z=0,hi(),Ee)}function Sg(){for(;L!==null&&!ya();)Cr(L)}function Cr(e){var l=ar(e.alternate,e,st);e.memoizedProps=e.pendingProps,l===null?$i(e):L=l}function Ur(e){var l=e,t=l.alternate;switch(l.tag){case 15:case 0:l=Fs(t,l,l.pendingProps,l.type,void 0,Z);break;case 11:l=Fs(t,l,l.pendingProps,l.type.render,l.ref,Z);break;case 5:hc(l);default:ir(t,l),l=L=jo(l,st),l=ar(t,l,st)}e.memoizedProps=e.pendingProps,l===null?$i(e):L=l}function un(e,l,t,a){et=aa=null,hc(l),Ja=null,wn=0;var n=l.return;try{if(og(e,n,l,t,Z)){Ee=1,ki(e,El(t,e.current)),L=null;return}}catch(i){if(n!==null)throw L=n,i;Ee=1,ki(e,El(t,e.current)),L=null;return}l.flags&32768?(W||a===1?e=!0:ln||(Z&536870912)!==0?e=!1:(jt=e=!0,(a===2||a===9||a===3||a===6)&&(a=dl.current,a!==null&&a.tag===13&&(a.flags|=16384))),Rr(l,e)):$i(l)}function $i(e){var l=e;do{if((l.flags&32768)!==0){Rr(l,jt);return}e=l.return;var t=dg(l.alternate,l,st);if(t!==null){L=t;return}if(l=l.sibling,l!==null){L=l;return}L=l=e}while(l!==null);Ee===0&&(Ee=5)}function Rr(e,l){do{var t=gg(e.alternate,e);if(t!==null){t.flags&=32767,L=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!l&&(e=e.sibling,e!==null)){L=e;return}L=e=t}while(e!==null);Ee=6,L=null}function Hr(e,l,t,a,n,i,u,f,s){e.cancelPendingCommit=null;do Fi();while(Ue!==0);if((le&6)!==0)throw Error(g(327));if(l!==null){if(l===e.current)throw Error(g(177));if(i=l.lanes|l.childLanes,i|=Qu,ai(e,t,i,u,f,s),e===re&&(L=re=null,Z=0),an=l,Rt=e,rt=t,$c=i,Fc=n,Tr=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Tg(Zl,function(){return Yr(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,n=A.p,A.p=2,u=le,le|=4;try{mg(e,l,t)}finally{le=u,A.p=n,x.T=a}}Ue=1,kr(),Br(),qr()}}function kr(){if(Ue===1){Ue=0;var e=Rt,l=an,t=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||t){t=x.T,x.T=null;var a=A.p;A.p=2;var n=le;le|=4;try{yr(l,e);var i=gf,u=Eo(e.containerInfo),f=i.focusedElem,s=i.selectionRange;if(u!==f&&f&&f.ownerDocument&&zo(f.ownerDocument.documentElement,f)){if(s!==null&&ku(f)){var p=s.start,S=s.end;if(S===void 0&&(S=p),"selectionStart"in f)f.selectionStart=p,f.selectionEnd=Math.min(S,f.value.length);else{var E=f.ownerDocument||document,y=E&&E.defaultView||window;if(y.getSelection){var b=y.getSelection(),N=f.textContent.length,H=Math.min(s.start,N),se=s.end===void 0?H:Math.min(s.end,N);!b.extend&&H>se&&(u=se,se=H,H=u);var m=So(f,H),d=So(f,se);if(m&&d&&(b.rangeCount!==1||b.anchorNode!==m.node||b.anchorOffset!==m.offset||b.focusNode!==d.node||b.focusOffset!==d.offset)){var h=E.createRange();h.setStart(m.node,m.offset),b.removeAllRanges(),H>se?(b.addRange(h),b.extend(d.node,d.offset)):(h.setEnd(d.node,d.offset),b.addRange(h))}}}}for(E=[],b=f;b=b.parentNode;)b.nodeType===1&&E.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<E.length;f++){var z=E[f];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}ou=!!df,gf=df=null}finally{le=n,A.p=a,x.T=t}}e.current=l,Ue=2}}function Br(){if(Ue===2){Ue=0;var e=Rt,l=an,t=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||t){t=x.T,x.T=null;var a=A.p;A.p=2;var n=le;le|=4;try{dr(e,l.alternate,l)}finally{le=n,A.p=a,x.T=t}}Ue=3}}function qr(){if(Ue===4||Ue===3){Ue=0,ba();var e=Rt,l=an,t=rt,a=Tr;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Ue=5:(Ue=0,an=Rt=null,Gr(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ut=null),bu(t),l=l.stateNode,Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(bl,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=x.T,n=A.p,A.p=2,x.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var f=a[u];i(f.value,{componentStack:f.stack})}}finally{x.T=l,A.p=n}}(rt&3)!==0&&Fi(),Ll(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===Ic?Ln++:(Ln=0,Ic=e):Ln=0,Xn(0)}}function Gr(e,l){(e.pooledCacheLanes&=l)===0&&(l=e.pooledCache,l!=null&&(e.pooledCache=null,Tn(l)))}function Fi(){return kr(),Br(),qr(),Yr()}function Yr(){if(Ue!==5)return!1;var e=Rt,l=$c;$c=0;var t=bu(rt),a=x.T,n=A.p;try{A.p=32>t?32:t,x.T=null,t=Fc,Fc=null;var i=Rt,u=rt;if(Ue=0,an=Rt=null,rt=0,(le&6)!==0)throw Error(g(331));var f=le;if(le|=4,zr(i.current),vr(i,i.current,u,t),le=f,Xn(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(bl,i)}catch{}return!0}finally{A.p=n,x.T=a,Gr(e,l)}}function Qr(e,l,t){l=El(t,l),l=Dc(e.stateNode,l,2),e=Ot(e,l,2),e!==null&&(Gl(e,2),Ll(e))}function ie(e,l,t){if(e.tag===3)Qr(e,e,t);else for(;l!==null;){if(l.tag===3){Qr(l,e,t);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ut===null||!Ut.has(a))){e=El(t,e),t=Vs(2),a=Ot(l,t,2),a!==null&&(Ls(t,a,l,e),Gl(a,2),Ll(a));break}}l=l.return}}function lf(e,l,t){var a=e.pingCache;if(a===null){a=e.pingCache=new yg;var n=new Set;a.set(l,n)}else n=a.get(l),n===void 0&&(n=new Set,a.set(l,n));n.has(t)||(Kc=!0,n.add(t),e=zg.bind(null,e,l,t),l.then(e,e))}function zg(e,l,t){var a=e.pingCache;a!==null&&a.delete(l),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,re===e&&(Z&t)===t&&(Ee===4||Ee===3&&(Z&62914560)===Z&&300>Be()-Xi?(le&2)===0&&nn(e,0):Jc|=t,tn===Z&&(tn=0)),Ll(e)}function Vr(e,l){l===0&&(l=Wt()),e=ea(e,l),e!==null&&(Gl(e,l),Ll(e))}function Eg(e){var l=e.memoizedState,t=0;l!==null&&(t=l.retryLane),Vr(e,t)}function _g(e,l){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(g(314))}a!==null&&a.delete(l),Vr(e,t)}function Tg(e,l){return yt(e,l)}var Ii=null,cn=null,tf=!1,Pi=!1,af=!1,kt=0;function Ll(e){e!==cn&&e.next===null&&(cn===null?Ii=cn=e:cn=cn.next=e),Pi=!0,tf||(tf=!0,wg())}function Xn(e,l){if(!af&&Pi){af=!0;do for(var t=!1,a=Ii;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-qe(42|e)+1)-1,i&=n&~(u&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Kr(a,i))}else i=Z,i=Kl(a,a===re?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||ql(a,i)||(t=!0,Kr(a,i));a=a.next}while(t);af=!1}}function Ag(){Lr()}function Lr(){Pi=tf=!1;var e=0;kt!==0&&kg()&&(e=kt);for(var l=Be(),t=null,a=Ii;a!==null;){var n=a.next,i=Xr(a,l);i===0?(a.next=null,t===null?Ii=n:t.next=n,n===null&&(cn=t)):(t=a,(e!==0||(i&3)!==0)&&(Pi=!0)),a=n}Ue!==0&&Ue!==5||Xn(e),kt!==0&&(kt=0)}function Xr(e,l){for(var t=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-qe(i),f=1<<u,s=n[u];s===-1?((f&t)===0||(f&a)!==0)&&(n[u]=Aa(f,l)):s<=l&&(e.expiredLanes|=f),i&=~f}if(l=re,t=Z,t=Kl(e,e===l?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===l&&(ne===2||ne===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&bt(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||ql(e,t)){if(l=t&-t,l===e.callbackPriority)return l;switch(a!==null&&bt(a),bu(t)){case 2:case 8:t=Kt;break;case 32:t=Zl;break;case 268435456:t=Jt;break;default:t=Zl}return a=Zr.bind(null,e),t=yt(t,a),e.callbackPriority=l,e.callbackNode=t,l}return a!==null&&a!==null&&bt(a),e.callbackPriority=2,e.callbackNode=null,2}function Zr(e,l){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Fi()&&e.callbackNode!==t)return null;var a=Z;return a=Kl(e,e===re?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(wr(e,a,l),Xr(e,Be()),e.callbackNode!=null&&e.callbackNode===t?Zr.bind(null,e):null)}function Kr(e,l){if(Fi())return null;wr(e,l,!0)}function wg(){qg(function(){(le&6)!==0?yt(Zt,Ag):Lr()})}function nf(){if(kt===0){var e=Xa;e===0&&(e=jl,jl<<=1,(jl&261888)===0&&(jl=256)),kt=e}return kt}function Jr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ci(""+e)}function Wr(e,l){var t=l.ownerDocument.createElement("input");return t.name=l.name,t.value=l.value,e.id&&t.setAttribute("form",e.id),l.parentNode.insertBefore(t,l),e=new FormData(e),t.parentNode.removeChild(t),e}function Og(e,l,t,a,n){if(l==="submit"&&t&&t.stateNode===n){var i=Jr((n[Pe]||null).action),u=a.submitter;u&&(l=(l=u[Pe]||null)?Jr(l.formAction):u.getAttribute("formAction"),l!==null&&(i=l,u=null));var f=new ri("action","action",null,a,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(kt!==0){var s=u?Wr(n,u):new FormData(n);_c(t,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(f.preventDefault(),s=u?Wr(n,u):new FormData(n),_c(t,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var uf=0;uf<Yu.length;uf++){var cf=Yu[uf],Ng=cf.toLowerCase(),Dg=cf[0].toUpperCase()+cf.slice(1);Rl(Ng,"on"+Dg)}Rl(Ao,"onAnimationEnd"),Rl(wo,"onAnimationIteration"),Rl(Oo,"onAnimationStart"),Rl("dblclick","onDoubleClick"),Rl("focusin","onFocus"),Rl("focusout","onBlur"),Rl(Z0,"onTransitionRun"),Rl(K0,"onTransitionStart"),Rl(J0,"onTransitionCancel"),Rl(No,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$t("onBeforeInput",["compositionend","keypress","textInput","paste"]),$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zn));function $r(e,l){l=(l&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],n=a.event;a=a.listeners;e:{var i=void 0;if(l)for(var u=a.length-1;0<=u;u--){var f=a[u],s=f.instance,p=f.currentTarget;if(f=f.listener,s!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=p;try{i(n)}catch(S){mi(S)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(f=a[u],s=f.instance,p=f.currentTarget,f=f.listener,s!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=p;try{i(n)}catch(S){mi(S)}n.currentTarget=null,i=s}}}}function X(e,l){var t=l[vu];t===void 0&&(t=l[vu]=new Set);var a=e+"__bubble";t.has(a)||(Fr(l,e,2,!1),t.add(a))}function ff(e,l,t){var a=0;l&&(a|=4),Fr(t,e,a,l)}var eu="_reactListening"+Math.random().toString(36).slice(2);function of(e){if(!e[eu]){e[eu]=!0,Vf.forEach(function(t){t!=="selectionchange"&&(Mg.has(t)||ff(t,!1,e),ff(t,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[eu]||(l[eu]=!0,ff("selectionchange",!1,l))}}function Fr(e,l,t,a){switch(Ad(l)){case 2:var n=i1;break;case 8:n=u1;break;default:n=_f}t=n.bind(null,l,t,e),n=void 0,!Ou||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(l,t,{capture:!0,passive:n}):e.addEventListener(l,t,!0):n!==void 0?e.addEventListener(l,t,{passive:n}):e.addEventListener(l,t,!1)}function sf(e,l,t,a,n){var i=a;if((l&1)===0&&(l&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;f!==null;){if(u=Oa(f),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue e}f=f.parentNode}}a=a.return}lo(function(){var p=i,S=Au(t),E=[];e:{var y=Do.get(e);if(y!==void 0){var b=ri,N=e;switch(e){case"keypress":if(oi(t)===0)break e;case"keydown":case"keyup":b=_0;break;case"focusin":N="focus",b=ju;break;case"focusout":N="blur",b=ju;break;case"beforeblur":case"afterblur":b=ju;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=w0;break;case Ao:case wo:case Oo:b=h0;break;case No:b=N0;break;case"scroll":case"scrollend":b=s0;break;case"wheel":b=M0;break;case"copy":case"cut":case"paste":b=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=uo;break;case"toggle":case"beforetoggle":b=C0}var H=(l&4)!==0,se=!H&&(e==="scroll"||e==="scrollend"),m=H?y!==null?y+"Capture":null:y;H=[];for(var d=p,h;d!==null;){var z=d;if(h=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||h===null||m===null||(z=mn(d,m),z!=null&&H.push(Kn(d,z,h))),se)break;d=d.return}0<H.length&&(y=new b(y,N,null,t,S),E.push({event:y,listeners:H}))}}if((l&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",y&&t!==Tu&&(N=t.relatedTarget||t.fromElement)&&(Oa(N)||N[wa]))break e;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(N=t.relatedTarget||t.toElement,b=p,N=N?Oa(N):null,N!==null&&(se=j(N),H=N.tag,N!==se||H!==5&&H!==27&&H!==6)&&(N=null)):(b=null,N=p),b!==N)){if(H=no,z="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(H=uo,z="onPointerLeave",m="onPointerEnter",d="pointer"),se=b==null?y:gn(b),h=N==null?y:gn(N),y=new H(z,d+"leave",b,t,S),y.target=se,y.relatedTarget=h,z=null,Oa(S)===p&&(H=new H(m,d+"enter",N,t,S),H.target=h,H.relatedTarget=se,z=H),se=z,b&&N)l:{for(H=jg,m=b,d=N,h=0,z=m;z;z=H(z))h++;z=0;for(var U=d;U;U=H(U))z++;for(;0<h-z;)m=H(m),h--;for(;0<z-h;)d=H(d),z--;for(;h--;){if(m===d||d!==null&&m===d.alternate){H=m;break l}m=H(m),d=H(d)}H=null}else H=null;b!==null&&Ir(E,y,b,H,!1),N!==null&&se!==null&&Ir(E,se,N,H,!0)}}e:{if(y=p?gn(p):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var I=ho;else if(go(y))if(po)I=V0;else{I=Y0;var M=G0}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?p&&_u(p.elementType)&&(I=ho):I=Q0;if(I&&(I=I(e,p))){mo(E,I,t,S);break e}M&&M(e,y,p),e==="focusout"&&p&&y.type==="number"&&p.memoizedProps.value!=null&&Eu(y,"number",y.value)}switch(M=p?gn(p):window,e){case"focusin":(go(M)||M.contentEditable==="true")&&(ka=M,Bu=p,zn=null);break;case"focusout":zn=Bu=ka=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,_o(E,t,S);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":_o(E,t,S)}var G;if(Uu)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Ha?so(e,t)&&(K="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(K="onCompositionStart");K&&(co&&t.locale!=="ko"&&(Ha||K!=="onCompositionStart"?K==="onCompositionEnd"&&Ha&&(G=to()):(St=S,Nu="value"in St?St.value:St.textContent,Ha=!0)),M=lu(p,K),0<M.length&&(K=new io(K,e,null,t,S),E.push({event:K,listeners:M}),G?K.data=G:(G=ro(t),G!==null&&(K.data=G)))),(G=R0?H0(e,t):k0(e,t))&&(K=lu(p,"onBeforeInput"),0<K.length&&(M=new io("onBeforeInput","beforeinput",null,t,S),E.push({event:M,listeners:K}),M.data=G)),Og(E,e,p,t,S)}$r(E,l)})}function Kn(e,l,t){return{instance:e,listener:l,currentTarget:t}}function lu(e,l){for(var t=l+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=mn(e,t),n!=null&&a.unshift(Kn(e,n,i)),n=mn(e,l),n!=null&&a.push(Kn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function jg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ir(e,l,t,a,n){for(var i=l._reactName,u=[];t!==null&&t!==a;){var f=t,s=f.alternate,p=f.stateNode;if(f=f.tag,s!==null&&s===a)break;f!==5&&f!==26&&f!==27||p===null||(s=p,n?(p=mn(t,i),p!=null&&u.unshift(Kn(t,p,s))):n||(p=mn(t,i),p!=null&&u.push(Kn(t,p,s)))),t=t.return}u.length!==0&&e.push({event:l,listeners:u})}var Cg=/\r\n?/g,Ug=/\u0000|\uFFFD/g;function Pr(e){return(typeof e=="string"?e:""+e).replace(Cg,`
`).replace(Ug,"")}function ed(e,l){return l=Pr(l),Pr(e)===l}function oe(e,l,t,a,n,i){switch(t){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||Ca(e,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&Ca(e,""+a);break;case"className":ii(e,"class",a);break;case"tabIndex":ii(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(e,t,a);break;case"style":Pf(e,a,i);break;case"data":if(l!=="object"){ii(e,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=ci(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(l!=="input"&&oe(e,l,"name",n.name,n,null),oe(e,l,"formEncType",n.formEncType,n,null),oe(e,l,"formMethod",n.formMethod,n,null),oe(e,l,"formTarget",n.formTarget,n,null)):(oe(e,l,"encType",n.encType,n,null),oe(e,l,"method",n.method,n,null),oe(e,l,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=ci(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=$l);break;case"onScroll":a!=null&&X("scroll",e);break;case"onScrollEnd":a!=null&&X("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61));if(t=a.__html,t!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=ci(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":X("beforetoggle",e),X("toggle",e),ni(e,"popover",a);break;case"xlinkActuate":Wl(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Wl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Wl(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Wl(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Wl(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Wl(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Wl(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Wl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Wl(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ni(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=f0.get(t)||t,ni(e,t,a))}}function rf(e,l,t,a,n,i){switch(t){case"style":Pf(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61));if(t=a.__html,t!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Ca(e,a):(typeof a=="number"||typeof a=="bigint")&&Ca(e,""+a);break;case"onScroll":a!=null&&X("scroll",e);break;case"onScrollEnd":a!=null&&X("scrollend",e);break;case"onClick":a!=null&&(e.onclick=$l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lf.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),l=t.slice(2,n?t.length-7:void 0),i=e[Pe]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(l,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(l,a,n);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):ni(e,t,a)}}}function Ke(e,l,t){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",e),X("load",e);var a=!1,n=!1,i;for(i in t)if(t.hasOwnProperty(i)){var u=t[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,l));default:oe(e,l,i,u,t,null)}}n&&oe(e,l,"srcSet",t.srcSet,t,null),a&&oe(e,l,"src",t.src,t,null);return;case"input":X("invalid",e);var f=i=u=n=null,s=null,p=null;for(a in t)if(t.hasOwnProperty(a)){var S=t[a];if(S!=null)switch(a){case"name":n=S;break;case"type":u=S;break;case"checked":s=S;break;case"defaultChecked":p=S;break;case"value":i=S;break;case"defaultValue":f=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(g(137,l));break;default:oe(e,l,a,S,t,null)}}Wf(e,i,f,s,p,u,n,!1);return;case"select":X("invalid",e),a=u=i=null;for(n in t)if(t.hasOwnProperty(n)&&(f=t[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":u=f;break;case"multiple":a=f;default:oe(e,l,n,f,t,null)}l=i,t=u,e.multiple=!!a,l!=null?ja(e,!!a,l,!1):t!=null&&ja(e,!!a,t,!0);return;case"textarea":X("invalid",e),i=n=a=null;for(u in t)if(t.hasOwnProperty(u)&&(f=t[u],f!=null))switch(u){case"value":a=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(g(91));break;default:oe(e,l,u,f,t,null)}Ff(e,a,n,i);return;case"option":for(s in t)t.hasOwnProperty(s)&&(a=t[s],a!=null)&&(s==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":oe(e,l,s,a,t,null));return;case"dialog":X("beforetoggle",e),X("toggle",e),X("cancel",e),X("close",e);break;case"iframe":case"object":X("load",e);break;case"video":case"audio":for(a=0;a<Zn.length;a++)X(Zn[a],e);break;case"image":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"embed":case"source":case"link":X("error",e),X("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in t)if(t.hasOwnProperty(p)&&(a=t[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,l));default:oe(e,l,p,a,t,null)}return;default:if(_u(l)){for(S in t)t.hasOwnProperty(S)&&(a=t[S],a!==void 0&&rf(e,l,S,a,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null&&oe(e,l,f,a,t,null))}function Rg(e,l,t,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,f=null,s=null,p=null,S=null;for(b in t){var E=t[b];if(t.hasOwnProperty(b)&&E!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":s=E;default:a.hasOwnProperty(b)||oe(e,l,b,null,a,E)}}for(var y in a){var b=a[y];if(E=t[y],a.hasOwnProperty(y)&&(b!=null||E!=null))switch(y){case"type":i=b;break;case"name":n=b;break;case"checked":p=b;break;case"defaultChecked":S=b;break;case"value":u=b;break;case"defaultValue":f=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(g(137,l));break;default:b!==E&&oe(e,l,y,b,a,E)}}zu(e,u,f,s,p,S,i,n);return;case"select":b=u=f=y=null;for(i in t)if(s=t[i],t.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":b=s;default:a.hasOwnProperty(i)||oe(e,l,i,null,a,s)}for(n in a)if(i=a[n],s=t[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":y=i;break;case"defaultValue":f=i;break;case"multiple":u=i;default:i!==s&&oe(e,l,n,i,a,s)}l=f,t=u,a=b,y!=null?ja(e,!!t,y,!1):!!a!=!!t&&(l!=null?ja(e,!!t,l,!0):ja(e,!!t,t?[]:"",!1));return;case"textarea":b=y=null;for(f in t)if(n=t[f],t.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:oe(e,l,f,null,a,n)}for(u in a)if(n=a[u],i=t[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":y=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==i&&oe(e,l,u,n,a,i)}$f(e,y,b);return;case"option":for(var N in t)y=t[N],t.hasOwnProperty(N)&&y!=null&&!a.hasOwnProperty(N)&&(N==="selected"?e.selected=!1:oe(e,l,N,null,a,y));for(s in a)y=a[s],b=t[s],a.hasOwnProperty(s)&&y!==b&&(y!=null||b!=null)&&(s==="selected"?e.selected=y&&typeof y!="function"&&typeof y!="symbol":oe(e,l,s,y,a,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in t)y=t[H],t.hasOwnProperty(H)&&y!=null&&!a.hasOwnProperty(H)&&oe(e,l,H,null,a,y);for(p in a)if(y=a[p],b=t[p],a.hasOwnProperty(p)&&y!==b&&(y!=null||b!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,l));break;default:oe(e,l,p,y,a,b)}return;default:if(_u(l)){for(var se in t)y=t[se],t.hasOwnProperty(se)&&y!==void 0&&!a.hasOwnProperty(se)&&rf(e,l,se,void 0,a,y);for(S in a)y=a[S],b=t[S],!a.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||rf(e,l,S,y,a,b);return}}for(var m in t)y=t[m],t.hasOwnProperty(m)&&y!=null&&!a.hasOwnProperty(m)&&oe(e,l,m,null,a,y);for(E in a)y=a[E],b=t[E],!a.hasOwnProperty(E)||y===b||y==null&&b==null||oe(e,l,E,y,a,b)}function ld(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,l=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var n=t[a],i=n.transferSize,u=n.initiatorType,f=n.duration;if(i&&f&&ld(u)){for(u=0,f=n.responseEnd,a+=1;a<t.length;a++){var s=t[a],p=s.startTime;if(p>f)break;var S=s.transferSize,E=s.initiatorType;S&&ld(E)&&(s=s.responseEnd,u+=S*(s<f?1:(f-p)/(s-p)))}if(--a,l+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return l/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var df=null,gf=null;function tu(e){return e.nodeType===9?e:e.ownerDocument}function td(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,l){if(e===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&l==="foreignObject"?0:e}function mf(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var hf=null;function kg(){var e=window.event;return e&&e.type==="popstate"?e===hf?!1:(hf=e,!0):(hf=null,!1)}var nd=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(Gg)}:nd;function Gg(e){setTimeout(function(){throw e})}function Bt(e){return e==="head"}function ud(e,l){var t=l,a=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(n),rn(l);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Jn(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Jn(t);for(var i=t.firstChild;i;){var u=i.nextSibling,f=i.nodeName;i[dn]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=u}}else t==="body"&&Jn(e.ownerDocument.body);t=n}while(t);rn(l)}function cd(e,l){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?l?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(l?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function pf(e){var l=e.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var t=l;switch(l=l.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":pf(t),xu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Yg(e,l,t,a){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[dn])switch(l){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(l==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ol(e.nextSibling),e===null)break}return null}function Qg(e,l,t){if(l==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ol(e.nextSibling),e===null))return null;return e}function fd(e,l){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Ol(e.nextSibling),e===null))return null;return e}function yf(e){return e.data==="$?"||e.data==="$~"}function bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vg(e,l){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=l;else if(e.data!=="$?"||t.readyState!=="loading")l();else{var a=function(){l(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ol(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return e}var vf=null;function od(e){e=e.nextSibling;for(var l=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(l===0)return Ol(e.nextSibling);l--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||l++}e=e.nextSibling}return null}function sd(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(l===0)return e;l--}else t!=="/$"&&t!=="/&"||l++}e=e.previousSibling}return null}function rd(e,l,t){switch(l=tu(t),e){case"html":if(e=l.documentElement,!e)throw Error(g(452));return e;case"head":if(e=l.head,!e)throw Error(g(453));return e;case"body":if(e=l.body,!e)throw Error(g(454));return e;default:throw Error(g(451))}}function Jn(e){for(var l=e.attributes;l.length;)e.removeAttributeNode(l[0]);xu(e)}var Nl=new Map,dd=new Set;function au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dt=A.d;A.d={f:Lg,r:Xg,D:Zg,C:Kg,L:Jg,m:Wg,X:Fg,S:$g,M:Ig};function Lg(){var e=dt.f(),l=Ji();return e||l}function Xg(e){var l=Na(e);l!==null&&l.tag===5&&l.type==="form"?Ns(l):dt.r(e)}var fn=typeof document>"u"?null:document;function gd(e,l,t){var a=fn;if(a&&typeof l=="string"&&l){var n=Sl(l);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),dd.has(n)||(dd.add(n),e={rel:e,crossOrigin:t,href:l},a.querySelector(n)===null&&(l=a.createElement("link"),Ke(l,"link",e),Ge(l),a.head.appendChild(l)))}}function Zg(e){dt.D(e),gd("dns-prefetch",e,null)}function Kg(e,l){dt.C(e,l),gd("preconnect",e,l)}function Jg(e,l,t){dt.L(e,l,t);var a=fn;if(a&&e&&l){var n='link[rel="preload"][as="'+Sl(l)+'"]';l==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+Sl(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+Sl(t.imageSizes)+'"]')):n+='[href="'+Sl(e)+'"]';var i=n;switch(l){case"style":i=on(e);break;case"script":i=sn(e)}Nl.has(i)||(e=T({rel:"preload",href:l==="image"&&t&&t.imageSrcSet?void 0:e,as:l},t),Nl.set(i,e),a.querySelector(n)!==null||l==="style"&&a.querySelector(Wn(i))||l==="script"&&a.querySelector($n(i))||(l=a.createElement("link"),Ke(l,"link",e),Ge(l),a.head.appendChild(l)))}}function Wg(e,l){dt.m(e,l);var t=fn;if(t&&e){var a=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+Sl(a)+'"][href="'+Sl(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=sn(e)}if(!Nl.has(i)&&(e=T({rel:"modulepreload",href:e},l),Nl.set(i,e),t.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector($n(i)))return}a=t.createElement("link"),Ke(a,"link",e),Ge(a),t.head.appendChild(a)}}}function $g(e,l,t){dt.S(e,l,t);var a=fn;if(a&&e){var n=Da(a).hoistableStyles,i=on(e);l=l||"default";var u=n.get(i);if(!u){var f={loading:0,preload:null};if(u=a.querySelector(Wn(i)))f.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":l},t),(t=Nl.get(i))&&xf(e,t);var s=u=a.createElement("link");Ge(s),Ke(s,"link",e),s._p=new Promise(function(p,S){s.onload=p,s.onerror=S}),s.addEventListener("load",function(){f.loading|=1}),s.addEventListener("error",function(){f.loading|=2}),f.loading|=4,nu(u,l,a)}u={type:"stylesheet",instance:u,count:1,state:f},n.set(i,u)}}}function Fg(e,l){dt.X(e,l);var t=fn;if(t&&e){var a=Da(t).hoistableScripts,n=sn(e),i=a.get(n);i||(i=t.querySelector($n(n)),i||(e=T({src:e,async:!0},l),(l=Nl.get(n))&&Sf(e,l),i=t.createElement("script"),Ge(i),Ke(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Ig(e,l){dt.M(e,l);var t=fn;if(t&&e){var a=Da(t).hoistableScripts,n=sn(e),i=a.get(n);i||(i=t.querySelector($n(n)),i||(e=T({src:e,async:!0,type:"module"},l),(l=Nl.get(n))&&Sf(e,l),i=t.createElement("script"),Ge(i),Ke(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function md(e,l,t,a){var n=(n=cl.current)?au(n):null;if(!n)throw Error(g(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(l=on(t.href),t=Da(n).hoistableStyles,a=t.get(l),a||(a={type:"style",instance:null,count:0,state:null},t.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=on(t.href);var i=Da(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Wn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Nl.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Nl.set(e,t),i||Pg(n,e,t,u.state))),l&&a===null)throw Error(g(528,""));return u}if(l&&a!==null)throw Error(g(529,""));return null;case"script":return l=t.async,t=t.src,typeof t=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=sn(t),t=Da(n).hoistableScripts,a=t.get(l),a||(a={type:"script",instance:null,count:0,state:null},t.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,e))}}function on(e){return'href="'+Sl(e)+'"'}function Wn(e){return'link[rel="stylesheet"]['+e+"]"}function hd(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Pg(e,l,t,a){e.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=e.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),Ke(l,"link",t),Ge(l),e.head.appendChild(l))}function sn(e){return'[src="'+Sl(e)+'"]'}function $n(e){return"script[async]"+e}function pd(e,l,t){if(l.count++,l.instance===null)switch(l.type){case"style":var a=e.querySelector('style[data-href~="'+Sl(t.href)+'"]');if(a)return l.instance=a,Ge(a),a;var n=T({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ge(a),Ke(a,"style",n),nu(a,t.precedence,e),l.instance=a;case"stylesheet":n=on(t.href);var i=e.querySelector(Wn(n));if(i)return l.state.loading|=4,l.instance=i,Ge(i),i;a=hd(t),(n=Nl.get(n))&&xf(a,n),i=(e.ownerDocument||e).createElement("link"),Ge(i);var u=i;return u._p=new Promise(function(f,s){u.onload=f,u.onerror=s}),Ke(i,"link",a),l.state.loading|=4,nu(i,t.precedence,e),l.instance=i;case"script":return i=sn(t.src),(n=e.querySelector($n(i)))?(l.instance=n,Ge(n),n):(a=t,(n=Nl.get(i))&&(a=T({},t),Sf(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ge(n),Ke(n,"link",a),e.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(g(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,nu(a,t.precedence,e));return l.instance}function nu(e,l,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var f=a[u];if(f.dataset.precedence===l)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(l=t.nodeType===9?t.head:t,l.insertBefore(e,l.firstChild))}function xf(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.title==null&&(e.title=l.title)}function Sf(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.integrity==null&&(e.integrity=l.integrity)}var iu=null;function yd(e,l,t){if(iu===null){var a=new Map,n=iu=new Map;n.set(t,a)}else n=iu,a=n.get(t),a||(a=new Map,n.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var i=t[n];if(!(i[dn]||i[Ve]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(l)||"";u=e+u;var f=a.get(u);f?f.push(i):a.set(u,[i])}}return a}function bd(e,l,t){e=e.ownerDocument||e,e.head.insertBefore(t,l==="title"?e.querySelector("head > title"):null)}function e1(e,l,t){if(t===1||l.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;return l.rel==="stylesheet"?(e=l.disabled,typeof l.precedence=="string"&&e==null):!0;case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function vd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function l1(e,l,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=on(a.href),i=l.querySelector(Wn(n));if(i){l=i._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(e.count++,e=uu.bind(e),l.then(e,e)),t.state.loading|=4,t.instance=i,Ge(i);return}i=l.ownerDocument||l,a=hd(a),(n=Nl.get(n))&&xf(a,n),i=i.createElement("link"),Ge(i);var u=i;u._p=new Promise(function(f,s){u.onload=f,u.onerror=s}),Ke(i,"link",a),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,l),(l=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=uu.bind(e),l.addEventListener("load",t),l.addEventListener("error",t))}}var zf=0;function t1(e,l){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+l);0<e.imgBytes&&zf===0&&(zf=62500*Hg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>zf?50:800)+l);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cu=null;function fu(e,l){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cu=new Map,l.forEach(a1,e),cu=null,uu.call(e))}function a1(e,l){if(!(l.state.loading&4)){var t=cu.get(e);if(t)var a=t.get(null);else{t=new Map,cu.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),a=u)}a&&t.set(null,a)}n=l.instance,u=n.getAttribute("data-precedence"),i=t.get(u)||a,i===a&&t.set(null,n),t.set(u,n),this.count++,a=uu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),l.state.loading|=4}}var Fn={$$typeof:ae,Provider:null,Consumer:null,_currentValue:C,_currentValue2:C,_threadCount:0};function n1(e,l,t,a,n,i,u,f,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.hiddenUpdates=vt(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function xd(e,l,t,a,n,i,u,f,s,p,S,E){return e=new n1(e,l,t,u,s,p,S,E,f),l=1,i===!0&&(l|=24),i=rl(3,null,null,l),e.current=i,i.stateNode=e,l=ec(),l.refCount++,e.pooledCache=l,l.refCount++,i.memoizedState={element:a,isDehydrated:t,cache:l},nc(i),e}function Sd(e){return e?(e=Ga,e):Ga}function zd(e,l,t,a,n,i){n=Sd(n),a.context===null?a.context=n:a.pendingContext=n,a=wt(l),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=Ot(e,a,l),t!==null&&(il(t,e,l),Nn(t,e,l))}function Ed(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<l?t:l}}function Ef(e,l){Ed(e,l),(e=e.alternate)&&Ed(e,l)}function _d(e){if(e.tag===13||e.tag===31){var l=ea(e,67108864);l!==null&&il(l,e,67108864),Ef(e,67108864)}}function Td(e){if(e.tag===13||e.tag===31){var l=pl();l=yu(l);var t=ea(e,l);t!==null&&il(t,e,l),Ef(e,l)}}var ou=!0;function i1(e,l,t,a){var n=x.T;x.T=null;var i=A.p;try{A.p=2,_f(e,l,t,a)}finally{A.p=i,x.T=n}}function u1(e,l,t,a){var n=x.T;x.T=null;var i=A.p;try{A.p=8,_f(e,l,t,a)}finally{A.p=i,x.T=n}}function _f(e,l,t,a){if(ou){var n=Tf(a);if(n===null)sf(e,l,a,su,t),wd(e,a);else if(f1(n,e,l,t,a))a.stopPropagation();else if(wd(e,a),l&4&&-1<c1.indexOf(e)){for(;n!==null;){var i=Na(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=vl(i.pendingLanes);if(u!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;u;){var s=1<<31-qe(u);f.entanglements[1]|=s,u&=~s}Ll(i),(le&6)===0&&(Zi=Be()+500,Xn(0))}}break;case 31:case 13:f=ea(i,2),f!==null&&il(f,i,2),Ji(),Ef(i,2)}if(i=Tf(a),i===null&&sf(e,l,a,su,t),i===n)break;n=i}n!==null&&a.stopPropagation()}else sf(e,l,a,null,t)}}function Tf(e){return e=Au(e),Af(e)}var su=null;function Af(e){if(su=null,e=Oa(e),e!==null){var l=j(e);if(l===null)e=null;else{var t=l.tag;if(t===13){if(e=k(l),e!==null)return e;e=null}else if(t===31){if(e=B(l),e!==null)return e;e=null}else if(t===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null)}}return su=e,null}function Ad(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(va()){case Zt:return 2;case Kt:return 8;case Zl:case xa:return 32;case Jt:return 268435456;default:return 32}default:return 32}}var wf=!1,qt=null,Gt=null,Yt=null,In=new Map,Pn=new Map,Qt=[],c1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wd(e,l){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":In.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(l.pointerId)}}function ei(e,l,t,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:l,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},l!==null&&(l=Na(l),l!==null&&_d(l)),e):(e.eventSystemFlags|=a,l=e.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),e)}function f1(e,l,t,a,n){switch(l){case"focusin":return qt=ei(qt,e,l,t,a,n),!0;case"dragenter":return Gt=ei(Gt,e,l,t,a,n),!0;case"mouseover":return Yt=ei(Yt,e,l,t,a,n),!0;case"pointerover":var i=n.pointerId;return In.set(i,ei(In.get(i)||null,e,l,t,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Pn.set(i,ei(Pn.get(i)||null,e,l,t,a,n)),!0}return!1}function Od(e){var l=Oa(e.target);if(l!==null){var t=j(l);if(t!==null){if(l=t.tag,l===13){if(l=k(t),l!==null){e.blockedOn=l,Yf(e.priority,function(){Td(t)});return}}else if(l===31){if(l=B(t),l!==null){e.blockedOn=l,Yf(e.priority,function(){Td(t)});return}}else if(l===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ru(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var t=Tf(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Tu=a,t.target.dispatchEvent(a),Tu=null}else return l=Na(t),l!==null&&_d(l),e.blockedOn=t,!1;l.shift()}return!0}function Nd(e,l,t){ru(e)&&t.delete(l)}function o1(){wf=!1,qt!==null&&ru(qt)&&(qt=null),Gt!==null&&ru(Gt)&&(Gt=null),Yt!==null&&ru(Yt)&&(Yt=null),In.forEach(Nd),Pn.forEach(Nd)}function du(e,l){e.blockedOn===l&&(e.blockedOn=null,wf||(wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,o1)))}var gu=null;function Dd(e){gu!==e&&(gu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var l=0;l<e.length;l+=3){var t=e[l],a=e[l+1],n=e[l+2];if(typeof a!="function"){if(Af(a||t)===null)continue;break}var i=Na(t);i!==null&&(e.splice(l,3),l-=3,_c(i,{pending:!0,data:n,method:t.method,action:a},a,n))}}))}function rn(e){function l(s){return du(s,e)}qt!==null&&du(qt,e),Gt!==null&&du(Gt,e),Yt!==null&&du(Yt,e),In.forEach(l),Pn.forEach(l);for(var t=0;t<Qt.length;t++){var a=Qt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Qt.length&&(t=Qt[0],t.blockedOn===null);)Od(t),t.blockedOn===null&&Qt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var n=t[a],i=t[a+1],u=n[Pe]||null;if(typeof i=="function")u||Dd(t);else if(u){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Pe]||null)f=u.formAction;else if(Af(n)!==null)continue}else f=u.action;typeof f=="function"?t[a+1]=f:(t.splice(a,3),a-=3),Dd(t)}}}function Md(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function Of(e){this._internalRoot=e}mu.prototype.render=Of.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(g(409));var t=l.current,a=pl();zd(t,a,e,l,null,null)},mu.prototype.unmount=Of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;zd(e.current,2,null,e,null,null),Ji(),l[wa]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var l=Gf();e={blockedOn:null,target:e,priority:l};for(var t=0;t<Qt.length&&l!==0&&l<Qt[t].priority;t++);Qt.splice(t,0,e),t===0&&Od(e)}};var jd=c.version;if(jd!=="19.2.5")throw Error(g(527,jd,"19.2.5"));A.findDOMNode=function(e){var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=v(l),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var s1={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{bl=hu.inject(s1),Ne=hu}catch{}}return li.createRoot=function(e,l){if(!w(e))throw Error(g(299));var t=!1,a="",n=qs,i=Gs,u=Ys;return l!=null&&(l.unstable_strictMode===!0&&(t=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError)),l=xd(e,1,!1,null,null,t,a,null,n,i,u,Md),e[wa]=l.current,of(e),new Of(l)},li.hydrateRoot=function(e,l,t){if(!w(e))throw Error(g(299));var a=!1,n="",i=qs,u=Gs,f=Ys,s=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.formState!==void 0&&(s=t.formState)),l=xd(e,1,!0,l,t??null,a,n,s,i,u,f,Md),l.context=Sd(null),t=l.current,a=pl(),a=yu(a),n=wt(a),n.callback=null,Ot(t,n,a),t=a,l.current.lanes=t,Gl(l,t),Ll(l),e[wa]=l.current,of(e),new mu(l)},li.version="19.2.5",li}var Bd;function v1(){if(Bd)return Nf.exports;Bd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Nf.exports=b1(),Nf.exports}var x1=v1();const S1="modulepreload",z1=function(o){return"/"+o},qd={},ul=function(c,_,g){let w=Promise.resolve();if(_&&_.length>0){let k=function(v){return Promise.all(v.map(D=>Promise.resolve(D).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const B=document.querySelector("meta[property=csp-nonce]"),O=B?.nonce||B?.getAttribute("nonce");w=k(_.map(v=>{if(v=z1(v),v in qd)return;qd[v]=!0;const D=v.endsWith(".css"),T=D?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${T}`))return;const R=document.createElement("link");if(R.rel=D?"stylesheet":S1,D||(R.as="script"),R.crossOrigin="",R.href=v,O&&R.setAttribute("nonce",O),document.head.appendChild(R),D)return new Promise((Q,te)=>{R.addEventListener("load",Q),R.addEventListener("error",()=>te(new Error(`Unable to preload CSS for ${v}`)))})}))}function j(k){const B=new Event("vite:preloadError",{cancelable:!0});if(B.payload=k,window.dispatchEvent(B),!B.defaultPrevented)throw k}return w.then(k=>{for(const B of k||[])B.status==="rejected"&&j(B.reason);return c().catch(j)})};var Cf={exports:{}},Uf={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function E1(){if(Gd)return Uf;Gd=1;var o=kf().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Uf.c=function(c){return o.H.useMemoCache(c)},Uf}var Yd;function _1(){return Yd||(Yd=1,Cf.exports=E1()),Cf.exports}var pu=_1();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=(...o)=>o.filter((c,_,g)=>!!c&&c.trim()!==""&&g.indexOf(c)===_).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,_,g)=>g?g.toUpperCase():_.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=o=>{const c=A1(o);return c.charAt(0).toUpperCase()+c.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=o=>{for(const c in o)if(c.startsWith("aria-")||c==="role"||c==="title")return!0;return!1},O1=Y.createContext({}),N1=()=>Y.useContext(O1),D1=Y.forwardRef(({color:o,size:c,strokeWidth:_,absoluteStrokeWidth:g,className:w="",children:j,iconNode:k,...B},O)=>{const{size:v=24,strokeWidth:D=2,absoluteStrokeWidth:T=!1,color:R="currentColor",className:Q=""}=N1()??{},te=g??T?Number(_??D)*24/Number(c??v):_??D;return Y.createElement("svg",{ref:O,...Rf,width:c??v??Rf.width,height:c??v??Rf.height,stroke:o??R,strokeWidth:te,className:Wd("lucide",Q,w),...!j&&!w1(B)&&{"aria-hidden":"true"},...B},[...k.map(([V,ee])=>Y.createElement(V,ee)),...Array.isArray(j)?j:[j]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=(o,c)=>{const _=Y.forwardRef(({className:g,...w},j)=>Y.createElement(D1,{ref:j,iconNode:c,className:Wd(`lucide-${T1(Qd(o))}`,`lucide-${o}`,g),...w}));return _.displayName=Qd(o),_};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Vd=We("arrow-right",M1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],Ld=We("brain-circuit",j1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],U1=We("circle-alert",C1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],$d=We("database",R1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]],k1=We("file-search",H1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Fd=We("git-branch-plus",B1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Id=We("git-merge",q1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Y1=We("languages",G1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Hf=We("network",Q1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]],L1=We("radar",V1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],Z1=We("route",X1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],Pd=We("scale",K1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],W1=We("search",J1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],F1=We("settings-2",$1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xd=We("shield-check",I1);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],em=We("workflow",P1),lm=5e3;class ga extends Y.Component{settleTimer=null;constructor(c){super(c),this.state={hasError:!1,error:null,retryCount:0}}static getDerivedStateFromError(c){return{hasError:!0,error:c}}componentDidCatch(c,_){console.error("ErrorBoundary caught an error:",c,_),this.clearSettleTimer()}componentWillUnmount(){this.clearSettleTimer()}clearSettleTimer(){this.settleTimer!==null&&(clearTimeout(this.settleTimer),this.settleTimer=null)}resetErrorBoundary=()=>{this.clearSettleTimer(),this.setState(c=>({hasError:!1,error:null,retryCount:c.retryCount+1})),this.settleTimer=setTimeout(()=>{this.settleTimer=null,this.setState({retryCount:0})},lm)};render(){if(this.state.hasError){const c=this.state.retryCount>=3;return r.jsxs("div",{className:"workspace-loading",style:{flexDirection:"column",gap:12,color:"var(--ws-red)"},children:[r.jsx(U1,{size:32,style:{marginBottom:4,opacity:.8}}),r.jsx("div",{style:{fontWeight:500,fontSize:"15px"},children:"Something went wrong in this view."}),r.jsx("div",{style:{fontSize:"13px",opacity:.7,maxWidth:450,textAlign:"center",marginBottom:8,lineHeight:1.5},children:c?"This view continues to encounter a critical error. Please switch to another workspace or reload the page to restore functionality.":"An unexpected problem occurred while rendering this workspace. Your data is safe, but this view cannot be displayed."}),c?r.jsx("button",{className:"ws-btn ws-btn--ghost",style:{borderColor:"var(--ws-border)",color:"var(--ws-text)"},onClick:()=>window.location.reload(),children:"Reload Application"}):r.jsx("button",{className:"ws-btn ws-btn--ghost",style:{borderColor:"var(--ws-red-soft)",color:"var(--ws-red)"},onClick:this.resetErrorBoundary,children:"Try Again"})]})}return this.props.children}}const e0={"Knowledge Explorer":"知识图谱浏览器","Graph and vocabulary browsing":"图谱与词汇浏览",Analyze:"分析","Query and inspect the dataset":"查询并检查数据集",Decisions:"决策","Decision chains and precedent review":"决策链与先例审查",Enrich:"数据治理","Import, export, and merge workflows":"导入、导出与合并流程",Manage:"管理","Lineage and governance tooling":"溯源与治理工具","Ontology Hub":"本体中心","Schema governance, registry, and vocabulary management":"模式治理、注册与词汇管理","Connecting…":"连接中…","System Online":"系统在线","Backend Unreachable":"后端不可达","Knowledge nodes":"知识节点","Relationships mapped":"已映射关系","Graph modes":"图谱模式","Dataset online":"数据集在线","Ready to explore":"可以开始探索",Live:"在线",Ready:"就绪",Active:"活跃",Standby:"待机",Vocabulary:"词汇","Schemes and terms":"词汇体系与术语","Inference and queries":"推理与查询","Chains and precedents":"链路与先例","Import and resolve":"导入与实体解析","Lineage and ontology":"溯源与本体","Product category":"产品类别","Semantic Intelligence":"语义智能","Knowledge graph preview":"知识图谱预览","Navigate knowledge":"探索知识","like a living system.":"像一个持续生长的系统。","Search command, node, or concept":"搜索命令、节点或概念","distance heatmap · focused view · causal path":"距离热力图 · 聚焦视图 · 因果路径","Entity Dossier":"实体档案","Distance band":"距离区间",Near:"临近","Path coherence":"路径一致性",Provenance:"溯源",Audited:"已审计","Temporal Evidence":"时间证据",coverage:"覆盖率",Workspaces:"工作区","Primary Workspace":"主工作区","Full graph, grouped communities, focused neighborhoods, and distance intelligence — all in one canvas.":"完整图谱、社区分组、聚焦邻域和距离分析，统一呈现在一个画布中。","Intelligence Layer":"智能层","Distance Heatmap":"距离热力图","Focused Neighborhood":"聚焦邻域","Grouped Communities":"社区分组","Trace Causal Path":"查找联系路线","Provenance Dossier":"溯源档案","Open Semantica Explorer":"打开知识图谱浏览器","Run Reasoning":"运行推理","Loading workspace…":"正在加载工作区…","Could not load the graph":"无法加载图谱","The Explorer API did not return graph data. Check that the backend is running and reachable, then try again.":"Explorer API 未返回图谱数据，请确认后端已经启动且可以访问，然后重试。",Retry:"重试",Explore:"探索","Browse the graph and switch views without leaving the workspace.":"在当前工作区浏览图谱并切换视图。","Graph Studio":"图谱工作台","Vocabulary Browser":"词汇浏览器","Reasoning Engine":"推理引擎","SPARQL Query":"SPARQL查询","Query the active graph and test inference rules.":"查询当前图谱并测试推理规则。","Reasoning Playground":"推理实验台","SPARQL Querying":"SPARQL查询","Decision Intelligence":"决策智能","Inspect decision chains, causal context, and precedent matches.":"检查决策链、因果上下文和先例匹配。","Knowledge Audit":"知识审计","Import, export, reconcile, and audit graph entities.":"导入、导出、核对并审计图谱实体。","Import and Export":"导入与导出","Diff and Merge":"差异与合并","Entity Resolution":"实体解析",Registry:"注册表","Load, browse, edit, and govern ontologies and vocabularies.":"加载、浏览、编辑并治理本体和词汇。","Schema Governance":"模式治理","Review provenance, lineage, ontology, and governance context.":"查看溯源、血缘、本体和治理上下文。","Graph Governance":"图谱治理","PROV-O Lineage":"PROV-O血缘","KG Overview":"知识图谱概览","Ontology Summary":"本体摘要","Knowledge graph":"知识图谱",Search:"搜索","Search graph nodes":"搜索图谱节点","Search suggestions":"搜索建议","Graph view mode":"图谱视图模式","Full Graph":"完整图谱","Grouped View":"分组视图",Focused:"聚焦","Zoom In":"放大","Zoom Out":"缩小","Reset View":"重置视图",Selection:"当前选择",Actions:"可以做什么","Trace Path":"查找联系路线","Target node ID":"目标条目编号","Candidate Links":"可能遗漏的联系","Source Attribution":"官网来源",Properties:"详细信息","No path found between the selected nodes.":"所选节点之间未找到路径。","No explicit attribution metadata was found on this node.":"此节点没有明确的来源归因元数据。","No additional properties are attached to this node.":"此节点没有附加属性。",Ontology:"本体",external:"外部",internal:"内部",turtle:"Turtle本体",Classes:"本体类",Concepts:"概念",Props:"属性",Disable:"停用",Enable:"启用","Remove from registry":"移出登记",Editor:"编辑器",Versions:"版本",Alignments:"对齐",Health:"健康度",SHACL:"SHACL校验","Select ontology...":"选择本体…","Quality and governance signals":"质量与治理信号","Total health score":"总体健康度","Actionable issues":"待处理问题","No actionable issues reported for this ontology.":"此本体暂无待处理问题。","Select an ontology to compute health signals.":"请选择本体以计算健康度。","Cross-ontology mappings":"跨本体映射","Pairwise alignment matrix":"两两对齐矩阵","Create or update alignment":"创建或更新对齐关系","Source entity URI":"源实体URI","Target entity URI":"目标实体URI","Provenance note":"溯源说明",Reviewer:"审核人","Suggest alignments":"建议对齐","Recorded alignments":"已记录对齐关系","Any ontology":"任意本体","No alignments recorded yet.":"尚未记录对齐关系。","Loading schemes…":"正在加载词汇体系…","No concept selected":"未选择概念","Click a concept in the tree to view its properties.":"点击树中的概念查看属性。",Nodes:"节点",Edges:"关系",Density:"密度",types:"种类型","rel. types":"种关系类型","graph density":"图谱密度","Node/edge counts, type distributions, and top connected nodes":"节点/关系数量、类型分布及高连接节点","Node Type Breakdown":"节点类型分布","Edge Type Breakdown":"关系类型分布","Top Connected Nodes (by degree)":"高连接节点（按度数）","No data — load the graph first.":"暂无数据，请先加载图谱。","Run a query":"运行查询","No results":"无结果","The query returned 0 rows. Try a broader query or check your data.":"查询返回0行，请扩大查询范围或检查数据。","Templates:":"模板：","Copy query":"复制查询","Running…":"运行中…","Run Query":"运行查询","Write inferred facts to graph":"将推理事实写入图谱","Inferred binary facts are added as edges":"推理得到的二元事实将作为关系加入图谱","Inference Results":"推理结果","graph updated":"图谱已更新","preview only":"仅预览","Reasoning complete":"推理完成","No new facts were inferred from the current rule set and facts.":"根据当前规则和事实未推理出新事实。","Ready to reason":"可以开始推理","Enter facts and rules on the left, then click Run Reasoning to see inferred statements here.":"在左侧输入事实和规则，然后点击“运行推理”查看推理结果。","Import Successful!":"导入成功！","Remove alignment":"删除对齐关系","No ontology selected":"未选择本体","Forward Chaining":"前向链接","Inference Engine":"推理引擎","Quick Templates":"快速模板","Drug Candidate":"药物候选","Gene → Disease":"基因 → 疾病","Pathway Activation":"通路激活",Facts:"事实","One fact per line using":"每行输入一个事实，使用","form.":"格式。",Rules:"规则",Use:"使用","syntax. Falls back to internal matcher if the reasoning server is unavailable.":"该语法；如果推理服务不可用，将回退到内部匹配器。","Reset to defaults":"重置默认值","Filter by ID, category, outcome…":"按编号、类别、结果筛选…","No decisions":"暂无决策","No decisions available in the graph.":"图谱中暂无决策。","No decision selected":"未选择决策","Select a decision from the list to inspect its causal chain and metadata.":"请从列表选择一项决策，查看其因果链和元数据。","Import & Export":"导入与导出","Ingest new graph datasets or extract the current knowledge base.":"导入新的图谱数据集，或导出当前知识库。","Import Entities & Relations":"导入实体与关系","Choose File":"选择文件","Drag & drop or click to browse":"拖放文件或点击浏览",or:"或","Upload to Graph":"上传到图谱","Export Graph Snapshot":"导出图谱快照",Format:"格式","What's included":"包含内容","Full graph snapshot: all node properties, edge weights, entity metadata and semantic groups in a standardized JSON payload.":"完整图谱快照：包含所有节点属性、关系权重、实体元数据和语义分组，并以标准化JSON载荷导出。","Download Export":"下载导出文件","Entity Diff & Merge":"实体差异与合并","Compare suspected duplicates side-by-side and reconcile them into a single canonical entity.":"并排比较疑似重复实体，并将其核对合并为一个标准实体。","Primary Node ID (keep)":"主节点ID（保留）","Duplicate Node ID (remove)":"重复节点ID（移除）","Sample preview":"示例预览","— field comparison will load from the graph once the backend is connected":"连接后端后，将从图谱加载字段比较结果",Field:"字段","Primary (keep)":"主记录（保留）","Duplicate (remove)":"重复记录（移除）",Name:"名称",Founded:"成立日期",Type:"类型",Country:"国家/地区","Confirm Merge":"确认合并","Detect and merge duplicate entities in the knowledge graph":"检测并合并知识图谱中的重复实体","Similarity Threshold":"相似度阈值","More results (0.50)":"更多结果（0.50）","Fewer, higher confidence (0.99)":"更少结果、更高置信度（0.99）","Run Dedup Scan":"运行去重扫描","No flagged pairs":"暂无标记的重复对","Set a similarity threshold and run a dedup scan to detect potential duplicates.":"设置相似度阈值并运行去重扫描，以检测潜在重复实体。","Document Registry":"文档注册表","Audit log of all KG and Ontology mutations this session":"本次会话中所有知识图谱和本体变更的审计日志","0 events":"0 条事件","No events recorded yet":"尚未记录事件","Import a file, run reasoning, or merge entities to see activity appear here.":"导入文件、运行推理或合并实体后，活动记录会显示在这里。",IMPORT:"导入",EXPORT:"导出",MERGE:"合并","ADD NODE":"新增节点","ADD EDGE":"新增关系",INFER:"推理",DELETE:"删除",VOCAB:"词汇","Enter Node ID…":"输入节点ID…",Trace:"追踪","Export JSON":"导出JSON","Export MD":"导出MD","PROV-O Lineage Viewer":"PROV-O血缘查看器","Enter a Node ID in the toolbar above and click Trace to view its W3C PROV-O lineage diagram.":"在上方工具栏输入节点ID并点击“追踪”，查看其W3C PROV-O血缘图。",Refresh:"刷新","Open Full Browser":"打开完整浏览器","No vocabulary schemes loaded":"尚未加载词汇体系","Import a .ttl or .rdf file via the Vocabulary Browser to see your ontology here.":"请通过词汇浏览器导入.ttl或.rdf文件，即可在此查看本体。","Search ontologies by name, URI, or namespace…":"按名称、URI或命名空间搜索本体…",All:"全部",INTERNAL:"内部",EXTERNAL:"外部","Entity Search":"实体搜索","Load Ontology":"加载本体","No ontologies loaded yet":"尚未加载本体","Import from a URL, upload a file, or create a new ontology to get started. Click":"可从URL导入、上传文件或新建本体开始。点击上方的","above.":"。","Search for the current query":"搜索当前查询","Loading relationships":"正在加载关系",nodes:"节点",relationships:"关系","Stabilizing layout":"正在稳定布局","Settling runtime layout":"正在调整运行时布局",Camera:"视图控制","Zoom in":"放大","Zoom out":"缩小","Fit view":"适应视图",Layout:"布局",Run:"运行",Pause:"暂停",Local:"当前条目",Collapse:"收起次要联系",Expand:"展开全部联系",Distance:"联系远近","Ego Mode":"聚焦周边",Heatmap:"远近着色",Structural:"按关系步数",Semantic:"按内容相似度","Hide lower-priority fanout around the selected node":"收起所选条目周围较次要的联系","Restore the collapsed local neighborhood":"重新展开所选条目的全部联系","Show depth-of-field fading around the selected node":"突出所选条目附近的内容","Distance heatmap active (click to toggle off)":"正在按联系远近着色，点击可关闭","Color nodes by hop distance from selected node":"按与所选条目相隔几步为节点着色","Color edges by structural (hop) distance":"按关系网络中的间隔步数显示联系","Color edges by semantic similarity to selected node":"按内容与所选条目的相似程度显示联系",Analysis:"分析",Effects:"效果",Neighbors:"邻居节点",Temporal:"时间",Utility:"工具","Reload graph data":"重新加载图谱数据","Node visual key":"节点图例","Return to the full graph context":"返回完整关系图","Compress dense structure into detected communities":"把关系紧密的条目合并成小组查看","Grouped view is unavailable until communities can be detected":"暂时无法使用分组视图","Inspect the selected node in a focused local graph":"只查看所选条目及其直接联系","Focused mode is unavailable for the current selection":"当前选择无法使用聚焦视图","Zoom in (or scroll up on the canvas)":"放大（也可以在画布上向上滚动）","Zoom out (or scroll down on the canvas)":"缩小（也可以在画布上向下滚动）","Reset the camera to fit the whole graph":"让完整关系图适应当前窗口","Toggle the layout worker":"暂停或继续整理节点位置","Open exploration effects controls":"打开显示效果设置","Toggle neighborhood panel":"查看所选条目的直接联系","Communities compressed into grouped structure view":"已按关系紧密程度合并为小组视图","Grouped view is unavailable for the current graph":"当前图谱无法使用分组视图","Grouped structure view with direct community drill-in":"小组视图：点击小组可继续查看","Selected item is not directly inspectable in the current graph.":"当前小组不能直接查看详细信息。","Selected item is not available in the current graph.":"当前图谱中找不到这个条目。","Activate Focused mode to resolve this grouped selection to its canonical node.":"切换到聚焦视图后可查看该小组对应的具体条目。","Focused mode is unavailable for this grouped selection.":"当前小组无法使用聚焦视图。","Focused mode is unavailable for the current selection.":"当前选择无法使用聚焦视图。","Search for a node or click one in the canvas to inspect its properties.":"搜索条目，或点击图中的节点查看详细信息。","Grouped Selection":"小组选择","This grouped item stays display-level until you explicitly enter Focused mode.":"这是用于展示的小组；切换到聚焦视图后可以查看具体条目。","Run Link Prediction":"提示可能遗漏的联系","Provenance JSON":"下载 JSON 来源记录","Provenance MD":"下载 Markdown 来源记录","Optional candidate type filter, e.g. disease":"可选：填写要查找的条目类型，例如教师","Choose a target or click a candidate prediction to prepare a path trace.":"填写目标条目编号，或从可能的联系中选择一个，再查找联系路线。","Run link prediction to surface likely next-hop relationships.":"点击“提示可能遗漏的联系”，查看可能存在但尚未记录的关系。","Computing candidate links…":"正在查找可能的联系…","candidate links":"个可能的联系","source fields":"项来源信息",temporal:"有时间范围","Value framework":"价值框架","Value chain":"增值链","Process group":"过程组","Task package":"任务包","Business object":"业务对象",Organization:"组织/岗位","Event/state":"事件/状态","Governance/evidence":"规则/证据","System/data":"系统/数据",Community:"聚合视图",Prepare:"准备",Relations:"关系",Styling:"样式",Scene:"场景","Working through this stage":"正在处理当前阶段","Runtime layout · Bootstrapping":"运行时布局 · 初始化","Play Evolution":"播放演化","Temporal Scrubber · 1970-2030":"时间滑块 · 1970-2030",Language:"语言","Switch to English":"切换到英文","Switch to Chinese":"切换到中文","Knowledge Engineering":"知识工程","Enterprise Knowledge Engineering":"企业知识工程","A seven-layer workbench from data ingestion through ontology governance, knowledge graphs, and standardized delivery.":"从数据摄取到本体治理、知识图谱和标准化交付的七层工作台。",Ingest:"摄取","Parse / Normalize / Chunk":"解析 / 归一化 / 分块","Extract / Conflict / Deduplicate":"抽取 / 冲突 / 去重","Knowledge Graph Construction":"知识图谱构建","Ontology & Intelligent Governance":"本体与智能治理","Pluggable Storage":"可插拔存储","Output & Access":"输出与访问","Bring enterprise files, web pages, systems, and real-time streams into the workspace.":"把企业文件、网页、系统和实时流接入工作区。","Organize different formats into unified content ready for retrieval and extraction.":"把不同格式整理成可检索、可抽取的统一内容。","Discover entities, relations, events, and contradictions while preserving evidence before merge.":"发现实体、关系、事件和矛盾，并在合并前保留证据。","Build graphs around ontologies and facts with bitemporal data and graph algorithms.":"以本体和事实为骨架建图，支持双时态与图算法。","Govern trusted knowledge with OWL, SHACL, SKOS, reasoning, and PROV-O.":"用 OWL、SHACL、SKOS、推理和 PROV-O 管理可信知识。","Choose triple stores, labeled property graphs, and vector databases by scenario.":"按场景选择三元组库、标签属性图库和向量库。","Export standard formats and access them through the web, REST, MCP, and CLI.":"导出标准格式，并通过网页、REST、MCP和CLI访问。","Choose a data source":"选择数据来源","Files can be uploaded directly; databases, warehouses, cloud services, streams, and external services register a connection first.":"文件可直接上传；数据库、数仓、云、流和外部服务先登记连接配置。","Refresh catalog":"刷新目录","File and Web":"文件与网页","Systems and Warehouses":"系统与数仓","Cloud and Search":"云与搜索","Real-time and Code":"实时与代码",File:"文件",Web:"网页","RSS / Atom":"RSS / Atom",Database:"数据库","Message Stream":"消息流",Email:"邮件","File ingestion":"文件摄取入口","Click to choose a file":"点击选择文件","Ingest and preview":"摄取并预览","Processing…":"处理中…","Document parsing":"文档解析","Text / entity / date normalization":"文本 / 实体 / 日期归一化","GraphRAG entity-aware chunking":"GraphRAG 实体感知分块","Extraction playground":"抽取实验台","Entity, relation, event, and triple extraction":"实体、关系、事件与三元组抽取","Run extraction":"运行抽取","Conflict detection":"冲突检测","Semantic deduplication and merge":"语义去重与合并","Graph intelligence":"图智能","Graph construction and algorithms":"建图与图算法",Centrality:"中心度","Community detection":"社区发现","Link prediction":"链路预测","Shortest path":"最短路径","Run graph algorithms":"运行图算法","Open graph explorer":"打开图谱浏览","Governance actions":"治理操作入口","Open ontology hub":"打开本体中心","Open reasoning workspace":"打开推理工作区","Open PROV-O lineage":"打开 PROV-O 血缘","RDF triple store":"RDF 三元组库","Labeled property graph":"标签属性图库","Vector database":"向量库","Graph export":"图谱导出","Export graph":"导出图谱","Choose a format to download the current graph snapshot.":"选择格式后下载当前图谱快照。","Download export":"下载导出文件","Interactive visualization":"交互式可视化","Open API documentation":"打开接口文档","View integration guide":"查看接入说明","Current entry: Knowledge Engineering":"当前入口：知识工程","Engineering layers":"工程层级","Data source types":"数据源类型","Recent ingestions":"最近摄取","Governance principle":"治理原则",Traceable:"可追溯","Loading nodes":"正在加载节点","Loading edges":"正在加载关系",University:"大学",School:"学院",Program:"培养项目",Person:"教师",AcademicField:"学习方向",ResearchArea:"研究主题",HAS_SCHOOL:"设有学院",OFFERS_PROGRAM:"开设培养项目",WORKS_AT:"任职于",LEADS:"负责学院",RESEARCHES:"研究",HAS_ACADEMIC_FIELD:"设有学习方向",RESEARCH_FOCUS:"重点研究",name_en:"英文姓名",roles:"职务",education:"教育背景",research_interests:"研究主题",email:"邮箱",office:"办公室",website:"个人网站",profile_url:"学院个人页",photo_url:"照片链接",directory_status:"教师目录状态",expected_join:"预计加入时间",student_summary:"简明说明",source_ids:"来源编号",assertion_type:"信息类型",confidence:"可信程度",field_kind:"方向类别",faculty_team_count:"学院页面所列师资人数",teacher_directory_profile_count:"教师目录档案数",faculty_team_count_note:"统计口径说明","Import materials":"导入资料","Organize materials":"整理资料","Identify people and relationships":"识别人和关系","Build the relationship network":"生成关系网络","Unify concepts and rules":"统一概念和规则","Choose how to save":"选择保存方式","View, download, and connect":"查看、下载和接入","SDS official website knowledge graph":"SDS 官网知识图谱","CUHK-Shenzhen School of Data Science Knowledge Graph":"港中深数据科学学院知识图谱","Official website data date: 2026-09-05":"官网数据日期：2026-09-05","Local graph Q&A":"本地图谱问答","Ask about the CUHK-Shenzhen School of Data Science":"询问港中深数据科学学院","Ask the graph":"向图谱提问","Official sources":"官网来源","Knowledge items":"知识条目","Relationships between items":"条目间关系","Relationship network analysis":"关系网络分析","Find important connections in the graph":"发现图谱中的重要联系","Open the graph explorer":"打开图谱浏览","Source and rules tools":"规则与来源工具","Make graph content trustworthy and explainable":"让图谱内容可信、可解释","Data rule checks":"数据规则检查","Concept and classification dictionary":"概念与分类词典","See where information comes from":"查看信息来自哪里","Download graph files":"下载图谱文件","Choose a file format":"选择需要的文件格式","Download graph":"下载图谱","View the relationship graph on the web":"在网页查看关系图","Use it from another program":"给其他程序使用","Connect an AI assistant or command line":"连接 AI 助手或命令行","School knowledge graph":"学院知识图谱","Import official website data, explore people and relationships, and ask the graph":"导入官网资料、浏览人物关系并向图谱提问","Local knowledge graph":"本地知识图谱","CUHK-Shenzhen School of Data Science":"港中深数据科学学院","Knowledge Graph":"知识图谱","Turn official website information into":"把官网信息整理成","a relationship network you can ask":"可以提问的关系网络","Browse the school knowledge graph":"浏览学院知识图谱","Knowledge item example":"知识条目示例","Faculty profiles":"教师档案","Training programmes":"培养项目","Official website snapshot":"官网数据快照","Relationship analysis":"关系分析","View relationship distance":"查看关系远近","Focus on related items":"聚焦相关条目","Discover relationship groups":"发现关系小组","Find connection routes":"查找联系路线","Search faculty, programmes, or research topics":"搜索教师、项目或研究主题","Search nodes and relationships":"搜索教师、项目、研究主题或关系","Search graph nodes and relationships":"搜索图谱节点和关系",Relationship:"关系","Dismiss search results":"关闭搜索结果",Dismiss:"关闭结果","View by relationship distance · focus on items · find connection routes":"按关系远近查看 · 聚焦条目 · 查找联系路线"},tm=Object.entries(e0).sort(([o],[c])=>c.length-o.length),am=Object.entries(e0).reduce((o,[c,_])=>(_ in o||(o[_]=c),o),{}),nm=Object.entries(am).sort(([o],[c])=>c.length-o.length);function Zd(o,c){let _=o;const g=c==="zh-CN"?tm:nm;for(const[we,xe]of g)if(_===we)return xe;if(c==="en")return _;const w=_.match(/^(\d[\d,]*) nodes · (\d[\d,]*) edges$/);if(w)return`${w[1]} 个节点 · ${w[2]} 条关系`;const j=_.match(/^(\d[\d,]*)\s*\/\s*(\d[\d,]*)\s+in current stage$/);if(j)return`${j[1]} / ${j[2]} 当前阶段`;const k=_.match(/^(\d[\d,]*)\s*\/\s*(\d[\d,]*)\s+nodes$/);if(k)return`${k[1]} / ${k[2]} 个节点`;const B=_.match(/^(\d[\d,]*)\s*\/\s*(\d[\d,]*)\s+relationships$/);if(B)return`${B[1]} / ${B[2]} 条关系`;const O=_.match(/^(\d[\d,]*) active$/);if(O)return`${O[1]} 个有效条目`;const v=_.match(/^(\d[\d,]*) direct neighbors highlighted$/);if(v)return`已高亮 ${v[1]} 个直接相关条目`;const D=_.match(/^(\d[\d,]*) nodes in focused view$/);if(D)return`聚焦视图中有 ${D[1]} 个条目`;const T=_.match(/^(\d[\d,]*) visible neighbors, (\d[\d,]*) collapsed$/);if(T)return`显示 ${T[1]} 个相关条目，收起 ${T[2]} 个`;const R=_.match(/^(\d[\d,]*) results?$/);if(R)return`${R[1]} 条结果`;const Q=_.match(/^(\d[\d,]*) source fields$/);if(Q)return`${Q[1]} 项来源信息`;const te=_.match(/^(\d[\d,]*) candidate links$/);if(te)return`${te[1]} 个可能的联系`;const V=_.match(/^Loading nodes (\d[\d,]*) of (\d[\d,]*)$/);if(V)return`正在加载节点：${V[1]} / ${V[2]}`;const ee=_.match(/^Loading edges (\d[\d,]*) of (\d[\d,]*)$/);if(ee)return`正在加载关系：${ee[1]} / ${ee[2]}`;const ue=_.match(/^(\d[\d,]*) types$/);if(ue)return`${ue[1]} 种类型`;const de=_.match(/^(\d[\d,]*) rel\. types$/);if(de)return`${de[1]} 种关系类型`;const ae=_.match(/^(\d[\d,]*) vocabulary schemes loaded$/);if(ae)return`已加载 ${ae[1]} 个词汇体系`;const Ae=_.match(/^(\d[\d,]*) events$/);if(Ae)return`${Ae[1]} 条事件`;const ve=_.match(/^Stage\s*(\d+)\s*\/\s*(\d+)$/);if(ve)return`阶段 ${ve[1]}/${ve[2]}`;const pe=_.match(/^Fetch failed:\s*(\d+)$/);return pe?`请求失败：${pe[1]}`:(/\bnodes\b/.test(_)&&(_=_.replace(/\bnodes\b/g,"节点")),/\bedges\b/.test(_)&&(_=_.replace(/\bedges\b/g,"关系")),/\brelationships\b/.test(_)&&(_=_.replace(/\brelationships\b/g,"关系")),_.startsWith("Stage")&&(_=_.replace(/^Stage/,"阶段")),_.startsWith("Runtime layout")&&(_=_.replace(/^Runtime layout/,"运行时布局")),_.startsWith("Temporal Scrubber")?_.replace("Temporal Scrubber","时间滑块"):_.startsWith("Time: ")?`时间：${_.slice(6)}`:_)}function ti(o,c){if(new Set(["CODE","PRE","SCRIPT","STYLE","TEXTAREA"]).has(o.tagName)||o.closest("[data-no-i18n='true']"))return;const g=["title","aria-label","placeholder","alt"];for(const w of g){const j=o.getAttribute(w);if(j){const k=Zd(j,c);k!==j&&o.setAttribute(w,k)}}for(const w of Array.from(o.childNodes))if(w.nodeType===Node.TEXT_NODE){const j=w.nodeValue??"",k=Zd(j.trim(),c);k!==j.trim()&&(w.nodeValue=j.replace(j.trim(),k))}else w.nodeType===Node.ELEMENT_NODE&&ti(w,c)}function im(o){document.documentElement.lang=o,document.title=o==="zh-CN"?"港中深数据科学学院知识图谱 · Semantica Explorer":"CUHK-Shenzhen School of Data Science Knowledge Graph · Semantica Explorer",ti(document.body,o);const c=new MutationObserver(_=>{for(const g of _){if(g.type==="characterData"){const w=g.target.parentElement;w&&ti(w,o);continue}if(g.type==="attributes"){ti(g.target,o);continue}for(const w of Array.from(g.addedNodes))w.nodeType===Node.ELEMENT_NODE&&ti(w,o)}});return c.observe(document.body,{attributes:!0,attributeFilter:["title","aria-label","placeholder","alt"],characterData:!0,childList:!0,subtree:!0}),()=>c.disconnect()}const um=Y.lazy(()=>ul(()=>import("./DecisionWorkspace-B7CDR6ts.js"),__vite__mapDeps([0,1,2])).then(o=>({default:o.DecisionWorkspace}))),cm=Y.lazy(()=>ul(()=>import("./DiffMergeWorkspace-CymDipps.js"),__vite__mapDeps([3,1,4,5,6])).then(o=>({default:o.DiffMergeWorkspace}))),fm=Y.lazy(()=>ul(()=>import("./GraphWorkspace-ZxOdLglw.js").then(o=>o.a),__vite__mapDeps([7,1,8,4,9,10,11,12,13,14])).then(o=>({default:o.GraphWorkspace}))),om=Y.lazy(()=>ul(()=>import("./ImportExportWorkspace-bMkJoCUA.js"),__vite__mapDeps([15,1,16,4,17,18,6,19,5])).then(o=>({default:o.ImportExportWorkspace}))),sm=Y.lazy(()=>ul(()=>import("./LineageDiagram-olGXW84l.js"),__vite__mapDeps([20,1,21,22,23])).then(o=>({default:o.LineageDiagram}))),rm=Y.lazy(()=>ul(()=>import("./ReasoningWorkspace-DkmwsOUq.js"),__vite__mapDeps([24,1,13,12,5,2])).then(o=>({default:o.ReasoningWorkspace}))),dm=Y.lazy(()=>ul(()=>import("./SparqlWorkspace-CWf3e1qC.js"),__vite__mapDeps([25,1,26,13,19])).then(o=>({default:o.SparqlWorkspace}))),gm=Y.lazy(()=>ul(()=>import("./VocabularyWorkspace-BJ-ANtWj.js"),__vite__mapDeps([27,1,28,29,30,18,22,16,6,5,17])).then(o=>({default:o.VocabularyWorkspace}))),mm=Y.lazy(()=>ul(()=>import("./RegistryTab-LBMm85WX.js"),__vite__mapDeps([31,1,4,32,29,30])).then(o=>({default:o.RegistryTab}))),hm=Y.lazy(()=>ul(()=>import("./EntityResolutionTab-51cRFvi5.js"),__vite__mapDeps([33,1,4,6,29,30,14])).then(o=>({default:o.EntityResolutionTab}))),pm=Y.lazy(()=>ul(()=>import("./KGOverviewTab-C_uXSGP_.js"),__vite__mapDeps([34,1,6,10])).then(o=>({default:o.KGOverviewTab}))),ym=Y.lazy(()=>ul(()=>import("./OntologySummaryTab-DRrpQ1Sa.js"),__vite__mapDeps([35,1,28,36,29,30,37])).then(o=>({default:o.OntologySummaryTab}))),bm=Y.lazy(()=>ul(()=>import("./KnowledgeEngineeringWorkspace-BQDOs9bj.js"),__vite__mapDeps([38,1,9,10,17,39,13,30,12,37,5,19])).then(o=>({default:o.KnowledgeEngineeringWorkspace}))),vm=Y.lazy(()=>ul(()=>import("./index-BfsN1_uG.js"),__vite__mapDeps([40,1,6,39,32,19,14,29,5,37,30,36,11,10,21,22,23,12,18,26,13])).then(o=>({default:o.OntologyWorkspace}))),xm={checking:"Connecting…",online:"System Online",offline:"Backend Unreachable"},Sm=new d1,zm=Array.from({length:42},(o,c)=>({cx:170+c*73%330,cy:170+c*47%210,r:2+c%3,fill:["#56d364","#58a6ff","#f2b66d","#ff9daf"][c%4]})),Em=[{id:"explore",label:"Knowledge Explorer",hint:"Graph and vocabulary browsing",icon:$d},{id:"analyze",label:"Analyze",hint:"Query and inspect the dataset",icon:k1},{id:"decisions",label:"Decisions",hint:"Decision chains and precedent review",icon:Pd},{id:"enrich",label:"Enrich",hint:"Import, export, and merge workflows",icon:Fd},{id:"manage",label:"Manage",hint:"Lineage and governance tooling",icon:F1},{id:"ontology-hub",label:"Ontology Hub",hint:"Schema governance, registry, and vocabulary management",icon:Id},{id:"knowledge-engineering",label:"学院知识图谱",hint:"导入官网资料、浏览人物关系并向图谱提问",icon:em}],_m=`
  :root {
    --app-bg: #07111f;
    --panel-bg: rgba(7, 17, 31, 0.82);
    --panel-border: rgba(140, 192, 255, 0.14);
    --text-main: #ebf3ff;
    --text-muted: #8fa8c6;
    --accent: #4aa3ff;
    --accent-strong: #7fd0ff;
    --warm: #f2b66d;
    --success: #4cc38a;

    /* ── Shared workspace design tokens ── */
    --ws-bg: #060d1a;
    --ws-surface: rgba(255,255,255,0.028);
    --ws-surface-hover: rgba(74,163,255,0.07);
    --ws-border: rgba(74,163,255,0.13);
    --ws-border-strong: rgba(74,163,255,0.26);
    --ws-text: #ddeeff;
    --ws-text-muted: #5a7a9a;
    --ws-text-dim: #3a5570;
    --ws-accent: #4aa3ff;
    --ws-accent-soft: rgba(74,163,255,0.12);
    --ws-green: #4cc38a;
    --ws-green-soft: rgba(76,195,138,0.12);
    --ws-amber: #f2b66d;
    --ws-amber-soft: rgba(242,182,109,0.12);
    --ws-red: #ff7b72;
    --ws-red-soft: rgba(255,123,114,0.12);
    --ws-purple: #c084fc;
    --ws-purple-soft: rgba(192,132,252,0.1);
    --ws-radius: 14px;
    --ws-radius-sm: 8px;
    --ws-radius-lg: 20px;
  }

  /* ── Shared workspace primitives (available to all workspace components) ── */
  .ws-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: var(--ws-bg);
    overflow: hidden;
  }

  .ws-scroll {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--ws-border) transparent;
  }

  .ws-padded {
    padding: 24px 28px;
  }

  .ws-split {
    display: grid;
    height: 100%;
    overflow: hidden;
  }

  .ws-split--2col { grid-template-columns: 300px 1fr; }
  .ws-split--half { grid-template-columns: 1fr 1fr; }
  .ws-split--rows { grid-template-rows: 1fr auto; }

  .ws-panel {
    background: var(--ws-surface);
    border: 1px solid var(--ws-border);
    border-radius: var(--ws-radius);
    overflow: hidden;
  }

  .ws-panel--inset {
    background: rgba(0,0,0,0.22);
    border: 1px solid rgba(74,163,255,0.09);
    border-radius: var(--ws-radius);
  }

  .ws-card {
    background: var(--ws-surface);
    border: 1px solid var(--ws-border);
    border-radius: var(--ws-radius);
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: border-color 180ms ease, background 180ms ease;
  }

  .ws-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(74,163,255,0.18), transparent);
  }

  .ws-card:hover {
    border-color: var(--ws-border-strong);
    background: var(--ws-surface-hover);
  }

  .ws-eyebrow {
    font-family: "JetBrains Mono", "Fira Code", monospace;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ws-text-muted);
  }

  .ws-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ws-text-muted);
    margin-bottom: 8px;
    display: block;
  }

  .ws-title {
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.035em;
    color: var(--ws-text);
    margin: 0;
  }

  .ws-body {
    font-size: 13px;
    line-height: 1.65;
    color: var(--ws-text-muted);
  }

  .ws-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 16px;
    border-radius: var(--ws-radius-sm);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: 160ms ease;
    border: 1px solid transparent;
  }

  .ws-btn--primary {
    background: linear-gradient(135deg, rgba(74,163,255,0.28), rgba(56,210,160,0.16));
    border-color: rgba(74,163,255,0.4);
    color: #e8f6ff;
    box-shadow: 0 0 0 1px rgba(74,163,255,0.08) inset;
  }

  .ws-btn--primary:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(74,163,255,0.4), rgba(56,210,160,0.24));
    border-color: rgba(74,163,255,0.6);
    box-shadow: 0 6px 20px rgba(74,163,255,0.18);
    transform: translateY(-1px);
  }

  .ws-btn--ghost {
    background: rgba(255,255,255,0.04);
    border-color: var(--ws-border);
    color: var(--ws-text-muted);
  }

  .ws-btn--ghost:hover:not(:disabled) {
    background: var(--ws-surface-hover);
    border-color: var(--ws-border-strong);
    color: var(--ws-text);
  }

  .ws-btn--danger {
    background: var(--ws-red-soft);
    border-color: rgba(255,123,114,0.3);
    color: #ff9e97;
  }

  .ws-btn--success {
    background: var(--ws-green-soft);
    border-color: rgba(76,195,138,0.3);
    color: #6ee7b7;
  }

  .ws-btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none !important;
  }

  .ws-input {
    width: 100%;
    padding: 9px 12px;
    background: rgba(0,0,0,0.28);
    border: 1px solid var(--ws-border);
    border-radius: var(--ws-radius-sm);
    color: var(--ws-text);
    font-size: 13px;
    outline: none;
    transition: border-color 160ms ease;
    box-sizing: border-box;
  }

  .ws-input:focus {
    border-color: var(--ws-accent);
    box-shadow: 0 0 0 3px rgba(74,163,255,0.1);
  }

  .ws-textarea {
    width: 100%;
    padding: 12px;
    background: rgba(0,0,0,0.28);
    border: 1px solid var(--ws-border);
    border-radius: var(--ws-radius-sm);
    color: var(--ws-text);
    font-family: "JetBrains Mono", "Fira Code", "Consolas", monospace;
    font-size: 12.5px;
    line-height: 1.7;
    resize: vertical;
    outline: none;
    transition: border-color 160ms ease;
    box-sizing: border-box;
  }

  .ws-textarea:focus {
    border-color: var(--ws-accent);
    box-shadow: 0 0 0 3px rgba(74,163,255,0.1);
  }

  .ws-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  .ws-pill--accent { color: #7fd0ff; background: var(--ws-accent-soft); border: 1px solid rgba(74,163,255,0.22); }
  .ws-pill--green  { color: #6ee7b7; background: var(--ws-green-soft);  border: 1px solid rgba(76,195,138,0.28); }
  .ws-pill--amber  { color: #fbbf24; background: var(--ws-amber-soft);  border: 1px solid rgba(242,182,109,0.28); }
  .ws-pill--red    { color: #fca5a5; background: var(--ws-red-soft);    border: 1px solid rgba(255,123,114,0.28); }
  .ws-pill--purple { color: #d8b4fe; background: var(--ws-purple-soft); border: 1px solid rgba(192,132,252,0.22); }
  .ws-pill--mono   { color: var(--ws-text-muted); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }

  .ws-divider {
    height: 1px;
    background: var(--ws-border);
    margin: 0;
  }

  .ws-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 48px 24px;
    gap: 10px;
    color: var(--ws-text-muted);
  }

  .ws-empty-icon { opacity: 0.35; margin-bottom: 4px; }
  .ws-empty-title { font-size: 14px; font-weight: 700; color: var(--ws-text); }
  .ws-empty-body { font-size: 12px; line-height: 1.5; max-width: 36ch; }

  .ws-sidebar {
    border-right: 1px solid var(--ws-border);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: rgba(0,0,0,0.12);
  }

  .ws-sidebar-header {
    padding: 18px 16px 14px;
    border-bottom: 1px solid var(--ws-border);
    flex-shrink: 0;
  }

  .ws-sidebar-body {
    flex: 1;
    overflow-y: auto;
    padding: 10px 10px;
    scrollbar-width: thin;
    scrollbar-color: var(--ws-border) transparent;
  }

  .ws-list-item {
    width: 100%;
    text-align: left;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid transparent;
    background: transparent;
    color: var(--ws-text-muted);
    cursor: pointer;
    transition: 140ms ease;
    display: block;
  }

  .ws-list-item:hover {
    background: var(--ws-surface);
    border-color: var(--ws-border);
    color: var(--ws-text);
  }

  .ws-list-item--active {
    background: var(--ws-accent-soft);
    border-color: var(--ws-border-strong);
    color: #e8f6ff;
  }

  .ws-stat-grid {
    display: grid;
    gap: 12px;
  }

  .ws-stat-grid--3 { grid-template-columns: repeat(3, 1fr); }
  .ws-stat-grid--4 { grid-template-columns: repeat(4, 1fr); }
  .ws-stat-grid--2 { grid-template-columns: repeat(2, 1fr); }

  .ws-stat-card {
    padding: 18px 20px;
    border-radius: var(--ws-radius);
    border: 1px solid var(--ws-border);
    background: var(--ws-surface);
    position: relative;
    overflow: hidden;
  }

  .ws-stat-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(74,163,255,0.2), transparent);
  }

  .ws-stat-value {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--ws-text);
    line-height: 1;
  }

  .ws-stat-label {
    margin-top: 6px;
    font-size: 11px;
    font-weight: 600;
    color: var(--ws-text-dim);
    letter-spacing: 0.04em;
  }

  @keyframes ws-spin { to { transform: rotate(360deg); } }
  .ws-spin { animation: ws-spin 0.8s linear infinite; }

  @keyframes ws-skeleton {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
  }

  .ws-skeleton {
    background: rgba(255,255,255,0.06);
    border-radius: 8px;
    animation: ws-skeleton 1.4s ease-in-out infinite;
  }

  @keyframes ws-slide-up {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .ws-animate-in { animation: ws-slide-up 0.22s ease both; }

  .app-shell {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: var(--text-main);
    background:
      radial-gradient(circle at top left, rgba(74, 163, 255, 0.12), transparent 32%),
      radial-gradient(circle at bottom right, rgba(242, 182, 109, 0.08), transparent 26%),
      linear-gradient(180deg, #091322 0%, #050b15 100%);
    font-family: "Segoe UI", "SF Pro Display", sans-serif;
  }

  .app-rail {
    width: 88px;
    padding: 20px 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-right: 1px solid var(--panel-border);
    background: rgba(3, 9, 18, 0.92);
    backdrop-filter: blur(18px);
  }

  .brand-pill {
    width: 100%;
    min-height: 56px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    color: var(--text-main);
    background: linear-gradient(135deg, rgba(74, 163, 255, 0.22), rgba(127, 208, 255, 0.08));
    border: 1px solid rgba(127, 208, 255, 0.18);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
  }

  .nav-button {
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-muted);
    border-radius: 18px;
    min-height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: 160ms ease;
  }

  .nav-button:hover {
    color: var(--text-main);
    background: rgba(74, 163, 255, 0.08);
    border-color: rgba(74, 163, 255, 0.12);
  }

  .nav-button[data-active='true'] {
    color: var(--text-main);
    background: linear-gradient(180deg, rgba(74, 163, 255, 0.18), rgba(74, 163, 255, 0.08));
    border-color: rgba(127, 208, 255, 0.22);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
  }

  .nav-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .language-toggle {
    width: 100%;
    min-height: 42px;
    margin-top: auto;
    border: 1px solid rgba(127, 208, 255, 0.18);
    border-radius: 14px;
    background: rgba(74, 163, 255, 0.07);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition: 160ms ease;
  }

  .language-toggle:hover {
    color: var(--text-main);
    border-color: rgba(127, 208, 255, 0.34);
    background: rgba(74, 163, 255, 0.12);
  }

  .workspace-shell {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .workspace-header {
    padding: 14px 22px;
    border-bottom: 1px solid var(--panel-border);
    background: linear-gradient(180deg, rgba(7, 17, 31, 0.94), rgba(7, 17, 31, 0.82));
    backdrop-filter: blur(18px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    min-height: 68px;
  }

  .workspace-header--compact {
    min-height: 60px;
    padding: 10px 18px;
    background: linear-gradient(180deg, rgba(7, 17, 31, 0.92), rgba(7, 17, 31, 0.72));
  }

  .workspace-header--compact .workspace-title {
    font-size: 16px;
  }

  .workspace-header--compact .workspace-subtitle {
    font-size: 11px;
  }

  .workspace-header-main {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .workspace-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(74, 163, 255, 0.08);
    border: 1px solid rgba(127, 208, 255, 0.14);
    color: var(--text-muted);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .workspace-kicker::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--accent-strong), var(--warm));
    box-shadow: 0 0 14px rgba(127, 208, 255, 0.45);
  }

  .workspace-title-block {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .workspace-title {
    margin: 0;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .workspace-subtitle {
    color: var(--text-muted);
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .workspace-tabs {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .workspace-tab {
    border: 1px solid rgba(127, 208, 255, 0.18);
    background: rgba(9, 19, 34, 0.56);
    color: var(--text-muted);
    border-radius: 999px;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    transition: 160ms ease;
    white-space: nowrap;
  }

  .workspace-tab[data-active='true'] {
    color: var(--text-main);
    background: rgba(74, 163, 255, 0.16);
    border-color: rgba(127, 208, 255, 0.3);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
  }

  .workspace-body {
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  /* ── Welcome page ─────────────────────────────────────── */
  .landing-page {
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    background:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(74, 163, 255, 0.18) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 90%, rgba(242, 182, 109, 0.1) 0%, transparent 50%),
      linear-gradient(180deg, #060d1a 0%, #03070f 100%);
    scrollbar-width: thin;
    scrollbar-color: rgba(74,163,255,0.18) transparent;
  }

  .landing-page::before {
    content: "";
    position: fixed;
    inset: 0 0 0 88px;
    pointer-events: none;
    background:
      repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(74,163,255,0.035) 80px),
      repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(74,163,255,0.025) 80px);
    mask-image: radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 100%);
  }

  .landing-shell {
    position: relative;
    z-index: 1;
    width: min(1360px, 100%);
    margin: 0 auto;
    padding: clamp(28px, 4vw, 56px) clamp(20px, 3vw, 48px);
    display: flex;
    flex-direction: column;
    gap: 56px;
  }

  /* ── Hero ──────────────────────────────────────────────── */
  .landing-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(380px, 520px);
    gap: clamp(24px, 3vw, 48px);
    align-items: center;
    min-height: min(580px, calc(100vh - 140px));
  }

  .landing-copy {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .landing-status-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    --status-color: #4cc38a;
    --status-shadow-a: 0 0 0 3px rgba(76, 195, 138, 0.22), 0 0 12px rgba(76, 195, 138, 0.5);
    --status-shadow-b: 0 0 0 5px rgba(76, 195, 138, 0.1), 0 0 20px rgba(76, 195, 138, 0.35);
  }

  .landing-status-bar[data-status='checking'] {
    --status-color: #f2b66d;
    --status-shadow-a: 0 0 0 3px rgba(242, 182, 109, 0.22), 0 0 12px rgba(242, 182, 109, 0.5);
    --status-shadow-b: 0 0 0 5px rgba(242, 182, 109, 0.1), 0 0 20px rgba(242, 182, 109, 0.35);
  }

  .landing-status-bar[data-status='offline'] {
    --status-color: #ff7b72;
    --status-shadow-a: 0 0 0 3px rgba(255, 123, 114, 0.22), 0 0 12px rgba(255, 123, 114, 0.5);
    --status-shadow-b: 0 0 0 5px rgba(255, 123, 114, 0.1), 0 0 20px rgba(255, 123, 114, 0.35);
  }

  .landing-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--status-color);
    box-shadow: var(--status-shadow-a);
    animation: landing-pulse 2.4s ease-in-out infinite;
  }

  .landing-status-text {
    color: var(--status-color);
    font: 700 11px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .landing-status-divider {
    width: 1px;
    height: 14px;
    background: rgba(158, 217, 255, 0.2);
  }

  .landing-status-version {
    color: #5a7a9a;
    font: 600 11px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.06em;
  }

  .landing-kicker {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 5px 12px 5px 8px;
    border-radius: 999px;
    border: 1px solid rgba(74, 163, 255, 0.3);
    background: rgba(74, 163, 255, 0.08);
    color: #7fd0ff;
    font: 700 11px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    width: fit-content;
    margin-bottom: 20px;
  }

  .landing-kicker-mark {
    width: 16px;
    height: 16px;
    border-radius: 6px;
    background: linear-gradient(135deg, #4aa3ff, #56d3a0);
    display: grid;
    place-items: center;
    flex: 0 0 auto;
  }

  .landing-kicker-node { display: none; }

  .landing-kicker-mark::after {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: rgba(3, 10, 20, 0.8);
  }

  .landing-title {
    margin: 0 0 20px;
    color: #f0f7ff;
    font-family: "Inter", "Segoe UI", sans-serif;
    font-size: clamp(38px, 4.8vw, 72px);
    line-height: 1.08;
    letter-spacing: -0.04em;
    font-weight: 800;
  }

  .landing-title span {
    color: transparent;
    background: linear-gradient(100deg, #7fd0ff 0%, #4cc38a 50%, #f2b66d 100%);
    -webkit-background-clip: text;
    background-clip: text;
  }

  .landing-subtitle {
    margin: 0 0 32px;
    color: #7a99b8;
    font-size: clamp(14px, 1.2vw, 17px);
    line-height: 1.7;
    max-width: 54ch;
  }

  .landing-cta-row {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .landing-cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 22px;
    border-radius: 12px;
    border: 1px solid rgba(74, 163, 255, 0.5);
    background: linear-gradient(135deg, rgba(74, 163, 255, 0.28), rgba(56, 210, 160, 0.18));
    color: #e8f6ff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: 180ms ease;
    box-shadow: 0 0 0 1px rgba(74, 163, 255, 0.1) inset, 0 8px 24px rgba(74, 163, 255, 0.15);
  }

  .landing-cta-primary:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, rgba(74, 163, 255, 0.38), rgba(56, 210, 160, 0.26));
    box-shadow: 0 0 0 1px rgba(74, 163, 255, 0.18) inset, 0 14px 32px rgba(74, 163, 255, 0.22);
  }

  .landing-cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 18px;
    border-radius: 12px;
    border: 1px solid rgba(158, 217, 255, 0.14);
    background: rgba(255, 255, 255, 0.04);
    color: #8fafc8;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: 180ms ease;
  }

  .landing-cta-secondary:hover {
    border-color: rgba(158, 217, 255, 0.26);
    color: #c5dcef;
    background: rgba(255, 255, 255, 0.07);
  }

  /* ── Preview panel ─────────────────────────────────────── */
  .landing-preview {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    border: 1px solid rgba(74, 163, 255, 0.18);
    background:
      radial-gradient(circle at 40% 30%, rgba(74, 163, 255, 0.14), transparent 46%),
      radial-gradient(circle at 70% 70%, rgba(242, 182, 109, 0.1), transparent 38%),
      linear-gradient(145deg, rgba(8, 17, 28, 0.96), rgba(3, 8, 14, 0.88));
    box-shadow: 0 24px 72px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.04) inset;
    aspect-ratio: 4/3.2;
    min-height: 340px;
  }

  .landing-preview-topbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 38px;
    background: rgba(4, 10, 18, 0.82);
    border-bottom: 1px solid rgba(74, 163, 255, 0.1);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    padding: 0 14px;
    gap: 8px;
  }

  .landing-preview-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
  }

  .landing-preview-dot:nth-child(1) { background: rgba(255, 95, 86, 0.7); }
  .landing-preview-dot:nth-child(2) { background: rgba(255, 189, 46, 0.7); }
  .landing-preview-dot:nth-child(3) { background: rgba(39, 201, 63, 0.7); }

  .landing-preview-tab {
    margin-left: 12px;
    padding: 3px 10px;
    border-radius: 6px;
    background: rgba(74, 163, 255, 0.12);
    border: 1px solid rgba(74, 163, 255, 0.2);
    color: #7fd0ff;
    font: 600 10px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.06em;
  }

  .landing-preview-orbit {
    position: absolute;
    inset: 38px 0 0;
    opacity: 0.95;
  }

  .landing-preview-orbit svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .landing-preview-line {
    stroke: rgba(74, 163, 255, 0.3);
    stroke-width: 1.2;
    fill: none;
    stroke-dasharray: 4 3;
  }

  .landing-preview-line--warm {
    stroke: rgba(242, 182, 109, 0.3);
  }

  .landing-preview-line--mint {
    stroke: rgba(76, 195, 138, 0.28);
  }

  .landing-node {
    transform-origin: center;
    animation: landing-float 7s ease-in-out infinite;
  }

  .landing-node:nth-child(2n) { animation-delay: -2.2s; }
  .landing-node:nth-child(3n) { animation-delay: -4.1s; }

  .landing-command-card,
  .landing-dossier-card,
  .landing-timeline-card {
    position: absolute;
    border: 1px solid rgba(74, 163, 255, 0.16);
    background: rgba(3, 9, 18, 0.84);
    backdrop-filter: blur(20px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04) inset;
  }

  .landing-command-card {
    top: 50px;
    left: 16px;
    right: 16px;
    border-radius: 14px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .landing-command-icon {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    color: #56d3a0;
    background: rgba(76, 195, 138, 0.1);
    border: 1px solid rgba(76, 195, 138, 0.2);
    flex: 0 0 auto;
  }

  .landing-command-label {
    color: #c8dff0;
    font-size: 12px;
    font-weight: 700;
  }

  .landing-command-meta {
    margin-top: 2px;
    color: #4a6a85;
    font: 500 10px/1 "JetBrains Mono", monospace;
  }

  .landing-dossier-card {
    right: 14px;
    bottom: 80px;
    width: min(210px, calc(100% - 28px));
    border-radius: 16px;
    padding: 14px;
  }

  .landing-dossier-kicker {
    color: #56d3a0;
    font: 700 9px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .landing-dossier-title {
    margin-top: 6px;
    color: #e8f4ff;
    font: 800 20px/1 "Inter", sans-serif;
    letter-spacing: -0.04em;
  }

  .landing-dossier-row {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    color: #5e7d98;
    font-size: 10px;
    font-weight: 600;
  }

  .landing-dossier-row strong { color: #f2b66d; font-weight: 700; }

  .landing-timeline-card {
    left: 14px;
    right: 14px;
    bottom: 14px;
    border-radius: 12px;
    padding: 10px 12px;
  }

  .landing-timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .landing-timeline-title {
    color: #5e7d98;
    font: 700 9px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .landing-timeline-badge {
    color: #7fd0ff;
    font: 700 9px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.06em;
  }

  .landing-timeline-track {
    position: relative;
    height: 4px;
    border-radius: 999px;
    background: rgba(74, 163, 255, 0.1);
    overflow: hidden;
  }

  .landing-timeline-track::after {
    content: "";
    position: absolute;
    inset: 0 28% 0 0;
    border-radius: inherit;
    background: linear-gradient(90deg, #4cc38a, #4aa3ff, #f2b66d);
  }

  .landing-timeline-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
    color: #3a5570;
    font: 600 9px/1 "JetBrains Mono", monospace;
  }

  /* ── Metrics strip ─────────────────────────────────────── */
  .landing-metrics {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }

  .landing-metric {
    padding: 18px 20px;
    border-radius: 16px;
    border: 1px solid rgba(158, 217, 255, 0.09);
    background: rgba(255, 255, 255, 0.025);
    position: relative;
    overflow: hidden;
    transition: border-color 200ms ease;
  }

  .landing-metric::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(158, 217, 255, 0.2), transparent);
  }

  .landing-metric:hover {
    border-color: rgba(158, 217, 255, 0.18);
  }

  .landing-metric-value {
    color: #ddeeff;
    font: 800 28px/1 "Inter", sans-serif;
    letter-spacing: -0.04em;
  }

  .landing-metric[data-tone='mint'] .landing-metric-value { color: #56d3a0; }
  .landing-metric[data-tone='amber'] .landing-metric-value { color: #f2b66d; }
  .landing-metric[data-tone='rose'] .landing-metric-value { color: #ff9daf; }
  .landing-metric[data-tone='cyan'] .landing-metric-value { color: #7fd0ff; }

  .landing-metric-label {
    margin-top: 6px;
    color: #4a6a85;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  /* ── Workspace grid ────────────────────────────────────── */
  .landing-section-header {
    display: flex;
    align-items: baseline;
    gap: 14px;
    margin-bottom: 16px;
  }

  .landing-section-title {
    color: #c8dff0;
    font: 700 13px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0;
  }

  .landing-section-line {
    flex: 1;
    height: 1px;
    background: rgba(74, 163, 255, 0.1);
  }

  .landing-workspace-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .landing-workspace-card {
    position: relative;
    overflow: hidden;
    padding: 22px;
    border-radius: 18px;
    border: 1px solid rgba(158, 217, 255, 0.09);
    background: rgba(255, 255, 255, 0.025);
    cursor: pointer;
    text-align: left;
    color: inherit;
    transition: border-color 200ms ease, background 200ms ease, transform 200ms ease, box-shadow 200ms ease;
  }

  .landing-workspace-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(158, 217, 255, 0.16), transparent);
    opacity: 0;
    transition: opacity 200ms ease;
  }

  .landing-workspace-card:hover {
    border-color: rgba(74, 163, 255, 0.24);
    background: rgba(74, 163, 255, 0.06);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.28);
  }

  .landing-workspace-card:hover::before { opacity: 1; }

  .landing-workspace-card--primary {
    grid-column: span 3;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 24px;
    border-color: rgba(76, 195, 138, 0.22);
    background: linear-gradient(135deg, rgba(76, 195, 138, 0.08), rgba(74, 163, 255, 0.05));
  }

  .landing-workspace-card--primary:hover {
    border-color: rgba(76, 195, 138, 0.38);
    background: linear-gradient(135deg, rgba(76, 195, 138, 0.12), rgba(74, 163, 255, 0.08));
    box-shadow: 0 12px 40px rgba(76, 195, 138, 0.12);
  }

  .landing-workspace-card-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    color: #7fd0ff;
    background: rgba(74, 163, 255, 0.1);
    border: 1px solid rgba(74, 163, 255, 0.2);
    margin-bottom: 14px;
  }

  .landing-workspace-card--primary .landing-workspace-card-icon {
    color: #56d3a0;
    background: rgba(76, 195, 138, 0.1);
    border-color: rgba(76, 195, 138, 0.22);
    width: 48px;
    height: 48px;
    border-radius: 14px;
    margin-bottom: 0;
  }

  .landing-workspace-card-eyebrow {
    color: #56d3a0;
    font: 700 10px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .landing-workspace-card-title {
    color: #e2effb;
    font: 700 16px/1.2 "Inter", sans-serif;
    letter-spacing: -0.025em;
    margin-bottom: 6px;
  }

  .landing-workspace-card--primary .landing-workspace-card-title {
    font-size: 20px;
  }

  .landing-workspace-card-desc {
    color: #4a6a85;
    font-size: 12px;
    line-height: 1.5;
    max-width: 36ch;
  }

  .landing-workspace-card-arrow {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    color: #56d3a0;
    background: rgba(76, 195, 138, 0.1);
    border: 1px solid rgba(76, 195, 138, 0.2);
    flex: 0 0 auto;
    transition: 180ms ease;
  }

  .landing-workspace-card--primary:hover .landing-workspace-card-arrow {
    background: rgba(76, 195, 138, 0.18);
    transform: translateX(3px);
  }

  /* ── Capability band ───────────────────────────────────── */
  .landing-capability-band {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    padding: 14px 18px;
    border: 1px solid rgba(74, 163, 255, 0.1);
    border-radius: 16px;
    background: rgba(3, 9, 18, 0.6);
    backdrop-filter: blur(12px);
  }

  .landing-capability-label {
    color: #3a5570;
    font: 700 10px/1 "JetBrains Mono", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-right: 4px;
    white-space: nowrap;
  }

  .landing-capability {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 28px;
    padding: 0 10px;
    border-radius: 999px;
    color: #5a7a9a;
    background: rgba(74, 163, 255, 0.05);
    border: 1px solid rgba(74, 163, 255, 0.12);
    font-size: 11px;
    font-weight: 600;
    transition: 160ms ease;
    cursor: default;
  }

  .landing-capability:hover {
    color: #9be8ff;
    border-color: rgba(74, 163, 255, 0.28);
    background: rgba(74, 163, 255, 0.1);
  }

  /* ── Animations ────────────────────────────────────────── */
  @keyframes landing-float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-8px) scale(1.05); }
  }

  @keyframes landing-pulse {
    0%, 100% { box-shadow: var(--status-shadow-a); }
    50% { box-shadow: var(--status-shadow-b); }
  }

  .workspace-loading {
    height: 100%;
    display: grid;
    place-items: center;
    color: var(--text-muted);
    background: linear-gradient(180deg, rgba(7, 17, 31, 0.8), rgba(5, 11, 21, 0.92));
    font-size: 14px;
  }

  @media (max-width: 980px) {
    .workspace-header {
      flex-direction: column;
      align-items: stretch;
      min-height: auto;
      padding: 12px 18px;
    }

    .workspace-header-main {
      justify-content: space-between;
    }

    .workspace-subtitle {
      white-space: normal;
    }

    .workspace-tabs {
      justify-content: flex-start;
    }

    .landing-hero {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .landing-workspace-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .landing-workspace-card--primary {
      grid-column: span 2;
    }

    .landing-metrics {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .landing-preview {
      aspect-ratio: 16/10;
      min-height: 320px;
    }
  }

  @media (max-width: 680px) {
    .app-rail {
      width: 72px;
      padding: 14px 9px;
    }

    .landing-shell {
      padding: 20px 16px;
      gap: 36px;
    }

    .landing-workspace-grid {
      grid-template-columns: 1fr;
    }

    .landing-workspace-card--primary {
      grid-column: span 1;
      grid-template-columns: 1fr;
    }

    .landing-workspace-card-arrow {
      display: none;
    }

    .landing-metrics {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .landing-preview {
      min-height: 280px;
    }

    .landing-dossier-card {
      left: 10px;
      right: 10px;
      width: auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .landing-node,
    .landing-workspace-card,
    .landing-cta-primary,
    .landing-cta-secondary {
      animation: none;
      transition: none;
    }
  }
`;function ma(o){const c=pu.c(23),{title:_,subtitle:g,tabs:w,compact:j,kicker:k,children:B}=o,O=j===void 0?!1:j,v=k===void 0?"Workspace":k,D=`workspace-header${O?" workspace-header--compact":""}`;let T;c[0]!==v?(T=r.jsx("div",{className:"workspace-kicker",children:v}),c[0]=v,c[1]=T):T=c[1];let R;c[2]!==_?(R=r.jsx("h1",{className:"workspace-title",children:_}),c[2]=_,c[3]=R):R=c[3];let Q;c[4]!==g?(Q=g?r.jsx("div",{className:"workspace-subtitle",children:g}):null,c[4]=g,c[5]=Q):Q=c[5];let te;c[6]!==R||c[7]!==Q?(te=r.jsxs("div",{className:"workspace-title-block",children:[R,Q]}),c[6]=R,c[7]=Q,c[8]=te):te=c[8];let V;c[9]!==T||c[10]!==te?(V=r.jsxs("div",{className:"workspace-header-main",children:[T,te]}),c[9]=T,c[10]=te,c[11]=V):V=c[11];let ee;c[12]!==w?(ee=w?r.jsx("div",{className:"workspace-tabs",children:w}):null,c[12]=w,c[13]=ee):ee=c[13];let ue;c[14]!==D||c[15]!==V||c[16]!==ee?(ue=r.jsxs("header",{className:D,children:[V,ee]}),c[14]=D,c[15]=V,c[16]=ee,c[17]=ue):ue=c[17];let de;c[18]!==B?(de=r.jsx("div",{className:"workspace-body",children:B}),c[18]=B,c[19]=de):de=c[19];let ae;return c[20]!==ue||c[21]!==de?(ae=r.jsxs("section",{className:"workspace-shell",children:[ue,de]}),c[20]=ue,c[21]=de,c[22]=ae):ae=c[22],ae}function ha(){const o=pu.c(1);let c;return o[0]===Symbol.for("react.memo_cache_sentinel")?(c=r.jsx("div",{className:"workspace-loading",children:"Loading workspace…"}),o[0]=c):c=o[0],c}function Kd(o,c){for(const _ of c){const g=o[_];if(typeof g=="number"&&Number.isFinite(g))return g}return null}function Jd(o,c){return o===null?c:o.toLocaleString()}function Tm(o){const c=pu.c(106),{onOpenNetwork:_,onOpenKnowledgeGraph:g,onOpenVocabulary:w,onOpenReasoning:j,onOpenImport:k,onOpenDecisions:B,onOpenManage:O}=o;let v;c[0]===Symbol.for("react.memo_cache_sentinel")?(v={nodes:null,edges:null,status:"checking"},c[0]=v):v=c[0];const[D,T]=Y.useState(v);let R,Q;c[1]===Symbol.for("react.memo_cache_sentinel")?(R=()=>{const ai=new AbortController;return fetch("/api/graph/stats",{signal:ai.signal}).then(Mm).then(Jl=>{if(!Jl){T(Dm);return}T({nodes:Kd(Jl,["node_count","nodeCount","nodes"]),edges:Kd(Jl,["edge_count","edgeCount","edges"]),status:"online"})}).catch(Jl=>{Jl instanceof DOMException&&Jl.name==="AbortError"||T(Nm)}),()=>ai.abort()},Q=[],c[1]=R,c[2]=Q):(R=c[1],Q=c[2]),Y.useEffect(R,Q);const te=D.status==="online";let V;c[3]!==D.nodes?(V=Jd(D.nodes,"Live"),c[3]=D.nodes,c[4]=V):V=c[4];let ee;c[5]!==V?(ee={label:"Knowledge nodes",value:V,tone:"cyan"},c[5]=V,c[6]=ee):ee=c[6];let ue;c[7]!==D.edges?(ue=Jd(D.edges,"Ready"),c[7]=D.edges,c[8]=ue):ue=c[8];let de;c[9]!==ue?(de={label:"Relationships mapped",value:ue,tone:"mint"},c[9]=ue,c[10]=de):de=c[10];let ae;c[11]===Symbol.for("react.memo_cache_sentinel")?(ae={label:"Graph modes",value:"3",tone:"amber"},c[11]=ae):ae=c[11];const Ae=te?"Dataset online":"Ready to explore",ve=te?"Active":"Standby";let pe;c[12]!==ve||c[13]!==Ae?(pe={label:Ae,value:ve,tone:"rose"},c[12]=ve,c[13]=Ae,c[14]=pe):pe=c[14];let we;c[15]!==pe||c[16]!==ee||c[17]!==de?(we=[ee,de,ae,pe],c[15]=pe,c[16]=ee,c[17]=de,c[18]=we):we=c[18];const xe=we;let Re;c[19]!==w?(Re={label:"Vocabulary",description:"Schemes and terms",icon:$d,onClick:w},c[19]=w,c[20]=Re):Re=c[20];let $e;c[21]!==j?($e={label:"Analyze",description:"Inference and queries",icon:Ld,onClick:j},c[21]=j,c[22]=$e):$e=c[22];let Oe;c[23]!==B?(Oe={label:"Decisions",description:"Chains and precedents",icon:Pd,onClick:B},c[23]=B,c[24]=Oe):Oe=c[24];let ge;c[25]!==k?(ge={label:"Enrich",description:"Import and resolve",icon:Fd,onClick:k},c[25]=k,c[26]=ge):ge=c[26];let He;c[27]!==O?(He={label:"Manage",description:"Lineage and ontology",icon:Xd,onClick:O},c[27]=O,c[28]=He):He=c[28];let Qe;c[29]!==Re||c[30]!==$e||c[31]!==Oe||c[32]!==ge||c[33]!==He?(Qe=[Re,$e,Oe,ge,He],c[29]=Re,c[30]=$e,c[31]=Oe,c[32]=ge,c[33]=He,c[34]=Qe):Qe=c[34];const ke=Qe;let x;c[35]===Symbol.for("react.memo_cache_sentinel")?(x=r.jsx("div",{className:"landing-status-dot"}),c[35]=x):x=c[35];const A=xm[D.status];let C;c[36]!==A?(C=r.jsx("span",{className:"landing-status-text",children:A}),c[36]=A,c[37]=C):C=c[37];let $,F;c[38]===Symbol.for("react.memo_cache_sentinel")?($=r.jsx("div",{className:"landing-status-divider"}),F=r.jsx("span",{className:"landing-status-version",children:"Semantica v2 · 本地知识图谱"}),c[38]=$,c[39]=F):($=c[38],F=c[39]);let Se;c[40]!==D.status||c[41]!==C?(Se=r.jsxs("div",{className:"landing-status-bar","data-status":D.status,children:[x,C,$,F]}),c[40]=D.status,c[41]=C,c[42]=Se):Se=c[42];let ce;c[43]===Symbol.for("react.memo_cache_sentinel")?(ce=r.jsxs("div",{className:"landing-kicker","aria-label":"Product category",children:[r.jsx("span",{className:"landing-kicker-mark","aria-hidden":"true"}),"港中深数据科学学院"]}),c[43]=ce):ce=c[43];let J,be;c[44]===Symbol.for("react.memo_cache_sentinel")?(J=r.jsxs("h1",{className:"landing-title",children:["港中深数据科学学院",r.jsx("br",{}),r.jsx("span",{children:"知识图谱"})]}),be=r.jsx("p",{className:"landing-subtitle",children:"浏览教师、培养项目和研究主题之间的联系，向本地图谱提问， 并查看每个回答所依据的学院官网页面。"}),c[44]=J,c[45]=be):(J=c[44],be=c[45]);let Fe;c[46]===Symbol.for("react.memo_cache_sentinel")?(Fe=r.jsx(Hf,{size:16}),c[46]=Fe):Fe=c[46];let cl;c[47]===Symbol.for("react.memo_cache_sentinel")?(cl=r.jsx(Vd,{size:15}),c[47]=cl):cl=c[47];let Dl;c[48]!==_?(Dl=r.jsxs("button",{className:"landing-cta-primary",type:"button",onClick:_,children:[Fe,"浏览学院知识图谱",cl]}),c[48]=_,c[49]=Dl):Dl=c[49];let Xl;c[50]===Symbol.for("react.memo_cache_sentinel")?(Xl=r.jsx(Ld,{size:15}),c[50]=Xl):Xl=c[50];let fl;c[51]!==g?(fl=r.jsxs("button",{className:"landing-cta-secondary",type:"button",onClick:g,children:[Xl,"向图谱提问"]}),c[51]=g,c[52]=fl):fl=c[52];let Bl;c[53]!==Dl||c[54]!==fl?(Bl=r.jsxs("div",{className:"landing-cta-row",children:[Dl,fl]}),c[53]=Dl,c[54]=fl,c[55]=Bl):Bl=c[55];let Ml;c[56]!==Se||c[57]!==Bl?(Ml=r.jsxs("div",{className:"landing-copy",children:[Se,ce,J,be,Bl]}),c[56]=Se,c[57]=Bl,c[58]=Ml):Ml=c[58];let gt;c[59]===Symbol.for("react.memo_cache_sentinel")?(gt=r.jsxs("div",{className:"landing-preview-topbar","aria-hidden":"true",children:[r.jsx("div",{className:"landing-preview-dot"}),r.jsx("div",{className:"landing-preview-dot"}),r.jsx("div",{className:"landing-preview-dot"}),r.jsx("div",{className:"landing-preview-tab",children:"Semantica Explorer"})]}),c[59]=gt):gt=c[59];let Lt;c[60]===Symbol.for("react.memo_cache_sentinel")?(Lt=r.jsxs("div",{className:"landing-command-card",children:[r.jsx("div",{className:"landing-command-icon",children:r.jsx(W1,{size:15})}),r.jsxs("div",{children:[r.jsx("div",{className:"landing-command-label",children:"搜索教师、项目或研究主题"}),r.jsx("div",{className:"landing-command-meta",children:"按关系远近查看 · 聚焦条目 · 查找联系路线"})]})]}),c[60]=Lt):Lt=c[60];let yl,mt,ht,pa,Xt;c[61]===Symbol.for("react.memo_cache_sentinel")?(yl=r.jsx("path",{className:"landing-preview-line",d:"M110 310 C200 110 390 90 510 240"}),mt=r.jsx("path",{className:"landing-preview-line landing-preview-line--warm",d:"M120 190 C240 270 374 182 508 340"}),ht=r.jsx("path",{className:"landing-preview-line landing-preview-line--mint",d:"M168 378 C274 200 392 218 488 144"}),pa=r.jsx("path",{className:"landing-preview-line landing-preview-line--warm",d:"M204 118 C318 340 408 368 526 284"}),Xt=r.jsx("path",{className:"landing-preview-line",d:"M110 310 C180 350 260 360 340 320 C420 280 480 260 510 240"}),c[61]=yl,c[62]=mt,c[63]=ht,c[64]=pa,c[65]=Xt):(yl=c[61],mt=c[62],ht=c[63],pa=c[64],Xt=c[65]);let pt;c[66]===Symbol.for("react.memo_cache_sentinel")?(pt=r.jsxs("g",{className:"landing-node",children:[r.jsx("circle",{cx:"110",cy:"310",r:"10",fill:"#4cc38a",fillOpacity:"0.9"}),r.jsx("circle",{cx:"110",cy:"310",r:"20",fill:"none",stroke:"rgba(76,195,138,0.24)",strokeWidth:"1.5"}),r.jsx("circle",{cx:"110",cy:"310",r:"34",fill:"none",stroke:"rgba(76,195,138,0.1)",strokeWidth:"1"})]}),c[66]=pt):pt=c[66];let yt;c[67]===Symbol.for("react.memo_cache_sentinel")?(yt=r.jsxs("g",{className:"landing-node",children:[r.jsx("circle",{cx:"204",cy:"118",r:"7",fill:"#4aa3ff",fillOpacity:"0.9"}),r.jsx("circle",{cx:"204",cy:"118",r:"16",fill:"none",stroke:"rgba(74,163,255,0.24)",strokeWidth:"1.5"})]}),c[67]=yt):yt=c[67];let bt;c[68]===Symbol.for("react.memo_cache_sentinel")?(bt=r.jsxs("g",{className:"landing-node",children:[r.jsx("circle",{cx:"510",cy:"240",r:"13",fill:"#f2b66d",fillOpacity:"0.9"}),r.jsx("circle",{cx:"510",cy:"240",r:"26",fill:"none",stroke:"rgba(242,182,109,0.26)",strokeWidth:"1.5"}),r.jsx("circle",{cx:"510",cy:"240",r:"40",fill:"none",stroke:"rgba(242,182,109,0.1)",strokeWidth:"1"})]}),c[68]=bt):bt=c[68];let ya;c[69]===Symbol.for("react.memo_cache_sentinel")?(ya=r.jsxs("g",{className:"landing-node",children:[r.jsx("circle",{cx:"488",cy:"144",r:"6",fill:"#ff9daf",fillOpacity:"0.9"}),r.jsx("circle",{cx:"488",cy:"144",r:"14",fill:"none",stroke:"rgba(255,157,175,0.22)",strokeWidth:"1.5"})]}),c[69]=ya):ya=c[69];let ba;c[70]===Symbol.for("react.memo_cache_sentinel")?(ba=r.jsxs("g",{className:"landing-node",children:[r.jsx("circle",{cx:"340",cy:"320",r:"9",fill:"#7fd0ff",fillOpacity:"0.9"}),r.jsx("circle",{cx:"340",cy:"320",r:"20",fill:"none",stroke:"rgba(127,208,255,0.22)",strokeWidth:"1.5"})]}),c[70]=ba):ba=c[70];let Be;c[71]===Symbol.for("react.memo_cache_sentinel")?(Be=r.jsx("div",{className:"landing-preview-orbit",children:r.jsxs("svg",{viewBox:"0 0 640 440",role:"img","aria-hidden":"true",children:[yl,mt,ht,pa,Xt,pt,yt,bt,ya,ba,r.jsx("g",{opacity:"0.45",children:zm.map(Om)})]})}),c[71]=Be):Be=c[71];let va,Zt;c[72]===Symbol.for("react.memo_cache_sentinel")?(va=r.jsx("div",{className:"landing-dossier-kicker",children:"知识条目示例"}),Zt=r.jsx("div",{className:"landing-dossier-title",children:"数据科学学院"}),c[72]=va,c[73]=Zt):(va=c[72],Zt=c[73]);let Kt;c[74]===Symbol.for("react.memo_cache_sentinel")?(Kt=r.jsxs("div",{className:"landing-dossier-row",children:[r.jsx("span",{children:"教师档案"}),r.jsx("strong",{children:"105"})]}),c[74]=Kt):Kt=c[74];let Zl;c[75]===Symbol.for("react.memo_cache_sentinel")?(Zl=r.jsxs("div",{className:"landing-dossier-row",children:[r.jsx("span",{children:"培养项目"}),r.jsx("strong",{children:"12"})]}),c[75]=Zl):Zl=c[75];let xa;c[76]===Symbol.for("react.memo_cache_sentinel")?(xa=r.jsxs("div",{className:"landing-dossier-card",children:[va,Zt,Kt,Zl,r.jsxs("div",{className:"landing-dossier-row",children:[r.jsx("span",{children:"官网来源"}),r.jsx("strong",{children:"可追溯"})]})]}),c[76]=xa):xa=c[76];let Jt,Sa;c[77]===Symbol.for("react.memo_cache_sentinel")?(Jt=r.jsxs("div",{className:"landing-timeline-header",children:[r.jsx("span",{className:"landing-timeline-title",children:"官网数据快照"}),r.jsx("span",{className:"landing-timeline-badge",children:"2026-09-05"})]}),Sa=r.jsx("div",{className:"landing-timeline-track"}),c[77]=Jt,c[78]=Sa):(Jt=c[77],Sa=c[78]);let za;c[79]===Symbol.for("react.memo_cache_sentinel")?(za=r.jsxs("div",{className:"landing-preview","aria-label":"Knowledge graph preview",children:[gt,Lt,Be,xa,r.jsxs("div",{className:"landing-timeline-card",children:[Jt,Sa,r.jsxs("div",{className:"landing-timeline-labels",children:[r.jsx("span",{children:"2020 建院"}),r.jsx("span",{children:"2026 官网快照"})]})]})]}),c[79]=za):za=c[79];let bl;c[80]!==Ml?(bl=r.jsxs("section",{className:"landing-hero",children:[Ml,za]}),c[80]=Ml,c[81]=bl):bl=c[81];let Ne;c[82]!==xe?(Ne=r.jsx("div",{className:"landing-metrics","aria-label":"系统状态",children:xe.map(wm)}),c[82]=xe,c[83]=Ne):Ne=c[83];let ol;c[84]===Symbol.for("react.memo_cache_sentinel")?(ol=r.jsxs("div",{className:"landing-section-header",children:[r.jsx("h2",{className:"landing-section-title",children:"Workspaces"}),r.jsx("div",{className:"landing-section-line"})]}),c[84]=ol):ol=c[84];let qe,Ea;c[85]===Symbol.for("react.memo_cache_sentinel")?(qe=r.jsxs("div",{children:[r.jsx("div",{className:"landing-workspace-card-eyebrow",children:"Primary Workspace"}),r.jsx("div",{className:"landing-workspace-card-title",children:"Semantica Explorer"}),r.jsx("div",{className:"landing-workspace-card-desc",children:"Full graph, grouped communities, focused neighborhoods, and distance intelligence — all in one canvas."})]}),Ea={display:"flex",alignItems:"center",gap:"12px"},c[85]=qe,c[86]=Ea):(qe=c[85],Ea=c[86]);let _a;c[87]===Symbol.for("react.memo_cache_sentinel")?(_a=r.jsx("div",{className:"landing-workspace-card-icon",style:{marginBottom:0},children:r.jsx(Hf,{size:22})}),c[87]=_a):_a=c[87];let Ta;c[88]===Symbol.for("react.memo_cache_sentinel")?(Ta=r.jsxs("div",{style:Ea,children:[_a,r.jsx("div",{className:"landing-workspace-card-arrow",children:r.jsx(Vd,{size:18})})]}),c[88]=Ta):Ta=c[88];let jl;c[89]!==_?(jl=r.jsxs("button",{className:"landing-workspace-card landing-workspace-card--primary",type:"button",onClick:_,children:[qe,Ta]}),c[89]=_,c[90]=jl):jl=c[90];let Cl;c[91]!==ke?(Cl=ke.map(Am),c[91]=ke,c[92]=Cl):Cl=c[92];let Ul;c[93]!==jl||c[94]!==Cl?(Ul=r.jsxs("section",{"aria-label":"Workspaces",children:[ol,r.jsxs("div",{className:"landing-workspace-grid",children:[jl,Cl]})]}),c[93]=jl,c[94]=Cl,c[95]=Ul):Ul=c[95];let vl;c[96]===Symbol.for("react.memo_cache_sentinel")?(vl=r.jsx("div",{className:"landing-capability-label",children:"关系分析"}),c[96]=vl):vl=c[96];let Kl;c[97]===Symbol.for("react.memo_cache_sentinel")?(Kl=r.jsxs("div",{className:"landing-capability",children:[r.jsx(L1,{size:12}),"查看关系远近"]}),c[97]=Kl):Kl=c[97];let ql;c[98]===Symbol.for("react.memo_cache_sentinel")?(ql=r.jsxs("div",{className:"landing-capability",children:[r.jsx(Hf,{size:12}),"聚焦相关条目"]}),c[98]=ql):ql=c[98];let Aa;c[99]===Symbol.for("react.memo_cache_sentinel")?(Aa=r.jsxs("div",{className:"landing-capability",children:[r.jsx(Id,{size:12}),"发现关系小组"]}),c[99]=Aa):Aa=c[99];let Wt;c[100]===Symbol.for("react.memo_cache_sentinel")?(Wt=r.jsxs("div",{className:"landing-capability",children:[r.jsx(Z1,{size:12}),"查找联系路线"]}),c[100]=Wt):Wt=c[100];let vt;c[101]===Symbol.for("react.memo_cache_sentinel")?(vt=r.jsxs("section",{className:"landing-capability-band","aria-label":"知识图谱能力",children:[vl,Kl,ql,Aa,Wt,r.jsxs("div",{className:"landing-capability",children:[r.jsx(Xd,{size:12}),"查看信息来源"]})]}),c[101]=vt):vt=c[101];let Gl;return c[102]!==bl||c[103]!==Ne||c[104]!==Ul?(Gl=r.jsx("main",{className:"landing-page",children:r.jsxs("div",{className:"landing-shell",children:[bl,Ne,Ul,vt]})}),c[102]=bl,c[103]=Ne,c[104]=Ul,c[105]=Gl):Gl=c[105],Gl}function Am(o){const c=o.icon;return r.jsxs("button",{className:"landing-workspace-card",type:"button",onClick:o.onClick,children:[r.jsx("div",{className:"landing-workspace-card-icon",children:r.jsx(c,{size:18})}),r.jsx("div",{className:"landing-workspace-card-title",children:o.label}),r.jsx("div",{className:"landing-workspace-card-desc",children:o.description})]},o.label)}function wm(o){return r.jsxs("div",{className:"landing-metric","data-tone":o.tone,children:[r.jsx("div",{className:"landing-metric-value",children:o.value}),r.jsx("div",{className:"landing-metric-label",children:o.label})]},o.label)}function Om(o,c){return r.jsx("circle",{cx:o.cx,cy:o.cy*.82,r:o.r*.8,fill:o.fill},c)}function Nm(o){return{...o,status:"offline"}}function Dm(o){return{...o,status:"offline"}}function Mm(o){return o.ok?o.json():null}function jm(){const o=pu.c(31),[c,_]=Y.useState(Um),[g,w]=Y.useState("welcome"),[j,k]=Y.useState("graph"),[B,O]=Y.useState("reasoning"),[v,D]=Y.useState("import"),[T,R]=Y.useState("lineage"),[Q,te]=Y.useState(null);let V,ee;o[0]!==c?(V=()=>(window.localStorage.setItem("semantica-interface-language",c),im(c)),ee=[c],o[0]=c,o[1]=V,o[2]=ee):(V=o[1],ee=o[2]),Y.useEffect(V,ee);let ue;o[3]!==g||o[4]!==B||o[5]!==v||o[6]!==j||o[7]!==Q?.nodeId||o[8]!==Q?.token||o[9]!==T?(ue=()=>g==="welcome"?r.jsx(Tm,{onOpenNetwork:()=>{w("explore"),k("graph")},onOpenKnowledgeGraph:()=>w("knowledge-engineering"),onOpenVocabulary:()=>{w("explore"),k("vocabulary")},onOpenReasoning:()=>{w("analyze"),O("reasoning")},onOpenImport:()=>{w("enrich"),D("import")},onOpenDecisions:()=>w("decisions"),onOpenManage:()=>w("manage")}):g==="explore"?r.jsx(ma,{title:"Explore",subtitle:j==="graph"?void 0:"Browse the graph and switch views without leaving the workspace.",kicker:j==="graph"?"Graph Studio":"Vocabulary Browser",compact:!0,tabs:r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"workspace-tab","data-active":j==="graph",onClick:()=>k("graph"),children:"Semantica Explorer"}),r.jsx("button",{className:"workspace-tab","data-active":j==="vocabulary",onClick:()=>k("vocabulary"),children:"Vocabulary Browser"})]}),children:r.jsx(ga,{children:r.jsx(Y.Suspense,{fallback:r.jsx(ha,{}),children:j==="graph"?r.jsx(fm,{externalFocusNodeId:Q?.nodeId,externalFocusToken:Q?.token}):r.jsx(gm,{})})},`explore-${j}`)}):g==="analyze"?r.jsx(ma,{title:"Analyze",subtitle:"Query the active graph and test inference rules.",kicker:B==="reasoning"?"Reasoning Engine":"SPARQL Query",tabs:r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"workspace-tab","data-active":B==="reasoning",onClick:()=>O("reasoning"),children:"Reasoning Playground"}),r.jsx("button",{className:"workspace-tab","data-active":B==="sparql",onClick:()=>O("sparql"),children:"SPARQL Querying"})]}),children:r.jsx(ga,{children:r.jsx(Y.Suspense,{fallback:r.jsx(ha,{}),children:B==="reasoning"?r.jsx(rm,{}):r.jsx(dm,{})})},`analyze-${B}`)}):g==="decisions"?r.jsx(ma,{title:"Decisions",subtitle:"Inspect decision chains, causal context, and precedent matches.",kicker:"Decision Intelligence",children:r.jsx(ga,{children:r.jsx(Y.Suspense,{fallback:r.jsx(ha,{}),children:r.jsx(um,{})})},"decisions")}):g==="enrich"?r.jsx(ma,{title:"Enrich",subtitle:"Import, export, reconcile, and audit graph entities.",kicker:"Knowledge Audit",tabs:r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"workspace-tab","data-active":v==="import",onClick:()=>D("import"),children:"Import and Export"}),r.jsx("button",{className:"workspace-tab","data-active":v==="merge",onClick:()=>D("merge"),children:"Diff and Merge"}),r.jsx("button",{className:"workspace-tab","data-active":v==="resolve",onClick:()=>D("resolve"),children:"Entity Resolution"}),r.jsx("button",{className:"workspace-tab","data-active":v==="registry",onClick:()=>D("registry"),children:"Registry"})]}),children:r.jsx(ga,{children:r.jsx(Y.Suspense,{fallback:r.jsx(ha,{}),children:v==="import"?r.jsx(om,{}):v==="merge"?r.jsx(cm,{}):v==="resolve"?r.jsx(hm,{}):r.jsx(mm,{})})},`enrich-${v}`)}):g==="ontology-hub"?r.jsx(ma,{title:"Ontology Hub",subtitle:"Load, browse, edit, and govern ontologies and vocabularies.",kicker:"Schema Governance",compact:!0,children:r.jsx(ga,{children:r.jsx(Y.Suspense,{fallback:r.jsx(ha,{}),children:r.jsx(vm,{onJumpToGraphNode:x=>{te({nodeId:x,token:Date.now()}),w("explore"),k("graph")}})})},"ontology-hub")}):g==="knowledge-engineering"?r.jsx(ma,{title:"港中深数据科学学院知识图谱",subtitle:"导入官网资料，整理教师、项目和研究主题，浏览关系并向本地图谱提问。",kicker:"SDS 官网知识图谱",compact:!0,children:r.jsx(ga,{children:r.jsx(Y.Suspense,{fallback:r.jsx(ha,{}),children:r.jsx(bm,{onNavigate:x=>w(x)})})},"knowledge-engineering")}):r.jsx(ma,{title:"Manage",subtitle:"Review provenance, lineage, ontology, and governance context.",kicker:"Graph Governance",tabs:r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"workspace-tab","data-active":T==="lineage",onClick:()=>R("lineage"),children:"PROV-O Lineage"}),r.jsx("button",{className:"workspace-tab","data-active":T==="kg-overview",onClick:()=>R("kg-overview"),children:"KG Overview"}),r.jsx("button",{className:"workspace-tab","data-active":T==="ontology",onClick:()=>R("ontology"),children:"Ontology Summary"})]}),children:r.jsx(ga,{children:r.jsx(Y.Suspense,{fallback:r.jsx(ha,{}),children:T==="lineage"?r.jsx(sm,{}):T==="kg-overview"?r.jsx(pm,{}):r.jsx(ym,{onOpenVocabularyBrowser:()=>{w("explore"),k("vocabulary")}})})},`manage-${T}`)}),o[3]=g,o[4]=B,o[5]=v,o[6]=j,o[7]=Q?.nodeId,o[8]=Q?.token,o[9]=T,o[10]=ue):ue=o[10];const de=ue;let ae;o[11]===Symbol.for("react.memo_cache_sentinel")?(ae=r.jsx("style",{children:_m}),o[11]=ae):ae=o[11];let Ae;o[12]===Symbol.for("react.memo_cache_sentinel")?(Ae=r.jsx("button",{className:"brand-pill",title:"Semantica Knowledge Explorer",onClick:()=>w("welcome"),style:{cursor:"pointer",border:"1px solid rgba(127,208,255,0.18)"},children:"SKE"}),o[12]=Ae):Ae=o[12];let ve;o[13]!==g?(ve=Em.map(x=>{const{id:A,label:C,hint:$,icon:F}=x;return r.jsxs("button",{className:"nav-button","data-active":g===A,onClick:()=>w(A),title:$,children:[r.jsx(F,{size:20}),r.jsx("span",{className:"nav-label",children:C})]},A)}),o[13]=g,o[14]=ve):ve=o[14];const pe=c==="zh-CN"?"切换到英文":"Switch to Chinese",we=c==="zh-CN"?"切换到英文":"Switch to Chinese";let xe,Re;o[15]===Symbol.for("react.memo_cache_sentinel")?(xe=()=>_(Cm),Re=r.jsx(Y1,{size:15}),o[15]=xe,o[16]=Re):(xe=o[15],Re=o[16]);const $e=c==="zh-CN"?"EN":"中文";let Oe;o[17]!==$e?(Oe=r.jsx("span",{children:$e}),o[17]=$e,o[18]=Oe):Oe=o[18];let ge;o[19]!==Oe||o[20]!==pe||o[21]!==we?(ge=r.jsxs("button",{className:"language-toggle",type:"button","data-no-i18n":"true",title:pe,"aria-label":we,onClick:xe,children:[Re,Oe]}),o[19]=Oe,o[20]=pe,o[21]=we,o[22]=ge):ge=o[22];let He;o[23]!==ge||o[24]!==ve?(He=r.jsxs("aside",{className:"app-rail",children:[Ae,ve,ge]}),o[23]=ge,o[24]=ve,o[25]=He):He=o[25];let Qe;o[26]!==de?(Qe=de(),o[26]=de,o[27]=Qe):Qe=o[27];let ke;return o[28]!==He||o[29]!==Qe?(ke=r.jsxs(g1,{client:Sm,children:[ae,r.jsxs("div",{className:"app-shell",children:[He,Qe]})]}),o[28]=He,o[29]=Qe,o[30]=ke):ke=o[30],ke}function Cm(o){return o==="zh-CN"?"en":"zh-CN"}function Um(){return window.localStorage.getItem("semantica-interface-language")==="en"?"en":"zh-CN"}x1.createRoot(document.getElementById("root")).render(r.jsx(jm,{}));export{Vd as A,Ld as B,U1 as C,k1 as F,Id as G,Hf as N,Z1 as R,Pd as S,em as W,ul as _,W1 as a,We as b,pu as c,Xd as d,y1 as r};
