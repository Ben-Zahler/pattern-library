!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},r=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function d(){}var f,h=(function(e){e.exports=function(){function e(e,t,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=d,n.PropTypes=n}()}(f={exports:{}},f.exports),f.exports),v=0;function y(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===v&&(v++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(y,n),v--),n}(n)),e}var _=h;Object.keys(_).reduce(y,_);var m=_.oneOf(["left","center","right"]),g=_.oneOf(["left","right"]),C=(_.oneOf(["top","bottom"]),_.oneOf(["up","down"])),x=_.oneOf(["ok","pending","error","unknown"]),k=_.oneOf(["row","col","rowgroup","colgroup","auto"]),w=_.oneOfType([_.string,_.number]),T={text:w,value:_.any,rowspan:w,colspan:w,scope:k,align:m,dense:_.bool},j={float:g,strong:_.bool,bold:_.bool},N=_.oneOfType([_.string,_.number]),P=_.oneOfType([N,_.shape(i({},T,{sort:C,sortActive:_.bool}))]),E=_.oneOfType([N,_.shape(i({},T,j,{action:_.bool,state:x}))]),A=_.oneOfType([N,_.shape(i({},T,j))]),S=_.oneOfType([_.arrayOf(P),_.shape({cells:_.arrayOf(P)})]),R=_.oneOfType([_.arrayOf(E),_.shape({cells:_.arrayOf(E),action:_.bool})]),D=_.oneOfType([_.arrayOf(A),_.shape({cells:_.arrayOf(A)})]),L=(_.oneOfType([S,_.arrayOf(S)]),_.oneOfType([R,_.arrayOf(R)]),_.oneOfType([D,_.arrayOf(D)]),/\n[\s]+$/),U=/^\n[\s]+/,I=/[\s]+$/,M=/^[\s]+/,V=/[\n\s]+/g,q=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],F=["code","pre","textarea"];function K(e,t){var n;return(n=document.createElement("div")).setAttribute("class","m-header-top-content-bar__box"),function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===q.indexOf(i)&&-1===F.indexOf(i)?""===(o=u.nodeValue.replace(U,"").replace(I,"").replace(L,"").replace(V," "))?t.removeChild(u):u.nodeValue=o:-1===F.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(U,r).replace(M," ").replace(I,"").replace(L,"").replace(V," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===q.indexOf(i)&&-1===F.indexOf(i)?""===(o=u.nodeValue.replace(U,"").replace(L,"").replace(V," "))?t.removeChild(u):u.nodeValue=o:-1===F.indexOf(i)&&(o=u.nodeValue.replace(M," ").replace(U,"").replace(L,"").replace(V," "),u.nodeValue=o));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}}(n,[t]),n}var z,H,W,$,G=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},B={},J=(z=Object,H=z.getPrototypeOf||function(e){return e.__proto__},W=z.setPrototypeOf||function(e,t){return e.__proto__=t,e},$="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),W(new o,n.prototype)},function(e){var t=H(e);return W(e,W(function(){return $(t,arguments,H(this).constructor)},t))}),Y=function(n){return J(function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),a(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in B||(B[e]=0),++B[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},Z={},X=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function Q(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new X(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var ee=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function te(e){for(var r=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}function ne(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}return!1}var oe=/\s+/,re={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function ie(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(re[e]&&(e=re[e]),!n||!e)return null;var l=void 0===o?"undefined":b(o),u=o&&"string"===l;if("function"===l){if(r){var p=r;a=p.capture,c=p.passive}r=o}for(var d=ee?{capture:a,passive:c}:a,f=u?function(e){var t=e.target;for(;!te(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(oe),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);ne(this,e)}}function ae(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=r!==c,v=!1!==c;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(u&&clearTimeout(u),u=setTimeout(b,r)),v&&!p&&(p=setTimeout(_,c)),i&&!f&&(f=!0,d=o.apply(void 0,O(l))),d}return y.flush=function(){(u||p)&&(d=o.apply(void 0,O(l)));return g(),d},y.cancel=g,y;function b(){p&&clearTimeout(p),m()}function _(){u&&clearTimeout(u),m()}function m(){a&&(d=o.apply(void 0,O(l))),p=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var se=window.__subscriptions;function ce(e,t){var n=ie(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);se[e]||(se[e]={count:0});var o,r=se[e];return r.count++,r.onsubscribe||(r.onsubscribe=ae((o=e,function(){Q(document,"pubsub/onsubscribe",o),Q(document,"pubsub/onsubscribe/"+o,o),se[o]&&delete se[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete se[e]}}ie(document,"pubsub/onsubscribe",function(e){var t=e.detail;se[t]||(se[t]={count:0});var n=se[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],r=t[2];Q(r,n,o)}),delete n.queue)});var le,ue=function(e,t){return e===t},pe=(le=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ue;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?le.apply(void 0,arguments):void 0}}}}()(!0),[]);var de=1,fe=3,he=8;function ve(e,t){var n=e.nodeType;n===de&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var f=p.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==fe&&n!==he||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function ye(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;be(e,t,"checked"),be(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?be(e,t,"selected"):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,r=t.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function be(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var _e=3;function me(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ve(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ge(o,n))(r=me(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(ge(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=me(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=me(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),ye(e,t),t):null:e}function ge(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===_e&&e.nodeValue===t.nodeValue)}var Oe,Ce,xe,ke,we=(Oe=Object,Ce=Oe.getPrototypeOf||function(e){return e.__proto__},xe=Oe.setPrototypeOf||function(e,t){return e.__proto__=t,e},ke="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),xe(new o,n.prototype)},function(e){var t=Ce(e);return xe(e,xe(function(){return ke(t,arguments,Ce(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return o(s,e),s}(Error)),Te=!!document.createDocumentFragment().children,je=/[A-Z]/g;function Ne(e){return e.replace(je,Pe)}function Pe(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Ee=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ae(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case _.string:case _.string.isRequired:return t;case _.bool:case _.bool.isRequired:if(!t||n===t)return!0;case _.number:case _.number.isRequired:case _.object:case _.object.isRequired:case _.array:case _.array.isRequired:default:if(Ee.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Ee.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var Se=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Re=/[-_]+/g;function De(e){return e.replace(Se,Le)}function Le(e,t){return 0==+e||Re.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ue(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[De(t)]);if(o&&!e.hasAttribute(t))return i!==_.bool&&i!==_.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ae(a,t,i)}var Ie=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Me(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=ie(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=l,Ie&&(t.style.cursor="pointer"),u}var Ve=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),qe="axa-change",Fe="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Ve.ENTER,t),i._onInteractive()):o&&i._notify(Ve.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Ve.ESCAPE||e.key===Ve.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return a(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ie(this._container,Ve.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,r=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=ie(e,Ve.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Me(e,Ve.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=ie(e.ownerDocument,Ve.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Fe)?Ue(e,Fe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ve.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ke=G(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),t}(),e.version="2.0.1-beta.251",t},function(t){return function(e){function n(){return l(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=ce("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;se[e]||(se[e]={count:0,queue:[]});var o=se[e].queue;Array.isArray(o)?o.push([e,t,n]):Q(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return l(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){return l(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return o(i,t),a(i,[{key:"init",value:function(e){var t=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=ae(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){De(e)})}},{key:"connectedCallback",value:function(){var o=this;if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=De(e);if(o.hasAttribute(e)){var n=Ue(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=De(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Ae(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&Q(this,qe,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(Ne(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,r=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[t]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&_.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Ne)}}]),i}()},function(t){return function(e){function c(){return l(this,c),p(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return o(c,t),a(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Te||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new we(this);a.appendChild(i)}if(e)u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: newTree should be an object");me(t,e)}(this,s),function(){for(var e=void 0;e=pe.pop();)delete e.isSameNode;pe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function r(){return l(this,r),p(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return o(r,t),a(r,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=s(e,["styles"]);u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()}),ze=(G(Ke,Y),G(Ke,function(r){return function(e){function n(){return l(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,r),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(e&&!Z[t]){var n=document.createElement("style"),o=document.createTextNode(e);Z[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},Y)(HTMLElement));var He,We,$e,Ge=function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,ze),a(t,[{key:"init",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-header-top-content-bar {\n  display: block;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff; }\n  .m-header-mobile .m-header-top-content-bar {\n    padding-top: 20px;\n    padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar {\n      padding-top: 5px;\n      padding-bottom: 5px; } }\n\n.m-header-top-content-bar,\n.m-header-top-content-bar--corporate {\n  background: #027180; }\n\n.m-header-top-content-bar--commercial {\n  background: #00005b; }\n\n.m-header-top-content-bar--warning {\n  background: #c91432; }\n\n.m-header-top-content-bar__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-top-content-bar__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-top-content-bar__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-top-content-bar__box {\n      max-width: 1140px; } }\n  .m-header-mobile .m-header-top-content-bar__box {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; } }\n\n.m-header-top-content-bar__text {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin-right: 24px; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__text {\n      font-size: 13px;\n      line-height: 1.38; } }\n\n.m-header-top-content-bar__button {\n  margin-top: 10px; }\n  .m-header-mobile .m-header-top-content-bar__button {\n    margin-top: 10px; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__button {\n      margin-top: 0; } }\n",template:K})}},{key:"willRenderCallback",value:function(){var e=this.props.type;this.className=this.initialClassName+" m-header-top-content-bar m-header-top-content-bar--"+e}}]),t}();return Ge.tagName="axa-header-top-content-bar",Ge.propTypes={type:_.oneOf(["corporate","commercial","warning"])},He=Ge.tagName,We=Ge,customElements.get(He)||customElements.define(He,We,$e),Ge});
