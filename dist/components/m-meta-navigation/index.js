!function(){"use strict";function n(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function e(n,e){return new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",e)}function t(n,t){return e(t).test(n.className)}function i(n,e){for(var t=Object.keys(n),i=t.length,o=0;o<i;++o){var a=t[o];if(n[a]===e)return delete n[a]}return!1}function o(n,e,o,a){function r(){for(var e=0;e<p;++e)n.removeEventListener(f[e],u,s);i(this,r)}var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Q[e]&&(e=Q[e]),!n||!e)return null;var c=void 0===o?"undefined":l(o);"function"===c&&(s=!!a,a=o);for(var u=o&&"string"===c?function(e){for(var i=e.target;!t(i,o)&&i!==n;)i=i.parentNode;if(i!==n)return a(e,i)}:a,f=e.split(Z),p=f.length,h=0;h<p;++h)n.addEventListener(f[h],u,s);return r}var a=".m-meta-navigation {\n  display: block;\n  background: #fafafa;\n  border-top: 2px solid #00008f;\n  border-bottom: 1px solid #ccc; }\n\n.m-meta-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .m-meta-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-meta-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-meta-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-meta-navigation__box {\n      max-width: 1140px; } }\n\n.m-meta-navigation__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.m-meta-navigation__nav-left {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.m-meta-navigation__nav-right {\n  margin-left: auto; }\n  .m-meta-navigation__nav-right .a-button {\n    margin-top: -2px;\n    margin-bottom: -1px; }\n\n.m-meta-navigation__list-right {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-right: -15px;\n  margin-left: -15px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.m-meta-navigation__list-item-right {\n  display: block; }\n\n.m-meta-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-right: -15px;\n  margin-left: -15px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.m-meta-navigation__list-item {\n  border-right: 1px solid #ccc; }\n  .m-meta-navigation__list-item:first-child {\n    border-left: 1px solid #ccc; }\n\n.m-meta-navigation__list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-meta-navigation__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-meta-navigation__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-meta-navigation__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-meta-navigation__list-link.is-active, .m-meta-navigation__list-link:hover, .m-meta-navigation__list-link:active, .m-meta-navigation__list-link:focus {\n    margin-bottom: -1px;\n    text-decoration: none;\n    color: #00005b;\n    background: #fff;\n    border-bottom: 1px solid #fff; }\n\n.m-meta-navigation__lang-drop-down {\n  position: relative; }\n\n.m-meta-navigation__lang-drop-down__toggle {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10.5px 50px 10.5px 20px;\n  color: #7f7f7f;\n  text-transform: uppercase; }\n  .m-meta-navigation__lang-drop-down__toggle:hover, .m-meta-navigation__lang-drop-down__toggle:active, .m-meta-navigation__lang-drop-down__toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-meta-navigation__lang-drop-down__toggle {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-meta-navigation__lang-drop-down__toggle {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-meta-navigation__lang-drop-down__toggle {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n\n.m-meta-navigation__lang-drop-down-icon {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  display: block;\n  width: 16px;\n  height: 16px;\n  margin-top: -8px;\n  transition: all 0.3s ease; }\n  .is-open .m-meta-navigation__lang-drop-down-icon {\n    transform: rotate(180deg); }\n\n.m-meta-navigation__lang-list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  background: #fafafa;\n  transition: height 0.3s ease; }\n  .is-open > .m-meta-navigation__lang-list {\n    height: auto; }\n\n.m-meta-navigation__lang-list-item {\n  display: block; }\n\n.m-meta-navigation__lang-list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 20px;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-meta-navigation__lang-list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-meta-navigation__lang-list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-meta-navigation__lang-list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-meta-navigation__lang-list-link:hover, .m-meta-navigation__lang-list-link:active, .m-meta-navigation__lang-list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n",r=function(n){return function(e,t,i){for(var o in t)o in s&&(t[s[o]]=t[o],delete t[o]);return n(e,t,i)}},s={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c=(function(){function n(n){this.value=n}function e(e){function t(o,a){try{var r=e[o](a),s=r.value;s instanceof n?Promise.resolve(s.value).then(function(n){t("next",n)},function(n){t("throw",n)}):i(r.done?"return":"normal",r.value)}catch(n){i("throw",n)}}function i(n,e){switch(n){case"return":o.resolve({value:e,done:!0});break;case"throw":o.reject(e);break;default:o.resolve({value:e,done:!1})}(o=o.next)?t(o.key,o.arg):a=null}var o,a;this._invoke=function(n,e){return new Promise(function(i,r){var s={key:n,arg:e,resolve:i,reject:r,next:null};a?a=a.next=s:(o=a=s,t(n,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(n){return this._invoke("next",n)},e.prototype.throw=function(n){return this._invoke("throw",n)},e.prototype.return=function(n){return this._invoke("return",n)}}(),function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}),u=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},p=function n(e,t,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:n(a,t,i)}if("value"in o)return o.value;var r=o.get;if(void 0!==r)return r.call(i)},h=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},d=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e},m=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},g=1,v=2,_=3,y=4,x=5,w=6,b=7,k=8,C=9,E=10,O=11,T=12,N=13,S=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),j=/\n[\s]+$/,A=/^\n[\s]+/,L=/[\s]+$/,F=/^[\s]+/,P=/[\n\s]+/g,z=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],D=["code","pre"],M=function n(e,t){if(Array.isArray(t))for(var i,o,a=e.nodeName.toLowerCase(),r=!1,s=0,l=t.length;s<l;s++){var c=t[s];if(Array.isArray(c))n(e,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=e.childNodes[e.childNodes.length-1];if("string"==typeof c)r=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),e.appendChild(c),u=c),s===l-1&&(r=!1,-1===z.indexOf(a)&&-1===D.indexOf(a)?""===(i=u.nodeValue.replace(A,"").replace(L,"").replace(j,"").replace(P," "))?e.removeChild(u):u.nodeValue=i:-1===D.indexOf(a)&&(o=0===s?"":" ",i=u.nodeValue.replace(A,o).replace(F," ").replace(L,"").replace(j,"").replace(P," "),u.nodeValue=i));else if(c&&c.nodeType){r&&(r=!1,-1===z.indexOf(a)&&-1===D.indexOf(a)?""===(i=u.nodeValue.replace(A,"").replace(j,"").replace(P," "))?e.removeChild(u):u.nodeValue=i:-1===D.indexOf(a)&&(i=u.nodeValue.replace(F," ").replace(A,"").replace(j,"").replace(P," "),u.nodeValue=i));var f=c.nodeName;f&&(a=f.toLowerCase()),e.appendChild(c)}}}},I=function(n,e){return e={exports:{}},n(e,e.exports),e.exports}(function(n){function e(n,e,r){var l;-1!==s.indexOf(n)&&(e.namespace=t);var c=!1;if(e.namespace&&(c=e.namespace,delete e.namespace),c)l=document.createElementNS(c,n);else{if(n===a)return document.createComment(e.comment);l=document.createElement(n)}for(var u in e)if(e.hasOwnProperty(u)){var f=u.toLowerCase(),p=e[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==o.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?l[u]=p:c?"xlink:href"===u?l.setAttributeNS(i,u,p):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,p):l.setAttribute(u,p)}return M(l,r),l}var t="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];n.exports=function(n,e){function t(n){return"function"==typeof n?n:"string"==typeof n?n:n&&"object"===(void 0===n?"undefined":l(n))?n:i("",n)}e||(e={});var i=e.concat||function(n,e){return String(n)+String(e)};return!1!==e.attrToProp&&(n=r(n)),function(o){function a(n){var t=[];r===b&&(r=y);for(var i=0;i<n.length;i++){var o=n.charAt(i);r===g&&"<"===o?(s.length&&t.push([g,s]),s="",r=v):">"!==o||function(n){return n===C||n===E}(r)||r===N?r===N&&/-$/.test(s)&&"-"===o?(e.comments&&t.push([k,s.substr(0,s.length-1)],[_]),s="",r=g):r===v&&/^!--$/.test(s)?(e.comments&&t.push([v,s],[x,"comment"],[O]),s=o,r=N):r===g||r===N?s+=o:r===v&&/\s/.test(o)?(t.push([v,s]),s="",r=y):r===v?s+=o:r===y&&/[^\s"'=/]/.test(o)?(r=x,s=o):r===y&&/\s/.test(o)?(s.length&&t.push([x,s]),t.push([T])):r===x&&/\s/.test(o)?(t.push([x,s]),s="",r=w):r===x&&"="===o?(t.push([x,s],[O]),s="",r=b):r===x?s+=o:r!==w&&r!==y||"="!==o?r!==w&&r!==y||/\s/.test(o)?r===b&&'"'===o?r=E:r===b&&"'"===o?r=C:r===E&&'"'===o?(t.push([k,s],[T]),s="",r=y):r===C&&"'"===o?(t.push([k,s],[T]),s="",r=y):r!==b||/\s/.test(o)?r===k&&/\s/.test(o)?(t.push([k,s],[T]),s="",r=y):r!==k&&r!==C&&r!==E||(s+=o):(r=k,i--):(t.push([T]),/[\w-]/.test(o)?(s+=o,r=x):r=y):(t.push([O]),r=b):(r===v?t.push([v,s]):r===x?t.push([x,s]):r===k&&s.length&&t.push([k,s]),t.push([_]),s="",r=g)}return r===g&&s.length?(t.push([g,s]),s=""):r===k&&s.length?(t.push([k,s]),s=""):r===E&&s.length?(t.push([k,s]),s=""):r===C&&s.length?(t.push([k,s]),s=""):r===x&&(t.push([x,s]),s=""),t}for(var r=g,s="",c=arguments.length,u=[],f=0;f<o.length;f++)if(f<c-1){var p=arguments[f+1],h=a(o[f]),d=r;d===E&&(d=k),d===C&&(d=k),d===b&&(d=k),d===y&&(d=x),h.push([0,d,p]),u.push.apply(u,h)}else u.push.apply(u,a(o[f]));for(var m=[null,{},[]],j=[[m,-1]],f=0;f<u.length;f++){var A=j[j.length-1][0],L=(h=u[f])[0];if(L===v&&/^\//.test(h[1]))M=j[j.length-1][1],j.length>1&&(j.pop(),j[j.length-1][0][2][M]=n(A[0],A[1],A[2].length?A[2]:void 0));else if(L===v){var F=[h[1],{},[]];A[2].push(F),j.push([F,A[2].length-1])}else if(L===x||0===L&&h[1]===x){for(var P,z="";f<u.length;f++)if(u[f][0]===x)z=i(z,u[f][1]);else{if(0!==u[f][0]||u[f][1]!==x)break;if("object"!==l(u[f][2])||z)z=i(z,u[f][2]);else for(P in u[f][2])u[f][2].hasOwnProperty(P)&&!A[1][P]&&(A[1][P]=u[f][2][P])}u[f][0]===O&&f++;for(var D=f;f<u.length;f++)if(u[f][0]===k||u[f][0]===x)A[1][z]?""===u[f][1]||(A[1][z]=i(A[1][z],u[f][1])):A[1][z]=t(u[f][1]);else{if(0!==u[f][0]||u[f][1]!==k&&u[f][1]!==x){!z.length||A[1][z]||f!==D||u[f][0]!==_&&u[f][0]!==T||(A[1][z]=z.toLowerCase()),u[f][0]===_&&f--;break}A[1][z]?""===u[f][2]||(A[1][z]=i(A[1][z],u[f][2])):A[1][z]=t(u[f][2])}}else if(L===x)A[1][h[1]]=!0;else if(0===L&&h[1]===x)A[1][h[2]]=!0;else if(L===_){if(function(n){return S.test(n)}(A[0])&&j.length){var M=j[j.length-1][1];j.pop(),j[j.length-1][0][2][M]=n(A[0],A[1],A[2].length?A[2]:void 0)}}else if(0===L&&h[1]===g)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=i("",h[2])),Array.isArray(h[2][0])?A[2].push.apply(A[2],h[2]):A[2].push(h[2]);else if(L===g)A[2].push(h[1]);else if(L!==O&&L!==T)throw new Error("unhandled: "+L)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=n(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(e,{comments:!0}),n.exports.default=n.exports,n.exports.createElement=e}),R=function(n){return"undefined"!=typeof window?function(){var e=document.createElement("div");return e.innerHTML=n,function(n){return Array.isArray(n)?n:[].slice.call(n)}(e.childNodes)}():function(){var e=new String(n);return e.__encoded=!0,e}()},U=m(["\n","\n"],["\n","\n"]),G=m(['\n  <div class="m-meta-navigation__box">\n    <div class="m-meta-navigation__row">\n      <nav class="m-meta-navigation__nav-left">\n        <ul class="m-meta-navigation__list">\n          ',"\n        </ul>\n      </nav>\n      ","\n    </div>\n  </div>\n  "],['\n  <div class="m-meta-navigation__box">\n    <div class="m-meta-navigation__row">\n      <nav class="m-meta-navigation__nav-left">\n        <ul class="m-meta-navigation__list">\n          ',"\n        </ul>\n      </nav>\n      ","\n    </div>\n  </div>\n  "]),V=m(['\n            <li class="m-meta-navigation__list-item">\n              <a href="','" class="m-meta-navigation__list-link','">',"</a>\n            </li>\n          "],['\n            <li class="m-meta-navigation__list-item">\n              <a href="','" class="m-meta-navigation__list-link','">',"</a>\n            </li>\n          "]),$=m(['\n        <nav class="m-meta-navigation__nav-right">\n          <ul class="m-meta-navigation__list-right">\n            <li class="m-meta-navigation__list-item-right">\n              <div class="m-meta-navigation__lang-drop-down js-dropdown">\n                <button role="button" class="m-meta-navigation__lang-drop-down__toggle js-dropdown__toggle">\n                  ','\n                  <svg class="m-meta-navigation__lang-drop-down-icon">\n                    <use xlink:href="#src--assets--icons--angle-bracket-right" />\n                  </svg>\n                </button>\n\n                <ul class="m-meta-navigation__lang-list">\n                ',"\n                </ul>\n              </div>\n            </li>\n            ","\n          </ul>\n        </nav>\n      "],['\n        <nav class="m-meta-navigation__nav-right">\n          <ul class="m-meta-navigation__list-right">\n            <li class="m-meta-navigation__list-item-right">\n              <div class="m-meta-navigation__lang-drop-down js-dropdown">\n                <button role="button" class="m-meta-navigation__lang-drop-down__toggle js-dropdown__toggle">\n                  ','\n                  <svg class="m-meta-navigation__lang-drop-down-icon">\n                    <use xlink:href="#src--assets--icons--angle-bracket-right" />\n                  </svg>\n                </button>\n\n                <ul class="m-meta-navigation__lang-list">\n                ',"\n                </ul>\n              </div>\n            </li>\n            ","\n          </ul>\n        </nav>\n      "]),q=m(['\n                  <li class="m-meta-navigation__lang-list-item">\n                    <a class="m-meta-navigation__lang-list-link','" href="','">',"</a>\n                  </li>\n                "],['\n                  <li class="m-meta-navigation__lang-list-item">\n                    <a class="m-meta-navigation__lang-list-link','" href="','">',"</a>\n                  </li>\n                "]),K=function(n,e){var t=n.left,i=n.right;return I(U,t?I(G,t&&t.map(function(n,e){var t=n.url,i=n.name;return I(V,t,0===e?" is-active":"",R(i))}),i&&i.length?I($,i[0].name,i&&i.map(function(n,e){var t=n.url,i=n.name;return I(q,0===e?" is-active":"",t,R(i))}),e):""):"")},B=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement);var H={},W=function(e){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1];c(this,t);var i=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i._initialise(n,e),i}return h(t,n),u(t,[{key:"_initialise",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=n,this._template=e}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render()}},{key:"_appendStyles",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),t=document.createTextNode(this._styles);e.appendChild(t),n.insertAdjacentElement?n.insertAdjacentElement("afterbegin",e):n.appendChild(e)}}},{key:"render",value:function(){var n=this;if(!this._hasRendered){var e=this._template;if(e)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var i=e(function(n){if(!n.hasAttributes)return null;for(var e={},t=n.attributes,i=t.length,o=0;o<i;++o){var a=t[o];e[a.name]=function(n,e){if("function"==typeof n.hasAttribute&&!n.hasAttribute(e))return!1;var t=n.value;if(e?t=n.getAttribute(e):e=n.name,t&&e!==t){if(B.test(t))try{t=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else t=!0;return t}(a)}return e}(this),t);if(Array.isArray(i))i.forEach(function(e){n.appendChild(e)});else if(i){if("string"==typeof i){var o=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(i)}this._hasRendered=!0}catch(o){"throwed"!==o.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var e=16*Math.random()|0;return("x"==n?e:3&e|8).toString(16)})}}]),t}(),J=(function(n){function e(){return c(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}h(e,W),u(e,[{key:"connectedCallback",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:n});this._appendStyles(e),this.render()}}])}(),function(n){function e(){return c(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,W),u(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W.uuidv4();if(n&&!H[n]){var t=document.createElement("style"),i=document.createTextNode(n);t.appendChild(i),t.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(t),H[n]=!0}}}]),e}()),Y=/^\s+|\s{2,}|\s+$/g,Z=/\s+/,Q={transitionend:function(){for(var n=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(e),i=t.length,o=void 0,a=0;a<i;++a)if(o=t[a],void 0!==n[o])return e[o];return null}()},X=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var i=e.length,o={},a=0;a<i;++a){var r=e[a];o[r.toUpperCase()]=r}return o}("click","keyup","enter","move","leave","Escape","Esc"),nn=function(){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,n),this._rootNode=e,this._options=f({},n.DEFAULTS,t),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return u(n,[{key:"_init",value:function(){var n=this._options.containerClass;this._container=n?this._rootNode.querySelector(n):this._rootNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=o(this._container,X.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=o(this._container,X.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(n,e,t){function o(){s.removeEventListener(e,a,r),i(this,o)}function a(e){var i=e.target;if(!n.contains(i)&&n!==i)return t(e)}var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=n.ownerDocument.documentElement;return s.addEventListener(e,a,r),o}(this._container,X.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=o(this._container.ownerDocument,X.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(n,e){this._options.useDefaultEvent||n.preventDefault();var t=!this._lastToggleNode,i=e!==this._lastToggleNode,o=!t&&!i;t?(this._notify(X.ENTER,e),this._onInteractive()):i&&this._notify(X.MOVE,e,this._lastToggleNode),this._lastToggleNode=e,o&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(n){this._options.useDefaultEvent||n.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(n){(n.key===X.ESCAPE||n.key===X.ESC||27===n.keyCode)&&(n.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(X.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(n,e,t){n in this&&"function"==typeof this[n]&&this[n](e,t)}},{key:"enter",value:function(n){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(n,e){}},{key:"leave",value:function(n){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._rootNode,delete this._options}}]),n}();nn.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var en=function(){if(!window.getComputedStyle)return null;var n=window.getComputedStyle(document.documentElement,""),e=(Array.prototype.slice.call(n).join("").match(/-(moz|webkit|ms)-/)||""===n.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1],lowercase:e,css:"-"+e+"-",js:e[0].toUpperCase()+e.slice(1)}}().lowercase,tn=function(){var n=window.requestAnimationFrame||window[en+"RequestAnimationFrame"];if(n)n=n.bind(window);else{var e=0;n=function(n){var t=Date.now(),i=Math.max(0,16-(t-e)),o=setTimeout(function(){n(t+i)},i);return e=t+i,o}}return n}(),on=(function(){var n=window.cancelAnimationFrame||window[en+"CancelAnimationFrame"]||window[en+"CancelRequestAnimationFrame"];n=n?n.bind(window):function(n){clearTimeout(n)}}(),function(n){function i(n,e){c(this,i),e=f({},i.DEFAULTS,e);var t=d(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,n,e));return t.options=e,t.rootNode=n,t.handleTransitionEnd=t.handleTransitionEnd.bind(t),t}return h(i,nn),u(i,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=o(this.rootNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(n){var e=n.parentNode,i=e.lastElementChild,o=i.scrollHeight;this.onInteractive(),i.style.height=o+"px",function(n,e){t(n,e)||(n.className+=" "+e)}(e,"is-open")}},{key:"leave",value:function(n){var i=n.parentNode,o=i.lastElementChild,a=o.scrollHeight;this.offInteractive(),tn(function(){o.style.height=a+"px",tn(function(){!function(n,i){if(t(n,i)){var o=e(i,"g");n.className=n.className.replace(o," ").replace(Y," ")}}(i,"is-open"),o.style.height=0})})}},{key:"handleTransitionEnd",value:function(n){"height"===n.propertyName&&(n.target.style.height="",this.offInteractive())}},{key:"destroy",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"destroy",this).call(this),delete this.rootNode,delete this.options}}]),i}());on.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-open"};var an=function(n){function e(){return c(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a,K))}return h(e,J),u(e,[{key:"connectedCallback",value:function(){p(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.className="m-meta-navigation",this.dropDown=new on(this)}}]),e}();window.customElements.define("axa-meta-navigation",an)}();
