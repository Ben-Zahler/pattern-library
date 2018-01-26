var StyleGuideWebComponent=function(){"use strict";function t(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new l(e,u({},i,{detail:n}));t.dispatchEvent(r)}function e(t,e,n,i){function r(){for(var e=0;e<u;++e)t.removeEventListener(l[e],c,o);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),i=n.length,r=0;r<i;++r){var o=n[r];if(t[o]===e)return delete t[o]}}(this,r)}var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(h[e]&&(e=h[e]),!t||!e)return null;var a=void 0===n?"undefined":s(n);"function"===a&&(o=!!i,i=n);for(var c=n&&"string"===a?function(e){for(var r=e.target;!function(t,e){return function(t,e){return new RegExp("^"+t+"$|^"+t+"\\s|\\s"+t+"\\s|\\s"+t+"$",e)}(e).test(t.className)}(r,n)&&r!==t;)r=r.parentNode;if(r!==t)return i(e,r)}:i,l=e.split(d),u=l.length,f=0;f<u;++f)t.addEventListener(l[f],c,o);return r}function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var c=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,l=function(){function t(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,i=void 0!==n&&n,r=e.cancelable,o=void 0!==r&&r,a=e.detail,c=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(t,i,o,c);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},l}try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return t}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=/\s+/,h={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),i=n.length,r=void 0,o=0;o<i;++o)if(r=n[o],void 0!==t[r])return e[r];return null}()},f=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&c.return&&c.return()}finally{if(r)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p={};e(document,"pubsub/onsubscribe",function(e){var n=e.detail;p[n]||(p[n]={count:0});var i=p[n],r=i.queue;Array.isArray(r)&&(r.forEach(function(e){var n=f(e,3),i=n[0],r=n[1];t(n[2],i,r)}),delete i.queue)});var m=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();Object.setPrototypeOf(a.prototype,HTMLElement.prototype),Object.setPrototypeOf(a,HTMLElement);var v={},y=function(l){function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1];i(this,u);var n=r(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(t,e),n}return o(u,a),m(u,[{key:"_initialise",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=t,this._template=e}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}},{key:"render",value:function(){var t=this;if(!this._hasRendered){var e=this._template;if(e)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var i=e(function(t){if(!t.hasAttributes)return null;for(var e={},n=t.attributes,i=n.length,r=0;r<i;++r){var o=n[r];e[o.name]=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;if(e?n=t.getAttribute(e):e=t.name,n&&e!==n){if(c.test(n))try{n=JSON.parse(n)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",n)}}else n=!0;return n}(o)}return e}(this),n);if(Array.isArray(i))i.forEach(function(e){t.appendChild(e)});else if(i){if("string"==typeof i){var r=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(i)}this._hasRendered=!0}catch(r){"throwed"!==r.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;p[e]||(p[e]={count:0,queue:[]});var r=p[e].queue;Array.isArray(r)?r.push([e,n,i]):t(i,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(t){this.__selectedContext=t.toLowerCase()}},{key:"_makeContextReady",value:function(){var i=this,r=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){i.contextCallback(i.contextNode,r)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(i,r){var o=e(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,i,r);p[i]||(p[i]={count:0});var a=p[i];return a.count++,a.onsubscribe||(a.onsubscribe=function(t){function e(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return f=r,b&&(p&&clearTimeout(p),p=setTimeout(function(){m&&clearTimeout(m),i()},o)),x&&!m&&(m=setTimeout(function(){p&&clearTimeout(p),i()},h)),l&&!y&&(y=!0,v=t.apply(void 0,n(f))),v}function i(){s&&(v=t.apply(void 0,n(f))),p=null,m=null,y=!1}function r(){p&&(clearTimeout(p),p=null),m&&(clearTimeout(m),m=null),f=void 0,y=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=a.leading,l=void 0!==c&&c,u=a.trailing,s=void 0===u||u,d=a.maxWait,h=void 0!==d&&d,f=void 0,p=void 0,m=void 0,v=void 0,y=!1,b=o!==h,x=!1!==h;return e.flush=function(){return(p||m)&&(v=t.apply(void 0,n(f))),r(),v},e.cancel=r,e}(function(e){return function(){t(document,"pubsub/onsubscribe",e),t(document,"pubsub/onsubscribe/"+e,e),p[e]&&delete p[e].unsubscribe}}(i),100)),a.onsubscribe(),function(){a.count--,o.call(this),a.count<=0&&delete p[i]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var t=this.__selectedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),u}(),b=(function(t){function e(){return i(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}o(e,y),m(e,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:t});this._appendStyles(e),this.render()}}])}(),function(t){function e(){return i(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,y),m(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.uuidv4();if(t&&!v[t]){var n=document.createElement("style"),i=document.createTextNode(t);n.appendChild(i),n.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(n),v[t]=!0}}}]),e}()),x='.a-vertical-rhythm {\n  display: block; }\n  .a-vertical-rhythm > :first-child {\n    padding-top: 40px; }\n    .a-vertical-rhythm > :first-child::before {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 40px;\n      margin-top: -40px;\n      background: #b5d0ee;\n      content: "padding-top: 40px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > :first-child::before {\n          font-size: 18px; } }\n  @media (min-width: 768px) {\n    .a-vertical-rhythm > :first-child {\n      padding-top: 60px; }\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 60px;\n        margin-top: -60px;\n        background: #b5d0ee;\n        content: "padding-top: 60px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 18px; } }\n  @media (min-width: 992px) {\n    .a-vertical-rhythm > :first-child {\n      padding-top: 70px; }\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 70px;\n        margin-top: -70px;\n        background: #b5d0ee;\n        content: "padding-top: 70px"; } }\n    @media (min-width: 992px) and (min-width: 576px) {\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 18px; } }\n  .a-vertical-rhythm > :last-child {\n    padding-bottom: 40px; }\n    .a-vertical-rhythm > :last-child::after {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 40px;\n      margin-bottom: -40px;\n      background: #b5d0ee;\n      content: "padding-bottom: 40px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > :last-child::after {\n          font-size: 18px; } }\n  @media (min-width: 768px) {\n    .a-vertical-rhythm > :last-child {\n      padding-bottom: 60px; }\n      .a-vertical-rhythm > :last-child::after {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 60px;\n        margin-bottom: -60px;\n        background: #b5d0ee;\n        content: "padding-bottom: 60px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > :last-child::after {\n        font-size: 18px; } }\n  .a-vertical-rhythm > * {\n    margin-top: 20px;\n    background: #fff;\n    display: block; }\n    .a-vertical-rhythm > *:first-child {\n      margin-top: 0; }\n    .a-vertical-rhythm > *::before {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 20px;\n      margin-top: -20px;\n      background: #fad6de;\n      content: "margin-top: 20px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > *::before {\n          font-size: 18px; } }\n    @media (min-width: 768px) {\n      .a-vertical-rhythm > * {\n        margin-top: 40px; }\n        .a-vertical-rhythm > *:first-child {\n          margin-top: 0; }\n        .a-vertical-rhythm > *::before {\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          letter-spacing: 0.01em;\n          position: relative;\n          display: block;\n          color: #fff;\n          text-align: center;\n          height: 40px;\n          margin-top: -40px;\n          background: #fad6de;\n          content: "margin-top: 40px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > *::before {\n        font-size: 18px; } }\n    @media (min-width: 992px) {\n      .a-vertical-rhythm > * {\n        margin-top: 60px; }\n        .a-vertical-rhythm > *:first-child {\n          margin-top: 0; }\n        .a-vertical-rhythm > *::before {\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          letter-spacing: 0.01em;\n          position: relative;\n          display: block;\n          color: #fff;\n          text-align: center;\n          height: 60px;\n          margin-top: -60px;\n          background: #fad6de;\n          content: "margin-top: 60px"; } }\n    @media (min-width: 992px) and (min-width: 576px) {\n      .a-vertical-rhythm > *::before {\n        font-size: 18px; } }\n',g=function(t,e){return e},w=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),_=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,x,g))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,b),w(e,[{key:"connectedCallback",value:function(){(function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(i)})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-vertical-rhythm"}}]),e}();return function(t){var e=0,n=function(){if(0===e)try{t.apply(void 0,arguments),e+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(t){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-vertical-rhythm",_)}),_}();
