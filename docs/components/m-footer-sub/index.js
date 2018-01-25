var StyleGuideWebComponent=function(){"use strict";function e(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new s(t,u({},r,{detail:n}));e.dispatchEvent(o)}function t(e,t,n,r){function o(){for(var t=0;t<u;++t)e.removeEventListener(s[t],l,i);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,o)}var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(p[t]&&(t=p[t]),!e||!t)return null;var a=void 0===n?"undefined":c(n);"function"===a&&(i=!!r,r=n);for(var l=n&&"string"===a?function(t){for(var o=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,s=t.split(f),u=s.length,d=0;d<u;++d)e.addEventListener(s[d],l,i);return o}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var l=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,s=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=/\s+/,p={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(o=n[i],void 0!==e[o])return t[o];return null}()},d=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h={};t(document,"pubsub/onsubscribe",function(t){var n=t.detail;h[n]||(h[n]={count:0});var r=h[n],o=r.queue;Array.isArray(o)&&(o.forEach(function(t){var n=d(t,3),r=n[0],o=n[1];e(n[2],r,o)}),delete r.queue)});var m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.setPrototypeOf(a.prototype,HTMLElement.prototype),Object.setPrototypeOf(a,HTMLElement);var b={},v=function(s){function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];r(this,u);var n=o(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return i(u,a),m(u,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,r=n.length,o=0;o<r;++o){var i=n[o];t[i.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(l.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(i)}return t}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var o=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){"throwed"!==o.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;h[t]||(h[t]={count:0,queue:[]});var o=h[t].queue;Array.isArray(o)?o.push([t,n,r]):e(r,t,n)}("context/enabled",t)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var r=this,o=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,o)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(r,o){var i=t(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,r,o);h[r]||(h[r]={count:0});var a=h[r];return a.count++,a.onsubscribe||(a.onsubscribe=function(e){function t(){for(var t=arguments.length,o=Array(t),a=0;a<t;a++)o[a]=arguments[a];return d=o,y&&(h&&clearTimeout(h),h=setTimeout(function(){m&&clearTimeout(m),r()},i)),g&&!m&&(m=setTimeout(function(){h&&clearTimeout(h),r()},p)),s&&!v&&(v=!0,b=e.apply(void 0,n(d))),b}function r(){c&&(b=e.apply(void 0,n(d))),h=null,m=null,v=!1}function o(){h&&(clearTimeout(h),h=null),m&&(clearTimeout(m),m=null),d=void 0,v=!1}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=a.leading,s=void 0!==l&&l,u=a.trailing,c=void 0===u||u,f=a.maxWait,p=void 0!==f&&f,d=void 0,h=void 0,m=void 0,b=void 0,v=!1,y=i!==p,g=!1!==p;return t.flush=function(){return(h||m)&&(b=e.apply(void 0,n(d))),o(),b},t.cancel=o,t}(function(t){return function(){e(document,"pubsub/onsubscribe",t),e(document,"pubsub/onsubscribe/"+t,t),h[t]&&delete h[t].unsubscribe}}(r),100)),a.onsubscribe(),function(){a.count--,i.call(this),a.count<=0&&delete h[r]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),u}(),y=(function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}i(t,v),m(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,v),m(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.uuidv4();if(e&&!b[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),b[e]=!0}}}]),t}()),g=".m-footer-sub {\n  display: block;\n  background: #3032c1;\n  border-top: 1px solid rgba(255, 255, 255, 0.25); }\n\n.m-footer-sub__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .m-footer-sub__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-footer-sub__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-footer-sub__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-footer-sub__box {\n      max-width: 1140px; } }\n\n.m-footer-sub__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  @media (max-width: 991px) {\n    .m-footer-sub__row {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n",x=function(e){return function(t,n,r){for(var o in n)o in w&&(n[w[o]]=n[o],delete n[o]);return e(t,n,r)}},w={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C=1,k=2,O=3,E=4,A=5,S=6,j=7,T=8,N=9,L=10,P=11,F=12,M=13,R=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),D=/\n[\s]+$/,G=/^\n[\s]+/,z=/[\s]+$/,$=/^[\s]+/,q=/[\n\s]+/g,V=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],W=["code","pre"],B=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),l===s-1&&(a=!1,-1===V.indexOf(i)&&-1===W.indexOf(i)?""===(r=c.nodeValue.replace(G,"").replace(z,"").replace(D,"").replace(q," "))?t.removeChild(c):c.nodeValue=r:-1===W.indexOf(i)&&(o=0===l?"":" ",r=c.nodeValue.replace(G,o).replace($," ").replace(z,"").replace(D,"").replace(q," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===V.indexOf(i)&&-1===W.indexOf(i)?""===(r=c.nodeValue.replace(G,"").replace(D,"").replace(q," "))?t.removeChild(c):c.nodeValue=r:-1===W.indexOf(i)&&(r=c.nodeValue.replace($," ").replace(G,"").replace(D,"").replace(q," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},I=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(e,t,l){var s;-1!==a.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)s=document.createElementNS(u,e);else{if(e===i)return document.createComment(t.comment);s=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var f=c.toLowerCase(),p=t[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?s[c]=p:u?"xlink:href"===c?s.setAttributeNS(r,c,p):/^xmlns($|:)/i.test(c)||s.setAttributeNS(null,c,p):s.setAttribute(c,p)}return B(s,l),s}var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":_(e))?e:r("",e)}t||(t={});var r=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=x(e)),function(o){function i(e){var n=[];a===j&&(a=E);for(var r=0;r<e.length;r++){var o=e.charAt(r);a===C&&"<"===o?(l.length&&n.push([C,l]),l="",a=k):">"!==o||function(e){return e===N||e===L}(a)||a===M?a===M&&/-$/.test(l)&&"-"===o?(t.comments&&n.push([T,l.substr(0,l.length-1)],[O]),l="",a=C):a===k&&/^!--$/.test(l)?(t.comments&&n.push([k,l],[A,"comment"],[P]),l=o,a=M):a===C||a===M?l+=o:a===k&&/\s/.test(o)?(n.push([k,l]),l="",a=E):a===k?l+=o:a===E&&/[^\s"'=/]/.test(o)?(a=A,l=o):a===E&&/\s/.test(o)?(l.length&&n.push([A,l]),n.push([F])):a===A&&/\s/.test(o)?(n.push([A,l]),l="",a=S):a===A&&"="===o?(n.push([A,l],[P]),l="",a=j):a===A?l+=o:a!==S&&a!==E||"="!==o?a!==S&&a!==E||/\s/.test(o)?a===j&&'"'===o?a=L:a===j&&"'"===o?a=N:a===L&&'"'===o?(n.push([T,l],[F]),l="",a=E):a===N&&"'"===o?(n.push([T,l],[F]),l="",a=E):a!==j||/\s/.test(o)?a===T&&/\s/.test(o)?(n.push([T,l],[F]),l="",a=E):a!==T&&a!==N&&a!==L||(l+=o):(a=T,r--):(n.push([F]),/[\w-]/.test(o)?(l+=o,a=A):a=E):(n.push([P]),a=j):(a===k?n.push([k,l]):a===A?n.push([A,l]):a===T&&l.length&&n.push([T,l]),n.push([O]),l="",a=C)}return a===C&&l.length?(n.push([C,l]),l=""):a===T&&l.length?(n.push([T,l]),l=""):a===L&&l.length?(n.push([T,l]),l=""):a===N&&l.length?(n.push([T,l]),l=""):a===A&&(n.push([A,l]),l=""),n}for(var a=C,l="",s=arguments.length,u=[],c=0;c<o.length;c++)if(c<s-1){var f=arguments[c+1],p=i(o[c]),d=a;d===L&&(d=T),d===N&&(d=T),d===j&&(d=T),d===E&&(d=A),p.push([0,d,f]),u.push.apply(u,p)}else u.push.apply(u,i(o[c]));for(var h=[null,{},[]],m=[[h,-1]],c=0;c<u.length;c++){var b=m[m.length-1][0],v=(p=u[c])[0];if(v===k&&/^\//.test(p[1]))D=m[m.length-1][1],m.length>1&&(m.pop(),m[m.length-1][0][2][D]=e(b[0],b[1],b[2].length?b[2]:void 0));else if(v===k){var y=[p[1],{},[]];b[2].push(y),m.push([y,b[2].length-1])}else if(v===A||0===v&&p[1]===A){for(var g,x="";c<u.length;c++)if(u[c][0]===A)x=r(x,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==A)break;if("object"!==_(u[c][2])||x)x=r(x,u[c][2]);else for(g in u[c][2])u[c][2].hasOwnProperty(g)&&!b[1][g]&&(b[1][g]=u[c][2][g])}u[c][0]===P&&c++;for(var w=c;c<u.length;c++)if(u[c][0]===T||u[c][0]===A)b[1][x]?""===u[c][1]||(b[1][x]=r(b[1][x],u[c][1])):b[1][x]=n(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==T&&u[c][1]!==A){!x.length||b[1][x]||c!==w||u[c][0]!==O&&u[c][0]!==F||(b[1][x]=x.toLowerCase()),u[c][0]===O&&c--;break}b[1][x]?""===u[c][2]||(b[1][x]=r(b[1][x],u[c][2])):b[1][x]=n(u[c][2])}}else if(v===A)b[1][p[1]]=!0;else if(0===v&&p[1]===A)b[1][p[2]]=!0;else if(v===O){if(function(e){return R.test(e)}(b[0])&&m.length){var D=m[m.length-1][1];m.pop(),m[m.length-1][0][2][D]=e(b[0],b[1],b[2].length?b[2]:void 0)}}else if(0===v&&p[1]===C)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=r("",p[2])),Array.isArray(p[2][0])?b[2].push.apply(b[2],p[2]):b[2].push(p[2]);else if(v===C)b[2].push(p[1]);else if(v!==P&&v!==F)throw new Error("unhandled: "+v)}if(h[2].length>1&&/^\s*$/.test(h[2][0])&&h[2].shift(),h[2].length>2||2===h[2].length&&/\S/.test(h[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(h[2][0])&&"string"==typeof h[2][0][0]&&Array.isArray(h[2][0][2])&&(h[2][0]=e(h[2][0][0],h[2][0][1],h[2][0][2])),h[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),H=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['<div class="m-footer-sub__box">\n    <div class="m-footer-sub__row">',"</div>\n  </div>"],['<div class="m-footer-sub__box">\n    <div class="m-footer-sub__row">',"</div>\n  </div>"]),J=function(e,t){return I(H,t)},Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,g,J))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,y),Z(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-footer-sub"}}]),t}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-footer-sub",K)}),K}();
