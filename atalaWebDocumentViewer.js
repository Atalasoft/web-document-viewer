//-------------------------------------------------------------------------------------------------
//
//  Web Document Viewer object cross browser client-side script. 
//  (C) 2003-2024 Kofax. All Rights Reserved.
//
//  This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)
//  Permission for usage and modification of this code is only permitted 
//  with the purchase of a source code license.
//-------------------------------------------------------------------------------------------------
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):"function"==typeof define&&define.amd?define(["jquery","raphael","jquery-ui","clipboard"],t):"object"==typeof exports?exports.Atalasoft=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):e.Atalasoft=t(e.jQuery,e.Raphael,e.jQuery.ui,e.ClipboardJS)}(window,function(n,o,i,a){return function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=127)}([function(e,t,n){var u=n(2),d=n(24).f,h=n(15),f=n(19),g=n(45),p=n(91),m=n(49);e.exports=function(e,t){var n,o,i,a,r,l=e.target,s=e.global,c=e.stat;if(n=s?u:c?u[l]||g(l,{}):(u[l]||{}).prototype)for(o in t){if(a=t[o],i=e.noTargetGet?(r=d(n,o))&&r.value:n[o],!m(s?o:l+(c?".":"#")+o,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;p(a,i)}(e.sham||i&&i.sham)&&h(a,"sham",!0),f(n,o,a,e)}}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(e,t,n){var o=n(26)("wks"),i=n(47),a=n(2).Symbol,r=n(77);e.exports=function(e){return o[e]||(o[e]=r&&a[e]||(r?a:i)("Symbol."+e))}},function(e,t,n){var o=n(7);e.exports=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){e.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var o=n(5),i=n(71),a=n(4),r=n(25),l=Object.defineProperty;t.f=o?l:function(e,t,n){if(a(e),t=r(t,!0),a(n),i)try{return l(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var o=n(20),i=Math.min;e.exports=function(e){return 0<e?i(o(e),9007199254740991):0}},function(e,t,n){"use strict";var h=n(37),f=n(20),g=n(9),p=n(21),m=n(53),v=n(52),b=Math.max,y=Math.min,o=n(29)("splice");n(0)({target:"Array",proto:!0,forced:!o},{splice:function(e,t){var n,o,i,a,r,l,s=p(this),c=g(s.length),u=h(e,c),d=arguments.length;if(0===d?n=o=0:o=1===d?(n=0,c-u):(n=d-2,y(b(f(t),0),c-u)),9007199254740991<c+n-o)throw TypeError("Maximum allowed length exceeded");for(i=m(s,o),a=0;a<o;a++)(r=u+a)in s&&v(i,a,s[r]);if(n<(i.length=o)){for(a=u;a<c-o;a++)l=a+n,(r=a+o)in s?s[l]=s[r]:delete s[l];for(a=c;c-o+n<a;a--)delete s[a-1]}else if(o<n)for(a=c-o;u<a;a--)l=a+n-1,(r=a+o-1)in s?s[l]=s[r]:delete s[l];for(a=0;a<n;a++)s[a+u]=arguments[a+2];return s.length=c-o+n,i}})},function(e,t,n){var o=n(102),i=n(103),a=n(15),r=n(2);for(var l in o){var s=r[l],c=s&&s.prototype;if(c&&c.forEach!==i)try{a(c,"forEach",i)}catch(e){c.forEach=i}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){"use strict";var d=n(58),y=n(4),h=n(6),x=n(109),_=n(54),w=n(9),z=n(41),f=n(55),o=n(1),g=[].push,k=Math.min,P=4294967295,T=!o(function(){return!RegExp(P,"y")});n(42)("split",2,function(i,m,v){var b;return b="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){var n=String(h(this)),o=void 0===t?P:t>>>0;if(0===o)return[];if(void 0===e)return[n];if(!d(e))return m.call(n,e,o);for(var i,a,r,l=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,u=new RegExp(e.source,s+"g");(i=f.call(u,n))&&!(c<(a=u.lastIndex)&&(l.push(n.slice(c,i.index)),1<i.length&&i.index<n.length&&g.apply(l,i.slice(1)),r=i[0].length,c=a,l.length>=o));)u.lastIndex===i.index&&u.lastIndex++;return c===n.length?!r&&u.test("")||l.push(""):l.push(n.slice(c)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:m.call(this,e,t)}:m,[function(e,t){var n=h(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):b.call(String(n),e,t)},function(e,t){var n=v(b,e,this,t,b!==m);if(n.done)return n.value;var o=y(e),i=String(this),a=x(o,RegExp),r=o.unicode,l=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(T?"y":"g"),s=new a(T?o:"^(?:"+o.source+")",l),c=void 0===t?P:t>>>0;if(0===c)return[];if(0===i.length)return null===z(s,i)?[i]:[];for(var u=0,d=0,h=[];d<i.length;){s.lastIndex=T?d:0;var f,g=z(s,T?i:i.slice(d));if(null===g||(f=k(w(s.lastIndex+(T?0:d)),i.length))===u)d=_(i,d,r);else{if(h.push(i.slice(u,d)),h.length===c)return h;for(var p=1;p<=g.length-1;p++)if(h.push(g[p]),h.length===c)return h;d=u=f}}return h.push(i.slice(u)),h}]},!T)},function(e,t,n){var o=n(35),i=n(6);e.exports=function(e){return o(i(e))}},function(e,t,n){var o=n(8),i=n(34);e.exports=n(5)?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){"use strict";var k=n(4),o=n(21),P=n(9),T=n(20),a=n(6),D=n(54),C=n(41),E=Math.max,S=Math.min,h=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,g=/\$([$&`']|\d\d?)/g;n(42)("replace",2,function(i,_,w){return[function(e,t){var n=a(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):_.call(String(n),e,t)},function(e,t){var n=w(_,e,this,t);if(n.done)return n.value;var o=k(e),i=String(this),a="function"==typeof t;a||(t=String(t));var r=o.global;if(r){var l=o.unicode;o.lastIndex=0}for(var s=[];;){var c=C(o,i);if(null===c)break;if(s.push(c),!r)break;""===String(c[0])&&(o.lastIndex=D(i,P(o.lastIndex),l))}for(var u,d="",h=0,f=0;f<s.length;f++){c=s[f];for(var g=String(c[0]),p=E(S(T(c.index),i.length),0),m=[],v=1;v<c.length;v++)m.push(void 0===(u=c[v])?u:String(u));var b=c.groups;if(a){var y=[g].concat(m,p,i);void 0!==b&&y.push(b);var x=String(t.apply(void 0,y))}else x=z(g,i,p,m,b,t);h<=p&&(d+=i.slice(h,p)+x,h=p+g.length)}return d+i.slice(h)}];function z(a,r,l,s,c,e){var u=l+a.length,d=s.length,t=g;return void 0!==c&&(c=o(c),t=f),_.call(e,t,function(e,t){var n;switch(t.charAt(0)){case"$":return"$";case"&":return a;case"`":return r.slice(0,l);case"'":return r.slice(u);case"<":n=c[t.slice(1,-1)];break;default:var o=+t;if(0===o)return e;if(d<o){var i=h(o/10);return 0===i?e:i<=d?void 0===s[i-1]?t.charAt(1):s[i-1]+t.charAt(1):e}n=s[o-1]}return void 0===n?"":n})}})},function(e,t,n){"use strict";var c=n(7),u=n(39),d=n(37),h=n(9),f=n(14),g=n(52),p=n(3)("species"),m=[].slice,v=Math.max,o=n(29)("slice");n(0)({target:"Array",proto:!0,forced:!o},{slice:function(e,t){var n,o,i,a=f(this),r=h(a.length),l=d(e,r),s=d(void 0===t?r:t,r);if(u(a)&&("function"!=typeof(n=a.constructor)||n!==Array&&!u(n.prototype)?c(n)&&null===(n=n[p])&&(n=void 0):n=void 0,n===Array||void 0===n))return m.call(a,l,s);for(o=new(void 0===n?Array:n)(v(s-l,0)),i=0;l<s;l++,i++)l in a&&g(o,i,a[l]);return o.length=i,o}})},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var l=n(2),s=n(15),c=n(12),u=n(45),o=n(73),i=n(74),a=i.get,d=i.enforce,h=String(o).split("toString");n(26)("inspectSource",function(e){return o.call(e)}),(e.exports=function(e,t,n,o){var i=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,r=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||c(n,"name")||s(n,"name",t),d(n).source=h.join("string"==typeof t?t:"")),e!==l?(i?!r&&e[t]&&(a=!0):delete e[t],a?e[t]=n:s(e,t,n)):a?e[t]=n:u(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&a(this).source||o.call(this)})},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?o:n)(e)}},function(e,t,n){var o=n(6);e.exports=function(e){return Object(o(e))}},function(e,t,n){"use strict";var o=n(40)(2),i=n(29)("filter");n(0)({target:"Array",proto:!0,forced:!i},{filter:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var o=n(5),i=n(8).f,a=Function.prototype,r=a.toString,l=/^\s*function ([^ (]*)/;!o||"name"in a||i(a,"name",{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(e){return""}}})},function(e,t,n){var o=n(5),i=n(33),a=n(34),r=n(14),l=n(25),s=n(12),c=n(71),u=Object.getOwnPropertyDescriptor;t.f=o?u:function(e,t){if(e=r(e),t=l(t,!0),c)try{return u(e,t)}catch(e){}if(s(e,t))return a(!i.f.call(e,t),e[t])}},function(e,t,n){var i=n(7);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var o=n(2),i=n(45),a="__core-js_shared__",r=o[a]||i(a,{});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.0.1",mode:n(70)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){var o=n(75),i=n(48).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,i)}},function(e,t,n){var o=n(75),i=n(48);e.exports=Object.keys||function(e){return o(e,i)}},function(e,t,n){var o=n(1),i=n(3)("species");e.exports=function(t){return!o(function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},function(e,t,n){"use strict";var o=n(14),i=[].join,a=n(35)!=Object,r=n(81)("join",",");n(0)({target:"Array",proto:!0,forced:a||r},{join:function(e){return i.call(o(this),void 0===e?",":e)}})},function(e,t,n){"use strict";var o=n(40)(1),i=n(29)("map");n(0)({target:"Array",proto:!0,forced:!i},{map:function(e){return o(this,e,arguments[1])}})},function(e,t){e.exports=n},function(e,t,n){"use strict";var o={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!o.call({1:2},1);t.f=a?function(e){var t=i(this,e);return!!t&&t.enumerable}:o},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var o=n(1),i=n(18),a="".split;e.exports=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==i(e)?a.call(e,""):Object(e)}:Object},function(e,t){e.exports={}},function(e,t,n){var o=n(20),i=Math.max,a=Math.min;e.exports=function(e,t){var n=o(e);return n<0?i(n+t,0):a(n,t)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var o=n(18);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){var y=n(99),x=n(35),_=n(21),w=n(9),o=n(53);e.exports=function(d,e){var h=1==d,f=2==d,g=3==d,p=4==d,m=6==d,v=5==d||m,b=e||o;return function(e,t,n){for(var o,i,a=_(e),r=x(a),l=y(t,n,3),s=w(r.length),c=0,u=h?b(e,s):f?b(e,0):void 0;c<s;c++)if((v||c in r)&&(i=l(o=r[c],c,a),d))if(h)u[c]=i;else if(i)switch(d){case 3:return!0;case 5:return o;case 6:return c;case 2:u.push(o)}else if(p)return!1;return m?-1:g||p?p:u}}},function(e,t,n){var i=n(18),a=n(55);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},function(e,t,n){"use strict";var d=n(15),h=n(19),f=n(1),g=n(3),p=n(55),m=g("species"),v=!f(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),b=!f(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]});e.exports=function(n,e,t,o){var i=g(n),a=!f(function(){var e={};return e[i]=function(){return 7},7!=""[n](e)}),r=a&&!f(function(){var e=!1,t=/a/;return t.exec=function(){return e=!0,null},"split"===n&&(t.constructor={},t.constructor[m]=function(){return t}),t[i](""),!e});if(!a||!r||"replace"===n&&!v||"split"===n&&!b){var l=/./[i],s=t(i,""[n],function(e,t,n,o,i){return t.exec===p?a&&!i?{done:!0,value:l.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),c=s[0],u=s[1];h(String.prototype,n,c),h(RegExp.prototype,i,2==e?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}),o&&d(RegExp.prototype[i],"sham",!0)}}},function(e,t,n){"use strict";var o=n(40)(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),n(0)({target:"Array",proto:!0,forced:a},{find:function(e){return o(this,e,1<arguments.length?arguments[1]:void 0)}}),n(60)(i)},function(e,t,n){"use strict";var o=n(85),i=n(110)("trim");n(0)({target:"String",proto:!0,forced:i},{trim:function(){return o(this,3)}})},function(e,t,n){var o=n(2),i=n(15);e.exports=function(t,n){try{i(o,t,n)}catch(e){o[t]=n}return n}},function(e,t,n){var o=n(26)("keys"),i=n(47);e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,n){var o=n(1),i=/#|\.prototype\./,a=function(e,t){var n=l[r(e)];return n==c||n!=s&&("function"==typeof t?o(t):!!t)},r=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=a.data={},s=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},function(e,t,n){var o=n(4),i=n(96),a=n(48),r=n(97),l=n(72),s=n(46)("IE_PROTO"),c="prototype",u=function(){},d=function(){var e,t=l("iframe"),n=a.length,o="script";for(t.style.display="none",r.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object</"+o+">"),e.close(),d=e.F;n--;)delete d[c][a[n]];return d()};e.exports=Object.create||function(e,t){var n;return null!==e?(u[c]=o(e),n=new u,u[c]=null,n[s]=e):n=d(),void 0===t?n:i(n,t)},n(36)[s]=!0},function(e,t,n){"use strict";var o=n(39),i=n(7),c=n(21),u=n(9),d=n(52),h=n(53),a=n(3)("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",r=!n(1)(function(){var e=[];return e[a]=!1,e.concat()[0]!==e}),l=n(29)("concat"),p=function(e){if(!i(e))return!1;var t=e[a];return void 0!==t?!!t:o(e)},s=!r||!l;n(0)({target:"Array",proto:!0,forced:s},{concat:function(e){var t,n,o,i,a,r=c(this),l=h(r,0),s=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?r:arguments[t],p(a)){if(i=u(a.length),f<s+i)throw TypeError(g);for(n=0;n<i;n++,s++)n in a&&d(l,s,a[n])}else{if(f<=s)throw TypeError(g);d(l,s++,a)}return l.length=s,l}})},function(e,t,n){"use strict";var i=n(25),a=n(8),r=n(34);e.exports=function(e,t,n){var o=i(t);o in e?a.f(e,o,r(0,n)):e[o]=n}},function(e,t,n){var o=n(7),i=n(39),a=n(3)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){"use strict";var o=n(104);e.exports=function(e,t,n){return t+(n?o(e,t,!0).length:1)}},function(e,t,n){"use strict";var o,i,r=n(56),l=RegExp.prototype.exec,s=String.prototype.replace,a=l,c=(o=/a/,i=/b*/g,l.call(o,"a"),l.call(i,"a"),0!==o.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(a=function(e){var t,n,o,i,a=this;return u&&(n=new RegExp("^"+a.source+"$(?!\\s)",r.call(a))),c&&(t=a.lastIndex),o=l.call(a,e),c&&o&&(a.lastIndex=a.global?o.index+o[0].length:t),u&&o&&1<o.length&&s.call(o[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o}),e.exports=a},function(e,t,n){"use strict";var o=n(4);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){var o=n(58),i=n(6);e.exports=function(e,t,n){if(o(t))throw TypeError("String.prototype."+n+" doesn't accept regex");return String(i(e))}},function(e,t,n){var o=n(7),i=n(18),a=n(3)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},function(e,t,n){var o=n(3)("match");e.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[o]=!1,"/./"[t](n)}catch(e){}}return!1}},function(e,t,n){var o=n(3)("unscopables"),i=n(50),a=n(15),r=Array.prototype;null==r[o]&&a(r,o,i(null)),e.exports=function(e){r[o][e]=!0}},function(e,t,n){"use strict";var c=n(20),u=n(111),d=n(112),o=1..toFixed,i=Math.floor,a=[0,0,0,0,0,0],h=function(e,t){for(var n=-1,o=t;++n<6;)o+=e*a[n],a[n]=o%1e7,o=i(o/1e7)},f=function(e){for(var t=6,n=0;0<=--t;)n+=a[t],a[t]=i(n/e),n=n%e*1e7},g=function(){for(var e=6,t="";0<=--e;)if(""!==t||0===e||0!==a[e]){var n=String(a[e]);t=""===t?n:t+d.call("0",7-n.length)+n}return t},p=function(e,t,n){return 0===t?n:t%2==1?p(e,t-1,n*e):p(e*e,t/2,n)};n(0)({target:"Number",proto:!0,forced:o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(1)(function(){o.call({})})},{toFixed:function(e){var t,n,o,i,a=u(this),r=c(e),l="",s="0";if(r<0||20<r)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||1e21<=a)return String(a);if(a<0&&(l="-",a=-a),1e-21<a)if(n=(t=function(e){for(var t=0,n=e;4096<=n;)t+=12,n/=4096;for(;2<=n;)t+=1,n/=2;return t}(a*p(2,69,1))-69)<0?a*p(2,-t,1):a/p(2,t,1),n*=4503599627370496,0<(t=52-t)){for(h(0,n),o=r;7<=o;)h(1e7,0),o-=7;for(h(p(10,o,1),0),o=t-1;23<=o;)f(1<<23),o-=23;f(1<<o),h(1,1),f(2),s=g()}else h(0,n),h(1<<-t,0),s=g()+d.call("0",r);return s=0<r?l+((i=s.length)<=r?"0."+d.call("0",r-i)+s:s.slice(0,i-r)+"."+s.slice(i-r)):l+s}})},function(e,t,n){"use strict";var o=n(4),i=n(1),a=n(56),r=n(5),l="toString",s=/./[l],c=i(function(){return"/a/b"!=s.call({source:"a",flags:"b"})}),u=s.name!=l;(c||u)&&n(19)(RegExp.prototype,l,function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?a.call(e):void 0)},{unsafe:!0})},function(e,t,n){"use strict";var o=n(64),i=n(65)("bold");n(0)({target:"String",proto:!0,forced:i},{bold:function(){return o(this,"b","","")}})},function(e,t,n){var r=n(6),l=/"/g;e.exports=function(e,t,n,o){var i=String(r(e)),a="<"+t;return""!==n&&(a+=" "+n+'="'+String(o).replace(l,"&quot;")+'"'),a+">"+i+"</"+t+">"}},function(e,t,n){var o=n(1);e.exports=function(t){return o(function(){var e=""[t]('"');return e!==e.toLowerCase()||3<e.split('"').length})}},function(e,t,n){"use strict";var o=n(64),i=n(65)("italics");n(0)({target:"String",proto:!0,forced:i},{italics:function(){return o(this,"i","","")}})},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=!1},function(e,t,n){e.exports=!n(5)&&!n(1)(function(){return 7!=Object.defineProperty(n(72)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(7),i=n(2).document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},function(e,t,n){e.exports=n(26)("native-function-to-string",Function.toString)},function(e,t,n){var o,i,a,r=n(90),l=n(7),s=n(15),c=n(12),u=n(46),d=n(36),h=n(2).WeakMap;if(r){var f=new h,g=f.get,p=f.has,m=f.set;o=function(e,t){return m.call(f,e,t),t},i=function(e){return g.call(f,e)||{}},a=function(e){return p.call(f,e)}}else{var v=u("state");d[v]=!0,o=function(e,t){return s(e,v,t),t},i=function(e){return c(e,v)?e[v]:{}},a=function(e){return c(e,v)}}e.exports={set:o,get:i,has:a,enforce:function(e){return a(e)?i(e):o(e,{})},getterFor:function(n){return function(e){var t;if(!l(e)||(t=i(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},function(e,t,n){var r=n(12),l=n(14),s=n(76)(!1),c=n(36);e.exports=function(e,t){var n,o=l(e),i=0,a=[];for(n in o)!r(c,n)&&r(o,n)&&a.push(n);for(;t.length>i;)r(o,n=t[i++])&&(~s(a,n)||a.push(n));return a}},function(e,t,n){var s=n(14),c=n(9),u=n(37);e.exports=function(l){return function(e,t,n){var o,i=s(e),a=c(i.length),r=u(n,a);if(l&&t!=t){for(;r<a;)if((o=i[r++])!=o)return!0}else for(;r<a;r++)if((l||r in i)&&i[r]===t)return l||r||0;return!l&&-1}}},function(e,t,n){e.exports=!n(1)(function(){return!String(Symbol())})},function(e,t,n){t.f=n(3)},function(e,t,n){e.exports=n(2)},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){"use strict";var o=n(1);e.exports=function(e,t){var n=[][e];return!n||!o(function(){n.call(null,t||function(){throw 1},1)})}},function(e,t,n){"use strict";var d=n(4),h=n(9),i=n(6),f=n(54),g=n(41);n(42)("match",1,function(o,c,u){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=u(c,e,this);if(t.done)return t.value;var n=d(e),o=String(this);if(!n.global)return g(n,o);for(var i,a=n.unicode,r=[],l=n.lastIndex=0;null!==(i=g(n,o));){var s=String(i[0]);""===(r[l]=s)&&(n.lastIndex=f(o,h(n.lastIndex),a)),l++}return 0===l?null:r}]})},function(e,t,n){"use strict";var o=n(2),i=n(49),a=n(12),r=n(18),l=n(84),u=n(25),s=n(1),c=n(27).f,d=n(24).f,h=n(8).f,f=n(85),g="Number",p=o[g],m=p.prototype,v=r(n(50)(m))==g,b="trim"in String.prototype,y=function(e){var t,n,o,i,a,r,l,s,c=u(e,!1);if("string"==typeof c&&2<c.length)if(43===(t=(c=b?c.trim():f(c,3)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+c}for(r=(a=c.slice(2)).length,l=0;l<r;l++)if((s=a.charCodeAt(l))<48||i<s)return NaN;return parseInt(a,o)}return+c};if(i(g,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var x,_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(v?s(function(){m.valueOf.call(n)}):r(n)!=g)?l(new p(y(t)),n,_):y(t)},w=n(5)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;w.length>z;z++)a(p,x=w[z])&&!a(_,x)&&h(_,x,d(p,x));(_.prototype=m).constructor=_,n(19)(o,g,_)}},function(e,t,n){var a=n(7),r=n(106);e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&a(o)&&r&&r(e,o),e}},function(e,t,n){var o=n(6),i="["+n(86)+"]",a=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$");e.exports=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(r,"")),e}},function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(e,t,n){"use strict";var s=n(4),i=n(6),c=n(108),u=n(41);n(42)("search",1,function(o,r,l){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=l(r,e,this);if(t.done)return t.value;var n=s(e),o=String(this),i=n.lastIndex;c(i,0)||(n.lastIndex=0);var a=u(n,o);return c(n.lastIndex,i)||(n.lastIndex=i),null===a?-1:a.index}]})},function(e,t,n){var o=n(113),i=Object.prototype;o!==i.toString&&n(19)(i,"toString",o,{unsafe:!0})},function(e,t,n){"use strict";var o=n(2),r=n(12),i=n(5),a=n(70),l=n(0),s=n(19),c=n(36),u=n(1),d=n(26),h=n(93),f=n(47),g=n(3),p=n(78),m=n(94),v=n(95),b=n(39),y=n(4),x=n(7),_=n(14),w=n(25),z=n(34),k=n(50),P=n(98),T=n(24),D=n(8),C=n(33),E=n(15),S=n(28),M=n(46)("hidden"),F=n(74),A="Symbol",O=F.set,I=F.getterFor(A),V=T.f,L=D.f,H=P.f,j=o.Symbol,B=o.JSON,R=B&&B.stringify,N="prototype",q=g("toPrimitive"),U=C.f,W=d("symbol-registry"),Z=d("symbols"),X=d("op-symbols"),G=d("wks"),Y=Object[N],J=o.QObject,Q=n(77),K=!J||!J[N]||!J[N].findChild,$=i&&u(function(){return 7!=k(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=V(Y,t);o&&delete Y[t],L(e,t,n),o&&e!==Y&&L(Y,t,o)}:L,ee=function(e,t){var n=Z[e]=k(j[N]);return O(n,{type:A,tag:e,description:t}),i||(n.description=t),n},te=Q&&"symbol"==typeof j.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof j},ne=function(e,t,n){return e===Y&&ne(X,t,n),y(e),t=w(t,!0),y(n),r(Z,t)?(n.enumerable?(r(e,M)&&e[M][t]&&(e[M][t]=!1),n=k(n,{enumerable:z(0,!1)})):(r(e,M)||L(e,M,z(1,{})),e[M][t]=!0),$(e,t,n)):L(e,t,n)},oe=function(e,t){y(e);for(var n,o=v(t=_(t)),i=0,a=o.length;i<a;)ne(e,n=o[i++],t[n]);return e},ie=function(e){var t=U.call(this,e=w(e,!0));return!(this===Y&&r(Z,e)&&!r(X,e))&&(!(t||!r(this,e)||!r(Z,e)||r(this,M)&&this[M][e])||t)},ae=function(e,t){if(e=_(e),t=w(t,!0),e!==Y||!r(Z,t)||r(X,t)){var n=V(e,t);return!n||!r(Z,t)||r(e,M)&&e[M][t]||(n.enumerable=!0),n}},re=function(e){for(var t,n=H(_(e)),o=[],i=0;n.length>i;)r(Z,t=n[i++])||r(c,t)||o.push(t);return o},le=function(e){for(var t,n=e===Y,o=H(n?X:_(e)),i=[],a=0;o.length>a;)!r(Z,t=o[a++])||n&&!r(Y,t)||i.push(Z[t]);return i};Q||(s((j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor");var e=void 0===arguments[0]?void 0:String(arguments[0]),t=f(e),n=function(e){this===Y&&n.call(X,e),r(this,M)&&r(this[M],t)&&(this[M][t]=!1),$(this,t,z(1,e))};return i&&K&&$(Y,t,{configurable:!0,set:n}),ee(t,e)})[N],"toString",function(){return I(this).tag}),C.f=ie,D.f=ne,T.f=ae,n(27).f=P.f=re,n(38).f=le,i&&(L(j[N],"description",{configurable:!0,get:function(){return I(this).description}}),a||s(Y,"propertyIsEnumerable",ie,{unsafe:!0})),p.f=function(e){return ee(g(e),e)}),l({global:!0,wrap:!0,forced:!Q,sham:!Q},{Symbol:j});for(var se=S(G),ce=0;se.length>ce;)m(se[ce++]);l({target:A,stat:!0,forced:!Q},{for:function(e){return r(W,e+="")?W[e]:W[e]=j(e)},keyFor:function(e){if(!te(e))throw TypeError(e+" is not a symbol");for(var t in W)if(W[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),l({target:"Object",stat:!0,forced:!Q,sham:!i},{create:function(e,t){return void 0===t?k(e):oe(k(e),t)},defineProperty:ne,defineProperties:oe,getOwnPropertyDescriptor:ae}),l({target:"Object",stat:!0,forced:!Q},{getOwnPropertyNames:re,getOwnPropertySymbols:le}),B&&l({target:"JSON",stat:!0,forced:!Q||u(function(){var e=j();return"[null]"!=R([e])||"{}"!=R({a:e})||"{}"!=R(Object(e))})},{stringify:function(e){for(var t,n,o=[e],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=t=o[1],(x(t)||void 0!==e)&&!te(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!te(t))return t}),o[1]=t,R.apply(B,o)}}),j[N][q]||E(j[N],q,j[N].valueOf),h(j,A),c[M]=!0},function(e,t,n){var o=n(73),i=n(2).WeakMap;e.exports="function"==typeof i&&/native code/.test(o.call(i))},function(e,t,n){var l=n(12),s=n(92),c=n(24),u=n(8);e.exports=function(e,t){for(var n=s(t),o=u.f,i=c.f,a=0;a<n.length;a++){var r=n[a];l(e,r)||o(e,r,i(t,r))}}},function(e,t,n){var o=n(27),i=n(38),a=n(4),r=n(2).Reflect;e.exports=r&&r.ownKeys||function(e){var t=o.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var o=n(8).f,i=n(12),a=n(3)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,a)&&o(e,a,{configurable:!0,value:t})}},function(e,t,n){var o=n(79),i=n(12),a=n(78),r=n(8).f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});i(t,e)||r(t,e,{value:a.f(e)})}},function(e,t,n){var l=n(28),s=n(38),c=n(33);e.exports=function(e){var t=l(e),n=s.f;if(n)for(var o,i=n(e),a=c.f,r=0;i.length>r;)a.call(e,o=i[r++])&&t.push(o);return t}},function(e,t,n){var o=n(5),r=n(8),l=n(4),s=n(28);e.exports=o?Object.defineProperties:function(e,t){l(e);for(var n,o=s(t),i=o.length,a=0;a<i;)r.f(e,n=o[a++],t[n]);return e}},function(e,t,n){var o=n(2).document;e.exports=o&&o.documentElement},function(e,t,n){var o=n(14),i=n(27).f,a={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return r&&"[object Window]"==a.call(e)?function(e){try{return i(e)}catch(e){return r.slice()}}(e):i(o(e))}},function(e,t,n){var a=n(80);e.exports=function(o,i,e){if(a(o),void 0===i)return o;switch(e){case 0:return function(){return o.call(i)};case 1:return function(e){return o.call(i,e)};case 2:return function(e,t){return o.call(i,e,t)};case 3:return function(e,t,n){return o.call(i,e,t,n)}}return function(){return o.apply(i,arguments)}}},function(e,t,n){var o=n(14),i=n(24).f,a=n(5),r=n(1)(function(){i(1)}),l=!a||r;n(0)({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},function(e,t,n){var o=n(21),i=n(28),a=n(1)(function(){i(1)});n(0)({target:"Object",stat:!0,forced:a},{keys:function(e){return i(o(e))}})},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){"use strict";var o=[].forEach,i=n(40)(0),a=n(81)("forEach");e.exports=a?function(e){return i(this,e,arguments[1])}:o},function(e,t,n){var s=n(20),c=n(6);e.exports=function(e,t,n){var o,i,a=String(c(e)),r=s(t),l=a.length;return r<0||l<=r?n?"":void 0:(o=a.charCodeAt(r))<55296||56319<o||r+1===l||(i=a.charCodeAt(r+1))<56320||57343<i?n?a.charAt(r):o:n?a.slice(r,r+2):i-56320+(o-55296<<10)+65536}},function(e,t,n){"use strict";var i=n(9),a=n(57),r="startsWith",o=n(59)(r),l=""[r];n(0)({target:"String",proto:!0,forced:!o},{startsWith:function(e){var t=a(this,e,r),n=i(Math.min(1<arguments.length?arguments[1]:void 0,t.length)),o=String(e);return l?l.call(t,o,n):t.slice(n,n+o.length)===o}})},function(e,t,n){var i=n(107);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,o=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),o=e instanceof Array}catch(e){}return function(e,t){return i(e,t),o?n.call(e,t):e.__proto__=t,e}}():void 0)},function(e,t,n){var o=n(7),i=n(4);e.exports=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}},function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},function(e,t,n){var i=n(4),a=n(80),r=n(3)("species");e.exports=function(e,t){var n,o=i(e).constructor;return void 0===o||null==(n=i(o)[r])?t:a(n)}},function(e,t,n){var o=n(1),i=n(86);e.exports=function(e){return o(function(){return!!i[e]()||"​᠎"!="​᠎"[e]()||i[e].name!==e})}},function(e,t,n){var o=n(18);e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},function(e,t,n){"use strict";var i=n(20),a=n(6);e.exports="".repeat||function(e){var t=String(a(this)),n="",o=i(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;0<o;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},function(e,t,n){"use strict";var o=n(114),i={};i[n(3)("toStringTag")]="z",e.exports="[object z]"!==String(i)?function(){return"[object "+o(this)+"]"}:i.toString},function(e,t,n){var i=n(18),a=n(3)("toStringTag"),r="Arguments"==i(function(){return arguments}());e.exports=function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?n:r?i(t):"Object"==(o=i(t))&&"function"==typeof t.callee?"Arguments":o}},function(e,t,n){n(0)({target:"Array",proto:!0},{fill:n(116)}),n(60)("fill")},function(e,t,n){"use strict";var l=n(21),s=n(37),c=n(9);e.exports=function(e){for(var t=l(this),n=c(t.length),o=arguments.length,i=s(1<o?arguments[1]:void 0,n),a=2<o?arguments[2]:void 0,r=void 0===a?n:s(a,n);i<r;)t[i++]=e;return t}},function(e,t,n){"use strict";var o=n(64),i=n(65)("strike");n(0)({target:"String",proto:!0,forced:i},{strike:function(){return o(this,"strike","","")}})},function(e,t,n){var o=n(119);n(0)({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(e,t,n){"use strict";var h=n(28),f=n(38),g=n(33),p=n(21),m=n(35),i=Object.assign;e.exports=!i||n(1)(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=i({},e)[n]||h(i({},t)).join("")!=o})?function(e,t){for(var n=p(e),o=arguments.length,i=1,a=f.f,r=g.f;i<o;)for(var l,s=m(arguments[i++]),c=a?h(s).concat(a(s)):h(s),u=c.length,d=0;d<u;)r.call(s,l=c[d++])&&(n[l]=s[l]);return n}:i},function(e,t,n){"use strict";var o=n(76)(!0);n(0)({target:"Array",proto:!0},{includes:function(e){return o(this,e,1<arguments.length?arguments[1]:void 0)}}),n(60)("includes")},function(e,t,n){var o=n(5),i=n(3)("match"),a=n(2),r=n(49),l=n(84),s=n(8).f,c=n(27).f,u=n(58),d=n(56),h=n(19),f=n(1),g=a.RegExp,p=g.prototype,m=/a/g,v=/a/g,b=new g(m)!==m;if(r("RegExp",o&&(!b||f(function(){return v[i]=!1,g(m)!=m||g(v)==v||"/a/i"!=g(m,"i")})))){for(var y=function(e,t){var n=this instanceof y,o=u(e),i=void 0===t;return!n&&o&&e.constructor===y&&i?e:l(b?new g(o&&!i?e.source:e,t):g((o=e instanceof y)?e.source:e,o&&i?d.call(e):t),n?this:p,y)},x=function(t){t in y||s(y,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},_=c(g),w=0;w<_.length;)x(_[w++]);(p.constructor=y).prototype=p,h(a,"RegExp",y)}n(122)("RegExp")},function(e,t,n){"use strict";var o=n(123),i=n(8),a=n(5),r=n(3)("species");e.exports=function(e){var t=o(e),n=i.f;a&&t&&!t[r]&&n(t,r,{configurable:!0,get:function(){return this}})}},function(e,t,n){var o=n(79),i=n(2),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(o[e])||a(i[e]):o[e]&&o[e][t]||i[e]&&i[e][t]}},function(e,t,n){"use strict";var o=n(57),i="includes",a=n(59)(i);n(0)({target:"String",proto:!0,forced:!a},{includes:function(e){return!!~o(this,e,i).indexOf(e,1<arguments.length?arguments[1]:void 0)}})},function(e,t,n){"use strict";var r=n(9),l=n(57),s="endsWith",c=""[s],u=Math.min,o=n(59)(s);n(0)({target:"String",proto:!0,forced:!o},{endsWith:function(e){var t=l(this,e,s),n=1<arguments.length?arguments[1]:void 0,o=r(t.length),i=void 0===n?o:u(r(n),o),a=String(e);return c?c.call(t,a,i):t.slice(i-a.length,i)===a}})},function(t,e){(function(e){t.exports=e}).call(this,{})},function(e,t,n){"use strict";n.r(t);n(89),n(51),n(22),n(100),n(101),n(11),n(82),n(16),n(105);var Ge,o,i=n(32),a=n(67),r=n(68),l=n(69),fn=void 0===i?null:i,gn=(void 0===r&&(void 0===i.ui||i.ui),void 0===a?null:a),Be=void 0===l?null:l;function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}(o=Ge||(Ge={}))[o.Windows=0]="Windows",o[o.Mac=1]="Mac",o[o.Unknown=2]="Unknown";var h,f,g=function(){function e(){}return e.prototype.Any=function(){return this.iOS||this.Android||this.IEMobile},d(e,[{key:"iOS",get:function(){return!!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)}},{key:"Android",get:function(){return!!navigator.userAgent.match(/(Android)/i)}},{key:"IEMobile",get:function(){return!!navigator.userAgent.match(/(IEMobile)/i)}}]),e}(),p=function(){function e(){c(this,"browserLayoutVersion",navigator.userAgent.match(/(?:Gecko|Presto|Trident|WebKit).[\d.]*/))}return d(e,[{key:"Gecko",get:function(){return!!navigator.userAgent.match(/(Gecko)/i)}},{key:"Presto",get:function(){return!!navigator.userAgent.match(/(Presto)/i)}},{key:"Trident",get:function(){return!!navigator.userAgent.match(/(Trident)/i)}},{key:"Webkit",get:function(){return!!navigator.userAgent.match(/(WebKit)/i)}},{key:"Version",get:function(){return this.browserLayoutVersion?this.browserLayoutVersion[0].replace(/\D*/,""):null}}]),e}(),m=function(){function e(){c(this,"supportsVml",e.supportsVML())}return e.supportsVML=function(){var e;if(void 0===e){var t=fn("<div/>").appendTo("body"),n=fn('<v:shape id="vml_flag1" adj="1" />').appendTo(t);n.css("behavior","url(#default#VML)"),e=!n[0]||"object"==typeof n[0].adj,t.remove()}return e},d(e,[{key:"SVG",get:function(){return!(!window.SVGAngle&&!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"))}},{key:"Touch",get:function(){return!!("ontouchstart"in window)}},{key:"VML",get:function(){return this.supportsVml}},{key:"foreignObject",get:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Extensibility","1.1")}},{key:"Compatibility",get:function(){return void 0!==document.documentMode&&7===document.documentMode}},{key:"FlexBox",get:function(){return"flex"in document.documentElement.style||"WebkitFlex"in document.documentElement.style||"msFlex"in document.documentElement.style}}]),e}(),v=function(){function e(){c(this,"mobile",void 0),c(this,"browserVersion",void 0),this.mobile=new g,this.Edge?this.browserVersion=navigator.userAgent.match(/(?:Edge).[\d.]*/):this.browserVersion=null,this.browserVersion||(this.browserVersion=navigator.userAgent.match(/(?:MSIE|Firefox|Chrome|Safari|Opera| rv|Edge).[\d.]*/))}return d(e,[{key:"Explorer",get:function(){return 0<=navigator.userAgent.indexOf("MSIE")||0<=navigator.userAgent.indexOf("Trident")}},{key:"Firefox",get:function(){return 0<=navigator.userAgent.indexOf("Firefox")||0<=navigator.userAgent.indexOf("Minefield")}},{key:"Safari",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&navigator.userAgent.indexOf("Chrome")<0&&navigator.userAgent.indexOf("Edge")<0}},{key:"Opera",get:function(){return 0<=navigator.userAgent.indexOf("Opera")}},{key:"Chrome",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")<0}},{key:"Edge",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&0<=navigator.userAgent.indexOf("Edge")}},{key:"Mobile",get:function(){return this.mobile}},{key:"Version",get:function(){return this.browserVersion?this.browserVersion[0].replace(/\D*/,""):null}}]),e}(),b=function(t){var e,n;function o(){var e;return c(s(e=t.call(this)||this),"features",void 0),c(s(e),"layout",void 0),c(s(e),"platform",void 0),e.features=new m,e.layout=new p,e.platform=e.DetectPlatform(),e}
/**
   * @private
   */return n=t,(e=o).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n,o.prototype.DetectPlatform=function(){return navigator.platform.startsWith("Mac")?Ge.Mac:navigator.platform.startsWith("Win")?Ge.Windows:Ge.Unknown},d(o,[{key:"Features",get:function(){return this.features}
/**
     * @private
     */},{key:"Layout",get:function(){return this.layout}
/**
     * @private
     */},{key:"Platform",get:function(){return this.platform}}]),o}(v),y=new v,pn=new b,x=y,mn={
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
ZoomIn:x.Explorer?"pointer":"zoom-in",
/** A magnifying glass with a minus sign in it. */
ZoomOut:x.Explorer?"pointer":"zoom-out",
/** A selection editing cursor. */
Text:"text",
/** A vertical text editing cursor. */
VerticalText:"vertical-text",
/** A wait cursor. */
Wait:"wait",
/** A custom CSS cursor string provided by the user. */
Custom:"%2"},vn={
/** Scrolls horizontally. */
Horizontal:"horizontal",
/** Scrolls vertically. */
Vertical:"vertical"},bn={
/** No fitting will be applied to the image */
None:0,
/** Finds the best option between width or height based fitting. */
Best:1,
/** Fits the image to the available width. */
Width:2,
/** Fits the image to the available height. */
Height:3},yn={
/** Selects the page under the top left corner of the viewer  */
TopLeft:{x:0,y:0},
/** Selects the page under the middle left of the viewer  */
MiddleLeft:{x:0,y:.5},
/** Selects the page under the bottom left corner of the viewer  */
BottomLeft:{x:0,y:1},
/** Selects the page under the center location of viewer  */
Center:{x:.5,y:.5}},xn={
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
MultiSelect:1},Je={
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
Name:3},_={FileUploadRejectReason:w,SelectedItemsOrder:Je,SelectionMode:Ye,ScrollArea:xn,PageSelection:yn,Fitting:bn,ScrollDirection:vn,MouseToolCursor:Re,MouseToolType:mn,Browser:x},_e={
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
polygon:"polygon"},_n=(n(43),n(30),n(17),n(10),n(23),n(83),n(87),n(13),{
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
/** Upload control buttons container */
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
atala_upload_files_header_status:"atala-upload-files-header-status",
/** Tile column */
atala_tile_column:"atala_tile_column",
/** Tiled page */
atala_tiled_page_image:"atala_tiled_page_image",
/** Show bookmarks' toolbar button */
atala_tool_button_bookmarks:"atala_tool_button_bookmarks",
/** Bookmark control */
atala_bookmark_content:"atala_bookmark_content",
/** Header of bookmark control */
atala_bookmark_header:"atala_bookmark_header"}),wn={
/** Index of the page currently displayed within the element. applies to elements having `.atala_page_div` class */
atala_page_index:"atala_page_index"};n(31);function z(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(f=h||(h={})).Jquery="jQuery",f.JqueryUI="jQuery UI",f.RaphaelJS="Raphaël",f.Clipboard="clipboard.js";var k,P,T,D=function(){function r(){}var e=r.prototype;return e.checkDependency=function(e,t){var n=this,o=r.requiredDependencies.filter(function(e){return z(this,n),e.name===t}.bind(this))[0],i={dependency:o,success:!1,reason:"Dependency is not loaded or not found."};if(e){var a="";switch(e.fn&&e.fn.jquery?a=e.fn.jquery:e.version&&(a=e.version),t){case h.Clipboard:i.success=!0,i.reason="WDV can't verify the version of the dependency.";break;case h.Jquery:case h.JqueryUI:case h.RaphaelJS:this.hasNewerVersion(a,o.version)?(i.success=!0,i.reason=""):i.reason="Dependency has a lower version ("+a+") than required."}}return 0<i.reason.length&&(i.reason+=" The minimal required version is '"+o.version+"'."),i},e.hasNewerVersion=function(e,t){var o=this;if(/^[0-9]+\.[0-9]+\.[0-9]+(-([A-Za-z0-9-]+\.?)+)?(\+([A-Za-z0-9-]+\.?)+)?$/.test(e)){for(var i=/^[0-9]+\.[0-9]+\.[0-9]+/,n=function(e){var t=this;if(z(this,o),null!==i){var n=i.exec(e);if(null!=n&&0<n.length)return n[0].split(".").map(function(e){return z(this,t),parseInt(e)}.bind(this))}return[]}.bind(this),a=n(e),r=n(t),l=0;l<3;l++){if(a[l]<r[l])return!1;if(a[l]>r[l])return!0}var s=e.replace(i,"");return 0===s.length||"+"===s[0]}return!1},r}();function C(e,t,n,o,i){var a=e.checkDependency(t,n);return a.success?(i&&i(n,a.reason),!0):(o(n,a.reason),!1)}function zn(e){var n=this,t=new D,o=function(e,t){z(this,n),console.error("The dependency verification for '"+e+"' has failed. "+t)}.bind(this),i=function(e,t){z(this,n)}.bind(this),a=C(t,void 0===fn?null:fn,h.Jquery,o);return e.checkjQueryOnly||(a&&(a=C(t,fn.ui,h.JqueryUI,o)),e.checkRaphael&&(a=C(t,void 0===gn?null:gn,h.RaphaelJS,o)&&a),e.checkClipboard&&(a=C(t,void 0===Be?null:Be,h.Clipboard,o,i)&&a)),a}k=D,P="requiredDependencies",T=[{name:h.Jquery,version:"1.12.4"},{name:h.JqueryUI,version:"1.12."},{name:h.RaphaelJS,version:"2.1.0"},{name:h.Clipboard,version:"2.0.0"}],P in k?Object.defineProperty(k,P,{value:T,enumerable:!0,configurable:!0,writable:!0}):k[P]=T;
/** Annotations related strings.
 * @enum {string}
 * @memberOf Atalasoft.Utils
 */
var E={
/**
   * Delete button title for annotation context menu.
   */
menuDeleteButton:"Delete",
/**
   * Properties button title for annotation context menu.
   */
menuPropertiesButton:"Properties",
/**
   * OK button title for annotation property dialog.
   */
dialogButtonOk:"OK",
/**
   * Reset button title for annotation property dialog.
   */
dialogButtonReset:"Reset",
/**
   * Cancel button title for annotation property dialog.
   */
dialogButtonCancel:"Cancel",
/**
   * Rectangle annotation properties dialog title.
   */
rectangleDialogTitle:"Rectangle Annotation Properties",
/**
   * Text annotation properties dialog title.
   */
textDialogTitle:"Text Annotation Properties",
/**
   * Ellipse annotation properties dialog title.
   */
ellipseDialogTitle:"Ellipse Annotation Properties",
/**
   * Line annotation properties dialog title.
   */
lineDialogTitle:"Line Annotation Properties",
/**
   * Lines annotation properties dialog title.
   */
linesDialogTitle:"Lines Annotation Properties",
/**
   * Freehand annotation properties dialog title.
   */
freehandDialogTitle:"Freehand Annotation Properties",
/**
   * Polygon annotation properties dialog title.
   */
polygonDialogTitle:"Polygon Annotation Properties",
/**
   * Title for Fill Color annotation property.
   */
labelFillColor:"Fill Color:",
/**
   * Title for Fill Opacity annotation property.
   */
labelFillOpacity:"Fill Opacity:",
/**
   * Title for Rotation annotation property.
   */
labelRotation:"Rotation:",
/**
   * Title for Outline Color annotation property.
   */
labelOutlineColor:"Outline Color:",
/**
   * Title for Outline Opacity annotation property.
   */
labelOutlineOpacity:"Outline Opacity:",
/**
   * Title for Outline Width annotation property.
   */
labelOutlineWidth:"Outline Width:",
/**
   * Title for Outline Startcap Width annotation property.
   */
labelOutlineStartcapWidth:"Outline Startcap Width:",
/**
   * Title for Outline Startcap Height annotation property.
   */
labelOutlineStartcapHeight:"Outline Startcap Height:",
/**
   * Title for Outline Startcap Style annotation property.
   */
labelOutlineStartcapStyle:"Outline Startcap Style:",
/**
   * Title for Outline Endcap Width annotation property.
   */
labelOutlineEndcapWidth:"Outline Endcap Width:",
/**
   * Title for Outline Endcap Height annotation property.
   */
labelOutlineEndcapHeight:"Outline Endcap Height:",
/**
   * Title for Outline Endcap Style annotation property.
   */
labelOutlineEndcapStyle:"Outline Endcap Style:",
/**
   * Title for Font Bold annotation property.
   */
labelFontBold:"Font Bold:",
/**
   * Title for Font Italic annotation property.
   */
labelFontItalic:"Font Italic:",
/**
   * Title for Font Color annotation property.
   */
labelFontColor:"Font Color:",
/**
   * Title for Font Family annotation property.
   */
labelFontFamily:"Font Family:",
/**
   * Title for Font Size annotation property.
   */
labelFontSize:"Font Size:",
/**
   * Title for True radio button.
   */
radioButtonTrue:"True",
/**
   * Title for False radio button.
   */
radioButtonFalse:"False",
/**
   * Startcap/Endcap style "None".
   */
valueStyleNone:"None",
/**
   * Startcap/Endcap style "None".
   */
valueStyleOpen:"Arrow",
/**
   * Startcap/Endcap style "Filled Arrow".
   */
valueStyleBlock:"Filled Arrow",
/**
   * Startcap/Endcap style "Filles Ellipse".
   */
valueStyleOval:"Filled Ellipse",
/**
   * Startcap/Endcap style "Filled Diamond".
   */
valueStyleDiamond:"Filled Diamond",
/**
   * Startcap/Endcap width "medium".
   */
valueWidthMedium:"medium",
/**
   * Startcap/Endcap width "wide".
   */
valueWidthWide:"wide",
/**
   * Startcap/Endcap width "narrow".
   */
valueWidthNarrow:"narrow",
/**
   * Startcap/Endcap height "medium".
   */
valueHeightMedium:"medium",
/**
   * Startcap/Endcap height "long".
   */
valueHeightLong:"long",
/**
   * Startcap/Endcap height "short".
   */
valueHeightShort:"short"},kn={annotations:E};
/**
 * Represents strings for {@link Atalasoft.Controls.WebDocumentViewer|WebDocumentViewer} localization.
 * @property {Atalasoft.Utils.LocalizationAnnotationStrings} annotations - Contains a translation table for annotations specific strings.
 * @memberOf Atalasoft.Utils
 */n(44);
/**
 * @private
 */
function X(e,t,n){for(t||(t={x:0,y:0}),n||(n=e.target instanceof HTMLElement?e.target:null),pn.Explorer&&null===e&&(e=event),e instanceof MouseEvent?(t.x=e.clientX,t.y=e.clientY):(t.x=e.touches[0].clientX,t.y=e.touches[0].clientY);n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)t.x-=n.offsetLeft-n.scrollLeft,t.y-=n.offsetTop-n.scrollTop,n=n.offsetParent instanceof HTMLElement?n.offsetParent:null;return t}
/**
 * @private
 */function J(e,t,n){t||(t={x:0,y:0});var o=e.originalEvent;if(e.offsetX||e.offsetY)if(pn.Firefox){var i=e.target.raphaelParent?fn(e.target).parents("svg").offset():fn(e.target.offsetParent||e.target.parentNode).offset();t.y=i?(t.x=e.pageX-i.left,e.pageY-i.top):(t.x=e.pageX,e.pageY)}else if(void 0===o||o.currentTarget===o.target||n)t.x=e.offsetX,t.y=e.offsetY;else if(o.currentTarget.offsetLeft||o.currentTarget.offsetTop||!o.currentTarget.ownerSVGElement)t.x=o.currentTarget.offsetLeft+e.offsetX,t.y=o.currentTarget.offsetTop+e.offsetY;else{var a=pn.Explorer?o.currentTarget.ownerSVGElement.getBBox():o.currentTarget.getBBox();t.x=Math.round(a.x),t.y=Math.round(a.y)}else if(pn.Explorer)o instanceof MouseEvent?(t.x=o.x,t.y=o.y):(t.x=0,t.y=0);else{var r=null,l=e.target;o instanceof TouchEvent&&1===o.touches.length&&(l=document.elementFromPoint(o.touches[0].clientX,o.touches[0].clientY));var s=pn.Features.Touch&&o instanceof TouchEvent?o.touches[0]:null,c=fn(l),u={pageX:0,pageY:0};null!==s?(u.pageX=s.pageX,u.pageY=s.pageY):o instanceof MouseEvent&&(u.pageX=o.pageX,u.pageY=o.pageY),u.pageX||u.pageY||(u.pageX=e.pageX,u.pageY=e.pageY),e.target.raphael?r=c.parents("div:eq(0)").offset():(e.target.raphaelParent||0<c.parents("svg").length)&&(r=c.parents("svg").parents("div:eq(0)").offset()),r||(r=c.offset()),t.y=r?(t.x=u.pageX-r.left,u.pageY-r.top):(t.x=u.pageX,u.pageY)}return t}
/**
 * Gets the normalized offsetLeft and offsetTop from an SVG element
 * with respect to its parent jQuery object
 * @private
 * @param objSVG: object, svg object from the dom
 * @param parent: object, jQuery object representing the parent DOM node
 */function Q(e,t){var n={left:0,top:0};if(e instanceof HTMLElement)n.left=e.offsetLeft,n.top=e.offsetTop;else{var o=fn(e).offset(),i=t.offset();o&&i&&(n.left=o.left-i.left,n.top=o.top-i.top)}return n}
/**
 * @private
 */
/**
 * @private
 */
function Y(e,t,n,o,i){var a=Math.max(e,n),r=Math.min(e,n),l=Math.max(t,o),s=Math.min(t,o);return{x:a-r,y:l-s,dx:i?i.left-r:0,dy:i?i.top-s:0,left:r,right:a,top:s,bottom:l}}
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
function Ne(e,t,n){if(0===n)return e;n=(n-n%90)%360;var o,i,a,r,l=e.x,s=e.y;switch(n){case 90:l=t.height-e.y-e.height,s=e.x;break;case 180:l=t.width-e.x-e.width,s=t.height-e.y-e.height;break;case 270:l=e.y,s=t.width-e.x-e.width}return o=l,i=s,a=90===n||270===n?e.height:e.width,r=90===n||270===n?e.width:e.height,{x:o,y:i,width:a,height:r}}
/**
 * Calculates new point coordinates for the clockwise page rotation to the specified angle.
 * @private
 * @param point
 * @param page
 * @param angle positive number, must be exactly divisible by 90.
 */function qe(e,t,n){return Ne({x:e.x,y:e.y,width:0,height:0},t,n)}
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
 */function S(e){e.stopPropagation()}
/**
 * Creates a function that wraps multiple functions into one
 * @private
 * @param arr: array of functions
 * @param arguments to pass to called functions
 */
/**
 * @private
 */
function Pn(e){return{" transform":e,"-moz-transform":e,"-webkit-transform":e,"-o-transform":e,"-ms-transform":e}}
/**
 * @private
 */function we(e,n){var o=this,i={x:0,y:0,width:0,height:0};return e&&e.length&&(n=n||gn.matrix(),i.x=n.x(e[0].x,e[0].y),i.y=n.y(e[0].x,e[0].y),e.forEach(function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,o);var t={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};i.x=t.x<i.x?t.x:i.x,i.y=t.y<i.y?t.y:i.y,i.width=t.x>i.width?t.x:i.width,i.height=t.y>i.height?t.y:i.height}.bind(this)),i.width-=i.x,i.height-=i.y),i}
/**
 * @private
 */function Qe(e){if("string"==typeof e){var t=e.trim(),n=parseInt(t);if(/^([+|-]?[0-9]+)$/.test(t))return n}return"number"!=typeof e?null:e}
/**
 * @private 
 */function Tn(e){return isFinite(e)&&!(e%1)}function Ue(e){return!isNaN(e)&&isFinite(e)}var Dn={instanceCounter:0};function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Cn=function(){function e(e){M(this,"viewer",void 0),M(this,"currentThumb",void 0),this.viewer=e,this.currentThumb=null}var t=e.prototype;return t.isViewerActive=function(){return!(!this.viewer||!this.currentThumb)},t.isThumbnailerActive=function(e){return e&&!!this.currentThumb&&this.currentThumb.get()===e.get()},t.activateThumbnailer=function(e,t,n,o,i){var a=this.isThumbnailerActive(e);a&&!i||(this.currentThumb&&!a&&this.currentThumb.detachViewer(),this.currentThumb=e,this.viewer&&this.viewer.isInitialized()&&(this.viewer.switchDocument(t,n,o),this.currentThumb.activateViewer()))},t.closeDocument=function(e,t){e=e||this.currentThumb;var n=this.isThumbnailerActive(e);n&&(e.detachViewer(),this.currentThumb=null),this.viewer&&this.viewer.isInitialized()&&t&&this.viewer.closeDocument(t,n)},e}();function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var En=function(){function e(e){A(this,"jqe",fn({})),A(this,"memoryEntries",[]),A(this,"config",{colorDepth:8,compression:1,highWaterMark:5e8,pageSize:{width:800,height:1132}}),A(this,"bytesInUse",0),e&&fn.extend(this.config,e)}var t,n,o,i=e.prototype;return i.dispose=function(){this.clearEntries()},i.bind=function(){return this.jqe.on.apply(this.jqe,arguments),this},i.unbind=function(){return this.jqe.off.apply(this.jqe,arguments),this},i.trigger=function(e){return this.jqe.trigger.apply(this.jqe,arguments),this},i.allocate=function(e){return this.memoryEntries.push(e),this.bytesInUse+=this.calcBytes(e),this.bytesInUse>this.config.highWaterMark&&this.trigger("exceededhighwatermark"),this.bytesInUse},i.deallocateOldestEntry=function(){var e=this.memoryEntries.shift();return void 0!==e&&this.deallocate(e),e},i.clearEntries=function(){this.memoryEntries.length=0,this.bytesInUse=0},i.deallocate=function(e){return this.bytesInUse-=this.calcBytes(e),this.bytesInUse<0&&(this.bytesInUse=0),this.bytesInUse},i.calcBytes=function(e){return(e.width()||this.config.pageSize.width)*(e.height()||this.config.pageSize.height)*this.config.colorDepth/8*this.config.compression},t=e,(n=[{key:"typeOf",get:function(){return"Atalasoft.Document.MemoryTacker"}},{key:"colorDepth",set:function(e){this.config.colorDepth=e},get:function(){return this.config.colorDepth}},{key:"highWatermark",set:function(e){this.config.highWaterMark=e},get:function(){return this.config.highWaterMark}},{key:"pageSize",set:function(e){this.config.pageSize={width:e.width,height:e.height}},get:function(){return this.config.pageSize}}])&&F(t.prototype,n),o&&F(t,o),e}(),Sn=[11,4,0,458],O=(n(61),n(88),n(62),n(115),n(63),n(66),function(o,e,t){var n=this,f=o,h=e,g=null,p=null,m=!1,v={" ":!0,"-":!0,"?":!0,"\n":!0,"\t":!0},i=t,a=null;function b(){var e,t;(t=document.body).currentStyle?e=t.currentStyle.direction:window.getComputedStyle&&(e=document.defaultView.getComputedStyle(t,null).getPropertyValue("direction")),"rtl"===e.toLowerCase()&&(m=!0),g=fn("<canvas "+(m?'dir="rtl"':"")+"/>"),p=fn('<span class="atala_span">{[|,0123456789Thqkbfjplyg</span>'),fn(i).append(p)}function r(e){g&&p||b(),h.applyTo(p),g[0].width=e.width,g[0].height=e.height;var t=g[0].getContext("2d"),n=function(e,t,n){var o=[];if("string"==typeof t){if(f.text.autoscale)return t.split("\n");for(var i=t,a=n,r=function(e){for(var t=[],n="",o=0,i=0;i<e.length;i++){var a=e[i];v[n]&&(t.push(e.substr(o,i-o)),o=i),n=a}return o<e.length&&t.push(e.substr(o,e.length-o)),t}(i),l="",s="",c=[],u=0;u<r.length;u++)if(l=s,s=r[u],e.measureText(s).width>a)for(var d=s.split(""),h=0;h<d.length;h++)c.push(d[h]),e.measureText(c.join("")).width>a&&(c.pop(),o.push(c.join("")),c.length=0,c.push(d[h]));else c.push(s),(e.measureText(c.join("").trim()).width>a||0<=l.indexOf("\n"))&&(c.pop(),o.push(c.join("")),c.length=0,c.push(s));0<c.length&&(o.push(c.join("")),c.length=0)}return o}(t,f.text.value,e.width),o=function(e){if(f.text.autoscale){var t=Math.max(0,f.height-2*f.outline.width);return 0<e?Math.floor(t/e):t}return h.applyTo(p,1),p[0].offsetHeight}(n.length),i=f.text.autoscale?o:f.text.font.size,a=[f.text.font.italic?"italic":"normal",f.text.font.bold?"bold":"normal",i+"px",f.text.font.family];t.font=a.join(" "),t.fillStyle=f.text.font.color,t.textBaseline="top";var r,l=0,s=n.length?n[0]:"";for(r=0;r<n.length;r++)n[r].length>s.length&&(s=n[r]);var c=t.measureText(s).width,u=m?c:0;if(f.text.autoscale&&"left"!==f.text.align)switch(f.text.align){case"center":t.textAlign=f.text.align,u=c/2;break;case"right":t.textAlign=f.text.align,u=m?0:c;break;default:t.textAlign="start",u=m?c:0}if(f.text.autoscale){var d=e.width/c;t.scale(d,1)}if(!f.text.autoscale)switch(f.text.align){case"center":t.textAlign=f.text.align,u=e.width/2;break;case"right":t.textAlign=f.text.align,u=e.width}for(r=0;r<n.length;r++)t.fillText(n[r],u,l,c),l+=o;return g[0].toDataURL()}n.dispose=function(){h=f=n=null,g&&g.remove&&(g.remove(),g=null),p&&p.remove&&(p.remove(),p=null),i=null},n.renderToDataURL=r,n.renderToSVGImage=function(e,t){var n=a;n&&n.width===t.width&&n.height===t.height&&n.text===o.text.value&&n.align===o.text.align||(a={width:t.width,height:t.height,text:o.text.value,align:o.text.align},e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r(t)))}}),I=(n(117),function(e,t){var n=this,o=t,i={bold:!1,italic:!1,strike:!1,underline:!1,color:"#000000",family:"Arial",size:12},a=1,r=1,l=pn.Mobile.Any()?18:8;function s(e){e&&fn.extend(i,e),c()}function c(e,t,n){(e=e||o)&&(t=void 0!==t?t:a,n||(t=d()),u(e,t))}function u(e,t){var n="none";(i.strike||i.underline)&&(n=i.strike?"line-through ":"",n+=i.underline?"underline":"");var o=i.size*(t||1);e.css({color:i.color,"font-family":i.family,"font-style":i.italic?"italic":"normal","font-weight":i.bold?"bold":"normal","font-size":o+"pt","text-decoration":n})}function d(){return a=i.size*r<l?l/i.size:r}s(e),n.dispose=function(){i=o=n=null},n.set=s,n.get=function(e){return e?i[e]:i},n.repaint=c,n.applyTo=u,n.getAdjustedZoom=d,n.getZoom=function(){return r},n.setZoom=function(e){r=e,c()}}),N=function(e,_,w,t,n){var o=this,i=e,z=t,a=_.getEventObject(),k=null,r=null,P=null,l=null,T=_.get("text"),s=T.value,D=!1,C=3,E=pn.Mobile.Any()&&!0===n?{width:200,height:200}:{width:1,height:1},c={},u={moving:h,resized:h,moved:h,rotated:h},S=function(){var e=_.get();r||(r=fn('<textarea selectable="false"/>'),fn(l.innerDom).append(r),r.css({"background-color":"transparent",border:"0px solid","overflow-x":"hidden","overflow-y":"hidden","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none",resize:"none",cursor:"inherit"}),r.attr("readonly","readonly"),r.on({focus:function(){return this.blur(),!1}}),r[0].raphaelParent=!0),r.val(T.value);var t=_.get("outline").width/2,n=Math.max(Math.ceil(e.width-2*(t+C)),1),o=Math.max(Math.ceil(e.height-2*(t+C)),1);if(P&&(P.set(T.font),P.repaint(r,1,!0)),r.css({width:n+"px",height:o+"px","max-width":n+"px","max-height":o+"px",padding:C+"px","text-align":T.align}),r.attr("title",e.tooltip),l.attr({x:Math.round(t+e.x),y:Math.round(t+e.y),width:e.width,height:e.height}),0<=e.cornerradius){var i=_.getObject();fn(i[0]).attr({rx:e.cornerradius||0,ry:e.cornerradius||0})}l.transform(M().toTransformString(!0))};function d(){var e=_.get("outline").width/2,t=_.get(),n=Math.max(Math.ceil(t.width-2*(e+C)),0),o=Math.max(Math.ceil(t.height-2*(e+C)),0);if(P&&P.set(T.font),l.attr({x:Math.round(e+C+t.x),y:Math.round(e+C+t.y),width:n,height:o,title:t.tooltip}),0<=t.cornerradius){var i=_.getObject();fn(i[0]).attr({rx:t.cornerradius||0,ry:t.cornerradius||0})}l.renderer&&l.renderer.renderToSVGImage(l[0],{width:n,height:o}),l.transform(M().toTransformString(!0))}function M(){var e=gn.matrix(),t=z.getViewerTransform(_._pageindex),n=_.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e}function h(){l&&b()}function F(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}function f(){if(null==P&&(P=new I(T.font)),l){var e=!0!==l.removed?l:null;a.unbind(e,{showeditor:g,hideeditor:m})}var t=D,n=T.autoscale;(l=n?w.atalaImage():w.html()).isHtml&&!n||(l.renderer=new O(_.get(),P,w._page),S=d),null!=k&&w._page&&(w._page.append(k),w._page.on(c)),gn.vml&&(_.getObject().node.style.overflow="hidden"),l.transform(M().toTransformString(!0)),a.bind(l,{showeditor:g,hideeditor:m}),t&&g()}function g(){w._page[0].classList.contains(_n.atala_active_thumb)||(k||function(){k=fn("<textarea/>").hide(),w._page&&(w._page.append(k),w._page.on(c)),k.on("change keydown mouseup mousemove mousedown",p),k.bind({blur:m}),_.bind({deselected:m});var e=_.getObject();if(k.css({position:"absolute","overflow-x":"auto","overflow-y":"auto","z-index":99999,border:"0px solid",padding:"0px","background-color":"transparent","text-align":T.align}),pn.Mobile.Any()){var t=_.get(),n=Q(w.canvas,w._page);k.css({left:t.x+n.left+"px",top:t.y+n.top+"px",width:t.width+"px","max-width":t.width+"px",height:t.height+"px","max-height":t.height+"px",border:e.attr("stroke")+" "+e.attr("strokewidth")+"px","background-color":e.attr("fill")})}P.setZoom(_.getZoom()),(pn.Chrome||pn.Safari)&&k.css({resize:"none"}),null!=T.value&&k.val(T.value),T.readonly&&k.prop("readonly","readonly"),P.repaint(k,_.getZoom())}(),_&&!_.get("visible")||(!k.is(":hidden")&&D||(l.hide(),k.prop("readonly",T.readonly?"readonly":""),T.value!==k.val()&&k.val(T.value),k.show(),b()),pn.Touch&&k.focus(function(){k[0].setSelectionRange(0,9999)}),k[0].focus(),s=T.value,D=!0))}function p(e){if("keydown"===e.type&&i.config.textAnnotationEditorIgnoredKeyCodes){for(var t=!1,n=i.config.textAnnotationEditorIgnoredKeyCodes.length,o=0;o<n;o++)if(i.config.textAnnotationEditorIgnoredKeyCodes[o]===e.which){t=!0;break}if(t)return}e.stopPropagation(),T.value!==k.val()&&(T.value=k.val(),_.set({text:T}))}function m(){if(k&&((k.is(":visible")||D)&&(k.hide(),l.show(),b()),0===arguments.length||1===arguments.length&&"blur"===arguments[0].type)){a.trigger("annotationtextchanged");var e=_.getClonedData(),t=fn.extend(!0,{},e);delete t.update,delete t.getPageIndex,t.text.value=s,a.trigger({type:"annotationchanged",ann:_,annobefore:t}),k[0].blur(),D=!1}}function v(){!_||_.get("visible")?D?g():l.show():l.hide(),l.backgroundColor&&l.backgroundColor(_.get("fill").color)}function A(e){e&&(w!==e||l.removed)&&(w=e,null!=r&&(r.remove(),r=null),f(),v())}function b(e){if(A(e),S(),k&&(!k.is(":hidden")||D)){var t=_.get("outline").width/2,n=_.get(),o=_.getZoom(),i=_.getBox(),a=M(),r=F(a,i.x,i.y),l=F(a,i.x+i.width,i.y+i.height),s=i.width*o,c=i.height*o,u=(r.x+l.x-s)/2,d=(r.y+l.y-c)/2,h=C*o,f=t*o,g=2*(h+f),p=Math.max(Math.ceil(s-g),E.width),m=Math.max(Math.ceil(c-g),E.height),v=Q(w.canvas,w._page),b=n.rotation+z.getPageRotation(_._pageindex),y=0!==b?"rotate("+b+"deg)":"",x={left:Math.round(u+v.left+f)+"px",top:Math.round(d+v.top+f)+"px",width:p+"px",height:m+"px","max-width":p+"px","max-height":m+"px",padding:Math.ceil(h)+"px"};fn.extend(x,Pn(y)),k.css(x)}P&&(P.set(T.font),P.setZoom(_.getZoom()),P.repaint(k,_.getZoom()))}f(),b(),_.bind(u),o.dispose=function(){k&&k.remove(),r&&r.remove(),P&&P.dispose(),l&&l.remove(),w&&w._page&&w._page.off(c),_.unbind(u),T=l=r=P=k=a=o=null},o.set=function(e){e&&fn.extend(T,e)},o.get=function(e){return e?T[e]:T},o.getFont=function(){return P},o.inEditMode=function(){return D},o.updateView=v,o.changepaper=A,o.repaint=b},V=function(){var e=this,t=fn({}),o={drawing:!1,hold:null,pinching:!1,tapped:!1,touching:!1,delta:{x:0,y:0},origin:{x:0,y:0},point:{x:0,y:0},moves:0,e:null};function i(){t.trigger.apply(t,arguments)}function a(){i({type:"interactstart"})}function r(){i({type:"interactend"})}function l(e){if(o.e=e,a(),i(e),2===e.originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(!o||!o.raphael&&!o.raphaelParent)return!1;if(null===t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches))u(),o.touching=!1,(n=e).stopPropagation(),n.preventDefault(),o.pinching=!0,i({type:"pinchstart",touches:n.originalEvent.touches});else if(1===e.originalEvent.touches.length){i("selectchange"),o.touching=!0;var t=J(e);o.point.x=t.x,o.point.y=t.y,o.hold=setTimeout(c,1500)}var n}function s(){o.tapped=!1}function c(){if(0<o.moves&&null!==o.e){var e=J(o.e);Math.abs(o.point.x-e.x)<5&&Math.abs(o.point.y-e.y)<5&&(o.moves=0)}0===o.moves&&o.touching&&o.e&&(o.touching=!1,i({type:"contextmenu",x:o.e.originalEvent.touches[0].pageX,y:o.e.originalEvent.touches[0].pageY}))}function u(){null!==o.hold&&(clearTimeout(o.hold),o.hold=null)}e.events={click:function(e){i(e)},dblclick:function(e){i(e);var t=J(e);i({type:"showeditor",x:t.x,y:t.y})},mousedown:function(e){return a(),i(e),i({type:"selectchange",shiftKey:e.shiftKey,ctrlKey:e.ctrlKey}),3===e.which&&i({type:"contextmenu",x:e.clientX,y:e.clientY,event:e}),!1},mousemove:function(e){i(e)},mouseout:function(e){i(e)},mouseover:function(e){i(e)},mouseup:function(e){i(e),r()}},pn.Features.Touch&&fn.extend(!0,e.events,{touchstart:l,touchmove:function(e){var t;i(o.e=e),o.pinching?((t=e).stopPropagation(),t.preventDefault(),i({type:"pinchmove",touches:t.originalEvent.touches})):o.moves++},touchend:function(e){var t,n;i(o.e=e),o.pinching?((n=e).stopPropagation(),n.preventDefault(),o.pinching=!1,i({type:"pinchend",touches:n.originalEvent.touches}),1===n.originalEvent.touches.length&&l(n)):o.touching&&(o.touching=!1,u(),o.moves=0,o.tapped?(t=e,o.e=t,i({type:"showeditor",x:o.point.x,y:o.point.y})):(o.tapped=!0,setTimeout(s,300))),r()}}),e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=i},q=function(e){var n=fn({}),t=e,o=null,a={target:null,mx:null,my:null,px:null,py:null,dx:null,dy:null};function r(e){a.px=a.mx,a.py=a.my,e.originalEvent?(a.mx=e.originalEvent.targetTouches[0].pageX,a.my=e.originalEvent.targetTouches[0].pageY):(a.mx=e.targetTouches[0].pageX,a.my=e.targetTouches[0].pageY),a.dx=a.mx-a.px,a.dy=a.my-a.py}function l(e){a.px=a.mx,a.py=a.my,a.mx=e.screenX,a.my=e.screenY,a.dx=a.mx-a.px,a.dy=a.my-a.py}function s(){n.trigger.apply(n,arguments)}function i(){s({type:"interactstart",target:t})}function c(){s({type:"interactend",target:t})}function u(e,t,n,o,i){(e||t)&&(pn.Features.Touch&&i.target!==a.target||(null===a.px&&d(0,0,i),i.touches?r(i):l(i),s({type:"dragmove",dx:a.dx,dy:a.dy,mx:a.mx,my:a.my,originalEvent:i})))}function d(e,t,n){a.target=n.target,i(),n.touches?r(n):l(n),s({type:"dragstart",mx:a.mx,my:a.my,originalEvent:n})}function h(e){pn.Features.Touch&&e.target!==a.target||(a.target=null,a.px=null,a.py=null,a.mx=null,a.my=null,s({type:"dragend",originalEvent:e}))}function f(){s("hoverin")}function g(){s("hoverout")}function p(e){s(e)}function m(e){s(e)}function v(e){a.px=null,a.py=null,s(e)}function b(e){s(e)}function y(e){s(e)}function x(e){s(e)}function _(e){s(e)}function w(e){s(e)}function z(e){s(e),1===e.which?s("mousedownleft"):3===e.which&&s("mousedownright")}function k(e){s(e)}function P(e){s(e)}function T(e){s(e)}function D(e){s(e),3===e.which&&s("rightclick")}function C(e){s(e)}function E(e){s(e)}function S(e){s(e)}(o=new V).bind({click:_,dblclick:w,mousedown:z,mousemove:k,mouseover:T,mouseout:P,mouseup:D,touchmove:C,touchstart:S,interactstart:i,interactend:c,pinchstart:p,pinchmove:m,pinchend:v,selectchange:b,contextmenu:y,showeditor:x,annoresized:E}),this.bind=function(e){var t=arguments;!e||e.constructor.prototype!==gn.el&&e.constructor.prototype!==gn.st||(e.drag(u,d,h),e.hover(f,g),"set"!==e.type?fn(e[0]).on(o.events):e.forEach(function(e){fn(e[0]).on(o.events)}),t=Array.prototype.slice.call(t,1)),0<t.length&&n.on.apply(n,t)},this.unbind=function(e){var t=arguments;!e||e.constructor.prototype!==gn.el&&e.constructor.prototype!==gn.st?null===e&&1<t.length&&(t=Array.prototype.slice.call(t,1)):(e.undrag(),e.unhover(f,g),"set"!==e.type?fn(e[0]).off(o.events):e.forEach(function(e){fn(e[0]).off(o.events)}),t=Array.prototype.slice.call(t,1)),n.off.apply(n,t)},this.trigger=s},U=function(e,t){var n=this,o=e,i=null,a=null,r=t;function l(){return r.trigger.apply(r,arguments),n}function s(e){return e.image()}function c(e){o.customurl?e.attr("src",o.customurl):l("serverrenderurlrequested",{data:o,complete:u})}function u(e){e.customurl=e}return n.dispose=function(){a=i=o=n=null},n.bind=function(){return r.on.apply(r,arguments),n},n.unbind=function(){return r.off.apply(r,arguments),n},n.trigger=l,n.construct=function(e){return i(e,o)},n.render=function(e){a(e,o)},i=o.constructor?o.constructor:s,a=o.renderer?o.renderer:c,n},W=function(e,t,n,o,i){var a=this,u=e,r=t,l=n,d=null,s=null,c=i,h=o,f=null,g=null,p=null,m=null,v={},b=function(){},y=function(){};function x(e){var t=J(e);if(d.paper){var n=Q(d.paper.canvas,d.paper._page);t.x-=n.left,t.y-=n.top}return t}function _(e){var t=r.getViewerTransform(h._pageindex).invert(),n=t.x(e.x,e.y);return e.y=t.y(e.x,e.y),e.x=n,e}function w(){l.trigger.apply(l,arguments)}function z(e,t,n){d=t,s=n,e.stopPropagation(),e.preventDefault();var o=_(x(e));u.visible=!0,g={x:o.x,y:o.y},u.x=Math.round(o.x),u.y=Math.round(o.y),u.width=1,u.height=1,y="path"===d.type&&"custom"!==u.type?"ellipse"!==u.type?(u.points=[{x:u.x,y:u.y}],"lines"!==u.type&&"polygon"!==u.type||u.points.push({x:u.x,y:u.y}),u.x=0,u.y=0,b=T,A):(b=D,F):(b=D,M),E(),(f={events:pn.Features.Touch?{touchend:C,touchmove:P,mouseup:C,mousemove:P}:{mouseup:C,mousemove:P},src:fn(e.srcElement||e.target),main:fn(e.currentTarget)}).src.on(f.events),f.main.on({mouseup:C})}function k(){f&&(f.src.off(f.events),f.main.off({mouseup:C}))}function P(e){e.stopPropagation(),b(e),E()}function T(e){var t=_(x(e));switch(u.type){case"line":u.points[1]=t;break;case"freehand":u.points.push(t);break;case"lines":case"polygon":u.points[u.points.length-1]=t}"path"===d.type&&("ellipse"===u.type?I():V(),d._&&0===d._.dirty&&(d._.dirty=1))}function D(e){var t=_(x(e)),n=g.x,o=g.y,i=Math.max(Math.abs(t.x-g.x),1),a=Math.max(Math.abs(t.y-g.y),1);0<u.aspectratio&&(Math.abs((t.y-g.y)/(t.x-g.x))>1/u.aspectratio?i=Math.round(a/u.aspectratio):a=Math.round(i/u.aspectratio)),t.x<g.x&&(n=g.x-i),t.y<g.y&&(o=g.y-a),u.x=n,u.y=o,u.width=i,u.height=a}function C(e){e.stopPropagation();var t=!1;if("lines"===u.type||"polygon"===u.type){if(r.activepage._index!==h._pageindex)return;if(u.points.push(_(x(e))),2!==e.button)return}else u.points?u.points&&u.points.length<2&&"custom"!==u.type&&(t=!0):(u.width<4&&u.height<4&&(u.width=100,u.height=100),E());k(),f=null,w(t?"cancelled":"drawn")}function E(){y(),d&&d.transform(S()),s&&s.repaint()}function S(){var e=gn.matrix(),t=r.getViewerTransform(h._pageindex),n=h.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e.toTransformString()}function M(){d.attr({x:u.x,y:u.y,width:u.width,height:u.height}),c&&c.render(d,u),pn.Features.VML&&d.transform(S())}function F(){I(),d._&&0===d._.dirty&&(d._.dirty=1)}function A(){V(),d._&&0===d._.dirty&&(d._.dirty=1)}a.events={drawstart:z,drawmove:P,drawend:C,dragstart:function(e){if(!r.readonly){e.originalEvent.stopPropagation(),delete(v=fn.extend(!0,{},h.getClonedData())).update,delete v.getPageIndex;var t=h.getBox();g={x:t.x,y:t.y}}},dragmove:function(e){if(!r.readonly){e.originalEvent.stopPropagation();var t=_({x:0,y:0}),n=_({x:e.dx,y:e.dy});h.translate(n.x-t.x,n.y-t.y),w("moving")}},dragend:function(e){if(!r.readonly){e.originalEvent.stopPropagation();var t,n,o=h.getBox();if(d.paper&&d.paper._page){var i=d.getBBox(),a={x:0,y:0,width:d.paper._page.width(),height:d.paper._page.height()};if(!(H(t=a,(n=i).x,n.y)||H(t,n.x+n.width,n.y)||H(t,n.x,n.y+n.height)||H(t,n.x+n.width,n.y+n.height)))return void h.translate(g.x-o.x,g.y-o.y)}g.x===o.x&&g.y===o.y||(w("moved"),w({type:"annotationchanged",ann:h,annobefore:v}))}},update:function(){E()},viewchanged:function(e){d=e.annview,s=e.textview,y="path"===d.type&&"custom"!==u.type?"ellipse"!==u.type?(b=T,A):(b=D,F):(b=D,M)},pinchstart:function(e){if(!u.points&&!r.readonly){var t=_({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=_({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=h.getBox();m={start:Y(t.x,t.y,n.x,n.y),rect:o}}},pinchmove:function(e){if(m){var t=_({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=_({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=Y(t.x,t.y,n.x,n.y,m.start),i=o.x-m.start.x,a=o.y-m.start.y,r=m.rect.x-o.dx,l=m.rect.y-o.dy,s=m.rect.width+i,c=m.rect.height+a;u.points?h.transform(r,l,s,c):(u.x=r,u.y=l,u.width=s,u.height=c),d.paper&&d.paper._page&&d.paper._page._grips&&d.paper._page._grips.repaint(),E()}},pinchend:function(){w("resized"),w("annoresized"),m=null}},a.drawStart=z,a.unbindEvents=k,a.repaint=E,a.getTransform=S;var O=.5522847498307936;function I(){var e=u.width/2,t=u.height/2,n=O*e,o=O*t,i=u.x+u.width/2,a=u.y+u.height/2,r=["M",i,a-t,"C",i+n,a-t,i+e,a-o,i+e,a,"C",i+e,a+o,i+n,a+t,i,a+t,"C",i-n,a+t,i-e,a+o,i-e,a,"C",i-e,a-o,i-n,a-t,i,a-t,"Z"];d.attr({path:r})}function V(){if(u.points&&0!==u.points.length){for(var e=["M",u.points[0].x,u.points[0].y],t=1;t<u.points.length;t++)e=e.concat(["L",u.points[t].x,u.points[t].y]);"polygon"===u.type&&e.push("Z"),d.attr({path:e}),
/**
   * Work around outlined by this post:
   * http://stackoverflow.com/questions/15693178/svg-line-markers-not-updating-when-line-moves-in-ie10
   */
function(){if(pn.Explorer){var e=parseInt(pn.Version,10);10<=e&&e<12&&d.node&&d.node.parentNode&&d.node.parentNode.insertBefore(d.node,d.node)}}()}}a.commitTransform=function(){var e,t,n;fn.extend(u,(e=p,t=r.getZoom(h._pageindex),{x:(n=e.split()).dx/t,y:n.dy/t,width:n.scalex/t,height:n.scaley/t})),d.transform(S()),E(),L=null},a.transformUI=function(e,t,n,o){p=gn.matrix(n,0,0,o,e,t),L||(L=function(e,t){var n;if(e.points&&1<e.points.length){var o=h.getBox();(n=gn.matrix(1,0,0,1,0,0)).scale(1/o.width,1/o.height,0,0),n.translate(-o.x,-o.y)}else(n=gn.matrix(t,0,0,t,0,0)).translate(e.x,e.y),n.scale(e.width,e.height,0,0);return n}(u,1)),p.add(L.a,L.b,L.c,L.d,L.e,L.f),d.transform(p.toTransformString()),s&&s.repaint()};var L=null;function H(e,t,n){return t>=e.x&&t<=e.x+e.width&&n>=e.y&&n<=e.y+e.height}},ze=function(e,t,n){var i=e,a=n,r=this,o=new q(r),l=null,s=null,c=null,u=null,d=null,h=null,f=null,g=null,p=t.multiview?t:{
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
transform:gn.matrix(),
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
       * @property {boolean} [readonly=false] - Indicates whether annotation is readonly. If set to true annotation couldn't be modified through UI and context menu couldn't be enable for it.
       * (There is a separate readonly property (annotation.text.readonly) for text area in text annotation.)
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
       * @property {boolean} [verifyFontFamily=false] - If true, the availability of the font family will be checked at saving. If the font family is not found, the font will be replaced by Microsoft Sans Serif.
       *  
       * @property {boolean} [autoscale] - Indicates whether text should be scaled to the size of the bounding box for the Stamp and Text annotations.
       *
       * This could be useful to make Stamp annotation looks similar to its representation burned into image or opened in different Atalasoft viewers.
       * 
       */
/**
       * @property {AnnotationTextConfig} [text] - Annotation text configuration.
       */
text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12},readonly:!1,verifyFontFamily:!1,replies:null,parent:null,autoscale:!1},
/**
       * @property {number} [tabindex=0] - Represents the tab index of the annotation which specifies the tab order. Annotation with lower index gets focus first.
       *
       */
tabindex:0,
/**
       * @property {Object} [extra] - Additional data that could be stored along with annotation. Application specific properties is expected to be inserted into this object.
       * Those data will be transacted to extra properties of the server-side `AnnotationData` object.
       */
extra:{}},m={highlight:{fill:{color:"yellow",opacity:.5},outline:{opacity:0}},image:{fill:{color:null},outline:{opacity:0}},rectangle:{fill:{opacity:0}},stamp:{cornerradius:0,text:{autoscale:!0,verifyFontFamily:!1}},line:{fill:{color:null},outline:{opacity:1,startcap:{width:"medium",height:"medium",style:"none"},endcap:{width:"medium",height:"medium",style:"none"}}},lines:{fill:{color:null},outline:{opacity:1}},freehand:{fill:{color:null},outline:{opacity:1}},ellipse:{},fillrect:{},polygon:{},text:{text:{verifyFontFamily:!1}}},v={};function b(){o.bind.apply(o,arguments)}function y(){return o.trigger.apply(o,arguments),r}function x(){var e=gn.matrix(),t=S();e.rotate(p.rotation,t.x,t.y),p.transform=e}function _(){var e,t,n=S(),o=(e=k(),t=n,{x:e.x(t.x,t.y),y:e.y(t.x,t.y)});o.x===n.x&&o.y===n.y||M(o.x-n.x,o.y-n.y)}function w(e,t){if(e){var n=p.rotation;e.hasOwnProperty("rotation")&&(e.rotation=(e.rotation+360)%360),z(e,t),n!==p.rotation&&function(e,t){var n=(e-t+360)%360,o=gn.matrix(),i=k();o.add(i.a,i.b,i.c,i.d,i.e,i.f);var a=S();o.rotate(n,a.x+a.width/2,a.y+a.height/2);var r=o.x(a.x,a.y),l=o.y(a.x,a.y);M(r-a.x,l-a.y),x()}(p.rotation,n)}}function z(e,t){t?fn.extend(!0,p,e):fn.extend(p,e)}function k(){return p.transform}function P(){f={update:function(e){p.selected!==f.selected&&D();var t=!1,n=fn.extend(!0,{},p);delete n.update,delete n.getPageIndex,delete n.transform,c&&c.inEditMode()?y({type:"annotationtextchangefailed",anno:r}):(e||(t=function e(t,n,o){if(t!==n)return!!t;for(var i in t)if(t.hasOwnProperty(i)){if("extra"===i)continue;if(n.hasOwnProperty(i)){if("points"===i){if(t.points===n.points)return!t.points;if(t.points.length!==n.points.length)return!0;for(var a=0;a<t.points.length;a++)if(e(t.points[a],n.points[a],[]))return!0}if(-1<o.indexOf(i)){if(e(t[i],n[i],R[i]))return!0}else if(t[i]!==n[i])return!0}}return!1}(f,p,["fill","outline","text"]),w(f,!0)),p.update&&delete p.update,p.getPageIndex&&delete p.getPageIndex,H(),L(),null!==l&&(!p.readonly&&p.selectable?(v.isBound("selectable")||(o.bind(v.selectable),v.bound("selectable")),p.readonly||!p.movable||v.isBound("movable")?!p.readonly&&p.movable||!v.isBound("movable")||(o.unbind(v.movable),v.unbound("movable")):(o.bind(v.movable),v.bound("movable")),pn.Features.Touch&&(p.readonly||!p.resizable||v.isBound("resizable")?!p.readonly&&p.resizable||!v.isBound("resizable")||(o.unbind(v.resizable),v.unbound("resizable")):(o.bind(v.resizable),v.bound("resizable")))):!p.readonly&&p.selectable||!v.isBound("selectable")||(o.unbind(v.selectable),v.unbound("selectable"),o.unbind(v.movable),v.unbound("movable"),o.unbind(v.resizable),v.unbound("resizable"))),t&&y({type:"annotationchanged",ann:r,annobefore:n}))},changeTabIndex:function(e){p.tabindex=e},getPageIndex:function(){return r._pageindex}},fn.extend(!0,f,p)}function T(){return JSON.stringify(p)}function D(e){if(p){var t={ann:r,append:!0,page:null,pageindex:r._pageindex,type:""};e&&(t.append=e.shiftKey||e.ctrlKey||void 0!==e.append&&e.append,t.page=e.page,t.pageindex=e.pageindex),t.append||!p.selected?(p.selected=!p.selected,t.type=p.selected?"selected":"deselected"):p.selected&&!t.append&&(t.type="reselected"),""!==t.type&&y(t)}}function C(e){var t=null;switch(p.type){case"image":(t=e.image()).attr("src",p.src);break;case"highlight":case"rectangle":case"fillrect":case"text":case"stamp":t=e.rect();break;case"ellipse":case"line":case"lines":case"freehand":case"polygon":t=e.path();break;case"custom":t=h.construct(e)}return e._annos&&e._annos.push(t),t}function E(){null!==l&&(s?o.unbind(s,l):o.unbind(l));var e={};!p.readonly&&p.selectable&&(fn.extend(e,v.selectable),v.bound("selectable"),a.readonly||p.readonly||!p.movable||(fn.extend(e,v.movable),v.bound("movable")),!a.readonly&&!p.readonly&&p.resizable&&pn.Features.Touch&&(fn.extend(e,v.resizable),v.bound("resizable"))),l=e,o.bind(s,e)}
/**
   * Returns bounding box of the annotation in document space.
   */
function S(){!g&&p.points&&(g=we(p.points));var e=p.points?g:p;return{x:e.x,y:e.y,width:e.width,height:e.height}}function M(e,t){if(p.points){for(var n=0;n<p.points.length;n++)p.points[n].x+=e,p.points[n].y+=t;g&&(g.x+=e,g.y+=t)}"custom"!==p.type&&p.points||(p.x+=e,p.y+=t),x(),I()}t.multiview||(F=t.type,fn.extend(!0,p,m[F])),z(t,!0),x(),"custom"===p.type&&(h=new U(p,o)),b({repaint:(d=new W(p,a,o,r,h)).events.update,viewchanged:d.events.viewchanged,drawn:E,resized:_}),p.points&&(0<p.x||0<p.y)&&(M(p.x,p.y),p.x=0,p.y=0,p.width=1,p.height=1),v={selectable:{selectchange:D},movable:{dragstart:d.events.dragstart,dragmove:d.events.dragmove,dragend:d.events.dragend},resizable:{pinchstart:d.events.pinchstart,pinchmove:d.events.pinchmove,pinchend:d.events.pinchend},boundEvents:{resizable:!1,movable:!1,selectable:!1},isBound:function(e){return this.boundEvents[e]},bound:function(e){this.boundEvents[e]=!0},unbound:function(e){this.boundEvents[e]=!1}},r.dispose=function(){p.selected&&D(),o&&o.unbind(),s&&s.remove(),c&&c.dispose(),u&&u.remove(),d&&d.unbindEvents(),p=u=c=s=o=r=a=d=null},r.bind=b,r.unbind=function(){o.unbind.apply(o,arguments)},r.trigger=y,r.set=w,r.get=function(e){return e?p[e]:p},r.getTransform=k,r.setTabIndex=function(e){p.tabindex=e},r.notifyChanges=function(e){var t=fn.extend(!0,{},r.getClonedData());delete t.update,delete t.getPageIndex,fn.extend(!0,t,e),y({type:"annotationchanged",anno:r,annobefore:t})},r.getClonedData=function(){return f?fn.extend(!0,f,p):P(),delete f.transform,f},r.getObject=function(){return s},r.getEventObject=function(){return o},r.getZoom=function(){return a.getZoom(r._pageindex)},r.stringify=T,r.getJSON=T,r.toggleSelected=D,r.isCloneSource=function(e){return f&&f===e},r.getBox=S,r.translate=M,r.transform=function(e,t,n,o){var i=S(),a=n/i.width,r=o/i.height;if(p.points&&0<p.points.length&&"custom"!==p.type){for(var l=0;l<p.points.length;l++)p.points[l].x=e+(p.points[l].x-i.x)*a,p.points[l].y=t+(p.points[l].y-i.y)*r;g.x=e,g.y=t,g.width*=a,g.height*=r}else p.x=e,p.y=t,p.width*=a,p.height*=r;y({type:"annoresizing"}),I()},r.transformUI=function(){d.transformUI.apply(d,arguments)};var F;var A=(r.commitTransform=function(){d.commitTransform()},!1),O=pn.Explorer?20:5;function I(){A||(A=!0,setTimeout(V,O))}function V(){A=!1,L()}function L(e){e&&(u&&(u=null),s=C(e),h&&h.render(s,p),H(),E(),"text"!==p.type&&"stamp"!==p.type||null!==c||(c=new N(i,r,e,a)),c&&c.changepaper(e),y({type:"viewchanged",annview:s,textview:c})),y("repaint")}function H(){if(s){var e={fill:p.fill.color,"fill-opacity":p.fill.opacity};fn.extend(e,(t={stroke:p.outline.color,"stroke-width":p.outline.width*a.getZoom(r._pageindex),"stroke-opacity":p.outline.opacity},s._linewidth=p.outline.width,gn.fn.addArrow||(p.outline.startcap&&(t["arrow-start"]=B(p.outline.startcap)),p.outline.endcap&&(t["arrow-end"]=B(p.outline.endcap))),t)),s.attr(e),gn.fn.addArrow&&(p.outline.startcap&&gn.fn.addArrow(s,B(p.outline.startcap),!1),p.outline.endcap&&gn.fn.addArrow(s,B(p.outline.endcap),!0)),p.visible?s.show():s.hide()}var t;c&&(c.set(p.text),c.updateView()),s&&s.node&&""!==p.src&&"image"===p.type&&(void 0!==s.node.src&&s.node.src?s.node.src=p.src:s.node.href.baseVal=p.src),j()}function j(){p.tooltip&&"text"!==p.type&&"stamp"!==p.type&&s.attr("title",p.tooltip)}function B(e){return[e.style,"-",e.width,"-",e.height].join("")}r.startDraw=function(e,t,n,o){w(n),(s=C(t)).transform(d.getTransform()),("text"===p.type||"stamp"===p.type)&&(c=new N(i,r,t,a,o)),j(),H(),d.drawStart(e,s,c)},r.repaint=L,r.updateView=H;var R={fill:[],outline:["startcap","endcap"],text:["font"],font:[],startcap:[],endcap:[]};return r},ke=(n(118),function(e,t,n){var o=this,a=e,i=t,r=n,u=[];function l(e,t,n,o,i){var a,r,l=[].concat(t),s=null;(s=d(n))===n&&null!==s&&(n=s._index),o||f(s||n,t);for(var c=0;c<l.length;c++)a=l[c],!e&&i&&a===i||(0<=(r=fn.inArray(a,u[n]))?e||u[n][r]!==a||u[n].splice(r,1):e&&(u[n]?u[n].push(a):u[n]=[a]),s&&(e?s._grips.push(a):null!==s._grips&&s._grips.remove(a)),a.get("selected")!==e&&a.toggleSelected({append:!0,pageindex:n,page:s}))}function s(e,t,n){var o="object"==typeof t?t._index:t;i[o]&&l(e,i[o],t,!0,n)}function c(e){for(var t=[],n=0;n<e.length;n++)if(e[n]){t[n]=[];for(var o=0;o<e[n].length;o++)t[n][o]=e[n][o].getClonedData()}return t}function d(t){var e=null;if("object"==typeof t)e=t;else{t=Math.max(t,0);var n=fn.grep(r,function(e){return e._index===t});1<=n.length&&(e=n[0])}return e}function h(e){s(!0,e)}function f(e,t){s(!1,e,t);var n=d(e);n&&n._grips&&n._grips.repaint()}o.dispose=function(){r=i=o=null,u.length=0},o.select=function(e,t,n){var o=e.get("selected");if(l(!0,e,t,n),o){var i=Object.assign({},e.get());a.trigger({type:"annotationselected",annotation:i})}},o.deselect=function(e,t,n){l(!1,e,t,n);var o=Object.assign({},e.get());a.trigger({type:"annotationdeselected",annotation:o})},o.setAnnos=function(e){i=e},o.setPages=function(e){r=e},o.resolvePage=d,o.deselectAll=function(){for(var e=0;e<i.length;e++)f(e)},o.deselectPage=f,o.getAnnotations=
/**
   * Gets an array of all annotation data objects.
   * @returns array of arrays containing annotation data objects for each page of the document.
   */
function(){return c(i)},o.getSelected=function(){return c(u)},o.selectAll=function(){for(var e=0;e<i.length;e++)h(e)},o.selectPage=h});function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Mn=function(){function e(){}return e.SetLocalizationStrings=function(e){this._strings=e},e.LocalizationAvailable=function(){return!(void 0===this._strings||void 0===this._strings.annotations)},e.GetAnnotationLocalizedString=function(e){return void 0===this._strings.annotations||void 0===this._strings.annotations[e]?(void 0===this._englishStrings.annotations[e]&&console.error("Missed english string for %s",e),this._englishStrings.annotations[e]):this._strings.annotations[e]},e}();L(Mn,"_strings",{}),L(Mn,"_englishStrings",kn);var Pe=function(t){var e=this,d=fn("<div />"),h=fn("<div />"),f=null,o=null,n={style:["None:none","Arrow:open","Filled Arrow:block","Filled Ellipse:oval","Filled Diamond:diamond"],width:["medium","wide","narrow"],height:["medium","long","short"]},i={fill:{color:!0,opacity:!0},rotation:!0,outline:{color:!0,opacity:!0,width:!0,startcap:n,endcap:n},text:{font:{bold:!0,italic:!0,color:!0,family:!0,size:!0}}};function a(){d.dialog("close")}function r(){l(),a()}function l(){f.set(o,!0),f.updateView(),f.repaint(),h.empty(),g(f.get(),"",i),v()}function s(){f&&function(){var e={};for(var t in i)if(i.hasOwnProperty(t)){var n={};n[t]=f.get(t),fn.extend(!0,e,n)}return JSON.stringify(e)!==JSON.stringify(o)}()&&f.notifyChanges(o),a()}function g(o,e,t){function n(e){var t=this.getAttribute("dataField");if(this.value&&"boolean"!=typeof this.value)if("number"==typeof o[t]){var n=parseFloat(this.value);isNaN(n)||"rotation"!==t||n===o[t]?"opacity"===t&&0<=n&&n<=1||"opacity"!==t&&0<=this.value?o[t]=n:this.value=o[t]:(f.set({rotation:n}),f.repaint())}else o[t]=this.value;else e&&"boolean"==typeof this.value?o[t]=0<=e.target.id.indexOf("true"):this.value=o[t];f.updateView(),f.repaint(),v()}for(var i in o)if(o.hasOwnProperty(i))if("object"==typeof o[i]){var a="text"!==i?m(i):"";t[i]&&("text"!==i||"text"===i&&"text"===f.get("type"))&&g(o[i],e+a,t[i])}else if("type"===i){var r=Mn.GetAnnotationLocalizedString(o[i].replace("fillrect","rectangle")+"DialogTitle");d.dialog("option","title",r)}else if(t[i]){var l=fn("<div/>"),s=p(i,o[i],n,t[i]);s.attr("dataField",i),s.title="",l.addClass("ui-helper-clearfix atala-ui-dialog-clearfix"),l.css({overflow:"hidden"}),s.appendTo(l);var c=Mn.GetAnnotationLocalizedString("label"+(e||e)+m(i));l.append((u=c,fn("<span/>").text(u))),l.appendTo(h)}var u}function p(a,e,t,n){var o=typeof e,r=null;if(fn.isArray(n))r=fn("<select/>").attr({}),fn.each(n,function(e,t){var n=t,o=t,i=t.split(":");1<i.length&&(o=i[0],n=i[1]),o=Mn.GetAnnotationLocalizedString("value"+m(a)+m(n)),r.append(fn("<option/>",{value:n,text:o}))}),r.change(t),r.val(e);else if("string"===o||"number"===o){r=fn("<input/>").attr({type:"text"});var i=e;"color"===a&&(i=function(e){if(!Mn.LocalizationAvailable())return e;var t=document.createElement("canvas");t.height=1,t.width=1;var n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,1,1);var o=n.getImageData(0,0,1,1).data;return"#"+[0,1,2].map(function(e){return("0"+o[e].toString(16)).slice(-2)}).join("")}(e)),r.val(i),r.change(t),r.focus(function(){this.select(),this._focused=!0}),r.mouseup(function(e){this._focused&&(e.preventDefault(),this._focused=!1)})}else if("boolean"===o){var l="bool"+a;c(r=fn("<form/>").attr({id:l,datafield:a}),l+!0,l,Mn.GetAnnotationLocalizedString("radioButtonTrue"),e),c(r,l+!1,l,Mn.GetAnnotationLocalizedString("radioButtonFalse"),!e),r.controlgroup(),r.change(t),r[0].value=e,r.find(".ui-state-hover").each(function(e,t){fn(t).removeClass("ui-state-hover")})}else r=fn("<div>"+e+"</div>");return r.css({float:"right"}),r}function c(e,t,n,o,i){e.append(fn("<input/>").attr({type:"radio",id:t,name:n,checked:i})),e.append(fn("<label/>").attr({for:t}).text(o).height("1.5em"))}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}function v(){var e=f.getObject();e&&e.paper&&e.paper._page&&e.paper._page._grips.repaint()}return e.show=function(e){for(var t in f=e,h.empty(),o={},i)if(i.hasOwnProperty(t)){var n={};n[t]=f.get(t),fn.extend(!0,o,n)}g(f.get(),"",i),d.dialog("open")},e.hide=a,e.isVisible=function(){return d.dialog("isOpen")},e.cancel=r,e.reset=l,e.okhide=s,function(){h.appendTo(d);var e={};e[Mn.GetAnnotationLocalizedString("dialogButtonOk")]=s,e[Mn.GetAnnotationLocalizedString("dialogButtonReset")]=l,e[Mn.GetAnnotationLocalizedString("dialogButtonCancel")]=r,d.dialog({appendTo:t,minWidth:320,classes:{"ui-dialog":"atala-ui-dialog"},resizable:!0,autoOpen:!1,buttons:e,closeText:a,open:function(){var e=this;!function(e){for(var t=0,n=0;n<e.length;n++){var o=fn(e[n]).height();t<o&&(t=o)}for(var i=0;i<e.length;i++)fn(e[i]).height(t)}(d.parent().find(".ui-dialog-buttonset button")),d.dialog({width:Math.max(320,function(){var e='<span class="atala_title_span">'+d.parent().find(".ui-dialog-title").text()+"AAAAAAAAA</span>";fn("body").append(e);var t=fn("body").find("span:last").width();return fn("body").find("span:last").remove(),t+25}(),function(){for(var e=d.parent().find(".ui-dialog-buttonset button"),t=0,n=0;n<e.length;n++)t+=fn(e[n]).outerWidth(!0);var o=1.5*parseInt(fn(e[0]).css("font-size"));return t+o}()),height:"auto"}),setTimeout(function(){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,e),d.find("input")[0].focus()}.bind(this),100)},beforeClose:function(e){(e.keyCode===fn.ui.keyCode.ESCAPE||e.hasOwnProperty("currentTarget")&&e.currentTarget.classList.contains("ui-dialog-titlebar-close"))&&(pn.Explorer&&d.parent().find(".ui-dialog-buttonset button")[1].focus(),l())}}),d.keypress(function(e){e.keyCode===fn.ui.keyCode.ENTER&&(e.preventDefault(),d.parent().find(".ui-dialog-buttonset button")[0].focus(),s())})}(),e},Te=function(l,e){var u,d=8,s=25,a=-22.5,c={e:0,ne:315,n:270,nw:225,w:180,sw:135,s:90,se:45},r={},h={},f=e,g=l._paper.set(),p=l._paper.set(),m=[],v=null,b={},y=null,x={x:0,y:0,width:1,height:1,x2:1,y2:1},o=[],_={},t={dragstart:function(){},dragmove:function(){g.hide()},moved:function(){k(),g.show();for(var e=0;e<m.length;++e){var t=m[e].get();(t.hasOwnProperty("rotatable")&&!t.rotatable||t.hasOwnProperty("readonly")&&!t.readonly)&&v.hide()}}};function w(e,t){return e.attr({fill:"#FFFFE1",cursor:(t||"ne")+"-resize"}),e.grip=!0,e.rect=e.getBBox(),e.hide(),e.center=function(e,t,n,o){var i=d/(n=n||1),a=d/n,r=i/2,l=Math.round(i/2)+.5,s=Math.round(a/2)+.5;pn.Explorer&&(s-=.5);var c=Math.round(e)-l,u=Math.round(t)-s;this.ellipse?(c+=r,this.attr({cx:c,cy:u,r:r,"stroke-width":1})):this.attr({x:c,y:u,width:i,height:a,"stroke-width":1}),this.node.setAttribute("stroke-width",1),this.transform(o)},t&&(e.d={key:t,n:~t.indexOf("n"),s:~t.indexOf("s"),w:~t.indexOf("w"),e:~t.indexOf("e")},e.mousedown(function(e){return function(e,t){if(e.stopPropagation(),!(1<m.length)){for(var n=0;n<m.length;n++){if(!m[n].get("resizable"))return void(o=[]);o[n]=fn.extend(!0,{},m[n].getClonedData()),delete o[n].update,delete o[n].getPageIndex}return fn.extend(b,x),y=c[t.key]===c.n||c[t.key]===c.s?1:0,u=c[t.key]===c.w||c[t.key]===c.e?1:0,(t.n||1===u)&&(b.y=b.y2),t.w&&(b.x=b.x2),fn(l._paper.canvas).on({mouseup:F,mousemove:M}),!1}}(e,this.d)})),e}function n(e){return-1!==fn.inArray(e,m)}function i(){for(var e=0;e<m.length;e++)z(m[e]);m.length=0,p.clear(),g.hide()}function z(e){e.getEventObject().unbind(t)}function k(){0<p.length?T():0<m.length?i():g.hide()}function P(e){for(var t in c)c.hasOwnProperty(t)&&A(g[c[t]],e)}function T(){if(0<p.length){var e=1===p.length?m[0].getBox():p.getBBox();x.x=e.x,x.y=e.y,x.width=e.width,x.height=e.height,x.x2=e.x+e.width,x.y2=e.y+e.height,x.xmid=e.x+e.width/2,x.ymid=e.y+e.height/2,D()}}function D(){var e=1===p.length,t=gn.matrix(),n=1,o="",i=f.getViewerTransform(l._index);if(t.add(i.a,i.b,i.c,i.d,i.e,i.f),e){var a=m[0].getTransform();a&&t.add(a.a,a.b,a.c,a.d,a.e,a.f),n=f.getZoom(l._index),o=t.toTransformString(!0)}g[c.nw].center(x.x,x.y,n,o),g[c.ne].center(x.x2,x.y,n,o),g[c.sw].center(x.x,x.y2,n,o),g[c.se].center(x.x2,x.y2,n,o),g[c.n].center(x.xmid,x.y,n,o),g[c.w].center(x.x,x.ymid,n,o),g[c.e].center(x.x2,x.ymid,n,o),g[c.s].center(x.xmid,x.y2,n,o);var r=m[0].get();r.hasOwnProperty("rotatable")&&(!r.rotatable||r.hasOwnProperty("readonly")&&r.readonly)?v.hide():(v.show(),v.center(x.xmid,x.y-s/n,n,o)),P((1===m.length?m[0].get().rotation:0)+f.getPageRotation(l._index))}function C(e){var t=l.offset(),n=Q(l._paper.canvas,l);return{x:e.pageX-(t.left+n.left),y:e.pageY-(t.top+n.top)}}function E(e){e.stopPropagation();var t,n,o,i=(t=C(e),n=f.getViewerTransform(l._index).invert(),o=n.x(t.x,t.y),t.y=n.y(t.x,t.y),t.x=o,t),a=180*Math.atan2(i.y-b.ymid,i.x-b.xmid)/Math.PI+90;return 1===m.length&&(m[0].set({rotation:a}),m[0].repaint()),l._grips.repaint(),!1}function S(e){return e.stopPropagation(),fn(l._paper.canvas).off({mouseup:S,mousemove:E}),1===m.length&&(m[0].getEventObject().trigger("rotated"),m[0].getEventObject().trigger({type:"annotationchanged",ann:m[0],annobefore:_})),!1}function M(e){if(e.stopPropagation(),1===p.length){var t=function(e){if(0<p.length){var t="set"===p[0].type?p[0][0]:p[0],n=t.matrix.invert(),o={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};return o}return e}(C(e)),n=Math.abs(t.x-b.x),o=Math.abs(t.y-b.y),i=t.x<b.x?b.x-n:b.x,a=t.y<b.y?b.y-o:b.y;r=i,l=a,s=n,c=o,0===y&&(x.x=r,x.width=Math.max(s,1),x.x2=r+x.width,x.xmid=r+x.width/2),0===u&&(x.y=l,x.height=Math.max(c,1),x.y2=l+x.height,x.ymid=l+x.height/2),D(),function(){for(var e=0;e<m.length;e++)m[e].transform(x.x,x.y,x.width,x.height)}()}var r,l,s,c;return!1}function F(e){e.stopPropagation();for(var t=0;t<m.length;t++)m[t].getEventObject().trigger("resized"),m[t].getEventObject().trigger("annoresized"),m[t].getEventObject().trigger({type:"annotationchanged",ann:m[t],annobefore:o[t]}),m[t].repaint();return 0<p.length&&T(),fn(l._paper.canvas).off({mouseup:F,mousemove:M}),!1}function A(e,t){if(e&&e.d&&e.d.key){var n=gn.matrix();n.rotate(t);var o={x:n.x(r[e.d.key].x,r[e.d.key].y),y:n.y(r[e.d.key].x,r[e.d.key].y)};for(var i in h)if(h.hasOwnProperty(i)&&O(o,h[i].start,h[i].end)){e.attr({cursor:(h[i].dir||"ne")+"-resize"});break}}}function O(e,t,n){function o(e,t){return 0<-e.x*t.y+e.y*t.x}return!o(t,e)&&o(n,e)}!function(){var e,t;for(var n in c)if(c.hasOwnProperty(n)){var o=l._paper.rect(0,0,d,d),i=w(o,n);g.push(i),g[c[n]]=i,(e=gn.matrix()).rotate(c[n]),r[n]={x:e.x(1,0),y:e.y(1,0)}}(t=w(l._paper.circle(0,0,d/2)).attr({fill:"#00FF40",cursor:"pointer"})).ellipse=!0,g.push(t),t.mousedown(function(e){return function(e){if(e.stopPropagation(),1===m.length&&1===p.length){for(var t=0;t<m.length;t++){var n=m[t].get();if(n.hasOwnProperty("readonly")&&n.readonly||n.hasOwnProperty("rotatable")&&!n.rotatable)return}fn.extend(b,x);var o=m[0].getTransform(),i=o.x(b.xmid,b.ymid);b.ymid=o.y(b.xmid,b.ymid),b.xmid=i,delete(_=fn.extend(!0,{},m[0].getClonedData())).update,delete _.getPageIndex,fn(l._paper.canvas).on({mouseup:S,mousemove:E})}}(e)}),v=t,function(){var o=gn.matrix();o.rotate(a,0,0);for(var e=function(e,t){var n={dir:t,start:{x:o.x(r[e].x,r[e].y),y:o.y(r[e].x,r[e].y)},end:{x:o.x(r[t].x,r[t].y),y:o.y(r[t].x,r[t].y)}};return n},t=["e","ne","n","nw","w","sw","s","se"],n=0;n<t.length-1;++n)0===n&&(h[t[n]]=e(t[t.length-1],t[n])),h[t[n+1]]=e(t[n],t[n+1])}()}(),this.push=function(e){n(e)||(m.push(e),p.push(e.getObject()),!0===e.get("selectable")&&e.getEventObject().bind(t),k(),g.toFront(),g.show())},this.contains=n,this.remove=function(e){for(var t=0;t<m.length;t++)m[t]===e&&m.splice(t,1);p.exclude(e.getObject()),z(e)},this.clear=i,this.repaint=k,this.updateCursor=P};function De(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Annotations API.
 * @class
 * @inner
 * @name AnnotationController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var Fn=function e(t,n,o){var i=this,a=this,l=t,b=n,r=new ke(l),s={
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
/** Triggers when an annotation has been changed.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationchanged
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
     * @param {AnnotationData} event.annobefore - Annotation object before the changes were applied.  
     */
annotationchanged:null,
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
/** Triggers when the user opens annotation properties window.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationspropertieswindowopened
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     */
annotationspropertieswindowopened:null,
/** Triggers when an annotation is selected.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationselected
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     */
annotationselected:null,
/** Triggers when an annotation is deselected.
     * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdeselected
     * @type {AnnotationCallback}
     * @param {Object} event - Event data object.
     * @param {AnnotationData} event.annotation - Annotation object related to the event.
     */
annotationdeselected:null,
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
drawAnnotation:function(e,t,n){b._controllers.mouseTool.setTool(mn.None,mn.None),oe(e,!0,function(){b._controllers.mouseTool.setTool(mn.Pan,mn.None),"function"==typeof t&&t()},function(){b._controllers.mouseTool.setTool(mn.Pan,mn.None),"function"==typeof n&&n()})},
/**
       * Gets an array of annotation data objects located on the given zero based page index.
       * @param {number} index - The page index the annotations are located on.
       * @returns {AnnotationData[]} Annotation data objects on the given page.
       * @instance
       * @function
       */
getFromPage:G,
/**
       * Creates an annotation on the desired page with the given annotation data.
       * @param {AnnotationData} annotationConfig - Key value pairs representing annotation data.
       * @param {number} index - The index of the page the annotation should be created on.
       * @returns {AnnotationData} - Annotation data.
       * @instance
       * @function
       */
createOnPage:W,
/**
       * Deletes an annotation on the given page by it's index on the page.
       * @param {number} pageIndex - Page index the annotation is located on.
       * @param {number} annIndex - Index of the annotation on the page.
       * @instance
       * @function
       */
deleteFromPage:Z,
/**
       * Shows the editor dialog for text annotations. Ignores other types of annotations.
       * @param {AnnotationData} annotation - the annotation object to show editor for.
       *
       * Annotation object should be retrieved using corresponding API. If it's constructed by the application, annotation won't be matched.
       * @instance
       * @function
       */
showEditor:function(e){return ee(e,!0)},
/**
       * Hides the text annotation editor. Applies only to text annotations and ignores other types of annotations.
       * @param {AnnotationData} annotation - The annotation object to hide editor for.
       * @instance
       * @function
       */
hideEditor:function(e){return ee(e,!1)},
/**
       * Sets the default annotation properties for initially created annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.defaults}.
       * @param {AnnotationData[]} aConfig - Default configurations for different types of the annotations.
       * @returns {Atalasoft.Controls.WebDocumentViewer}
       * @instance
       * @function
       */
setDefaults:J,
/**
       * Sets the default annotation properties for image annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.images}
       * @param {AnnotationData[]} aConfig - Default configurations image annotations.
       * @returns {Atalasoft.Controls.WebDocumentViewer}
       * @instance
       * @function
       */
setImages:K,
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
moveLayer:function(e,t,n){t=C(e,t),"function"==typeof n&&n(),l.trigger({type:w.layermoved,srcindex:e,destindex:t}),l.trigger(w.layerschanged)},
/**
       * Scrolls viewer to the specified annotation.
       * @param {AnnotationData} anno - the annotation object to scroll to.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function 
       */
scrollTo:function(e,t){var n=this,o=function(){De(this,n),"function"==typeof t&&t()}.bind(this),i=e.getPageIndex(),a=Y(e,i);if(a){var r=a.getZoom(),l=_e,s={x:0,y:0};if(e.type===l.line||e.type===l.lines||e.type===l.freehand){var c=e.points.map(function(e){return De(this,n),e.x}.bind(this)),u=e.points.map(function(e){return De(this,n),e.y}.bind(this));s.x=(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2,s.y=(Math.min.apply(Math,u)+Math.max.apply(Math,u))/2}else s.x=e.x+e.width/2,s.y=e.y+e.height/2;s.x*=r,s.y*=r,b.showPagePoint(i,s,yn.Center,!0,o)}else o()},
/**
       * Indicates whether annotations properties window is shown.
       * @returns {boolean}
       * @instance
       * @function
       */
isAnnotationsPropertiesWindowShown:function(){return De(this,i),null!=p&&p.isVisible()}.bind(this),
/**
       * Shows annotation properties window for selected annotation.
       * @instance
       * @function
       */
showAnnotationsPropertiesWindow:function(){y.activeanno&&N()},
/**
       * Sets the tab index of the annotation.
       * @param {AnnotationData} anno - the annotation object to change.
       * @param {number} value - new annotation tab index.
       * @instance
       * @function
       */
changeTabIndex:function(e,t){e.changeTabIndex(t)}},
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
createAnnotationOnPage:W,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#getFromPage|annotations.getFromPage} instead.
     */
getAnnotationsFromPage:G,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#deleteFromPage|annotations.deleteFromPage} instead.
     */
deleteAnnotationOnPageAtIndex:Z,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setDefaults|annotations.setDefaults} instead.
     */
setAnnotationDefaults:J,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setImages|annotations.setImages} instead.
     */
setImages:K,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setStamps|annotations.setStamps} instead.
     */
setStamps:Q};if(e.__exposedApi=s.annotations,!t)return null;var c=n._config,u=n._pages,d=!1,h=null,f=null,g=null,p=null,m=null,y={annos:[],activepage:null,activeanno:null,readonly:!!o,zoom:l.getZoom(),getZoom:b.getPageScale,getViewerTransform:b.getViewerTransform,getPageRotation:b.getPageRotation},v={},x=!1,_=!1,w={click:"annotationclicked",dblclick:"annotationdoubleclicked",touchstart:"annotationtouchstart",interactend:"annotationtouchend",touchmove:"annotationtouchmove",pinchmove:"annotationpinchresize",rightclick:"annotationrightclicked",mousedown:"annotationmousedown",mousedownleft:"annotationmousedownleft",mousedownright:"annotationmousedownright",mousemove:"annotationmousemove",mouseout:"annotationmouseout",mouseup:"annotationmouseup",mouseover:"annotationmouseover",annocreate:"annotationcreated",annoload:"annotationloaded",moved:"annotationmoved",rotated:"annotationrotated",annoresized:"annotationresized",repaint:"annotationrepainted",layerinserted:"layerinserted",layerremoved:"layerremoved",layermoved:"layermoved",layerschanged:"layerschanged",annotationchanged:"annotationchanged",annotationtextchanged:"annotationtextchanged",annotationspropertieswindowopened:"annotationspropertieswindowopened",annotationselected:"annotationselected",annotationdeselected:"annotationdeselected"};function z(){d=!0,y.readonly||(f=j(g),p=new Pe(n._config.parent),null!=c.annotations.defaults&&J(c.annotations.defaults),null!=c.annotations.stamps&&Q(c.annotations.stamps),null!=c.annotations.images&&K(c.annotations.images),null!=c.annotations.custom&&$(c.annotations.custom))}
/**
   * [Internal] Disposes memory intensive objects
   * @returns undefined
   */function k(e){m.translate(e.dx,e.dy)}function P(e){y.zoom=e.zoom}function T(e,t,n){if(e||"number"!=typeof t||(t=D(t)),t=t||[],null==n?n=y.annos.length:n<0&&(n=0),n>y.annos.length){var o=y.annos.length;y.annos[n]=t;for(var i=o;i<y.annos.length;++i)y.annos[i]||(y.annos[i]=[])}else y.annos.splice(n,0,t);return n}function D(e){return e<y.annos.length?y.annos.splice(e,1)[0]:null}function C(e,t){return T(null,D(e),t)}function E(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}function S(e){M(e.index,e.page)}function M(e,t){if(e<y.annos.length&&(F(t),y.annos[e]&&y.annos[e].length))for(var n,o=0;o<y.annos[e].length;o++)(n=y.annos[e][o])._pageindex=e,n.repaint(t._paper),n.get("selected")&&r.select(n,e,!0)}function F(e){e._grips.clear(),e._paper._annos.remove(),e._paper._annos.clear(),e._paper.forEach(function(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}),e._paper._trash.remove(),e._paper._trash.clear(),ue()}function A(e){y.activepage=e}function O(e){e.page._paper&&(F(e.page),e.page.append(e.page._paper.canvas))}function I(e){V(e.page)}function V(e){if(e&&0<=e._index&&y.annos[e._index]){for(var t=0;t<y.annos[e._index].length;t++)y.annos[e._index][t].repaint();e&&e._grips.repaint()}}function L(e){f&&(f.visible&&H(),f.remove());var t=fn.extend(!0,{},g);if(l.trigger("contextmenu",[y.activeanno.getClonedData(),t]),fn.isEmptyObject(t))f=null;else{for(var n in t)t.hasOwnProperty(n)&&(t[n]=B(t[n]));f=j(t)}!function(e){if(f){var t=Mn.GetAnnotationLocalizedString("menuPropertiesButton"),n=Mn.GetAnnotationLocalizedString("menuDeleteButton");if(y.activeanno.get("readonly"))f.children(":contains("+t+")").off("click").children("a, div").css("color","#cdc9c9"),f.children(":contains("+n+")").off("click").children("a, div").css("color","#cdc9c9");else{var o=f.children(":contains("+t+")");void 0!==o.data("events")&&"click"in o.data("events")||o.on("click",N),o.children("a").css("color","#000000")}0===f.closest().length&&h.prepend(f);var i={x:e.x-6,y:e.y-6};f.css({left:i.x,top:i.y}),f.show(),f.visible=!0}}(e)}function H(){f&&(f.hide(),f.visible=!1)}function j(e){var t=b.createMenu(e);return t.css({position:"fixed","z-index":99999}),t.mouseleave(H),t.visible=!1,t}function B(e){return function(){return H(),e.call(this,y.activeanno.getClonedData())}}function R(){var e=y.activepage?y.activepage._index:0;if(y.annos[e]){var t=fn.inArray(y.activeanno,y.annos[e]);-1!==t&&(y.activeanno=null,X(t,e))}H()}function N(){l.trigger({type:"annotationspropertieswindowopened",annotation:y.activeanno}),H(),p.show(y.activeanno)}
/**
   * Clears the annotations and related data from all pages
   */
function q(){if(0<y.annos.length){if(y.annos.length=0,u)for(var e=0;e<u.length;e++)u[e]._grips.clear(),u[e]._paper.forEach(E),u[e]._paper._trash.remove(),u[e]._paper._trash.clear(),u[e]._paper._annos.remove(),u[e]._paper._annos.clear();l.trigger({type:"annotationscleared"})}}
/**
   * Creates an annotation on the desired page with the given annotation data.
   * @param aConfig: object, Key value pairs representing annotation data.
   * @param pgNum: number, The zero based index of the page the annotation should be created on.
   * @param callback: function, Function to be called when the operation has completed.
   * @returns object: Atalasoft.Annotations.Annotation.
   */function U(e,t,n){var o={};e.multiview?o=e:(e&&e.type&&v[e.type]&&fn.extend(!0,o,v[e.type]),fn.extend(!0,o,e));var i=new ze(l,o,y);return i._pageindex=t,void 0===y.annos[t]&&(y.annos[t]=[]),y.annos[t].push(i),b.redrawPageFromIndex(t,!0),"function"==typeof n&&n(i),he(i),i}function W(e,t,n){var o=U(e,t,n).getClonedData();return l.trigger({type:w.annocreate,anno:o,annotation:o,page:t}),o}function Z(e,t){X(t,e)}
/**
   * Deletes an annotation on the given z-index and zero based page index.
   * @param annIndex: number, Zero based z-index of the annotation.
   * @param pgNum: number, Zero based page index the annotation is located on.
   */function X(e,t){var n=y.annos[t].splice(e,1)[0];y.activepage&&y.activepage._paper&&y.activepage._paper._annos.exclude(n.getObject()),y.activeanno===n&&(y.activeanno=null),n.dispose(),y.activepage&&y.activepage._grips&&y.activepage._grips.repaint(),l.trigger({type:"annotationdeleted",page:t,index:e})}function G(e){var n=this,t=[];if(0===y.annos.length||void 0===y.annos[e])return t;for(var o=0;o<y.annos[e].length;o++)t[o]=y.annos[e][o].getClonedData();return t.sort(function(e,t){return De(this,n),e.tabindex-t.tabindex}.bind(this))}function Y(e,t){if(isFinite(t)){if(t<y.annos.length)for(var n=0;n<y.annos[t].length;++n)if(y.annos[t][n].isCloneSource(e))return y.annos[t][n]}else for(var o=0;o<y.annos.length;++o){var i=Y(e,o);if(i)return i}return null}function J(e){c.annotations.defaults=e;for(var t=0;t<e.length;t++)"string"==typeof e[t].type&&(v[e[t].type]=e[t]);return l}function Q(e){c.annotations.stamps=e;for(var t=0;t<e.length;t++)xe(e[t]);if(d){var n={type:"button",id:b._id+"_toolbar_Button_Stamp",icon:"stamp",tooltip:"Draw Stamp",text:""},o=b.createDropDownButton(n);n.onclick=b.drawAnnotation,b.createDropDownMenu(o,n,e)}return l}function K(e){c.annotations.images=e;for(var t=0;t<e.length;t++)e[t].type="image";if(d){var n={type:"button",id:b._id+"_toolbar_Button_Image",icon:"image",tooltip:"Draw Image",text:""},o=b.createDropDownButton(n);n.onclick=b.drawAnnotation,b.createDropDownMenu(o,n,e)}return l}
/**
   * Sets the default annotation properties for initially created custom annotations.  This accepts the same input as the main config.
   * @param cConfig: array, An array of JSON objects representing custom annotation types.
   * @returns object: Atalasoft.Controls.WebDocumentViewer
   */function $(e){c.annotations.custom=e;for(var t=0;t<e.length;t++)e[t].type="custom";if(d){var n={type:"button",id:b._id+"_toolbar_Button_Custom",icon:"image",tooltip:"Draw Custom",text:""},o=b.createDropDownButton(n);n.onclick=b.drawAnnotation,b.createDropDownMenu(o,n,e)}return l}function ee(e,t){if("text"===e.type&&e){var n=e.getPageIndex(),o=Y(e,n);t?e.visible&&(b.isPageInView(n)?te(o,n):l.showPage(e.getPageIndex(),function(){te(o,n)})):o.trigger("hideeditor")}}function te(e,t){e&&(!1!==e.get("selectable")&&r.select(e,t,!1),e.trigger("showeditor"))}function ne(e){A(e),r.deselectPage(e),H()}function oe(e,t,n,o){if(x)return null;var i=fn.extend(!0,{},e);return e&&e.type&&v[e.type]&&(i=fn.extend(!0,i,v[e.type]),t&&(i=fn.extend(!0,i,e))),i.rotation=0,y.activeanno&&null===y.activeanno.getObject()&&ce(),function(){if(!_){h.on("mousedown",le),pn.Features.Touch&&h.on("touchstart",le);for(var e=0;e<u.length;e++)u[e]._draw.toFront();_=!0}}(),y.activeanno=new ze(l,i,y),y.activeanno.bind({drawn:se,cancelled:ce}),"function"==typeof n&&(ie=n),"function"==typeof o&&(ae=o),y.activeanno}r.setAnnos(y.annos),r.setPages(u),function(){var T,D,C,u=gn.svg&&!pn.Features.foreignObject;function a(e,t,n,o,i,a){var r=u||a?"image":"foreignObject",l=d(this,this,"http://www.w3.org/2000/svg",r,t,n,o,i),s=null;if(!u){s=document.createElementNS("http://www.w3.org/1999/xhtml","div");var c="http://www.w3.org/2000/xmlns/";s.setAttributeNS(c,"xmlns",c),s.innerHTML=e||"",l.node.appendChild(s),l.isHtml=!0}return l.innerDom=s,l}function d(e,t,n,o,i,a,r,l,s){var c=null===n?document.createElement(o):document.createElementNS(n,o);t.canvas&&t.canvas.appendChild&&t.canvas.appendChild(c);var u=new e.constructor.el.constructor(c,e);for(var d in u.attrs={x:i,y:a,width:r,height:l,r:s||0,rx:s||0,ry:s||0,fill:"none",stroke:"#000"},u.skew={},"g"===(u.type=o)&&(u.canvas=u.node),u.attrs)u.attrs.hasOwnProperty(d)&&void 0!==u.attrs[d]&&c.setAttribute(d,u.attrs[d]+"");return u}gn.vml?gn.fn.html=function(e,t,n,o,i){var a=d(this,this,null,"div",t,n,o,i),r=a.node;function l(e){var t=a.matrix.split();if(e.hasOwnProperty("x")&&void 0!==e.x&&e.hasOwnProperty("y")&&void 0!==e.y){var n={x:e.x*t.scalex,y:e.y*t.scaley};if(0!==t.rotate){var o=we([{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x+e.width,y:e.y+e.height},{x:e.x,y:e.y+e.height}],a.matrix);n=o}r.style.left=Math.round(n.x)+"px",r.style.top=Math.round(n.y)+"px"}}return r.innerHTML=e||"",(a.innerDom=r).style.position="absolute",a.__tsfm=a.transform,a.transform=function(){this.__tsfm.apply(this,arguments),this.repaint(),l(this.attrs)},a.backgroundColor=function(e){r.style.backgroundColor=e,this.repaint()},a.repaint=function(){r.style.filter='progid:DXImageTransform.Microsoft.Chroma(color="'+r.style.backgroundColor+'"); '+this.matrix.toFilter()},a.__attr=a.attr,a.attr=function(e){this.__attr.apply(this,arguments),e&&(l(e),e.hasOwnProperty("width")&&(r.style.width=e.width+"px"),e.hasOwnProperty("height")&&(r.style.height=e.height+"px"))},a.isHtml=!0,a}:(gn.fn.html=function(e,t,n,o,i){return a.call(this,e,t,n,o,i)},T={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},D={},C=function e(t,n){if(n)for(var o in"string"==typeof t&&(t=e(t)),n)n.hasOwnProperty(o)&&("xlink:"===o.substring(0,6)?t.setAttributeNS("http://www.w3.org/1999/xlink",o.substring(6),String(n[o])):t.setAttribute(o,String(n[o])));else(t=gn._g.doc.createElementNS("http://www.w3.org/2000/svg",t)).style&&(t.style.webkitTapHighlightColor="rgba(0,0,0,0)");return t},gn.fn.addArrow=function(e,t,n){if("path"===e.type){for(var o,i,a,r,l,s=String(t).toLowerCase().split("-"),c=e.paper,u=n?"end":"start",d=e.node,h=e.attrs,f=h["stroke-width"],g=s.length,p="classic",m=3,v=3,b=5;g--;)switch(s[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":p=s[g];break;case"wide":v=5;break;case"narrow":v=2;break;case"long":m=5;break;case"short":m=2}if(l="open"===p?(m+=2,v+=2,b+=2,a=1,r=n?4:1,{fill:"none",stroke:h.stroke}):(r=a=m/2,{fill:h.stroke,stroke:"none"}),e._.WDVarrows?n?(e._.WDVarrows.endPath&&D[e._.WDVarrows.endPath]--,e._.WDVarrows.endMarker&&D[e._.WDVarrows.endMarker]--):(e._.WDVarrows.startPath&&D[e._.WDVarrows.startPath]--,e._.WDVarrows.startMarker&&D[e._.WDVarrows.startMarker]--):e._.WDVarrows={},"none"!==p){var y=Math.random().toString(36).substring(7),x="dave-marker-"+p,_="dave-marker-"+u+p+m+v+y;gn._g.doc.getElementById(x)?D[x]++:(c.defs.appendChild(C(C("path"),{"stroke-linecap":"round",d:T[p],id:x})),D[x]=1);var w,z=gn._g.doc.getElementById(_);z?(D[_]++,w=z.getElementsByTagName("use")[0]):(z=C(C("marker"),{id:_,markerHeight:v,markerWidth:m,orient:"auto",refX:r,refY:v/2}),w=C(C("use"),{"xlink:href":"#"+x,transform:(n?"rotate(180 "+m/2+" "+v/2+") ":"")+"scale("+m/b+","+v/b+")","stroke-width":(1/((m/b+v/b)/2)).toFixed(4)}),z.appendChild(w),c.defs.appendChild(z),D[_]=1),C(w,l);var k=a*("diamond"!==p&&"oval"!==p);i=(i=n?(o=e._.WDVarrows.startdx*f||0,gn.getTotalLength(h.path)-k*f):(o=k*f,gn.getTotalLength(h.path)-(e._.WDVarrows.enddx*f||0)))<0?0:i,(l={})["marker-"+u]="url(#"+_+")",(i||o)&&(l.d=gn.getSubpath(h.path,o,i)),C(d,l),e._.WDVarrows[u+"Path"]=x,e._.WDVarrows[u+"Marker"]=_,e._.WDVarrows[u+"dx"]=k,e._.WDVarrows[u+"Type"]=p,e._.WDVarrows[u+"String"]=t}else i=n?(o=e._.WDVarrows.startdx*f||0,gn.getTotalLength(h.path)-o):(o=0,gn.getTotalLength(h.path)-(e._.WDVarrows.enddx*f||0)),e._.WDVarrows[u+"Path"]&&C(d,{d:gn.getSubpath(h.path,o,i)}),delete e._.WDVarrows[u+"Path"],delete e._.WDVarrows[u+"Marker"],delete e._.WDVarrows[u+"dx"],delete e._.WDVarrows[u+"Type"],delete e._.WDVarrows[u+"String"];for(l in D)if(D.hasOwnProperty(l)&&!D[l]){var P=gn._g.doc.getElementById(l);P&&P.parentNode.removeChild(P)}}}),gn.fn.atalaImage=function(e,t,n,o,i){return a.call(this,e,t,n,o,i,!0)}}(),m=gn.matrix(1,0,0,1,0,0),l.bind({scroll:k,pagerecycled:O,pageshown:S,zoomchanged:P,pagerotated:I}),(g={})[Mn.GetAnnotationLocalizedString("menuDeleteButton")]=R,g[Mn.GetAnnotationLocalizedString("menuPropertiesButton")]=N,b._state.initialized?z():l.bind({initialized:z}),"Atalasoft.Controls.WebDocumentViewer"===l.typeOf&&fn.extend(l,s),a.__exposedApi=s.annotations,a.addDrawingSurface=function(n){var e=this;if(n instanceof fn){n._paper=gn(n[0]),n._paper.canvas.style.position="absolute",n._paper.canvas.style.zIndex="2",0<c.pageborderwidth&&(n._paper.canvas.style.left=c.pageborderwidth+"px",n._paper.canvas.style.top=c.pageborderwidth+"px"),n._paper._annos=n._paper.set(),n._paper._trash=n._paper.set(),(n._paper._page=n)._matrix=gn.matrix(1,0,0,1,0,0),n._matrix.translate(-n.offset().left,-n.offset().top),n._grips=new Te(n,y);var t=function(){De(this,e),ne(n)}.bind(this);return n.on("mousedown",t),pn.Features.Touch&&n.on("touchstart",t),n.on({pageresize:function(e){var t;e.page=n,(t=e).page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,V(t.page)},pagezoom:function(e){var t;e.page=n,t=e,isFinite(t.width)&&isFinite(t.height)&&t.width&&t.height&&(y.zoom=t.zoom,t.page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,t.page._paper.forEach(function(e){if(e&&e.transform&&!e.grip){void 0!==e._linewidth&&e.attr("stroke-width",e._linewidth*y.zoom);var t=e.attr("clip-rect");"object"==typeof t&&"number"==typeof t.length&&e.attr("clip-rect",t)}}),V(t.page))}}),!0}return!1},a.removeDrawingSurface=function(e){return e instanceof fn&&(e._paper&&(e._paper._annos=null,e._paper._page=null,e._paper=null),e._matrix=null,!(e._grips=null))},a.insertLayer=T,a.removeLayer=D,a.moveLayer=C,a.showLayer=M,a.clear=q,a.createAnnotation=U,a.deleteAnnoOnPage=Z,a.drawAnnotation=oe,a.getAnnosFromPage=G,a.setStamps=Q,a.setAnnotationDefaults=J,a.setImages=K,a.setCustom=$,a.dispose=function(){p=g=f=h=u=c=b=l=a=null,y.annos.length=0,y.activepage=null,y.activeanno=null,y.zoom=null,r.dispose(),r=null},
/**
   * [Internal] Gets debug info object
   * @returns debug info object if available, otherwise null
   */
a.__getDebugInfo=function(){var e={};return fn.extend(!0,e,{data:y,defaults:v,drawing:x,drawready:_,matrix:m,menu:f,menuconfig:g,pages:u,props:p,viewport:h}),e}
/**
   * [Internal] Links the annotation data between two controls
   * @param linker internal object of type __LVlinker
   * @returns undefined
   */,a.__linkAnnotations=function(e){e&&(e._annos?fn.isArray(e._annos)&&(y.annos=e._annos):e._annos=y.annos)}
/**
   * [Internal] Clears all selection of annotations
   */,a.__clearAllSelection=ne,a.setViewPort=function(e){e&&(e instanceof fn||(e=fn(e)),h=e)};var ie=function(){},ae=function(){};function re(){if(_){h.off("mousedown",le),pn.Features.Touch&&h.off("touchstart",le);for(var e=0;e<u.length;e++)u[e]._draw.reset();_=!1}}function le(e){x=!0,h.off("mousedown",le),pn.Features.Touch&&h.off("touchstart",le);var t=y.activeanno.getClonedData();l.trigger({type:"annotationdrawstart",annotation:t,ann:t}),y.activeanno._pageindex=y.activepage._index,y.activeanno.startDraw(e,y.activepage._paper,{},l.config.textannomobilezoom)}function se(){de(),function(e){var t=y.activepage,n=t?t._index:0;y.annos[n]?y.annos[n].push(e):y.annos[n]=[e],y.activeanno.unbind({drawn:se,cancelled:ce}),he(y.activeanno),r.select(y.activeanno,t,!1),ie({annotation:e}),ie=function(){};var o=e.getClonedData();l.trigger({type:w.annocreate,anno:o,annotation:o,page:n})}(y.activeanno)}function ce(){y.activeanno.dispose(),y.activeanno=null,x&&de(!0)}function ue(){_&&(x?ce():(y.activeanno&&(y.activeanno.dispose(),y.activeanno=null),re()),ae({annotation:null}),ae=function(){})}function de(e){x=!1,re();var t=e?null:y.activeanno.getClonedData();l.trigger({type:"annotationdrawend",annotation:t,ann:t,cancelled:!!e})}function he(n){function e(e){var t=n.getClonedData();l.trigger({type:w[e.type],anno:t,annotation:t})}n.bind({dragstart:function(){var e=n.getClonedData();l.trigger({type:"annotationdragstart",ann:e,annotation:e})},dragend:function(){var e=n.getClonedData();l.trigger({type:"annotationdragend",annotation:e,ann:e})},interactstart:function(){y.activepage&&y.activepage._paper===n.getObject().paper||A(n.getObject().paper._page),y.activeanno=n},annotationchanged:function(e){var t=n.getClonedData();l.trigger({type:"annotationchanged",annotation:t,anno:t,annobefore:e.annobefore})},selected:fe,deselected:fe,reselected:fe,contextmenu:L,serverrenderurlrequested:ge,moved:e,rotated:e,annoresized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mouseup:e,mousemove:e,mouseover:e,repaint:e,annotationtextchanged:e,annotationtextchangefailed:function(){l.trigger({type:"throwerror",name:"updateAnnotation",msg:"Failed to change annotation text, because it is already edited by UI."})}})}function fe(e){var t=e.page||0<=e.pageindex?e.pageindex:y.activepage,n=r.resolvePage(t);n&&(t=n),"selected"===e.type||"reselected"===e.type?(y.activeanno=e.ann,r.select(e.ann,t,e.append),p&&p.isVisible()&&p.show(e.ann)):(r.deselect(e.ann,t,e.append),p&&p.isVisible()&&p.cancel()),n&&n._grips&&n._grips.repaint()}function ge(e){var t=e.complete,n=pe(e.data);"function"==typeof t&&t.call(n)}function pe(e){return me(e),JSON.stringify(e)}function me(e){for(var t in e)if("color"===t&&null!=e[t]){var n=gn.getRGB(e[t]);n.error&&(n.hex="#000000"),e[t]=n.hex}else"points"!==t&&"object"==typeof e[t]&&me(e[t])}function ve(e,t,n,o,i){var a={type:"annodata",serverurl:e,query:"?atalaanndata=",method:"GET",data:{atala_annurl:t,atala_docurl:n=n||l.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{layers:[],offset:o||0,length:i,error:void 0}};for(var r in a.data)a.data.hasOwnProperty(r)&&null===a.data[r]&&(a.data[r]=void 0);return a}function be(n,o,i){function e(e){if(void 0!==n.info.docIndex&&(e.offset=n.info.docIndex),!e.layers&&e.error&&o)for(var t=e.offset;t<e.offset+n.info.length;t++)y.annos[t]=[];ye(e),"function"==typeof i&&i.call(void 0,e.error,e)}"function"==typeof o&&(i=o,o=!1),o||q(),b.makeHandlerRequest(n,e,e)}function ye(e){if(e){var t={type:"annotationsloaded",customData:e.customData};if(e.layers)for(var n=0;n<e.layers.length;n++){e.offset=e.offset||0;var o=e.offset+n;y.annos[o]&&0<y.annos[o].length?y.annos[o].length=0:y.annos[o]=[];var i=e.layers[n];if(i&&(i._index=isFinite(i._index)&&0<=i._index?i._index:o,i.visible=void 0===i.visible||i.visible,i.items))for(var a=0;a<i.items.length;a++){i.items[a].visible=i.items[a].visible&&i.visible,y.annos[o][a]=new ze(l,i.items[a],y),y.annos[o][a]._pageindex=i._index;var r=y.annos[o][a].getClonedData();l.trigger({type:w.annoload,anno:r,annotation:r,customData:e.customData}),he(y.annos[o][a])}}else e.error&&(t.error=e.error);t.offset=e.offset,t.length=e.layers?e.layers.length:0,l.trigger(t)}}function xe(e){var t;return e.type="stamp",e.text&&((t=e.text)&&t.font&&t.font.size&&(t.font.size=parseFloat(t.font.size)),e.text.readonly=!0),e}a.stringifyChanges=function(){var e=[];for(var t in y.annos)if(y.annos.hasOwnProperty(t)){e[t]={items:[]};var n=0,o=b.getPageScale(t),i=gn.matrix();if(b._config.persistrotation){n=b.getPageRotation(t),i=b.getViewerTransform(t);var a=1/o;i.scale(a,a,0,0),i.e*=a,i.f*=a}for(var r in y.annos[t])if(y.annos[t].hasOwnProperty(r)){var l=fn.extend(!0,{},y.annos[t][r].get());if(l.rotation||n){var s=y.annos[t][r].getBox(),c=s.width/2,u=s.height/2,d=gn.matrix(),h=y.annos[t][r].getTransform();d.add(i.a,i.b,i.c,i.d,i.e,i.f),d.add(h.a,h.b,h.c,h.d,h.e,h.f);var f={x:d.x(s.x+c,s.y+u),y:d.y(s.x+c,s.y+u)},g=f.x-c-s.x,p=f.y-u-s.y;if(l.points)for(var m=0;m<l.points.length;m++)if("line"===l.type){var v=d.x(l.points[m].x,l.points[m].y);l.points[m].y=d.y(l.points[m].x,l.points[m].y),l.points[m].x=v}else l.points[m].x+=g,l.points[m].y+=p;else"custom"!==l.type&&l.points||(l.x+=g,l.y+=p);l.rotation="line"!==l.type?(l.rotation+n)%360:0}me(e[t].items[r]=l)}}return JSON.stringify(e)},a.stringifyAnnotationData=pe,a.createHandlerRequest=ve,a.makeHandlerRequest=be,a.loadAnnotationsUrl=function(e,t,n,o,i,a,r){var l=Array.prototype.slice.call(arguments);"function"!=typeof(r=l.pop())&&l.push(r),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),a=l.shift();var s=ve(e,t,n,o,i);void 0!==a&&(s.info.docIndex=a),be(s,0<=o&&1<=i,r)},a.loadAnnotations=ye};n(120),n(121),n(124);function H(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}var j,B,G=function(e,t,n){var o,f=t,u=this,i=fn({}),a=null,g=null,r=null,p=n,b={type:"",backgroundcolor:"",color:null,fieldname:"",hidden:!1,isfieldrequired:!1,items:null,locked:!1,norotate:!1,noview:!1,nozoom:!1,readonly:!1,required:!1,x:0,y:0,width:0,height:0,rotation:0,border:{color:"#000",style:"none",radius:{vertical:0,horizontal:0},width:0},text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12,paddingtop:0,linespacing:0},ismultiline:!1,ispassword:!1,isrichtext:!1,scrollable:!1,maxlength:0,maximumfieldheight:-1,preserveoverflow:!1}},l={button:{},checkbox:{checked:!1,group:null},radio:{checked:!1,group:null},textbox:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},signature:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},choice:{multiline:!1}},s={};function c(){return i.trigger.apply(i,arguments),u}function d(e,t){e&&(t?fn.extend(!0,b,e):fn.extend(b,e))}function h(){r={update:function(){fn.extend(!0,b,r),b.update&&delete b.update,D(),T(),null!==a&&(!b.readonly&&b.selectable?(s.isBound("selectable")||(i.on(s.selectable),s.bound("selectable")),b.readonly||!b.movable||s.isBound("movable")?!b.readonly&&b.movable||!s.isBound("movable")||(i.off(s.movable),s.unbound("movable")):(i.on(s.movable),s.bound("movable")),pn.Features.Touch&&(b.readonly||!b.resizable||s.isBound("resizable")?!b.readonly&&b.resizable||!s.isBound("resizable")||(i.off(s.resizable),s.unbound("resizable")):(i.on(s.resizable),s.bound("resizable")))):!b.readonly&&b.selectable||!s.isBound("selectable")||(i.off(s.selectable),s.unbound("selectable"),i.off(s.movable),s.unbound("movable"),i.off(s.resizable),s.unbound("resizable")))}},fn.extend(!0,r,b)}function m(){return JSON.stringify(b)}function v(e,t){return t-(e.value.slice(0,t).split("\r\n").length-1)}function y(e,t){if("number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd)e.selectionStart=t.start,e.selectionEnd=t.end;else{var n=e.createTextRange(),o=v(e,t.start);n.collapse(!0),t.start===t.end?n.move("character",o):(n.moveEnd("character",v(e,t.end)),n.moveStart("character",o)),n.select()}}function x(e){var t=null,v=!1;switch(b.type){case"button":(t=fn("<button/>")).click(function(){return c({type:"buttonclicked",name:b.fieldname}),!1});break;case"textbox":case"signature":t=b.text.multiline?fn("<textarea/>").css("overflow-y",b.text.scrollable?"auto":"hidden").css("resize","none"):fn('<input type="text" />'),b.text.value=t.val(b.text.value).val(),t.on("paste",function(){return v=!0}),t.on("input",function(e){-1===b.text.maximumfieldheight&&(b.text.maximumfieldheight=fn(this).get(0).scrollHeight);var t,n,o,i,a,r,l,s,c=0<b.text.maxlength&&fn(this).val().length>b.text.maxlength,u=!b.text.scrollable&&fn(this).get(0).scrollHeight>b.text.maximumfieldheight;if(fn(this).val().length>b.text.value.length&&(c||u)){var d=(t=e.target,s=l=0,"number"==typeof t.selectionStart&&"number"==typeof t.selectionEnd?(l=t.selectionStart,s=t.selectionEnd):(o=document.selection.createRange())&&o.parentElement()===t&&(a=t.value.length,n=t.value.replace(/\r\n/g,"\n"),(i=t.createTextRange()).moveToBookmark(o.getBookmark()),(r=t.createTextRange()).collapse(!1),-1<i.compareEndPoints("StartToEnd",r)?l=s=a:(l=-i.moveStart("character",-a),l+=n.slice(0,l).split("\n").length-1,-1<i.compareEndPoints("EndToEnd",r)?s=a:(s=-i.moveEnd("character",-a),s+=n.slice(0,s).split("\n").length-1))),{start:l,end:s});if(v&&0<b.text.maxlength){var h=fn(this).val();if(h.length===d.start)fn(this).val(h.substr(0,b.text.maxlength));else{var f=h.length-b.text.value.length,g=b.text.maxlength-b.text.value.length,p=h.substr(0,d.start-f+g),m=b.text.value.substr(d.start-f);fn(this).val(p+m),y(e.target,{start:p.length,end:p.length})}}else fn(this).val(b.text.value),y(e.target,{start:d.start-1,end:d.start-1})}!b.text.preserveoverflow&&fn(this).get(0).scrollHeight<b.text.maximumfieldheight&&(b.text.maximumfieldheight=fn(this).get(0).scrollHeight),b.text.value=fn(this).val(),v=!1});break;case"checkbox":(t=fn('<input type="checkbox" />').prop({name:b.group,checked:b.checked})).val(b.value);break;case"radio":(t=fn('<input type="radio" />').prop({name:b.group,checked:b.checked})).val(b.value);break;case"choice":if((t=fn("<select></select>")).text(b.value),t.attr({multiple:b.multiple,size:b.multiline&&b.items?b.items.length:0}),b.items)for(var n in t.items=[],b.items)if(b.items.hasOwnProperty(n)){var o=fn("<option></option>",{selected:b.items[n].checked,value:b.items[n].value,text:b.items[n].text});t.append(o),t.items[n]=o}if(b.multiline&&b.items){var i=function(){fn(this).trigger("change")};t.on({mouseup:i,touchend:i})}break;case"generic":t=fn("<div></div>")}if(t){if("textbox"===b.type||"signature"===b.type){var a=b.text.font.paddingtop,r=0<b.text.font.linespacing?b.text.font.linespacing+"px":"1.14pt";t.css({resize:"none",position:"absolute",paddingTop:b.multiline?a:0,paddingBottom:b.multiline?"2pt":0,lineHeight:r,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"})}else t.css({resize:"none",position:"absolute",padding:0,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});t.on({click:S,mousedown:S,mouseup:S,change:w,uncheck:z,focusin:k,focusout:P,touchstart:S,touchend:S})}return e._fields&&e._fields.push(t),e.append(t),t}function _(){var e=b.fieldname.lastIndexOf(".");return 0<=e?b.fieldname.substr(0,e):null}function w(e){var t=_(),n=[];switch(b.type){case"button":break;case"textbox":case"signature":if(b.text.value=this.value,f.multiviewFields.hasOwnProperty(t)){var o=f.multiviewFields[t];for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];a!==u&&(a.get().text.value=this.value,a.updateView())}}break;case"checkbox":b.checked=this.checked,b.group&&b.checked&&(fn('input[name="'+b.group+'"]').trigger("uncheck"),b.checked=!0,this.checked=!0);break;case"radio":b.group&&fn('input[name="'+b.group+'"]').trigger("uncheck"),b.checked=this.checked;break;case"choice":if(void 0!==e.target.selectedOptions)n=e.target.selectedOptions;else if(e.target.multiple)for(var r=0;r<e.target.options.length;r++)e.target.options[r].selected&&n.push(e.target.options[r]);else 0<=e.target.selectedIndex&&n.push(e.target.options[e.target.selectedIndex]);for(var l in b.items)if(b.items.hasOwnProperty(l)){var s=b.items[l];for(var c in s.checked=!1,n)n.hasOwnProperty(c)&&n[c].value===s.value&&(s.checked=!0)}}}function z(e){"checkbox"===e.target.type&&(e.target.checked=!1),b.checked=!1}function k(){C(!0),c({type:"fieldfocusin",field:u})}function P(){C(!1),c({type:"fieldfocusout",field:u})}function T(e){e&&"object"==typeof e&&((g=x(e)).zoom=E,D(),c({type:"viewchanged",fieldview:g})),c("repaint")}function D(){if(g){if(b.hidden||b.noview)return void g.hide();g.show();var e=fn.extend({},(t=f.getViewerTransform(p),n=H(t,b.x,b.y),o=H(t,b.x+b.width,b.y+b.height),i=f.getZoom(p),a=b.width*i,r=b.height*i,l={x:(n.x+o.x-a)/2,y:(n.y+o.y-r)/2},s=f.getPageRotation(p)+b.rotation,c="rotate("+s+"deg)",u={left:Math.round(l.x)+"px",top:Math.round(l.y)+"px",width:a+"px",height:r+"px","max-width":a+"px","max-height":r+"px"},d=Pn(0!==s?c:""),fn.extend(u,d),("textbox"===b.type||"signature"===b.type)&&(u.cursor=s%180==0?"text":"vertical-text"),u.visibility="visible",u),(h=b.border&&"underline"===b.border.style,{backgroundColor:b.backgroundcolor,color:b.color||b.text.font.color,borderStyle:b.border&&b.border.style&&!h?b.border.style:"none",borderBottomStyle:h?"solid":"inherit",borderColor:b.border?b.border.color:null,fontFamily:b.text.font.family,fontStyle:b.text.font.italic?"italic":b.text.font.oblique?"oblique":"normal",fontWeight:b.text.font.bold?"bold":"",textAlign:b.text.align}));g.css(e),f.highlighted?(g.addClass("atala-ui-form-highlight"),b.required?g.addClass("atala-ui-form-required"):g.removeClass("atala-ui-form-required")):g.removeClass("atala-ui-form-highlight"),b.readonly?g.attr("readonly","readonly"):g.removeAttr("readonly"),"textbox"===b.type?C(g.is(":focus")):"button"===b.type&&g.text(b.text.value)}var t,n,o,i,a,r,l,s,c,u,d,h}function C(e){"textbox"===b.type&&(e||(b.text.value?g.val()!==b.text.value&&g.val(b.text.value):g.val(b.text.defaultvalue)))}function E(e){e=e||f.getZoom(p),g.css({fontSize:Math.round((b.text.font.size||12)*e*(f.dpi/96)),borderWidth:b.border?Math.round(b.border.width*e):0}),b.text&&b.text.align&&g.css({paddingLeft:b.text.leftPadding*e+"px",paddingRight:b.text.rightPadding*e+"px"}),D()}return u._pageindex=n,o=e.type,fn.extend(!0,b,l[o]),d(e,!0),u.dispose=function(){i&&i.off(),b=i=u=f=null},u.bind=function(){i.on.apply(i,arguments)},u.unbind=function(){i.off.apply(i,arguments)},u.trigger=c,u.set=d,u.get=function(e){return e?b[e]:b},u.setPageIndex=function(e){p=e,u.hasOwnProperty("_pageindex")&&(u._pageindex=e)},u.getClonedData=function(){return r?fn.extend(!0,r,b):h(),r},u.getObject=function(){return g},u.getEventObject=function(){return i},u.getZoom=function(){return f.zoom},u.stringify=m,u.getJSON=m,u.getParentName=_,u.getName=function(){var e=b.fieldname.lastIndexOf(".");return 0<=e?b.fieldname.substr(e+1):b.fieldname},u.repaint=T,u.updateView=D,u.zoom=E,u},An=function e(t,n,o){var i=this,s=t,a=n,r={forms:{events:{
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
function(e,t,n){var o=A(e,t,n).getClonedData();return s.trigger({type:p.fieldcreate,field:o}),o}
/**
   * Deletes a field on the given z-index and zero based page index.
   * @param pgNum: number, Zero based page index the field is located on.
   * @param fieldIndex: number, Zero based z-index of the field.
   */,deleteFromPage:S,getFromPage:M,insertForm:
/**
   * Inserts a form from the source URL and index into the given page index.
   * @param sourceUrl: string, Url of the desired form.
   * @param sourceIndex: number, Zero based page index the form is copied from.
   * @param index: number, Zero based page index the form is to be inserted into.
   * @param callback: function, Function to be called when the operation has completed.
   */
function(e,t,n,o){y(e,t,n),"function"==typeof o&&o(),s.trigger({type:p.forminserted,srcurl:e,srcindex:t,index:n}),s.trigger(p.formschanged)}
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
function(e,t,n){_(e,t),"function"==typeof n&&n(),s.trigger({type:p.formmoved,srcindex:e,destindex:t}),s.trigger(p.formschanged)},removeForm:function(e,t){x(e),"function"==typeof t&&t(),s.trigger({type:p.formremoved,index:e}),s.trigger(p.formschanged)}}};if(e.__exposedApi=r.forms,!t)return null;var l=n._pages,c=null,u={fields:[],multiviewFields:{},activepage:null,activefield:null,highlighted:!0,readonly:!!o,getZoom:a.getPageScale,getViewerTransform:a.getViewerTransform,getPageRotation:a.getPageRotation,dpi:96},d={},h=!1,f=!1,g=null,p={click:"fieldclicked",dblclick:"fielddoubleclicked",touchstart:"fieldtouchstart",interactend:"fieldtouchend",touchmove:"fieldtouchmove",pinchmove:"fieldpinchresize",rightclick:"fieldrightclicked",mousedown:"fieldmousedown",mousedownleft:"fieldmousedownleft",mousedownright:"fieldmousedownright",mousemove:"fieldmousemove",mouseout:"fieldmouseout",mouseup:"fieldmouseup",mouseover:"fieldmouseover",create:"fieldcreated",load:"fieldloaded",moved:"fieldmoved",resized:"fieldresized",repaint:"fieldrepainted"},m="<~Atala_Unnamed_",v=[];function b(){}function y(e,t,n){if(null==e&&"number"==typeof t&&(t=x(t)),t=t||[],null==n?n=u.fields.length:n<0&&(n=0),n>u.fields.length){var o=u.fields.length;u.fields[n]=t;for(var i=o;i<u.fields.length;++i)u.fields[i]||(u.fields[i]=[])}else u.fields.splice(n,0,t)}function x(e){return e<u.fields.length?u.fields.splice(e,1)[0]:null}function _(e,t){y(null,x(e),t)}function w(e,t){if(e<u.fields.length&&u.fields[e]&&u.fields[e].length){var n;z(t);for(var o=0;o<u.fields[e].length;o++)(n=u.fields[e][o]).setPageIndex(e),n.repaint(t._form)}}function z(e){e._form&&e._form._fields&&(e._form._fields.length=0,e._form.empty())}function k(e){w(e.index,e.page)}function P(){null!=g.field&&g.field.getObject()[0].blur()}function T(e){e.page._form&&z(e.page)}function D(e){u.activepage=e}function C(e){E(e.page)}function E(e){if(e&&u.fields.length&&u.fields[e._index])for(var t=0;t<u.fields[e._index].length;t++)u.fields[e._index][t].updateView()}function S(e,t){var n,o,i;n=t,o=e,i=u.fields[o].splice(n,1)[0],u.activepage&&u.activepage._form._fields.splice(n,1),i.dispose(),s.trigger({type:"fielddeleted",page:o,index:n})}
/**
   * Gets an array of field data objects located on the given zero based page index.
   * @param pageNum: number, Zero based page index the fields are located on.
   * @returns array: Array of field data objects on the given page index. 
   */function M(e){var t=[];if(0===u.fields.length||void 0===u.fields[e])return t;for(var n=0;n<u.fields[e].length;n++)t[n]=u.fields[e][n].getClonedData();return t}function F(){if(0<u.fields.length){if(u.fields.length=0,l)for(var e=0;e<l.length;e++)z(l[e]);s.trigger({type:"formscleared"})}}function A(e,t,n){var o={};e&&e.type&&d[e.type]&&fn.extend(!0,o,d[e.type]),fn.extend(!0,o,e);var i=new G(o,u,t);return void 0===u.fields[t]&&(u.fields[t]=[]),u.fields[t].push(i),a.redrawVisiblePages(),"function"==typeof n&&n(i),R(i),i}i.dispose=function(){c=l=a=s=i=null,u.fields.length=0,u.multiviewFields=null,u.activepage=null,u.activefield=null},i.addFormLayer=function(t){if(t instanceof fn){t._form=a.createDiv(t),t._form.css({position:"absolute",zIndex:4}),t._form._fields=[],t._form._page=t;var e=function(){D(t)};return t.on("mousedown",e),pn.Features.Touch&&t.on("touchstart",e),t.on({pageresize:function(e){e.page=t,E(e.page)},pagezoom:function(e){e.page=t,function(e){for(var t in e.page._form._fields)e.page._form._fields.hasOwnProperty(t)&&e.page._form._fields[t].zoom(a.getPageScale(e.index))}(e)}}),!0}return!1},i.insertForm=y,i.removeForm=x,i.moveForm=_,i.removeFormLayer=function(e){return e instanceof fn&&(e._form&&(e._form._fields=null,e._form._page=null,e._form=null),!0)},i.showLayer=w,i.__exposedApi=r.forms,i.__getDebugInfo=function(){var e={};return fn.extend(!0,e,{data:u,pages:l,viewport:c}),e},i.__linkForms=function(e){e&&(e._fields?Array.isArray(e._fields)&&(u.fields=e._fields):e._fields=u.fields)},i.clear=F,i.createField=A,i.deleteFieldOnPage=S,i.getFieldsFromPage=M,i.setViewPort=function(e){e&&(e instanceof fn||(e=fn(e)),c=e)},i.drawField=function(e,t){return h?null:(e&&e.type&&d[e.type]&&fn.extend(!0,e,d[e.type]),u.activefield&&null===u.activefield.getObject()&&L(),function(){if(!f){c.on("mousedown",I),pn.Features.Touch&&c.on("touchstart",I);for(var e=0;e<l.length;e++)l[e]._draw.toFront();f=!0}}(),u.activefield=new G(e,u,u.activepage?u.activepage._index:void 0),u.activefield.bind({drawn:V,cancelled:L}),"function"==typeof t&&(O=t),u.activefield)};var O=function(){};function I(e){h=!0,c.off("mousedown",I),pn.Features.Touch&&c.off("touchstart",I),s.trigger({type:"fielddrawstart",field:u.activefield.getClonedData()}),u.activefield._pageindex=u.activepage._index,u.activefield.startDraw(e,u.activepage._form,{})}function V(){var e,t,n;e=u.activefield,t=u.activepage,n=t?t._index:0,u.fields[n]?u.fields[n].push(e):u.fields[n]=[e],u.activefield.unbind({}),R(u.activefield),O({field:e}),O=function(){},s.trigger({type:p.fieldcreate,field:e.getClonedData()}),H()}function L(){u.activefield.dispose(),u.activefield=null,h&&H(!0)}function H(e){h=!1,function(){if(f){c.off("mousedown",I),pn.Features.Touch&&c.off("touchstart",I);for(var e=0;e<l.length;e++)l[e]._draw.reset();f=!1}}(),s.trigger({type:"fielddrawend",field:e?null:u.activefield.getClonedData(),cancelled:!!e})}function j(e){g=e,s.bind("scroll",P)}function B(){s.unbind("scroll",P)}function R(t){function e(e){s.trigger({type:p[e.type],field:t.getClonedData()})}t.bind({interactstart:function(){u.activepage&&u.activepage._form===t.getObject().form||D(t.getObject().form._page),u.activefield=t},moved:e,resized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mousemove:e,mouseout:e,mouseup:e,mouseover:e,repaint:e,fieldfocusin:j,fieldfocusout:B})}function N(){var e=[];for(var t in u.multiviewFields)u.multiviewFields[t].every(q)&&e.push(t);return e}function q(e){var t=-1,n=e.getName(),o=new RegExp(m+"(\\d+)"),i=n.match(o)||[];return 0<i.length&&(t=i[1]),e._pageindex===parseInt(t)}function U(e,t,n,o,i){var a={type:"formdata",serverurl:e,query:"?atalaformdata=",method:"GET",data:{atala_formurl:t,atala_docurl:n=n||s.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{fields:[],length:i,error:void 0}};for(var r in a.data)a.data.hasOwnProperty(r)&&null===a.data[r]&&(a.data[r]=void 0);return a}function W(t,e,n){function o(e){void 0!==t.info.docIndex&&(e.offset=t.info.docIndex),Z(e),"function"==typeof n&&n.call(void 0,e.error,e)}"function"==typeof e&&(n=e,e=!1),e||F(),a.makeHandlerRequest(t,o,o)}function Z(e){if(e){var t={type:"formsloaded",forms:e.forms,customData:e.customData};if(e.dpi&&(u.dpi=e.dpi),e.forms&&e.forms.fields)for(var n=0;n<e.forms.fields.length;n++){e.offset=e.offset||0;var o=e.offset+n;u.fields[o]&&0<u.fields[o].length?u.fields[o].length=0:u.fields[o]=[];var i=e.forms.fields[n];if(i&&0<i.length){for(var a=0;a<i.length;a++)u.fields[o][a]=new G(i[a],u,o),r=u.fields[o][a],l=r.getParentName(),0<=r.getName().indexOf(m)&&(u.multiviewFields.hasOwnProperty(l)?u.multiviewFields[l].push(r):u.multiviewFields[l]=[r]),s.trigger({type:p.load,field:u.fields[o][a].getClonedData()}),R(u.fields[o][a]);v=N()}}else e.error&&(t.error=e.error);s.trigger(t)}var r,l}i.stringifyChanges=function(){var e={},t=!1,n=0;for(var o in u.fields)if(u.fields.hasOwnProperty(o)&&0<u.fields[o].length){for(var i in e[o]=[],u.fields[o])if(u.fields[o].hasOwnProperty(i)){t=!0;var a=u.fields[o][i].get();if(0<a.fieldname.indexOf(m)){var r=u.fields[o][i].getParentName();if(v.includes(r)){var l=new RegExp(m+"(\\d+)");a.fieldname=a.fieldname.replace(l,m+n)}}e[o][i]=a}n++}return t?JSON.stringify({forms:{fields:e}}):void 0},i.createHandlerRequest=U,i.makeHandlerRequest=W,i.loadFormUrl=function(e,t,n,o,i,a,r){var l=Array.prototype.slice.call(arguments);"function"!=typeof(r=l.pop())&&l.push(r),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),a=l.shift();var s=U(e,t,n,o,i);void 0!==a&&(s.info.docIndex=a),W(s,0<=o&&1<=i,r)},i.loadForms=Z,"Atalasoft.Controls.WebDocumentViewer"===s.typeOf&&fn.extend(s,r),s.bind({pagerecycled:T,pageshown:k,zoomchanged:b,pagerotated:C})};
/**
 * WebDocumentViewer PDF Forms API.
 * @class
 * @inner
 * @name FormController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 * @ignore
 */function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(B=j||(j={})).Button="atala-upload-button",B.DragAndDrop="atala-upload-drag-and-drop",B.DragAndDropImage="atala-upload-drag-and-drop-image",B.FileProgress="atala-upload-progress-file",B.FileProgressImage="atala-upload-progress-file-image",B.MultipleFilesHeaderRow="atala-upload-files-header-row",B.MultipleFilesHeader="atala-upload-files-header",B.TextElement="atala-upload-text-element",B.Control="atala-upload-control",B.AreaContainer="atala-upload-flex-area",B.AreaNonTable="atala-upload-flex-area-non-table",B.AreaSingleFile="atala-upload-single-file",B.AreaSingleFileNoDragDrop="atala-upload-single-file-no-drag-drop",B.AreaMultipleFile="atala-upload-multiple-files",B.AreaMultipleFileDragDrop="atala-upload-multiple-files-drag-and-drop",B.ButtonsContainer="atala-upload-flex-buttons",B.Buttons="atala-upload-buttons",B.CloseButton="atala-upload-close-button",B.CancelButton="atala-upload-cancel-button",B.OkButton="atala-upload-ok-button",B.AddButton="atala-upload-add-button",B.MultipleFilesHeaderName="atala-upload-files-header-name",B.MultipleFilesHeaderSize="atala-upload-files-header-size",B.MultipleFilesHeaderStatus="atala-upload-files-header-status",B.MultipleFilesRow="atala-upload-files-row",B.MultipleFilesCell="atala-upload-files-cell",B.MultipleFilesCellName="atala-upload-files-cell-name",B.MultipleFilesCellSize="atala-upload-files-cell-size",B.MultipleFilesCellStatus="atala-upload-files-cell-status",B.MultipleFilesCellCancelButton="atala-upload-files-cancel-button";var Z=function(){function e(e,t){R(this,"cancel",!1),R(this,"progressCounter",0),R(this,"filename",void 0),R(this,"statusText",void 0),this.filename=e,this.statusText=t}var t=e.prototype;return t.handler=function(e){this.isUploadStartEventData(e)?e.fileinfo.filename===this.filename&&this.cancel&&(e.fileinfo.cancel=!0):e.uploadinfo.filename===this.filename&&(this.cancel&&(e.uploadinfo.cancel=!0),this.progressCounter%5==0&&this.statusText.text("Uploading ("+(e.uploadinfo.uploadedbytes/e.uploadinfo.totalbytes*100).toFixed(0)+" %)"),this.progressCounter++)},t.isUploadStartEventData=function(e){return void 0!==e.fileinfo},e}();function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te=function(){function e(e,t){ee(this,"enterLeaveLevel",0),ee(this,"dragEffect",void 0),ee(this,"control",void 0),ee(this,"allowMultipleFiles",void 0),this.control=e,this.allowMultipleFiles=t,this.dragEffect=""}var t=e.prototype;return t.onDragEnter=function(e){""===this.dragEffect&&0===this.enterLeaveLevel&&(this.dragEffect=this.calcDragEffect(e.dataTransfer)),this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect),this.enterLeaveLevel++},t.onDrop=function(e){"none"!==this.dragEffect&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer)),this.resetState()},t.onDragLeave=function(){this.enterLeaveLevel--,0===this.enterLeaveLevel&&(this.dragEffect="")},t.onDragOver=function(e){this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect)},t.calcDragEffect=function(e){var t=this;return this.control.uploadRequested||!this.isDataTransferPresented(e)?"none":(pn.Firefox?2===e.types.length&&e.types.some(function(e){return function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,t),"Files"===e}.bind(this)):1===e.types.length&&"Files"===e.types[0])&&(this.allowMultipleFiles||1===e.items.length)?"copy":"none"},t.processDragAndDropEvent=function(e){e.preventDefault();var t=e.originalEvent;switch(t.type){case"dragenter":this.onDragEnter(t);break;case"dragover":this.onDragOver(t);break;case"drop":this.onDrop(t);break;case"dragleave":this.onDragLeave()}},t.getFilesFromDataTransfer=function(e){var t=[];if(!this.isDataTransferPresented(e))return t;for(var n=0;n<e.files.length;n++)t.push(e.files[n]);return t},t.resetState=function(){this.dragEffect="",this.enterLeaveLevel=0},t.isDataTransferPresented=function(e){return null!==e},e}(),ne=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),(t.prototype.constructor=t).__proto__=n;var i=o.prototype;return i.onDragEnter=function(){},i.onDragOver=function(){},i.onDragLeave=function(){},i.onDrop=function(e){!this.control.uploadRequested&&this.isDataTransferPresented(e.dataTransfer)&&1===e.dataTransfer.types.length&&"Files"===e.dataTransfer.types[0]&&(this.allowMultipleFiles||1===e.dataTransfer.files.length)&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer))},o}(te);function oe(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function ie(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(){function e(e){var o=this;ae(this,"control",void 0),ae(this,"openFileDlgBtn",void 0),ae(this,"openFileForm",void 0),ae(this,"callbackToManipulateParentUi",function(){oe(this,o)}.bind(this)),ae(this,"allowedDragAndDrop",void 0),ae(this,"uiShouldBeClosedAfterUpload",void 0),ae(this,"isVisible",!1),ae(this,"progressHandlers",[]),ae(this,"uploadRequested",!1),ae(this,"reinitNeeded",!1),ae(this,"processFileFinishedUpload",function(){oe(this,o)}.bind(this)),ae(this,"controller",void 0),ae(this,"openFileDlgChangeHandler",function(){oe(this,o);var e=this.openFileDlgBtn[0].files;this.processFiles(this.convertFileListToFilesArray(e)),this.openFileForm[0].reset()}.bind(this)),ae(this,"handleUploadFinished",function(){oe(this,o),this.uiShouldBeClosedAfterUpload?this.controller.finish(!1):(this.control.find("."+j.CancelButton).css("display","none"),this.control.find("."+j.CloseButton).css("display",""))}.bind(this)),ae(this,"processProgressHandlers",function(t){var n=this;oe(this,o),this.progressHandlers.forEach(function(e){return oe(this,n),e.handler(t)}.bind(this))}.bind(this)),this.controller=e;var t=fn("<div/>").addClass(j.Control).css("flex-flow","column").css("height","100%").css("width","100%").addClass("ui-widget"),n=fn("<div/>").addClass(j.AreaContainer).css("display","flex").css("flex-flow","column").css("flex","1 1 auto").css("align-content","center").css("overflow","auto"),i=fn("<div/>").addClass(j.ButtonsContainer).css("flex","0 1 auto");t.append(n),t.append(i),this.control=t,this.openFileDlgBtn=fn("<input/>").attr("type","file").change(this.openFileDlgChangeHandler),this.openFileForm=fn("<form/>").css("display","none"),this.openFileDlgBtn.appendTo(this.openFileForm),this.openFileForm.appendTo(this.control),this.allowedDragAndDrop=!1,this.uiShouldBeClosedAfterUpload=!1}var t,n,o,i=e.prototype;return i.init=function(e,t){var n=this;this.openFileDlgBtn.attr("accept",t.allowedFileTypes);var o=fn(this.control.children("."+j.ButtonsContainer));if(this.initArea(t),this.initButtons(o,t),this.control.css("display","none"),this.control.appendTo(e),this.allowedDragAndDrop=t.allowDragDrop,this.uiShouldBeClosedAfterUpload=t.closeUiAfterUpload,this.allowedDragAndDrop){var i=pn.Explorer?new ne(this,t.allowMultipleFiles):new te(this,t.allowMultipleFiles);this.area.on("dragenter",function(e){return oe(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragover",function(e){return oe(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("drop",function(e){return oe(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragleave",function(e){return oe(this,n),i.processDragAndDropEvent(e)}.bind(this))}},i.activate=function(e){this.callbackToManipulateParentUi=e,this.allowedDragAndDrop?(this.callbackToManipulateParentUi(!1),this.show()):this.openFileDlgBtn.click()},i.close=function(){this.unbindEvents(),this.hide()},i.getControlDom=function(){return this.control},i.initButtons=function(e,t){var n=this,o=fn("<div/>").addClass(j.Buttons).css("float","right"),i=fn("<button/>").addClass(j.Button).addClass(j.AddButton).button({label:"Add..."}).click(function(e){oe(this,n),e.preventDefault(),this.openFileDlgBtn.click()}.bind(this)),a=fn("<button/>").addClass(j.Button).addClass(j.CloseButton).button({label:"Close"}).css("display","none").click(function(e){oe(this,n),e.preventDefault(),this.close()}.bind(this)),r=fn("<button/>").addClass(j.Button).addClass(j.CancelButton).button({label:"Cancel"}).click(function(e){oe(this,n),e.preventDefault(),this.controller.abort(),this.close()}.bind(this));(t.allowMultipleFiles||t.allowDragDrop)&&o.prepend(i),o.append(r),t.closeUiAfterUpload||o.append(a),o.appendTo(e)},i.initAreaImpl=function(e,t,n){var o=fn("<div/>").addClass(e).addClass(j.TextElement);return this.initAreaContents(o,t,n),o},i.initAreaContents=function(e,t,n){var o=fn("<div/>").addClass(t?j.FileProgressImage:j.DragAndDropImage),i=fn("<span/>").addClass(t?j.FileProgress:j.DragAndDrop).text(n);e.append(o).append(i)},i.reinitArea=function(e,t){var n=this.area.children().first();return n.children().remove(),this.initAreaContents(n,e,t),n},i.processFiles=function(e){if(!this.uploadRequested)if(0<e.length){var t=this.filterFiles(e);0<t.length&&(this.allowedDragAndDrop||(this.callbackToManipulateParentUi(!1),this.show()),this.addFilesToUi(t))}else this.allowedDragAndDrop||this.controller.abort()},i.filterFiles=function(e,t){for(var n=this.controller.filterFiles(e,void 0===t?[]:t),o=[],i=0;i<e.length;i++)n[0]===e[i].name?n.shift():o.push(e[i]);return o},i.bindEvents=function(){this.controller.bind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.unbindEvents=function(){this.controller.unbind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.show=function(){this.control.css("display","flex"),this.controlParent.children().first().css("display","none"),this.isVisible=!0},i.hide=function(){var e=this;this.control.css("display","none"),this.controlParent.children().first().css("display","block"),this.isVisible=!1,this.progressHandlers.length=0,this.callbackToManipulateParentUi(!0),this.callbackToManipulateParentUi=function(){oe(this,e)}.bind(this),this.uploadRequested=!1,this.reinitNeeded=this.allowedDragAndDrop,this.switchButtonEnabledState(j.AddButton,!0),this.uiShouldBeClosedAfterUpload||(this.control.find("."+j.CloseButton).css("display","none"),this.control.find("."+j.CancelButton).css("display",""))},i.convertSize=function(e){for(var t=e,n=0;1024<t;)t/=1024,n++;return t.toFixed(2)+" "+["B","KB","MB","GB","TB"][n]},i.addProgressHandler=function(e,t){this.progressHandlers.push(new Z(e,t))},i.removeProgressHandler=function(t){var n=this,e=this.progressHandlers.filter(function(e){return oe(this,n),e.filename===t}.bind(this))[0];null!==e&&this.progressHandlers.splice(this.progressHandlers.indexOf(e),1)},i.cancelUpload=function(t){var n=this,e=this.progressHandlers.filter(function(e){return oe(this,n),e.filename===t}.bind(this))[0];null!=e&&(e.cancel=!0)},i.convertFileListToFilesArray=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},i.switchButtonEnabledState=function(e,t){var n=t?"enable":"disable";this.control.find("."+e).button(n)},i.isFileSuccessEventData=function(e){return void 0!==e.filepath},t=e,(n=[{key:"controlParent",get:function(){return this.control.parent()}},{key:"area",get:function(){return fn(this.control.children("."+j.AreaContainer))}}])&&ie(t.prototype,n),o&&ie(t,o),e}();function le(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function se(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var de=function(a){var e,t,n,o,i;function l(e){var t,n=this;return ue(se(t=a.call(this,e)||this),"files",[]),ue(se(t),"table",void 0),ue(se(t),"uploadElems",[]),t.processFileFinishedUpload=function(e){le(this,n),t.isFileSuccessEventData(e)?t.markStatusFinished(e.filename,!0):t.markStatusFinished(e.errorinfo.filename,!1,e.errorinfo.canceled)}.bind(this),t}t=a,(e=l).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t,n=l,i=[{key:"rowTemplate",get:function(){return null===this.rowTemplateField&&(this.rowTemplateField=this.getFileRowTemplate()),this.rowTemplateField}}],(o=null)&&ce(n.prototype,o),i&&ce(n,i);var r=l.prototype;return r.init=function(e,t){a.prototype.init.call(this,e,t),this.openFileDlgBtn.attr("multiple",!0)},r.initArea=function(e){var t;e.allowDragDrop?((t=this.initAreaImpl(j.AreaMultipleFile,!1,"Drop files here")).addClass(j.AreaMultipleFileDragDrop),this.area.addClass(j.AreaNonTable)):(t=fn("<div/>").addClass(j.AreaMultipleFile).addClass(j.TextElement),this.initFilesTable(t)),t.appendTo(this.area)},r.initFilesTable=function(e){this.area.removeClass(j.AreaNonTable);var t=fn("<div/>").addClass(j.MultipleFilesHeaderRow).addClass("ui-widget-header"),n=fn("<div/>").addClass(j.MultipleFilesHeaderName).addClass(j.MultipleFilesHeader).text("Name"),o=fn("<div/>").addClass(j.MultipleFilesHeaderSize).addClass(j.MultipleFilesHeader).text("Size"),i=fn("<div/>").addClass(j.MultipleFilesHeaderStatus).addClass(j.MultipleFilesHeader).text("Status");t.append(n).append(o).append(i).appendTo(e),this.table=e},r.initButtons=function(e,t){var n=this;a.prototype.initButtons.call(this,e,t);var o=e.children().first(),i=fn("<button/>").addClass(j.OkButton).button({label:"OK"}).addClass(j.Button).click(function(e){le(this,n),e.preventDefault(),this.bindEvents(),this.uploadRequested=!0,this.switchButtonEnabledState(j.AddButton,!1),this.switchButtonEnabledState(j.OkButton,!1),this.controller.uploadFiles(this.files)}.bind(this));o.children("."+j.AddButton).first().after(i)},r.processFiles=function(e){var t=this;if(this.isVisible){if(this.uploadRequested)return;if(0<e.length){var n=this.filterFiles(e,this.files.map(function(e){return le(this,t),e.name}.bind(this)));0<n.length&&(this.switchButtonEnabledState(j.OkButton,!0),this.addFilesToUi(n))}}else a.prototype.processFiles.call(this,e)},r.addFilesToUi=function(e){var t,n;if(this.allowedDragAndDrop&&void 0===this.table){var o=this.area.children().first();o.children().remove(),o.removeClass(j.AreaMultipleFileDragDrop),this.initFilesTable(o)}for(var i=[],a=0;a<e.length;a++)i.push(this.addRowToFilesTable(e[a]));(t=this.files).push.apply(t,e),(n=this.table).append.apply(n,i)},r.addRowToFilesTable=function(t){var n=this,o=t.name,i=l.rowTemplate.clone();fn("."+j.MultipleFilesCellName,i).text(o),fn("."+j.MultipleFilesCellSize,i).text(this.convertSize(t.size));var a=fn("."+j.FileProgress,i),r=fn("."+j.MultipleFilesCellCancelButton,i).click(function(e){le(this,n),e.preventDefault(),this.uploadRequested?(this.cancelUpload(o),r.css("display","none"),a.text("Canceled")):(this.files.splice(this.files.indexOf(t,0),1),this.removeProgressHandler(o),i.remove(),0===this.files.length&&(this.controller.abort(),this.close()))}.bind(this));return this.addProgressHandler(t.name,a),this.addFinishHandler(t.name,a,r),i},r.show=function(){this.switchButtonEnabledState(j.OkButton,!this.allowedDragAndDrop),this.reinitNeeded&&(this.reinitArea(!1,"Drop files here").addClass(j.AreaMultipleFileDragDrop),this.area.addClass(j.AreaNonTable),this.table=void 0),a.prototype.show.call(this)},r.hide=function(){a.prototype.hide.call(this),this.files.length=0,void(this.uploadElems.length=0)!==this.table&&this.table.children(".atala-upload-files-row").remove()},r.addFinishHandler=function(e,t,n){this.uploadElems.push({filename:e,statusTextElem:t,cancelUploadBtn:n})},r.markStatusFinished=function(t,e,n){var o=this;void 0===n&&(n=!1);var i=this.uploadElems.filter(function(e){return le(this,o),e.filename===t}.bind(this))[0];null!=i&&(i.cancelUploadBtn.css("display","none"),e?i.statusTextElem.text("Finished"):n?i.statusTextElem.text("Canceled"):i.statusTextElem.text("Error"))},l.getFileRowTemplate=function(){var e=fn('<div class="'+j.MultipleFilesRow+'">\n<div class="'+j.MultipleFilesCell+" "+j.MultipleFilesCellName+'"></div>\n<div class="'+j.MultipleFilesCell+" "+j.MultipleFilesCellSize+'"/></div>\n<div class="'+j.MultipleFilesCell+" "+j.MultipleFilesCellStatus+'">\n<span class="'+j.FileProgress+'">Upload pending</span>\n<button title="Removes file from upload queue" class="atala-ui-button '+j.MultipleFilesCellCancelButton+'"/>\n</div>\n</div>');return fn("."+j.MultipleFilesCellCancelButton,e).button({icon:"atala-ui-icon atala-ui-icon-upload-cancel",showLabel:!1}),e},l}(re);function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ue(de,"rowTemplateField",null);var ge,pe,me=function(o){var e,t;function n(e){var t,n=this;return fe(he(t=o.call(this,e)||this),"fileName",""),fe(he(t),"uploadProgressSpan",null),fe(he(t),"uploadProgressImage",null),t.processFileFinishedUpload=function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,n),t.isFileSuccessEventData(e)?t.uploadProgressSpan.text("Upload finished"):e.errorinfo.canceled?t.uploadProgressSpan.text("Upload canceled"):t.uploadProgressSpan.text("An error occurred during upload"),t.uploadProgressImage.css("display","none")}.bind(this),t}t=o,(e=n).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t;var i=n.prototype;return i.initArea=function(e){var t=j.AreaSingleFile,n="Uploading...";e.allowDragDrop&&(n="Drop file here");var o=this.initAreaImpl(t,!e.allowDragDrop,n);e.allowDragDrop||(this.uploadProgressSpan=o.children("."+j.FileProgress).first(),this.uploadProgressImage=o.children("."+j.FileProgressImage).first(),o.addClass(j.AreaSingleFileNoDragDrop)),o.appendTo(this.area),this.area.addClass(j.AreaNonTable)},i.addFilesToUi=function(e){this.allowedDragAndDrop&&this.reinitArea(!0,"Uploading..."),this.uploadRequested=!0,this.fileName=e[0].name,this.addProgressHandler(this.fileName,this.uploadProgressSpan),this.bindEvents(),this.switchButtonEnabledState(j.AddButton,!1),this.controller.uploadFile(e[0])},i.show=function(){this.reinitNeeded&&this.reinitArea(!1,"Drop file here"),o.prototype.show.call(this)},i.hide=function(){o.prototype.hide.call(this),null!==this.uploadProgressImage&&this.uploadProgressImage.css("display","")},i.reinitArea=function(e,t){var n=o.prototype.reinitArea.call(this,e,t);e?(this.uploadProgressSpan=n.children("."+j.FileProgress).first(),this.uploadProgressImage=n.children("."+j.FileProgressImage).first(),n.addClass(j.AreaSingleFileNoDragDrop)):(n.removeClass(j.AreaSingleFileNoDragDrop),this.uploadProgressSpan=null,this.uploadProgressImage=null)},n}(re);function ve(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function be(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(pe=ge||(ge={}))[pe.Idle=0]="Idle",pe[pe.Canceling=1]="Canceling",pe[pe.Uploading=2]="Uploading";var On=function(){function e(e,t){var l=this;ye(this,"config",void 0),ye(this,"trigger",void 0),ye(this,"bind",void 0),ye(this,"unbind",void 0),ye(this,"sendRequest",void 0),ye(this,"uploadControlField",null),ye(this,"state",ge.Idle),ye(this,"filesToUpload",[]),ye(this,"uploadingFiles",[]),ye(this,"hasErrors",!1),ye(this,"wasCanceled",!1),ye(this,"uploadCallback",null),ye(this,"abort",function(){ve(this,l),this.config.enabled&&(this.state===ge.Uploading&&(this.hasErrors=!0,this.wasCanceled=!0,this.state=ge.Canceling,this.abortActiveRequests()),this.finish(!0))}.bind(this)),ye(this,"finish",function(e){ve(this,l),(this.config.closeUiAfterUpload||e)&&this.uploadControl.close()}.bind(this)),ye(this,"onFileUploadStarted",function(e,t){if(ve(this,l),this.state===ge.Canceling)return!1;var n={type:"fileuploadstarted",fileinfo:{filename:e,size:t,cancel:!1}};return this.trigger(n),!n.fileinfo.cancel}.bind(this)),ye(this,"onFileUploadFinished",function(e,t){if(ve(this,l),!e.success||e.canceled||void 0!==e.error){var n={type:"fileuploaderror",errorinfo:{filename:t,canceled:e.canceled,customData:e.customData}};this.hasErrors=!0,n.errorinfo.canceled?this.wasCanceled=!0:n.errorinfo.error=e.error,this.trigger(n)}else this.trigger({type:"fileuploadfinished",filepath:e.filename,filename:t,customData:e.customData});this.tryToFinishUpload(t)}.bind(this)),ye(this,"onFileUploadFailed",function(e,t,n){ve(this,l);var o={type:"fileuploaderror",errorinfo:{filename:n,canceled:"abort"===e}};this.hasErrors=!0,o.errorinfo.canceled?this.wasCanceled=!0:(o.errorinfo.error=e,t&&(o.errorinfo.error+=": "+t)),this.trigger(o),this.tryToFinishUpload(n)}.bind(this)),ye(this,"onUploadStarted",function(){ve(this,l);var e={type:"uploadstarted",info:{cancel:!1}};return this.trigger(e),!e.info.cancel}.bind(this)),ye(this,"onUploadFinished",function(){ve(this,l);var e={type:"uploadfinished",canceled:this.wasCanceled,success:!this.hasErrors};this.trigger(e)}.bind(this)),ye(this,"onFileUploading",function(t,e,n){var o=this;if(ve(this,l),this.state===ge.Canceling)return!1;var i=this.uploadingFiles.filter(function(e){return ve(this,o),e.filename===t}.bind(this));if(0===i.length||1<i.length)return!0;var a=i[0];if(a.canceled)return!0;var r={type:"fileuploading",uploadinfo:{filename:t,uploadedbytes:e,totalbytes:n,cancel:!1}};return this.trigger(r),a.canceled=r.uploadinfo.cancel,!r.uploadinfo.cancel}.bind(this)),this.trigger=e.trigger,this.sendRequest=t.makeHandlerRequest,this.bind=e.bind,this.unbind=e.unbind;var n=e.config;this.config={serverUrl:e.config.serverurl,enabled:!1!==n.upload.enabled,allowMultipleFiles:!!n.upload.allowmultiplefiles,allowedFileTypes:n.upload.allowedfiletypes,allowDragDrop:!!n.upload.allowdragdrop,allowedMaxFileSize:n.upload.allowedmaxfilesize,uploadPath:n.upload.uploadpath,uiParent:e.config.parent,filesUploadConcurrency:e.config.upload.filesuploadconcurrency,closeUiAfterUpload:e.config.upload.closeuiafterupload}}var t,n,o,i=e.prototype;return i.dispose=function(){},i.uploadWithUi=function(e){this.uploadControl.activate(e)},i.uploadFiles=function(e,t,n){var o=this;if(this.checkControllerState()&&this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkUploadPath(t)&&this.checkCallback(n)){if(this.state=ge.Uploading,!this.fireUploadStartedEvent())return this.abort(),void this.tryToFinishUpload();for(e.forEach(function(e){return ve(this,o),this.uploadFileOnServer(t,e)}.bind(this));this.uploadingFiles.length<this.config.filesUploadConcurrency&&0<this.filesToUpload.length;)this.startFileUpload(this.filesToUpload.pop());"function"==typeof n&&(this.uploadCallback=n)}},i.uploadFile=function(e,t,n){this.uploadFiles([e],t,n)},i.uploadFileOnServer=function(e,t){var n={atala_upath:this.config.uploadPath,atala_subpath:e},o=fn.extend(!0,{},n,{atala_filename:t.name,atala_filetype:t.type}),i={type:"fileupload",serverurl:this.config.serverUrl,query:"?atalafileupload=",method:"POST",data:o,file:t,cancel:!1};this.filesToUpload.push(i)},i.startFileUpload=function(e){this.onFileUploadStarted(e.file.name,e.file.size)?this.uploadingFiles.push({filename:e.file.name,canceled:!1,jqxhr:this.sendRequest(e,this.onFileUploadFinished,this.onFileUploadFailed,this.onFileUploading)}):this.onFileUploadFailed("abort","",e.file.name)},i.fireUploadStartedEvent=function(){return this.onUploadStarted()},i.checkControllerState=function(){return!(this.state===ge.Uploading||this.state===ge.Canceling&&0<this.uploadingFiles.length)||(this.throwError("checkControllerState","Web Document Viewer already performs an upload operation and can start the another one. Please try again later"),!1)},i.checkUploadPath=function(e){return!e||"string"==typeof e||(this.throwError("checkUploadPath","uploadpath object '"+e+"' is not a string. Please check your input parameters and try again."),!1)},i.checkIfUploadDisabled=function(){return!!this.config.enabled||(this.throwError("checkUploadEnabled","Upload is not enabled in this Web Document Viewer instance. Please check the viewer configuration and try again."),!1)},i.checkFilesToUpload=function(e){if(!Array.isArray(e))return this.throwError("checkFilesToUpload","The parameter is not an array. Please check your input parameters."),!1;for(var t=0;t<e.length;t++){var n=e[t];if(!(n instanceof File))return this.throwError("checkFilesToUpload","An object "+n+" doesn't implement File interface object. Please check your input parameters and try again."),!1}return!0},i.checkAlreadyAddedFiles=function(e){if(!e)return!0;if(!Array.isArray(e))return this.throwError("checkAlreadyAddedFiles","The parameter is not an array. Please check your input data."),!1;for(var t=0;t<e.length;t++){var n=e[t];if("string"!=typeof n)return this.throwError("checkAlreadyAddedFiles","An object "+n+" doesn't implement File interface object. Please check your input parameters."),!1}return!0},i.checkCallback=function(e){return!e||"function"==typeof e||(this.throwError("checkCallback","callback object '"+e+"' is not a function. Please check your input parameters and try again."),!1)},i.throwError=function(e,t){this.trigger({type:"throwerror",name:e,msg:t})},i.tryToFinishUpload=function(t){var n=this;t&&this.uploadingFiles.splice(this.uploadingFiles.indexOf(this.uploadingFiles.filter(function(e){return ve(this,n),e.filename===t}.bind(this))[0]),1),0<this.filesToUpload.length?this.startFileUpload(this.filesToUpload.pop()):0===this.uploadingFiles.length&&(this.state!==ge.Idle&&(this.state=ge.Idle,this.onUploadFinished(),null!==this.uploadCallback&&this.uploadCallback()),this.hasErrors=!1,this.wasCanceled=!1)},i.filterFilesPublic=function(e,t,n){var o,i=this,a=[];this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkAlreadyAddedFiles(t)&&this.checkCallback(n)&&(o=t?this.filterFiles(e,t):this.filterFiles(e,[]),a=e.filter(function(t){var n=this;return ve(this,i),!o.some(function(e){return ve(this,n),e===t.name}.bind(this))}.bind(this)),"function"==typeof n&&n());return a},i.filterFiles=function(e,t){for(var n=this,o=[],i=this.config.allowedFileTypes.toLowerCase().split(","),a=t.map(function(e){return ve(this,n),e}.bind(this)),r=e.length,l=0;l<r;l++){var s=e[l],c=s.name,u=w.None;if(s.size>this.config.allowedMaxFileSize)o.push(c),u=w.Size;else{for(var d=!1,h=a.length,f=0;f<h;f++)if(a[f]===c){d=!0;break}if(d)o.push(c),u=w.Name;else{for(var g=c.split(".").pop(),p="."+(g?g.toLowerCase():""),m=s.type.toLowerCase(),v=!1,b=0;b<i.length;b++){var y=i[b];if(y===p||""===y.trim()){v=!0;break}var x=y.split("/"),_=m.split("/");if(2===x.length&&2===_.length&&x[0]===_[0]&&(x[1]===_[1]||"*"===x[1])){v=!0;break}}v||(o.push(c),u=w.Type)}}this.onFileAddedToUpload(s,u),a.push(c)}return o},i.abortActiveRequests=function(){var t=this;this.uploadingFiles.forEach(function(e){return ve(this,t),e.jqxhr.abort()}.bind(this))},i.onFileAddedToUpload=function(e,t){var n={type:"fileaddedtoupload",filename:e.name,success:0===t,reason:t};this.trigger(n)},i.getUploadControl=function(){return this.uploadControl.getControlDom()}
/**
   *
   * Creates a jQuery UI upload control.
   * @param {any} parent - parent object to append to.
   */,i.createUploadControl=function(e){var t;return(t=this.config.allowMultipleFiles?new de(this):new me(this)).init(e,this.config),t},t=e,(n=[{key:"uploadControl",get:function(){return null===this.uploadControlField&&(this.uploadControlField=this.createUploadControl(this.config.uiParent)),this.uploadControlField}}])&&be(t.prototype,n),o&&be(t,o),e}();function xe(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Document operations API.
 * @class
 * @name DocumentController
 * @inner
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var In=function e(i,t,n){var o=this,p=i,m=t,v=n,a={document:{events:{
/**
         * Triggers when a page is added to the document.
         * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#pageinserted
         * @param {Object} e - Event arguments.
         * @param {string} e.srcuri - Source document identifier.
         * @param {number} e.srcindex - Index of the inserted page in the source document.
         * @param {number} e.destindex - Page insert index.
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
insertPage:d,
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
movePage:C,
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
movePages:E,
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
rotatePage:S,
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
getPageRotation:w,
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
getPageReference:k,
/**
       * Represents bookmark data object.
       * @typedef {Object} BookmarkData
       * @property {number} id - Bookmark id.
       * @property {number} Page - Page which bookmark refers to.
       * @property {number} Top - Vertical offset from the beginning of the page.(In PDF coordinates).
       * @property {number} Left - Horizontal offset from the beginning of the page.(In PDF coordinates).
       * @property {number} initRotation - The rotation angle of page in the original document, in degrees.
       * @property {string} Text - Bookmark text.
       * @property {BookmarkData[]} Children - Array containing child bookmarks
       */
/**
       * Gets all bookmarks for PDF document.
       * @returns {BookmarkData[]}
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
getBookmarks:F,
/**
       * Gets an array of child bookmarks relative to specified.
       * @param {BookmarkData} bookmark - Bookmark object for which children are searched.
       * @returns {BookmarkData[]}
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
getChildBookmarks:I,
/**
       * Scrolls viewer to the specified bookmark.
       * @param {BookmarkData} bookmark - Bookmark object to scroll to.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function 
       */
scrollToBookmark:V,
/**
       * Removes whole information about the bookmarks from PDF document.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function 
       */
removeAllBookmarks:function(e){b.info.bookmarks=[],m.disableBookmarkButton(),b.changes.push({type:"removebookmarks"}),"function"==typeof e&&e()}}};if(e.__exposedApi=a.document,!i)return null;var b={changes:[],mapping:null,count:0,inserted:0,info:{count:0,dpi:96,size:{width:0,height:0},vector:!1,bookmarks:[]}},h={inserted:"pageinserted",removed:"pageremoved",moved:"pagemoved",changed:"documentchanged",rotated:"pagerotated"};function r(e){b.info=e.info,b.mapping=null,b.changes.length=0,b.count=0,b.inserted=0,b.length=0}o.dispose=function(){m=p=o=null};var f=null;function y(e,t,n){n?null===f?f={name:e,message:t}:f.message+="\r\n"+t:p.trigger({type:"throwerror",name:e,msg:t})}function g(){null==b.mapping&&function(){var e=Math.max(b.info.count,0);b.mapping=new Array(e);for(var t=0;t<e;++t)b.mapping[t]=x(t)}()}function l(e,t){g(),b.mapping[e]&&(b.mapping[e].viewerstate[t]||(b.mapping[e].viewerstate[t]={size:null,fitmultiplier:null}))}function x(e){return{index:e,viewerstate:{},pageref:null,angle:0,text:null}}function _(e,t){return l(e,t=t||v),0<=e&&e<b.mapping.length&&b.mapping[e].viewerstate[t].fitmultiplier?b.mapping[e].viewerstate[t].fitmultiplier:1}function w(e){return g(),0<=e&&e<b.mapping.length?b.mapping[e].angle:0}function z(e,t,n){var o=t;e&&e!==i.config.documenturl&&(o.pageref={uri:e,index:t.index,mapsto:b.info.count+b.inserted}),b.count++,b.inserted++,b.mapping.splice(n,0,o)}function u(e){return b.count--,b.mapping.splice(e,1)[0]}function s(){}function c(){}function k(e){var t,n=(t=e,g(),0<=t&&t<b.mapping.length?null!==b.mapping[t].pageref?b.mapping[t].pageref:b.mapping[t].index:null);if(null!==n){if("object"==typeof n)return{uri:n.uri,index:n.index};if(Ue(n))return{uri:i.config.documenturl,index:n}}return n}function d(e,t,n,o){Array.isArray(t)?y("IncorrectIndex","Source index can not be an array."):P(e,[t],n,o)}function P(e,t,n,o){var i,a;if(g(),"string"==typeof e&&0<e.trim().length)f=null,i=B(t,Number.MAX_VALUE,!1,!0),a=!0,null!==f&&("IncorrectNumbers"===f.name?y("IncorrectIndices","When this methods has set srcUri, then srcIndices should be an array of numbers representing page indices from an external document. Please check your input parameters and try again.\r\n\tInner error: "+f.message):y(f.name,f.message));else{if(null!=e)return void y("IncorrectUri",'Uri has invalid value "'+e+'". It must be an uri to the source document or not set.');a=!1,i=function(e){var t=[],n=null,o=null;if(!Array.isArray(e))return y("IncorrectPageReferences","Objects "+e+" are not an array."),n;if(function(e){var t=this,n=[];return!!Array.isArray(e)&&(e.forEach(function(e){xe(this,t),null===Qe(e)&&n.push(e)}.bind(this)),0===n.length)}(e)){o=new Array(e.length);for(var i=0;i<e.length;i++)o[i]=k(e[i])}for(var a=0;a<e.length;a++){var r=null!==o?o[a]:e[a];if("object"==typeof r&&null!==r&&"string"==typeof r.uri&&0!==r.uri.trim().length){var l=B([r.index],Number.MAX_VALUE);null!==l?r.index=l[0]:t.push(r)}else t.push(r)}return 1<t.length?y("IncorrectPageReferences",'Objects "'+t.join('", "')+'" are not correct page references.'):0<t.length?y("IncorrectPageReferences",'Object "'+t[0]+'" is not a correct page reference.'):n=null!==o?o:e,n}(t)}var r=H(n,!1);if(null!==i&&null!==r){var l=r;m._state.batchoperation++;for(var s=0;s<i.length;s++){var c=a?e:i[s].uri,u=a?i[s]:i[s].index;s===i.length-1&&m._state.batchoperation--;var d=x(u);z(c,d,r),m._controllers.annotations&&m._controllers.annotations.insertLayer(null,null,r),m._controllers.forms&&m._controllers.forms.insertForm(null,null,r),b.changes.push({type:"insertpage",uri:c,src:d.index,dest:r}),p.trigger({type:h.inserted,srcuri:c,srcindex:u,destindex:r}),r++}!function(e,t){if(void 0!==b.info.bookmarks&&b.info.bookmarks&&0<b.info.bookmarks.length)for(var n=0;n<b.info.bookmarks.length;n++)b.info.bookmarks[n].Page>=e&&(b.info.bookmarks[n].Page+=t)}(l,i.length),"function"==typeof o&&o(),p.trigger(h.changed)}}function T(e,t){D([e],t)}function D(e,t){var n=this;g();var o=j(e,!0);null!==o&&(m._state.batchoperation++,o.sort(function(e,t){return xe(this,n),t-e}.bind(this)).forEach(function(e,t){xe(this,n),t===o.length-1&&m._state.batchoperation--,u(e),m._controllers.annotations&&m._controllers.annotations.removeLayer(e),m._controllers.forms&&m._controllers.forms.removeForm(e),b.changes.push({type:"removepage",index:e}),function(e){if(void 0!==b.info.bookmarks&&b.info.bookmarks&&0<b.info.bookmarks.length)for(var t=0;t<b.info.bookmarks.length;t++)if(b.info.bookmarks[t].Page===e){var n=b.info.bookmarks[t].id,o=b.info.bookmarks;o.splice(t,1),t--,o=O(n,o),b.info.bookmarks=o}else b.info.bookmarks[t].Page>e&&(b.info.bookmarks[t].Page-=1)}(e),p.trigger({type:h.removed,index:e})}.bind(this)),"function"==typeof t&&t(),p.trigger(h.changed))}function C(e,t,n){E([e],t,n)}function E(e,t,n){g();var r=j(e,!0),l=H(t,!0);if(null!==r&&null!==l){var s=l,c=r[0]>l?1:-1;m._state.batchoperation++;for(var o=function(e){var n=this,o=e,i=r[o],t=0,a=0;t=i<l?-r.filter(function(e,t){return xe(this,n),t<o&&e<i&&e<l}.bind(this)).length:l<i?r.filter(function(e,t){return xe(this,n),t<o&&i<e}.bind(this)).length:c<0?-r.filter(function(e,t){return xe(this,n),t<o&&e<i&&e<l}.bind(this)).length:r.filter(function(e,t){return xe(this,n),t<o&&i<e}.bind(this)).length,0<e&&(t<0||i<l)&&(a=-1),s+=a,e===r.length-1&&m._state.batchoperation--,z(null,u(i+t),s),m._controllers.annotations&&m._controllers.annotations.moveLayer(i+t,s),m._controllers.forms&&m._controllers.forms.moveForm(i+t,s),b.changes.push({type:"movepage",src:i+t,dest:s}),function(e,t){if(void 0!==b.info.bookmarks&&b.info.bookmarks&&0<b.info.bookmarks.length)for(var n=0;n<b.info.bookmarks.length;n++){var o=b.info.bookmarks[n].Page;o===e&&(b.info.bookmarks[n].Page=t),t<e?t<=o&&o<e&&(b.info.bookmarks[n].Page+=1):e<o&&o<=t&&(b.info.bookmarks[n].Page-=1)}}(i+t,s),p.trigger({type:h.moved,shiftedsrcindex:i+t,srcindex:i,destindex:s}),s++},i=0;i<r.length;i++)o(i);"function"==typeof n&&n(),p.trigger(h.changed)}}function S(e,t,n){Array.isArray(t)?y("rotatePage","angle "+t+" is array."):M([e],t,n)}function M(e,t,n){var i=this;g();var a=j(e),o="number"==typeof t||"string"==typeof t,r=function(e,t){var n=R(t?[e]:e);if(n)for(var o=0;o<n.length;o++){if(n[o]%90)return y("rotatePages","Angle must be a multiple of 90 degrees."),null;n[o]=n[o]%360}return n}(t,o);null!==a&&null!==r&&(o||a.length===r.length?(m._state.batchoperation++,a.forEach(function(e,t){xe(this,i);var n=1<r.length?r[t]:r[0];t===a.length-1&&m._state.batchoperation--;var o=function(e,t){b.mapping[e].angle=t;for(var n=null,o=0;o<m._pages.length;++o){var i=m._pages[o];if(i._index===e){n=i;break}}return n&&n._img&&(m.startDomManipulation(),m.adjustVisiblePages(!0,m.endDomManipulation)),n}(e,n);b.changes.push({type:"rotatepage",index:e,angle:n}),p.trigger({type:h.rotated,index:e,page:o,angle:n})}.bind(this)),"function"==typeof n&&n()):y("rotatePages","Indices array and angles array have different lengths."))}function F(){var t=this,n=new Array;return b.info.bookmarks&&b.info.bookmarks.forEach(function(e){xe(this,t),-1===e.Parent?A(n,e):function e(t,n){var o=t[t.length-1];o.id===n.Parent?A(o.Children,n):e(o.Children,n)}(n,e)}.bind(this)),n}function A(e,t){e.push({id:t.id,Text:t.Text,Page:t.Page,Top:t.Top,Left:t.Left,initRotation:t.PageRotation,Children:[]})}function O(e,t){for(var n=0;n<t.length;n++)if(t[n].Parent===e){var o=t[n].id;t.splice(n,1),n--,O(o,t)}return t}function I(e){("object"!=typeof e||isNaN(e.id))&&y("Invalid argument","Bookmark object is expected as input parameter");var t=[];return function t(n,o){var i=this,e=b.info.bookmarks.filter(function(e){return xe(this,i),e.Parent===n}.bind(this));0<e.length&&e.forEach(function(e){xe(this,i),A(o,e),t(e.id,o[o.length-1].Children)}.bind(this))}(e.id,t),t}function V(e,t){var n=this;("object"!=typeof e||isNaN(e.id)||isNaN(e.Page))&&y("Invalid argument","Bookmark object is expected as an input parameter");var o=function(){xe(this,n),"function"==typeof t&&t()}.bind(this),i=Qe(e.Page),a=Qe(e.Top),r=Qe(e.Left),l=Qe(e.initRotation),s={x:0,y:0};if(!isNaN(a)){var c=b.info.dpi,u=p.getZoom();m._config.forcepagefit&&(u*=_(i,v));var d=L(i,v);d||(d=L(0,v));var h=(w(i)+l)%360,f=0;(f=0<a?Math.round(a/72*c):d.height)>d.height&&(f=d.height);var g=isNaN(r)?0:Math.round(r/72*c);g>d.width&&(g=d.width),180===h?(s.y=Math.round(f*u),0<g&&(s.x=Math.round((d.width-g)*u))):s.x=90===h?(s.y=Math.round(g*u),Math.round(f*u)):270===h?(s.y=Math.round((d.height-g)*u),Math.round((d.width-f)*u)):(s.y=Math.round((d.height-f)*u),Math.round(g*u))}m.showPagePoint(i,s,yn.TopLeft,!0,o)}function L(e,t){if(l(e,t=t||v),0<=e&&e<b.mapping.length){var n=b.mapping[e].viewerstate[t].size;if(!n){var o=b.info;if(o.pagesizes&&o.pagesizes[e])return o.pagesizes[e]}return n}}function H(e,t){var n=B([e],b.mapping.length+(t?0:1));return n?n[0]:n}function j(e,t){return B(e,b.mapping.length,t)}function B(e,i,a,t){var r=this,l=[],s=[],n=null,o="IncorrectIndices";return Array.isArray(e)?((e=R(e,t))&&e.forEach(function(t,e,n){var o=this;xe(this,r),(t<0||i<=t)&&l.push(t),a&&1<n.filter(function(e){return xe(this,o),e===t}.bind(this)).length&&-1===s.indexOf(t)&&s.push(t)}.bind(this)),1<l.length?y(o,"Page indices "+l.join(", ")+" are outside of the document.",t):0<l.length?y(o,"Page index "+l[0]+" is outside of the document.",t):1<s.length?y(o,"Page indices "+s.join(", ")+" are included more than once.",t):0<s.length?y(o,"Page index "+s[0]+" is included more than once.",t):n=e):y(o,"Object "+e+" is not an array.",t),n}function R(e,t){var n=this,o=[],i=[];return Array.isArray(e)?(e.forEach(function(e){xe(this,n);var t=Qe(e);null===t?o.push(e):i.push(t)}.bind(this)),1<o.length?(y("IncorrectNumbers",'Objects "'+o.join('", "')+'" are not numbers.',t),i=null):0<o.length&&(y("IncorrectNumbers",'Object "'+o[0]+'" is not a number.',t),i=null)):y("IncorrectNumbers","Object "+e+" is not an array.",t),i}o.__exposedApi=a.document,o.getPageDefinition=function(e,t){if(t=t||v,g(),0<=e&&e<b.mapping.length&&b.mapping[e]){var n=b.mapping[e],o=null,i=null;if(-1===n)return null;null!=n.pageref?(o=n.pageref,e=o.index,i=o.uri):e=n.index;var a=n.viewerstate[t]&&0<=n.viewerstate[t].cacheIndex?n.viewerstate[t].cacheIndex:-1;return{index:e,ref:o,cacheIndex:a,uri:i}}return null},o.setPageCacheIndex=function(e,t){l(e,v),b.mapping[e]&&b.mapping[e].viewerstate&&(b.mapping[e].viewerstate[v].cacheIndex=t)},o.insertPage=d,o.removePage=T,o.movePage=C,o.rotatePage=S,o.insertPages=P,o.removePages=D,o.movePages=E,o.rotatePages=M,o.getPageFitMultiplier=_,o.setPageFitMultiplier=function(e,t,n){l(e,n=n||v),0<=e&&e<b.mapping.length&&(b.mapping[e].viewerstate[n].fitmultiplier=t)},o.getPageRotation=w,o.getPageSize=L,o.setPageSize=function(e,t,n){l(e,n=n||v),0<=e&&e<b.mapping.length&&(b.mapping[e].viewerstate[n].size=t)},o.getBookmarks=F,o.getChildBookmarks=I,o.scrollToBookmark=V,o.updatePageText=function(e,t){g(),0<=e&&e<b.mapping.length&&(b.mapping[e].text=t)},o.getPageText=function(e){return 0<=e&&e<b.mapping.length?b.mapping[e].text:null},o.initDocumentText=function(e){if(e&&e.pages){g();for(var t=0;t<b.mapping.length;++t)if(t<e.pages.length)if(b.mapping[t].index===t)b.mapping[t].text=e.pages[t];else for(var n=0;n<b.mapping.length;++n)b.mapping[n].index===t&&(b.mapping[n].text=e.pages[t]);else b.mapping[t].text=null}},o.getPageIndexByImageIndex=function(e){if(e<b.info.count){for(var t=0;t<b.mapping.length;t++)if(b.mapping[t].index===e)return t}else for(var n=0;n<b.mapping.length;n++)if(b.mapping[n].pageref&&b.mapping[n].pageref.mapsto===e)return n;return-1},o.canBeTiled=function(e,t){if(null===b.mapping[t].pageref){var n=b.info,o=b.mapping[t].index;if(n.pagesizes&&(n.pagesizes[o].width>e||n.pagesizes[o].height>e))return!0}else{var i=b.mapping[t].viewerstate[v].size;if(i&&(i.width>e||i.height>e))return!0}return!1},o.__getDebugInfo=function(){var e={};return fn.extend(!0,e,{data:b,changes:b.changes}),e},o.__linkChanges=function(e){e&&(e._changes?b=e._changes:e._changes=b)},o.clear=function(e){b.clear(),"function"==typeof e&&e(),p.trigger(h.changed)},o.getPageCount=function(){return b.info.count+b.count},o.stringifyChanges=function(){var e=[],t={type:"docinfo",pagescount:b.info.count};for(var n in e.push(t),b.changes)if(b.changes.hasOwnProperty(n)&&(p.config.persistrotation||"rotatepage"!==b.changes[n].type)){var o={};for(var i in b.changes[n])b.changes[n].hasOwnProperty(i)&&(o[i]=b.changes[n][i]);e.push(o)}return JSON.stringify({changes:e})},"Atalasoft.Controls.WebDocumentViewer"===p.typeOf&&fn.extend(p,a),p.bind({pagerecycled:c,pageshown:s,documentinfochanged:r})};function We(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Text Layer operations API.
 * @class
 * @inner
 * @name TextController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var Vn=function e(t,n,o){var i=this,D=t,C=n,E=(n?n._internalEvents:null)||fn({}),a={
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
copySelected:q,
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
selectPageText:v,
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
getPageText:function(i,a,e){var r=this,l=fn.Deferred();return me(i).done(function(){We(this,r);var e="",t=F(i);if(t)for(var n=0;n<t.regions.length;n++){var o=Z(t.regions[n]);o&&(e+=o)}l.resolve(e),a&&"function"==typeof a&&a(e)}.bind(this)).fail(function(){We(this,r),l.reject(),e&&"function"==typeof e&&e()}.bind(this)),l.promise()},
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
resetPageText:b,
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
reloadPageText:function(e,t,n){var o=this;return b(e),me(e).done(function(){We(this,o),t&&"function"==typeof t&&t(e)}.bind(this)).fail(function(){We(this,o),n&&"function"==typeof n&&n(e)}.bind(this))},
/**             
       * Indicates whether page text is loaded.             
       * @param {number} index - Index of the page to check text data state.
       * @instance
       * @function
       */
isPageTextLoaded:function(e){var t=F(e);return!(!t||t.loading)},
/**
       * Triggers text search. This method also triggers UI search behavior - highlight for matched text occurrences selection of current text result and scrolling during text results iteration.
       * @param {string} text - Text to search for. The text must be at least 3 characters long.
       * @param {number} [startPage] - Index of the page to start search from. If not specified first page in document is assumed to be the first in search.
       * @param {TextSearchCallback} [callback] - Search callback that receives search results iterator.
       * @returns If callback is specified - search results iterator that allows navigation over search results, otherwise null.
       *
       * @instance
       * @function
       * @deprecated - Use the {@link Atalasoft.Controls.WebDocumentViewer~TextController#searchOnPages|searchOnPages} method instead.
       */
search:ce,
/**
       * Triggers text search for the specified pages. This method also triggers UI search behavior - highlight for matched text occurrences selection of current text result and scrolling during text results iteration.
       * @param {string} text - Text to search for. The text must be at least 3 characters long.
       * @param {number} [startPage] - Index of the page to start search from. If not specified first page in document is assumed to be the first in search.
       * @param {number} [endPage] - Index of the page to end search where. If not specified last page in document is assumed to be the last in search.
       * @param {number} [activePage] - Index of the page from that viewer should start scrolling to the next search result.
       * @param {TextSearchCallback} [callback] - Search callback that receives search results iterator.
       * @returns If callback is specified - search results iterator that allows navigation over search results, otherwise null.
       *
       * @instance
       * @function
       */
searchOnPages:ue}};if(e.__exposedApi=a.text,!t)return null;var r=.1,l=null,S=n._pages,M={activepage:null,origin:je(0,0),originPage:-1,rectangular:!1,selectionCache:[],searchQuery:null},u={};function F(e){return C._controllers.document.getPageText(e)}
/**
   * jQuery trigger shortcut
   * @returns object, WebDocumentViewer
   */
function s(e){return D.trigger(e),i}function p(e,t){D.trigger({type:"throwerror",name:e,msg:t})}function c(){}function A(e,t){if(t._text){f(t);var n=F(e);if(n){var o=ye(t,n);if(o&&n.searchResult&&w(o,n),o&&n.selection)for(var i=n.selection,a=0;a<i.regions.length;a++)for(var r=0;r<i.regions[a].lines.length;r++)for(var l=i.regions[a].lines[r],s=0;l.words&&s<l.words.length;s++){var c=l.words[s];ne(o,c.bounds.x,c.bounds.y,c.bounds.width,c.bounds.height,u.selection)}}}}function d(e){f(e.page)}function h(e){A(e.index,e.page)}function f(e){e._text&&_(e._index)}function g(e){e.page._text.attr("width",e.width).attr("height",e.height),e.page._text.width(e.width),e.page._text.height(e.height),A(e.index,e.page)}function m(){if(M.searchQuery&&M.searchQuery.iterator){M.searchQuery.iterator.dispose(),M.searchQuery=null,he();for(var e=0;e<S.length;e++)A(S[e]._index,S[e])}}function v(e,a,r,l,s,t){var c=this,u=fn.Deferred(),n=Array.prototype.slice.call(arguments,1);return 2<n.length&&"function"==typeof n[n.length-2]?(t=n.pop(),s=n.pop()):1<n.length&&"function"==typeof n[n.length-1]&&(s=n.pop()),a=n[0],r=n[1],l=n[2],me(e).done(function(e,t){var n=this;We(this,c);var o=t.bounds;void 0===a||!t.regions[a]||void 0!==r&&t.regions[a].lines[r]?(a=t.regions[a],void 0!==r&&a.lines[r]&&(o=te((r=a.lines[r]).bounds,a),void 0!==l&&r.words[l]&&(o=te(r.words[l].bounds,a))),Y(e,je(o.x,o.y),e,je(o.right,o.bottom))):G(e,a);var i=function(){We(this,n),D.config.mousetool.text.hookcopy&&C._dom.viewport.focus(),u.resolve(),s&&"function"==typeof s&&s()}.bind(this);C.isPageInView(e)?i():D.showPage(e,i)}.bind(this)).fail(function(){We(this,c),u.reject(),t&&"function"==typeof t&&t()}.bind(this)),u.promise()}function b(e){if(null==e)for(var t=0;t<C._controllers.document.getPageCount();t++)b(t);F(e)&&(C._controllers.document.updatePageText(e,null),M.selectionCache[e]&&(M.selectionCache[e]=null,C.findPageFromIndex(e)&&_(e,null)))}function y(){if(M.searchQuery=null,M.selectionCache=[],C._controllers.document.initDocumentText({pages:[]}),S)for(var e=0;e<S.length;e++)f(S[e])}function x(){for(var e=0;e<C._controllers.document.getPageCount();e++){var t=F(e);t&&t.selection&&(_(e,t,!0),t.selection=null)}M.selectionCache.length=0}
/** Clears the text selection */function _(e,t,n){for(var o=0;o<S.length;o++)if(!isFinite(e)||S[o]._index===e){t=isFinite(e)&&o===e?t:F(S[o]._index);var i=ye(S[o],t);if(i){var a=C.getSourcePageSize(S[o]._index,t?t.rotation:0);i.clearRect(0,0,a.width,a.height),n&&w(i,t)}}}function w(e,t){if(t&&t.searchResult)for(var n=0;n<t.searchResult.length;n++){var o=t.searchResult[n].bounds;ne(e,o.x,o.y,o.width,o.height,u.highlight)}}function z(e){var t=e.eventData,n=t.page,o=t.point;x();var i=F(n);i&&(i.selection=se(t.point,t.point),t.interval&&M.origin&&0<=M.originPage?(Y(M.originPage,M.origin,n,o),t.complete=!0):(t.line||t.word)&&Math.abs(t.point.x-M.origin.x)<10&&Math.abs(t.point.y-M.origin.y)<10?(function(e,t,n,o){var i=F(e);if(i&&(n||o))for(var a=0;a<i.regions.length;a++){var r=i.regions[a];if(Me(t,r.bounds))for(var l=0;l<r.lines.length;l++){var s=r.lines[l];if(Me(t,s.bounds)){var c={region:a,line:l,bounds:s.bounds};if(o){for(var u=0;u<s.words.length;u++)if(Me(t,s.words[u].bounds))return c.word=u,c.bounds=s.words[u].bounds,X(e,c)}else if(n)return X(e,c)}}}}(n,o,t.line,t.word),t.complete=!0):(M.origin=t.rectangular?t.viewerPoint:t.point,M.originPage=n,M.rectangular=t.rectangular)),t.handled=!0}fn.extend(u,o||{}),i.dispose=function(){D.unbind({pagerecycled:d,pageshown:h,zoomchanged:c,documentchanged:m}),E.off({textselectstart:z,textselectmove:B,textselectend:R}),l=D=i=null,M.searchQuery=null,M.selectionCache=[],M.activepage=null},i.removeTextLayer=function(e){return e instanceof fn&&(e._text&&(e._text._page=null,e._text=null),!0)},i.addTextLayer=function(t){return t instanceof fn&&(t._text=C.createDOM("canvas",t),t._text.css({width:"100%",height:"100%",position:"absolute",zIndex:0}),t._text.attr("width",t.width()).attr("height",t.height()),(t._text._page=t).on(pn.Features.Touch?"touchstart":"mousedown",function(){var e;e=t,M.activepage=e}),t.on({pageresize:function(e){e.page=t,g(e)},pagezoom:function(e){e.page=t,g(e)}}),!0)},i.showLayer=A,i.__exposedApi=a.text,i.__getDebugInfo=function(){var e={};return fn.extend(!0,e,{data:M,pages:S,viewport:l}),e},i.__linkText=function(){},i.clear=y,i.setViewPort=function(e){e&&(e instanceof fn||(e=fn(e)),l=e)},i.search=ce,i.clearSelection=x,i.ensurePageTextLoaded=me;var k,P,T,O,I,V,L,H,j=(k=Y,P=D.config.mousetool.text.throttlingtreshold,L=0,H=function(){L=(new Date).getTime(),V=null,I=k.apply(T,O),V||(T=O=null)},function(){var e=(new Date).getTime();L||(L=e-P);var t=P-(e-L);return T=this,O=arguments,t<=0||P<t?(V&&(clearTimeout(V),V=null),L=e,I=k.apply(T,O),V||(T=O=null)):V||(V=setTimeout(H,t)),I});function B(e){var t=e.eventData,n=t.page,o=M.rectangular?t.viewerPoint:t.point,i=F(n);if(i)if(i.loading)t.cursor=Re.Wait;else{if(0===i.regions.length)return!(t.handled=!1);var a=C.getPageRotation(n)+i.rotation;if(i.rotatedRegions)for(var r=0;r<i.rotatedRegions.length;r++)if(Me(t.point,i.rotatedRegions[r].bounds)){a+=i.rotatedRegions[r].rotation;break}t.cursor=a%180==0?Re.Text:Re.VerticalText,t.selecting&&j(M.originPage,fn.extend({},M.origin),n,o,M.rectangular)}return!(t.handled=!0)}function R(e){var t=e?e.eventData:{},n=!1;for(var o in M.selectionCache)if(M.selectionCache.hasOwnProperty(o)&&M.selectionCache[o].selection&&M.selectionCache[o].selection.regions.length){n=!0;break}n&&s({type:"textselected"}),M.rectangular=!1,t.handled=!0}function N(){q()}function q(){var e=C.createDiv();if(e[0]){var t=new Be("wdv-dummy-selection-trigger",{text:function(){return U()}});t.on("success",function(){t.destroy()}),t.on("error",function(){t.destroy(),p("TextCopyError")}),t.onClick({currentTarget:e[0]})}}function U(){for(var e="",t=0;t<M.selectionCache.length;t++)if(M.selectionCache[t]){var n=M.selectionCache[t].selection;if(n&&n.regions&&0<n.regions.length)for(var o=0;o<n.regions.length;o++){var i=Z(n.regions[o]);i&&(e+=i)}}return e}function W(e){for(var t="",n=0;e.words&&n<e.words.length;n++)if(Ve(e.words[n],1<=n?e.words[n-1]:null)&&(t+=" "),e.words[n].text)t+=e.words[n].text;else if(e.words[n].glyphs&&e.words[n].glyphs.length)for(var o=0;o<e.words[n].glyphs.length;o++)t+=e.words[n].glyphs[o].text;return t}function Z(e){for(var t="",n=0;n<e.lines.length;n++){var o=W(e.lines[n]);o&&(t+=o+"\n")}return t}function X(e,t){var n=F(e);if(n&&t&&n.regions[t.region]){x();var o=n.regions[t.region],i=ye(be(e),n);if(Ue(t.line)&&o.lines[t.line]){for(var a=o.lines[t.line],r={words:[]},l={lines:[r],bounds:fn.extend({},o.bounds)},s=Ue(t.word)&&a.words[t.word]?t.word:0,c=Ue(t.endWord)&&a.words[t.endWord]?t.endWord:Ue(t.word)?s:a.words.length-1,u=s;u<=c;++u){var d=a.words[u],h=!!d.glyphs.length;h&&u===s&&Ue(t.glyph)?d=$(d,t.glyph,s===c&&Ue(t.endGlyph)?t.endGlyph:d.glyphs.length-1):h&&u===c&&Ue(t.endGlyph)&&(d=$(d,0,t.endGlyph)),r.words.push(fn.extend({},d)),i&&ne(i,d.bounds.x,d.bounds.y,d.bounds.width,d.bounds.height)}n.selection=se(je(t.bounds.x,t.bounds.y),je(t.bounds.right,t.bounds.bottom)),le(n.selection.regions,l),M.selectionCache[e]=n}else G(e,t.region)}}function G(e,t){x();var n=F(e);if(n&&n.regions[t]){var o=n.regions[t],i=ye(be(e),n);n.selection=se(je(o.bounds.x,o.bounds.y),je(o.bounds.right,o.bounds.bottom),!1);var a=Q(i,o,n.selection.origin,n.selection.point);a&&0<a.lines.length&&(le(n.selection.regions,a),M.selectionCache[e]=n)}}function Y(e,t,n,o,i){var a=Math.min(e,n),r=Math.max(e,n);for(var l in M.selectionCache)if(M.selectionCache.hasOwnProperty(l)){var s=parseInt(l,10);(s<a||r<s)&&(_(s,M.selectionCache[s],!0),M.selectionCache[s].selection=null)}for(var c=i?Math.min(t.x,o.x):0,u=je(c,0),d=a;d<=r;d++){var h=C.getSourcePageSize(d);i&&((h=fn.extend({},C.getPageSize(d))).width*=C.getPageScale(d),h.height*=C.getPageScale(d));var f=i?Math.max(t.x,o.x):h.width,g=je(f,h.height),p=void 0,m=void 0;a===r?(p=t,m=o):d===e?(p=t,m=d===a?g:u):d===r||d===a?(m=o,p=d===a?g:u):(p=u,m=g);var v=be(d);i?ee(d,je(c,p.y),je(f,m.y),v):J(d,p,m,v)}}function J(e,t,n,o){var i,a,r,l=F(e);if(l&&oe(l,t,n,!1)&&0<l.regions.length){o&&o._text&&_(e,l,!0),l.selection=se(t,n,!1);var s=function(e,t,n){for(var o=je(Math.min(t.x,n.x),Math.min(t.y,n.y)),i=je(Math.max(t.x,n.x),Math.max(t.y,n.y)),a=Te({x:o.x,y:o.y,width:i.x-o.x,height:i.y-o.y}),r=Te({x:0,y:o.y,width:e.bounds.width,height:i.y-o.y}),l=t,s=n,c=null,u=null,d=null,h=null,f=0;f<e.regions.length&&(!c||!u);f++){var g=e.regions[f].bounds;Fe(r,g)&&(d=!d||re(e.regions[f],d)?e.regions[f]:d),Fe(a,g)&&(c=!c&&Me(l,e.regions[f].bounds)?e.regions[f]:c,u=!u&&Me(s,e.regions[f].bounds)?e.regions[f]:u,h=!h||ie(e.regions[f],h)?e.regions[f]:h)}if(c&&u){if(re(u,c)){var p=u;u=c,c=p,l=n,s=t}}else if(d&&h){var m;c?(m=ae(s),re(c,m)?(u=h,s=null):(u=c,s=l,c=d,l=null)):u?(m=ae(l),ie(u,m)?(c=d,l=null):(c=u,l=s,u=h,s=null)):(c=d,u=h,l=s=null),l=l||Le(c),s=s||He(u)}return{start:c,startPoint:l,end:u,endPoint:s}}(l,t,n);if(s&&s.start&&s.end)for(var c=ye(o,l),u=0;u<l.regions.length;u++){var d=l.regions[u],h=null;d===s.start?h=d===s.end?Q(c,d,s.startPoint,s.endPoint):Q(c,d,s.startPoint,He(d)):d===s.end?h=Q(c,d,Le(d),s.endPoint):(i=d,a=s.start,r=s.end,ie(i,a)&&re(i,r)&&(h=Q(c,d,Le(d),He(d)))),h&&h.lines&&0<h.lines.length&&(le(l.selection.regions,h),M.selectionCache[e]=l)}}}function Q(e,t,n,o){var i={lines:[],bounds:fn.extend({},t.bounds)},a=F(t.page).bounds;if(0!==t.rotation&&(n=qe(n,a,360-t.rotation),o=qe(o,a,360-t.rotation)),Ce(n.y,o.y)){var r=n;n=o,o=r}for(var l=0;l<t.lines.length;l++){var s=t.lines[l],c={words:[]},u=Pe(s,a,t.rotation),d=Ce(u.y,n.y)&&De(u.bottom,o.y),h=!d&&Se(n.y,u.y,u.bottom),f=!d&&Se(o.y,u.y,u.bottom);if(h&&1<l){var g=Pe(t.lines[l-1],a,t.rotation);d=!(h=!Se(n.y,g.y,g.bottom))&&!f}if(f&&l<t.lines.length-1){var p=Pe(t.lines[l+1],a,t.rotation);f=!Se(o.y,p.y,p.bottom),d=!h&&!f}if(d||h||f){for(var m=0;s.words&&m<s.words.length;m++){var v=s.words[m],b=Pe(v,a,t.rotation),y=v.glyphs&&v.glyphs.length,x=d;if(!x){if(h&&f){if(Ce(n.x,o.x)){var _=n;n=o,o=_}x=Ce(y?b.x:b.right,n.x)&&De(y?b.right:b.x,o.x)}else h?x=Ce(y?b.x:b.right,n.x):f&&(x=De(y?b.right:b.x,o.x));if(!x&&y){var w=null;if(h&&Se(n.x,b.x,b.right)){var z=f?Math.min(b.right,o.x):b.right;w=K(v,n.x,z)}f&&Se(o.x,b.x,b.right)&&(w=K(v,h?Math.max(b.x,n.x):b.x,o.x)),w&&(v=w,x=!0)}}x&&(c.words.push(fn.extend({},v)),e&&ne(e,v.bounds.x,v.bounds.y,v.bounds.width,v.bounds.height))}0<c.words.length&&i.lines.push(c)}}return i}function K(e,t,n){for(var o=null,i=null,a=0;a<e.glyphs.length;++a){var r=e.glyphs[a].normalizedBounds;if(null===o&&Ce(r.right,t)&&(o=a),!De(r.x,n))break;i=a}return null!==o&&null!==i?$(e,o,i):null}function $(e,t,n){var o={glyphs:[],text:"",omitSpace:e.omitSpace};if(0<=t&&t<=n&&e.glyphs[n]){o.glyphs=e.glyphs.slice(t,n+1);var i=e.glyphs[t].bounds,a=e.glyphs[n].bounds,r=Math.min(i.x,a.x),l=Math.min(i.y,a.y),s=Math.max(i.right,a.right),c=Math.max(i.bottom,a.bottom);return o.bounds={x:r,y:l,width:Math.abs(s-r),height:Math.abs(c-l)},Te(o.bounds),o}return null}function ee(e,t,n,o){var i=F(e);if(i&&oe(i,t,n,!0)&&0<i.regions.length){o&&o._text&&_(e,i,!0);var a=Ie(e,i,t),r=Ie(e,i,n);i.selection=se(t,n,!0);var l=Te({x:Math.min(a.x,r.x),y:Math.min(a.y,r.y),width:Math.abs(r.x-a.x),height:Math.abs(r.y-a.y)});if(l=Oe(l,i.bounds)){for(var s,c=0;c<i.regions.length;c++)if(Fe(l,i.regions[c].bounds)){s=s||ye(o,i);for(var u={lines:[],bounds:fn.extend({},i.regions[c].bounds)},d=0;d<i.regions[c].lines.length;d++){for(var h=i.regions[c].lines[d],f={words:[]},g=0;h.words&&g<h.words.length;g++){var p=h.words[g];if(Fe(l,p.bounds)){var m=Te(Ne(l,i.bounds,(360-i.regions[c].rotation)%360)),v=p.normalizedBounds,b=Ce(v.x,m.x),y=De(v.right,m.right);b&&y||(p=K(p,Math.max(v.x,m.x),Math.min(v.right,m.right))),p&&(f.words.push(fn.extend({},p)),s&&ne(s,p.bounds.x,p.bounds.y,p.bounds.width,p.bounds.height))}}0<f.words.length&&u.lines.push(f)}u.lines.length&&le(i.selection.regions,u)}i.selection.regions.length&&(i.selection.bounds=l,M.selectionCache[e]=i)}}}function te(e,t){if(t){if(t.rotation%180!=0)return Te({x:(e.right+e.x)/2,y:e.y,width:0,height:e.height});var n=(e.bottom+e.y)/2;return Te({x:e.x,y:n,width:e.width,height:0})}return null}function ne(e,t,n,o,i,a){e&&(e.clearRect(t,n,o,i),a=a||u.selection,e.fillStyle=a.color,e.globalAlpha=a.alpha,e.fillRect(t,n,o,i))}function oe(e,t,n,o){return o=!!o,!e.selection||!Ee(e.selection.origin,t)||!Ee(e.selection.point,n)||o!==e.selection.rectangular}function ie(e,t){if(Ce(e.bounds.bottom,t.bounds.y)){if(Ae(e.bounds,t.bounds))return e.bounds.x>t.bounds.x;var n=Oe(e.bounds,t.bounds);if(n)return 1<=n.width/n.height?Ce(e.bounds.y,t.bounds.y):Ce(e.bounds.x,t.bounds.x);if(Ce(e.bounds.y,t.bounds.bottom))return!0;if(De(e.bounds.bottom,t.bounds.y))return!1;if(Ce(e.bounds.x,t.bounds.x))return!0}return!1}function ae(e){return{lines:[],bounds:Te({x:e.x,y:e.y,width:0,height:0})}}function re(e,t){return!ie(e,t)}function le(e,t){for(var n=0;n<e.length&&!re(t,e[n]);n++);Array.prototype.splice.call(e,n,0,t)}function se(e,t,n){return{origin:e,point:t,rectangular:!!n,regions:[]}}function ce(e,t,n){return"function"==typeof t&&(n=t,t=0),ue(e,0,C._controllers.document.getPageCount()-1,t,n)}function ue(e,t,n,o,i){var a=this,r=C._controllers.document.getPageCount(),l=!1;"function"==typeof t&&(i=t,n=r-1,o=t=0),"function"==typeof n&&(i=n,n=r-1,o=t),"function"==typeof o&&(i=o,o=t);var s=function(e,t){if(We(this,a),l)return null;var n=!1,o=e;return"string"==typeof e&&(o=Qe(e),n=!0),null===o&&!n||void 0===o||"number"==typeof o?o:(p("searchOnPages",t+" page '"+JSON.stringify(e)+"' is not a correct page index."),l=!0,null)}.bind(this),c=s(t,"Start"),u=s(n,"End"),d=s(o,"Active");if(l)return null;if(null!==c&&Tn(c)||(c=0),null!==u&&Tn(u)||(u=r-1),null!==d&&Tn(d)||(d=c),c<0||r<=c)return p("searchOnPages","Start page "+c+" is out of range."),null;if(u<0||r<=u)return p("searchOnPages","End page "+u+" is out of range."),null;if(u<c)return p("searchOnPages","Start page is greater than end page."),null;if(d<c||u<d)return p("searchOnPages","Active page "+d+" is out of range."),null;if(null!=e&&"string"!=typeof e)return p("searchOnPages","Text to search value "+JSON.stringify(e)+" is not a valid text to search."),null;if(null!=i&&"function"!=typeof i)return p("searchOnPages","Callback value "+JSON.stringify(i)+" is not a valid callback function."),null;if(he(),x(),e&&2<e.length){var h={sourceQuery:e,text:e.toLocaleLowerCase(),start:c,end:u,active:d};if(M.searchQuery=h,i){var f=new de(h,i);return M.searchQuery.iterator=f}var g=new de(h,i=function(e,t){e.isValid()&&null!==t&&v(t.page,t.region,t.line,t.word)});M.searchQuery.iterator=g}else S.forEach(function(e){We(this,a),e._index>=c&&e._index<=u&&A(e._index,e)}.bind(this));return null}
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
   */function de(c,o){var u,d=3,h=c.start,f=c.end,g=c.active,p=-1,m=-1,v=0,b=this,y=[],t=[],x=T(-1);function i(e){t.push({action:_,args:[!0,P(e)]}),n()}
/**
     * Advances current item to the previous query match or adds operation to the queue in case if next match is currently awaited.
     * @param {TextSearchCallback} callback - Function that that is called when previous match is found.
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#prev
     */function n(){if(!u&&t.length){var e=t.shift();e&&"function"==typeof e.action&&e.action.apply(b,e.args)}}function _(n,o){if(w()){var e=n?1:-1,t=F(p);if(t&&t.searchResult&&t.searchResult.length&&(n?-1<=m&&m<v-1:0<m&&m<=v)){m+=e;var i=t.searchResult[m];x=T(p,i),X(p,i);var a=t?t.rotation:0,r=C.getViewerTransform(p,a),l=te(i.bounds,t.regions[i.region]),s=je(r.x(l.x,l.y),r.y(l.x,l.y));C.showPagePoint(p,s,yn.Center,function(){o(b,T(p,i))})}else u=u||z(c.text,0<=p?p+e:g,n).done(function(e,t){w()?0<=e&&t&&(p=e,v=t.searchResult.length,m=n?-1:v,_(n,o)):o(b,null)}).fail(function(){o(b,null)})}else o(b,null)}
/**
     * Gets the query text for this iterator.
     * @returns {string}
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getQuery
     */function w(){var e=M.searchQuery===c;return e||a(),e}
/**
     * Indicates whether this is executing background search.
     * If `true`, subsequent next/prev calls are stored into the search queue.
     *
     * Method could be used, for example, to determine whether search will be continued after particular callback call, and thus to hide or preserve search loading mask.
     *
     * @returns {boolean}
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isSearching
     */function z(t,n,o,i,a){var r;return i=i||fn.Deferred(),w()&&setTimeout(function(){for(;h<=n&&n<=f;n+=o?1:-1){var e=F(n);if(e&&!e.loading){if(e.searchResult=k(e,c.text),0<e.searchResult.length)return void i.resolve(n,e)}else{if(e&&e.loading&&e.promise)return void l(t,n,o,i,a,e);if(!e){if(y[n])continue;return r=!0,void s(t,n,o,i)}}}if(b.wrap&&!r&&!a)return n<h&&!o?n=f:f<n&&o&&(n=h),void z(t,n,o,i,!0);i.reject()},0),i.promise()}function l(e,t,n,o,i,a){a.promise.then(function(){z(e,t,n,o,i)})}function s(i,e,a,r){var t,n,o,l,s,c=function(e,t){for(var n=e,o=null,i=[];h<=n&&n<=f&&i.length<=20;n+=t?1:-1){var a=null,r=C._controllers.document.getPageDefinition(n),l=r.index;if(r.uri&&(a=r.uri),o!==a&&n!==e)break;o=a;var s={i:l};l!==n&&(s.di=n),i.push(s);var c=F(n);if(c&&!c.loading)break}return{textUrl:o||D.config.documenturl,pages:i}}(e,a);c.pages.length?(t=i,n=c,o=d,l=fn.Deferred(),s={type:"pagetextsearch",serverurl:D.config.serverurl,query:"?pagetextsearch=",method:"POST",data:{atala_query:t,atala_docurl:n.textUrl,atala_maxcount:o||d,atala_pages:JSON.stringify(n.pages)},cancel:!1},C.makeHandlerRequest(s,function(e){if(w()){var t=-1;if(e&&e.searchResults&&e.searchResults.length)for(var n=0;n<e.searchResults.length;n++){var o=e.searchResults[n],i=o.hasOwnProperty("di")?o.di:o.i,a=F(i);!a&&o.text&&(C._controllers.document.updatePageText(i,o.text),ve({pageText:o.text,customData:e.customData},o.text,i)),o.count<=0&&t<0?a?a.searchResult=[]:y[i]=[]:t<0&&0<o.count&&(t=i)}l.resolve(0<=t?t:null)}else l.reject()},function(){l.reject()}),l.promise()).done(function(e){if(null===e)if(w()){var t=c.pages[c.pages.length-1],n=t.hasOwnProperty("di")?t.di:t.i;z(i,n,a,r)}else r.reject();else{var o=F(e);r.resolve(e,o)}}).fail(function(){r.reject()}):r.reject()}function k(e,t){var n=t.length,o=[];if(e.searchResult)o=e.searchResult;else for(var i=0;i<e.regions.length;i++)for(var a=0;a<e.regions[i].lines.length;a++){for(var r=e.regions[i].lines[a],l=0,s=[],c="",u=0;u<r.words.length;u++){var d=r.words[u],h=d.glyphs&&d.glyphs.length;Ve(d,1<=u?r.words[u-1]:null)&&(c+=" ",++l);for(var f=0;f<(h?d.glyphs.length:d.text.length);f++)s[l++]={bounds:h?d.glyphs[f].bounds:d.bounds,region:i,line:a,word:u,glyph:f},c+=(h?d.glyphs[f].text:d.text[f]).toLocaleLowerCase()}var g=0;do{if(0<=(g=c.indexOf(t,g))){for(var p=g;!s[p]&&p<g+n;)p++;for(var m=s[p],v=Math.min(g+n-1,s.length);!s[v]&&g<v;)--v;var b=s[v],y=Te({x:m.bounds.x,y:m.bounds.y,width:Math.abs(b.bounds.right-m.bounds.x),height:Math.abs(b.bounds.bottom-m.bounds.y)});o.push({bounds:y,region:m.region,line:m.line,word:m.word,glyph:m.glyph,endWord:b.word,endGlyph:b.glyph})}}while(0<=g++)}return o}function a(){E.off("pagetextloaded",e),D.unbind({pageshown:r}),y=[]}function e(e){var t=e.text,n=e.index;if(w()&&t&&h<=n&&n<=f&&(t.searchResult=k(t,c.text),y[n]&&Array.prototype.splice.call(y,n,1),t.searchResult.length)){var o=C.findPageFromIndex(n);o&&A(n,o)}}function r(e){if(w()&&e.page&&e.index>=h&&e.index<=f){var t=F(e.index);!t||t.loading||t.searchResult||setTimeout(function(){t.searchResult=k(t,c.text),A(e.index,e.page)},0)}}function P(e){return function(){u=null,e&&e.apply(this,arguments),n()}}function T(e,t){return{page:e,region:t?t.region:0,line:t?t.line:0,word:t?t.word:0}}
/**
       * Indicates whether search should be wrapped around when first or last document page is match is reached.
       * @name Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#wrap
       * @type {boolean}
       */
b.wrap=!0,E.on("pagetextloaded",e),D.bind({pageshown:r}),setTimeout(function(){for(var e=0;e<S.length;e++){var t=S[e]._index;if(!(t<h||f<t)){var n=F(t);n&&!n.loading&&(n.searchResult=k(n,c.text),n.searchResult.length&&(A(t,S[e]),t===g&&(v=n.searchResult.length,p=g)))}}i(o)},0),
/**
     * Advances current item to the next query match or adds operation to the queue in case if next match is currently awaited.
     * @param {TextSearchCallback} callback - function that that is called when next match is found.
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#next
     */
b.next=i,b.prev=function(e){t.push({action:_,args:[!1,P(e)]}),n()},b.getQuery=function(){return c.sourceQuery}
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
     */,b.getCurrentLineText=function(){if(w()&&x&&0<=x.page){var e=F(x.page);if(e&&e.regions[x.region]&&e.regions[x.region].lines[x.line])return W(e.regions[x.region].lines[x.line])}return null},
/**
     * Disposes the current iterator. Calling this method is optional. Abandoned iterators will be disposed automatically.
     * @ignore
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#dispose
     */
b.dispose=a}function he(){for(var e=[],t=0;t<C._controllers.document.getPageCount();t++){var n=F(t);n&&n.searchResult&&(n.searchResult.length&&(e[t]=!0),n.searchResult=null)}for(var o=0;o<S.length;++o)e[o]&&A(o,S[o]);M.searchQuery=null}function fe(e,t){return{type:"textdata",serverurl:e,query:"?atalatextdata=",method:"GET",data:{atala_docurl:t},cancel:!1,info:{ocr:{},error:void 0}}}function ge(e,t){function n(e){pe(e),"function"==typeof t&&t.call()}y(),C.makeHandlerRequest(e,n,n)}function pe(e){if(e){if(e.error&&(p("TextLoadError",e.error),y()),e.text.pages)for(var t=0;t<e.text.pages.length;++t)xe(e.text.pages[t],t);C._controllers.document.initDocumentText(e.text),s({type:"textloaded"})}}function me(a){var r=fn.Deferred(),l=F(a),s=C._controllers.document.getPageDefinition(a);if(!l&&s){l={loading:!0,regions:[],promise:r},C._controllers.document.updatePageText(a,l);var c=s.uri||D.config.documenturl,u=D.config.serverurl;setTimeout(function(){var t,n,o,e={type:"pagetextdata",serverurl:u,query:"?atalapagetext=",method:"GET",data:{atala_docurl:c,atala_index:s.index},cancel:!1,info:{page:l,error:void 0}},i=(t=l,n=a,o=r,function(e){ve(e,t,n,o)});C.makeHandlerRequest(e,i,i)},0)}else r.resolve(a,l);return r.promise()}function ve(e,t,n,o){if(e&&e.pageText)if(t.promise===o&&(t.loading=!1,t.promise=void 0),e.error)p("TextLoadError",e.error),t.regions=[],o&&o.reject&&o.reject(n);else{xe(e.pageText,n),t.regions=e.pageText.regions?e.pageText.regions:[],fn.extend(t,e.pageText);var i={type:"pagetextloaded",index:n,text:t,customData:e.customData};!function(){E.trigger.apply(E,arguments)}(i),s(i),o&&o.resolve&&o.resolve(n,t)}}function be(e){for(var t=0;t<S.length;t++)if(S[t]._index===e)return S[t];return null}function ye(e,t){if(e&&e._text){var n=e._text[0];if(n.getContext){var o=n.getContext("2d"),i=t?t.rotation:0,a=C.getViewerTransform(e._index,i);return o.setTransform(a.a,a.b,a.c,a.d,a.e,a.f),o}}return null}function xe(e,t){if(e){ke(e),e.regions=e.regions||[],e.rotatedRegions=[],e.rotation=e.rotation||0;for(var n=e.regions.length-1;0<=n;--n)e.regions[n].page=t,_e(e.regions[n],e.bounds)?(e.regions[n].index=n,e.regions[n].rotation&&e.rotatedRegions.push(e.regions[n])):Array.prototype.splice.call(e.regions,n,1);e.regions.sort(function(e,t){return re(e,t)?-1:1})}}function _e(e,t){if(!ke(e))return!1;e.rotation=e.rotation||0,e.lines=e.lines||[];for(var n=e.lines.length,o=e.lines.length-1;0<=o;--o)we(e.lines[o],t,e.rotation)||Array.prototype.splice.call(e.lines,o,1);return 0<n&&0===e.lines.length&&p("TextLoadError","Invalid region data received."),!(0<n)||0<e.lines.length}function we(e,t,n){if(!ke(e,t,n))return!1;e.words=e.words||[];for(var o=e.words.length,i=e.words.length-1;0<=i;--i)ze(e.words[i],t,n)||Array.prototype.splice.call(e.words,i,1);return!(0<o)||0<e.words.length}function ze(e,t,n){if(!ke(e,t,n))return!1;e.glyphs=e.glyphs||[],e.text=e.text||"",e.os&&(e.omitSpace=e.os,delete e.os);for(var o=e.glyphs.length-1;0<=o;--o)ke(i=e.glyphs[o],t,n)&&i.text||Array.prototype.splice.call(e.glyphs,o,1);var i;return!0}function ke(e,t,n){var o=!1;if(e)if(e.b&&"string"==typeof e.b){var i=e.b.split(";");e.bounds={x:parseFloat(i[0]),y:parseFloat(i[1]),width:parseFloat(i[2]),height:parseFloat(i[3])},delete e.b,o=!0}else e.bounds&&e.bounds.hasOwnProperty("x")&&e.bounds.hasOwnProperty("y")&&e.bounds.hasOwnProperty("width")&&e.bounds.hasOwnProperty("height")&&(Te(e.bounds),o=!0);else e={};return e.bounds||(e.bounds={x:0,y:0,width:0,height:0}),Te(e.bounds),e.bounds&&(e.normalizedBounds=Pe(e,t,n)),o}function Pe(e,t,n){if(!e.normalizedBounds){if(n%360==0)return e.normalizedBounds=e.bounds,e.normalizedBounds;e.normalizedBounds=Te(Ne(e.bounds,t,360-n))}return e.normalizedBounds}function Te(e){return e.right=e.x+e.width,e.bottom=e.y+e.height,e}function De(e,t){return e<t+r}function Ce(e,t){return t-r<e}function Ee(e,t){return e&&t&&e.x===t.x&&e.y===t.y}function Se(e,t,n){return Ce(e,t)&&De(e,n)}function Me(e,t){return!!t&&Se(e.x,t.x,t.right)&&Se(e.y,t.y,t.bottom)}function Fe(e,t){return!(!e&&!t)&&(Ce(e.right,t.x)&&Ce(t.right,e.x)&&Ce(e.bottom,t.y)&&Ce(t.bottom,e.y)||Ae(e,t))}function Ae(e,t){if(!e&&!t)return!1;var n=e.width>t.width?e:t;return t=n===e?t:e,De(n.x,t.x)&&Ce(n.right,t.right)&&De(n.y,t.y)&&Ce(n.bottom,t.bottom)}function Oe(e,t){if(!Fe(e,t))return null;var n={x:Math.max(e.x,t.x),y:Math.max(e.y,t.y),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)};return n.x<n.right&&n.y<n.bottom?(n.width=Math.abs(n.right-n.x),n.height=Math.abs(n.bottom-n.y),n):null}function Ie(e,t,n){var o=C.getViewerTransform(e,t.rotation?t.rotation:0).invert();return je(o.x(n.x,n.y),o.y(n.x,n.y))}function Ve(e,t){return!(!e||!t||t.omitSpace)}function Le(e){return je(e.bounds.x,e.bounds.y)}function He(e){return je(e.bounds.right,e.bounds.bottom)}function je(e,t){return{x:e,y:t}}i.createHandlerRequest=fe,i.makeHandlerRequest=ge,i.loadText=pe,i.loadPageText=function(e,t,n){ge(fe(e,t),n)},"Atalasoft.Controls.WebDocumentViewer"===D.typeOf&&fn.extend(D,a),D.bind({pagerecycled:d,pageshown:h,zoomchanged:c,documentchanged:m}),E.on({textselectstart:z,textselectmove:B,textselectend:R,textselectcopy:N})},Ce=function(){var e=this,t=fn({}),r={tapped:!1,touching:!1,pinching:!1,zooming:!1,textselection:!1,origin:{x:0,y:0},point:{x:0,y:0},delta:{x:0,y:0},drawing:!1,moves:0,prpt:0},l=null,i=mn.None,n=mn.None,o=null;function s(){return t.trigger.apply(t,arguments),e}function a(){r&&(r.drawing=!0)}function c(){r&&(r.drawing=!1)}function u(){r.zooming=!1}function d(e){if(!r.prmt)return s({type:"panstart",x:e.clientX,y:e.clientY}),document.addEventListener("mousemove",h),document.addEventListener("mouseup",f),document.addEventListener("ondrag",K),!1}function h(e){if(e=null==e?event:e,!r.prpt){if(0!==e.which)return s({type:"panmove",x:e.clientX,y:e.clientY}),!1;f()}}function f(){if(!r.prpt)return document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",f),document.removeEventListener("ondrag",K),s({type:"panend"}),!1}function g(e){if(r.prmt)return!1;e.stopPropagation();var t={handled:!1,complete:!1};return s({type:"textselectstart",toolEvent:e,eventData:t}),t.complete||(r.textselection=!0,document.addEventListener("mouseup",m),document.addEventListener("mousemove",v),document.addEventListener("ondrag",K)),!1}function p(e){return!!r.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectmove",toolEvent:e,eventData:{handled:!1,selecting:r.textselection}}),!1):(m(e),!0))}function m(e){return r.prmt||!r.textselection||(r.textselection=!1,document.removeEventListener("mouseup",m),document.removeEventListener("mousemove",v),document.removeEventListener("ondrag",K),s({type:"textselectend",toolEvent:e,eventData:{handled:!1}})),!1}function v(e){if(r.textselection)return!!r.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectscroll",toolEvent:e}),!1):(m(e),!0))}function b(e){67===e.keyCode&&e.ctrlKey&&s({type:"textselectcopy",toolEvent:e})}function y(e){return!!r.prmt||(s({type:i===mn.Selection?"selectstart":"zoomareastart",x:e.clientX,y:e.clientY,toolEvent:e}),(o=fn(e.target))._binds={mousemove:x,mouseup:_,ondrag:K},o.on(o._binds),!1)}function x(e){return e=null==e?event:e,!!r.prpt||(0!==e.which?(s({type:i===mn.Selection?"selectmove":"zoomareamove",x:e.clientX,y:e.clientY,toolEvent:e}),!1):void _())}function _(e){if(!r.prpt)return o.off(o._binds),o=null,s({type:i===mn.Selection?"selectend":"zoomareaend",toolEvent:e}),!1}function w(e){return fn(".atala_viewport").trigger("viewportclick"),e=null==e?event:e,O(e)}function z(){}function k(e){return e=null==e?event:e,I(e)}function P(e){return fn(".atala_viewport").trigger("viewportclick"),2===(e=null==e?event:e).button?H(e):L(e),V(e)}function T(e){return e=null==e?event:e,A(e)}function D(e){return e=null==e?event:e,j(e)}function C(){O=i===mn.PassThrough?$:K,I=n===mn.PassThrough?$:K,j=A=H=L=V=$}function E(){}function S(){}function M(){}function F(){}C(),e.events={viewport:{click:w,dblclick:z,mousedown:P,mousemove:T,mouseout:E,mouseover:S,mouseup:M,contextmenu:k,mousewheel:F,keydown:D}},pn.Features.Touch&&fn.extend(!0,e.events,{viewport:{touchstart:q,touchmove:U,touchend:W},wdv:{annotationdrawstart:a,annotationdrawend:c,annotationdragstart:a,annotationdragend:c}}),e.dispose=function(){r&&(r=null),l&&(l=null),e=null},e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=s,e.setTool=function(e,t){switch(i=e,n=t,C(),i){case mn.None:O=K;break;case mn.Pan:L=d;break;case mn.ZoomIn:O=B;break;case mn.ZoomOut:O=R;break;case mn.Selection:case mn.ZoomArea:L=y;break;case mn.PassThrough:break;case mn.Text:L=g,A=p,j=b}switch(n){case mn.None:break;case mn.Pan:H=d;break;case mn.ZoomIn:I=B;break;case mn.ZoomOut:I=R;break;case mn.Selection:case mn.ZoomArea:H=y;break;case mn.PassThrough:}},e.getTool=function(){return{primary:i,secondary:n}},e.pauseTool=function(){r.prpt++},e.resumeTool=function(){0<r.prpt&&r.prpt--};var A=function(){},O=function(){},I=function(){},V=function(){},L=function(){},H=function(){},j=function(){};function B(e){if(!r.prpt)return N(e,!1),!1}function R(e){if(!r.prpt)return N(e,!0),!1}function N(e,t){if(!r.prpt)return s({type:"clickzoom",x:e.clientX,y:e.clientY,zoomout:t}),!1}function q(e){var t;r.prpt||r.drawing||r.pinching||fn(e.target).is(".ui-menu,.ui-menu-item,.ui-corner-all")||(e.preventDefault(),2===(r.e=e).originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(o)if(null==t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches)?(G(),r.touching=!1,function(e){if(!r.prpt){e.stopPropagation(),r.pinching=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1];l={start:Y(t.clientX,t.clientY,n.clientX,n.clientY)},s({type:"zoomstart",touches:e.originalEvent.touches})}}(e)):i===mn.Text?g(e):1===e.originalEvent.touches.length&&(r.touching=!0,r.point.x=e.originalEvent.touches[0].pageX,r.point.y=e.originalEvent.touches[0].pageY,r.hold=setTimeout(X,1500),t={x:r.point.x,y:r.point.y},i===mn.Pan&&(t.type="panstart",s(t))))}function U(e){var t;if(!r.prpt&&!r.drawing)if(e.preventDefault(),r.e=e,r.pinching)!function(e){if(!r.prpt&&(e.stopPropagation(),!r.zooming)){r.zooming=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1],o=Y(t.clientX,t.clientY,n.clientX,n.clientY,l.start),i=o.x/l.start.x,a=o.y/l.start.y;setTimeout(u,40),s({type:"zoommove",touches:e.originalEvent.touches,scale:i,scalex:i,scaley:a,dx:o.dx,dy:o.dy})}}(e);else if(r.touching){var n=e.originalEvent.touches[0];r.moves++,r.touching=!0,t={x:n.pageX,y:n.pageY},i===mn.Pan&&(t.type="panmove",s(t))}else r.textselection&&p(e)}function W(e){var t,n,o;r.prpt||r.drawing||(e.preventDefault(),r.pinching?(o=e,r.prpt||(o.stopPropagation(),r.pinching=!1,s({type:"zoomend",touches:o.originalEvent.touches}),1===o.originalEvent.touches.length&&q(o))):r.textselection?m(e):(r.touching=!1,G(),0<r.moves?(r.moves=0,n={},i===mn.Pan&&(n.type="panend",s(n))):r.tapped?((t=e).type="fit",s(t)):(r.tapped=!0,setTimeout(Z,300))))}function Z(){r.tapped=!1}function X(){if(0<r.moves&&null!=r.e){var e=J(r.e);Math.abs(r.point.x-e.x)<5&&Math.abs(r.point.y-e.y)<5&&(r.moves=0)}0===r.moves&&r.touching&&s({x:r.point.x,y:r.point.y,type:"contextmenu"})}function G(){null!=r.hold&&(clearTimeout(r.hold),r.hold=null)}return e},Ln=function(e,t,n,o,i){var a=this,r=e,l=t,s=(t?t._internalEvents:null)||fn({}),u=50,c=n,d=o,h=c.parents("."+r.domclasses.atala_main_container).first(),f=mn.Pan,g=mn.None,p=null,m=1,v="",b=null,y="",x=[],_=1e3,w=null,z=-1,k=null,P={allowflick:!0,text:{scrolltriggerarea:xn.Normal,innerscrolldelta:10,outerscrolldelta:20}};
/**
   * Internal events for conditional input handling.
   */
a.events=T;var T={textselectstart:"textselectstart",textselectmove:"textselectmove",textselectend:"textselectend",textselectcopy:"textselectcopy"};function D(){C({type:"viewportclick"})}function C(){return s.trigger.apply(s,arguments),a}function E(e,t){switch(p.setTool(e,t),n=e,o=t,f!==mn.Text&&g!==mn.Text||n===mn.Text||o===mn.Text||l.resetDrawLayer(),n!==mn.Selection&&n!==mn.ZoomArea&&(f=n),o!==mn.Selection&&o!==mn.ZoomArea&&(g=o),e){case mn.None:S(Re.Arrow);break;case mn.Pan:S(Re.Move);break;case mn.ZoomIn:S(Re.ZoomIn);break;case mn.ZoomOut:S(Re.ZoomOut);break;case mn.Selection:if(!r.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,S(Re.Crosshair);break;case mn.ZoomArea:if(!r.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,S(Re.Crosshair);break;case mn.Text:if(!r.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),S(Re.Text);break;default:S(Re.Arrow)}var n,o}function S(e){b="%2"===e?b=y:e,c.css({cursor:b})}function M(e){r.fit(e.fit)}function F(e){e.zoomout?r.zoomOut():r.zoomIn()}function A(e){d.data("ox",d.scrollLeft()+e.x).data("oy",d.scrollTop()+e.y),d.stop()}function O(e){d.scrollLeft(d.data("ox")-e.x),d.scrollTop(d.data("oy")-e.y),P.allowflick&&(x.push({x:e.x,y:e.y,time:(new Date).getTime()}),10<x.length&&x.shift())}function I(){if(P.allowflick){if(1<x.length){var e=(new Date).getTime(),t=x.pop();if(e-t.time<100){var n=x.shift(),o=-n.time+t.time;d.animate({scrollLeft:d.scrollLeft()+Math.round((n.x-t.x)/o*250),scrollTop:d.scrollTop()+Math.round((n.y-t.y)/o*250)},_,"easeOutQuad")}}x.length=0}}function V(e){(w=l.getActivePage())&&w._rubberband.startSelect(e)}function L(e){(w=l.getActivePage())&&w._rubberband.moveSelect(e)}function H(e){(w=l.getActivePage())&&(w._rubberband.endSelect(e),"zoomareaend"===e.type&&(w._rubberband.hide(),w._rubberband.zoomToSelection())),0==--z&&(z=-1,l.resetDrawLayer(),E(f,g))}function j(){l.zoomStart(),m=r.getZoom()}function B(e){var t=m*e.scale;l.zoom(t)}function R(){l.zoomEnd()}function N(e){var t=Y(e);if(t){var n=e.toolEvent&&e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent;if(t.cursor=b,t.complete=!1,t.rectangular=!!n&&n.altKey,t.interval=!!n&&n.shiftKey,!t.rectangular&&!t.interval){var o=n&&n.detail?n.detail%3:1;1!==o&&(t.word=2===o,t.line=0===o)}C({type:T.textselectstart,eventData:t}),e.eventData.handled=t.handled,t.complete&&t.handled&&(U(e),e.eventData.complete=!0)}}function q(e){X();var t=Y(e);if(t){t.cursor=b,t.selecting=e.eventData.selecting,C({type:T.textselectmove,eventData:t}),e.eventData.handled=t.handled;var n=t.handled&&t.cursor?t.cursor:Re.Arrow;n!==b&&S(n),e.eventData.handled&&e.eventData.selecting&&e.toolEvent&&e.toolEvent.target&&G(e)}}function U(e){X();var t=Y(e);t&&(C({type:T.textselectend,eventData:t}),e.eventData.handled=t.handled)}function W(e){X(),G(e)}function Z(){P.text.hookcopy&&C({type:T.textselectcopy})}function X(){k&&(clearTimeout(k),k=null)}function G(e){if(X(),e&&e.toolEvent){var t=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,n=h.offset(),o=null;if(void 0!==t.pageX&&void 0!==t.pageY?o=t:t.touches&&1===t.touches.length&&void 0!==t.touches[0].pageX&&void 0!==t.touches[0].pageY&&(o=t.touches[0]),o){var i=o.pageX-n.left,a=o.pageY-n.top,r=h.width(),l=h.height(),s=0,c=0;a<l*P.text.scrolltriggerarea&&0<d.scrollTop()?s=0<a?-P.text.innerscrolldelta:-P.text.outerscrolldelta:a>l*(1-P.text.scrolltriggerarea)?s=a<l?P.text.innerscrolldelta:P.text.outerscrolldelta:i<r*P.text.scrolltriggerarea&&0<d.scrollLeft()?c=0<i?-P.text.innerscrolldelta:-P.text.outerscrolldelta:i>r*(1-P.text.scrolltriggerarea)&&(c=i<r?P.text.innerscrolldelta:P.text.outerscrolldelta),(s||c)&&P.text.scrolltriggerarea!==xn.None&&(d.scrollTop(d.scrollTop()+s),d.scrollLeft(d.scrollLeft()+c),k=setTimeout(G,u,e))}}}function Y(e){var t={cursor:null,handled:!1};if(e&&e.toolEvent){var n=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,o=function(e){var t=fn(e).parents("."+r.domclasses.atala_page_div).first();if(t){var n=t.attr(r.domattributes.atala_page_index);return parseInt(n,10)}return null}(n.touches&&1===n.touches.length?document.elementFromPoint(n.touches[0].clientX,n.touches[0].clientY):n.target);if(isFinite(o)&&0<=o){var i=function(e,t){var n=J(e.toolEvent?e.toolEvent:e);if(t&&t._paper){var o=Q(t._paper.canvas,t);n.x-=o.left,n.y-=o.top}return n}(e),a=function(e,t){var n=0;if(l._controllers.text){var o=l._controllers.document.getPageText(t);o&&isFinite(o.rotation)&&(n=o.rotation)}var i=l.getViewerTransform(t,n).invert();return{x:i.x(e.x,e.y),y:i.y(e.x,e.y)}}(i,o);fn.extend(t,{page:o,point:a,viewerPoint:i})}}return t}i&&(fn.extend(P,i),P.text.scrolltriggerarea=Math.max(0,Math.min(P.text.scrolltriggerarea,.3))),p=new Ce,c.on(p.events.viewport),p.events.wdv&&r.bind(p.events.wdv),p.bind({clickzoom:F,fit:M,panstart:A,panmove:O,panend:I,zoomstart:j,zoommove:B,zoomend:R,selectstart:V,selectmove:L,selectend:H,zoomareastart:V,zoomareamove:L,zoomareaend:H,textselectstart:N,textselectmove:q,textselectend:U,textselectscroll:W,textselectcopy:Z,viewportclick:D}),a.dispose=function(){p&&p.events&&(p.events.wdv&&r&&r.unbind&&r.unbind(p.events.wdv),p.events.viewport&&c&&c.off&&c.off(p.events.viewport)),x&&0<x.length&&(x.length=0),p&&p.dispose&&p.dispose(),a=r=c=d=null},a.bind=function(){return s.on.apply(s,arguments),a},a.unbind=function(){return s.off.apply(s,arguments),a},a.trigger=C,a.setTool=E,a.__getDebugInfo=function(){var e={};return fn.extend(!0,e,{cursor:b,custom:y,flick:x,resourcepath:v,flickdelay:_,scroller:d,tool:p,toolcursors:Re,tooltypes:mn,viewport:c,zoom:m}),e},a.getTool=function(){return p.getTool()},a.pauseTool=function(){return p.pauseTool()},a.resumeTool=function(){return p.resumeTool()},a.setCursor=S,a.setCustomCursor=function(e){y=e}},Hn=function(e,t,n,o){var m,i,a,r,l,u=3,s=this,c=fn({}),d=e,v={animated:!1,aspectratio:0,backcolor:"fff",forecolor:"000",movable:!0,multicolor:!0,resizable:!0,showgrips:!1,showmask:!1,showtooltip:!1,visible:!1,x:0,y:0,width:0,height:0},b={
/** Main RubberBand dom object */
rect:null,
/** Dom object underneath Main RubberBand */
rectback:null,
/** Mask objects */
mask:{top:null,bottom:null,left:null,right:null}},y={animating:!1,boundevents:null,changing:!1,colorswap:0,origin:{x:0,y:0},pagesize:{width:0,height:0},pageoffset:{x:0,y:0},vert:!1,horiz:!1,zoom:1},h=o,f=n;function g(){Z(),V()}function p(){Z(),V()}function x(){for(var c=new Array("move","nw","n","ne","w","e","sw","s","se"),i=[],t=[],a=0,r=0,e=0;e<9;e++)i[e]=new s(e),f.append(i[e].grip);function n(){for(var e=0;e<9;e++)!0===t[e]?i[e].show():i[e].hide()}function l(){for(var e=0;e<9;e++)t[e]=!0;t[0]=!0,a<8&&r<8&&(t[1]=!1),(a<12||r<12)&&(t[3]=!1,t[6]=!1),(a<16||r<8)&&(t[2]=!1,t[7]=!1),(r<16||a<8)&&(t[4]=!1,t[5]=!1),n()}function o(){!0===D()?(i[0].grip.onmousedown=j,i[0].grip.style.cursor="move"):(i[0].grip.onmousedown=K,i[0].grip.style.cursor="default");for(var e=1;e<9;e++)!0===E()?(i[e].bind({mousedown:i[e].onResize}),i[e].grip.style.cursor=c[e]+"-resize"):(i[e].off({mousedown:i[e].onResize}),i[e].grip.style.cursor="default")}function s(e){var t,n,o,i=this,a=c[e],r=!1;function l(){"move"!==a&&(!0===v.showgrips?(!0===C()?n.backgroundColor="#"+P():n.backgroundColor="#"+T(),n.border="1px solid #"+T()):(n.backgroundColor="",n.border=""))}function s(){!0===v.showgrips?(n.width="6px",n.height="6px"):(n.width="8px",n.height="8px")}t=document.createElement("div"),n=t.style,(o=fn(t)).addClass(d.domclasses.atala_tool_selection_grip),l(),s(),i.grip=t,i.dispose=function(){a=n=t=i=null},i.setPos=function(e,t){n.left=e+"px",n.top=t+"px"},i.setSize=function(e,t){!0===S()&&"move"!==a&&(e-=2,t-=2),e<=0&&(e=1),t<=0&&(t=1),n.width=e+"px",n.height=t+"px"},i.hide=function(){r&&(n.visibility="hidden",r=!1)},i.show=function(){r||(n.visibility="visible",r=!0)},i.resetColors=l,i.resetGripSize=s,i.onResize=function(e){return function(e,t){W(e=e||event),y.vert=0,y.horiz=0,y.changing=!0;var n={x:0,y:0};switch(t){case"nw":n.x=v.x+v.width,n.y=v.y+v.height;break;case"n":n.x=v.x,n.y=v.y+v.height,y.vert=1;break;case"ne":n.x=v.x,n.y=v.y+v.height;break;case"w":n.x=v.x+v.width,n.y=v.y+v.height,y.horiz=1;break;case"e":n.x=v.x,n.y=v.y+v.height,y.horiz=1;break;case"sw":n.x=v.x+v.width,n.y=v.y;break;case"s":n.x=v.x,n.y=v.y,y.vert=1;break;case"se":n.x=v.x,n.y=v.y}y.origin.x=Math.round(n.x*y.zoom)+y.pageoffset.x,y.origin.y=Math.round(n.y*y.zoom)+y.pageoffset.y,h.raiseDrawLayer();var o={mousemove:H,mouseup:R};return null!==y.boundevents?fn.extend(y.boundevents,o):y.boundevents=o,f.bind(o),!1}(e,a)},i.bind=function(){return o.on.apply(o,arguments),o},i.unbind=function(){return o.off.apply(o,arguments),o},n.display="block",n.position="absolute",n.visibility="hidden",n.zIndex=u,t.onclick=K,t.onselectstart=K,t.onselect=K,t.oncontextmenu=K}this.dispose=function(){for(var e=0;e<9;e++)i[e].dispose(),i[e]=null;t=i=c=null},this.setRectangle=function(e,t,n,o){a=n,r=o,i[0].setPos(e,t),i[1].setPos(e-4,t-4),i[3].setPos(e+n-4,t-4),i[6].setPos(e-4,t+o-4),i[8].setPos(e+n-4,t+o-4),i[0].setSize(n,o),v.showgrips?(i[2].setPos(e+Math.round(n/2)-4,t-4),i[4].setPos(e-4,t+Math.round(o/2)-4),i[5].setPos(e+n-4,t+Math.round(o/2)-4),i[7].setPos(e+Math.round(n/2)-4,t+o-4)):(i[2].setPos(e+4,t-4),i[4].setPos(e-4,t+4),i[5].setPos(e+n-4,t+4),i[7].setPos(e+4,t+o-4),i[2].setSize(n-8,8),i[4].setSize(8,o-8),i[5].setSize(8,o-8),i[7].setSize(n-8,8)),l()},this.resetColors=function(){for(var e=0;e<9;e++)i[e].resetColors()},this.resetGrips=function(){for(var e=0;e<9;e++)i[e].resetGripSize(),i[e].resetColors()},this.hide=function(){for(var e=0;e<9;e++)i[e].hide()},this.show=n,this.showGrips=l,(this.resetEvents=o)()}function _(e,t,n,o){var i=fn("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function w(){var e=_("div");return e.addClass(d.domclasses.atala_tool_selection_band),e.css({position:"absolute",zIndex:u}),e}function z(){var e=_("div");return e.addClass(d.domclasses.atala_tool_selection_mask),e.hide(),e.css({left:"0px",top:"0px",width:"1px",height:"1px",position:"absolute",background:"#000",opacity:"0.6",zIndex:"0"}),e}function k(){return v.animated}function P(){return v.backcolor}function T(){return v.forecolor}function D(){return v.movable}function C(){return v.multicolor}function E(){return v.resizable}function S(){return v.showgrips}function M(){return c.trigger.apply(c,arguments),s}function F(){b.mask.left.hide(),b.mask.right.hide(),b.mask.top.hide(),b.mask.bottom.hide()}function A(){i.css({left:(v.x+v.width)*y.zoom+8+"px",top:(v.y+v.height)*y.zoom+4+"px"}),i.text(Math.round(v.width/y.zoom)+"x"+Math.round(v.height/y.zoom)),i.is(":hidden")&&i.show()}function O(){v.visible=!0,b.rectback.show(),b.rect.show(),!0===k()&&!0===C()&&function e(){!0===v.animated&&0===y.colorswap?(b.rect.css("border","1px dashed #"+P()),b.rectback.css("border","1px solid #"+T()),y.colorswap=1):(b.rect.css("border","1px dashed #"+T()),b.rectback.css("border","1px solid #"+P()),y.colorswap=0),!0!==v.animated||b.rect.is(":hidden")||y.animating||(y.animating=setTimeout(function(){y.animating=!1,e()},250))}()}function I(){v.visible=!1,F(),m.hide(),b.rectback.hide(),b.rect.hide()}function V(){var e=v.x,t=v.y,n=y.pagesize.width,o=y.pagesize.height;(n<=e||e+v.width>n)&&(e=n-v.width)<0&&(e=0),(o<=t||t+v.height>o)&&(t=o-v.height)<0&&(t=0),e!==v.x&&(v.x=e),t!==v.y&&(v.y=t);var i,a,r,l,s,c,u,d,h=Math.round(v.x*y.zoom),f=Math.round(v.y*y.zoom),g=Math.round(v.width*y.zoom),p=Math.round(v.height*y.zoom);i=h,a=f,b.rectback.css({left:i+"px",top:a+"px"}),b.rect.css({left:i+"px",top:a+"px"}),d=p,0===(u=g)&&(u=1),b.rectback.css({width:u+"px",height:d+"px"}),b.rect.css({width:u+"px",height:d+"px"}),m.setRectangle(h,f,g,p),v.visible?(O(),r=h,l=f,s=g,c=p,v.showmask?(0<l?(b.mask.top.css({left:y.pageoffset.x,top:y.pageoffset.y,width:U(),height:l}),b.mask.top.show()):b.mask.top.hide(),l+c<q()?(b.mask.bottom.css({left:y.pageoffset.x,top:y.pageoffset.y+l+c,width:U(),height:q()-(l+c)}),b.mask.bottom.show()):b.mask.bottom.hide(),0<r?(b.mask.left.css({left:y.pageoffset.x,top:y.pageoffset.y+l,width:r,height:c}),b.mask.left.show()):b.mask.left.hide(),r+s<U()?(b.mask.right.css({left:y.pageoffset.x+r+s,top:y.pageoffset.y+l,width:U()-(r+s),height:c}),b.mask.right.show()):b.mask.right.hide()):F()):I()}function L(e,t){e.stopPropagation(),e.preventDefault();var n=t||N(e),o=Math.round(y.origin.x/y.zoom),i=Math.round(y.origin.y/y.zoom),a=Math.abs((n.x-y.origin.x)/y.zoom),r=Math.abs((n.y-y.origin.y)/y.zoom);return 0<v.aspectratio&&(Math.abs((n.y-y.origin.y)/(n.x-y.origin.x))>1/v.aspectratio&&0===y.horiz||1===y.vert?a=Math.round(r*v.aspectratio):r=Math.round(a/v.aspectratio)),n.x<y.origin.x?(o-=a)-y.pageoffset.x<0&&(a=y.origin.x-y.pageoffset.x,0<v.aspectratio&&(r=Math.round(a/v.aspectratio)),o=y.origin.x-a):o+a>y.pagesize.width+y.pageoffset.x&&(a=y.pagesize.width-o+y.pageoffset.x,0<v.aspectratio&&(r=Math.round(a/v.aspectratio))),n.y<y.origin.y?(i-=r)-y.pageoffset.y<0&&(r=y.origin.y-y.pageoffset.y,0<v.aspectratio&&(a=Math.round(r*v.aspectratio)),i=y.origin.y-r,n.x<y.origin.x&&(o=y.origin.x-a)):i+r>y.pagesize.height+y.pageoffset.y&&(r=y.pagesize.height-i+y.pageoffset.y,0<v.aspectratio&&(a=Math.round(r*v.aspectratio)),n.x<y.origin.x&&(o=y.origin.x-a)),(0===y.vert||0<v.aspectratio)&&(v.x=o-y.pageoffset.x,v.width=a),(0===y.horiz||0<v.aspectratio)&&(v.y=i-y.pageoffset.y,v.height=r),V(),!0===v.showtooltip&&A(),!1}function H(e){return L(e,J(e,null,!0))}function j(e){W(e=e||event);var t=X(e,null,f);y.origin.x=t.x-Math.round(v.x*y.zoom),y.origin.y=t.y-Math.round(v.y*y.zoom),y.changing=!0;var n={mousemove:B,mouseup:R,ondrag:K};return null!==y.boundevents?fn.extend(y.boundevents,n):y.boundevents=n,f.bind(n),!1}function B(e){var t;W(e=e||event),t="mousemove"===e.type?X(e.originalEvent,null,f):X(e);var n={x:0,y:0};return n.x=Math.round((t.x-y.origin.x)/y.zoom),n.y=Math.round((t.y-y.origin.y)/y.zoom),n.x>y.pagesize.width-v.width&&(n.x=y.pagesize.width-v.width),n.x<0&&(n.x=0),n.y>y.pagesize.height-v.height&&(n.y=y.pagesize.height-v.height),n.y<0&&(n.y=0),v.x=n.x,v.y=n.y,V(),!1}function R(e){return W(e=e||event),!(y.changing=!1)===v.showtooltip&&i.hide(),y.changing&&(y.changing=!1,M("changed")),null!==y.boundevents&&(f.unbind(y.boundevents),y.boundevents=null,h.resetDrawLayer()),!1}function N(e){var t=J(e.toolEvent?e.toolEvent:e);if(f._paper){var n=Q(f._paper.canvas,f);t.x-=n.left,t.y-=n.top}return t}function q(){return Math.round(y.pagesize.height*y.zoom)}function U(){return Math.round(y.pagesize.width*y.zoom)}function W(e){void 0!==e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Z(){var e=f._img.getSize();y.zoom=f._img.getFitZoom(),y.pagesize.width=e.width,y.pagesize.height=e.height}return s.dispose=function(){null!=m&&(m.dispose(),m=null),s=null,b.rect=null,b.rectback=null,i=null,b.mask.top=null,b.mask.bottom=null,b.mask.left=null,b.mask.right=null},s.getAnimated=k,s.getAspectRatio=function(){return v.aspectratio},s.getBackColor=P,s.getForeColor=T,s.getHeight=function(){return v.height},s.getMovable=D,s.getMultiColor=C,s.getPosition=function(){return{x:v.x,y:v.y}},s.getRectangle=function(){return{x:v.x,y:v.y,width:v.width,height:v.height}},s.getResizable=E,s.getShowGrips=S,s.getShowMask=function(){return v.showmask},s.getShowTooltip=function(){return v.showtooltip},s.getSize=function(){return{width:v.width,height:v.height}},s.getVisible=function(){return v.visible},s.getWidth=function(){return v.width},s.bind=function(){return c.on.apply(c,arguments),s},s.hide=I,s.reset=function(){I(),v.x=0,v.y=0,v.width=0,v.height=0},s.show=O,s.synchronize=function(){V()},s.trigger=M,s.unbind=function(){return c.off.apply(c,arguments),s},s.zoomToSelection=function(){var e=h.getMaxZoom();if(d.getZoom()<e){var t,n=h.getViewportSize(),o=f._img.getFitMultiplier(),i=1,a=0,r=0;t=n.width/v.width==n.height/v.height?Math.min(n.width/(v.width*o),n.height/(v.height*o),e):n.width/v.width<n.height/v.height?Math.min(n.width/(v.width*o),e):Math.min(n.height/(v.height*o),e),i=o*t,a=Math.round(v.x*i),r=Math.round(v.y*i),r-=Math.max(0,Math.round((n.height-v.height*i)/2)),a-=Math.max(0,Math.round((n.width-v.width*i)/2));var l=h.getPageOffsets(f._index,null,null,t);d.zoom(t,function(){d.scrollTo(l.width+a,l.height+r)})}},s.startSelect=function(e){e.stopPropagation(),e.preventDefault(),Z();var t=N(e);return O(),y.origin.x=t.x,y.origin.y=t.y,v.x=Math.round(t.x/y.zoom),v.y=Math.round(t.y/y.zoom),v.width=1,v.height=1,y.changing=!0,y.vert=0,y.horiz=0,V(),!0===v.showtooltip&&A(),!1},s.moveSelect=L,s.endSelect=R,t&&fn.extend(!0,v,t),b.rect=w(),b.rectback=w(),b.mask.top=z(),b.mask.bottom=z(),b.mask.left=z(),b.mask.right=z(),(i=_("div")).addClass(d.domclasses.atala_tool_selection_tooltip),i.hide(),i.css({fontFamily:"Arial, helvetica, san-serif",fontSize:"8pt",padding:"1px",backgroundColor:"#FFFFE1",border:"1px solid #000000",position:"absolute",zIndex:999}),f.append(b.rectback),f.append(b.rect),f.append(i),f.append(b.mask.top),f.append(b.mask.bottom),f.append(b.mask.left),f.append(b.mask.right),m=new x,a=v.multicolor?"dashed":"solid",r="1px solid #"+v.backcolor,l="1px "+a+" #"+v.forecolor,b.rectback.css("border",r),b.rect.css("border",l),m.resetColors(),v.visible?O():I(),f.bind({pageresize:g,pagezoom:p}),s};function jn(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that views, modifies, and saves documents, annotations and forms.
 * @param {WebDocumentViewerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @returns {WebDocumentViewer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */var Ke=function(t,o){if(!zn({checkjQueryOnly:!0,checkRaphael:!1,checkClipboard:!1}))return null;var e,n,c={typeOf:t.type||"Atalasoft.Controls.WebDocumentViewer"},j="Atalasoft.Controls.WebDocumentThumbnailer"===c.typeOf,y=t.singlepage,x="",T=150,u=500,_="atala-ui-icon",i=document.createElement("div"),B=4,R=1500,a=fn({}),r=fn({}),l=new Cn({get:function(){return c},isInitialized:Jt,switchDocument:Ft,closeDocument:At}),N={
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
uploadCtrl:null},q={annotations:null,document:null,forms:null,mouseTool:null,memory:null,text:null,upload:null},U={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},W={prpr:0,batchoperation:0,loading:!1,zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,scrollTarget:{Page:0,dx:0,dy:0},hidden:!1,itch:!1},s={top:0,left:0,expanded:[]},d={
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
fileaddedtoupload:null},Z={
/**
     * @property {boolean} [allowannotations=false] - Turns annotation support on or off.
     * This affects both UI annotations toolbar appearance and corresponding API methods behavior.
     * If set to `false`, {@link Atalasoft.Controls.WebDocumentViewer#annotations|WebDocumentViewer.annotations} will be set to `null` and annotation-related methods of {@link Atalasoft.Controls.WebDocumentViewer |WebDocumentViewer} will throw errors.
     */
allowannotations:!1,
/**
     * @property {array} [textAnnotationEditorIgnoredKeyCodes=[]] - Sets key codes ignored by text annotation editor.
     */
textAnnotationEditorIgnoredKeyCodes:[],
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
direction:vn.Vertical,
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
fitting:bn.Width,
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
     * - Pages are requested on demand, so size of each individual page is not known until it's loaded from server. Thus when pages having different sizes are inserted into DOM, their sizes are different from expected. This would cause resizing of the DOM elements and thus cause visual shifts of the images. Especially such effect could be noticeable on big images, when rendering and load time is bigger then usual.
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
     * @property {number} [pagebuffersize] - The number of pages to keep in memory while scrolling. Negative values will automatically calculate the optimal number based on available screen space. Values lower than can be displayed will be ignored, and higher values will cause a degradation in performance.
     * */
pagebuffersize:-1,
/**
     * @property {number} [maxpagebuffersize] - The maximum number of pages to keep in memory while scrolling. Should be greater then pagebuffersize value. It can helps to avoid loading too many pages if automatically calculated value is big. It is not recommended to set small values (less then viewer can fit).
     * */
maxpagebuffersize:50,
/**
     *  @property {number} [pagespacing=4] - Specifies the distance (in pixels) between pages displayed.
     */
pagespacing:4,
/**
     * @property {Atalasoft.Utils.PageSelection} [pageselectlocation] - Specifies the location to determine the current page number.
     *
     * Current page number is displayed on the document toolbar, and also current page is used in some operation in default UI, like page rotation is applied to the current page or in {@link Atalasoft.Controls.WebDocumentViewer.next | next}, {@link Atalasoft.Controls.WebDocumentViewer.previous | previous}, {@link Atalasoft.Controls.WebDocumentViewer.showPage | showPage} methods.
     */
pageselectlocation:fn.extend({},yn.TopLeft),
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
     * @property {boolean} [savepreviouslysigneddocument = false] - If set to true and the opened document is signed, calling Save will not throw an exception, but will create an invalid PDF which may still render correctly.
     */
savepreviouslysigneddocument:!1,
/**
     *  @property {string} [scripturl] - Url location to the server where all JavaScript files are put when not in the default location.
     */
scripturl:"",
/**
     *  @property {string} serverurl - Url location to the server handler.
     */
serverurl:"",
/**
    *  @property {boolean} [showbookmarks=false] - Specifies whether native PDF bookmarks should be shown.
    */
showbookmarks:!1,
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
     * @property {boolean} [textannomobilezoom=true] - Specifies whether text annotation is zoomed automatically in edit mode in mobile browsers.  */
textannomobilezoom:!0,
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
type:mn.Pan,
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
scrolltriggerarea:xn.Normal,
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
toolbarbuttons:null,
/**
     * @property {Atalasoft.Utils.LocalizationStrings} [localization] - this object provides a translation table for all potentially user-visible strings used by Atalasoft Web Document Viewer.
    *   See {@link Atalasoft.Utils.LocalizationStrings} for all possible strings.
    * 
    *   **Default value**: {} - which selects the default American English localization.
    */
localization:kn,
/**
     * @property {boolean} [tiling=false] - Specifies whether the PDF document pages should be loading using tiling
     * */
tiling:!1};if(t){var h=t.mousetool;t.mousetool&&"object"!=typeof t.mousetool&&(t.mousetool=fn.extend({},Z.mousetool,{type:h})),!t.tabular||t.direction!==vn.Horizontal&&1!==t.columns||(t.tabular=!1),fn.extend(!0,Z,t),t.mousetool=h,t.localization&&Mn.SetLocalizationStrings(t.localization)}if(function(){y?(Z.direction=vn.Vertical,Z.tabular=!1):Z.direction=Z.direction===vn.Vertical||Z.direction===vn.Horizontal?Z.direction:vn.Vertical;Z.fitting=Z.fitting===bn.None||Z.fitting===bn.Best||Z.fitting===bn.Width||Z.fitting===bn.Height?Z.fitting:bn.Width,Z.pageborderwidth=Te(Z.pageborderwidth)?parseInt(Z.pageborderwidth,10):1,Z.pagespacing=Te(Z.pagespacing)?parseInt(Z.pagespacing,10):4,Z.showpageborder=!!Z.showpageborder,Z.showpagenumber=!!Z.showpagenumber,Z.showstatus=!!Z.showstatus,Z.zoom=Te(Z.zoom,!0)?parseFloat(Z.zoom):1,Z.scripturl=(e=Z.scripturl,0<e.length&&-1===e.indexOf("/",e.length-1)&&-1===e.indexOf("\\",e.length-1)?Z.scripturl+"/":Z.scripturl),Z.maxpagebuffersize=0<Z.maxpagebuffersize&&Z.pagebuffersize<Z.maxpagebuffersize?Z.maxpagebuffersize:0<Z.pagebuffersize?Z.pagebuffersize+10:50,function(){if((Z.mousetool.type===mn.ZoomArea||Z.mousetool.type===mn.Selection||Z.mousetool.type===mn.Text)&&!Z.showselecttools){if(null!==t.showselecttools&&void 0!==t.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";Z.showselecttools=!0}}(),function(){Z.upload||(Z.upload={enabled:!1});var e=Z.upload;!1!==e.enabled&&(e.allowedmaxfilesize=Tn(e.allowedmaxfilesize)?e.allowedmaxfilesize:Number.MAX_VALUE,e.allowdragdrop=!!e.allowdragdrop,e.allowmultiplefiles=!!e.allowmultiplefiles,e.allowedfiletypes="string"==typeof e.allowedfiletypes?e.allowedfiletypes:"",e.uploadpath="string"==typeof e.uploadpath?e.uploadpath:".",e.filesuploadconcurrency=Tn(e.filesuploadconcurrency)?e.filesuploadconcurrency:1,e.closeuiafterupload=!1!==e.closeuiafterupload)}();var e}(),e=Z.allowannotations,n=Z.allowtext,!zn({checkjQueryOnly:!1,checkRaphael:e||n,checkClipboard:n}))return null;function f(){var e=q.memory.deallocateOldestEntry();!function(e){try{e.parentNode&&e.parentNode.removeChild(e),i.appendChild(e),i.innerHTML=""}catch(e){}}(e[0]),0<=e._cacheIndex&&(N.loadedImgs[e._cacheIndex]=null,e._cacheIndex=-1),e.remove(),e.length=0,e=null}function g(e){W.newpagedivsize={height:e.height,width:e.width},W.newpagedivfullzoom=e.fullzoom,Z.minwidth=e.minwidth,Z.zoom=e.fullzoom,Vt()}function p(e){var t=!1;if((U.smallest.width<=0||e.width<U.smallest.width)&&(U.smallest.width=e.width,t=!0),(U.smallest.height<=0||e.height<U.smallest.height)&&(U.smallest.height=e.height,t=!0),!j){if(y)Se(e.dx,e.dy);else{var n=W.scrollTarget.Page-1;if(e.index<=n)if(Z.direction===vn.Vertical&&0<Math.abs(e.dy)){var o=fe(N.pageDivs[0]._index).height;N.edges[0].height(o),Le(N.pageDivs[0]._index,null),De(null,fe(n).height+W.scrollTarget.dy,!1)}else if(Z.direction===vn.Horizontal&&1<Math.abs(e.dx)){var i=fe(N.pageDivs[0]._index).width;N.edges[0].width(i),Le(N.pageDivs[0]._index,null),Ve(),De(fe(n).width+W.scrollTarget.dy,null,!1)}Se(e.dx,e.dy),he();var a=N.scroller[0].scrollLeft,r=N.scroller[0].scrollTop;if(!N.scroller.propagationPaused()&&N.scrollH&&N.scrollV){var l=Math.round(a/N.scrollH._ratio),s=Math.round(r/N.scrollV._ratio);l!==N.scrollH.scrollLeft()&&(N.scrollH.pauseEventPropagation(!0),N.scrollH.scrollLeft(l)),s!==N.scrollV.scrollTop()&&(N.scrollV.pauseEventPropagation(!0),N.scrollV.scrollTop(s))}}t&&te(oe())>N.pageDivs.length&&Vt()}}function m(e,t,n,o){var i=t.getPageSize(e.index,x);if(!i){var a=t.getPageFitMultiplier(e.index,x),r=a,l={width:e.width,height:e.height};1===r&&Z.forcepagefit&&(l.width!==n.width||l.height!==n.height)&&0<l.width&&0<l.height&&(r=l.width/n.width>l.height/n.height?n.width/l.width:n.height/l.height,t.setPageFitMultiplier(e.index,r,x)),t.setPageSize(e.index,fn.extend({},l),x),o&&(l.width*=Z.zoom*r,l.height*=Z.zoom*r,(i=fn.extend({},U.size)).width*=Z.zoom*a,i.height*=Z.zoom*a,e.dx=l.width-i.width,e.dy=l.height-i.height,p(e))}}function v(){pn.Mobile.Any()?window.addEventListener("orientationchange",st):window.addEventListener("resize",st),N.scroller.scroll(Oe),J(U.buffer)}function b(e){var t=e.target||e.srcElement;return("TEXTAREA"===t.nodeName||"INPUT"===t.nodeName||"text"===t.type)&&(!(t.attributes.selectable&&"false"===t.attributes.selectable.value||t.attributes.hasOwnProperty("readonly")&&"true"===t.attributes.readonly.value)&&void 0)}function w(t,n){return function(e){try{e.currentTarget=n&&0<n.length?n[0]:e.currentTarget,t&&t(e)}catch(e){ke(e.message)}}}function X(e,t){if(Z.showerrors)throw void 0===t?e:e+": "+t;ke(e+": "+t),ln({type:"error",name:e,message:t})}function z(e){X(e.name,e.msg)}function k(e,t,n,o){var i=fn("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function G(e,t,n){return k("div",e,t,n)}function P(e){var t=fn('<div div class="atala_draw_layer"></div>');return t.toFront=function(){t.css({"z-index":"10"}),t.reflow&&t.reflow()},t.reset=function(){t.css({"z-index":""}),t.reflow&&t.reflow()},e&&e.prepend(t),t}function D(e){var t=G(e.parent),n=x+"_toolbar";t.buttons=[];for(var o=0;e.children&&o<e.children.length;o++){var i=null;switch(e.children[o].type){case"button":if(pn.Features.Touch&&("lines"===e.children[o].icon||"polygon"===e.children[o].icon))continue;e.children[o].id=n+"_"+e.children[o].id,(i=O(e.children[o],t)).addClass(_n.atala_toolbar_button),t.buttons.push(i);break;case"pagelabel":N.pageLabel=k("span",t,n+"_"+e.children[o].id),(i=N.pageLabel).addClass("ui-controlgroup-item")}i&&e.children[o].cls&&i.addClass(e.children[o].cls)}return t}function C(e){var t=fn("<ul/>");for(var n in t.css({fontSize:"medium"}),t.addClass(_n.atala_context_menu),e)if(e.hasOwnProperty(n)){var o=fn('<li><div href="#"> '+n+" </div></li>");pn.Features.Touch&&o.on({touchend:e[n]}),o.click(e[n]),o.appendTo(t)}return t.menu(),t}function E(e,t,n){var o=fn('<div title="'+t+'" />');return n&&o.append(n),o.dialog(),o}function S(e){var t=k("span",N.toolbar.annoToolbar).addClass("ui-controlgroup-item");return O(e,t),A(t,e.id+"_Drop","ui-icon-triangle-1-s","Click To Choose",null,function(){var e=fn(this).next();if(e.is(":visible"))return e.hide(),!1;var t=e.prev().prev().parent();return e.menu().show().css({position:"absolute",top:0,left:0,"min-width":t.width()+"px","z-index":11}).position({my:"left top",at:"left bottom",of:t}),!1}),t.controlgroup(),N.toolbar.annoToolbar.controlgroup("refresh"),t}function M(e,t,n){for(var o=fn(e.children().first()),i={},a=0;a<n.length;a++)i[n[a].name]=F(o,t,n[a]);o.menu=C(i),e.append(o.menu),o.menu.hide()}function F(e,t,n){var o=function(){return e.button("option","label","Draw "+n.name),e.data("_annoConfig",n),e.click(t.onclick),e.menu.hide(),e.trigger("click"),!1};return an("menuselect"+t.icon+n.name,w(o,e)),o}function A(e,t,n,o,i,a){var r=fn('<button id="'+t+'" title="'+o+'">'+(i||o)+"</button>");return a&&r.click(a),r.button({icon:n,showLabel:null!=i&&Z.showbuttontext}),r.addClass("atala-ui-button"),e&&r.appendTo(e),r}function O(e,t){var n,o="menuclick"+(e.custom?e.id:e.icon),i=A(t,e.id,e.custom?e.icon:_+" "+_+"-"+e.icon,e.tooltip,e.text,(n=o,function(e){e.preventDefault(),ln(n,arguments)}));return i.data("_config",e),an(o,w(e.onclick,i)),i}function I(e){var t,n,o={clearable:"atala_search_input_clearable",onclear:"atala_search_input_clear_hover",inputEmpty:"atala_search_input_empty",loading:"atala_search_input_loading"},i=e.parent||N.toolbar,a=null,r=null;function l(){var e=n.val();return e?n.addClass(o.clearable):n.removeClass(o.clearable),!!(e&&a&&a.isValid()&&e===a.getQuery())||(clearTimeout(r),a=null,e&&3<=e.length?(p(!0),r=setTimeout(function(){a=q.text.search(e,on(),f),g(!0)},Z.mousetool.text.searchdelay),!1):void h())}function s(e){var t=n.val();return 13===e.keyCode&&a&&t&&a.isValid()&&a.getQuery()===t?(e.shiftKey?u():c(),!1):13!==e.keyCode||a&&a.isValid()?27===e.keyCode?(d(),!1):void 0:(l(),!1)}function c(){a&&(g(!0),a.next(f))}function u(){a&&(g(!0),a.prev(f))}function d(){h(),y()}function h(){a=null,q.text.search(""),q.text.clearSelection(),g(!1),p(!0)}function f(e,t){e.isValid()&&(g(!1),e.wrap=Z.mousetool.text.wrapsearch,t||p(t))}function g(e){v(o.loading,e)}function p(e){v(o.inputEmpty,!e)}function m(t){return function(e){e.preventDefault(),t&&t()}}function v(e,t){t?n.addClass(e):n.removeClass(e)}function b(e){v(o.onclear,this.offsetWidth-18<e.clientX-this.getBoundingClientRect().left)}function y(e){e&&e.preventDefault(),n.removeClass(o.clearable).removeClass(o.onclear).val("").change(),l()}!function(){t=G().addClass(_n.atala_search_container).addClass("ui-controlgroup-item"),(n=fn('<input type="text" placeholder="Search..." />').addClass(_n.atala_search_input).addClass("ui-widget")).on({keydown:s,"input propertychange":l}),k("span",t).css({width:"100%"}).append(n);var e=k("span",t);A(e,x+"_toolbar_search_button_next",_+" "+_+"-search-next","Next",null,m(c)).addClass(_n.atala_search_next).addClass(_n.atala_toolbar_button),A(e,x+"_toolbar_search_button_prev",_+" "+_+"-search-prev","Previous",null,m(u)).addClass(_n.atala_search_prev).addClass(_n.atala_toolbar_button),t.on("mousemove","."+o.clearable,b).on("touchstart click","."+o.onclear,y),i.append(t),i.append(fn("<div/>").css("clear","both"))}(),this.dispose=function(){n.off({keypress:s,"input propertychange":l}),t.off("mousemove","."+o.clearable,b).off("touchstart click","."+o.onclear,y),a&&a.dispose();t.remove()},this.ClearSearch=d}function V(){Z.allowannotations&&c.annotations.cancelDraw(),q.mouseTool.setTool(mn.ZoomArea)}function L(o){return function(){var t=this,e=H(U),i=e[0],n=[];e.forEach(function(e){return jn(this,t),n.push(q.document.getPageRotation(e)+o)}.bind(this)),q.document.rotatePages(e,n,function(){var e=zt(i),t=be(i),n=Z.direction===vn.Vertical?t.height*e:0;at(Z.pageselectlocation,yn.Center)||at(Z.pageselectlocation,yn.MiddleLeft)?n/=2:at(Z.pageselectlocation,yn.TopLeft)&&(n=0);var o={x:Z.direction===vn.Vertical?0:n,y:Z.direction===vn.Vertical?n:0};it(i,o,Z.pageselectlocation,!0)})}}!function(){var e=Z.parent.attr("id")+"_wdv";++Dn.instanceCounter;for(;document.getElementById(e+Dn.instanceCounter);)++Dn.instanceCounter;x=e+Dn.instanceCounter}(),
/**
   * @member {WebDocumentViewerConfig} config - Current control configuration.
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @instance
   * @alias config
   */
c.config=Z,
/** WARNING: Changing values from these references can cause instability.*/
c.events=d,
/** WARNING: Changing values from these references can cause instability.*/
c.domclasses=_n,
/** WARNING: Changing values from these references can cause instability.*/
c.domattributes=wn;var H=function(e){return[e.number-1]};function Y(e,t){var n=G(e,t);return Z.direction===vn.Vertical?(n.height(1),n.css({display:"block"})):Z.direction===vn.Horizontal&&(n.width(1),n.css({display:"inline-block",overflow:"hidden"})),n._zoom=1,Z.backcolor&&n.css({backgroundColor:Z.backcolor}),n}function J(e){if(void 0===e){var t=te(j&&W.newpagedivsize&&0<Z.zoom&&isFinite(Z.zoom)?Z.zoom:oe());t>Z.maxpagebuffersize&&(t=Z.maxpagebuffersize),U.buffer<t&&(U.buffer=t),U.buffer=Math.min(U.buffer,q.document.getPageCount()),e=U.buffer}function n(t){return function(){var e;e=t,W.activepage=e}}if(N.pageDivs.length<e)for(var o=N.pageDivs.length;o<e;o++)N.pageDivs[o]=G(),N.pageDivs[o].addClass(_n.atala_page_div),Z.showselecttools&&(N.pageDivs[o]._rubberband=new Hn(c,{},N.pageDivs[o],{getViewportSize:xe,getMaxZoom:ie,getPageOffsets:fe,raiseDrawLayer:St,resetDrawLayer:Mt})),N.pageDivs[o].on({touchstart:n(N.pageDivs[o]),mousedown:n(N.pageDivs[o])}),N.pageDivs[o].attr("tabindex",0),q.annotations&&q.annotations.addDrawingSurface(N.pageDivs[o]),(Z.showselecttools||Z.allowannotations||Z.allowforms||Z.allowtext)&&(N.pageDivs[o]._draw=P(N.pageDivs[o])),q.forms&&!j&&q.forms.addFormLayer(N.pageDivs[o]),q.text&&!j&&q.text.addTextLayer(N.pageDivs[o]);else if(N.pageDivs.length>e)for(;N.pageDivs.length>e&&0!==N.pageDivs.length;){var i=N.pageDivs.pop();i._rubberband&&i._rubberband.dispose(),q.annotations&&q.annotations.removeDrawingSurface(i),q.forms&&!j&&q.forms.removeFormLayer(i),q.text&&!j&&q.text.removeTextLayer(i),i&&Xe(i),i=null}}function Q(e,E,t,n){"function"==typeof t&&(n=t,t=void 0);var S,o="function"==typeof n?[n]:[];S=fn(new Image);var i=.9,M=fn.extend(!0,{atala_cb:void 0},t||{});S._domEl=G(),S._domEl.addClass(_n.atala_page_image_anchor),S.addClass(_n.atala_page_image),S._domEl.append(S);var a={load:L,error:function(){y(),X("ImageError","Image at frameIndex "+F()+" failed to load.")},inserted:function(){S._loaded&&h()}};function F(){return S._page?S._page._index:q.document.getPageIndexByImageIndex(S._index)}function A(){return S._domEl}function r(e){return q.document.getPageFitMultiplier(void 0!==e?e:F())}function O(e,t){return(e=void 0===e?Z.zoom:e)*r(t)}function s(){var e=be(F())||U.size;return{height:e.height,width:e.width}}
/**
     * Returns physical size of the image without client transformations applied(like view rotation)
     */function c(){var e=s();return 90===S._viewrotation||270===S._viewrotation?P(e):e}function I(e,t){return t=t||s(),{height:Math.round(t.height*O(e)),width:Math.round(t.width*O(e))}}function l(){var n=this;if(S._tiled){var o=0;return S.find("."+_n.atala_tile_column).first().find("img").each(function(e,t){jn(this,n),o+=t.naturalHeight}.bind(this)),o}return S.prop("naturalHeight")}function u(){var e=this;if(S._tiled){var t=0;return S.find("."+_n.atala_tile_column).each(function(){jn(this,e),t+=fn(this).find("img").first().prop("naturalWidth")}.bind(this)),t}return S.prop("naturalWidth")}function V(e){var n=this,t=F(),s=U.vector&&(!E||!E.uri)?O():Math.min(O(),1),c=q.document.getPageRotation(t);if(e||s!==S._zoom||S._rotation!==c){var u=fn.extend({atala_docurl:E?E.uri:S.documenturl,atala_doczoom:s,atala_thumbpadding:!1},M);if(c&&(u.atala_angle=c),Z.jpeg&&(u.atala_jpeg=!0),Z.tiling&&Z.forcepagefit&&!S._loaded)if(ye(R*U.dpi/96,t)){var o,i=xe(),a=be(t);o=a.width>a.height?i.width/a.width:i.height/a.height,ne(s,o)||(s=o,u.atala_doczoom=s)}if(S._tiled=function(e,t){var n=!1,o=R*U.dpi/96;if(Z.tiling&&!j&&ye(o,e)){var i=xe(),a=be(e);a.height>o&&a.width>o&&(2<a.height*t/i.height||2<a.width*t/i.width)&&(n=!0)}return n}(t,s),S._tiled){var d=be(t),r=I(),l=xe(),h=Math.min(B,Math.floor(r.height/l.height)),f=Math.min(B,Math.floor(r.width/l.width)),g={width:Math.ceil(d.width/f),height:Math.ceil(d.height/h)};if(h!==S._tilesV||f!==S._tilesH){Ke();var p=A(),m=S;S=G(),p.children().replaceWith(S),H(m),S.addClass(_n.atala_tiled_page_image);for(var v=0;v<f;v++){var b=G(S);b.addClass(_n.atala_tile_column);for(var y=0;y<h;y++){var x=G(b);x.attr("tile_index_h",v).attr("tile_index_v",y),x.width(g.width*s),x.height(g.height*s),x.addClass(_n.atala_page_loading);var _=fn(new Image);_.css("display","none"),x.append(_)}}S._tilesH=f,S._tilesV=h}(N.loadedImgs[S._cacheIndex]=S)._needToInsert=!1,S.__tileRequests=[],S.__tilesArray=[];for(var w=0;w<f;w++)for(var z=0;z<h;z++)S.__tilesArray.push({x:w,y:z});var k={x:0,y:0},P=function(e,t){return jn(this,n),Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)}.bind(this);S.__tilesArray.sort(function(e,t){return jn(this,n),P(k,e)-P(k,t)}.bind(this)),S.__tilesArray.forEach(function(e){var t,n,o,i,a=e.x,r=e.y;switch(c){case 0:t=Math.ceil(a*g.width),n=Math.ceil(r*g.height),o=a<f-1?g.width:d.width-t,i=r<h-1?g.height:d.height-n;break;case 90:t=Math.ceil(r*g.height),n=Math.ceil((f-1-a)*g.width),o=r<h-1?g.height:d.height-t,i=0!==a?g.width:d.width-n;break;case 270:t=Math.ceil((h-1-r)*g.height),n=Math.ceil(a*g.width),o=0!==r?g.height:d.height-t,i=a<f-1?g.width:d.width-n;break;case 180:t=Math.ceil((f-1-a)*g.width),n=Math.ceil((h-1-r)*g.height),o=0!==a?g.width:d.width-t,i=0!==r?g.height:d.height-n;break;default:X("ImageError","Invalid rotation angle: "+c)}var l=fn.extend(!0,{},u,{atala_tilestart:t+"x"+n,atala_pagesize:o+"x"+i});l.atala_doczoom=s,S.__tileRequests.push({type:"docpage",serverurl:Z.serverurl,query:"?ataladocpage="+(null===E?S._index:void 0!==E.index?E.index:E),method:"GET",data:l,cancel:!1})}),S._reqzoom=s,S._reqangle=c,setTimeout(function(){jn(this,n),W.itch=!1,function t(n,o){if(W.itch||S._reqzoom!==O()||S._reqangle!==q.document.getPageRotation(F())||void 0===S.__tileRequests[n]||void 0===S.__tilesArray[n])V();else{var e=S.__tileRequests[n],i=S.__tilesArray[n].x,a=S.__tilesArray[n].y,r=S.find('div[tile_index_h="'+i+'"][tile_index_v="'+a+'"]').find("img");r.attr("tile_index",n),r.attr("src",e.serverurl+e.query+"&"+fn.param(e.data)),r[0].onload=function(){if(S){if(r.css("display","block"),r.parent().css({width:"auto",height:"auto"}),r.parent().removeClass(_n.atala_page_loading),0===n){var e=I();S.trigger({type:"pageresize",image:S,index:F(),width:e.width,height:e.height})}0===r.width()&&0===r.height()&&r.css({width:"auto",height:"auto"}),n<S.__tilesArray.length-1?t(n+1,o):L()}}}}(0,g)}.bind(this),0)}else{if(1<S._tilesV||1<S._tilesH){var T=A(),D=S;S=fn(new Image),T.children().replaceWith(S),H(D),S.addClass(_n.atala_page_image),T.addClass(_n.atala_page_loading),S._tilesV=1,S._tilesH=1,S.__tilesArray=[],(N.loadedImgs[S._cacheIndex]=S)._needToInsert=!1}var C={type:"docpage",serverurl:Z.serverurl,query:"?ataladocpage="+(null===E?S._index:void 0!==E.index?E.index:E),method:"GET",data:u,cancel:!1,info:S};S._reqzoom=s,S._reqangle=c,Xt(C,L,L)}}}function L(){S._loaded||S._domEl.removeClass(_n.atala_page_loading),S._tiled&&W.zooming&&pt(),S._loaded=!0,S._zoom=S._reqzoom,S._rotation=S._reqangle;var e=F();if(0<=e){if(S._rotation!==q.document.getPageRotation(e))return void V();(S._viewrotation=0)<S.parent().length&&h(),w(S._viewrotation);var t=U.vector?O():Math.min(O(),1);p()&&S._zoom<t*i&&!ne(S._zoom,t)&&g(!1)}y()}function H(e){S._loaded=e._loaded,S._zoom=e._zoom,S._rotation=e._rotation,S._prevzoom=e._prevzoom,S._scaledzoom=e._scaledzoom,S._binds=e._binds,S.documenturl=e.documenturl,S._index=e._index,S._size=e._size,S._viewrotation=e._viewrotation,S._tiled=e._tiled,S._page=e._page,S._reqzoom=e._reqzoom,S._domEl=e._domEl,S._cacheIndex=e._cacheIndex,S.dispose=f,S.zoom=g,S.needsZoom=p,S.getSize=s,S.getScaledSize=I,S.getFitZoom=O,S.getFitMultiplier=r,S.needsRotate=x,S.rotate=_,S.getDomElement=A,S.invalidate=k,S.naturalHeight=l,S.naturalWidth=u,S.on(a)}function d(e){e&&(e.removeAttr("width height"),e.css({width:"auto",height:"auto"}))}function h(){d(S);var e=S.naturalWidth()||0,t=S.naturalHeight()||0,n=e||S.width(),o=t||S.height(),i=s(),a=O(),r=!1;if(pn.Explorer&&!j&&n<40&&S._zoom>oe()&&(n=i.width*a,o=i.height*a),0!==n&&0!==o){S._tiled||(S._size.width=Math.round(n/S._zoom),S._size.height=Math.round(o/S._zoom)),90!==S._viewrotation&&270!==S._viewrotation||(S._size=P(S._size)),S._size.width===U.size.width&&S._size.height===U.size.height||ne(S._size.width,i.width)&&ne(S._size.height,i.height)||(r=!0,q.document.setPageSize(F(),S._size)),null===q.document.getPageSize(F())&&(r=!0,q.document.setPageSize(F(),S._size)),Z.forcepagefit?b():(S._zoom!==Z.zoom||r||0!==S._viewrotation)&&v();var l=I();r&&S.trigger({type:"pagesizechanged",image:S,index:F(),width:S._size.width,height:S._size.height,dx:Math.round(l.width-i.width*a),dy:Math.round(l.height-i.height*a)}),S.trigger({type:"pageresize",image:S,index:F(),width:l.width,height:l.height})}}function f(){S.off(a),S._page=null,S=null}function g(e,t){!p()||S._size.isEmpty()&&!S._tiled?"function"==typeof t&&t.call(this,S):("function"==typeof t&&o.push(t),S._prevzoom=S._reqzoom,e&&!W.loading?S._tiled?S.find("img").each(function(){var e=fn(this);e.animate({height:Math.round(e.height()/S._reqzoom*O()),width:Math.round(e.width()/S._reqzoom*O())},{duration:T,easing:"easeOutQuad",complete:m,queue:!1})}):S.animate({height:Math.round(S._size.height*O()),width:Math.round(S._size.width*O())},{duration:T,easing:"easeOutQuad",complete:m,queue:!1}):(v(),m()))}function p(){if(!S._loaded&&!S._tiled)return!1;var e=!U.vector&&1===S._reqzoom&&1===S._prevzoom&&1<O(),t=ne(S._reqzoom,O())||e;if(!t){var n=Math.abs(S._reqzoom*S._size.width-O()*S._size.width),o=Math.abs(S._reqzoom*S._size.height-O()*S._size.height);n<1&&o<1&&(t=!0)}return!t||!ne(S._scaledzoom,O())}function m(){var e=O();S.trigger({type:"pagezoom",index:F(),height:Math.round(S._size.height*e),width:Math.round(S._size.width*e),prevzoom:S._prevzoom,zoom:e}),0===W.prpr?V():y()}function v(){var e,t,n,o=I(void 0,c()),i=I(),a=S.naturalWidth()||0,r=S.naturalHeight()||0,l=a&&Math.abs(a-o.width)/o.width<.01,s=r&&Math.abs(r-o.height)/o.height<.01;l&&s||(S._tiled&&0!==r&&0!==a?S.find("img").each(function(){var e=fn(this),t=e.prop("naturalHeight"),n=e.prop("naturalWidth");0!==t&&0!==n&&(e.height(t*O()),e.width(n*O()))}):(S.height(o.height),S.width(o.width))),S._domEl.width(i.width),S._domEl.height(i.height),S._scaledzoom=O(),S._tiled?z(S._viewrotation):w(S._viewrotation),e=F(),t=i.width,i.height,null!=(n=ot(e))&&null!=n._num&&n._num.css({left:t-20,right:0})}function b(){var e,t=function(e){var t=1;e=e||S._size;var n={width:Z.forcepagesize.width*(j?1:Z.zoom),height:Z.forcepagesize.height*(j?1:Z.zoom)};(n.width<1||n.height<1)&&(n.width=U.size.width*Z.zoom,n.height=U.size.height*Z.zoom);t=e.width/n.width>e.height/n.height?n.width/e.width:n.height/e.height;return t}();e=t/Z.zoom,q.document.setPageFitMultiplier(F(),e),v()}function y(){0<o.length&&function(e){var t=Array.prototype.slice.call(arguments,1);for(;e.length;)e.shift().apply(this,t)}(o,S)}function x(){var e=q.document.getPageRotation(F());return 0===S._viewrotation&&e!==S._rotation||0!==S._viewrotation}function _(e){if("function"==typeof e&&o.push(e),x()){var t=q.document.getPageRotation(F());if(n=q.document.getPageRotation(F()),(0===S._viewrotation&&n!==S._rotation||0!==S._viewrotation&&(S._viewrotation+S._rotation)%360!==n)&&S&&S._page&&(t=(360+t-S._rotation)%360,!S._tiled&&S._loaded?(w(t),h()):S._tiled&&(z(t),function(){d(S);var e=F(),t=q.document.getPageSize(e);if(90===S._viewrotation||270===S._viewrotation){var n=P(t);S._size.width=n.width,S._size.height=n.height,q.document.setPageSize(e,S._size)}Z.forcepagefit?b():S._zoom===Z.zoom&&0===S._viewrotation||v()}(),0!==(i=t)&&S.find("img").each(function(){var e=fn(this),t={width:e.width(),height:e.height()};90!==i&&270!==i||(t=P(t));var n=e.parent();0!==t.width&&0!==t.height&&(n.width(t.width),n.height(t.height)),n.addClass(_n.atala_page_loading);var o=fn(new Image);o.css("display","none"),n.children().replaceWith(o)}))),0===W.prpr&&S._loaded)return void V()}var i,n;y()}function w(e){var t=c(),n=I(void 0,t),o=0,i=0,a="";90!==e&&270!==e||(o=(n.height-n.width)/2,j&&t.width<t.height&&(o=0),i=(n.width-n.height)/2,n=P(n)),0!==e?(a+=" translate("+o+"px,"+i+"px)",a+="rotate("+e+"deg)",S.css(Pn(a))):S.css(Pn("")),A().css({width:n.width,height:n.height}),S._viewrotation=e}function z(e){var t=I(void 0,c());90!==e&&270!==e||(t=P(t)),A().css({width:t.width,height:t.height}),S._viewrotation=e}function k(e,t){"function"==typeof e&&(t=e,e={}),(M=fn.extend(!0,{},e)).atala_cb=Math.floor(1e9*Math.random()),"function"==typeof t&&o.push(t),V(!0)}function P(e){var t=e.width;return e.width=e.height,e.height=t,e}return S._binds=a,S.documenturl=Z.documenturl,S._index=E?E.mapsto:e,S._loaded=!1,S._size={width:0,height:0,isEmpty:function(){return 0===this.width&&0===this.height}},S._zoom=-1,S._prevzoom=S._zoom,S._scaledzoom=-1,S._rotation=0,S._viewrotation=0,S._tiled=!1,S._tilesV=1,S._tilesH=1,S.dispose=f,S.zoom=g,S.needsZoom=p,S.getSize=s,S.getScaledSize=I,S.getFitZoom=O,S.getFitMultiplier=r,S.needsRotate=x,S.rotate=_,S.getDomElement=A,S.invalidate=k,S.naturalHeight=l,S.naturalWidth=u,function(){S.on(a);var e=Z.pageborderwidth,t={bottom:0,top:0,right:0,left:0};S._loaded=!1,S._reqzoom=-1,S._needToInsert=!0,(Z.direction===vn.Vertical||Z.tabular)&&(t.bottom=Z.pagespacing);(Z.direction===vn.Horizontal||Z.tabular)&&(t.right=Z.pagespacing);var n=A();Z.showpageborder&&n.css({"border-bottom":e+"px solid black","border-right":e+"px solid black","border-top":e+"px solid silver","border-left":e+"px solid silver","margin-bottom":t.bottom+"px","margin-right":t.right+"px"});n.css({display:"inline-block"}),n.addClass(_n.atala_page_loading),V()}(),S}function K(e,t){var n=G(e);n.css({position:"absolute",display:"none","background-color":"white"});var o=null,i=!1;function a(){o._tooltip.hide(),U.number===o._pagenum||nt(o._pagenum)||Ne(o._pagenum),Nt()}function r(e,t){if(Z.forcepagefit){t*=e._ratio;var n=e.ScrollDirection===vn.Vertical?{x:0,y:t}:{x:t,y:0};return se(n.x,n.y)+1}return Math.floor(t/(e._max/q.document.getPageCount()))+1}return t===vn.Horizontal?(o=pn.Firefox?fn('<div class="atala_scrollbar_firefox_x"></div>').appendTo(e):fn('<div class="atala_scrollbar_x"></div>').appendTo(e))._tray=fn("<div/>").css("height","1px").appendTo(o):(pn.Firefox?(o=fn('<div class="atala_scrollbar_firefox_y"></div>').css("width",function(){var e=G(fn("body")),t=G(e);e.css({width:"50px",height:"50px",overflow:"hidden",position:"absolute",visibility:"hidden"}),t.css({width:"100px",height:"100px"});var n=e.width();e.css({"overflow-y":"scroll"});var o=n-e[0].clientWidth;return fn(e).remove(),o}()+1+"px;").appendTo(e),i=!0):o=fn('<div class="atala_scrollbar_y"></div>').appendTo(e),o._explicitSize=i,o._tray=fn("<div/>").css("width","1px").appendTo(o)),ee(o),o._ratio=1,o.ScrollDirection=t,o._tooltip=n,o._pagenum=-1,o._scrollSize=0,o.pageNum=function(e){o._pagenum=e},o.scrollbarHeight=function(){return o.height()-o[0].clientHeight},o.scrollSize=function(e){o._scrollSize=e},o.ratio=function(e){o._ratio=e},o.on({scroll:function(){if(!o.propagationPaused()){clearTimeout(o._tooltip._timeout),N.scroller.stop(),N.scroller.pauseEventPropagation(!0);var e={};o.ScrollDirection===vn.Vertical?(N.scroller.scrollTop(o[0].scrollTop*o._ratio),o._pagenum=y?on()+1:r(o,o[0].scrollTop),e.right=o.outerWidth()+10+"px",e.top=16+Math.round((o[0].offsetHeight-48)/o[0].scrollHeight*o[0].scrollTop)+"px",o.attr("aria-valuenow",o.scrollTop()/o._max)):o.ScrollDirection===vn.Horizontal&&(N.scroller.scrollLeft(o[0].scrollLeft*o._ratio),o._pagenum=y?on()+1:r(o,o[0].scrollLeft),e.bottom=o.outerHeight()+10+"px",e.left=16+Math.round((o[0].offsetWidth-48)/o[0].scrollWidth*o[0].scrollLeft)+"px",o.attr("aria-valuenow",o.scrollLeft()/o._max)),o.ScrollDirection===Z.direction&&Z.showpagenumbertooltip&&("none"===o._tooltip.css("display")&&(o._tooltip.css(e),o._tooltip.show()),Z.showpagenumbertooltip&&o._tooltip.html("Page "+o._pagenum),o._tooltip._timeout=setTimeout(a,1e3))}}}),o}function $(e){e&&e._tooltip&&(clearTimeout(e._tooltip._timeout),e._tooltip.hide())}function ee(t){var n={scroll:function(){t.off(n),t.resumeEventPropagation()}};t._pauseEP=0,t.propagationPaused=function(){return 0<t._pauseEP},t.pauseEventPropagation=function(e){t._pauseEP++,e&&t.on(n)},t.resumeEventPropagation=function(){0<t._pauseEP&&t._pauseEP--}}function te(e){var t=xe(),n=ae(0,e);!W.hidden&&t.height<=0&&t.width<=0&&(W.hidden=!0,function(){var e=this;if(pn.Edge||pn.Explorer)var t=setInterval(function(){jn(this,e),0!==N.scroller.height()&&0!==N.scroller.width()&&(clearInterval(t),W.hidden=!1,ln("viewportunhide"))}.bind(this),500);else{var n=new ResizeObserver(function(){jn(this,e),W.hidden=!1,ln("viewportunhide"),n.unobserve(N.scroller[0])}.bind(this));n.observe(N.scroller[0])}}()),n.width=0<U.smallest.width&&U.smallest.width<n.width&&!j?U.smallest.width:n.width,n.height=0<U.smallest.height&&U.smallest.height<n.height&&!j?U.smallest.height:n.height;var o,i=Math.ceil(t.width/n.width)+2,a=Math.ceil(t.height/n.height)+2;return Z.tabular?(Z.direction===vn.Vertical&&0<Z.columns?i=Z.columns:Z.direction===vn.Horizontal&&0<Z.rows&&(a=Z.rows),o=i*a):Z.direction===vn.Vertical?o=a:Z.direction===vn.Horizontal&&(o=i),o}function ne(e,t){return t<e+.001&&e-.001<t}function oe(){return 0!==U.size.width?Z.minwidth/U.size.width:1}function ie(){return 0!==U.size.width?Z.maxwidth/U.size.width:1}function ae(e,t,n){if(q.document.getPageCount()<=0)return{width:0,height:0};if(n=void 0===n||n,W.newpagedivsize){var o={width:W.newpagedivsize.width,height:W.newpagedivsize.height},i=Z.showpageborder&&n?2*Z.pageborderwidth:0,a=(t||Z.zoom)/W.newpagedivfullzoom;return o.height=Math.round(o.height*a)+i,o.width=Math.round(o.width*a)+i,o}return re(e,t||Z.zoom,Z.showpageborder&&n)}function re(e,t,n){var o,i=fn.extend({},be(e)),a=n?2*Z.pageborderwidth:0;return t*=(o=e,q.document.getPageFitMultiplier(o)),i.height=Math.round(i.height*t)+a,i.width=Math.round(i.width*t)+a,i}function le(e,t){return fe(null,e,t).index}function se(e,t){var n=de(),o=xe();if(Z.direction===vn.Vertical){var i=0;if(N.scrollH&&(i=1,"none"!==N.scrollH.find("div").css("display")||pn.Firefox||(i=N.scrollH.outerHeight(!0))),t>=n.height-o.height-i&&0<W.scrollTarget.Page)return W.scrollTarget.Page-1}var a=N.scrollV&&"none"!==N.scrollV.find("div").css("display")?1:0;if(Z.direction===vn.Horizontal&&e===n.width-o.width-a&&0<W.scrollTarget.Page)return W.scrollTarget.Page-1;var r={x:e+Z.pageselectlocation.x*o.width,y:t+Z.pageselectlocation.y*o.height};return le(r.x,r.y)}function ce(e,t){for(var n={left:0,top:0},o=e;null!=o&&o!==t;o=o.offsetParent)n.left+=o.offsetLeft,n.top+=o.offsetTop;return n}var ue={height:0,isEmpty:function(){return 0===this.width&&0===this.height},width:0,zero:function(){this.width=0,this.height=0},zoom:1};function de(){if(ue.isEmpty()||ue.zoom!==Z.zoom){var e=fe(null,null,null,Z.zoom);ue.height=e.height,ue.width=e.width,ue.zoom=Z.zoom}return ue}function he(){ue.zero(),de()}function fe(e,t,n,o){return ge(0,e,t,n,o)}function ge(e,t,n,o,i){if(Z.tabular)return function(e,t,n,o,i){if(t<e)return{width:0,height:0,index:t};var a=pe(e,n,o,i),r=pe(t,n,o,i);return r.height=Z.direction===vn.Vertical?r.height-a.height:r.height,r.width=Z.direction===vn.Horizontal?r.width-a.width:r.width,r}(e,t,n,o,i);var a=q.document.getPageCount();e=e||0,t=t||0===t?t:a,y&&(a=1,t=e=0);var r={height:0,width:0,index:e};if(Z.direction===vn.Vertical)for(var l=null,s=e;s<a&&s<t&&(r.height+(l=ae(s,i).height)<=o||null==o);s++)r.height+=l+Z.pagespacing,r.index++;else if(Z.direction===vn.Horizontal)for(var c=null,u=e;u<a&&u<t&&(r.width+(c=ae(u,i).width)<=n||null==n);u++)r.width+=c+Z.pagespacing,r.index++;return r.index>=a&&0<a&&(r.index=a-1),r}function pe(e,t,n,o){var i,a,r=q.document.getPageCount(),l={height:0,width:0,index:0},s=me(o);e=null==e?e=r:e,Z.direction===vn.Vertical?(i=s||1,a=Math.ceil(r/i)):Z.direction===vn.Horizontal&&(a=s||1,i=Math.ceil(r/a));var c=ae(0,o);c.width+=Z.pagespacing,c.height+=Z.pagespacing;var u=null==n?Math.floor(e/i):Math.floor(n/c.height),d=null==t?e%i:Math.ceil(t/c.width);return l.height=u*c.height,l.width=d*c.width,l.index=u*i+d,l.index>=r&&0<r&&(l.index=r-1),l}function me(e){if(y)return 1;var t=1;if(Z.tabular){var n=Z.pagespacing||0,o=ae(0,e);Z.direction===vn.Vertical?(t=Math.floor(N.content.width()/o.width),t=Math.min(t,Math.floor((N.content.width()-t*n)/o.width))):Z.direction===vn.Horizontal&&(t=Math.floor(N.content.height()/o.height),t=Math.min(t,Math.floor((N.content.height()-t*n)/o.height)))}return t||1}function ve(e,t){var n=be(e);return(kt(e)+(t||0))%180==0?n:{width:n.height,height:n.width}}function be(e){var t=q.document.getPageSize(e);return t||U.size}function ye(e,t){return q.document.canBeTiled(e,t)}function xe(){return{width:N.scrollV?N.main.width()-N.scrollV.outerWidth():N.main.width(),height:N.scrollH?N.main.height()-N.scrollH.outerHeight():N.main.height()}}function _e(e,t){var n={status:"fail",started:!1,reason:e};return"function"==typeof t&&t.call(),n}function we(e,t,n,o,i,a){var r=ce(e,t);return r.left<=i&&r.left+e.clientWidth>=n&&r.top<=a&&r.top+e.clientHeight>=o}function ze(e,t,n){return t<e.length&&(e.splice(n,0,e.splice(t,1)[0]),!0)}function ke(e){Z.showstatus&&N.status&&N.status.html(e),ln({type:"statusmessage",message:e})}function Pe(e,t){var n;if(1===e.length&&"object"==typeof e[0])n=e[0];else if("string"==typeof e[0]){n={};var o=null;3===e.length?o=e[2]:2===e.length&&(o=e[1]);for(var i=-1<e[0].indexOf(" ")?e[0].split(" "):[e[0]],a=0;a<i.length;a++)n[i[a]]=o}for(var r in n)if(n.hasOwnProperty(r)){var l=null;if(r in d?l=d:c&&r in c.annotations.events?l=c.annotations.events:c&&r in c.forms.events?l=c.forms.events:c&&r in c.document.events&&(l=c.document.events),null==l&&(l=d),null==l[r])t&&(l[r]=[n[r]]);else if(t)l[r].push(n[r]);else if(n[r])for(var s=0;s<l[r].length;s++)l[r][s]===n[r]&&l[r].splice(s,1);else l[r].length=0}}function Te(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function De(e,t,n,o,i){if(null==i&&"function"==typeof o&&(i=o,o=null),e=null==e?N.scroller.scrollLeft():e,t=null==t?N.scroller.scrollTop():t,Z.direction===vn.Horizontal){if(e>N.viewport.width()){var a=de();if(e<a.width&&0<N.content.width()){var r=a.width-(N.edges[0].width()+N.content.width());N.edges[1].width(r)}}}else if(Z.direction===vn.Vertical&&t>N.viewport.height()){var l=de();if(t<l.height&&0<N.content.height()){var s=l.height-(N.edges[0].height()+N.content.height());N.edges[1].height(s)}}N.scroller.stop(),!n||W.loading||W.scrollPos.x===e&&W.scrollPos.y===t?(N.scroller.scrollLeft(e),N.scroller.scrollTop(t),"function"==typeof i&&i.call()):fn.when(N.scroller.animate({scrollLeft:e,scrollTop:t},{duration:o||u,easing:"easeOutQuad",queue:!1})).done(i)}function Ce(e,t){if(N.scroller.is(":animated"))return _e("scrolling",t);var n=fe(U.number+e-1);De(n.width,n.height,!0,t)}function Ee(){if(N.scrollH&&N.scrollV){var e=y?1:q.document.getPageCount();if(N.scrollH.pauseEventPropagation(),N.scrollV.pauseEventPropagation(),Z.direction===vn.Vertical){Me(N.scrollH,"width");var t=y?on():e-1,n=Math.round(fe(e-1).height+ae(t).height);pn.Firefox&&(n+=Math.round(N.scrollH.scrollbarHeight())),N.scrollV.scrollSize(n-(N.scrollV.height()-N.scrollH.scrollbarHeight()-1)),3e4<n?(N.scrollV.ratio(n/(3e4-(N.scrollV.height()-N.scrollH.scrollbarHeight()-1))),N.scrollV._tray.height(3e4)):(N.scrollV._tray.height(n),N.scrollV.ratio(1)),Fe(N.scrollV)}else if(Z.direction===vn.Horizontal){Me(N.scrollV,"height");var o=y?on():e-1,i=Math.round(fe(e-1).width+ae(o).width);N.scrollH.scrollSize(i),3e4<i?(N.scrollH.ratio(i/(3e4-(N.scrollH.width()-N.scrollV.width()-1))),N.scrollH._tray.width(3e4)):(N.scrollH._tray.width(i),N.scrollH.ratio(1)),Fe(N.scrollH),Le(o,null)}N.scrollV._max=Math.max(N.scrollV._tray.height()-N.scrollV.height(),0)+1,N.scrollH._max=Math.max(N.scrollH._tray.width()-N.scrollH.width(),0)+1,N.scrollH.resumeEventPropagation(),N.scrollV.resumeEventPropagation()}}function Se(e,t){if(Z.direction===vn.Vertical){if(N.scrollV)if(N.scrollV.scrollSize(Math.max(N.scrollV._scrollSize+t,0)),1===N.scrollV._ratio&&N.scrollV._scrollSize+t<3e4)N.scrollV._tray.height(N.scrollV._tray.height()+t),N.scrollV._max=Math.max(N.scrollV._tray.height()-N.scrollV[0].clientHeight,0)+1;else{var n=N.scrollV.height()-N.scrollH.scrollbarHeight()-1,o=(3e4-n)*N.scrollV._ratio;3e4<o+t?N.scrollV.ratio((o+t)/(3e4-n)):Ee()}Fe(N.scrollV),Me(N.scrollH,"width")}else if(Z.direction===vn.Horizontal){if(N.scrollH)if(N.scrollH.scrollSize(Math.max(N.scrollH._scrollSize+e,0)),1===N.scrollH._ratio&&N.scrollH._scrollSize+e<3e4)N.scrollH._tray.width(N.scrollH._tray.width()+e),N.scrollH._max=Math.max(N.scrollH._tray.width()-N.scrollH[0].clientWidth,0)+1,N.scrollH.ratio(N.scrollH._scrollSize/N.scrollH._max);else{var i=N.scrollH.width()-N.scrollV.width()-1,a=(3e4-i)*N.scrollH._ratio;3e4<a+e?N.scrollH.ratio((a+e)/(3e4-i)):Ee()}Fe(N.scrollH),Me(N.scrollV,"height")}if((0!==e||0!==t)&&0!==t){var r=N.scroller[0].scrollLeft,l=N.scroller[0].scrollTop;Ue(y?on()+1:se(r,l)+1),ln({type:"scroll",x:r,y:l,dx:0,dy:0})}}function Me(e,t){if(e&&N.pageDivs.length){var n=Math.round(U.size[t]*Z.zoom);if(Z.tabular)n=N.content[t]();else for(var o=y?1:N.pageDivs.length,i=0;i<o;i++)null!=N.pageDivs[i]._index&&(n=Math.max(ae(N.pageDivs[i]._index)[t],n));e._tray[t](n),e.scrollSize(n-e[t]()),Fe(e),e.ratio(1)}}function Fe(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}var Ae=!1;function Oe(e){if(!W.zooming&&!W.scrollBuffer&&N.pageDivs.length){var t=(new Date).getTime(),a=N.scroller[0].scrollLeft,r=N.scroller[0].scrollTop;if(!W.loading){if(!y){var n=a+N.scroller[0].clientWidth,o=r+N.scroller[0].clientHeight,i=le(a,r)+1,l=Math.abs(i-U.number)/me(),s=q.document.getPageCount(),c=N.pageDivs[0]._index,u=N.pageDivs[N.pageDivs.length-1]._index,d=0===l&&(U.number-1<c||U.number-1>u);if(l<N.pageDivs.length&&!d)we(N.edges[1][0],N.scroller[0],a,r,n,o)&&u<s-1?Be(l):we(N.edges[0][0],N.scroller[0],a,r,n,o)&&0<c?je(l):i!==U.number&&null===ot(i-1)&&Ne(i);else{var h=N.scroller[0].scrollLeft,f=N.scroller[0].scrollTop;qe(i,Ae=!1,null),Z.direction===vn.Vertical&&h!==N.scroller[0].scrollLeft&&(N.scroller.scrollLeft(h),Ae=!0),Z.direction===vn.Horizontal&&f!==N.scroller[0].scrollTop&&(N.scroller.scrollTop(f),Ae=!0)}}xt()}if(Ue(y?U.number:se(a,r)+1),!N.scroller.propagationPaused()&&N.scrollH&&N.scrollV){var g=Math.round(a/N.scrollH._ratio),p=Math.round(r/N.scrollV._ratio);g!==N.scrollH.scrollLeft()&&(N.scrollH.pauseEventPropagation(!0),N.scrollH.scrollLeft(g)),p!==N.scrollV.scrollTop()&&(N.scrollV.pauseEventPropagation(!0),N.scrollV.scrollTop(p))}ln({type:"scroll",x:a,y:r,dx:a-W.scrollPos.x,dy:r-W.scrollPos.y}),e&&(W.scrollTimeout&&clearTimeout(W.scrollTimeout),W.scrollTimeout=setTimeout(function(){var e,t,n,o,i;e=a,t=r,n=N.scroller[0].scrollLeft,o=N.scroller[0].scrollTop,i=n===W.scrollPos.x&&o===W.scrollPos.y,e===W.scrollPos.x&&t===W.scrollPos.y&&i?(Nt(),W.scrollTimeout=null,W.loading||xt()):i?i&&Ae?Math.abs(e-W.scrollPos.x)<3&&Math.abs(t-W.scrollPos.y)<3&&(Nt(),W.scrollTimeout=null,W.loading||xt()):i&&j&&U.buffer===Z.maxpagebuffersize&&(Nt(),W.scrollTimeout=null,W.loading||xt()):(Oe({}),W.scrollTimeout=null)},500),W.scrollPos.x=N.scroller[0].scrollLeft,W.scrollPos.y=N.scroller[0].scrollTop,W.scrollPos.t=t),W.scrollBuffer=e?setTimeout(Ie,50):null}}function Ie(){null!==W.scrollBuffer&&(clearTimeout(W.scrollBuffer),W.scrollBuffer=null)}function Ve(){if(Z.direction===vn.Horizontal){var e=N.pageDivs.length?(j?Math.max(U.size.height,U.size.width):U.size.height)*Z.zoom:0;Z.thumbpadding&&"number"==typeof Z.thumbpadding&&(e+=2*Z.thumbpadding),N.edges[0].height(e),N.edges[1].height(e)}}function Le(e,t){t=t||0===t?t:e+N.pageDivs.length-1,t=Math.max(e,t);var n=Z.tabular?me():1,o=Z.tabular?(Math.floor(t/n)+1)*n-t:1,i=fe(e),a=y?1:q.document.getPageCount();y&&(t=e=0);var r=t<a?ae(t):{width:0,height:0},l=y?on():a-1,s=t<a-n?ae(l):{width:0,height:0},c=ge(e,t);c.width+=r.width,c.height+=r.height;var u=ge(t+1,a-1);if(u.width+=s.width,u.height+=s.height,Z.direction===vn.Vertical)N.edges[0].height(i.height),(y?a:q.document.getPageCount())<=t+o?N.scrollH&&0===N.scrollH._tray[0].offsetWidth?N.edges[1].height(N.scrollH[0].offsetHeight-1):N.edges[1].height(0):(N.edges[1].height(u.height),pn.Chrome&&N.content.height(""));else if(Z.direction===vn.Horizontal){if(N.edges[0].width(i.width),(y?a:q.document.getPageCount())<=t+o){var d=i.width+c.width+u.width;N.scrollV&&d>N.scroller[0].clientWidth&&N.content.height()<=N.scroller[0].clientHeight?N.scrollV._explicitSize?N.edges[1].width(N.scrollV.height()<N.scrollV._tray.height()?N.scrollV.width():0):N.edges[1].width(N.scrollV.width()):N.edges[1].width(0)}else N.edges[1].width(u.width),N.edges[1].height(1)}}function He(){return W.activepage}function je(e){if(e=e||1,y)Re(on()-e);else if(0===W.prpr&&0<N.pageDivs.length){var t=me(Z.zoom);Je();for(var n=e;0<n;n--){var o=N.pageDivs[0]._index-t;if(0<=o&&o<q.document.getPageCount()){for(var i=t-1;0<=i;i--){var a=$e(-1);Ze(a),N.content.prepend(a),Ge(a,tt(o+i),o+i)}Le(o,null),Ve()}}setTimeout(Qe,10)}}function Be(e){if(e=e||1,y){Re(on()+e)}else{var t=N.pageDivs[N.pageDivs.length-1]._index+1;if(0===W.prpr&&0<N.pageDivs.length&&t<q.document.getPageCount()){Je();for(var n=me(Z.zoom),o=q.document.getPageCount(),i=e;0<i;i--){var a=N.pageDivs[N.pageDivs.length-1]._index+1;if(a<o){for(var r=a+n-1-N.pageDivs.length,l=0;l<n;l++){var s=$e(1);Ze(s),N.content.append(s),Ge(s,tt(a+l),a+l)}Le(r+1,a),Ve()}}setTimeout(Qe,10)}}}
/**
   * Scrolls the viewer to the given page index and executes the callback when finished.
   * @param {number} index - Index of the page to show.
   * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
   *  @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPage
   */function Re(e,t){Ne(e+1,t)}
/**
   * Scrolls the viewer to the given page number and executes the callback when finished.
   * @param {number} pageNumber - Number of the page to show. Note that page number is expected 1-based.
   * @param {NotificationCallback} [callback]: function to execute after this operation is done
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPageNumber
   * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer#showPage|showPage} instead.
   */function Ne(e,t){var n=this;if(Z.direction===vn.Vertical?N.scrollV&&clearTimeout(N.scrollV._tooltip._timeout):Z.direction===vn.Horizontal&&N.scrollH&&clearTimeout(N.scrollH._tooltip._timeout),e=Math.max(1,e),e=Math.min(q.document.getPageCount(),e),y)qe(e,!1,t);else{if(j||W.zooming||(W.scrollTarget.Page=e),U.number!==e){var o=e-U.number;Math.abs(o)<N.pageDivs.length?Ce(o,t):qe(e,!0,t)}else Ce(0,t);setTimeout(function(){return jn(this,n),W.scrollTarget.Page=0}.bind(this),1e4)}}function qe(e,t,n){var o=q.document.getPageCount(),i=e-1;if(0===W.prpr&&0<o){var a=function(){y?(Ee(),Qe()):Qe(!t),"function"==typeof n&&n.call()};if(Je(),y){if(Z.direction===vn.Vertical){var r=fe(0).height;N.edges[0].height(r)}else if(Z.direction===vn.Horizontal){var l=fe(0).width;N.edges[0].width(l)}Le(0,null),Ve(),We();for(var s=0;s<N.pageDivs.length;s++)Ge(N.pageDivs[s],null,i+s);N.content.append(N.pageDivs[0]),Nt(),Ue(i+1),xt(!1,a)}else{var c=0,u=0,d=i<=0?0:i;if(d+N.pageDivs.length>=o){if(d=o-N.pageDivs.length,Z.tabular){var h=me();d=Math.ceil(d/h)*h}d=Math.max(d,0)}if(Z.direction===vn.Vertical){c=fe(d).height,N.edges[0].height(c),Le(d,null),Ve(),We();for(var f=0;f<N.pageDivs.length;f++)N.content.append(N.pageDivs[f]),Ge(N.pageDivs[f],null,d+f);var g=fe(Math.max(i,0)).height,p=U.number<e?-U.size.height:U.size.height;t&&g!==W.scrollPos.y?(De(null,g+p,!1),De(null,g,!0,a)):a.call()}else if(Z.direction===vn.Horizontal){u=fe(d).width,N.edges[0].width(u),Le(d,null),Ve(),We();for(var m=0;m<N.pageDivs.length;m++)N.content.append(N.pageDivs[m]),Ge(N.pageDivs[m],null,d+m);var v=fe(Math.max(i,0)).width,b=U.number<e?-U.size.width:U.size.width;t&&v!==W.scrollPos.x?(De(v+b,null,!1),De(v,null,!0,a)):a.call()}}}else _e("paused",n)}function Ue(e){var t=q.document.getPageCount();if(0<e&&e<=t){if(U.number!==e||U.numberoutof!==t){if(N.pageLabel.html(e+" / "+t),U.number!==e){U.number=e;for(var n=0;n<N.pageDivs.length;n++){var o=N.pageDivs[n];o._index===e-1?o.addClass(_n.atala_active_page):o.removeClass(_n.atala_active_page)}ln({type:"pagenumberchanged",number:U.number})}U.numberoutof!==t&&(U.numberoutof=t)}}else N.pageLabel.html(""),N.viewport.find("."+_n.atala_active_page).removeClass(_n.atala_active_page),U.numberoutof=0}function We(){for(var e=N.pageDivs.length-1;0<=e;e--)Ze(N.pageDivs[e])}function Ze(e){pn.Explorer&&document.activeElement&&e.has(document.activeElement).length&&N.scroller.focus(),Z.allowannotations&&(pn.Firefox||pn.Edge)&&q.annotations.__clearAllSelection(e),Z.tiling&&e._img&&0<=e._img._cacheIndex&&(N.loadedImgs[e._img._cacheIndex]._needToInsert=!0),e.detach(),null!=e._img&&(e._img._page=null,e._img.getDomElement().detach(),e._img=null),ln({type:"pagerecycled",index:e._index,page:e}),e.removeAttr(wn.atala_page_index)}function Xe(e){Ze(e),e._index=-1,e.removeAttr(wn.atala_page_index),e._img=null,e.remove()}function Ge(t,e,n,o){if(t._index===n&&t._img===e&&!o)return!1;if(o&&!t.nullinserted&&n<0)return!1;if(e&&t._index===n&&!e._needToInsert)return!1;t._index=n,t.attr(wn.atala_page_index,n);var i=j?"Thumbnailer page number "+(n+1):"Viewer page number "+(n+1);(t.attr("role","img").attr("aria-label",i),t._paper)&&fn(t._paper.canvas).attr("aria-hidden","true");if(n>=q.document.getPageCount())return t.hide(),!1;if(t._img&&t._img!==e&&(t._img._page=null,0<t.has(t._img.getDomElement()).length&&t._img.getDomElement().detach(void 0,!0)),t._rubberband&&t._rubberband.reset(),t._img=e,t._img&&((t._img._page=t)._img.attr("alt",i),pn.Firefox&&j&&t._img.attr("aria-hidden","true")),t.css({display:Z.tabular||Z.direction===vn.Horizontal?"inline-block":"block",position:"relative"}),Z.showpagenumber&&(t._num||(t._num=fn('<div class="atala_pg_num"/>'),t._num.addClass(_n.atala_page_number),t.append(t._num)),t._num.text(t._index+1)),t._img&&t._img._binds&&(t._img._binds.pageresize||(t._img._binds.pageresize=function(e){ln({type:"pageresize",page:e.image._page,image:e.image,index:e.image._page?e.image._page._index:q.document.getPageIndexByImageIndex(e.image._index),width:e.width,height:e.height})},t._img.on({pageresize:t._img._binds.pageresize})),t._img._binds.pagesizechanged||(t._img._binds.pagesizechanged=function(e){ln({type:"pagesizechanged",page:t,image:e.image,index:e.index,width:e.width,height:e.height,dx:e.dx,dy:e.dy})},t._img.on({pagesizechanged:t._img._binds.pagesizechanged}))),t._img){var a=t._img.getDomElement();if(t.append(a),t._img.trigger({type:"inserted",page:t}),!t._img._loaded)if(t.nullinserted)if(!j&&Z.tiling&&Z.forcepagefit){var r,l=t.width(),s=t.height();Z.fitting===bn.Width?(r=(l=Math.ceil(U.size.width*Z.zoom))/t.width(),s=Math.ceil(t.height()*r)):Z.fitting===bn.Height&&(r=(s=Math.ceil(U.size.height*Z.zoom))/t.height(),l=Math.ceil(t.width()*r)),t._img.css({width:l,height:s}),q.document.setPageFitMultiplier(t._index,r)}else t._img.css({width:t.width(),height:t.height()});else Ye(t._img,t._index);W.newpagedivsize||t.css({width:"",height:""}),t.nullinserted=!1}else t.nullinserted=!0,W.newpagedivsize||Ye(t,t._index);return ln({type:"pageshown",page:t,index:t._index}),!0}function Ye(e,t){var n=ae(t,null,!1);e.css({width:n.width,height:n.height})}function Je(){W.prpr++}function Qe(e){0!==W.prpr&&(W.prpr--,0!==W.prpr||e||Oe())}function Ke(){W.itch=!0}function $e(e){return 0<e?(ze(N.pageDivs,0,N.pageDivs.length-1),N.pageDivs[N.pageDivs.length-1]):(ze(N.pageDivs,N.pageDivs.length-1,0),N.pageDivs[0])}
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
function et(e,t){var n=fn.Deferred();0<=e.cacheIndex&&N.loadedImgs[e.cacheIndex]?N.loadedImgs[e.cacheIndex].invalidate(t,function(){n.resolve()}):n.resolve();return n.promise()}function tt(e,t,n){"function"==typeof t&&(n=t,t=void 0);var o=q.document.getPageDefinition(e);if(o){if(o.cacheIndex<0||!N.loadedImgs[o.cacheIndex]){var i=W.nextImageCacheIndex++;o.cacheIndex=i,q.document.setPageCacheIndex(e,i),N.loadedImgs[i]=Q(o.index,o.ref,t,function(e){e&&((N.loadedImgs[i]=e)._cacheIndex=i,q.memory.allocate(e)),"function"==typeof n&&n.call()}),Z.allowtext&&q.text&&!j&&q.text.ensurePageTextLoaded(e)}else"function"==typeof n&&n.call();return N.loadedImgs[o.cacheIndex]}}function nt(e){var t=ot(e);if(t){var n=N.scroller[0].scrollLeft,o=N.scroller[0].scrollTop;return we(t[0],N.scroller[0],n,o,n+N.scroller[0].clientWidth,o+N.scroller[0].clientHeight)}return!1}function ot(e){for(var t=null,n=0;n<N.pageDivs.length&&null===t;n++)N.pageDivs[n]._index===e&&(t=N.pageDivs[n]);return t}function it(r,l,s,c,u){var d=this;c&&"function"==typeof c&&(u=c,c=!1);var e=function(){var e=this;jn(this,d);var t,n=y?N.pageDivs[0]:ot(r);if(n){var o=N.scroller[0].scrollLeft,i=N.scroller[0].scrollTop;if((t=ce(n[0],N.scroller[0])).left+=l.x,t.top+=l.y,!c&&t.left>=o&&t.left<=o+N.scroller[0].clientWidth&&t.top>=i&&t.top<=i+N.scroller[0].clientHeight)return void(u&&u())}else(t=fe(y?0:r)).left=t.width+l.x,t.top=t.height+l.y;var a={x:N.scroller[0].clientWidth/2,y:N.scroller[0].clientHeight/2};at(s,yn.BottomLeft)?(a.x=N.scroller[0].clientWidth,a.y=N.scroller[0].clientHeight):at(s,yn.TopLeft)&&(a.x=0,a.y=0),W.scrollTarget.Page=r+1,W.scrollTarget.dx=l.x-a.x,W.scrollTarget.dy=l.y-a.y,De(t.left-a.x,t.top-a.y,!0,u),setTimeout(function(){jn(this,e),W.scrollTarget.Page=0,W.scrollTarget.dx=0,W.scrollTarget.dy=0}.bind(this),1e4)}.bind(this);y&&r!==on()?qe(r+1,!1,e):e()}function at(e,t){return e&&t&&e.x===t.x&&e.y===t.y}var rt,lt=null;function st(){lt&&clearTimeout(lt),lt=setTimeout(function(){ln("documentchanged")},200)}function ct(){N.scroller.stop(),N.scroller.pauseEventPropagation(),Je(),Z.tiling&&Ke()}function ut(){Ee();var e=y?on():q.document.getPageCount()-1;0<N.pageDivs.length&&nt(e)&&Le(N.pageDivs[0]._index),Ve(),N.scroller.resumeEventPropagation(),Qe()}function dt(){W.zooming=!0,ct(),ln("zoomstarted")}function ht(e){var t,n,o,i,a,r,l;e=Math.min(e,ie()),e=Math.max(e,oe()),t=e,n=!1,i=fe(U.number,null,null),a=fe(U.number,null,null,t),r=(N.scroller.scrollLeft()-i.width)/Z.zoom*t,l=(N.scroller.scrollTop()-i.height)/Z.zoom*t,De(a.width+r,a.height+l,n,T,o),Z.zoom=e,xt(!1),bt(e,!1)}function ft(){W.zooming=!1,ut(),ln({type:"zoomchanged",zoom:Z.zoom})}
/**
   * Asynchronously zooms the viewer to the given zoom over the default zoom duration
   * @param {number} zoom - Desired zoom level to zoom to.
   * @param {NotificationCallback} [callback] - function to execute after the zoom is finished animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoom
   */function gt(e,n){var o=this;if(W.zooming)_e("zooming",n);else if(W.zooming=!0,ct(),ln("zoomstarted"),e!==Z.zoom){e=Math.min(e,ie()),e=Math.max(e,oe());var t=y?0:U.number,i=fe(t,null,null),a=fe(t,null,null,e),r=(N.scroller.scrollLeft()-i.width)/Z.zoom*e,l=(N.scroller.scrollTop()-i.height)/Z.zoom*e;Z.zoom=e,xt(!0,function(){var t=this;jn(this,o),bt(e,!0,function(){var e=this;jn(this,t),pt(),De(a.width+r,a.height+l,!1,T,function(){jn(this,e),N.scrollH&&N.scrollH.scrollLeft(N.scroller.scrollLeft()),N.scrollV&&N.scrollV.scrollTop(N.scroller.scrollTop()),null!=n&&n()}.bind(this))}.bind(this))}.bind(this))}else pt(),"function"==typeof n&&n.call()}function pt(){W.zooming=!1,ut(),ln({type:"zoomchanged",zoom:Z.zoom})}function mt(e,t){gt(Z.zoom+(e?-1:1)*Z.zoom*.3,t)}function vt(){N.edges[0]._z=Z.zoom}function bt(e,t,n){if(0<N.edges.length){n="function"==typeof n?(s=[vt,n],function(){for(;s.length;){var e=s.shift();e&&e.apply(this,arguments)}}):vt;var o=Z.direction===vn.Vertical,i=N.pageDivs[0]&&N.pageDivs[0]._img?N.pageDivs[0]._index:0;y&&(i=0);var a=fe(i,null,null,e),r=o?a.height:a.width;if(t&&!W.loading){var l=o?{height:r}:{width:r};N.edges[0].animate(l,{duration:T,easing:"easeOutQuad",complete:n,queue:!1})}else o?N.edges[0].height(r):N.edges[0].width(r),"function"==typeof n&&n.call();yt()}var s}function yt(u){setTimeout(function(){var e=fn("<canvas/>");u=u||Z.zoom;var t=Z.direction===vn.Vertical,n=W.newpagedivsize?W.newpagedivsize:{width:U.size.width*u,height:U.size.height*u},o=Math.max(1,Z.pagespacing),i=me();e[0].width=(n.width+o)*(t?i:1),e[0].height=n.height*(t?1:i);var a=e[0].getContext("2d");a.lineWidth=Z.pageborderwidth,Z.backcolor&&(a.fillStyle=Z.backcolor);for(var r=0;r<i;++r){var l=t?1+r*n.width:1,s=t?1:1+r*n.height;a.strokeRect(l,s,n.width-2,n.height-2),Z.backcolor&&a.fillRect(l+a.lineWidth,s+a.lineWidth,n.width-2*(1+a.lineWidth),n.height-2*(1+a.lineWidth))}var c={backgroundSize:"auto auto",backgroundRepeat:t?"repeat-y":"repeat-x"};N.edges[0].css(c),N.edges[1].css(c)},0)}function xt(e,t){for(var n=0,o=!0,i=function(){if(--n<=0){if(Z.direction===vn.Horizontal){var e=de().width;N.spacer||(N.spacer=G(),N.spacer.css({position:"absolute",top:"-1px",height:"1px"}),N.viewport.append(N.spacer)),N.spacer.width(e)}"function"==typeof t&&t.call(),0===W.prpr&&(pn.Safari||pn.Chrome)&&N.edges[1].hide().show()}},a=0;a<N.pageDivs.length;a++){if(N.pageDivs[a]._img)(N.pageDivs[a]._img.needsZoom()||N.pageDivs[a]._img.needsRotate())&&(o=!1,n++,N.pageDivs[a]._img.needsRotate()?N.pageDivs[a]._img.rotate(i):N.pageDivs[a]._img.needsZoom()&&N.pageDivs[a]._img.zoom(e,i))}o&&i.call()}
/**
   * Asynchronously zooms the viewer to fit to a page.
   * @param {Atalasoft.Utils.Fitting} fit - Type of fitting to fit the page to.
   * @param {number} pageNumber - Page number to fit to.  Note, that it's 1-based.
   * @param {NotificationCallback} callback - Function to execute after the fit is done animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function fit
   */function _t(e,t,n){null!=t?"function"==typeof t&&(n=t,t=U.number):t=U.number;var o=wt(e,t-1),i=o.zoom,a=bn.Width===o.fit&&vn.Vertical===Z.direction,r=bn.Height===o.height;a&&De(0,null,!1),r&&De(null,0,!1),gt(i,n)}function wt(e,t){var n,o,i,a=(n=xe(),o=Z.showpageborder?2*Z.pageborderwidth:0,i={width:n.width-o,height:n.height-o},Z.tabular&&(1<Z.columns&&(i.width=Math.floor((n.width-(Z.pagespacing+o)*Z.columns)/Z.columns)),1<Z.rows&&(i.height=Math.floor((n.height-(Z.pagespacing+o)*Z.rows)/Z.rows))),i),r=re(t,1,!1);0!==r.width&&0!==r.height||(e=null);var l=Z.zoom;switch(e){case bn.None:break;case bn.Best:e=r.width/a.width>r.height/a.height?(l=a.width/r.width,bn.Width):(l=a.height/r.height,bn.Height);break;case bn.Height:l=a.height/r.height;break;case bn.Width:l=a.width/r.width;break;default:l=1,e=bn.None}return{zoom:l,fit:e}}function zt(e){return Z.zoom*q.document.getPageFitMultiplier(e)}function kt(e){return q.document.getPageRotation(e)}function Pt(e,t){t=t||0;var n=kt(e),o=zt(e),i=ve(e,t),a=gn.matrix();a.scale(o,o,0,0),a.rotate(n+t,0,0);var r,l,s=(r=a,l={x:i.width,y:i.height},{x:r.x(l.x,l.y),y:r.y(l.x,l.y)}),c=Math.min(0,s.x),u=Math.min(0,s.y),d=a.invert(),h=d.x(-c,-u),f=d.y(-c,-u);return a.translate(h,f),a}function Tt(e){var t=fn.data(e.currentTarget,"_config"),n=fn.data(e.currentTarget,"_annoConfig");!n&&t&&(n={type:t.icon,rotatable:Z.showrotatetools}),n&&(q.mouseTool.setTool(mn.None,mn.None),q.annotations.drawAnnotation(n,!1,Ct,Dt))}function Dt(){q.mouseTool.setTool(mn.Pan,mn.None)}function Ct(){q.mouseTool.setTool(mn.Pan,mn.None)}
/**
   * Checks whether annotations support is enabled.
   * @private
   */function Et(){return!1===Z.allowannotations&&X("InitError",'The "allowannotations" property in the WebDocumentViewer config is set to false.'),Z.allowannotations}function St(){for(var e=0;e<N.pageDivs.length;e++)N.pageDivs[e]._draw.toFront()}function Mt(){for(var e=0;e<N.pageDivs.length;e++)N.pageDivs[e]._draw.reset()}function Ft(e,t,n){if(e){if(W.loading=!0,We(),U.size.width=e.pagewidth,U.size.height=e.pageheight,U.count=e.pagecount,U.buffer=Z.pagebuffersize,U.dpi=e.dpi,U.vector=!0===e.vector,Z.allowannotations=n.allowannotations,Z.textAnnotationEditorIgnoredKeyCodes=n.textAnnotationEditorIgnoredKeyCodes,Z.multiprocessing=n.multiprocessing,Z.allowforms=n.allowforms,Z.allowtext=n.allowtext,Z.tiling=n.tiling,Z.documenturl=n.documenturl,Z.annotationsurl=n.annotationsurl,Z.formsurl=n.formsurl,q.document.__linkChanges(t),q.annotations&&(q.annotations.clear(),q.annotations.loadAnnotations(e)),q.forms&&(q.forms.clear(),e.forms&&q.forms.loadForms(e)),q.text&&N.search&&N.search.ClearSearch(),n.showbookmarks&&(0<q.document.getBookmarks().length?fn("."+_n.atala_tool_button_bookmarks).button("enable"):hn(),s={top:0,left:0,expanded:[]}),W.scrollTarget.Page=0,W.scrollTarget.dx=0,W.scrollTarget.dy=0,W.zooming=!1,e.zoom)Z.zoom=e.zoom;else{var o=wt(Z.fitting,0);Z.zoom=o.zoom}Lt(e.pagenumber||0),q.mouseTool.setTool(Z.mousetool.type&&!j?Z.mousetool.type:mn.Pan,mn.None),yt(),W.loading=!1,xt(),H=t.__getSelectedPagesIndices,ln({type:"activedocumentchanged"})}}function At(e,t){t&&Yt(!0);for(var n=0;n<e._controllers.document.getPageCount();++n){var o=e._controllers.document.getPageDefinition(n,x);o&&0<=o.cacheIndex&&N.loadedImgs[o.cacheIndex]&&(q.memory.deallocate(N.loadedImgs[o.cacheIndex]),N.loadedImgs[o.cacheIndex].dispose(),N.loadedImgs[o.cacheIndex].remove(),N.loadedImgs[o.cacheIndex]=void 0)}}function Ot(e,o){W.loading=!0;var t={atala_docurl:Z.documenturl,atala_pagebuffer:Z.pagebuffersize,atala_minwidth:Z.minwidth,atala_tiling:Z.tiling,atala_bookmarks:Z.showbookmarks};j&&(t.atala_thumb=j,t.atala_capt_format=Z.thumbcaptionformat),Z.tiling&&N.scroller.addClass(_n.atala_page_loading),null!=e&&("function"==typeof e&&(o=e,e=null),fn.extend(t,e)),Xt({type:"docinfo",serverurl:Z.serverurl,query:"?ataladocinfo=",method:"GET",data:t,cancel:!1,info:{pagewidth:-1,pageheight:-1,pagecount:-1}},function(e){It(e,o)},function(e,t,n){!function(e,t,n,o){if(Z.tiling&&N.scroller.removeClass(_n.atala_page_loading),e.responseText){var i=e.responseText.substr(e.responseText.indexOf("</html>")+7);0<=i.indexOf("\x3c!--")?0<(i=i.replace("\x3c!--","").replace("--\x3e","")).length&&(n="<pre>"+i+"</pre>"):0<e.responseText.indexOf("web.config")&&0<e.responseText.indexOf("customErrors")&&(n+=": web.config customErrors attribute has disabled remote error messages.")}X("DocumentLoadError",n),"function"==typeof o&&o.call(void 0,n)}(e,0,n,o)})}function It(n,o){var e,t;(Z.tiling&&N.scroller.removeClass(_n.atala_page_loading),n&&!1!==n.licensed)?(U.size.width=n.pagewidth,U.size.height=n.pageheight,U.count=n.pagecount,U.buffer=Z.pagebuffersize,U.dpi=n.dpi,U.vector=!0===n.vector,U.caption=n.thumbcaptionformat||(Z.showthumbcaption?"{0}":""),ue.zero(),q.memory.clearEntries(),q.memory.colorDepth=n.colordepth,q.memory.pageSize={width:n.pagewidth,height:n.pageheight},ln({type:"documentinfochanged",info:{count:U.count,dpi:U.dpi,size:{height:U.size.height,width:U.size.width},vector:U.vector,pagesizes:n.pagesizes,bookmarks:n.bookmarks},customData:n.customData}),q.text&&(q.text.clear(),N.search&&N.search.ClearSearch(),n.text&&q.text.loadText(n)),W.loading&&(Z.zoom=1,J(),De(0,0),N.scrollV&&N.scrollV.pageNum(1),Ue(1),_t(Z.fitting,1,function(){if(Ve(),Le(0,N.pageDivs.length-1),y){for(var e=0;e<N.pageDivs.length&&e<U.count;e++)Ge(N.pageDivs[e],null,e);N.content.append(N.pageDivs[0])}else for(var t=0;t<N.pageDivs.length&&t<U.count;t++)N.content.append(N.pageDivs[t]),Ge(N.pageDivs[t],null,t);0<N.pageDivs.length&&N.pageDivs[0].addClass(_n.atala_active_page),n.layers&&n.layers.length?q.annotations.loadAnnotations(n):Z.annotationsurl&&q.annotations&&q.annotations.clear(),q.forms&&(q.forms.clear(),n.forms&&q.forms.loadForms(n)),q.mouseTool.setTool(Z.mousetool.type&&!j?Z.mousetool.type:mn.Pan,mn.None),W.loading=!1,yt(),"function"==typeof o&&o(n.error,n),n.error&&setTimeout(function(){X("DocumentLoadError",n.error)},0)})),W.loading=!1):(t=n&&!1===n.licensed?(e="LicenseException",n.error?n.error:"LicenseException: Handler was unable to find a valid license."):(e="DocumentLoadError","HandlerException: Handler did not return any data."),W.loading=!1,"function"==typeof o&&o.call(void 0,t),e&&t&&X(e,t))}function Vt(){Lt()}function Lt(e){if(J(),0<N.pageDivs.length){var t=q.document.getPageCount(),n="number"==typeof e?e:N.pageDivs[0]._index;n=0<=n?Math.min(n,t-N.pageDivs.length):0;for(var o=0;o<N.pageDivs.length&&o<t;o++){var i=n+o;Ze(N.pageDivs[o]),Ge(N.pageDivs[o],null,i),y&&0<o||N.content.append(N.pageDivs[o])}}if(Le(0<N.pageDivs.length?N.pageDivs[0]._index:0,null),Ve(),Nt(),Ee(),he(),y){Ue((0<N.pageDivs.length?N.pageDivs[0]._index:0)+1)}else{var a=se(N.scroller[0].scrollLeft,N.scroller[0].scrollTop);Ue(a+1),0<=e&&a!==e&&Re(e)}}function Ht(e,t){var n={atala_docurl:Z.documenturl,atala_spath:Z.savepath};function o(e){!function(e){e.error?X("DocumentSaveError",e.error):ke("DocumentSave: success="+e.success);ln({type:"documentsaved",success:e.success,customData:e.customData,fileName:e.fileName})}(e),"function"==typeof t&&t.call()}fn.extend(n,e),Xt({type:"docsave",serverurl:Z.serverurl,query:"?ataladocsave=",method:"POST",data:n,cancel:!1,info:{success:void 0,error:void 0}},o,function(e){var t=[];t.error=e.responseText,o(t)})}function jt(e,t,n){var o=null;return"string"==typeof e?(o={},W.initialized&&n&&(0<e.length?(n.clear(),o=n.createHandlerRequest(Z.serverurl,e,t)):0===e.length&&n.clear()),o.url=e):void 0!==e&&null!=e&&X("openUrlError","string input expected for url."),o}function Bt(){an({annotationsloaded:Wt})}function Rt(){an({formsloaded:Zt})}function Nt(e){if(!(0<N.pageDivs.length&&void 0===N.pageDivs[0]._index))for(var t=0;t<N.pageDivs.length;t++)Ut(N.pageDivs[t],e)}function qt(e,t){var n=ot(e);n&&Ut(n,t)}function Ut(e,t){(Ge(e,tt(e._index),e._index)||t)&&(q.annotations&&q.annotations.showLayer(e._index,e),q.forms&&!j&&q.forms.showLayer(e._index,e),q.text&&!j&&Z.allowtext&&q.text.showLayer(e._index,e))}function Wt(e){e.error&&(X("AnnotationsLoadError",e.error),Z.annotationsurl=""),q.annotations&&rn({annotationsloaded:Wt})}function Zt(e){e.error&&(X("FormsLoadError",e.error),Z.formsurl=""),q.forms&&rn({formsloaded:Zt})}function Xt(o,t,i,n){var a,r,e,l=this,s=(a=o,r=function(e){t(e.request.info)},an({handlerreturned:e=function e(t){t.request===a&&(rn({handlerreturned:e}),"function"==typeof r&&r.call(this,t))}}),e);if(ln({type:"beforehandlerrequest",request:o}),!o.cancel&&(rn({handlerreturned:s}),o.serverurl&&!fn.isEmptyObject(o.data))){if(!(o.info instanceof fn&&"docpage"===o.type)){if("fileupload"!==o.type)return fn.ajax({type:o.method,url:o.serverurl+o.query+"?",dataType:"json",data:o.data,success:t,error:i,crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0});var c="&"+fn.param(o.data),u=new FormData;u.append("file",o.file,o.file.name);var d=fn.ajax({type:o.method,url:o.serverurl+o.query+"??"+c,dataType:"json",data:u,contentType:!1,processData:!1,success:function(e){jn(this,l),e.success&&(e.success=JSON.parse(e.success)),e.canceled&&(e.canceled=JSON.parse(e.canceled)),t(e,o.file.name)}.bind(this),error:function(e,t,n){jn(this,l),i(t,n,o.file.name)}.bind(this),crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0,xhr:function(){var t=this;jn(this,l);var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){jn(this,t),e.lengthComputable&&(n(o.file.name,e.loaded,e.total)||d.abort())}.bind(this),!1),e}.bind(this)});return d}o.info.attr("src",o.serverurl+o.query+"&"+fn.param(o.data))}}
/**
   * Resets the viewer to its default state.
   * @param {OpenUrlCallback} [callback]  - Function to execute when the empty process is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function empty
   */
function Gt(e){W.loading=!0;Yt(),It({pagewidth:0,pageheight:0,pagecount:-1},function(){Ee(),ln({type:"documentunloaded"}),"function"==typeof e&&e.call()})}function Yt(e){var t;W.initialized&&(We(),J(0),e||function(){for(var e=0;e<N.loadedImgs.length;e++)N.loadedImgs[e]&&(N.loadedImgs[e].dispose(),N.loadedImgs[e].remove());N.loadedImgs.length=0}(),N.edges[0].width(0).height(0),N.edges[1].width(0).height(0),N.scrollH&&(N.scrollH.scrollSize(0),Fe(N.scrollH)),N.scrollV&&(N.scrollV.scrollSize(0),Fe(N.scrollV)),y&&Ue(1),t={backgroundImage:"",backgroundSize:"",backgroundRepeat:"",backgroundColor:""},N.edges[0].css(t),N.edges[1].css(t))}
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
function Jt(){return W.initialized}
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
function Qt(e,t){var n=Z.direction===vn.Vertical?me():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),Ce(e,t)}
/**
   * Scrolls to the previous viewable page.
   * @param {number} n - Number of pages to scroll backward.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function previous
   */function Kt(e,t){var n=Z.direction===vn.Vertical?me():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),Ce(-e,t)}
/**
   * Zooms in one level.
   * @param {NotificationCallback} [callback] - Function to execute when the zoom operation is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomIn
   */function $t(e){mt(!1,e)}
/**
   * Zooms out one level.
   * @param  {NotificationCallback} [callback] - Function to execute when the zoom operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomOut
   */function en(e){mt(!0,e)}
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
   */function tn(e,t,n,o){null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null));var i=0,a=!1,r=jt(t,e,q.annotations),l=jt(n||e,e,q.forms);Z.annotationsurl=r?r.url:Z.annotationsurl,Z.formsurl=l?l.url:Z.formsurl;var s,c,u,d,h=function(e,t){--i<=0&&(Nt(!0),ln({type:"documentloaded",customData:null==t?void 0:t.customData}),"function"==typeof o&&o.call(void 0,e,t))};if("string"==typeof e){if(0===e.length)Gt(h);else if(Z.documenturl=e,W.initialized){Yt(),$(N.scrollH),$(N.scrollV),i++;var f={};Z.allowannotations&&r&&r.data&&(Bt(),fn.extend(f,r.data)),Z.allowforms&&l&&l.data&&(Rt(),fn.extend(f,l.data)),a=!0,Ot(f,h)}}else!(e||!(0<Z.documenturl.length)||!t&&""!==t&&!n&&""!==n)||X("openUrlError","string input expected for document url.");a||(r&&(i++,u=r,d=h,q.annotations&&(Bt(),q.annotations.makeHandlerRequest(u,d))),l&&(i++,s=l,c=h,q.forms&&(Rt(),q.forms.makeHandlerRequest(s,c))))}
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
   */function nn(e,t,n,o){"function"==typeof n&&(o=n,n={}),"function"==typeof t&&(o=t,t=Z.savefileformat),"function"==typeof e&&(o=e,e=null),void 0===t&&(t=Z.savefileformat);var i=fn.extend(!0,n,{atala_subpath:e||"",atala_sformat:t});q.annotations&&fn.extend(i,{atala_iuname:Z.annotations.saveusername,atala_annos:q.annotations.stringifyChanges()}),q.forms&&fn.extend(i,{atala_forms:q.forms.stringifyChanges()}),q.document&&fn.extend(i,{atala_document:q.document.stringifyChanges()}),Z.savepreviouslysigneddocument&&fn.extend(i,{atala_savesigned:"true"}),Ht(i,o)}
/**
   * Gets the current page index
   * @returns {number} Zero based index of the current page.
   *
   * Note, that current page index detection could be affected by {@link WebDocumentViewerConfig.pageselectlocation|pageselectlocation} configuration parameter.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function getCurrentPageIndex
   */
function on(){return U.number-1}
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
function an(e,t){return Pe(arguments,!0),a.on.apply(a,arguments),c}
/**
   * Detaches the handler from the event.
   * @param {string} event - the name of the event to unbind.
   * @param {function} [handler] -  the event handler to unbind. If not specified, all handlers are unbound.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function unbind
   */function rn(e,t){return Pe(arguments,!1),a.off.apply(a,arguments),c}
/**
   * Triggers the event.
   * @param {string} event - the name of the event to trigger.
   * @param {Object} [parameters] - the event data.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function trigger
   */function ln(e,t){return a.trigger.apply(a,arguments),c}
/**
   * Gets the current document info
   * @return {{count: *, dpi: number, size: {height: number, width: number}, vector: boolean}} object indicating document main page size, and number of pages
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function getDocumentInfo
   */function sn(e){var t="#"+x+"_"+_n.atala_bookmark_content;!fn(e.target).closest(t).length&&fn(t).is(":visible")&&(dn(),fn(t).remove(),un())}function cn(){var e="#"+x+"_"+_n.atala_bookmark_content;fn(e).is(":visible")&&(dn(),fn(e).remove(),un())}function un(){document.removeEventListener("click",sn)}function dn(){var e="#"+x+"_"+_n.atala_bookmark_content;s.top=fn(e).scrollTop(),s.left=fn(e).scrollLeft(),s.expanded=[],fn("ul.atala-bookmark-active").each(function(){s.expanded.push(fn(this).attr("id"))})}function hn(){fn("#"+(x+"_toolbar_Button_Bookmarks")).button("disable")}
/**
   * [Internal] Gets debug info object
   * @returns debug info object if available, otherwise null
   */
return c.__getDebugInfo=function(){var e={version:Sn.join(".")};Z.debug&&fn.extend(!0,e,{dom:N,controllers:q,page:U});return e}
/**
   * [Internal] Gets the viewer linkage for controls that inherit this one
   * @param viewer object of type WebDocumentViewer
   * @returns linker object if possible, otherwise undefined
   */,c.__getViewerLink=function(e){if(e&&"Atalasoft.Controls.WebDocumentThumbnailer"===e.typeOf){var t=new function(){this.typeOf="__LVlinker",this._id=x,this._config=Z,this._controllers=q,this._dom=N,this._page=U,this._state=W,this._annos=null,this._fields=null,this.stateManager=l,this.__createDialog=E,this.__createDiv=G,this.__createDOM=k,this.__createDropDownButton=S,this.__createDropDownMenu=M,this.__createMenu=C,this.__getPageSize=be,this.__getTabularIndexOffset=me,this.__redrawVisiblePages=Nt,this.__adjustVisiblePages=xt,this.__onDocumentChanged=Vt,this.__startDomManipulation=ct,this.__endDomManipulation=ut,this.__status=ke,this.__updatePageSize=m,this.__silentReloadPage=et,this.__isObjectInRect=we,this.__getIndexFromPos=le,this.__showNext=Be,this.__showPrevious=je,this.__showPageAsync=qe,this.__adjustEdgeHeights=Le,this.__getSelectedPagesIndices=H};return q.document.__linkChanges(t),Z.allowannotations&&(e!==c&&0<Z.annotationsurl.length&&(Z.annotationsurl=""),q.annotations.__linkAnnotations(t)),Z.allowforms&&(e!==c&&0<Z.formurl.length&&(Z.formurl=""),q.forms.__linkForms(t)),Z.allowtext&&q.text&&q.text.__linkText(t),t}},c.dispose=
/**
   * Removes all DOM elements, internal references, and empties memory intensive objects.
   * The WebDocumentViewer will no longer function after a call to this method.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function dispose
   */
function(){if(!j&&l&&l.closeDocument(),Yt(),N.main&&N.main.remove(),N.toolbar&&(N.toolbar.controlgroup("destroy"),N.toolbar.remove(),N.toolbar.annoToolbar&&(N.toolbar.annoToolbar.controlgroup("destroy"),N.toolbar.annoToolbar.remove())),N.search&&N.search.dispose(),N.uploadCtrl&&N.uploadCtrl.remove(),N.main=null,N.toolbar=null,N.scroller=null,N.viewport=null,N.content=null,N.scrollH=null,N.scrollV=null,N.loadedImgs.length=0,N.pageDivs.length=0,N.pageLabel=null,N.status=null,N.search=null,N.uploadCtrl=null,N.edges){for(var e=0;e<N.edges.length;e++)N.edges[e]=null;N.edges=[]}for(var t in q)q.hasOwnProperty(t)&&null!==q[t]&&(q[t].dispose(),q[t]=null);W={prpr:0,batchoperation:0,loading:(U={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,scrollTarget:{Page:0,dx:0,dy:0},hidden:!1,itch:!1}},c.empty=Gt,c.fit=_t,c.getZoom=function(){return Z.zoom},c.isReady=Jt,c.scrollTo=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);De(e,t,n,null,o)}
/**
   * Scrolls by the given deltas, does not account for zoom, i.e. `dx` and `dy` values are passed in window coordinate space.
   * @param {number} dx - Indicating delta of the x axis.
   * @param {number} dy - Indicating delta of the y axis .
   * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function scrollBy
   */,c.scrollBy=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);i=e,a=t,r=n,l=null,s=o,De(N.scroller.scrollLeft()+i,N.scroller.scrollTop()+a,r,l,s);var i,a,r,l,s},c.next=y?Be:Qt,c.previous=y?je:Kt,c.zoom=gt,c.zoomIn=$t,c.zoomOut=en,c.openUrl=c.OpenUrl=tn,c.save=nn,c.uploadFiles=
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
function(e,t,n){if(j)return;q.upload.uploadFiles(e,t,n)}
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
   */,c.uploadFile=function(e,t,n){if(j)return;q.upload.uploadFile(e,t,n)}
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
   */,c.filterFilesForUpload=function(e,t,n){if(j)return;return q.upload.filterFilesPublic(e,t,n)},c.getCurrentPageIndex=on,c.bind=an,c.unbind=rn,c.trigger=ln,c.getDocumentInfo=function(){return{count:q.document.getPageCount(),dpi:U.dpi,size:{height:U.size.height,width:U.size.width},vector:U.vector}},c.setMouseTool=function(e){for(var t in mn)if(mn.hasOwnProperty(t)&&mn[t]===e){q.mouseTool.setTool(e);break}},c.isPageLoaded=function(e){var t=q.document.getPageDefinition(e);return 0<=t.cacheIndex&&N.loadedImgs[t.cacheIndex]&&N.loadedImgs[t.cacheIndex]._loaded}
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
   */,c.reloadPage=function(o,e,t,n,i){var a=fn.Deferred(),r=fn.Deferred(),l=fn.Deferred(),s=fn.Deferred();"function"==typeof n&&(i=n,n=void 0),"function"==typeof t&&(i=t,t=!1),"function"==typeof e&&(i=e,e=!1),"function"==typeof i&&a.done(i);var c=q.document.getPageDefinition(o);if(!c)return a.resolve(),a.promise();0<=c.cacheIndex&&N.loadedImgs[c.cacheIndex]?s=et(c,n):tt(o,n,function(){s.resolve()});var u="string"==typeof e?e:c.uri?null:Z.annotationsurl;Z.allowannotations&&e&&(u||c.uri)?q.annotations.loadAnnotationsUrl(Z.serverurl,u,c.uri,c.index,1,o,function(){r.resolve(!0)}):(e&&q.annotations.loadAnnotations({layers:[[]],offset:o}),r.resolve(!!e));var d="string"==typeof t?t:c.uri?null:Z.formsurl;return Z.allowforms&&t&&(Z.formsurl||d)?q.forms.loadFormUrl(Z.serverurl,d,c.uri,c.index,1,o,function(){l.resolve(!0)}):l.resolve(),fn.when(s,r,l).done(function(e,t,n){(t||n)&&qt(o,!0),a.resolve(o)}),a.promise()},c.showPage=Re,c.showPageNumber=Ne,Fn(),In(),An(),Vn(),c.annotations=Fn.__exposedApi,c.document=In.__exposedApi,c.forms=An.__exposedApi,c.text=Vn.__exposedApi,function(){Jt()||(W={prpr:0,batchoperation:0,loading:(U={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,scrollTarget:{Page:0,dx:0,dy:0},hidden:!1,itch:!1});var e={_config:Z,_id:x,_dom:N,_document:N.loadedImgs,_pages:N.pageDivs,_state:W,_internalEvents:r,_controllers:q,createDOM:k,createDiv:G,createDialog:E,createDropDownButton:S,createDropDownMenu:M,createMenu:C,drawAnnotation:Tt,redrawVisiblePages:Nt,adjustVisiblePages:xt,startDomManipulation:ct,endDomManipulation:ut,redrawPageFromIndex:qt,makeHandlerRequest:Xt,getPageScale:zt,getPageSize:be,getSourcePageSize:ve,getPageRotation:kt,getViewerTransform:Pt,isPageInView:nt,findPageFromIndex:ot,showPagePoint:it,disableBookmarkButton:hn};q.document=new In(c,e,x),c.document=q.document.__exposedApi,Z.allowannotations?(q.annotations=new Fn(c,e,j),c.annotations=q.annotations.__exposedApi):(c.deselectAll=Et,c.createAnnotationOnPage=Et,c.getAnnotationsFromPage=Et,c.deleteAnnotationOnPageAtIndex=Et,c.setAnnotationDefaults=Et,c.setImages=Et,c.setStamps=Et),Z.allowforms&&!q.forms&&(q.forms=new An(c,e),c.forms=q.forms.__exposedApi),Z.allowtext&&(q.text=new Vn(c,e,Z.mousetool?Z.mousetool.text:{}),c.text=q.text.__exposedApi),q.upload=new On(c,e),!1===W.initialized&&(W.initialized=!0,an({throwerror:z,pagedivsresized:g,documentchanged:Vt,pagesizechanged:p}),Z.parent?(Z.parent instanceof fn||(Z.parent=fn(Z.parent)),Z.parent.length||X("InitError","Parent element not found.")):X("InitError","No parent element given."),N.toolbar=(t=Z.toolbarparent||Z.parent,(n=function(e){var t=this,n={id:x+"_toolbar",parent:e,children:[{type:"button",id:"Button_PagePrev",cls:_n.atala_tool_button_page_prev,icon:"page-prev",tooltip:"Previous Page",text:null,onclick:function(){y?je():Kt()}},{type:"pagelabel",id:"Label_PageNumber",cls:_n.atala_page_label},{type:"button",id:"Button_PageNext",cls:_n.atala_tool_button_page_next,icon:"page-next",tooltip:"Next Page",text:null,onclick:function(){y?Be():Qt()}},{type:"button",id:"Button_ZoomOut",cls:_n.atala_tool_button_zoom_out,icon:"zoom-out",tooltip:"Zoom Out",text:"",onclick:function(){en()}},{type:"button",id:"Button_ZoomIn",cls:_n.atala_tool_button_zoom_in,icon:"zoom-in",tooltip:"Zoom In",text:"",onclick:function(){$t()}},{type:"button",id:"Button_FitNone",cls:_n.atala_tool_button_fit_none,icon:"zoom-full",tooltip:"Full Size",text:"",onclick:function(){gt(1)}},{type:"button",id:"Button_FitBest",cls:_n.atala_tool_button_fit_best,icon:"fit-best",tooltip:"Best Fit",text:"",onclick:function(){_t(bn.Best)}},{type:"button",id:"Button_FitWidth",cls:_n.atala_tool_button_fit_width,icon:"fit-width",tooltip:"Fit To Width",text:"",onclick:function(){_t(bn.Width)}}]};return Z.showselecttools&&n.children.splice(5,0,{type:"button",id:"Button_ZoomArea",cls:_n.atala_tool_button_zoom_area,icon:"zoom-area",tooltip:"Zoom Area",text:"",onclick:V}),Z.allowtext&&(n.children.splice(3,0,{type:"button",id:"Button_Text",cls:_n.atala_tool_button_text_tool,icon:"text-tool",tooltip:"Text Selection",text:"",onclick:function(){q.mouseTool.setTool(mn.Text)}}),n.children.splice(3,0,{type:"button",id:"Button_Pan",cls:_n.atala_tool_button_pan_tool,icon:"pan-tool",tooltip:"Pan",text:"",onclick:function(){q.mouseTool.setTool(mn.Pan)}})),Z.showrotatetools&&(n.children.push({type:"button",id:"Button_RotateLeft",cls:_n.atala_tool_button_rotate_left,icon:"rotate-left",tooltip:"Rotate Left",text:"",onclick:L(270)}),n.children.push({type:"button",id:"Button_RotateRight",cls:_n.atala_tool_button_rotate_right,icon:"rotate-right",tooltip:"Rotate Right",text:"",onclick:L(90)})),0<Z.savepath.length&&n.children.unshift({type:"button",id:"Button_Save",cls:_n.atala_tool_button_save,icon:"save",tooltip:"Save Changes",text:null,onclick:function(){nn()}}),!1!==Z.upload.enabled&&n.children.unshift({type:"button",id:"Button_Upload",cls:_n.atala_tool_button_upload,icon:"upload",tooltip:"Upload document",text:null,onclick:function(){!function(){var t=this;j||q.upload.uploadWithUi(function(e){jn(this,t),e?(N.toolbar.controlgroup("enable"),Z.allowannotations&&N.toolbar.annoToolbar.controlgroup("enable"),N.toolbar.find(".atala_page_label, .atala_search_container").removeClass("ui-state-disabled")):(N.toolbar.controlgroup("disable"),N.toolbar.annoToolbar&&N.toolbar.annoToolbar.controlgroup("disable"),N.toolbar.find(".atala_page_label, .atala_search_container").addClass("ui-state-disabled"))}.bind(this))}()}}),!1!==Z.showbookmarks&&n.children.unshift({type:"button",id:"Button_Bookmarks",cls:_n.atala_tool_button_bookmarks,icon:"bookmarks",tooltip:"Show bookmarks",text:null,onclick:function(){!function(){var t=this;if(!j){var e=x+"_"+_n.atala_bookmark_content,n="#"+e;if(0<fn(n).length)return dn(),fn(n).remove(),un();var o,i=q.document.getBookmarks();if(0<i.length){var a=.85*N.main.height();rt=0,Z.allowtext&&Z.mousetool.text.allowsearch||fn("<div/>").css("clear","both").appendTo(N.toolbar);var r=fn("<div/>").addClass("ui-widget").addClass(_n.atala_bookmark_content).css("max-height",a+"px").attr("id",e).appendTo(N.toolbar),l=fn("<ul></ul>");fn('<span id = "atala_bkm_header" class ="'+_n.atala_bookmark_header+'">Bookmarks</span>').appendTo(l),pn.Chrome&&l.attr("aria-labelledby","atala_bkm_header"),l.appendTo(r),i.forEach(function(e){return jn(this,t),function t(e,n){var o=this;if(0<e.Children.length){var i=fn('<li><span class="atala-bookmark-caret"></span></li>'),a=fn("<a>"+e.Text+"</a>");if(pn.Chrome){var r=h();a.attr("id",r),i.attr("aria-labelledby",r)}a.click(function(){q.document.scrollToBookmark(e)}),a.appendTo(i);var l=fn('<ul class = "atala-bookmark-nested"></ul>').attr("id","expandable_bookmark_"+e.id);l.appendTo(i),i.find("span").click(function(){this.parentElement.querySelector(".atala-bookmark-nested").classList.toggle("atala-bookmark-active"),this.classList.toggle("atala-bookmark-caret-down")}),i.appendTo(n);var s=q.document.getChildBookmarks(e);s.forEach(function(e){return jn(this,o),t(e,l)}.bind(this))}else{var c=fn("<li></li>"),u=fn("<a>"+e.Text+"</a>");if(pn.Chrome){var d=h();u.attr("id",d),c.attr("aria-labelledby",d)}u.click(function(){q.document.scrollToBookmark(e)}),u.appendTo(c),c.appendTo(n)}function h(){return"bkm_"+ ++rt}}(e,l)}.bind(this)),r.contextmenu(function(){return!1}),r.show(),o="#"+_n.atala_bookmark_content+x,s.expanded.forEach(function(e){var t=fn("#"+e);t.toggleClass("atala-bookmark-active"),t.parent().children(".atala-bookmark-caret").toggleClass("atala-bookmark-caret-down")}),fn(o).scrollTop(s.top),fn(o).scrollLeft(s.left),setTimeout(function(){document.addEventListener("click",sn)},50),fn(document).one("viewportclick",cn)}}}()}}),Z.toolbarbuttons&&Z.toolbarbuttons.reverse().forEach(function(e){jn(this,t),n.children.unshift({type:"button",id:e.id,cls:e.class,tooltip:e.tooltip,onclick:e.onclick,text:null,icon:e.icon,custom:!0})}.bind(this)),D(n)}(t)).controlgroup(),Z.allowannotations&&(n.annoToolbar=D({id:x+"_toolbar",parent:t,children:[{type:"button",id:"Button_Ellipse",cls:_n.atala_tool_button_ellipse_anno,icon:"ellipse",tooltip:"Draw Ellipse",text:"",onclick:Tt},{type:"button",id:"Button_Highlight",cls:_n.atala_tool_button_highlight_anno,icon:"highlight",tooltip:"Draw Highlight",text:"",onclick:Tt},{type:"button",id:"Button_Line",cls:_n.atala_tool_button_line_anno,icon:"line",tooltip:"Draw Line",text:"",onclick:Tt},{type:"button",id:"Button_Lines",cls:_n.atala_tool_button_lines_anno,icon:"lines",tooltip:"Draw Poly Lines",text:"",onclick:Tt},{type:"button",id:"Button_Freehand",cls:_n.atala_tool_button_freehand_anno,icon:"freehand",tooltip:"Draw Freehand",text:"",onclick:Tt},{type:"button",id:"Button_Polygon",cls:_n.atala_tool_button_polygon_anno,icon:"polygon",tooltip:"Draw Polygon",text:"",onclick:Tt},{type:"button",id:"Button_Rectangle",cls:_n.atala_tool_button_rect_anno,icon:"rectangle",tooltip:"Draw Rectangle",text:"",onclick:Tt},{type:"button",id:"Button_Text_Anno",cls:_n.atala_tool_button_text_anno,icon:"text",tooltip:"Draw Text",text:"",onclick:Tt}]}),n.annoToolbar.addClass(_n.atala_annotation_toolbar),n.annoToolbar.controlgroup()),Z.showstatus&&(N.status=fn('<div id="'+x+'_status"></div>'),N.status.addClass(_n.atala_statusbar),N.status.css("display","inline"),n.append("Status:"),n.append(N.status)),Z.allowtext&&Z.mousetool.text.allowsearch&&(N.search=new I({parent:n})),n),N.toolbar.addClass(_n.atala_toolbar),N.main=G(Z.parent),N.main.addClass(_n.atala_main_container),N.scroller=G(N.main),N.scroller.addClass(_n.atala_scroller),N.main.on({selectstart:b}),N.toolbar.attr("id",x+"_toolbar"),N.main.attr("id",x+"_main"),N.scroller.attr("id",x+"_scroller"),N.main.css({height:"100%",width:"100%",position:"relative"}),N.scroller.css({height:"100%",width:"100%",position:"relative"}),N.viewport=G(N.scroller,x+"_vp"),N.viewport.css({overflow:"hidden",fontSize:0,"touch-action":"none"}),N.viewport.addClass(_n.atala_viewport),N.viewport.attr("tabindex",-1),N.edges[0]=Y(N.viewport,x+"_e0"),N.edges[0].addClass(_n.atala_dom_edge_first),N.content=G(N.viewport,x+"_ct"),N.content.addClass(_n.atala_content),N.content.attr("tabindex",-1),N.content.attr("role","figure"),pn.Explorer&&N.content.attr("aria-label",j?"Thumbnailer":"Viewer"),N.content.css({"-ms-touch-action":"none",fontSize:0,overflow:"hidden"}),Z.direction===vn.Horizontal&&N.content.css({display:"inline-block"}),N.edges[1]=Y(N.viewport,x+"_e1"),N.edges[1].addClass(_n.atala_dom_edge_last),pn.Features.Compatibility&&X("InitError","Compatibility Mode is not supported."),!1===Z.upload.enabled||j||(N.uploadCtrl=q.upload.getUploadControl()),pn.Mobile.Any()?N.scroller.css({overflow:"hidden"}):Z.showscrollbars?(y?N.scroller.css({overflow:"scroll"}):N.scroller.css({overflow:"auto"}),N.scrollH=K(N.main,vn.Horizontal),N.scrollH.attr("id",x+"_sH"),N.scrollH.addClass(_n.atala_scroll_horizontal),N.scrollH.attr("role","scrollbar"),N.scrollH.attr("aria-controls",x+"_scroller"),N.scrollH.attr("aria-orientation","horizontal"),N.scrollH.attr("aria-valuemin","0"),N.scrollH.attr("aria-valuemax","1"),N.scrollH.attr("aria-valuenow","0"),N.scrollV=K(N.main,vn.Vertical),N.scrollV.attr("id",x+"_sV"),N.scrollV.addClass(_n.atala_scroll_vertical),N.scrollV.attr("role","scrollbar"),N.scrollV.attr("aria-controls",x+"_scroller"),N.scrollV.attr("aria-orientation","vertical"),N.scrollV.attr("aria-valuemin","0"),N.scrollV.attr("aria-valuemax","1"),N.scrollV.attr("aria-valuenow","0")):N.scroller.css({overflow:"hidden"}),q.mouseTool=new Ln(c,{_internalEvents:r,_controllers:q,zoomStart:dt,zoom:ht,zoomEnd:ft,getActivePage:He,raiseDrawLayer:St,resetDrawLayer:Mt,getViewerTransform:Pt},N.viewport,N.scroller,fn.extend({allowflick:Z.allowflick},Z.mousetool)),q.memory=new En({highWaterMark:Z.memorythreshold}),q.memory.bind({exceededhighwatermark:f}),q.annotations&&q.annotations.setViewPort(N.viewport),ln("initialized"),Z.direction===vn.Horizontal&&N.viewport.css({"white-space":"nowrap"}),N.viewport.css({display:"table-cell"}),ee(N.scroller),N.scrollH&&N.edges[1].height(N.scrollH.scrollbarHeight()),q.mouseTool.setTool(mn.Pan,mn.None),(Z.documenturl||Z.annotationsurl||Z.formurl)&&tn(Z.documenturl,Z.annotationsurl,Z.formurl,o),fn(v));var t,n}(),c};n(125);function $e(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that shows thumbnails of document pages and annotations.
 * @param {WebThumbnailerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @augments Atalasoft.Controls.WebDocumentViewer
 * @returns {WebDocumentThumbnailer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */function Ee(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){Se(t,e,n[e])})}return t}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Main Atalasoft Namespace definition(s)
 * @namespace Atalasoft
 */n.d(t,"Utils",function(){return Ie}),n.d(t,"Annotations",function(){return Ve}),n.d(t,"Controls",function(){return Le}),n.d(t,"Logger",function(){return He});var Me={WebDocumentThumbnailer:function(e,n){var s,l,h=null,f=e.viewer||null,g=[],p=[],c=null,m=null,u=null,v="atala_dragdata",d="ui-sortable",b="sortable",y="atala_scroll_parent",x=null,_={size:{width:0,height:0},sizes:[{width:0,height:0}],count:0,number:-1,dpi:96,vector:!1},w={base:null,loading:!1,initialized:!1,scrolling:!1,dragdropping:!1,viewer:{zoom:0,pagenumber:0,api:{}},selfapi:{}},o={moves:0,start:{x:NaN,y:NaN}},z={divsize:-1,scale:1,size:0,zoom:1,zoomfull:1},k={direction:vn.Vertical,
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
selecteditemsorder:Je.ItemIndexOrder},t={type:"Atalasoft.Controls.WebDocumentThumbnailer",debug:!0,showpageborder:!0,forcepagefit:!0,toolbarparent:fn("<div/>")},i={
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
thumbdragcomplete:null};function P(){return{get:function(){return h},detachViewer:E,activateViewer:C}}function T(e,t){if(e){var n=t?e.bind:e.unbind,o=t?h.unbind:h.bind;n.call(e,{beforehandlerrequest:Pe,documentloaded:fe,scroll:ye,pagerotated:ze,pageinserted:pe,pageremoved:ve,pagemoved:be}),o.call(h,{pagerotated:ge,pageinserted:ge,pageremoved:ge,pagemoved:ge}),a(e,e.document.events,n),k.allowannotations&&(n.call(e,{annotationresized:ke,annotationmoved:ke,annotationrotated:ke,annotationchanged:ke,annotationcreated:_e,annotationdeleted:we}),e.annotations&&a(e,e.annotations.events,n))}}function a(e,t,n){var o={};for(var i in t)t.hasOwnProperty(i)&&(o[i]=r);n.call(e,o)}function r(){h.trigger.apply(h,arguments)}
/**
   * Checks whether current thumbnailer is controlling referenced viewer.
   *
   * If viewer is linked only to the current thumbnailer, this method always return `true`.
   *
   * If thumbnailer is not linked to any viewer, this method always return `false`.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#isActive
   * @returns {boolean} `true` if current thumbnailer instance is controlling referenced viewer; `false` otherwise.
   */function D(){return f&&(!x||x&&x.isThumbnailerActive(P()))}
/**
   * Takes ownership over referenced viewer, i.e. if shared viewer is currently displaying other document, it's switched to display document from calling thumbnailer.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#activate
   */function C(e,t,n){if(!f&&e&&(m=(f=e).__getViewerLink(h,u),x=m.stateManager),f&&f.isReady()&&(!D()||n)){var o=f&&!D(),i=(a={pagewidth:_.size.width,pageheight:_.size.height,pagecount:_.count,dpi:_.dpi,colordepth:w.base.controllers.memory.colorDepth,vector:_.vector,pagenumber:w.viewer.pagenumber,zoom:w.viewer.zoom},k.allowannotations&&u._annos&&(a.layers=se(u._annos,"items")),k.allowforms&&u._fields&&(a.forms={fields:se(u._fields)}),a);i.customData=null==t?void 0:t.customData,x.activateThumbnailer(P(),i,u,k,n),o&&(T(f,!0),S((l={thumb:{annotations:null,document:null,text:null,getCurrentPageIndex:null,getZoom:null,zoom:null,zoomIn:null,zoomOut:null,next:null,previous:null,save:null,showPage:null,setMouseTool:null},viewer:{reloadPage:function(e){return s=e.reloadPage,X}}}).viewer,r=f,h,w.viewer.api),S(l.thumb,h,r,w.selfapi))}var a,r,l;q(!0)}function E(){if(f&&f.isReady()&&(w.viewer.zoom=f.getZoom(),w.viewer.pagenumber=f.getCurrentPageIndex(),k.allowforms&&w.base.controllers.forms&&m._fields)){var e={forms:{fields:se(m._fields)}};w.base.controllers.forms.loadForms(e)}var t;T(f,!1),t=f,S(M(w.viewer.api),t,w.viewer.api,{}),S(M(w.selfapi),h,w.selfapi,{}),q(!1)}function S(e,t,n,o){for(var i in e)e.hasOwnProperty(i)&&(t.hasOwnProperty(i)&&t[i]&&(o[i]=t[i]),"function"==typeof e[i]?t[i]=e[i](t,n):n.hasOwnProperty(i)&&n[i]&&(t[i]=n[i]))}function M(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=null);return t}e&&("thumbsize"in e&&isFinite(e.thumbsize)&&0<e.thumbsize&&(ue(e.thumbsize),t.forcepagesize={width:e.thumbsize,height:e.thumbsize}),fn.extend(k,e),fn.extend(k,t),k.showpagenumber=k.showpagenumber&&!k.showthumbcaption,"fitting"in e||(k.fitting=k.direction===vn.Vertical?bn.Width:bn.Height),f&&f.config&&(k.allowtext=f.config.allowtext,k.showbookmarks=f.config.showbookmarks,k.tiling=f.config.tiling)),h=Ke.call(this,k,function(e,t){Se(e,t,n)}),u=h.__getViewerLink(h),k=u._config,F=u.__createDiv,u.__getSelectedPagesIndices=V,k.allowdragdrop=!!k.allowdragdrop,k.selectedindex=he(k.selectedindex)?parseInt(k.selectedindex,10):0,k.thumbpadding=he(k.thumbpadding)?parseInt(k.thumbpadding,10):8,k.backcolor=de(k.backcolor,"#DCDCDC"),k.hovercolor=de(k.hovercolor,"#667F9F"),k.selectedcolor=de(k.selectedcolor,"#E0872D"),k.selectedhovercolor=de(k.selectedhovercolor,"#FFC060");var F=function(){},A=function(){};function O(){if(k.debug){var e=A(),t=V();return fn.extend(!0,e,{thumbnailer:{config:k,index:t[0],indices:t,links:{viewer:m,self:u},page:_,thumb:z,state:w}}),e}return null}
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
function V(){var n=this,e=g.slice(0);return k.selecteditemsorder===Je.ItemIndexOrder&&e.sort(function(e,t){return $e(this,n),e-t}.bind(this)),e}function L(e){var t=1,n=function(){--t<=0&&(D()&&x&&f&&C(f,h.getDocumentInfo(),!0),"function"==typeof e&&e.call())};D()&&(x?x.closeDocument(P(),u):f.isReady()&&(t++,f.empty(n))),H(n)}h.getSelectedPageIndex=
/**
   * @summary Gets the selected thumbnail index.
   * @description Gets the selected thumbnail index when Web Document Thumbnailer (WDT) setup to use singleselect. When WDT setup to use multiselect, then this method returns the first element of the selected page indices, with respect of {@link WebDocumentViewerConfig.selecteditemsorder| selecteditemsorder} parameter value.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPageIndex
   * @returns {number}
   */
function(){return V()[0]},h.getSelectedPagesIndices=V,h.selectThumb=U,h.deselectThumb=W,h.isActive=D,h.activate=function(){C(f,h.getDocumentInfo())};var H=function(){};function j(){D()&&(x?x.closeDocument(P(),u):f.empty(),E()),B(),m=f=null}var B=function(){};function R(e,t,n,o){w.base&&fn.each(w.base.dom.pageDivs,function(e,t){t.off(c),t.thumbInitialized=!1}),null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null)),"string"==typeof e&&(x.closeDocument(P(),u),w.viewer.pagenumber=0,w.base&&(w.base.state.scrollPos.x=0,w.base.state.scrollPos.x=0)),N(e,t,n,function(e,t){h.scrollTo(0,0,!1),Se(e,t,o)})}var N=function(){};function q(e){if(w.base){0===g.length&&g.push(0);for(var t=0;t<w.base.dom.pageDivs.length;t++){var n=0<t?w.base.dom.pageDivs[t-1]:null,o=w.base.dom.pageDivs[t],i=!1;-1<g.indexOf(o._index)&&e?(o.removeClass("atala_grouped_selection"),o.addClass(h.domclasses.atala_active_thumb),o.attr("aria-label").endsWith(" Selected")||o.attr("aria-label",o.attr("aria-label")+" Selected"),null!==n&&-1<g.indexOf(n._index)&&(o.addClass("atala_grouped_selection"),n.addClass("atala_grouped_selection")),i=!0):(o.removeClass(h.domclasses.atala_active_thumb),o.removeClass("atala_grouped_selection"),o.attr("aria-label",o.attr("aria-label").replace(" Selected",""))),Q(o,i)}}}
/** 
   * Highlights the thumbnail at the given index, and scrolls to it in the linked viewer, if possible.
   * @param {number|string} index - Index of the page to select. Can be passed as string representation of a number
   * @param {boolean} [append] - Append index to the already selected thumbs or not. Its value ignores in single select mode.
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been selected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#selectThumb
   */function U(e,t,n){var o=this;if(m._controllers.upload&&m._controllers.upload.abort(),!(null===(e=Qe(e))||e<0||e>=h.getDocumentInfo().count||void 0!==t&&"boolean"!=typeof t&&null!==t||void 0!==n&&"function"!=typeof n&&null!==n)){if(t=!!t&&k.selectionmode!==Ye.SingleSelect){if(-1<g.indexOf(e))return;g.push(e)}else V().forEach(function(e){$e(this,o),h.trigger({type:"thumbdeselected",index:e})}.bind(this)),g.length=0,g.push(e);Z(),h.trigger({type:"thumbselected",index:e}),"function"==typeof n&&n()}}
/** 
   * Resets the thumbnail highlight at the given index, and scrolls to the next selected thumbnail in the linked viewer, if possible.
   *
   * This function doesn't deselect the given index in the single select mode, and in multi select mode, if one page is selected.
   * @param {number|string} index - Index of the page to deselect. Can be passed as string representation of a number
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been deselected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#deselectThumb
   */function W(e,t){if(null!==(e=Qe(e))&&(void 0===t||"function"==typeof t||null===t)){var n=g.indexOf(e);-1!==n&&1!==g.length&&(g.splice(n,1),Z(),h.trigger({type:"thumbdeselected",index:e}),"function"==typeof t&&t())}}function Z(){var e=V();if(x?(w.viewer.pagenumber=e[0],C(f,h.getDocumentInfo())):q(!0),!(1<g.length)&&f){var t=f.getCurrentPageIndex(),n=e[0];0<=t&&n!==t&&(w.scrolling=!0,f.showPage(n,xe))}}
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
   */function X(e,t,n,o,i){if(l){var a=Array.prototype.slice.call(arguments);if(f&&f.isReady())if(D()){var r=Array.prototype.slice.call(a);"function"!=typeof(i=a.pop())&&(a=Array.prototype.slice.call(r)),l.apply(this,a).then(function(){s&&s.apply(this,r)})}else l.apply(this,arguments);else l.apply(this,arguments)}}function G(){if(w.base){if(w.initialized&&0<w.base.dom.pageDivs.length&&null!=w.base.dom.pageDivs[0]._img&&!w.base.dom.pageDivs[0]._img._size.isEmpty()){var e=w.base.dom.pageDivs[0]._img._size;e.width>e.height?z.scale=z.size/e.width:z.scale=z.size/e.height,k.tabular&&1<k.columns&&k.direction===vn.Vertical&&ce()}else{var t=w.base.page.size.width/w.base.page.size.height<1,n=Math.ceil(w.base.page.size.height*w.base.config.zoom),o=Math.ceil(w.base.page.size.width*w.base.config.zoom),i=z.size;k.direction===vn.Vertical?z.divsize=Math.ceil(w.base.page.size.width*w.base.config.zoom):k.direction===vn.Horizontal&&(z.divsize=Math.ceil(w.base.page.size.height*w.base.config.zoom)),ue(i=i<=0?z.divsize-2*k.thumbpadding:i),k.tabular&&1<k.columns&&k.direction===vn.Vertical&&ce();var a=t?n:o;z.scale=a?w.base.config.zoom*(z.size/a):1,z.zoomfull=z.scale,k.minwidth>w.base.page.size.width*z.scale&&w.base.page.size.width&&(k.minwidth=w.base.page.size.width*z.scale),w.initialized=!0}var r=k.showpageborder?2*k.pageborderwidth:0,l=z.size+2*k.thumbpadding-r;if(h.trigger({type:"pagedivsresized",height:l,width:l,fullzoom:z.zoomfull,minwidth:k.minwidth}),k.allowdragdrop){w.base.dom.content.addClass(h.domclasses.atala_thumb_draggable),w.base.dom.content.css({minWidth:l,minHeight:l});var s=Math.round(z.size/2);w.base.dom.content.sortable({containment:"window",connectWith:"."+h.domclasses.atala_thumb_draggable,appendTo:document.body,placeholder:h.domclasses.atala_drag_placeholder,cursorAt:{left:s,top:s},delay:k.dragdelay,distance:4,helper:$,opacity:.65,scroll:!0,scrollSensitivity:s,scrollSpeed:10,start:ee,receive:ie,stop:oe,over:te,change:ne,tolerance:"pointer",update:ae,zIndex:100})}fn.each(w.base.dom.pageDivs,function(e,t){t.width(z.size),t.height(z.size),t.thumbInitialized||(t.on(c),t.css({padding:k.thumbpadding,"background-color":k.backcolor,cursor:"pointer","margin-bottom":k.pagespacing+"px","text-align":"center",position:"relative"}),k.tabular?t.css({"margin-right":k.pagespacing+"px"}):k.direction===vn.Horizontal&&t.css({"margin-right":k.pagespacing+"px","margin-bottom":"0px"}),t._paper&&pn.Explorer&&(t._paper.canvas.style.top="",t._paper.canvas.style.width="",t._paper.canvas.style.height=""),t._grips&&(t._grips.push=function(){}),t.thumbInitialized=!0),Y(t._img,t._paper)}),0<w.base.dom.pageDivs.length&&u.__adjustEdgeHeights(w.base.dom.pageDivs[0]._index)}}function Y(e,t,n,o){if(w.base){var i=o||e&&e.getScaledSize(n);if(!i)return;var a=i.width,r=i.height,l=z.size*(w.base.config.zoom/z.zoomfull);if(l<a||l<r){var s,c=a/r<1;r=k.tiling&&0===e._size.width&&0===e._size.height?(s=(n=e.getFitZoom())*(l/(c?r:a)),a=Math.round(e.getSize().width*s),Math.round(e.getSize().height*s)):(s=n*(l/(c?r:a)),a=Math.round(e._size.width*s),Math.round(e._size.height*s)),n=s}e.width(a),e.height(r);var u=e.getDomElement();u[0].style.left="50%",u[0].style.top="50%",u[0].style.position="absolute",u[0].style.marginLeft=-Math.round(a/2)+"px",u[0].style.marginTop=-Math.round(r/2)+"px",t&&(t.canvas.style.left="50%",t.canvas.style.top="50%",t.canvas.style.marginLeft=-Math.round(a/2)+"px",t.canvas.style.marginTop=-Math.round(r/2)+"px",t.canvas.style.zIndex=1),e.trigger({type:"pagezoom",index:e._page._index,height:Math.round(r),width:Math.round(a),prevzoom:w.base.config.zoom,zoom:n})}}function J(e,t,n){var o=e.data("selected")?t:n;e.css("background-color",o)}function Q(e,t){var n=t?k.selectedcolor:k.backcolor;e.data("selected",t),e.css("background-color",n)}function K(e){var t=this;this._initial=e,this._actual=e,this.scrollTop=function(){t._actual.scrollTop()},this.scrollLeft=function(){t._actual.scrollTop()},this.setObject=function(e){t._actual=e,this[0]=t._actual[0]},this.offset=function(){return t._actual.offset()},this.setObject(e)}function $(e,t){w.dragdropping=!0,q(D());var n=fn('<div class="atala_drag_helper"></div>'),o=function(e){var n=this,o=[];return e.hasClass(h.domclasses.atala_active_thumb)&&D()?V().forEach(function(e){$e(this,n);for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t]._index===e){o.push(w.base.dom.pageDivs[t]);break}}.bind(this)):o.push(e),o}(t);1<o.length&&(fn(this).sortable("option","items","> *:not(.atala_grouped_selection)"),fn(this).sortable("refresh"));for(var i=t.hasClass(h.domclasses.atala_active_thumb)&&D()?Math.min(3,V().length):1,a=0;a<o.length||a<i;a++){var r=a<o.length?o[a]:o[0];if(a<i){var l=r.find("."+h.domclasses.atala_page_image_anchor).first().clone();l.css({position:"absolute",left:10*a+"px",top:-10*a+"px",right:"0px",bottom:"0px",margin:"","z-index":-a}),n.append(l)}}w.base.dom.content.append(n);var s=n.scrollParent(),c=w.base.dom.content.data(d)||w.base.dom.content.data(b);return n.hide(),setTimeout(function(){var t=this;c&&(c.scrollParent=new K(s),o.forEach(function(e){$e(this,t),e.data(y,c.scrollParent)}.bind(this))),n.appendTo("body"),n.show()},1),n}function ee(e,t){var n=this;m._controllers.upload.abort();var o=function(e){if(e.hasClass(h.domclasses.atala_active_thumb)&&D())return V();for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t][0]===e[0])return[w.base.dom.pageDivs[t]._index];return null}(t.item);if(null!==o){var i=[];o.forEach(function(e){$e(this,n),i.push(h.document.getPageReference(e))}.bind(this));var a={start:o,end:o[0],updateHandled:!1,pageRefs:i,documenturl:"object"==typeof i[0]&&i[0].uri?i[0].uri:w.base.config.documenturl,thumbLink:u,thumb:h,thumbId:u._id,viewerId:m._id,state:w,externalDropIndex:null,insertAfterSelf:!1};t.item.data(v,a),w.base.controllers.mouseTool.pauseTool(),t.placeholder.width(t.item.width()),t.placeholder.height(t.item.height()),t.placeholder.css({margin:t.item.css("margin"),display:w.base.config.tabular||w.base.config.direction===vn.Horizontal?"inline-block":"block",padding:Math.max(0,w.base.config.thumbpadding-1)}),h.trigger({type:"thumbdragstart",dragindex:a.start[0],dragindices:a.start})}}function te(e,t){if(!pn.Mobile.Any()){var n=t.placeholder.parents("."+h.domclasses.atala_scroller),o=t.item.data(y);n.length&&o&&o[0]!==n.first()[0]&&o.setObject(n.first())}}function ne(e,t){var n=t.item.data(v);if(n){var o=t.placeholder.prev();n.insertAfterSelf=o.length&&t.item[0]===o.first()[0]}}function oe(e,t){var n=this,o=t.item.data(v),i=k.parent.offset().left,a=k.parent.offset().left+k.parent.width(),r=k.parent.offset().top,l=k.parent.offset().top+k.parent.height(),s=t.position.left+t.item.width()/2,c=t.position.top+t.item.height()/2,u=i<s&&s<a&&r<c&&c<l;if(o&&u){w.base.controllers.mouseTool.resumeTool(),o.updateHandled||(o.end=re(t),o.updateHandled=!0),o.insertAfterSelf&&++o.end,o.end=o.start[0]<o.end?o.end-1:o.end;var d={type:"thumbdragend",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,sourcedocument:o.documenturl,target:h,external:!1,pageref:o.pageRefs[0],pagerefs:o.pageRefs,cancel:!1};h.trigger(d,d),d.cancel?fn(this).sortable("cancel"):(m&&D()&&f.isReady()?m._controllers.document.movePages(o.start,o.end):w.base.controllers.document.movePages(o.start,o.end),le(),(g.length=0)<p.length?(p.sort(function(e,t){return $e(this,n),e-t}.bind(this)).forEach(function(e){$e(this,n),U(e,!0)}.bind(this)),p.length=0):U(o.end,!1),d={type:"thumbdragcomplete",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,target:h},w.dragdropping=!1,h.trigger(d,d))}else o&&!u&&fn(this).sortable("cancel");fn(this).sortable("option","items","> *"),fn(this).sortable("refresh"),t.item.data(v,null)}function ie(e,t){var o=this;fn(t.sender).sortable("cancel");var i=t.item.data(v);if(i){i.thumbLink._controllers.mouseTool.resumeTool();var n=w.base.dom.pageDivs.length?w.base.dom.pageDivs[0]._index:0;i.end=i.externalDropIndex+n||0;var a={type:"thumbdragend",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,sourcedocument:i.documenturl,target:h,pageref:i.pageRefs[0],pagerefs:i.pageRefs,external:!0,cancel:!1,copyannotations:!0};if(h.trigger(a.type,a),!a.cancel){var r=[];a.copyannotations&&i.thumb.config.allowannotations&&h.config.allowannotations&&i.start.forEach(function(e){$e(this,o),r.push(i.thumb.annotations.getFromPage(e))}.bind(this)),i.viewerId!==m._id&&i.thumb.selectThumb(i.thumb.getCurrentPageIndex(),!1),w.scrolling=!0,i.thumb.document.removePages(i.start),h.document.insertPages(null,i.pageRefs,i.end),f&&(w.viewer.pagenumber=i.end,C(f,h.getDocumentInfo(),!0)),le(),g.length=0,k.selectionmode===Ye.SingleSelect?U(i.end):i.start.forEach(function(e,t){U(i.end+t,!0)}),r.forEach(function(e,t){if($e(this,o),e)for(var n=0;n<e.length;n++)e[n].update&&delete e[n].update,e[n].getPageIndex&&delete e[n].getPageIndex,h.annotations.createOnPage(e[n],i.end+t)}.bind(this)),h.trigger("thumbdragcomplete",{type:"thumbdragcomplete",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,target:h}),w.dragdropping=!1,i.state.dragdropping=!1}}t.item.data(v,null)}function ae(e,t){var n=t.item.data(v);n&&(w.base.dom.content.has(t.item).length?(n.end=re(t),n.thumbId===u._id&&h.trigger({type:"thumbsreordered",dragindex:n.start[0],dragindices:n.start,dropindex:n.end})):n.externalDropIndex=t.item.index(),n.updateHandled=!0)}function re(e){for(var t=-1,n=e.item.prev().length?e.item.prev().first():[null],o=0;o<w.base.dom.pageDivs.length;++o)if(w.base.dom.pageDivs[o][0]===n[0]){t=w.base.dom.pageDivs[o]._index;break}return t+1}function le(){var e=w.base.dom.scroller[0];if(u.__isObjectInRect(w.base.dom.edges[1][0],e,e.scrollLeft,e.scrollTop,e.scrollLeft+e.clientWidth,e.scrollTop+e.clientHeight)){var t=w.base.dom.pageDivs[0]._index,n=u.__getIndexFromPos(e.scrollLeft,e.scrollTop),o=n-t;o<w.base.dom.pageDivs.length&&0<o?u.__showNext(o):(u.__showPageAsync(n,!1),u.__redrawVisiblePages())}}function se(e,t){var n=[];for(var o in e)if(e.hasOwnProperty(o)){var i=[],a=t?{}:i;for(var r in t&&(a[t]=i),e[o])e[o].hasOwnProperty(r)&&(i[r]=e[o][r].get(),i[r].multiview=!0);n[o]=a}return n}function ce(){if(k.tabular){var e;if(1<k.columns)e=(z.size+2*k.thumbpadding+k.pagespacing)*Math.min(w.base.controllers.document.getPageCount(),k.columns);else if(1<k.rows){var t=Math.ceil(w.base.controllers.document.getPageCount()/k.rows);e=(z.size+2*k.thumbpadding+k.pagespacing)*t}e&&w.base.dom.content.width(e)}}function ue(e){e<=0&&h.trigger({type:"throwerror",name:"Invalid thumb size",msg:"Thumb size cannot be "+e+". Check configuration parameters 'minwidth', 'thumbpadding' and 'thumbsize'. If 'thumbsize' is not specified, then 'minwidth' should be at least (2 * thumbpadding + 1)."}),z.size=e,w.base&&w.base.config.forcepagesize&&(w.base.config.forcepagesize.width=e,w.base.config.forcepagesize.height=e)}function de(e,t){var n="#FFFFFF",o="#FFF",i="white",a="rgb(255, 255, 255)",r=F(null,"dummy");return r.css("backgroundColor",i),r.css("backgroundColor",e),r.css("backgroundColor")===a&&(e=e.toLowerCase())!==i&&e!==n&&e!==o&&e!==a&&(e=t),e}function he(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function fe(){}function ge(e,t){0<w.base.state.batchoperation||("function"==typeof e&&(t=e),G(),u.__redrawVisiblePages(!0),u.__adjustVisiblePages(),w.base&&m&&D()&&f.isReady()?(m.__redrawVisiblePages(!0),m.__adjustVisiblePages(!1,t)):"function"==typeof t&&t())}function pe(e){w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.insertLayer(null,null,e.destindex),w.base.controllers.forms&&w.base.controllers.forms.insertForm(null,null,e.destindex),m._state.batchoperation<=0&&ge())}function me(){ge();var e=f.getCurrentPageIndex();I(e)}function ve(e){w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.removeLayer(e.index),w.base.controllers.forms&&w.base.controllers.forms.removeForm(e.index),m._state.batchoperation<=0&&ge())}function be(e){var n=this;if(w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.moveLayer(e.shiftedsrcindex,e.destindex),w.base.controllers.forms&&w.base.controllers.forms.moveForm(e.shiftedsrcindex,e.destindex),function(){var e=w.base.dom.pageDivs[0]._index;w.base.dom.pageDivs.sort(function(e,t){return e.index()-t.index()});for(var t=0;t<w.base.dom.pageDivs.length;t++){var n=w.base.dom.pageDivs[t];n._index=e+t,null!=n._num&&n._num.text(n._index+1)}}(),m._state.batchoperation<=0&&ge(),w.dragdropping)){var t=e.destindex;p.sort(function(e,t){return $e(this,n),t-e}.bind(this)).forEach(function(e){$e(this,n),e===t&&t--}.bind(this)),p.push(t)}}function ye(){var e=f.getCurrentPageIndex(),t=V();t.length<=1&&t[0]!==e&&!w.scrolling&&U(e)}function xe(){w.scrolling=!1,w.base.state.thumbTargetPage=-1}function _e(e){if(w.base){var t=m._annos[e.page]||null,n=null;t&&(n=t[t.length-1].get()),n&&n.type===e.anno.type&&(n.multiview=!0,w.base.controllers.annotations.createAnnotation(n,e.page))}}function we(e){w.base&&w.base.controllers.annotations.deleteAnnoOnPage(e.page,e.index)}function ze(){w.base&&m._state.batchoperation<=0&&ge()}function ke(e){if(w.base){var t=e.anno.getPageIndex();if(function(e){for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t]._index===e)return!0;return!1}(t))for(var n=w.base.controllers.annotations.getAnnosFromPage(t),o=0;o<n.length;o++)n[o].type===e.anno.type&&n[o].update(!0)}}function Pe(e){if(("docinfo"===e.request.type||"annodata"===e.request.type||"formdata"===e.request.type)&&w.base){e.request.cancel=!0,"docinfo"===e.request.type&&(e.request.info.pagewidth=_.size.width,e.request.info.pageheight=_.size.height,e.request.info.pagecount=_.count,e.request.info.dpi=_.dpi,e.request.info.colordepth=w.base.controllers.memory.colorDepth,e.request.info.vector=_.vector);var t=void 0!==e.request.info.docIndex?e.request.info.docIndex:e.request.info.offset||0,n=-1<e.request.info.length?e.request.info.length+t:void 0;if(e.request.info.offset=e.request.info.offset||0,k.allowannotations&&("annodata"===e.request.type||e.request.data.atala_annurl)){var o=w.base.controllers.annotations.__getDebugInfo().data;e.request.info.layers=se(o.annos.slice(t,n),"items")}if(k.allowforms&&("formdata"===e.request.type||e.request.data.atala_formurl)){var i=w.base.controllers.forms.__getDebugInfo().data;e.request.info.forms={fields:se(i.fields.slice(t,n))}}f.trigger({type:"handlerreturned",request:e.request})}}function Te(){}function De(){}function Ce(e,t,n){for(var o in n)n.hasOwnProperty(o)&&delete n[o]}function Ee(){w.base={config:u._config,controllers:u._controllers,dom:u._dom,page:u._page,state:u._state,stateManager:u.stateManager}}function Se(e,t,n){_.size.width=w.base.page.size.width,_.size.height=w.base.page.size.height,_.count=w.base.page.count,_.dpi=w.base.page.dpi,_.vector=w.base.page.vector,G(),Xe(w.base.dom.scrollH),Xe(w.base.dom.scrollV);var o=function(){D()&&U(k.selectedindex),n&&"function"==typeof n&&n(e)};w.viewer.zoom=0,(D()||x&&!x.isViewerActive())&&C(f,t,!0),o()}function Me(){J(fn(this),k.selectedhovercolor,k.hovercolor)}function Fe(){J(fn(this),k.selectedcolor,k.backcolor)}function Ae(e){if(0===e.button){for(var t=e.currentTarget,n=-1,o=0;o<w.base.dom.pageDivs.length;o++)if(w.base.dom.pageDivs[o][0]===t){n=w.base.dom.pageDivs[o]._index;break}if(-1!==n)if(k.selectionmode===Ye.MultiSelect){var i=e.shiftKey,a=pn.Platform!==Ge.Mac?e.ctrlKey:e.metaKey;if(i){var r=g[g.length-1];if(n<r)for(var l=r-1;n<=l;l--)Oe(l,!0);else for(var s=r+1;s<=n;s++)Oe(s,!0)}else Oe(n,a)}else U(n)}}function Oe(e,t){t=t&&D(),-1!==g.indexOf(e)&&t?W(e):U(e,t)}function Ie(e,t,n){if(!(1<e.originalEvent.touches.length)){e.preventDefault();var o=e.originalEvent.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent(t,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,n,null),e.target.dispatchEvent(i)}}function Ve(e){if(o.moves=0,o.start={x:NaN,y:NaN},e.originalEvent.touches&&1===e.originalEvent.touches.length){var t=e.originalEvent.touches[0];o.start.x=t.screenX,o.start.y=t.screenY}Ie(e,"mouseover",0),Ie(e,"mousedown",0)}function Le(e){if(e.originalEvent.touches&&e.originalEvent.touches.length){var t=e.originalEvent.touches[0];(1<e.originalEvent.touches.length||5<Math.abs(o.start.x-t.screenX)||5<Math.abs(o.start.y-t.screenY))&&o.moves++,Ie(e,"mousemove",0)}}function He(e){Ie(e,"mouseup",0),0<o.moves?o.moves=0:Ie(e,"click",0),Ie(e,"mouseout",0)}function je(){w.dragdropping&&(q(D()),w.base.dom.content.sortable("refresh"))}function Be(e){if(k.showthumbcaption){if(!e.page._caption){var t=fn("<div/>");t.css({left:"3%",bottom:"16px",width:"94%",position:"absolute",zIndex:1,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),t.addClass(h.domclasses.atala_thumb_caption),e.page._caption=t,e.page.append(t)}var n=e.page._index+1+"";u._page.caption&&(n=u._page.caption.replace("{0}",n),e.page.attr("title",n)),e.page._caption.text(n)}e.page&&e.page._img&&!e.page._img._loaded&&Y(e.page._img,e.page._paper),Q(e.page,-1<g.indexOf(e.page._index)&&D())}function Re(e){e.image&&(e.image._loaded?e.page&&Y(e.image,e.page._paper,z.scale,{width:e.width,height:e.height}):e.image.css({position:"absolute"}))}function Ne(e){m&&m.__status&&m.__status(e.message)}function qe(){if(w.base){var e=w.base.page.size.width/w.base.page.size.height<1,t=Math.ceil(w.base.page.size.height*w.base.config.zoom),n=Math.ceil(w.base.page.size.width*w.base.config.zoom),o=Math.max(t,n),i=w.base.config.zoom*(o/(e?t:n));z.zoom=w.base.config.zoom/z.zoomfull,z.scale=i,fn.each(w.base.dom.pageDivs,function(e,t){t.width(o),t.height(o)})}}function Ue(){}function We(){}function Ze(e){m&&x&&f&&f.isReady()&&m.__updatePageSize(e,w.base.controllers.document,w.base.page.size,x.isThumbnailerActive(P()))}function Xe(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}return f&&(m=f.__getViewerLink(h,u),x=m.stateManager),h.bind({statusmessage:Ne,pagerotated:ge,pageinserted:ge,pageremoved:ge,pagemoved:ge,viewportunhide:me}),h.bind({annotationsloaded:Te,formsloaded:De,contextmenu:Ce,documentloaded:Ee,pageshown:Be,pageresize:Re,scroll:je,zoomchanged:qe,zoomstarted:Ue,zoomfinished:We,pagesizechanged:Ze}),H=h.empty,B=h.dispose,N=h.openUrl,A=h.__getDebugInfo,I=h.showPage,h.empty=L,h.dispose=j,h.openUrl=h.OpenUrl=R,h.__getDebugInfo=O,h.scrollToThumb=I,h.zoom=h.zoomIn=h.zoomOut=function(){},l=h.reloadPage,h.reloadPage=X,delete h.fit,fn.extend(h.events,i),c={click:Ae,touchstart:Ve,touchmove:Le,touchend:He,mouseenter:Me,mouseleave:Fe},h},WebDocumentViewer:Ke,Version:Sn};function Fe(){return"object"==typeof exports&&"object"==typeof e}function Ae(){return"function"==typeof define&&n(126)}function Oe(){return!!self.Atalasoft}
/**
 * @namespace Utils
 * @memberof Atalasoft
 */
var Ie=_,Ve={AnnotationTypes:_e},Le=Fe()||Ae()||!Oe()?Me:Ee({},self.Atalasoft.Controls,Me),He=Fe()||Ae()||!Oe()?{}:Ee({},self.Atalasoft.Logger);
/**
 * @namespace Annotations
 * @memberof Atalasoft
 */}])});