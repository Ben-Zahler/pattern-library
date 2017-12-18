!function(){"use strict";function n(n,e){return e={exports:{}},n(e,e.exports),e.exports}function e(n,e,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new Z(e,s({},i,{detail:t}));n.dispatchEvent(o)}function t(n,e,t,i){function a(){for(var e=0;e<c;++e)n.removeEventListener(u[e],l,r);!function(n,e){if(!n)return!1;for(var t=Object.keys(n),i=t.length,o=0;o<i;++o){var a=t[o];if(n[a]===e)return delete n[a]}}(this,a)}var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Q[e]&&(e=Q[e]),!n||!e)return null;var s=void 0===t?"undefined":o(t);"function"===s&&(r=!!i,i=t);for(var l=t&&"string"===s?function(e){for(var o=e.target;!function(n,e){return function(n,e){return new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",e)}(e).test(n.className)}(o,t)&&o!==n;)o=o.parentNode;if(o!==n)return i(e,o)}:i,u=e.split(K),c=u.length,f=0;f<c;++f)n.addEventListener(u[f],l,r);return a}function i(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a=(function(){function n(n){this.value=n}function e(e){function t(o,a){try{var r=e[o](a),s=r.value;s instanceof n?Promise.resolve(s.value).then(function(n){t("next",n)},function(n){t("throw",n)}):i(r.done?"return":"normal",r.value)}catch(n){i("throw",n)}}function i(n,e){switch(n){case"return":o.resolve({value:e,done:!0});break;case"throw":o.reject(e);break;default:o.resolve({value:e,done:!1})}(o=o.next)?t(o.key,o.arg):a=null}var o,a;this._invoke=function(n,e){return new Promise(function(i,r){var s={key:n,arg:e,resolve:i,reject:r,next:null};a?a=a.next=s:(o=a=s,t(n,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(n){return this._invoke("next",n)},e.prototype.throw=function(n){return this._invoke("throw",n)},e.prototype.return=function(n){return this._invoke("return",n)}}(),function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}),r=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},l=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},u=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e},c=function(){return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],i=!0,o=!1,a=void 0;try{for(var r,s=n[Symbol.iterator]();!(i=(r=s.next()).done)&&(t.push(r.value),!e||t.length!==e);i=!0);}catch(n){o=!0,a=n}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},d=function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)},p=n(function(n){!function(){function e(){for(var n=[],i=0;i<arguments.length;i++){var a=arguments[i];if(a){var r=void 0===a?"undefined":o(a);if("string"===r||"number"===r)n.push(a);else if(Array.isArray(a))n.push(e.apply(null,a));else if("object"===r)for(var s in a)t.call(a,s)&&a[s]&&n.push(s)}}return n.join(" ")}var t={}.hasOwnProperty;n.exports?n.exports=e:window.classNames=e}()}),h=".m-sub-navigation {\n  display: none;\n  background: #fff;\n  border-bottom: 2px solid #ccc; }\n  .is-open .m-sub-navigation {\n    display: block; }\n\n.m-sub-navigation--flyout {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 2px; }\n\n.m-sub-navigation__index {\n  background: #fafafa; }\n\n.m-sub-navigation__index-box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-sub-navigation__index-box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-sub-navigation__index-box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-sub-navigation__index-box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-sub-navigation__index-box {\n      max-width: 1140px; } }\n\n.m-sub-navigation__index-link {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word; }\n  @media (min-width: 576px) {\n    .m-sub-navigation__index-link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .m-sub-navigation__index-link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .m-sub-navigation__index-link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  .m-sub-navigation__index-link:hover, .m-sub-navigation__index-link:active, .m-sub-navigation__index-link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n\n.m-sub-navigation__index-close {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding-right: 44px;\n  margin-left: auto;\n  text-transform: uppercase;\n  border: none;\n  background: transparent;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-sub-navigation__index-close {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-sub-navigation__index-close {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-sub-navigation__index-close {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-sub-navigation__index-close:hover, .m-sub-navigation__index-close:active, .m-sub-navigation__index-close:focus {\n    color: #00005b;\n    cursor: pointer;\n    outline: none; }\n\n.m-sub-navigation__index-close__icon {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  display: block;\n  width: 23px;\n  height: 23px;\n  margin-top: -11.5px;\n  fill: currentColor; }\n\n.m-sub-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  padding-top: 30px;\n  padding-bottom: 40px; }\n  @media (min-width: 576px) {\n    .m-sub-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-sub-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-sub-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-sub-navigation__box {\n      max-width: 1140px; } }\n\n.m-sub-navigation__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -30px;\n  margin-left: -30px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .m-sub-navigation__row + .m-sub-navigation__row > .m-sub-navigation__block {\n    padding-top: 30px; }\n\n.m-sub-navigation__row--col-2 {\n  margin-right: -45px;\n  margin-left: -45px; }\n\n.m-sub-navigation__row--col-3 {\n  margin-right: -65px;\n  margin-left: -65px; }\n\n.m-sub-navigation__block {\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  padding: 0 30px;\n  border-left: 1px solid #ccc; }\n  .m-sub-navigation__block:first-child {\n    border: none; }\n  .m-sub-navigation__block:nth-last-child(2):first-child,\n  .m-sub-navigation__block:nth-last-child(2):first-child ~ * {\n    max-width: 25%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    padding-right: 45px;\n    padding-left: 45px; }\n  .m-sub-navigation__block:nth-last-child(3):first-child,\n  .m-sub-navigation__block:nth-last-child(3):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n\n.m-sub-navigation__block--wide:nth-last-child(2):first-child,\n.m-sub-navigation__block--wide:nth-last-child(2):first-child ~ * {\n  max-width: 50%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n\n.m-sub-navigation__category {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-sub-navigation__category {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 768px) {\n    .m-sub-navigation__category {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 992px) {\n    .m-sub-navigation__category {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n\n.m-sub-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-top: 15px; }\n\n.m-sub-navigation__list-item {\n  display: block; }\n\n.m-sub-navigation__link {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  display: inline-block;\n  padding: 4px 0;\n  line-height: 1.3 !important; }\n  @media (min-width: 576px) {\n    .m-sub-navigation__link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .m-sub-navigation__link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .m-sub-navigation__link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  .m-sub-navigation__link:hover, .m-sub-navigation__link:active, .m-sub-navigation__link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n",m=function(n){return function(e,t,i){for(var o in t)o in g&&(t[g[o]]=t[o],delete t[o]);return n(e,t,i)}},g={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},v=1,b=2,x=3,y=4,_=5,w=6,k=7,C=8,O=9,A=10,E=11,T=12,N=13,S=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),j=/\n[\s]+$/,L=/^\n[\s]+/,P=/[\s]+$/,z=/^[\s]+/,M=/[\n\s]+/g,F=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],R=["code","pre"],D=function n(e,t){if(Array.isArray(t))for(var i,o,a=e.nodeName.toLowerCase(),r=!1,s=0,l=t.length;s<l;s++){var u=t[s];if(Array.isArray(u))n(e,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=e.childNodes[e.childNodes.length-1];if("string"==typeof u)r=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),e.appendChild(u),c=u),s===l-1&&(r=!1,-1===F.indexOf(a)&&-1===R.indexOf(a)?""===(i=c.nodeValue.replace(L,"").replace(P,"").replace(j,"").replace(M," "))?e.removeChild(c):c.nodeValue=i:-1===R.indexOf(a)&&(o=0===s?"":" ",i=c.nodeValue.replace(L,o).replace(z," ").replace(P,"").replace(j,"").replace(M," "),c.nodeValue=i));else if(u&&u.nodeType){r&&(r=!1,-1===F.indexOf(a)&&-1===R.indexOf(a)?""===(i=c.nodeValue.replace(L,"").replace(j,"").replace(M," "))?e.removeChild(c):c.nodeValue=i:-1===R.indexOf(a)&&(i=c.nodeValue.replace(z," ").replace(L,"").replace(j,"").replace(M," "),c.nodeValue=i));var f=u.nodeName;f&&(a=f.toLowerCase()),e.appendChild(u)}}}},G=n(function(n){function e(n,e,o){var l;-1!==s.indexOf(n)&&(e.namespace=t);var u=!1;if(e.namespace&&(u=e.namespace,delete e.namespace),u)l=document.createElementNS(u,n);else{if(n===r)return document.createComment(e.comment);l=document.createElement(n)}for(var c in e)if(e.hasOwnProperty(c)){var f=c.toLowerCase(),d=e[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==a.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?l[c]=d:u?"xlink:href"===c?l.setAttributeNS(i,c,d):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,d):l.setAttribute(c,d)}return D(l,o),l}var t="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",a=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];n.exports=function(n,e){function t(n){return"function"==typeof n?n:"string"==typeof n?n:n&&"object"===(void 0===n?"undefined":o(n))?n:i("",n)}e||(e={});var i=e.concat||function(n,e){return String(n)+String(e)};return!1!==e.attrToProp&&(n=m(n)),function(a){function r(n){var t=[];s===k&&(s=y);for(var i=0;i<n.length;i++){var o=n.charAt(i);s===v&&"<"===o?(l.length&&t.push([v,l]),l="",s=b):">"!==o||function(n){return n===O||n===A}(s)||s===N?s===N&&/-$/.test(l)&&"-"===o?(e.comments&&t.push([C,l.substr(0,l.length-1)],[x]),l="",s=v):s===b&&/^!--$/.test(l)?(e.comments&&t.push([b,l],[_,"comment"],[E]),l=o,s=N):s===v||s===N?l+=o:s===b&&/\s/.test(o)?(t.push([b,l]),l="",s=y):s===b?l+=o:s===y&&/[^\s"'=/]/.test(o)?(s=_,l=o):s===y&&/\s/.test(o)?(l.length&&t.push([_,l]),t.push([T])):s===_&&/\s/.test(o)?(t.push([_,l]),l="",s=w):s===_&&"="===o?(t.push([_,l],[E]),l="",s=k):s===_?l+=o:s!==w&&s!==y||"="!==o?s!==w&&s!==y||/\s/.test(o)?s===k&&'"'===o?s=A:s===k&&"'"===o?s=O:s===A&&'"'===o?(t.push([C,l],[T]),l="",s=y):s===O&&"'"===o?(t.push([C,l],[T]),l="",s=y):s!==k||/\s/.test(o)?s===C&&/\s/.test(o)?(t.push([C,l],[T]),l="",s=y):s!==C&&s!==O&&s!==A||(l+=o):(s=C,i--):(t.push([T]),/[\w-]/.test(o)?(l+=o,s=_):s=y):(t.push([E]),s=k):(s===b?t.push([b,l]):s===_?t.push([_,l]):s===C&&l.length&&t.push([C,l]),t.push([x]),l="",s=v)}return s===v&&l.length?(t.push([v,l]),l=""):s===C&&l.length?(t.push([C,l]),l=""):s===A&&l.length?(t.push([C,l]),l=""):s===O&&l.length?(t.push([C,l]),l=""):s===_&&(t.push([_,l]),l=""),t}for(var s=v,l="",u=arguments.length,c=[],f=0;f<a.length;f++)if(f<u-1){var d=arguments[f+1],p=r(a[f]),h=s;h===A&&(h=C),h===O&&(h=C),h===k&&(h=C),h===y&&(h=_),p.push([0,h,d]),c.push.apply(c,p)}else c.push.apply(c,r(a[f]));for(var m=[null,{},[]],g=[[m,-1]],f=0;f<c.length;f++){var j=g[g.length-1][0],L=(p=c[f])[0];if(L===b&&/^\//.test(p[1]))R=g[g.length-1][1],g.length>1&&(g.pop(),g[g.length-1][0][2][R]=n(j[0],j[1],j[2].length?j[2]:void 0));else if(L===b){var P=[p[1],{},[]];j[2].push(P),g.push([P,j[2].length-1])}else if(L===_||0===L&&p[1]===_){for(var z,M="";f<c.length;f++)if(c[f][0]===_)M=i(M,c[f][1]);else{if(0!==c[f][0]||c[f][1]!==_)break;if("object"!==o(c[f][2])||M)M=i(M,c[f][2]);else for(z in c[f][2])c[f][2].hasOwnProperty(z)&&!j[1][z]&&(j[1][z]=c[f][2][z])}c[f][0]===E&&f++;for(var F=f;f<c.length;f++)if(c[f][0]===C||c[f][0]===_)j[1][M]?""===c[f][1]||(j[1][M]=i(j[1][M],c[f][1])):j[1][M]=t(c[f][1]);else{if(0!==c[f][0]||c[f][1]!==C&&c[f][1]!==_){!M.length||j[1][M]||f!==F||c[f][0]!==x&&c[f][0]!==T||(j[1][M]=M.toLowerCase()),c[f][0]===x&&f--;break}j[1][M]?""===c[f][2]||(j[1][M]=i(j[1][M],c[f][2])):j[1][M]=t(c[f][2])}}else if(L===_)j[1][p[1]]=!0;else if(0===L&&p[1]===_)j[1][p[2]]=!0;else if(L===x){if(function(n){return S.test(n)}(j[0])&&g.length){var R=g[g.length-1][1];g.pop(),g[g.length-1][0][2][R]=n(j[0],j[1],j[2].length?j[2]:void 0)}}else if(0===L&&p[1]===v)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=i("",p[2])),Array.isArray(p[2][0])?j[2].push.apply(j[2],p[2]):j[2].push(p[2]);else if(L===v)j[2].push(p[1]);else if(L!==E&&L!==T)throw new Error("unhandled: "+L)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=n(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(e,{comments:!0}),n.exports.default=n.exports,n.exports.createElement=e}),$=function(n){return"undefined"!=typeof window?function(){var e=document.createElement("div");return e.innerHTML=n,function(n){return Array.isArray(n)?n:[].slice.call(n)}(e.childNodes)}():function(){var e=new String(n);return e.__encoded=!0,e}()},q=f(['\n        <div class="m-sub-navigation__index">\n          <div class="m-sub-navigation__index-box">\n            ',"\n          </div>\n        </div>"],['\n        <div class="m-sub-navigation__index">\n          <div class="m-sub-navigation__index-box">\n            ',"\n          </div>\n        </div>"]),B=f(['\n      <div class="m-sub-navigation__box">\n        ',"\n      </div>\n    "],['\n      <div class="m-sub-navigation__box">\n        ',"\n      </div>\n    "]),V=f(['\n          <div class="m-sub-navigation__row m-sub-navigation__row--col-','">\n          ',"\n          </div>\n        "],['\n          <div class="m-sub-navigation__row m-sub-navigation__row--col-','">\n          ',"\n          </div>\n        "]),I=f(['\n            <div class="m-sub-navigation__block ','">\n              <strong class="m-sub-navigation__category">','</strong>\n              <ul class="m-sub-navigation__list">\n                ',"\n              </ul>\n            </div>\n          "],['\n            <div class="m-sub-navigation__block ','">\n              <strong class="m-sub-navigation__category">','</strong>\n              <ul class="m-sub-navigation__list">\n                ',"\n              </ul>\n            </div>\n          "]),W=f(['\n                  <li class="m-sub-navigation__list-item">\n                    <a class="m-sub-navigation__link" href="','">',"</a>\n                  </li>\n                "],['\n                  <li class="m-sub-navigation__list-item">\n                    <a class="m-sub-navigation__link" href="','">',"</a>\n                  </li>\n                "]),H=function(n,e){var t=n.items,i=[];return Array.isArray(t)&&(function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n.hasChildNodes()){var t=[1];e&&t.push(3);for(var i=n.childNodes,o=0;o<i.length;o++)if(t.indexOf(i[o].nodeType)>-1&&(i[o].textContent&&i[o].textContent.trim(" ").replace(/^\s*[\r\n]/gm,"")||i[o].innerHTML))return!0}return!1}(e,!0)&&i.push(G(q,e)),i.push(G(B,t&&t.map(function(n){var e=n.column,t=n.col,i=n.isWide;return G(V,t,e&&e.map(function(n){var e=n.boxes,t=n.title;return G(I,i?"m-sub-navigation__block--wide":"",t,e&&e.map(function(n){var e=n.url,t=n.name;return G(W,e,$(t))}))}))})))),i},J=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,Z=function(){function n(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.bubbles,i=void 0!==t&&t,o=e.cancelable,a=void 0!==o&&o,r=e.detail,s=void 0===r?void 0:r,l=document.createEvent("CustomEvent");l.initCustomEvent(n,i,a,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(n){this.defaultPrevented=!0}},l}try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(n){}return n}(),K=/\s+/,Q={transitionend:function(){for(var n=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(e),i=t.length,o=void 0,a=0;a<i;++a)if(o=t[a],void 0!==n[o])return e[o];return null}()},U={};t(document,"pubsub/onsubscribe",function(n){var t=n.detail;U[t]||(U[t]={count:0});var i=U[t],o=i.queue;Array.isArray(o)&&(o.forEach(function(n){var t=c(n,3),i=t[0],o=t[1];e(t[2],i,o)}),delete i.queue)}),Object.setPrototypeOf(i.prototype,HTMLElement.prototype),Object.setPrototypeOf(i,HTMLElement);var X={},Y=function(n){function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1];a(this,o);var t=u(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return t._makeContextReady=t._makeContextReady.bind(t),t._initialise(n,e),t}return l(o,i),r(o,[{key:"_initialise",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=n,this._template=e}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),t=document.createTextNode(this._styles);e.appendChild(t),n.insertAdjacentElement?n.insertAdjacentElement("afterbegin",e):n.appendChild(e)}}},{key:"render",value:function(){var n=this;if(!this._hasRendered){var e=this._template;if(e)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var i=e(function(n){if(!n.hasAttributes)return null;for(var e={},t=n.attributes,i=t.length,o=0;o<i;++o){var a=t[o];e[a.name]=function(n,e){if("function"==typeof n.hasAttribute&&!n.hasAttribute(e))return!1;var t=n.value;if(e?t=n.getAttribute(e):e=n.name,t&&e!==t){if(J.test(t))try{t=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else t=!0;return t}(a)}return e}(this),t);if(Array.isArray(i))i.forEach(function(e){n.appendChild(e)});else if(i){if("string"==typeof i){var o=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(i)}this._hasRendered=!0}catch(o){"throwed"!==o.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var n=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=n,function(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;U[n]||(U[n]={count:0,queue:[]});var o=U[n].queue;Array.isArray(o)?o.push([n,t,i]):e(i,n,t)}("context/enabled",n)}},{key:"selectContext",value:function(n){this.__selectedContext=n.toLowerCase()}},{key:"_makeContextReady",value:function(){var n=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(n,i){var o=t(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n,i);U[n]||(U[n]={count:0});var a=U[n];return a.count++,a.onsubscribe||(a.onsubscribe=function(n){function e(){for(var e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];return p=i,b&&(h&&clearTimeout(h),h=setTimeout(function(){m&&clearTimeout(m),t()},o)),x&&!m&&(m=setTimeout(function(){h&&clearTimeout(h),t()},f)),s&&!v&&(v=!0,g=n.apply(void 0,d(p))),g}function t(){u&&(g=n.apply(void 0,d(p))),h=null,m=null,v=!1}function i(){h&&(clearTimeout(h),h=null),m&&(clearTimeout(m),m=null),p=void 0,v=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.leading,s=void 0!==r&&r,l=a.trailing,u=void 0===l||l,c=a.maxWait,f=void 0!==c&&c,p=void 0,h=void 0,m=void 0,g=void 0,v=!1,b=o!==f,x=!1!==f;return e.flush=function(){return(h||m)&&(g=n.apply(void 0,d(p))),i(),g},e.cancel=i,e}(function(n){return function(){e(document,"pubsub/onsubscribe",n),e(document,"pubsub/onsubscribe/"+n,n),U[n]&&delete U[n].unsubscribe}}(n),100)),a.onsubscribe(),function(){a.count--,o.call(this),a.count<=0&&delete U[n]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var n=this.__selectedContext,e=this.parentNode;e&&(!e.__isContext||n&&n!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var e=16*Math.random()|0;return("x"==n?e:3&e|8).toString(16)})}}]),o}(),nn=(function(n){function e(){return a(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}l(e,Y),r(e,[{key:"connectedCallback",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:n});this._appendStyles(e),this.render()}}])}(),function(n){function e(){return a(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,Y),r(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y.uuidv4();if(n&&!X[n]){var t=document.createElement("style"),i=document.createTextNode(n);t.appendChild(i),t.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(t),X[n]=!0}}}]),e}()),en=function(n){function e(){return a(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,h,H))}return l(e,nn),r(e,[{key:"render",value:function(){(function n(e,t,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:n(a,t,i)}if("value"in o)return o.value;var r=o.get;if(void 0!==r)return r.call(i)})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"render",this).call(this);var n=this.hasAttribute("flyout"),t=p(this.initialClassName,"m-sub-navigation",{"m-sub-navigation--flyout":n});this.className=t}}]),e}();!function(n){var e=0,t=function(){if(0===e)try{n.apply(void 0,arguments),e+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(n){}};document.addEventListener("DOMContentLoaded",t,!1),document.addEventListener("WebComponentsReady",t,!1)}(function(){window.customElements.define("axa-sub-navigation",en)})}();
