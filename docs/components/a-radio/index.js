var StyleGuideWebComponent=function(){"use strict";function e(e,t,n,o){function i(){for(var t=0;t<l;++t)e.removeEventListener(s[t],u,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,i)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(f[t]&&(t=f[t]),!e||!t)return null;var c=void 0===n?"undefined":r(n);"function"===c&&(a=!!o,o=n);for(var u=n&&"string"===c?function(t){for(var r=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,s=t.split(d),l=s.length,h=0;h<l;++h)e.addEventListener(s[h],u,a);return i}function t(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new b(t,a({},r,{detail:n}));e.dispatchEvent(o)}function n(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=(function(){function e(e){this.value=e}function t(t){function n(o,i){try{var a=t[o](i),c=a.value;c instanceof e?Promise.resolve(c.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(e,t){return new Promise(function(r,a){var c={key:e,arg:t,resolve:r,reject:a,next:null};i?i=i.next=c:(o=i=c,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=/\s+/,f={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(o=n[i],void 0!==e[o])return t[o];return null}()},h=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,b=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,c);var s=u.preventDefault;return u.preventDefault=function(){s.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),v={};e(document,"pubsub/onsubscribe",function(e){var n=e.detail;v[n]||(v[n]={count:0});var r=v[n],o=r.queue;Array.isArray(o)&&(o.forEach(function(e){var n=s(e,3),r=n[0],o=n[1];t(n[2],r,o)}),delete r.queue)}),Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement);var p={},y=function(r){function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,a);var n=u(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return c(a,n),i(a,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,r=n.length,o=0;o<r;++o){var i=n[o];t[i.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(h.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(i)}return t}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var o=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){"throwed"!==o.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;v[e]||(v[e]={count:0,queue:[]});var o=v[e].queue;Array.isArray(o)?o.push([e,n,r]):t(r,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var n=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(n,r){var o=e(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n,r);v[n]||(v[n]={count:0});var i=v[n];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return h=r,m&&(b&&clearTimeout(b),b=setTimeout(function(){v&&clearTimeout(v),n()},o)),x&&!v&&(v=setTimeout(function(){b&&clearTimeout(b),n()},f)),c&&!y&&(y=!0,p=e.apply(void 0,l(h))),p}function n(){s&&(p=e.apply(void 0,l(h))),b=null,v=null,y=!1}function r(){b&&(clearTimeout(b),b=null),v&&(clearTimeout(v),v=null),h=void 0,y=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,c=void 0!==a&&a,u=i.trailing,s=void 0===u||u,d=i.maxWait,f=void 0!==d&&d,h=void 0,b=void 0,v=void 0,p=void 0,y=!1,m=o!==f,x=!1!==f;return t.flush=function(){return(b||v)&&(p=e.apply(void 0,l(h))),r(),p},t.cancel=r,t}(function(e){return function(){t(document,"pubsub/onsubscribe",e),t(document,"pubsub/onsubscribe/"+e,e),v[e]&&delete v[e].unsubscribe}}(n),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete v[n]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),a}(),m=(function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}c(t,y),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,y),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.uuidv4();if(e&&!p[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),p[e]=!0}}}]),t}()),x='.a-radio {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 20px;\n  width: 16px;\n  height: 16px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 50%; }\n  .a-radio:hover, .a-radio:active {\n    border-color: #00008f; }\n    .a-radio:hover::after, .a-radio:active::after {\n      background: #ccc;\n      border-color: #00008f; }\n  .a-radio::after {\n    display: block;\n    width: 6px;\n    height: 6px;\n    content: "";\n    background: #fff;\n    border: 1px solid #ccc;\n    border-radius: 50%; }\n\n.a-radio[hidden] {\n  display: none; }\n\n.a-radio[checked]::after {\n  background: #00008f;\n  border-color: #00008f; }\n\n.a-radio[disabled]::after {\n  background: #fff;\n  border-color: #ccc; }\n\n.a-radio[checked][disabled]::after {\n  background: #fff;\n  border-color: #ccc; }\n',k={SPACE:32},g=function(t){function n(){return o(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,x))}return c(n,m),i(n,null,[{key:"observedAttributes",get:function(){return["checked","disabled"]}}]),i(n,[{key:"render",value:function(){this.className=this.initialClassName+" a-radio",this.hasAttribute("role")||this.setAttribute("role","radio"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),e(this,"keyup",this._onKeyUp),e(this,"click",this._onClick),this._upgradeProperty("disabled")}},{key:"_upgradeProperty",value:function(e){if(Object.prototype.hasOwnProperty.call(this,e)){var t=this[e];delete this[e],this[e]=t}}},{key:"attributeChangedCallback",value:function(e,t,n){var r=null!==n;switch(e){case"checked":this.setAttribute("aria-checked",r);break;case"disabled":this.setAttribute("aria-disabled",r),r?(this.removeAttribute("tabindex"),this.blur()):this.setAttribute("tabindex","0")}}},{key:"_onKeyUp",value:function(e){if(!e.altKey)switch(e.keyCode){case k.SPACE:e.preventDefault(),this._toggleChecked()}}},{key:"_onClick",value:function(){this._toggleChecked()}},{key:"_toggleChecked",value:function(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new b("change",{detail:{checked:this.checked},bubbles:!0})))}},{key:"checked",set:function(e){Boolean(e)?this.setAttribute("checked",""):this.removeAttribute("checked")},get:function(){return this.hasAttribute("checked")}},{key:"disabled",set:function(e){Boolean(e)?this.setAttribute("disabled",""):this.removeAttribute("disabled")},get:function(){return this.hasAttribute("disabled")}}]),n}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-radio",g)}),g}();
