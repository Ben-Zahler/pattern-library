var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},r=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var c=i.set;void 0!==c&&c.call(r,o)}return o},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(){}var v=e(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==c){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=h,n.PropTypes=n}()}),b=0;function _(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===b&&(b++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(_,n),b--),n}(n)),e}var g=v;Object.keys(g).reduce(_,g);var m,O,x,C,w=g.oneOf(["left","center","right"]),T=g.oneOf(["left","right"]),A=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),j=g.oneOf(["ok","pending","error","unknown"]),N=g.oneOf(["row","col","rowgroup","colgroup","auto"]),E=g.oneOfType([g.string,g.number]),P={text:E,value:g.any,rowspan:E,colspan:E,scope:N,align:w,dense:g.bool},S={float:T,strong:g.bool,bold:g.bool},R=g.oneOfType([g.string,g.number]),D=g.oneOfType([R,g.shape(i({},P,{sort:A,sortActive:g.bool}))]),L=g.oneOfType([R,g.shape(i({},P,S,{action:g.bool,state:j}))]),I=g.oneOfType([R,g.shape(i({},P,S))]),U=g.oneOfType([g.arrayOf(D),g.shape({cells:g.arrayOf(D)})]),M=g.oneOfType([g.arrayOf(L),g.shape({cells:g.arrayOf(L),action:g.bool})]),V=g.oneOfType([g.arrayOf(I),g.shape({cells:g.arrayOf(I)})]),q=(g.oneOfType([U,g.arrayOf(U)]),g.oneOfType([M,g.arrayOf(M)]),g.oneOfType([V,g.arrayOf(V)]),e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":y(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()})),F=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},H={},K=(m=Object,O=m.getPrototypeOf||function(e){return e.__proto__},x=m.setPrototypeOf||function(e,t){return e.__proto__=t,e},C="object"===("undefined"==typeof Reflect?"undefined":y(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),x(new o,n.prototype)},function(e){var t=O(e);return x(e,x(function(){return C(t,arguments,O(this).constructor)},t))}),W=function(n){return K(function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),a(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in H||(H[e]=0),++H[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},$={},G=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,c=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,o,i,c);var l=s.preventDefault;return s.preventDefault=function(){l.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function B(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new G(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var z=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function J(e){for(var r=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var c=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&c}var Y=/\s+/,Z={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function X(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,c=t.passive,s=void 0===c||c;if(Z[e]&&(e=Z[e]),!n||!e)return null;var l=void 0===o?"undefined":y(o),u=o&&"string"===l;if("function"===l){if(r){var p=r;a=p.capture,s=p.passive}r=o}for(var d=z?{capture:a,passive:s}:a,f=u?function(e){var t=e.target;for(;!J(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(Y),v=h.length,b=0;b<v;++b)n.addEventListener(h[b],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function Q(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,c=e.maxWait,s=void 0!==c&&c,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=r!==s,v=!1!==s;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(u&&clearTimeout(u),u=setTimeout(y,r)),v&&!p&&(p=setTimeout(_,s)),i&&!f&&(f=!0,d=o.apply(void 0,k(l))),d}return b.flush=function(){(u||p)&&(d=o.apply(void 0,k(l)));return m(),d},b.cancel=m,b;function y(){p&&clearTimeout(p),g()}function _(){u&&clearTimeout(u),g()}function g(){a&&(d=o.apply(void 0,k(l))),p=u=null,f=!1}function m(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var ee=window.__subscriptions;function te(e,t){var n=X(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ee[e]||(ee[e]={count:0});var o,r=ee[e];return r.count++,r.onsubscribe||(r.onsubscribe=Q((o=e,function(){B(document,"pubsub/onsubscribe",o),B(document,"pubsub/onsubscribe/"+o,o),ee[o]&&delete ee[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete ee[e]}}X(document,"pubsub/onsubscribe",function(e){var t=e.detail;ee[t]||(ee[t]={count:0});var n=ee[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=s(e,3),n=t[0],o=t[1],r=t[2];B(r,n,o)}),delete n.queue)});var ne,oe=function(e,t){return e===t},re=((ne=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:oe;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?ne.apply(void 0,arguments):void 0}}}})()(!0),[]);var ie=1,ae=3,ce=8;function se(e,t){var n=e.nodeType;n===ie&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,c=e.attributes,s=null,l=null,u=null,p=null,d=c.length-1;0<=d;--d)if(p=c[d],u=p.name,s=p.namespaceURI,l=p.value,!i(u))if(s){var f=p.localName;t.getAttributeNS(s,f||u)!==l&&t.setAttributeNS(s,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,s=p.namespaceURI,i(u))continue;s?(u=p.localName||u,e.hasAttributeNS(s,u)||t.removeAttributeNS(s,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ae&&n!==ce||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function le(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;ue(e,t,"checked"),ue(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?ue(e,t,"selected"):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,r=t.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function ue(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var pe=3;function de(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(se(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,c=0;n=t.childNodes[c],o=e.childNodes[c-a],n||o;c++)if(o)if(n)if(fe(o,n))(r=de(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var s=c;s<t.childNodes.length;s++)if(fe(t.childNodes[s],o)){i=t.childNodes[s];break}i?((r=de(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=de(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),c--}(e,t),le(e,t),t):null:e}function fe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===pe&&e.nodeValue===t.nodeValue)}var he,ve,be,ye,_e=(he=Object,ve=he.getPrototypeOf||function(e){return e.__proto__},be=he.setPrototypeOf||function(e,t){return e.__proto__=t,e},ye="object"===("undefined"==typeof Reflect?"undefined":y(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),be(new o,n.prototype)},function(e){var t=ve(e);return be(e,be(function(){return ye(t,arguments,ve(this).constructor)},t))})(function(e){function c(e){var t;l(this,c);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=f(this,(t=c.__proto__||Object.getPrototypeOf(c)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,c),a.name="TemplateNoStringReturnException",a}return p(c,e),c}(Error)),ge=!!document.createDocumentFragment().children,me=/[A-Z]/g;function ke(e){return e.replace(me,Oe)}function Oe(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var xe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ce(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case g.string:case g.string.isRequired:return t;case g.bool:case g.bool.isRequired:if(!t||n===t)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(xe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(xe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var we=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Te=/[-_]+/g;function Ae(e){return e.replace(we,je)}function je(e,t){return 0==+e||Te.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ne(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Ae(t)]);if(o&&!e.hasAttribute(t))return i!==g.bool&&i!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ce(a,t,i)}var Ee=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Pe(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,c=r.passive,s=void 0===c||c,l=n.ownerDocument.documentElement,u=X(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:s});return t=l,Ee&&(t.style.cursor="pointer"),u}var Se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Re="axa-change",De="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Se.ENTER,t),i._onInteractive()):o&&i._notify(Se.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Se.ESCAPE||e.key===Se.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return a(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=X(this._container,Se.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,r=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=X(e,Se.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Pe(e,Se.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=X(e.ownerDocument,Se.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(De)?Ne(e,De):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Se.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Le=F(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),t}(),e.version="2.0.1-beta.242",t},function(t){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=te("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ee[e]||(ee[e]={count:0,queue:[]});var o=ee[e].queue;Array.isArray(o)?o.push([e,t,n]):B(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){return l(this,i),f(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return p(i,t),a(i,[{key:"init",value:function(e){var t=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=Q(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ae(e)})}},{key:"connectedCallback",value:function(){var o=this;if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=Ae(e);if(o.hasAttribute(e)){var n=Ne(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Ae(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Ce(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&B(this,Re,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(ke(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,r=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[t]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&g.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(ke)}}]),i}()},function(t){return function(e){function s(){return l(this,s),f(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return p(s,t),a(s,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=d(e,["template"]);u(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ge||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new _e(this);a.appendChild(i)}if(e)u(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");de(t,e)}(this,c),function(){for(var e=void 0;e=re.pop();)delete e.isSameNode;re=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(t){return function(e){function r(){return l(this,r),f(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,t),a(r,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=d(e,["styles"]);u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()}),Ie=F(Le,W),Ue=F(Le,function(r){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,r),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(e&&!$[t]){var n=document.createElement("style"),o=document.createTextNode(e);$[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},W)(HTMLElement);var Me=/\n[\s]+$/,Ve=/^\n[\s]+/,qe=/[\s]+$/,Fe=/^[\s]+/,He=/[\n\s]+/g,Ke=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],We=["code","pre","textarea"],$e=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,c=0,s=n.length;c<s;c++){var l=n[c];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),c===s-1&&(a=!1,-1===Ke.indexOf(i)&&-1===We.indexOf(i)?""===(o=u.nodeValue.replace(Ve,"").replace(qe,"").replace(Me,"").replace(He," "))?t.removeChild(u):u.nodeValue=o:-1===We.indexOf(i)&&(r=0===c?"":" ",o=u.nodeValue.replace(Ve,r).replace(Fe," ").replace(qe,"").replace(Me,"").replace(He," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ke.indexOf(i)&&-1===We.indexOf(i)?""===(o=u.nodeValue.replace(Ve,"").replace(Me,"").replace(He," "))?t.removeChild(u):u.nodeValue=o:-1===We.indexOf(i)&&(o=u.nodeValue.replace(Fe," ").replace(Ve,"").replace(Me,"").replace(He," "),u.nodeValue=o));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}},Ge=Ie(HTMLElement);function Be(e,t){var n,o,r,i,a=e.inputId,c=void 0===a?Ge.uuidv4():a,s=e.value,l=e.name,u=e.checked,p=void 0!==u&&u,d=e.disabled,f=void 0!==d&&d;return(i=document.createElement("label")).setAttribute("class","a-checkbox__wrapper"),$e(i,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(c)),n.setAttribute("type","checkbox"),n.setAttribute("name",""+String(l)),p&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(s)),f&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-checkbox__input"),n),"\n    ",(o=document.createElement("span"),o.setAttribute("class","a-checkbox__icon"),o),"\n    ",(r=document.createElement("div"),r.setAttribute("class","a-checkbox__content"),$e(r,[t]),r),"\n  "]),i}var ze,Je,Ye,Ze=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,Ue),a(t,[{key:"init",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:'.a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) {\n  color: #00008f; }\n  .a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) .a-checkbox__icon {\n    border-color: #00008f; }\n    .a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) .a-checkbox__icon::after {\n      border-color: #00008f; }\n\n.a-checkbox .a-checkbox__wrapper {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.5; }\n\n.a-checkbox .a-checkbox__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-checkbox .a-checkbox__input:focus + .a-checkbox__icon {\n    border-color: #00008f; }\n    .a-checkbox .a-checkbox__input:focus + .a-checkbox__icon::after {\n      border-color: #00008f; }\n  .a-checkbox .a-checkbox__input:checked + .a-checkbox__icon::after {\n    border-color: #00008f;\n    background-color: #00008f; }\n  .a-checkbox .a-checkbox__input:disabled + .a-checkbox__icon {\n    cursor: default;\n    border-color: #999; }\n    .a-checkbox .a-checkbox__input:disabled + .a-checkbox__icon::after {\n      border-color: transparent; }\n\n.a-checkbox .a-checkbox__icon {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 18px;\n  height: 18px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 20px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid #999;\n  cursor: pointer;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  border-radius: 0; }\n  .a-checkbox .a-checkbox__icon::after {\n    width: 8px;\n    height: 8px;\n    display: block;\n    border: 1px solid transparent;\n    content: ""; }\n  .a-checkbox .a-checkbox__icon::after {\n    border-radius: 0; }\n\n.a-checkbox--error {\n  color: #c91432; }\n  .a-checkbox--error .a-checkbox__icon {\n    border-color: #c91432; }\n\n.a-checkbox--disabled {\n  color: #999; }\n',template:Be})}},{key:"willRenderCallback",value:function(){var e=this.error,t=this.checked,n=this.disabled;this.className=q(this.initialClassName,"a-checkbox",{"a-checkbox--error":e,"a-checkbox--checked":t,"a-checkbox--disabled":n})}}]),t}();return Ze.tagName="axa-checkbox",Ze.propTypes={inputId:g.string,error:g.bool,value:g.string,name:g.string,checked:g.bool,disabled:g.bool},ze=Ze.tagName,Je=Ze,customElements.get(ze)||customElements.define(ze,Je,Ye),Ze}();
