//-------------------------------------------------------------------------------------------------
//
//  Web Document Viewer object cross browser client-side script. 
//  Copyright 2003-2020 Atalasoft, Inc. All Rights Reserved.
//
//  This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)
//  Permission for usage and modification of this code is only permitted 
//  with the purchase of a source code license.
//-------------------------------------------------------------------------------------------------
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):"function"==typeof define&&define.amd?define(["jquery","raphael","jquery-ui","clipboard"],t):"object"==typeof exports?exports.Atalasoft=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):e.Atalasoft=t(e.jQuery,e.Raphael,e.jQuery.ui,e.ClipboardJS)}(window,function(n,o,i,r){return function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=119)}([function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var u=n(2),d=n(24).f,h=n(17),f=n(22),p=n(44),g=n(83),m=n(71);e.exports=function(e,t){var n,o,i,r,a,l=e.target,s=e.global,c=e.stat;if(n=s?u:c?u[l]||p(l,{}):(u[l]||{}).prototype)for(o in t){if(r=t[o],i=e.noTargetGet?(a=d(n,o))&&a.value:n[o],!m(s?o:l+(c?".":"#")+o,e.forced)&&void 0!==i){if(typeof r==typeof i)continue;g(r,i)}(e.sham||i&&i.sham)&&h(r,"sham",!0),f(n,o,r,e)}}},function(e,t){e.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(e,t,n){var o=n(26)("wks"),i=n(46),r=n(2).Symbol,a=n(72);e.exports=function(e){return o[e]||(o[e]=a&&r[e]||(a?r:i)("Symbol."+e))}},function(e,t,n){var o=n(7);e.exports=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){"use strict";var h=n(33),f=n(20),p=n(10),g=n(23),m=n(52),v=n(51),b=Math.max,x=Math.min,o=n(27)("splice");n(1)({target:"Array",proto:!0,forced:!o},{splice:function(e,t){var n,o,i,r,a,l,s=g(this),c=p(s.length),u=h(e,c),d=arguments.length;if(0===d?n=o=0:o=1===d?(n=0,c-u):(n=d-2,x(b(f(t),0),c-u)),9007199254740991<c+n-o)throw TypeError("Maximum allowed length exceeded");for(i=m(s,o),r=0;r<o;r++)(a=u+r)in s&&v(i,r,s[a]);if(n<(i.length=o)){for(r=u;r<c-o;r++)l=r+n,(a=r+o)in s?s[l]=s[a]:delete s[l];for(r=c;c-o+n<r;r--)delete s[r-1]}else if(o<n)for(r=c-o;u<r;r--)l=r+n-1,(a=r+o-1)in s?s[l]=s[a]:delete s[l];for(r=0;r<n;r++)s[r+u]=arguments[r+2];return s.length=c-o+n,i}})},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var o=n(96),i=n(97),r=n(17),a=n(2);for(var l in o){var s=a[l],c=s&&s.prototype;if(c&&c.forEach!==i)try{r(c,"forEach",i)}catch(e){c.forEach=i}}},function(e,t,n){e.exports=!n(0)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(20),i=Math.min;e.exports=function(e){return 0<e?i(o(e),9007199254740991):0}},function(e,t,n){"use strict";var d=n(77),x=n(4),h=n(6),y=n(107),_=n(53),w=n(10),z=n(37),f=n(54),o=n(0),p=[].push,P=Math.min,D=4294967295,T=!o(function(){return!RegExp(D,"y")});n(38)("split",2,function(i,m,v){var b;return b="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){var n=String(h(this)),o=void 0===t?D:t>>>0;if(0===o)return[];if(void 0===e)return[n];if(!d(e))return m.call(n,e,o);for(var i,r,a,l=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,u=new RegExp(e.source,s+"g");(i=f.call(u,n))&&!(c<(r=u.lastIndex)&&(l.push(n.slice(c,i.index)),1<i.length&&i.index<n.length&&p.apply(l,i.slice(1)),a=i[0].length,c=r,l.length>=o));)u.lastIndex===i.index&&u.lastIndex++;return c===n.length?!a&&u.test("")||l.push(""):l.push(n.slice(c)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:m.call(this,e,t)}:m,[function(e,t){var n=h(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):b.call(String(n),e,t)},function(e,t){var n=v(b,e,this,t,b!==m);if(n.done)return n.value;var o=x(e),i=String(this),r=y(o,RegExp),a=o.unicode,l=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(T?"y":"g"),s=new r(T?o:"^(?:"+o.source+")",l),c=void 0===t?D:t>>>0;if(0===c)return[];if(0===i.length)return null===z(s,i)?[i]:[];for(var u=0,d=0,h=[];d<i.length;){s.lastIndex=T?d:0;var f,p=z(s,T?i:i.slice(d));if(null===p||(f=P(w(s.lastIndex+(T?0:d)),i.length))===u)d=_(i,d,a);else{if(h.push(i.slice(u,d)),h.length===c)return h;for(var g=1;g<=p.length-1;g++)if(h.push(p[g]),h.length===c)return h;d=u=f}}return h.push(i.slice(u)),h}]},!T)},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var o=n(9),i=n(66),r=n(4),a=n(25),l=Object.defineProperty;t.f=o?l:function(e,t,n){if(r(e),t=a(t,!0),r(n),i)try{return l(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){"use strict";var P=n(4),o=n(23),D=n(10),T=n(20),r=n(6),k=n(53),C=n(37),E=Math.max,M=Math.min,h=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(38)("replace",2,function(i,_,w){return[function(e,t){var n=r(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):_.call(String(n),e,t)},function(e,t){var n=w(_,e,this,t);if(n.done)return n.value;var o=P(e),i=String(this),r="function"==typeof t;r||(t=String(t));var a=o.global;if(a){var l=o.unicode;o.lastIndex=0}for(var s=[];;){var c=C(o,i);if(null===c)break;if(s.push(c),!a)break;""===String(c[0])&&(o.lastIndex=k(i,D(o.lastIndex),l))}for(var u,d="",h=0,f=0;f<s.length;f++){c=s[f];for(var p=String(c[0]),g=E(M(T(c.index),i.length),0),m=[],v=1;v<c.length;v++)m.push(void 0===(u=c[v])?u:String(u));var b=c.groups;if(r){var x=[p].concat(m,g,i);void 0!==b&&x.push(b);var y=String(t.apply(void 0,x))}else y=z(p,i,g,m,b,t);h<=g&&(d+=i.slice(h,g)+y,h=g+p.length)}return d+i.slice(h)}];function z(r,a,l,s,c,e){var u=l+r.length,d=s.length,t=p;return void 0!==c&&(c=o(c),t=f),_.call(e,t,function(e,t){var n;switch(t.charAt(0)){case"$":return"$";case"&":return r;case"`":return a.slice(0,l);case"'":return a.slice(u);case"<":n=c[t.slice(1,-1)];break;default:var o=+t;if(0===o)return e;if(d<o){var i=h(o/10);return 0===i?e:i<=d?void 0===s[i-1]?t.charAt(1):s[i-1]+t.charAt(1):e}n=s[o-1]}return void 0===n?"":n})}})},function(e,t,n){"use strict";var c=n(7),u=n(35),d=n(33),h=n(10),f=n(16),p=n(51),g=n(3)("species"),m=[].slice,v=Math.max,o=n(27)("slice");n(1)({target:"Array",proto:!0,forced:!o},{slice:function(e,t){var n,o,i,r=f(this),a=h(r.length),l=d(e,a),s=d(void 0===t?a:t,a);if(u(r)&&("function"!=typeof(n=r.constructor)||n!==Array&&!u(n.prototype)?c(n)&&null===(n=n[g])&&(n=void 0):n=void 0,n===Array||void 0===n))return m.call(r,l,s);for(o=new(void 0===n?Array:n)(v(s-l,0)),i=0;l<s;l++,i++)l in r&&p(o,i,r[l]);return o.length=i,o}})},function(e,t,n){var o=n(43),i=n(6);e.exports=function(e){return o(i(e))}},function(e,t,n){var o=n(13),i=n(30);e.exports=n(9)?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(9),i=n(13).f,r=Function.prototype,a=r.toString,l=/^\s*function ([^ (]*)/;!o||"name"in r||i(r,"name",{configurable:!0,get:function(){try{return a.call(this).match(l)[1]}catch(e){return""}}})},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?o:n)(e)}},function(e,t,n){"use strict";var o=n(36)(2),i=n(27)("filter");n(1)({target:"Array",proto:!0,forced:!i},{filter:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var l=n(2),s=n(17),c=n(12),u=n(44),o=n(68),i=n(69),r=i.get,d=i.enforce,h=String(o).split("toString");n(26)("inspectSource",function(e){return o.call(e)}),(e.exports=function(e,t,n,o){var i=!!o&&!!o.unsafe,r=!!o&&!!o.enumerable,a=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||c(n,"name")||s(n,"name",t),d(n).source=h.join("string"==typeof t?t:"")),e!==l?(i?!a&&e[t]&&(r=!0):delete e[t],r?e[t]=n:s(e,t,n)):r?e[t]=n:u(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&r(this).source||o.call(this)})},function(e,t,n){var o=n(6);e.exports=function(e){return Object(o(e))}},function(e,t,n){var o=n(9),i=n(42),r=n(30),a=n(16),l=n(25),s=n(12),c=n(66),u=Object.getOwnPropertyDescriptor;t.f=o?u:function(e,t){if(e=a(e),t=l(t,!0),c)try{return u(e,t)}catch(e){}if(s(e,t))return r(!i.f.call(e,t),e[t])}},function(e,t,n){var i=n(7);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var o=n(2),i=n(44),r="__core-js_shared__",a=o[r]||i(r,{});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.0.1",mode:n(65)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){var o=n(0),i=n(3)("species");e.exports=function(t){return!o(function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},function(e,t,n){"use strict";var o=n(16),i=[].join,r=n(43)!=Object,a=n(75)("join",",");n(1)({target:"Array",proto:!0,forced:r||a},{join:function(e){return i.call(o(this),void 0===e?",":e)}})},function(e,t){e.exports=n},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports={}},function(e,t,n){var o=n(70),i=n(47).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,i)}},function(e,t,n){var o=n(20),i=Math.max,r=Math.min;e.exports=function(e,t){var n=o(e);return n<0?i(n+t,0):r(n,t)}},function(e,t,n){var o=n(70),i=n(47);e.exports=Object.keys||function(e){return o(e,i)}},function(e,t,n){var o=n(19);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){var x=n(93),y=n(43),_=n(23),w=n(10),o=n(52);e.exports=function(d,e){var h=1==d,f=2==d,p=3==d,g=4==d,m=6==d,v=5==d||m,b=e||o;return function(e,t,n){for(var o,i,r=_(e),a=y(r),l=x(t,n,3),s=w(a.length),c=0,u=h?b(e,s):f?b(e,0):void 0;c<s;c++)if((v||c in a)&&(i=l(o=a[c],c,r),d))if(h)u[c]=i;else if(i)switch(d){case 3:return!0;case 5:return o;case 6:return c;case 2:u.push(o)}else if(g)return!1;return m?-1:p||g?g:u}}},function(e,t,n){var i=n(19),r=n(54);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},function(e,t,n){"use strict";var d=n(17),h=n(22),f=n(0),p=n(3),g=n(54),m=p("species"),v=!f(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),b=!f(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]});e.exports=function(n,e,t,o){var i=p(n),r=!f(function(){var e={};return e[i]=function(){return 7},7!=""[n](e)}),a=r&&!f(function(){var e=!1,t=/a/;return t.exec=function(){return e=!0,null},"split"===n&&(t.constructor={},t.constructor[m]=function(){return t}),t[i](""),!e});if(!r||!a||"replace"===n&&!v||"split"===n&&!b){var l=/./[i],s=t(i,""[n],function(e,t,n,o,i){return t.exec===g?r&&!i?{done:!0,value:l.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),c=s[0],u=s[1];h(String.prototype,n,c),h(RegExp.prototype,i,2==e?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}),o&&d(RegExp.prototype[i],"sham",!0)}}},function(e,t,n){"use strict";var o=n(36)(5),i="find",r=!0;i in[]&&Array(1)[i](function(){r=!1}),n(1)({target:"Array",proto:!0,forced:r},{find:function(e){return o(this,e,1<arguments.length?arguments[1]:void 0)}}),n(78)(i)},function(e,t,n){"use strict";var o=n(36)(1),i=n(27)("map");n(1)({target:"Array",proto:!0,forced:!i},{map:function(e){return o(this,e,arguments[1])}})},function(e,t,n){"use strict";var o=n(79),i=n(108)("trim");n(1)({target:"String",proto:!0,forced:i},{trim:function(){return o(this,3)}})},function(e,t,n){"use strict";var o={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!o.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:o},function(e,t,n){var o=n(0),i=n(19),r="".split;e.exports=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==i(e)?r.call(e,""):Object(e)}:Object},function(e,t,n){var o=n(2),i=n(17);e.exports=function(t,n){try{i(o,t,n)}catch(e){o[t]=n}return n}},function(e,t,n){var o=n(26)("keys"),i=n(46);e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var o=n(4),i=n(90),r=n(47),a=n(91),l=n(67),s=n(45)("IE_PROTO"),c="prototype",u=function(){},d=function(){var e,t=l("iframe"),n=r.length,o="script";for(t.style.display="none",a.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object</"+o+">"),e.close(),d=e.F;n--;)delete d[c][r[n]];return d()};e.exports=Object.create||function(e,t){var n;return null!==e?(u[c]=o(e),n=new u,u[c]=null,n[s]=e):n=d(),void 0===t?n:i(n,t)},n(31)[s]=!0},function(e,t,n){"use strict";var o=n(35),i=n(7),c=n(23),u=n(10),d=n(51),h=n(52),r=n(3)("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",a=!n(0)(function(){var e=[];return e[r]=!1,e.concat()[0]!==e}),l=n(27)("concat"),g=function(e){if(!i(e))return!1;var t=e[r];return void 0!==t?!!t:o(e)},s=!a||!l;n(1)({target:"Array",proto:!0,forced:s},{concat:function(e){var t,n,o,i,r,a=c(this),l=h(a,0),s=0;for(t=-1,o=arguments.length;t<o;t++)if(r=-1===t?a:arguments[t],g(r)){if(i=u(r.length),f<s+i)throw TypeError(p);for(n=0;n<i;n++,s++)n in r&&d(l,s,r[n])}else{if(f<=s)throw TypeError(p);d(l,s++,r)}return l.length=s,l}})},function(e,t,n){"use strict";var i=n(25),r=n(13),a=n(30);e.exports=function(e,t,n){var o=i(t);o in e?r.f(e,o,a(0,n)):e[o]=n}},function(e,t,n){var o=n(7),i=n(35),r=n(3)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[r])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){"use strict";var o=n(99);e.exports=function(e,t,n){return t+(n?o(e,t,!0).length:1)}},function(e,t,n){"use strict";var o,i,a=n(76),l=RegExp.prototype.exec,s=String.prototype.replace,r=l,c=(o=/a/,i=/b*/g,l.call(o,"a"),l.call(i,"a"),0!==o.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(r=function(e){var t,n,o,i,r=this;return u&&(n=new RegExp("^"+r.source+"$(?!\\s)",a.call(r))),c&&(t=r.lastIndex),o=l.call(r,e),c&&o&&(r.lastIndex=r.global?o.index+o[0].length:t),u&&o&&1<o.length&&s.call(o[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o}),e.exports=r},function(e,t,n){"use strict";var o=n(2),i=n(71),r=n(12),a=n(19),l=n(103),u=n(25),s=n(0),c=n(32).f,d=n(24).f,h=n(13).f,f=n(79),p="Number",g=o[p],m=g.prototype,v=a(n(49)(m))==p,b="trim"in String.prototype,x=function(e){var t,n,o,i,r,a,l,s,c=u(e,!1);if("string"==typeof c&&2<c.length)if(43===(t=(c=b?c.trim():f(c,3)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+c}for(a=(r=c.slice(2)).length,l=0;l<a;l++)if((s=r.charCodeAt(l))<48||i<s)return NaN;return parseInt(r,o)}return+c};if(i(p,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var y,_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(v?s(function(){m.valueOf.call(n)}):a(n)!=p)?l(new g(x(t)),n,_):x(t)},w=n(9)?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;w.length>z;z++)r(g,y=w[z])&&!r(_,y)&&h(_,y,d(g,y));(_.prototype=m).constructor=_,n(22)(o,p,_)}},function(e,t,n){"use strict";var s=n(4),i=n(6),c=n(106),u=n(37);n(38)("search",1,function(o,a,l){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=l(a,e,this);if(t.done)return t.value;var n=s(e),o=String(this),i=n.lastIndex;c(i,0)||(n.lastIndex=0);var r=u(n,o);return c(n.lastIndex,i)||(n.lastIndex=i),null===r?-1:r.index}]})},function(e,t,n){"use strict";var c=n(20),u=n(109),d=n(110),o=1..toFixed,i=Math.floor,r=[0,0,0,0,0,0],h=function(e,t){for(var n=-1,o=t;++n<6;)o+=e*r[n],r[n]=o%1e7,o=i(o/1e7)},f=function(e){for(var t=6,n=0;0<=--t;)n+=r[t],r[t]=i(n/e),n=n%e*1e7},p=function(){for(var e=6,t="";0<=--e;)if(""!==t||0===e||0!==r[e]){var n=String(r[e]);t=""===t?n:t+d.call("0",7-n.length)+n}return t},g=function(e,t,n){return 0===t?n:t%2==1?g(e,t-1,n*e):g(e*e,t/2,n)};n(1)({target:"Number",proto:!0,forced:o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(0)(function(){o.call({})})},{toFixed:function(e){var t,n,o,i,r=u(this),a=c(e),l="",s="0";if(a<0||20<a)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||1e21<=r)return String(r);if(r<0&&(l="-",r=-r),1e-21<r)if(n=(t=function(e){for(var t=0,n=e;4096<=n;)t+=12,n/=4096;for(;2<=n;)t+=1,n/=2;return t}(r*g(2,69,1))-69)<0?r*g(2,-t,1):r/g(2,t,1),n*=4503599627370496,0<(t=52-t)){for(h(0,n),o=a;7<=o;)h(1e7,0),o-=7;for(h(g(10,o,1),0),o=t-1;23<=o;)f(1<<23),o-=23;f(1<<o),h(1,1),f(2),s=p()}else h(0,n),h(1<<-t,0),s=p()+d.call("0",a);return s=0<a?l+((i=s.length)<=a?"0."+d.call("0",a-i)+s:s.slice(0,i-a)+"."+s.slice(i-a)):l+s}})},function(e,t,n){"use strict";var o=n(59),i=n(60)("bold");n(1)({target:"String",proto:!0,forced:i},{bold:function(){return o(this,"b","","")}})},function(e,t,n){var a=n(6),l=/"/g;e.exports=function(e,t,n,o){var i=String(a(e)),r="<"+t;return""!==n&&(r+=" "+n+'="'+String(o).replace(l,"&quot;")+'"'),r+">"+i+"</"+t+">"}},function(e,t,n){var o=n(0);e.exports=function(t){return o(function(){var e=""[t]('"');return e!==e.toLowerCase()||3<e.split('"').length})}},function(e,t,n){"use strict";var o=n(59),i=n(60)("italics");n(1)({target:"String",proto:!0,forced:i},{italics:function(){return o(this,"i","","")}})},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=r},function(e,t){e.exports=!1},function(e,t,n){e.exports=!n(9)&&!n(0)(function(){return 7!=Object.defineProperty(n(67)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(7),i=n(2).document,r=o(i)&&o(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,t,n){e.exports=n(26)("native-function-to-string",Function.toString)},function(e,t,n){var o,i,r,a=n(82),l=n(7),s=n(17),c=n(12),u=n(45),d=n(31),h=n(2).WeakMap;if(a){var f=new h,p=f.get,g=f.has,m=f.set;o=function(e,t){return m.call(f,e,t),t},i=function(e){return p.call(f,e)||{}},r=function(e){return g.call(f,e)}}else{var v=u("state");d[v]=!0,o=function(e,t){return s(e,v,t),t},i=function(e){return c(e,v)?e[v]:{}},r=function(e){return c(e,v)}}e.exports={set:o,get:i,has:r,enforce:function(e){return r(e)?i(e):o(e,{})},getterFor:function(n){return function(e){var t;if(!l(e)||(t=i(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},function(e,t,n){var a=n(12),l=n(16),s=n(85)(!1),c=n(31);e.exports=function(e,t){var n,o=l(e),i=0,r=[];for(n in o)!a(c,n)&&a(o,n)&&r.push(n);for(;t.length>i;)a(o,n=t[i++])&&(~s(r,n)||r.push(n));return r}},function(e,t,n){var o=n(0),i=/#|\.prototype\./,r=function(e,t){var n=l[a(e)];return n==c||n!=s&&("function"==typeof t?o(t):!!t)},a=r.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=r.data={},s=r.NATIVE="N",c=r.POLYFILL="P";e.exports=r},function(e,t,n){e.exports=!n(0)(function(){return!String(Symbol())})},function(e,t,n){t.f=n(3)},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e,t){var n=[][e];return!n||!o(function(){n.call(null,t||function(){throw 1},1)})}},function(e,t,n){"use strict";var o=n(4);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){var o=n(7),i=n(19),r=n(3)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},function(e,t,n){var o=n(3)("unscopables"),i=n(49),r=n(17),a=Array.prototype;null==a[o]&&r(a,o,i(null)),e.exports=function(e){a[o][e]=!0}},function(e,t,n){var o=n(6),i="["+n(80)+"]",r=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$");e.exports=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(r,"")),2&t&&(e=e.replace(a,"")),e}},function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(e,t,n){"use strict";var o=n(2),a=n(12),i=n(9),r=n(65),l=n(1),s=n(22),c=n(31),u=n(0),d=n(26),h=n(86),f=n(46),p=n(3),g=n(73),m=n(87),v=n(89),b=n(35),x=n(4),y=n(7),_=n(16),w=n(25),z=n(30),P=n(49),D=n(92),T=n(24),k=n(13),C=n(42),E=n(17),M=n(34),S=n(45)("hidden"),F=n(69),I="Symbol",A=F.set,O=F.getterFor(I),V=T.f,H=k.f,L=D.f,R=o.Symbol,j=o.JSON,B=j&&j.stringify,N="prototype",q=p("toPrimitive"),U=C.f,W=d("symbol-registry"),Z=d("symbols"),X=d("op-symbols"),Y=d("wks"),G=Object[N],Q=o.QObject,J=n(72),K=!Q||!Q[N]||!Q[N].findChild,$=i&&u(function(){return 7!=P(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=V(G,t);o&&delete G[t],H(e,t,n),o&&e!==G&&H(G,t,o)}:H,ee=function(e,t){var n=Z[e]=P(R[N]);return A(n,{type:I,tag:e,description:t}),i||(n.description=t),n},te=J&&"symbol"==typeof R.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof R},ne=function(e,t,n){return e===G&&ne(X,t,n),x(e),t=w(t,!0),x(n),a(Z,t)?(n.enumerable?(a(e,S)&&e[S][t]&&(e[S][t]=!1),n=P(n,{enumerable:z(0,!1)})):(a(e,S)||H(e,S,z(1,{})),e[S][t]=!0),$(e,t,n)):H(e,t,n)},oe=function(e,t){x(e);for(var n,o=v(t=_(t)),i=0,r=o.length;i<r;)ne(e,n=o[i++],t[n]);return e},ie=function(e){var t=U.call(this,e=w(e,!0));return!(this===G&&a(Z,e)&&!a(X,e))&&(!(t||!a(this,e)||!a(Z,e)||a(this,S)&&this[S][e])||t)},re=function(e,t){if(e=_(e),t=w(t,!0),e!==G||!a(Z,t)||a(X,t)){var n=V(e,t);return!n||!a(Z,t)||a(e,S)&&e[S][t]||(n.enumerable=!0),n}},ae=function(e){for(var t,n=L(_(e)),o=[],i=0;n.length>i;)a(Z,t=n[i++])||a(c,t)||o.push(t);return o},le=function(e){for(var t,n=e===G,o=L(n?X:_(e)),i=[],r=0;o.length>r;)!a(Z,t=o[r++])||n&&!a(G,t)||i.push(Z[t]);return i};J||(s((R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var e=void 0===arguments[0]?void 0:String(arguments[0]),t=f(e),n=function(e){this===G&&n.call(X,e),a(this,S)&&a(this[S],t)&&(this[S][t]=!1),$(this,t,z(1,e))};return i&&K&&$(G,t,{configurable:!0,set:n}),ee(t,e)})[N],"toString",function(){return O(this).tag}),C.f=ie,k.f=ne,T.f=re,n(32).f=D.f=ae,n(48).f=le,i&&(H(R[N],"description",{configurable:!0,get:function(){return O(this).description}}),r||s(G,"propertyIsEnumerable",ie,{unsafe:!0})),g.f=function(e){return ee(p(e),e)}),l({global:!0,wrap:!0,forced:!J,sham:!J},{Symbol:R});for(var se=M(Y),ce=0;se.length>ce;)m(se[ce++]);l({target:I,stat:!0,forced:!J},{for:function(e){return a(W,e+="")?W[e]:W[e]=R(e)},keyFor:function(e){if(!te(e))throw TypeError(e+" is not a symbol");for(var t in W)if(W[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),l({target:"Object",stat:!0,forced:!J,sham:!i},{create:function(e,t){return void 0===t?P(e):oe(P(e),t)},defineProperty:ne,defineProperties:oe,getOwnPropertyDescriptor:re}),l({target:"Object",stat:!0,forced:!J},{getOwnPropertyNames:ae,getOwnPropertySymbols:le}),j&&l({target:"JSON",stat:!0,forced:!J||u(function(){var e=R();return"[null]"!=B([e])||"{}"!=B({a:e})||"{}"!=B(Object(e))})},{stringify:function(e){for(var t,n,o=[e],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=t=o[1],(y(t)||void 0!==e)&&!te(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!te(t))return t}),o[1]=t,B.apply(j,o)}}),R[N][q]||E(R[N],q,R[N].valueOf),h(R,I),c[S]=!0},function(e,t,n){var o=n(68),i=n(2).WeakMap;e.exports="function"==typeof i&&/native code/.test(o.call(i))},function(e,t,n){var l=n(12),s=n(84),c=n(24),u=n(13);e.exports=function(e,t){for(var n=s(t),o=u.f,i=c.f,r=0;r<n.length;r++){var a=n[r];l(e,a)||o(e,a,i(t,a))}}},function(e,t,n){var o=n(32),i=n(48),r=n(4),a=n(2).Reflect;e.exports=a&&a.ownKeys||function(e){var t=o.f(r(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var s=n(16),c=n(10),u=n(33);e.exports=function(l){return function(e,t,n){var o,i=s(e),r=c(i.length),a=u(n,r);if(l&&t!=t){for(;a<r;)if((o=i[a++])!=o)return!0}else for(;a<r;a++)if((l||a in i)&&i[a]===t)return l||a||0;return!l&&-1}}},function(e,t,n){var o=n(13).f,i=n(12),r=n(3)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,r)&&o(e,r,{configurable:!0,value:t})}},function(e,t,n){var o=n(88),i=n(12),r=n(73),a=n(13).f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});i(t,e)||a(t,e,{value:r.f(e)})}},function(e,t,n){e.exports=n(2)},function(e,t,n){var l=n(34),s=n(48),c=n(42);e.exports=function(e){var t=l(e),n=s.f;if(n)for(var o,i=n(e),r=c.f,a=0;i.length>a;)r.call(e,o=i[a++])&&t.push(o);return t}},function(e,t,n){var o=n(9),a=n(13),l=n(4),s=n(34);e.exports=o?Object.defineProperties:function(e,t){l(e);for(var n,o=s(t),i=o.length,r=0;r<i;)a.f(e,n=o[r++],t[n]);return e}},function(e,t,n){var o=n(2).document;e.exports=o&&o.documentElement},function(e,t,n){var o=n(16),i=n(32).f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==r.call(e)?function(e){try{return i(e)}catch(e){return a.slice()}}(e):i(o(e))}},function(e,t,n){var r=n(74);e.exports=function(o,i,e){if(r(o),void 0===i)return o;switch(e){case 0:return function(){return o.call(i)};case 1:return function(e){return o.call(i,e)};case 2:return function(e,t){return o.call(i,e,t)};case 3:return function(e,t,n){return o.call(i,e,t,n)}}return function(){return o.apply(i,arguments)}}},function(e,t,n){var o=n(16),i=n(24).f,r=n(9),a=n(0)(function(){i(1)}),l=!r||a;n(1)({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},function(e,t,n){var o=n(23),i=n(34),r=n(0)(function(){i(1)});n(1)({target:"Object",stat:!0,forced:r},{keys:function(e){return i(o(e))}})},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){"use strict";var o=[].forEach,i=n(36)(0),r=n(75)("forEach");e.exports=r?function(e){return i(this,e,arguments[1])}:o},function(e,t,n){"use strict";var d=n(4),h=n(10),i=n(6),f=n(53),p=n(37);n(38)("match",1,function(o,c,u){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=u(c,e,this);if(t.done)return t.value;var n=d(e),o=String(this);if(!n.global)return p(n,o);for(var i,r=n.unicode,a=[],l=n.lastIndex=0;null!==(i=p(n,o));){var s=String(i[0]);""===(a[l]=s)&&(n.lastIndex=f(o,h(n.lastIndex),r)),l++}return 0===l?null:a}]})},function(e,t,n){var s=n(20),c=n(6);e.exports=function(e,t,n){var o,i,r=String(c(e)),a=s(t),l=r.length;return a<0||l<=a?n?"":void 0:(o=r.charCodeAt(a))<55296||56319<o||a+1===l||(i=r.charCodeAt(a+1))<56320||57343<i?n?r.charAt(a):o:n?r.slice(a,a+2):i-56320+(o-55296<<10)+65536}},function(e,t,n){"use strict";var i=n(10),r=n(101),a="startsWith",o=n(102)(a),l=""[a];n(1)({target:"String",proto:!0,forced:!o},{startsWith:function(e){var t=r(this,e,a),n=i(Math.min(1<arguments.length?arguments[1]:void 0,t.length)),o=String(e);return l?l.call(t,o,n):t.slice(n,n+o.length)===o}})},function(e,t,n){var o=n(77),i=n(6);e.exports=function(e,t,n){if(o(t))throw TypeError("String.prototype."+n+" doesn't accept regex");return String(i(e))}},function(e,t,n){var o=n(3)("match");e.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[o]=!1,"/./"[t](n)}catch(e){}}return!1}},function(e,t,n){var r=n(7),a=n(104);e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&r(o)&&a&&a(e,o),e}},function(e,t,n){var i=n(105);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,o=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),o=e instanceof Array}catch(e){}return function(e,t){return i(e,t),o?n.call(e,t):e.__proto__=t,e}}():void 0)},function(e,t,n){var o=n(7),i=n(4);e.exports=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}},function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},function(e,t,n){var i=n(4),r=n(74),a=n(3)("species");e.exports=function(e,t){var n,o=i(e).constructor;return void 0===o||null==(n=i(o)[a])?t:r(n)}},function(e,t,n){var o=n(0),i=n(80);e.exports=function(e){return o(function(){return!!i[e]()||"​᠎"!="​᠎"[e]()||i[e].name!==e})}},function(e,t,n){var o=n(19);e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},function(e,t,n){"use strict";var i=n(20),r=n(6);e.exports="".repeat||function(e){var t=String(r(this)),n="",o=i(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;0<o;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},function(e,t,n){var o=n(112),i=Object.prototype;o!==i.toString&&n(22)(i,"toString",o,{unsafe:!0})},function(e,t,n){"use strict";var o=n(113),i={};i[n(3)("toStringTag")]="z",e.exports="[object z]"!==String(i)?function(){return"[object "+o(this)+"]"}:i.toString},function(e,t,n){var i=n(19),r=n(3)("toStringTag"),a="Arguments"==i(function(){return arguments}());e.exports=function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),r))?n:a?i(t):"Object"==(o=i(t))&&"function"==typeof t.callee?"Arguments":o}},function(e,t,n){"use strict";var o=n(4),i=n(0),r=n(76),a=n(9),l="toString",s=/./[l],c=i(function(){return"/a/b"!=s.call({source:"a",flags:"b"})}),u=s.name!=l;(c||u)&&n(22)(RegExp.prototype,l,function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?r.call(e):void 0)},{unsafe:!0})},function(e,t,n){n(1)({target:"Array",proto:!0},{fill:n(116)}),n(78)("fill")},function(e,t,n){"use strict";var l=n(23),s=n(33),c=n(10);e.exports=function(e){for(var t=l(this),n=c(t.length),o=arguments.length,i=s(1<o?arguments[1]:void 0,n),r=2<o?arguments[2]:void 0,a=void 0===r?n:s(r,n);i<a;)t[i++]=e;return t}},function(e,t,n){"use strict";var o=n(59),i=n(60)("strike");n(1)({target:"String",proto:!0,forced:i},{strike:function(){return o(this,"strike","","")}})},function(t,e){(function(e){t.exports=e}).call(this,{})},function(e,t,n){"use strict";n.r(t);n(81),n(50),n(21),n(94),n(95),n(8),n(98),n(14),n(100);var Xe,o,i=n(29),r=n(62),a=n(63),l=n(64),Qt=void 0===i?null:i,Jt=(void 0===a&&(void 0===i.ui||i.ui),void 0===r?null:r),Re=void 0===l?null:l;function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}(o=Xe||(Xe={}))[o.Windows=0]="Windows",o[o.Mac=1]="Mac",o[o.Unknown=2]="Unknown";var h,f,p=function(){function e(){}return e.prototype.Any=function(){return this.iOS||this.Android||this.IEMobile},d(e,[{key:"iOS",get:function(){return!!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)}},{key:"Android",get:function(){return!!navigator.userAgent.match(/(Android)/i)}},{key:"IEMobile",get:function(){return!!navigator.userAgent.match(/(IEMobile)/i)}}]),e}(),g=function(){function e(){c(this,"browserLayoutVersion",navigator.userAgent.match(/(?:Gecko|Presto|Trident|WebKit).[\d.]*/))}return d(e,[{key:"Gecko",get:function(){return!!navigator.userAgent.match(/(Gecko)/i)}},{key:"Presto",get:function(){return!!navigator.userAgent.match(/(Presto)/i)}},{key:"Trident",get:function(){return!!navigator.userAgent.match(/(Trident)/i)}},{key:"Webkit",get:function(){return!!navigator.userAgent.match(/(WebKit)/i)}},{key:"Version",get:function(){return this.browserLayoutVersion?this.browserLayoutVersion[0].replace(/\D*/,""):null}}]),e}(),m=function(){function e(){c(this,"supportsVml",e.supportsVML())}return e.supportsVML=function(){var e;if(void 0===e){var t=Qt("<div/>").appendTo("body"),n=Qt('<v:shape id="vml_flag1" adj="1" />').appendTo(t);n.css("behavior","url(#default#VML)"),e=!n[0]||"object"==typeof n[0].adj,t.remove()}return e},d(e,[{key:"SVG",get:function(){return!(!window.SVGAngle&&!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"))}},{key:"Touch",get:function(){return!!("ontouchstart"in window)}},{key:"VML",get:function(){return this.supportsVml}},{key:"foreignObject",get:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Extensibility","1.1")}},{key:"Compatibility",get:function(){return void 0!==document.documentMode&&7===document.documentMode}},{key:"FlexBox",get:function(){return"flex"in document.documentElement.style||"WebkitFlex"in document.documentElement.style||"msFlex"in document.documentElement.style}}]),e}(),v=function(){function e(){c(this,"mobile",void 0),c(this,"browserVersion",void 0),this.mobile=new p,this.Edge?this.browserVersion=navigator.userAgent.match(/(?:Edge).[\d.]*/):this.browserVersion=null,this.browserVersion||(this.browserVersion=navigator.userAgent.match(/(?:MSIE|Firefox|Chrome|Safari|Opera| rv|Edge).[\d.]*/))}return d(e,[{key:"Explorer",get:function(){return 0<=navigator.userAgent.indexOf("MSIE")||0<=navigator.userAgent.indexOf("Trident")}},{key:"Firefox",get:function(){return 0<=navigator.userAgent.indexOf("Firefox")||0<=navigator.userAgent.indexOf("Minefield")}},{key:"Safari",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&navigator.userAgent.indexOf("Chrome")<0&&navigator.userAgent.indexOf("Edge")<0}},{key:"Opera",get:function(){return 0<=navigator.userAgent.indexOf("Opera")}},{key:"Chrome",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")<0}},{key:"Edge",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&0<=navigator.userAgent.indexOf("Edge")}},{key:"Mobile",get:function(){return this.mobile}},{key:"Version",get:function(){return this.browserVersion?this.browserVersion[0].replace(/\D*/,""):null}}]),e}(),b=function(t){var e,n;function o(){var e;return c(s(e=t.call(this)||this),"features",void 0),c(s(e),"layout",void 0),c(s(e),"platform",void 0),e.features=new m,e.layout=new g,e.platform=e.DetectPlatform(),e}
/**
   * @private
   */return n=t,(e=o).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n,o.prototype.DetectPlatform=function(){return navigator.platform.startsWith("Mac")?Xe.Mac:navigator.platform.startsWith("Win")?Xe.Windows:Xe.Unknown},d(o,[{key:"Features",get:function(){return this.features}
/**
     * @private
     */},{key:"Layout",get:function(){return this.layout}
/**
     * @private
     */},{key:"Platform",get:function(){return this.platform}}]),o}(v),x=new v,Kt=new b,y=x,$t={
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
Text:8},je={
/** Automatically determined by the browser. */
Auto:"",
/** An arrow pointer. */
Arrow:"default",
/** A crosshair usually used in drawing a box. */
Crosshair:"crosshair",
/** A grabbing cursor. Usually changes to gabbed while the mouse button is down. */
Grab:y.Firefox?"-moz-grab":"hand",
/** A hand with a finger pointing. Usually what the browser uses for clicking hyperlinks. */
Hand:"pointer",
/** A crosshair pointer with arrowheads on the ends indicating movement. */
Move:"move",
/** A magnifying glass with a plus sign in it. */
ZoomIn:y.Firefox?"-moz-zoom-in":'url("%1ZoomIn.cur"pointer), pointer',
/** A magnifying glass with a minus sign in it. */
ZoomOut:y.Firefox?"-moz-zoom-out":'url("%1ZoomOut.cur"), pointer',
/** A selection editing cursor. */
Text:"text",
/** A vertical text editing cursor. */
VerticalText:"vertical-text",
/** A wait cursor. */
Wait:"wait",
/** A custom CSS cursor string provided by the user. */
Custom:"%2"},en={
/** Scrolls horizontally. */
Horizontal:"horizontal",
/** Scrolls vertically. */
Vertical:"vertical"},tn={
/** No fitting will be applied to the image */
None:0,
/** Finds the best option between width or height based fitting. */
Best:1,
/** Fits the image to the available width. */
Width:2,
/** Fits the image to the available height. */
Height:3},nn={
/** Selects the page under the top left corner of the viewer  */
TopLeft:{x:0,y:0},
/** Selects the page under the middle left of the viewer  */
MiddleLeft:{x:0,y:.5},
/** Selects the page under the bottom left corner of the viewer  */
BottomLeft:{x:0,y:1},
/** Selects the page under the center location of viewer  */
Center:{x:.5,y:.5}},on={
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
SelectedOrder:1},w={
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
Name:3},_={FileUploadRejectReason:w,SelectedItemsOrder:Ge,SelectionMode:Ye,ScrollArea:on,PageSelection:nn,Fitting:tn,ScrollDirection:en,MouseToolCursor:je,MouseToolType:$t,Browser:y},ye={
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
polygon:"polygon"},rn=(n(39),n(28),n(15),n(5),n(18),n(55),n(56),n(11),{
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
atala_upload_files_header_status:"atala-upload-files-header-status"}),an={
/** Index of the page currently displayed within the element. applies to elements having `.atala_page_div` class */
atala_page_index:"atala_page_index"};n(40);function z(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(f=h||(h={})).Jquery="jQuery",f.JqueryUI="jQuery UI",f.RaphaelJS="Raphaël",f.Clipboard="clipboard.js";var P,D,T,k=function(){function a(){}var e=a.prototype;return e.checkDependency=function(e,t){var n=this,o=a.requiredDependencies.filter(function(e){return z(this,n),e.name===t}.bind(this))[0],i={dependency:o,success:!1,reason:"Dependency is not loaded or not found."};if(e){var r="";switch(e.fn&&e.fn.jquery?r=e.fn.jquery:e.version&&(r=e.version),t){case h.Clipboard:i.success=!0,i.reason="WDV can't verify the version of the dependency.";break;case h.Jquery:case h.JqueryUI:case h.RaphaelJS:this.hasNewerVersion(r,o.version)?(i.success=!0,i.reason=""):i.reason="Dependency has a lower version ("+r+") than required."}}return 0<i.reason.length&&(i.reason+=" The minimal required version is '"+o.version+"'."),i},e.hasNewerVersion=function(e,t){var o=this;if(/^[0-9]+\.[0-9]+\.[0-9]+(-([A-Za-z0-9-]+\.?)+)?(\+([A-Za-z0-9-]+\.?)+)?$/.test(e)){for(var i=/^[0-9]+\.[0-9]+\.[0-9]+/,n=function(e){var t=this;if(z(this,o),null!==i){var n=i.exec(e);if(null!=n&&0<n.length)return n[0].split(".").map(function(e){return z(this,t),parseInt(e)}.bind(this))}return[]}.bind(this),r=n(e),a=n(t),l=0;l<3;l++){if(r[l]<a[l])return!1;if(r[l]>a[l])return!0}var s=e.replace(i,"");return 0===s.length||"+"===s[0]}return!1},a}();function C(e,t,n,o,i){var r=e.checkDependency(t,n);return r.success?(i&&i(n,r.reason),!0):(o(n,r.reason),!1)}function E(e){var n=this,t=new k,o=function(e,t){z(this,n),console.error("The dependency verification for '"+e+"' has failed. "+t)}.bind(this),i=function(e,t){z(this,n)}.bind(this),r=C(t,void 0===Qt?null:Qt,h.Jquery,o);return e.checkjQueryOnly||(r&&(r=C(t,Qt.ui,h.JqueryUI,o)),e.checkRaphael&&(r=C(t,void 0===Jt?null:Jt,h.RaphaelJS,o)&&r),e.checkClipboard&&(r=C(t,void 0===Re?null:Re,h.Clipboard,o,i)&&r)),r}function ln(){return E({checkjQueryOnly:!0,checkRaphael:!1,checkClipboard:!1})}function sn(e,t){return E({checkjQueryOnly:!1,checkRaphael:e||t,checkClipboard:t})}P=k,D="requiredDependencies",T=[{name:h.Jquery,version:"1.12.4"},{name:h.JqueryUI,version:"1.12."},{name:h.RaphaelJS,version:"2.1.0"},{name:h.Clipboard,version:"2.0.0"}],D in P?Object.defineProperty(P,D,{value:T,enumerable:!0,configurable:!0,writable:!0}):P[D]=T;n(41);
/**
 * @private
 */
function X(e,t){t||(t={x:0,y:0});var n=e.target instanceof HTMLElement?e.target:null;for(Kt.Explorer&&null===e&&(e=event),e instanceof MouseEvent?(t.x=e.clientX,t.y=e.clientY):(t.x=e.touches[0].clientX,t.y=e.touches[0].clientY);n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)t.x-=n.offsetLeft-n.scrollLeft,t.y-=n.offsetTop-n.scrollTop,n=n.offsetParent instanceof HTMLElement?n.offsetParent:null;return t}
/**
 * @private
 */function G(e,t,n){t||(t={x:0,y:0});var o=e.originalEvent;if(e.offsetX||e.offsetY)if(Kt.Firefox){var i=e.target.raphaelParent?Qt(e.target).parents("svg").offset():Qt(e.target.offsetParent||e.target.parentNode).offset();t.y=i?(t.x=e.pageX-i.left,e.pageY-i.top):(t.x=e.pageX,e.pageY)}else if(void 0===o||o.currentTarget===o.target||n)t.x=e.offsetX,t.y=e.offsetY;else if(o.currentTarget.offsetLeft||o.currentTarget.offsetTop||!o.currentTarget.ownerSVGElement)t.x=o.currentTarget.offsetLeft+e.offsetX,t.y=o.currentTarget.offsetTop+e.offsetY;else{var r=Kt.Explorer?o.currentTarget.ownerSVGElement.getBBox():o.currentTarget.getBBox();t.x=Math.round(r.x),t.y=Math.round(r.y)}else if(Kt.Explorer)o instanceof MouseEvent?(t.x=o.x,t.y=o.y):(t.x=0,t.y=0);else{var a=null,l=e.target;o instanceof TouchEvent&&1===o.touches.length&&(l=document.elementFromPoint(o.touches[0].clientX,o.touches[0].clientY));var s=Kt.Features.Touch&&o instanceof TouchEvent?o.touches[0]:null,c=Qt(l),u={pageX:0,pageY:0};null!==s?(u.pageX=s.pageX,u.pageY=s.pageY):o instanceof MouseEvent&&(u.pageX=o.pageX,u.pageY=o.pageY),u.pageX||u.pageY||(u.pageX=e.pageX,u.pageY=e.pageY),e.target.raphael?a=c.parents("div:eq(0)").offset():(e.target.raphaelParent||0<c.parents("svg").length)&&(a=c.parents("svg").parents("div:eq(0)").offset()),a||(a=c.offset()),t.y=a?(t.x=u.pageX-a.left,u.pageY-a.top):(t.x=u.pageX,u.pageY)}return t}
/**
 * Gets the normalized offsetLeft and offsetTop from an SVG element
 * with respect to its parent jQuery object
 * @private
 * @param objSVG: object, svg object from the dom
 * @param parent: object, jQuery object representing the parent DOM node
 */function Q(e,t){var n={left:0,top:0};if(e instanceof HTMLElement)n.left=e.offsetLeft,n.top=e.offsetTop;else{var o=Qt(e).offset(),i=t.offset();o&&i&&(n.left=o.left-i.left,n.top=o.top-i.top)}return n}
/**
 * @private
 */
/**
 * @private
 */
function J(e,t,n,o,i){var r=Math.max(e,n),a=Math.min(e,n),l=Math.max(t,o),s=Math.min(t,o);return{x:r-a,y:l-s,dx:i?i.left-a:0,dy:i?i.top-s:0,left:a,right:r,top:s,bottom:l}}
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
 */function cn(t){return function(){for(;t.length;){var e=t.shift();e&&e.apply(this,arguments)}}}
/**
 * @private
 */function un(e){return{" transform":e,"-moz-transform":e,"-webkit-transform":e,"-o-transform":e,"-ms-transform":e}}
/**
 * @private
 */function _e(e,n){var o=this,i={x:0,y:0,width:0,height:0};return e&&e.length&&(n=n||Jt.matrix(),i.x=n.x(e[0].x,e[0].y),i.y=n.y(e[0].x,e[0].y),e.forEach(function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,o);var t={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};i.x=t.x<i.x?t.x:i.x,i.y=t.y<i.y?t.y:i.y,i.width=t.x>i.width?t.x:i.width,i.height=t.y>i.height?t.y:i.height}.bind(this)),i.width-=i.x,i.height-=i.y),i}
/**
 * @private
 */function Qe(e){if("string"==typeof e){var t=e.trim(),n=parseInt(t);if(/^([+|-]?[0-9]+)$/.test(t))return n}return"number"!=typeof e?null:e}
/**
 * @private 
 */function dn(e){return isFinite(e)&&!(e%1)}function qe(e){return!isNaN(e)&&isFinite(e)}var hn={instanceCounter:0};function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fn=function(){function e(e){S(this,"viewer",void 0),S(this,"currentThumb",void 0),this.viewer=e,this.currentThumb=null}var t=e.prototype;return t.isViewerActive=function(){return!(!this.viewer||!this.currentThumb)},t.isThumbnailerActive=function(e){return e&&!!this.currentThumb&&this.currentThumb.get()===e.get()},t.activateThumbnailer=function(e,t,n,o,i){var r=this.isThumbnailerActive(e);r&&!i||(this.currentThumb&&!r&&this.currentThumb.detachViewer(),this.currentThumb=e,this.viewer&&this.viewer.isInitialized()&&(this.viewer.switchDocument(t,n,o),this.currentThumb.activateViewer()))},t.closeDocument=function(e,t){e=e||this.currentThumb;var n=this.isThumbnailerActive(e);n&&(e.detachViewer(),this.currentThumb=null),this.viewer&&this.viewer.isInitialized()&&t&&this.viewer.closeDocument(t,n)},e}();function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pn=function(){function e(e){I(this,"jqe",Qt({})),I(this,"memoryEntries",[]),I(this,"config",{colorDepth:8,compression:1,highWaterMark:5e8,pageSize:{width:800,height:1132}}),I(this,"bytesInUse",0),e&&Qt.extend(this.config,e)}var t,n,o,i=e.prototype;return i.dispose=function(){this.clearEntries()},i.bind=function(){return this.jqe.on.apply(this.jqe,arguments),this},i.unbind=function(){return this.jqe.off.apply(this.jqe,arguments),this},i.trigger=function(e){return this.jqe.trigger.apply(this.jqe,arguments),this},i.allocate=function(e){return this.memoryEntries.push(e),this.bytesInUse+=this.calcBytes(e),this.bytesInUse>this.config.highWaterMark&&this.trigger("exceededhighwatermark"),this.bytesInUse},i.deallocateOldestEntry=function(){var e=this.memoryEntries.shift();return void 0!==e&&this.deallocate(e),e},i.clearEntries=function(){this.memoryEntries.length=0,this.bytesInUse=0},i.deallocate=function(e){return this.bytesInUse-=this.calcBytes(e),this.bytesInUse<0&&(this.bytesInUse=0),this.bytesInUse},i.calcBytes=function(e){return(e.width()||this.config.pageSize.width)*(e.height()||this.config.pageSize.height)*this.config.colorDepth/8*this.config.compression},t=e,(n=[{key:"typeOf",get:function(){return"Atalasoft.Document.MemoryTacker"}},{key:"colorDepth",set:function(e){this.config.colorDepth=e},get:function(){return this.config.colorDepth}},{key:"highWatermark",set:function(e){this.config.highWaterMark=e},get:function(){return this.config.highWaterMark}},{key:"pageSize",set:function(e){this.config.pageSize={width:e.width,height:e.height}},get:function(){return this.config.pageSize}}])&&F(t.prototype,n),o&&F(t,o),e}(),gn=[11,2,0,267],A=(n(57),n(111),n(114),n(115),n(58),n(61),function(o,e,t){var n=this,f=o,h=e,p=null,g=null,m=!1,v={" ":!0,"-":!0,"?":!0,"\n":!0,"\t":!0},i=t,r=null;function b(){var e,t;(t=document.body).currentStyle?e=t.currentStyle.direction:window.getComputedStyle&&(e=document.defaultView.getComputedStyle(t,null).getPropertyValue("direction")),"rtl"===e.toLowerCase()&&(m=!0),p=Qt("<canvas "+(m?'dir="rtl"':"")+"/>"),g=Qt('<span style="position:absolute; visibility:hidden; left: -5000px;">{[|,0123456789Thqkbfjplyg</span>'),Qt(i).append(g)}function a(e){p&&g||b(),h.applyTo(g),p[0].width=e.width,p[0].height=e.height;var t=p[0].getContext("2d"),n=function(e,t,n){var o=[];if("string"==typeof t){if(f.text.autoscale)return t.split("\n");for(var i=t,r=n,a=function(e){for(var t=[],n="",o=0,i=0;i<e.length;i++){var r=e[i];v[n]&&(t.push(e.substr(o,i-o)),o=i),n=r}return o<e.length&&t.push(e.substr(o,e.length-o)),t}(i),l="",s="",c=[],u=0;u<a.length;u++)if(l=s,s=a[u],e.measureText(s).width>r)for(var d=s.split(""),h=0;h<d.length;h++)c.push(d[h]),e.measureText(c.join("")).width>r&&(c.pop(),o.push(c.join("")),c.length=0,c.push(d[h]));else c.push(s),(e.measureText(c.join("").trim()).width>r||0<=l.indexOf("\n"))&&(c.pop(),o.push(c.join("")),c.length=0,c.push(s));0<c.length&&(o.push(c.join("")),c.length=0)}return o}(t,f.text.value,e.width),o=function(e){if(f.text.autoscale){var t=Math.max(0,f.height-2*f.outline.width);return 0<e?Math.floor(t/e):t}return h.applyTo(g,1),g[0].offsetHeight}(n.length),i=f.text.autoscale?o:f.text.font.size,r=[f.text.font.italic?"italic":"normal",f.text.font.bold?"bold":"normal",i+"px",f.text.font.family];t.font=r.join(" "),t.fillStyle=f.text.font.color,t.textBaseline="top";var a,l=0,s=n.length?n[0]:"";for(a=0;a<n.length;a++)n[a].length>s.length&&(s=n[a]);var c=t.measureText(s).width,u=m?c:0;if(f.text.autoscale&&"left"!==f.text.align)switch(f.text.align){case"center":t.textAlign=f.text.align,u=c/2;break;case"right":t.textAlign=f.text.align,u=m?0:c;break;default:t.textAlign="start",u=m?c:0}if(f.text.autoscale){var d=e.width/c;t.scale(d,1)}if(!f.text.autoscale)switch(f.text.align){case"center":t.textAlign=f.text.align,u=e.width/2;break;case"right":t.textAlign=f.text.align,u=e.width}for(a=0;a<n.length;a++)t.fillText(n[a],u,l,c),l+=o;return p[0].toDataURL()}n.dispose=function(){h=f=n=null,p&&p.remove&&(p.remove(),p=null),g&&g.remove&&(g.remove(),g=null),i=null},n.renderToDataURL=a,n.renderToSVGImage=function(e,t){var n=r;n&&n.width===t.width&&n.height===t.height&&n.text===o.text.value&&n.align===o.text.align||(r={width:t.width,height:t.height,text:o.text.value,align:o.text.align},e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a(t)))}}),O=(n(117),function(e,t){var n=this,o=t,i={bold:!1,italic:!1,strike:!1,underline:!1,color:"#000000",family:"Arial",size:12},r=1,a=1,l=1,s=Kt.Mobile.Any()?18:8;function c(e){e&&Qt.extend(i,e),u()}function u(e,t,n){(e=e||o)&&(t=void 0!==t?t:r,n||h(),d(e,t))}function d(e,t){var n="none";(i.strike||i.underline)&&(n=i.strike?"line-through ":"",n+=i.underline?"underline":""),e.css({color:i.color,"font-family":i.family,"font-style":i.italic?"italic":"normal","font-weight":i.bold?"bold":"normal","font-size":i.size*(t||1)+"pt","text-decoration":n})}function h(){var e=(document.width||window.outerWidth)/window.innerWidth;l!==e&&(l=e),r=i.size*a<s?s/l/i.size:a}c(e),n.dispose=function(){i=o=n=null},n.set=c,n.get=function(e){return e?i[e]:i},n.repaint=u,n.applyTo=d,n.getAdjustedZoom=function(){return h(),r},n.getUserZoom=function(){return h(),l},n.getZoom=function(){return a},n.setZoom=function(e){a=e,u()}}),R=function(_,w,e){var t=this,z=e,o=_.getEventObject(),P=null,r=null,D=null,a=null,T=_.get("text"),k=!1,C=3,E=Kt.Mobile.Any()?{width:200,height:200}:{width:1,height:1},i={},n={moving:s,resized:s,moved:s,rotated:s},M=function(){var e=_.get();r||(r=Qt('<textarea selectable="false"/>'),Qt(a.innerDom).append(r),r.css({"background-color":"transparent",border:"0px solid","overflow-x":"hidden","overflow-y":"hidden","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none",resize:"none",cursor:"inherit"}),r.attr("readonly","readonly"),r.on({focus:function(){return this.blur(),!1}}),r[0].raphaelParent=!0),r.val(T.value);var t=_.get("outline").width/2,n=Math.max(Math.ceil(e.width-2*(t+C)),1),o=Math.max(Math.ceil(e.height-2*(t+C)),1);if(D&&(D.set(T.font),D.repaint(r,1,!0)),r.css({width:n+"px",height:o+"px","max-width":n+"px","max-height":o+"px",padding:C+"px","text-align":T.align}),a.attr({x:Math.round(t+e.x),y:Math.round(t+e.y),width:e.width,height:e.height}),0<=e.cornerradius){var i=_.getObject();Qt(i[0]).attr({rx:e.cornerradius||0,ry:e.cornerradius||0})}a.transform(S().toTransformString(!0))};function l(){var e=_.get("outline").width/2,t=_.get(),n=Math.max(Math.ceil(t.width-2*(e+C)),0),o=Math.max(Math.ceil(t.height-2*(e+C)),0);if(D&&D.set(T.font),a.attr({x:Math.round(e+C+t.x),y:Math.round(e+C+t.y),width:n,height:o}),0<=t.cornerradius){var i=_.getObject();Qt(i[0]).attr({rx:t.cornerradius||0,ry:t.cornerradius||0})}a.renderer&&a.renderer.renderToSVGImage(a[0],{width:n,height:o}),a.transform(S().toTransformString(!0))}function S(){var e=Jt.matrix(),t=z.getViewerTransform(_._pageindex),n=_.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e}function s(){a&&p()}function F(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}function c(){if(null==D&&(D=new O(T.font)),a){var e=!0!==a.removed?a:null;o.unbind(e,{showeditor:u,hideeditor:h})}var t=k,n=T.autoscale;(a=n?w.atalaImage():w.html()).isHtml&&!n||(a.renderer=new A(_.get(),D,w._page),M=l),null!=P&&w._page&&(w._page.append(P),w._page.on(i)),Jt.vml&&(_.getObject().node.style.overflow="hidden"),a.transform(S().toTransformString(!0)),o.bind(a,{showeditor:u,hideeditor:h}),t&&u()}function u(){P||function(){P=Qt("<textarea/>").hide(),w._page&&(w._page.append(P),w._page.on(i)),P.on("change keydown mouseup mousemove mousedown",d),P.bind({blur:h}),_.bind({deselected:h});var e=_.getObject();if(P.css({position:"absolute","overflow-x":"auto","overflow-y":"auto","z-index":99999,border:"0px solid",padding:"0px","background-color":"transparent","text-align":T.align}),Kt.Mobile.Any()){var t=_.get(),n=Q(w.canvas,w._page);P.css({left:t.x+n.left+"px",top:t.y+n.top+"px",width:t.width+"px","max-width":t.width+"px",height:t.height+"px","max-height":t.height+"px",border:e.attr("stroke")+" "+e.attr("strokewidth")+"px","background-color":e.attr("fill")})}D.setZoom(_.getZoom()),(Kt.Chrome||Kt.Safari)&&P.css({resize:"none"}),null!=T.value&&P.val(T.value),T.readonly&&P.prop("readonly","readonly"),D.repaint(P)}(),_&&!_.get("visible")||(!P.is(":hidden")&&k||(a.hide(),P.prop("readonly",T.readonly?"readonly":""),P.show(),p()),Kt.Touch&&P.focus(function(){P[0].setSelectionRange(0,9999)}),P[0].focus(),k=!0)}function d(e){e.stopPropagation(),T.value!==P.val()&&(T.value=P.val(),_.set({text:T}))}function h(){P&&((P.is(":visible")||k)&&(P.hide(),a.show(),p()),(0===arguments.length||1===arguments.length&&"blur"===arguments[0].type)&&o.trigger("annotationtextchanged"),P[0].blur(),k=!1)}function f(){!_||_.get("visible")?k?u():a.show():a.hide(),a.backgroundColor&&a.backgroundColor(_.get("fill").color)}function I(e){e&&(w!==e||a.removed)&&(w=e,null!=r&&(r.remove(),r=null),c(),f())}function p(e){if(I(e),M(),P&&(!P.is(":hidden")||k)){var t=_.get("outline").width/2,n=_.get(),o=_.getZoom(),i=_.getBox(),r=S(),a=F(r,i.x,i.y),l=F(r,i.x+i.width,i.y+i.height),s=i.width*o,c=i.height*o,u=(a.x+l.x-s)/2,d=(a.y+l.y-c)/2,h=C*o,f=t*o,p=2*(h+f),g=Math.max(Math.ceil(s-p),E.width),m=Math.max(Math.ceil(c-p),E.height),v=Q(w.canvas,w._page),b=n.rotation+z.getPageRotation(_._pageindex),x=0!==b?"rotate("+b+"deg)":"",y={left:Math.round(u+v.left+f)+"px",top:Math.round(d+v.top+f)+"px",width:g+"px",height:m+"px","max-width":g+"px","max-height":m+"px",padding:Math.ceil(h)+"px"};Qt.extend(y,un(x)),P.css(y)}D&&(D.set(T.font),D.setZoom(_.getZoom()),D.repaint(P))}c(),p(),_.bind(n),t.dispose=function(){P&&P.remove(),r&&r.remove(),D&&D.dispose(),a&&a.remove(),w&&w._page&&w._page.off(i),_.unbind(n),T=a=r=D=P=o=t=null},t.set=function(e){e&&Qt.extend(T,e)},t.get=function(e){return e?T[e]:T},t.getFont=function(){return D},t.updateView=f,t.changepaper=I,t.repaint=p},V=function(){var e=this,t=Qt({}),o={drawing:!1,hold:null,pinching:!1,tapped:!1,touching:!1,delta:{x:0,y:0},origin:{x:0,y:0},point:{x:0,y:0},moves:0,e:null};function i(){t.trigger.apply(t,arguments)}function r(){i({type:"interactstart"})}function a(){i({type:"interactend"})}function l(e){if(o.e=e,r(),i(e),2===e.originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(!o||!o.raphael&&!o.raphaelParent)return!1;if(null===t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches))u(),o.touching=!1,(n=e).stopPropagation(),n.preventDefault(),o.pinching=!0,i({type:"pinchstart",touches:n.originalEvent.touches});else if(1===e.originalEvent.touches.length){i("selectchange"),o.touching=!0;var t=G(e);o.point.x=t.x,o.point.y=t.y,o.hold=setTimeout(c,1500)}var n}function s(){o.tapped=!1}function c(){if(0<o.moves&&null!==o.e){var e=G(o.e);Math.abs(o.point.x-e.x)<5&&Math.abs(o.point.y-e.y)<5&&(o.moves=0)}0===o.moves&&o.touching&&o.e&&(o.touching=!1,i({type:"contextmenu",x:o.e.originalEvent.touches[0].pageX,y:o.e.originalEvent.touches[0].pageY}))}function u(){null!==o.hold&&(clearTimeout(o.hold),o.hold=null)}e.events={click:function(e){i(e)},dblclick:function(e){i(e);var t=G(e);i({type:"showeditor",x:t.x,y:t.y})},mousedown:function(e){return r(),i(e),i({type:"selectchange",shiftKey:e.shiftKey,ctrlKey:e.ctrlKey}),3===e.which&&i({type:"contextmenu",x:e.pageX,y:e.pageY,event:e}),!1},mousemove:function(e){i(e)},mouseout:function(e){i(e)},mouseover:function(e){i(e)},mouseup:function(e){i(e),a()}},Kt.Features.Touch&&Qt.extend(!0,e.events,{touchstart:l,touchmove:function(e){var t;i(o.e=e),o.pinching?((t=e).stopPropagation(),t.preventDefault(),i({type:"pinchmove",touches:t.originalEvent.touches})):o.moves++},touchend:function(e){var t,n;i(o.e=e),o.pinching?((n=e).stopPropagation(),n.preventDefault(),o.pinching=!1,i({type:"pinchend",touches:n.originalEvent.touches}),1===n.originalEvent.touches.length&&l(n)):o.touching&&(o.touching=!1,u(),o.moves=0,o.tapped?(t=e,o.e=t,i({type:"showeditor",x:o.point.x,y:o.point.y})):(o.tapped=!0,setTimeout(s,300))),a()}}),e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=i},j=function(e){var n=Qt({}),t=e,o=null,r={target:null,mx:null,my:null,px:null,py:null,dx:null,dy:null};function a(e){r.px=r.mx,r.py=r.my,e.originalEvent?(r.mx=e.originalEvent.targetTouches[0].pageX,r.my=e.originalEvent.targetTouches[0].pageY):(r.mx=e.targetTouches[0].pageX,r.my=e.targetTouches[0].pageY),r.dx=r.mx-r.px,r.dy=r.my-r.py}function l(e){r.px=r.mx,r.py=r.my,r.mx=e.screenX,r.my=e.screenY,r.dx=r.mx-r.px,r.dy=r.my-r.py}function s(){n.trigger.apply(n,arguments)}function i(){s({type:"interactstart",target:t})}function c(){s({type:"interactend",target:t})}function u(e,t,n,o,i){(e||t)&&(Kt.Features.Touch&&i.target!==r.target||(null===r.px&&d(0,0,i),i.touches?a(i):l(i),s({type:"dragmove",dx:r.dx,dy:r.dy,mx:r.mx,my:r.my,originalEvent:i})))}function d(e,t,n){r.target=n.target,i(),n.touches?a(n):l(n),s({type:"dragstart",mx:r.mx,my:r.my,originalEvent:n})}function h(e){Kt.Features.Touch&&e.target!==r.target||(r.target=null,r.px=null,r.py=null,r.mx=null,r.my=null,s({type:"dragend",originalEvent:e}))}function f(){s("hoverin")}function p(){s("hoverout")}function g(e){s(e)}function m(e){s(e)}function v(e){r.px=null,r.py=null,s(e)}function b(e){s(e)}function x(e){s(e)}function y(e){s(e)}function _(e){s(e)}function w(e){s(e)}function z(e){s(e),1===e.which?s("mousedownleft"):3===e.which&&s("mousedownright")}function P(e){s(e)}function D(e){s(e)}function T(e){s(e)}function k(e){s(e),3===e.which&&s("rightclick")}function C(e){s(e)}function E(e){s(e)}function M(e){s(e)}(o=new V).bind({click:_,dblclick:w,mousedown:z,mousemove:P,mouseover:T,mouseout:D,mouseup:k,touchmove:C,touchstart:M,interactstart:i,interactend:c,pinchstart:g,pinchmove:m,pinchend:v,selectchange:b,contextmenu:x,showeditor:y,annoresized:E}),this.bind=function(e){var t=arguments;!e||e.constructor.prototype!==Jt.el&&e.constructor.prototype!==Jt.st||(e.drag(u,d,h),e.hover(f,p),"set"!==e.type?Qt(e[0]).on(o.events):e.forEach(function(e){Qt(e[0]).on(o.events)}),t=Array.prototype.slice.call(t,1)),0<t.length&&n.on.apply(n,t)},this.unbind=function(e){var t=arguments;!e||e.constructor.prototype!==Jt.el&&e.constructor.prototype!==Jt.st?null===e&&1<t.length&&(t=Array.prototype.slice.call(t,1)):(e.undrag(),e.unhover(f,p),"set"!==e.type?Qt(e[0]).off(o.events):e.forEach(function(e){Qt(e[0]).off(o.events)}),t=Array.prototype.slice.call(t,1)),n.off.apply(n,t)},this.trigger=s},B=function(e,t){var n=this,o=e,i=null,r=null,a=t;function l(){return a.trigger.apply(a,arguments),n}function s(e){return e.image()}function c(e){o.customurl?e.attr("src",o.customurl):l("serverrenderurlrequested",{data:o,complete:u})}function u(e){e.customurl=e}return n.dispose=function(){r=i=o=n=null},n.bind=function(){return a.on.apply(a,arguments),n},n.unbind=function(){return a.off.apply(a,arguments),n},n.trigger=l,n.construct=function(e){return i(e,o)},n.render=function(e){r(e,o)},i=o.constructor?o.constructor:s,r=o.renderer?o.renderer:c,n},N=function(e,t,n,o,i){var r=this,u=e,a=t,l=n,d=null,s=null,c=i,h=o,f=null,p=null,g=null,m=null,v=function(){},b=function(){};function x(e){var t=G(e);if(d.paper){var n=Q(d.paper.canvas,d.paper._page);t.x-=n.left,t.y-=n.top}return t}function y(e){var t=a.getViewerTransform(h._pageindex).invert(),n=t.x(e.x,e.y);return e.y=t.y(e.x,e.y),e.x=n,e}function _(){l.trigger.apply(l,arguments)}function w(e,t,n){d=t,s=n,e.stopPropagation(),e.preventDefault();var o=y(x(e));u.visible=!0,p={x:o.x,y:o.y},u.x=Math.round(o.x),u.y=Math.round(o.y),u.width=1,u.height=1,b="path"===d.type&&"custom"!==u.type?"ellipse"!==u.type?(u.points=[{x:u.x,y:u.y}],"lines"!==u.type&&"polygon"!==u.type||u.points.push({x:u.x,y:u.y}),u.x=0,u.y=0,v=D,F):(v=T,S):(v=T,M),C(),(f={events:Kt.Features.Touch?{touchend:k,touchmove:P,mouseup:k,mousemove:P}:{mouseup:k,mousemove:P},src:Qt(e.srcElement||e.target),main:Qt(e.currentTarget)}).src.on(f.events),f.main.on({mouseup:k})}function z(){f&&(f.src.off(f.events),f.main.off({mouseup:k}))}function P(e){e.stopPropagation(),v(e),C()}function D(e){var t=y(x(e));switch(u.type){case"line":u.points[1]=t;break;case"freehand":u.points.push(t);break;case"lines":case"polygon":u.points[u.points.length-1]=t}"path"===d.type&&("ellipse"===u.type?A():O(),d._&&0===d._.dirty&&(d._.dirty=1))}function T(e){var t=y(x(e)),n=p.x,o=p.y,i=Math.max(Math.abs(t.x-p.x),1),r=Math.max(Math.abs(t.y-p.y),1);0<u.aspectratio&&(Math.abs((t.y-p.y)/(t.x-p.x))>1/u.aspectratio?i=Math.round(r/u.aspectratio):r=Math.round(i/u.aspectratio)),t.x<p.x&&(n=p.x-i),t.y<p.y&&(o=p.y-r),u.x=n,u.y=o,u.width=i,u.height=r}function k(e){e.stopPropagation();var t=!1;if("lines"===u.type||"polygon"===u.type){if(a.activepage._index!==h._pageindex)return;if(u.points.push(y(x(e))),2!==e.button)return}else u.points?u.points&&u.points.length<2&&"custom"!==u.type&&(t=!0):(u.width<4&&u.height<4&&(u.width=100,u.height=100),C());z(),f=null,_(t?"cancelled":"drawn")}function C(){b(),d&&d.transform(E()),s&&s.repaint()}function E(){var e=Jt.matrix(),t=a.getViewerTransform(h._pageindex),n=h.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e.toTransformString()}function M(){d.attr({x:u.x,y:u.y,width:u.width,height:u.height}),c&&c.render(d,u),Kt.Features.VML&&d.transform(E())}function S(){A(),d._&&0===d._.dirty&&(d._.dirty=1)}function F(){O(),d._&&0===d._.dirty&&(d._.dirty=1)}r.events={drawstart:w,drawmove:P,drawend:k,dragstart:function(e){if(!a.readonly){e.originalEvent.stopPropagation();var t=h.getBox();p={x:t.x,y:t.y}}},dragmove:function(e){if(!a.readonly){e.originalEvent.stopPropagation();var t=y({x:0,y:0}),n=y({x:e.dx,y:e.dy});h.translate(n.x-t.x,n.y-t.y),_("moving")}},dragend:function(e){if(!a.readonly){e.originalEvent.stopPropagation();var t,n,o=h.getBox();if(d.paper&&d.paper._page){var i=d.getBBox(),r={x:0,y:0,width:d.paper._page.width(),height:d.paper._page.height()};if(!(H(t=r,(n=i).x,n.y)||H(t,n.x+n.width,n.y)||H(t,n.x,n.y+n.height)||H(t,n.x+n.width,n.y+n.height)))return void h.translate(p.x-o.x,p.y-o.y)}p.x===o.x&&p.y===o.y||_("moved")}},update:function(){C()},viewchanged:function(e){d=e.annview,s=e.textview,b="path"===d.type&&"custom"!==u.type?"ellipse"!==u.type?(v=D,F):(v=T,S):(v=T,M)},pinchstart:function(e){if(!u.points&&!a.readonly){var t=y({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=y({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=h.getBox();m={start:J(t.x,t.y,n.x,n.y),rect:o}}},pinchmove:function(e){if(m){var t=y({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=y({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=J(t.x,t.y,n.x,n.y,m.start),i=o.x-m.start.x,r=o.y-m.start.y,a=m.rect.x-o.dx,l=m.rect.y-o.dy,s=m.rect.width+i,c=m.rect.height+r;u.points?h.transform(a,l,s,c):(u.x=a,u.y=l,u.width=s,u.height=c),d.paper&&d.paper._page&&d.paper._page._grips&&d.paper._page._grips.repaint(),C()}},pinchend:function(){_("resized"),_("annoresized"),m=null}},r.drawStart=w,r.unbindEvents=z,r.repaint=C,r.getTransform=E;var I=.5522847498307936;function A(){var e=u.width/2,t=u.height/2,n=I*e,o=I*t,i=u.x+u.width/2,r=u.y+u.height/2,a=["M",i,r-t,"C",i+n,r-t,i+e,r-o,i+e,r,"C",i+e,r+o,i+n,r+t,i,r+t,"C",i-n,r+t,i-e,r+o,i-e,r,"C",i-e,r-o,i-n,r-t,i,r-t,"Z"];d.attr({path:a})}function O(){if(u.points&&0!==u.points.length){for(var e=["M",u.points[0].x,u.points[0].y],t=1;t<u.points.length;t++)e=e.concat(["L",u.points[t].x,u.points[t].y]);"polygon"===u.type&&e.push("Z"),d.attr({path:e}),
/**
   * Work around outlined by this post:
   * http://stackoverflow.com/questions/15693178/svg-line-markers-not-updating-when-line-moves-in-ie10
   */
function(){if(Kt.Explorer){var e=parseInt(Kt.Version,10);10<=e&&e<12&&d.node&&d.node.parentNode&&d.node.parentNode.insertBefore(d.node,d.node)}}()}}r.commitTransform=function(){var e,t,n;Qt.extend(u,(e=g,t=a.getZoom(h._pageindex),{x:(n=e.split()).dx/t,y:n.dy/t,width:n.scalex/t,height:n.scaley/t})),d.transform(E()),C(),V=null},r.transformUI=function(e,t,n,o){g=Jt.matrix(n,0,0,o,e,t),V||(V=function(e,t){var n;if(e.points&&1<e.points.length){var o=h.getBox();(n=Jt.matrix(1,0,0,1,0,0)).scale(1/o.width,1/o.height,0,0),n.translate(-o.x,-o.y)}else(n=Jt.matrix(t,0,0,t,0,0)).translate(e.x,e.y),n.scale(e.width,e.height,0,0);return n}(u,1)),g.add(V.a,V.b,V.c,V.d,V.e,V.f),d.transform(g.toTransformString()),s&&s.repaint()};var V=null;function H(e,t,n){return t>=e.x&&t<=e.x+e.width&&n>=e.y&&n<=e.y+e.height}},we=function(e,t){var o=t,i=this,n=new j(i),r=null,a=null,l=null,s=null,c=null,u=null,d=null,h=null,f=e.multiview?e:{
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
transform:Jt.matrix(),
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
extra:{}},p={highlight:{readonly:!0,fill:{color:"yellow",opacity:.5},outline:{opacity:0}},image:{readonly:!0,fill:{color:null},outline:{opacity:0}},rectangle:{fill:{opacity:0}},stamp:{readonly:!0,cornerradius:0,text:{autoscale:!0}},line:{fill:{color:null},outline:{opacity:1,startcap:{width:"medium",height:"medium",style:"none"},endcap:{width:"medium",height:"medium",style:"none"}}},lines:{fill:{color:null},outline:{opacity:1}},freehand:{fill:{color:null},outline:{opacity:1}},ellipse:{},fillrect:{},polygon:{},text:{}},g={};function m(){n.bind.apply(n,arguments)}function v(){return n.trigger.apply(n,arguments),i}function b(){var e=Jt.matrix(),t=C();e.rotate(f.rotation,t.x,t.y),f.transform=e}function x(){var e,t,n=C(),o=(e=w(),t=n,{x:e.x(t.x,t.y),y:e.y(t.x,t.y)});o.x===n.x&&o.y===n.y||E(o.x-n.x,o.y-n.y)}function y(e,t){if(e){var n=f.rotation;e.hasOwnProperty("rotation")&&(e.rotation=(e.rotation+360)%360),_(e,t),n!==f.rotation&&function(e,t){var n=(e-t+360)%360,o=Jt.matrix(),i=w();o.add(i.a,i.b,i.c,i.d,i.e,i.f);var r=C();o.rotate(n,r.x+r.width/2,r.y+r.height/2);var a=o.x(r.x,r.y),l=o.y(r.x,r.y);E(a-r.x,l-r.y),b()}(f.rotation,n)}}function _(e,t){t?Qt.extend(!0,f,e):Qt.extend(f,e)}function w(){return f.transform}function z(){d={update:function(e){f.selected!==d.selected&&D();var t=!1;e||(t=function e(t,n,o){if(t!==n)return!!t;for(var i in t)if(t.hasOwnProperty(i)){if("extra"===i)continue;if(n.hasOwnProperty(i)){if("points"===i){if(t.points===n.points)return!t.points;if(t.points.length!==n.points.length)return!0;for(var r=0;r<t.points.length;r++)if(e(t.points[r],n.points[r],[]))return!0}if(-1<o.indexOf(i)){if(e(t[i],n[i],L[i]))return!0}else if(t[i]!==n[i])return!0}}return!1}(d,f,["fill","outline","text"]),y(d,!0)),f.update&&delete f.update,f.getPageIndex&&delete f.getPageIndex,V(),O(),null!==r&&(f.selectable?(g.isBound("selectable")||(n.bind(g.selectable),g.bound("selectable")),f.movable&&!g.isBound("movable")?(n.bind(g.movable),g.bound("movable")):!f.movable&&g.isBound("movable")&&(n.unbind(g.movable),g.unbound("movable")),Kt.Features.Touch&&(f.resizable&&!g.isBound("resizable")?(n.bind(g.resizable),g.bound("resizable")):!f.resizable&&g.isBound("resizable")&&(n.unbind(g.resizable),g.unbound("resizable")))):!f.selectable&&g.isBound("selectable")&&(n.unbind(g.selectable),g.unbound("selectable"),n.unbind(g.movable),g.unbound("movable"),n.unbind(g.resizable),g.unbound("resizable"))),t&&v({type:"annotationchanged",ann:i})},getPageIndex:function(){return i._pageindex}},Qt.extend(!0,d,f)}function P(){return JSON.stringify(f)}function D(e){if(f){var t={ann:i,append:!0,page:null,pageindex:i._pageindex,type:""};e&&(t.append=e.shiftKey||e.ctrlKey||void 0!==e.append&&e.append,t.page=e.page,t.pageindex=e.pageindex),t.append||!f.selected?(f.selected=!f.selected,t.type=f.selected?"selected":"deselected"):f.selected&&!t.append&&(t.type="reselected"),""!==t.type&&v(t)}}function T(e){var t=null;switch(f.type){case"image":(t=e.image()).attr("src",f.src);break;case"highlight":case"rectangle":case"fillrect":case"text":case"stamp":t=e.rect();break;case"ellipse":case"line":case"lines":case"freehand":case"polygon":t=e.path();break;case"custom":t=u.construct(e)}return e._annos&&e._annos.push(t),t}function k(){null!==r&&(a?n.unbind(a,r):n.unbind(r));var e={};f.selectable&&(Qt.extend(e,g.selectable),g.bound("selectable"),!o.readonly&&f.movable&&(Qt.extend(e,g.movable),g.bound("movable")),!o.readonly&&f.resizable&&Kt.Features.Touch&&(Qt.extend(e,g.resizable),g.bound("resizable"))),r=e,n.bind(a,e)}
/**
   * Returns bounding box of the annotation in document space.
   */
function C(){!h&&f.points&&(h=_e(f.points));var e=f.points?h:f;return{x:e.x,y:e.y,width:e.width,height:e.height}}function E(e,t){if(f.points){for(var n=0;n<f.points.length;n++)f.points[n].x+=e,f.points[n].y+=t;h&&(h.x+=e,h.y+=t)}"custom"!==f.type&&f.points||(f.x+=e,f.y+=t),b(),I()}e.multiview||(M=e.type,Qt.extend(!0,f,p[M])),_(e,!0),b(),"custom"===f.type&&(u=new B(f,n)),m({repaint:(c=new N(f,o,n,i,u)).events.update,viewchanged:c.events.viewchanged,drawn:k,resized:x}),f.points&&(0<f.x||0<f.y)&&(E(f.x,f.y),f.x=0,f.y=0,f.width=1,f.height=1),g={selectable:{selectchange:D},movable:{dragstart:c.events.dragstart,dragmove:c.events.dragmove,dragend:c.events.dragend},resizable:{pinchstart:c.events.pinchstart,pinchmove:c.events.pinchmove,pinchend:c.events.pinchend},boundEvents:{resizable:!1,movable:!1,selectable:!1},isBound:function(e){return this.boundEvents[e]},bound:function(e){this.boundEvents[e]=!0},unbound:function(e){this.boundEvents[e]=!1}},i.dispose=function(){f.selected&&D(),n&&n.unbind(),a&&a.remove(),l&&l.dispose(),s&&s.remove(),c&&c.unbindEvents(),f=s=l=a=n=i=o=c=null},i.bind=m,i.unbind=function(){n.unbind.apply(n,arguments)},i.trigger=v,i.set=y,i.get=function(e){return e?f[e]:f},i.getTransform=w,i.getClonedData=function(){return d?Qt.extend(!0,d,f):z(),delete d.transform,d},i.getObject=function(){return a},i.getEventObject=function(){return n},i.getZoom=function(){return o.getZoom(i._pageindex)},i.stringify=P,i.getJSON=P,i.toggleSelected=D,i.isCloneSource=function(e){return d&&d===e},i.getBox=C,i.translate=E,i.transform=function(e,t,n,o){var i=C(),r=n/i.width,a=o/i.height;if(f.points&&0<f.points.length&&"custom"!==f.type){for(var l=0;l<f.points.length;l++)f.points[l].x=e+(f.points[l].x-i.x)*r,f.points[l].y=t+(f.points[l].y-i.y)*a;h.x=e,h.y=t,h.width*=r,h.height*=a}else f.x=e,f.y=t,f.width*=r,f.height*=a;v({type:"annoresizing"}),I()},i.transformUI=function(){c.transformUI.apply(c,arguments)};var M;var S=(i.commitTransform=function(){c.commitTransform()},!1),F=Kt.Explorer?20:5;function I(){S||(S=!0,setTimeout(A,F))}function A(){S=!1,O()}function O(e){e&&(s&&(s=null),a=T(e),u&&u.render(a,f),V(),k(),"text"!==f.type&&"stamp"!==f.type||null!==l||(l=new R(i,e,o)),l&&l.changepaper(e),v({type:"viewchanged",annview:a,textview:l})),v("repaint")}function V(){if(a){var e={fill:f.fill.color,"fill-opacity":f.fill.opacity};Qt.extend(e,(t={stroke:f.outline.color,"stroke-width":f.outline.width*o.getZoom(i._pageindex),"stroke-opacity":f.outline.opacity},a._linewidth=f.outline.width,Jt.fn.addArrow||(f.outline.startcap&&(t["arrow-start"]=H(f.outline.startcap)),f.outline.endcap&&(t["arrow-end"]=H(f.outline.endcap))),t)),a.attr(e),Jt.fn.addArrow&&(f.outline.startcap&&Jt.fn.addArrow(a,H(f.outline.startcap),!1),f.outline.endcap&&Jt.fn.addArrow(a,H(f.outline.endcap),!0)),f.visible?a.show():a.hide()}var t;l&&(l.set(f.text),l.updateView()),a&&a.node&&""!==f.src&&"image"===f.type&&(void 0!==a.node.src&&a.node.src?a.node.src=f.src:a.node.href.baseVal=f.src)}function H(e){return[e.style,"-",e.width,"-",e.height].join("")}i.startDraw=function(e,t,n){y(n),(a=T(t)).transform(c.getTransform()),("text"===f.type||"stamp"===f.type)&&(l=new R(i,t,o)),V(),c.drawStart(e,a,l)},i.repaint=O,i.updateView=V;var L={fill:[],outline:["startcap","endcap"],text:["font"],font:[],startcap:[],endcap:[]};return i},ze=function(e,t){var n=this,o=e,i=t,c=[];function r(e,t,n,o){var i,r,a=[].concat(t),l=null;(l=u(n))===n&&null!==l&&(n=l._index),o||d(l||n);for(var s=0;s<a.length;s++)i=a[s],0<=(r=Qt.inArray(i,c[n]))?e||c[n][r]!==i||c[n].splice(r,1):e&&(c[n]?c[n].push(i):c[n]=[i]),l&&(e?l._grips.push(i):l._grips.remove(i)),i.get("selected")!==e&&i.toggleSelected({append:!0,pageindex:n,page:l})}function a(e,t){var n="object"==typeof t?t._index:t;o[n]&&r(e,o[n],t,!0)}function l(e){for(var t=[],n=0;n<e.length;n++)if(e[n]){t[n]=[];for(var o=0;o<e[n].length;o++)t[n][o]=e[n][o].getClonedData()}return t}function u(t){var e=null;if("object"==typeof t)e=t;else{t=Math.max(t,0);var n=Qt.grep(i,function(e){return e._index===t});1<=n.length&&(e=n[0])}return e}function s(e){a(!0,e)}function d(e){a(!1,e);var t=u(e);t&&t._grips&&t._grips.repaint()}n.dispose=function(){i=o=n=null,c.length=0},n.select=function(e,t,n){r(!0,e,t,n)},n.deselect=function(e,t,n){r(!1,e,t,n)},n.setAnnos=function(e){o=e},n.setPages=function(e){i=e},n.resolvePage=u,n.deselectAll=function(){for(var e=0;e<o.length;e++)d(e)},n.deselectPage=d,n.getAnnotations=
/**
   * Gets an array of all annotation data objects.
   * @returns array of arrays containing annotation data objects for each page of the document.
   */
function(){return l(o)},n.getSelected=function(){return l(c)},n.selectAll=function(){for(var e=0;e<o.length;e++)s(e)},n.selectPage=s};var Pe=function(e){var t=this,c=Qt("<div />"),u=Qt("<div />"),d=null,o=null,n={style:["None:none","Arrow:open","Filled Arrow:block","Filled Ellipse:oval","Filled Diamond:diamond"],width:["medium","wide","narrow"],height:["medium","long","short"]},i={fill:{color:!0,opacity:!0},rotation:!0,outline:{color:!0,opacity:!0,width:!0,startcap:n,endcap:n},text:{font:{bold:!0,italic:!0,color:!0,family:!0,size:!0}}};function r(){c.dialog("close")}function a(){l(),r()}function l(){d.set(o,!0),d.updateView(),d.repaint(),u.empty(),h(d.get(),"",i),g()}function h(n,e,t){function o(e){if(this.value&&"boolean"!=typeof this.value)if("number"==typeof n[this.title]){var t=parseFloat(this.value);isNaN(t)||"rotation"!==this.title||t===n[this.title]?"opacity"===this.title&&0<=t&&t<=1||"opacity"!==this.title&&0<=this.value?n[this.title]=t:this.value=n[this.title]:(d.set({rotation:t}),d.repaint())}else n[this.title]=this.value;else e&&"boolean"==typeof this.value?n[this.title]=0<=e.target.id.indexOf("true"):this.value=n[this.title];d.updateView(),d.repaint(),g()}for(var i in n)if(n.hasOwnProperty(i))if("object"==typeof n[i]){var r="text"!==i?p(i):"";t[i]&&("text"!==i||"text"===i&&"text"===d.get("type"))&&h(n[i],(e?e+" ":e)+r,t[i])}else if("type"===i)c.dialog("option","title",p(n[i].replace("fillrect","rectangle"))+" Annotation Properties");else if(t[i]){var a=Qt("<div/>"),l=f(i,n[i],o,t[i]);a.addClass("ui-helper-clearfix atala-ui-dialog-clearfix"),a.css({overflow:"hidden"}),l.appendTo(a),a.append((s=(e?e+" ":e)+p(i)+":",Qt("<span/>").text(s))),a.appendTo(u)}var s}function f(e,t,n,o){var i=typeof t,r=null;if(Qt.isArray(o))r=Qt("<select/>").attr({title:e}),Qt.each(o,function(e,t){var n=t,o=t,i=t.split(":");1<i.length&&(o=i[0],n=i[1]),r.append(Qt("<option/>",{value:n,text:o}))}),r.change(n),r.val(t);else if("string"===i||"number"===i)(r=Qt("<input/>").attr({type:"text",title:e})).val(t),r.change(n),r.focus(function(){this.select(),this._focused=!0}),r.mouseup(function(e){this._focused&&(e.preventDefault(),this._focused=!1)});else if("boolean"===i){var a="bool"+e;s(r=Qt("<div/>").attr({title:e}),a+!0,a,"True",t),s(r,a+!1,a,"False",!t),r.controlgroup(),r.change(n),r[0].value=t}else r=Qt("<div>"+t+"</div>");return r.css({float:"right"}),r}function s(e,t,n,o,i){e.append(Qt("<input/>").attr({type:"radio",id:t,name:n,checked:i})),e.append(Qt("<label/>").attr({for:t}).text(o))}function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(){var e=d.getObject();e&&e.paper&&e.paper._page&&e.paper._page._grips.repaint()}return t.show=function(e){for(var t in d=e,u.empty(),o={},i)if(i.hasOwnProperty(t)){var n={};n[t]=d.get(t),Qt.extend(!0,o,n)}h(d.get(),"",i),c.dialog("open")},t.hide=r,t.isVisible=function(){return c.dialog("isOpen")},t.cancel=a,t.reset=l,u.appendTo(c),c.dialog({appendTo:e,minWidth:320,classes:{"ui-dialog":"atala-ui"},resizable:!1,autoOpen:!1,buttons:{Ok:r,Reset:l,Cancel:a}}),t},De=function(l,e){var u,d=8,s=25,r=-22.5,c={e:0,ne:315,n:270,nw:225,w:180,sw:135,s:90,se:45},a={},h={},f=e,p=l._paper.set(),g=l._paper.set(),m=[],v=null,b={},x=null,y={x:0,y:0,width:1,height:1,x2:1,y2:1},t={dragstart:function(){},dragmove:function(){p.hide()},moved:function(){w(),p.show();for(var e=0;e<m.length;++e){var t=m[e].get();t.hasOwnProperty("rotatable")&&!t.rotatable&&v.hide()}}};function _(e,t){return e.attr({fill:"#FFFFE1",cursor:(t||"ne")+"-resize"}),e.grip=!0,e.rect=e.getBBox(),e.hide(),e.center=function(e,t,n,o){var i=d/(n=n||1),r=d/n,a=i/2,l=Math.round(i/2)+.5,s=Math.round(r/2)+.5;Kt.Explorer&&(s-=.5);var c=Math.round(e)-l,u=Math.round(t)-s;this.ellipse?(c+=a,this.attr({cx:c,cy:u,r:a,"stroke-width":1})):this.attr({x:c,y:u,width:i,height:r,"stroke-width":1}),this.node.setAttribute("stroke-width",1),this.transform(o)},t&&(e.d={key:t,n:~t.indexOf("n"),s:~t.indexOf("s"),w:~t.indexOf("w"),e:~t.indexOf("e")},e.mousedown(function(e){return function(e,t){if(e.stopPropagation(),!(1<m.length)){for(var n=0;n<m.length;n++)if(!m[n].get("resizable"))return;return Qt.extend(b,y),x=c[t.key]===c.n||c[t.key]===c.s?1:0,u=c[t.key]===c.w||c[t.key]===c.e?1:0,(t.n||1===u)&&(b.y=b.y2),t.w&&(b.x=b.x2),Qt(l._paper.canvas).on({mouseup:M,mousemove:E}),!1}}(e,this.d)})),e}function n(e){return-1!==Qt.inArray(e,m)}function o(){for(var e=0;e<m.length;e++)i(m[e]);m.length=0,g.clear(),p.hide()}function i(e){e.getEventObject().unbind(t)}function w(){0<g.length?P():0<m.length?o():p.hide()}function z(e){for(var t in c)c.hasOwnProperty(t)&&S(p[c[t]],e)}function P(){if(0<g.length){var e=1===g.length?m[0].getBox():g.getBBox();y.x=e.x,y.y=e.y,y.width=e.width,y.height=e.height,y.x2=e.x+e.width,y.y2=e.y+e.height,y.xmid=e.x+e.width/2,y.ymid=e.y+e.height/2,D()}}function D(){var e=1===g.length,t=Jt.matrix(),n=1,o="",i=f.getViewerTransform(l._index);if(t.add(i.a,i.b,i.c,i.d,i.e,i.f),e){var r=m[0].getTransform();r&&t.add(r.a,r.b,r.c,r.d,r.e,r.f),n=f.getZoom(l._index),o=t.toTransformString(!0)}p[c.nw].center(y.x,y.y,n,o),p[c.ne].center(y.x2,y.y,n,o),p[c.sw].center(y.x,y.y2,n,o),p[c.se].center(y.x2,y.y2,n,o),p[c.n].center(y.xmid,y.y,n,o),p[c.w].center(y.x,y.ymid,n,o),p[c.e].center(y.x2,y.ymid,n,o),p[c.s].center(y.xmid,y.y2,n,o);var a=m[0].get();a.rotatable||!a.hasOwnProperty("rotatable")?(v.show(),v.center(y.xmid,y.y-s/n,n,o)):v.hide(),z((1===m.length?m[0].get().rotation:0)+f.getPageRotation(l._index))}function T(e){var t=l.offset(),n=Q(l._paper.canvas,l);return{x:e.pageX-(t.left+n.left),y:e.pageY-(t.top+n.top)}}function k(e){e.stopPropagation();var t,n,o,i=(t=T(e),n=f.getViewerTransform(l._index).invert(),o=n.x(t.x,t.y),t.y=n.y(t.x,t.y),t.x=o,t),r=180*Math.atan2(i.y-b.ymid,i.x-b.xmid)/Math.PI+90;return 1===m.length&&(m[0].set({rotation:r}),m[0].repaint()),l._grips.repaint(),!1}function C(e){return e.stopPropagation(),Qt(l._paper.canvas).off({mouseup:C,mousemove:k}),1===m.length&&m[0].getEventObject().trigger("rotated"),!1}function E(e){if(e.stopPropagation(),1===g.length){var t=function(e){if(0<g.length){var t="set"===g[0].type?g[0][0]:g[0],n=t.matrix.invert(),o={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};return o}return e}(T(e)),n=Math.abs(t.x-b.x),o=Math.abs(t.y-b.y),i=t.x<b.x?b.x-n:b.x,r=t.y<b.y?b.y-o:b.y;a=i,l=r,s=n,c=o,0===x&&(y.x=a,y.width=Math.max(s,1),y.x2=a+y.width,y.xmid=a+y.width/2),0===u&&(y.y=l,y.height=Math.max(c,1),y.y2=l+y.height,y.ymid=l+y.height/2),D(),function(){for(var e=0;e<m.length;e++)m[e].transform(y.x,y.y,y.width,y.height)}()}var a,l,s,c;return!1}function M(e){e.stopPropagation();for(var t=0;t<m.length;t++)m[t].getEventObject().trigger("resized"),m[t].getEventObject().trigger("annoresized"),m[t].repaint();return 0<g.length&&P(),Qt(l._paper.canvas).off({mouseup:M,mousemove:E}),!1}function S(e,t){if(e&&e.d&&e.d.key){var n=Jt.matrix();n.rotate(t);var o={x:n.x(a[e.d.key].x,a[e.d.key].y),y:n.y(a[e.d.key].x,a[e.d.key].y)};for(var i in h)if(h.hasOwnProperty(i)&&F(o,h[i].start,h[i].end)){e.attr({cursor:(h[i].dir||"ne")+"-resize"});break}}}function F(e,t,n){function o(e,t){return 0<-e.x*t.y+e.y*t.x}return!o(t,e)&&o(n,e)}!function(){var e,t;for(var n in c)if(c.hasOwnProperty(n)){var o=l._paper.rect(0,0,d,d),i=_(o,n);p.push(i),p[c[n]]=i,(e=Jt.matrix()).rotate(c[n]),a[n]={x:e.x(1,0),y:e.y(1,0)}}(t=_(l._paper.circle(0,0,d/2)).attr({fill:"#00FF40",cursor:"pointer"})).ellipse=!0,p.push(t),t.mousedown(function(e){return function(e){if(e.stopPropagation(),1===m.length&&1===g.length){for(var t=0;t<m.length;t++){var n=m[t].get();if(n.hasOwnProperty("rotatable")&&!n.rotatable)return}Qt.extend(b,y);var o=m[0].getTransform(),i=o.x(b.xmid,b.ymid);b.ymid=o.y(b.xmid,b.ymid),b.xmid=i,Qt(l._paper.canvas).on({mouseup:C,mousemove:k})}}(e)}),v=t,function(){var o=Jt.matrix();o.rotate(r,0,0);for(var e=function(e,t){var n={dir:t,start:{x:o.x(a[e].x,a[e].y),y:o.y(a[e].x,a[e].y)},end:{x:o.x(a[t].x,a[t].y),y:o.y(a[t].x,a[t].y)}};return n},t=["e","ne","n","nw","w","sw","s","se"],n=0;n<t.length-1;++n)0===n&&(h[t[n]]=e(t[t.length-1],t[n])),h[t[n+1]]=e(t[n],t[n+1])}()}(),this.push=function(e){n(e)||(m.push(e),g.push(e.getObject()),!0===e.get("selectable")&&e.getEventObject().bind(t),w(),p.toFront(),p.show())},this.contains=n,this.remove=function(e){for(var t=0;t<m.length;t++)m[t]===e&&m.splice(t,1);g.exclude(e.getObject()),i(e)},this.clear=o,this.repaint=w,this.updateCursor=z};function Te(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Annotations API.
 * @class
 * @inner
 * @name AnnotationController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var mn=function e(t,n,o){var i=this,l=t,b=n,r=new ze,a={
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
cancelDraw:ce,
/**
       * Setups the viewport to create an annotation
       * @param {AnnotationData} aConfig - Configuration for the annotation to draw
       * @param {NotificationCallback} [callback] - function to call when the annotation has finished drawing.
       * @param {NotificationCallback} [cancelled] - function to call when the annotation draw was canceled.
       * @instance
       * @function
       */
drawAnnotation:function(e,t,n){b._controllers.mouseTool.setTool($t.None,$t.None),ne(e,!0,function(){b._controllers.mouseTool.setTool($t.Pan,$t.None),"function"==typeof t&&t()},function(){b._controllers.mouseTool.setTool($t.Pan,$t.None),"function"==typeof n&&n()})},
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
createOnPage:U,
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
setImages:J,
/**
       * Sets the default annotation properties for stamp annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.stamps}.
       * @param {AnnotationData[]} aConfig - Default configurations stamp annotations.
       * @returns {Atalasoft.Controls.WebDocumentViewer}
       * @instance
       * @function
       */
setStamps:Q,
/**
       * Inserts a layer of annotations at the source URL and index into the given page index. Single layer of annotations corresponds to single document page.
       * @param {string} sourceUrl - Reserved for future use.
       * @param {AnnotationData[]} layer - The annotation layer data.
       * @param {number} index - Index the layer is to be inserted into.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
insertLayer:function(e,t,n,o){n=D(e,t,n),"function"==typeof o&&o(),l.trigger({type:_.layerinserted,srcurl:e,srcindex:t,index:n}),l.trigger(_.layerschanged)},
/**
       * Removes a layer(page annotation) of annotations. All other layers are shifted. This operation corresponds to removing page from the document.
       * @param {number} index - index of the layer to be removed.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
removeLayer:function(e,t){var n=T(e);"function"==typeof t&&t(),l.trigger({type:_.layerremoved,layer:n,index:e}),l.trigger(_.layerschanged)},
/**
       * Moves a layer of annotations from one page index to another.
       * @param {number} sourceIndex - index of the layer to be moved.
       * @param {number} destIndex - Destination zero based page index.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
moveLayer:function(e,t,n){t=k(e,t),"function"==typeof n&&n(),l.trigger({type:_.layermoved,srcindex:e,destindex:t}),l.trigger(_.layerschanged)},
/**
       * Scrolls viewer to the specified annotation.
       * @param {AnnotationData} anno - the annotation object to scroll to.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function 
       */
scrollTo:function(e,t){var n=this,o=function(){Te(this,n),"function"==typeof t&&t()}.bind(this),i=e.getPageIndex(),r=Y(e,i);if(r){var a=r.getZoom(),l=ye,s={x:0,y:0};if(e.type===l.line||e.type===l.lines||e.type===l.freehand){var c=e.points.map(function(e){return Te(this,n),e.x}.bind(this)),u=e.points.map(function(e){return Te(this,n),e.y}.bind(this));s.x=(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2,s.y=(Math.min.apply(Math,u)+Math.max.apply(Math,u))/2}else s.x=e.x+e.width/2,s.y=e.y+e.height/2;s.x*=a,s.y*=a,b.showPagePoint(i,s,nn.Center,!0,o)}else o()}},
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
createAnnotationOnPage:U,
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
setImages:J,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setStamps|annotations.setStamps} instead.
     */
setStamps:Q};if(e.__exposedApi=a.annotations,!t)return null;var s=n._config,c=n._pages,u=!1,d=null,h=null,f=null,p=null,g=null,x={annos:[],activepage:null,activeanno:null,readonly:!!o,zoom:l.getZoom(),getZoom:b.getPageScale,getViewerTransform:b.getViewerTransform,getPageRotation:b.getPageRotation},m={},v=!1,y=!1,_={click:"annotationclicked",dblclick:"annotationdoubleclicked",touchstart:"annotationtouchstart",interactend:"annotationtouchend",touchmove:"annotationtouchmove",pinchmove:"annotationpinchresize",rightclick:"annotationrightclicked",mousedown:"annotationmousedown",mousedownleft:"annotationmousedownleft",mousedownright:"annotationmousedownright",mousemove:"annotationmousemove",mouseout:"annotationmouseout",mouseup:"annotationmouseup",mouseover:"annotationmouseover",annocreate:"annotationcreated",annoload:"annotationloaded",moved:"annotationmoved",rotated:"annotationrotated",annoresized:"annotationresized",repaint:"annotationrepainted",layerinserted:"layerinserted",layerremoved:"layerremoved",layermoved:"layermoved",layerschanged:"layerschanged",annotationchanged:"annotationchanged",annotationtextchanged:"annotationtextchanged"};function w(){u=!0,x.readonly||(h=L(f),p=new Pe(n._config.parent),null!=s.annotations.defaults&&G(s.annotations.defaults),null!=s.annotations.stamps&&Q(s.annotations.stamps),null!=s.annotations.images&&J(s.annotations.images),null!=s.annotations.custom&&K(s.annotations.custom))}
/**
   * [Internal] Disposes memory intensive objects
   * @returns undefined
   */function z(e){g.translate(e.dx,e.dy)}function P(e){x.zoom=e.zoom}function D(e,t,n){if(e||"number"!=typeof t||(t=T(t)),t=t||[],null==n?n=x.annos.length:n<0&&(n=0),n>x.annos.length){var o=x.annos.length;x.annos[n]=t;for(var i=o;i<x.annos.length;++i)x.annos[i]||(x.annos[i]=[])}else x.annos.splice(n,0,t);return n}function T(e){return e<x.annos.length?x.annos.splice(e,1)[0]:null}function k(e,t){return D(null,T(e),t)}function C(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}function E(e){M(e.index,e.page)}function M(e,t){if(e<x.annos.length&&(S(t),x.annos[e]&&x.annos[e].length))for(var n,o=0;o<x.annos[e].length;o++)(n=x.annos[e][o])._pageindex=e,n.repaint(t._paper),n.get("selected")&&r.select(n,e,!0)}function S(e){e._grips.clear(),e._paper._annos.remove(),e._paper._annos.clear(),e._paper.forEach(function(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}),e._paper._trash.remove(),e._paper._trash.clear(),ce()}function F(e){x.activepage=e}function I(e){e.page._paper&&(S(e.page),e.page.append(e.page._paper.canvas))}function A(e){O(e.page)}function O(e){if(e&&0<=e._index&&x.annos[e._index]){for(var t=0;t<x.annos[e._index].length;t++)x.annos[e._index][t].repaint();e&&e._grips.repaint()}}function V(e){h&&(h.visible&&H(),h.remove());var t=Qt.extend(!0,{},f);if(l.trigger("contextmenu",[x.activeanno.getClonedData(),t]),Qt.isEmptyObject(t))h=null;else{for(var n in t)t.hasOwnProperty(n)&&(t[n]=R(t[n]));h=L(t)}!function(e){if(h){if(x.activeanno.get("readonly"))h.children(":contains(Properties)").off("click").children("a, div").css("color","#cdc9c9");else{var t=h.children(":contains(Properties)");void 0!==t.data("events")&&"click"in t.data("events")||t.on("click",B),t.children("a").css("color","#000000")}0===h.closest().length&&d.prepend(h);var n={x:e.x-6,y:e.y-6};h.css({left:n.x,top:n.y}),h.show(),h.visible=!0}}(e)}function H(){h&&(h.hide(),h.visible=!1)}function L(e){var t=b.createMenu(e);return t.css({position:"fixed","z-index":99999}),t.mouseleave(H),t.visible=!1,t}function R(e){return function(){return H(),e.call(this,x.activeanno.getClonedData())}}function j(){var e=x.activepage?x.activepage._index:0;if(x.annos[e]){var t=Qt.inArray(x.activeanno,x.annos[e]);-1!==t&&(x.activeanno=null,Z(t,e))}H()}function B(){H(),p.show(x.activeanno)}
/**
   * Clears the annotations and related data from all pages
   */
function N(){if(0<x.annos.length){if(x.annos.length=0,c)for(var e=0;e<c.length;e++)c[e]._grips.clear(),c[e]._paper.forEach(C),c[e]._paper._trash.remove(),c[e]._paper._trash.clear(),c[e]._paper._annos.remove(),c[e]._paper._annos.clear();l.trigger({type:"annotationscleared"})}}
/**
   * Creates an annotation on the desired page with the given annotation data.
   * @param aConfig: object, Key value pairs representing annotation data.
   * @param pgNum: number, The zero based index of the page the annotation should be created on.
   * @param callback: function, Function to be called when the operation has completed.
   * @returns object: Atalasoft.Annotations.Annotation.
   */function q(e,t,n){var o={};e.multiview?o=e:(e&&e.type&&m[e.type]&&Qt.extend(!0,o,m[e.type]),Qt.extend(!0,o,e));var i=new we(o,x);return i._pageindex=t,void 0===x.annos[t]&&(x.annos[t]=[]),x.annos[t].push(i),b.redrawPageFromIndex(t,!0),"function"==typeof n&&n(i),de(i),i}function U(e,t,n){var o=q(e,t,n).getClonedData();return l.trigger({type:_.annocreate,anno:o,annotation:o,page:t}),o}function W(e,t){Z(t,e)}
/**
   * Deletes an annotation on the given z-index and zero based page index.
   * @param annIndex: number, Zero based z-index of the annotation.
   * @param pgNum: number, Zero based page index the annotation is located on.
   */function Z(e,t){var n=x.annos[t].splice(e,1)[0];x.activepage&&x.activepage._paper&&x.activepage._paper._annos.exclude(n.getObject()),x.activeanno===n&&(x.activeanno=null),n.dispose(),x.activepage&&x.activepage._grips&&x.activepage._grips.repaint(),l.trigger({type:"annotationdeleted",page:t,index:e})}function X(e){var t=[];if(0===x.annos.length||void 0===x.annos[e])return t;for(var n=0;n<x.annos[e].length;n++)t[n]=x.annos[e][n].getClonedData();return t}function Y(e,t){if(isFinite(t)){if(t<x.annos.length)for(var n=0;n<x.annos[t].length;++n)if(x.annos[t][n].isCloneSource(e))return x.annos[t][n]}else for(var o=0;o<x.annos.length;++o){var i=Y(e,o);if(i)return i}return null}function G(e){s.annotations.defaults=e;for(var t=0;t<e.length;t++)"string"==typeof e[t].type&&(m[e[t].type]=e[t]);return l}function Q(e){s.annotations.stamps=e;for(var t=0;t<e.length;t++)xe(e[t]);if(u){var n={type:"button",id:b._id+"_toolbar_Button_Stamp",icon:"stamp",tooltip:"Draw Stamp",text:""},o=b.createDropDownButton(n);n.onclick=b.drawAnnotation,b.createDropDownMenu(o,n,e)}return l}function J(e){s.annotations.images=e;for(var t=0;t<e.length;t++)e[t].type="image";if(u){var n={type:"button",id:b._id+"_toolbar_Button_Image",icon:"image",tooltip:"Draw Image",text:""},o=b.createDropDownButton(n);n.onclick=b.drawAnnotation,b.createDropDownMenu(o,n,e)}return l}
/**
   * Sets the default annotation properties for initially created custom annotations.  This accepts the same input as the main config.
   * @param cConfig: array, An array of JSON objects representing custom annotation types.
   * @returns object: Atalasoft.Controls.WebDocumentViewer
   */function K(e){s.annotations.custom=e;for(var t=0;t<e.length;t++)e[t].type="custom";if(u){var n={type:"button",id:b._id+"_toolbar_Button_Custom",icon:"image",tooltip:"Draw Custom",text:""},o=b.createDropDownButton(n);n.onclick=b.drawAnnotation,b.createDropDownMenu(o,n,e)}return l}function $(e,t){if("text"===e.type&&e){var n=e.getPageIndex(),o=Y(e,n);t?e.visible&&(b.isPageInView(n)?ee(o,n):l.showPage(e.getPageIndex(),function(){ee(o,n)})):o.trigger("hideeditor")}}function ee(e,t){e&&(!1!==e.get("selectable")&&r.select(e,t,!1),e.trigger("showeditor"))}function te(e){F(e),r.deselectPage(e),H()}function ne(e,t,n,o){if(v)return null;var i=Qt.extend(!0,{},e);return e&&e.type&&m[e.type]&&(i=Qt.extend(!0,i,m[e.type]),t&&(i=Qt.extend(!0,i,e))),i.rotation=0,x.activeanno&&null===x.activeanno.getObject()&&se(),function(){if(!y){d.on("mousedown",ae),Kt.Features.Touch&&d.on("touchstart",ae);for(var e=0;e<c.length;e++)c[e]._draw.toFront();y=!0}}(),x.activeanno=new we(i,x),x.activeanno.bind({drawn:le,cancelled:se}),"function"==typeof n&&(oe=n),"function"==typeof o&&(ie=o),x.activeanno}r.setAnnos(x.annos),r.setPages(c),function(){var T,k,C,u=Jt.svg&&!Kt.Features.foreignObject;function r(e,t,n,o,i,r){var a=u||r?"image":"foreignObject",l=d(this,this,"http://www.w3.org/2000/svg",a,t,n,o,i),s=null;if(!u){s=document.createElementNS("http://www.w3.org/1999/xhtml","div");var c="http://www.w3.org/2000/xmlns/";s.setAttributeNS(c,"xmlns",c),s.innerHTML=e||"",l.node.appendChild(s),l.isHtml=!0}return l.innerDom=s,l}function d(e,t,n,o,i,r,a,l,s){var c=null===n?document.createElement(o):document.createElementNS(n,o);t.canvas&&t.canvas.appendChild&&t.canvas.appendChild(c);var u=new e.constructor.el.constructor(c,e);for(var d in u.attrs={x:i,y:r,width:a,height:l,r:s||0,rx:s||0,ry:s||0,fill:"none",stroke:"#000"},u.skew={},"g"===(u.type=o)&&(u.canvas=u.node),u.attrs)u.attrs.hasOwnProperty(d)&&void 0!==u.attrs[d]&&c.setAttribute(d,u.attrs[d]+"");return u}Jt.vml?Jt.fn.html=function(e,t,n,o,i){var r=d(this,this,null,"div",t,n,o,i),a=r.node;function l(e){var t=r.matrix.split();if(e.hasOwnProperty("x")&&void 0!==e.x&&e.hasOwnProperty("y")&&void 0!==e.y){var n={x:e.x*t.scalex,y:e.y*t.scaley};if(0!==t.rotate){var o=_e([{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x+e.width,y:e.y+e.height},{x:e.x,y:e.y+e.height}],r.matrix);n=o}a.style.left=Math.round(n.x)+"px",a.style.top=Math.round(n.y)+"px"}}return a.innerHTML=e||"",(r.innerDom=a).style.position="absolute",r.__tsfm=r.transform,r.transform=function(){this.__tsfm.apply(this,arguments),this.repaint(),l(this.attrs)},r.backgroundColor=function(e){a.style.backgroundColor=e,this.repaint()},r.repaint=function(){a.style.filter='progid:DXImageTransform.Microsoft.Chroma(color="'+a.style.backgroundColor+'"); '+this.matrix.toFilter()},r.__attr=r.attr,r.attr=function(e){this.__attr.apply(this,arguments),e&&(l(e),e.hasOwnProperty("width")&&(a.style.width=e.width+"px"),e.hasOwnProperty("height")&&(a.style.height=e.height+"px"))},r.isHtml=!0,r}:(Jt.fn.html=function(e,t,n,o,i){return r.call(this,e,t,n,o,i)},T={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},k={},C=function e(t,n){if(n)for(var o in"string"==typeof t&&(t=e(t)),n)n.hasOwnProperty(o)&&("xlink:"===o.substring(0,6)?t.setAttributeNS("http://www.w3.org/1999/xlink",o.substring(6),String(n[o])):t.setAttribute(o,String(n[o])));else(t=Jt._g.doc.createElementNS("http://www.w3.org/2000/svg",t)).style&&(t.style.webkitTapHighlightColor="rgba(0,0,0,0)");return t},Jt.fn.addArrow=function(e,t,n){if("path"===e.type){for(var o,i,r,a,l,s=String(t).toLowerCase().split("-"),c=e.paper,u=n?"end":"start",d=e.node,h=e.attrs,f=h["stroke-width"],p=s.length,g="classic",m=3,v=3,b=5;p--;)switch(s[p]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":g=s[p];break;case"wide":v=5;break;case"narrow":v=2;break;case"long":m=5;break;case"short":m=2}if(l="open"===g?(m+=2,v+=2,b+=2,r=1,a=n?4:1,{fill:"none",stroke:h.stroke}):(a=r=m/2,{fill:h.stroke,stroke:"none"}),e._.WDVarrows?n?(e._.WDVarrows.endPath&&k[e._.WDVarrows.endPath]--,e._.WDVarrows.endMarker&&k[e._.WDVarrows.endMarker]--):(e._.WDVarrows.startPath&&k[e._.WDVarrows.startPath]--,e._.WDVarrows.startMarker&&k[e._.WDVarrows.startMarker]--):e._.WDVarrows={},"none"!==g){var x=Math.random().toString(36).substring(7),y="dave-marker-"+g,_="dave-marker-"+u+g+m+v+x;Jt._g.doc.getElementById(y)?k[y]++:(c.defs.appendChild(C(C("path"),{"stroke-linecap":"round",d:T[g],id:y})),k[y]=1);var w,z=Jt._g.doc.getElementById(_);z?(k[_]++,w=z.getElementsByTagName("use")[0]):(z=C(C("marker"),{id:_,markerHeight:v,markerWidth:m,orient:"auto",refX:a,refY:v/2}),w=C(C("use"),{"xlink:href":"#"+y,transform:(n?"rotate(180 "+m/2+" "+v/2+") ":"")+"scale("+m/b+","+v/b+")","stroke-width":(1/((m/b+v/b)/2)).toFixed(4)}),z.appendChild(w),c.defs.appendChild(z),k[_]=1),C(w,l);var P=r*("diamond"!==g&&"oval"!==g);i=(i=n?(o=e._.WDVarrows.startdx*f||0,Jt.getTotalLength(h.path)-P*f):(o=P*f,Jt.getTotalLength(h.path)-(e._.WDVarrows.enddx*f||0)))<0?0:i,(l={})["marker-"+u]="url(#"+_+")",(i||o)&&(l.d=Jt.getSubpath(h.path,o,i)),C(d,l),e._.WDVarrows[u+"Path"]=y,e._.WDVarrows[u+"Marker"]=_,e._.WDVarrows[u+"dx"]=P,e._.WDVarrows[u+"Type"]=g,e._.WDVarrows[u+"String"]=t}else i=n?(o=e._.WDVarrows.startdx*f||0,Jt.getTotalLength(h.path)-o):(o=0,Jt.getTotalLength(h.path)-(e._.WDVarrows.enddx*f||0)),e._.WDVarrows[u+"Path"]&&C(d,{d:Jt.getSubpath(h.path,o,i)}),delete e._.WDVarrows[u+"Path"],delete e._.WDVarrows[u+"Marker"],delete e._.WDVarrows[u+"dx"],delete e._.WDVarrows[u+"Type"],delete e._.WDVarrows[u+"String"];for(l in k)if(k.hasOwnProperty(l)&&!k[l]){var D=Jt._g.doc.getElementById(l);D&&D.parentNode.removeChild(D)}}}),Jt.fn.atalaImage=function(e,t,n,o,i){return r.call(this,e,t,n,o,i,!0)}}(),g=Jt.matrix(1,0,0,1,0,0),l.bind({scroll:z,pagerecycled:I,pageshown:E,zoomchanged:P,pagerotated:A}),f={Delete:j,Properties:B},b._state.initialized?w():l.bind({initialized:w}),"Atalasoft.Controls.WebDocumentViewer"===l.typeOf&&Qt.extend(l,a),i.__exposedApi=a.annotations,i.addDrawingSurface=function(n){var e=this;if(n instanceof Qt){n._paper=Jt(n[0]),n._paper.canvas.style.position="absolute",n._paper.canvas.style.zIndex="2",0<s.pageborderwidth&&(n._paper.canvas.style.left=s.pageborderwidth+"px",n._paper.canvas.style.top=s.pageborderwidth+"px"),n._paper._annos=n._paper.set(),n._paper._trash=n._paper.set(),(n._paper._page=n)._matrix=Jt.matrix(1,0,0,1,0,0),n._matrix.translate(-n.offset().left,-n.offset().top),n._grips=new De(n,x);var t=function(){Te(this,e),te(n)}.bind(this);return n.on("mousedown",t),Kt.Features.Touch&&n.on("touchstart",t),n.on({pageresize:function(e){var t;e.page=n,(t=e).page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,O(t.page)},pagezoom:function(e){var t;e.page=n,t=e,isFinite(t.width)&&isFinite(t.height)&&t.width&&t.height&&(x.zoom=t.zoom,t.page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,t.page._paper.forEach(function(e){if(e&&e.transform&&!e.grip){void 0!==e._linewidth&&e.attr("stroke-width",e._linewidth*x.zoom);var t=e.attr("clip-rect");"object"==typeof t&&"number"==typeof t.length&&e.attr("clip-rect",t)}}),O(t.page))}}),!0}return!1},i.removeDrawingSurface=function(e){return e instanceof Qt&&(e._paper&&(e._paper._annos=null,e._paper._page=null,e._paper=null),e._matrix=null,!(e._grips=null))},i.insertLayer=D,i.removeLayer=T,i.moveLayer=k,i.showLayer=M,i.clear=N,i.createAnnotation=q,i.deleteAnnoOnPage=W,i.drawAnnotation=ne,i.getAnnosFromPage=X,i.setStamps=Q,i.setAnnotationDefaults=G,i.setImages=J,i.setCustom=K,i.dispose=function(){p=f=h=d=c=s=b=l=i=null,x.annos.length=0,x.activepage=null,x.activeanno=null,x.zoom=null,r.dispose(),r=null},
/**
   * [Internal] Gets debug info object
   * @returns debug info object if available, otherwise null
   */
i.__getDebugInfo=function(){var e={};return Qt.extend(!0,e,{data:x,defaults:m,drawing:v,drawready:y,matrix:g,menu:h,menuconfig:f,pages:c,props:p,viewport:d}),e}
/**
   * [Internal] Links the annotation data between two controls
   * @param linker internal object of type __LVlinker
   * @returns undefined
   */,i.__linkAnnotations=function(e){e&&(e._annos?Qt.isArray(e._annos)&&(x.annos=e._annos):e._annos=x.annos)}
/**
   * [Internal] Clears all selection of annotations
   */,i.__clearAllSelection=te,i.setViewPort=function(e){e&&(e instanceof Qt||(e=Qt(e)),d=e)};var oe=function(){},ie=function(){};function re(){if(y){d.off("mousedown",ae),Kt.Features.Touch&&d.off("touchstart",ae);for(var e=0;e<c.length;e++)c[e]._draw.reset();y=!1}}function ae(e){v=!0,d.off("mousedown",ae),Kt.Features.Touch&&d.off("touchstart",ae);var t=x.activeanno.getClonedData();l.trigger({type:"annotationdrawstart",annotation:t,ann:t}),x.activeanno._pageindex=x.activepage._index,x.activeanno.startDraw(e,x.activepage._paper,{})}function le(){ue(),function(e){var t=x.activepage,n=t?t._index:0;x.annos[n]?x.annos[n].push(e):x.annos[n]=[e],x.activeanno.unbind({drawn:le,cancelled:se}),de(x.activeanno),r.select(x.activeanno,t,!1),oe({annotation:e}),oe=function(){};var o=e.getClonedData();l.trigger({type:_.annocreate,anno:o,annotation:o,page:n})}(x.activeanno)}function se(){x.activeanno.dispose(),x.activeanno=null,v&&ue(!0)}function ce(){y&&(v?se():(x.activeanno&&(x.activeanno.dispose(),x.activeanno=null),re()),ie({annotation:null}),ie=function(){})}function ue(e){v=!1,re();var t=e?null:x.activeanno.getClonedData();l.trigger({type:"annotationdrawend",annotation:t,ann:t,cancelled:!!e})}function de(n){function e(e){var t=n.getClonedData();l.trigger({type:_[e.type],anno:t,annotation:t})}n.bind({dragstart:function(){var e=n.getClonedData();l.trigger({type:"annotationdragstart",ann:e,annotation:e})},dragend:function(){var e=n.getClonedData();l.trigger({type:"annotationdragend",annotation:e,ann:e})},interactstart:function(){x.activepage&&x.activepage._paper===n.getObject().paper||F(n.getObject().paper._page),x.activeanno=n},selected:he,deselected:he,reselected:he,contextmenu:V,serverrenderurlrequested:fe,moved:e,rotated:e,annoresized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mousemove:e,mouseout:e,mouseup:e,mouseover:e,repaint:e,annotationchanged:e,annotationtextchanged:e})}function he(e){var t=e.page||0<=e.pageindex?e.pageindex:x.activepage,n=r.resolvePage(t);n&&(t=n),"selected"===e.type||"reselected"===e.type?(x.activeanno=e.ann,r.select(e.ann,t,e.append),p&&p.isVisible()&&p.show(e.ann)):(r.deselect(e.ann,t,e.append),p&&p.isVisible()&&p.cancel()),n&&n._grips&&n._grips.repaint()}function fe(e){var t=e.complete,n=pe(e.data);"function"==typeof t&&t.call(n)}function pe(e){return ge(e),JSON.stringify(e)}function ge(e){for(var t in e)if("color"===t&&null!=e[t]){var n=Jt.getRGB(e[t]);n.error&&(n.hex="#000000"),e[t]=n.hex}else"points"!==t&&"object"==typeof e[t]&&ge(e[t])}function me(e,t,n,o,i){var r={type:"annodata",serverurl:e,query:"?atalaanndata=",method:"GET",data:{atala_annurl:t,atala_docurl:n=n||l.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{layers:[],offset:o||0,length:i,error:void 0}};for(var a in r.data)r.data.hasOwnProperty(a)&&null===r.data[a]&&(r.data[a]=void 0);return r}function ve(n,o,i){function e(e){if(void 0!==n.info.docIndex&&(e.offset=n.info.docIndex),!e.layers&&e.error&&o)for(var t=e.offset;t<e.offset+n.info.length;t++)x.annos[t]=[];be(e),"function"==typeof i&&i.call(void 0,e.error,e)}"function"==typeof o&&(i=o,o=!1),o||N(),b.makeHandlerRequest(n,e,e)}function be(e){if(e){var t={type:"annotationsloaded",customData:e.customData};if(e.layers)for(var n=0;n<e.layers.length;n++){e.offset=e.offset||0;var o=e.offset+n;x.annos[o]&&0<x.annos[o].length?x.annos[o].length=0:x.annos[o]=[];var i=e.layers[n];if(i&&(i._index=isFinite(i._index)&&0<=i._index?i._index:o,i.visible=void 0===i.visible||i.visible,i.items))for(var r=0;r<i.items.length;r++){i.items[r].visible=i.items[r].visible&&i.visible,x.annos[o][r]=new we(i.items[r],x),x.annos[o][r]._pageindex=i._index;var a=x.annos[o][r].getClonedData();l.trigger({type:_.annoload,anno:a,annotation:a,customData:e.customData}),de(x.annos[o][r])}}else e.error&&(t.error=e.error);t.offset=e.offset,t.length=e.layers?e.layers.length:0,l.trigger(t)}}function xe(e){var t;return e.type="stamp",e.text&&((t=e.text)&&t.font&&t.font.size&&(t.font.size=parseFloat(t.font.size)),e.text.readonly=!0),e}i.stringifyChanges=function(){var e=[];for(var t in x.annos)if(x.annos.hasOwnProperty(t)){e[t]={items:[]};var n=0,o=b.getPageScale(t),i=Jt.matrix();if(b._config.persistrotation){n=b.getPageRotation(t),i=b.getViewerTransform(t);var r=1/o;i.scale(r,r,0,0),i.e*=r,i.f*=r}for(var a in x.annos[t])if(x.annos[t].hasOwnProperty(a)){var l=Qt.extend(!0,{},x.annos[t][a].get());if(l.rotation||n){var s=x.annos[t][a].getBox(),c=s.width/2,u=s.height/2,d=Jt.matrix(),h=x.annos[t][a].getTransform();d.add(i.a,i.b,i.c,i.d,i.e,i.f),d.add(h.a,h.b,h.c,h.d,h.e,h.f);var f={x:d.x(s.x+c,s.y+u),y:d.y(s.x+c,s.y+u)},p=f.x-c-s.x,g=f.y-u-s.y;if(l.points)for(var m=0;m<l.points.length;m++)if("line"===l.type){var v=d.x(l.points[m].x,l.points[m].y);l.points[m].y=d.y(l.points[m].x,l.points[m].y),l.points[m].x=v}else l.points[m].x+=p,l.points[m].y+=g;else"custom"!==l.type&&l.points||(l.x+=p,l.y+=g);l.rotation="line"!==l.type?(l.rotation+n)%360:0}ge(e[t].items[a]=l)}}return JSON.stringify(e)},i.stringifyAnnotationData=pe,i.createHandlerRequest=me,i.makeHandlerRequest=ve,i.loadAnnotationsUrl=function(e,t,n,o,i,r,a){var l=Array.prototype.slice.call(arguments);"function"!=typeof(a=l.pop())&&l.push(a),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),r=l.shift();var s=me(e,t,n,o,i);void 0!==r&&(s.info.docIndex=r),ve(s,0<=o&&1<=i,a)},i.loadAnnotations=be};function H(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}var L,q,U=function(e,t,n){var o,f=t,u=this,i=Qt({}),r=null,p=null,a=null,g=n,b={type:"",backgroundcolor:"",color:null,fieldname:"",hidden:!1,isfieldrequired:!1,items:null,locked:!1,norotate:!1,noview:!1,nozoom:!1,readonly:!1,required:!1,x:0,y:0,width:0,height:0,rotation:0,border:{color:"#000",style:"none",radius:{vertical:0,horizontal:0},width:0},text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12,paddingtop:0,linespacing:0},ismultiline:!1,ispassword:!1,isrichtext:!1,scrollable:!1,maxlength:0,maximumfieldheight:-1,preserveoverflow:!1}},l={button:{},checkbox:{checked:!1,group:null},radio:{checked:!1,group:null},textbox:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},signature:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},choice:{multiline:!1}},s={};function c(){return i.trigger.apply(i,arguments),u}function d(e,t){e&&(t?Qt.extend(!0,b,e):Qt.extend(b,e))}function h(){a={update:function(){Qt.extend(!0,b,a),b.update&&delete b.update,k(),T(),null!==r&&(b.selectable?(s.isBound("selectable")||(i.on(s.selectable),s.bound("selectable")),b.movable&&!s.isBound("movable")?(i.on(s.movable),s.bound("movable")):!b.movable&&s.isBound("movable")&&(i.off(s.movable),s.unbound("movable")),Kt.Features.Touch&&(b.resizable&&!s.isBound("resizable")?(i.on(s.resizable),s.bound("resizable")):!b.resizable&&s.isBound("resizable")&&(i.off(s.resizable),s.unbound("resizable")))):!b.selectable&&s.isBound("selectable")&&(i.off(s.selectable),s.unbound("selectable"),i.off(s.movable),s.unbound("movable"),i.off(s.resizable),s.unbound("resizable")))}},Qt.extend(!0,a,b)}function m(){return JSON.stringify(b)}function v(e,t){return t-(e.value.slice(0,t).split("\r\n").length-1)}function x(e,t){if("number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd)e.selectionStart=t.start,e.selectionEnd=t.end;else{var n=e.createTextRange(),o=v(e,t.start);n.collapse(!0),t.start===t.end?n.move("character",o):(n.moveEnd("character",v(e,t.end)),n.moveStart("character",o)),n.select()}}function y(e){var t=null,v=!1;switch(b.type){case"button":(t=Qt("<button/>")).click(function(){return c({type:"buttonclicked",name:b.fieldname}),!1});break;case"textbox":case"signature":t=b.text.multiline?Qt('<textarea style="overflow-y:'+(b.text.scrollable?"auto":"hidden")+';resize:none"></textarea>'):Qt('<input type="text" />'),b.text.value=t.val(b.text.value).val(),t.on("paste",function(){return v=!0}),t.on("input",function(e){-1===b.text.maximumfieldheight&&(b.text.maximumfieldheight=Qt(this).get(0).scrollHeight);var t,n,o,i,r,a,l,s,c=0<b.text.maxlength&&Qt(this).val().length>b.text.maxlength,u=!b.text.scrollable&&Qt(this).get(0).scrollHeight>b.text.maximumfieldheight;if(Qt(this).val().length>b.text.value.length&&(c||u)){var d=(t=e.target,s=l=0,"number"==typeof t.selectionStart&&"number"==typeof t.selectionEnd?(l=t.selectionStart,s=t.selectionEnd):(o=document.selection.createRange())&&o.parentElement()===t&&(r=t.value.length,n=t.value.replace(/\r\n/g,"\n"),(i=t.createTextRange()).moveToBookmark(o.getBookmark()),(a=t.createTextRange()).collapse(!1),-1<i.compareEndPoints("StartToEnd",a)?l=s=r:(l=-i.moveStart("character",-r),l+=n.slice(0,l).split("\n").length-1,-1<i.compareEndPoints("EndToEnd",a)?s=r:(s=-i.moveEnd("character",-r),s+=n.slice(0,s).split("\n").length-1))),{start:l,end:s});if(v&&0<b.text.maxlength){var h=Qt(this).val();if(h.length===d.start)Qt(this).val(h.substr(0,b.text.maxlength));else{var f=h.length-b.text.value.length,p=b.text.maxlength-b.text.value.length,g=h.substr(0,d.start-f+p),m=b.text.value.substr(d.start-f);Qt(this).val(g+m),x(e.target,{start:g.length,end:g.length})}}else Qt(this).val(b.text.value),x(e.target,{start:d.start-1,end:d.start-1})}!b.text.preserveoverflow&&Qt(this).get(0).scrollHeight<b.text.maximumfieldheight&&(b.text.maximumfieldheight=Qt(this).get(0).scrollHeight),b.text.value=Qt(this).val(),v=!1});break;case"checkbox":(t=Qt('<input type="checkbox" />').prop({name:b.group,checked:b.checked})).val(b.value);break;case"radio":(t=Qt('<input type="radio" />').prop({name:b.group,checked:b.checked})).val(b.value);break;case"choice":if((t=Qt("<select></select>")).text(b.value),t.attr({multiple:b.multiple,size:b.multiline&&b.items?b.items.length:0}),b.items)for(var n in t.items=[],b.items)if(b.items.hasOwnProperty(n)){var o=Qt("<option></option>",{selected:b.items[n].checked,value:b.items[n].value,text:b.items[n].text});t.append(o),t.items[n]=o}if(b.multiline&&b.items){var i=function(){Qt(this).trigger("change")};t.on({mouseup:i,touchend:i})}break;case"generic":t=Qt("<div></div>")}if(t){if("textbox"===b.type||"signature"===b.type){var r=b.text.font.paddingtop,a=0<b.text.font.linespacing?b.text.font.linespacing+"px":"1.14pt";t.css({resize:"none",position:"absolute",paddingTop:b.multiline?r:0,paddingBottom:b.multiline?"2pt":0,lineHeight:a,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"})}else t.css({resize:"none",position:"absolute",padding:0,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});t.on({click:M,mousedown:M,mouseup:M,change:w,uncheck:z,focusin:P,focusout:D})}return e._fields&&e._fields.push(t),e.append(t),t}function _(){var e=b.fieldname.lastIndexOf(".");return 0<=e?b.fieldname.substr(0,e):null}function w(e){var t=_(),n=[];switch(b.type){case"button":break;case"textbox":case"signature":if(b.text.value=this.value,f.multiviewFields.hasOwnProperty(t)){var o=f.multiviewFields[t];for(var i in o)if(o.hasOwnProperty(i)){var r=o[i];r!==u&&(r.get().text.value=this.value,r.updateView())}}break;case"checkbox":b.checked=this.checked,b.group&&b.checked&&(Qt('input[name="'+b.group+'"]').trigger("uncheck"),b.checked=!0,this.checked=!0);break;case"radio":b.group&&Qt('input[name="'+b.group+'"]').trigger("uncheck"),b.checked=this.checked;break;case"choice":if(void 0!==e.target.selectedOptions)n=e.target.selectedOptions;else if(e.target.multiple)for(var a=0;a<e.target.options.length;a++)e.target.options[a].selected&&n.push(e.target.options[a]);else 0<=e.target.selectedIndex&&n.push(e.target.options[e.target.selectedIndex]);for(var l in b.items)if(b.items.hasOwnProperty(l)){var s=b.items[l];for(var c in s.checked=!1,n)n.hasOwnProperty(c)&&n[c].value===s.value&&(s.checked=!0)}}}function z(e){"checkbox"===e.target.type&&(e.target.checked=!1),b.checked=!1}function P(){C(!0),c({type:"fieldfocusin",field:u})}function D(){C(!1),c({type:"fieldfocusout",field:u})}function T(e){e&&((p=y(e)).zoom=E,k(),c({type:"viewchanged",fieldview:p})),c("repaint")}function k(){if(p){if(b.hidden||b.noview)return void p.hide();p.show();var e=Qt.extend({},(t=f.getViewerTransform(g),n=H(t,b.x,b.y),o=H(t,b.x+b.width,b.y+b.height),i=f.getZoom(g),r=b.width*i,a=b.height*i,l={x:(n.x+o.x-r)/2,y:(n.y+o.y-a)/2},s=f.getPageRotation(g)+b.rotation,c="rotate("+s+"deg)",u={left:Math.round(l.x)+"px",top:Math.round(l.y)+"px",width:r+"px",height:a+"px","max-width":r+"px","max-height":a+"px"},d=un(0!==s?c:""),Qt.extend(u,d),("textbox"===b.type||"signature"===b.type)&&(u.cursor=s%180==0?"text":"vertical-text"),u.visibility=s%180==0?"visible":"hidden",u),(h=b.border&&"underline"===b.border.style,{backgroundColor:b.backgroundcolor,color:b.color||b.text.font.color,borderStyle:b.border&&b.border.style&&!h?b.border.style:"none",borderBottomStyle:h?"solid":"inherit",borderColor:b.border?b.border.color:null,fontFamily:b.text.font.family,fontStyle:b.text.font.italic?"italic":b.text.font.oblique?"oblique":"normal",fontWeight:b.text.font.bold?"bold":"",textAlign:b.text.align}));p.css(e),f.highlighted?(p.addClass("atala-ui-form-highlight"),b.required?p.addClass("atala-ui-form-required"):p.removeClass("atala-ui-form-required")):p.removeClass("atala-ui-form-highlight"),b.readonly?p.attr("readonly","readonly"):p.removeAttr("readonly"),"textbox"===b.type?C(p.is(":focus")):"button"===b.type&&p.text(b.text.value)}var t,n,o,i,r,a,l,s,c,u,d,h}function C(e){"textbox"===b.type&&(e||(b.text.value?p.val()!==b.text.value&&p.val(b.text.value):p.val(b.text.defaultvalue)))}function E(e){e=e||f.getZoom(g),p.css({fontSize:Math.round((b.text.font.size||12)*e*(f.dpi/96)),borderWidth:b.border?Math.round(b.border.width*e):0}),b.text&&b.text.align&&p.css({paddingLeft:b.text.leftPadding*e+"px",paddingRight:b.text.rightPadding*e+"px"}),k()}return u._pageindex=n,o=e.type,Qt.extend(!0,b,l[o]),d(e,!0),u.dispose=function(){i&&i.off(),b=i=u=f=null},u.bind=function(){i.on.apply(i,arguments)},u.unbind=function(){i.off.apply(i,arguments)},u.trigger=c,u.set=d,u.get=function(e){return e?b[e]:b},u.setPageIndex=function(e){g=e,u.hasOwnProperty("_pageindex")&&(u._pageindex=e)},u.getClonedData=function(){return a?Qt.extend(!0,a,b):h(),a},u.getObject=function(){return p},u.getEventObject=function(){return i},u.getZoom=function(){return f.zoom},u.stringify=m,u.getJSON=m,u.getParentName=_,u.getName=function(){var e=b.fieldname.lastIndexOf(".");return 0<=e?b.fieldname.substr(e+1):b.fieldname},u.repaint=T,u.updateView=k,u.zoom=E,u},vn=function e(t,n,o){var i=this,s=t,r=n,a={forms:{events:{
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
function(e,t,n){var o=S(e,t,n).getClonedData();return s.trigger({type:g.fieldcreate,field:o}),o}
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
function(e,t,n){x(e,t),"function"==typeof n&&n(),s.trigger({type:g.formmoved,srcindex:e,destindex:t}),s.trigger(g.formschanged)},removeForm:function(e,t){b(e),"function"==typeof t&&t(),s.trigger({type:g.formremoved,index:e}),s.trigger(g.formschanged)}}};if(e.__exposedApi=a.forms,!t)return null;var l=n._pages,c=null,u={fields:[],multiviewFields:{},activepage:null,activefield:null,highlighted:!0,readonly:!!o,getZoom:r.getPageScale,getViewerTransform:r.getViewerTransform,getPageRotation:r.getPageRotation,dpi:96},d={},h=!1,f=!1,p=null,g={click:"fieldclicked",dblclick:"fielddoubleclicked",touchstart:"fieldtouchstart",interactend:"fieldtouchend",touchmove:"fieldtouchmove",pinchmove:"fieldpinchresize",rightclick:"fieldrightclicked",mousedown:"fieldmousedown",mousedownleft:"fieldmousedownleft",mousedownright:"fieldmousedownright",mousemove:"fieldmousemove",mouseout:"fieldmouseout",mouseup:"fieldmouseup",mouseover:"fieldmouseover",create:"fieldcreated",load:"fieldloaded",moved:"fieldmoved",resized:"fieldresized",repaint:"fieldrepainted"};function m(){}function v(e,t,n){if(null==e&&"number"==typeof t&&(t=b(t)),t=t||[],null==n?n=u.fields.length:n<0&&(n=0),n>u.fields.length){var o=u.fields.length;u.fields[n]=t;for(var i=o;i<u.fields.length;++i)u.fields[i]||(u.fields[i]=[])}else u.fields.splice(n,0,t)}function b(e){return e<u.fields.length?u.fields.splice(e,1)[0]:null}function x(e,t){v(null,b(e),t)}function y(e,t){if(e<u.fields.length&&u.fields[e]&&u.fields[e].length){var n;_(t);for(var o=0;o<u.fields[e].length;o++)(n=u.fields[e][o]).setPageIndex(e),n.repaint(t._form)}}function _(e){e._form&&e._form._fields&&(e._form._fields.length=0,e._form.empty())}function w(e){y(e.index,e.page)}function z(){null!=p.field&&p.field.getObject()[0].blur()}function P(e){e.page._form&&_(e.page)}function D(e){u.activepage=e}function T(e){k(e.page)}function k(e){if(e&&u.fields.length&&u.fields[e._index])for(var t=0;t<u.fields[e._index].length;t++)u.fields[e._index][t].updateView()}function C(e,t){var n,o,i;n=t,o=e,i=u.fields[o].splice(n,1)[0],u.activepage&&u.activepage._form._fields.splice(n,1),i.dispose(),s.trigger({type:"fielddeleted",page:o,index:n})}
/**
   * Gets an array of field data objects located on the given zero based page index.
   * @param pageNum: number, Zero based page index the fields are located on.
   * @returns array: Array of field data objects on the given page index. 
   */function E(e){var t=[];if(0===u.fields.length||void 0===u.fields[e])return t;for(var n=0;n<u.fields[e].length;n++)t[n]=u.fields[e][n].getClonedData();return t}function M(){if(0<u.fields.length){if(u.fields.length=0,l)for(var e=0;e<l.length;e++)_(l[e]);s.trigger({type:"formscleared"})}}function S(e,t,n){var o={};e&&e.type&&d[e.type]&&Qt.extend(!0,o,d[e.type]),Qt.extend(!0,o,e);var i=new U(o,u,t);return void 0===u.fields[t]&&(u.fields[t]=[]),u.fields[t].push(i),r.redrawVisiblePages(),"function"==typeof n&&n(i),R(i),i}i.dispose=function(){c=l=r=s=i=null,u.fields.length=0,u.multiviewFields=null,u.activepage=null,u.activefield=null},i.addFormLayer=function(t){if(t instanceof Qt){t._form=r.createDiv(t),t._form.css({position:"absolute",zIndex:4}),t._form._fields=[],t._form._page=t;var e=function(){D(t)};return t.on("mousedown",e),Kt.Features.Touch&&t.on("touchstart",e),t.on({pageresize:function(e){e.page=t,k(e.page)},pagezoom:function(e){e.page=t,function(e){for(var t in e.page._form._fields)e.page._form._fields.hasOwnProperty(t)&&e.page._form._fields[t].zoom(r.getPageScale(e.index))}(e)}}),!0}return!1},i.insertForm=v,i.removeForm=b,i.moveForm=x,i.removeFormLayer=function(e){return e instanceof Qt&&(e._form&&(e._form._fields=null,e._form._page=null,e._form=null),!0)},i.showLayer=y,i.__exposedApi=a.forms,i.__getDebugInfo=function(){var e={};return Qt.extend(!0,e,{data:u,pages:l,viewport:c}),e},i.__linkForms=function(e){e&&(e._fields?Array.isArray(e._fields)&&(u.fields=e._fields):e._fields=u.fields)},i.clear=M,i.createField=S,i.deleteFieldOnPage=C,i.getFieldsFromPage=E,i.setViewPort=function(e){e&&(e instanceof Qt||(e=Qt(e)),c=e)},i.drawField=function(e,t,n){return h?null:(e&&e.type&&d[e.type]&&Qt.extend(!0,e,d[e.type]),u.activefield&&null===u.activefield.getObject()&&O(),function(){if(!f){c.on("mousedown",I),Kt.Features.Touch&&c.on("touchstart",I);for(var e=0;e<l.length;e++)l[e]._draw.toFront();f=!0}}(),u.activefield=new U(e,u,u.activepage?u.activepage._index:void 0),u.activefield.bind({drawn:A,cancelled:O}),"function"==typeof t&&(F=t),u.activefield)};var F=function(){};function I(e){h=!0,c.off("mousedown",I),Kt.Features.Touch&&c.off("touchstart",I),s.trigger({type:"fielddrawstart",field:u.activefield.getClonedData()}),u.activefield._pageindex=u.activepage._index,u.activefield.startDraw(e,u.activepage._form,{})}function A(){var e,t,n;e=u.activefield,t=u.activepage,n=t?t._index:0,u.fields[n]?u.fields[n].push(e):u.fields[n]=[e],u.activefield.unbind({}),R(u.activefield),F({field:e}),F=function(){},s.trigger({type:g.fieldcreate,field:e.getClonedData()}),V()}function O(){u.activefield.dispose(),u.activefield=null,h&&V(!0)}function V(e){h=!1,function(){if(f){c.off("mousedown",I),Kt.Features.Touch&&c.off("touchstart",I);for(var e=0;e<l.length;e++)l[e]._draw.reset();f=!1}}(),s.trigger({type:"fielddrawend",field:e?null:u.activefield.getClonedData(),cancelled:!!e})}function H(e){p=e,s.bind("scroll",z)}function L(){s.unbind("scroll",z)}function R(t){function e(e){s.trigger({type:g[e.type],field:t.getClonedData()})}t.bind({interactstart:function(){u.activepage&&u.activepage._form===t.getObject().form||D(t.getObject().form._page),u.activefield=t},moved:e,resized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mousemove:e,mouseout:e,mouseup:e,mouseover:e,repaint:e,fieldfocusin:H,fieldfocusout:L})}function j(e,t,n,o,i){var r={type:"formdata",serverurl:e,query:"?atalaformdata=",method:"GET",data:{atala_formurl:t,atala_docurl:n=n||s.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{fields:[],length:i,error:void 0}};for(var a in r.data)r.data.hasOwnProperty(a)&&null===r.data[a]&&(r.data[a]=void 0);return r}function B(t,e,n){function o(e){void 0!==t.info.docIndex&&(e.offset=t.info.docIndex),N(e),"function"==typeof n&&n.call(void 0,e.error,e)}"function"==typeof e&&(n=e,e=!1),e||M(),r.makeHandlerRequest(t,o,o)}function N(e){if(e){var t={type:"formsloaded",forms:e.forms,customData:e.customData};if(e.dpi&&(u.dpi=e.dpi),e.forms&&e.forms.fields)for(var n=0;n<e.forms.fields.length;n++){e.offset=e.offset||0;var o=e.offset+n;u.fields[o]&&0<u.fields[o].length?u.fields[o].length=0:u.fields[o]=[];var i=e.forms.fields[n];if(i&&0<i.length)for(var r=0;r<i.length;r++)u.fields[o][r]=new U(i[r],u,o),a=u.fields[o][r],l=a.getParentName(),0<=a.getName().indexOf("<~Atala_Unnamed_")&&(u.multiviewFields.hasOwnProperty(l)?u.multiviewFields[l].push(a):u.multiviewFields[l]=[a]),s.trigger({type:g.load,field:u.fields[o][r].getClonedData()}),R(u.fields[o][r])}else e.error&&(t.error=e.error);s.trigger(t)}var a,l}i.stringifyChanges=function(){var e={},t=!1;for(var n in u.fields)if(u.fields.hasOwnProperty(n)&&0<u.fields[n].length)for(var o in e[n]=[],u.fields[n])u.fields[n].hasOwnProperty(o)&&(t=!0,e[n][o]=u.fields[n][o].get());return t?JSON.stringify({forms:{fields:e}}):void 0},i.createHandlerRequest=j,i.makeHandlerRequest=B,i.loadFormUrl=function(e,t,n,o,i,r,a){var l=Array.prototype.slice.call(arguments);"function"!=typeof(a=l.pop())&&l.push(a),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),r=l.shift();var s=j(e,t,n,o,i);void 0!==r&&(s.info.docIndex=r),B(s,0<=o&&1<=i,a)},i.loadForms=N,"Atalasoft.Controls.WebDocumentViewer"===s.typeOf&&Qt.extend(s,a),s.bind({pagerecycled:P,pageshown:w,zoomchanged:m,pagerotated:T})};
/**
 * WebDocumentViewer PDF Forms API.
 * @class
 * @inner
 * @name FormController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 * @ignore
 */function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(q=L||(L={})).Button="atala-upload-button",q.DragAndDrop="atala-upload-drag-and-drop",q.DragAndDropImage="atala-upload-drag-and-drop-image",q.FileProgress="atala-upload-progress-file",q.FileProgressImage="atala-upload-progress-file-image",q.MultipleFilesHeaderRow="atala-upload-files-header-row",q.MultipleFilesHeader="atala-upload-files-header",q.TextElement="atala-upload-text-element",q.Control="atala-upload-control",q.AreaContainer="atala-upload-flex-area",q.AreaNonTable="atala-upload-flex-area-non-table",q.AreaSingleFile="atala-upload-single-file",q.AreaSingleFileNoDragDrop="atala-upload-single-file-no-drag-drop",q.AreaMultipleFile="atala-upload-multiple-files",q.AreaMultipleFileDragDrop="atala-upload-multiple-files-drag-and-drop",q.ButtonsContainer="atala-upload-flex-buttons",q.Buttons="atala-upload-buttons",q.CloseButton="atala-upload-close-button",q.CancelButton="atala-upload-cancel-button",q.OkButton="atala-upload-ok-button",q.AddButton="atala-upload-add-button",q.MultipleFilesHeaderName="atala-upload-files-header-name",q.MultipleFilesHeaderSize="atala-upload-files-header-size",q.MultipleFilesHeaderStatus="atala-upload-files-header-status",q.MultipleFilesRow="atala-upload-files-row",q.MultipleFilesCell="atala-upload-files-cell",q.MultipleFilesCellName="atala-upload-files-cell-name",q.MultipleFilesCellSize="atala-upload-files-cell-size",q.MultipleFilesCellStatus="atala-upload-files-cell-status",q.MultipleFilesCellCancelButton="atala-upload-files-cancel-button";var Z=function(){function e(e,t){W(this,"cancel",!1),W(this,"progressCounter",0),W(this,"filename",void 0),W(this,"statusText",void 0),this.filename=e,this.statusText=t}var t=e.prototype;return t.handler=function(e){this.isUploadStartEventData(e)?e.fileinfo.filename===this.filename&&this.cancel&&(e.fileinfo.cancel=!0):e.uploadinfo.filename===this.filename&&(this.cancel&&(e.uploadinfo.cancel=!0),this.progressCounter%5==0&&this.statusText.text("Uploading ("+(e.uploadinfo.uploadedbytes/e.uploadinfo.totalbytes*100).toFixed(0)+" %)"),this.progressCounter++)},t.isUploadStartEventData=function(e){return void 0!==e.fileinfo},e}();function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=function(){function e(e,t){Y(this,"enterLeaveLevel",0),Y(this,"dragEffect",void 0),Y(this,"control",void 0),Y(this,"allowMultipleFiles",void 0),this.control=e,this.allowMultipleFiles=t,this.dragEffect=""}var t=e.prototype;return t.onDragEnter=function(e){""===this.dragEffect&&0===this.enterLeaveLevel&&(this.dragEffect=this.calcDragEffect(e.dataTransfer)),this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect),this.enterLeaveLevel++},t.onDrop=function(e){"none"!==this.dragEffect&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer)),this.resetState()},t.onDragLeave=function(){this.enterLeaveLevel--,0===this.enterLeaveLevel&&(this.dragEffect="")},t.onDragOver=function(e){this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect)},t.calcDragEffect=function(e){var t=this;return this.control.uploadRequested||!this.isDataTransferPresented(e)?"none":(Kt.Firefox?2===e.types.length&&e.types.some(function(e){return function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,t),"Files"===e}.bind(this)):1===e.types.length&&"Files"===e.types[0])&&(this.allowMultipleFiles||1===e.items.length)?"copy":"none"},t.processDragAndDropEvent=function(e){e.preventDefault();var t=e.originalEvent;if(t instanceof DragEvent)switch(t.type){case"dragenter":this.onDragEnter(t);break;case"dragover":this.onDragOver(t);break;case"drop":this.onDrop(t);break;case"dragleave":this.onDragLeave()}},t.getFilesFromDataTransfer=function(e){var t=[];if(!this.isDataTransferPresented(e))return t;for(var n=0;n<e.files.length;n++)t.push(e.files[n]);return t},t.resetState=function(){this.dragEffect="",this.enterLeaveLevel=0},t.isDataTransferPresented=function(e){return null!==e},e}(),te=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),(t.prototype.constructor=t).__proto__=n;var i=o.prototype;return i.onDragEnter=function(){},i.onDragOver=function(){},i.onDragLeave=function(){},i.onDrop=function(e){!this.control.uploadRequested&&this.isDataTransferPresented(e.dataTransfer)&&1===e.dataTransfer.types.length&&"Files"===e.dataTransfer.types[0]&&(this.allowMultipleFiles||1===e.dataTransfer.files.length)&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer))},o}(ee);function ne(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function oe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(){function e(e){var o=this;ie(this,"control",void 0),ie(this,"openFileDlgBtn",void 0),ie(this,"openFileForm",void 0),ie(this,"callbackToManipulateParentUi",function(){ne(this,o)}.bind(this)),ie(this,"allowedDragAndDrop",void 0),ie(this,"uiShouldBeClosedAfterUpload",void 0),ie(this,"isVisible",!1),ie(this,"progressHandlers",[]),ie(this,"uploadRequested",!1),ie(this,"reinitNeeded",!1),ie(this,"processFileFinishedUpload",function(){ne(this,o)}.bind(this)),ie(this,"controller",void 0),ie(this,"openFileDlgChangeHandler",function(){ne(this,o);var e=this.openFileDlgBtn[0].files;this.processFiles(this.convertFileListToFilesArray(e)),this.openFileForm[0].reset()}.bind(this)),ie(this,"handleUploadFinished",function(){ne(this,o),this.uiShouldBeClosedAfterUpload?this.controller.finish(!1):(this.control.find("."+L.CancelButton).css("display","none"),this.control.find("."+L.CloseButton).css("display",""))}.bind(this)),ie(this,"processProgressHandlers",function(t){var n=this;ne(this,o),this.progressHandlers.forEach(function(e){return ne(this,n),e.handler(t)}.bind(this))}.bind(this)),this.controller=e;var t=Qt("<div/>").addClass(L.Control).css("flex-flow","column").css("height","100%").css("width","100%").addClass("ui-widget"),n=Qt("<div/>").addClass(L.AreaContainer).css("display","flex").css("flex-flow","column").css("flex","1 1 auto").css("align-content","center").css("overflow","auto"),i=Qt("<div/>").addClass(L.ButtonsContainer).css("flex","0 1 auto");t.append(n),t.append(i),this.control=t,this.openFileDlgBtn=Qt("<input/>").attr("type","file").change(this.openFileDlgChangeHandler),this.openFileForm=Qt("<form/>").css("display","none"),this.openFileDlgBtn.appendTo(this.openFileForm),this.openFileForm.appendTo(this.control),this.allowedDragAndDrop=!1,this.uiShouldBeClosedAfterUpload=!1}var t,n,o,i=e.prototype;return i.init=function(e,t){var n=this;this.openFileDlgBtn.attr("accept",t.allowedFileTypes);var o=Qt(this.control.children("."+L.ButtonsContainer));if(this.initArea(t),this.initButtons(o,t),this.control.css("display","none"),this.control.appendTo(e),this.allowedDragAndDrop=t.allowDragDrop,this.uiShouldBeClosedAfterUpload=t.closeUiAfterUpload,this.allowedDragAndDrop){var i=Kt.Explorer?new te(this,t.allowMultipleFiles):new ee(this,t.allowMultipleFiles);this.area.on("dragenter",function(e){return ne(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragover",function(e){return ne(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("drop",function(e){return ne(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragleave",function(e){return ne(this,n),i.processDragAndDropEvent(e)}.bind(this))}},i.activate=function(e){this.callbackToManipulateParentUi=e,this.allowedDragAndDrop?(this.callbackToManipulateParentUi(!1),this.show()):this.openFileDlgBtn.click()},i.close=function(){this.unbindEvents(),this.hide()},i.getControlDom=function(){return this.control},i.initButtons=function(e,t){var n=this,o=Qt("<div/>").addClass(L.Buttons).css("float","right"),i=Qt("<button/>").addClass(L.Button).addClass(L.AddButton).button({label:"Add..."}).click(function(e){ne(this,n),e.preventDefault(),this.openFileDlgBtn.click()}.bind(this)),r=Qt("<button/>").addClass(L.Button).addClass(L.CloseButton).button({label:"Close"}).css("display","none").click(function(e){ne(this,n),e.preventDefault(),this.close()}.bind(this)),a=Qt("<button/>").addClass(L.Button).addClass(L.CancelButton).button({label:"Cancel"}).click(function(e){ne(this,n),e.preventDefault(),this.controller.abort(),this.close()}.bind(this));(t.allowMultipleFiles||t.allowDragDrop)&&o.prepend(i),o.append(a),t.closeUiAfterUpload||o.append(r),o.appendTo(e)},i.initAreaImpl=function(e,t,n){var o=Qt("<div/>").addClass(e).addClass(L.TextElement);return this.initAreaContents(o,t,n),o},i.initAreaContents=function(e,t,n){var o=Qt("<div/>").addClass(t?L.FileProgressImage:L.DragAndDropImage),i=Qt("<span/>").addClass(t?L.FileProgress:L.DragAndDrop).text(n);e.append(o).append(i)},i.reinitArea=function(e,t){var n=this.area.children().first();return n.children().remove(),this.initAreaContents(n,e,t),n},i.processFiles=function(e){if(!this.uploadRequested)if(0<e.length){var t=this.filterFiles(e);0<t.length&&(this.allowedDragAndDrop||(this.callbackToManipulateParentUi(!1),this.show()),this.addFilesToUi(t))}else this.allowedDragAndDrop||this.controller.abort()},i.filterFiles=function(e,t){for(var n=this.controller.filterFiles(e,void 0===t?[]:t),o=[],i=0;i<e.length;i++)n[0]===e[i].name?n.shift():o.push(e[i]);return o},i.bindEvents=function(){this.controller.bind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.unbindEvents=function(){this.controller.unbind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.show=function(){this.control.css("display","flex"),this.controlParent.children().first().css("display","none"),this.isVisible=!0},i.hide=function(){var e=this;this.control.css("display","none"),this.controlParent.children().first().css("display","block"),this.isVisible=!1,this.progressHandlers.length=0,this.callbackToManipulateParentUi(!0),this.callbackToManipulateParentUi=function(){ne(this,e)}.bind(this),this.uploadRequested=!1,this.reinitNeeded=this.allowedDragAndDrop,this.switchButtonEnabledState(L.AddButton,!0),this.uiShouldBeClosedAfterUpload||(this.control.find("."+L.CloseButton).css("display","none"),this.control.find("."+L.CancelButton).css("display",""))},i.convertSize=function(e){for(var t=e,n=0;1024<t;)t/=1024,n++;return t.toFixed(2)+" "+["B","KB","MB","GB","TB"][n]},i.addProgressHandler=function(e,t){this.progressHandlers.push(new Z(e,t))},i.removeProgressHandler=function(t){var n=this,e=this.progressHandlers.filter(function(e){return ne(this,n),e.filename===t}.bind(this))[0];null!==e&&this.progressHandlers.splice(this.progressHandlers.indexOf(e),1)},i.cancelUpload=function(t){var n=this,e=this.progressHandlers.filter(function(e){return ne(this,n),e.filename===t}.bind(this))[0];null!=e&&(e.cancel=!0)},i.convertFileListToFilesArray=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},i.switchButtonEnabledState=function(e,t){var n=t?"enable":"disable";this.control.find("."+e).button(n)},i.isFileSuccessEventData=function(e){return void 0!==e.filepath},t=e,(n=[{key:"controlParent",get:function(){return this.control.parent()}},{key:"area",get:function(){return Qt(this.control.children("."+L.AreaContainer))}}])&&oe(t.prototype,n),o&&oe(t,o),e}();function ae(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=function(r){var e,t,n,o,i;function l(e){var t,n=this;return ce(le(t=r.call(this,e)||this),"files",[]),ce(le(t),"table",void 0),ce(le(t),"uploadElems",[]),t.processFileFinishedUpload=function(e){ae(this,n),t.isFileSuccessEventData(e)?t.markStatusFinished(e.filename,!0):t.markStatusFinished(e.errorinfo.filename,!1,e.errorinfo.canceled)}.bind(this),t}t=r,(e=l).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t,n=l,i=[{key:"rowTemplate",get:function(){return null===this.rowTemplateField&&(this.rowTemplateField=this.getFileRowTemplate()),this.rowTemplateField}}],(o=null)&&se(n.prototype,o),i&&se(n,i);var a=l.prototype;return a.init=function(e,t){r.prototype.init.call(this,e,t),this.openFileDlgBtn.attr("multiple",!0)},a.initArea=function(e){var t;e.allowDragDrop?((t=this.initAreaImpl(L.AreaMultipleFile,!1,"Drop files here")).addClass(L.AreaMultipleFileDragDrop),this.area.addClass(L.AreaNonTable)):(t=Qt("<div/>").addClass(L.AreaMultipleFile).addClass(L.TextElement),this.initFilesTable(t)),t.appendTo(this.area)},a.initFilesTable=function(e){this.area.removeClass(L.AreaNonTable);var t=Qt("<div/>").addClass(L.MultipleFilesHeaderRow).addClass("ui-widget-header"),n=Qt("<div/>").addClass(L.MultipleFilesHeaderName).addClass(L.MultipleFilesHeader).text("Name"),o=Qt("<div/>").addClass(L.MultipleFilesHeaderSize).addClass(L.MultipleFilesHeader).text("Size"),i=Qt("<div/>").addClass(L.MultipleFilesHeaderStatus).addClass(L.MultipleFilesHeader).text("Status");t.append(n).append(o).append(i).appendTo(e),this.table=e},a.initButtons=function(e,t){var n=this;r.prototype.initButtons.call(this,e,t);var o=e.children().first(),i=Qt("<button/>").addClass(L.OkButton).button({label:"OK"}).addClass(L.Button).click(function(e){ae(this,n),e.preventDefault(),this.bindEvents(),this.uploadRequested=!0,this.switchButtonEnabledState(L.AddButton,!1),this.switchButtonEnabledState(L.OkButton,!1),this.controller.uploadFiles(this.files)}.bind(this));o.children("."+L.AddButton).first().after(i)},a.processFiles=function(e){var t=this;if(this.isVisible){if(this.uploadRequested)return;if(0<e.length){var n=this.filterFiles(e,this.files.map(function(e){return ae(this,t),e.name}.bind(this)));0<n.length&&(this.switchButtonEnabledState(L.OkButton,!0),this.addFilesToUi(n))}}else r.prototype.processFiles.call(this,e)},a.addFilesToUi=function(e){var t,n;if(this.allowedDragAndDrop&&void 0===this.table){var o=this.area.children().first();o.children().remove(),o.removeClass(L.AreaMultipleFileDragDrop),this.initFilesTable(o)}for(var i=[],r=0;r<e.length;r++)i.push(this.addRowToFilesTable(e[r]));(t=this.files).push.apply(t,e),(n=this.table).append.apply(n,i)},a.addRowToFilesTable=function(t){var n=this,o=t.name,i=l.rowTemplate.clone();Qt("."+L.MultipleFilesCellName,i).text(o),Qt("."+L.MultipleFilesCellSize,i).text(this.convertSize(t.size));var r=Qt("."+L.FileProgress,i),a=Qt("."+L.MultipleFilesCellCancelButton,i).click(function(e){ae(this,n),e.preventDefault(),this.uploadRequested?(this.cancelUpload(o),a.css("display","none"),r.text("Canceled")):(this.files.splice(this.files.indexOf(t,0),1),this.removeProgressHandler(o),i.remove(),0===this.files.length&&(this.controller.abort(),this.close()))}.bind(this));return this.addProgressHandler(t.name,r),this.addFinishHandler(t.name,r,a),i},a.show=function(){this.switchButtonEnabledState(L.OkButton,!this.allowedDragAndDrop),this.reinitNeeded&&(this.reinitArea(!1,"Drop files here").addClass(L.AreaMultipleFileDragDrop),this.area.addClass(L.AreaNonTable),this.table=void 0),r.prototype.show.call(this)},a.hide=function(){r.prototype.hide.call(this),this.files.length=0,void(this.uploadElems.length=0)!==this.table&&this.table.children(".atala-upload-files-row").remove()},a.addFinishHandler=function(e,t,n){this.uploadElems.push({filename:e,statusTextElem:t,cancelUploadBtn:n})},a.markStatusFinished=function(t,e,n){var o=this;void 0===n&&(n=!1);var i=this.uploadElems.filter(function(e){return ae(this,o),e.filename===t}.bind(this))[0];null!=i&&(i.cancelUploadBtn.css("display","none"),e?i.statusTextElem.text("Finished"):n?i.statusTextElem.text("Canceled"):i.statusTextElem.text("Error"))},l.getFileRowTemplate=function(){var e=Qt('<div class="'+L.MultipleFilesRow+'">\n<div class="'+L.MultipleFilesCell+" "+L.MultipleFilesCellName+'"/>\n<div class="'+L.MultipleFilesCell+" "+L.MultipleFilesCellSize+'"/>\n<div class="'+L.MultipleFilesCell+" "+L.MultipleFilesCellStatus+'">\n<span class="'+L.FileProgress+'">Upload pending</span>\n<button title="Removes file from upload queue" class="atala-ui-button '+L.MultipleFilesCellCancelButton+'"/>\n</div>\n</div>');return Qt("."+L.MultipleFilesCellCancelButton,e).button({icon:"atala-ui-icon atala-ui-icon-upload-cancel",showLabel:!1}),e},l}(re);function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ce(ue,"rowTemplateField",null);var fe,pe,ge=function(o){var e,t;function n(e){var t,n=this;return he(de(t=o.call(this,e)||this),"fileName",""),he(de(t),"uploadProgressSpan",null),he(de(t),"uploadProgressImage",null),t.processFileFinishedUpload=function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,n),t.isFileSuccessEventData(e)?t.uploadProgressSpan.text("Upload finished"):e.errorinfo.canceled?t.uploadProgressSpan.text("Upload canceled"):t.uploadProgressSpan.text("An error occurred during upload"),t.uploadProgressImage.css("display","none")}.bind(this),t}t=o,(e=n).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t;var i=n.prototype;return i.initArea=function(e){var t=L.AreaSingleFile,n="Uploading...";e.allowDragDrop&&(n="Drop file here");var o=this.initAreaImpl(t,!e.allowDragDrop,n);e.allowDragDrop||(this.uploadProgressSpan=o.children("."+L.FileProgress).first(),this.uploadProgressImage=o.children("."+L.FileProgressImage).first(),o.addClass(L.AreaSingleFileNoDragDrop)),o.appendTo(this.area),this.area.addClass(L.AreaNonTable)},i.addFilesToUi=function(e){this.allowedDragAndDrop&&this.reinitArea(!0,"Uploading..."),this.uploadRequested=!0,this.fileName=e[0].name,this.addProgressHandler(this.fileName,this.uploadProgressSpan),this.bindEvents(),this.switchButtonEnabledState(L.AddButton,!1),this.controller.uploadFile(e[0])},i.show=function(){this.reinitNeeded&&this.reinitArea(!1,"Drop file here"),o.prototype.show.call(this)},i.hide=function(){o.prototype.hide.call(this),null!==this.uploadProgressImage&&this.uploadProgressImage.css("display","")},i.reinitArea=function(e,t){var n=o.prototype.reinitArea.call(this,e,t);e?(this.uploadProgressSpan=n.children("."+L.FileProgress).first(),this.uploadProgressImage=n.children("."+L.FileProgressImage).first(),n.addClass(L.AreaSingleFileNoDragDrop)):(n.removeClass(L.AreaSingleFileNoDragDrop),this.uploadProgressSpan=null,this.uploadProgressImage=null)},n}(re);function me(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function ve(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(pe=fe||(fe={}))[pe.Idle=0]="Idle",pe[pe.Canceling=1]="Canceling",pe[pe.Uploading=2]="Uploading";var bn=function(){function e(e,t){var l=this;be(this,"config",void 0),be(this,"trigger",void 0),be(this,"bind",void 0),be(this,"unbind",void 0),be(this,"sendRequest",void 0),be(this,"uploadControlField",null),be(this,"state",fe.Idle),be(this,"filesToUpload",[]),be(this,"uploadingFiles",[]),be(this,"hasErrors",!1),be(this,"wasCanceled",!1),be(this,"uploadCallback",null),be(this,"abort",function(){me(this,l),this.config.enabled&&(this.state===fe.Uploading&&(this.hasErrors=!0,this.wasCanceled=!0,this.state=fe.Canceling,this.abortActiveRequests()),this.finish(!0))}.bind(this)),be(this,"finish",function(e){me(this,l),(this.config.closeUiAfterUpload||e)&&this.uploadControl.close()}.bind(this)),be(this,"onFileUploadStarted",function(e,t){if(me(this,l),this.state===fe.Canceling)return!1;var n={type:"fileuploadstarted",fileinfo:{filename:e,size:t,cancel:!1}};return this.trigger(n),!n.fileinfo.cancel}.bind(this)),be(this,"onFileUploadFinished",function(e,t){if(me(this,l),!e.success||e.canceled||void 0!==e.error){var n={type:"fileuploaderror",errorinfo:{filename:t,canceled:e.canceled,customData:e.customData}};this.hasErrors=!0,n.errorinfo.canceled?this.wasCanceled=!0:n.errorinfo.error=e.error,this.trigger(n)}else this.trigger({type:"fileuploadfinished",filepath:e.filename,filename:t,customData:e.customData});this.tryToFinishUpload(t)}.bind(this)),be(this,"onFileUploadFailed",function(e,t,n){me(this,l);var o={type:"fileuploaderror",errorinfo:{filename:n,canceled:"abort"===e}};this.hasErrors=!0,o.errorinfo.canceled?this.wasCanceled=!0:(o.errorinfo.error=e,t&&(o.errorinfo.error+=": "+t)),this.trigger(o),this.tryToFinishUpload(n)}.bind(this)),be(this,"onUploadStarted",function(){me(this,l);var e={type:"uploadstarted",info:{cancel:!1}};return this.trigger(e),!e.info.cancel}.bind(this)),be(this,"onUploadFinished",function(){me(this,l);var e={type:"uploadfinished",canceled:this.wasCanceled,success:!this.hasErrors};this.trigger(e)}.bind(this)),be(this,"onFileUploading",function(t,e,n){var o=this;if(me(this,l),this.state===fe.Canceling)return!1;var i=this.uploadingFiles.filter(function(e){return me(this,o),e.filename===t}.bind(this));if(0===i.length||1<i.length)return!0;var r=i[0];if(r.canceled)return!0;var a={type:"fileuploading",uploadinfo:{filename:t,uploadedbytes:e,totalbytes:n,cancel:!1}};return this.trigger(a),r.canceled=a.uploadinfo.cancel,!a.uploadinfo.cancel}.bind(this)),this.trigger=e.trigger,this.sendRequest=t.makeHandlerRequest,this.bind=e.bind,this.unbind=e.unbind;var n=e.config;this.config={serverUrl:e.config.serverurl,enabled:!1!==n.upload.enabled,allowMultipleFiles:!!n.upload.allowmultiplefiles,allowedFileTypes:n.upload.allowedfiletypes,allowDragDrop:!!n.upload.allowdragdrop,allowedMaxFileSize:n.upload.allowedmaxfilesize,uploadPath:n.upload.uploadpath,uiParent:e.config.parent,filesUploadConcurrency:e.config.upload.filesuploadconcurrency,closeUiAfterUpload:e.config.upload.closeuiafterupload}}var t,n,o,i=e.prototype;return i.dispose=function(){},i.uploadWithUi=function(e){this.uploadControl.activate(e)},i.uploadFiles=function(e,t,n){var o=this;if(this.checkControllerState()&&this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkUploadPath(t)&&this.checkCallback(n)){if(this.state=fe.Uploading,!this.fireUploadStartedEvent())return this.abort(),void this.tryToFinishUpload();for(e.forEach(function(e){return me(this,o),this.uploadFileOnServer(t,e)}.bind(this));this.uploadingFiles.length<this.config.filesUploadConcurrency&&0<this.filesToUpload.length;)this.startFileUpload(this.filesToUpload.pop());"function"==typeof n&&(this.uploadCallback=n)}},i.uploadFile=function(e,t,n){this.uploadFiles([e],t,n)},i.uploadFileOnServer=function(e,t){var n={atala_upath:this.config.uploadPath,atala_subpath:e},o=Qt.extend(!0,{},n,{atala_filename:t.name,atala_filetype:t.type}),i={type:"fileupload",serverurl:this.config.serverUrl,query:"?atalafileupload=",method:"POST",data:o,file:t,cancel:!1};this.filesToUpload.push(i)},i.startFileUpload=function(e){this.onFileUploadStarted(e.file.name,e.file.size)?this.uploadingFiles.push({filename:e.file.name,canceled:!1,jqxhr:this.sendRequest(e,this.onFileUploadFinished,this.onFileUploadFailed,this.onFileUploading)}):this.onFileUploadFailed("abort","",e.file.name)},i.fireUploadStartedEvent=function(){return this.onUploadStarted()},i.checkControllerState=function(){return!(this.state===fe.Uploading||this.state===fe.Canceling&&0<this.uploadingFiles.length)||(this.throwError("checkControllerState","Web Document Viewer already performs an upload operation and can start the another one. Please try again later"),!1)},i.checkUploadPath=function(e){return!e||"string"==typeof e||(this.throwError("checkUploadPath","uploadpath object '"+e+"' is not a string. Please check your input parameters and try again."),!1)},i.checkIfUploadDisabled=function(){return!!this.config.enabled||(this.throwError("checkUploadEnabled","Upload is not enabled in this Web Document Viewer instance. Please check the viewer configuration and try again."),!1)},i.checkFilesToUpload=function(e){if(!Array.isArray(e))return this.throwError("checkFilesToUpload","The parameter is not an array. Please check your input parameters."),!1;for(var t=0;t<e.length;t++){var n=e[t];if(!(n instanceof File))return this.throwError("checkFilesToUpload","An object "+n+" doesn't implement File interface object. Please check your input parameters and try again."),!1}return!0},i.checkAlreadyAddedFiles=function(e){if(!e)return!0;if(!Array.isArray(e))return this.throwError("checkAlreadyAddedFiles","The parameter is not an array. Please check your input data."),!1;for(var t=0;t<e.length;t++){var n=e[t];if("string"!=typeof n)return this.throwError("checkAlreadyAddedFiles","An object "+n+" doesn't implement File interface object. Please check your input parameters."),!1}return!0},i.checkCallback=function(e){return!e||"function"==typeof e||(this.throwError("checkCallback","callback object '"+e+"' is not a function. Please check your input parameters and try again."),!1)},i.throwError=function(e,t){this.trigger({type:"throwerror",name:e,msg:t})},i.tryToFinishUpload=function(t){var n=this;t&&this.uploadingFiles.splice(this.uploadingFiles.indexOf(this.uploadingFiles.filter(function(e){return me(this,n),e.filename===t}.bind(this))[0]),1),0<this.filesToUpload.length?this.startFileUpload(this.filesToUpload.pop()):0===this.uploadingFiles.length&&(this.state!==fe.Idle&&(this.state=fe.Idle,this.onUploadFinished(),null!==this.uploadCallback&&this.uploadCallback()),this.hasErrors=!1,this.wasCanceled=!1)},i.filterFilesPublic=function(e,t,n){var o,i=this,r=[];this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkAlreadyAddedFiles(t)&&this.checkCallback(n)&&(o=t?this.filterFiles(e,t):this.filterFiles(e,[]),r=e.filter(function(t){var n=this;return me(this,i),!o.some(function(e){return me(this,n),e===t.name}.bind(this))}.bind(this)),"function"==typeof n&&n());return r},i.filterFiles=function(e,t){for(var n=this,o=[],i=this.config.allowedFileTypes.toLowerCase().split(","),r=t.map(function(e){return me(this,n),e}.bind(this)),a=e.length,l=0;l<a;l++){var s=e[l],c=s.name,u=w.None;if(s.size>this.config.allowedMaxFileSize)o.push(c),u=w.Size;else{for(var d=!1,h=r.length,f=0;f<h;f++)if(r[f]===c){d=!0;break}if(d)o.push(c),u=w.Name;else{for(var p=c.split(".").pop(),g="."+(p?p.toLowerCase():""),m=s.type.toLowerCase(),v=!1,b=0;b<i.length;b++){var x=i[b];if(x===g||""===x.trim()){v=!0;break}var y=x.split("/"),_=m.split("/");if(2===y.length&&2===_.length&&y[0]===_[0]&&(y[1]===_[1]||"*"===y[1])){v=!0;break}}v||(o.push(c),u=w.Type)}}this.onFileAddedToUpload(s,u),r.push(c)}return o},i.abortActiveRequests=function(){var t=this;this.uploadingFiles.forEach(function(e){return me(this,t),e.jqxhr.abort()}.bind(this))},i.onFileAddedToUpload=function(e,t){var n={type:"fileaddedtoupload",filename:e.name,success:0===t,reason:t};this.trigger(n)},i.getUploadControl=function(){return this.uploadControl.getControlDom()}
/**
   *
   * Creates a jQuery UI upload control.
   * @param {any} parent - parent object to append to.
   */,i.createUploadControl=function(e){var t;return(t=this.config.allowMultipleFiles?new ue(this):new ge(this)).init(e,this.config),t},t=e,(n=[{key:"uploadControl",get:function(){return null===this.uploadControlField&&(this.uploadControlField=this.createUploadControl(this.config.uiParent)),this.uploadControlField}}])&&ve(t.prototype,n),o&&ve(t,o),e}();function xe(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Document operations API.
 * @class
 * @name DocumentController
 * @inner
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var xn=function e(i,t,n){var o=this,d=i,h=t,a=n,r={document:{events:{
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
removePage:D,
/**
       * Removes pages at given indices.
       * @param {number[]|string[]} indices - Indices of pages to remove. Can be passed as string representation of numbers
       * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
removePages:T,
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
getPageRotation:c,
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
getPageReference:w}};if(e.__exposedApi=r.document,!i)return null;var f={changes:[],mapping:null,count:0,inserted:0,info:{count:0,dpi:96,size:{width:0,height:0},vector:!1}},p={inserted:"pageinserted",removed:"pageremoved",moved:"pagemoved",changed:"documentchanged",rotated:"pagerotated"};function l(e){f.info=e.info,f.mapping=null,f.changes.length=0,f.count=0,f.inserted=0,f.length=0}o.dispose=function(){h=d=o=null};var g=null;function m(e,t,n){n?null===g?g={name:e,message:t}:g.message+="\r\n"+t:d.trigger({type:"throwerror",name:e,msg:t})}function v(){null==f.mapping&&function(){var e=Math.max(f.info.count,0);f.mapping=new Array(e);for(var t=0;t<e;++t)f.mapping[t]=b(t)}()}function s(e,t){v(),f.mapping[e]&&(f.mapping[e].viewerstate[t]||(f.mapping[e].viewerstate[t]={size:null,fitmultiplier:null}))}function b(e){return{index:e,viewerstate:{},pageref:null,angle:0,text:null}}function c(e){return v(),0<=e&&e<f.mapping.length?f.mapping[e].angle:0}function x(e,t,n){var o=t;e&&e!==i.config.documenturl&&(o.pageref={uri:e,index:t.index,mapsto:f.info.count+f.inserted}),f.count++,f.inserted++,f.mapping.splice(n,0,o)}function u(e){return f.count--,f.mapping.splice(e,1)[0]}function y(){}function _(){}function w(e){var t,n=(t=e,v(),0<=t&&t<f.mapping.length?null!==f.mapping[t].pageref?f.mapping[t].pageref:f.mapping[t].index:null);if(null!==n){if("object"==typeof n)return{uri:n.uri,index:n.index};if(qe(n))return{uri:i.config.documenturl,index:n}}return n}function z(e,t,n,o){Array.isArray(t)?m("IncorrectIndex","Source index can not be an array."):P(e,[t],n,o)}function P(e,t,n,o){var i,r;if(v(),"string"==typeof e&&0<e.trim().length)g=null,i=I(t,Number.MAX_VALUE,!1,!0),r=!0,null!==g&&("IncorrectNumbers"===g.name?m("IncorrectIndices","When this methods has set srcUri, then srcIndices should be an array of numbers representing page indices from an external document. Please check your input parameters and try again.\r\n\tInner error: "+g.message):m(g.name,g.message));else{if(null!=e)return void m("IncorrectUri",'Uri has invalid value "'+e+'". It must be an uri to the source document or not set.');r=!1,i=function(e){var t=[],n=null,o=null;if(!Array.isArray(e))return m("IncorrectPageReferences","Objects "+e+" are not an array."),n;if(function(e){var t=this,n=[];return!!Array.isArray(e)&&(e.forEach(function(e){xe(this,t),null===Qe(e)&&n.push(e)}.bind(this)),0===n.length)}(e)){o=new Array(e.length);for(var i=0;i<e.length;i++)o[i]=w(e[i])}for(var r=0;r<e.length;r++){var a=null!==o?o[r]:e[r];if("object"==typeof a&&null!==a&&"string"==typeof a.uri&&0!==a.uri.trim().length){var l=I([a.index],Number.MAX_VALUE);null!==l?a.index=l[0]:t.push(a)}else t.push(a)}return 1<t.length?m("IncorrectPageReferences",'Objects "'+t.join('", "')+'" are not correct page references.'):0<t.length?m("IncorrectPageReferences",'Object "'+t[0]+'" is not a correct page reference.'):n=null!==o?o:e,n}(t)}var a=S(n,!1);if(null!==i&&null!==a){h._state.batchoperation++;for(var l=0;l<i.length;l++){var s=r?e:i[l].uri,c=r?i[l]:i[l].index;l===i.length-1&&h._state.batchoperation--;var u=b(c);x(s,u,a),h._controllers.annotations&&h._controllers.annotations.insertLayer(null,null,a),h._controllers.forms&&h._controllers.forms.insertForm(null,null,a),f.changes.push({type:"insertpage",uri:s,src:u.index,dest:a}),d.trigger({type:p.inserted,srcuri:s,srcindex:c,destindex:a}),a++}"function"==typeof o&&o(),d.trigger(p.changed)}}function D(e,t){T([e],t)}function T(e,t){var n=this;v();var o=F(e,!0);null!==o&&(h._state.batchoperation++,o.sort(function(e,t){return xe(this,n),t-e}.bind(this)).forEach(function(e,t){xe(this,n),t===o.length-1&&h._state.batchoperation--,u(e),h._controllers.annotations&&h._controllers.annotations.removeLayer(e),h._controllers.forms&&h._controllers.forms.removeForm(e),f.changes.push({type:"removepage",index:e}),d.trigger({type:p.removed,index:e})}.bind(this)),"function"==typeof t&&t(),d.trigger(p.changed))}function k(e,t,n){C([e],t,n)}function C(e,t,n){v();var a=F(e,!0),l=S(t,!0);if(null!==a&&null!==l){var s=l,c=a[0]>l?1:-1;h._state.batchoperation++;for(var o=function(e){var n=this,o=e,i=a[o],t=0,r=0;t=i<l?-a.filter(function(e,t){return xe(this,n),t<o&&e<i&&e<l}.bind(this)).length:l<i?a.filter(function(e,t){return xe(this,n),t<o&&i<e}.bind(this)).length:c<0?-a.filter(function(e,t){return xe(this,n),t<o&&e<i&&e<l}.bind(this)).length:a.filter(function(e,t){return xe(this,n),t<o&&i<e}.bind(this)).length,0<e&&(t<0||i<l)&&(r=-1),s+=r,e===a.length-1&&h._state.batchoperation--,x(null,u(i+t),s),h._controllers.annotations&&h._controllers.annotations.moveLayer(i+t,s),h._controllers.forms&&h._controllers.forms.moveForm(i+t,s),f.changes.push({type:"movepage",src:i+t,dest:s}),d.trigger({type:p.moved,shiftedsrcindex:i+t,srcindex:i,destindex:s}),s++},i=0;i<a.length;i++)o(i);"function"==typeof n&&n(),d.trigger(p.changed)}}function E(e,t,n){Array.isArray(t)?m("rotatePage","angle "+t+" is array."):M([e],t,n)}function M(e,t,n){var i=this;v();var r=F(e),o="number"==typeof t||"string"==typeof t,a=function(e,t){var n=A(t?[e]:e);if(n)for(var o=0;o<n.length;o++){if(n[o]%90)return m("rotatePages","Angle must be a multiple of 90 degrees."),null;n[o]=n[o]%360}return n}(t,o);null!==r&&null!==a&&(o||r.length===a.length?(h._state.batchoperation++,r.forEach(function(e,t){xe(this,i);var n=1<a.length?a[t]:a[0];t===r.length-1&&h._state.batchoperation--;var o=function(e,t){f.mapping[e].angle=t;for(var n=null,o=0;o<h._pages.length;++o){var i=h._pages[o];if(i._index===e){n=i;break}}return n&&n._img&&(h.startDomManipulation(),h.adjustVisiblePages(!0,h.endDomManipulation)),n}(e,n);f.changes.push({type:"rotatepage",index:e,angle:n}),d.trigger({type:p.rotated,index:e,page:o,angle:n})}.bind(this)),"function"==typeof n&&n()):m("rotatePages","Indices array and angles array have different lengths."))}function S(e,t){var n=I([e],f.mapping.length+(t?0:1));return n?n[0]:n}function F(e,t){return I(e,f.mapping.length,t)}function I(e,i,r,t){var a=this,l=[],s=[],n=null,o="IncorrectIndices";return Array.isArray(e)?((e=A(e,t))&&e.forEach(function(t,e,n){var o=this;xe(this,a),(t<0||i<=t)&&l.push(t),r&&1<n.filter(function(e){return xe(this,o),e===t}.bind(this)).length&&-1===s.indexOf(t)&&s.push(t)}.bind(this)),1<l.length?m(o,"Page indices "+l.join(", ")+" are outside of the document.",t):0<l.length?m(o,"Page index "+l[0]+" is outside of the document.",t):1<s.length?m(o,"Page indices "+s.join(", ")+" are included more than once.",t):0<s.length?m(o,"Page index "+s[0]+" is included more than once.",t):n=e):m(o,"Object "+e+" is not an array.",t),n}function A(e,t){var n=this,o=[],i=[];return Array.isArray(e)?(e.forEach(function(e){xe(this,n);var t=Qe(e);null===t?o.push(e):i.push(t)}.bind(this)),1<o.length?(m("IncorrectNumbers",'Objects "'+o.join('", "')+'" are not numbers.',t),i=null):0<o.length&&(m("IncorrectNumbers",'Object "'+o[0]+'" is not a number.',t),i=null)):m("IncorrectNumbers","Object "+e+" is not an array.",t),i}o.__exposedApi=r.document,o.getPageDefinition=function(e,t){if(t=t||a,v(),0<=e&&e<f.mapping.length&&f.mapping[e]){var n=f.mapping[e],o=null,i=null;if(-1===n)return null;null!=n.pageref?(o=n.pageref,e=o.index,i=o.uri):e=n.index;var r=n.viewerstate[t]&&0<=n.viewerstate[t].cacheIndex?n.viewerstate[t].cacheIndex:-1;return{index:e,ref:o,cacheIndex:r,uri:i}}return null},o.setPageCacheIndex=function(e,t){s(e,a),f.mapping[e]&&f.mapping[e].viewerstate&&(f.mapping[e].viewerstate[a].cacheIndex=t)},o.insertPage=z,o.removePage=D,o.movePage=k,o.rotatePage=E,o.insertPages=P,o.removePages=T,o.movePages=C,o.rotatePages=M,o.getPageFitMultiplier=function(e,t){return t=t||a,v(),s(e,t),0<=e&&e<f.mapping.length&&f.mapping[e].viewerstate[t].fitmultiplier?f.mapping[e].viewerstate[t].fitmultiplier:1},o.setPageFitMultiplier=function(e,t,n){n=n||a,v(),s(e,n),0<=e&&e<f.mapping.length&&(f.mapping[e].viewerstate[n].fitmultiplier=t)},o.getPageRotation=c,o.getPageSize=function(e,t){if(t=t||a,v(),s(e,t),0<=e&&e<f.mapping.length){var n=f.mapping[e].viewerstate[t].size;if(!n){var o=f.info;if(o.pagesizes&&o.pagesizes[e])return o.pagesizes[e]}return n}},o.setPageSize=function(e,t,n){n=n||a,v(),s(e,n),0<=e&&e<f.mapping.length&&(f.mapping[e].viewerstate[n].size=t)},o.updatePageText=function(e,t){v(),0<=e&&e<f.mapping.length&&(f.mapping[e].text=t)},o.getPageText=function(e){return 0<=e&&e<f.mapping.length?f.mapping[e].text:null},o.initDocumentText=function(e){if(e&&e.pages){v();for(var t=0;t<f.mapping.length;++t)if(t<e.pages.length)if(f.mapping[t].index===t)f.mapping[t].text=e.pages[t];else for(var n=0;n<f.mapping.length;++n)f.mapping[n].index===t&&(f.mapping[n].text=e.pages[t]);else f.mapping[t].text=null}},o.getPageIndexByImageIndex=function(e){if(e<f.info.count){for(var t=0;t<f.mapping.length;t++)if(f.mapping[t].index===e)return t}else for(var n=0;n<f.mapping.length;n++)if(f.mapping[n].pageref&&f.mapping[n].pageref.mapsto===e)return n;return-1},o.__getDebugInfo=function(){var e={};return Qt.extend(!0,e,{data:f,changes:f.changes}),e},o.__linkChanges=function(e){e&&(e._changes?f=e._changes:e._changes=f)},o.clear=function(e){f.clear(),"function"==typeof e&&e(),d.trigger(p.changed)},o.getPageCount=function(){return f.info.count+f.count},o.stringifyChanges=function(){var e=[],t={type:"docinfo",pagescount:f.info.count};for(var n in e.push(t),f.changes)if(f.changes.hasOwnProperty(n)&&(d.config.persistrotation||"rotatepage"!==f.changes[n].type)){var o={};for(var i in f.changes[n])f.changes[n].hasOwnProperty(i)&&(o[i]=f.changes[n][i]);e.push(o)}return JSON.stringify({changes:e})},"Atalasoft.Controls.WebDocumentViewer"===d.typeOf&&Qt.extend(d,r),d.bind({pagerecycled:_,pageshown:y,documentinfochanged:l})};function Ue(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Text Layer operations API.
 * @class
 * @inner
 * @name TextController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var yn=function e(t,n,o){var i=this,k=t,C=n,E=(n?n._internalEvents:null)||Qt({}),r={
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
getSelected:q,
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
selectPageText:function(e,r,a,l,s,t){var c=this,u=Qt.Deferred(),n=Array.prototype.slice.call(arguments,1);return 2<n.length&&"function"==typeof n[n.length-2]?(t=n.pop(),s=n.pop()):1<n.length&&"function"==typeof n[n.length-1]&&(s=n.pop()),r=n[0],a=n[1],l=n[2],ge(e).done(function(e,t){var n=this;Ue(this,c);var o=t.bounds;void 0===r||!t.regions[r]||void 0!==a&&t.regions[r].lines[a]?(r=t.regions[r],void 0!==a&&r.lines[a]&&(o=ee((a=r.lines[a]).bounds,r),void 0!==l&&a.words[l]&&(o=ee(a.words[l].bounds,r))),Y(e,Le(o.x,o.y),e,Le(o.right,o.bottom))):X(e,r);var i=function(){Ue(this,n),k.config.mousetool.text.hookcopy&&C._dom.viewport.focus(),u.resolve(),s&&"function"==typeof s&&s()}.bind(this);C.isPageInView(e)?i():k.showPage(e,i)}.bind(this)).fail(function(){Ue(this,c),u.reject(),t&&"function"==typeof t&&t()}.bind(this)),u.promise()},
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
getPageText:function(i,r,e){var a=this,l=Qt.Deferred();return ge(i).done(function(){Ue(this,a);var e="",t=F(i);if(t)for(var n=0;n<t.regions.length;n++){var o=W(t.regions[n]);o&&(e+=o)}l.resolve(e),r&&"function"==typeof r&&r(e)}.bind(this)).fail(function(){Ue(this,a),l.reject(),e&&"function"==typeof e&&e()}.bind(this)),l.promise()},
/**
       * Clears all text selection for the document.
       * @instance
       * @function
       */
clearSelection:x,
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
reloadPageText:function(e,t,n){var o=this;return v(e),ge(e).done(function(){Ue(this,o),t&&"function"==typeof t&&t(e)}.bind(this)).fail(function(){Ue(this,o),n&&"function"==typeof n&&n(e)}.bind(this))},
/**             
       * Indicates whether page text is loaded.             
       * @param {number} index - Index of the page to check text data state.
       * @instance
       * @function
       */
isPageTextLoaded:function(e){var t=F(e);return!(!t||t.loading)},
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
searchOnPages:ce}};if(e.__exposedApi=r.text,!t)return null;var a=.1,l=null,M=n._pages,S={activepage:null,origin:Le(0,0),originPage:-1,rectangular:!1,selectionCache:[],searchQuery:null},u={};function F(e){return C._controllers.document.getPageText(e)}
/**
   * jQuery trigger shortcut
   * @returns object, WebDocumentViewer
   */
function s(e){return k.trigger(e),i}function p(e,t){k.trigger({type:"throwerror",name:e,msg:t})}function c(){}function I(e,t){if(t._text){f(t);var n=F(e);if(n){var o=be(t,n);if(o&&n.searchResult&&_(o,n),o&&n.selection)for(var i=n.selection,r=0;r<i.regions.length;r++)for(var a=0;a<i.regions[r].lines.length;a++)for(var l=i.regions[r].lines[a],s=0;l.words&&s<l.words.length;s++){var c=l.words[s];te(o,c.bounds.x,c.bounds.y,c.bounds.width,c.bounds.height,u.selection)}}}}function d(e){f(e.page)}function h(e){I(e.index,e.page)}function f(e){e._text&&y(e._index)}function g(e){e.page._text.attr("width",e.width).attr("height",e.height),e.page._text.width(e.width),e.page._text.height(e.height),I(e.index,e.page)}function m(){if(S.searchQuery&&S.searchQuery.iterator){S.searchQuery.iterator.dispose(),S.searchQuery=null,de();for(var e=0;e<M.length;e++)I(M[e]._index,M[e])}}function v(e){if(null==e)for(var t=0;t<C._controllers.document.getPageCount();t++)v(t);F(e)&&(C._controllers.document.updatePageText(e,null),S.selectionCache[e]&&(S.selectionCache[e]=null,C.findPageFromIndex(e)&&y(e,null)))}function b(){if(S.searchQuery=null,S.selectionCache=[],C._controllers.document.initDocumentText({pages:[]}),M)for(var e=0;e<M.length;e++)f(M[e])}function x(){for(var e=0;e<C._controllers.document.getPageCount();e++){var t=F(e);t&&t.selection&&(y(e,t,!0),t.selection=null)}S.selectionCache.length=0}
/** Clears the text selection */function y(e,t,n){for(var o=0;o<M.length;o++)if(!isFinite(e)||M[o]._index===e){t=isFinite(e)&&o===e?t:F(M[o]._index);var i=be(M[o],t);if(i){var r=C.getSourcePageSize(M[o]._index,t?t.rotation:0);i.clearRect(0,0,r.width,r.height),n&&_(i,t)}}}function _(e,t){if(t&&t.searchResult)for(var n=0;n<t.searchResult.length;n++){var o=t.searchResult[n].bounds;te(e,o.x,o.y,o.width,o.height,u.highlight)}}function w(e){var t=e.eventData,n=t.page,o=t.point;x();var i=F(n);i&&(i.selection=le(t.point,t.point),t.interval&&S.origin&&0<=S.originPage?(Y(S.originPage,S.origin,n,o),t.complete=!0):(t.line||t.word)&&Math.abs(t.point.x-S.origin.x)<10&&Math.abs(t.point.y-S.origin.y)<10?(function(e,t,n,o){var i=F(e);if(i&&(n||o))for(var r=0;r<i.regions.length;r++){var a=i.regions[r];if(Me(t,a.bounds))for(var l=0;l<a.lines.length;l++){var s=a.lines[l];if(Me(t,s.bounds)){var c={region:r,line:l,bounds:s.bounds};if(o){for(var u=0;u<s.words.length;u++)if(Me(t,s.words[u].bounds))return c.word=u,c.bounds=s.words[u].bounds,Z(e,c)}else if(n)return Z(e,c)}}}}(n,o,t.line,t.word),t.complete=!0):(S.origin=t.rectangular?t.viewerPoint:t.point,S.originPage=n,S.rectangular=t.rectangular)),t.handled=!0}Qt.extend(u,o||{}),i.dispose=function(){k.unbind({pagerecycled:d,pageshown:h,zoomchanged:c,documentchanged:m}),E.off({textselectstart:w,textselectmove:R,textselectend:j}),l=k=i=null,S.searchQuery=null,S.selectionCache=[],S.activepage=null},i.removeTextLayer=function(e){return e instanceof Qt&&(e._text&&(e._text._page=null,e._text=null),!0)},i.addTextLayer=function(t){return t instanceof Qt&&(t._text=C.createDOM("canvas",t),t._text.css({width:"100%",height:"100%",position:"absolute",zIndex:0}),t._text.attr("width",t.width()).attr("height",t.height()),(t._text._page=t).on(Kt.Features.Touch?"touchstart":"mousedown",function(){var e;e=t,S.activepage=e}),t.on({pageresize:function(e){e.page=t,g(e)},pagezoom:function(e){e.page=t,g(e)}}),!0)},i.showLayer=I,i.__exposedApi=r.text,i.__getDebugInfo=function(){var e={};return Qt.extend(!0,e,{data:S,pages:M,viewport:l}),e},i.__linkText=function(){},i.clear=b,i.setViewPort=function(e){e&&(e instanceof Qt||(e=Qt(e)),l=e)},i.search=se,i.clearSelection=x,i.ensurePageTextLoaded=ge;var z,P,D,T,A,O,V,H,L=(z=Y,P=k.config.mousetool.text.throttlingtreshold,V=0,H=function(){V=(new Date).getTime(),O=null,A=z.apply(D,T),O||(D=T=null)},function(){var e=(new Date).getTime();V||(V=e-P);var t=P-(e-V);return D=this,T=arguments,t<=0||P<t?(O&&(clearTimeout(O),O=null),V=e,A=z.apply(D,T),O||(D=T=null)):O||(O=setTimeout(H,t)),A});function R(e){var t=e.eventData,n=t.page,o=S.rectangular?t.viewerPoint:t.point,i=F(n);if(i)if(i.loading)t.cursor=je.Wait;else{if(0===i.regions.length)return!(t.handled=!1);var r=C.getPageRotation(n)+i.rotation;if(i.rotatedRegions)for(var a=0;a<i.rotatedRegions.length;a++)if(Me(t.point,i.rotatedRegions[a].bounds)){r+=i.rotatedRegions[a].rotation;break}t.cursor=r%180==0?je.Text:je.VerticalText,t.selecting&&L(S.originPage,Qt.extend({},S.origin),n,o,S.rectangular)}return!(t.handled=!0)}function j(e){var t=e?e.eventData:{},n=!1;for(var o in S.selectionCache)if(S.selectionCache.hasOwnProperty(o)&&S.selectionCache[o].selection&&S.selectionCache[o].selection.regions.length){n=!0;break}n&&s({type:"textselected"}),S.rectangular=!1,t.handled=!0}function B(){N()}function N(){var e=C.createDiv();if(e[0]){var t=new Re("wdv-dummy-selection-trigger",{text:function(){return q()}});t.on("success",function(){t.destroy()}),t.on("error",function(){t.destroy(),p("TextCopyError")}),t.onClick({currentTarget:e[0]})}}function q(){for(var e="",t=0;t<S.selectionCache.length;t++)if(S.selectionCache[t]){var n=S.selectionCache[t].selection;if(n&&n.regions&&0<n.regions.length)for(var o=0;o<n.regions.length;o++){var i=W(n.regions[o]);i&&(e+=i)}}return e}function U(e){for(var t="",n=0;e.words&&n<e.words.length;n++)if(Oe(e.words[n],1<=n?e.words[n-1]:null)&&(t+=" "),e.words[n].text)t+=e.words[n].text;else if(e.words[n].glyphs&&e.words[n].glyphs.length)for(var o=0;o<e.words[n].glyphs.length;o++)t+=e.words[n].glyphs[o].text;return t}function W(e){for(var t="",n=0;n<e.lines.length;n++){var o=U(e.lines[n]);o&&(t+=o+"\n")}return t}function Z(e,t){var n=F(e);if(n&&t&&n.regions[t.region]){x();var o=n.regions[t.region],i=be(ve(e),n);if(qe(t.line)&&o.lines[t.line]){for(var r=o.lines[t.line],a={words:[]},l={lines:[a],bounds:Qt.extend({},o.bounds)},s=qe(t.word)&&r.words[t.word]?t.word:0,c=qe(t.endWord)&&r.words[t.endWord]?t.endWord:qe(t.word)?s:r.words.length-1,u=s;u<=c;++u){var d=r.words[u],h=!!d.glyphs.length;h&&u===s&&qe(t.glyph)?d=K(d,t.glyph,s===c&&qe(t.endGlyph)?t.endGlyph:d.glyphs.length-1):h&&u===c&&qe(t.endGlyph)&&(d=K(d,0,t.endGlyph)),a.words.push(Qt.extend({},d)),i&&te(i,d.bounds.x,d.bounds.y,d.bounds.width,d.bounds.height)}n.selection=le(Le(t.bounds.x,t.bounds.y),Le(t.bounds.right,t.bounds.bottom)),ae(n.selection.regions,l),S.selectionCache[e]=n}else X(e,t.region)}}function X(e,t){x();var n=F(e);if(n&&n.regions[t]){var o=n.regions[t],i=be(ve(e),n);n.selection=le(Le(o.bounds.x,o.bounds.y),Le(o.bounds.right,o.bounds.bottom),!1);var r=Q(i,o,n.selection.origin,n.selection.point);r&&0<r.lines.length&&(ae(n.selection.regions,r),S.selectionCache[e]=n)}}function Y(e,t,n,o,i){var r=Math.min(e,n),a=Math.max(e,n);for(var l in S.selectionCache)if(S.selectionCache.hasOwnProperty(l)){var s=parseInt(l,10);(s<r||a<s)&&(y(s,S.selectionCache[s],!0),S.selectionCache[s].selection=null)}for(var c=i?Math.min(t.x,o.x):0,u=Le(c,0),d=r;d<=a;d++){var h=C.getSourcePageSize(d);i&&((h=Qt.extend({},C.getPageSize(d))).width*=C.getPageScale(d),h.height*=C.getPageScale(d));var f=i?Math.max(t.x,o.x):h.width,p=Le(f,h.height),g=void 0,m=void 0;r===a?(g=t,m=o):d===e?(g=t,m=d===r?p:u):d===a||d===r?(m=o,g=d===r?p:u):(g=u,m=p);var v=ve(d);i?$(d,Le(c,g.y),Le(f,m.y),v):G(d,g,m,v)}}function G(e,t,n,o){var i,r,a,l=F(e);if(l&&ne(l,t,n,!1)&&0<l.regions.length){o&&o._text&&y(e,l,!0),l.selection=le(t,n,!1);var s=function(e,t,n){for(var o=Le(Math.min(t.x,n.x),Math.min(t.y,n.y)),i=Le(Math.max(t.x,n.x),Math.max(t.y,n.y)),r=De({x:o.x,y:o.y,width:i.x-o.x,height:i.y-o.y}),a=De({x:0,y:o.y,width:e.bounds.width,height:i.y-o.y}),l=t,s=n,c=null,u=null,d=null,h=null,f=0;f<e.regions.length&&(!c||!u);f++){var p=e.regions[f].bounds;Se(a,p)&&(d=!d||re(e.regions[f],d)?e.regions[f]:d),Se(r,p)&&(c=!c&&Me(l,e.regions[f].bounds)?e.regions[f]:c,u=!u&&Me(s,e.regions[f].bounds)?e.regions[f]:u,h=!h||oe(e.regions[f],h)?e.regions[f]:h)}if(c&&u){if(re(u,c)){var g=u;u=c,c=g,l=n,s=t}}else if(d&&h){var m;c?(m=ie(s),re(c,m)?(u=h,s=null):(u=c,s=l,c=d,l=null)):u?(m=ie(l),oe(u,m)?(c=d,l=null):(c=u,l=s,u=h,s=null)):(c=d,u=h,l=s=null),l=l||Ve(c),s=s||He(u)}return{start:c,startPoint:l,end:u,endPoint:s}}(l,t,n);if(s&&s.start&&s.end)for(var c=be(o,l),u=0;u<l.regions.length;u++){var d=l.regions[u],h=null;d===s.start?h=d===s.end?Q(c,d,s.startPoint,s.endPoint):Q(c,d,s.startPoint,He(d)):d===s.end?h=Q(c,d,Ve(d),s.endPoint):(i=d,r=s.start,a=s.end,oe(i,r)&&re(i,a)&&(h=Q(c,d,Ve(d),He(d)))),h&&h.lines&&0<h.lines.length&&(ae(l.selection.regions,h),S.selectionCache[e]=l)}}}function Q(e,t,n,o){var i={lines:[],bounds:Qt.extend({},t.bounds)},r=F(t.page).bounds;if(0!==t.rotation&&(n=Ne(n,r,360-t.rotation),o=Ne(o,r,360-t.rotation)),ke(n.y,o.y)){var a=n;n=o,o=a}for(var l=0;l<t.lines.length;l++){var s=t.lines[l],c={words:[]},u=Pe(s,r,t.rotation),d=ke(u.y,n.y)&&Te(u.bottom,o.y),h=!d&&Ee(n.y,u.y,u.bottom),f=!d&&Ee(o.y,u.y,u.bottom);if(h&&1<l){var p=Pe(t.lines[l-1],r,t.rotation);d=!(h=!Ee(n.y,p.y,p.bottom))&&!f}if(f&&l<t.lines.length-1){var g=Pe(t.lines[l+1],r,t.rotation);f=!Ee(o.y,g.y,g.bottom),d=!h&&!f}if(d||h||f){for(var m=0;s.words&&m<s.words.length;m++){var v=s.words[m],b=Pe(v,r,t.rotation),x=v.glyphs&&v.glyphs.length,y=d;if(!y){if(h&&f){if(ke(n.x,o.x)){var _=n;n=o,o=_}y=ke(x?b.x:b.right,n.x)&&Te(x?b.right:b.x,o.x)}else h?y=ke(x?b.x:b.right,n.x):f&&(y=Te(x?b.right:b.x,o.x));if(!y&&x){var w=null;if(h&&Ee(n.x,b.x,b.right)){var z=f?Math.min(b.right,o.x):b.right;w=J(v,n.x,z)}f&&Ee(o.x,b.x,b.right)&&(w=J(v,h?Math.max(b.x,n.x):b.x,o.x)),w&&(v=w,y=!0)}}y&&(c.words.push(Qt.extend({},v)),e&&te(e,v.bounds.x,v.bounds.y,v.bounds.width,v.bounds.height))}0<c.words.length&&i.lines.push(c)}}return i}function J(e,t,n){for(var o=null,i=null,r=0;r<e.glyphs.length;++r){var a=e.glyphs[r].normalizedBounds;if(null===o&&ke(a.right,t)&&(o=r),!Te(a.x,n))break;i=r}return null!==o&&null!==i?K(e,o,i):null}function K(e,t,n){var o={glyphs:[],text:"",omitSpace:e.omitSpace};if(0<=t&&t<=n&&e.glyphs[n]){o.glyphs=e.glyphs.slice(t,n+1);var i=e.glyphs[t].bounds,r=e.glyphs[n].bounds,a=Math.min(i.x,r.x),l=Math.min(i.y,r.y),s=Math.max(i.right,r.right),c=Math.max(i.bottom,r.bottom);return o.bounds={x:a,y:l,width:Math.abs(s-a),height:Math.abs(c-l)},De(o.bounds),o}return null}function $(e,t,n,o){var i=F(e);if(i&&ne(i,t,n,!0)&&0<i.regions.length){o&&o._text&&y(e,i,!0);var r=Ae(e,i,t),a=Ae(e,i,n);i.selection=le(t,n,!0);var l=De({x:Math.min(r.x,a.x),y:Math.min(r.y,a.y),width:Math.abs(a.x-r.x),height:Math.abs(a.y-r.y)});if(l=Ie(l,i.bounds)){for(var s,c=0;c<i.regions.length;c++)if(Se(l,i.regions[c].bounds)){s=s||be(o,i);for(var u={lines:[],bounds:Qt.extend({},i.regions[c].bounds)},d=0;d<i.regions[c].lines.length;d++){for(var h=i.regions[c].lines[d],f={words:[]},p=0;h.words&&p<h.words.length;p++){var g=h.words[p];if(Se(l,g.bounds)){var m=De(Be(l,i.bounds,(360-i.regions[c].rotation)%360)),v=g.normalizedBounds,b=ke(v.x,m.x),x=Te(v.right,m.right);b&&x||(g=J(g,Math.max(v.x,m.x),Math.min(v.right,m.right))),g&&(f.words.push(Qt.extend({},g)),s&&te(s,g.bounds.x,g.bounds.y,g.bounds.width,g.bounds.height))}}0<f.words.length&&u.lines.push(f)}u.lines.length&&ae(i.selection.regions,u)}i.selection.regions.length&&(i.selection.bounds=l,S.selectionCache[e]=i)}}}function ee(e,t){if(t){if(t.rotation%180!=0)return De({x:(e.right+e.x)/2,y:e.y,width:0,height:e.height});var n=(e.bottom+e.y)/2;return De({x:e.x,y:n,width:e.width,height:0})}return null}function te(e,t,n,o,i,r){e&&(e.clearRect(t,n,o,i),r=r||u.selection,e.fillStyle=r.color,e.globalAlpha=r.alpha,e.fillRect(t,n,o,i))}function ne(e,t,n,o){return o=!!o,!e.selection||!Ce(e.selection.origin,t)||!Ce(e.selection.point,n)||o!==e.selection.rectangular}function oe(e,t){if(ke(e.bounds.bottom,t.bounds.y)){if(Fe(e.bounds,t.bounds))return e.bounds.x>t.bounds.x;var n=Ie(e.bounds,t.bounds);if(n)return 1<=n.width/n.height?ke(e.bounds.y,t.bounds.y):ke(e.bounds.x,t.bounds.x);if(ke(e.bounds.y,t.bounds.bottom))return!0;if(Te(e.bounds.bottom,t.bounds.y))return!1;if(ke(e.bounds.x,t.bounds.x))return!0}return!1}function ie(e){return{lines:[],bounds:De({x:e.x,y:e.y,width:0,height:0})}}function re(e,t){return!oe(e,t)}function ae(e,t){for(var n=0;n<e.length&&!re(t,e[n]);n++);Array.prototype.splice.call(e,n,0,t)}function le(e,t,n){return{origin:e,point:t,rectangular:!!n,regions:[]}}function se(e,t,n){return"function"==typeof t&&(n=t,t=0),ce(e,0,C._controllers.document.getPageCount()-1,t,n)}function ce(e,t,n,o,i){var r=this,a=C._controllers.document.getPageCount(),l=!1,s=function(e,t){if(Ue(this,r),l)return null;var n=!1,o=e;return"string"==typeof e&&(o=Qe(e),n=!0),null===o&&!n||void 0===o||"number"==typeof o?o:(p("searchOnPages",t+" page '"+JSON.stringify(e)+"' is not a correct page index."),l=!0,null)}.bind(this),c=s(t,"Start"),u=s(n,"End"),d=s(o,"Active");if(l)return null;if(dn(c)||(c=0),dn(u)||(u=a-1),dn(d)||(d=c),c<0||a<=c)return p("searchOnPages","Start page "+c+" is out of range."),null;if(u<0||a<=u)return p("searchOnPages","End page "+u+" is out of range."),null;if(u<c)return p("searchOnPages","Start page is greater than end page."),null;if(d<c||u<d)return p("searchOnPages","Active page "+d+" is out of range."),null;if(null!=e&&"string"!=typeof e)return p("searchOnPages","Text to search value "+JSON.stringify(e)+" is not a valid text to search."),null;if(null!=i&&"function"!=typeof i)return p("searchOnPages","Callback value "+JSON.stringify(i)+" is not a valid callback function."),null;if(de(),e&&2<e.length&&i){var h={sourceQuery:e,text:e.toLocaleLowerCase(),start:c,end:u,active:d},f=new ue(S.searchQuery=h,i);return S.searchQuery.iterator=f}return M.forEach(function(e){Ue(this,r),e._index>=c&&e._index<=u&&I(e._index,e)}.bind(this)),null}
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
   */function ue(c,o){var u,d=3,h=c.start,f=c.end,p=c.active,g=-1,m=-1,v=0,b=this,x=[],t=[],y=T(-1);function i(e){t.push({action:_,args:[!0,D(e)]}),n()}
/**
     * Advances current item to the previous query match or adds operation to the queue in case if next match is currently awaited.
     * @param {TextSearchCallback} callback - Function that that is called when previous match is found.
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#prev
     */function n(){if(!u&&t.length){var e=t.shift();e&&"function"==typeof e.action&&e.action.apply(b,e.args)}}function _(n,o){if(w()){var e=n?1:-1,t=F(g);if(t&&t.searchResult&&t.searchResult.length&&(n?-1<=m&&m<v-1:0<m&&m<=v)){m+=e;var i=t.searchResult[m];y=T(g,i),Z(g,i);var r=t?t.rotation:0,a=C.getViewerTransform(g,r),l=ee(i.bounds,t.regions[i.region]),s=Le(a.x(l.x,l.y),a.y(l.x,l.y));C.showPagePoint(g,s,nn.Center,function(){o(b,T(g,i))})}else u=u||z(c.text,0<=g?g+e:p,n).done(function(e,t){w()?0<=e&&t&&(g=e,v=t.searchResult.length,m=n?-1:v,_(n,o)):o(b,null)}).fail(function(){o(b,null)})}else o(b,null)}
/**
     * Gets the query text for this iterator.
     * @returns {string}
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getQuery
     */function w(){var e=S.searchQuery===c;return e||r(),e}
/**
     * Indicates whether this is executing background search.
     * If `true`, subsequent next/prev calls are stored into the search queue.
     *
     * Method could be used, for example, to determine whether search will be continued after particular callback call, and thus to hide or preserve search loading mask.
     *
     * @returns {boolean}
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isSearching
     */function z(t,n,o,i,r){var a;return i=i||Qt.Deferred(),w()&&setTimeout(function(){for(;h<=n&&n<=f;n+=o?1:-1){var e=F(n);if(e&&!e.loading){if(e.searchResult=P(e,c.text),0<e.searchResult.length)return void i.resolve(n,e)}else{if(e&&e.loading&&e.promise)return void l(t,n,o,i,r,e);if(!e){if(x[n])continue;return a=!0,void s(t,n,o,i)}}}if(b.wrap&&!a&&!r)return n<h&&!o?n=f:f<n&&o&&(n=h),void z(t,n,o,i,!0);i.reject()},0),i.promise()}function l(e,t,n,o,i,r){r.promise.then(function(){z(e,t,n,o,i)})}function s(i,e,r,a){var t,n,o,l,s,c=function(e,t){for(var n=e,o=null,i=[];h<=n&&n<=f&&i.length<=20;n+=t?1:-1){var r=null,a=C._controllers.document.getPageDefinition(n),l=a.index;if(a.uri&&(r=a.uri),o!==r&&n!==e)break;o=r;var s={i:l};l!==n&&(s.di=n),i.push(s);var c=F(n);if(c&&!c.loading)break}return{textUrl:o||k.config.documenturl,pages:i}}(e,r);c.pages.length?(t=i,n=c,o=d,l=Qt.Deferred(),s={type:"pagetextsearch",serverurl:k.config.serverurl,query:"?pagetextsearch=",method:"POST",data:{atala_query:t,atala_docurl:n.textUrl,atala_maxcount:o||d,atala_pages:JSON.stringify(n.pages)},cancel:!1},C.makeHandlerRequest(s,function(e){if(w()){var t=-1;if(e&&e.searchResults&&e.searchResults.length)for(var n=0;n<e.searchResults.length;n++){var o=e.searchResults[n],i=o.hasOwnProperty("di")?o.di:o.i,r=F(i);!r&&o.text&&(C._controllers.document.updatePageText(i,o.text),me({pageText:o.text,customData:e.customData},o.text,i)),o.count<=0&&t<0?r?r.searchResult=[]:x[i]=[]:t<0&&0<o.count&&(t=i)}l.resolve(0<=t?t:null)}else l.reject()},function(){l.reject()}),l.promise()).done(function(e){if(null===e)if(w()){var t=c.pages[c.pages.length-1],n=t.hasOwnProperty("di")?t.di:t.i;z(i,n,r,a)}else a.reject();else{var o=F(e);a.resolve(e,o)}}).fail(function(){a.reject()}):a.reject()}function P(e,t){var n=t.length,o=[];if(e.searchResult)o=e.searchResult;else for(var i=0;i<e.regions.length;i++)for(var r=0;r<e.regions[i].lines.length;r++){for(var a=e.regions[i].lines[r],l=0,s=[],c="",u=0;u<a.words.length;u++){var d=a.words[u],h=d.glyphs&&d.glyphs.length;Oe(d,1<=u?a.words[u-1]:null)&&(c+=" ",++l);for(var f=0;f<(h?d.glyphs.length:d.text.length);f++)s[l++]={bounds:h?d.glyphs[f].bounds:d.bounds,region:i,line:r,word:u,glyph:f},c+=(h?d.glyphs[f].text:d.text[f]).toLocaleLowerCase()}var p=0;do{if(0<=(p=c.indexOf(t,p))){for(var g=s[p],m=Math.min(p+n-1,s.length);!s[m]&&p<m;)--m;var v=s[m],b=De({x:g.bounds.x,y:g.bounds.y,width:Math.abs(v.bounds.right-g.bounds.x),height:Math.abs(v.bounds.bottom-g.bounds.y)});o.push({bounds:b,region:g.region,line:g.line,word:g.word,glyph:g.glyph,endWord:v.word,endGlyph:v.glyph})}}while(0<=p++)}return o}function r(){E.off("pagetextloaded",e),k.unbind({pageshown:a}),x=[]}function e(e){var t=e.text,n=e.index;if(w()&&t&&h<=n&&n<=f&&(t.searchResult=P(t,c.text),x[n]&&Array.prototype.splice.call(x,n,1),t.searchResult.length)){var o=C.findPageFromIndex(n);o&&I(n,o)}}function a(e){if(w()&&e.page&&e.index>=h&&e.index<=f){var t=F(e.index);!t||t.loading||t.searchResult||setTimeout(function(){t.searchResult=P(t,c.text),I(e.index,e.page)},0)}}function D(e){return function(){u=null,e&&e.apply(this,arguments),n()}}function T(e,t){return{page:e,region:t?t.region:0,line:t?t.line:0,word:t?t.word:0}}
/**
       * Indicates whether search should be wrapped around when first or last document page is match is reached.
       * @name Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#wrap
       * @type {boolean}
       */
b.wrap=!0,E.on("pagetextloaded",e),k.bind({pageshown:a}),setTimeout(function(){for(var e=0;e<M.length;e++){var t=M[e]._index;if(!(t<h||f<t)){var n=F(t);n&&!n.loading&&(n.searchResult=P(n,c.text),n.searchResult.length&&(I(t,M[e]),t===p&&(v=n.searchResult.length,g=p)))}}i(o)},0),
/**
     * Advances current item to the next query match or adds operation to the queue in case if next match is currently awaited.
     * @param {TextSearchCallback} callback - function that that is called when next match is found.
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#next
     */
b.next=i,b.prev=function(e){t.push({action:_,args:[!1,D(e)]}),n()},b.getQuery=function(){return c.sourceQuery}
/**
     * Indicates whether this iterator corresponds to the active search.
     *
     * If `false`, next/prev methods are always returning `null` match.
     * @returns {boolean}
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isValid
     */,b.isValid=w,b.isSearching=function(){return w()&&(u||0<t.length)}
/**
     * Returns the formatted text for the whole line containing current match.
     * @returns {string}
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getCurrentLineText
     */,b.getCurrentLineText=function(){if(w()&&y&&0<=y.page){var e=F(y.page);if(e&&e.regions[y.region]&&e.regions[y.region].lines[y.line])return U(e.regions[y.region].lines[y.line])}return null},
/**
     * Disposes the current iterator. Calling this method is optional. Abandoned iterators will be disposed automatically.
     * @ignore
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#dispose
     */
b.dispose=r}function de(){for(var e=[],t=0;t<C._controllers.document.getPageCount();t++){var n=F(t);n&&n.searchResult&&(n.searchResult.length&&(e[t]=!0),n.searchResult=null)}for(var o=0;o<M.length;++o)e[o]&&I(o,M[o]);S.searchQuery=null}function he(e,t){return{type:"textdata",serverurl:e,query:"?atalatextdata=",method:"GET",data:{atala_docurl:t},cancel:!1,info:{ocr:{},error:void 0}}}function fe(e,t){function n(e){pe(e),"function"==typeof t&&t.call()}b(),C.makeHandlerRequest(e,n,n)}function pe(e){if(e){if(e.error&&(p("TextLoadError",e.error),b()),e.text.pages)for(var t=0;t<e.text.pages.length;++t)xe(e.text.pages[t],t);C._controllers.document.initDocumentText(e.text),s({type:"textloaded"})}}function ge(r){var a=Qt.Deferred(),l=F(r),s=C._controllers.document.getPageDefinition(r);if(!l&&s){l={loading:!0,regions:[],promise:a},C._controllers.document.updatePageText(r,l);var c=s.uri||k.config.documenturl,u=k.config.serverurl;setTimeout(function(){var t,n,o,e={type:"pagetextdata",serverurl:u,query:"?atalapagetext=",method:"GET",data:{atala_docurl:c,atala_index:s.index},cancel:!1,info:{page:l,error:void 0}},i=(t=l,n=r,o=a,function(e){me(e,t,n,o)});C.makeHandlerRequest(e,i,i)},0)}else a.resolve(r,l);return a.promise()}function me(e,t,n,o){if(e&&e.pageText)if(t.promise===o&&(t.loading=!1,t.promise=void 0),e.error)p("TextLoadError",e.error),t.regions=[],o&&o.reject&&o.reject(n);else{xe(e.pageText,n),t.regions=e.pageText.regions?e.pageText.regions:[],Qt.extend(t,e.pageText);var i={type:"pagetextloaded",index:n,text:t,customData:e.customData};!function(){E.trigger.apply(E,arguments)}(i),s(i),o&&o.resolve&&o.resolve(n,t)}}function ve(e){for(var t=0;t<M.length;t++)if(M[t]._index===e)return M[t];return null}function be(e,t){if(e&&e._text){var n=e._text[0];if(n.getContext){var o=n.getContext("2d"),i=t?t.rotation:0,r=C.getViewerTransform(e._index,i);return o.setTransform(r.a,r.b,r.c,r.d,r.e,r.f),o}}return null}function xe(e,t){if(e){ze(e),e.regions=e.regions||[],e.rotatedRegions=[],e.rotation=e.rotation||0;for(var n=e.regions.length-1;0<=n;--n)e.regions[n].page=t,ye(e.regions[n],e.bounds)?(e.regions[n].index=n,e.regions[n].rotation&&e.rotatedRegions.push(e.regions[n])):Array.prototype.splice.call(e.regions,n,1);e.regions.sort(function(e,t){return re(e,t)?-1:1})}}function ye(e,t){if(!ze(e))return!1;e.rotation=e.rotation||0,e.lines=e.lines||[];for(var n=e.lines.length,o=e.lines.length-1;0<=o;--o)_e(e.lines[o],t,e.rotation)||Array.prototype.splice.call(e.lines,o,1);return 0<n&&0===e.lines.length&&p("TextLoadError","Invalid region data received."),!(0<n)||0<e.lines.length}function _e(e,t,n){if(!ze(e,t,n))return!1;e.words=e.words||[];for(var o=e.words.length,i=e.words.length-1;0<=i;--i)we(e.words[i],t,n)||Array.prototype.splice.call(e.words,i,1);return!(0<o)||0<e.words.length}function we(e,t,n){if(!ze(e,t,n))return!1;e.glyphs=e.glyphs||[],e.text=e.text||"",e.os&&(e.omitSpace=e.os,delete e.os);for(var o=e.glyphs.length-1;0<=o;--o)ze(i=e.glyphs[o],t,n)&&i.text||Array.prototype.splice.call(e.glyphs,o,1);var i;return!0}function ze(e,t,n){var o=!1;if(e)if(e.b&&"string"==typeof e.b){var i=e.b.split(";");e.bounds={x:parseFloat(i[0]),y:parseFloat(i[1]),width:parseFloat(i[2]),height:parseFloat(i[3])},delete e.b,o=!0}else e.bounds&&e.bounds.hasOwnProperty("x")&&e.bounds.hasOwnProperty("y")&&e.bounds.hasOwnProperty("width")&&e.bounds.hasOwnProperty("height")&&(De(e.bounds),o=!0);else e={};return e.bounds||(e.bounds={x:0,y:0,width:0,height:0}),De(e.bounds),e.bounds&&(e.normalizedBounds=Pe(e,t,n)),o}function Pe(e,t,n){if(!e.normalizedBounds){if(n%360==0)return e.normalizedBounds=e.bounds,e.normalizedBounds;e.normalizedBounds=De(Be(e.bounds,t,360-n))}return e.normalizedBounds}function De(e){return e.right=e.x+e.width,e.bottom=e.y+e.height,e}function Te(e,t){return e<t+a}function ke(e,t){return t-a<e}function Ce(e,t){return e&&t&&e.x===t.x&&e.y===t.y}function Ee(e,t,n){return ke(e,t)&&Te(e,n)}function Me(e,t){return!!t&&Ee(e.x,t.x,t.right)&&Ee(e.y,t.y,t.bottom)}function Se(e,t){return!(!e&&!t)&&(ke(e.right,t.x)&&ke(t.right,e.x)&&ke(e.bottom,t.y)&&ke(t.bottom,e.y)||Fe(e,t))}function Fe(e,t){if(!e&&!t)return!1;var n=e.width>t.width?e:t;return t=n===e?t:e,Te(n.x,t.x)&&ke(n.right,t.right)&&Te(n.y,t.y)&&ke(n.bottom,t.bottom)}function Ie(e,t){if(!Se(e,t))return null;var n={x:Math.max(e.x,t.x),y:Math.max(e.y,t.y),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)};return n.x<n.right&&n.y<n.bottom?(n.width=Math.abs(n.right-n.x),n.height=Math.abs(n.bottom-n.y),n):null}function Ae(e,t,n){var o=C.getViewerTransform(e,t.rotation?t.rotation:0).invert();return Le(o.x(n.x,n.y),o.y(n.x,n.y))}function Oe(e,t){return!(!e||!t||t.omitSpace)}function Ve(e){return Le(e.bounds.x,e.bounds.y)}function He(e){return Le(e.bounds.right,e.bounds.bottom)}function Le(e,t){return{x:e,y:t}}i.createHandlerRequest=he,i.makeHandlerRequest=fe,i.loadText=pe,i.loadPageText=function(e,t,n){fe(he(e,t),n)},"Atalasoft.Controls.WebDocumentViewer"===k.typeOf&&Qt.extend(k,r),k.bind({pagerecycled:d,pageshown:h,zoomchanged:c,documentchanged:m}),E.on({textselectstart:w,textselectmove:R,textselectend:j,textselectcopy:B})},ke=function(){var e=this,t=Qt({}),a={tapped:!1,touching:!1,pinching:!1,zooming:!1,textselection:!1,origin:{x:0,y:0},point:{x:0,y:0},delta:{x:0,y:0},drawing:!1,moves:0,prpt:0},l=null,i=$t.None,n=$t.None,o=null;function s(){return t.trigger.apply(t,arguments),e}function r(){a&&(a.drawing=!0)}function c(){a&&(a.drawing=!1)}function u(){a.zooming=!1}function d(e){if(!a.prmt)return s({type:"panstart",x:e.clientX,y:e.clientY}),document.addEventListener("mousemove",h),document.addEventListener("mouseup",f),document.addEventListener("ondrag",K),!1}function h(e){if(e=null==e?event:e,!a.prpt){if(0!==e.which)return s({type:"panmove",x:e.clientX,y:e.clientY}),!1;f()}}function f(){if(!a.prpt)return document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",f),document.removeEventListener("ondrag",K),s({type:"panend"}),!1}function p(e){if(a.prmt)return!1;e.stopPropagation();var t={handled:!1,complete:!1};return s({type:"textselectstart",toolEvent:e,eventData:t}),t.complete||(a.textselection=!0,document.addEventListener("mouseup",m),document.addEventListener("mousemove",v),document.addEventListener("ondrag",K)),!1}function g(e){return!!a.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectmove",toolEvent:e,eventData:{handled:!1,selecting:a.textselection}}),!1):(m(e),!0))}function m(e){return a.prmt||!a.textselection||(a.textselection=!1,document.removeEventListener("mouseup",m),document.removeEventListener("mousemove",v),document.removeEventListener("ondrag",K),s({type:"textselectend",toolEvent:e,eventData:{handled:!1}})),!1}function v(e){if(a.textselection)return!!a.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectscroll",toolEvent:e}),!1):(m(e),!0))}function b(e){67===e.keyCode&&e.ctrlKey&&s({type:"textselectcopy",toolEvent:e})}function x(e){return!!a.prmt||(s({type:i===$t.Selection?"selectstart":"zoomareastart",x:e.clientX,y:e.clientY,toolEvent:e}),(o=Qt(e.target))._binds={mousemove:y,mouseup:_,ondrag:K},o.on(o._binds),!1)}function y(e){return e=null==e?event:e,!!a.prpt||(0!==e.which?(s({type:i===$t.Selection?"selectmove":"zoomareamove",x:e.clientX,y:e.clientY,toolEvent:e}),!1):void _())}function _(e){if(!a.prpt)return o.off(o._binds),o=null,s({type:i===$t.Selection?"selectend":"zoomareaend",toolEvent:e}),!1}function w(e){return e=null==e?event:e,A(e)}function z(){}function P(e){return e=null==e?event:e,O(e)}function D(e){return 2===(e=null==e?event:e).button?L(e):H(e),V(e)}function T(e){return e=null==e?event:e,I(e)}function k(e){return e=null==e?event:e,R(e)}function C(){A=i===$t.PassThrough?$:K,O=n===$t.PassThrough?$:K,R=I=L=H=V=$}function E(){}function M(){}function S(){}function F(){}C(),e.events={viewport:{click:w,dblclick:z,mousedown:D,mousemove:T,mouseout:E,mouseover:M,mouseup:S,contextmenu:P,mousewheel:F,keydown:k}},Kt.Features.Touch&&Qt.extend(!0,e.events,{viewport:{touchstart:q,touchmove:U,touchend:W},wdv:{annotationdrawstart:r,annotationdrawend:c,annotationdragstart:r,annotationdragend:c}}),e.dispose=function(){a&&(a=null),l&&(l=null),e=null},e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=s,e.setTool=function(e,t){switch(i=e,n=t,C(),i){case $t.None:A=K;break;case $t.Pan:H=d;break;case $t.ZoomIn:A=j;break;case $t.ZoomOut:A=B;break;case $t.Selection:case $t.ZoomArea:H=x;break;case $t.PassThrough:break;case $t.Text:H=p,I=g,R=b}switch(n){case $t.None:break;case $t.Pan:L=d;break;case $t.ZoomIn:O=j;break;case $t.ZoomOut:O=B;break;case $t.Selection:case $t.ZoomArea:L=x;break;case $t.PassThrough:}},e.getTool=function(){return{primary:i,secondary:n}},e.pauseTool=function(){a.prpt++},e.resumeTool=function(){0<a.prpt&&a.prpt--};var I=function(){},A=function(){},O=function(){},V=function(){},H=function(){},L=function(){},R=function(){};function j(e){if(!a.prpt)return N(e,!1),!1}function B(e){if(!a.prpt)return N(e,!0),!1}function N(e,t){if(!a.prpt)return s({type:"clickzoom",x:e.clientX,y:e.clientY,zoomout:t}),!1}function q(e){var t;a.prpt||a.drawing||a.pinching||Qt(e.target).is(".ui-menu,.ui-menu-item,.ui-corner-all")||(e.preventDefault(),2===(a.e=e).originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(o)if(null==t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches)?(Y(),a.touching=!1,function(e){if(!a.prpt){e.stopPropagation(),a.pinching=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1];l={start:J(t.clientX,t.clientY,n.clientX,n.clientY)},s({type:"zoomstart",touches:e.originalEvent.touches})}}(e)):i===$t.Text?p(e):1===e.originalEvent.touches.length&&(a.touching=!0,a.point.x=e.originalEvent.touches[0].pageX,a.point.y=e.originalEvent.touches[0].pageY,a.hold=setTimeout(X,1500),t={x:a.point.x,y:a.point.y},i===$t.Pan&&(t.type="panstart",s(t))))}function U(e){var t;if(!a.prpt&&!a.drawing)if(e.preventDefault(),a.e=e,a.pinching)!function(e){if(!a.prpt&&(e.stopPropagation(),!a.zooming)){a.zooming=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1],o=J(t.clientX,t.clientY,n.clientX,n.clientY,l.start),i=o.x/l.start.x,r=o.y/l.start.y;setTimeout(u,40),s({type:"zoommove",touches:e.originalEvent.touches,scale:i,scalex:i,scaley:r,dx:o.dx,dy:o.dy})}}(e);else if(a.touching){var n=e.originalEvent.touches[0];a.moves++,a.touching=!0,t={x:n.pageX,y:n.pageY},i===$t.Pan&&(t.type="panmove",s(t))}else a.textselection&&g(e)}function W(e){var t,n,o;a.prpt||a.drawing||(e.preventDefault(),a.pinching?(o=e,a.prpt||(o.stopPropagation(),a.pinching=!1,s({type:"zoomend",touches:o.originalEvent.touches}),1===o.originalEvent.touches.length&&q(o))):a.textselection?m(e):(a.touching=!1,Y(),0<a.moves?(a.moves=0,n={},i===$t.Pan&&(n.type="panend",s(n))):a.tapped?((t=e).type="fit",s(t)):(a.tapped=!0,setTimeout(Z,300))))}function Z(){a.tapped=!1}function X(){if(0<a.moves&&null!=a.e){var e=G(a.e);Math.abs(a.point.x-e.x)<5&&Math.abs(a.point.y-e.y)<5&&(a.moves=0)}0===a.moves&&a.touching&&s({x:a.point.x,y:a.point.y,type:"contextmenu"})}function Y(){null!=a.hold&&(clearTimeout(a.hold),a.hold=null)}return e},_n=function(e,t,n,o,i){var r=this,a=e,l=t,s=(t?t._internalEvents:null)||Qt({}),u=50,c=n,d=o,h=c.parents("."+a.domclasses.atala_main_container).first(),f=$t.Pan,p=$t.None,g=null,m=1,v="",b=null,x="",y=[],_=1e3,w=null,z=-1,P=null,D={allowflick:!0,text:{scrolltriggerarea:on.Normal,innerscrolldelta:10,outerscrolldelta:20}};
/**
   * Internal events for conditional input handling.
   */
r.events=T;var T={textselectstart:"textselectstart",textselectmove:"textselectmove",textselectend:"textselectend",textselectcopy:"textselectcopy"};function k(){return s.trigger.apply(s,arguments),r}function C(e,t){switch(g.setTool(e,t),n=e,o=t,f!==$t.Text&&p!==$t.Text||n===$t.Text||o===$t.Text||l.resetDrawLayer(),n!==$t.Selection&&n!==$t.ZoomArea&&(f=n),o!==$t.Selection&&o!==$t.ZoomArea&&(p=o),e){case $t.None:E(je.Arrow);break;case $t.Pan:E(je.Move);break;case $t.ZoomIn:E(je.ZoomIn);break;case $t.ZoomOut:E(je.ZoomOut);break;case $t.Selection:if(!a.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,E(je.Crosshair);break;case $t.ZoomArea:if(!a.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,E(je.Crosshair);break;case $t.Text:if(!a.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),E(je.Text);break;default:E(je.Arrow)}var n,o}function E(e){var t=""===v?"?atalacsr=":v;b="%2"===e?b=x:e.replace("%1",t),c.css({cursor:b})}function M(e){a.fit(e.fit)}function S(e){e.zoomout?a.zoomOut():a.zoomIn()}function F(e){d.data("ox",d.scrollLeft()+e.x).data("oy",d.scrollTop()+e.y),d.stop()}function I(e){d.scrollLeft(d.data("ox")-e.x),d.scrollTop(d.data("oy")-e.y),D.allowflick&&(y.push({x:e.x,y:e.y,time:(new Date).getTime()}),10<y.length&&y.shift())}function A(){if(D.allowflick){if(1<y.length){var e=(new Date).getTime(),t=y.pop();if(e-t.time<100){var n=y.shift(),o=-n.time+t.time;d.animate({scrollLeft:d.scrollLeft()+Math.round((n.x-t.x)/o*250),scrollTop:d.scrollTop()+Math.round((n.y-t.y)/o*250)},_,"easeOutQuad")}}y.length=0}}function O(e){(w=l.getActivePage())&&w._rubberband.startSelect(e)}function V(e){(w=l.getActivePage())&&w._rubberband.moveSelect(e)}function H(e){(w=l.getActivePage())&&(w._rubberband.endSelect(e),"zoomareaend"===e.type&&(w._rubberband.hide(),w._rubberband.zoomToSelection())),0==--z&&(z=-1,l.resetDrawLayer(),C(f,p))}function L(){l.zoomStart(),m=a.getZoom()}function R(e){var t=m*e.scale;l.zoom(t)}function j(){l.zoomEnd()}function B(e){var t=Y(e);if(t){var n=e.toolEvent&&e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent;if(t.cursor=b,t.complete=!1,t.rectangular=!!n&&n.altKey,t.interval=!!n&&n.shiftKey,!t.rectangular&&!t.interval){var o=n&&n.detail?n.detail%3:1;1!==o&&(t.word=2===o,t.line=0===o)}k({type:T.textselectstart,eventData:t}),e.eventData.handled=t.handled,t.complete&&t.handled&&(q(e),e.eventData.complete=!0)}}function N(e){Z();var t=Y(e);if(t){t.cursor=b,t.selecting=e.eventData.selecting,k({type:T.textselectmove,eventData:t}),e.eventData.handled=t.handled;var n=t.handled&&t.cursor?t.cursor:je.Arrow;n!==b&&E(n),e.eventData.handled&&e.eventData.selecting&&e.toolEvent&&e.toolEvent.target&&X(e)}}function q(e){Z();var t=Y(e);t&&(k({type:T.textselectend,eventData:t}),e.eventData.handled=t.handled)}function U(e){Z(),X(e)}function W(){D.text.hookcopy&&k({type:T.textselectcopy})}function Z(){P&&(clearTimeout(P),P=null)}function X(e){if(Z(),e&&e.toolEvent){var t=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,n=h.offset(),o=null;if(void 0!==t.pageX&&void 0!==t.pageY?o=t:t.touches&&1===t.touches.length&&void 0!==t.touches[0].pageX&&void 0!==t.touches[0].pageY&&(o=t.touches[0]),o){var i=o.pageX-n.left,r=o.pageY-n.top,a=h.width(),l=h.height(),s=0,c=0;r<l*D.text.scrolltriggerarea&&0<d.scrollTop()?s=0<r?-D.text.innerscrolldelta:-D.text.outerscrolldelta:r>l*(1-D.text.scrolltriggerarea)?s=r<l?D.text.innerscrolldelta:D.text.outerscrolldelta:i<a*D.text.scrolltriggerarea&&0<d.scrollLeft()?c=0<i?-D.text.innerscrolldelta:-D.text.outerscrolldelta:i>a*(1-D.text.scrolltriggerarea)&&(c=i<a?D.text.innerscrolldelta:D.text.outerscrolldelta),(s||c)&&D.text.scrolltriggerarea!==on.None&&(d.scrollTop(d.scrollTop()+s),d.scrollLeft(d.scrollLeft()+c),P=setTimeout(X,u,e))}}}function Y(e){var t={cursor:null,handled:!1};if(e&&e.toolEvent){var n=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,o=function(e){var t=Qt(e).parents("."+a.domclasses.atala_page_div).first();if(t){var n=t.attr(a.domattributes.atala_page_index);return parseInt(n,10)}return null}(n.touches&&1===n.touches.length?document.elementFromPoint(n.touches[0].clientX,n.touches[0].clientY):n.target);if(isFinite(o)&&0<=o){var i=function(e,t){var n=G(e.toolEvent?e.toolEvent:e);if(t&&t._paper){var o=Q(t._paper.canvas,t);n.x-=o.left,n.y-=o.top}return n}(e),r=function(e,t){var n=0;if(l._controllers.text){var o=l._controllers.document.getPageText(t);o&&isFinite(o.rotation)&&(n=o.rotation)}var i=l.getViewerTransform(t,n).invert();return{x:i.x(e.x,e.y),y:i.y(e.x,e.y)}}(i,o);Qt.extend(t,{page:o,point:r,viewerPoint:i})}}return t}i&&(Qt.extend(D,i),D.text.scrolltriggerarea=Math.max(0,Math.min(D.text.scrolltriggerarea,.3))),g=new ke,c.on(g.events.viewport),g.events.wdv&&a.bind(g.events.wdv),g.bind({clickzoom:S,fit:M,panstart:F,panmove:I,panend:A,zoomstart:L,zoommove:R,zoomend:j,selectstart:O,selectmove:V,selectend:H,zoomareastart:O,zoomareamove:V,zoomareaend:H,textselectstart:B,textselectmove:N,textselectend:q,textselectscroll:U,textselectcopy:W}),r.dispose=function(){g&&g.events&&(g.events.wdv&&a&&a.unbind&&a.unbind(g.events.wdv),g.events.viewport&&c&&c.off&&c.off(g.events.viewport)),y&&0<y.length&&(y.length=0),g&&g.dispose&&g.dispose(),r=a=c=d=null},r.bind=function(){return s.on.apply(s,arguments),r},r.unbind=function(){return s.off.apply(s,arguments),r},r.trigger=k,r.setTool=C,r.__getDebugInfo=function(){var e={};return Qt.extend(!0,e,{cursor:b,custom:x,flick:y,resourcepath:v,flickdelay:_,scroller:d,tool:g,toolcursors:je,tooltypes:$t,viewport:c,zoom:m}),e},r.getTool=function(){return g.getTool()},r.pauseTool=function(){return g.pauseTool()},r.resumeTool=function(){return g.resumeTool()},r.setCursor=E,r.setCustomCursor=function(e){x=e}},wn=function(e,t,n,o){var m,i,r,a,l,u=3,s=this,c=Qt({}),d=e,v={animated:!1,aspectratio:0,backcolor:"fff",forecolor:"000",movable:!0,multicolor:!0,resizable:!0,showgrips:!1,showmask:!1,showtooltip:!1,visible:!1,x:0,y:0,width:0,height:0},b={
/** Main RubberBand dom object */
rect:null,
/** Dom object underneath Main RubberBand */
rectback:null,
/** Mask objects */
mask:{top:null,bottom:null,left:null,right:null}},x={animating:!1,boundevents:null,changing:!1,colorswap:0,origin:{x:0,y:0},pagesize:{width:0,height:0},pageoffset:{x:0,y:0},vert:!1,horiz:!1,zoom:1},h=o,f=n;function p(){Z(),V()}function g(){Z(),V()}function y(){for(var c=new Array("move","nw","n","ne","w","e","sw","s","se"),i=[],t=[],r=0,a=0,e=0;e<9;e++)i[e]=new s(e),f.append(i[e].grip);function n(){for(var e=0;e<9;e++)!0===t[e]?i[e].show():i[e].hide()}function l(){for(var e=0;e<9;e++)t[e]=!0;t[0]=!0,r<8&&a<8&&(t[1]=!1),(r<12||a<12)&&(t[3]=!1,t[6]=!1),(r<16||a<8)&&(t[2]=!1,t[7]=!1),(a<16||r<8)&&(t[4]=!1,t[5]=!1),n()}function o(){!0===k()?(i[0].grip.onmousedown=R,i[0].grip.style.cursor="move"):(i[0].grip.onmousedown=K,i[0].grip.style.cursor="default");for(var e=1;e<9;e++)!0===E()?(i[e].bind({mousedown:i[e].onResize}),i[e].grip.style.cursor=c[e]+"-resize"):(i[e].off({mousedown:i[e].onResize}),i[e].grip.style.cursor="default")}function s(e){var t,n,o,i=this,r=c[e],a=!1;function l(){"move"!==r&&(!0===v.showgrips?(!0===C()?n.backgroundColor="#"+D():n.backgroundColor="#"+T(),n.border="1px solid #"+T()):(n.backgroundColor="",n.border=""))}function s(){!0===v.showgrips?(n.width="6px",n.height="6px"):(n.width="8px",n.height="8px")}t=document.createElement("div"),n=t.style,(o=Qt(t)).addClass(d.domclasses.atala_tool_selection_grip),l(),s(),i.grip=t,i.dispose=function(){r=n=t=i=null},i.setPos=function(e,t){n.left=e+"px",n.top=t+"px"},i.setSize=function(e,t){!0===M()&&"move"!==r&&(e-=2,t-=2),e<=0&&(e=1),t<=0&&(t=1),n.width=e+"px",n.height=t+"px"},i.hide=function(){a&&(n.visibility="hidden",a=!1)},i.show=function(){a||(n.visibility="visible",a=!0)},i.resetColors=l,i.resetGripSize=s,i.onResize=function(e){return function(e,t){W(e=e||event),x.vert=0,x.horiz=0,x.changing=!0;var n={x:0,y:0};switch(t){case"nw":n.x=v.x+v.width,n.y=v.y+v.height;break;case"n":n.x=v.x,n.y=v.y+v.height,x.vert=1;break;case"ne":n.x=v.x,n.y=v.y+v.height;break;case"w":n.x=v.x+v.width,n.y=v.y+v.height,x.horiz=1;break;case"e":n.x=v.x,n.y=v.y+v.height,x.horiz=1;break;case"sw":n.x=v.x+v.width,n.y=v.y;break;case"s":n.x=v.x,n.y=v.y,x.vert=1;break;case"se":n.x=v.x,n.y=v.y}x.origin.x=Math.round(n.x*x.zoom)+x.pageoffset.x,x.origin.y=Math.round(n.y*x.zoom)+x.pageoffset.y,h.raiseDrawLayer();var o={mousemove:L,mouseup:B};return null!==x.boundevents?Qt.extend(x.boundevents,o):x.boundevents=o,f.bind(o),!1}(e,r)},i.bind=function(){return o.on.apply(o,arguments),o},i.unbind=function(){return o.off.apply(o,arguments),o},n.display="block",n.position="absolute",n.visibility="hidden",n.zIndex=u,t.onclick=K,t.onselectstart=K,t.onselect=K,t.oncontextmenu=K}this.dispose=function(){for(var e=0;e<9;e++)i[e].dispose(),i[e]=null;t=i=c=null},this.setRectangle=function(e,t,n,o){r=n,a=o,i[0].setPos(e,t),i[1].setPos(e-4,t-4),i[3].setPos(e+n-4,t-4),i[6].setPos(e-4,t+o-4),i[8].setPos(e+n-4,t+o-4),i[0].setSize(n,o),v.showgrips?(i[2].setPos(e+Math.round(n/2)-4,t-4),i[4].setPos(e-4,t+Math.round(o/2)-4),i[5].setPos(e+n-4,t+Math.round(o/2)-4),i[7].setPos(e+Math.round(n/2)-4,t+o-4)):(i[2].setPos(e+4,t-4),i[4].setPos(e-4,t+4),i[5].setPos(e+n-4,t+4),i[7].setPos(e+4,t+o-4),i[2].setSize(n-8,8),i[4].setSize(8,o-8),i[5].setSize(8,o-8),i[7].setSize(n-8,8)),l()},this.resetColors=function(){for(var e=0;e<9;e++)i[e].resetColors()},this.resetGrips=function(){for(var e=0;e<9;e++)i[e].resetGripSize(),i[e].resetColors()},this.hide=function(){for(var e=0;e<9;e++)i[e].hide()},this.show=n,this.showGrips=l,(this.resetEvents=o)()}function _(e,t,n,o){var i=Qt("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function w(){var e=_("div");return e.addClass(d.domclasses.atala_tool_selection_band),e.css({position:"absolute",zIndex:u}),e}function z(){var e=_("div");return e.addClass(d.domclasses.atala_tool_selection_mask),e.hide(),e.css({left:"0px",top:"0px",width:"1px",height:"1px",position:"absolute",background:"#000",opacity:"0.6",zIndex:"0"}),e}function P(){return v.animated}function D(){return v.backcolor}function T(){return v.forecolor}function k(){return v.movable}function C(){return v.multicolor}function E(){return v.resizable}function M(){return v.showgrips}function S(){return c.trigger.apply(c,arguments),s}function F(){b.mask.left.hide(),b.mask.right.hide(),b.mask.top.hide(),b.mask.bottom.hide()}function I(){i.css({left:(v.x+v.width)*x.zoom+8+"px",top:(v.y+v.height)*x.zoom+4+"px"}),i.text(Math.round(v.width/x.zoom)+"x"+Math.round(v.height/x.zoom)),i.is(":hidden")&&i.show()}function A(){v.visible=!0,b.rectback.show(),b.rect.show(),!0===P()&&!0===C()&&function e(){!0===v.animated&&0===x.colorswap?(b.rect.css("border","1px dashed #"+D()),b.rectback.css("border","1px solid #"+T()),x.colorswap=1):(b.rect.css("border","1px dashed #"+T()),b.rectback.css("border","1px solid #"+D()),x.colorswap=0),!0!==v.animated||b.rect.is(":hidden")||x.animating||(x.animating=setTimeout(function(){x.animating=!1,e()},250))}()}function O(){v.visible=!1,F(),m.hide(),b.rectback.hide(),b.rect.hide()}function V(){var e=v.x,t=v.y,n=x.pagesize.width,o=x.pagesize.height;(n<=e||e+v.width>n)&&(e=n-v.width)<0&&(e=0),(o<=t||t+v.height>o)&&(t=o-v.height)<0&&(t=0),e!==v.x&&(v.x=e),t!==v.y&&(v.y=t);var i,r,a,l,s,c,u,d,h=Math.round(v.x*x.zoom),f=Math.round(v.y*x.zoom),p=Math.round(v.width*x.zoom),g=Math.round(v.height*x.zoom);i=h,r=f,b.rectback.css({left:i+"px",top:r+"px"}),b.rect.css({left:i+"px",top:r+"px"}),d=g,0===(u=p)&&(u=1),b.rectback.css({width:u+"px",height:d+"px"}),b.rect.css({width:u+"px",height:d+"px"}),m.setRectangle(h,f,p,g),v.visible?(A(),a=h,l=f,s=p,c=g,v.showmask?(0<l?(b.mask.top.css({left:x.pageoffset.x,top:x.pageoffset.y,width:U(),height:l}),b.mask.top.show()):b.mask.top.hide(),l+c<q()?(b.mask.bottom.css({left:x.pageoffset.x,top:x.pageoffset.y+l+c,width:U(),height:q()-(l+c)}),b.mask.bottom.show()):b.mask.bottom.hide(),0<a?(b.mask.left.css({left:x.pageoffset.x,top:x.pageoffset.y+l,width:a,height:c}),b.mask.left.show()):b.mask.left.hide(),a+s<U()?(b.mask.right.css({left:x.pageoffset.x+a+s,top:x.pageoffset.y+l,width:U()-(a+s),height:c}),b.mask.right.show()):b.mask.right.hide()):F()):O()}function H(e,t){e.stopPropagation(),e.preventDefault();var n=t||N(e),o=Math.round(x.origin.x/x.zoom),i=Math.round(x.origin.y/x.zoom),r=Math.abs((n.x-x.origin.x)/x.zoom),a=Math.abs((n.y-x.origin.y)/x.zoom);return 0<v.aspectratio&&(Math.abs((n.y-x.origin.y)/(n.x-x.origin.x))>1/v.aspectratio&&0===x.horiz||1===x.vert?r=Math.round(a*v.aspectratio):a=Math.round(r/v.aspectratio)),n.x<x.origin.x?(o-=r)-x.pageoffset.x<0&&(r=x.origin.x-x.pageoffset.x,0<v.aspectratio&&(a=Math.round(r/v.aspectratio)),o=x.origin.x-r):o+r>x.pagesize.width+x.pageoffset.x&&(r=x.pagesize.width-o+x.pageoffset.x,0<v.aspectratio&&(a=Math.round(r/v.aspectratio))),n.y<x.origin.y?(i-=a)-x.pageoffset.y<0&&(a=x.origin.y-x.pageoffset.y,0<v.aspectratio&&(r=Math.round(a*v.aspectratio)),i=x.origin.y-a,n.x<x.origin.x&&(o=x.origin.x-r)):i+a>x.pagesize.height+x.pageoffset.y&&(a=x.pagesize.height-i+x.pageoffset.y,0<v.aspectratio&&(r=Math.round(a*v.aspectratio)),n.x<x.origin.x&&(o=x.origin.x-r)),(0===x.vert||0<v.aspectratio)&&(v.x=o-x.pageoffset.x,v.width=r),(0===x.horiz||0<v.aspectratio)&&(v.y=i-x.pageoffset.y,v.height=a),V(),!0===v.showtooltip&&I(),!1}function L(e){return H(e,G(e,null,!0))}function R(e){W(e=e||event);var t=X(e);x.origin.x=t.x-Math.round(v.x*x.zoom),x.origin.y=t.y-Math.round(v.y*x.zoom),x.changing=!0;var n={mousemove:j,mouseup:B,ondrag:K};return null!==x.boundevents?Qt.extend(x.boundevents,n):x.boundevents=n,f.bind(n),!1}function j(e){W(e=e||event);var t=X(e),n={x:0,y:0};return n.x=Math.round((t.x-x.origin.x)/x.zoom),n.y=Math.round((t.y-x.origin.y)/x.zoom),n.x>x.pagesize.width-v.width&&(n.x=x.pagesize.width-v.width),n.x<0&&(n.x=0),n.y>x.pagesize.height-v.height&&(n.y=x.pagesize.height-v.height),n.y<0&&(n.y=0),v.x=n.x,v.y=n.y,V(),!1}function B(e){return W(e=e||event),!(x.changing=!1)===v.showtooltip&&i.hide(),x.changing&&(x.changing=!1,S("changed")),null!==x.boundevents&&(f.unbind(x.boundevents),x.boundevents=null,h.resetDrawLayer()),!1}function N(e){var t=G(e.toolEvent?e.toolEvent:e);if(f._paper){var n=Q(f._paper.canvas,f);t.x-=n.left,t.y-=n.top}return t}function q(){return Math.round(x.pagesize.height*x.zoom)}function U(){return Math.round(x.pagesize.width*x.zoom)}function W(e){void 0!==e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Z(){var e=f._img.getSize();x.zoom=f._img.getFitZoom(),x.pagesize.width=e.width,x.pagesize.height=e.height}return s.dispose=function(){null!=m&&(m.dispose(),m=null),s=null,b.rect=null,b.rectback=null,i=null,b.mask.top=null,b.mask.bottom=null,b.mask.left=null,b.mask.right=null},s.getAnimated=P,s.getAspectRatio=function(){return v.aspectratio},s.getBackColor=D,s.getForeColor=T,s.getHeight=function(){return v.height},s.getMovable=k,s.getMultiColor=C,s.getPosition=function(){return{x:v.x,y:v.y}},s.getRectangle=function(){return{x:v.x,y:v.y,width:v.width,height:v.height}},s.getResizable=E,s.getShowGrips=M,s.getShowMask=function(){return v.showmask},s.getShowTooltip=function(){return v.showtooltip},s.getSize=function(){return{width:v.width,height:v.height}},s.getVisible=function(){return v.visible},s.getWidth=function(){return v.width},s.bind=function(){return c.on.apply(c,arguments),s},s.hide=O,s.reset=function(){O(),v.x=0,v.y=0,v.width=0,v.height=0},s.show=A,s.synchronize=function(){V()},s.trigger=S,s.unbind=function(){return c.off.apply(c,arguments),s},s.zoomToSelection=function(){var e=h.getMaxZoom();if(d.getZoom()<e){var t,n=h.getViewportSize(),o=f._img.getFitMultiplier(),i=1,r=0,a=0;t=n.width/v.width==n.height/v.height?Math.min(n.width/(v.width*o),n.height/(v.height*o),e):n.width/v.width<n.height/v.height?Math.min(n.width/(v.width*o),e):Math.min(n.height/(v.height*o),e),i=o*t,r=Math.round(v.x*i),a=Math.round(v.y*i),a-=Math.max(0,Math.round((n.height-v.height*i)/2)),r-=Math.max(0,Math.round((n.width-v.width*i)/2));var l=h.getPageOffsets(f._index,null,null,t);d.zoom(t,function(){d.scrollTo(l.width+r,l.height+a)})}},s.startSelect=function(e){e.stopPropagation(),e.preventDefault(),Z();var t=N(e);return A(),x.origin.x=t.x,x.origin.y=t.y,v.x=Math.round(t.x/x.zoom),v.y=Math.round(t.y/x.zoom),v.width=1,v.height=1,x.changing=!0,x.vert=0,x.horiz=0,V(),!0===v.showtooltip&&I(),!1},s.moveSelect=H,s.endSelect=B,t&&Qt.extend(!0,v,t),b.rect=w(),b.rectback=w(),b.mask.top=z(),b.mask.bottom=z(),b.mask.left=z(),b.mask.right=z(),(i=_("div")).addClass(d.domclasses.atala_tool_selection_tooltip),i.hide(),i.css({fontFamily:"Arial, helvetica, san-serif",fontSize:"8pt",padding:"1px",backgroundColor:"#FFFFE1",border:"1px solid #000000",position:"absolute",zIndex:999}),f.append(b.rectback),f.append(b.rect),f.append(i),f.append(b.mask.top),f.append(b.mask.bottom),f.append(b.mask.left),f.append(b.mask.right),m=new y,r=v.multicolor?"dashed":"solid",a="1px solid #"+v.backcolor,l="1px "+r+" #"+v.forecolor,b.rectback.css("border",a),b.rect.css("border",l),m.resetColors(),v.visible?A():O(),f.bind({pageresize:p,pagezoom:g}),s};function Nt(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that views, modifies, and saves documents, annotations and forms.
 * @param {WebDocumentViewerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @returns {WebDocumentViewer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */function Ce(e,o){if(!ln())return null;var t,c={typeOf:e.type||"Atalasoft.Controls.WebDocumentViewer"},s="",k=150,u=500,x="atala-ui-icon",n=document.createElement("div"),i=Qt({}),r=Qt({}),a=new fn({get:function(){return c},isInitialized:It,switchDocument:gt,closeDocument:mt}),y={
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
uploadCtrl:null},C={annotations:null,document:null,forms:null,mouseTool:null,memory:null,text:null,upload:null},E={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},M={prpr:0,batchoperation:0,loading:!1,zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0},d={
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
direction:en.Vertical,
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
fitting:tn.Width,
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
pageselectlocation:Qt.extend({},nn.TopLeft),
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
type:$t.Pan,
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
scrolltriggerarea:on.Normal,
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
toolbarbuttons:null};if(e){var l=e.mousetool;e.mousetool&&"object"!=typeof e.mousetool&&(e.mousetool=Qt.extend({},S.mousetool,{type:l})),Qt.extend(!0,S,e),e.mousetool=l}if(S.direction=en.Vertical,S.tabular=!1,S.fitting=S.fitting===tn.None||S.fitting===tn.Best||S.fitting===tn.Width||S.fitting===tn.Height?S.fitting:tn.Width,S.pageborderwidth=ge(S.pageborderwidth)?parseInt(S.pageborderwidth,10):1,S.pagespacing=ge(S.pagespacing)?parseInt(S.pagespacing,10):4,S.showpageborder=!!S.showpageborder,S.showpagenumber=!!S.showpagenumber,S.showstatus=!!S.showstatus,S.zoom=ge(S.zoom,!0)?parseFloat(S.zoom):1,S.scripturl=0<(t=S.scripturl).length&&-1===t.indexOf("/",t.length-1)&&-1===t.indexOf("\\",t.length-1)?S.scripturl+"/":S.scripturl,function(){if((S.mousetool.type===$t.ZoomArea||S.mousetool.type===$t.Selection||S.mousetool.type===$t.Text)&&!S.showselecttools){if(null!==e.showselecttools&&void 0!==e.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";S.showselecttools=!0}}(),function(){S.upload||(S.upload={enabled:!1});var e=S.upload;!1!==e.enabled&&(e.allowedmaxfilesize=dn(e.allowedmaxfilesize)?e.allowedmaxfilesize:Number.MAX_VALUE,e.allowdragdrop=!!e.allowdragdrop,e.allowmultiplefiles=!!e.allowmultiplefiles,e.allowedfiletypes="string"==typeof e.allowedfiletypes?e.allowedfiletypes:"",e.uploadpath="string"==typeof e.uploadpath?e.uploadpath:".",e.filesuploadconcurrency=dn(e.filesuploadconcurrency)?e.filesuploadconcurrency:1,e.closeuiafterupload=!1!==e.closeuiafterupload)}(),!sn(S.allowannotations,S.allowtext))return null;function h(){var e=C.memory.deallocateOldestEntry();!function(e){try{e.parentNode&&e.parentNode.removeChild(e),n.appendChild(e),n.innerHTML=""}catch(e){}}(e[0]),0<=e._cacheIndex&&(y.loadedImgs[e._cacheIndex]=null,e._cacheIndex=-1),e.remove(),e.length=0,e=null}function f(e){M.newpagedivsize={height:e.height,width:e.width},M.newpagedivfullzoom=e.fullzoom,S.minwidth=e.minwidth,S.zoom=e.fullzoom,xt()}function p(e){var t=!1;(E.smallest.width<=0||e.width<E.smallest.width)&&(E.smallest.width=e.width,t=!0),(E.smallest.height<=0||e.height<E.smallest.height)&&(E.smallest.height=e.height,t=!0),function(e,t){if(S.direction===en.Vertical){if(y.scrollV)if(y.scrollV.scrollSize(Math.max(y.scrollV._scrollSize+t,0)),1===y.scrollV._ratio&&y.scrollV._scrollSize+t<3e4)y.scrollV._tray.height(y.scrollV._tray.height()+t),y.scrollV._max=Math.max(y.scrollV._tray.height()-y.scrollV[0].clientHeight,0)+1;else{var n=y.scrollV.height()-y.scrollH.scrollbarHeight()-1,o=(3e4-n)*y.scrollV._ratio;3e4<o+t?y.scrollV.ratio((o+t)/(3e4-n)):ve()}xe(y.scrollV),be(y.scrollH,"width")}else if(S.direction===en.Horizontal){if(y.scrollH)if(y.scrollH.scrollSize(Math.max(y.scrollH._scrollSize+e,0)),1===y.scrollH._ratio&&y.scrollH._scrollSize+e<3e4)y.scrollH._tray.width(y.scrollH._tray.width()+e),y.scrollH._max=Math.max(y.scrollH._tray.width()-y.scrollH[0].clientWidth,0)+1,y.scrollH.ratio(y.scrollH._scrollSize/y.scrollH._max);else{var i=y.scrollH.width()-y.scrollV.width()-1,r=(3e4-i)*y.scrollH._ratio;3e4<r+e?y.scrollH.ratio((r+e)/(3e4-i)):ve()}xe(y.scrollH),be(y.scrollV,"height")}if((0!==e||0!==t)&&0!==t){var a=y.scroller[0].scrollLeft,l=y.scroller[0].scrollTop;Me(Lt()+1),Bt({type:"scroll",x:a,y:l,dx:0,dy:0})}}(e.dx,e.dy),t&&G(J())>y.pageDivs.length&&xt()}function g(e,t,n,o){var i=t.getPageSize(e.index,s);if(!i){var r=t.getPageFitMultiplier(e.index,s),a=r,l={width:e.width,height:e.height};1===a&&S.forcepagefit&&(l.width!==n.width||l.height!==n.height)&&0<l.width&&0<l.height&&(a=l.width/n.width>l.height/n.height?n.width/l.width:n.height/l.height,t.setPageFitMultiplier(e.index,a,s)),t.setPageSize(e.index,Qt.extend({},l),s),o&&(l.width*=S.zoom*a,l.height*=S.zoom*a,(i=Qt.extend({},E.size)).width*=S.zoom*r,i.height*=S.zoom*r,e.dx=l.width-i.width,e.dy=l.height-i.height,p(e))}}function m(){Kt.Mobile.Any()?window.addEventListener("orientationchange",We):window.addEventListener("resize",We),y.scroller.scroll(ye),U(E.buffer)}function v(e){var t=e.target||e.srcElement;return("TEXTAREA"===t.nodeName||"INPUT"===t.nodeName||"text"===t.type)&&((!t.attributes.selectable||"false"!==t.attributes.selectable.value)&&void 0)}function b(t,n){return function(e){try{e.currentTarget=n&&0<n.length?n[0]:e.currentTarget,t&&t(e)}catch(e){fe(e.message)}}}function F(e,t){if(S.showerrors)throw void 0===t?e:e+": "+t;fe(e+": "+t),Bt({type:"error",name:e,message:t})}function _(e){F(e.name,e.msg)}function w(e,t,n,o){var i=Qt("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function I(e,t,n){return w("div",e,t,n)}function z(e){var t=Qt('<div style="width:100%; height:100%; position:absolute; left: 0px; top: 0px; background: #F00; opacity:0.0;"></div>');return t.toFront=function(){t.css({"z-index":"10"}),t.reflow&&t.reflow()},t.reset=function(){t.css({"z-index":""}),t.reflow&&t.reflow()},e&&e.prepend(t),t}function P(e){var t=I(e.parent),n=s+"_toolbar";t.buttons=[];for(var o=0;e.children&&o<e.children.length;o++){var i=null;switch(e.children[o].type){case"button":if(Kt.Features.Touch&&("lines"===e.children[o].icon||"polygon"===e.children[o].icon))continue;e.children[o].id=n+"_"+e.children[o].id,(i=L(e.children[o],t)).addClass(rn.atala_toolbar_button),t.buttons.push(i);break;case"pagelabel":y.pageLabel=w("span",t,n+"_"+e.children[o].id),(i=y.pageLabel).addClass("ui-controlgroup-item")}i&&e.children[o].cls&&i.addClass(e.children[o].cls)}return t}function D(e){var t=Qt("<ul/>");for(var n in t.css({fontSize:"medium"}),t.addClass(rn.atala_context_menu),e)if(e.hasOwnProperty(n)){var o=Qt('<li><div href="#"> '+n+" </div></li>");Kt.Features.Touch&&o.on({touchend:e[n]}),o.click(e[n]),o.appendTo(t)}return t.menu(),t}function T(e,t,n){var o=Qt('<div title="'+t+'" />');return n&&o.append(n),o.dialog(),o}function A(e){var t=w("span",y.toolbar.annoToolbar).addClass("ui-controlgroup-item");return L(e,t),H(t,e.id+"_Drop","ui-icon-triangle-1-s","Click To Choose",null,function(){var e=Qt(this).next();if(e.is(":visible"))return e.hide(),!1;var t=e.prev().prev().parent();return e.menu().show().css({position:"absolute",top:0,left:0,"min-width":t.width()+"px","z-index":11}).position({my:"left top",at:"left bottom",of:t}),!1}),t.controlgroup(),y.toolbar.annoToolbar.controlgroup("refresh"),t}function O(e,t,n){for(var o=Qt(e.children().first()),i={},r=0;r<n.length;r++)i[n[r].name]=V(o,t,n[r]);o.menu=D(i),e.append(o.menu),o.menu.hide()}function V(e,t,n){var o=function(){return e.button("option","label","Draw "+n.name),e.data("_annoConfig",n),e.click(t.onclick),e.menu.hide(),e.trigger("click"),!1};return Rt("menuselect"+t.icon+n.name,b(o,e)),o}function H(e,t,n,o,i,r){var a=Qt('<button id="'+t+'" title="'+o+'">'+(i||o)+"</button>");return r&&a.click(r),a.button({icon:n,showLabel:null!=i&&S.showbuttontext}),a.addClass("atala-ui-button"),e&&a.appendTo(e),a}function L(e,t){var n,o="menuclick"+(e.custom?e.id:e.icon),i=H(t,e.id,e.custom?e.icon:x+" "+x+"-"+e.icon,e.tooltip,e.text,(n=o,function(e){e.preventDefault(),Bt(n,arguments)}));return i.data("_config",e),Rt(o,b(e.onclick,i)),i}function R(e){var t,n,o={clearable:"atala_search_input_clearable",onclear:"atala_search_input_clear_hover",inputEmpty:"atala_search_input_empty",loading:"atala_search_input_loading"},i=e.parent||y.toolbar,r=null,a=null;function l(){var e=n.val();return e?n.addClass(o.clearable):n.removeClass(o.clearable),!!(e&&r&&r.isValid()&&e===r.getQuery())||(clearTimeout(a),r=null,e&&3<=e.length?(p(!0),a=setTimeout(function(){r=C.text.search(e,Lt(),h),f(!0)},S.mousetool.text.searchdelay),!1):void d())}function s(e){var t=n.val();return 13===e.keyCode&&r&&t&&r.isValid()&&r.getQuery()===t?(e.shiftKey?u():c(),!1):13!==e.keyCode||r&&r.isValid()?27===e.keyCode?(d(),b(),!1):void 0:(l(),!1)}function c(){r&&(f(!0),r.next(h))}function u(){r&&(f(!0),r.prev(h))}function d(){r=null,C.text.search(""),C.text.clearSelection(),f(!1),p(!0)}function h(e,t){e.isValid()&&(f(!1),e.wrap=S.mousetool.text.wrapsearch,t||p(t))}function f(e){m(o.loading,e)}function p(e){m(o.inputEmpty,!e)}function g(t){return function(e){e.preventDefault(),t&&t()}}function m(e,t){t?n.addClass(e):n.removeClass(e)}function v(e){m(o.onclear,this.offsetWidth-18<e.clientX-this.getBoundingClientRect().left)}function b(e){e&&e.preventDefault(),n.removeClass(o.clearable).removeClass(o.onclear).val("").change(),l()}!function(){t=I().addClass(rn.atala_search_container).addClass("ui-controlgroup-item"),(n=Qt('<input type="text" placeholder="Search..." />').addClass(rn.atala_search_input).addClass("ui-widget")).on({keydown:s,"input propertychange":l}),w("span",t).css({width:"100%"}).append(n);var e=w("span",t);H(e,null,x+" "+x+"-search-next","Next",null,g(c)).addClass(rn.atala_search_next).addClass(rn.atala_toolbar_button),H(e,null,x+" "+x+"-search-prev","Previous",null,g(u)).addClass(rn.atala_search_prev).addClass(rn.atala_toolbar_button),t.on("mousemove","."+o.clearable,v).on("touchstart click","."+o.onclear,b),i.append(t),i.append(Qt('<div style="clear:both;"></div>'))}(),this.dispose=function(){n.off({keypress:s,"input propertychange":l}),t.off("mousemove","."+o.clearable,v).off("touchstart click","."+o.onclear,b),r&&r.dispose();t.remove()}}function j(){S.allowannotations&&c.annotations.cancelDraw(),C.mouseTool.setTool($t.ZoomArea)}function B(o){return function(){var t=this,e=N(E),i=e[0],n=[];e.forEach(function(e){return Nt(this,t),n.push(C.document.getPageRotation(e)+o)}.bind(this)),C.document.rotatePages(e,n,function(){var e=at(i),t=ce(i),n=S.direction===en.Vertical?t.height*e:0;qe(S.pageselectlocation,nn.Center)||qe(S.pageselectlocation,nn.MiddleLeft)?n/=2:qe(S.pageselectlocation,nn.TopLeft)&&(n=0);var o={x:S.direction===en.Vertical?0:n,y:S.direction===en.Vertical?n:0};Ne(i,o,S.pageselectlocation,!0)})}}!function(){var e=S.parent.attr("id")+"_wdv";++hn.instanceCounter;for(;document.getElementById(e+hn.instanceCounter);)++hn.instanceCounter;s=e+hn.instanceCounter}(),
/**
   * @member {WebDocumentViewerConfig} config - Current control configuration.
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @instance
   * @alias config
   */
c.config=S,
/** WARNING: Changing values from these references can cause instability.*/
c.events=d,
/** WARNING: Changing values from these references can cause instability.*/
c.domclasses=rn,
/** WARNING: Changing values from these references can cause instability.*/
c.domattributes=an;var N=function(e){return[e.number-1]};function q(e,t){var n=I(e,t);return S.direction===en.Vertical?(n.height(1),n.css({display:"block"})):S.direction===en.Horizontal&&(n.width(1),n.css({display:"inline-block",overflow:"hidden"})),n._zoom=1,S.backcolor&&n.css({backgroundColor:S.backcolor}),n}function U(e){if(void 0===e){var t=G(J());E.buffer<t&&(E.buffer=t),E.buffer=Math.min(E.buffer,C.document.getPageCount()),e=E.buffer}function n(t){return function(){var e;e=t,M.activepage=e}}if(y.pageDivs.length<e)for(var o=y.pageDivs.length;o<e;o++)y.pageDivs[o]=I(),y.pageDivs[o].addClass(rn.atala_page_div),S.showselecttools&&(y.pageDivs[o]._rubberband=new wn(c,{},y.pageDivs[o],{getViewportSize:ue,getMaxZoom:K,getPageOffsets:re,raiseDrawLayer:ft,resetDrawLayer:pt})),y.pageDivs[o].on({touchstart:n(y.pageDivs[o]),mousedown:n(y.pageDivs[o])}),C.annotations&&C.annotations.addDrawingSurface(y.pageDivs[o]),(S.showselecttools||S.allowannotations||S.allowforms||S.allowtext)&&(y.pageDivs[o]._draw=z(y.pageDivs[o])),C.forms&&C.forms.addFormLayer(y.pageDivs[o]),C.text&&C.text.addTextLayer(y.pageDivs[o]);else if(y.pageDivs.length>e)for(;y.pageDivs.length>e&&0!==y.pageDivs.length;){var i=y.pageDivs.pop();i._rubberband&&i._rubberband.dispose(),C.annotations&&C.annotations.removeDrawingSurface(i),C.forms&&C.forms.removeFormLayer(i),C.text&&C.text.removeTextLayer(i),i&&Ie(i),i=null}}function W(e,a,t,n){"function"==typeof t&&(n=t,t=void 0);var o="function"==typeof n?[n]:[],u=Qt(new Image),i=.9,l=Qt.extend(!0,{atala_cb:void 0},t||{});u._domEl=I(),u._domEl.addClass(rn.atala_page_image_anchor),u.addClass(rn.atala_page_image),u._domEl.append(u);var r={load:v,error:function(){z(),F("ImageError","Image at frameIndex "+d()+" failed to load.")},inserted:function(){u._loaded&&b()}};function d(){return u._page?u._page._index:C.document.getPageIndexByImageIndex(u._index)}function s(){return u._domEl}function c(e){return C.document.getPageFitMultiplier(void 0!==e?e:d())}function h(e,t){return(e=void 0===e?S.zoom:e)*c(t)}function f(){var e=ce(d())||E.size;return{height:e.height,width:e.width}}
/**
     * Returns physical size of the image without client transformations applied(like view rotation)
     */function p(){var e=f();return 90===u._viewrotation||270===u._viewrotation?T(e):e}function g(e,t){return t=t||f(),{height:Math.round(t.height*h(e)),width:Math.round(t.width*h(e))}}function m(e){var t=d(),n=E.vector&&(!a||!a.uri)?h():Math.min(h(),1),o=C.document.getPageRotation(t);if(e||n!==u._zoom||u._rotation!==o){var i=Qt.extend({atala_docurl:a?a.uri:u.documenturl,atala_doczoom:n,atala_thumbpadding:!1},l);o&&(i.atala_angle=o),S.jpeg&&(i.atala_jpeg=!0);var r={type:"docpage",serverurl:S.serverurl,query:"?ataladocpage="+(null===a?u._index:void 0!==a.index?a.index:a),method:"GET",data:i,cancel:!1,info:u};u._reqzoom=n,u._reqangle=o,Mt(r,v,v)}}function v(){u._loaded||u._domEl.removeClass(rn.atala_page_loading),u._loaded=!0,u._zoom=u._reqzoom,u._rotation=u._reqangle;var e=d();if(0<=e){if(u._rotation!==C.document.getPageRotation(e))return void m();(u._viewrotation=0)<u.parent().length&&b(),D(u._viewrotation);var t=E.vector?h():Math.min(h(),1);y()&&u._zoom<t*i&&!Q(u._zoom,t)&&x(!1)}z()}function b(){var e;(e=u)&&(e.removeAttr("width height"),e.css({width:"auto",height:"auto"}));var t=u.prop("naturalWidth")||0,n=u.prop("naturalHeight")||0,o=t||u.width(),i=n||u.height(),r=f(),a=h(),l=!1;if(0!==o&&0!==i){var s;u._size.width=Math.round(o/u._zoom),u._size.height=Math.round(i/u._zoom),90!==u._viewrotation&&270!==u._viewrotation||(u._size=T(u._size)),u._size.width===E.size.width&&u._size.height===E.size.height||Q(u._size.width,r.width)&&Q(u._size.height,r.height)||(l=!0,C.document.setPageSize(d(),u._size)),null===C.document.getPageSize(d())&&(l=!0,C.document.setPageSize(ce,u._size)),S.forcepagefit?(s=function(e){e=e||u._size;var t={width:S.forcepagesize.width*S.zoom,height:S.forcepagesize.height*S.zoom};return(t.width<1||t.height<1)&&(t.width=E.size.width*S.zoom,t.height=E.size.height*S.zoom),e.width/t.width>e.height/t.height?t.width/e.width:t.height/e.height}()/S.zoom,C.document.setPageFitMultiplier(d(),s),w()):(u._zoom!==S.zoom||l||0!==u._viewrotation)&&w();var c=g();l&&u.trigger({type:"pagesizechanged",image:u,index:d(),width:u._size.width,height:u._size.height,dx:Math.round(c.width-r.width*a),dy:Math.round(c.height-r.height*a)}),u.trigger({type:"pageresize",image:u,index:d(),width:c.width,height:c.height})}}function x(e,t){y()&&!u._size.isEmpty()?("function"==typeof t&&o.push(t),u._prevzoom=u._reqzoom,e&&!M.loading?u.animate({height:Math.round(u._size.height*h()),width:Math.round(u._size.width*h())},{duration:k,easing:"easeOutQuad",complete:_,queue:!1}):(w(),_())):"function"==typeof t&&t.call(this,u)}function y(){if(!u._loaded)return!1;var e=!E.vector&&1===u._reqzoom&&1===u._prevzoom&&1<h(),t=Q(u._reqzoom,h())||e;if(!t){var n=Math.abs(u._reqzoom*u._size.width-h()*u._size.width),o=Math.abs(u._reqzoom*u._size.height-h()*u._size.height);n<1&&o<1&&(t=!0)}return!t||!Q(u._scaledzoom,h())}function _(){u.trigger({type:"pagezoom",index:d(),height:Math.round(u._size.height*h()),width:Math.round(u._size.width*h()),prevzoom:u._prevzoom,zoom:h()}),0===M.prpr?m():z()}function w(){var e,t,n,o=g(void 0,p()),i=g(),r=u.prop("naturalWidth")||0,a=u.prop("naturalHeight")||0,l=r&&Math.abs(r-o.width)/o.width<.01,s=a&&Math.abs(a-o.height)/o.height<.01;l&&s||(u.height(o.height),u.width(o.width)),u._domEl.width(i.width),u._domEl.height(i.height),u._scaledzoom=h(),D(u._viewrotation),e=d(),t=i.width,i.height,null!=(n=Be(e))&&null!=n._num&&n._num.css({left:t-20,right:0})}function z(){0<o.length&&function(e){var t=Array.prototype.slice.call(arguments,1);for(;e.length;)e.shift().apply(this,t)}(o,u)}function P(){var e=C.document.getPageRotation(d());return 0===u._viewrotation&&e!==u._rotation||0!==u._viewrotation}function D(e){var t=g(void 0,p()),n=0,o=0,i="";90!==e&&270!==e||(n=(t.height-t.width)/2,o=(t.width-t.height)/2,t=T(t)),0!==e?(i+=" translate("+n+"px,"+o+"px)",i+="rotate("+e+"deg)",u.css(un(i))):u.css(un("")),s().css({width:t.width,height:t.height}),u._viewrotation=e}function T(e){var t=e.width;return e.width=e.height,e.height=t,e}return u._binds=r,u.documenturl=S.documenturl,u._index=a?a.mapsto:e,u._loaded=!1,u._size={width:0,height:0,isEmpty:function(){return 0===this.width&&0===this.height}},u._zoom=-1,u._prevzoom=u._zoom,u._scaledzoom=-1,u._rotation=0,u._viewrotation=0,u.dispose=function(){u.off(r),u._page=null,u=null},u.zoom=x,u.needsZoom=y,u.getSize=f,u.getScaledSize=g,u.getFitZoom=h,u.getFitMultiplier=c,u.needsRotate=P,u.rotate=function(e){"function"==typeof e&&o.push(e);if(P()){var t=C.document.getPageRotation(d());if(n=C.document.getPageRotation(d()),(0===u._viewrotation&&n!==u._rotation||0!==u._viewrotation&&(u._viewrotation+u._rotation)%360!==n)&&u&&u._loaded&&u._page&&(D(t=(360+t-u._rotation)%360),b()),0===M.prpr&&u._loaded)return void m()}var n;z()},u.getDomElement=s,u.invalidate=function(e,t){"function"==typeof e&&(t=e,e={});(l=Qt.extend(!0,{},e)).atala_cb=Math.floor(1e9*Math.random()),"function"==typeof t&&o.push(t);m(!0)},function(){u.on(r);var e=S.pageborderwidth,t={bottom:0,top:0,right:0,left:0};u._loaded=!1,u._reqzoom=-1,S.direction===en.Vertical&&(t.bottom=S.pagespacing);S.direction===en.Horizontal&&(t.right=S.pagespacing);var n=s();S.showpageborder&&n.css({"border-bottom":e+"px solid black","border-right":e+"px solid black","border-top":e+"px solid silver","border-left":e+"px solid silver","margin-bottom":t.bottom+"px","margin-right":t.right+"px"});n.css({display:"inline-block"}),n.addClass(rn.atala_page_loading),m()}(),u}function Z(e,t){var n="overflow:scroll; position:absolute; background-color:Transparent;",o=I(e);o.css({position:"absolute",display:"none","background-color":"white"});var i=null,r=!1;function a(){i._tooltip.hide(),E.number===i._pagenum||je(i._pagenum)||Ce(i._pagenum),Dt()}return t===en.Horizontal?(Kt.Firefox&&(n=n.replace("overflow","overflow-x")),(i=Qt('<div style="'+n+'bottom:0px; left:0px; width:100%;z-index:10"></div>').appendTo(e))._tray=Qt('<div style="height:1px;"></div>').appendTo(i)):(Kt.Firefox&&(n=n.replace("overflow","overflow-y"),n+="width:"+(function(){var e=I(Qt("body")),t=I(e);e.css({width:"50px",height:"50px",overflow:"hidden",position:"absolute",visibility:"hidden"}),t.css({width:"100px",height:"100px"});var n=e.width();e.css({"overflow-y":"scroll"});var o=n-e[0].clientWidth;return Qt(e).remove(),o}()+1)+"px;",r=!0),(i=Qt('<div style="'+n+'top:0px; right:0px; height:100%;z-index:10"></div>').appendTo(e))._explicitSize=r,i._tray=Qt('<div style="width:1px;"></div>').appendTo(i)),Y(i),i._ratio=1,i.ScrollDirection=t,i._tooltip=o,i._pagenum=-1,i._scrollSize=0,i.pageNum=function(e){i._pagenum=e},i.scrollbarHeight=function(){return i.height()-i[0].clientHeight},i.scrollSize=function(e){i._scrollSize=e},i.ratio=function(e){i._ratio=e},i.on({scroll:function(){if(!i.propagationPaused()){clearTimeout(i._tooltip._timeout),y.scroller.stop(),y.scroller.pauseEventPropagation(!0);var e={};i.ScrollDirection===en.Vertical?(y.scroller.scrollTop(i[0].scrollTop*i._ratio),i._pagenum=Lt()+1,e.right=i.outerWidth()+10+"px",e.top=16+Math.round((i[0].offsetHeight-48)/i[0].scrollHeight*i[0].scrollTop)+"px"):i.ScrollDirection===en.Horizontal&&(y.scroller.scrollLeft(i[0].scrollLeft*i._ratio),i._pagenum=Lt()+1,e.bottom=i.outerHeight()+10+"px",e.left=16+Math.round((i[0].offsetWidth-48)/i[0].scrollWidth*i[0].scrollLeft)+"px"),i.ScrollDirection===S.direction&&S.showpagenumbertooltip&&("none"===i._tooltip.css("display")&&(i._tooltip.css(e),i._tooltip.show()),S.showpagenumbertooltip&&i._tooltip.html("Page "+i._pagenum),i._tooltip._timeout=setTimeout(a,1e3))}}}),i}function X(e){e&&e._tooltip&&(clearTimeout(e._tooltip._timeout),e._tooltip.hide())}function Y(t){var n={scroll:function(){t.off(n),t.resumeEventPropagation()}};t._pauseEP=0,t.propagationPaused=function(){return 0<t._pauseEP},t.pauseEventPropagation=function(e){t._pauseEP++,e&&t.on(n)},t.resumeEventPropagation=function(){0<t._pauseEP&&t._pauseEP--}}function G(e){var t=ue(),n=$(0,e);n.width=0<E.smallest.width&&E.smallest.width<n.width?E.smallest.width:n.width,n.height=0<E.smallest.height&&E.smallest.height<n.height?E.smallest.height:n.height;var o,i=Math.ceil(t.width/n.width)+2,r=Math.ceil(t.height/n.height)+2;return S.direction===en.Vertical?o=r:S.direction===en.Horizontal&&(o=i),o}function Q(e,t){return t<e+.001&&e-.001<t}function J(){return 0!==E.size.width?S.minwidth/E.size.width:1}function K(){return 0!==E.size.width?S.maxwidth/E.size.width:1}function $(e,t,n){if(C.document.getPageCount()<=0)return{width:0,height:0};if(n=void 0===n||n,M.newpagedivsize){var o={width:M.newpagedivsize.width,height:M.newpagedivsize.height},i=S.showpageborder&&n?2*S.pageborderwidth:0,r=(t||S.zoom)/M.newpagedivfullzoom;return o.height=Math.round(o.height*r)+i,o.width=Math.round(o.width*r)+i,o}return ee(e,t||S.zoom,S.showpageborder&&n)}function ee(e,t,n){var o,i=Qt.extend({},ce(e)),r=n?2*S.pageborderwidth:0;return t*=(o=e,C.document.getPageFitMultiplier(o)),i.height=Math.round(i.height*t)+r,i.width=Math.round(i.width*t)+r,i}function te(e,t){return re(null,e,t).index}function ne(e,t){for(var n={left:0,top:0},o=e;null!=o&&o!==t;o=o.offsetParent)n.left+=o.offsetLeft,n.top+=o.offsetTop;return n}var oe={height:0,isEmpty:function(){return 0===this.width&&0===this.height},width:0,zero:function(){this.width=0,this.height=0},zoom:1};function ie(){if(oe.isEmpty()||oe.zoom!==S.zoom){var e=re(null,null,null,S.zoom);oe.height=e.height,oe.width=e.width,oe.zoom=S.zoom}return oe}function re(e,t,n,o){return ae(0,e,t,n,o)}function ae(e,t,n,o,i){var r={height:0,width:0,index:0};if(S.direction===en.Vertical)for(var a=null,l=0;l<1&&l<0&&(r.height+(a=$(l,i).height)<=o||null==o);l++)r.height+=a+S.pagespacing,r.index++;else if(S.direction===en.Horizontal)for(var s=null,c=0;c<1&&c<0&&(r.width+(s=$(c,i).width)<=n||null==n);c++)r.width+=s+S.pagespacing,r.index++;return 1<=r.index&&(r.index=0),r}function le(){return 1}function se(e,t){var n=ce(e);return(lt(e)+(t||0))%180==0?n:{width:n.height,height:n.width}}function ce(e){var t=C.document.getPageSize(e);return t||E.size}function ue(){return{width:y.scrollV?y.main.width()-y.scrollV.width():y.main.width(),height:y.scrollH?y.main.height()-y.scrollH.scrollbarHeight():y.main.height()}}function de(e,t){var n={status:"fail",started:!1,reason:e};return"function"==typeof t&&t.call(),n}function he(e,t,n,o,i,r){var a=ne(e,t);return a.left<=i&&a.left+e.clientWidth>=n&&a.top<=r&&a.top+e.clientHeight>=o}function fe(e){S.showstatus&&y.status&&y.status.html(e),Bt({type:"statusmessage",message:e})}function pe(e,t){var n;if(1===e.length&&"object"==typeof e[0])n=e[0];else if("string"==typeof e[0]){n={};var o=null;3===e.length?o=e[2]:2===e.length&&(o=e[1]);for(var i=-1<e[0].indexOf(" ")?e[0].split(" "):[e[0]],r=0;r<i.length;r++)n[i[r]]=o}for(var a in n)if(n.hasOwnProperty(a)){var l=null;if(a in d?l=d:c&&a in c.annotations.events?l=c.annotations.events:c&&a in c.forms.events?l=c.forms.events:c&&a in c.document.events&&(l=c.document.events),null==l&&(l=d),null==l[a])t&&(l[a]=[n[a]]);else if(t)l[a].push(n[a]);else if(n[a])for(var s=0;s<l[a].length;s++)l[a][s]===n[a]&&l[a].splice(s,1);else l[a].length=0}}function ge(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function me(e,t,n,o,i){if(null==i&&"function"==typeof o&&(i=o,o=null),e=null==e?y.scroller.scrollLeft():e,t=null==t?y.scroller.scrollTop():t,S.direction===en.Horizontal){if(e>y.viewport.width()){var r=ie();if(e<r.width&&0<y.content.width()){var a=r.width-(y.edges[0].width()+y.content.width());y.edges[1].width(a)}}}else if(S.direction===en.Vertical&&t>y.viewport.height()){var l=ie();if(t<l.height&&0<y.content.height()){var s=l.height-(y.edges[0].height()+y.content.height());y.edges[1].height(s)}}y.scroller.stop(),!n||M.loading||M.scrollPos.x===e&&M.scrollPos.y===t?(y.scroller.scrollLeft(e),y.scroller.scrollTop(t),"function"==typeof i&&i.call()):Qt.when(y.scroller.animate({scrollLeft:e,scrollTop:t},{duration:o||u,easing:"easeOutQuad",queue:!1})).done(i)}function ve(){if(y.scrollH&&y.scrollV){if(y.scrollH.pauseEventPropagation(),y.scrollV.pauseEventPropagation(),S.direction===en.Vertical){be(y.scrollH,"width");var e=Math.round(re(0).height+$(Lt()).height);Kt.Firefox&&(e+=Math.round(y.scrollH.scrollbarHeight())),y.scrollV.scrollSize(e-(y.scrollV.height()-y.scrollH.scrollbarHeight()-1)),3e4<e?(y.scrollV.ratio(e/(3e4-(y.scrollV.height()-y.scrollH.scrollbarHeight()-1))),y.scrollV._tray.height(3e4)):(y.scrollV._tray.height(e),y.scrollV.ratio(1)),xe(y.scrollV)}else if(S.direction===en.Horizontal){be(y.scrollV,"height");var t=Math.round(re(0).width+$(Lt()).width);y.scrollH.scrollSize(t),3e4<t?(y.scrollH.ratio(t/(3e4-(y.scrollH.width()-y.scrollV.width()-1))),y.scrollH._tray.width(3e4)):(y.scrollH._tray.width(t),y.scrollH.ratio(1)),xe(y.scrollH)}y.scrollV._max=Math.max(y.scrollV._tray.height()-y.scrollV.height(),0)+1,y.scrollH._max=Math.max(y.scrollH._tray.width()-y.scrollH.width(),0)+1,y.scrollH.resumeEventPropagation(),y.scrollV.resumeEventPropagation()}}function be(e,t){if(e&&y.pageDivs.length){for(var n=Math.round(E.size[t]*S.zoom),o=0;o<1;o++)null!=y.pageDivs[o]._index&&(n=Math.max($(y.pageDivs[o]._index)[t],n));e._tray[t](n),e.scrollSize(n-e[t]()),xe(e),e.ratio(1)}}function xe(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}function ye(e){if(!M.zooming&&!M.scrollBuffer&&y.pageDivs.length){var t=(new Date).getTime(),r=y.scroller[0].scrollLeft,a=y.scroller[0].scrollTop;if(M.loading||ot(),Me(E.number),!y.scroller.propagationPaused()&&y.scrollH&&y.scrollV){var n=Math.round(r/y.scrollH._ratio),o=Math.round(a/y.scrollV._ratio);n!==y.scrollH.scrollLeft()&&(y.scrollH.pauseEventPropagation(!0),y.scrollH.scrollLeft(n)),o!==y.scrollV.scrollTop()&&(y.scrollV.pauseEventPropagation(!0),y.scrollV.scrollTop(o))}Bt({type:"scroll",x:r,y:a,dx:r-M.scrollPos.x,dy:a-M.scrollPos.y}),e&&(M.scrollTimeout&&clearTimeout(M.scrollTimeout),M.scrollTimeout=setTimeout(function(){var e,t,n,o,i;e=r,t=a,n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop,i=n===M.scrollPos.x&&o===M.scrollPos.y,e===M.scrollPos.x&&t===M.scrollPos.y&&i?(Dt(),M.scrollTimeout=null,M.loading||ot()):i||(ye({}),M.scrollTimeout=null)},500),M.scrollPos.x=y.scroller[0].scrollLeft,M.scrollPos.y=y.scroller[0].scrollTop,M.scrollPos.t=t),M.scrollBuffer=e?setTimeout(_e,50):null}}function _e(){null!==M.scrollBuffer&&(clearTimeout(M.scrollBuffer),M.scrollBuffer=null)}function we(){if(S.direction===en.Horizontal){var e=y.pageDivs.length?E.size.height*S.zoom:0;S.thumbpadding&&"number"==typeof S.thumbpadding&&(e+=2*S.thumbpadding),y.edges[0].height(e),y.edges[1].height(e)}}function ze(e,t){t=0;var n=re(0),o=t<1?$(t):{width:0,height:0},i=t<0?$(Lt()):{width:0,height:0},r=ae();r.width+=o.width,r.height+=o.height;var a=ae();if(a.width+=i.width,a.height+=i.height,S.direction===en.Vertical)if(y.edges[0].height(n.height),1<=t+1){var l=n.height+r.height+a.height;y.scrollH&&l>y.scroller[0].clientHeight&&y.content.width()<=y.scroller[0].clientWidth?y.edges[1].height(y.scrollH.scrollbarHeight()):y.edges[1].height(0)}else y.edges[1].height(a.height),Kt.Chrome&&y.content.height("");else if(S.direction===en.Horizontal)if(y.edges[0].width(n.width),1<=t+1){var s=n.width+r.width+a.width;y.scrollV&&s>y.scroller[0].clientWidth&&y.content.height()<=y.scroller[0].clientHeight?y.scrollV._explicitSize?y.edges[1].width(y.scrollV.height()<y.scrollV._tray.height()?y.scrollV.width():0):y.edges[1].width(y.scrollV.width()):y.edges[1].width(0)}else y.edges[1].width(a.width),y.edges[1].height(1)}function Pe(){return M.activepage}function De(e,t){e=e||1,ke(Lt()-e,t)}function Te(e,t){e=e||1,ke(Lt()+e,t)}
/**
   * Scrolls the viewer to the given page index and executes the callback when finished.
   * @param {number} index - Index of the page to show.
   * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
   *  @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPage
   */function ke(e,t){Ce(e+1,t)}
/**
   * Scrolls the viewer to the given page number and executes the callback when finished.
   * @param {number} pageNumber - Number of the page to show. Note that page number is expected 1-based.
   * @param {NotificationCallback} [callback]: function to execute after this operation is done
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPageNumber
   * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer#showPage|showPage} instead.
   */function Ce(e,t){e=Math.max(1,e),Ee(e=Math.min(C.document.getPageCount(),e),!1,t)}function Ee(e,t,n){var o=C.document.getPageCount(),i=e-1;if(0===M.prpr&&0<o){if(Ve(),S.direction===en.Vertical){var r=re(0).height;y.edges[0].height(r)}else if(S.direction===en.Horizontal){var a=re(0).width;y.edges[0].width(a)}ze(0,null),we(),Se();for(var l=0;l<y.pageDivs.length;l++)Ae(y.pageDivs[l],null,i+l);y.content.append(y.pageDivs[0]),Dt(),Me(i+1),ot(!1,function(){ve(),He(),"function"==typeof n&&n.call()})}else de("paused",n)}function Me(e){var t=C.document.getPageCount();if(0<e&&e<=t){if(E.number!==e||E.numberoutof!==t){if(y.pageLabel.html(e+" / "+t),E.number!==e){E.number=e;for(var n=0;n<y.pageDivs.length;n++){var o=y.pageDivs[n];o._index===e-1?o.addClass(rn.atala_active_page):o.removeClass(rn.atala_active_page)}Bt({type:"pagenumberchanged",number:E.number})}E.numberoutof!==t&&(E.numberoutof=t)}}else y.pageLabel.html(""),y.viewport.find("."+rn.atala_active_page).removeClass(rn.atala_active_page),E.numberoutof=0}function Se(){for(var e=y.pageDivs.length-1;0<=e;e--)Fe(y.pageDivs[e])}function Fe(e){Kt.Explorer&&document.activeElement&&e.has(document.activeElement).length&&y.scroller.focus(),S.allowannotations&&(Kt.Firefox||Kt.Edge)&&C.annotations.__clearAllSelection(e),e.detach(),null!=e._img&&(e._img._page=null,e._img.getDomElement().detach(),e._img=null),Bt({type:"pagerecycled",index:e._index,page:e}),e._index=-1,e.removeAttr(an.atala_page_index)}function Ie(e){Fe(e),e._index=-1,e.removeAttr(an.atala_page_index),e._img=null,e.remove()}function Ae(t,e,n,o){if(t._index===n&&t._img===e&&!o)return!1;if(o&&!t.nullinserted&&n<0)return!1;if(t._index=n,t.attr(an.atala_page_index,n),n>=C.document.getPageCount())return t.hide(),!1;if(t._img&&t._img!==e&&(t._img._page=null,0<t.has(t._img.getDomElement()).length&&t._img.getDomElement().detach(void 0,!0)),t._rubberband&&t._rubberband.reset(),t._img=e,t._img&&(t._img._page=t),t.css({display:S.direction===en.Horizontal?"inline-block":"block"}),S.showpagenumber&&(t.css({position:"relative"}),t._num||(t._num=Qt('<div style="position:absolute; right:20px; bottom:16px;z-index:1"/>'),t._num.addClass(rn.atala_page_number),t.append(t._num)),t._num.text(t._index+1)),t._img&&t._img._binds&&(t._img._binds.pageresize||(t._img._binds.pageresize=function(e){Bt({type:"pageresize",page:e.image._page,image:e.image,index:e.image._page?e.image._page._index:C.document.getPageIndexByImageIndex(e.image._index),width:e.width,height:e.height})},t._img.on({pageresize:t._img._binds.pageresize})),t._img._binds.pagesizechanged||(t._img._binds.pagesizechanged=function(e){Bt({type:"pagesizechanged",page:t,image:e.image,index:e.index,width:e.width,height:e.height,dx:e.dx,dy:e.dy})},t._img.on({pagesizechanged:t._img._binds.pagesizechanged}))),t._img){var i=t._img.getDomElement();t.append(i),t._img.trigger({type:"inserted",page:t}),t._img._loaded||(t.nullinserted?t._img.css({width:t.width(),height:t.height()}):Oe(t._img,t._index)),M.newpagedivsize||t.css({width:"",height:""}),t.nullinserted=!1}else t.nullinserted=!0,M.newpagedivsize||Oe(t,t._index);return Bt({type:"pageshown",page:t,index:t._index}),!0}function Oe(e,t){var n=$(t,null,!1);e.css({width:n.width,height:n.height})}function Ve(){M.prpr++}function He(){0!==M.prpr&&(M.prpr--,0===M.prpr&&ye())}
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
function Le(e,t){var n=Qt.Deferred();0<=e.cacheIndex&&y.loadedImgs[e.cacheIndex]?y.loadedImgs[e.cacheIndex].invalidate(t,function(){n.resolve()}):n.resolve();return n.promise()}function Re(e,t,n){"function"==typeof t&&(n=t,t=void 0);var o=C.document.getPageDefinition(e);if(o){if(o.cacheIndex<0||!y.loadedImgs[o.cacheIndex]){var i=M.nextImageCacheIndex++;o.cacheIndex=i,C.document.setPageCacheIndex(e,i),y.loadedImgs[i]=W(o.index,o.ref,t,function(e){e&&((y.loadedImgs[i]=e)._cacheIndex=i,C.memory.allocate(e)),"function"==typeof n&&n.call()}),S.allowtext&&C.text&&C.text.ensurePageTextLoaded(e)}else"function"==typeof n&&n.call();return y.loadedImgs[o.cacheIndex]}}function je(e){var t=Be(e);if(t){var n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop;return he(t[0],y.scroller[0],n,o,n+y.scroller[0].clientWidth,o+y.scroller[0].clientHeight)}return!1}function Be(e){for(var t=null,n=0;n<y.pageDivs.length&&null===t;n++)y.pageDivs[n]._index===e&&(t=y.pageDivs[n]);return t}function Ne(e,r,a,l,s){var c=this;l&&"function"==typeof l&&(s=l,l=!1);var t=function(){Nt(this,c);var e,t=y.pageDivs[0];if(t){var n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop;if((e=ne(t[0],y.scroller[0])).left+=r.x,e.top+=r.y,!l&&e.left>=n&&e.left<=n+n+y.scroller[0].clientWidth&&e.top>=o&&e.top<=o+y.scroller[0].clientHeight)return void(s&&s())}else(e=re(0)).left=e.width+r.x,e.top=e.height+r.y;var i={x:y.scroller[0].clientWidth/2,y:y.scroller[0].clientHeight/2};qe(a,nn.BottomLeft)?(i.x=y.scroller[0].clientWidth,i.y=y.scroller[0].clientHeight):qe(a,nn.TopLeft)&&(i.x=0,i.y=0),me(e.left-i.x,e.top-i.y,!0,s)}.bind(this);e!==Lt()?Ee(e+1,0,t):t()}function qe(e,t){return e&&t&&e.x===t.x&&e.y===t.y}var Ue=null;function We(){Ue&&clearTimeout(Ue),Ue=setTimeout(function(){Bt("documentchanged")},200)}function Ze(){y.scroller.stop(),y.scroller.pauseEventPropagation(),Ve()}function Xe(){ve(),0<y.pageDivs.length&&je(Lt())&&ze(y.pageDivs[0]._index),we(),y.scroller.resumeEventPropagation(),He()}function Ye(){M.zooming=!0,Ze(),Bt("zoomstarted")}function Ge(e){var t,n,o,i,r,a,l;e=Math.min(e,K()),e=Math.max(e,J()),t=e,n=!1,i=re(E.number,null,null),r=re(E.number,null,null,t),a=(y.scroller.scrollLeft()-i.width)/S.zoom*t,l=(y.scroller.scrollTop()-i.height)/S.zoom*t,me(r.width+a,r.height+l,n,k,o),S.zoom=e,ot(!1),tt(e,!1)}function Qe(){M.zooming=!1,Xe(),Bt({type:"zoomchanged",zoom:S.zoom})}
/**
   * Asynchronously zooms the viewer to the given zoom over the default zoom duration
   * @param {number} zoom - Desired zoom level to zoom to.
   * @param {NotificationCallback} [callback] - function to execute after the zoom is finished animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoom
   */function Je(e,n){var o=this;if(M.zooming)de("zooming",n);else if(M.zooming=!0,Ze(),Bt("zoomstarted"),e!==S.zoom){e=Math.min(e,K()),e=Math.max(e,J());var t=re(0,null,null),i=re(0,null,null,e),r=(y.scroller.scrollLeft()-t.width)/S.zoom*e,a=(y.scroller.scrollTop()-t.height)/S.zoom*e;S.zoom=e,ot(!0,function(){var t=this;Nt(this,o),tt(e,!0,function(){var e=this;Nt(this,t),Ke(),me(i.width+r,i.height+a,!1,k,function(){Nt(this,e),y.scrollH&&y.scrollH.scrollLeft(y.scroller.scrollLeft()),y.scrollV&&y.scrollV.scrollTop(y.scroller.scrollTop()),null!=n&&n()}.bind(this))}.bind(this))}.bind(this))}else Ke(),"function"==typeof n&&n.call()}function Ke(){M.zooming=!1,Xe(),Bt({type:"zoomchanged",zoom:S.zoom})}function $e(e,t){Je(S.zoom+(e?-1:1)*S.zoom*.3,t)}function et(){y.edges[0]._z=S.zoom}function tt(e,t,n){if(0<y.edges.length){n="function"==typeof n?cn([et,n]):et;var o=S.direction===en.Vertical,i=re(0,null,null,e),r=o?i.height:i.width;if(t&&!M.loading){var a=o?{height:r}:{width:r};y.edges[0].animate(a,{duration:k,easing:"easeOutQuad",complete:n,queue:!1})}else o?y.edges[0].height(r):y.edges[0].width(r),"function"==typeof n&&n.call();nt()}}function nt(c){setTimeout(function(){var e=Qt("<canvas/>");c=c||S.zoom;var t=S.direction===en.Vertical,n=M.newpagedivsize?M.newpagedivsize:{width:E.size.width*c,height:E.size.height*c},o=Math.max(1,S.pagespacing);e[0].width=1*(n.width+o),e[0].height=1*n.height;var i=e[0].getContext("2d");i.lineWidth=S.pageborderwidth,S.backcolor&&(i.fillStyle=S.backcolor);for(var r=0;r<1;++r){var a=t?1+r*n.width:1,l=t?1:1+r*n.height;i.strokeRect(a,l,n.width-2,n.height-2),S.backcolor&&i.fillRect(a+i.lineWidth,l+i.lineWidth,n.width-2*(1+i.lineWidth),n.height-2*(1+i.lineWidth))}var s={backgroundImage:"url("+e[0].toDataURL()+")",backgroundSize:"auto auto",backgroundRepeat:t?"repeat-y":"repeat-x"};y.edges[0].css(s),y.edges[1].css(s)},0)}function ot(e,t){for(var n=0,o=!0,i=function(){if(--n<=0){if(S.direction===en.Horizontal){var e=ie().width;y.spacer||(y.spacer=I(),y.spacer.css({position:"absolute",top:"-1px",height:"1px"}),y.viewport.append(y.spacer)),y.spacer.width(e)}"function"==typeof t&&t.call(),0===M.prpr&&(Kt.Safari||Kt.Chrome)&&y.edges[1].hide().show()}},r=0;r<y.pageDivs.length;r++){if(y.pageDivs[r]._img)(y.pageDivs[r]._img.needsZoom()||y.pageDivs[r]._img.needsRotate())&&(o=!1,n++,y.pageDivs[r]._img.needsRotate()?y.pageDivs[r]._img.rotate(i):y.pageDivs[r]._img.needsZoom()&&y.pageDivs[r]._img.zoom(e,i))}o&&i.call()}
/**
   * Asynchronously zooms the viewer to fit to a page.
   * @param {Atalasoft.Utils.Fitting} fit - Type of fitting to fit the page to.
   * @param {number} pageNumber - Page number to fit to.  Note, that it's 1-based.
   * @param {NotificationCallback} callback - Function to execute after the fit is done animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function fit
   */function it(e,t,n){null!=t?"function"==typeof t&&(n=t,t=E.number):t=E.number;var o=rt(e,t-1),i=o.zoom,r=tn.Width===o.fit&&en.Vertical===S.direction,a=tn.Height===o.height;r&&me(0,null,!1),a&&me(null,0,!1),Je(i,n)}function rt(e,t){var n,o,i=(n=ue(),o=S.showpageborder?2*S.pageborderwidth:0,{width:n.width-o,height:n.height-o}),r=ee(t,1,!1);0!==r.width&&0!==r.height||(e=null);var a=S.zoom;switch(e){case tn.None:break;case tn.Best:e=r.width/i.width>r.height/i.height?(a=i.width/r.width,tn.Width):(a=i.height/r.height,tn.Height);break;case tn.Height:a=i.height/r.height;break;case tn.Width:a=i.width/r.width;break;default:a=1,e=tn.None}return{zoom:a,fit:e}}function at(e){return S.zoom*C.document.getPageFitMultiplier(e)}function lt(e){return C.document.getPageRotation(e)}function st(e,t){t=t||0;var n=lt(e),o=at(e),i=se(e,t),r=Jt.matrix();r.scale(o,o,0,0),r.rotate(n+t,0,0);var a,l,s=(a=r,l={x:i.width,y:i.height},{x:a.x(l.x,l.y),y:a.y(l.x,l.y)}),c=Math.min(0,s.x),u=Math.min(0,s.y),d=r.invert(),h=d.x(-c,-u),f=d.y(-c,-u);return r.translate(h,f),r}function ct(e){var t=Qt.data(e.currentTarget,"_config"),n=Qt.data(e.currentTarget,"_annoConfig");!n&&t&&(n={type:t.icon,rotatable:S.showrotatetools}),n&&(C.mouseTool.setTool($t.None,$t.None),C.annotations.drawAnnotation(n,!1,dt,ut))}function ut(){C.mouseTool.setTool($t.Pan,$t.None)}function dt(){C.mouseTool.setTool($t.Pan,$t.None)}
/**
   * Checks whether annotations support is enabled.
   * @private
   */function ht(){return!1===S.allowannotations&&F("InitError",'The "allowannotations" property in the WebDocumentViewer config is set to false.'),S.allowannotations}function ft(){for(var e=0;e<y.pageDivs.length;e++)y.pageDivs[e]._draw.toFront()}function pt(){for(var e=0;e<y.pageDivs.length;e++)y.pageDivs[e]._draw.reset()}function gt(e,t,n){if(e){if(M.loading=!0,Se(),E.size.width=e.pagewidth,E.size.height=e.pageheight,E.count=e.pagecount,E.buffer=S.pagebuffersize,E.dpi=e.dpi,E.vector=!0===e.vector,S.allowannotations=n.allowannotations,S.allowforms=n.allowforms,S.allowtext=n.allowtext,S.documenturl=n.documenturl,S.annotationsurl=n.annotationsurl,S.formsurl=n.formsurl,C.document.__linkChanges(t),C.annotations&&(C.annotations.clear(),C.annotations.loadAnnotations(e)),C.forms&&(C.forms.clear(),e.forms&&C.forms.loadForms(e)),C.text&&C.text.search(""),M.zooming=!1,e.zoom)S.zoom=e.zoom;else{var o=rt(S.fitting,1);S.zoom=o.zoom}yt(e.pagenumber||0),C.mouseTool.setTool(S.mousetool.type?S.mousetool.type:$t.Pan,$t.None),nt(),M.loading=!1,ot(),N=t.__getSelectedPagesIndices,Bt({type:"activedocumentchanged"})}}function mt(e,t){t&&Ft(!0);for(var n=0;n<e._controllers.document.getPageCount();++n){var o=e._controllers.document.getPageDefinition(n,s);o&&0<=o.cacheIndex&&y.loadedImgs[o.cacheIndex]&&(C.memory.deallocate(y.loadedImgs[o.cacheIndex]),y.loadedImgs[o.cacheIndex].dispose(),y.loadedImgs[o.cacheIndex].remove(),y.loadedImgs[o.cacheIndex]=void 0)}}function vt(e,o){M.loading=!0;var t={atala_docurl:S.documenturl,atala_pagebuffer:S.pagebuffersize,atala_minwidth:S.minwidth};null!=e&&("function"==typeof e&&(o=e,e=null),Qt.extend(t,e)),Mt({type:"docinfo",serverurl:S.serverurl,query:"?ataladocinfo=",method:"GET",data:t,cancel:!1,info:{pagewidth:-1,pageheight:-1,pagecount:-1}},function(e){bt(e,o)},function(e,t,n){!function(e,t,n,o){if(e.responseText){var i=e.responseText.substr(e.responseText.indexOf("</html>")+7);0<=i.indexOf("\x3c!--")?0<(i=i.replace("\x3c!--","").replace("--\x3e","")).length&&(n="<pre>"+i+"</pre>"):0<e.responseText.indexOf("web.config")&&0<e.responseText.indexOf("customErrors")&&(n+=": web.config customErrors attribute has disabled remote error messages.")}F("DocumentLoadError",n),"function"==typeof o&&o.call(void 0,n)}(e,0,n,o)})}function bt(t,n){var e,o;t&&!1!==t.licensed?(E.size.width=t.pagewidth,E.size.height=t.pageheight,E.count=t.pagecount,E.buffer=S.pagebuffersize,E.dpi=t.dpi,E.vector=!0===t.vector,E.caption=t.thumbcaptionformat||(S.showthumbcaption?"{0}":""),oe.zero(),C.memory.clearEntries(),C.memory.colorDepth=t.colordepth,C.memory.pageSize={width:t.pagewidth,height:t.pageheight},Bt({type:"documentinfochanged",info:{count:E.count,dpi:E.dpi,size:{height:E.size.height,width:E.size.width},vector:E.vector},customData:t.customData}),C.text&&(C.text.clear(),t.text&&C.text.loadText(t)),M.loading&&(S.zoom=1,U(),me(0,0),y.scrollV&&y.scrollV.pageNum(1),Me(1),it(S.fitting,1,function(){we(),ze(0,y.pageDivs.length-1);for(var e=0;e<y.pageDivs.length&&e<E.count;e++)Ae(y.pageDivs[e],null,e);y.content.append(y.pageDivs[0]),0<y.pageDivs.length&&y.pageDivs[0].addClass(rn.atala_active_page),t.layers&&t.layers.length?C.annotations.loadAnnotations(t):S.annotationsurl&&C.annotations&&C.annotations.clear(),C.forms&&(C.forms.clear(),t.forms&&C.forms.loadForms(t)),C.mouseTool.setTool(S.mousetool.type?S.mousetool.type:$t.Pan,$t.None),M.loading=!1,nt(),"function"==typeof n&&n(t.error,t),t.error&&setTimeout(function(){F("DocumentLoadError",t.error)},0)})),M.loading=!1):(o=t&&!1===t.licensed?(e="LicenseException",t.error?t.error:"LicenseException: Handler was unable to find a valid license."):(e="DocumentLoadError","HandlerException: Handler did not return any data."),M.loading=!1,"function"==typeof n&&n.call(void 0,o),e&&o&&F(e,o))}function xt(){yt()}function yt(e){if(U(),0<y.pageDivs.length){var t=C.document.getPageCount(),n="number"==typeof e?e:y.pageDivs[0]._index;n=0<=n?Math.min(n,t-y.pageDivs.length):0;for(var o=0;o<y.pageDivs.length&&o<t;o++){var i=n+o;Fe(y.pageDivs[o]),Ae(y.pageDivs[o],null,i)}y.content.append(y.pageDivs[0])}ze(0<y.pageDivs.length&&y.pageDivs[0]._index,null),we(),Dt(),ve(),Me(y.pageDivs[0]._index+1)}function _t(e,t){var n={atala_docurl:S.documenturl,atala_spath:S.savepath};function o(e){!function(e){e.error?F("DocumentSaveError",e.error):fe("DocumentSave: success="+e.success);Bt({type:"documentsaved",success:e.success,customData:e.customData,fileName:e.fileName})}(e),"function"==typeof t&&t.call()}Qt.extend(n,e),Mt({type:"docsave",serverurl:S.serverurl,query:"?ataladocsave=",method:"POST",data:n,cancel:!1,info:{success:void 0,error:void 0}},o,function(e){var t=[];t.error=e.responseText,o(t)})}function wt(e,t,n){var o=null;return"string"==typeof e?(o={},M.initialized&&n&&(0<e.length?o=n.createHandlerRequest(S.serverurl,e,t):0===e.length&&n.clear()),o.url=e):void 0!==e&&null!=e&&F("openUrlError","string input expected for url."),o}function zt(){Rt({annotationsloaded:Ct})}function Pt(){Rt({formsloaded:Et})}function Dt(e){if(!(0<y.pageDivs.length&&void 0===y.pageDivs[0]._index))for(var t=0;t<y.pageDivs.length;t++)kt(y.pageDivs[t],e)}function Tt(e,t){var n=Be(e);n&&kt(n,t)}function kt(e,t){(Ae(e,Re(e._index),e._index)||t)&&(C.annotations&&C.annotations.showLayer(e._index,e),C.forms&&C.forms.showLayer(e._index,e),C.text&&S.allowtext&&C.text.showLayer(e._index,e))}function Ct(e){e.error&&(F("AnnotationsLoadError",e.error),S.annotationsurl=""),C.annotations&&jt({annotationsloaded:Ct})}function Et(e){e.error&&(F("FormsLoadError",e.error),S.formsurl=""),C.forms&&jt({formsloaded:Et})}function Mt(o,t,i,n){var r,a,e,l=this,s=(r=o,a=function(e){t(e.request.info)},Rt({handlerreturned:e=function e(t){t.request===r&&(jt({handlerreturned:e}),"function"==typeof a&&a.call(this,t))}}),e);if(Bt({type:"beforehandlerrequest",request:o}),!o.cancel&&(jt({handlerreturned:s}),o.serverurl&&!Qt.isEmptyObject(o.data))){if(!(o.info instanceof Qt&&"docpage"===o.type)){if("fileupload"!==o.type)return Qt.ajax({type:o.method,url:o.serverurl+o.query+"?",dataType:"json",data:o.data,success:t,error:i,crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0});var c="&"+Qt.param(o.data),u=new FormData;u.append("file",o.file,o.file.name);var d=Qt.ajax({type:o.method,url:o.serverurl+o.query+"??"+c,dataType:"json",data:u,contentType:!1,processData:!1,success:function(e){Nt(this,l),e.success&&(e.success=JSON.parse(e.success)),e.canceled&&(e.canceled=JSON.parse(e.canceled)),t(e,o.file.name)}.bind(this),error:function(e,t,n){Nt(this,l),i(t,n,o.file.name)}.bind(this),crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0,xhr:function(){var t=this;Nt(this,l);var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){Nt(this,t),e.lengthComputable&&(n(o.file.name,e.loaded,e.total)||d.abort())}.bind(this),!1),e}.bind(this)});return d}o.info.attr("src",o.serverurl+o.query+"&"+Qt.param(o.data))}}
/**
   * Resets the viewer to its default state.
   * @param {OpenUrlCallback} [callback]  - Function to execute when the empty process is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function empty
   */
function St(e){M.loading=!0;Ft(),bt({pagewidth:0,pageheight:0,pagecount:-1},function(){ve(),Bt({type:"documentunloaded"}),"function"==typeof e&&e.call()})}function Ft(e){var t;M.initialized&&(Se(),U(0),e||function(){for(var e=0;e<y.loadedImgs.length;e++)y.loadedImgs[e]&&(y.loadedImgs[e].dispose(),y.loadedImgs[e].remove());y.loadedImgs.length=0}(),y.edges[0].width(0).height(0),y.edges[1].width(0).height(0),y.scrollH&&(y.scrollH.scrollSize(0),xe(y.scrollH)),y.scrollV&&(y.scrollV.scrollSize(0),xe(y.scrollV)),t={backgroundImage:"",backgroundSize:"",backgroundRepeat:"",backgroundColor:""},y.edges[0].css(t),y.edges[1].css(t))}
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
function It(){return M.initialized}
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
   * Zooms in one level.
   * @param {NotificationCallback} [callback] - Function to execute when the zoom operation is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomIn
   */
function At(e){$e(!1,e)}
/**
   * Zooms out one level.
   * @param  {NotificationCallback} [callback] - Function to execute when the zoom operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomOut
   */function Ot(e){$e(!0,e)}
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
   */function Vt(e,t,n,o){null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null));var i=0,r=!1,a=wt(t,e,C.annotations),l=wt(n||e,e,C.forms);S.annotationsurl=a?a.url:S.annotationsurl,S.formsurl=l?l.url:S.formsurl;var s,c,u,d,h=function(e,t){--i<=0&&(Dt(!0),Bt({type:"documentloaded",customData:null==t?void 0:t.customData}),"function"==typeof o&&o.call(void 0,e,t))};if("string"==typeof e){if(0===e.length)St(h);else if(S.documenturl=e,M.initialized){Ft(),X(y.scrollH),X(y.scrollV),i++,0===e.length&&St(h);var f={};S.allowannotations&&a&&a.data&&(zt(),Qt.extend(f,a.data)),S.allowforms&&l&&l.data&&(Pt(),Qt.extend(f,l.data)),r=!0,vt(f,h)}}else!(e||!(0<S.documenturl.length)||!t&&""!==t&&!n&&""!==n)||F("openUrlError","string input expected for document url.");r||(a&&(i++,u=a,d=h,C.annotations&&(zt(),C.annotations.makeHandlerRequest(u,d))),l&&(i++,s=l,c=h,C.forms&&(Pt(),C.forms.makeHandlerRequest(s,c))))}
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
   */function Ht(e,t,n,o){"function"==typeof n&&(o=n,n={}),"function"==typeof t&&(o=t,t=S.savefileformat),"function"==typeof e&&(o=e,e=null),void 0===t&&(t=S.savefileformat);var i=Qt.extend(!0,n,{atala_subpath:e||"",atala_sformat:t});C.annotations&&Qt.extend(i,{atala_iuname:S.annotations.saveusername,atala_annos:C.annotations.stringifyChanges()}),C.forms&&Qt.extend(i,{atala_forms:C.forms.stringifyChanges()}),C.document&&Qt.extend(i,{atala_document:C.document.stringifyChanges()}),_t(i,o)}
/**
   * Gets the current page index
   * @returns {number} Zero based index of the current page.
   *
   * Note, that current page index detection could be affected by {@link WebDocumentViewerConfig.pageselectlocation|pageselectlocation} configuration parameter.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function getCurrentPageIndex
   */
function Lt(){return E.number-1}
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
function Rt(e,t){return pe(arguments,!0),i.on.apply(i,arguments),c}
/**
   * Detaches the handler from the event.
   * @param {string} event - the name of the event to unbind.
   * @param {function} [handler] -  the event handler to unbind. If not specified, all handlers are unbound.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function unbind
   */function jt(e,t){return pe(arguments,!1),i.off.apply(i,arguments),c}
/**
   * Triggers the event.
   * @param {string} event - the name of the event to trigger.
   * @param {Object} [parameters] - the event data.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function trigger
   */function Bt(e,t){return i.trigger.apply(i,arguments),c}
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
return c.__getDebugInfo=function(){var e={version:gn.join(".")};S.debug&&Qt.extend(!0,e,{dom:y,controllers:C,page:E});return e}
/**
   * [Internal] Gets the viewer linkage for controls that inherit this one
   * @param viewer object of type WebDocumentViewer
   * @returns linker object if possible, otherwise undefined
   */,c.__getViewerLink=function(e){if(e&&"Atalasoft.Controls.WebDocumentThumbnailer"===e.typeOf){var t=new function(){this.typeOf="__LVlinker",this._id=s,this._config=S,this._controllers=C,this._dom=y,this._page=E,this._state=M,this._annos=null,this._fields=null,this.stateManager=a,this.__createDialog=T,this.__createDiv=I,this.__createDOM=w,this.__createDropDownButton=A,this.__createDropDownMenu=O,this.__createMenu=D,this.__getPageSize=ce,this.__getTabularIndexOffset=le,this.__redrawVisiblePages=Dt,this.__adjustVisiblePages=ot,this.__onDocumentChanged=xt,this.__startDomManipulation=Ze,this.__endDomManipulation=Xe,this.__status=fe,this.__updatePageSize=g,this.__silentReloadPage=Le,this.__isObjectInRect=he,this.__getIndexFromPos=te,this.__showNext=Te,this.__showPrevious=De,this.__showPageAsync=Ee,this.__adjustEdgeHeights=ze,this.__getSelectedPagesIndices=N};return C.document.__linkChanges(t),S.allowannotations&&(e!==c&&0<S.annotationsurl.length&&(S.annotationsurl=""),C.annotations.__linkAnnotations(t)),S.allowforms&&(e!==c&&0<S.formurl.length&&(S.formurl=""),C.forms.__linkForms(t)),S.allowtext&&C.text&&C.text.__linkText(t),t}},c.dispose=
/**
   * Removes all DOM elements, internal references, and empties memory intensive objects.
   * The WebDocumentViewer will no longer function after a call to this method.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function dispose
   */
function(){if(a&&a.closeDocument(),Ft(),y.main&&y.main.remove(),y.toolbar&&(y.toolbar.controlgroup("destroy"),y.toolbar.remove(),y.toolbar.annoToolbar&&(y.toolbar.annoToolbar.controlgroup("destroy"),y.toolbar.annoToolbar.remove())),y.search&&y.search.dispose(),y.uploadCtrl&&y.uploadCtrl.remove(),y.main=null,y.toolbar=null,y.scroller=null,y.viewport=null,y.content=null,y.scrollH=null,y.scrollV=null,y.loadedImgs.length=0,y.pageDivs.length=0,y.pageLabel=null,y.status=null,y.search=null,y.uploadCtrl=null,y.edges){for(var e=0;e<y.edges.length;e++)y.edges[e]=null;y.edges=[]}for(var t in C)C.hasOwnProperty(t)&&null!==C[t]&&(C[t].dispose(),C[t]=null);M={prpr:0,batchoperation:0,loading:(E={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0}},c.empty=St,c.fit=it,c.getZoom=function(){return S.zoom},c.isReady=It,c.scrollTo=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);me(e,t,n,null,o)}
/**
   * Scrolls by the given deltas, does not account for zoom, i.e. `dx` and `dy` values are passed in window coordinate space.
   * @param {number} dx - Indicating delta of the x axis.
   * @param {number} dy - Indicating delta of the y axis .
   * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function scrollBy
   */,c.scrollBy=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);i=e,r=t,a=n,l=null,s=o,me(y.scroller.scrollLeft()+i,y.scroller.scrollTop()+r,a,l,s);var i,r,a,l,s},c.next=Te,c.previous=De,c.zoom=Je,c.zoomIn=At,c.zoomOut=Ot,c.openUrl=c.OpenUrl=Vt,c.save=Ht,c.uploadFiles=
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
function(e,t,n){C.upload.uploadFiles(e,t,n)}
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
   */,c.uploadFile=function(e,t,n){C.upload.uploadFile(e,t,n)}
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
   */,c.filterFilesForUpload=function(e,t,n){return C.upload.filterFilesPublic(e,t,n)},c.getCurrentPageIndex=Lt,c.bind=Rt,c.unbind=jt,c.trigger=Bt,c.getDocumentInfo=function(){return{count:C.document.getPageCount(),dpi:E.dpi,size:{height:E.size.height,width:E.size.width},vector:E.vector}},c.setMouseTool=function(e){for(var t in $t)if($t.hasOwnProperty(t)&&$t[t]===e){C.mouseTool.setTool(e);break}},c.isPageLoaded=function(e){var t=C.document.getPageDefinition(e);return 0<=t.cacheIndex&&y.loadedImgs[t.cacheIndex]&&y.loadedImgs[t.cacheIndex]._loaded}
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
   */,c.reloadPage=function(o,e,t,n,i){var r=Qt.Deferred(),a=Qt.Deferred(),l=Qt.Deferred(),s=Qt.Deferred();"function"==typeof n&&(i=n,n=void 0),"function"==typeof t&&(i=t,t=!1),"function"==typeof e&&(i=e,e=!1),"function"==typeof i&&r.done(i);var c=C.document.getPageDefinition(o);if(!c)return r.resolve(),r.promise();0<=c.cacheIndex&&y.loadedImgs[c.cacheIndex]?s=Le(c,n):Re(o,n,function(){s.resolve()});var u="string"==typeof e?e:c.uri?null:S.annotationsurl;S.allowannotations&&e&&(u||c.uri)?C.annotations.loadAnnotationsUrl(S.serverurl,u,c.uri,c.index,1,o,function(){a.resolve(!0)}):(e&&C.annotations.loadAnnotations({layers:[[]],offset:o}),a.resolve(!!e));var d="string"==typeof t?t:c.uri?null:S.formsurl;return S.allowforms&&t&&(S.formsurl||d)?C.forms.loadFormUrl(S.serverurl,d,c.uri,c.index,1,o,function(){l.resolve(!0)}):l.resolve(),Qt.when(s,a,l).done(function(e,t,n){(t||n)&&Tt(o,!0),r.resolve(o)}),r.promise()},c.showPage=ke,c.showPageNumber=Ce,mn(),xn(),vn(),yn(),c.annotations=mn.__exposedApi,c.document=xn.__exposedApi,c.forms=vn.__exposedApi,c.text=yn.__exposedApi,function(){It()||(M={prpr:0,batchoperation:0,loading:(E={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0});var e={_config:S,_id:s,_dom:y,_document:y.loadedImgs,_pages:y.pageDivs,_state:M,_internalEvents:r,_controllers:C,createDOM:w,createDiv:I,createDialog:T,createDropDownButton:A,createDropDownMenu:O,createMenu:D,drawAnnotation:ct,redrawVisiblePages:Dt,adjustVisiblePages:ot,startDomManipulation:Ze,endDomManipulation:Xe,redrawPageFromIndex:Tt,makeHandlerRequest:Mt,getPageScale:at,getPageSize:ce,getSourcePageSize:se,getPageRotation:lt,getViewerTransform:st,isPageInView:je,findPageFromIndex:Be,showPagePoint:Ne};C.document=new xn(c,e,s),c.document=C.document.__exposedApi,S.allowannotations?(C.annotations=new mn(c,e,!1),c.annotations=C.annotations.__exposedApi):(c.deselectAll=ht,c.createAnnotationOnPage=ht,c.getAnnotationsFromPage=ht,c.deleteAnnotationOnPageAtIndex=ht,c.setAnnotationDefaults=ht,c.setImages=ht,c.setStamps=ht),S.allowforms&&!C.forms&&(C.forms=new vn(c,e),c.forms=C.forms.__exposedApi),S.allowtext&&(C.text=new yn(c,e,S.mousetool?S.mousetool.text:{}),c.text=C.text.__exposedApi),C.upload=new bn(c,e),!1===M.initialized&&(M.initialized=!0,Rt({throwerror:_,pagedivsresized:f,documentchanged:xt,pagesizechanged:p}),S.parent?(S.parent instanceof Qt||(S.parent=Qt(S.parent)),S.parent.length||F("InitError","Parent element not found.")):F("InitError","No parent element given."),y.toolbar=(t=S.toolbarparent||S.parent,(n=function(e){var t=this,n={id:s+"_toolbar",parent:e,children:[{type:"button",id:"Button_PagePrev",cls:rn.atala_tool_button_page_prev,icon:"page-prev",tooltip:"Previous Page",text:null,onclick:function(){De()}},{type:"pagelabel",id:"Label_PageNumber",cls:rn.atala_page_label},{type:"button",id:"Button_PageNext",cls:rn.atala_tool_button_page_next,icon:"page-next",tooltip:"Next Page",text:null,onclick:function(){Te()}},{type:"button",id:"Button_ZoomOut",cls:rn.atala_tool_button_zoom_out,icon:"zoom-out",tooltip:"Zoom Out",text:"",onclick:function(){Ot()}},{type:"button",id:"Button_ZoomIn",cls:rn.atala_tool_button_zoom_in,icon:"zoom-in",tooltip:"Zoom In",text:"",onclick:function(){At()}},{type:"button",id:"Button_FitNone",cls:rn.atala_tool_button_fit_none,icon:"zoom-full",tooltip:"Full Size",text:"",onclick:function(){Je(1)}},{type:"button",id:"Button_FitBest",cls:rn.atala_tool_button_fit_best,icon:"fit-best",tooltip:"Best Fit",text:"",onclick:function(){it(tn.Best)}},{type:"button",id:"Button_FitWidth",cls:rn.atala_tool_button_fit_width,icon:"fit-width",tooltip:"Fit To Width",text:"",onclick:function(){it(tn.Width)}}]};return S.showselecttools&&n.children.splice(5,0,{type:"button",id:"Button_ZoomArea",cls:rn.atala_tool_button_zoom_area,icon:"zoom-area",tooltip:"Zoom Area",text:"",onclick:j}),S.allowtext&&(n.children.splice(3,0,{type:"button",id:"Button_Text",cls:rn.atala_tool_button_text_tool,icon:"text-tool",tooltip:"Text Selection",text:"",onclick:function(){C.mouseTool.setTool($t.Text)}}),n.children.splice(3,0,{type:"button",id:"Button_Text",cls:rn.atala_tool_button_pan_tool,icon:"pan-tool",tooltip:"Pan",text:"",onclick:function(){C.mouseTool.setTool($t.Pan)}})),S.showrotatetools&&(n.children.push({type:"button",id:"Button_RotateLeft",cls:rn.atala_tool_button_rotate_left,icon:"rotate-left",tooltip:"Rotate Left",text:"",onclick:B(270)}),n.children.push({type:"button",id:"Button_RotateRight",cls:rn.atala_tool_button_rotate_right,icon:"rotate-right",tooltip:"Rotate Right",text:"",onclick:B(90)})),0<S.savepath.length&&n.children.unshift({type:"button",id:"Button_Save",cls:rn.atala_tool_button_save,icon:"save",tooltip:"Save Changes",text:null,onclick:function(){Ht()}}),!1!==S.upload.enabled&&n.children.unshift({type:"button",id:"Button_Upload",cls:rn.atala_tool_button_upload,icon:"upload",tooltip:"Upload document",text:null,onclick:function(){!function(){var t=this;C.upload.uploadWithUi(function(e){Nt(this,t),e?(y.toolbar.controlgroup("enable"),S.allowannotations&&y.toolbar.annoToolbar.controlgroup("enable"),y.toolbar.find(".atala_page_label, .atala_search_container").removeClass("ui-state-disabled")):(y.toolbar.controlgroup("disable"),y.toolbar.annoToolbar&&y.toolbar.annoToolbar.controlgroup("disable"),y.toolbar.find(".atala_page_label, .atala_search_container").addClass("ui-state-disabled"))}.bind(this))}()}}),S.toolbarbuttons&&S.toolbarbuttons.reverse().forEach(function(e){Nt(this,t),n.children.unshift({type:"button",id:e.id,cls:e.class,tooltip:e.tooltip,onclick:e.onclick,text:null,icon:e.icon,custom:!0})}.bind(this)),P(n)}(t)).controlgroup(),S.allowannotations&&(n.annoToolbar=P({id:s+"_toolbar",parent:t,children:[{type:"button",id:"Button_Ellipse",cls:rn.atala_tool_button_ellipse_anno,icon:"ellipse",tooltip:"Draw Ellipse",text:"",onclick:ct},{type:"button",id:"Button_Highlight",cls:rn.atala_tool_button_highlight_anno,icon:"highlight",tooltip:"Draw Highlight",text:"",onclick:ct},{type:"button",id:"Button_Line",cls:rn.atala_tool_button_line_anno,icon:"line",tooltip:"Draw Line",text:"",onclick:ct},{type:"button",id:"Button_Lines",cls:rn.atala_tool_button_lines_anno,icon:"lines",tooltip:"Draw Poly Lines",text:"",onclick:ct},{type:"button",id:"Button_Freehand",cls:rn.atala_tool_button_freehand_anno,icon:"freehand",tooltip:"Draw Freehand",text:"",onclick:ct},{type:"button",id:"Button_Polygon",cls:rn.atala_tool_button_polygon_anno,icon:"polygon",tooltip:"Draw Polygon",text:"",onclick:ct},{type:"button",id:"Button_Rectangle",cls:rn.atala_tool_button_rect_anno,icon:"rectangle",tooltip:"Draw Rectangle",text:"",onclick:ct},{type:"button",id:"Button_Text",cls:rn.atala_tool_button_text_anno,icon:"text",tooltip:"Draw Text",text:"",onclick:ct}]}),n.annoToolbar.addClass(rn.atala_annotation_toolbar),n.annoToolbar.controlgroup()),S.showstatus&&(y.status=Qt('<div id="'+s+'_status" style="display:inline"></div>'),y.status.addClass(rn.atala_statusbar),n.append("Status:"),n.append(y.status)),S.allowtext&&S.mousetool.text.allowsearch&&(y.search=new R({parent:n})),n),y.toolbar.addClass(rn.atala_toolbar),y.main=I(S.parent),y.main.addClass(rn.atala_main_container),y.scroller=I(y.main),y.scroller.addClass(rn.atala_scroller),y.main.on({selectstart:v}),y.toolbar.attr("id",s+"_toolbar"),y.main.attr("id",s+"_main"),y.scroller.attr("id",s+"_scroller"),y.main.css({height:"100%",width:"100%",position:"relative"}),y.scroller.css({height:"100%",width:"100%",position:"relative"}),y.viewport=I(y.scroller,s+"_vp"),y.viewport.css({overflow:"hidden",fontSize:0,"touch-action":"none"}),y.viewport.addClass(rn.atala_viewport),y.viewport.attr("tabindex",-1),y.edges[0]=q(y.viewport,s+"_e0"),y.edges[0].addClass(rn.atala_dom_edge_first),y.content=I(y.viewport,s+"_ct"),y.content.addClass(rn.atala_content),y.content.css({"-ms-touch-action":"none",fontSize:0,overflow:"hidden"}),S.direction===en.Horizontal&&y.content.css({display:"inline-block"}),y.edges[1]=q(y.viewport,s+"_e1"),y.edges[1].addClass(rn.atala_dom_edge_last),Kt.Features.Compatibility&&F("InitError","Compatibility Mode is not supported."),!1!==S.upload.enabled&&(y.uploadCtrl=C.upload.getUploadControl()),Kt.Mobile.Any()?y.scroller.css({overflow:"hidden"}):S.showscrollbars?(y.scroller.css({overflow:"scroll"}),y.scrollH=Z(y.main,en.Horizontal),y.scrollH.attr("id",s+"_sH"),y.scrollH.addClass(rn.atala_scroll_horizontal),y.scrollV=Z(y.main,en.Vertical),y.scrollV.attr("id",s+"_sV"),y.scrollV.addClass(rn.atala_scroll_vertical)):y.scroller.css({overflow:"hidden"}),C.mouseTool=new _n(c,{_internalEvents:r,_controllers:C,zoomStart:Ye,zoom:Ge,zoomEnd:Qe,getActivePage:Pe,raiseDrawLayer:ft,resetDrawLayer:pt,getViewerTransform:st},y.viewport,y.scroller,Qt.extend({allowflick:S.allowflick},S.mousetool)),C.memory=new pn({highWaterMark:S.memorythreshold}),C.memory.bind({exceededhighwatermark:h}),C.annotations&&C.annotations.setViewPort(y.viewport),Bt("initialized"),S.direction===en.Horizontal&&y.viewport.css({"white-space":"nowrap"}),y.viewport.css({display:"table-cell"}),Y(y.scroller),y.scrollH&&y.edges[1].height(y.scrollH.scrollbarHeight()),C.mouseTool.setTool($t.Pan,$t.None),(S.documenturl||S.annotationsurl||S.formurl)&&Vt(S.documenturl,S.annotationsurl,S.formurl,o),Qt(m));var t,n}(),c}function zn(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that views, modifies, and saves documents, annotations and forms.
 * @param {WebDocumentViewerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @returns {WebDocumentViewer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */var Je=function(e,o){if(!ln())return null;var t,c={typeOf:e.type||"Atalasoft.Controls.WebDocumentViewer"},k="Atalasoft.Controls.WebDocumentThumbnailer"===c.typeOf,s="",C=150,u=500,x="atala-ui-icon",n=document.createElement("div"),i=Qt({}),r=Qt({}),a=new fn({get:function(){return c},isInitialized:Rt,switchDocument:_t,closeDocument:wt}),y={
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
uploadCtrl:null},E={annotations:null,document:null,forms:null,mouseTool:null,memory:null,text:null,upload:null},M={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},S={prpr:0,batchoperation:0,loading:!1,zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0},d={
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
fileaddedtoupload:null},F={
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
direction:en.Vertical,
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
fitting:tn.Width,
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
     * @property [forcepagesize] - Allows a custom page size to be used for force fitting all pages to. Ignored if {@link WebDocumentViewerConfig.forcepagefit|forcepagefit} is false.
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
pageselectlocation:Qt.extend({},nn.TopLeft),
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
     * @property {boolean} [singlepage=false] - Specifies whether pages should be displayed in a single page fashion, rather than one row or column. Takes precedence over {@link WebDocumentViewerConfig.tabular|tabular} flag. */
singlepage:!1,
/**
     * @property {boolean} [tabular=false] - Specifies whether pages should be displayed in a tabular(grid) fashion, rather than one row or column. Ignored if {@link WebDocumentViewerConfig.singlepage|singlepage} flag is set. */
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
type:$t.Pan,
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
scrolltriggerarea:on.Normal,
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
toolbarbuttons:null};if(e){var l=e.mousetool;e.mousetool&&"object"!=typeof e.mousetool&&(e.mousetool=Qt.extend({},F.mousetool,{type:l})),!e.tabular||e.direction!==en.Horizontal&&1!==e.columns||(e.tabular=!1),Qt.extend(!0,F,e),e.mousetool=l}if(F.direction=F.direction===en.Vertical||F.direction===en.Horizontal?F.direction:en.Vertical,F.fitting=F.fitting===tn.None||F.fitting===tn.Best||F.fitting===tn.Width||F.fitting===tn.Height?F.fitting:tn.Width,F.pageborderwidth=xe(F.pageborderwidth)?parseInt(F.pageborderwidth,10):1,F.pagespacing=xe(F.pagespacing)?parseInt(F.pagespacing,10):4,F.showpageborder=!!F.showpageborder,F.showpagenumber=!!F.showpagenumber,F.showstatus=!!F.showstatus,F.zoom=xe(F.zoom,!0)?parseFloat(F.zoom):1,F.scripturl=0<(t=F.scripturl).length&&-1===t.indexOf("/",t.length-1)&&-1===t.indexOf("\\",t.length-1)?F.scripturl+"/":F.scripturl,function(){if((F.mousetool.type===$t.ZoomArea||F.mousetool.type===$t.Selection||F.mousetool.type===$t.Text)&&!F.showselecttools){if(null!==e.showselecttools&&void 0!==e.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";F.showselecttools=!0}}(),function(){F.upload||(F.upload={enabled:!1});var e=F.upload;!1!==e.enabled&&(e.allowedmaxfilesize=dn(e.allowedmaxfilesize)?e.allowedmaxfilesize:Number.MAX_VALUE,e.allowdragdrop=!!e.allowdragdrop,e.allowmultiplefiles=!!e.allowmultiplefiles,e.allowedfiletypes="string"==typeof e.allowedfiletypes?e.allowedfiletypes:"",e.uploadpath="string"==typeof e.uploadpath?e.uploadpath:".",e.filesuploadconcurrency=dn(e.filesuploadconcurrency)?e.filesuploadconcurrency:1,e.closeuiafterupload=!1!==e.closeuiafterupload)}(),!sn(F.allowannotations,F.allowtext))return null;function h(){var e=E.memory.deallocateOldestEntry();!function(e){try{e.parentNode&&e.parentNode.removeChild(e),n.appendChild(e),n.innerHTML=""}catch(e){}}(e[0]),0<=e._cacheIndex&&(y.loadedImgs[e._cacheIndex]=null,e._cacheIndex=-1),e.remove(),e.length=0,e=null}function f(e){S.newpagedivsize={height:e.height,width:e.width},S.newpagedivfullzoom=e.fullzoom,F.minwidth=e.minwidth,F.zoom=e.fullzoom,Dt()}function p(e){var t=!1;(M.smallest.width<=0||e.width<M.smallest.width)&&(M.smallest.width=e.width,t=!0),(M.smallest.height<=0||e.height<M.smallest.height)&&(M.smallest.height=e.height,t=!0),k||(!function(e,t){if(F.direction===en.Vertical){if(y.scrollV)if(y.scrollV.scrollSize(Math.max(y.scrollV._scrollSize+t,0)),1===y.scrollV._ratio&&y.scrollV._scrollSize+t<3e4)y.scrollV._tray.height(y.scrollV._tray.height()+t),y.scrollV._max=Math.max(y.scrollV._tray.height()-y.scrollV[0].clientHeight,0)+1;else{var n=y.scrollV.height()-y.scrollH.scrollbarHeight()-1,o=(3e4-n)*y.scrollV._ratio;3e4<o+t?y.scrollV.ratio((o+t)/(3e4-n)):we()}Pe(y.scrollV),ze(y.scrollH,"width")}else if(F.direction===en.Horizontal){if(y.scrollH)if(y.scrollH.scrollSize(Math.max(y.scrollH._scrollSize+e,0)),1===y.scrollH._ratio&&y.scrollH._scrollSize+e<3e4)y.scrollH._tray.width(y.scrollH._tray.width()+e),y.scrollH._max=Math.max(y.scrollH._tray.width()-y.scrollH[0].clientWidth,0)+1,y.scrollH.ratio(y.scrollH._scrollSize/y.scrollH._max);else{var i=y.scrollH.width()-y.scrollV.width()-1,r=(3e4-i)*y.scrollH._ratio;3e4<r+e?y.scrollH.ratio((r+e)/(3e4-i)):we()}Pe(y.scrollH),ze(y.scrollV,"height")}if((0!==e||0!==t)&&0!==t){var a=y.scroller[0].scrollLeft,l=y.scroller[0].scrollTop;Oe(oe(a,l)+1),Gt({type:"scroll",x:a,y:l,dx:0,dy:0})}}(e.dx,e.dy),t&&Q(K())>y.pageDivs.length&&Dt())}function g(e,t,n,o){var i=t.getPageSize(e.index,s);if(!i){var r=t.getPageFitMultiplier(e.index,s),a=r,l={width:e.width,height:e.height};1===a&&F.forcepagefit&&(l.width!==n.width||l.height!==n.height)&&0<l.width&&0<l.height&&(a=l.width/n.width>l.height/n.height?n.width/l.width:n.height/l.height,t.setPageFitMultiplier(e.index,a,s)),t.setPageSize(e.index,Qt.extend({},l),s),o&&(l.width*=F.zoom*a,l.height*=F.zoom*a,(i=Qt.extend({},M.size)).width*=F.zoom*r,i.height*=F.zoom*r,e.dx=l.width-i.width,e.dy=l.height-i.height,p(e))}}function m(){Kt.Mobile.Any()?window.addEventListener("orientationchange",Je):window.addEventListener("resize",Je),y.scroller.scroll(De),W(M.buffer)}function v(e){var t=e.target||e.srcElement;return("TEXTAREA"===t.nodeName||"INPUT"===t.nodeName||"text"===t.type)&&((!t.attributes.selectable||"false"!==t.attributes.selectable.value)&&void 0)}function b(t,n){return function(e){try{e.currentTarget=n&&0<n.length?n[0]:e.currentTarget,t&&t(e)}catch(e){ve(e.message)}}}function I(e,t){if(F.showerrors)throw void 0===t?e:e+": "+t;ve(e+": "+t),Gt({type:"error",name:e,message:t})}function _(e){I(e.name,e.msg)}function w(e,t,n,o){var i=Qt("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function A(e,t,n){return w("div",e,t,n)}function z(e){var t=Qt('<div style="width:100%; height:100%; position:absolute; left: 0px; top: 0px; background: #F00; opacity:0.0;"></div>');return t.toFront=function(){t.css({"z-index":"10"}),t.reflow&&t.reflow()},t.reset=function(){t.css({"z-index":""}),t.reflow&&t.reflow()},e&&e.prepend(t),t}function P(e){var t=A(e.parent),n=s+"_toolbar";t.buttons=[];for(var o=0;e.children&&o<e.children.length;o++){var i=null;switch(e.children[o].type){case"button":if(Kt.Features.Touch&&("lines"===e.children[o].icon||"polygon"===e.children[o].icon))continue;e.children[o].id=n+"_"+e.children[o].id,(i=R(e.children[o],t)).addClass(rn.atala_toolbar_button),t.buttons.push(i);break;case"pagelabel":y.pageLabel=w("span",t,n+"_"+e.children[o].id),(i=y.pageLabel).addClass("ui-controlgroup-item")}i&&e.children[o].cls&&i.addClass(e.children[o].cls)}return t}function D(e){var t=Qt("<ul/>");for(var n in t.css({fontSize:"medium"}),t.addClass(rn.atala_context_menu),e)if(e.hasOwnProperty(n)){var o=Qt('<li><div href="#"> '+n+" </div></li>");Kt.Features.Touch&&o.on({touchend:e[n]}),o.click(e[n]),o.appendTo(t)}return t.menu(),t}function T(e,t,n){var o=Qt('<div title="'+t+'" />');return n&&o.append(n),o.dialog(),o}function O(e){var t=w("span",y.toolbar.annoToolbar).addClass("ui-controlgroup-item");return R(e,t),L(t,e.id+"_Drop","ui-icon-triangle-1-s","Click To Choose",null,function(){var e=Qt(this).next();if(e.is(":visible"))return e.hide(),!1;var t=e.prev().prev().parent();return e.menu().show().css({position:"absolute",top:0,left:0,"min-width":t.width()+"px","z-index":11}).position({my:"left top",at:"left bottom",of:t}),!1}),t.controlgroup(),y.toolbar.annoToolbar.controlgroup("refresh"),t}function V(e,t,n){for(var o=Qt(e.children().first()),i={},r=0;r<n.length;r++)i[n[r].name]=H(o,t,n[r]);o.menu=D(i),e.append(o.menu),o.menu.hide()}function H(e,t,n){var o=function(){return e.button("option","label","Draw "+n.name),e.data("_annoConfig",n),e.click(t.onclick),e.menu.hide(),e.trigger("click"),!1};return Xt("menuselect"+t.icon+n.name,b(o,e)),o}function L(e,t,n,o,i,r){var a=Qt('<button id="'+t+'" title="'+o+'">'+(i||o)+"</button>");return r&&a.click(r),a.button({icon:n,showLabel:null!=i&&F.showbuttontext}),a.addClass("atala-ui-button"),e&&a.appendTo(e),a}function R(e,t){var n,o="menuclick"+(e.custom?e.id:e.icon),i=L(t,e.id,e.custom?e.icon:x+" "+x+"-"+e.icon,e.tooltip,e.text,(n=o,function(e){e.preventDefault(),Gt(n,arguments)}));return i.data("_config",e),Xt(o,b(e.onclick,i)),i}function j(e){var t,n,o={clearable:"atala_search_input_clearable",onclear:"atala_search_input_clear_hover",inputEmpty:"atala_search_input_empty",loading:"atala_search_input_loading"},i=e.parent||y.toolbar,r=null,a=null;function l(){var e=n.val();return e?n.addClass(o.clearable):n.removeClass(o.clearable),!!(e&&r&&r.isValid()&&e===r.getQuery())||(clearTimeout(a),r=null,e&&3<=e.length?(p(!0),a=setTimeout(function(){r=E.text.search(e,Zt(),h),f(!0)},F.mousetool.text.searchdelay),!1):void d())}function s(e){var t=n.val();return 13===e.keyCode&&r&&t&&r.isValid()&&r.getQuery()===t?(e.shiftKey?u():c(),!1):13!==e.keyCode||r&&r.isValid()?27===e.keyCode?(d(),b(),!1):void 0:(l(),!1)}function c(){r&&(f(!0),r.next(h))}function u(){r&&(f(!0),r.prev(h))}function d(){r=null,E.text.search(""),E.text.clearSelection(),f(!1),p(!0)}function h(e,t){e.isValid()&&(f(!1),e.wrap=F.mousetool.text.wrapsearch,t||p(t))}function f(e){m(o.loading,e)}function p(e){m(o.inputEmpty,!e)}function g(t){return function(e){e.preventDefault(),t&&t()}}function m(e,t){t?n.addClass(e):n.removeClass(e)}function v(e){m(o.onclear,this.offsetWidth-18<e.clientX-this.getBoundingClientRect().left)}function b(e){e&&e.preventDefault(),n.removeClass(o.clearable).removeClass(o.onclear).val("").change(),l()}!function(){t=A().addClass(rn.atala_search_container).addClass("ui-controlgroup-item"),(n=Qt('<input type="text" placeholder="Search..." />').addClass(rn.atala_search_input).addClass("ui-widget")).on({keydown:s,"input propertychange":l}),w("span",t).css({width:"100%"}).append(n);var e=w("span",t);L(e,null,x+" "+x+"-search-next","Next",null,g(c)).addClass(rn.atala_search_next).addClass(rn.atala_toolbar_button),L(e,null,x+" "+x+"-search-prev","Previous",null,g(u)).addClass(rn.atala_search_prev).addClass(rn.atala_toolbar_button),t.on("mousemove","."+o.clearable,v).on("touchstart click","."+o.onclear,b),i.append(t),i.append(Qt('<div style="clear:both;"></div>'))}(),this.dispose=function(){n.off({keypress:s,"input propertychange":l}),t.off("mousemove","."+o.clearable,v).off("touchstart click","."+o.onclear,b),r&&r.dispose();t.remove()}}function B(){F.allowannotations&&c.annotations.cancelDraw(),E.mouseTool.setTool($t.ZoomArea)}function N(o){return function(){var t=this,e=q(M),i=e[0],n=[];e.forEach(function(e){return zn(this,t),n.push(E.document.getPageRotation(e)+o)}.bind(this)),E.document.rotatePages(e,n,function(){var e=ht(i),t=he(i),n=F.direction===en.Vertical?t.height*e:0;Ge(F.pageselectlocation,nn.Center)||Ge(F.pageselectlocation,nn.MiddleLeft)?n/=2:Ge(F.pageselectlocation,nn.TopLeft)&&(n=0);var o={x:F.direction===en.Vertical?0:n,y:F.direction===en.Vertical?n:0};Ye(i,o,F.pageselectlocation,!0)})}}!function(){var e=F.parent.attr("id")+"_wdv";++hn.instanceCounter;for(;document.getElementById(e+hn.instanceCounter);)++hn.instanceCounter;s=e+hn.instanceCounter}(),
/**
   * @member {WebDocumentViewerConfig} config - Current control configuration.
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @instance
   * @alias config
   */
c.config=F,
/** WARNING: Changing values from these references can cause instability.*/
c.events=d,
/** WARNING: Changing values from these references can cause instability.*/
c.domclasses=rn,
/** WARNING: Changing values from these references can cause instability.*/
c.domattributes=an;var q=function(e){return[e.number-1]};function U(e,t){var n=A(e,t);return F.direction===en.Vertical?(n.height(1),n.css({display:"block"})):F.direction===en.Horizontal&&(n.width(1),n.css({display:"inline-block",overflow:"hidden"})),n._zoom=1,F.backcolor&&n.css({backgroundColor:F.backcolor}),n}function W(e){if(void 0===e){var t=Q(k&&S.newpagedivsize&&0<F.zoom&&isFinite(F.zoom)?F.zoom:K());M.buffer<t&&(M.buffer=t),M.buffer=Math.min(M.buffer,E.document.getPageCount()),e=M.buffer}function n(t){return function(){var e;e=t,S.activepage=e}}if(y.pageDivs.length<e)for(var o=y.pageDivs.length;o<e;o++)y.pageDivs[o]=A(),y.pageDivs[o].addClass(rn.atala_page_div),F.showselecttools&&(y.pageDivs[o]._rubberband=new wn(c,{},y.pageDivs[o],{getViewportSize:fe,getMaxZoom:$,getPageOffsets:le,raiseDrawLayer:xt,resetDrawLayer:yt})),y.pageDivs[o].on({touchstart:n(y.pageDivs[o]),mousedown:n(y.pageDivs[o])}),E.annotations&&E.annotations.addDrawingSurface(y.pageDivs[o]),(F.showselecttools||F.allowannotations||F.allowforms||F.allowtext)&&(y.pageDivs[o]._draw=z(y.pageDivs[o])),E.forms&&!k&&E.forms.addFormLayer(y.pageDivs[o]),E.text&&!k&&E.text.addTextLayer(y.pageDivs[o]);else if(y.pageDivs.length>e)for(;y.pageDivs.length>e&&0!==y.pageDivs.length;){var i=y.pageDivs.pop();i._rubberband&&i._rubberband.dispose(),E.annotations&&E.annotations.removeDrawingSurface(i),E.forms&&!k&&E.forms.removeFormLayer(i),E.text&&!k&&E.text.removeTextLayer(i),i&&Le(i),i=null}}function Z(e,a,t,n){"function"==typeof t&&(n=t,t=void 0);var o="function"==typeof n?[n]:[],u=Qt(new Image),i=.9,l=Qt.extend(!0,{atala_cb:void 0},t||{});u._domEl=A(),u._domEl.addClass(rn.atala_page_image_anchor),u.addClass(rn.atala_page_image),u._domEl.append(u);var r={load:v,error:function(){z(),I("ImageError","Image at frameIndex "+d()+" failed to load.")},inserted:function(){u._loaded&&b()}};function d(){return u._page?u._page._index:E.document.getPageIndexByImageIndex(u._index)}function s(){return u._domEl}function c(e){return E.document.getPageFitMultiplier(void 0!==e?e:d())}function h(e,t){return(e=void 0===e?F.zoom:e)*c(t)}function f(){var e=he(d())||M.size;return{height:e.height,width:e.width}}
/**
     * Returns physical size of the image without client transformations applied(like view rotation)
     */function p(){var e=f();return 90===u._viewrotation||270===u._viewrotation?T(e):e}function g(e,t){return t=t||f(),{height:Math.round(t.height*h(e)),width:Math.round(t.width*h(e))}}function m(e){var t=d(),n=M.vector&&(!a||!a.uri)?h():Math.min(h(),1),o=E.document.getPageRotation(t);if(e||n!==u._zoom||u._rotation!==o){var i=Qt.extend({atala_docurl:a?a.uri:u.documenturl,atala_doczoom:n,atala_thumbpadding:!1},l);o&&(i.atala_angle=o),F.jpeg&&(i.atala_jpeg=!0);var r={type:"docpage",serverurl:F.serverurl,query:"?ataladocpage="+(null===a?u._index:void 0!==a.index?a.index:a),method:"GET",data:i,cancel:!1,info:u};u._reqzoom=n,u._reqangle=o,Vt(r,v,v)}}function v(){u._loaded||u._domEl.removeClass(rn.atala_page_loading),u._loaded=!0,u._zoom=u._reqzoom,u._rotation=u._reqangle;var e=d();if(0<=e){if(u._rotation!==E.document.getPageRotation(e))return void m();(u._viewrotation=0)<u.parent().length&&b(),D(u._viewrotation);var t=M.vector?h():Math.min(h(),1);y()&&u._zoom<t*i&&!J(u._zoom,t)&&x(!1)}z()}function b(){var e;(e=u)&&(e.removeAttr("width height"),e.css({width:"auto",height:"auto"}));var t=u.prop("naturalWidth")||0,n=u.prop("naturalHeight")||0,o=t||u.width(),i=n||u.height(),r=f(),a=h(),l=!1;if(0!==o&&0!==i){var s;u._size.width=Math.round(o/u._zoom),u._size.height=Math.round(i/u._zoom),90!==u._viewrotation&&270!==u._viewrotation||(u._size=T(u._size)),u._size.width===M.size.width&&u._size.height===M.size.height||J(u._size.width,r.width)&&J(u._size.height,r.height)||(l=!0,E.document.setPageSize(d(),u._size)),null===E.document.getPageSize(d())&&(l=!0,E.document.setPageSize(he,u._size)),F.forcepagefit?(s=function(e){e=e||u._size;var t={width:F.forcepagesize.width*(k?1:F.zoom),height:F.forcepagesize.height*(k?1:F.zoom)};return(t.width<1||t.height<1)&&(t.width=M.size.width*F.zoom,t.height=M.size.height*F.zoom),e.width/t.width>e.height/t.height?t.width/e.width:t.height/e.height}()/F.zoom,E.document.setPageFitMultiplier(d(),s),w()):(u._zoom!==F.zoom||l||0!==u._viewrotation)&&w();var c=g();l&&u.trigger({type:"pagesizechanged",image:u,index:d(),width:u._size.width,height:u._size.height,dx:Math.round(c.width-r.width*a),dy:Math.round(c.height-r.height*a)}),u.trigger({type:"pageresize",image:u,index:d(),width:c.width,height:c.height})}}function x(e,t){y()&&!u._size.isEmpty()?("function"==typeof t&&o.push(t),u._prevzoom=u._reqzoom,e&&!S.loading?u.animate({height:Math.round(u._size.height*h()),width:Math.round(u._size.width*h())},{duration:C,easing:"easeOutQuad",complete:_,queue:!1}):(w(),_())):"function"==typeof t&&t.call(this,u)}function y(){if(!u._loaded)return!1;var e=!M.vector&&1===u._reqzoom&&1===u._prevzoom&&1<h(),t=J(u._reqzoom,h())||e;if(!t){var n=Math.abs(u._reqzoom*u._size.width-h()*u._size.width),o=Math.abs(u._reqzoom*u._size.height-h()*u._size.height);n<1&&o<1&&(t=!0)}return!t||!J(u._scaledzoom,h())}function _(){u.trigger({type:"pagezoom",index:d(),height:Math.round(u._size.height*h()),width:Math.round(u._size.width*h()),prevzoom:u._prevzoom,zoom:h()}),0===S.prpr?m():z()}function w(){var e,t,n,o=g(void 0,p()),i=g(),r=u.prop("naturalWidth")||0,a=u.prop("naturalHeight")||0,l=r&&Math.abs(r-o.width)/o.width<.01,s=a&&Math.abs(a-o.height)/o.height<.01;l&&s||(u.height(o.height),u.width(o.width)),u._domEl.width(i.width),u._domEl.height(i.height),u._scaledzoom=h(),D(u._viewrotation),e=d(),t=i.width,i.height,null!=(n=Xe(e))&&null!=n._num&&n._num.css({left:t-20,right:0})}function z(){0<o.length&&function(e){var t=Array.prototype.slice.call(arguments,1);for(;e.length;)e.shift().apply(this,t)}(o,u)}function P(){var e=E.document.getPageRotation(d());return 0===u._viewrotation&&e!==u._rotation||0!==u._viewrotation}function D(e){var t=p(),n=g(void 0,t),o=0,i=0,r="";90!==e&&270!==e||(o=(n.height-n.width)/2,k&&t.width<t.height&&(o=0),i=(n.width-n.height)/2,n=T(n)),0!==e?(r+=" translate("+o+"px,"+i+"px)",r+="rotate("+e+"deg)",u.css(un(r))):u.css(un("")),s().css({width:n.width,height:n.height}),u._viewrotation=e}function T(e){var t=e.width;return e.width=e.height,e.height=t,e}return u._binds=r,u.documenturl=F.documenturl,u._index=a?a.mapsto:e,u._loaded=!1,u._size={width:0,height:0,isEmpty:function(){return 0===this.width&&0===this.height}},u._zoom=-1,u._prevzoom=u._zoom,u._scaledzoom=-1,u._rotation=0,u._viewrotation=0,u.dispose=function(){u.off(r),u._page=null,u=null},u.zoom=x,u.needsZoom=y,u.getSize=f,u.getScaledSize=g,u.getFitZoom=h,u.getFitMultiplier=c,u.needsRotate=P,u.rotate=function(e){"function"==typeof e&&o.push(e);if(P()){var t=E.document.getPageRotation(d());if(n=E.document.getPageRotation(d()),(0===u._viewrotation&&n!==u._rotation||0!==u._viewrotation&&(u._viewrotation+u._rotation)%360!==n)&&u&&u._loaded&&u._page&&(D(t=(360+t-u._rotation)%360),b()),0===S.prpr&&u._loaded)return void m()}var n;z()},u.getDomElement=s,u.invalidate=function(e,t){"function"==typeof e&&(t=e,e={});(l=Qt.extend(!0,{},e)).atala_cb=Math.floor(1e9*Math.random()),"function"==typeof t&&o.push(t);m(!0)},function(){u.on(r);var e=F.pageborderwidth,t={bottom:0,top:0,right:0,left:0};u._loaded=!1,u._reqzoom=-1,(F.direction===en.Vertical||F.tabular)&&(t.bottom=F.pagespacing);(F.direction===en.Horizontal||F.tabular)&&(t.right=F.pagespacing);var n=s();F.showpageborder&&n.css({"border-bottom":e+"px solid black","border-right":e+"px solid black","border-top":e+"px solid silver","border-left":e+"px solid silver","margin-bottom":t.bottom+"px","margin-right":t.right+"px"});n.css({display:"inline-block"}),n.addClass(rn.atala_page_loading),m()}(),u}function X(e,t){var n="overflow:scroll; position:absolute; background-color:Transparent;",o=A(e);o.css({position:"absolute",display:"none","background-color":"white"});var i=null,r=!1;function a(){i._tooltip.hide(),M.number===i._pagenum||Ze(i._pagenum)||Ie(i._pagenum),St()}function l(e,t){if(F.forcepagefit){t*=e._ratio;var n=e.ScrollDirection===en.Vertical?{x:0,y:t}:{x:t,y:0};return oe(n.x,n.y)+1}return Math.floor(t/(e._max/E.document.getPageCount()))+1}return t===en.Horizontal?(Kt.Firefox&&(n=n.replace("overflow","overflow-x")),(i=Qt('<div style="'+n+'bottom:0px; left:0px; width:100%;z-index:10"></div>').appendTo(e))._tray=Qt('<div style="height:1px;"></div>').appendTo(i)):(Kt.Firefox&&(n=n.replace("overflow","overflow-y"),n+="width:"+(function(){var e=A(Qt("body")),t=A(e);e.css({width:"50px",height:"50px",overflow:"hidden",position:"absolute",visibility:"hidden"}),t.css({width:"100px",height:"100px"});var n=e.width();e.css({"overflow-y":"scroll"});var o=n-e[0].clientWidth;return Qt(e).remove(),o}()+1)+"px;",r=!0),(i=Qt('<div style="'+n+'top:0px; right:0px; height:100%;z-index:10"></div>').appendTo(e))._explicitSize=r,i._tray=Qt('<div style="width:1px;"></div>').appendTo(i)),G(i),i._ratio=1,i.ScrollDirection=t,i._tooltip=o,i._pagenum=-1,i._scrollSize=0,i.pageNum=function(e){i._pagenum=e},i.scrollbarHeight=function(){return i.height()-i[0].clientHeight},i.scrollSize=function(e){i._scrollSize=e},i.ratio=function(e){i._ratio=e},i.on({scroll:function(){if(!i.propagationPaused()){clearTimeout(i._tooltip._timeout),y.scroller.stop(),y.scroller.pauseEventPropagation(!0);var e={};i.ScrollDirection===en.Vertical?(y.scroller.scrollTop(i[0].scrollTop*i._ratio),i._pagenum=l(i,i[0].scrollTop),e.right=i.outerWidth()+10+"px",e.top=16+Math.round((i[0].offsetHeight-48)/i[0].scrollHeight*i[0].scrollTop)+"px"):i.ScrollDirection===en.Horizontal&&(y.scroller.scrollLeft(i[0].scrollLeft*i._ratio),i._pagenum=l(i,i[0].scrollLeft),e.bottom=i.outerHeight()+10+"px",e.left=16+Math.round((i[0].offsetWidth-48)/i[0].scrollWidth*i[0].scrollLeft)+"px"),i.ScrollDirection===F.direction&&F.showpagenumbertooltip&&("none"===i._tooltip.css("display")&&(i._tooltip.css(e),i._tooltip.show()),F.showpagenumbertooltip&&i._tooltip.html("Page "+i._pagenum),i._tooltip._timeout=setTimeout(a,1e3))}}}),i}function Y(e){e&&e._tooltip&&(clearTimeout(e._tooltip._timeout),e._tooltip.hide())}function G(t){var n={scroll:function(){t.off(n),t.resumeEventPropagation()}};t._pauseEP=0,t.propagationPaused=function(){return 0<t._pauseEP},t.pauseEventPropagation=function(e){t._pauseEP++,e&&t.on(n)},t.resumeEventPropagation=function(){0<t._pauseEP&&t._pauseEP--}}function Q(e){var t=fe(),n=ee(0,e);n.width=0<M.smallest.width&&M.smallest.width<n.width&&!k?M.smallest.width:n.width,n.height=0<M.smallest.height&&M.smallest.height<n.height&&!k?M.smallest.height:n.height;var o,i=Math.ceil(t.width/n.width)+2,r=Math.ceil(t.height/n.height)+2;return F.tabular?(F.direction===en.Vertical&&0<F.columns?i=F.columns:F.direction===en.Horizontal&&0<F.rows&&(r=F.rows),o=i*r):F.direction===en.Vertical?o=r:F.direction===en.Horizontal&&(o=i),o}function J(e,t){return t<e+.001&&e-.001<t}function K(){return 0!==M.size.width?F.minwidth/M.size.width:1}function $(){return 0!==M.size.width?F.maxwidth/M.size.width:1}function ee(e,t,n){if(E.document.getPageCount()<=0)return{width:0,height:0};if(n=void 0===n||n,S.newpagedivsize){var o={width:S.newpagedivsize.width,height:S.newpagedivsize.height},i=F.showpageborder&&n?2*F.pageborderwidth:0,r=(t||F.zoom)/S.newpagedivfullzoom;return o.height=Math.round(o.height*r)+i,o.width=Math.round(o.width*r)+i,o}return te(e,t||F.zoom,F.showpageborder&&n)}function te(e,t,n){var o,i=Qt.extend({},he(e)),r=n?2*F.pageborderwidth:0;return t*=(o=e,E.document.getPageFitMultiplier(o)),i.height=Math.round(i.height*t)+r,i.width=Math.round(i.width*t)+r,i}function ne(e,t){return le(null,e,t).index}function oe(e,t){var n=fe(),o={x:e+F.pageselectlocation.x*n.width,y:t+F.pageselectlocation.y*n.height};return ne(o.x,o.y)}function ie(e,t){for(var n={left:0,top:0},o=e;null!=o&&o!==t;o=o.offsetParent)n.left+=o.offsetLeft,n.top+=o.offsetTop;return n}var re={height:0,isEmpty:function(){return 0===this.width&&0===this.height},width:0,zero:function(){this.width=0,this.height=0},zoom:1};function ae(){if(re.isEmpty()||re.zoom!==F.zoom){var e=le(null,null,null,F.zoom);re.height=e.height,re.width=e.width,re.zoom=F.zoom}return re}function le(e,t,n,o){return se(0,e,t,n,o)}function se(e,t,n,o,i){if(F.tabular)return function(e,t,n,o,i){if(t<e)return{width:0,height:0,index:t};var r=ce(e,n,o,i),a=ce(t,n,o,i);return a.height=F.direction===en.Vertical?a.height-r.height:a.height,a.width=F.direction===en.Horizontal?a.width-r.width:a.width,a}(e,t,n,o,i);var r=E.document.getPageCount();t=t||0===t?t:r;var a={height:0,width:0,index:e=e||0};if(F.direction===en.Vertical)for(var l=null,s=e;s<r&&s<t&&(a.height+(l=ee(s,i).height)<=o||null==o);s++)a.height+=l+F.pagespacing,a.index++;else if(F.direction===en.Horizontal)for(var c=null,u=e;u<r&&u<t&&(a.width+(c=ee(u,i).width)<=n||null==n);u++)a.width+=c+F.pagespacing,a.index++;return a.index>=r&&0<r&&(a.index=r-1),a}function ce(e,t,n,o){var i,r,a=E.document.getPageCount(),l={height:0,width:0,index:0},s=ue(o);e=null==e?e=a:e,F.direction===en.Vertical?(i=s||1,r=Math.ceil(a/i)):F.direction===en.Horizontal&&(r=s||1,i=Math.ceil(a/r));var c=ee(0,o);c.width+=F.pagespacing,c.height+=F.pagespacing;var u=null==n?Math.floor(e/i):Math.floor(n/c.height),d=null==t?e%i:Math.ceil(t/c.width);return l.height=u*c.height,l.width=d*c.width,l.index=u*i+d,l.index>=a&&0<a&&(l.index=a-1),l}function ue(e){var t=1;if(F.tabular){var n=F.pagespacing||0,o=ee(0,e);F.direction===en.Vertical?(t=Math.floor(y.content.width()/o.width),t=Math.min(t,Math.floor((y.content.width()-t*n)/o.width))):F.direction===en.Horizontal&&(t=Math.floor(y.content.height()/o.height),t=Math.min(t,Math.floor((y.content.height()-t*n)/o.height)))}return t||1}function de(e,t){var n=he(e);return(ft(e)+(t||0))%180==0?n:{width:n.height,height:n.width}}function he(e){var t=E.document.getPageSize(e);return t||M.size}function fe(){return{width:y.scrollV?y.main.width()-y.scrollV.width():y.main.width(),height:y.scrollH?y.main.height()-y.scrollH.scrollbarHeight():y.main.height()}}function pe(e,t){var n={status:"fail",started:!1,reason:e};return"function"==typeof t&&t.call(),n}function ge(e,t,n,o,i,r){var a=ie(e,t);return a.left<=i&&a.left+e.clientWidth>=n&&a.top<=r&&a.top+e.clientHeight>=o}function me(e,t,n){return t<e.length&&(e.splice(n,0,e.splice(t,1)[0]),!0)}function ve(e){F.showstatus&&y.status&&y.status.html(e),Gt({type:"statusmessage",message:e})}function be(e,t){var n;if(1===e.length&&"object"==typeof e[0])n=e[0];else if("string"==typeof e[0]){n={};var o=null;3===e.length?o=e[2]:2===e.length&&(o=e[1]);for(var i=-1<e[0].indexOf(" ")?e[0].split(" "):[e[0]],r=0;r<i.length;r++)n[i[r]]=o}for(var a in n)if(n.hasOwnProperty(a)){var l=null;if(a in d?l=d:c&&a in c.annotations.events?l=c.annotations.events:c&&a in c.forms.events?l=c.forms.events:c&&a in c.document.events&&(l=c.document.events),null==l&&(l=d),null==l[a])t&&(l[a]=[n[a]]);else if(t)l[a].push(n[a]);else if(n[a])for(var s=0;s<l[a].length;s++)l[a][s]===n[a]&&l[a].splice(s,1);else l[a].length=0}}function xe(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function ye(e,t,n,o,i){if(null==i&&"function"==typeof o&&(i=o,o=null),e=null==e?y.scroller.scrollLeft():e,t=null==t?y.scroller.scrollTop():t,F.direction===en.Horizontal){if(e>y.viewport.width()){var r=ae();if(e<r.width&&0<y.content.width()){var a=r.width-(y.edges[0].width()+y.content.width());y.edges[1].width(a)}}}else if(F.direction===en.Vertical&&t>y.viewport.height()){var l=ae();if(t<l.height&&0<y.content.height()){var s=l.height-(y.edges[0].height()+y.content.height());y.edges[1].height(s)}}y.scroller.stop(),!n||S.loading||S.scrollPos.x===e&&S.scrollPos.y===t?(y.scroller.scrollLeft(e),y.scroller.scrollTop(t),"function"==typeof i&&i.call()):Qt.when(y.scroller.animate({scrollLeft:e,scrollTop:t},{duration:o||u,easing:"easeOutQuad",queue:!1})).done(i)}function _e(e,t){if(y.scroller.is(":animated"))return pe("scrolling",t);var n=le(M.number+e-1);ye(n.width,n.height,!0,t)}function we(){if(y.scrollH&&y.scrollV){var e=E.document.getPageCount();if(y.scrollH.pauseEventPropagation(),y.scrollV.pauseEventPropagation(),F.direction===en.Vertical){ze(y.scrollH,"width");var t=Math.round(le(e-1).height+ee(e-1).height);Kt.Firefox&&(t+=Math.round(y.scrollH.scrollbarHeight())),y.scrollV.scrollSize(t-(y.scrollV.height()-y.scrollH.scrollbarHeight()-1)),3e4<t?(y.scrollV.ratio(t/(3e4-(y.scrollV.height()-y.scrollH.scrollbarHeight()-1))),y.scrollV._tray.height(3e4)):(y.scrollV._tray.height(t),y.scrollV.ratio(1)),Pe(y.scrollV)}else if(F.direction===en.Horizontal){ze(y.scrollV,"height");var n=Math.round(le(e-1).width+ee(e-1).width);y.scrollH.scrollSize(n),3e4<n?(y.scrollH.ratio(n/(3e4-(y.scrollH.width()-y.scrollV.width()-1))),y.scrollH._tray.width(3e4)):(y.scrollH._tray.width(n),y.scrollH.ratio(1)),Pe(y.scrollH)}y.scrollV._max=Math.max(y.scrollV._tray.height()-y.scrollV.height(),0)+1,y.scrollH._max=Math.max(y.scrollH._tray.width()-y.scrollH.width(),0)+1,y.scrollH.resumeEventPropagation(),y.scrollV.resumeEventPropagation()}}function ze(e,t){if(e){var n=Math.round(M.size[t]*F.zoom);if(F.tabular)n=y.content[t]();else for(var o=0;o<y.pageDivs.length;o++)null!=y.pageDivs[o]._index&&(n=Math.max(ee(y.pageDivs[o]._index)[t],n));e._tray[t](n),e.scrollSize(n-e[t]()),Pe(e),e.ratio(1)}}function Pe(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}function De(e){if(!S.zooming&&!S.scrollBuffer&&y.pageDivs.length){var t=(new Date).getTime(),r=y.scroller[0].scrollLeft,a=y.scroller[0].scrollTop,n=r+y.scroller[0].clientWidth,o=a+y.scroller[0].clientHeight,i=ne(r,a)+1,l=Math.abs(i-M.number)/ue();if(!S.loading){var s=E.document.getPageCount(),c=y.pageDivs[0]._index,u=y.pageDivs[y.pageDivs.length-1]._index,d=0===l&&(M.number-1<c||M.number-1>u);l<y.pageDivs.length&&!d?ge(y.edges[1][0],y.scroller[0],r,a,n,o)&&u<s-1?Se(l):ge(y.edges[0][0],y.scroller[0],r,a,n,o)&&0<c?Me(l):i!==M.number&&null===Xe(i-1)&&Ie(i):Ae(i,!1,null),ct()}if(Oe(oe(r,a)+1),!y.scroller.propagationPaused()&&y.scrollH&&y.scrollV){var h=Math.round(r/y.scrollH._ratio),f=Math.round(a/y.scrollV._ratio);h!==y.scrollH.scrollLeft()&&(y.scrollH.pauseEventPropagation(!0),y.scrollH.scrollLeft(h)),f!==y.scrollV.scrollTop()&&(y.scrollV.pauseEventPropagation(!0),y.scrollV.scrollTop(f))}Gt({type:"scroll",x:r,y:a,dx:r-S.scrollPos.x,dy:a-S.scrollPos.y}),e&&(S.scrollTimeout&&clearTimeout(S.scrollTimeout),S.scrollTimeout=setTimeout(function(){var e,t,n,o,i;e=r,t=a,n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop,i=n===S.scrollPos.x&&o===S.scrollPos.y,e===S.scrollPos.x&&t===S.scrollPos.y&&i?(St(),S.scrollTimeout=null,S.loading||ct()):i||(De({}),S.scrollTimeout=null)},500),S.scrollPos.x=y.scroller[0].scrollLeft,S.scrollPos.y=y.scroller[0].scrollTop,S.scrollPos.t=t),S.scrollBuffer=e?setTimeout(Te,50):null}}function Te(){null!==S.scrollBuffer&&(clearTimeout(S.scrollBuffer),S.scrollBuffer=null)}function ke(){if(F.direction===en.Horizontal){var e=y.pageDivs.length?(k?Math.max(M.size.height,M.size.width):M.size.height)*F.zoom:0;F.thumbpadding&&"number"==typeof F.thumbpadding&&(e+=2*F.thumbpadding),y.edges[0].height(e),y.edges[1].height(e)}}function Ce(e,t){t=t||0===t?t:e+y.pageDivs.length-1,t=Math.max(e,t);var n=F.tabular?ue():1,o=F.tabular?(Math.floor(t/n)+1)*n-t:1,i=le(e),r=E.document.getPageCount(),a=t<r?ee(t):{width:0,height:0},l=t<r-n?ee(r-1):{width:0,height:0},s=se(e,t);s.width+=a.width,s.height+=a.height;var c=se(t+1,r-1);if(c.width+=l.width,c.height+=l.height,F.direction===en.Vertical)if(y.edges[0].height(i.height),t+o>=E.document.getPageCount()){var u=i.height+s.height+c.height;y.scrollH&&u>y.scroller[0].clientHeight&&y.content.width()<=y.scroller[0].clientWidth?y.edges[1].height(y.scrollH.scrollbarHeight()):y.edges[1].height(0)}else y.edges[1].height(c.height),Kt.Chrome&&y.content.height("");else if(F.direction===en.Horizontal)if(y.edges[0].width(i.width),t+o>=E.document.getPageCount()){var d=i.width+s.width+c.width;y.scrollV&&d>y.scroller[0].clientWidth&&y.content.height()<=y.scroller[0].clientHeight?y.scrollV._explicitSize?y.edges[1].width(y.scrollV.height()<y.scrollV._tray.height()?y.scrollV.width():0):y.edges[1].width(y.scrollV.width()):y.edges[1].width(0)}else y.edges[1].width(c.width),y.edges[1].height(1)}function Ee(){return S.activepage}function Me(e){if(e=e||1,0===S.prpr&&0<y.pageDivs.length){var t=ue(F.zoom);Be();for(var n=e;0<n;n--){var o=y.pageDivs[0]._index-t;if(0<=o&&o<E.document.getPageCount()){for(var i=t-1;0<=i;i--){var r=qe(-1);He(r),y.content.prepend(r),Re(r,We(o+i),o+i)}Ce(o,null),ke()}}setTimeout(Ne,10)}}function Se(e){e=e||1;var t=y.pageDivs[y.pageDivs.length-1]._index+1;if(0===S.prpr&&0<y.pageDivs.length&&t<E.document.getPageCount()){Be();for(var n=ue(F.zoom),o=E.document.getPageCount(),i=e;0<i;i--){var r=y.pageDivs[y.pageDivs.length-1]._index+1;if(r<o){for(var a=r+n-1-y.pageDivs.length,l=0;l<n;l++){var s=qe(1);He(s),y.content.append(s),Re(s,We(r+l),r+l)}Ce(a+1,r),ke()}}setTimeout(Ne,10)}}
/**
   * Scrolls the viewer to the given page index and executes the callback when finished.
   * @param {number} index - Index of the page to show.
   * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
   *  @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPage
   */function Fe(e,t){Ie(e+1,t)}
/**
   * Scrolls the viewer to the given page number and executes the callback when finished.
   * @param {number} pageNumber - Number of the page to show. Note that page number is expected 1-based.
   * @param {NotificationCallback} [callback]: function to execute after this operation is done
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPageNumber
   * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer#showPage|showPage} instead.
   */function Ie(e,t){if(e=Math.max(1,e),e=Math.min(E.document.getPageCount(),e),M.number!==e){var n=e-M.number;Math.abs(n)<y.pageDivs.length?_e(n,t):Ae(e,!0,t)}else _e(0,t)}function Ae(e,t,n){var o=E.document.getPageCount(),i=e-1;if(0===S.prpr&&0<o){var r=function(){Ne(!t),"function"==typeof n&&n.call()};Be();var a=0,l=0,s=i<=0?0:i;if(s+y.pageDivs.length>=o){if(s=o-y.pageDivs.length,F.tabular){var c=ue();s=Math.ceil(s/c)*c}s=Math.max(s,0)}if(F.direction===en.Vertical){a=le(s).height,y.edges[0].height(a),Ce(s,null),ke(),Ve();for(var u=0;u<y.pageDivs.length;u++)y.content.append(y.pageDivs[u]),Re(y.pageDivs[u],null,s+u);var d=le(Math.max(i,0)).height,h=M.number<e?-M.size.height:M.size.height;t&&d!==S.scrollPos.y?(ye(null,d+h,!1),ye(null,d,!0,r)):r.call()}else if(F.direction===en.Horizontal){l=le(s).width,y.edges[0].width(l),Ce(s,null),ke(),Ve();for(var f=0;f<y.pageDivs.length;f++)y.content.append(y.pageDivs[f]),Re(y.pageDivs[f],null,s+f);var p=le(Math.max(i,0)).width,g=M.number<e?-M.size.width:M.size.width;t&&p!==S.scrollPos.x?(ye(p+g,null,!1),ye(p,null,!0,r)):r.call()}}else pe("paused",n)}function Oe(e){var t=E.document.getPageCount();if(0<e&&e<=t){if(M.number!==e||M.numberoutof!==t){if(y.pageLabel.html(e+" / "+t),M.number!==e){M.number=e;for(var n=0;n<y.pageDivs.length;n++){var o=y.pageDivs[n];o._index===e-1?o.addClass(rn.atala_active_page):o.removeClass(rn.atala_active_page)}Gt({type:"pagenumberchanged",number:M.number})}M.numberoutof!==t&&(M.numberoutof=t)}}else y.pageLabel.html(""),y.viewport.find("."+rn.atala_active_page).removeClass(rn.atala_active_page),M.numberoutof=0}function Ve(){for(var e=y.pageDivs.length-1;0<=e;e--)He(y.pageDivs[e])}function He(e){Kt.Explorer&&document.activeElement&&e.has(document.activeElement).length&&y.scroller.focus(),F.allowannotations&&(Kt.Firefox||Kt.Edge)&&E.annotations.__clearAllSelection(e),e.detach(),null!=e._img&&(e._img._page=null,e._img.getDomElement().detach(),e._img=null),Gt({type:"pagerecycled",index:e._index,page:e}),e._index=-1,e.removeAttr(an.atala_page_index)}function Le(e){He(e),e._index=-1,e.removeAttr(an.atala_page_index),e._img=null,e.remove()}function Re(t,e,n,o){if(t._index===n&&t._img===e&&!o)return!1;if(o&&!t.nullinserted&&n<0)return!1;if(t._index=n,t.attr(an.atala_page_index,n),n>=E.document.getPageCount())return t.hide(),!1;if(t._img&&t._img!==e&&(t._img._page=null,0<t.has(t._img.getDomElement()).length&&t._img.getDomElement().detach(void 0,!0)),t._rubberband&&t._rubberband.reset(),t._img=e,t._img&&(t._img._page=t),t.css({display:F.tabular||F.direction===en.Horizontal?"inline-block":"block"}),F.showpagenumber&&(t.css({position:"relative"}),t._num||(t._num=Qt('<div style="position:absolute; right:20px; bottom:16px;z-index:1"/>'),t._num.addClass(rn.atala_page_number),t.append(t._num)),t._num.text(t._index+1)),t._img&&t._img._binds&&(t._img._binds.pageresize||(t._img._binds.pageresize=function(e){Gt({type:"pageresize",page:e.image._page,image:e.image,index:e.image._page?e.image._page._index:E.document.getPageIndexByImageIndex(e.image._index),width:e.width,height:e.height})},t._img.on({pageresize:t._img._binds.pageresize})),t._img._binds.pagesizechanged||(t._img._binds.pagesizechanged=function(e){Gt({type:"pagesizechanged",page:t,image:e.image,index:e.index,width:e.width,height:e.height,dx:e.dx,dy:e.dy})},t._img.on({pagesizechanged:t._img._binds.pagesizechanged}))),t._img){var i=t._img.getDomElement();t.append(i),t._img.trigger({type:"inserted",page:t}),t._img._loaded||(t.nullinserted?t._img.css({width:t.width(),height:t.height()}):je(t._img,t._index)),S.newpagedivsize||t.css({width:"",height:""}),t.nullinserted=!1}else t.nullinserted=!0,S.newpagedivsize||je(t,t._index);return Gt({type:"pageshown",page:t,index:t._index}),!0}function je(e,t){var n=ee(t,null,!1);e.css({width:n.width,height:n.height})}function Be(){S.prpr++}function Ne(e){0!==S.prpr&&(S.prpr--,0!==S.prpr||e||De())}function qe(e){return 0<e?(me(y.pageDivs,0,y.pageDivs.length-1),y.pageDivs[y.pageDivs.length-1]):(me(y.pageDivs,y.pageDivs.length-1,0),y.pageDivs[0])}
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
function Ue(e,t){var n=Qt.Deferred();0<=e.cacheIndex&&y.loadedImgs[e.cacheIndex]?y.loadedImgs[e.cacheIndex].invalidate(t,function(){n.resolve()}):n.resolve();return n.promise()}function We(e,t,n){"function"==typeof t&&(n=t,t=void 0);var o=E.document.getPageDefinition(e);if(o){if(o.cacheIndex<0||!y.loadedImgs[o.cacheIndex]){var i=S.nextImageCacheIndex++;o.cacheIndex=i,E.document.setPageCacheIndex(e,i),y.loadedImgs[i]=Z(o.index,o.ref,t,function(e){e&&((y.loadedImgs[i]=e)._cacheIndex=i,E.memory.allocate(e)),"function"==typeof n&&n.call()}),F.allowtext&&E.text&&!k&&E.text.ensurePageTextLoaded(e)}else"function"==typeof n&&n.call();return y.loadedImgs[o.cacheIndex]}}function Ze(e){var t=Xe(e);if(t){var n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop;return ge(t[0],y.scroller[0],n,o,n+y.scroller[0].clientWidth,o+y.scroller[0].clientHeight)}return!1}function Xe(e){for(var t=null,n=0;n<y.pageDivs.length&&null===t;n++)y.pageDivs[n]._index===e&&(t=y.pageDivs[n]);return t}function Ye(e,t,n,o,i){o&&"function"==typeof o&&(i=o,o=!1);var r,a=Xe(e);if(a){var l=y.scroller[0].scrollLeft,s=y.scroller[0].scrollTop;if((r=ie(a[0],y.scroller[0])).left+=t.x,r.top+=t.y,!o&&r.left>=l&&r.left<=l+l+y.scroller[0].clientWidth&&r.top>=s&&r.top<=s+y.scroller[0].clientHeight)return void(i&&i())}else(r=le(e)).left=r.width+t.x,r.top=r.height+t.y;var c={x:y.scroller[0].clientWidth/2,y:y.scroller[0].clientHeight/2};Ge(n,nn.BottomLeft)?(c.x=y.scroller[0].clientWidth,c.y=y.scroller[0].clientHeight):Ge(n,nn.TopLeft)&&(c.x=0,c.y=0),ye(r.left-c.x,r.top-c.y,!0,i)}function Ge(e,t){return e&&t&&e.x===t.x&&e.y===t.y}var Qe=null;function Je(){Qe&&clearTimeout(Qe),Qe=setTimeout(function(){Gt("documentchanged")},200)}function Ke(){y.scroller.stop(),y.scroller.pauseEventPropagation(),Be()}function $e(){we(),0<y.pageDivs.length&&Ze(E.document.getPageCount()-1)&&Ce(y.pageDivs[0]._index),ke(),y.scroller.resumeEventPropagation(),Ne()}function et(){S.zooming=!0,Ke(),Gt("zoomstarted")}function tt(e){var t,n,o,i,r,a,l;e=Math.min(e,$()),e=Math.max(e,K()),t=e,n=!1,i=le(M.number,null,null),r=le(M.number,null,null,t),a=(y.scroller.scrollLeft()-i.width)/F.zoom*t,l=(y.scroller.scrollTop()-i.height)/F.zoom*t,ye(r.width+a,r.height+l,n,C,o),F.zoom=e,ct(!1),lt(e,!1)}function nt(){S.zooming=!1,$e(),Gt({type:"zoomchanged",zoom:F.zoom})}
/**
   * Asynchronously zooms the viewer to the given zoom over the default zoom duration
   * @param {number} zoom - Desired zoom level to zoom to.
   * @param {NotificationCallback} [callback] - function to execute after the zoom is finished animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoom
   */function ot(e,n){var o=this;if(S.zooming)pe("zooming",n);else if(S.zooming=!0,Ke(),Gt("zoomstarted"),e!==F.zoom){e=Math.min(e,$()),e=Math.max(e,K());var t=le(M.number,null,null),i=le(M.number,null,null,e),r=(y.scroller.scrollLeft()-t.width)/F.zoom*e,a=(y.scroller.scrollTop()-t.height)/F.zoom*e;F.zoom=e,ct(!0,function(){var t=this;zn(this,o),lt(e,!0,function(){var e=this;zn(this,t),it(),ye(i.width+r,i.height+a,!1,C,function(){zn(this,e),y.scrollH&&y.scrollH.scrollLeft(y.scroller.scrollLeft()),y.scrollV&&y.scrollV.scrollTop(y.scroller.scrollTop()),null!=n&&n()}.bind(this))}.bind(this))}.bind(this))}else it(),"function"==typeof n&&n.call()}function it(){S.zooming=!1,$e(),Gt({type:"zoomchanged",zoom:F.zoom})}function rt(e,t){ot(F.zoom+(e?-1:1)*F.zoom*.3,t)}function at(){y.edges[0]._z=F.zoom}function lt(e,t,n){if(0<y.edges.length){n="function"==typeof n?cn([at,n]):at;var o=F.direction===en.Vertical,i=le(y.pageDivs[0]&&y.pageDivs[0]._img?y.pageDivs[0]._index:0,null,null,e),r=o?i.height:i.width;if(t&&!S.loading){var a=o?{height:r}:{width:r};y.edges[0].animate(a,{duration:C,easing:"easeOutQuad",complete:n,queue:!1})}else o?y.edges[0].height(r):y.edges[0].width(r),"function"==typeof n&&n.call();st()}}function st(u){setTimeout(function(){var e=Qt("<canvas/>");u=u||F.zoom;var t=F.direction===en.Vertical,n=S.newpagedivsize?S.newpagedivsize:{width:M.size.width*u,height:M.size.height*u},o=Math.max(1,F.pagespacing),i=ue();e[0].width=(n.width+o)*(t?i:1),e[0].height=n.height*(t?1:i);var r=e[0].getContext("2d");r.lineWidth=F.pageborderwidth,F.backcolor&&(r.fillStyle=F.backcolor);for(var a=0;a<i;++a){var l=t?1+a*n.width:1,s=t?1:1+a*n.height;r.strokeRect(l,s,n.width-2,n.height-2),F.backcolor&&r.fillRect(l+r.lineWidth,s+r.lineWidth,n.width-2*(1+r.lineWidth),n.height-2*(1+r.lineWidth))}var c={backgroundImage:"url("+e[0].toDataURL()+")",backgroundSize:"auto auto",backgroundRepeat:t?"repeat-y":"repeat-x"};y.edges[0].css(c),y.edges[1].css(c)},0)}function ct(e,t){for(var n=0,o=!0,i=function(){if(--n<=0){if(F.direction===en.Horizontal){var e=ae().width;y.spacer||(y.spacer=A(),y.spacer.css({position:"absolute",top:"-1px",height:"1px"}),y.viewport.append(y.spacer)),y.spacer.width(e)}"function"==typeof t&&t.call(),0===S.prpr&&(Kt.Safari||Kt.Chrome)&&y.edges[1].hide().show()}},r=0;r<y.pageDivs.length;r++){if(y.pageDivs[r]._img)(y.pageDivs[r]._img.needsZoom()||y.pageDivs[r]._img.needsRotate())&&(o=!1,n++,y.pageDivs[r]._img.needsRotate()?y.pageDivs[r]._img.rotate(i):y.pageDivs[r]._img.needsZoom()&&y.pageDivs[r]._img.zoom(e,i))}o&&i.call()}
/**
   * Asynchronously zooms the viewer to fit to a page.
   * @param {Atalasoft.Utils.Fitting} fit - Type of fitting to fit the page to.
   * @param {number} pageNumber - Page number to fit to.  Note, that it's 1-based.
   * @param {NotificationCallback} callback - Function to execute after the fit is done animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function fit
   */function ut(e,t,n){null!=t?"function"==typeof t&&(n=t,t=M.number):t=M.number;var o=dt(e,t-1),i=o.zoom,r=tn.Width===o.fit&&en.Vertical===F.direction,a=tn.Height===o.height;r&&ye(0,null,!1),a&&ye(null,0,!1),ot(i,n)}function dt(e,t){var n,o,i,r=(n=fe(),o=F.showpageborder?2*F.pageborderwidth:0,i={width:n.width-o,height:n.height-o},F.tabular&&(1<F.columns&&(i.width=Math.floor((n.width-(F.pagespacing+o)*F.columns)/F.columns)),1<F.rows&&(i.height=Math.floor((n.height-(F.pagespacing+o)*F.rows)/F.rows))),i),a=te(t,1,!1);0!==a.width&&0!==a.height||(e=null);var l=F.zoom;switch(e){case tn.None:break;case tn.Best:e=a.width/r.width>a.height/r.height?(l=r.width/a.width,tn.Width):(l=r.height/a.height,tn.Height);break;case tn.Height:l=r.height/a.height;break;case tn.Width:l=r.width/a.width;break;default:l=1,e=tn.None}return{zoom:l,fit:e}}function ht(e){return F.zoom*E.document.getPageFitMultiplier(e)}function ft(e){return E.document.getPageRotation(e)}function pt(e,t){t=t||0;var n=ft(e),o=ht(e),i=de(e,t),r=Jt.matrix();r.scale(o,o,0,0),r.rotate(n+t,0,0);var a,l,s=(a=r,l={x:i.width,y:i.height},{x:a.x(l.x,l.y),y:a.y(l.x,l.y)}),c=Math.min(0,s.x),u=Math.min(0,s.y),d=r.invert(),h=d.x(-c,-u),f=d.y(-c,-u);return r.translate(h,f),r}function gt(e){var t=Qt.data(e.currentTarget,"_config"),n=Qt.data(e.currentTarget,"_annoConfig");!n&&t&&(n={type:t.icon,rotatable:F.showrotatetools}),n&&(E.mouseTool.setTool($t.None,$t.None),E.annotations.drawAnnotation(n,!1,vt,mt))}function mt(){E.mouseTool.setTool($t.Pan,$t.None)}function vt(){E.mouseTool.setTool($t.Pan,$t.None)}
/**
   * Checks whether annotations support is enabled.
   * @private
   */function bt(){return!1===F.allowannotations&&I("InitError",'The "allowannotations" property in the WebDocumentViewer config is set to false.'),F.allowannotations}function xt(){for(var e=0;e<y.pageDivs.length;e++)y.pageDivs[e]._draw.toFront()}function yt(){for(var e=0;e<y.pageDivs.length;e++)y.pageDivs[e]._draw.reset()}function _t(e,t,n){if(e){if(S.loading=!0,Ve(),M.size.width=e.pagewidth,M.size.height=e.pageheight,M.count=e.pagecount,M.buffer=F.pagebuffersize,M.dpi=e.dpi,M.vector=!0===e.vector,F.allowannotations=n.allowannotations,F.allowforms=n.allowforms,F.allowtext=n.allowtext,F.documenturl=n.documenturl,F.annotationsurl=n.annotationsurl,F.formsurl=n.formsurl,E.document.__linkChanges(t),E.annotations&&(E.annotations.clear(),E.annotations.loadAnnotations(e)),E.forms&&(E.forms.clear(),e.forms&&E.forms.loadForms(e)),E.text&&E.text.search(""),S.zooming=!1,e.zoom)F.zoom=e.zoom;else{var o=dt(F.fitting,1);F.zoom=o.zoom}Tt(e.pagenumber||0),E.mouseTool.setTool(F.mousetool.type&&!k?F.mousetool.type:$t.Pan,$t.None),st(),S.loading=!1,ct(),q=t.__getSelectedPagesIndices,Gt({type:"activedocumentchanged"})}}function wt(e,t){t&&Lt(!0);for(var n=0;n<e._controllers.document.getPageCount();++n){var o=e._controllers.document.getPageDefinition(n,s);o&&0<=o.cacheIndex&&y.loadedImgs[o.cacheIndex]&&(E.memory.deallocate(y.loadedImgs[o.cacheIndex]),y.loadedImgs[o.cacheIndex].dispose(),y.loadedImgs[o.cacheIndex].remove(),y.loadedImgs[o.cacheIndex]=void 0)}}function zt(e,o){S.loading=!0;var t={atala_docurl:F.documenturl,atala_pagebuffer:F.pagebuffersize,atala_minwidth:F.minwidth};k&&(t.atala_thumb=k,t.atala_capt_format=F.thumbcaptionformat),null!=e&&("function"==typeof e&&(o=e,e=null),Qt.extend(t,e)),Vt({type:"docinfo",serverurl:F.serverurl,query:"?ataladocinfo=",method:"GET",data:t,cancel:!1,info:{pagewidth:-1,pageheight:-1,pagecount:-1}},function(e){Pt(e,o)},function(e,t,n){!function(e,t,n,o){if(e.responseText){var i=e.responseText.substr(e.responseText.indexOf("</html>")+7);0<=i.indexOf("\x3c!--")?0<(i=i.replace("\x3c!--","").replace("--\x3e","")).length&&(n="<pre>"+i+"</pre>"):0<e.responseText.indexOf("web.config")&&0<e.responseText.indexOf("customErrors")&&(n+=": web.config customErrors attribute has disabled remote error messages.")}I("DocumentLoadError",n),"function"==typeof o&&o.call(void 0,n)}(e,0,n,o)})}function Pt(t,n){var e,o;t&&!1!==t.licensed?(M.size.width=t.pagewidth,M.size.height=t.pageheight,M.count=t.pagecount,M.buffer=F.pagebuffersize,M.dpi=t.dpi,M.vector=!0===t.vector,M.caption=t.thumbcaptionformat||(F.showthumbcaption?"{0}":""),re.zero(),E.memory.clearEntries(),E.memory.colorDepth=t.colordepth,E.memory.pageSize={width:t.pagewidth,height:t.pageheight},Gt({type:"documentinfochanged",info:{count:M.count,dpi:M.dpi,size:{height:M.size.height,width:M.size.width},vector:M.vector},customData:t.customData}),E.text&&(E.text.clear(),t.text&&E.text.loadText(t)),S.loading&&(F.zoom=1,W(),ye(0,0),y.scrollV&&y.scrollV.pageNum(1),Oe(1),ut(F.fitting,1,function(){ke(),Ce(0,y.pageDivs.length-1);for(var e=0;e<y.pageDivs.length&&e<M.count;e++)y.content.append(y.pageDivs[e]),Re(y.pageDivs[e],null,e);0<y.pageDivs.length&&y.pageDivs[0].addClass(rn.atala_active_page),t.layers&&t.layers.length?E.annotations.loadAnnotations(t):F.annotationsurl&&E.annotations&&E.annotations.clear(),E.forms&&(E.forms.clear(),t.forms&&E.forms.loadForms(t)),E.mouseTool.setTool(F.mousetool.type&&!k?F.mousetool.type:$t.Pan,$t.None),S.loading=!1,st(),"function"==typeof n&&n(t.error,t),t.error&&setTimeout(function(){I("DocumentLoadError",t.error)},0)})),S.loading=!1):(o=t&&!1===t.licensed?(e="LicenseException",t.error?t.error:"LicenseException: Handler was unable to find a valid license."):(e="DocumentLoadError","HandlerException: Handler did not return any data."),S.loading=!1,"function"==typeof n&&n.call(void 0,o),e&&o&&I(e,o))}function Dt(){Tt()}function Tt(e){if(W(),0<y.pageDivs.length){var t=E.document.getPageCount(),n="number"==typeof e?e:y.pageDivs[0]._index;n=0<=n?Math.min(n,t-y.pageDivs.length):0;for(var o=0;o<y.pageDivs.length&&o<t;o++){var i=n+o;He(y.pageDivs[o]),y.content.append(y.pageDivs[o]),Re(y.pageDivs[o],null,i)}}Ce(0<y.pageDivs.length?y.pageDivs[0]._index:0,null),ke(),St(),we();var r=oe(y.scroller[0].scrollLeft,y.scroller[0].scrollTop);Oe(r+1),0<=e&&r!==e&&Fe(e)}function kt(e,t){var n={atala_docurl:F.documenturl,atala_spath:F.savepath};function o(e){!function(e){e.error?I("DocumentSaveError",e.error):ve("DocumentSave: success="+e.success);Gt({type:"documentsaved",success:e.success,customData:e.customData,fileName:e.fileName})}(e),"function"==typeof t&&t.call()}Qt.extend(n,e),Vt({type:"docsave",serverurl:F.serverurl,query:"?ataladocsave=",method:"POST",data:n,cancel:!1,info:{success:void 0,error:void 0}},o,function(e){var t=[];t.error=e.responseText,o(t)})}function Ct(e,t,n){var o=null;return"string"==typeof e?(o={},S.initialized&&n&&(0<e.length?o=n.createHandlerRequest(F.serverurl,e,t):0===e.length&&n.clear()),o.url=e):void 0!==e&&null!=e&&I("openUrlError","string input expected for url."),o}function Et(){Xt({annotationsloaded:At})}function Mt(){Xt({formsloaded:Ot})}function St(e){if(!(0<y.pageDivs.length&&void 0===y.pageDivs[0]._index))for(var t=0;t<y.pageDivs.length;t++)It(y.pageDivs[t],e)}function Ft(e,t){var n=Xe(e);n&&It(n,t)}function It(e,t){(Re(e,We(e._index),e._index)||t)&&(E.annotations&&E.annotations.showLayer(e._index,e),E.forms&&!k&&E.forms.showLayer(e._index,e),E.text&&!k&&F.allowtext&&E.text.showLayer(e._index,e))}function At(e){e.error&&(I("AnnotationsLoadError",e.error),F.annotationsurl=""),E.annotations&&Yt({annotationsloaded:At})}function Ot(e){e.error&&(I("FormsLoadError",e.error),F.formsurl=""),E.forms&&Yt({formsloaded:Ot})}function Vt(o,t,i,n){var r,a,e,l=this,s=(r=o,a=function(e){t(e.request.info)},Xt({handlerreturned:e=function e(t){t.request===r&&(Yt({handlerreturned:e}),"function"==typeof a&&a.call(this,t))}}),e);if(Gt({type:"beforehandlerrequest",request:o}),!o.cancel&&(Yt({handlerreturned:s}),o.serverurl&&!Qt.isEmptyObject(o.data))){if(!(o.info instanceof Qt&&"docpage"===o.type)){if("fileupload"!==o.type)return Qt.ajax({type:o.method,url:o.serverurl+o.query+"?",dataType:"json",data:o.data,success:t,error:i,crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0});var c="&"+Qt.param(o.data),u=new FormData;u.append("file",o.file,o.file.name);var d=Qt.ajax({type:o.method,url:o.serverurl+o.query+"??"+c,dataType:"json",data:u,contentType:!1,processData:!1,success:function(e){zn(this,l),e.success&&(e.success=JSON.parse(e.success)),e.canceled&&(e.canceled=JSON.parse(e.canceled)),t(e,o.file.name)}.bind(this),error:function(e,t,n){zn(this,l),i(t,n,o.file.name)}.bind(this),crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0,xhr:function(){var t=this;zn(this,l);var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){zn(this,t),e.lengthComputable&&(n(o.file.name,e.loaded,e.total)||d.abort())}.bind(this),!1),e}.bind(this)});return d}o.info.attr("src",o.serverurl+o.query+"&"+Qt.param(o.data))}}
/**
   * Resets the viewer to its default state.
   * @param {OpenUrlCallback} [callback]  - Function to execute when the empty process is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function empty
   */
function Ht(e){S.loading=!0;Lt(),Pt({pagewidth:0,pageheight:0,pagecount:-1},function(){we(),Gt({type:"documentunloaded"}),"function"==typeof e&&e.call()})}function Lt(e){var t;S.initialized&&(Ve(),W(0),e||function(){for(var e=0;e<y.loadedImgs.length;e++)y.loadedImgs[e]&&(y.loadedImgs[e].dispose(),y.loadedImgs[e].remove());y.loadedImgs.length=0}(),y.edges[0].width(0).height(0),y.edges[1].width(0).height(0),y.scrollH&&(y.scrollH.scrollSize(0),Pe(y.scrollH)),y.scrollV&&(y.scrollV.scrollSize(0),Pe(y.scrollV)),t={backgroundImage:"",backgroundSize:"",backgroundRepeat:"",backgroundColor:""},y.edges[0].css(t),y.edges[1].css(t))}
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
function Rt(){return S.initialized}
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
function jt(e,t){var n=F.direction===en.Vertical?ue():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),_e(e,t)}
/**
   * Scrolls to the previous viewable page.
   * @param {number} n - Number of pages to scroll backward.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function previous
   */function Bt(e,t){var n=F.direction===en.Vertical?ue():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),_e(-e,t)}
/**
   * Zooms in one level.
   * @param {NotificationCallback} [callback] - Function to execute when the zoom operation is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomIn
   */function Nt(e){rt(!1,e)}
/**
   * Zooms out one level.
   * @param  {NotificationCallback} [callback] - Function to execute when the zoom operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomOut
   */function qt(e){rt(!0,e)}
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
   */function Ut(e,t,n,o){null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null));var i=0,r=!1,a=Ct(t,e,E.annotations),l=Ct(n||e,e,E.forms);F.annotationsurl=a?a.url:F.annotationsurl,F.formsurl=l?l.url:F.formsurl;var s,c,u,d,h=function(e,t){--i<=0&&(St(!0),Gt({type:"documentloaded",customData:null==t?void 0:t.customData}),"function"==typeof o&&o.call(void 0,e,t))};if("string"==typeof e){if(0===e.length)Ht(h);else if(F.documenturl=e,S.initialized){Lt(),Y(y.scrollH),Y(y.scrollV),i++,0===e.length&&Ht(h);var f={};F.allowannotations&&a&&a.data&&(Et(),Qt.extend(f,a.data)),F.allowforms&&l&&l.data&&(Mt(),Qt.extend(f,l.data)),r=!0,zt(f,h)}}else!(e||!(0<F.documenturl.length)||!t&&""!==t&&!n&&""!==n)||I("openUrlError","string input expected for document url.");r||(a&&(i++,u=a,d=h,E.annotations&&(Et(),E.annotations.makeHandlerRequest(u,d))),l&&(i++,s=l,c=h,E.forms&&(Mt(),E.forms.makeHandlerRequest(s,c))))}
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
   */function Wt(e,t,n,o){"function"==typeof n&&(o=n,n={}),"function"==typeof t&&(o=t,t=F.savefileformat),"function"==typeof e&&(o=e,e=null),void 0===t&&(t=F.savefileformat);var i=Qt.extend(!0,n,{atala_subpath:e||"",atala_sformat:t});E.annotations&&Qt.extend(i,{atala_iuname:F.annotations.saveusername,atala_annos:E.annotations.stringifyChanges()}),E.forms&&Qt.extend(i,{atala_forms:E.forms.stringifyChanges()}),E.document&&Qt.extend(i,{atala_document:E.document.stringifyChanges()}),kt(i,o)}
/**
   * Gets the current page index
   * @returns {number} Zero based index of the current page.
   *
   * Note, that current page index detection could be affected by {@link WebDocumentViewerConfig.pageselectlocation|pageselectlocation} configuration parameter.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function getCurrentPageIndex
   */
function Zt(){return M.number-1}
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
function Xt(e,t){return be(arguments,!0),i.on.apply(i,arguments),c}
/**
   * Detaches the handler from the event.
   * @param {string} event - the name of the event to unbind.
   * @param {function} [handler] -  the event handler to unbind. If not specified, all handlers are unbound.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function unbind
   */function Yt(e,t){return be(arguments,!1),i.off.apply(i,arguments),c}
/**
   * Triggers the event.
   * @param {string} event - the name of the event to trigger.
   * @param {Object} [parameters] - the event data.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function trigger
   */function Gt(e,t){return i.trigger.apply(i,arguments),c}
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
return c.__getDebugInfo=function(){var e={version:gn.join(".")};F.debug&&Qt.extend(!0,e,{dom:y,controllers:E,page:M});return e}
/**
   * [Internal] Gets the viewer linkage for controls that inherit this one
   * @param viewer object of type WebDocumentViewer
   * @returns linker object if possible, otherwise undefined
   */,c.__getViewerLink=function(e){if(e&&"Atalasoft.Controls.WebDocumentThumbnailer"===e.typeOf){var t=new function(){this.typeOf="__LVlinker",this._id=s,this._config=F,this._controllers=E,this._dom=y,this._page=M,this._state=S,this._annos=null,this._fields=null,this.stateManager=a,this.__createDialog=T,this.__createDiv=A,this.__createDOM=w,this.__createDropDownButton=O,this.__createDropDownMenu=V,this.__createMenu=D,this.__getPageSize=he,this.__getTabularIndexOffset=ue,this.__redrawVisiblePages=St,this.__adjustVisiblePages=ct,this.__onDocumentChanged=Dt,this.__startDomManipulation=Ke,this.__endDomManipulation=$e,this.__status=ve,this.__updatePageSize=g,this.__silentReloadPage=Ue,this.__isObjectInRect=ge,this.__getIndexFromPos=ne,this.__showNext=Se,this.__showPrevious=Me,this.__showPageAsync=Ae,this.__adjustEdgeHeights=Ce,this.__getSelectedPagesIndices=q};return E.document.__linkChanges(t),F.allowannotations&&(e!==c&&0<F.annotationsurl.length&&(F.annotationsurl=""),E.annotations.__linkAnnotations(t)),F.allowforms&&(e!==c&&0<F.formurl.length&&(F.formurl=""),E.forms.__linkForms(t)),F.allowtext&&E.text&&E.text.__linkText(t),t}},c.dispose=
/**
   * Removes all DOM elements, internal references, and empties memory intensive objects.
   * The WebDocumentViewer will no longer function after a call to this method.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function dispose
   */
function(){if(!k&&a&&a.closeDocument(),Lt(),y.main&&y.main.remove(),y.toolbar&&(y.toolbar.controlgroup("destroy"),y.toolbar.remove(),y.toolbar.annoToolbar&&(y.toolbar.annoToolbar.controlgroup("destroy"),y.toolbar.annoToolbar.remove())),y.search&&y.search.dispose(),y.uploadCtrl&&y.uploadCtrl.remove(),y.main=null,y.toolbar=null,y.scroller=null,y.viewport=null,y.content=null,y.scrollH=null,y.scrollV=null,y.loadedImgs.length=0,y.pageDivs.length=0,y.pageLabel=null,y.status=null,y.search=null,y.uploadCtrl=null,y.edges){for(var e=0;e<y.edges.length;e++)y.edges[e]=null;y.edges=[]}for(var t in E)E.hasOwnProperty(t)&&null!==E[t]&&(E[t].dispose(),E[t]=null);S={prpr:0,batchoperation:0,loading:(M={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0}},c.empty=Ht,c.fit=ut,c.getZoom=function(){return F.zoom},c.isReady=Rt,c.scrollTo=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);ye(e,t,n,null,o)}
/**
   * Scrolls by the given deltas, does not account for zoom, i.e. `dx` and `dy` values are passed in window coordinate space.
   * @param {number} dx - Indicating delta of the x axis.
   * @param {number} dy - Indicating delta of the y axis .
   * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function scrollBy
   */,c.scrollBy=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);i=e,r=t,a=n,l=null,s=o,ye(y.scroller.scrollLeft()+i,y.scroller.scrollTop()+r,a,l,s);var i,r,a,l,s},c.next=jt,c.previous=Bt,c.zoom=ot,c.zoomIn=Nt,c.zoomOut=qt,c.openUrl=c.OpenUrl=Ut,c.save=Wt,c.uploadFiles=
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
   */,c.uploadFile=function(e,t,n){if(k)return;E.upload.uploadFile(e,t,n)}
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
   */,c.filterFilesForUpload=function(e,t,n){if(k)return;return E.upload.filterFilesPublic(e,t,n)},c.getCurrentPageIndex=Zt,c.bind=Xt,c.unbind=Yt,c.trigger=Gt,c.getDocumentInfo=function(){return{count:E.document.getPageCount(),dpi:M.dpi,size:{height:M.size.height,width:M.size.width},vector:M.vector}},c.setMouseTool=function(e){for(var t in $t)if($t.hasOwnProperty(t)&&$t[t]===e){E.mouseTool.setTool(e);break}},c.isPageLoaded=function(e){var t=E.document.getPageDefinition(e);return 0<=t.cacheIndex&&y.loadedImgs[t.cacheIndex]&&y.loadedImgs[t.cacheIndex]._loaded}
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
   */,c.reloadPage=function(o,e,t,n,i){var r=Qt.Deferred(),a=Qt.Deferred(),l=Qt.Deferred(),s=Qt.Deferred();"function"==typeof n&&(i=n,n=void 0),"function"==typeof t&&(i=t,t=!1),"function"==typeof e&&(i=e,e=!1),"function"==typeof i&&r.done(i);var c=E.document.getPageDefinition(o);if(!c)return r.resolve(),r.promise();0<=c.cacheIndex&&y.loadedImgs[c.cacheIndex]?s=Ue(c,n):We(o,n,function(){s.resolve()});var u="string"==typeof e?e:c.uri?null:F.annotationsurl;F.allowannotations&&e&&(u||c.uri)?E.annotations.loadAnnotationsUrl(F.serverurl,u,c.uri,c.index,1,o,function(){a.resolve(!0)}):(e&&E.annotations.loadAnnotations({layers:[[]],offset:o}),a.resolve(!!e));var d="string"==typeof t?t:c.uri?null:F.formsurl;return F.allowforms&&t&&(F.formsurl||d)?E.forms.loadFormUrl(F.serverurl,d,c.uri,c.index,1,o,function(){l.resolve(!0)}):l.resolve(),Qt.when(s,a,l).done(function(e,t,n){(t||n)&&Ft(o,!0),r.resolve(o)}),r.promise()},c.showPage=Fe,c.showPageNumber=Ie,mn(),xn(),vn(),yn(),c.annotations=mn.__exposedApi,c.document=xn.__exposedApi,c.forms=vn.__exposedApi,c.text=yn.__exposedApi,function(){Rt()||(S={prpr:0,batchoperation:0,loading:(M={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0});var e={_config:F,_id:s,_dom:y,_document:y.loadedImgs,_pages:y.pageDivs,_state:S,_internalEvents:r,_controllers:E,createDOM:w,createDiv:A,createDialog:T,createDropDownButton:O,createDropDownMenu:V,createMenu:D,drawAnnotation:gt,redrawVisiblePages:St,adjustVisiblePages:ct,startDomManipulation:Ke,endDomManipulation:$e,redrawPageFromIndex:Ft,makeHandlerRequest:Vt,getPageScale:ht,getPageSize:he,getSourcePageSize:de,getPageRotation:ft,getViewerTransform:pt,isPageInView:Ze,findPageFromIndex:Xe,showPagePoint:Ye};E.document=new xn(c,e,s),c.document=E.document.__exposedApi,F.allowannotations?(E.annotations=new mn(c,e,k),c.annotations=E.annotations.__exposedApi):(c.deselectAll=bt,c.createAnnotationOnPage=bt,c.getAnnotationsFromPage=bt,c.deleteAnnotationOnPageAtIndex=bt,c.setAnnotationDefaults=bt,c.setImages=bt,c.setStamps=bt),F.allowforms&&!E.forms&&(E.forms=new vn(c,e),c.forms=E.forms.__exposedApi),F.allowtext&&(E.text=new yn(c,e,F.mousetool?F.mousetool.text:{}),c.text=E.text.__exposedApi),E.upload=new bn(c,e),!1===S.initialized&&(S.initialized=!0,Xt({throwerror:_,pagedivsresized:f,documentchanged:Dt,pagesizechanged:p}),F.parent?(F.parent instanceof Qt||(F.parent=Qt(F.parent)),F.parent.length||I("InitError","Parent element not found.")):I("InitError","No parent element given."),y.toolbar=(t=F.toolbarparent||F.parent,(n=function(e){var t=this,n={id:s+"_toolbar",parent:e,children:[{type:"button",id:"Button_PagePrev",cls:rn.atala_tool_button_page_prev,icon:"page-prev",tooltip:"Previous Page",text:null,onclick:function(){Bt()}},{type:"pagelabel",id:"Label_PageNumber",cls:rn.atala_page_label},{type:"button",id:"Button_PageNext",cls:rn.atala_tool_button_page_next,icon:"page-next",tooltip:"Next Page",text:null,onclick:function(){jt()}},{type:"button",id:"Button_ZoomOut",cls:rn.atala_tool_button_zoom_out,icon:"zoom-out",tooltip:"Zoom Out",text:"",onclick:function(){qt()}},{type:"button",id:"Button_ZoomIn",cls:rn.atala_tool_button_zoom_in,icon:"zoom-in",tooltip:"Zoom In",text:"",onclick:function(){Nt()}},{type:"button",id:"Button_FitNone",cls:rn.atala_tool_button_fit_none,icon:"zoom-full",tooltip:"Full Size",text:"",onclick:function(){ot(1)}},{type:"button",id:"Button_FitBest",cls:rn.atala_tool_button_fit_best,icon:"fit-best",tooltip:"Best Fit",text:"",onclick:function(){ut(tn.Best)}},{type:"button",id:"Button_FitWidth",cls:rn.atala_tool_button_fit_width,icon:"fit-width",tooltip:"Fit To Width",text:"",onclick:function(){ut(tn.Width)}}]};return F.showselecttools&&n.children.splice(5,0,{type:"button",id:"Button_ZoomArea",cls:rn.atala_tool_button_zoom_area,icon:"zoom-area",tooltip:"Zoom Area",text:"",onclick:B}),F.allowtext&&(n.children.splice(3,0,{type:"button",id:"Button_Text",cls:rn.atala_tool_button_text_tool,icon:"text-tool",tooltip:"Text Selection",text:"",onclick:function(){E.mouseTool.setTool($t.Text)}}),n.children.splice(3,0,{type:"button",id:"Button_Text",cls:rn.atala_tool_button_pan_tool,icon:"pan-tool",tooltip:"Pan",text:"",onclick:function(){E.mouseTool.setTool($t.Pan)}})),F.showrotatetools&&(n.children.push({type:"button",id:"Button_RotateLeft",cls:rn.atala_tool_button_rotate_left,icon:"rotate-left",tooltip:"Rotate Left",text:"",onclick:N(270)}),n.children.push({type:"button",id:"Button_RotateRight",cls:rn.atala_tool_button_rotate_right,icon:"rotate-right",tooltip:"Rotate Right",text:"",onclick:N(90)})),0<F.savepath.length&&n.children.unshift({type:"button",id:"Button_Save",cls:rn.atala_tool_button_save,icon:"save",tooltip:"Save Changes",text:null,onclick:function(){Wt()}}),!1!==F.upload.enabled&&n.children.unshift({type:"button",id:"Button_Upload",cls:rn.atala_tool_button_upload,icon:"upload",tooltip:"Upload document",text:null,onclick:function(){!function(){var t=this;k||E.upload.uploadWithUi(function(e){zn(this,t),e?(y.toolbar.controlgroup("enable"),F.allowannotations&&y.toolbar.annoToolbar.controlgroup("enable"),y.toolbar.find(".atala_page_label, .atala_search_container").removeClass("ui-state-disabled")):(y.toolbar.controlgroup("disable"),y.toolbar.annoToolbar&&y.toolbar.annoToolbar.controlgroup("disable"),y.toolbar.find(".atala_page_label, .atala_search_container").addClass("ui-state-disabled"))}.bind(this))}()}}),F.toolbarbuttons&&F.toolbarbuttons.reverse().forEach(function(e){zn(this,t),n.children.unshift({type:"button",id:e.id,cls:e.class,tooltip:e.tooltip,onclick:e.onclick,text:null,icon:e.icon,custom:!0})}.bind(this)),P(n)}(t)).controlgroup(),F.allowannotations&&(n.annoToolbar=P({id:s+"_toolbar",parent:t,children:[{type:"button",id:"Button_Ellipse",cls:rn.atala_tool_button_ellipse_anno,icon:"ellipse",tooltip:"Draw Ellipse",text:"",onclick:gt},{type:"button",id:"Button_Highlight",cls:rn.atala_tool_button_highlight_anno,icon:"highlight",tooltip:"Draw Highlight",text:"",onclick:gt},{type:"button",id:"Button_Line",cls:rn.atala_tool_button_line_anno,icon:"line",tooltip:"Draw Line",text:"",onclick:gt},{type:"button",id:"Button_Lines",cls:rn.atala_tool_button_lines_anno,icon:"lines",tooltip:"Draw Poly Lines",text:"",onclick:gt},{type:"button",id:"Button_Freehand",cls:rn.atala_tool_button_freehand_anno,icon:"freehand",tooltip:"Draw Freehand",text:"",onclick:gt},{type:"button",id:"Button_Polygon",cls:rn.atala_tool_button_polygon_anno,icon:"polygon",tooltip:"Draw Polygon",text:"",onclick:gt},{type:"button",id:"Button_Rectangle",cls:rn.atala_tool_button_rect_anno,icon:"rectangle",tooltip:"Draw Rectangle",text:"",onclick:gt},{type:"button",id:"Button_Text",cls:rn.atala_tool_button_text_anno,icon:"text",tooltip:"Draw Text",text:"",onclick:gt}]}),n.annoToolbar.addClass(rn.atala_annotation_toolbar),n.annoToolbar.controlgroup()),F.showstatus&&(y.status=Qt('<div id="'+s+'_status" style="display:inline"></div>'),y.status.addClass(rn.atala_statusbar),n.append("Status:"),n.append(y.status)),F.allowtext&&F.mousetool.text.allowsearch&&(y.search=new j({parent:n})),n),y.toolbar.addClass(rn.atala_toolbar),y.main=A(F.parent),y.main.addClass(rn.atala_main_container),y.scroller=A(y.main),y.scroller.addClass(rn.atala_scroller),y.main.on({selectstart:v}),y.toolbar.attr("id",s+"_toolbar"),y.main.attr("id",s+"_main"),y.scroller.attr("id",s+"_scroller"),y.main.css({height:"100%",width:"100%",position:"relative"}),y.scroller.css({height:"100%",width:"100%",position:"relative"}),y.viewport=A(y.scroller,s+"_vp"),y.viewport.css({overflow:"hidden",fontSize:0,"touch-action":"none"}),y.viewport.addClass(rn.atala_viewport),y.viewport.attr("tabindex",-1),y.edges[0]=U(y.viewport,s+"_e0"),y.edges[0].addClass(rn.atala_dom_edge_first),y.content=A(y.viewport,s+"_ct"),y.content.addClass(rn.atala_content),y.content.css({"-ms-touch-action":"none",fontSize:0,overflow:"hidden"}),F.direction===en.Horizontal&&y.content.css({display:"inline-block"}),y.edges[1]=U(y.viewport,s+"_e1"),y.edges[1].addClass(rn.atala_dom_edge_last),Kt.Features.Compatibility&&I("InitError","Compatibility Mode is not supported."),!1===F.upload.enabled||k||(y.uploadCtrl=E.upload.getUploadControl()),Kt.Mobile.Any()?y.scroller.css({overflow:"hidden"}):F.showscrollbars?(y.scroller.css({overflow:"auto"}),y.scrollH=X(y.main,en.Horizontal),y.scrollH.attr("id",s+"_sH"),y.scrollH.addClass(rn.atala_scroll_horizontal),y.scrollV=X(y.main,en.Vertical),y.scrollV.attr("id",s+"_sV"),y.scrollV.addClass(rn.atala_scroll_vertical)):y.scroller.css({overflow:"hidden"}),E.mouseTool=new _n(c,{_internalEvents:r,_controllers:E,zoomStart:et,zoom:tt,zoomEnd:nt,getActivePage:Ee,raiseDrawLayer:xt,resetDrawLayer:yt,getViewerTransform:pt},y.viewport,y.scroller,Qt.extend({allowflick:F.allowflick},F.mousetool)),E.memory=new pn({highWaterMark:F.memorythreshold}),E.memory.bind({exceededhighwatermark:h}),E.annotations&&E.annotations.setViewPort(y.viewport),Gt("initialized"),F.direction===en.Horizontal&&y.viewport.css({"white-space":"nowrap"}),y.viewport.css({display:"table-cell"}),G(y.scroller),y.scrollH&&y.edges[1].height(y.scrollH.scrollbarHeight()),E.mouseTool.setTool($t.Pan,$t.None),(F.documenturl||F.annotationsurl||F.formurl)&&Ut(F.documenturl,F.annotationsurl,F.formurl,o),Qt(m));var t,n}(),c};function Ee(e,t){return e.singlepage?new Ce(e,t):new Je(e,t)}function Ke(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that shows thumbnails of document pages and annotations.
 * @param {WebThumbnailerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @augments Atalasoft.Controls.WebDocumentViewer
 * @returns {WebDocumentThumbnailer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */Ee.domclasses=rn,Ee.domattributes=an;function Me(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){Se(t,e,n[e])})}return t}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Main Atalasoft Namespace definition(s)
 * @namespace Atalasoft
 */n.d(t,"Utils",function(){return Ve}),n.d(t,"Annotations",function(){return He}),n.d(t,"Controls",function(){return Le}),n.d(t,"Logger",function(){return We});var Fe={WebDocumentThumbnailer:function(e,n){var s,l,h=null,f=e.viewer||null,p=[],g=[],c=null,m=null,u=null,v="atala_dragdata",d="ui-sortable",b="sortable",x="atala_scroll_parent",y=null,_={size:{width:0,height:0},sizes:[{width:0,height:0}],count:0,number:-1,dpi:96,vector:!1},w={base:null,loading:!1,initialized:!1,scrolling:!1,dragdropping:!1,viewer:{zoom:0,pagenumber:0,api:{}},selfapi:{}},o={moves:0,start:{x:NaN,y:NaN}},z={divsize:-1,scale:1,size:0,zoom:1,zoomfull:1},P={direction:en.Vertical,
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
selecteditemsorder:Ge.ItemIndexOrder},t={type:"Atalasoft.Controls.WebDocumentThumbnailer",debug:!0,showpageborder:!0,forcepagefit:!0,toolbarparent:Qt("<div/>")},i={
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
thumbdragcomplete:null};function D(){return{get:function(){return h},detachViewer:E,activateViewer:C}}function T(e,t){if(e){var n=t?e.bind:e.unbind,o=t?h.unbind:h.bind;n.call(e,{beforehandlerrequest:Pe,documentloaded:fe,scroll:be,pagerotated:we,pageinserted:ge,pageremoved:me,pagemoved:ve}),o.call(h,{pagerotated:pe,pageinserted:pe,pageremoved:pe,pagemoved:pe}),r(e,e.document.events,n),P.allowannotations&&(n.call(e,{annotationresized:ze,annotationmoved:ze,annotationrotated:ze,annotationchanged:ze,annotationcreated:ye,annotationdeleted:_e}),e.annotations&&r(e,e.annotations.events,n))}}function r(e,t,n){var o={};for(var i in t)t.hasOwnProperty(i)&&(o[i]=a);n.call(e,o)}function a(){h.trigger.apply(h,arguments)}
/**
   * Checks whether current thumbnailer is controlling referenced viewer.
   *
   * If viewer is linked only to the current thumbnailer, this method always return `true`.
   *
   * If thumbnailer is not linked to any viewer, this method always return `false`.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#isActive
   * @returns {boolean} `true` if current thumbnailer instance is controlling referenced viewer; `false` otherwise.
   */function k(){return f&&(!y||y&&y.isThumbnailerActive(D()))}
/**
   * Takes ownership over referenced viewer, i.e. if shared viewer is currently displaying other document, it's switched to display document from calling thumbnailer.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#activate
   */function C(e,t,n){if(!f&&e&&(m=(f=e).__getViewerLink(h,u),y=m.stateManager),f&&f.isReady()&&(!k()||n)){var o=f&&!k(),i=(r={pagewidth:_.size.width,pageheight:_.size.height,pagecount:_.count,dpi:_.dpi,colordepth:w.base.controllers.memory.colorDepth,vector:_.vector,pagenumber:w.viewer.pagenumber,zoom:w.viewer.zoom},P.allowannotations&&u._annos&&(r.layers=se(u._annos,"items")),P.allowforms&&u._fields&&(r.forms={fields:se(u._fields)}),r);i.customData=null==t?void 0:t.customData,y.activateThumbnailer(D(),i,u,P,n),o&&(T(f,!0),M((l={thumb:{annotations:null,document:null,text:null,getCurrentPageIndex:null,getZoom:null,zoom:null,zoomIn:null,zoomOut:null,next:null,previous:null,save:null,showPage:null,setMouseTool:null},viewer:{reloadPage:function(e){return s=e.reloadPage,X}}}).viewer,a=f,h,w.viewer.api),M(l.thumb,h,a,w.selfapi))}var r,a,l;q(!0)}function E(){if(f&&f.isReady()&&(w.viewer.zoom=f.getZoom(),w.viewer.pagenumber=f.getCurrentPageIndex(),P.allowforms&&w.base.controllers.forms&&m._fields)){var e={forms:{fields:se(m._fields)}};w.base.controllers.forms.loadForms(e)}var t;T(f,!1),t=f,M(S(w.viewer.api),t,w.viewer.api,{}),M(S(w.selfapi),h,w.selfapi,{}),q(!1)}function M(e,t,n,o){for(var i in e)e.hasOwnProperty(i)&&(t.hasOwnProperty(i)&&t[i]&&(o[i]=t[i]),"function"==typeof e[i]?t[i]=e[i](t,n):n.hasOwnProperty(i)&&n[i]&&(t[i]=n[i]))}function S(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=null);return t}e&&("thumbsize"in e&&isFinite(e.thumbsize)&&0<e.thumbsize&&(ue(e.thumbsize),t.forcepagesize={width:e.thumbsize,height:e.thumbsize}),Qt.extend(P,e),Qt.extend(P,t),P.showpagenumber=P.showpagenumber&&!P.showthumbcaption,"fitting"in e||(P.fitting=P.direction===en.Vertical?tn.Width:tn.Height),f&&f.config&&(P.allowtext=f.config.allowtext)),h=Je.call(this,P,function(e,t){Ee(e,t,n)}),u=h.__getViewerLink(h),P=u._config,F=u.__createDiv,u.__getSelectedPagesIndices=V,P.allowdragdrop=!!P.allowdragdrop,P.selectedindex=he(P.selectedindex)?parseInt(P.selectedindex,10):0,P.thumbpadding=he(P.thumbpadding)?parseInt(P.thumbpadding,10):8,P.backcolor=de(P.backcolor,"#DCDCDC"),P.hovercolor=de(P.hovercolor,"#667F9F"),P.selectedcolor=de(P.selectedcolor,"#E0872D"),P.selectedhovercolor=de(P.selectedhovercolor,"#FFC060");var F=function(){},I=function(){};function A(){if(P.debug){var e=I(),t=V();return Qt.extend(!0,e,{thumbnailer:{config:P,index:t[0],indices:t,links:{viewer:m,self:u},page:_,thumb:z,state:w}}),e}return null}
/**
   * Scrolls the viewer to the given page number and executes the callback when finished
   * @function Atalasoft.Controls.WebDocumentThumbnailer#scrollToThumb
   * @param {number} index - Index of the page to scroll to.
   * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
   */var O=function(){};
/**
   * @summary Gets the selected thumbnails indices.
   * @description Gets the selected thumbnails indices with respect of {@link WebDocumentViewerConfig.selecteditemsorder| selecteditemsorder} parameter value.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPagesIndices
   * @returns {number[]}
   */
function V(){var n=this,e=p.slice(0);return P.selecteditemsorder===Ge.ItemIndexOrder&&e.sort(function(e,t){return Ke(this,n),e-t}.bind(this)),e}function H(e){var t=1,n=function(){--t<=0&&(k()&&y&&f&&C(f,h.getDocumentInfo(),!0),"function"==typeof e&&e.call())};k()&&(y?y.closeDocument(D(),u):f.isReady()&&(t++,f.empty(n))),L(n)}h.getSelectedPageIndex=
/**
   * @summary Gets the selected thumbnail index.
   * @description Gets the selected thumbnail index when Web Document Thumbnailer (WDT) setup to use singleselect. When WDT setup to use multiselect, then this method returns the first element of the selected page indices, with respect of {@link WebDocumentViewerConfig.selecteditemsorder| selecteditemsorder} parameter value.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPageIndex
   * @returns {number}
   */
function(){return V()[0]},h.getSelectedPagesIndices=V,h.selectThumb=U,h.deselectThumb=W,h.isActive=k,h.activate=function(){C(f,h.getDocumentInfo())};var L=function(){};function R(){k()&&(y?y.closeDocument(D(),u):f.empty(),E()),j(),m=f=null}var j=function(){};function B(e,t,n,o){w.base&&Qt.each(w.base.dom.pageDivs,function(e,t){t.off(c),t.thumbInitialized=!1}),null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null)),"string"==typeof e&&(y.closeDocument(D(),u),w.viewer.pagenumber=0),N(e,t,n,function(e,t){h.scrollTo(0,0,!1),Ee(e,t,o)})}var N=function(){};function q(e){if(w.base){0===p.length&&p.push(0);for(var t=0;t<w.base.dom.pageDivs.length;t++){var n=0<t?w.base.dom.pageDivs[t-1]:null,o=w.base.dom.pageDivs[t],i=!1;-1<p.indexOf(o._index)&&e?(o.removeClass("atala_grouped_selection"),o.addClass(h.domclasses.atala_active_thumb),null!==n&&-1<p.indexOf(n._index)&&(o.addClass("atala_grouped_selection"),n.addClass("atala_grouped_selection")),i=!0):(o.removeClass(h.domclasses.atala_active_thumb),o.removeClass("atala_grouped_selection")),J(o,i)}}}
/** 
   * Highlights the thumbnail at the given index, and scrolls to it in the linked viewer, if possible.
   * @param {number|string} index - Index of the page to select. Can be passed as string representation of a number
   * @param {boolean} [append] - Append index to the already selected thumbs or not. Its value ignores in single select mode.
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been selected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#selectThumb
   */function U(e,t,n){var o=this;if(m._controllers.upload&&m._controllers.upload.abort(),!(null===(e=Qe(e))||e<0||e>=h.getDocumentInfo().count||void 0!==t&&"boolean"!=typeof t&&null!==t||void 0!==n&&"function"!=typeof n&&null!==n)){if(t=!!t&&P.selectionmode!==Ye.SingleSelect){if(-1<p.indexOf(e))return;p.push(e)}else V().forEach(function(e){Ke(this,o),h.trigger({type:"thumbdeselected",index:e})}.bind(this)),p.length=0,p.push(e);Z(),h.trigger({type:"thumbselected",index:e}),"function"==typeof n&&n()}}
/** 
   * Resets the thumbnail highlight at the given index, and scrolls to the next selected thumbnail in the linked viewer, if possible.
   *
   * This function doesn't deselect the given index in the single select mode, and in multi select mode, if one page is selected.
   * @param {number|string} index - Index of the page to deselect. Can be passed as string representation of a number
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been deselected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#deselectThumb
   */function W(e,t){if(null!==(e=Qe(e))&&(void 0===t||"function"==typeof t||null===t)){var n=p.indexOf(e);-1!==n&&1!==p.length&&(p.splice(n,1),Z(),h.trigger({type:"thumbdeselected",index:e}),"function"==typeof t&&t())}}function Z(){var e=V();if(y?(w.viewer.pagenumber=e[0],C(f,h.getDocumentInfo())):q(!0),!(1<p.length)&&f){var t=f.getCurrentPageIndex(),n=e[0];0<=t&&n!==t&&(w.scrolling=!0,n===t-1?f.previous(1,xe):n===t+1?f.next(1,xe):f.showPage(n,xe))}}
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
   * This object will be available on the server side handler as an key-values collection. This allows to pass specific load options for individual pages.
   * @function Atalasoft.Controls.WebDocumentViewer#reloadPage
   */function X(e,t,n,o,i){if(l){var r=Array.prototype.slice.call(arguments);if(f&&f.isReady())if(k()){var a=Array.prototype.slice.call(r);"function"!=typeof(i=r.pop())&&(r=Array.prototype.slice.call(a)),l.apply(this,r).then(function(){s&&s.apply(this,a)})}else l.apply(this,arguments);else l.apply(this,arguments)}}function Y(){if(w.base){if(w.initialized&&0<w.base.dom.pageDivs.length&&null!=w.base.dom.pageDivs[0]._img&&!w.base.dom.pageDivs[0]._img._size.isEmpty()){var e=w.base.dom.pageDivs[0]._img._size;e.width>e.height?z.scale=z.size/e.width:z.scale=z.size/e.height,P.tabular&&1<P.columns&&P.direction===en.Vertical&&ce()}else{var t=w.base.page.size.width/w.base.page.size.height<1,n=Math.ceil(w.base.page.size.height*w.base.config.zoom),o=Math.ceil(w.base.page.size.width*w.base.config.zoom),i=z.size;P.direction===en.Vertical?z.divsize=Math.ceil(w.base.page.size.width*w.base.config.zoom):P.direction===en.Horizontal&&(z.divsize=Math.ceil(w.base.page.size.height*w.base.config.zoom)),ue(i=i<=0?z.divsize-2*P.thumbpadding:i),P.tabular&&1<P.columns&&P.direction===en.Vertical&&ce();var r=t?n:o;z.scale=r?w.base.config.zoom*(z.size/r):1,z.zoomfull=z.scale,P.minwidth>w.base.page.size.width*z.scale&&w.base.page.size.width&&(P.minwidth=w.base.page.size.width*z.scale),w.initialized=!0}var a=P.showpageborder?2*P.pageborderwidth:0,l=z.size+2*P.thumbpadding-a;if(h.trigger({type:"pagedivsresized",height:l,width:l,fullzoom:z.zoomfull,minwidth:P.minwidth}),P.allowdragdrop){w.base.dom.content.addClass(h.domclasses.atala_thumb_draggable),w.base.dom.content.css({minWidth:l,minHeight:l});var s=Math.round(z.size/2);w.base.dom.content.sortable({containment:"window",connectWith:"."+h.domclasses.atala_thumb_draggable,appendTo:document.body,placeholder:h.domclasses.atala_drag_placeholder,cursorAt:{left:s,top:s},delay:P.dragdelay,distance:4,helper:$,opacity:.65,scroll:!0,scrollSensitivity:s,scrollSpeed:10,start:ee,receive:ie,stop:oe,over:te,change:ne,tolerance:"pointer",update:re,zIndex:100})}Qt.each(w.base.dom.pageDivs,function(e,t){t.width(z.size),t.height(z.size),t.thumbInitialized||(t.on(c),t.css({padding:P.thumbpadding,"background-color":P.backcolor,cursor:"pointer","margin-bottom":P.pagespacing+"px","text-align":"center",position:"relative"}),P.tabular?t.css({"margin-right":P.pagespacing+"px"}):P.direction===en.Horizontal&&t.css({"margin-right":P.pagespacing+"px","margin-bottom":"0px"}),t._paper&&Kt.Explorer&&(t._paper.canvas.style.top="",t._paper.canvas.style.width="",t._paper.canvas.style.height=""),t._grips&&(t._grips.push=function(){}),t.thumbInitialized=!0),G(t._img,t._paper)}),0<w.base.dom.pageDivs.length&&u.__adjustEdgeHeights(w.base.dom.pageDivs[0]._index)}}function G(e,t,n,o){if(w.base){var i=o||e&&e.getScaledSize(n);if(!i)return;var r=i.width,a=i.height,l=z.size*(w.base.config.zoom/z.zoomfull);if(l<r||l<a){var s=n*(l/(r/a<1?a:r));r=Math.round(e._size.width*s),a=Math.round(e._size.height*s),n=s}e.width(r),e.height(a);var c=e.getDomElement();c[0].style.left="50%",c[0].style.top="50%",c[0].style.position="absolute",c[0].style.marginLeft=-Math.round(r/2)+"px",c[0].style.marginTop=-Math.round(a/2)+"px",t&&(t.canvas.style.left="50%",t.canvas.style.top="50%",t.canvas.style.marginLeft=-Math.round(r/2)+"px",t.canvas.style.marginTop=-Math.round(a/2)+"px",t.canvas.style.zIndex=1),e.trigger({type:"pagezoom",index:e._page._index,height:Math.round(a),width:Math.round(r),prevzoom:w.base.config.zoom,zoom:n})}}function Q(e,t,n){var o=e.data("selected")?t:n;e.css("background-color",o)}function J(e,t){var n=t?P.selectedcolor:P.backcolor;e.data("selected",t),e.css("background-color",n)}function K(e){var t=this;this._initial=e,this._actual=e,this.scrollTop=function(){t._actual.scrollTop()},this.scrollLeft=function(){t._actual.scrollTop()},this.setObject=function(e){t._actual=e,this[0]=t._actual[0]},this.offset=function(){return t._actual.offset()},this.setObject(e)}function $(e,t){w.dragdropping=!0,q(k());var n=Qt('<div class="atala_drag_helper"></div>'),o=function(e){var n=this,o=[];return e.hasClass(h.domclasses.atala_active_thumb)&&k()?V().forEach(function(e){Ke(this,n);for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t]._index===e){o.push(w.base.dom.pageDivs[t]);break}}.bind(this)):o.push(e),o}(t);1<o.length&&(Qt(this).sortable("option","items","> *:not(.atala_grouped_selection)"),Qt(this).sortable("refresh"));for(var i=t.hasClass(h.domclasses.atala_active_thumb)&&k()?Math.min(3,V().length):1,r=0;r<o.length||r<i;r++){var a=r<o.length?o[r]:o[0];if(r<i){var l=a.find("."+h.domclasses.atala_page_image_anchor).first().clone();l.css({position:"absolute",left:10*r+"px",top:-10*r+"px",right:"0px",bottom:"0px",margin:"","z-index":-r}),n.append(l)}}w.base.dom.content.append(n);var s=n.scrollParent(),c=w.base.dom.content.data(d)||w.base.dom.content.data(b);return n.hide(),setTimeout(function(){var t=this;c&&(c.scrollParent=new K(s),o.forEach(function(e){Ke(this,t),e.data(x,c.scrollParent)}.bind(this))),n.appendTo("body"),n.show()},1),n}function ee(e,t){var n=this;m._controllers.upload.abort();var o=function(e){if(e.hasClass(h.domclasses.atala_active_thumb)&&k())return V();for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t][0]===e[0])return[w.base.dom.pageDivs[t]._index];return null}(t.item);if(null!==o){var i=[];o.forEach(function(e){Ke(this,n),i.push(h.document.getPageReference(e))}.bind(this));var r={start:o,end:o[0],updateHandled:!1,pageRefs:i,documenturl:"object"==typeof i[0]&&i[0].uri?i[0].uri:w.base.config.documenturl,thumbLink:u,thumb:h,thumbId:u._id,viewerId:m._id,state:w,externalDropIndex:null,insertAfterSelf:!1};t.item.data(v,r),w.base.controllers.mouseTool.pauseTool(),t.placeholder.width(t.item.width()),t.placeholder.height(t.item.height()),t.placeholder.css({margin:t.item.css("margin"),display:w.base.config.tabular||w.base.config.direction===en.Horizontal?"inline-block":"block",padding:Math.max(0,w.base.config.thumbpadding-1)}),h.trigger({type:"thumbdragstart",dragindex:r.start[0],dragindices:r.start})}}function te(e,t){if(!Kt.Mobile.Any()){var n=t.placeholder.parents("."+h.domclasses.atala_scroller),o=t.item.data(x);n.length&&o&&o[0]!==n.first()[0]&&o.setObject(n.first())}}function ne(e,t){var n=t.item.data(v);if(n){var o=t.placeholder.prev();n.insertAfterSelf=o.length&&t.item[0]===o.first()[0]}}function oe(e,t){var n=this,o=t.item.data(v),i=P.parent.offset().left,r=P.parent.offset().left+P.parent.width(),a=P.parent.offset().top,l=P.parent.offset().top+P.parent.height(),s=t.position.left+t.item.width()/2,c=t.position.top+t.item.height()/2,u=i<s&&s<r&&a<c&&c<l;if(o&&u){w.base.controllers.mouseTool.resumeTool(),o.updateHandled||(o.end=ae(t),o.updateHandled=!0),o.insertAfterSelf&&++o.end,o.end=o.start[0]<o.end?o.end-1:o.end;var d={type:"thumbdragend",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,sourcedocument:o.documenturl,target:h,external:!1,pageref:o.pageRefs[0],pagerefs:o.pageRefs,cancel:!1};h.trigger(d,d),d.cancel?Qt(this).sortable("cancel"):(m&&k()&&f.isReady()?m._controllers.document.movePages(o.start,o.end):w.base.controllers.document.movePages(o.start,o.end),le(),(p.length=0)<g.length?(g.sort(function(e,t){return Ke(this,n),e-t}.bind(this)).forEach(function(e){Ke(this,n),U(e,!0)}.bind(this)),g.length=0):U(o.end,!1),d={type:"thumbdragcomplete",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,target:h},w.dragdropping=!1,h.trigger(d,d))}else o&&!u&&Qt(this).sortable("cancel");Qt(this).sortable("option","items","> *"),Qt(this).sortable("refresh"),t.item.data(v,null)}function ie(e,t){var o=this;Qt(t.sender).sortable("cancel");var i=t.item.data(v);if(i){i.thumbLink._controllers.mouseTool.resumeTool();var n=w.base.dom.pageDivs.length?w.base.dom.pageDivs[0]._index:0;i.end=i.externalDropIndex+n||0;var r={type:"thumbdragend",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,sourcedocument:i.documenturl,target:h,pageref:i.pageRefs[0],pagerefs:i.pageRefs,external:!0,cancel:!1,copyannotations:!0};if(h.trigger(r.type,r),!r.cancel){var a=[];r.copyannotations&&i.thumb.config.allowannotations&&h.config.allowannotations&&i.start.forEach(function(e){Ke(this,o),a.push(i.thumb.annotations.getFromPage(e))}.bind(this)),i.viewerId!==m._id&&i.thumb.selectThumb(i.thumb.getCurrentPageIndex(),!1),w.scrolling=!0,i.thumb.document.removePages(i.start),h.document.insertPages(null,i.pageRefs,i.end),f&&(w.viewer.pagenumber=i.end,C(f,h.getDocumentInfo(),!0)),le(),p.length=0,P.selectionmode===Ye.SingleSelect?U(i.end):i.start.forEach(function(e,t){U(i.end+t,!0)}),a.forEach(function(e,t){if(Ke(this,o),e)for(var n=0;n<e.length;n++)h.annotations.createOnPage(e[n],i.end+t)}.bind(this)),h.trigger("thumbdragcomplete",{type:"thumbdragcomplete",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,target:h}),w.dragdropping=!1,i.state.dragdropping=!1}}t.item.data(v,null)}function re(e,t){var n=t.item.data(v);n&&(w.base.dom.content.has(t.item).length?(n.end=ae(t),n.thumbId===u._id&&h.trigger({type:"thumbsreordered",dragindex:n.start[0],dragindices:n.start,dropindex:n.end})):n.externalDropIndex=t.item.index(),n.updateHandled=!0)}function ae(e){for(var t=-1,n=e.item.prev().length?e.item.prev().first():[null],o=0;o<w.base.dom.pageDivs.length;++o)if(w.base.dom.pageDivs[o][0]===n[0]){t=w.base.dom.pageDivs[o]._index;break}return t+1}function le(){var e=w.base.dom.scroller[0];if(u.__isObjectInRect(w.base.dom.edges[1][0],e,e.scrollLeft,e.scrollTop,e.scrollLeft+e.clientWidth,e.scrollTop+e.clientHeight)){var t=w.base.dom.pageDivs[0]._index,n=u.__getIndexFromPos(e.scrollLeft,e.scrollTop),o=n-t;o<w.base.dom.pageDivs.length&&0<o?u.__showNext(o):(u.__showPageAsync(n,!1),u.__redrawVisiblePages())}}function se(e,t){var n=[];for(var o in e)if(e.hasOwnProperty(o)){var i=[],r=t?{}:i;for(var a in t&&(r[t]=i),e[o])e[o].hasOwnProperty(a)&&(i[a]=e[o][a].get(),i[a].multiview=!0);n[o]=r}return n}function ce(){if(P.tabular){var e;if(1<P.columns)e=(z.size+2*P.thumbpadding+P.pagespacing)*Math.min(w.base.controllers.document.getPageCount(),P.columns);else if(1<P.rows){var t=Math.ceil(w.base.controllers.document.getPageCount()/P.rows);e=(z.size+2*P.thumbpadding+P.pagespacing)*t}e&&w.base.dom.content.width(e)}}function ue(e){e<=0&&h.trigger({type:"throwerror",name:"Invalid thumb size",msg:"Thumb size cannot be "+e+". Check configuration parameters 'minwidth', 'thumbpadding' and 'thumbsize'. If 'thumbsize' is not specified, then 'minwidth' should be at least (2 * thumbpadding + 1)."}),z.size=e,w.base&&w.base.config.forcepagesize&&(w.base.config.forcepagesize.width=e,w.base.config.forcepagesize.height=e)}function de(e,t){var n="#FFFFFF",o="#FFF",i="white",r="rgb(255, 255, 255)",a=F(null,"dummy");return a.css("backgroundColor",i),a.css("backgroundColor",e),a.css("backgroundColor")===r&&(e=e.toLowerCase())!==i&&e!==n&&e!==o&&e!==r&&(e=t),e}function he(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function fe(){}function pe(e,t){0<w.base.state.batchoperation||("function"==typeof e&&(t=e),Y(),u.__redrawVisiblePages(!0),u.__adjustVisiblePages(),w.base&&m&&k()&&f.isReady()?(m.__redrawVisiblePages(!0),m.__adjustVisiblePages(!1,t)):"function"==typeof t&&t())}function ge(e){w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.insertLayer(null,null,e.destindex),w.base.controllers.forms&&w.base.controllers.forms.insertForm(null,null,e.destindex),m._state.batchoperation<=0&&pe())}function me(e){w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.removeLayer(e.index),w.base.controllers.forms&&w.base.controllers.forms.removeForm(e.index),m._state.batchoperation<=0&&pe())}function ve(e){var n=this;if(w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.moveLayer(e.shiftedsrcindex,e.destindex),w.base.controllers.forms&&w.base.controllers.forms.moveForm(e.shiftedsrcindex,e.destindex),function(){var e=w.base.dom.pageDivs[0]._index;w.base.dom.pageDivs.sort(function(e,t){return e.index()-t.index()});for(var t=0;t<w.base.dom.pageDivs.length;t++){var n=w.base.dom.pageDivs[t];n._index=e+t,null!=n._num&&n._num.text(n._index+1)}}(),m._state.batchoperation<=0&&pe(),w.dragdropping)){var t=e.destindex;g.sort(function(e,t){return Ke(this,n),t-e}.bind(this)).forEach(function(e){Ke(this,n),e===t&&t--}.bind(this)),g.push(t)}}function be(){var e=f.getCurrentPageIndex(),t=V();t.length<=1&&t[0]!==e&&!w.scrolling&&U(e)}function xe(e){w.scrolling=!1}function ye(e){if(w.base){var t=m._annos[e.page]||null,n=null;t&&(n=t[t.length-1].get()),n&&n.type===e.anno.type&&(n.multiview=!0,w.base.controllers.annotations.createAnnotation(n,e.page))}}function _e(e){w.base&&w.base.controllers.annotations.deleteAnnoOnPage(e.page,e.index)}function we(){w.base&&m._state.batchoperation<=0&&pe()}function ze(e){if(w.base){var t=e.anno.getPageIndex();if(function(e){for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t]._index===e)return!0;return!1}(t))for(var n=w.base.controllers.annotations.getAnnosFromPage(t),o=0;o<n.length;o++)n[o].type===e.anno.type&&n[o].update(!0)}}function Pe(e){if(("docinfo"===e.request.type||"annodata"===e.request.type||"formdata"===e.request.type)&&w.base){e.request.cancel=!0,"docinfo"===e.request.type&&(e.request.info.pagewidth=_.size.width,e.request.info.pageheight=_.size.height,e.request.info.pagecount=_.count,e.request.info.dpi=_.dpi,e.request.info.colordepth=w.base.controllers.memory.colorDepth,e.request.info.vector=_.vector);var t=void 0!==e.request.info.docIndex?e.request.info.docIndex:e.request.info.offset||0,n=-1<e.request.info.length?e.request.info.length+t:void 0;if(e.request.info.offset=e.request.info.offset||0,P.allowannotations&&("annodata"===e.request.type||e.request.data.atala_annurl)){var o=w.base.controllers.annotations.__getDebugInfo().data;e.request.info.layers=se(o.annos.slice(t,n),"items")}if(P.allowforms&&("formdata"===e.request.type||e.request.data.atala_formurl)){var i=w.base.controllers.forms.__getDebugInfo().data;e.request.info.forms={fields:se(i.fields.slice(t,n))}}f.trigger({type:"handlerreturned",request:e.request})}}function De(){}function Te(){}function ke(e,t,n){for(var o in n)n.hasOwnProperty(o)&&delete n[o]}function Ce(){w.base={config:u._config,controllers:u._controllers,dom:u._dom,page:u._page,state:u._state,stateManager:u.stateManager}}function Ee(e,t,n){_.size.width=w.base.page.size.width,_.size.height=w.base.page.size.height,_.count=w.base.page.count,_.dpi=w.base.page.dpi,_.vector=w.base.page.vector,Y(),Ze(w.base.dom.scrollH),Ze(w.base.dom.scrollV);var o=function(){k()&&U(P.selectedindex),n&&"function"==typeof n&&n(e)};w.viewer.zoom=0,(k()||y&&!y.isViewerActive())&&C(f,t,!0),o()}function Me(){Q(Qt(this),P.selectedhovercolor,P.hovercolor)}function Se(){Q(Qt(this),P.selectedcolor,P.backcolor)}function Fe(e){if(0===e.button){for(var t=e.currentTarget,n=-1,o=0;o<w.base.dom.pageDivs.length;o++)if(w.base.dom.pageDivs[o][0]===t){n=w.base.dom.pageDivs[o]._index;break}if(-1!==n)if(P.selectionmode===Ye.MultiSelect){var i=e.shiftKey,r=Kt.Platform!==Xe.Mac?e.ctrlKey:e.metaKey;if(i){var a=p[p.length-1];if(n<a)for(var l=a-1;n<=l;l--)Ie(l,!0);else for(var s=a+1;s<=n;s++)Ie(s,!0)}else Ie(n,r)}else U(n)}}function Ie(e,t){t=t&&k(),-1!==p.indexOf(e)&&t?W(e):U(e,t)}function Ae(e,t,n){if(!(1<e.originalEvent.touches.length)){e.preventDefault();var o=e.originalEvent.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent(t,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,n,null),e.target.dispatchEvent(i)}}function Oe(e){if(o.moves=0,o.start={x:NaN,y:NaN},e.originalEvent.touches&&1===e.originalEvent.touches.length){var t=e.originalEvent.touches[0];o.start.x=t.screenX,o.start.y=t.screenY}Ae(e,"mouseover",0),Ae(e,"mousedown",0)}function Ve(e){if(e.originalEvent.touches&&e.originalEvent.touches.length){var t=e.originalEvent.touches[0];(1<e.originalEvent.touches.length||5<Math.abs(o.start.x-t.screenX)||5<Math.abs(o.start.y-t.screenY))&&o.moves++,Ae(e,"mousemove",0)}}function He(e){Ae(e,"mouseup",0),0<o.moves?o.moves=0:Ae(e,"click",0),Ae(e,"mouseout",0)}function Le(){w.dragdropping&&(q(k()),w.base.dom.content.sortable("refresh"))}function Re(e){if(P.showthumbcaption){if(!e.page._caption){var t=Qt("<div/>");t.css({left:"3%",bottom:"16px",width:"94%",position:"absolute",zIndex:1,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),t.addClass(h.domclasses.atala_thumb_caption),e.page._caption=t,e.page.append(t)}var n=e.page._index+1+"";u._page.caption&&(n=u._page.caption.replace("{0}",n),e.page.attr("title",n)),e.page._caption.text(n)}e.page&&e.page._img&&!e.page._img._loaded&&G(e.page._img,e.page._paper),J(e.page,-1<p.indexOf(e.page._index)&&k())}function je(e){e.image&&(e.image._loaded?e.page&&G(e.image,e.page._paper,z.scale,{width:e.width,height:e.height}):e.image.css({position:"absolute"}))}function Be(e){m&&m.__status&&m.__status(e.message)}function Ne(){if(w.base){var e=w.base.page.size.width/w.base.page.size.height<1,t=Math.ceil(w.base.page.size.height*w.base.config.zoom),n=Math.ceil(w.base.page.size.width*w.base.config.zoom),o=Math.max(t,n),i=w.base.config.zoom*(o/(e?t:n));z.zoom=w.base.config.zoom/z.zoomfull,z.scale=i,Qt.each(w.base.dom.pageDivs,function(e,t){t.width(o),t.height(o)})}}function qe(){}function Ue(){}function We(e){m&&y&&f&&f.isReady()&&m.__updatePageSize(e,w.base.controllers.document,w.base.page.size,y.isThumbnailerActive(D()))}function Ze(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}return f&&(m=f.__getViewerLink(h,u),y=m.stateManager),h.bind({statusmessage:Be,pagerotated:pe,pageinserted:pe,pageremoved:pe,pagemoved:pe}),h.bind({annotationsloaded:De,formsloaded:Te,contextmenu:ke,documentloaded:Ce,pageshown:Re,pageresize:je,scroll:Le,zoomchanged:Ne,zoomstarted:qe,zoomfinished:Ue,pagesizechanged:We}),L=h.empty,j=h.dispose,N=h.openUrl,I=h.__getDebugInfo,O=h.showPage,h.empty=H,h.dispose=R,h.openUrl=h.OpenUrl=B,h.__getDebugInfo=A,h.scrollToThumb=O,h.zoom=h.zoomIn=h.zoomOut=function(){},l=h.reloadPage,h.reloadPage=X,delete h.fit,Qt.extend(h.events,i),c={click:Fe,touchstart:Oe,touchmove:Ve,touchend:He,mouseenter:Me,mouseleave:Se},h},WebDocumentViewer:Ee,Version:gn};function Ie(){return"object"==typeof exports&&"object"==typeof e}function Ae(){return"function"==typeof define&&n(118)}function Oe(){return!!self.Atalasoft}
/**
 * @namespace Utils
 * @memberof Atalasoft
 */
var Ve=_,He={AnnotationTypes:ye},Le=Ie()||Ae()||!Oe()?Fe:Me({},self.Atalasoft.Controls,Fe),We=Ie()||Ae()||!Oe()?{}:Me({},self.Atalasoft.Logger);
/**
 * @namespace Annotations
 * @memberof Atalasoft
 */}])});