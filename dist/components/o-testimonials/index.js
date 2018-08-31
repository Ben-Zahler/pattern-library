var StyleGuideWebComponent=function(){"use strict";var e={},i=function(t){return t in e||(e[t]=0),++e[t]},r=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,i=void 0!==n&&n,o=e.cancelable,r=void 0!==o&&o,s=e.detail,a=void 0===s?void 0:s,l=document.createEvent("CustomEvent");l.initCustomEvent(t,i,r,a);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},l}}(),_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},h=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0},d=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},a=function(t,e){var n={};for(var i in t)0<=e.indexOf(i)||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},p=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},f=function t(e,n,i,o){var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var s=Object.getPrototypeOf(e);null!==s&&t(s,n,i,o)}else if("value"in r&&r.writable)r.value=i;else{var a=r.set;void 0!==a&&a.call(o,i)}return i},l=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},w=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function m(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new r(e,s({},i,{detail:n}));return t.dispatchEvent(o)}var y=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function b(t){for(var o=t.className,r=!1,s=!0,e=arguments.length,n=Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(o);var n,i;e?r=!0:s=!1;return{className:t,hasClass:e}});return!(!s&&!r)&&a}var g=/\s+/,x={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==t[o=n[r]])return e[o];return""}()};function v(n,t,i,o){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=e.capture,s=void 0!==r&&r,a=e.passive,l=void 0===a||a;if(x[t]&&(t=x[t]),!n||!t)return null;var c=void 0===i?"undefined":_(i),u=i&&"string"===c;if("function"===c){if(o){var h=o;s=h.capture,l=h.passive}o=i}for(var d=y?{capture:s,passive:l}:s,p=u?function(t){var e=t.target;for(;!b(e,i)&&e!==n;)e=e.parentNode;if(e!==n)return o(t,e)}:o,f=t.split(g),m=f.length,v=0;v<m;++v)n.addEventListener(f[v],p,d);return function t(){for(var e=0;e<m;++e)n.removeEventListener(f[e],p,d);!function(t,e){if(!t)return;for(var n=Object.keys(t),i=n.length,o=0;o<i;++o){var r=n[o];if(t[r]===e)return delete t[r]}}(this,t)}}function k(i){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,r=void 0!==e&&e,n=t.trailing,s=void 0===n||n,a=t.maxWait,l=void 0!==a&&a,c=void 0,u=void 0,h=void 0,d=void 0,p=!1,f=o!==l,m=!1!==l;function v(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return c=e,f&&(u&&clearTimeout(u),u=setTimeout(_,o)),m&&!h&&(h=setTimeout(y,l)),r&&!p&&(p=!0,d=i.apply(void 0,w(c))),d}return v.flush=function(){(u||h)&&(d=i.apply(void 0,w(c)));return g(),d},v.cancel=g,v;function _(){h&&clearTimeout(h),b()}function y(){u&&clearTimeout(u),b()}function b(){s&&(d=i.apply(void 0,w(c))),h=u=null,p=!1}function g(){u&&(clearTimeout(u),u=null),h&&(clearTimeout(h),h=null),c=void 0,p=!1}}window.__subscriptions=window.__subscriptions||{};var c=window.__subscriptions;function C(t,e){var n=v(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);c[t]||(c[t]={count:0});var i,o=c[t];return o.count++,o.onsubscribe||(o.onsubscribe=k((i=t,function(){m(document,"pubsub/onsubscribe",i),m(document,"pubsub/onsubscribe/"+i,i),c[i]&&delete c[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete c[t]}}v(document,"pubsub/onsubscribe",function(t){var e=t.detail;c[e]||(c[e]={count:0});var n=c[e],i=n.queue;Array.isArray(i)&&(i.forEach(function(t){var e=l(t,3),n=e[0],i=e[1],o=e[2];m(o,n,i)}),delete n.queue)});var O,t=function(t,e){return t===e},T=((O=function(){var t;return(t=console).log.apply(t,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t;return function(){for(var t=arguments.length,i=Array(t),e=0;e<t;e++)i[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return o.apply(void 0,[].concat(i,e))?O.apply(void 0,arguments):void 0}}}})()(!0),function(t){function l(t,e){var n;u(this,l);for(var i="\n    Native Property >>>"+t+"<<< exists already at "+e.nodeName+"#"+e._id+" and evaluates to -> "+e[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,r=Array(2<o?o-2:0),s=2;s<o;s++)r[s-2]=arguments[s];var a=p(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,i].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,l),a.name="PropertyExistsException",a}return d(l,t),l}(Error)),N=/[A-Z]/g;function A(t,e,n){var i=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?i:"-"+i}var E=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function D(e,n){var t=e;if(e&&n!==e){if(E.test(e))try{t=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else t=!0;return t}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function S(t){return t.replace(n,P)}function P(t,e){return 0==+t||R.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function j(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=D(n,e)}var L=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function I(n,t,i){var e,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,s=void 0===r||r,a=o.passive,l=void 0===a||a,c=n.ownerDocument.documentElement,u=v(c,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return i(t)},{capture:s,passive:l});return e=c,L&&(e.style.cursor="pointer"),u}var M=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var i=e.length,o={},r=0;r<i;++r){var s=e[r];o[s.toUpperCase()]=s}return o}("click","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend"),U="axa-change",H="axa-swipe-up",V="axa-swipe-down",F="axa-swipe-left",z="axa-swipe-right",K="data-prevent-default",q=function(){function i(t){var r=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,i),this._handleClick=function(t,e){r.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!r._lastToggleNode,i=e!==r._lastToggleNode,o=!n&&!i;n?(r._notify(M.ENTER,e),r._onInteractive()):i&&r._notify(M.MOVE,e,r._lastToggleNode),r._lastToggleNode=e,o&&r._options.sameClickClose&&r._close()},this._handleClose=function(t,e){r.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),r._close()},this._handleKeyUp=function(t){(t.key===M.ESCAPE||t.key===M.ESC||27===t.keyCode)&&(t.preventDefault(),r._close())},this._init(t,e)}return o(i,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=s({},i.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=v(this._container,M.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=v(this._container,M.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=I(this._container,M.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=v(this._container.ownerDocument,M.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(K)?j(t,K):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(M.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),i}();q.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var W=["title","checked","disabled"],B=[];var $=1,G=3,X=8;function Y(t,e){var n=t.nodeType,i=t.nodeName;n===$&&function(t,e){for(var n=e.attributes,i=t.attributes,o=null,r=null,s=null,a=null,l=i.length-1;0<=l;--l)if(a=i[l],s=a.name,o=a.namespaceURI,r=a.value,o){var c=a.localName;e.getAttributeNS(o,c||s)!==r&&e.setAttributeNS(o,s,r)}else e.hasAttribute(s)?e.getAttribute(s)!==r&&("null"===r||"undefined"===r?e.removeAttribute(s):e.setAttribute(s,r)):e.setAttribute(s,r);for(var u=n.length-1;0<=u;--u)!1!==(a=n[u]).specified&&(s=a.name,(o=a.namespaceURI)?(s=a.localName||s,t.hasAttributeNS(o,s)||e.removeAttributeNS(o,s)):t.hasAttributeNS(null,s)||e.removeAttribute(s))}(t,e),n!==G&&n!==X||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===i?function(t,e){var n=t.value,i=e.value;Z(t,e,"checked"),Z(t,e,"disabled"),n!==i&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===i?Z(t,e,"selected"):"TEXTAREA"===i&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function Z(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var J=3;function Q(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(Y(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,i=void 0,o=void 0,r=void 0,s=0,a=0;n=e.childNodes[a],i=t.childNodes[a-s],n||i;a++)if(i)if(n)if(tt(i,n))(o=Q(i,n))!==n&&(e.replaceChild(o,n),s++);else{r=null;for(var l=a;l<e.childNodes.length;l++)if(tt(e.childNodes[l],i)){r=e.childNodes[l];break}r?((o=Q(i,r))!==r&&s++,e.insertBefore(o,n)):i.id||n.id?(e.insertBefore(i,n),s++):(o=Q(i,n))!==n&&(e.replaceChild(o,n),s++)}else e.appendChild(i),s++;else e.removeChild(n),a--}(t,e),e):null:t}function tt(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===J&&t.nodeValue===e.nodeValue)}var et=function(t){function a(t){var e;u(this,a);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,o=Array(1<i?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];var s=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(s,a),s.name="TemplateNoStringReturnException",s}return d(a,t),a}(Error),nt=!!document.createDocumentFragment().children;function it(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(it.prototype,HTMLElement.prototype),Object.setPrototypeOf(it,HTMLElement);var ot=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(e){return function(t){function s(){var t,e,n;u(this,s);for(var i=arguments.length,o=Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=n=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this].concat(o))))._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,t)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=C("context/available",n._makeContextReady)},p(n,e)}return d(s,e),o(s,[{key:"connectedCallback",value:function(){h(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"connectedCallback",this)&&h(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){h(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"disconnectedCallback",this)&&h(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;c[t]||(c[t]={count:0,queue:[]});var i=c[t].queue;Array.isArray(i)?i.push([t,e,n]):m(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),s}()},function(e){return function(t){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,e),o(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function c(t){u(this,c);var l=p(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,t));l._reduceProps=function(t,e){var n=t.props,i=t.shouldUpdate,o=l._hasKeys[e];if(-1===W.indexOf(e)&&o)throw new T(e,l);var r="_"+e,s=n[e],a=l[r];return i||l.shouldUpdateCallback(s,a)?(l[r]=s,l._props[e]=s,o&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),e,s,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=k(function(){return l.updated&&l.updated()},50);var e=l.constructor.observedAttributes;return Array.isArray(e)&&e.forEach(function(t){var e,n=S(t),i=n in l;if(-1===W.indexOf(n)&&i)throw new T(n,l);l._hasKeys[n]=i,Object.defineProperty(l,n,e={get:function(){return this._props[n]},set:function(t){this.shouldUpdateCallback(this._props[n],t)&&(this._props[n]=t,i&&f(e.__proto__||Object.getPrototypeOf(e),n,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return d(c,e),o(c,[{key:"connectedCallback",value:function(){var o=this;if(h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var e=S(t);if(o.hasAttribute(t)){var n=j(o,t),i=o._hasKeys[e];o._props[e]=n,i&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),e,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(this.shouldUpdateCallback(n,e)){var i=S(t);this.hasAttribute(t)?this[i]=D(n):this[i]=null,"value"===t&&null!==n&&m(this,U,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return-1<n.indexOf(t.replace(N,A))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(e){return function(t){function l(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=a(t,["template"]);u(this,l);var i=p(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return i._template=e,i._hasTemplate=!!e,i._hasRendered=!1,i.updated=i.render,i}return d(l,e),o(l,[{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var i=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});nt||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var r=e(this._props,this.childrenFragment,this),s=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(t){s.appendChild(t)});else if(r){if("string"==typeof r)throw new et(this);s.appendChild(r)}if(t)h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,s);else{var a=this.cloneNode(!1);a._isMorphing=!0,a.appendChild(s),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: newTree should be an object");Q(e,t)}(this,a),function(){for(var t=void 0;t=B.pop();)delete t.isSameNode;B=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),l}()},function(e){return function(t){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,i=a(t,["styles"]);u(this,r);var o=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o._styles=n,o}return d(r,e),o(r,[{key:"connectedCallback",value:function(){h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),r}()})(function(t){function n(t){u(this,n);var e=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e._id=i(e.nodeName),e}return d(n,it),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}()),rt={},st=function(t){function s(){var t,e,n;u(this,s);for(var i=arguments.length,o=Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=n=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this].concat(o))))._appendStyles=function(){s.appendGlobalStyles(n._styles,n.nodeName)},p(n,e)}return d(s,ot),o(s,null,[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:ot.uuidv4();if(t&&!rt[e]){var n=document.createElement("style"),i=document.createTextNode(t);rt[e]=!0,n.appendChild(i),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),s}();var at='.o-testimonials__background {\n  display: inline-block;\n  width: 100%;\n  background: #668980;\n  color: #fff; }\n\n.o-testimonials__title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif;\n  margin: 30px 30px 0 30px;\n  text-align: center; }\n  @media (min-width: 576px) {\n    .o-testimonials__title {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .o-testimonials__title {\n      font-size: 36px; } }\n  @media (min-width: 576px) {\n    .o-testimonials__title {\n      margin: 50px 30px 0 30px; } }\n\n.o-testimonials__subtitle {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin: 20px 30px 0 30px;\n  text-align: center; }\n  @media (min-width: 576px) {\n    .o-testimonials__subtitle {\n      font-size: 16px; } }\n\n.o-testimonials__content {\n  position: relative;\n  width: 100%;\n  margin: 0 10px; }\n  @media (min-width: 576px) {\n    .o-testimonials__content {\n      margin: 0 30px; } }\n\n.o-testimonials__arrow-left {\n  display: none;\n  padding: 6px;\n  height: 14px;\n  width: 6px;\n  border: solid #fff;\n  border-width: 2px 0 0 2px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  cursor: pointer;\n  background: transparent; }\n  @media (min-width: 576px) {\n    .o-testimonials__arrow-left {\n      padding: 10px;\n      height: 20px;\n      width: 10px; } }\n\n.o-testimonials__arrow-right {\n  display: none;\n  height: 14px;\n  width: 6px;\n  padding: 6px;\n  border: solid #fff;\n  border-width: 2px 0 0 2px;\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n  cursor: pointer;\n  background: transparent; }\n  @media (min-width: 576px) {\n    .o-testimonials__arrow-right {\n      padding: 10px;\n      height: 20px;\n      width: 10px; } }\n\n.o-testimonials__arrow-right:focus {\n  outline: none; }\n\n.o-testimonials__arrow-left:focus {\n  outline: none; }\n\n.o-testimonials__navigator {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  padding: 10px 5px 70px 5px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 992px) {\n    .o-testimonials__navigator {\n      padding: 0 15px; } }\n  @media (min-width: 576px) {\n    .o-testimonials__navigator {\n      padding: 10px 5px 80px 5px; } }\n\n.o-testimonials__item {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  text-align: center; }\n  @media (min-width: 576px) {\n    .o-testimonials__item {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.o-testimonials__item-testimonial {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  text-align: center; }\n  @media (min-width: 576px) {\n    .o-testimonials__item-testimonial {\n      font-size: 20px; } }\n\n.o-testimonials__item-author {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: absolute;\n  bottom: -40px;\n  left: 0;\n  right: 0;\n  display: block;\n  margin: auto;\n  text-transform: uppercase;\n  text-align: center;\n  font-style: normal; }\n  @media (min-width: 576px) {\n    .o-testimonials__item-author {\n      font-size: 13px;\n      line-height: 1.38; } }\n  @media (min-width: 992px) {\n    .o-testimonials__item-author {\n      margin-top: 20px; } }\n\n.o-testimonials__item_animation_left {\n  -webkit-animation: fromLeft 0.8s;\n          animation: fromLeft 0.8s; }\n\n.o-testimonials__item_animation_right {\n  -webkit-animation: fromRight 0.8s;\n          animation: fromRight 0.8s; }\n\n.o-testimonials--show-all-inline .o-testimonials__item-author {\n  position: relative;\n  bottom: 0;\n  margin-bottom: 20px; }\n\n@-webkit-keyframes fromRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); } }\n\n@keyframes fromRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate(100%, 0);\n            transform: translate(100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); } }\n\n@-webkit-keyframes fromLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); } }\n\n@keyframes fromLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); } }\n',lt=/\n[\s]+$/,ct=/^\n[\s]+/,ut=/[\s]+$/,ht=/^[\s]+/,dt=/[\n\s]+/g,pt=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ft=["code","pre","textarea"],mt=function t(e,n){if(Array.isArray(n))for(var i,o,r=e.nodeName.toLowerCase(),s=!1,a=0,l=n.length;a<l;a++){var c=n[a];if(Array.isArray(c))t(e,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=e.childNodes[e.childNodes.length-1];if("string"==typeof c)s=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),e.appendChild(c),u=c),a===l-1&&(s=!1,-1===pt.indexOf(r)&&-1===ft.indexOf(r)?""===(i=u.nodeValue.replace(ct,"").replace(ut,"").replace(lt,"").replace(dt," "))?e.removeChild(u):u.nodeValue=i:-1===ft.indexOf(r)&&(o=0===a?"":" ",i=u.nodeValue.replace(ct,o).replace(ht," ").replace(ut,"").replace(lt,"").replace(dt," "),u.nodeValue=i));else if(c&&c.nodeType){s&&(s=!1,-1===pt.indexOf(r)&&-1===ft.indexOf(r)?""===(i=u.nodeValue.replace(ct,"").replace(lt,"").replace(dt," "))?e.removeChild(u):u.nodeValue=i:-1===ft.indexOf(r)&&(i=u.nodeValue.replace(ht," ").replace(ct,"").replace(lt,"").replace(dt," "),u.nodeValue=i));var h=c.nodeName;h&&(r=h.toLowerCase()),e.appendChild(c)}}}};var vt,_t=(function(t){!function(){var r={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=void 0===n?"undefined":_(n);if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n))t.push(s.apply(null,n));else if("object"===i)for(var o in n)r.call(n,o)&&n[o]&&t.push(o)}}return t.join(" ")}t.exports?t.exports=s:window.classNames=s}()}(vt={exports:{}},vt.exports),vt.exports),yt=function(t,e){var n,i,o,r,s,a,l,c,u=t.title,h=t.subtitle,d=t.showAllInline;return(a=document.createElement("article")).setAttribute("class",""+String(_t("o-testimonials__background","js-o-testimonials",{"o-testimonials--show-all-inline":d}))),mt(a,["\n    ",(s=document.createElement("axa-container"),mt(s,["\n        ",u&&(l=document.createElement("h1"),l.setAttribute("class","o-testimonials__title"),mt(l,[u]),l),"\n        ",h&&(c=document.createElement("p"),c.setAttribute("class","o-testimonials__subtitle"),mt(c,[h]),c),"\n        ",(r=document.createElement("div"),r.setAttribute("class","o-testimonials__navigator js-o-testimonials__navigator"),mt(r,["\n          ",(n=document.createElement("button"),n.setAttribute("class","o-testimonials__arrow-left js-o-testimonials__control-left"),n),"\n          ",(i=document.createElement("div"),i.setAttribute("class","o-testimonials__content"),mt(i,["\n            ",e,"\n          "]),i),"\n          ",(o=document.createElement("button"),o.setAttribute("class","o-testimonials__arrow-right js-o-testimonials__control-right"),o),"\n        "]),r),"\n    "]),s),"\n  "]),a},bt=function(){function n(t){var e=this;u(this,n),this.xDown=null,this.yDown=null,this.element=t,this.DIFF_THRESHOLD=t.offsetWidth/10,this.TIME_THRESHOLD=200,v(this.element,M.TOUCHSTART,function(t){e.xDown=t.touches[0].clientX,e.yDown=t.touches[0].clientY,e.timeDown=Date.now(),e.xDiff=0,e.yDiff=0})}return o(n,[{key:"onLeft",value:function(){m(this.element,F,null,{bubbles:!0,cancelable:!0,composed:!0})}},{key:"onRight",value:function(){m(this.element,z,null,{bubbles:!0,cancelable:!0,composed:!0})}},{key:"onUp",value:function(){m(this.element,H,null,{bubbles:!0,cancelable:!0,composed:!0})}},{key:"onDown",value:function(){m(this.element,V,null,{bubbles:!0,cancelable:!0,composed:!0})}},{key:"handleTouchMove",value:function(t){if(this.xDown&&this.yDown){var e=t.touches[0].clientX,n=t.touches[0].clientY;this.xDiff=this.xDown-e,this.yDiff=this.yDown-n}}},{key:"handleTouchEnd",value:function(){var t=Date.now()-this.timeDown;Math.abs(this.xDiff)>Math.abs(this.yDiff)?Math.abs(this.xDiff)>this.DIFF_THRESHOLD&&t<this.TIME_THRESHOLD&&(0<this.xDiff?this.onLeft():this.onRight()):Math.abs(this.yDiff)>this.DIFF_THRESHOLD&&t<this.TIME_THRESHOLD&&(0<this.yDiff?this.onUp():this.onDown()),this.xDown=null,this.yDown=null,this.timeDown=null}},{key:"run",value:function(){var e=this;v(this.element,M.TOUCHMOVE,function(t){e.handleTouchMove(t)}),v(this.element,M.TOUCHEND,function(){e.handleTouchEnd()})}}]),n}(),gt=function(t){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,i),e=s({},i.DEFAULTS,e);var n=p(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,t,e));return n.goToPreviousSlide=function(){n.autoRotateDisabled=!0,n.showSlide(-1)},n.goToNextSlide=function(){n.autoRotateDisabled=!0,n.showSlide(1)},n.slideIndex=0,n.options=e,n.wcNode=t,n.init(),n}return d(i,q),o(i,[{key:"init",value:function(){this.slides=this.wcNode.querySelectorAll(this.options.slides),this.controlLeft=this.wcNode.querySelector(this.options.controlLeft),this.controlRight=this.wcNode.querySelector(this.options.controlRight),this.slider=this.wcNode.querySelector(this.options.slider),this.autoRotateDisabled=j(this.wcNode,this.options.autoRotateDisabled),this.autoRotateTimeInMiliseconds=j(this.wcNode,this.options.autoRotateTime),this.showAllInline=j(this.wcNode,this.options.showAllInline),this.autoRotateTimeInMiliseconds||(this.autoRotateTimeInMiliseconds=5e3),this.calculateContainerMinHeight(),this.showAllInline||(1<this.slides.length&&this.showControls(),this.hideAllSlides(),this.showSlide(0),this.on(),this.initSwipe())}},{key:"calculateContainerMinHeight",value:function(){for(var t=this.minHeight=0,e=this.slides.length;t<e;t++)this.minHeight=this.slides[t].clientHeight;this.slider.querySelector(this.options.navigator).style.minHeight=this.minHeight+"px"}},{key:"on",value:function(){this.off(),this.controlLeftClicked=v(this.controlLeft,M.CLICK,this.goToPreviousSlide),this.controlRightClicked=v(this.controlRight,M.CLICK,this.goToNextSlide),this.swipedLeft=v(this.wcNode,F,this.goToNextSlide),this.swipedRight=v(this.wcNode,z,this.goToPreviousSlide)}},{key:"off",value:function(){this.controlLeftClicked&&this.controlLeftClicked(),this.controlRightClicked&&this.controlRightClicked(),this.swipedLeft&&this.swipedLeft(),this.swipedRight&&this.swipedRight()}},{key:"initSwipe",value:function(){new bt(this.wcNode).run()}},{key:"hideAllSlides",value:function(){for(var t=0,e=this.slides.length;t<e;t++)this.slides[t].style.display="none"}},{key:"showControls",value:function(){this.controlRight.style.display="block",this.controlLeft.style.display="block"}},{key:"showSlide",value:function(t){this.hideAllSlides(),this.slideIndex+t<0?this.slideIndex=this.slides.length-1:this.slideIndex+t>=this.slides.length?this.slideIndex=0:this.slideIndex=this.slideIndex+t,this.slides[this.slideIndex].classList.remove(this.options.animationLeft),this.slides[this.slideIndex].classList.remove(this.options.animationRight),t<0?this.slides[this.slideIndex].classList.add(this.options.animationLeft):this.slides[this.slideIndex].classList.add(this.options.animationRight),this.slides[this.slideIndex].style.display="block",this.autoRotate()}},{key:"autoRotate",value:function(){var t=this;this.autoRotateDisabled||setTimeout(function(){t.autoRotateDisabled||t.showSlide(1)},this.autoRotateTimeInMiliseconds)}},{key:"destroy",value:function(){this.off(),this.controlLeft&&delete this.controlLeft,this.controlRight&&delete this.controlRight,this.wcNode&&delete this.wcNode,this.options&&delete this.options,this.slides&&delete this.slides,this.slider&&delete this.slider,this.autoRotateDisabled&&delete this.autoRotateDisabled,this.autoRotateTimeInMiliseconds&&delete this.autoRotateTimeInMiliseconds,this.showAllInline&&delete this.showAllInline}}]),i}();gt.DEFAULTS={controlLeft:".js-o-testimonials__control-left",controlRight:".js-o-testimonials__control-right",slides:".js-o-testimonial__item",slider:".js-o-testimonials",navigator:".js-o-testimonials__navigator",animationLeft:"o-testimonials__item_animation_left",animationRight:"o-testimonials__item_animation_right",autoRotateDisabled:"auto-rotate-disabled",autoRotateTime:"auto-rotate-time",showAllInline:"show-all-inline"};var wt,xt,kt=function(t){function e(){return u(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{styles:at,template:yt}))}return d(e,st),o(e,null,[{key:"observedAttributes",get:function(){return["classes","title","subtitle","auto-rotate-disabled","auto-rotate-time","show-all-inline"]}}]),o(e,[{key:"connectedCallback",value:function(){h(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-testimonials"}},{key:"didRenderCallback",value:function(){this.testimonials&&this.testimonials.destroy(),this.testimonials=new gt(this)}},{key:"disconnectedCallback",value:function(){this.testimonials&&(this.testimonials.destroy(),delete this.testimonials)}}]),e}();return kt.tagName="axa-testimonials",wt=kt.tagName,xt=kt,customElements.get(wt)||customElements.define(wt,xt),kt}();
