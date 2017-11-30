!function(){"use strict";function t(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,n=(function(){function t(t){this.value=t}function e(e){function n(o,i){try{var a=e[o](i),c=a.value;c instanceof t?Promise.resolve(c.value).then(function(t){n("next",t)},function(t){n("throw",t)}):r(a.done?"return":"normal",a.value)}catch(t){r("throw",t)}}function r(t,e){switch(t){case"return":o.resolve({value:e,done:!0});break;case"throw":o.reject(e);break;default:o.resolve({value:e,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(t,e){return new Promise(function(r,a){var c={key:t,arg:e,resolve:r,reject:a,next:null};i?i=i.next=c:(o=i=c,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};Object.setPrototypeOf(t.prototype,HTMLElement.prototype),Object.setPrototypeOf(t,HTMLElement);var a={},c=function(a){function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1];n(this,c);var r=i(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return r._initialise(t,e),r}return o(c,t),r(c,[{key:"_initialise",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=t,this._template=e}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}},{key:"render",value:function(){var t=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var o=n(function(t){if(!t.hasAttributes)return null;for(var n={},r=t.attributes,o=r.length,i=0;i<o;++i){var a=r[i];n[a.name]=function(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}(a)}return n}(this),r);if(Array.isArray(o))o.forEach(function(e){t.appendChild(e)});else if(o){if("string"==typeof o){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),c}(),u=(function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}o(e,c),r(e,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:t});this._appendStyles(e),this.render()}}])}(),function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,c),r(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.uuidv4();if(t&&!a[t]){var n=document.createElement("style"),r=document.createTextNode(t);n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(n),a[t]=!0}}}]),e}()),l=function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,u),r(e,[{key:"connectedCallback",value:function(){(function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this);var t=this.getAttribute("type");this.className="o-footer o-footer--"+t}}]),e}();window.customElements.define("axa-footer",l)}();
