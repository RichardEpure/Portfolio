(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Fr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const es="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ts=Fr(es);function wi(e){return!!e||e===""}function Lr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?as(r):Lr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(Q(e))return e}}const ns=/;(?![^(]*\))/g,rs=/:(.+)/;function as(e){const t={};return e.split(ns).forEach(n=>{if(n){const r=n.split(rs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function En(e){let t="";if(ee(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=En(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ft=e=>ee(e)?e:e==null?"":F(e)||Q(e)&&(e.toString===Oi||!R(e.toString))?JSON.stringify(e,ki,2):String(e),ki=(e,t)=>t&&t.__v_isRef?ki(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ai(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!F(t)&&!Ei(t)?String(t):t,K={},bt=[],ke=()=>{},is=()=>!1,os=/^on[^a-z]/,Sn=e=>os.test(e),Rr=e=>e.startsWith("onUpdate:"),oe=Object.assign,$r=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ss=Object.prototype.hasOwnProperty,D=(e,t)=>ss.call(e,t),F=Array.isArray,yt=e=>In(e)==="[object Map]",Ai=e=>In(e)==="[object Set]",R=e=>typeof e=="function",ee=e=>typeof e=="string",zr=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Ci=e=>Q(e)&&R(e.then)&&R(e.catch),Oi=Object.prototype.toString,In=e=>Oi.call(e),ls=e=>In(e).slice(8,-1),Ei=e=>In(e)==="[object Object]",jr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sn=Fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fs=/-(\w)/g,Ne=Pn(e=>e.replace(fs,(t,n)=>n?n.toUpperCase():"")),cs=/\B([A-Z])/g,At=Pn(e=>e.replace(cs,"-$1").toLowerCase()),Tn=Pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),qn=Pn(e=>e?`on${Tn(e)}`:""),hn=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},gn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},us=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ka;const ds=()=>ka||(ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Se;class ms{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Se&&(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ps(e,t=Se){t&&t.active&&t.effects.push(e)}const Dr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Si=e=>(e.w&Je)>0,Ii=e=>(e.n&Je)>0,hs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},gs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Si(a)&&!Ii(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},or=new WeakMap;let Lt=0,Je=1;const sr=30;let ye;const at=Symbol(""),lr=Symbol("");class Hr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ps(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,qe=!0,Je=1<<++Lt,Lt<=sr?hs(this):Aa(this),this.fn()}finally{Lt<=sr&&gs(this),Je=1<<--Lt,ye=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(Aa(this),this.onStop&&this.onStop(),this.active=!1)}}function Aa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Pi=[];function Ct(){Pi.push(qe),qe=!1}function Ot(){const e=Pi.pop();qe=e===void 0?!0:e}function he(e,t,n){if(qe&&ye){let r=or.get(e);r||or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Dr()),Ti(a)}}function Ti(e,t){let n=!1;Lt<=sr?Ii(e)||(e.n|=Je,n=!Si(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function Re(e,t,n,r,a,i){const o=or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?jr(n)&&s.push(o.get("length")):(s.push(o.get(at)),yt(e)&&s.push(o.get(lr)));break;case"delete":F(e)||(s.push(o.get(at)),yt(e)&&s.push(o.get(lr)));break;case"set":yt(e)&&s.push(o.get(at));break}if(s.length===1)s[0]&&fr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);fr(Dr(l))}}function fr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ca(r);for(const r of n)r.computed||Ca(r)}function Ca(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const vs=Fr("__proto__,__v_isRef,__isVue"),Ni=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(zr)),bs=Ur(),ys=Ur(!1,!0),_s=Ur(!0),Oa=xs();function xs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ct();const r=U(this)[t].apply(this,n);return Ot(),r}}),e}function Ur(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?$s:$i:t?Ri:Li).get(r))return r;const o=F(r);if(!e&&o&&D(Oa,a))return Reflect.get(Oa,a,i);const s=Reflect.get(r,a,i);return(zr(a)?Ni.has(a):vs(a))||(e||he(r,"get",a),t)?s:ie(s)?o&&jr(a)?s:s.value:Q(s)?e?zi(s):Yr(s):s}}const ws=Mi(),ks=Mi(!0);function Mi(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&ie(o)&&!ie(a))return!1;if(!e&&!Wt(a)&&(cr(a)||(a=U(a),o=U(o)),!F(n)&&ie(o)&&!ie(a)))return o.value=a,!0;const s=F(n)&&jr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?hn(a,o)&&Re(n,"set",r,a):Re(n,"add",r,a)),l}}function As(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Re(e,"delete",t,void 0),r}function Cs(e,t){const n=Reflect.has(e,t);return(!zr(t)||!Ni.has(t))&&he(e,"has",t),n}function Os(e){return he(e,"iterate",F(e)?"length":at),Reflect.ownKeys(e)}const Fi={get:bs,set:ws,deleteProperty:As,has:Cs,ownKeys:Os},Es={get:_s,set(e,t){return!0},deleteProperty(e,t){return!0}},Ss=oe({},Fi,{get:ys,set:ks}),Br=e=>e,Nn=e=>Reflect.getPrototypeOf(e);function Zt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=Nn(a),s=r?Br:n?qr:Vr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function en(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function tn(e,t=!1){return e=e.__v_raw,!t&&he(U(e),"iterate",at),Reflect.get(e,"size",e)}function Ea(e){e=U(e);const t=U(this);return Nn(t).has.call(t,e)||(t.add(e),Re(t,"add",e,e)),this}function Sa(e,t){t=U(t);const n=U(this),{has:r,get:a}=Nn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?hn(t,o)&&Re(n,"set",e,t):Re(n,"add",e,t),this}function Ia(e){const t=U(this),{has:n,get:r}=Nn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Re(t,"delete",e,void 0),i}function Pa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Re(e,"clear",void 0,void 0),n}function nn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Br:e?qr:Vr;return!e&&he(s,"iterate",at),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function rn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=yt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Br:t?qr:Vr;return!t&&he(i,"iterate",l?lr:at),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function Is(){const e={get(i){return Zt(this,i)},get size(){return tn(this)},has:en,add:Ea,set:Sa,delete:Ia,clear:Pa,forEach:nn(!1,!1)},t={get(i){return Zt(this,i,!1,!0)},get size(){return tn(this)},has:en,add:Ea,set:Sa,delete:Ia,clear:Pa,forEach:nn(!1,!0)},n={get(i){return Zt(this,i,!0)},get size(){return tn(this,!0)},has(i){return en.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:nn(!0,!1)},r={get(i){return Zt(this,i,!0,!0)},get size(){return tn(this,!0)},has(i){return en.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:nn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=rn(i,!1,!1),n[i]=rn(i,!0,!1),t[i]=rn(i,!1,!0),r[i]=rn(i,!0,!0)}),[e,n,t,r]}const[Ps,Ts,Ns,Ms]=Is();function Wr(e,t){const n=t?e?Ms:Ns:e?Ts:Ps;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Fs={get:Wr(!1,!1)},Ls={get:Wr(!1,!0)},Rs={get:Wr(!0,!1)},Li=new WeakMap,Ri=new WeakMap,$i=new WeakMap,$s=new WeakMap;function zs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function js(e){return e.__v_skip||!Object.isExtensible(e)?0:zs(ls(e))}function Yr(e){return Wt(e)?e:Kr(e,!1,Fi,Fs,Li)}function Ds(e){return Kr(e,!1,Ss,Ls,Ri)}function zi(e){return Kr(e,!0,Es,Rs,$i)}function Kr(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=js(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function _t(e){return Wt(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function cr(e){return!!(e&&e.__v_isShallow)}function ji(e){return _t(e)||Wt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Di(e){return gn(e,"__v_skip",!0),e}const Vr=e=>Q(e)?Yr(e):e,qr=e=>Q(e)?zi(e):e;function Hs(e){qe&&ye&&(e=U(e),Ti(e.dep||(e.dep=Dr())))}function Us(e,t){e=U(e),e.dep&&fr(e.dep)}function ie(e){return!!(e&&e.__v_isRef===!0)}function Hi(e){return ie(e)?e.value:e}const Bs={get:(e,t,n)=>Hi(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ie(a)&&!ie(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ui(e){return _t(e)?e:new Proxy(e,Bs)}class Ws{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Hr(t,()=>{this._dirty||(this._dirty=!0,Us(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Hs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ys(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=ke):(r=e.get,a=e.set),new Ws(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Mn(i,t,n)}return a}function Ae(e,t,n,r){if(R(e)){const i=Xe(e,t,n,r);return i&&Ci(i)&&i.catch(o=>{Mn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}function Mn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}Ks(e,n,a,r)}function Ks(e,t,n,r=!0){console.error(e)}let vn=!1,ur=!1;const pe=[];let Le=0;const zt=[];let Rt=null,mt=0;const jt=[];let Ke=null,pt=0;const Bi=Promise.resolve();let Xr=null,dr=null;function Vs(e){const t=Xr||Bi;return e?t.then(this?e.bind(this):e):t}function qs(e){let t=Le+1,n=pe.length;for(;t<n;){const r=t+n>>>1;Yt(pe[r])<e?t=r+1:n=r}return t}function Wi(e){(!pe.length||!pe.includes(e,vn&&e.allowRecurse?Le+1:Le))&&e!==dr&&(e.id==null?pe.push(e):pe.splice(qs(e.id),0,e),Yi())}function Yi(){!vn&&!ur&&(ur=!0,Xr=Bi.then(qi))}function Xs(e){const t=pe.indexOf(e);t>Le&&pe.splice(t,1)}function Ki(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Yi()}function Js(e){Ki(e,Rt,zt,mt)}function Gs(e){Ki(e,Ke,jt,pt)}function Fn(e,t=null){if(zt.length){for(dr=t,Rt=[...new Set(zt)],zt.length=0,mt=0;mt<Rt.length;mt++)Rt[mt]();Rt=null,mt=0,dr=null,Fn(e,t)}}function Vi(e){if(Fn(),jt.length){const t=[...new Set(jt)];if(jt.length=0,Ke){Ke.push(...t);return}for(Ke=t,Ke.sort((n,r)=>Yt(n)-Yt(r)),pt=0;pt<Ke.length;pt++)Ke[pt]();Ke=null,pt=0}}const Yt=e=>e.id==null?1/0:e.id;function qi(e){ur=!1,vn=!0,Fn(e),pe.sort((n,r)=>Yt(n)-Yt(r));const t=ke;try{for(Le=0;Le<pe.length;Le++){const n=pe[Le];n&&n.active!==!1&&Xe(n,null,14)}}finally{Le=0,pe.length=0,Vi(),vn=!1,Xr=null,(pe.length||zt.length||jt.length)&&qi(e)}}function Qs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||K;b&&(a=n.map(C=>C.trim())),m&&(a=n.map(us))}let s,l=r[s=qn(t)]||r[s=qn(Ne(t))];!l&&i&&(l=r[s=qn(At(t))]),l&&Ae(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ae(u,e,6,a)}}function Xi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=Xi(u,t,!0);d&&(s=!0,oe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):oe(o,i),r.set(e,o),o)}function Ln(e,t){return!e||!Sn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,At(t))||D(e,t))}let Pe=null,Rn=null;function bn(e){const t=Pe;return Pe=e,Rn=e&&e.type.__scopeId||null,t}function Jr(e){Rn=e}function Gr(){Rn=null}function Zs(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Da(-1);const i=bn(t),o=e(...a);return bn(i),r._d&&Da(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Jn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:C,ctx:L,inheritAttrs:$}=e;let T,y;const O=bn(e);try{if(n.shapeFlag&4){const j=a||r;T=Ie(d.call(j,j,m,i,C,b,L)),y=l}else{const j=t;T=Ie(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:el(l)}}catch(j){Dt.length=0,Mn(j,e,1),T=V(ot)}let N=T;if(y&&$!==!1){const j=Object.keys(y),{shapeFlag:Y}=N;j.length&&Y&7&&(o&&j.some(Rr)&&(y=tl(y,o)),N=wt(N,y))}return n.dirs&&(N=wt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),T=N,bn(O),T}const el=e=>{let t;for(const n in e)(n==="class"||n==="style"||Sn(n))&&((t||(t={}))[n]=e[n]);return t},tl=(e,t)=>{const n={};for(const r in e)(!Rr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function nl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ta(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Ln(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ta(r,o,u):!0:!!o;return!1}function Ta(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Ln(n,i))return!0}return!1}function rl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const al=e=>e.__isSuspense;function il(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Gs(e)}function ol(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function Gn(e,t,n=!1){const r=te||Pe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const Na={};function ln(e,t,n){return Ji(e,t,n)}function Ji(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=te;let l,u=!1,d=!1;if(ie(e)?(l=()=>e.value,u=cr(e)):_t(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(y=>_t(y)||cr(y)),l=()=>e.map(y=>{if(ie(y))return y.value;if(_t(y))return ht(y);if(R(y))return Xe(y,s,2)})):R(e)?t?l=()=>Xe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ae(e,s,3,[b])}:l=ke,t&&r){const y=l;l=()=>ht(y())}let m,b=y=>{m=T.onStop=()=>{Xe(y,s,4)}};if(Vt)return b=ke,t?n&&Ae(t,s,3,[l(),d?[]:void 0,b]):l(),ke;let C=d?[]:Na;const L=()=>{if(!!T.active)if(t){const y=T.run();(r||u||(d?y.some((O,N)=>hn(O,C[N])):hn(y,C)))&&(m&&m(),Ae(t,s,3,[y,C===Na?void 0:C,b]),C=y)}else T.run()};L.allowRecurse=!!t;let $;a==="sync"?$=L:a==="post"?$=()=>ce(L,s&&s.suspense):$=()=>Js(L);const T=new Hr(l,$);return t?n?L():C=T.run():a==="post"?ce(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&$r(s.scope.effects,T)}}function sl(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?Gi(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=te;kt(this);const s=Ji(a,i.bind(r),n);return o?kt(o):it(),s}function Gi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ie(e))ht(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(Ai(e)||yt(e))e.forEach(n=>{ht(n,t)});else if(Ei(e))for(const n in e)ht(e[n],t);return e}function De(e){return R(e)?{setup:e,name:e.name}:e}const fn=e=>!!e.type.__asyncLoader,Qi=e=>e.type.__isKeepAlive;function ll(e,t){Zi(e,"a",t)}function fl(e,t){Zi(e,"da",t)}function Zi(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if($n(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Qi(a.parent.vnode)&&cl(r,t,n,a),a=a.parent}}function cl(e,t,n,r){const a=$n(t,e,r,!0);eo(()=>{$r(r[t],a)},n)}function $n(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),kt(n);const s=Ae(t,n,e,o);return it(),Ot(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=te)=>(!Vt||e==="sp")&&$n(e,t,n),ul=He("bm"),dl=He("m"),ml=He("bu"),pl=He("u"),hl=He("bum"),eo=He("um"),gl=He("sp"),vl=He("rtg"),bl=He("rtc");function yl(e,t=te){$n("ec",e,t)}function Ze(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ct(),Ae(l,n,8,[e.el,s,e,t]),Ot())}}const to="components";function no(e,t){return xl(to,e,!0,t)||e}const _l=Symbol();function xl(e,t,n=!0,r=!1){const a=Pe||te;if(a){const i=a.type;if(e===to){const s=Gl(i,!1);if(s&&(s===t||s===Ne(t)||s===Tn(Ne(t))))return i}const o=Ma(a[e]||i[e],t)||Ma(a.appContext[e],t);return!o&&r?i:o}}function Ma(e,t){return e&&(e[t]||e[Ne(t)]||e[Tn(Ne(t))])}function cn(e,t,n,r){let a;const i=n&&n[r];if(F(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Q(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const mr=e=>e?go(e)?ta(e)||e.proxy:mr(e.parent):null,yn=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mr(e.parent),$root:e=>mr(e.root),$emit:e=>e.emit,$options:e=>ao(e),$forceUpdate:e=>e.f||(e.f=()=>Wi(e.update)),$nextTick:e=>e.n||(e.n=Vs.bind(e.proxy)),$watch:e=>sl.bind(e)}),wl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const C=o[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&D(r,t))return o[t]=1,r[t];if(a!==K&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==K&&D(n,t))return o[t]=4,n[t];pr&&(o[t]=0)}}const d=yn[t];let m,b;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&D(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,D(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&D(a,t)?(a[t]=n,!0):r!==K&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&D(e,o)||t!==K&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(yn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let pr=!0;function kl(e){const t=ao(e),n=e.proxy,r=e.ctx;pr=!1,t.beforeCreate&&Fa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:C,updated:L,activated:$,deactivated:T,beforeDestroy:y,beforeUnmount:O,destroyed:N,unmounted:j,render:Y,renderTracked:re,renderTriggered:de,errorCaptured:Ce,serverPrefetch:se,expose:It,inheritAttrs:ft,components:Pt,directives:Gt,filters:va}=t;if(u&&Al(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const q=o[G];R(q)&&(r[G]=q.bind(n))}if(a){const G=a.call(n,n);Q(G)&&(e.data=Yr(G))}if(pr=!0,i)for(const G in i){const q=i[G],Me=R(q)?q.bind(n,n):R(q.get)?q.get.bind(n,n):ke,Yn=!R(q)&&R(q.set)?q.set.bind(n):ke,Tt=ve({get:Me,set:Yn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:ct=>Tt.value=ct})}if(s)for(const G in s)ro(s[G],r,n,G);if(l){const G=R(l)?l.call(n):l;Reflect.ownKeys(G).forEach(q=>{ol(q,G[q])})}d&&Fa(d,e,"c");function le(G,q){F(q)?q.forEach(Me=>G(Me.bind(n))):q&&G(q.bind(n))}if(le(ul,m),le(dl,b),le(ml,C),le(pl,L),le(ll,$),le(fl,T),le(yl,Ce),le(bl,re),le(vl,de),le(hl,O),le(eo,j),le(gl,se),F(It))if(It.length){const G=e.exposed||(e.exposed={});It.forEach(q=>{Object.defineProperty(G,q,{get:()=>n[q],set:Me=>n[q]=Me})})}else e.exposed||(e.exposed={});Y&&e.render===ke&&(e.render=Y),ft!=null&&(e.inheritAttrs=ft),Pt&&(e.components=Pt),Gt&&(e.directives=Gt)}function Al(e,t,n=ke,r=!1){F(e)&&(e=hr(e));for(const a in e){const i=e[a];let o;Q(i)?"default"in i?o=Gn(i.from||a,i.default,!0):o=Gn(i.from||a):o=Gn(i),ie(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Fa(e,t,n){Ae(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ro(e,t,n,r){const a=r.includes(".")?Gi(n,r):()=>n[r];if(ee(e)){const i=t[e];R(i)&&ln(a,i)}else if(R(e))ln(a,e.bind(n));else if(Q(e))if(F(e))e.forEach(i=>ro(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&ln(a,i,e)}}function ao(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>_n(l,u,o,!0)),_n(l,t,o)),i.set(t,l),l}function _n(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&_n(e,i,n,!0),a&&a.forEach(o=>_n(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Cl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Cl={data:La,props:tt,emits:tt,methods:tt,computed:tt,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:tt,directives:tt,watch:El,provide:La,inject:Ol};function La(e,t){return t?e?function(){return oe(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Ol(e,t){return tt(hr(e),hr(t))}function hr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function tt(e,t){return e?oe(oe(Object.create(null),e),t):t}function El(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=ae(e[r],t[r]);return n}function Sl(e,t,n,r=!1){const a={},i={};gn(i,zn,1),e.propsDefaults=Object.create(null),io(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ds(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Il(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Ln(e.emitsOptions,b))continue;const C=t[b];if(l)if(D(i,b))C!==i[b]&&(i[b]=C,u=!0);else{const L=Ne(b);a[L]=gr(l,s,L,C,e,!1)}else C!==i[b]&&(i[b]=C,u=!0)}}}else{io(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=At(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=gr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Re(e,"set","$attrs")}function io(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(sn(l))continue;const u=t[l];let d;a&&D(a,d=Ne(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Ln(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=gr(a,l,m,u[m],e,!D(u,m))}}return o}function gr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(kt(a),r=u[n]=l.call(null,t),it())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===At(n))&&(r=!0))}return r}function oo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[b,C]=oo(m,t,!0);oe(o,b),C&&s.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,bt),bt;if(F(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);Ra(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Ne(d);if(Ra(m)){const b=i[d],C=o[m]=F(b)||R(b)?{type:b}:b;if(C){const L=ja(Boolean,C.type),$=ja(String,C.type);C[0]=L>-1,C[1]=$<0||L<$,(L>-1||D(C,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Ra(e){return e[0]!=="$"}function $a(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function za(e,t){return $a(e)===$a(t)}function ja(e,t){return F(t)?t.findIndex(n=>za(n,e)):R(t)&&za(t,e)?0:-1}const so=e=>e[0]==="_"||e==="$stable",Qr=e=>F(e)?e.map(Ie):[Ie(e)],Pl=(e,t,n)=>{if(t._n)return t;const r=Zs((...a)=>Qr(t(...a)),n);return r._c=!1,r},lo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(so(a))continue;const i=e[a];if(R(i))t[a]=Pl(a,i,r);else if(i!=null){const o=Qr(i);t[a]=()=>o}}},fo=(e,t)=>{const n=Qr(t);e.slots.default=()=>n},Tl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),gn(t,"_",n)):lo(t,e.slots={})}else e.slots={},t&&fo(e,t);gn(e.slots,zn,1)},Nl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(oe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,lo(t,a)),o=t}else t&&(fo(e,t),o={default:1});if(i)for(const s in a)!so(s)&&!(s in o)&&delete a[s]};function co(){return{app:null,config:{isNativeTag:is,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ml=0;function Fl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!Q(a)&&(a=null);const i=co(),o=new Set;let s=!1;const l=i.app={_uid:Ml++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Zl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=V(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,ta(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function vr(e,t,n,r,a=!1){if(F(e)){e.forEach((b,C)=>vr(b,t&&(F(t)?t[C]:t),n,r,a));return}if(fn(r)&&!a)return;const i=r.shapeFlag&4?ta(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ee(u)?(d[u]=null,D(m,u)&&(m[u]=null)):ie(u)&&(u.value=null)),R(l))Xe(l,s,12,[o,d]);else{const b=ee(l),C=ie(l);if(b||C){const L=()=>{if(e.f){const $=b?d[l]:l.value;a?F($)&&$r($,i):F($)?$.includes(i)||$.push(i):b?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,D(m,l)&&(m[l]=o)):C&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,ce(L,n)):L()}}}const ce=il;function Ll(e){return Rl(e)}function Rl(e,t){const n=ds();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:C=ke,cloneNode:L,insertStaticContent:$}=e,T=(f,c,p,g=null,h=null,x=null,k=!1,_=null,w=!!c.dynamicChildren)=>{if(f===c)return;f&&!Mt(f,c)&&(g=Qt(f),Be(f,h,x,!0),f=null),c.patchFlag===-2&&(w=!1,c.dynamicChildren=null);const{type:v,ref:S,shapeFlag:E}=c;switch(v){case Zr:y(f,c,p,g);break;case ot:O(f,c,p,g);break;case Qn:f==null&&N(c,p,g,k);break;case ue:Gt(f,c,p,g,h,x,k,_,w);break;default:E&1?re(f,c,p,g,h,x,k,_,w):E&6?va(f,c,p,g,h,x,k,_,w):(E&64||E&128)&&v.process(f,c,p,g,h,x,k,_,w,ut)}S!=null&&h&&vr(S,f&&f.ref,x,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},O=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=$(f.children,c,p,g,f.el,f.anchor)},j=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},Y=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},re=(f,c,p,g,h,x,k,_,w)=>{k=k||c.type==="svg",f==null?de(c,p,g,h,x,k,_,w):It(f,c,h,x,k,_,w)},de=(f,c,p,g,h,x,k,_)=>{let w,v;const{type:S,props:E,shapeFlag:I,transition:M,patchFlag:H,dirs:B}=f;if(f.el&&L!==void 0&&H===-1)w=f.el=L(f.el);else{if(w=f.el=o(f.type,x,E&&E.is,E),I&8?d(w,f.children):I&16&&se(f.children,w,null,g,h,x&&S!=="foreignObject",k,_),B&&Ze(f,null,g,"created"),E){for(const X in E)X!=="value"&&!sn(X)&&i(w,X,null,E[X],x,f.children,g,h,Fe);"value"in E&&i(w,"value",null,E.value),(v=E.onVnodeBeforeMount)&&Ee(v,g,f)}Ce(w,f,f.scopeId,k,g)}B&&Ze(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;W&&M.beforeEnter(w),r(w,c,p),((v=E&&E.onVnodeMounted)||W||B)&&ce(()=>{v&&Ee(v,g,f),W&&M.enter(w),B&&Ze(f,null,g,"mounted")},h)},Ce=(f,c,p,g,h)=>{if(p&&C(f,p),g)for(let x=0;x<g.length;x++)C(f,g[x]);if(h){let x=h.subTree;if(c===x){const k=h.vnode;Ce(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},se=(f,c,p,g,h,x,k,_,w=0)=>{for(let v=w;v<f.length;v++){const S=f[v]=_?Ve(f[v]):Ie(f[v]);T(null,S,c,p,g,h,x,k,_)}},It=(f,c,p,g,h,x,k)=>{const _=c.el=f.el;let{patchFlag:w,dynamicChildren:v,dirs:S}=c;w|=f.patchFlag&16;const E=f.props||K,I=c.props||K;let M;p&&et(p,!1),(M=I.onVnodeBeforeUpdate)&&Ee(M,p,c,f),S&&Ze(c,f,p,"beforeUpdate"),p&&et(p,!0);const H=h&&c.type!=="foreignObject";if(v?ft(f.dynamicChildren,v,_,p,g,H,x):k||Me(f,c,_,null,p,g,H,x,!1),w>0){if(w&16)Pt(_,c,E,I,p,g,h);else if(w&2&&E.class!==I.class&&i(_,"class",null,I.class,h),w&4&&i(_,"style",E.style,I.style,h),w&8){const B=c.dynamicProps;for(let W=0;W<B.length;W++){const X=B[W],be=E[X],dt=I[X];(dt!==be||X==="value")&&i(_,X,be,dt,h,f.children,p,g,Fe)}}w&1&&f.children!==c.children&&d(_,c.children)}else!k&&v==null&&Pt(_,c,E,I,p,g,h);((M=I.onVnodeUpdated)||S)&&ce(()=>{M&&Ee(M,p,c,f),S&&Ze(c,f,p,"updated")},g)},ft=(f,c,p,g,h,x,k)=>{for(let _=0;_<c.length;_++){const w=f[_],v=c[_],S=w.el&&(w.type===ue||!Mt(w,v)||w.shapeFlag&70)?m(w.el):p;T(w,v,S,null,g,h,x,k,!0)}},Pt=(f,c,p,g,h,x,k)=>{if(p!==g){for(const _ in g){if(sn(_))continue;const w=g[_],v=p[_];w!==v&&_!=="value"&&i(f,_,v,w,k,c.children,h,x,Fe)}if(p!==K)for(const _ in p)!sn(_)&&!(_ in g)&&i(f,_,p[_],null,k,c.children,h,x,Fe);"value"in g&&i(f,"value",p.value,g.value)}},Gt=(f,c,p,g,h,x,k,_,w)=>{const v=c.el=f?f.el:s(""),S=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:M}=c;M&&(_=_?_.concat(M):M),f==null?(r(v,p,g),r(S,p,g),se(c.children,p,S,h,x,k,_,w)):E>0&&E&64&&I&&f.dynamicChildren?(ft(f.dynamicChildren,I,p,h,x,k,_),(c.key!=null||h&&c===h.subTree)&&uo(f,c,!0)):Me(f,c,p,S,h,x,k,_,w)},va=(f,c,p,g,h,x,k,_,w)=>{c.slotScopeIds=_,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,w):Wn(c,p,g,h,x,k,w):le(f,c,w)},Wn=(f,c,p,g,h,x,k)=>{const _=f.component=Kl(f,g,h);if(Qi(f)&&(_.ctx.renderer=ut),Vl(_),_.asyncDep){if(h&&h.registerDep(_,G),!f.el){const w=_.subTree=V(ot);O(null,w,c,p)}return}G(_,f,c,p,h,x,k)},le=(f,c,p)=>{const g=c.component=f.component;if(nl(f,c,p))if(g.asyncDep&&!g.asyncResolved){q(g,c,p);return}else g.next=c,Xs(g.update),g.update();else c.el=f.el,g.vnode=c},G=(f,c,p,g,h,x,k)=>{const _=()=>{if(f.isMounted){let{next:S,bu:E,u:I,parent:M,vnode:H}=f,B=S,W;et(f,!1),S?(S.el=H.el,q(f,S,k)):S=H,E&&Xn(E),(W=S.props&&S.props.onVnodeBeforeUpdate)&&Ee(W,M,S,H),et(f,!0);const X=Jn(f),be=f.subTree;f.subTree=X,T(be,X,m(be.el),Qt(be),f,h,x),S.el=X.el,B===null&&rl(f,X.el),I&&ce(I,h),(W=S.props&&S.props.onVnodeUpdated)&&ce(()=>Ee(W,M,S,H),h)}else{let S;const{el:E,props:I}=c,{bm:M,m:H,parent:B}=f,W=fn(c);if(et(f,!1),M&&Xn(M),!W&&(S=I&&I.onVnodeBeforeMount)&&Ee(S,B,c),et(f,!0),E&&Vn){const X=()=>{f.subTree=Jn(f),Vn(E,f.subTree,f,h,null)};W?c.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=Jn(f);T(null,X,p,g,f,h,x),c.el=X.el}if(H&&ce(H,h),!W&&(S=I&&I.onVnodeMounted)){const X=c;ce(()=>Ee(S,B,X),h)}(c.shapeFlag&256||B&&fn(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&ce(f.a,h),f.isMounted=!0,c=p=g=null}},w=f.effect=new Hr(_,()=>Wi(v),f.scope),v=f.update=()=>w.run();v.id=f.uid,et(f,!0),v()},q=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Il(f,c.props,g,p),Nl(f,c.children,p),Ct(),Fn(void 0,f.update),Ot()},Me=(f,c,p,g,h,x,k,_,w=!1)=>{const v=f&&f.children,S=f?f.shapeFlag:0,E=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Tt(v,E,p,g,h,x,k,_,w);return}else if(I&256){Yn(v,E,p,g,h,x,k,_,w);return}}M&8?(S&16&&Fe(v,h,x),E!==v&&d(p,E)):S&16?M&16?Tt(v,E,p,g,h,x,k,_,w):Fe(v,h,x,!0):(S&8&&d(p,""),M&16&&se(E,p,g,h,x,k,_,w))},Yn=(f,c,p,g,h,x,k,_,w)=>{f=f||bt,c=c||bt;const v=f.length,S=c.length,E=Math.min(v,S);let I;for(I=0;I<E;I++){const M=c[I]=w?Ve(c[I]):Ie(c[I]);T(f[I],M,p,null,h,x,k,_,w)}v>S?Fe(f,h,x,!0,!1,E):se(c,p,g,h,x,k,_,w,E)},Tt=(f,c,p,g,h,x,k,_,w)=>{let v=0;const S=c.length;let E=f.length-1,I=S-1;for(;v<=E&&v<=I;){const M=f[v],H=c[v]=w?Ve(c[v]):Ie(c[v]);if(Mt(M,H))T(M,H,p,null,h,x,k,_,w);else break;v++}for(;v<=E&&v<=I;){const M=f[E],H=c[I]=w?Ve(c[I]):Ie(c[I]);if(Mt(M,H))T(M,H,p,null,h,x,k,_,w);else break;E--,I--}if(v>E){if(v<=I){const M=I+1,H=M<S?c[M].el:g;for(;v<=I;)T(null,c[v]=w?Ve(c[v]):Ie(c[v]),p,H,h,x,k,_,w),v++}}else if(v>I)for(;v<=E;)Be(f[v],h,x,!0),v++;else{const M=v,H=v,B=new Map;for(v=H;v<=I;v++){const me=c[v]=w?Ve(c[v]):Ie(c[v]);me.key!=null&&B.set(me.key,v)}let W,X=0;const be=I-H+1;let dt=!1,_a=0;const Nt=new Array(be);for(v=0;v<be;v++)Nt[v]=0;for(v=M;v<=E;v++){const me=f[v];if(X>=be){Be(me,h,x,!0);continue}let Oe;if(me.key!=null)Oe=B.get(me.key);else for(W=H;W<=I;W++)if(Nt[W-H]===0&&Mt(me,c[W])){Oe=W;break}Oe===void 0?Be(me,h,x,!0):(Nt[Oe-H]=v+1,Oe>=_a?_a=Oe:dt=!0,T(me,c[Oe],p,null,h,x,k,_,w),X++)}const xa=dt?$l(Nt):bt;for(W=xa.length-1,v=be-1;v>=0;v--){const me=H+v,Oe=c[me],wa=me+1<S?c[me+1].el:g;Nt[v]===0?T(null,Oe,p,wa,h,x,k,_,w):dt&&(W<0||v!==xa[W]?ct(Oe,p,wa,2):W--)}}},ct=(f,c,p,g,h=null)=>{const{el:x,type:k,transition:_,children:w,shapeFlag:v}=f;if(v&6){ct(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,ut);return}if(k===ue){r(x,c,p);for(let E=0;E<w.length;E++)ct(w[E],c,p,g);r(f.anchor,c,p);return}if(k===Qn){j(f,c,p);return}if(g!==2&&v&1&&_)if(g===0)_.beforeEnter(x),r(x,c,p),ce(()=>_.enter(x),h);else{const{leave:E,delayLeave:I,afterLeave:M}=_,H=()=>r(x,c,p),B=()=>{E(x,()=>{H(),M&&M()})};I?I(x,H,B):B()}else r(x,c,p)},Be=(f,c,p,g=!1,h=!1)=>{const{type:x,props:k,ref:_,children:w,dynamicChildren:v,shapeFlag:S,patchFlag:E,dirs:I}=f;if(_!=null&&vr(_,null,p,f,!0),S&256){c.ctx.deactivate(f);return}const M=S&1&&I,H=!fn(f);let B;if(H&&(B=k&&k.onVnodeBeforeUnmount)&&Ee(B,c,f),S&6)Zo(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}M&&Ze(f,null,c,"beforeUnmount"),S&64?f.type.remove(f,c,p,h,ut,g):v&&(x!==ue||E>0&&E&64)?Fe(v,c,p,!1,!0):(x===ue&&E&384||!h&&S&16)&&Fe(w,c,p),g&&ba(f)}(H&&(B=k&&k.onVnodeUnmounted)||M)&&ce(()=>{B&&Ee(B,c,f),M&&Ze(f,null,c,"unmounted")},p)},ba=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===ue){Qo(p,g);return}if(c===Qn){Y(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:_}=h,w=()=>k(p,x);_?_(f.el,x,w):w()}else x()},Qo=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Zo=(f,c,p)=>{const{bum:g,scope:h,update:x,subTree:k,um:_}=f;g&&Xn(g),h.stop(),x&&(x.active=!1,Be(k,f,c,p)),_&&ce(_,c),ce(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Fe=(f,c,p,g=!1,h=!1,x=0)=>{for(let k=x;k<f.length;k++)Be(f[k],c,p,g,h)},Qt=f=>f.shapeFlag&6?Qt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ya=(f,c,p)=>{f==null?c._vnode&&Be(c._vnode,null,null,!0):T(c._vnode||null,f,c,null,null,null,p),Vi(),c._vnode=f},ut={p:T,um:Be,m:ct,r:ba,mt:Wn,mc:se,pc:Me,pbc:ft,n:Qt,o:e};let Kn,Vn;return t&&([Kn,Vn]=t(ut)),{render:ya,hydrate:Kn,createApp:Fl(ya,Kn)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||uo(o,s))}}function $l(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const zl=e=>e.__isTeleport,ue=Symbol(void 0),Zr=Symbol(void 0),ot=Symbol(void 0),Qn=Symbol(void 0),Dt=[];let xe=null;function Z(e=!1){Dt.push(xe=e?null:[])}function jl(){Dt.pop(),xe=Dt[Dt.length-1]||null}let Kt=1;function Da(e){Kt+=e}function mo(e){return e.dynamicChildren=Kt>0?xe||bt:null,jl(),Kt>0&&xe&&xe.push(e),e}function ne(e,t,n,r,a,i){return mo(z(e,t,n,r,a,i,!0))}function po(e,t,n,r,a){return mo(V(e,t,n,r,a,!0))}function br(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const zn="__vInternal",ho=({key:e})=>e!=null?e:null,un=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||ie(e)||R(e)?{i:Pe,r:e,k:t,f:!!n}:e:null;function z(e,t=null,n=null,r=0,a=null,i=e===ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ho(t),ref:t&&un(t),scopeId:Rn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ea(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Kt>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const V=Dl;function Dl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===_l)&&(e=ot),br(e)){const s=wt(e,t,!0);return n&&ea(s,n),Kt>0&&!i&&xe&&(s.shapeFlag&6?xe[xe.indexOf(e)]=s:xe.push(s)),s.patchFlag|=-2,s}if(Ql(e)&&(e=e.__vccOpts),t){t=Hl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=En(s)),Q(l)&&(ji(l)&&!F(l)&&(l=oe({},l)),t.style=Lr(l))}const o=ee(e)?1:al(e)?128:zl(e)?64:Q(e)?4:R(e)?2:0;return z(e,t,n,r,a,o,i,!0)}function Hl(e){return e?ji(e)||zn in e?oe({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Bl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ho(s),ref:t&&t.ref?n&&a?F(a)?a.concat(un(t)):[a,un(t)]:un(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor}}function Ul(e=" ",t=0){return V(Zr,null,e,t)}function an(e="",t=!1){return t?(Z(),po(ot,null,e)):V(ot,null,e)}function Ie(e){return e==null||typeof e=="boolean"?V(ot):F(e)?V(ue,null,e.slice()):typeof e=="object"?Ve(e):V(Zr,null,String(e))}function Ve(e){return e.el===null||e.memo?e:wt(e)}function ea(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ea(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(zn in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[Ul(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=En([t.class,r.class]));else if(a==="style")t.style=Lr([t.style,r.style]);else if(Sn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ee(e,t,n,r=null){Ae(e,t,7,[n,r])}const Wl=co();let Yl=0;function Kl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Wl,i={uid:Yl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oo(r,a),emitsOptions:Xi(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Qs.bind(null,i),e.ce&&e.ce(i),i}let te=null;const kt=e=>{te=e,e.scope.on()},it=()=>{te&&te.scope.off(),te=null};function go(e){return e.vnode.shapeFlag&4}let Vt=!1;function Vl(e,t=!1){Vt=t;const{props:n,children:r}=e.vnode,a=go(e);Sl(e,n,a,t),Tl(e,r);const i=a?ql(e,t):void 0;return Vt=!1,i}function ql(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Di(new Proxy(e.ctx,wl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Jl(e):null;kt(e),Ct();const i=Xe(r,e,0,[e.props,a]);if(Ot(),it(),Ci(i)){if(i.then(it,it),t)return i.then(o=>{Ha(e,o,t)}).catch(o=>{Mn(o,e,0)});e.asyncDep=i}else Ha(e,i,t)}else vo(e,t)}function Ha(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Ui(t)),vo(e,n)}let Ua;function vo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ua&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=oe(oe({isCustomElement:i,delimiters:s},o),l);r.render=Ua(a,u)}}e.render=r.render||ke}kt(e),Ct(),kl(e),Ot(),it()}function Xl(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function Jl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Xl(e))},slots:e.slots,emit:e.emit,expose:t}}function ta(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ui(Di(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yn)return yn[n](e)}}))}function Gl(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function Ql(e){return R(e)&&"__vccOpts"in e}const ve=(e,t)=>Ys(e,t,Vt);function bo(e,t,n){const r=arguments.length;return r===2?Q(t)&&!F(t)?br(t)?V(e,null,[t]):V(e,t):V(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&br(n)&&(n=[n]),V(e,t,n))}const Zl="3.2.37",ef="http://www.w3.org/2000/svg",nt=typeof document<"u"?document:null,Ba=nt&&nt.createElement("template"),tf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?nt.createElementNS(ef,e):nt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>nt.createTextNode(e),createComment:e=>nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ba.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ba.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function nf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function rf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)yr(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&yr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Wa=/\s*!important$/;function yr(e,t,n){if(F(n))n.forEach(r=>yr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=af(e,t);Wa.test(n)?e.setProperty(At(r),n.replace(Wa,""),"important"):e[r]=n}}const Ya=["Webkit","Moz","ms"],Zn={};function af(e,t){const n=Zn[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return Zn[t]=r;r=Tn(r);for(let a=0;a<Ya.length;a++){const i=Ya[a]+r;if(i in e)return Zn[t]=i}return t}const Ka="http://www.w3.org/1999/xlink";function of(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ka,t.slice(6,t.length)):e.setAttributeNS(Ka,t,n);else{const i=ts(t);n==null||i&&!wi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function sf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=wi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[yo,lf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let _r=0;const ff=Promise.resolve(),cf=()=>{_r=0},uf=()=>_r||(ff.then(cf),_r=yo());function df(e,t,n,r){e.addEventListener(t,n,r)}function mf(e,t,n,r){e.removeEventListener(t,n,r)}function pf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=hf(t);if(r){const u=i[t]=gf(r,a);df(e,s,u,l)}else o&&(mf(e,s,o,l),i[t]=void 0)}}const Va=/(?:Once|Passive|Capture)$/;function hf(e){let t;if(Va.test(e)){t={};let n;for(;n=e.match(Va);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[At(e.slice(2)),t]}function gf(e,t){const n=r=>{const a=r.timeStamp||yo();(lf||a>=n.attached-1)&&Ae(vf(r,n.value),t,5,[r])};return n.value=e,n.attached=uf(),n}function vf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const qa=/^on[a-z]/,bf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?nf(e,r,a):t==="style"?rf(e,n,r):Sn(t)?Rr(t)||pf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yf(e,t,r,a))?sf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),of(e,t,r,a))};function yf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&qa.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||qa.test(t)&&ee(n)?!1:t in e}const _f=oe({patchProp:bf},tf);let Xa;function xf(){return Xa||(Xa=Ll(_f))}const wf=(...e)=>{const t=xf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=kf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function kf(e){return ee(e)?document.querySelector(e):e}const Af=""+new URL("face.fc39607e.jpeg",import.meta.url).href,Cf={class:"icon is-large"},Of=["href"],er=De({__name:"SocialLink",props:{icon:null,url:null,size:{default:"xl"}},setup(e){const t=e;return(n,r)=>{const a=no("font-awesome-icon");return Z(),ne("span",Cf,[z("a",{href:t.url,target:"_blank"},[V(a,{icon:`fa-brands fa-${t.icon}`,size:t.size},null,8,["icon","size"])],8,Of)])}}}),na=e=>(Jr("data-v-9d2f97f0"),e=e(),Gr(),e),Ef={class:"hero is-large"},Sf={class:"hero-body"},If={class:"container has-text-centered"},Pf=na(()=>z("figure",{class:"image mb-4 is-128x128"},[z("img",{class:"is-rounded",src:Af,alt:"picture of Richard"})],-1)),Tf=na(()=>z("h1",{class:"title is-2"},"RICHARD EPURE",-1)),Nf=na(()=>z("h2",{class:"subtitle"},"Web Developer & Computer Science Graduate",-1)),Mf={class:"is-flex is-justify-content-center is-align-items-center"},Ff=De({__name:"Hero",setup(e){return(t,n)=>(Z(),ne("div",Ef,[z("div",Sf,[z("div",If,[Pf,Tf,Nf,z("div",Mf,[V(er,{icon:"github",url:"https://github.com/RichardEpure"}),V(er,{icon:"linkedin",url:"https://www.linkedin.com/in/richard-epure-803733190/"}),V(er,{icon:"stack-overflow",url:"https://stackoverflow.com/users/18175770/richard-epure"})])])])]))}});const Et=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Lf=Et(Ff,[["__scopeId","data-v-9d2f97f0"]]),Rf={class:"tag is-size-6"},$f=De({__name:"Skills",props:{skills:null,layout:null},setup(e){const t=e;return(n,r)=>(Z(),ne("div",{class:En(["tags",t.layout])},[(Z(!0),ne(ue,null,cn(t.skills,a=>(Z(),ne("p",Rf,Ft(a),1))),256))],2))}});const _o=Et($f,[["__scopeId","data-v-795e7b17"]]),zf={class:"card block"},jf={class:"card-content"},Df={class:"media"},Hf={class:"media-left"},Uf={class:"icon is-large mb-1"},Bf={class:"media-content"},Wf={class:"title is-4"},Yf={key:0,class:"subtitle is-6"},Kf={key:0,class:"content"},Vf={class:"content"},qf={key:0,class:"card-footer"},Xf=["href"],Jf=De({__name:"ResumeCard",props:{resume_card:null},setup(e){const t=e,n=t.resume_card.type;let r="";switch(n){case"education":r="fa-graduation-cap";break;case"experience":r="fa-industry";break;case"project":r="fa-file-code";break}return(a,i)=>{const o=no("font-awesome-icon");return Z(),ne("div",zf,[z("div",jf,[z("div",Df,[z("div",Hf,[z("span",Uf,[V(o,{icon:`fa-solid ${Hi(r)}`,size:"2xl"},null,8,["icon"])])]),z("div",Bf,[z("p",Wf,Ft(t.resume_card.title),1),t.resume_card.subtitle?(Z(),ne("p",Yf,Ft(t.resume_card.subtitle),1)):an("",!0)])]),t.resume_card.content?(Z(),ne("div",Kf,Ft(t.resume_card.content),1)):an("",!0),z("div",Vf,[z("i",null,Ft(t.resume_card.date),1)]),t.resume_card.skills?(Z(),po(_o,{key:1,skills:t.resume_card.skills,layout:"inside-card"},null,8,["skills"])):an("",!0)]),t.resume_card.url?(Z(),ne("footer",qf,[z("a",{class:"card-footer-item",href:t.resume_card.url,target:"_blank"}," View More ",8,Xf)])):an("",!0)])}}});const tr=Et(Jf,[["__scopeId","data-v-d4f687d3"]]),Xt=e=>(Jr("data-v-3b7f95c4"),e=e(),Gr(),e),Gf={class:"section resume"},Qf={class:"container"},Zf=Xt(()=>z("h2",{class:"title pb-6 pt-4"},"Resume",-1)),ec={class:"resume-section"},tc=Xt(()=>z("h3",{class:"title is-4"},"Education",-1)),nc={class:"resume-section"},rc=Xt(()=>z("h3",{class:"title is-4"},"Experience",-1)),ac={class:"resume-section"},ic=Xt(()=>z("h3",{class:"title is-4"},"Personal Projects",-1)),oc={class:"resume-section"},sc=Xt(()=>z("h3",{class:"title is-4"},"Skills",-1)),lc=De({__name:"Resume",setup(e){const t=[{type:"education",title:"Queen Mary University of London",subtitle:"BSc of Computer Science with Industrial Experience",content:`Graduated with 1st class honours and won the Draper's Company undergraduate prizes for
      outstanding achievements in the academic years 2020/2021 & 2021/2022.`,skills:["Web Programming","Algorithms & Data Structures","Distributed Systems","Software Engineering","Database Systems","Computer Graphics","Neural Networks","Graphical User Interfaces","Interaction Design"],date:"September 2018\u2014July 2022"},{type:"education",title:"East Barnet School",subtitle:"A levels & GCSEs",date:"September 2016\u2014June 2018"}],n=[{type:"experience",title:"Soapbox",subtitle:"Web Developer",content:`Joined a team of full stack web developers and contributed to over a dozen projects such as 'HDRUK',
      'Ada Lovelace Institute', and 'Institute of Development Studies'. There I took a variety of responsibilites
      such as working on new projects, performing maintenenace on older projects, deploying builds,
      communicating with clients, and bug fixing.`,skills:["HTML/CSS","JavaScript","jQuery","SCSS","BEM","ITCSS","PHP","WordPress","Docker"],date:"August 2020\u2014June 2021"},{type:"experience",title:"Freelance",subtitle:"Web Developer & Consultant",content:`Designed, created and hosted several websites as a freelance web developer for
      GSA Construction, GRS Construction, and IBJoinery.`,skills:["HTML/CSS","SCSS","JavaScript","AWS"],date:"February 2019\u2014September 2019"}],r=[{type:"project",title:"Crust",subtitle:"Communications App",content:`Crust is a work in progress Tauri based application for voice communication, chat messaging and
      screen sharing. It uses a peer-to-peer model to give users more control over their network.`,skills:["Rust","Tauri","TypeScript","Vue","Vite","SCSS"],date:"July 2022\u2014Present",url:"https://github.com/CallumWatkins/crust"}],a=["Java","Rust","Python","PHP","JavaScript","TypeScript","HTML/CSS","C++","GLSL","Tauri","Django","Vue","React","SCSS","WebGL","jQuery","PyTorch","PyGame","JavaFX","SQL","WordPress","AWS","Docker","Git","Godot"];return(i,o)=>(Z(),ne("section",Gf,[z("div",Qf,[Zf,z("div",ec,[tc,(Z(),ne(ue,null,cn(t,s=>V(tr,{resume_card:s},null,8,["resume_card"])),64))]),z("div",nc,[rc,(Z(),ne(ue,null,cn(n,s=>V(tr,{resume_card:s},null,8,["resume_card"])),64))]),z("div",ac,[ic,(Z(),ne(ue,null,cn(r,s=>V(tr,{resume_card:s},null,8,["resume_card"])),64))]),z("div",oc,[sc,V(_o,{skills:a})])])]))}});const fc=Et(lc,[["__scopeId","data-v-3b7f95c4"]]),cc={},uc={class:"footer"},dc=z("div",{class:"content has-text-centered"},[z("p",null,"Richard Epure 2022")],-1),mc=[dc];function pc(e,t){return Z(),ne("footer",uc,mc)}const hc=Et(cc,[["render",pc]]);const gc={},vc=e=>(Jr("data-v-3fecf479"),e=e(),Gr(),e),bc={class:"section is-medium"},yc=vc(()=>z("div",{class:"container"},[z("div",{class:"inner"},[z("h2",{class:"title has-text-centered"},"About Me"),z("p",{class:"content"}," Hello! I am a developer that has been programming ever since I chose Computer Science as a GCSE module. During my time as a student I have learnt a lot about web development and managed to gain experience in the industry. I also enjoy game development and computer graphics as a hobby and I commonly learn new languages by creating simple games with them. ")])],-1)),_c=[yc];function xc(e,t){return Z(),ne("section",bc,_c)}const wc=Et(gc,[["render",xc],["__scopeId","data-v-3fecf479"]]),kc=De({__name:"App",setup(e){return(t,n)=>(Z(),ne(ue,null,[V(Lf),V(wc),V(fc),V(hc)],64))}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ja(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ja(Object(n),!0).forEach(function(r){Oc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ja(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xn(e){return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xn(e)}function Ac(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ga(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Cc(e,t,n){return t&&Ga(e.prototype,t),n&&Ga(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Oc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ra(e,t){return Sc(e)||Pc(e,t)||xo(e,t)||Nc()}function jn(e){return Ec(e)||Ic(e)||xo(e)||Tc()}function Ec(e){if(Array.isArray(e))return xr(e)}function Sc(e){if(Array.isArray(e))return e}function Ic(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function xo(e,t){if(!!e){if(typeof e=="string")return xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xr(e,t)}}function xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qa=function(){},aa={},wo={},ko=null,Ao={mark:Qa,measure:Qa};try{typeof window<"u"&&(aa=window),typeof document<"u"&&(wo=document),typeof MutationObserver<"u"&&(ko=MutationObserver),typeof performance<"u"&&(Ao=performance)}catch{}var Mc=aa.navigator||{},Za=Mc.userAgent,ei=Za===void 0?"":Za,Ge=aa,J=wo,ti=ko,on=Ao;Ge.document;var Ue=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Co=~ei.indexOf("MSIE")||~ei.indexOf("Trident/"),$e="___FONT_AWESOME___",wr=16,Oo="fa",Eo="svg-inline--fa",st="data-fa-i2svg",kr="data-fa-pseudo-element",Fc="data-fa-pseudo-element-pending",ia="data-prefix",oa="data-icon",ni="fontawesome-i2svg",Lc="async",Rc=["HTML","HEAD","STYLE","SCRIPT"],So=function(){try{return!0}catch{return!1}}(),sa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},wn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Io={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},$c={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},zc=/fa[srltdbk]?[\-\ ]/,Po="fa-layers-text",jc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Dc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},To=[1,2,3,4,5,6,7,8,9,10],Hc=To.concat([11,12,13,14,15,16,17,18,19,20]),Uc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bc=[].concat(jn(Object.keys(wn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY]).concat(To.map(function(e){return"".concat(e,"x")})).concat(Hc.map(function(e){return"w-".concat(e)})),No=Ge.FontAwesomeConfig||{};function Wc(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Kc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kc.forEach(function(e){var t=ra(e,2),n=t[0],r=t[1],a=Yc(Wc(n));a!=null&&(No[r]=a)})}var Vc={familyPrefix:Oo,styleDefault:"solid",replacementClass:Eo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ht=A(A({},Vc),No);Ht.autoReplaceSvg||(Ht.observeMutations=!1);var P={};Object.keys(Ht).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Ht[e]=n,dn.forEach(function(r){return r(P)})},get:function(){return Ht[e]}})});Ge.FontAwesomeConfig=P;var dn=[];function qc(e){return dn.push(e),function(){dn.splice(dn.indexOf(e),1)}}var Ye=wr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xc(e){if(!(!e||!Ue)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Jc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qt(){for(var e=12,t="";e-- >0;)t+=Jc[Math.random()*62|0];return t}function St(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function la(e){return e.classList?St(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Mo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Mo(e[n]),'" ')},"").trim()}function Dn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function fa(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function Qc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Zc(e){var t=e.transform,n=e.width,r=n===void 0?wr:n,a=e.height,i=a===void 0?wr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Co?l+="translate(".concat(t.x/Ye-r/2,"em, ").concat(t.y/Ye-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ye,"em), calc(-50% + ").concat(t.y/Ye,"em)) "):l+="translate(".concat(t.x/Ye,"em, ").concat(t.y/Ye,"em) "),l+="scale(".concat(t.size/Ye*(t.flipX?-1:1),", ").concat(t.size/Ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var eu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fo(){var e=Oo,t=Eo,n=P.familyPrefix,r=P.replacementClass,a=eu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ri=!1;function nr(){P.autoAddCss&&!ri&&(Xc(Fo()),ri=!0)}var tu={mixout:function(){return{dom:{css:Fo,insertCss:nr}}},hooks:function(){return{beforeDOMElementCreation:function(){nr()},beforeI2svg:function(){nr()}}}},ze=Ge||{};ze[$e]||(ze[$e]={});ze[$e].styles||(ze[$e].styles={});ze[$e].hooks||(ze[$e].hooks={});ze[$e].shims||(ze[$e].shims=[]);var we=ze[$e],Lo=[],nu=function e(){J.removeEventListener("DOMContentLoaded",e),kn=1,Lo.map(function(t){return t()})},kn=!1;Ue&&(kn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),kn||J.addEventListener("DOMContentLoaded",nu));function ru(e){!Ue||(kn?setTimeout(e,0):Lo.push(e))}function Jt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Mo(e):"<".concat(t," ").concat(Gc(r),">").concat(i.map(Jt).join(""),"</").concat(t,">")}function ai(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var au=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},rr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?au(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function iu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ar(e){var t=iu(e);return t.length===1?t[0].toString(16):null}function ou(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ii(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Cr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ii(t);typeof we.hooks.addPack=="function"&&!a?we.hooks.addPack(e,ii(t)):we.styles[e]=A(A({},we.styles[e]||{}),i),e==="fas"&&Cr("fa",t)}var Ut=we.styles,su=we.shims,lu=Object.values(Io),ca=null,Ro={},$o={},zo={},jo={},Do={},fu=Object.keys(sa);function cu(e){return~Bc.indexOf(e)}function uu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!cu(a)?a:null}var Ho=function(){var t=function(i){return rr(Ut,function(o,s,l){return o[l]=rr(s,i,{}),o},{})};Ro=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),$o=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Do=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ut||P.autoFetchSvg,r=rr(su,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});zo=r.names,jo=r.unicodes,ca=Hn(P.styleDefault)};qc(function(e){ca=Hn(e.styleDefault)});Ho();function ua(e,t){return(Ro[e]||{})[t]}function du(e,t){return($o[e]||{})[t]}function gt(e,t){return(Do[e]||{})[t]}function Uo(e){return zo[e]||{prefix:null,iconName:null}}function mu(e){var t=jo[e],n=ua("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return ca}var da=function(){return{prefix:null,iconName:null,rest:[]}};function Hn(e){var t=sa[e],n=wn[e]||wn[t],r=e in we.styles?e:null;return n||r||null}function Un(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=uu(P.familyPrefix,s);if(Ut[s]?(s=lu.includes(s)?$c[s]:s,a=s,o.prefix=s):fu.indexOf(s)>-1?(a=s,o.prefix=Hn(s)):l?o.iconName=l:s!==P.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Uo(o.iconName):{},d=gt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ut.far&&Ut.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},da());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Qe()||"fas"),i}var pu=function(){function e(){Ac(this,e),this.definitions={}}return Cc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Cr(s,o[s]);var l=Io[s];l&&Cr(l,o[s]),Ho()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),oi=[],vt={},xt={},hu=Object.keys(xt);function gu(e,t){var n=t.mixoutsTo;return oi=e,vt={},Object.keys(xt).forEach(function(r){hu.indexOf(r)===-1&&delete xt[r]}),oi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),xn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){vt[o]||(vt[o]=[]),vt[o].push(i[o])})}r.provides&&r.provides(xt)}),n}function Or(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xt[e]?xt[e].apply(null,t):void 0}function Er(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(!!t)return t=gt(n,t)||t,ai(Bo.definitions,n,t)||ai(we.styles,n,t)}var Bo=new pu,vu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,lt("noAuto")},bu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ue?(lt("beforeI2svg",t),je("pseudoElements2svg",t),je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,ru(function(){_u({autoReplaceSvgRoot:n}),lt("watch",t)})}},yu={icon:function(t){if(t===null)return null;if(xn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Hn(t[0]);return{prefix:r,iconName:gt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.familyPrefix,"-"))>-1||t.match(zc))){var a=Un(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:gt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:gt(i,t)||t}}}},ge={noAuto:vu,config:P,dom:bu,parse:yu,library:Bo,findIconDefinition:Er,toHtml:Jt},_u=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(we.styles).length>0||P.autoFetchSvg)&&Ue&&P.autoReplaceSvg&&ge.dom.i2svg({node:r})};function Bn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Jt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ue){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function xu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Dn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function wu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function ma(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,C=b===void 0?!1:b,L=r.found?r:n,$=L.width,T=L.height,y=a==="fak",O=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):""].filter(function(se){return m.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat($," ").concat(T)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat($/T*16*.0625,"em")}:{};C&&(N.attributes[st]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||qt())},children:[l]}),delete N.attributes.title);var Y=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},j),m.styles)}),re=r.found&&n.found?je("generateAbstractMask",Y)||{children:[],attributes:{}}:je("generateAbstractIcon",Y)||{children:[],attributes:{}},de=re.children,Ce=re.attributes;return Y.children=de,Y.attributes=Ce,s?wu(Y):xu(Y)}function si(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[st]="");var d=A({},o.styles);fa(a)&&(d.transform=Zc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Dn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function ku(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Dn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ar=we.styles;function Sr(e){var t=e[0],n=e[1],r=e.slice(4),a=ra(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(rt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(rt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Au={found:!1,width:512,height:512};function Cu(e,t){!So&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ir(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(je("missingIconAbstract"),n==="fa"){var i=Uo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ar[t]&&ar[t][e]){var o=ar[t][e];return r(Sr(o))}Cu(e,t),r(A(A({},Au),{},{icon:P.showMissingIcons&&e?je("missingIconAbstract")||{}:{}}))})}var li=function(){},Pr=P.measurePerformance&&on&&on.mark&&on.measure?on:{mark:li,measure:li},$t='FA "6.1.2"',Ou=function(t){return Pr.mark("".concat($t," ").concat(t," begins")),function(){return Wo(t)}},Wo=function(t){Pr.mark("".concat($t," ").concat(t," ends")),Pr.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},pa={begin:Ou,end:Wo},mn=function(){};function fi(e){var t=e.getAttribute?e.getAttribute(st):null;return typeof t=="string"}function Eu(e){var t=e.getAttribute?e.getAttribute(ia):null,n=e.getAttribute?e.getAttribute(oa):null;return t&&n}function Su(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Iu(){if(P.autoReplaceSvg===!0)return pn.replace;var e=pn[P.autoReplaceSvg];return e||pn.replace}function Pu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Tu(e){return J.createElement(e)}function Yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Pu:Tu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Yo(o,{ceFn:r}))}),a}function Nu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var pn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Yo(a),n)}),n.getAttribute(st)===null&&P.keepOriginalSource){var r=J.createComment(Nu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~la(n).indexOf(P.replacementClass))return pn.replace(t);var a=new RegExp("".concat(P.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Jt(s)}).join(`
`);n.setAttribute(st,""),n.innerHTML=o}};function ci(e){e()}function Ko(e,t){var n=typeof t=="function"?t:mn;if(e.length===0)n();else{var r=ci;P.mutateApproach===Lc&&(r=Ge.requestAnimationFrame||ci),r(function(){var a=Iu(),i=pa.begin("mutate");e.map(a),i(),n()})}}var ha=!1;function Vo(){ha=!0}function Tr(){ha=!1}var An=null;function ui(e){if(!!ti&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?mn:t,r=e.nodeCallback,a=r===void 0?mn:r,i=e.pseudoElementsCallback,o=i===void 0?mn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;An=new ti(function(u){if(!ha){var d=Qe();St(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!fi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&fi(m.target)&&~Uc.indexOf(m.attributeName))if(m.attributeName==="class"&&Eu(m.target)){var b=Un(la(m.target)),C=b.prefix,L=b.iconName;m.target.setAttribute(ia,C||d),L&&m.target.setAttribute(oa,L)}else Su(m.target)&&a(m.target)})}}),Ue&&An.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Mu(){!An||An.disconnect()}function Fu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Lu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Un(la(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=du(a.prefix,e.innerText)||ua(a.prefix,Ar(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ru(e){var t=St(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||qt()):(t["aria-hidden"]="true",t.focusable="false")),t}function $u(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Lu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ru(e),s=Or("parseNodeAttributes",{},e),l=t.styleParser?Fu(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var zu=we.styles;function qo(e){var t=P.autoReplaceSvg==="nest"?di(e,{styleParser:!1}):di(e);return~t.extra.classes.indexOf(Po)?je("generateLayersText",e,t):je("generateSvgReplacementMutation",e,t)}function mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ue)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(ni,"-").concat(m))},a=function(m){return n.remove("".concat(ni,"-").concat(m))},i=P.autoFetchSvg?Object.keys(sa):Object.keys(zu);i.includes("fa")||i.push("fa");var o=[".".concat(Po,":not([").concat(st,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(st,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=St(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=pa.begin("onTree"),u=s.reduce(function(d,m){try{var b=qo(m);b&&d.push(b)}catch(C){So||C.name==="MissingIcon"&&console.error(C)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){Ko(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function ju(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qo(e).then(function(n){n&&Ko([n],t)})}function Du(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Er(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Er(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Hu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,C=n.titleId,L=C===void 0?null:C,$=n.classes,T=$===void 0?[]:$,y=n.attributes,O=y===void 0?{}:y,N=n.styles,j=N===void 0?{}:N;if(!!t){var Y=t.prefix,re=t.iconName,de=t.icon;return Bn(A({type:"icon"},t),function(){return lt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(b?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(L||qt()):(O["aria-hidden"]="true",O.focusable="false")),ma({icons:{main:Sr(de),mask:l?Sr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:re,transform:A(A({},Te),a),symbol:o,title:b,maskId:d,titleId:L,extra:{attributes:O,styles:j,classes:T}})})}},Uu={mixout:function(){return{icon:Du(Hu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mi,n.nodeCallback=ju,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return mi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(C,L){Promise.all([Ir(a,s),d.iconName?Ir(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function($){var T=ra($,2),y=T[0],O=T[1];C([n,ma({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Dn(s);l.length>0&&(a.style=l);var u;return fa(o)&&(u=je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Bu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Bn({type:"layer"},function(){lt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.familyPrefix,"-layers")].concat(jn(i)).join(" ")},children:o}]})}}}},Wu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Bn({type:"counter",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:r}),ku({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.familyPrefix,"-layers-counter")].concat(jn(s))}})})}}}},Yu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,C=b===void 0?{}:b;return Bn({type:"text",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:r}),si({content:n,transform:A(A({},Te),i),title:s,extra:{attributes:m,styles:C,classes:["".concat(P.familyPrefix,"-layers-text")].concat(jn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Co){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,si({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ku=new RegExp('"',"ug"),pi=[1105920,1112319];function Vu(e){var t=e.replace(Ku,""),n=ou(t,0),r=n>=pi[0]&&n<=pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ar(a?t[0]:t),isSecondary:r||a}}function hi(e,t){var n="".concat(Fc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=St(e.children),o=i.filter(function(re){return re.getAttribute(kr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(jc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?wn[l[2].toLowerCase()]:Dc[u],C=Vu(m),L=C.value,$=C.isSecondary,T=l[0].startsWith("FontAwesome"),y=ua(b,L),O=y;if(T){var N=mu(L);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!$&&(!o||o.getAttribute(ia)!==b||o.getAttribute(oa)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var j=$u(),Y=j.extra;Y.attributes[kr]=t,Ir(y,b).then(function(re){var de=ma(A(A({},j),{},{icons:{main:re,mask:da()},prefix:b,iconName:O,extra:Y,watchable:!0})),Ce=J.createElement("svg");t==="::before"?e.insertBefore(Ce,e.firstChild):e.appendChild(Ce),Ce.outerHTML=de.map(function(se){return Jt(se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function qu(e){return Promise.all([hi(e,"::before"),hi(e,"::after")])}function Xu(e){return e.parentNode!==document.head&&!~Rc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(kr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gi(e){if(!!Ue)return new Promise(function(t,n){var r=St(e.querySelectorAll("*")).filter(Xu).map(qu),a=pa.begin("searchPseudoElements");Vo(),Promise.all(r).then(function(){a(),Tr(),t()}).catch(function(){a(),Tr(),n()})})}var Ju={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;P.searchPseudoElements&&gi(a)}}},vi=!1,Gu={mixout:function(){return{dom:{unwatch:function(){Vo(),vi=!0}}}},hooks:function(){return{bootstrap:function(){ui(Or("mutationObserverCallbacks",{}))},noAuto:function(){Mu()},watch:function(n){var r=n.observeMutationsRoot;vi?Tr():ui(Or("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},bi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Qu={mixout:function(){return{parse:{transform:function(n){return bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=bi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},C={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},C.outer),children:[{tag:"g",attributes:A({},C.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),C.path)}]}]}}}},ir={x:0,y:0,width:"100%",height:"100%"};function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zu(e){return e.tag==="g"?e.children:[e]}var ed={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Un(a.split(" ").map(function(o){return o.trim()})):da();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,C=Qc({transform:l,containerWidth:m,iconWidth:u}),L={tag:"rect",attributes:A(A({},ir),{},{fill:"white"})},$=d.children?{children:d.children.map(yi)}:{},T={tag:"g",attributes:A({},C.inner),children:[yi(A({tag:d.tag,attributes:A(A({},d.attributes),C.path)},$))]},y={tag:"g",attributes:A({},C.outer),children:[T]},O="mask-".concat(s||qt()),N="clip-".concat(s||qt()),j={tag:"mask",attributes:A(A({},ir),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Zu(b)},j]};return r.push(Y,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(O,")")},ir)}),{children:r,attributes:a}}}},td={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},nd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},rd=[tu,Uu,Bu,Wu,Yu,Ju,Gu,Qu,ed,td,nd];gu(rd,{mixoutsTo:ge});ge.noAuto;var Xo=ge.config,ad=ge.library;ge.dom;var Cn=ge.parse;ge.findIconDefinition;ge.toHtml;var id=ge.icon;ge.layer;var od=ge.text;ge.counter;function _i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_i(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function On(e){return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ld(e,t){if(e==null)return{};var n=sd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Nr(e){return fd(e)||cd(e)||ud(e)||dd()}function fd(e){if(Array.isArray(e))return Mr(e)}function cd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ud(e,t){if(!!e){if(typeof e=="string")return Mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e,t)}}function Mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jo={exports:{}};(function(e){(function(t){var n=function(y,O,N){if(!u(O)||m(O)||b(O)||C(O)||l(O))return O;var j,Y=0,re=0;if(d(O))for(j=[],re=O.length;Y<re;Y++)j.push(n(y,O[Y],N));else{j={};for(var de in O)Object.prototype.hasOwnProperty.call(O,de)&&(j[y(de,N)]=n(y,O[de],N))}return j},r=function(y,O){O=O||{};var N=O.separator||"_",j=O.split||/(?=[A-Z])/;return y.split(j).join(N)},a=function(y){return L(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},C=function(y){return s.call(y)=="[object Boolean]"},L=function(y){return y=y-0,y===y},$=function(y,O){var N=O&&"process"in O?O.process:O;return typeof N!="function"?y:function(j,Y){return N(j,y,Y)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n($(a,O),y)},decamelizeKeys:function(y,O){return n($(o,O),y,O)},pascalizeKeys:function(y,O){return n($(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(md)})(Jo);var pd=Jo.exports,hd=["class","style"];function gd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=pd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function vd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ga(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=vd(d);break;case"style":l.style=gd(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ld(n,hd);return bo(e.tag,_e(_e(_e({},t),{},{class:a.class,style:_e(_e({},a.style),o)},a.attrs),s),r)}var Go=!1;try{Go=!0}catch{}function bd(){if(!Go&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function yd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xi(e){if(e&&On(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Cn.icon)return Cn.icon(e);if(e===null)return null;if(On(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _d=De({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return xi(t.icon)}),i=ve(function(){return Bt("classes",yd(t))}),o=ve(function(){return Bt("transform",typeof t.transform=="string"?Cn.transform(t.transform):t.transform)}),s=ve(function(){return Bt("mask",xi(t.mask))}),l=ve(function(){return id(a.value,_e(_e(_e(_e({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});ln(l,function(d){if(!d)return bd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ve(function(){return l.value?ga(l.value.abstract[0],{},r):null});return function(){return u.value}}});De({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Xo.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Nr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return bo("div",{class:i.value},r.default?r.default():[])}}});De({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Xo.familyPrefix,i=ve(function(){return Bt("classes",[].concat(Nr(t.counter?["".concat(a,"-layers-counter")]:[]),Nr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Bt("transform",typeof t.transform=="string"?Cn.transform(t.transform):t.transform)}),s=ve(function(){var u=od(t.value.toString(),_e(_e({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return ga(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var xd={prefix:"fas",iconName:"file-code",icon:[384,512,[],"f1c9","M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM154.1 353.8c7.812 7.812 7.812 20.5 0 28.31C150.2 386.1 145.1 388 140 388s-10.23-1.938-14.14-5.844l-48-48c-7.812-7.812-7.812-20.5 0-28.31l48-48c7.812-7.812 20.47-7.812 28.28 0s7.812 20.5 0 28.31L120.3 320L154.1 353.8zM306.1 305.8c7.812 7.812 7.812 20.5 0 28.31l-48 48C254.2 386.1 249.1 388 244 388s-10.23-1.938-14.14-5.844c-7.812-7.812-7.812-20.5 0-28.31L263.7 320l-33.86-33.84c-7.812-7.812-7.812-20.5 0-28.31s20.47-7.812 28.28 0L306.1 305.8zM256 0v128h128L256 0z"]},wd={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"]},kd={prefix:"fas",iconName:"industry",icon:[576,512,[],"f275","M128 32C145.7 32 160 46.33 160 64V215.4L316.6 131C332.6 122.4 352 134 352 152.2V215.4L508.6 131C524.6 122.4 544 134 544 152.2V432C544 458.5 522.5 480 496 480H80C53.49 480 32 458.5 32 432V64C32 46.33 46.33 32 64 32H128z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ad={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Cd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Od={prefix:"fab",iconName:"stack-overflow",icon:[384,512,[],"f16c","M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"]};ad.add(Ad,Cd,Od,wd,kd,xd);wf(kc).component("FontAwesomeIcon",_d).mount("#app");
