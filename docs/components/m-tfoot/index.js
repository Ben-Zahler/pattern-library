var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function y(){}var _,b,g,m,O=e(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=y,n.PropTypes=n,n}()}),C=e(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=void 0===o?"undefined":i(o);if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}),k=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},x={},A=(_=Object,b=_.getPrototypeOf||function(e){return e.__proto__},g=_.setPrototypeOf||function(e,t){return e.__proto__=t,e},m="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),g(new r,n.prototype)},function(e){var t=b(e);return g(e,g(function(){return m(t,arguments,b(this).constructor)},t))}),w=function(e){return A(function(t){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),s(n,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in x||(x[e]=0),++x[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}())},T={},N=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function j(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new N(t,u({},r,{detail:n}));return e.dispatchEvent(o)}var E=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function P(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}var S=/\s+/,R={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function D(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,s=void 0!==a&&a,u=o.passive,c=void 0===u||u;if(R[t]&&(t=R[t]),!e||!t)return null;var l=void 0===n?"undefined":i(n),p=n&&"string"===l;if("function"===l){if(r){var f=r;s=f.capture,c=f.passive}r=n}for(var d=E?{capture:s,passive:c}:s,h=p?function(t){var o=t.target;for(;!P(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(S),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],h,d);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,d);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,p=void 0,f=void 0,d=!1,h=t!==u,y=!1!==u;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,h&&(l&&clearTimeout(l),l=setTimeout(b,t)),y&&!p&&(p=setTimeout(g,u)),o&&!d&&(d=!0,f=e.apply(void 0,v(c))),f}return _.flush=function(){(l||p)&&(f=e.apply(void 0,v(c)));return O(),f},_.cancel=O,_;function b(){p&&clearTimeout(p),m()}function g(){l&&clearTimeout(l),m()}function m(){a&&(f=e.apply(void 0,v(c))),l=null,p=null,d=!1}function O(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),c=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var I=window.__subscriptions;function U(e,t){var n=D(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);I[e]||(I[e]={count:0});var r,o=I[e];return o.count++,o.onsubscribe||(o.onsubscribe=L((r=e,function(){j(document,"pubsub/onsubscribe",r),j(document,"pubsub/onsubscribe/"+r,r),I[r]&&delete I[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete I[e]}}D(document,"pubsub/onsubscribe",function(e){var t=e.detail;I[t]||(I[t]={count:0});var n=I[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=h(e,3),n=t[0],r=t[1],o=t[2];j(o,n,r)}),delete n.queue)});var M,V=function(e,t){return e===t},q=((M=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?M.apply(void 0,arguments):void 0}}}})()(!0),[]);var F=1,K=3,H=8;function W(e,t){var n=e.nodeType,r=e.nodeName;n===F&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,u=null,c=null,l=null,p=null,f=s.length-1;f>=0;--f)if(p=s[f],l=p.name,u=p.namespaceURI,c=p.value,!i(l))if(u){var d=p.localName;t.getAttributeNS(u,d||l)!==c&&t.setAttributeNS(u,l,c)}else t.hasAttribute(l)?t.getAttribute(l)!==c&&("null"===c||"undefined"===c?t.removeAttribute(l):t.setAttribute(l,c)):t.setAttribute(l,c);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(l=p.name,u=p.namespaceURI,i(l))continue;u?(l=p.localName||l,e.hasAttributeNS(u,l)||t.removeAttributeNS(u,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==K&&n!==H||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;$(e,t,"checked"),$(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?$(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function $(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var B=3;function G(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(W(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(z(r,n))(o=G(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(z(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=G(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=G(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function z(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===B&&e.nodeValue===t.nodeValue)}var J,Y,Z,X,Q=(J=Object,Y=J.getPrototypeOf||function(e){return e.__proto__},Z=J.setPrototypeOf||function(e,t){return e.__proto__=t,e},X="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),Z(new r,n.prototype)},function(e){var t=Y(e);return Z(e,Z(function(){return X(t,arguments,Y(this).constructor)},t))})(function(e){function t(e){var n;a(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];var u=f(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="TemplateNoStringReturnException",u}return l(t,e),t}(Error)),ee=!!document.createDocumentFragment().children,te=0;function ne(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===te&&(te++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(ne,t),te--),t}(n)),e}var re=O;Object.keys(re).reduce(ne,re);var oe=re.oneOf(["left","center","right"]),ie=re.oneOf(["left","right"]),ae=(re.oneOf(["top","bottom"]),re.oneOf(["up","down"])),se=re.oneOf(["ok","pending","error","unknown"]),ue=re.oneOf(["row","col","rowgroup","colgroup","auto"]),ce=re.oneOfType([re.string,re.number]),le={text:ce,value:re.any,rowspan:ce,colspan:ce,scope:ue,align:oe,dense:re.bool},pe={float:ie,strong:re.bool,bold:re.bool},fe=re.oneOfType([re.string,re.number]),de=re.oneOfType([fe,re.shape(u({},le,{sort:ae,sortActive:re.bool}))]),he=re.oneOfType([fe,re.shape(u({},le,pe,{action:re.bool,state:se}))]),ve=re.oneOfType([fe,re.shape(u({},le,pe))]),ye=re.oneOfType([re.arrayOf(de),re.shape({cells:re.arrayOf(de)})]),_e=re.oneOfType([re.arrayOf(he),re.shape({cells:re.arrayOf(he),action:re.bool})]),be=re.oneOfType([re.arrayOf(ve),re.shape({cells:re.arrayOf(ve)})]),ge=(re.oneOfType([ye,re.arrayOf(ye)]),re.oneOfType([_e,re.arrayOf(_e)]),re.oneOfType([be,re.arrayOf(be)])),me=/[A-Z]/g;function Oe(e){return e.replace(me,Ce)}function Ce(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var ke=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function xe(e,t,n){var r=e;if(n)return function(e,t,n){var r=e;switch(n){case re.string:case re.string.isRequired:return e;case re.bool:case re.bool.isRequired:if(!e||t===e)return!0;case re.number:case re.number.isRequired:case re.object:case re.object.isRequired:case re.array:case re.array.isRequired:default:if(ke.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return r}(e,t,n);if(e&&t!==e){if(ke.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else r=!0;return r}var Ae=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,we=/[-_]+/g;function Te(e){return e.replace(Ae,Ne)}function Ne(e,t){return 0==+e||we.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function je(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[Te(t)]);if(r&&!e.hasAttribute(t))return i!==re.bool&&i!==re.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=xe(a,t,i)}var Ee=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Pe(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.capture,i=void 0===o||o,a=r.passive,s=void 0===a||a,u=e.ownerDocument.documentElement,c=D(u,t,function(t){var r=t.target;if(!e.contains(r)&&e!==r)return n(t)},{capture:i,passive:s});return Ee&&(u.style.cursor="pointer"),c}var Se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Re="axa-change",De="data-prevent-default";((function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var r=!n._lastToggleNode,o=t!==n._lastToggleNode,i=!r&&!o;r?(n._notify(Se.ENTER,t),n._onInteractive()):o&&n._notify(Se.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===Se.ESCAPE||e.key===Se.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,r)}return s(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=u({},e.DEFAULTS,n));var r=this._options.containerClass;this._container=r?this._wcNode.querySelector(r):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=D(this._container,Se.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,r=t.outerClose,o=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=D(e,Se.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=Pe(e,Se.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=D(e.ownerDocument,Se.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(De)?je(e,De):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Se.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Le=k(function(e){var t,n;return n=t=function(t){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),n}(),t.version="2.0.1-beta.235",n},function(e){return function(t){function n(){var e,t,r;a(this,n);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=U("context/available",r._makeContextReady)},f(r,t)}return l(n,e),s(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;I[e]||(I[e]={count:0,queue:[]});var r=I[e].queue;Array.isArray(r)?r.push([e,t,n]):j(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),s(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(){var e,t,r;a(this,n);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,i="_"+t,a=n[t],s=r[i];return o||r.shouldUpdateCallback(a,s)?(r.props[t]=a,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},f(r,t)}return l(n,e),s(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=L(function(){return t.updated&&t.updated()},50);var r=this.constructor.observedAttributes;Array.isArray(r)&&r.forEach(function(e){Te(e)})}},{key:"connectedCallback",value:function(){var e=this;if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var n=Te(t);if(e.hasAttribute(t)){var o=je(e,t,r[n]);e.props[n]=o}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,r){if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,e,t,r),this.shouldUpdateCallback(r,t)){var o=Te(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[o]=xe(r,e,i[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==r&&j(this,Re,r,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return n.indexOf(Oe(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&re.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Oe)}}]),n}()},function(e){return function(t){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),s(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=p(e,["template"]);c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ee||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=r(this.props,this.childrenFragment,this),u=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){u.appendChild(e)});else if(s){if("string"==typeof s)throw new Q(this);u.appendChild(s)}if(t)c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,u);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(u),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");G(t,e)}(this,l),function(){for(var e=void 0;e=q.pop();)delete e.isSameNode;q=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),s(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=p(e,["styles"]);c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._styles=r}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()});k(Le,w);var Ie,Ue,Me,Ve=/\n[\s]+$/,qe=/^\n[\s]+/,Fe=/[\s]+$/,Ke=/^[\s]+/,He=/[\n\s]+/g,We=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],$e=["code","pre","textarea"],Be=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===We.indexOf(i)&&-1===$e.indexOf(i)?""===(r=l.nodeValue.replace(qe,"").replace(Fe,"").replace(Ve,"").replace(He," "))?t.removeChild(l):l.nodeValue=r:-1===$e.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(qe,o).replace(Ke," ").replace(Fe,"").replace(Ve,"").replace(He," "),l.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===We.indexOf(i)&&-1===$e.indexOf(i)?""===(r=l.nodeValue.replace(qe,"").replace(Ve,"").replace(He," "))?t.removeChild(l):l.nodeValue=r:-1===$e.indexOf(i)&&(r=l.nodeValue.replace(Ke," ").replace(qe,"").replace(Ve,"").replace(He," "),l.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}},Ge=function(e){return"object"===(void 0===e?"undefined":i(e))&&!Array.isArray(e)&&null!==e},ze=function(e){return Ge(e)&&Array.isArray(e.cells)},Je=function(e){return Ge(t=e)&&t.text?e:{text:e};var t},Ye=function(e){var t=e,n={};return ze(e)&&(t=e.cells,n=p(e,["cells"])),t=Array.isArray(t)?t.map(Je):Je(t),u({},n,{cells:t})},Ze=function(e){var t,n,r=e,o={};return Ge(t=e)&&Array.isArray(t.rows)&&(r=e.rows,o=p(e,["rows"])),n=r,!Array.isArray(n)||Array.isArray(n[0])||ze(n[0])?Array.isArray(r)&&(r=r.map(Ye)):r=[r].map(Ye),u({},o,{rows:r})},Xe=function(e,t){var n=e.items,r=void 0;n&&(r=Ze(n).rows);return Array.isArray(r)&&r.length?r.map(function(e){var t,n=e.cells;p(e,["cells"]);return t=document.createElement("tr",{is:"axa-tr"}),Be(t,["\n        ",Array.isArray(n)&&n.map(function(e){var t,n=e.text,r=p(e,["text"]);return function e(t,n,r){if("object"!==(void 0===n?"undefined":i(n)))n&&("className"===n&&(n="class"),"htmlFor"===n&&(n="for"),"on"===n.slice(0,2)?t[n]=r:(!0===r&&(r=n),t.setAttribute(n,r)));else for(var o in n)n.hasOwnProperty(o)&&e(t,o,n[o])}(t=document.createElement("td",{is:"axa-td"}),r,r),Be(t,[n]),t})||"","\n      "]),t}):t},Qe=k(Le,function(e){return function(t){function n(){var e,t,r;a(this,n);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._appendStyles=function(){n.appendGlobalStyles(r._styles,r.nodeName)},f(r,t)}return l(n,e),s(n,null,[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.uuidv4();if(t&&!T[n]){var r=document.createElement("style"),o=document.createTextNode(t);T[n]=!0,r.appendChild(o),r.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(r)}}}]),n}()},w)(HTMLTableSectionElement),et=function(e){function t(){return a(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,Qe),s(t,[{key:"init",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-tfoot {\n  background: #f5f5f5; }\n",template:Xe})}},{key:"willRenderCallback",value:function(){var e=this.props.classes;this.className=C("m-tfoot",e)}}]),t}();return et.tagName="axa-tfoot",et.builtInTagName="tfoot",et.propTypes={classes:O.string,items:ge},Ie=et.tagName,Ue=et,Me={extends:et.builtInTagName},customElements.get(Ie)||customElements.define(Ie,Ue,Me),et}();
