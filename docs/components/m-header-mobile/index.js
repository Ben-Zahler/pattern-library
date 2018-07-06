var StyleGuideWebComponent=function(){"use strict";var e={},t=function(t){return t in e||(e[t]=0),++e[t]},n=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},r,{detail:o}));return e.dispatchEvent(i)}var v=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),b=/^\s+|\s{2,}|\s+$/g;function y(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function m(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=g.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(_,[])),i&&(e.className+=" "+i.join(" "))}}function _(e,t){var n=t.className;return t.hasClass||e.push(n),e}function g(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=y(e).test(t);r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}function k(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=g.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(x,[])),i){var a=e.className;e.className=i.reduce(C,a)}}}function x(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function C(e,t){var n=y(t,"g");return e.replace(n," ").replace(b," ")}var O=/\s+/,w={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function N(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,c=i.passive,l=void 0===c||c;if(w[t]&&(t=w[t]),!e||!t)return null;var u=void 0===n?"undefined":o(n),d=n&&"string"===u;if("function"===u){if(r){var p=r;s=p.capture,l=p.passive}r=n}for(var f=v?{capture:s,passive:l}:s,h=d?function(t){var o=t.target;for(;!g(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,b=t.split(O),y=b.length,m=0;m<y;++m)e.addEventListener(b[m],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(b[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,p=void 0,h=!1,v=t!==c,b=!1!==c;function y(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return l=o,v&&(u&&clearTimeout(u),u=setTimeout(m,t)),b&&!d&&(d=setTimeout(_,c)),r&&!h&&(h=!0,p=e.apply(void 0,f(l))),p}return y.flush=function(){(u||d)&&(p=e.apply(void 0,f(l)));return k(),p},y.cancel=k,y;function m(){d&&clearTimeout(d),g()}function _(){u&&clearTimeout(u),g()}function g(){a&&(p=e.apply(void 0,f(l))),u=null,d=null,h=!1}function k(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,h=!1}}var E={};function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;E[e]||(E[e]={count:0,queue:[]});var o=E[e].queue;Array.isArray(o)?o.push([e,t,n]):h(n,e,t)}function P(e,t){var n=N(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);E[e]||(E[e]={count:0});var o,r=E[e];return r.count++,r.onsubscribe||(r.onsubscribe=A((o=e,function(){h(document,"pubsub/onsubscribe",o),h(document,"pubsub/onsubscribe/"+o,o),E[o]&&delete E[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete E[e]}}N(document,"pubsub/onsubscribe",function(e){var t=e.detail;E[t]||(E[t]={count:0});var n=E[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=p(e,3),n=t[0],o=t[1],r=t[2];h(r,n,o)}),delete n.queue)});var T,S=function(e,t){return e===t},R=((T=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?T.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var o;r(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];var l=u(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="PropertyExistsException",l}return c(t,e),t}(Error)),M=/[A-Z]/g;function L(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var D=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function B(e,t){var n=e;if(e&&t!==e){if(D.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var U=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,V=/[-_]+/g;function F(e){return e.replace(U,I)}function I(e,t){return 0==+e||V.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var H=["title","checked","disabled"],z=[];var q=1,W=3,$=8;function X(e,t){var n=e.nodeType,o=e.nodeName;n===q&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,i=null,a=null,s=null,c=o.length-1;c>=0;--c)if(s=o[c],a=s.name,r=s.namespaceURI,i=s.value,r){var l=s.localName;t.getAttributeNS(r,l||a)!==i&&t.setAttributeNS(r,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;u>=0;--u)!1!==(s=n[u]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==W&&n!==$||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;K(e,t,"checked"),K(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?K(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function K(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var G=3;function Z(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(X(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(J(o,n))(r=Z(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(J(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=Z(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=Z(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function J(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===G&&e.nodeValue===t.nodeValue)}var Q=function(e){function t(e){var n;r(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];var c=u(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return c(t,e),t}(Error),Y=!!document.createDocumentFragment().children;function ee(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ee.prototype,HTMLElement.prototype),Object.setPrototypeOf(ee,HTMLElement);var te=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;r(this,n);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=o=u(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=P("context/available",o._makeContextReady)},u(o,t)}return c(n,e),i(n,[{key:"connectedCallback",value:function(){s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,j("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return r(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),i(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){r(this,n);var t=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[o];if(-1===H.indexOf(o)&&a)throw new R(o,t);var s="_"+o,c=r[o],l=t[s];return i||t.shouldUpdateCallback(c,l)?(t[s]=c,t._props[o]=c,a&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,c,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=A(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=F(e),r=o in t;if(-1===H.indexOf(o)&&r)throw new R(o,t);t._hasKeys[o]=r,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,r&&d(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return c(n,e),i(n,[{key:"connectedCallback",value:function(){var e=this;if(s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var o=F(t);if(e.hasAttribute(t)){var r=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=B(n,t)}(e,t),i=e._hasKeys[o];e._props[o]=r,i&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,r,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[F(e)]=B(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(M,L))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=l(e,["template"]);r(this,n);var i=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return c(n,e),i(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});Y||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var c=r(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(c))c.forEach(function(e){l.appendChild(e)});else if(c){if("string"==typeof c)throw new Q(this);l.appendChild(c)}if(t)s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":o(t)))throw new Error("componentMorph: newTree should be an object");Z(t,e)}(this,u),function(){for(var e=void 0;e=z.pop();)delete e.isSameNode;z=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,i=l(e,["styles"]);r(this,n);var a=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return a._styles=o,a}return c(n,e),i(n,[{key:"connectedCallback",value:function(){s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function n(e){r(this,n);var o=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return o._id=t(o.nodeName),o}return c(n,ee),i(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),ne={},oe=function(e){function t(){var e,n,o;r(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},u(o,n)}return c(t,te),i(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:te.uuidv4();if(e&&!ne[t]){var n=document.createElement("style"),o=document.createTextNode(e);ne[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var re=".m-header-mobile {\n  display: block; }\n\n.m-header-mobile__backdrop {\n  position: fixed;\n  top: -200%;\n  left: -200%;\n  z-index: 1040;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  cursor: pointer;\n  overscroll-behavior: contain;\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease; }\n  .is-mobile-menu-open > .m-header-mobile__backdrop {\n    top: 0;\n    left: 0;\n    opacity: 1; }\n  .m-header-mobile__backdrop.is-mobile-backdrop-fading {\n    top: 0;\n    left: 0; }\n\n.m-header-mobile__canvas {\n  position: relative;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  background: #fff; }\n  @media (min-width: 576px) {\n    .m-header-mobile__canvas {\n      width: 370px; } }\n\n.m-header-mobile__canvas--off-canvas {\n  position: fixed;\n  top: 75px;\n  right: 0;\n  bottom: 0;\n  z-index: 1050;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  overscroll-behavior: contain;\n  -webkit-overflow-scrolling: touch;\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.05);\n          box-shadow: 0 0 1px rgba(255, 255, 255, 0.05);\n  -webkit-transform: translateX(110%);\n          transform: translateX(110%);\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n  .is-mobile-menu-open > .m-header-mobile__canvas--off-canvas {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  @media (min-width: 992px) {\n    .m-header-mobile__canvas--off-canvas {\n      display: none; } }\n\n.m-header-mobile__box {\n  position: relative;\n  padding-top: 20px;\n  background: #fff; }\n  .m-header-mobile__box > .m-button {\n    display: block;\n    margin: 20px 40px 0 60px;\n    text-align: center; }\n    .m-header-mobile__box > .m-button:first-child {\n      margin-top: 0; }\n    .m-header-mobile__box > .m-button + * {\n      margin-top: 20px; }\n  .m-header-mobile__box .m-header-top-content-bar__box {\n    padding-left: 60px !important;\n    padding-right: 40px !important; }\n\nbody.is-body-frozen {\n  overflow: hidden; }\n",ie=/\n[\s]+$/,ae=/^\n[\s]+/,se=/[\s]+$/,ce=/^[\s]+/,le=/[\n\s]+/g,ue=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],de=["code","pre","textarea"],pe=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===ue.indexOf(i)&&-1===de.indexOf(i)?""===(o=u.nodeValue.replace(ae,"").replace(se,"").replace(ie,"").replace(le," "))?t.removeChild(u):u.nodeValue=o:-1===de.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(ae,r).replace(ce," ").replace(se,"").replace(ie,"").replace(le," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===ue.indexOf(i)&&-1===de.indexOf(i)?""===(o=u.nodeValue.replace(ae,"").replace(ie,"").replace(le," "))?t.removeChild(u):u.nodeValue=o:-1===de.indexOf(i)&&(o=u.nodeValue.replace(ce," ").replace(ae,"").replace(ie,"").replace(le," "),u.nodeValue=o));var d=l.nodeName;d&&(i=d.toLowerCase()),t.appendChild(l)}}}};var fe,he=(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":o(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(n.apply(null,i));else if("object"===a)for(var s in i)t.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}(fe={exports:{}},fe.exports),fe.exports),ve=function(){var e,t,n,o=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).offcanvas,r=arguments[1];return[(e=document.createElement("div"),e.setAttribute("class","m-header-mobile__backdrop js-header-mobile__backdrop"),e),(n=document.createElement("div"),n.setAttribute("class","m-header-mobile__canvas js-header-mobile__canvas "+String(he({"m-header-mobile__canvas--off-canvas":!o}))),pe(n,["\n    ",(t=document.createElement("div"),t.setAttribute("class","m-header-mobile__box"),pe(t,["\n      ",r,"\n    "]),t),"\n  "]),n)]};function be(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}var ye=function(){function e(t,n){var o=this;r(this,e),this.open=function(){m(document.body,o.options.isBodyFrozen),m(o.wcNode,o.options.isMenuOpenClass),o.on()},this.close=function(){o.off(),o.unTransitionEndBackdrop&&o.unTransitionEndBackdrop(),o.unTransitionEndBackdrop=N(o.backdrop,"transitionend",function(e){"opacity"===e.propertyName&&(o.unTransitionEndBackdrop(),k(o.backdrop,o.options.isBackdropFading),o.canvas.scrollTop=0,j("header-mobile/fade-finish",null,o._contextNode))}),m(o.backdrop,o.options.isBackdropFading),k(o.wcNode,o.options.isMenuOpenClass),k(document.body,o.options.isBodyFrozen)},this.handleCloseClick=function(){j("header-mobile/close",null,o._contextNode)},this.wcNode=t,this.options=a({},e.DEFAULTS,n),this.opened=[],this.init()}return i(e,[{key:"init",value:function(){this.canvas=this.wcNode.querySelector(this.options.canvas),this.backdrop=this.wcNode.querySelector(this.options.backdrop)}},{key:"on",value:function(){this.off(),this.offOverscroll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,n=N(e,"touchstart",function(){l(),a=N(e,"touchmove",c),s=N(e,"touchend",l),u()},{passive:!1}),o=N(e,"scroll",function(){e.scrollLeft=0,i()}),r=N(t,"touchmove",function(e){e._isScroller||e.preventDefault()},{passive:!1}),i=A(u,100),a=void 0,s=void 0;return u(),function(){n(),o(),r(),l()};function c(t){e.offsetHeight<e.scrollHeight&&(t._isScroller=!0),e.scrollLeft=0}function l(){a&&(a(),a=null),s&&(s(),s=null),u()}function u(){var t=e.scrollTop,n=e.scrollHeight,o=t+e.offsetHeight;0===t?e.scrollTop=1:o===n&&(e.scrollTop=t-1)}}(this.canvas),this.unBackdropClick=N(this.backdrop,"click",this.handleCloseClick),this.unBackdropOverscroll=N(this.backdrop,"scroll touchmove",be,{passive:!1}),this.unClose=N(this.canvas,"click",this.options.close,this.handleCloseClick)}},{key:"off",value:function(){this.offOverscroll&&this.offOverscroll(),this.unBackdropClick&&this.unBackdropClick(),this.unBackdropOverscroll&&this.unBackdropOverscroll(),this.unClose&&this.unClose()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=P("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=P("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"destroy",value:function(){this.off(),this.offContextEnabled(),delete this.wcNode,delete this.canvas,delete this.backdrop,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();ye.DEFAULTS={canvas:".js-header-mobile__canvas",backdrop:".js-header-mobile__backdrop",close:"js-header-mobile-close",isMenuOpenClass:"is-mobile-menu-open",isBackdropFading:"is-mobile-backdrop-fading",isBodyFrozen:"is-body-frozen"};var me,_e,ge=function(e){function t(){r(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:re,template:ve}));return e.consumeContext("axa-header"),e}return c(t,oe),i(t,null,[{key:"observedAttributes",get:function(){return["offcanvas"]}}]),i(t,[{key:"connectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-mobile"}},{key:"contextCallback",value:function(e){this.interaction&&(this.interaction.contextNode=e)}},{key:"didRenderCallback",value:function(){this.interaction&&this.interaction.destroy(),this.interaction=new ye(this);var e=this.contextNode;e&&this.contextCallback(e)}},{key:"disconnectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction&&(this.interaction.destroy(),delete this.interaction)}}]),t}();return ge.tagName="axa-header-mobile",me=ge.tagName,_e=ge,customElements.get(me)||customElements.define(me,_e),ge}();
