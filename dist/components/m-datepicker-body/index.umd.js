!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function v(){}var y,_=(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=v,n.PropTypes=n,n}()}(y={exports:{}},y.exports),y.exports),b={},g=function(e){return e in b||(b[e]=0),++b[e]},m=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function k(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new m(t,s({},o,{detail:n}));return e.dispatchEvent(r)}var C=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function O(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}var x=/\s+/,w={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function T(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,c=void 0===l||l;if(w[t]&&(t=w[t]),!e||!t)return null;var u=void 0===n?"undefined":r(n),d=n&&"string"===u;if("function"===u){if(o){var p=o;s=p.capture,c=p.passive}o=n}for(var h=C?{capture:s,passive:c}:s,f=d?function(t){var r=t.target;for(;!O(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,v=t.split(x),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],f,h);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,h=!1,v=t!==l,y=!1!==l;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,v&&(u&&clearTimeout(u),u=setTimeout(b,t)),y&&!d&&(d=setTimeout(g,l)),r&&!h&&(h=!0,p=e.apply(void 0,f(c))),p}return _.flush=function(){(u||d)&&(p=e.apply(void 0,f(c)));return k(),p},_.cancel=k,_;function b(){d&&clearTimeout(d),m()}function g(){u&&clearTimeout(u),m()}function m(){a&&(p=e.apply(void 0,f(c))),u=null,d=null,h=!1}function k(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var N=window.__subscriptions;function P(e,t){var n=T(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);N[e]||(N[e]={count:0});var o,r=N[e];return r.count++,r.onsubscribe||(r.onsubscribe=E((o=e,function(){k(document,"pubsub/onsubscribe",o),k(document,"pubsub/onsubscribe/"+o,o),N[o]&&delete N[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete N[e]}}T(document,"pubsub/onsubscribe",function(e){var t=e.detail;N[t]||(N[t]={count:0});var n=N[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],r=t[2];k(r,n,o)}),delete n.queue)});var j,A=function(e,t){return e===t},D=((j=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?j.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var o;i(this,t);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),l=2;l<a;l++)s[l-2]=arguments[l];var c=d(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return c(t,e),t}(Error)),S=/[A-Z]/g;function I(e){return e.replace(S,M)}function M(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var R=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function L(e,t){var n=e;if(e&&t!==e){if(R.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var U=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,V=/[-_]+/g;function F(e){return e.replace(U,Y)}function Y(e,t){return 0==+e||V.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function K(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=L(n,t)}var q=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function H(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=T(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return q&&(l.style.cursor="pointer"),c}var z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),W="axa-change",B="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(z.ENTER,t),n._onInteractive()):r&&n._notify(z.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===z.ESCAPE||e.key===z.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return a(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=s({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=T(this._container,z.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=T(this._container,z.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=H(this._container,z.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=T(this._container.ownerDocument,z.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(B)?K(e,B):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(z.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var $=["title","checked","disabled"],Z=[];var G=1,J=3,X=8;function Q(e,t){var n=e.nodeType,o=e.nodeName;t.skipChildren&&t.skipChildren()||(n===G&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,i=null,a=null,s=null,l=o.length-1;l>=0;--l)if(s=o[l],a=s.name,r=s.namespaceURI,i=s.value,r){var c=s.localName;t.getAttributeNS(r,c||a)!==i&&t.setAttributeNS(r,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;u>=0;--u)!1!==(s=n[u]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==J&&n!==X||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ee(e,t,"checked"),ee(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ee(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t))}function ee(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var te=3;function ne(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Q(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(oe(o,n))(r=ne(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(oe(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=ne(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ne(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function oe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===te&&e.nodeValue===t.nodeValue)}var re=function(e){function t(e){var n;i(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var l=d(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return c(t,e),t}(Error),ie=!!document.createDocumentFragment().children;function ae(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ae.prototype,HTMLElement.prototype),Object.setPrototypeOf(ae,HTMLElement);var se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=P("context/available",o._makeContextReady)},d(o,t)}return c(n,e),a(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;N[e]||(N[e]={count:0,queue:[]});var o=N[e].queue;Array.isArray(o)?o.push([e,t,n]):k(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return i(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){i(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[o];if(-1===$.indexOf(o)&&a)throw new D(o,t);var s="_"+o,l=r[o],c=t[s];return i||t.shouldUpdateCallback(l,c)?(t[s]=l,t._props[o]=l,a&&p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,l,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=E(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=F(e),r=o in t;if(-1===$.indexOf(o)&&r)throw new D(o,t);t._hasKeys[o]=r,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,r&&p(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this.updatedDebounced())}})}),t}return c(n,e),a(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(I)}}]),a(n,[{key:"connectedCallback",value:function(){var e=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&(t.forEach(function(t){var o=F(t);if(e.hasAttribute(t)){var r=K(e,t),i=e._hasKeys[o];e._props[o]=r,i&&p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,r,e)}}),this.checkPropTypes())}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=F(e);this.hasAttribute(e)?this[o]=L(n,e):this[o]=null,this.checkPropTypes(),"value"===e&&null!==n&&k(this,W,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(I(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&_.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=u(e,["template"]);i(this,n);var r=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return c(n,e),a(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ie||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this._props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new re(this);c.appendChild(s)}if(t)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");ne(t,e)}(this,u),function(){for(var e=void 0;e=Z.pop();)delete e.isSameNode;Z=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=u(e,["styles"]);i(this,n);var a=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return a._styles=o,a}return c(n,e),a(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){i(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=g(n.nodeName),n}return c(t,ae),a(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),le={},ce=function(e){function t(){var e,n,o;i(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=o=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},d(o,n)}return c(t,se),a(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:se.uuidv4();if(e&&!le[t]){var n=document.createElement("style"),o=document.createTextNode(e);le[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ue=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;var de=function(e){function t(t,n,o){return null==t[n]?null:e(t,n,o)}return t.isRequired=e,t}(function(e,t,n){if(!ue.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")}),pe=".m-datepicker-body {\n  padding-top: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.m-datepicker-body__cell {\n  width: 35.28571px;\n  height: 35.28571px;\n  padding-left: 0;\n  padding-right: 0;\n  background-color: transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  border: none; }\n\n.m-datepicker-body__cell:focus {\n  outline: none; }\n\n.m-datepicker-body__not-current-month {\n  color: #ccc; }\n\n.m-datepicker-body__current-month {\n  color: #333; }\n\n.m-datepicker-body__current-month:hover {\n  -webkit-box-shadow: 0 0 0 3px #00008f inset;\n          box-shadow: 0 0 0 3px #00008f inset;\n  background-color: #fff;\n  color: #333;\n  opacity: 0.5; }\n\n.m-datepicker-body__current-month:hover.m-datepicker-body__selected-day,\n.m-datepicker-body__current-month:hover.m-datepicker-body__today {\n  background-color: #00008f;\n  color: #fff;\n  opacity: 1; }\n\n.m-datepicker-body__selected-day,\n.m-datepicker-body__today {\n  background-color: #00008f;\n  color: #fff; }\n",he=/\n[\s]+$/,fe=/^\n[\s]+/,ve=/[\s]+$/,ye=/^[\s]+/,_e=/[\n\s]+/g,be=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ge=["code","pre","textarea"],me=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===be.indexOf(i)&&-1===ge.indexOf(i)?""===(o=u.nodeValue.replace(fe,"").replace(ve,"").replace(he,"").replace(_e," "))?t.removeChild(u):u.nodeValue=o:-1===ge.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(fe,r).replace(ye," ").replace(ve,"").replace(he,"").replace(_e," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===be.indexOf(i)&&-1===ge.indexOf(i)?""===(o=u.nodeValue.replace(fe,"").replace(he,"").replace(_e," "))?t.removeChild(u):u.nodeValue=o:-1===ge.indexOf(i)&&(o=u.nodeValue.replace(ye," ").replace(fe,"").replace(he,"").replace(_e," "),u.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}},ke=function(e,t,n){var o,r;return(o=document.createElement("div")).setAttribute("class","m-datepicker-body js-datepicker-body"),me(o,["\n    ",(r=n.datepickerBody.store,r?r.getCells():[]).map(function(e,t){var n;return(n=document.createElement("button")).setAttribute("data-index",""+String(t)),n.setAttribute("class",""+String(e.getClasses())),me(n,[e.getText()]),n}),"\n  "]),o},Ce=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i(this,e),this.text=t,this.index=n,this.isToday=o}return a(e,[{key:"getClasses",value:function(){return e.classes}},{key:"getIndex",value:function(){return this.index}},{key:"getText",value:function(){return this.text}},{key:"getIsToday",value:function(){return this.isToday}}]),e}();Ce.classes="m-datepicker-body__cell js-datepicker__calender-body__cell";var Oe=function(e){function t(){return i(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,Ce),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Oe.classes="m-datepicker-body__not-current-month";var xe=function(e){function t(){return i(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,Ce),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();xe.classes="m-datepicker-body__not-current-month";var we=function(e){function t(){return i(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,Ce),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();we.classes="m-datepicker-body__current-month";var Te=function(e){function t(){return i(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,we),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Te.classes="m-datepicker-body__today";var Ee=function(e){function t(){return i(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,we),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Ee.classes="m-datepicker-body__selected-day";var Ne,Pe,je=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).getFullYear(),o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(new Date).getMonth(),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;i(this,e),this.cells=[],this.today=new Date,this.init(t,n,o,r)}return a(e,[{key:"init",value:function(e,t,n,o){var r=new Date(t,n,1),i=new Date(t,n+1,0).getDate(),a=new Date(t,n,0),s=new Date(t,n+1,1),l=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-uk",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date,o=n.getDay(),r=n.getDate(),i=t.toLocaleString(e,{weekday:"long"}),a=null,s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();1!==o;)r<s?r+=1:(r=1,n.setMonth(n.getMonth()+1)),n.setDate(r),o=n.getDay();return[].concat(f(Array(7).keys())).forEach(function(t){n.setDate(r+t),i===n.toLocaleString(e,{weekday:"long"})&&(a=t)}),a}(e,r),c=this.today.getFullYear(),u=this.today.getMonth(),d=o||this.today.getDate();this.cells=[].concat(f(Array(42).keys())).map(function(e){if(e<l){var r=a.getDate()-(l-1-e);return new xe(r,e)}var p=new Date(t,n,e+1-l),h=p.getTime(),f=new Date(c,u,d).getTime();return o&&p.getDate()===d&&e-l<i?new Te(e-l+1,e,!0):h===f&&e-l<d?new Te(e-l+1,e,!0):e-l<i?new we(e-l+1,e):new Oe(s.getDate()+(e-i-l),e)})}},{key:"setCell",value:function(e,t){this.cells[e]=t}},{key:"getCell",value:function(e){return this.cells[e]}},{key:"getCells",value:function(){return this.cells}}]),e}(),Ae=function(){function e(t){var n=this;i(this,e),this.handleClick=function(e){e.preventDefault(),n.selected=null;var t=+e.target.dataset.index;if(t||0===t){var o=n._store.getCell(t);o instanceof Oe?(n.updateDate(n.date.getMonth()+1),n.cleanupValueIndex()):o instanceof xe?(n.updateDate(n.date.getMonth()-1),n.cleanupValueIndex()):(n.wcNode.setAttribute("value",o.getText()),n.wcNode.setAttribute("index",t))}},this.wcNode=t,this.selected=null,this.date=new Date}return a(e,[{key:"init",value:function(e,t,n,o,r,i){this._store=new je(t,n,o,r),this.selected=null,this.prepareCells(e),this.listenToCells(),this.index=e,this.allowedYears=i,this.locale=t,(o||0===o)&&this.date.setMonth(o),n&&this.date.setFullYear(n)}},{key:"prepareCells",value:function(e){if(this.selected&&!e){var t=new Ee(this.selected.getText(),this.selected.getIndex(),this.selected.getIsToday());this._store.setCell(this.selected.getIndex(),t)}if(e||0===e){var n=this._store.getCell(e);n instanceof we&&this.handleCurrentMonth(e,n)}}},{key:"listenToCells",value:function(){this.offClicks(),this.unClickEnd=T(this.wcNode,z.CLICK,"js-datepicker-body",this.handleClick,{capture:!0,passive:!1})}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"cleanupValueIndex",value:function(){this.wcNode.removeAttribute("index"),this.wcNode.removeAttribute("value")}},{key:"handleCurrentMonth",value:function(e,t){if(null!==this.selected){var n=this.selected.getIndex(),o=this.selected.getIsToday(),r=this.selected.getText(),i=new we(r,n,o);this._store.setCell(n,i)}var a=new Ee(t.getText(),t.getIndex(),t.getIsToday());this._store.setCell(e,a),this.selected=a,a.isToday||(this._store.cells=this._store.cells.map(function(e){return e instanceof Te?new we(e.getText(),e.getIndex(),!0):e}))}},{key:"updateDate",value:function(e){this.date=new Date(this.date.getFullYear(),this.date.getMonth()),this.date.setMonth(e);var t=this.date.getFullYear();this.allowedYears&&!~this.allowedYears.indexOf(t)||(this.wcNode.setAttribute("year",t),this.wcNode.setAttribute("month",this.date.getMonth()))}},{key:"store",get:function(){return this._store}}]),e}(),De=function(e){function t(){i(this,t);var e=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:pe,template:ke}));return e.datepickerBody=new Ae(e),e}return c(t,ce),a(t,[{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-datepicker-body"}},{key:"disconnectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}},{key:"willRenderCallback",value:function(){var e=K(this,"month");e=e||0===e?e:void 0;var t=K(this,"day");t=t||0===t?t:void 0,this.datepickerBody.init(K(this,"index"),K(this,"locale"),K(this,"year")||void 0,e,t,K(this,"allowed-years"))}},{key:"attributeChangedCallback",value:function(e,n,o){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this).call(this,e,n,o),"month"!==e&&"year"!==e||!this.shouldUpdateCallback(o,n)||null===o||null===n||k(this,W,null,{bubbles:!0,cancelable:!0,composed:!0})}}]),t}();return De.tagName="axa-datepicker-body",De.propTypes={classes:_.string,locale:de,value:_.string,index:_.number,year:_.number,month:_.number,day:_.number,allowedYears:_.arrayOf(_.number)},Ne=De.tagName,Pe=De,customElements.get(Ne)||customElements.define(Ne,Pe),De});
