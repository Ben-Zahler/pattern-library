var StyleGuideWebComponent=function(){"use strict";function e(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new o(t,l({},r,{detail:n}));e.dispatchEvent(i)}function t(e,t,n,r){function o(){for(var t=0;t<c;++t)e.removeEventListener(u[t],l,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,o)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(h[t]&&(t=h[t]),!e||!t)return null;var s=void 0===n?"undefined":i(n);"function"===s&&(a=!!r,r=n);for(var l=n&&"string"===s?function(t){for(var o=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,u=t.split(d),c=u.length,f=0;f<c;++f)e.addEventListener(u[f],l,a);return o}function n(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var r=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,o=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(function(){function e(e){this.value=e}function t(t){function n(o,i){try{var a=t[o](i),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(e,t){return new Promise(function(r,a){var s={key:e,arg:t,resolve:r,reject:a,next:null};i?i=i.next=s:(o=i=s,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=/\s+/,h={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(o=n[i],void 0!==e[o])return t[o];return null}()},m={};t(document,"pubsub/onsubscribe",function(t){var n=t.detail;m[n]||(m[n]={count:0});var r=m[n],o=r.queue;Array.isArray(o)&&(o.forEach(function(t){var n=f(t,3),r=n[0],o=n[1];e(n[2],r,o)}),delete r.queue)}),Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement);var v={},y=function(o){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];a(this,i);var n=c(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return u(i,n),s(i,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,o=n.length,i=0;i<o;++i){var a=n[i];t[a.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(r.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(a)}return t}(this),n);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;m[t]||(m[t]={count:0,queue:[]});var o=m[t].queue;Array.isArray(o)?o.push([t,n,r]):e(r,t,n)}("context/enabled",t)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var n=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(n,r){var o=t(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n,r);m[n]||(m[n]={count:0});var i=m[n];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return d=r,b&&(h&&clearTimeout(h),h=setTimeout(function(){m&&clearTimeout(m),n()},o)),g&&!m&&(m=setTimeout(function(){h&&clearTimeout(h),n()},f)),s&&!y&&(y=!0,v=e.apply(void 0,p(d))),v}function n(){u&&(v=e.apply(void 0,p(d))),h=null,m=null,y=!1}function r(){h&&(clearTimeout(h),h=null),m&&(clearTimeout(m),m=null),d=void 0,y=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,s=void 0!==a&&a,l=i.trailing,u=void 0===l||l,c=i.maxWait,f=void 0!==c&&c,d=void 0,h=void 0,m=void 0,v=void 0,y=!1,b=o!==f,g=!1!==f;return t.flush=function(){return(h||m)&&(v=e.apply(void 0,p(d))),r(),v},t.cancel=r,t}(function(t){return function(){e(document,"pubsub/onsubscribe",t),e(document,"pubsub/onsubscribe/"+t,t),m[t]&&delete m[t].unsubscribe}}(n),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete m[n]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),i}(),b=(function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,y),s(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,y),s(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.uuidv4();if(e&&!v[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),v[e]=!0}}}]),t}()),g=".m-footer-sub {\n  display: block;\n  background: #3032c1;\n  border-top: 1px solid rgba(255, 255, 255, 0.25); }\n\n.m-footer-sub__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .m-footer-sub__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-footer-sub__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-footer-sub__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-footer-sub__box {\n      max-width: 1140px; } }\n\n.m-footer-sub__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  @media (max-width: 991px) {\n    .m-footer-sub__row {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n",x=function(e){return function(t,n,r){for(var o in n)o in w&&(n[w[o]]=n[o],delete n[o]);return e(t,n,r)}},w={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},_=1,k=2,C=3,O=4,E=5,A=6,S=7,j=8,T=9,N=10,L=11,P=12,F=13,M=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),R=/\n[\s]+$/,D=/^\n[\s]+/,G=/[\s]+$/,z=/^[\s]+/,$=/[\n\s]+/g,q=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],V=["code","pre"],I=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===q.indexOf(i)&&-1===V.indexOf(i)?""===(r=c.nodeValue.replace(D,"").replace(G,"").replace(R,"").replace($," "))?t.removeChild(c):c.nodeValue=r:-1===V.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(D,o).replace(z," ").replace(G,"").replace(R,"").replace($," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===q.indexOf(i)&&-1===V.indexOf(i)?""===(r=c.nodeValue.replace(D,"").replace(R,"").replace($," "))?t.removeChild(c):c.nodeValue=r:-1===V.indexOf(i)&&(r=c.nodeValue.replace(z," ").replace(D,"").replace(R,"").replace($," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},W=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(e,t,i){var l;-1!==s.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)l=document.createElementNS(u,e);else{if(e===a)return document.createComment(t.comment);l=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var f=c.toLowerCase(),p=t[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?l[c]=p:u?"xlink:href"===c?l.setAttributeNS(r,c,p):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,p):l.setAttribute(c,p)}return I(l,i),l}var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":i(e))?e:r("",e)}t||(t={});var r=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=x(e)),function(o){function a(e){var n=[];s===S&&(s=O);for(var r=0;r<e.length;r++){var o=e.charAt(r);s===_&&"<"===o?(l.length&&n.push([_,l]),l="",s=k):">"!==o||function(e){return e===T||e===N}(s)||s===F?s===F&&/-$/.test(l)&&"-"===o?(t.comments&&n.push([j,l.substr(0,l.length-1)],[C]),l="",s=_):s===k&&/^!--$/.test(l)?(t.comments&&n.push([k,l],[E,"comment"],[L]),l=o,s=F):s===_||s===F?l+=o:s===k&&/\s/.test(o)?(n.push([k,l]),l="",s=O):s===k?l+=o:s===O&&/[^\s"'=/]/.test(o)?(s=E,l=o):s===O&&/\s/.test(o)?(l.length&&n.push([E,l]),n.push([P])):s===E&&/\s/.test(o)?(n.push([E,l]),l="",s=A):s===E&&"="===o?(n.push([E,l],[L]),l="",s=S):s===E?l+=o:s!==A&&s!==O||"="!==o?s!==A&&s!==O||/\s/.test(o)?s===S&&'"'===o?s=N:s===S&&"'"===o?s=T:s===N&&'"'===o?(n.push([j,l],[P]),l="",s=O):s===T&&"'"===o?(n.push([j,l],[P]),l="",s=O):s!==S||/\s/.test(o)?s===j&&/\s/.test(o)?(n.push([j,l],[P]),l="",s=O):s!==j&&s!==T&&s!==N||(l+=o):(s=j,r--):(n.push([P]),/[\w-]/.test(o)?(l+=o,s=E):s=O):(n.push([L]),s=S):(s===k?n.push([k,l]):s===E?n.push([E,l]):s===j&&l.length&&n.push([j,l]),n.push([C]),l="",s=_)}return s===_&&l.length?(n.push([_,l]),l=""):s===j&&l.length?(n.push([j,l]),l=""):s===N&&l.length?(n.push([j,l]),l=""):s===T&&l.length?(n.push([j,l]),l=""):s===E&&(n.push([E,l]),l=""),n}for(var s=_,l="",u=arguments.length,c=[],f=0;f<o.length;f++)if(f<u-1){var p=arguments[f+1],d=a(o[f]),h=s;h===N&&(h=j),h===T&&(h=j),h===S&&(h=j),h===O&&(h=E),d.push([0,h,p]),c.push.apply(c,d)}else c.push.apply(c,a(o[f]));for(var m=[null,{},[]],v=[[m,-1]],f=0;f<c.length;f++){var y=v[v.length-1][0],b=(d=c[f])[0];if(b===k&&/^\//.test(d[1]))D=v[v.length-1][1],v.length>1&&(v.pop(),v[v.length-1][0][2][D]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(b===k){var g=[d[1],{},[]];y[2].push(g),v.push([g,y[2].length-1])}else if(b===E||0===b&&d[1]===E){for(var x,w="";f<c.length;f++)if(c[f][0]===E)w=r(w,c[f][1]);else{if(0!==c[f][0]||c[f][1]!==E)break;if("object"!==i(c[f][2])||w)w=r(w,c[f][2]);else for(x in c[f][2])c[f][2].hasOwnProperty(x)&&!y[1][x]&&(y[1][x]=c[f][2][x])}c[f][0]===L&&f++;for(var R=f;f<c.length;f++)if(c[f][0]===j||c[f][0]===E)y[1][w]?""===c[f][1]||(y[1][w]=r(y[1][w],c[f][1])):y[1][w]=n(c[f][1]);else{if(0!==c[f][0]||c[f][1]!==j&&c[f][1]!==E){!w.length||y[1][w]||f!==R||c[f][0]!==C&&c[f][0]!==P||(y[1][w]=w.toLowerCase()),c[f][0]===C&&f--;break}y[1][w]?""===c[f][2]||(y[1][w]=r(y[1][w],c[f][2])):y[1][w]=n(c[f][2])}}else if(b===E)y[1][d[1]]=!0;else if(0===b&&d[1]===E)y[1][d[2]]=!0;else if(b===C){if(function(e){return M.test(e)}(y[0])&&v.length){var D=v[v.length-1][1];v.pop(),v[v.length-1][0][2][D]=e(y[0],y[1],y[2].length?y[2]:void 0)}}else if(0===b&&d[1]===_)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=r("",d[2])),Array.isArray(d[2][0])?y[2].push.apply(y[2],d[2]):y[2].push(d[2]);else if(b===_)y[2].push(d[1]);else if(b!==L&&b!==P)throw new Error("unhandled: "+b)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),B=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['<div class="m-footer-sub__box">\n    <div class="m-footer-sub__row">',"</div>\n  </div>"],['<div class="m-footer-sub__box">\n    <div class="m-footer-sub__row">',"</div>\n  </div>"]),H=function(e,t){return W(B,t)},J=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,g,H))}return u(t,b),s(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-footer-sub"}}]),t}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-footer-sub",J)}),J}();
