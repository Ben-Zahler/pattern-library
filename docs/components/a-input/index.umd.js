!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){var n={};for(var i in e)0<=t.indexOf(i)||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function e(t,n,i,o){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,i,o)}else if("value"in r&&r.writable)r.value=i;else{var s=r.set;void 0!==s&&s.call(o,i)}return i},u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(){}var v=e(function(e){e.exports=function(){function e(e,t,n,i,o,r){if(r!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=h,n.PropTypes=n}()}),y=0;function _(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===y&&(y++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(_,n),y--),n}(n)),e}var g=v;Object.keys(g).reduce(_,g);var m,C,k,x,w=g.oneOf(["left","center","right"]),T=g.oneOf(["left","right"]),P=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),j=g.oneOf(["ok","pending","error","unknown"]),A=g.oneOf(["row","col","rowgroup","colgroup","auto"]),E=g.oneOfType([g.string,g.number]),N={text:E,value:g.any,rowspan:E,colspan:E,scope:A,align:w,dense:g.bool},S={float:T,strong:g.bool,bold:g.bool},R=g.oneOfType([g.string,g.number]),L=g.oneOfType([R,g.shape(r({},N,{sort:P,sortActive:g.bool}))]),I=g.oneOfType([R,g.shape(r({},N,S,{action:g.bool,state:j}))]),D=g.oneOfType([R,g.shape(r({},N,S))]),U=g.oneOfType([g.arrayOf(L),g.shape({cells:g.arrayOf(L)})]),M=g.oneOfType([g.arrayOf(I),g.shape({cells:g.arrayOf(I),action:g.bool})]),V=g.oneOfType([g.arrayOf(D),g.shape({cells:g.arrayOf(D)})]),q=(g.oneOfType([U,g.arrayOf(U)]),g.oneOfType([M,g.arrayOf(M)]),g.oneOfType([V,g.arrayOf(V)]),e(function(e){!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=void 0===n?"undefined":b(n);if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===i)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()})),B=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},F={},K=(m=Object,C=m.getPrototypeOf||function(e){return e.__proto__},k=m.setPrototypeOf||function(e,t){return e.__proto__=t,e},x="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(e,t,n){var i,o=[null];return o.push.apply(o,t),i=e.bind.apply(e,o),k(new i,n.prototype)},function(e){var t=C(e);return k(e,k(function(){return x(t,arguments,C(this).constructor)},t))}),H=function(n){return K(function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),a(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in F||(F[e]=0),++F[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},z={},W=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,i,r,s);var l=u.preventDefault;return u.preventDefault=function(){l.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function $(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new W(t,r({},i,{detail:n}));return e.dispatchEvent(o)}var G=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function J(e){for(var o=e.className,r=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(o);var n,i;t?r=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!r)&&s}var Y=/\s+/,Z={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==e[o=n[r]])return t[o];return""}()};function X(n,e,i,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,u=void 0===s||s;if(Z[e]&&(e=Z[e]),!n||!e)return null;var l=void 0===i?"undefined":b(i),c=i&&"string"===l;if("function"===l){if(o){var p=o;a=p.capture,u=p.passive}o=i}for(var d=G?{capture:a,passive:u}:a,f=c?function(e){var t=e.target;for(;!J(t,i)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(Y),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}}(this,e)}}function Q(i){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,u=void 0!==s&&s,l=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=o!==u,v=!1!==u;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(c&&clearTimeout(c),c=setTimeout(b,o)),v&&!p&&(p=setTimeout(_,u)),r&&!f&&(f=!0,d=i.apply(void 0,O(l))),d}return y.flush=function(){(c||p)&&(d=i.apply(void 0,O(l)));return m(),d},y.cancel=m,y;function b(){p&&clearTimeout(p),g()}function _(){c&&clearTimeout(c),g()}function g(){a&&(d=i.apply(void 0,O(l))),p=c=null,f=!1}function m(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var ee=window.__subscriptions;function te(e,t){var n=X(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ee[e]||(ee[e]={count:0});var i,o=ee[e];return o.count++,o.onsubscribe||(o.onsubscribe=Q((i=e,function(){$(document,"pubsub/onsubscribe",i),$(document,"pubsub/onsubscribe/"+i,i),ee[i]&&delete ee[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete ee[e]}}X(document,"pubsub/onsubscribe",function(e){var t=e.detail;ee[t]||(ee[t]={count:0});var n=ee[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=u(e,3),n=t[0],i=t[1],o=t[2];$(o,n,i)}),delete n.queue)});var ne,ie=function(e,t){return e===t},oe=((ne=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ie;return function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(i,t))?ne.apply(void 0,arguments):void 0}}}})()(!0),[]);var re=1,ae=3,se=8;function ue(e,t){var n=e.nodeType;n===re&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),i=t.constructor.observedAttributes,o=i&&Array.isArray(i)&&i.length,r=function(e){return n&&o&&-1===i.indexOf(e)},a=t.attributes,s=e.attributes,u=null,l=null,c=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],c=p.name,u=p.namespaceURI,l=p.value,!r(c))if(u){var f=p.localName;t.getAttributeNS(u,f||c)!==l&&t.setAttributeNS(u,c,l)}else t.hasAttribute(c)?t.getAttribute(c)!==l&&("null"===l||"undefined"===l?t.removeAttribute(c):t.setAttribute(c,l)):t.setAttribute(c,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(c=p.name,u=p.namespaceURI,r(c))continue;u?(c=p.localName||c,e.hasAttributeNS(u,c)||t.removeAttributeNS(u,c)):e.hasAttributeNS(null,c)||t.removeAttribute(c)}}(e,t),n!==ae&&n!==se||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function le(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,i=t.value;ce(e,t,"checked"),ce(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?ce(e,t,"selected"):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,i=0,o=t.firstChild,r=void 0,a=void 0;for(;o;)if("OPTGROUP"===(a=o.nodeName&&o.nodeName.toUpperCase()))o=(r=o).firstChild;else{if("OPTION"===a){if(o.hasAttributeNS(null,"selected")){n=i;break}i+=1}!(o=o.nextSibling)&&r&&(o=r.nextSibling,r=null)}t.selectedIndex=n}(0,t)}function ce(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var pe=3;function de(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ue(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,o=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],i=e.childNodes[s-a],n||i;s++)if(i)if(n)if(fe(i,n))(o=de(i,n))!==n&&(t.replaceChild(o,n),a++);else{r=null;for(var u=s;u<t.childNodes.length;u++)if(fe(t.childNodes[u],i)){r=t.childNodes[u];break}r?((o=de(i,r))!==r&&a++,t.insertBefore(o,n)):i.id||n.id?(t.insertBefore(i,n),a++):(o=de(i,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(i),a++;else t.removeChild(n),s--}(e,t),le(e,t),t):null:e}function fe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===pe&&e.nodeValue===t.nodeValue)}var he,ve,ye,be,_e=(he=Object,ve=he.getPrototypeOf||function(e){return e.__proto__},ye=he.setPrototypeOf||function(e,t){return e.__proto__=t,e},be="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(e,t,n){var i,o=[null];return o.push.apply(o,t),i=e.bind.apply(e,o),ye(new i,n.prototype)},function(e){var t=ve(e);return ye(e,ye(function(){return be(t,arguments,ve(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,o=Array(1<i?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error)),ge=!!document.createDocumentFragment().children,me=/[A-Z]/g;function Oe(e){return e.replace(me,Ce)}function Ce(e,t,n){var i=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?i:"-"+i}var ke=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function xe(t,n,e){var i=t;if(e)return function(t,n,e){var i=t;switch(e){case g.string:case g.string.isRequired:return t;case g.bool:case g.bool.isRequired:if(!t||n===t)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(ke.test(t))try{i=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return i}(t,n,e);if(t&&n!==t){if(ke.test(t))try{i=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else i=!0;return i}var we=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Te=/[-_]+/g;function Pe(e){return e.replace(we,je)}function je(e,t){return 0==+e||Te.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ae(e,t,n){var i=1===e.nodeType,o=e.constructor.propTypes,r=n;!n&&i&&(r=(void 0===o?{}:o)[Pe(t)]);if(i&&!e.hasAttribute(t))return r!==g.bool&&r!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=xe(a,t,r)}var Ee=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ne(n,e,i){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,a=void 0===r||r,s=o.passive,u=void 0===s||s,l=n.ownerDocument.documentElement,c=X(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return i(e)},{capture:a,passive:u});return t=l,Ee&&(t.style.cursor="pointer"),c}var Se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},r=0;r<i;++r){var a=t[r];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Re="axa-click",Le="axa-load",Ie="axa-change",De="data-prevent-default";(function(){function i(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,i),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,i=t!==r._lastToggleNode,o=!n&&!i;n?(r._notify(Se.ENTER,t),r._onInteractive()):i&&r._notify(Se.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,o&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===Se.ESCAPE||e.key===Se.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return a(i,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=r({},i.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=X(this._container,Se.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,i=t.outerClose,o=t.escapeClose,r=t.preventDefault;n&&(this._unCloseClick=X(e,Se.CLICK,n,this._handleClose,{passive:!r})),i&&(this._unOuterClick=Ne(e,Se.CLICK,this._handleClose,{passive:!r})),o&&(this._unCloseEscape=X(e.ownerDocument,Se.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(De)?Ae(e,De):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Se.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),i}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ue=B(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),t}(),e.version="2.0.1-beta.242",t},function(t){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=te("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ee[e]||(ee[e]={count:0,queue:[]});var i=ee[e].queue;Array.isArray(i)?i.push([e,t,n]):$(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function r(){return l(this,r),f(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,t),a(r,[{key:"init",value:function(e){var t=this;c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=Q(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Pe(e)})}},{key:"connectedCallback",value:function(){var i=this;if(c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=Pe(e);if(i.hasAttribute(e)){var n=Ae(i,e,o[t]);i.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var i=Pe(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[i]=xe(n,e,o[i])}else this.props[i]=null;this.checkPropTypes(),"value"===e&&null!==n&&$(this,Ie,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,i=Object.keys(e).filter(function(e){return-1<n.indexOf(Oe(e))}).reduce(function(e,t){var n=e.props,i=e.shouldUpdate,o=n[t],r=a.props&&a.props[t]?a.props[t]:void 0;return i||a.shouldUpdateCallback(o,r)?(a.props[t]=o,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),i&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,i=this.props;t&&g.checkPropTypes(t,i,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Oe)}}]),r}()},function(t){return function(e){function u(){return l(this,u),f(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return p(u,t),a(u,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=d(e,["template"]);c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var i=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ge||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var r=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r)throw new _e(this);a.appendChild(r)}if(e)c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: newTree should be an object");de(t,e)}(this,s),function(){for(var e=void 0;e=oe.pop();)delete e.isSameNode;oe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),u}()},function(t){return function(e){function o(){return l(this,o),f(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return p(o,t),a(o,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,i=d(e,["styles"]);c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,i),this._styles=n}},{key:"connectedCallback",value:function(){c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()}),Me=B(Ue,H),Ve=B(Ue,function(o){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,o),a(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(e&&!z[t]){var n=document.createElement("style"),i=document.createTextNode(e);z[t]=!0,n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},H)(HTMLElement);var qe=/\n[\s]+$/,Be=/^\n[\s]+/,Fe=/[\s]+$/,Ke=/^[\s]+/,He=/[\n\s]+/g,ze=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],We=["code","pre","textarea"],$e=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),c=l),s===u-1&&(a=!1,-1===ze.indexOf(r)&&-1===We.indexOf(r)?""===(i=c.nodeValue.replace(Be,"").replace(Fe,"").replace(qe,"").replace(He," "))?t.removeChild(c):c.nodeValue=i:-1===We.indexOf(r)&&(o=0===s?"":" ",i=c.nodeValue.replace(Be,o).replace(Ke," ").replace(Fe,"").replace(qe,"").replace(He," "),c.nodeValue=i));else if(l&&l.nodeType){a&&(a=!1,-1===ze.indexOf(r)&&-1===We.indexOf(r)?""===(i=c.nodeValue.replace(Be,"").replace(qe,"").replace(He," "))?t.removeChild(c):c.nodeValue=i:-1===We.indexOf(r)&&(i=c.nodeValue.replace(Ke," ").replace(Be,"").replace(qe,"").replace(He," "),c.nodeValue=i));var p=l.nodeName;p&&(r=p.toLowerCase()),t.appendChild(l)}}}},Ge=Me(HTMLElement);function Je(e){var t,n,i,o,r,a=e.inputId,s=void 0===a?Ge.uuidv4():a,u=e.type,l=void 0===u?"text":u,c=e.placeholder,p=void 0===c?"":c,d=e.value,f=void 0===d?"":d,h=e.name,v=e.disabled,y=void 0!==v&&v,b=e.icon;return(i=document.createElement("div")).setAttribute("class","a-input__wrapper"),$e(i,["\n      ",(t=document.createElement("input"),t.setAttribute("id",""+String(s)),t.setAttribute("name",""+String(h)),t.setAttribute("type",""+String(l)),t.setAttribute("placeholder",""+String(p)),t.setAttribute("value",""+String(f)),y&&t.setAttribute("disabled","disabled"),t.setAttribute("class","a-input__input js-input__input"),t),"\n          ",(n=document.createElement("span"),n.setAttribute("class","a-input__valid-icon"),n),"\n          ",b?(r=document.createElement("button"),r.setAttribute("type","button"),r.setAttribute("class","a-input__icon__button js-input__icon__button"),$e(r,["\n            ",(o=document.createElement("axa-icon"),o.setAttribute("classes","a-input__icon"),o.setAttribute("icon",""+String(b)),o),"\n          "]),r):"","\n    "]),i}var Ye,Ze,Xe,Qe=function(){function t(e){l(this,t),this.wcNode=e}return a(t,[{key:"init",value:function(){this.iconButton=this.wcNode.querySelector(".js-input__icon__button"),this.inputfield=this.wcNode.querySelector(".js-input__input"),this.disablePaste=Ae(this.wcNode,"disable-paste"),this.listenToButtons(),this.listenToInputChange(),this.disablePaste&&this.listenToPaste(),$(this.inputfield,Le,this.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})}},{key:"listenToButtons",value:function(){var e=this;this.offListenToButtons(),this.unIconButtonListenerEnd=X(this.iconButton,Se.CLICK,function(){$(e.iconButton,Re,e.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"listenToPaste",value:function(){this.offListenToPaste(),this.disablePasteListener=X(this.inputfield,Se.PASTE,function(e){e.preventDefault()},{capture:!0,passive:!1})}},{key:"offListenToPaste",value:function(){this.disablePasteListener&&this.disablePasteListener()}},{key:"offListenToButtons",value:function(){this.unIconButtonListenerEnd&&this.unIconButtonListenerEnd()}},{key:"listenToInputChange",value:function(){var e=this;this.offListenToInputChange(),this.unInputListenerEnd=X(this.inputfield,Se.INPUT,function(){$(e.inputfield,Ie,e.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"offListenToInputChange",value:function(){this.unInputListenerEnd&&this.unInputListenerEnd()}},{key:"destroy",value:function(){this.offListenToInputChange(),this.offListenToButtons(),this.offListenToPaste()}}]),t}(),et=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,Ve),a(t,[{key:"init",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:'.a-input {\n  display: block;\n  width: 100%; }\n  .a-input:not(:first-child) {\n    margin-top: 5px; }\n    @media (min-width: 768px) {\n      .a-input:not(:first-child) {\n        margin-top: 10px; } }\n\n.a-input__wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.a-input__input {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 40px;\n  padding: 0 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #333;\n  background: #fff;\n  outline: none;\n  border: 1px solid #ccc;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  @media (min-width: 576px) {\n    .a-input__input {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-input__input::-webkit-input-placeholder {\n    color: #999; }\n  .a-input__input:-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::placeholder {\n    color: #999; }\n  .a-input__input:hover:not(:disabled):not(.a-input--error), .a-input__input:active:not(:disabled):not(.a-input--error), .a-input__input:focus:not(:disabled):not(.a-input--error) {\n    border-color: #00008f; }\n  .a-input__input:disabled {\n    background-color: #f5f5f5; }\n\n.a-input--error .a-input__input {\n  border-color: #c91432; }\n\n.a-input--valid .a-input__valid-icon {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.a-input--inline {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle; }\n  .a-input--inline + .a-input--inline {\n    margin-left: 10px; }\n    @media (min-width: 768px) {\n      .a-input--inline + .a-input--inline {\n        margin-left: 15px; } }\n  .a-input--inline .a-input__wrapper {\n    position: relative;\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n\n.a-input__valid-icon {\n  display: none;\n  width: 48px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n  .a-input__valid-icon::before {\n    display: block;\n    width: 8px;\n    height: 16px;\n    content: "";\n    border: solid #1cc54e;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\n.a-input__icon__button {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  height: 30px;\n  width: 30px;\n  border: none;\n  outline: none; }\n\n.a-input__icon__button:hover {\n  cursor: pointer; }\n\n.a-input__icon {\n  height: 16px;\n  width: 14px;\n  fill: #00008f; }\n',template:Je}),this.input=new Qe(this)}},{key:"willRenderCallback",value:function(){var e=this.props,t=e.valid,n=e.inline,i=e.error,o=e.disabled;this.className=q("a-input",this.initialClassName,{"a-input--valid":t,"a-input--inline":n,"a-input--error":i,"a-input--disabled":o})}},{key:"didRenderCallback",value:function(){this.input.init()}},{key:"disconnectedCallback",value:function(){this.input.destroy()}}]),t}();return et.tagName="axa-input",et.propTypes={valid:g.bool,inline:g.bool,error:g.string,disabled:g.bool,inputId:g.string,type:g.string,placeholder:g.string,value:g.string,name:g.string,icon:g.string,disablePaste:g.bool},Ye=et.tagName,Ze=et,customElements.get(Ye)||customElements.define(Ye,Ze,Xe),et});
