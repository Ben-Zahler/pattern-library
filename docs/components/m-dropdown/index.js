var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=(function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(o.apply(null,i));else if("object"===a)for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}(e={exports:{}},e.exports),e.exports),h=".m-dropdown {\n  position: relative;\n  display: inline-block; }\n\n.m-dropdown--sm {\n  height: 40px;\n  line-height: 40px; }\n\n.m-dropdown__select-wrap {\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333;\n  position: relative;\n  display: block;\n  width: 100%;\n  /* undo padding frame padding */\n  padding: 0 !important;\n  overflow: hidden;\n  cursor: pointer; }\n  .m-dropdown__select-wrap:hover, .m-dropdown__select-wrap:active, .m-dropdown__select-wrap:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__select-wrap:hover .m-dropdown__icon, .m-dropdown__select-wrap:active .m-dropdown__icon, .m-dropdown__select-wrap:focus .m-dropdown__icon {\n      color: #00008f; }\n\n.m-dropdown__select-wrap--sm {\n  height: 40px; }\n\n.m-dropdown__select {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* important: fake it to have 0 width */\n  float: left;\n  /* overflow is indented to fix browser who don't support hiding the native arrow */\n  width: 120%;\n  height: 50px;\n  padding: 0;\n  margin-right: -120%;\n  line-height: 50px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  text-indent: 20px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  vertical-align: middle;\n  cursor: pointer;\n  /* don't use background nor border - the parent deals with that */\n  background: transparent;\n  border: none;\n  color: inherit;\n  /* disable native appearance like arrow */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  /* disable outline styles */\n  /* fix firefox focus stuff */\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable */\n  /* fix ugly blue screen at focused option value in IE */\n  /* fix native select arrows on IE */\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  .m-dropdown__select:active, .m-dropdown__select:focus {\n    border: none;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus {\n    color: #333; }\n    .m-dropdown__select:focus + .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__select::-moz-focus-inner,\n  .m-dropdown__select option::-moz-focus-inner {\n    border: none;\n    box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus::-ms-value {\n    color: inherit;\n    background: transparent; }\n  .m-dropdown__select::-ms-expand {\n    display: none; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .m-dropdown__select {\n      /* IE10+ CSS styles go here */\n      /* fix IE not adhering to `text-indent` rules at <select> tags */\n      padding-left: 20px; } }\n\n@-moz-document url-prefix() {\n  .m-dropdown__select {\n    /* ugly fix of firefox related issues */\n    /* Fix Firefox doubles text-indent value */\n    text-indent: 10px;\n    /* fix firefox dotted border on focused selects */ }\n    .m-dropdown__select:focus {\n      color: transparent;\n      text-shadow: 0 0 0 #00008f; } }\n  @media (min-width: 576px) {\n    .m-dropdown__select {\n      font-size: 18px; } }\n\n.m-dropdown__select--sm {\n  height: 40px;\n  line-height: 40px; }\n\n.m-dropdown__select-icon {\n  display: block;\n  float: right;\n  height: 50px;\n  padding: 0 20px;\n  margin-left: -100%;\n  pointer-events: none;\n  background: #fff;\n  /* fix missing height of wrapping root node of <axa-icon> */ }\n  .m-dropdown__select-icon > * {\n    display: block;\n    height: 100%; }\n  .m-dropdown__select-icon .m-dropdown__icon {\n    position: relative;\n    right: auto; }\n\n.m-dropdown__select-option--hidden {\n  display: none; }\n\n.m-dropdown__toggle {\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  position: relative;\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-dropdown__toggle {\n      font-size: 18px; } }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    cursor: pointer; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__toggle:hover .m-dropdown__icon, .m-dropdown__toggle:active .m-dropdown__icon, .m-dropdown__toggle:focus .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__toggle:hover::after, .m-dropdown__toggle:active::after, .m-dropdown__toggle:focus::after {\n    display: block; }\n  .m-dropdown__toggle::after {\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    z-index: 1001;\n    display: none;\n    width: 100%;\n    height: 1px;\n    overflow: hidden;\n    content: '';\n    background: #00008f; }\n\n.m-dropdown__toggle--sm {\n  height: 40px;\n  padding: 5.5px 55px 5.5px 20px; }\n\n.m-dropdown__icon {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -7.5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-dropdown__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .is-dropdown-animating.m-dropdown--gpu > .m-dropdown__icon {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n\n.m-dropdown__select-icon--sm {\n  height: 40px; }\n\n.m-dropdown__content {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  margin-top: -1px;\n  background: #fff; }\n  .is-dropdown-open > .m-dropdown__content {\n    height: auto; }\n  .m-dropdown--in-flow > .m-dropdown__content {\n    position: static; }\n  .is-dropdown-animating.m-dropdown--gpu > .m-dropdown__content {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n\n.m-dropdown__item {\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc; }\n  .m-dropdown__item:first-child {\n    border-top: 1px solid #ccc; }\n  .m-dropdown__item:last-child {\n    border-bottom: 3px solid #ccc; }\n\n.m-dropdown__link {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: block;\n  padding: 10.5px 20px;\n  color: #333;\n  white-space: nowrap; }\n  @media (min-width: 576px) {\n    .m-dropdown__link {\n      font-size: 18px; } }\n  .m-dropdown__link:hover, .m-dropdown__link:active, .m-dropdown__link:focus {\n    color: #00008f;\n    text-decoration: none;\n    background: #f5f5f5; }\n",v=/\n[\s]+$/,_=/^\n[\s]+/,m=/[\s]+$/,g=/^[\s]+/,y=/[\n\s]+/g,b=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],w=["code","pre","textarea"],C=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var d=n[s];if(Array.isArray(d))e(t,d);else{("number"==typeof d||"boolean"==typeof d||"function"==typeof d||d instanceof Date||d instanceof RegExp)&&(d=d.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof d)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=d:(d=document.createTextNode(d),t.appendChild(d),c=d),s===l-1&&(a=!1,-1===b.indexOf(i)&&-1===w.indexOf(i)?""===(o=c.nodeValue.replace(_,"").replace(m,"").replace(v,"").replace(y," "))?t.removeChild(c):c.nodeValue=o:-1===w.indexOf(i)&&(r=0===s?"":" ",o=c.nodeValue.replace(_,r).replace(g," ").replace(m,"").replace(v,"").replace(y," "),c.nodeValue=o));else if(d&&d.nodeType){a&&(a=!1,-1===b.indexOf(i)&&-1===w.indexOf(i)?""===(o=c.nodeValue.replace(_,"").replace(v,"").replace(y," "))?t.removeChild(c):c.nodeValue=o:-1===w.indexOf(i)&&(o=c.nodeValue.replace(g," ").replace(_,"").replace(v,"").replace(y," "),c.nodeValue=o));var u=d.nodeName;u&&(i=u.toLowerCase()),t.appendChild(d)}}}};var x=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},k='<axa-icon icon="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>',O=function(e){var n,o,i,a,s=e.title,l=e.items,d=e.size,c=e.value;return(i=document.createElement("div")).setAttribute("tabindex","0"),i.setAttribute("class",""+String(f("m-dropdown__select-wrap",r({},"m-dropdown__select-wrap--"+d,d)))),C(i,["\n    ",(n=document.createElement("select"),n.setAttribute("class",""+String(f("m-dropdown__select",r({},"m-dropdown__select--"+d,d)))),C(n,["\n    ",s&&(a=document.createElement("option"),a.setAttribute("value",""),a.setAttribute("disabled","disabled"),a.setAttribute("hidden","hidden"),a.setAttribute("selected","selected"),a.setAttribute("class","m-dropdown__select-option--hidden"),C(a,[s]),a),"\n    ",Array.isArray(l)&&l.map(function(e){var n,o=e.name,r=e.value,i=e.url;return(n=document.createElement("option")).setAttribute("value",""+String(r)),n.setAttribute("data-url",""+String(i)),function e(n,o,r){if("object"!==(void 0===o?"undefined":t(o)))o&&("className"===o&&(o="class"),"htmlFor"===o&&(o="for"),"on"===o.slice(0,2)?n[o]=r:(!0===r&&(r=o),n.setAttribute(o,r)));else for(var i in o)o.hasOwnProperty(i)&&e(n,i,o[i])}(n,r===c?"selected":"",r===c?"selected":""),C(n,[o]),n}),"\n    "]),n),"\n    ",(o=document.createElement("div"),o.setAttribute("class",""+String(f("m-dropdown__select-icon",r({},"m-dropdown__select-icon--"+d,d)))),C(o,[x(k)]),o),"\n  "]),i},A=function(e){var t,n,o,i,a,s,d,c,u,p,h,v=e.native,_=l(e,["native"]);return v?O(_):(c=(t=_).title,u=t.items,p=t.size,h=t.value,[(n=document.createElement("button"),n.setAttribute("type","button"),n.setAttribute("class",""+String(f("m-dropdown__toggle js-dropdown__toggle",r({},"m-dropdown__toggle--"+p,p)))),C(n,["\n    ",(i=h,a=u,s=c,d=a.filter(function(e,t){var n=e.value;return void 0===n&&(n=t),""+n==""+i}),(1===d.length?d[0].name:s)||""),x(k),"\n  "]),n),(o=document.createElement("ul"),o.setAttribute("class","m-dropdown__content"),C(o,["\n    ",Array.isArray(u)&&u.map(function(e,t){var n,o,r=e.name,i=e.url,a=e.value;return(o=document.createElement("li")).setAttribute("class","m-dropdown__item"),C(o,["\n        ",(n=document.createElement("a"),n.setAttribute("data-index",""+String(a||t)),n.setAttribute("data-selected",""+String(a===h?"true":"false")),n.setAttribute("href",""+String(i)),n.setAttribute("class","m-dropdown__link js-dropdown__link"),C(n,[r]),n),"\n      "]),o}),"\n  "]),o)])},E={},N=function(e){return e in E||(E[e]=0),++E[e]},T=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var d=l.preventDefault;return l.preventDefault=function(){d.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function j(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new T(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var P=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),S=/^\s+|\s{2,}|\s+$/g;function D(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function L(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=M.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(R,[])),i&&(e.className+=" "+i.join(" "))}}function R(e,t){var n=t.className;return t.hasClass||e.push(n),e}function M(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=D(e).test(t);r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}function I(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=M.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(U,[])),i){var a=e.className;e.className=i.reduce(z,a)}}}function U(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function z(e,t){var n=D(t,"g");return e.replace(n," ").replace(S," ")}var V=/\s+/,F={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function H(e,n,o,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,d=void 0===l||l;if(F[n]&&(n=F[n]),!e||!n)return null;var c=void 0===o?"undefined":t(o),u=o&&"string"===c;if("function"===c){if(r){var p=r;s=p.capture,d=p.passive}r=o}for(var f=P?{capture:s,passive:d}:s,h=u?function(t){var n=t.target;for(;!M(n,o)&&n!==e;)n=n.parentNode;if(n!==e)return r(t,n)}:r,v=n.split(V),_=v.length,m=0;m<_;++m)e.addEventListener(v[m],h,f);return function t(){for(var n=0;n<_;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,d=void 0,c=void 0,u=void 0,f=void 0,h=!1,v=t!==l,_=!1!==l;function m(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return d=o,v&&(c&&clearTimeout(c),c=setTimeout(g,t)),_&&!u&&(u=setTimeout(y,l)),r&&!h&&(h=!0,f=e.apply(void 0,p(d))),f}return m.flush=function(){(c||u)&&(f=e.apply(void 0,p(d)));return w(),f},m.cancel=w,m;function g(){u&&clearTimeout(u),b()}function y(){c&&clearTimeout(c),b()}function b(){a&&(f=e.apply(void 0,p(d))),c=null,u=null,h=!1}function w(){c&&(clearTimeout(c),c=null),u&&(clearTimeout(u),u=null),d=void 0,h=!1}}var q={};function W(e,t){var n=H(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);q[e]||(q[e]={count:0});var o,r=q[e];return r.count++,r.onsubscribe||(r.onsubscribe=K((o=e,function(){j(document,"pubsub/onsubscribe",o),j(document,"pubsub/onsubscribe/"+o,o),q[o]&&delete q[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete q[e]}}H(document,"pubsub/onsubscribe",function(e){var t=e.detail;q[t]||(q[t]={count:0});var n=q[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=u(e,3),n=t[0],o=t[1],r=t[2];j(r,n,o)}),delete n.queue)});var $,G=function(e,t){return e===t},B=(($=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?$.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,o){var r;n(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+o.nodeName+"#"+o._id+" and evaluates to -> "+o[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),l=2;l<a;l++)s[l-2]=arguments[l];var c=d(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,i].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return s(t,e),t}(Error)),Z=/[A-Z]/g;function J(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var X=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function Y(e,t){var n=e;if(e&&t!==e){if(X.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var Q=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,ee=/[-_]+/g;function te(e){return e.replace(Q,ne)}function ne(e,t){return 0==+e||ee.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function oe(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=Y(n,t)}var re=["title","checked","disabled"],ie=[];var ae=1,se=3,le=8;function de(e,t){var n=e.nodeType,o=e.nodeName;n===ae&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,i=null,a=null,s=null,l=o.length-1;l>=0;--l)if(s=o[l],a=s.name,r=s.namespaceURI,i=s.value,r){var d=s.localName;t.getAttributeNS(r,d||a)!==i&&t.setAttributeNS(r,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;c>=0;--c)!1!==(s=n[c]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==se&&n!==le||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ce(e,t,"checked"),ce(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ce(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ce(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ue=3;function pe(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(de(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(fe(o,n))(r=pe(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(fe(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=pe(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=pe(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function fe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ue&&e.nodeValue===t.nodeValue)}var he=function(e){function t(e){var o;n(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];var l=d(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return s(t,e),t}(Error);function ve(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ve.prototype,HTMLElement.prototype),Object.setPrototypeOf(ve,HTMLElement);var _e=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function r(){var e,t,o;n(this,r);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=o=d(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=W("context/available",o._makeContextReady)},d(o,t)}return s(r,e),o(r,[{key:"connectedCallback",value:function(){a(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&a(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){a(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this)&&a(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;q[e]||(q[e]={count:0,queue:[]});var o=q[e].queue;Array.isArray(o)?o.push([e,t,n]):j(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),r}()},function(e){return function(t){function r(){return n(this,r),d(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return s(r,e),o(r,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):a(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerHTML",e,this)}}]),r}()},function(e){return function(t){function r(e){n(this,r);var t=d(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));t._reduceProps=function(e,n){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[n];if(-1===re.indexOf(n)&&a)throw new B(n,t);var s="_"+n,l=o[n],d=t[s];return i||t.shouldUpdateCallback(l,d)?(t[s]=l,t._props[n]=l,a&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,l,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=K(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=te(e),r=o in t;if(-1===re.indexOf(o)&&r)throw new B(o,t);t._hasKeys[o]=r,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,r&&c(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return s(r,e),o(r,[{key:"connectedCallback",value:function(){var e=this;if(a(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&a(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=te(t);if(e.hasAttribute(t)){var o=oe(e,t),i=e._hasKeys[n];e._props[n]=o,i&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[te(e)]=Y(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(Z,J))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),r}()},function(e){return function(r){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=l(e,["template"]);n(this,i);var r=d(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return s(i,e),o(i,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var o=this._template;try{if(n){for(var r=document.createDocumentFragment(),s=[];this.firstChild;)s.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=s,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});var l=o(this._props,this.childrenFragment),d=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){d.appendChild(e)});else if(l){if("string"==typeof l)throw new he(this);d.appendChild(l)}if(n)a(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,d);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(d),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");pe(n,e)}(this,c),function(){for(var e=void 0;e=ie.pop();)delete e.isSameNode;ie=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),i}()},function(e){return function(t){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,i=l(e,["styles"]);n(this,r);var a=d(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return a._styles=o,a}return s(r,e),o(r,[{key:"connectedCallback",value:function(){a(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&a(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()})(function(e){function t(e){n(this,t);var o=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o._id=N(o.nodeName),o}return s(t,ve),o(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),me={},ge=function(e){function t(){var e,o,r;n(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},d(r,o)}return s(t,_e),o(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_e.uuidv4();if(e&&!me[t]){var n=document.createElement("style"),o=document.createTextNode(e);me[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ye=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function be(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,d=H(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return ye&&(l.style.cursor="pointer"),d}var we=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","keyup","enter","move","leave","Escape","Esc"),Ce="data-prevent-default",xe=function(){function e(t){var o=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this._handleClick=function(e,t){o.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!o._lastToggleNode,r=t!==o._lastToggleNode,i=!n&&!r;n?(o._notify(we.ENTER,t),o._onInteractive()):r&&o._notify(we.MOVE,t,o._lastToggleNode),o._lastToggleNode=t,i&&o._options.sameClickClose&&o._close()},this._handleClose=function(e,t){o.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),o._close()},this._handleKeyUp=function(e){(e.key===we.ESCAPE||e.key===we.ESC||27===e.keyCode)&&(e.preventDefault(),o._close())},this._init(t,r)}return o(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=i({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=H(this._container,we.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=H(this._container,we.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=be(this._container,we.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=H(this._container.ownerDocument,we.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ce)?oe(e,Ce):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(we.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e}();xe.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ke,Oe=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Ae=function(){var e=window.requestAnimationFrame||window[Oe+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),r=setTimeout(function(){e(n+o)},o);return t=n+o,r}}return e}(),Ee=(ke=(ke=window.cancelAnimationFrame||window[Oe+"CancelAnimationFrame"]||window[Oe+"CancelRequestAnimationFrame"])?ke.bind(window):function(e){clearTimeout(e)},function(e){function t(e,o){n(this,t),o=i({},t.DEFAULTS,o);var r=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return r.handleTransitionEnd=function(e){"height"===e.propertyName&&(r._removeHeightOnElement(e.target),r.offInteractive(),I(r.wcNode,r.options.isAnimatingClass))},r.handleClick=function(e){if(e.preventDefault(),r.offClicks(),r.wcNode.getAttribute("value")===e.target.dataset.index)r.leave(r.lastToggleNode),r.deleteLastToggleNode();else{var t=e.target.dataset.index;r.wcNode.setAttribute("value",t)}},r.options=o,r.wcNode=e,r.isOpen=!1,r.unClicks=[],r.elements=[].slice.call(r.wcNode.querySelectorAll("."+r.options.selectClass)),r}return s(t,xe),o(t,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=H(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"onClicks",value:function(){var e=this;this.offClicks(),this.elements.forEach(function(t){return e.unClicks.push(H(t,we.CLICK,"",e.handleClick,{capture:!0,passive:!1}))})}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"offClicks",value:function(){this.unClicks&&this.unClicks.forEach(function(e){return e()})}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;if(!this.isOpen){this.isOpen=!0,L(t,this.options.isAnimatingClass),n.style.overflow="scroll";var o=n.scrollHeight;n.style.overflow="",this.onInteractive(),this.onClicks(),n.style.height=o+"px",L(t,this.options.isOpenClass)}}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,r=o.scrollHeight;this.isOpen&&(this.isOpen=!1,this.onInteractive(),this.onClicks(),L(n,this.options.isAnimatingClass),Ae(function(){o.style.height=r+"px",Ae(function(){I(n,t.options.isOpenClass),o.style.height=0})}))}},{key:"_removeHeightOnElement",value:function(e){this.isOpen&&(e.style.height="")}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",I(e,this.options.isOpenClass))}},{key:"destroy",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),t}());Ee.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open",isAnimatingClass:"is-dropdown-animating",selectClass:"js-dropdown__link"};var Ne,Te,je,Pe=function(e){function t(){return n(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:h,template:A}))}return s(t,ge),o(t,null,[{key:"observedAttributes",get:function(){return["in-flow","items","native","size","title","value"]}}]),o(t,[{key:"willRenderCallback",value:function(){var e=this.inFlow,t=this.size,n=this.gpu;this.className=f(this.initialClassName,"m-dropdown js-dropdown",r({"m-dropdown--in-flow":e,"m-dropdown--gpu":n},"m-dropdown--"+t,t))}},{key:"didRenderCallback",value:function(){this.dropDown&&this.dropDown.destroy(),this.dropDown=new Ee(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){this.dropDown&&(this.dropDown.destroy(),delete this.dropDown)}}]),t}();return Pe.tagName="axa-dropdown",Ne=function(){window.customElements.define(Pe.tagName,Pe),ge.appendGlobalStyles(h)},Te=0,je=function(){if(0===Te)try{Ne.apply(void 0,arguments),Te+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",je,!1),document.addEventListener("WebComponentsReady",je,!1),Pe}();
