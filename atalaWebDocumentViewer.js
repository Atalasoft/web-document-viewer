//-------------------------------------------------------------------------------------------------
//
//  Web Document Viewer object cross browser client-side script. 
//  Copyright 2003-2019 Atalasoft, Inc. All Rights Reserved.
//
//  This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)
//  Permission for usage and modification of this code is only permitted 
//  with the purchase of a source code license.
//-------------------------------------------------------------------------------------------------
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):"function"==typeof define&&define.amd?define(["jquery","raphael","jquery-ui","clipboard"],t):"object"==typeof exports?exports.Atalasoft=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):e.Atalasoft=t(e.jQuery,e.Raphael,e.jQuery.ui,e.ClipboardJS)}(window,function(n,o,i,r){return function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=119)}([function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var c=n(2),d=n(24).f,h=n(15),f=n(22),p=n(43),g=n(83),m=n(69);e.exports=function(e,t){var n,o,i,r,a,l=e.target,s=e.global,u=e.stat;if(n=s?c:u?c[l]||p(l,{}):(c[l]||{}).prototype)for(o in t){if(r=t[o],i=e.noTargetGet?(a=d(n,o))&&a.value:n[o],!m(s?o:l+(u?".":"#")+o,e.forced)&&void 0!==i){if(typeof r==typeof i)continue;g(r,i)}(e.sham||i&&i.sham)&&h(r,"sham",!0),f(n,o,r,e)}}},function(e,t){e.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(e,t,n){var o=n(26)("wks"),i=n(45),r=n(2).Symbol,a=n(70);e.exports=function(e){return o[e]||(o[e]=a&&r[e]||(a?r:i)("Symbol."+e))}},function(e,t,n){var o=n(6);e.exports=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){"use strict";var h=n(32),f=n(19),p=n(9),g=n(23),m=n(51),v=n(50),y=Math.max,b=Math.min,o=n(27)("splice");n(1)({target:"Array",proto:!0,forced:!o},{splice:function(e,t){var n,o,i,r,a,l,s=g(this),u=p(s.length),c=h(e,u),d=arguments.length;if(0===d?n=o=0:o=1===d?(n=0,u-c):(n=d-2,b(y(f(t),0),u-c)),9007199254740991<u+n-o)throw TypeError("Maximum allowed length exceeded");for(i=m(s,o),r=0;r<o;r++)(a=c+r)in s&&v(i,r,s[a]);if(n<(i.length=o)){for(r=c;r<u-o;r++)l=r+n,(a=r+o)in s?s[l]=s[a]:delete s[l];for(r=u;u-o+n<r;r--)delete s[r-1]}else if(o<n)for(r=u-o;c<r;r--)l=r+n-1,(a=r+o-1)in s?s[l]=s[a]:delete s[l];for(r=0;r<n;r++)s[r+c]=arguments[r+2];return s.length=u-o+n,i}})},function(e,t,n){e.exports=!n(0)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(19),i=Math.min;e.exports=function(e){return 0<e?i(o(e),9007199254740991):0}},function(e,t,n){var o=n(96),i=n(97),r=n(15),a=n(2);for(var l in o){var s=a[l],u=s&&s.prototype;if(u&&u.forEach!==i)try{r(u,"forEach",i)}catch(e){u.forEach=i}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var o=n(8),i=n(64),r=n(4),a=n(25),l=Object.defineProperty;t.f=o?l:function(e,t,n){if(r(e),t=a(t,!0),r(n),i)try{return l(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){"use strict";var d=n(75),b=n(4),h=n(5),x=n(107),w=n(52),_=n(9),z=n(36),f=n(53),o=n(0),p=[].push,P=Math.min,T=4294967295,D=!o(function(){return!RegExp(T,"y")});n(37)("split",2,function(i,m,v){var y;return y="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){var n=String(h(this)),o=void 0===t?T:t>>>0;if(0===o)return[];if(void 0===e)return[n];if(!d(e))return m.call(n,e,o);for(var i,r,a,l=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,c=new RegExp(e.source,s+"g");(i=f.call(c,n))&&!(u<(r=c.lastIndex)&&(l.push(n.slice(u,i.index)),1<i.length&&i.index<n.length&&p.apply(l,i.slice(1)),a=i[0].length,u=r,l.length>=o));)c.lastIndex===i.index&&c.lastIndex++;return u===n.length?!a&&c.test("")||l.push(""):l.push(n.slice(u)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:m.call(this,e,t)}:m,[function(e,t){var n=h(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):y.call(String(n),e,t)},function(e,t){var n=v(y,e,this,t,y!==m);if(n.done)return n.value;var o=b(e),i=String(this),r=x(o,RegExp),a=o.unicode,l=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(D?"y":"g"),s=new r(D?o:"^(?:"+o.source+")",l),u=void 0===t?T:t>>>0;if(0===u)return[];if(0===i.length)return null===z(s,i)?[i]:[];for(var c=0,d=0,h=[];d<i.length;){s.lastIndex=D?d:0;var f,p=z(s,D?i:i.slice(d));if(null===p||(f=P(_(s.lastIndex+(D?0:d)),i.length))===c)d=w(i,d,a);else{if(h.push(i.slice(c,d)),h.length===u)return h;for(var g=1;g<=p.length-1;g++)if(h.push(p[g]),h.length===u)return h;d=c=f}}return h.push(i.slice(c)),h}]},!D)},function(e,t,n){var o=n(42),i=n(5);e.exports=function(e){return o(i(e))}},function(e,t,n){var o=n(12),i=n(29);e.exports=n(8)?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){"use strict";var P=n(4),o=n(23),T=n(9),D=n(19),r=n(5),k=n(52),C=n(36),E=Math.max,M=Math.min,h=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(37)("replace",2,function(i,w,_){return[function(e,t){var n=r(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):w.call(String(n),e,t)},function(e,t){var n=_(w,e,this,t);if(n.done)return n.value;var o=P(e),i=String(this),r="function"==typeof t;r||(t=String(t));var a=o.global;if(a){var l=o.unicode;o.lastIndex=0}for(var s=[];;){var u=C(o,i);if(null===u)break;if(s.push(u),!a)break;""===String(u[0])&&(o.lastIndex=k(i,T(o.lastIndex),l))}for(var c,d="",h=0,f=0;f<s.length;f++){u=s[f];for(var p=String(u[0]),g=E(M(D(u.index),i.length),0),m=[],v=1;v<u.length;v++)m.push(void 0===(c=u[v])?c:String(c));var y=u.groups;if(r){var b=[p].concat(m,g,i);void 0!==y&&b.push(y);var x=String(t.apply(void 0,b))}else x=z(p,i,g,m,y,t);h<=g&&(d+=i.slice(h,g)+x,h=g+p.length)}return d+i.slice(h)}];function z(r,a,l,s,u,e){var c=l+r.length,d=s.length,t=p;return void 0!==u&&(u=o(u),t=f),w.call(e,t,function(e,t){var n;switch(t.charAt(0)){case"$":return"$";case"&":return r;case"`":return a.slice(0,l);case"'":return a.slice(c);case"<":n=u[t.slice(1,-1)];break;default:var o=+t;if(0===o)return e;if(d<o){var i=h(o/10);return 0===i?e:i<=d?void 0===s[i-1]?t.charAt(1):s[i-1]+t.charAt(1):e}n=s[o-1]}return void 0===n?"":n})}})},function(e,t,n){"use strict";var u=n(6),c=n(34),d=n(32),h=n(9),f=n(14),p=n(50),g=n(3)("species"),m=[].slice,v=Math.max,o=n(27)("slice");n(1)({target:"Array",proto:!0,forced:!o},{slice:function(e,t){var n,o,i,r=f(this),a=h(r.length),l=d(e,a),s=d(void 0===t?a:t,a);if(c(r)&&("function"!=typeof(n=r.constructor)||n!==Array&&!c(n.prototype)?u(n)&&null===(n=n[g])&&(n=void 0):n=void 0,n===Array||void 0===n))return m.call(r,l,s);for(o=new(void 0===n?Array:n)(v(s-l,0)),i=0;l<s;l++,i++)l in r&&p(o,i,r[l]);return o.length=i,o}})},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?o:n)(e)}},function(e,t,n){"use strict";var o=n(35)(2),i=n(27)("filter");n(1)({target:"Array",proto:!0,forced:!i},{filter:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var o=n(8),i=n(12).f,r=Function.prototype,a=r.toString,l=/^\s*function ([^ (]*)/;!o||"name"in r||i(r,"name",{configurable:!0,get:function(){try{return a.call(this).match(l)[1]}catch(e){return""}}})},function(e,t,n){var l=n(2),s=n(15),u=n(11),c=n(43),o=n(66),i=n(67),r=i.get,d=i.enforce,h=String(o).split("toString");n(26)("inspectSource",function(e){return o.call(e)}),(e.exports=function(e,t,n,o){var i=!!o&&!!o.unsafe,r=!!o&&!!o.enumerable,a=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||u(n,"name")||s(n,"name",t),d(n).source=h.join("string"==typeof t?t:"")),e!==l?(i?!a&&e[t]&&(r=!0):delete e[t],r?e[t]=n:s(e,t,n)):r?e[t]=n:c(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&r(this).source||o.call(this)})},function(e,t,n){var o=n(5);e.exports=function(e){return Object(o(e))}},function(e,t,n){var o=n(8),i=n(41),r=n(29),a=n(14),l=n(25),s=n(11),u=n(64),c=Object.getOwnPropertyDescriptor;t.f=o?c:function(e,t){if(e=a(e),t=l(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return r(!i.f.call(e,t),e[t])}},function(e,t,n){var i=n(6);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var o=n(2),i=n(43),r="__core-js_shared__",a=o[r]||i(r,{});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.0.1",mode:n(63)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){var o=n(0),i=n(3)("species");e.exports=function(t){return!o(function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},function(e,t){e.exports=n},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports={}},function(e,t,n){var o=n(68),i=n(46).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,i)}},function(e,t,n){var o=n(19),i=Math.max,r=Math.min;e.exports=function(e,t){var n=o(e);return n<0?i(n+t,0):r(n,t)}},function(e,t,n){var o=n(68),i=n(46);e.exports=Object.keys||function(e){return o(e,i)}},function(e,t,n){var o=n(18);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){var b=n(93),x=n(42),w=n(23),_=n(9),o=n(51);e.exports=function(d,e){var h=1==d,f=2==d,p=3==d,g=4==d,m=6==d,v=5==d||m,y=e||o;return function(e,t,n){for(var o,i,r=w(e),a=x(r),l=b(t,n,3),s=_(a.length),u=0,c=h?y(e,s):f?y(e,0):void 0;u<s;u++)if((v||u in a)&&(i=l(o=a[u],u,r),d))if(h)c[u]=i;else if(i)switch(d){case 3:return!0;case 5:return o;case 6:return u;case 2:c.push(o)}else if(g)return!1;return m?-1:p||g?g:c}}},function(e,t,n){var i=n(18),r=n(53);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},function(e,t,n){"use strict";var d=n(15),h=n(22),f=n(0),p=n(3),g=n(53),m=p("species"),v=!f(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),y=!f(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]});e.exports=function(n,e,t,o){var i=p(n),r=!f(function(){var e={};return e[i]=function(){return 7},7!=""[n](e)}),a=r&&!f(function(){var e=!1,t=/a/;return t.exec=function(){return e=!0,null},"split"===n&&(t.constructor={},t.constructor[m]=function(){return t}),t[i](""),!e});if(!r||!a||"replace"===n&&!v||"split"===n&&!y){var l=/./[i],s=t(i,""[n],function(e,t,n,o,i){return t.exec===g?r&&!i?{done:!0,value:l.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),u=s[0],c=s[1];h(String.prototype,n,u),h(RegExp.prototype,i,2==e?function(e,t){return c.call(e,this,t)}:function(e){return c.call(e,this)}),o&&d(RegExp.prototype[i],"sham",!0)}}},function(e,t,n){"use strict";var o=n(14),i=[].join,r=n(42)!=Object,a=n(73)("join",",");n(1)({target:"Array",proto:!0,forced:r||a},{join:function(e){return i.call(o(this),void 0===e?",":e)}})},function(e,t,n){"use strict";var o=n(35)(1),i=n(27)("map");n(1)({target:"Array",proto:!0,forced:!i},{map:function(e){return o(this,e,arguments[1])}})},function(e,t,n){"use strict";var o=n(78),i=n(108)("trim");n(1)({target:"String",proto:!0,forced:i},{trim:function(){return o(this,3)}})},function(e,t,n){"use strict";var o={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!o.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:o},function(e,t,n){var o=n(0),i=n(18),r="".split;e.exports=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==i(e)?r.call(e,""):Object(e)}:Object},function(e,t,n){var o=n(2),i=n(15);e.exports=function(t,n){try{i(o,t,n)}catch(e){o[t]=n}return n}},function(e,t,n){var o=n(26)("keys"),i=n(45);e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var o=n(4),i=n(90),r=n(46),a=n(91),l=n(65),s=n(44)("IE_PROTO"),u="prototype",c=function(){},d=function(){var e,t=l("iframe"),n=r.length,o="script";for(t.style.display="none",a.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object</"+o+">"),e.close(),d=e.F;n--;)delete d[u][r[n]];return d()};e.exports=Object.create||function(e,t){var n;return null!==e?(c[u]=o(e),n=new c,c[u]=null,n[s]=e):n=d(),void 0===t?n:i(n,t)},n(30)[s]=!0},function(e,t,n){"use strict";var o=n(34),i=n(6),u=n(23),c=n(9),d=n(50),h=n(51),r=n(3)("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",a=!n(0)(function(){var e=[];return e[r]=!1,e.concat()[0]!==e}),l=n(27)("concat"),g=function(e){if(!i(e))return!1;var t=e[r];return void 0!==t?!!t:o(e)},s=!a||!l;n(1)({target:"Array",proto:!0,forced:s},{concat:function(e){var t,n,o,i,r,a=u(this),l=h(a,0),s=0;for(t=-1,o=arguments.length;t<o;t++)if(r=-1===t?a:arguments[t],g(r)){if(i=c(r.length),f<s+i)throw TypeError(p);for(n=0;n<i;n++,s++)n in r&&d(l,s,r[n])}else{if(f<=s)throw TypeError(p);d(l,s++,r)}return l.length=s,l}})},function(e,t,n){"use strict";var i=n(25),r=n(12),a=n(29);e.exports=function(e,t,n){var o=i(t);o in e?r.f(e,o,a(0,n)):e[o]=n}},function(e,t,n){var o=n(6),i=n(34),r=n(3)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[r])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){"use strict";var o=n(99);e.exports=function(e,t,n){return t+(n?o(e,t,!0).length:1)}},function(e,t,n){"use strict";var o,i,a=n(74),l=RegExp.prototype.exec,s=String.prototype.replace,r=l,u=(o=/a/,i=/b*/g,l.call(o,"a"),l.call(i,"a"),0!==o.lastIndex||0!==i.lastIndex),c=void 0!==/()??/.exec("")[1];(u||c)&&(r=function(e){var t,n,o,i,r=this;return c&&(n=new RegExp("^"+r.source+"$(?!\\s)",a.call(r))),u&&(t=r.lastIndex),o=l.call(r,e),u&&o&&(r.lastIndex=r.global?o.index+o[0].length:t),c&&o&&1<o.length&&s.call(o[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o}),e.exports=r},function(e,t,n){"use strict";var o=n(35)(5),i="find",r=!0;i in[]&&Array(1)[i](function(){r=!1}),n(1)({target:"Array",proto:!0,forced:r},{find:function(e){return o(this,e,1<arguments.length?arguments[1]:void 0)}}),n(76)(i)},function(e,t,n){"use strict";var u=n(19),c=n(109),d=n(110),o=1..toFixed,i=Math.floor,r=[0,0,0,0,0,0],h=function(e,t){for(var n=-1,o=t;++n<6;)o+=e*r[n],r[n]=o%1e7,o=i(o/1e7)},f=function(e){for(var t=6,n=0;0<=--t;)n+=r[t],r[t]=i(n/e),n=n%e*1e7},p=function(){for(var e=6,t="";0<=--e;)if(""!==t||0===e||0!==r[e]){var n=String(r[e]);t=""===t?n:t+d.call("0",7-n.length)+n}return t},g=function(e,t,n){return 0===t?n:t%2==1?g(e,t-1,n*e):g(e*e,t/2,n)};n(1)({target:"Number",proto:!0,forced:o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(0)(function(){o.call({})})},{toFixed:function(e){var t,n,o,i,r=c(this),a=u(e),l="",s="0";if(a<0||20<a)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||1e21<=r)return String(r);if(r<0&&(l="-",r=-r),1e-21<r)if(n=(t=function(e){for(var t=0,n=e;4096<=n;)t+=12,n/=4096;for(;2<=n;)t+=1,n/=2;return t}(r*g(2,69,1))-69)<0?r*g(2,-t,1):r/g(2,t,1),n*=4503599627370496,0<(t=52-t)){for(h(0,n),o=a;7<=o;)h(1e7,0),o-=7;for(h(g(10,o,1),0),o=t-1;23<=o;)f(1<<23),o-=23;f(1<<o),h(1,1),f(2),s=p()}else h(0,n),h(1<<-t,0),s=p()+d.call("0",a);return s=0<a?l+((i=s.length)<=a?"0."+d.call("0",a-i)+s:s.slice(0,i-a)+"."+s.slice(i-a)):l+s}})},function(e,t,n){"use strict";var o=n(57),i=n(58)("bold");n(1)({target:"String",proto:!0,forced:i},{bold:function(){return o(this,"b","","")}})},function(e,t,n){var a=n(5),l=/"/g;e.exports=function(e,t,n,o){var i=String(a(e)),r="<"+t;return""!==n&&(r+=" "+n+'="'+String(o).replace(l,"&quot;")+'"'),r+">"+i+"</"+t+">"}},function(e,t,n){var o=n(0);e.exports=function(t){return o(function(){var e=""[t]('"');return e!==e.toLowerCase()||3<e.split('"').length})}},function(e,t,n){"use strict";var o=n(57),i=n(58)("italics");n(1)({target:"String",proto:!0,forced:i},{italics:function(){return o(this,"i","","")}})},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=r},function(e,t){e.exports=!1},function(e,t,n){e.exports=!n(8)&&!n(0)(function(){return 7!=Object.defineProperty(n(65)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(6),i=n(2).document,r=o(i)&&o(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,t,n){e.exports=n(26)("native-function-to-string",Function.toString)},function(e,t,n){var o,i,r,a=n(82),l=n(6),s=n(15),u=n(11),c=n(44),d=n(30),h=n(2).WeakMap;if(a){var f=new h,p=f.get,g=f.has,m=f.set;o=function(e,t){return m.call(f,e,t),t},i=function(e){return p.call(f,e)||{}},r=function(e){return g.call(f,e)}}else{var v=c("state");d[v]=!0,o=function(e,t){return s(e,v,t),t},i=function(e){return u(e,v)?e[v]:{}},r=function(e){return u(e,v)}}e.exports={set:o,get:i,has:r,enforce:function(e){return r(e)?i(e):o(e,{})},getterFor:function(n){return function(e){var t;if(!l(e)||(t=i(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},function(e,t,n){var a=n(11),l=n(14),s=n(85)(!1),u=n(30);e.exports=function(e,t){var n,o=l(e),i=0,r=[];for(n in o)!a(u,n)&&a(o,n)&&r.push(n);for(;t.length>i;)a(o,n=t[i++])&&(~s(r,n)||r.push(n));return r}},function(e,t,n){var o=n(0),i=/#|\.prototype\./,r=function(e,t){var n=l[a(e)];return n==u||n!=s&&("function"==typeof t?o(t):!!t)},a=r.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=r.data={},s=r.NATIVE="N",u=r.POLYFILL="P";e.exports=r},function(e,t,n){e.exports=!n(0)(function(){return!String(Symbol())})},function(e,t,n){t.f=n(3)},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e,t){var n=[][e];return!n||!o(function(){n.call(null,t||function(){throw 1},1)})}},function(e,t,n){"use strict";var o=n(4);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){var o=n(6),i=n(18),r=n(3)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},function(e,t,n){var o=n(3)("unscopables"),i=n(48),r=n(15),a=Array.prototype;null==a[o]&&r(a,o,i(null)),e.exports=function(e){a[o][e]=!0}},function(e,t,n){"use strict";var o=n(2),i=n(69),r=n(11),a=n(18),l=n(103),c=n(25),s=n(0),u=n(31).f,d=n(24).f,h=n(12).f,f=n(78),p="Number",g=o[p],m=g.prototype,v=a(n(48)(m))==p,y="trim"in String.prototype,b=function(e){var t,n,o,i,r,a,l,s,u=c(e,!1);if("string"==typeof u&&2<u.length)if(43===(t=(u=y?u.trim():f(u,3)).charCodeAt(0))||45===t){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+u}for(a=(r=u.slice(2)).length,l=0;l<a;l++)if((s=r.charCodeAt(l))<48||i<s)return NaN;return parseInt(r,o)}return+u};if(i(p,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(v?s(function(){m.valueOf.call(n)}):a(n)!=p)?l(new g(b(t)),n,w):b(t)},_=n(8)?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;_.length>z;z++)r(g,x=_[z])&&!r(w,x)&&h(w,x,d(g,x));(w.prototype=m).constructor=w,n(22)(o,p,w)}},function(e,t,n){var o=n(5),i="["+n(79)+"]",r=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$");e.exports=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(r,"")),2&t&&(e=e.replace(a,"")),e}},function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(e,t,n){"use strict";var s=n(4),i=n(5),u=n(106),c=n(36);n(37)("search",1,function(o,a,l){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=l(a,e,this);if(t.done)return t.value;var n=s(e),o=String(this),i=n.lastIndex;u(i,0)||(n.lastIndex=0);var r=c(n,o);return u(n.lastIndex,i)||(n.lastIndex=i),null===r?-1:r.index}]})},function(e,t,n){"use strict";var o=n(2),a=n(11),i=n(8),r=n(63),l=n(1),s=n(22),u=n(30),c=n(0),d=n(26),h=n(86),f=n(45),p=n(3),g=n(71),m=n(87),v=n(89),y=n(34),b=n(4),x=n(6),w=n(14),_=n(25),z=n(29),P=n(48),T=n(92),D=n(24),k=n(12),C=n(41),E=n(15),M=n(33),F=n(44)("hidden"),S=n(67),A="Symbol",O=S.set,I=S.getterFor(A),V=D.f,L=k.f,j=T.f,H=o.Symbol,R=o.JSON,B=R&&R.stringify,N="prototype",U=p("toPrimitive"),q=C.f,W=d("symbol-registry"),Z=d("symbols"),X=d("op-symbols"),Y=d("wks"),G=Object[N],J=o.QObject,Q=n(70),K=!J||!J[N]||!J[N].findChild,$=i&&c(function(){return 7!=P(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=V(G,t);o&&delete G[t],L(e,t,n),o&&e!==G&&L(G,t,o)}:L,ee=function(e,t){var n=Z[e]=P(H[N]);return O(n,{type:A,tag:e,description:t}),i||(n.description=t),n},te=Q&&"symbol"==typeof H.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof H},ne=function(e,t,n){return e===G&&ne(X,t,n),b(e),t=_(t,!0),b(n),a(Z,t)?(n.enumerable?(a(e,F)&&e[F][t]&&(e[F][t]=!1),n=P(n,{enumerable:z(0,!1)})):(a(e,F)||L(e,F,z(1,{})),e[F][t]=!0),$(e,t,n)):L(e,t,n)},oe=function(e,t){b(e);for(var n,o=v(t=w(t)),i=0,r=o.length;i<r;)ne(e,n=o[i++],t[n]);return e},ie=function(e){var t=q.call(this,e=_(e,!0));return!(this===G&&a(Z,e)&&!a(X,e))&&(!(t||!a(this,e)||!a(Z,e)||a(this,F)&&this[F][e])||t)},re=function(e,t){if(e=w(e),t=_(t,!0),e!==G||!a(Z,t)||a(X,t)){var n=V(e,t);return!n||!a(Z,t)||a(e,F)&&e[F][t]||(n.enumerable=!0),n}},ae=function(e){for(var t,n=j(w(e)),o=[],i=0;n.length>i;)a(Z,t=n[i++])||a(u,t)||o.push(t);return o},le=function(e){for(var t,n=e===G,o=j(n?X:w(e)),i=[],r=0;o.length>r;)!a(Z,t=o[r++])||n&&!a(G,t)||i.push(Z[t]);return i};Q||(s((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var e=void 0===arguments[0]?void 0:String(arguments[0]),t=f(e),n=function(e){this===G&&n.call(X,e),a(this,F)&&a(this[F],t)&&(this[F][t]=!1),$(this,t,z(1,e))};return i&&K&&$(G,t,{configurable:!0,set:n}),ee(t,e)})[N],"toString",function(){return I(this).tag}),C.f=ie,k.f=ne,D.f=re,n(31).f=T.f=ae,n(47).f=le,i&&(L(H[N],"description",{configurable:!0,get:function(){return I(this).description}}),r||s(G,"propertyIsEnumerable",ie,{unsafe:!0})),g.f=function(e){return ee(p(e),e)}),l({global:!0,wrap:!0,forced:!Q,sham:!Q},{Symbol:H});for(var se=M(Y),ue=0;se.length>ue;)m(se[ue++]);l({target:A,stat:!0,forced:!Q},{for:function(e){return a(W,e+="")?W[e]:W[e]=H(e)},keyFor:function(e){if(!te(e))throw TypeError(e+" is not a symbol");for(var t in W)if(W[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),l({target:"Object",stat:!0,forced:!Q,sham:!i},{create:function(e,t){return void 0===t?P(e):oe(P(e),t)},defineProperty:ne,defineProperties:oe,getOwnPropertyDescriptor:re}),l({target:"Object",stat:!0,forced:!Q},{getOwnPropertyNames:ae,getOwnPropertySymbols:le}),R&&l({target:"JSON",stat:!0,forced:!Q||c(function(){var e=H();return"[null]"!=B([e])||"{}"!=B({a:e})||"{}"!=B(Object(e))})},{stringify:function(e){for(var t,n,o=[e],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=t=o[1],(x(t)||void 0!==e)&&!te(e))return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!te(t))return t}),o[1]=t,B.apply(R,o)}}),H[N][U]||E(H[N],U,H[N].valueOf),h(H,A),u[F]=!0},function(e,t,n){var o=n(66),i=n(2).WeakMap;e.exports="function"==typeof i&&/native code/.test(o.call(i))},function(e,t,n){var l=n(11),s=n(84),u=n(24),c=n(12);e.exports=function(e,t){for(var n=s(t),o=c.f,i=u.f,r=0;r<n.length;r++){var a=n[r];l(e,a)||o(e,a,i(t,a))}}},function(e,t,n){var o=n(31),i=n(47),r=n(4),a=n(2).Reflect;e.exports=a&&a.ownKeys||function(e){var t=o.f(r(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var s=n(14),u=n(9),c=n(32);e.exports=function(l){return function(e,t,n){var o,i=s(e),r=u(i.length),a=c(n,r);if(l&&t!=t){for(;a<r;)if((o=i[a++])!=o)return!0}else for(;a<r;a++)if((l||a in i)&&i[a]===t)return l||a||0;return!l&&-1}}},function(e,t,n){var o=n(12).f,i=n(11),r=n(3)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,r)&&o(e,r,{configurable:!0,value:t})}},function(e,t,n){var o=n(88),i=n(11),r=n(71),a=n(12).f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});i(t,e)||a(t,e,{value:r.f(e)})}},function(e,t,n){e.exports=n(2)},function(e,t,n){var l=n(33),s=n(47),u=n(41);e.exports=function(e){var t=l(e),n=s.f;if(n)for(var o,i=n(e),r=u.f,a=0;i.length>a;)r.call(e,o=i[a++])&&t.push(o);return t}},function(e,t,n){var o=n(8),a=n(12),l=n(4),s=n(33);e.exports=o?Object.defineProperties:function(e,t){l(e);for(var n,o=s(t),i=o.length,r=0;r<i;)a.f(e,n=o[r++],t[n]);return e}},function(e,t,n){var o=n(2).document;e.exports=o&&o.documentElement},function(e,t,n){var o=n(14),i=n(31).f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==r.call(e)?function(e){try{return i(e)}catch(e){return a.slice()}}(e):i(o(e))}},function(e,t,n){var r=n(72);e.exports=function(o,i,e){if(r(o),void 0===i)return o;switch(e){case 0:return function(){return o.call(i)};case 1:return function(e){return o.call(i,e)};case 2:return function(e,t){return o.call(i,e,t)};case 3:return function(e,t,n){return o.call(i,e,t,n)}}return function(){return o.apply(i,arguments)}}},function(e,t,n){var o=n(14),i=n(24).f,r=n(8),a=n(0)(function(){i(1)}),l=!r||a;n(1)({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},function(e,t,n){var o=n(23),i=n(33),r=n(0)(function(){i(1)});n(1)({target:"Object",stat:!0,forced:r},{keys:function(e){return i(o(e))}})},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){"use strict";var o=[].forEach,i=n(35)(0),r=n(73)("forEach");e.exports=r?function(e){return i(this,e,arguments[1])}:o},function(e,t,n){"use strict";var d=n(4),h=n(9),i=n(5),f=n(52),p=n(36);n(37)("match",1,function(o,u,c){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=c(u,e,this);if(t.done)return t.value;var n=d(e),o=String(this);if(!n.global)return p(n,o);for(var i,r=n.unicode,a=[],l=n.lastIndex=0;null!==(i=p(n,o));){var s=String(i[0]);""===(a[l]=s)&&(n.lastIndex=f(o,h(n.lastIndex),r)),l++}return 0===l?null:a}]})},function(e,t,n){var s=n(19),u=n(5);e.exports=function(e,t,n){var o,i,r=String(u(e)),a=s(t),l=r.length;return a<0||l<=a?n?"":void 0:(o=r.charCodeAt(a))<55296||56319<o||a+1===l||(i=r.charCodeAt(a+1))<56320||57343<i?n?r.charAt(a):o:n?r.slice(a,a+2):i-56320+(o-55296<<10)+65536}},function(e,t,n){"use strict";var i=n(9),r=n(101),a="startsWith",o=n(102)(a),l=""[a];n(1)({target:"String",proto:!0,forced:!o},{startsWith:function(e){var t=r(this,e,a),n=i(Math.min(1<arguments.length?arguments[1]:void 0,t.length)),o=String(e);return l?l.call(t,o,n):t.slice(n,n+o.length)===o}})},function(e,t,n){var o=n(75),i=n(5);e.exports=function(e,t,n){if(o(t))throw TypeError("String.prototype."+n+" doesn't accept regex");return String(i(e))}},function(e,t,n){var o=n(3)("match");e.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[o]=!1,"/./"[t](n)}catch(e){}}return!1}},function(e,t,n){var r=n(6),a=n(104);e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&r(o)&&a&&a(e,o),e}},function(e,t,n){var i=n(105);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,o=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),o=e instanceof Array}catch(e){}return function(e,t){return i(e,t),o?n.call(e,t):e.__proto__=t,e}}():void 0)},function(e,t,n){var o=n(6),i=n(4);e.exports=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}},function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},function(e,t,n){var i=n(4),r=n(72),a=n(3)("species");e.exports=function(e,t){var n,o=i(e).constructor;return void 0===o||null==(n=i(o)[a])?t:r(n)}},function(e,t,n){var o=n(0),i=n(79);e.exports=function(e){return o(function(){return!!i[e]()||"​᠎"!="​᠎"[e]()||i[e].name!==e})}},function(e,t,n){var o=n(18);e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},function(e,t,n){"use strict";var i=n(19),r=n(5);e.exports="".repeat||function(e){var t=String(r(this)),n="",o=i(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;0<o;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},function(e,t,n){var o=n(112),i=Object.prototype;o!==i.toString&&n(22)(i,"toString",o,{unsafe:!0})},function(e,t,n){"use strict";var o=n(113),i={};i[n(3)("toStringTag")]="z",e.exports="[object z]"!==String(i)?function(){return"[object "+o(this)+"]"}:i.toString},function(e,t,n){var i=n(18),r=n(3)("toStringTag"),a="Arguments"==i(function(){return arguments}());e.exports=function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),r))?n:a?i(t):"Object"==(o=i(t))&&"function"==typeof t.callee?"Arguments":o}},function(e,t,n){"use strict";var o=n(4),i=n(0),r=n(74),a=n(8),l="toString",s=/./[l],u=i(function(){return"/a/b"!=s.call({source:"a",flags:"b"})}),c=s.name!=l;(u||c)&&n(22)(RegExp.prototype,l,function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?r.call(e):void 0)},{unsafe:!0})},function(e,t,n){n(1)({target:"Array",proto:!0},{fill:n(116)}),n(76)("fill")},function(e,t,n){"use strict";var l=n(23),s=n(32),u=n(9);e.exports=function(e){for(var t=l(this),n=u(t.length),o=arguments.length,i=s(1<o?arguments[1]:void 0,n),r=2<o?arguments[2]:void 0,a=void 0===r?n:s(r,n);i<a;)t[i++]=e;return t}},function(e,t,n){"use strict";var o=n(57),i=n(58)("strike");n(1)({target:"String",proto:!0,forced:i},{strike:function(){return o(this,"strike","","")}})},function(t,e){(function(e){t.exports=e}).call(this,{})},function(e,t,n){"use strict";n.r(t);n(81),n(49),n(20),n(94),n(95),n(10),n(98),n(16),n(100);var Xe,o,i=n(28),r=n(60),a=n(61),l=n(62),Kt=void 0===i?null:i,$t=(void 0===a&&(void 0===i.ui||i.ui),void 0===r?null:r),He=void 0===l?null:l;function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}(o=Xe||(Xe={}))[o.Windows=0]="Windows",o[o.Mac=1]="Mac",o[o.Unknown=2]="Unknown";var h,f,p=function(){function e(){}return e.prototype.Any=function(){return this.iOS||this.Android||this.IEMobile},d(e,[{key:"iOS",get:function(){return!!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)}},{key:"Android",get:function(){return!!navigator.userAgent.match(/(Android)/i)}},{key:"IEMobile",get:function(){return!!navigator.userAgent.match(/(IEMobile)/i)}}]),e}(),g=function(){function e(){u(this,"browserLayoutVersion",navigator.userAgent.match(/(?:Gecko|Presto|Trident|WebKit).[\d.]*/))}return d(e,[{key:"Gecko",get:function(){return!!navigator.userAgent.match(/(Gecko)/i)}},{key:"Presto",get:function(){return!!navigator.userAgent.match(/(Presto)/i)}},{key:"Trident",get:function(){return!!navigator.userAgent.match(/(Trident)/i)}},{key:"Webkit",get:function(){return!!navigator.userAgent.match(/(WebKit)/i)}},{key:"Version",get:function(){return this.browserLayoutVersion?this.browserLayoutVersion[0].replace(/\D*/,""):null}}]),e}(),m=function(){function e(){u(this,"supportsVml",e.supportsVML())}return e.supportsVML=function(){var e;if(void 0===e){var t=Kt("<div/>").appendTo("body"),n=Kt('<v:shape id="vml_flag1" adj="1" />').appendTo(t);n.css("behavior","url(#default#VML)"),e=!n[0]||"object"==typeof n[0].adj,t.remove()}return e},d(e,[{key:"SVG",get:function(){return!(!window.SVGAngle&&!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"))}},{key:"Touch",get:function(){return!!("ontouchstart"in window)}},{key:"VML",get:function(){return this.supportsVml}},{key:"foreignObject",get:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Extensibility","1.1")}},{key:"Compatibility",get:function(){return void 0!==document.documentMode&&7===document.documentMode}},{key:"FlexBox",get:function(){return"flex"in document.documentElement.style||"WebkitFlex"in document.documentElement.style||"msFlex"in document.documentElement.style}}]),e}(),v=function(){function e(){u(this,"mobile",void 0),u(this,"browserVersion",void 0),this.mobile=new p,this.Edge?this.browserVersion=navigator.userAgent.match(/(?:Edge).[\d.]*/):this.browserVersion=null,this.browserVersion||(this.browserVersion=navigator.userAgent.match(/(?:MSIE|Firefox|Chrome|Safari|Opera| rv|Edge).[\d.]*/))}return d(e,[{key:"Explorer",get:function(){return 0<=navigator.userAgent.indexOf("MSIE")||0<=navigator.userAgent.indexOf("Trident")}},{key:"Firefox",get:function(){return 0<=navigator.userAgent.indexOf("Firefox")||0<=navigator.userAgent.indexOf("Minefield")}},{key:"Safari",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&navigator.userAgent.indexOf("Chrome")<0&&navigator.userAgent.indexOf("Edge")<0}},{key:"Opera",get:function(){return 0<=navigator.userAgent.indexOf("Opera")}},{key:"Chrome",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")<0}},{key:"Edge",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&0<=navigator.userAgent.indexOf("Edge")}},{key:"Mobile",get:function(){return this.mobile}},{key:"Version",get:function(){return this.browserVersion?this.browserVersion[0].replace(/\D*/,""):null}}]),e}(),y=function(t){var e,n;function o(){var e;return u(s(e=t.call(this)||this),"features",void 0),u(s(e),"layout",void 0),u(s(e),"platform",void 0),e.features=new m,e.layout=new g,e.platform=e.DetectPlatform(),e}
/**
   * @private
   */return n=t,(e=o).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n,o.prototype.DetectPlatform=function(){return navigator.platform.startsWith("Mac")?Xe.Mac:navigator.platform.startsWith("Win")?Xe.Windows:Xe.Unknown},d(o,[{key:"Features",get:function(){return this.features}
/**
     * @private
     */},{key:"Layout",get:function(){return this.layout}
/**
     * @private
     */},{key:"Platform",get:function(){return this.platform}}]),o}(v),b=new v,en=new y,x=b,tn={
/** Specify no mouse behavior at all. */
None:0,
/** Clicking and dragging the mouse will scroll the image. */
Pan:1,
/** Clicking will zoom in. */
ZoomIn:2,
/** Clicking will zoom out. */
ZoomOut:3,
/** Shows a context menu for the clicked object (where applicable). */
ContextMenu:4,
/** Allows mouse events to pass through the DOM without any handling. */
PassThrough:5,
/** Mouse will be set to crosshairs and can be used to drag and modify a selection rectangle on the image.
   * This tool requires that the {@link WebDocumentViewerConfig.showselecttools} flag was set.
   */
Selection:6,
/** Zoom in on a specified area defined by dragging a rectangle onto the image.
   * This tool requires that the {@link WebDocumentViewerConfig.showselecttools} flag was set.
   */
ZoomArea:7,
/** Input actions are interpreted as text selection
   * This tool requires that the {@link WebDocumentViewerConfig.showselecttools} flag was set.
   */
Text:8},Re={
/** Automatically determined by the browser. */
Auto:"",
/** An arrow pointer. */
Arrow:"default",
/** A crosshair usually used in drawing a box. */
Crosshair:"crosshair",
/** A grabbing cursor. Usually changes to gabbed while the mouse button is down. */
Grab:x.Firefox?"-moz-grab":"hand",
/** A hand with a finger pointing. Usually what the browser uses for clicking hyperlinks. */
Hand:"pointer",
/** A crosshair pointer with arrowheads on the ends indicating movement. */
Move:"move",
/** A magnifying glass with a plus sign in it. */
ZoomIn:x.Firefox?"-moz-zoom-in":'url("%1ZoomIn.cur"pointer), pointer',
/** A magnifying glass with a minus sign in it. */
ZoomOut:x.Firefox?"-moz-zoom-out":'url("%1ZoomOut.cur"), pointer',
/** A selection editing cursor. */
Text:"text",
/** A vertical text editing cursor. */
VerticalText:"vertical-text",
/** A wait cursor. */
Wait:"wait",
/** A custom CSS cursor string provided by the user. */
Custom:"%2"},nn={
/** Scrolls horizontally. */
Horizontal:"horizontal",
/** Scrolls vertically. */
Vertical:"vertical"},on={
/** No fitting will be applied to the image */
None:0,
/** Finds the best option between width or height based fitting. */
Best:1,
/** Fits the image to the available width. */
Width:2,
/** Fits the image to the available height. */
Height:3},rn={
/** Selects the page under the top left corner of the viewer  */
TopLeft:{x:0,y:0},
/** Selects the page under the middle left of the viewer  */
MiddleLeft:{x:0,y:.5},
/** Selects the page under the bottom left corner of the viewer  */
BottomLeft:{x:0,y:1},
/** Selects the page under the center location of viewer  */
Center:{x:.5,y:.5}},an={
/** Text selection scrolling is disabled */
None:0,
/** Normal scroll area. Around 10% of the corresponding viewport dimension */
Normal:.1,
/** Normal scroll area. Around 20% of the corresponding viewport dimension */
Large:.2},Ye={
/**
   * Only one thumbnail can be selected 
   */
SingleSelect:0,
/**
   * Multiple thumbnails can be selected
   */
MultiSelect:1},Ge={
/**
   * Items are sorted in their index order.
   */
ItemIndexOrder:0,
/**
   * Items are sorted in the order they were selected.
   */
SelectedOrder:1},_={
/**
   * File is not rejected from upload
   */
None:0,
/**
   * File is bigger than allowed by {@link WebDocumentViewerConfig.upload.allowedmaxfilesize | allowedmaxfilesize} property.
   */
Size:1,
/**
   * File type or extensions is not allowed by {@link WebDocumentViewerConfig.upload.allowedfiletypes | allowedfiletypes} property.
   */
Type:2,
/**
   * File with the same name has already added to the upload queue.
   */
Name:3},w={FileUploadRejectReason:_,SelectedItemsOrder:Ge,SelectionMode:Ye,ScrollArea:an,PageSelection:rn,Fitting:on,ScrollDirection:nn,MouseToolCursor:Re,MouseToolType:tn,Browser:x},xe={
/**
   * Image annotation.
   */
image:"image",
/**
   * Highlight annotation.
   */
highlight:"highlight",
/**
   * Rectangle annotation.
   */
rectangle:"rectangle",
/**
   * Filled rectangle annotation.
   */
fillrect:"fillrect",
/**
   * Text annotation.
   */
text:"text",
/**
   * Stamp annotation.
   */
stamp:"stamp",
/**
   * Ellipse annotation.
   */
ellipse:"ellipse",
/**
   * Single line annotation.
   */
line:"line",
/**
   * Multiline annotation. Similar to `polygon` but represents not enclosed shape, first and last points are not joined.
   */
lines:"lines",
/**
   * Freehand annotation.
   */
freehand:"freehand",
/**
   * Polygon annotation. Similar to `lines` but represents enclosed shape.
   */
polygon:"polygon"},ln=(n(54),n(38),n(17),n(7),n(21),n(77),n(80),n(13),{
/** Page element class. Container for all page elements - image, annotations, forms, text, etc layers. */
atala_page_div:"atala_page_div",
/** Page image container that is in initial image load state */
atala_page_loading:"atala_page_loading",
/** Page image anchor container element class*/
atala_page_image_anchor:"atala_page_image_anchor",
/** Page image element class*/
atala_page_image:"atala_page_image",
/** Page index element class. see {@link WebDocumentViewerConfig.showpagenumber | showpagenumber} config option */
atala_page_number:"atala_page_number",
/** Active page class */
atala_active_page:"atala_active_page",
/** Active thumbnail class */
atala_active_thumb:"atala_active_thumb",
/** Thumbnail caption class */
atala_thumb_caption:"atala_thumb_caption",
/** Document toolbar element class */
atala_toolbar:"atala_toolbar",
/** Annotations toolbar element class */
atala_annotation_toolbar:"atala_annotation_toolbar",
/** Toolbar button element class */
atala_toolbar_button:"atala_toolbar_button",
/** Class of the main outer object that holds the scrollbars */
atala_main_container:"atala_main_container",
/** Class of the inner object that controls scrolling */
atala_scroller:"atala_scroller",
/** Class of the inner object that defines the viewable area */
atala_viewport:"atala_viewport",
/** Inner content container object class */
atala_content:"atala_content",
/** Thumbnailer draggable area */
atala_thumb_draggable:"atala_thumb_draggable",
/** Placeholder element that is inserted into Thumbnailer to highlight drop location */
atala_drag_placeholder:"atala_drag_placeholder",
/** Placeholder inserted before page dom object that is used in virtual scrolling */
atala_dom_edge_first:"atala_dom_edge_first",
/** Placeholder inserted after page dom object that is used in virtual scrolling */
atala_dom_edge_last:"atala_dom_edge_last",
/** Inner horizontal scroll bar object class */
atala_scroll_horizontal:"atala_scroll_horizontal",
/** Inner vertical scroll bar object */
atala_scroll_vertical:"atala_scroll_vertical",
/** Toolbar span element containing the page number */
atala_page_label:"atala_page_label",
/** Context or dropdown menu element. Could be multiple instances within same viewer DOM sub tree */
atala_context_menu:"atala_context_menu",
/** Status div */
atala_statusbar:"atala_statusbar",
/** "Save Changes" toolbar button */
atala_tool_button_save:"atala_tool_button_save",
/** "Previous Page" toolbar button */
atala_tool_button_page_prev:"atala_tool_button_page_prev",
/** "Next Page" toolbar button */
atala_tool_button_page_next:"atala_tool_button_page_next",
/** "Zoom Out" toolbar button */
atala_tool_button_zoom_out:"atala_tool_button_zoom_out",
/** "Zoom In" toolbar button */
atala_tool_button_zoom_in:"atala_tool_button_zoom_in",
/** "Full Size" toolbar button */
atala_tool_button_fit_none:"atala_tool_button_fit_none",
/** "Best Fit" toolbar button */
atala_tool_button_fit_best:"atala_tool_button_fit_best",
/** "Fit To Width" toolbar button */
atala_tool_button_fit_width:"atala_tool_button_fit_width",
/** "Zoom Area" toolbar button */
atala_tool_button_zoom_area:"atala_tool_button_zoom_area",
/** "Rotate Left" tooltip button */
atala_tool_button_rotate_left:"atala_tool_button_rotate_left",
/** "Rotate Right" tooltip button */
atala_tool_button_rotate_right:"atala_tool_button_rotate_right",
/** "Text selection" toolbar button */
atala_tool_button_text_tool:"atala_tool_button_text_tool",
/** "Pan" toolbar button */
atala_tool_button_pan_tool:"atala_tool_button_pan_tool",
/** "Draw Ellipse" annotation toolbar button */
atala_tool_button_ellipse_anno:"atala_tool_button_ellipse_anno",
/** "Draw Highlight" annotation toolbar button */
atala_tool_button_highlight_anno:"atala_tool_button_highlight_anno",
/** "Draw Line" annotation toolbar button */
atala_tool_button_line_anno:"atala_tool_button_line_anno",
/** "Draw Poly Lines" annotation toolbar button */
atala_tool_button_lines_anno:"atala_tool_button_lines_anno",
/** "Draw Freehand" annotation toolbar button */
atala_tool_button_freehand_anno:"atala_tool_button_freehand_anno",
/** "Draw Polygon" annotation toolbar button */
atala_tool_button_polygon_anno:"atala_tool_button_polygon_anno",
/** "Draw Rectangle" annotation toolbar button */
atala_tool_button_rect_anno:"atala_tool_button_rect_anno",
/** "Filled Rectangle" annotation toolbar button */
atala_tool_button_fillrect_anno:"atala_tool_button_fillrect_anno",
/** "Draw Text" annotation toolbar button */
atala_tool_button_text_anno:"atala_tool_button_text_anno",
/** "Add a Stamp" annotation toolbar button */
atala_tool_button_stamp_anno:"atala_tool_button_stamp_anno",
/** "Add a Sticky Note" annotation toolbar button */
atala_tool_button_note_anno:"atala_tool_button_note_anno",
/** "Add a Comment" annotation toolbar button */
atala_tool_button_comment_anno:"atala_tool_button_comment_anno",
/** Selection Rubberband div object */
atala_tool_selection_band:"atala_tool_selection_band",
/** Selection Rubberband grip div object */
atala_tool_selection_grip:"atala_tool_selection_grip",
/** Selection Rubberband mask div object */
atala_tool_selection_mask:"atala_tool_selection_mask",
/** Selection Rubberband tooltip div object */
atala_tool_selection_tooltip:"atala_tool_selection_tooltip",
/** Text search containing div object */
atala_search_container:"atala_search_container",
/** Text search input box */
atala_search_input:"atala_search_input",
/** Text search next match button */
atala_search_next:"atala_search_next",
/** Text search previous match button */
atala_search_prev:"atala_search_prev",
/** "Upload document" toolbar button */
atala_tool_button_upload:"atala_tool_button_upload",
/** Upload control root container */
atala_upload_control:"atala-upload-control",
/** Upload input control */
atala_upload_file:"atala-upload-file",
/** Upload control working area container */
atala_upload_flex_area:"atala-upload-flex-area",
/** Upload control single file status control */
atala_upload_single_file:"atala-upload-single-file",
/** Upload control multiple files status control */
atala_upload_multiple_files:"atala-upload-multiple-files",
/** Upload control buttons area container */
atala_upload_flex_buttons:"atala-upload-flex-buttons",
/** Upload control buttons conatiner */
atala_upload_buttons:"atala-upload-buttons",
/** Upload control Cancel button */
atala_upload_cancel_button:"atala-upload-cancel-button",
/** Upload control Ok button */
atala_upload_ok_button:"atala-upload-ok-button",
/** Upload control Add button */
atala_upload_add_button:"atala-upload-add-button",
/** Upload control multiple files Name column header */
atala_upload_files_header_name:"atala-upload-files-header-name",
/** Upload control multiple files Size column header */
atala_upload_files_header_size:"atala-upload-files-header-size",
/** Upload control multiple files Status column header */
atala_upload_files_header_status:"atala-upload-files-header-status"}),sn={
/** Index of the page currently displayed within the element. applies to elements having `.atala_page_div` class */
atala_page_index:"atala_page_index"};n(39);function z(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(f=h||(h={})).Jquery="jQuery",f.JqueryUI="jQuery UI",f.RaphaelJS="Raphaël",f.Clipboard="clipboard.js";var P,T,D,k=function(){function a(){}var e=a.prototype;return e.checkDependency=function(e,t){var n=this,o=a.requiredDependencies.filter(function(e){return z(this,n),e.name===t}.bind(this))[0],i={dependency:o,success:!1,reason:"Dependency is not loaded or not found."};if(e){var r="";switch(e.fn&&e.fn.jquery?r=e.fn.jquery:e.version&&(r=e.version),t){case h.Clipboard:i.success=!0,i.reason="WDV can't verify the version of the dependency.";break;case h.Jquery:case h.JqueryUI:case h.RaphaelJS:this.hasNewerVersion(r,o.version)?(i.success=!0,i.reason=""):i.reason="Dependency has a lower version ("+r+") than required."}}return 0<i.reason.length&&(i.reason+=" The minimal required version is '"+o.version+"'."),i},e.hasNewerVersion=function(e,t){var o=this;if(/^[0-9]+\.[0-9]+\.[0-9]+(-([A-Za-z0-9-]+\.?)+)?(\+([A-Za-z0-9-]+\.?)+)?$/.test(e)){for(var i=/^[0-9]+\.[0-9]+\.[0-9]+/,n=function(e){var t=this;if(z(this,o),null!==i){var n=i.exec(e);if(null!=n&&0<n.length)return n[0].split(".").map(function(e){return z(this,t),parseInt(e)}.bind(this))}return[]}.bind(this),r=n(e),a=n(t),l=0;l<3;l++){if(r[l]<a[l])return!1;if(r[l]>a[l])return!0}var s=e.replace(i,"");return 0===s.length||"+"===s[0]}return!1},a}();function C(e,t,n,o,i){var r=e.checkDependency(t,n);return r.success?(i&&i(n,r.reason),!0):(o(n,r.reason),!1)}function un(e){var n=this,t=new k,o=function(e,t){z(this,n),console.error("The dependency verification for '"+e+"' has failed. "+t)}.bind(this),i=function(e,t){z(this,n)}.bind(this),r=C(t,void 0===Kt?null:Kt,h.Jquery,o);return e.checkjQueryOnly||(r&&(r=C(t,Kt.ui,h.JqueryUI,o)),e.checkRaphael&&(r=C(t,void 0===$t?null:$t,h.RaphaelJS,o)&&r),e.checkClipboard&&(r=C(t,void 0===He?null:He,h.Clipboard,o,i)&&r)),r}P=k,T="requiredDependencies",D=[{name:h.Jquery,version:"1.12.4"},{name:h.JqueryUI,version:"1.12."},{name:h.RaphaelJS,version:"2.1.0"},{name:h.Clipboard,version:"2.0.0"}],T in P?Object.defineProperty(P,T,{value:D,enumerable:!0,configurable:!0,writable:!0}):P[T]=D;n(40);
/**
 * @private
 */
function X(e,t){t||(t={x:0,y:0});var n=e.target instanceof HTMLElement?e.target:null;for(en.Explorer&&null===e&&(e=event),e instanceof MouseEvent?(t.x=e.clientX,t.y=e.clientY):(t.x=e.touches[0].clientX,t.y=e.touches[0].clientY);n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)t.x-=n.offsetLeft-n.scrollLeft,t.y-=n.offsetTop-n.scrollTop,n=n.offsetParent instanceof HTMLElement?n.offsetParent:null;return t}
/**
 * @private
 */function G(e,t,n){t||(t={x:0,y:0});var o=e.originalEvent;if(e.offsetX||e.offsetY)if(en.Firefox){var i=e.target.raphaelParent?Kt(e.target).parents("svg").offset():Kt(e.target.offsetParent||e.target.parentNode).offset();t.y=i?(t.x=e.pageX-i.left,e.pageY-i.top):(t.x=e.pageX,e.pageY)}else if(void 0===o||o.currentTarget===o.target||n)t.x=e.offsetX,t.y=e.offsetY;else if(o.currentTarget.offsetLeft||o.currentTarget.offsetTop||!o.currentTarget.ownerSVGElement)t.x=o.currentTarget.offsetLeft+e.offsetX,t.y=o.currentTarget.offsetTop+e.offsetY;else{var r=en.Explorer?o.currentTarget.ownerSVGElement.getBBox():o.currentTarget.getBBox();t.x=Math.round(r.x),t.y=Math.round(r.y)}else if(en.Explorer)o instanceof MouseEvent?(t.x=o.x,t.y=o.y):(t.x=0,t.y=0);else{var a=null,l=e.target;o instanceof TouchEvent&&1===o.touches.length&&(l=document.elementFromPoint(o.touches[0].clientX,o.touches[0].clientY));var s=en.Features.Touch&&o instanceof TouchEvent?o.touches[0]:null,u=Kt(l),c={pageX:0,pageY:0};null!==s?(c.pageX=s.pageX,c.pageY=s.pageY):o instanceof MouseEvent&&(c.pageX=o.pageX,c.pageY=o.pageY),c.pageX||c.pageY||(c.pageX=e.pageX,c.pageY=e.pageY),e.target.raphael?a=u.parents("div:eq(0)").offset():(e.target.raphaelParent||0<u.parents("svg").length)&&(a=u.parents("svg").parents("div:eq(0)").offset()),a||(a=u.offset()),t.y=a?(t.x=c.pageX-a.left,c.pageY-a.top):(t.x=c.pageX,c.pageY)}return t}
/**
 * Gets the normalized offsetLeft and offsetTop from an SVG element
 * with respect to its parent jQuery object
 * @private
 * @param objSVG: object, svg object from the dom
 * @param parent: object, jQuery object representing the parent DOM node
 */function J(e,t){var n={left:0,top:0};if(e instanceof HTMLElement)n.left=e.offsetLeft,n.top=e.offsetTop;else{var o=Kt(e).offset(),i=t.offset();o&&i&&(n.left=o.left-i.left,n.top=o.top-i.top)}return n}
/**
 * @private
 */
/**
 * @private
 */
function Q(e,t,n,o,i){var r=Math.max(e,n),a=Math.min(e,n),l=Math.max(t,o),s=Math.min(t,o);return{x:r-a,y:l-s,dx:i?i.left-a:0,dy:i?i.top-s:0,left:a,right:r,top:s,bottom:l}}
/**
 * Creates a rectangle object.
 * @private
 */
/**
 * Calculates rectangle bounds for the clockwise page rotation to the specified angle.
 * @private
 * @param rect
 * @param page
 * @param angle positive number, must be exactly divisible by 90.
 */
function Be(e,t,n){if(0===n)return e;n=(n-n%90)%360;var o,i,r,a,l=e.x,s=e.y;switch(n){case 90:l=t.height-e.y-e.height,s=e.x;break;case 180:l=t.width-e.x-e.width,s=t.height-e.y-e.height;break;case 270:l=e.y,s=t.width-e.x-e.width}return o=l,i=s,r=90===n||270===n?e.height:e.width,a=90===n||270===n?e.width:e.height,{x:o,y:i,width:r,height:a}}
/**
 * Calculates new point coordinates for the clockwise page rotation to the specified angle.
 * @private
 * @param point
 * @param page
 * @param angle positive number, must be exactly divisible by 90.
 */function Ne(e,t,n){return Be({x:e.x,y:e.y,width:0,height:0},t,n)}
/**
 * just a simple function to return false without writing it repeatedly
 * @private
 */function K(){return!1}
/**
 * just a simple empty function
 * @private
 */function $(){}
/**
 * just a simple event handler to stop the propagation of an event.
 * @private
 */function M(e){e.stopPropagation()}
/**
 * Creates a function that wraps multiple functions into one
 * @private
 * @param arr: array of functions
 * @param arguments to pass to called functions
 */
/**
 * @private
 */
function cn(e){return{" transform":e,"-moz-transform":e,"-webkit-transform":e,"-o-transform":e,"-ms-transform":e}}
/**
 * @private
 */function we(e,n){var o=this,i={x:0,y:0,width:0,height:0};return e&&e.length&&(n=n||$t.matrix(),i.x=n.x(e[0].x,e[0].y),i.y=n.y(e[0].x,e[0].y),e.forEach(function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,o);var t={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};i.x=t.x<i.x?t.x:i.x,i.y=t.y<i.y?t.y:i.y,i.width=t.x>i.width?t.x:i.width,i.height=t.y>i.height?t.y:i.height}.bind(this)),i.width-=i.x,i.height-=i.y),i}
/**
 * @private
 */function Je(e){if("string"==typeof e){var t=e.trim(),n=parseInt(t);if(/^([+|-]?[0-9]+)$/.test(t))return n}return"number"!=typeof e?null:e}
/**
 * @private 
 */function dn(e){return isFinite(e)&&!(e%1)}function Ue(e){return!isNaN(e)&&isFinite(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var hn=function(){function e(e){E(this,"viewer",void 0),E(this,"currentThumb",void 0),this.viewer=e,this.currentThumb=null}var t=e.prototype;return t.isViewerActive=function(){return!(!this.viewer||!this.currentThumb)},t.isThumbnailerActive=function(e){return e&&!!this.currentThumb&&this.currentThumb.get()===e.get()},t.activateThumbnailer=function(e,t,n,o,i){var r=this.isThumbnailerActive(e);r&&!i||(this.currentThumb&&!r&&this.currentThumb.detachViewer(),this.currentThumb=e,this.viewer&&this.viewer.isInitialized()&&(this.viewer.switchDocument(t,n,o),this.currentThumb.activateViewer()))},t.closeDocument=function(e,t){e=e||this.currentThumb;var n=this.isThumbnailerActive(e);n&&(e.detachViewer(),this.currentThumb=null),this.viewer&&this.viewer.isInitialized()&&t&&this.viewer.closeDocument(t,n)},e}();function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fn=function(){function e(e){S(this,"jqe",Kt({})),S(this,"memoryEntries",[]),S(this,"config",{colorDepth:8,compression:1,highWaterMark:5e8,pageSize:{width:800,height:1132}}),S(this,"bytesInUse",0),e&&Kt.extend(this.config,e)}var t,n,o,i=e.prototype;return i.dispose=function(){this.clearEntries()},i.bind=function(){return this.jqe.on.apply(this.jqe,arguments),this},i.unbind=function(){return this.jqe.off.apply(this.jqe,arguments),this},i.trigger=function(e){return this.jqe.trigger.apply(this.jqe,arguments),this},i.allocate=function(e){return this.memoryEntries.push(e),this.bytesInUse+=this.calcBytes(e),this.bytesInUse>this.config.highWaterMark&&this.trigger("exceededhighwatermark"),this.bytesInUse},i.deallocateOldestEntry=function(){var e=this.memoryEntries.shift();return void 0!==e&&this.deallocate(e),e},i.clearEntries=function(){this.memoryEntries.length=0,this.bytesInUse=0},i.deallocate=function(e){return this.bytesInUse-=this.calcBytes(e),this.bytesInUse<0&&(this.bytesInUse=0),this.bytesInUse},i.calcBytes=function(e){return(e.width()||this.config.pageSize.width)*(e.height()||this.config.pageSize.height)*this.config.colorDepth/8*this.config.compression},t=e,(n=[{key:"typeOf",get:function(){return"Atalasoft.Document.MemoryTacker"}},{key:"colorDepth",set:function(e){this.config.colorDepth=e},get:function(){return this.config.colorDepth}},{key:"highWatermark",set:function(e){this.config.highWaterMark=e},get:function(){return this.config.highWaterMark}},{key:"pageSize",set:function(e){this.config.pageSize={width:e.width,height:e.height}},get:function(){return this.config.pageSize}}])&&F(t.prototype,n),o&&F(t,o),e}(),pn=[11,2,0,224],O=(n(55),n(111),n(114),n(115),n(56),n(59),function(o,e,t){var n=this,f=o,h=e,p=null,g=null,m=!1,v={" ":!0,"-":!0,"?":!0,"\n":!0,"\t":!0},i=t,r=null;function y(){var e,t;(t=document.body).currentStyle?e=t.currentStyle.direction:window.getComputedStyle&&(e=document.defaultView.getComputedStyle(t,null).getPropertyValue("direction")),"rtl"===e.toLowerCase()&&(m=!0),p=Kt("<canvas "+(m?'dir="rtl"':"")+"/>"),g=Kt('<span style="position:absolute; visibility:hidden; left: -5000px;">{[|,0123456789Thqkbfjplyg</span>'),Kt(i).append(g)}function a(e){p&&g||y(),h.applyTo(g),p[0].width=e.width,p[0].height=e.height;var t=p[0].getContext("2d"),n=function(e,t,n){var o=[];if("string"==typeof t){if(f.text.autoscale)return t.split("\n");for(var i=t,r=n,a=function(e){for(var t=[],n="",o=0,i=0;i<e.length;i++){var r=e[i];v[n]&&(t.push(e.substr(o,i-o)),o=i),n=r}return o<e.length&&t.push(e.substr(o,e.length-o)),t}(i),l="",s="",u=[],c=0;c<a.length;c++)if(l=s,s=a[c],e.measureText(s).width>r)for(var d=s.split(""),h=0;h<d.length;h++)u.push(d[h]),e.measureText(u.join("")).width>r&&(u.pop(),o.push(u.join("")),u.length=0,u.push(d[h]));else u.push(s),(e.measureText(u.join("").trim()).width>r||0<=l.indexOf("\n"))&&(u.pop(),o.push(u.join("")),u.length=0,u.push(s));0<u.length&&(o.push(u.join("")),u.length=0)}return o}(t,f.text.value,e.width),o=function(e){if(f.text.autoscale){var t=Math.max(0,f.height-2*f.outline.width);return 0<e?Math.floor(t/e):t}return h.applyTo(g,1),g[0].offsetHeight}(n.length),i=f.text.autoscale?o:f.text.font.size,r=[f.text.font.italic?"italic":"normal",f.text.font.bold?"bold":"normal",i+"px",f.text.font.family];t.font=r.join(" "),t.fillStyle=f.text.font.color,t.textBaseline="top";var a,l=0,s=n.length?n[0]:"";for(a=0;a<n.length;a++)n[a].length>s.length&&(s=n[a]);var u=t.measureText(s).width,c=m?u:0;if(f.text.autoscale&&"left"!==f.text.align)switch(f.text.align){case"center":t.textAlign=f.text.align,c=u/2;break;case"right":t.textAlign=f.text.align,c=m?0:u;break;default:t.textAlign="start",c=m?u:0}if(f.text.autoscale){var d=e.width/u;t.scale(d,1)}if(!f.text.autoscale)switch(f.text.align){case"center":t.textAlign=f.text.align,c=e.width/2;break;case"right":t.textAlign=f.text.align,c=e.width}for(a=0;a<n.length;a++)t.fillText(n[a],c,l,u),l+=o;return p[0].toDataURL()}n.dispose=function(){h=f=n=null,p&&p.remove&&(p.remove(),p=null),g&&g.remove&&(g.remove(),g=null),i=null},n.renderToDataURL=a,n.renderToSVGImage=function(e,t){var n=r;n&&n.width===t.width&&n.height===t.height&&n.text===o.text.value&&n.align===o.text.align||(r={width:t.width,height:t.height,text:o.text.value,align:o.text.align},e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a(t)))}}),I=(n(117),function(e,t){var n=this,o=t,i={bold:!1,italic:!1,strike:!1,underline:!1,color:"#000000",family:"Arial",size:12},r=1,a=1,l=1,s=en.Mobile.Any()?18:8;function u(e){e&&Kt.extend(i,e),c()}function c(e,t,n){(e=e||o)&&(t=void 0!==t?t:r,n||h(),d(e,t))}function d(e,t){var n="none";(i.strike||i.underline)&&(n=i.strike?"line-through ":"",n+=i.underline?"underline":""),e.css({color:i.color,"font-family":i.family,"font-style":i.italic?"italic":"normal","font-weight":i.bold?"bold":"normal","font-size":i.size*(t||1)+"pt","text-decoration":n})}function h(){var e=(document.width||window.outerWidth)/window.innerWidth;l!==e&&(l=e),r=i.size*a<s?s/l/i.size:a}u(e),n.dispose=function(){i=o=n=null},n.set=u,n.get=function(e){return e?i[e]:i},n.repaint=c,n.applyTo=d,n.getAdjustedZoom=function(){return h(),r},n.getUserZoom=function(){return h(),l},n.getZoom=function(){return a},n.setZoom=function(e){a=e,c()}}),H=function(w,_,e){var t=this,z=e,o=w.getEventObject(),P=null,r=null,T=null,a=null,D=w.get("text"),k=!1,C=3,E=en.Mobile.Any()?{width:200,height:200}:{width:1,height:1},i={},n={moving:s,resized:s,moved:s,rotated:s},M=function(){var e=w.get();r||(r=Kt('<textarea selectable="false"/>'),Kt(a.innerDom).append(r),r.css({"background-color":"transparent",border:"0px solid","overflow-x":"hidden","overflow-y":"hidden","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none",resize:"none",cursor:"inherit"}),r.attr("readonly","readonly"),r.on({focus:function(){return this.blur(),!1}}),r[0].raphaelParent=!0),r.val(D.value);var t=w.get("outline").width/2,n=Math.max(Math.ceil(e.width-2*(t+C)),1),o=Math.max(Math.ceil(e.height-2*(t+C)),1);if(T&&(T.set(D.font),T.repaint(r,1,!0)),r.css({width:n+"px",height:o+"px","max-width":n+"px","max-height":o+"px",padding:C+"px","text-align":D.align}),a.attr({x:Math.round(t+e.x),y:Math.round(t+e.y),width:e.width,height:e.height}),0<=e.cornerradius){var i=w.getObject();Kt(i[0]).attr({rx:e.cornerradius||0,ry:e.cornerradius||0})}a.transform(F().toTransformString(!0))};function l(){var e=w.get("outline").width/2,t=w.get(),n=Math.max(Math.ceil(t.width-2*(e+C)),0),o=Math.max(Math.ceil(t.height-2*(e+C)),0);if(T&&T.set(D.font),a.attr({x:Math.round(e+C+t.x),y:Math.round(e+C+t.y),width:n,height:o}),0<=t.cornerradius){var i=w.getObject();Kt(i[0]).attr({rx:t.cornerradius||0,ry:t.cornerradius||0})}a.renderer&&a.renderer.renderToSVGImage(a[0],{width:n,height:o}),a.transform(F().toTransformString(!0))}function F(){var e=$t.matrix(),t=z.getViewerTransform(w._pageindex),n=w.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e}function s(){a&&p()}function S(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}function u(){if(null==T&&(T=new I(D.font)),a){var e=!0!==a.removed?a:null;o.unbind(e,{showeditor:c,hideeditor:h})}var t=k,n=D.autoscale;(a=n?_.atalaImage():_.html()).isHtml&&!n||(a.renderer=new O(w.get(),T,_._page),M=l),null!=P&&_._page&&(_._page.append(P),_._page.on(i)),$t.vml&&(w.getObject().node.style.overflow="hidden"),a.transform(F().toTransformString(!0)),o.bind(a,{showeditor:c,hideeditor:h}),t&&c()}function c(){P||function(){P=Kt("<textarea/>").hide(),_._page&&(_._page.append(P),_._page.on(i)),P.on("change keydown mouseup mousemove mousedown",d),P.bind({blur:h}),w.bind({deselected:h});var e=w.getObject();if(P.css({position:"absolute","overflow-x":"auto","overflow-y":"auto","z-index":99999,border:"0px solid",padding:"0px","background-color":"transparent","text-align":D.align}),en.Mobile.Any()){var t=w.get(),n=J(_.canvas,_._page);P.css({left:t.x+n.left+"px",top:t.y+n.top+"px",width:t.width+"px","max-width":t.width+"px",height:t.height+"px","max-height":t.height+"px",border:e.attr("stroke")+" "+e.attr("strokewidth")+"px","background-color":e.attr("fill")})}T.setZoom(w.getZoom()),(en.Chrome||en.Safari)&&P.css({resize:"none"}),null!=D.value&&P.val(D.value),D.readonly&&P.prop("readonly","readonly"),T.repaint(P)}(),w&&!w.get("visible")||(!P.is(":hidden")&&k||(a.hide(),P.prop("readonly",D.readonly?"readonly":""),P.show(),p()),en.Touch&&P.focus(function(){P[0].setSelectionRange(0,9999)}),P[0].focus(),k=!0)}function d(e){e.stopPropagation(),D.value!==P.val()&&(D.value=P.val(),w.set({text:D}))}function h(){P&&((P.is(":visible")||k)&&(P.hide(),a.show(),p()),(0===arguments.length||1===arguments.length&&"blur"===arguments[0].type)&&o.trigger("annotationtextchanged"),P[0].blur(),k=!1)}function f(){!w||w.get("visible")?k?c():a.show():a.hide(),a.backgroundColor&&a.backgroundColor(w.get("fill").color)}function A(e){e&&(_!==e||a.removed)&&(_=e,null!=r&&(r.remove(),r=null),u(),f())}function p(e){if(A(e),M(),P&&(!P.is(":hidden")||k)){var t=w.get("outline").width/2,n=w.get(),o=w.getZoom(),i=w.getBox(),r=F(),a=S(r,i.x,i.y),l=S(r,i.x+i.width,i.y+i.height),s=i.width*o,u=i.height*o,c=(a.x+l.x-s)/2,d=(a.y+l.y-u)/2,h=C*o,f=t*o,p=2*(h+f),g=Math.max(Math.ceil(s-p),E.width),m=Math.max(Math.ceil(u-p),E.height),v=J(_.canvas,_._page),y=n.rotation+z.getPageRotation(w._pageindex),b=0!==y?"rotate("+y+"deg)":"",x={left:Math.round(c+v.left+f)+"px",top:Math.round(d+v.top+f)+"px",width:g+"px",height:m+"px","max-width":g+"px","max-height":m+"px",padding:Math.ceil(h)+"px"};Kt.extend(x,cn(b)),P.css(x)}T&&(T.set(D.font),T.setZoom(w.getZoom()),T.repaint(P))}u(),p(),w.bind(n),t.dispose=function(){P&&P.remove(),r&&r.remove(),T&&T.dispose(),a&&a.remove(),_&&_._page&&_._page.off(i),w.unbind(n),D=a=r=T=P=o=t=null},t.set=function(e){e&&Kt.extend(D,e)},t.get=function(e){return e?D[e]:D},t.getFont=function(){return T},t.updateView=f,t.changepaper=A,t.repaint=p},A=function(){var e=this,t=Kt({}),o={drawing:!1,hold:null,pinching:!1,tapped:!1,touching:!1,delta:{x:0,y:0},origin:{x:0,y:0},point:{x:0,y:0},moves:0,e:null};function i(){t.trigger.apply(t,arguments)}function r(){i({type:"interactstart"})}function a(){i({type:"interactend"})}function l(e){if(o.e=e,r(),i(e),2===e.originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(!o||!o.raphael&&!o.raphaelParent)return!1;if(null===t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches))c(),o.touching=!1,(n=e).stopPropagation(),n.preventDefault(),o.pinching=!0,i({type:"pinchstart",touches:n.originalEvent.touches});else if(1===e.originalEvent.touches.length){i("selectchange"),o.touching=!0;var t=G(e);o.point.x=t.x,o.point.y=t.y,o.hold=setTimeout(u,1500)}var n}function s(){o.tapped=!1}function u(){if(0<o.moves&&null!==o.e){var e=G(o.e);Math.abs(o.point.x-e.x)<5&&Math.abs(o.point.y-e.y)<5&&(o.moves=0)}0===o.moves&&o.touching&&o.e&&(o.touching=!1,i({type:"contextmenu",x:o.e.originalEvent.touches[0].pageX,y:o.e.originalEvent.touches[0].pageY}))}function c(){null!==o.hold&&(clearTimeout(o.hold),o.hold=null)}e.events={click:function(e){i(e)},dblclick:function(e){i(e);var t=G(e);i({type:"showeditor",x:t.x,y:t.y})},mousedown:function(e){return r(),i(e),i({type:"selectchange",shiftKey:e.shiftKey,ctrlKey:e.ctrlKey}),3===e.which&&i({type:"contextmenu",x:e.pageX,y:e.pageY,event:e}),!1},mousemove:function(e){i(e)},mouseout:function(e){i(e)},mouseover:function(e){i(e)},mouseup:function(e){i(e),a()}},en.Features.Touch&&Kt.extend(!0,e.events,{touchstart:l,touchmove:function(e){var t;i(o.e=e),o.pinching?((t=e).stopPropagation(),t.preventDefault(),i({type:"pinchmove",touches:t.originalEvent.touches})):o.moves++},touchend:function(e){var t,n;i(o.e=e),o.pinching?((n=e).stopPropagation(),n.preventDefault(),o.pinching=!1,i({type:"pinchend",touches:n.originalEvent.touches}),1===n.originalEvent.touches.length&&l(n)):o.touching&&(o.touching=!1,c(),o.moves=0,o.tapped?(t=e,o.e=t,i({type:"showeditor",x:o.point.x,y:o.point.y})):(o.tapped=!0,setTimeout(s,300))),a()}}),e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=i},R=function(e){var n=Kt({}),t=e,o=null,r={target:null,mx:null,my:null,px:null,py:null,dx:null,dy:null};function a(e){r.px=r.mx,r.py=r.my,e.originalEvent?(r.mx=e.originalEvent.targetTouches[0].pageX,r.my=e.originalEvent.targetTouches[0].pageY):(r.mx=e.targetTouches[0].pageX,r.my=e.targetTouches[0].pageY),r.dx=r.mx-r.px,r.dy=r.my-r.py}function l(e){r.px=r.mx,r.py=r.my,r.mx=e.screenX,r.my=e.screenY,r.dx=r.mx-r.px,r.dy=r.my-r.py}function s(){n.trigger.apply(n,arguments)}function i(){s({type:"interactstart",target:t})}function u(){s({type:"interactend",target:t})}function c(e,t,n,o,i){(e||t)&&(en.Features.Touch&&i.target!==r.target||(null===r.px&&d(0,0,i),i.touches?a(i):l(i),s({type:"dragmove",dx:r.dx,dy:r.dy,mx:r.mx,my:r.my,originalEvent:i})))}function d(e,t,n){r.target=n.target,i(),n.touches?a(n):l(n),s({type:"dragstart",mx:r.mx,my:r.my,originalEvent:n})}function h(e){en.Features.Touch&&e.target!==r.target||(r.target=null,r.px=null,r.py=null,r.mx=null,r.my=null,s({type:"dragend",originalEvent:e}))}function f(){s("hoverin")}function p(){s("hoverout")}function g(e){s(e)}function m(e){s(e)}function v(e){r.px=null,r.py=null,s(e)}function y(e){s(e)}function b(e){s(e)}function x(e){s(e)}function w(e){s(e)}function _(e){s(e)}function z(e){s(e),1===e.which?s("mousedownleft"):3===e.which&&s("mousedownright")}function P(e){s(e)}function T(e){s(e)}function D(e){s(e)}function k(e){s(e),3===e.which&&s("rightclick")}function C(e){s(e)}function E(e){s(e)}function M(e){s(e)}(o=new A).bind({click:w,dblclick:_,mousedown:z,mousemove:P,mouseover:D,mouseout:T,mouseup:k,touchmove:C,touchstart:M,interactstart:i,interactend:u,pinchstart:g,pinchmove:m,pinchend:v,selectchange:y,contextmenu:b,showeditor:x,annoresized:E}),this.bind=function(e){var t=arguments;!e||e.constructor.prototype!==$t.el&&e.constructor.prototype!==$t.st||(e.drag(c,d,h),e.hover(f,p),"set"!==e.type?Kt(e[0]).on(o.events):e.forEach(function(e){Kt(e[0]).on(o.events)}),t=Array.prototype.slice.call(t,1)),0<t.length&&n.on.apply(n,t)},this.unbind=function(e){var t=arguments;!e||e.constructor.prototype!==$t.el&&e.constructor.prototype!==$t.st?null===e&&1<t.length&&(t=Array.prototype.slice.call(t,1)):(e.undrag(),e.unhover(f,p),"set"!==e.type?Kt(e[0]).off(o.events):e.forEach(function(e){Kt(e[0]).off(o.events)}),t=Array.prototype.slice.call(t,1)),n.off.apply(n,t)},this.trigger=s},B=function(e,t){var n=this,o=e,i=null,r=null,a=t;function l(){return a.trigger.apply(a,arguments),n}function s(e){return e.image()}function u(e){o.customurl?e.attr("src",o.customurl):l("serverrenderurlrequested",{data:o,complete:c})}function c(e){e.customurl=e}return n.dispose=function(){r=i=o=n=null},n.bind=function(){return a.on.apply(a,arguments),n},n.unbind=function(){return a.off.apply(a,arguments),n},n.trigger=l,n.construct=function(e){return i(e,o)},n.render=function(e){r(e,o)},i=o.constructor?o.constructor:s,r=o.renderer?o.renderer:u,n},N=function(e,t,n,o,i){var r=this,c=e,a=t,l=n,d=null,s=null,u=i,h=o,f=null,p=null,g=null,m=null,v=function(){},y=function(){};function b(e){var t=G(e);if(d.paper){var n=J(d.paper.canvas,d.paper._page);t.x-=n.left,t.y-=n.top}return t}function x(e){var t=a.getViewerTransform(h._pageindex).invert(),n=t.x(e.x,e.y);return e.y=t.y(e.x,e.y),e.x=n,e}function w(){l.trigger.apply(l,arguments)}function _(e,t,n){d=t,s=n,e.stopPropagation(),e.preventDefault();var o=x(b(e));c.visible=!0,p={x:o.x,y:o.y},c.x=Math.round(o.x),c.y=Math.round(o.y),c.width=1,c.height=1,y="path"===d.type&&"custom"!==c.type?"ellipse"!==c.type?(c.points=[{x:c.x,y:c.y}],"lines"!==c.type&&"polygon"!==c.type||c.points.push({x:c.x,y:c.y}),c.x=0,c.y=0,v=T,S):(v=D,F):(v=D,M),C(),(f={events:en.Features.Touch?{touchend:k,touchmove:P,mouseup:k,mousemove:P}:{mouseup:k,mousemove:P},src:Kt(e.srcElement||e.target),main:Kt(e.currentTarget)}).src.on(f.events),f.main.on({mouseup:k})}function z(){f&&(f.src.off(f.events),f.main.off({mouseup:k}))}function P(e){e.stopPropagation(),v(e),C()}function T(e){var t=x(b(e));switch(c.type){case"line":c.points[1]=t;break;case"freehand":c.points.push(t);break;case"lines":case"polygon":c.points[c.points.length-1]=t}"path"===d.type&&("ellipse"===c.type?O():I(),d._&&0===d._.dirty&&(d._.dirty=1))}function D(e){var t=x(b(e)),n=p.x,o=p.y,i=Math.max(Math.abs(t.x-p.x),1),r=Math.max(Math.abs(t.y-p.y),1);0<c.aspectratio&&(Math.abs((t.y-p.y)/(t.x-p.x))>1/c.aspectratio?i=Math.round(r/c.aspectratio):r=Math.round(i/c.aspectratio)),t.x<p.x&&(n=p.x-i),t.y<p.y&&(o=p.y-r),c.x=n,c.y=o,c.width=i,c.height=r}function k(e){e.stopPropagation();var t=!1;if("lines"===c.type||"polygon"===c.type){if(a.activepage._index!==h._pageindex)return;if(c.points.push(x(b(e))),2!==e.button)return}else c.points?c.points&&c.points.length<2&&"custom"!==c.type&&(t=!0):(c.width<4&&c.height<4&&(c.width=100,c.height=100),C());z(),f=null,w(t?"cancelled":"drawn")}function C(){y(),d&&d.transform(E()),s&&s.repaint()}function E(){var e=$t.matrix(),t=a.getViewerTransform(h._pageindex),n=h.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e.toTransformString()}function M(){d.attr({x:c.x,y:c.y,width:c.width,height:c.height}),u&&u.render(d,c),en.Features.VML&&d.transform(E())}function F(){O(),d._&&0===d._.dirty&&(d._.dirty=1)}function S(){I(),d._&&0===d._.dirty&&(d._.dirty=1)}r.events={drawstart:_,drawmove:P,drawend:k,dragstart:function(e){if(!a.readonly){e.originalEvent.stopPropagation();var t=h.getBox();p={x:t.x,y:t.y}}},dragmove:function(e){if(!a.readonly){e.originalEvent.stopPropagation();var t=x({x:0,y:0}),n=x({x:e.dx,y:e.dy});h.translate(n.x-t.x,n.y-t.y),w("moving")}},dragend:function(e){if(!a.readonly){e.originalEvent.stopPropagation();var t,n,o=h.getBox();if(d.paper&&d.paper._page){var i=d.getBBox(),r={x:0,y:0,width:d.paper._page.width(),height:d.paper._page.height()};if(!(L(t=r,(n=i).x,n.y)||L(t,n.x+n.width,n.y)||L(t,n.x,n.y+n.height)||L(t,n.x+n.width,n.y+n.height)))return void h.translate(p.x-o.x,p.y-o.y)}p.x===o.x&&p.y===o.y||w("moved")}},update:function(){C()},viewchanged:function(e){d=e.annview,s=e.textview,y="path"===d.type&&"custom"!==c.type?"ellipse"!==c.type?(v=T,S):(v=D,F):(v=D,M)},pinchstart:function(e){if(!c.points&&!a.readonly){var t=x({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=x({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=h.getBox();m={start:Q(t.x,t.y,n.x,n.y),rect:o}}},pinchmove:function(e){if(m){var t=x({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=x({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=Q(t.x,t.y,n.x,n.y,m.start),i=o.x-m.start.x,r=o.y-m.start.y,a=m.rect.x-o.dx,l=m.rect.y-o.dy,s=m.rect.width+i,u=m.rect.height+r;c.points?h.transform(a,l,s,u):(c.x=a,c.y=l,c.width=s,c.height=u),d.paper&&d.paper._page&&d.paper._page._grips&&d.paper._page._grips.repaint(),C()}},pinchend:function(){w("resized"),w("annoresized"),m=null}},r.drawStart=_,r.unbindEvents=z,r.repaint=C,r.getTransform=E;var A=.5522847498307936;function O(){var e=c.width/2,t=c.height/2,n=A*e,o=A*t,i=c.x+c.width/2,r=c.y+c.height/2,a=["M",i,r-t,"C",i+n,r-t,i+e,r-o,i+e,r,"C",i+e,r+o,i+n,r+t,i,r+t,"C",i-n,r+t,i-e,r+o,i-e,r,"C",i-e,r-o,i-n,r-t,i,r-t,"Z"];d.attr({path:a})}function I(){if(c.points&&0!==c.points.length){for(var e=["M",c.points[0].x,c.points[0].y],t=1;t<c.points.length;t++)e=e.concat(["L",c.points[t].x,c.points[t].y]);"polygon"===c.type&&e.push("Z"),d.attr({path:e}),
/**
   * Work around outlined by this post:
   * http://stackoverflow.com/questions/15693178/svg-line-markers-not-updating-when-line-moves-in-ie10
   */
function(){if(en.Explorer){var e=parseInt(en.Version,10);10<=e&&e<12&&d.node&&d.node.parentNode&&d.node.parentNode.insertBefore(d.node,d.node)}}()}}r.commitTransform=function(){var e,t,n;Kt.extend(c,(e=g,t=a.getZoom(h._pageindex),{x:(n=e.split()).dx/t,y:n.dy/t,width:n.scalex/t,height:n.scaley/t})),d.transform(E()),C(),V=null},r.transformUI=function(e,t,n,o){g=$t.matrix(n,0,0,o,e,t),V||(V=function(e,t){var n;if(e.points&&1<e.points.length){var o=h.getBox();(n=$t.matrix(1,0,0,1,0,0)).scale(1/o.width,1/o.height,0,0),n.translate(-o.x,-o.y)}else(n=$t.matrix(t,0,0,t,0,0)).translate(e.x,e.y),n.scale(e.width,e.height,0,0);return n}(c,1)),g.add(V.a,V.b,V.c,V.d,V.e,V.f),d.transform(g.toTransformString()),s&&s.repaint()};var V=null;function L(e,t,n){return t>=e.x&&t<=e.x+e.width&&n>=e.y&&n<=e.y+e.height}},_e=function(e,t){var o=t,i=this,n=new R(i),r=null,a=null,l=null,s=null,u=null,c=null,d=null,h=null,f=e.multiview?e:{
/**
       * @property {Atalasoft.Annotations.AnnotationTypes} type - Annotation type.
       */
type:"",
/**
       * @property {number} [x=0] - X axis annotation coordinate in document coordinate space.
       */
x:0,
/**
       * @property {number} [y=0] - Y axis annotation coordinate in document coordinate space.
       */
y:0,
/**
       * @property {number} [width=0] - Width of the annotation box.
       */
width:0,
/**
       * @property {number} [height=0] - Height of the annotation box.
       */
height:0,
/**
       * @property {Point[]} [points=undefined] - Array of annotation points.
       */
points:void 0,
/**
       * @property {number} [rotation=0] - Represents annotation rotation angle.
       *
       * Note, this property is ignored when annotation is created from UI, i.e. when specified in {@link WebDocumentViewerConfig.annotations} configurations.
       */
rotation:0,
/**
       * @private
       */
transform:$t.matrix(),
/**
       * @property {boolean} [visible=true] - Indicates whether annotation is visible.
       */
visible:!0,
/**
       * @property {boolean} [movable=true] - Indicates whether annotation could be moved through UI.
       */
movable:!0,
/**
       * @property {boolean} [rotatable=true] -Indicates whether annotation could be rotated through UI.
       */
rotatable:!0,
/**
       * @property {boolean} [resizable=true] - Indicates whether annotation could be resized through UI.
       */
resizable:!0,
/**
       * @property {boolean} [selected=false] - Indicates whether annotation is currently selected.
       */
selected:!1,
/**
       * @property {boolean} [selectable=true] - Indicates whether annotation is selectable.
       */
selectable:!0,
/**
       * @property {boolean} [readonly=false] - Indicates whether annotation is readonly. If set to true annotation couldn't be modified through UI and context menu couldn't be shown for it.
       */
readonly:!1,
/**
       * @property {boolean} [burn=false] - Indicates whether this annotation should be "burned" to output document on save. If set to true, annotation will be rendered on top of the image for all output formats except PDF. For PDF documents, annotations will be rendered and added as a separate layer on top of the document content.
       */
burn:!1,
/**
       * @property {string} [tooltip] - Annotation tooltip.
       */
tooltip:"",
/**
       * @property {string} name - Annotation type title. This will be shown as a caption for toolbar buttons representing "extended" types annotations. This applies to `stamp` and `image` types of annotation. I.e. name should be set to annotations defined by application using {@link WebDocumentViewerConfig.annotations| annotations.stamps} and {@link WebDocumentViewerConfig.annotations| annotations.images}.
       */
name:"",
/**
       * @property {string} [username] - Corresponds to server side `AnnotationData.UserName` property.
       */
username:"",
/**
       * @ignore
       */
aspectratio:0,
/**
       * @property {number} [cornerradius=0] - Represents corner rounding radius for Stamp annotations.
       *
       */
cornerradius:0,
/**
       * Represents annotation fill configuration.
       * @typedef {Object} AnnotationFill
       * @property {string} [color='white'] - Fill color.
       * @property {number} [opacity=1] - Opacity level.
       */
/**
       * @property {AnnotationFill} [fill] - Represents annotation fill.
       */
fill:{color:"white",opacity:1},
/**
       * @typedef AnnotationLineCap
       * @property {string} [style] - Style of the cap. Valid values are `'block'`, `'open'`, `'oval'`, `'diamond'`, and `'none'`.
       * @property {string} [width] - Width of the cap. Valid values are `'wide'`, `'narrow'`, and `'medium'`
       * @property {string} [height] - Height of the cap. Valid values are `'long'`, `'short'`, and `'medium'`.
       */
/**
       * Represents annotation outline configuration.
       * @typedef {Object} AnnotationOutline
       * @property {string} [color='black'] - Outline color.
       * @property {number} [opacity=1] - Opacity level.
       * @property {number} [width=2] - Line width.
       * @property {AnnotationLineCap} startcap - Starting point arrow cap configuration for the line annotation.
       * @property {AnnotationLineCap} endcap - End point arrow cap configuration for the line annotation.
       */
/**
       * @property {AnnotationOutline} [outline] - Annotation outline.
       */
outline:{color:"black",opacity:1,width:2,startcap:null,endcap:null},
/**
       * @property {string} [src] - Url of the image displayed by the "image" annotation.
       */
src:"",
/**
       * Represents configuration for text based annotations like 'text' or 'stamp'.
       * @typedef {Object} AnnotationTextConfig
       * @property {string} [value] - Displayed annotation text.
       * @property {string} [align='left'] - Text align. Allowed values are `'left'`, `'center'`, or `'right'`.
       * @property {Object} [font] - Annotation text font configuration.
       * @property {boolean} [font.bold=false] - Indicates whether annotation text is bold.
       * @property {boolean} [font.italic=false] - Indicates whether annotation text is italic.
       * @property {boolean} [font.strike=false] - Indicates whether annotation text is strike.
       * @property {boolean} [font.underline=false] - Indicates whether annotation text is underline.
       * @property {string} [font.color='black'] - Annotation text color.
       * @property {string} [font.family='Arial'] - Annotation text font family.
       * @property {number} [font.size=12] - Annotation text font size.
       *
       * @property {boolean} [readonly=false] - Indicates whether annotation text could be changed.
       *
       * @property {boolean} [autoscale] - Indicates whether text should be scaled to the size of the bounding box for the Stamp and Text annotations.
       *
       * This could be useful to make Stamp annotation looks similar to its representation burned into image or opened in different Atalasoft viewers.
       *
       */
/**
       * @property {AnnotationTextConfig} [text] - Annotation text configuration.
       */
text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12},readonly:!1,replies:null,parent:null,autoscale:!1},
/**
       * @property {Object} [extra] - Additional data that could be stored along with annotation. Application specific properties is expected to be inserted into this object.
       * Those data will be transacted to extra properties of the server-side `AnnotationData` object.
       */
extra:{}},p={highlight:{readonly:!0,fill:{color:"yellow",opacity:.5},outline:{opacity:0}},image:{readonly:!0,fill:{color:null},outline:{opacity:0}},rectangle:{fill:{opacity:0}},stamp:{readonly:!0,cornerradius:0,text:{autoscale:!0}},line:{fill:{color:null},outline:{opacity:1,startcap:{width:"medium",height:"medium",style:"none"},endcap:{width:"medium",height:"medium",style:"none"}}},lines:{fill:{color:null},outline:{opacity:1}},freehand:{fill:{color:null},outline:{opacity:1}},ellipse:{},fillrect:{},polygon:{},text:{}},g={};function m(){n.bind.apply(n,arguments)}function v(){return n.trigger.apply(n,arguments),i}function y(){var e=$t.matrix(),t=C();e.rotate(f.rotation,t.x,t.y),f.transform=e}function b(){var e,t,n=C(),o=(e=_(),t=n,{x:e.x(t.x,t.y),y:e.y(t.x,t.y)});o.x===n.x&&o.y===n.y||E(o.x-n.x,o.y-n.y)}function x(e,t){if(e){var n=f.rotation;e.hasOwnProperty("rotation")&&(e.rotation=(e.rotation+360)%360),w(e,t),n!==f.rotation&&function(e,t){var n=(e-t+360)%360,o=$t.matrix(),i=_();o.add(i.a,i.b,i.c,i.d,i.e,i.f);var r=C();o.rotate(n,r.x+r.width/2,r.y+r.height/2);var a=o.x(r.x,r.y),l=o.y(r.x,r.y);E(a-r.x,l-r.y),y()}(f.rotation,n)}}function w(e,t){t?Kt.extend(!0,f,e):Kt.extend(f,e)}function _(){return f.transform}function z(){d={update:function(e){f.selected!==d.selected&&T();var t=!1;e||(t=function e(t,n,o){if(t!==n)return!!t;for(var i in t)if(t.hasOwnProperty(i)){if("extra"===i)continue;if(n.hasOwnProperty(i)){if("points"===i){if(t.points===n.points)return!t.points;if(t.points.length!==n.points.length)return!0;for(var r=0;r<t.points.length;r++)if(e(t.points[r],n.points[r],[]))return!0}if(-1<o.indexOf(i)){if(e(t[i],n[i],j[i]))return!0}else if(t[i]!==n[i])return!0}}return!1}(d,f,["fill","outline","text"]),x(d,!0)),f.update&&delete f.update,f.getPageIndex&&delete f.getPageIndex,V(),I(),null!==r&&(f.selectable?(g.isBound("selectable")||(n.bind(g.selectable),g.bound("selectable")),f.movable&&!g.isBound("movable")?(n.bind(g.movable),g.bound("movable")):!f.movable&&g.isBound("movable")&&(n.unbind(g.movable),g.unbound("movable")),en.Features.Touch&&(f.resizable&&!g.isBound("resizable")?(n.bind(g.resizable),g.bound("resizable")):!f.resizable&&g.isBound("resizable")&&(n.unbind(g.resizable),g.unbound("resizable")))):!f.selectable&&g.isBound("selectable")&&(n.unbind(g.selectable),g.unbound("selectable"),n.unbind(g.movable),g.unbound("movable"),n.unbind(g.resizable),g.unbound("resizable"))),t&&v({type:"annotationchanged",ann:i})},getPageIndex:function(){return i._pageindex}},Kt.extend(!0,d,f)}function P(){return JSON.stringify(f)}function T(e){if(f){var t={ann:i,append:!0,page:null,pageindex:i._pageindex,type:""};e&&(t.append=e.shiftKey||e.ctrlKey||void 0!==e.append&&e.append,t.page=e.page,t.pageindex=e.pageindex),t.append||!f.selected?(f.selected=!f.selected,t.type=f.selected?"selected":"deselected"):f.selected&&!t.append&&(t.type="reselected"),""!==t.type&&v(t)}}function D(e){var t=null;switch(f.type){case"image":(t=e.image()).attr("src",f.src);break;case"highlight":case"rectangle":case"fillrect":case"text":case"stamp":t=e.rect();break;case"ellipse":case"line":case"lines":case"freehand":case"polygon":t=e.path();break;case"custom":t=c.construct(e)}return e._annos&&e._annos.push(t),t}function k(){null!==r&&(a?n.unbind(a,r):n.unbind(r));var e={};f.selectable&&(Kt.extend(e,g.selectable),g.bound("selectable"),!o.readonly&&f.movable&&(Kt.extend(e,g.movable),g.bound("movable")),!o.readonly&&f.resizable&&en.Features.Touch&&(Kt.extend(e,g.resizable),g.bound("resizable"))),r=e,n.bind(a,e)}
/**
   * Returns bounding box of the annotation in document space.
   */
function C(){!h&&f.points&&(h=we(f.points));var e=f.points?h:f;return{x:e.x,y:e.y,width:e.width,height:e.height}}function E(e,t){if(f.points){for(var n=0;n<f.points.length;n++)f.points[n].x+=e,f.points[n].y+=t;h&&(h.x+=e,h.y+=t)}"custom"!==f.type&&f.points||(f.x+=e,f.y+=t),y(),A()}e.multiview||(M=e.type,Kt.extend(!0,f,p[M])),w(e,!0),y(),"custom"===f.type&&(c=new B(f,n)),m({repaint:(u=new N(f,o,n,i,c)).events.update,viewchanged:u.events.viewchanged,drawn:k,resized:b}),f.points&&(0<f.x||0<f.y)&&(E(f.x,f.y),f.x=0,f.y=0,f.width=1,f.height=1),g={selectable:{selectchange:T},movable:{dragstart:u.events.dragstart,dragmove:u.events.dragmove,dragend:u.events.dragend},resizable:{pinchstart:u.events.pinchstart,pinchmove:u.events.pinchmove,pinchend:u.events.pinchend},boundEvents:{resizable:!1,movable:!1,selectable:!1},isBound:function(e){return this.boundEvents[e]},bound:function(e){this.boundEvents[e]=!0},unbound:function(e){this.boundEvents[e]=!1}},i.dispose=function(){f.selected&&T(),n&&n.unbind(),a&&a.remove(),l&&l.dispose(),s&&s.remove(),u&&u.unbindEvents(),f=s=l=a=n=i=o=u=null},i.bind=m,i.unbind=function(){n.unbind.apply(n,arguments)},i.trigger=v,i.set=x,i.get=function(e){return e?f[e]:f},i.getTransform=_,i.getClonedData=function(){return d?Kt.extend(!0,d,f):z(),delete d.transform,d},i.getObject=function(){return a},i.getEventObject=function(){return n},i.getZoom=function(){return o.getZoom(i._pageindex)},i.stringify=P,i.getJSON=P,i.toggleSelected=T,i.isCloneSource=function(e){return d&&d===e},i.getBox=C,i.translate=E,i.transform=function(e,t,n,o){var i=C(),r=n/i.width,a=o/i.height;if(f.points&&0<f.points.length&&"custom"!==f.type){for(var l=0;l<f.points.length;l++)f.points[l].x=e+(f.points[l].x-i.x)*r,f.points[l].y=t+(f.points[l].y-i.y)*a;h.x=e,h.y=t,h.width*=r,h.height*=a}else f.x=e,f.y=t,f.width*=r,f.height*=a;v({type:"annoresizing"}),A()},i.transformUI=function(){u.transformUI.apply(u,arguments)};var M;var F=(i.commitTransform=function(){u.commitTransform()},!1),S=en.Explorer?20:5;function A(){F||(F=!0,setTimeout(O,S))}function O(){F=!1,I()}function I(e){e&&(s&&(s=null),a=D(e),c&&c.render(a,f),V(),k(),"text"!==f.type&&"stamp"!==f.type||null!==l||(l=new H(i,e,o)),l&&l.changepaper(e),v({type:"viewchanged",annview:a,textview:l})),v("repaint")}function V(){if(a){var e={fill:f.fill.color,"fill-opacity":f.fill.opacity};Kt.extend(e,(t={stroke:f.outline.color,"stroke-width":f.outline.width*o.getZoom(i._pageindex),"stroke-opacity":f.outline.opacity},a._linewidth=f.outline.width,$t.fn.addArrow||(f.outline.startcap&&(t["arrow-start"]=L(f.outline.startcap)),f.outline.endcap&&(t["arrow-end"]=L(f.outline.endcap))),t)),a.attr(e),$t.fn.addArrow&&(f.outline.startcap&&$t.fn.addArrow(a,L(f.outline.startcap),!1),f.outline.endcap&&$t.fn.addArrow(a,L(f.outline.endcap),!0)),f.visible?a.show():a.hide()}var t;l&&(l.set(f.text),l.updateView()),a&&a.node&&""!==f.src&&"image"===f.type&&(void 0!==a.node.src&&a.node.src?a.node.src=f.src:a.node.href.baseVal=f.src)}function L(e){return[e.style,"-",e.width,"-",e.height].join("")}i.startDraw=function(e,t,n){x(n),(a=D(t)).transform(u.getTransform()),("text"===f.type||"stamp"===f.type)&&(l=new H(i,t,o)),V(),u.drawStart(e,a,l)},i.repaint=I,i.updateView=V;var j={fill:[],outline:["startcap","endcap"],text:["font"],font:[],startcap:[],endcap:[]};return i},ze=function(e,t){var n=this,o=e,i=t,u=[];function r(e,t,n,o){var i,r,a=[].concat(t),l=null;(l=c(n))===n&&null!==l&&(n=l._index),o||d(l||n);for(var s=0;s<a.length;s++)i=a[s],0<=(r=Kt.inArray(i,u[n]))?e||u[n][r]!==i||u[n].splice(r,1):e&&(u[n]?u[n].push(i):u[n]=[i]),l&&(e?l._grips.push(i):l._grips.remove(i)),i.get("selected")!==e&&i.toggleSelected({append:!0,pageindex:n,page:l})}function a(e,t){var n="object"==typeof t?t._index:t;o[n]&&r(e,o[n],t,!0)}function l(e){for(var t=[],n=0;n<e.length;n++)if(e[n]){t[n]=[];for(var o=0;o<e[n].length;o++)t[n][o]=e[n][o].getClonedData()}return t}function c(t){var e=null;if("object"==typeof t)e=t;else{t=Math.max(t,0);var n=Kt.grep(i,function(e){return e._index===t});1<=n.length&&(e=n[0])}return e}function s(e){a(!0,e)}function d(e){a(!1,e);var t=c(e);t&&t._grips&&t._grips.repaint()}n.dispose=function(){i=o=n=null,u.length=0},n.select=function(e,t,n){r(!0,e,t,n)},n.deselect=function(e,t,n){r(!1,e,t,n)},n.setAnnos=function(e){o=e},n.setPages=function(e){i=e},n.resolvePage=c,n.deselectAll=function(){for(var e=0;e<o.length;e++)d(e)},n.deselectPage=d,n.getAnnotations=
/**
   * Gets an array of all annotation data objects.
   * @returns array of arrays containing annotation data objects for each page of the document.
   */
function(){return l(o)},n.getSelected=function(){return l(u)},n.selectAll=function(){for(var e=0;e<o.length;e++)s(e)},n.selectPage=s};var Pe=function(e){var t=this,u=Kt("<div />"),c=Kt("<div />"),d=null,o=null,n={style:["None:none","Arrow:open","Filled Arrow:block","Filled Ellipse:oval","Filled Diamond:diamond"],width:["medium","wide","narrow"],height:["medium","long","short"]},i={fill:{color:!0,opacity:!0},rotation:!0,outline:{color:!0,opacity:!0,width:!0,startcap:n,endcap:n},text:{font:{bold:!0,italic:!0,color:!0,family:!0,size:!0}}};function r(){u.dialog("close")}function a(){l(),r()}function l(){d.set(o,!0),d.updateView(),d.repaint(),c.empty(),h(d.get(),"",i),g()}function h(n,e,t){function o(e){if(this.value&&"boolean"!=typeof this.value)if("number"==typeof n[this.title]){var t=parseFloat(this.value);isNaN(t)||"rotation"!==this.title||t===n[this.title]?"opacity"===this.title&&0<=t&&t<=1||"opacity"!==this.title&&0<=this.value?n[this.title]=t:this.value=n[this.title]:(d.set({rotation:t}),d.repaint())}else n[this.title]=this.value;else e&&"boolean"==typeof this.value?n[this.title]=0<=e.target.id.indexOf("true"):this.value=n[this.title];d.updateView(),d.repaint(),g()}for(var i in n)if(n.hasOwnProperty(i))if("object"==typeof n[i]){var r="text"!==i?p(i):"";t[i]&&("text"!==i||"text"===i&&"text"===d.get("type"))&&h(n[i],(e?e+" ":e)+r,t[i])}else if("type"===i)u.dialog("option","title",p(n[i].replace("fillrect","rectangle"))+" Annotation Properties");else if(t[i]){var a=Kt("<div/>"),l=f(i,n[i],o,t[i]);a.addClass("ui-helper-clearfix atala-ui-dialog-clearfix"),a.css({overflow:"hidden"}),l.appendTo(a),a.append((s=(e?e+" ":e)+p(i)+":",Kt("<span/>").text(s))),a.appendTo(c)}var s}function f(e,t,n,o){var i=typeof t,r=null;if(Kt.isArray(o))r=Kt("<select/>").attr({title:e}),Kt.each(o,function(e,t){var n=t,o=t,i=t.split(":");1<i.length&&(o=i[0],n=i[1]),r.append(Kt("<option/>",{value:n,text:o}))}),r.change(n),r.val(t);else if("string"===i||"number"===i)(r=Kt("<input/>").attr({type:"text",title:e})).val(t),r.change(n),r.focus(function(){this.select(),this._focused=!0}),r.mouseup(function(e){this._focused&&(e.preventDefault(),this._focused=!1)});else if("boolean"===i){var a="bool"+e;s(r=Kt("<div/>").attr({title:e}),a+!0,a,"True",t),s(r,a+!1,a,"False",!t),r.controlgroup(),r.change(n),r[0].value=t}else r=Kt("<div>"+t+"</div>");return r.css({float:"right"}),r}function s(e,t,n,o,i){e.append(Kt("<input/>").attr({type:"radio",id:t,name:n,checked:i})),e.append(Kt("<label/>").attr({for:t}).text(o))}function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(){var e=d.getObject();e&&e.paper&&e.paper._page&&e.paper._page._grips.repaint()}return t.show=function(e){for(var t in d=e,c.empty(),o={},i)if(i.hasOwnProperty(t)){var n={};n[t]=d.get(t),Kt.extend(!0,o,n)}h(d.get(),"",i),u.dialog("open")},t.hide=r,t.isVisible=function(){return u.dialog("isOpen")},t.cancel=a,t.reset=l,c.appendTo(u),u.dialog({appendTo:e,minWidth:320,classes:{"ui-dialog":"atala-ui"},resizable:!1,autoOpen:!1,buttons:{Ok:r,Reset:l,Cancel:a}}),t},Te=function(l,e){var c,d=8,s=25,r=-22.5,u={e:0,ne:315,n:270,nw:225,w:180,sw:135,s:90,se:45},a={},h={},f=e,p=l._paper.set(),g=l._paper.set(),m=[],v=null,y={},b=null,x={x:0,y:0,width:1,height:1,x2:1,y2:1},t={dragstart:function(){},dragmove:function(){p.hide()},moved:function(){_(),p.show();for(var e=0;e<m.length;++e){var t=m[e].get();t.hasOwnProperty("rotatable")&&!t.rotatable&&v.hide()}}};function w(e,t){return e.attr({fill:"#FFFFE1",cursor:(t||"ne")+"-resize"}),e.grip=!0,e.rect=e.getBBox(),e.hide(),e.center=function(e,t,n,o){var i=d/(n=n||1),r=d/n,a=i/2,l=Math.round(i/2)+.5,s=Math.round(r/2)+.5;en.Explorer&&(s-=.5);var u=Math.round(e)-l,c=Math.round(t)-s;this.ellipse?(u+=a,this.attr({cx:u,cy:c,r:a,"stroke-width":1})):this.attr({x:u,y:c,width:i,height:r,"stroke-width":1}),this.node.setAttribute("stroke-width",1),this.transform(o)},t&&(e.d={key:t,n:~t.indexOf("n"),s:~t.indexOf("s"),w:~t.indexOf("w"),e:~t.indexOf("e")},e.mousedown(function(e){return function(e,t){if(e.stopPropagation(),!(1<m.length)){for(var n=0;n<m.length;n++)if(!m[n].get("resizable"))return;return Kt.extend(y,x),b=u[t.key]===u.n||u[t.key]===u.s?1:0,c=u[t.key]===u.w||u[t.key]===u.e?1:0,(t.n||1===c)&&(y.y=y.y2),t.w&&(y.x=y.x2),Kt(l._paper.canvas).on({mouseup:M,mousemove:E}),!1}}(e,this.d)})),e}function n(e){return-1!==Kt.inArray(e,m)}function o(){for(var e=0;e<m.length;e++)i(m[e]);m.length=0,g.clear(),p.hide()}function i(e){e.getEventObject().unbind(t)}function _(){0<g.length?P():0<m.length?o():p.hide()}function z(e){for(var t in u)u.hasOwnProperty(t)&&F(p[u[t]],e)}function P(){if(0<g.length){var e=1===g.length?m[0].getBox():g.getBBox();x.x=e.x,x.y=e.y,x.width=e.width,x.height=e.height,x.x2=e.x+e.width,x.y2=e.y+e.height,x.xmid=e.x+e.width/2,x.ymid=e.y+e.height/2,T()}}function T(){var e=1===g.length,t=$t.matrix(),n=1,o="",i=f.getViewerTransform(l._index);if(t.add(i.a,i.b,i.c,i.d,i.e,i.f),e){var r=m[0].getTransform();r&&t.add(r.a,r.b,r.c,r.d,r.e,r.f),n=f.getZoom(l._index),o=t.toTransformString(!0)}p[u.nw].center(x.x,x.y,n,o),p[u.ne].center(x.x2,x.y,n,o),p[u.sw].center(x.x,x.y2,n,o),p[u.se].center(x.x2,x.y2,n,o),p[u.n].center(x.xmid,x.y,n,o),p[u.w].center(x.x,x.ymid,n,o),p[u.e].center(x.x2,x.ymid,n,o),p[u.s].center(x.xmid,x.y2,n,o);var a=m[0].get();a.rotatable||!a.hasOwnProperty("rotatable")?(v.show(),v.center(x.xmid,x.y-s/n,n,o)):v.hide(),z((1===m.length?m[0].get().rotation:0)+f.getPageRotation(l._index))}function D(e){var t=l.offset(),n=J(l._paper.canvas,l);return{x:e.pageX-(t.left+n.left),y:e.pageY-(t.top+n.top)}}function k(e){e.stopPropagation();var t,n,o,i=(t=D(e),n=f.getViewerTransform(l._index).invert(),o=n.x(t.x,t.y),t.y=n.y(t.x,t.y),t.x=o,t),r=180*Math.atan2(i.y-y.ymid,i.x-y.xmid)/Math.PI+90;return 1===m.length&&(m[0].set({rotation:r}),m[0].repaint()),l._grips.repaint(),!1}function C(e){return e.stopPropagation(),Kt(l._paper.canvas).off({mouseup:C,mousemove:k}),1===m.length&&m[0].getEventObject().trigger("rotated"),!1}function E(e){if(e.stopPropagation(),1===g.length){var t=function(e){if(0<g.length){var t="set"===g[0].type?g[0][0]:g[0],n=t.matrix.invert(),o={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};return o}return e}(D(e)),n=Math.abs(t.x-y.x),o=Math.abs(t.y-y.y),i=t.x<y.x?y.x-n:y.x,r=t.y<y.y?y.y-o:y.y;a=i,l=r,s=n,u=o,0===b&&(x.x=a,x.width=Math.max(s,1),x.x2=a+x.width,x.xmid=a+x.width/2),0===c&&(x.y=l,x.height=Math.max(u,1),x.y2=l+x.height,x.ymid=l+x.height/2),T(),function(){for(var e=0;e<m.length;e++)m[e].transform(x.x,x.y,x.width,x.height)}()}var a,l,s,u;return!1}function M(e){e.stopPropagation();for(var t=0;t<m.length;t++)m[t].getEventObject().trigger("resized"),m[t].getEventObject().trigger("annoresized"),m[t].repaint();return 0<g.length&&P(),Kt(l._paper.canvas).off({mouseup:M,mousemove:E}),!1}function F(e,t){if(e&&e.d&&e.d.key){var n=$t.matrix();n.rotate(t);var o={x:n.x(a[e.d.key].x,a[e.d.key].y),y:n.y(a[e.d.key].x,a[e.d.key].y)};for(var i in h)if(h.hasOwnProperty(i)&&S(o,h[i].start,h[i].end)){e.attr({cursor:(h[i].dir||"ne")+"-resize"});break}}}function S(e,t,n){function o(e,t){return 0<-e.x*t.y+e.y*t.x}return!o(t,e)&&o(n,e)}!function(){var e,t;for(var n in u)if(u.hasOwnProperty(n)){var o=l._paper.rect(0,0,d,d),i=w(o,n);p.push(i),p[u[n]]=i,(e=$t.matrix()).rotate(u[n]),a[n]={x:e.x(1,0),y:e.y(1,0)}}(t=w(l._paper.circle(0,0,d/2)).attr({fill:"#00FF40",cursor:"pointer"})).ellipse=!0,p.push(t),t.mousedown(function(e){return function(e){if(e.stopPropagation(),1===m.length&&1===g.length){for(var t=0;t<m.length;t++){var n=m[t].get();if(n.hasOwnProperty("rotatable")&&!n.rotatable)return}Kt.extend(y,x);var o=m[0].getTransform(),i=o.x(y.xmid,y.ymid);y.ymid=o.y(y.xmid,y.ymid),y.xmid=i,Kt(l._paper.canvas).on({mouseup:C,mousemove:k})}}(e)}),v=t,function(){var o=$t.matrix();o.rotate(r,0,0);for(var e=function(e,t){var n={dir:t,start:{x:o.x(a[e].x,a[e].y),y:o.y(a[e].x,a[e].y)},end:{x:o.x(a[t].x,a[t].y),y:o.y(a[t].x,a[t].y)}};return n},t=["e","ne","n","nw","w","sw","s","se"],n=0;n<t.length-1;++n)0===n&&(h[t[n]]=e(t[t.length-1],t[n])),h[t[n+1]]=e(t[n],t[n+1])}()}(),this.push=function(e){n(e)||(m.push(e),g.push(e.getObject()),!0===e.get("selectable")&&e.getEventObject().bind(t),_(),p.toFront(),p.show())},this.contains=n,this.remove=function(e){for(var t=0;t<m.length;t++)m[t]===e&&m.splice(t,1);g.exclude(e.getObject()),i(e)},this.clear=o,this.repaint=_,this.updateCursor=z};function De(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Annotations API.
 * @class
 * @inner
 * @name AnnotationController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var gn=function e(t,n,o){var i=this,l=t,y=n,r=new ze,a={
/** @lends Atalasoft.Controls.WebDocumentViewer~AnnotationController */
annotations:{events:{
/**
     * @callback AnnotationCallback
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     */
/**
     * Triggers when the user uses the mouse to click on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationclicked
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationclicked:null,
/**
     * This event is triggered when annotation is created, whether through mouse/touch events or programmatically.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationcreated
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {number} page - event.Index of the page where annotation is created.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationcreated:null,
/**
     * Triggers when the user uses the mouse to double-click on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdoubleclicked
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationdoubleclicked:null,
/**
     *  Triggers when an annotation is loaded into the document. There are multiple ways how annotations could be loaded, for example passing the {@link WebDocumentViewerConfig.annotationsurl| annotationsurl} in the constructor, or by calling {@link Atalasoft.Controls.WebDocumentViewer#openUrl | viewer.openUrl}. In this case event will be fired for each loaded annotation from all layers.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationloaded
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     * @param {Object} event.customData - The event customer data from server.
     */
annotationloaded:null,
/**
     *  Triggers when all annotations are loaded into the document. There are multiple ways how annotations could be loaded, for example passing the {@link WebDocumentViewerConfig.annotationsurl| annotationsurl} in the constructor, or by calling {@link Atalasoft.Controls.WebDocumentViewer#openUrl | viewer.openUrl}. In this case event will be fired for each loaded annotation from all layers.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationsloaded
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {Object} event.customData - The event customer data from server.
     */
annotationsloaded:null,
/** Triggers when the user has depressed a mouse button on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmousedown
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationmousedown:null,
/** Triggers when the user has depressed the left mouse button on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmousedownleft
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationmousedownleft:null,
/** Triggers when the user has depressed the right mouse button on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmousedownright
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationmousedownright:null,
/** Triggers when the user moves the mouse pointer over an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmousemove
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationmousemove:null,
/** Triggers when the user has moved the mouse pointer out of the bounds of the annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmouseout
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationmouseout:null,
/** Triggers when the user has moved the mouse pointer into the bounds of the annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmouseover
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationmouseover:null,
/** Triggers when the user has released a mouse button on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmouseup
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationmouseup:null,
/** Triggers when an annotation has been moved.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmoved
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationmoved:null,
/** Triggers when an annotation has been rotated.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationrotated
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationrotated:null,
/** Triggers when a pinch gesture has been detected on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationpinchresize
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationpinchresize:null,
/** Triggers when an annotation has been repainted.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationrepainted
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationrepainted:null,
/** Triggers when an annotation has been resized.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationresized
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationresized:null,
/** Triggers when the user right clicks on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationrightclicked
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationrightclicked:null,
/** Triggers when a touch end event has been finished on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationtouchend
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationtouchend:null,
/** Triggers when a touch move event is happening on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationtouchmove
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationtouchmove:null,
/** Triggers when a touch event has started on an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationtouchstart
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationtouchstart:null,
/** Triggers when user finishes text edit for Text annotation and Text annotation edit mode is switched off.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationtextchanged
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationtextchanged:null,
/** Triggers when a layer has been inserted into the document.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#layerinserted
     * @param {Object} event - Event data object.
     * @param {number} event.index - Index of the inserted layer.
     */
layerinserted:null,
/** Triggers when a layer has moved from one index to another within the document.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#layermoved
     * @param {Object} event - Event arguments.
     * @param {number} event.srcindex - Index from which layer was moved.
     * @param {number} event.destindex - Index of the moved layer.
     */
layermoved:null,
/** Triggers when a layer has been removed from the document.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#layerremoved
     * @param {Object} event - Event arguments.
     * @param {number} event.index - Index from which layer was removed.
     * @param {AnnotationData[]} event.layer - The removed layer data.
     */
layerremoved:null,
/** Triggers when a layer has been changed. Fired by any type of layers structure: {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#insertLayer|insertLayer},  {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#moveLayer|moveLayer} or {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#removeLayer|removeLayer}.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#layerschanged
     * @type {NotificationCallback}
     */
layerschanged:null,
/** Triggers when all annotations have been deleted.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationscleared
     */
annotationscleared:null,
/** Triggers when an annotation is deleted.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdeleted
     * @param {Object} event - Event arguments.
     * @param {number} event.page - Index of the page where annotation has been removed.
     * @param {number} event.index - Index at which annotation has been removed.
     */
annotationdeleted:null,
/** Triggers when a user has started drawing an annotation with the mouse or a touch event.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdrawstart
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.ann - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationdrawstart:null,
/** Triggers when a user has finished drawing an annotation with the mouse or a touch event.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdrawend
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {boolean} event.cancelled - Indicates whether annotation draw was cancelled.
     * @param {AnnotationData} event.ann - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationdrawend:null,
/** Triggers when an annotation has started dragging.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdragstart
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.ann - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationdragstart:null,
/** Triggers when an annotation has finished dragging.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdragend
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.ann - Deprecated. Please use `annotation` property. This property will be removed soon.
     */
annotationdragend:null,
/**
     * @callback AnnotationHandler
     * @param {AnnotationData} annotation - annotation data object on which action is performed.
     */
/**
     * @typedef {Object} AnnotationContextMenu
     * @property {AnnotationHandler} [...menuItemTitle] - Menu item handlers. All own properties of the menu object will be translated to menu items.
     */
/**
     * Callback signature for {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#event:contextmenu | contextmenu} event.
     * @callback AnnotationContextMenuCallback
     * @param {Object} event - Event data object.
     * @param {AnnotationData} annotation - The data of the annotation which context menu were activated.
     * @param {AnnotationContextMenu} menu - The menu configuration. Keys of this object is treated as menu titles and values under those keys are handler functions.
     * This object could be modified by application to extend or modify current menu instance.
     */
/** Triggers when the context menu is shown for an annotation.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#contextmenu
     * @type {AnnotationContextMenuCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} annotation - The data of the annotation which context menu were activated.
     * @param {AnnotationContextMenu} menu - The menu configuration. Keys of this object is treated as menu titles and values under those keys are handler functions.
     * This object could be modified by application to extend or modify current menu instance.
     */
contextmenu:null,
/** Triggers when the Raphael dependency has finished loading.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#raphaelloaded
     * @deprecated WDV doesn't try to load any dependencies by its own. You need to add all necessary scripts to page's head section manually.
     */
raphaelloaded:null},
/**
       * Gets an array of selected annotation data objects.
       * @returns {AnnotationData[]} - Annotation data objects for selected annotations only.
       * @instance
       * @function
       */
getSelected:r.getSelected,
/**
       * Selects all annotations on every page.
       * @instance
       * @function
       */
selectAll:r.selectAll,
/**
       * Deselects all annotations on every page.
       * @instance
       * @function
       */
deselectAll:r.deselectAll,
/**
       * Selects all annotations on the given page.
       * @param {number} index - The index of the page the annotations should be selected on.
       * @instance
       * @function
       */
selectAllOnPage:r.selectPage,
/**
       * Deselects all annotations on the given page.
       * @param {number} index - The index of the page the annotations should be deselected on.
       * @instance
       * @function
       */
deselectAllOnPage:r.deselectPage,
/**
       * Cancels the drawing of an annotation and returns the viewer to the previous tool.
       * @instance
       * @function
       */
cancelDraw:ue,
/**
       * Setups the viewport to create an annotation
       * @param {AnnotationData} aConfig - Configuration for the annotation to draw
       * @param {NotificationCallback} [callback] - function to call when the annotation has finished drawing.
       * @param {NotificationCallback} [cancelled] - function to call when the annotation draw was canceled.
       * @instance
       * @function
       */
drawAnnotation:function(e,t,n){y._controllers.mouseTool.setTool(tn.None,tn.None),ne(e,!0,function(){y._controllers.mouseTool.setTool(tn.Pan,tn.None),"function"==typeof t&&t()},function(){y._controllers.mouseTool.setTool(tn.Pan,tn.None),"function"==typeof n&&n()})},
/**
       * Gets an array of annotation data objects located on the given zero based page index.
       * @param {number} index - The page index the annotations are located on.
       * @returns {AnnotationData[]} Annotation data objects on the given page.
       * @instance
       * @function
       */
getFromPage:X,
/**
       * Creates an annotation on the desired page with the given annotation data.
       * @param {AnnotationData} annotationConfig - Key value pairs representing annotation data.
       * @param {number} index - The index of the page the annotation should be created on.
       * @returns {AnnotationData} - Annotation data.
       * @instance
       * @function
       */
createOnPage:q,
/**
       * Deletes an annotation on the given page by it's index on the page.
       * @param {number} pageIndex - Page index the annotation is located on.
       * @param {number} annIndex - Index of the annotation on the page.
       * @instance
       * @function
       */
deleteFromPage:W,
/**
       * Shows the editor dialog for text annotations. Ignores other types of annotations.
       * @param {AnnotationData} annotation - the annotation object to show editor for.
       *
       * Annotation object should be retrieved using corresponding API. If it's constructed by the application, annotation won't be matched.
       * @instance
       * @function
       */
showEditor:function(e){return $(e,!0)},
/**
       * Hides the text annotation editor. Applies only to text annotations and ignores other types of annotations.
       * @param {AnnotationData} annotation - The annotation object to hide editor for.
       * @instance
       * @function
       */
hideEditor:function(e){return $(e,!1)},
/**
       * Sets the default annotation properties for initially created annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.defaults}.
       * @param {AnnotationData[]} aConfig - Default configurations for different types of the annotations.
       * @returns {Atalasoft.Controls.WebDocumentViewer}
       * @instance
       * @function
       */
setDefaults:G,
/**
       * Sets the default annotation properties for image annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.images}
       * @param {AnnotationData[]} aConfig - Default configurations image annotations.
       * @returns {Atalasoft.Controls.WebDocumentViewer}
       * @instance
       * @function
       */
setImages:Q,
/**
       * Sets the default annotation properties for stamp annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.stamps}.
       * @param {AnnotationData[]} aConfig - Default configurations stamp annotations.
       * @returns {Atalasoft.Controls.WebDocumentViewer}
       * @instance
       * @function
       */
setStamps:J,
/**
       * Inserts a layer of annotations at the source URL and index into the given page index. Single layer of annotations corresponds to single document page.
       * @param {string} sourceUrl - Reserved for future use.
       * @param {AnnotationData[]} layer - The annotation layer data.
       * @param {number} index - Index the layer is to be inserted into.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
insertLayer:function(e,t,n,o){n=T(e,t,n),"function"==typeof o&&o(),l.trigger({type:w.layerinserted,srcurl:e,srcindex:t,index:n}),l.trigger(w.layerschanged)},
/**
       * Removes a layer(page annotation) of annotations. All other layers are shifted. This operation corresponds to removing page from the document.
       * @param {number} index - index of the layer to be removed.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
removeLayer:function(e,t){var n=D(e);"function"==typeof t&&t(),l.trigger({type:w.layerremoved,layer:n,index:e}),l.trigger(w.layerschanged)},
/**
       * Moves a layer of annotations from one page index to another.
       * @param {number} sourceIndex - index of the layer to be moved.
       * @param {number} destIndex - Destination zero based page index.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
moveLayer:function(e,t,n){t=k(e,t),"function"==typeof n&&n(),l.trigger({type:w.layermoved,srcindex:e,destindex:t}),l.trigger(w.layerschanged)},
/**
       * Scrolls viewer to the specified annotation.
       * @param {AnnotationData} anno - the annotation object to scroll to.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function 
       */
scrollTo:function(e,t){var n=this,o=function(){De(this,n),"function"==typeof t&&t()}.bind(this),i=e.getPageIndex(),r=Y(e,i);if(r){var a=r.getZoom(),l=xe,s={x:0,y:0};if(e.type===l.line||e.type===l.lines||e.type===l.freehand){var u=e.points.map(function(e){return De(this,n),e.x}.bind(this)),c=e.points.map(function(e){return De(this,n),e.y}.bind(this));s.x=(Math.min.apply(Math,u)+Math.max.apply(Math,u))/2,s.y=(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2}else s.x=e.x+e.width/2,s.y=e.y+e.height/2;s.x*=a,s.y*=a,y.showPagePoint(i,s,rn.Center,!0,o)}else o()}},
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#deselectAll|annotations.deselectAll} instead.
     */
deselectAll:r.deselectAll,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#createOnPage|annotations.createOnPage} instead.
     */
createAnnotationOnPage:q,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#getFromPage|annotations.getFromPage} instead.
     */
getAnnotationsFromPage:X,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#deleteFromPage|annotations.deleteFromPage} instead.
     */
deleteAnnotationOnPageAtIndex:W,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setDefaults|annotations.setDefaults} instead.
     */
setAnnotationDefaults:G,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setImages|annotations.setImages} instead.
     */
setImages:Q,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setStamps|annotations.setStamps} instead.
     */
setStamps:J};if(e.__exposedApi=a.annotations,!t)return null;var s=n._config,u=n._pages,c=!1,d=null,h=null,f=null,p=null,g=null,b={annos:[],activepage:null,activeanno:null,readonly:!!o,zoom:l.getZoom(),getZoom:y.getPageScale,getViewerTransform:y.getViewerTransform,getPageRotation:y.getPageRotation},m={},v=!1,x=!1,w={click:"annotationclicked",dblclick:"annotationdoubleclicked",touchstart:"annotationtouchstart",interactend:"annotationtouchend",touchmove:"annotationtouchmove",pinchmove:"annotationpinchresize",rightclick:"annotationrightclicked",mousedown:"annotationmousedown",mousedownleft:"annotationmousedownleft",mousedownright:"annotationmousedownright",mousemove:"annotationmousemove",mouseout:"annotationmouseout",mouseup:"annotationmouseup",mouseover:"annotationmouseover",annocreate:"annotationcreated",annoload:"annotationloaded",moved:"annotationmoved",rotated:"annotationrotated",annoresized:"annotationresized",repaint:"annotationrepainted",layerinserted:"layerinserted",layerremoved:"layerremoved",layermoved:"layermoved",layerschanged:"layerschanged",annotationchanged:"annotationchanged",annotationtextchanged:"annotationtextchanged"};function _(){c=!0,b.readonly||(h=j(f),p=new Pe(n._config.parent),null!=s.annotations.defaults&&G(s.annotations.defaults),null!=s.annotations.stamps&&J(s.annotations.stamps),null!=s.annotations.images&&Q(s.annotations.images),null!=s.annotations.custom&&K(s.annotations.custom))}
/**
   * [Internal] Disposes memory intensive objects
   * @returns undefined
   */function z(e){g.translate(e.dx,e.dy)}function P(e){b.zoom=e.zoom}function T(e,t,n){if(e||"number"!=typeof t||(t=D(t)),t=t||[],null==n?n=b.annos.length:n<0&&(n=0),n>b.annos.length){var o=b.annos.length;b.annos[n]=t;for(var i=o;i<b.annos.length;++i)b.annos[i]||(b.annos[i]=[])}else b.annos.splice(n,0,t);return n}function D(e){return e<b.annos.length?b.annos.splice(e,1)[0]:null}function k(e,t){return T(null,D(e),t)}function C(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}function E(e){M(e.index,e.page)}function M(e,t){if(e<b.annos.length&&(F(t),b.annos[e]&&b.annos[e].length))for(var n,o=0;o<b.annos[e].length;o++)(n=b.annos[e][o])._pageindex=e,n.repaint(t._paper),n.get("selected")&&r.select(n,e,!0)}function F(e){e._grips.clear(),e._paper._annos.remove(),e._paper._annos.clear(),e._paper.forEach(function(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}),e._paper._trash.remove(),e._paper._trash.clear(),ue()}function S(e){b.activepage=e}function A(e){e.page._paper&&(F(e.page),e.page.append(e.page._paper.canvas))}function O(e){I(e.page)}function I(e){if(e&&0<=e._index&&b.annos[e._index]){for(var t=0;t<b.annos[e._index].length;t++)b.annos[e._index][t].repaint();e&&e._grips.repaint()}}function V(e){h&&(h.visible&&L(),h.remove());var t=Kt.extend(!0,{},f);if(l.trigger("contextmenu",[b.activeanno.getClonedData(),t]),Kt.isEmptyObject(t))h=null;else{for(var n in t)t.hasOwnProperty(n)&&(t[n]=H(t[n]));h=j(t)}!function(e){if(h){if(b.activeanno.get("readonly"))h.children(":contains(Properties)").off("click").children("a, div").css("color","#cdc9c9");else{var t=h.children(":contains(Properties)");void 0!==t.data("events")&&"click"in t.data("events")||t.on("click",B),t.children("a").css("color","#000000")}0===h.closest().length&&d.prepend(h);var n={x:e.x-6,y:e.y-6};h.css({left:n.x,top:n.y}),h.show(),h.visible=!0}}(e)}function L(){h&&(h.hide(),h.visible=!1)}function j(e){var t=y.createMenu(e);return t.css({position:"fixed","z-index":99999}),t.mouseleave(L),t.visible=!1,t}function H(e){return function(){return L(),e.call(this,b.activeanno.getClonedData())}}function R(){var e=b.activepage?b.activepage._index:0;if(b.annos[e]){var t=Kt.inArray(b.activeanno,b.annos[e]);-1!==t&&(b.activeanno=null,Z(t,e))}L()}function B(){L(),p.show(b.activeanno)}
/**
   * Clears the annotations and related data from all pages
   */
function N(){if(0<b.annos.length){if(b.annos.length=0,u)for(var e=0;e<u.length;e++)u[e]._grips.clear(),u[e]._paper.forEach(C),u[e]._paper._trash.remove(),u[e]._paper._trash.clear(),u[e]._paper._annos.remove(),u[e]._paper._annos.clear();l.trigger({type:"annotationscleared"})}}
/**
   * Creates an annotation on the desired page with the given annotation data.
   * @param aConfig: object, Key value pairs representing annotation data.
   * @param pgNum: number, The zero based index of the page the annotation should be created on.
   * @param callback: function, Function to be called when the operation has completed.
   * @returns object: Atalasoft.Annotations.Annotation.
   */function U(e,t,n){var o={};e.multiview?o=e:(e&&e.type&&m[e.type]&&Kt.extend(!0,o,m[e.type]),Kt.extend(!0,o,e));var i=new _e(o,b);return i._pageindex=t,void 0===b.annos[t]&&(b.annos[t]=[]),b.annos[t].push(i),y.redrawPageFromIndex(t,!0),"function"==typeof n&&n(i),de(i),i}function q(e,t,n){var o=U(e,t,n).getClonedData();return l.trigger({type:w.annocreate,anno:o,annotation:o,page:t}),o}function W(e,t){Z(t,e)}
/**
   * Deletes an annotation on the given z-index and zero based page index.
   * @param annIndex: number, Zero based z-index of the annotation.
   * @param pgNum: number, Zero based page index the annotation is located on.
   */function Z(e,t){var n=b.annos[t].splice(e,1)[0];b.activepage&&b.activepage._paper&&b.activepage._paper._annos.exclude(n.getObject()),b.activeanno===n&&(b.activeanno=null),n.dispose(),b.activepage&&b.activepage._grips&&b.activepage._grips.repaint(),l.trigger({type:"annotationdeleted",page:t,index:e})}function X(e){var t=[];if(0===b.annos.length||void 0===b.annos[e])return t;for(var n=0;n<b.annos[e].length;n++)t[n]=b.annos[e][n].getClonedData();return t}function Y(e,t){if(isFinite(t)){if(t<b.annos.length)for(var n=0;n<b.annos[t].length;++n)if(b.annos[t][n].isCloneSource(e))return b.annos[t][n]}else for(var o=0;o<b.annos.length;++o){var i=Y(e,o);if(i)return i}return null}function G(e){s.annotations.defaults=e;for(var t=0;t<e.length;t++)"string"==typeof e[t].type&&(m[e[t].type]=e[t]);return l}function J(e){s.annotations.stamps=e;for(var t=0;t<e.length;t++)be(e[t]);if(c){var n={type:"button",id:y._id+"_toolbar_Button_Stamp",icon:"stamp",tooltip:"Draw Stamp",text:""},o=y.createDropDownButton(n);n.onclick=y.drawAnnotation,y.createDropDownMenu(o,n,e)}return l}function Q(e){s.annotations.images=e;for(var t=0;t<e.length;t++)e[t].type="image";if(c){var n={type:"button",id:y._id+"_toolbar_Button_Image",icon:"image",tooltip:"Draw Image",text:""},o=y.createDropDownButton(n);n.onclick=y.drawAnnotation,y.createDropDownMenu(o,n,e)}return l}
/**
   * Sets the default annotation properties for initially created custom annotations.  This accepts the same input as the main config.
   * @param cConfig: array, An array of JSON objects representing custom annotation types.
   * @returns object: Atalasoft.Controls.WebDocumentViewer
   */function K(e){s.annotations.custom=e;for(var t=0;t<e.length;t++)e[t].type="custom";if(c){var n={type:"button",id:y._id+"_toolbar_Button_Custom",icon:"image",tooltip:"Draw Custom",text:""},o=y.createDropDownButton(n);n.onclick=y.drawAnnotation,y.createDropDownMenu(o,n,e)}return l}function $(e,t){if("text"===e.type&&e){var n=e.getPageIndex(),o=Y(e,n);t?e.visible&&(y.isPageInView(n)?ee(o,n):l.showPage(e.getPageIndex(),function(){ee(o,n)})):o.trigger("hideeditor")}}function ee(e,t){e&&(!1!==e.get("selectable")&&r.select(e,t,!1),e.trigger("showeditor"))}function te(e){S(e),r.deselectPage(e),L()}function ne(e,t,n,o){if(v)return null;var i=Kt.extend(!0,{},e);return e&&e.type&&m[e.type]&&(i=Kt.extend(!0,i,m[e.type]),t&&(i=Kt.extend(!0,i,e))),i.rotation=0,b.activeanno&&null===b.activeanno.getObject()&&se(),function(){if(!x){d.on("mousedown",ae),en.Features.Touch&&d.on("touchstart",ae);for(var e=0;e<u.length;e++)u[e]._draw.toFront();x=!0}}(),b.activeanno=new _e(i,b),b.activeanno.bind({drawn:le,cancelled:se}),"function"==typeof n&&(oe=n),"function"==typeof o&&(ie=o),b.activeanno}r.setAnnos(b.annos),r.setPages(u),function(){var D,k,C,c=$t.svg&&!en.Features.foreignObject;function r(e,t,n,o,i,r){var a=c||r?"image":"foreignObject",l=d(this,this,"http://www.w3.org/2000/svg",a,t,n,o,i),s=null;if(!c){s=document.createElementNS("http://www.w3.org/1999/xhtml","div");var u="http://www.w3.org/2000/xmlns/";s.setAttributeNS(u,"xmlns",u),s.innerHTML=e||"",l.node.appendChild(s),l.isHtml=!0}return l.innerDom=s,l}function d(e,t,n,o,i,r,a,l,s){var u=null===n?document.createElement(o):document.createElementNS(n,o);t.canvas&&t.canvas.appendChild&&t.canvas.appendChild(u);var c=new e.constructor.el.constructor(u,e);for(var d in c.attrs={x:i,y:r,width:a,height:l,r:s||0,rx:s||0,ry:s||0,fill:"none",stroke:"#000"},c.skew={},"g"===(c.type=o)&&(c.canvas=c.node),c.attrs)c.attrs.hasOwnProperty(d)&&void 0!==c.attrs[d]&&u.setAttribute(d,c.attrs[d]+"");return c}$t.vml?$t.fn.html=function(e,t,n,o,i){var r=d(this,this,null,"div",t,n,o,i),a=r.node;function l(e){var t=r.matrix.split();if(e.hasOwnProperty("x")&&void 0!==e.x&&e.hasOwnProperty("y")&&void 0!==e.y){var n={x:e.x*t.scalex,y:e.y*t.scaley};if(0!==t.rotate){var o=we([{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x+e.width,y:e.y+e.height},{x:e.x,y:e.y+e.height}],r.matrix);n=o}a.style.left=Math.round(n.x)+"px",a.style.top=Math.round(n.y)+"px"}}return a.innerHTML=e||"",(r.innerDom=a).style.position="absolute",r.__tsfm=r.transform,r.transform=function(){this.__tsfm.apply(this,arguments),this.repaint(),l(this.attrs)},r.backgroundColor=function(e){a.style.backgroundColor=e,this.repaint()},r.repaint=function(){a.style.filter='progid:DXImageTransform.Microsoft.Chroma(color="'+a.style.backgroundColor+'"); '+this.matrix.toFilter()},r.__attr=r.attr,r.attr=function(e){this.__attr.apply(this,arguments),e&&(l(e),e.hasOwnProperty("width")&&(a.style.width=e.width+"px"),e.hasOwnProperty("height")&&(a.style.height=e.height+"px"))},r.isHtml=!0,r}:($t.fn.html=function(e,t,n,o,i){return r.call(this,e,t,n,o,i)},D={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},k={},C=function e(t,n){if(n)for(var o in"string"==typeof t&&(t=e(t)),n)n.hasOwnProperty(o)&&("xlink:"===o.substring(0,6)?t.setAttributeNS("http://www.w3.org/1999/xlink",o.substring(6),String(n[o])):t.setAttribute(o,String(n[o])));else(t=$t._g.doc.createElementNS("http://www.w3.org/2000/svg",t)).style&&(t.style.webkitTapHighlightColor="rgba(0,0,0,0)");return t},$t.fn.addArrow=function(e,t,n){if("path"===e.type){for(var o,i,r,a,l,s=String(t).toLowerCase().split("-"),u=e.paper,c=n?"end":"start",d=e.node,h=e.attrs,f=h["stroke-width"],p=s.length,g="classic",m=3,v=3,y=5;p--;)switch(s[p]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":g=s[p];break;case"wide":v=5;break;case"narrow":v=2;break;case"long":m=5;break;case"short":m=2}if(l="open"===g?(m+=2,v+=2,y+=2,r=1,a=n?4:1,{fill:"none",stroke:h.stroke}):(a=r=m/2,{fill:h.stroke,stroke:"none"}),e._.WDVarrows?n?(e._.WDVarrows.endPath&&k[e._.WDVarrows.endPath]--,e._.WDVarrows.endMarker&&k[e._.WDVarrows.endMarker]--):(e._.WDVarrows.startPath&&k[e._.WDVarrows.startPath]--,e._.WDVarrows.startMarker&&k[e._.WDVarrows.startMarker]--):e._.WDVarrows={},"none"!==g){var b=Math.random().toString(36).substring(7),x="dave-marker-"+g,w="dave-marker-"+c+g+m+v+b;$t._g.doc.getElementById(x)?k[x]++:(u.defs.appendChild(C(C("path"),{"stroke-linecap":"round",d:D[g],id:x})),k[x]=1);var _,z=$t._g.doc.getElementById(w);z?(k[w]++,_=z.getElementsByTagName("use")[0]):(z=C(C("marker"),{id:w,markerHeight:v,markerWidth:m,orient:"auto",refX:a,refY:v/2}),_=C(C("use"),{"xlink:href":"#"+x,transform:(n?"rotate(180 "+m/2+" "+v/2+") ":"")+"scale("+m/y+","+v/y+")","stroke-width":(1/((m/y+v/y)/2)).toFixed(4)}),z.appendChild(_),u.defs.appendChild(z),k[w]=1),C(_,l);var P=r*("diamond"!==g&&"oval"!==g);i=(i=n?(o=e._.WDVarrows.startdx*f||0,$t.getTotalLength(h.path)-P*f):(o=P*f,$t.getTotalLength(h.path)-(e._.WDVarrows.enddx*f||0)))<0?0:i,(l={})["marker-"+c]="url(#"+w+")",(i||o)&&(l.d=$t.getSubpath(h.path,o,i)),C(d,l),e._.WDVarrows[c+"Path"]=x,e._.WDVarrows[c+"Marker"]=w,e._.WDVarrows[c+"dx"]=P,e._.WDVarrows[c+"Type"]=g,e._.WDVarrows[c+"String"]=t}else i=n?(o=e._.WDVarrows.startdx*f||0,$t.getTotalLength(h.path)-o):(o=0,$t.getTotalLength(h.path)-(e._.WDVarrows.enddx*f||0)),e._.WDVarrows[c+"Path"]&&C(d,{d:$t.getSubpath(h.path,o,i)}),delete e._.WDVarrows[c+"Path"],delete e._.WDVarrows[c+"Marker"],delete e._.WDVarrows[c+"dx"],delete e._.WDVarrows[c+"Type"],delete e._.WDVarrows[c+"String"];for(l in k)if(k.hasOwnProperty(l)&&!k[l]){var T=$t._g.doc.getElementById(l);T&&T.parentNode.removeChild(T)}}}),$t.fn.atalaImage=function(e,t,n,o,i){return r.call(this,e,t,n,o,i,!0)}}(),g=$t.matrix(1,0,0,1,0,0),l.bind({scroll:z,pagerecycled:A,pageshown:E,zoomchanged:P,pagerotated:O}),f={Delete:R,Properties:B},y._state.initialized?_():l.bind({initialized:_}),"Atalasoft.Controls.WebDocumentViewer"===l.typeOf&&Kt.extend(l,a),i.__exposedApi=a.annotations,i.addDrawingSurface=function(n){var e=this;if(n instanceof Kt){n._paper=$t(n[0]),n._paper.canvas.style.position="absolute",n._paper.canvas.style.zIndex="2",0<s.pageborderwidth&&(n._paper.canvas.style.left=s.pageborderwidth+"px",n._paper.canvas.style.top=s.pageborderwidth+"px"),n._paper._annos=n._paper.set(),n._paper._trash=n._paper.set(),(n._paper._page=n)._matrix=$t.matrix(1,0,0,1,0,0),n._matrix.translate(-n.offset().left,-n.offset().top),n._grips=new Te(n,b);var t=function(){De(this,e),te(n)}.bind(this);return n.on("mousedown",t),en.Features.Touch&&n.on("touchstart",t),n.on({pageresize:function(e){var t;e.page=n,(t=e).page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,I(t.page)},pagezoom:function(e){var t;e.page=n,t=e,isFinite(t.width)&&isFinite(t.height)&&t.width&&t.height&&(b.zoom=t.zoom,t.page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,t.page._paper.forEach(function(e){if(e&&e.transform&&!e.grip){void 0!==e._linewidth&&e.attr("stroke-width",e._linewidth*b.zoom);var t=e.attr("clip-rect");"object"==typeof t&&"number"==typeof t.length&&e.attr("clip-rect",t)}}),I(t.page))}}),!0}return!1},i.removeDrawingSurface=function(e){return e instanceof Kt&&(e._paper&&(e._paper._annos=null,e._paper._page=null,e._paper=null),e._matrix=null,!(e._grips=null))},i.insertLayer=T,i.removeLayer=D,i.moveLayer=k,i.showLayer=M,i.clear=N,i.createAnnotation=U,i.deleteAnnoOnPage=W,i.drawAnnotation=ne,i.getAnnosFromPage=X,i.setStamps=J,i.setAnnotationDefaults=G,i.setImages=Q,i.setCustom=K,i.dispose=function(){p=f=h=d=u=s=y=l=i=null,b.annos.length=0,b.activepage=null,b.activeanno=null,b.zoom=null,r.dispose(),r=null},
/**
   * [Internal] Gets debug info object
   * @returns debug info object if available, otherwise null
   */
i.__getDebugInfo=function(){var e={};return Kt.extend(!0,e,{data:b,defaults:m,drawing:v,drawready:x,matrix:g,menu:h,menuconfig:f,pages:u,props:p,viewport:d}),e}
/**
   * [Internal] Links the annotation data between two controls
   * @param linker internal object of type __LVlinker
   * @returns undefined
   */,i.__linkAnnotations=function(e){e&&(e._annos?Kt.isArray(e._annos)&&(b.annos=e._annos):e._annos=b.annos)}
/**
   * [Internal] Clears all selection of annotations
   */,i.__clearAllSelection=te,i.setViewPort=function(e){e&&(e instanceof Kt||(e=Kt(e)),d=e)};var oe=function(){},ie=function(){};function re(){if(x){d.off("mousedown",ae),en.Features.Touch&&d.off("touchstart",ae);for(var e=0;e<u.length;e++)u[e]._draw.reset();x=!1}}function ae(e){v=!0,d.off("mousedown",ae),en.Features.Touch&&d.off("touchstart",ae);var t=b.activeanno.getClonedData();l.trigger({type:"annotationdrawstart",annotation:t,ann:t}),b.activeanno._pageindex=b.activepage._index,b.activeanno.startDraw(e,b.activepage._paper,{})}function le(){ce(),function(e){var t=b.activepage,n=t?t._index:0;b.annos[n]?b.annos[n].push(e):b.annos[n]=[e],b.activeanno.unbind({drawn:le,cancelled:se}),de(b.activeanno),r.select(b.activeanno,t,!1),oe({annotation:e}),oe=function(){};var o=e.getClonedData();l.trigger({type:w.annocreate,anno:o,annotation:o,page:n})}(b.activeanno)}function se(){b.activeanno.dispose(),b.activeanno=null,v&&ce(!0)}function ue(){x&&(v?se():(b.activeanno&&(b.activeanno.dispose(),b.activeanno=null),re()),ie({annotation:null}),ie=function(){})}function ce(e){v=!1,re();var t=e?null:b.activeanno.getClonedData();l.trigger({type:"annotationdrawend",annotation:t,ann:t,cancelled:!!e})}function de(n){function e(e){var t=n.getClonedData();l.trigger({type:w[e.type],anno:t,annotation:t})}n.bind({dragstart:function(){var e=n.getClonedData();l.trigger({type:"annotationdragstart",ann:e,annotation:e})},dragend:function(){var e=n.getClonedData();l.trigger({type:"annotationdragend",annotation:e,ann:e})},interactstart:function(){b.activepage&&b.activepage._paper===n.getObject().paper||S(n.getObject().paper._page),b.activeanno=n},selected:he,deselected:he,reselected:he,contextmenu:V,serverrenderurlrequested:fe,moved:e,rotated:e,annoresized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mousemove:e,mouseout:e,mouseup:e,mouseover:e,repaint:e,annotationchanged:e,annotationtextchanged:e})}function he(e){var t=e.page||0<=e.pageindex?e.pageindex:b.activepage,n=r.resolvePage(t);n&&(t=n),"selected"===e.type||"reselected"===e.type?(b.activeanno=e.ann,r.select(e.ann,t,e.append),p&&p.isVisible()&&p.show(e.ann)):(r.deselect(e.ann,t,e.append),p&&p.isVisible()&&p.cancel()),n&&n._grips&&n._grips.repaint()}function fe(e){var t=e.complete,n=pe(e.data);"function"==typeof t&&t.call(n)}function pe(e){return ge(e),JSON.stringify(e)}function ge(e){for(var t in e)if("color"===t&&null!=e[t]){var n=$t.getRGB(e[t]);n.error&&(n.hex="#000000"),e[t]=n.hex}else"points"!==t&&"object"==typeof e[t]&&ge(e[t])}function me(e,t,n,o,i){var r={type:"annodata",serverurl:e,query:"?atalaanndata=",method:"GET",data:{atala_annurl:t,atala_docurl:n=n||l.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{layers:[],offset:o||0,length:i,error:void 0}};for(var a in r.data)r.data.hasOwnProperty(a)&&null===r.data[a]&&(r.data[a]=void 0);return r}function ve(n,o,i){function e(e){if(void 0!==n.info.docIndex&&(e.offset=n.info.docIndex),!e.layers&&e.error&&o)for(var t=e.offset;t<e.offset+n.info.length;t++)b.annos[t]=[];ye(e),"function"==typeof i&&i.call(void 0,e.error,e)}"function"==typeof o&&(i=o,o=!1),o||N(),y.makeHandlerRequest(n,e,e)}function ye(e){if(e){var t={type:"annotationsloaded",customData:e.customData};if(e.layers)for(var n=0;n<e.layers.length;n++){e.offset=e.offset||0;var o=e.offset+n;b.annos[o]&&0<b.annos[o].length?b.annos[o].length=0:b.annos[o]=[];var i=e.layers[n];if(i&&(i._index=isFinite(i._index)&&0<=i._index?i._index:o,i.visible=void 0===i.visible||i.visible,i.items))for(var r=0;r<i.items.length;r++){i.items[r].visible=i.items[r].visible&&i.visible,b.annos[o][r]=new _e(i.items[r],b),b.annos[o][r]._pageindex=i._index;var a=b.annos[o][r].getClonedData();l.trigger({type:w.annoload,anno:a,annotation:a,customData:e.customData}),de(b.annos[o][r])}}else e.error&&(t.error=e.error);t.offset=e.offset,t.length=e.layers?e.layers.length:0,l.trigger(t)}}function be(e){var t;return e.type="stamp",e.text&&((t=e.text)&&t.font&&t.font.size&&(t.font.size=parseFloat(t.font.size)),e.text.readonly=!0),e}i.stringifyChanges=function(){var e=[];for(var t in b.annos)if(b.annos.hasOwnProperty(t)){e[t]={items:[]};var n=0,o=y.getPageScale(t),i=$t.matrix();if(y._config.persistrotation){n=y.getPageRotation(t),i=y.getViewerTransform(t);var r=1/o;i.scale(r,r,0,0),i.e*=r,i.f*=r}for(var a in b.annos[t])if(b.annos[t].hasOwnProperty(a)){var l=Kt.extend(!0,{},b.annos[t][a].get());if(l.rotation||n){var s=b.annos[t][a].getBox(),u=s.width/2,c=s.height/2,d=$t.matrix(),h=b.annos[t][a].getTransform();d.add(i.a,i.b,i.c,i.d,i.e,i.f),d.add(h.a,h.b,h.c,h.d,h.e,h.f);var f={x:d.x(s.x+u,s.y+c),y:d.y(s.x+u,s.y+c)},p=f.x-u-s.x,g=f.y-c-s.y;if(l.points)for(var m=0;m<l.points.length;m++)if("line"===l.type){var v=d.x(l.points[m].x,l.points[m].y);l.points[m].y=d.y(l.points[m].x,l.points[m].y),l.points[m].x=v}else l.points[m].x+=p,l.points[m].y+=g;else"custom"!==l.type&&l.points||(l.x+=p,l.y+=g);l.rotation="line"!==l.type?(l.rotation+n)%360:0}ge(e[t].items[a]=l)}}return JSON.stringify(e)},i.stringifyAnnotationData=pe,i.createHandlerRequest=me,i.makeHandlerRequest=ve,i.loadAnnotationsUrl=function(e,t,n,o,i,r,a){var l=Array.prototype.slice.call(arguments);"function"!=typeof(a=l.pop())&&l.push(a),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),r=l.shift();var s=me(e,t,n,o,i);void 0!==r&&(s.info.docIndex=r),ve(s,0<=o&&1<=i,a)},i.loadAnnotations=ye};function V(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}var L,j,U=function(e,t,n){var o,f=t,c=this,i=Kt({}),r=null,p=null,a=null,g=n,y={type:"",backgroundcolor:"",color:null,fieldname:"",hidden:!1,isfieldrequired:!1,items:null,locked:!1,norotate:!1,noview:!1,nozoom:!1,readonly:!1,required:!1,x:0,y:0,width:0,height:0,rotation:0,border:{color:"#000",style:"none",radius:{vertical:0,horizontal:0},width:0},text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12,paddingtop:0,linespacing:0},ismultiline:!1,ispassword:!1,isrichtext:!1,scrollable:!1,maxlength:0,maximumfieldheight:-1,preserveoverflow:!1}},l={button:{},checkbox:{checked:!1,group:null},radio:{checked:!1,group:null},textbox:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},signature:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},choice:{multiline:!1}},s={};function u(){return i.trigger.apply(i,arguments),c}function d(e,t){e&&(t?Kt.extend(!0,y,e):Kt.extend(y,e))}function h(){a={update:function(){Kt.extend(!0,y,a),y.update&&delete y.update,k(),D(),null!==r&&(y.selectable?(s.isBound("selectable")||(i.on(s.selectable),s.bound("selectable")),y.movable&&!s.isBound("movable")?(i.on(s.movable),s.bound("movable")):!y.movable&&s.isBound("movable")&&(i.off(s.movable),s.unbound("movable")),en.Features.Touch&&(y.resizable&&!s.isBound("resizable")?(i.on(s.resizable),s.bound("resizable")):!y.resizable&&s.isBound("resizable")&&(i.off(s.resizable),s.unbound("resizable")))):!y.selectable&&s.isBound("selectable")&&(i.off(s.selectable),s.unbound("selectable"),i.off(s.movable),s.unbound("movable"),i.off(s.resizable),s.unbound("resizable")))}},Kt.extend(!0,a,y)}function m(){return JSON.stringify(y)}function v(e,t){return t-(e.value.slice(0,t).split("\r\n").length-1)}function b(e,t){if("number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd)e.selectionStart=t.start,e.selectionEnd=t.end;else{var n=e.createTextRange(),o=v(e,t.start);n.collapse(!0),t.start===t.end?n.move("character",o):(n.moveEnd("character",v(e,t.end)),n.moveStart("character",o)),n.select()}}function x(e){var t=null,v=!1;switch(y.type){case"button":(t=Kt("<button/>")).click(function(){return u({type:"buttonclicked",name:y.fieldname}),!1});break;case"textbox":case"signature":t=y.text.multiline?Kt('<textarea style="overflow-y:'+(y.text.scrollable?"auto":"hidden")+';resize:none"></textarea>'):Kt('<input type="text" />'),y.text.value=t.val(y.text.value).val(),t.on("paste",function(){return v=!0}),t.on("input",function(e){-1===y.text.maximumfieldheight&&(y.text.maximumfieldheight=Kt(this).get(0).scrollHeight);var t,n,o,i,r,a,l,s,u=0<y.text.maxlength&&Kt(this).val().length>y.text.maxlength,c=!y.text.scrollable&&Kt(this).get(0).scrollHeight>y.text.maximumfieldheight;if(Kt(this).val().length>y.text.value.length&&(u||c)){var d=(t=e.target,s=l=0,"number"==typeof t.selectionStart&&"number"==typeof t.selectionEnd?(l=t.selectionStart,s=t.selectionEnd):(o=document.selection.createRange())&&o.parentElement()===t&&(r=t.value.length,n=t.value.replace(/\r\n/g,"\n"),(i=t.createTextRange()).moveToBookmark(o.getBookmark()),(a=t.createTextRange()).collapse(!1),-1<i.compareEndPoints("StartToEnd",a)?l=s=r:(l=-i.moveStart("character",-r),l+=n.slice(0,l).split("\n").length-1,-1<i.compareEndPoints("EndToEnd",a)?s=r:(s=-i.moveEnd("character",-r),s+=n.slice(0,s).split("\n").length-1))),{start:l,end:s});if(v&&0<y.text.maxlength){var h=Kt(this).val();if(h.length===d.start)Kt(this).val(h.substr(0,y.text.maxlength));else{var f=h.length-y.text.value.length,p=y.text.maxlength-y.text.value.length,g=h.substr(0,d.start-f+p),m=y.text.value.substr(d.start-f);Kt(this).val(g+m),b(e.target,{start:g.length,end:g.length})}}else Kt(this).val(y.text.value),b(e.target,{start:d.start-1,end:d.start-1})}!y.text.preserveoverflow&&Kt(this).get(0).scrollHeight<y.text.maximumfieldheight&&(y.text.maximumfieldheight=Kt(this).get(0).scrollHeight),y.text.value=Kt(this).val(),v=!1});break;case"checkbox":(t=Kt('<input type="checkbox" />').prop({name:y.group,checked:y.checked})).val(y.value);break;case"radio":(t=Kt('<input type="radio" />').prop({name:y.group,checked:y.checked})).val(y.value);break;case"choice":if((t=Kt("<select></select>")).text(y.value),t.attr({multiple:y.multiple,size:y.multiline&&y.items?y.items.length:0}),y.items)for(var n in t.items=[],y.items)if(y.items.hasOwnProperty(n)){var o=Kt("<option></option>",{selected:y.items[n].checked,value:y.items[n].value,text:y.items[n].text});t.append(o),t.items[n]=o}if(y.multiline&&y.items){var i=function(){Kt(this).trigger("change")};t.on({mouseup:i,touchend:i})}break;case"generic":t=Kt("<div></div>")}if(t){if("textbox"===y.type||"signature"===y.type){var r=y.text.font.paddingtop,a=0<y.text.font.linespacing?y.text.font.linespacing+"px":"1.14pt";t.css({resize:"none",position:"absolute",paddingTop:y.multiline?r:0,paddingBottom:y.multiline?"2pt":0,lineHeight:a,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"})}else t.css({resize:"none",position:"absolute",padding:0,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});t.on({click:M,mousedown:M,mouseup:M,change:_,uncheck:z,focusin:P,focusout:T})}return e._fields&&e._fields.push(t),e.append(t),t}function w(){var e=y.fieldname.lastIndexOf(".");return 0<=e?y.fieldname.substr(0,e):null}function _(e){var t=w(),n=[];switch(y.type){case"button":break;case"textbox":case"signature":if(y.text.value=this.value,f.multiviewFields.hasOwnProperty(t)){var o=f.multiviewFields[t];for(var i in o)if(o.hasOwnProperty(i)){var r=o[i];r!==c&&(r.get().text.value=this.value,r.updateView())}}break;case"checkbox":y.checked=this.checked,y.group&&y.checked&&(Kt('input[name="'+y.group+'"]').trigger("uncheck"),y.checked=!0,this.checked=!0);break;case"radio":y.group&&Kt('input[name="'+y.group+'"]').trigger("uncheck"),y.checked=this.checked;break;case"choice":if(void 0!==e.target.selectedOptions)n=e.target.selectedOptions;else if(e.target.multiple)for(var a=0;a<e.target.options.length;a++)e.target.options[a].selected&&n.push(e.target.options[a]);else 0<=e.target.selectedIndex&&n.push(e.target.options[e.target.selectedIndex]);for(var l in y.items)if(y.items.hasOwnProperty(l)){var s=y.items[l];for(var u in s.checked=!1,n)n.hasOwnProperty(u)&&n[u].value===s.value&&(s.checked=!0)}}}function z(e){"checkbox"===e.target.type&&(e.target.checked=!1),y.checked=!1}function P(){C(!0),u({type:"fieldfocusin",field:c})}function T(){C(!1),u({type:"fieldfocusout",field:c})}function D(e){e&&((p=x(e)).zoom=E,k(),u({type:"viewchanged",fieldview:p})),u("repaint")}function k(){if(p){if(y.hidden||y.noview)return void p.hide();p.show();var e=Kt.extend({},(t=f.getViewerTransform(g),n=V(t,y.x,y.y),o=V(t,y.x+y.width,y.y+y.height),i=f.getZoom(g),r=y.width*i,a=y.height*i,l={x:(n.x+o.x-r)/2,y:(n.y+o.y-a)/2},s=f.getPageRotation(g)+y.rotation,u="rotate("+s+"deg)",c={left:Math.round(l.x)+"px",top:Math.round(l.y)+"px",width:r+"px",height:a+"px","max-width":r+"px","max-height":a+"px"},d=cn(0!==s?u:""),Kt.extend(c,d),("textbox"===y.type||"signature"===y.type)&&(c.cursor=s%180==0?"text":"vertical-text"),c.visibility=s%180==0?"visible":"hidden",c),(h=y.border&&"underline"===y.border.style,{backgroundColor:y.backgroundcolor,color:y.color||y.text.font.color,borderStyle:y.border&&y.border.style&&!h?y.border.style:"none",borderBottomStyle:h?"solid":"inherit",borderColor:y.border?y.border.color:null,fontFamily:y.text.font.family,fontStyle:y.text.font.italic?"italic":y.text.font.oblique?"oblique":"normal",fontWeight:y.text.font.bold?"bold":"",textAlign:y.text.align}));p.css(e),f.highlighted?(p.addClass("atala-ui-form-highlight"),y.required?p.addClass("atala-ui-form-required"):p.removeClass("atala-ui-form-required")):p.removeClass("atala-ui-form-highlight"),y.readonly?p.attr("readonly","readonly"):p.removeAttr("readonly"),"textbox"===y.type?C(p.is(":focus")):"button"===y.type&&p.text(y.text.value)}var t,n,o,i,r,a,l,s,u,c,d,h}function C(e){"textbox"===y.type&&(e||(y.text.value?p.val()!==y.text.value&&p.val(y.text.value):p.val(y.text.defaultvalue)))}function E(e){e=e||f.getZoom(g),p.css({fontSize:Math.round((y.text.font.size||12)*e*(f.dpi/96)),borderWidth:y.border?Math.round(y.border.width*e):0}),y.text&&y.text.align&&p.css({paddingLeft:y.text.leftPadding*e+"px",paddingRight:y.text.rightPadding*e+"px"}),k()}return c._pageindex=n,o=e.type,Kt.extend(!0,y,l[o]),d(e,!0),c.dispose=function(){i&&i.off(),y=i=c=f=null},c.bind=function(){i.on.apply(i,arguments)},c.unbind=function(){i.off.apply(i,arguments)},c.trigger=u,c.set=d,c.get=function(e){return e?y[e]:y},c.setPageIndex=function(e){g=e,c.hasOwnProperty("_pageindex")&&(c._pageindex=e)},c.getClonedData=function(){return a?Kt.extend(!0,a,y):h(),a},c.getObject=function(){return p},c.getEventObject=function(){return i},c.getZoom=function(){return f.zoom},c.stringify=m,c.getJSON=m,c.getParentName=w,c.getName=function(){var e=y.fieldname.lastIndexOf(".");return 0<=e?y.fieldname.substr(e+1):y.fieldname},c.repaint=D,c.updateView=k,c.zoom=E,c},mn=function e(t,n,o){var i=this,s=t,r=n,a={forms:{events:{
/** Triggers when the user uses the mouse to click on a field. Populated keys: e.field */
fieldclicked:null,
/** Triggers when the user uses the mouse to create a field. Populated keys: e.field */
fieldcreated:null,
/** Triggers when the user uses the mouse to double-click on a field. Populated keys: e.field */
fielddoubleclicked:null,
/** Triggers when a field is loaded into the document. Populated keys: e.field */
fieldloaded:null,
/** Triggers when the user has depressed a mouse button on a field. Populated keys: e.field */
fieldmousedown:null,
/** Triggers when the user has depressed the left mouse button on a field. Populated keys: e.field */
fieldmousedownleft:null,
/** Triggers when the user has depressed the right mouse button on a field. Populated keys: e.field */
fieldmousedownright:null,
/** Triggers when the user moves the mouse pointer over a field. Populated keys: e.field */
fieldmousemove:null,
/** Triggers when the user has moved the mouse pointer out of the bounds of the field. Populated keys: e.field */
fieldmouseout:null,
/** Triggers when the user has moved the mouse pointer into the bounds of the field. Populated keys: e.field */
fieldmouseover:null,
/** Triggers when the user has released a mouse button on a field. Populated keys: e.field */
fieldmouseup:null,
/** Triggers when a field has been moved. Populated keys: e.field */
fieldmoved:null,
/** Triggers when a pinch gesture has been detected on a field. Populated keys: e.field */
fieldpinchresize:null,
/** Triggers when a field has been repainted. Populated keys: e.field */
fieldrepainted:null,
/** Triggers when a field has been resized. Populated keys: e.field */
fieldresized:null,
/** Triggers when the user right clicks on a field. Populated keys: e.field */
fieldrightclicked:null,
/** Triggers when a touch end event has finished on a field. Populated keys: e.field */
fieldtouchend:null,
/** Triggers when a touch move event is happening on a field. Populated keys: e.field */
fieldtouchmove:null,
/** Triggers when a touch event has started on a field. Populated keys: e.field */
fieldtouchstart:null},createOnPage:
/**
   * Creates a field on the desired page with the given field data.
   * @param fConfig: object, Key value pairs representing field data.
   * @param pgNum: number, The zero based index of the page the field should be created on.
   * @param callback: function, Function to be called when the operation has completed.
   * @returns object, Key value pairs representing field data.
   */
function(e,t,n){var o=F(e,t,n).getClonedData();return s.trigger({type:g.fieldcreate,field:o}),o}
/**
   * Deletes a field on the given z-index and zero based page index.
   * @param pgNum: number, Zero based page index the field is located on.
   * @param fieldIndex: number, Zero based z-index of the field.
   */,deleteFromPage:C,getFromPage:E,insertForm:
/**
   * Inserts a form from the source URL and index into the given page index.
   * @param sourceUrl: string, Url of the desired form.
   * @param sourceIndex: number, Zero based page index the form is copied from.
   * @param index: number, Zero based page index the form is to be inserted into.
   * @param callback: function, Function to be called when the operation has completed.
   */
function(e,t,n,o){v(e,t,n),"function"==typeof o&&o(),s.trigger({type:g.forminserted,srcurl:e,srcindex:t,index:n}),s.trigger(g.formschanged)}
/**
   * Removes a form from the given page index.
   * @param index: number, Zero based page index of the form to be removed.
   * @param callback: function, Function to be called when the operation has completed.
   */,moveForm:
/**
   * Moves a form from one page index to another.
   * @param sourceIndex: number, Zero based page index of the form to be moved.
   * @param destIndex: number, Destination zero based page index.
   * @param callback: function, Function to be called when the operation has completed.
   */
function(e,t,n){b(e,t),"function"==typeof n&&n(),s.trigger({type:g.formmoved,srcindex:e,destindex:t}),s.trigger(g.formschanged)},removeForm:function(e,t){y(e),"function"==typeof t&&t(),s.trigger({type:g.formremoved,index:e}),s.trigger(g.formschanged)}}};if(e.__exposedApi=a.forms,!t)return null;var l=n._pages,u=null,c={fields:[],multiviewFields:{},activepage:null,activefield:null,highlighted:!0,readonly:!!o,getZoom:r.getPageScale,getViewerTransform:r.getViewerTransform,getPageRotation:r.getPageRotation,dpi:96},d={},h=!1,f=!1,p=null,g={click:"fieldclicked",dblclick:"fielddoubleclicked",touchstart:"fieldtouchstart",interactend:"fieldtouchend",touchmove:"fieldtouchmove",pinchmove:"fieldpinchresize",rightclick:"fieldrightclicked",mousedown:"fieldmousedown",mousedownleft:"fieldmousedownleft",mousedownright:"fieldmousedownright",mousemove:"fieldmousemove",mouseout:"fieldmouseout",mouseup:"fieldmouseup",mouseover:"fieldmouseover",create:"fieldcreated",load:"fieldloaded",moved:"fieldmoved",resized:"fieldresized",repaint:"fieldrepainted"};function m(){}function v(e,t,n){if(null==e&&"number"==typeof t&&(t=y(t)),t=t||[],null==n?n=c.fields.length:n<0&&(n=0),n>c.fields.length){var o=c.fields.length;c.fields[n]=t;for(var i=o;i<c.fields.length;++i)c.fields[i]||(c.fields[i]=[])}else c.fields.splice(n,0,t)}function y(e){return e<c.fields.length?c.fields.splice(e,1)[0]:null}function b(e,t){v(null,y(e),t)}function x(e,t){if(e<c.fields.length&&c.fields[e]&&c.fields[e].length){var n;w(t);for(var o=0;o<c.fields[e].length;o++)(n=c.fields[e][o]).setPageIndex(e),n.repaint(t._form)}}function w(e){e._form&&e._form._fields&&(e._form._fields.length=0,e._form.empty())}function _(e){x(e.index,e.page)}function z(){null!=p.field&&p.field.getObject()[0].blur()}function P(e){e.page._form&&w(e.page)}function T(e){c.activepage=e}function D(e){k(e.page)}function k(e){if(e&&c.fields.length&&c.fields[e._index])for(var t=0;t<c.fields[e._index].length;t++)c.fields[e._index][t].updateView()}function C(e,t){var n,o,i;n=t,o=e,i=c.fields[o].splice(n,1)[0],c.activepage&&c.activepage._form._fields.splice(n,1),i.dispose(),s.trigger({type:"fielddeleted",page:o,index:n})}
/**
   * Gets an array of field data objects located on the given zero based page index.
   * @param pageNum: number, Zero based page index the fields are located on.
   * @returns array: Array of field data objects on the given page index. 
   */function E(e){var t=[];if(0===c.fields.length||void 0===c.fields[e])return t;for(var n=0;n<c.fields[e].length;n++)t[n]=c.fields[e][n].getClonedData();return t}function M(){if(0<c.fields.length){if(c.fields.length=0,l)for(var e=0;e<l.length;e++)w(l[e]);s.trigger({type:"formscleared"})}}function F(e,t,n){var o={};e&&e.type&&d[e.type]&&Kt.extend(!0,o,d[e.type]),Kt.extend(!0,o,e);var i=new U(o,c,t);return void 0===c.fields[t]&&(c.fields[t]=[]),c.fields[t].push(i),r.redrawVisiblePages(),"function"==typeof n&&n(i),H(i),i}i.dispose=function(){u=l=r=s=i=null,c.fields.length=0,c.multiviewFields=null,c.activepage=null,c.activefield=null},i.addFormLayer=function(t){if(t instanceof Kt){t._form=r.createDiv(t),t._form.css({position:"absolute",zIndex:4}),t._form._fields=[],t._form._page=t;var e=function(){T(t)};return t.on("mousedown",e),en.Features.Touch&&t.on("touchstart",e),t.on({pageresize:function(e){e.page=t,k(e.page)},pagezoom:function(e){e.page=t,function(e){for(var t in e.page._form._fields)e.page._form._fields.hasOwnProperty(t)&&e.page._form._fields[t].zoom(r.getPageScale(e.index))}(e)}}),!0}return!1},i.insertForm=v,i.removeForm=y,i.moveForm=b,i.removeFormLayer=function(e){return e instanceof Kt&&(e._form&&(e._form._fields=null,e._form._page=null,e._form=null),!0)},i.showLayer=x,i.__exposedApi=a.forms,i.__getDebugInfo=function(){var e={};return Kt.extend(!0,e,{data:c,pages:l,viewport:u}),e},i.__linkForms=function(e){e&&(e._fields?Array.isArray(e._fields)&&(c.fields=e._fields):e._fields=c.fields)},i.clear=M,i.createField=F,i.deleteFieldOnPage=C,i.getFieldsFromPage=E,i.setViewPort=function(e){e&&(e instanceof Kt||(e=Kt(e)),u=e)},i.drawField=function(e,t,n){return h?null:(e&&e.type&&d[e.type]&&Kt.extend(!0,e,d[e.type]),c.activefield&&null===c.activefield.getObject()&&I(),function(){if(!f){u.on("mousedown",A),en.Features.Touch&&u.on("touchstart",A);for(var e=0;e<l.length;e++)l[e]._draw.toFront();f=!0}}(),c.activefield=new U(e,c,c.activepage?c.activepage._index:void 0),c.activefield.bind({drawn:O,cancelled:I}),"function"==typeof t&&(S=t),c.activefield)};var S=function(){};function A(e){h=!0,u.off("mousedown",A),en.Features.Touch&&u.off("touchstart",A),s.trigger({type:"fielddrawstart",field:c.activefield.getClonedData()}),c.activefield._pageindex=c.activepage._index,c.activefield.startDraw(e,c.activepage._form,{})}function O(){var e,t,n;e=c.activefield,t=c.activepage,n=t?t._index:0,c.fields[n]?c.fields[n].push(e):c.fields[n]=[e],c.activefield.unbind({}),H(c.activefield),S({field:e}),S=function(){},s.trigger({type:g.fieldcreate,field:e.getClonedData()}),V()}function I(){c.activefield.dispose(),c.activefield=null,h&&V(!0)}function V(e){h=!1,function(){if(f){u.off("mousedown",A),en.Features.Touch&&u.off("touchstart",A);for(var e=0;e<l.length;e++)l[e]._draw.reset();f=!1}}(),s.trigger({type:"fielddrawend",field:e?null:c.activefield.getClonedData(),cancelled:!!e})}function L(e){p=e,s.bind("scroll",z)}function j(){s.unbind("scroll",z)}function H(t){function e(e){s.trigger({type:g[e.type],field:t.getClonedData()})}t.bind({interactstart:function(){c.activepage&&c.activepage._form===t.getObject().form||T(t.getObject().form._page),c.activefield=t},moved:e,resized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mousemove:e,mouseout:e,mouseup:e,mouseover:e,repaint:e,fieldfocusin:L,fieldfocusout:j})}function R(e,t,n,o,i){var r={type:"formdata",serverurl:e,query:"?atalaformdata=",method:"GET",data:{atala_formurl:t,atala_docurl:n=n||s.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{fields:[],length:i,error:void 0}};for(var a in r.data)r.data.hasOwnProperty(a)&&null===r.data[a]&&(r.data[a]=void 0);return r}function B(t,e,n){function o(e){void 0!==t.info.docIndex&&(e.offset=t.info.docIndex),N(e),"function"==typeof n&&n.call(void 0,e.error,e)}"function"==typeof e&&(n=e,e=!1),e||M(),r.makeHandlerRequest(t,o,o)}function N(e){if(e){var t={type:"formsloaded",forms:e.forms,customData:e.customData};if(e.dpi&&(c.dpi=e.dpi),e.forms&&e.forms.fields)for(var n=0;n<e.forms.fields.length;n++){e.offset=e.offset||0;var o=e.offset+n;c.fields[o]&&0<c.fields[o].length?c.fields[o].length=0:c.fields[o]=[];var i=e.forms.fields[n];if(i&&0<i.length)for(var r=0;r<i.length;r++)c.fields[o][r]=new U(i[r],c,o),a=c.fields[o][r],l=a.getParentName(),0<=a.getName().indexOf("<~Atala_Unnamed_")&&(c.multiviewFields.hasOwnProperty(l)?c.multiviewFields[l].push(a):c.multiviewFields[l]=[a]),s.trigger({type:g.load,field:c.fields[o][r].getClonedData()}),H(c.fields[o][r])}else e.error&&(t.error=e.error);s.trigger(t)}var a,l}i.stringifyChanges=function(){var e={},t=!1;for(var n in c.fields)if(c.fields.hasOwnProperty(n)&&0<c.fields[n].length)for(var o in e[n]=[],c.fields[n])c.fields[n].hasOwnProperty(o)&&(t=!0,e[n][o]=c.fields[n][o].get());return t?JSON.stringify({forms:{fields:e}}):void 0},i.createHandlerRequest=R,i.makeHandlerRequest=B,i.loadFormUrl=function(e,t,n,o,i,r,a){var l=Array.prototype.slice.call(arguments);"function"!=typeof(a=l.pop())&&l.push(a),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),r=l.shift();var s=R(e,t,n,o,i);void 0!==r&&(s.info.docIndex=r),B(s,0<=o&&1<=i,a)},i.loadForms=N,"Atalasoft.Controls.WebDocumentViewer"===s.typeOf&&Kt.extend(s,a),s.bind({pagerecycled:P,pageshown:_,zoomchanged:m,pagerotated:D})};
/**
 * WebDocumentViewer PDF Forms API.
 * @class
 * @inner
 * @name FormController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 * @ignore
 */function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(j=L||(L={})).Button="atala-upload-button",j.DragAndDrop="atala-upload-drag-and-drop",j.DragAndDropImage="atala-upload-drag-and-drop-image",j.FileProgress="atala-upload-progress-file",j.FileProgressImage="atala-upload-progress-file-image",j.MultipleFilesHeaderRow="atala-upload-files-header-row",j.MultipleFilesHeader="atala-upload-files-header",j.TextElement="atala-upload-text-element",j.Control="atala-upload-control",j.AreaContainer="atala-upload-flex-area",j.AreaNonTable="atala-upload-flex-area-non-table",j.AreaSingleFile="atala-upload-single-file",j.AreaSingleFileNoDragDrop="atala-upload-single-file-no-drag-drop",j.AreaMultipleFile="atala-upload-multiple-files",j.AreaMultipleFileDragDrop="atala-upload-multiple-files-drag-and-drop",j.ButtonsContainer="atala-upload-flex-buttons",j.Buttons="atala-upload-buttons",j.CloseButton="atala-upload-close-button",j.CancelButton="atala-upload-cancel-button",j.OkButton="atala-upload-ok-button",j.AddButton="atala-upload-add-button",j.MultipleFilesHeaderName="atala-upload-files-header-name",j.MultipleFilesHeaderSize="atala-upload-files-header-size",j.MultipleFilesHeaderStatus="atala-upload-files-header-status",j.MultipleFilesRow="atala-upload-files-row",j.MultipleFilesCell="atala-upload-files-cell",j.MultipleFilesCellName="atala-upload-files-cell-name",j.MultipleFilesCellSize="atala-upload-files-cell-size",j.MultipleFilesCellStatus="atala-upload-files-cell-status",j.MultipleFilesCellCancelButton="atala-upload-files-cancel-button";var W=function(){function e(e,t){q(this,"cancel",!1),q(this,"progressCounter",0),q(this,"filename",void 0),q(this,"statusText",void 0),this.filename=e,this.statusText=t}var t=e.prototype;return t.handler=function(e){this.isUploadStartEventData(e)?e.fileinfo.filename===this.filename&&this.cancel&&(e.fileinfo.cancel=!0):e.uploadinfo.filename===this.filename&&(this.cancel&&(e.uploadinfo.cancel=!0),this.progressCounter%5==0&&this.statusText.text("Uploading ("+(e.uploadinfo.uploadedbytes/e.uploadinfo.totalbytes*100).toFixed(0)+" %)"),this.progressCounter++)},t.isUploadStartEventData=function(e){return void 0!==e.fileinfo},e}();function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=function(){function e(e,t){Z(this,"enterLeaveLevel",0),Z(this,"dragEffect",void 0),Z(this,"control",void 0),Z(this,"allowMultipleFiles",void 0),this.control=e,this.allowMultipleFiles=t,this.dragEffect=""}var t=e.prototype;return t.onDragEnter=function(e){""===this.dragEffect&&0===this.enterLeaveLevel&&(this.dragEffect=this.calcDragEffect(e.dataTransfer)),this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect),this.enterLeaveLevel++},t.onDrop=function(e){"none"!==this.dragEffect&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer)),this.resetState()},t.onDragLeave=function(){this.enterLeaveLevel--,0===this.enterLeaveLevel&&(this.dragEffect="")},t.onDragOver=function(e){this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect)},t.calcDragEffect=function(e){var t=this;return this.control.uploadRequested||!this.isDataTransferPresented(e)?"none":(en.Firefox?2===e.types.length&&e.types.some(function(e){return function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,t),"Files"===e}.bind(this)):1===e.types.length&&"Files"===e.types[0])&&(this.allowMultipleFiles||1===e.items.length)?"copy":"none"},t.processDragAndDropEvent=function(e){e.preventDefault();var t=e.originalEvent;if(t instanceof DragEvent)switch(t.type){case"dragenter":this.onDragEnter(t);break;case"dragover":this.onDragOver(t);break;case"drop":this.onDrop(t);break;case"dragleave":this.onDragLeave()}},t.getFilesFromDataTransfer=function(e){var t=[];if(!this.isDataTransferPresented(e))return t;for(var n=0;n<e.files.length;n++)t.push(e.files[n]);return t},t.resetState=function(){this.dragEffect="",this.enterLeaveLevel=0},t.isDataTransferPresented=function(e){return null!==e},e}(),ee=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),(t.prototype.constructor=t).__proto__=n;var i=o.prototype;return i.onDragEnter=function(){},i.onDragOver=function(){},i.onDragLeave=function(){},i.onDrop=function(e){!this.control.uploadRequested&&this.isDataTransferPresented(e.dataTransfer)&&1===e.dataTransfer.types.length&&"Files"===e.dataTransfer.types[0]&&(this.allowMultipleFiles||1===e.dataTransfer.files.length)&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer))},o}(Y);function te(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function ne(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ie=function(){function e(e){var o=this;oe(this,"control",void 0),oe(this,"openFileDlgBtn",void 0),oe(this,"openFileForm",void 0),oe(this,"callbackToManipulateParentUi",function(){te(this,o)}.bind(this)),oe(this,"allowedDragAndDrop",void 0),oe(this,"uiShouldBeClosedAfterUpload",void 0),oe(this,"isVisible",!1),oe(this,"progressHandlers",[]),oe(this,"uploadRequested",!1),oe(this,"reinitNeeded",!1),oe(this,"processFileFinishedUpload",function(){te(this,o)}.bind(this)),oe(this,"controller",void 0),oe(this,"openFileDlgChangeHandler",function(){te(this,o);var e=this.openFileDlgBtn[0].files;this.processFiles(this.convertFileListToFilesArray(e)),this.openFileForm[0].reset()}.bind(this)),oe(this,"handleUploadFinished",function(){te(this,o),this.uiShouldBeClosedAfterUpload?this.controller.finish(!1):(this.control.find("."+L.CancelButton).css("display","none"),this.control.find("."+L.CloseButton).css("display",""))}.bind(this)),oe(this,"processProgressHandlers",function(t){var n=this;te(this,o),this.progressHandlers.forEach(function(e){return te(this,n),e.handler(t)}.bind(this))}.bind(this)),this.controller=e;var t=Kt("<div/>").addClass(L.Control).css("flex-flow","column").css("height","100%").css("width","100%").addClass("ui-widget"),n=Kt("<div/>").addClass(L.AreaContainer).css("display","flex").css("flex-flow","column").css("flex","1 1 auto").css("align-content","center").css("overflow","auto"),i=Kt("<div/>").addClass(L.ButtonsContainer).css("flex","0 1 auto");t.append(n),t.append(i),this.control=t,this.openFileDlgBtn=Kt("<input/>").attr("type","file").change(this.openFileDlgChangeHandler),this.openFileForm=Kt("<form/>").css("display","none"),this.openFileDlgBtn.appendTo(this.openFileForm),this.openFileForm.appendTo(this.control),this.allowedDragAndDrop=!1,this.uiShouldBeClosedAfterUpload=!1}var t,n,o,i=e.prototype;return i.init=function(e,t){var n=this;this.openFileDlgBtn.attr("accept",t.allowedFileTypes);var o=Kt(this.control.children("."+L.ButtonsContainer));if(this.initArea(t),this.initButtons(o,t),this.control.css("display","none"),this.control.appendTo(e),this.allowedDragAndDrop=t.allowDragDrop,this.uiShouldBeClosedAfterUpload=t.closeUiAfterUpload,this.allowedDragAndDrop){var i=en.Explorer?new ee(this,t.allowMultipleFiles):new Y(this,t.allowMultipleFiles);this.area.on("dragenter",function(e){return te(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragover",function(e){return te(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("drop",function(e){return te(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragleave",function(e){return te(this,n),i.processDragAndDropEvent(e)}.bind(this))}},i.activate=function(e){this.callbackToManipulateParentUi=e,this.allowedDragAndDrop?(this.callbackToManipulateParentUi(!1),this.show()):this.openFileDlgBtn.click()},i.close=function(){this.unbindEvents(),this.hide()},i.getControlDom=function(){return this.control},i.initButtons=function(e,t){var n=this,o=Kt("<div/>").addClass(L.Buttons).css("float","right"),i=Kt("<button/>").addClass(L.Button).addClass(L.AddButton).button({label:"Add..."}).click(function(e){te(this,n),e.preventDefault(),this.openFileDlgBtn.click()}.bind(this)),r=Kt("<button/>").addClass(L.Button).addClass(L.CloseButton).button({label:"Close"}).css("display","none").click(function(e){te(this,n),e.preventDefault(),this.close()}.bind(this)),a=Kt("<button/>").addClass(L.Button).addClass(L.CancelButton).button({label:"Cancel"}).click(function(e){te(this,n),e.preventDefault(),this.controller.abort(),this.close()}.bind(this));(t.allowMultipleFiles||t.allowDragDrop)&&o.prepend(i),o.append(a),t.closeUiAfterUpload||o.append(r),o.appendTo(e)},i.initAreaImpl=function(e,t,n){var o=Kt("<div/>").addClass(e).addClass(L.TextElement);return this.initAreaContents(o,t,n),o},i.initAreaContents=function(e,t,n){var o=Kt("<div/>").addClass(t?L.FileProgressImage:L.DragAndDropImage),i=Kt("<span/>").addClass(t?L.FileProgress:L.DragAndDrop).text(n);e.append(o).append(i)},i.reinitArea=function(e,t){var n=this.area.children().first();return n.children().remove(),this.initAreaContents(n,e,t),n},i.processFiles=function(e){if(!this.uploadRequested)if(0<e.length){var t=this.filterFiles(e);0<t.length&&(this.allowedDragAndDrop||(this.callbackToManipulateParentUi(!1),this.show()),this.addFilesToUi(t))}else this.allowedDragAndDrop||this.controller.abort()},i.filterFiles=function(e,t){for(var n=this.controller.filterFiles(e,void 0===t?[]:t),o=[],i=0;i<e.length;i++)n[0]===e[i].name?n.shift():o.push(e[i]);return o},i.bindEvents=function(){this.controller.bind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.unbindEvents=function(){this.controller.unbind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.show=function(){this.control.css("display","flex"),this.controlParent.children().first().css("display","none"),this.isVisible=!0},i.hide=function(){var e=this;this.control.css("display","none"),this.controlParent.children().first().css("display","block"),this.isVisible=!1,this.progressHandlers.length=0,this.callbackToManipulateParentUi(!0),this.callbackToManipulateParentUi=function(){te(this,e)}.bind(this),this.uploadRequested=!1,this.reinitNeeded=this.allowedDragAndDrop,this.switchButtonEnabledState(L.AddButton,!0),this.uiShouldBeClosedAfterUpload||(this.control.find("."+L.CloseButton).css("display","none"),this.control.find("."+L.CancelButton).css("display",""))},i.convertSize=function(e){for(var t=e,n=0;1024<t;)t/=1024,n++;return t.toFixed(2)+" "+["B","KB","MB","GB","TB"][n]},i.addProgressHandler=function(e,t){this.progressHandlers.push(new W(e,t))},i.removeProgressHandler=function(t){var n=this,e=this.progressHandlers.filter(function(e){return te(this,n),e.filename===t}.bind(this))[0];null!==e&&this.progressHandlers.splice(this.progressHandlers.indexOf(e),1)},i.cancelUpload=function(t){var n=this,e=this.progressHandlers.filter(function(e){return te(this,n),e.filename===t}.bind(this))[0];null!=e&&(e.cancel=!0)},i.convertFileListToFilesArray=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},i.switchButtonEnabledState=function(e,t){var n=t?"enable":"disable";this.control.find("."+e).button(n)},i.isFileSuccessEventData=function(e){return void 0!==e.filepath},t=e,(n=[{key:"controlParent",get:function(){return this.control.parent()}},{key:"area",get:function(){return Kt(this.control.children("."+L.AreaContainer))}}])&&ne(t.prototype,n),o&&ne(t,o),e}();function re(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=function(r){var e,t,n,o,i;function l(e){var t,n=this;return se(ae(t=r.call(this,e)||this),"files",[]),se(ae(t),"table",void 0),se(ae(t),"uploadElems",[]),t.processFileFinishedUpload=function(e){re(this,n),t.isFileSuccessEventData(e)?t.markStatusFinished(e.filename,!0):t.markStatusFinished(e.errorinfo.filename,!1,e.errorinfo.canceled)}.bind(this),t}t=r,(e=l).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t,n=l,i=[{key:"rowTemplate",get:function(){return null===this.rowTemplateField&&(this.rowTemplateField=this.getFileRowTemplate()),this.rowTemplateField}}],(o=null)&&le(n.prototype,o),i&&le(n,i);var a=l.prototype;return a.init=function(e,t){r.prototype.init.call(this,e,t),this.openFileDlgBtn.attr("multiple",!0)},a.initArea=function(e){var t;e.allowDragDrop?((t=this.initAreaImpl(L.AreaMultipleFile,!1,"Drop files here")).addClass(L.AreaMultipleFileDragDrop),this.area.addClass(L.AreaNonTable)):(t=Kt("<div/>").addClass(L.AreaMultipleFile).addClass(L.TextElement),this.initFilesTable(t)),t.appendTo(this.area)},a.initFilesTable=function(e){this.area.removeClass(L.AreaNonTable);var t=Kt("<div/>").addClass(L.MultipleFilesHeaderRow).addClass("ui-widget-header"),n=Kt("<div/>").addClass(L.MultipleFilesHeaderName).addClass(L.MultipleFilesHeader).text("Name"),o=Kt("<div/>").addClass(L.MultipleFilesHeaderSize).addClass(L.MultipleFilesHeader).text("Size"),i=Kt("<div/>").addClass(L.MultipleFilesHeaderStatus).addClass(L.MultipleFilesHeader).text("Status");t.append(n).append(o).append(i).appendTo(e),this.table=e},a.initButtons=function(e,t){var n=this;r.prototype.initButtons.call(this,e,t);var o=e.children().first(),i=Kt("<button/>").addClass(L.OkButton).button({label:"OK"}).addClass(L.Button).click(function(e){re(this,n),e.preventDefault(),this.bindEvents(),this.uploadRequested=!0,this.switchButtonEnabledState(L.AddButton,!1),this.switchButtonEnabledState(L.OkButton,!1),this.controller.uploadFiles(this.files)}.bind(this));o.children("."+L.AddButton).first().after(i)},a.processFiles=function(e){var t=this;if(this.isVisible){if(this.uploadRequested)return;if(0<e.length){var n=this.filterFiles(e,this.files.map(function(e){return re(this,t),e.name}.bind(this)));0<n.length&&(this.switchButtonEnabledState(L.OkButton,!0),this.addFilesToUi(n))}}else r.prototype.processFiles.call(this,e)},a.addFilesToUi=function(e){var t,n;if(this.allowedDragAndDrop&&void 0===this.table){var o=this.area.children().first();o.children().remove(),o.removeClass(L.AreaMultipleFileDragDrop),this.initFilesTable(o)}for(var i=[],r=0;r<e.length;r++)i.push(this.addRowToFilesTable(e[r]));(t=this.files).push.apply(t,e),(n=this.table).append.apply(n,i)},a.addRowToFilesTable=function(t){var n=this,o=t.name,i=l.rowTemplate.clone();Kt("."+L.MultipleFilesCellName,i).text(o),Kt("."+L.MultipleFilesCellSize,i).text(this.convertSize(t.size));var r=Kt("."+L.FileProgress,i),a=Kt("."+L.MultipleFilesCellCancelButton,i).click(function(e){re(this,n),e.preventDefault(),this.uploadRequested?(this.cancelUpload(o),a.css("display","none"),r.text("Canceled")):(this.files.splice(this.files.indexOf(t,0),1),this.removeProgressHandler(o),i.remove(),0===this.files.length&&(this.controller.abort(),this.close()))}.bind(this));return this.addProgressHandler(t.name,r),this.addFinishHandler(t.name,r,a),i},a.show=function(){this.switchButtonEnabledState(L.OkButton,!this.allowedDragAndDrop),this.reinitNeeded&&(this.reinitArea(!1,"Drop files here").addClass(L.AreaMultipleFileDragDrop),this.area.addClass(L.AreaNonTable),this.table=void 0),r.prototype.show.call(this)},a.hide=function(){r.prototype.hide.call(this),this.files.length=0,void(this.uploadElems.length=0)!==this.table&&this.table.children(".atala-upload-files-row").remove()},a.addFinishHandler=function(e,t,n){this.uploadElems.push({filename:e,statusTextElem:t,cancelUploadBtn:n})},a.markStatusFinished=function(t,e,n){var o=this;void 0===n&&(n=!1);var i=this.uploadElems.filter(function(e){return re(this,o),e.filename===t}.bind(this))[0];null!=i&&(i.cancelUploadBtn.css("display","none"),e?i.statusTextElem.text("Finished"):n?i.statusTextElem.text("Canceled"):i.statusTextElem.text("Error"))},l.getFileRowTemplate=function(){var e=Kt('<div class="'+L.MultipleFilesRow+'">\n<div class="'+L.MultipleFilesCell+" "+L.MultipleFilesCellName+'"/>\n<div class="'+L.MultipleFilesCell+" "+L.MultipleFilesCellSize+'"/>\n<div class="'+L.MultipleFilesCell+" "+L.MultipleFilesCellStatus+'">\n<span class="'+L.FileProgress+'">Upload pending</span>\n<button title="Removes file from upload queue" class="atala-ui-button '+L.MultipleFilesCellCancelButton+'"/>\n</div>\n</div>');return Kt("."+L.MultipleFilesCellCancelButton,e).button({icon:"atala-ui-icon atala-ui-icon-upload-cancel",showLabel:!1}),e},l}(ie);function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}se(ue,"rowTemplateField",null);var he,fe,pe=function(o){var e,t;function n(e){var t,n=this;return de(ce(t=o.call(this,e)||this),"fileName",""),de(ce(t),"uploadProgressSpan",null),de(ce(t),"uploadProgressImage",null),t.processFileFinishedUpload=function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,n),t.isFileSuccessEventData(e)?t.uploadProgressSpan.text("Upload finished"):e.errorinfo.canceled?t.uploadProgressSpan.text("Upload canceled"):t.uploadProgressSpan.text("An error occurred during upload"),t.uploadProgressImage.css("display","none")}.bind(this),t}t=o,(e=n).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t;var i=n.prototype;return i.initArea=function(e){var t=L.AreaSingleFile,n="Uploading...";e.allowDragDrop&&(n="Drop file here");var o=this.initAreaImpl(t,!e.allowDragDrop,n);e.allowDragDrop||(this.uploadProgressSpan=o.children("."+L.FileProgress).first(),this.uploadProgressImage=o.children("."+L.FileProgressImage).first(),o.addClass(L.AreaSingleFileNoDragDrop)),o.appendTo(this.area),this.area.addClass(L.AreaNonTable)},i.addFilesToUi=function(e){this.allowedDragAndDrop&&this.reinitArea(!0,"Uploading..."),this.uploadRequested=!0,this.fileName=e[0].name,this.addProgressHandler(this.fileName,this.uploadProgressSpan),this.bindEvents(),this.switchButtonEnabledState(L.AddButton,!1),this.controller.uploadFile(e[0])},i.show=function(){this.reinitNeeded&&this.reinitArea(!1,"Drop file here"),o.prototype.show.call(this)},i.hide=function(){o.prototype.hide.call(this),null!==this.uploadProgressImage&&this.uploadProgressImage.css("display","")},i.reinitArea=function(e,t){var n=o.prototype.reinitArea.call(this,e,t);e?(this.uploadProgressSpan=n.children("."+L.FileProgress).first(),this.uploadProgressImage=n.children("."+L.FileProgressImage).first(),n.addClass(L.AreaSingleFileNoDragDrop)):(n.removeClass(L.AreaSingleFileNoDragDrop),this.uploadProgressSpan=null,this.uploadProgressImage=null)},n}(ie);function ge(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function me(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(fe=he||(he={}))[fe.Idle=0]="Idle",fe[fe.Canceling=1]="Canceling",fe[fe.Uploading=2]="Uploading";var vn=function(){function e(e,t){var l=this;ve(this,"config",void 0),ve(this,"trigger",void 0),ve(this,"bind",void 0),ve(this,"unbind",void 0),ve(this,"sendRequest",void 0),ve(this,"uploadControlField",null),ve(this,"state",he.Idle),ve(this,"filesToUpload",[]),ve(this,"uploadingFiles",[]),ve(this,"hasErrors",!1),ve(this,"wasCanceled",!1),ve(this,"uploadCallback",null),ve(this,"abort",function(){ge(this,l),this.config.enabled&&(this.state===he.Uploading&&(this.hasErrors=!0,this.wasCanceled=!0,this.state=he.Canceling,this.abortActiveRequests()),this.finish(!0))}.bind(this)),ve(this,"finish",function(e){ge(this,l),(this.config.closeUiAfterUpload||e)&&this.uploadControl.close()}.bind(this)),ve(this,"onFileUploadStarted",function(e,t){if(ge(this,l),this.state===he.Canceling)return!1;var n={type:"fileuploadstarted",fileinfo:{filename:e,size:t,cancel:!1}};return this.trigger(n),!n.fileinfo.cancel}.bind(this)),ve(this,"onFileUploadFinished",function(e,t){if(ge(this,l),!e.success||e.canceled||void 0!==e.error){var n={type:"fileuploaderror",errorinfo:{filename:t,canceled:e.canceled,customData:e.customData}};this.hasErrors=!0,n.errorinfo.canceled?this.wasCanceled=!0:n.errorinfo.error=e.error,this.trigger(n)}else this.trigger({type:"fileuploadfinished",filepath:e.filename,filename:t,customData:e.customData});this.tryToFinishUpload(t)}.bind(this)),ve(this,"onFileUploadFailed",function(e,t,n){ge(this,l);var o={type:"fileuploaderror",errorinfo:{filename:n,canceled:"abort"===e}};this.hasErrors=!0,o.errorinfo.canceled?this.wasCanceled=!0:(o.errorinfo.error=e,t&&(o.errorinfo.error+=": "+t)),this.trigger(o),this.tryToFinishUpload(n)}.bind(this)),ve(this,"onUploadStarted",function(){ge(this,l);var e={type:"uploadstarted",info:{cancel:!1}};return this.trigger(e),!e.info.cancel}.bind(this)),ve(this,"onUploadFinished",function(){ge(this,l);var e={type:"uploadfinished",canceled:this.wasCanceled,success:!this.hasErrors};this.trigger(e)}.bind(this)),ve(this,"onFileUploading",function(t,e,n){var o=this;if(ge(this,l),this.state===he.Canceling)return!1;var i=this.uploadingFiles.filter(function(e){return ge(this,o),e.filename===t}.bind(this));if(0===i.length||1<i.length)return!0;var r=i[0];if(r.canceled)return!0;var a={type:"fileuploading",uploadinfo:{filename:t,uploadedbytes:e,totalbytes:n,cancel:!1}};return this.trigger(a),r.canceled=a.uploadinfo.cancel,!a.uploadinfo.cancel}.bind(this)),this.trigger=e.trigger,this.sendRequest=t.makeHandlerRequest,this.bind=e.bind,this.unbind=e.unbind;var n=e.config;this.config={serverUrl:e.config.serverurl,enabled:!1!==n.upload.enabled,allowMultipleFiles:!!n.upload.allowmultiplefiles,allowedFileTypes:n.upload.allowedfiletypes,allowDragDrop:!!n.upload.allowdragdrop,allowedMaxFileSize:n.upload.allowedmaxfilesize,uploadPath:n.upload.uploadpath,uiParent:e.config.parent,filesUploadConcurrency:e.config.upload.filesuploadconcurrency,closeUiAfterUpload:e.config.upload.closeuiafterupload}}var t,n,o,i=e.prototype;return i.dispose=function(){},i.uploadWithUi=function(e){this.uploadControl.activate(e)},i.uploadFiles=function(e,t,n){var o=this;if(this.checkControllerState()&&this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkUploadPath(t)&&this.checkCallback(n)){if(this.state=he.Uploading,!this.fireUploadStartedEvent())return this.abort(),void this.tryToFinishUpload();for(e.forEach(function(e){return ge(this,o),this.uploadFileOnServer(t,e)}.bind(this));this.uploadingFiles.length<this.config.filesUploadConcurrency&&0<this.filesToUpload.length;)this.startFileUpload(this.filesToUpload.pop());"function"==typeof n&&(this.uploadCallback=n)}},i.uploadFile=function(e,t,n){this.uploadFiles([e],t,n)},i.uploadFileOnServer=function(e,t){var n={atala_upath:this.config.uploadPath,atala_subpath:e},o=Kt.extend(!0,{},n,{atala_filename:t.name,atala_filetype:t.type}),i={type:"fileupload",serverurl:this.config.serverUrl,query:"?atalafileupload=",method:"POST",data:o,file:t,cancel:!1};this.filesToUpload.push(i)},i.startFileUpload=function(e){this.onFileUploadStarted(e.file.name,e.file.size)?this.uploadingFiles.push({filename:e.file.name,canceled:!1,jqxhr:this.sendRequest(e,this.onFileUploadFinished,this.onFileUploadFailed,this.onFileUploading)}):this.onFileUploadFailed("abort","",e.file.name)},i.fireUploadStartedEvent=function(){return this.onUploadStarted()},i.checkControllerState=function(){return!(this.state===he.Uploading||this.state===he.Canceling&&0<this.uploadingFiles.length)||(this.throwError("checkControllerState","Web Document Viewer already performs an upload operation and can start the another one. Please try again later"),!1)},i.checkUploadPath=function(e){return!e||"string"==typeof e||(this.throwError("checkUploadPath","uploadpath object '"+e+"' is not a string. Please check your input parameters and try again."),!1)},i.checkIfUploadDisabled=function(){return!!this.config.enabled||(this.throwError("checkUploadEnabled","Upload is not enabled in this Web Document Viewer instance. Please check the viewer configuration and try again."),!1)},i.checkFilesToUpload=function(e){if(!Array.isArray(e))return this.throwError("checkFilesToUpload","The parameter is not an array. Please check your input parameters."),!1;for(var t=0;t<e.length;t++){var n=e[t];if(!(n instanceof File))return this.throwError("checkFilesToUpload","An object "+n+" doesn't implement File interface object. Please check your input parameters and try again."),!1}return!0},i.checkAlreadyAddedFiles=function(e){if(!e)return!0;if(!Array.isArray(e))return this.throwError("checkAlreadyAddedFiles","The parameter is not an array. Please check your input data."),!1;for(var t=0;t<e.length;t++){var n=e[t];if("string"!=typeof n)return this.throwError("checkAlreadyAddedFiles","An object "+n+" doesn't implement File interface object. Please check your input parameters."),!1}return!0},i.checkCallback=function(e){return!e||"function"==typeof e||(this.throwError("checkCallback","callback object '"+e+"' is not a function. Please check your input parameters and try again."),!1)},i.throwError=function(e,t){this.trigger({type:"throwerror",name:e,msg:t})},i.tryToFinishUpload=function(t){var n=this;t&&this.uploadingFiles.splice(this.uploadingFiles.indexOf(this.uploadingFiles.filter(function(e){return ge(this,n),e.filename===t}.bind(this))[0]),1),0<this.filesToUpload.length?this.startFileUpload(this.filesToUpload.pop()):0===this.uploadingFiles.length&&(this.state!==he.Idle&&(this.state=he.Idle,this.onUploadFinished(),null!==this.uploadCallback&&this.uploadCallback()),this.hasErrors=!1,this.wasCanceled=!1)},i.filterFilesPublic=function(e,t,n){var o,i=this,r=[];this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkAlreadyAddedFiles(t)&&this.checkCallback(n)&&(o=t?this.filterFiles(e,t):this.filterFiles(e,[]),r=e.filter(function(t){var n=this;return ge(this,i),!o.some(function(e){return ge(this,n),e===t.name}.bind(this))}.bind(this)),"function"==typeof n&&n());return r},i.filterFiles=function(e,t){for(var n=this,o=[],i=this.config.allowedFileTypes.toLowerCase().split(","),r=t.map(function(e){return ge(this,n),e}.bind(this)),a=e.length,l=0;l<a;l++){var s=e[l],u=s.name,c=_.None;if(s.size>this.config.allowedMaxFileSize)o.push(u),c=_.Size;else{for(var d=!1,h=r.length,f=0;f<h;f++)if(r[f]===u){d=!0;break}if(d)o.push(u),c=_.Name;else{for(var p=u.split(".").pop(),g="."+(p?p.toLowerCase():""),m=s.type.toLowerCase(),v=!1,y=0;y<i.length;y++){var b=i[y];if(b===g||""===b.trim()){v=!0;break}var x=b.split("/"),w=m.split("/");if(2===x.length&&2===w.length&&x[0]===w[0]&&(x[1]===w[1]||"*"===x[1])){v=!0;break}}v||(o.push(u),c=_.Type)}}this.onFileAddedToUpload(s,c),r.push(u)}return o},i.abortActiveRequests=function(){var t=this;this.uploadingFiles.forEach(function(e){return ge(this,t),e.jqxhr.abort()}.bind(this))},i.onFileAddedToUpload=function(e,t){var n={type:"fileaddedtoupload",filename:e.name,success:0===t,reason:t};this.trigger(n)},i.getUploadControl=function(){return this.uploadControl.getControlDom()}
/**
   *
   * Creates a jQuery UI upload control.
   * @param {any} parent - parent object to append to.
   */,i.createUploadControl=function(e){var t;return(t=this.config.allowMultipleFiles?new ue(this):new pe(this)).init(e,this.config),t},t=e,(n=[{key:"uploadControl",get:function(){return null===this.uploadControlField&&(this.uploadControlField=this.createUploadControl(this.config.uiParent)),this.uploadControlField}}])&&me(t.prototype,n),o&&me(t,o),e}();function ye(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Document operations API.
 * @class
 * @name DocumentController
 * @inner
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var yn=function e(i,t,n){var o=this,d=i,h=t,a=n,r={document:{events:{
/**
         * Triggers when a page is added to the document.
         * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#pageinserted
         * @param {Object} e - Event arguments.
         * @param {string} e.srcuri - Source document identifier.
         * @param {number} e.srcindex - Index of the inserted page in the source document.
         * @param {number} e.index - Page insert index.
         */
pageinserted:null,
/** Triggers when a page is removed from the document.
         * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#pageremoved
         * @param {Object} e - Event arguments.
         * @param {number} e.index - Index of the removed page.
         */
pageremoved:null,
/**
         * Triggers when a page is moved within the same document.
         * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#pagemoved
         * @param {Object} e - Event arguments.
         * @param {number} e.shiftedsrcindex - Corrected initial page index. Represents an initial page index with all shifts and calculations during a batch operation. Can be useful, when {@link movePages} is called.
         * @param {number} e.srcindex - Initial page index.
         * @param {number} e.destindex - Destination page index.
         */
pagemoved:null,
/**
         * Triggers when the document is changed.
         * This event indicates document structure or internal state changes and causes visible pages repaint.
         * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#documentchanged
         */
documentchanged:null,
/**
         * Fired when document page has been rotated.
         * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#pagerotated
         * @param {Object} e - Event arguments
         * @param {number} e.index - Index of the rotated page.
         * @param {number} e.angle - Clockwise page rotation angle.
         */
pagerotated:null},
/**
       * Inserts a page at the destination index from the given source uri and index.
       * @param {string} [documenturl] - The identifier of the document which contains the page. If empty, `src` numeric value is considered as referencing currently opened document.
       * @param {number|string|DocumentPageReference} src - zero based index of the page in the source document. Can be passed as string representation of a number. Or page descriptor returned by the {@link Atalasoft.Controls.WebDocumentViewer~DocumentController#getPageReference|getPageReference}.
       * @param {number} destination - Index in the target document to insert the page.
       * @param {NotificationCallback} [callback] - function to execute when the operation has completed.
       *
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       *
       *
       * @example
       * <caption>Assuming we have two instances of the {@link Atalasoft.Controls.WebDocumentThumbnailer| WebDocumentThumbnailer} control
       * both having document opened. To copy first page of one control into first position of another
       * following code could be used. </caption>
       *
       * _thumb1.document.insertPage(null, _thumb2.document.getPageReference(0), 0);
       *
       * // this call will insert new page and correctly handle annotations and forms data, so new empty layers will be created.
       * // If annotations should be also coped from the source document, it could be done explicitly using following code
       *
       * var annotations = _thumb1.annotations.getFromPage(0);
       * for (var i = 0; i < annotations.length; i++) {
       * 	_thumb2.annotations.createOnPage(annotations[i], 0);
       * }
       */
insertPage:z,
/**
       * Inserts a page at the destination index from the given source uri and index.
       * @param {string} [documenturl] - The identifier of the document which contains the page. If empty, `src` numeric value is considered as referencing currently opened document.
       * @param {number[]|string[]|DocumentPageReference[]} src - zero based indices of the pages in the source document. Can be passed as string representation of numbers. Or page descriptors returned by the {@link Atalasoft.Controls.WebDocumentViewer~DocumentController#getPageReference|getPageReference}.
       * @param {number} destination - Index in the target document to insert the page.
       * @param {NotificationCallback} [callback] - function to execute when the operation has completed.
       *
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       *
       */
insertPages:P,
/**
       * Removes the page at the given index.
       * @param {number|string} index - Index of the page to remove. Can be passed as string representation of a number
       * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
removePage:T,
/**
       * Removes pages at given indices.
       * @param {number[]|string[]} indices - Indices of pages to remove. Can be passed as string representation of numbers
       * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
removePages:D,
/**
       * Moves a page from the source index to the destination index within single document.
       * @param {number|string} sourceIndex - Source index to get the page from. Can be passed as string representation of a number
       * @param {number|string} destinationIndex - Destination index to insert the page. Can be passed as string representation of a number
       * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
       *
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
movePage:k,
/**
       * Moves pages from the source indices to the destination index within single document.
       * @param {number[]|string[]} sourceIndices - Source indices to get pages from. Can be passed as string representation of numbers
       * @param {number|string} destinationIndex - Destination index to insert pages. Can be passed as string representation of a number
       * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
       *
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
movePages:C,
/**
       * Rotates the specified angle page to the specified angle.
       *
       * Note, that `angle` represents final rotation value that will be applied to the original page.			 *
       * @param {number|string} index - Index of the page to rotate. Can be passed as string representation of a number
       * @param {number|string} angle - Clockwise rotation angle in degrees. Can be passed as string representation of a number
       * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
       *
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       *
       * @example
       * <caption>If rotation should be applied to already rotated page, use {@link Atalasoft.Controls.WebDocumentViewer~DocumentController#getPageRotation| getPageRotation} to get current page rotation.</caption>
       * viewer.document.rotatePage(0, viewer.document.getPageRotation(0) + 90);
       */
rotatePage:E,
/**
       * Rotates specified angle pages to specified angles.
       *
       * Note, that `angles` represents final rotation values that will be applied to original pages.
       * @param {number[]|string[]} indices - Indices of pages to rotate.
       * @param {number|number[]|string|string[]} angles - Clockwise rotation angles in degrees. Can be passed as string representation of a number If angles is a number|string or an number[]|string[] with length 1,
       * then all pages will be rotated to this angle, otherwise each page will be rotated to the specified angle in array.
       * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
       *
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       *
       * @example
       * <caption>Rotate pages with indexes 0 and 3 on 90 degrees</caption>
       * viewer.document.rotatePages([0, 3], 90)
       *
       * @example
       * <caption>Rotate page with index 0 on 180 degrees and page with index 3 on 90 degrees</caption>
       * viewer.document.rotatePages([0, 3], [180, 90])
       */
rotatePages:M,
/**
       * Gets the rotation angle of the specified page.
       * @param {number} index - Index of the page to retrieve rotation angle.
       * @returns {number} Clockwise rotation angle of the specified page.
       *
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
getPageRotation:u,
/**
       * Document page descriptor.
       * @typedef {Object} DocumentPageReference
       * @property {string} uri - Identifier of the document containing the page.
       * @property {number} index - Index of the referenced page in current document.
       */
/**
       * Gets the page reference object for the specified page. This can be passed as a 'srcindex' parameter into document.insertPage method.
       * @param {number} index - Index of the page to get the reference.
       * @returns {DocumentPageReference}
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
getPageReference:_}};if(e.__exposedApi=r.document,!i)return null;var f={changes:[],mapping:null,count:0,inserted:0,info:{count:0,dpi:96,size:{width:0,height:0},vector:!1}},p={inserted:"pageinserted",removed:"pageremoved",moved:"pagemoved",changed:"documentchanged",rotated:"pagerotated"};function l(e){f.info=e.info,f.mapping=null,f.changes.length=0,f.count=0,f.inserted=0,f.length=0}o.dispose=function(){h=d=o=null};var g=null;function m(e,t,n){n?null===g?g={name:e,message:t}:g.message+="\r\n"+t:d.trigger({type:"throwerror",name:e,msg:t})}function v(){null==f.mapping&&function(){var e=Math.max(f.info.count,0);f.mapping=new Array(e);for(var t=0;t<e;++t)f.mapping[t]=y(t)}()}function s(e,t){v(),f.mapping[e]&&(f.mapping[e].viewerstate[t]||(f.mapping[e].viewerstate[t]={size:null,fitmultiplier:null}))}function y(e){return{index:e,viewerstate:{},pageref:null,angle:0,text:null}}function u(e){return v(),0<=e&&e<f.mapping.length?f.mapping[e].angle:0}function b(e,t,n){var o=t;e&&e!==i.config.documenturl&&(o.pageref={uri:e,index:t.index,mapsto:f.info.count+f.inserted}),f.count++,f.inserted++,f.mapping.splice(n,0,o)}function c(e){return f.count--,f.mapping.splice(e,1)[0]}function x(){}function w(){}function _(e){var t,n=(t=e,v(),0<=t&&t<f.mapping.length?null!==f.mapping[t].pageref?f.mapping[t].pageref:f.mapping[t].index:null);if(null!==n){if("object"==typeof n)return{uri:n.uri,index:n.index};if(Ue(n))return{uri:i.config.documenturl,index:n}}return n}function z(e,t,n,o){Array.isArray(t)?m("IncorrectIndex","Source index can not be an array."):P(e,[t],n,o)}function P(e,t,n,o){var i,r;if(v(),"string"==typeof e&&0<e.trim().length)g=null,i=A(t,Number.MAX_VALUE,!1,!0),r=!0,null!==g&&("IncorrectNumbers"===g.name?m("IncorrectIndices","When this methods has set srcUri, then srcIndices should be an array of numbers representing page indices from an external document. Please check your input parameters and try again.\r\n\tInner error: "+g.message):m(g.name,g.message));else{if(null!=e)return void m("IncorrectUri",'Uri has invalid value "'+e+'". It must be an uri to the source document or not set.');r=!1,i=function(e){var t=[],n=null,o=null;if(!Array.isArray(e))return m("IncorrectPageReferences","Objects "+e+" are not an array."),n;if(function(e){var t=this,n=[];return!!Array.isArray(e)&&(e.forEach(function(e){ye(this,t),null===Je(e)&&n.push(e)}.bind(this)),0===n.length)}(e)){o=new Array(e.length);for(var i=0;i<e.length;i++)o[i]=_(e[i])}for(var r=0;r<e.length;r++){var a=null!==o?o[r]:e[r];if("object"==typeof a&&null!==a&&"string"==typeof a.uri&&0!==a.uri.trim().length){var l=A([a.index],Number.MAX_VALUE);null!==l?a.index=l[0]:t.push(a)}else t.push(a)}return 1<t.length?m("IncorrectPageReferences",'Objects "'+t.join('", "')+'" are not correct page references.'):0<t.length?m("IncorrectPageReferences",'Object "'+t[0]+'" is not a correct page reference.'):n=null!==o?o:e,n}(t)}var a=F(n,!1);if(null!==i&&null!==a){h._state.batchoperation++;for(var l=0;l<i.length;l++){var s=r?e:i[l].uri,u=r?i[l]:i[l].index;l===i.length-1&&h._state.batchoperation--;var c=y(u);b(s,c,a),h._controllers.annotations&&h._controllers.annotations.insertLayer(null,null,a),h._controllers.forms&&h._controllers.forms.insertForm(null,null,a),f.changes.push({type:"insertpage",uri:s,src:c.index,dest:a}),d.trigger({type:p.inserted,srcuri:s,srcindex:u,destindex:a}),a++}"function"==typeof o&&o(),d.trigger(p.changed)}}function T(e,t){D([e],t)}function D(e,t){var n=this;v();var o=S(e,!0);null!==o&&(h._state.batchoperation++,o.sort(function(e,t){return ye(this,n),t-e}.bind(this)).forEach(function(e,t){ye(this,n),t===o.length-1&&h._state.batchoperation--,c(e),h._controllers.annotations&&h._controllers.annotations.removeLayer(e),h._controllers.forms&&h._controllers.forms.removeForm(e),f.changes.push({type:"removepage",index:e}),d.trigger({type:p.removed,index:e})}.bind(this)),"function"==typeof t&&t(),d.trigger(p.changed))}function k(e,t,n){C([e],t,n)}function C(e,t,n){v();var a=S(e,!0),l=F(t,!0);if(null!==a&&null!==l){var s=l,u=a[0]>l?1:-1;h._state.batchoperation++;for(var o=function(e){var n=this,o=e,i=a[o],t=0,r=0;t=i<l?-a.filter(function(e,t){return ye(this,n),t<o&&e<i&&e<l}.bind(this)).length:l<i?a.filter(function(e,t){return ye(this,n),t<o&&i<e}.bind(this)).length:u<0?-a.filter(function(e,t){return ye(this,n),t<o&&e<i&&e<l}.bind(this)).length:a.filter(function(e,t){return ye(this,n),t<o&&i<e}.bind(this)).length,0<e&&(t<0||i<l)&&(r=-1),s+=r,e===a.length-1&&h._state.batchoperation--,b(null,c(i+t),s),h._controllers.annotations&&h._controllers.annotations.moveLayer(i+t,s),h._controllers.forms&&h._controllers.forms.moveForm(i+t,s),f.changes.push({type:"movepage",src:i+t,dest:s}),d.trigger({type:p.moved,shiftedsrcindex:i+t,srcindex:i,destindex:s}),s++},i=0;i<a.length;i++)o(i);"function"==typeof n&&n(),d.trigger(p.changed)}}function E(e,t,n){Array.isArray(t)?m("rotatePage","angle "+t+" is array."):M([e],t,n)}function M(e,t,n){var i=this;v();var r=S(e),o="number"==typeof t||"string"==typeof t,a=function(e,t){var n=O(t?[e]:e);if(n)for(var o=0;o<n.length;o++){if(n[o]%90)return m("rotatePages","Angle must be a multiple of 90 degrees."),null;n[o]=n[o]%360}return n}(t,o);null!==r&&null!==a&&(o||r.length===a.length?(h._state.batchoperation++,r.forEach(function(e,t){ye(this,i);var n=1<a.length?a[t]:a[0];t===r.length-1&&h._state.batchoperation--;var o=function(e,t){f.mapping[e].angle=t;for(var n=null,o=0;o<h._pages.length;++o){var i=h._pages[o];if(i._index===e){n=i;break}}return n&&n._img&&(h.startDomManipulation(),h.adjustVisiblePages(!0,h.endDomManipulation)),n}(e,n);f.changes.push({type:"rotatepage",index:e,angle:n}),d.trigger({type:p.rotated,index:e,page:o,angle:n})}.bind(this)),"function"==typeof n&&n()):m("rotatePages","Indices array and angles array have different lengths."))}function F(e,t){var n=A([e],f.mapping.length+(t?0:1));return n?n[0]:n}function S(e,t){return A(e,f.mapping.length,t)}function A(e,i,r,t){var a=this,l=[],s=[],n=null,o="IncorrectIndices";return Array.isArray(e)?((e=O(e,t))&&e.forEach(function(t,e,n){var o=this;ye(this,a),(t<0||i<=t)&&l.push(t),r&&1<n.filter(function(e){return ye(this,o),e===t}.bind(this)).length&&-1===s.indexOf(t)&&s.push(t)}.bind(this)),1<l.length?m(o,"Page indices "+l.join(", ")+" are outside of the document.",t):0<l.length?m(o,"Page index "+l[0]+" is outside of the document.",t):1<s.length?m(o,"Page indices "+s.join(", ")+" are included more than once.",t):0<s.length?m(o,"Page index "+s[0]+" is included more than once.",t):n=e):m(o,"Object "+e+" is not an array.",t),n}function O(e,t){var n=this,o=[],i=[];return Array.isArray(e)?(e.forEach(function(e){ye(this,n);var t=Je(e);null===t?o.push(e):i.push(t)}.bind(this)),1<o.length?(m("IncorrectNumbers",'Objects "'+o.join('", "')+'" are not numbers.',t),i=null):0<o.length&&(m("IncorrectNumbers",'Object "'+o[0]+'" is not a number.',t),i=null)):m("IncorrectNumbers","Object "+e+" is not an array.",t),i}o.__exposedApi=r.document,o.getPageDefinition=function(e,t){if(t=t||a,v(),0<=e&&e<f.mapping.length&&f.mapping[e]){var n=f.mapping[e],o=null,i=null;if(-1===n)return null;null!=n.pageref?(o=n.pageref,e=o.index,i=o.uri):e=n.index;var r=n.viewerstate[t]&&0<=n.viewerstate[t].cacheIndex?n.viewerstate[t].cacheIndex:-1;return{index:e,ref:o,cacheIndex:r,uri:i}}return null},o.setPageCacheIndex=function(e,t){s(e,a),f.mapping[e]&&f.mapping[e].viewerstate&&(f.mapping[e].viewerstate[a].cacheIndex=t)},o.insertPage=z,o.removePage=T,o.movePage=k,o.rotatePage=E,o.insertPages=P,o.removePages=D,o.movePages=C,o.rotatePages=M,o.getPageFitMultiplier=function(e,t){return t=t||a,v(),s(e,t),0<=e&&e<f.mapping.length&&f.mapping[e].viewerstate[t].fitmultiplier?f.mapping[e].viewerstate[t].fitmultiplier:1},o.setPageFitMultiplier=function(e,t,n){n=n||a,v(),s(e,n),0<=e&&e<f.mapping.length&&(f.mapping[e].viewerstate[n].fitmultiplier=t)},o.getPageRotation=u,o.getPageSize=function(e,t){if(t=t||a,v(),s(e,t),0<=e&&e<f.mapping.length){var n=f.mapping[e].viewerstate[t].size;if(!n){var o=f.info;if(o.pagesizes&&o.pagesizes[e])return o.pagesizes[e]}return n}},o.setPageSize=function(e,t,n){n=n||a,v(),s(e,n),0<=e&&e<f.mapping.length&&(f.mapping[e].viewerstate[n].size=t)},o.updatePageText=function(e,t){v(),0<=e&&e<f.mapping.length&&(f.mapping[e].text=t)},o.getPageText=function(e){return 0<=e&&e<f.mapping.length?f.mapping[e].text:null},o.initDocumentText=function(e){if(e&&e.pages){v();for(var t=0;t<f.mapping.length;++t)if(t<e.pages.length)if(f.mapping[t].index===t)f.mapping[t].text=e.pages[t];else for(var n=0;n<f.mapping.length;++n)f.mapping[n].index===t&&(f.mapping[n].text=e.pages[t]);else f.mapping[t].text=null}},o.getPageIndexByImageIndex=function(e){if(e<f.info.count){for(var t=0;t<f.mapping.length;t++)if(f.mapping[t].index===e)return t}else for(var n=0;n<f.mapping.length;n++)if(f.mapping[n].pageref&&f.mapping[n].pageref.mapsto===e)return n;return-1},o.__getDebugInfo=function(){var e={};return Kt.extend(!0,e,{data:f,changes:f.changes}),e},o.__linkChanges=function(e){e&&(e._changes?f=e._changes:e._changes=f)},o.clear=function(e){f.clear(),"function"==typeof e&&e(),d.trigger(p.changed)},o.getPageCount=function(){return f.info.count+f.count},o.stringifyChanges=function(){var e=[],t={type:"docinfo",pagescount:f.info.count};for(var n in e.push(t),f.changes)if(f.changes.hasOwnProperty(n)&&(d.config.persistrotation||"rotatepage"!==f.changes[n].type)){var o={};for(var i in f.changes[n])f.changes[n].hasOwnProperty(i)&&(o[i]=f.changes[n][i]);e.push(o)}return JSON.stringify({changes:e})},"Atalasoft.Controls.WebDocumentViewer"===d.typeOf&&Kt.extend(d,r),d.bind({pagerecycled:w,pageshown:x,documentinfochanged:l})};function qe(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Text Layer operations API.
 * @class
 * @inner
 * @name TextController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var bn=function e(t,n,o){var i=this,k=t,C=n,E=(n?n._internalEvents:null)||Kt({}),r={
/**
     * @lends Atalasoft.Controls.WebDocumentViewer~TextController
     */
text:{events:{
/**
         * Triggers when page text loaded.
         * @event Atalasoft.Controls.WebDocumentViewer#pagetextloaded
         * @type {LoadPageTextCallback}
         * @param {Object} event - The event object.
         * @param {number} event.index - index of the page for which text data has been loaded.
         * @param {Object} event.customData - The event customer data from server.
         */
pagetextloaded:null,
/**
         * Triggers when UI text selection complete.
         * @event Atalasoft.Controls.WebDocumentViewer#textselected
         * @type {NotificationCallback}
         */
textselected:null},
/**
       * Retrieves the selected text.
       * @return {string} Selected text. Line break is inserted after each line and region.
       * @instance
       * @function
       */
getSelected:U,
/**
       * Copies selected text to clipboard. This method don't depend on {@link TextMouseToolConfig| TextMouseToolConfig.hookcopy} config option, i.e. text will be copied if `ctrl+c` copying is disabled for user.
       * @instance
       * @function
       */
copySelected:N,
/** Selects all text on the page.
       * Any optional arguments could be omitted and callback could be passed instead of it.
       * This method is intended to select whole page text or to be used in conjunction with text search API when `region`, `line`, `word` indexes are passed to application using search iterator.
       *
       * @param {number} index - Index of the page to select page on.
       * @param {number} [region] - Index of the region to select.
       * @param {number} [line] - Index of the line to select.
       * @param {number} [word] - Index of the word to select.
       * @param {NotificationCallback} [success] - Function that that is called when page text is loaded and selected.
       * @param {NotificationCallback} [fail] - Function that that is called when page text load is failed.
       *
       * @instance
       * @function
       *
       * @example <caption>Search result match object could be used to retrieve region line and word indexes of the match starting object.</caption>
       * <caption> Search text occurrence and automatically select it. Note, that `match.word` is the index of the first word in matched text. If search phrase contain multiple words, only firs will be selected in this example. </caption>
       *  _viewer.text.search('findme', 0, function (it, match) {
       *       if (it.isValid()) {
       *           _viewer.text.selectPageText(match.page, match.region, match.line, match.word);
       *       }
       *  });
       */
selectPageText:function(e,r,a,l,s,t){var u=this,c=Kt.Deferred(),n=Array.prototype.slice.call(arguments,1);return 2<n.length&&"function"==typeof n[n.length-2]?(t=n.pop(),s=n.pop()):1<n.length&&"function"==typeof n[n.length-1]&&(s=n.pop()),r=n[0],a=n[1],l=n[2],ge(e).done(function(e,t){var n=this;qe(this,u);var o=t.bounds;void 0===r||!t.regions[r]||void 0!==a&&t.regions[r].lines[a]?(r=t.regions[r],void 0!==a&&r.lines[a]&&(o=ee((a=r.lines[a]).bounds,r),void 0!==l&&a.words[l]&&(o=ee(a.words[l].bounds,r))),Y(e,je(o.x,o.y),e,je(o.right,o.bottom))):X(e,r);var i=function(){qe(this,n),k.config.mousetool.text.hookcopy&&C._dom.viewport.focus(),c.resolve(),s&&"function"==typeof s&&s()}.bind(this);C.isPageInView(e)?i():k.showPage(e,i)}.bind(this)).fail(function(){qe(this,u),c.reject(),t&&"function"==typeof t&&t()}.bind(this)),c.promise()},
/**
       * @callback GetPageTextCallback
       * @param {string} text - The returned text.
       */
/**
       * Returns all text for the specified page.
       * @param {number} index - Index of the page to retrieve text.
       * @param {GetPageTextCallback} [success] - function that that is called when page text is loaded and formatted.
       * @param {NotificationCallback} [fail] - Function that that is called when page text load is failed.
       *
       * @instance
       * @function
       */
getPageText:function(i,r,e){var a=this,l=Kt.Deferred();return ge(i).done(function(){qe(this,a);var e="",t=S(i);if(t)for(var n=0;n<t.regions.length;n++){var o=W(t.regions[n]);o&&(e+=o)}l.resolve(e),r&&"function"==typeof r&&r(e)}.bind(this)).fail(function(){qe(this,a),l.reject(),e&&"function"==typeof e&&e()}.bind(this)),l.promise()},
/**
       * Clears all text selection for the document.
       * @instance
       * @function
       */
clearSelection:b,
/**
       * Marks page text data for reload. After this call text data will be loaded next time page will be inserted into DOM on scrolling. I.e. this method won't triggered immediate text reload, even for visible pages.
       * @param {number} [index] - Index of the page to reset text data. If not specified whole document text data is reset.
       * @instance
       * @function
       */
resetPageText:v,
/**
       * Callback signature for {@link Atalasoft.Controls.WebDocumentViewer~TextController#reloadPageText|reloadPageText} method.
       * @callback ReloadPageTextCallback
       * @param {number} index - Index of the page for which operation has been performed.
       */
/**
       * Forcibly triggers page text load.
       * @param {number} index - Index of the page to reset text data.
       * @param {LoadPageTextCallback} [success] - Function that that is called when page text is loaded successfully.
       * @param {LoadPageTextCallback} [fail] - Function that that is called when page text load is failed.
       *
       * @instance
       * @function
       */
reloadPageText:function(e,t,n){var o=this;return v(e),ge(e).done(function(){qe(this,o),t&&"function"==typeof t&&t(e)}.bind(this)).fail(function(){qe(this,o),n&&"function"==typeof n&&n(e)}.bind(this))},
/**             
       * Indicates whether page text is loaded.             
       * @param {number} index - Index of the page to check text data state.
       * @instance
       * @function
       */
isPageTextLoaded:function(e){var t=S(e);return!(!t||t.loading)},
/**
       * Triggers text search. This method also triggers UI search behavior - highlight for matched text occurrences selection of current text result and scrolling during text results iteration.
       * @param {string} [text] - Text to search for. If empty, previous search results are dropped.
       * @param {number} [startPage] - Index of the page to start search from. If not specified first page in document is assumed to be the first in search.
       * @param {TextSearchCallback} [callback] - Search callback that receives search results iterator.
       * @returns search results iterator that allows navigation over search results
       *
       * @instance
       * @function
       * @deprecated - Use the {@link Atalasoft.Controls.WebDocumentViewer~TextController#searchOnPages|searchOnPages} method instead.
       */
search:se,
/**
       * Triggers text search for the specified pages. This method also triggers UI search behavior - highlight for matched text occurrences selection of current text result and scrolling during text results iteration.
       * @param {string} [text] - Text to search for. If empty, previous search results are dropped.
       * @param {number} [startPage] - Index of the page to start search from. If not specified first page in document is assumed to be the first in search.
       * @param {number} [endPage] - Index of the page to end search where. If not specified last page in document is assumed to be the last in search.
       * @param {number} [activePage] - Index of the page from that viewer should start scrolling to the next search result.
       * @param {TextSearchCallback} [callback] - Search callback that receives search results iterator.
       * @returns search results iterator that allows navigation over search results
       *
       * @instance
       * @function
       */
searchOnPages:ue}};if(e.__exposedApi=r.text,!t)return null;var a=.1,l=null,M=n._pages,F={activepage:null,origin:je(0,0),originPage:-1,rectangular:!1,selectionCache:[],searchQuery:null},c={};function S(e){return C._controllers.document.getPageText(e)}
/**
   * jQuery trigger shortcut
   * @returns object, WebDocumentViewer
   */
function s(e){return k.trigger(e),i}function p(e,t){k.trigger({type:"throwerror",name:e,msg:t})}function u(){}function A(e,t){if(t._text){f(t);var n=S(e);if(n){var o=ye(t,n);if(o&&n.searchResult&&w(o,n),o&&n.selection)for(var i=n.selection,r=0;r<i.regions.length;r++)for(var a=0;a<i.regions[r].lines.length;a++)for(var l=i.regions[r].lines[a],s=0;l.words&&s<l.words.length;s++){var u=l.words[s];te(o,u.bounds.x,u.bounds.y,u.bounds.width,u.bounds.height,c.selection)}}}}function d(e){f(e.page)}function h(e){A(e.index,e.page)}function f(e){e._text&&x(e._index)}function g(e){e.page._text.attr("width",e.width).attr("height",e.height),e.page._text.width(e.width),e.page._text.height(e.height),A(e.index,e.page)}function m(){if(F.searchQuery&&F.searchQuery.iterator){F.searchQuery.iterator.dispose(),F.searchQuery=null,de();for(var e=0;e<M.length;e++)A(M[e]._index,M[e])}}function v(e){if(null==e)for(var t=0;t<C._controllers.document.getPageCount();t++)v(t);S(e)&&(C._controllers.document.updatePageText(e,null),F.selectionCache[e]&&(F.selectionCache[e]=null,C.findPageFromIndex(e)&&x(e,null)))}function y(){if(F.searchQuery=null,F.selectionCache=[],C._controllers.document.initDocumentText({pages:[]}),M)for(var e=0;e<M.length;e++)f(M[e])}function b(){for(var e=0;e<C._controllers.document.getPageCount();e++){var t=S(e);t&&t.selection&&(x(e,t,!0),t.selection=null)}F.selectionCache.length=0}
/** Clears the text selection */function x(e,t,n){for(var o=0;o<M.length;o++)if(!isFinite(e)||M[o]._index===e){t=isFinite(e)&&o===e?t:S(M[o]._index);var i=ye(M[o],t);if(i){var r=C.getSourcePageSize(M[o]._index,t?t.rotation:0);i.clearRect(0,0,r.width,r.height),n&&w(i,t)}}}function w(e,t){if(t&&t.searchResult)for(var n=0;n<t.searchResult.length;n++){var o=t.searchResult[n].bounds;te(e,o.x,o.y,o.width,o.height,c.highlight)}}function _(e){var t=e.eventData,n=t.page,o=t.point;b();var i=S(n);i&&(i.selection=le(t.point,t.point),t.interval&&F.origin&&0<=F.originPage?(Y(F.originPage,F.origin,n,o),t.complete=!0):(t.line||t.word)&&Math.abs(t.point.x-F.origin.x)<10&&Math.abs(t.point.y-F.origin.y)<10?(function(e,t,n,o){var i=S(e);if(i&&(n||o))for(var r=0;r<i.regions.length;r++){var a=i.regions[r];if(Me(t,a.bounds))for(var l=0;l<a.lines.length;l++){var s=a.lines[l];if(Me(t,s.bounds)){var u={region:r,line:l,bounds:s.bounds};if(o){for(var c=0;c<s.words.length;c++)if(Me(t,s.words[c].bounds))return u.word=c,u.bounds=s.words[c].bounds,Z(e,u)}else if(n)return Z(e,u)}}}}(n,o,t.line,t.word),t.complete=!0):(F.origin=t.rectangular?t.viewerPoint:t.point,F.originPage=n,F.rectangular=t.rectangular)),t.handled=!0}Kt.extend(c,o||{}),i.dispose=function(){k.unbind({pagerecycled:d,pageshown:h,zoomchanged:u,documentchanged:m}),E.off({textselectstart:_,textselectmove:H,textselectend:R}),l=k=i=null,F.searchQuery=null,F.selectionCache=[],F.activepage=null},i.removeTextLayer=function(e){return e instanceof Kt&&(e._text&&(e._text._page=null,e._text=null),!0)},i.addTextLayer=function(t){return t instanceof Kt&&(t._text=C.createDOM("canvas",t),t._text.css({width:"100%",height:"100%",position:"absolute",zIndex:0}),t._text.attr("width",t.width()).attr("height",t.height()),(t._text._page=t).on(en.Features.Touch?"touchstart":"mousedown",function(){var e;e=t,F.activepage=e}),t.on({pageresize:function(e){e.page=t,g(e)},pagezoom:function(e){e.page=t,g(e)}}),!0)},i.showLayer=A,i.__exposedApi=r.text,i.__getDebugInfo=function(){var e={};return Kt.extend(!0,e,{data:F,pages:M,viewport:l}),e},i.__linkText=function(){},i.clear=y,i.setViewPort=function(e){e&&(e instanceof Kt||(e=Kt(e)),l=e)},i.search=se,i.clearSelection=b,i.ensurePageTextLoaded=ge;var z,P,T,D,O,I,V,L,j=(z=Y,P=k.config.mousetool.text.throttlingtreshold,V=0,L=function(){V=(new Date).getTime(),I=null,O=z.apply(T,D),I||(T=D=null)},function(){var e=(new Date).getTime();V||(V=e-P);var t=P-(e-V);return T=this,D=arguments,t<=0||P<t?(I&&(clearTimeout(I),I=null),V=e,O=z.apply(T,D),I||(T=D=null)):I||(I=setTimeout(L,t)),O});function H(e){var t=e.eventData,n=t.page,o=F.rectangular?t.viewerPoint:t.point,i=S(n);if(i)if(i.loading)t.cursor=Re.Wait;else{if(0===i.regions.length)return!(t.handled=!1);var r=C.getPageRotation(n)+i.rotation;if(i.rotatedRegions)for(var a=0;a<i.rotatedRegions.length;a++)if(Me(t.point,i.rotatedRegions[a].bounds)){r+=i.rotatedRegions[a].rotation;break}t.cursor=r%180==0?Re.Text:Re.VerticalText,t.selecting&&j(F.originPage,Kt.extend({},F.origin),n,o,F.rectangular)}return!(t.handled=!0)}function R(e){var t=e?e.eventData:{},n=!1;for(var o in F.selectionCache)if(F.selectionCache.hasOwnProperty(o)&&F.selectionCache[o].selection&&F.selectionCache[o].selection.regions.length){n=!0;break}n&&s({type:"textselected"}),F.rectangular=!1,t.handled=!0}function B(){N()}function N(){var e=C.createDiv();if(e[0]){var t=new He("wdv-dummy-selection-trigger",{text:function(){return U()}});t.on("success",function(){t.destroy()}),t.on("error",function(){t.destroy(),p("TextCopyError")}),t.onClick({currentTarget:e[0]})}}function U(){for(var e="",t=0;t<F.selectionCache.length;t++)if(F.selectionCache[t]){var n=F.selectionCache[t].selection;if(n&&n.regions&&0<n.regions.length)for(var o=0;o<n.regions.length;o++){var i=W(n.regions[o]);i&&(e+=i)}}return e}function q(e){for(var t="",n=0;e.words&&n<e.words.length;n++)if(Ie(e.words[n],1<=n?e.words[n-1]:null)&&(t+=" "),e.words[n].text)t+=e.words[n].text;else if(e.words[n].glyphs&&e.words[n].glyphs.length)for(var o=0;o<e.words[n].glyphs.length;o++)t+=e.words[n].glyphs[o].text;return t}function W(e){for(var t="",n=0;n<e.lines.length;n++){var o=q(e.lines[n]);o&&(t+=o+"\n")}return t}function Z(e,t){var n=S(e);if(n&&t&&n.regions[t.region]){b();var o=n.regions[t.region],i=ye(ve(e),n);if(Ue(t.line)&&o.lines[t.line]){for(var r=o.lines[t.line],a={words:[]},l={lines:[a],bounds:Kt.extend({},o.bounds)},s=Ue(t.word)&&r.words[t.word]?t.word:0,u=Ue(t.endWord)&&r.words[t.endWord]?t.endWord:Ue(t.word)?s:r.words.length-1,c=s;c<=u;++c){var d=r.words[c],h=!!d.glyphs.length;h&&c===s&&Ue(t.glyph)?d=K(d,t.glyph,s===u&&Ue(t.endGlyph)?t.endGlyph:d.glyphs.length-1):h&&c===u&&Ue(t.endGlyph)&&(d=K(d,0,t.endGlyph)),a.words.push(Kt.extend({},d)),i&&te(i,d.bounds.x,d.bounds.y,d.bounds.width,d.bounds.height)}n.selection=le(je(t.bounds.x,t.bounds.y),je(t.bounds.right,t.bounds.bottom)),ae(n.selection.regions,l),F.selectionCache[e]=n}else X(e,t.region)}}function X(e,t){b();var n=S(e);if(n&&n.regions[t]){var o=n.regions[t],i=ye(ve(e),n);n.selection=le(je(o.bounds.x,o.bounds.y),je(o.bounds.right,o.bounds.bottom),!1);var r=J(i,o,n.selection.origin,n.selection.point);r&&0<r.lines.length&&(ae(n.selection.regions,r),F.selectionCache[e]=n)}}function Y(e,t,n,o,i){var r=Math.min(e,n),a=Math.max(e,n);for(var l in F.selectionCache)if(F.selectionCache.hasOwnProperty(l)){var s=parseInt(l,10);(s<r||a<s)&&(x(s,F.selectionCache[s],!0),F.selectionCache[s].selection=null)}for(var u=i?Math.min(t.x,o.x):0,c=je(u,0),d=r;d<=a;d++){var h=C.getSourcePageSize(d);i&&((h=Kt.extend({},C.getPageSize(d))).width*=C.getPageScale(d),h.height*=C.getPageScale(d));var f=i?Math.max(t.x,o.x):h.width,p=je(f,h.height),g=void 0,m=void 0;r===a?(g=t,m=o):d===e?(g=t,m=d===r?p:c):d===a||d===r?(m=o,g=d===r?p:c):(g=c,m=p);var v=ve(d);i?$(d,je(u,g.y),je(f,m.y),v):G(d,g,m,v)}}function G(e,t,n,o){var i,r,a,l=S(e);if(l&&ne(l,t,n,!1)&&0<l.regions.length){o&&o._text&&x(e,l,!0),l.selection=le(t,n,!1);var s=function(e,t,n){for(var o=je(Math.min(t.x,n.x),Math.min(t.y,n.y)),i=je(Math.max(t.x,n.x),Math.max(t.y,n.y)),r=Te({x:o.x,y:o.y,width:i.x-o.x,height:i.y-o.y}),a=Te({x:0,y:o.y,width:e.bounds.width,height:i.y-o.y}),l=t,s=n,u=null,c=null,d=null,h=null,f=0;f<e.regions.length&&(!u||!c);f++){var p=e.regions[f].bounds;Fe(a,p)&&(d=!d||re(e.regions[f],d)?e.regions[f]:d),Fe(r,p)&&(u=!u&&Me(l,e.regions[f].bounds)?e.regions[f]:u,c=!c&&Me(s,e.regions[f].bounds)?e.regions[f]:c,h=!h||oe(e.regions[f],h)?e.regions[f]:h)}if(u&&c){if(re(c,u)){var g=c;c=u,u=g,l=n,s=t}}else if(d&&h){var m;u?(m=ie(s),re(u,m)?(c=h,s=null):(c=u,s=l,u=d,l=null)):c?(m=ie(l),oe(c,m)?(u=d,l=null):(u=c,l=s,c=h,s=null)):(u=d,c=h,l=s=null),l=l||Ve(u),s=s||Le(c)}return{start:u,startPoint:l,end:c,endPoint:s}}(l,t,n);if(s&&s.start&&s.end)for(var u=ye(o,l),c=0;c<l.regions.length;c++){var d=l.regions[c],h=null;d===s.start?h=d===s.end?J(u,d,s.startPoint,s.endPoint):J(u,d,s.startPoint,Le(d)):d===s.end?h=J(u,d,Ve(d),s.endPoint):(i=d,r=s.start,a=s.end,oe(i,r)&&re(i,a)&&(h=J(u,d,Ve(d),Le(d)))),h&&h.lines&&0<h.lines.length&&(ae(l.selection.regions,h),F.selectionCache[e]=l)}}}function J(e,t,n,o){var i={lines:[],bounds:Kt.extend({},t.bounds)},r=S(t.page).bounds;if(0!==t.rotation&&(n=Ne(n,r,360-t.rotation),o=Ne(o,r,360-t.rotation)),ke(n.y,o.y)){var a=n;n=o,o=a}for(var l=0;l<t.lines.length;l++){var s=t.lines[l],u={words:[]},c=Pe(s,r,t.rotation),d=ke(c.y,n.y)&&De(c.bottom,o.y),h=!d&&Ee(n.y,c.y,c.bottom),f=!d&&Ee(o.y,c.y,c.bottom);if(h&&1<l){var p=Pe(t.lines[l-1],r,t.rotation);d=!(h=!Ee(n.y,p.y,p.bottom))&&!f}if(f&&l<t.lines.length-1){var g=Pe(t.lines[l+1],r,t.rotation);f=!Ee(o.y,g.y,g.bottom),d=!h&&!f}if(d||h||f){for(var m=0;s.words&&m<s.words.length;m++){var v=s.words[m],y=Pe(v,r,t.rotation),b=v.glyphs&&v.glyphs.length,x=d;if(!x){if(h&&f){if(ke(n.x,o.x)){var w=n;n=o,o=w}x=ke(b?y.x:y.right,n.x)&&De(b?y.right:y.x,o.x)}else h?x=ke(b?y.x:y.right,n.x):f&&(x=De(b?y.right:y.x,o.x));if(!x&&b){var _=null;if(h&&Ee(n.x,y.x,y.right)){var z=f?Math.min(y.right,o.x):y.right;_=Q(v,n.x,z)}f&&Ee(o.x,y.x,y.right)&&(_=Q(v,h?Math.max(y.x,n.x):y.x,o.x)),_&&(v=_,x=!0)}}x&&(u.words.push(Kt.extend({},v)),e&&te(e,v.bounds.x,v.bounds.y,v.bounds.width,v.bounds.height))}0<u.words.length&&i.lines.push(u)}}return i}function Q(e,t,n){for(var o=null,i=null,r=0;r<e.glyphs.length;++r){var a=e.glyphs[r].normalizedBounds;if(null===o&&ke(a.right,t)&&(o=r),!De(a.x,n))break;i=r}return null!==o&&null!==i?K(e,o,i):null}function K(e,t,n){var o={glyphs:[],text:"",omitSpace:e.omitSpace};if(0<=t&&t<=n&&e.glyphs[n]){o.glyphs=e.glyphs.slice(t,n+1);var i=e.glyphs[t].bounds,r=e.glyphs[n].bounds,a=Math.min(i.x,r.x),l=Math.min(i.y,r.y),s=Math.max(i.right,r.right),u=Math.max(i.bottom,r.bottom);return o.bounds={x:a,y:l,width:Math.abs(s-a),height:Math.abs(u-l)},Te(o.bounds),o}return null}function $(e,t,n,o){var i=S(e);if(i&&ne(i,t,n,!0)&&0<i.regions.length){o&&o._text&&x(e,i,!0);var r=Oe(e,i,t),a=Oe(e,i,n);i.selection=le(t,n,!0);var l=Te({x:Math.min(r.x,a.x),y:Math.min(r.y,a.y),width:Math.abs(a.x-r.x),height:Math.abs(a.y-r.y)});if(l=Ae(l,i.bounds)){for(var s,u=0;u<i.regions.length;u++)if(Fe(l,i.regions[u].bounds)){s=s||ye(o,i);for(var c={lines:[],bounds:Kt.extend({},i.regions[u].bounds)},d=0;d<i.regions[u].lines.length;d++){for(var h=i.regions[u].lines[d],f={words:[]},p=0;h.words&&p<h.words.length;p++){var g=h.words[p];if(Fe(l,g.bounds)){var m=Te(Be(l,i.bounds,(360-i.regions[u].rotation)%360)),v=g.normalizedBounds,y=ke(v.x,m.x),b=De(v.right,m.right);y&&b||(g=Q(g,Math.max(v.x,m.x),Math.min(v.right,m.right))),g&&(f.words.push(Kt.extend({},g)),s&&te(s,g.bounds.x,g.bounds.y,g.bounds.width,g.bounds.height))}}0<f.words.length&&c.lines.push(f)}c.lines.length&&ae(i.selection.regions,c)}i.selection.regions.length&&(i.selection.bounds=l,F.selectionCache[e]=i)}}}function ee(e,t){if(t){if(t.rotation%180!=0)return Te({x:(e.right+e.x)/2,y:e.y,width:0,height:e.height});var n=(e.bottom+e.y)/2;return Te({x:e.x,y:n,width:e.width,height:0})}return null}function te(e,t,n,o,i,r){e&&(e.clearRect(t,n,o,i),r=r||c.selection,e.fillStyle=r.color,e.globalAlpha=r.alpha,e.fillRect(t,n,o,i))}function ne(e,t,n,o){return o=!!o,!e.selection||!Ce(e.selection.origin,t)||!Ce(e.selection.point,n)||o!==e.selection.rectangular}function oe(e,t){if(ke(e.bounds.bottom,t.bounds.y)){if(Se(e.bounds,t.bounds))return e.bounds.x>t.bounds.x;var n=Ae(e.bounds,t.bounds);if(n)return 1<=n.width/n.height?ke(e.bounds.y,t.bounds.y):ke(e.bounds.x,t.bounds.x);if(ke(e.bounds.y,t.bounds.bottom))return!0;if(De(e.bounds.bottom,t.bounds.y))return!1;if(ke(e.bounds.x,t.bounds.x))return!0}return!1}function ie(e){return{lines:[],bounds:Te({x:e.x,y:e.y,width:0,height:0})}}function re(e,t){return!oe(e,t)}function ae(e,t){for(var n=0;n<e.length&&!re(t,e[n]);n++);Array.prototype.splice.call(e,n,0,t)}function le(e,t,n){return{origin:e,point:t,rectangular:!!n,regions:[]}}function se(e,t,n){return"function"==typeof t&&(n=t,t=0),ue(e,0,C._controllers.document.getPageCount()-1,t,n)}function ue(e,t,n,o,i){var r=this,a=C._controllers.document.getPageCount(),l=!1,s=function(e,t){if(qe(this,r),l)return null;var n=!1,o=e;return"string"==typeof e&&(o=Je(e),n=!0),null===o&&!n||void 0===o||"number"==typeof o?o:(p("searchOnPages",t+" page '"+JSON.stringify(e)+"' is not a correct page index."),l=!0,null)}.bind(this),u=s(t,"Start"),c=s(n,"End"),d=s(o,"Active");if(l)return null;if(dn(u)||(u=0),dn(c)||(c=a-1),dn(d)||(d=u),u<0||a<=u)return p("searchOnPages","Start page "+u+" is out of range."),null;if(c<0||a<=c)return p("searchOnPages","End page "+c+" is out of range."),null;if(c<u)return p("searchOnPages","Start page is greater than end page."),null;if(d<u||c<d)return p("searchOnPages","Active page "+d+" is out of range."),null;if(null!=e&&"string"!=typeof e)return p("searchOnPages","Text to search value "+JSON.stringify(e)+" is not a valid text to search."),null;if(null!=i&&"function"!=typeof i)return p("searchOnPages","Callback value "+JSON.stringify(i)+" is not a valid callback function."),null;if(de(),e&&2<e.length&&i){var h={sourceQuery:e,text:e.toLocaleLowerCase(),start:u,end:c,active:d},f=new ce(F.searchQuery=h,i);return F.searchQuery.iterator=f}return M.forEach(function(e){qe(this,r),e._index>=u&&e._index<=c&&A(e._index,e)}.bind(this)),null}
/**
   * Callback signature for {@link Atalasoft.Controls.WebDocumentViewer~TextController#searchOnPages|text.searchOnPages}, {@link Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#next|next}, {@link Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#prev|prev} methods.
   * @callback TextSearchCallback
   * @param {Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator} iterator - Current iterator instance.
   *
   * It's recommended to call {@link Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isValid|isValid} method when callback is called, to check whether iterator is still active. In case if search is cancelled(new search started), callback on the obsolete iterator will be called once to indicate that search is finished for particular query.
   *
   * @param {TextSearchResult} [match] - Current search query match descriptor. If match argument is null, no subsequent result are found.
   */
/**
   * @typedef {Object} TextSearchResult - Represents single search result descriptor.
   * @property {number} page - Page index of the match.
   * @property {number} region - Index of the text region where match is occurred.
   * @property {number} line - Index of the text line within region where match is occurred.
   * @property {number} word - Index of the word within text line where match is occurred.
   */
/**
   * WebDocumentViewer Search Results Iterator.
   * @class
   * @inner
   * @name TextSearchIterator
   * @alias TextSearchIterator
   * @memberOf Atalasoft.Controls.WebDocumentViewer~TextController
   */function ce(u,o){var c,d=3,h=u.start,f=u.end,p=u.active,g=-1,m=-1,v=0,y=this,b=[],t=[],x=D(-1);function i(e){t.push({action:w,args:[!0,T(e)]}),n()}
/**
     * Advances current item to the previous query match or adds operation to the queue in case if next match is currently awaited.
     * @param {TextSearchCallback} callback - Function that that is called when previous match is found.
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#prev
     */function n(){if(!c&&t.length){var e=t.shift();e&&"function"==typeof e.action&&e.action.apply(y,e.args)}}function w(n,o){if(_()){var e=n?1:-1,t=S(g);if(t&&t.searchResult&&t.searchResult.length&&(n?-1<=m&&m<v-1:0<m&&m<=v)){m+=e;var i=t.searchResult[m];x=D(g,i),Z(g,i);var r=t?t.rotation:0,a=C.getViewerTransform(g,r),l=ee(i.bounds,t.regions[i.region]),s=je(a.x(l.x,l.y),a.y(l.x,l.y));C.showPagePoint(g,s,rn.Center,function(){o(y,D(g,i))})}else c=c||z(u.text,0<=g?g+e:p,n).done(function(e,t){_()?0<=e&&t&&(g=e,v=t.searchResult.length,m=n?-1:v,w(n,o)):o(y,null)}).fail(function(){o(y,null)})}else o(y,null)}
/**
     * Gets the query text for this iterator.
     * @returns {string}
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getQuery
     */function _(){var e=F.searchQuery===u;return e||r(),e}
/**
     * Indicates whether this is executing background search.
     * If `true`, subsequent next/prev calls are stored into the search queue.
     *
     * Method could be used, for example, to determine whether search will be continued after particular callback call, and thus to hide or preserve search loading mask.
     *
     * @returns {boolean}
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isSearching
     */function z(t,n,o,i,r){var a;return i=i||Kt.Deferred(),_()&&setTimeout(function(){for(;h<=n&&n<=f;n+=o?1:-1){var e=S(n);if(e&&!e.loading){if(e.searchResult=P(e,u.text),0<e.searchResult.length)return void i.resolve(n,e)}else{if(e&&e.loading&&e.promise)return void l(t,n,o,i,r,e);if(!e){if(b[n])continue;return a=!0,void s(t,n,o,i)}}}if(y.wrap&&!a&&!r)return n<h&&!o?n=f:f<n&&o&&(n=h),void z(t,n,o,i,!0);i.reject()},0),i.promise()}function l(e,t,n,o,i,r){r.promise.then(function(){z(e,t,n,o,i)})}function s(i,e,r,a){var t,n,o,l,s,u=function(e,t){for(var n=e,o=null,i=[];h<=n&&n<=f&&i.length<=20;n+=t?1:-1){var r=null,a=C._controllers.document.getPageDefinition(n),l=a.index;if(a.uri&&(r=a.uri),o!==r&&n!==e)break;o=r;var s={i:l};l!==n&&(s.di=n),i.push(s);var u=S(n);if(u&&!u.loading)break}return{textUrl:o||k.config.documenturl,pages:i}}(e,r);u.pages.length?(t=i,n=u,o=d,l=Kt.Deferred(),s={type:"pagetextsearch",serverurl:k.config.serverurl,query:"?pagetextsearch=",method:"POST",data:{atala_query:t,atala_docurl:n.textUrl,atala_maxcount:o||d,atala_pages:JSON.stringify(n.pages)},cancel:!1},C.makeHandlerRequest(s,function(e){if(_()){var t=-1;if(e&&e.searchResults&&e.searchResults.length)for(var n=0;n<e.searchResults.length;n++){var o=e.searchResults[n],i=o.hasOwnProperty("di")?o.di:o.i,r=S(i);!r&&o.text&&(C._controllers.document.updatePageText(i,o.text),me({pageText:o.text,customData:e.customData},o.text,i)),o.count<=0&&t<0?r?r.searchResult=[]:b[i]=[]:t<0&&0<o.count&&(t=i)}l.resolve(0<=t?t:null)}else l.reject()},function(){l.reject()}),l.promise()).done(function(e){if(null===e)if(_()){var t=u.pages[u.pages.length-1],n=t.hasOwnProperty("di")?t.di:t.i;z(i,n,r,a)}else a.reject();else{var o=S(e);a.resolve(e,o)}}).fail(function(){a.reject()}):a.reject()}function P(e,t){var n=t.length,o=[];if(e.searchResult)o=e.searchResult;else for(var i=0;i<e.regions.length;i++)for(var r=0;r<e.regions[i].lines.length;r++){for(var a=e.regions[i].lines[r],l=0,s=[],u="",c=0;c<a.words.length;c++){var d=a.words[c],h=d.glyphs&&d.glyphs.length;Ie(d,1<=c?a.words[c-1]:null)&&(u+=" ",++l);for(var f=0;f<(h?d.glyphs.length:d.text.length);f++)s[l++]={bounds:h?d.glyphs[f].bounds:d.bounds,region:i,line:r,word:c,glyph:f},u+=(h?d.glyphs[f].text:d.text[f]).toLocaleLowerCase()}var p=0;do{if(0<=(p=u.indexOf(t,p))){for(var g=s[p],m=Math.min(p+n-1,s.length);!s[m]&&p<m;)--m;var v=s[m],y=Te({x:g.bounds.x,y:g.bounds.y,width:Math.abs(v.bounds.right-g.bounds.x),height:Math.abs(v.bounds.bottom-g.bounds.y)});o.push({bounds:y,region:g.region,line:g.line,word:g.word,glyph:g.glyph,endWord:v.word,endGlyph:v.glyph})}}while(0<=p++)}return o}function r(){E.off("pagetextloaded",e),k.unbind({pageshown:a}),b=[]}function e(e){var t=e.text,n=e.index;if(_()&&t&&h<=n&&n<=f&&(t.searchResult=P(t,u.text),b[n]&&Array.prototype.splice.call(b,n,1),t.searchResult.length)){var o=C.findPageFromIndex(n);o&&A(n,o)}}function a(e){if(_()&&e.page&&e.index>=h&&e.index<=f){var t=S(e.index);!t||t.loading||t.searchResult||setTimeout(function(){t.searchResult=P(t,u.text),A(e.index,e.page)},0)}}function T(e){return function(){c=null,e&&e.apply(this,arguments),n()}}function D(e,t){return{page:e,region:t?t.region:0,line:t?t.line:0,word:t?t.word:0}}
/**
       * Indicates whether search should be wrapped around when first or last document page is match is reached.
       * @name Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#wrap
       * @type {boolean}
       */
y.wrap=!0,E.on("pagetextloaded",e),k.bind({pageshown:a}),setTimeout(function(){for(var e=0;e<M.length;e++){var t=M[e]._index;if(!(t<h||f<t)){var n=S(t);n&&!n.loading&&(n.searchResult=P(n,u.text),n.searchResult.length&&(A(t,M[e]),t===p&&(v=n.searchResult.length,g=p)))}}i(o)},0),
/**
     * Advances current item to the next query match or adds operation to the queue in case if next match is currently awaited.
     * @param {TextSearchCallback} callback - function that that is called when next match is found.
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#next
     */
y.next=i,y.prev=function(e){t.push({action:w,args:[!1,T(e)]}),n()},y.getQuery=function(){return u.sourceQuery}
/**
     * Indicates whether this iterator corresponds to the active search.
     *
     * If `false`, next/prev methods are always returning `null` match.
     * @returns {boolean}
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isValid
     */,y.isValid=_,y.isSearching=function(){return _()&&(c||0<t.length)}
/**
     * Returns the formatted text for the whole line containing current match.
     * @returns {string}
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getCurrentLineText
     */,y.getCurrentLineText=function(){if(_()&&x&&0<=x.page){var e=S(x.page);if(e&&e.regions[x.region]&&e.regions[x.region].lines[x.line])return q(e.regions[x.region].lines[x.line])}return null},
/**
     * Disposes the current iterator. Calling this method is optional. Abandoned iterators will be disposed automatically.
     * @ignore
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#dispose
     */
y.dispose=r}function de(){for(var e=[],t=0;t<C._controllers.document.getPageCount();t++){var n=S(t);n&&n.searchResult&&(n.searchResult.length&&(e[t]=!0),n.searchResult=null)}for(var o=0;o<M.length;++o)e[o]&&A(o,M[o]);F.searchQuery=null}function he(e,t){return{type:"textdata",serverurl:e,query:"?atalatextdata=",method:"GET",data:{atala_docurl:t},cancel:!1,info:{ocr:{},error:void 0}}}function fe(e,t){function n(e){pe(e),"function"==typeof t&&t.call()}y(),C.makeHandlerRequest(e,n,n)}function pe(e){if(e){if(e.error&&(p("TextLoadError",e.error),y()),e.text.pages)for(var t=0;t<e.text.pages.length;++t)be(e.text.pages[t],t);C._controllers.document.initDocumentText(e.text),s({type:"textloaded"})}}function ge(r){var a=Kt.Deferred(),l=S(r),s=C._controllers.document.getPageDefinition(r);if(!l&&s){l={loading:!0,regions:[],promise:a},C._controllers.document.updatePageText(r,l);var u=s.uri||k.config.documenturl,c=k.config.serverurl;setTimeout(function(){var t,n,o,e={type:"pagetextdata",serverurl:c,query:"?atalapagetext=",method:"GET",data:{atala_docurl:u,atala_index:s.index},cancel:!1,info:{page:l,error:void 0}},i=(t=l,n=r,o=a,function(e){me(e,t,n,o)});C.makeHandlerRequest(e,i,i)},0)}else a.resolve(r,l);return a.promise()}function me(e,t,n,o){if(e&&e.pageText)if(t.promise===o&&(t.loading=!1,t.promise=void 0),e.error)p("TextLoadError",e.error),t.regions=[],o&&o.reject&&o.reject(n);else{be(e.pageText,n),t.regions=e.pageText.regions?e.pageText.regions:[],Kt.extend(t,e.pageText);var i={type:"pagetextloaded",index:n,text:t,customData:e.customData};!function(){E.trigger.apply(E,arguments)}(i),s(i),o&&o.resolve&&o.resolve(n,t)}}function ve(e){for(var t=0;t<M.length;t++)if(M[t]._index===e)return M[t];return null}function ye(e,t){if(e&&e._text){var n=e._text[0];if(n.getContext){var o=n.getContext("2d"),i=t?t.rotation:0,r=C.getViewerTransform(e._index,i);return o.setTransform(r.a,r.b,r.c,r.d,r.e,r.f),o}}return null}function be(e,t){if(e){ze(e),e.regions=e.regions||[],e.rotatedRegions=[],e.rotation=e.rotation||0;for(var n=e.regions.length-1;0<=n;--n)e.regions[n].page=t,xe(e.regions[n],e.bounds)?(e.regions[n].index=n,e.regions[n].rotation&&e.rotatedRegions.push(e.regions[n])):Array.prototype.splice.call(e.regions,n,1);e.regions.sort(function(e,t){return re(e,t)?-1:1})}}function xe(e,t){if(!ze(e))return!1;e.rotation=e.rotation||0,e.lines=e.lines||[];for(var n=e.lines.length,o=e.lines.length-1;0<=o;--o)we(e.lines[o],t,e.rotation)||Array.prototype.splice.call(e.lines,o,1);return 0<n&&0===e.lines.length&&p("TextLoadError","Invalid region data received."),!(0<n)||0<e.lines.length}function we(e,t,n){if(!ze(e,t,n))return!1;e.words=e.words||[];for(var o=e.words.length,i=e.words.length-1;0<=i;--i)_e(e.words[i],t,n)||Array.prototype.splice.call(e.words,i,1);return!(0<o)||0<e.words.length}function _e(e,t,n){if(!ze(e,t,n))return!1;e.glyphs=e.glyphs||[],e.text=e.text||"",e.os&&(e.omitSpace=e.os,delete e.os);for(var o=e.glyphs.length-1;0<=o;--o)ze(i=e.glyphs[o],t,n)&&i.text||Array.prototype.splice.call(e.glyphs,o,1);var i;return!0}function ze(e,t,n){var o=!1;if(e)if(e.b&&"string"==typeof e.b){var i=e.b.split(";");e.bounds={x:parseFloat(i[0]),y:parseFloat(i[1]),width:parseFloat(i[2]),height:parseFloat(i[3])},delete e.b,o=!0}else e.bounds&&e.bounds.hasOwnProperty("x")&&e.bounds.hasOwnProperty("y")&&e.bounds.hasOwnProperty("width")&&e.bounds.hasOwnProperty("height")&&(Te(e.bounds),o=!0);else e={};return e.bounds||(e.bounds={x:0,y:0,width:0,height:0}),Te(e.bounds),e.bounds&&(e.normalizedBounds=Pe(e,t,n)),o}function Pe(e,t,n){if(!e.normalizedBounds){if(n%360==0)return e.normalizedBounds=e.bounds,e.normalizedBounds;e.normalizedBounds=Te(Be(e.bounds,t,360-n))}return e.normalizedBounds}function Te(e){return e.right=e.x+e.width,e.bottom=e.y+e.height,e}function De(e,t){return e<t+a}function ke(e,t){return t-a<e}function Ce(e,t){return e&&t&&e.x===t.x&&e.y===t.y}function Ee(e,t,n){return ke(e,t)&&De(e,n)}function Me(e,t){return!!t&&Ee(e.x,t.x,t.right)&&Ee(e.y,t.y,t.bottom)}function Fe(e,t){return!(!e&&!t)&&(ke(e.right,t.x)&&ke(t.right,e.x)&&ke(e.bottom,t.y)&&ke(t.bottom,e.y)||Se(e,t))}function Se(e,t){if(!e&&!t)return!1;var n=e.width>t.width?e:t;return t=n===e?t:e,De(n.x,t.x)&&ke(n.right,t.right)&&De(n.y,t.y)&&ke(n.bottom,t.bottom)}function Ae(e,t){if(!Fe(e,t))return null;var n={x:Math.max(e.x,t.x),y:Math.max(e.y,t.y),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)};return n.x<n.right&&n.y<n.bottom?(n.width=Math.abs(n.right-n.x),n.height=Math.abs(n.bottom-n.y),n):null}function Oe(e,t,n){var o=C.getViewerTransform(e,t.rotation?t.rotation:0).invert();return je(o.x(n.x,n.y),o.y(n.x,n.y))}function Ie(e,t){return!(!e||!t||t.omitSpace)}function Ve(e){return je(e.bounds.x,e.bounds.y)}function Le(e){return je(e.bounds.right,e.bounds.bottom)}function je(e,t){return{x:e,y:t}}i.createHandlerRequest=he,i.makeHandlerRequest=fe,i.loadText=pe,i.loadPageText=function(e,t,n){fe(he(e,t),n)},"Atalasoft.Controls.WebDocumentViewer"===k.typeOf&&Kt.extend(k,r),k.bind({pagerecycled:d,pageshown:h,zoomchanged:u,documentchanged:m}),E.on({textselectstart:_,textselectmove:H,textselectend:R,textselectcopy:B})},be=function(){var e=this,t=Kt({}),a={tapped:!1,touching:!1,pinching:!1,zooming:!1,textselection:!1,origin:{x:0,y:0},point:{x:0,y:0},delta:{x:0,y:0},drawing:!1,moves:0,prpt:0},l=null,i=tn.None,n=tn.None,o=null;function s(){return t.trigger.apply(t,arguments),e}function r(){a&&(a.drawing=!0)}function u(){a&&(a.drawing=!1)}function c(){a.zooming=!1}function d(e){if(!a.prmt)return s({type:"panstart",x:e.clientX,y:e.clientY}),document.addEventListener("mousemove",h),document.addEventListener("mouseup",f),document.addEventListener("ondrag",K),!1}function h(e){if(e=null==e?event:e,!a.prpt){if(0!==e.which)return s({type:"panmove",x:e.clientX,y:e.clientY}),!1;f()}}function f(){if(!a.prpt)return document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",f),document.removeEventListener("ondrag",K),s({type:"panend"}),!1}function p(e){if(a.prmt)return!1;e.stopPropagation();var t={handled:!1,complete:!1};return s({type:"textselectstart",toolEvent:e,eventData:t}),t.complete||(a.textselection=!0,document.addEventListener("mouseup",m),document.addEventListener("mousemove",v),document.addEventListener("ondrag",K)),!1}function g(e){return!!a.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectmove",toolEvent:e,eventData:{handled:!1,selecting:a.textselection}}),!1):(m(e),!0))}function m(e){return a.prmt||!a.textselection||(a.textselection=!1,document.removeEventListener("mouseup",m),document.removeEventListener("mousemove",v),document.removeEventListener("ondrag",K),s({type:"textselectend",toolEvent:e,eventData:{handled:!1}})),!1}function v(e){if(a.textselection)return!!a.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectscroll",toolEvent:e}),!1):(m(e),!0))}function y(e){67===e.keyCode&&e.ctrlKey&&s({type:"textselectcopy",toolEvent:e})}function b(e){return!!a.prmt||(s({type:i===tn.Selection?"selectstart":"zoomareastart",x:e.clientX,y:e.clientY,toolEvent:e}),(o=Kt(e.target))._binds={mousemove:x,mouseup:w,ondrag:K},o.on(o._binds),!1)}function x(e){return e=null==e?event:e,!!a.prpt||(0!==e.which?(s({type:i===tn.Selection?"selectmove":"zoomareamove",x:e.clientX,y:e.clientY,toolEvent:e}),!1):void w())}function w(e){if(!a.prpt)return o.off(o._binds),o=null,s({type:i===tn.Selection?"selectend":"zoomareaend",toolEvent:e}),!1}function _(e){return e=null==e?event:e,O(e)}function z(){}function P(e){return e=null==e?event:e,I(e)}function T(e){return 2===(e=null==e?event:e).button?j(e):L(e),V(e)}function D(e){return e=null==e?event:e,A(e)}function k(e){return e=null==e?event:e,H(e)}function C(){O=i===tn.PassThrough?$:K,I=n===tn.PassThrough?$:K,H=A=j=L=V=$}function E(){}function M(){}function F(){}function S(){}C(),e.events={viewport:{click:_,dblclick:z,mousedown:T,mousemove:D,mouseout:E,mouseover:M,mouseup:F,contextmenu:P,mousewheel:S,keydown:k}},en.Features.Touch&&Kt.extend(!0,e.events,{viewport:{touchstart:U,touchmove:q,touchend:W},wdv:{annotationdrawstart:r,annotationdrawend:u,annotationdragstart:r,annotationdragend:u}}),e.dispose=function(){a&&(a=null),l&&(l=null),e=null},e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=s,e.setTool=function(e,t){switch(i=e,n=t,C(),i){case tn.None:O=K;break;case tn.Pan:L=d;break;case tn.ZoomIn:O=R;break;case tn.ZoomOut:O=B;break;case tn.Selection:case tn.ZoomArea:L=b;break;case tn.PassThrough:break;case tn.Text:L=p,A=g,H=y}switch(n){case tn.None:break;case tn.Pan:j=d;break;case tn.ZoomIn:I=R;break;case tn.ZoomOut:I=B;break;case tn.Selection:case tn.ZoomArea:j=b;break;case tn.PassThrough:}},e.getTool=function(){return{primary:i,secondary:n}},e.pauseTool=function(){a.prpt++},e.resumeTool=function(){0<a.prpt&&a.prpt--};var A=function(){},O=function(){},I=function(){},V=function(){},L=function(){},j=function(){},H=function(){};function R(e){if(!a.prpt)return N(e,!1),!1}function B(e){if(!a.prpt)return N(e,!0),!1}function N(e,t){if(!a.prpt)return s({type:"clickzoom",x:e.clientX,y:e.clientY,zoomout:t}),!1}function U(e){var t;a.prpt||a.drawing||a.pinching||Kt(e.target).is(".ui-menu,.ui-menu-item,.ui-corner-all")||(e.preventDefault(),2===(a.e=e).originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(o)if(null==t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches)?(Y(),a.touching=!1,function(e){if(!a.prpt){e.stopPropagation(),a.pinching=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1];l={start:Q(t.clientX,t.clientY,n.clientX,n.clientY)},s({type:"zoomstart",touches:e.originalEvent.touches})}}(e)):i===tn.Text?p(e):1===e.originalEvent.touches.length&&(a.touching=!0,a.point.x=e.originalEvent.touches[0].pageX,a.point.y=e.originalEvent.touches[0].pageY,a.hold=setTimeout(X,1500),t={x:a.point.x,y:a.point.y},i===tn.Pan&&(t.type="panstart",s(t))))}function q(e){var t;if(!a.prpt&&!a.drawing)if(e.preventDefault(),a.e=e,a.pinching)!function(e){if(!a.prpt&&(e.stopPropagation(),!a.zooming)){a.zooming=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1],o=Q(t.clientX,t.clientY,n.clientX,n.clientY,l.start),i=o.x/l.start.x,r=o.y/l.start.y;setTimeout(c,40),s({type:"zoommove",touches:e.originalEvent.touches,scale:i,scalex:i,scaley:r,dx:o.dx,dy:o.dy})}}(e);else if(a.touching){var n=e.originalEvent.touches[0];a.moves++,a.touching=!0,t={x:n.pageX,y:n.pageY},i===tn.Pan&&(t.type="panmove",s(t))}else a.textselection&&g(e)}function W(e){var t,n,o;a.prpt||a.drawing||(e.preventDefault(),a.pinching?(o=e,a.prpt||(o.stopPropagation(),a.pinching=!1,s({type:"zoomend",touches:o.originalEvent.touches}),1===o.originalEvent.touches.length&&U(o))):a.textselection?m(e):(a.touching=!1,Y(),0<a.moves?(a.moves=0,n={},i===tn.Pan&&(n.type="panend",s(n))):a.tapped?((t=e).type="fit",s(t)):(a.tapped=!0,setTimeout(Z,300))))}function Z(){a.tapped=!1}function X(){if(0<a.moves&&null!=a.e){var e=G(a.e);Math.abs(a.point.x-e.x)<5&&Math.abs(a.point.y-e.y)<5&&(a.moves=0)}0===a.moves&&a.touching&&s({x:a.point.x,y:a.point.y,type:"contextmenu"})}function Y(){null!=a.hold&&(clearTimeout(a.hold),a.hold=null)}return e},xn=function(e,t,n,o,i){var r=this,a=e,l=t,s=(t?t._internalEvents:null)||Kt({}),c=50,u=n,d=o,h=u.parents("."+a.domclasses.atala_main_container).first(),f=tn.Pan,p=tn.None,g=null,m=1,v="",y=null,b="",x=[],w=1e3,_=null,z=-1,P=null,T={allowflick:!0,text:{scrolltriggerarea:an.Normal,innerscrolldelta:10,outerscrolldelta:20}};
/**
   * Internal events for conditional input handling.
   */
r.events=D;var D={textselectstart:"textselectstart",textselectmove:"textselectmove",textselectend:"textselectend",textselectcopy:"textselectcopy"};function k(){return s.trigger.apply(s,arguments),r}function C(e,t){switch(g.setTool(e,t),n=e,o=t,f!==tn.Text&&p!==tn.Text||n===tn.Text||o===tn.Text||l.resetDrawLayer(),n!==tn.Selection&&n!==tn.ZoomArea&&(f=n),o!==tn.Selection&&o!==tn.ZoomArea&&(p=o),e){case tn.None:E(Re.Arrow);break;case tn.Pan:E(Re.Move);break;case tn.ZoomIn:E(Re.ZoomIn);break;case tn.ZoomOut:E(Re.ZoomOut);break;case tn.Selection:if(!a.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,E(Re.Crosshair);break;case tn.ZoomArea:if(!a.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,E(Re.Crosshair);break;case tn.Text:if(!a.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),E(Re.Text);break;default:E(Re.Arrow)}var n,o}function E(e){var t=""===v?"?atalacsr=":v;y="%2"===e?y=b:e.replace("%1",t),u.css({cursor:y})}function M(e){a.fit(e.fit)}function F(e){e.zoomout?a.zoomOut():a.zoomIn()}function S(e){d.data("ox",d.scrollLeft()+e.x).data("oy",d.scrollTop()+e.y),d.stop()}function A(e){d.scrollLeft(d.data("ox")-e.x),d.scrollTop(d.data("oy")-e.y),T.allowflick&&(x.push({x:e.x,y:e.y,time:(new Date).getTime()}),10<x.length&&x.shift())}function O(){if(T.allowflick){if(1<x.length){var e=(new Date).getTime(),t=x.pop();if(e-t.time<100){var n=x.shift(),o=-n.time+t.time;d.animate({scrollLeft:d.scrollLeft()+Math.round((n.x-t.x)/o*250),scrollTop:d.scrollTop()+Math.round((n.y-t.y)/o*250)},w,"easeOutQuad")}}x.length=0}}function I(e){(_=l.getActivePage())&&_._rubberband.startSelect(e)}function V(e){(_=l.getActivePage())&&_._rubberband.moveSelect(e)}function L(e){(_=l.getActivePage())&&(_._rubberband.endSelect(e),"zoomareaend"===e.type&&(_._rubberband.hide(),_._rubberband.zoomToSelection())),0==--z&&(z=-1,l.resetDrawLayer(),C(f,p))}function j(){l.zoomStart(),m=a.getZoom()}function H(e){var t=m*e.scale;l.zoom(t)}function R(){l.zoomEnd()}function B(e){var t=Y(e);if(t){var n=e.toolEvent&&e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent;if(t.cursor=y,t.complete=!1,t.rectangular=!!n&&n.altKey,t.interval=!!n&&n.shiftKey,!t.rectangular&&!t.interval){var o=n&&n.detail?n.detail%3:1;1!==o&&(t.word=2===o,t.line=0===o)}k({type:D.textselectstart,eventData:t}),e.eventData.handled=t.handled,t.complete&&t.handled&&(U(e),e.eventData.complete=!0)}}function N(e){Z();var t=Y(e);if(t){t.cursor=y,t.selecting=e.eventData.selecting,k({type:D.textselectmove,eventData:t}),e.eventData.handled=t.handled;var n=t.handled&&t.cursor?t.cursor:Re.Arrow;n!==y&&E(n),e.eventData.handled&&e.eventData.selecting&&e.toolEvent&&e.toolEvent.target&&X(e)}}function U(e){Z();var t=Y(e);t&&(k({type:D.textselectend,eventData:t}),e.eventData.handled=t.handled)}function q(e){Z(),X(e)}function W(){T.text.hookcopy&&k({type:D.textselectcopy})}function Z(){P&&(clearTimeout(P),P=null)}function X(e){if(Z(),e&&e.toolEvent){var t=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,n=h.offset(),o=null;if(void 0!==t.pageX&&void 0!==t.pageY?o=t:t.touches&&1===t.touches.length&&void 0!==t.touches[0].pageX&&void 0!==t.touches[0].pageY&&(o=t.touches[0]),o){var i=o.pageX-n.left,r=o.pageY-n.top,a=h.width(),l=h.height(),s=0,u=0;r<l*T.text.scrolltriggerarea&&0<d.scrollTop()?s=0<r?-T.text.innerscrolldelta:-T.text.outerscrolldelta:r>l*(1-T.text.scrolltriggerarea)?s=r<l?T.text.innerscrolldelta:T.text.outerscrolldelta:i<a*T.text.scrolltriggerarea&&0<d.scrollLeft()?u=0<i?-T.text.innerscrolldelta:-T.text.outerscrolldelta:i>a*(1-T.text.scrolltriggerarea)&&(u=i<a?T.text.innerscrolldelta:T.text.outerscrolldelta),(s||u)&&T.text.scrolltriggerarea!==an.None&&(d.scrollTop(d.scrollTop()+s),d.scrollLeft(d.scrollLeft()+u),P=setTimeout(X,c,e))}}}function Y(e){var t={cursor:null,handled:!1};if(e&&e.toolEvent){var n=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,o=function(e){var t=Kt(e).parents("."+a.domclasses.atala_page_div).first();if(t){var n=t.attr(a.domattributes.atala_page_index);return parseInt(n,10)}return null}(n.touches&&1===n.touches.length?document.elementFromPoint(n.touches[0].clientX,n.touches[0].clientY):n.target);if(isFinite(o)&&0<=o){var i=function(e,t){var n=G(e.toolEvent?e.toolEvent:e);if(t&&t._paper){var o=J(t._paper.canvas,t);n.x-=o.left,n.y-=o.top}return n}(e),r=function(e,t){var n=0;if(l._controllers.text){var o=l._controllers.document.getPageText(t);o&&isFinite(o.rotation)&&(n=o.rotation)}var i=l.getViewerTransform(t,n).invert();return{x:i.x(e.x,e.y),y:i.y(e.x,e.y)}}(i,o);Kt.extend(t,{page:o,point:r,viewerPoint:i})}}return t}i&&(Kt.extend(T,i),T.text.scrolltriggerarea=Math.max(0,Math.min(T.text.scrolltriggerarea,.3))),g=new be,u.on(g.events.viewport),g.events.wdv&&a.bind(g.events.wdv),g.bind({clickzoom:F,fit:M,panstart:S,panmove:A,panend:O,zoomstart:j,zoommove:H,zoomend:R,selectstart:I,selectmove:V,selectend:L,zoomareastart:I,zoomareamove:V,zoomareaend:L,textselectstart:B,textselectmove:N,textselectend:U,textselectscroll:q,textselectcopy:W}),r.dispose=function(){g&&g.events&&(g.events.wdv&&a&&a.unbind&&a.unbind(g.events.wdv),g.events.viewport&&u&&u.off&&u.off(g.events.viewport)),x&&0<x.length&&(x.length=0),g&&g.dispose&&g.dispose(),r=a=u=d=null},r.bind=function(){return s.on.apply(s,arguments),r},r.unbind=function(){return s.off.apply(s,arguments),r},r.trigger=k,r.setTool=C,r.__getDebugInfo=function(){var e={};return Kt.extend(!0,e,{cursor:y,custom:b,flick:x,resourcepath:v,flickdelay:w,scroller:d,tool:g,toolcursors:Re,tooltypes:tn,viewport:u,zoom:m}),e},r.getTool=function(){return g.getTool()},r.pauseTool=function(){return g.pauseTool()},r.resumeTool=function(){return g.resumeTool()},r.setCursor=E,r.setCustomCursor=function(e){b=e}},wn=function(e,t,n,o){var m,i,r,a,l,c=3,s=this,u=Kt({}),d=e,v={animated:!1,aspectratio:0,backcolor:"fff",forecolor:"000",movable:!0,multicolor:!0,resizable:!0,showgrips:!1,showmask:!1,showtooltip:!1,visible:!1,x:0,y:0,width:0,height:0},y={
/** Main RubberBand dom object */
rect:null,
/** Dom object underneath Main RubberBand */
rectback:null,
/** Mask objects */
mask:{top:null,bottom:null,left:null,right:null}},b={animating:!1,boundevents:null,changing:!1,colorswap:0,origin:{x:0,y:0},pagesize:{width:0,height:0},pageoffset:{x:0,y:0},vert:!1,horiz:!1,zoom:1},h=o,f=n;function p(){Z(),V()}function g(){Z(),V()}function x(){for(var u=new Array("move","nw","n","ne","w","e","sw","s","se"),i=[],t=[],r=0,a=0,e=0;e<9;e++)i[e]=new s(e),f.append(i[e].grip);function n(){for(var e=0;e<9;e++)!0===t[e]?i[e].show():i[e].hide()}function l(){for(var e=0;e<9;e++)t[e]=!0;t[0]=!0,r<8&&a<8&&(t[1]=!1),(r<12||a<12)&&(t[3]=!1,t[6]=!1),(r<16||a<8)&&(t[2]=!1,t[7]=!1),(a<16||r<8)&&(t[4]=!1,t[5]=!1),n()}function o(){!0===k()?(i[0].grip.onmousedown=H,i[0].grip.style.cursor="move"):(i[0].grip.onmousedown=K,i[0].grip.style.cursor="default");for(var e=1;e<9;e++)!0===E()?(i[e].bind({mousedown:i[e].onResize}),i[e].grip.style.cursor=u[e]+"-resize"):(i[e].off({mousedown:i[e].onResize}),i[e].grip.style.cursor="default")}function s(e){var t,n,o,i=this,r=u[e],a=!1;function l(){"move"!==r&&(!0===v.showgrips?(!0===C()?n.backgroundColor="#"+T():n.backgroundColor="#"+D(),n.border="1px solid #"+D()):(n.backgroundColor="",n.border=""))}function s(){!0===v.showgrips?(n.width="6px",n.height="6px"):(n.width="8px",n.height="8px")}t=document.createElement("div"),n=t.style,(o=Kt(t)).addClass(d.domclasses.atala_tool_selection_grip),l(),s(),i.grip=t,i.dispose=function(){r=n=t=i=null},i.setPos=function(e,t){n.left=e+"px",n.top=t+"px"},i.setSize=function(e,t){!0===M()&&"move"!==r&&(e-=2,t-=2),e<=0&&(e=1),t<=0&&(t=1),n.width=e+"px",n.height=t+"px"},i.hide=function(){a&&(n.visibility="hidden",a=!1)},i.show=function(){a||(n.visibility="visible",a=!0)},i.resetColors=l,i.resetGripSize=s,i.onResize=function(e){return function(e,t){W(e=e||event),b.vert=0,b.horiz=0,b.changing=!0;var n={x:0,y:0};switch(t){case"nw":n.x=v.x+v.width,n.y=v.y+v.height;break;case"n":n.x=v.x,n.y=v.y+v.height,b.vert=1;break;case"ne":n.x=v.x,n.y=v.y+v.height;break;case"w":n.x=v.x+v.width,n.y=v.y+v.height,b.horiz=1;break;case"e":n.x=v.x,n.y=v.y+v.height,b.horiz=1;break;case"sw":n.x=v.x+v.width,n.y=v.y;break;case"s":n.x=v.x,n.y=v.y,b.vert=1;break;case"se":n.x=v.x,n.y=v.y}b.origin.x=Math.round(n.x*b.zoom)+b.pageoffset.x,b.origin.y=Math.round(n.y*b.zoom)+b.pageoffset.y,h.raiseDrawLayer();var o={mousemove:j,mouseup:B};return null!==b.boundevents?Kt.extend(b.boundevents,o):b.boundevents=o,f.bind(o),!1}(e,r)},i.bind=function(){return o.on.apply(o,arguments),o},i.unbind=function(){return o.off.apply(o,arguments),o},n.display="block",n.position="absolute",n.visibility="hidden",n.zIndex=c,t.onclick=K,t.onselectstart=K,t.onselect=K,t.oncontextmenu=K}this.dispose=function(){for(var e=0;e<9;e++)i[e].dispose(),i[e]=null;t=i=u=null},this.setRectangle=function(e,t,n,o){r=n,a=o,i[0].setPos(e,t),i[1].setPos(e-4,t-4),i[3].setPos(e+n-4,t-4),i[6].setPos(e-4,t+o-4),i[8].setPos(e+n-4,t+o-4),i[0].setSize(n,o),v.showgrips?(i[2].setPos(e+Math.round(n/2)-4,t-4),i[4].setPos(e-4,t+Math.round(o/2)-4),i[5].setPos(e+n-4,t+Math.round(o/2)-4),i[7].setPos(e+Math.round(n/2)-4,t+o-4)):(i[2].setPos(e+4,t-4),i[4].setPos(e-4,t+4),i[5].setPos(e+n-4,t+4),i[7].setPos(e+4,t+o-4),i[2].setSize(n-8,8),i[4].setSize(8,o-8),i[5].setSize(8,o-8),i[7].setSize(n-8,8)),l()},this.resetColors=function(){for(var e=0;e<9;e++)i[e].resetColors()},this.resetGrips=function(){for(var e=0;e<9;e++)i[e].resetGripSize(),i[e].resetColors()},this.hide=function(){for(var e=0;e<9;e++)i[e].hide()},this.show=n,this.showGrips=l,(this.resetEvents=o)()}function w(e,t,n,o){var i=Kt("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function _(){var e=w("div");return e.addClass(d.domclasses.atala_tool_selection_band),e.css({position:"absolute",zIndex:c}),e}function z(){var e=w("div");return e.addClass(d.domclasses.atala_tool_selection_mask),e.hide(),e.css({left:"0px",top:"0px",width:"1px",height:"1px",position:"absolute",background:"#000",opacity:"0.6",zIndex:"0"}),e}function P(){return v.animated}function T(){return v.backcolor}function D(){return v.forecolor}function k(){return v.movable}function C(){return v.multicolor}function E(){return v.resizable}function M(){return v.showgrips}function F(){return u.trigger.apply(u,arguments),s}function S(){y.mask.left.hide(),y.mask.right.hide(),y.mask.top.hide(),y.mask.bottom.hide()}function A(){i.css({left:(v.x+v.width)*b.zoom+8+"px",top:(v.y+v.height)*b.zoom+4+"px"}),i.text(Math.round(v.width/b.zoom)+"x"+Math.round(v.height/b.zoom)),i.is(":hidden")&&i.show()}function O(){v.visible=!0,y.rectback.show(),y.rect.show(),!0===P()&&!0===C()&&function e(){!0===v.animated&&0===b.colorswap?(y.rect.css("border","1px dashed #"+T()),y.rectback.css("border","1px solid #"+D()),b.colorswap=1):(y.rect.css("border","1px dashed #"+D()),y.rectback.css("border","1px solid #"+T()),b.colorswap=0),!0!==v.animated||y.rect.is(":hidden")||b.animating||(b.animating=setTimeout(function(){b.animating=!1,e()},250))}()}function I(){v.visible=!1,S(),m.hide(),y.rectback.hide(),y.rect.hide()}function V(){var e=v.x,t=v.y,n=b.pagesize.width,o=b.pagesize.height;(n<=e||e+v.width>n)&&(e=n-v.width)<0&&(e=0),(o<=t||t+v.height>o)&&(t=o-v.height)<0&&(t=0),e!==v.x&&(v.x=e),t!==v.y&&(v.y=t);var i,r,a,l,s,u,c,d,h=Math.round(v.x*b.zoom),f=Math.round(v.y*b.zoom),p=Math.round(v.width*b.zoom),g=Math.round(v.height*b.zoom);i=h,r=f,y.rectback.css({left:i+"px",top:r+"px"}),y.rect.css({left:i+"px",top:r+"px"}),d=g,0===(c=p)&&(c=1),y.rectback.css({width:c+"px",height:d+"px"}),y.rect.css({width:c+"px",height:d+"px"}),m.setRectangle(h,f,p,g),v.visible?(O(),a=h,l=f,s=p,u=g,v.showmask?(0<l?(y.mask.top.css({left:b.pageoffset.x,top:b.pageoffset.y,width:q(),height:l}),y.mask.top.show()):y.mask.top.hide(),l+u<U()?(y.mask.bottom.css({left:b.pageoffset.x,top:b.pageoffset.y+l+u,width:q(),height:U()-(l+u)}),y.mask.bottom.show()):y.mask.bottom.hide(),0<a?(y.mask.left.css({left:b.pageoffset.x,top:b.pageoffset.y+l,width:a,height:u}),y.mask.left.show()):y.mask.left.hide(),a+s<q()?(y.mask.right.css({left:b.pageoffset.x+a+s,top:b.pageoffset.y+l,width:q()-(a+s),height:u}),y.mask.right.show()):y.mask.right.hide()):S()):I()}function L(e,t){e.stopPropagation(),e.preventDefault();var n=t||N(e),o=Math.round(b.origin.x/b.zoom),i=Math.round(b.origin.y/b.zoom),r=Math.abs((n.x-b.origin.x)/b.zoom),a=Math.abs((n.y-b.origin.y)/b.zoom);return 0<v.aspectratio&&(Math.abs((n.y-b.origin.y)/(n.x-b.origin.x))>1/v.aspectratio&&0===b.horiz||1===b.vert?r=Math.round(a*v.aspectratio):a=Math.round(r/v.aspectratio)),n.x<b.origin.x?(o-=r)-b.pageoffset.x<0&&(r=b.origin.x-b.pageoffset.x,0<v.aspectratio&&(a=Math.round(r/v.aspectratio)),o=b.origin.x-r):o+r>b.pagesize.width+b.pageoffset.x&&(r=b.pagesize.width-o+b.pageoffset.x,0<v.aspectratio&&(a=Math.round(r/v.aspectratio))),n.y<b.origin.y?(i-=a)-b.pageoffset.y<0&&(a=b.origin.y-b.pageoffset.y,0<v.aspectratio&&(r=Math.round(a*v.aspectratio)),i=b.origin.y-a,n.x<b.origin.x&&(o=b.origin.x-r)):i+a>b.pagesize.height+b.pageoffset.y&&(a=b.pagesize.height-i+b.pageoffset.y,0<v.aspectratio&&(r=Math.round(a*v.aspectratio)),n.x<b.origin.x&&(o=b.origin.x-r)),(0===b.vert||0<v.aspectratio)&&(v.x=o-b.pageoffset.x,v.width=r),(0===b.horiz||0<v.aspectratio)&&(v.y=i-b.pageoffset.y,v.height=a),V(),!0===v.showtooltip&&A(),!1}function j(e){return L(e,G(e,null,!0))}function H(e){W(e=e||event);var t=X(e);b.origin.x=t.x-Math.round(v.x*b.zoom),b.origin.y=t.y-Math.round(v.y*b.zoom),b.changing=!0;var n={mousemove:R,mouseup:B,ondrag:K};return null!==b.boundevents?Kt.extend(b.boundevents,n):b.boundevents=n,f.bind(n),!1}function R(e){W(e=e||event);var t=X(e),n={x:0,y:0};return n.x=Math.round((t.x-b.origin.x)/b.zoom),n.y=Math.round((t.y-b.origin.y)/b.zoom),n.x>b.pagesize.width-v.width&&(n.x=b.pagesize.width-v.width),n.x<0&&(n.x=0),n.y>b.pagesize.height-v.height&&(n.y=b.pagesize.height-v.height),n.y<0&&(n.y=0),v.x=n.x,v.y=n.y,V(),!1}function B(e){return W(e=e||event),!(b.changing=!1)===v.showtooltip&&i.hide(),b.changing&&(b.changing=!1,F("changed")),null!==b.boundevents&&(f.unbind(b.boundevents),b.boundevents=null,h.resetDrawLayer()),!1}function N(e){var t=G(e.toolEvent?e.toolEvent:e);if(f._paper){var n=J(f._paper.canvas,f);t.x-=n.left,t.y-=n.top}return t}function U(){return Math.round(b.pagesize.height*b.zoom)}function q(){return Math.round(b.pagesize.width*b.zoom)}function W(e){void 0!==e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Z(){var e=f._img.getSize();b.zoom=f._img.getFitZoom(),b.pagesize.width=e.width,b.pagesize.height=e.height}return s.dispose=function(){null!=m&&(m.dispose(),m=null),s=null,y.rect=null,y.rectback=null,i=null,y.mask.top=null,y.mask.bottom=null,y.mask.left=null,y.mask.right=null},s.getAnimated=P,s.getAspectRatio=function(){return v.aspectratio},s.getBackColor=T,s.getForeColor=D,s.getHeight=function(){return v.height},s.getMovable=k,s.getMultiColor=C,s.getPosition=function(){return{x:v.x,y:v.y}},s.getRectangle=function(){return{x:v.x,y:v.y,width:v.width,height:v.height}},s.getResizable=E,s.getShowGrips=M,s.getShowMask=function(){return v.showmask},s.getShowTooltip=function(){return v.showtooltip},s.getSize=function(){return{width:v.width,height:v.height}},s.getVisible=function(){return v.visible},s.getWidth=function(){return v.width},s.bind=function(){return u.on.apply(u,arguments),s},s.hide=I,s.reset=function(){I(),v.x=0,v.y=0,v.width=0,v.height=0},s.show=O,s.synchronize=function(){V()},s.trigger=F,s.unbind=function(){return u.off.apply(u,arguments),s},s.zoomToSelection=function(){var e=h.getMaxZoom();if(d.getZoom()<e){var t,n=h.getViewportSize(),o=f._img.getFitMultiplier(),i=1,r=0,a=0;t=n.width/v.width==n.height/v.height?Math.min(n.width/(v.width*o),n.height/(v.height*o),e):n.width/v.width<n.height/v.height?Math.min(n.width/(v.width*o),e):Math.min(n.height/(v.height*o),e),i=o*t,r=Math.round(v.x*i),a=Math.round(v.y*i),a-=Math.max(0,Math.round((n.height-v.height*i)/2)),r-=Math.max(0,Math.round((n.width-v.width*i)/2));var l=h.getPageOffsets(f._index,null,null,t);d.zoom(t,function(){d.scrollTo(l.width+r,l.height+a)})}},s.startSelect=function(e){e.stopPropagation(),e.preventDefault(),Z();var t=N(e);return O(),b.origin.x=t.x,b.origin.y=t.y,v.x=Math.round(t.x/b.zoom),v.y=Math.round(t.y/b.zoom),v.width=1,v.height=1,b.changing=!0,b.vert=0,b.horiz=0,V(),!0===v.showtooltip&&A(),!1},s.moveSelect=L,s.endSelect=B,t&&Kt.extend(!0,v,t),y.rect=_(),y.rectback=_(),y.mask.top=z(),y.mask.bottom=z(),y.mask.left=z(),y.mask.right=z(),(i=w("div")).addClass(d.domclasses.atala_tool_selection_tooltip),i.hide(),i.css({fontFamily:"Arial, helvetica, san-serif",fontSize:"8pt",padding:"1px",backgroundColor:"#FFFFE1",border:"1px solid #000000",position:"absolute",zIndex:999}),f.append(y.rectback),f.append(y.rect),f.append(i),f.append(y.mask.top),f.append(y.mask.bottom),f.append(y.mask.left),f.append(y.mask.right),m=new x,r=v.multicolor?"dashed":"solid",a="1px solid #"+v.backcolor,l="1px "+r+" #"+v.forecolor,y.rectback.css("border",a),y.rect.css("border",l),m.resetColors(),v.visible?O():I(),f.bind({pageresize:p,pagezoom:g}),s};function _n(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var zn={instanceCounter:0},Qe=function(e,o){if(!un({checkjQueryOnly:!0,checkRaphael:!1,checkClipboard:!1}))return null;var t,n,i,u={typeOf:e.type||"Atalasoft.Controls.WebDocumentViewer"},k="Atalasoft.Controls.WebDocumentThumbnailer"===u.typeOf,s="",C=150,c=500,b="atala-ui-icon",r=document.createElement("div"),a=Kt({}),l=Kt({}),d=new hn({get:function(){return u},isInitialized:Bt,switchDocument:zt,closeDocument:Pt}),x={
/** Main outer object that holds the scrollbars */
main:null,
/** Toolbar wrapper object */
toolbar:null,
/** Inner object that controls scrolling */
scroller:null,
/** Inner object that defines the viewable area */
viewport:null,
/** Inner content container object */
content:null,
/** Inner horizontal scroll bar object */
scrollH:null,
/** Inner vertical scroll bar object */
scrollV:null,
/** Edge objects of viewable area */
edges:[],
/** Image objects already requested */
loadedImgs:[],
/** Page wrapper objects recycle pool */
pageDivs:[],
/** Span tag containing the page number */
pageLabel:null,
/** Status div */
status:null,
/** Upload control*/
uploadCtrl:null},E={annotations:null,document:null,forms:null,mouseTool:null,memory:null,text:null,upload:null},M={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},F={prpr:0,batchoperation:0,loading:!1,zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0},h={
/**
     * @typedef {Object} Request
     * @property {string} method - The request HTTP method.
     * @property {Object} data - The request parameters that will be send to server.
     * @property {string} type - The request type identifier.
     * Supported request types are:
     *
     * |Identifier| Description|
     * | ----- | ------- |
     * |`docinfo` | Document info request. Maps to `DocumentInfoRequested` server event.|
     * |`docpage` | Document page request. Could be issued multiple times - it's expected that page will be served from browser cache for the same query. Maps to `ImageRequested` server event.|
     * |`docsave` | Document save request. Maps to `DocumentSave` server event.|
     * |`annodata` | Annotation data request. Maps to `AnnotationDataRequested` server event.|
     * |`formdata` | Forms data request. Maps to `PdfFormRequested` server event.|
     * |`pagetextdata` | Maps to `PageTextRequested` server event.|
     * |`fileupload`| User file upload. Maps to `FileUpload` and `FileUploaded` server events.|
     */
/**
     * @typedef {Object} DocumentInfo
     * @property {number} count - The document pages count.
     * @property {number} dpi - The document pages dpi.
     * @property {Object} size - The document pages size.
     * @property {number} size.height - The document pages height.
     * @property {number} size.width - The document pages width.
     * @property {boolean} vector - Flag indicating whether or not document is vector graphic.
     */
/**
     * @typedef {Object} UploadFileInfo - The upload file information structure.
     * @property {string} filename - Name of the file for upload.
     * @property {number} size - Size of the file for upload in bytes.
     * @property {boolean} cancel - Flag indicating whether or not upload should be canceled by the client.
     */
/**
     * @typedef {Object} UploadFileErrorInfo - The upload error information structure.
     * @property {string} filename - Name of the file for upload.
     * @property {string} error - Error message contains the cause why file upload has failed.
     * @property {boolean} canceled - Flag indicating whether or not upload was canceled by the client or server.
     * @property {Object} event.customData - The event customer data from server. This property is set in case when error has occurred on server or file was rejected on server-side.
     */
/**
     * @typedef {Object} UploadingFileInfo - The uploading file information structure.
     * @property {string} filename - Name of the file for upload.
     * @property {number} uploadedbytes - Uploaded bytes count.
     * @property {number} totalbytes - Total bytes count.
     * @property {boolean} cancel - Flag indicating whether or not upload should be canceled by the client.
     */
/**
     * @typedef {Object} UploadStartInfo - The upload start information structure.
     * @property {boolean} cancel - Flag indicating whether or not upload should be canceled by the client.
     */
/**
     * Callback signature for
     * @callback BeforeHandlerRequestCallback {@link Atalasoft.Controls.WebDocumentViewer#event:beforehandlerrequest} event.
     * @param {Object} event - The event object.
     * @param {Request} event.request - The request object.
     */
/**
     * Triggers before a request is sent to the server.
     * @event Atalasoft.Controls.WebDocumentViewer#beforehandlerrequest
     * @type {BeforeHandlerRequestCallback}
     * @param {Object} event - The event object.
     * @param {Request} event.request - The request object.
     *
     * This event could be used to override or extend request parameters which is exposed through `event.request.data`.
     * Requests could be distinguished using `event.request.type` field. For supported request types see {@link Request} structure.
     */
beforehandlerrequest:null,
/**
     *  Triggers when the document info has changed, usually after a new document is opened.
     *  @event Atalasoft.Controls.WebDocumentViewer#documentinfochanged
     *  @param {Object} event - The event object.
     *  @param {DocumentInfo} event.info - The event document info.
     *  @param {Object} event.customData - The event customer data from server.
     */
documentinfochanged:null,
/** Triggers when the document is done loading.
     * @event Atalasoft.Controls.WebDocumentViewer#documentloaded
     * @param {Object} event - The event object.
     * @param {Object} event.customData - The event customer data from server.
     */
documentloaded:null,
/**
     * Triggers when viewer has been activated by another thumbnailer or reactivated by the same thumbnailer with changed document data.
     * @event Atalasoft.Controls.WebDocumentViewer#activedocumentchanged
     * @type {NotificationCallback}
     */
activedocumentchanged:null,
/** Triggers after a response from the server while saving the document.
     * @event Atalasoft.Controls.WebDocumentViewer#documentsaved
     * @param {Object} event - The event object.
     * @param {boolean} event.success - Flag indicating whether or not save were successful.
     * @param {string} event.fileName - File path to the saved file. By default it represents a path to the file relative to application path. However, if 'DocumentStream' property  was initialized or 'PreventDefaultSaving' flag is used on server-side, then this property contains a value of 'DocumentStreamName' property.
     * @param {Object} event.customData - The event customer data from server.
     */
documentsaved:null,
/**
     * Triggers when the document has been unloaded from the control.
     * @event Atalasoft.Controls.WebDocumentViewer#documentunloaded
     * @type {NotificationCallback}
     */
documentunloaded:null,
/**
     * Callback signature for {@link Atalasoft.Controls.WebDocumentViewer#event:error} event.
     * @callback ErrorCallback
     * @param {Object} event - The event object.
     * @param {string} event.name - The error type identifier.
     * @param {string} event.message - The error clarification message.
     */
/** Triggers when the control has encountered and error. Populated keys: e.name, e.message
     * @event Atalasoft.Controls.WebDocumentViewer#error
     * @param {Object} event - The event object.
     * @param {string} event.name - The error type identifier.
     * @param {string} event.message - The error clarification message.
     * @type {ErrorCallback}
     */
error:null,
/** Triggers when the control has completed asynchronous initialization.
     *
     * Asynchronous initialization happens when some dependent scripts are not included to web page and control trying to load them on background.
     * In case of synchronous initialization, this event won't be fired. {@link Atalasoft.Controls.WebDocumentViewer#isReady| isReady} method could be used after construction to check whether control is initialized.
     * @event Atalasoft.Controls.WebDocumentViewer#initialized
     * @type {NotificationCallback}
     */
initialized:null,
/**
     * Triggers when the page number has changed. Populated keys: e.number
     * @event Atalasoft.Controls.WebDocumentViewer#pagenumberchanged
     * @param {Object} event - The event object.
     */
pagenumberchanged:null,
/** Triggers when the control has recycled a pageDiv object.
     * @event Atalasoft.Controls.WebDocumentViewer#pagerecycled
     * @param {Object} event - The event object.
     * @param {number} event.index - Index of the recycled page.
     */
pagerecycled:null,
/**
     * Triggers when the control has resized a pageDiv object.
     * @event Atalasoft.Controls.WebDocumentViewer#pageresize
     * @param {Object} event - The event object.
     * @param {number} event.index - Index of the resized page.
     * @param {number} event.width - Width of the page after resize.
     * @param {number} event.height - Height of the recycled page.
     */
pageresize:null,
/** Triggers when the control has shown a page in the viewable area.
     * @event Atalasoft.Controls.WebDocumentViewer#pageshown
     * @param {Object} event - The event object.
     * @param {number} event.index - Index of the page.
     */
pageshown:null,
/** Triggers when the page size returned from the server is different than expected. The expected page size is the size returned from server along with other document info.
     * @event Atalasoft.Controls.WebDocumentViewer#pagesizechanged
     * @param {Object} event - The event object.
     * @param {number} event.index - Index of the resized page.
     * @param {number} event.width - Width of the page after resize.
     * @param {number} event.height - Height of the recycled page.
     * @param {number} event.dx - Difference with the previous(expected) page width. Scaled images are compared.
     * @param {number} event.dy - Difference with the previous(expected) page height. Scaled images are compared.
     */
pagesizechanged:null,
/** Triggers for every pixel movement registered by the scrollable area.
     * @event Atalasoft.Controls.WebDocumentViewer#scroll
     * @param {Object} event - The event object.
     * @param {number} event.x - Horizontal scroll position.
     * @param {number} event.y - Vertical scroll position.
     * @param {number} event.dx - Distance scrolled horizontally.
     * @param {number} event.dy - Distance scrolled vertically.
     */
scroll:null,
/** Triggers when dependencies have finished loading.
     * @event Atalasoft.Controls.WebDocumentViewer#scriptsloaded
     * @type {NotificationCallback}
     */
scriptsloaded:null,
/** Triggers when the control has updated the status bar.
     * @event Atalasoft.Controls.WebDocumentViewer#statusmessage
     * @param {Object} event - The event object.
     * @param {string} event.message - The status message.
     */
statusmessage:null,
/** Triggers when a zoom operation has been started.
     * @event Atalasoft.Controls.WebDocumentViewer#zoomstarted
     * @type {NotificationCallback}
     */
zoomstarted:null,
/** Triggers when the zoom level of the control has changed.
     * @event Atalasoft.Controls.WebDocumentViewer#zoomchanged
     * @param {Object} event - The event object.
     * @param {number} zoom - Current document zoom value.
     */
zoomchanged:null,
/**
     * Triggers when file upload is started
     * @event Atalasoft.Controls.WebDocumentViewer#fileuploadstarted
     * @param {Object} event - The event object.
     * @param {UploadFileInfo} event.fileinfo - The file information.
     */
fileuploadstarted:null,
/**
     * Triggers when file upload has failed or was canceled.
     * @event Atalasoft.Controls.WebDocumentViewer#fileuploaderror
     * @param {Object} event - The event object.
     * @param {UploadFileErrorInfo} event.errorinfo - The error information.
     */
fileuploaderror:null,
/**
     * Triggers when file upload has finished successfully.
     * @event Atalasoft.Controls.WebDocumentViewer#fileuploadfinished
     * @param {Object} event - The event object.
     * @param {string} event.filename - Name of the file for upload.
     * @param {string} event.filepath - Relative path on server to the uploaded file.
     * @param {Object} event.customData - The event customer data from server.
     */
fileuploadfinished:null,
/**
     * Triggers during file upload process. Can be used to track upload progress.
     * @event Atalasoft.Controls.WebDocumentViewer#fileuploading
     * @param {Object} event - The event object.
     * @param {UploadingFileInfo} event.uploadinfo - The progress information.
     */
fileuploading:null,
/**
     * Triggers when the files upload is started.
     * @event Atalasoft.Controls.WebDocumentViewer#uploadstarted
     * @param {Object} event - The event object.
     * @param {UploadStartInfo} event.info - The upload information.
     */
uploadstarted:null,
/**
     * Triggers when the files upload is finished
     * @event Atalasoft.Controls.WebDocumentViewer#uploadfinished
     * @param {Object} event - The event object.
     * @param {boolean} event.success - Flag indicating whether or not upload was completed without errors.
     * @param {boolean} event.canceled - Flag indicating whether or not upload was canceled.
     */
uploadfinished:null,
/**
     * Triggers when the file added to upload files through UI controls.
     * @event Atalasoft.Controls.WebDocumentViewer#fileaddedtoupload
     * @param {object} event - The event object.
     * @param {string} event.filename - Name of the file for upload.
     * @param {Atalasoft.Utils.FileUploadRejectReason} event.reason - The reason of why file was rejected from the adding to upload.
     * @param {boolean} event.success - Flag indicating whether or not file has passed filtering.
     */
fileaddedtoupload:null},S={
/**
     * @property {boolean} [allowannotations=false] - Turns annotation support on or off.
     * This affects both UI annotations toolbar appearance and corresponding API methods behavior.
     * If set to `false`, {@link Atalasoft.Controls.WebDocumentViewer#annotations|WebDocumentViewer.annotations} will be set to `null` and annotation-related methods of {@link Atalasoft.Controls.WebDocumentViewer |WebDocumentViewer} will throw errors.
     */
allowannotations:!1,
/**
     * @property {boolean} [allowflick=true] - Turns flick scrolling support on or off.
     */
allowflick:!0,
/**
     * @property {boolean} [allowforms=false] - Turns forms support on or off.
     */
allowforms:!1,
/**
     * @property {boolean} [allowtext=false] - Turns text selection support on or off.
     */
allowtext:!1,
/**
     * @property {AnnotationsConfig} [annotations] - Annotations specific config options, including predefined configurations for particular annotation types.
     */
annotations:{
/**
       * Represents default configuration for various types of annotations.
       * @typedef {Object} AnnotationsConfig
       * @property {AnnotationData[]} [defaults] - Pre defined annotations to be drawn with the mouse.
       * @property {AnnotationData[]} [stamps] - Pre defined stamp annotations to be drawn with the mouse.
       * @property {AnnotationData[]} [images] - Pre defined image annotations to be drawn with the mouse.
       * @property {boolean} [saveusername] - Indicates whether the server handler will save the username property when saving all
       */
/**
       * Predefined annotations to be drawn with the mouse.
       */
defaults:null,
/**
       * Predefined stamp annotations to be drawn with the mouse.
       */
stamps:null,
/**
       * Pre defined image annotations to be drawn with the mouse.
       */
images:null,
/**
       * Indicates whether the server handler will save the username property when saving all annotations.
       */
saveusername:!1},
/**
     * @property {number} [columns] - Number of columns to show when displaying tabular pages, -1 is automatic. */
columns:-1,
/** @property {Atalasoft.Utils.ScrollDirection} [direction = Vertical] - Scroll direction of the viewer.
     *
     * i.e. controls whether document pages positioned in vertical or horizontal direction.
     */
direction:nn.Vertical,
/**
     * @property {string} [documenturl] - Identifier of the document (that is on the server) to be displayed when the document is first opened.
     *
     * By default `documenturl` is treated as an url to the image file on server. Application could customize server behavior and in this case `documenturl` could contain arbitrary string.
     * If this parameter is specified, document will be opened right after viewer initialization completes. Otherwise document should be opened using {@link Atalasoft.Controls.WebDocumentViewer.openUrl | openUrl} method.
     *
     * This property on the {@link Atalasoft.Controls.WebDocumentViewer#config|viewer.config} is updated internally each time new document is opened.
     */
documenturl:"",
/**
     *  @property {string} [annotationsurl] Identifier of the annotation data (an .xmp file on the server) that should be displayed along with the displayed document.
     *
     *  By default `annotationsurl` is treated as an url to the serialized annotations data file on server(usually .xmp). Application could customize server behavior and in this case `annotationsurl` could contain arbitrary string.
     *
     *  This property on the {@link Atalasoft.Controls.WebDocumentViewer#config|viewer.config} is updated internally each time new document is opened.
     */
annotationsurl:"",
/**
     * @property {string} [formurl] - Identifier of the annotation data PDF form data (.pdf file on the server) that should be displayed along with the displayed document.
     *
     * In most cases this option should be omitted, so forms will be loaded from the PDF document specified by {@link WebDocumentViewerConfig.documenturl | documenturl}
     *
     * This property on the {@link Atalasoft.Controls.WebDocumentViewer#config|viewer.config} is updated internally each time new document is opened.
     */
formurl:"",
/**
     * @property {Atalasoft.Utils.Fitting} [fitting = Width] - Specifies the initial page image fit when document is opened in the viewer.
     *
     * Usually it makes sense to set initial fit to viewer width for vertical scrolling {@link WebDocumentViewerConfig.direction|direction} and to height for horizontal.
     */
fitting:on.Width,
/**
     * @property {boolean} [forcepagefit=false] - Specifies whether document pages should be unified basing on the expected document page size.
     *
     * Expected page size is sent by server when opening new document. By default it's the size of the first page in document, but any values could be provided when default behavior is overridden by application.
     *
     * It's recommended to set this option to `true` for most documents.
     *
     * Setting this property to true have following benefits:
     * - Pages looks similar even for documents containing pages with having different sizes(or different DPI). Aspect ratio is preserved when calculating unification zoom ratio, so pages are not completely same. But in most cases they would have same width or height.
     *
     * - Pages are requested on demand, so size of each individual page is not known util it's loaded from server. Thus when pages having different sizes are inserted into DOM, their sizes are different from expected. This would cause resizing of the DOM elements and thus cause visual shifts of the images. Especially such effect could be noticeable on big images, when rendering and load time is bigger then usual.
     *
     * Setting this option to false is helpful when document having pages both "small" and "big" pages and those pages should be displayed as is, without additional zoom. For example, when driver license and scanned pages are displayed as a single document.
     */
forcepagefit:!1,
/**
     * @property [forcepagesize] - Allows a custom page size to be used for force fitting all pages to. Ignored if forcepagefit is false.
     * @private
     */
forcepagesize:{height:-1,width:-1},
/**
     *  @property {boolean} [jpeg=false] - Allows page images to be returned as jpeg instead of png.
     */
jpeg:!1,
/**
     *  @property {number} [maxwidth=3000] - Specifies the maximum amount of pixel width allowed for zooming in.
     *
     *  This property is intended to limit size of the images data transferred over the wire on big zoom values.
     */
maxwidth:3e3,
/**
     *  @property {number} [memorythreshold=500000000] - Maximum number of bytes in memory before larger memory objects are recycled.
     *
     *  DOM image objects are cached internally. This option allows to control memory usage on the browser page. Note, that estimated image sizes are not exactly match actual values - estimation is based on the expected document images color format and size. So actual memory usage in browser process could differ from the configured value.
     */
memorythreshold:5e8,
/**
     *  @property {number} [minwidth=150] - Specifies the minimum amount of pixel width allowed for zooming out.
     */
minwidth:150,
/**
     *  @property {number} [pageborderwidth=1] - Specifies the pixel border width around each page in a document.
     *  */
pageborderwidth:1,
/**
     * @property {number} [pagebuffersize] - The number of pages to keep in memory while scrolling. Negative values will automatically calculate the optimal number based on available screen space. Values lower than can be displayed will be ignored, and higher values will cause a degradation in performance. */
pagebuffersize:-1,
/**
     *  @property {number} [pagespacing=4] - Specifies the distance (in pixels) between pages displayed.
     */
pagespacing:4,
/**
     * @property {Atalasoft.Utils.PageSelection} [pageselectlocation] - Specifies the location to determine the current page number.
     *
     * Current page number is displayed on the document toolbar, and also current page is used in some operation in default UI, like page rotation is applied to the current page or in {@link Atalasoft.Controls.WebDocumentViewer.next | next}, {@link Atalasoft.Controls.WebDocumentViewer.previous | previous}, {@link Atalasoft.Controls.WebDocumentViewer.showPage | showPage} methods.
     */
pageselectlocation:Kt.extend({},rn.TopLeft),
/**
     * @property {Object} parent - jQuery object that the control will contain the control. */
parent:null,
/** @property {number} [rows] - Number of rows to show when displaying tabular pages, -1 is automatic.
     * @deprecated tabular horizontal layout is not consistent with horizontal scrolling and will be removed. Use tabular layout with vertical scrolling and columns configuration. The value of this property will be ignored.
     * @ignore
     */
rows:-1,
/**
     * @property {string} [savefileformat] - Specifies the default file format for the document that will be used when saving multipage document to the server.
     *
     * The following formats are supported: pdf, tiff (or tif), jpeg (or jpg), png, bmp, tga, pcx, psd, tla, wbmp, emf, wmf.
     *
     * If set, this value is used when document save is performed using default UI or when {@link Atalasoft.Controls.WebDocumentViewer.save | save} is called without save format parameter passed.
     *
     * If not specified, document is saved in it's own format. Note that it's not possible to save multipage documents(for example when document pages was added using JavaScript API) to the single page image format by default. Server behavior on save could be highly customized.
     */
savefileformat:"",
/**
     * @property {string} [savepath] - Specifies the path that the document, annotation data, and form data will be saved to on the server.
     */
savepath:"",
/**
     *  @property {string} [scripturl] - Url location to the server where all JavaScript files are put when not in the default location.
     */
scripturl:"",
/**
     *  @property {string} serverurl - Url location to the server handler.
     */
serverurl:"",
/**
     *  @property {boolean} [showbuttontext=true] - If the toolbar is displayed, this can be used to hide or show the button text for the toolbar items.
     */
showbuttontext:!0,
/**
     * @property {boolean} [showpageborder=true] - Specifies whether a black border will be added around each page in the displayed document. */
showpageborder:!0,
/**
     * @property {boolean} [showpagenumber=true] - Specifies whether a page number will be added to the bottom left of each page. */
showpagenumber:!0,
/**
     * @property {boolean} [showpagenumbertooltip=true] - Specifies whether a tooltip containing estimated current page number should be shown during fast scrolling. */
showpagenumbertooltip:!0,
/**
     * @property {boolean} [showerrors=false] - Specifies whether error messages are allowed to show up in the console instead of being caught. */
showerrors:!1,
/**
     * @property {boolean} [showstatus=false] - Specifies whether status messages will be output to an area in the toolbar. */
showstatus:!1,
/**
     * @property {boolean} [showscrollbars=true] - Specifies whether scrollbars will be shown. */
showscrollbars:!0,
/**
     * @property {boolean} [showselecttools=false] - Specifies whether rubberband selection tools are shown in the toolbar. */
showselecttools:!1,
/**
     * @property {boolean} [tabular=false] - Specifies whether pages should be displayed in a tabular(grid) fashion, rather than one row or column. */
tabular:!1,
/**
     * @property {Object} [toolbarparent] - Specifies the jQuery object where the toolbar will be created. */
toolbarparent:null,
/** @property {number} [zoom] - Sets the initial zoom level of the document. Ignored when fitting set to anything besides Fitting.None. */
zoom:1,
/**
     * @ignore
     */
showthumbcaption:!1,
/**
     * @ignore
     */
thumbcaptionformat:"",
/**
     * @property {boolean} [persistrotation=true] - Specifies whether to persist page rotation on document save.
     *
     * I.e of set to `false`, rotation applied in 'view-only' mode and ignored when document is saved.
     */
persistrotation:!0,
/**
     * @property {boolean} [showrotatetools=true] - Specifies whether page and annotations rotation UI handles and buttons are shown.
     *
     * Annotation rotation could be explicitly enabled or disabled for individual types of annotations using {@link WebDocumentViewerConfig.annotations|annotations.defaults}. */
showrotatetools:!0,
/** @property {MouseToolConfig|Atalasoft.Utils.MouseToolType} [mousetool] - Specifies the mouse tools settings. Could be set to Atalasoft.Utils.MouseToolType if no advanced settings specified.
     *
     * Mouse tool identifies how user mouse or touch actions ar interpreted. For example, this could be Pan tool to scroll pages, Zoom-Area tool to select image region and zoom to it, Text tool to select and copy document text, etc.
     *
     * Active mouse tool could be changed using {@link Atalasoft.Controls.WebDocumentViewer.setMouseTool | setMouseTool} method.
     */
mousetool:{
/**
       * @typedef {Object} MouseToolConfig
       *
       * @property {Atalasoft.Utils.MouseToolType} [type = Pan] - default mouse tool. This tool is enabled each time new document is loaded.
       * @property {TextMouseToolConfig} [text] - Text selection behavior configuration.
       */
type:tn.Pan,
/** Specifies the default text selection settings*/
text:{
/**
         * @typedef {Object} TextMouseToolConfig
         *
         * @property {Atalasoft.Utils.ScrollArea} [scrolltriggerarea = Normal] - Specifies the percentage of type of scroll trigger area. When selecting text in that area around page bounds scrolling will be triggered for corresponding direction.
         *
         * @property {number} [throttlingtreshold=40] - Milliseconds throttling threshold for text selection UI operations. 0 performs selection without throttling barrier, most CPU intensive. I.e. setting this to 0 causes selection calculation on each corresponding browser mouse event.
         *
         * @property {Object} [selection] - Specifies the text selection highlight settings.
         * @property {string} [selection.color='blue'] - Specifies the fill color for selected text.
         * @property {number} [selection.alpha = 0.25] - Specifies the selected text highlighting transparency level.
         *
         * @property {Object} [highlight] - Specifies the search results highlight settings.
         * @property {string} [highlight.color='yellow'] - Specifies the fill color for search results highlight.
         * @property {number} [highlight.alpha = 0.7] - Specifies the transparency level for search results highlight.
         *
         * @property {boolean} [hookcopy=false] - Control subscribes to ctrl+c key combination. If so, selected text will be copied to clipboard when uses press ctrl+c.
         *
         * Alternatively application could apply it's own logic for ctrl+c - for example, grab selected text using {Atalasoft.Controls.WebDocumentViewer~TextController#getSelected| getSelected} method and let user to edit it before copying.
         *
         * @property {boolean} [allowsearch=true] - Specifies whether to show default search UI.
         *
         * @property {boolean} [wrapsearch=true] - Specifies whether default text search is wrapped.
         *
         * @property {number} [searchdelay=400] - Specifies the milliseconds timeout before triggering text search when text is modified in search textbox.
         *
         * This allows to delay potentially search operation start while user still types query text.
         */
scrolltriggerarea:an.Normal,
/**
         *  Specifies scroll delta in pixels that are applied when selecting text within viewport scroll trigger area
         *  @private
         */
innerscrolldelta:10,
/**
         * Specifies scroll delta in pixels that are applied when selecting text and mouse goes out of viewport.
         * @private
         */
outerscrolldelta:20,
/** Specifies  */
throttlingtreshold:40,selection:{color:"blue",alpha:.25},highlight:{color:"yellow",alpha:.7},hookcopy:!1,allowsearch:!0,wrapsearch:!0,searchdelay:400}},
/**
     * @typedef {Object} FileUploadConfig
     *
     * @property {boolean} [enabled] - a flag indicating whether or not upload functionality should be enabled. Provides a possibility to explicitly disable upload functionality even if upload section is presented.
     * @property {string} uploadpath - represents a relative path where an uploaded file should be saved. This path must be a path to an application subfolder, otherwise upload operation will not work correctly and exception about incorrect path will be returned to the client.
     * @property {string} allowedfiletypes - represents a comma-separated list of file types and MIME-types that are allowed to be selected and uploaded.
     * @property {number} allowedmaxfilesize - represents a file size in bytes.
     * @property {boolean} allowmultiplefiles - a flag indicating whether or not it is allowed to perform multiple files upload.
     * @property {boolean} allowdragdrop - a flag indicating whether or not it is allowed to upload files using drag-and-drop.
     * @property {number} filesuploadconcurrency - represents a number of concurrent uploading files, by default all files loads sequentially.
     * Note, this property doesn't affect on maximum allowed connections per host, that defined by each browser internally. If this value is
     * bigger than number of default persistent connections per server/proxy, than WDV puts the request in queue and fires event {@link Atalasoft.Controls.WebDocumentViewer#event:fileuploadstarted|fileuploadstarted},
     * but the real file upload stats only when browser allow this request to be sent.
     * @property {boolean} closeuiafterupload - a flag indicating whether or not UI will be closed automatically right after upload finished. By default this flag set to `true` value.
     * @example <caption>Upload section of Web Document Viewer config</caption>
     * upload: {
     *   uploadpath: 'Upload/Viewer',
     *   allowedfiletypes: '.jpg,.raw,image/tiff', // Allowed JPG, RAW and TIFF files.
     *   allowedmaxfilesize: 10 * 1024 * 1024, // 10MB
     *   allowmultiplefiles: true,
     *   allowdragdrop: true
     * }
     */
/**
     * @property {FileUploadConfig} [upload] - Specifies the file upload settings. If this section is not specified, the upload functionality is disabled.
     */
upload:null,
/**
     * @typedef {Object} ToolbarButtonConfig
     * 
     * @property {string} id - represents a button HTML id.
     * @property {string} [class] - represents a button CSS class.
     * @property {string} icon - represents a button icon CSS class where button image stored.
     * @property {string} [tooltip] - represents a button text. This text is visible when {@link @link WebDocumentViewerConfig.showbuttontext|showbuttontext} is set to `true`.
     * @property {NotificationCallback} [onclick] - represents a function to call when button was clicked.
     */
/**
     * @property {Array<ToolbarButtonConfig>} [toolbarbuttons] - Specifies the custom toolbar buttons that should be added at the beginning of the main toolbar.
     */
toolbarbuttons:null};if(e){var f=e.mousetool;e.mousetool&&"object"!=typeof e.mousetool&&(e.mousetool=Kt.extend({},S.mousetool,{type:f})),!e.tabular||e.direction!==nn.Horizontal&&1!==e.columns||(e.tabular=!1),Kt.extend(!0,S,e),e.mousetool=f}if(S.direction=S.direction===nn.Vertical||S.direction===nn.Horizontal?S.direction:nn.Vertical,S.fitting=S.fitting===on.None||S.fitting===on.Best||S.fitting===on.Width||S.fitting===on.Height?S.fitting:on.Width,S.pageborderwidth=we(S.pageborderwidth)?parseInt(S.pageborderwidth,10):1,S.pagespacing=we(S.pagespacing)?parseInt(S.pagespacing,10):4,S.showpageborder=!!S.showpageborder,S.showpagenumber=!!S.showpagenumber,S.showstatus=!!S.showstatus,S.zoom=we(S.zoom,!0)?parseFloat(S.zoom):1,S.scripturl=0<(t=S.scripturl).length&&-1===t.indexOf("/",t.length-1)&&-1===t.indexOf("\\",t.length-1)?S.scripturl+"/":S.scripturl,function(){if((S.mousetool.type===tn.ZoomArea||S.mousetool.type===tn.Selection||S.mousetool.type===tn.Text)&&!S.showselecttools){if(null!==e.showselecttools&&void 0!==e.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";S.showselecttools=!0}}(),function(){S.upload||(S.upload={enabled:!1});var e=S.upload;!1!==e.enabled&&(e.allowedmaxfilesize=dn(e.allowedmaxfilesize)?e.allowedmaxfilesize:Number.MAX_VALUE,e.allowdragdrop=!!e.allowdragdrop,e.allowmultiplefiles=!!e.allowmultiplefiles,e.allowedfiletypes="string"==typeof e.allowedfiletypes?e.allowedfiletypes:"",e.uploadpath="string"==typeof e.uploadpath?e.uploadpath:".",e.filesuploadconcurrency=dn(e.filesuploadconcurrency)?e.filesuploadconcurrency:1,e.closeuiafterupload=!1!==e.closeuiafterupload)}(),n=S.allowannotations,i=S.allowtext,!un({checkjQueryOnly:!1,checkRaphael:n||i,checkClipboard:i}))return null;function p(){var e=E.memory.deallocateOldestEntry();!function(e){try{e.parentNode&&e.parentNode.removeChild(e),r.appendChild(e),r.innerHTML=""}catch(e){}}(e[0]),0<=e._cacheIndex&&(x.loadedImgs[e._cacheIndex]=null,e._cacheIndex=-1),e.remove(),e.length=0,e=null}function g(e){F.newpagedivsize={height:e.height,width:e.width},F.newpagedivfullzoom=e.fullzoom,S.minwidth=e.minwidth,S.zoom=e.fullzoom,kt()}function m(e){var t=!1;(M.smallest.width<=0||e.width<M.smallest.width)&&(M.smallest.width=e.width,t=!0),(M.smallest.height<=0||e.height<M.smallest.height)&&(M.smallest.height=e.height,t=!0),k||(!function(e,t){if(S.direction===nn.Vertical){if(x.scrollV)if(x.scrollV.scrollSize(Math.max(x.scrollV._scrollSize+t,0)),1===x.scrollV._ratio&&x.scrollV._scrollSize+t<3e4)x.scrollV._tray.height(x.scrollV._tray.height()+t),x.scrollV._max=Math.max(x.scrollV._tray.height()-x.scrollV[0].clientHeight,0)+1;else{var n=x.scrollV.height()-x.scrollH.scrollbarHeight()-1,o=(3e4-n)*x.scrollV._ratio;3e4<o+t?x.scrollV.ratio((o+t)/(3e4-n)):Pe()}De(x.scrollV),Te(x.scrollH,"width")}else if(S.direction===nn.Horizontal){if(x.scrollH)if(x.scrollH.scrollSize(Math.max(x.scrollH._scrollSize+e,0)),1===x.scrollH._ratio&&x.scrollH._scrollSize+e<3e4)x.scrollH._tray.width(x.scrollH._tray.width()+e),x.scrollH._max=Math.max(x.scrollH._tray.width()-x.scrollH[0].clientWidth,0)+1,x.scrollH.ratio(x.scrollH._scrollSize/x.scrollH._max);else{var i=x.scrollH.width()-x.scrollV.width()-1,r=(3e4-i)*x.scrollH._ratio;3e4<r+e?x.scrollH.ratio((r+e)/(3e4-i)):Pe()}De(x.scrollH),Te(x.scrollV,"height")}if((0!==e||0!==t)&&0!==t){var a=x.scroller[0].scrollLeft,l=x.scroller[0].scrollTop;Le(re(a,l)+1),Qt({type:"scroll",x:a,y:l,dx:0,dy:0})}}(e.dx,e.dy),t&&K(ee())>x.pageDivs.length&&kt())}function v(e,t,n,o){var i=t.getPageSize(e.index,s);if(!i){var r=t.getPageFitMultiplier(e.index,s),a=r,l={width:e.width,height:e.height};1===a&&S.forcepagefit&&(l.width!==n.width||l.height!==n.height)&&0<l.width&&0<l.height&&(a=l.width/n.width>l.height/n.height?n.width/l.width:n.height/l.height,t.setPageFitMultiplier(e.index,a,s)),t.setPageSize(e.index,Kt.extend({},l),s),o&&(l.width*=S.zoom*a,l.height*=S.zoom*a,(i=Kt.extend({},M.size)).width*=S.zoom*r,i.height*=S.zoom*r,e.dx=l.width-i.width,e.dy=l.height-i.height,m(e))}}function y(){en.Mobile.Any()?window.addEventListener("orientationchange",$e):window.addEventListener("resize",$e),x.scroller.scroll(ke),X(M.buffer)}function w(e){var t=e.target||e.srcElement;return("TEXTAREA"===t.nodeName||"INPUT"===t.nodeName||"text"===t.type)&&((!t.attributes.selectable||"false"!==t.attributes.selectable.value)&&void 0)}function _(t,n){return function(e){try{e.currentTarget=n&&0<n.length?n[0]:e.currentTarget,t&&t(e)}catch(e){be(e.message)}}}function A(e,t){if(S.showerrors)throw void 0===t?e:e+": "+t;be(e+": "+t),Qt({type:"error",name:e,message:t})}function z(e){A(e.name,e.msg)}function P(e,t,n,o){var i=Kt("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function O(e,t,n){return P("div",e,t,n)}function T(e){var t=Kt('<div style="width:100%; height:100%; position:absolute; left: 0px; top: 0px; background: #F00; opacity:0.0;"></div>');return t.toFront=function(){t.css({"z-index":"10"}),t.reflow&&t.reflow()},t.reset=function(){t.css({"z-index":""}),t.reflow&&t.reflow()},e&&e.prepend(t),t}function D(e){var t=O(e.parent),n=s+"_toolbar";t.buttons=[];for(var o=0;e.children&&o<e.children.length;o++){var i=null;switch(e.children[o].type){case"button":if(en.Features.Touch&&("lines"===e.children[o].icon||"polygon"===e.children[o].icon))continue;e.children[o].id=n+"_"+e.children[o].id,(i=B(e.children[o],t)).addClass(ln.atala_toolbar_button),t.buttons.push(i);break;case"pagelabel":x.pageLabel=P("span",t,n+"_"+e.children[o].id),(i=x.pageLabel).addClass("ui-controlgroup-item")}i&&e.children[o].cls&&i.addClass(e.children[o].cls)}return t}function I(e){var t=Kt("<ul/>");for(var n in t.css({fontSize:"medium"}),t.addClass(ln.atala_context_menu),e)if(e.hasOwnProperty(n)){var o=Kt('<li><div href="#"> '+n+" </div></li>");en.Features.Touch&&o.on({touchend:e[n]}),o.click(e[n]),o.appendTo(t)}return t.menu(),t}function V(e,t,n){var o=Kt('<div title="'+t+'" />');return n&&o.append(n),o.dialog(),o}function L(e){var t=P("span",x.toolbar.annoToolbar).addClass("ui-controlgroup-item");return B(e,t),R(t,e.id+"_Drop","ui-icon-triangle-1-s","Click To Choose",null,function(){var e=Kt(this).next();if(e.is(":visible"))return e.hide(),!1;var t=e.prev().prev().parent();return e.menu().show().css({position:"absolute",top:0,left:0,"min-width":t.width()+"px","z-index":11}).position({my:"left top",at:"left bottom",of:t}),!1}),t.controlgroup(),x.toolbar.annoToolbar.controlgroup("refresh"),t}function j(e,t,n){for(var o=Kt(e.children().first()),i={},r=0;r<n.length;r++)i[n[r].name]=H(o,t,n[r]);o.menu=I(i),e.append(o.menu),o.menu.hide()}function H(e,t,n){var o=function(){return e.button("option","label","Draw "+n.name),e.data("_annoConfig",n),e.click(t.onclick),e.menu.hide(),e.trigger("click"),!1};return Gt("menuselect"+t.icon+n.name,_(o,e)),o}function R(e,t,n,o,i,r){var a=Kt('<button id="'+t+'" title="'+o+'">'+(i||o)+"</button>");return r&&a.click(r),a.button({icon:n,showLabel:null!=i&&S.showbuttontext}),a.addClass("atala-ui-button"),e&&a.appendTo(e),a}function B(e,t){var n,o="menuclick"+(e.custom?e.id:e.icon),i=R(t,e.id,e.custom?e.icon:b+" "+b+"-"+e.icon,e.tooltip,e.text,(n=o,function(e){e.preventDefault(),Qt(n,arguments)}));return i.data("_config",e),Gt(o,_(e.onclick,i)),i}function N(e){var t,n,o={clearable:"atala_search_input_clearable",onclear:"atala_search_input_clear_hover",inputEmpty:"atala_search_input_empty",loading:"atala_search_input_loading"},i=e.parent||x.toolbar,r=null,a=null;function l(){var e=n.val();return e?n.addClass(o.clearable):n.removeClass(o.clearable),!!(e&&r&&r.isValid()&&e===r.getQuery())||(clearTimeout(a),r=null,e&&3<=e.length?(p(!0),a=setTimeout(function(){r=E.text.search(e,Yt(),h),f(!0)},S.mousetool.text.searchdelay),!1):void d())}function s(e){var t=n.val();return 13===e.keyCode&&r&&t&&r.isValid()&&r.getQuery()===t?(e.shiftKey?c():u(),!1):13!==e.keyCode||r&&r.isValid()?27===e.keyCode?(d(),y(),!1):void 0:(l(),!1)}function u(){r&&(f(!0),r.next(h))}function c(){r&&(f(!0),r.prev(h))}function d(){r=null,E.text.search(""),E.text.clearSelection(),f(!1),p(!0)}function h(e,t){e.isValid()&&(f(!1),e.wrap=S.mousetool.text.wrapsearch,t||p(t))}function f(e){m(o.loading,e)}function p(e){m(o.inputEmpty,!e)}function g(t){return function(e){e.preventDefault(),t&&t()}}function m(e,t){t?n.addClass(e):n.removeClass(e)}function v(e){m(o.onclear,this.offsetWidth-18<e.clientX-this.getBoundingClientRect().left)}function y(e){e&&e.preventDefault(),n.removeClass(o.clearable).removeClass(o.onclear).val("").change(),l()}!function(){t=O().addClass(ln.atala_search_container).addClass("ui-controlgroup-item"),(n=Kt('<input type="text" placeholder="Search..." />').addClass(ln.atala_search_input).addClass("ui-widget")).on({keydown:s,"input propertychange":l}),P("span",t).css({width:"100%"}).append(n);var e=P("span",t);R(e,null,b+" "+b+"-search-next","Next",null,g(u)).addClass(ln.atala_search_next).addClass(ln.atala_toolbar_button),R(e,null,b+" "+b+"-search-prev","Previous",null,g(c)).addClass(ln.atala_search_prev).addClass(ln.atala_toolbar_button),t.on("mousemove","."+o.clearable,v).on("touchstart click","."+o.onclear,y),i.append(t),i.append(Kt('<div style="clear:both;"></div>'))}(),this.dispose=function(){n.off({keypress:s,"input propertychange":l}),t.off("mousemove","."+o.clearable,v).off("touchstart click","."+o.onclear,y),r&&r.dispose();t.remove()}}function U(){S.allowannotations&&u.annotations.cancelDraw(),E.mouseTool.setTool(tn.ZoomArea)}function q(o){return function(){var t=this,e=W(M),i=e[0],n=[];e.forEach(function(e){return _n(this,t),n.push(E.document.getPageRotation(e)+o)}.bind(this)),E.document.rotatePages(e,n,function(){var e=pt(i),t=pe(i),n=S.direction===nn.Vertical?t.height*e:0;Qe(S.pageselectlocation,rn.Center)||Qe(S.pageselectlocation,rn.MiddleLeft)?n/=2:Qe(S.pageselectlocation,rn.TopLeft)&&(n=0);var o={x:S.direction===nn.Vertical?0:n,y:S.direction===nn.Vertical?n:0};Je(i,o,S.pageselectlocation,!0)})}}!function(){var e=S.parent.attr("id")+"_wdv";++zn.instanceCounter;for(;document.getElementById(e+zn.instanceCounter);)++zn.instanceCounter;s=e+zn.instanceCounter}(),
/**
   * @member {WebDocumentViewerConfig} config - Current control configuration.
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @instance
   * @alias config
   */
u.config=S,
/** WARNING: Changing values from these references can cause instability.*/
u.events=h,
/** WARNING: Changing values from these references can cause instability.*/
u.domclasses=ln,
/** WARNING: Changing values from these references can cause instability.*/
u.domattributes=sn;var W=function(e){return[e.number-1]};function Z(e,t){var n=O(e,t);return S.direction===nn.Vertical?(n.height(1),n.css({display:"block"})):S.direction===nn.Horizontal&&(n.width(1),n.css({display:"inline-block",overflow:"hidden"})),n._zoom=1,S.backcolor&&n.css({backgroundColor:S.backcolor}),n}function X(e){if(void 0===e){var t=K(k&&F.newpagedivsize&&0<S.zoom&&isFinite(S.zoom)?S.zoom:ee());M.buffer<t&&(M.buffer=t),M.buffer=Math.min(M.buffer,E.document.getPageCount()),e=M.buffer}function n(t){return function(){var e;e=t,F.activepage=e}}if(x.pageDivs.length<e)for(var o=x.pageDivs.length;o<e;o++)x.pageDivs[o]=O(),x.pageDivs[o].addClass(ln.atala_page_div),S.showselecttools&&(x.pageDivs[o]._rubberband=new wn(u,{},x.pageDivs[o],{getViewportSize:ge,getMaxZoom:te,getPageOffsets:ue,raiseDrawLayer:wt,resetDrawLayer:_t})),x.pageDivs[o].on({touchstart:n(x.pageDivs[o]),mousedown:n(x.pageDivs[o])}),E.annotations&&E.annotations.addDrawingSurface(x.pageDivs[o]),(S.showselecttools||S.allowannotations||S.allowforms||S.allowtext)&&(x.pageDivs[o]._draw=T(x.pageDivs[o])),E.forms&&!k&&E.forms.addFormLayer(x.pageDivs[o]),E.text&&!k&&E.text.addTextLayer(x.pageDivs[o]);else if(x.pageDivs.length>e)for(;x.pageDivs.length>e&&0!==x.pageDivs.length;){var i=x.pageDivs.pop();i._rubberband&&i._rubberband.dispose(),E.annotations&&E.annotations.removeDrawingSurface(i),E.forms&&!k&&E.forms.removeFormLayer(i),E.text&&!k&&E.text.removeTextLayer(i),i&&Re(i),i=null}}function Y(e,a,t,n){"function"==typeof t&&(n=t,t=void 0);var o="function"==typeof n?[n]:[],c=Kt(new Image),i=.9,l=Kt.extend(!0,{atala_cb:void 0},t||{});c._domEl=O(),c._domEl.addClass(ln.atala_page_image_anchor),c.addClass(ln.atala_page_image),c._domEl.append(c);var r={load:v,error:function(){z(),A("ImageError","Image at frameIndex "+d()+" failed to load.")},inserted:function(){c._loaded&&y()}};function d(){return c._page?c._page._index:E.document.getPageIndexByImageIndex(c._index)}function s(){return c._domEl}function u(e){return E.document.getPageFitMultiplier(void 0!==e?e:d())}function h(e,t){return(e=void 0===e?S.zoom:e)*u(t)}function f(){var e=pe(d())||M.size;return{height:e.height,width:e.width}}
/**
     * Returns physical size of the image without client transformations applied(like view rotation)
     */function p(){var e=f();return 90===c._viewrotation||270===c._viewrotation?D(e):e}function g(e,t){return t=t||f(),{height:Math.round(t.height*h(e)),width:Math.round(t.width*h(e))}}function m(e){var t=d(),n=M.vector&&(!a||!a.uri)?h():Math.min(h(),1),o=E.document.getPageRotation(t);if(e||n!==c._zoom||c._rotation!==o){var i=Kt.extend({atala_docurl:a?a.uri:c.documenturl,atala_doczoom:n,atala_thumbpadding:!1},l);o&&(i.atala_angle=o),S.jpeg&&(i.atala_jpeg=!0);var r={type:"docpage",serverurl:S.serverurl,query:"?ataladocpage="+(null===a?c._index:void 0!==a.index?a.index:a),method:"GET",data:i,cancel:!1,info:c};c._reqzoom=n,c._reqangle=o,jt(r,v,v)}}function v(){c._loaded||c._domEl.removeClass(ln.atala_page_loading),c._loaded=!0,c._zoom=c._reqzoom,c._rotation=c._reqangle;var e=d();if(0<=e){if(c._rotation!==E.document.getPageRotation(e))return void m();(c._viewrotation=0)<c.parent().length&&y(),T(c._viewrotation);var t=M.vector?h():Math.min(h(),1);x()&&c._zoom<t*i&&!$(c._zoom,t)&&b(!1)}z()}function y(){var e;(e=c)&&(e.removeAttr("width height"),e.css({width:"auto",height:"auto"}));var t=c.prop("naturalWidth")||0,n=c.prop("naturalHeight")||0,o=t||c.width(),i=n||c.height(),r=f(),a=h(),l=!1;if(0!==o&&0!==i){var s;c._size.width=Math.round(o/c._zoom),c._size.height=Math.round(i/c._zoom),90!==c._viewrotation&&270!==c._viewrotation||(c._size=D(c._size)),c._size.width===M.size.width&&c._size.height===M.size.height||$(c._size.width,r.width)&&$(c._size.height,r.height)||(l=!0,E.document.setPageSize(d(),c._size)),null===E.document.getPageSize(d())&&(l=!0,E.document.setPageSize(pe,c._size)),S.forcepagefit?(s=function(e){e=e||c._size;var t={width:S.forcepagesize.width*(k?1:S.zoom),height:S.forcepagesize.height*(k?1:S.zoom)};return(t.width<1||t.height<1)&&(t.width=M.size.width*S.zoom,t.height=M.size.height*S.zoom),e.width/t.width>e.height/t.height?t.width/e.width:t.height/e.height}()/S.zoom,E.document.setPageFitMultiplier(d(),s),_()):(c._zoom!==S.zoom||l||0!==c._viewrotation)&&_();var u=g();l&&c.trigger({type:"pagesizechanged",image:c,index:d(),width:c._size.width,height:c._size.height,dx:Math.round(u.width-r.width*a),dy:Math.round(u.height-r.height*a)}),c.trigger({type:"pageresize",image:c,index:d(),width:u.width,height:u.height})}}function b(e,t){x()&&!c._size.isEmpty()?("function"==typeof t&&o.push(t),c._prevzoom=c._reqzoom,e&&!F.loading?c.animate({height:Math.round(c._size.height*h()),width:Math.round(c._size.width*h())},{duration:C,easing:"easeOutQuad",complete:w,queue:!1}):(_(),w())):"function"==typeof t&&t.call(this,c)}function x(){if(!c._loaded)return!1;var e=!M.vector&&1===c._reqzoom&&1===c._prevzoom&&1<h(),t=$(c._reqzoom,h())||e;if(!t){var n=Math.abs(c._reqzoom*c._size.width-h()*c._size.width),o=Math.abs(c._reqzoom*c._size.height-h()*c._size.height);n<1&&o<1&&(t=!0)}return!t||!$(c._scaledzoom,h())}function w(){c.trigger({type:"pagezoom",index:d(),height:Math.round(c._size.height*h()),width:Math.round(c._size.width*h()),prevzoom:c._prevzoom,zoom:h()}),0===F.prpr?m():z()}function _(){var e,t,n,o=g(void 0,p()),i=g(),r=c.prop("naturalWidth")||0,a=c.prop("naturalHeight")||0,l=r&&Math.abs(r-o.width)/o.width<.01,s=a&&Math.abs(a-o.height)/o.height<.01;l&&s||(c.height(o.height),c.width(o.width)),c._domEl.width(i.width),c._domEl.height(i.height),c._scaledzoom=h(),T(c._viewrotation),e=d(),t=i.width,i.height,null!=(n=Ge(e))&&null!=n._num&&n._num.css({left:t-20,right:0})}function z(){0<o.length&&function(e){var t=Array.prototype.slice.call(arguments,1);for(;e.length;)e.shift().apply(this,t)}(o,c)}function P(){var e=E.document.getPageRotation(d());return 0===c._viewrotation&&e!==c._rotation||0!==c._viewrotation}function T(e){var t=p(),n=g(void 0,t),o=0,i=0,r="";90!==e&&270!==e||(o=(n.height-n.width)/2,k&&t.width<t.height&&(o=0),i=(n.width-n.height)/2,n=D(n)),0!==e?(r+=" translate("+o+"px,"+i+"px)",r+="rotate("+e+"deg)",c.css(cn(r))):c.css(cn("")),s().css({width:n.width,height:n.height}),c._viewrotation=e}function D(e){var t=e.width;return e.width=e.height,e.height=t,e}return c._binds=r,c.documenturl=S.documenturl,c._index=a?a.mapsto:e,c._loaded=!1,c._size={width:0,height:0,isEmpty:function(){return 0===this.width&&0===this.height}},c._zoom=-1,c._prevzoom=c._zoom,c._scaledzoom=-1,c._rotation=0,c._viewrotation=0,c.dispose=function(){c.off(r),c._page=null,c=null},c.zoom=b,c.needsZoom=x,c.getSize=f,c.getScaledSize=g,c.getFitZoom=h,c.getFitMultiplier=u,c.needsRotate=P,c.rotate=function(e){"function"==typeof e&&o.push(e);if(P()){var t=E.document.getPageRotation(d());if(n=E.document.getPageRotation(d()),(0===c._viewrotation&&n!==c._rotation||0!==c._viewrotation&&(c._viewrotation+c._rotation)%360!==n)&&c&&c._loaded&&c._page&&(T(t=(360+t-c._rotation)%360),y()),0===F.prpr&&c._loaded)return void m()}var n;z()},c.getDomElement=s,c.invalidate=function(e,t){"function"==typeof e&&(t=e,e={});(l=Kt.extend(!0,{},e)).atala_cb=Math.floor(1e9*Math.random()),"function"==typeof t&&o.push(t);m(!0)},function(){c.on(r);var e=S.pageborderwidth,t={bottom:0,top:0,right:0,left:0};c._loaded=!1,c._reqzoom=-1,(S.direction===nn.Vertical||S.tabular)&&(t.bottom=S.pagespacing);(S.direction===nn.Horizontal||S.tabular)&&(t.right=S.pagespacing);var n=s();S.showpageborder&&n.css({"border-bottom":e+"px solid black","border-right":e+"px solid black","border-top":e+"px solid silver","border-left":e+"px solid silver","margin-bottom":t.bottom+"px","margin-right":t.right+"px"});n.css({display:"inline-block"}),n.addClass(ln.atala_page_loading),m()}(),c}function G(e,t){var n="overflow:scroll; position:absolute; background-color:Transparent;",o=O(e);o.css({position:"absolute",display:"none","background-color":"white"});var i=null,r=!1;function a(){i._tooltip.hide(),M.number===i._pagenum||Ye(i._pagenum)||Ie(i._pagenum),At()}function l(e,t){if(S.forcepagefit){t*=e._ratio;var n=e.ScrollDirection===nn.Vertical?{x:0,y:t}:{x:t,y:0};return re(n.x,n.y)+1}return Math.floor(t/(e._max/E.document.getPageCount()))+1}return t===nn.Horizontal?(en.Firefox&&(n=n.replace("overflow","overflow-x")),(i=Kt('<div style="'+n+'bottom:0px; left:0px; width:100%;z-index:10"></div>').appendTo(e))._tray=Kt('<div style="height:1px;"></div>').appendTo(i)):(en.Firefox&&(n=n.replace("overflow","overflow-y"),n+="width:"+(function(){var e=O(Kt("body")),t=O(e);e.css({width:"50px",height:"50px",overflow:"hidden",position:"absolute",visibility:"hidden"}),t.css({width:"100px",height:"100px"});var n=e.width();e.css({"overflow-y":"scroll"});var o=n-e[0].clientWidth;return Kt(e).remove(),o}()+1)+"px;",r=!0),(i=Kt('<div style="'+n+'top:0px; right:0px; height:100%;z-index:10"></div>').appendTo(e))._explicitSize=r,i._tray=Kt('<div style="width:1px;"></div>').appendTo(i)),Q(i),i._ratio=1,i.ScrollDirection=t,i._tooltip=o,i._pagenum=-1,i._scrollSize=0,i.pageNum=function(e){i._pagenum=e},i.scrollbarHeight=function(){return i.height()-i[0].clientHeight},i.scrollSize=function(e){i._scrollSize=e},i.ratio=function(e){i._ratio=e},i.on({scroll:function(){if(!i.propagationPaused()){clearTimeout(i._tooltip._timeout),x.scroller.stop(),x.scroller.pauseEventPropagation(!0);var e={};i.ScrollDirection===nn.Vertical?(x.scroller.scrollTop(i[0].scrollTop*i._ratio),i._pagenum=l(i,i[0].scrollTop),e.right=i.outerWidth()+10+"px",e.top=16+Math.round((i[0].offsetHeight-48)/i[0].scrollHeight*i[0].scrollTop)+"px"):i.ScrollDirection===nn.Horizontal&&(x.scroller.scrollLeft(i[0].scrollLeft*i._ratio),i._pagenum=l(i,i[0].scrollLeft),e.bottom=i.outerHeight()+10+"px",e.left=16+Math.round((i[0].offsetWidth-48)/i[0].scrollWidth*i[0].scrollLeft)+"px"),i.ScrollDirection===S.direction&&S.showpagenumbertooltip&&("none"===i._tooltip.css("display")&&(i._tooltip.css(e),i._tooltip.show()),S.showpagenumbertooltip&&i._tooltip.html("Page "+i._pagenum),i._tooltip._timeout=setTimeout(a,1e3))}}}),i}function J(e){e&&e._tooltip&&(clearTimeout(e._tooltip._timeout),e._tooltip.hide())}function Q(t){var n={scroll:function(){t.off(n),t.resumeEventPropagation()}};t._pauseEP=0,t.propagationPaused=function(){return 0<t._pauseEP},t.pauseEventPropagation=function(e){t._pauseEP++,e&&t.on(n)},t.resumeEventPropagation=function(){0<t._pauseEP&&t._pauseEP--}}function K(e){var t=ge(),n=ne(0,e);n.width=0<M.smallest.width&&M.smallest.width<n.width&&!k?M.smallest.width:n.width,n.height=0<M.smallest.height&&M.smallest.height<n.height&&!k?M.smallest.height:n.height;var o,i=Math.ceil(t.width/n.width)+2,r=Math.ceil(t.height/n.height)+2;return S.tabular?(S.direction===nn.Vertical&&0<S.columns?i=S.columns:S.direction===nn.Horizontal&&0<S.rows&&(r=S.rows),o=i*r):S.direction===nn.Vertical?o=r:S.direction===nn.Horizontal&&(o=i),o}function $(e,t){return t<e+.001&&e-.001<t}function ee(){return 0!==M.size.width?S.minwidth/M.size.width:1}function te(){return 0!==M.size.width?S.maxwidth/M.size.width:1}function ne(e,t,n){if(E.document.getPageCount()<=0)return{width:0,height:0};if(n=void 0===n||n,F.newpagedivsize){var o={width:F.newpagedivsize.width,height:F.newpagedivsize.height},i=S.showpageborder&&n?2*S.pageborderwidth:0,r=(t||S.zoom)/F.newpagedivfullzoom;return o.height=Math.round(o.height*r)+i,o.width=Math.round(o.width*r)+i,o}return oe(e,t||S.zoom,S.showpageborder&&n)}function oe(e,t,n){var o,i=Kt.extend({},pe(e)),r=n?2*S.pageborderwidth:0;return t*=(o=e,E.document.getPageFitMultiplier(o)),i.height=Math.round(i.height*t)+r,i.width=Math.round(i.width*t)+r,i}function ie(e,t){return ue(null,e,t).index}function re(e,t){var n=ge(),o={x:e+S.pageselectlocation.x*n.width,y:t+S.pageselectlocation.y*n.height};return ie(o.x,o.y)}function ae(e,t){for(var n={left:0,top:0},o=e;null!=o&&o!==t;o=o.offsetParent)n.left+=o.offsetLeft,n.top+=o.offsetTop;return n}var le={height:0,isEmpty:function(){return 0===this.width&&0===this.height},width:0,zero:function(){this.width=0,this.height=0},zoom:1};function se(){if(le.isEmpty()||le.zoom!==S.zoom){var e=ue(null,null,null,S.zoom);le.height=e.height,le.width=e.width,le.zoom=S.zoom}return le}function ue(e,t,n,o){return ce(0,e,t,n,o)}function ce(e,t,n,o,i){if(S.tabular)return function(e,t,n,o,i){if(t<e)return{width:0,height:0,index:t};var r=de(e,n,o,i),a=de(t,n,o,i);return a.height=S.direction===nn.Vertical?a.height-r.height:a.height,a.width=S.direction===nn.Horizontal?a.width-r.width:a.width,a}(e,t,n,o,i);var r=E.document.getPageCount();t=t||0===t?t:r;var a={height:0,width:0,index:e=e||0};if(S.direction===nn.Vertical)for(var l=null,s=e;s<r&&s<t&&(a.height+(l=ne(s,i).height)<=o||null==o);s++)a.height+=l+S.pagespacing,a.index++;else if(S.direction===nn.Horizontal)for(var u=null,c=e;c<r&&c<t&&(a.width+(u=ne(c,i).width)<=n||null==n);c++)a.width+=u+S.pagespacing,a.index++;return a.index>=r&&0<r&&(a.index=r-1),a}function de(e,t,n,o){var i,r,a=E.document.getPageCount(),l={height:0,width:0,index:0},s=he(o);e=null==e?e=a:e,S.direction===nn.Vertical?(i=s||1,r=Math.ceil(a/i)):S.direction===nn.Horizontal&&(r=s||1,i=Math.ceil(a/r));var u=ne(0,o);u.width+=S.pagespacing,u.height+=S.pagespacing;var c=null==n?Math.floor(e/i):Math.floor(n/u.height),d=null==t?e%i:Math.ceil(t/u.width);return l.height=c*u.height,l.width=d*u.width,l.index=c*i+d,l.index>=a&&0<a&&(l.index=a-1),l}function he(e){var t=1;if(S.tabular){var n=S.pagespacing||0,o=ne(0,e);S.direction===nn.Vertical?(t=Math.floor(x.content.width()/o.width),t=Math.min(t,Math.floor((x.content.width()-t*n)/o.width))):S.direction===nn.Horizontal&&(t=Math.floor(x.content.height()/o.height),t=Math.min(t,Math.floor((x.content.height()-t*n)/o.height)))}return t||1}function fe(e,t){var n=pe(e);return(gt(e)+(t||0))%180==0?n:{width:n.height,height:n.width}}function pe(e){var t=E.document.getPageSize(e);return t||M.size}function ge(){return{width:x.scrollV?x.main.width()-x.scrollV.width():x.main.width(),height:x.scrollH?x.main.height()-x.scrollH.scrollbarHeight():x.main.height()}}function me(e,t){var n={status:"fail",started:!1,reason:e};return"function"==typeof t&&t.call(),n}function ve(e,t,n,o,i,r){var a=ae(e,t);return a.left<=i&&a.left+e.clientWidth>=n&&a.top<=r&&a.top+e.clientHeight>=o}function ye(e,t,n){return t<e.length&&(e.splice(n,0,e.splice(t,1)[0]),!0)}function be(e){S.showstatus&&x.status&&x.status.html(e),Qt({type:"statusmessage",message:e})}function xe(e,t){var n;if(1===e.length&&"object"==typeof e[0])n=e[0];else if("string"==typeof e[0]){n={};var o=null;3===e.length?o=e[2]:2===e.length&&(o=e[1]);for(var i=-1<e[0].indexOf(" ")?e[0].split(" "):[e[0]],r=0;r<i.length;r++)n[i[r]]=o}for(var a in n)if(n.hasOwnProperty(a)){var l=null;if(a in h?l=h:u&&a in u.annotations.events?l=u.annotations.events:u&&a in u.forms.events?l=u.forms.events:u&&a in u.document.events&&(l=u.document.events),null==l&&(l=h),null==l[a])t&&(l[a]=[n[a]]);else if(t)l[a].push(n[a]);else if(n[a])for(var s=0;s<l[a].length;s++)l[a][s]===n[a]&&l[a].splice(s,1);else l[a].length=0}}function we(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function _e(e,t,n,o,i){if(null==i&&"function"==typeof o&&(i=o,o=null),e=null==e?x.scroller.scrollLeft():e,t=null==t?x.scroller.scrollTop():t,S.direction===nn.Horizontal){if(e>x.viewport.width()){var r=se();if(e<r.width&&0<x.content.width()){var a=r.width-(x.edges[0].width()+x.content.width());x.edges[1].width(a)}}}else if(S.direction===nn.Vertical&&t>x.viewport.height()){var l=se();if(t<l.height&&0<x.content.height()){var s=l.height-(x.edges[0].height()+x.content.height());x.edges[1].height(s)}}x.scroller.stop(),!n||F.loading||F.scrollPos.x===e&&F.scrollPos.y===t?(x.scroller.scrollLeft(e),x.scroller.scrollTop(t),"function"==typeof i&&i.call()):Kt.when(x.scroller.animate({scrollLeft:e,scrollTop:t},{duration:o||c,easing:"easeOutQuad",queue:!1})).done(i)}function ze(e,t){if(x.scroller.is(":animated"))return me("scrolling",t);var n=ue(M.number+e-1);_e(n.width,n.height,!0,t)}function Pe(){if(x.scrollH&&x.scrollV){var e=E.document.getPageCount();if(x.scrollH.pauseEventPropagation(),x.scrollV.pauseEventPropagation(),S.direction===nn.Vertical){Te(x.scrollH,"width");var t=Math.round(ue(e-1).height+ne(e-1).height);en.Firefox&&(t+=Math.round(x.scrollH.scrollbarHeight())),x.scrollV.scrollSize(t-(x.scrollV.height()-x.scrollH.scrollbarHeight()-1)),3e4<t?(x.scrollV.ratio(t/(3e4-(x.scrollV.height()-x.scrollH.scrollbarHeight()-1))),x.scrollV._tray.height(3e4)):(x.scrollV._tray.height(t),x.scrollV.ratio(1)),De(x.scrollV)}else if(S.direction===nn.Horizontal){Te(x.scrollV,"height");var n=Math.round(ue(e-1).width+ne(e-1).width);x.scrollH.scrollSize(n),3e4<n?(x.scrollH.ratio(n/(3e4-(x.scrollH.width()-x.scrollV.width()-1))),x.scrollH._tray.width(3e4)):(x.scrollH._tray.width(n),x.scrollH.ratio(1)),De(x.scrollH)}x.scrollV._max=Math.max(x.scrollV._tray.height()-x.scrollV.height(),0)+1,x.scrollH._max=Math.max(x.scrollH._tray.width()-x.scrollH.width(),0)+1,x.scrollH.resumeEventPropagation(),x.scrollV.resumeEventPropagation()}}function Te(e,t){if(e){var n=Math.round(M.size[t]*S.zoom);if(S.tabular)n=x.content[t]();else for(var o=0;o<x.pageDivs.length;o++)null!=x.pageDivs[o]._index&&(n=Math.max(ne(x.pageDivs[o]._index)[t],n));e._tray[t](n),e.scrollSize(n-e[t]()),De(e),e.ratio(1)}}function De(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}function ke(e){if(!F.zooming&&!F.scrollBuffer&&x.pageDivs.length){var t=(new Date).getTime(),r=x.scroller[0].scrollLeft,a=x.scroller[0].scrollTop,n=r+x.scroller[0].clientWidth,o=a+x.scroller[0].clientHeight,i=ie(r,a)+1,l=Math.abs(i-M.number)/he();if(!F.loading){var s=E.document.getPageCount(),u=x.pageDivs[0]._index,c=x.pageDivs[x.pageDivs.length-1]._index,d=0===l&&(M.number-1<u||M.number-1>c);l<x.pageDivs.length&&!d?ve(x.edges[1][0],x.scroller[0],r,a,n,o)&&c<s-1?Ae(l):ve(x.edges[0][0],x.scroller[0],r,a,n,o)&&0<u?Se(l):i!==M.number&&null===Ge(i-1)&&Ie(i):Ve(i,!1,null),dt()}if(Le(re(r,a)+1),!x.scroller.propagationPaused()&&x.scrollH&&x.scrollV){var h=Math.round(r/x.scrollH._ratio),f=Math.round(a/x.scrollV._ratio);h!==x.scrollH.scrollLeft()&&(x.scrollH.pauseEventPropagation(!0),x.scrollH.scrollLeft(h)),f!==x.scrollV.scrollTop()&&(x.scrollV.pauseEventPropagation(!0),x.scrollV.scrollTop(f))}Qt({type:"scroll",x:r,y:a,dx:r-F.scrollPos.x,dy:a-F.scrollPos.y}),e&&(F.scrollTimeout&&clearTimeout(F.scrollTimeout),F.scrollTimeout=setTimeout(function(){var e,t,n,o,i;e=r,t=a,n=x.scroller[0].scrollLeft,o=x.scroller[0].scrollTop,i=n===F.scrollPos.x&&o===F.scrollPos.y,e===F.scrollPos.x&&t===F.scrollPos.y&&i?(At(),F.scrollTimeout=null,F.loading||dt()):i||(ke({}),F.scrollTimeout=null)},500),F.scrollPos.x=x.scroller[0].scrollLeft,F.scrollPos.y=x.scroller[0].scrollTop,F.scrollPos.t=t),F.scrollBuffer=e?setTimeout(Ce,50):null}}function Ce(){null!==F.scrollBuffer&&(clearTimeout(F.scrollBuffer),F.scrollBuffer=null)}function Ee(){if(S.direction===nn.Horizontal){var e=x.pageDivs.length?(k?Math.max(M.size.height,M.size.width):M.size.height)*S.zoom:0;S.thumbpadding&&"number"==typeof S.thumbpadding&&(e+=2*S.thumbpadding),x.edges[0].height(e),x.edges[1].height(e)}}function Me(e,t){t=t||0===t?t:e+x.pageDivs.length-1,t=Math.max(e,t);var n=S.tabular?he():1,o=S.tabular?(Math.floor(t/n)+1)*n-t:1,i=ue(e),r=E.document.getPageCount(),a=t<r?ne(t):{width:0,height:0},l=t<r-n?ne(r-1):{width:0,height:0},s=ce(e,t);s.width+=a.width,s.height+=a.height;var u=ce(t+1,r-1);if(u.width+=l.width,u.height+=l.height,S.direction===nn.Vertical)if(x.edges[0].height(i.height),t+o>=E.document.getPageCount()){var c=i.height+s.height+u.height;x.scrollH&&c>x.scroller[0].clientHeight&&x.content.width()<=x.scroller[0].clientWidth?x.edges[1].height(x.scrollH.scrollbarHeight()):x.edges[1].height(0)}else x.edges[1].height(u.height),en.Chrome&&x.content.height("");else if(S.direction===nn.Horizontal)if(x.edges[0].width(i.width),t+o>=E.document.getPageCount()){var d=i.width+s.width+u.width;x.scrollV&&d>x.scroller[0].clientWidth&&x.content.height()<=x.scroller[0].clientHeight?x.scrollV._explicitSize?x.edges[1].width(x.scrollV.height()<x.scrollV._tray.height()?x.scrollV.width():0):x.edges[1].width(x.scrollV.width()):x.edges[1].width(0)}else x.edges[1].width(u.width),x.edges[1].height(1)}function Fe(){return F.activepage}function Se(e){if(e=e||1,0===F.prpr&&0<x.pageDivs.length){var t=he(S.zoom);Ue();for(var n=e;0<n;n--){var o=x.pageDivs[0]._index-t;if(0<=o&&o<E.document.getPageCount()){for(var i=t-1;0<=i;i--){var r=We(-1);He(r),x.content.prepend(r),Be(r,Xe(o+i),o+i)}Me(o,null),Ee()}}setTimeout(qe,10)}}function Ae(e){e=e||1;var t=x.pageDivs[x.pageDivs.length-1]._index+1;if(0===F.prpr&&0<x.pageDivs.length&&t<E.document.getPageCount()){Ue();for(var n=he(S.zoom),o=E.document.getPageCount(),i=e;0<i;i--){var r=x.pageDivs[x.pageDivs.length-1]._index+1;if(r<o){for(var a=r+n-1-x.pageDivs.length,l=0;l<n;l++){var s=We(1);He(s),x.content.append(s),Be(s,Xe(r+l),r+l)}Me(a+1,r),Ee()}}setTimeout(qe,10)}}
/**
   * Scrolls the viewer to the given page index and executes the callback when finished.
   * @param {number} index - Index of the page to show.
   * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
   *  @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPage
   */function Oe(e,t){Ie(e+1,t)}
/**
   * Scrolls the viewer to the given page number and executes the callback when finished.
   * @param {number} pageNumber - Number of the page to show. Note that page number is expected 1-based.
   * @param {NotificationCallback} [callback]: function to execute after this operation is done
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPageNumber
   * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer#showPage|showPage} instead.
   */function Ie(e,t){if(e=Math.max(1,e),e=Math.min(E.document.getPageCount(),e),M.number!==e){var n=e-M.number;Math.abs(n)<x.pageDivs.length?ze(n,t):Ve(e,!0,t)}else ze(0,t)}function Ve(e,t,n){var o=E.document.getPageCount(),i=e-1;if(0===F.prpr&&0<o){var r=function(){qe(!t),"function"==typeof n&&n.call()};Ue();var a=0,l=0,s=i<=0?0:i;if(s+x.pageDivs.length>=o){if(s=o-x.pageDivs.length,S.tabular){var u=he();s=Math.ceil(s/u)*u}s=Math.max(s,0)}if(S.direction===nn.Vertical){a=ue(s).height,x.edges[0].height(a),Me(s,null),Ee(),je();for(var c=0;c<x.pageDivs.length;c++)x.content.append(x.pageDivs[c]),Be(x.pageDivs[c],null,s+c);var d=ue(Math.max(i,0)).height,h=M.number<e?-M.size.height:M.size.height;t&&d!==F.scrollPos.y?(_e(null,d+h,!1),_e(null,d,!0,r)):r.call()}else if(S.direction===nn.Horizontal){l=ue(s).width,x.edges[0].width(l),Me(s,null),Ee(),je();for(var f=0;f<x.pageDivs.length;f++)x.content.append(x.pageDivs[f]),Be(x.pageDivs[f],null,s+f);var p=ue(Math.max(i,0)).width,g=M.number<e?-M.size.width:M.size.width;t&&p!==F.scrollPos.x?(_e(p+g,null,!1),_e(p,null,!0,r)):r.call()}}else me("paused",n)}function Le(e){var t=E.document.getPageCount();if(0<e&&e<=t){if(M.number!==e||M.numberoutof!==t){if(x.pageLabel.html(e+" / "+t),M.number!==e){M.number=e;for(var n=0;n<x.pageDivs.length;n++){var o=x.pageDivs[n];o._index===e-1?o.addClass(ln.atala_active_page):o.removeClass(ln.atala_active_page)}Qt({type:"pagenumberchanged",number:M.number})}M.numberoutof!==t&&(M.numberoutof=t)}}else x.pageLabel.html(""),x.viewport.find("."+ln.atala_active_page).removeClass(ln.atala_active_page),M.numberoutof=0}function je(){for(var e=x.pageDivs.length-1;0<=e;e--)He(x.pageDivs[e])}function He(e){en.Explorer&&document.activeElement&&e.has(document.activeElement).length&&x.scroller.focus(),S.allowannotations&&(en.Firefox||en.Edge)&&E.annotations.__clearAllSelection(e),e.detach(),null!=e._img&&(e._img._page=null,e._img.getDomElement().detach(),e._img=null),Qt({type:"pagerecycled",index:e._index,page:e}),e._index=-1,e.removeAttr(sn.atala_page_index)}function Re(e){He(e),e._index=-1,e.removeAttr(sn.atala_page_index),e._img=null,e.remove()}function Be(t,e,n,o){if(t._index===n&&t._img===e&&!o)return!1;if(o&&!t.nullinserted&&n<0)return!1;if(t._index=n,t.attr(sn.atala_page_index,n),n>=E.document.getPageCount())return t.hide(),!1;if(t._img&&t._img!==e&&(t._img._page=null,0<t.has(t._img.getDomElement()).length&&t._img.getDomElement().detach(void 0,!0)),t._rubberband&&t._rubberband.reset(),t._img=e,t._img&&(t._img._page=t),t.css({display:S.tabular||S.direction===nn.Horizontal?"inline-block":"block"}),S.showpagenumber&&(t.css({position:"relative"}),t._num||(t._num=Kt('<div style="position:absolute; right:20px; bottom:16px;z-index:1"/>'),t._num.addClass(ln.atala_page_number),t.append(t._num)),t._num.text(t._index+1)),t._img&&t._img._binds&&(t._img._binds.pageresize||(t._img._binds.pageresize=function(e){Qt({type:"pageresize",page:e.image._page,image:e.image,index:e.image._page?e.image._page._index:E.document.getPageIndexByImageIndex(e.image._index),width:e.width,height:e.height})},t._img.on({pageresize:t._img._binds.pageresize})),t._img._binds.pagesizechanged||(t._img._binds.pagesizechanged=function(e){Qt({type:"pagesizechanged",page:t,image:e.image,index:e.index,width:e.width,height:e.height,dx:e.dx,dy:e.dy})},t._img.on({pagesizechanged:t._img._binds.pagesizechanged}))),t._img){var i=t._img.getDomElement();t.append(i),t._img.trigger({type:"inserted",page:t}),t._img._loaded||(t.nullinserted?t._img.css({width:t.width(),height:t.height()}):Ne(t._img,t._index)),F.newpagedivsize||t.css({width:"",height:""}),t.nullinserted=!1}else t.nullinserted=!0,F.newpagedivsize||Ne(t,t._index);return Qt({type:"pageshown",page:t,index:t._index}),!0}function Ne(e,t){var n=ne(t,null,!1);e.css({width:n.width,height:n.height})}function Ue(){F.prpr++}function qe(e){0!==F.prpr&&(F.prpr--,0!==F.prpr||e||ke())}function We(e){return 0<e?(ye(x.pageDivs,0,x.pageDivs.length-1),x.pageDivs[x.pageDivs.length-1]):(ye(x.pageDivs,x.pageDivs.length-1,0),x.pageDivs[0])}
/**
   * Checks whether specified document page have been loaded.
   * @param {number} index - Page index.
   * @returns {boolean} `true` if page have already been loaded; `false` otherwise.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function isPageLoaded
   */
/**
   * Silently reloads the specified page if it has already been loaded before. Not creates new page.
   * @private
   * @return {object} page reload promise
   */
function Ze(e,t){var n=Kt.Deferred();0<=e.cacheIndex&&x.loadedImgs[e.cacheIndex]?x.loadedImgs[e.cacheIndex].invalidate(t,function(){n.resolve()}):n.resolve();return n.promise()}function Xe(e,t,n){"function"==typeof t&&(n=t,t=void 0);var o=E.document.getPageDefinition(e);if(o){if(o.cacheIndex<0||!x.loadedImgs[o.cacheIndex]){var i=F.nextImageCacheIndex++;o.cacheIndex=i,E.document.setPageCacheIndex(e,i),x.loadedImgs[i]=Y(o.index,o.ref,t,function(e){e&&((x.loadedImgs[i]=e)._cacheIndex=i,E.memory.allocate(e)),"function"==typeof n&&n.call()}),S.allowtext&&E.text&&!k&&E.text.ensurePageTextLoaded(e)}else"function"==typeof n&&n.call();return x.loadedImgs[o.cacheIndex]}}function Ye(e){var t=Ge(e);if(t){var n=x.scroller[0].scrollLeft,o=x.scroller[0].scrollTop;return ve(t[0],x.scroller[0],n,o,n+x.scroller[0].clientWidth,o+x.scroller[0].clientHeight)}return!1}function Ge(e){for(var t=null,n=0;n<x.pageDivs.length&&null===t;n++)x.pageDivs[n]._index===e&&(t=x.pageDivs[n]);return t}function Je(e,t,n,o,i){o&&"function"==typeof o&&(i=o,o=!1);var r,a=Ge(e);if(a){var l=x.scroller[0].scrollLeft,s=x.scroller[0].scrollTop;if((r=ae(a[0],x.scroller[0])).left+=t.x,r.top+=t.y,!o&&r.left>=l&&r.left<=l+l+x.scroller[0].clientWidth&&r.top>=s&&r.top<=s+x.scroller[0].clientHeight)return void(i&&i())}else(r=ue(e)).left=r.width+t.x,r.top=r.height+t.y;var u={x:x.scroller[0].clientWidth/2,y:x.scroller[0].clientHeight/2};Qe(n,rn.BottomLeft)?(u.x=x.scroller[0].clientWidth,u.y=x.scroller[0].clientHeight):Qe(n,rn.TopLeft)&&(u.x=0,u.y=0),_e(r.left-u.x,r.top-u.y,!0,i)}function Qe(e,t){return e&&t&&e.x===t.x&&e.y===t.y}var Ke=null;function $e(){Ke&&clearTimeout(Ke),Ke=setTimeout(function(){Qt("documentchanged")},200)}function et(){x.scroller.stop(),x.scroller.pauseEventPropagation(),Ue()}function tt(){Pe(),0<x.pageDivs.length&&Ye(E.document.getPageCount()-1)&&Me(x.pageDivs[0]._index),Ee(),x.scroller.resumeEventPropagation(),qe()}function nt(){F.zooming=!0,et(),Qt("zoomstarted")}function ot(e){var t,n,o,i,r,a,l;e=Math.min(e,te()),e=Math.max(e,ee()),t=e,n=!1,i=ue(M.number,null,null),r=ue(M.number,null,null,t),a=(x.scroller.scrollLeft()-i.width)/S.zoom*t,l=(x.scroller.scrollTop()-i.height)/S.zoom*t,_e(r.width+a,r.height+l,n,C,o),S.zoom=e,dt(!1),ut(e,!1)}function it(){F.zooming=!1,tt(),Qt({type:"zoomchanged",zoom:S.zoom})}
/**
   * Asynchronously zooms the viewer to the given zoom over the default zoom duration
   * @param {number} zoom - Desired zoom level to zoom to.
   * @param {NotificationCallback} [callback] - function to execute after the zoom is finished animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoom
   */function rt(e,n){var o=this;if(F.zooming)me("zooming",n);else if(F.zooming=!0,et(),Qt("zoomstarted"),e!==S.zoom){e=Math.min(e,te()),e=Math.max(e,ee());var t=ue(M.number,null,null),i=ue(M.number,null,null,e),r=(x.scroller.scrollLeft()-t.width)/S.zoom*e,a=(x.scroller.scrollTop()-t.height)/S.zoom*e;S.zoom=e,dt(!0,function(){var t=this;_n(this,o),ut(e,!0,function(){var e=this;_n(this,t),at(),_e(i.width+r,i.height+a,!1,C,function(){_n(this,e),x.scrollH&&x.scrollH.scrollLeft(x.scroller.scrollLeft()),x.scrollV&&x.scrollV.scrollTop(x.scroller.scrollTop()),null!=n&&n()}.bind(this))}.bind(this))}.bind(this))}else at(),"function"==typeof n&&n.call()}function at(){F.zooming=!1,tt(),Qt({type:"zoomchanged",zoom:S.zoom})}function lt(e,t){rt(S.zoom+(e?-1:1)*S.zoom*.3,t)}function st(){x.edges[0]._z=S.zoom}function ut(e,t,n){if(0<x.edges.length){n="function"==typeof n?(l=[st,n],function(){for(;l.length;){var e=l.shift();e&&e.apply(this,arguments)}}):st;var o=S.direction===nn.Vertical,i=ue(x.pageDivs[0]&&x.pageDivs[0]._img?x.pageDivs[0]._index:0,null,null,e),r=o?i.height:i.width;if(t&&!F.loading){var a=o?{height:r}:{width:r};x.edges[0].animate(a,{duration:C,easing:"easeOutQuad",complete:n,queue:!1})}else o?x.edges[0].height(r):x.edges[0].width(r),"function"==typeof n&&n.call();ct()}var l}function ct(c){setTimeout(function(){var e=Kt("<canvas/>");c=c||S.zoom;var t=S.direction===nn.Vertical,n=F.newpagedivsize?F.newpagedivsize:{width:M.size.width*c,height:M.size.height*c},o=Math.max(1,S.pagespacing),i=he();e[0].width=(n.width+o)*(t?i:1),e[0].height=n.height*(t?1:i);var r=e[0].getContext("2d");r.lineWidth=S.pageborderwidth,S.backcolor&&(r.fillStyle=S.backcolor);for(var a=0;a<i;++a){var l=t?1+a*n.width:1,s=t?1:1+a*n.height;r.strokeRect(l,s,n.width-2,n.height-2),S.backcolor&&r.fillRect(l+r.lineWidth,s+r.lineWidth,n.width-2*(1+r.lineWidth),n.height-2*(1+r.lineWidth))}var u={backgroundImage:"url("+e[0].toDataURL()+")",backgroundSize:"auto auto",backgroundRepeat:t?"repeat-y":"repeat-x"};x.edges[0].css(u),x.edges[1].css(u)},0)}function dt(e,t){for(var n=0,o=!0,i=function(){if(--n<=0){if(S.direction===nn.Horizontal){var e=se().width;x.spacer||(x.spacer=O(),x.spacer.css({position:"absolute",top:"-1px",height:"1px"}),x.viewport.append(x.spacer)),x.spacer.width(e)}"function"==typeof t&&t.call(),0===F.prpr&&(en.Safari||en.Chrome)&&x.edges[1].hide().show()}},r=0;r<x.pageDivs.length;r++){if(x.pageDivs[r]._img)(x.pageDivs[r]._img.needsZoom()||x.pageDivs[r]._img.needsRotate())&&(o=!1,n++,x.pageDivs[r]._img.needsRotate()?x.pageDivs[r]._img.rotate(i):x.pageDivs[r]._img.needsZoom()&&x.pageDivs[r]._img.zoom(e,i))}o&&i.call()}
/**
   * Asynchronously zooms the viewer to fit to a page.
   * @param {Atalasoft.Utils.Fitting} fit - Type of fitting to fit the page to.
   * @param {number} pageNumber - Page number to fit to.  Note, that it's 1-based.
   * @param {NotificationCallback} callback - Function to execute after the fit is done animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function fit
   */function ht(e,t,n){null!=t?"function"==typeof t&&(n=t,t=M.number):t=M.number;var o=ft(e,t-1),i=o.zoom,r=on.Width===o.fit&&nn.Vertical===S.direction,a=on.Height===o.height;r&&_e(0,null,!1),a&&_e(null,0,!1),rt(i,n)}function ft(e,t){var n,o,i,r=(n=ge(),o=S.showpageborder?2*S.pageborderwidth:0,i={width:n.width-o,height:n.height-o},S.tabular&&(1<S.columns&&(i.width=Math.floor((n.width-(S.pagespacing+o)*S.columns)/S.columns)),1<S.rows&&(i.height=Math.floor((n.height-(S.pagespacing+o)*S.rows)/S.rows))),i),a=oe(t,1,!1);0!==a.width&&0!==a.height||(e=null);var l=S.zoom;switch(e){case on.None:break;case on.Best:e=a.width/r.width>a.height/r.height?(l=r.width/a.width,on.Width):(l=r.height/a.height,on.Height);break;case on.Height:l=r.height/a.height;break;case on.Width:l=r.width/a.width;break;default:l=1,e=on.None}return{zoom:l,fit:e}}function pt(e){return S.zoom*E.document.getPageFitMultiplier(e)}function gt(e){return E.document.getPageRotation(e)}function mt(e,t){t=t||0;var n=gt(e),o=pt(e),i=fe(e,t),r=$t.matrix();r.scale(o,o,0,0),r.rotate(n+t,0,0);var a,l,s=(a=r,l={x:i.width,y:i.height},{x:a.x(l.x,l.y),y:a.y(l.x,l.y)}),u=Math.min(0,s.x),c=Math.min(0,s.y),d=r.invert(),h=d.x(-u,-c),f=d.y(-u,-c);return r.translate(h,f),r}function vt(e){var t=Kt.data(e.currentTarget,"_config"),n=Kt.data(e.currentTarget,"_annoConfig");!n&&t&&(n={type:t.icon,rotatable:S.showrotatetools}),n&&(E.mouseTool.setTool(tn.None,tn.None),E.annotations.drawAnnotation(n,!1,bt,yt))}function yt(){E.mouseTool.setTool(tn.Pan,tn.None)}function bt(){E.mouseTool.setTool(tn.Pan,tn.None)}
/**
   * Checks whether annotations support is enabled.
   * @private
   */function xt(){return!1===S.allowannotations&&A("InitError",'The "allowannotations" property in the WebDocumentViewer config is set to false.'),S.allowannotations}function wt(){for(var e=0;e<x.pageDivs.length;e++)x.pageDivs[e]._draw.toFront()}function _t(){for(var e=0;e<x.pageDivs.length;e++)x.pageDivs[e]._draw.reset()}function zt(e,t,n){if(e){if(F.loading=!0,je(),M.size.width=e.pagewidth,M.size.height=e.pageheight,M.count=e.pagecount,M.buffer=S.pagebuffersize,M.dpi=e.dpi,M.vector=!0===e.vector,S.allowannotations=n.allowannotations,S.allowforms=n.allowforms,S.allowtext=n.allowtext,S.documenturl=n.documenturl,S.annotationsurl=n.annotationsurl,S.formsurl=n.formsurl,E.document.__linkChanges(t),E.annotations&&(E.annotations.clear(),E.annotations.loadAnnotations(e)),E.forms&&(E.forms.clear(),e.forms&&E.forms.loadForms(e)),E.text&&E.text.search(""),F.zooming=!1,e.zoom)S.zoom=e.zoom;else{var o=ft(S.fitting,1);S.zoom=o.zoom}Ct(e.pagenumber||0),E.mouseTool.setTool(S.mousetool.type&&!k?S.mousetool.type:tn.Pan,tn.None),ct(),F.loading=!1,dt(),W=t.__getSelectedPagesIndices,Qt({type:"activedocumentchanged"})}}function Pt(e,t){t&&Rt(!0);for(var n=0;n<e._controllers.document.getPageCount();++n){var o=e._controllers.document.getPageDefinition(n,s);o&&0<=o.cacheIndex&&x.loadedImgs[o.cacheIndex]&&(E.memory.deallocate(x.loadedImgs[o.cacheIndex]),x.loadedImgs[o.cacheIndex].dispose(),x.loadedImgs[o.cacheIndex].remove(),x.loadedImgs[o.cacheIndex]=void 0)}}function Tt(e,o){F.loading=!0;var t={atala_docurl:S.documenturl,atala_pagebuffer:S.pagebuffersize,atala_minwidth:S.minwidth};k&&(t.atala_thumb=k,t.atala_capt_format=S.thumbcaptionformat),null!=e&&("function"==typeof e&&(o=e,e=null),Kt.extend(t,e)),jt({type:"docinfo",serverurl:S.serverurl,query:"?ataladocinfo=",method:"GET",data:t,cancel:!1,info:{pagewidth:-1,pageheight:-1,pagecount:-1}},function(e){Dt(e,o)},function(e,t,n){!function(e,t,n,o){if(e.responseText){var i=e.responseText.substr(e.responseText.indexOf("</html>")+7);0<=i.indexOf("\x3c!--")?0<(i=i.replace("\x3c!--","").replace("--\x3e","")).length&&(n="<pre>"+i+"</pre>"):0<e.responseText.indexOf("web.config")&&0<e.responseText.indexOf("customErrors")&&(n+=": web.config customErrors attribute has disabled remote error messages.")}A("DocumentLoadError",n),"function"==typeof o&&o.call(void 0,n)}(e,0,n,o)})}function Dt(t,n){var e,o;t&&!1!==t.licensed?(M.size.width=t.pagewidth,M.size.height=t.pageheight,M.count=t.pagecount,M.buffer=S.pagebuffersize,M.dpi=t.dpi,M.vector=!0===t.vector,M.caption=t.thumbcaptionformat||(S.showthumbcaption?"{0}":""),le.zero(),E.memory.clearEntries(),E.memory.colorDepth=t.colordepth,E.memory.pageSize={width:t.pagewidth,height:t.pageheight},Qt({type:"documentinfochanged",info:{count:M.count,dpi:M.dpi,size:{height:M.size.height,width:M.size.width},vector:M.vector},customData:t.customData}),E.text&&(E.text.clear(),t.text&&E.text.loadText(t)),F.loading&&(S.zoom=1,X(),_e(0,0),x.scrollV&&x.scrollV.pageNum(1),Le(1),ht(S.fitting,1,function(){Ee(),Me(0,x.pageDivs.length-1);for(var e=0;e<x.pageDivs.length&&e<M.count;e++)x.content.append(x.pageDivs[e]),Be(x.pageDivs[e],null,e);0<x.pageDivs.length&&x.pageDivs[0].addClass(ln.atala_active_page),t.layers&&t.layers.length?E.annotations.loadAnnotations(t):S.annotationsurl&&E.annotations&&E.annotations.clear(),E.forms&&(E.forms.clear(),t.forms&&E.forms.loadForms(t)),E.mouseTool.setTool(S.mousetool.type&&!k?S.mousetool.type:tn.Pan,tn.None),F.loading=!1,ct(),"function"==typeof n&&n(t.error,t),t.error&&setTimeout(function(){A("DocumentLoadError",t.error)},0)})),F.loading=!1):(o=t&&!1===t.licensed?(e="LicenseException",t.error?t.error:"LicenseException: Handler was unable to find a valid license."):(e="DocumentLoadError","HandlerException: Handler did not return any data."),F.loading=!1,"function"==typeof n&&n.call(void 0,o),e&&o&&A(e,o))}function kt(){Ct()}function Ct(e){if(X(),0<x.pageDivs.length){var t=E.document.getPageCount(),n="number"==typeof e?e:x.pageDivs[0]._index;n=0<=n?Math.min(n,t-x.pageDivs.length):0;for(var o=0;o<x.pageDivs.length&&o<t;o++){var i=n+o;He(x.pageDivs[o]),x.content.append(x.pageDivs[o]),Be(x.pageDivs[o],null,i)}}Me(0<x.pageDivs.length?x.pageDivs[0]._index:0,null),Ee(),At(),Pe();var r=re(x.scroller[0].scrollLeft,x.scroller[0].scrollTop);Le(r+1),0<=e&&r!==e&&Oe(e)}function Et(e,t){var n={atala_docurl:S.documenturl,atala_spath:S.savepath};function o(e){!function(e){e.error?A("DocumentSaveError",e.error):be("DocumentSave: success="+e.success);Qt({type:"documentsaved",success:e.success,customData:e.customData,fileName:e.fileName})}(e),"function"==typeof t&&t.call()}Kt.extend(n,e),jt({type:"docsave",serverurl:S.serverurl,query:"?ataladocsave=",method:"POST",data:n,cancel:!1,info:{success:void 0,error:void 0}},o,function(e){var t=[];t.error=e.responseText,o(t)})}function Mt(e,t,n){var o=null;return"string"==typeof e?(o={},F.initialized&&n&&(0<e.length?o=n.createHandlerRequest(S.serverurl,e,t):0===e.length&&n.clear()),o.url=e):void 0!==e&&null!=e&&A("openUrlError","string input expected for url."),o}function Ft(){Gt({annotationsloaded:Vt})}function St(){Gt({formsloaded:Lt})}function At(e){if(!(0<x.pageDivs.length&&void 0===x.pageDivs[0]._index))for(var t=0;t<x.pageDivs.length;t++)It(x.pageDivs[t],e)}function Ot(e,t){var n=Ge(e);n&&It(n,t)}function It(e,t){(Be(e,Xe(e._index),e._index)||t)&&(E.annotations&&E.annotations.showLayer(e._index,e),E.forms&&!k&&E.forms.showLayer(e._index,e),E.text&&!k&&S.allowtext&&E.text.showLayer(e._index,e))}function Vt(e){e.error&&(A("AnnotationsLoadError",e.error),S.annotationsurl=""),E.annotations&&Jt({annotationsloaded:Vt})}function Lt(e){e.error&&(A("FormsLoadError",e.error),S.formsurl=""),E.forms&&Jt({formsloaded:Lt})}function jt(o,t,i,n){var r,a,e,l=this,s=(r=o,a=function(e){t(e.request.info)},Gt({handlerreturned:e=function e(t){t.request===r&&(Jt({handlerreturned:e}),"function"==typeof a&&a.call(this,t))}}),e);if(Qt({type:"beforehandlerrequest",request:o}),!o.cancel&&(Jt({handlerreturned:s}),o.serverurl&&!Kt.isEmptyObject(o.data))){if(!(o.info instanceof Kt&&"docpage"===o.type)){if("fileupload"!==o.type)return Kt.ajax({type:o.method,url:o.serverurl+o.query+"?",dataType:"json",data:o.data,success:t,error:i,crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0});var u="&"+Kt.param(o.data),c=new FormData;c.append("file",o.file,o.file.name);var d=Kt.ajax({type:o.method,url:o.serverurl+o.query+"??"+u,dataType:"json",data:c,contentType:!1,processData:!1,success:function(e){_n(this,l),e.success&&(e.success=JSON.parse(e.success)),e.canceled&&(e.canceled=JSON.parse(e.canceled)),t(e,o.file.name)}.bind(this),error:function(e,t,n){_n(this,l),i(t,n,o.file.name)}.bind(this),crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0,xhr:function(){var t=this;_n(this,l);var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){_n(this,t),e.lengthComputable&&(n(o.file.name,e.loaded,e.total)||d.abort())}.bind(this),!1),e}.bind(this)});return d}o.info.attr("src",o.serverurl+o.query+"&"+Kt.param(o.data))}}
/**
   * Resets the viewer to its default state.
   * @param {OpenUrlCallback} [callback]  - Function to execute when the empty process is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function empty
   */
function Ht(e){F.loading=!0;Rt(),Dt({pagewidth:0,pageheight:0,pagecount:-1},function(){Pe(),Qt({type:"documentunloaded"}),"function"==typeof e&&e.call()})}function Rt(e){var t;F.initialized&&(je(),X(0),e||function(){for(var e=0;e<x.loadedImgs.length;e++)x.loadedImgs[e]&&(x.loadedImgs[e].dispose(),x.loadedImgs[e].remove());x.loadedImgs.length=0}(),x.edges[0].width(0).height(0),x.edges[1].width(0).height(0),x.scrollH&&(x.scrollH.scrollSize(0),De(x.scrollH)),x.scrollV&&(x.scrollV.scrollSize(0),De(x.scrollV)),t={backgroundImage:"",backgroundSize:"",backgroundRepeat:"",backgroundColor:""},x.edges[0].css(t),x.edges[1].css(t))}
/**
   * Gets the current zoom level of the viewer.
   * @returns {number}
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function getZoom
   */
/**
   * Indicates whether the viewer is ready to receive commands.
   *
   * If all dependent JavaScript libraries are included to the web page, control is initialized synchronously.
   * Otherwise dependencies are asynchronously loaded automatically using {@link WebDocumentViewerConfig.scripturl|scripturl} parameter or from the same url where JQuery library is referenced.
   * When all dependent JavaScript libraries are loaded, {@link Atalasoft.Controls.WebDocumentViewer#event:initialized|initialized} event is fired.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function isReady
   * @returns {boolean}
   */
function Bt(){return F.initialized}
/**
   * Scrolls to the given coordinates, does not account for zoom, i.e. `x` and `y` values are passed in window coordinate space.
   * @param {number} x - Indicating the coordinate of the x axis.
   * @param {number} y - Indicating the coordinate of the y axis.
   * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
   * @param {NotificationCallback} [callback] - function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function scrollTo
   */
/**
   * Scrolls to the next viewable page.
   * @param {number} n - Number of pages to scroll forward.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function next
   */
function Nt(e,t){var n=S.direction===nn.Vertical?he():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),ze(e,t)}
/**
   * Scrolls to the previous viewable page.
   * @param {number} n - Number of pages to scroll backward.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function previous
   */function Ut(e,t){var n=S.direction===nn.Vertical?he():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),ze(-e,t)}
/**
   * Zooms in one level.
   * @param {NotificationCallback} [callback] - Function to execute when the zoom operation is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomIn
   */function qt(e){lt(!1,e)}
/**
   * Zooms out one level.
   * @param  {NotificationCallback} [callback] - Function to execute when the zoom operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomOut
   */function Wt(e){lt(!0,e)}
/**
   * Callback signature for {@link Atalasoft.Controls.WebDocumentViewer#openUrl | openUrl} method.
   * @callback OpenUrlCallback
   * @param {string} error - If present, provides error description. If `undefined`, operation were successful.
   */
/**
   * Opens the document at the given urls.
   * It's possible to call this method multiple times for the same document to load document and the forms or annotations data separately.
   *
   * @param {string} [documenturl] - url of the document file with respect to the {@link WebDocumentViewerConfig.serverurl | config.serverurl}.
   *
   * If set to empty string, call is equivalent to {@link Atalasoft.Controls.WebDocumentViewer#empty|empty}.
   *
   * @param {string} [annotationsurl] - url of the annotation xmp file with respect to the {@link WebDocumentViewerConfig.serverurl| config.serverurl}.
   *
   * *Note*, If empty string is passed, annotations from the previous document are cleared. if not passed or `undefined`, annotations from the previously opened document are preserved.
   * @param {string} [formurl] - url of the form file with respect to the {@link WebDocumentViewerConfig.serverurl| config.serverurl}.
   * @param {OpenUrlCallback} [callback] - Function to execute when the open operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function openUrl
   */function Zt(e,t,n,o){null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null));var i=0,r=!1,a=Mt(t,e,E.annotations),l=Mt(n||e,e,E.forms);S.annotationsurl=a?a.url:S.annotationsurl,S.formsurl=l?l.url:S.formsurl;var s,u,c,d,h=function(e,t){--i<=0&&(At(!0),Qt({type:"documentloaded",customData:null==t?void 0:t.customData}),"function"==typeof o&&o.call(void 0,e,t))};if("string"==typeof e){if(0===e.length)Ht(h);else if(S.documenturl=e,F.initialized){Rt(),J(x.scrollH),J(x.scrollV),i++,0===e.length&&Ht(h);var f={};S.allowannotations&&a&&a.data&&(Ft(),Kt.extend(f,a.data)),S.allowforms&&l&&l.data&&(St(),Kt.extend(f,l.data)),r=!0,Tt(f,h)}}else!(e||!(0<S.documenturl.length)||!t&&""!==t&&!n&&""!==n)||A("openUrlError","string input expected for document url.");r||(a&&(i++,c=a,d=h,E.annotations&&(Ft(),E.annotations.makeHandlerRequest(c,d))),l&&(i++,s=l,u=h,E.forms&&(St(),E.forms.makeHandlerRequest(s,u))))}
/**
   * Saves the client changes in this document to the predefined save folder or to the given path.
   * @param {string} [subpath] - Relative path to save to starting from {@link WebDocumentViewerConfig.savepath | savepath}. Must be writable.
   * @param {string} [saveformat] - Save file format. If specified, the value overrides {@link WebDocumentViewerConfig.savefileformat | savefileformat} form config.
   * @param {object} [params] - A plain object containing optional reload parameters that will be passed to server.
   * @param {NotificationCallback} [callback]  to execute when the save has finished
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function save
   *
   * @example
   * const _viewer = new Atalasoft.Controls.WebDocumentViewer({
   * 		parent: atalaJquery('#atala-document-container-left'),
   * 		toolbarparent: atalaJquery('#atala-document-toolbar-left'),
   *		serverurl: 'WebDocumentHandler.ashx',
   *		savepath: 'Save/',
   *		savefileformat: 'pdf'
   * });
   *
   * // document will be saved to the subpath subfolder. So if the savepath configuration
   * // parameter was set to Save/ then the save path will be Save/subpath. The format to save the file to will
   * // be taken from the configuration parameter savefileformat (in this example, 'pdf').
   * // This means that the file in pdf format will be saved in Save/subpath folder.
   *  _viewer.save(‘subpath’) // saves to ‘Save/subpath’ in ‘pdf’ format
   *
   * // document will be saved to ‘Save/’ folder in ‘tif’ format.
   * _viewer.save(‘’, ‘tif’)
   */function Xt(e,t,n,o){"function"==typeof n&&(o=n,n={}),"function"==typeof t&&(o=t,t=S.savefileformat),"function"==typeof e&&(o=e,e=null),void 0===t&&(t=S.savefileformat);var i=Kt.extend(!0,n,{atala_subpath:e||"",atala_sformat:t});E.annotations&&Kt.extend(i,{atala_iuname:S.annotations.saveusername,atala_annos:E.annotations.stringifyChanges()}),E.forms&&Kt.extend(i,{atala_forms:E.forms.stringifyChanges()}),E.document&&Kt.extend(i,{atala_document:E.document.stringifyChanges()}),Et(i,o)}
/**
   * Gets the current page index
   * @returns {number} Zero based index of the current page.
   *
   * Note, that current page index detection could be affected by {@link WebDocumentViewerConfig.pageselectlocation|pageselectlocation} configuration parameter.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function getCurrentPageIndex
   */
function Yt(){return M.number-1}
/**
   * Sets the current mouse tool
   * @param {Atalasoft.Utils.MouseToolType} tool - Type of the tool to set.
   *
   * Mouse tool configuration could be passed using {@link WebDocumentViewerConfig.mousetool| mousetool} configuration option.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function setMouseTool
   */
/**
   *  Attaches a handler to an event.
   * @param {string} event - the name of the event to bind to.
   * @param {function} handler - event handler.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function bind
   */
function Gt(e,t){return xe(arguments,!0),a.on.apply(a,arguments),u}
/**
   * Detaches the handler from the event.
   * @param {string} event - the name of the event to unbind.
   * @param {function} [handler] -  the event handler to unbind. If not specified, all handlers are unbound.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function unbind
   */function Jt(e,t){return xe(arguments,!1),a.off.apply(a,arguments),u}
/**
   * Triggers the event.
   * @param {string} event - the name of the event to trigger.
   * @param {Object} [parameters] - the event data.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function trigger
   */function Qt(e,t){return a.trigger.apply(a,arguments),u}
/**
   * Gets the current document info
   * @return {{count: *, dpi: number, size: {height: number, width: number}, vector: boolean}} object indicating document main page size, and number of pages
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function getDocumentInfo
   */
/**
   * [Internal] Gets debug info object
   * @returns debug info object if available, otherwise null
   */
return u.__getDebugInfo=function(){var e={version:pn.join(".")};S.debug&&Kt.extend(!0,e,{dom:x,controllers:E,page:M});return e}
/**
   * [Internal] Gets the viewer linkage for controls that inherit this one
   * @param viewer object of type WebDocumentViewer
   * @returns linker object if possible, otherwise undefined
   */,u.__getViewerLink=function(e){if(e&&"Atalasoft.Controls.WebDocumentThumbnailer"===e.typeOf){var t=new function(){this.typeOf="__LVlinker",this._id=s,this._config=S,this._controllers=E,this._dom=x,this._page=M,this._state=F,this._annos=null,this._fields=null,this.stateManager=d,this.__createDialog=V,this.__createDiv=O,this.__createDOM=P,this.__createDropDownButton=L,this.__createDropDownMenu=j,this.__createMenu=I,this.__getPageSize=pe,this.__getTabularIndexOffset=he,this.__redrawVisiblePages=At,this.__adjustVisiblePages=dt,this.__onDocumentChanged=kt,this.__startDomManipulation=et,this.__endDomManipulation=tt,this.__status=be,this.__updatePageSize=v,this.__silentReloadPage=Ze,this.__isObjectInRect=ve,this.__getIndexFromPos=ie,this.__showNext=Ae,this.__showPrevious=Se,this.__showPageAsync=Ve,this.__adjustEdgeHeights=Me,this.__getSelectedPagesIndices=W};return E.document.__linkChanges(t),S.allowannotations&&(e!==u&&0<S.annotationsurl.length&&(S.annotationsurl=""),E.annotations.__linkAnnotations(t)),S.allowforms&&(e!==u&&0<S.formurl.length&&(S.formurl=""),E.forms.__linkForms(t)),S.allowtext&&E.text&&E.text.__linkText(t),t}},u.dispose=
/**
   * Removes all DOM elements, internal references, and empties memory intensive objects.
   * The WebDocumentViewer will no longer function after a call to this method.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function dispose
   */
function(){if(!k&&d&&d.closeDocument(),Rt(),x.main&&x.main.remove(),x.toolbar&&(x.toolbar.controlgroup("destroy"),x.toolbar.remove(),x.toolbar.annoToolbar&&(x.toolbar.annoToolbar.controlgroup("destroy"),x.toolbar.annoToolbar.remove())),x.search&&x.search.dispose(),x.uploadCtrl&&x.uploadCtrl.remove(),x.main=null,x.toolbar=null,x.scroller=null,x.viewport=null,x.content=null,x.scrollH=null,x.scrollV=null,x.loadedImgs.length=0,x.pageDivs.length=0,x.pageLabel=null,x.status=null,x.search=null,x.uploadCtrl=null,x.edges){for(var e=0;e<x.edges.length;e++)x.edges[e]=null;x.edges=[]}for(var t in E)E.hasOwnProperty(t)&&null!==E[t]&&(E[t].dispose(),E[t]=null);F={prpr:0,batchoperation:0,loading:(M={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0}},u.empty=Ht,u.fit=ht,u.getZoom=function(){return S.zoom},u.isReady=Bt,u.scrollTo=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);_e(e,t,n,null,o)}
/**
   * Scrolls by the given deltas, does not account for zoom, i.e. `dx` and `dy` values are passed in window coordinate space.
   * @param {number} dx - Indicating delta of the x axis.
   * @param {number} dy - Indicating delta of the y axis .
   * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function scrollBy
   */,u.scrollBy=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);i=e,r=t,a=n,l=null,s=o,_e(x.scroller.scrollLeft()+i,x.scroller.scrollTop()+r,a,l,s);var i,r,a,l,s},u.next=Nt,u.previous=Ut,u.zoom=rt,u.zoomIn=qt,u.zoomOut=Wt,u.openUrl=u.OpenUrl=Zt,u.save=Xt,u.uploadFiles=
/**
   * Uploads several files on server to the predefined upload folder or to the given path.
   * @param {Array<File>} files - Array of file objects that should be uploaded.
   * @param {string} [uploadpath] - Relative path to upload to starting from {@link WebDocumentViewerConfig.upload.uploadpath | uploadpath}. Must be writable.
   * @param {NotificationCallback} [callback] - Function to execute when the upload has requested.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function uploadFiles
   *
   */
function(e,t,n){if(k)return;E.upload.uploadFiles(e,t,n)}
/**
   * Uploads one file on server to the predefined upload folder or to the given path.
   * @param {File} file - File object that should be uploaded.
   * @param {string} [uploadpath] - Relative path to upload to starting from {@link WebDocumentViewerConfig.upload.uploadpath | uploadpath}. Must be writable.
   * @param {NotificationCallback} [callback]  - Function to execute when the upload has requested.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function uploadFile
   *
   * @example
   * <caption>Assuming you have a {@link https://developer.mozilla.org/en-US/docs/Web/API/File | File } object in your script. It can be
   * retrieved from a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file | input} control or from server or any other way.</caption>
   *
   * let viewer = new Atalasoft.Controls.WebDocumentViewer({
   *          ...
   *          upload:{} //enable upload support with default parameters. Where uploadpath is the web-project root folder.
   *          });
   * let file = document.getElementById('fileInput'); //Retrieve File object
   *
   * viewer.uploadFile(file, 'uploadDirectory'); //Upload the file to the 'uploadDirectory' web-project root sub folder.
   */,u.uploadFile=function(e,t,n){if(k)return;E.upload.uploadFile(e,t,n)}
/**
   * Filters files that should be uploaded using the settings from config {@link WebDocumentViewerConfig.upload | upload} section.
   * This includes filtering by size, by type and even by name in order to find out files for upload that have same names. It can be
   * useful, because all events in WDV related to upload use filename as a key, thus you can find duplicates and upload
   * such files in separate {@link Atalasoft.Controls.WebDocumentViewer#uploadFiles | uploadFiles} method calls.
   *
   * This method is fully optional and even if some files failed to pass this filtering, they still can be uploaded to server,
   * @summary Filters files for upload using the settings from config {@link WebDocumentViewerConfig.upload | upload} section.
   * @param {File[]} files - An array of file objects that can be used for upload.
   * @param {string[]} [filteredFiles] - An array of filenames that previously were filtered. It's used for find duplicates in a new bunch of files.
   * @param {NotificationCallback} [callback] - Function to execute when the filtering has finished.
   * @returns {File[]} An array files that have passed the filtering.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function filterFilesForUpload
   */,u.filterFilesForUpload=function(e,t,n){if(k)return;return E.upload.filterFilesPublic(e,t,n)},u.getCurrentPageIndex=Yt,u.bind=Gt,u.unbind=Jt,u.trigger=Qt,u.getDocumentInfo=function(){return{count:E.document.getPageCount(),dpi:M.dpi,size:{height:M.size.height,width:M.size.width},vector:M.vector}},u.setMouseTool=function(e){for(var t in tn)if(tn.hasOwnProperty(t)&&tn[t]===e){E.mouseTool.setTool(e);break}},u.isPageLoaded=function(e){var t=E.document.getPageDefinition(e);return 0<=t.cacheIndex&&x.loadedImgs[t.cacheIndex]&&x.loadedImgs[t.cacheIndex]._loaded}
/**
   * Reloads the specified page.
   * @param {number} index - The index of the page to reload.
   * @param {string|boolean} [annotations=false] - Url of the annotation xmp file or flag indicating whether to reload annotations of boolean flag indicating whether to load annotations data.
   * @param {string|boolean} [forms] - Url of the form file or flag indicating whether to reload forms of boolean flag indicating whether to load forms data.
   * @param {object} [params] - A plain object containing optional parameters that will be passed to server.
   *
   * Params could contain any application specific information that should be passed to server.
   * For example, this could be the aggregated list of the parameters that was used in {@link Atalasoft.Controls.WebDocumentViewer#reloadPage|reloadPage} calls for different pages.
   * @param {NotificationCallback} [callback] - function that is called when page have been loaded.
   *
   * This object will be available on the server side handler as an key-values collection. This allows to pass specific load options for individual pages.
   * @function Atalasoft.Controls.WebDocumentViewer#reloadPage
   */,u.reloadPage=function(o,e,t,n,i){var r=Kt.Deferred(),a=Kt.Deferred(),l=Kt.Deferred(),s=Kt.Deferred();"function"==typeof n&&(i=n,n=void 0),"function"==typeof t&&(i=t,t=!1),"function"==typeof e&&(i=e,e=!1),"function"==typeof i&&r.done(i);var u=E.document.getPageDefinition(o);if(!u)return r.resolve(),r.promise();0<=u.cacheIndex&&x.loadedImgs[u.cacheIndex]?s=Ze(u,n):Xe(o,n,function(){s.resolve()});var c="string"==typeof e?e:u.uri?null:S.annotationsurl;S.allowannotations&&e&&(c||u.uri)?E.annotations.loadAnnotationsUrl(S.serverurl,c,u.uri,u.index,1,o,function(){a.resolve(!0)}):(e&&E.annotations.loadAnnotations({layers:[[]],offset:o}),a.resolve(!!e));var d="string"==typeof t?t:u.uri?null:S.formsurl;return S.allowforms&&t&&(S.formsurl||d)?E.forms.loadFormUrl(S.serverurl,d,u.uri,u.index,1,o,function(){l.resolve(!0)}):l.resolve(),Kt.when(s,a,l).done(function(e,t,n){(t||n)&&Ot(o,!0),r.resolve(o)}),r.promise()},u.showPage=Oe,u.showPageNumber=Ie,gn(),yn(),mn(),bn(),u.annotations=gn.__exposedApi,u.document=yn.__exposedApi,u.forms=mn.__exposedApi,u.text=bn.__exposedApi,function(){Bt()||(F={prpr:0,batchoperation:0,loading:(M={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0});var e={_config:S,_id:s,_dom:x,_document:x.loadedImgs,_pages:x.pageDivs,_state:F,_internalEvents:l,_controllers:E,createDOM:P,createDiv:O,createDialog:V,createDropDownButton:L,createDropDownMenu:j,createMenu:I,drawAnnotation:vt,redrawVisiblePages:At,adjustVisiblePages:dt,startDomManipulation:et,endDomManipulation:tt,redrawPageFromIndex:Ot,makeHandlerRequest:jt,getPageScale:pt,getPageSize:pe,getSourcePageSize:fe,getPageRotation:gt,getViewerTransform:mt,isPageInView:Ye,findPageFromIndex:Ge,showPagePoint:Je};E.document=new yn(u,e,s),u.document=E.document.__exposedApi,S.allowannotations?(E.annotations=new gn(u,e,k),u.annotations=E.annotations.__exposedApi):(u.deselectAll=xt,u.createAnnotationOnPage=xt,u.getAnnotationsFromPage=xt,u.deleteAnnotationOnPageAtIndex=xt,u.setAnnotationDefaults=xt,u.setImages=xt,u.setStamps=xt),S.allowforms&&!E.forms&&(E.forms=new mn(u,e),u.forms=E.forms.__exposedApi),S.allowtext&&(E.text=new bn(u,e,S.mousetool?S.mousetool.text:{}),u.text=E.text.__exposedApi),E.upload=new vn(u,e),!1===F.initialized&&(F.initialized=!0,Gt({throwerror:z,pagedivsresized:g,documentchanged:kt,pagesizechanged:m}),S.parent?(S.parent instanceof Kt||(S.parent=Kt(S.parent)),S.parent.length||A("InitError","Parent element not found.")):A("InitError","No parent element given."),x.toolbar=(t=S.toolbarparent||S.parent,(n=function(e){var t=this,n={id:s+"_toolbar",parent:e,children:[{type:"button",id:"Button_PagePrev",cls:ln.atala_tool_button_page_prev,icon:"page-prev",tooltip:"Previous Page",text:null,onclick:function(){Ut()}},{type:"pagelabel",id:"Label_PageNumber",cls:ln.atala_page_label},{type:"button",id:"Button_PageNext",cls:ln.atala_tool_button_page_next,icon:"page-next",tooltip:"Next Page",text:null,onclick:function(){Nt()}},{type:"button",id:"Button_ZoomOut",cls:ln.atala_tool_button_zoom_out,icon:"zoom-out",tooltip:"Zoom Out",text:"",onclick:function(){Wt()}},{type:"button",id:"Button_ZoomIn",cls:ln.atala_tool_button_zoom_in,icon:"zoom-in",tooltip:"Zoom In",text:"",onclick:function(){qt()}},{type:"button",id:"Button_FitNone",cls:ln.atala_tool_button_fit_none,icon:"zoom-full",tooltip:"Full Size",text:"",onclick:function(){rt(1)}},{type:"button",id:"Button_FitBest",cls:ln.atala_tool_button_fit_best,icon:"fit-best",tooltip:"Best Fit",text:"",onclick:function(){ht(on.Best)}},{type:"button",id:"Button_FitWidth",cls:ln.atala_tool_button_fit_width,icon:"fit-width",tooltip:"Fit To Width",text:"",onclick:function(){ht(on.Width)}}]};return S.showselecttools&&n.children.splice(5,0,{type:"button",id:"Button_ZoomArea",cls:ln.atala_tool_button_zoom_area,icon:"zoom-area",tooltip:"Zoom Area",text:"",onclick:U}),S.allowtext&&(n.children.splice(3,0,{type:"button",id:"Button_Text",cls:ln.atala_tool_button_text_tool,icon:"text-tool",tooltip:"Text Selection",text:"",onclick:function(){E.mouseTool.setTool(tn.Text)}}),n.children.splice(3,0,{type:"button",id:"Button_Text",cls:ln.atala_tool_button_pan_tool,icon:"pan-tool",tooltip:"Pan",text:"",onclick:function(){E.mouseTool.setTool(tn.Pan)}})),S.showrotatetools&&(n.children.push({type:"button",id:"Button_RotateLeft",cls:ln.atala_tool_button_rotate_left,icon:"rotate-left",tooltip:"Rotate Left",text:"",onclick:q(270)}),n.children.push({type:"button",id:"Button_RotateRight",cls:ln.atala_tool_button_rotate_right,icon:"rotate-right",tooltip:"Rotate Right",text:"",onclick:q(90)})),0<S.savepath.length&&n.children.unshift({type:"button",id:"Button_Save",cls:ln.atala_tool_button_save,icon:"save",tooltip:"Save Changes",text:null,onclick:function(){Xt()}}),!1!==S.upload.enabled&&n.children.unshift({type:"button",id:"Button_Upload",cls:ln.atala_tool_button_upload,icon:"upload",tooltip:"Upload document",text:null,onclick:function(){!function(){var t=this;k||E.upload.uploadWithUi(function(e){_n(this,t),e?(x.toolbar.controlgroup("enable"),S.allowannotations&&x.toolbar.annoToolbar.controlgroup("enable"),x.toolbar.find(".atala_page_label, .atala_search_container").removeClass("ui-state-disabled")):(x.toolbar.controlgroup("disable"),x.toolbar.annoToolbar&&x.toolbar.annoToolbar.controlgroup("disable"),x.toolbar.find(".atala_page_label, .atala_search_container").addClass("ui-state-disabled"))}.bind(this))}()}}),S.toolbarbuttons&&S.toolbarbuttons.reverse().forEach(function(e){_n(this,t),n.children.unshift({type:"button",id:e.id,cls:e.class,tooltip:e.tooltip,onclick:e.onclick,text:null,icon:e.icon,custom:!0})}.bind(this)),D(n)}(t)).controlgroup(),S.allowannotations&&(n.annoToolbar=D({id:s+"_toolbar",parent:t,children:[{type:"button",id:"Button_Ellipse",cls:ln.atala_tool_button_ellipse_anno,icon:"ellipse",tooltip:"Draw Ellipse",text:"",onclick:vt},{type:"button",id:"Button_Highlight",cls:ln.atala_tool_button_highlight_anno,icon:"highlight",tooltip:"Draw Highlight",text:"",onclick:vt},{type:"button",id:"Button_Line",cls:ln.atala_tool_button_line_anno,icon:"line",tooltip:"Draw Line",text:"",onclick:vt},{type:"button",id:"Button_Lines",cls:ln.atala_tool_button_lines_anno,icon:"lines",tooltip:"Draw Poly Lines",text:"",onclick:vt},{type:"button",id:"Button_Freehand",cls:ln.atala_tool_button_freehand_anno,icon:"freehand",tooltip:"Draw Freehand",text:"",onclick:vt},{type:"button",id:"Button_Polygon",cls:ln.atala_tool_button_polygon_anno,icon:"polygon",tooltip:"Draw Polygon",text:"",onclick:vt},{type:"button",id:"Button_Rectangle",cls:ln.atala_tool_button_rect_anno,icon:"rectangle",tooltip:"Draw Rectangle",text:"",onclick:vt},{type:"button",id:"Button_Text",cls:ln.atala_tool_button_text_anno,icon:"text",tooltip:"Draw Text",text:"",onclick:vt}]}),n.annoToolbar.addClass(ln.atala_annotation_toolbar),n.annoToolbar.controlgroup()),S.showstatus&&(x.status=Kt('<div id="'+s+'_status" style="display:inline"></div>'),x.status.addClass(ln.atala_statusbar),n.append("Status:"),n.append(x.status)),S.allowtext&&S.mousetool.text.allowsearch&&(x.search=new N({parent:n})),n),x.toolbar.addClass(ln.atala_toolbar),x.main=O(S.parent),x.main.addClass(ln.atala_main_container),x.scroller=O(x.main),x.scroller.addClass(ln.atala_scroller),x.main.on({selectstart:w}),x.toolbar.attr("id",s+"_toolbar"),x.main.attr("id",s+"_main"),x.scroller.attr("id",s+"_scroller"),x.main.css({height:"100%",width:"100%",position:"relative"}),x.scroller.css({height:"100%",width:"100%",position:"relative"}),x.viewport=O(x.scroller,s+"_vp"),x.viewport.css({overflow:"hidden",fontSize:0,"touch-action":"none"}),x.viewport.addClass(ln.atala_viewport),x.viewport.attr("tabindex",-1),x.edges[0]=Z(x.viewport,s+"_e0"),x.edges[0].addClass(ln.atala_dom_edge_first),x.content=O(x.viewport,s+"_ct"),x.content.addClass(ln.atala_content),x.content.css({"-ms-touch-action":"none",fontSize:0,overflow:"hidden"}),S.direction===nn.Horizontal&&x.content.css({display:"inline-block"}),x.edges[1]=Z(x.viewport,s+"_e1"),x.edges[1].addClass(ln.atala_dom_edge_last),en.Features.Compatibility&&A("InitError","Compatibility Mode is not supported."),!1===S.upload.enabled||k||(x.uploadCtrl=E.upload.getUploadControl()),en.Mobile.Any()?x.scroller.css({overflow:"hidden"}):S.showscrollbars?(x.scroller.css({overflow:"auto"}),x.scrollH=G(x.main,nn.Horizontal),x.scrollH.attr("id",s+"_sH"),x.scrollH.addClass(ln.atala_scroll_horizontal),x.scrollV=G(x.main,nn.Vertical),x.scrollV.attr("id",s+"_sV"),x.scrollV.addClass(ln.atala_scroll_vertical)):x.scroller.css({overflow:"hidden"}),E.mouseTool=new xn(u,{_internalEvents:l,_controllers:E,zoomStart:nt,zoom:ot,zoomEnd:it,getActivePage:Fe,raiseDrawLayer:wt,resetDrawLayer:_t,getViewerTransform:mt},x.viewport,x.scroller,Kt.extend({allowflick:S.allowflick},S.mousetool)),E.memory=new fn({highWaterMark:S.memorythreshold}),E.memory.bind({exceededhighwatermark:p}),E.annotations&&E.annotations.setViewPort(x.viewport),Qt("initialized"),S.direction===nn.Horizontal&&x.viewport.css({"white-space":"nowrap"}),x.viewport.css({display:"table-cell"}),Q(x.scroller),x.scrollH&&x.edges[1].height(x.scrollH.scrollbarHeight()),E.mouseTool.setTool(tn.Pan,tn.None),(S.documenturl||S.annotationsurl||S.formurl)&&Zt(S.documenturl,S.annotationsurl,S.formurl,o),Kt(y));var t,n}(),u};
/**
 * Control that views, modifies, and saves documents, annotations and forms.
 * @param {WebDocumentViewerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @returns {WebDocumentViewer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */function Ke(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that shows thumbnails of document pages and annotations.
 * @param {WebThumbnailerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @augments Atalasoft.Controls.WebDocumentViewer
 * @returns {WebDocumentThumbnailer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */Qe.domclasses=ln,Qe.domattributes=sn;function ke(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){Ce(t,e,n[e])})}return t}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Main Atalasoft Namespace definition(s)
 * @namespace Atalasoft
 */n.d(t,"Utils",function(){return Ae}),n.d(t,"Annotations",function(){return Oe}),n.d(t,"Controls",function(){return Ie}),n.d(t,"Logger",function(){return Ve});var Ee={WebDocumentThumbnailer:function(e,n){var s,l,h=null,f=e.viewer||null,p=[],g=[],u=null,m=null,c=null,v="atala_dragdata",d="ui-sortable",y="sortable",b="atala_scroll_parent",x=null,w={size:{width:0,height:0},sizes:[{width:0,height:0}],count:0,number:-1,dpi:96,vector:!1},_={base:null,loading:!1,initialized:!1,scrolling:!1,dragdropping:!1,viewer:{zoom:0,pagenumber:0,api:{}},selfapi:{}},o={moves:0,start:{x:NaN,y:NaN}},z={divsize:-1,scale:1,size:0,zoom:1,zoomfull:1},P={direction:nn.Vertical,
/**
     *  @property {number} [maxwidth=300] - Specifies the maximum amount of pixel width allowed for zooming in.
     *
     *  This property is intended to limit size of the images data transferred over the wire on big zoom values.
     */
maxwidth:300,
/**
     *  @property {number} [minwidth=80] - Specifies the minimum amount of pixel width allowed for zooming out.
     */
minwidth:80,pageborderwidth:1,pagespacing:2,parent:null,showpagenumber:!1,toolbarparent:null,
/**
     * @property {boolean} [showthumbcaption=false] - Specifies whether captions will be added to the each thumbnail page. */
showthumbcaption:!1,
/**
     * @property {string} [thumbcaptionformat] - Specifies default thumbnail caption format.
     *
     * {0} - will be substituted with page number.
     * {1} - will be substituted with the document file name.
     * Could also be set on server using DocumentInfoRequestedEventArgs arguments of DocumentInfoRequested event.
     */
thumbcaptionformat:"",
/**
     * @property {boolean} [allowdragdrop=false] - Indicates whether drag&drop through UI is enabled.
     */
allowdragdrop:!1,
/**
     * @property {number} [dragdelay=250] - Delay in milliseconds before drag&drop operation is started.
     *
     * This delay is intended to support "pan" behavior when UI drag&drop support is enabled.
     *
     */
dragdelay:250,
/**
     * @property {number} [selectedindex=0] - Index of the initially selected page. This page will be selected after each new document will be loaded.
     */
selectedindex:0,
/**
     * @property {number} [thumbpadding=8] - Padding of the thumbnail image.
     */
thumbpadding:8,
/**
     * @property {string} [backcolor='#DCDCDC'] - Thumbnail background color.
     */
backcolor:"#DCDCDC",
/**
     * @property {string} [hovercolor='#667F9F'] - Thumbnail :hover color.
     */
hovercolor:"#667F9F",
/**
     * @property {string} [selectedcolor='#E0872D'] - Selected thumbnail background color.
     */
selectedcolor:"#E0872D",
/**
     * @property {string} [selectedhovercolor='#FFC060'] - Selected thumbnail :hover background color.
     */
selectedhovercolor:"#FFC060",
/**
     * @property {Atalasoft.Utils.SelectionMode} [selectionmode=SingleSelect] - Defines the WDT selection mode.
     */
selectionmode:Ye.SingleSelect,
/**
     * @property {Atalasoft.Utils.SelectedItemsOrder} [selecteditemsorder=ItemIndexOrder] - Defines the order in which selected pages are to be processed.
     */
selecteditemsorder:Ge.ItemIndexOrder},t={type:"Atalasoft.Controls.WebDocumentThumbnailer",debug:!0,showpageborder:!0,forcepagefit:!0,toolbarparent:Kt("<div/>")},i={
/**
     * Triggers when thumbnail is selected.
     * @event Atalasoft.Controls.WebDocumentThumbnailer#thumbselected
     * @param {Object} event - The event object.
     * @param {number} event.index - Index of the page that was selected.
     */
thumbselected:null,
/**
     * Triggers when thumbnail is deselected.
     * @event Atalasoft.Controls.WebDocumentThumbnailer#thumbdeselected
     * @param {Object} event - The event object.
     * @param {number} event.index - Index of the page that was deselected.
     */
thumbdeselected:null,
/**
     *  Triggers when thumbnail drag & drop operation is started.
     *  @event Atalasoft.Controls.WebDocumentThumbnailer#thumbdragstart
     *  @param {Object} event - The event object.
     *  @param {number} event.dragindex - Index of the page being dragged.
     *  @param {number[]} event.dragindices - The indices of pages being dragged.
     */
thumbdragstart:null,
/**
     * Callback signature for {@link Atalasoft.Controls.WebDocumentThumbnailer#event:thumbdragend| WebDocumentThumbnailer.thumbdragend} event.
     * @callback ThumbDragEndCallback
     * @param {Object} event - The event object.
     * @param {ThumbDragEndEventArgs} args - The event data.
     */
/**
     * @typedef {Object} ThumbDragEndEventArgs
     * @property {number} dragindex - The index of the page being dragged.
     * @property {number[]} dragindices - The indices of pages being dragged.
     * @property {number} dropindex - The index where the page was dropped in the target document.
     * @property {string} sourcedocument - The identifier of the source document. Corresponds to {@link WebDocumentViewerConfig.documenturl|config.documenturl}
     * @property {Atalasoft.Controls.WebDocumentThumbnailer} source - The source thumbnailer control.
     * @property {Atalasoft.Controls.WebDocumentThumbnailer} target - The target thumbnailer control.
     * @property {boolean} external - Indicates whether page is being dropped into external document(not the one dragged page originally belong to).
     *
     * @property {DocumentPageReference} pageref - Reference to the page in the source document. See {@link Atalasoft.Controls.WebDocumentViewer~DocumentController#insertPage| document.insertPage} for usage sample.
     * @property {DocumentPageReference[]} pagerefs - References to pages in the source document. See {@link Atalasoft.Controls.WebDocumentViewer~DocumentController#insertPage| document.insertPage} for usage sample.
     *
     * @property {boolean} [cancel=false] - Flag indicating whether default behavior should be cancelled. If set by the application, page want be moved to the new position by the  {@link Atalasoft.Controls.WebDocumentThumbnailer|WebDocumentThumbnailer}.
     *
     * @property {boolean} [copyannotations=true] - Flag indicating whether source page annotations should be copied to the inserted page.
     * This could be used by the application to inject additional logic, for example used confirmation dialog and move the page using API after that.
     */
/** Triggers before thumbnail drag & drop operation is complete. This event could be triggered for either case when thumb was dropped within same document where it belongs or when thumb was dropped to the external document.
     * @event Atalasoft.Controls.WebDocumentThumbnailer#thumbdragend
     * @type {ThumbDragEndCallback}
     * @param {Object} event - The event object.
     * @param {ThumbDragEndEventArgs} args - The event data.
     *
     * Note that args.cancel flag allows to prevent default drop handler behavior.
     * If set by the application, page want be moved to the new position by the  {@link Atalasoft.Controls.WebDocumentThumbnailer|WebDocumentThumbnailer}.
     * This could be used by the application to inject additional logic, for example used confirmation dialog and move the page using API after that.
     **/
thumbdragend:null,
/**
     * Callback signature for {@link Atalasoft.Controls.WebDocumentThumbnailer#event:thumbdragcomplete| WebDocumentThumbnailer.thumbdragcomplete} event.
     * @param {Object} event - The event object.
     * @param {ThumbDragCompleteEventArgs} args - The event data.
     */
/**
     * @typedef {Object} ThumbDragCompleteEventArgs
     * @property {number} dragindex - The index of the page being dragged.
     * @property {number[]} dragindices - The indices of pages being dragged.
     * @property {number} dropindex - The index where the page was dropped in the target document.
     * @property {Atalasoft.Controls.WebDocumentThumbnailer} source - The source thumbnailer control.
     * @property {Atalasoft.Controls.WebDocumentThumbnailer} target - The target thumbnailer control.
     */
/** Triggers after thumbnail drag & drop operation is complete.
     * @event Atalasoft.Controls.WebDocumentThumbnailer#thumbdragcomplete
     * @type {ThumbDragCompleteEventArgs}
     *
     * @param {Object} event - The event object.
     * @param {ThumbDragCompleteEventArgs} args - The event data.
     */
thumbdragcomplete:null};function T(){return{get:function(){return h},detachViewer:E,activateViewer:C}}function D(e,t){if(e){var n=t?e.bind:e.unbind,o=t?h.unbind:h.bind;n.call(e,{beforehandlerrequest:Pe,documentloaded:fe,scroll:ye,pagerotated:_e,pageinserted:ge,pageremoved:me,pagemoved:ve}),o.call(h,{pagerotated:pe,pageinserted:pe,pageremoved:pe,pagemoved:pe}),r(e,e.document.events,n),P.allowannotations&&(n.call(e,{annotationresized:ze,annotationmoved:ze,annotationrotated:ze,annotationchanged:ze,annotationcreated:xe,annotationdeleted:we}),e.annotations&&r(e,e.annotations.events,n))}}function r(e,t,n){var o={};for(var i in t)t.hasOwnProperty(i)&&(o[i]=a);n.call(e,o)}function a(){h.trigger.apply(h,arguments)}
/**
   * Checks whether current thumbnailer is controlling referenced viewer.
   *
   * If viewer is linked only to the current thumbnailer, this method always return `true`.
   *
   * If thumbnailer is not linked to any viewer, this method always return `false`.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#isActive
   * @returns {boolean} `true` if current thumbnailer instance is controlling referenced viewer; `false` otherwise.
   */function k(){return f&&(!x||x&&x.isThumbnailerActive(T()))}
/**
   * Takes ownership over referenced viewer, i.e. if shared viewer is currently displaying other document, it's switched to display document from calling thumbnailer.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#activate
   */function C(e,t,n){if(!f&&e&&(m=(f=e).__getViewerLink(h,c),x=m.stateManager),f&&f.isReady()&&(!k()||n)){var o=f&&!k(),i=(r={pagewidth:w.size.width,pageheight:w.size.height,pagecount:w.count,dpi:w.dpi,colordepth:_.base.controllers.memory.colorDepth,vector:w.vector,pagenumber:_.viewer.pagenumber,zoom:_.viewer.zoom},P.allowannotations&&c._annos&&(r.layers=se(c._annos,"items")),P.allowforms&&c._fields&&(r.forms={fields:se(c._fields)}),r);i.customData=null==t?void 0:t.customData,x.activateThumbnailer(T(),i,c,P,n),o&&(D(f,!0),M((l={thumb:{annotations:null,document:null,text:null,getCurrentPageIndex:null,getZoom:null,zoom:null,zoomIn:null,zoomOut:null,next:null,previous:null,save:null,showPage:null,setMouseTool:null},viewer:{reloadPage:function(e){return s=e.reloadPage,X}}}).viewer,a=f,h,_.viewer.api),M(l.thumb,h,a,_.selfapi))}var r,a,l;U(!0)}function E(){if(f&&f.isReady()&&(_.viewer.zoom=f.getZoom(),_.viewer.pagenumber=f.getCurrentPageIndex(),P.allowforms&&_.base.controllers.forms&&m._fields)){var e={forms:{fields:se(m._fields)}};_.base.controllers.forms.loadForms(e)}var t;D(f,!1),t=f,M(F(_.viewer.api),t,_.viewer.api,{}),M(F(_.selfapi),h,_.selfapi,{}),U(!1)}function M(e,t,n,o){for(var i in e)e.hasOwnProperty(i)&&(t.hasOwnProperty(i)&&t[i]&&(o[i]=t[i]),"function"==typeof e[i]?t[i]=e[i](t,n):n.hasOwnProperty(i)&&n[i]&&(t[i]=n[i]))}function F(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=null);return t}e&&("thumbsize"in e&&isFinite(e.thumbsize)&&0<e.thumbsize&&(ce(e.thumbsize),t.forcepagesize={width:e.thumbsize,height:e.thumbsize}),Kt.extend(P,e),Kt.extend(P,t),P.showpagenumber=P.showpagenumber&&!P.showthumbcaption,"fitting"in e||(P.fitting=P.direction===nn.Vertical?on.Width:on.Height),f&&f.config&&(P.allowtext=f.config.allowtext)),h=Qe.call(this,P,function(e,t){Ee(e,t,n)}),c=h.__getViewerLink(h),P=c._config,S=c.__createDiv,c.__getSelectedPagesIndices=V,P.allowdragdrop=!!P.allowdragdrop,P.selectedindex=he(P.selectedindex)?parseInt(P.selectedindex,10):0,P.thumbpadding=he(P.thumbpadding)?parseInt(P.thumbpadding,10):8,P.backcolor=de(P.backcolor,"#DCDCDC"),P.hovercolor=de(P.hovercolor,"#667F9F"),P.selectedcolor=de(P.selectedcolor,"#E0872D"),P.selectedhovercolor=de(P.selectedhovercolor,"#FFC060");var S=function(){},A=function(){};function O(){if(P.debug){var e=A(),t=V();return Kt.extend(!0,e,{thumbnailer:{config:P,index:t[0],indices:t,links:{viewer:m,self:c},page:w,thumb:z,state:_}}),e}return null}
/**
   * Scrolls the viewer to the given page number and executes the callback when finished
   * @function Atalasoft.Controls.WebDocumentThumbnailer#scrollToThumb
   * @param {number} index - Index of the page to scroll to.
   * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
   */var I=function(){};
/**
   * @summary Gets the selected thumbnails indices.
   * @description Gets the selected thumbnails indices with respect of {@link WebDocumentViewerConfig.selecteditemsorder| selecteditemsorder} parameter value.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPagesIndices
   * @returns {number[]}
   */
function V(){var n=this,e=p.slice(0);return P.selecteditemsorder===Ge.ItemIndexOrder&&e.sort(function(e,t){return Ke(this,n),e-t}.bind(this)),e}function L(e){var t=1,n=function(){--t<=0&&(k()&&x&&f&&C(f,h.getDocumentInfo(),!0),"function"==typeof e&&e.call())};k()&&(x?x.closeDocument(T(),c):f.isReady()&&(t++,f.empty(n))),j(n)}h.getSelectedPageIndex=
/**
   * @summary Gets the selected thumbnail index.
   * @description Gets the selected thumbnail index when Web Document Thumbnailer (WDT) setup to use singleselect. When WDT setup to use multiselect, then this method returns the first element of the selected page indices, with respect of {@link WebDocumentViewerConfig.selecteditemsorder| selecteditemsorder} parameter value.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPageIndex
   * @returns {number}
   */
function(){return V()[0]},h.getSelectedPagesIndices=V,h.selectThumb=q,h.deselectThumb=W,h.isActive=k,h.activate=function(){C(f,h.getDocumentInfo())};var j=function(){};function H(){k()&&(x?x.closeDocument(T(),c):f.empty(),E()),R(),m=f=null}var R=function(){};function B(e,t,n,o){_.base&&Kt.each(_.base.dom.pageDivs,function(e,t){t.off(u),t.thumbInitialized=!1}),null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null)),"string"==typeof e&&(x.closeDocument(T(),c),_.viewer.pagenumber=0),N(e,t,n,function(e,t){h.scrollTo(0,0,!1),Ee(e,t,o)})}var N=function(){};function U(e){if(_.base){0===p.length&&p.push(0);for(var t=0;t<_.base.dom.pageDivs.length;t++){var n=0<t?_.base.dom.pageDivs[t-1]:null,o=_.base.dom.pageDivs[t],i=!1;-1<p.indexOf(o._index)&&e?(o.removeClass("atala_grouped_selection"),o.addClass(h.domclasses.atala_active_thumb),null!==n&&-1<p.indexOf(n._index)&&(o.addClass("atala_grouped_selection"),n.addClass("atala_grouped_selection")),i=!0):(o.removeClass(h.domclasses.atala_active_thumb),o.removeClass("atala_grouped_selection")),Q(o,i)}}}
/** 
   * Highlights the thumbnail at the given index, and scrolls to it in the linked viewer, if possible.
   * @param {number|string} index - Index of the page to select. Can be passed as string representation of a number
   * @param {boolean} [append] - Append index to the already selected thumbs or not. Its value ignores in single select mode.
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been selected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#selectThumb
   */function q(e,t,n){var o=this;if(m._controllers.upload&&m._controllers.upload.abort(),!(null===(e=Je(e))||e<0||e>=h.getDocumentInfo().count||void 0!==t&&"boolean"!=typeof t&&null!==t||void 0!==n&&"function"!=typeof n&&null!==n)){if(t=!!t&&P.selectionmode!==Ye.SingleSelect){if(-1<p.indexOf(e))return;p.push(e)}else V().forEach(function(e){Ke(this,o),h.trigger({type:"thumbdeselected",index:e})}.bind(this)),p.length=0,p.push(e);Z(),h.trigger({type:"thumbselected",index:e}),"function"==typeof n&&n()}}
/** 
   * Resets the thumbnail highlight at the given index, and scrolls to the next selected thumbnail in the linked viewer, if possible.
   *
   * This function doesn't deselect the given index in the single select mode, and in multi select mode, if one page is selected.
   * @param {number|string} index - Index of the page to deselect. Can be passed as string representation of a number
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been deselected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#deselectThumb
   */function W(e,t){if(null!==(e=Je(e))&&(void 0===t||"function"==typeof t||null===t)){var n=p.indexOf(e);-1!==n&&1!==p.length&&(p.splice(n,1),Z(),h.trigger({type:"thumbdeselected",index:e}),"function"==typeof t&&t())}}function Z(){var e=V();if(x?(_.viewer.pagenumber=e[0],C(f,h.getDocumentInfo())):U(!0),!(1<p.length)&&f){var t=f.getCurrentPageIndex(),n=e[0];0<=t&&n!==t&&(_.scrolling=!0,n===t-1?f.previous(1,be):n===t+1?f.next(1,be):f.showPage(n,be))}}
/**
   * Reloads the specified page. If the thumbnailer is linked with viewer, viewer page is reloaded and callback is called when both viewer and thumbnailer completely reloaded, including image data itself.
   *
   * Viewer page won't be reloaded if the viewer is currently controller by other thumbnailer and requested page was not loaded in viewer before. In such case page will be lazy-loaded as usual. If special parameters should be passed, {@link Atalasoft.Controls.WebDocumentViewer#event:beforehandlerrequest| beforehandlerrequest} event to modify request parameters.
   * @param {number} index - The index of the page to reload.
   * @param {string|boolean} [annotations=false] - Url of the annotation xmp file or flag indicating whether to reload annotations of boolean flag indicating whether to load annotations data.
   * @param {string|boolean} [forms] - Url of the form file or flag indicating whether to reload forms of boolean flag indicating whether to load forms data.
   * @param {object} [params] - A plain object containing optional reload parameters that will be passed to server.
   * @param {NotificationCallback} [callback] - function that is called when page have been loaded.
   *
   * This object will be available on the server side hander as an key-values collection. This allows to pass specific load options for individual pages.
   * @function Atalasoft.Controls.WebDocumentViewer#reloadPage
   */function X(e,t,n,o,i){if(l){var r=Array.prototype.slice.call(arguments);if(f&&f.isReady())if(k()){var a=Array.prototype.slice.call(r);"function"!=typeof(i=r.pop())&&(r=Array.prototype.slice.call(a)),l.apply(this,r).then(function(){s&&s.apply(this,a)})}else l.apply(this,arguments);else l.apply(this,arguments)}}function Y(){if(_.base){if(_.initialized&&0<_.base.dom.pageDivs.length&&null!=_.base.dom.pageDivs[0]._img&&!_.base.dom.pageDivs[0]._img._size.isEmpty()){var e=_.base.dom.pageDivs[0]._img._size;e.width>e.height?z.scale=z.size/e.width:z.scale=z.size/e.height,P.tabular&&1<P.columns&&P.direction===nn.Vertical&&ue()}else{var t=_.base.page.size.width/_.base.page.size.height<1,n=Math.ceil(_.base.page.size.height*_.base.config.zoom),o=Math.ceil(_.base.page.size.width*_.base.config.zoom),i=z.size;P.direction===nn.Vertical?z.divsize=Math.ceil(_.base.page.size.width*_.base.config.zoom):P.direction===nn.Horizontal&&(z.divsize=Math.ceil(_.base.page.size.height*_.base.config.zoom)),ce(i=i<=0?z.divsize-2*P.thumbpadding:i),P.tabular&&1<P.columns&&P.direction===nn.Vertical&&ue();var r=t?n:o;z.scale=r?_.base.config.zoom*(z.size/r):1,z.zoomfull=z.scale,P.minwidth>_.base.page.size.width*z.scale&&_.base.page.size.width&&(P.minwidth=_.base.page.size.width*z.scale),_.initialized=!0}var a=P.showpageborder?2*P.pageborderwidth:0,l=z.size+2*P.thumbpadding-a;if(h.trigger({type:"pagedivsresized",height:l,width:l,fullzoom:z.zoomfull,minwidth:P.minwidth}),P.allowdragdrop){_.base.dom.content.addClass(h.domclasses.atala_thumb_draggable),_.base.dom.content.css({minWidth:l,minHeight:l});var s=Math.round(z.size/2);_.base.dom.content.sortable({containment:"window",connectWith:"."+h.domclasses.atala_thumb_draggable,appendTo:document.body,placeholder:h.domclasses.atala_drag_placeholder,cursorAt:{left:s,top:s},delay:P.dragdelay,distance:4,helper:$,opacity:.65,scroll:!0,scrollSensitivity:s,scrollSpeed:10,start:ee,receive:ie,stop:oe,over:te,change:ne,tolerance:"pointer",update:re,zIndex:100})}Kt.each(_.base.dom.pageDivs,function(e,t){t.width(z.size),t.height(z.size),t.thumbInitialized||(t.on(u),t.css({padding:P.thumbpadding,"background-color":P.backcolor,cursor:"pointer","margin-bottom":P.pagespacing+"px","text-align":"center",position:"relative"}),P.tabular?t.css({"margin-right":P.pagespacing+"px"}):P.direction===nn.Horizontal&&t.css({"margin-right":P.pagespacing+"px","margin-bottom":"0px"}),t._paper&&en.Explorer&&(t._paper.canvas.style.top="",t._paper.canvas.style.width="",t._paper.canvas.style.height=""),t._grips&&(t._grips.push=function(){}),t.thumbInitialized=!0),G(t._img,t._paper)}),0<_.base.dom.pageDivs.length&&c.__adjustEdgeHeights(_.base.dom.pageDivs[0]._index)}}function G(e,t,n,o){if(_.base){var i=o||e&&e.getScaledSize(n);if(!i)return;var r=i.width,a=i.height,l=z.size*(_.base.config.zoom/z.zoomfull);if(l<r||l<a){var s=n*(l/(r/a<1?a:r));r=Math.round(e._size.width*s),a=Math.round(e._size.height*s),n=s}e.width(r),e.height(a);var u=e.getDomElement();u[0].style.left="50%",u[0].style.top="50%",u[0].style.position="absolute",u[0].style.marginLeft=-Math.round(r/2)+"px",u[0].style.marginTop=-Math.round(a/2)+"px",t&&(t.canvas.style.left="50%",t.canvas.style.top="50%",t.canvas.style.marginLeft=-Math.round(r/2)+"px",t.canvas.style.marginTop=-Math.round(a/2)+"px",t.canvas.style.zIndex=1),e.trigger({type:"pagezoom",index:e._page._index,height:Math.round(a),width:Math.round(r),prevzoom:_.base.config.zoom,zoom:n})}}function J(e,t,n){var o=e.data("selected")?t:n;e.css("background-color",o)}function Q(e,t){var n=t?P.selectedcolor:P.backcolor;e.data("selected",t),e.css("background-color",n)}function K(e){var t=this;this._initial=e,this._actual=e,this.scrollTop=function(){t._actual.scrollTop()},this.scrollLeft=function(){t._actual.scrollTop()},this.setObject=function(e){t._actual=e,this[0]=t._actual[0]},this.offset=function(){return t._actual.offset()},this.setObject(e)}function $(e,t){_.dragdropping=!0,U(k());var n=Kt('<div class="atala_drag_helper"></div>'),o=function(e){var n=this,o=[];return e.hasClass(h.domclasses.atala_active_thumb)&&k()?V().forEach(function(e){Ke(this,n);for(var t=0;t<_.base.dom.pageDivs.length;t++)if(_.base.dom.pageDivs[t]._index===e){o.push(_.base.dom.pageDivs[t]);break}}.bind(this)):o.push(e),o}(t);1<o.length&&(Kt(this).sortable("option","items","> *:not(.atala_grouped_selection)"),Kt(this).sortable("refresh"));for(var i=t.hasClass(h.domclasses.atala_active_thumb)&&k()?Math.min(3,V().length):1,r=0;r<o.length||r<i;r++){var a=r<o.length?o[r]:o[0];if(r<i){var l=a.find("."+h.domclasses.atala_page_image_anchor).first().clone();l.css({position:"absolute",left:10*r+"px",top:-10*r+"px",right:"0px",bottom:"0px",margin:"","z-index":-r}),n.append(l)}}_.base.dom.content.append(n);var s=n.scrollParent(),u=_.base.dom.content.data(d)||_.base.dom.content.data(y);return n.hide(),setTimeout(function(){var t=this;u&&(u.scrollParent=new K(s),o.forEach(function(e){Ke(this,t),e.data(b,u.scrollParent)}.bind(this))),n.appendTo("body"),n.show()},1),n}function ee(e,t){var n=this;m._controllers.upload.abort();var o=function(e){if(e.hasClass(h.domclasses.atala_active_thumb)&&k())return V();for(var t=0;t<_.base.dom.pageDivs.length;t++)if(_.base.dom.pageDivs[t][0]===e[0])return[_.base.dom.pageDivs[t]._index];return null}(t.item);if(null!==o){var i=[];o.forEach(function(e){Ke(this,n),i.push(h.document.getPageReference(e))}.bind(this));var r={start:o,end:o[0],updateHandled:!1,pageRefs:i,documenturl:"object"==typeof i[0]&&i[0].uri?i[0].uri:_.base.config.documenturl,thumbLink:c,thumb:h,thumbId:c._id,viewerId:m._id,state:_,externalDropIndex:null,insertAfterSelf:!1};t.item.data(v,r),_.base.controllers.mouseTool.pauseTool(),t.placeholder.width(t.item.width()),t.placeholder.height(t.item.height()),t.placeholder.css({margin:t.item.css("margin"),display:_.base.config.tabular||_.base.config.direction===nn.Horizontal?"inline-block":"block",padding:Math.max(0,_.base.config.thumbpadding-1)}),h.trigger({type:"thumbdragstart",dragindex:r.start[0],dragindices:r.start})}}function te(e,t){if(!en.Mobile.Any()){var n=t.placeholder.parents("."+h.domclasses.atala_scroller),o=t.item.data(b);n.length&&o&&o[0]!==n.first()[0]&&o.setObject(n.first())}}function ne(e,t){var n=t.item.data(v);if(n){var o=t.placeholder.prev();n.insertAfterSelf=o.length&&t.item[0]===o.first()[0]}}function oe(e,t){var n=this,o=t.item.data(v),i=P.parent.offset().left,r=P.parent.offset().left+P.parent.width(),a=P.parent.offset().top,l=P.parent.offset().top+P.parent.height(),s=t.position.left+t.item.width()/2,u=t.position.top+t.item.height()/2,c=i<s&&s<r&&a<u&&u<l;if(o&&c){_.base.controllers.mouseTool.resumeTool(),o.updateHandled||(o.end=ae(t),o.updateHandled=!0),o.insertAfterSelf&&++o.end,o.end=o.start[0]<o.end?o.end-1:o.end;var d={type:"thumbdragend",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,sourcedocument:o.documenturl,target:h,external:!1,pageref:o.pageRefs[0],pagerefs:o.pageRefs,cancel:!1};h.trigger(d,d),d.cancel?Kt(this).sortable("cancel"):(m&&k()&&f.isReady()?m._controllers.document.movePages(o.start,o.end):_.base.controllers.document.movePages(o.start,o.end),le(),(p.length=0)<g.length?(g.sort(function(e,t){return Ke(this,n),e-t}.bind(this)).forEach(function(e){Ke(this,n),q(e,!0)}.bind(this)),g.length=0):q(o.end,!1),d={type:"thumbdragcomplete",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,target:h},_.dragdropping=!1,h.trigger(d,d))}else o&&!c&&Kt(this).sortable("cancel");Kt(this).sortable("option","items","> *"),Kt(this).sortable("refresh"),t.item.data(v,null)}function ie(e,t){var o=this;Kt(t.sender).sortable("cancel");var i=t.item.data(v);if(i){i.thumbLink._controllers.mouseTool.resumeTool();var n=_.base.dom.pageDivs.length?_.base.dom.pageDivs[0]._index:0;i.end=i.externalDropIndex+n||0;var r={type:"thumbdragend",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,sourcedocument:i.documenturl,target:h,pageref:i.pageRefs[0],pagerefs:i.pageRefs,external:!0,cancel:!1,copyannotations:!0};if(h.trigger(r.type,r),!r.cancel){var a=[];r.copyannotations&&i.thumb.config.allowannotations&&h.config.allowannotations&&i.start.forEach(function(e){Ke(this,o),a.push(i.thumb.annotations.getFromPage(e))}.bind(this)),i.viewerId!==m._id&&i.thumb.selectThumb(i.thumb.getCurrentPageIndex(),!1),_.scrolling=!0,i.thumb.document.removePages(i.start),h.document.insertPages(null,i.pageRefs,i.end),f&&(_.viewer.pagenumber=i.end,C(f,h.getDocumentInfo(),!0)),le(),p.length=0,P.selectionmode===Ye.SingleSelect?q(i.end):i.start.forEach(function(e,t){q(i.end+t,!0)}),a.forEach(function(e,t){if(Ke(this,o),e)for(var n=0;n<e.length;n++)h.annotations.createOnPage(e[n],i.end+t)}.bind(this)),h.trigger("thumbdragcomplete",{type:"thumbdragcomplete",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,target:h}),_.dragdropping=!1,i.state.dragdropping=!1}}t.item.data(v,null)}function re(e,t){var n=t.item.data(v);n&&(_.base.dom.content.has(t.item).length?(n.end=ae(t),n.thumbId===c._id&&h.trigger({type:"thumbsreordered",dragindex:n.start[0],dragindices:n.start,dropindex:n.end})):n.externalDropIndex=t.item.index(),n.updateHandled=!0)}function ae(e){for(var t=-1,n=e.item.prev().length?e.item.prev().first():[null],o=0;o<_.base.dom.pageDivs.length;++o)if(_.base.dom.pageDivs[o][0]===n[0]){t=_.base.dom.pageDivs[o]._index;break}return t+1}function le(){var e=_.base.dom.scroller[0];if(c.__isObjectInRect(_.base.dom.edges[1][0],e,e.scrollLeft,e.scrollTop,e.scrollLeft+e.clientWidth,e.scrollTop+e.clientHeight)){var t=_.base.dom.pageDivs[0]._index,n=c.__getIndexFromPos(e.scrollLeft,e.scrollTop),o=n-t;o<_.base.dom.pageDivs.length&&0<o?c.__showNext(o):(c.__showPageAsync(n,!1),c.__redrawVisiblePages())}}function se(e,t){var n=[];for(var o in e)if(e.hasOwnProperty(o)){var i=[],r=t?{}:i;for(var a in t&&(r[t]=i),e[o])e[o].hasOwnProperty(a)&&(i[a]=e[o][a].get(),i[a].multiview=!0);n[o]=r}return n}function ue(){if(P.tabular){var e;if(1<P.columns)e=(z.size+2*P.thumbpadding+P.pagespacing)*Math.min(_.base.controllers.document.getPageCount(),P.columns);else if(1<P.rows){var t=Math.ceil(_.base.controllers.document.getPageCount()/P.rows);e=(z.size+2*P.thumbpadding+P.pagespacing)*t}e&&_.base.dom.content.width(e)}}function ce(e){e<=0&&h.trigger({type:"throwerror",name:"Invalid thumb size",msg:"Thumb size cannot be "+e+". Check configuration parameters 'minwidth', 'thumbpadding' and 'thumbsize'. If 'thumbsize' is not specified, then 'minwidth' should be at least (2 * thumbpadding + 1)."}),z.size=e,_.base&&_.base.config.forcepagesize&&(_.base.config.forcepagesize.width=e,_.base.config.forcepagesize.height=e)}function de(e,t){var n="#FFFFFF",o="#FFF",i="white",r="rgb(255, 255, 255)",a=S(null,"dummy");return a.css("backgroundColor",i),a.css("backgroundColor",e),a.css("backgroundColor")===r&&(e=e.toLowerCase())!==i&&e!==n&&e!==o&&e!==r&&(e=t),e}function he(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function fe(){}function pe(e,t){0<_.base.state.batchoperation||("function"==typeof e&&(t=e),Y(),c.__redrawVisiblePages(!0),c.__adjustVisiblePages(),_.base&&m&&k()&&f.isReady()?(m.__redrawVisiblePages(!0),m.__adjustVisiblePages(!1,t)):"function"==typeof t&&t())}function ge(e){_.base&&(_.base.controllers.annotations&&_.base.controllers.annotations.insertLayer(null,null,e.destindex),_.base.controllers.forms&&_.base.controllers.forms.insertForm(null,null,e.destindex),m._state.batchoperation<=0&&pe())}function me(e){_.base&&(_.base.controllers.annotations&&_.base.controllers.annotations.removeLayer(e.index),_.base.controllers.forms&&_.base.controllers.forms.removeForm(e.index),m._state.batchoperation<=0&&pe())}function ve(e){var n=this;if(_.base&&(_.base.controllers.annotations&&_.base.controllers.annotations.moveLayer(e.shiftedsrcindex,e.destindex),_.base.controllers.forms&&_.base.controllers.forms.moveForm(e.shiftedsrcindex,e.destindex),function(){var e=_.base.dom.pageDivs[0]._index;_.base.dom.pageDivs.sort(function(e,t){return e.index()-t.index()});for(var t=0;t<_.base.dom.pageDivs.length;t++){var n=_.base.dom.pageDivs[t];n._index=e+t,null!=n._num&&n._num.text(n._index+1)}}(),m._state.batchoperation<=0&&pe(),_.dragdropping)){var t=e.destindex;g.sort(function(e,t){return Ke(this,n),t-e}.bind(this)).forEach(function(e){Ke(this,n),e===t&&t--}.bind(this)),g.push(t)}}function ye(){var e=f.getCurrentPageIndex(),t=V();t.length<=1&&t[0]!==e&&!_.scrolling&&q(e)}function be(e){_.scrolling=!1}function xe(e){if(_.base){var t=m._annos[e.page]||null,n=null;t&&(n=t[t.length-1].get()),n&&n.type===e.anno.type&&(n.multiview=!0,_.base.controllers.annotations.createAnnotation(n,e.page))}}function we(e){_.base&&_.base.controllers.annotations.deleteAnnoOnPage(e.page,e.index)}function _e(){_.base&&m._state.batchoperation<=0&&pe()}function ze(e){if(_.base){var t=e.anno.getPageIndex();if(function(e){for(var t=0;t<_.base.dom.pageDivs.length;t++)if(_.base.dom.pageDivs[t]._index===e)return!0;return!1}(t))for(var n=_.base.controllers.annotations.getAnnosFromPage(t),o=0;o<n.length;o++)n[o].type===e.anno.type&&n[o].update(!0)}}function Pe(e){if(("docinfo"===e.request.type||"annodata"===e.request.type||"formdata"===e.request.type)&&_.base){e.request.cancel=!0,"docinfo"===e.request.type&&(e.request.info.pagewidth=w.size.width,e.request.info.pageheight=w.size.height,e.request.info.pagecount=w.count,e.request.info.dpi=w.dpi,e.request.info.colordepth=_.base.controllers.memory.colorDepth,e.request.info.vector=w.vector);var t=void 0!==e.request.info.docIndex?e.request.info.docIndex:e.request.info.offset||0,n=-1<e.request.info.length?e.request.info.length+t:void 0;if(e.request.info.offset=e.request.info.offset||0,P.allowannotations&&("annodata"===e.request.type||e.request.data.atala_annurl)){var o=_.base.controllers.annotations.__getDebugInfo().data;e.request.info.layers=se(o.annos.slice(t,n),"items")}if(P.allowforms&&("formdata"===e.request.type||e.request.data.atala_formurl)){var i=_.base.controllers.forms.__getDebugInfo().data;e.request.info.forms={fields:se(i.fields.slice(t,n))}}f.trigger({type:"handlerreturned",request:e.request})}}function Te(){}function De(){}function ke(e,t,n){for(var o in n)n.hasOwnProperty(o)&&delete n[o]}function Ce(){_.base={config:c._config,controllers:c._controllers,dom:c._dom,page:c._page,state:c._state,stateManager:c.stateManager}}function Ee(e,t,n){w.size.width=_.base.page.size.width,w.size.height=_.base.page.size.height,w.count=_.base.page.count,w.dpi=_.base.page.dpi,w.vector=_.base.page.vector,Y(),Ze(_.base.dom.scrollH),Ze(_.base.dom.scrollV);var o=function(){k()&&q(P.selectedindex),n&&"function"==typeof n&&n(e)};_.viewer.zoom=0,(k()||x&&!x.isViewerActive())&&C(f,t,!0),o()}function Me(){J(Kt(this),P.selectedhovercolor,P.hovercolor)}function Fe(){J(Kt(this),P.selectedcolor,P.backcolor)}function Se(e){if(0===e.button){for(var t=e.currentTarget,n=-1,o=0;o<_.base.dom.pageDivs.length;o++)if(_.base.dom.pageDivs[o][0]===t){n=_.base.dom.pageDivs[o]._index;break}if(-1!==n)if(P.selectionmode===Ye.MultiSelect){var i=e.shiftKey,r=en.Platform!==Xe.Mac?e.ctrlKey:e.metaKey;if(i){var a=p[p.length-1];if(n<a)for(var l=a-1;n<=l;l--)Ae(l,!0);else for(var s=a+1;s<=n;s++)Ae(s,!0)}else Ae(n,r)}else q(n)}}function Ae(e,t){t=t&&k(),-1!==p.indexOf(e)&&t?W(e):q(e,t)}function Oe(e,t,n){if(!(1<e.originalEvent.touches.length)){e.preventDefault();var o=e.originalEvent.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent(t,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,n,null),e.target.dispatchEvent(i)}}function Ie(e){if(o.moves=0,o.start={x:NaN,y:NaN},e.originalEvent.touches&&1===e.originalEvent.touches.length){var t=e.originalEvent.touches[0];o.start.x=t.screenX,o.start.y=t.screenY}Oe(e,"mouseover",0),Oe(e,"mousedown",0)}function Ve(e){if(e.originalEvent.touches&&e.originalEvent.touches.length){var t=e.originalEvent.touches[0];(1<e.originalEvent.touches.length||5<Math.abs(o.start.x-t.screenX)||5<Math.abs(o.start.y-t.screenY))&&o.moves++,Oe(e,"mousemove",0)}}function Le(e){Oe(e,"mouseup",0),0<o.moves?o.moves=0:Oe(e,"click",0),Oe(e,"mouseout",0)}function je(){_.dragdropping&&(U(k()),_.base.dom.content.sortable("refresh"))}function He(e){if(P.showthumbcaption){if(!e.page._caption){var t=Kt("<div/>");t.css({left:"3%",bottom:"16px",width:"94%",position:"absolute",zIndex:1,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),t.addClass(h.domclasses.atala_thumb_caption),e.page._caption=t,e.page.append(t)}var n=e.page._index+1+"";c._page.caption&&(n=c._page.caption.replace("{0}",n),e.page.attr("title",n)),e.page._caption.text(n)}e.page&&e.page._img&&!e.page._img._loaded&&G(e.page._img,e.page._paper),Q(e.page,-1<p.indexOf(e.page._index)&&k())}function Re(e){e.image&&(e.image._loaded?e.page&&G(e.image,e.page._paper,z.scale,{width:e.width,height:e.height}):e.image.css({position:"absolute"}))}function Be(e){m&&m.__status&&m.__status(e.message)}function Ne(){if(_.base){var e=_.base.page.size.width/_.base.page.size.height<1,t=Math.ceil(_.base.page.size.height*_.base.config.zoom),n=Math.ceil(_.base.page.size.width*_.base.config.zoom),o=Math.max(t,n),i=_.base.config.zoom*(o/(e?t:n));z.zoom=_.base.config.zoom/z.zoomfull,z.scale=i,Kt.each(_.base.dom.pageDivs,function(e,t){t.width(o),t.height(o)})}}function Ue(){}function qe(){}function We(e){m&&x&&f&&f.isReady()&&m.__updatePageSize(e,_.base.controllers.document,_.base.page.size,x.isThumbnailerActive(T()))}function Ze(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}return f&&(m=f.__getViewerLink(h,c),x=m.stateManager),h.bind({statusmessage:Be,pagerotated:pe,pageinserted:pe,pageremoved:pe,pagemoved:pe}),h.bind({annotationsloaded:Te,formsloaded:De,contextmenu:ke,documentloaded:Ce,pageshown:He,pageresize:Re,scroll:je,zoomchanged:Ne,zoomstarted:Ue,zoomfinished:qe,pagesizechanged:We}),j=h.empty,R=h.dispose,N=h.openUrl,A=h.__getDebugInfo,I=h.showPage,h.empty=L,h.dispose=H,h.openUrl=h.OpenUrl=B,h.__getDebugInfo=O,h.scrollToThumb=I,h.zoom=h.zoomIn=h.zoomOut=function(){},l=h.reloadPage,h.reloadPage=X,delete h.fit,Kt.extend(h.events,i),u={click:Se,touchstart:Ie,touchmove:Ve,touchend:Le,mouseenter:Me,mouseleave:Fe},h},WebDocumentViewer:Qe,Version:pn};function Me(){return"object"==typeof exports&&"object"==typeof e}function Fe(){return"function"==typeof define&&n(118)}function Se(){return!!self.Atalasoft}
/**
 * @namespace Utils
 * @memberof Atalasoft
 */
var Ae=w,Oe={AnnotationTypes:xe},Ie=Me()||Fe()||!Se()?Ee:ke({},self.Atalasoft.Controls,Ee),Ve=Me()||Fe()||!Se()?{}:ke({},self.Atalasoft.Logger);
/**
 * @namespace Annotations
 * @memberof Atalasoft
 */}])});