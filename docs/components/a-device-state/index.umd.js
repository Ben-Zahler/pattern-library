!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";var t={},e=function(e){return e in t||(t[e]=0),++t[e]},n=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,i=void 0!==n&&n,o=e.cancelable,a=void 0!==o&&o,r=e.detail,d=void 0===r?void 0:r,p=document.createEvent("CustomEvent");p.initCustomEvent(t,i,a,d);var s=p.preventDefault;return p.preventDefault=function(){s.call(p);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},p}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},d=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,n,i)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(i):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},l=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},c=function t(e,n,i,o){var a=Object.getOwnPropertyDescriptor(e,n);if(void 0===a){var r=Object.getPrototypeOf(e);null!==r&&t(r,n,i,o)}else if("value"in a&&a.writable)a.value=i;else{var d=a.set;void 0!==d&&d.call(o,i)}return i},u=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,o=!1,a=void 0;try{for(var r,d=t[Symbol.iterator]();!(i=(r=d.next()).done)&&(n.push(r.value),!e||n.length!==e);i=!0);}catch(t){o=!0,a=t}finally{try{!i&&d.return&&d.return()}finally{if(o)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function f(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new n(e,r({},o,{detail:i}));return t.dispatchEvent(a)}var v=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function m(t){for(var e=t.className,n=!1,i=!0,o=arguments.length,a=Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];var d=a.map(function(t){var o=(a=t,new RegExp("^"+a+"$|^"+a+"\\s|\\s"+a+"\\s|\\s"+a+"$",r)).test(e);var a,r;o?n=!0:i=!1;return{className:t,hasClass:o}});return!(!i&&!n)&&d}var b=/\s+/,x={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),i=n.length,o=void 0,a=0;a<i;++a)if(void 0!==t[o=n[a]])return e[o];return""}()};function y(t,e,n,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=a.capture,d=void 0!==r&&r,p=a.passive,s=void 0===p||p;if(x[e]&&(e=x[e]),!t||!e)return null;var l=void 0===n?"undefined":i(n),c=n&&"string"===l;if("function"===l){if(o){var u=o;d=u.capture,s=u.passive}o=n}for(var h=v?{capture:d,passive:s}:d,f=c?function(e){var i=e.target;for(;!m(i,n)&&i!==t;)i=i.parentNode;if(i!==t)return o(e,i)}:o,y=e.split(b),_=y.length,k=0;k<_;++k)t.addEventListener(y[k],f,h);return function e(){for(var n=0;n<_;++n)t.removeEventListener(y[n],f,h);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),i=n.length,o=0;o<i;++o){var a=n[o];if(t[a]===e)return delete t[a]}}(this,e)}}function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,a=n.trailing,r=void 0===a||a,d=n.maxWait,p=void 0!==d&&d,s=void 0,l=void 0,c=void 0,u=void 0,f=!1,v=e!==p,m=!1!==p;function b(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return s=i,v&&(l&&clearTimeout(l),l=setTimeout(x,e)),m&&!c&&(c=setTimeout(y,p)),o&&!f&&(f=!0,u=t.apply(void 0,h(s))),u}return b.flush=function(){(l||c)&&(u=t.apply(void 0,h(s)));return k(),u},b.cancel=k,b;function x(){c&&clearTimeout(c),_()}function y(){l&&clearTimeout(l),_()}function _(){r&&(u=t.apply(void 0,h(s))),l=null,c=null,f=!1}function k(){l&&(clearTimeout(l),l=null),c&&(clearTimeout(c),c=null),s=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var k=window.__subscriptions;function w(t,e){var n=y(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);k[t]||(k[t]={count:0});var i,o=k[t];return o.count++,o.onsubscribe||(o.onsubscribe=_((i=t,function(){f(document,"pubsub/onsubscribe",i),f(document,"pubsub/onsubscribe/"+i,i),k[i]&&delete k[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete k[t]}}y(document,"pubsub/onsubscribe",function(t){var e=t.detail;k[e]||(k[e]={count:0});var n=k[e],i=n.queue;Array.isArray(i)&&(i.forEach(function(t){var e=u(t,3),n=e[0],i=e[1],o=e[2];f(o,n,i)}),delete n.queue)});var g,C=function(t,e){return t===e};(g=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(){for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];return function(){return t.apply(void 0,[].concat(n,i))?g.apply(void 0,arguments):void 0}}}})()(!0);var O=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(t){return!1}})()&&Object.assign;var P="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function N(){}var j,A=(function(t){t.exports=function(){function t(t,e,n,i,o,a){if(a!==P){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=N,n.PropTypes=n,n}()}(j={exports:{}},j.exports),j.exports),S=function(t){function e(t,n){var i;o(this,e);for(var a="\n    Native Property >>>"+t+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,d=Array(r>2?r-2:0),p=2;p<r;p++)d[p-2]=arguments[p];var s=l(this,(i=e.__proto__||Object.getPrototypeOf(e)).call.apply(i,[this,a].concat(d)));return Error.captureStackTrace&&Error.captureStackTrace(s,e),s.name="PropertyExistsException",s}return p(e,t),e}(Error),D=/[A-Z]/g;function R(t){return t.replace(D,L)}function L(t,e,n){var i=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?i:"-"+i}var M=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function U(t,e){var n=t;if(t&&e!==t){if(M.test(t))try{n=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else n=!0;return n}var I=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,F=/[-_]+/g;function V(t){return t.replace(I,K)}function K(t,e){return 0==+t||F.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function q(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=U(n,e)}var H=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function W(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.capture,a=void 0===o||o,r=i.passive,d=void 0===r||r,p=t.ownerDocument.documentElement,s=y(p,e,function(e){var i=e.target;if(!t.contains(i)&&t!==i)return n(e)},{capture:a,passive:d});return H&&(p.style.cursor="pointer"),s}var z=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var i=e.length,o={},a=0;a<i;++a){var r=e[a];o[r.toUpperCase()]=r}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),B="axa-change",G="data-prevent-default";((function(){function t(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t),this._handleClick=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var i=!n._lastToggleNode,o=e!==n._lastToggleNode,a=!i&&!o;i?(n._notify(z.ENTER,e),n._onInteractive()):o&&n._notify(z.MOVE,e,n._lastToggleNode),n._lastToggleNode=e,a&&n._options.sameClickClose&&n._close()},this._handleClose=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),n._close()},this._handleKeyUp=function(t){(t.key===z.ESCAPE||t.key===z.ESC||27===t.keyCode)&&(t.preventDefault(),n._close())},this._init(e,i)}return a(t,[{key:"_init",value:function(e,n){e&&(this._wcNode=e),n&&(this._options=r({},t.DEFAULTS,n));var i=this._options.containerClass;this._container=i?this._wcNode.querySelector(i):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=y(this._container,z.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=y(this._container,z.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=W(this._container,z.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=y(this._container.ownerDocument,z.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(G)?q(t,G):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(z.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),t})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var $=["title","checked","disabled"],Y=[];var Z=1,J=3,X=8;function Q(t,e){var n=t.nodeType,i=t.nodeName;e.skipChildren&&e.skipChildren()||(n===Z&&function(t,e){for(var n=e.attributes,i=t.attributes,o=null,a=null,r=null,d=null,p=i.length-1;p>=0;--p)if(d=i[p],r=d.name,o=d.namespaceURI,a=d.value,o){var s=d.localName;e.getAttributeNS(o,s||r)!==a&&e.setAttributeNS(o,r,a)}else e.hasAttribute(r)?e.getAttribute(r)!==a&&("null"===a||"undefined"===a?e.removeAttribute(r):e.setAttribute(r,a)):e.setAttribute(r,a);for(var l=n.length-1;l>=0;--l)!1!==(d=n[l]).specified&&(r=d.name,(o=d.namespaceURI)?(r=d.localName||r,t.hasAttributeNS(o,r)||e.removeAttributeNS(o,r)):t.hasAttributeNS(null,r)||e.removeAttribute(r))}(t,e),n!==J&&n!==X||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===i?function(t,e){var n=t.value,i=e.value;tt(t,e,"checked"),tt(t,e,"disabled"),n!==i&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===i?tt(t,e,"selected"):"TEXTAREA"===i&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e))}function tt(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var et=3;function nt(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(Q(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,i=void 0,o=void 0,a=void 0,r=0,d=0;n=e.childNodes[d],i=t.childNodes[d-r],n||i;d++)if(i)if(n)if(it(i,n))(o=nt(i,n))!==n&&(e.replaceChild(o,n),r++);else{a=null;for(var p=d;p<e.childNodes.length;p++)if(it(e.childNodes[p],i)){a=e.childNodes[p];break}a?((o=nt(i,a))!==a&&r++,e.insertBefore(o,n)):i.id||n.id?(e.insertBefore(i,n),r++):(o=nt(i,n))!==n&&(e.replaceChild(o,n),r++)}else e.appendChild(i),r++;else e.removeChild(n),d--}(t,e),e):null:t}function it(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===et&&t.nodeValue===e.nodeValue)}var ot=function(t){function e(t){var n;o(this,e);for(var i="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",a=arguments.length,r=Array(a>1?a-1:0),d=1;d<a;d++)r[d-1]=arguments[d];var p=l(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,i].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(p,e),p.name="TemplateNoStringReturnException",p}return p(e,t),e}(Error),at=!!document.createDocumentFragment().children;function rt(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(rt.prototype,HTMLElement.prototype),Object.setPrototypeOf(rt,HTMLElement);var dt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(t){return function(e){function n(){var t,e,i;o(this,n);for(var a=arguments.length,r=Array(a),d=0;d<a;d++)r[d]=arguments[d];return e=i=l(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(r))),i._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;i.contextNode&&(clearTimeout(i.timeoutId),i.timeoutId=setTimeout(function(){i.contextCallback(i.contextNode,t)},10)),i.unContextEnabled&&i.unContextEnabled(),i.unContextEnabled=w("context/available",i._makeContextReady)},l(i,e)}return p(n,t),a(n,[{key:"connectedCallback",value:function(){d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;k[t]||(k[t]={count:0,queue:[]});var i=k[t].queue;Array.isArray(i)?i.push([t,e,n]):f(n,t,e)}("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(t){return function(e){function n(){return o(this,n),l(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(t){return function(e){function n(t){o(this,n);var e=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));e._reduceProps=function(t,i){var o=t.props,a=t.shouldUpdate,r=e._hasKeys[i];if(-1===$.indexOf(i)&&r)throw new S(i,e);var d="_"+i,p=o[i],s=e[d];return a||e.shouldUpdateCallback(p,s)?(e[d]=p,e._props[i]=p,r&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),i,p,e),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},e._isConnected=!1,e._props={},e._hasKeys={},e.updatedDebounced=_(function(){return e.updated&&e.updated()},50);var i=e.constructor.observedAttributes;return Array.isArray(i)&&i.forEach(function(t){var n,i=V(t),o=i in e;if(-1===$.indexOf(i)&&o)throw new S(i,e);e._hasKeys[i]=o,Object.defineProperty(e,i,n={get:function(){return this._props[i]},set:function(t){this.shouldUpdateCallback(this._props[i],t)&&(this._props[i]=t,o&&c(n.__proto__||Object.getPrototypeOf(n),i,t,this),this._isConnected&&this.updatedDebounced())}})}),e}return p(n,t),a(n,null,[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(R)}}]),a(n,[{key:"connectedCallback",value:function(){var t=this;if(d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&(e.forEach(function(e){var i=V(e);if(t.hasAttribute(e)){var o=q(t,e),a=t._hasKeys[i];t._props[i]=o,a&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),i,o,t)}}),this.checkPropTypes())}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(this.shouldUpdateCallback(n,e)){var i=V(t);this.hasAttribute(t)?this[i]=U(n,t):this[i]=null,this.checkPropTypes(),"value"===t&&null!==n&&f(this,B,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e,i=Object.keys(t).filter(function(t){return n.indexOf(R(t))>-1}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),i&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName;e&&A.checkPropTypes(e,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(t){return function(e){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,i=s(t,["template"]);o(this,n);var a=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return a._template=e,a._hasTemplate=!!e,a._hasRendered=!1,a.updated=a.render,a}return p(n,t),a(n,[{key:"render",value:function(){var t=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var o=this._template;try{if(e){for(var a=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),a.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=a}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});at||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var p=o(this._props,this.childrenFragment,this),s=document.createDocumentFragment();if(Array.isArray(p))p.forEach(function(t){s.appendChild(t)});else if(p){if("string"==typeof p)throw new ot(this);s.appendChild(p)}if(e)d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,s);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(s),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: newTree should be an object");nt(e,t)}(this,l),function(){for(var t=void 0;t=Y.pop();)delete t.isSameNode;Y=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),n}()},function(t){return function(e){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,i=void 0===e?"":e,a=s(t,["styles"]);o(this,n);var r=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,a));return r._styles=i,r}return p(n,t),a(n,[{key:"connectedCallback",value:function(){d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),n}()})(function(t){function n(t){o(this,n);var i=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return i._id=e(i.nodeName),i}return p(n,rt),a(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}()),pt={};(function(t){function e(){var t,n,i;o(this,e);for(var a=arguments.length,r=Array(a),d=0;d<a;d++)r[d]=arguments[d];return n=i=l(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),i._appendStyles=function(){e.appendGlobalStyles(i._styles,i.nodeName)},l(i,n)}return p(e,dt),a(e,null,[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt.uuidv4();if(t&&!pt[e]){var n=document.createElement("style"),i=document.createTextNode(t);pt[e]=!0,n.appendChild(i),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),e})().appendGlobalStyles('.a-device-state::after {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  display: block;\n  content: \'breakpoint:xl, orientation:landscape, pixel-ratio: 1\'; }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1), (orientation: portrait) and (min-resolution: 96dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1), (orientation: landscape) and (min-resolution: 96dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5), (orientation: portrait) and (min-resolution: 144dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5), (orientation: landscape) and (min-resolution: 144dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 576px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 576px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 992px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 992px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2), (orientation: portrait) and (min-resolution: 192dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2), (orientation: landscape) and (min-resolution: 192dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 992px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 992px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3), (orientation: portrait) and (min-resolution: 288dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3), (orientation: landscape) and (min-resolution: 288dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 576px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 576px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 768px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 768px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 992px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 992px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4), (orientation: portrait) and (min-resolution: 384dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4), (orientation: landscape) and (min-resolution: 384dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 576px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 576px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 768px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 768px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 992px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 992px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:4"; } }\n\n.a-device-state--debug::after {\n  position: fixed;\n  top: auto;\n  left: auto;\n  right: 0;\n  bottom: 0;\n  z-index: 1030;\n  display: block;\n  padding: 10px;\n  background: rgba(201, 20, 50, 0.9);\n  color: #fff; }\n')});
