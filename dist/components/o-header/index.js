!function(){"use strict";function t(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new i(e,c({},r,{detail:n}));t.dispatchEvent(o)}function e(t,e,n,r){function o(){for(var e=0;e<l;++e)t.removeEventListener(c[e],s,i);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}}(this,o)}var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(p[e]&&(e=p[e]),!t||!e)return null;var u=void 0===n?"undefined":a(n);"function"===u&&(i=!!r,r=n);for(var s=n&&"string"===u?function(e){for(var o=e.target;!function(t,e){return function(t,e){return new RegExp("^"+t+"$|^"+t+"\\s|\\s"+t+"\\s|\\s"+t+"$",e)}(e).test(t.className)}(o,n)&&o!==t;)o=o.parentNode;if(o!==t)return r(e,o)}:r,c=e.split(v),l=c.length,f=0;f<l;++f)t.addEventListener(c[f],s,i);return o}function n(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var r=".o-header {\n  position: relative;\n  display: block; }\n\n.o-header__fade .o-sticky__box {\n  width: 100%;\n  height: 100%;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n\n.o-header__fade.is-sticky-sticky > .o-sticky__box {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.o-header__fade.is-sticky-sticky.is-sticky-scroll-down > .o-sticky__box {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%); }\n\n.o-header__fade.is-sticky-sticky.is-sticky-scroll-up > .o-sticky__box {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n",o=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,i=function(){function t(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,u=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,r,i,u);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return t}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=(function(){function t(t){this.value=t}function e(e){function n(o,i){try{var a=e[o](i),u=a.value;u instanceof t?Promise.resolve(u.value).then(function(t){n("next",t)},function(t){n("throw",t)}):r(a.done?"return":"normal",a.value)}catch(t){r("throw",t)}}function r(t,e){switch(t){case"return":o.resolve({value:e,done:!0});break;case"throw":o.reject(e);break;default:o.resolve({value:e,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(t,e){return new Promise(function(r,a){var u={key:t,arg:e,resolve:r,reject:a,next:null};i?i=i.next=u:(o=i=u,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},f=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},d=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},v=/\s+/,p={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(o=n[i],void 0!==t[o])return e[o];return null}()},y={};e(document,"pubsub/onsubscribe",function(e){var n=e.detail;y[n]||(y[n]={count:0});var r=y[n],o=r.queue;Array.isArray(o)&&(o.forEach(function(e){var n=d(e,3),r=n[0],o=n[1];t(n[2],r,o)}),delete r.queue)}),Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement);var b={},m=function(r){function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1];u(this,i);var n=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(t,e),n}return l(i,n),s(i,[{key:"_initialise",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=t,this._template=e}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}},{key:"render",value:function(){var t=this;if(!this._hasRendered){var e=this._template;if(e)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=e(function(t){if(!t.hasAttributes)return null;for(var e={},n=t.attributes,r=n.length,i=0;i<r;++i){var a=n[i];e[a.name]=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;if(e?n=t.getAttribute(e):e=t.name,n&&e!==n){if(o.test(n))try{n=JSON.parse(n)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",n)}}else n=!0;return n}(a)}return e}(this),n);if(Array.isArray(r))r.forEach(function(e){t.appendChild(e)});else if(r){if("string"==typeof r){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(r)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;y[e]||(y[e]={count:0,queue:[]});var o=y[e].queue;Array.isArray(o)?o.push([e,n,r]):t(r,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(t){this.__selectedContext=t.toLowerCase()}},{key:"_makeContextReady",value:function(){var n=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(n,r){var o=e(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n,r);y[n]||(y[n]={count:0});var i=y[n];return i.count++,i.onsubscribe||(i.onsubscribe=function(t){function e(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return d=r,m&&(v&&clearTimeout(v),v=setTimeout(function(){p&&clearTimeout(p),n()},o)),x&&!p&&(p=setTimeout(function(){v&&clearTimeout(v),n()},f)),u&&!b&&(b=!0,y=t.apply(void 0,h(d))),y}function n(){c&&(y=t.apply(void 0,h(d))),v=null,p=null,b=!1}function r(){v&&(clearTimeout(v),v=null),p&&(clearTimeout(p),p=null),d=void 0,b=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,u=void 0!==a&&a,s=i.trailing,c=void 0===s||s,l=i.maxWait,f=void 0!==l&&l,d=void 0,v=void 0,p=void 0,y=void 0,b=!1,m=o!==f,x=!1!==f;return e.flush=function(){return(v||p)&&(y=t.apply(void 0,h(d))),r(),y},e.cancel=r,e}(function(e){return function(){t(document,"pubsub/onsubscribe",e),t(document,"pubsub/onsubscribe/"+e,e),y[e]&&delete y[e].unsubscribe}}(n),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete y[n]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var t=this.__selectedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),i}(),x=(function(t){function e(){return u(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}l(e,m),s(e,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:t});this._appendStyles(e),this.render()}}])}(),function(t){function e(){return u(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,m),s(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.uuidv4();if(t&&!b[t]){var n=document.createElement("style"),r=document.createTextNode(t);n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(n),b[t]=!0}}}]),e}()),_=function(t){function e(){u(this,e);var t=f(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r));return t.enableContext(),t}return l(e,x),s(e,[{key:"connectedCallback",value:function(){(function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-header"}}]),e}();!function(t){var e=0,n=function(){if(0===e)try{t.apply(void 0,arguments),e+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(t){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-header",_)})}();
