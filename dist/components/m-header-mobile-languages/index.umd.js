!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function y(){}var _=e(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=y,n.PropTypes=n,n}()}),b={},m=function(e){return e in b||(b[e]=0),++b[e]},g=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function C(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new g(t,l({},r,{detail:n}));return e.dispatchEvent(o)}var O=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function k(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}var x=/\s+/,w={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function E(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,s=void 0!==a&&a,l=o.passive,u=void 0===l||l;if(w[t]&&(t=w[t]),!e||!t)return null;var c=void 0===n?"undefined":i(n),p=n&&"string"===c;if("function"===c){if(r){var d=r;s=d.capture,u=d.passive}r=n}for(var f=O?{capture:s,passive:u}:s,h=p?function(t){var o=t.target;for(;!k(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(x),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=t!==l,y=!1!==l;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,h&&(c&&clearTimeout(c),c=setTimeout(b,t)),y&&!p&&(p=setTimeout(m,l)),o&&!f&&(f=!0,d=e.apply(void 0,v(u))),d}return _.flush=function(){(c||p)&&(d=e.apply(void 0,v(u)));return C(),d},_.cancel=C,_;function b(){p&&clearTimeout(p),g()}function m(){c&&clearTimeout(c),g()}function g(){a&&(d=e.apply(void 0,v(u))),c=null,p=null,f=!1}function C(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var T=window.__subscriptions;function A(e,t){var n=E(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);T[e]||(T[e]={count:0});var r,o=T[e];return o.count++,o.onsubscribe||(o.onsubscribe=N((r=e,function(){C(document,"pubsub/onsubscribe",r),C(document,"pubsub/onsubscribe/"+r,r),T[r]&&delete T[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete T[e]}}E(document,"pubsub/onsubscribe",function(e){var t=e.detail;T[t]||(T[t]={count:0});var n=T[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=h(e,3),n=t[0],r=t[1],o=t[2];C(o,n,r)}),delete n.queue)});var P,j=function(e,t){return e===t},S=((P=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?P.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var r;a(this,t);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,s=Array(i>2?i-2:0),l=2;l<i;l++)s[l-2]=arguments[l];var u=d(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,o].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return c(t,e),t}(Error)),R=/[A-Z]/g;function D(e){return e.replace(R,L)}function L(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var U=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function I(e,t){var n=e;if(e&&t!==e){if(U.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var M=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,V=/[-_]+/g;function F(e){return e.replace(M,q)}function q(e,t){return 0==+e||V.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function K(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=I(n,t)}var H=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function W(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.capture,i=void 0===o||o,a=r.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,u=E(l,t,function(t){var r=t.target;if(!e.contains(r)&&e!==r)return n(t)},{capture:i,passive:s});return H&&(l.style.cursor="pointer"),u}var z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),$="axa-change",B="data-prevent-default";((function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var r=!n._lastToggleNode,o=t!==n._lastToggleNode,i=!r&&!o;r?(n._notify(z.ENTER,t),n._onInteractive()):o&&n._notify(z.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===z.ESCAPE||e.key===z.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,r)}return s(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=l({},e.DEFAULTS,n));var r=this._options.containerClass;this._container=r?this._wcNode.querySelector(r):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=E(this._container,z.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=E(this._container,z.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=W(this._container,z.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=E(this._container.ownerDocument,z.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(B)?K(e,B):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(z.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var G=["title","checked","disabled"],Y=[];var Z=1,J=3,X=8;function Q(e,t){var n=e.nodeType,r=e.nodeName;t.skipChildren&&t.skipChildren()||(n===Z&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,l=r.length-1;l>=0;--l)if(s=r[l],a=s.name,o=s.namespaceURI,i=s.value,o){var u=s.localName;t.getAttributeNS(o,u||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;c>=0;--c)!1!==(s=n[c]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==J&&n!==X||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;ee(e,t,"checked"),ee(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?ee(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t))}function ee(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var te=3;function ne(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Q(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(re(r,n))(o=ne(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(re(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=ne(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=ne(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function re(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===te&&e.nodeValue===t.nodeValue)}var oe=function(e){function t(e){var n;a(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];var l=d(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return c(t,e),t}(Error),ie=!!document.createDocumentFragment().children;function ae(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ae.prototype,HTMLElement.prototype),Object.setPrototypeOf(ae,HTMLElement);var se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,r;a(this,n);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return t=r=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=A("context/available",r._makeContextReady)},d(r,t)}return c(n,e),s(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;T[e]||(T[e]={count:0,queue:[]});var r=T[e].queue;Array.isArray(r)?r.push([e,t,n]):C(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),s(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){a(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,r){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[r];if(-1===G.indexOf(r)&&a)throw new S(r,t);var s="_"+r,l=o[r],u=t[s];return i||t.shouldUpdateCallback(l,u)?(t[s]=l,t._props[r]=l,a&&f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,l,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=N(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=F(e),o=r in t;if(-1===G.indexOf(r)&&o)throw new S(r,t);t._hasKeys[r]=o,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,o&&f(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this.updatedDebounced())}})}),t}return c(n,e),s(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(D)}}]),s(n,[{key:"connectedCallback",value:function(){var e=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&(t.forEach(function(t){var r=F(t);if(e.hasAttribute(t)){var o=K(e,t),i=e._hasKeys[r];e._props[r]=o,i&&f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,o,e)}}),this.checkPropTypes())}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=F(e);this.hasAttribute(e)?this[r]=I(n,e):this[r]=null,this.checkPropTypes(),"value"===e&&null!==n&&C(this,$,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return n.indexOf(D(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&_.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=p(e,["template"]);a(this,n);var o=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return c(n,e),s(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ie||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=r(this._props,this.childrenFragment,this),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new oe(this);l.appendChild(s)}if(t)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,l);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");ne(t,e)}(this,c),function(){for(var e=void 0;e=Y.pop();)delete e.isSameNode;Y=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=p(e,["styles"]);a(this,n);var i=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return i._styles=r,i}return c(n,e),s(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){a(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=m(n.nodeName),n}return c(t,ae),s(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),le={},ue=function(e){function t(){var e,n,r;a(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},d(r,n)}return c(t,se),s(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:se.uuidv4();if(e&&!le[t]){var n=document.createElement("style"),r=document.createTextNode(e);le[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ce,pe,de=function(e){function t(t,n,r){return null==t[n]?null:e(t,n,r)}return t.isRequired=e,t}(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),fe=".m-header-mobile-languages {\n  display: block;\n  background: #e5e5e5;\n  text-align: center; }\n\n.m-header-mobile-languages__link {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  display: inline-block;\n  padding: 20px 8px;\n  color: #7f7f7f;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-mobile-languages__link {\n      font-size: 16px; } }\n  .m-header-mobile-languages__link.is-header-mobile-languages-active, .m-header-mobile-languages__link:hover, .m-header-mobile-languages__link:active, .m-header-mobile-languages__link:focus {\n    text-decoration: none;\n    color: #00008f; }\n  .m-header-mobile-languages__link::before {\n    display: block;\n    float: left;\n    margin-left: -8px;\n    content: '\\00a0';\n    border-left: 1px solid #7f7f7f; }\n  .m-header-mobile-languages__link:first-child::before {\n    display: none; }\n",he=/\n[\s]+$/,ve=/^\n[\s]+/,ye=/[\s]+$/,_e=/^[\s]+/,be=/[\n\s]+/g,me=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ge=["code","pre","textarea"],Ce=e(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=void 0===o?"undefined":i(o);if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}),Oe=function(e){var t=e.items;return Array.isArray(t)&&t.map(function(e){var t,n=e.code,r=e.url,o=e.isActive;return(t=document.createElement("a")).setAttribute("href",""+String(r)),t.setAttribute("class",""+String(Ce("m-header-mobile-languages__link","js-header-mobile-close",{"is-header-mobile-languages-active":o}))),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===me.indexOf(i)&&-1===ge.indexOf(i)?""===(r=c.nodeValue.replace(ve,"").replace(ye,"").replace(he,"").replace(be," "))?t.removeChild(c):c.nodeValue=r:-1===ge.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(ve,o).replace(_e," ").replace(ye,"").replace(he,"").replace(be," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===me.indexOf(i)&&-1===ge.indexOf(i)?""===(r=c.nodeValue.replace(ve,"").replace(he,"").replace(be," "))?t.removeChild(c):c.nodeValue=r:-1===ge.indexOf(i)&&(r=c.nodeValue.replace(_e," ").replace(ve,"").replace(he,"").replace(be," "),c.nodeValue=r));var p=u.nodeName;p&&(i=p.toLowerCase()),t.appendChild(u)}}}}(t,[n]),t})},ke=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:fe,template:Oe}))}return c(t,ue),s(t,[{key:"connectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-mobile-languages"}}]),t}();return ke.tagName="axa-header-mobile-languages",ke.propTypes={items:_.arrayOf(_.shape({url:de,code:_.string,isActive:_.bool}))},ce=ke.tagName,pe=ke,customElements.get(ce)||customElements.define(ce,pe),ke});
