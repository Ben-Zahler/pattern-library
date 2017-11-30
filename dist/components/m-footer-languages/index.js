!function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(u.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}function n(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=(function(){function e(e){this.value=e}function t(t){function n(r,i){try{var a=t[r](i),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(e,t){return new Promise(function(o,a){var l={key:e,arg:t,resolve:o,reject:a,next:null};i?i=i.next=l:(r=i=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},f=e(function(e){!function(){function t(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":o(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(t.apply(null,i));else if("object"===a)for(var l in i)n.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),u=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement);var c={},p=function(e){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];r(this,o);var n=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n._initialise(e,t),n}return a(o,n),i(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var o=document.createDocumentFragment();this.firstChild;)o.appendChild(this.firstChild);var r=n(function(e){if(!e.hasAttributes)return null;for(var n={},o=e.attributes,r=o.length,i=0;i<r;++i){var a=o[i];n[a.name]=t(a)}return n}(this),o);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(r)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}(),h=(function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,p),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,p),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.uuidv4();if(e&&!c[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),c[e]=!0}}}]),t}()),g=".m-footer-languages {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  flex: 0 0 33.33333%;\n  display: block; }\n  @media (max-width: 991px) {\n    .m-footer-languages {\n      position: static;\n      width: auto;\n      max-width: none;\n      flex: auto; } }\n\n.m-footer-languages__title {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-footer-languages__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-footer-languages__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (max-width: 991px) {\n    .m-footer-languages__title {\n      display: none !important; } }\n\n.m-footer-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin-right: -10px;\n  margin-left: -10px; }\n  .m-footer-languages__list::before, .m-footer-languages__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-languages__list::after {\n    clear: both; }\n\n.m-footer-languages__list-item {\n  position: relative;\n  display: block;\n  float: left; }\n  .m-footer-languages__list-item::after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    display: block;\n    width: 1px;\n    height: 14px;\n    margin-top: -7px;\n    content: '';\n    background: rgba(255, 255, 255, 0.65); }\n  .m-footer-languages__list-item:first-child::after {\n    display: none; }\n\n.m-footer-languages__link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 16px 10px 17px;\n  color: rgba(255, 255, 255, 0.65);\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__link {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-footer-languages__link {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-footer-languages__link {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  .m-footer-languages__link:hover, .m-footer-languages__link:active, .m-footer-languages__link.is-selected {\n    color: #fff;\n    text-decoration: none; }\n\n.m-footer-languages--inline {\n  position: static;\n  width: auto;\n  max-width: none;\n  flex: auto; }\n  .m-footer-languages--inline .m-footer-languages__box {\n    display: flex;\n    align-items: center; }\n  .m-footer-languages--inline .m-footer-languages__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    display: block;\n    margin-right: 20px; }\n    @media (min-width: 576px) {\n      .m-footer-languages--inline .m-footer-languages__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n    @media (min-width: 768px) {\n      .m-footer-languages--inline .m-footer-languages__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n    @media (min-width: 992px) {\n      .m-footer-languages--inline .m-footer-languages__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n",m=function(e){return function(t,n,o){for(var r in n)r in d&&(n[d[r]]=n[r],delete n[r]);return e(t,n,o)}},d={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},y=1,x=2,v=3,_=4,b=5,w=6,k=7,O=8,C=9,S=10,A=11,j=12,P=13,z=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),E=/\n[\s]+$/,F=/^\n[\s]+/,N=/[\s]+$/,T=/^[\s]+/,L=/[\n\s]+/g,M=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],G=["code","pre"],D=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var f=n[l];if(Array.isArray(f))e(t,f);else{("number"==typeof f||"boolean"==typeof f||"function"==typeof f||f instanceof Date||f instanceof RegExp)&&(f=f.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof f)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=f:(f=document.createTextNode(f),t.appendChild(f),u=f),l===s-1&&(a=!1,-1===M.indexOf(i)&&-1===G.indexOf(i)?""===(o=u.nodeValue.replace(F,"").replace(N,"").replace(E,"").replace(L," "))?t.removeChild(u):u.nodeValue=o:-1===G.indexOf(i)&&(r=0===l?"":" ",o=u.nodeValue.replace(F,r).replace(T," ").replace(N,"").replace(E,"").replace(L," "),u.nodeValue=o));else if(f&&f.nodeType){a&&(a=!1,-1===M.indexOf(i)&&-1===G.indexOf(i)?""===(o=u.nodeValue.replace(F,"").replace(E,"").replace(L," "))?t.removeChild(u):u.nodeValue=o:-1===G.indexOf(i)&&(o=u.nodeValue.replace(T," ").replace(F,"").replace(E,"").replace(L," "),u.nodeValue=o));var c=f.nodeName;c&&(i=c.toLowerCase()),t.appendChild(f)}}}},R=e(function(e){function t(e,t,o){var s;-1!==l.indexOf(e)&&(t.namespace=n);var f=!1;if(t.namespace&&(f=t.namespace,delete t.namespace),f)s=document.createElementNS(f,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var c=u.toLowerCase(),p=t[u];if("classname"===c&&(c="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(c))if("true"===p)p=c;else if("false"===p)continue;"on"===c.slice(0,2)?s[u]=p:f?"xlink:href"===u?s.setAttributeNS(r,u,p):/^xmlns($|:)/i.test(u)||s.setAttributeNS(null,u,p):s.setAttribute(u,p)}return D(s,o),s}var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":o(e))?e:r("",e)}t||(t={});var r=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=m(e)),function(i){function a(e){var n=[];l===k&&(l=_);for(var o=0;o<e.length;o++){var r=e.charAt(o);l===y&&"<"===r?(s.length&&n.push([y,s]),s="",l=x):">"!==r||function(e){return e===C||e===S}(l)||l===P?l===P&&/-$/.test(s)&&"-"===r?(t.comments&&n.push([O,s.substr(0,s.length-1)],[v]),s="",l=y):l===x&&/^!--$/.test(s)?(t.comments&&n.push([x,s],[b,"comment"],[A]),s=r,l=P):l===y||l===P?s+=r:l===x&&/\s/.test(r)?(n.push([x,s]),s="",l=_):l===x?s+=r:l===_&&/[^\s"'=/]/.test(r)?(l=b,s=r):l===_&&/\s/.test(r)?(s.length&&n.push([b,s]),n.push([j])):l===b&&/\s/.test(r)?(n.push([b,s]),s="",l=w):l===b&&"="===r?(n.push([b,s],[A]),s="",l=k):l===b?s+=r:l!==w&&l!==_||"="!==r?l!==w&&l!==_||/\s/.test(r)?l===k&&'"'===r?l=S:l===k&&"'"===r?l=C:l===S&&'"'===r?(n.push([O,s],[j]),s="",l=_):l===C&&"'"===r?(n.push([O,s],[j]),s="",l=_):l!==k||/\s/.test(r)?l===O&&/\s/.test(r)?(n.push([O,s],[j]),s="",l=_):l!==O&&l!==C&&l!==S||(s+=r):(l=O,o--):(n.push([j]),/[\w-]/.test(r)?(s+=r,l=b):l=_):(n.push([A]),l=k):(l===x?n.push([x,s]):l===b?n.push([b,s]):l===O&&s.length&&n.push([O,s]),n.push([v]),s="",l=y)}return l===y&&s.length?(n.push([y,s]),s=""):l===O&&s.length?(n.push([O,s]),s=""):l===S&&s.length?(n.push([O,s]),s=""):l===C&&s.length?(n.push([O,s]),s=""):l===b&&(n.push([b,s]),s=""),n}for(var l=y,s="",f=arguments.length,u=[],c=0;c<i.length;c++)if(c<f-1){var p=arguments[c+1],h=a(i[c]),g=l;g===S&&(g=O),g===C&&(g=O),g===k&&(g=O),g===_&&(g=b),h.push([0,g,p]),u.push.apply(u,h)}else u.push.apply(u,a(i[c]));for(var m=[null,{},[]],d=[[m,-1]],c=0;c<u.length;c++){var E=d[d.length-1][0],F=(h=u[c])[0];if(F===x&&/^\//.test(h[1]))G=d[d.length-1][1],d.length>1&&(d.pop(),d[d.length-1][0][2][G]=e(E[0],E[1],E[2].length?E[2]:void 0));else if(F===x){var N=[h[1],{},[]];E[2].push(N),d.push([N,E[2].length-1])}else if(F===b||0===F&&h[1]===b){for(var T,L="";c<u.length;c++)if(u[c][0]===b)L=r(L,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==b)break;if("object"!==o(u[c][2])||L)L=r(L,u[c][2]);else for(T in u[c][2])u[c][2].hasOwnProperty(T)&&!E[1][T]&&(E[1][T]=u[c][2][T])}u[c][0]===A&&c++;for(var M=c;c<u.length;c++)if(u[c][0]===O||u[c][0]===b)E[1][L]?""===u[c][1]||(E[1][L]=r(E[1][L],u[c][1])):E[1][L]=n(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==O&&u[c][1]!==b){!L.length||E[1][L]||c!==M||u[c][0]!==v&&u[c][0]!==j||(E[1][L]=L.toLowerCase()),u[c][0]===v&&c--;break}E[1][L]?""===u[c][2]||(E[1][L]=r(E[1][L],u[c][2])):E[1][L]=n(u[c][2])}}else if(F===b)E[1][h[1]]=!0;else if(0===F&&h[1]===b)E[1][h[2]]=!0;else if(F===v){if(function(e){return z.test(e)}(E[0])&&d.length){var G=d[d.length-1][1];d.pop(),d[d.length-1][0][2][G]=e(E[0],E[1],E[2].length?E[2]:void 0)}}else if(0===F&&h[1]===y)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=r("",h[2])),Array.isArray(h[2][0])?E[2].push.apply(E[2],h[2]):E[2].push(h[2]);else if(F===y)E[2].push(h[1]);else if(F!==A&&F!==j)throw new Error("unhandled: "+F)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),V=s(['<aside class="m-footer-languages__box">\n    ','\n    \n    <ul class="m-footer-languages__list">\n      ',"\n    </ul>\n  </aside>\n"],['<aside class="m-footer-languages__box">\n    ','\n    \n    <ul class="m-footer-languages__list">\n      ',"\n    </ul>\n  </aside>\n"]),$=s(['<strong class="m-footer-languages__title">',"</strong>"],['<strong class="m-footer-languages__title">',"</strong>"]),B=s(['\n        <li class="m-footer-languages__list-item">\n          <a class="m-footer-languages__link" href="','" lang="','">',"</a>\n        </li>\n      "],['\n        <li class="m-footer-languages__list-item">\n          <a class="m-footer-languages__link" href="','" lang="','">',"</a>\n        </li>\n      "]),q=function(e){var t=e.title,n=e.items,o=e.short;return R(V,t&&R($,t),n.map(function(e){var t=e.name,n=e.code,r=e.url;return R(B,r,n,o?n:t)}))},I=function(e){function n(){return r(this,n),l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,g,q))}return a(n,h),i(n,[{key:"connectedCallback",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=t(this,"inline");this.className=f("m-footer-languages",{"m-footer-languages--inline":e})}}]),n}();window.customElements.define("axa-footer-languages",I)}();
