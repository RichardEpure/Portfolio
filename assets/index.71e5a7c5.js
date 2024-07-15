(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Fr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Zo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",es=Fr(Zo);function wi(e){return!!e||e===""}function Rr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?rs(r):Rr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(Q(e))return e}}const ts=/;(?![^(]*\))/g,ns=/:(.+)/;function rs(e){const t={};return e.split(ts).forEach(n=>{if(n){const r=n.split(ns);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function En(e){let t="";if(ee(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=En(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ft=e=>ee(e)?e:e==null?"":F(e)||Q(e)&&(e.toString===Ei||!L(e.toString))?JSON.stringify(e,ki,2):String(e),ki=(e,t)=>t&&t.__v_isRef?ki(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ai(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!F(t)&&!Oi(t)?String(t):t,K={},bt=[],ke=()=>{},as=()=>!1,is=/^on[^a-z]/,On=e=>is.test(e),Lr=e=>e.startsWith("onUpdate:"),oe=Object.assign,zr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},os=Object.prototype.hasOwnProperty,j=(e,t)=>os.call(e,t),F=Array.isArray,yt=e=>Sn(e)==="[object Map]",Ai=e=>Sn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",$r=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Ci=e=>Q(e)&&L(e.then)&&L(e.catch),Ei=Object.prototype.toString,Sn=e=>Ei.call(e),ss=e=>Sn(e).slice(8,-1),Oi=e=>Sn(e)==="[object Object]",jr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,on=Fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),In=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ls=/-(\w)/g,Ne=In(e=>e.replace(ls,(t,n)=>n?n.toUpperCase():"")),fs=/\B([A-Z])/g,At=In(e=>e.replace(fs,"-$1").toLowerCase()),Pn=In(e=>e.charAt(0).toUpperCase()+e.slice(1)),qn=In(e=>e?`on${Pn(e)}`:""),pn=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},cs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ka;const us=()=>ka||(ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Se;class ds{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Se&&(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ms(e,t=Se){t&&t.active&&t.effects.push(e)}const Dr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Si=e=>(e.w&Ge)>0,Ii=e=>(e.n&Ge)>0,ps=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ge},hs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Si(a)&&!Ii(a)?a.delete(e):t[n++]=a,a.w&=~Ge,a.n&=~Ge}t.length=n}},or=new WeakMap;let Rt=0,Ge=1;const sr=30;let ye;const at=Symbol(""),lr=Symbol("");class Ur{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ms(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,qe=!0,Ge=1<<++Rt,Rt<=sr?ps(this):Aa(this),this.fn()}finally{Rt<=sr&&hs(this),Ge=1<<--Rt,ye=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(Aa(this),this.onStop&&this.onStop(),this.active=!1)}}function Aa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Pi=[];function Ct(){Pi.push(qe),qe=!1}function Et(){const e=Pi.pop();qe=e===void 0?!0:e}function he(e,t,n){if(qe&&ye){let r=or.get(e);r||or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Dr()),Ti(a)}}function Ti(e,t){let n=!1;Rt<=sr?Ii(e)||(e.n|=Ge,n=!Si(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function Le(e,t,n,r,a,i){const o=or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?jr(n)&&s.push(o.get("length")):(s.push(o.get(at)),yt(e)&&s.push(o.get(lr)));break;case"delete":F(e)||(s.push(o.get(at)),yt(e)&&s.push(o.get(lr)));break;case"set":yt(e)&&s.push(o.get(at));break}if(s.length===1)s[0]&&fr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);fr(Dr(l))}}function fr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ca(r);for(const r of n)r.computed||Ca(r)}function Ca(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const gs=Fr("__proto__,__v_isRef,__isVue"),Ni=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($r)),vs=Hr(),bs=Hr(!1,!0),ys=Hr(!0),Ea=_s();function _s(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ct();const r=H(this)[t].apply(this,n);return Et(),r}}),e}function Hr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ls:zi:t?Li:Ri).get(r))return r;const o=F(r);if(!e&&o&&j(Ea,a))return Reflect.get(Ea,a,i);const s=Reflect.get(r,a,i);return($r(a)?Ni.has(a):gs(a))||(e||he(r,"get",a),t)?s:ie(s)?o&&jr(a)?s:s.value:Q(s)?e?$i(s):Yr(s):s}}const xs=Mi(),ws=Mi(!0);function Mi(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&ie(o)&&!ie(a))return!1;if(!e&&!Wt(a)&&(cr(a)||(a=H(a),o=H(o)),!F(n)&&ie(o)&&!ie(a)))return o.value=a,!0;const s=F(n)&&jr(r)?Number(r)<n.length:j(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?pn(a,o)&&Le(n,"set",r,a):Le(n,"add",r,a)),l}}function ks(e,t){const n=j(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Le(e,"delete",t,void 0),r}function As(e,t){const n=Reflect.has(e,t);return(!$r(t)||!Ni.has(t))&&he(e,"has",t),n}function Cs(e){return he(e,"iterate",F(e)?"length":at),Reflect.ownKeys(e)}const Fi={get:vs,set:xs,deleteProperty:ks,has:As,ownKeys:Cs},Es={get:ys,set(e,t){return!0},deleteProperty(e,t){return!0}},Os=oe({},Fi,{get:bs,set:ws}),Br=e=>e,Tn=e=>Reflect.getPrototypeOf(e);function Qt(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=Tn(a),s=r?Br:n?qr:Vr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Zt(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function en(e,t=!1){return e=e.__v_raw,!t&&he(H(e),"iterate",at),Reflect.get(e,"size",e)}function Oa(e){e=H(e);const t=H(this);return Tn(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function Sa(e,t){t=H(t);const n=H(this),{has:r,get:a}=Tn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?pn(t,o)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function Ia(e){const t=H(this),{has:n,get:r}=Tn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Le(t,"delete",e,void 0),i}function Pa(){const e=H(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function tn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Br:e?qr:Vr;return!e&&he(s,"iterate",at),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function nn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=yt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Br:t?qr:Vr;return!t&&he(i,"iterate",l?lr:at),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function Ss(){const e={get(i){return Qt(this,i)},get size(){return en(this)},has:Zt,add:Oa,set:Sa,delete:Ia,clear:Pa,forEach:tn(!1,!1)},t={get(i){return Qt(this,i,!1,!0)},get size(){return en(this)},has:Zt,add:Oa,set:Sa,delete:Ia,clear:Pa,forEach:tn(!1,!0)},n={get(i){return Qt(this,i,!0)},get size(){return en(this,!0)},has(i){return Zt.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:tn(!0,!1)},r={get(i){return Qt(this,i,!0,!0)},get size(){return en(this,!0)},has(i){return Zt.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:tn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=nn(i,!1,!1),n[i]=nn(i,!0,!1),t[i]=nn(i,!1,!0),r[i]=nn(i,!0,!0)}),[e,n,t,r]}const[Is,Ps,Ts,Ns]=Ss();function Wr(e,t){const n=t?e?Ns:Ts:e?Ps:Is;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(j(n,a)&&a in r?n:r,a,i)}const Ms={get:Wr(!1,!1)},Fs={get:Wr(!1,!0)},Rs={get:Wr(!0,!1)},Ri=new WeakMap,Li=new WeakMap,zi=new WeakMap,Ls=new WeakMap;function zs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $s(e){return e.__v_skip||!Object.isExtensible(e)?0:zs(ss(e))}function Yr(e){return Wt(e)?e:Kr(e,!1,Fi,Ms,Ri)}function js(e){return Kr(e,!1,Os,Fs,Li)}function $i(e){return Kr(e,!0,Es,Rs,zi)}function Kr(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=$s(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function _t(e){return Wt(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function cr(e){return!!(e&&e.__v_isShallow)}function ji(e){return _t(e)||Wt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Di(e){return hn(e,"__v_skip",!0),e}const Vr=e=>Q(e)?Yr(e):e,qr=e=>Q(e)?$i(e):e;function Ds(e){qe&&ye&&(e=H(e),Ti(e.dep||(e.dep=Dr())))}function Us(e,t){e=H(e),e.dep&&fr(e.dep)}function ie(e){return!!(e&&e.__v_isRef===!0)}function Ui(e){return ie(e)?e.value:e}const Hs={get:(e,t,n)=>Ui(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ie(a)&&!ie(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Hi(e){return _t(e)?e:new Proxy(e,Hs)}class Bs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ur(t,()=>{this._dirty||(this._dirty=!0,Us(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Ds(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ws(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=ke):(r=e.get,a=e.set),new Bs(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Nn(i,t,n)}return a}function Ae(e,t,n,r){if(L(e)){const i=Xe(e,t,n,r);return i&&Ci(i)&&i.catch(o=>{Nn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}function Nn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}Ys(e,n,a,r)}function Ys(e,t,n,r=!0){console.error(e)}let gn=!1,ur=!1;const pe=[];let Re=0;const $t=[];let Lt=null,mt=0;const jt=[];let Ke=null,pt=0;const Bi=Promise.resolve();let Xr=null,dr=null;function Ks(e){const t=Xr||Bi;return e?t.then(this?e.bind(this):e):t}function Vs(e){let t=Re+1,n=pe.length;for(;t<n;){const r=t+n>>>1;Yt(pe[r])<e?t=r+1:n=r}return t}function Wi(e){(!pe.length||!pe.includes(e,gn&&e.allowRecurse?Re+1:Re))&&e!==dr&&(e.id==null?pe.push(e):pe.splice(Vs(e.id),0,e),Yi())}function Yi(){!gn&&!ur&&(ur=!0,Xr=Bi.then(qi))}function qs(e){const t=pe.indexOf(e);t>Re&&pe.splice(t,1)}function Ki(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Yi()}function Xs(e){Ki(e,Lt,$t,mt)}function Gs(e){Ki(e,Ke,jt,pt)}function Mn(e,t=null){if($t.length){for(dr=t,Lt=[...new Set($t)],$t.length=0,mt=0;mt<Lt.length;mt++)Lt[mt]();Lt=null,mt=0,dr=null,Mn(e,t)}}function Vi(e){if(Mn(),jt.length){const t=[...new Set(jt)];if(jt.length=0,Ke){Ke.push(...t);return}for(Ke=t,Ke.sort((n,r)=>Yt(n)-Yt(r)),pt=0;pt<Ke.length;pt++)Ke[pt]();Ke=null,pt=0}}const Yt=e=>e.id==null?1/0:e.id;function qi(e){ur=!1,gn=!0,Mn(e),pe.sort((n,r)=>Yt(n)-Yt(r));const t=ke;try{for(Re=0;Re<pe.length;Re++){const n=pe[Re];n&&n.active!==!1&&Xe(n,null,14)}}finally{Re=0,pe.length=0,Vi(),gn=!1,Xr=null,(pe.length||$t.length||jt.length)&&qi(e)}}function Js(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||K;b&&(a=n.map(C=>C.trim())),m&&(a=n.map(cs))}let s,l=r[s=qn(t)]||r[s=qn(Ne(t))];!l&&i&&(l=r[s=qn(At(t))]),l&&Ae(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ae(u,e,6,a)}}function Xi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=Xi(u,t,!0);d&&(s=!0,oe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):oe(o,i),r.set(e,o),o)}function Fn(e,t){return!e||!On(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,At(t))||j(e,t))}let Pe=null,Rn=null;function vn(e){const t=Pe;return Pe=e,Rn=e&&e.type.__scopeId||null,t}function Gr(e){Rn=e}function Jr(){Rn=null}function Qs(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Da(-1);const i=vn(t),o=e(...a);return vn(i),r._d&&Da(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Gn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:C,ctx:R,inheritAttrs:z}=e;let T,y;const E=vn(e);try{if(n.shapeFlag&4){const $=a||r;T=Ie(d.call($,$,m,i,C,b,R)),y=l}else{const $=t;T=Ie($.length>1?$(i,{attrs:l,slots:s,emit:u}):$(i,null)),y=t.props?l:Zs(l)}}catch($){Dt.length=0,Nn($,e,1),T=X(ot)}let N=T;if(y&&z!==!1){const $=Object.keys(y),{shapeFlag:Y}=N;$.length&&Y&7&&(o&&$.some(Lr)&&(y=el(y,o)),N=wt(N,y))}return n.dirs&&(N=wt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),T=N,vn(E),T}const Zs=e=>{let t;for(const n in e)(n==="class"||n==="style"||On(n))&&((t||(t={}))[n]=e[n]);return t},el=(e,t)=>{const n={};for(const r in e)(!Lr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ta(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Fn(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ta(r,o,u):!0:!!o;return!1}function Ta(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Fn(n,i))return!0}return!1}function nl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const rl=e=>e.__isSuspense;function al(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Gs(e)}function il(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function Jn(e,t,n=!1){const r=te||Pe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Na={};function sn(e,t,n){return Gi(e,t,n)}function Gi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=te;let l,u=!1,d=!1;if(ie(e)?(l=()=>e.value,u=cr(e)):_t(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(y=>_t(y)||cr(y)),l=()=>e.map(y=>{if(ie(y))return y.value;if(_t(y))return ht(y);if(L(y))return Xe(y,s,2)})):L(e)?t?l=()=>Xe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ae(e,s,3,[b])}:l=ke,t&&r){const y=l;l=()=>ht(y())}let m,b=y=>{m=T.onStop=()=>{Xe(y,s,4)}};if(Vt)return b=ke,t?n&&Ae(t,s,3,[l(),d?[]:void 0,b]):l(),ke;let C=d?[]:Na;const R=()=>{if(!!T.active)if(t){const y=T.run();(r||u||(d?y.some((E,N)=>pn(E,C[N])):pn(y,C)))&&(m&&m(),Ae(t,s,3,[y,C===Na?void 0:C,b]),C=y)}else T.run()};R.allowRecurse=!!t;let z;a==="sync"?z=R:a==="post"?z=()=>ce(R,s&&s.suspense):z=()=>Xs(R);const T=new Ur(l,z);return t?n?R():C=T.run():a==="post"?ce(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&zr(s.scope.effects,T)}}function ol(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?Ji(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=te;kt(this);const s=Gi(a,i.bind(r),n);return o?kt(o):it(),s}function Ji(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ie(e))ht(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(Ai(e)||yt(e))e.forEach(n=>{ht(n,t)});else if(Oi(e))for(const n in e)ht(e[n],t);return e}function De(e){return L(e)?{setup:e,name:e.name}:e}const ln=e=>!!e.type.__asyncLoader,Qi=e=>e.type.__isKeepAlive;function sl(e,t){Zi(e,"a",t)}function ll(e,t){Zi(e,"da",t)}function Zi(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ln(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Qi(a.parent.vnode)&&fl(r,t,n,a),a=a.parent}}function fl(e,t,n,r){const a=Ln(t,e,r,!0);eo(()=>{zr(r[t],a)},n)}function Ln(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),kt(n);const s=Ae(t,n,e,o);return it(),Et(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=te)=>(!Vt||e==="sp")&&Ln(e,t,n),cl=Ue("bm"),ul=Ue("m"),dl=Ue("bu"),ml=Ue("u"),pl=Ue("bum"),eo=Ue("um"),hl=Ue("sp"),gl=Ue("rtg"),vl=Ue("rtc");function bl(e,t=te){Ln("ec",e,t)}function Ze(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ct(),Ae(l,n,8,[e.el,s,e,t]),Et())}}const to="components";function no(e,t){return _l(to,e,!0,t)||e}const yl=Symbol();function _l(e,t,n=!0,r=!1){const a=Pe||te;if(a){const i=a.type;if(e===to){const s=Gl(i,!1);if(s&&(s===t||s===Ne(t)||s===Pn(Ne(t))))return i}const o=Ma(a[e]||i[e],t)||Ma(a.appContext[e],t);return!o&&r?i:o}}function Ma(e,t){return e&&(e[t]||e[Ne(t)]||e[Pn(Ne(t))])}function fn(e,t,n,r){let a;const i=n&&n[r];if(F(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Q(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const mr=e=>e?go(e)?ta(e)||e.proxy:mr(e.parent):null,bn=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mr(e.parent),$root:e=>mr(e.root),$emit:e=>e.emit,$options:e=>ao(e),$forceUpdate:e=>e.f||(e.f=()=>Wi(e.update)),$nextTick:e=>e.n||(e.n=Ks.bind(e.proxy)),$watch:e=>ol.bind(e)}),xl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const C=o[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&j(r,t))return o[t]=1,r[t];if(a!==K&&j(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&j(u,t))return o[t]=3,i[t];if(n!==K&&j(n,t))return o[t]=4,n[t];pr&&(o[t]=0)}}const d=bn[t];let m,b;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&j(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,j(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&j(a,t)?(a[t]=n,!0):r!==K&&j(r,t)?(r[t]=n,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&j(e,o)||t!==K&&j(t,o)||(s=i[0])&&j(s,o)||j(r,o)||j(bn,o)||j(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:j(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let pr=!0;function wl(e){const t=ao(e),n=e.proxy,r=e.ctx;pr=!1,t.beforeCreate&&Fa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:C,updated:R,activated:z,deactivated:T,beforeDestroy:y,beforeUnmount:E,destroyed:N,unmounted:$,render:Y,renderTracked:re,renderTriggered:de,errorCaptured:Ce,serverPrefetch:se,expose:It,inheritAttrs:ft,components:Pt,directives:Gt,filters:va}=t;if(u&&kl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const V=o[J];L(V)&&(r[J]=V.bind(n))}if(a){const J=a.call(n,n);Q(J)&&(e.data=Yr(J))}if(pr=!0,i)for(const J in i){const V=i[J],Me=L(V)?V.bind(n,n):L(V.get)?V.get.bind(n,n):ke,Yn=!L(V)&&L(V.set)?V.set.bind(n):ke,Tt=ve({get:Me,set:Yn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:ct=>Tt.value=ct})}if(s)for(const J in s)ro(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(V=>{il(V,J[V])})}d&&Fa(d,e,"c");function le(J,V){F(V)?V.forEach(Me=>J(Me.bind(n))):V&&J(V.bind(n))}if(le(cl,m),le(ul,b),le(dl,C),le(ml,R),le(sl,z),le(ll,T),le(bl,Ce),le(vl,re),le(gl,de),le(pl,E),le(eo,$),le(hl,se),F(It))if(It.length){const J=e.exposed||(e.exposed={});It.forEach(V=>{Object.defineProperty(J,V,{get:()=>n[V],set:Me=>n[V]=Me})})}else e.exposed||(e.exposed={});Y&&e.render===ke&&(e.render=Y),ft!=null&&(e.inheritAttrs=ft),Pt&&(e.components=Pt),Gt&&(e.directives=Gt)}function kl(e,t,n=ke,r=!1){F(e)&&(e=hr(e));for(const a in e){const i=e[a];let o;Q(i)?"default"in i?o=Jn(i.from||a,i.default,!0):o=Jn(i.from||a):o=Jn(i),ie(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Fa(e,t,n){Ae(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ro(e,t,n,r){const a=r.includes(".")?Ji(n,r):()=>n[r];if(ee(e)){const i=t[e];L(i)&&sn(a,i)}else if(L(e))sn(a,e.bind(n));else if(Q(e))if(F(e))e.forEach(i=>ro(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&sn(a,i,e)}}function ao(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>yn(l,u,o,!0)),yn(l,t,o)),i.set(t,l),l}function yn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&yn(e,i,n,!0),a&&a.forEach(o=>yn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Al[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Al={data:Ra,props:tt,emits:tt,methods:tt,computed:tt,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:tt,directives:tt,watch:El,provide:Ra,inject:Cl};function Ra(e,t){return t?e?function(){return oe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Cl(e,t){return tt(hr(e),hr(t))}function hr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function tt(e,t){return e?oe(oe(Object.create(null),e),t):t}function El(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=ae(e[r],t[r]);return n}function Ol(e,t,n,r=!1){const a={},i={};hn(i,zn,1),e.propsDefaults=Object.create(null),io(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:js(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Sl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Fn(e.emitsOptions,b))continue;const C=t[b];if(l)if(j(i,b))C!==i[b]&&(i[b]=C,u=!0);else{const R=Ne(b);a[R]=gr(l,s,R,C,e,!1)}else C!==i[b]&&(i[b]=C,u=!0)}}}else{io(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!j(t,m)&&((d=At(m))===m||!j(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=gr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!j(t,m)&&!0)&&(delete i[m],u=!0)}u&&Le(e,"set","$attrs")}function io(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(on(l))continue;const u=t[l];let d;a&&j(a,d=Ne(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Fn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=H(n),u=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=gr(a,l,m,u[m],e,!j(u,m))}}return o}function gr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=j(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(kt(a),r=u[n]=l.call(null,t),it())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===At(n))&&(r=!0))}return r}function oo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[b,C]=oo(m,t,!0);oe(o,b),C&&s.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,bt),bt;if(F(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);La(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Ne(d);if(La(m)){const b=i[d],C=o[m]=F(b)||L(b)?{type:b}:b;if(C){const R=ja(Boolean,C.type),z=ja(String,C.type);C[0]=R>-1,C[1]=z<0||R<z,(R>-1||j(C,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function La(e){return e[0]!=="$"}function za(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function $a(e,t){return za(e)===za(t)}function ja(e,t){return F(t)?t.findIndex(n=>$a(n,e)):L(t)&&$a(t,e)?0:-1}const so=e=>e[0]==="_"||e==="$stable",Qr=e=>F(e)?e.map(Ie):[Ie(e)],Il=(e,t,n)=>{if(t._n)return t;const r=Qs((...a)=>Qr(t(...a)),n);return r._c=!1,r},lo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(so(a))continue;const i=e[a];if(L(i))t[a]=Il(a,i,r);else if(i!=null){const o=Qr(i);t[a]=()=>o}}},fo=(e,t)=>{const n=Qr(t);e.slots.default=()=>n},Pl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),hn(t,"_",n)):lo(t,e.slots={})}else e.slots={},t&&fo(e,t);hn(e.slots,zn,1)},Tl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(oe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,lo(t,a)),o=t}else t&&(fo(e,t),o={default:1});if(i)for(const s in a)!so(s)&&!(s in o)&&delete a[s]};function co(){return{app:null,config:{isNativeTag:as,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nl=0;function Ml(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!Q(a)&&(a=null);const i=co(),o=new Set;let s=!1;const l=i.app={_uid:Nl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ql,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=X(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,ta(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function vr(e,t,n,r,a=!1){if(F(e)){e.forEach((b,C)=>vr(b,t&&(F(t)?t[C]:t),n,r,a));return}if(ln(r)&&!a)return;const i=r.shapeFlag&4?ta(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ee(u)?(d[u]=null,j(m,u)&&(m[u]=null)):ie(u)&&(u.value=null)),L(l))Xe(l,s,12,[o,d]);else{const b=ee(l),C=ie(l);if(b||C){const R=()=>{if(e.f){const z=b?d[l]:l.value;a?F(z)&&zr(z,i):F(z)?z.includes(i)||z.push(i):b?(d[l]=[i],j(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,j(m,l)&&(m[l]=o)):C&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,ce(R,n)):R()}}}const ce=al;function Fl(e){return Rl(e)}function Rl(e,t){const n=us();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:C=ke,cloneNode:R,insertStaticContent:z}=e,T=(f,c,p,g=null,h=null,x=null,k=!1,_=null,w=!!c.dynamicChildren)=>{if(f===c)return;f&&!Mt(f,c)&&(g=Jt(f),Be(f,h,x,!0),f=null),c.patchFlag===-2&&(w=!1,c.dynamicChildren=null);const{type:v,ref:S,shapeFlag:O}=c;switch(v){case Zr:y(f,c,p,g);break;case ot:E(f,c,p,g);break;case Qn:f==null&&N(c,p,g,k);break;case ue:Gt(f,c,p,g,h,x,k,_,w);break;default:O&1?re(f,c,p,g,h,x,k,_,w):O&6?va(f,c,p,g,h,x,k,_,w):(O&64||O&128)&&v.process(f,c,p,g,h,x,k,_,w,ut)}S!=null&&h&&vr(S,f&&f.ref,x,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},E=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=z(f.children,c,p,g,f.el,f.anchor)},$=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},Y=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},re=(f,c,p,g,h,x,k,_,w)=>{k=k||c.type==="svg",f==null?de(c,p,g,h,x,k,_,w):It(f,c,h,x,k,_,w)},de=(f,c,p,g,h,x,k,_)=>{let w,v;const{type:S,props:O,shapeFlag:I,transition:M,patchFlag:D,dirs:B}=f;if(f.el&&R!==void 0&&D===-1)w=f.el=R(f.el);else{if(w=f.el=o(f.type,x,O&&O.is,O),I&8?d(w,f.children):I&16&&se(f.children,w,null,g,h,x&&S!=="foreignObject",k,_),B&&Ze(f,null,g,"created"),O){for(const q in O)q!=="value"&&!on(q)&&i(w,q,null,O[q],x,f.children,g,h,Fe);"value"in O&&i(w,"value",null,O.value),(v=O.onVnodeBeforeMount)&&Oe(v,g,f)}Ce(w,f,f.scopeId,k,g)}B&&Ze(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;W&&M.beforeEnter(w),r(w,c,p),((v=O&&O.onVnodeMounted)||W||B)&&ce(()=>{v&&Oe(v,g,f),W&&M.enter(w),B&&Ze(f,null,g,"mounted")},h)},Ce=(f,c,p,g,h)=>{if(p&&C(f,p),g)for(let x=0;x<g.length;x++)C(f,g[x]);if(h){let x=h.subTree;if(c===x){const k=h.vnode;Ce(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},se=(f,c,p,g,h,x,k,_,w=0)=>{for(let v=w;v<f.length;v++){const S=f[v]=_?Ve(f[v]):Ie(f[v]);T(null,S,c,p,g,h,x,k,_)}},It=(f,c,p,g,h,x,k)=>{const _=c.el=f.el;let{patchFlag:w,dynamicChildren:v,dirs:S}=c;w|=f.patchFlag&16;const O=f.props||K,I=c.props||K;let M;p&&et(p,!1),(M=I.onVnodeBeforeUpdate)&&Oe(M,p,c,f),S&&Ze(c,f,p,"beforeUpdate"),p&&et(p,!0);const D=h&&c.type!=="foreignObject";if(v?ft(f.dynamicChildren,v,_,p,g,D,x):k||Me(f,c,_,null,p,g,D,x,!1),w>0){if(w&16)Pt(_,c,O,I,p,g,h);else if(w&2&&O.class!==I.class&&i(_,"class",null,I.class,h),w&4&&i(_,"style",O.style,I.style,h),w&8){const B=c.dynamicProps;for(let W=0;W<B.length;W++){const q=B[W],be=O[q],dt=I[q];(dt!==be||q==="value")&&i(_,q,be,dt,h,f.children,p,g,Fe)}}w&1&&f.children!==c.children&&d(_,c.children)}else!k&&v==null&&Pt(_,c,O,I,p,g,h);((M=I.onVnodeUpdated)||S)&&ce(()=>{M&&Oe(M,p,c,f),S&&Ze(c,f,p,"updated")},g)},ft=(f,c,p,g,h,x,k)=>{for(let _=0;_<c.length;_++){const w=f[_],v=c[_],S=w.el&&(w.type===ue||!Mt(w,v)||w.shapeFlag&70)?m(w.el):p;T(w,v,S,null,g,h,x,k,!0)}},Pt=(f,c,p,g,h,x,k)=>{if(p!==g){for(const _ in g){if(on(_))continue;const w=g[_],v=p[_];w!==v&&_!=="value"&&i(f,_,v,w,k,c.children,h,x,Fe)}if(p!==K)for(const _ in p)!on(_)&&!(_ in g)&&i(f,_,p[_],null,k,c.children,h,x,Fe);"value"in g&&i(f,"value",p.value,g.value)}},Gt=(f,c,p,g,h,x,k,_,w)=>{const v=c.el=f?f.el:s(""),S=c.anchor=f?f.anchor:s("");let{patchFlag:O,dynamicChildren:I,slotScopeIds:M}=c;M&&(_=_?_.concat(M):M),f==null?(r(v,p,g),r(S,p,g),se(c.children,p,S,h,x,k,_,w)):O>0&&O&64&&I&&f.dynamicChildren?(ft(f.dynamicChildren,I,p,h,x,k,_),(c.key!=null||h&&c===h.subTree)&&uo(f,c,!0)):Me(f,c,p,S,h,x,k,_,w)},va=(f,c,p,g,h,x,k,_,w)=>{c.slotScopeIds=_,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,w):Wn(c,p,g,h,x,k,w):le(f,c,w)},Wn=(f,c,p,g,h,x,k)=>{const _=f.component=Yl(f,g,h);if(Qi(f)&&(_.ctx.renderer=ut),Kl(_),_.asyncDep){if(h&&h.registerDep(_,J),!f.el){const w=_.subTree=X(ot);E(null,w,c,p)}return}J(_,f,c,p,h,x,k)},le=(f,c,p)=>{const g=c.component=f.component;if(tl(f,c,p))if(g.asyncDep&&!g.asyncResolved){V(g,c,p);return}else g.next=c,qs(g.update),g.update();else c.el=f.el,g.vnode=c},J=(f,c,p,g,h,x,k)=>{const _=()=>{if(f.isMounted){let{next:S,bu:O,u:I,parent:M,vnode:D}=f,B=S,W;et(f,!1),S?(S.el=D.el,V(f,S,k)):S=D,O&&Xn(O),(W=S.props&&S.props.onVnodeBeforeUpdate)&&Oe(W,M,S,D),et(f,!0);const q=Gn(f),be=f.subTree;f.subTree=q,T(be,q,m(be.el),Jt(be),f,h,x),S.el=q.el,B===null&&nl(f,q.el),I&&ce(I,h),(W=S.props&&S.props.onVnodeUpdated)&&ce(()=>Oe(W,M,S,D),h)}else{let S;const{el:O,props:I}=c,{bm:M,m:D,parent:B}=f,W=ln(c);if(et(f,!1),M&&Xn(M),!W&&(S=I&&I.onVnodeBeforeMount)&&Oe(S,B,c),et(f,!0),O&&Vn){const q=()=>{f.subTree=Gn(f),Vn(O,f.subTree,f,h,null)};W?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Gn(f);T(null,q,p,g,f,h,x),c.el=q.el}if(D&&ce(D,h),!W&&(S=I&&I.onVnodeMounted)){const q=c;ce(()=>Oe(S,B,q),h)}(c.shapeFlag&256||B&&ln(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&ce(f.a,h),f.isMounted=!0,c=p=g=null}},w=f.effect=new Ur(_,()=>Wi(v),f.scope),v=f.update=()=>w.run();v.id=f.uid,et(f,!0),v()},V=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Sl(f,c.props,g,p),Tl(f,c.children,p),Ct(),Mn(void 0,f.update),Et()},Me=(f,c,p,g,h,x,k,_,w=!1)=>{const v=f&&f.children,S=f?f.shapeFlag:0,O=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Tt(v,O,p,g,h,x,k,_,w);return}else if(I&256){Yn(v,O,p,g,h,x,k,_,w);return}}M&8?(S&16&&Fe(v,h,x),O!==v&&d(p,O)):S&16?M&16?Tt(v,O,p,g,h,x,k,_,w):Fe(v,h,x,!0):(S&8&&d(p,""),M&16&&se(O,p,g,h,x,k,_,w))},Yn=(f,c,p,g,h,x,k,_,w)=>{f=f||bt,c=c||bt;const v=f.length,S=c.length,O=Math.min(v,S);let I;for(I=0;I<O;I++){const M=c[I]=w?Ve(c[I]):Ie(c[I]);T(f[I],M,p,null,h,x,k,_,w)}v>S?Fe(f,h,x,!0,!1,O):se(c,p,g,h,x,k,_,w,O)},Tt=(f,c,p,g,h,x,k,_,w)=>{let v=0;const S=c.length;let O=f.length-1,I=S-1;for(;v<=O&&v<=I;){const M=f[v],D=c[v]=w?Ve(c[v]):Ie(c[v]);if(Mt(M,D))T(M,D,p,null,h,x,k,_,w);else break;v++}for(;v<=O&&v<=I;){const M=f[O],D=c[I]=w?Ve(c[I]):Ie(c[I]);if(Mt(M,D))T(M,D,p,null,h,x,k,_,w);else break;O--,I--}if(v>O){if(v<=I){const M=I+1,D=M<S?c[M].el:g;for(;v<=I;)T(null,c[v]=w?Ve(c[v]):Ie(c[v]),p,D,h,x,k,_,w),v++}}else if(v>I)for(;v<=O;)Be(f[v],h,x,!0),v++;else{const M=v,D=v,B=new Map;for(v=D;v<=I;v++){const me=c[v]=w?Ve(c[v]):Ie(c[v]);me.key!=null&&B.set(me.key,v)}let W,q=0;const be=I-D+1;let dt=!1,_a=0;const Nt=new Array(be);for(v=0;v<be;v++)Nt[v]=0;for(v=M;v<=O;v++){const me=f[v];if(q>=be){Be(me,h,x,!0);continue}let Ee;if(me.key!=null)Ee=B.get(me.key);else for(W=D;W<=I;W++)if(Nt[W-D]===0&&Mt(me,c[W])){Ee=W;break}Ee===void 0?Be(me,h,x,!0):(Nt[Ee-D]=v+1,Ee>=_a?_a=Ee:dt=!0,T(me,c[Ee],p,null,h,x,k,_,w),q++)}const xa=dt?Ll(Nt):bt;for(W=xa.length-1,v=be-1;v>=0;v--){const me=D+v,Ee=c[me],wa=me+1<S?c[me+1].el:g;Nt[v]===0?T(null,Ee,p,wa,h,x,k,_,w):dt&&(W<0||v!==xa[W]?ct(Ee,p,wa,2):W--)}}},ct=(f,c,p,g,h=null)=>{const{el:x,type:k,transition:_,children:w,shapeFlag:v}=f;if(v&6){ct(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,ut);return}if(k===ue){r(x,c,p);for(let O=0;O<w.length;O++)ct(w[O],c,p,g);r(f.anchor,c,p);return}if(k===Qn){$(f,c,p);return}if(g!==2&&v&1&&_)if(g===0)_.beforeEnter(x),r(x,c,p),ce(()=>_.enter(x),h);else{const{leave:O,delayLeave:I,afterLeave:M}=_,D=()=>r(x,c,p),B=()=>{O(x,()=>{D(),M&&M()})};I?I(x,D,B):B()}else r(x,c,p)},Be=(f,c,p,g=!1,h=!1)=>{const{type:x,props:k,ref:_,children:w,dynamicChildren:v,shapeFlag:S,patchFlag:O,dirs:I}=f;if(_!=null&&vr(_,null,p,f,!0),S&256){c.ctx.deactivate(f);return}const M=S&1&&I,D=!ln(f);let B;if(D&&(B=k&&k.onVnodeBeforeUnmount)&&Oe(B,c,f),S&6)Qo(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}M&&Ze(f,null,c,"beforeUnmount"),S&64?f.type.remove(f,c,p,h,ut,g):v&&(x!==ue||O>0&&O&64)?Fe(v,c,p,!1,!0):(x===ue&&O&384||!h&&S&16)&&Fe(w,c,p),g&&ba(f)}(D&&(B=k&&k.onVnodeUnmounted)||M)&&ce(()=>{B&&Oe(B,c,f),M&&Ze(f,null,c,"unmounted")},p)},ba=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===ue){Jo(p,g);return}if(c===Qn){Y(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:_}=h,w=()=>k(p,x);_?_(f.el,x,w):w()}else x()},Jo=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Qo=(f,c,p)=>{const{bum:g,scope:h,update:x,subTree:k,um:_}=f;g&&Xn(g),h.stop(),x&&(x.active=!1,Be(k,f,c,p)),_&&ce(_,c),ce(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Fe=(f,c,p,g=!1,h=!1,x=0)=>{for(let k=x;k<f.length;k++)Be(f[k],c,p,g,h)},Jt=f=>f.shapeFlag&6?Jt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ya=(f,c,p)=>{f==null?c._vnode&&Be(c._vnode,null,null,!0):T(c._vnode||null,f,c,null,null,null,p),Vi(),c._vnode=f},ut={p:T,um:Be,m:ct,r:ba,mt:Wn,mc:se,pc:Me,pbc:ft,n:Jt,o:e};let Kn,Vn;return t&&([Kn,Vn]=t(ut)),{render:ya,hydrate:Kn,createApp:Ml(ya,Kn)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||uo(o,s))}}function Ll(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const zl=e=>e.__isTeleport,ue=Symbol(void 0),Zr=Symbol(void 0),ot=Symbol(void 0),Qn=Symbol(void 0),Dt=[];let xe=null;function Z(e=!1){Dt.push(xe=e?null:[])}function $l(){Dt.pop(),xe=Dt[Dt.length-1]||null}let Kt=1;function Da(e){Kt+=e}function mo(e){return e.dynamicChildren=Kt>0?xe||bt:null,$l(),Kt>0&&xe&&xe.push(e),e}function ne(e,t,n,r,a,i){return mo(U(e,t,n,r,a,i,!0))}function po(e,t,n,r,a){return mo(X(e,t,n,r,a,!0))}function br(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const zn="__vInternal",ho=({key:e})=>e!=null?e:null,cn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||ie(e)||L(e)?{i:Pe,r:e,k:t,f:!!n}:e:null;function U(e,t=null,n=null,r=0,a=null,i=e===ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ho(t),ref:t&&cn(t),scopeId:Rn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ea(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Kt>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const X=jl;function jl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===yl)&&(e=ot),br(e)){const s=wt(e,t,!0);return n&&ea(s,n),Kt>0&&!i&&xe&&(s.shapeFlag&6?xe[xe.indexOf(e)]=s:xe.push(s)),s.patchFlag|=-2,s}if(Jl(e)&&(e=e.__vccOpts),t){t=Dl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=En(s)),Q(l)&&(ji(l)&&!F(l)&&(l=oe({},l)),t.style=Rr(l))}const o=ee(e)?1:rl(e)?128:zl(e)?64:Q(e)?4:L(e)?2:0;return U(e,t,n,r,a,o,i,!0)}function Dl(e){return e?ji(e)||zn in e?oe({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Hl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ho(s),ref:t&&t.ref?n&&a?F(a)?a.concat(cn(t)):[a,cn(t)]:cn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor}}function Ul(e=" ",t=0){return X(Zr,null,e,t)}function rn(e="",t=!1){return t?(Z(),po(ot,null,e)):X(ot,null,e)}function Ie(e){return e==null||typeof e=="boolean"?X(ot):F(e)?X(ue,null,e.slice()):typeof e=="object"?Ve(e):X(Zr,null,String(e))}function Ve(e){return e.el===null||e.memo?e:wt(e)}function ea(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ea(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(zn in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[Ul(t)]):n=8);e.children=t,e.shapeFlag|=n}function Hl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=En([t.class,r.class]));else if(a==="style")t.style=Rr([t.style,r.style]);else if(On(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Oe(e,t,n,r=null){Ae(e,t,7,[n,r])}const Bl=co();let Wl=0;function Yl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Bl,i={uid:Wl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ds(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oo(r,a),emitsOptions:Xi(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Js.bind(null,i),e.ce&&e.ce(i),i}let te=null;const kt=e=>{te=e,e.scope.on()},it=()=>{te&&te.scope.off(),te=null};function go(e){return e.vnode.shapeFlag&4}let Vt=!1;function Kl(e,t=!1){Vt=t;const{props:n,children:r}=e.vnode,a=go(e);Ol(e,n,a,t),Pl(e,r);const i=a?Vl(e,t):void 0;return Vt=!1,i}function Vl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Di(new Proxy(e.ctx,xl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Xl(e):null;kt(e),Ct();const i=Xe(r,e,0,[e.props,a]);if(Et(),it(),Ci(i)){if(i.then(it,it),t)return i.then(o=>{Ua(e,o,t)}).catch(o=>{Nn(o,e,0)});e.asyncDep=i}else Ua(e,i,t)}else vo(e,t)}function Ua(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Hi(t)),vo(e,n)}let Ha;function vo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ha&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=oe(oe({isCustomElement:i,delimiters:s},o),l);r.render=Ha(a,u)}}e.render=r.render||ke}kt(e),Ct(),wl(e),Et(),it()}function ql(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function Xl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ql(e))},slots:e.slots,emit:e.emit,expose:t}}function ta(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hi(Di(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)}}))}function Gl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Jl(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>Ws(e,t,Vt);function bo(e,t,n){const r=arguments.length;return r===2?Q(t)&&!F(t)?br(t)?X(e,null,[t]):X(e,t):X(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&br(n)&&(n=[n]),X(e,t,n))}const Ql="3.2.37",Zl="http://www.w3.org/2000/svg",nt=typeof document<"u"?document:null,Ba=nt&&nt.createElement("template"),ef={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?nt.createElementNS(Zl,e):nt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>nt.createTextNode(e),createComment:e=>nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ba.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ba.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function tf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function nf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)yr(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&yr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Wa=/\s*!important$/;function yr(e,t,n){if(F(n))n.forEach(r=>yr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=rf(e,t);Wa.test(n)?e.setProperty(At(r),n.replace(Wa,""),"important"):e[r]=n}}const Ya=["Webkit","Moz","ms"],Zn={};function rf(e,t){const n=Zn[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return Zn[t]=r;r=Pn(r);for(let a=0;a<Ya.length;a++){const i=Ya[a]+r;if(i in e)return Zn[t]=i}return t}const Ka="http://www.w3.org/1999/xlink";function af(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ka,t.slice(6,t.length)):e.setAttributeNS(Ka,t,n);else{const i=es(t);n==null||i&&!wi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function of(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=wi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[yo,sf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let _r=0;const lf=Promise.resolve(),ff=()=>{_r=0},cf=()=>_r||(lf.then(ff),_r=yo());function uf(e,t,n,r){e.addEventListener(t,n,r)}function df(e,t,n,r){e.removeEventListener(t,n,r)}function mf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=pf(t);if(r){const u=i[t]=hf(r,a);uf(e,s,u,l)}else o&&(df(e,s,o,l),i[t]=void 0)}}const Va=/(?:Once|Passive|Capture)$/;function pf(e){let t;if(Va.test(e)){t={};let n;for(;n=e.match(Va);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[At(e.slice(2)),t]}function hf(e,t){const n=r=>{const a=r.timeStamp||yo();(sf||a>=n.attached-1)&&Ae(gf(r,n.value),t,5,[r])};return n.value=e,n.attached=cf(),n}function gf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const qa=/^on[a-z]/,vf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?tf(e,r,a):t==="style"?nf(e,n,r):On(t)?Lr(t)||mf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):bf(e,t,r,a))?of(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),af(e,t,r,a))};function bf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&qa.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||qa.test(t)&&ee(n)?!1:t in e}const yf=oe({patchProp:vf},ef);let Xa;function _f(){return Xa||(Xa=Fl(yf))}const xf=(...e)=>{const t=_f().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=wf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function wf(e){return ee(e)?document.querySelector(e):e}const kf=""+new URL("face.0206ed3c.png",import.meta.url).href,Af={class:"icon is-large"},Cf=["href"],er=De({__name:"SocialLink",props:{icon:null,url:null,size:{default:"xl"}},setup(e){const t=e;return(n,r)=>{const a=no("font-awesome-icon");return Z(),ne("span",Af,[U("a",{href:t.url,target:"_blank"},[X(a,{icon:`fa-brands fa-${t.icon}`,size:t.size},null,8,["icon","size"])],8,Cf)])}}}),na=e=>(Gr("data-v-3fef8b6e"),e=e(),Jr(),e),Ef={class:"hero is-large"},Of={class:"hero-body"},Sf={class:"container has-text-centered"},If=na(()=>U("figure",{class:"image mb-4 is-128x128"},[U("img",{class:"is-rounded",src:kf,alt:"picture of Richard"})],-1)),Pf=na(()=>U("h1",{class:"title is-3"},"RICHARD EPURE",-1)),Tf=na(()=>U("h2",{class:"subtitle"},"Software Engineer",-1)),Nf={class:"is-flex is-justify-content-center is-align-items-center"},Mf=De({__name:"Hero",setup(e){return(t,n)=>(Z(),ne("div",Ef,[U("div",Of,[U("div",Sf,[If,Pf,Tf,U("div",Nf,[X(er,{icon:"github",url:"https://github.com/RichardEpure"}),X(er,{icon:"linkedin",url:"https://www.linkedin.com/in/richard-epure-803733190/"}),X(er,{icon:"stack-overflow",url:"https://stackoverflow.com/users/18175770/richard-epure"})])])])]))}});const Ot=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Ff=Ot(Mf,[["__scopeId","data-v-3fef8b6e"]]),Rf={class:"tag is-size-6"},Lf=De({__name:"Skills",props:{skills:null,layout:null},setup(e){const t=e;return(n,r)=>(Z(),ne("div",{class:En(["tags",t.layout])},[(Z(!0),ne(ue,null,fn(t.skills,a=>(Z(),ne("p",Rf,Ft(a),1))),256))],2))}});const zf=Ot(Lf,[["__scopeId","data-v-795e7b17"]]),$f={class:"card block"},jf={class:"card-content"},Df={class:"media"},Uf={class:"media-left"},Hf={class:"icon is-large mb-1"},Bf={class:"media-content"},Wf={class:"title is-4"},Yf={key:0,class:"subtitle is-6"},Kf={key:0,class:"content"},Vf={class:"content"},qf={key:0,class:"card-footer"},Xf=["href"],Gf=De({__name:"ResumeCard",props:{resume_card:null},setup(e){const t=e,n=t.resume_card.type;let r="";switch(n){case"education":r="fa-graduation-cap";break;case"experience":r="fa-industry";break;case"project":r="fa-file-code";break}return(a,i)=>{const o=no("font-awesome-icon");return Z(),ne("div",$f,[U("div",jf,[U("div",Df,[U("div",Uf,[U("span",Hf,[X(o,{icon:`fa-solid ${Ui(r)}`,size:"2xl"},null,8,["icon"])])]),U("div",Bf,[U("p",Wf,Ft(t.resume_card.title),1),t.resume_card.subtitle?(Z(),ne("p",Yf,Ft(t.resume_card.subtitle),1)):rn("",!0)])]),t.resume_card.content?(Z(),ne("div",Kf,Ft(t.resume_card.content),1)):rn("",!0),U("div",Vf,[U("i",null,Ft(t.resume_card.date),1)]),t.resume_card.skills?(Z(),po(zf,{key:1,skills:t.resume_card.skills,layout:"inside-card"},null,8,["skills"])):rn("",!0)]),t.resume_card.url?(Z(),ne("footer",qf,[U("a",{class:"card-footer-item",href:t.resume_card.url,target:"_blank"}," View More ",8,Xf)])):rn("",!0)])}}});const tr=Ot(Gf,[["__scopeId","data-v-eeb45395"]]),$n=e=>(Gr("data-v-722c139c"),e=e(),Jr(),e),Jf={class:"section resume"},Qf={class:"container"},Zf=$n(()=>U("h2",{class:"title pb-6 pt-4"},"Resume",-1)),ec={class:"resume-section"},tc=$n(()=>U("h3",{class:"title is-4"},"Education",-1)),nc={class:"resume-section"},rc=$n(()=>U("h3",{class:"title is-4"},"Experience",-1)),ac={class:"resume-section"},ic=$n(()=>U("h3",{class:"title is-4"},"Personal Projects",-1)),oc=De({__name:"Resume",setup(e){const t=[{type:"education",title:"Queen Mary University of London",subtitle:"BSc of Computer Science with Industrial Experience",content:"Graduated with 1st class honours and won the Draper's Company undergraduate prizes for outstanding achievements in the academic years 2020/2021 & 2021/2022.",skills:["Web Programming","Algorithms & Data Structures","Distributed Systems","Software Engineering","Database Systems","Computer Graphics","Neural Networks","Graphical User Interfaces","Interaction Design"],date:"September 2018\u2014July 2022"},{type:"education",title:"East Barnet School",subtitle:"A levels & GCSEs",date:"September 2016\u2014June 2018"}],n=[{type:"experience",title:"2Simple",subtitle:"Software Developer",content:`\u2022 Migrated a project from Vue 2 class components to Vue 3 composition API, updated dependencies and build tools.
\u2022 Developed internal tooling for automated testing using puppeteer for various applications.
\u2022 Created unit and integration tests with Jest and Vue Test Utils, and prepared test plans for the testing team.
\u2022 Independently led significant legacy project rewrites from backbone.js to Vue 3 for improved maintainability, flexibility, and developer accessibility.
\u2022 Implemented backend API for AI with models from Open AI & Stability AI, and configured an admin panel for prompt customization using handlebars.
\u2022 Collaborated closely with the design team to optimize user experience on the frontend.`,skills:["TypeScript","Vue","JavaScript","MonoDB","Jest","SCSS","PHP","jQuery","Docker"],date:"March 2023\u2014Present"},{type:"experience",title:"Soapbox",subtitle:"Full-Stack Developer",content:`\u2022 Developed custom themes, plugins, and components for WordPress using PHP for back-end development.
\u2022 Implemented best practices for web development including BEM, ITCSS, and WCAG standards.
\u2022 Ensured reliability of live websites by using SSH for remote deployment, backups, and maintenance.
\u2022 Streamlined work across multiple projects by containerizing each environment with Docker and DDEV.
\u2022 Engaged with clients to address and resolve issues effectively while maintaining detailed documentation.`,skills:["JavaScript","jQuery","SCSS","BEM","ITCSS","PHP","WordPress","Docker"],date:"August 2020\u2014June 2021"},{type:"experience",title:"Freelance",subtitle:"Web Developer & Consultant",content:`\u2022 Utilized AWS to host, certify, cache, and distribute websites.
\u2022 Developed a responsive front-end to ensure compatibility across various screen sizes.
\u2022 Integrated relevant APIs like Google Maps Platform for enhanced functionality.
\u2022 Enhanced SEO through the use of Metadata, accessibility, and optimizing data loading efficiency.
\u2022 Ensured GDPR compliance in website development when necessary.
\u2022 Collaborated with clients to define requirements and strategize the website's development.`,skills:["JavaScript","SCSS","AWS"],date:"February 2019\u2014September 2019"}],r=[{type:"project",title:"Crust",subtitle:"Communications App",content:"A collaborative project that features a peer-to-peer text, voice, and screensharing application made using Tauri, Vue, Vite and TypeScript.",skills:["Rust","Tauri","TypeScript","Vue","Vite","SCSS"],date:"",url:"https://github.com/CallumWatkins/crust"},{type:"project",title:"2048",subtitle:"Video game",content:"A remake of the classic game 2048, written in Rust using Bevy.",skills:["Rust","Bevy"],date:"",url:"https://github.com/RichardEpure/2048"},{type:"project",title:"Sokoban Solver",subtitle:"Reinforcement learning AI",content:"My final year project for University. Creating a machine learning model to play and solve Sokoban levels. The learning experience has been invaluable as I tackled an extremely difficult challenge that is still currently being explored by AI experts.",skills:["Python","Stable Baselines","Gym"],date:"",url:"https://github.com/RichardEpure/Sokoban-Solver"},{type:"project",title:"3D Snake",subtitle:"Video game",content:"My first attempt at tackling OpenGL and shaders using C++ with GLFW. Sparked my interest in shaders and became my motivation for taking Computer Graphics at University.",skills:["C++","OpenGL","GLFW","GLSL"],date:"",url:"https://github.com/RichardEpure/3D-snake"}];return(a,i)=>(Z(),ne("section",Jf,[U("div",Qf,[Zf,U("div",ec,[tc,(Z(),ne(ue,null,fn(t,o=>X(tr,{resume_card:o},null,8,["resume_card"])),64))]),U("div",nc,[rc,(Z(),ne(ue,null,fn(n,o=>X(tr,{resume_card:o},null,8,["resume_card"])),64))]),U("div",ac,[ic,(Z(),ne(ue,null,fn(r,o=>X(tr,{resume_card:o},null,8,["resume_card"])),64))])])]))}});const sc=Ot(oc,[["__scopeId","data-v-722c139c"]]),lc={},fc={class:"footer"},cc=U("div",{class:"content has-text-centered"},[U("p",null,"Richard Epure 2022")],-1),uc=[cc];function dc(e,t){return Z(),ne("footer",fc,uc)}const mc=Ot(lc,[["render",dc]]);const pc={},hc=e=>(Gr("data-v-3fecf479"),e=e(),Jr(),e),gc={class:"section is-medium"},vc=hc(()=>U("div",{class:"container"},[U("div",{class:"inner"},[U("h2",{class:"title has-text-centered"},"About Me"),U("p",{class:"content"}," Hello! I am a developer that has been programming ever since I chose Computer Science as a GCSE module. During my time as a student I have learnt a lot about web development and managed to gain experience in the industry. I also enjoy game development and computer graphics as a hobby and I commonly learn new languages by creating simple games with them. ")])],-1)),bc=[vc];function yc(e,t){return Z(),ne("section",gc,bc)}const _c=Ot(pc,[["render",yc],["__scopeId","data-v-3fecf479"]]),xc=De({__name:"App",setup(e){return(t,n)=>(Z(),ne(ue,null,[X(Ff),X(_c),X(sc),X(mc)],64))}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ga(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ga(Object(n),!0).forEach(function(r){Ac(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ga(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _n(e){return _n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_n(e)}function wc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ja(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kc(e,t,n){return t&&Ja(e.prototype,t),n&&Ja(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ac(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ra(e,t){return Ec(e)||Sc(e,t)||_o(e,t)||Pc()}function jn(e){return Cc(e)||Oc(e)||_o(e)||Ic()}function Cc(e){if(Array.isArray(e))return xr(e)}function Ec(e){if(Array.isArray(e))return e}function Oc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function _o(e,t){if(!!e){if(typeof e=="string")return xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xr(e,t)}}function xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ic(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qa=function(){},aa={},xo={},wo=null,ko={mark:Qa,measure:Qa};try{typeof window<"u"&&(aa=window),typeof document<"u"&&(xo=document),typeof MutationObserver<"u"&&(wo=MutationObserver),typeof performance<"u"&&(ko=performance)}catch{}var Tc=aa.navigator||{},Za=Tc.userAgent,ei=Za===void 0?"":Za,Je=aa,G=xo,ti=wo,an=ko;Je.document;var He=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",Ao=~ei.indexOf("MSIE")||~ei.indexOf("Trident/"),ze="___FONT_AWESOME___",wr=16,Co="fa",Eo="svg-inline--fa",st="data-fa-i2svg",kr="data-fa-pseudo-element",Nc="data-fa-pseudo-element-pending",ia="data-prefix",oa="data-icon",ni="fontawesome-i2svg",Mc="async",Fc=["HTML","HEAD","STYLE","SCRIPT"],Oo=function(){try{return!0}catch{return!1}}(),sa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},xn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},So={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Rc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Lc=/fa[srltdbk]?[\-\ ]/,Io="fa-layers-text",zc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,$c={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Po=[1,2,3,4,5,6,7,8,9,10],jc=Po.concat([11,12,13,14,15,16,17,18,19,20]),Dc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Uc=[].concat(jn(Object.keys(xn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY]).concat(Po.map(function(e){return"".concat(e,"x")})).concat(jc.map(function(e){return"w-".concat(e)})),To=Je.FontAwesomeConfig||{};function Hc(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Bc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var Wc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wc.forEach(function(e){var t=ra(e,2),n=t[0],r=t[1],a=Bc(Hc(n));a!=null&&(To[r]=a)})}var Yc={familyPrefix:Co,styleDefault:"solid",replacementClass:Eo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ut=A(A({},Yc),To);Ut.autoReplaceSvg||(Ut.observeMutations=!1);var P={};Object.keys(Ut).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Ut[e]=n,un.forEach(function(r){return r(P)})},get:function(){return Ut[e]}})});Je.FontAwesomeConfig=P;var un=[];function Kc(e){return un.push(e),function(){un.splice(un.indexOf(e),1)}}var Ye=wr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vc(e){if(!(!e||!He)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return G.head.insertBefore(t,r),e}}var qc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qt(){for(var e=12,t="";e-- >0;)t+=qc[Math.random()*62|0];return t}function St(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function la(e){return e.classList?St(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function No(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(No(e[n]),'" ')},"").trim()}function Dn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function fa(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function Gc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Jc(e){var t=e.transform,n=e.width,r=n===void 0?wr:n,a=e.height,i=a===void 0?wr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ao?l+="translate(".concat(t.x/Ye-r/2,"em, ").concat(t.y/Ye-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ye,"em), calc(-50% + ").concat(t.y/Ye,"em)) "):l+="translate(".concat(t.x/Ye,"em, ").concat(t.y/Ye,"em) "),l+="scale(".concat(t.size/Ye*(t.flipX?-1:1),", ").concat(t.size/Ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Qc=`:root, :host {
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
}`;function Mo(){var e=Co,t=Eo,n=P.familyPrefix,r=P.replacementClass,a=Qc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ri=!1;function nr(){P.autoAddCss&&!ri&&(Vc(Mo()),ri=!0)}var Zc={mixout:function(){return{dom:{css:Mo,insertCss:nr}}},hooks:function(){return{beforeDOMElementCreation:function(){nr()},beforeI2svg:function(){nr()}}}},$e=Je||{};$e[ze]||($e[ze]={});$e[ze].styles||($e[ze].styles={});$e[ze].hooks||($e[ze].hooks={});$e[ze].shims||($e[ze].shims=[]);var we=$e[ze],Fo=[],eu=function e(){G.removeEventListener("DOMContentLoaded",e),wn=1,Fo.map(function(t){return t()})},wn=!1;He&&(wn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),wn||G.addEventListener("DOMContentLoaded",eu));function tu(e){!He||(wn?setTimeout(e,0):Fo.push(e))}function Xt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?No(e):"<".concat(t," ").concat(Xc(r),">").concat(i.map(Xt).join(""),"</").concat(t,">")}function ai(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var nu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},rr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?nu(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function ru(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ar(e){var t=ru(e);return t.length===1?t[0].toString(16):null}function au(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ii(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Cr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ii(t);typeof we.hooks.addPack=="function"&&!a?we.hooks.addPack(e,ii(t)):we.styles[e]=A(A({},we.styles[e]||{}),i),e==="fas"&&Cr("fa",t)}var Ht=we.styles,iu=we.shims,ou=Object.values(So),ca=null,Ro={},Lo={},zo={},$o={},jo={},su=Object.keys(sa);function lu(e){return~Uc.indexOf(e)}function fu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!lu(a)?a:null}var Do=function(){var t=function(i){return rr(Ht,function(o,s,l){return o[l]=rr(s,i,{}),o},{})};Ro=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Lo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),jo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ht||P.autoFetchSvg,r=rr(iu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});zo=r.names,$o=r.unicodes,ca=Un(P.styleDefault)};Kc(function(e){ca=Un(e.styleDefault)});Do();function ua(e,t){return(Ro[e]||{})[t]}function cu(e,t){return(Lo[e]||{})[t]}function gt(e,t){return(jo[e]||{})[t]}function Uo(e){return zo[e]||{prefix:null,iconName:null}}function uu(e){var t=$o[e],n=ua("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return ca}var da=function(){return{prefix:null,iconName:null,rest:[]}};function Un(e){var t=sa[e],n=xn[e]||xn[t],r=e in we.styles?e:null;return n||r||null}function Hn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=fu(P.familyPrefix,s);if(Ht[s]?(s=ou.includes(s)?Rc[s]:s,a=s,o.prefix=s):su.indexOf(s)>-1?(a=s,o.prefix=Un(s)):l?o.iconName=l:s!==P.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Uo(o.iconName):{},d=gt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ht.far&&Ht.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},da());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Qe()||"fas"),i}var du=function(){function e(){wc(this,e),this.definitions={}}return kc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Cr(s,o[s]);var l=So[s];l&&Cr(l,o[s]),Do()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),oi=[],vt={},xt={},mu=Object.keys(xt);function pu(e,t){var n=t.mixoutsTo;return oi=e,vt={},Object.keys(xt).forEach(function(r){mu.indexOf(r)===-1&&delete xt[r]}),oi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),_n(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){vt[o]||(vt[o]=[]),vt[o].push(i[o])})}r.provides&&r.provides(xt)}),n}function Er(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xt[e]?xt[e].apply(null,t):void 0}function Or(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(!!t)return t=gt(n,t)||t,ai(Ho.definitions,n,t)||ai(we.styles,n,t)}var Ho=new du,hu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,lt("noAuto")},gu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(lt("beforeI2svg",t),je("pseudoElements2svg",t),je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,tu(function(){bu({autoReplaceSvgRoot:n}),lt("watch",t)})}},vu={icon:function(t){if(t===null)return null;if(_n(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Un(t[0]);return{prefix:r,iconName:gt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.familyPrefix,"-"))>-1||t.match(Lc))){var a=Hn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:gt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:gt(i,t)||t}}}},ge={noAuto:hu,config:P,dom:gu,parse:vu,library:Ho,findIconDefinition:Or,toHtml:Xt},bu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(we.styles).length>0||P.autoFetchSvg)&&He&&P.autoReplaceSvg&&ge.dom.i2svg({node:r})};function Bn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Xt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!He){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function yu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Dn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function _u(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function ma(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,C=b===void 0?!1:b,R=r.found?r:n,z=R.width,T=R.height,y=a==="fak",E=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):""].filter(function(se){return m.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(T)})},$=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/T*16*.0625,"em")}:{};C&&(N.attributes[st]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||qt())},children:[l]}),delete N.attributes.title);var Y=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},$),m.styles)}),re=r.found&&n.found?je("generateAbstractMask",Y)||{children:[],attributes:{}}:je("generateAbstractIcon",Y)||{children:[],attributes:{}},de=re.children,Ce=re.attributes;return Y.children=de,Y.attributes=Ce,s?_u(Y):yu(Y)}function si(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[st]="");var d=A({},o.styles);fa(a)&&(d.transform=Jc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Dn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function xu(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Dn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ar=we.styles;function Sr(e){var t=e[0],n=e[1],r=e.slice(4),a=ra(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(rt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(rt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var wu={found:!1,width:512,height:512};function ku(e,t){!Oo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ir(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(je("missingIconAbstract"),n==="fa"){var i=Uo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ar[t]&&ar[t][e]){var o=ar[t][e];return r(Sr(o))}ku(e,t),r(A(A({},wu),{},{icon:P.showMissingIcons&&e?je("missingIconAbstract")||{}:{}}))})}var li=function(){},Pr=P.measurePerformance&&an&&an.mark&&an.measure?an:{mark:li,measure:li},zt='FA "6.1.2"',Au=function(t){return Pr.mark("".concat(zt," ").concat(t," begins")),function(){return Bo(t)}},Bo=function(t){Pr.mark("".concat(zt," ").concat(t," ends")),Pr.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},pa={begin:Au,end:Bo},dn=function(){};function fi(e){var t=e.getAttribute?e.getAttribute(st):null;return typeof t=="string"}function Cu(e){var t=e.getAttribute?e.getAttribute(ia):null,n=e.getAttribute?e.getAttribute(oa):null;return t&&n}function Eu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Ou(){if(P.autoReplaceSvg===!0)return mn.replace;var e=mn[P.autoReplaceSvg];return e||mn.replace}function Su(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function Iu(e){return G.createElement(e)}function Wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Su:Iu:n;if(typeof e=="string")return G.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Wo(o,{ceFn:r}))}),a}function Pu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var mn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Wo(a),n)}),n.getAttribute(st)===null&&P.keepOriginalSource){var r=G.createComment(Pu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~la(n).indexOf(P.replacementClass))return mn.replace(t);var a=new RegExp("".concat(P.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Xt(s)}).join(`
`);n.setAttribute(st,""),n.innerHTML=o}};function ci(e){e()}function Yo(e,t){var n=typeof t=="function"?t:dn;if(e.length===0)n();else{var r=ci;P.mutateApproach===Mc&&(r=Je.requestAnimationFrame||ci),r(function(){var a=Ou(),i=pa.begin("mutate");e.map(a),i(),n()})}}var ha=!1;function Ko(){ha=!0}function Tr(){ha=!1}var kn=null;function ui(e){if(!!ti&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?dn:t,r=e.nodeCallback,a=r===void 0?dn:r,i=e.pseudoElementsCallback,o=i===void 0?dn:i,s=e.observeMutationsRoot,l=s===void 0?G:s;kn=new ti(function(u){if(!ha){var d=Qe();St(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!fi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&fi(m.target)&&~Dc.indexOf(m.attributeName))if(m.attributeName==="class"&&Cu(m.target)){var b=Hn(la(m.target)),C=b.prefix,R=b.iconName;m.target.setAttribute(ia,C||d),R&&m.target.setAttribute(oa,R)}else Eu(m.target)&&a(m.target)})}}),He&&kn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Tu(){!kn||kn.disconnect()}function Nu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Mu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Hn(la(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=cu(a.prefix,e.innerText)||ua(a.prefix,Ar(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Fu(e){var t=St(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||qt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ru(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Mu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Fu(e),s=Er("parseNodeAttributes",{},e),l=t.styleParser?Nu(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Lu=we.styles;function Vo(e){var t=P.autoReplaceSvg==="nest"?di(e,{styleParser:!1}):di(e);return~t.extra.classes.indexOf(Io)?je("generateLayersText",e,t):je("generateSvgReplacementMutation",e,t)}function mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(ni,"-").concat(m))},a=function(m){return n.remove("".concat(ni,"-").concat(m))},i=P.autoFetchSvg?Object.keys(sa):Object.keys(Lu);i.includes("fa")||i.push("fa");var o=[".".concat(Io,":not([").concat(st,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(st,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=St(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=pa.begin("onTree"),u=s.reduce(function(d,m){try{var b=Vo(m);b&&d.push(b)}catch(C){Oo||C.name==="MissingIcon"&&console.error(C)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){Yo(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function zu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vo(e).then(function(n){n&&Yo([n],t)})}function $u(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Or(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Or(a||{})),e(r,A(A({},n),{},{mask:a}))}}var ju=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,C=n.titleId,R=C===void 0?null:C,z=n.classes,T=z===void 0?[]:z,y=n.attributes,E=y===void 0?{}:y,N=n.styles,$=N===void 0?{}:N;if(!!t){var Y=t.prefix,re=t.iconName,de=t.icon;return Bn(A({type:"icon"},t),function(){return lt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(b?E["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(R||qt()):(E["aria-hidden"]="true",E.focusable="false")),ma({icons:{main:Sr(de),mask:l?Sr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:re,transform:A(A({},Te),a),symbol:o,title:b,maskId:d,titleId:R,extra:{attributes:E,styles:$,classes:T}})})}},Du={mixout:function(){return{icon:$u(ju)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mi,n.nodeCallback=zu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?G:r,i=n.callback,o=i===void 0?function(){}:i;return mi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(C,R){Promise.all([Ir(a,s),d.iconName?Ir(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var T=ra(z,2),y=T[0],E=T[1];C([n,ma({icons:{main:y,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Dn(s);l.length>0&&(a.style=l);var u;return fa(o)&&(u=je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Uu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Bn({type:"layer"},function(){lt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.familyPrefix,"-layers")].concat(jn(i)).join(" ")},children:o}]})}}}},Hu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Bn({type:"counter",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:r}),xu({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.familyPrefix,"-layers-counter")].concat(jn(s))}})})}}}},Bu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,C=b===void 0?{}:b;return Bn({type:"text",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:r}),si({content:n,transform:A(A({},Te),i),title:s,extra:{attributes:m,styles:C,classes:["".concat(P.familyPrefix,"-layers-text")].concat(jn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ao){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,si({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Wu=new RegExp('"',"ug"),pi=[1105920,1112319];function Yu(e){var t=e.replace(Wu,""),n=au(t,0),r=n>=pi[0]&&n<=pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ar(a?t[0]:t),isSecondary:r||a}}function hi(e,t){var n="".concat(Nc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=St(e.children),o=i.filter(function(re){return re.getAttribute(kr)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(zc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?xn[l[2].toLowerCase()]:$c[u],C=Yu(m),R=C.value,z=C.isSecondary,T=l[0].startsWith("FontAwesome"),y=ua(b,R),E=y;if(T){var N=uu(R);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!z&&(!o||o.getAttribute(ia)!==b||o.getAttribute(oa)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var $=Ru(),Y=$.extra;Y.attributes[kr]=t,Ir(y,b).then(function(re){var de=ma(A(A({},$),{},{icons:{main:re,mask:da()},prefix:b,iconName:E,extra:Y,watchable:!0})),Ce=G.createElement("svg");t==="::before"?e.insertBefore(Ce,e.firstChild):e.appendChild(Ce),Ce.outerHTML=de.map(function(se){return Xt(se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ku(e){return Promise.all([hi(e,"::before"),hi(e,"::after")])}function Vu(e){return e.parentNode!==document.head&&!~Fc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(kr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gi(e){if(!!He)return new Promise(function(t,n){var r=St(e.querySelectorAll("*")).filter(Vu).map(Ku),a=pa.begin("searchPseudoElements");Ko(),Promise.all(r).then(function(){a(),Tr(),t()}).catch(function(){a(),Tr(),n()})})}var qu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;P.searchPseudoElements&&gi(a)}}},vi=!1,Xu={mixout:function(){return{dom:{unwatch:function(){Ko(),vi=!0}}}},hooks:function(){return{bootstrap:function(){ui(Er("mutationObserverCallbacks",{}))},noAuto:function(){Tu()},watch:function(n){var r=n.observeMutationsRoot;vi?Tr():ui(Er("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},bi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Gu={mixout:function(){return{parse:{transform:function(n){return bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=bi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},C={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},C.outer),children:[{tag:"g",attributes:A({},C.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),C.path)}]}]}}}},ir={x:0,y:0,width:"100%",height:"100%"};function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ju(e){return e.tag==="g"?e.children:[e]}var Qu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Hn(a.split(" ").map(function(o){return o.trim()})):da();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,C=Gc({transform:l,containerWidth:m,iconWidth:u}),R={tag:"rect",attributes:A(A({},ir),{},{fill:"white"})},z=d.children?{children:d.children.map(yi)}:{},T={tag:"g",attributes:A({},C.inner),children:[yi(A({tag:d.tag,attributes:A(A({},d.attributes),C.path)},z))]},y={tag:"g",attributes:A({},C.outer),children:[T]},E="mask-".concat(s||qt()),N="clip-".concat(s||qt()),$={tag:"mask",attributes:A(A({},ir),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Ju(b)},$]};return r.push(Y,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(E,")")},ir)}),{children:r,attributes:a}}}},Zu={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ed={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},td=[Zc,Du,Uu,Hu,Bu,qu,Xu,Gu,Qu,Zu,ed];pu(td,{mixoutsTo:ge});ge.noAuto;var qo=ge.config,nd=ge.library;ge.dom;var An=ge.parse;ge.findIconDefinition;ge.toHtml;var rd=ge.icon;ge.layer;var ad=ge.text;ge.counter;function _i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_i(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Cn(e){return Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cn(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function id(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function od(e,t){if(e==null)return{};var n=id(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Nr(e){return sd(e)||ld(e)||fd(e)||cd()}function sd(e){if(Array.isArray(e))return Mr(e)}function ld(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fd(e,t){if(!!e){if(typeof e=="string")return Mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e,t)}}function Mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xo={exports:{}};(function(e){(function(t){var n=function(y,E,N){if(!u(E)||m(E)||b(E)||C(E)||l(E))return E;var $,Y=0,re=0;if(d(E))for($=[],re=E.length;Y<re;Y++)$.push(n(y,E[Y],N));else{$={};for(var de in E)Object.prototype.hasOwnProperty.call(E,de)&&($[y(de,N)]=n(y,E[de],N))}return $},r=function(y,E){E=E||{};var N=E.separator||"_",$=E.split||/(?=[A-Z])/;return y.split($).join(N)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var E=a(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},C=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},z=function(y,E){var N=E&&"process"in E?E.process:E;return typeof N!="function"?y:function($,Y){return N($,y,Y)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,E){return n(z(a,E),y)},decamelizeKeys:function(y,E){return n(z(o,E),y,E)},pascalizeKeys:function(y,E){return n(z(i,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(ud)})(Xo);var dd=Xo.exports,md=["class","style"];function pd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=dd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function hd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ga(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=hd(d);break;case"style":l.style=pd(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=od(n,md);return bo(e.tag,_e(_e(_e({},t),{},{class:a.class,style:_e(_e({},a.style),o)},a.attrs),s),r)}var Go=!1;try{Go=!0}catch{}function gd(){if(!Go&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function vd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xi(e){if(e&&Cn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(An.icon)return An.icon(e);if(e===null)return null;if(Cn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var bd=De({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return xi(t.icon)}),i=ve(function(){return Bt("classes",vd(t))}),o=ve(function(){return Bt("transform",typeof t.transform=="string"?An.transform(t.transform):t.transform)}),s=ve(function(){return Bt("mask",xi(t.mask))}),l=ve(function(){return rd(a.value,_e(_e(_e(_e({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});sn(l,function(d){if(!d)return gd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ve(function(){return l.value?ga(l.value.abstract[0],{},r):null});return function(){return u.value}}});De({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=qo.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Nr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return bo("div",{class:i.value},r.default?r.default():[])}}});De({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=qo.familyPrefix,i=ve(function(){return Bt("classes",[].concat(Nr(t.counter?["".concat(a,"-layers-counter")]:[]),Nr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Bt("transform",typeof t.transform=="string"?An.transform(t.transform):t.transform)}),s=ve(function(){var u=ad(t.value.toString(),_e(_e({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return ga(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var yd={prefix:"fas",iconName:"file-code",icon:[384,512,[],"f1c9","M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM154.1 353.8c7.812 7.812 7.812 20.5 0 28.31C150.2 386.1 145.1 388 140 388s-10.23-1.938-14.14-5.844l-48-48c-7.812-7.812-7.812-20.5 0-28.31l48-48c7.812-7.812 20.47-7.812 28.28 0s7.812 20.5 0 28.31L120.3 320L154.1 353.8zM306.1 305.8c7.812 7.812 7.812 20.5 0 28.31l-48 48C254.2 386.1 249.1 388 244 388s-10.23-1.938-14.14-5.844c-7.812-7.812-7.812-20.5 0-28.31L263.7 320l-33.86-33.84c-7.812-7.812-7.812-20.5 0-28.31s20.47-7.812 28.28 0L306.1 305.8zM256 0v128h128L256 0z"]},_d={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"]},xd={prefix:"fas",iconName:"industry",icon:[576,512,[],"f275","M128 32C145.7 32 160 46.33 160 64V215.4L316.6 131C332.6 122.4 352 134 352 152.2V215.4L508.6 131C524.6 122.4 544 134 544 152.2V432C544 458.5 522.5 480 496 480H80C53.49 480 32 458.5 32 432V64C32 46.33 46.33 32 64 32H128z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var wd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},kd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Ad={prefix:"fab",iconName:"stack-overflow",icon:[384,512,[],"f16c","M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"]};nd.add(wd,kd,Ad,_d,xd,yd);xf(xc).component("FontAwesomeIcon",bd).mount("#app");
