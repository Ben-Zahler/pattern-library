var StyleGuideWebComponent=function(){"use strict";var e=".m-header-mobile-others {\n  display: block;\n  background: #fafafa; }\n\n.m-header-mobile-others__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-others__list-item {\n  display: block;\n  border-top: 1px solid #e5e5e5; }\n  .m-header-mobile-others__list-item:first-child {\n    border-top: none; }\n\n.m-header-mobile-others__link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  display: block;\n  padding: 20px 60px;\n  color: #999;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-mobile-others__link {\n      font-size: 16px; } }\n  .m-header-mobile-others__link.is-header-mobile-others-active, .m-header-mobile-others__link:hover, .m-header-mobile-others__link:active, .m-header-mobile-others__link:focus {\n    text-decoration: none;\n    color: #00008f; }\n",t=/\n[\s]+$/,r=/^\n[\s]+/,n=/[\s]+$/,o=/^[\s]+/,i=/[\n\s]+/g,a=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],l=["code","pre","textarea"],s=function e(s,c){if(Array.isArray(c))for(var u,d,p=s.nodeName.toLowerCase(),f=!1,h=0,v=c.length;h<v;h++){var y=c[h];if(Array.isArray(y))e(s,y);else{("number"==typeof y||"boolean"==typeof y||"function"==typeof y||y instanceof Date||y instanceof RegExp)&&(y=y.toString());var b=s.childNodes[s.childNodes.length-1];if("string"==typeof y)f=!0,b&&"#text"===b.nodeName?b.nodeValue+=y:(y=document.createTextNode(y),s.appendChild(y),b=y),h===v-1&&(f=!1,-1===a.indexOf(p)&&-1===l.indexOf(p)?""===(u=b.nodeValue.replace(r,"").replace(n,"").replace(t,"").replace(i," "))?s.removeChild(b):b.nodeValue=u:-1===l.indexOf(p)&&(d=0===h?"":" ",u=b.nodeValue.replace(r,d).replace(o," ").replace(n,"").replace(t,"").replace(i," "),b.nodeValue=u));else if(y&&y.nodeType){f&&(f=!1,-1===a.indexOf(p)&&-1===l.indexOf(p)?""===(u=b.nodeValue.replace(r,"").replace(t,"").replace(i," "))?s.removeChild(b):b.nodeValue=u:-1===l.indexOf(p)&&(u=b.nodeValue.replace(o," ").replace(r,"").replace(t,"").replace(i," "),b.nodeValue=u));var _=y.nodeName;_&&(p=_.toLowerCase()),s.appendChild(y)}}}};var c,u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},v=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function e(t,r,n,o){var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,r,n,o)}else if("value"in i&&i.writable)i.value=n;else{var l=i.set;void 0!==l&&l.call(o,n)}return n},m=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},O=(function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var i=void 0===o?"undefined":u(o);if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o))e.push(r.apply(null,o));else if("object"===i)for(var a in o)t.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}(c={exports:{}},c.exports),c.exports),x=function(e){var t,r=e.items;return(t=document.createElement("ul")).setAttribute("class","m-header-mobile-others__list"),s(t,["\n    ",Array.isArray(r)&&r.map(function(e){var t,r,n=e.name,o=e.url,i=void 0===o?"":o,a=e.isActive,l=void 0!==a&&a;return(r=document.createElement("li")).setAttribute("class","m-header-mobile-others__list-item"),s(r,["\n        ",(t=document.createElement("a"),t.setAttribute("href",""+String(i)),t.setAttribute("class",""+String(O("m-header-mobile-others__link","js-header-mobile-close",{"is-header-mobile-others-active":l}))),s(t,[n]),t),"\n      "]),r}),"\n  "]),t},C={},k=function(e){return e in C||(C[e]=0),++C[e]},A=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.bubbles,n=void 0!==r&&r,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,n,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function N(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new A(t,f({},n,{detail:r}));return e.dispatchEvent(o)}var w=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),r=function(){};window.addEventListener("testPassiveEventSupport",r,t),window.removeEventListener("testPassiveEventSupport",r,t)}return e}();function E(e){for(var t=e.className,r=!1,n=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var l=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?r=!0:n=!1;return{className:e,hasClass:o}});return!(!n&&!r)&&l}var P=/\s+/,j={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},r=Object.keys(t),n=r.length,o=void 0,i=0;i<n;++i)if(void 0!==e[o=r[i]])return t[o];return""}()};function T(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.capture,a=void 0!==i&&i,l=o.passive,s=void 0===l||l;if(j[t]&&(t=j[t]),!e||!t)return null;var c=void 0===r?"undefined":u(r),d=r&&"string"===c;if("function"===c){if(n){var p=n;a=p.capture,s=p.passive}n=r}for(var f=w?{capture:a,passive:s}:a,h=d?function(t){var o=t.target;for(;!E(o,r)&&o!==e;)o=o.parentNode;if(o!==e)return n(t,o)}:n,v=t.split(P),y=v.length,b=0;b<y;++b)e.addEventListener(v[b],h,f);return function t(){for(var r=0;r<y;++r)e.removeEventListener(v[r],h,f);!function(e,t){if(!e)return!1;for(var r=Object.keys(e),n=r.length,o=0;o<n;++o){var i=r[o];if(e[i]===t)return delete e[i]}}(this,t)}}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.leading,o=void 0!==n&&n,i=r.trailing,a=void 0===i||i,l=r.maxWait,s=void 0!==l&&l,c=void 0,u=void 0,d=void 0,p=void 0,f=!1,h=t!==s,v=!1!==s;function y(){for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return c=n,h&&(u&&clearTimeout(u),u=setTimeout(b,t)),v&&!d&&(d=setTimeout(_,s)),o&&!f&&(f=!0,p=e.apply(void 0,g(c))),p}return y.flush=function(){(u||d)&&(p=e.apply(void 0,g(c)));return O(),p},y.cancel=O,y;function b(){d&&clearTimeout(d),m()}function _(){u&&clearTimeout(u),m()}function m(){a&&(p=e.apply(void 0,g(c))),u=null,d=null,f=!1}function O(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}var R={};function M(e,t){var r=T(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);R[e]||(R[e]={count:0});var n,o=R[e];return o.count++,o.onsubscribe||(o.onsubscribe=S((n=e,function(){N(document,"pubsub/onsubscribe",n),N(document,"pubsub/onsubscribe/"+n,n),R[n]&&delete R[n].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,r.call(this),o.count<=0&&delete R[e]}}T(document,"pubsub/onsubscribe",function(e){var t=e.detail;R[t]||(R[t]={count:0});var r=R[t],n=r.queue;Array.isArray(n)&&(n.forEach(function(e){var t=m(e,3),r=t[0],n=t[1],o=t[2];N(o,r,n)}),delete r.queue)});var L,D=function(e,t){return e===t},V=((L=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){return e.apply(void 0,[].concat(r,n))?L.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,r){var n;d(this,t);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,a=Array(i>2?i-2:0),l=2;l<i;l++)a[l-2]=arguments[l];var s=b(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="PropertyExistsException",s}return v(t,e),t}(Error)),U=/[A-Z]/g;function I(e,t,r){var n=e.toLowerCase(),o=r.charAt(t+1);return 0===t||o.toUpperCase()===o?n:"-"+n}var F=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function H(e,t){var r=e;if(e&&t!==e){if(F.test(e))try{r=JSON.parse(e)}catch(r){console.error("Attribute "+t+" has an error:\n"+r+"\n",e)}}else r=!0;return r}var W=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,q=/[-_]+/g;function z(e){return e.replace(W,$)}function $(e,t){return 0==+e||q.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var K=["title","checked","disabled"],G=[];var B=1,Z=3,J=8;function X(e,t){var r=e.nodeType,n=e.nodeName;r===B&&function(e,t){for(var r=t.attributes,n=e.attributes,o=null,i=null,a=null,l=null,s=n.length-1;s>=0;--s)if(l=n[s],a=l.name,o=l.namespaceURI,i=l.value,o){var c=l.localName;t.getAttributeNS(o,c||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=r.length-1;u>=0;--u)!1!==(l=r[u]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),r!==Z&&r!==J||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===n?function(e,t){var r=e.value,n=t.value;Q(e,t,"checked"),Q(e,t,"disabled"),r!==n&&(t.setAttribute("value",r),t.value=r);"null"===r&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=r):t.removeAttribute("value")}(e,t):"OPTION"===n?Q(e,t,"selected"):"TEXTAREA"===n&&function(e,t){var r=e.value;r!==t.value&&(t.value=r);if(t.firstChild&&t.firstChild.nodeValue!==r){if(""===r&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=r}}(e,t)}function Q(e,t,r){e[r]!==t[r]&&(t[r]=e[r],e[r]?t.setAttribute(r,""):t.removeAttribute(r))}var Y=3;function ee(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(X(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var r=void 0,n=void 0,o=void 0,i=void 0,a=0,l=0;r=t.childNodes[l],n=e.childNodes[l-a],r||n;l++)if(n)if(r)if(te(n,r))(o=ee(n,r))!==r&&(t.replaceChild(o,r),a++);else{i=null;for(var s=l;s<t.childNodes.length;s++)if(te(t.childNodes[s],n)){i=t.childNodes[s];break}i?((o=ee(n,i))!==i&&a++,t.insertBefore(o,r)):n.id||r.id?(t.insertBefore(n,r),a++):(o=ee(n,r))!==r&&(t.replaceChild(o,r),a++)}else t.appendChild(n),a++;else t.removeChild(r),l--}(e,t),t):null:e}function te(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Y&&e.nodeValue===t.nodeValue)}var re=function(e){function t(e){var r;d(this,t);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var l=b(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return v(t,e),t}(Error),ne=!!document.createDocumentFragment().children;function oe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(oe.prototype,HTMLElement.prototype),Object.setPrototypeOf(oe,HTMLElement);var ie=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function r(){var e,t,n;d(this,r);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=b(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(i))),n._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=M("context/available",n._makeContextReady)},b(n,t)}return v(r,e),p(r,[{key:"connectedCallback",value:function(){h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this)&&h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;R[e]||(R[e]={count:0,queue:[]});var n=R[e].queue;Array.isArray(n)?n.push([e,t,r]):N(r,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),r}()},function(e){return function(t){function r(){return d(this,r),b(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return v(r,e),p(r,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else _(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else _(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else _(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerHTML",e,this)}}]),r}()},function(e){return function(t){function r(e){d(this,r);var t=b(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));t._reduceProps=function(e,n){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[n];if(-1===K.indexOf(n)&&a)throw new V(n,t);var l="_"+n,s=o[n],c=t[l];return i||t.shouldUpdateCallback(s,c)?(t[l]=s,t._props[n]=s,a&&_(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,s,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=S(function(){return t.updated&&t.updated()},50);var n=t.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var r,n=z(e),o=n in t;if(-1===K.indexOf(n)&&o)throw new V(n,t);t._hasKeys[n]=o,Object.defineProperty(t,n,r={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&_(r.__proto__||Object.getPrototypeOf(r),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return v(r,e),p(r,[{key:"connectedCallback",value:function(){var e=this;if(h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=z(t);if(e.hasAttribute(t)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var r=e.value;return t?r=e.getAttribute(t):t=e.name,r=H(r,t)}(e,t),i=e._hasKeys[n];e._props[n]=o,i&&_(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,r){this.shouldUpdateCallback(r,t)&&(this[z(e)]=H(r))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,r=void 0===t?[]:t;Object.keys(e).filter(function(e){return r.indexOf(e.replace(U,I))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),r}()},function(e){return function(t){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=y(e,["template"]);d(this,r);var o=b(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return v(r,e),p(r,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var n=this._template;try{if(t){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var r=t.cloneNode(!0);e.childrenFragment.appendChild(r)});ne||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var a=n(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(a))a.forEach(function(e){l.appendChild(e)});else if(a){if("string"==typeof a)throw new re(this);l.appendChild(a)}if(t)h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"appendChild",this).call(this,l);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":u(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":u(t)))throw new Error("componentMorph: newTree should be an object");ee(t,e)}(this,s),function(){for(var e=void 0;e=G.pop();)delete e.isSameNode;G=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),r}()},function(e){return function(t){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=y(e,["styles"]);d(this,r);var i=b(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i._styles=n,i}return v(r,e),p(r,[{key:"connectedCallback",value:function(){h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),r=document.createTextNode(this._styles);t.appendChild(r),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()})(function(e){function t(e){d(this,t);var r=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._id=k(r.nodeName),r}return v(t,oe),p(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),ae={},le=function(e){function t(){var e,r,n;d(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=n=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n._appendStyles=function(){t.appendGlobalStyles(n._styles,n.nodeName)},b(n,r)}return v(t,ie),p(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ie.uuidv4();if(e&&!ae[t]){var r=document.createElement("style"),n=document.createTextNode(e);ae[t]=!0,r.appendChild(n),r.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(r)}}}]),t}();var se,ce,ue=function(t){function r(){return d(this,r),b(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,{styles:e,template:x}))}return v(r,le),p(r,null,[{key:"observedAttributes",get:function(){return["items"]}}]),p(r,[{key:"connectedCallback",value:function(){h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-mobile-others"}}]),r}();return ue.tagName="axa-header-mobile-others",se=ue.tagName,ce=ue,customElements.get(se)||customElements.define(se,ce),ue}();
