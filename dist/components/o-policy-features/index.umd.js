!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},n=(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":y(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),t={},l=function(e){return e in t||(t[e]=0),++t[e]},c=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function h(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new c(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var b=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function m(e){for(var r=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var g=/\s+/,x={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function v(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(x[e]&&(e=x[e]),!n||!e)return null;var c=void 0===o?"undefined":y(o),u=o&&"string"===c;if("function"===c){if(r){var d=r;a=d.capture,l=d.passive}r=o}for(var p=b?{capture:a,passive:l}:a,f=u?function(e){var t=e.target;for(;!m(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(g),v=h.length,_=0;_<v;++_)n.addEventListener(h[_],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function _(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,f=!1,h=r!==l,v=!1!==l;function _(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(y,r)),v&&!d&&(d=setTimeout(b,l)),i&&!f&&(f=!0,p=o.apply(void 0,C(c))),p}return _.flush=function(){(u||d)&&(p=o.apply(void 0,C(c)));return g(),p},_.cancel=g,_;function y(){d&&clearTimeout(d),m()}function b(){u&&clearTimeout(u),m()}function m(){a&&(p=o.apply(void 0,C(c))),d=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var k=window.__subscriptions;function O(e,t){var n=v(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);k[e]||(k[e]={count:0});var o,r=k[e];return r.count++,r.onsubscribe||(r.onsubscribe=_((o=e,function(){h(document,"pubsub/onsubscribe",o),h(document,"pubsub/onsubscribe/"+o,o),k[o]&&delete k[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete k[e]}}v(document,"pubsub/onsubscribe",function(e){var t=e.detail;k[t]||(k[t]={count:0});var n=k[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=s(e,3),n=t[0],o=t[1],r=t[2];h(r,n,o)}),delete n.queue)});var w,E=function(e,t){return e===t},N=((w=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:E;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?w.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;u(this,l);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,i=Array(2<r?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s=p(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return o(l,e),l}(Error)),A=/[A-Z]/g;function P(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var T=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function j(t,n){var e=t;if(t&&n!==t){if(T.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,D=/[-_]+/g;function R(e){return e.replace(S,L)}function L(e,t){return 0==+e||D.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function M(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=j(n,t)}var U=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function I(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=v(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=c,U&&(t.style.cursor="pointer"),u}var V=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend"),F="axa-change",K="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(V.ENTER,t),i._onInteractive()):o&&i._notify(V.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===V.ESCAPE||e.key===V.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return r(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=v(this._container,V.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=v(this._container,V.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=I(this._container,V.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=v(this._container.ownerDocument,V.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(K)?M(e,K):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(V.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var z=["title","checked","disabled"],H=[];var q=1,W=3,$=8;function G(e,t){var n=e.nodeType,o=e.nodeName;n===q&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,i=null,a=null,s=null,l=o.length-1;0<=l;--l)if(s=o[l],a=s.name,r=s.namespaceURI,i=s.value,r){var c=s.localName;t.getAttributeNS(r,c||a)!==i&&t.setAttributeNS(r,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;0<=u;--u)!1!==(s=n[u]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==W&&n!==$||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;B(e,t,"checked"),B(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?B(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function B(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Z=3;function J(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(G(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(X(o,n))(r=J(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(X(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=J(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=J(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function X(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Z&&e.nodeValue===t.nodeValue)}var Y=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return o(s,e),s}(Error),Q=!!document.createDocumentFragment().children;function ee(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ee.prototype,HTMLElement.prototype),Object.setPrototypeOf(ee,HTMLElement);var te=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=O("context/available",n._makeContextReady)},p(n,t)}return o(a,t),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;k[e]||(k[e]={count:0,queue:[]});var o=k[e].queue;Array.isArray(o)?o.push([e,t,n]):h(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=p(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=l._hasKeys[t];if(-1===z.indexOf(t)&&r)throw new N(t,l);var i="_"+t,a=n[t],s=l[i];return o||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,r&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=_(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=R(e),o=n in l;if(-1===z.indexOf(n)&&o)throw new N(n,l);l._hasKeys[n]=o,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&f(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return o(c,t),r(c,[{key:"connectedCallback",value:function(){var r=this;if(d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=R(e);if(r.hasAttribute(e)){var n=M(r,e),o=r._hasKeys[t];r._props[t]=n,o&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,r)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=R(e);this.hasAttribute(e)?this[o]=j(n):this[o]=null,"value"===e&&null!==n&&h(this,F,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(A,P))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var o=p(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return o(l,t),r(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Q||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Y(this);a.appendChild(i)}if(e)d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");J(t,e)}(this,s),function(){for(var e=void 0;e=H.pop();)delete e.isSameNode;H=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);u(this,i);var r=p(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return o(i,t),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=l(t.nodeName),t}return o(n,ee),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),ne={},oe=function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},p(n,t)}return o(a,te),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:te.uuidv4();if(e&&!ne[t]){var n=document.createElement("style"),o=document.createTextNode(e);ne[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var re='.o-policy-features {\n  position: relative;\n  display: block; }\n\n.o-policy-features__style-dark-indigo,\n.o-policy-features__style-default {\n  background: #3b3fd8;\n  color: #fff; }\n\n.o-policy-features__style-axa-blue {\n  background: #00008f;\n  color: #fff; }\n\n.o-policy-features__style-wild-sand {\n  background: #f5f5f5;\n  color: #333; }\n\n.o-policy-features__style-white {\n  background: #fff;\n  color: #333; }\n\n.o-policy-features__title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif;\n  text-align: center; }\n  @media (min-width: 576px) {\n    .o-policy-features__title {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .o-policy-features__title {\n      font-size: 36px; } }\n\n.o-policy-features__content {\n  padding: 24px 15px 24px 15px; }\n  @media (min-width: 576px) {\n    .o-policy-features__content {\n      padding: 48px 90px 48px 90px; } }\n  @media (min-width: 768px) {\n    .o-policy-features__content {\n      padding: 48px 90px 48px 90px; } }\n\n.o-policy-features__items {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.o-policy-features__items > * {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%; }\n  @media (min-width: 768px) {\n    .o-policy-features__items > * {\n      -ms-flex-preferred-size: 50%;\n          flex-basis: 50%; } }\n  @media (min-width: 992px) {\n    .o-policy-features__items > * {\n      -ms-flex-preferred-size: 25%;\n          flex-basis: 25%; } }\n',ie=/\n[\s]+$/,ae=/^\n[\s]+/,se=/[\s]+$/,le=/^[\s]+/,ce=/[\n\s]+/g,ue=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],de=["code","pre","textarea"],pe=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===ue.indexOf(i)&&-1===de.indexOf(i)?""===(o=u.nodeValue.replace(ae,"").replace(se,"").replace(ie,"").replace(ce," "))?t.removeChild(u):u.nodeValue=o:-1===de.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(ae,r).replace(le," ").replace(se,"").replace(ie,"").replace(ce," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===ue.indexOf(i)&&-1===de.indexOf(i)?""===(o=u.nodeValue.replace(ae,"").replace(ie,"").replace(ce," "))?t.removeChild(u):u.nodeValue=o:-1===de.indexOf(i)&&(o=u.nodeValue.replace(le," ").replace(ae,"").replace(ie,"").replace(ce," "),u.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}};function fe(e,t){var n,o,r,i=e.title,a=e.axaStyle,s="default";return-1<["default","dark-indigo","axa-blue","wild-sand","white"].indexOf(a)&&(s=a),(o=document.createElement("article")).setAttribute("class","o-policy-features__content o-policy-features__style-"+String(s)),pe(o,["\n    ",i&&(r=document.createElement("h1"),r.setAttribute("class","o-policy-features__title"),pe(r,[i]),r),"\n      ",(n=document.createElement("div"),n.setAttribute("class","o-policy-features__items"),pe(n,["\n          ",t,"\n      "]),n),"\n  "]),o}var he,ve,_e=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:re,template:fe}))}return o(t,oe),r(t,null,[{key:"observedAttributes",get:function(){return["axa-style","title"]}}]),r(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=n(this.initialClassName,"o-policy-features")}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}}]),t}();return _e.tagName="axa-policy-features",he=_e.tagName,ve=_e,customElements.get(he)||customElements.define(he,ve),_e});
