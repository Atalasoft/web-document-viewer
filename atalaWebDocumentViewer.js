//-------------------------------------------------------------------------------------------------
//
//  Web Document Viewer object cross browser client-side script. 
//  (C) 2000-2024 Tungsten Automation. All Rights Reserved.
//
//  This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)
//  Permission for usage and modification of this code is only permitted 
//  with the purchase of a source code license.
//-------------------------------------------------------------------------------------------------
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):"function"==typeof define&&define.amd?define(["jquery","raphael","jquery-ui","clipboard"],t):"object"==typeof exports?exports.Atalasoft=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):e.Atalasoft=t(e.jQuery,e.Raphael,e.jQuery.ui,e.ClipboardJS)}(window,function(n,o,i,a){return function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=127)}([function(e,t,n){var u=n(2),d=n(24).f,h=n(16),f=n(19),g=n(45),p=n(92),v=n(49);e.exports=function(e,t){var n,o,i,a,r,l=e.target,s=e.global,c=e.stat;if(n=s?u:c?u[l]||g(l,{}):(u[l]||{}).prototype)for(o in t){if(a=t[o],i=e.noTargetGet?(r=d(n,o))&&r.value:n[o],!v(s?o:l+(c?".":"#")+o,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;p(a,i)}(e.sham||i&&i.sham)&&h(a,"sham",!0),f(n,o,a,e)}}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(e,t,n){var o=n(26)("wks"),i=n(47),a=n(2).Symbol,r=n(77);e.exports=function(e){return o[e]||(o[e]=r&&a[e]||(r?a:i)("Symbol."+e))}},function(e,t,n){var o=n(7);e.exports=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){e.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var o=n(5),i=n(71),a=n(4),r=n(25),l=Object.defineProperty;t.f=o?l:function(e,t,n){if(a(e),t=r(t,!0),a(n),i)try{return l(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var o=n(20),i=Math.min;e.exports=function(e){return 0<e?i(o(e),9007199254740991):0}},function(e,t,n){"use strict";var h=n(37),f=n(20),g=n(9),p=n(21),v=n(53),m=n(52),b=Math.max,x=Math.min,o=n(29)("splice");n(0)({target:"Array",proto:!0,forced:!o},{splice:function(e,t){var n,o,i,a,r,l,s=p(this),c=g(s.length),u=h(e,c),d=arguments.length;if(0===d?n=o=0:o=1===d?(n=0,c-u):(n=d-2,x(b(f(t),0),c-u)),9007199254740991<c+n-o)throw TypeError("Maximum allowed length exceeded");for(i=v(s,o),a=0;a<o;a++)(r=u+a)in s&&m(i,a,s[r]);if(n<(i.length=o)){for(a=u;a<c-o;a++)l=a+n,(r=a+o)in s?s[l]=s[r]:delete s[l];for(a=c;c-o+n<a;a--)delete s[a-1]}else if(o<n)for(a=c-o;u<a;a--)l=a+n-1,(r=a+o-1)in s?s[l]=s[r]:delete s[l];for(a=0;a<n;a++)s[a+u]=arguments[a+2];return s.length=c-o+n,i}})},function(e,t,n){var o=n(103),i=n(104),a=n(16),r=n(2);for(var l in o){var s=r[l],c=s&&s.prototype;if(c&&c.forEach!==i)try{a(c,"forEach",i)}catch(e){c.forEach=i}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){"use strict";var k=n(4),o=n(21),P=n(9),T=n(20),a=n(6),D=n(54),C=n(41),M=Math.max,E=Math.min,h=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,g=/\$([$&`']|\d\d?)/g;n(42)("replace",2,function(i,_,w){return[function(e,t){var n=a(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):_.call(String(n),e,t)},function(e,t){var n=w(_,e,this,t);if(n.done)return n.value;var o=k(e),i=String(this),a="function"==typeof t;a||(t=String(t));var r=o.global;if(r){var l=o.unicode;o.lastIndex=0}for(var s=[];;){var c=C(o,i);if(null===c)break;if(s.push(c),!r)break;""===String(c[0])&&(o.lastIndex=D(i,P(o.lastIndex),l))}for(var u,d="",h=0,f=0;f<s.length;f++){c=s[f];for(var g=String(c[0]),p=M(E(T(c.index),i.length),0),v=[],m=1;m<c.length;m++)v.push(void 0===(u=c[m])?u:String(u));var b=c.groups;if(a){var x=[g].concat(v,p,i);void 0!==b&&x.push(b);var y=String(t.apply(void 0,x))}else y=z(g,i,p,v,b,t);h<=p&&(d+=i.slice(h,p)+y,h=p+g.length)}return d+i.slice(h)}];function z(a,r,l,s,c,e){var u=l+a.length,d=s.length,t=g;return void 0!==c&&(c=o(c),t=f),_.call(e,t,function(e,t){var n;switch(t.charAt(0)){case"$":return"$";case"&":return a;case"`":return r.slice(0,l);case"'":return r.slice(u);case"<":n=c[t.slice(1,-1)];break;default:var o=+t;if(0===o)return e;if(d<o){var i=h(o/10);return 0===i?e:i<=d?void 0===s[i-1]?t.charAt(1):s[i-1]+t.charAt(1):e}n=s[o-1]}return void 0===n?"":n})}})},function(e,t,n){"use strict";var d=n(58),x=n(4),h=n(6),y=n(110),_=n(54),w=n(9),z=n(41),f=n(55),o=n(1),g=[].push,k=Math.min,P=4294967295,T=!o(function(){return!RegExp(P,"y")});n(42)("split",2,function(i,v,m){var b;return b="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){var n=String(h(this)),o=void 0===t?P:t>>>0;if(0===o)return[];if(void 0===e)return[n];if(!d(e))return v.call(n,e,o);for(var i,a,r,l=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,u=new RegExp(e.source,s+"g");(i=f.call(u,n))&&!(c<(a=u.lastIndex)&&(l.push(n.slice(c,i.index)),1<i.length&&i.index<n.length&&g.apply(l,i.slice(1)),r=i[0].length,c=a,l.length>=o));)u.lastIndex===i.index&&u.lastIndex++;return c===n.length?!r&&u.test("")||l.push(""):l.push(n.slice(c)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:v.call(this,e,t)}:v,[function(e,t){var n=h(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):b.call(String(n),e,t)},function(e,t){var n=m(b,e,this,t,b!==v);if(n.done)return n.value;var o=x(e),i=String(this),a=y(o,RegExp),r=o.unicode,l=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(T?"y":"g"),s=new a(T?o:"^(?:"+o.source+")",l),c=void 0===t?P:t>>>0;if(0===c)return[];if(0===i.length)return null===z(s,i)?[i]:[];for(var u=0,d=0,h=[];d<i.length;){s.lastIndex=T?d:0;var f,g=z(s,T?i:i.slice(d));if(null===g||(f=k(w(s.lastIndex+(T?0:d)),i.length))===u)d=_(i,d,r);else{if(h.push(i.slice(u,d)),h.length===c)return h;for(var p=1;p<=g.length-1;p++)if(h.push(g[p]),h.length===c)return h;d=u=f}}return h.push(i.slice(u)),h}]},!T)},function(e,t,n){var o=n(35),i=n(6);e.exports=function(e){return o(i(e))}},function(e,t,n){var o=n(8),i=n(34);e.exports=n(5)?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){"use strict";var c=n(7),u=n(39),d=n(37),h=n(9),f=n(15),g=n(52),p=n(3)("species"),v=[].slice,m=Math.max,o=n(29)("slice");n(0)({target:"Array",proto:!0,forced:!o},{slice:function(e,t){var n,o,i,a=f(this),r=h(a.length),l=d(e,r),s=d(void 0===t?r:t,r);if(u(a)&&("function"!=typeof(n=a.constructor)||n!==Array&&!u(n.prototype)?c(n)&&null===(n=n[p])&&(n=void 0):n=void 0,n===Array||void 0===n))return v.call(a,l,s);for(o=new(void 0===n?Array:n)(m(s-l,0)),i=0;l<s;l++,i++)l in a&&g(o,i,a[l]);return o.length=i,o}})},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var l=n(2),s=n(16),c=n(12),u=n(45),o=n(73),i=n(74),a=i.get,d=i.enforce,h=String(o).split("toString");n(26)("inspectSource",function(e){return o.call(e)}),(e.exports=function(e,t,n,o){var i=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,r=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||c(n,"name")||s(n,"name",t),d(n).source=h.join("string"==typeof t?t:"")),e!==l?(i?!r&&e[t]&&(a=!0):delete e[t],a?e[t]=n:s(e,t,n)):a?e[t]=n:u(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&a(this).source||o.call(this)})},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?o:n)(e)}},function(e,t,n){var o=n(6);e.exports=function(e){return Object(o(e))}},function(e,t,n){"use strict";var o=n(40)(2),i=n(29)("filter");n(0)({target:"Array",proto:!0,forced:!i},{filter:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var o=n(5),i=n(8).f,a=Function.prototype,r=a.toString,l=/^\s*function ([^ (]*)/;!o||"name"in a||i(a,"name",{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(e){return""}}})},function(e,t,n){var o=n(5),i=n(33),a=n(34),r=n(15),l=n(25),s=n(12),c=n(71),u=Object.getOwnPropertyDescriptor;t.f=o?u:function(e,t){if(e=r(e),t=l(t,!0),c)try{return u(e,t)}catch(e){}if(s(e,t))return a(!i.f.call(e,t),e[t])}},function(e,t,n){var i=n(7);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var o=n(2),i=n(45),a="__core-js_shared__",r=o[a]||i(a,{});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.0.1",mode:n(70)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){var o=n(75),i=n(48).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,i)}},function(e,t,n){var o=n(75),i=n(48);e.exports=Object.keys||function(e){return o(e,i)}},function(e,t,n){var o=n(1),i=n(3)("species");e.exports=function(t){return!o(function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},function(e,t,n){"use strict";var o=n(15),i=[].join,a=n(35)!=Object,r=n(81)("join",",");n(0)({target:"Array",proto:!0,forced:a||r},{join:function(e){return i.call(o(this),void 0===e?",":e)}})},function(e,t,n){"use strict";var o=n(40)(1),i=n(29)("map");n(0)({target:"Array",proto:!0,forced:!i},{map:function(e){return o(this,e,arguments[1])}})},function(e,t){e.exports=n},function(e,t,n){"use strict";var o={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!o.call({1:2},1);t.f=a?function(e){var t=i(this,e);return!!t&&t.enumerable}:o},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var o=n(1),i=n(18),a="".split;e.exports=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==i(e)?a.call(e,""):Object(e)}:Object},function(e,t){e.exports={}},function(e,t,n){var o=n(20),i=Math.max,a=Math.min;e.exports=function(e,t){var n=o(e);return n<0?i(n+t,0):a(n,t)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var o=n(18);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){var x=n(100),y=n(35),_=n(21),w=n(9),o=n(53);e.exports=function(d,e){var h=1==d,f=2==d,g=3==d,p=4==d,v=6==d,m=5==d||v,b=e||o;return function(e,t,n){for(var o,i,a=_(e),r=y(a),l=x(t,n,3),s=w(r.length),c=0,u=h?b(e,s):f?b(e,0):void 0;c<s;c++)if((m||c in r)&&(i=l(o=r[c],c,a),d))if(h)u[c]=i;else if(i)switch(d){case 3:return!0;case 5:return o;case 6:return c;case 2:u.push(o)}else if(p)return!1;return v?-1:g||p?p:u}}},function(e,t,n){var i=n(18),a=n(55);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},function(e,t,n){"use strict";var d=n(16),h=n(19),f=n(1),g=n(3),p=n(55),v=g("species"),m=!f(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),b=!f(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]});e.exports=function(n,e,t,o){var i=g(n),a=!f(function(){var e={};return e[i]=function(){return 7},7!=""[n](e)}),r=a&&!f(function(){var e=!1,t=/a/;return t.exec=function(){return e=!0,null},"split"===n&&(t.constructor={},t.constructor[v]=function(){return t}),t[i](""),!e});if(!a||!r||"replace"===n&&!m||"split"===n&&!b){var l=/./[i],s=t(i,""[n],function(e,t,n,o,i){return t.exec===p?a&&!i?{done:!0,value:l.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),c=s[0],u=s[1];h(String.prototype,n,c),h(RegExp.prototype,i,2==e?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}),o&&d(RegExp.prototype[i],"sham",!0)}}},function(e,t,n){"use strict";var o=n(40)(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),n(0)({target:"Array",proto:!0,forced:a},{find:function(e){return o(this,e,1<arguments.length?arguments[1]:void 0)}}),n(60)(i)},function(e,t,n){"use strict";var o=n(85),i=n(111)("trim");n(0)({target:"String",proto:!0,forced:i},{trim:function(){return o(this,3)}})},function(e,t,n){var o=n(2),i=n(16);e.exports=function(t,n){try{i(o,t,n)}catch(e){o[t]=n}return n}},function(e,t,n){var o=n(26)("keys"),i=n(47);e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,n){var o=n(1),i=/#|\.prototype\./,a=function(e,t){var n=l[r(e)];return n==c||n!=s&&("function"==typeof t?o(t):!!t)},r=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=a.data={},s=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},function(e,t,n){var o=n(4),i=n(97),a=n(48),r=n(98),l=n(72),s=n(46)("IE_PROTO"),c="prototype",u=function(){},d=function(){var e,t=l("iframe"),n=a.length,o="script";for(t.style.display="none",r.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object</"+o+">"),e.close(),d=e.F;n--;)delete d[c][a[n]];return d()};e.exports=Object.create||function(e,t){var n;return null!==e?(u[c]=o(e),n=new u,u[c]=null,n[s]=e):n=d(),void 0===t?n:i(n,t)},n(36)[s]=!0},function(e,t,n){"use strict";var o=n(39),i=n(7),c=n(21),u=n(9),d=n(52),h=n(53),a=n(3)("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",r=!n(1)(function(){var e=[];return e[a]=!1,e.concat()[0]!==e}),l=n(29)("concat"),p=function(e){if(!i(e))return!1;var t=e[a];return void 0!==t?!!t:o(e)},s=!r||!l;n(0)({target:"Array",proto:!0,forced:s},{concat:function(e){var t,n,o,i,a,r=c(this),l=h(r,0),s=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?r:arguments[t],p(a)){if(i=u(a.length),f<s+i)throw TypeError(g);for(n=0;n<i;n++,s++)n in a&&d(l,s,a[n])}else{if(f<=s)throw TypeError(g);d(l,s++,a)}return l.length=s,l}})},function(e,t,n){"use strict";var i=n(25),a=n(8),r=n(34);e.exports=function(e,t,n){var o=i(t);o in e?a.f(e,o,r(0,n)):e[o]=n}},function(e,t,n){var o=n(7),i=n(39),a=n(3)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){"use strict";var o=n(105);e.exports=function(e,t,n){return t+(n?o(e,t,!0).length:1)}},function(e,t,n){"use strict";var o,i,r=n(56),l=RegExp.prototype.exec,s=String.prototype.replace,a=l,c=(o=/a/,i=/b*/g,l.call(o,"a"),l.call(i,"a"),0!==o.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(a=function(e){var t,n,o,i,a=this;return u&&(n=new RegExp("^"+a.source+"$(?!\\s)",r.call(a))),c&&(t=a.lastIndex),o=l.call(a,e),c&&o&&(a.lastIndex=a.global?o.index+o[0].length:t),u&&o&&1<o.length&&s.call(o[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o}),e.exports=a},function(e,t,n){"use strict";var o=n(4);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){var o=n(58),i=n(6);e.exports=function(e,t,n){if(o(t))throw TypeError("String.prototype."+n+" doesn't accept regex");return String(i(e))}},function(e,t,n){var o=n(7),i=n(18),a=n(3)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},function(e,t,n){var o=n(3)("match");e.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[o]=!1,"/./"[t](n)}catch(e){}}return!1}},function(e,t,n){var o=n(3)("unscopables"),i=n(50),a=n(16),r=Array.prototype;null==r[o]&&a(r,o,i(null)),e.exports=function(e){r[o][e]=!0}},function(e,t,n){"use strict";var c=n(20),u=n(112),d=n(113),o=1..toFixed,i=Math.floor,a=[0,0,0,0,0,0],h=function(e,t){for(var n=-1,o=t;++n<6;)o+=e*a[n],a[n]=o%1e7,o=i(o/1e7)},f=function(e){for(var t=6,n=0;0<=--t;)n+=a[t],a[t]=i(n/e),n=n%e*1e7},g=function(){for(var e=6,t="";0<=--e;)if(""!==t||0===e||0!==a[e]){var n=String(a[e]);t=""===t?n:t+d.call("0",7-n.length)+n}return t},p=function(e,t,n){return 0===t?n:t%2==1?p(e,t-1,n*e):p(e*e,t/2,n)};n(0)({target:"Number",proto:!0,forced:o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(1)(function(){o.call({})})},{toFixed:function(e){var t,n,o,i,a=u(this),r=c(e),l="",s="0";if(r<0||20<r)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||1e21<=a)return String(a);if(a<0&&(l="-",a=-a),1e-21<a)if(n=(t=function(e){for(var t=0,n=e;4096<=n;)t+=12,n/=4096;for(;2<=n;)t+=1,n/=2;return t}(a*p(2,69,1))-69)<0?a*p(2,-t,1):a/p(2,t,1),n*=4503599627370496,0<(t=52-t)){for(h(0,n),o=r;7<=o;)h(1e7,0),o-=7;for(h(p(10,o,1),0),o=t-1;23<=o;)f(1<<23),o-=23;f(1<<o),h(1,1),f(2),s=g()}else h(0,n),h(1<<-t,0),s=g()+d.call("0",r);return s=0<r?l+((i=s.length)<=r?"0."+d.call("0",r-i)+s:s.slice(0,i-r)+"."+s.slice(i-r)):l+s}})},function(e,t,n){"use strict";var o=n(4),i=n(1),a=n(56),r=n(5),l="toString",s=/./[l],c=i(function(){return"/a/b"!=s.call({source:"a",flags:"b"})}),u=s.name!=l;(c||u)&&n(19)(RegExp.prototype,l,function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?a.call(e):void 0)},{unsafe:!0})},function(e,t,n){"use strict";var o=n(64),i=n(65)("bold");n(0)({target:"String",proto:!0,forced:i},{bold:function(){return o(this,"b","","")}})},function(e,t,n){var r=n(6),l=/"/g;e.exports=function(e,t,n,o){var i=String(r(e)),a="<"+t;return""!==n&&(a+=" "+n+'="'+String(o).replace(l,"&quot;")+'"'),a+">"+i+"</"+t+">"}},function(e,t,n){var o=n(1);e.exports=function(t){return o(function(){var e=""[t]('"');return e!==e.toLowerCase()||3<e.split('"').length})}},function(e,t,n){"use strict";var o=n(64),i=n(65)("italics");n(0)({target:"String",proto:!0,forced:i},{italics:function(){return o(this,"i","","")}})},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=!1},function(e,t,n){e.exports=!n(5)&&!n(1)(function(){return 7!=Object.defineProperty(n(72)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(7),i=n(2).document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},function(e,t,n){e.exports=n(26)("native-function-to-string",Function.toString)},function(e,t,n){var o,i,a,r=n(91),l=n(7),s=n(16),c=n(12),u=n(46),d=n(36),h=n(2).WeakMap;if(r){var f=new h,g=f.get,p=f.has,v=f.set;o=function(e,t){return v.call(f,e,t),t},i=function(e){return g.call(f,e)||{}},a=function(e){return p.call(f,e)}}else{var m=u("state");d[m]=!0,o=function(e,t){return s(e,m,t),t},i=function(e){return c(e,m)?e[m]:{}},a=function(e){return c(e,m)}}e.exports={set:o,get:i,has:a,enforce:function(e){return a(e)?i(e):o(e,{})},getterFor:function(n){return function(e){var t;if(!l(e)||(t=i(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},function(e,t,n){var r=n(12),l=n(15),s=n(76)(!1),c=n(36);e.exports=function(e,t){var n,o=l(e),i=0,a=[];for(n in o)!r(c,n)&&r(o,n)&&a.push(n);for(;t.length>i;)r(o,n=t[i++])&&(~s(a,n)||a.push(n));return a}},function(e,t,n){var s=n(15),c=n(9),u=n(37);e.exports=function(l){return function(e,t,n){var o,i=s(e),a=c(i.length),r=u(n,a);if(l&&t!=t){for(;r<a;)if((o=i[r++])!=o)return!0}else for(;r<a;r++)if((l||r in i)&&i[r]===t)return l||r||0;return!l&&-1}}},function(e,t,n){e.exports=!n(1)(function(){return!String(Symbol())})},function(e,t,n){t.f=n(3)},function(e,t,n){e.exports=n(2)},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){"use strict";var o=n(1);e.exports=function(e,t){var n=[][e];return!n||!o(function(){n.call(null,t||function(){throw 1},1)})}},function(e,t,n){"use strict";var d=n(4),h=n(9),i=n(6),f=n(54),g=n(41);n(42)("match",1,function(o,c,u){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=u(c,e,this);if(t.done)return t.value;var n=d(e),o=String(this);if(!n.global)return g(n,o);for(var i,a=n.unicode,r=[],l=n.lastIndex=0;null!==(i=g(n,o));){var s=String(i[0]);""===(r[l]=s)&&(n.lastIndex=f(o,h(n.lastIndex),a)),l++}return 0===l?null:r}]})},function(e,t,n){"use strict";var o=n(2),i=n(49),a=n(12),r=n(18),l=n(84),u=n(25),s=n(1),c=n(27).f,d=n(24).f,h=n(8).f,f=n(85),g="Number",p=o[g],v=p.prototype,m=r(n(50)(v))==g,b="trim"in String.prototype,x=function(e){var t,n,o,i,a,r,l,s,c=u(e,!1);if("string"==typeof c&&2<c.length)if(43===(t=(c=b?c.trim():f(c,3)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+c}for(r=(a=c.slice(2)).length,l=0;l<r;l++)if((s=a.charCodeAt(l))<48||i<s)return NaN;return parseInt(a,o)}return+c};if(i(g,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var y,_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(m?s(function(){v.valueOf.call(n)}):r(n)!=g)?l(new p(x(t)),n,_):x(t)},w=n(5)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;w.length>z;z++)a(p,y=w[z])&&!a(_,y)&&h(_,y,d(p,y));(_.prototype=v).constructor=_,n(19)(o,g,_)}},function(e,t,n){var a=n(7),r=n(107);e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&a(o)&&r&&r(e,o),e}},function(e,t,n){var o=n(6),i="["+n(86)+"]",a=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$");e.exports=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(r,"")),e}},function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(e,t,n){"use strict";var s=n(4),i=n(6),c=n(109),u=n(41);n(42)("search",1,function(o,r,l){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=l(r,e,this);if(t.done)return t.value;var n=s(e),o=String(this),i=n.lastIndex;c(i,0)||(n.lastIndex=0);var a=u(n,o);return c(n.lastIndex,i)||(n.lastIndex=i),null===a?-1:a.index}]})},function(e,t,n){var o=n(114);n(0)({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(e,t,n){var o=n(115),i=Object.prototype;o!==i.toString&&n(19)(i,"toString",o,{unsafe:!0})},function(e,t,n){"use strict";var o=n(2),r=n(12),i=n(5),a=n(70),l=n(0),s=n(19),c=n(36),u=n(1),d=n(26),h=n(94),f=n(47),g=n(3),p=n(78),v=n(95),m=n(96),b=n(39),x=n(4),y=n(7),_=n(15),w=n(25),z=n(34),k=n(50),P=n(99),T=n(24),D=n(8),C=n(33),M=n(16),E=n(28),S=n(46)("hidden"),I=n(74),F="Symbol",A=I.set,O=I.getterFor(F),V=T.f,L=D.f,H=P.f,R=o.Symbol,j=o.JSON,B=j&&j.stringify,N="prototype",q=g("toPrimitive"),W=C.f,U=d("symbol-registry"),Z=d("symbols"),X=d("op-symbols"),G=d("wks"),Y=Object[N],J=o.QObject,Q=n(77),K=!J||!J[N]||!J[N].findChild,$=i&&u(function(){return 7!=k(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=V(Y,t);o&&delete Y[t],L(e,t,n),o&&e!==Y&&L(Y,t,o)}:L,ee=function(e,t){var n=Z[e]=k(R[N]);return A(n,{type:F,tag:e,description:t}),i||(n.description=t),n},te=Q&&"symbol"==typeof R.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof R},ne=function(e,t,n){return e===Y&&ne(X,t,n),x(e),t=w(t,!0),x(n),r(Z,t)?(n.enumerable?(r(e,S)&&e[S][t]&&(e[S][t]=!1),n=k(n,{enumerable:z(0,!1)})):(r(e,S)||L(e,S,z(1,{})),e[S][t]=!0),$(e,t,n)):L(e,t,n)},oe=function(e,t){x(e);for(var n,o=m(t=_(t)),i=0,a=o.length;i<a;)ne(e,n=o[i++],t[n]);return e},ie=function(e){var t=W.call(this,e=w(e,!0));return!(this===Y&&r(Z,e)&&!r(X,e))&&(!(t||!r(this,e)||!r(Z,e)||r(this,S)&&this[S][e])||t)},ae=function(e,t){if(e=_(e),t=w(t,!0),e!==Y||!r(Z,t)||r(X,t)){var n=V(e,t);return!n||!r(Z,t)||r(e,S)&&e[S][t]||(n.enumerable=!0),n}},re=function(e){for(var t,n=H(_(e)),o=[],i=0;n.length>i;)r(Z,t=n[i++])||r(c,t)||o.push(t);return o},le=function(e){for(var t,n=e===Y,o=H(n?X:_(e)),i=[],a=0;o.length>a;)!r(Z,t=o[a++])||n&&!r(Y,t)||i.push(Z[t]);return i};Q||(s((R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var e=void 0===arguments[0]?void 0:String(arguments[0]),t=f(e),n=function(e){this===Y&&n.call(X,e),r(this,S)&&r(this[S],t)&&(this[S][t]=!1),$(this,t,z(1,e))};return i&&K&&$(Y,t,{configurable:!0,set:n}),ee(t,e)})[N],"toString",function(){return O(this).tag}),C.f=ie,D.f=ne,T.f=ae,n(27).f=P.f=re,n(38).f=le,i&&(L(R[N],"description",{configurable:!0,get:function(){return O(this).description}}),a||s(Y,"propertyIsEnumerable",ie,{unsafe:!0})),p.f=function(e){return ee(g(e),e)}),l({global:!0,wrap:!0,forced:!Q,sham:!Q},{Symbol:R});for(var se=E(G),ce=0;se.length>ce;)v(se[ce++]);l({target:F,stat:!0,forced:!Q},{for:function(e){return r(U,e+="")?U[e]:U[e]=R(e)},keyFor:function(e){if(!te(e))throw TypeError(e+" is not a symbol");for(var t in U)if(U[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),l({target:"Object",stat:!0,forced:!Q,sham:!i},{create:function(e,t){return void 0===t?k(e):oe(k(e),t)},defineProperty:ne,defineProperties:oe,getOwnPropertyDescriptor:ae}),l({target:"Object",stat:!0,forced:!Q},{getOwnPropertyNames:re,getOwnPropertySymbols:le}),j&&l({target:"JSON",stat:!0,forced:!Q||u(function(){var e=R();return"[null]"!=B([e])||"{}"!=B({a:e})||"{}"!=B(Object(e))})},{stringify:function(e){for(var t,n,o=[e],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=t=o[1],(y(t)||void 0!==e)&&!te(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!te(t))return t}),o[1]=t,B.apply(j,o)}}),R[N][q]||M(R[N],q,R[N].valueOf),h(R,F),c[S]=!0},function(e,t,n){var o=n(73),i=n(2).WeakMap;e.exports="function"==typeof i&&/native code/.test(o.call(i))},function(e,t,n){var l=n(12),s=n(93),c=n(24),u=n(8);e.exports=function(e,t){for(var n=s(t),o=u.f,i=c.f,a=0;a<n.length;a++){var r=n[a];l(e,r)||o(e,r,i(t,r))}}},function(e,t,n){var o=n(27),i=n(38),a=n(4),r=n(2).Reflect;e.exports=r&&r.ownKeys||function(e){var t=o.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var o=n(8).f,i=n(12),a=n(3)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,a)&&o(e,a,{configurable:!0,value:t})}},function(e,t,n){var o=n(79),i=n(12),a=n(78),r=n(8).f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});i(t,e)||r(t,e,{value:a.f(e)})}},function(e,t,n){var l=n(28),s=n(38),c=n(33);e.exports=function(e){var t=l(e),n=s.f;if(n)for(var o,i=n(e),a=c.f,r=0;i.length>r;)a.call(e,o=i[r++])&&t.push(o);return t}},function(e,t,n){var o=n(5),r=n(8),l=n(4),s=n(28);e.exports=o?Object.defineProperties:function(e,t){l(e);for(var n,o=s(t),i=o.length,a=0;a<i;)r.f(e,n=o[a++],t[n]);return e}},function(e,t,n){var o=n(2).document;e.exports=o&&o.documentElement},function(e,t,n){var o=n(15),i=n(27).f,a={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return r&&"[object Window]"==a.call(e)?function(e){try{return i(e)}catch(e){return r.slice()}}(e):i(o(e))}},function(e,t,n){var a=n(80);e.exports=function(o,i,e){if(a(o),void 0===i)return o;switch(e){case 0:return function(){return o.call(i)};case 1:return function(e){return o.call(i,e)};case 2:return function(e,t){return o.call(i,e,t)};case 3:return function(e,t,n){return o.call(i,e,t,n)}}return function(){return o.apply(i,arguments)}}},function(e,t,n){var o=n(15),i=n(24).f,a=n(5),r=n(1)(function(){i(1)}),l=!a||r;n(0)({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},function(e,t,n){var o=n(21),i=n(28),a=n(1)(function(){i(1)});n(0)({target:"Object",stat:!0,forced:a},{keys:function(e){return i(o(e))}})},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){"use strict";var o=[].forEach,i=n(40)(0),a=n(81)("forEach");e.exports=a?function(e){return i(this,e,arguments[1])}:o},function(e,t,n){var s=n(20),c=n(6);e.exports=function(e,t,n){var o,i,a=String(c(e)),r=s(t),l=a.length;return r<0||l<=r?n?"":void 0:(o=a.charCodeAt(r))<55296||56319<o||r+1===l||(i=a.charCodeAt(r+1))<56320||57343<i?n?a.charAt(r):o:n?a.slice(r,r+2):i-56320+(o-55296<<10)+65536}},function(e,t,n){"use strict";var i=n(9),a=n(57),r="startsWith",o=n(59)(r),l=""[r];n(0)({target:"String",proto:!0,forced:!o},{startsWith:function(e){var t=a(this,e,r),n=i(Math.min(1<arguments.length?arguments[1]:void 0,t.length)),o=String(e);return l?l.call(t,o,n):t.slice(n,n+o.length)===o}})},function(e,t,n){var i=n(108);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,o=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),o=e instanceof Array}catch(e){}return function(e,t){return i(e,t),o?n.call(e,t):e.__proto__=t,e}}():void 0)},function(e,t,n){var o=n(7),i=n(4);e.exports=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}},function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},function(e,t,n){var i=n(4),a=n(80),r=n(3)("species");e.exports=function(e,t){var n,o=i(e).constructor;return void 0===o||null==(n=i(o)[r])?t:a(n)}},function(e,t,n){var o=n(1),i=n(86);e.exports=function(e){return o(function(){return!!i[e]()||"​᠎"!="​᠎"[e]()||i[e].name!==e})}},function(e,t,n){var o=n(18);e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},function(e,t,n){"use strict";var i=n(20),a=n(6);e.exports="".repeat||function(e){var t=String(a(this)),n="",o=i(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;0<o;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},function(e,t,n){"use strict";var h=n(28),f=n(38),g=n(33),p=n(21),v=n(35),i=Object.assign;e.exports=!i||n(1)(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=i({},e)[n]||h(i({},t)).join("")!=o})?function(e,t){for(var n=p(e),o=arguments.length,i=1,a=f.f,r=g.f;i<o;)for(var l,s=v(arguments[i++]),c=a?h(s).concat(a(s)):h(s),u=c.length,d=0;d<u;)r.call(s,l=c[d++])&&(n[l]=s[l]);return n}:i},function(e,t,n){"use strict";var o=n(116),i={};i[n(3)("toStringTag")]="z",e.exports="[object z]"!==String(i)?function(){return"[object "+o(this)+"]"}:i.toString},function(e,t,n){var i=n(18),a=n(3)("toStringTag"),r="Arguments"==i(function(){return arguments}());e.exports=function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?n:r?i(t):"Object"==(o=i(t))&&"function"==typeof t.callee?"Arguments":o}},function(e,t,n){n(0)({target:"Array",proto:!0},{fill:n(118)}),n(60)("fill")},function(e,t,n){"use strict";var l=n(21),s=n(37),c=n(9);e.exports=function(e){for(var t=l(this),n=c(t.length),o=arguments.length,i=s(1<o?arguments[1]:void 0,n),a=2<o?arguments[2]:void 0,r=void 0===a?n:s(a,n);i<r;)t[i++]=e;return t}},function(e,t,n){"use strict";var o=n(64),i=n(65)("strike");n(0)({target:"String",proto:!0,forced:i},{strike:function(){return o(this,"strike","","")}})},function(e,t,n){"use strict";var o=n(76)(!0);n(0)({target:"Array",proto:!0},{includes:function(e){return o(this,e,1<arguments.length?arguments[1]:void 0)}}),n(60)("includes")},function(e,t,n){var o=n(5),i=n(3)("match"),a=n(2),r=n(49),l=n(84),s=n(8).f,c=n(27).f,u=n(58),d=n(56),h=n(19),f=n(1),g=a.RegExp,p=g.prototype,v=/a/g,m=/a/g,b=new g(v)!==v;if(r("RegExp",o&&(!b||f(function(){return m[i]=!1,g(v)!=v||g(m)==m||"/a/i"!=g(v,"i")})))){for(var x=function(e,t){var n=this instanceof x,o=u(e),i=void 0===t;return!n&&o&&e.constructor===x&&i?e:l(b?new g(o&&!i?e.source:e,t):g((o=e instanceof x)?e.source:e,o&&i?d.call(e):t),n?this:p,x)},y=function(t){t in x||s(x,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},_=c(g),w=0;w<_.length;)y(_[w++]);(p.constructor=x).prototype=p,h(a,"RegExp",x)}n(122)("RegExp")},function(e,t,n){"use strict";var o=n(123),i=n(8),a=n(5),r=n(3)("species");e.exports=function(e){var t=o(e),n=i.f;a&&t&&!t[r]&&n(t,r,{configurable:!0,get:function(){return this}})}},function(e,t,n){var o=n(79),i=n(2),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(o[e])||a(i[e]):o[e]&&o[e][t]||i[e]&&i[e][t]}},function(e,t,n){"use strict";var o=n(57),i="includes",a=n(59)(i);n(0)({target:"String",proto:!0,forced:!a},{includes:function(e){return!!~o(this,e,i).indexOf(e,1<arguments.length?arguments[1]:void 0)}})},function(e,t,n){"use strict";var r=n(9),l=n(57),s="endsWith",c=""[s],u=Math.min,o=n(59)(s);n(0)({target:"String",proto:!0,forced:!o},{endsWith:function(e){var t=l(this,e,s),n=1<arguments.length?arguments[1]:void 0,o=r(t.length),i=void 0===n?o:u(r(n),o),a=String(e);return c?c.call(t,a,i):t.slice(i-a.length,i)===a}})},function(t,e){(function(e){t.exports=e}).call(this,{})},function(e,t,n){"use strict";n.r(t);n(90),n(51),n(22),n(101),n(102),n(11),n(82),n(13),n(106);var Ge,o,i=n(32),a=n(67),r=n(68),l=n(69),pn=void 0===i?null:i,vn=(void 0===r&&(void 0===i.ui||i.ui),void 0===a?null:a),je=void 0===l?null:l;function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}(o=Ge||(Ge={}))[o.Windows=0]="Windows",o[o.Mac=1]="Mac",o[o.Unknown=2]="Unknown";var h,f,g=function(){function e(){}return e.prototype.Any=function(){return this.iOS||this.Android||this.IEMobile},d(e,[{key:"iOS",get:function(){return!!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)}},{key:"Android",get:function(){return!!navigator.userAgent.match(/(Android)/i)}},{key:"IEMobile",get:function(){return!!navigator.userAgent.match(/(IEMobile)/i)}}]),e}(),p=function(){function e(){c(this,"browserLayoutVersion",navigator.userAgent.match(/(?:Gecko|Presto|Trident|WebKit).[\d.]*/))}return d(e,[{key:"Gecko",get:function(){return!!navigator.userAgent.match(/(Gecko)/i)}},{key:"Presto",get:function(){return!!navigator.userAgent.match(/(Presto)/i)}},{key:"Trident",get:function(){return!!navigator.userAgent.match(/(Trident)/i)}},{key:"Webkit",get:function(){return!!navigator.userAgent.match(/(WebKit)/i)}},{key:"Version",get:function(){return this.browserLayoutVersion?this.browserLayoutVersion[0].replace(/\D*/,""):null}}]),e}(),v=function(){function e(){c(this,"supportsVml",e.supportsVML())}return e.supportsVML=function(){var e;if(void 0===e){var t=pn("<div/>").appendTo("body"),n=pn('<v:shape id="vml_flag1" adj="1" />').appendTo(t);n.css("behavior","url(#default#VML)"),e=!n[0]||"object"==typeof n[0].adj,t.remove()}return e},d(e,[{key:"SVG",get:function(){return!(!window.SVGAngle&&!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"))}},{key:"Touch",get:function(){return!!("ontouchstart"in window)}},{key:"VML",get:function(){return this.supportsVml}},{key:"foreignObject",get:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Extensibility","1.1")}},{key:"Compatibility",get:function(){return void 0!==document.documentMode&&7===document.documentMode}},{key:"FlexBox",get:function(){return"flex"in document.documentElement.style||"WebkitFlex"in document.documentElement.style||"msFlex"in document.documentElement.style}}]),e}(),m=function(){function e(){c(this,"mobile",void 0),c(this,"browserVersion",void 0),this.mobile=new g,this.Edge?this.browserVersion=navigator.userAgent.match(/(?:Edge).[\d.]*/):this.browserVersion=null,this.browserVersion||(this.browserVersion=navigator.userAgent.match(/(?:MSIE|Firefox|Chrome|Safari|Opera| rv|Edge).[\d.]*/))}return d(e,[{key:"Explorer",get:function(){return 0<=navigator.userAgent.indexOf("MSIE")||0<=navigator.userAgent.indexOf("Trident")}},{key:"Firefox",get:function(){return 0<=navigator.userAgent.indexOf("Firefox")||0<=navigator.userAgent.indexOf("Minefield")}},{key:"Safari",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&navigator.userAgent.indexOf("Chrome")<0&&navigator.userAgent.indexOf("Edge")<0}},{key:"Opera",get:function(){return 0<=navigator.userAgent.indexOf("Opera")}},{key:"Chrome",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")<0}},{key:"Edge",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&0<=navigator.userAgent.indexOf("Edge")}},{key:"Mobile",get:function(){return this.mobile}},{key:"Version",get:function(){return this.browserVersion?this.browserVersion[0].replace(/\D*/,""):null}}]),e}(),b=function(t){var e,n;function o(){var e;return c(s(e=t.call(this)||this),"features",void 0),c(s(e),"layout",void 0),c(s(e),"platform",void 0),e.features=new v,e.layout=new p,e.platform=e.DetectPlatform(),e}
/**
   * @private
   */return n=t,(e=o).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n,o.prototype.DetectPlatform=function(){return navigator.platform.startsWith("Mac")?Ge.Mac:navigator.platform.startsWith("Win")?Ge.Windows:Ge.Unknown},d(o,[{key:"Features",get:function(){return this.features}
/**
     * @private
     */},{key:"Layout",get:function(){return this.layout}
/**
     * @private
     */},{key:"Platform",get:function(){return this.platform}}]),o}(m),x=new m,mn=new b,y=x,bn={
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
Text:8},Be={
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
ZoomIn:y.Explorer?"pointer":"zoom-in",
/** A magnifying glass with a minus sign in it. */
ZoomOut:y.Explorer?"pointer":"zoom-out",
/** A selection editing cursor. */
Text:"text",
/** A vertical text editing cursor. */
VerticalText:"vertical-text",
/** A wait cursor. */
Wait:"wait",
/** A custom CSS cursor string provided by the user. */
Custom:"%2"},xn={
/** Scrolls horizontally. */
Horizontal:"horizontal",
/** Scrolls vertically. */
Vertical:"vertical"},yn={
/** No fitting will be applied to the image */
None:0,
/** Finds the best option between width or height based fitting. */
Best:1,
/** Fits the image to the available width. */
Width:2,
/** Fits the image to the available height. */
Height:3},_n={
/** Selects the page under the top left corner of the viewer  */
TopLeft:{x:0,y:0},
/** Selects the page under the middle left of the viewer  */
MiddleLeft:{x:0,y:.5},
/** Selects the page under the bottom left corner of the viewer  */
BottomLeft:{x:0,y:1},
/** Selects the page under the center location of viewer  */
Center:{x:.5,y:.5}},wn={
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
Name:3},_={FileUploadRejectReason:w,SelectedItemsOrder:Je,SelectionMode:Ye,ScrollArea:wn,PageSelection:_n,Fitting:yn,ScrollDirection:xn,MouseToolCursor:Be,MouseToolType:bn,Browser:y},Fe={
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
polygon:"polygon"},zn=(n(43),n(30),n(17),n(10),n(23),n(83),n(87),n(14),{
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
atala_bookmark_header:"atala_bookmark_header"}),kn={
/** Index of the page currently displayed within the element. applies to elements having `.atala_page_div` class */
atala_page_index:"atala_page_index"};n(31);function z(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(f=h||(h={})).Jquery="jQuery",f.JqueryUI="jQuery UI",f.RaphaelJS="Raphaël",f.Clipboard="clipboard.js";var k,P,T,D=function(){function r(){}var e=r.prototype;return e.checkDependency=function(e,t){var n=this,o=r.requiredDependencies.filter(function(e){return z(this,n),e.name===t}.bind(this))[0],i={dependency:o,success:!1,reason:"Dependency is not loaded or not found."};if(e){var a="";switch(e.fn&&e.fn.jquery?a=e.fn.jquery:e.version&&(a=e.version),t){case h.Clipboard:i.success=!0,i.reason="WDV can't verify the version of the dependency.";break;case h.Jquery:case h.JqueryUI:case h.RaphaelJS:this.hasNewerVersion(a,o.version)?(i.success=!0,i.reason=""):i.reason="Dependency has a lower version ("+a+") than required."}}return 0<i.reason.length&&(i.reason+=" The minimal required version is '"+o.version+"'."),i},e.hasNewerVersion=function(e,t){var o=this;if(/^[0-9]+\.[0-9]+\.[0-9]+(-([A-Za-z0-9-]+\.?)+)?(\+([A-Za-z0-9-]+\.?)+)?$/.test(e)){for(var i=/^[0-9]+\.[0-9]+\.[0-9]+/,n=function(e){var t=this;if(z(this,o),null!==i){var n=i.exec(e);if(null!=n&&0<n.length)return n[0].split(".").map(function(e){return z(this,t),parseInt(e)}.bind(this))}return[]}.bind(this),a=n(e),r=n(t),l=0;l<3;l++){if(a[l]<r[l])return!1;if(a[l]>r[l])return!0}var s=e.replace(i,"");return 0===s.length||"+"===s[0]}return!1},r}();function C(e,t,n,o,i){var a=e.checkDependency(t,n);return a.success?(i&&i(n,a.reason),!0):(o(n,a.reason),!1)}function Pn(e){var n=this,t=new D,o=function(e,t){z(this,n),console.error("The dependency verification for '"+e+"' has failed. "+t)}.bind(this),i=function(e,t){z(this,n)}.bind(this),a=C(t,void 0===pn?null:pn,h.Jquery,o);return e.checkjQueryOnly||(a&&(a=C(t,pn.ui,h.JqueryUI,o)),e.checkRaphael&&(a=C(t,void 0===vn?null:vn,h.RaphaelJS,o)&&a),e.checkClipboard&&(a=C(t,void 0===je?null:je,h.Clipboard,o,i)&&a)),a}k=D,P="requiredDependencies",T=[{name:h.Jquery,version:"1.12.4"},{name:h.JqueryUI,version:"1.12."},{name:h.RaphaelJS,version:"2.1.0"},{name:h.Clipboard,version:"2.0.0"}],P in k?Object.defineProperty(k,P,{value:T,enumerable:!0,configurable:!0,writable:!0}):k[P]=T;
/** Annotations related strings.
 * @enum {string}
 * @memberOf Atalasoft.Utils
 */
var M={
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
valueHeightShort:"short"},Tn={annotations:M};
/**
 * Represents strings for {@link Atalasoft.Controls.WebDocumentViewer|WebDocumentViewer} localization.
 * @property {Atalasoft.Utils.LocalizationAnnotationStrings} annotations - Contains a translation table for annotations specific strings.
 * @memberOf Atalasoft.Utils
 */n(44);
/**
 * @private
 */
function X(e,t,n){for(t||(t={x:0,y:0}),n||(n=e.target instanceof HTMLElement?e.target:null),mn.Explorer&&null===e&&(e=event),e instanceof MouseEvent?(t.x=e.clientX,t.y=e.clientY):(t.x=e.touches[0].clientX,t.y=e.touches[0].clientY);n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)t.x-=n.offsetLeft-n.scrollLeft,t.y-=n.offsetTop-n.scrollTop,n=n.offsetParent instanceof HTMLElement?n.offsetParent:null;return t}
/**
 * @private
 */function J(e,t,n){t||(t={x:0,y:0});var o=e.originalEvent;if(e.offsetX||e.offsetY)if(mn.Firefox){var i=e.target.raphaelParent?pn(e.target).parents("svg").offset():pn(e.target.offsetParent||e.target.parentNode).offset();t.y=i?(t.x=e.pageX-i.left,e.pageY-i.top):(t.x=e.pageX,e.pageY)}else if(void 0===o||o.currentTarget===o.target||n)t.x=e.offsetX,t.y=e.offsetY;else if(o.currentTarget.offsetLeft||o.currentTarget.offsetTop||!o.currentTarget.ownerSVGElement)t.x=o.currentTarget.offsetLeft+e.offsetX,t.y=o.currentTarget.offsetTop+e.offsetY;else{var a=mn.Explorer?o.currentTarget.ownerSVGElement.getBBox():o.currentTarget.getBBox();t.x=Math.round(a.x),t.y=Math.round(a.y)}else if(mn.Explorer)o instanceof MouseEvent?(t.x=o.x,t.y=o.y):(t.x=0,t.y=0);else{var r=null,l=e.target;o instanceof TouchEvent&&1===o.touches.length&&(l=document.elementFromPoint(o.touches[0].clientX,o.touches[0].clientY));var s=mn.Features.Touch&&o instanceof TouchEvent?o.touches[0]:null,c=pn(l),u={pageX:0,pageY:0};null!==s?(u.pageX=s.pageX,u.pageY=s.pageY):o instanceof MouseEvent&&(u.pageX=o.pageX,u.pageY=o.pageY),u.pageX||u.pageY||(u.pageX=e.pageX,u.pageY=e.pageY),e.target.raphael?r=c.parents("div:eq(0)").offset():(e.target.raphaelParent||0<c.parents("svg").length)&&(r=c.parents("svg").parents("div:eq(0)").offset()),r||(r=c.offset()),t.y=r?(t.x=u.pageX-r.left,u.pageY-r.top):(t.x=u.pageX,u.pageY)}return t}
/**
 * Gets the normalized offsetLeft and offsetTop from an SVG element
 * with respect to its parent jQuery object
 * @private
 * @param objSVG: object, svg object from the dom
 * @param parent: object, jQuery object representing the parent DOM node
 */function Q(e,t){var n={left:0,top:0};if(e instanceof HTMLElement)n.left=e.offsetLeft,n.top=e.offsetTop;else{var o=pn(e).offset(),i=t.offset();o&&i&&(n.left=o.left-i.left,n.top=o.top-i.top)}return n}
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
 */function E(e){e.stopPropagation()}
/**
 * Creates a function that wraps multiple functions into one
 * @private
 * @param arr: array of functions
 * @param arguments to pass to called functions
 */
/**
 * @private
 */
function Dn(e){return{" transform":e,"-moz-transform":e,"-webkit-transform":e,"-o-transform":e,"-ms-transform":e}}
/**
 * @private
 */function Ae(e,n){var o=this,i={x:0,y:0,width:0,height:0};return e&&e.length&&(n=n||vn.matrix(),i.x=n.x(e[0].x,e[0].y),i.y=n.y(e[0].x,e[0].y),e.forEach(function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,o);var t={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};i.x=t.x<i.x?t.x:i.x,i.y=t.y<i.y?t.y:i.y,i.width=t.x>i.width?t.x:i.width,i.height=t.y>i.height?t.y:i.height}.bind(this)),i.width-=i.x,i.height-=i.y),i}
/**
 * @private
 */function Qe(e){if("string"==typeof e){var t=e.trim(),n=parseInt(t);if(/^([+|-]?[0-9]+)$/.test(t))return n}return"number"!=typeof e?null:e}
/**
 * @private 
 */function Cn(e){return isFinite(e)&&!(e%1)}function We(e){return!isNaN(e)&&isFinite(e)}var Mn={instanceCounter:0};function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var En=function(){function e(e){S(this,"viewer",void 0),S(this,"currentThumb",void 0),this.viewer=e,this.currentThumb=null}var t=e.prototype;return t.isViewerActive=function(){return!(!this.viewer||!this.currentThumb)},t.isThumbnailerActive=function(e){return e&&!!this.currentThumb&&this.currentThumb.get()===e.get()},t.activateThumbnailer=function(e,t,n,o,i){var a=this.isThumbnailerActive(e);a&&!i||(this.currentThumb&&!a&&this.currentThumb.detachViewer(),this.currentThumb=e,this.viewer&&this.viewer.isInitialized()&&(this.viewer.switchDocument(t,n,o),this.currentThumb.activateViewer()))},t.closeDocument=function(e,t){e=e||this.currentThumb;var n=this.isThumbnailerActive(e);n&&(e.detachViewer(),this.currentThumb=null),this.viewer&&this.viewer.isInitialized()&&t&&this.viewer.closeDocument(t,n)},e}();function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Sn=function(){function e(e){F(this,"jqe",pn({})),F(this,"memoryEntries",[]),F(this,"config",{colorDepth:8,compression:1,highWaterMark:5e8,pageSize:{width:800,height:1132}}),F(this,"bytesInUse",0),e&&pn.extend(this.config,e)}var t,n,o,i=e.prototype;return i.dispose=function(){this.clearEntries()},i.bind=function(){return this.jqe.on.apply(this.jqe,arguments),this},i.unbind=function(){return this.jqe.off.apply(this.jqe,arguments),this},i.trigger=function(e){return this.jqe.trigger.apply(this.jqe,arguments),this},i.allocate=function(e){return this.memoryEntries.push(e),this.bytesInUse+=this.calcBytes(e),this.bytesInUse>this.config.highWaterMark&&this.trigger("exceededhighwatermark"),this.bytesInUse},i.deallocateOldestEntry=function(){var e=this.memoryEntries.shift();return void 0!==e&&this.deallocate(e),e},i.clearEntries=function(){this.memoryEntries.length=0,this.bytesInUse=0},i.deallocate=function(e){return this.bytesInUse-=this.calcBytes(e),this.bytesInUse<0&&(this.bytesInUse=0),this.bytesInUse},i.calcBytes=function(e){return(e.width()||this.config.pageSize.width)*(e.height()||this.config.pageSize.height)*this.config.colorDepth/8*this.config.compression},t=e,(n=[{key:"typeOf",get:function(){return"Atalasoft.Document.MemoryTacker"}},{key:"colorDepth",set:function(e){this.config.colorDepth=e},get:function(){return this.config.colorDepth}},{key:"highWatermark",set:function(e){this.config.highWaterMark=e},get:function(){return this.config.highWaterMark}},{key:"pageSize",set:function(e){this.config.pageSize={width:e.width,height:e.height}},get:function(){return this.config.pageSize}}])&&I(t.prototype,n),o&&I(t,o),e}(),In=[11,5,0,205],A=(n(61),n(88),n(89),n(62),n(117),n(63),n(66),function(o,e,t){var n=this,f=o,h=e,g=null,p=null,v=!1,m={" ":!0,"-":!0,"?":!0,"\n":!0,"\t":!0},i=t,a=null;function b(){var e,t;(t=document.body).currentStyle?e=t.currentStyle.direction:window.getComputedStyle&&(e=document.defaultView.getComputedStyle(t,null).getPropertyValue("direction")),"rtl"===e.toLowerCase()&&(v=!0),g=pn("<canvas "+(v?'dir="rtl"':"")+"/>"),p=pn('<span class="atala_span">{[|,0123456789Thqkbfjplyg</span>'),pn(i).append(p)}function r(e){g&&p||b(),h.applyTo(p),g[0].width=e.width,g[0].height=e.height;var t=g[0].getContext("2d"),n=function(e,t,n){var o=[];if("string"==typeof t){if(f.text.autoscale)return t.split("\n");for(var i=t,a=n,r=function(e){for(var t=[],n="",o=0,i=0;i<e.length;i++){var a=e[i];m[n]&&(t.push(e.substr(o,i-o)),o=i),n=a}return o<e.length&&t.push(e.substr(o,e.length-o)),t}(i),l="",s="",c=[],u=0;u<r.length;u++)if(l=s,s=r[u],e.measureText(s).width>a)for(var d=s.split(""),h=0;h<d.length;h++)c.push(d[h]),e.measureText(c.join("")).width>a&&(c.pop(),o.push(c.join("")),c.length=0,c.push(d[h]));else c.push(s),(e.measureText(c.join("").trim()).width>a||0<=l.indexOf("\n"))&&(c.pop(),o.push(c.join("")),c.length=0,c.push(s));0<c.length&&(o.push(c.join("")),c.length=0)}return o}(t,f.text.value,e.width),o=function(e){if(f.text.autoscale){var t=Math.max(0,f.height-2*f.outline.width);return 0<e?Math.floor(t/e):t}return h.applyTo(p,1),p[0].offsetHeight}(n.length),i=f.text.autoscale?o:f.text.font.size,a=[f.text.font.italic?"italic":"normal",f.text.font.bold?"bold":"normal",i+"px",f.text.font.family];t.font=a.join(" "),t.fillStyle=f.text.font.color,t.textBaseline="top";var r,l=0,s=n.length?n[0]:"";for(r=0;r<n.length;r++)n[r].length>s.length&&(s=n[r]);var c=t.measureText(s).width,u=v?c:0;if(f.text.autoscale&&"left"!==f.text.align)switch(f.text.align){case"center":t.textAlign=f.text.align,u=c/2;break;case"right":t.textAlign=f.text.align,u=v?0:c;break;default:t.textAlign="start",u=v?c:0}if(f.text.autoscale){var d=e.width/c;t.scale(d,1)}if(!f.text.autoscale)switch(f.text.align){case"center":t.textAlign=f.text.align,u=e.width/2;break;case"right":t.textAlign=f.text.align,u=e.width}for(r=0;r<n.length;r++)t.fillText(n[r],u,l,c),l+=o;return g[0].toDataURL()}n.dispose=function(){h=f=n=null,g&&g.remove&&(g.remove(),g=null),p&&p.remove&&(p.remove(),p=null),i=null},n.renderToDataURL=r,n.renderToSVGImage=function(e,t){var n=a;n&&n.width===t.width&&n.height===t.height&&n.text===o.text.value&&n.align===o.text.align||(a={width:t.width,height:t.height,text:o.text.value,align:o.text.align},e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r(t)))}}),O=(n(119),function(e,t){var n=this,o=t,i={bold:!1,italic:!1,strike:!1,underline:!1,color:"#000000",family:"Arial",size:12},a=1,r=1,l=mn.Mobile.Any()?18:8;function s(e){e&&pn.extend(i,e),c()}function c(e,t,n){(e=e||o)&&(t=void 0!==t?t:a,n||(t=d()),u(e,t))}function u(e,t){var n="none";(i.strike||i.underline)&&(n=i.strike?"line-through ":"",n+=i.underline?"underline":"");var o=i.size*(t||1);e.css({color:i.color,"font-family":i.family,"font-style":i.italic?"italic":"normal","font-weight":i.bold?"bold":"normal","font-size":o+"pt","text-decoration":n})}function d(){return a=i.size*r<l?l/i.size:r}s(e),n.dispose=function(){i=o=n=null},n.set=s,n.get=function(e){return e?i[e]:i},n.repaint=c,n.applyTo=u,n.getAdjustedZoom=d,n.getZoom=function(){return r},n.setZoom=function(e){r=e,c()}}),N=function(e,_,w,t,n){var o=this,i=e,z=t,a=_.getEventObject(),k=null,r=null,P=null,l=null,T=_.get("text"),s=T.value,D=!1,C=3,M=mn.Mobile.Any()&&!0===n?{width:200,height:200}:{width:1,height:1},c={},u={moving:h,resized:h,moved:h,rotated:h},E=function(){var e=_.get();r||(r=pn('<textarea selectable="false"/>'),pn(l.innerDom).append(r),r.css({"background-color":"transparent",border:"0px solid","overflow-x":"hidden","overflow-y":"hidden","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none",resize:"none",cursor:"inherit"}),r.attr("readonly","readonly"),r.on({focus:function(){return this.blur(),!1}}),r[0].raphaelParent=!0),r.val(T.value);var t=_.get("outline").width/2,n=Math.max(Math.ceil(e.width-2*(t+C)),1),o=Math.max(Math.ceil(e.height-2*(t+C)),1);if(P&&(P.set(T.font),P.repaint(r,1,!0)),r.css({width:n+"px",height:o+"px","max-width":n+"px","max-height":o+"px",padding:C+"px","text-align":T.align}),r.attr("title",e.tooltip),l.attr({x:Math.round(t+e.x),y:Math.round(t+e.y),width:e.width,height:e.height}),0<=e.cornerradius){var i=_.getObject();pn(i[0]).attr({rx:e.cornerradius||0,ry:e.cornerradius||0})}l.transform(S().toTransformString(!0))};function d(){var e=_.get("outline").width/2,t=_.get(),n=Math.max(Math.ceil(t.width-2*(e+C)),0),o=Math.max(Math.ceil(t.height-2*(e+C)),0);if(P&&P.set(T.font),l.attr({x:Math.round(e+C+t.x),y:Math.round(e+C+t.y),width:n,height:o,title:t.tooltip}),0<=t.cornerradius){var i=_.getObject();pn(i[0]).attr({rx:t.cornerradius||0,ry:t.cornerradius||0})}l.renderer&&l.renderer.renderToSVGImage(l[0],{width:n,height:o}),l.transform(S().toTransformString(!0))}function S(){var e=vn.matrix(),t=z.getViewerTransform(_._pageindex),n=_.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e}function h(){l&&b()}function I(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}function f(){if(null==P&&(P=new O(T.font)),l){var e=!0!==l.removed?l:null;a.unbind(e,{showeditor:g,hideeditor:v})}var t=D,n=T.autoscale;(l=n?w.atalaImage():w.html()).isHtml&&!n||(l.renderer=new A(_.get(),P,w._page),E=d),null!=k&&w._page&&(w._page.append(k),w._page.on(c)),vn.vml&&(_.getObject().node.style.overflow="hidden"),l.transform(S().toTransformString(!0)),a.bind(l,{showeditor:g,hideeditor:v}),t&&g()}function g(){w._page[0].classList.contains(zn.atala_active_thumb)||(k||function(){k=pn("<textarea/>").hide(),w._page&&(w._page.append(k),w._page.on(c)),k.on("change keydown mouseup mousemove mousedown",p),k.bind({blur:v}),_.bind({deselected:v});var e=_.getObject();if(k.css({position:"absolute","overflow-x":"auto","overflow-y":"auto","z-index":99999,border:"0px solid",padding:"0px","background-color":"transparent","text-align":T.align}),mn.Mobile.Any()){var t=_.get(),n=Q(w.canvas,w._page);k.css({left:t.x+n.left+"px",top:t.y+n.top+"px",width:t.width+"px","max-width":t.width+"px",height:t.height+"px","max-height":t.height+"px",border:e.attr("stroke")+" "+e.attr("strokewidth")+"px","background-color":e.attr("fill")})}P.setZoom(_.getZoom()),(mn.Chrome||mn.Safari)&&k.css({resize:"none"}),null!=T.value&&k.val(T.value),T.readonly&&k.prop("readonly","readonly"),P.repaint(k,_.getZoom())}(),_&&!_.get("visible")||(!k.is(":hidden")&&D||(l.hide(),k.prop("readonly",T.readonly?"readonly":""),T.value!==k.val()&&k.val(T.value),k.show(),b()),mn.Touch&&k.focus(function(){k[0].setSelectionRange(0,9999)}),k[0].focus(),s=T.value,D=!0))}function p(e){if("keydown"===e.type&&i.config.textAnnotationEditorIgnoredKeyCodes){for(var t=!1,n=i.config.textAnnotationEditorIgnoredKeyCodes.length,o=0;o<n;o++)if(i.config.textAnnotationEditorIgnoredKeyCodes[o]===e.which){t=!0;break}if(t)return}e.stopPropagation(),T.value!==k.val()&&(T.value=k.val(),_.set({text:T}))}function v(){if(k&&((k.is(":visible")||D)&&(k.hide(),l.show(),b()),0===arguments.length||1===arguments.length&&"blur"===arguments[0].type)){a.trigger("annotationtextchanged");var e=_.getClonedData(),t=pn.extend(!0,{},e);delete t.update,delete t.getPageIndex,t.text.value=s,a.trigger({type:"annotationchanged",ann:_,annobefore:t}),k[0].blur(),D=!1}}function m(){!_||_.get("visible")?D?g():l.show():l.hide(),l.backgroundColor&&l.backgroundColor(_.get("fill").color)}function F(e){e&&(w!==e||l.removed)&&(w=e,null!=r&&(r.remove(),r=null),f(),m())}function b(e){if(F(e),E(),k&&(!k.is(":hidden")||D)){var t=_.get("outline").width/2,n=_.get(),o=_.getZoom(),i=_.getBox(),a=S(),r=I(a,i.x,i.y),l=I(a,i.x+i.width,i.y+i.height),s=i.width*o,c=i.height*o,u=(r.x+l.x-s)/2,d=(r.y+l.y-c)/2,h=C*o,f=t*o,g=2*(h+f),p=Math.max(Math.ceil(s-g),M.width),v=Math.max(Math.ceil(c-g),M.height),m=Q(w.canvas,w._page),b=n.rotation+z.getPageRotation(_._pageindex),x=0!==b?"rotate("+b+"deg)":"",y={left:Math.round(u+m.left+f)+"px",top:Math.round(d+m.top+f)+"px",width:p+"px",height:v+"px","max-width":p+"px","max-height":v+"px",padding:Math.ceil(h)+"px"};pn.extend(y,Dn(x)),k.css(y)}P&&(P.set(T.font),P.setZoom(_.getZoom()),P.repaint(k,_.getZoom()))}f(),b(),_.bind(u),o.dispose=function(){k&&k.remove(),r&&r.remove(),P&&P.dispose(),l&&l.remove(),w&&w._page&&w._page.off(c),_.unbind(u),T=l=r=P=k=a=o=null},o.set=function(e){e&&pn.extend(T,e)},o.get=function(e){return e?T[e]:T},o.getFont=function(){return P},o.inEditMode=function(){return D},o.updateView=m,o.changepaper=F,o.repaint=b},V=function(){var e=this,t=pn({}),o={drawing:!1,hold:null,pinching:!1,tapped:!1,touching:!1,delta:{x:0,y:0},origin:{x:0,y:0},point:{x:0,y:0},moves:0,e:null};function i(){t.trigger.apply(t,arguments)}function a(){i({type:"interactstart"})}function r(){i({type:"interactend"})}function l(e){if(o.e=e,a(),i(e),2===e.originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(!o||!o.raphael&&!o.raphaelParent)return!1;if(null===t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches))u(),o.touching=!1,(n=e).stopPropagation(),n.preventDefault(),o.pinching=!0,i({type:"pinchstart",touches:n.originalEvent.touches});else if(1===e.originalEvent.touches.length){i("selectchange"),o.touching=!0;var t=J(e);o.point.x=t.x,o.point.y=t.y,o.hold=setTimeout(c,1500)}var n}function s(){o.tapped=!1}function c(){if(0<o.moves&&null!==o.e){var e=J(o.e);Math.abs(o.point.x-e.x)<5&&Math.abs(o.point.y-e.y)<5&&(o.moves=0)}0===o.moves&&o.touching&&o.e&&(o.touching=!1,i({type:"contextmenu",x:o.e.originalEvent.touches[0].pageX,y:o.e.originalEvent.touches[0].pageY}))}function u(){null!==o.hold&&(clearTimeout(o.hold),o.hold=null)}e.events={click:function(e){i(e)},dblclick:function(e){i(e);var t=J(e);i({type:"showeditor",x:t.x,y:t.y})},mousedown:function(e){return a(),i(e),i({type:"selectchange",shiftKey:e.shiftKey,ctrlKey:e.ctrlKey}),3===e.which&&i({type:"contextmenu",x:e.clientX,y:e.clientY,event:e}),!1},mousemove:function(e){i(e)},mouseout:function(e){i(e)},mouseover:function(e){i(e)},mouseup:function(e){i(e),r()}},mn.Features.Touch&&pn.extend(!0,e.events,{touchstart:l,touchmove:function(e){var t;i(o.e=e),o.pinching?((t=e).stopPropagation(),t.preventDefault(),i({type:"pinchmove",touches:t.originalEvent.touches})):o.moves++},touchend:function(e){var t,n;i(o.e=e),o.pinching?((n=e).stopPropagation(),n.preventDefault(),o.pinching=!1,i({type:"pinchend",touches:n.originalEvent.touches}),1===n.originalEvent.touches.length&&l(n)):o.touching&&(o.touching=!1,u(),o.moves=0,o.tapped?(t=e,o.e=t,i({type:"showeditor",x:o.point.x,y:o.point.y})):(o.tapped=!0,setTimeout(s,300))),r()}}),e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=i},q=function(e){var n=pn({}),t=e,o=null,a={target:null,mx:null,my:null,px:null,py:null,dx:null,dy:null};function r(e){a.px=a.mx,a.py=a.my,e.originalEvent?(a.mx=e.originalEvent.targetTouches[0].pageX,a.my=e.originalEvent.targetTouches[0].pageY):(a.mx=e.targetTouches[0].pageX,a.my=e.targetTouches[0].pageY),a.dx=a.mx-a.px,a.dy=a.my-a.py}function l(e){a.px=a.mx,a.py=a.my,a.mx=e.screenX,a.my=e.screenY,a.dx=a.mx-a.px,a.dy=a.my-a.py}function s(){n.trigger.apply(n,arguments)}function i(){s({type:"interactstart",target:t})}function c(){s({type:"interactend",target:t})}function u(e,t,n,o,i){(e||t)&&(mn.Features.Touch&&i.target!==a.target||(null===a.px&&d(0,0,i),i.touches?r(i):l(i),s({type:"dragmove",dx:a.dx,dy:a.dy,mx:a.mx,my:a.my,originalEvent:i})))}function d(e,t,n){a.target=n.target,i(),n.touches?r(n):l(n),s({type:"dragstart",mx:a.mx,my:a.my,originalEvent:n})}function h(e){mn.Features.Touch&&e.target!==a.target||(a.target=null,a.px=null,a.py=null,a.mx=null,a.my=null,s({type:"dragend",originalEvent:e}))}function f(){s("hoverin")}function g(){s("hoverout")}function p(e){s(e)}function v(e){s(e)}function m(e){a.px=null,a.py=null,s(e)}function b(e){s(e)}function x(e){s(e)}function y(e){s(e)}function _(e){s(e)}function w(e){s(e)}function z(e){s(e),1===e.which?s("mousedownleft"):3===e.which&&s("mousedownright")}function k(e){s(e)}function P(e){s(e)}function T(e){s(e)}function D(e){s(e),3===e.which&&s("rightclick")}function C(e){s(e)}function M(e){s(e)}function E(e){s(e)}(o=new V).bind({click:_,dblclick:w,mousedown:z,mousemove:k,mouseover:T,mouseout:P,mouseup:D,touchmove:C,touchstart:E,interactstart:i,interactend:c,pinchstart:p,pinchmove:v,pinchend:m,selectchange:b,contextmenu:x,showeditor:y,annoresized:M}),this.bind=function(e){var t=arguments;!e||e.constructor.prototype!==vn.el&&e.constructor.prototype!==vn.st||(e.drag(u,d,h),e.hover(f,g),"set"!==e.type?pn(e[0]).on(o.events):e.forEach(function(e){pn(e[0]).on(o.events)}),t=Array.prototype.slice.call(t,1)),0<t.length&&n.on.apply(n,t)},this.unbind=function(e){var t=arguments;!e||e.constructor.prototype!==vn.el&&e.constructor.prototype!==vn.st?null===e&&1<t.length&&(t=Array.prototype.slice.call(t,1)):(e.undrag(),e.unhover(f,g),"set"!==e.type?pn(e[0]).off(o.events):e.forEach(function(e){pn(e[0]).off(o.events)}),t=Array.prototype.slice.call(t,1)),n.off.apply(n,t)},this.trigger=s},W=function(e,t){var n=this,o=e,i=null,a=null,r=t;function l(){return r.trigger.apply(r,arguments),n}function s(e){return e.image()}function c(e){o.customurl?e.attr("src",o.customurl):l("serverrenderurlrequested",{data:o,complete:u})}function u(e){e.customurl=e}return n.dispose=function(){a=i=o=n=null},n.bind=function(){return r.on.apply(r,arguments),n},n.unbind=function(){return r.off.apply(r,arguments),n},n.trigger=l,n.construct=function(e){return i(e,o)},n.render=function(e){a(e,o)},i=o.constructor?o.constructor:s,a=o.renderer?o.renderer:c,n},U=function(e,t,n,o,i,a){var r=this,l=e,u=t,s=n,c=o,d=null,h=null,f=a,g=i,p=null,v=null,m=null,b=null,x={},y=function(){},_=function(){};function w(e){var t=J(e);if(d.paper){var n=Q(d.paper.canvas,d.paper._page);t.x-=n.left,t.y-=n.top}return t}function z(e){var t=s.getViewerTransform(g._pageindex).invert(),n=t.x(e.x,e.y);return e.y=t.y(e.x,e.y),e.x=n,e}function k(){c.trigger.apply(c,arguments)}function P(e,t,n){d=t,h=n,e.stopPropagation(),e.preventDefault();var o=z(w(e));u.visible=!0,v={x:o.x,y:o.y},u.x=Math.round(o.x),u.y=Math.round(o.y),u.width<4&&u.height<4&&(u.width=1,u.height=1),_="path"===d.type&&"custom"!==u.type?"ellipse"!==u.type?(u.points=[{x:u.x,y:u.y}],"lines"!==u.type&&"polygon"!==u.type||u.points.push({x:u.x,y:u.y}),u.x=0,u.y=0,y=C,O):(y=M,A):(y=M,F),S(),(p={events:mn.Features.Touch?{touchend:E,touchmove:D,mouseup:E,mousemove:D}:{mouseup:E,mousemove:D},src:pn(e.srcElement||e.target),main:pn(e.currentTarget)}).src.on(p.events),p.main.on({mouseup:E})}function T(){p&&(p.src.off(p.events),p.main.off({mouseup:E}))}function D(e){e.stopPropagation(),y(e),S()}function C(e){var t=z(w(e));switch(u.type){case"line":u.points[1]=t;break;case"freehand":u.points.push(t);break;case"lines":case"polygon":u.points[u.points.length-1]=t}"path"===d.type&&("ellipse"===u.type?L():H(),d._&&0===d._.dirty&&(d._.dirty=1))}function M(e){var t=z(w(e)),n=v.x,o=v.y,i=Math.max(Math.abs(t.x-v.x),1),a=Math.max(Math.abs(t.y-v.y),1);0<u.aspectratio&&(Math.abs((t.y-v.y)/(t.x-v.x))>1/u.aspectratio?i=Math.round(a/u.aspectratio):a=Math.round(i/u.aspectratio)),t.x<v.x&&(n=v.x-i),t.y<v.y&&(o=v.y-a),u.x=n,u.y=o,u.width=i,u.height=a}function E(e){e.stopPropagation();var t=!1;if("lines"===u.type||"polygon"===u.type){if(s.activepage._index!==g._pageindex)return;if(u.points.push(z(w(e))),2!==e.button)return}else u.points?u.points&&u.points.length<2&&"custom"!==u.type&&(t=!0):(u.width<4&&u.height<4&&(u.width=100,u.height=100),S());T(),p=null,k(t?"cancelled":"drawn")}function S(){_(),d&&d.transform(I()),h&&h.repaint()}function I(){var e=vn.matrix(),t=s.getViewerTransform(g._pageindex),n=g.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e.toTransformString()}function F(){if("image"===u.type)if((!u.originalWidth||!u.originalHeight)&&1<u.width&&1<u.height&&(u.originalWidth=u.width,u.originalHeight=u.height),"Atalasoft.Controls.WebDocumentThumbnailer"!==l.typeOf&&u.noresizeonzoom){var e=vn.matrix(),t=s.getViewerTransform(g._pageindex),n=g.getTransform();e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),u.originalWidth&&0<e.a&&u.originalHeight&&0<e.d&&(u.width=u.originalWidth/e.a,u.height=u.originalHeight/e.d),d.attr({x:u.x,y:u.y,width:u.width,height:u.height})}else d.attr({x:u.x,y:u.y,width:u.originalWidth,height:u.originalHeight});else d.attr({x:u.x,y:u.y,width:u.width,height:u.height});f&&f.render(d,u),mn.Features.VML&&d.transform(I())}function A(){L(),d._&&0===d._.dirty&&(d._.dirty=1)}function O(){H(),d._&&0===d._.dirty&&(d._.dirty=1)}r.events={drawstart:P,drawmove:D,drawend:E,dragstart:function(e){if(!s.readonly){e.originalEvent.stopPropagation(),delete(x=pn.extend(!0,{},g.getClonedData())).update,delete x.getPageIndex;var t=g.getBox();v={x:t.x,y:t.y}}},dragmove:function(e){if(!s.readonly){e.originalEvent.stopPropagation();var t=z({x:0,y:0}),n=z({x:e.dx,y:e.dy});g.translate(n.x-t.x,n.y-t.y),k("moving")}},dragend:function(e){if(!s.readonly){e.originalEvent.stopPropagation();var t,n,o=g.getBox();if(d.paper&&d.paper._page){var i=d.getBBox(),a={x:0,y:0,width:d.paper._page.width(),height:d.paper._page.height()};if(!(j(t=a,(n=i).x,n.y)||j(t,n.x+n.width,n.y)||j(t,n.x,n.y+n.height)||j(t,n.x+n.width,n.y+n.height)))return void g.translate(v.x-o.x,v.y-o.y)}v.x===o.x&&v.y===o.y||(k("moved"),k({type:"annotationchanged",ann:g,annobefore:x}))}},update:function(){S()},viewchanged:function(e){d=e.annview,h=e.textview,_="path"===d.type&&"custom"!==u.type?"ellipse"!==u.type?(y=C,O):(y=M,A):(y=M,F)},pinchstart:function(e){if(!u.points&&!s.readonly){var t=z({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=z({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=g.getBox();b={start:Y(t.x,t.y,n.x,n.y),rect:o}}},pinchmove:function(e){if(b){var t=z({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=z({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=Y(t.x,t.y,n.x,n.y,b.start),i=o.x-b.start.x,a=o.y-b.start.y,r=b.rect.x-o.dx,l=b.rect.y-o.dy,s=b.rect.width+i,c=b.rect.height+a;u.points?g.transform(r,l,s,c):(u.x=r,u.y=l,u.width=s,u.height=c),d.paper&&d.paper._page&&d.paper._page._grips&&d.paper._page._grips.repaint(),S()}},pinchend:function(){k("resized"),k("annoresized"),b=null}},r.drawStart=P,r.unbindEvents=T,r.repaint=S,r.getTransform=I;var V=.5522847498307936;function L(){var e=u.width/2,t=u.height/2,n=V*e,o=V*t,i=u.x+u.width/2,a=u.y+u.height/2,r=["M",i,a-t,"C",i+n,a-t,i+e,a-o,i+e,a,"C",i+e,a+o,i+n,a+t,i,a+t,"C",i-n,a+t,i-e,a+o,i-e,a,"C",i-e,a-o,i-n,a-t,i,a-t,"Z"];d.attr({path:r})}function H(){if(u.points&&0!==u.points.length){for(var e=["M",u.points[0].x,u.points[0].y],t=1;t<u.points.length;t++)e=e.concat(["L",u.points[t].x,u.points[t].y]);"polygon"===u.type&&e.push("Z"),d.attr({path:e}),
/**
   * Work around outlined by this post:
   * http://stackoverflow.com/questions/15693178/svg-line-markers-not-updating-when-line-moves-in-ie10
   */
function(){if(mn.Explorer){var e=parseInt(mn.Version,10);10<=e&&e<12&&d.node&&d.node.parentNode&&d.node.parentNode.insertBefore(d.node,d.node)}}()}}r.commitTransform=function(){var e,t,n;pn.extend(u,(e=m,t=s.getZoom(g._pageindex),{x:(n=e.split()).dx/t,y:n.dy/t,width:n.scalex/t,height:n.scaley/t})),d.transform(I()),S(),R=null},r.transformUI=function(e,t,n,o){m=vn.matrix(n,0,0,o,e,t),R||(R=function(e,t){var n;if(e.points&&1<e.points.length){var o=g.getBox();(n=vn.matrix(1,0,0,1,0,0)).scale(1/o.width,1/o.height,0,0),n.translate(-o.x,-o.y)}else(n=vn.matrix(t,0,0,t,0,0)).translate(e.x,e.y),n.scale(e.width,e.height,0,0);return n}(u,1)),m.add(R.a,R.b,R.c,R.d,R.e,R.f),d.transform(m.toTransformString()),h&&h.repaint()};var R=null;function j(e,t,n){return t>=e.x&&t<=e.x+e.width&&n>=e.y&&n<=e.y+e.height}},Oe=function(e,t,n){var i=e,a=n,r=this,o=new q(r),l=null,s=null,c=null,u=null,d=null,h=null,f=null,g=null,p=t.multiview?t:{
/**
      * @property {number} - frame index where annotation is located
      */
fIndex:0,
/**
       * @property {number} - unique annotation identifier
       */
annotationId:0,
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
transform:vn.matrix(),
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
       * @property {boolean} [noresizeonzoom=false] - Indicates whether annotation could not be resized on zoom.
       */
noresizeonzoom:!1,
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
extra:{}},v={highlight:{fill:{color:"yellow",opacity:.5},outline:{opacity:0}},image:{fill:{color:null},outline:{opacity:0}},rectangle:{fill:{opacity:0}},stamp:{cornerradius:0,text:{autoscale:!0,verifyFontFamily:!1}},line:{fill:{color:null},outline:{opacity:1,startcap:{width:"medium",height:"medium",style:"none"},endcap:{width:"medium",height:"medium",style:"none"}}},lines:{fill:{color:null},outline:{opacity:1}},freehand:{fill:{color:null},outline:{opacity:1}},ellipse:{},fillrect:{},polygon:{},text:{text:{verifyFontFamily:!1}}},m={};function b(){o.bind.apply(o,arguments)}function x(){return o.trigger.apply(o,arguments),r}function y(){var e=vn.matrix(),t=E();e.rotate(p.rotation,t.x,t.y),p.transform=e}function _(){p.originalWidth&&p.originalHeight&&p.prevWidth&&p.prevHeight&&(p.originalWidth=p.originalWidth*(p.width/p.prevWidth),p.originalHeight=p.originalHeight*(p.height/p.prevHeight),p.prevWidth=null,p.prevHeight=null),p.isresizing=!1;var e,t,n=E(),o=(e=k(),t=n,{x:e.x(t.x,t.y),y:e.y(t.x,t.y)});o.x===n.x&&o.y===n.y||S(o.x-n.x,o.y-n.y)}function w(e,t){if(e){var n=p.rotation;e.hasOwnProperty("rotation")&&(e.rotation=(e.rotation+360)%360),z(e,t),n!==p.rotation&&function(e,t){var n=(e-t+360)%360,o=vn.matrix(),i=k();o.add(i.a,i.b,i.c,i.d,i.e,i.f);var a=E();o.rotate(n,a.x+a.width/2,a.y+a.height/2);var r=o.x(a.x,a.y),l=o.y(a.x,a.y);S(r-a.x,l-a.y),y()}(p.rotation,n)}}function z(e,t){t?pn.extend(!0,p,e):pn.extend(p,e)}function k(){return p.transform}function P(){f={update:function(e){p.selected!==f.selected&&D();var t=!1,n=pn.extend(!0,{},p);delete n.update,delete n.getPageIndex,delete n.transform,c&&c.inEditMode()?x({type:"annotationtextchangefailed",anno:r}):(e||(t=function e(t,n,o){if(t!==n)return!!t;for(var i in t)if(t.hasOwnProperty(i)){if("extra"===i)continue;if(n.hasOwnProperty(i)){if("points"===i){if(t.points===n.points)return!t.points;if(t.points.length!==n.points.length)return!0;for(var a=0;a<t.points.length;a++)if(e(t.points[a],n.points[a],[]))return!0}if(-1<o.indexOf(i)){if(e(t[i],n[i],B[i]))return!0}else if(t[i]!==n[i])return!0}}return!1}(f,p,["fill","outline","text"]),w(f,!0)),p.update&&delete p.update,p.getPageIndex&&delete p.getPageIndex,H(),L(),null!==l&&(!p.readonly&&p.selectable?(m.isBound("selectable")||(o.bind(m.selectable),m.bound("selectable")),p.readonly||!p.movable||m.isBound("movable")?!p.readonly&&p.movable||!m.isBound("movable")||(o.unbind(m.movable),m.unbound("movable")):(o.bind(m.movable),m.bound("movable")),mn.Features.Touch&&(p.readonly||!p.resizable||m.isBound("resizable")?!p.readonly&&p.resizable||!m.isBound("resizable")||(o.unbind(m.resizable),m.unbound("resizable")):(o.bind(m.resizable),m.bound("resizable")))):!p.readonly&&p.selectable||!m.isBound("selectable")||(o.unbind(m.selectable),m.unbound("selectable"),o.unbind(m.movable),m.unbound("movable"),o.unbind(m.resizable),m.unbound("resizable"))),t&&x({type:"annotationchanged",ann:r,annobefore:n}))},changeTabIndex:function(e){p.tabindex=e},getPageIndex:function(){return r._pageindex}},pn.extend(!0,f,p)}function T(){return JSON.stringify(p)}function D(e){if(p){var t={ann:r,append:!0,page:null,pageindex:r._pageindex,type:""};e&&(t.append=e.shiftKey||e.ctrlKey||void 0!==e.append&&e.append,t.page=e.page,t.pageindex=e.pageindex),t.append||!p.selected?(p.selected=!p.selected,t.type=p.selected?"selected":"deselected"):p.selected&&!t.append&&(t.type="reselected"),""!==t.type&&x(t)}}function C(e){var t=null;switch(p.type){case"image":(t=e.image()).attr("src",p.src);break;case"highlight":case"rectangle":case"fillrect":case"text":case"stamp":t=e.rect();break;case"ellipse":case"line":case"lines":case"freehand":case"polygon":t=e.path();break;case"custom":t=h.construct(e)}return e._annos&&e._annos.push(t),t}function M(){null!==l&&(s?o.unbind(s,l):o.unbind(l));var e={};!p.readonly&&p.selectable&&(pn.extend(e,m.selectable),m.bound("selectable"),a.readonly||p.readonly||!p.movable||(pn.extend(e,m.movable),m.bound("movable")),!a.readonly&&!p.readonly&&p.resizable&&mn.Features.Touch&&(pn.extend(e,m.resizable),m.bound("resizable"))),l=e,o.bind(s,e)}
/**
   * Returns bounding box of the annotation in document space.
   */
function E(){!g&&p.points&&(g=Ae(p.points));var e=p.points?g:p;return{x:e.x,y:e.y,width:e.width,height:e.height}}function S(e,t){if(p.points){for(var n=0;n<p.points.length;n++)p.points[n].x+=e,p.points[n].y+=t;g&&(g.x+=e,g.y+=t)}"custom"!==p.type&&p.points||(p.x+=e,p.y+=t),y(),O()}t.multiview||(I=t.type,pn.extend(!0,p,v[I])),z(t,!0),y(),"custom"===p.type&&(h=new W(p,o)),b({repaint:(d=new U(i,p,a,o,r,h)).events.update,viewchanged:d.events.viewchanged,drawn:M,resized:_}),p.points&&(0<p.x||0<p.y)&&(S(p.x,p.y),p.x=0,p.y=0,p.width=1,p.height=1),m={selectable:{selectchange:D},movable:{dragstart:d.events.dragstart,dragmove:d.events.dragmove,dragend:d.events.dragend},resizable:{pinchstart:d.events.pinchstart,pinchmove:d.events.pinchmove,pinchend:d.events.pinchend},boundEvents:{resizable:!1,movable:!1,selectable:!1},isBound:function(e){return this.boundEvents[e]},bound:function(e){this.boundEvents[e]=!0},unbound:function(e){this.boundEvents[e]=!1}},r.dispose=function(){p.selected&&D(),o&&o.unbind(),s&&s.remove(),c&&c.dispose(),u&&u.remove(),d&&d.unbindEvents(),p=u=c=s=o=r=a=d=null},r.bind=b,r.unbind=function(){o.unbind.apply(o,arguments)},r.trigger=x,r.set=w,r.get=function(e){return e?p[e]:p},r.getTransform=k,r.setAnnotationId=function(e){p.annotationId=e},r.setFIndex=function(e){p.fIndex=e},r.setTabIndex=function(e){p.tabindex=e},r.notifyChanges=function(e){var t=pn.extend(!0,{},r.getClonedData());delete t.update,delete t.getPageIndex,pn.extend(!0,t,e),x({type:"annotationchanged",anno:r,annobefore:t})},r.getClonedData=function(){return f?pn.extend(!0,f,p):P(),delete f.transform,delete f.prevWidth,delete f.prevHeight,f},r.getObject=function(){return s},r.getEventObject=function(){return o},r.getZoom=function(){return a.getZoom(r._pageindex)},r.stringify=T,r.getJSON=T,r.toggleSelected=D,r.isCloneSource=function(e){return f&&f===e},r.getBox=E,r.translate=S,r.transform=function(e,t,n,o){var i=E(),a=n/i.width,r=o/i.height;if(p.points&&0<p.points.length&&"custom"!==p.type){for(var l=0;l<p.points.length;l++)p.points[l].x=e+(p.points[l].x-i.x)*a,p.points[l].y=t+(p.points[l].y-i.y)*r;g.x=e,g.y=t,g.width*=a,g.height*=r}else p.x=e,p.y=t,p.width*=a,p.height*=r;p.isresizing=!0,p.prevWidth||p.prevHeight||(p.prevWidth=p.width,p.prevHeight=p.height),x({type:"annoresizing"}),O()},r.transformUI=function(){d.transformUI.apply(d,arguments)};var I;var F=(r.commitTransform=function(){d.commitTransform()},!1),A=mn.Explorer?20:5;function O(){F||(F=!0,setTimeout(V,A))}function V(){F=!1,L()}function L(e){e&&(u&&(u=null),s=C(e),h&&h.render(s,p),H(),M(),"text"!==p.type&&"stamp"!==p.type||null!==c||(c=new N(i,r,e,a)),c&&c.changepaper(e),x({type:"viewchanged",annview:s,textview:c})),x("repaint")}function H(){if(s){var e={fill:p.fill.color,"fill-opacity":p.fill.opacity};pn.extend(e,(t={stroke:p.outline.color,"stroke-width":p.outline.width*a.getZoom(r._pageindex),"stroke-opacity":p.outline.opacity},s._linewidth=p.outline.width,vn.fn.addArrow||(p.outline.startcap&&(t["arrow-start"]=j(p.outline.startcap)),p.outline.endcap&&(t["arrow-end"]=j(p.outline.endcap))),t)),s.attr(e),vn.fn.addArrow&&(p.outline.startcap&&vn.fn.addArrow(s,j(p.outline.startcap),!1),p.outline.endcap&&vn.fn.addArrow(s,j(p.outline.endcap),!0)),p.visible?s.show():s.hide()}var t;c&&(c.set(p.text),c.updateView()),s&&s.node&&""!==p.src&&"image"===p.type&&(void 0!==s.node.src&&s.node.src?s.node.src=p.src:s.node.href.baseVal=p.src),R()}function R(){p&&null!=p.tooltip&&"text"!==p.type&&"stamp"!==p.type&&s&&s.attr("title",p.tooltip)}function j(e){return[e.style,"-",e.width,"-",e.height].join("")}r.startDraw=function(e,t,n,o){w(n),(s=C(t)).transform(d.getTransform()),("text"===p.type||"stamp"===p.type)&&(c=new N(i,r,t,a,o)),R(),H(),d.drawStart(e,s,c)},r.repaint=L,r.updateView=H;var B={fill:[],outline:["startcap","endcap"],text:["font"],font:[],startcap:[],endcap:[]};return r},Ve=function(e,t,n){var o=this,a=e,i=t,r=n,u=[];function l(e,t,n,o,i){var a,r,l=[].concat(t),s=null;(s=d(n))===n&&null!==s&&(n=s._index),o||f(s||n,t);for(var c=0;c<l.length;c++)a=l[c],!e&&i&&a===i||(0<=(r=pn.inArray(a,u[n]))?e||u[n][r]!==a||u[n].splice(r,1):e&&(u[n]?u[n].push(a):u[n]=[a]),s&&(e?s._grips.push(a):null!==s._grips&&s._grips.remove(a)),a.get("selected")!==e&&a.toggleSelected({append:!0,pageindex:n,page:s}))}function s(e,t,n){var o="object"==typeof t?t._index:t;i[o]&&l(e,i[o],t,!0,n)}function c(e){for(var t=[],n=0;n<e.length;n++)if(e[n]){t[n]=[];for(var o=0;o<e[n].length;o++)t[n][o]=e[n][o].getClonedData()}return t}function d(t){var e=null;if("object"==typeof t)e=t;else{t=Math.max(t,0);var n=pn.grep(r,function(e){return e._index===t});1<=n.length&&(e=n[0])}return e}function h(e){s(!0,e)}function f(e,t){s(!1,e,t);var n=d(e);n&&n._grips&&n._grips.repaint()}o.dispose=function(){r=i=o=null,u.length=0},o.select=function(e,t,n){var o=e.get("selected");if(l(!0,e,t,n),o){var i=Object.assign({},e.get());a.trigger({type:"annotationselected",annotation:i})}},o.deselect=function(e,t,n){l(!1,e,t,n);var o=Object.assign({},e.get());a.trigger({type:"annotationdeselected",annotation:o})},o.setAnnos=function(e){i=e},o.setPages=function(e){r=e},o.resolvePage=d,o.deselectAll=function(){for(var e=0;e<i.length;e++)f(e)},o.deselectPage=f,o.getAnnotations=
/**
   * Gets an array of all annotation data objects.
   * @returns array of arrays containing annotation data objects for each page of the document.
   */
function(){return c(i)},o.getSelected=function(){return c(u)},o.selectAll=function(){for(var e=0;e<i.length;e++)h(e)},o.selectPage=h};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Fn=function(){function e(){}return e.SetLocalizationStrings=function(e){this._strings=e},e.LocalizationAvailable=function(){return!(void 0===this._strings||void 0===this._strings.annotations)},e.GetAnnotationLocalizedString=function(e){return void 0===this._strings.annotations||void 0===this._strings.annotations[e]?(void 0===this._englishStrings.annotations[e]&&console.error("Missed english string for %s",e),this._englishStrings.annotations[e]):this._strings.annotations[e]},e}();L(Fn,"_strings",{}),L(Fn,"_englishStrings",Tn);var Le=function(t){var e=this,d=pn("<div />"),h=pn("<div />"),f=null,o=null,n={style:["None:none","Arrow:open","Filled Arrow:block","Filled Ellipse:oval","Filled Diamond:diamond"],width:["medium","wide","narrow"],height:["medium","long","short"]},i={fill:{color:!0,opacity:!0},rotation:!0,outline:{color:!0,opacity:!0,width:!0,startcap:n,endcap:n},text:{font:{bold:!0,italic:!0,color:!0,family:!0,size:!0}}};function a(){d.dialog("close")}function r(){l(),a()}function l(){f.set(o,!0),f.updateView(),f.repaint(),h.empty(),g(f.get(),"",i),m()}function s(){f&&function(){var e={};for(var t in i)if(i.hasOwnProperty(t)){var n={};n[t]=f.get(t),pn.extend(!0,e,n)}return JSON.stringify(e)!==JSON.stringify(o)}()&&f.notifyChanges(o),a()}function g(o,e,t){function n(e){var t=this.getAttribute("dataField");if(this.value&&"boolean"!=typeof this.value)if("number"==typeof o[t]){var n=parseFloat(this.value);isNaN(n)||"rotation"!==t||n===o[t]?"opacity"===t&&0<=n&&n<=1||"opacity"!==t&&0<=this.value?o[t]=n:this.value=o[t]:(f.set({rotation:n}),f.repaint())}else o[t]=this.value;else e&&"boolean"==typeof this.value?o[t]=0<=e.target.id.indexOf("true"):this.value=o[t];f.updateView(),f.repaint(),m()}for(var i in o)if(o.hasOwnProperty(i))if("object"==typeof o[i]){var a="text"!==i?v(i):"";t[i]&&("text"!==i||"text"===i&&"text"===f.get("type"))&&g(o[i],e+a,t[i])}else if("type"===i){var r=Fn.GetAnnotationLocalizedString(o[i].replace("fillrect","rectangle")+"DialogTitle");d.dialog("option","title",r)}else if(t[i]){var l=pn("<div/>"),s=p(i,o[i],n,t[i]);s.attr("dataField",i),s.title="",l.addClass("ui-helper-clearfix atala-ui-dialog-clearfix"),l.css({overflow:"hidden"}),s.appendTo(l);var c=Fn.GetAnnotationLocalizedString("label"+(e||e)+v(i));l.append((u=c,pn("<span/>").text(u))),l.appendTo(h)}var u}function p(a,e,t,n){var o=typeof e,r=null;if(pn.isArray(n))r=pn("<select/>").attr({}),pn.each(n,function(e,t){var n=t,o=t,i=t.split(":");1<i.length&&(o=i[0],n=i[1]),o=Fn.GetAnnotationLocalizedString("value"+v(a)+v(n)),r.append(pn("<option/>",{value:n,text:o}))}),r.change(t),r.val(e);else if("string"===o||"number"===o){r=pn("<input/>").attr({type:"text"});var i=e;"color"===a&&(i=function(e){if(!Fn.LocalizationAvailable())return e;var t=document.createElement("canvas");t.height=1,t.width=1;var n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,1,1);var o=n.getImageData(0,0,1,1).data;return"#"+[0,1,2].map(function(e){return("0"+o[e].toString(16)).slice(-2)}).join("")}(e)),r.val(i),r.change(t),r.focus(function(){this.select(),this._focused=!0}),r.mouseup(function(e){this._focused&&(e.preventDefault(),this._focused=!1)})}else if("boolean"===o){var l="bool"+a;c(r=pn("<form/>").attr({id:l,datafield:a}),l+!0,l,Fn.GetAnnotationLocalizedString("radioButtonTrue"),e),c(r,l+!1,l,Fn.GetAnnotationLocalizedString("radioButtonFalse"),!e),r.controlgroup(),r.change(t),r[0].value=e,r.find(".ui-state-hover").each(function(e,t){pn(t).removeClass("ui-state-hover")})}else r=pn("<div>"+e+"</div>");return r.css({float:"right"}),r}function c(e,t,n,o,i){e.append(pn("<input/>").attr({type:"radio",id:t,name:n,checked:i})),e.append(pn("<label/>").attr({for:t}).text(o).height("1.5em"))}function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}function m(){var e=f.getObject();e&&e.paper&&e.paper._page&&e.paper._page._grips.repaint()}return e.show=function(e){for(var t in f=e,h.empty(),o={},i)if(i.hasOwnProperty(t)){var n={};n[t]=f.get(t),pn.extend(!0,o,n)}g(f.get(),"",i),d.dialog("open")},e.hide=a,e.isVisible=function(){return d.dialog("isOpen")},e.cancel=r,e.reset=l,e.okhide=s,function(){h.appendTo(d);var e={};e[Fn.GetAnnotationLocalizedString("dialogButtonOk")]=s,e[Fn.GetAnnotationLocalizedString("dialogButtonReset")]=l,e[Fn.GetAnnotationLocalizedString("dialogButtonCancel")]=r,d.dialog({appendTo:t,minWidth:320,classes:{"ui-dialog":"atala-ui-dialog"},resizable:!0,autoOpen:!1,buttons:e,closeText:a,open:function(){var e=this;!function(e){for(var t=0,n=0;n<e.length;n++){var o=pn(e[n]).height();t<o&&(t=o)}for(var i=0;i<e.length;i++)pn(e[i]).height(t)}(d.parent().find(".ui-dialog-buttonset button")),d.dialog({width:Math.max(320,function(){var e='<span class="atala_title_span">'+d.parent().find(".ui-dialog-title").text()+"AAAAAAAAA</span>";pn("body").append(e);var t=pn("body").find("span:last").width();return pn("body").find("span:last").remove(),t+25}(),function(){for(var e=d.parent().find(".ui-dialog-buttonset button"),t=0,n=0;n<e.length;n++)t+=pn(e[n]).outerWidth(!0);var o=1.5*parseInt(pn(e[0]).css("font-size"));return t+o}()),height:"auto"}),setTimeout(function(){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,e),d.find("input")[0].focus()}.bind(this),100)},beforeClose:function(e){(e.keyCode===pn.ui.keyCode.ESCAPE||e.hasOwnProperty("currentTarget")&&e.currentTarget.classList.contains("ui-dialog-titlebar-close"))&&(mn.Explorer&&d.parent().find(".ui-dialog-buttonset button")[1].focus(),l())}}),d.keypress(function(e){e.keyCode===pn.ui.keyCode.ENTER&&(e.preventDefault(),d.parent().find(".ui-dialog-buttonset button")[0].focus(),s())})}(),e},He=function(l,e){var u,d=8,s=25,a=-22.5,c={e:0,ne:315,n:270,nw:225,w:180,sw:135,s:90,se:45},r={},h={},f=e,g=l._paper.set(),p=l._paper.set(),v=[],m=null,b={},x=null,y={x:0,y:0,width:1,height:1,x2:1,y2:1},o=[],_={},t={dragstart:function(){},dragmove:function(){g.hide()},moved:function(){k(),g.show();for(var e=0;e<v.length;++e){var t=v[e].get();(t.hasOwnProperty("rotatable")&&!t.rotatable||t.hasOwnProperty("readonly")&&!t.readonly)&&m.hide()}}};function w(e,t){return e.attr({fill:"#FFFFE1",cursor:(t||"ne")+"-resize"}),e.grip=!0,e.rect=e.getBBox(),e.hide(),e.center=function(e,t,n,o){var i=d/(n=n||1),a=d/n,r=i/2,l=Math.round(i/2)+.5,s=Math.round(a/2)+.5;mn.Explorer&&(s-=.5);var c=Math.round(e)-l,u=Math.round(t)-s;this.ellipse?(c+=r,this.attr({cx:c,cy:u,r:r,"stroke-width":1})):this.attr({x:c,y:u,width:i,height:a,"stroke-width":1}),this.node.setAttribute("stroke-width",1),this.transform(o)},t&&(e.d={key:t,n:~t.indexOf("n"),s:~t.indexOf("s"),w:~t.indexOf("w"),e:~t.indexOf("e")},e.mousedown(function(e){return function(e,t){if(e.stopPropagation(),!(1<v.length)){for(var n=0;n<v.length;n++){if(!v[n].get("resizable"))return void(o=[]);o[n]=pn.extend(!0,{},v[n].getClonedData()),delete o[n].update,delete o[n].getPageIndex}return pn.extend(b,y),x=c[t.key]===c.n||c[t.key]===c.s?1:0,u=c[t.key]===c.w||c[t.key]===c.e?1:0,(t.n||1===u)&&(b.y=b.y2),t.w&&(b.x=b.x2),pn(l._paper.canvas).on({mouseup:I,mousemove:S}),!1}}(e,this.d)})),e}function n(e){return-1!==pn.inArray(e,v)}function i(){for(var e=0;e<v.length;e++)z(v[e]);v.length=0,p.clear(),g.hide()}function z(e){e.getEventObject().unbind(t)}function k(){0<p.length?T():0<v.length?i():g.hide()}function P(e){for(var t in c)c.hasOwnProperty(t)&&F(g[c[t]],e)}function T(){if(0<p.length){var e=1===p.length?v[0].getBox():p.getBBox();y.x=e.x,y.y=e.y,y.width=e.width,y.height=e.height,y.x2=e.x+e.width,y.y2=e.y+e.height,y.xmid=e.x+e.width/2,y.ymid=e.y+e.height/2,D()}}function D(){var e=1===p.length,t=vn.matrix(),n=1,o="",i=f.getViewerTransform(l._index);if(t.add(i.a,i.b,i.c,i.d,i.e,i.f),e){var a=v[0].getTransform();a&&t.add(a.a,a.b,a.c,a.d,a.e,a.f),n=f.getZoom(l._index),o=t.toTransformString(!0)}g[c.nw].center(y.x,y.y,n,o),g[c.ne].center(y.x2,y.y,n,o),g[c.sw].center(y.x,y.y2,n,o),g[c.se].center(y.x2,y.y2,n,o),g[c.n].center(y.xmid,y.y,n,o),g[c.w].center(y.x,y.ymid,n,o),g[c.e].center(y.x2,y.ymid,n,o),g[c.s].center(y.xmid,y.y2,n,o);var r=v[0].get();r.hasOwnProperty("rotatable")&&(!r.rotatable||r.hasOwnProperty("readonly")&&r.readonly)?m.hide():(m.show(),m.center(y.xmid,y.y-s/n,n,o)),P((1===v.length?v[0].get().rotation:0)+f.getPageRotation(l._index))}function C(e){var t=l.offset(),n=Q(l._paper.canvas,l);return{x:e.pageX-(t.left+n.left),y:e.pageY-(t.top+n.top)}}function M(e){e.stopPropagation();var t,n,o,i=(t=C(e),n=f.getViewerTransform(l._index).invert(),o=n.x(t.x,t.y),t.y=n.y(t.x,t.y),t.x=o,t),a=180*Math.atan2(i.y-b.ymid,i.x-b.xmid)/Math.PI+90;return 1===v.length&&(v[0].set({rotation:a}),v[0].repaint()),l._grips.repaint(),!1}function E(e){return e.stopPropagation(),pn(l._paper.canvas).off({mouseup:E,mousemove:M}),1===v.length&&(v[0].getEventObject().trigger("rotated"),v[0].getEventObject().trigger({type:"annotationchanged",ann:v[0],annobefore:_})),!1}function S(e){if(e.stopPropagation(),1===p.length){var t=function(e){if(0<p.length){var t="set"===p[0].type?p[0][0]:p[0],n=t.matrix.invert(),o={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};return o}return e}(C(e)),n=Math.abs(t.x-b.x),o=Math.abs(t.y-b.y),i=t.x<b.x?b.x-n:b.x,a=t.y<b.y?b.y-o:b.y;r=i,l=a,s=n,c=o,0===x&&(y.x=r,y.width=Math.max(s,1),y.x2=r+y.width,y.xmid=r+y.width/2),0===u&&(y.y=l,y.height=Math.max(c,1),y.y2=l+y.height,y.ymid=l+y.height/2),D(),function(){for(var e=0;e<v.length;e++)v[e].transform(y.x,y.y,y.width,y.height)}()}var r,l,s,c;return!1}function I(e){e.stopPropagation();for(var t=0;t<v.length;t++)v[t].getEventObject().trigger("resized"),v[t].getEventObject().trigger("annoresized"),v[t].getEventObject().trigger({type:"annotationchanged",ann:v[t],annobefore:o[t]}),v[t].repaint();return 0<p.length&&T(),pn(l._paper.canvas).off({mouseup:I,mousemove:S}),!1}function F(e,t){if(e&&e.d&&e.d.key){var n=vn.matrix();n.rotate(t);var o={x:n.x(r[e.d.key].x,r[e.d.key].y),y:n.y(r[e.d.key].x,r[e.d.key].y)};for(var i in h)if(h.hasOwnProperty(i)&&A(o,h[i].start,h[i].end)){e.attr({cursor:(h[i].dir||"ne")+"-resize"});break}}}function A(e,t,n){function o(e,t){return 0<-e.x*t.y+e.y*t.x}return!o(t,e)&&o(n,e)}!function(){var e,t;for(var n in c)if(c.hasOwnProperty(n)){var o=l._paper.rect(0,0,d,d),i=w(o,n);g.push(i),g[c[n]]=i,(e=vn.matrix()).rotate(c[n]),r[n]={x:e.x(1,0),y:e.y(1,0)}}(t=w(l._paper.circle(0,0,d/2)).attr({fill:"#00FF40",cursor:"pointer"})).ellipse=!0,g.push(t),t.mousedown(function(e){return function(e){if(e.stopPropagation(),1===v.length&&1===p.length){for(var t=0;t<v.length;t++){var n=v[t].get();if(n.hasOwnProperty("readonly")&&n.readonly||n.hasOwnProperty("rotatable")&&!n.rotatable)return}pn.extend(b,y);var o=v[0].getTransform(),i=o.x(b.xmid,b.ymid);b.ymid=o.y(b.xmid,b.ymid),b.xmid=i,delete(_=pn.extend(!0,{},v[0].getClonedData())).update,delete _.getPageIndex,pn(l._paper.canvas).on({mouseup:E,mousemove:M})}}(e)}),m=t,function(){var o=vn.matrix();o.rotate(a,0,0);for(var e=function(e,t){var n={dir:t,start:{x:o.x(r[e].x,r[e].y),y:o.y(r[e].x,r[e].y)},end:{x:o.x(r[t].x,r[t].y),y:o.y(r[t].x,r[t].y)}};return n},t=["e","ne","n","nw","w","sw","s","se"],n=0;n<t.length-1;++n)0===n&&(h[t[n]]=e(t[t.length-1],t[n])),h[t[n+1]]=e(t[n],t[n+1])}()}(),this.push=function(e){n(e)||(v.push(e),p.push(e.getObject()),!0===e.get("selectable")&&e.getEventObject().bind(t),k(),g.toFront(),g.show())},this.contains=n,this.remove=function(e){for(var t=0;t<v.length;t++)v[t]===e&&v.splice(t,1);p.exclude(e.getObject()),z(e)},this.clear=i,this.repaint=k,this.updateCursor=P};function Re(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Annotations API.
 * @class
 * @inner
 * @name AnnotationController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var An=function e(t,n,o){var i=this,a=this,h=t,x=n,c=new Ve(h),r={
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
       * Gets a nested array of selected annotation data objects for each page with annotations. Outer array is pages, inner array is selected annotations.
       * @returns {Array.<Array.<AnnotationData>>} - Annotation data objects for selected annotations only for each page with annotations.
       * @instance
       * @function
       */
getSelected:c.getSelected,
/**
       * Selects all annotations on every page.
       * @instance
       * @function
       */
selectAll:c.selectAll,
/**
       * Deselects all annotations on every page.
       * @instance
       * @function
       */
deselectAll:c.deselectAll,
/**
       * Selects all annotations on the given page.
       * @param {number} index - The index of the page the annotations should be selected on.
       * @instance
       * @function
       */
selectAllOnPage:c.selectPage,
/**
       * Deselects all annotations on the given page.
       * @param {number} index - The index of the page the annotations should be deselected on.
       * @instance
       * @function
       */
deselectAllOnPage:c.deselectPage,
/**
       * Cancels the drawing of an annotation and returns the viewer to the previous tool.
       * @instance
       * @function
       */
cancelDraw:xe,
/**
       * Setups the viewport to create an annotation
       * @param {AnnotationData} aConfig - Configuration for the annotation to draw
       * @param {NotificationCallback} [callback] - function to call when the annotation has finished drawing.
       * @param {NotificationCallback} [cancelled] - function to call when the annotation draw was canceled.
       * @instance
       * @function
       */
drawAnnotation:function(e,t,n){x._controllers.mouseTool.setTool(bn.None,bn.None),he(e,!0,function(){x._controllers.mouseTool.setTool(bn.Pan,bn.None),"function"==typeof t&&t()},function(){x._controllers.mouseTool.setTool(bn.Pan,bn.None),"function"==typeof n&&n()})},
/**
       * Gets an array of annotation data objects located on the given zero based page index.
       * @param {number} index - The page index the annotations are located on.
       * @returns {AnnotationData[]} Annotation data objects on the given page.
       * @instance
       * @function
       */
getFromPage:J,
/**
       * Creates an annotation on the desired page with the given annotation data.
       * @param {AnnotationData} annotationConfig - Key value pairs representing annotation data.
       * @param {number} index - The index of the page the annotation should be created on.
       * @returns {AnnotationData} - Annotation data.
       * @instance
       * @function
       */
createOnPage:X,
/**
       * Deletes an annotation on the given page by it's index on the page.
       * @param {number} pageIndex - Page index the annotation is located on.
       * @param {number} annIndex - Index of the annotation on the page.
       * @instance
       * @function
       */
deleteFromPage:G,
/**
       * Shows the editor dialog for text annotations. Ignores other types of annotations.
       * @param {AnnotationData} annotation - the annotation object to show editor for.
       *
       * Annotation object should be retrieved using corresponding API. If it's constructed by the application, annotation won't be matched.
       * @instance
       * @function
       */
showEditor:function(e){return ne(e,!0)},
/**
       * Hides the text annotation editor. Applies only to text annotations and ignores other types of annotations.
       * @param {AnnotationData} annotation - The annotation object to hide editor for.
       * @instance
       * @function
       */
hideEditor:function(e){return ne(e,!1)},
/**
       * Sets the default annotation properties for initially created annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.defaults}.
       * @param {AnnotationData[]} aConfig - Default configurations for different types of the annotations.
       * @returns {Atalasoft.Controls.WebDocumentViewer}
       * @instance
       * @function
       */
setDefaults:K,
/**
       * Sets the default annotation properties for image annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.images}
       * @param {AnnotationData[]} aConfig - Default configurations image annotations.
       * @returns {Atalasoft.Controls.WebDocumentViewer}
       * @instance
       * @function
       */
setImages:ee,
/**
       * Sets the default annotation properties for stamp annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.stamps}.
       * @param {AnnotationData[]} aConfig - Default configurations stamp annotations.
       * @returns {Atalasoft.Controls.WebDocumentViewer}
       * @instance
       * @function
       */
setStamps:$,
/**
       * Inserts a layer of annotations at the source URL and index into the given page index. Single layer of annotations corresponds to single document page.
       * @param {string} sourceUrl - Reserved for future use.
       * @param {AnnotationData[]} layer - The annotation layer data.
       * @param {number} index - Index the layer is to be inserted into.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
insertLayer:function(e,t,n,o){n=T(e,t,n),"function"==typeof o&&o(),h.trigger({type:w.layerinserted,srcurl:e,srcindex:t,index:n}),h.trigger(w.layerschanged)},
/**
       * Removes a layer(page annotation) of annotations. All other layers are shifted. This operation corresponds to removing page from the document.
       * @param {number} index - index of the layer to be removed.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
removeLayer:function(e,t){var n=C(e);"function"==typeof t&&t(),h.trigger({type:w.layerremoved,layer:n,index:e}),h.trigger(w.layerschanged)},
/**
       * Moves a layer of annotations from one page index to another.
       * @param {number} sourceIndex - index of the layer to be moved.
       * @param {number} destIndex - Destination zero based page index.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
moveLayer:function(e,t,n){t=M(e,t),"function"==typeof n&&n(),h.trigger({type:w.layermoved,srcindex:e,destindex:t}),h.trigger(w.layerschanged)},
/**
       * Scrolls viewer to the specified annotation.
       * @param {AnnotationData} anno - the annotation object to scroll to.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function 
       */
scrollTo:function(e,t){var n=this,o=function(){Re(this,n),"function"==typeof t&&t()}.bind(this),i=e.getPageIndex(),a=Q(e,i);if(a){var r=a.getZoom(),l=Fe,s={x:0,y:0};if(e.type===l.line||e.type===l.lines||e.type===l.freehand){var c=e.points.map(function(e){return Re(this,n),e.x}.bind(this)),u=e.points.map(function(e){return Re(this,n),e.y}.bind(this));s.x=(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2,s.y=(Math.min.apply(Math,u)+Math.max.apply(Math,u))/2}else s.x=e.x+e.width/2,s.y=e.y+e.height/2;s.x*=r,s.y*=r,x.showPagePoint(i,s,_n.Center,!0,o)}else o()},
/**
       * Saves all annotations from all document pages.
       * @param {string} xmpFileName - file name to save to.
       * @param {NotificationCallback} [saveCallbackHandler] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
saveAll:function(e,t){ie(pn.extend(!0,{},{atala_annossavemode:1,atala_xmpfilename:e||"",atala_annos:ke()}),t),m.annoIdsCreated.length=0,m.annoIdsModified.length=0,m.annoIdsRemoved.length=0},
/**
       * Saves annotations from specified document pages.
       * @param {string} xmpFileName - file name to save to.
       * @param {integer} fIndex - null-based page index to save annotations from.
       * @param {integer} [count] - count of pages starting from fIndex.
       * @param {NotificationCallback} [saveCallbackHandler] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
save:function(e,t,n,o){var i=n?t+n-1:t;ie(pn.extend(!0,{},{atala_annossavemode:2,atala_xmpfilename:e||"",atala_annosstartindex:t,atala_annosendindex:i,atala_annos:ke(t,i)}),o);for(var a=t;a<=i;a++)if(m.annos.hasOwnProperty(a)&&m.annos[a])for(var r=m.annos[a].length,l=0;l<r;l++)if(m.annos[a][l]){var s=m.annos[a][l].get();s&&se(s.annotationId)}},
/**
       * Saves single annotation by its unique identifier.
       * @param {string} xmpFileName - file name to save to.
       * @param {integer} annotationId - unique annotation object identifier.
       * @param {NotificationCallback} [saveCallbackHandler] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
saveSingle:function(e,t,n){var o=-1;if(0<=m.annoIdsCreated.indexOf(t)?o=1:0<=m.annoIdsModified.indexOf(t)?o=2:0<=m.annoIdsRemoved.indexOf(t)&&(o=3),-1===o){var i=!1;if(m.annos)for(var a=m.annos.length,r=0;r<a;r++){if(m.annos[r])for(var l=m.annos[r].length,s=0;s<l;s++){var c=m.annos[r][s].getClonedData();if(c&&c.annotationId===t){i=!0;break}}if(i)break}if(!i)return;o=2}var u="";if(3===o)u='{"annotationId":'+t+"}";else{var d=H(t);u=JSON.stringify(Pe(d,d.get().fIndex))}ie(pn.extend(!0,{},{atala_annossavemode:3,atala_xmpfilename:e||"",atala_annochangestatus:o,atala_annos:u}),n),se(t)},
/**
       * Loads all annotations from all document pages.
       * @param {string} xmpFileName - file name to load from.
       * @param {NotificationCallback} [loadCallbackHandler] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
loadAll:function(e,t){ae(pn.extend(!0,{},{atala_annoloadmode:1,atala_xmpfilename:e||""}),t)},
/**
       * Loads annotations from specified document pages.
       * @param {string} xmpFileName - file name to load from.
       * @param {integer} fIndex - null-based page index to load annotations from.
       * @param {integer} [count] - count of pages starting from fIndex.
       * @param {NotificationCallback} [loadCallbackHandler] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
load:function(e,t,n,o){var i=n?t+n-1:t;ae(pn.extend(!0,{},{atala_annoloadmode:2,atala_xmpfilename:e||"",atala_annosstartindex:t,atala_annosendindex:i}),o)},
/**
       * Loads single annotation by its unique identifier.
       * @param {string} xmpFileName - file name to load from.
       * @param {integer} annotationId - unique annotation object identifier.
       * @param {NotificationCallback} [loadCallbackHandler] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
loadSingle:function(e,t,n){ae(pn.extend(!0,{},{atala_annoloadmode:3,atala_xmpfilename:e||"",atala_annoid:t}),n)},
/**
       * Indicates whether annotations properties window is shown.
       * @returns {boolean}
       * @instance
       * @function
       */
isAnnotationsPropertiesWindowShown:function(){return Re(this,i),null!=p&&p.isVisible()}.bind(this),
/**
       * Shows annotation properties window for selected annotation.
       * @instance
       * @function
       */
showAnnotationsPropertiesWindow:function(){m.activeanno&&W()},
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
deselectAll:c.deselectAll,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#createOnPage|annotations.createOnPage} instead.
     */
createAnnotationOnPage:X,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#getFromPage|annotations.getFromPage} instead.
     */
getAnnotationsFromPage:J,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#deleteFromPage|annotations.deleteFromPage} instead.
     */
deleteAnnotationOnPageAtIndex:G,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setDefaults|annotations.setDefaults} instead.
     */
setAnnotationDefaults:K,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setImages|annotations.setImages} instead.
     */
setImages:ee,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setStamps|annotations.setStamps} instead.
     */
setStamps:$};if(e.__exposedApi=r.annotations,!t)return null;var l=n._config,s=n._pages,u=!1,d=null,f=null,g=null,p=null,v=null,m={annos:[],activepage:null,activeanno:null,readonly:!!o,zoom:h.getZoom(),getZoom:x.getPageScale,getViewerTransform:x.getViewerTransform,getPageRotation:x.getPageRotation,annoIdsCreated:[],annoIdsModified:[],annoIdsRemoved:[],maxAnnotationId:0},b={},y=!1,_=!1,w={click:"annotationclicked",dblclick:"annotationdoubleclicked",touchstart:"annotationtouchstart",interactend:"annotationtouchend",touchmove:"annotationtouchmove",pinchmove:"annotationpinchresize",rightclick:"annotationrightclicked",mousedown:"annotationmousedown",mousedownleft:"annotationmousedownleft",mousedownright:"annotationmousedownright",mousemove:"annotationmousemove",mouseout:"annotationmouseout",mouseup:"annotationmouseup",mouseover:"annotationmouseover",annocreate:"annotationcreated",annoload:"annotationloaded",moved:"annotationmoved",rotated:"annotationrotated",annoresized:"annotationresized",repaint:"annotationrepainted",layerinserted:"layerinserted",layerremoved:"layerremoved",layermoved:"layermoved",layerschanged:"layerschanged",annotationchanged:"annotationchanged",annotationtextchanged:"annotationtextchanged",annotationspropertieswindowopened:"annotationspropertieswindowopened",annotationselected:"annotationselected",annotationdeselected:"annotationdeselected"};function z(){u=!0,m.readonly||(f=B(g),p=new Le(n._config.parent),null!=l.annotations.defaults&&K(l.annotations.defaults),null!=l.annotations.stamps&&$(l.annotations.stamps),null!=l.annotations.images&&ee(l.annotations.images),null!=l.annotations.custom&&te(l.annotations.custom))}
/**
   * [Internal] Disposes memory intensive objects
   * @returns undefined
   */function k(e){v.translate(e.dx,e.dy)}function P(e){m.zoom=e.zoom}function T(e,t,n){e||"number"!=typeof t||(t=C(t)),t=t||[],null==n?n=m.annos.length:n<0&&(n=0);for(var o=m.annos.length,i=0;i<t.length;i++)Z(t[i],n,null);if(o<n)for(var a=o;a<m.annos.length;++a)m.annos[a]||(m.annos[a]=[]);for(var r=m.annos[n].length,l=0;l<r;l++){var s=m.annos[n][l].get().annotationId;s&&0!==s&&!de(s)||(s=le()+1,m.annos[n][l].setAnnotationId(s)),m.maxAnnotationId<s&&(m.maxAnnotationId=s),m.annos[n][l].setFIndex(n),ce(s)}return D(),n}function D(){if(m.annos){for(var e=1/0,t=m.annos.length,n=0;n<t;n++)if(m.annos[n])for(var o=m.annos[n].length,i=0;i<o;i++){var a=m.annos[n][i].get().annotationId;a<e&&(e=a)}if(e!==1/0&&1<e)for(var r=m.maxAnnotationId=0;r<t;r++)if(m.annos[r])for(var l=m.annos[r].length,s=0;s<l;s++){var c=m.annos[r][s].get().annotationId,u=c-e+1;m.annos[r][s].setAnnotationId(u),m.maxAnnotationId<u&&(m.maxAnnotationId=u);var d=m.annoIdsCreated.indexOf(c);-1<d&&(m.annoIdsCreated[d]=u),-1<(d=m.annoIdsModified.indexOf(c))&&(m.annoIdsModified[d]=u),-1<(d=m.annoIdsRemoved.indexOf(c))&&(m.annoIdsRemoved[d]=u)}}}function C(e){if(m.annos&&e<m.annos.length){if(m.annos[e])for(var t=m.annos[e].length,n=0;n<t;n++){var o=m.annos[e][n].get();o&&ue(o.annotationId)}for(var i=pn.extend(!0,{},m.annos[e]),a=m.annos[e].length-1;0<=a;a--)Y(a,e);return i}return null}function M(e,t){return T(null,C(e),t)}function E(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}function S(e){I(e.index,e.page)}function I(e,t){if(e<m.annos.length&&(F(t),m.annos[e]&&m.annos[e].length))for(var n,o=0;o<m.annos[e].length;o++)(n=m.annos[e][o])._pageindex=e,n.repaint(t._paper),n.get("selected")&&c.select(n,e,!0)}function F(e){e._grips.clear(),e._paper._annos.remove(),e._paper._annos.clear(),e._paper.forEach(function(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}),e._paper._trash.remove(),e._paper._trash.clear(),xe()}function A(e){m.activepage=e}function O(e){e.page._paper&&(F(e.page),e.page.append(e.page._paper.canvas))}function V(e){L(e.page)}function L(e){if(e&&0<=e._index&&m.annos[e._index]){for(var t=0;t<m.annos[e._index].length;t++)m.annos[e._index][t].repaint();e&&e._grips.repaint()}}function H(e){for(var t=m.annos.length,n=0;n<t;n++)if(m.annos[n])for(var o=m.annos[n].length,i=0;i<o;i++){var a=m.annos[n][i].get();if(a&&a.annotationId===e)return m.annos[n][i]}return null}function R(e){f&&(f.visible&&j(),f.remove());var t=pn.extend(!0,{},g);if(h.trigger("contextmenu",[m.activeanno.getClonedData(),t]),pn.isEmptyObject(t))f=null;else{for(var n in t)t.hasOwnProperty(n)&&(t[n]=N(t[n]));f=B(t)}!function(e){if(f){var t=Fn.GetAnnotationLocalizedString("menuPropertiesButton"),n=Fn.GetAnnotationLocalizedString("menuDeleteButton");if(m.activeanno.get("readonly"))f.children(":contains("+t+")").off("click").children("a, div").css("color","#cdc9c9"),f.children(":contains("+n+")").off("click").children("a, div").css("color","#cdc9c9");else{var o=f.children(":contains("+t+")");void 0!==o.data("events")&&"click"in o.data("events")||o.on("click",W),o.children("a").css("color","#000000")}0===f.closest().length&&d.prepend(f);var i={x:e.x-6,y:e.y-6};f.css({left:i.x,top:i.y}),f.show(),f.visible=!0}}(e)}function j(){f&&(f.hide(),f.visible=!1)}function B(e){var t=x.createMenu(e);return t.css({position:"fixed","z-index":99999}),t.mouseleave(j),t.visible=!1,t}function N(e){return function(){return j(),e.call(this,m.activeanno.getClonedData())}}function q(){var e=m.activepage?m.activepage._index:0;if(m.annos[e]){var t=pn.inArray(m.activeanno,m.annos[e]);-1!==t&&(m.activeanno=null,Y(t,e))}j()}function W(){h.trigger({type:"annotationspropertieswindowopened",annotation:m.activeanno}),j(),p.show(m.activeanno)}
/**
   * Clears the annotations and related data from all pages
   */
function U(){var e=m.annos.length;if(0<e){for(var t=0;t<e;t++)if(m.annos[t])for(var n=m.annos[t].length,o=0;o<n;o++){var i=m.annos[t][o].get();i&&ue(i.annotationId)}if(m.annos.length=0,s)for(var a=0;a<s.length;a++)s[a]._grips.clear(),s[a]._paper.forEach(E),s[a]._paper._trash.remove(),s[a]._paper._trash.clear(),s[a]._paper._annos.remove(),s[a]._paper._annos.clear();h.trigger({type:"annotationscleared"})}}
/**
   * Creates an annotation on the desired page with the given annotation data.
   * @param aConfig: object, Key value pairs representing annotation data.
   * @param pgNum: number, The zero based index of the page the annotation should be created on.
   * @param callback: function, Function to be called when the operation has completed.
   * @returns object: Atalasoft.Annotations.Annotation.
   */function Z(e,t,n){var o={};e.multiview?o=e:(e&&e.type&&b[e.type]&&pn.extend(!0,o,b[e.type]),pn.extend(!0,o,e));var i=new Oe(h,o,m);i._pageindex=t,i.setFIndex(t);var a=i.get().annotationId;return a&&0!==a&&!de(a)||(a=le()+1,i.setAnnotationId(a)),m.maxAnnotationId<a&&(m.maxAnnotationId=a),void 0===m.annos[t]&&(m.annos[t]=[]),m.annos[t].push(i),ce(a),x.redrawPageFromIndex(t,!0),"function"==typeof n&&n(i),_e(i),h.trigger({type:w.annocreate,anno:i,annotation:i,page:t}),i}function X(e,t,n){return Z(e,t,n).getClonedData()}function G(e,t){Y(t,e)}
/**
   * Deletes an annotation on the given z-index and zero based page index.
   * @param annIndex: number, Zero based z-index of the annotation.
   * @param pgNum: number, Zero based page index the annotation is located on.
   */function Y(e,t){var n=m.annos[t].splice(e,1)[0],o=n.get();o&&ue(o.annotationId),m.activepage&&m.activepage._paper&&m.activepage._paper._annos.exclude(n.getObject()),m.activeanno===n&&(m.activeanno=null),n.dispose(),m.activepage&&m.activepage._grips&&m.activepage._grips.repaint(),h.trigger({type:"annotationdeleted",page:t,index:e})}function J(e){var n=this,t=[];if(0===m.annos.length||void 0===m.annos[e])return t;for(var o=0;o<m.annos[e].length;o++)t[o]=m.annos[e][o].getClonedData();return t.sort(function(e,t){return Re(this,n),e.tabindex-t.tabindex}.bind(this))}function Q(e,t){if(isFinite(t)){if(t<m.annos.length)for(var n=0;n<m.annos[t].length;++n)if(m.annos[t][n].isCloneSource(e))return m.annos[t][n]}else for(var o=0;o<m.annos.length;++o){var i=Q(e,o);if(i)return i}return null}function K(e){l.annotations.defaults=e;for(var t=0;t<e.length;t++)"string"==typeof e[t].type&&(b[e[t].type]=e[t]);return h}function $(e){l.annotations.stamps=e;for(var t=0;t<e.length;t++)Ie(e[t]);if(u){var n={type:"button",id:x._id+"_toolbar_Button_Stamp",icon:"stamp",tooltip:"Draw Stamp",text:""},o=x.createDropDownButton(n);n.onclick=x.drawAnnotation,x.createDropDownMenu(o,n,e)}return h}function ee(e){l.annotations.images=e;for(var t=0;t<e.length;t++)e[t].type="image";if(u){var n={type:"button",id:x._id+"_toolbar_Button_Image",icon:"image",tooltip:"Draw Image",text:""},o=x.createDropDownButton(n);n.onclick=x.drawAnnotation,x.createDropDownMenu(o,n,e)}return h}
/**
   * Sets the default annotation properties for initially created custom annotations.  This accepts the same input as the main config.
   * @param cConfig: array, An array of JSON objects representing custom annotation types.
   * @returns object: Atalasoft.Controls.WebDocumentViewer
   */function te(e){l.annotations.custom=e;for(var t=0;t<e.length;t++)e[t].type="custom";if(u){var n={type:"button",id:x._id+"_toolbar_Button_Custom",icon:"image",tooltip:"Draw Custom",text:""},o=x.createDropDownButton(n);n.onclick=x.drawAnnotation,x.createDropDownMenu(o,n,e)}return h}function ne(e,t){if("text"===e.type&&e){var n=e.getPageIndex(),o=Q(e,n);t?e.visible&&(x.isPageInView(n)?oe(o,n):h.showPage(e.getPageIndex(),function(){oe(o,n)})):o.trigger("hideeditor")}}function oe(e,t){e&&(!1!==e.get("selectable")&&c.select(e,t,!1),e.trigger("showeditor"))}function ie(e,t){var n={atala_spath:x._config.savepath,atala_annurl:x._config.annotationsurl};pn.extend(n,e);var o={type:"atalaannosave",serverurl:x._config.serverurl,query:"?atalaannosave=",method:"POST",data:n,cancel:!1,info:{success:void 0,error:void 0}};function i(e){e.error&&x.throwError("AnnotationSaveError",e.error),x.triggerEvent({type:"documentsaved",success:e.success,error:e.error}),"function"==typeof t&&t.call()}x.makeHandlerRequest(o,i,function(e){var t=[];t.error=e.responseText,i(t)})}function ae(e,t){var n={};pn.extend(n,e);var o={type:"atalaannoload",serverurl:x._config.serverurl,query:"?atalaannoload=",method:"GET",data:n,cancel:!1,info:{success:void 0,error:void 0}};function i(e){e.error&&x.throwError("AnnotationLoadError",e.error),"function"==typeof t&&t.call(),function(e){var t=0;if(e.startindex&&(t=e.startindex),e.layers){for(var n=0;n<e.layers.length;n++){e.offset=e.offset||0;var o=e.offset+n,i=e.layers[n];if(i){if(i._index=isFinite(i._index+t)&&0<=i._index+t?i._index+t:o+t,i.visible=void 0===i.visible||i.visible,i.items)for(var a=0;a<i.items.length;a++){i.items[a].visible=i.items[a].visible&&i.visible;var r=new Oe(h,i.items[a],m);r._pageindex=i._index,r.setFIndex(i._index);var l=i.items[a].annotationId;l&&0!==l&&!de(l)||(l=le()+1),r.setAnnotationId(l),m.maxAnnotationId<l&&(m.maxAnnotationId=l),m.annos[i._index]||(m.annos[i._index]=[]),m.annos[i._index].push(r);var s=r.getClonedData();h.trigger({type:w.annoload,anno:s,annotation:s,customData:e.customData}),_e(m.annos[i._index][m.annos[i._index].length-1])}x.redrawPageFromIndex(i._index,!0)}}D(),c.deselectAll()}}(e)}x.makeHandlerRequest(o,i,function(e){var t=[];t.error=e.responseText,i(t)})}function re(e){A(e),c.deselectPage(e),j()}function le(){if(!m||!m.annos)return 0;if(0<m.maxAnnotationId){var e=m.maxAnnotationId;return m.maxAnnotationId++,e}for(var t=m.annos.length,n=0,o=0;o<t;o++)if(m.annos[o]){n=m.annos[o].length;for(var i=0;i<n;i++){var a=m.annos[o][i].get();a&&a.annotationId&&a.annotationId>m.maxAnnotationId&&(m.maxAnnotationId=a.annotationId)}}return m.maxAnnotationId}function se(e){if(e){var t=m.annoIdsCreated.indexOf(e);0<=t&&m.annoIdsCreated.splice(t,1),0<=(t=m.annoIdsModified.indexOf(e))&&m.annoIdsModified.splice(t,1),0<=(t=m.annoIdsRemoved.indexOf(e))&&m.annoIdsRemoved.splice(t,1)}}function ce(e){if(e){m.annoIdsCreated.indexOf(e)<0&&m.annoIdsCreated.push(e);var t=m.annoIdsModified.indexOf(e);0<=t&&m.annoIdsModified.splice(t,1),0<=(t=m.annoIdsRemoved.indexOf(e))&&m.annoIdsRemoved.splice(t,1)}}function ue(e){if(e){var t=m.annoIdsCreated.indexOf(e);0<=t?m.annoIdsCreated.splice(t,1):(m.annoIdsRemoved.indexOf(e)<0&&m.annoIdsRemoved.push(e),0<=(t=m.annoIdsModified.indexOf(e))&&m.annoIdsModified.splice(t,1))}}function de(e){if(!m||!m.annos||!e)return!1;for(var t=m.annos.length,n=0,o=0;o<t;o++)if(m.annos[o]){n=m.annos[o].length;for(var i=0;i<n;i++){var a=m.annos[o][i].get();if(a&&a.annotationId&&a.annotationId===e)return!0}}return!1}function he(e,t,n,o){if(y)return null;var i=pn.extend(!0,{},e);return e&&e.type&&b[e.type]&&(i=pn.extend(!0,i,b[e.type]),t&&(i=pn.extend(!0,i,e))),i.rotation=0,m.activeanno&&null===m.activeanno.getObject()&&be(),function(){if(!_){d.on("mousedown",ve),mn.Features.Touch&&d.on("touchstart",ve);for(var e=0;e<s.length;e++)s[e]._draw.toFront();_=!0}}(),m.activeanno=new Oe(h,i,m),m.activeanno.bind({drawn:me,cancelled:be}),"function"==typeof n&&(fe=n),"function"==typeof o&&(ge=o),m.activeanno}c.setAnnos(m.annos),c.setPages(s),function(){var T,D,C,u=vn.svg&&!mn.Features.foreignObject;function a(e,t,n,o,i,a){var r=u||a?"image":"foreignObject",l=d(this,this,"http://www.w3.org/2000/svg",r,t,n,o,i),s=null;if(!u){s=document.createElementNS("http://www.w3.org/1999/xhtml","div");var c="http://www.w3.org/2000/xmlns/";s.setAttributeNS(c,"xmlns",c),s.innerHTML=e||"",l.node.appendChild(s),l.isHtml=!0}return l.innerDom=s,l}function d(e,t,n,o,i,a,r,l,s){var c=null===n?document.createElement(o):document.createElementNS(n,o);t.canvas&&t.canvas.appendChild&&t.canvas.appendChild(c);var u=new e.constructor.el.constructor(c,e);for(var d in u.attrs={x:i,y:a,width:r,height:l,r:s||0,rx:s||0,ry:s||0,fill:"none",stroke:"#000"},u.skew={},"g"===(u.type=o)&&(u.canvas=u.node),u.attrs)u.attrs.hasOwnProperty(d)&&void 0!==u.attrs[d]&&c.setAttribute(d,u.attrs[d]+"");return u}vn.vml?vn.fn.html=function(e,t,n,o,i){var a=d(this,this,null,"div",t,n,o,i),r=a.node;function l(e){var t=a.matrix.split();if(e.hasOwnProperty("x")&&void 0!==e.x&&e.hasOwnProperty("y")&&void 0!==e.y){var n={x:e.x*t.scalex,y:e.y*t.scaley};if(0!==t.rotate){var o=Ae([{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x+e.width,y:e.y+e.height},{x:e.x,y:e.y+e.height}],a.matrix);n=o}r.style.left=Math.round(n.x)+"px",r.style.top=Math.round(n.y)+"px"}}return r.innerHTML=e||"",(a.innerDom=r).style.position="absolute",a.__tsfm=a.transform,a.transform=function(){this.__tsfm.apply(this,arguments),this.repaint(),l(this.attrs)},a.backgroundColor=function(e){r.style.backgroundColor=e,this.repaint()},a.repaint=function(){r.style.filter='progid:DXImageTransform.Microsoft.Chroma(color="'+r.style.backgroundColor+'"); '+this.matrix.toFilter()},a.__attr=a.attr,a.attr=function(e){this.__attr.apply(this,arguments),e&&(l(e),e.hasOwnProperty("width")&&(r.style.width=e.width+"px"),e.hasOwnProperty("height")&&(r.style.height=e.height+"px"))},a.isHtml=!0,a}:(vn.fn.html=function(e,t,n,o,i){return a.call(this,e,t,n,o,i)},T={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},D={},C=function e(t,n){if(n)for(var o in"string"==typeof t&&(t=e(t)),n)n.hasOwnProperty(o)&&("xlink:"===o.substring(0,6)?t.setAttributeNS("http://www.w3.org/1999/xlink",o.substring(6),String(n[o])):t.setAttribute(o,String(n[o])));else(t=vn._g.doc.createElementNS("http://www.w3.org/2000/svg",t)).style&&(t.style.webkitTapHighlightColor="rgba(0,0,0,0)");return t},vn.fn.addArrow=function(e,t,n){if("path"===e.type){for(var o,i,a,r,l,s=String(t).toLowerCase().split("-"),c=e.paper,u=n?"end":"start",d=e.node,h=e.attrs,f=h["stroke-width"],g=s.length,p="classic",v=3,m=3,b=5;g--;)switch(s[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":p=s[g];break;case"wide":m=5;break;case"narrow":m=2;break;case"long":v=5;break;case"short":v=2}if(l="open"===p?(v+=2,m+=2,b+=2,a=1,r=n?4:1,{fill:"none",stroke:h.stroke}):(r=a=v/2,{fill:h.stroke,stroke:"none"}),e._.WDVarrows?n?(e._.WDVarrows.endPath&&D[e._.WDVarrows.endPath]--,e._.WDVarrows.endMarker&&D[e._.WDVarrows.endMarker]--):(e._.WDVarrows.startPath&&D[e._.WDVarrows.startPath]--,e._.WDVarrows.startMarker&&D[e._.WDVarrows.startMarker]--):e._.WDVarrows={},"none"!==p){var x=Math.random().toString(36).substring(7),y="dave-marker-"+p,_="dave-marker-"+u+p+v+m+x;vn._g.doc.getElementById(y)?D[y]++:(c.defs.appendChild(C(C("path"),{"stroke-linecap":"round",d:T[p],id:y})),D[y]=1);var w,z=vn._g.doc.getElementById(_);z?(D[_]++,w=z.getElementsByTagName("use")[0]):(z=C(C("marker"),{id:_,markerHeight:m,markerWidth:v,orient:"auto",refX:r,refY:m/2}),w=C(C("use"),{"xlink:href":"#"+y,transform:(n?"rotate(180 "+v/2+" "+m/2+") ":"")+"scale("+v/b+","+m/b+")","stroke-width":(1/((v/b+m/b)/2)).toFixed(4)}),z.appendChild(w),c.defs.appendChild(z),D[_]=1),C(w,l);var k=a*("diamond"!==p&&"oval"!==p);i=(i=n?(o=e._.WDVarrows.startdx*f||0,vn.getTotalLength(h.path)-k*f):(o=k*f,vn.getTotalLength(h.path)-(e._.WDVarrows.enddx*f||0)))<0?0:i,(l={})["marker-"+u]="url(#"+_+")",(i||o)&&(l.d=vn.getSubpath(h.path,o,i)),C(d,l),e._.WDVarrows[u+"Path"]=y,e._.WDVarrows[u+"Marker"]=_,e._.WDVarrows[u+"dx"]=k,e._.WDVarrows[u+"Type"]=p,e._.WDVarrows[u+"String"]=t}else i=n?(o=e._.WDVarrows.startdx*f||0,vn.getTotalLength(h.path)-o):(o=0,vn.getTotalLength(h.path)-(e._.WDVarrows.enddx*f||0)),e._.WDVarrows[u+"Path"]&&C(d,{d:vn.getSubpath(h.path,o,i)}),delete e._.WDVarrows[u+"Path"],delete e._.WDVarrows[u+"Marker"],delete e._.WDVarrows[u+"dx"],delete e._.WDVarrows[u+"Type"],delete e._.WDVarrows[u+"String"];for(l in D)if(D.hasOwnProperty(l)&&!D[l]){var P=vn._g.doc.getElementById(l);P&&P.parentNode.removeChild(P)}}}),vn.fn.atalaImage=function(e,t,n,o,i){return a.call(this,e,t,n,o,i,!0)}}(),v=vn.matrix(1,0,0,1,0,0),h.bind({scroll:k,pagerecycled:O,pageshown:S,zoomchanged:P,pagerotated:V}),(g={})[Fn.GetAnnotationLocalizedString("menuDeleteButton")]=q,g[Fn.GetAnnotationLocalizedString("menuPropertiesButton")]=W,x._state.initialized?z():h.bind({initialized:z}),"Atalasoft.Controls.WebDocumentViewer"===h.typeOf&&pn.extend(h,r),a.__exposedApi=r.annotations,a.addDrawingSurface=function(n){var e=this;if(n instanceof pn){n._paper=vn(n[0]),n._paper.canvas.style.position="absolute",n._paper.canvas.style.zIndex="2",0<l.pageborderwidth&&(n._paper.canvas.style.left=l.pageborderwidth+"px",n._paper.canvas.style.top=l.pageborderwidth+"px"),n._paper._annos=n._paper.set(),n._paper._trash=n._paper.set(),(n._paper._page=n)._matrix=vn.matrix(1,0,0,1,0,0),n._matrix.translate(-n.offset().left,-n.offset().top),n._grips=new He(n,m);var t=function(){Re(this,e),re(n)}.bind(this);return n.on("mousedown",t),mn.Features.Touch&&n.on("touchstart",t),n.on({pageresize:function(e){var t;e.page=n,(t=e).page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,L(t.page)},pagezoom:function(e){var t;e.page=n,t=e,isFinite(t.width)&&isFinite(t.height)&&t.width&&t.height&&(m.zoom=t.zoom,t.page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,t.page._paper.forEach(function(e){if(e&&e.transform&&!e.grip){void 0!==e._linewidth&&e.attr("stroke-width",e._linewidth*m.zoom);var t=e.attr("clip-rect");"object"==typeof t&&"number"==typeof t.length&&e.attr("clip-rect",t)}}),L(t.page))}}),!0}return!1},a.removeDrawingSurface=function(e){return e instanceof pn&&(e._paper&&(e._paper._annos=null,e._paper._page=null,e._paper=null),e._matrix=null,!(e._grips=null))},a.insertLayer=T,a.removeLayer=C,a.moveLayer=M,a.showLayer=I,a.getAnnotationById=H,a.clear=U,a.createAnnotation=Z,a.deleteAnnoOnPage=G,a.drawAnnotation=he,a.getAnnosFromPage=J,a.setStamps=$,a.setAnnotationDefaults=K,a.setImages=ee,a.setCustom=te,a.dispose=function(){p=g=f=d=s=l=x=h=a=null,m.annos.length=0,m.annoIdsCreated.length=0,m.annoIdsModified.length=0,m.annoIdsRemoved.length=0,m.activepage=null,m.activeanno=null,m.zoom=null,c.dispose(),c=null},
/**
   * [Internal] Gets debug info object
   * @returns debug info object if available, otherwise null
   */
a.__getDebugInfo=function(){var e={};return pn.extend(!0,e,{data:m,defaults:b,drawing:y,drawready:_,matrix:v,menu:f,menuconfig:g,pages:s,props:p,viewport:d}),e}
/**
   * [Internal] Links the annotation data between two controls
   * @param linker internal object of type __LVlinker
   * @returns undefined
   */,a.__linkAnnotations=function(e){e&&(e._annos?pn.isArray(e._annos)&&(m.annos=e._annos):e._annos=m.annos)}
/**
   * [Internal] Clears all selection of annotations
   */,a.__clearAllSelection=re,a.setViewPort=function(e){e&&(e instanceof pn||(e=pn(e)),d=e)};var fe=function(){},ge=function(){};function pe(){if(_){d.off("mousedown",ve),mn.Features.Touch&&d.off("touchstart",ve);for(var e=0;e<s.length;e++)s[e]._draw.reset();_=!1}}function ve(e){y=!0,d.off("mousedown",ve),mn.Features.Touch&&d.off("touchstart",ve),m.activeanno.get().isresizing=!0,m.activeanno.getClonedData().isresizing=!0;var t=m.activeanno.getClonedData();h.trigger({type:"annotationdrawstart",annotation:t,ann:t}),m.activeanno._pageindex=m.activepage._index,m.activeanno.startDraw(e,m.activepage._paper,{},h.config.textannomobilezoom)}function me(){ye(),function(e){var t=m.activepage,n=t?t._index:0,o=e.get().annotationId;o&&0!==o&&!de(o)||(o=le()+1,e.setAnnotationId(o)),m.maxAnnotationId<o&&(m.maxAnnotationId=o),e.setFIndex(n),ce(o),m.annos[n]?m.annos[n].push(e):m.annos[n]=[e],m.activeanno.unbind({drawn:me,cancelled:be}),_e(m.activeanno),c.select(m.activeanno,t,!1),fe({annotation:e}),fe=function(){};var i=e.getClonedData();h.trigger({type:w.annocreate,anno:i,annotation:i,page:n})}(m.activeanno),m.activeanno.get().isresizing=!1,m.activeanno.getClonedData().isresizing=!1,(!m.activeanno.get().originalWidth||!m.activeanno.get().originalHeight)&&1<m.activeanno.get().width&&1<m.activeanno.get().height&&(m.activeanno.get().originalWidth=m.activeanno.get().width,m.activeanno.getClonedData().originalWidth=m.activeanno.get().width,m.activeanno.get().originalHeight=m.activeanno.get().height,m.activeanno.getClonedData().originalHeight=m.activeanno.get().height)}function be(){m.activeanno.dispose(),m.activeanno=null,y&&ye(!0)}function xe(){_&&(y?be():(m.activeanno&&(m.activeanno.dispose(),m.activeanno=null),pe()),ge({annotation:null}),ge=function(){})}function ye(e){y=!1,pe();var t=e?null:m.activeanno.getClonedData();h.trigger({type:"annotationdrawend",annotation:t,ann:t,cancelled:!!e})}function _e(o){function e(e){var t=o.getClonedData();h.trigger({type:w[e.type],anno:t,annotation:t})}o.bind({dragstart:function(){var e=o.getClonedData();h.trigger({type:"annotationdragstart",ann:e,annotation:e})},dragend:function(){var e=o.getClonedData();h.trigger({type:"annotationdragend",annotation:e,ann:e})},interactstart:function(){m.activepage&&m.activepage._paper===o.getObject().paper||A(o.getObject().paper._page),m.activeanno=o},annotationchanged:function(e){var t=o.get();t&&t.annotationId&&function(e){if(e&&!(0<=m.annoIdsCreated.indexOf(e))){m.annoIdsModified.indexOf(e)<0&&m.annoIdsModified.push(e);var t=m.annoIdsRemoved.indexOf(e);0<=t&&m.annoIdsRemoved.splice(t,1)}}(t.annotationId);var n=o.getClonedData();h.trigger({type:"annotationchanged",annotation:n,anno:n,annobefore:e.annobefore})},selected:we,deselected:we,reselected:we,contextmenu:R,serverrenderurlrequested:ze,moved:e,rotated:e,annoresized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mouseup:e,mousemove:e,mouseover:e,repaint:e,annotationtextchanged:e,annotationtextchangefailed:function(){h.trigger({type:"throwerror",name:"updateAnnotation",msg:"Failed to change annotation text, because it is already edited by UI."})}})}function we(e){var t=e.page||0<=e.pageindex?e.pageindex:m.activepage,n=c.resolvePage(t);n&&(t=n),"selected"===e.type||"reselected"===e.type?(m.activeanno=e.ann,c.select(e.ann,t,e.append),p&&p.isVisible()&&p.show(e.ann)):(c.deselect(e.ann,t,e.append),p&&p.isVisible()&&p.cancel()),n&&n._grips&&n._grips.repaint()}function ze(e){var t=e.complete,n=De(e.data);"function"==typeof t&&t.call(n)}function ke(e,t){var n=[];for(var o in m.annos)if(m.annos.hasOwnProperty(o)){var i=!e||!t;i||(i=e<=o&&o<=t),i&&(n[o]={items:[]},Te(o,n[o].items))}return JSON.stringify(n)}function Pe(e,t,n,o,i){if((!n||!o||!i)&&(n=0,o=x.getPageScale(t),i=vn.matrix(),x._config.persistrotation&&(!n||!i))){n=x.getPageRotation(t);var a=1/o;(i=x.getViewerTransform(t)).scale(a,a,0,0),i.e*=a,i.f*=a}var r=pn.extend(!0,{},e.get());if(r.rotation||n){var l=e.getBox(),s=l.width/2,c=l.height/2,u=vn.matrix(),d=e.getTransform();u.add(i.a,i.b,i.c,i.d,i.e,i.f),u.add(d.a,d.b,d.c,d.d,d.e,d.f);var h=u.x(l.x+s,l.y+c),f=u.y(l.x+s,l.y+c),g=h-s-l.x,p=f-c-l.y;if(r.points)for(var v=0;v<r.points.length;v++)if("line"===r.type){var m=u.x(r.points[v].x,r.points[v].y);r.points[v].y=u.y(r.points[v].x,r.points[v].y),r.points[v].x=m}else r.points[v].x+=g,r.points[v].y+=p;else"custom"!==r.type&&r.points||(r.x+=g,r.y+=p);r.rotation="line"!==r.type?(r.rotation+n)%360:0}"text"===r.type&&(r.text.value=r.text.value.replace("<","&lt;"),r.text.value=r.text.value.replace(">","&gt;"));var b=Object.assign({},r);return b.originalWidth&&b.originalHeight&&(b.width=b.originalWidth,b.height=b.originalHeight),Ce(r),Ce(b),b}function Te(e,t){var n=0,o=x.getPageScale(e),i=vn.matrix();if(x._config.persistrotation){n=x.getPageRotation(e);var a=1/o;(i=x.getViewerTransform(e)).scale(a,a,0,0),i.e*=a,i.f*=a}for(var r in m.annos[e])m.annos[e].hasOwnProperty(r)&&(t[r]=Pe(m.annos[e][r],e,n,o,i))}function De(e){return Ce(e),JSON.stringify(e)}function Ce(e){for(var t in e)if("color"===t&&null!=e[t]){var n=vn.getRGB(e[t]);n.error&&(n.hex="#000000"),e[t]=n.hex}else"points"!==t&&"object"==typeof e[t]&&Ce(e[t])}function Me(e,t,n,o,i){var a={type:"annodata",serverurl:e,query:"?atalaanndata=",method:"GET",data:{atala_annurl:t,atala_docurl:n=n||h.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{layers:[],offset:o||0,length:i,error:void 0}};for(var r in a.data)a.data.hasOwnProperty(r)&&null===a.data[r]&&(a.data[r]=void 0);return a}function Ee(a,r,l){function e(e){if(void 0!==a.info.docIndex&&(e.offset=a.info.docIndex),!e.layers&&e.error&&r)for(var t=e.offset;t<e.offset+a.info.length;t++){if(m.annos[t])for(var n=m.annos[t].length,o=0;o<n;o++){var i=m.annos[t][o].get();i&&ue(i.annotationId)}m.annos[t]=[]}Se(e),"function"==typeof l&&l.call(void 0,e.error,e)}"function"==typeof r&&(l=r,r=!1),r||U(),x.makeHandlerRequest(a,e,e)}function Se(e){if(e){var t={type:"annotationsloaded",customData:e.customData};if(e.layers){for(var n=0;n<e.layers.length;n++){e.offset=e.offset||0;var o=e.offset+n;if(m.annos[o]&&0<m.annos[o].length){for(var i=m.annos[o].length,a=0;a<i;a++){var r=m.annos[o][a].get();r&&ue(r.annotationId)}m.annos[o].length=0}else m.annos[o]=[];var l=e.layers[n];if(l&&(l._index=isFinite(l._index)&&0<=l._index?l._index:o,l.visible=void 0===l.visible||l.visible,l.items))for(var s=0;s<l.items.length;s++){var c=l.items[s].annotationId,u=de(c);l.items[s].visible=l.items[s].visible&&l.visible,m.annos[o][s]=new Oe(h,l.items[s],m),m.annos[o][s]._pageindex=l._index,m.annos[o][s].setFIndex(l._index),c&&0!==c&&!u||(c=le()+1),m.annos[o][s].setAnnotationId(c),m.maxAnnotationId<c&&(m.maxAnnotationId=c);var d=m.annos[o][s].getClonedData();h.trigger({type:w.annoload,anno:d,annotation:d,customData:e.customData}),_e(m.annos[o][s])}}D()}else e.error&&(t.error=e.error);t.offset=e.offset,t.length=e.layers?e.layers.length:0,h.trigger(t)}}function Ie(e){var t;return e.type="stamp",e.text&&((t=e.text)&&t.font&&t.font.size&&(t.font.size=parseFloat(t.font.size)),e.text.readonly=!0),e}a.stringifyChanges=ke,a.stringifyAnnotationData=De,a.createHandlerRequest=Me,a.makeHandlerRequest=Ee,a.loadAnnotationsUrl=function(e,t,n,o,i,a,r){var l=Array.prototype.slice.call(arguments);"function"!=typeof(r=l.pop())&&l.push(r),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),a=l.shift();var s=Me(e,t,n,o,i);void 0!==a&&(s.info.docIndex=a),Ee(s,0<=o&&1<=i,r)},a.loadAnnotations=Se};n(120),n(121),n(124);function H(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}var R,j,G=function(e,t,n){var o,f=t,u=this,i=pn({}),a=null,g=null,r=null,p=n,b={type:"",backgroundcolor:"",color:null,fieldname:"",hidden:!1,isfieldrequired:!1,items:null,locked:!1,norotate:!1,noview:!1,nozoom:!1,readonly:!1,required:!1,x:0,y:0,width:0,height:0,rotation:0,border:{color:"#000",style:"none",radius:{vertical:0,horizontal:0},width:0},text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12,paddingtop:0,linespacing:0},ismultiline:!1,ispassword:!1,isrichtext:!1,scrollable:!1,maxlength:0,maximumfieldheight:-1,preserveoverflow:!1}},l={button:{},checkbox:{checked:!1,group:null},radio:{checked:!1,group:null},textbox:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},signature:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},choice:{multiline:!1}},s={};function c(){return i.trigger.apply(i,arguments),u}function d(e,t){e&&(t?pn.extend(!0,b,e):pn.extend(b,e))}function h(){r={update:function(){pn.extend(!0,b,r),b.update&&delete b.update,D(),T(),null!==a&&(!b.readonly&&b.selectable?(s.isBound("selectable")||(i.on(s.selectable),s.bound("selectable")),b.readonly||!b.movable||s.isBound("movable")?!b.readonly&&b.movable||!s.isBound("movable")||(i.off(s.movable),s.unbound("movable")):(i.on(s.movable),s.bound("movable")),mn.Features.Touch&&(b.readonly||!b.resizable||s.isBound("resizable")?!b.readonly&&b.resizable||!s.isBound("resizable")||(i.off(s.resizable),s.unbound("resizable")):(i.on(s.resizable),s.bound("resizable")))):!b.readonly&&b.selectable||!s.isBound("selectable")||(i.off(s.selectable),s.unbound("selectable"),i.off(s.movable),s.unbound("movable"),i.off(s.resizable),s.unbound("resizable")))}},pn.extend(!0,r,b)}function v(){return JSON.stringify(b)}function m(e,t){return t-(e.value.slice(0,t).split("\r\n").length-1)}function x(e,t){if("number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd)e.selectionStart=t.start,e.selectionEnd=t.end;else{var n=e.createTextRange(),o=m(e,t.start);n.collapse(!0),t.start===t.end?n.move("character",o):(n.moveEnd("character",m(e,t.end)),n.moveStart("character",o)),n.select()}}function y(e){var t=null,m=!1;switch(b.type){case"button":(t=pn("<button/>")).click(function(){return c({type:"buttonclicked",name:b.fieldname}),!1});break;case"textbox":case"signature":t=b.text.multiline?pn("<textarea/>").css("overflow-y",b.text.scrollable?"auto":"hidden").css("resize","none"):pn('<input type="text" />'),b.text.value=t.val(b.text.value).val(),t.on("paste",function(){return m=!0}),t.on("input",function(e){-1===b.text.maximumfieldheight&&(b.text.maximumfieldheight=pn(this).get(0).scrollHeight);var t,n,o,i,a,r,l,s,c=0<b.text.maxlength&&pn(this).val().length>b.text.maxlength,u=!b.text.scrollable&&pn(this).get(0).scrollHeight>b.text.maximumfieldheight;if(pn(this).val().length>b.text.value.length&&(c||u)){var d=(t=e.target,s=l=0,"number"==typeof t.selectionStart&&"number"==typeof t.selectionEnd?(l=t.selectionStart,s=t.selectionEnd):(o=document.selection.createRange())&&o.parentElement()===t&&(a=t.value.length,n=t.value.replace(/\r\n/g,"\n"),(i=t.createTextRange()).moveToBookmark(o.getBookmark()),(r=t.createTextRange()).collapse(!1),-1<i.compareEndPoints("StartToEnd",r)?l=s=a:(l=-i.moveStart("character",-a),l+=n.slice(0,l).split("\n").length-1,-1<i.compareEndPoints("EndToEnd",r)?s=a:(s=-i.moveEnd("character",-a),s+=n.slice(0,s).split("\n").length-1))),{start:l,end:s});if(m&&0<b.text.maxlength){var h=pn(this).val();if(h.length===d.start)pn(this).val(h.substr(0,b.text.maxlength));else{var f=h.length-b.text.value.length,g=b.text.maxlength-b.text.value.length,p=h.substr(0,d.start-f+g),v=b.text.value.substr(d.start-f);pn(this).val(p+v),x(e.target,{start:p.length,end:p.length})}}else pn(this).val(b.text.value),x(e.target,{start:d.start-1,end:d.start-1})}!b.text.preserveoverflow&&pn(this).get(0).scrollHeight<b.text.maximumfieldheight&&(b.text.maximumfieldheight=pn(this).get(0).scrollHeight),b.text.value=pn(this).val(),m=!1});break;case"checkbox":(t=pn('<input type="checkbox" />').prop({name:b.group,checked:b.checked})).val(b.value);break;case"radio":(t=pn('<input type="radio" />').prop({name:b.group,checked:b.checked})).val(b.value);break;case"choice":if((t=pn("<select></select>")).text(b.value),t.attr({multiple:b.multiple,size:b.multiline&&b.items?b.items.length:0}),b.items)for(var n in t.items=[],b.items)if(b.items.hasOwnProperty(n)){var o=pn("<option></option>",{selected:b.items[n].checked,value:b.items[n].value,text:b.items[n].text});t.append(o),t.items[n]=o}if(b.multiline&&b.items){var i=function(){pn(this).trigger("change")};t.on({mouseup:i,touchend:i})}break;case"generic":t=pn("<div></div>")}if(t){if("textbox"===b.type||"signature"===b.type){var a=b.text.font.paddingtop,r=0<b.text.font.linespacing?b.text.font.linespacing+"px":"1.14pt";t.css({resize:"none",position:"absolute",paddingTop:b.multiline?a:0,paddingBottom:b.multiline?"2pt":0,lineHeight:r,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"})}else t.css({resize:"none",position:"absolute",padding:0,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});t.on({click:E,mousedown:E,mouseup:E,change:w,uncheck:z,focusin:k,focusout:P,touchstart:E,touchend:E})}return e._fields&&e._fields.push(t),e.append(t),t}function _(){var e=b.fieldname.lastIndexOf(".");return 0<=e?b.fieldname.substr(0,e):null}function w(e){var t=_(),n=[];switch(b.type){case"button":break;case"textbox":case"signature":if(b.text.value=this.value,f.multiviewFields.hasOwnProperty(t)){var o=f.multiviewFields[t];for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];a!==u&&(a.get().text.value=this.value,a.updateView())}}break;case"checkbox":b.checked=this.checked,b.group&&b.checked&&(pn('input[name="'+b.group+'"]').trigger("uncheck"),b.checked=!0,this.checked=!0);break;case"radio":b.group&&pn('input[name="'+b.group+'"]').trigger("uncheck"),b.checked=this.checked;break;case"choice":if(void 0!==e.target.selectedOptions)n=e.target.selectedOptions;else if(e.target.multiple)for(var r=0;r<e.target.options.length;r++)e.target.options[r].selected&&n.push(e.target.options[r]);else 0<=e.target.selectedIndex&&n.push(e.target.options[e.target.selectedIndex]);for(var l in b.items)if(b.items.hasOwnProperty(l)){var s=b.items[l];for(var c in s.checked=!1,n)n.hasOwnProperty(c)&&n[c].value===s.value&&(s.checked=!0)}}}function z(e){"checkbox"===e.target.type&&(e.target.checked=!1),b.checked=!1}function k(){C(!0),c({type:"fieldfocusin",field:u})}function P(){C(!1),c({type:"fieldfocusout",field:u})}function T(e){e&&"object"==typeof e&&((g=y(e)).zoom=M,D(),c({type:"viewchanged",fieldview:g})),c("repaint")}function D(){if(g){if(b.hidden||b.noview)return void g.hide();g.show();var e=pn.extend({},(t=f.getViewerTransform(p),n=H(t,b.x,b.y),o=H(t,b.x+b.width,b.y+b.height),i=f.getZoom(p),a=b.width*i,r=b.height*i,l={x:(n.x+o.x-a)/2,y:(n.y+o.y-r)/2},s=f.getPageRotation(p)+b.rotation,c="rotate("+s+"deg)",u={left:Math.round(l.x)+"px",top:Math.round(l.y)+"px",width:a+"px",height:r+"px","max-width":a+"px","max-height":r+"px"},d=Dn(0!==s?c:""),pn.extend(u,d),("textbox"===b.type||"signature"===b.type)&&(u.cursor=s%180==0?"text":"vertical-text"),u.visibility="visible",u),(h=b.border&&"underline"===b.border.style,{backgroundColor:b.backgroundcolor,color:b.color||b.text.font.color,borderStyle:b.border&&b.border.style&&!h?b.border.style:"none",borderBottomStyle:h?"solid":"inherit",borderColor:b.border?b.border.color:null,fontFamily:b.text.font.family,fontStyle:b.text.font.italic?"italic":b.text.font.oblique?"oblique":"normal",fontWeight:b.text.font.bold?"bold":"",textAlign:b.text.align}));g.css(e),f.highlighted?(g.addClass("atala-ui-form-highlight"),b.required?g.addClass("atala-ui-form-required"):g.removeClass("atala-ui-form-required")):g.removeClass("atala-ui-form-highlight"),b.readonly?g.attr("readonly","readonly"):g.removeAttr("readonly"),"textbox"===b.type?C(g.is(":focus")):"button"===b.type&&g.text(b.text.value)}var t,n,o,i,a,r,l,s,c,u,d,h}function C(e){"textbox"===b.type&&(e||(b.text.value?g.val()!==b.text.value&&g.val(b.text.value):g.val(b.text.defaultvalue)))}function M(e){e=e||f.getZoom(p),g.css({fontSize:Math.round((b.text.font.size||12)*e*(f.dpi/96)),borderWidth:b.border?Math.round(b.border.width*e):0}),b.text&&b.text.align&&g.css({paddingLeft:b.text.leftPadding*e+"px",paddingRight:b.text.rightPadding*e+"px"}),D()}return u._pageindex=n,o=e.type,pn.extend(!0,b,l[o]),d(e,!0),u.dispose=function(){i&&i.off(),b=i=u=f=null},u.bind=function(){i.on.apply(i,arguments)},u.unbind=function(){i.off.apply(i,arguments)},u.trigger=c,u.set=d,u.get=function(e){return e?b[e]:b},u.setPageIndex=function(e){p=e,u.hasOwnProperty("_pageindex")&&(u._pageindex=e)},u.getClonedData=function(){return r?pn.extend(!0,r,b):h(),r},u.getObject=function(){return g},u.getEventObject=function(){return i},u.getZoom=function(){return f.zoom},u.stringify=v,u.getJSON=v,u.getParentName=_,u.getName=function(){var e=b.fieldname.lastIndexOf(".");return 0<=e?b.fieldname.substr(e+1):b.fieldname},u.repaint=T,u.updateView=D,u.zoom=M,u},On=function e(t,n,o){var i=this,s=t,a=n,r={forms:{events:{
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
function(e,t,n){var o=F(e,t,n).getClonedData();return s.trigger({type:p.fieldcreate,field:o}),o}
/**
   * Deletes a field on the given z-index and zero based page index.
   * @param pgNum: number, Zero based page index the field is located on.
   * @param fieldIndex: number, Zero based z-index of the field.
   */,deleteFromPage:E,getFromPage:S,insertForm:
/**
   * Inserts a form from the source URL and index into the given page index.
   * @param sourceUrl: string, Url of the desired form.
   * @param sourceIndex: number, Zero based page index the form is copied from.
   * @param index: number, Zero based page index the form is to be inserted into.
   * @param callback: function, Function to be called when the operation has completed.
   */
function(e,t,n,o){x(e,t,n),"function"==typeof o&&o(),s.trigger({type:p.forminserted,srcurl:e,srcindex:t,index:n}),s.trigger(p.formschanged)}
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
function(e,t,n){_(e,t),"function"==typeof n&&n(),s.trigger({type:p.formmoved,srcindex:e,destindex:t}),s.trigger(p.formschanged)},removeForm:function(e,t){y(e),"function"==typeof t&&t(),s.trigger({type:p.formremoved,index:e}),s.trigger(p.formschanged)}}};if(e.__exposedApi=r.forms,!t)return null;var l=n._pages,c=null,u={fields:[],multiviewFields:{},activepage:null,activefield:null,highlighted:!0,readonly:!!o,getZoom:a.getPageScale,getViewerTransform:a.getViewerTransform,getPageRotation:a.getPageRotation,dpi:96},d={},h=!1,f=!1,g=null,p={click:"fieldclicked",dblclick:"fielddoubleclicked",touchstart:"fieldtouchstart",interactend:"fieldtouchend",touchmove:"fieldtouchmove",pinchmove:"fieldpinchresize",rightclick:"fieldrightclicked",mousedown:"fieldmousedown",mousedownleft:"fieldmousedownleft",mousedownright:"fieldmousedownright",mousemove:"fieldmousemove",mouseout:"fieldmouseout",mouseup:"fieldmouseup",mouseover:"fieldmouseover",create:"fieldcreated",load:"fieldloaded",moved:"fieldmoved",resized:"fieldresized",repaint:"fieldrepainted"},v="<~Atala_Unnamed_",m=[];function b(){}function x(e,t,n){if(null==e&&"number"==typeof t&&(t=y(t)),t=t||[],null==n?n=u.fields.length:n<0&&(n=0),n>u.fields.length){var o=u.fields.length;u.fields[n]=t;for(var i=o;i<u.fields.length;++i)u.fields[i]||(u.fields[i]=[])}else u.fields.splice(n,0,t)}function y(e){return e<u.fields.length?u.fields.splice(e,1)[0]:null}function _(e,t){x(null,y(e),t)}function w(e,t){if(e<u.fields.length&&u.fields[e]&&u.fields[e].length){var n;z(t);for(var o=0;o<u.fields[e].length;o++)(n=u.fields[e][o]).setPageIndex(e),n.repaint(t._form)}}function z(e){e._form&&e._form._fields&&(e._form._fields.length=0,e._form.empty())}function k(e){w(e.index,e.page)}function P(){null!=g.field&&g.field.getObject()[0].blur()}function T(e){e.page._form&&z(e.page)}function D(e){u.activepage=e}function C(e){M(e.page)}function M(e){if(e&&u.fields.length&&u.fields[e._index])for(var t=0;t<u.fields[e._index].length;t++)u.fields[e._index][t].updateView()}function E(e,t){var n,o,i;n=t,o=e,i=u.fields[o].splice(n,1)[0],u.activepage&&u.activepage._form._fields.splice(n,1),i.dispose(),s.trigger({type:"fielddeleted",page:o,index:n})}
/**
   * Gets an array of field data objects located on the given zero based page index.
   * @param pageNum: number, Zero based page index the fields are located on.
   * @returns array: Array of field data objects on the given page index. 
   */function S(e){var t=[];if(0===u.fields.length||void 0===u.fields[e])return t;for(var n=0;n<u.fields[e].length;n++)t[n]=u.fields[e][n].getClonedData();return t}function I(){if(0<u.fields.length){if(u.fields.length=0,l)for(var e=0;e<l.length;e++)z(l[e]);s.trigger({type:"formscleared"})}}function F(e,t,n){var o={};e&&e.type&&d[e.type]&&pn.extend(!0,o,d[e.type]),pn.extend(!0,o,e);var i=new G(o,u,t);return void 0===u.fields[t]&&(u.fields[t]=[]),u.fields[t].push(i),a.redrawVisiblePages(),"function"==typeof n&&n(i),B(i),i}i.dispose=function(){c=l=a=s=i=null,u.fields.length=0,u.multiviewFields=null,u.activepage=null,u.activefield=null},i.addFormLayer=function(t){if(t instanceof pn){t._form=a.createDiv(t),t._form.css({position:"absolute",zIndex:4}),t._form._fields=[],t._form._page=t;var e=function(){D(t)};return t.on("mousedown",e),mn.Features.Touch&&t.on("touchstart",e),t.on({pageresize:function(e){e.page=t,M(e.page)},pagezoom:function(e){e.page=t,function(e){for(var t in e.page._form._fields)e.page._form._fields.hasOwnProperty(t)&&e.page._form._fields[t].zoom(a.getPageScale(e.index))}(e)}}),!0}return!1},i.insertForm=x,i.removeForm=y,i.moveForm=_,i.removeFormLayer=function(e){return e instanceof pn&&(e._form&&(e._form._fields=null,e._form._page=null,e._form=null),!0)},i.showLayer=w,i.__exposedApi=r.forms,i.__getDebugInfo=function(){var e={};return pn.extend(!0,e,{data:u,pages:l,viewport:c}),e},i.__linkForms=function(e){e&&(e._fields?Array.isArray(e._fields)&&(u.fields=e._fields):e._fields=u.fields)},i.clear=I,i.createField=F,i.deleteFieldOnPage=E,i.getFieldsFromPage=S,i.setViewPort=function(e){e&&(e instanceof pn||(e=pn(e)),c=e)},i.drawField=function(e,t){return h?null:(e&&e.type&&d[e.type]&&pn.extend(!0,e,d[e.type]),u.activefield&&null===u.activefield.getObject()&&L(),function(){if(!f){c.on("mousedown",O),mn.Features.Touch&&c.on("touchstart",O);for(var e=0;e<l.length;e++)l[e]._draw.toFront();f=!0}}(),u.activefield=new G(e,u,u.activepage?u.activepage._index:void 0),u.activefield.bind({drawn:V,cancelled:L}),"function"==typeof t&&(A=t),u.activefield)};var A=function(){};function O(e){h=!0,c.off("mousedown",O),mn.Features.Touch&&c.off("touchstart",O),s.trigger({type:"fielddrawstart",field:u.activefield.getClonedData()}),u.activefield._pageindex=u.activepage._index,u.activefield.startDraw(e,u.activepage._form,{})}function V(){var e,t,n;e=u.activefield,t=u.activepage,n=t?t._index:0,u.fields[n]?u.fields[n].push(e):u.fields[n]=[e],u.activefield.unbind({}),B(u.activefield),A({field:e}),A=function(){},s.trigger({type:p.fieldcreate,field:e.getClonedData()}),H()}function L(){u.activefield.dispose(),u.activefield=null,h&&H(!0)}function H(e){h=!1,function(){if(f){c.off("mousedown",O),mn.Features.Touch&&c.off("touchstart",O);for(var e=0;e<l.length;e++)l[e]._draw.reset();f=!1}}(),s.trigger({type:"fielddrawend",field:e?null:u.activefield.getClonedData(),cancelled:!!e})}function R(e){g=e,s.bind("scroll",P)}function j(){s.unbind("scroll",P)}function B(t){function e(e){s.trigger({type:p[e.type],field:t.getClonedData()})}t.bind({interactstart:function(){u.activepage&&u.activepage._form===t.getObject().form||D(t.getObject().form._page),u.activefield=t},moved:e,resized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mousemove:e,mouseout:e,mouseup:e,mouseover:e,repaint:e,fieldfocusin:R,fieldfocusout:j})}function N(){var e=[];for(var t in u.multiviewFields)u.multiviewFields[t].every(q)&&e.push(t);return e}function q(e){var t=-1,n=e.getName(),o=new RegExp(v+"(\\d+)"),i=n.match(o)||[];return 0<i.length&&(t=i[1]),e._pageindex===parseInt(t)}function W(e,t,n,o,i){var a={type:"formdata",serverurl:e,query:"?atalaformdata=",method:"GET",data:{atala_formurl:t,atala_docurl:n=n||s.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{fields:[],length:i,error:void 0}};for(var r in a.data)a.data.hasOwnProperty(r)&&null===a.data[r]&&(a.data[r]=void 0);return a}function U(t,e,n){function o(e){void 0!==t.info.docIndex&&(e.offset=t.info.docIndex),Z(e),"function"==typeof n&&n.call(void 0,e.error,e)}"function"==typeof e&&(n=e,e=!1),e||I(),a.makeHandlerRequest(t,o,o)}function Z(e){if(e){var t={type:"formsloaded",forms:e.forms,customData:e.customData};if(e.dpi&&(u.dpi=e.dpi),e.forms&&e.forms.fields)for(var n=0;n<e.forms.fields.length;n++){e.offset=e.offset||0;var o=e.offset+n;u.fields[o]&&0<u.fields[o].length?u.fields[o].length=0:u.fields[o]=[];var i=e.forms.fields[n];if(i&&0<i.length){for(var a=0;a<i.length;a++)u.fields[o][a]=new G(i[a],u,o),r=u.fields[o][a],l=r.getParentName(),0<=r.getName().indexOf(v)&&(u.multiviewFields.hasOwnProperty(l)?u.multiviewFields[l].push(r):u.multiviewFields[l]=[r]),s.trigger({type:p.load,field:u.fields[o][a].getClonedData()}),B(u.fields[o][a]);m=N()}}else e.error&&(t.error=e.error);s.trigger(t)}var r,l}i.stringifyChanges=function(){var e={},t=!1,n=0;for(var o in u.fields)if(u.fields.hasOwnProperty(o)&&0<u.fields[o].length){for(var i in e[o]=[],u.fields[o])if(u.fields[o].hasOwnProperty(i)){t=!0;var a=u.fields[o][i].get();if(0<a.fieldname.indexOf(v)){var r=u.fields[o][i].getParentName();if(m.includes(r)){var l=new RegExp(v+"(\\d+)");a.fieldname=a.fieldname.replace(l,v+n)}}e[o][i]=a}n++}return t?JSON.stringify({forms:{fields:e}}):void 0},i.createHandlerRequest=W,i.makeHandlerRequest=U,i.loadFormUrl=function(e,t,n,o,i,a,r){var l=Array.prototype.slice.call(arguments);"function"!=typeof(r=l.pop())&&l.push(r),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),a=l.shift();var s=W(e,t,n,o,i);void 0!==a&&(s.info.docIndex=a),U(s,0<=o&&1<=i,r)},i.loadForms=Z,"Atalasoft.Controls.WebDocumentViewer"===s.typeOf&&pn.extend(s,r),s.bind({pagerecycled:T,pageshown:k,zoomchanged:b,pagerotated:C})};
/**
 * WebDocumentViewer PDF Forms API.
 * @class
 * @inner
 * @name FormController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 * @ignore
 */function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(j=R||(R={})).Button="atala-upload-button",j.DragAndDrop="atala-upload-drag-and-drop",j.DragAndDropImage="atala-upload-drag-and-drop-image",j.FileProgress="atala-upload-progress-file",j.FileProgressImage="atala-upload-progress-file-image",j.MultipleFilesHeaderRow="atala-upload-files-header-row",j.MultipleFilesHeader="atala-upload-files-header",j.TextElement="atala-upload-text-element",j.Control="atala-upload-control",j.AreaContainer="atala-upload-flex-area",j.AreaNonTable="atala-upload-flex-area-non-table",j.AreaSingleFile="atala-upload-single-file",j.AreaSingleFileNoDragDrop="atala-upload-single-file-no-drag-drop",j.AreaMultipleFile="atala-upload-multiple-files",j.AreaMultipleFileDragDrop="atala-upload-multiple-files-drag-and-drop",j.ButtonsContainer="atala-upload-flex-buttons",j.Buttons="atala-upload-buttons",j.CloseButton="atala-upload-close-button",j.CancelButton="atala-upload-cancel-button",j.OkButton="atala-upload-ok-button",j.AddButton="atala-upload-add-button",j.MultipleFilesHeaderName="atala-upload-files-header-name",j.MultipleFilesHeaderSize="atala-upload-files-header-size",j.MultipleFilesHeaderStatus="atala-upload-files-header-status",j.MultipleFilesRow="atala-upload-files-row",j.MultipleFilesCell="atala-upload-files-cell",j.MultipleFilesCellName="atala-upload-files-cell-name",j.MultipleFilesCellSize="atala-upload-files-cell-size",j.MultipleFilesCellStatus="atala-upload-files-cell-status",j.MultipleFilesCellCancelButton="atala-upload-files-cancel-button";var Z=function(){function e(e,t){B(this,"cancel",!1),B(this,"progressCounter",0),B(this,"filename",void 0),B(this,"statusText",void 0),this.filename=e,this.statusText=t}var t=e.prototype;return t.handler=function(e){this.isUploadStartEventData(e)?e.fileinfo.filename===this.filename&&this.cancel&&(e.fileinfo.cancel=!0):e.uploadinfo.filename===this.filename&&(this.cancel&&(e.uploadinfo.cancel=!0),this.progressCounter%5==0&&this.statusText.text("Uploading ("+(e.uploadinfo.uploadedbytes/e.uploadinfo.totalbytes*100).toFixed(0)+" %)"),this.progressCounter++)},t.isUploadStartEventData=function(e){return void 0!==e.fileinfo},e}();function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te=function(){function e(e,t){ee(this,"enterLeaveLevel",0),ee(this,"dragEffect",void 0),ee(this,"control",void 0),ee(this,"allowMultipleFiles",void 0),this.control=e,this.allowMultipleFiles=t,this.dragEffect=""}var t=e.prototype;return t.onDragEnter=function(e){""===this.dragEffect&&0===this.enterLeaveLevel&&(this.dragEffect=this.calcDragEffect(e.dataTransfer)),this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect),this.enterLeaveLevel++},t.onDrop=function(e){"none"!==this.dragEffect&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer)),this.resetState()},t.onDragLeave=function(){this.enterLeaveLevel--,0===this.enterLeaveLevel&&(this.dragEffect="")},t.onDragOver=function(e){this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect)},t.calcDragEffect=function(e){var t=this;return this.control.uploadRequested||!this.isDataTransferPresented(e)?"none":(mn.Firefox?2===e.types.length&&e.types.some(function(e){return function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,t),"Files"===e}.bind(this)):1===e.types.length&&"Files"===e.types[0])&&(this.allowMultipleFiles||1===e.items.length)?"copy":"none"},t.processDragAndDropEvent=function(e){e.preventDefault();var t=e.originalEvent;switch(t.type){case"dragenter":this.onDragEnter(t);break;case"dragover":this.onDragOver(t);break;case"drop":this.onDrop(t);break;case"dragleave":this.onDragLeave()}},t.getFilesFromDataTransfer=function(e){var t=[];if(!this.isDataTransferPresented(e))return t;for(var n=0;n<e.files.length;n++)t.push(e.files[n]);return t},t.resetState=function(){this.dragEffect="",this.enterLeaveLevel=0},t.isDataTransferPresented=function(e){return null!==e},e}(),ne=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),(t.prototype.constructor=t).__proto__=n;var i=o.prototype;return i.onDragEnter=function(){},i.onDragOver=function(){},i.onDragLeave=function(){},i.onDrop=function(e){!this.control.uploadRequested&&this.isDataTransferPresented(e.dataTransfer)&&1===e.dataTransfer.types.length&&"Files"===e.dataTransfer.types[0]&&(this.allowMultipleFiles||1===e.dataTransfer.files.length)&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer))},o}(te);function oe(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function ie(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(){function e(e){var o=this;ae(this,"control",void 0),ae(this,"openFileDlgBtn",void 0),ae(this,"openFileForm",void 0),ae(this,"callbackToManipulateParentUi",function(){oe(this,o)}.bind(this)),ae(this,"allowedDragAndDrop",void 0),ae(this,"uiShouldBeClosedAfterUpload",void 0),ae(this,"isVisible",!1),ae(this,"progressHandlers",[]),ae(this,"uploadRequested",!1),ae(this,"reinitNeeded",!1),ae(this,"processFileFinishedUpload",function(){oe(this,o)}.bind(this)),ae(this,"controller",void 0),ae(this,"openFileDlgChangeHandler",function(){oe(this,o);var e=this.openFileDlgBtn[0].files;this.processFiles(this.convertFileListToFilesArray(e)),this.openFileForm[0].reset()}.bind(this)),ae(this,"handleUploadFinished",function(){oe(this,o),this.uiShouldBeClosedAfterUpload?this.controller.finish(!1):(this.control.find("."+R.CancelButton).css("display","none"),this.control.find("."+R.CloseButton).css("display",""))}.bind(this)),ae(this,"processProgressHandlers",function(t){var n=this;oe(this,o),this.progressHandlers.forEach(function(e){return oe(this,n),e.handler(t)}.bind(this))}.bind(this)),this.controller=e;var t=pn("<div/>").addClass(R.Control).css("flex-flow","column").css("height","100%").css("width","100%").addClass("ui-widget"),n=pn("<div/>").addClass(R.AreaContainer).css("display","flex").css("flex-flow","column").css("flex","1 1 auto").css("align-content","center").css("overflow","auto"),i=pn("<div/>").addClass(R.ButtonsContainer).css("flex","0 1 auto");t.append(n),t.append(i),this.control=t,this.openFileDlgBtn=pn("<input/>").attr("type","file").change(this.openFileDlgChangeHandler),this.openFileForm=pn("<form/>").css("display","none"),this.openFileDlgBtn.appendTo(this.openFileForm),this.openFileForm.appendTo(this.control),this.allowedDragAndDrop=!1,this.uiShouldBeClosedAfterUpload=!1}var t,n,o,i=e.prototype;return i.init=function(e,t){var n=this;this.openFileDlgBtn.attr("accept",t.allowedFileTypes);var o=pn(this.control.children("."+R.ButtonsContainer));if(this.initArea(t),this.initButtons(o,t),this.control.css("display","none"),this.control.appendTo(e),this.allowedDragAndDrop=t.allowDragDrop,this.uiShouldBeClosedAfterUpload=t.closeUiAfterUpload,this.allowedDragAndDrop){var i=mn.Explorer?new ne(this,t.allowMultipleFiles):new te(this,t.allowMultipleFiles);this.area.on("dragenter",function(e){return oe(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragover",function(e){return oe(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("drop",function(e){return oe(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragleave",function(e){return oe(this,n),i.processDragAndDropEvent(e)}.bind(this))}},i.activate=function(e){this.callbackToManipulateParentUi=e,this.allowedDragAndDrop?(this.callbackToManipulateParentUi(!1),this.show()):this.openFileDlgBtn.click()},i.close=function(){this.unbindEvents(),this.hide()},i.getControlDom=function(){return this.control},i.initButtons=function(e,t){var n=this,o=pn("<div/>").addClass(R.Buttons).css("float","right"),i=pn("<button/>").addClass(R.Button).addClass(R.AddButton).button({label:"Add..."}).click(function(e){oe(this,n),e.preventDefault(),this.openFileDlgBtn.click()}.bind(this)),a=pn("<button/>").addClass(R.Button).addClass(R.CloseButton).button({label:"Close"}).css("display","none").click(function(e){oe(this,n),e.preventDefault(),this.close()}.bind(this)),r=pn("<button/>").addClass(R.Button).addClass(R.CancelButton).button({label:"Cancel"}).click(function(e){oe(this,n),e.preventDefault(),this.controller.abort(),this.close()}.bind(this));(t.allowMultipleFiles||t.allowDragDrop)&&o.prepend(i),o.append(r),t.closeUiAfterUpload||o.append(a),o.appendTo(e)},i.initAreaImpl=function(e,t,n){var o=pn("<div/>").addClass(e).addClass(R.TextElement);return this.initAreaContents(o,t,n),o},i.initAreaContents=function(e,t,n){var o=pn("<div/>").addClass(t?R.FileProgressImage:R.DragAndDropImage),i=pn("<span/>").addClass(t?R.FileProgress:R.DragAndDrop).text(n);e.append(o).append(i)},i.reinitArea=function(e,t){var n=this.area.children().first();return n.children().remove(),this.initAreaContents(n,e,t),n},i.processFiles=function(e){if(!this.uploadRequested)if(0<e.length){var t=this.filterFiles(e);0<t.length&&(this.allowedDragAndDrop||(this.callbackToManipulateParentUi(!1),this.show()),this.addFilesToUi(t))}else this.allowedDragAndDrop||this.controller.abort()},i.filterFiles=function(e,t){for(var n=this.controller.filterFiles(e,void 0===t?[]:t),o=[],i=0;i<e.length;i++)n[0]===e[i].name?n.shift():o.push(e[i]);return o},i.bindEvents=function(){this.controller.bind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.unbindEvents=function(){this.controller.unbind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.show=function(){this.control.css("display","flex"),this.controlParent.children().first().css("display","none"),this.isVisible=!0},i.hide=function(){var e=this;this.control.css("display","none"),this.controlParent.children().first().css("display","block"),this.isVisible=!1,this.progressHandlers.length=0,this.callbackToManipulateParentUi(!0),this.callbackToManipulateParentUi=function(){oe(this,e)}.bind(this),this.uploadRequested=!1,this.reinitNeeded=this.allowedDragAndDrop,this.switchButtonEnabledState(R.AddButton,!0),this.uiShouldBeClosedAfterUpload||(this.control.find("."+R.CloseButton).css("display","none"),this.control.find("."+R.CancelButton).css("display",""))},i.convertSize=function(e){for(var t=e,n=0;1024<t;)t/=1024,n++;return t.toFixed(2)+" "+["B","KB","MB","GB","TB"][n]},i.addProgressHandler=function(e,t){this.progressHandlers.push(new Z(e,t))},i.removeProgressHandler=function(t){var n=this,e=this.progressHandlers.filter(function(e){return oe(this,n),e.filename===t}.bind(this))[0];null!==e&&this.progressHandlers.splice(this.progressHandlers.indexOf(e),1)},i.cancelUpload=function(t){var n=this,e=this.progressHandlers.filter(function(e){return oe(this,n),e.filename===t}.bind(this))[0];null!=e&&(e.cancel=!0)},i.convertFileListToFilesArray=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},i.switchButtonEnabledState=function(e,t){var n=t?"enable":"disable";this.control.find("."+e).button(n)},i.isFileSuccessEventData=function(e){return void 0!==e.filepath},t=e,(n=[{key:"controlParent",get:function(){return this.control.parent()}},{key:"area",get:function(){return pn(this.control.children("."+R.AreaContainer))}}])&&ie(t.prototype,n),o&&ie(t,o),e}();function le(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function se(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var de=function(a){var e,t,n,o,i;function l(e){var t,n=this;return ue(se(t=a.call(this,e)||this),"files",[]),ue(se(t),"table",void 0),ue(se(t),"uploadElems",[]),t.processFileFinishedUpload=function(e){le(this,n),t.isFileSuccessEventData(e)?t.markStatusFinished(e.filename,!0):t.markStatusFinished(e.errorinfo.filename,!1,e.errorinfo.canceled)}.bind(this),t}t=a,(e=l).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t,n=l,i=[{key:"rowTemplate",get:function(){return null===this.rowTemplateField&&(this.rowTemplateField=this.getFileRowTemplate()),this.rowTemplateField}}],(o=null)&&ce(n.prototype,o),i&&ce(n,i);var r=l.prototype;return r.init=function(e,t){a.prototype.init.call(this,e,t),this.openFileDlgBtn.attr("multiple",!0)},r.initArea=function(e){var t;e.allowDragDrop?((t=this.initAreaImpl(R.AreaMultipleFile,!1,"Drop files here")).addClass(R.AreaMultipleFileDragDrop),this.area.addClass(R.AreaNonTable)):(t=pn("<div/>").addClass(R.AreaMultipleFile).addClass(R.TextElement),this.initFilesTable(t)),t.appendTo(this.area)},r.initFilesTable=function(e){this.area.removeClass(R.AreaNonTable);var t=pn("<div/>").addClass(R.MultipleFilesHeaderRow).addClass("ui-widget-header"),n=pn("<div/>").addClass(R.MultipleFilesHeaderName).addClass(R.MultipleFilesHeader).text("Name"),o=pn("<div/>").addClass(R.MultipleFilesHeaderSize).addClass(R.MultipleFilesHeader).text("Size"),i=pn("<div/>").addClass(R.MultipleFilesHeaderStatus).addClass(R.MultipleFilesHeader).text("Status");t.append(n).append(o).append(i).appendTo(e),this.table=e},r.initButtons=function(e,t){var n=this;a.prototype.initButtons.call(this,e,t);var o=e.children().first(),i=pn("<button/>").addClass(R.OkButton).button({label:"OK"}).addClass(R.Button).click(function(e){le(this,n),e.preventDefault(),this.bindEvents(),this.uploadRequested=!0,this.switchButtonEnabledState(R.AddButton,!1),this.switchButtonEnabledState(R.OkButton,!1),this.controller.uploadFiles(this.files)}.bind(this));o.children("."+R.AddButton).first().after(i)},r.processFiles=function(e){var t=this;if(this.isVisible){if(this.uploadRequested)return;if(0<e.length){var n=this.filterFiles(e,this.files.map(function(e){return le(this,t),e.name}.bind(this)));0<n.length&&(this.switchButtonEnabledState(R.OkButton,!0),this.addFilesToUi(n))}}else a.prototype.processFiles.call(this,e)},r.addFilesToUi=function(e){var t,n;if(this.allowedDragAndDrop&&void 0===this.table){var o=this.area.children().first();o.children().remove(),o.removeClass(R.AreaMultipleFileDragDrop),this.initFilesTable(o)}for(var i=[],a=0;a<e.length;a++)i.push(this.addRowToFilesTable(e[a]));(t=this.files).push.apply(t,e),(n=this.table).append.apply(n,i)},r.addRowToFilesTable=function(t){var n=this,o=t.name,i=l.rowTemplate.clone();pn("."+R.MultipleFilesCellName,i).text(o),pn("."+R.MultipleFilesCellSize,i).text(this.convertSize(t.size));var a=pn("."+R.FileProgress,i),r=pn("."+R.MultipleFilesCellCancelButton,i).click(function(e){le(this,n),e.preventDefault(),this.uploadRequested?(this.cancelUpload(o),r.css("display","none"),a.text("Canceled")):(this.files.splice(this.files.indexOf(t,0),1),this.removeProgressHandler(o),i.remove(),0===this.files.length&&(this.controller.abort(),this.close()))}.bind(this));return this.addProgressHandler(t.name,a),this.addFinishHandler(t.name,a,r),i},r.show=function(){this.switchButtonEnabledState(R.OkButton,!this.allowedDragAndDrop),this.reinitNeeded&&(this.reinitArea(!1,"Drop files here").addClass(R.AreaMultipleFileDragDrop),this.area.addClass(R.AreaNonTable),this.table=void 0),a.prototype.show.call(this)},r.hide=function(){a.prototype.hide.call(this),this.files.length=0,void(this.uploadElems.length=0)!==this.table&&this.table.children(".atala-upload-files-row").remove()},r.addFinishHandler=function(e,t,n){this.uploadElems.push({filename:e,statusTextElem:t,cancelUploadBtn:n})},r.markStatusFinished=function(t,e,n){var o=this;void 0===n&&(n=!1);var i=this.uploadElems.filter(function(e){return le(this,o),e.filename===t}.bind(this))[0];null!=i&&(i.cancelUploadBtn.css("display","none"),e?i.statusTextElem.text("Finished"):n?i.statusTextElem.text("Canceled"):i.statusTextElem.text("Error"))},l.getFileRowTemplate=function(){var e=pn('<div class="'+R.MultipleFilesRow+'">\n<div class="'+R.MultipleFilesCell+" "+R.MultipleFilesCellName+'"></div>\n<div class="'+R.MultipleFilesCell+" "+R.MultipleFilesCellSize+'"/></div>\n<div class="'+R.MultipleFilesCell+" "+R.MultipleFilesCellStatus+'">\n<span class="'+R.FileProgress+'">Upload pending</span>\n<button title="Removes file from upload queue" class="atala-ui-button '+R.MultipleFilesCellCancelButton+'"/>\n</div>\n</div>');return pn("."+R.MultipleFilesCellCancelButton,e).button({icon:"atala-ui-icon atala-ui-icon-upload-cancel",showLabel:!1}),e},l}(re);function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ue(de,"rowTemplateField",null);var ge,pe,ve=function(o){var e,t;function n(e){var t,n=this;return fe(he(t=o.call(this,e)||this),"fileName",""),fe(he(t),"uploadProgressSpan",null),fe(he(t),"uploadProgressImage",null),t.processFileFinishedUpload=function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,n),t.isFileSuccessEventData(e)?t.uploadProgressSpan.text("Upload finished"):e.errorinfo.canceled?t.uploadProgressSpan.text("Upload canceled"):t.uploadProgressSpan.text("An error occurred during upload"),t.uploadProgressImage.css("display","none")}.bind(this),t}t=o,(e=n).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t;var i=n.prototype;return i.initArea=function(e){var t=R.AreaSingleFile,n="Uploading...";e.allowDragDrop&&(n="Drop file here");var o=this.initAreaImpl(t,!e.allowDragDrop,n);e.allowDragDrop||(this.uploadProgressSpan=o.children("."+R.FileProgress).first(),this.uploadProgressImage=o.children("."+R.FileProgressImage).first(),o.addClass(R.AreaSingleFileNoDragDrop)),o.appendTo(this.area),this.area.addClass(R.AreaNonTable)},i.addFilesToUi=function(e){this.allowedDragAndDrop&&this.reinitArea(!0,"Uploading..."),this.uploadRequested=!0,this.fileName=e[0].name,this.addProgressHandler(this.fileName,this.uploadProgressSpan),this.bindEvents(),this.switchButtonEnabledState(R.AddButton,!1),this.controller.uploadFile(e[0])},i.show=function(){this.reinitNeeded&&this.reinitArea(!1,"Drop file here"),o.prototype.show.call(this)},i.hide=function(){o.prototype.hide.call(this),null!==this.uploadProgressImage&&this.uploadProgressImage.css("display","")},i.reinitArea=function(e,t){var n=o.prototype.reinitArea.call(this,e,t);e?(this.uploadProgressSpan=n.children("."+R.FileProgress).first(),this.uploadProgressImage=n.children("."+R.FileProgressImage).first(),n.addClass(R.AreaSingleFileNoDragDrop)):(n.removeClass(R.AreaSingleFileNoDragDrop),this.uploadProgressSpan=null,this.uploadProgressImage=null)},n}(re);function me(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function be(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(pe=ge||(ge={}))[pe.Idle=0]="Idle",pe[pe.Canceling=1]="Canceling",pe[pe.Uploading=2]="Uploading";var Vn=function(){function e(e,t){var l=this;xe(this,"config",void 0),xe(this,"trigger",void 0),xe(this,"bind",void 0),xe(this,"unbind",void 0),xe(this,"sendRequest",void 0),xe(this,"uploadControlField",null),xe(this,"state",ge.Idle),xe(this,"filesToUpload",[]),xe(this,"uploadingFiles",[]),xe(this,"hasErrors",!1),xe(this,"wasCanceled",!1),xe(this,"uploadCallback",null),xe(this,"abort",function(){me(this,l),this.config.enabled&&(this.state===ge.Uploading&&(this.hasErrors=!0,this.wasCanceled=!0,this.state=ge.Canceling,this.abortActiveRequests()),this.finish(!0))}.bind(this)),xe(this,"finish",function(e){me(this,l),(this.config.closeUiAfterUpload||e)&&this.uploadControl.close()}.bind(this)),xe(this,"onFileUploadStarted",function(e,t){if(me(this,l),this.state===ge.Canceling)return!1;var n={type:"fileuploadstarted",fileinfo:{filename:e,size:t,cancel:!1}};return this.trigger(n),!n.fileinfo.cancel}.bind(this)),xe(this,"onFileUploadFinished",function(e,t){if(me(this,l),!e.success||e.canceled||void 0!==e.error){var n={type:"fileuploaderror",errorinfo:{filename:t,canceled:e.canceled,customData:e.customData}};this.hasErrors=!0,n.errorinfo.canceled?this.wasCanceled=!0:n.errorinfo.error=e.error,this.trigger(n)}else this.trigger({type:"fileuploadfinished",filepath:e.filename,filename:t,customData:e.customData});this.tryToFinishUpload(t)}.bind(this)),xe(this,"onFileUploadFailed",function(e,t,n){me(this,l);var o={type:"fileuploaderror",errorinfo:{filename:n,canceled:"abort"===e}};this.hasErrors=!0,o.errorinfo.canceled?this.wasCanceled=!0:(o.errorinfo.error=e,t&&(o.errorinfo.error+=": "+t)),this.trigger(o),this.tryToFinishUpload(n)}.bind(this)),xe(this,"onUploadStarted",function(){me(this,l);var e={type:"uploadstarted",info:{cancel:!1}};return this.trigger(e),!e.info.cancel}.bind(this)),xe(this,"onUploadFinished",function(){me(this,l);var e={type:"uploadfinished",canceled:this.wasCanceled,success:!this.hasErrors};this.trigger(e)}.bind(this)),xe(this,"onFileUploading",function(t,e,n){var o=this;if(me(this,l),this.state===ge.Canceling)return!1;var i=this.uploadingFiles.filter(function(e){return me(this,o),e.filename===t}.bind(this));if(0===i.length||1<i.length)return!0;var a=i[0];if(a.canceled)return!0;var r={type:"fileuploading",uploadinfo:{filename:t,uploadedbytes:e,totalbytes:n,cancel:!1}};return this.trigger(r),a.canceled=r.uploadinfo.cancel,!r.uploadinfo.cancel}.bind(this)),this.trigger=e.trigger,this.sendRequest=t.makeHandlerRequest,this.bind=e.bind,this.unbind=e.unbind;var n=e.config;this.config={serverUrl:e.config.serverurl,enabled:!1!==n.upload.enabled,allowMultipleFiles:!!n.upload.allowmultiplefiles,allowedFileTypes:n.upload.allowedfiletypes,allowDragDrop:!!n.upload.allowdragdrop,allowedMaxFileSize:n.upload.allowedmaxfilesize,uploadPath:n.upload.uploadpath,uiParent:e.config.parent,filesUploadConcurrency:e.config.upload.filesuploadconcurrency,closeUiAfterUpload:e.config.upload.closeuiafterupload}}var t,n,o,i=e.prototype;return i.dispose=function(){},i.uploadWithUi=function(e){this.uploadControl.activate(e)},i.uploadFiles=function(e,t,n){var o=this;if(this.checkControllerState()&&this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkUploadPath(t)&&this.checkCallback(n)){if(this.state=ge.Uploading,!this.fireUploadStartedEvent())return this.abort(),void this.tryToFinishUpload();for(e.forEach(function(e){return me(this,o),this.uploadFileOnServer(t,e)}.bind(this));this.uploadingFiles.length<this.config.filesUploadConcurrency&&0<this.filesToUpload.length;)this.startFileUpload(this.filesToUpload.pop());"function"==typeof n&&(this.uploadCallback=n)}},i.uploadFile=function(e,t,n){this.uploadFiles([e],t,n)},i.uploadFileOnServer=function(e,t){var n={atala_upath:this.config.uploadPath,atala_subpath:e},o=pn.extend(!0,{},n,{atala_filename:t.name,atala_filetype:t.type}),i={type:"fileupload",serverurl:this.config.serverUrl,query:"?atalafileupload=",method:"POST",data:o,file:t,cancel:!1};this.filesToUpload.push(i)},i.startFileUpload=function(e){this.onFileUploadStarted(e.file.name,e.file.size)?this.uploadingFiles.push({filename:e.file.name,canceled:!1,jqxhr:this.sendRequest(e,this.onFileUploadFinished,this.onFileUploadFailed,this.onFileUploading)}):this.onFileUploadFailed("abort","",e.file.name)},i.fireUploadStartedEvent=function(){return this.onUploadStarted()},i.checkControllerState=function(){return!(this.state===ge.Uploading||this.state===ge.Canceling&&0<this.uploadingFiles.length)||(this.throwError("checkControllerState","Web Document Viewer already performs an upload operation and can start the another one. Please try again later"),!1)},i.checkUploadPath=function(e){return!e||"string"==typeof e||(this.throwError("checkUploadPath","uploadpath object '"+e+"' is not a string. Please check your input parameters and try again."),!1)},i.checkIfUploadDisabled=function(){return!!this.config.enabled||(this.throwError("checkUploadEnabled","Upload is not enabled in this Web Document Viewer instance. Please check the viewer configuration and try again."),!1)},i.checkFilesToUpload=function(e){if(!Array.isArray(e))return this.throwError("checkFilesToUpload","The parameter is not an array. Please check your input parameters."),!1;for(var t=0;t<e.length;t++){var n=e[t];if(!(n instanceof File))return this.throwError("checkFilesToUpload","An object "+n+" doesn't implement File interface object. Please check your input parameters and try again."),!1}return!0},i.checkAlreadyAddedFiles=function(e){if(!e)return!0;if(!Array.isArray(e))return this.throwError("checkAlreadyAddedFiles","The parameter is not an array. Please check your input data."),!1;for(var t=0;t<e.length;t++){var n=e[t];if("string"!=typeof n)return this.throwError("checkAlreadyAddedFiles","An object "+n+" doesn't implement File interface object. Please check your input parameters."),!1}return!0},i.checkCallback=function(e){return!e||"function"==typeof e||(this.throwError("checkCallback","callback object '"+e+"' is not a function. Please check your input parameters and try again."),!1)},i.throwError=function(e,t){this.trigger({type:"throwerror",name:e,msg:t})},i.tryToFinishUpload=function(t){var n=this;t&&this.uploadingFiles.splice(this.uploadingFiles.indexOf(this.uploadingFiles.filter(function(e){return me(this,n),e.filename===t}.bind(this))[0]),1),0<this.filesToUpload.length?this.startFileUpload(this.filesToUpload.pop()):0===this.uploadingFiles.length&&(this.state!==ge.Idle&&(this.state=ge.Idle,this.onUploadFinished(),null!==this.uploadCallback&&this.uploadCallback()),this.hasErrors=!1,this.wasCanceled=!1)},i.filterFilesPublic=function(e,t,n){var o,i=this,a=[];this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkAlreadyAddedFiles(t)&&this.checkCallback(n)&&(o=t?this.filterFiles(e,t):this.filterFiles(e,[]),a=e.filter(function(t){var n=this;return me(this,i),!o.some(function(e){return me(this,n),e===t.name}.bind(this))}.bind(this)),"function"==typeof n&&n());return a},i.filterFiles=function(e,t){for(var n=this,o=[],i=this.config.allowedFileTypes.toLowerCase().split(","),a=t.map(function(e){return me(this,n),e}.bind(this)),r=e.length,l=0;l<r;l++){var s=e[l],c=s.name,u=w.None;if(s.size>this.config.allowedMaxFileSize)o.push(c),u=w.Size;else{for(var d=!1,h=a.length,f=0;f<h;f++)if(a[f]===c){d=!0;break}if(d)o.push(c),u=w.Name;else{for(var g=c.split(".").pop(),p="."+(g?g.toLowerCase():""),v=s.type.toLowerCase(),m=!1,b=0;b<i.length;b++){var x=i[b];if(x===p||""===x.trim()){m=!0;break}var y=x.split("/"),_=v.split("/");if(2===y.length&&2===_.length&&y[0]===_[0]&&(y[1]===_[1]||"*"===y[1])){m=!0;break}}m||(o.push(c),u=w.Type)}}this.onFileAddedToUpload(s,u),a.push(c)}return o},i.abortActiveRequests=function(){var t=this;this.uploadingFiles.forEach(function(e){return me(this,t),e.jqxhr.abort()}.bind(this))},i.onFileAddedToUpload=function(e,t){var n={type:"fileaddedtoupload",filename:e.name,success:0===t,reason:t};this.trigger(n)},i.getUploadControl=function(){return this.uploadControl.getControlDom()}
/**
   *
   * Creates a jQuery UI upload control.
   * @param {any} parent - parent object to append to.
   */,i.createUploadControl=function(e){var t;return(t=this.config.allowMultipleFiles?new de(this):new ve(this)).init(e,this.config),t},t=e,(n=[{key:"uploadControl",get:function(){return null===this.uploadControlField&&(this.uploadControlField=this.createUploadControl(this.config.uiParent)),this.uploadControlField}}])&&be(t.prototype,n),o&&be(t,o),e}();function ye(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Document operations API.
 * @class
 * @name DocumentController
 * @inner
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var Ln=function e(i,t,n){var o=this,p=i,v=t,m=n,a={document:{events:{
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
movePages:M,
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
rotatePages:S,
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
getBookmarks:I,
/**
       * Gets an array of child bookmarks relative to specified.
       * @param {BookmarkData} bookmark - Bookmark object for which children are searched.
       * @returns {BookmarkData[]}
       * @instance
       * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
       * @function
       */
getChildBookmarks:O,
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
removeAllBookmarks:function(e){b.info.bookmarks=[],v.disableBookmarkButton(),b.changes.push({type:"removebookmarks"}),"function"==typeof e&&e()}}};if(e.__exposedApi=a.document,!i)return null;var b={changes:[],mapping:null,count:0,inserted:0,info:{count:0,dpi:96,size:{width:0,height:0},vector:!1,bookmarks:[]}},h={inserted:"pageinserted",removed:"pageremoved",moved:"pagemoved",changed:"documentchanged",rotated:"pagerotated"};function r(e){b.info=e.info,b.mapping=null,b.changes.length=0,b.count=0,b.inserted=0,b.length=0}o.dispose=function(){v=p=o=null};var f=null;function x(e,t,n){n?null===f?f={name:e,message:t}:f.message+="\r\n"+t:p.trigger({type:"throwerror",name:e,msg:t})}function g(){null==b.mapping&&function(){var e=Math.max(b.info.count,0);b.mapping=new Array(e);for(var t=0;t<e;++t)b.mapping[t]=y(t)}()}function l(e,t){g(),b.mapping[e]&&(b.mapping[e].viewerstate[t]||(b.mapping[e].viewerstate[t]={size:null,fitmultiplier:null}))}function y(e){return{index:e,viewerstate:{},pageref:null,angle:0,text:null}}function _(e,t){return l(e,t=t||m),0<=e&&e<b.mapping.length&&b.mapping[e].viewerstate[t].fitmultiplier?b.mapping[e].viewerstate[t].fitmultiplier:1}function w(e){return g(),0<=e&&e<b.mapping.length?b.mapping[e].angle:0}function z(e,t,n){var o=t;e&&e!==i.config.documenturl&&(o.pageref={uri:e,index:t.index,mapsto:b.info.count+b.inserted}),b.count++,b.inserted++,b.mapping.splice(n,0,o)}function u(e){return b.count--,b.mapping.splice(e,1)[0]}function s(){}function c(){}function k(e){var t,n=(t=e,g(),0<=t&&t<b.mapping.length?null!==b.mapping[t].pageref?b.mapping[t].pageref:b.mapping[t].index:null);if(null!==n){if("object"==typeof n)return{uri:n.uri,index:n.index};if(We(n))return{uri:i.config.documenturl,index:n}}return n}function d(e,t,n,o){Array.isArray(t)?x("IncorrectIndex","Source index can not be an array."):P(e,[t],n,o)}function P(e,t,n,o){var i,a;if(g(),"string"==typeof e&&0<e.trim().length)f=null,i=j(t,Number.MAX_VALUE,!1,!0),a=!0,null!==f&&("IncorrectNumbers"===f.name?x("IncorrectIndices","When this methods has set srcUri, then srcIndices should be an array of numbers representing page indices from an external document. Please check your input parameters and try again.\r\n\tInner error: "+f.message):x(f.name,f.message));else{if(null!=e)return void x("IncorrectUri",'Uri has invalid value "'+e+'". It must be an uri to the source document or not set.');a=!1,i=function(e){var t=[],n=null,o=null;if(!Array.isArray(e))return x("IncorrectPageReferences","Objects "+e+" are not an array."),n;if(function(e){var t=this,n=[];return!!Array.isArray(e)&&(e.forEach(function(e){ye(this,t),null===Qe(e)&&n.push(e)}.bind(this)),0===n.length)}(e)){o=new Array(e.length);for(var i=0;i<e.length;i++)o[i]=k(e[i])}for(var a=0;a<e.length;a++){var r=null!==o?o[a]:e[a];if("object"==typeof r&&null!==r&&"string"==typeof r.uri&&0!==r.uri.trim().length){var l=j([r.index],Number.MAX_VALUE);null!==l?r.index=l[0]:t.push(r)}else t.push(r)}return 1<t.length?x("IncorrectPageReferences",'Objects "'+t.join('", "')+'" are not correct page references.'):0<t.length?x("IncorrectPageReferences",'Object "'+t[0]+'" is not a correct page reference.'):n=null!==o?o:e,n}(t)}var r=H(n,!1);if(null!==i&&null!==r){var l=r;v._state.batchoperation++;for(var s=0;s<i.length;s++){var c=a?e:i[s].uri,u=a?i[s]:i[s].index;s===i.length-1&&v._state.batchoperation--;var d=y(u);z(c,d,r),v._controllers.annotations&&v._controllers.annotations.insertLayer(null,null,r),v._controllers.forms&&v._controllers.forms.insertForm(null,null,r),b.changes.push({type:"insertpage",uri:c,src:d.index,dest:r}),p.trigger({type:h.inserted,srcuri:c,srcindex:u,destindex:r}),r++}!function(e,t){if(void 0!==b.info.bookmarks&&b.info.bookmarks&&0<b.info.bookmarks.length)for(var n=0;n<b.info.bookmarks.length;n++)b.info.bookmarks[n].Page>=e&&(b.info.bookmarks[n].Page+=t)}(l,i.length),"function"==typeof o&&o(),p.trigger(h.changed)}}function T(e,t){D([e],t)}function D(e,t){var n=this;g();var o=R(e,!0);null!==o&&(v._state.batchoperation++,o.sort(function(e,t){return ye(this,n),t-e}.bind(this)).forEach(function(e,t){ye(this,n),t===o.length-1&&v._state.batchoperation--,u(e),v._controllers.annotations&&v._controllers.annotations.removeLayer(e),v._controllers.forms&&v._controllers.forms.removeForm(e),b.changes.push({type:"removepage",index:e}),function(e){if(void 0!==b.info.bookmarks&&b.info.bookmarks&&0<b.info.bookmarks.length)for(var t=0;t<b.info.bookmarks.length;t++)if(b.info.bookmarks[t].Page===e){var n=b.info.bookmarks[t].id,o=b.info.bookmarks;o.splice(t,1),t--,o=A(n,o),b.info.bookmarks=o}else b.info.bookmarks[t].Page>e&&(b.info.bookmarks[t].Page-=1)}(e),p.trigger({type:h.removed,index:e})}.bind(this)),"function"==typeof t&&t(),p.trigger(h.changed))}function C(e,t,n){M([e],t,n)}function M(e,t,n){g();var r=R(e,!0),l=H(t,!0);if(null!==r&&null!==l){var s=l,c=r[0]>l?1:-1;v._state.batchoperation++;for(var o=function(e){var n=this,o=e,i=r[o],t=0,a=0;t=i<l?-r.filter(function(e,t){return ye(this,n),t<o&&e<i&&e<l}.bind(this)).length:l<i?r.filter(function(e,t){return ye(this,n),t<o&&i<e}.bind(this)).length:c<0?-r.filter(function(e,t){return ye(this,n),t<o&&e<i&&e<l}.bind(this)).length:r.filter(function(e,t){return ye(this,n),t<o&&i<e}.bind(this)).length,0<e&&(t<0||i<l)&&(a=-1),s+=a,e===r.length-1&&v._state.batchoperation--,z(null,u(i+t),s),v._controllers.annotations&&v._controllers.annotations.moveLayer(i+t,s),v._controllers.forms&&v._controllers.forms.moveForm(i+t,s),b.changes.push({type:"movepage",src:i+t,dest:s}),function(e,t){if(void 0!==b.info.bookmarks&&b.info.bookmarks&&0<b.info.bookmarks.length)for(var n=0;n<b.info.bookmarks.length;n++){var o=b.info.bookmarks[n].Page;o===e&&(b.info.bookmarks[n].Page=t),t<e?t<=o&&o<e&&(b.info.bookmarks[n].Page+=1):e<o&&o<=t&&(b.info.bookmarks[n].Page-=1)}}(i+t,s),p.trigger({type:h.moved,shiftedsrcindex:i+t,srcindex:i,destindex:s}),s++},i=0;i<r.length;i++)o(i);"function"==typeof n&&n(),p.trigger(h.changed)}}function E(e,t,n){Array.isArray(t)?x("rotatePage","angle "+t+" is array."):S([e],t,n)}function S(e,t,n){var i=this;g();var a=R(e),o="number"==typeof t||"string"==typeof t,r=function(e,t){var n=B(t?[e]:e);if(n)for(var o=0;o<n.length;o++){if(n[o]%90)return x("rotatePages","Angle must be a multiple of 90 degrees."),null;n[o]=n[o]%360}return n}(t,o);null!==a&&null!==r&&(o||a.length===r.length?(v._state.batchoperation++,a.forEach(function(e,t){ye(this,i);var n=1<r.length?r[t]:r[0];t===a.length-1&&v._state.batchoperation--;var o=function(e,t){b.mapping[e].angle=t;for(var n=null,o=0;o<v._pages.length;++o){var i=v._pages[o];if(i._index===e){n=i;break}}return n&&n._img&&(v.startDomManipulation(),v.adjustVisiblePages(!0,v.endDomManipulation)),n}(e,n);b.changes.push({type:"rotatepage",index:e,angle:n}),p.trigger({type:h.rotated,index:e,page:o,angle:n})}.bind(this)),"function"==typeof n&&n()):x("rotatePages","Indices array and angles array have different lengths."))}function I(){var t=this,n=new Array;return b.info.bookmarks&&b.info.bookmarks.forEach(function(e){ye(this,t),-1===e.Parent?F(n,e):function e(t,n){var o=t[t.length-1];o.id===n.Parent?F(o.Children,n):e(o.Children,n)}(n,e)}.bind(this)),n}function F(e,t){e.push({id:t.id,Text:t.Text,Page:t.Page,Top:t.Top,Left:t.Left,initRotation:t.PageRotation,Children:[]})}function A(e,t){for(var n=0;n<t.length;n++)if(t[n].Parent===e){var o=t[n].id;t.splice(n,1),n--,A(o,t)}return t}function O(e){("object"!=typeof e||isNaN(e.id))&&x("Invalid argument","Bookmark object is expected as input parameter");var t=[];return function t(n,o){var i=this,e=b.info.bookmarks.filter(function(e){return ye(this,i),e.Parent===n}.bind(this));0<e.length&&e.forEach(function(e){ye(this,i),F(o,e),t(e.id,o[o.length-1].Children)}.bind(this))}(e.id,t),t}function V(e,t){var n=this;("object"!=typeof e||isNaN(e.id)||isNaN(e.Page))&&x("Invalid argument","Bookmark object is expected as an input parameter");var o=function(){ye(this,n),"function"==typeof t&&t()}.bind(this),i=Qe(e.Page),a=Qe(e.Top),r=Qe(e.Left),l=Qe(e.initRotation),s={x:0,y:0};if(!isNaN(a)){var c=b.info.dpi,u=p.getZoom();v._config.forcepagefit&&(u*=_(i,m));var d=L(i,m);d||(d=L(0,m));var h=(w(i)+l)%360,f=0;(f=0<a?Math.round(a/72*c):d.height)>d.height&&(f=d.height);var g=isNaN(r)?0:Math.round(r/72*c);g>d.width&&(g=d.width),180===h?(s.y=Math.round(f*u),0<g&&(s.x=Math.round((d.width-g)*u))):s.x=90===h?(s.y=Math.round(g*u),Math.round(f*u)):270===h?(s.y=Math.round((d.height-g)*u),Math.round((d.width-f)*u)):(s.y=Math.round((d.height-f)*u),Math.round(g*u))}v.showPagePoint(i,s,_n.TopLeft,!0,o)}function L(e,t){if(l(e,t=t||m),0<=e&&e<b.mapping.length){var n=b.mapping[e].viewerstate[t].size;if(!n){var o=b.info;if(o.pagesizes&&o.pagesizes[e])return o.pagesizes[e]}return n}}function H(e,t){var n=j([e],b.mapping.length+(t?0:1));return n?n[0]:n}function R(e,t){return j(e,b.mapping.length,t)}function j(e,i,a,t){var r=this,l=[],s=[],n=null,o="IncorrectIndices";return Array.isArray(e)?((e=B(e,t))&&e.forEach(function(t,e,n){var o=this;ye(this,r),(t<0||i<=t)&&l.push(t),a&&1<n.filter(function(e){return ye(this,o),e===t}.bind(this)).length&&-1===s.indexOf(t)&&s.push(t)}.bind(this)),1<l.length?x(o,"Page indices "+l.join(", ")+" are outside of the document.",t):0<l.length?x(o,"Page index "+l[0]+" is outside of the document.",t):1<s.length?x(o,"Page indices "+s.join(", ")+" are included more than once.",t):0<s.length?x(o,"Page index "+s[0]+" is included more than once.",t):n=e):x(o,"Object "+e+" is not an array.",t),n}function B(e,t){var n=this,o=[],i=[];return Array.isArray(e)?(e.forEach(function(e){ye(this,n);var t=Qe(e);null===t?o.push(e):i.push(t)}.bind(this)),1<o.length?(x("IncorrectNumbers",'Objects "'+o.join('", "')+'" are not numbers.',t),i=null):0<o.length&&(x("IncorrectNumbers",'Object "'+o[0]+'" is not a number.',t),i=null)):x("IncorrectNumbers","Object "+e+" is not an array.",t),i}o.__exposedApi=a.document,o.getPageDefinition=function(e,t){if(t=t||m,g(),0<=e&&e<b.mapping.length&&b.mapping[e]){var n=b.mapping[e],o=null,i=null;if(-1===n)return null;null!=n.pageref?(o=n.pageref,e=o.index,i=o.uri):e=n.index;var a=n.viewerstate[t]&&0<=n.viewerstate[t].cacheIndex?n.viewerstate[t].cacheIndex:-1;return{index:e,ref:o,cacheIndex:a,uri:i}}return null},o.setPageCacheIndex=function(e,t){l(e,m),b.mapping[e]&&b.mapping[e].viewerstate&&(b.mapping[e].viewerstate[m].cacheIndex=t)},o.insertPage=d,o.removePage=T,o.movePage=C,o.rotatePage=E,o.insertPages=P,o.removePages=D,o.movePages=M,o.rotatePages=S,o.getPageFitMultiplier=_,o.setPageFitMultiplier=function(e,t,n){l(e,n=n||m),0<=e&&e<b.mapping.length&&(b.mapping[e].viewerstate[n].fitmultiplier=t)},o.getPageRotation=w,o.getPageSize=L,o.setPageSize=function(e,t,n){l(e,n=n||m),0<=e&&e<b.mapping.length&&(b.mapping[e].viewerstate[n].size=t)},o.getBookmarks=I,o.getChildBookmarks=O,o.scrollToBookmark=V,o.updatePageText=function(e,t){g(),0<=e&&e<b.mapping.length&&(b.mapping[e].text=t)},o.getPageText=function(e){return 0<=e&&e<b.mapping.length?b.mapping[e].text:null},o.initDocumentText=function(e){if(e&&e.pages){g();for(var t=0;t<b.mapping.length;++t)if(t<e.pages.length)if(b.mapping[t].index===t)b.mapping[t].text=e.pages[t];else for(var n=0;n<b.mapping.length;++n)b.mapping[n].index===t&&(b.mapping[n].text=e.pages[t]);else b.mapping[t].text=null}},o.getPageIndexByImageIndex=function(e){if(e<b.info.count){for(var t=0;t<b.mapping.length;t++)if(b.mapping[t].index===e)return t}else for(var n=0;n<b.mapping.length;n++)if(b.mapping[n].pageref&&b.mapping[n].pageref.mapsto===e)return n;return-1},o.canBeTiled=function(e,t){if(null===b.mapping[t].pageref){var n=b.info,o=b.mapping[t].index;if(n.pagesizes&&(n.pagesizes[o].width>e||n.pagesizes[o].height>e))return!0}else{var i=b.mapping[t].viewerstate[m].size;if(i&&(i.width>e||i.height>e))return!0}return!1},o.__getDebugInfo=function(){var e={};return pn.extend(!0,e,{data:b,changes:b.changes}),e},o.__linkChanges=function(e){e&&(e._changes?b=e._changes:e._changes=b)},o.clear=function(e){b.clear(),"function"==typeof e&&e(),p.trigger(h.changed)},o.getPageCount=function(){return b.info.count+b.count},o.stringifyChanges=function(){var e=[],t={type:"docinfo",pagescount:b.info.count};for(var n in e.push(t),b.changes)if(b.changes.hasOwnProperty(n)&&(p.config.persistrotation||"rotatepage"!==b.changes[n].type)){var o={};for(var i in b.changes[n])b.changes[n].hasOwnProperty(i)&&(o[i]=b.changes[n][i]);e.push(o)}return JSON.stringify({changes:e})},"Atalasoft.Controls.WebDocumentViewer"===p.typeOf&&pn.extend(p,a),p.bind({pagerecycled:c,pageshown:s,documentinfochanged:r})};function Ue(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Text Layer operations API.
 * @class
 * @inner
 * @name TextController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var Hn=function e(t,n,o){var i=this,D=t,C=n,M=(n?n._internalEvents:null)||pn({}),a={
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
getSelected:W,
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
selectPageText:m,
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
getPageText:function(i,a,e){var r=this,l=pn.Deferred();return ve(i).done(function(){Ue(this,r);var e="",t=I(i);if(t)for(var n=0;n<t.regions.length;n++){var o=Z(t.regions[n]);o&&(e+=o)}l.resolve(e),a&&"function"==typeof a&&a(e)}.bind(this)).fail(function(){Ue(this,r),l.reject(),e&&"function"==typeof e&&e()}.bind(this)),l.promise()},
/**
       * Clears all text selection for the document.
       * @instance
       * @function
       */
clearSelection:y,
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
reloadPageText:function(e,t,n){var o=this;return b(e),ve(e).done(function(){Ue(this,o),t&&"function"==typeof t&&t(e)}.bind(this)).fail(function(){Ue(this,o),n&&"function"==typeof n&&n(e)}.bind(this))},
/**             
       * Indicates whether page text is loaded.             
       * @param {number} index - Index of the page to check text data state.
       * @instance
       * @function
       */
isPageTextLoaded:function(e){var t=I(e);return!(!t||t.loading)},
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
searchOnPages:ue}};if(e.__exposedApi=a.text,!t)return null;var r=.1,l=null,E=n._pages,S={activepage:null,origin:Re(0,0),originPage:-1,rectangular:!1,selectionCache:[],searchQuery:null},u={};function I(e){return C._controllers.document.getPageText(e)}
/**
   * jQuery trigger shortcut
   * @returns object, WebDocumentViewer
   */
function s(e){return D.trigger(e),i}function p(e,t){D.trigger({type:"throwerror",name:e,msg:t})}function c(){}function F(e,t){if(t._text){f(t);var n=I(e);if(n){var o=xe(t,n);if(o&&n.searchResult&&w(o,n),o&&n.selection)for(var i=n.selection,a=0;a<i.regions.length;a++)for(var r=0;r<i.regions[a].lines.length;r++)for(var l=i.regions[a].lines[r],s=0;l.words&&s<l.words.length;s++){var c=l.words[s];ne(o,c.bounds.x,c.bounds.y,c.bounds.width,c.bounds.height,u.selection)}}}}function d(e){f(e.page)}function h(e){F(e.index,e.page)}function f(e){e._text&&_(e._index)}function g(e){e.page._text.attr("width",e.width).attr("height",e.height),e.page._text.width(e.width),e.page._text.height(e.height),F(e.index,e.page)}function v(){if(S.searchQuery&&S.searchQuery.iterator){S.searchQuery.iterator.dispose(),S.searchQuery=null,he();for(var e=0;e<E.length;e++)F(E[e]._index,E[e])}}function m(e,a,r,l,s,t){var c=this,u=pn.Deferred(),n=Array.prototype.slice.call(arguments,1);return 2<n.length&&"function"==typeof n[n.length-2]?(t=n.pop(),s=n.pop()):1<n.length&&"function"==typeof n[n.length-1]&&(s=n.pop()),a=n[0],r=n[1],l=n[2],ve(e).done(function(e,t){var n=this;Ue(this,c);var o=t.bounds;void 0===a||!t.regions[a]||void 0!==r&&t.regions[a].lines[r]?(a=t.regions[a],void 0!==r&&a.lines[r]&&(o=te((r=a.lines[r]).bounds,a),void 0!==l&&r.words[l]&&(o=te(r.words[l].bounds,a))),Y(e,Re(o.x,o.y),e,Re(o.right,o.bottom))):G(e,a);var i=function(){Ue(this,n),D.config.mousetool.text.hookcopy&&C._dom.viewport.focus(),u.resolve(),s&&"function"==typeof s&&s()}.bind(this);C.isPageInView(e)?i():D.showPage(e,i)}.bind(this)).fail(function(){Ue(this,c),u.reject(),t&&"function"==typeof t&&t()}.bind(this)),u.promise()}function b(e){if(null==e)for(var t=0;t<C._controllers.document.getPageCount();t++)b(t);I(e)&&(C._controllers.document.updatePageText(e,null),S.selectionCache[e]&&(S.selectionCache[e]=null,C.findPageFromIndex(e)&&_(e,null)))}function x(){if(S.searchQuery=null,S.selectionCache=[],C._controllers.document.initDocumentText({pages:[]}),E)for(var e=0;e<E.length;e++)f(E[e])}function y(){for(var e=0;e<C._controllers.document.getPageCount();e++){var t=I(e);t&&t.selection&&(_(e,t,!0),t.selection=null)}S.selectionCache.length=0}
/** Clears the text selection */function _(e,t,n){for(var o=0;o<E.length;o++)if(!isFinite(e)||E[o]._index===e){t=isFinite(e)&&o===e?t:I(E[o]._index);var i=xe(E[o],t);if(i){var a=C.getSourcePageSize(E[o]._index,t?t.rotation:0);i.clearRect(0,0,a.width,a.height),n&&w(i,t)}}}function w(e,t){if(t&&t.searchResult)for(var n=0;n<t.searchResult.length;n++){var o=t.searchResult[n].bounds;ne(e,o.x,o.y,o.width,o.height,u.highlight)}}function z(e){var t=e.eventData,n=t.page,o=t.point;y();var i=I(n);i&&(i.selection=se(t.point,t.point),t.interval&&S.origin&&0<=S.originPage?(Y(S.originPage,S.origin,n,o),t.complete=!0):(t.line||t.word)&&Math.abs(t.point.x-S.origin.x)<10&&Math.abs(t.point.y-S.origin.y)<10?(function(e,t,n,o){var i=I(e);if(i&&(n||o))for(var a=0;a<i.regions.length;a++){var r=i.regions[a];if(Se(t,r.bounds))for(var l=0;l<r.lines.length;l++){var s=r.lines[l];if(Se(t,s.bounds)){var c={region:a,line:l,bounds:s.bounds};if(o){for(var u=0;u<s.words.length;u++)if(Se(t,s.words[u].bounds))return c.word=u,c.bounds=s.words[u].bounds,X(e,c)}else if(n)return X(e,c)}}}}(n,o,t.line,t.word),t.complete=!0):(S.origin=t.rectangular?t.viewerPoint:t.point,S.originPage=n,S.rectangular=t.rectangular)),t.handled=!0}pn.extend(u,o||{}),i.dispose=function(){D.unbind({pagerecycled:d,pageshown:h,zoomchanged:c,documentchanged:v}),M.off({textselectstart:z,textselectmove:j,textselectend:B}),l=D=i=null,S.searchQuery=null,S.selectionCache=[],S.activepage=null},i.removeTextLayer=function(e){return e instanceof pn&&(e._text&&(e._text._page=null,e._text=null),!0)},i.addTextLayer=function(t){return t instanceof pn&&(t._text=C.createDOM("canvas",t),t._text.css({width:"100%",height:"100%",position:"absolute",zIndex:0}),t._text.attr("width",t.width()).attr("height",t.height()),(t._text._page=t).on(mn.Features.Touch?"touchstart":"mousedown",function(){var e;e=t,S.activepage=e}),t.on({pageresize:function(e){e.page=t,g(e)},pagezoom:function(e){e.page=t,g(e)}}),!0)},i.showLayer=F,i.__exposedApi=a.text,i.__getDebugInfo=function(){var e={};return pn.extend(!0,e,{data:S,pages:E,viewport:l}),e},i.__linkText=function(){},i.clear=x,i.setViewPort=function(e){e&&(e instanceof pn||(e=pn(e)),l=e)},i.search=ce,i.clearSelection=y,i.ensurePageTextLoaded=ve;var k,P,T,A,O,V,L,H,R=(k=Y,P=D.config.mousetool.text.throttlingtreshold,L=0,H=function(){L=(new Date).getTime(),V=null,O=k.apply(T,A),V||(T=A=null)},function(){var e=(new Date).getTime();L||(L=e-P);var t=P-(e-L);return T=this,A=arguments,t<=0||P<t?(V&&(clearTimeout(V),V=null),L=e,O=k.apply(T,A),V||(T=A=null)):V||(V=setTimeout(H,t)),O});function j(e){var t=e.eventData,n=t.page,o=S.rectangular?t.viewerPoint:t.point,i=I(n);if(i)if(i.loading)t.cursor=Be.Wait;else{if(0===i.regions.length)return!(t.handled=!1);var a=C.getPageRotation(n)+i.rotation;if(i.rotatedRegions)for(var r=0;r<i.rotatedRegions.length;r++)if(Se(t.point,i.rotatedRegions[r].bounds)){a+=i.rotatedRegions[r].rotation;break}t.cursor=a%180==0?Be.Text:Be.VerticalText,t.selecting&&R(S.originPage,pn.extend({},S.origin),n,o,S.rectangular)}return!(t.handled=!0)}function B(e){var t=e?e.eventData:{},n=!1;for(var o in S.selectionCache)if(S.selectionCache.hasOwnProperty(o)&&S.selectionCache[o].selection&&S.selectionCache[o].selection.regions.length){n=!0;break}n&&s({type:"textselected"}),S.rectangular=!1,t.handled=!0}function N(){q()}function q(){var e=C.createDiv();if(e[0]){var t=new je("wdv-dummy-selection-trigger",{text:function(){return W()}});t.on("success",function(){t.destroy()}),t.on("error",function(){t.destroy(),p("TextCopyError")}),t.onClick({currentTarget:e[0]})}}function W(){for(var e="",t=0;t<S.selectionCache.length;t++)if(S.selectionCache[t]){var n=S.selectionCache[t].selection;if(n&&n.regions&&0<n.regions.length)for(var o=0;o<n.regions.length;o++){var i=Z(n.regions[o]);i&&(e+=i)}}return e}function U(e){for(var t="",n=0;e.words&&n<e.words.length;n++)if(Ve(e.words[n],1<=n?e.words[n-1]:null)&&(t+=" "),e.words[n].text)t+=e.words[n].text;else if(e.words[n].glyphs&&e.words[n].glyphs.length)for(var o=0;o<e.words[n].glyphs.length;o++)t+=e.words[n].glyphs[o].text;return t}function Z(e){for(var t="",n=0;n<e.lines.length;n++){var o=U(e.lines[n]);o&&(t+=o+"\n")}return t}function X(e,t){var n=I(e);if(n&&t&&n.regions[t.region]){y();var o=n.regions[t.region],i=xe(be(e),n);if(We(t.line)&&o.lines[t.line]){for(var a=o.lines[t.line],r={words:[]},l={lines:[r],bounds:pn.extend({},o.bounds)},s=We(t.word)&&a.words[t.word]?t.word:0,c=We(t.endWord)&&a.words[t.endWord]?t.endWord:We(t.word)?s:a.words.length-1,u=s;u<=c;++u){var d=a.words[u],h=!!d.glyphs.length;h&&u===s&&We(t.glyph)?d=$(d,t.glyph,s===c&&We(t.endGlyph)?t.endGlyph:d.glyphs.length-1):h&&u===c&&We(t.endGlyph)&&(d=$(d,0,t.endGlyph)),r.words.push(pn.extend({},d)),i&&ne(i,d.bounds.x,d.bounds.y,d.bounds.width,d.bounds.height)}n.selection=se(Re(t.bounds.x,t.bounds.y),Re(t.bounds.right,t.bounds.bottom)),le(n.selection.regions,l),S.selectionCache[e]=n}else G(e,t.region)}}function G(e,t){y();var n=I(e);if(n&&n.regions[t]){var o=n.regions[t],i=xe(be(e),n);n.selection=se(Re(o.bounds.x,o.bounds.y),Re(o.bounds.right,o.bounds.bottom),!1);var a=Q(i,o,n.selection.origin,n.selection.point);a&&0<a.lines.length&&(le(n.selection.regions,a),S.selectionCache[e]=n)}}function Y(e,t,n,o,i){var a=Math.min(e,n),r=Math.max(e,n);for(var l in S.selectionCache)if(S.selectionCache.hasOwnProperty(l)){var s=parseInt(l,10);(s<a||r<s)&&(_(s,S.selectionCache[s],!0),S.selectionCache[s].selection=null)}for(var c=i?Math.min(t.x,o.x):0,u=Re(c,0),d=a;d<=r;d++){var h=C.getSourcePageSize(d);i&&((h=pn.extend({},C.getPageSize(d))).width*=C.getPageScale(d),h.height*=C.getPageScale(d));var f=i?Math.max(t.x,o.x):h.width,g=Re(f,h.height),p=void 0,v=void 0;a===r?(p=t,v=o):d===e?(p=t,v=d===a?g:u):d===r||d===a?(v=o,p=d===a?g:u):(p=u,v=g);var m=be(d);i?ee(d,Re(c,p.y),Re(f,v.y),m):J(d,p,v,m)}}function J(e,t,n,o){var i,a,r,l=I(e);if(l&&oe(l,t,n,!1)&&0<l.regions.length){o&&o._text&&_(e,l,!0),l.selection=se(t,n,!1);var s=function(e,t,n){for(var o=Re(Math.min(t.x,n.x),Math.min(t.y,n.y)),i=Re(Math.max(t.x,n.x),Math.max(t.y,n.y)),a=Te({x:o.x,y:o.y,width:i.x-o.x,height:i.y-o.y}),r=Te({x:0,y:o.y,width:e.bounds.width,height:i.y-o.y}),l=t,s=n,c=null,u=null,d=null,h=null,f=0;f<e.regions.length&&(!c||!u);f++){var g=e.regions[f].bounds;Ie(r,g)&&(d=!d||re(e.regions[f],d)?e.regions[f]:d),Ie(a,g)&&(c=!c&&Se(l,e.regions[f].bounds)?e.regions[f]:c,u=!u&&Se(s,e.regions[f].bounds)?e.regions[f]:u,h=!h||ie(e.regions[f],h)?e.regions[f]:h)}if(c&&u){if(re(u,c)){var p=u;u=c,c=p,l=n,s=t}}else if(d&&h){var v;c?(v=ae(s),re(c,v)?(u=h,s=null):(u=c,s=l,c=d,l=null)):u?(v=ae(l),ie(u,v)?(c=d,l=null):(c=u,l=s,u=h,s=null)):(c=d,u=h,l=s=null),l=l||Le(c),s=s||He(u)}return{start:c,startPoint:l,end:u,endPoint:s}}(l,t,n);if(s&&s.start&&s.end)for(var c=xe(o,l),u=0;u<l.regions.length;u++){var d=l.regions[u],h=null;d===s.start?h=d===s.end?Q(c,d,s.startPoint,s.endPoint):Q(c,d,s.startPoint,He(d)):d===s.end?h=Q(c,d,Le(d),s.endPoint):(i=d,a=s.start,r=s.end,ie(i,a)&&re(i,r)&&(h=Q(c,d,Le(d),He(d)))),h&&h.lines&&0<h.lines.length&&(le(l.selection.regions,h),S.selectionCache[e]=l)}}}function Q(e,t,n,o){var i={lines:[],bounds:pn.extend({},t.bounds)},a=I(t.page).bounds;if(0!==t.rotation&&(n=qe(n,a,360-t.rotation),o=qe(o,a,360-t.rotation)),Ce(n.y,o.y)){var r=n;n=o,o=r}for(var l=0;l<t.lines.length;l++){var s=t.lines[l],c={words:[]},u=Pe(s,a,t.rotation),d=Ce(u.y,n.y)&&De(u.bottom,o.y),h=!d&&Ee(n.y,u.y,u.bottom),f=!d&&Ee(o.y,u.y,u.bottom);if(h&&1<l){var g=Pe(t.lines[l-1],a,t.rotation);d=!(h=!Ee(n.y,g.y,g.bottom))&&!f}if(f&&l<t.lines.length-1){var p=Pe(t.lines[l+1],a,t.rotation);f=!Ee(o.y,p.y,p.bottom),d=!h&&!f}if(d||h||f){for(var v=0;s.words&&v<s.words.length;v++){var m=s.words[v],b=Pe(m,a,t.rotation),x=m.glyphs&&m.glyphs.length,y=d;if(!y){if(h&&f){if(Ce(n.x,o.x)){var _=n;n=o,o=_}y=Ce(x?b.x:b.right,n.x)&&De(x?b.right:b.x,o.x)}else h?y=Ce(x?b.x:b.right,n.x):f&&(y=De(x?b.right:b.x,o.x));if(!y&&x){var w=null;if(h&&Ee(n.x,b.x,b.right)){var z=f?Math.min(b.right,o.x):b.right;w=K(m,n.x,z)}f&&Ee(o.x,b.x,b.right)&&(w=K(m,h?Math.max(b.x,n.x):b.x,o.x)),w&&(m=w,y=!0)}}y&&(c.words.push(pn.extend({},m)),e&&ne(e,m.bounds.x,m.bounds.y,m.bounds.width,m.bounds.height))}0<c.words.length&&i.lines.push(c)}}return i}function K(e,t,n){for(var o=null,i=null,a=0;a<e.glyphs.length;++a){var r=e.glyphs[a].normalizedBounds;if(null===o&&Ce(r.right,t)&&(o=a),!De(r.x,n))break;i=a}return null!==o&&null!==i?$(e,o,i):null}function $(e,t,n){var o={glyphs:[],text:"",omitSpace:e.omitSpace};if(0<=t&&t<=n&&e.glyphs[n]){o.glyphs=e.glyphs.slice(t,n+1);var i=e.glyphs[t].bounds,a=e.glyphs[n].bounds,r=Math.min(i.x,a.x),l=Math.min(i.y,a.y),s=Math.max(i.right,a.right),c=Math.max(i.bottom,a.bottom);return o.bounds={x:r,y:l,width:Math.abs(s-r),height:Math.abs(c-l)},Te(o.bounds),o}return null}function ee(e,t,n,o){var i=I(e);if(i&&oe(i,t,n,!0)&&0<i.regions.length){o&&o._text&&_(e,i,!0);var a=Oe(e,i,t),r=Oe(e,i,n);i.selection=se(t,n,!0);var l=Te({x:Math.min(a.x,r.x),y:Math.min(a.y,r.y),width:Math.abs(r.x-a.x),height:Math.abs(r.y-a.y)});if(l=Ae(l,i.bounds)){for(var s,c=0;c<i.regions.length;c++)if(Ie(l,i.regions[c].bounds)){s=s||xe(o,i);for(var u={lines:[],bounds:pn.extend({},i.regions[c].bounds)},d=0;d<i.regions[c].lines.length;d++){for(var h=i.regions[c].lines[d],f={words:[]},g=0;h.words&&g<h.words.length;g++){var p=h.words[g];if(Ie(l,p.bounds)){var v=Te(Ne(l,i.bounds,(360-i.regions[c].rotation)%360)),m=p.normalizedBounds,b=Ce(m.x,v.x),x=De(m.right,v.right);b&&x||(p=K(p,Math.max(m.x,v.x),Math.min(m.right,v.right))),p&&(f.words.push(pn.extend({},p)),s&&ne(s,p.bounds.x,p.bounds.y,p.bounds.width,p.bounds.height))}}0<f.words.length&&u.lines.push(f)}u.lines.length&&le(i.selection.regions,u)}i.selection.regions.length&&(i.selection.bounds=l,S.selectionCache[e]=i)}}}function te(e,t){if(t){if(t.rotation%180!=0)return Te({x:(e.right+e.x)/2,y:e.y,width:0,height:e.height});var n=(e.bottom+e.y)/2;return Te({x:e.x,y:n,width:e.width,height:0})}return null}function ne(e,t,n,o,i,a){e&&(e.clearRect(t,n,o,i),a=a||u.selection,e.fillStyle=a.color,e.globalAlpha=a.alpha,e.fillRect(t,n,o,i))}function oe(e,t,n,o){return o=!!o,!e.selection||!Me(e.selection.origin,t)||!Me(e.selection.point,n)||o!==e.selection.rectangular}function ie(e,t){if(Ce(e.bounds.bottom,t.bounds.y)){if(Fe(e.bounds,t.bounds))return e.bounds.x>t.bounds.x;var n=Ae(e.bounds,t.bounds);if(n)return 1<=n.width/n.height?Ce(e.bounds.y,t.bounds.y):Ce(e.bounds.x,t.bounds.x);if(Ce(e.bounds.y,t.bounds.bottom))return!0;if(De(e.bounds.bottom,t.bounds.y))return!1;if(Ce(e.bounds.x,t.bounds.x))return!0}return!1}function ae(e){return{lines:[],bounds:Te({x:e.x,y:e.y,width:0,height:0})}}function re(e,t){return!ie(e,t)}function le(e,t){for(var n=0;n<e.length&&!re(t,e[n]);n++);Array.prototype.splice.call(e,n,0,t)}function se(e,t,n){return{origin:e,point:t,rectangular:!!n,regions:[]}}function ce(e,t,n){return"function"==typeof t&&(n=t,t=0),ue(e,0,C._controllers.document.getPageCount()-1,t,n)}function ue(e,t,n,o,i){var a=this,r=C._controllers.document.getPageCount(),l=!1;"function"==typeof t&&(i=t,n=r-1,o=t=0),"function"==typeof n&&(i=n,n=r-1,o=t),"function"==typeof o&&(i=o,o=t);var s=function(e,t){if(Ue(this,a),l)return null;var n=!1,o=e;return"string"==typeof e&&(o=Qe(e),n=!0),null===o&&!n||void 0===o||"number"==typeof o?o:(p("searchOnPages",t+" page '"+JSON.stringify(e)+"' is not a correct page index."),l=!0,null)}.bind(this),c=s(t,"Start"),u=s(n,"End"),d=s(o,"Active");if(l)return null;if(null!==c&&Cn(c)||(c=0),null!==u&&Cn(u)||(u=r-1),null!==d&&Cn(d)||(d=c),c<0||r<=c)return p("searchOnPages","Start page "+c+" is out of range."),null;if(u<0||r<=u)return p("searchOnPages","End page "+u+" is out of range."),null;if(u<c)return p("searchOnPages","Start page is greater than end page."),null;if(d<c||u<d)return p("searchOnPages","Active page "+d+" is out of range."),null;if(null!=e&&"string"!=typeof e)return p("searchOnPages","Text to search value "+JSON.stringify(e)+" is not a valid text to search."),null;if(null!=i&&"function"!=typeof i)return p("searchOnPages","Callback value "+JSON.stringify(i)+" is not a valid callback function."),null;if(he(),y(),e&&2<e.length){var h={sourceQuery:e,text:e.toLocaleLowerCase(),start:c,end:u,active:d};if(S.searchQuery=h,i){var f=new de(h,i);return S.searchQuery.iterator=f}var g=new de(h,i=function(e,t){e.isValid()&&null!==t&&m(t.page,t.region,t.line,t.word)});S.searchQuery.iterator=g}else E.forEach(function(e){Ue(this,a),e._index>=c&&e._index<=u&&F(e._index,e)}.bind(this));return null}
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
   */function de(c,o){var u,d=3,h=c.start,f=c.end,g=c.active,p=-1,v=-1,m=0,b=this,x=[],t=[],y=T(-1);function i(e){t.push({action:_,args:[!0,P(e)]}),n()}
/**
     * Advances current item to the previous query match or adds operation to the queue in case if next match is currently awaited.
     * @param {TextSearchCallback} callback - Function that that is called when previous match is found.
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#prev
     */function n(){if(!u&&t.length){var e=t.shift();e&&"function"==typeof e.action&&e.action.apply(b,e.args)}}function _(n,o){if(w()){var e=n?1:-1,t=I(p);if(t&&t.searchResult&&t.searchResult.length&&(n?-1<=v&&v<m-1:0<v&&v<=m)){v+=e;var i=t.searchResult[v];y=T(p,i),X(p,i);var a=t?t.rotation:0,r=C.getViewerTransform(p,a),l=te(i.bounds,t.regions[i.region]),s=Re(r.x(l.x,l.y),r.y(l.x,l.y));C.showPagePoint(p,s,_n.Center,function(){o(b,T(p,i))})}else u=u||z(c.text,0<=p?p+e:g,n).done(function(e,t){w()?0<=e&&t&&(p=e,m=t.searchResult.length,v=n?-1:m,_(n,o)):o(b,null)}).fail(function(){o(b,null)})}else o(b,null)}
/**
     * Gets the query text for this iterator.
     * @returns {string}
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getQuery
     */function w(){var e=S.searchQuery===c;return e||a(),e}
/**
     * Indicates whether this is executing background search.
     * If `true`, subsequent next/prev calls are stored into the search queue.
     *
     * Method could be used, for example, to determine whether search will be continued after particular callback call, and thus to hide or preserve search loading mask.
     *
     * @returns {boolean}
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isSearching
     */function z(t,n,o,i,a){var r;return i=i||pn.Deferred(),w()&&setTimeout(function(){for(;h<=n&&n<=f;n+=o?1:-1){var e=I(n);if(e&&!e.loading){if(e.searchResult=k(e,c.text),0<e.searchResult.length)return void i.resolve(n,e)}else{if(e&&e.loading&&e.promise)return void l(t,n,o,i,a,e);if(!e){if(x[n])continue;return r=!0,void s(t,n,o,i)}}}if(b.wrap&&!r&&!a)return n<h&&!o?n=f:f<n&&o&&(n=h),void z(t,n,o,i,!0);i.reject()},0),i.promise()}function l(e,t,n,o,i,a){a.promise.then(function(){z(e,t,n,o,i)})}function s(i,e,a,r){var t,n,o,l,s,c=function(e,t){for(var n=e,o=null,i=[];h<=n&&n<=f&&i.length<=20;n+=t?1:-1){var a=null,r=C._controllers.document.getPageDefinition(n),l=r.index;if(r.uri&&(a=r.uri),o!==a&&n!==e)break;o=a;var s={i:l};l!==n&&(s.di=n),i.push(s);var c=I(n);if(c&&!c.loading)break}return{textUrl:o||D.config.documenturl,pages:i}}(e,a);c.pages.length?(t=i,n=c,o=d,l=pn.Deferred(),s={type:"pagetextsearch",serverurl:D.config.serverurl,query:"?pagetextsearch=",method:"POST",data:{atala_query:t,atala_docurl:n.textUrl,atala_maxcount:o||d,atala_pages:JSON.stringify(n.pages)},cancel:!1},C.makeHandlerRequest(s,function(e){if(w()){var t=-1;if(e&&e.searchResults&&e.searchResults.length)for(var n=0;n<e.searchResults.length;n++){var o=e.searchResults[n],i=o.hasOwnProperty("di")?o.di:o.i,a=I(i);!a&&o.text&&(C._controllers.document.updatePageText(i,o.text),me({pageText:o.text,customData:e.customData},o.text,i)),o.count<=0&&t<0?a?a.searchResult=[]:x[i]=[]:t<0&&0<o.count&&(t=i)}l.resolve(0<=t?t:null)}else l.reject()},function(){l.reject()}),l.promise()).done(function(e){if(null===e)if(w()){var t=c.pages[c.pages.length-1],n=t.hasOwnProperty("di")?t.di:t.i;z(i,n,a,r)}else r.reject();else{var o=I(e);r.resolve(e,o)}}).fail(function(){r.reject()}):r.reject()}function k(e,t){var n=t.length,o=[];if(e.searchResult)o=e.searchResult;else for(var i=0;i<e.regions.length;i++)for(var a=0;a<e.regions[i].lines.length;a++){for(var r=e.regions[i].lines[a],l=0,s=[],c="",u=0;u<r.words.length;u++){var d=r.words[u],h=d.glyphs&&d.glyphs.length;Ve(d,1<=u?r.words[u-1]:null)&&(c+=" ",++l);for(var f=0;f<(h?d.glyphs.length:d.text.length);f++)s[l++]={bounds:h?d.glyphs[f].bounds:d.bounds,region:i,line:a,word:u,glyph:f},c+=(h?d.glyphs[f].text:d.text[f]).toLocaleLowerCase()}var g=0;do{if(0<=(g=c.indexOf(t,g))){for(var p=g;!s[p]&&p<g+n;)p++;for(var v=s[p],m=Math.min(g+n-1,s.length);!s[m]&&g<m;)--m;var b=s[m],x=Te({x:v.bounds.x,y:v.bounds.y,width:Math.abs(b.bounds.right-v.bounds.x),height:Math.abs(b.bounds.bottom-v.bounds.y)});o.push({bounds:x,region:v.region,line:v.line,word:v.word,glyph:v.glyph,endWord:b.word,endGlyph:b.glyph})}}while(0<=g++)}return o}function a(){M.off("pagetextloaded",e),D.unbind({pageshown:r}),x=[]}function e(e){var t=e.text,n=e.index;if(w()&&t&&h<=n&&n<=f&&(t.searchResult=k(t,c.text),x[n]&&Array.prototype.splice.call(x,n,1),t.searchResult.length)){var o=C.findPageFromIndex(n);o&&F(n,o)}}function r(e){if(w()&&e.page&&e.index>=h&&e.index<=f){var t=I(e.index);!t||t.loading||t.searchResult||setTimeout(function(){t.searchResult=k(t,c.text),F(e.index,e.page)},0)}}function P(e){return function(){u=null,e&&e.apply(this,arguments),n()}}function T(e,t){return{page:e,region:t?t.region:0,line:t?t.line:0,word:t?t.word:0}}
/**
       * Indicates whether search should be wrapped around when first or last document page is match is reached.
       * @name Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#wrap
       * @type {boolean}
       */
b.wrap=!0,M.on("pagetextloaded",e),D.bind({pageshown:r}),setTimeout(function(){for(var e=0;e<E.length;e++){var t=E[e]._index;if(!(t<h||f<t)){var n=I(t);n&&!n.loading&&(n.searchResult=k(n,c.text),n.searchResult.length&&(F(t,E[e]),t===g&&(m=n.searchResult.length,p=g)))}}i(o)},0),
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
     */,b.getCurrentLineText=function(){if(w()&&y&&0<=y.page){var e=I(y.page);if(e&&e.regions[y.region]&&e.regions[y.region].lines[y.line])return U(e.regions[y.region].lines[y.line])}return null},
/**
     * Disposes the current iterator. Calling this method is optional. Abandoned iterators will be disposed automatically.
     * @ignore
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#dispose
     */
b.dispose=a}function he(){for(var e=[],t=0;t<C._controllers.document.getPageCount();t++){var n=I(t);n&&n.searchResult&&(n.searchResult.length&&(e[t]=!0),n.searchResult=null)}for(var o=0;o<E.length;++o)e[o]&&F(o,E[o]);S.searchQuery=null}function fe(e,t){return{type:"textdata",serverurl:e,query:"?atalatextdata=",method:"GET",data:{atala_docurl:t},cancel:!1,info:{ocr:{},error:void 0}}}function ge(e,t){function n(e){pe(e),"function"==typeof t&&t.call()}x(),C.makeHandlerRequest(e,n,n)}function pe(e){if(e){if(e.error&&(p("TextLoadError",e.error),x()),e.text.pages)for(var t=0;t<e.text.pages.length;++t)ye(e.text.pages[t],t);C._controllers.document.initDocumentText(e.text),s({type:"textloaded"})}}function ve(a){var r=pn.Deferred(),l=I(a),s=C._controllers.document.getPageDefinition(a);if(!l&&s){l={loading:!0,regions:[],promise:r},C._controllers.document.updatePageText(a,l);var c=s.uri||D.config.documenturl,u=D.config.serverurl;setTimeout(function(){var t,n,o,e={type:"pagetextdata",serverurl:u,query:"?atalapagetext=",method:"GET",data:{atala_docurl:c,atala_index:s.index},cancel:!1,info:{page:l,error:void 0}},i=(t=l,n=a,o=r,function(e){me(e,t,n,o)});C.makeHandlerRequest(e,i,i)},0)}else r.resolve(a,l);return r.promise()}function me(e,t,n,o){if(e&&e.pageText)if(t.promise===o&&(t.loading=!1,t.promise=void 0),e.error)p("TextLoadError",e.error),t.regions=[],o&&o.reject&&o.reject(n);else{ye(e.pageText,n),t.regions=e.pageText.regions?e.pageText.regions:[],pn.extend(t,e.pageText);var i={type:"pagetextloaded",index:n,text:t,customData:e.customData};!function(){M.trigger.apply(M,arguments)}(i),s(i),o&&o.resolve&&o.resolve(n,t)}}function be(e){for(var t=0;t<E.length;t++)if(E[t]._index===e)return E[t];return null}function xe(e,t){if(e&&e._text){var n=e._text[0];if(n.getContext){var o=n.getContext("2d"),i=t?t.rotation:0,a=C.getViewerTransform(e._index,i);return o.setTransform(a.a,a.b,a.c,a.d,a.e,a.f),o}}return null}function ye(e,t){if(e){ke(e),e.regions=e.regions||[],e.rotatedRegions=[],e.rotation=e.rotation||0;for(var n=e.regions.length-1;0<=n;--n)e.regions[n].page=t,_e(e.regions[n],e.bounds)?(e.regions[n].index=n,e.regions[n].rotation&&e.rotatedRegions.push(e.regions[n])):Array.prototype.splice.call(e.regions,n,1);e.regions.sort(function(e,t){return re(e,t)?-1:1})}}function _e(e,t){if(!ke(e))return!1;e.rotation=e.rotation||0,e.lines=e.lines||[];for(var n=e.lines.length,o=e.lines.length-1;0<=o;--o)we(e.lines[o],t,e.rotation)||Array.prototype.splice.call(e.lines,o,1);return 0<n&&0===e.lines.length&&p("TextLoadError","Invalid region data received."),!(0<n)||0<e.lines.length}function we(e,t,n){if(!ke(e,t,n))return!1;e.words=e.words||[];for(var o=e.words.length,i=e.words.length-1;0<=i;--i)ze(e.words[i],t,n)||Array.prototype.splice.call(e.words,i,1);return!(0<o)||0<e.words.length}function ze(e,t,n){if(!ke(e,t,n))return!1;e.glyphs=e.glyphs||[],e.text=e.text||"",e.os&&(e.omitSpace=e.os,delete e.os);for(var o=e.glyphs.length-1;0<=o;--o)ke(i=e.glyphs[o],t,n)&&i.text||Array.prototype.splice.call(e.glyphs,o,1);var i;return!0}function ke(e,t,n){var o=!1;if(e)if(e.b&&"string"==typeof e.b){var i=e.b.split(";");e.bounds={x:parseFloat(i[0]),y:parseFloat(i[1]),width:parseFloat(i[2]),height:parseFloat(i[3])},delete e.b,o=!0}else e.bounds&&e.bounds.hasOwnProperty("x")&&e.bounds.hasOwnProperty("y")&&e.bounds.hasOwnProperty("width")&&e.bounds.hasOwnProperty("height")&&(Te(e.bounds),o=!0);else e={};return e.bounds||(e.bounds={x:0,y:0,width:0,height:0}),Te(e.bounds),e.bounds&&(e.normalizedBounds=Pe(e,t,n)),o}function Pe(e,t,n){if(!e.normalizedBounds){if(n%360==0)return e.normalizedBounds=e.bounds,e.normalizedBounds;e.normalizedBounds=Te(Ne(e.bounds,t,360-n))}return e.normalizedBounds}function Te(e){return e.right=e.x+e.width,e.bottom=e.y+e.height,e}function De(e,t){return e<t+r}function Ce(e,t){return t-r<e}function Me(e,t){return e&&t&&e.x===t.x&&e.y===t.y}function Ee(e,t,n){return Ce(e,t)&&De(e,n)}function Se(e,t){return!!t&&Ee(e.x,t.x,t.right)&&Ee(e.y,t.y,t.bottom)}function Ie(e,t){return!(!e&&!t)&&(Ce(e.right,t.x)&&Ce(t.right,e.x)&&Ce(e.bottom,t.y)&&Ce(t.bottom,e.y)||Fe(e,t))}function Fe(e,t){if(!e&&!t)return!1;var n=e.width>t.width?e:t;return t=n===e?t:e,De(n.x,t.x)&&Ce(n.right,t.right)&&De(n.y,t.y)&&Ce(n.bottom,t.bottom)}function Ae(e,t){if(!Ie(e,t))return null;var n={x:Math.max(e.x,t.x),y:Math.max(e.y,t.y),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)};return n.x<n.right&&n.y<n.bottom?(n.width=Math.abs(n.right-n.x),n.height=Math.abs(n.bottom-n.y),n):null}function Oe(e,t,n){var o=C.getViewerTransform(e,t.rotation?t.rotation:0).invert();return Re(o.x(n.x,n.y),o.y(n.x,n.y))}function Ve(e,t){return!(!e||!t||t.omitSpace)}function Le(e){return Re(e.bounds.x,e.bounds.y)}function He(e){return Re(e.bounds.right,e.bounds.bottom)}function Re(e,t){return{x:e,y:t}}i.createHandlerRequest=fe,i.makeHandlerRequest=ge,i.loadText=pe,i.loadPageText=function(e,t,n){ge(fe(e,t),n)},"Atalasoft.Controls.WebDocumentViewer"===D.typeOf&&pn.extend(D,a),D.bind({pagerecycled:d,pageshown:h,zoomchanged:c,documentchanged:v}),M.on({textselectstart:z,textselectmove:j,textselectend:B,textselectcopy:N})},_e=function(){var e=this,t=pn({}),r={tapped:!1,touching:!1,pinching:!1,zooming:!1,textselection:!1,origin:{x:0,y:0},point:{x:0,y:0},delta:{x:0,y:0},drawing:!1,moves:0,prpt:0},l=null,i=bn.None,n=bn.None,o=null;function s(){return t.trigger.apply(t,arguments),e}function a(){r&&(r.drawing=!0)}function c(){r&&(r.drawing=!1)}function u(){r.zooming=!1}function d(e){if(!r.prmt)return s({type:"panstart",x:e.clientX,y:e.clientY}),document.addEventListener("mousemove",h),document.addEventListener("mouseup",f),document.addEventListener("ondrag",K),!1}function h(e){if(e=null==e?event:e,!r.prpt){if(0!==e.which)return s({type:"panmove",x:e.clientX,y:e.clientY}),!1;f()}}function f(){if(!r.prpt)return document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",f),document.removeEventListener("ondrag",K),s({type:"panend"}),!1}function g(e){if(r.prmt)return!1;e.stopPropagation();var t={handled:!1,complete:!1};return s({type:"textselectstart",toolEvent:e,eventData:t}),t.complete||(r.textselection=!0,document.addEventListener("mouseup",v),document.addEventListener("mousemove",m),document.addEventListener("ondrag",K)),!1}function p(e){return!!r.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectmove",toolEvent:e,eventData:{handled:!1,selecting:r.textselection}}),!1):(v(e),!0))}function v(e){return r.prmt||!r.textselection||(r.textselection=!1,document.removeEventListener("mouseup",v),document.removeEventListener("mousemove",m),document.removeEventListener("ondrag",K),s({type:"textselectend",toolEvent:e,eventData:{handled:!1}})),!1}function m(e){if(r.textselection)return!!r.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectscroll",toolEvent:e}),!1):(v(e),!0))}function b(e){67===e.keyCode&&e.ctrlKey&&s({type:"textselectcopy",toolEvent:e})}function x(e){return!!r.prmt||(s({type:i===bn.Selection?"selectstart":"zoomareastart",x:e.clientX,y:e.clientY,toolEvent:e}),(o=pn(e.target))._binds={mousemove:y,mouseup:_,ondrag:K},o.on(o._binds),!1)}function y(e){return e=null==e?event:e,!!r.prpt||(0!==e.which?(s({type:i===bn.Selection?"selectmove":"zoomareamove",x:e.clientX,y:e.clientY,toolEvent:e}),!1):void _())}function _(e){if(!r.prpt)return o.off(o._binds),o=null,s({type:i===bn.Selection?"selectend":"zoomareaend",toolEvent:e}),!1}function w(e){return pn(".atala_viewport").trigger("viewportclick"),e=null==e?event:e,A(e)}function z(){}function k(e){return e=null==e?event:e,O(e)}function P(e){return pn(".atala_viewport").trigger("viewportclick"),2===(e=null==e?event:e).button?H(e):L(e),V(e)}function T(e){return e=null==e?event:e,F(e)}function D(e){return e=null==e?event:e,R(e)}function C(){A=i===bn.PassThrough?$:K,O=n===bn.PassThrough?$:K,R=F=H=L=V=$}function M(){}function E(){}function S(){}function I(){}C(),e.events={viewport:{click:w,dblclick:z,mousedown:P,mousemove:T,mouseout:M,mouseover:E,mouseup:S,contextmenu:k,mousewheel:I,keydown:D}},mn.Features.Touch&&pn.extend(!0,e.events,{viewport:{touchstart:q,touchmove:W,touchend:U},wdv:{annotationdrawstart:a,annotationdrawend:c,annotationdragstart:a,annotationdragend:c}}),e.dispose=function(){r&&(r=null),l&&(l=null),e=null},e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=s,e.setTool=function(e,t){switch(i=e,n=t,C(),i){case bn.None:A=K;break;case bn.Pan:L=d;break;case bn.ZoomIn:A=j;break;case bn.ZoomOut:A=B;break;case bn.Selection:case bn.ZoomArea:L=x;break;case bn.PassThrough:break;case bn.Text:L=g,F=p,R=b}switch(n){case bn.None:break;case bn.Pan:H=d;break;case bn.ZoomIn:O=j;break;case bn.ZoomOut:O=B;break;case bn.Selection:case bn.ZoomArea:H=x;break;case bn.PassThrough:}},e.getTool=function(){return{primary:i,secondary:n}},e.pauseTool=function(){r.prpt++},e.resumeTool=function(){0<r.prpt&&r.prpt--};var F=function(){},A=function(){},O=function(){},V=function(){},L=function(){},H=function(){},R=function(){};function j(e){if(!r.prpt)return N(e,!1),!1}function B(e){if(!r.prpt)return N(e,!0),!1}function N(e,t){if(!r.prpt)return s({type:"clickzoom",x:e.clientX,y:e.clientY,zoomout:t}),!1}function q(e){var t;r.prpt||r.drawing||r.pinching||pn(e.target).is(".ui-menu,.ui-menu-item,.ui-corner-all")||(e.preventDefault(),2===(r.e=e).originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(o)if(null==t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches)?(G(),r.touching=!1,function(e){if(!r.prpt){e.stopPropagation(),r.pinching=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1];l={start:Y(t.clientX,t.clientY,n.clientX,n.clientY)},s({type:"zoomstart",touches:e.originalEvent.touches})}}(e)):i===bn.Text?g(e):1===e.originalEvent.touches.length&&(r.touching=!0,r.point.x=e.originalEvent.touches[0].pageX,r.point.y=e.originalEvent.touches[0].pageY,r.hold=setTimeout(X,1500),t={x:r.point.x,y:r.point.y},i===bn.Pan&&(t.type="panstart",s(t))))}function W(e){var t;if(!r.prpt&&!r.drawing)if(e.preventDefault(),r.e=e,r.pinching)!function(e){if(!r.prpt&&(e.stopPropagation(),!r.zooming)){r.zooming=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1],o=Y(t.clientX,t.clientY,n.clientX,n.clientY,l.start),i=o.x/l.start.x,a=o.y/l.start.y;setTimeout(u,40),s({type:"zoommove",touches:e.originalEvent.touches,scale:i,scalex:i,scaley:a,dx:o.dx,dy:o.dy})}}(e);else if(r.touching){var n=e.originalEvent.touches[0];r.moves++,r.touching=!0,t={x:n.pageX,y:n.pageY},i===bn.Pan&&(t.type="panmove",s(t))}else r.textselection&&p(e)}function U(e){var t,n,o;r.prpt||r.drawing||(e.preventDefault(),r.pinching?(o=e,r.prpt||(o.stopPropagation(),r.pinching=!1,s({type:"zoomend",touches:o.originalEvent.touches}),1===o.originalEvent.touches.length&&q(o))):r.textselection?v(e):(r.touching=!1,G(),0<r.moves?(r.moves=0,n={},i===bn.Pan&&(n.type="panend",s(n))):r.tapped?((t=e).type="fit",s(t)):(r.tapped=!0,setTimeout(Z,300))))}function Z(){r.tapped=!1}function X(){if(0<r.moves&&null!=r.e){var e=J(r.e);Math.abs(r.point.x-e.x)<5&&Math.abs(r.point.y-e.y)<5&&(r.moves=0)}0===r.moves&&r.touching&&s({x:r.point.x,y:r.point.y,type:"contextmenu"})}function G(){null!=r.hold&&(clearTimeout(r.hold),r.hold=null)}return e},Rn=function(e,t,n,o,i){var a=this,r=e,l=t,s=(t?t._internalEvents:null)||pn({}),u=50,c=n,d=o,h=c.parents("."+r.domclasses.atala_main_container).first(),f=bn.Pan,g=bn.None,p=null,v=1,m="",b=null,x="",y=[],_=1e3,w=null,z=-1,k=null,P={allowflick:!0,text:{scrolltriggerarea:wn.Normal,innerscrolldelta:10,outerscrolldelta:20}};
/**
   * Internal events for conditional input handling.
   */
a.events=T;var T={textselectstart:"textselectstart",textselectmove:"textselectmove",textselectend:"textselectend",textselectcopy:"textselectcopy"};function D(){C({type:"viewportclick"})}function C(){return s.trigger.apply(s,arguments),a}function M(e,t){switch(p.setTool(e,t),n=e,o=t,f!==bn.Text&&g!==bn.Text||n===bn.Text||o===bn.Text||l.resetDrawLayer(),n!==bn.Selection&&n!==bn.ZoomArea&&(f=n),o!==bn.Selection&&o!==bn.ZoomArea&&(g=o),e){case bn.None:E(Be.Arrow);break;case bn.Pan:E(Be.Move);break;case bn.ZoomIn:E(Be.ZoomIn);break;case bn.ZoomOut:E(Be.ZoomOut);break;case bn.Selection:if(!r.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,E(Be.Crosshair);break;case bn.ZoomArea:if(!r.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,E(Be.Crosshair);break;case bn.Text:if(!r.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),E(Be.Text);break;default:E(Be.Arrow)}var n,o}function E(e){b="%2"===e?b=x:e,c.css({cursor:b})}function S(e){r.fit(e.fit)}function I(e){e.zoomout?r.zoomOut():r.zoomIn()}function F(e){d.data("ox",d.scrollLeft()+e.x).data("oy",d.scrollTop()+e.y),d.stop()}function A(e){d.scrollLeft(d.data("ox")-e.x),d.scrollTop(d.data("oy")-e.y),P.allowflick&&(y.push({x:e.x,y:e.y,time:(new Date).getTime()}),10<y.length&&y.shift())}function O(){if(P.allowflick){if(1<y.length){var e=(new Date).getTime(),t=y.pop();if(e-t.time<100){var n=y.shift(),o=-n.time+t.time;d.animate({scrollLeft:d.scrollLeft()+Math.round((n.x-t.x)/o*250),scrollTop:d.scrollTop()+Math.round((n.y-t.y)/o*250)},_,"easeOutQuad")}}y.length=0}}function V(e){(w=l.getActivePage())&&w._rubberband.startSelect(e)}function L(e){(w=l.getActivePage())&&w._rubberband.moveSelect(e)}function H(e){(w=l.getActivePage())&&(w._rubberband.endSelect(e),"zoomareaend"===e.type&&(w._rubberband.hide(),w._rubberband.zoomToSelection())),0==--z&&(z=-1,l.resetDrawLayer(),M(f,g))}function R(){l.zoomStart(),v=r.getZoom()}function j(e){var t=v*e.scale;l.zoom(t)}function B(){l.zoomEnd()}function N(e){var t=Y(e);if(t){var n=e.toolEvent&&e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent;if(t.cursor=b,t.complete=!1,t.rectangular=!!n&&n.altKey,t.interval=!!n&&n.shiftKey,!t.rectangular&&!t.interval){var o=n&&n.detail?n.detail%3:1;1!==o&&(t.word=2===o,t.line=0===o)}C({type:T.textselectstart,eventData:t}),e.eventData.handled=t.handled,t.complete&&t.handled&&(W(e),e.eventData.complete=!0)}}function q(e){X();var t=Y(e);if(t){t.cursor=b,t.selecting=e.eventData.selecting,C({type:T.textselectmove,eventData:t}),e.eventData.handled=t.handled;var n=t.handled&&t.cursor?t.cursor:Be.Arrow;n!==b&&E(n),e.eventData.handled&&e.eventData.selecting&&e.toolEvent&&e.toolEvent.target&&G(e)}}function W(e){X();var t=Y(e);t&&(C({type:T.textselectend,eventData:t}),e.eventData.handled=t.handled)}function U(e){X(),G(e)}function Z(){P.text.hookcopy&&C({type:T.textselectcopy})}function X(){k&&(clearTimeout(k),k=null)}function G(e){if(X(),e&&e.toolEvent){var t=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,n=h.offset(),o=null;if(void 0!==t.pageX&&void 0!==t.pageY?o=t:t.touches&&1===t.touches.length&&void 0!==t.touches[0].pageX&&void 0!==t.touches[0].pageY&&(o=t.touches[0]),o){var i=o.pageX-n.left,a=o.pageY-n.top,r=h.width(),l=h.height(),s=0,c=0;a<l*P.text.scrolltriggerarea&&0<d.scrollTop()?s=0<a?-P.text.innerscrolldelta:-P.text.outerscrolldelta:a>l*(1-P.text.scrolltriggerarea)?s=a<l?P.text.innerscrolldelta:P.text.outerscrolldelta:i<r*P.text.scrolltriggerarea&&0<d.scrollLeft()?c=0<i?-P.text.innerscrolldelta:-P.text.outerscrolldelta:i>r*(1-P.text.scrolltriggerarea)&&(c=i<r?P.text.innerscrolldelta:P.text.outerscrolldelta),(s||c)&&P.text.scrolltriggerarea!==wn.None&&(d.scrollTop(d.scrollTop()+s),d.scrollLeft(d.scrollLeft()+c),k=setTimeout(G,u,e))}}}function Y(e){var t={cursor:null,handled:!1};if(e&&e.toolEvent){var n=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,o=function(e){var t=pn(e).parents("."+r.domclasses.atala_page_div).first();if(t){var n=t.attr(r.domattributes.atala_page_index);return parseInt(n,10)}return null}(n.touches&&1===n.touches.length?document.elementFromPoint(n.touches[0].clientX,n.touches[0].clientY):n.target);if(isFinite(o)&&0<=o){var i=function(e,t){var n=J(e.toolEvent?e.toolEvent:e);if(t&&t._paper){var o=Q(t._paper.canvas,t);n.x-=o.left,n.y-=o.top}return n}(e),a=function(e,t){var n=0;if(l._controllers.text){var o=l._controllers.document.getPageText(t);o&&isFinite(o.rotation)&&(n=o.rotation)}var i=l.getViewerTransform(t,n).invert();return{x:i.x(e.x,e.y),y:i.y(e.x,e.y)}}(i,o);pn.extend(t,{page:o,point:a,viewerPoint:i})}}return t}i&&(pn.extend(P,i),P.text.scrolltriggerarea=Math.max(0,Math.min(P.text.scrolltriggerarea,.3))),p=new _e,c.on(p.events.viewport),p.events.wdv&&r.bind(p.events.wdv),p.bind({clickzoom:I,fit:S,panstart:F,panmove:A,panend:O,zoomstart:R,zoommove:j,zoomend:B,selectstart:V,selectmove:L,selectend:H,zoomareastart:V,zoomareamove:L,zoomareaend:H,textselectstart:N,textselectmove:q,textselectend:W,textselectscroll:U,textselectcopy:Z,viewportclick:D}),a.dispose=function(){p&&p.events&&(p.events.wdv&&r&&r.unbind&&r.unbind(p.events.wdv),p.events.viewport&&c&&c.off&&c.off(p.events.viewport)),y&&0<y.length&&(y.length=0),p&&p.dispose&&p.dispose(),a=r=c=d=null},a.bind=function(){return s.on.apply(s,arguments),a},a.unbind=function(){return s.off.apply(s,arguments),a},a.trigger=C,a.setTool=M,a.__getDebugInfo=function(){var e={};return pn.extend(!0,e,{cursor:b,custom:x,flick:y,resourcepath:m,flickdelay:_,scroller:d,tool:p,toolcursors:Be,tooltypes:bn,viewport:c,zoom:v}),e},a.getTool=function(){return p.getTool()},a.pauseTool=function(){return p.pauseTool()},a.resumeTool=function(){return p.resumeTool()},a.setCursor=E,a.setCustomCursor=function(e){x=e}},jn=function(e,t,n,o){var v,i,a,r,l,u=3,s=this,c=pn({}),d=e,m={animated:!1,aspectratio:0,backcolor:"fff",forecolor:"000",movable:!0,multicolor:!0,resizable:!0,showgrips:!1,showmask:!1,showtooltip:!1,visible:!1,x:0,y:0,width:0,height:0},b={
/** Main RubberBand dom object */
rect:null,
/** Dom object underneath Main RubberBand */
rectback:null,
/** Mask objects */
mask:{top:null,bottom:null,left:null,right:null}},x={animating:!1,boundevents:null,changing:!1,colorswap:0,origin:{x:0,y:0},pagesize:{width:0,height:0},pageoffset:{x:0,y:0},vert:!1,horiz:!1,zoom:1},h=o,f=n;function g(){Z(),V()}function p(){Z(),V()}function y(){for(var c=new Array("move","nw","n","ne","w","e","sw","s","se"),i=[],t=[],a=0,r=0,e=0;e<9;e++)i[e]=new s(e),f.append(i[e].grip);function n(){for(var e=0;e<9;e++)!0===t[e]?i[e].show():i[e].hide()}function l(){for(var e=0;e<9;e++)t[e]=!0;t[0]=!0,a<8&&r<8&&(t[1]=!1),(a<12||r<12)&&(t[3]=!1,t[6]=!1),(a<16||r<8)&&(t[2]=!1,t[7]=!1),(r<16||a<8)&&(t[4]=!1,t[5]=!1),n()}function o(){!0===D()?(i[0].grip.onmousedown=R,i[0].grip.style.cursor="move"):(i[0].grip.onmousedown=K,i[0].grip.style.cursor="default");for(var e=1;e<9;e++)!0===M()?(i[e].bind({mousedown:i[e].onResize}),i[e].grip.style.cursor=c[e]+"-resize"):(i[e].off({mousedown:i[e].onResize}),i[e].grip.style.cursor="default")}function s(e){var t,n,o,i=this,a=c[e],r=!1;function l(){"move"!==a&&(!0===m.showgrips?(!0===C()?n.backgroundColor="#"+P():n.backgroundColor="#"+T(),n.border="1px solid #"+T()):(n.backgroundColor="",n.border=""))}function s(){!0===m.showgrips?(n.width="6px",n.height="6px"):(n.width="8px",n.height="8px")}t=document.createElement("div"),n=t.style,(o=pn(t)).addClass(d.domclasses.atala_tool_selection_grip),l(),s(),i.grip=t,i.dispose=function(){a=n=t=i=null},i.setPos=function(e,t){n.left=e+"px",n.top=t+"px"},i.setSize=function(e,t){!0===E()&&"move"!==a&&(e-=2,t-=2),e<=0&&(e=1),t<=0&&(t=1),n.width=e+"px",n.height=t+"px"},i.hide=function(){r&&(n.visibility="hidden",r=!1)},i.show=function(){r||(n.visibility="visible",r=!0)},i.resetColors=l,i.resetGripSize=s,i.onResize=function(e){return function(e,t){U(e=e||event),x.vert=0,x.horiz=0,x.changing=!0;var n={x:0,y:0};switch(t){case"nw":n.x=m.x+m.width,n.y=m.y+m.height;break;case"n":n.x=m.x,n.y=m.y+m.height,x.vert=1;break;case"ne":n.x=m.x,n.y=m.y+m.height;break;case"w":n.x=m.x+m.width,n.y=m.y+m.height,x.horiz=1;break;case"e":n.x=m.x,n.y=m.y+m.height,x.horiz=1;break;case"sw":n.x=m.x+m.width,n.y=m.y;break;case"s":n.x=m.x,n.y=m.y,x.vert=1;break;case"se":n.x=m.x,n.y=m.y}x.origin.x=Math.round(n.x*x.zoom)+x.pageoffset.x,x.origin.y=Math.round(n.y*x.zoom)+x.pageoffset.y,h.raiseDrawLayer();var o={mousemove:H,mouseup:B};return null!==x.boundevents?pn.extend(x.boundevents,o):x.boundevents=o,f.bind(o),!1}(e,a)},i.bind=function(){return o.on.apply(o,arguments),o},i.unbind=function(){return o.off.apply(o,arguments),o},n.display="block",n.position="absolute",n.visibility="hidden",n.zIndex=u,t.onclick=K,t.onselectstart=K,t.onselect=K,t.oncontextmenu=K}this.dispose=function(){for(var e=0;e<9;e++)i[e].dispose(),i[e]=null;t=i=c=null},this.setRectangle=function(e,t,n,o){a=n,r=o,i[0].setPos(e,t),i[1].setPos(e-4,t-4),i[3].setPos(e+n-4,t-4),i[6].setPos(e-4,t+o-4),i[8].setPos(e+n-4,t+o-4),i[0].setSize(n,o),m.showgrips?(i[2].setPos(e+Math.round(n/2)-4,t-4),i[4].setPos(e-4,t+Math.round(o/2)-4),i[5].setPos(e+n-4,t+Math.round(o/2)-4),i[7].setPos(e+Math.round(n/2)-4,t+o-4)):(i[2].setPos(e+4,t-4),i[4].setPos(e-4,t+4),i[5].setPos(e+n-4,t+4),i[7].setPos(e+4,t+o-4),i[2].setSize(n-8,8),i[4].setSize(8,o-8),i[5].setSize(8,o-8),i[7].setSize(n-8,8)),l()},this.resetColors=function(){for(var e=0;e<9;e++)i[e].resetColors()},this.resetGrips=function(){for(var e=0;e<9;e++)i[e].resetGripSize(),i[e].resetColors()},this.hide=function(){for(var e=0;e<9;e++)i[e].hide()},this.show=n,this.showGrips=l,(this.resetEvents=o)()}function _(e,t,n,o){var i=pn("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function w(){var e=_("div");return e.addClass(d.domclasses.atala_tool_selection_band),e.css({position:"absolute",zIndex:u}),e}function z(){var e=_("div");return e.addClass(d.domclasses.atala_tool_selection_mask),e.hide(),e.css({left:"0px",top:"0px",width:"1px",height:"1px",position:"absolute",background:"#000",opacity:"0.6",zIndex:"0"}),e}function k(){return m.animated}function P(){return m.backcolor}function T(){return m.forecolor}function D(){return m.movable}function C(){return m.multicolor}function M(){return m.resizable}function E(){return m.showgrips}function S(){return c.trigger.apply(c,arguments),s}function I(){b.mask.left.hide(),b.mask.right.hide(),b.mask.top.hide(),b.mask.bottom.hide()}function F(){i.css({left:(m.x+m.width)*x.zoom+8+"px",top:(m.y+m.height)*x.zoom+4+"px"}),i.text(Math.round(m.width/x.zoom)+"x"+Math.round(m.height/x.zoom)),i.is(":hidden")&&i.show()}function A(){m.visible=!0,b.rectback.show(),b.rect.show(),!0===k()&&!0===C()&&function e(){!0===m.animated&&0===x.colorswap?(b.rect.css("border","1px dashed #"+P()),b.rectback.css("border","1px solid #"+T()),x.colorswap=1):(b.rect.css("border","1px dashed #"+T()),b.rectback.css("border","1px solid #"+P()),x.colorswap=0),!0!==m.animated||b.rect.is(":hidden")||x.animating||(x.animating=setTimeout(function(){x.animating=!1,e()},250))}()}function O(){m.visible=!1,I(),v.hide(),b.rectback.hide(),b.rect.hide()}function V(){var e=m.x,t=m.y,n=x.pagesize.width,o=x.pagesize.height;(n<=e||e+m.width>n)&&(e=n-m.width)<0&&(e=0),(o<=t||t+m.height>o)&&(t=o-m.height)<0&&(t=0),e!==m.x&&(m.x=e),t!==m.y&&(m.y=t);var i,a,r,l,s,c,u,d,h=Math.round(m.x*x.zoom),f=Math.round(m.y*x.zoom),g=Math.round(m.width*x.zoom),p=Math.round(m.height*x.zoom);i=h,a=f,b.rectback.css({left:i+"px",top:a+"px"}),b.rect.css({left:i+"px",top:a+"px"}),d=p,0===(u=g)&&(u=1),b.rectback.css({width:u+"px",height:d+"px"}),b.rect.css({width:u+"px",height:d+"px"}),v.setRectangle(h,f,g,p),m.visible?(A(),r=h,l=f,s=g,c=p,m.showmask?(0<l?(b.mask.top.css({left:x.pageoffset.x,top:x.pageoffset.y,width:W(),height:l}),b.mask.top.show()):b.mask.top.hide(),l+c<q()?(b.mask.bottom.css({left:x.pageoffset.x,top:x.pageoffset.y+l+c,width:W(),height:q()-(l+c)}),b.mask.bottom.show()):b.mask.bottom.hide(),0<r?(b.mask.left.css({left:x.pageoffset.x,top:x.pageoffset.y+l,width:r,height:c}),b.mask.left.show()):b.mask.left.hide(),r+s<W()?(b.mask.right.css({left:x.pageoffset.x+r+s,top:x.pageoffset.y+l,width:W()-(r+s),height:c}),b.mask.right.show()):b.mask.right.hide()):I()):O()}function L(e,t){e.stopPropagation(),e.preventDefault();var n=t||N(e),o=Math.round(x.origin.x/x.zoom),i=Math.round(x.origin.y/x.zoom),a=Math.abs((n.x-x.origin.x)/x.zoom),r=Math.abs((n.y-x.origin.y)/x.zoom);return 0<m.aspectratio&&(Math.abs((n.y-x.origin.y)/(n.x-x.origin.x))>1/m.aspectratio&&0===x.horiz||1===x.vert?a=Math.round(r*m.aspectratio):r=Math.round(a/m.aspectratio)),n.x<x.origin.x?(o-=a)-x.pageoffset.x<0&&(a=x.origin.x-x.pageoffset.x,0<m.aspectratio&&(r=Math.round(a/m.aspectratio)),o=x.origin.x-a):o+a>x.pagesize.width+x.pageoffset.x&&(a=x.pagesize.width-o+x.pageoffset.x,0<m.aspectratio&&(r=Math.round(a/m.aspectratio))),n.y<x.origin.y?(i-=r)-x.pageoffset.y<0&&(r=x.origin.y-x.pageoffset.y,0<m.aspectratio&&(a=Math.round(r*m.aspectratio)),i=x.origin.y-r,n.x<x.origin.x&&(o=x.origin.x-a)):i+r>x.pagesize.height+x.pageoffset.y&&(r=x.pagesize.height-i+x.pageoffset.y,0<m.aspectratio&&(a=Math.round(r*m.aspectratio)),n.x<x.origin.x&&(o=x.origin.x-a)),(0===x.vert||0<m.aspectratio)&&(m.x=o-x.pageoffset.x,m.width=a),(0===x.horiz||0<m.aspectratio)&&(m.y=i-x.pageoffset.y,m.height=r),V(),!0===m.showtooltip&&F(),!1}function H(e){return L(e,J(e,null,!0))}function R(e){U(e=e||event);var t=X(e,null,f);x.origin.x=t.x-Math.round(m.x*x.zoom),x.origin.y=t.y-Math.round(m.y*x.zoom),x.changing=!0;var n={mousemove:j,mouseup:B,ondrag:K};return null!==x.boundevents?pn.extend(x.boundevents,n):x.boundevents=n,f.bind(n),!1}function j(e){var t;U(e=e||event),t="mousemove"===e.type?X(e.originalEvent,null,f):X(e);var n={x:0,y:0};return n.x=Math.round((t.x-x.origin.x)/x.zoom),n.y=Math.round((t.y-x.origin.y)/x.zoom),n.x>x.pagesize.width-m.width&&(n.x=x.pagesize.width-m.width),n.x<0&&(n.x=0),n.y>x.pagesize.height-m.height&&(n.y=x.pagesize.height-m.height),n.y<0&&(n.y=0),m.x=n.x,m.y=n.y,V(),!1}function B(e){return U(e=e||event),!(x.changing=!1)===m.showtooltip&&i.hide(),x.changing&&(x.changing=!1,S("changed")),null!==x.boundevents&&(f.unbind(x.boundevents),x.boundevents=null,h.resetDrawLayer()),!1}function N(e){var t=J(e.toolEvent?e.toolEvent:e);if(f._paper){var n=Q(f._paper.canvas,f);t.x-=n.left,t.y-=n.top}return t}function q(){return Math.round(x.pagesize.height*x.zoom)}function W(){return Math.round(x.pagesize.width*x.zoom)}function U(e){void 0!==e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Z(){var e=f._img.getSize();x.zoom=f._img.getFitZoom(),x.pagesize.width=e.width,x.pagesize.height=e.height}return s.dispose=function(){null!=v&&(v.dispose(),v=null),s=null,b.rect=null,b.rectback=null,i=null,b.mask.top=null,b.mask.bottom=null,b.mask.left=null,b.mask.right=null},s.getAnimated=k,s.getAspectRatio=function(){return m.aspectratio},s.getBackColor=P,s.getForeColor=T,s.getHeight=function(){return m.height},s.getMovable=D,s.getMultiColor=C,s.getPosition=function(){return{x:m.x,y:m.y}},s.getRectangle=function(){return{x:m.x,y:m.y,width:m.width,height:m.height}},s.getResizable=M,s.getShowGrips=E,s.getShowMask=function(){return m.showmask},s.getShowTooltip=function(){return m.showtooltip},s.getSize=function(){return{width:m.width,height:m.height}},s.getVisible=function(){return m.visible},s.getWidth=function(){return m.width},s.bind=function(){return c.on.apply(c,arguments),s},s.hide=O,s.reset=function(){O(),m.x=0,m.y=0,m.width=0,m.height=0},s.show=A,s.synchronize=function(){V()},s.trigger=S,s.unbind=function(){return c.off.apply(c,arguments),s},s.zoomToSelection=function(){var e=h.getMaxZoom();if(d.getZoom()<e){var t,n=h.getViewportSize(),o=f._img.getFitMultiplier(),i=1,a=0,r=0;t=n.width/m.width==n.height/m.height?Math.min(n.width/(m.width*o),n.height/(m.height*o),e):n.width/m.width<n.height/m.height?Math.min(n.width/(m.width*o),e):Math.min(n.height/(m.height*o),e),i=o*t,a=Math.round(m.x*i),r=Math.round(m.y*i),r-=Math.max(0,Math.round((n.height-m.height*i)/2)),a-=Math.max(0,Math.round((n.width-m.width*i)/2));var l=h.getPageOffsets(f._index,null,null,t);d.zoom(t,function(){d.scrollTo(l.width+a,l.height+r)})}},s.startSelect=function(e){e.stopPropagation(),e.preventDefault(),Z();var t=N(e);return A(),x.origin.x=t.x,x.origin.y=t.y,m.x=Math.round(t.x/x.zoom),m.y=Math.round(t.y/x.zoom),m.width=1,m.height=1,x.changing=!0,x.vert=0,x.horiz=0,V(),!0===m.showtooltip&&F(),!1},s.moveSelect=L,s.endSelect=B,t&&pn.extend(!0,m,t),b.rect=w(),b.rectback=w(),b.mask.top=z(),b.mask.bottom=z(),b.mask.left=z(),b.mask.right=z(),(i=_("div")).addClass(d.domclasses.atala_tool_selection_tooltip),i.hide(),i.css({fontFamily:"Arial, helvetica, san-serif",fontSize:"8pt",padding:"1px",backgroundColor:"#FFFFE1",border:"1px solid #000000",position:"absolute",zIndex:999}),f.append(b.rectback),f.append(b.rect),f.append(i),f.append(b.mask.top),f.append(b.mask.bottom),f.append(b.mask.left),f.append(b.mask.right),v=new y,a=m.multicolor?"dashed":"solid",r="1px solid #"+m.backcolor,l="1px "+a+" #"+m.forecolor,b.rectback.css("border",r),b.rect.css("border",l),v.resetColors(),m.visible?A():O(),f.bind({pageresize:g,pagezoom:p}),s};function Bn(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that views, modifies, and saves documents, annotations and forms.
 * @param {WebDocumentViewerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @returns {WebDocumentViewer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */var Ke=function(t,o){if(!Pn({checkjQueryOnly:!0,checkRaphael:!1,checkClipboard:!1}))return null;var e,n,c={typeOf:t.type||"Atalasoft.Controls.WebDocumentViewer"},L="Atalasoft.Controls.WebDocumentThumbnailer"===c.typeOf,x=t.singlepage,y="",H=150,u=500,_="atala-ui-icon",i=document.createElement("div"),R=4,j=1500,a=pn({}),r=pn({}),l=new En({get:function(){return c},isInitialized:Kt,switchDocument:At,closeDocument:Ot}),B={
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
uploadCtrl:null},N={annotations:null,document:null,forms:null,mouseTool:null,memory:null,text:null,upload:null},q={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},W={prpr:0,batchoperation:0,loading:!1,zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,scrollTarget:{Page:0,dx:0,dy:0},hidden:!1,itch:!1,tilingCorrelationId:0},s={top:0,left:0,expanded:[]},d={
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
fileaddedtoupload:null},h=!0,U={
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
direction:xn.Vertical,
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
fitting:yn.Width,
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
pageselectlocation:pn.extend({},_n.TopLeft),
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
type:bn.Pan,
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
scrolltriggerarea:wn.Normal,
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
localization:Tn,
/**
     * @property {boolean} [tiling=false] - Specifies whether the PDF document pages should be loading using tiling
     * */
tiling:!1,
/**
     * @property {boolean} [multiprocessing=false] - Specifies whether the PDF document processing should use parallelization to increase performance
     * */
multiprocessing:!1};if(t){var f=t.mousetool;t.mousetool&&"object"!=typeof t.mousetool&&(t.mousetool=pn.extend({},U.mousetool,{type:f})),!t.tabular||t.direction!==xn.Horizontal&&1!==t.columns||(t.tabular=!1),pn.extend(!0,U,t),t.mousetool=f,t.localization&&Fn.SetLocalizationStrings(t.localization)}if(function(){x?(U.direction=xn.Vertical,U.tabular=!1):U.direction=U.direction===xn.Vertical||U.direction===xn.Horizontal?U.direction:xn.Vertical;U.fitting=U.fitting===yn.None||U.fitting===yn.Best||U.fitting===yn.Width||U.fitting===yn.Height?U.fitting:yn.Width,U.pageborderwidth=De(U.pageborderwidth)?parseInt(U.pageborderwidth,10):1,U.pagespacing=De(U.pagespacing)?parseInt(U.pagespacing,10):4,U.showpageborder=!!U.showpageborder,U.showpagenumber=!!U.showpagenumber,U.showstatus=!!U.showstatus,U.zoom=De(U.zoom,!0)?parseFloat(U.zoom):1,h=!1,U.scripturl=(e=U.scripturl,0<e.length&&-1===e.indexOf("/",e.length-1)&&-1===e.indexOf("\\",e.length-1)?U.scripturl+"/":U.scripturl),U.maxpagebuffersize=0<U.maxpagebuffersize&&U.pagebuffersize<U.maxpagebuffersize?U.maxpagebuffersize:0<U.pagebuffersize?U.pagebuffersize+10:50,function(){if((U.mousetool.type===bn.ZoomArea||U.mousetool.type===bn.Selection||U.mousetool.type===bn.Text)&&!U.showselecttools){if(null!==t.showselecttools&&void 0!==t.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";U.showselecttools=!0}}(),function(){U.upload||(U.upload={enabled:!1});var e=U.upload;!1!==e.enabled&&(e.allowedmaxfilesize=Cn(e.allowedmaxfilesize)?e.allowedmaxfilesize:Number.MAX_VALUE,e.allowdragdrop=!!e.allowdragdrop,e.allowmultiplefiles=!!e.allowmultiplefiles,e.allowedfiletypes="string"==typeof e.allowedfiletypes?e.allowedfiletypes:"",e.uploadpath="string"==typeof e.uploadpath?e.uploadpath:".",e.filesuploadconcurrency=Cn(e.filesuploadconcurrency)?e.filesuploadconcurrency:1,e.closeuiafterupload=!1!==e.closeuiafterupload)}();var e}(),e=U.allowannotations,n=U.allowtext,!Pn({checkjQueryOnly:!1,checkRaphael:e||n,checkClipboard:n}))return null;function g(){var e=N.memory.deallocateOldestEntry();!function(e){try{e.parentNode&&e.parentNode.removeChild(e),i.appendChild(e),i.innerHTML=""}catch(e){}}(e[0]),0<=e._cacheIndex&&(B.loadedImgs[e._cacheIndex]=null,e._cacheIndex=-1),e.remove(),e.length=0,e=null}function p(e){W.newpagedivsize={height:e.height,width:e.width},W.newpagedivfullzoom=e.fullzoom,U.minwidth=e.minwidth,U.zoom=e.fullzoom,Ht()}function v(e){var t=!1;if((q.smallest.width<=0||e.width<q.smallest.width)&&(q.smallest.width=e.width,t=!0),(q.smallest.height<=0||e.height<q.smallest.height)&&(q.smallest.height=e.height,t=!0),!L){if(x)Se(e.dx,e.dy);else{var n=W.scrollTarget.Page-1;if(e.index<=n)if(U.direction===xn.Vertical&&0<Math.abs(e.dy)){var o=ge(B.pageDivs[0]._index).height;B.edges[0].height(o),He(B.pageDivs[0]._index,null),Ce(null,ge(n).height+W.scrollTarget.dy,!1)}else if(U.direction===xn.Horizontal&&1<Math.abs(e.dx)){var i=ge(B.pageDivs[0]._index).width;B.edges[0].width(i),He(B.pageDivs[0]._index,null),Le(),Ce(ge(n).width+W.scrollTarget.dy,null,!1)}Se(e.dx,e.dy),fe();var a=B.scroller[0].scrollLeft,r=B.scroller[0].scrollTop;if(!B.scroller.propagationPaused()&&B.scrollH&&B.scrollV){var l=Math.round(a/B.scrollH._ratio),s=Math.round(r/B.scrollV._ratio);l!==B.scrollH.scrollLeft()&&(B.scrollH.pauseEventPropagation(!0),B.scrollH.scrollLeft(l)),s!==B.scrollV.scrollTop()&&(B.scrollV.pauseEventPropagation(!0),B.scrollV.scrollTop(s))}}t&&ne(ie())>B.pageDivs.length&&Ht()}}function m(e,t,n,o){var i=t.getPageSize(e.index,y);if(!i){var a=t.getPageFitMultiplier(e.index,y),r=a,l={width:e.width,height:e.height};1===r&&U.forcepagefit&&(l.width!==n.width||l.height!==n.height)&&0<l.width&&0<l.height&&(r=l.width/n.width>l.height/n.height?n.width/l.width:n.height/l.height,t.setPageFitMultiplier(e.index,r,y)),t.setPageSize(e.index,pn.extend({},l),y),o&&(l.width*=U.zoom*r,l.height*=U.zoom*r,(i=pn.extend({},q.size)).width*=U.zoom*a,i.height*=U.zoom*a,e.dx=l.width-i.width,e.dy=l.height-i.height,v(e))}}function b(){mn.Mobile.Any()?window.addEventListener("orientationchange",ut):window.addEventListener("resize",ut),B.scroller.scroll(Oe),Q(q.buffer)}function w(e){var t=e.target||e.srcElement;return("TEXTAREA"===t.nodeName||"INPUT"===t.nodeName||"text"===t.type)&&(!(t.attributes.selectable&&"false"===t.attributes.selectable.value||t.attributes.hasOwnProperty("readonly")&&"true"===t.attributes.readonly.value)&&void 0)}function z(t,n){return function(e){try{e.currentTarget=n&&0<n.length?n[0]:e.currentTarget,t&&t(e)}catch(e){Pe(e.message)}}}function Z(e,t){if(U.showerrors)throw void 0===t?e:e+": "+t;Pe(e+": "+t),cn({type:"error",name:e,message:t})}function k(e){Z(e.name,e.msg)}function P(e,t,n,o){var i=pn("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function X(e,t,n){return P("div",e,t,n)}function T(e){var t=pn('<div div class="atala_draw_layer"></div>');return t.toFront=function(){t.css({"z-index":"10"}),t.reflow&&t.reflow()},t.reset=function(){t.css({"z-index":""}),t.reflow&&t.reflow()},e&&e.prepend(t),t}function D(e){var t=X(e.parent),n=y+"_toolbar";t.buttons=[];for(var o=0;e.children&&o<e.children.length;o++){var i=null;switch(e.children[o].type){case"button":if(mn.Features.Touch&&("lines"===e.children[o].icon||"polygon"===e.children[o].icon))continue;e.children[o].id=n+"_"+e.children[o].id,(i=A(e.children[o],t)).addClass(zn.atala_toolbar_button),t.buttons.push(i);break;case"pagelabel":B.pageLabel=P("span",t,n+"_"+e.children[o].id),(i=B.pageLabel).addClass("ui-controlgroup-item")}i&&e.children[o].cls&&i.addClass(e.children[o].cls)}return t}function C(e){var t=pn("<ul/>");for(var n in t.css({fontSize:"medium"}),t.addClass(zn.atala_context_menu),e)if(e.hasOwnProperty(n)){var o=pn('<li><div href="#"> '+n+" </div></li>");mn.Features.Touch&&o.on({touchend:e[n]}),o.click(e[n]),o.appendTo(t)}return t.menu(),t}function M(e,t,n){var o=pn('<div title="'+t+'" />');return n&&o.append(n),o.dialog(),o}function E(e){var t=P("span",B.toolbar.annoToolbar).addClass("ui-controlgroup-item");return A(e,t),F(t,e.id+"_Drop","ui-icon-triangle-1-s","Click To Choose",null,function(){var e=pn(this).next();if(e.is(":visible"))return e.hide(),!1;var t=e.prev().prev().parent();return e.menu().show().css({position:"absolute",top:0,left:0,"min-width":t.width()+"px","z-index":11}).position({my:"left top",at:"left bottom",of:t}),!1}),t.controlgroup(),B.toolbar.annoToolbar.controlgroup("refresh"),t}function S(e,t,n){for(var o=pn(e.children().first()),i={},a=0;a<n.length;a++)i[n[a].name]=I(o,t,n[a]);o.menu=C(i),e.append(o.menu),o.menu.hide()}function I(e,t,n){var o=function(){return e.button("option","label","Draw "+n.name),e.data("_annoConfig",n),e.click(t.onclick),e.menu.hide(),e.trigger("click"),!1};return ln("menuselect"+t.icon+n.name,z(o,e)),o}function F(e,t,n,o,i,a){var r=pn('<button id="'+t+'" title="'+o+'">'+(i||o)+"</button>");return a&&r.click(a),r.button({icon:n,showLabel:null!=i&&U.showbuttontext}),r.addClass("atala-ui-button"),e&&r.appendTo(e),r}function A(e,t){var n,o="menuclick"+(e.custom?e.id:e.icon),i=F(t,e.id,e.custom?e.icon:_+" "+_+"-"+e.icon,e.tooltip,e.text,(n=o,function(e){e.preventDefault(),cn(n,arguments)}));return i.data("_config",e),ln(o,z(e.onclick,i)),i}function O(e){var t,n,o={clearable:"atala_search_input_clearable",onclear:"atala_search_input_clear_hover",inputEmpty:"atala_search_input_empty",loading:"atala_search_input_loading"},i=e.parent||B.toolbar,a=null,r=null;function l(){var e=n.val();return e?n.addClass(o.clearable):n.removeClass(o.clearable),!!(e&&a&&a.isValid()&&e===a.getQuery())||(clearTimeout(r),a=null,e&&3<=e.length?(p(!0),r=setTimeout(function(){a=N.text.search(e,rn(),f),g(!0)},U.mousetool.text.searchdelay),!1):void h())}function s(e){var t=n.val();return 13===e.keyCode&&a&&t&&a.isValid()&&a.getQuery()===t?(e.shiftKey?u():c(),!1):13!==e.keyCode||a&&a.isValid()?27===e.keyCode?(d(),!1):void 0:(l(),!1)}function c(){a&&(g(!0),a.next(f))}function u(){a&&(g(!0),a.prev(f))}function d(){h(),x()}function h(){a=null,N.text.search(""),N.text.clearSelection(),g(!1),p(!0)}function f(e,t){e.isValid()&&(g(!1),e.wrap=U.mousetool.text.wrapsearch,t||p(t))}function g(e){m(o.loading,e)}function p(e){m(o.inputEmpty,!e)}function v(t){return function(e){e.preventDefault(),t&&t()}}function m(e,t){t?n.addClass(e):n.removeClass(e)}function b(e){m(o.onclear,this.offsetWidth-18<e.clientX-this.getBoundingClientRect().left)}function x(e){e&&e.preventDefault(),n.removeClass(o.clearable).removeClass(o.onclear).val("").change(),l()}!function(){t=X().addClass(zn.atala_search_container).addClass("ui-controlgroup-item"),(n=pn('<input type="text" placeholder="Search..." />').addClass(zn.atala_search_input).addClass("ui-widget")).on({keydown:s,"input propertychange":l}),P("span",t).css({width:"100%"}).append(n);var e=P("span",t);F(e,y+"_toolbar_search_button_next",_+" "+_+"-search-next","Next",null,v(c)).addClass(zn.atala_search_next).addClass(zn.atala_toolbar_button),F(e,y+"_toolbar_search_button_prev",_+" "+_+"-search-prev","Previous",null,v(u)).addClass(zn.atala_search_prev).addClass(zn.atala_toolbar_button),t.on("mousemove","."+o.clearable,b).on("touchstart click","."+o.onclear,x),i.append(t),i.append(pn("<div/>").css("clear","both"))}(),this.dispose=function(){n.off({keypress:s,"input propertychange":l}),t.off("mousemove","."+o.clearable,b).off("touchstart click","."+o.onclear,x),a&&a.dispose();t.remove()},this.ClearSearch=d}function V(){U.allowannotations&&c.annotations.cancelDraw(),N.mouseTool.setTool(bn.ZoomArea)}function G(o){return function(){var t=this,e=Y(q),i=e[0],n=[];e.forEach(function(e){return Bn(this,t),n.push(N.document.getPageRotation(e)+o)}.bind(this)),N.document.rotatePages(e,n,function(){var e=Pt(i),t=xe(i),n=U.direction===xn.Vertical?t.height*e:0;lt(U.pageselectlocation,_n.Center)||lt(U.pageselectlocation,_n.MiddleLeft)?n/=2:lt(U.pageselectlocation,_n.TopLeft)&&(n=0);var o={x:U.direction===xn.Vertical?0:n,y:U.direction===xn.Vertical?n:0};rt(i,o,U.pageselectlocation,!0)})}}!function(){var e=U.parent.attr("id")+"_wdv";++Mn.instanceCounter;for(;document.getElementById(e+Mn.instanceCounter);)++Mn.instanceCounter;y=e+Mn.instanceCounter}(),
/**
   * @member {WebDocumentViewerConfig} config - Current control configuration.
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @instance
   * @alias config
   */
c.config=U,
/** WARNING: Changing values from these references can cause instability.*/
c.events=d,
/** WARNING: Changing values from these references can cause instability.*/
c.domclasses=zn,
/** WARNING: Changing values from these references can cause instability.*/
c.domattributes=kn;var Y=function(e){return[e.number-1]};function J(e,t){var n=X(e,t);return U.direction===xn.Vertical?(n.height(1),n.css({display:"block"})):U.direction===xn.Horizontal&&(n.width(1),n.css({display:"inline-block",overflow:"hidden"})),n._zoom=1,U.backcolor&&n.css({backgroundColor:U.backcolor}),n}function Q(e){if(void 0===e){var t=ne(L&&W.newpagedivsize&&0<U.zoom&&isFinite(U.zoom)?U.zoom:ie());t>U.maxpagebuffersize&&(t=U.maxpagebuffersize),q.buffer<t&&(q.buffer=t),q.buffer=Math.min(q.buffer,N.document.getPageCount()),e=q.buffer}function n(t){return function(){var e;e=t,W.activepage=e}}if(B.pageDivs.length<e)for(var o=B.pageDivs.length;o<e;o++)B.pageDivs[o]=X(),B.pageDivs[o].addClass(zn.atala_page_div),U.showselecttools&&(B.pageDivs[o]._rubberband=new jn(c,{},B.pageDivs[o],{getViewportSize:_e,getMaxZoom:ae,getPageOffsets:ge,raiseDrawLayer:It,resetDrawLayer:Ft})),B.pageDivs[o].on({touchstart:n(B.pageDivs[o]),mousedown:n(B.pageDivs[o])}),B.pageDivs[o].attr("tabindex",0),N.annotations&&N.annotations.addDrawingSurface(B.pageDivs[o]),(U.showselecttools||U.allowannotations||U.allowforms||U.allowtext)&&(B.pageDivs[o]._draw=T(B.pageDivs[o])),N.forms&&!L&&N.forms.addFormLayer(B.pageDivs[o]),N.text&&!L&&N.text.addTextLayer(B.pageDivs[o]);else if(B.pageDivs.length>e)for(;B.pageDivs.length>e&&0!==B.pageDivs.length;){var i=B.pageDivs.pop();i._rubberband&&i._rubberband.dispose(),N.annotations&&N.annotations.removeDrawingSurface(i),N.forms&&!L&&N.forms.removeFormLayer(i),N.text&&!L&&N.text.removeTextLayer(i),i&&Ge(i),i=null}}function K(e,P,t,n){"function"==typeof t&&(n=t,t=void 0);var T,o="function"==typeof n?[n]:[];T=pn(new Image);var i=.9,r=pn.extend(!0,{atala_cb:void 0},t||{});T._domEl=X(),T._domEl.addClass(zn.atala_page_image_anchor),T.addClass(zn.atala_page_image),T._domEl.append(T);var a={load:p,error:function(){k(),Z("ImageError","Image at frameIndex "+c()+" failed to load.")},inserted:function(){T._loaded&&m()}};function c(){return T._page?T._page._index:N.document.getPageIndexByImageIndex(T._index)}function D(){return T._domEl}function l(e){return N.document.getPageFitMultiplier(void 0!==e?e:c())}function u(e,t){return(e=void 0===e?U.zoom:e)*l(t)}function s(){var e=xe(c())||q.size;return{height:e.height,width:e.width}}
/**
     * Returns physical size of the image without client transformations applied(like view rotation)
     */function d(){var e=s();return 90===T._viewrotation||270===T._viewrotation?V(e):e}function C(e,t){return t=t||s(),{height:Math.round(t.height*u(e)),width:Math.round(t.width*u(e))}}function h(){var n=this;if(T._tiled){var o=0;return T.find("."+zn.atala_tile_column).first().find("img").each(function(e,t){Bn(this,n),o+=t.naturalHeight}.bind(this)),o}return T.prop("naturalHeight")}function f(){var e=this;if(T._tiled){var t=0;return T.find("."+zn.atala_tile_column).each(function(){Bn(this,e),t+=pn(this).find("img").first().prop("naturalWidth")}.bind(this)),t}return T.prop("naturalWidth")}function g(e){var _=c(),w=q.vector&&(!P||!P.uri)?u():Math.min(u(),1),z=N.document.getPageRotation(_);if(e||w!==T._zoom||T._rotation!==z){var k=pn.extend({atala_docurl:P?P.uri:T.documenturl,atala_doczoom:w,atalamultiprocessing:U.multiprocessing,atala_framecount:q.count,atala_thumbpadding:!1},r);if(z&&(k.atala_angle=z),U.jpeg&&(k.atala_jpeg=!0),U.tiling&&U.forcepagefit&&!T._loaded)if(ye(j*q.dpi/96,_)){var t,n=_e(),o=xe(_);t=o.width>o.height?n.width/o.width:n.height/o.height,oe(w,t)||(w=t,k.atala_doczoom=w)}if(T._tiled=function(e,t){var n=!1,o=j*q.dpi/96;if(U.tiling&&!L&&ye(o,e)){var i=_e(),a=xe(e);a.height>o&&a.width>o&&(2<a.height*t/i.height||2<a.width*t/i.width)&&(n=!0)}return n}(_,w),T._tiled)!function(){var n=this,s=xe(_),e=C(),t=_e(),c=Math.min(R,Math.floor(e.height/t.height)),u=Math.min(R,Math.floor(e.width/t.width)),d={width:Math.ceil(s.width/u),height:Math.ceil(s.height/c)};if(c!==T._tilesV||u!==T._tilesH){$e();var o=D(),i=T;T=X(),o.children().replaceWith(T),E(i),T.addClass(zn.atala_tiled_page_image);for(var a=0;a<u;a++){var r=X(T);r.addClass(zn.atala_tile_column);for(var l=0;l<c;l++){var h=X(r);h.attr("tile_index_h",a).attr("tile_index_v",l),h.width(d.width*w),h.height(d.height*w),h.addClass(zn.atala_page_loading);var f=pn(new Image);f.css("display","none"),h.append(f)}}T._tilesH=u,T._tilesV=c}(B.loadedImgs[T._cacheIndex]=T)._needToInsert=!1,T.__tileRequests=[],T.__tilesArray=[];for(var g=0;g<u;g++)for(var p=0;p<c;p++)T.__tilesArray.push({x:g,y:p});var v={x:0,y:0},m=function(e,t){return Bn(this,n),Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)}.bind(this);T.__tilesArray.sort(function(e,t){return Bn(this,n),m(v,e)-m(v,t)}.bind(this)),T.__tilesArray.forEach(function(e){var t,n,o,i,a=e.x,r=e.y;switch(z){case 0:t=Math.ceil(a*d.width),n=Math.ceil(r*d.height),o=a<u-1?d.width:s.width-t,i=r<c-1?d.height:s.height-n;break;case 90:t=Math.ceil(r*d.height),n=Math.ceil((u-1-a)*d.width),o=r<c-1?d.height:s.height-t,i=0!==a?d.width:s.width-n;break;case 270:t=Math.ceil((c-1-r)*d.height),n=Math.ceil(a*d.width),o=0!==r?d.height:s.height-t,i=a<u-1?d.width:s.width-n;break;case 180:t=Math.ceil((u-1-a)*d.width),n=Math.ceil((c-1-r)*d.height),o=0!==a?d.width:s.width-t,i=0!==r?d.height:s.height-n;break;default:Z("ImageError","Invalid rotation angle: "+z)}var l=pn.extend(!0,{},k,{atala_tilestart:t+"x"+n,atala_pagesize:o+"x"+i});l.atala_doczoom=w,T.__tileRequests.push({type:"docpage",serverurl:U.serverurl,query:"?ataladocpage="+(null===P?T._index:void 0!==P.index?P.index:P),method:"GET",data:l,cancel:!1})}),T._reqzoom=w,T._reqangle=z;for(var b=T._tilesLoadedCount=0;(b=Math.floor(2147483647*Math.random()))===W.tilingCorrelationId;);if(W.tilingCorrelationId=b,U.multiprocessing)for(var x=function(e){var t=this;et(),setTimeout(function(){Bn(this,t),M(e,d)}.bind(this),0)},y=0;y<T.__tilesArray.length;y++)x(y);else setTimeout(function(){Bn(this,n),et(),M(0,d)}.bind(this),0)}();else{if(1<T._tilesV||1<T._tilesH){var i=D(),a=T;T=pn(new Image),i.children().replaceWith(T),E(a),T.addClass(zn.atala_page_image),i.addClass(zn.atala_page_loading),T._tilesV=1,T._tilesH=1,T.__tilesArray=[],(B.loadedImgs[T._cacheIndex]=T)._needToInsert=!1}T._reqzoom=w,T._reqangle=z,Yt({type:"docpage",serverurl:U.serverurl,query:"?ataladocpage="+(null===P?T._index:void 0!==P.index?P.index:P),method:"GET",data:k,cancel:!1,info:T},p,p)}}}function M(t,n){function o(){return e!==W.tilingCorrelationId||W.itch||T._reqzoom!==u()||T._reqangle!==N.document.getPageRotation(c())||void 0===T.__tileRequests[t]||void 0===T.__tilesArray[t]}var e=W.tilingCorrelationId;if(o())g();else{var i=T.__tileRequests[t],a=T.__tilesArray[t].x,r=T.__tilesArray[t].y,l=T.find('div[tile_index_h="'+a+'"][tile_index_v="'+r+'"]').find("img");l.attr("tile_index",t),l.attr("src",i.serverurl+i.query+"&"+pn.param(i.data)),l[0].onload=function(){if(T&&!o()){if(T._tilesLoadedCount++,l.css("display","block"),l.parent().css({width:"auto",height:"auto"}),l.parent().removeClass(zn.atala_page_loading),0===t){var e=C();T.trigger({type:"pageresize",image:T,index:c(),width:e.width,height:e.height})}0===l.width()&&0===l.height()&&l.css({width:"auto",height:"auto"}),U.multiprocessing?T._tilesLoadedCount>=T.__tilesArray.length&&p():t<T.__tilesArray.length-1?M(t+1,n):p()}}}}function p(){T._loaded||T._domEl.removeClass(zn.atala_page_loading),T._tiled&&W.zooming&&mt(),T._loaded=!0,T._zoom=T._reqzoom,T._rotation=T._reqangle;var e=c();if(0<=e){if(T._rotation!==N.document.getPageRotation(e))return void g();(T._viewrotation=0)<T.parent().length&&m(),F(T._viewrotation);var t=q.vector?u():Math.min(u(),1);y()&&T._zoom<t*i&&!oe(T._zoom,t)&&x(!1)}k()}function E(e){T._loaded=e._loaded,T._zoom=e._zoom,T._rotation=e._rotation,T._prevzoom=e._prevzoom,T._scaledzoom=e._scaledzoom,T._binds=e._binds,T.documenturl=e.documenturl,T._index=e._index,T._size=e._size,T._viewrotation=e._viewrotation,T._tiled=e._tiled,T._page=e._page,T._reqzoom=e._reqzoom,T._domEl=e._domEl,T._cacheIndex=e._cacheIndex,T.dispose=b,T.zoom=x,T.needsZoom=y,T.getSize=s,T.getScaledSize=C,T.getFitZoom=u,T.getFitMultiplier=l,T.needsRotate=S,T.rotate=I,T.getDomElement=D,T.invalidate=O,T.naturalHeight=h,T.naturalWidth=f,T.on(a)}function v(e){e&&(e.removeAttr("width height"),e.css({width:"auto",height:"auto"}))}function m(){v(T);var e=T.naturalWidth()||0,t=T.naturalHeight()||0,n=e||T.width(),o=t||T.height(),i=s(),a=u(),r=!1;if(mn.Explorer&&!L&&n<40&&T._zoom>ie()&&(n=i.width*a,o=i.height*a),0!==n&&0!==o){T._tiled||(T._size.width=Math.round(n/T._zoom),T._size.height=Math.round(o/T._zoom)),90!==T._viewrotation&&270!==T._viewrotation||(T._size=V(T._size)),T._size.width===q.size.width&&T._size.height===q.size.height||oe(T._size.width,i.width)&&oe(T._size.height,i.height)||(r=!0,N.document.setPageSize(c(),T._size)),null===N.document.getPageSize(c())&&(r=!0,N.document.setPageSize(c(),T._size)),U.forcepagefit?z():(T._zoom!==U.zoom||r||0!==T._viewrotation)&&w();var l=C();r&&T.trigger({type:"pagesizechanged",image:T,index:c(),width:T._size.width,height:T._size.height,dx:Math.round(l.width-i.width*a),dy:Math.round(l.height-i.height*a)}),T.trigger({type:"pageresize",image:T,index:c(),width:l.width,height:l.height})}}function b(){T.off(a),T._page=null,T=null}function x(e,t){!y()||T._size.isEmpty()&&!T._tiled?"function"==typeof t&&t.call(this,T):("function"==typeof t&&o.push(t),T._prevzoom=T._reqzoom,e&&!W.loading?T._tiled?T.find("img").each(function(){var e=pn(this);e.animate({height:Math.round(e.height()/T._reqzoom*u()),width:Math.round(e.width()/T._reqzoom*u())},{duration:H,easing:"easeOutQuad",complete:_,queue:!1})}):T.animate({height:Math.round(T._size.height*u()),width:Math.round(T._size.width*u())},{duration:H,easing:"easeOutQuad",complete:_,queue:!1}):(w(),_()))}function y(){if(!T._loaded&&!T._tiled)return!1;var e=!q.vector&&1===T._reqzoom&&1===T._prevzoom&&1<u(),t=oe(T._reqzoom,u())||e;if(!t){var n=Math.abs(T._reqzoom*T._size.width-u()*T._size.width),o=Math.abs(T._reqzoom*T._size.height-u()*T._size.height);n<1&&o<1&&(t=!0)}return!t||!oe(T._scaledzoom,u())}function _(){var e=u();T.trigger({type:"pagezoom",index:c(),height:Math.round(T._size.height*e),width:Math.round(T._size.width*e),prevzoom:T._prevzoom,zoom:e}),0===W.prpr?g():k()}function w(){var e,t,n,o=C(void 0,d()),i=C(),a=T.naturalWidth()||0,r=T.naturalHeight()||0,l=a&&Math.abs(a-o.width)/o.width<.01,s=r&&Math.abs(r-o.height)/o.height<.01;l&&s||(T._tiled&&0!==r&&0!==a?T.find("img").each(function(){var e=pn(this),t=e.prop("naturalHeight"),n=e.prop("naturalWidth");0!==t&&0!==n&&(e.height(t*u()),e.width(n*u()))}):(T.height(o.height),T.width(o.width))),T._domEl.width(i.width),T._domEl.height(i.height),T._scaledzoom=u(),T._tiled?A(T._viewrotation):F(T._viewrotation),e=c(),t=i.width,i.height,null!=(n=at(e))&&null!=n._num&&n._num.css({left:t-20,right:0})}function z(){var e,t=function(e){var t=1;e=e||T._size;var n={width:U.forcepagesize.width*(L?1:U.zoom),height:U.forcepagesize.height*(L?1:U.zoom)};(n.width<1||n.height<1)&&(n.width=q.size.width*U.zoom,n.height=q.size.height*U.zoom);t=e.width/n.width>e.height/n.height?n.width/e.width:n.height/e.height;return t}();e=t/U.zoom,N.document.setPageFitMultiplier(c(),e),w()}function k(){0<o.length&&function(e){var t=Array.prototype.slice.call(arguments,1);for(;e.length;)e.shift().apply(this,t)}(o,T)}function S(){var e=N.document.getPageRotation(c());return 0===T._viewrotation&&e!==T._rotation||0!==T._viewrotation}function I(e){if("function"==typeof e&&o.push(e),S()){var t=N.document.getPageRotation(c());if(n=N.document.getPageRotation(c()),(0===T._viewrotation&&n!==T._rotation||0!==T._viewrotation&&(T._viewrotation+T._rotation)%360!==n)&&T&&T._page&&(t=(360+t-T._rotation)%360,!T._tiled&&T._loaded?(F(t),m()):T._tiled&&(A(t),function(){v(T);var e=c(),t=N.document.getPageSize(e);if(90===T._viewrotation||270===T._viewrotation){var n=V(t);T._size.width=n.width,T._size.height=n.height,N.document.setPageSize(e,T._size)}U.forcepagefit?z():T._zoom===U.zoom&&0===T._viewrotation||w()}(),0!==(i=t)&&T.find("img").each(function(){var e=pn(this),t={width:e.width(),height:e.height()};90!==i&&270!==i||(t=V(t));var n=e.parent();0!==t.width&&0!==t.height&&(n.width(t.width),n.height(t.height)),n.addClass(zn.atala_page_loading);var o=pn(new Image);o.css("display","none"),n.children().replaceWith(o)}))),0===W.prpr&&T._loaded)return void g()}var i,n;k()}function F(e){var t=d(),n=C(void 0,t),o=0,i=0,a="";90!==e&&270!==e||(o=(n.height-n.width)/2,L&&t.width<t.height&&(o=0),i=(n.width-n.height)/2,n=V(n)),0!==e?(a+=" translate("+o+"px,"+i+"px)",a+="rotate("+e+"deg)",T.css(Dn(a))):T.css(Dn("")),D().css({width:n.width,height:n.height}),T._viewrotation=e}function A(e){var t=C(void 0,d());90!==e&&270!==e||(t=V(t)),D().css({width:t.width,height:t.height}),T._viewrotation=e}function O(e,t){"function"==typeof e&&(t=e,e={}),(r=pn.extend(!0,{},e)).atala_cb=Math.floor(1e9*Math.random()),"function"==typeof t&&o.push(t),g(!0)}function V(e){var t=e.width;return e.width=e.height,e.height=t,e}return T._binds=a,T.documenturl=U.documenturl,T._index=P?P.mapsto:e,T._loaded=!1,T._size={width:0,height:0,isEmpty:function(){return 0===this.width&&0===this.height}},T._zoom=-1,T._prevzoom=T._zoom,T._scaledzoom=-1,T._rotation=0,T._viewrotation=0,T._tiled=!1,T._tilesV=1,T._tilesH=1,T.dispose=b,T.zoom=x,T.needsZoom=y,T.getSize=s,T.getScaledSize=C,T.getFitZoom=u,T.getFitMultiplier=l,T.needsRotate=S,T.rotate=I,T.getDomElement=D,T.invalidate=O,T.naturalHeight=h,T.naturalWidth=f,function(){T.on(a);var e=U.pageborderwidth,t={bottom:0,top:0,right:0,left:0};T._loaded=!1,T._reqzoom=-1,T._needToInsert=!0,(U.direction===xn.Vertical||U.tabular)&&(t.bottom=U.pagespacing);(U.direction===xn.Horizontal||U.tabular)&&(t.right=U.pagespacing);var n=D();U.showpageborder&&n.css({"border-bottom":e+"px solid black","border-right":e+"px solid black","border-top":e+"px solid silver","border-left":e+"px solid silver","margin-bottom":t.bottom+"px","margin-right":t.right+"px"});n.css({display:"inline-block"}),n.addClass(zn.atala_page_loading),g()}(),T}function $(e,t){var n=X(e);n.css({position:"absolute",display:"none","background-color":"white"});var o=null,i=!1;function a(){o._tooltip.hide(),q.number===o._pagenum||it(o._pagenum)||qe(o._pagenum),Wt()}function r(e,t){if(U.forcepagefit){t*=e._ratio;var n=e.ScrollDirection===xn.Vertical?{x:0,y:t}:{x:t,y:0};return ce(n.x,n.y)+1}return Math.floor(t/(e._max/N.document.getPageCount()))+1}return t===xn.Horizontal?(o=mn.Firefox?pn('<div class="atala_scrollbar_firefox_x"></div>').appendTo(e):pn('<div class="atala_scrollbar_x"></div>').appendTo(e))._tray=pn("<div/>").css("height","1px").appendTo(o):(mn.Firefox?(o=pn('<div class="atala_scrollbar_firefox_y"></div>').css("width",function(){var e=X(pn("body")),t=X(e);e.css({width:"50px",height:"50px",overflow:"hidden",position:"absolute",visibility:"hidden"}),t.css({width:"100px",height:"100px"});var n=e.width();e.css({"overflow-y":"scroll"});var o=n-e[0].clientWidth;return pn(e).remove(),o}()+1+"px;").appendTo(e),i=!0):o=pn('<div class="atala_scrollbar_y"></div>').appendTo(e),o._explicitSize=i,o._tray=pn("<div/>").css("width","1px").appendTo(o)),te(o),o._ratio=1,o.ScrollDirection=t,o._tooltip=n,o._pagenum=-1,o._scrollSize=0,o.pageNum=function(e){o._pagenum=e},o.scrollbarHeight=function(){return o.height()-o[0].clientHeight},o.scrollSize=function(e){o._scrollSize=e},o.ratio=function(e){o._ratio=e},o.on({scroll:function(){if(!o.propagationPaused()){clearTimeout(o._tooltip._timeout),B.scroller.stop(),B.scroller.pauseEventPropagation(!0);var e={};o.ScrollDirection===xn.Vertical?(B.scroller.scrollTop(o[0].scrollTop*o._ratio),o._pagenum=x?rn()+1:r(o,o[0].scrollTop),e.right=o.outerWidth()+10+"px",e.top=16+Math.round((o[0].offsetHeight-48)/o[0].scrollHeight*o[0].scrollTop)+"px",o.attr("aria-valuenow",o.scrollTop()/o._max)):o.ScrollDirection===xn.Horizontal&&(B.scroller.scrollLeft(o[0].scrollLeft*o._ratio),o._pagenum=x?rn()+1:r(o,o[0].scrollLeft),e.bottom=o.outerHeight()+10+"px",e.left=16+Math.round((o[0].offsetWidth-48)/o[0].scrollWidth*o[0].scrollLeft)+"px",o.attr("aria-valuenow",o.scrollLeft()/o._max)),o.ScrollDirection===U.direction&&U.showpagenumbertooltip&&("none"===o._tooltip.css("display")&&(o._tooltip.css(e),o._tooltip.show()),U.showpagenumbertooltip&&o._tooltip.html("Page "+o._pagenum),o._tooltip._timeout=setTimeout(a,1e3))}}}),o}function ee(e){e&&e._tooltip&&(clearTimeout(e._tooltip._timeout),e._tooltip.hide())}function te(t){var n={scroll:function(){t.off(n),t.resumeEventPropagation()}};t._pauseEP=0,t.propagationPaused=function(){return 0<t._pauseEP},t.pauseEventPropagation=function(e){t._pauseEP++,e&&t.on(n)},t.resumeEventPropagation=function(){0<t._pauseEP&&t._pauseEP--}}function ne(e){var t=_e(),n=re(0,e);!W.hidden&&t.height<=0&&t.width<=0&&(W.hidden=!0,function(){var e=this;if(mn.Edge||mn.Explorer)var t=setInterval(function(){Bn(this,e),0!==B.scroller.height()&&0!==B.scroller.width()&&(clearInterval(t),W.hidden=!1,cn("viewportunhide"))}.bind(this),500);else{var n=new ResizeObserver(function(){Bn(this,e),W.hidden=!1,cn("viewportunhide"),n.unobserve(B.scroller[0])}.bind(this));n.observe(B.scroller[0])}}()),n.width=0<q.smallest.width&&q.smallest.width<n.width&&!L?q.smallest.width:n.width,n.height=0<q.smallest.height&&q.smallest.height<n.height&&!L?q.smallest.height:n.height;var o,i=Math.ceil(t.width/n.width)+2,a=Math.ceil(t.height/n.height)+2;return U.tabular?(U.direction===xn.Vertical&&0<U.columns?i=U.columns:U.direction===xn.Horizontal&&0<U.rows&&(a=U.rows),o=i*a):U.direction===xn.Vertical?o=a:U.direction===xn.Horizontal&&(o=i),o}function oe(e,t){return t<e+.001&&e-.001<t}function ie(){return 0!==q.size.width?U.minwidth/q.size.width:1}function ae(){return 0!==q.size.width?U.maxwidth/q.size.width:1}function re(e,t,n){if(N.document.getPageCount()<=0)return{width:0,height:0};if(n=void 0===n||n,W.newpagedivsize){var o={width:W.newpagedivsize.width,height:W.newpagedivsize.height},i=U.showpageborder&&n?2*U.pageborderwidth:0,a=(t||U.zoom)/W.newpagedivfullzoom;return o.height=Math.round(o.height*a)+i,o.width=Math.round(o.width*a)+i,o}return le(e,t||U.zoom,U.showpageborder&&n)}function le(e,t,n){var o,i=pn.extend({},xe(e)),a=n?2*U.pageborderwidth:0;return t*=(o=e,N.document.getPageFitMultiplier(o)),i.height=Math.round(i.height*t)+a,i.width=Math.round(i.width*t)+a,i}function se(e,t){return ge(null,e,t).index}function ce(e,t){var n=he(),o=_e();if(U.direction===xn.Vertical){var i=0;if(B.scrollH&&(i=1,"none"!==B.scrollH.find("div").css("display")||mn.Firefox||(i=B.scrollH.outerHeight(!0))),t>=n.height-o.height-i&&0<W.scrollTarget.Page)return W.scrollTarget.Page-1}var a=B.scrollV&&"none"!==B.scrollV.find("div").css("display")?1:0;if(U.direction===xn.Horizontal&&e===n.width-o.width-a&&0<W.scrollTarget.Page)return W.scrollTarget.Page-1;var r={x:e+U.pageselectlocation.x*o.width,y:t+U.pageselectlocation.y*o.height};return se(r.x,r.y)}function ue(e,t){for(var n={left:0,top:0},o=e;null!=o&&o!==t;o=o.offsetParent)n.left+=o.offsetLeft,n.top+=o.offsetTop;return n}var de={height:0,isEmpty:function(){return 0===this.width&&0===this.height},width:0,zero:function(){this.width=0,this.height=0},zoom:1};function he(){if(de.isEmpty()||de.zoom!==U.zoom){var e=ge(null,null,null,U.zoom);de.height=e.height,de.width=e.width,de.zoom=U.zoom}return de}function fe(){de.zero(),he()}function ge(e,t,n,o){return pe(0,e,t,n,o)}function pe(e,t,n,o,i){if(U.tabular)return function(e,t,n,o,i){if(t<e)return{width:0,height:0,index:t};var a=ve(e,n,o,i),r=ve(t,n,o,i);return r.height=U.direction===xn.Vertical?r.height-a.height:r.height,r.width=U.direction===xn.Horizontal?r.width-a.width:r.width,r}(e,t,n,o,i);var a=N.document.getPageCount();e=e||0,t=t||0===t?t:a,x&&(a=1,t=e=0);var r={height:0,width:0,index:e};if(U.direction===xn.Vertical)for(var l=null,s=e;s<a&&s<t&&(r.height+(l=re(s,i).height)<=o||null==o);s++)r.height+=l+U.pagespacing,r.index++;else if(U.direction===xn.Horizontal)for(var c=null,u=e;u<a&&u<t&&(r.width+(c=re(u,i).width)<=n||null==n);u++)r.width+=c+U.pagespacing,r.index++;return r.index>=a&&0<a&&(r.index=a-1),r}function ve(e,t,n,o){var i,a,r=N.document.getPageCount(),l={height:0,width:0,index:0},s=me(o);e=null==e?e=r:e,U.direction===xn.Vertical?(i=s||1,a=Math.ceil(r/i)):U.direction===xn.Horizontal&&(a=s||1,i=Math.ceil(r/a));var c=re(0,o);c.width+=U.pagespacing,c.height+=U.pagespacing;var u=null==n?Math.floor(e/i):Math.floor(n/c.height),d=null==t?e%i:Math.ceil(t/c.width);return l.height=u*c.height,l.width=d*c.width,l.index=u*i+d,l.index>=r&&0<r&&(l.index=r-1),l}function me(e){if(x)return 1;var t=1;if(U.tabular){var n=U.pagespacing||0,o=re(0,e);U.direction===xn.Vertical?(t=Math.floor(B.content.width()/o.width),t=Math.min(t,Math.floor((B.content.width()-t*n)/o.width))):U.direction===xn.Horizontal&&(t=Math.floor(B.content.height()/o.height),t=Math.min(t,Math.floor((B.content.height()-t*n)/o.height)))}return t||1}function be(e,t){var n=xe(e);return(Tt(e)+(t||0))%180==0?n:{width:n.height,height:n.width}}function xe(e){var t=N.document.getPageSize(e);return t||q.size}function ye(e,t){return N.document.canBeTiled(e,t)}function _e(){return{width:B.scrollV?B.main.width()-B.scrollV.outerWidth():B.main.width(),height:B.scrollH?B.main.height()-B.scrollH.outerHeight():B.main.height()}}function we(e,t){var n={status:"fail",started:!1,reason:e};return"function"==typeof t&&t.call(),n}function ze(e,t,n,o,i,a){var r=ue(e,t);return r.left<=i&&r.left+e.clientWidth>=n&&r.top<=a&&r.top+e.clientHeight>=o}function ke(e,t,n){return t<e.length&&(e.splice(n,0,e.splice(t,1)[0]),!0)}function Pe(e){U.showstatus&&B.status&&B.status.html(e),cn({type:"statusmessage",message:e})}function Te(e,t){var n;if(1===e.length&&"object"==typeof e[0])n=e[0];else if("string"==typeof e[0]){n={};var o=null;3===e.length?o=e[2]:2===e.length&&(o=e[1]);for(var i=-1<e[0].indexOf(" ")?e[0].split(" "):[e[0]],a=0;a<i.length;a++)n[i[a]]=o}for(var r in n)if(n.hasOwnProperty(r)){var l=null;if(r in d?l=d:c&&r in c.annotations.events?l=c.annotations.events:c&&r in c.forms.events?l=c.forms.events:c&&r in c.document.events&&(l=c.document.events),null==l&&(l=d),null==l[r])t&&(l[r]=[n[r]]);else if(t)l[r].push(n[r]);else if(n[r])for(var s=0;s<l[r].length;s++)l[r][s]===n[r]&&l[r].splice(s,1);else l[r].length=0}}function De(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function Ce(e,t,n,o,i){if(null==i&&"function"==typeof o&&(i=o,o=null),e=null==e?B.scroller.scrollLeft():e,t=null==t?B.scroller.scrollTop():t,U.direction===xn.Horizontal){if(e>B.viewport.width()){var a=he();if(e<a.width&&0<B.content.width()){var r=a.width-(B.edges[0].width()+B.content.width());B.edges[1].width(r)}}}else if(U.direction===xn.Vertical&&t>B.viewport.height()){var l=he();if(t<l.height&&0<B.content.height()){var s=l.height-(B.edges[0].height()+B.content.height());B.edges[1].height(s)}}B.scroller.stop(),!n||W.loading||W.scrollPos.x===e&&W.scrollPos.y===t?(B.scroller.scrollLeft(e),B.scroller.scrollTop(t),"function"==typeof i&&i.call()):pn.when(B.scroller.animate({scrollLeft:e,scrollTop:t},{duration:o||u,easing:"easeOutQuad",queue:!1})).done(i)}function Me(e,t){if(B.scroller.is(":animated"))return we("scrolling",t);var n=ge(q.number+e-1);Ce(n.width,n.height,!0,t)}function Ee(){if(B.scrollH&&B.scrollV){var e=x?1:N.document.getPageCount();if(B.scrollH.pauseEventPropagation(),B.scrollV.pauseEventPropagation(),U.direction===xn.Vertical){Ie(B.scrollH,"width");var t=x?rn():e-1,n=Math.round(ge(e-1).height+re(t).height);mn.Firefox&&(n+=Math.round(B.scrollH.scrollbarHeight())),B.scrollV.scrollSize(n-(B.scrollV.height()-B.scrollH.scrollbarHeight()-1)),3e4<n?(B.scrollV.ratio(n/(3e4-(B.scrollV.height()-B.scrollH.scrollbarHeight()-1))),B.scrollV._tray.height(3e4)):(B.scrollV._tray.height(n),B.scrollV.ratio(1)),Fe(B.scrollV)}else if(U.direction===xn.Horizontal){Ie(B.scrollV,"height");var o=x?rn():e-1,i=Math.round(ge(e-1).width+re(o).width);B.scrollH.scrollSize(i),3e4<i?(B.scrollH.ratio(i/(3e4-(B.scrollH.width()-B.scrollV.width()-1))),B.scrollH._tray.width(3e4)):(B.scrollH._tray.width(i),B.scrollH.ratio(1)),Fe(B.scrollH),He(o,null)}B.scrollV._max=Math.max(B.scrollV._tray.height()-B.scrollV.height(),0)+1,B.scrollH._max=Math.max(B.scrollH._tray.width()-B.scrollH.width(),0)+1,B.scrollH.resumeEventPropagation(),B.scrollV.resumeEventPropagation()}}function Se(e,t){if(U.direction===xn.Vertical){if(B.scrollV)if(B.scrollV.scrollSize(Math.max(B.scrollV._scrollSize+t,0)),1===B.scrollV._ratio&&B.scrollV._scrollSize+t<3e4)B.scrollV._tray.height(B.scrollV._tray.height()+t),B.scrollV._max=Math.max(B.scrollV._tray.height()-B.scrollV[0].clientHeight,0)+1;else{var n=B.scrollV.height()-B.scrollH.scrollbarHeight()-1,o=(3e4-n)*B.scrollV._ratio;3e4<o+t?B.scrollV.ratio((o+t)/(3e4-n)):Ee()}Fe(B.scrollV),Ie(B.scrollH,"width")}else if(U.direction===xn.Horizontal){if(B.scrollH)if(B.scrollH.scrollSize(Math.max(B.scrollH._scrollSize+e,0)),1===B.scrollH._ratio&&B.scrollH._scrollSize+e<3e4)B.scrollH._tray.width(B.scrollH._tray.width()+e),B.scrollH._max=Math.max(B.scrollH._tray.width()-B.scrollH[0].clientWidth,0)+1,B.scrollH.ratio(B.scrollH._scrollSize/B.scrollH._max);else{var i=B.scrollH.width()-B.scrollV.width()-1,a=(3e4-i)*B.scrollH._ratio;3e4<a+e?B.scrollH.ratio((a+e)/(3e4-i)):Ee()}Fe(B.scrollH),Ie(B.scrollV,"height")}if((0!==e||0!==t)&&0!==t){var r=B.scroller[0].scrollLeft,l=B.scroller[0].scrollTop;Ue(x?rn()+1:ce(r,l)+1),cn({type:"scroll",x:r,y:l,dx:0,dy:0})}}function Ie(e,t){if(e&&B.pageDivs.length){var n=Math.round(q.size[t]*U.zoom);if(U.tabular)n=B.content[t]();else for(var o=x?1:B.pageDivs.length,i=0;i<o;i++)null!=B.pageDivs[i]._index&&(n=Math.max(re(B.pageDivs[i]._index)[t],n));e._tray[t](n),e.scrollSize(n-e[t]()),Fe(e),e.ratio(1)}}function Fe(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}var Ae=!1;function Oe(e){if(!W.zooming&&!W.scrollBuffer&&B.pageDivs.length){var t=(new Date).getTime(),a=B.scroller[0].scrollLeft,r=B.scroller[0].scrollTop;if(!W.loading){if(!x){var n=a+B.scroller[0].clientWidth,o=r+B.scroller[0].clientHeight,i=se(a,r)+1,l=Math.abs(i-q.number)/me(),s=N.document.getPageCount(),c=B.pageDivs[0]._index,u=B.pageDivs[B.pageDivs.length-1]._index,d=0===l&&(q.number-1<c||q.number-1>u);if(l<B.pageDivs.length&&!d)ze(B.edges[1][0],B.scroller[0],a,r,n,o)&&u<s-1?Be(l):ze(B.edges[0][0],B.scroller[0],a,r,n,o)&&0<c?je(l):i!==q.number&&null===at(i-1)&&qe(i);else{var h=B.scroller[0].scrollLeft,f=B.scroller[0].scrollTop;We(i,Ae=!1,null),U.direction===xn.Vertical&&h!==B.scroller[0].scrollLeft&&(B.scroller.scrollLeft(h),Ae=!0),U.direction===xn.Horizontal&&f!==B.scroller[0].scrollTop&&(B.scroller.scrollTop(f),Ae=!0)}}wt()}if(Ue(x?q.number:ce(a,r)+1),!B.scroller.propagationPaused()&&B.scrollH&&B.scrollV){var g=Math.round(a/B.scrollH._ratio),p=Math.round(r/B.scrollV._ratio);g!==B.scrollH.scrollLeft()&&(B.scrollH.pauseEventPropagation(!0),B.scrollH.scrollLeft(g)),p!==B.scrollV.scrollTop()&&(B.scrollV.pauseEventPropagation(!0),B.scrollV.scrollTop(p))}cn({type:"scroll",x:a,y:r,dx:a-W.scrollPos.x,dy:r-W.scrollPos.y}),e&&(W.scrollTimeout&&clearTimeout(W.scrollTimeout),W.scrollTimeout=setTimeout(function(){var e,t,n,o,i;e=a,t=r,n=B.scroller[0].scrollLeft,o=B.scroller[0].scrollTop,i=n===W.scrollPos.x&&o===W.scrollPos.y,e===W.scrollPos.x&&t===W.scrollPos.y&&i?(Wt(),W.scrollTimeout=null,W.loading||wt()):i?i&&Ae?Math.abs(e-W.scrollPos.x)<3&&Math.abs(t-W.scrollPos.y)<3&&(Wt(),W.scrollTimeout=null,W.loading||wt()):i&&L&&q.buffer===U.maxpagebuffersize&&(Wt(),W.scrollTimeout=null,W.loading||wt()):(Oe({}),W.scrollTimeout=null)},500),W.scrollPos.x=B.scroller[0].scrollLeft,W.scrollPos.y=B.scroller[0].scrollTop,W.scrollPos.t=t),W.scrollBuffer=e?setTimeout(Ve,50):null}}function Ve(){null!==W.scrollBuffer&&(clearTimeout(W.scrollBuffer),W.scrollBuffer=null)}function Le(){if(U.direction===xn.Horizontal){var e=B.pageDivs.length?(L?Math.max(q.size.height,q.size.width):q.size.height)*U.zoom:0;U.thumbpadding&&"number"==typeof U.thumbpadding&&(e+=2*U.thumbpadding),B.edges[0].height(e),B.edges[1].height(e)}}function He(e,t){t=t||0===t?t:e+B.pageDivs.length-1,t=Math.max(e,t);var n=U.tabular?me():1,o=U.tabular?(Math.floor(t/n)+1)*n-t:1,i=ge(e),a=x?1:N.document.getPageCount();x&&(t=e=0);var r=t<a?re(t):{width:0,height:0},l=x?rn():a-1,s=t<a-n?re(l):{width:0,height:0},c=pe(e,t);c.width+=r.width,c.height+=r.height;var u=pe(t+1,a-1);if(u.width+=s.width,u.height+=s.height,U.direction===xn.Vertical)B.edges[0].height(i.height),(x?a:N.document.getPageCount())<=t+o?B.scrollH&&0===B.scrollH._tray[0].offsetWidth?B.edges[1].height(B.scrollH[0].offsetHeight-1):B.edges[1].height(0):(B.edges[1].height(u.height),mn.Chrome&&B.content.height(""));else if(U.direction===xn.Horizontal){if(B.edges[0].width(i.width),(x?a:N.document.getPageCount())<=t+o){var d=i.width+c.width+u.width;B.scrollV&&d>B.scroller[0].clientWidth&&B.content.height()<=B.scroller[0].clientHeight?B.scrollV._explicitSize?B.edges[1].width(B.scrollV.height()<B.scrollV._tray.height()?B.scrollV.width():0):B.edges[1].width(B.scrollV.width()):B.edges[1].width(0)}else B.edges[1].width(u.width),B.edges[1].height(1)}}function Re(){return W.activepage}function je(e){if(e=e||1,x)Ne(rn()-e);else if(0===W.prpr&&0<B.pageDivs.length){var t=me(U.zoom);Qe();for(var n=e;0<n;n--){var o=B.pageDivs[0]._index-t;if(0<=o&&o<N.document.getPageCount()){for(var i=t-1;0<=i;i--){var a=tt(-1);Xe(a),B.content.prepend(a),Ye(a,ot(o+i),o+i)}He(o,null),Le()}}setTimeout(Ke,10)}}function Be(e){if(e=e||1,x){Ne(rn()+e)}else{var t=B.pageDivs[B.pageDivs.length-1]._index+1;if(0===W.prpr&&0<B.pageDivs.length&&t<N.document.getPageCount()){Qe();for(var n=me(U.zoom),o=N.document.getPageCount(),i=e;0<i;i--){var a=B.pageDivs[B.pageDivs.length-1]._index+1;if(a<o){for(var r=a+n-1-B.pageDivs.length,l=0;l<n;l++){var s=tt(1);Xe(s),B.content.append(s),Ye(s,ot(a+l),a+l)}He(r+1,a),Le()}}setTimeout(Ke,10)}}}
/**
   * Scrolls the viewer to the given page index and executes the callback when finished.
   * @param {number} index - Index of the page to show.
   * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
   *  @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPage
   */function Ne(e,t){qe(e+1,t)}
/**
   * Scrolls the viewer to the given page number and executes the callback when finished.
   * @param {number} pageNumber - Number of the page to show. Note that page number is expected 1-based.
   * @param {NotificationCallback} [callback]: function to execute after this operation is done
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPageNumber
   * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer#showPage|showPage} instead.
   */function qe(e,t){var n=this;if(U.direction===xn.Vertical?B.scrollV&&clearTimeout(B.scrollV._tooltip._timeout):U.direction===xn.Horizontal&&B.scrollH&&clearTimeout(B.scrollH._tooltip._timeout),e=Math.max(1,e),e=Math.min(N.document.getPageCount(),e),x)We(e,!1,t);else{if(L||W.zooming||(W.scrollTarget.Page=e),q.number!==e){var o=e-q.number;Math.abs(o)<B.pageDivs.length?Me(o,t):We(e,!0,t)}else Me(0,t);setTimeout(function(){return Bn(this,n),W.scrollTarget.Page=0}.bind(this),1e4)}}function We(e,t,n){var o=N.document.getPageCount(),i=e-1;if(0===W.prpr&&0<o){var a=function(){x?(Ee(),Ke()):Ke(!t),"function"==typeof n&&n.call()};if(Qe(),x){if(U.direction===xn.Vertical){var r=ge(0).height;B.edges[0].height(r)}else if(U.direction===xn.Horizontal){var l=ge(0).width;B.edges[0].width(l)}He(0,null),Le(),Ze();for(var s=0;s<B.pageDivs.length;s++)Ye(B.pageDivs[s],null,i+s);B.content.append(B.pageDivs[0]),Wt(),Ue(i+1),wt(!1,a)}else{var c=0,u=0,d=i<=0?0:i;if(d+B.pageDivs.length>=o){if(d=o-B.pageDivs.length,U.tabular){var h=me();d=Math.ceil(d/h)*h}d=Math.max(d,0)}if(U.direction===xn.Vertical){c=ge(d).height,B.edges[0].height(c),He(d,null),Le(),Ze();for(var f=0;f<B.pageDivs.length;f++)B.content.append(B.pageDivs[f]),Ye(B.pageDivs[f],null,d+f);var g=ge(Math.max(i,0)).height,p=q.number<e?-q.size.height:q.size.height;t&&g!==W.scrollPos.y?(Ce(null,g+p,!1),Ce(null,g,!0,a)):a.call()}else if(U.direction===xn.Horizontal){u=ge(d).width,B.edges[0].width(u),He(d,null),Le(),Ze();for(var v=0;v<B.pageDivs.length;v++)B.content.append(B.pageDivs[v]),Ye(B.pageDivs[v],null,d+v);var m=ge(Math.max(i,0)).width,b=q.number<e?-q.size.width:q.size.width;t&&m!==W.scrollPos.x?(Ce(m+b,null,!1),Ce(m,null,!0,a)):a.call()}}}else we("paused",n)}function Ue(e){var t=N.document.getPageCount();if(0<e&&e<=t){if(q.number!==e||q.numberoutof!==t){if(B.pageLabel.html(e+" / "+t),q.number!==e){q.number=e;for(var n=0;n<B.pageDivs.length;n++){var o=B.pageDivs[n];o._index===e-1?o.addClass(zn.atala_active_page):o.removeClass(zn.atala_active_page)}cn({type:"pagenumberchanged",number:q.number})}q.numberoutof!==t&&(q.numberoutof=t)}}else B.pageLabel.html(""),B.viewport.find("."+zn.atala_active_page).removeClass(zn.atala_active_page),q.numberoutof=0}function Ze(){for(var e=B.pageDivs.length-1;0<=e;e--)Xe(B.pageDivs[e])}function Xe(e){mn.Explorer&&document.activeElement&&e.has(document.activeElement).length&&B.scroller.focus(),U.allowannotations&&(mn.Firefox||mn.Edge)&&N.annotations.__clearAllSelection(e),U.tiling&&e._img&&0<=e._img._cacheIndex&&(B.loadedImgs[e._img._cacheIndex]._needToInsert=!0),e.detach(),null!=e._img&&(e._img._page=null,e._img.getDomElement().detach(),e._img=null),cn({type:"pagerecycled",index:e._index,page:e}),e.removeAttr(kn.atala_page_index)}function Ge(e){Xe(e),e._index=-1,e.removeAttr(kn.atala_page_index),e._img=null,e.remove()}function Ye(t,e,n,o){if(t._index===n&&t._img===e&&!o)return!1;if(o&&!t.nullinserted&&n<0)return!1;if(e&&t._index===n&&!e._needToInsert)return!1;t._index=n,t.attr(kn.atala_page_index,n);var i=L?"Thumbnailer page number "+(n+1):"Viewer page number "+(n+1);(t.attr("role","img").attr("aria-label",i),t._paper)&&pn(t._paper.canvas).attr("aria-hidden","true");if(n>=N.document.getPageCount())return t.hide(),!1;if(t._img&&t._img!==e&&(t._img._page=null,0<t.has(t._img.getDomElement()).length&&t._img.getDomElement().detach(void 0,!0)),t._rubberband&&t._rubberband.reset(),t._img=e,t._img&&((t._img._page=t)._img.attr("alt",i),mn.Firefox&&L&&t._img.attr("aria-hidden","true")),t.css({display:U.tabular||U.direction===xn.Horizontal?"inline-block":"block",position:"relative"}),U.showpagenumber&&(t._num||(t._num=pn('<div class="atala_pg_num"/>'),t._num.addClass(zn.atala_page_number),t.append(t._num)),t._num.text(t._index+1)),t._img&&t._img._binds&&(t._img._binds.pageresize||(t._img._binds.pageresize=function(e){cn({type:"pageresize",page:e.image._page,image:e.image,index:e.image._page?e.image._page._index:N.document.getPageIndexByImageIndex(e.image._index),width:e.width,height:e.height})},t._img.on({pageresize:t._img._binds.pageresize})),t._img._binds.pagesizechanged||(t._img._binds.pagesizechanged=function(e){cn({type:"pagesizechanged",page:t,image:e.image,index:e.index,width:e.width,height:e.height,dx:e.dx,dy:e.dy})},t._img.on({pagesizechanged:t._img._binds.pagesizechanged}))),t._img){var a=t._img.getDomElement();if(t.append(a),t._img.trigger({type:"inserted",page:t}),!t._img._loaded)if(t.nullinserted)if(!L&&U.tiling&&U.forcepagefit){var r,l=t.width(),s=t.height();U.fitting===yn.Width?(r=(l=Math.ceil(q.size.width*U.zoom))/t.width(),s=Math.ceil(t.height()*r)):U.fitting===yn.Height&&(r=(s=Math.ceil(q.size.height*U.zoom))/t.height(),l=Math.ceil(t.width()*r)),t._img.css({width:l,height:s}),N.document.setPageFitMultiplier(t._index,r)}else t._img.css({width:t.width(),height:t.height()});else Je(t._img,t._index);W.newpagedivsize||t.css({width:"",height:""}),t.nullinserted=!1}else t.nullinserted=!0,W.newpagedivsize||Je(t,t._index);return cn({type:"pageshown",page:t,index:t._index}),!0}function Je(e,t){var n=re(t,null,!1);e.css({width:n.width,height:n.height})}function Qe(){W.prpr++}function Ke(e){0!==W.prpr&&(W.prpr--,0!==W.prpr||e||Oe())}function $e(){W.itch=!0}function et(){W.itch=!1}function tt(e){return 0<e?(ke(B.pageDivs,0,B.pageDivs.length-1),B.pageDivs[B.pageDivs.length-1]):(ke(B.pageDivs,B.pageDivs.length-1,0),B.pageDivs[0])}
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
function nt(e,t){var n=pn.Deferred();0<=e.cacheIndex&&B.loadedImgs[e.cacheIndex]?B.loadedImgs[e.cacheIndex].invalidate(t,function(){n.resolve()}):n.resolve();return n.promise()}function ot(e,t,n){"function"==typeof t&&(n=t,t=void 0);var o=N.document.getPageDefinition(e);if(o){if(o.cacheIndex<0||!B.loadedImgs[o.cacheIndex]){var i=W.nextImageCacheIndex++;o.cacheIndex=i,N.document.setPageCacheIndex(e,i),B.loadedImgs[i]=K(o.index,o.ref,t,function(e){e&&((B.loadedImgs[i]=e)._cacheIndex=i,N.memory.allocate(e)),"function"==typeof n&&n.call()}),U.allowtext&&N.text&&!L&&N.text.ensurePageTextLoaded(e)}else"function"==typeof n&&n.call();return B.loadedImgs[o.cacheIndex]}}function it(e){var t=at(e);if(t){var n=B.scroller[0].scrollLeft,o=B.scroller[0].scrollTop;return ze(t[0],B.scroller[0],n,o,n+B.scroller[0].clientWidth,o+B.scroller[0].clientHeight)}return!1}function at(e){for(var t=null,n=0;n<B.pageDivs.length&&null===t;n++)B.pageDivs[n]._index===e&&(t=B.pageDivs[n]);return t}function rt(r,l,s,c,u){var d=this;c&&"function"==typeof c&&(u=c,c=!1);var e=function(){var e=this;Bn(this,d);var t,n=x?B.pageDivs[0]:at(r);if(n){var o=B.scroller[0].scrollLeft,i=B.scroller[0].scrollTop;if((t=ue(n[0],B.scroller[0])).left+=l.x,t.top+=l.y,!c&&t.left>=o&&t.left<=o+B.scroller[0].clientWidth&&t.top>=i&&t.top<=i+B.scroller[0].clientHeight)return void(u&&u())}else(t=ge(x?0:r)).left=t.width+l.x,t.top=t.height+l.y;var a={x:B.scroller[0].clientWidth/2,y:B.scroller[0].clientHeight/2};lt(s,_n.BottomLeft)?(a.x=B.scroller[0].clientWidth,a.y=B.scroller[0].clientHeight):lt(s,_n.TopLeft)&&(a.x=0,a.y=0),W.scrollTarget.Page=r+1,W.scrollTarget.dx=l.x-a.x,W.scrollTarget.dy=l.y-a.y,Ce(t.left-a.x,t.top-a.y,!0,u),setTimeout(function(){Bn(this,e),W.scrollTarget.Page=0,W.scrollTarget.dx=0,W.scrollTarget.dy=0}.bind(this),1e4)}.bind(this);x&&r!==rn()?We(r+1,!1,e):e()}function lt(e,t){return e&&t&&e.x===t.x&&e.y===t.y}var st,ct=null;function ut(){ct&&clearTimeout(ct),ct=setTimeout(function(){cn("documentchanged")},200)}function dt(){B.scroller.stop(),B.scroller.pauseEventPropagation(),Qe(),U.tiling&&$e()}function ht(){Ee();var e=x?rn():N.document.getPageCount()-1;0<B.pageDivs.length&&it(e)&&He(B.pageDivs[0]._index),Le(),B.scroller.resumeEventPropagation(),Ke()}function ft(){W.zooming=!0,dt(),cn("zoomstarted")}function gt(e){var t,n,o,i,a,r,l;e=Math.min(e,ae()),e=Math.max(e,ie()),t=e,n=!1,i=ge(q.number,null,null),a=ge(q.number,null,null,t),r=(B.scroller.scrollLeft()-i.width)/U.zoom*t,l=(B.scroller.scrollTop()-i.height)/U.zoom*t,Ce(a.width+r,a.height+l,n,H,o),U.zoom=e,wt(!1),yt(e,!1)}function pt(){W.zooming=!1,ht(),cn({type:"zoomchanged",zoom:U.zoom})}
/**
   * Asynchronously zooms the viewer to the given zoom over the default zoom duration
   * @param {number} zoom - Desired zoom level to zoom to.
   * @param {NotificationCallback} [callback] - function to execute after the zoom is finished animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoom
   */function vt(e,n){var o=this;if(W.zooming)we("zooming",n);else if(W.zooming=!0,dt(),cn("zoomstarted"),e!==U.zoom){e=Math.min(e,ae()),e=Math.max(e,ie());var t=x?0:q.number,i=ge(t,null,null),a=ge(t,null,null,e),r=(B.scroller.scrollLeft()-i.width)/U.zoom*e,l=(B.scroller.scrollTop()-i.height)/U.zoom*e;U.zoom=e,wt(!0,function(){var t=this;Bn(this,o),yt(e,!0,function(){var e=this;Bn(this,t),mt(),Ce(a.width+r,a.height+l,!1,H,function(){Bn(this,e),B.scrollH&&B.scrollH.scrollLeft(B.scroller.scrollLeft()),B.scrollV&&B.scrollV.scrollTop(B.scroller.scrollTop()),null!=n&&n()}.bind(this))}.bind(this))}.bind(this))}else mt(),"function"==typeof n&&n.call()}function mt(){W.zooming=!1,ht(),cn({type:"zoomchanged",zoom:U.zoom})}function bt(e,t){vt(U.zoom+(e?-1:1)*U.zoom*.3,t)}function xt(){B.edges[0]._z=U.zoom}function yt(e,t,n){if(0<B.edges.length){n="function"==typeof n?(s=[xt,n],function(){for(;s.length;){var e=s.shift();e&&e.apply(this,arguments)}}):xt;var o=U.direction===xn.Vertical,i=B.pageDivs[0]&&B.pageDivs[0]._img?B.pageDivs[0]._index:0;x&&(i=0);var a=ge(i,null,null,e),r=o?a.height:a.width;if(t&&!W.loading){var l=o?{height:r}:{width:r};B.edges[0].animate(l,{duration:H,easing:"easeOutQuad",complete:n,queue:!1})}else o?B.edges[0].height(r):B.edges[0].width(r),"function"==typeof n&&n.call();_t()}var s}function _t(u){setTimeout(function(){var e=pn("<canvas/>");u=u||U.zoom;var t=U.direction===xn.Vertical,n=W.newpagedivsize?W.newpagedivsize:{width:q.size.width*u,height:q.size.height*u},o=Math.max(1,U.pagespacing),i=me();e[0].width=(n.width+o)*(t?i:1),e[0].height=n.height*(t?1:i);var a=e[0].getContext("2d");a.lineWidth=U.pageborderwidth,U.backcolor&&(a.fillStyle=U.backcolor);for(var r=0;r<i;++r){var l=t?1+r*n.width:1,s=t?1:1+r*n.height;a.strokeRect(l,s,n.width-2,n.height-2),U.backcolor&&a.fillRect(l+a.lineWidth,s+a.lineWidth,n.width-2*(1+a.lineWidth),n.height-2*(1+a.lineWidth))}var c={backgroundSize:"auto auto",backgroundRepeat:t?"repeat-y":"repeat-x"};B.edges[0].css(c),B.edges[1].css(c)},0)}function wt(e,t){for(var n=0,o=!0,i=function(){if(--n<=0){if(U.direction===xn.Horizontal){var e=he().width;B.spacer||(B.spacer=X(),B.spacer.css({position:"absolute",top:"-1px",height:"1px"}),B.viewport.append(B.spacer)),B.spacer.width(e)}"function"==typeof t&&t.call(),0===W.prpr&&(mn.Safari||mn.Chrome)&&B.edges[1].hide().show()}},a=0;a<B.pageDivs.length;a++){if(B.pageDivs[a]._img)(B.pageDivs[a]._img.needsZoom()||B.pageDivs[a]._img.needsRotate())&&(o=!1,n++,B.pageDivs[a]._img.needsRotate()?B.pageDivs[a]._img.rotate(i):B.pageDivs[a]._img.needsZoom()&&B.pageDivs[a]._img.zoom(e,i))}o&&i.call()}
/**
   * Asynchronously zooms the viewer to fit to a page.
   * @param {Atalasoft.Utils.Fitting} fit - Type of fitting to fit the page to.
   * @param {number} pageNumber - Page number to fit to.  Note, that it's 1-based.
   * @param {NotificationCallback} callback - Function to execute after the fit is done animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function fit
   */function zt(e,t,n){null!=t?"function"==typeof t&&(n=t,t=q.number):t=q.number;var o=kt(e,t-1),i=o.zoom,a=yn.Width===o.fit&&xn.Vertical===U.direction,r=yn.Height===o.height;a&&Ce(0,null,!1),r&&Ce(null,0,!1),vt(i,n)}function kt(e,t){var n,o,i,a=(n=_e(),o=U.showpageborder?2*U.pageborderwidth:0,i={width:n.width-o,height:n.height-o},U.tabular&&(1<U.columns&&(i.width=Math.floor((n.width-(U.pagespacing+o)*U.columns)/U.columns)),1<U.rows&&(i.height=Math.floor((n.height-(U.pagespacing+o)*U.rows)/U.rows))),i),r=le(t,1,!1);0!==r.width&&0!==r.height||(e=null);var l=U.zoom;switch(e){case yn.None:break;case yn.Best:e=r.width/a.width>r.height/a.height?(l=a.width/r.width,yn.Width):(l=a.height/r.height,yn.Height);break;case yn.Height:l=a.height/r.height;break;case yn.Width:l=a.width/r.width;break;default:l=1,e=yn.None}return{zoom:l,fit:e}}function Pt(e){return U.zoom*N.document.getPageFitMultiplier(e)}function Tt(e){return N.document.getPageRotation(e)}function Dt(e,t){t=t||0;var n=Tt(e),o=Pt(e),i=be(e,t),a=vn.matrix();a.scale(o,o,0,0),a.rotate(n+t,0,0);var r,l,s=(r=a,l={x:i.width,y:i.height},{x:r.x(l.x,l.y),y:r.y(l.x,l.y)}),c=Math.min(0,s.x),u=Math.min(0,s.y),d=a.invert(),h=d.x(-c,-u),f=d.y(-c,-u);return a.translate(h,f),a}function Ct(e){var t=pn.data(e.currentTarget,"_config"),n=pn.data(e.currentTarget,"_annoConfig");!n&&t&&(n={type:t.icon,rotatable:U.showrotatetools}),n&&(N.mouseTool.setTool(bn.None,bn.None),N.annotations.drawAnnotation(n,!1,Et,Mt))}function Mt(){N.mouseTool.setTool(bn.Pan,bn.None)}function Et(){N.mouseTool.setTool(bn.Pan,bn.None)}
/**
   * Checks whether annotations support is enabled.
   * @private
   */function St(){return!1===U.allowannotations&&Z("InitError",'The "allowannotations" property in the WebDocumentViewer config is set to false.'),U.allowannotations}function It(){for(var e=0;e<B.pageDivs.length;e++)B.pageDivs[e]._draw.toFront()}function Ft(){for(var e=0;e<B.pageDivs.length;e++)B.pageDivs[e]._draw.reset()}function At(e,t,n){if(e){if(W.loading=!0,Ze(),q.size.width=e.pagewidth,q.size.height=e.pageheight,q.count=e.pagecount,q.buffer=U.pagebuffersize,q.dpi=e.dpi,q.vector=!0===e.vector,U.allowannotations=n.allowannotations,U.textAnnotationEditorIgnoredKeyCodes=n.textAnnotationEditorIgnoredKeyCodes,U.multiprocessing=n.multiprocessing,U.allowforms=n.allowforms,U.allowtext=n.allowtext,U.tiling=n.tiling,U.documenturl=n.documenturl,U.annotationsurl=n.annotationsurl,U.formsurl=n.formsurl,N.document.__linkChanges(t),N.annotations&&(N.annotations.clear(),N.annotations.loadAnnotations(e)),N.forms&&(N.forms.clear(),e.forms&&N.forms.loadForms(e)),N.text&&B.search&&B.search.ClearSearch(),n.showbookmarks&&(0<N.document.getBookmarks().length?pn("."+zn.atala_tool_button_bookmarks).button("enable"):gn(),s={top:0,left:0,expanded:[]}),W.scrollTarget.Page=0,W.scrollTarget.dx=0,W.scrollTarget.dy=0,W.zooming=!1,e.zoom)U.zoom=e.zoom;else{var o=kt(U.fitting,0);U.zoom=o.zoom}Rt(e.pagenumber||0),N.mouseTool.setTool(U.mousetool.type&&!L?U.mousetool.type:bn.Pan,bn.None),_t(),W.loading=!1,wt(),Y=t.__getSelectedPagesIndices,cn({type:"activedocumentchanged"})}}function Ot(e,t){t&&Qt(!0);for(var n=0;n<e._controllers.document.getPageCount();++n){var o=e._controllers.document.getPageDefinition(n,y);o&&0<=o.cacheIndex&&B.loadedImgs[o.cacheIndex]&&(N.memory.deallocate(B.loadedImgs[o.cacheIndex]),B.loadedImgs[o.cacheIndex].dispose(),B.loadedImgs[o.cacheIndex].remove(),B.loadedImgs[o.cacheIndex]=void 0)}}function Vt(e,o){W.loading=!0;var t={atala_docurl:U.documenturl,atala_pagebuffer:U.pagebuffersize,atala_minwidth:U.minwidth,atala_tiling:U.tiling,atala_bookmarks:U.showbookmarks};L&&(t.atala_thumb=L,t.atala_capt_format=U.thumbcaptionformat),U.tiling&&B.scroller.addClass(zn.atala_page_loading),null!=e&&("function"==typeof e&&(o=e,e=null),pn.extend(t,e)),Yt({type:"docinfo",serverurl:U.serverurl,query:"?ataladocinfo=",method:"GET",data:t,cancel:!1,info:{pagewidth:-1,pageheight:-1,pagecount:-1}},function(e){Lt(e,o)},function(e,t,n){!function(e,t,n,o){if(U.tiling&&B.scroller.removeClass(zn.atala_page_loading),e.responseText){var i=e.responseText.substr(e.responseText.indexOf("</html>")+7);0<=i.indexOf("\x3c!--")?0<(i=i.replace("\x3c!--","").replace("--\x3e","")).length&&(n="<pre>"+i+"</pre>"):0<e.responseText.indexOf("web.config")&&0<e.responseText.indexOf("customErrors")&&(n+=": web.config customErrors attribute has disabled remote error messages.")}Z("DocumentLoadError",n),"function"==typeof o&&o.call(void 0,n)}(e,0,n,o)})}function Lt(n,o){var e,t;(U.tiling&&B.scroller.removeClass(zn.atala_page_loading),n&&!1!==n.licensed)?(n.docurl&&(U.documenturl=n.docurl),n.annourl&&(U.annotationsurl=n.annourl),n.formurl&&(U.formurl=n.formurl),q.size.width=n.pagewidth,q.size.height=n.pageheight,q.count=n.pagecount,q.buffer=U.pagebuffersize,q.dpi=n.dpi,q.vector=!0===n.vector,q.caption=n.thumbcaptionformat||(U.showthumbcaption?"{0}":""),de.zero(),N.memory.clearEntries(),N.memory.colorDepth=n.colordepth,N.memory.pageSize={width:n.pagewidth,height:n.pageheight},cn({type:"documentinfochanged",info:{count:q.count,dpi:q.dpi,size:{height:q.size.height,width:q.size.width},vector:q.vector,pagesizes:n.pagesizes,bookmarks:n.bookmarks},customData:n.customData}),N.text&&(N.text.clear(),B.search&&B.search.ClearSearch(),n.text&&N.text.loadText(n)),W.loading&&(!0===h?U.zoom=1:h=!0,Q(),Ce(0,0),B.scrollV&&B.scrollV.pageNum(1),Ue(1),zt(U.fitting,1,function(){if(Le(),He(0,B.pageDivs.length-1),x){for(var e=0;e<B.pageDivs.length&&e<q.count;e++)Ye(B.pageDivs[e],null,e);B.content.append(B.pageDivs[0])}else for(var t=0;t<B.pageDivs.length&&t<q.count;t++)B.content.append(B.pageDivs[t]),Ye(B.pageDivs[t],null,t);0<B.pageDivs.length&&B.pageDivs[0].addClass(zn.atala_active_page),n.layers&&n.layers.length?N.annotations.loadAnnotations(n):U.annotationsurl&&N.annotations&&N.annotations.clear(),N.forms&&(N.forms.clear(),n.forms&&N.forms.loadForms(n)),N.mouseTool.setTool(U.mousetool.type&&!L?U.mousetool.type:bn.Pan,bn.None),W.loading=!1,_t(),"function"==typeof o&&o(n.error,n),n.error&&setTimeout(function(){Z("DocumentLoadError",n.error)},0)})),W.loading=!1):(t=n&&!1===n.licensed?(e="LicenseException",n.error?n.error:"LicenseException: Handler was unable to find a valid license."):(e="DocumentLoadError","HandlerException: Handler did not return any data."),W.loading=!1,"function"==typeof o&&o.call(void 0,t),e&&t&&Z(e,t))}function Ht(){Rt()}function Rt(e){if(Q(),0<B.pageDivs.length){var t=N.document.getPageCount(),n="number"==typeof e?e:B.pageDivs[0]._index;n=0<=n?Math.min(n,t-B.pageDivs.length):0;for(var o=0;o<B.pageDivs.length&&o<t;o++){var i=n+o;Xe(B.pageDivs[o]),Ye(B.pageDivs[o],null,i),x&&0<o||B.content.append(B.pageDivs[o])}}if(He(0<B.pageDivs.length?B.pageDivs[0]._index:0,null),Le(),Wt(),Ee(),fe(),x){Ue((0<B.pageDivs.length?B.pageDivs[0]._index:0)+1)}else{var a=ce(B.scroller[0].scrollLeft,B.scroller[0].scrollTop);Ue(a+1),0<=e&&a!==e&&Ne(e)}}function jt(e,t){var n={atala_docurl:U.documenturl,atala_spath:U.savepath};function o(e){!function(e){e.error?Z("DocumentSaveError",e.error):Pe("DocumentSave: success="+e.success);cn({type:"documentsaved",success:e.success,customData:e.customData,fileName:e.fileName})}(e),"function"==typeof t&&t.call()}pn.extend(n,e),Yt({type:"docsave",serverurl:U.serverurl,query:"?ataladocsave=",method:"POST",data:n,cancel:!1,info:{success:void 0,error:void 0}},o,function(e){var t=[];t.error=e.responseText,o(t)})}function Bt(e,t,n){var o=null;return"string"==typeof e?(o={},W.initialized&&n&&(0<e.length?(n.clear(),o=n.createHandlerRequest(U.serverurl,e,t)):0===e.length&&n.clear()),o.url=e):void 0!==e&&null!=e&&Z("openUrlError","string input expected for url."),o}function Nt(){ln({annotationsloaded:Xt})}function qt(){ln({formsloaded:Gt})}function Wt(e){if(!(0<B.pageDivs.length&&void 0===B.pageDivs[0]._index))for(var t=0;t<B.pageDivs.length;t++)Zt(B.pageDivs[t],e)}function Ut(e,t){var n=at(e);n&&Zt(n,t)}function Zt(e,t){(Ye(e,ot(e._index),e._index)||t)&&(N.annotations&&N.annotations.showLayer(e._index,e),N.forms&&!L&&N.forms.showLayer(e._index,e),N.text&&!L&&U.allowtext&&N.text.showLayer(e._index,e))}function Xt(e){e.error&&(Z("AnnotationsLoadError",e.error),U.annotationsurl=""),N.annotations&&sn({annotationsloaded:Xt})}function Gt(e){e.error&&(Z("FormsLoadError",e.error),U.formsurl=""),N.forms&&sn({formsloaded:Gt})}function Yt(o,t,i,n){var a,r,e,l=this,s=(a=o,r=function(e){t(e.request.info)},ln({handlerreturned:e=function e(t){t.request===a&&(sn({handlerreturned:e}),"function"==typeof r&&r.call(this,t))}}),e);if(cn({type:"beforehandlerrequest",request:o}),!o.cancel&&(sn({handlerreturned:s}),o.serverurl&&!pn.isEmptyObject(o.data))){if(!(o.info instanceof pn&&"docpage"===o.type)){if("fileupload"!==o.type)return pn.ajax({type:o.method,url:o.serverurl+o.query+"?",dataType:"json",data:o.data,success:t,error:i,crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0});var c="&"+pn.param(o.data),u=new FormData;u.append("file",o.file,o.file.name);var d=pn.ajax({type:o.method,url:o.serverurl+o.query+"??"+c,dataType:"json",data:u,contentType:!1,processData:!1,success:function(e){Bn(this,l),e.success&&(e.success=JSON.parse(e.success)),e.canceled&&(e.canceled=JSON.parse(e.canceled)),t(e,o.file.name)}.bind(this),error:function(e,t,n){Bn(this,l),i(t,n,o.file.name)}.bind(this),crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0,xhr:function(){var t=this;Bn(this,l);var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){Bn(this,t),e.lengthComputable&&(n(o.file.name,e.loaded,e.total)||d.abort())}.bind(this),!1),e}.bind(this)});return d}o.info.attr("src",o.serverurl+o.query+"&"+pn.param(o.data))}}
/**
   * Resets the viewer to its default state.
   * @param {OpenUrlCallback} [callback]  - Function to execute when the empty process is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function empty
   */
function Jt(e){W.loading=!0;Qt(),Lt({pagewidth:0,pageheight:0,pagecount:-1},function(){Ee(),cn({type:"documentunloaded"}),"function"==typeof e&&e.call()})}function Qt(e){var t;W.initialized&&(Ze(),Q(0),e||function(){for(var e=0;e<B.loadedImgs.length;e++)B.loadedImgs[e]&&(B.loadedImgs[e].dispose(),B.loadedImgs[e].remove());B.loadedImgs.length=0}(),B.edges[0].width(0).height(0),B.edges[1].width(0).height(0),B.scrollH&&(B.scrollH.scrollSize(0),Fe(B.scrollH)),B.scrollV&&(B.scrollV.scrollSize(0),Fe(B.scrollV)),x&&Ue(1),t={backgroundImage:"",backgroundSize:"",backgroundRepeat:"",backgroundColor:""},B.edges[0].css(t),B.edges[1].css(t))}
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
function Kt(){return W.initialized}
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
function $t(e,t){var n=U.direction===xn.Vertical?me():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),Me(e,t)}
/**
   * Scrolls to the previous viewable page.
   * @param {number} n - Number of pages to scroll backward.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function previous
   */function en(e,t){var n=U.direction===xn.Vertical?me():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),Me(-e,t)}
/**
   * Zooms in one level.
   * @param {NotificationCallback} [callback] - Function to execute when the zoom operation is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomIn
   */function tn(e){bt(!1,e)}
/**
   * Zooms out one level.
   * @param  {NotificationCallback} [callback] - Function to execute when the zoom operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomOut
   */function nn(e){bt(!0,e)}
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
   */function on(e,t,n,o){null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null));var i=0,a=!1,r=Bt(t,e,N.annotations),l=Bt(n||e,e,N.forms);U.annotationsurl=r?r.url:U.annotationsurl,U.formsurl=l?l.url:U.formsurl;var s,c,u,d,h=function(e,t){--i<=0&&(Wt(!0),cn({type:"documentloaded",customData:null==t?void 0:t.customData}),"function"==typeof o&&o.call(void 0,e,t))};if("string"==typeof e){if(0===e.length)Jt(h);else if(U.documenturl=e,W.initialized){Qt(),ee(B.scrollH),ee(B.scrollV),i++;var f={};U.allowannotations&&r&&r.data&&(Nt(),pn.extend(f,r.data)),U.allowforms&&l&&l.data&&(qt(),pn.extend(f,l.data)),a=!0,Vt(f,h)}}else!(e||!(0<U.documenturl.length)||!t&&""!==t&&!n&&""!==n)||Z("openUrlError","string input expected for document url.");a||(r&&(i++,u=r,d=h,N.annotations&&(Nt(),N.annotations.makeHandlerRequest(u,d))),l&&(i++,s=l,c=h,N.forms&&(qt(),N.forms.makeHandlerRequest(s,c))))}
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
   */function an(e,t,n,o){"function"==typeof n&&(o=n,n={}),"function"==typeof t&&(o=t,t=U.savefileformat),"function"==typeof e&&(o=e,e=null),void 0===t&&(t=U.savefileformat);var i=pn.extend(!0,n,{atala_subpath:e||"",atala_sformat:t});N.annotations&&pn.extend(i,{atala_iuname:U.annotations.saveusername,atala_annos:N.annotations.stringifyChanges()}),N.forms&&pn.extend(i,{atala_forms:N.forms.stringifyChanges()}),N.document&&pn.extend(i,{atala_document:N.document.stringifyChanges()}),U.savepreviouslysigneddocument&&pn.extend(i,{atala_savesigned:"true"}),jt(i,o)}
/**
   * Gets the current page index
   * @returns {number} Zero based index of the current page.
   *
   * Note, that current page index detection could be affected by {@link WebDocumentViewerConfig.pageselectlocation|pageselectlocation} configuration parameter.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function getCurrentPageIndex
   */
function rn(){return q.number-1}
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
function ln(e,t){return Te(arguments,!0),a.on.apply(a,arguments),c}
/**
   * Detaches the handler from the event.
   * @param {string} event - the name of the event to unbind.
   * @param {function} [handler] -  the event handler to unbind. If not specified, all handlers are unbound.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function unbind
   */function sn(e,t){return Te(arguments,!1),a.off.apply(a,arguments),c}
/**
   * Triggers the event.
   * @param {string} event - the name of the event to trigger.
   * @param {Object} [parameters] - the event data.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function trigger
   */function cn(e,t){return a.trigger.apply(a,arguments),c}
/**
   * Gets the current document info
   * @return {{count: *, dpi: number, size: {height: number, width: number}, vector: boolean}} object indicating document main page size, and number of pages
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function getDocumentInfo
   */function un(e){var t="#"+y+"_"+zn.atala_bookmark_content;!pn(e.target).closest(t).length&&pn(t).is(":visible")&&(fn(),pn(t).remove(),hn())}function dn(){var e="#"+y+"_"+zn.atala_bookmark_content;pn(e).is(":visible")&&(fn(),pn(e).remove(),hn())}function hn(){document.removeEventListener("click",un)}function fn(){var e="#"+y+"_"+zn.atala_bookmark_content;s.top=pn(e).scrollTop(),s.left=pn(e).scrollLeft(),s.expanded=[],pn("ul.atala-bookmark-active").each(function(){s.expanded.push(pn(this).attr("id"))})}function gn(){pn("#"+(y+"_toolbar_Button_Bookmarks")).button("disable")}
/**
   * [Internal] Gets debug info object
   * @returns debug info object if available, otherwise null
   */
return c.__getDebugInfo=function(){var e={version:In.join(".")};U.debug&&pn.extend(!0,e,{dom:B,controllers:N,page:q});return e}
/**
   * [Internal] Gets the viewer linkage for controls that inherit this one
   * @param viewer object of type WebDocumentViewer
   * @returns linker object if possible, otherwise undefined
   */,c.__getViewerLink=function(e){if(e&&"Atalasoft.Controls.WebDocumentThumbnailer"===e.typeOf){var t=new function(){this.typeOf="__LVlinker",this._id=y,this._config=U,this._controllers=N,this._dom=B,this._page=q,this._state=W,this._annos=null,this._fields=null,this.stateManager=l,this.__createDialog=M,this.__createDiv=X,this.__createDOM=P,this.__createDropDownButton=E,this.__createDropDownMenu=S,this.__createMenu=C,this.__getPageSize=xe,this.__getTabularIndexOffset=me,this.__redrawVisiblePages=Wt,this.__adjustVisiblePages=wt,this.__onDocumentChanged=Ht,this.__startDomManipulation=dt,this.__endDomManipulation=ht,this.__status=Pe,this.__updatePageSize=m,this.__silentReloadPage=nt,this.__isObjectInRect=ze,this.__getIndexFromPos=se,this.__showNext=Be,this.__showPrevious=je,this.__showPageAsync=We,this.__adjustEdgeHeights=He,this.__getSelectedPagesIndices=Y};return N.document.__linkChanges(t),U.allowannotations&&(e!==c&&0<U.annotationsurl.length&&(U.annotationsurl=""),N.annotations.__linkAnnotations(t)),U.allowforms&&(e!==c&&0<U.formurl.length&&(U.formurl=""),N.forms.__linkForms(t)),U.allowtext&&N.text&&N.text.__linkText(t),t}},c.dispose=
/**
   * Removes all DOM elements, internal references, and empties memory intensive objects.
   * The WebDocumentViewer will no longer function after a call to this method.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function dispose
   */
function(){if(!L&&l&&l.closeDocument(),Qt(),B.main&&B.main.remove(),B.toolbar&&(B.toolbar.controlgroup("destroy"),B.toolbar.remove(),B.toolbar.annoToolbar&&(B.toolbar.annoToolbar.controlgroup("destroy"),B.toolbar.annoToolbar.remove())),B.search&&B.search.dispose(),B.uploadCtrl&&B.uploadCtrl.remove(),B.main=null,B.toolbar=null,B.scroller=null,B.viewport=null,B.content=null,B.scrollH=null,B.scrollV=null,B.loadedImgs.length=0,B.pageDivs.length=0,B.pageLabel=null,B.status=null,B.search=null,B.uploadCtrl=null,B.edges){for(var e=0;e<B.edges.length;e++)B.edges[e]=null;B.edges=[]}for(var t in N)N.hasOwnProperty(t)&&null!==N[t]&&(N[t].dispose(),N[t]=null);W={prpr:0,batchoperation:0,loading:(q={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,scrollTarget:{Page:0,dx:0,dy:0},hidden:!1,itch:!1,tilingCorrelationId:0}},c.empty=Jt,c.fit=zt,c.getZoom=function(){return U.zoom},c.isReady=Kt,c.scrollTo=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);Ce(e,t,n,null,o)}
/**
   * Scrolls by the given deltas, does not account for zoom, i.e. `dx` and `dy` values are passed in window coordinate space.
   * @param {number} dx - Indicating delta of the x axis.
   * @param {number} dy - Indicating delta of the y axis .
   * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function scrollBy
   */,c.scrollBy=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);i=e,a=t,r=n,l=null,s=o,Ce(B.scroller.scrollLeft()+i,B.scroller.scrollTop()+a,r,l,s);var i,a,r,l,s},c.next=x?Be:$t,c.previous=x?je:en,c.zoom=vt,c.zoomIn=tn,c.zoomOut=nn,c.openUrl=c.OpenUrl=on,c.save=an,c.uploadFiles=
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
function(e,t,n){if(L)return;N.upload.uploadFiles(e,t,n)}
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
   */,c.uploadFile=function(e,t,n){if(L)return;N.upload.uploadFile(e,t,n)}
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
   */,c.filterFilesForUpload=function(e,t,n){if(L)return;return N.upload.filterFilesPublic(e,t,n)},c.getCurrentPageIndex=rn,c.bind=ln,c.unbind=sn,c.trigger=cn,c.getDocumentInfo=function(){return{count:N.document.getPageCount(),dpi:q.dpi,size:{height:q.size.height,width:q.size.width},vector:q.vector}},c.setMouseTool=function(e){for(var t in bn)if(bn.hasOwnProperty(t)&&bn[t]===e){N.mouseTool.setTool(e);break}},c.isPageLoaded=function(e){var t=N.document.getPageDefinition(e);return 0<=t.cacheIndex&&B.loadedImgs[t.cacheIndex]&&B.loadedImgs[t.cacheIndex]._loaded}
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
   */,c.reloadPage=function(o,e,t,n,i){var a=pn.Deferred(),r=pn.Deferred(),l=pn.Deferred(),s=pn.Deferred();"function"==typeof n&&(i=n,n=void 0),"function"==typeof t&&(i=t,t=!1),"function"==typeof e&&(i=e,e=!1),"function"==typeof i&&a.done(i);var c=N.document.getPageDefinition(o);if(!c)return a.resolve(),a.promise();0<=c.cacheIndex&&B.loadedImgs[c.cacheIndex]?s=nt(c,n):ot(o,n,function(){s.resolve()});var u="string"==typeof e?e:c.uri?null:U.annotationsurl;U.allowannotations&&e&&(u||c.uri)?N.annotations.loadAnnotationsUrl(U.serverurl,u,c.uri,c.index,1,o,function(){r.resolve(!0)}):(e&&N.annotations.loadAnnotations({layers:[[]],offset:o}),r.resolve(!!e));var d="string"==typeof t?t:c.uri?null:U.formsurl;return U.allowforms&&t&&(U.formsurl||d)?N.forms.loadFormUrl(U.serverurl,d,c.uri,c.index,1,o,function(){l.resolve(!0)}):l.resolve(),pn.when(s,r,l).done(function(e,t,n){(t||n)&&Ut(o,!0),a.resolve(o)}),a.promise()},c.showPage=Ne,c.showPageNumber=qe,An(),Ln(),On(),Hn(),c.annotations=An.__exposedApi,c.document=Ln.__exposedApi,c.forms=On.__exposedApi,c.text=Hn.__exposedApi,function(){Kt()||(W={prpr:0,batchoperation:0,loading:(q={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,scrollTarget:{Page:0,dx:0,dy:0},hidden:!1,itch:!1,tilingCorrelationId:0});var e={_config:U,_id:y,_dom:B,_document:B.loadedImgs,_pages:B.pageDivs,_state:W,_internalEvents:r,_controllers:N,createDOM:P,createDiv:X,createDialog:M,createDropDownButton:E,createDropDownMenu:S,createMenu:C,drawAnnotation:Ct,redrawVisiblePages:Wt,adjustVisiblePages:wt,startDomManipulation:dt,endDomManipulation:ht,redrawPageFromIndex:Ut,makeHandlerRequest:Yt,getPageScale:Pt,getPageSize:xe,getSourcePageSize:be,getPageRotation:Tt,getViewerTransform:Dt,isPageInView:it,findPageFromIndex:at,showPagePoint:rt,disableBookmarkButton:gn,throwError:Z,triggerEvent:cn};N.document=new Ln(c,e,y),c.document=N.document.__exposedApi,U.allowannotations?(N.annotations=new An(c,e,L),c.annotations=N.annotations.__exposedApi):(c.deselectAll=St,c.createAnnotationOnPage=St,c.getAnnotationsFromPage=St,c.deleteAnnotationOnPageAtIndex=St,c.setAnnotationDefaults=St,c.setImages=St,c.setStamps=St),U.allowforms&&!N.forms&&(N.forms=new On(c,e),c.forms=N.forms.__exposedApi),U.allowtext&&(N.text=new Hn(c,e,U.mousetool?U.mousetool.text:{}),c.text=N.text.__exposedApi),N.upload=new Vn(c,e),!1===W.initialized&&(W.initialized=!0,ln({throwerror:k,pagedivsresized:p,documentchanged:Ht,pagesizechanged:v}),U.parent?(U.parent instanceof pn||(U.parent=pn(U.parent)),U.parent.length||Z("InitError","Parent element not found.")):Z("InitError","No parent element given."),B.toolbar=(t=U.toolbarparent||U.parent,(n=function(e){var t=this,n={id:y+"_toolbar",parent:e,children:[{type:"button",id:"Button_PagePrev",cls:zn.atala_tool_button_page_prev,icon:"page-prev",tooltip:"Previous Page",text:null,onclick:function(){x?je():en()}},{type:"pagelabel",id:"Label_PageNumber",cls:zn.atala_page_label},{type:"button",id:"Button_PageNext",cls:zn.atala_tool_button_page_next,icon:"page-next",tooltip:"Next Page",text:null,onclick:function(){x?Be():$t()}},{type:"button",id:"Button_ZoomOut",cls:zn.atala_tool_button_zoom_out,icon:"zoom-out",tooltip:"Zoom Out",text:"",onclick:function(){nn()}},{type:"button",id:"Button_ZoomIn",cls:zn.atala_tool_button_zoom_in,icon:"zoom-in",tooltip:"Zoom In",text:"",onclick:function(){tn()}},{type:"button",id:"Button_FitNone",cls:zn.atala_tool_button_fit_none,icon:"zoom-full",tooltip:"Full Size",text:"",onclick:function(){vt(1)}},{type:"button",id:"Button_FitBest",cls:zn.atala_tool_button_fit_best,icon:"fit-best",tooltip:"Best Fit",text:"",onclick:function(){zt(yn.Best)}},{type:"button",id:"Button_FitWidth",cls:zn.atala_tool_button_fit_width,icon:"fit-width",tooltip:"Fit To Width",text:"",onclick:function(){zt(yn.Width)}}]};return U.showselecttools&&n.children.splice(5,0,{type:"button",id:"Button_ZoomArea",cls:zn.atala_tool_button_zoom_area,icon:"zoom-area",tooltip:"Zoom Area",text:"",onclick:V}),U.allowtext&&(n.children.splice(3,0,{type:"button",id:"Button_Text",cls:zn.atala_tool_button_text_tool,icon:"text-tool",tooltip:"Text Selection",text:"",onclick:function(){N.mouseTool.setTool(bn.Text)}}),n.children.splice(3,0,{type:"button",id:"Button_Pan",cls:zn.atala_tool_button_pan_tool,icon:"pan-tool",tooltip:"Pan",text:"",onclick:function(){N.mouseTool.setTool(bn.Pan)}})),U.showrotatetools&&(n.children.push({type:"button",id:"Button_RotateLeft",cls:zn.atala_tool_button_rotate_left,icon:"rotate-left",tooltip:"Rotate Left",text:"",onclick:G(270)}),n.children.push({type:"button",id:"Button_RotateRight",cls:zn.atala_tool_button_rotate_right,icon:"rotate-right",tooltip:"Rotate Right",text:"",onclick:G(90)})),0<U.savepath.length&&n.children.unshift({type:"button",id:"Button_Save",cls:zn.atala_tool_button_save,icon:"save",tooltip:"Save Changes",text:null,onclick:function(){an()}}),!1!==U.upload.enabled&&n.children.unshift({type:"button",id:"Button_Upload",cls:zn.atala_tool_button_upload,icon:"upload",tooltip:"Upload document",text:null,onclick:function(){!function(){var t=this;L||N.upload.uploadWithUi(function(e){Bn(this,t),e?(B.toolbar.controlgroup("enable"),U.allowannotations&&B.toolbar.annoToolbar.controlgroup("enable"),B.toolbar.find(".atala_page_label, .atala_search_container").removeClass("ui-state-disabled")):(B.toolbar.controlgroup("disable"),B.toolbar.annoToolbar&&B.toolbar.annoToolbar.controlgroup("disable"),B.toolbar.find(".atala_page_label, .atala_search_container").addClass("ui-state-disabled"))}.bind(this))}()}}),!1!==U.showbookmarks&&n.children.unshift({type:"button",id:"Button_Bookmarks",cls:zn.atala_tool_button_bookmarks,icon:"bookmarks",tooltip:"Show bookmarks",text:null,onclick:function(){!function(){var t=this;if(!L){var e=y+"_"+zn.atala_bookmark_content,n="#"+e;if(0<pn(n).length)return fn(),pn(n).remove(),hn();var o,i=N.document.getBookmarks();if(0<i.length){var a=.85*B.main.height();st=0,U.allowtext&&U.mousetool.text.allowsearch||pn("<div/>").css("clear","both").appendTo(B.toolbar);var r=pn("<div/>").addClass("ui-widget").addClass(zn.atala_bookmark_content).css("max-height",a+"px").attr("id",e).appendTo(B.toolbar),l=pn("<ul></ul>");pn('<span id = "atala_bkm_header" class ="'+zn.atala_bookmark_header+'">Bookmarks</span>').appendTo(l),mn.Chrome&&l.attr("aria-labelledby","atala_bkm_header"),l.appendTo(r),i.forEach(function(e){return Bn(this,t),function t(e,n){var o=this;if(0<e.Children.length){var i=pn('<li><span class="atala-bookmark-caret"></span></li>'),a=pn("<a>"+e.Text+"</a>");if(mn.Chrome){var r=h();a.attr("id",r),i.attr("aria-labelledby",r)}a.click(function(){N.document.scrollToBookmark(e)}),a.appendTo(i);var l=pn('<ul class = "atala-bookmark-nested"></ul>').attr("id","expandable_bookmark_"+e.id);l.appendTo(i),i.find("span").click(function(){this.parentElement.querySelector(".atala-bookmark-nested").classList.toggle("atala-bookmark-active"),this.classList.toggle("atala-bookmark-caret-down")}),i.appendTo(n);var s=N.document.getChildBookmarks(e);s.forEach(function(e){return Bn(this,o),t(e,l)}.bind(this))}else{var c=pn("<li></li>"),u=pn("<a>"+e.Text+"</a>");if(mn.Chrome){var d=h();u.attr("id",d),c.attr("aria-labelledby",d)}u.click(function(){N.document.scrollToBookmark(e)}),u.appendTo(c),c.appendTo(n)}function h(){return"bkm_"+ ++st}}(e,l)}.bind(this)),r.contextmenu(function(){return!1}),r.show(),o="#"+zn.atala_bookmark_content+y,s.expanded.forEach(function(e){var t=pn("#"+e);t.toggleClass("atala-bookmark-active"),t.parent().children(".atala-bookmark-caret").toggleClass("atala-bookmark-caret-down")}),pn(o).scrollTop(s.top),pn(o).scrollLeft(s.left),setTimeout(function(){document.addEventListener("click",un)},50),pn(document).one("viewportclick",dn)}}}()}}),U.toolbarbuttons&&U.toolbarbuttons.reverse().forEach(function(e){Bn(this,t),n.children.unshift({type:"button",id:e.id,cls:e.class,tooltip:e.tooltip,onclick:e.onclick,text:null,icon:e.icon,custom:!0})}.bind(this)),D(n)}(t)).controlgroup(),U.allowannotations&&(n.annoToolbar=D({id:y+"_toolbar",parent:t,children:[{type:"button",id:"Button_Ellipse",cls:zn.atala_tool_button_ellipse_anno,icon:"ellipse",tooltip:"Draw Ellipse",text:"",onclick:Ct},{type:"button",id:"Button_Highlight",cls:zn.atala_tool_button_highlight_anno,icon:"highlight",tooltip:"Draw Highlight",text:"",onclick:Ct},{type:"button",id:"Button_Line",cls:zn.atala_tool_button_line_anno,icon:"line",tooltip:"Draw Line",text:"",onclick:Ct},{type:"button",id:"Button_Lines",cls:zn.atala_tool_button_lines_anno,icon:"lines",tooltip:"Draw Poly Lines",text:"",onclick:Ct},{type:"button",id:"Button_Freehand",cls:zn.atala_tool_button_freehand_anno,icon:"freehand",tooltip:"Draw Freehand",text:"",onclick:Ct},{type:"button",id:"Button_Polygon",cls:zn.atala_tool_button_polygon_anno,icon:"polygon",tooltip:"Draw Polygon",text:"",onclick:Ct},{type:"button",id:"Button_Rectangle",cls:zn.atala_tool_button_rect_anno,icon:"rectangle",tooltip:"Draw Rectangle",text:"",onclick:Ct},{type:"button",id:"Button_Text_Anno",cls:zn.atala_tool_button_text_anno,icon:"text",tooltip:"Draw Text",text:"",onclick:Ct}]}),n.annoToolbar.addClass(zn.atala_annotation_toolbar),n.annoToolbar.controlgroup()),U.showstatus&&(B.status=pn('<div id="'+y+'_status"></div>'),B.status.addClass(zn.atala_statusbar),B.status.css("display","inline"),n.append("Status:"),n.append(B.status)),U.allowtext&&U.mousetool.text.allowsearch&&(B.search=new O({parent:n})),n),B.toolbar.addClass(zn.atala_toolbar),B.main=X(U.parent),B.main.addClass(zn.atala_main_container),B.scroller=X(B.main),B.scroller.addClass(zn.atala_scroller),B.main.on({selectstart:w}),B.toolbar.attr("id",y+"_toolbar"),B.main.attr("id",y+"_main"),B.scroller.attr("id",y+"_scroller"),B.main.css({height:"100%",width:"100%",position:"relative"}),B.scroller.css({height:"100%",width:"100%",position:"relative"}),B.viewport=X(B.scroller,y+"_vp"),B.viewport.css({overflow:"hidden",fontSize:0,"touch-action":"none"}),B.viewport.addClass(zn.atala_viewport),B.viewport.attr("tabindex",-1),B.edges[0]=J(B.viewport,y+"_e0"),B.edges[0].addClass(zn.atala_dom_edge_first),B.content=X(B.viewport,y+"_ct"),B.content.addClass(zn.atala_content),B.content.attr("tabindex",-1),B.content.attr("role","figure"),mn.Explorer&&B.content.attr("aria-label",L?"Thumbnailer":"Viewer"),B.content.css({"-ms-touch-action":"none",fontSize:0,overflow:"hidden"}),U.direction===xn.Horizontal&&B.content.css({display:"inline-block"}),B.edges[1]=J(B.viewport,y+"_e1"),B.edges[1].addClass(zn.atala_dom_edge_last),mn.Features.Compatibility&&Z("InitError","Compatibility Mode is not supported."),!1===U.upload.enabled||L||(B.uploadCtrl=N.upload.getUploadControl()),mn.Mobile.Any()?B.scroller.css({overflow:"hidden"}):U.showscrollbars?(x?B.scroller.css({overflow:"scroll"}):B.scroller.css({overflow:"auto"}),B.scrollH=$(B.main,xn.Horizontal),B.scrollH.attr("id",y+"_sH"),B.scrollH.addClass(zn.atala_scroll_horizontal),B.scrollH.attr("role","scrollbar"),B.scrollH.attr("aria-controls",y+"_scroller"),B.scrollH.attr("aria-orientation","horizontal"),B.scrollH.attr("aria-valuemin","0"),B.scrollH.attr("aria-valuemax","1"),B.scrollH.attr("aria-valuenow","0"),B.scrollV=$(B.main,xn.Vertical),B.scrollV.attr("id",y+"_sV"),B.scrollV.addClass(zn.atala_scroll_vertical),B.scrollV.attr("role","scrollbar"),B.scrollV.attr("aria-controls",y+"_scroller"),B.scrollV.attr("aria-orientation","vertical"),B.scrollV.attr("aria-valuemin","0"),B.scrollV.attr("aria-valuemax","1"),B.scrollV.attr("aria-valuenow","0")):B.scroller.css({overflow:"hidden"}),N.mouseTool=new Rn(c,{_internalEvents:r,_controllers:N,zoomStart:ft,zoom:gt,zoomEnd:pt,getActivePage:Re,raiseDrawLayer:It,resetDrawLayer:Ft,getViewerTransform:Dt},B.viewport,B.scroller,pn.extend({allowflick:U.allowflick},U.mousetool)),N.memory=new Sn({highWaterMark:U.memorythreshold}),N.memory.bind({exceededhighwatermark:g}),N.annotations&&N.annotations.setViewPort(B.viewport),cn("initialized"),U.direction===xn.Horizontal&&B.viewport.css({"white-space":"nowrap"}),B.viewport.css({display:"table-cell"}),te(B.scroller),B.scrollH&&B.edges[1].height(B.scrollH.scrollbarHeight()),N.mouseTool.setTool(bn.Pan,bn.None),(U.documenturl||U.annotationsurl||U.formurl)&&on(U.documenturl,U.annotationsurl,U.formurl,o),pn(b));var t,n}(),c};n(125);function $e(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that shows thumbnails of document pages and annotations.
 * @param {WebThumbnailerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @augments Atalasoft.Controls.WebDocumentViewer
 * @returns {WebDocumentThumbnailer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */function we(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){ze(t,e,n[e])})}return t}function ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Main Atalasoft Namespace definition(s)
 * @namespace Atalasoft
 */n.d(t,"Utils",function(){return Ce}),n.d(t,"Annotations",function(){return Me}),n.d(t,"Controls",function(){return Ee}),n.d(t,"Logger",function(){return Se});var ke={WebDocumentThumbnailer:function(e,n){var s,l,h=null,f=e.viewer||null,g=[],p=[],c=null,v=null,u=null,m="atala_dragdata",d="ui-sortable",b="sortable",x="atala_scroll_parent",y=null,_={size:{width:0,height:0},sizes:[{width:0,height:0}],count:0,number:-1,dpi:96,vector:!1},w={base:null,loading:!1,initialized:!1,scrolling:!1,dragdropping:!1,viewer:{zoom:0,pagenumber:0,api:{}},selfapi:{}},o={moves:0,start:{x:NaN,y:NaN}},z={divsize:-1,scale:1,size:0,zoom:1,zoomfull:1},k={direction:xn.Vertical,
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
selecteditemsorder:Je.ItemIndexOrder,
/**
    * @property {Atalasoft.Controls.WebDocumentViewer} [viewer=null] - Defines the reference to the WebDocumentViewer object.
    */
viewer:null},t={type:"Atalasoft.Controls.WebDocumentThumbnailer",debug:!0,showpageborder:!0,forcepagefit:!0,toolbarparent:pn("<div/>")},i={
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
thumbdragcomplete:null};function P(){return{get:function(){return h},detachViewer:M,activateViewer:C}}function T(e,t){if(e){var n=t?e.bind:e.unbind,o=t?h.unbind:h.bind;n.call(e,{beforehandlerrequest:Pe,documentloaded:fe,scroll:xe,pagerotated:ze,pageinserted:pe,pageremoved:me,pagemoved:be}),o.call(h,{pagerotated:ge,pageinserted:ge,pageremoved:ge,pagemoved:ge}),a(e,e.document.events,n),k.allowannotations&&(n.call(e,{annotationresized:ke,annotationmoved:ke,annotationrotated:ke,annotationchanged:ke,annotationcreated:_e,annotationdeleted:we}),e.annotations&&a(e,e.annotations.events,n))}}function a(e,t,n){var o={};for(var i in t)t.hasOwnProperty(i)&&(o[i]=r);n.call(e,o)}function r(){h.trigger.apply(h,arguments)}
/**
   * Checks whether current thumbnailer is controlling referenced viewer.
   *
   * If viewer is linked only to the current thumbnailer, this method always return `true`.
   *
   * If thumbnailer is not linked to any viewer, this method always return `false`.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#isActive
   * @returns {boolean} `true` if current thumbnailer instance is controlling referenced viewer; `false` otherwise.
   */function D(){return f&&(!y||y&&y.isThumbnailerActive(P()))}
/**
   * Takes ownership over referenced viewer, i.e. if shared viewer is currently displaying other document, it's switched to display document from calling thumbnailer.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#activate
   */function C(e,t,n){if(!f&&e&&(v=(f=e).__getViewerLink(h,u),y=v.stateManager),f&&f.isReady()&&(!D()||n)){var o=f&&!D(),i=(a={pagewidth:_.size.width,pageheight:_.size.height,pagecount:_.count,dpi:_.dpi,colordepth:w.base.controllers.memory.colorDepth,vector:_.vector,pagenumber:w.viewer.pagenumber,zoom:w.viewer.zoom},k.allowannotations&&u._annos&&(a.layers=se(u._annos,"items")),k.allowforms&&u._fields&&(a.forms={fields:se(u._fields)}),a);i.customData=null==t?void 0:t.customData,y.activateThumbnailer(P(),i,u,k,n),o&&(T(f,!0),E((l={thumb:{annotations:null,document:null,text:null,getCurrentPageIndex:null,getZoom:null,zoom:null,zoomIn:null,zoomOut:null,next:null,previous:null,save:null,showPage:null,setMouseTool:null},viewer:{reloadPage:function(e){return s=e.reloadPage,X}}}).viewer,r=f,h,w.viewer.api),E(l.thumb,h,r,w.selfapi))}var a,r,l;q(!0)}function M(){if(f&&f.isReady()&&(w.viewer.zoom=f.getZoom(),w.viewer.pagenumber=f.getCurrentPageIndex(),k.allowforms&&w.base.controllers.forms&&v._fields)){var e={forms:{fields:se(v._fields)}};w.base.controllers.forms.loadForms(e)}var t;T(f,!1),t=f,E(S(w.viewer.api),t,w.viewer.api,{}),E(S(w.selfapi),h,w.selfapi,{}),q(!1)}function E(e,t,n,o){for(var i in e)e.hasOwnProperty(i)&&(t.hasOwnProperty(i)&&t[i]&&(o[i]=t[i]),"function"==typeof e[i]?t[i]=e[i](t,n):n.hasOwnProperty(i)&&n[i]&&(t[i]=n[i]))}function S(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=null);return t}e&&("thumbsize"in e&&isFinite(e.thumbsize)&&0<e.thumbsize&&(ue(e.thumbsize),t.forcepagesize={width:e.thumbsize,height:e.thumbsize}),pn.extend(k,e),pn.extend(k,t),k.showpagenumber=k.showpagenumber&&!k.showthumbcaption,"fitting"in e||(k.fitting=k.direction===xn.Vertical?yn.Width:yn.Height),f&&f.config&&(k.allowtext=f.config.allowtext,k.showbookmarks=f.config.showbookmarks,k.tiling=f.config.tiling)),h=Ke.call(this,k,function(e,t){Ee(e,t,n)}),u=h.__getViewerLink(h),k=u._config,I=u.__createDiv,u.__getSelectedPagesIndices=V,k.allowdragdrop=!!k.allowdragdrop,k.selectedindex=he(k.selectedindex)?parseInt(k.selectedindex,10):0,k.thumbpadding=he(k.thumbpadding)?parseInt(k.thumbpadding,10):8,k.backcolor=de(k.backcolor,"#DCDCDC"),k.hovercolor=de(k.hovercolor,"#667F9F"),k.selectedcolor=de(k.selectedcolor,"#E0872D"),k.selectedhovercolor=de(k.selectedhovercolor,"#FFC060");var I=function(){},F=function(){};function A(){if(k.debug){var e=F(),t=V();return pn.extend(!0,e,{thumbnailer:{config:k,index:t[0],indices:t,links:{viewer:v,self:u},page:_,thumb:z,state:w}}),e}return null}
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
function V(){var n=this,e=g.slice(0);return k.selecteditemsorder===Je.ItemIndexOrder&&e.sort(function(e,t){return $e(this,n),e-t}.bind(this)),e}function L(e){var t=1,n=function(){--t<=0&&(D()&&y&&f&&C(f,h.getDocumentInfo(),!0),"function"==typeof e&&e.call())};D()&&(y?y.closeDocument(P(),u):f.isReady()&&(t++,f.empty(n))),H(n)}h.getSelectedPageIndex=
/**
   * @summary Gets the selected thumbnail index.
   * @description Gets the selected thumbnail index when Web Document Thumbnailer (WDT) setup to use singleselect. When WDT setup to use multiselect, then this method returns the first element of the selected page indices, with respect of {@link WebDocumentViewerConfig.selecteditemsorder| selecteditemsorder} parameter value.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPageIndex
   * @returns {number}
   */
function(){return V()[0]},h.getSelectedPagesIndices=V,h.selectThumb=W,h.deselectThumb=U,h.isActive=D,h.activate=function(){C(f,h.getDocumentInfo())};var H=function(){};function R(){D()&&(y?y.closeDocument(P(),u):f.empty(),M()),j(),v=f=null}var j=function(){};function B(e,t,n,o){w.base&&pn.each(w.base.dom.pageDivs,function(e,t){t.off(c),t.thumbInitialized=!1}),null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null)),"string"==typeof e&&(y.closeDocument(P(),u),w.viewer.pagenumber=0,w.base&&(w.base.state.scrollPos.x=0,w.base.state.scrollPos.x=0)),N(e,t,n,function(e,t){h.scrollTo(0,0,!1),Ee(e,t,o)})}var N=function(){};function q(e){if(w.base){0===g.length&&g.push(0);for(var t=0;t<w.base.dom.pageDivs.length;t++){var n=0<t?w.base.dom.pageDivs[t-1]:null,o=w.base.dom.pageDivs[t],i=!1;-1<g.indexOf(o._index)&&e?(o.removeClass("atala_grouped_selection"),o.addClass(h.domclasses.atala_active_thumb),o.attr("aria-label").endsWith(" Selected")||o.attr("aria-label",o.attr("aria-label")+" Selected"),null!==n&&-1<g.indexOf(n._index)&&(o.addClass("atala_grouped_selection"),n.addClass("atala_grouped_selection")),i=!0):(o.removeClass(h.domclasses.atala_active_thumb),o.removeClass("atala_grouped_selection"),o.attr("aria-label",o.attr("aria-label").replace(" Selected",""))),Q(o,i)}}}
/** 
   * Highlights the thumbnail at the given index, and scrolls to it in the linked viewer, if possible.
   * @param {number|string} index - Index of the page to select. Can be passed as string representation of a number
   * @param {boolean} [append] - Append index to the already selected thumbs or not. Its value ignores in single select mode.
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been selected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#selectThumb
   */function W(e,t,n){var o=this;if(v._controllers.upload&&v._controllers.upload.abort(),!(null===(e=Qe(e))||e<0||e>=h.getDocumentInfo().count||void 0!==t&&"boolean"!=typeof t&&null!==t||void 0!==n&&"function"!=typeof n&&null!==n)){if(t=!!t&&k.selectionmode!==Ye.SingleSelect){if(-1<g.indexOf(e))return;g.push(e)}else V().forEach(function(e){$e(this,o),h.trigger({type:"thumbdeselected",index:e})}.bind(this)),g.length=0,g.push(e);Z(),h.trigger({type:"thumbselected",index:e}),"function"==typeof n&&n()}}
/** 
   * Resets the thumbnail highlight at the given index, and scrolls to the next selected thumbnail in the linked viewer, if possible.
   *
   * This function doesn't deselect the given index in the single select mode, and in multi select mode, if one page is selected.
   * @param {number|string} index - Index of the page to deselect. Can be passed as string representation of a number
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been deselected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#deselectThumb
   */function U(e,t){if(null!==(e=Qe(e))&&(void 0===t||"function"==typeof t||null===t)){var n=g.indexOf(e);-1!==n&&1!==g.length&&(g.splice(n,1),Z(),h.trigger({type:"thumbdeselected",index:e}),"function"==typeof t&&t())}}function Z(){var e=V();if(y?(w.viewer.pagenumber=e[0],C(f,h.getDocumentInfo())):q(!0),!(1<g.length)&&f){var t=f.getCurrentPageIndex(),n=e[0];0<=t&&n!==t&&(w.scrolling=!0,f.showPage(n,ye))}}
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
   */function X(e,t,n,o,i){if(l){var a=Array.prototype.slice.call(arguments);if(f&&f.isReady())if(D()){var r=Array.prototype.slice.call(a);"function"!=typeof(i=a.pop())&&(a=Array.prototype.slice.call(r)),l.apply(this,a).then(function(){s&&s.apply(this,r)})}else l.apply(this,arguments);else l.apply(this,arguments)}}function G(){if(w.base){if(w.initialized&&0<w.base.dom.pageDivs.length&&null!=w.base.dom.pageDivs[0]._img&&!w.base.dom.pageDivs[0]._img._size.isEmpty()){var e=w.base.dom.pageDivs[0]._img._size;e.width>e.height?z.scale=z.size/e.width:z.scale=z.size/e.height,k.tabular&&1<k.columns&&k.direction===xn.Vertical&&ce()}else{var t=w.base.page.size.width/w.base.page.size.height<1,n=Math.ceil(w.base.page.size.height*w.base.config.zoom),o=Math.ceil(w.base.page.size.width*w.base.config.zoom),i=z.size;k.direction===xn.Vertical?z.divsize=Math.ceil(w.base.page.size.width*w.base.config.zoom):k.direction===xn.Horizontal&&(z.divsize=Math.ceil(w.base.page.size.height*w.base.config.zoom)),ue(i=i<=0?z.divsize-2*k.thumbpadding:i),k.tabular&&1<k.columns&&k.direction===xn.Vertical&&ce();var a=t?n:o;z.scale=a?w.base.config.zoom*(z.size/a):1,z.zoomfull=z.scale,k.minwidth>w.base.page.size.width*z.scale&&w.base.page.size.width&&(k.minwidth=w.base.page.size.width*z.scale),w.initialized=!0}var r=k.showpageborder?2*k.pageborderwidth:0,l=z.size+2*k.thumbpadding-r;if(h.trigger({type:"pagedivsresized",height:l,width:l,fullzoom:z.zoomfull,minwidth:k.minwidth}),k.allowdragdrop){w.base.dom.content.addClass(h.domclasses.atala_thumb_draggable),w.base.dom.content.css({minWidth:l,minHeight:l});var s=Math.round(z.size/2);w.base.dom.content.sortable({containment:"window",connectWith:"."+h.domclasses.atala_thumb_draggable,appendTo:document.body,placeholder:h.domclasses.atala_drag_placeholder,cursorAt:{left:s,top:s},delay:k.dragdelay,distance:4,helper:$,opacity:.65,scroll:!0,scrollSensitivity:s,scrollSpeed:10,start:ee,receive:ie,stop:oe,over:te,change:ne,tolerance:"pointer",update:ae,zIndex:100})}pn.each(w.base.dom.pageDivs,function(e,t){t.width(z.size),t.height(z.size),t.thumbInitialized||(t.on(c),t.css({padding:k.thumbpadding,"background-color":k.backcolor,cursor:"pointer","margin-bottom":k.pagespacing+"px","text-align":"center",position:"relative"}),k.tabular?t.css({"margin-right":k.pagespacing+"px"}):k.direction===xn.Horizontal&&t.css({"margin-right":k.pagespacing+"px","margin-bottom":"0px"}),t._paper&&mn.Explorer&&(t._paper.canvas.style.top="",t._paper.canvas.style.width="",t._paper.canvas.style.height=""),t._grips&&(t._grips.push=function(){}),t.thumbInitialized=!0),Y(t._img,t._paper)}),0<w.base.dom.pageDivs.length&&u.__adjustEdgeHeights(w.base.dom.pageDivs[0]._index)}}function Y(e,t,n,o){if(w.base){var i=o||e&&e.getScaledSize(n);if(!i)return;var a=i.width,r=i.height,l=z.size*(w.base.config.zoom/z.zoomfull);if(l<a||l<r){var s,c=a/r<1;r=k.tiling&&0===e._size.width&&0===e._size.height?(s=(n=e.getFitZoom())*(l/(c?r:a)),a=Math.round(e.getSize().width*s),Math.round(e.getSize().height*s)):(s=n*(l/(c?r:a)),a=Math.round(e._size.width*s),Math.round(e._size.height*s)),n=s}e.width(a),e.height(r);var u=e.getDomElement();u[0].style.left="50%",u[0].style.top="50%",u[0].style.position="absolute",u[0].style.marginLeft=-Math.round(a/2)+"px",u[0].style.marginTop=-Math.round(r/2)+"px",t&&(t.canvas.style.left="50%",t.canvas.style.top="50%",t.canvas.style.marginLeft=-Math.round(a/2)+"px",t.canvas.style.marginTop=-Math.round(r/2)+"px",t.canvas.style.zIndex=1),e.trigger({type:"pagezoom",index:e._page._index,height:Math.round(r),width:Math.round(a),prevzoom:w.base.config.zoom,zoom:n})}}function J(e,t,n){var o=e.data("selected")?t:n;e.css("background-color",o)}function Q(e,t){var n=t?k.selectedcolor:k.backcolor;e.data("selected",t),e.css("background-color",n)}function K(e){var t=this;this._initial=e,this._actual=e,this.scrollTop=function(){t._actual.scrollTop()},this.scrollLeft=function(){t._actual.scrollTop()},this.setObject=function(e){t._actual=e,this[0]=t._actual[0]},this.offset=function(){return t._actual.offset()},this.setObject(e)}function $(e,t){w.dragdropping=!0,q(D());var n=pn('<div class="atala_drag_helper"></div>'),o=function(e){var n=this,o=[];return e.hasClass(h.domclasses.atala_active_thumb)&&D()?V().forEach(function(e){$e(this,n);for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t]._index===e){o.push(w.base.dom.pageDivs[t]);break}}.bind(this)):o.push(e),o}(t);1<o.length&&(pn(this).sortable("option","items","> *:not(.atala_grouped_selection)"),pn(this).sortable("refresh"));for(var i=t.hasClass(h.domclasses.atala_active_thumb)&&D()?Math.min(3,V().length):1,a=0;a<o.length||a<i;a++){var r=a<o.length?o[a]:o[0];if(a<i){var l=r.find("."+h.domclasses.atala_page_image_anchor).first().clone();l.css({position:"absolute",left:10*a+"px",top:-10*a+"px",right:"0px",bottom:"0px",margin:"","z-index":-a}),n.append(l)}}w.base.dom.content.append(n);var s=n.scrollParent(),c=w.base.dom.content.data(d)||w.base.dom.content.data(b);return n.hide(),setTimeout(function(){var t=this;c&&(c.scrollParent=new K(s),o.forEach(function(e){$e(this,t),e.data(x,c.scrollParent)}.bind(this))),n.appendTo("body"),n.show()},1),n}function ee(e,t){var n=this;v._controllers.upload.abort();var o=function(e){if(e.hasClass(h.domclasses.atala_active_thumb)&&D())return V();for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t][0]===e[0])return[w.base.dom.pageDivs[t]._index];return null}(t.item);if(null!==o){var i=[];o.forEach(function(e){$e(this,n),i.push(h.document.getPageReference(e))}.bind(this));var a={start:o,end:o[0],updateHandled:!1,pageRefs:i,documenturl:"object"==typeof i[0]&&i[0].uri?i[0].uri:w.base.config.documenturl,thumbLink:u,thumb:h,thumbId:u._id,viewerId:v._id,state:w,externalDropIndex:null,insertAfterSelf:!1};t.item.data(m,a),w.base.controllers.mouseTool.pauseTool(),t.placeholder.width(t.item.width()),t.placeholder.height(t.item.height()),t.placeholder.css({margin:t.item.css("margin"),display:w.base.config.tabular||w.base.config.direction===xn.Horizontal?"inline-block":"block",padding:Math.max(0,w.base.config.thumbpadding-1)}),h.trigger({type:"thumbdragstart",dragindex:a.start[0],dragindices:a.start})}}function te(e,t){if(!mn.Mobile.Any()){var n=t.placeholder.parents("."+h.domclasses.atala_scroller),o=t.item.data(x);n.length&&o&&o[0]!==n.first()[0]&&o.setObject(n.first())}}function ne(e,t){var n=t.item.data(m);if(n){var o=t.placeholder.prev();n.insertAfterSelf=o.length&&t.item[0]===o.first()[0]}}function oe(e,t){var n=this,o=t.item.data(m),i=k.parent.offset().left,a=k.parent.offset().left+k.parent.width(),r=k.parent.offset().top,l=k.parent.offset().top+k.parent.height(),s=t.position.left+t.item.width()/2,c=t.position.top+t.item.height()/2,u=i<s&&s<a&&r<c&&c<l;if(o&&u){w.base.controllers.mouseTool.resumeTool(),o.updateHandled||(o.end=re(t),o.updateHandled=!0),o.insertAfterSelf&&++o.end,o.end=o.start[0]<o.end?o.end-1:o.end;var d={type:"thumbdragend",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,sourcedocument:o.documenturl,target:h,external:!1,pageref:o.pageRefs[0],pagerefs:o.pageRefs,cancel:!1};h.trigger(d,d),d.cancel?pn(this).sortable("cancel"):(v&&D()&&f.isReady()?v._controllers.document.movePages(o.start,o.end):w.base.controllers.document.movePages(o.start,o.end),le(),(g.length=0)<p.length?(p.sort(function(e,t){return $e(this,n),e-t}.bind(this)).forEach(function(e){$e(this,n),W(e,!0)}.bind(this)),p.length=0):W(o.end,!1),d={type:"thumbdragcomplete",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,target:h},w.dragdropping=!1,h.trigger(d,d))}else o&&!u&&pn(this).sortable("cancel");pn(this).sortable("option","items","> *"),pn(this).sortable("refresh"),t.item.data(m,null)}function ie(e,t){var o=this;pn(t.sender).sortable("cancel");var i=t.item.data(m);if(i){i.thumbLink._controllers.mouseTool.resumeTool();var n=w.base.dom.pageDivs.length?w.base.dom.pageDivs[0]._index:0;i.end=i.externalDropIndex+n||0;var a={type:"thumbdragend",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,sourcedocument:i.documenturl,target:h,pageref:i.pageRefs[0],pagerefs:i.pageRefs,external:!0,cancel:!1,copyannotations:!0};if(h.trigger(a.type,a),!a.cancel){var r=[];a.copyannotations&&i.thumb.config.allowannotations&&h.config.allowannotations&&i.start.forEach(function(e){$e(this,o),r.push(i.thumb.annotations.getFromPage(e))}.bind(this)),i.viewerId!==v._id&&i.thumb.selectThumb(i.thumb.getCurrentPageIndex(),!1),w.scrolling=!0,i.thumb.document.removePages(i.start),h.document.insertPages(null,i.pageRefs,i.end),f&&(w.viewer.pagenumber=i.end,C(f,h.getDocumentInfo(),!0)),le(),g.length=0,k.selectionmode===Ye.SingleSelect?W(i.end):i.start.forEach(function(e,t){W(i.end+t,!0)}),r.forEach(function(e,t){if($e(this,o),e)for(var n=0;n<e.length;n++)e[n].update&&delete e[n].update,e[n].getPageIndex&&delete e[n].getPageIndex,h.annotations.createOnPage(e[n],i.end+t)}.bind(this)),h.trigger("thumbdragcomplete",{type:"thumbdragcomplete",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,target:h}),w.dragdropping=!1,i.state.dragdropping=!1}}t.item.data(m,null)}function ae(e,t){var n=t.item.data(m);n&&(w.base.dom.content.has(t.item).length?(n.end=re(t),n.thumbId===u._id&&h.trigger({type:"thumbsreordered",dragindex:n.start[0],dragindices:n.start,dropindex:n.end})):n.externalDropIndex=t.item.index(),n.updateHandled=!0)}function re(e){for(var t=-1,n=e.item.prev().length?e.item.prev().first():[null],o=0;o<w.base.dom.pageDivs.length;++o)if(w.base.dom.pageDivs[o][0]===n[0]){t=w.base.dom.pageDivs[o]._index;break}return t+1}function le(){var e=w.base.dom.scroller[0];if(u.__isObjectInRect(w.base.dom.edges[1][0],e,e.scrollLeft,e.scrollTop,e.scrollLeft+e.clientWidth,e.scrollTop+e.clientHeight)){var t=w.base.dom.pageDivs[0]._index,n=u.__getIndexFromPos(e.scrollLeft,e.scrollTop),o=n-t;o<w.base.dom.pageDivs.length&&0<o?u.__showNext(o):(u.__showPageAsync(n,!1),u.__redrawVisiblePages())}}function se(e,t){var n=[];for(var o in e)if(e.hasOwnProperty(o)){var i=[],a=t?{}:i;for(var r in t&&(a[t]=i),e[o])e[o].hasOwnProperty(r)&&(i[r]=e[o][r].get(),i[r].multiview=!0);n[o]=a}return n}function ce(){if(k.tabular){var e;if(1<k.columns)e=(z.size+2*k.thumbpadding+k.pagespacing)*Math.min(w.base.controllers.document.getPageCount(),k.columns);else if(1<k.rows){var t=Math.ceil(w.base.controllers.document.getPageCount()/k.rows);e=(z.size+2*k.thumbpadding+k.pagespacing)*t}e&&w.base.dom.content.width(e)}}function ue(e){e<=0&&h.trigger({type:"throwerror",name:"Invalid thumb size",msg:"Thumb size cannot be "+e+". Check configuration parameters 'minwidth', 'thumbpadding' and 'thumbsize'. If 'thumbsize' is not specified, then 'minwidth' should be at least (2 * thumbpadding + 1)."}),z.size=e,w.base&&w.base.config.forcepagesize&&(w.base.config.forcepagesize.width=e,w.base.config.forcepagesize.height=e)}function de(e,t){var n="#FFFFFF",o="#FFF",i="white",a="rgb(255, 255, 255)",r=I(null,"dummy");return r.css("backgroundColor",i),r.css("backgroundColor",e),r.css("backgroundColor")===a&&(e=e.toLowerCase())!==i&&e!==n&&e!==o&&e!==a&&(e=t),e}function he(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function fe(){}function ge(e,t){0<w.base.state.batchoperation||("function"==typeof e&&(t=e),G(),u.__redrawVisiblePages(!0),u.__adjustVisiblePages(),w.base&&v&&D()&&f.isReady()?(v.__redrawVisiblePages(!0),v.__adjustVisiblePages(!1,t)):"function"==typeof t&&t())}function pe(e){w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.insertLayer(null,null,e.destindex),w.base.controllers.forms&&w.base.controllers.forms.insertForm(null,null,e.destindex),v._state.batchoperation<=0&&ge())}function ve(){ge();var e=f.getCurrentPageIndex();O(e)}function me(e){w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.removeLayer(e.index),w.base.controllers.forms&&w.base.controllers.forms.removeForm(e.index),v._state.batchoperation<=0&&ge())}function be(e){var n=this;if(w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.moveLayer(e.shiftedsrcindex,e.destindex),w.base.controllers.forms&&w.base.controllers.forms.moveForm(e.shiftedsrcindex,e.destindex),function(){var e=w.base.dom.pageDivs[0]._index;w.base.dom.pageDivs.sort(function(e,t){return e.index()-t.index()});for(var t=0;t<w.base.dom.pageDivs.length;t++){var n=w.base.dom.pageDivs[t];n._index=e+t,null!=n._num&&n._num.text(n._index+1)}}(),v._state.batchoperation<=0&&ge(),w.dragdropping)){var t=e.destindex;p.sort(function(e,t){return $e(this,n),t-e}.bind(this)).forEach(function(e){$e(this,n),e===t&&t--}.bind(this)),p.push(t)}}function xe(){var e=f.getCurrentPageIndex(),t=V();t.length<=1&&t[0]!==e&&!w.scrolling&&W(e)}function ye(){w.scrolling=!1,w.base.state.thumbTargetPage=-1}function _e(e){if(w.base){var t=v._annos[e.page]||null,n=null;t&&(n=t[t.length-1].get()),n&&n.type===e.anno.type&&(n.multiview=!0,w.base.controllers.annotations.createAnnotation(n,e.page))}}function we(e){w.base&&w.base.controllers.annotations.deleteAnnoOnPage(e.page,e.index)}function ze(){w.base&&v._state.batchoperation<=0&&ge()}function ke(e){if(w.base){var t=e.anno.getPageIndex();if(function(e){for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t]._index===e)return!0;return!1}(t))for(var n=w.base.controllers.annotations.getAnnosFromPage(t),o=0;o<n.length;o++)n[o].type===e.anno.type&&n[o].update(!0)}}function Pe(e){if(("docinfo"===e.request.type||"annodata"===e.request.type||"formdata"===e.request.type)&&w.base){e.request.cancel=!0,"docinfo"===e.request.type&&(e.request.info.pagewidth=_.size.width,e.request.info.pageheight=_.size.height,e.request.info.pagecount=_.count,e.request.info.dpi=_.dpi,e.request.info.colordepth=w.base.controllers.memory.colorDepth,e.request.info.vector=_.vector);var t=void 0!==e.request.info.docIndex?e.request.info.docIndex:e.request.info.offset||0,n=-1<e.request.info.length?e.request.info.length+t:void 0;if(e.request.info.offset=e.request.info.offset||0,k.allowannotations&&("annodata"===e.request.type||e.request.data.atala_annurl)){var o=w.base.controllers.annotations.__getDebugInfo().data;e.request.info.layers=se(o.annos.slice(t,n),"items")}if(k.allowforms&&("formdata"===e.request.type||e.request.data.atala_formurl)){var i=w.base.controllers.forms.__getDebugInfo().data;e.request.info.forms={fields:se(i.fields.slice(t,n))}}f.trigger({type:"handlerreturned",request:e.request})}}function Te(){}function De(){}function Ce(e,t,n){for(var o in n)n.hasOwnProperty(o)&&delete n[o]}function Me(){w.base={config:u._config,controllers:u._controllers,dom:u._dom,page:u._page,state:u._state,stateManager:u.stateManager}}function Ee(e,t,n){_.size.width=w.base.page.size.width,_.size.height=w.base.page.size.height,_.count=w.base.page.count,_.dpi=w.base.page.dpi,_.vector=w.base.page.vector,G(),Xe(w.base.dom.scrollH),Xe(w.base.dom.scrollV);var o=function(){D()&&W(k.selectedindex),n&&"function"==typeof n&&n(e)};w.viewer.zoom=0,(D()||y&&!y.isViewerActive())&&C(f,t,!0),o()}function Se(){J(pn(this),k.selectedhovercolor,k.hovercolor)}function Ie(){J(pn(this),k.selectedcolor,k.backcolor)}function Fe(e){if(0===e.button){for(var t=e.currentTarget,n=-1,o=0;o<w.base.dom.pageDivs.length;o++)if(w.base.dom.pageDivs[o][0]===t){n=w.base.dom.pageDivs[o]._index;break}if(-1!==n)if(k.selectionmode===Ye.MultiSelect){var i=e.shiftKey,a=mn.Platform!==Ge.Mac?e.ctrlKey:e.metaKey;if(i){var r=g[g.length-1];if(n<r)for(var l=r-1;n<=l;l--)Ae(l,!0);else for(var s=r+1;s<=n;s++)Ae(s,!0)}else Ae(n,a)}else W(n)}}function Ae(e,t){t=t&&D(),-1!==g.indexOf(e)&&t?U(e):W(e,t)}function Oe(e,t,n){if(!(1<e.originalEvent.touches.length)){e.preventDefault();var o=e.originalEvent.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent(t,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,n,null),e.target.dispatchEvent(i)}}function Ve(e){if(o.moves=0,o.start={x:NaN,y:NaN},e.originalEvent.touches&&1===e.originalEvent.touches.length){var t=e.originalEvent.touches[0];o.start.x=t.screenX,o.start.y=t.screenY}Oe(e,"mouseover",0),Oe(e,"mousedown",0)}function Le(e){if(e.originalEvent.touches&&e.originalEvent.touches.length){var t=e.originalEvent.touches[0];(1<e.originalEvent.touches.length||5<Math.abs(o.start.x-t.screenX)||5<Math.abs(o.start.y-t.screenY))&&o.moves++,Oe(e,"mousemove",0)}}function He(e){Oe(e,"mouseup",0),0<o.moves?o.moves=0:Oe(e,"click",0),Oe(e,"mouseout",0)}function Re(){w.dragdropping&&(q(D()),w.base.dom.content.sortable("refresh"))}function je(e){if(k.showthumbcaption){if(!e.page._caption){var t=pn("<div/>");t.css({left:"3%",bottom:"16px",width:"94%",position:"absolute",zIndex:1,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),t.addClass(h.domclasses.atala_thumb_caption),e.page._caption=t,e.page.append(t)}var n=e.page._index+1+"";u._page.caption&&(n=u._page.caption.replace("{0}",n),e.page.attr("title",n)),e.page._caption.text(n)}e.page&&e.page._img&&!e.page._img._loaded&&Y(e.page._img,e.page._paper),Q(e.page,-1<g.indexOf(e.page._index)&&D())}function Be(e){e.image&&(e.image._loaded?e.page&&Y(e.image,e.page._paper,z.scale,{width:e.width,height:e.height}):e.image.css({position:"absolute"}))}function Ne(e){v&&v.__status&&v.__status(e.message)}function qe(){if(w.base){var e=w.base.page.size.width/w.base.page.size.height<1,t=Math.ceil(w.base.page.size.height*w.base.config.zoom),n=Math.ceil(w.base.page.size.width*w.base.config.zoom),o=Math.max(t,n),i=w.base.config.zoom*(o/(e?t:n));z.zoom=w.base.config.zoom/z.zoomfull,z.scale=i,pn.each(w.base.dom.pageDivs,function(e,t){t.width(o),t.height(o)})}}function We(){}function Ue(){}function Ze(e){v&&y&&f&&f.isReady()&&v.__updatePageSize(e,w.base.controllers.document,w.base.page.size,y.isThumbnailerActive(P()))}function Xe(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}return f&&(v=f.__getViewerLink(h,u),y=v.stateManager),h.bind({statusmessage:Ne,pagerotated:ge,pageinserted:ge,pageremoved:ge,pagemoved:ge,viewportunhide:ve}),h.bind({annotationsloaded:Te,formsloaded:De,contextmenu:Ce,documentloaded:Me,pageshown:je,pageresize:Be,scroll:Re,zoomchanged:qe,zoomstarted:We,zoomfinished:Ue,pagesizechanged:Ze}),H=h.empty,j=h.dispose,N=h.openUrl,F=h.__getDebugInfo,O=h.showPage,h.empty=L,h.dispose=R,h.openUrl=h.OpenUrl=B,h.__getDebugInfo=A,h.scrollToThumb=O,h.zoom=h.zoomIn=h.zoomOut=function(){},l=h.reloadPage,h.reloadPage=X,delete h.fit,pn.extend(h.events,i),c={click:Fe,touchstart:Ve,touchmove:Le,touchend:He,mouseenter:Se,mouseleave:Ie},h},WebDocumentViewer:Ke,Version:In};function Pe(){return"object"==typeof exports&&"object"==typeof e}function Te(){return"function"==typeof define&&n(126)}function De(){return!!self.Atalasoft}
/**
 * @namespace Utils
 * @memberof Atalasoft
 */
var Ce=_,Me={AnnotationTypes:Fe},Ee=Pe()||Te()||!De()?ke:we({},self.Atalasoft.Controls,ke),Se=Pe()||Te()||!De()?{}:we({},self.Atalasoft.Logger);
/**
 * @namespace Annotations
 * @memberof Atalasoft
 */}])});