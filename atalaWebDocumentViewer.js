//-------------------------------------------------------------------------------------------------
//
//  Web Document Viewer object cross browser client-side script. 
//  (C) 2003-2021 Kofax. All Rights Reserved.
//
//  This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)
//  Permission for usage and modification of this code is only permitted 
//  with the purchase of a source code license.
//-------------------------------------------------------------------------------------------------
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):"function"==typeof define&&define.amd?define(["jquery","raphael","jquery-ui","clipboard"],t):"object"==typeof exports?exports.Atalasoft=t(require("jquery"),require("raphael"),require("jquery-ui"),require("clipboard")):e.Atalasoft=t(e.jQuery,e.Raphael,e.jQuery.ui,e.ClipboardJS)}(window,function(n,o,i,a){return function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=119)}([function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var u=n(2),d=n(25).f,h=n(17),g=n(22),f=n(44),p=n(85),m=n(71);e.exports=function(e,t){var n,o,i,a,r,l=e.target,s=e.global,c=e.stat;if(n=s?u:c?u[l]||f(l,{}):(u[l]||{}).prototype)for(o in t){if(a=t[o],i=e.noTargetGet?(r=d(n,o))&&r.value:n[o],!m(s?o:l+(c?".":"#")+o,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;p(a,i)}(e.sham||i&&i.sham)&&h(a,"sham",!0),g(n,o,a,e)}}},function(e,t){e.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(e,t,n){var o=n(27)("wks"),i=n(46),a=n(2).Symbol,r=n(72);e.exports=function(e){return o[e]||(o[e]=r&&a[e]||(r?a:i)("Symbol."+e))}},function(e,t,n){var o=n(7);e.exports=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){"use strict";var h=n(35),g=n(20),f=n(10),p=n(23),m=n(52),v=n(51),_=Math.max,b=Math.min,o=n(28)("splice");n(1)({target:"Array",proto:!0,forced:!o},{splice:function(e,t){var n,o,i,a,r,l,s=p(this),c=f(s.length),u=h(e,c),d=arguments.length;if(0===d?n=o=0:o=1===d?(n=0,c-u):(n=d-2,b(_(g(t),0),c-u)),9007199254740991<c+n-o)throw TypeError("Maximum allowed length exceeded");for(i=m(s,o),a=0;a<o;a++)(r=u+a)in s&&v(i,a,s[r]);if(n<(i.length=o)){for(a=u;a<c-o;a++)l=a+n,(r=a+o)in s?s[l]=s[r]:delete s[l];for(a=c;c-o+n<a;a--)delete s[a-1]}else if(o<n)for(a=c-o;u<a;a--)l=a+n-1,(r=a+o-1)in s?s[l]=s[r]:delete s[l];for(a=0;a<n;a++)s[a+u]=arguments[a+2];return s.length=c-o+n,i}})},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var o=n(98),i=n(99),a=n(17),r=n(2);for(var l in o){var s=r[l],c=s&&s.prototype;if(c&&c.forEach!==i)try{a(c,"forEach",i)}catch(e){c.forEach=i}}},function(e,t,n){e.exports=!n(0)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(20),i=Math.min;e.exports=function(e){return 0<e?i(o(e),9007199254740991):0}},function(e,t,n){"use strict";var d=n(77),b=n(4),h=n(6),y=n(109),x=n(53),w=n(10),z=n(39),g=n(54),o=n(0),f=[].push,P=Math.min,D=4294967295,T=!o(function(){return!RegExp(D,"y")});n(40)("split",2,function(i,m,v){var _;return _="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){var n=String(h(this)),o=void 0===t?D:t>>>0;if(0===o)return[];if(void 0===e)return[n];if(!d(e))return m.call(n,e,o);for(var i,a,r,l=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,u=new RegExp(e.source,s+"g");(i=g.call(u,n))&&!(c<(a=u.lastIndex)&&(l.push(n.slice(c,i.index)),1<i.length&&i.index<n.length&&f.apply(l,i.slice(1)),r=i[0].length,c=a,l.length>=o));)u.lastIndex===i.index&&u.lastIndex++;return c===n.length?!r&&u.test("")||l.push(""):l.push(n.slice(c)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:m.call(this,e,t)}:m,[function(e,t){var n=h(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):_.call(String(n),e,t)},function(e,t){var n=v(_,e,this,t,_!==m);if(n.done)return n.value;var o=b(e),i=String(this),a=y(o,RegExp),r=o.unicode,l=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(T?"y":"g"),s=new a(T?o:"^(?:"+o.source+")",l),c=void 0===t?D:t>>>0;if(0===c)return[];if(0===i.length)return null===z(s,i)?[i]:[];for(var u=0,d=0,h=[];d<i.length;){s.lastIndex=T?d:0;var g,f=z(s,T?i:i.slice(d));if(null===f||(g=P(w(s.lastIndex+(T?0:d)),i.length))===u)d=x(i,d,r);else{if(h.push(i.slice(u,d)),h.length===c)return h;for(var p=1;p<=f.length-1;p++)if(h.push(f[p]),h.length===c)return h;d=u=g}}return h.push(i.slice(u)),h}]},!T)},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var o=n(9),i=n(66),a=n(4),r=n(26),l=Object.defineProperty;t.f=o?l:function(e,t,n){if(a(e),t=r(t,!0),a(n),i)try{return l(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){"use strict";var P=n(4),o=n(23),D=n(10),T=n(20),a=n(6),k=n(53),C=n(39),M=Math.max,E=Math.min,h=Math.floor,g=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g;n(40)("replace",2,function(i,x,w){return[function(e,t){var n=a(this),o=null==e?void 0:e[i];return void 0!==o?o.call(e,n,t):x.call(String(n),e,t)},function(e,t){var n=w(x,e,this,t);if(n.done)return n.value;var o=P(e),i=String(this),a="function"==typeof t;a||(t=String(t));var r=o.global;if(r){var l=o.unicode;o.lastIndex=0}for(var s=[];;){var c=C(o,i);if(null===c)break;if(s.push(c),!r)break;""===String(c[0])&&(o.lastIndex=k(i,D(o.lastIndex),l))}for(var u,d="",h=0,g=0;g<s.length;g++){c=s[g];for(var f=String(c[0]),p=M(E(T(c.index),i.length),0),m=[],v=1;v<c.length;v++)m.push(void 0===(u=c[v])?u:String(u));var _=c.groups;if(a){var b=[f].concat(m,p,i);void 0!==_&&b.push(_);var y=String(t.apply(void 0,b))}else y=z(f,i,p,m,_,t);h<=p&&(d+=i.slice(h,p)+y,h=p+f.length)}return d+i.slice(h)}];function z(a,r,l,s,c,e){var u=l+a.length,d=s.length,t=f;return void 0!==c&&(c=o(c),t=g),x.call(e,t,function(e,t){var n;switch(t.charAt(0)){case"$":return"$";case"&":return a;case"`":return r.slice(0,l);case"'":return r.slice(u);case"<":n=c[t.slice(1,-1)];break;default:var o=+t;if(0===o)return e;if(d<o){var i=h(o/10);return 0===i?e:i<=d?void 0===s[i-1]?t.charAt(1):s[i-1]+t.charAt(1):e}n=s[o-1]}return void 0===n?"":n})}})},function(e,t,n){"use strict";var c=n(7),u=n(37),d=n(35),h=n(10),g=n(16),f=n(51),p=n(3)("species"),m=[].slice,v=Math.max,o=n(28)("slice");n(1)({target:"Array",proto:!0,forced:!o},{slice:function(e,t){var n,o,i,a=g(this),r=h(a.length),l=d(e,r),s=d(void 0===t?r:t,r);if(u(a)&&("function"!=typeof(n=a.constructor)||n!==Array&&!u(n.prototype)?c(n)&&null===(n=n[p])&&(n=void 0):n=void 0,n===Array||void 0===n))return m.call(a,l,s);for(o=new(void 0===n?Array:n)(v(s-l,0)),i=0;l<s;l++,i++)l in a&&f(o,i,a[l]);return o.length=i,o}})},function(e,t,n){var o=n(43),i=n(6);e.exports=function(e){return o(i(e))}},function(e,t,n){var o=n(13),i=n(32);e.exports=n(9)?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(9),i=n(13).f,a=Function.prototype,r=a.toString,l=/^\s*function ([^ (]*)/;!o||"name"in a||i(a,"name",{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(e){return""}}})},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?o:n)(e)}},function(e,t,n){"use strict";var o=n(38)(2),i=n(28)("filter");n(1)({target:"Array",proto:!0,forced:!i},{filter:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var l=n(2),s=n(17),c=n(12),u=n(44),o=n(68),i=n(69),a=i.get,d=i.enforce,h=String(o).split("toString");n(27)("inspectSource",function(e){return o.call(e)}),(e.exports=function(e,t,n,o){var i=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,r=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||c(n,"name")||s(n,"name",t),d(n).source=h.join("string"==typeof t?t:"")),e!==l?(i?!r&&e[t]&&(a=!0):delete e[t],a?e[t]=n:s(e,t,n)):a?e[t]=n:u(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&a(this).source||o.call(this)})},function(e,t,n){var o=n(6);e.exports=function(e){return Object(o(e))}},function(e,t,n){"use strict";var o=n(16),i=[].join,a=n(43)!=Object,r=n(75)("join",",");n(1)({target:"Array",proto:!0,forced:a||r},{join:function(e){return i.call(o(this),void 0===e?",":e)}})},function(e,t,n){var o=n(9),i=n(42),a=n(32),r=n(16),l=n(26),s=n(12),c=n(66),u=Object.getOwnPropertyDescriptor;t.f=o?u:function(e,t){if(e=r(e),t=l(t,!0),c)try{return u(e,t)}catch(e){}if(s(e,t))return a(!i.f.call(e,t),e[t])}},function(e,t,n){var i=n(7);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var o=n(2),i=n(44),a="__core-js_shared__",r=o[a]||i(a,{});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.0.1",mode:n(65)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){var o=n(0),i=n(3)("species");e.exports=function(t){return!o(function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},function(e,t,n){"use strict";var o=n(38)(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),n(1)({target:"Array",proto:!0,forced:a},{find:function(e){return o(this,e,1<arguments.length?arguments[1]:void 0)}}),n(78)(i)},function(e,t,n){"use strict";var o=n(38)(1),i=n(28)("map");n(1)({target:"Array",proto:!0,forced:!i},{map:function(e){return o(this,e,arguments[1])}})},function(e,t){e.exports=n},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports={}},function(e,t,n){var o=n(70),i=n(47).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,i)}},function(e,t,n){var o=n(20),i=Math.max,a=Math.min;e.exports=function(e,t){var n=o(e);return n<0?i(n+t,0):a(n,t)}},function(e,t,n){var o=n(70),i=n(47);e.exports=Object.keys||function(e){return o(e,i)}},function(e,t,n){var o=n(19);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){var b=n(95),y=n(43),x=n(23),w=n(10),o=n(52);e.exports=function(d,e){var h=1==d,g=2==d,f=3==d,p=4==d,m=6==d,v=5==d||m,_=e||o;return function(e,t,n){for(var o,i,a=x(e),r=y(a),l=b(t,n,3),s=w(r.length),c=0,u=h?_(e,s):g?_(e,0):void 0;c<s;c++)if((v||c in r)&&(i=l(o=r[c],c,a),d))if(h)u[c]=i;else if(i)switch(d){case 3:return!0;case 5:return o;case 6:return c;case 2:u.push(o)}else if(p)return!1;return m?-1:f||p?p:u}}},function(e,t,n){var i=n(19),a=n(54);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},function(e,t,n){"use strict";var d=n(17),h=n(22),g=n(0),f=n(3),p=n(54),m=f("species"),v=!g(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),_=!g(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]});e.exports=function(n,e,t,o){var i=f(n),a=!g(function(){var e={};return e[i]=function(){return 7},7!=""[n](e)}),r=a&&!g(function(){var e=!1,t=/a/;return t.exec=function(){return e=!0,null},"split"===n&&(t.constructor={},t.constructor[m]=function(){return t}),t[i](""),!e});if(!a||!r||"replace"===n&&!v||"split"===n&&!_){var l=/./[i],s=t(i,""[n],function(e,t,n,o,i){return t.exec===p?a&&!i?{done:!0,value:l.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),c=s[0],u=s[1];h(String.prototype,n,c),h(RegExp.prototype,i,2==e?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}),o&&d(RegExp.prototype[i],"sham",!0)}}},function(e,t,n){"use strict";var o=n(79),i=n(110)("trim");n(1)({target:"String",proto:!0,forced:i},{trim:function(){return o(this,3)}})},function(e,t,n){"use strict";var o={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!o.call({1:2},1);t.f=a?function(e){var t=i(this,e);return!!t&&t.enumerable}:o},function(e,t,n){var o=n(0),i=n(19),a="".split;e.exports=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==i(e)?a.call(e,""):Object(e)}:Object},function(e,t,n){var o=n(2),i=n(17);e.exports=function(t,n){try{i(o,t,n)}catch(e){o[t]=n}return n}},function(e,t,n){var o=n(27)("keys"),i=n(46);e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var o=n(4),i=n(92),a=n(47),r=n(93),l=n(67),s=n(45)("IE_PROTO"),c="prototype",u=function(){},d=function(){var e,t=l("iframe"),n=a.length,o="script";for(t.style.display="none",r.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object</"+o+">"),e.close(),d=e.F;n--;)delete d[c][a[n]];return d()};e.exports=Object.create||function(e,t){var n;return null!==e?(u[c]=o(e),n=new u,u[c]=null,n[s]=e):n=d(),void 0===t?n:i(n,t)},n(33)[s]=!0},function(e,t,n){"use strict";var o=n(37),i=n(7),c=n(23),u=n(10),d=n(51),h=n(52),a=n(3)("isConcatSpreadable"),g=9007199254740991,f="Maximum allowed index exceeded",r=!n(0)(function(){var e=[];return e[a]=!1,e.concat()[0]!==e}),l=n(28)("concat"),p=function(e){if(!i(e))return!1;var t=e[a];return void 0!==t?!!t:o(e)},s=!r||!l;n(1)({target:"Array",proto:!0,forced:s},{concat:function(e){var t,n,o,i,a,r=c(this),l=h(r,0),s=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?r:arguments[t],p(a)){if(i=u(a.length),g<s+i)throw TypeError(f);for(n=0;n<i;n++,s++)n in a&&d(l,s,a[n])}else{if(g<=s)throw TypeError(f);d(l,s++,a)}return l.length=s,l}})},function(e,t,n){"use strict";var i=n(26),a=n(13),r=n(32);e.exports=function(e,t,n){var o=i(t);o in e?a.f(e,o,r(0,n)):e[o]=n}},function(e,t,n){var o=n(7),i=n(37),a=n(3)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){"use strict";var o=n(101);e.exports=function(e,t,n){return t+(n?o(e,t,!0).length:1)}},function(e,t,n){"use strict";var o,i,r=n(76),l=RegExp.prototype.exec,s=String.prototype.replace,a=l,c=(o=/a/,i=/b*/g,l.call(o,"a"),l.call(i,"a"),0!==o.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(a=function(e){var t,n,o,i,a=this;return u&&(n=new RegExp("^"+a.source+"$(?!\\s)",r.call(a))),c&&(t=a.lastIndex),o=l.call(a,e),c&&o&&(a.lastIndex=a.global?o.index+o[0].length:t),u&&o&&1<o.length&&s.call(o[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o}),e.exports=a},function(e,t,n){"use strict";var o=n(2),i=n(71),a=n(12),r=n(19),l=n(105),u=n(26),s=n(0),c=n(34).f,d=n(25).f,h=n(13).f,g=n(79),f="Number",p=o[f],m=p.prototype,v=r(n(49)(m))==f,_="trim"in String.prototype,b=function(e){var t,n,o,i,a,r,l,s,c=u(e,!1);if("string"==typeof c&&2<c.length)if(43===(t=(c=_?c.trim():g(c,3)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+c}for(r=(a=c.slice(2)).length,l=0;l<r;l++)if((s=a.charCodeAt(l))<48||i<s)return NaN;return parseInt(a,o)}return+c};if(i(f,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var y,x=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof x&&(v?s(function(){m.valueOf.call(n)}):r(n)!=f)?l(new p(b(t)),n,x):b(t)},w=n(9)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;w.length>z;z++)a(p,y=w[z])&&!a(x,y)&&h(x,y,d(p,y));(x.prototype=m).constructor=x,n(22)(o,f,x)}},function(e,t,n){"use strict";var s=n(4),i=n(6),c=n(108),u=n(39);n(40)("search",1,function(o,r,l){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=l(r,e,this);if(t.done)return t.value;var n=s(e),o=String(this),i=n.lastIndex;c(i,0)||(n.lastIndex=0);var a=u(n,o);return c(n.lastIndex,i)||(n.lastIndex=i),null===a?-1:a.index}]})},function(e,t,n){"use strict";var c=n(20),u=n(111),d=n(112),o=1..toFixed,i=Math.floor,a=[0,0,0,0,0,0],h=function(e,t){for(var n=-1,o=t;++n<6;)o+=e*a[n],a[n]=o%1e7,o=i(o/1e7)},g=function(e){for(var t=6,n=0;0<=--t;)n+=a[t],a[t]=i(n/e),n=n%e*1e7},f=function(){for(var e=6,t="";0<=--e;)if(""!==t||0===e||0!==a[e]){var n=String(a[e]);t=""===t?n:t+d.call("0",7-n.length)+n}return t},p=function(e,t,n){return 0===t?n:t%2==1?p(e,t-1,n*e):p(e*e,t/2,n)};n(1)({target:"Number",proto:!0,forced:o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(0)(function(){o.call({})})},{toFixed:function(e){var t,n,o,i,a=u(this),r=c(e),l="",s="0";if(r<0||20<r)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||1e21<=a)return String(a);if(a<0&&(l="-",a=-a),1e-21<a)if(n=(t=function(e){for(var t=0,n=e;4096<=n;)t+=12,n/=4096;for(;2<=n;)t+=1,n/=2;return t}(a*p(2,69,1))-69)<0?a*p(2,-t,1):a/p(2,t,1),n*=4503599627370496,0<(t=52-t)){for(h(0,n),o=r;7<=o;)h(1e7,0),o-=7;for(h(p(10,o,1),0),o=t-1;23<=o;)g(1<<23),o-=23;g(1<<o),h(1,1),g(2),s=f()}else h(0,n),h(1<<-t,0),s=f()+d.call("0",r);return s=0<r?l+((i=s.length)<=r?"0."+d.call("0",r-i)+s:s.slice(0,i-r)+"."+s.slice(i-r)):l+s}})},function(e,t,n){"use strict";var o=n(59),i=n(60)("bold");n(1)({target:"String",proto:!0,forced:i},{bold:function(){return o(this,"b","","")}})},function(e,t,n){var r=n(6),l=/"/g;e.exports=function(e,t,n,o){var i=String(r(e)),a="<"+t;return""!==n&&(a+=" "+n+'="'+String(o).replace(l,"&quot;")+'"'),a+">"+i+"</"+t+">"}},function(e,t,n){var o=n(0);e.exports=function(t){return o(function(){var e=""[t]('"');return e!==e.toLowerCase()||3<e.split('"').length})}},function(e,t,n){"use strict";var o=n(59),i=n(60)("italics");n(1)({target:"String",proto:!0,forced:i},{italics:function(){return o(this,"i","","")}})},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=!1},function(e,t,n){e.exports=!n(9)&&!n(0)(function(){return 7!=Object.defineProperty(n(67)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(7),i=n(2).document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},function(e,t,n){e.exports=n(27)("native-function-to-string",Function.toString)},function(e,t,n){var o,i,a,r=n(84),l=n(7),s=n(17),c=n(12),u=n(45),d=n(33),h=n(2).WeakMap;if(r){var g=new h,f=g.get,p=g.has,m=g.set;o=function(e,t){return m.call(g,e,t),t},i=function(e){return f.call(g,e)||{}},a=function(e){return p.call(g,e)}}else{var v=u("state");d[v]=!0,o=function(e,t){return s(e,v,t),t},i=function(e){return c(e,v)?e[v]:{}},a=function(e){return c(e,v)}}e.exports={set:o,get:i,has:a,enforce:function(e){return a(e)?i(e):o(e,{})},getterFor:function(n){return function(e){var t;if(!l(e)||(t=i(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},function(e,t,n){var r=n(12),l=n(16),s=n(87)(!1),c=n(33);e.exports=function(e,t){var n,o=l(e),i=0,a=[];for(n in o)!r(c,n)&&r(o,n)&&a.push(n);for(;t.length>i;)r(o,n=t[i++])&&(~s(a,n)||a.push(n));return a}},function(e,t,n){var o=n(0),i=/#|\.prototype\./,a=function(e,t){var n=l[r(e)];return n==c||n!=s&&("function"==typeof t?o(t):!!t)},r=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=a.data={},s=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},function(e,t,n){e.exports=!n(0)(function(){return!String(Symbol())})},function(e,t,n){t.f=n(3)},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e,t){var n=[][e];return!n||!o(function(){n.call(null,t||function(){throw 1},1)})}},function(e,t,n){"use strict";var o=n(4);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){var o=n(7),i=n(19),a=n(3)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},function(e,t,n){var o=n(3)("unscopables"),i=n(49),a=n(17),r=Array.prototype;null==r[o]&&a(r,o,i(null)),e.exports=function(e){r[o][e]=!0}},function(e,t,n){var o=n(6),i="["+n(80)+"]",a=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$");e.exports=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(r,"")),e}},function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(e,t,n){var o=n(113),i=Object.prototype;o!==i.toString&&n(22)(i,"toString",o,{unsafe:!0})},function(e,t,n){"use strict";var o=n(4),i=n(0),a=n(76),r=n(9),l="toString",s=/./[l],c=i(function(){return"/a/b"!=s.call({source:"a",flags:"b"})}),u=s.name!=l;(c||u)&&n(22)(RegExp.prototype,l,function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?a.call(e):void 0)},{unsafe:!0})},function(e,t,n){"use strict";var o=n(2),r=n(12),i=n(9),a=n(65),l=n(1),s=n(22),c=n(33),u=n(0),d=n(27),h=n(88),g=n(46),f=n(3),p=n(73),m=n(89),v=n(91),_=n(37),b=n(4),y=n(7),x=n(16),w=n(26),z=n(32),P=n(49),D=n(94),T=n(25),k=n(13),C=n(42),M=n(17),E=n(36),S=n(45)("hidden"),F=n(69),A="Symbol",I=F.set,O=F.getterFor(A),V=T.f,H=k.f,L=D.f,R=o.Symbol,B=o.JSON,j=B&&B.stringify,q="prototype",N=f("toPrimitive"),W=C.f,U=d("symbol-registry"),Z=d("symbols"),X=d("op-symbols"),G=d("wks"),Y=Object[q],Q=o.QObject,J=n(72),K=!Q||!Q[q]||!Q[q].findChild,$=i&&u(function(){return 7!=P(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=V(Y,t);o&&delete Y[t],H(e,t,n),o&&e!==Y&&H(Y,t,o)}:H,ee=function(e,t){var n=Z[e]=P(R[q]);return I(n,{type:A,tag:e,description:t}),i||(n.description=t),n},te=J&&"symbol"==typeof R.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof R},ne=function(e,t,n){return e===Y&&ne(X,t,n),b(e),t=w(t,!0),b(n),r(Z,t)?(n.enumerable?(r(e,S)&&e[S][t]&&(e[S][t]=!1),n=P(n,{enumerable:z(0,!1)})):(r(e,S)||H(e,S,z(1,{})),e[S][t]=!0),$(e,t,n)):H(e,t,n)},oe=function(e,t){b(e);for(var n,o=v(t=x(t)),i=0,a=o.length;i<a;)ne(e,n=o[i++],t[n]);return e},ie=function(e){var t=W.call(this,e=w(e,!0));return!(this===Y&&r(Z,e)&&!r(X,e))&&(!(t||!r(this,e)||!r(Z,e)||r(this,S)&&this[S][e])||t)},ae=function(e,t){if(e=x(e),t=w(t,!0),e!==Y||!r(Z,t)||r(X,t)){var n=V(e,t);return!n||!r(Z,t)||r(e,S)&&e[S][t]||(n.enumerable=!0),n}},re=function(e){for(var t,n=L(x(e)),o=[],i=0;n.length>i;)r(Z,t=n[i++])||r(c,t)||o.push(t);return o},le=function(e){for(var t,n=e===Y,o=L(n?X:x(e)),i=[],a=0;o.length>a;)!r(Z,t=o[a++])||n&&!r(Y,t)||i.push(Z[t]);return i};J||(s((R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var e=void 0===arguments[0]?void 0:String(arguments[0]),t=g(e),n=function(e){this===Y&&n.call(X,e),r(this,S)&&r(this[S],t)&&(this[S][t]=!1),$(this,t,z(1,e))};return i&&K&&$(Y,t,{configurable:!0,set:n}),ee(t,e)})[q],"toString",function(){return O(this).tag}),C.f=ie,k.f=ne,T.f=ae,n(34).f=D.f=re,n(48).f=le,i&&(H(R[q],"description",{configurable:!0,get:function(){return O(this).description}}),a||s(Y,"propertyIsEnumerable",ie,{unsafe:!0})),p.f=function(e){return ee(f(e),e)}),l({global:!0,wrap:!0,forced:!J,sham:!J},{Symbol:R});for(var se=E(G),ce=0;se.length>ce;)m(se[ce++]);l({target:A,stat:!0,forced:!J},{for:function(e){return r(U,e+="")?U[e]:U[e]=R(e)},keyFor:function(e){if(!te(e))throw TypeError(e+" is not a symbol");for(var t in U)if(U[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),l({target:"Object",stat:!0,forced:!J,sham:!i},{create:function(e,t){return void 0===t?P(e):oe(P(e),t)},defineProperty:ne,defineProperties:oe,getOwnPropertyDescriptor:ae}),l({target:"Object",stat:!0,forced:!J},{getOwnPropertyNames:re,getOwnPropertySymbols:le}),B&&l({target:"JSON",stat:!0,forced:!J||u(function(){var e=R();return"[null]"!=j([e])||"{}"!=j({a:e})||"{}"!=j(Object(e))})},{stringify:function(e){for(var t,n,o=[e],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=t=o[1],(y(t)||void 0!==e)&&!te(e))return _(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!te(t))return t}),o[1]=t,j.apply(B,o)}}),R[q][N]||M(R[q],N,R[q].valueOf),h(R,A),c[S]=!0},function(e,t,n){var o=n(68),i=n(2).WeakMap;e.exports="function"==typeof i&&/native code/.test(o.call(i))},function(e,t,n){var l=n(12),s=n(86),c=n(25),u=n(13);e.exports=function(e,t){for(var n=s(t),o=u.f,i=c.f,a=0;a<n.length;a++){var r=n[a];l(e,r)||o(e,r,i(t,r))}}},function(e,t,n){var o=n(34),i=n(48),a=n(4),r=n(2).Reflect;e.exports=r&&r.ownKeys||function(e){var t=o.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var s=n(16),c=n(10),u=n(35);e.exports=function(l){return function(e,t,n){var o,i=s(e),a=c(i.length),r=u(n,a);if(l&&t!=t){for(;r<a;)if((o=i[r++])!=o)return!0}else for(;r<a;r++)if((l||r in i)&&i[r]===t)return l||r||0;return!l&&-1}}},function(e,t,n){var o=n(13).f,i=n(12),a=n(3)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,a)&&o(e,a,{configurable:!0,value:t})}},function(e,t,n){var o=n(90),i=n(12),a=n(73),r=n(13).f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});i(t,e)||r(t,e,{value:a.f(e)})}},function(e,t,n){e.exports=n(2)},function(e,t,n){var l=n(36),s=n(48),c=n(42);e.exports=function(e){var t=l(e),n=s.f;if(n)for(var o,i=n(e),a=c.f,r=0;i.length>r;)a.call(e,o=i[r++])&&t.push(o);return t}},function(e,t,n){var o=n(9),r=n(13),l=n(4),s=n(36);e.exports=o?Object.defineProperties:function(e,t){l(e);for(var n,o=s(t),i=o.length,a=0;a<i;)r.f(e,n=o[a++],t[n]);return e}},function(e,t,n){var o=n(2).document;e.exports=o&&o.documentElement},function(e,t,n){var o=n(16),i=n(34).f,a={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return r&&"[object Window]"==a.call(e)?function(e){try{return i(e)}catch(e){return r.slice()}}(e):i(o(e))}},function(e,t,n){var a=n(74);e.exports=function(o,i,e){if(a(o),void 0===i)return o;switch(e){case 0:return function(){return o.call(i)};case 1:return function(e){return o.call(i,e)};case 2:return function(e,t){return o.call(i,e,t)};case 3:return function(e,t,n){return o.call(i,e,t,n)}}return function(){return o.apply(i,arguments)}}},function(e,t,n){var o=n(16),i=n(25).f,a=n(9),r=n(0)(function(){i(1)}),l=!a||r;n(1)({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},function(e,t,n){var o=n(23),i=n(36),a=n(0)(function(){i(1)});n(1)({target:"Object",stat:!0,forced:a},{keys:function(e){return i(o(e))}})},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){"use strict";var o=[].forEach,i=n(38)(0),a=n(75)("forEach");e.exports=a?function(e){return i(this,e,arguments[1])}:o},function(e,t,n){"use strict";var d=n(4),h=n(10),i=n(6),g=n(53),f=n(39);n(40)("match",1,function(o,c,u){return[function(e){var t=i(this),n=null==e?void 0:e[o];return void 0!==n?n.call(e,t):new RegExp(e)[o](String(t))},function(e){var t=u(c,e,this);if(t.done)return t.value;var n=d(e),o=String(this);if(!n.global)return f(n,o);for(var i,a=n.unicode,r=[],l=n.lastIndex=0;null!==(i=f(n,o));){var s=String(i[0]);""===(r[l]=s)&&(n.lastIndex=g(o,h(n.lastIndex),a)),l++}return 0===l?null:r}]})},function(e,t,n){var s=n(20),c=n(6);e.exports=function(e,t,n){var o,i,a=String(c(e)),r=s(t),l=a.length;return r<0||l<=r?n?"":void 0:(o=a.charCodeAt(r))<55296||56319<o||r+1===l||(i=a.charCodeAt(r+1))<56320||57343<i?n?a.charAt(r):o:n?a.slice(r,r+2):i-56320+(o-55296<<10)+65536}},function(e,t,n){"use strict";var i=n(10),a=n(103),r="startsWith",o=n(104)(r),l=""[r];n(1)({target:"String",proto:!0,forced:!o},{startsWith:function(e){var t=a(this,e,r),n=i(Math.min(1<arguments.length?arguments[1]:void 0,t.length)),o=String(e);return l?l.call(t,o,n):t.slice(n,n+o.length)===o}})},function(e,t,n){var o=n(77),i=n(6);e.exports=function(e,t,n){if(o(t))throw TypeError("String.prototype."+n+" doesn't accept regex");return String(i(e))}},function(e,t,n){var o=n(3)("match");e.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[o]=!1,"/./"[t](n)}catch(e){}}return!1}},function(e,t,n){var a=n(7),r=n(106);e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&a(o)&&r&&r(e,o),e}},function(e,t,n){var i=n(107);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,o=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),o=e instanceof Array}catch(e){}return function(e,t){return i(e,t),o?n.call(e,t):e.__proto__=t,e}}():void 0)},function(e,t,n){var o=n(7),i=n(4);e.exports=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}},function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},function(e,t,n){var i=n(4),a=n(74),r=n(3)("species");e.exports=function(e,t){var n,o=i(e).constructor;return void 0===o||null==(n=i(o)[r])?t:a(n)}},function(e,t,n){var o=n(0),i=n(80);e.exports=function(e){return o(function(){return!!i[e]()||"​᠎"!="​᠎"[e]()||i[e].name!==e})}},function(e,t,n){var o=n(19);e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},function(e,t,n){"use strict";var i=n(20),a=n(6);e.exports="".repeat||function(e){var t=String(a(this)),n="",o=i(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;0<o;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},function(e,t,n){"use strict";var o=n(114),i={};i[n(3)("toStringTag")]="z",e.exports="[object z]"!==String(i)?function(){return"[object "+o(this)+"]"}:i.toString},function(e,t,n){var i=n(19),a=n(3)("toStringTag"),r="Arguments"==i(function(){return arguments}());e.exports=function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?n:r?i(t):"Object"==(o=i(t))&&"function"==typeof t.callee?"Arguments":o}},function(e,t,n){n(1)({target:"Array",proto:!0},{fill:n(116)}),n(78)("fill")},function(e,t,n){"use strict";var l=n(23),s=n(35),c=n(10);e.exports=function(e){for(var t=l(this),n=c(t.length),o=arguments.length,i=s(1<o?arguments[1]:void 0,n),a=2<o?arguments[2]:void 0,r=void 0===a?n:s(a,n);i<r;)t[i++]=e;return t}},function(e,t,n){"use strict";var o=n(59),i=n(60)("strike");n(1)({target:"String",proto:!0,forced:i},{strike:function(){return o(this,"strike","","")}})},function(t,e){(function(e){t.exports=e}).call(this,{})},function(e,t,n){"use strict";n.r(t);n(83),n(50),n(21),n(96),n(97),n(8),n(100),n(14),n(102);var Ge,o,i=n(31),a=n(62),r=n(63),l=n(64),en=void 0===i?null:i,tn=(void 0===r&&(void 0===i.ui||i.ui),void 0===a?null:a),Re=void 0===l?null:l;function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}(o=Ge||(Ge={}))[o.Windows=0]="Windows",o[o.Mac=1]="Mac",o[o.Unknown=2]="Unknown";var h,g,f=function(){function e(){}return e.prototype.Any=function(){return this.iOS||this.Android||this.IEMobile},d(e,[{key:"iOS",get:function(){return!!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)}},{key:"Android",get:function(){return!!navigator.userAgent.match(/(Android)/i)}},{key:"IEMobile",get:function(){return!!navigator.userAgent.match(/(IEMobile)/i)}}]),e}(),p=function(){function e(){c(this,"browserLayoutVersion",navigator.userAgent.match(/(?:Gecko|Presto|Trident|WebKit).[\d.]*/))}return d(e,[{key:"Gecko",get:function(){return!!navigator.userAgent.match(/(Gecko)/i)}},{key:"Presto",get:function(){return!!navigator.userAgent.match(/(Presto)/i)}},{key:"Trident",get:function(){return!!navigator.userAgent.match(/(Trident)/i)}},{key:"Webkit",get:function(){return!!navigator.userAgent.match(/(WebKit)/i)}},{key:"Version",get:function(){return this.browserLayoutVersion?this.browserLayoutVersion[0].replace(/\D*/,""):null}}]),e}(),m=function(){function e(){c(this,"supportsVml",e.supportsVML())}return e.supportsVML=function(){var e;if(void 0===e){var t=en("<div/>").appendTo("body"),n=en('<v:shape id="vml_flag1" adj="1" />').appendTo(t);n.css("behavior","url(#default#VML)"),e=!n[0]||"object"==typeof n[0].adj,t.remove()}return e},d(e,[{key:"SVG",get:function(){return!(!window.SVGAngle&&!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"))}},{key:"Touch",get:function(){return!!("ontouchstart"in window)}},{key:"VML",get:function(){return this.supportsVml}},{key:"foreignObject",get:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Extensibility","1.1")}},{key:"Compatibility",get:function(){return void 0!==document.documentMode&&7===document.documentMode}},{key:"FlexBox",get:function(){return"flex"in document.documentElement.style||"WebkitFlex"in document.documentElement.style||"msFlex"in document.documentElement.style}}]),e}(),v=function(){function e(){c(this,"mobile",void 0),c(this,"browserVersion",void 0),this.mobile=new f,this.Edge?this.browserVersion=navigator.userAgent.match(/(?:Edge).[\d.]*/):this.browserVersion=null,this.browserVersion||(this.browserVersion=navigator.userAgent.match(/(?:MSIE|Firefox|Chrome|Safari|Opera| rv|Edge).[\d.]*/))}return d(e,[{key:"Explorer",get:function(){return 0<=navigator.userAgent.indexOf("MSIE")||0<=navigator.userAgent.indexOf("Trident")}},{key:"Firefox",get:function(){return 0<=navigator.userAgent.indexOf("Firefox")||0<=navigator.userAgent.indexOf("Minefield")}},{key:"Safari",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&navigator.userAgent.indexOf("Chrome")<0&&navigator.userAgent.indexOf("Edge")<0}},{key:"Opera",get:function(){return 0<=navigator.userAgent.indexOf("Opera")}},{key:"Chrome",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")<0}},{key:"Edge",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&0<=navigator.userAgent.indexOf("Edge")}},{key:"Mobile",get:function(){return this.mobile}},{key:"Version",get:function(){return this.browserVersion?this.browserVersion[0].replace(/\D*/,""):null}}]),e}(),_=function(t){var e,n;function o(){var e;return c(s(e=t.call(this)||this),"features",void 0),c(s(e),"layout",void 0),c(s(e),"platform",void 0),e.features=new m,e.layout=new p,e.platform=e.DetectPlatform(),e}
/**
   * @private
   */return n=t,(e=o).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n,o.prototype.DetectPlatform=function(){return navigator.platform.startsWith("Mac")?Ge.Mac:navigator.platform.startsWith("Win")?Ge.Windows:Ge.Unknown},d(o,[{key:"Features",get:function(){return this.features}
/**
     * @private
     */},{key:"Layout",get:function(){return this.layout}
/**
     * @private
     */},{key:"Platform",get:function(){return this.platform}}]),o}(v),b=new v,nn=new _,y=b,on={
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
Custom:"%2"},an={
/** Scrolls horizontally. */
Horizontal:"horizontal",
/** Scrolls vertically. */
Vertical:"vertical"},rn={
/** No fitting will be applied to the image */
None:0,
/** Finds the best option between width or height based fitting. */
Best:1,
/** Fits the image to the available width. */
Width:2,
/** Fits the image to the available height. */
Height:3},ln={
/** Selects the page under the top left corner of the viewer  */
TopLeft:{x:0,y:0},
/** Selects the page under the middle left of the viewer  */
MiddleLeft:{x:0,y:.5},
/** Selects the page under the bottom left corner of the viewer  */
BottomLeft:{x:0,y:1},
/** Selects the page under the center location of viewer  */
Center:{x:.5,y:.5}},sn={
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
MultiSelect:1},Qe={
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
Name:3},x={FileUploadRejectReason:w,SelectedItemsOrder:Qe,SelectionMode:Ye,ScrollArea:sn,PageSelection:ln,Fitting:rn,ScrollDirection:an,MouseToolCursor:Be,MouseToolType:on,Browser:y},ye={
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
polygon:"polygon"},cn=(n(29),n(24),n(15),n(5),n(18),n(55),n(56),n(11),{
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
atala_upload_files_header_status:"atala-upload-files-header-status",
/** Tile column */
atala_tile_column:"atala_tile_column",
/** Tiled page */
atala_tiled_page_image:"atala_tiled_page_image"}),un={
/** Index of the page currently displayed within the element. applies to elements having `.atala_page_div` class */
atala_page_index:"atala_page_index"};n(30);function z(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(g=h||(h={})).Jquery="jQuery",g.JqueryUI="jQuery UI",g.RaphaelJS="Raphaël",g.Clipboard="clipboard.js";var P,D,T,k=function(){function r(){}var e=r.prototype;return e.checkDependency=function(e,t){var n=this,o=r.requiredDependencies.filter(function(e){return z(this,n),e.name===t}.bind(this))[0],i={dependency:o,success:!1,reason:"Dependency is not loaded or not found."};if(e){var a="";switch(e.fn&&e.fn.jquery?a=e.fn.jquery:e.version&&(a=e.version),t){case h.Clipboard:i.success=!0,i.reason="WDV can't verify the version of the dependency.";break;case h.Jquery:case h.JqueryUI:case h.RaphaelJS:this.hasNewerVersion(a,o.version)?(i.success=!0,i.reason=""):i.reason="Dependency has a lower version ("+a+") than required."}}return 0<i.reason.length&&(i.reason+=" The minimal required version is '"+o.version+"'."),i},e.hasNewerVersion=function(e,t){var o=this;if(/^[0-9]+\.[0-9]+\.[0-9]+(-([A-Za-z0-9-]+\.?)+)?(\+([A-Za-z0-9-]+\.?)+)?$/.test(e)){for(var i=/^[0-9]+\.[0-9]+\.[0-9]+/,n=function(e){var t=this;if(z(this,o),null!==i){var n=i.exec(e);if(null!=n&&0<n.length)return n[0].split(".").map(function(e){return z(this,t),parseInt(e)}.bind(this))}return[]}.bind(this),a=n(e),r=n(t),l=0;l<3;l++){if(a[l]<r[l])return!1;if(a[l]>r[l])return!0}var s=e.replace(i,"");return 0===s.length||"+"===s[0]}return!1},r}();function C(e,t,n,o,i){var a=e.checkDependency(t,n);return a.success?(i&&i(n,a.reason),!0):(o(n,a.reason),!1)}function M(e){var n=this,t=new k,o=function(e,t){z(this,n),console.error("The dependency verification for '"+e+"' has failed. "+t)}.bind(this),i=function(e,t){z(this,n)}.bind(this),a=C(t,void 0===en?null:en,h.Jquery,o);return e.checkjQueryOnly||(a&&(a=C(t,en.ui,h.JqueryUI,o)),e.checkRaphael&&(a=C(t,void 0===tn?null:tn,h.RaphaelJS,o)&&a),e.checkClipboard&&(a=C(t,void 0===Re?null:Re,h.Clipboard,o,i)&&a)),a}function dn(){return M({checkjQueryOnly:!0,checkRaphael:!1,checkClipboard:!1})}function hn(e,t){return M({checkjQueryOnly:!1,checkRaphael:e||t,checkClipboard:t})}
/** Annotations related strings.
 * @enum {string}
 * @memberOf Atalasoft.Utils
 */P=k,D="requiredDependencies",T=[{name:h.Jquery,version:"1.12.4"},{name:h.JqueryUI,version:"1.12."},{name:h.RaphaelJS,version:"2.1.0"},{name:h.Clipboard,version:"2.0.0"}],D in P?Object.defineProperty(P,D,{value:T,enumerable:!0,configurable:!0,writable:!0}):P[D]=T;var E={
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
valueHeightShort:"short"},gn={annotations:E};
/**
 * Represents strings for {@link Atalasoft.Controls.WebDocumentViewer|WebDocumentViewer} localization.
 * @property {Atalasoft.Utils.LocalizationAnnotationStrings} annotations - Contains a translation table for annotations specific strings.
 * @memberOf Atalasoft.Utils
 */n(41);
/**
 * @private
 */
function X(e,t,n){for(t||(t={x:0,y:0}),n||(n=e.target instanceof HTMLElement?e.target:null),nn.Explorer&&null===e&&(e=event),e instanceof MouseEvent?(t.x=e.clientX,t.y=e.clientY):(t.x=e.touches[0].clientX,t.y=e.touches[0].clientY);n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)t.x-=n.offsetLeft-n.scrollLeft,t.y-=n.offsetTop-n.scrollTop,n=n.offsetParent instanceof HTMLElement?n.offsetParent:null;return t}
/**
 * @private
 */function Y(e,t,n){t||(t={x:0,y:0});var o=e.originalEvent;if(e.offsetX||e.offsetY)if(nn.Firefox){var i=e.target.raphaelParent?en(e.target).parents("svg").offset():en(e.target.offsetParent||e.target.parentNode).offset();t.y=i?(t.x=e.pageX-i.left,e.pageY-i.top):(t.x=e.pageX,e.pageY)}else if(void 0===o||o.currentTarget===o.target||n)t.x=e.offsetX,t.y=e.offsetY;else if(o.currentTarget.offsetLeft||o.currentTarget.offsetTop||!o.currentTarget.ownerSVGElement)t.x=o.currentTarget.offsetLeft+e.offsetX,t.y=o.currentTarget.offsetTop+e.offsetY;else{var a=nn.Explorer?o.currentTarget.ownerSVGElement.getBBox():o.currentTarget.getBBox();t.x=Math.round(a.x),t.y=Math.round(a.y)}else if(nn.Explorer)o instanceof MouseEvent?(t.x=o.x,t.y=o.y):(t.x=0,t.y=0);else{var r=null,l=e.target;o instanceof TouchEvent&&1===o.touches.length&&(l=document.elementFromPoint(o.touches[0].clientX,o.touches[0].clientY));var s=nn.Features.Touch&&o instanceof TouchEvent?o.touches[0]:null,c=en(l),u={pageX:0,pageY:0};null!==s?(u.pageX=s.pageX,u.pageY=s.pageY):o instanceof MouseEvent&&(u.pageX=o.pageX,u.pageY=o.pageY),u.pageX||u.pageY||(u.pageX=e.pageX,u.pageY=e.pageY),e.target.raphael?r=c.parents("div:eq(0)").offset():(e.target.raphaelParent||0<c.parents("svg").length)&&(r=c.parents("svg").parents("div:eq(0)").offset()),r||(r=c.offset()),t.y=r?(t.x=u.pageX-r.left,u.pageY-r.top):(t.x=u.pageX,u.pageY)}return t}
/**
 * Gets the normalized offsetLeft and offsetTop from an SVG element
 * with respect to its parent jQuery object
 * @private
 * @param objSVG: object, svg object from the dom
 * @param parent: object, jQuery object representing the parent DOM node
 */function Q(e,t){var n={left:0,top:0};if(e instanceof HTMLElement)n.left=e.offsetLeft,n.top=e.offsetTop;else{var o=en(e).offset(),i=t.offset();o&&i&&(n.left=o.left-i.left,n.top=o.top-i.top)}return n}
/**
 * @private
 */
/**
 * @private
 */
function J(e,t,n,o,i){var a=Math.max(e,n),r=Math.min(e,n),l=Math.max(t,o),s=Math.min(t,o);return{x:a-r,y:l-s,dx:i?i.left-r:0,dy:i?i.top-s:0,left:r,right:a,top:s,bottom:l}}
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
function je(e,t,n){if(0===n)return e;n=(n-n%90)%360;var o,i,a,r,l=e.x,s=e.y;switch(n){case 90:l=t.height-e.y-e.height,s=e.x;break;case 180:l=t.width-e.x-e.width,s=t.height-e.y-e.height;break;case 270:l=e.y,s=t.width-e.x-e.width}return o=l,i=s,a=90===n||270===n?e.height:e.width,r=90===n||270===n?e.width:e.height,{x:o,y:i,width:a,height:r}}
/**
 * Calculates new point coordinates for the clockwise page rotation to the specified angle.
 * @private
 * @param point
 * @param page
 * @param angle positive number, must be exactly divisible by 90.
 */function qe(e,t,n){return je({x:e.x,y:e.y,width:0,height:0},t,n)}
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
 */function fn(t){return function(){for(;t.length;){var e=t.shift();e&&e.apply(this,arguments)}}}
/**
 * @private
 */function pn(e){return{" transform":e,"-moz-transform":e,"-webkit-transform":e,"-o-transform":e,"-ms-transform":e}}
/**
 * @private
 */function xe(e,n){var o=this,i={x:0,y:0,width:0,height:0};return e&&e.length&&(n=n||tn.matrix(),i.x=n.x(e[0].x,e[0].y),i.y=n.y(e[0].x,e[0].y),e.forEach(function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,o);var t={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};i.x=t.x<i.x?t.x:i.x,i.y=t.y<i.y?t.y:i.y,i.width=t.x>i.width?t.x:i.width,i.height=t.y>i.height?t.y:i.height}.bind(this)),i.width-=i.x,i.height-=i.y),i}
/**
 * @private
 */function Je(e){if("string"==typeof e){var t=e.trim(),n=parseInt(t);if(/^([+|-]?[0-9]+)$/.test(t))return n}return"number"!=typeof e?null:e}
/**
 * @private 
 */function mn(e){return isFinite(e)&&!(e%1)}function Ne(e){return!isNaN(e)&&isFinite(e)}var vn={instanceCounter:0};function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _n=function(){function e(e){F(this,"viewer",void 0),F(this,"currentThumb",void 0),this.viewer=e,this.currentThumb=null}var t=e.prototype;return t.isViewerActive=function(){return!(!this.viewer||!this.currentThumb)},t.isThumbnailerActive=function(e){return e&&!!this.currentThumb&&this.currentThumb.get()===e.get()},t.activateThumbnailer=function(e,t,n,o,i){var a=this.isThumbnailerActive(e);a&&!i||(this.currentThumb&&!a&&this.currentThumb.detachViewer(),this.currentThumb=e,this.viewer&&this.viewer.isInitialized()&&(this.viewer.switchDocument(t,n,o),this.currentThumb.activateViewer()))},t.closeDocument=function(e,t){e=e||this.currentThumb;var n=this.isThumbnailerActive(e);n&&(e.detachViewer(),this.currentThumb=null),this.viewer&&this.viewer.isInitialized()&&t&&this.viewer.closeDocument(t,n)},e}();function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var bn=function(){function e(e){I(this,"jqe",en({})),I(this,"memoryEntries",[]),I(this,"config",{colorDepth:8,compression:1,highWaterMark:5e8,pageSize:{width:800,height:1132}}),I(this,"bytesInUse",0),e&&en.extend(this.config,e)}var t,n,o,i=e.prototype;return i.dispose=function(){this.clearEntries()},i.bind=function(){return this.jqe.on.apply(this.jqe,arguments),this},i.unbind=function(){return this.jqe.off.apply(this.jqe,arguments),this},i.trigger=function(e){return this.jqe.trigger.apply(this.jqe,arguments),this},i.allocate=function(e){return this.memoryEntries.push(e),this.bytesInUse+=this.calcBytes(e),this.bytesInUse>this.config.highWaterMark&&this.trigger("exceededhighwatermark"),this.bytesInUse},i.deallocateOldestEntry=function(){var e=this.memoryEntries.shift();return void 0!==e&&this.deallocate(e),e},i.clearEntries=function(){this.memoryEntries.length=0,this.bytesInUse=0},i.deallocate=function(e){return this.bytesInUse-=this.calcBytes(e),this.bytesInUse<0&&(this.bytesInUse=0),this.bytesInUse},i.calcBytes=function(e){return(e.width()||this.config.pageSize.width)*(e.height()||this.config.pageSize.height)*this.config.colorDepth/8*this.config.compression},t=e,(n=[{key:"typeOf",get:function(){return"Atalasoft.Document.MemoryTacker"}},{key:"colorDepth",set:function(e){this.config.colorDepth=e},get:function(){return this.config.colorDepth}},{key:"highWatermark",set:function(e){this.config.highWaterMark=e},get:function(){return this.config.highWaterMark}},{key:"pageSize",set:function(e){this.config.pageSize={width:e.width,height:e.height}},get:function(){return this.config.pageSize}}])&&A(t.prototype,n),o&&A(t,o),e}(),yn=[11,2,0,591],O=(n(57),n(81),n(82),n(115),n(58),n(61),function(o,e,t){var n=this,g=o,h=e,f=null,p=null,m=!1,v={" ":!0,"-":!0,"?":!0,"\n":!0,"\t":!0},i=t,a=null;function _(){var e,t;(t=document.body).currentStyle?e=t.currentStyle.direction:window.getComputedStyle&&(e=document.defaultView.getComputedStyle(t,null).getPropertyValue("direction")),"rtl"===e.toLowerCase()&&(m=!0),f=en("<canvas "+(m?'dir="rtl"':"")+"/>"),p=en('<span style="position:absolute; visibility:hidden; left: -5000px;">{[|,0123456789Thqkbfjplyg</span>'),en(i).append(p)}function r(e){f&&p||_(),h.applyTo(p),f[0].width=e.width,f[0].height=e.height;var t=f[0].getContext("2d"),n=function(e,t,n){var o=[];if("string"==typeof t){if(g.text.autoscale)return t.split("\n");for(var i=t,a=n,r=function(e){for(var t=[],n="",o=0,i=0;i<e.length;i++){var a=e[i];v[n]&&(t.push(e.substr(o,i-o)),o=i),n=a}return o<e.length&&t.push(e.substr(o,e.length-o)),t}(i),l="",s="",c=[],u=0;u<r.length;u++)if(l=s,s=r[u],e.measureText(s).width>a)for(var d=s.split(""),h=0;h<d.length;h++)c.push(d[h]),e.measureText(c.join("")).width>a&&(c.pop(),o.push(c.join("")),c.length=0,c.push(d[h]));else c.push(s),(e.measureText(c.join("").trim()).width>a||0<=l.indexOf("\n"))&&(c.pop(),o.push(c.join("")),c.length=0,c.push(s));0<c.length&&(o.push(c.join("")),c.length=0)}return o}(t,g.text.value,e.width),o=function(e){if(g.text.autoscale){var t=Math.max(0,g.height-2*g.outline.width);return 0<e?Math.floor(t/e):t}return h.applyTo(p,1),p[0].offsetHeight}(n.length),i=g.text.autoscale?o:g.text.font.size,a=[g.text.font.italic?"italic":"normal",g.text.font.bold?"bold":"normal",i+"pt",g.text.font.family];t.font=a.join(" "),t.fillStyle=g.text.font.color,t.textBaseline="top";var r,l=0,s=n.length?n[0]:"";for(r=0;r<n.length;r++)n[r].length>s.length&&(s=n[r]);var c=t.measureText(s).width,u=m?c:0;if(g.text.autoscale&&"left"!==g.text.align)switch(g.text.align){case"center":t.textAlign=g.text.align,u=c/2;break;case"right":t.textAlign=g.text.align,u=m?0:c;break;default:t.textAlign="start",u=m?c:0}if(g.text.autoscale){var d=e.width/c;t.scale(d,1)}if(!g.text.autoscale)switch(g.text.align){case"center":t.textAlign=g.text.align,u=e.width/2;break;case"right":t.textAlign=g.text.align,u=e.width}for(r=0;r<n.length;r++)t.fillText(n[r],u,l,c),l+=o;return f[0].toDataURL()}n.dispose=function(){h=g=n=null,f&&f.remove&&(f.remove(),f=null),p&&p.remove&&(p.remove(),p=null),i=null},n.renderToDataURL=r,n.renderToSVGImage=function(e,t){var n=a;n&&n.width===t.width&&n.height===t.height&&n.text===o.text.value&&n.align===o.text.align||(a={width:t.width,height:t.height,text:o.text.value,align:o.text.align},e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r(t)))}}),V=(n(117),function(e,t){var n=this,o=t,i={bold:!1,italic:!1,strike:!1,underline:!1,color:"#000000",family:"Arial",size:12},a=1,r=1,l=nn.Mobile.Any()?18:8;function s(e){e&&en.extend(i,e),c()}function c(e,t,n){(e=e||o)&&(t=void 0!==t?t:a,n||(t=d()),u(e,t))}function u(e,t){var n="none";(i.strike||i.underline)&&(n=i.strike?"line-through ":"",n+=i.underline?"underline":"");var o=i.size*(t||1);e.css({color:i.color,"font-family":i.family,"font-style":i.italic?"italic":"normal","font-weight":i.bold?"bold":"normal","font-size":o+"pt","text-decoration":n})}function d(){return a=i.size*r<l?l/i.size:r}s(e),n.dispose=function(){i=o=n=null},n.set=s,n.get=function(e){return e?i[e]:i},n.repaint=c,n.applyTo=u,n.getAdjustedZoom=d,n.getZoom=function(){return r},n.setZoom=function(e){r=e,c()}}),B=function(x,w,e){var t=this,z=e,o=x.getEventObject(),P=null,a=null,D=null,r=null,T=x.get("text"),k=!1,C=3,M=nn.Mobile.Any()?{width:200,height:200}:{width:1,height:1},i={},n={moving:s,resized:s,moved:s,rotated:s},E=function(){var e=x.get();a||(a=en('<textarea selectable="false"/>'),en(r.innerDom).append(a),a.css({"background-color":"transparent",border:"0px solid","overflow-x":"hidden","overflow-y":"hidden","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none",resize:"none",cursor:"inherit"}),a.attr("readonly","readonly"),a.on({focus:function(){return this.blur(),!1}}),a[0].raphaelParent=!0),a.val(T.value);var t=x.get("outline").width/2,n=Math.max(Math.ceil(e.width-2*(t+C)),1),o=Math.max(Math.ceil(e.height-2*(t+C)),1);if(D&&(D.set(T.font),D.repaint(a,1,!0)),a.css({width:n+"px",height:o+"px","max-width":n+"px","max-height":o+"px",padding:C+"px","text-align":T.align}),a.attr("title",e.tooltip),r.attr({x:Math.round(t+e.x),y:Math.round(t+e.y),width:e.width,height:e.height}),0<=e.cornerradius){var i=x.getObject();en(i[0]).attr({rx:e.cornerradius||0,ry:e.cornerradius||0})}r.transform(S().toTransformString(!0))};function l(){var e=x.get("outline").width/2,t=x.get(),n=Math.max(Math.ceil(t.width-2*(e+C)),0),o=Math.max(Math.ceil(t.height-2*(e+C)),0);if(D&&D.set(T.font),r.attr({x:Math.round(e+C+t.x),y:Math.round(e+C+t.y),width:n,height:o,title:t.tooltip}),0<=t.cornerradius){var i=x.getObject();en(i[0]).attr({rx:t.cornerradius||0,ry:t.cornerradius||0})}r.renderer&&r.renderer.renderToSVGImage(r[0],{width:n,height:o}),r.transform(S().toTransformString(!0))}function S(){var e=tn.matrix(),t=z.getViewerTransform(x._pageindex),n=x.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e}function s(){r&&f()}function F(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}function c(){if(null==D&&(D=new V(T.font)),r){var e=!0!==r.removed?r:null;o.unbind(e,{showeditor:u,hideeditor:h})}var t=k,n=T.autoscale;(r=n?w.atalaImage():w.html()).isHtml&&!n||(r.renderer=new O(x.get(),D,w._page),E=l),null!=P&&w._page&&(w._page.append(P),w._page.on(i)),tn.vml&&(x.getObject().node.style.overflow="hidden"),r.transform(S().toTransformString(!0)),o.bind(r,{showeditor:u,hideeditor:h}),t&&u()}function u(){P||function(){P=en("<textarea/>").hide(),w._page&&(w._page.append(P),w._page.on(i)),P.on("change keydown mouseup mousemove mousedown",d),P.bind({blur:h}),x.bind({deselected:h});var e=x.getObject();if(P.css({position:"absolute","overflow-x":"auto","overflow-y":"auto","z-index":99999,border:"0px solid",padding:"0px","background-color":"transparent","text-align":T.align}),nn.Mobile.Any()){var t=x.get(),n=Q(w.canvas,w._page);P.css({left:t.x+n.left+"px",top:t.y+n.top+"px",width:t.width+"px","max-width":t.width+"px",height:t.height+"px","max-height":t.height+"px",border:e.attr("stroke")+" "+e.attr("strokewidth")+"px","background-color":e.attr("fill")})}D.setZoom(x.getZoom()),(nn.Chrome||nn.Safari)&&P.css({resize:"none"}),null!=T.value&&P.val(T.value),T.readonly&&P.prop("readonly","readonly"),D.repaint(P,x.getZoom())}(),x&&!x.get("visible")||(!P.is(":hidden")&&k||(r.hide(),P.prop("readonly",T.readonly?"readonly":""),P.show(),f()),nn.Touch&&P.focus(function(){P[0].setSelectionRange(0,9999)}),P[0].focus(),k=!0)}function d(e){e.stopPropagation(),T.value!==P.val()&&(T.value=P.val(),x.set({text:T}))}function h(){P&&((P.is(":visible")||k)&&(P.hide(),r.show(),f()),(0===arguments.length||1===arguments.length&&"blur"===arguments[0].type)&&o.trigger("annotationtextchanged"),P[0].blur(),k=!1)}function g(){!x||x.get("visible")?k?u():r.show():r.hide(),r.backgroundColor&&r.backgroundColor(x.get("fill").color)}function A(e){e&&(w!==e||r.removed)&&(w=e,null!=a&&(a.remove(),a=null),c(),g())}function f(e){if(A(e),E(),P&&(!P.is(":hidden")||k)){var t=x.get("outline").width/2,n=x.get(),o=x.getZoom(),i=x.getBox(),a=S(),r=F(a,i.x,i.y),l=F(a,i.x+i.width,i.y+i.height),s=i.width*o,c=i.height*o,u=(r.x+l.x-s)/2,d=(r.y+l.y-c)/2,h=C*o,g=t*o,f=2*(h+g),p=Math.max(Math.ceil(s-f),M.width),m=Math.max(Math.ceil(c-f),M.height),v=Q(w.canvas,w._page),_=n.rotation+z.getPageRotation(x._pageindex),b=0!==_?"rotate("+_+"deg)":"",y={left:Math.round(u+v.left+g)+"px",top:Math.round(d+v.top+g)+"px",width:p+"px",height:m+"px","max-width":p+"px","max-height":m+"px",padding:Math.ceil(h)+"px"};en.extend(y,pn(b)),P.css(y)}D&&(D.set(T.font),D.setZoom(x.getZoom()),D.repaint(P,x.getZoom()))}c(),f(),x.bind(n),t.dispose=function(){P&&P.remove(),a&&a.remove(),D&&D.dispose(),r&&r.remove(),w&&w._page&&w._page.off(i),x.unbind(n),T=r=a=D=P=o=t=null},t.set=function(e){e&&en.extend(T,e)},t.get=function(e){return e?T[e]:T},t.getFont=function(){return D},t.updateView=g,t.changepaper=A,t.repaint=f},H=function(){var e=this,t=en({}),o={drawing:!1,hold:null,pinching:!1,tapped:!1,touching:!1,delta:{x:0,y:0},origin:{x:0,y:0},point:{x:0,y:0},moves:0,e:null};function i(){t.trigger.apply(t,arguments)}function a(){i({type:"interactstart"})}function r(){i({type:"interactend"})}function l(e){if(o.e=e,a(),i(e),2===e.originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(!o||!o.raphael&&!o.raphaelParent)return!1;if(null===t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches))u(),o.touching=!1,(n=e).stopPropagation(),n.preventDefault(),o.pinching=!0,i({type:"pinchstart",touches:n.originalEvent.touches});else if(1===e.originalEvent.touches.length){i("selectchange"),o.touching=!0;var t=Y(e);o.point.x=t.x,o.point.y=t.y,o.hold=setTimeout(c,1500)}var n}function s(){o.tapped=!1}function c(){if(0<o.moves&&null!==o.e){var e=Y(o.e);Math.abs(o.point.x-e.x)<5&&Math.abs(o.point.y-e.y)<5&&(o.moves=0)}0===o.moves&&o.touching&&o.e&&(o.touching=!1,i({type:"contextmenu",x:o.e.originalEvent.touches[0].pageX,y:o.e.originalEvent.touches[0].pageY}))}function u(){null!==o.hold&&(clearTimeout(o.hold),o.hold=null)}e.events={click:function(e){i(e)},dblclick:function(e){i(e);var t=Y(e);i({type:"showeditor",x:t.x,y:t.y})},mousedown:function(e){return a(),i(e),i({type:"selectchange",shiftKey:e.shiftKey,ctrlKey:e.ctrlKey}),3===e.which&&i({type:"contextmenu",x:e.pageX,y:e.pageY,event:e}),!1},mousemove:function(e){i(e)},mouseout:function(e){i(e)},mouseover:function(e){i(e)},mouseup:function(e){i(e),r()}},nn.Features.Touch&&en.extend(!0,e.events,{touchstart:l,touchmove:function(e){var t;i(o.e=e),o.pinching?((t=e).stopPropagation(),t.preventDefault(),i({type:"pinchmove",touches:t.originalEvent.touches})):o.moves++},touchend:function(e){var t,n;i(o.e=e),o.pinching?((n=e).stopPropagation(),n.preventDefault(),o.pinching=!1,i({type:"pinchend",touches:n.originalEvent.touches}),1===n.originalEvent.touches.length&&l(n)):o.touching&&(o.touching=!1,u(),o.moves=0,o.tapped?(t=e,o.e=t,i({type:"showeditor",x:o.point.x,y:o.point.y})):(o.tapped=!0,setTimeout(s,300))),r()}}),e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=i},j=function(e){var n=en({}),t=e,o=null,a={target:null,mx:null,my:null,px:null,py:null,dx:null,dy:null};function r(e){a.px=a.mx,a.py=a.my,e.originalEvent?(a.mx=e.originalEvent.targetTouches[0].pageX,a.my=e.originalEvent.targetTouches[0].pageY):(a.mx=e.targetTouches[0].pageX,a.my=e.targetTouches[0].pageY),a.dx=a.mx-a.px,a.dy=a.my-a.py}function l(e){a.px=a.mx,a.py=a.my,a.mx=e.screenX,a.my=e.screenY,a.dx=a.mx-a.px,a.dy=a.my-a.py}function s(){n.trigger.apply(n,arguments)}function i(){s({type:"interactstart",target:t})}function c(){s({type:"interactend",target:t})}function u(e,t,n,o,i){(e||t)&&(nn.Features.Touch&&i.target!==a.target||(null===a.px&&d(0,0,i),i.touches?r(i):l(i),s({type:"dragmove",dx:a.dx,dy:a.dy,mx:a.mx,my:a.my,originalEvent:i})))}function d(e,t,n){a.target=n.target,i(),n.touches?r(n):l(n),s({type:"dragstart",mx:a.mx,my:a.my,originalEvent:n})}function h(e){nn.Features.Touch&&e.target!==a.target||(a.target=null,a.px=null,a.py=null,a.mx=null,a.my=null,s({type:"dragend",originalEvent:e}))}function g(){s("hoverin")}function f(){s("hoverout")}function p(e){s(e)}function m(e){s(e)}function v(e){a.px=null,a.py=null,s(e)}function _(e){s(e)}function b(e){s(e)}function y(e){s(e)}function x(e){s(e)}function w(e){s(e)}function z(e){s(e),1===e.which?s("mousedownleft"):3===e.which&&s("mousedownright")}function P(e){s(e)}function D(e){s(e)}function T(e){s(e)}function k(e){s(e),3===e.which&&s("rightclick")}function C(e){s(e)}function M(e){s(e)}function E(e){s(e)}(o=new H).bind({click:x,dblclick:w,mousedown:z,mousemove:P,mouseover:T,mouseout:D,mouseup:k,touchmove:C,touchstart:E,interactstart:i,interactend:c,pinchstart:p,pinchmove:m,pinchend:v,selectchange:_,contextmenu:b,showeditor:y,annoresized:M}),this.bind=function(e){var t=arguments;!e||e.constructor.prototype!==tn.el&&e.constructor.prototype!==tn.st||(e.drag(u,d,h),e.hover(g,f),"set"!==e.type?en(e[0]).on(o.events):e.forEach(function(e){en(e[0]).on(o.events)}),t=Array.prototype.slice.call(t,1)),0<t.length&&n.on.apply(n,t)},this.unbind=function(e){var t=arguments;!e||e.constructor.prototype!==tn.el&&e.constructor.prototype!==tn.st?null===e&&1<t.length&&(t=Array.prototype.slice.call(t,1)):(e.undrag(),e.unhover(g,f),"set"!==e.type?en(e[0]).off(o.events):e.forEach(function(e){en(e[0]).off(o.events)}),t=Array.prototype.slice.call(t,1)),n.off.apply(n,t)},this.trigger=s},q=function(e,t){var n=this,o=e,i=null,a=null,r=t;function l(){return r.trigger.apply(r,arguments),n}function s(e){return e.image()}function c(e){o.customurl?e.attr("src",o.customurl):l("serverrenderurlrequested",{data:o,complete:u})}function u(e){e.customurl=e}return n.dispose=function(){a=i=o=n=null},n.bind=function(){return r.on.apply(r,arguments),n},n.unbind=function(){return r.off.apply(r,arguments),n},n.trigger=l,n.construct=function(e){return i(e,o)},n.render=function(e){a(e,o)},i=o.constructor?o.constructor:s,a=o.renderer?o.renderer:c,n},N=function(e,t,n,o,i){var a=this,u=e,r=t,l=n,d=null,s=null,c=i,h=o,g=null,f=null,p=null,m=null,v=function(){},_=function(){};function b(e){var t=Y(e);if(d.paper){var n=Q(d.paper.canvas,d.paper._page);t.x-=n.left,t.y-=n.top}return t}function y(e){var t=r.getViewerTransform(h._pageindex).invert(),n=t.x(e.x,e.y);return e.y=t.y(e.x,e.y),e.x=n,e}function x(){l.trigger.apply(l,arguments)}function w(e,t,n){d=t,s=n,e.stopPropagation(),e.preventDefault();var o=y(b(e));u.visible=!0,f={x:o.x,y:o.y},u.x=Math.round(o.x),u.y=Math.round(o.y),u.width=1,u.height=1,_="path"===d.type&&"custom"!==u.type?"ellipse"!==u.type?(u.points=[{x:u.x,y:u.y}],"lines"!==u.type&&"polygon"!==u.type||u.points.push({x:u.x,y:u.y}),u.x=0,u.y=0,v=D,F):(v=T,S):(v=T,E),C(),(g={events:nn.Features.Touch?{touchend:k,touchmove:P,mouseup:k,mousemove:P}:{mouseup:k,mousemove:P},src:en(e.srcElement||e.target),main:en(e.currentTarget)}).src.on(g.events),g.main.on({mouseup:k})}function z(){g&&(g.src.off(g.events),g.main.off({mouseup:k}))}function P(e){e.stopPropagation(),v(e),C()}function D(e){var t=y(b(e));switch(u.type){case"line":u.points[1]=t;break;case"freehand":u.points.push(t);break;case"lines":case"polygon":u.points[u.points.length-1]=t}"path"===d.type&&("ellipse"===u.type?I():O(),d._&&0===d._.dirty&&(d._.dirty=1))}function T(e){var t=y(b(e)),n=f.x,o=f.y,i=Math.max(Math.abs(t.x-f.x),1),a=Math.max(Math.abs(t.y-f.y),1);0<u.aspectratio&&(Math.abs((t.y-f.y)/(t.x-f.x))>1/u.aspectratio?i=Math.round(a/u.aspectratio):a=Math.round(i/u.aspectratio)),t.x<f.x&&(n=f.x-i),t.y<f.y&&(o=f.y-a),u.x=n,u.y=o,u.width=i,u.height=a}function k(e){e.stopPropagation();var t=!1;if("lines"===u.type||"polygon"===u.type){if(r.activepage._index!==h._pageindex)return;if(u.points.push(y(b(e))),2!==e.button)return}else u.points?u.points&&u.points.length<2&&"custom"!==u.type&&(t=!0):(u.width<4&&u.height<4&&(u.width=100,u.height=100),C());z(),g=null,x(t?"cancelled":"drawn")}function C(){_(),d&&d.transform(M()),s&&s.repaint()}function M(){var e=tn.matrix(),t=r.getViewerTransform(h._pageindex),n=h.getTransform();return e.add(t.a,t.b,t.c,t.d,t.e,t.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e.toTransformString()}function E(){d.attr({x:u.x,y:u.y,width:u.width,height:u.height}),c&&c.render(d,u),nn.Features.VML&&d.transform(M())}function S(){I(),d._&&0===d._.dirty&&(d._.dirty=1)}function F(){O(),d._&&0===d._.dirty&&(d._.dirty=1)}a.events={drawstart:w,drawmove:P,drawend:k,dragstart:function(e){if(!r.readonly){e.originalEvent.stopPropagation();var t=h.getBox();f={x:t.x,y:t.y}}},dragmove:function(e){if(!r.readonly){e.originalEvent.stopPropagation();var t=y({x:0,y:0}),n=y({x:e.dx,y:e.dy});h.translate(n.x-t.x,n.y-t.y),x("moving")}},dragend:function(e){if(!r.readonly){e.originalEvent.stopPropagation();var t,n,o=h.getBox();if(d.paper&&d.paper._page){var i=d.getBBox(),a={x:0,y:0,width:d.paper._page.width(),height:d.paper._page.height()};if(!(H(t=a,(n=i).x,n.y)||H(t,n.x+n.width,n.y)||H(t,n.x,n.y+n.height)||H(t,n.x+n.width,n.y+n.height)))return void h.translate(f.x-o.x,f.y-o.y)}f.x===o.x&&f.y===o.y||x("moved")}},update:function(){C()},viewchanged:function(e){d=e.annview,s=e.textview,_="path"===d.type&&"custom"!==u.type?"ellipse"!==u.type?(v=D,F):(v=T,S):(v=T,E)},pinchstart:function(e){if(!u.points&&!r.readonly){var t=y({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=y({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=h.getBox();m={start:J(t.x,t.y,n.x,n.y),rect:o}}},pinchmove:function(e){if(m){var t=y({x:e.touches[0].clientX,y:e.touches[0].clientY}),n=y({x:e.touches[1].clientX,y:e.touches[1].clientY}),o=J(t.x,t.y,n.x,n.y,m.start),i=o.x-m.start.x,a=o.y-m.start.y,r=m.rect.x-o.dx,l=m.rect.y-o.dy,s=m.rect.width+i,c=m.rect.height+a;u.points?h.transform(r,l,s,c):(u.x=r,u.y=l,u.width=s,u.height=c),d.paper&&d.paper._page&&d.paper._page._grips&&d.paper._page._grips.repaint(),C()}},pinchend:function(){x("resized"),x("annoresized"),m=null}},a.drawStart=w,a.unbindEvents=z,a.repaint=C,a.getTransform=M;var A=.5522847498307936;function I(){var e=u.width/2,t=u.height/2,n=A*e,o=A*t,i=u.x+u.width/2,a=u.y+u.height/2,r=["M",i,a-t,"C",i+n,a-t,i+e,a-o,i+e,a,"C",i+e,a+o,i+n,a+t,i,a+t,"C",i-n,a+t,i-e,a+o,i-e,a,"C",i-e,a-o,i-n,a-t,i,a-t,"Z"];d.attr({path:r})}function O(){if(u.points&&0!==u.points.length){for(var e=["M",u.points[0].x,u.points[0].y],t=1;t<u.points.length;t++)e=e.concat(["L",u.points[t].x,u.points[t].y]);"polygon"===u.type&&e.push("Z"),d.attr({path:e}),
/**
   * Work around outlined by this post:
   * http://stackoverflow.com/questions/15693178/svg-line-markers-not-updating-when-line-moves-in-ie10
   */
function(){if(nn.Explorer){var e=parseInt(nn.Version,10);10<=e&&e<12&&d.node&&d.node.parentNode&&d.node.parentNode.insertBefore(d.node,d.node)}}()}}a.commitTransform=function(){var e,t,n;en.extend(u,(e=p,t=r.getZoom(h._pageindex),{x:(n=e.split()).dx/t,y:n.dy/t,width:n.scalex/t,height:n.scaley/t})),d.transform(M()),C(),V=null},a.transformUI=function(e,t,n,o){p=tn.matrix(n,0,0,o,e,t),V||(V=function(e,t){var n;if(e.points&&1<e.points.length){var o=h.getBox();(n=tn.matrix(1,0,0,1,0,0)).scale(1/o.width,1/o.height,0,0),n.translate(-o.x,-o.y)}else(n=tn.matrix(t,0,0,t,0,0)).translate(e.x,e.y),n.scale(e.width,e.height,0,0);return n}(u,1)),p.add(V.a,V.b,V.c,V.d,V.e,V.f),d.transform(p.toTransformString()),s&&s.repaint()};var V=null;function H(e,t,n){return t>=e.x&&t<=e.x+e.width&&n>=e.y&&n<=e.y+e.height}},we=function(e,t){var o=t,i=this,n=new j(i),a=null,r=null,l=null,s=null,c=null,u=null,d=null,h=null,g=e.multiview?e:{
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
transform:tn.matrix(),
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
extra:{}},f={highlight:{readonly:!0,fill:{color:"yellow",opacity:.5},outline:{opacity:0}},image:{readonly:!0,fill:{color:null},outline:{opacity:0}},rectangle:{fill:{opacity:0}},stamp:{readonly:!0,cornerradius:0,text:{autoscale:!0}},line:{fill:{color:null},outline:{opacity:1,startcap:{width:"medium",height:"medium",style:"none"},endcap:{width:"medium",height:"medium",style:"none"}}},lines:{fill:{color:null},outline:{opacity:1}},freehand:{fill:{color:null},outline:{opacity:1}},ellipse:{},fillrect:{},polygon:{},text:{}},p={};function m(){n.bind.apply(n,arguments)}function v(){return n.trigger.apply(n,arguments),i}function _(){var e=tn.matrix(),t=C();e.rotate(g.rotation,t.x,t.y),g.transform=e}function b(){var e,t,n=C(),o=(e=w(),t=n,{x:e.x(t.x,t.y),y:e.y(t.x,t.y)});o.x===n.x&&o.y===n.y||M(o.x-n.x,o.y-n.y)}function y(e,t){if(e){var n=g.rotation;e.hasOwnProperty("rotation")&&(e.rotation=(e.rotation+360)%360),x(e,t),n!==g.rotation&&function(e,t){var n=(e-t+360)%360,o=tn.matrix(),i=w();o.add(i.a,i.b,i.c,i.d,i.e,i.f);var a=C();o.rotate(n,a.x+a.width/2,a.y+a.height/2);var r=o.x(a.x,a.y),l=o.y(a.x,a.y);M(r-a.x,l-a.y),_()}(g.rotation,n)}}function x(e,t){t?en.extend(!0,g,e):en.extend(g,e)}function w(){return g.transform}function z(){d={update:function(e){g.selected!==d.selected&&D();var t=!1;e||(t=function e(t,n,o){if(t!==n)return!!t;for(var i in t)if(t.hasOwnProperty(i)){if("extra"===i)continue;if(n.hasOwnProperty(i)){if("points"===i){if(t.points===n.points)return!t.points;if(t.points.length!==n.points.length)return!0;for(var a=0;a<t.points.length;a++)if(e(t.points[a],n.points[a],[]))return!0}if(-1<o.indexOf(i)){if(e(t[i],n[i],R[i]))return!0}else if(t[i]!==n[i])return!0}}return!1}(d,g,["fill","outline","text"]),y(d,!0)),g.update&&delete g.update,g.getPageIndex&&delete g.getPageIndex,V(),O(),null!==a&&(g.selectable?(p.isBound("selectable")||(n.bind(p.selectable),p.bound("selectable")),g.movable&&!p.isBound("movable")?(n.bind(p.movable),p.bound("movable")):!g.movable&&p.isBound("movable")&&(n.unbind(p.movable),p.unbound("movable")),nn.Features.Touch&&(g.resizable&&!p.isBound("resizable")?(n.bind(p.resizable),p.bound("resizable")):!g.resizable&&p.isBound("resizable")&&(n.unbind(p.resizable),p.unbound("resizable")))):!g.selectable&&p.isBound("selectable")&&(n.unbind(p.selectable),p.unbound("selectable"),n.unbind(p.movable),p.unbound("movable"),n.unbind(p.resizable),p.unbound("resizable"))),t&&v({type:"annotationchanged",ann:i})},getPageIndex:function(){return i._pageindex}},en.extend(!0,d,g)}function P(){return JSON.stringify(g)}function D(e){if(g){var t={ann:i,append:!0,page:null,pageindex:i._pageindex,type:""};e&&(t.append=e.shiftKey||e.ctrlKey||void 0!==e.append&&e.append,t.page=e.page,t.pageindex=e.pageindex),t.append||!g.selected?(g.selected=!g.selected,t.type=g.selected?"selected":"deselected"):g.selected&&!t.append&&(t.type="reselected"),""!==t.type&&v(t)}}function T(e){var t=null;switch(g.type){case"image":(t=e.image()).attr("src",g.src);break;case"highlight":case"rectangle":case"fillrect":case"text":case"stamp":t=e.rect();break;case"ellipse":case"line":case"lines":case"freehand":case"polygon":t=e.path();break;case"custom":t=u.construct(e)}return e._annos&&e._annos.push(t),t}function k(){null!==a&&(r?n.unbind(r,a):n.unbind(a));var e={};g.selectable&&(en.extend(e,p.selectable),p.bound("selectable"),!o.readonly&&g.movable&&(en.extend(e,p.movable),p.bound("movable")),!o.readonly&&g.resizable&&nn.Features.Touch&&(en.extend(e,p.resizable),p.bound("resizable"))),a=e,n.bind(r,e)}
/**
   * Returns bounding box of the annotation in document space.
   */
function C(){!h&&g.points&&(h=xe(g.points));var e=g.points?h:g;return{x:e.x,y:e.y,width:e.width,height:e.height}}function M(e,t){if(g.points){for(var n=0;n<g.points.length;n++)g.points[n].x+=e,g.points[n].y+=t;h&&(h.x+=e,h.y+=t)}"custom"!==g.type&&g.points||(g.x+=e,g.y+=t),_(),A()}e.multiview||(E=e.type,en.extend(!0,g,f[E])),x(e,!0),_(),"custom"===g.type&&(u=new q(g,n)),m({repaint:(c=new N(g,o,n,i,u)).events.update,viewchanged:c.events.viewchanged,drawn:k,resized:b}),g.points&&(0<g.x||0<g.y)&&(M(g.x,g.y),g.x=0,g.y=0,g.width=1,g.height=1),p={selectable:{selectchange:D},movable:{dragstart:c.events.dragstart,dragmove:c.events.dragmove,dragend:c.events.dragend},resizable:{pinchstart:c.events.pinchstart,pinchmove:c.events.pinchmove,pinchend:c.events.pinchend},boundEvents:{resizable:!1,movable:!1,selectable:!1},isBound:function(e){return this.boundEvents[e]},bound:function(e){this.boundEvents[e]=!0},unbound:function(e){this.boundEvents[e]=!1}},i.dispose=function(){g.selected&&D(),n&&n.unbind(),r&&r.remove(),l&&l.dispose(),s&&s.remove(),c&&c.unbindEvents(),g=s=l=r=n=i=o=c=null},i.bind=m,i.unbind=function(){n.unbind.apply(n,arguments)},i.trigger=v,i.set=y,i.get=function(e){return e?g[e]:g},i.getTransform=w,i.getClonedData=function(){return d?en.extend(!0,d,g):z(),delete d.transform,d},i.getObject=function(){return r},i.getEventObject=function(){return n},i.getZoom=function(){return o.getZoom(i._pageindex)},i.stringify=P,i.getJSON=P,i.toggleSelected=D,i.isCloneSource=function(e){return d&&d===e},i.getBox=C,i.translate=M,i.transform=function(e,t,n,o){var i=C(),a=n/i.width,r=o/i.height;if(g.points&&0<g.points.length&&"custom"!==g.type){for(var l=0;l<g.points.length;l++)g.points[l].x=e+(g.points[l].x-i.x)*a,g.points[l].y=t+(g.points[l].y-i.y)*r;h.x=e,h.y=t,h.width*=a,h.height*=r}else g.x=e,g.y=t,g.width*=a,g.height*=r;v({type:"annoresizing"}),A()},i.transformUI=function(){c.transformUI.apply(c,arguments)};var E;var S=(i.commitTransform=function(){c.commitTransform()},!1),F=nn.Explorer?20:5;function A(){S||(S=!0,setTimeout(I,F))}function I(){S=!1,O()}function O(e){e&&(s&&(s=null),r=T(e),u&&u.render(r,g),V(),k(),"text"!==g.type&&"stamp"!==g.type||null!==l||(l=new B(i,e,o)),l&&l.changepaper(e),v({type:"viewchanged",annview:r,textview:l})),v("repaint")}function V(){if(r){var e={fill:g.fill.color,"fill-opacity":g.fill.opacity};en.extend(e,(t={stroke:g.outline.color,"stroke-width":g.outline.width*o.getZoom(i._pageindex),"stroke-opacity":g.outline.opacity},r._linewidth=g.outline.width,tn.fn.addArrow||(g.outline.startcap&&(t["arrow-start"]=L(g.outline.startcap)),g.outline.endcap&&(t["arrow-end"]=L(g.outline.endcap))),t)),r.attr(e),tn.fn.addArrow&&(g.outline.startcap&&tn.fn.addArrow(r,L(g.outline.startcap),!1),g.outline.endcap&&tn.fn.addArrow(r,L(g.outline.endcap),!0)),g.visible?r.show():r.hide()}var t;l&&(l.set(g.text),l.updateView()),r&&r.node&&""!==g.src&&"image"===g.type&&(void 0!==r.node.src&&r.node.src?r.node.src=g.src:r.node.href.baseVal=g.src),H()}function H(){g.tooltip&&"text"!==g.type&&"stamp"!==g.type&&r.attr("title",g.tooltip)}function L(e){return[e.style,"-",e.width,"-",e.height].join("")}i.startDraw=function(e,t,n){y(n),(r=T(t)).transform(c.getTransform()),("text"===g.type||"stamp"===g.type)&&(l=new B(i,t,o)),H(),V(),c.drawStart(e,r,l)},i.repaint=O,i.updateView=V;var R={fill:[],outline:["startcap","endcap"],text:["font"],font:[],startcap:[],endcap:[]};return i},ze=function(e,t){var n=this,o=e,i=t,c=[];function a(e,t,n,o){var i,a,r=[].concat(t),l=null;(l=u(n))===n&&null!==l&&(n=l._index),o||d(l||n);for(var s=0;s<r.length;s++)i=r[s],0<=(a=en.inArray(i,c[n]))?e||c[n][a]!==i||c[n].splice(a,1):e&&(c[n]?c[n].push(i):c[n]=[i]),l&&(e?l._grips.push(i):null!==l._grips&&l._grips.remove(i)),i.get("selected")!==e&&i.toggleSelected({append:!0,pageindex:n,page:l})}function r(e,t){var n="object"==typeof t?t._index:t;o[n]&&a(e,o[n],t,!0)}function l(e){for(var t=[],n=0;n<e.length;n++)if(e[n]){t[n]=[];for(var o=0;o<e[n].length;o++)t[n][o]=e[n][o].getClonedData()}return t}function u(t){var e=null;if("object"==typeof t)e=t;else{t=Math.max(t,0);var n=en.grep(i,function(e){return e._index===t});1<=n.length&&(e=n[0])}return e}function s(e){r(!0,e)}function d(e){r(!1,e);var t=u(e);t&&t._grips&&t._grips.repaint()}n.dispose=function(){i=o=n=null,c.length=0},n.select=function(e,t,n){a(!0,e,t,n)},n.deselect=function(e,t,n){a(!1,e,t,n)},n.setAnnos=function(e){o=e},n.setPages=function(e){i=e},n.resolvePage=u,n.deselectAll=function(){for(var e=0;e<o.length;e++)d(e)},n.deselectPage=d,n.getAnnotations=
/**
   * Gets an array of all annotation data objects.
   * @returns array of arrays containing annotation data objects for each page of the document.
   */
function(){return l(o)},n.getSelected=function(){return l(c)},n.selectAll=function(){for(var e=0;e<o.length;e++)s(e)},n.selectPage=s};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xn=function(){function e(){}return e.SetLocalizationStrings=function(e){this._strings=e},e.LocalizationAvailable=function(){return!(void 0===this._strings||void 0===this._strings.annotations)},e.GetAnnotationLocalizedString=function(e){return void 0===this._strings.annotations||void 0===this._strings.annotations[e]?(void 0===this._englishStrings.annotations[e]&&console.error("Missed english string for %s",e),this._englishStrings.annotations[e]):this._strings.annotations[e]},e}();L(xn,"_strings",{}),L(xn,"_englishStrings",gn);var Pe=function(t){var e=this,d=en("<div />"),h=en("<div />"),g=null,o=null,n={style:["None:none","Arrow:open","Filled Arrow:block","Filled Ellipse:oval","Filled Diamond:diamond"],width:["medium","wide","narrow"],height:["medium","long","short"]},i={fill:{color:!0,opacity:!0},rotation:!0,outline:{color:!0,opacity:!0,width:!0,startcap:n,endcap:n},text:{font:{bold:!0,italic:!0,color:!0,family:!0,size:!0}}};function a(){d.dialog("close")}function r(){l(),a()}function l(){g.set(o,!0),g.updateView(),g.repaint(),h.empty(),f(g.get(),"",i),v()}function f(o,e,t){function n(e){var t=this.getAttribute("dataField");if(this.value&&"boolean"!=typeof this.value)if("number"==typeof o[t]){var n=parseFloat(this.value);isNaN(n)||"rotation"!==t||n===o[t]?"opacity"===t&&0<=n&&n<=1||"opacity"!==t&&0<=this.value?o[t]=n:this.value=o[t]:(g.set({rotation:n}),g.repaint())}else o[t]=this.value;else e&&"boolean"==typeof this.value?o[t]=0<=e.target.id.indexOf("true"):this.value=o[t];g.updateView(),g.repaint(),v()}for(var i in o)if(o.hasOwnProperty(i))if("object"==typeof o[i]){var a="text"!==i?m(i):"";t[i]&&("text"!==i||"text"===i&&"text"===g.get("type"))&&f(o[i],e+a,t[i])}else if("type"===i){var r=xn.GetAnnotationLocalizedString(o[i].replace("fillrect","rectangle")+"DialogTitle");d.dialog("option","title",r)}else if(t[i]){var l=en("<div/>"),s=p(i,o[i],n,t[i]);s.attr("dataField",i),s.title="",l.addClass("ui-helper-clearfix atala-ui-dialog-clearfix"),l.css({overflow:"hidden"}),s.appendTo(l);var c=xn.GetAnnotationLocalizedString("label"+(e||e)+m(i));l.append((u=c,en("<span/>").text(u))),l.appendTo(h)}var u}function p(a,e,t,n){var o=typeof e,r=null;if(en.isArray(n))r=en("<select/>").attr({}),en.each(n,function(e,t){var n=t,o=t,i=t.split(":");1<i.length&&(o=i[0],n=i[1]),o=xn.GetAnnotationLocalizedString("value"+m(a)+m(n)),r.append(en("<option/>",{value:n,text:o}))}),r.change(t),r.val(e);else if("string"===o||"number"===o){r=en("<input/>").attr({type:"text"});var i=e;"color"===a&&(i=function(e){if(!xn.LocalizationAvailable())return e;var t=document.createElement("canvas");t.height=1,t.width=1;var n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,1,1);var o=n.getImageData(0,0,1,1).data;return"#"+[0,1,2].map(function(e){return("0"+o[e].toString(16)).slice(-2)}).join("")}(e)),r.val(i),r.change(t),r.focus(function(){this.select(),this._focused=!0}),r.mouseup(function(e){this._focused&&(e.preventDefault(),this._focused=!1)})}else if("boolean"===o){var l="bool"+a;s(r=en("<form/>").attr({id:l,datafield:a}),l+!0,l,xn.GetAnnotationLocalizedString("radioButtonTrue"),e),s(r,l+!1,l,xn.GetAnnotationLocalizedString("radioButtonFalse"),!e),r.controlgroup(),r.change(t),r[0].value=e,r.find(".ui-state-hover").each(function(e,t){en(t).removeClass("ui-state-hover")})}else r=en("<div>"+e+"</div>");return r.css({float:"right"}),r}function s(e,t,n,o,i){e.append(en("<input/>").attr({type:"radio",id:t,name:n,checked:i})),e.append(en("<label/>").attr({for:t}).text(o))}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}function v(){var e=g.getObject();e&&e.paper&&e.paper._page&&e.paper._page._grips.repaint()}return e.show=function(e){for(var t in g=e,h.empty(),o={},i)if(i.hasOwnProperty(t)){var n={};n[t]=g.get(t),en.extend(!0,o,n)}f(g.get(),"",i),d.dialog("open")},e.hide=a,e.isVisible=function(){return d.dialog("isOpen")},e.cancel=r,e.reset=l,function(){h.appendTo(d);var e={};e[xn.GetAnnotationLocalizedString("dialogButtonOk")]=a,e[xn.GetAnnotationLocalizedString("dialogButtonReset")]=l,e[xn.GetAnnotationLocalizedString("dialogButtonCancel")]=r,d.dialog({appendTo:t,minWidth:320,classes:{"ui-dialog":"atala-ui-dialog"},resizable:!0,autoOpen:!1,buttons:e,closeText:a,open:function(){!function(e){for(var t=0,n=0;n<e.length;n++){var o=en(e[n]).height();t<o&&(t=o)}for(var i=0;i<e.length;i++)en(e[i]).height(t)}(d.parent().find(".ui-dialog-buttonset button")),d.dialog({width:Math.max(320,function(){var e='<span style="display:none">'+d.parent().find(".ui-dialog-title").text()+"AAAAAAAAA</span>";en("body").append(e);var t=en("body").find("span:last").width();return en("body").find("span:last").remove(),t+25}(),function(){for(var e=d.parent().find(".ui-dialog-buttonset button"),t=0,n=0;n<e.length;n++)t+=en(e[n]).outerWidth(!0);var o=1.5*parseInt(en(e[0]).css("font-size"));return t+o}()),height:"auto"})}})}(),e},De=function(l,e){var u,d=8,s=25,a=-22.5,c={e:0,ne:315,n:270,nw:225,w:180,sw:135,s:90,se:45},r={},h={},g=e,f=l._paper.set(),p=l._paper.set(),m=[],v=null,_={},b=null,y={x:0,y:0,width:1,height:1,x2:1,y2:1},t={dragstart:function(){},dragmove:function(){f.hide()},moved:function(){w(),f.show();for(var e=0;e<m.length;++e){var t=m[e].get();t.hasOwnProperty("rotatable")&&!t.rotatable&&v.hide()}}};function x(e,t){return e.attr({fill:"#FFFFE1",cursor:(t||"ne")+"-resize"}),e.grip=!0,e.rect=e.getBBox(),e.hide(),e.center=function(e,t,n,o){var i=d/(n=n||1),a=d/n,r=i/2,l=Math.round(i/2)+.5,s=Math.round(a/2)+.5;nn.Explorer&&(s-=.5);var c=Math.round(e)-l,u=Math.round(t)-s;this.ellipse?(c+=r,this.attr({cx:c,cy:u,r:r,"stroke-width":1})):this.attr({x:c,y:u,width:i,height:a,"stroke-width":1}),this.node.setAttribute("stroke-width",1),this.transform(o)},t&&(e.d={key:t,n:~t.indexOf("n"),s:~t.indexOf("s"),w:~t.indexOf("w"),e:~t.indexOf("e")},e.mousedown(function(e){return function(e,t){if(e.stopPropagation(),!(1<m.length)){for(var n=0;n<m.length;n++)if(!m[n].get("resizable"))return;return en.extend(_,y),b=c[t.key]===c.n||c[t.key]===c.s?1:0,u=c[t.key]===c.w||c[t.key]===c.e?1:0,(t.n||1===u)&&(_.y=_.y2),t.w&&(_.x=_.x2),en(l._paper.canvas).on({mouseup:E,mousemove:M}),!1}}(e,this.d)})),e}function n(e){return-1!==en.inArray(e,m)}function o(){for(var e=0;e<m.length;e++)i(m[e]);m.length=0,p.clear(),f.hide()}function i(e){e.getEventObject().unbind(t)}function w(){0<p.length?P():0<m.length?o():f.hide()}function z(e){for(var t in c)c.hasOwnProperty(t)&&S(f[c[t]],e)}function P(){if(0<p.length){var e=1===p.length?m[0].getBox():p.getBBox();y.x=e.x,y.y=e.y,y.width=e.width,y.height=e.height,y.x2=e.x+e.width,y.y2=e.y+e.height,y.xmid=e.x+e.width/2,y.ymid=e.y+e.height/2,D()}}function D(){var e=1===p.length,t=tn.matrix(),n=1,o="",i=g.getViewerTransform(l._index);if(t.add(i.a,i.b,i.c,i.d,i.e,i.f),e){var a=m[0].getTransform();a&&t.add(a.a,a.b,a.c,a.d,a.e,a.f),n=g.getZoom(l._index),o=t.toTransformString(!0)}f[c.nw].center(y.x,y.y,n,o),f[c.ne].center(y.x2,y.y,n,o),f[c.sw].center(y.x,y.y2,n,o),f[c.se].center(y.x2,y.y2,n,o),f[c.n].center(y.xmid,y.y,n,o),f[c.w].center(y.x,y.ymid,n,o),f[c.e].center(y.x2,y.ymid,n,o),f[c.s].center(y.xmid,y.y2,n,o);var r=m[0].get();r.rotatable||!r.hasOwnProperty("rotatable")?(v.show(),v.center(y.xmid,y.y-s/n,n,o)):v.hide(),z((1===m.length?m[0].get().rotation:0)+g.getPageRotation(l._index))}function T(e){var t=l.offset(),n=Q(l._paper.canvas,l);return{x:e.pageX-(t.left+n.left),y:e.pageY-(t.top+n.top)}}function k(e){e.stopPropagation();var t,n,o,i=(t=T(e),n=g.getViewerTransform(l._index).invert(),o=n.x(t.x,t.y),t.y=n.y(t.x,t.y),t.x=o,t),a=180*Math.atan2(i.y-_.ymid,i.x-_.xmid)/Math.PI+90;return 1===m.length&&(m[0].set({rotation:a}),m[0].repaint()),l._grips.repaint(),!1}function C(e){return e.stopPropagation(),en(l._paper.canvas).off({mouseup:C,mousemove:k}),1===m.length&&m[0].getEventObject().trigger("rotated"),!1}function M(e){if(e.stopPropagation(),1===p.length){var t=function(e){if(0<p.length){var t="set"===p[0].type?p[0][0]:p[0],n=t.matrix.invert(),o={x:n.x(e.x,e.y),y:n.y(e.x,e.y)};return o}return e}(T(e)),n=Math.abs(t.x-_.x),o=Math.abs(t.y-_.y),i=t.x<_.x?_.x-n:_.x,a=t.y<_.y?_.y-o:_.y;r=i,l=a,s=n,c=o,0===b&&(y.x=r,y.width=Math.max(s,1),y.x2=r+y.width,y.xmid=r+y.width/2),0===u&&(y.y=l,y.height=Math.max(c,1),y.y2=l+y.height,y.ymid=l+y.height/2),D(),function(){for(var e=0;e<m.length;e++)m[e].transform(y.x,y.y,y.width,y.height)}()}var r,l,s,c;return!1}function E(e){e.stopPropagation();for(var t=0;t<m.length;t++)m[t].getEventObject().trigger("resized"),m[t].getEventObject().trigger("annoresized"),m[t].repaint();return 0<p.length&&P(),en(l._paper.canvas).off({mouseup:E,mousemove:M}),!1}function S(e,t){if(e&&e.d&&e.d.key){var n=tn.matrix();n.rotate(t);var o={x:n.x(r[e.d.key].x,r[e.d.key].y),y:n.y(r[e.d.key].x,r[e.d.key].y)};for(var i in h)if(h.hasOwnProperty(i)&&F(o,h[i].start,h[i].end)){e.attr({cursor:(h[i].dir||"ne")+"-resize"});break}}}function F(e,t,n){function o(e,t){return 0<-e.x*t.y+e.y*t.x}return!o(t,e)&&o(n,e)}!function(){var e,t;for(var n in c)if(c.hasOwnProperty(n)){var o=l._paper.rect(0,0,d,d),i=x(o,n);f.push(i),f[c[n]]=i,(e=tn.matrix()).rotate(c[n]),r[n]={x:e.x(1,0),y:e.y(1,0)}}(t=x(l._paper.circle(0,0,d/2)).attr({fill:"#00FF40",cursor:"pointer"})).ellipse=!0,f.push(t),t.mousedown(function(e){return function(e){if(e.stopPropagation(),1===m.length&&1===p.length){for(var t=0;t<m.length;t++){var n=m[t].get();if(n.hasOwnProperty("rotatable")&&!n.rotatable)return}en.extend(_,y);var o=m[0].getTransform(),i=o.x(_.xmid,_.ymid);_.ymid=o.y(_.xmid,_.ymid),_.xmid=i,en(l._paper.canvas).on({mouseup:C,mousemove:k})}}(e)}),v=t,function(){var o=tn.matrix();o.rotate(a,0,0);for(var e=function(e,t){var n={dir:t,start:{x:o.x(r[e].x,r[e].y),y:o.y(r[e].x,r[e].y)},end:{x:o.x(r[t].x,r[t].y),y:o.y(r[t].x,r[t].y)}};return n},t=["e","ne","n","nw","w","sw","s","se"],n=0;n<t.length-1;++n)0===n&&(h[t[n]]=e(t[t.length-1],t[n])),h[t[n+1]]=e(t[n],t[n+1])}()}(),this.push=function(e){n(e)||(m.push(e),p.push(e.getObject()),!0===e.get("selectable")&&e.getEventObject().bind(t),w(),f.toFront(),f.show())},this.contains=n,this.remove=function(e){for(var t=0;t<m.length;t++)m[t]===e&&m.splice(t,1);p.exclude(e.getObject()),i(e)},this.clear=o,this.repaint=w,this.updateCursor=z};function Te(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Annotations API.
 * @class
 * @inner
 * @name AnnotationController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var wn=function e(t,n,o){var i=this,l=t,_=n,a=new ze,r={
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
getSelected:a.getSelected,
/**
       * Selects all annotations on every page.
       * @instance
       * @function
       */
selectAll:a.selectAll,
/**
       * Deselects all annotations on every page.
       * @instance
       * @function
       */
deselectAll:a.deselectAll,
/**
       * Selects all annotations on the given page.
       * @param {number} index - The index of the page the annotations should be selected on.
       * @instance
       * @function
       */
selectAllOnPage:a.selectPage,
/**
       * Deselects all annotations on the given page.
       * @param {number} index - The index of the page the annotations should be deselected on.
       * @instance
       * @function
       */
deselectAllOnPage:a.deselectPage,
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
drawAnnotation:function(e,t,n){_._controllers.mouseTool.setTool(on.None,on.None),ne(e,!0,function(){_._controllers.mouseTool.setTool(on.Pan,on.None),"function"==typeof t&&t()},function(){_._controllers.mouseTool.setTool(on.Pan,on.None),"function"==typeof n&&n()})},
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
createOnPage:W,
/**
       * Deletes an annotation on the given page by it's index on the page.
       * @param {number} pageIndex - Page index the annotation is located on.
       * @param {number} annIndex - Index of the annotation on the page.
       * @instance
       * @function
       */
deleteFromPage:U,
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
setDefaults:Y,
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
insertLayer:function(e,t,n,o){n=D(e,t,n),"function"==typeof o&&o(),l.trigger({type:x.layerinserted,srcurl:e,srcindex:t,index:n}),l.trigger(x.layerschanged)},
/**
       * Removes a layer(page annotation) of annotations. All other layers are shifted. This operation corresponds to removing page from the document.
       * @param {number} index - index of the layer to be removed.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
removeLayer:function(e,t){var n=T(e);"function"==typeof t&&t(),l.trigger({type:x.layerremoved,layer:n,index:e}),l.trigger(x.layerschanged)},
/**
       * Moves a layer of annotations from one page index to another.
       * @param {number} sourceIndex - index of the layer to be moved.
       * @param {number} destIndex - Destination zero based page index.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function
       */
moveLayer:function(e,t,n){t=k(e,t),"function"==typeof n&&n(),l.trigger({type:x.layermoved,srcindex:e,destindex:t}),l.trigger(x.layerschanged)},
/**
       * Scrolls viewer to the specified annotation.
       * @param {AnnotationData} anno - the annotation object to scroll to.
       * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
       * @instance
       * @function 
       */
scrollTo:function(e,t){var n=this,o=function(){Te(this,n),"function"==typeof t&&t()}.bind(this),i=e.getPageIndex(),a=G(e,i);if(a){var r=a.getZoom(),l=ye,s={x:0,y:0};if(e.type===l.line||e.type===l.lines||e.type===l.freehand){var c=e.points.map(function(e){return Te(this,n),e.x}.bind(this)),u=e.points.map(function(e){return Te(this,n),e.y}.bind(this));s.x=(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2,s.y=(Math.min.apply(Math,u)+Math.max.apply(Math,u))/2}else s.x=e.x+e.width/2,s.y=e.y+e.height/2;s.x*=r,s.y*=r,_.showPagePoint(i,s,ln.Center,!0,o)}else o()}},
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#deselectAll|annotations.deselectAll} instead.
     */
deselectAll:a.deselectAll,
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
getAnnotationsFromPage:X,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#deleteFromPage|annotations.deleteFromPage} instead.
     */
deleteAnnotationOnPageAtIndex:U,
/**
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function
     * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setDefaults|annotations.setDefaults} instead.
     */
setAnnotationDefaults:Y,
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
setStamps:Q};if(e.__exposedApi=r.annotations,!t)return null;var s=n._config,c=n._pages,u=!1,d=null,h=null,g=null,f=null,p=null,b={annos:[],activepage:null,activeanno:null,readonly:!!o,zoom:l.getZoom(),getZoom:_.getPageScale,getViewerTransform:_.getViewerTransform,getPageRotation:_.getPageRotation},m={},v=!1,y=!1,x={click:"annotationclicked",dblclick:"annotationdoubleclicked",touchstart:"annotationtouchstart",interactend:"annotationtouchend",touchmove:"annotationtouchmove",pinchmove:"annotationpinchresize",rightclick:"annotationrightclicked",mousedown:"annotationmousedown",mousedownleft:"annotationmousedownleft",mousedownright:"annotationmousedownright",mousemove:"annotationmousemove",mouseout:"annotationmouseout",mouseup:"annotationmouseup",mouseover:"annotationmouseover",annocreate:"annotationcreated",annoload:"annotationloaded",moved:"annotationmoved",rotated:"annotationrotated",annoresized:"annotationresized",repaint:"annotationrepainted",layerinserted:"layerinserted",layerremoved:"layerremoved",layermoved:"layermoved",layerschanged:"layerschanged",annotationchanged:"annotationchanged",annotationtextchanged:"annotationtextchanged"};function w(){u=!0,b.readonly||(h=L(g),f=new Pe(n._config.parent),null!=s.annotations.defaults&&Y(s.annotations.defaults),null!=s.annotations.stamps&&Q(s.annotations.stamps),null!=s.annotations.images&&J(s.annotations.images),null!=s.annotations.custom&&K(s.annotations.custom))}
/**
   * [Internal] Disposes memory intensive objects
   * @returns undefined
   */function z(e){p.translate(e.dx,e.dy)}function P(e){b.zoom=e.zoom}function D(e,t,n){if(e||"number"!=typeof t||(t=T(t)),t=t||[],null==n?n=b.annos.length:n<0&&(n=0),n>b.annos.length){var o=b.annos.length;b.annos[n]=t;for(var i=o;i<b.annos.length;++i)b.annos[i]||(b.annos[i]=[])}else b.annos.splice(n,0,t);return n}function T(e){return e<b.annos.length?b.annos.splice(e,1)[0]:null}function k(e,t){return D(null,T(e),t)}function C(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}function M(e){E(e.index,e.page)}function E(e,t){if(e<b.annos.length&&(S(t),b.annos[e]&&b.annos[e].length))for(var n,o=0;o<b.annos[e].length;o++)(n=b.annos[e][o])._pageindex=e,n.repaint(t._paper),n.get("selected")&&a.select(n,e,!0)}function S(e){e._grips.clear(),e._paper._annos.remove(),e._paper._annos.clear(),e._paper.forEach(function(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}),e._paper._trash.remove(),e._paper._trash.clear(),ce()}function F(e){b.activepage=e}function A(e){e.page._paper&&(S(e.page),e.page.append(e.page._paper.canvas))}function I(e){O(e.page)}function O(e){if(e&&0<=e._index&&b.annos[e._index]){for(var t=0;t<b.annos[e._index].length;t++)b.annos[e._index][t].repaint();e&&e._grips.repaint()}}function V(e){h&&(h.visible&&H(),h.remove());var t=en.extend(!0,{},g);if(l.trigger("contextmenu",[b.activeanno.getClonedData(),t]),en.isEmptyObject(t))h=null;else{for(var n in t)t.hasOwnProperty(n)&&(t[n]=R(t[n]));h=L(t)}!function(e){if(h){var t=xn.GetAnnotationLocalizedString("menuPropertiesButton");if(b.activeanno.get("readonly"))h.children(":contains("+t+")").off("click").children("a, div").css("color","#cdc9c9");else{var n=h.children(":contains("+t+")");void 0!==n.data("events")&&"click"in n.data("events")||n.on("click",j),n.children("a").css("color","#000000")}0===h.closest().length&&d.prepend(h);var o={x:e.x-6,y:e.y-6};h.css({left:o.x,top:o.y}),h.show(),h.visible=!0}}(e)}function H(){h&&(h.hide(),h.visible=!1)}function L(e){var t=_.createMenu(e);return t.css({position:"fixed","z-index":99999}),t.mouseleave(H),t.visible=!1,t}function R(e){return function(){return H(),e.call(this,b.activeanno.getClonedData())}}function B(){var e=b.activepage?b.activepage._index:0;if(b.annos[e]){var t=en.inArray(b.activeanno,b.annos[e]);-1!==t&&(b.activeanno=null,Z(t,e))}H()}function j(){H(),f.show(b.activeanno)}
/**
   * Clears the annotations and related data from all pages
   */
function q(){if(0<b.annos.length){if(b.annos.length=0,c)for(var e=0;e<c.length;e++)c[e]._grips.clear(),c[e]._paper.forEach(C),c[e]._paper._trash.remove(),c[e]._paper._trash.clear(),c[e]._paper._annos.remove(),c[e]._paper._annos.clear();l.trigger({type:"annotationscleared"})}}
/**
   * Creates an annotation on the desired page with the given annotation data.
   * @param aConfig: object, Key value pairs representing annotation data.
   * @param pgNum: number, The zero based index of the page the annotation should be created on.
   * @param callback: function, Function to be called when the operation has completed.
   * @returns object: Atalasoft.Annotations.Annotation.
   */function N(e,t,n){var o={};e.multiview?o=e:(e&&e.type&&m[e.type]&&en.extend(!0,o,m[e.type]),en.extend(!0,o,e));var i=new we(o,b);return i._pageindex=t,void 0===b.annos[t]&&(b.annos[t]=[]),b.annos[t].push(i),_.redrawPageFromIndex(t,!0),"function"==typeof n&&n(i),de(i),i}function W(e,t,n){var o=N(e,t,n).getClonedData();return l.trigger({type:x.annocreate,anno:o,annotation:o,page:t}),o}function U(e,t){Z(t,e)}
/**
   * Deletes an annotation on the given z-index and zero based page index.
   * @param annIndex: number, Zero based z-index of the annotation.
   * @param pgNum: number, Zero based page index the annotation is located on.
   */function Z(e,t){var n=b.annos[t].splice(e,1)[0];b.activepage&&b.activepage._paper&&b.activepage._paper._annos.exclude(n.getObject()),b.activeanno===n&&(b.activeanno=null),n.dispose(),b.activepage&&b.activepage._grips&&b.activepage._grips.repaint(),l.trigger({type:"annotationdeleted",page:t,index:e})}function X(e){var t=[];if(0===b.annos.length||void 0===b.annos[e])return t;for(var n=0;n<b.annos[e].length;n++)t[n]=b.annos[e][n].getClonedData();return t}function G(e,t){if(isFinite(t)){if(t<b.annos.length)for(var n=0;n<b.annos[t].length;++n)if(b.annos[t][n].isCloneSource(e))return b.annos[t][n]}else for(var o=0;o<b.annos.length;++o){var i=G(e,o);if(i)return i}return null}function Y(e){s.annotations.defaults=e;for(var t=0;t<e.length;t++)"string"==typeof e[t].type&&(m[e[t].type]=e[t]);return l}function Q(e){s.annotations.stamps=e;for(var t=0;t<e.length;t++)be(e[t]);if(u){var n={type:"button",id:_._id+"_toolbar_Button_Stamp",icon:"stamp",tooltip:"Draw Stamp",text:""},o=_.createDropDownButton(n);n.onclick=_.drawAnnotation,_.createDropDownMenu(o,n,e)}return l}function J(e){s.annotations.images=e;for(var t=0;t<e.length;t++)e[t].type="image";if(u){var n={type:"button",id:_._id+"_toolbar_Button_Image",icon:"image",tooltip:"Draw Image",text:""},o=_.createDropDownButton(n);n.onclick=_.drawAnnotation,_.createDropDownMenu(o,n,e)}return l}
/**
   * Sets the default annotation properties for initially created custom annotations.  This accepts the same input as the main config.
   * @param cConfig: array, An array of JSON objects representing custom annotation types.
   * @returns object: Atalasoft.Controls.WebDocumentViewer
   */function K(e){s.annotations.custom=e;for(var t=0;t<e.length;t++)e[t].type="custom";if(u){var n={type:"button",id:_._id+"_toolbar_Button_Custom",icon:"image",tooltip:"Draw Custom",text:""},o=_.createDropDownButton(n);n.onclick=_.drawAnnotation,_.createDropDownMenu(o,n,e)}return l}function $(e,t){if("text"===e.type&&e){var n=e.getPageIndex(),o=G(e,n);t?e.visible&&(_.isPageInView(n)?ee(o,n):l.showPage(e.getPageIndex(),function(){ee(o,n)})):o.trigger("hideeditor")}}function ee(e,t){e&&(!1!==e.get("selectable")&&a.select(e,t,!1),e.trigger("showeditor"))}function te(e){F(e),a.deselectPage(e),H()}function ne(e,t,n,o){if(v)return null;var i=en.extend(!0,{},e);return e&&e.type&&m[e.type]&&(i=en.extend(!0,i,m[e.type]),t&&(i=en.extend(!0,i,e))),i.rotation=0,b.activeanno&&null===b.activeanno.getObject()&&se(),function(){if(!y){d.on("mousedown",re),nn.Features.Touch&&d.on("touchstart",re);for(var e=0;e<c.length;e++)c[e]._draw.toFront();y=!0}}(),b.activeanno=new we(i,b),b.activeanno.bind({drawn:le,cancelled:se}),"function"==typeof n&&(oe=n),"function"==typeof o&&(ie=o),b.activeanno}a.setAnnos(b.annos),a.setPages(c),function(){var T,k,C,u=tn.svg&&!nn.Features.foreignObject;function a(e,t,n,o,i,a){var r=u||a?"image":"foreignObject",l=d(this,this,"http://www.w3.org/2000/svg",r,t,n,o,i),s=null;if(!u){s=document.createElementNS("http://www.w3.org/1999/xhtml","div");var c="http://www.w3.org/2000/xmlns/";s.setAttributeNS(c,"xmlns",c),s.innerHTML=e||"",l.node.appendChild(s),l.isHtml=!0}return l.innerDom=s,l}function d(e,t,n,o,i,a,r,l,s){var c=null===n?document.createElement(o):document.createElementNS(n,o);t.canvas&&t.canvas.appendChild&&t.canvas.appendChild(c);var u=new e.constructor.el.constructor(c,e);for(var d in u.attrs={x:i,y:a,width:r,height:l,r:s||0,rx:s||0,ry:s||0,fill:"none",stroke:"#000"},u.skew={},"g"===(u.type=o)&&(u.canvas=u.node),u.attrs)u.attrs.hasOwnProperty(d)&&void 0!==u.attrs[d]&&c.setAttribute(d,u.attrs[d]+"");return u}tn.vml?tn.fn.html=function(e,t,n,o,i){var a=d(this,this,null,"div",t,n,o,i),r=a.node;function l(e){var t=a.matrix.split();if(e.hasOwnProperty("x")&&void 0!==e.x&&e.hasOwnProperty("y")&&void 0!==e.y){var n={x:e.x*t.scalex,y:e.y*t.scaley};if(0!==t.rotate){var o=xe([{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x+e.width,y:e.y+e.height},{x:e.x,y:e.y+e.height}],a.matrix);n=o}r.style.left=Math.round(n.x)+"px",r.style.top=Math.round(n.y)+"px"}}return r.innerHTML=e||"",(a.innerDom=r).style.position="absolute",a.__tsfm=a.transform,a.transform=function(){this.__tsfm.apply(this,arguments),this.repaint(),l(this.attrs)},a.backgroundColor=function(e){r.style.backgroundColor=e,this.repaint()},a.repaint=function(){r.style.filter='progid:DXImageTransform.Microsoft.Chroma(color="'+r.style.backgroundColor+'"); '+this.matrix.toFilter()},a.__attr=a.attr,a.attr=function(e){this.__attr.apply(this,arguments),e&&(l(e),e.hasOwnProperty("width")&&(r.style.width=e.width+"px"),e.hasOwnProperty("height")&&(r.style.height=e.height+"px"))},a.isHtml=!0,a}:(tn.fn.html=function(e,t,n,o,i){return a.call(this,e,t,n,o,i)},T={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},k={},C=function e(t,n){if(n)for(var o in"string"==typeof t&&(t=e(t)),n)n.hasOwnProperty(o)&&("xlink:"===o.substring(0,6)?t.setAttributeNS("http://www.w3.org/1999/xlink",o.substring(6),String(n[o])):t.setAttribute(o,String(n[o])));else(t=tn._g.doc.createElementNS("http://www.w3.org/2000/svg",t)).style&&(t.style.webkitTapHighlightColor="rgba(0,0,0,0)");return t},tn.fn.addArrow=function(e,t,n){if("path"===e.type){for(var o,i,a,r,l,s=String(t).toLowerCase().split("-"),c=e.paper,u=n?"end":"start",d=e.node,h=e.attrs,g=h["stroke-width"],f=s.length,p="classic",m=3,v=3,_=5;f--;)switch(s[f]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":p=s[f];break;case"wide":v=5;break;case"narrow":v=2;break;case"long":m=5;break;case"short":m=2}if(l="open"===p?(m+=2,v+=2,_+=2,a=1,r=n?4:1,{fill:"none",stroke:h.stroke}):(r=a=m/2,{fill:h.stroke,stroke:"none"}),e._.WDVarrows?n?(e._.WDVarrows.endPath&&k[e._.WDVarrows.endPath]--,e._.WDVarrows.endMarker&&k[e._.WDVarrows.endMarker]--):(e._.WDVarrows.startPath&&k[e._.WDVarrows.startPath]--,e._.WDVarrows.startMarker&&k[e._.WDVarrows.startMarker]--):e._.WDVarrows={},"none"!==p){var b=Math.random().toString(36).substring(7),y="dave-marker-"+p,x="dave-marker-"+u+p+m+v+b;tn._g.doc.getElementById(y)?k[y]++:(c.defs.appendChild(C(C("path"),{"stroke-linecap":"round",d:T[p],id:y})),k[y]=1);var w,z=tn._g.doc.getElementById(x);z?(k[x]++,w=z.getElementsByTagName("use")[0]):(z=C(C("marker"),{id:x,markerHeight:v,markerWidth:m,orient:"auto",refX:r,refY:v/2}),w=C(C("use"),{"xlink:href":"#"+y,transform:(n?"rotate(180 "+m/2+" "+v/2+") ":"")+"scale("+m/_+","+v/_+")","stroke-width":(1/((m/_+v/_)/2)).toFixed(4)}),z.appendChild(w),c.defs.appendChild(z),k[x]=1),C(w,l);var P=a*("diamond"!==p&&"oval"!==p);i=(i=n?(o=e._.WDVarrows.startdx*g||0,tn.getTotalLength(h.path)-P*g):(o=P*g,tn.getTotalLength(h.path)-(e._.WDVarrows.enddx*g||0)))<0?0:i,(l={})["marker-"+u]="url(#"+x+")",(i||o)&&(l.d=tn.getSubpath(h.path,o,i)),C(d,l),e._.WDVarrows[u+"Path"]=y,e._.WDVarrows[u+"Marker"]=x,e._.WDVarrows[u+"dx"]=P,e._.WDVarrows[u+"Type"]=p,e._.WDVarrows[u+"String"]=t}else i=n?(o=e._.WDVarrows.startdx*g||0,tn.getTotalLength(h.path)-o):(o=0,tn.getTotalLength(h.path)-(e._.WDVarrows.enddx*g||0)),e._.WDVarrows[u+"Path"]&&C(d,{d:tn.getSubpath(h.path,o,i)}),delete e._.WDVarrows[u+"Path"],delete e._.WDVarrows[u+"Marker"],delete e._.WDVarrows[u+"dx"],delete e._.WDVarrows[u+"Type"],delete e._.WDVarrows[u+"String"];for(l in k)if(k.hasOwnProperty(l)&&!k[l]){var D=tn._g.doc.getElementById(l);D&&D.parentNode.removeChild(D)}}}),tn.fn.atalaImage=function(e,t,n,o,i){return a.call(this,e,t,n,o,i,!0)}}(),p=tn.matrix(1,0,0,1,0,0),l.bind({scroll:z,pagerecycled:A,pageshown:M,zoomchanged:P,pagerotated:I}),(g={})[xn.GetAnnotationLocalizedString("menuDeleteButton")]=B,g[xn.GetAnnotationLocalizedString("menuPropertiesButton")]=j,_._state.initialized?w():l.bind({initialized:w}),"Atalasoft.Controls.WebDocumentViewer"===l.typeOf&&en.extend(l,r),i.__exposedApi=r.annotations,i.addDrawingSurface=function(n){var e=this;if(n instanceof en){n._paper=tn(n[0]),n._paper.canvas.style.position="absolute",n._paper.canvas.style.zIndex="2",0<s.pageborderwidth&&(n._paper.canvas.style.left=s.pageborderwidth+"px",n._paper.canvas.style.top=s.pageborderwidth+"px"),n._paper._annos=n._paper.set(),n._paper._trash=n._paper.set(),(n._paper._page=n)._matrix=tn.matrix(1,0,0,1,0,0),n._matrix.translate(-n.offset().left,-n.offset().top),n._grips=new De(n,b);var t=function(){Te(this,e),te(n)}.bind(this);return n.on("mousedown",t),nn.Features.Touch&&n.on("touchstart",t),n.on({pageresize:function(e){var t;e.page=n,(t=e).page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,O(t.page)},pagezoom:function(e){var t;e.page=n,t=e,isFinite(t.width)&&isFinite(t.height)&&t.width&&t.height&&(b.zoom=t.zoom,t.page._paper.setSize(t.width,t.height),t.page._paper.canvas.style.width=t.width,t.page._paper.canvas.style.height=t.height,t.page._paper.forEach(function(e){if(e&&e.transform&&!e.grip){void 0!==e._linewidth&&e.attr("stroke-width",e._linewidth*b.zoom);var t=e.attr("clip-rect");"object"==typeof t&&"number"==typeof t.length&&e.attr("clip-rect",t)}}),O(t.page))}}),!0}return!1},i.removeDrawingSurface=function(e){return e instanceof en&&(e._paper&&(e._paper._annos=null,e._paper._page=null,e._paper=null),e._matrix=null,!(e._grips=null))},i.insertLayer=D,i.removeLayer=T,i.moveLayer=k,i.showLayer=E,i.clear=q,i.createAnnotation=N,i.deleteAnnoOnPage=U,i.drawAnnotation=ne,i.getAnnosFromPage=X,i.setStamps=Q,i.setAnnotationDefaults=Y,i.setImages=J,i.setCustom=K,i.dispose=function(){f=g=h=d=c=s=_=l=i=null,b.annos.length=0,b.activepage=null,b.activeanno=null,b.zoom=null,a.dispose(),a=null},
/**
   * [Internal] Gets debug info object
   * @returns debug info object if available, otherwise null
   */
i.__getDebugInfo=function(){var e={};return en.extend(!0,e,{data:b,defaults:m,drawing:v,drawready:y,matrix:p,menu:h,menuconfig:g,pages:c,props:f,viewport:d}),e}
/**
   * [Internal] Links the annotation data between two controls
   * @param linker internal object of type __LVlinker
   * @returns undefined
   */,i.__linkAnnotations=function(e){e&&(e._annos?en.isArray(e._annos)&&(b.annos=e._annos):e._annos=b.annos)}
/**
   * [Internal] Clears all selection of annotations
   */,i.__clearAllSelection=te,i.setViewPort=function(e){e&&(e instanceof en||(e=en(e)),d=e)};var oe=function(){},ie=function(){};function ae(){if(y){d.off("mousedown",re),nn.Features.Touch&&d.off("touchstart",re);for(var e=0;e<c.length;e++)c[e]._draw.reset();y=!1}}function re(e){v=!0,d.off("mousedown",re),nn.Features.Touch&&d.off("touchstart",re);var t=b.activeanno.getClonedData();l.trigger({type:"annotationdrawstart",annotation:t,ann:t}),b.activeanno._pageindex=b.activepage._index,b.activeanno.startDraw(e,b.activepage._paper,{})}function le(){ue(),function(e){var t=b.activepage,n=t?t._index:0;b.annos[n]?b.annos[n].push(e):b.annos[n]=[e],b.activeanno.unbind({drawn:le,cancelled:se}),de(b.activeanno),a.select(b.activeanno,t,!1),oe({annotation:e}),oe=function(){};var o=e.getClonedData();l.trigger({type:x.annocreate,anno:o,annotation:o,page:n})}(b.activeanno)}function se(){b.activeanno.dispose(),b.activeanno=null,v&&ue(!0)}function ce(){y&&(v?se():(b.activeanno&&(b.activeanno.dispose(),b.activeanno=null),ae()),ie({annotation:null}),ie=function(){})}function ue(e){v=!1,ae();var t=e?null:b.activeanno.getClonedData();l.trigger({type:"annotationdrawend",annotation:t,ann:t,cancelled:!!e})}function de(n){function e(e){var t=n.getClonedData();l.trigger({type:x[e.type],anno:t,annotation:t})}n.bind({dragstart:function(){var e=n.getClonedData();l.trigger({type:"annotationdragstart",ann:e,annotation:e})},dragend:function(){var e=n.getClonedData();l.trigger({type:"annotationdragend",annotation:e,ann:e})},interactstart:function(){b.activepage&&b.activepage._paper===n.getObject().paper||F(n.getObject().paper._page),b.activeanno=n},selected:he,deselected:he,reselected:he,contextmenu:V,serverrenderurlrequested:ge,moved:e,rotated:e,annoresized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mouseup:e,mousemove:e,mouseover:e,repaint:e,annotationchanged:e,annotationtextchanged:e})}function he(e){var t=e.page||0<=e.pageindex?e.pageindex:b.activepage,n=a.resolvePage(t);n&&(t=n),"selected"===e.type||"reselected"===e.type?(b.activeanno=e.ann,a.select(e.ann,t,e.append),f&&f.isVisible()&&f.show(e.ann)):(a.deselect(e.ann,t,e.append),f&&f.isVisible()&&f.cancel()),n&&n._grips&&n._grips.repaint()}function ge(e){var t=e.complete,n=fe(e.data);"function"==typeof t&&t.call(n)}function fe(e){return pe(e),JSON.stringify(e)}function pe(e){for(var t in e)if("color"===t&&null!=e[t]){var n=tn.getRGB(e[t]);n.error&&(n.hex="#000000"),e[t]=n.hex}else"points"!==t&&"object"==typeof e[t]&&pe(e[t])}function me(e,t,n,o,i){var a={type:"annodata",serverurl:e,query:"?atalaanndata=",method:"GET",data:{atala_annurl:t,atala_docurl:n=n||l.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{layers:[],offset:o||0,length:i,error:void 0}};for(var r in a.data)a.data.hasOwnProperty(r)&&null===a.data[r]&&(a.data[r]=void 0);return a}function ve(n,o,i){function e(e){if(void 0!==n.info.docIndex&&(e.offset=n.info.docIndex),!e.layers&&e.error&&o)for(var t=e.offset;t<e.offset+n.info.length;t++)b.annos[t]=[];_e(e),"function"==typeof i&&i.call(void 0,e.error,e)}"function"==typeof o&&(i=o,o=!1),o||q(),_.makeHandlerRequest(n,e,e)}function _e(e){if(e){var t={type:"annotationsloaded",customData:e.customData};if(e.layers)for(var n=0;n<e.layers.length;n++){e.offset=e.offset||0;var o=e.offset+n;b.annos[o]&&0<b.annos[o].length?b.annos[o].length=0:b.annos[o]=[];var i=e.layers[n];if(i&&(i._index=isFinite(i._index)&&0<=i._index?i._index:o,i.visible=void 0===i.visible||i.visible,i.items))for(var a=0;a<i.items.length;a++){i.items[a].visible=i.items[a].visible&&i.visible,b.annos[o][a]=new we(i.items[a],b),b.annos[o][a]._pageindex=i._index;var r=b.annos[o][a].getClonedData();l.trigger({type:x.annoload,anno:r,annotation:r,customData:e.customData}),de(b.annos[o][a])}}else e.error&&(t.error=e.error);t.offset=e.offset,t.length=e.layers?e.layers.length:0,l.trigger(t)}}function be(e){var t;return e.type="stamp",e.text&&((t=e.text)&&t.font&&t.font.size&&(t.font.size=parseFloat(t.font.size)),e.text.readonly=!0),e}i.stringifyChanges=function(){var e=[];for(var t in b.annos)if(b.annos.hasOwnProperty(t)){e[t]={items:[]};var n=0,o=_.getPageScale(t),i=tn.matrix();if(_._config.persistrotation){n=_.getPageRotation(t),i=_.getViewerTransform(t);var a=1/o;i.scale(a,a,0,0),i.e*=a,i.f*=a}for(var r in b.annos[t])if(b.annos[t].hasOwnProperty(r)){var l=en.extend(!0,{},b.annos[t][r].get());if(l.rotation||n){var s=b.annos[t][r].getBox(),c=s.width/2,u=s.height/2,d=tn.matrix(),h=b.annos[t][r].getTransform();d.add(i.a,i.b,i.c,i.d,i.e,i.f),d.add(h.a,h.b,h.c,h.d,h.e,h.f);var g={x:d.x(s.x+c,s.y+u),y:d.y(s.x+c,s.y+u)},f=g.x-c-s.x,p=g.y-u-s.y;if(l.points)for(var m=0;m<l.points.length;m++)if("line"===l.type){var v=d.x(l.points[m].x,l.points[m].y);l.points[m].y=d.y(l.points[m].x,l.points[m].y),l.points[m].x=v}else l.points[m].x+=f,l.points[m].y+=p;else"custom"!==l.type&&l.points||(l.x+=f,l.y+=p);l.rotation="line"!==l.type?(l.rotation+n)%360:0}pe(e[t].items[r]=l)}}return JSON.stringify(e)},i.stringifyAnnotationData=fe,i.createHandlerRequest=me,i.makeHandlerRequest=ve,i.loadAnnotationsUrl=function(e,t,n,o,i,a,r){var l=Array.prototype.slice.call(arguments);"function"!=typeof(r=l.pop())&&l.push(r),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),a=l.shift();var s=me(e,t,n,o,i);void 0!==a&&(s.info.docIndex=a),ve(s,0<=o&&1<=i,r)},i.loadAnnotations=_e};function R(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}var W,U,Z=function(e,t,n){var o,g=t,u=this,i=en({}),a=null,f=null,r=null,p=n,_={type:"",backgroundcolor:"",color:null,fieldname:"",hidden:!1,isfieldrequired:!1,items:null,locked:!1,norotate:!1,noview:!1,nozoom:!1,readonly:!1,required:!1,x:0,y:0,width:0,height:0,rotation:0,border:{color:"#000",style:"none",radius:{vertical:0,horizontal:0},width:0},text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12,paddingtop:0,linespacing:0},ismultiline:!1,ispassword:!1,isrichtext:!1,scrollable:!1,maxlength:0,maximumfieldheight:-1,preserveoverflow:!1}},l={button:{},checkbox:{checked:!1,group:null},radio:{checked:!1,group:null},textbox:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},signature:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},choice:{multiline:!1}},s={};function c(){return i.trigger.apply(i,arguments),u}function d(e,t){e&&(t?en.extend(!0,_,e):en.extend(_,e))}function h(){r={update:function(){en.extend(!0,_,r),_.update&&delete _.update,k(),T(),null!==a&&(_.selectable?(s.isBound("selectable")||(i.on(s.selectable),s.bound("selectable")),_.movable&&!s.isBound("movable")?(i.on(s.movable),s.bound("movable")):!_.movable&&s.isBound("movable")&&(i.off(s.movable),s.unbound("movable")),nn.Features.Touch&&(_.resizable&&!s.isBound("resizable")?(i.on(s.resizable),s.bound("resizable")):!_.resizable&&s.isBound("resizable")&&(i.off(s.resizable),s.unbound("resizable")))):!_.selectable&&s.isBound("selectable")&&(i.off(s.selectable),s.unbound("selectable"),i.off(s.movable),s.unbound("movable"),i.off(s.resizable),s.unbound("resizable")))}},en.extend(!0,r,_)}function m(){return JSON.stringify(_)}function v(e,t){return t-(e.value.slice(0,t).split("\r\n").length-1)}function b(e,t){if("number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd)e.selectionStart=t.start,e.selectionEnd=t.end;else{var n=e.createTextRange(),o=v(e,t.start);n.collapse(!0),t.start===t.end?n.move("character",o):(n.moveEnd("character",v(e,t.end)),n.moveStart("character",o)),n.select()}}function y(e){var t=null,v=!1;switch(_.type){case"button":(t=en("<button/>")).click(function(){return c({type:"buttonclicked",name:_.fieldname}),!1});break;case"textbox":case"signature":t=_.text.multiline?en('<textarea style="overflow-y:'+(_.text.scrollable?"auto":"hidden")+';resize:none"></textarea>'):en('<input type="text" />'),_.text.value=t.val(_.text.value).val(),t.on("paste",function(){return v=!0}),t.on("input",function(e){-1===_.text.maximumfieldheight&&(_.text.maximumfieldheight=en(this).get(0).scrollHeight);var t,n,o,i,a,r,l,s,c=0<_.text.maxlength&&en(this).val().length>_.text.maxlength,u=!_.text.scrollable&&en(this).get(0).scrollHeight>_.text.maximumfieldheight;if(en(this).val().length>_.text.value.length&&(c||u)){var d=(t=e.target,s=l=0,"number"==typeof t.selectionStart&&"number"==typeof t.selectionEnd?(l=t.selectionStart,s=t.selectionEnd):(o=document.selection.createRange())&&o.parentElement()===t&&(a=t.value.length,n=t.value.replace(/\r\n/g,"\n"),(i=t.createTextRange()).moveToBookmark(o.getBookmark()),(r=t.createTextRange()).collapse(!1),-1<i.compareEndPoints("StartToEnd",r)?l=s=a:(l=-i.moveStart("character",-a),l+=n.slice(0,l).split("\n").length-1,-1<i.compareEndPoints("EndToEnd",r)?s=a:(s=-i.moveEnd("character",-a),s+=n.slice(0,s).split("\n").length-1))),{start:l,end:s});if(v&&0<_.text.maxlength){var h=en(this).val();if(h.length===d.start)en(this).val(h.substr(0,_.text.maxlength));else{var g=h.length-_.text.value.length,f=_.text.maxlength-_.text.value.length,p=h.substr(0,d.start-g+f),m=_.text.value.substr(d.start-g);en(this).val(p+m),b(e.target,{start:p.length,end:p.length})}}else en(this).val(_.text.value),b(e.target,{start:d.start-1,end:d.start-1})}!_.text.preserveoverflow&&en(this).get(0).scrollHeight<_.text.maximumfieldheight&&(_.text.maximumfieldheight=en(this).get(0).scrollHeight),_.text.value=en(this).val(),v=!1});break;case"checkbox":(t=en('<input type="checkbox" />').prop({name:_.group,checked:_.checked})).val(_.value);break;case"radio":(t=en('<input type="radio" />').prop({name:_.group,checked:_.checked})).val(_.value);break;case"choice":if((t=en("<select></select>")).text(_.value),t.attr({multiple:_.multiple,size:_.multiline&&_.items?_.items.length:0}),_.items)for(var n in t.items=[],_.items)if(_.items.hasOwnProperty(n)){var o=en("<option></option>",{selected:_.items[n].checked,value:_.items[n].value,text:_.items[n].text});t.append(o),t.items[n]=o}if(_.multiline&&_.items){var i=function(){en(this).trigger("change")};t.on({mouseup:i,touchend:i})}break;case"generic":t=en("<div></div>")}if(t){if("textbox"===_.type||"signature"===_.type){var a=_.text.font.paddingtop,r=0<_.text.font.linespacing?_.text.font.linespacing+"px":"1.14pt";t.css({resize:"none",position:"absolute",paddingTop:_.multiline?a:0,paddingBottom:_.multiline?"2pt":0,lineHeight:r,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"})}else t.css({resize:"none",position:"absolute",padding:0,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});t.on({click:S,mousedown:S,mouseup:S,change:w,uncheck:z,focusin:P,focusout:D})}return e._fields&&e._fields.push(t),e.append(t),t}function x(){var e=_.fieldname.lastIndexOf(".");return 0<=e?_.fieldname.substr(0,e):null}function w(e){var t=x(),n=[];switch(_.type){case"button":break;case"textbox":case"signature":if(_.text.value=this.value,g.multiviewFields.hasOwnProperty(t)){var o=g.multiviewFields[t];for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];a!==u&&(a.get().text.value=this.value,a.updateView())}}break;case"checkbox":_.checked=this.checked,_.group&&_.checked&&(en('input[name="'+_.group+'"]').trigger("uncheck"),_.checked=!0,this.checked=!0);break;case"radio":_.group&&en('input[name="'+_.group+'"]').trigger("uncheck"),_.checked=this.checked;break;case"choice":if(void 0!==e.target.selectedOptions)n=e.target.selectedOptions;else if(e.target.multiple)for(var r=0;r<e.target.options.length;r++)e.target.options[r].selected&&n.push(e.target.options[r]);else 0<=e.target.selectedIndex&&n.push(e.target.options[e.target.selectedIndex]);for(var l in _.items)if(_.items.hasOwnProperty(l)){var s=_.items[l];for(var c in s.checked=!1,n)n.hasOwnProperty(c)&&n[c].value===s.value&&(s.checked=!0)}}}function z(e){"checkbox"===e.target.type&&(e.target.checked=!1),_.checked=!1}function P(){C(!0),c({type:"fieldfocusin",field:u})}function D(){C(!1),c({type:"fieldfocusout",field:u})}function T(e){e&&((f=y(e)).zoom=M,k(),c({type:"viewchanged",fieldview:f})),c("repaint")}function k(){if(f){if(_.hidden||_.noview)return void f.hide();f.show();var e=en.extend({},(t=g.getViewerTransform(p),n=R(t,_.x,_.y),o=R(t,_.x+_.width,_.y+_.height),i=g.getZoom(p),a=_.width*i,r=_.height*i,l={x:(n.x+o.x-a)/2,y:(n.y+o.y-r)/2},s=g.getPageRotation(p)+_.rotation,c="rotate("+s+"deg)",u={left:Math.round(l.x)+"px",top:Math.round(l.y)+"px",width:a+"px",height:r+"px","max-width":a+"px","max-height":r+"px"},d=pn(0!==s?c:""),en.extend(u,d),("textbox"===_.type||"signature"===_.type)&&(u.cursor=s%180==0?"text":"vertical-text"),u.visibility="visible",u),(h=_.border&&"underline"===_.border.style,{backgroundColor:_.backgroundcolor,color:_.color||_.text.font.color,borderStyle:_.border&&_.border.style&&!h?_.border.style:"none",borderBottomStyle:h?"solid":"inherit",borderColor:_.border?_.border.color:null,fontFamily:_.text.font.family,fontStyle:_.text.font.italic?"italic":_.text.font.oblique?"oblique":"normal",fontWeight:_.text.font.bold?"bold":"",textAlign:_.text.align}));f.css(e),g.highlighted?(f.addClass("atala-ui-form-highlight"),_.required?f.addClass("atala-ui-form-required"):f.removeClass("atala-ui-form-required")):f.removeClass("atala-ui-form-highlight"),_.readonly?f.attr("readonly","readonly"):f.removeAttr("readonly"),"textbox"===_.type?C(f.is(":focus")):"button"===_.type&&f.text(_.text.value)}var t,n,o,i,a,r,l,s,c,u,d,h}function C(e){"textbox"===_.type&&(e||(_.text.value?f.val()!==_.text.value&&f.val(_.text.value):f.val(_.text.defaultvalue)))}function M(e){e=e||g.getZoom(p),f.css({fontSize:Math.round((_.text.font.size||12)*e*(g.dpi/96)),borderWidth:_.border?Math.round(_.border.width*e):0}),_.text&&_.text.align&&f.css({paddingLeft:_.text.leftPadding*e+"px",paddingRight:_.text.rightPadding*e+"px"}),k()}return u._pageindex=n,o=e.type,en.extend(!0,_,l[o]),d(e,!0),u.dispose=function(){i&&i.off(),_=i=u=g=null},u.bind=function(){i.on.apply(i,arguments)},u.unbind=function(){i.off.apply(i,arguments)},u.trigger=c,u.set=d,u.get=function(e){return e?_[e]:_},u.setPageIndex=function(e){p=e,u.hasOwnProperty("_pageindex")&&(u._pageindex=e)},u.getClonedData=function(){return r?en.extend(!0,r,_):h(),r},u.getObject=function(){return f},u.getEventObject=function(){return i},u.getZoom=function(){return g.zoom},u.stringify=m,u.getJSON=m,u.getParentName=x,u.getName=function(){var e=_.fieldname.lastIndexOf(".");return 0<=e?_.fieldname.substr(e+1):_.fieldname},u.repaint=T,u.updateView=k,u.zoom=M,u},zn=function e(t,n,o){var i=this,s=t,a=n,r={forms:{events:{
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
function(e,t,n){var o=S(e,t,n).getClonedData();return s.trigger({type:p.fieldcreate,field:o}),o}
/**
   * Deletes a field on the given z-index and zero based page index.
   * @param pgNum: number, Zero based page index the field is located on.
   * @param fieldIndex: number, Zero based z-index of the field.
   */,deleteFromPage:C,getFromPage:M,insertForm:
/**
   * Inserts a form from the source URL and index into the given page index.
   * @param sourceUrl: string, Url of the desired form.
   * @param sourceIndex: number, Zero based page index the form is copied from.
   * @param index: number, Zero based page index the form is to be inserted into.
   * @param callback: function, Function to be called when the operation has completed.
   */
function(e,t,n,o){v(e,t,n),"function"==typeof o&&o(),s.trigger({type:p.forminserted,srcurl:e,srcindex:t,index:n}),s.trigger(p.formschanged)}
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
function(e,t,n){b(e,t),"function"==typeof n&&n(),s.trigger({type:p.formmoved,srcindex:e,destindex:t}),s.trigger(p.formschanged)},removeForm:function(e,t){_(e),"function"==typeof t&&t(),s.trigger({type:p.formremoved,index:e}),s.trigger(p.formschanged)}}};if(e.__exposedApi=r.forms,!t)return null;var l=n._pages,c=null,u={fields:[],multiviewFields:{},activepage:null,activefield:null,highlighted:!0,readonly:!!o,getZoom:a.getPageScale,getViewerTransform:a.getViewerTransform,getPageRotation:a.getPageRotation,dpi:96},d={},h=!1,g=!1,f=null,p={click:"fieldclicked",dblclick:"fielddoubleclicked",touchstart:"fieldtouchstart",interactend:"fieldtouchend",touchmove:"fieldtouchmove",pinchmove:"fieldpinchresize",rightclick:"fieldrightclicked",mousedown:"fieldmousedown",mousedownleft:"fieldmousedownleft",mousedownright:"fieldmousedownright",mousemove:"fieldmousemove",mouseout:"fieldmouseout",mouseup:"fieldmouseup",mouseover:"fieldmouseover",create:"fieldcreated",load:"fieldloaded",moved:"fieldmoved",resized:"fieldresized",repaint:"fieldrepainted"};function m(){}function v(e,t,n){if(null==e&&"number"==typeof t&&(t=_(t)),t=t||[],null==n?n=u.fields.length:n<0&&(n=0),n>u.fields.length){var o=u.fields.length;u.fields[n]=t;for(var i=o;i<u.fields.length;++i)u.fields[i]||(u.fields[i]=[])}else u.fields.splice(n,0,t)}function _(e){return e<u.fields.length?u.fields.splice(e,1)[0]:null}function b(e,t){v(null,_(e),t)}function y(e,t){if(e<u.fields.length&&u.fields[e]&&u.fields[e].length){var n;x(t);for(var o=0;o<u.fields[e].length;o++)(n=u.fields[e][o]).setPageIndex(e),n.repaint(t._form)}}function x(e){e._form&&e._form._fields&&(e._form._fields.length=0,e._form.empty())}function w(e){y(e.index,e.page)}function z(){null!=f.field&&f.field.getObject()[0].blur()}function P(e){e.page._form&&x(e.page)}function D(e){u.activepage=e}function T(e){k(e.page)}function k(e){if(e&&u.fields.length&&u.fields[e._index])for(var t=0;t<u.fields[e._index].length;t++)u.fields[e._index][t].updateView()}function C(e,t){var n,o,i;n=t,o=e,i=u.fields[o].splice(n,1)[0],u.activepage&&u.activepage._form._fields.splice(n,1),i.dispose(),s.trigger({type:"fielddeleted",page:o,index:n})}
/**
   * Gets an array of field data objects located on the given zero based page index.
   * @param pageNum: number, Zero based page index the fields are located on.
   * @returns array: Array of field data objects on the given page index. 
   */function M(e){var t=[];if(0===u.fields.length||void 0===u.fields[e])return t;for(var n=0;n<u.fields[e].length;n++)t[n]=u.fields[e][n].getClonedData();return t}function E(){if(0<u.fields.length){if(u.fields.length=0,l)for(var e=0;e<l.length;e++)x(l[e]);s.trigger({type:"formscleared"})}}function S(e,t,n){var o={};e&&e.type&&d[e.type]&&en.extend(!0,o,d[e.type]),en.extend(!0,o,e);var i=new Z(o,u,t);return void 0===u.fields[t]&&(u.fields[t]=[]),u.fields[t].push(i),a.redrawVisiblePages(),"function"==typeof n&&n(i),R(i),i}i.dispose=function(){c=l=a=s=i=null,u.fields.length=0,u.multiviewFields=null,u.activepage=null,u.activefield=null},i.addFormLayer=function(t){if(t instanceof en){t._form=a.createDiv(t),t._form.css({position:"absolute",zIndex:4}),t._form._fields=[],t._form._page=t;var e=function(){D(t)};return t.on("mousedown",e),nn.Features.Touch&&t.on("touchstart",e),t.on({pageresize:function(e){e.page=t,k(e.page)},pagezoom:function(e){e.page=t,function(e){for(var t in e.page._form._fields)e.page._form._fields.hasOwnProperty(t)&&e.page._form._fields[t].zoom(a.getPageScale(e.index))}(e)}}),!0}return!1},i.insertForm=v,i.removeForm=_,i.moveForm=b,i.removeFormLayer=function(e){return e instanceof en&&(e._form&&(e._form._fields=null,e._form._page=null,e._form=null),!0)},i.showLayer=y,i.__exposedApi=r.forms,i.__getDebugInfo=function(){var e={};return en.extend(!0,e,{data:u,pages:l,viewport:c}),e},i.__linkForms=function(e){e&&(e._fields?Array.isArray(e._fields)&&(u.fields=e._fields):e._fields=u.fields)},i.clear=E,i.createField=S,i.deleteFieldOnPage=C,i.getFieldsFromPage=M,i.setViewPort=function(e){e&&(e instanceof en||(e=en(e)),c=e)},i.drawField=function(e,t,n){return h?null:(e&&e.type&&d[e.type]&&en.extend(!0,e,d[e.type]),u.activefield&&null===u.activefield.getObject()&&O(),function(){if(!g){c.on("mousedown",A),nn.Features.Touch&&c.on("touchstart",A);for(var e=0;e<l.length;e++)l[e]._draw.toFront();g=!0}}(),u.activefield=new Z(e,u,u.activepage?u.activepage._index:void 0),u.activefield.bind({drawn:I,cancelled:O}),"function"==typeof t&&(F=t),u.activefield)};var F=function(){};function A(e){h=!0,c.off("mousedown",A),nn.Features.Touch&&c.off("touchstart",A),s.trigger({type:"fielddrawstart",field:u.activefield.getClonedData()}),u.activefield._pageindex=u.activepage._index,u.activefield.startDraw(e,u.activepage._form,{})}function I(){var e,t,n;e=u.activefield,t=u.activepage,n=t?t._index:0,u.fields[n]?u.fields[n].push(e):u.fields[n]=[e],u.activefield.unbind({}),R(u.activefield),F({field:e}),F=function(){},s.trigger({type:p.fieldcreate,field:e.getClonedData()}),V()}function O(){u.activefield.dispose(),u.activefield=null,h&&V(!0)}function V(e){h=!1,function(){if(g){c.off("mousedown",A),nn.Features.Touch&&c.off("touchstart",A);for(var e=0;e<l.length;e++)l[e]._draw.reset();g=!1}}(),s.trigger({type:"fielddrawend",field:e?null:u.activefield.getClonedData(),cancelled:!!e})}function H(e){f=e,s.bind("scroll",z)}function L(){s.unbind("scroll",z)}function R(t){function e(e){s.trigger({type:p[e.type],field:t.getClonedData()})}t.bind({interactstart:function(){u.activepage&&u.activepage._form===t.getObject().form||D(t.getObject().form._page),u.activefield=t},moved:e,resized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mousemove:e,mouseout:e,mouseup:e,mouseover:e,repaint:e,fieldfocusin:H,fieldfocusout:L})}function B(e,t,n,o,i){var a={type:"formdata",serverurl:e,query:"?atalaformdata=",method:"GET",data:{atala_formurl:t,atala_docurl:n=n||s.config.documenturl,atala_a_ofs:o,atala_a_len:i},cancel:!1,info:{fields:[],length:i,error:void 0}};for(var r in a.data)a.data.hasOwnProperty(r)&&null===a.data[r]&&(a.data[r]=void 0);return a}function j(t,e,n){function o(e){void 0!==t.info.docIndex&&(e.offset=t.info.docIndex),q(e),"function"==typeof n&&n.call(void 0,e.error,e)}"function"==typeof e&&(n=e,e=!1),e||E(),a.makeHandlerRequest(t,o,o)}function q(e){if(e){var t={type:"formsloaded",forms:e.forms,customData:e.customData};if(e.dpi&&(u.dpi=e.dpi),e.forms&&e.forms.fields)for(var n=0;n<e.forms.fields.length;n++){e.offset=e.offset||0;var o=e.offset+n;u.fields[o]&&0<u.fields[o].length?u.fields[o].length=0:u.fields[o]=[];var i=e.forms.fields[n];if(i&&0<i.length)for(var a=0;a<i.length;a++)u.fields[o][a]=new Z(i[a],u,o),r=u.fields[o][a],l=r.getParentName(),0<=r.getName().indexOf("<~Atala_Unnamed_")&&(u.multiviewFields.hasOwnProperty(l)?u.multiviewFields[l].push(r):u.multiviewFields[l]=[r]),s.trigger({type:p.load,field:u.fields[o][a].getClonedData()}),R(u.fields[o][a])}else e.error&&(t.error=e.error);s.trigger(t)}var r,l}i.stringifyChanges=function(){var e={},t=!1;for(var n in u.fields)if(u.fields.hasOwnProperty(n)&&0<u.fields[n].length)for(var o in e[n]=[],u.fields[n])u.fields[n].hasOwnProperty(o)&&(t=!0,e[n][o]=u.fields[n][o].get());return t?JSON.stringify({forms:{fields:e}}):void 0},i.createHandlerRequest=B,i.makeHandlerRequest=j,i.loadFormUrl=function(e,t,n,o,i,a,r){var l=Array.prototype.slice.call(arguments);"function"!=typeof(r=l.pop())&&l.push(r),e=l.shift(),t=l.shift(),n=l.shift(),o=l.shift(),i=l.shift(),a=l.shift();var s=B(e,t,n,o,i);void 0!==a&&(s.info.docIndex=a),j(s,0<=o&&1<=i,r)},i.loadForms=q,"Atalasoft.Controls.WebDocumentViewer"===s.typeOf&&en.extend(s,r),s.bind({pagerecycled:P,pageshown:w,zoomchanged:m,pagerotated:T})};
/**
 * WebDocumentViewer PDF Forms API.
 * @class
 * @inner
 * @name FormController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 * @ignore
 */function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(U=W||(W={})).Button="atala-upload-button",U.DragAndDrop="atala-upload-drag-and-drop",U.DragAndDropImage="atala-upload-drag-and-drop-image",U.FileProgress="atala-upload-progress-file",U.FileProgressImage="atala-upload-progress-file-image",U.MultipleFilesHeaderRow="atala-upload-files-header-row",U.MultipleFilesHeader="atala-upload-files-header",U.TextElement="atala-upload-text-element",U.Control="atala-upload-control",U.AreaContainer="atala-upload-flex-area",U.AreaNonTable="atala-upload-flex-area-non-table",U.AreaSingleFile="atala-upload-single-file",U.AreaSingleFileNoDragDrop="atala-upload-single-file-no-drag-drop",U.AreaMultipleFile="atala-upload-multiple-files",U.AreaMultipleFileDragDrop="atala-upload-multiple-files-drag-and-drop",U.ButtonsContainer="atala-upload-flex-buttons",U.Buttons="atala-upload-buttons",U.CloseButton="atala-upload-close-button",U.CancelButton="atala-upload-cancel-button",U.OkButton="atala-upload-ok-button",U.AddButton="atala-upload-add-button",U.MultipleFilesHeaderName="atala-upload-files-header-name",U.MultipleFilesHeaderSize="atala-upload-files-header-size",U.MultipleFilesHeaderStatus="atala-upload-files-header-status",U.MultipleFilesRow="atala-upload-files-row",U.MultipleFilesCell="atala-upload-files-cell",U.MultipleFilesCellName="atala-upload-files-cell-name",U.MultipleFilesCellSize="atala-upload-files-cell-size",U.MultipleFilesCellStatus="atala-upload-files-cell-status",U.MultipleFilesCellCancelButton="atala-upload-files-cancel-button";var ee=function(){function e(e,t){G(this,"cancel",!1),G(this,"progressCounter",0),G(this,"filename",void 0),G(this,"statusText",void 0),this.filename=e,this.statusText=t}var t=e.prototype;return t.handler=function(e){this.isUploadStartEventData(e)?e.fileinfo.filename===this.filename&&this.cancel&&(e.fileinfo.cancel=!0):e.uploadinfo.filename===this.filename&&(this.cancel&&(e.uploadinfo.cancel=!0),this.progressCounter%5==0&&this.statusText.text("Uploading ("+(e.uploadinfo.uploadedbytes/e.uploadinfo.totalbytes*100).toFixed(0)+" %)"),this.progressCounter++)},t.isUploadStartEventData=function(e){return void 0!==e.fileinfo},e}();function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=function(){function e(e,t){te(this,"enterLeaveLevel",0),te(this,"dragEffect",void 0),te(this,"control",void 0),te(this,"allowMultipleFiles",void 0),this.control=e,this.allowMultipleFiles=t,this.dragEffect=""}var t=e.prototype;return t.onDragEnter=function(e){""===this.dragEffect&&0===this.enterLeaveLevel&&(this.dragEffect=this.calcDragEffect(e.dataTransfer)),this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect),this.enterLeaveLevel++},t.onDrop=function(e){"none"!==this.dragEffect&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer)),this.resetState()},t.onDragLeave=function(){this.enterLeaveLevel--,0===this.enterLeaveLevel&&(this.dragEffect="")},t.onDragOver=function(e){this.isDataTransferPresented(e.dataTransfer)&&(e.dataTransfer.dropEffect=this.dragEffect)},t.calcDragEffect=function(e){var t=this;return this.control.uploadRequested||!this.isDataTransferPresented(e)?"none":(nn.Firefox?2===e.types.length&&e.types.some(function(e){return function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,t),"Files"===e}.bind(this)):1===e.types.length&&"Files"===e.types[0])&&(this.allowMultipleFiles||1===e.items.length)?"copy":"none"},t.processDragAndDropEvent=function(e){e.preventDefault();var t=e.originalEvent;if(t instanceof DragEvent)switch(t.type){case"dragenter":this.onDragEnter(t);break;case"dragover":this.onDragOver(t);break;case"drop":this.onDrop(t);break;case"dragleave":this.onDragLeave()}},t.getFilesFromDataTransfer=function(e){var t=[];if(!this.isDataTransferPresented(e))return t;for(var n=0;n<e.files.length;n++)t.push(e.files[n]);return t},t.resetState=function(){this.dragEffect="",this.enterLeaveLevel=0},t.isDataTransferPresented=function(e){return null!==e},e}(),oe=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),(t.prototype.constructor=t).__proto__=n;var i=o.prototype;return i.onDragEnter=function(){},i.onDragOver=function(){},i.onDragLeave=function(){},i.onDrop=function(e){!this.control.uploadRequested&&this.isDataTransferPresented(e.dataTransfer)&&1===e.dataTransfer.types.length&&"Files"===e.dataTransfer.types[0]&&(this.allowMultipleFiles||1===e.dataTransfer.files.length)&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer))},o}(ne);function ie(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function ae(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=function(){function e(e){var o=this;re(this,"control",void 0),re(this,"openFileDlgBtn",void 0),re(this,"openFileForm",void 0),re(this,"callbackToManipulateParentUi",function(){ie(this,o)}.bind(this)),re(this,"allowedDragAndDrop",void 0),re(this,"uiShouldBeClosedAfterUpload",void 0),re(this,"isVisible",!1),re(this,"progressHandlers",[]),re(this,"uploadRequested",!1),re(this,"reinitNeeded",!1),re(this,"processFileFinishedUpload",function(){ie(this,o)}.bind(this)),re(this,"controller",void 0),re(this,"openFileDlgChangeHandler",function(){ie(this,o);var e=this.openFileDlgBtn[0].files;this.processFiles(this.convertFileListToFilesArray(e)),this.openFileForm[0].reset()}.bind(this)),re(this,"handleUploadFinished",function(){ie(this,o),this.uiShouldBeClosedAfterUpload?this.controller.finish(!1):(this.control.find("."+W.CancelButton).css("display","none"),this.control.find("."+W.CloseButton).css("display",""))}.bind(this)),re(this,"processProgressHandlers",function(t){var n=this;ie(this,o),this.progressHandlers.forEach(function(e){return ie(this,n),e.handler(t)}.bind(this))}.bind(this)),this.controller=e;var t=en("<div/>").addClass(W.Control).css("flex-flow","column").css("height","100%").css("width","100%").addClass("ui-widget"),n=en("<div/>").addClass(W.AreaContainer).css("display","flex").css("flex-flow","column").css("flex","1 1 auto").css("align-content","center").css("overflow","auto"),i=en("<div/>").addClass(W.ButtonsContainer).css("flex","0 1 auto");t.append(n),t.append(i),this.control=t,this.openFileDlgBtn=en("<input/>").attr("type","file").change(this.openFileDlgChangeHandler),this.openFileForm=en("<form/>").css("display","none"),this.openFileDlgBtn.appendTo(this.openFileForm),this.openFileForm.appendTo(this.control),this.allowedDragAndDrop=!1,this.uiShouldBeClosedAfterUpload=!1}var t,n,o,i=e.prototype;return i.init=function(e,t){var n=this;this.openFileDlgBtn.attr("accept",t.allowedFileTypes);var o=en(this.control.children("."+W.ButtonsContainer));if(this.initArea(t),this.initButtons(o,t),this.control.css("display","none"),this.control.appendTo(e),this.allowedDragAndDrop=t.allowDragDrop,this.uiShouldBeClosedAfterUpload=t.closeUiAfterUpload,this.allowedDragAndDrop){var i=nn.Explorer?new oe(this,t.allowMultipleFiles):new ne(this,t.allowMultipleFiles);this.area.on("dragenter",function(e){return ie(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragover",function(e){return ie(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("drop",function(e){return ie(this,n),i.processDragAndDropEvent(e)}.bind(this)).on("dragleave",function(e){return ie(this,n),i.processDragAndDropEvent(e)}.bind(this))}},i.activate=function(e){this.callbackToManipulateParentUi=e,this.allowedDragAndDrop?(this.callbackToManipulateParentUi(!1),this.show()):this.openFileDlgBtn.click()},i.close=function(){this.unbindEvents(),this.hide()},i.getControlDom=function(){return this.control},i.initButtons=function(e,t){var n=this,o=en("<div/>").addClass(W.Buttons).css("float","right"),i=en("<button/>").addClass(W.Button).addClass(W.AddButton).button({label:"Add..."}).click(function(e){ie(this,n),e.preventDefault(),this.openFileDlgBtn.click()}.bind(this)),a=en("<button/>").addClass(W.Button).addClass(W.CloseButton).button({label:"Close"}).css("display","none").click(function(e){ie(this,n),e.preventDefault(),this.close()}.bind(this)),r=en("<button/>").addClass(W.Button).addClass(W.CancelButton).button({label:"Cancel"}).click(function(e){ie(this,n),e.preventDefault(),this.controller.abort(),this.close()}.bind(this));(t.allowMultipleFiles||t.allowDragDrop)&&o.prepend(i),o.append(r),t.closeUiAfterUpload||o.append(a),o.appendTo(e)},i.initAreaImpl=function(e,t,n){var o=en("<div/>").addClass(e).addClass(W.TextElement);return this.initAreaContents(o,t,n),o},i.initAreaContents=function(e,t,n){var o=en("<div/>").addClass(t?W.FileProgressImage:W.DragAndDropImage),i=en("<span/>").addClass(t?W.FileProgress:W.DragAndDrop).text(n);e.append(o).append(i)},i.reinitArea=function(e,t){var n=this.area.children().first();return n.children().remove(),this.initAreaContents(n,e,t),n},i.processFiles=function(e){if(!this.uploadRequested)if(0<e.length){var t=this.filterFiles(e);0<t.length&&(this.allowedDragAndDrop||(this.callbackToManipulateParentUi(!1),this.show()),this.addFilesToUi(t))}else this.allowedDragAndDrop||this.controller.abort()},i.filterFiles=function(e,t){for(var n=this.controller.filterFiles(e,void 0===t?[]:t),o=[],i=0;i<e.length;i++)n[0]===e[i].name?n.shift():o.push(e[i]);return o},i.bindEvents=function(){this.controller.bind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.unbindEvents=function(){this.controller.unbind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})},i.show=function(){this.control.css("display","flex"),this.controlParent.children().first().css("display","none"),this.isVisible=!0},i.hide=function(){var e=this;this.control.css("display","none"),this.controlParent.children().first().css("display","block"),this.isVisible=!1,this.progressHandlers.length=0,this.callbackToManipulateParentUi(!0),this.callbackToManipulateParentUi=function(){ie(this,e)}.bind(this),this.uploadRequested=!1,this.reinitNeeded=this.allowedDragAndDrop,this.switchButtonEnabledState(W.AddButton,!0),this.uiShouldBeClosedAfterUpload||(this.control.find("."+W.CloseButton).css("display","none"),this.control.find("."+W.CancelButton).css("display",""))},i.convertSize=function(e){for(var t=e,n=0;1024<t;)t/=1024,n++;return t.toFixed(2)+" "+["B","KB","MB","GB","TB"][n]},i.addProgressHandler=function(e,t){this.progressHandlers.push(new ee(e,t))},i.removeProgressHandler=function(t){var n=this,e=this.progressHandlers.filter(function(e){return ie(this,n),e.filename===t}.bind(this))[0];null!==e&&this.progressHandlers.splice(this.progressHandlers.indexOf(e),1)},i.cancelUpload=function(t){var n=this,e=this.progressHandlers.filter(function(e){return ie(this,n),e.filename===t}.bind(this))[0];null!=e&&(e.cancel=!0)},i.convertFileListToFilesArray=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},i.switchButtonEnabledState=function(e,t){var n=t?"enable":"disable";this.control.find("."+e).button(n)},i.isFileSuccessEventData=function(e){return void 0!==e.filepath},t=e,(n=[{key:"controlParent",get:function(){return this.control.parent()}},{key:"area",get:function(){return en(this.control.children("."+W.AreaContainer))}}])&&ae(t.prototype,n),o&&ae(t,o),e}();function se(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var he=function(a){var e,t,n,o,i;function l(e){var t,n=this;return de(ce(t=a.call(this,e)||this),"files",[]),de(ce(t),"table",void 0),de(ce(t),"uploadElems",[]),t.processFileFinishedUpload=function(e){se(this,n),t.isFileSuccessEventData(e)?t.markStatusFinished(e.filename,!0):t.markStatusFinished(e.errorinfo.filename,!1,e.errorinfo.canceled)}.bind(this),t}t=a,(e=l).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t,n=l,i=[{key:"rowTemplate",get:function(){return null===this.rowTemplateField&&(this.rowTemplateField=this.getFileRowTemplate()),this.rowTemplateField}}],(o=null)&&ue(n.prototype,o),i&&ue(n,i);var r=l.prototype;return r.init=function(e,t){a.prototype.init.call(this,e,t),this.openFileDlgBtn.attr("multiple",!0)},r.initArea=function(e){var t;e.allowDragDrop?((t=this.initAreaImpl(W.AreaMultipleFile,!1,"Drop files here")).addClass(W.AreaMultipleFileDragDrop),this.area.addClass(W.AreaNonTable)):(t=en("<div/>").addClass(W.AreaMultipleFile).addClass(W.TextElement),this.initFilesTable(t)),t.appendTo(this.area)},r.initFilesTable=function(e){this.area.removeClass(W.AreaNonTable);var t=en("<div/>").addClass(W.MultipleFilesHeaderRow).addClass("ui-widget-header"),n=en("<div/>").addClass(W.MultipleFilesHeaderName).addClass(W.MultipleFilesHeader).text("Name"),o=en("<div/>").addClass(W.MultipleFilesHeaderSize).addClass(W.MultipleFilesHeader).text("Size"),i=en("<div/>").addClass(W.MultipleFilesHeaderStatus).addClass(W.MultipleFilesHeader).text("Status");t.append(n).append(o).append(i).appendTo(e),this.table=e},r.initButtons=function(e,t){var n=this;a.prototype.initButtons.call(this,e,t);var o=e.children().first(),i=en("<button/>").addClass(W.OkButton).button({label:"OK"}).addClass(W.Button).click(function(e){se(this,n),e.preventDefault(),this.bindEvents(),this.uploadRequested=!0,this.switchButtonEnabledState(W.AddButton,!1),this.switchButtonEnabledState(W.OkButton,!1),this.controller.uploadFiles(this.files)}.bind(this));o.children("."+W.AddButton).first().after(i)},r.processFiles=function(e){var t=this;if(this.isVisible){if(this.uploadRequested)return;if(0<e.length){var n=this.filterFiles(e,this.files.map(function(e){return se(this,t),e.name}.bind(this)));0<n.length&&(this.switchButtonEnabledState(W.OkButton,!0),this.addFilesToUi(n))}}else a.prototype.processFiles.call(this,e)},r.addFilesToUi=function(e){var t,n;if(this.allowedDragAndDrop&&void 0===this.table){var o=this.area.children().first();o.children().remove(),o.removeClass(W.AreaMultipleFileDragDrop),this.initFilesTable(o)}for(var i=[],a=0;a<e.length;a++)i.push(this.addRowToFilesTable(e[a]));(t=this.files).push.apply(t,e),(n=this.table).append.apply(n,i)},r.addRowToFilesTable=function(t){var n=this,o=t.name,i=l.rowTemplate.clone();en("."+W.MultipleFilesCellName,i).text(o),en("."+W.MultipleFilesCellSize,i).text(this.convertSize(t.size));var a=en("."+W.FileProgress,i),r=en("."+W.MultipleFilesCellCancelButton,i).click(function(e){se(this,n),e.preventDefault(),this.uploadRequested?(this.cancelUpload(o),r.css("display","none"),a.text("Canceled")):(this.files.splice(this.files.indexOf(t,0),1),this.removeProgressHandler(o),i.remove(),0===this.files.length&&(this.controller.abort(),this.close()))}.bind(this));return this.addProgressHandler(t.name,a),this.addFinishHandler(t.name,a,r),i},r.show=function(){this.switchButtonEnabledState(W.OkButton,!this.allowedDragAndDrop),this.reinitNeeded&&(this.reinitArea(!1,"Drop files here").addClass(W.AreaMultipleFileDragDrop),this.area.addClass(W.AreaNonTable),this.table=void 0),a.prototype.show.call(this)},r.hide=function(){a.prototype.hide.call(this),this.files.length=0,void(this.uploadElems.length=0)!==this.table&&this.table.children(".atala-upload-files-row").remove()},r.addFinishHandler=function(e,t,n){this.uploadElems.push({filename:e,statusTextElem:t,cancelUploadBtn:n})},r.markStatusFinished=function(t,e,n){var o=this;void 0===n&&(n=!1);var i=this.uploadElems.filter(function(e){return se(this,o),e.filename===t}.bind(this))[0];null!=i&&(i.cancelUploadBtn.css("display","none"),e?i.statusTextElem.text("Finished"):n?i.statusTextElem.text("Canceled"):i.statusTextElem.text("Error"))},l.getFileRowTemplate=function(){var e=en('<div class="'+W.MultipleFilesRow+'">\n<div class="'+W.MultipleFilesCell+" "+W.MultipleFilesCellName+'"></div>\n<div class="'+W.MultipleFilesCell+" "+W.MultipleFilesCellSize+'"/></div>\n<div class="'+W.MultipleFilesCell+" "+W.MultipleFilesCellStatus+'">\n<span class="'+W.FileProgress+'">Upload pending</span>\n<button title="Removes file from upload queue" class="atala-ui-button '+W.MultipleFilesCellCancelButton+'"/>\n</div>\n</div>');return en("."+W.MultipleFilesCellCancelButton,e).button({icon:"atala-ui-icon atala-ui-icon-upload-cancel",showLabel:!1}),e},l}(le);function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}de(he,"rowTemplateField",null);var pe,me,ve=function(o){var e,t;function n(e){var t,n=this;return fe(ge(t=o.call(this,e)||this),"fileName",""),fe(ge(t),"uploadProgressSpan",null),fe(ge(t),"uploadProgressImage",null),t.processFileFinishedUpload=function(e){!function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,n),t.isFileSuccessEventData(e)?t.uploadProgressSpan.text("Upload finished"):e.errorinfo.canceled?t.uploadProgressSpan.text("Upload canceled"):t.uploadProgressSpan.text("An error occurred during upload"),t.uploadProgressImage.css("display","none")}.bind(this),t}t=o,(e=n).prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t;var i=n.prototype;return i.initArea=function(e){var t=W.AreaSingleFile,n="Uploading...";e.allowDragDrop&&(n="Drop file here");var o=this.initAreaImpl(t,!e.allowDragDrop,n);e.allowDragDrop||(this.uploadProgressSpan=o.children("."+W.FileProgress).first(),this.uploadProgressImage=o.children("."+W.FileProgressImage).first(),o.addClass(W.AreaSingleFileNoDragDrop)),o.appendTo(this.area),this.area.addClass(W.AreaNonTable)},i.addFilesToUi=function(e){this.allowedDragAndDrop&&this.reinitArea(!0,"Uploading..."),this.uploadRequested=!0,this.fileName=e[0].name,this.addProgressHandler(this.fileName,this.uploadProgressSpan),this.bindEvents(),this.switchButtonEnabledState(W.AddButton,!1),this.controller.uploadFile(e[0])},i.show=function(){this.reinitNeeded&&this.reinitArea(!1,"Drop file here"),o.prototype.show.call(this)},i.hide=function(){o.prototype.hide.call(this),null!==this.uploadProgressImage&&this.uploadProgressImage.css("display","")},i.reinitArea=function(e,t){var n=o.prototype.reinitArea.call(this,e,t);e?(this.uploadProgressSpan=n.children("."+W.FileProgress).first(),this.uploadProgressImage=n.children("."+W.FileProgressImage).first(),n.addClass(W.AreaSingleFileNoDragDrop)):(n.removeClass(W.AreaSingleFileNoDragDrop),this.uploadProgressSpan=null,this.uploadProgressImage=null)},n}(le);function _e(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function be(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(me=pe||(pe={}))[me.Idle=0]="Idle",me[me.Canceling=1]="Canceling",me[me.Uploading=2]="Uploading";var Pn=function(){function e(e,t){var l=this;ke(this,"config",void 0),ke(this,"trigger",void 0),ke(this,"bind",void 0),ke(this,"unbind",void 0),ke(this,"sendRequest",void 0),ke(this,"uploadControlField",null),ke(this,"state",pe.Idle),ke(this,"filesToUpload",[]),ke(this,"uploadingFiles",[]),ke(this,"hasErrors",!1),ke(this,"wasCanceled",!1),ke(this,"uploadCallback",null),ke(this,"abort",function(){_e(this,l),this.config.enabled&&(this.state===pe.Uploading&&(this.hasErrors=!0,this.wasCanceled=!0,this.state=pe.Canceling,this.abortActiveRequests()),this.finish(!0))}.bind(this)),ke(this,"finish",function(e){_e(this,l),(this.config.closeUiAfterUpload||e)&&this.uploadControl.close()}.bind(this)),ke(this,"onFileUploadStarted",function(e,t){if(_e(this,l),this.state===pe.Canceling)return!1;var n={type:"fileuploadstarted",fileinfo:{filename:e,size:t,cancel:!1}};return this.trigger(n),!n.fileinfo.cancel}.bind(this)),ke(this,"onFileUploadFinished",function(e,t){if(_e(this,l),!e.success||e.canceled||void 0!==e.error){var n={type:"fileuploaderror",errorinfo:{filename:t,canceled:e.canceled,customData:e.customData}};this.hasErrors=!0,n.errorinfo.canceled?this.wasCanceled=!0:n.errorinfo.error=e.error,this.trigger(n)}else this.trigger({type:"fileuploadfinished",filepath:e.filename,filename:t,customData:e.customData});this.tryToFinishUpload(t)}.bind(this)),ke(this,"onFileUploadFailed",function(e,t,n){_e(this,l);var o={type:"fileuploaderror",errorinfo:{filename:n,canceled:"abort"===e}};this.hasErrors=!0,o.errorinfo.canceled?this.wasCanceled=!0:(o.errorinfo.error=e,t&&(o.errorinfo.error+=": "+t)),this.trigger(o),this.tryToFinishUpload(n)}.bind(this)),ke(this,"onUploadStarted",function(){_e(this,l);var e={type:"uploadstarted",info:{cancel:!1}};return this.trigger(e),!e.info.cancel}.bind(this)),ke(this,"onUploadFinished",function(){_e(this,l);var e={type:"uploadfinished",canceled:this.wasCanceled,success:!this.hasErrors};this.trigger(e)}.bind(this)),ke(this,"onFileUploading",function(t,e,n){var o=this;if(_e(this,l),this.state===pe.Canceling)return!1;var i=this.uploadingFiles.filter(function(e){return _e(this,o),e.filename===t}.bind(this));if(0===i.length||1<i.length)return!0;var a=i[0];if(a.canceled)return!0;var r={type:"fileuploading",uploadinfo:{filename:t,uploadedbytes:e,totalbytes:n,cancel:!1}};return this.trigger(r),a.canceled=r.uploadinfo.cancel,!r.uploadinfo.cancel}.bind(this)),this.trigger=e.trigger,this.sendRequest=t.makeHandlerRequest,this.bind=e.bind,this.unbind=e.unbind;var n=e.config;this.config={serverUrl:e.config.serverurl,enabled:!1!==n.upload.enabled,allowMultipleFiles:!!n.upload.allowmultiplefiles,allowedFileTypes:n.upload.allowedfiletypes,allowDragDrop:!!n.upload.allowdragdrop,allowedMaxFileSize:n.upload.allowedmaxfilesize,uploadPath:n.upload.uploadpath,uiParent:e.config.parent,filesUploadConcurrency:e.config.upload.filesuploadconcurrency,closeUiAfterUpload:e.config.upload.closeuiafterupload}}var t,n,o,i=e.prototype;return i.dispose=function(){},i.uploadWithUi=function(e){this.uploadControl.activate(e)},i.uploadFiles=function(e,t,n){var o=this;if(this.checkControllerState()&&this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkUploadPath(t)&&this.checkCallback(n)){if(this.state=pe.Uploading,!this.fireUploadStartedEvent())return this.abort(),void this.tryToFinishUpload();for(e.forEach(function(e){return _e(this,o),this.uploadFileOnServer(t,e)}.bind(this));this.uploadingFiles.length<this.config.filesUploadConcurrency&&0<this.filesToUpload.length;)this.startFileUpload(this.filesToUpload.pop());"function"==typeof n&&(this.uploadCallback=n)}},i.uploadFile=function(e,t,n){this.uploadFiles([e],t,n)},i.uploadFileOnServer=function(e,t){var n={atala_upath:this.config.uploadPath,atala_subpath:e},o=en.extend(!0,{},n,{atala_filename:t.name,atala_filetype:t.type}),i={type:"fileupload",serverurl:this.config.serverUrl,query:"?atalafileupload=",method:"POST",data:o,file:t,cancel:!1};this.filesToUpload.push(i)},i.startFileUpload=function(e){this.onFileUploadStarted(e.file.name,e.file.size)?this.uploadingFiles.push({filename:e.file.name,canceled:!1,jqxhr:this.sendRequest(e,this.onFileUploadFinished,this.onFileUploadFailed,this.onFileUploading)}):this.onFileUploadFailed("abort","",e.file.name)},i.fireUploadStartedEvent=function(){return this.onUploadStarted()},i.checkControllerState=function(){return!(this.state===pe.Uploading||this.state===pe.Canceling&&0<this.uploadingFiles.length)||(this.throwError("checkControllerState","Web Document Viewer already performs an upload operation and can start the another one. Please try again later"),!1)},i.checkUploadPath=function(e){return!e||"string"==typeof e||(this.throwError("checkUploadPath","uploadpath object '"+e+"' is not a string. Please check your input parameters and try again."),!1)},i.checkIfUploadDisabled=function(){return!!this.config.enabled||(this.throwError("checkUploadEnabled","Upload is not enabled in this Web Document Viewer instance. Please check the viewer configuration and try again."),!1)},i.checkFilesToUpload=function(e){if(!Array.isArray(e))return this.throwError("checkFilesToUpload","The parameter is not an array. Please check your input parameters."),!1;for(var t=0;t<e.length;t++){var n=e[t];if(!(n instanceof File))return this.throwError("checkFilesToUpload","An object "+n+" doesn't implement File interface object. Please check your input parameters and try again."),!1}return!0},i.checkAlreadyAddedFiles=function(e){if(!e)return!0;if(!Array.isArray(e))return this.throwError("checkAlreadyAddedFiles","The parameter is not an array. Please check your input data."),!1;for(var t=0;t<e.length;t++){var n=e[t];if("string"!=typeof n)return this.throwError("checkAlreadyAddedFiles","An object "+n+" doesn't implement File interface object. Please check your input parameters."),!1}return!0},i.checkCallback=function(e){return!e||"function"==typeof e||(this.throwError("checkCallback","callback object '"+e+"' is not a function. Please check your input parameters and try again."),!1)},i.throwError=function(e,t){this.trigger({type:"throwerror",name:e,msg:t})},i.tryToFinishUpload=function(t){var n=this;t&&this.uploadingFiles.splice(this.uploadingFiles.indexOf(this.uploadingFiles.filter(function(e){return _e(this,n),e.filename===t}.bind(this))[0]),1),0<this.filesToUpload.length?this.startFileUpload(this.filesToUpload.pop()):0===this.uploadingFiles.length&&(this.state!==pe.Idle&&(this.state=pe.Idle,this.onUploadFinished(),null!==this.uploadCallback&&this.uploadCallback()),this.hasErrors=!1,this.wasCanceled=!1)},i.filterFilesPublic=function(e,t,n){var o,i=this,a=[];this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkAlreadyAddedFiles(t)&&this.checkCallback(n)&&(o=t?this.filterFiles(e,t):this.filterFiles(e,[]),a=e.filter(function(t){var n=this;return _e(this,i),!o.some(function(e){return _e(this,n),e===t.name}.bind(this))}.bind(this)),"function"==typeof n&&n());return a},i.filterFiles=function(e,t){for(var n=this,o=[],i=this.config.allowedFileTypes.toLowerCase().split(","),a=t.map(function(e){return _e(this,n),e}.bind(this)),r=e.length,l=0;l<r;l++){var s=e[l],c=s.name,u=w.None;if(s.size>this.config.allowedMaxFileSize)o.push(c),u=w.Size;else{for(var d=!1,h=a.length,g=0;g<h;g++)if(a[g]===c){d=!0;break}if(d)o.push(c),u=w.Name;else{for(var f=c.split(".").pop(),p="."+(f?f.toLowerCase():""),m=s.type.toLowerCase(),v=!1,_=0;_<i.length;_++){var b=i[_];if(b===p||""===b.trim()){v=!0;break}var y=b.split("/"),x=m.split("/");if(2===y.length&&2===x.length&&y[0]===x[0]&&(y[1]===x[1]||"*"===y[1])){v=!0;break}}v||(o.push(c),u=w.Type)}}this.onFileAddedToUpload(s,u),a.push(c)}return o},i.abortActiveRequests=function(){var t=this;this.uploadingFiles.forEach(function(e){return _e(this,t),e.jqxhr.abort()}.bind(this))},i.onFileAddedToUpload=function(e,t){var n={type:"fileaddedtoupload",filename:e.name,success:0===t,reason:t};this.trigger(n)},i.getUploadControl=function(){return this.uploadControl.getControlDom()}
/**
   *
   * Creates a jQuery UI upload control.
   * @param {any} parent - parent object to append to.
   */,i.createUploadControl=function(e){var t;return(t=this.config.allowMultipleFiles?new he(this):new ve(this)).init(e,this.config),t},t=e,(n=[{key:"uploadControl",get:function(){return null===this.uploadControlField&&(this.uploadControlField=this.createUploadControl(this.config.uiParent)),this.uploadControlField}}])&&be(t.prototype,n),o&&be(t,o),e}();function Ce(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Document operations API.
 * @class
 * @name DocumentController
 * @inner
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var Dn=function e(i,t,n){var o=this,d=i,h=t,r=n,a={document:{events:{
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
rotatePage:M,
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
rotatePages:E,
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
getPageReference:w}};if(e.__exposedApi=a.document,!i)return null;var g={changes:[],mapping:null,count:0,inserted:0,info:{count:0,dpi:96,size:{width:0,height:0},vector:!1}},f={inserted:"pageinserted",removed:"pageremoved",moved:"pagemoved",changed:"documentchanged",rotated:"pagerotated"};function l(e){g.info=e.info,g.mapping=null,g.changes.length=0,g.count=0,g.inserted=0,g.length=0}o.dispose=function(){h=d=o=null};var p=null;function m(e,t,n){n?null===p?p={name:e,message:t}:p.message+="\r\n"+t:d.trigger({type:"throwerror",name:e,msg:t})}function v(){null==g.mapping&&function(){var e=Math.max(g.info.count,0);g.mapping=new Array(e);for(var t=0;t<e;++t)g.mapping[t]=_(t)}()}function s(e,t){v(),g.mapping[e]&&(g.mapping[e].viewerstate[t]||(g.mapping[e].viewerstate[t]={size:null,fitmultiplier:null}))}function _(e){return{index:e,viewerstate:{},pageref:null,angle:0,text:null}}function c(e){return v(),0<=e&&e<g.mapping.length?g.mapping[e].angle:0}function b(e,t,n){var o=t;e&&e!==i.config.documenturl&&(o.pageref={uri:e,index:t.index,mapsto:g.info.count+g.inserted}),g.count++,g.inserted++,g.mapping.splice(n,0,o)}function u(e){return g.count--,g.mapping.splice(e,1)[0]}function y(){}function x(){}function w(e){var t,n=(t=e,v(),0<=t&&t<g.mapping.length?null!==g.mapping[t].pageref?g.mapping[t].pageref:g.mapping[t].index:null);if(null!==n){if("object"==typeof n)return{uri:n.uri,index:n.index};if(Ne(n))return{uri:i.config.documenturl,index:n}}return n}function z(e,t,n,o){Array.isArray(t)?m("IncorrectIndex","Source index can not be an array."):P(e,[t],n,o)}function P(e,t,n,o){var i,a;if(v(),"string"==typeof e&&0<e.trim().length)p=null,i=A(t,Number.MAX_VALUE,!1,!0),a=!0,null!==p&&("IncorrectNumbers"===p.name?m("IncorrectIndices","When this methods has set srcUri, then srcIndices should be an array of numbers representing page indices from an external document. Please check your input parameters and try again.\r\n\tInner error: "+p.message):m(p.name,p.message));else{if(null!=e)return void m("IncorrectUri",'Uri has invalid value "'+e+'". It must be an uri to the source document or not set.');a=!1,i=function(e){var t=[],n=null,o=null;if(!Array.isArray(e))return m("IncorrectPageReferences","Objects "+e+" are not an array."),n;if(function(e){var t=this,n=[];return!!Array.isArray(e)&&(e.forEach(function(e){Ce(this,t),null===Je(e)&&n.push(e)}.bind(this)),0===n.length)}(e)){o=new Array(e.length);for(var i=0;i<e.length;i++)o[i]=w(e[i])}for(var a=0;a<e.length;a++){var r=null!==o?o[a]:e[a];if("object"==typeof r&&null!==r&&"string"==typeof r.uri&&0!==r.uri.trim().length){var l=A([r.index],Number.MAX_VALUE);null!==l?r.index=l[0]:t.push(r)}else t.push(r)}return 1<t.length?m("IncorrectPageReferences",'Objects "'+t.join('", "')+'" are not correct page references.'):0<t.length?m("IncorrectPageReferences",'Object "'+t[0]+'" is not a correct page reference.'):n=null!==o?o:e,n}(t)}var r=S(n,!1);if(null!==i&&null!==r){h._state.batchoperation++;for(var l=0;l<i.length;l++){var s=a?e:i[l].uri,c=a?i[l]:i[l].index;l===i.length-1&&h._state.batchoperation--;var u=_(c);b(s,u,r),h._controllers.annotations&&h._controllers.annotations.insertLayer(null,null,r),h._controllers.forms&&h._controllers.forms.insertForm(null,null,r),g.changes.push({type:"insertpage",uri:s,src:u.index,dest:r}),d.trigger({type:f.inserted,srcuri:s,srcindex:c,destindex:r}),r++}"function"==typeof o&&o(),d.trigger(f.changed)}}function D(e,t){T([e],t)}function T(e,t){var n=this;v();var o=F(e,!0);null!==o&&(h._state.batchoperation++,o.sort(function(e,t){return Ce(this,n),t-e}.bind(this)).forEach(function(e,t){Ce(this,n),t===o.length-1&&h._state.batchoperation--,u(e),h._controllers.annotations&&h._controllers.annotations.removeLayer(e),h._controllers.forms&&h._controllers.forms.removeForm(e),g.changes.push({type:"removepage",index:e}),d.trigger({type:f.removed,index:e})}.bind(this)),"function"==typeof t&&t(),d.trigger(f.changed))}function k(e,t,n){C([e],t,n)}function C(e,t,n){v();var r=F(e,!0),l=S(t,!0);if(null!==r&&null!==l){var s=l,c=r[0]>l?1:-1;h._state.batchoperation++;for(var o=function(e){var n=this,o=e,i=r[o],t=0,a=0;t=i<l?-r.filter(function(e,t){return Ce(this,n),t<o&&e<i&&e<l}.bind(this)).length:l<i?r.filter(function(e,t){return Ce(this,n),t<o&&i<e}.bind(this)).length:c<0?-r.filter(function(e,t){return Ce(this,n),t<o&&e<i&&e<l}.bind(this)).length:r.filter(function(e,t){return Ce(this,n),t<o&&i<e}.bind(this)).length,0<e&&(t<0||i<l)&&(a=-1),s+=a,e===r.length-1&&h._state.batchoperation--,b(null,u(i+t),s),h._controllers.annotations&&h._controllers.annotations.moveLayer(i+t,s),h._controllers.forms&&h._controllers.forms.moveForm(i+t,s),g.changes.push({type:"movepage",src:i+t,dest:s}),d.trigger({type:f.moved,shiftedsrcindex:i+t,srcindex:i,destindex:s}),s++},i=0;i<r.length;i++)o(i);"function"==typeof n&&n(),d.trigger(f.changed)}}function M(e,t,n){Array.isArray(t)?m("rotatePage","angle "+t+" is array."):E([e],t,n)}function E(e,t,n){var i=this;v();var a=F(e),o="number"==typeof t||"string"==typeof t,r=function(e,t){var n=I(t?[e]:e);if(n)for(var o=0;o<n.length;o++){if(n[o]%90)return m("rotatePages","Angle must be a multiple of 90 degrees."),null;n[o]=n[o]%360}return n}(t,o);null!==a&&null!==r&&(o||a.length===r.length?(h._state.batchoperation++,a.forEach(function(e,t){Ce(this,i);var n=1<r.length?r[t]:r[0];t===a.length-1&&h._state.batchoperation--;var o=function(e,t){g.mapping[e].angle=t;for(var n=null,o=0;o<h._pages.length;++o){var i=h._pages[o];if(i._index===e){n=i;break}}return n&&n._img&&(h.startDomManipulation(),h.adjustVisiblePages(!0,h.endDomManipulation)),n}(e,n);g.changes.push({type:"rotatepage",index:e,angle:n}),d.trigger({type:f.rotated,index:e,page:o,angle:n})}.bind(this)),"function"==typeof n&&n()):m("rotatePages","Indices array and angles array have different lengths."))}function S(e,t){var n=A([e],g.mapping.length+(t?0:1));return n?n[0]:n}function F(e,t){return A(e,g.mapping.length,t)}function A(e,i,a,t){var r=this,l=[],s=[],n=null,o="IncorrectIndices";return Array.isArray(e)?((e=I(e,t))&&e.forEach(function(t,e,n){var o=this;Ce(this,r),(t<0||i<=t)&&l.push(t),a&&1<n.filter(function(e){return Ce(this,o),e===t}.bind(this)).length&&-1===s.indexOf(t)&&s.push(t)}.bind(this)),1<l.length?m(o,"Page indices "+l.join(", ")+" are outside of the document.",t):0<l.length?m(o,"Page index "+l[0]+" is outside of the document.",t):1<s.length?m(o,"Page indices "+s.join(", ")+" are included more than once.",t):0<s.length?m(o,"Page index "+s[0]+" is included more than once.",t):n=e):m(o,"Object "+e+" is not an array.",t),n}function I(e,t){var n=this,o=[],i=[];return Array.isArray(e)?(e.forEach(function(e){Ce(this,n);var t=Je(e);null===t?o.push(e):i.push(t)}.bind(this)),1<o.length?(m("IncorrectNumbers",'Objects "'+o.join('", "')+'" are not numbers.',t),i=null):0<o.length&&(m("IncorrectNumbers",'Object "'+o[0]+'" is not a number.',t),i=null)):m("IncorrectNumbers","Object "+e+" is not an array.",t),i}o.__exposedApi=a.document,o.getPageDefinition=function(e,t){if(t=t||r,v(),0<=e&&e<g.mapping.length&&g.mapping[e]){var n=g.mapping[e],o=null,i=null;if(-1===n)return null;null!=n.pageref?(o=n.pageref,e=o.index,i=o.uri):e=n.index;var a=n.viewerstate[t]&&0<=n.viewerstate[t].cacheIndex?n.viewerstate[t].cacheIndex:-1;return{index:e,ref:o,cacheIndex:a,uri:i}}return null},o.setPageCacheIndex=function(e,t){s(e,r),g.mapping[e]&&g.mapping[e].viewerstate&&(g.mapping[e].viewerstate[r].cacheIndex=t)},o.insertPage=z,o.removePage=D,o.movePage=k,o.rotatePage=M,o.insertPages=P,o.removePages=T,o.movePages=C,o.rotatePages=E,o.getPageFitMultiplier=function(e,t){return s(e,t=t||r),0<=e&&e<g.mapping.length&&g.mapping[e].viewerstate[t].fitmultiplier?g.mapping[e].viewerstate[t].fitmultiplier:1},o.setPageFitMultiplier=function(e,t,n){s(e,n=n||r),0<=e&&e<g.mapping.length&&(g.mapping[e].viewerstate[n].fitmultiplier=t)},o.getPageRotation=c,o.getPageSize=function(e,t){if(t=t||r,v(),s(e,t),0<=e&&e<g.mapping.length){var n=g.mapping[e].viewerstate[t].size;if(!n){var o=g.info;if(o.pagesizes&&o.pagesizes[e])return o.pagesizes[e]}return n}},o.setPageSize=function(e,t,n){n=n||r,v(),s(e,n),0<=e&&e<g.mapping.length&&(g.mapping[e].viewerstate[n].size=t)},o.updatePageText=function(e,t){v(),0<=e&&e<g.mapping.length&&(g.mapping[e].text=t)},o.getPageText=function(e){return 0<=e&&e<g.mapping.length?g.mapping[e].text:null},o.initDocumentText=function(e){if(e&&e.pages){v();for(var t=0;t<g.mapping.length;++t)if(t<e.pages.length)if(g.mapping[t].index===t)g.mapping[t].text=e.pages[t];else for(var n=0;n<g.mapping.length;++n)g.mapping[n].index===t&&(g.mapping[n].text=e.pages[t]);else g.mapping[t].text=null}},o.getPageIndexByImageIndex=function(e){if(e<g.info.count){for(var t=0;t<g.mapping.length;t++)if(g.mapping[t].index===e)return t}else for(var n=0;n<g.mapping.length;n++)if(g.mapping[n].pageref&&g.mapping[n].pageref.mapsto===e)return n;return-1},o.canBeTiled=function(e,t){if(null===g.mapping[t].pageref){var n=g.info,o=g.mapping[t].index;if(n.pagesizes&&(n.pagesizes[o].width>e||n.pagesizes[o].height>e))return!0}else{var i=g.mapping[t].viewerstate[r].size;if(i&&(i.width>e||i.height>e))return!0}return!1},o.__getDebugInfo=function(){var e={};return en.extend(!0,e,{data:g,changes:g.changes}),e},o.__linkChanges=function(e){e&&(e._changes?g=e._changes:e._changes=g)},o.clear=function(e){g.clear(),"function"==typeof e&&e(),d.trigger(f.changed)},o.getPageCount=function(){return g.info.count+g.count},o.stringifyChanges=function(){var e=[],t={type:"docinfo",pagescount:g.info.count};for(var n in e.push(t),g.changes)if(g.changes.hasOwnProperty(n)&&(d.config.persistrotation||"rotatepage"!==g.changes[n].type)){var o={};for(var i in g.changes[n])g.changes[n].hasOwnProperty(i)&&(o[i]=g.changes[n][i]);e.push(o)}return JSON.stringify({changes:e})},"Atalasoft.Controls.WebDocumentViewer"===d.typeOf&&en.extend(d,a),d.bind({pagerecycled:x,pageshown:y,documentinfochanged:l})};function We(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * WebDocumentViewer Text Layer operations API.
 * @class
 * @inner
 * @name TextController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */var Tn=function e(t,n,o){var i=this,k=t,C=n,M=(n?n._internalEvents:null)||en({}),a={
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
getSelected:N,
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
selectPageText:function(e,a,r,l,s,t){var c=this,u=en.Deferred(),n=Array.prototype.slice.call(arguments,1);return 2<n.length&&"function"==typeof n[n.length-2]?(t=n.pop(),s=n.pop()):1<n.length&&"function"==typeof n[n.length-1]&&(s=n.pop()),a=n[0],r=n[1],l=n[2],pe(e).done(function(e,t){var n=this;We(this,c);var o=t.bounds;void 0===a||!t.regions[a]||void 0!==r&&t.regions[a].lines[r]?(a=t.regions[a],void 0!==r&&a.lines[r]&&(o=ee((r=a.lines[r]).bounds,a),void 0!==l&&r.words[l]&&(o=ee(r.words[l].bounds,a))),G(e,Le(o.x,o.y),e,Le(o.right,o.bottom))):X(e,a);var i=function(){We(this,n),k.config.mousetool.text.hookcopy&&C._dom.viewport.focus(),u.resolve(),s&&"function"==typeof s&&s()}.bind(this);C.isPageInView(e)?i():k.showPage(e,i)}.bind(this)).fail(function(){We(this,c),u.reject(),t&&"function"==typeof t&&t()}.bind(this)),u.promise()},
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
getPageText:function(i,a,e){var r=this,l=en.Deferred();return pe(i).done(function(){We(this,r);var e="",t=F(i);if(t)for(var n=0;n<t.regions.length;n++){var o=U(t.regions[n]);o&&(e+=o)}l.resolve(e),a&&"function"==typeof a&&a(e)}.bind(this)).fail(function(){We(this,r),l.reject(),e&&"function"==typeof e&&e()}.bind(this)),l.promise()},
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
reloadPageText:function(e,t,n){var o=this;return v(e),pe(e).done(function(){We(this,o),t&&"function"==typeof t&&t(e)}.bind(this)).fail(function(){We(this,o),n&&"function"==typeof n&&n(e)}.bind(this))},
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
searchOnPages:ce}};if(e.__exposedApi=a.text,!t)return null;var r=.1,l=null,E=n._pages,S={activepage:null,origin:Le(0,0),originPage:-1,rectangular:!1,selectionCache:[],searchQuery:null},u={};function F(e){return C._controllers.document.getPageText(e)}
/**
   * jQuery trigger shortcut
   * @returns object, WebDocumentViewer
   */
function s(e){return k.trigger(e),i}function f(e,t){k.trigger({type:"throwerror",name:e,msg:t})}function c(){}function A(e,t){if(t._text){g(t);var n=F(e);if(n){var o=_e(t,n);if(o&&n.searchResult&&x(o,n),o&&n.selection)for(var i=n.selection,a=0;a<i.regions.length;a++)for(var r=0;r<i.regions[a].lines.length;r++)for(var l=i.regions[a].lines[r],s=0;l.words&&s<l.words.length;s++){var c=l.words[s];te(o,c.bounds.x,c.bounds.y,c.bounds.width,c.bounds.height,u.selection)}}}}function d(e){g(e.page)}function h(e){A(e.index,e.page)}function g(e){e._text&&y(e._index)}function p(e){e.page._text.attr("width",e.width).attr("height",e.height),e.page._text.width(e.width),e.page._text.height(e.height),A(e.index,e.page)}function m(){if(S.searchQuery&&S.searchQuery.iterator){S.searchQuery.iterator.dispose(),S.searchQuery=null,de();for(var e=0;e<E.length;e++)A(E[e]._index,E[e])}}function v(e){if(null==e)for(var t=0;t<C._controllers.document.getPageCount();t++)v(t);F(e)&&(C._controllers.document.updatePageText(e,null),S.selectionCache[e]&&(S.selectionCache[e]=null,C.findPageFromIndex(e)&&y(e,null)))}function _(){if(S.searchQuery=null,S.selectionCache=[],C._controllers.document.initDocumentText({pages:[]}),E)for(var e=0;e<E.length;e++)g(E[e])}function b(){for(var e=0;e<C._controllers.document.getPageCount();e++){var t=F(e);t&&t.selection&&(y(e,t,!0),t.selection=null)}S.selectionCache.length=0}
/** Clears the text selection */function y(e,t,n){for(var o=0;o<E.length;o++)if(!isFinite(e)||E[o]._index===e){t=isFinite(e)&&o===e?t:F(E[o]._index);var i=_e(E[o],t);if(i){var a=C.getSourcePageSize(E[o]._index,t?t.rotation:0);i.clearRect(0,0,a.width,a.height),n&&x(i,t)}}}function x(e,t){if(t&&t.searchResult)for(var n=0;n<t.searchResult.length;n++){var o=t.searchResult[n].bounds;te(e,o.x,o.y,o.width,o.height,u.highlight)}}function w(e){var t=e.eventData,n=t.page,o=t.point;b();var i=F(n);i&&(i.selection=le(t.point,t.point),t.interval&&S.origin&&0<=S.originPage?(G(S.originPage,S.origin,n,o),t.complete=!0):(t.line||t.word)&&Math.abs(t.point.x-S.origin.x)<10&&Math.abs(t.point.y-S.origin.y)<10?(function(e,t,n,o){var i=F(e);if(i&&(n||o))for(var a=0;a<i.regions.length;a++){var r=i.regions[a];if(Ee(t,r.bounds))for(var l=0;l<r.lines.length;l++){var s=r.lines[l];if(Ee(t,s.bounds)){var c={region:a,line:l,bounds:s.bounds};if(o){for(var u=0;u<s.words.length;u++)if(Ee(t,s.words[u].bounds))return c.word=u,c.bounds=s.words[u].bounds,Z(e,c)}else if(n)return Z(e,c)}}}}(n,o,t.line,t.word),t.complete=!0):(S.origin=t.rectangular?t.viewerPoint:t.point,S.originPage=n,S.rectangular=t.rectangular)),t.handled=!0}en.extend(u,o||{}),i.dispose=function(){k.unbind({pagerecycled:d,pageshown:h,zoomchanged:c,documentchanged:m}),M.off({textselectstart:w,textselectmove:R,textselectend:B}),l=k=i=null,S.searchQuery=null,S.selectionCache=[],S.activepage=null},i.removeTextLayer=function(e){return e instanceof en&&(e._text&&(e._text._page=null,e._text=null),!0)},i.addTextLayer=function(t){return t instanceof en&&(t._text=C.createDOM("canvas",t),t._text.css({width:"100%",height:"100%",position:"absolute",zIndex:0}),t._text.attr("width",t.width()).attr("height",t.height()),(t._text._page=t).on(nn.Features.Touch?"touchstart":"mousedown",function(){var e;e=t,S.activepage=e}),t.on({pageresize:function(e){e.page=t,p(e)},pagezoom:function(e){e.page=t,p(e)}}),!0)},i.showLayer=A,i.__exposedApi=a.text,i.__getDebugInfo=function(){var e={};return en.extend(!0,e,{data:S,pages:E,viewport:l}),e},i.__linkText=function(){},i.clear=_,i.setViewPort=function(e){e&&(e instanceof en||(e=en(e)),l=e)},i.search=se,i.clearSelection=b,i.ensurePageTextLoaded=pe;var z,P,D,T,I,O,V,H,L=(z=G,P=k.config.mousetool.text.throttlingtreshold,V=0,H=function(){V=(new Date).getTime(),O=null,I=z.apply(D,T),O||(D=T=null)},function(){var e=(new Date).getTime();V||(V=e-P);var t=P-(e-V);return D=this,T=arguments,t<=0||P<t?(O&&(clearTimeout(O),O=null),V=e,I=z.apply(D,T),O||(D=T=null)):O||(O=setTimeout(H,t)),I});function R(e){var t=e.eventData,n=t.page,o=S.rectangular?t.viewerPoint:t.point,i=F(n);if(i)if(i.loading)t.cursor=Be.Wait;else{if(0===i.regions.length)return!(t.handled=!1);var a=C.getPageRotation(n)+i.rotation;if(i.rotatedRegions)for(var r=0;r<i.rotatedRegions.length;r++)if(Ee(t.point,i.rotatedRegions[r].bounds)){a+=i.rotatedRegions[r].rotation;break}t.cursor=a%180==0?Be.Text:Be.VerticalText,t.selecting&&L(S.originPage,en.extend({},S.origin),n,o,S.rectangular)}return!(t.handled=!0)}function B(e){var t=e?e.eventData:{},n=!1;for(var o in S.selectionCache)if(S.selectionCache.hasOwnProperty(o)&&S.selectionCache[o].selection&&S.selectionCache[o].selection.regions.length){n=!0;break}n&&s({type:"textselected"}),S.rectangular=!1,t.handled=!0}function j(){q()}function q(){var e=C.createDiv();if(e[0]){var t=new Re("wdv-dummy-selection-trigger",{text:function(){return N()}});t.on("success",function(){t.destroy()}),t.on("error",function(){t.destroy(),f("TextCopyError")}),t.onClick({currentTarget:e[0]})}}function N(){for(var e="",t=0;t<S.selectionCache.length;t++)if(S.selectionCache[t]){var n=S.selectionCache[t].selection;if(n&&n.regions&&0<n.regions.length)for(var o=0;o<n.regions.length;o++){var i=U(n.regions[o]);i&&(e+=i)}}return e}function W(e){for(var t="",n=0;e.words&&n<e.words.length;n++)if(Oe(e.words[n],1<=n?e.words[n-1]:null)&&(t+=" "),e.words[n].text)t+=e.words[n].text;else if(e.words[n].glyphs&&e.words[n].glyphs.length)for(var o=0;o<e.words[n].glyphs.length;o++)t+=e.words[n].glyphs[o].text;return t}function U(e){for(var t="",n=0;n<e.lines.length;n++){var o=W(e.lines[n]);o&&(t+=o+"\n")}return t}function Z(e,t){var n=F(e);if(n&&t&&n.regions[t.region]){b();var o=n.regions[t.region],i=_e(ve(e),n);if(Ne(t.line)&&o.lines[t.line]){for(var a=o.lines[t.line],r={words:[]},l={lines:[r],bounds:en.extend({},o.bounds)},s=Ne(t.word)&&a.words[t.word]?t.word:0,c=Ne(t.endWord)&&a.words[t.endWord]?t.endWord:Ne(t.word)?s:a.words.length-1,u=s;u<=c;++u){var d=a.words[u],h=!!d.glyphs.length;h&&u===s&&Ne(t.glyph)?d=K(d,t.glyph,s===c&&Ne(t.endGlyph)?t.endGlyph:d.glyphs.length-1):h&&u===c&&Ne(t.endGlyph)&&(d=K(d,0,t.endGlyph)),r.words.push(en.extend({},d)),i&&te(i,d.bounds.x,d.bounds.y,d.bounds.width,d.bounds.height)}n.selection=le(Le(t.bounds.x,t.bounds.y),Le(t.bounds.right,t.bounds.bottom)),re(n.selection.regions,l),S.selectionCache[e]=n}else X(e,t.region)}}function X(e,t){b();var n=F(e);if(n&&n.regions[t]){var o=n.regions[t],i=_e(ve(e),n);n.selection=le(Le(o.bounds.x,o.bounds.y),Le(o.bounds.right,o.bounds.bottom),!1);var a=Q(i,o,n.selection.origin,n.selection.point);a&&0<a.lines.length&&(re(n.selection.regions,a),S.selectionCache[e]=n)}}function G(e,t,n,o,i){var a=Math.min(e,n),r=Math.max(e,n);for(var l in S.selectionCache)if(S.selectionCache.hasOwnProperty(l)){var s=parseInt(l,10);(s<a||r<s)&&(y(s,S.selectionCache[s],!0),S.selectionCache[s].selection=null)}for(var c=i?Math.min(t.x,o.x):0,u=Le(c,0),d=a;d<=r;d++){var h=C.getSourcePageSize(d);i&&((h=en.extend({},C.getPageSize(d))).width*=C.getPageScale(d),h.height*=C.getPageScale(d));var g=i?Math.max(t.x,o.x):h.width,f=Le(g,h.height),p=void 0,m=void 0;a===r?(p=t,m=o):d===e?(p=t,m=d===a?f:u):d===r||d===a?(m=o,p=d===a?f:u):(p=u,m=f);var v=ve(d);i?$(d,Le(c,p.y),Le(g,m.y),v):Y(d,p,m,v)}}function Y(e,t,n,o){var i,a,r,l=F(e);if(l&&ne(l,t,n,!1)&&0<l.regions.length){o&&o._text&&y(e,l,!0),l.selection=le(t,n,!1);var s=function(e,t,n){for(var o=Le(Math.min(t.x,n.x),Math.min(t.y,n.y)),i=Le(Math.max(t.x,n.x),Math.max(t.y,n.y)),a=De({x:o.x,y:o.y,width:i.x-o.x,height:i.y-o.y}),r=De({x:0,y:o.y,width:e.bounds.width,height:i.y-o.y}),l=t,s=n,c=null,u=null,d=null,h=null,g=0;g<e.regions.length&&(!c||!u);g++){var f=e.regions[g].bounds;Se(r,f)&&(d=!d||ae(e.regions[g],d)?e.regions[g]:d),Se(a,f)&&(c=!c&&Ee(l,e.regions[g].bounds)?e.regions[g]:c,u=!u&&Ee(s,e.regions[g].bounds)?e.regions[g]:u,h=!h||oe(e.regions[g],h)?e.regions[g]:h)}if(c&&u){if(ae(u,c)){var p=u;u=c,c=p,l=n,s=t}}else if(d&&h){var m;c?(m=ie(s),ae(c,m)?(u=h,s=null):(u=c,s=l,c=d,l=null)):u?(m=ie(l),oe(u,m)?(c=d,l=null):(c=u,l=s,u=h,s=null)):(c=d,u=h,l=s=null),l=l||Ve(c),s=s||He(u)}return{start:c,startPoint:l,end:u,endPoint:s}}(l,t,n);if(s&&s.start&&s.end)for(var c=_e(o,l),u=0;u<l.regions.length;u++){var d=l.regions[u],h=null;d===s.start?h=d===s.end?Q(c,d,s.startPoint,s.endPoint):Q(c,d,s.startPoint,He(d)):d===s.end?h=Q(c,d,Ve(d),s.endPoint):(i=d,a=s.start,r=s.end,oe(i,a)&&ae(i,r)&&(h=Q(c,d,Ve(d),He(d)))),h&&h.lines&&0<h.lines.length&&(re(l.selection.regions,h),S.selectionCache[e]=l)}}}function Q(e,t,n,o){var i={lines:[],bounds:en.extend({},t.bounds)},a=F(t.page).bounds;if(0!==t.rotation&&(n=qe(n,a,360-t.rotation),o=qe(o,a,360-t.rotation)),ke(n.y,o.y)){var r=n;n=o,o=r}for(var l=0;l<t.lines.length;l++){var s=t.lines[l],c={words:[]},u=Pe(s,a,t.rotation),d=ke(u.y,n.y)&&Te(u.bottom,o.y),h=!d&&Me(n.y,u.y,u.bottom),g=!d&&Me(o.y,u.y,u.bottom);if(h&&1<l){var f=Pe(t.lines[l-1],a,t.rotation);d=!(h=!Me(n.y,f.y,f.bottom))&&!g}if(g&&l<t.lines.length-1){var p=Pe(t.lines[l+1],a,t.rotation);g=!Me(o.y,p.y,p.bottom),d=!h&&!g}if(d||h||g){for(var m=0;s.words&&m<s.words.length;m++){var v=s.words[m],_=Pe(v,a,t.rotation),b=v.glyphs&&v.glyphs.length,y=d;if(!y){if(h&&g){if(ke(n.x,o.x)){var x=n;n=o,o=x}y=ke(b?_.x:_.right,n.x)&&Te(b?_.right:_.x,o.x)}else h?y=ke(b?_.x:_.right,n.x):g&&(y=Te(b?_.right:_.x,o.x));if(!y&&b){var w=null;if(h&&Me(n.x,_.x,_.right)){var z=g?Math.min(_.right,o.x):_.right;w=J(v,n.x,z)}g&&Me(o.x,_.x,_.right)&&(w=J(v,h?Math.max(_.x,n.x):_.x,o.x)),w&&(v=w,y=!0)}}y&&(c.words.push(en.extend({},v)),e&&te(e,v.bounds.x,v.bounds.y,v.bounds.width,v.bounds.height))}0<c.words.length&&i.lines.push(c)}}return i}function J(e,t,n){for(var o=null,i=null,a=0;a<e.glyphs.length;++a){var r=e.glyphs[a].normalizedBounds;if(null===o&&ke(r.right,t)&&(o=a),!Te(r.x,n))break;i=a}return null!==o&&null!==i?K(e,o,i):null}function K(e,t,n){var o={glyphs:[],text:"",omitSpace:e.omitSpace};if(0<=t&&t<=n&&e.glyphs[n]){o.glyphs=e.glyphs.slice(t,n+1);var i=e.glyphs[t].bounds,a=e.glyphs[n].bounds,r=Math.min(i.x,a.x),l=Math.min(i.y,a.y),s=Math.max(i.right,a.right),c=Math.max(i.bottom,a.bottom);return o.bounds={x:r,y:l,width:Math.abs(s-r),height:Math.abs(c-l)},De(o.bounds),o}return null}function $(e,t,n,o){var i=F(e);if(i&&ne(i,t,n,!0)&&0<i.regions.length){o&&o._text&&y(e,i,!0);var a=Ie(e,i,t),r=Ie(e,i,n);i.selection=le(t,n,!0);var l=De({x:Math.min(a.x,r.x),y:Math.min(a.y,r.y),width:Math.abs(r.x-a.x),height:Math.abs(r.y-a.y)});if(l=Ae(l,i.bounds)){for(var s,c=0;c<i.regions.length;c++)if(Se(l,i.regions[c].bounds)){s=s||_e(o,i);for(var u={lines:[],bounds:en.extend({},i.regions[c].bounds)},d=0;d<i.regions[c].lines.length;d++){for(var h=i.regions[c].lines[d],g={words:[]},f=0;h.words&&f<h.words.length;f++){var p=h.words[f];if(Se(l,p.bounds)){var m=De(je(l,i.bounds,(360-i.regions[c].rotation)%360)),v=p.normalizedBounds,_=ke(v.x,m.x),b=Te(v.right,m.right);_&&b||(p=J(p,Math.max(v.x,m.x),Math.min(v.right,m.right))),p&&(g.words.push(en.extend({},p)),s&&te(s,p.bounds.x,p.bounds.y,p.bounds.width,p.bounds.height))}}0<g.words.length&&u.lines.push(g)}u.lines.length&&re(i.selection.regions,u)}i.selection.regions.length&&(i.selection.bounds=l,S.selectionCache[e]=i)}}}function ee(e,t){if(t){if(t.rotation%180!=0)return De({x:(e.right+e.x)/2,y:e.y,width:0,height:e.height});var n=(e.bottom+e.y)/2;return De({x:e.x,y:n,width:e.width,height:0})}return null}function te(e,t,n,o,i,a){e&&(e.clearRect(t,n,o,i),a=a||u.selection,e.fillStyle=a.color,e.globalAlpha=a.alpha,e.fillRect(t,n,o,i))}function ne(e,t,n,o){return o=!!o,!e.selection||!Ce(e.selection.origin,t)||!Ce(e.selection.point,n)||o!==e.selection.rectangular}function oe(e,t){if(ke(e.bounds.bottom,t.bounds.y)){if(Fe(e.bounds,t.bounds))return e.bounds.x>t.bounds.x;var n=Ae(e.bounds,t.bounds);if(n)return 1<=n.width/n.height?ke(e.bounds.y,t.bounds.y):ke(e.bounds.x,t.bounds.x);if(ke(e.bounds.y,t.bounds.bottom))return!0;if(Te(e.bounds.bottom,t.bounds.y))return!1;if(ke(e.bounds.x,t.bounds.x))return!0}return!1}function ie(e){return{lines:[],bounds:De({x:e.x,y:e.y,width:0,height:0})}}function ae(e,t){return!oe(e,t)}function re(e,t){for(var n=0;n<e.length&&!ae(t,e[n]);n++);Array.prototype.splice.call(e,n,0,t)}function le(e,t,n){return{origin:e,point:t,rectangular:!!n,regions:[]}}function se(e,t,n){return"function"==typeof t&&(n=t,t=0),ce(e,0,C._controllers.document.getPageCount()-1,t,n)}function ce(e,t,n,o,i){var a=this,r=C._controllers.document.getPageCount(),l=!1,s=function(e,t){if(We(this,a),l)return null;var n=!1,o=e;return"string"==typeof e&&(o=Je(e),n=!0),null===o&&!n||void 0===o||"number"==typeof o?o:(f("searchOnPages",t+" page '"+JSON.stringify(e)+"' is not a correct page index."),l=!0,null)}.bind(this),c=s(t,"Start"),u=s(n,"End"),d=s(o,"Active");if(l)return null;if(mn(c)||(c=0),mn(u)||(u=r-1),mn(d)||(d=c),c<0||r<=c)return f("searchOnPages","Start page "+c+" is out of range."),null;if(u<0||r<=u)return f("searchOnPages","End page "+u+" is out of range."),null;if(u<c)return f("searchOnPages","Start page is greater than end page."),null;if(d<c||u<d)return f("searchOnPages","Active page "+d+" is out of range."),null;if(null!=e&&"string"!=typeof e)return f("searchOnPages","Text to search value "+JSON.stringify(e)+" is not a valid text to search."),null;if(null!=i&&"function"!=typeof i)return f("searchOnPages","Callback value "+JSON.stringify(i)+" is not a valid callback function."),null;if(de(),e&&2<e.length&&i){var h={sourceQuery:e,text:e.toLocaleLowerCase(),start:c,end:u,active:d},g=new ue(S.searchQuery=h,i);return S.searchQuery.iterator=g}return E.forEach(function(e){We(this,a),e._index>=c&&e._index<=u&&A(e._index,e)}.bind(this)),null}
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
   */function ue(c,o){var u,d=3,h=c.start,g=c.end,f=c.active,p=-1,m=-1,v=0,_=this,b=[],t=[],y=T(-1);function i(e){t.push({action:x,args:[!0,D(e)]}),n()}
/**
     * Advances current item to the previous query match or adds operation to the queue in case if next match is currently awaited.
     * @param {TextSearchCallback} callback - Function that that is called when previous match is found.
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#prev
     */function n(){if(!u&&t.length){var e=t.shift();e&&"function"==typeof e.action&&e.action.apply(_,e.args)}}function x(n,o){if(w()){var e=n?1:-1,t=F(p);if(t&&t.searchResult&&t.searchResult.length&&(n?-1<=m&&m<v-1:0<m&&m<=v)){m+=e;var i=t.searchResult[m];y=T(p,i),Z(p,i);var a=t?t.rotation:0,r=C.getViewerTransform(p,a),l=ee(i.bounds,t.regions[i.region]),s=Le(r.x(l.x,l.y),r.y(l.x,l.y));C.showPagePoint(p,s,ln.Center,function(){o(_,T(p,i))})}else u=u||z(c.text,0<=p?p+e:f,n).done(function(e,t){w()?0<=e&&t&&(p=e,v=t.searchResult.length,m=n?-1:v,x(n,o)):o(_,null)}).fail(function(){o(_,null)})}else o(_,null)}
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
     */function z(t,n,o,i,a){var r;return i=i||en.Deferred(),w()&&setTimeout(function(){for(;h<=n&&n<=g;n+=o?1:-1){var e=F(n);if(e&&!e.loading){if(e.searchResult=P(e,c.text),0<e.searchResult.length)return void i.resolve(n,e)}else{if(e&&e.loading&&e.promise)return void l(t,n,o,i,a,e);if(!e){if(b[n])continue;return r=!0,void s(t,n,o,i)}}}if(_.wrap&&!r&&!a)return n<h&&!o?n=g:g<n&&o&&(n=h),void z(t,n,o,i,!0);i.reject()},0),i.promise()}function l(e,t,n,o,i,a){a.promise.then(function(){z(e,t,n,o,i)})}function s(i,e,a,r){var t,n,o,l,s,c=function(e,t){for(var n=e,o=null,i=[];h<=n&&n<=g&&i.length<=20;n+=t?1:-1){var a=null,r=C._controllers.document.getPageDefinition(n),l=r.index;if(r.uri&&(a=r.uri),o!==a&&n!==e)break;o=a;var s={i:l};l!==n&&(s.di=n),i.push(s);var c=F(n);if(c&&!c.loading)break}return{textUrl:o||k.config.documenturl,pages:i}}(e,a);c.pages.length?(t=i,n=c,o=d,l=en.Deferred(),s={type:"pagetextsearch",serverurl:k.config.serverurl,query:"?pagetextsearch=",method:"POST",data:{atala_query:t,atala_docurl:n.textUrl,atala_maxcount:o||d,atala_pages:JSON.stringify(n.pages)},cancel:!1},C.makeHandlerRequest(s,function(e){if(w()){var t=-1;if(e&&e.searchResults&&e.searchResults.length)for(var n=0;n<e.searchResults.length;n++){var o=e.searchResults[n],i=o.hasOwnProperty("di")?o.di:o.i,a=F(i);!a&&o.text&&(C._controllers.document.updatePageText(i,o.text),me({pageText:o.text,customData:e.customData},o.text,i)),o.count<=0&&t<0?a?a.searchResult=[]:b[i]=[]:t<0&&0<o.count&&(t=i)}l.resolve(0<=t?t:null)}else l.reject()},function(){l.reject()}),l.promise()).done(function(e){if(null===e)if(w()){var t=c.pages[c.pages.length-1],n=t.hasOwnProperty("di")?t.di:t.i;z(i,n,a,r)}else r.reject();else{var o=F(e);r.resolve(e,o)}}).fail(function(){r.reject()}):r.reject()}function P(e,t){var n=t.length,o=[];if(e.searchResult)o=e.searchResult;else for(var i=0;i<e.regions.length;i++)for(var a=0;a<e.regions[i].lines.length;a++){for(var r=e.regions[i].lines[a],l=0,s=[],c="",u=0;u<r.words.length;u++){var d=r.words[u],h=d.glyphs&&d.glyphs.length;Oe(d,1<=u?r.words[u-1]:null)&&(c+=" ",++l);for(var g=0;g<(h?d.glyphs.length:d.text.length);g++)s[l++]={bounds:h?d.glyphs[g].bounds:d.bounds,region:i,line:a,word:u,glyph:g},c+=(h?d.glyphs[g].text:d.text[g]).toLocaleLowerCase()}var f=0;do{if(0<=(f=c.indexOf(t,f))){for(var p=s[f],m=Math.min(f+n-1,s.length);!s[m]&&f<m;)--m;var v=s[m],_=De({x:p.bounds.x,y:p.bounds.y,width:Math.abs(v.bounds.right-p.bounds.x),height:Math.abs(v.bounds.bottom-p.bounds.y)});o.push({bounds:_,region:p.region,line:p.line,word:p.word,glyph:p.glyph,endWord:v.word,endGlyph:v.glyph})}}while(0<=f++)}return o}function a(){M.off("pagetextloaded",e),k.unbind({pageshown:r}),b=[]}function e(e){var t=e.text,n=e.index;if(w()&&t&&h<=n&&n<=g&&(t.searchResult=P(t,c.text),b[n]&&Array.prototype.splice.call(b,n,1),t.searchResult.length)){var o=C.findPageFromIndex(n);o&&A(n,o)}}function r(e){if(w()&&e.page&&e.index>=h&&e.index<=g){var t=F(e.index);!t||t.loading||t.searchResult||setTimeout(function(){t.searchResult=P(t,c.text),A(e.index,e.page)},0)}}function D(e){return function(){u=null,e&&e.apply(this,arguments),n()}}function T(e,t){return{page:e,region:t?t.region:0,line:t?t.line:0,word:t?t.word:0}}
/**
       * Indicates whether search should be wrapped around when first or last document page is match is reached.
       * @name Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#wrap
       * @type {boolean}
       */
_.wrap=!0,M.on("pagetextloaded",e),k.bind({pageshown:r}),setTimeout(function(){for(var e=0;e<E.length;e++){var t=E[e]._index;if(!(t<h||g<t)){var n=F(t);n&&!n.loading&&(n.searchResult=P(n,c.text),n.searchResult.length&&(A(t,E[e]),t===f&&(v=n.searchResult.length,p=f)))}}i(o)},0),
/**
     * Advances current item to the next query match or adds operation to the queue in case if next match is currently awaited.
     * @param {TextSearchCallback} callback - function that that is called when next match is found.
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#next
     */
_.next=i,_.prev=function(e){t.push({action:x,args:[!1,D(e)]}),n()},_.getQuery=function(){return c.sourceQuery}
/**
     * Indicates whether this iterator corresponds to the active search.
     *
     * If `false`, next/prev methods are always returning `null` match.
     * @returns {boolean}
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isValid
     */,_.isValid=w,_.isSearching=function(){return w()&&(u||0<t.length)}
/**
     * Returns the formatted text for the whole line containing current match.
     * @returns {string}
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getCurrentLineText
     */,_.getCurrentLineText=function(){if(w()&&y&&0<=y.page){var e=F(y.page);if(e&&e.regions[y.region]&&e.regions[y.region].lines[y.line])return W(e.regions[y.region].lines[y.line])}return null},
/**
     * Disposes the current iterator. Calling this method is optional. Abandoned iterators will be disposed automatically.
     * @ignore
     *
     * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#dispose
     */
_.dispose=a}function de(){for(var e=[],t=0;t<C._controllers.document.getPageCount();t++){var n=F(t);n&&n.searchResult&&(n.searchResult.length&&(e[t]=!0),n.searchResult=null)}for(var o=0;o<E.length;++o)e[o]&&A(o,E[o]);S.searchQuery=null}function he(e,t){return{type:"textdata",serverurl:e,query:"?atalatextdata=",method:"GET",data:{atala_docurl:t},cancel:!1,info:{ocr:{},error:void 0}}}function ge(e,t){function n(e){fe(e),"function"==typeof t&&t.call()}_(),C.makeHandlerRequest(e,n,n)}function fe(e){if(e){if(e.error&&(f("TextLoadError",e.error),_()),e.text.pages)for(var t=0;t<e.text.pages.length;++t)be(e.text.pages[t],t);C._controllers.document.initDocumentText(e.text),s({type:"textloaded"})}}function pe(a){var r=en.Deferred(),l=F(a),s=C._controllers.document.getPageDefinition(a);if(!l&&s){l={loading:!0,regions:[],promise:r},C._controllers.document.updatePageText(a,l);var c=s.uri||k.config.documenturl,u=k.config.serverurl;setTimeout(function(){var t,n,o,e={type:"pagetextdata",serverurl:u,query:"?atalapagetext=",method:"GET",data:{atala_docurl:c,atala_index:s.index},cancel:!1,info:{page:l,error:void 0}},i=(t=l,n=a,o=r,function(e){me(e,t,n,o)});C.makeHandlerRequest(e,i,i)},0)}else r.resolve(a,l);return r.promise()}function me(e,t,n,o){if(e&&e.pageText)if(t.promise===o&&(t.loading=!1,t.promise=void 0),e.error)f("TextLoadError",e.error),t.regions=[],o&&o.reject&&o.reject(n);else{be(e.pageText,n),t.regions=e.pageText.regions?e.pageText.regions:[],en.extend(t,e.pageText);var i={type:"pagetextloaded",index:n,text:t,customData:e.customData};!function(){M.trigger.apply(M,arguments)}(i),s(i),o&&o.resolve&&o.resolve(n,t)}}function ve(e){for(var t=0;t<E.length;t++)if(E[t]._index===e)return E[t];return null}function _e(e,t){if(e&&e._text){var n=e._text[0];if(n.getContext){var o=n.getContext("2d"),i=t?t.rotation:0,a=C.getViewerTransform(e._index,i);return o.setTransform(a.a,a.b,a.c,a.d,a.e,a.f),o}}return null}function be(e,t){if(e){ze(e),e.regions=e.regions||[],e.rotatedRegions=[],e.rotation=e.rotation||0;for(var n=e.regions.length-1;0<=n;--n)e.regions[n].page=t,ye(e.regions[n],e.bounds)?(e.regions[n].index=n,e.regions[n].rotation&&e.rotatedRegions.push(e.regions[n])):Array.prototype.splice.call(e.regions,n,1);e.regions.sort(function(e,t){return ae(e,t)?-1:1})}}function ye(e,t){if(!ze(e))return!1;e.rotation=e.rotation||0,e.lines=e.lines||[];for(var n=e.lines.length,o=e.lines.length-1;0<=o;--o)xe(e.lines[o],t,e.rotation)||Array.prototype.splice.call(e.lines,o,1);return 0<n&&0===e.lines.length&&f("TextLoadError","Invalid region data received."),!(0<n)||0<e.lines.length}function xe(e,t,n){if(!ze(e,t,n))return!1;e.words=e.words||[];for(var o=e.words.length,i=e.words.length-1;0<=i;--i)we(e.words[i],t,n)||Array.prototype.splice.call(e.words,i,1);return!(0<o)||0<e.words.length}function we(e,t,n){if(!ze(e,t,n))return!1;e.glyphs=e.glyphs||[],e.text=e.text||"",e.os&&(e.omitSpace=e.os,delete e.os);for(var o=e.glyphs.length-1;0<=o;--o)ze(i=e.glyphs[o],t,n)&&i.text||Array.prototype.splice.call(e.glyphs,o,1);var i;return!0}function ze(e,t,n){var o=!1;if(e)if(e.b&&"string"==typeof e.b){var i=e.b.split(";");e.bounds={x:parseFloat(i[0]),y:parseFloat(i[1]),width:parseFloat(i[2]),height:parseFloat(i[3])},delete e.b,o=!0}else e.bounds&&e.bounds.hasOwnProperty("x")&&e.bounds.hasOwnProperty("y")&&e.bounds.hasOwnProperty("width")&&e.bounds.hasOwnProperty("height")&&(De(e.bounds),o=!0);else e={};return e.bounds||(e.bounds={x:0,y:0,width:0,height:0}),De(e.bounds),e.bounds&&(e.normalizedBounds=Pe(e,t,n)),o}function Pe(e,t,n){if(!e.normalizedBounds){if(n%360==0)return e.normalizedBounds=e.bounds,e.normalizedBounds;e.normalizedBounds=De(je(e.bounds,t,360-n))}return e.normalizedBounds}function De(e){return e.right=e.x+e.width,e.bottom=e.y+e.height,e}function Te(e,t){return e<t+r}function ke(e,t){return t-r<e}function Ce(e,t){return e&&t&&e.x===t.x&&e.y===t.y}function Me(e,t,n){return ke(e,t)&&Te(e,n)}function Ee(e,t){return!!t&&Me(e.x,t.x,t.right)&&Me(e.y,t.y,t.bottom)}function Se(e,t){return!(!e&&!t)&&(ke(e.right,t.x)&&ke(t.right,e.x)&&ke(e.bottom,t.y)&&ke(t.bottom,e.y)||Fe(e,t))}function Fe(e,t){if(!e&&!t)return!1;var n=e.width>t.width?e:t;return t=n===e?t:e,Te(n.x,t.x)&&ke(n.right,t.right)&&Te(n.y,t.y)&&ke(n.bottom,t.bottom)}function Ae(e,t){if(!Se(e,t))return null;var n={x:Math.max(e.x,t.x),y:Math.max(e.y,t.y),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)};return n.x<n.right&&n.y<n.bottom?(n.width=Math.abs(n.right-n.x),n.height=Math.abs(n.bottom-n.y),n):null}function Ie(e,t,n){var o=C.getViewerTransform(e,t.rotation?t.rotation:0).invert();return Le(o.x(n.x,n.y),o.y(n.x,n.y))}function Oe(e,t){return!(!e||!t||t.omitSpace)}function Ve(e){return Le(e.bounds.x,e.bounds.y)}function He(e){return Le(e.bounds.right,e.bounds.bottom)}function Le(e,t){return{x:e,y:t}}i.createHandlerRequest=he,i.makeHandlerRequest=ge,i.loadText=fe,i.loadPageText=function(e,t,n){ge(he(e,t),n)},"Atalasoft.Controls.WebDocumentViewer"===k.typeOf&&en.extend(k,a),k.bind({pagerecycled:d,pageshown:h,zoomchanged:c,documentchanged:m}),M.on({textselectstart:w,textselectmove:R,textselectend:B,textselectcopy:j})},Me=function(){var e=this,t=en({}),r={tapped:!1,touching:!1,pinching:!1,zooming:!1,textselection:!1,origin:{x:0,y:0},point:{x:0,y:0},delta:{x:0,y:0},drawing:!1,moves:0,prpt:0},l=null,i=on.None,n=on.None,o=null;function s(){return t.trigger.apply(t,arguments),e}function a(){r&&(r.drawing=!0)}function c(){r&&(r.drawing=!1)}function u(){r.zooming=!1}function d(e){if(!r.prmt)return s({type:"panstart",x:e.clientX,y:e.clientY}),document.addEventListener("mousemove",h),document.addEventListener("mouseup",g),document.addEventListener("ondrag",K),!1}function h(e){if(e=null==e?event:e,!r.prpt){if(0!==e.which)return s({type:"panmove",x:e.clientX,y:e.clientY}),!1;g()}}function g(){if(!r.prpt)return document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",g),document.removeEventListener("ondrag",K),s({type:"panend"}),!1}function f(e){if(r.prmt)return!1;e.stopPropagation();var t={handled:!1,complete:!1};return s({type:"textselectstart",toolEvent:e,eventData:t}),t.complete||(r.textselection=!0,document.addEventListener("mouseup",m),document.addEventListener("mousemove",v),document.addEventListener("ondrag",K)),!1}function p(e){return!!r.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectmove",toolEvent:e,eventData:{handled:!1,selecting:r.textselection}}),!1):(m(e),!0))}function m(e){return r.prmt||!r.textselection||(r.textselection=!1,document.removeEventListener("mouseup",m),document.removeEventListener("mousemove",v),document.removeEventListener("ondrag",K),s({type:"textselectend",toolEvent:e,eventData:{handled:!1}})),!1}function v(e){if(r.textselection)return!!r.prmt||(0!==e.charCode||e.touches&&e.touches.length?(s({type:"textselectscroll",toolEvent:e}),!1):(m(e),!0))}function _(e){67===e.keyCode&&e.ctrlKey&&s({type:"textselectcopy",toolEvent:e})}function b(e){return!!r.prmt||(s({type:i===on.Selection?"selectstart":"zoomareastart",x:e.clientX,y:e.clientY,toolEvent:e}),(o=en(e.target))._binds={mousemove:y,mouseup:x,ondrag:K},o.on(o._binds),!1)}function y(e){return e=null==e?event:e,!!r.prpt||(0!==e.which?(s({type:i===on.Selection?"selectmove":"zoomareamove",x:e.clientX,y:e.clientY,toolEvent:e}),!1):void x())}function x(e){if(!r.prpt)return o.off(o._binds),o=null,s({type:i===on.Selection?"selectend":"zoomareaend",toolEvent:e}),!1}function w(e){return e=null==e?event:e,I(e)}function z(){}function P(e){return e=null==e?event:e,O(e)}function D(e){return 2===(e=null==e?event:e).button?L(e):H(e),V(e)}function T(e){return e=null==e?event:e,A(e)}function k(e){return e=null==e?event:e,R(e)}function C(){I=i===on.PassThrough?$:K,O=n===on.PassThrough?$:K,R=A=L=H=V=$}function M(){}function E(){}function S(){}function F(){}C(),e.events={viewport:{click:w,dblclick:z,mousedown:D,mousemove:T,mouseout:M,mouseover:E,mouseup:S,contextmenu:P,mousewheel:F,keydown:k}},nn.Features.Touch&&en.extend(!0,e.events,{viewport:{touchstart:N,touchmove:W,touchend:U},wdv:{annotationdrawstart:a,annotationdrawend:c,annotationdragstart:a,annotationdragend:c}}),e.dispose=function(){r&&(r=null),l&&(l=null),e=null},e.bind=function(){return t.on.apply(t,arguments),e},e.unbind=function(){return t.off.apply(t,arguments),e},e.trigger=s,e.setTool=function(e,t){switch(i=e,n=t,C(),i){case on.None:I=K;break;case on.Pan:H=d;break;case on.ZoomIn:I=B;break;case on.ZoomOut:I=j;break;case on.Selection:case on.ZoomArea:H=b;break;case on.PassThrough:break;case on.Text:H=f,A=p,R=_}switch(n){case on.None:break;case on.Pan:L=d;break;case on.ZoomIn:O=B;break;case on.ZoomOut:O=j;break;case on.Selection:case on.ZoomArea:L=b;break;case on.PassThrough:}},e.getTool=function(){return{primary:i,secondary:n}},e.pauseTool=function(){r.prpt++},e.resumeTool=function(){0<r.prpt&&r.prpt--};var A=function(){},I=function(){},O=function(){},V=function(){},H=function(){},L=function(){},R=function(){};function B(e){if(!r.prpt)return q(e,!1),!1}function j(e){if(!r.prpt)return q(e,!0),!1}function q(e,t){if(!r.prpt)return s({type:"clickzoom",x:e.clientX,y:e.clientY,zoomout:t}),!1}function N(e){var t;r.prpt||r.drawing||r.pinching||en(e.target).is(".ui-menu,.ui-menu-item,.ui-corner-all")||(e.preventDefault(),2===(r.e=e).originalEvent.touches.length&&function(e){for(var t=null,n=0;n<e.length;n++){var o=e[n].target;if(o)if(null==t)t=o;else if(t!==o)return!1}return!0}(e.originalEvent.touches)?(G(),r.touching=!1,function(e){if(!r.prpt){e.stopPropagation(),r.pinching=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1];l={start:J(t.clientX,t.clientY,n.clientX,n.clientY)},s({type:"zoomstart",touches:e.originalEvent.touches})}}(e)):i===on.Text?f(e):1===e.originalEvent.touches.length&&(r.touching=!0,r.point.x=e.originalEvent.touches[0].pageX,r.point.y=e.originalEvent.touches[0].pageY,r.hold=setTimeout(X,1500),t={x:r.point.x,y:r.point.y},i===on.Pan&&(t.type="panstart",s(t))))}function W(e){var t;if(!r.prpt&&!r.drawing)if(e.preventDefault(),r.e=e,r.pinching)!function(e){if(!r.prpt&&(e.stopPropagation(),!r.zooming)){r.zooming=!0;var t=e.originalEvent.touches[0],n=e.originalEvent.touches[1],o=J(t.clientX,t.clientY,n.clientX,n.clientY,l.start),i=o.x/l.start.x,a=o.y/l.start.y;setTimeout(u,40),s({type:"zoommove",touches:e.originalEvent.touches,scale:i,scalex:i,scaley:a,dx:o.dx,dy:o.dy})}}(e);else if(r.touching){var n=e.originalEvent.touches[0];r.moves++,r.touching=!0,t={x:n.pageX,y:n.pageY},i===on.Pan&&(t.type="panmove",s(t))}else r.textselection&&p(e)}function U(e){var t,n,o;r.prpt||r.drawing||(e.preventDefault(),r.pinching?(o=e,r.prpt||(o.stopPropagation(),r.pinching=!1,s({type:"zoomend",touches:o.originalEvent.touches}),1===o.originalEvent.touches.length&&N(o))):r.textselection?m(e):(r.touching=!1,G(),0<r.moves?(r.moves=0,n={},i===on.Pan&&(n.type="panend",s(n))):r.tapped?((t=e).type="fit",s(t)):(r.tapped=!0,setTimeout(Z,300))))}function Z(){r.tapped=!1}function X(){if(0<r.moves&&null!=r.e){var e=Y(r.e);Math.abs(r.point.x-e.x)<5&&Math.abs(r.point.y-e.y)<5&&(r.moves=0)}0===r.moves&&r.touching&&s({x:r.point.x,y:r.point.y,type:"contextmenu"})}function G(){null!=r.hold&&(clearTimeout(r.hold),r.hold=null)}return e},kn=function(e,t,n,o,i){var a=this,r=e,l=t,s=(t?t._internalEvents:null)||en({}),u=50,c=n,d=o,h=c.parents("."+r.domclasses.atala_main_container).first(),g=on.Pan,f=on.None,p=null,m=1,v="",_=null,b="",y=[],x=1e3,w=null,z=-1,P=null,D={allowflick:!0,text:{scrolltriggerarea:sn.Normal,innerscrolldelta:10,outerscrolldelta:20}};
/**
   * Internal events for conditional input handling.
   */
a.events=T;var T={textselectstart:"textselectstart",textselectmove:"textselectmove",textselectend:"textselectend",textselectcopy:"textselectcopy"};function k(){return s.trigger.apply(s,arguments),a}function C(e,t){switch(p.setTool(e,t),n=e,o=t,g!==on.Text&&f!==on.Text||n===on.Text||o===on.Text||l.resetDrawLayer(),n!==on.Selection&&n!==on.ZoomArea&&(g=n),o!==on.Selection&&o!==on.ZoomArea&&(f=o),e){case on.None:M(Be.Arrow);break;case on.Pan:M(Be.Move);break;case on.ZoomIn:M(Be.ZoomIn);break;case on.ZoomOut:M(Be.ZoomOut);break;case on.Selection:if(!r.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,M(Be.Crosshair);break;case on.ZoomArea:if(!r.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";l.raiseDrawLayer(),z=1,M(Be.Crosshair);break;case on.Text:if(!r.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";l.raiseDrawLayer(),M(Be.Text);break;default:M(Be.Arrow)}var n,o}function M(e){var t=""===v?"?atalacsr=":v;_="%2"===e?_=b:e.replace("%1",t),c.css({cursor:_})}function E(e){r.fit(e.fit)}function S(e){e.zoomout?r.zoomOut():r.zoomIn()}function F(e){d.data("ox",d.scrollLeft()+e.x).data("oy",d.scrollTop()+e.y),d.stop()}function A(e){d.scrollLeft(d.data("ox")-e.x),d.scrollTop(d.data("oy")-e.y),D.allowflick&&(y.push({x:e.x,y:e.y,time:(new Date).getTime()}),10<y.length&&y.shift())}function I(){if(D.allowflick){if(1<y.length){var e=(new Date).getTime(),t=y.pop();if(e-t.time<100){var n=y.shift(),o=-n.time+t.time;d.animate({scrollLeft:d.scrollLeft()+Math.round((n.x-t.x)/o*250),scrollTop:d.scrollTop()+Math.round((n.y-t.y)/o*250)},x,"easeOutQuad")}}y.length=0}}function O(e){(w=l.getActivePage())&&w._rubberband.startSelect(e)}function V(e){(w=l.getActivePage())&&w._rubberband.moveSelect(e)}function H(e){(w=l.getActivePage())&&(w._rubberband.endSelect(e),"zoomareaend"===e.type&&(w._rubberband.hide(),w._rubberband.zoomToSelection())),0==--z&&(z=-1,l.resetDrawLayer(),C(g,f))}function L(){l.zoomStart(),m=r.getZoom()}function R(e){var t=m*e.scale;l.zoom(t)}function B(){l.zoomEnd()}function j(e){var t=G(e);if(t){var n=e.toolEvent&&e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent;if(t.cursor=_,t.complete=!1,t.rectangular=!!n&&n.altKey,t.interval=!!n&&n.shiftKey,!t.rectangular&&!t.interval){var o=n&&n.detail?n.detail%3:1;1!==o&&(t.word=2===o,t.line=0===o)}k({type:T.textselectstart,eventData:t}),e.eventData.handled=t.handled,t.complete&&t.handled&&(N(e),e.eventData.complete=!0)}}function q(e){Z();var t=G(e);if(t){t.cursor=_,t.selecting=e.eventData.selecting,k({type:T.textselectmove,eventData:t}),e.eventData.handled=t.handled;var n=t.handled&&t.cursor?t.cursor:Be.Arrow;n!==_&&M(n),e.eventData.handled&&e.eventData.selecting&&e.toolEvent&&e.toolEvent.target&&X(e)}}function N(e){Z();var t=G(e);t&&(k({type:T.textselectend,eventData:t}),e.eventData.handled=t.handled)}function W(e){Z(),X(e)}function U(){D.text.hookcopy&&k({type:T.textselectcopy})}function Z(){P&&(clearTimeout(P),P=null)}function X(e){if(Z(),e&&e.toolEvent){var t=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,n=h.offset(),o=null;if(void 0!==t.pageX&&void 0!==t.pageY?o=t:t.touches&&1===t.touches.length&&void 0!==t.touches[0].pageX&&void 0!==t.touches[0].pageY&&(o=t.touches[0]),o){var i=o.pageX-n.left,a=o.pageY-n.top,r=h.width(),l=h.height(),s=0,c=0;a<l*D.text.scrolltriggerarea&&0<d.scrollTop()?s=0<a?-D.text.innerscrolldelta:-D.text.outerscrolldelta:a>l*(1-D.text.scrolltriggerarea)?s=a<l?D.text.innerscrolldelta:D.text.outerscrolldelta:i<r*D.text.scrolltriggerarea&&0<d.scrollLeft()?c=0<i?-D.text.innerscrolldelta:-D.text.outerscrolldelta:i>r*(1-D.text.scrolltriggerarea)&&(c=i<r?D.text.innerscrolldelta:D.text.outerscrolldelta),(s||c)&&D.text.scrolltriggerarea!==sn.None&&(d.scrollTop(d.scrollTop()+s),d.scrollLeft(d.scrollLeft()+c),P=setTimeout(X,u,e))}}}function G(e){var t={cursor:null,handled:!1};if(e&&e.toolEvent){var n=e.toolEvent.originalEvent?e.toolEvent.originalEvent:e.toolEvent,o=function(e){var t=en(e).parents("."+r.domclasses.atala_page_div).first();if(t){var n=t.attr(r.domattributes.atala_page_index);return parseInt(n,10)}return null}(n.touches&&1===n.touches.length?document.elementFromPoint(n.touches[0].clientX,n.touches[0].clientY):n.target);if(isFinite(o)&&0<=o){var i=function(e,t){var n=Y(e.toolEvent?e.toolEvent:e);if(t&&t._paper){var o=Q(t._paper.canvas,t);n.x-=o.left,n.y-=o.top}return n}(e),a=function(e,t){var n=0;if(l._controllers.text){var o=l._controllers.document.getPageText(t);o&&isFinite(o.rotation)&&(n=o.rotation)}var i=l.getViewerTransform(t,n).invert();return{x:i.x(e.x,e.y),y:i.y(e.x,e.y)}}(i,o);en.extend(t,{page:o,point:a,viewerPoint:i})}}return t}i&&(en.extend(D,i),D.text.scrolltriggerarea=Math.max(0,Math.min(D.text.scrolltriggerarea,.3))),p=new Me,c.on(p.events.viewport),p.events.wdv&&r.bind(p.events.wdv),p.bind({clickzoom:S,fit:E,panstart:F,panmove:A,panend:I,zoomstart:L,zoommove:R,zoomend:B,selectstart:O,selectmove:V,selectend:H,zoomareastart:O,zoomareamove:V,zoomareaend:H,textselectstart:j,textselectmove:q,textselectend:N,textselectscroll:W,textselectcopy:U}),a.dispose=function(){p&&p.events&&(p.events.wdv&&r&&r.unbind&&r.unbind(p.events.wdv),p.events.viewport&&c&&c.off&&c.off(p.events.viewport)),y&&0<y.length&&(y.length=0),p&&p.dispose&&p.dispose(),a=r=c=d=null},a.bind=function(){return s.on.apply(s,arguments),a},a.unbind=function(){return s.off.apply(s,arguments),a},a.trigger=k,a.setTool=C,a.__getDebugInfo=function(){var e={};return en.extend(!0,e,{cursor:_,custom:b,flick:y,resourcepath:v,flickdelay:x,scroller:d,tool:p,toolcursors:Be,tooltypes:on,viewport:c,zoom:m}),e},a.getTool=function(){return p.getTool()},a.pauseTool=function(){return p.pauseTool()},a.resumeTool=function(){return p.resumeTool()},a.setCursor=M,a.setCustomCursor=function(e){b=e}},Cn=function(e,t,n,o){var m,i,a,r,l,u=3,s=this,c=en({}),d=e,v={animated:!1,aspectratio:0,backcolor:"fff",forecolor:"000",movable:!0,multicolor:!0,resizable:!0,showgrips:!1,showmask:!1,showtooltip:!1,visible:!1,x:0,y:0,width:0,height:0},_={
/** Main RubberBand dom object */
rect:null,
/** Dom object underneath Main RubberBand */
rectback:null,
/** Mask objects */
mask:{top:null,bottom:null,left:null,right:null}},b={animating:!1,boundevents:null,changing:!1,colorswap:0,origin:{x:0,y:0},pagesize:{width:0,height:0},pageoffset:{x:0,y:0},vert:!1,horiz:!1,zoom:1},h=o,g=n;function f(){Z(),V()}function p(){Z(),V()}function y(){for(var c=new Array("move","nw","n","ne","w","e","sw","s","se"),i=[],t=[],a=0,r=0,e=0;e<9;e++)i[e]=new s(e),g.append(i[e].grip);function n(){for(var e=0;e<9;e++)!0===t[e]?i[e].show():i[e].hide()}function l(){for(var e=0;e<9;e++)t[e]=!0;t[0]=!0,a<8&&r<8&&(t[1]=!1),(a<12||r<12)&&(t[3]=!1,t[6]=!1),(a<16||r<8)&&(t[2]=!1,t[7]=!1),(r<16||a<8)&&(t[4]=!1,t[5]=!1),n()}function o(){!0===k()?(i[0].grip.onmousedown=R,i[0].grip.style.cursor="move"):(i[0].grip.onmousedown=K,i[0].grip.style.cursor="default");for(var e=1;e<9;e++)!0===M()?(i[e].bind({mousedown:i[e].onResize}),i[e].grip.style.cursor=c[e]+"-resize"):(i[e].off({mousedown:i[e].onResize}),i[e].grip.style.cursor="default")}function s(e){var t,n,o,i=this,a=c[e],r=!1;function l(){"move"!==a&&(!0===v.showgrips?(!0===C()?n.backgroundColor="#"+D():n.backgroundColor="#"+T(),n.border="1px solid #"+T()):(n.backgroundColor="",n.border=""))}function s(){!0===v.showgrips?(n.width="6px",n.height="6px"):(n.width="8px",n.height="8px")}t=document.createElement("div"),n=t.style,(o=en(t)).addClass(d.domclasses.atala_tool_selection_grip),l(),s(),i.grip=t,i.dispose=function(){a=n=t=i=null},i.setPos=function(e,t){n.left=e+"px",n.top=t+"px"},i.setSize=function(e,t){!0===E()&&"move"!==a&&(e-=2,t-=2),e<=0&&(e=1),t<=0&&(t=1),n.width=e+"px",n.height=t+"px"},i.hide=function(){r&&(n.visibility="hidden",r=!1)},i.show=function(){r||(n.visibility="visible",r=!0)},i.resetColors=l,i.resetGripSize=s,i.onResize=function(e){return function(e,t){U(e=e||event),b.vert=0,b.horiz=0,b.changing=!0;var n={x:0,y:0};switch(t){case"nw":n.x=v.x+v.width,n.y=v.y+v.height;break;case"n":n.x=v.x,n.y=v.y+v.height,b.vert=1;break;case"ne":n.x=v.x,n.y=v.y+v.height;break;case"w":n.x=v.x+v.width,n.y=v.y+v.height,b.horiz=1;break;case"e":n.x=v.x,n.y=v.y+v.height,b.horiz=1;break;case"sw":n.x=v.x+v.width,n.y=v.y;break;case"s":n.x=v.x,n.y=v.y,b.vert=1;break;case"se":n.x=v.x,n.y=v.y}b.origin.x=Math.round(n.x*b.zoom)+b.pageoffset.x,b.origin.y=Math.round(n.y*b.zoom)+b.pageoffset.y,h.raiseDrawLayer();var o={mousemove:L,mouseup:j};return null!==b.boundevents?en.extend(b.boundevents,o):b.boundevents=o,g.bind(o),!1}(e,a)},i.bind=function(){return o.on.apply(o,arguments),o},i.unbind=function(){return o.off.apply(o,arguments),o},n.display="block",n.position="absolute",n.visibility="hidden",n.zIndex=u,t.onclick=K,t.onselectstart=K,t.onselect=K,t.oncontextmenu=K}this.dispose=function(){for(var e=0;e<9;e++)i[e].dispose(),i[e]=null;t=i=c=null},this.setRectangle=function(e,t,n,o){a=n,r=o,i[0].setPos(e,t),i[1].setPos(e-4,t-4),i[3].setPos(e+n-4,t-4),i[6].setPos(e-4,t+o-4),i[8].setPos(e+n-4,t+o-4),i[0].setSize(n,o),v.showgrips?(i[2].setPos(e+Math.round(n/2)-4,t-4),i[4].setPos(e-4,t+Math.round(o/2)-4),i[5].setPos(e+n-4,t+Math.round(o/2)-4),i[7].setPos(e+Math.round(n/2)-4,t+o-4)):(i[2].setPos(e+4,t-4),i[4].setPos(e-4,t+4),i[5].setPos(e+n-4,t+4),i[7].setPos(e+4,t+o-4),i[2].setSize(n-8,8),i[4].setSize(8,o-8),i[5].setSize(8,o-8),i[7].setSize(n-8,8)),l()},this.resetColors=function(){for(var e=0;e<9;e++)i[e].resetColors()},this.resetGrips=function(){for(var e=0;e<9;e++)i[e].resetGripSize(),i[e].resetColors()},this.hide=function(){for(var e=0;e<9;e++)i[e].hide()},this.show=n,this.showGrips=l,(this.resetEvents=o)()}function x(e,t,n,o){var i=en("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function w(){var e=x("div");return e.addClass(d.domclasses.atala_tool_selection_band),e.css({position:"absolute",zIndex:u}),e}function z(){var e=x("div");return e.addClass(d.domclasses.atala_tool_selection_mask),e.hide(),e.css({left:"0px",top:"0px",width:"1px",height:"1px",position:"absolute",background:"#000",opacity:"0.6",zIndex:"0"}),e}function P(){return v.animated}function D(){return v.backcolor}function T(){return v.forecolor}function k(){return v.movable}function C(){return v.multicolor}function M(){return v.resizable}function E(){return v.showgrips}function S(){return c.trigger.apply(c,arguments),s}function F(){_.mask.left.hide(),_.mask.right.hide(),_.mask.top.hide(),_.mask.bottom.hide()}function A(){i.css({left:(v.x+v.width)*b.zoom+8+"px",top:(v.y+v.height)*b.zoom+4+"px"}),i.text(Math.round(v.width/b.zoom)+"x"+Math.round(v.height/b.zoom)),i.is(":hidden")&&i.show()}function I(){v.visible=!0,_.rectback.show(),_.rect.show(),!0===P()&&!0===C()&&function e(){!0===v.animated&&0===b.colorswap?(_.rect.css("border","1px dashed #"+D()),_.rectback.css("border","1px solid #"+T()),b.colorswap=1):(_.rect.css("border","1px dashed #"+T()),_.rectback.css("border","1px solid #"+D()),b.colorswap=0),!0!==v.animated||_.rect.is(":hidden")||b.animating||(b.animating=setTimeout(function(){b.animating=!1,e()},250))}()}function O(){v.visible=!1,F(),m.hide(),_.rectback.hide(),_.rect.hide()}function V(){var e=v.x,t=v.y,n=b.pagesize.width,o=b.pagesize.height;(n<=e||e+v.width>n)&&(e=n-v.width)<0&&(e=0),(o<=t||t+v.height>o)&&(t=o-v.height)<0&&(t=0),e!==v.x&&(v.x=e),t!==v.y&&(v.y=t);var i,a,r,l,s,c,u,d,h=Math.round(v.x*b.zoom),g=Math.round(v.y*b.zoom),f=Math.round(v.width*b.zoom),p=Math.round(v.height*b.zoom);i=h,a=g,_.rectback.css({left:i+"px",top:a+"px"}),_.rect.css({left:i+"px",top:a+"px"}),d=p,0===(u=f)&&(u=1),_.rectback.css({width:u+"px",height:d+"px"}),_.rect.css({width:u+"px",height:d+"px"}),m.setRectangle(h,g,f,p),v.visible?(I(),r=h,l=g,s=f,c=p,v.showmask?(0<l?(_.mask.top.css({left:b.pageoffset.x,top:b.pageoffset.y,width:W(),height:l}),_.mask.top.show()):_.mask.top.hide(),l+c<N()?(_.mask.bottom.css({left:b.pageoffset.x,top:b.pageoffset.y+l+c,width:W(),height:N()-(l+c)}),_.mask.bottom.show()):_.mask.bottom.hide(),0<r?(_.mask.left.css({left:b.pageoffset.x,top:b.pageoffset.y+l,width:r,height:c}),_.mask.left.show()):_.mask.left.hide(),r+s<W()?(_.mask.right.css({left:b.pageoffset.x+r+s,top:b.pageoffset.y+l,width:W()-(r+s),height:c}),_.mask.right.show()):_.mask.right.hide()):F()):O()}function H(e,t){e.stopPropagation(),e.preventDefault();var n=t||q(e),o=Math.round(b.origin.x/b.zoom),i=Math.round(b.origin.y/b.zoom),a=Math.abs((n.x-b.origin.x)/b.zoom),r=Math.abs((n.y-b.origin.y)/b.zoom);return 0<v.aspectratio&&(Math.abs((n.y-b.origin.y)/(n.x-b.origin.x))>1/v.aspectratio&&0===b.horiz||1===b.vert?a=Math.round(r*v.aspectratio):r=Math.round(a/v.aspectratio)),n.x<b.origin.x?(o-=a)-b.pageoffset.x<0&&(a=b.origin.x-b.pageoffset.x,0<v.aspectratio&&(r=Math.round(a/v.aspectratio)),o=b.origin.x-a):o+a>b.pagesize.width+b.pageoffset.x&&(a=b.pagesize.width-o+b.pageoffset.x,0<v.aspectratio&&(r=Math.round(a/v.aspectratio))),n.y<b.origin.y?(i-=r)-b.pageoffset.y<0&&(r=b.origin.y-b.pageoffset.y,0<v.aspectratio&&(a=Math.round(r*v.aspectratio)),i=b.origin.y-r,n.x<b.origin.x&&(o=b.origin.x-a)):i+r>b.pagesize.height+b.pageoffset.y&&(r=b.pagesize.height-i+b.pageoffset.y,0<v.aspectratio&&(a=Math.round(r*v.aspectratio)),n.x<b.origin.x&&(o=b.origin.x-a)),(0===b.vert||0<v.aspectratio)&&(v.x=o-b.pageoffset.x,v.width=a),(0===b.horiz||0<v.aspectratio)&&(v.y=i-b.pageoffset.y,v.height=r),V(),!0===v.showtooltip&&A(),!1}function L(e){return H(e,Y(e,null,!0))}function R(e){U(e=e||event);var t=X(e,null,g);b.origin.x=t.x-Math.round(v.x*b.zoom),b.origin.y=t.y-Math.round(v.y*b.zoom),b.changing=!0;var n={mousemove:B,mouseup:j,ondrag:K};return null!==b.boundevents?en.extend(b.boundevents,n):b.boundevents=n,g.bind(n),!1}function B(e){var t;U(e=e||event),t="mousemove"===e.type?X(e.originalEvent,null,g):X(e);var n={x:0,y:0};return n.x=Math.round((t.x-b.origin.x)/b.zoom),n.y=Math.round((t.y-b.origin.y)/b.zoom),n.x>b.pagesize.width-v.width&&(n.x=b.pagesize.width-v.width),n.x<0&&(n.x=0),n.y>b.pagesize.height-v.height&&(n.y=b.pagesize.height-v.height),n.y<0&&(n.y=0),v.x=n.x,v.y=n.y,V(),!1}function j(e){return U(e=e||event),!(b.changing=!1)===v.showtooltip&&i.hide(),b.changing&&(b.changing=!1,S("changed")),null!==b.boundevents&&(g.unbind(b.boundevents),b.boundevents=null,h.resetDrawLayer()),!1}function q(e){var t=Y(e.toolEvent?e.toolEvent:e);if(g._paper){var n=Q(g._paper.canvas,g);t.x-=n.left,t.y-=n.top}return t}function N(){return Math.round(b.pagesize.height*b.zoom)}function W(){return Math.round(b.pagesize.width*b.zoom)}function U(e){void 0!==e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Z(){var e=g._img.getSize();b.zoom=g._img.getFitZoom(),b.pagesize.width=e.width,b.pagesize.height=e.height}return s.dispose=function(){null!=m&&(m.dispose(),m=null),s=null,_.rect=null,_.rectback=null,i=null,_.mask.top=null,_.mask.bottom=null,_.mask.left=null,_.mask.right=null},s.getAnimated=P,s.getAspectRatio=function(){return v.aspectratio},s.getBackColor=D,s.getForeColor=T,s.getHeight=function(){return v.height},s.getMovable=k,s.getMultiColor=C,s.getPosition=function(){return{x:v.x,y:v.y}},s.getRectangle=function(){return{x:v.x,y:v.y,width:v.width,height:v.height}},s.getResizable=M,s.getShowGrips=E,s.getShowMask=function(){return v.showmask},s.getShowTooltip=function(){return v.showtooltip},s.getSize=function(){return{width:v.width,height:v.height}},s.getVisible=function(){return v.visible},s.getWidth=function(){return v.width},s.bind=function(){return c.on.apply(c,arguments),s},s.hide=O,s.reset=function(){O(),v.x=0,v.y=0,v.width=0,v.height=0},s.show=I,s.synchronize=function(){V()},s.trigger=S,s.unbind=function(){return c.off.apply(c,arguments),s},s.zoomToSelection=function(){var e=h.getMaxZoom();if(d.getZoom()<e){var t,n=h.getViewportSize(),o=g._img.getFitMultiplier(),i=1,a=0,r=0;t=n.width/v.width==n.height/v.height?Math.min(n.width/(v.width*o),n.height/(v.height*o),e):n.width/v.width<n.height/v.height?Math.min(n.width/(v.width*o),e):Math.min(n.height/(v.height*o),e),i=o*t,a=Math.round(v.x*i),r=Math.round(v.y*i),r-=Math.max(0,Math.round((n.height-v.height*i)/2)),a-=Math.max(0,Math.round((n.width-v.width*i)/2));var l=h.getPageOffsets(g._index,null,null,t);d.zoom(t,function(){d.scrollTo(l.width+a,l.height+r)})}},s.startSelect=function(e){e.stopPropagation(),e.preventDefault(),Z();var t=q(e);return I(),b.origin.x=t.x,b.origin.y=t.y,v.x=Math.round(t.x/b.zoom),v.y=Math.round(t.y/b.zoom),v.width=1,v.height=1,b.changing=!0,b.vert=0,b.horiz=0,V(),!0===v.showtooltip&&A(),!1},s.moveSelect=H,s.endSelect=j,t&&en.extend(!0,v,t),_.rect=w(),_.rectback=w(),_.mask.top=z(),_.mask.bottom=z(),_.mask.left=z(),_.mask.right=z(),(i=x("div")).addClass(d.domclasses.atala_tool_selection_tooltip),i.hide(),i.css({fontFamily:"Arial, helvetica, san-serif",fontSize:"8pt",padding:"1px",backgroundColor:"#FFFFE1",border:"1px solid #000000",position:"absolute",zIndex:999}),g.append(_.rectback),g.append(_.rect),g.append(i),g.append(_.mask.top),g.append(_.mask.bottom),g.append(_.mask.left),g.append(_.mask.right),m=new y,a=v.multicolor?"dashed":"solid",r="1px solid #"+v.backcolor,l="1px "+a+" #"+v.forecolor,_.rectback.css("border",r),_.rect.css("border",l),m.resetColors(),v.visible?I():O(),g.bind({pageresize:f,pagezoom:p}),s};function Ut(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that views, modifies, and saves documents, annotations and forms.
 * @param {WebDocumentViewerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @returns {WebDocumentViewer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */function Ee(e,o){if(!dn())return null;var t,c={typeOf:e.type||"Atalasoft.Controls.WebDocumentViewer"},s="",T=150,u=500,b="atala-ui-icon",n=document.createElement("div"),R=4,B=1500,i=en({}),a=en({}),r=new _n({get:function(){return c},isInitialized:Vt,switchDocument:_t,closeDocument:bt}),y={
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
uploadCtrl:null},j={annotations:null,document:null,forms:null,mouseTool:null,memory:null,text:null,upload:null},q={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},N={prpr:0,batchoperation:0,loading:!1,zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,itch:!1},d={
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
fileaddedtoupload:null},W={
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
direction:an.Vertical,
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
fitting:rn.Width,
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
pageselectlocation:en.extend({},ln.TopLeft),
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
type:on.Pan,
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
scrolltriggerarea:sn.Normal,
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
localization:gn,
/**
     * @property {boolean} [tiling=false] - Specifies whether the PDF document pages should be loading using tiling
     * */
tiling:!1};if(e){var l=e.mousetool;e.mousetool&&"object"!=typeof e.mousetool&&(e.mousetool=en.extend({},W.mousetool,{type:l})),en.extend(!0,W,e),e.mousetool=l,e.localization&&xn.SetLocalizationStrings(e.localization)}if(W.direction=an.Vertical,W.tabular=!1,W.fitting=W.fitting===rn.None||W.fitting===rn.Best||W.fitting===rn.Width||W.fitting===rn.Height?W.fitting:rn.Width,W.pageborderwidth=_e(W.pageborderwidth)?parseInt(W.pageborderwidth,10):1,W.pagespacing=_e(W.pagespacing)?parseInt(W.pagespacing,10):4,W.showpageborder=!!W.showpageborder,W.showpagenumber=!!W.showpagenumber,W.showstatus=!!W.showstatus,W.zoom=_e(W.zoom,!0)?parseFloat(W.zoom):1,W.scripturl=0<(t=W.scripturl).length&&-1===t.indexOf("/",t.length-1)&&-1===t.indexOf("\\",t.length-1)?W.scripturl+"/":W.scripturl,function(){if((W.mousetool.type===on.ZoomArea||W.mousetool.type===on.Selection||W.mousetool.type===on.Text)&&!W.showselecttools){if(null!==e.showselecttools&&void 0!==e.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";W.showselecttools=!0}}(),function(){W.upload||(W.upload={enabled:!1});var e=W.upload;!1!==e.enabled&&(e.allowedmaxfilesize=mn(e.allowedmaxfilesize)?e.allowedmaxfilesize:Number.MAX_VALUE,e.allowdragdrop=!!e.allowdragdrop,e.allowmultiplefiles=!!e.allowmultiplefiles,e.allowedfiletypes="string"==typeof e.allowedfiletypes?e.allowedfiletypes:"",e.uploadpath="string"==typeof e.uploadpath?e.uploadpath:".",e.filesuploadconcurrency=mn(e.filesuploadconcurrency)?e.filesuploadconcurrency:1,e.closeuiafterupload=!1!==e.closeuiafterupload)}(),!hn(W.allowannotations,W.allowtext))return null;function h(){var e=j.memory.deallocateOldestEntry();!function(e){try{e.parentNode&&e.parentNode.removeChild(e),n.appendChild(e),n.innerHTML=""}catch(e){}}(e[0]),0<=e._cacheIndex&&(y.loadedImgs[e._cacheIndex]=null,e._cacheIndex=-1),e.remove(),e.length=0,e=null}function g(e){N.newpagedivsize={height:e.height,width:e.width},N.newpagedivfullzoom=e.fullzoom,W.minwidth=e.minwidth,W.zoom=e.fullzoom,wt()}function f(e){var t=!1;(q.smallest.width<=0||e.width<q.smallest.width)&&(q.smallest.width=e.width,t=!0),(q.smallest.height<=0||e.height<q.smallest.height)&&(q.smallest.height=e.height,t=!0),function(e,t){if(W.direction===an.Vertical){if(y.scrollV)if(y.scrollV.scrollSize(Math.max(y.scrollV._scrollSize+t,0)),1===y.scrollV._ratio&&y.scrollV._scrollSize+t<3e4)y.scrollV._tray.height(y.scrollV._tray.height()+t),y.scrollV._max=Math.max(y.scrollV._tray.height()-y.scrollV[0].clientHeight,0)+1;else{var n=y.scrollV.height()-y.scrollH.scrollbarHeight()-1,o=(3e4-n)*y.scrollV._ratio;3e4<o+t?y.scrollV.ratio((o+t)/(3e4-n)):ye()}we(y.scrollV),xe(y.scrollH,"width")}else if(W.direction===an.Horizontal){if(y.scrollH)if(y.scrollH.scrollSize(Math.max(y.scrollH._scrollSize+e,0)),1===y.scrollH._ratio&&y.scrollH._scrollSize+e<3e4)y.scrollH._tray.width(y.scrollH._tray.width()+e),y.scrollH._max=Math.max(y.scrollH._tray.width()-y.scrollH[0].clientWidth,0)+1,y.scrollH.ratio(y.scrollH._scrollSize/y.scrollH._max);else{var i=y.scrollH.width()-y.scrollV.width()-1,a=(3e4-i)*y.scrollH._ratio;3e4<a+e?y.scrollH.ratio((a+e)/(3e4-i)):ye()}we(y.scrollH),xe(y.scrollV,"height")}if((0!==e||0!==t)&&0!==t){var r=y.scroller[0].scrollLeft,l=y.scroller[0].scrollTop;Ae(jt()+1),Wt({type:"scroll",x:r,y:l,dx:0,dy:0})}}(e.dx,e.dy),t&&J($())>y.pageDivs.length&&wt()}function p(e,t,n,o){var i=t.getPageSize(e.index,s);if(!i){var a=t.getPageFitMultiplier(e.index,s),r=a,l={width:e.width,height:e.height};1===r&&W.forcepagefit&&(l.width!==n.width||l.height!==n.height)&&0<l.width&&0<l.height&&(r=l.width/n.width>l.height/n.height?n.width/l.width:n.height/l.height,t.setPageFitMultiplier(e.index,r,s)),t.setPageSize(e.index,en.extend({},l),s),o&&(l.width*=W.zoom*r,l.height*=W.zoom*r,(i=en.extend({},q.size)).width*=W.zoom*a,i.height*=W.zoom*a,e.dx=l.width-i.width,e.dy=l.height-i.height,f(e))}}function m(){nn.Mobile.Any()?window.addEventListener("orientationchange",Ge):window.addEventListener("resize",Ge),y.scroller.scroll(ze),L(q.buffer)}function v(e){var t=e.target||e.srcElement;return("TEXTAREA"===t.nodeName||"INPUT"===t.nodeName||"text"===t.type)&&((!t.attributes.selectable||"false"!==t.attributes.selectable.value)&&void 0)}function _(t,n){return function(e){try{e.currentTarget=n&&0<n.length?n[0]:e.currentTarget,t&&t(e)}catch(e){me(e.message)}}}function U(e,t){if(W.showerrors)throw void 0===t?e:e+": "+t;me(e+": "+t),Wt({type:"error",name:e,message:t})}function x(e){U(e.name,e.msg)}function w(e,t,n,o){var i=en("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function Z(e,t,n){return w("div",e,t,n)}function z(e){var t=en('<div style="width:100%; height:100%; position:absolute; left: 0px; top: 0px; background: #F00; opacity:0.0;"></div>');return t.toFront=function(){t.css({"z-index":"10"}),t.reflow&&t.reflow()},t.reset=function(){t.css({"z-index":""}),t.reflow&&t.reflow()},e&&e.prepend(t),t}function P(e){var t=Z(e.parent),n=s+"_toolbar";t.buttons=[];for(var o=0;e.children&&o<e.children.length;o++){var i=null;switch(e.children[o].type){case"button":if(nn.Features.Touch&&("lines"===e.children[o].icon||"polygon"===e.children[o].icon))continue;e.children[o].id=n+"_"+e.children[o].id,(i=F(e.children[o],t)).addClass(cn.atala_toolbar_button),t.buttons.push(i);break;case"pagelabel":y.pageLabel=w("span",t,n+"_"+e.children[o].id),(i=y.pageLabel).addClass("ui-controlgroup-item")}i&&e.children[o].cls&&i.addClass(e.children[o].cls)}return t}function D(e){var t=en("<ul/>");for(var n in t.css({fontSize:"medium"}),t.addClass(cn.atala_context_menu),e)if(e.hasOwnProperty(n)){var o=en('<li><div href="#"> '+n+" </div></li>");nn.Features.Touch&&o.on({touchend:e[n]}),o.click(e[n]),o.appendTo(t)}return t.menu(),t}function k(e,t,n){var o=en('<div title="'+t+'" />');return n&&o.append(n),o.dialog(),o}function C(e){var t=w("span",y.toolbar.annoToolbar).addClass("ui-controlgroup-item");return F(e,t),S(t,e.id+"_Drop","ui-icon-triangle-1-s","Click To Choose",null,function(){var e=en(this).next();if(e.is(":visible"))return e.hide(),!1;var t=e.prev().prev().parent();return e.menu().show().css({position:"absolute",top:0,left:0,"min-width":t.width()+"px","z-index":11}).position({my:"left top",at:"left bottom",of:t}),!1}),t.controlgroup(),y.toolbar.annoToolbar.controlgroup("refresh"),t}function M(e,t,n){for(var o=en(e.children().first()),i={},a=0;a<n.length;a++)i[n[a].name]=E(o,t,n[a]);o.menu=D(i),e.append(o.menu),o.menu.hide()}function E(e,t,n){var o=function(){return e.button("option","label","Draw "+n.name),e.data("_annoConfig",n),e.click(t.onclick),e.menu.hide(),e.trigger("click"),!1};return qt("menuselect"+t.icon+n.name,_(o,e)),o}function S(e,t,n,o,i,a){var r=en('<button id="'+t+'" title="'+o+'">'+(i||o)+"</button>");return a&&r.click(a),r.button({icon:n,showLabel:null!=i&&W.showbuttontext}),r.addClass("atala-ui-button"),e&&r.appendTo(e),r}function F(e,t){var n,o="menuclick"+(e.custom?e.id:e.icon),i=S(t,e.id,e.custom?e.icon:b+" "+b+"-"+e.icon,e.tooltip,e.text,(n=o,function(e){e.preventDefault(),Wt(n,arguments)}));return i.data("_config",e),qt(o,_(e.onclick,i)),i}function A(e){var t,n,o={clearable:"atala_search_input_clearable",onclear:"atala_search_input_clear_hover",inputEmpty:"atala_search_input_empty",loading:"atala_search_input_loading"},i=e.parent||y.toolbar,a=null,r=null;function l(){var e=n.val();return e?n.addClass(o.clearable):n.removeClass(o.clearable),!!(e&&a&&a.isValid()&&e===a.getQuery())||(clearTimeout(r),a=null,e&&3<=e.length?(f(!0),r=setTimeout(function(){a=j.text.search(e,jt(),h),g(!0)},W.mousetool.text.searchdelay),!1):void d())}function s(e){var t=n.val();return 13===e.keyCode&&a&&t&&a.isValid()&&a.getQuery()===t?(e.shiftKey?u():c(),!1):13!==e.keyCode||a&&a.isValid()?27===e.keyCode?(d(),_(),!1):void 0:(l(),!1)}function c(){a&&(g(!0),a.next(h))}function u(){a&&(g(!0),a.prev(h))}function d(){a=null,j.text.search(""),j.text.clearSelection(),g(!1),f(!0)}function h(e,t){e.isValid()&&(g(!1),e.wrap=W.mousetool.text.wrapsearch,t||f(t))}function g(e){m(o.loading,e)}function f(e){m(o.inputEmpty,!e)}function p(t){return function(e){e.preventDefault(),t&&t()}}function m(e,t){t?n.addClass(e):n.removeClass(e)}function v(e){m(o.onclear,this.offsetWidth-18<e.clientX-this.getBoundingClientRect().left)}function _(e){e&&e.preventDefault(),n.removeClass(o.clearable).removeClass(o.onclear).val("").change(),l()}!function(){t=Z().addClass(cn.atala_search_container).addClass("ui-controlgroup-item"),(n=en('<input type="text" placeholder="Search..." />').addClass(cn.atala_search_input).addClass("ui-widget")).on({keydown:s,"input propertychange":l}),w("span",t).css({width:"100%"}).append(n);var e=w("span",t);S(e,null,b+" "+b+"-search-next","Next",null,p(c)).addClass(cn.atala_search_next).addClass(cn.atala_toolbar_button),S(e,null,b+" "+b+"-search-prev","Previous",null,p(u)).addClass(cn.atala_search_prev).addClass(cn.atala_toolbar_button),t.on("mousemove","."+o.clearable,v).on("touchstart click","."+o.onclear,_),i.append(t),i.append(en('<div style="clear:both;"></div>'))}(),this.dispose=function(){n.off({keypress:s,"input propertychange":l}),t.off("mousemove","."+o.clearable,v).off("touchstart click","."+o.onclear,_),a&&a.dispose();t.remove()}}function I(){W.allowannotations&&c.annotations.cancelDraw(),j.mouseTool.setTool(on.ZoomArea)}function O(o){return function(){var t=this,e=V(q),i=e[0],n=[];e.forEach(function(e){return Ut(this,t),n.push(j.document.getPageRotation(e)+o)}.bind(this)),j.document.rotatePages(e,n,function(){var e=ct(i),t=he(i),n=W.direction===an.Vertical?t.height*e:0;Ze(W.pageselectlocation,ln.Center)||Ze(W.pageselectlocation,ln.MiddleLeft)?n/=2:Ze(W.pageselectlocation,ln.TopLeft)&&(n=0);var o={x:W.direction===an.Vertical?0:n,y:W.direction===an.Vertical?n:0};Ue(i,o,W.pageselectlocation,!0)})}}!function(){var e=W.parent.attr("id")+"_wdv";++vn.instanceCounter;for(;document.getElementById(e+vn.instanceCounter);)++vn.instanceCounter;s=e+vn.instanceCounter}(),
/**
   * @member {WebDocumentViewerConfig} config - Current control configuration.
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @instance
   * @alias config
   */
c.config=W,
/** WARNING: Changing values from these references can cause instability.*/
c.events=d,
/** WARNING: Changing values from these references can cause instability.*/
c.domclasses=cn,
/** WARNING: Changing values from these references can cause instability.*/
c.domattributes=un;var V=function(e){return[e.number-1]};function H(e,t){var n=Z(e,t);return W.direction===an.Vertical?(n.height(1),n.css({display:"block"})):W.direction===an.Horizontal&&(n.width(1),n.css({display:"inline-block",overflow:"hidden"})),n._zoom=1,W.backcolor&&n.css({backgroundColor:W.backcolor}),n}function L(e){if(void 0===e){var t=J($());q.buffer<t&&(q.buffer=t),q.buffer=Math.min(q.buffer,j.document.getPageCount()),e=q.buffer}function n(t){return function(){var e;e=t,N.activepage=e}}if(y.pageDivs.length<e)for(var o=y.pageDivs.length;o<e;o++)y.pageDivs[o]=Z(),y.pageDivs[o].addClass(cn.atala_page_div),W.showselecttools&&(y.pageDivs[o]._rubberband=new Cn(c,{},y.pageDivs[o],{getViewportSize:ge,getMaxZoom:ee,getPageOffsets:le,raiseDrawLayer:mt,resetDrawLayer:vt})),y.pageDivs[o].on({touchstart:n(y.pageDivs[o]),mousedown:n(y.pageDivs[o])}),j.annotations&&j.annotations.addDrawingSurface(y.pageDivs[o]),(W.showselecttools||W.allowannotations||W.allowforms||W.allowtext)&&(y.pageDivs[o]._draw=z(y.pageDivs[o])),j.forms&&j.forms.addFormLayer(y.pageDivs[o]),j.text&&j.text.addTextLayer(y.pageDivs[o]);else if(y.pageDivs.length>e)for(;y.pageDivs.length>e&&0!==y.pageDivs.length;){var i=y.pageDivs.pop();i._rubberband&&i._rubberband.dispose(),j.annotations&&j.annotations.removeDrawingSurface(i),j.forms&&j.forms.removeFormLayer(i),j.text&&j.text.removeTextLayer(i),i&&Ve(i),i=null}}function X(e,M,t,n){"function"==typeof t&&(n=t,t=void 0);var E,o="function"==typeof n?[n]:[];E=en(new Image);var i=.9,S=en.extend(!0,{atala_cb:void 0},t||{});E._domEl=Z(),E._domEl.addClass(cn.atala_page_image_anchor),E.addClass(cn.atala_page_image),E._domEl.append(E);var a={load:H,error:function(){b(),U("ImageError","Image at frameIndex "+F()+" failed to load.")},inserted:function(){E._loaded&&h()}};function F(){return E._page?E._page._index:j.document.getPageIndexByImageIndex(E._index)}function A(){return E._domEl}function r(e){return j.document.getPageFitMultiplier(void 0!==e?e:F())}function I(e,t){return(e=void 0===e?W.zoom:e)*r(t)}function s(){var e=he(F())||q.size;return{height:e.height,width:e.width}}
/**
     * Returns physical size of the image without client transformations applied(like view rotation)
     */function c(){var e=s();return 90===E._viewrotation||270===E._viewrotation?D(e):e}function O(e,t){return t=t||s(),{height:Math.round(t.height*I(e)),width:Math.round(t.width*I(e))}}function l(){var n=this;if(E._tiled){var o=0;return E.find("."+cn.atala_tile_column).first().find("img").each(function(e,t){Ut(this,n),o+=t.naturalHeight}.bind(this)),o}return E.prop("naturalHeight")}function u(){var e=this;if(E._tiled){var t=0;return E.find("."+cn.atala_tile_column).each(function(){Ut(this,e),t+=en(this).find("img").first().prop("naturalWidth")}.bind(this)),t}return E.prop("naturalWidth")}function V(e){var n=this,t=F(),s=q.vector&&(!M||!M.uri)?I():Math.min(I(),1),c=j.document.getPageRotation(t);if(e||s!==E._zoom||E._rotation!==c){var u=en.extend({atala_docurl:M?M.uri:E.documenturl,atala_doczoom:s,atala_thumbpadding:!1},S);if(c&&(u.atala_angle=c),W.jpeg&&(u.atala_jpeg=!0),W.tiling&&W.forcepagefit&&!E._loaded)if(de(B*q.dpi/96,t)){var o,i=ge(),a=he(t);o=a.width>a.height?i.width/a.width:i.height/a.height,K(s,o)||(s=o,u.atala_doczoom=s)}if(E._tiled=function(e,t){var n=!1,o=B*q.dpi/96;if(W.tiling&&de(o,e)){var i=ge(),a=he(e);a.height>o&&a.width>o&&(2<a.height*t/i.height||2<a.width*t/i.width)&&(n=!0)}return n}(t,s),E._tiled){var d=he(t),r=O(),l=ge(),h=Math.min(R,Math.floor(r.height/l.height)),g=Math.min(R,Math.floor(r.width/l.width)),f={width:Math.ceil(d.width/g),height:Math.ceil(d.height/h)};if(h!==E._tilesV||g!==E._tilesH){N.itch=!0;var p=A(),m=E;E=Z(),p.children().replaceWith(E),L(m),E.addClass(cn.atala_tiled_page_image);for(var v=0;v<g;v++){var _=Z(E);_.addClass(cn.atala_tile_column);for(var b=0;b<h;b++){var y=Z(_);y.attr("tile_index_h",v).attr("tile_index_v",b),y.width(f.width*s),y.height(f.height*s),y.addClass(cn.atala_page_loading);var x=en(new Image);x.css("display","none"),y.append(x)}}E._tilesH=g,E._tilesV=h}E.__tileRequests=[],E.__tilesArray=[];for(var w=0;w<g;w++)for(var z=0;z<h;z++)E.__tilesArray.push({x:w,y:z});var P={x:0,y:0},D=function(e,t){return Ut(this,n),Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)}.bind(this);E.__tilesArray.sort(function(e,t){return Ut(this,n),D(P,e)-D(P,t)}.bind(this)),E.__tilesArray.forEach(function(e){var t,n,o,i,a=e.x,r=e.y;switch(c){case 0:t=Math.ceil(a*f.width),n=Math.ceil(r*f.height),o=a<g-1?f.width:d.width-t,i=r<h-1?f.height:d.height-n;break;case 90:t=Math.ceil(r*f.height),n=Math.ceil((g-1-a)*f.width),o=r<h-1?f.height:d.height-t,i=0!==a?f.width:d.width-n;break;case 270:t=Math.ceil((h-1-r)*f.height),n=Math.ceil(a*f.width),o=0!==r?f.height:d.height-t,i=a<g-1?f.width:d.width-n;break;case 180:t=Math.ceil((g-1-a)*f.width),n=Math.ceil((h-1-r)*f.height),o=0!==a?f.width:d.width-t,i=0!==r?f.height:d.height-n;break;default:U("ImageError","Invalid rotation angle: "+c)}var l=en.extend(!0,{},u,{atala_tilestart:t+"x"+n,atala_pagesize:o+"x"+i});l.atala_doczoom=s,E.__tileRequests.push({type:"docpage",serverurl:W.serverurl,query:"?ataladocpage="+(null===M?E._index:void 0!==M.index?M.index:M),method:"GET",data:l,cancel:!1})}),E._reqzoom=s,E._reqangle=c,setTimeout(function(){Ut(this,n),N.itch=!1,function t(n,o){if(N.itch||E._reqzoom!==I()||E._reqangle!==j.document.getPageRotation(F())||void 0===E.__tileRequests[n]||void 0===E.__tilesArray[n])V();else{var e=E.__tileRequests[n],i=E.__tilesArray[n].x,a=E.__tilesArray[n].y,r=E.find('div[tile_index_h="'+i+'"][tile_index_v="'+a+'"]').find("img");r.attr("tile_index",n),r.attr("src",e.serverurl+e.query+"&"+en.param(e.data)),r[0].onload=function(){if(E){if(r.css("display","block"),r.parent().css({width:"auto",height:"auto"}),r.parent().removeClass(cn.atala_page_loading),0===n){var e=O();E.trigger({type:"pageresize",image:E,index:F(),width:e.width,height:e.height})}0===r.width()&&0===r.height()&&r.css({width:"auto",height:"auto"}),n<E.__tilesArray.length-1?t(n+1,o):H()}}}}(0,f)}.bind(this),0)}else{if(1<E._tilesV||1<E._tilesH){var T=A(),k=E;E=en(new Image),T.children().replaceWith(E),L(k),E.addClass(cn.atala_page_image),T.addClass(cn.atala_page_loading),E._tilesV=1,E._tilesH=1,E.__tilesArray=[]}var C={type:"docpage",serverurl:W.serverurl,query:"?ataladocpage="+(null===M?E._index:void 0!==M.index?M.index:M),method:"GET",data:u,cancel:!1,info:E};E._reqzoom=s,E._reqangle=c,At(C,H,H)}}}function H(){E._loaded||E._domEl.removeClass(cn.atala_page_loading),E._tiled&&N.zooming&&tt(),E._loaded=!0,E._zoom=E._reqzoom,E._rotation=E._reqangle;var e=F();if(0<=e){if(E._rotation!==j.document.getPageRotation(e))return void V();(E._viewrotation=0)<E.parent().length&&h(),w(E._viewrotation);var t=q.vector?I():Math.min(I(),1);p()&&E._zoom<t*i&&!K(E._zoom,t)&&f(!1)}b()}function L(e){E._loaded=e._loaded,E._zoom=e._zoom,E._rotation=e._rotation,E._prevzoom=e._prevzoom,E._scaledzoom=e._scaledzoom,E._binds=e._binds,E.documenturl=e.documenturl,E._index=e._index,E._size=e._size,E._viewrotation=e._viewrotation,E._tiled=e._tiled,E._page=e._page,E._reqzoom=e._reqzoom,E._domEl=e._domEl,E.dispose=g,E.zoom=f,E.needsZoom=p,E.getSize=s,E.getScaledSize=O,E.getFitZoom=I,E.getFitMultiplier=r,E.needsRotate=y,E.rotate=x,E.getDomElement=A,E.invalidate=P,E.naturalHeight=l,E.naturalWidth=u,E.on(a)}function d(e){e&&(e.removeAttr("width height"),e.css({width:"auto",height:"auto"}))}function h(){d(E);var e=E.naturalWidth()||0,t=E.naturalHeight()||0,n=e||E.width(),o=t||E.height(),i=s(),a=I(),r=!1;if(0!==n&&0!==o){E._size.width=Math.round(n/E._zoom),E._size.height=Math.round(o/E._zoom),90!==E._viewrotation&&270!==E._viewrotation||(E._size=D(E._size)),E._size.width===q.size.width&&E._size.height===q.size.height||K(E._size.width,i.width)&&K(E._size.height,i.height)||(r=!0,j.document.setPageSize(F(),E._size)),null===j.document.getPageSize(F())&&(r=!0,j.document.setPageSize(he,E._size)),W.forcepagefit?_():(E._zoom!==W.zoom||r||0!==E._viewrotation)&&v();var l=O();r&&E.trigger({type:"pagesizechanged",image:E,index:F(),width:E._size.width,height:E._size.height,dx:Math.round(l.width-i.width*a),dy:Math.round(l.height-i.height*a)}),E.trigger({type:"pageresize",image:E,index:F(),width:l.width,height:l.height})}}function g(){E.off(a),E._page=null,E=null}function f(e,t){p()&&!E._size.isEmpty()?("function"==typeof t&&o.push(t),E._prevzoom=E._reqzoom,e&&!N.loading?E._tiled?E.find("img").each(function(){var e=en(this);e.animate({height:Math.round(e.height()/E._reqzoom*I()),width:Math.round(e.width()/E._reqzoom*I())},{duration:T,easing:"easeOutQuad",complete:m,queue:!1})}):E.animate({height:Math.round(E._size.height*I()),width:Math.round(E._size.width*I())},{duration:T,easing:"easeOutQuad",complete:m,queue:!1}):(v(),m())):"function"==typeof t&&t.call(this,E)}function p(){if(!E._loaded&&!E._tiled)return!1;var e=!q.vector&&1===E._reqzoom&&1===E._prevzoom&&1<I(),t=K(E._reqzoom,I())||e;if(!t){var n=Math.abs(E._reqzoom*E._size.width-I()*E._size.width),o=Math.abs(E._reqzoom*E._size.height-I()*E._size.height);n<1&&o<1&&(t=!0)}return!t||!K(E._scaledzoom,I())}function m(){var e=I();E.trigger({type:"pagezoom",index:F(),height:Math.round(E._size.height*e),width:Math.round(E._size.width*e),prevzoom:E._prevzoom,zoom:e}),0===N.prpr?V():b()}function v(){var e,t,n,o=O(void 0,c()),i=O(),a=E.naturalWidth()||0,r=E.naturalHeight()||0,l=a&&Math.abs(a-o.width)/o.width<.01,s=r&&Math.abs(r-o.height)/o.height<.01;l&&s||(E._tiled&&0!==r&&0!==a?E.find("img").each(function(){var e=en(this),t=e.prop("naturalHeight"),n=e.prop("naturalWidth");0!==t&&0!==n&&(e.height(t*I()),e.width(n*I()))}):(E.height(o.height),E.width(o.width))),E._domEl.width(i.width),E._domEl.height(i.height),E._scaledzoom=I(),E._tiled?z(E._viewrotation):w(E._viewrotation),e=F(),t=i.width,i.height,null!=(n=We(e))&&null!=n._num&&n._num.css({left:t-20,right:0})}function _(){var e,t=function(e){var t=1;e=e||E._size;var n={width:W.forcepagesize.width*W.zoom,height:W.forcepagesize.height*W.zoom};(n.width<1||n.height<1)&&(n.width=q.size.width*W.zoom,n.height=q.size.height*W.zoom);t=e.width/n.width>e.height/n.height?n.width/e.width:n.height/e.height;return t}();e=t/W.zoom,j.document.setPageFitMultiplier(F(),e),v()}function b(){0<o.length&&function(e){var t=Array.prototype.slice.call(arguments,1);for(;e.length;)e.shift().apply(this,t)}(o,E)}function y(){var e=j.document.getPageRotation(F());return 0===E._viewrotation&&e!==E._rotation||0!==E._viewrotation}function x(e){if("function"==typeof e&&o.push(e),y()){var t=j.document.getPageRotation(F());if(n=j.document.getPageRotation(F()),(0===E._viewrotation&&n!==E._rotation||0!==E._viewrotation&&(E._viewrotation+E._rotation)%360!==n)&&E&&E._page&&(t=(360+t-E._rotation)%360,!E._tiled&&E._loaded?(w(t),h()):E._tiled&&(z(t),function(){d(E);var e=j.document.getPageSize(F());if(90===E._viewrotation||270===E._viewrotation){var t=D(e);E._size.width=t.width,E._size.height=t.height,j.document.setPageSize(F(),E._size)}W.forcepagefit?_():E._zoom===W.zoom&&0===E._viewrotation||v()}(),0!==(i=t)&&E.find("img").each(function(){var e=en(this),t={width:e.width(),height:e.height()};90!==i&&270!==i||(t=D(t));var n=e.parent();0!==t.width&&0!==t.height&&(n.width(t.width),n.height(t.height)),n.addClass(cn.atala_page_loading);var o=en(new Image);o.css("display","none"),n.children().replaceWith(o)}))),0===N.prpr&&E._loaded)return void V()}var i,n;b()}function w(e){var t=O(void 0,c()),n=0,o=0,i="";90!==e&&270!==e||(n=(t.height-t.width)/2,o=(t.width-t.height)/2,t=D(t)),0!==e?(i+=" translate("+n+"px,"+o+"px)",i+="rotate("+e+"deg)",E.css(pn(i))):E.css(pn("")),A().css({width:t.width,height:t.height}),E._viewrotation=e}function z(e){var t=O(void 0,c());90!==e&&270!==e||(t=D(t)),A().css({width:t.width,height:t.height}),E._viewrotation=e}function P(e,t){"function"==typeof e&&(t=e,e={}),(S=en.extend(!0,{},e)).atala_cb=Math.floor(1e9*Math.random()),"function"==typeof t&&o.push(t),V(!0)}function D(e){var t=e.width;return e.width=e.height,e.height=t,e}return E._binds=a,E.documenturl=W.documenturl,E._index=M?M.mapsto:e,E._loaded=!1,E._size={width:0,height:0,isEmpty:function(){return 0===this.width&&0===this.height}},E._zoom=-1,E._prevzoom=E._zoom,E._scaledzoom=-1,E._rotation=0,E._viewrotation=0,E._tiled=!1,E._tilesV=1,E._tilesH=1,E.dispose=g,E.zoom=f,E.needsZoom=p,E.getSize=s,E.getScaledSize=O,E.getFitZoom=I,E.getFitMultiplier=r,E.needsRotate=y,E.rotate=x,E.getDomElement=A,E.invalidate=P,E.naturalHeight=l,E.naturalWidth=u,function(){E.on(a);var e=W.pageborderwidth,t={bottom:0,top:0,right:0,left:0};E._loaded=!1,E._reqzoom=-1,W.direction===an.Vertical&&(t.bottom=W.pagespacing);W.direction===an.Horizontal&&(t.right=W.pagespacing);var n=A();W.showpageborder&&n.css({"border-bottom":e+"px solid black","border-right":e+"px solid black","border-top":e+"px solid silver","border-left":e+"px solid silver","margin-bottom":t.bottom+"px","margin-right":t.right+"px"});n.css({display:"inline-block"}),n.addClass(cn.atala_page_loading),V()}(),E}function G(e,t){var n="overflow:scroll; position:absolute; background-color:Transparent;",o=Z(e);o.css({position:"absolute",display:"none","background-color":"white"});var i=null,a=!1;function r(){i._tooltip.hide(),q.number===i._pagenum||Ne(i._pagenum)||Se(i._pagenum),Ct()}return t===an.Horizontal?(nn.Firefox&&(n=n.replace("overflow","overflow-x")),(i=en('<div style="'+n+'bottom:0px; left:0px; width:100%;z-index:10"></div>').appendTo(e))._tray=en('<div style="height:1px;"></div>').appendTo(i)):(nn.Firefox&&(n=n.replace("overflow","overflow-y"),n+="width:"+(function(){var e=Z(en("body")),t=Z(e);e.css({width:"50px",height:"50px",overflow:"hidden",position:"absolute",visibility:"hidden"}),t.css({width:"100px",height:"100px"});var n=e.width();e.css({"overflow-y":"scroll"});var o=n-e[0].clientWidth;return en(e).remove(),o}()+1)+"px;",a=!0),(i=en('<div style="'+n+'top:0px; right:0px; height:100%;z-index:10"></div>').appendTo(e))._explicitSize=a,i._tray=en('<div style="width:1px;"></div>').appendTo(i)),Q(i),i._ratio=1,i.ScrollDirection=t,i._tooltip=o,i._pagenum=-1,i._scrollSize=0,i.pageNum=function(e){i._pagenum=e},i.scrollbarHeight=function(){return i.height()-i[0].clientHeight},i.scrollSize=function(e){i._scrollSize=e},i.ratio=function(e){i._ratio=e},i.on({scroll:function(){if(!i.propagationPaused()){clearTimeout(i._tooltip._timeout),y.scroller.stop(),y.scroller.pauseEventPropagation(!0);var e={};i.ScrollDirection===an.Vertical?(y.scroller.scrollTop(i[0].scrollTop*i._ratio),i._pagenum=jt()+1,e.right=i.outerWidth()+10+"px",e.top=16+Math.round((i[0].offsetHeight-48)/i[0].scrollHeight*i[0].scrollTop)+"px"):i.ScrollDirection===an.Horizontal&&(y.scroller.scrollLeft(i[0].scrollLeft*i._ratio),i._pagenum=jt()+1,e.bottom=i.outerHeight()+10+"px",e.left=16+Math.round((i[0].offsetWidth-48)/i[0].scrollWidth*i[0].scrollLeft)+"px"),i.ScrollDirection===W.direction&&W.showpagenumbertooltip&&("none"===i._tooltip.css("display")&&(i._tooltip.css(e),i._tooltip.show()),W.showpagenumbertooltip&&i._tooltip.html("Page "+i._pagenum),i._tooltip._timeout=setTimeout(r,1e3))}}}),i}function Y(e){e&&e._tooltip&&(clearTimeout(e._tooltip._timeout),e._tooltip.hide())}function Q(t){var n={scroll:function(){t.off(n),t.resumeEventPropagation()}};t._pauseEP=0,t.propagationPaused=function(){return 0<t._pauseEP},t.pauseEventPropagation=function(e){t._pauseEP++,e&&t.on(n)},t.resumeEventPropagation=function(){0<t._pauseEP&&t._pauseEP--}}function J(e){var t=ge(),n=te(0,e);n.width=0<q.smallest.width&&q.smallest.width<n.width?q.smallest.width:n.width,n.height=0<q.smallest.height&&q.smallest.height<n.height?q.smallest.height:n.height;var o,i=Math.ceil(t.width/n.width)+2,a=Math.ceil(t.height/n.height)+2;return W.direction===an.Vertical?o=a:W.direction===an.Horizontal&&(o=i),o}function K(e,t){return t<e+.001&&e-.001<t}function $(){return 0!==q.size.width?W.minwidth/q.size.width:1}function ee(){return 0!==q.size.width?W.maxwidth/q.size.width:1}function te(e,t,n){if(j.document.getPageCount()<=0)return{width:0,height:0};if(n=void 0===n||n,N.newpagedivsize){var o={width:N.newpagedivsize.width,height:N.newpagedivsize.height},i=W.showpageborder&&n?2*W.pageborderwidth:0,a=(t||W.zoom)/N.newpagedivfullzoom;return o.height=Math.round(o.height*a)+i,o.width=Math.round(o.width*a)+i,o}return ne(e,t||W.zoom,W.showpageborder&&n)}function ne(e,t,n){var o,i=en.extend({},he(e)),a=n?2*W.pageborderwidth:0;return t*=(o=e,j.document.getPageFitMultiplier(o)),i.height=Math.round(i.height*t)+a,i.width=Math.round(i.width*t)+a,i}function oe(e,t){return le(null,e,t).index}function ie(e,t){for(var n={left:0,top:0},o=e;null!=o&&o!==t;o=o.offsetParent)n.left+=o.offsetLeft,n.top+=o.offsetTop;return n}var ae={height:0,isEmpty:function(){return 0===this.width&&0===this.height},width:0,zero:function(){this.width=0,this.height=0},zoom:1};function re(){if(ae.isEmpty()||ae.zoom!==W.zoom){var e=le(null,null,null,W.zoom);ae.height=e.height,ae.width=e.width,ae.zoom=W.zoom}return ae}function le(e,t,n,o){return se(0,e,t,n,o)}function se(e,t,n,o,i){var a={height:0,width:0,index:0};if(W.direction===an.Vertical)for(var r=null,l=0;l<1&&l<0&&(a.height+(r=te(l,i).height)<=o||null==o);l++)a.height+=r+W.pagespacing,a.index++;else if(W.direction===an.Horizontal)for(var s=null,c=0;c<1&&c<0&&(a.width+(s=te(c,i).width)<=n||null==n);c++)a.width+=s+W.pagespacing,a.index++;return 1<=a.index&&(a.index=0),a}function ce(){return 1}function ue(e,t){var n=he(e);return(ut(e)+(t||0))%180==0?n:{width:n.height,height:n.width}}function de(e,t){return j.document.canBeTiled(e,t)}function he(e){var t=j.document.getPageSize(e);return t||q.size}function ge(){return{width:y.scrollV?y.main.width()-y.scrollV.outerWidth():y.main.width(),height:y.scrollH?y.main.height()-y.scrollH.outerHeight():y.main.height()}}function fe(e,t){var n={status:"fail",started:!1,reason:e};return"function"==typeof t&&t.call(),n}function pe(e,t,n,o,i,a){var r=ie(e,t);return r.left<=i&&r.left+e.clientWidth>=n&&r.top<=a&&r.top+e.clientHeight>=o}function me(e){W.showstatus&&y.status&&y.status.html(e),Wt({type:"statusmessage",message:e})}function ve(e,t){var n;if(1===e.length&&"object"==typeof e[0])n=e[0];else if("string"==typeof e[0]){n={};var o=null;3===e.length?o=e[2]:2===e.length&&(o=e[1]);for(var i=-1<e[0].indexOf(" ")?e[0].split(" "):[e[0]],a=0;a<i.length;a++)n[i[a]]=o}for(var r in n)if(n.hasOwnProperty(r)){var l=null;if(r in d?l=d:c&&r in c.annotations.events?l=c.annotations.events:c&&r in c.forms.events?l=c.forms.events:c&&r in c.document.events&&(l=c.document.events),null==l&&(l=d),null==l[r])t&&(l[r]=[n[r]]);else if(t)l[r].push(n[r]);else if(n[r])for(var s=0;s<l[r].length;s++)l[r][s]===n[r]&&l[r].splice(s,1);else l[r].length=0}}function _e(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function be(e,t,n,o,i){if(null==i&&"function"==typeof o&&(i=o,o=null),e=null==e?y.scroller.scrollLeft():e,t=null==t?y.scroller.scrollTop():t,W.direction===an.Horizontal){if(e>y.viewport.width()){var a=re();if(e<a.width&&0<y.content.width()){var r=a.width-(y.edges[0].width()+y.content.width());y.edges[1].width(r)}}}else if(W.direction===an.Vertical&&t>y.viewport.height()){var l=re();if(t<l.height&&0<y.content.height()){var s=l.height-(y.edges[0].height()+y.content.height());y.edges[1].height(s)}}y.scroller.stop(),!n||N.loading||N.scrollPos.x===e&&N.scrollPos.y===t?(y.scroller.scrollLeft(e),y.scroller.scrollTop(t),"function"==typeof i&&i.call()):en.when(y.scroller.animate({scrollLeft:e,scrollTop:t},{duration:o||u,easing:"easeOutQuad",queue:!1})).done(i)}function ye(){if(y.scrollH&&y.scrollV){if(y.scrollH.pauseEventPropagation(),y.scrollV.pauseEventPropagation(),W.direction===an.Vertical){xe(y.scrollH,"width");var e=Math.round(le(0).height+te(jt()).height);nn.Firefox&&(e+=Math.round(y.scrollH.scrollbarHeight())),y.scrollV.scrollSize(e-(y.scrollV.height()-y.scrollH.scrollbarHeight()-1)),3e4<e?(y.scrollV.ratio(e/(3e4-(y.scrollV.height()-y.scrollH.scrollbarHeight()-1))),y.scrollV._tray.height(3e4)):(y.scrollV._tray.height(e),y.scrollV.ratio(1)),we(y.scrollV)}else if(W.direction===an.Horizontal){xe(y.scrollV,"height");var t=Math.round(le(0).width+te(jt()).width);y.scrollH.scrollSize(t),3e4<t?(y.scrollH.ratio(t/(3e4-(y.scrollH.width()-y.scrollV.width()-1))),y.scrollH._tray.width(3e4)):(y.scrollH._tray.width(t),y.scrollH.ratio(1)),we(y.scrollH)}y.scrollV._max=Math.max(y.scrollV._tray.height()-y.scrollV.height(),0)+1,y.scrollH._max=Math.max(y.scrollH._tray.width()-y.scrollH.width(),0)+1,y.scrollH.resumeEventPropagation(),y.scrollV.resumeEventPropagation()}}function xe(e,t){if(e&&y.pageDivs.length){for(var n=Math.round(q.size[t]*W.zoom),o=0;o<1;o++)null!=y.pageDivs[o]._index&&(n=Math.max(te(y.pageDivs[o]._index)[t],n));e._tray[t](n),e.scrollSize(n-e[t]()),we(e),e.ratio(1)}}function we(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}function ze(e){if(!N.zooming&&!N.scrollBuffer&&y.pageDivs.length){var t=(new Date).getTime(),a=y.scroller[0].scrollLeft,r=y.scroller[0].scrollTop;if(N.loading||rt(),Ae(q.number),!y.scroller.propagationPaused()&&y.scrollH&&y.scrollV){var n=Math.round(a/y.scrollH._ratio),o=Math.round(r/y.scrollV._ratio);n!==y.scrollH.scrollLeft()&&(y.scrollH.pauseEventPropagation(!0),y.scrollH.scrollLeft(n)),o!==y.scrollV.scrollTop()&&(y.scrollV.pauseEventPropagation(!0),y.scrollV.scrollTop(o))}Wt({type:"scroll",x:a,y:r,dx:a-N.scrollPos.x,dy:r-N.scrollPos.y}),e&&(N.scrollTimeout&&clearTimeout(N.scrollTimeout),N.scrollTimeout=setTimeout(function(){var e,t,n,o,i;e=a,t=r,n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop,i=n===N.scrollPos.x&&o===N.scrollPos.y,e===N.scrollPos.x&&t===N.scrollPos.y&&i?(Ct(),N.scrollTimeout=null,N.loading||rt()):i||(ze({}),N.scrollTimeout=null)},500),N.scrollPos.x=y.scroller[0].scrollLeft,N.scrollPos.y=y.scroller[0].scrollTop,N.scrollPos.t=t),N.scrollBuffer=e?setTimeout(Pe,50):null}}function Pe(){null!==N.scrollBuffer&&(clearTimeout(N.scrollBuffer),N.scrollBuffer=null)}function De(){if(W.direction===an.Horizontal){var e=y.pageDivs.length?q.size.height*W.zoom:0;W.thumbpadding&&"number"==typeof W.thumbpadding&&(e+=2*W.thumbpadding),y.edges[0].height(e),y.edges[1].height(e)}}function Te(e,t){t=0;var n=le(0),o=t<1?te(t):{width:0,height:0},i=t<0?te(jt()):{width:0,height:0},a=se();a.width+=o.width,a.height+=o.height;var r=se();if(r.width+=i.width,r.height+=i.height,W.direction===an.Vertical)if(y.edges[0].height(n.height),1<=t+1){var l=n.height+a.height+r.height;y.scrollH&&l>y.scroller[0].clientHeight&&y.content.width()<=y.scroller[0].clientWidth?y.edges[1].height(y.scrollH.scrollbarHeight()):y.edges[1].height(0)}else y.edges[1].height(r.height),nn.Chrome&&y.content.height("");else if(W.direction===an.Horizontal)if(y.edges[0].width(n.width),1<=t+1){var s=n.width+a.width+r.width;y.scrollV&&s>y.scroller[0].clientWidth&&y.content.height()<=y.scroller[0].clientHeight?y.scrollV._explicitSize?y.edges[1].width(y.scrollV.height()<y.scrollV._tray.height()?y.scrollV.width():0):y.edges[1].width(y.scrollV.width()):y.edges[1].width(0)}else y.edges[1].width(r.width),y.edges[1].height(1)}function ke(){return N.activepage}function Ce(e,t){e=e||1,Ee(jt()-e,t)}function Me(e,t){e=e||1,Ee(jt()+e,t)}
/**
   * Scrolls the viewer to the given page index and executes the callback when finished.
   * @param {number} index - Index of the page to show.
   * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
   *  @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPage
   */function Ee(e,t){Se(e+1,t)}
/**
   * Scrolls the viewer to the given page number and executes the callback when finished.
   * @param {number} pageNumber - Number of the page to show. Note that page number is expected 1-based.
   * @param {NotificationCallback} [callback]: function to execute after this operation is done
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPageNumber
   * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer#showPage|showPage} instead.
   */function Se(e,t){e=Math.max(1,e),Fe(e=Math.min(j.document.getPageCount(),e),!1,t)}function Fe(e,t,n){var o=j.document.getPageCount(),i=e-1;if(0===N.prpr&&0<o){if(Re(),W.direction===an.Vertical){var a=le(0).height;y.edges[0].height(a)}else if(W.direction===an.Horizontal){var r=le(0).width;y.edges[0].width(r)}Te(0,null),De(),Ie();for(var l=0;l<y.pageDivs.length;l++)He(y.pageDivs[l],null,i+l);y.content.append(y.pageDivs[0]),Ct(),Ae(i+1),rt(!1,function(){ye(),Be(),"function"==typeof n&&n.call()})}else fe("paused",n)}function Ae(e){var t=j.document.getPageCount();if(0<e&&e<=t){if(q.number!==e||q.numberoutof!==t){if(y.pageLabel.html(e+" / "+t),q.number!==e){q.number=e;for(var n=0;n<y.pageDivs.length;n++){var o=y.pageDivs[n];o._index===e-1?o.addClass(cn.atala_active_page):o.removeClass(cn.atala_active_page)}Wt({type:"pagenumberchanged",number:q.number})}q.numberoutof!==t&&(q.numberoutof=t)}}else y.pageLabel.html(""),y.viewport.find("."+cn.atala_active_page).removeClass(cn.atala_active_page),q.numberoutof=0}function Ie(){for(var e=y.pageDivs.length-1;0<=e;e--)Oe(y.pageDivs[e])}function Oe(e){nn.Explorer&&document.activeElement&&e.has(document.activeElement).length&&y.scroller.focus(),W.allowannotations&&(nn.Firefox||nn.Edge)&&j.annotations.__clearAllSelection(e),e.detach(),null!=e._img&&(e._img._page=null,e._img.getDomElement().detach(),e._img=null),Wt({type:"pagerecycled",index:e._index,page:e}),e._index=-1,e.removeAttr(un.atala_page_index)}function Ve(e){Oe(e),e._index=-1,e.removeAttr(un.atala_page_index),e._img=null,e.remove()}function He(t,e,n,o){if(t._index===n&&t._img===e&&!o)return!1;if(o&&!t.nullinserted&&n<0)return!1;if(t._index=n,t.attr(un.atala_page_index,n),n>=j.document.getPageCount())return t.hide(),!1;if(t._img&&t._img!==e&&(t._img._page=null,0<t.has(t._img.getDomElement()).length&&t._img.getDomElement().detach(void 0,!0)),t._rubberband&&t._rubberband.reset(),t._img=e,t._img&&(t._img._page=t),t.css({display:W.direction===an.Horizontal?"inline-block":"block"}),W.showpagenumber&&(t.css({position:"relative"}),t._num||(t._num=en('<div style="position:absolute; right:20px; bottom:16px;z-index:1"/>'),t._num.addClass(cn.atala_page_number),t.append(t._num)),t._num.text(t._index+1)),t._img&&t._img._binds&&(t._img._binds.pageresize||(t._img._binds.pageresize=function(e){Wt({type:"pageresize",page:e.image._page,image:e.image,index:e.image._page?e.image._page._index:j.document.getPageIndexByImageIndex(e.image._index),width:e.width,height:e.height})},t._img.on({pageresize:t._img._binds.pageresize})),t._img._binds.pagesizechanged||(t._img._binds.pagesizechanged=function(e){Wt({type:"pagesizechanged",page:t,image:e.image,index:e.index,width:e.width,height:e.height,dx:e.dx,dy:e.dy})},t._img.on({pagesizechanged:t._img._binds.pagesizechanged}))),t._img){var i=t._img.getDomElement();t.append(i),t._img.trigger({type:"inserted",page:t}),t._img._loaded||(t.nullinserted?t._img.css({width:t.width(),height:t.height()}):Le(t._img,t._index)),N.newpagedivsize||t.css({width:"",height:""}),t.nullinserted=!1}else t.nullinserted=!0,N.newpagedivsize||Le(t,t._index);return Wt({type:"pageshown",page:t,index:t._index}),!0}function Le(e,t){var n=te(t,null,!1);e.css({width:n.width,height:n.height})}function Re(){N.prpr++}function Be(){0!==N.prpr&&(N.prpr--,0===N.prpr&&ze())}
/**
   * Silently reloads the specified page if it has already been loaded before. Not creates new page.
   * @private
   * @return {object} page reload promise
   */
function je(e,t){var n=en.Deferred();0<=e.cacheIndex&&y.loadedImgs[e.cacheIndex]?y.loadedImgs[e.cacheIndex].invalidate(t,function(){n.resolve()}):n.resolve();return n.promise()}function qe(e,t,n){"function"==typeof t&&(n=t,t=void 0);var o=j.document.getPageDefinition(e);if(o){if(o.cacheIndex<0||!y.loadedImgs[o.cacheIndex]){var i=N.nextImageCacheIndex++;o.cacheIndex=i,j.document.setPageCacheIndex(e,i),y.loadedImgs[i]=X(o.index,o.ref,t,function(e){e&&((y.loadedImgs[i]=e)._cacheIndex=i,j.memory.allocate(e)),"function"==typeof n&&n.call()}),W.allowtext&&j.text&&j.text.ensurePageTextLoaded(e)}else"function"==typeof n&&n.call();return y.loadedImgs[o.cacheIndex]}}function Ne(e){var t=We(e);if(t){var n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop;return pe(t[0],y.scroller[0],n,o,n+y.scroller[0].clientWidth,o+y.scroller[0].clientHeight)}return!1}function We(e){for(var t=null,n=0;n<y.pageDivs.length&&null===t;n++)y.pageDivs[n]._index===e&&(t=y.pageDivs[n]);return t}function Ue(e,a,r,l,s){var c=this;l&&"function"==typeof l&&(s=l,l=!1);var t=function(){Ut(this,c);var e,t=y.pageDivs[0];if(t){var n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop;if((e=ie(t[0],y.scroller[0])).left+=a.x,e.top+=a.y,!l&&e.left>=n&&e.left<=n+n+y.scroller[0].clientWidth&&e.top>=o&&e.top<=o+y.scroller[0].clientHeight)return void(s&&s())}else(e=le(0)).left=e.width+a.x,e.top=e.height+a.y;var i={x:y.scroller[0].clientWidth/2,y:y.scroller[0].clientHeight/2};Ze(r,ln.BottomLeft)?(i.x=y.scroller[0].clientWidth,i.y=y.scroller[0].clientHeight):Ze(r,ln.TopLeft)&&(i.x=0,i.y=0),be(e.left-i.x,e.top-i.y,!0,s)}.bind(this);e!==jt()?Fe(e+1,0,t):t()}function Ze(e,t){return e&&t&&e.x===t.x&&e.y===t.y}var Xe=null;function Ge(){Xe&&clearTimeout(Xe),Xe=setTimeout(function(){Wt("documentchanged")},200)}function Ye(){y.scroller.stop(),y.scroller.pauseEventPropagation(),Re()}function Qe(){ye(),0<y.pageDivs.length&&Ne(jt())&&Te(y.pageDivs[0]._index),De(),y.scroller.resumeEventPropagation(),Be()}function Je(){N.zooming=!0,Ye(),Wt("zoomstarted")}function Ke(e){var t,n,o,i,a,r,l;e=Math.min(e,ee()),e=Math.max(e,$()),t=e,n=!1,i=le(q.number,null,null),a=le(q.number,null,null,t),r=(y.scroller.scrollLeft()-i.width)/W.zoom*t,l=(y.scroller.scrollTop()-i.height)/W.zoom*t,be(a.width+r,a.height+l,n,T,o),W.zoom=e,rt(!1),it(e,!1)}function $e(){N.zooming=!1,Qe(),Wt({type:"zoomchanged",zoom:W.zoom})}
/**
   * Asynchronously zooms the viewer to the given zoom over the default zoom duration
   * @param {number} zoom - Desired zoom level to zoom to.
   * @param {NotificationCallback} [callback] - function to execute after the zoom is finished animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoom
   */function et(e,n){var o=this;if(N.zooming)fe("zooming",n);else if(N.zooming=!0,Ye(),Wt("zoomstarted"),e!==W.zoom){e=Math.min(e,ee()),e=Math.max(e,$());var t=le(0,null,null),i=le(0,null,null,e),a=(y.scroller.scrollLeft()-t.width)/W.zoom*e,r=(y.scroller.scrollTop()-t.height)/W.zoom*e;W.zoom=e,rt(!0,function(){var t=this;Ut(this,o),it(e,!0,function(){var e=this;Ut(this,t),tt(),be(i.width+a,i.height+r,!1,T,function(){Ut(this,e),y.scrollH&&y.scrollH.scrollLeft(y.scroller.scrollLeft()),y.scrollV&&y.scrollV.scrollTop(y.scroller.scrollTop()),null!=n&&n()}.bind(this))}.bind(this))}.bind(this))}else tt(),"function"==typeof n&&n.call()}function tt(){N.zooming=!1,Qe(),Wt({type:"zoomchanged",zoom:W.zoom})}function nt(e,t){et(W.zoom+(e?-1:1)*W.zoom*.3,t)}function ot(){y.edges[0]._z=W.zoom}function it(e,t,n){if(0<y.edges.length){n="function"==typeof n?fn([ot,n]):ot;var o=W.direction===an.Vertical,i=le(0,null,null,e),a=o?i.height:i.width;if(t&&!N.loading){var r=o?{height:a}:{width:a};y.edges[0].animate(r,{duration:T,easing:"easeOutQuad",complete:n,queue:!1})}else o?y.edges[0].height(a):y.edges[0].width(a),"function"==typeof n&&n.call();at()}}function at(c){setTimeout(function(){var e=en("<canvas/>");c=c||W.zoom;var t=W.direction===an.Vertical,n=N.newpagedivsize?N.newpagedivsize:{width:q.size.width*c,height:q.size.height*c},o=Math.max(1,W.pagespacing);e[0].width=1*(n.width+o),e[0].height=1*n.height;var i=e[0].getContext("2d");i.lineWidth=W.pageborderwidth,W.backcolor&&(i.fillStyle=W.backcolor);for(var a=0;a<1;++a){var r=t?1+a*n.width:1,l=t?1:1+a*n.height;i.strokeRect(r,l,n.width-2,n.height-2),W.backcolor&&i.fillRect(r+i.lineWidth,l+i.lineWidth,n.width-2*(1+i.lineWidth),n.height-2*(1+i.lineWidth))}var s={backgroundImage:"url("+e[0].toDataURL()+")",backgroundSize:"auto auto",backgroundRepeat:t?"repeat-y":"repeat-x"};y.edges[0].css(s),y.edges[1].css(s)},0)}function rt(e,t){for(var n=0,o=!0,i=function(){if(--n<=0){if(W.direction===an.Horizontal){var e=re().width;y.spacer||(y.spacer=Z(),y.spacer.css({position:"absolute",top:"-1px",height:"1px"}),y.viewport.append(y.spacer)),y.spacer.width(e)}"function"==typeof t&&t.call(),0===N.prpr&&(nn.Safari||nn.Chrome)&&y.edges[1].hide().show()}},a=0;a<y.pageDivs.length;a++){if(y.pageDivs[a]._img)(y.pageDivs[a]._img.needsZoom()||y.pageDivs[a]._img.needsRotate())&&(o=!1,n++,y.pageDivs[a]._img.needsRotate()?y.pageDivs[a]._img.rotate(i):y.pageDivs[a]._img.needsZoom()&&y.pageDivs[a]._img.zoom(e,i))}o&&i.call()}
/**
   * Asynchronously zooms the viewer to fit to a page.
   * @param {Atalasoft.Utils.Fitting} fit - Type of fitting to fit the page to.
   * @param {number} pageNumber - Page number to fit to.  Note, that it's 1-based.
   * @param {NotificationCallback} callback - Function to execute after the fit is done animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function fit
   */function lt(e,t,n){null!=t?"function"==typeof t&&(n=t,t=q.number):t=q.number;var o=st(e,t-1),i=o.zoom,a=rn.Width===o.fit&&an.Vertical===W.direction,r=rn.Height===o.height;a&&be(0,null,!1),r&&be(null,0,!1),et(i,n)}function st(e,t){var n,o,i=(n=ge(),o=W.showpageborder?2*W.pageborderwidth:0,{width:n.width-o,height:n.height-o}),a=ne(t,1,!1);0!==a.width&&0!==a.height||(e=null);var r=W.zoom;switch(e){case rn.None:break;case rn.Best:e=a.width/i.width>a.height/i.height?(r=i.width/a.width,rn.Width):(r=i.height/a.height,rn.Height);break;case rn.Height:r=i.height/a.height;break;case rn.Width:r=i.width/a.width;break;default:r=1,e=rn.None}return{zoom:r,fit:e}}function ct(e){return W.zoom*j.document.getPageFitMultiplier(e)}function ut(e){return j.document.getPageRotation(e)}function dt(e,t){t=t||0;var n=ut(e),o=ct(e),i=ue(e,t),a=tn.matrix();a.scale(o,o,0,0),a.rotate(n+t,0,0);var r,l,s=(r=a,l={x:i.width,y:i.height},{x:r.x(l.x,l.y),y:r.y(l.x,l.y)}),c=Math.min(0,s.x),u=Math.min(0,s.y),d=a.invert(),h=d.x(-c,-u),g=d.y(-c,-u);return a.translate(h,g),a}function ht(e){var t=en.data(e.currentTarget,"_config"),n=en.data(e.currentTarget,"_annoConfig");!n&&t&&(n={type:t.icon,rotatable:W.showrotatetools}),n&&(j.mouseTool.setTool(on.None,on.None),j.annotations.drawAnnotation(n,!1,ft,gt))}function gt(){j.mouseTool.setTool(on.Pan,on.None)}function ft(){j.mouseTool.setTool(on.Pan,on.None)}
/**
   * Checks whether annotations support is enabled.
   * @private
   */function pt(){return!1===W.allowannotations&&U("InitError",'The "allowannotations" property in the WebDocumentViewer config is set to false.'),W.allowannotations}function mt(){for(var e=0;e<y.pageDivs.length;e++)y.pageDivs[e]._draw.toFront()}function vt(){for(var e=0;e<y.pageDivs.length;e++)y.pageDivs[e]._draw.reset()}function _t(e,t,n){if(e){if(N.loading=!0,Ie(),q.size.width=e.pagewidth,q.size.height=e.pageheight,q.count=e.pagecount,q.buffer=W.pagebuffersize,q.dpi=e.dpi,q.vector=!0===e.vector,W.allowannotations=n.allowannotations,W.allowforms=n.allowforms,W.allowtext=n.allowtext,W.documenturl=n.documenturl,W.annotationsurl=n.annotationsurl,W.formsurl=n.formsurl,j.document.__linkChanges(t),j.annotations&&(j.annotations.clear(),j.annotations.loadAnnotations(e)),j.forms&&(j.forms.clear(),e.forms&&j.forms.loadForms(e)),j.text&&j.text.search(""),N.zooming=!1,e.zoom)W.zoom=e.zoom;else{var o=st(W.fitting,1);W.zoom=o.zoom}zt(e.pagenumber||0),j.mouseTool.setTool(W.mousetool.type?W.mousetool.type:on.Pan,on.None),at(),N.loading=!1,rt(),V=t.__getSelectedPagesIndices,Wt({type:"activedocumentchanged"})}}function bt(e,t){t&&Ot(!0);for(var n=0;n<e._controllers.document.getPageCount();++n){var o=e._controllers.document.getPageDefinition(n,s);o&&0<=o.cacheIndex&&y.loadedImgs[o.cacheIndex]&&(j.memory.deallocate(y.loadedImgs[o.cacheIndex]),y.loadedImgs[o.cacheIndex].dispose(),y.loadedImgs[o.cacheIndex].remove(),y.loadedImgs[o.cacheIndex]=void 0)}}function yt(e,o){N.loading=!0;var t={atala_docurl:W.documenturl,atala_pagebuffer:W.pagebuffersize,atala_minwidth:W.minwidth};null!=e&&("function"==typeof e&&(o=e,e=null),en.extend(t,e)),At({type:"docinfo",serverurl:W.serverurl,query:"?ataladocinfo=",method:"GET",data:t,cancel:!1,info:{pagewidth:-1,pageheight:-1,pagecount:-1}},function(e){xt(e,o)},function(e,t,n){!function(e,t,n,o){if(e.responseText){var i=e.responseText.substr(e.responseText.indexOf("</html>")+7);0<=i.indexOf("\x3c!--")?0<(i=i.replace("\x3c!--","").replace("--\x3e","")).length&&(n="<pre>"+i+"</pre>"):0<e.responseText.indexOf("web.config")&&0<e.responseText.indexOf("customErrors")&&(n+=": web.config customErrors attribute has disabled remote error messages.")}U("DocumentLoadError",n),"function"==typeof o&&o.call(void 0,n)}(e,0,n,o)})}function xt(t,n){var e,o;t&&!1!==t.licensed?(q.size.width=t.pagewidth,q.size.height=t.pageheight,q.count=t.pagecount,q.buffer=W.pagebuffersize,q.dpi=t.dpi,q.vector=!0===t.vector,q.caption=t.thumbcaptionformat||(W.showthumbcaption?"{0}":""),ae.zero(),j.memory.clearEntries(),j.memory.colorDepth=t.colordepth,j.memory.pageSize={width:t.pagewidth,height:t.pageheight},Wt({type:"documentinfochanged",info:{count:q.count,dpi:q.dpi,size:{height:q.size.height,width:q.size.width},vector:q.vector},customData:t.customData}),j.text&&(j.text.clear(),t.text&&j.text.loadText(t)),N.loading&&(W.zoom=1,L(),be(0,0),y.scrollV&&y.scrollV.pageNum(1),Ae(1),lt(W.fitting,1,function(){De(),Te(0,y.pageDivs.length-1);for(var e=0;e<y.pageDivs.length&&e<q.count;e++)He(y.pageDivs[e],null,e);y.content.append(y.pageDivs[0]),0<y.pageDivs.length&&y.pageDivs[0].addClass(cn.atala_active_page),t.layers&&t.layers.length?j.annotations.loadAnnotations(t):W.annotationsurl&&j.annotations&&j.annotations.clear(),j.forms&&(j.forms.clear(),t.forms&&j.forms.loadForms(t)),j.mouseTool.setTool(W.mousetool.type?W.mousetool.type:on.Pan,on.None),N.loading=!1,at(),"function"==typeof n&&n(t.error,t),t.error&&setTimeout(function(){U("DocumentLoadError",t.error)},0)})),N.loading=!1):(o=t&&!1===t.licensed?(e="LicenseException",t.error?t.error:"LicenseException: Handler was unable to find a valid license."):(e="DocumentLoadError","HandlerException: Handler did not return any data."),N.loading=!1,"function"==typeof n&&n.call(void 0,o),e&&o&&U(e,o))}function wt(){zt()}function zt(e){if(L(),0<y.pageDivs.length){var t=j.document.getPageCount(),n="number"==typeof e?e:y.pageDivs[0]._index;n=0<=n?Math.min(n,t-y.pageDivs.length):0;for(var o=0;o<y.pageDivs.length&&o<t;o++){var i=n+o;Oe(y.pageDivs[o]),He(y.pageDivs[o],null,i)}y.content.append(y.pageDivs[0])}Te(0<y.pageDivs.length&&y.pageDivs[0]._index,null),De(),Ct(),ye(),Ae((0<y.pageDivs.length?y.pageDivs[0]._index:0)+1)}function Pt(e,t){var n={atala_docurl:W.documenturl,atala_spath:W.savepath};function o(e){!function(e){e.error?U("DocumentSaveError",e.error):me("DocumentSave: success="+e.success);Wt({type:"documentsaved",success:e.success,customData:e.customData,fileName:e.fileName})}(e),"function"==typeof t&&t.call()}en.extend(n,e),At({type:"docsave",serverurl:W.serverurl,query:"?ataladocsave=",method:"POST",data:n,cancel:!1,info:{success:void 0,error:void 0}},o,function(e){var t=[];t.error=e.responseText,o(t)})}function Dt(e,t,n){var o=null;return"string"==typeof e?(o={},N.initialized&&n&&(0<e.length?(n.clear(),o=n.createHandlerRequest(W.serverurl,e,t)):0===e.length&&n.clear()),o.url=e):void 0!==e&&null!=e&&U("openUrlError","string input expected for url."),o}function Tt(){qt({annotationsloaded:St})}function kt(){qt({formsloaded:Ft})}function Ct(e){if(!(0<y.pageDivs.length&&void 0===y.pageDivs[0]._index))for(var t=0;t<y.pageDivs.length;t++)Et(y.pageDivs[t],e)}function Mt(e,t){var n=We(e);n&&Et(n,t)}function Et(e,t){(He(e,qe(e._index),e._index)||t)&&(j.annotations&&j.annotations.showLayer(e._index,e),j.forms&&j.forms.showLayer(e._index,e),j.text&&W.allowtext&&j.text.showLayer(e._index,e))}function St(e){e.error&&(U("AnnotationsLoadError",e.error),W.annotationsurl=""),j.annotations&&Nt({annotationsloaded:St})}function Ft(e){e.error&&(U("FormsLoadError",e.error),W.formsurl=""),j.forms&&Nt({formsloaded:Ft})}function At(o,t,i,n){var a,r,e,l=this,s=(a=o,r=function(e){t(e.request.info)},qt({handlerreturned:e=function e(t){t.request===a&&(Nt({handlerreturned:e}),"function"==typeof r&&r.call(this,t))}}),e);if(Wt({type:"beforehandlerrequest",request:o}),!o.cancel&&(Nt({handlerreturned:s}),o.serverurl&&!en.isEmptyObject(o.data))){if(!(o.info instanceof en&&"docpage"===o.type)){if("fileupload"!==o.type)return en.ajax({type:o.method,url:o.serverurl+o.query+"?",dataType:"json",data:o.data,success:t,error:i,crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0});var c="&"+en.param(o.data),u=new FormData;u.append("file",o.file,o.file.name);var d=en.ajax({type:o.method,url:o.serverurl+o.query+"??"+c,dataType:"json",data:u,contentType:!1,processData:!1,success:function(e){Ut(this,l),e.success&&(e.success=JSON.parse(e.success)),e.canceled&&(e.canceled=JSON.parse(e.canceled)),t(e,o.file.name)}.bind(this),error:function(e,t,n){Ut(this,l),i(t,n,o.file.name)}.bind(this),crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0,xhr:function(){var t=this;Ut(this,l);var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){Ut(this,t),e.lengthComputable&&(n(o.file.name,e.loaded,e.total)||d.abort())}.bind(this),!1),e}.bind(this)});return d}o.info.attr("src",o.serverurl+o.query+"&"+en.param(o.data))}}
/**
   * Resets the viewer to its default state.
   * @param {OpenUrlCallback} [callback]  - Function to execute when the empty process is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function empty
   */
function It(e){N.loading=!0;Ot(),xt({pagewidth:0,pageheight:0,pagecount:-1},function(){ye(),Wt({type:"documentunloaded"}),"function"==typeof e&&e.call()})}function Ot(e){var t;N.initialized&&(Ie(),L(0),e||function(){for(var e=0;e<y.loadedImgs.length;e++)y.loadedImgs[e]&&(y.loadedImgs[e].dispose(),y.loadedImgs[e].remove());y.loadedImgs.length=0}(),y.edges[0].width(0).height(0),y.edges[1].width(0).height(0),y.scrollH&&(y.scrollH.scrollSize(0),we(y.scrollH)),y.scrollV&&(y.scrollV.scrollSize(0),we(y.scrollV)),t={backgroundImage:"",backgroundSize:"",backgroundRepeat:"",backgroundColor:""},y.edges[0].css(t),y.edges[1].css(t))}
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
function Vt(){return N.initialized}
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
function Ht(e){nt(!1,e)}
/**
   * Zooms out one level.
   * @param  {NotificationCallback} [callback] - Function to execute when the zoom operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomOut
   */function Lt(e){nt(!0,e)}
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
   */function Rt(e,t,n,o){null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null));var i=0,a=!1,r=Dt(t,e,j.annotations),l=Dt(n||e,e,j.forms);W.annotationsurl=r?r.url:W.annotationsurl,W.formsurl=l?l.url:W.formsurl;var s,c,u,d,h=function(e,t){--i<=0&&(Ct(!0),Wt({type:"documentloaded",customData:null==t?void 0:t.customData}),"function"==typeof o&&o.call(void 0,e,t))};if("string"==typeof e){if(0===e.length)It(h);else if(W.documenturl=e,N.initialized){Ot(),Y(y.scrollH),Y(y.scrollV),i++,0===e.length&&It(h);var g={};W.allowannotations&&r&&r.data&&(Tt(),en.extend(g,r.data)),W.allowforms&&l&&l.data&&(kt(),en.extend(g,l.data)),a=!0,yt(g,h)}}else!(e||!(0<W.documenturl.length)||!t&&""!==t&&!n&&""!==n)||U("openUrlError","string input expected for document url.");a||(r&&(i++,u=r,d=h,j.annotations&&(Tt(),j.annotations.makeHandlerRequest(u,d))),l&&(i++,s=l,c=h,j.forms&&(kt(),j.forms.makeHandlerRequest(s,c))))}
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
   */function Bt(e,t,n,o){"function"==typeof n&&(o=n,n={}),"function"==typeof t&&(o=t,t=W.savefileformat),"function"==typeof e&&(o=e,e=null),void 0===t&&(t=W.savefileformat);var i=en.extend(!0,n,{atala_subpath:e||"",atala_sformat:t});j.annotations&&en.extend(i,{atala_iuname:W.annotations.saveusername,atala_annos:j.annotations.stringifyChanges()}),j.forms&&en.extend(i,{atala_forms:j.forms.stringifyChanges()}),j.document&&en.extend(i,{atala_document:j.document.stringifyChanges()}),Pt(i,o)}
/**
   * Gets the current page index
   * @returns {number} Zero based index of the current page.
   *
   * Note, that current page index detection could be affected by {@link WebDocumentViewerConfig.pageselectlocation|pageselectlocation} configuration parameter.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function getCurrentPageIndex
   */
function jt(){return q.number-1}
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
function qt(e,t){return ve(arguments,!0),i.on.apply(i,arguments),c}
/**
   * Detaches the handler from the event.
   * @param {string} event - the name of the event to unbind.
   * @param {function} [handler] -  the event handler to unbind. If not specified, all handlers are unbound.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function unbind
   */function Nt(e,t){return ve(arguments,!1),i.off.apply(i,arguments),c}
/**
   * Triggers the event.
   * @param {string} event - the name of the event to trigger.
   * @param {Object} [parameters] - the event data.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function trigger
   */function Wt(e,t){return i.trigger.apply(i,arguments),c}
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
return c.__getDebugInfo=function(){var e={version:yn.join(".")};W.debug&&en.extend(!0,e,{dom:y,controllers:j,page:q});return e}
/**
   * [Internal] Gets the viewer linkage for controls that inherit this one
   * @param viewer object of type WebDocumentViewer
   * @returns linker object if possible, otherwise undefined
   */,c.__getViewerLink=function(e){if(e&&"Atalasoft.Controls.WebDocumentThumbnailer"===e.typeOf){var t=new function(){this.typeOf="__LVlinker",this._id=s,this._config=W,this._controllers=j,this._dom=y,this._page=q,this._state=N,this._annos=null,this._fields=null,this.stateManager=r,this.__createDialog=k,this.__createDiv=Z,this.__createDOM=w,this.__createDropDownButton=C,this.__createDropDownMenu=M,this.__createMenu=D,this.__getPageSize=he,this.__getTabularIndexOffset=ce,this.__redrawVisiblePages=Ct,this.__adjustVisiblePages=rt,this.__onDocumentChanged=wt,this.__startDomManipulation=Ye,this.__endDomManipulation=Qe,this.__status=me,this.__updatePageSize=p,this.__silentReloadPage=je,this.__isObjectInRect=pe,this.__getIndexFromPos=oe,this.__showNext=Me,this.__showPrevious=Ce,this.__showPageAsync=Fe,this.__adjustEdgeHeights=Te,this.__getSelectedPagesIndices=V};return j.document.__linkChanges(t),W.allowannotations&&(e!==c&&0<W.annotationsurl.length&&(W.annotationsurl=""),j.annotations.__linkAnnotations(t)),W.allowforms&&(e!==c&&0<W.formurl.length&&(W.formurl=""),j.forms.__linkForms(t)),W.allowtext&&j.text&&j.text.__linkText(t),t}},c.dispose=
/**
   * Removes all DOM elements, internal references, and empties memory intensive objects.
   * The WebDocumentViewer will no longer function after a call to this method.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function dispose
   */
function(){if(r&&r.closeDocument(),Ot(),y.main&&y.main.remove(),y.toolbar&&(y.toolbar.controlgroup("destroy"),y.toolbar.remove(),y.toolbar.annoToolbar&&(y.toolbar.annoToolbar.controlgroup("destroy"),y.toolbar.annoToolbar.remove())),y.search&&y.search.dispose(),y.uploadCtrl&&y.uploadCtrl.remove(),y.main=null,y.toolbar=null,y.scroller=null,y.viewport=null,y.content=null,y.scrollH=null,y.scrollV=null,y.loadedImgs.length=0,y.pageDivs.length=0,y.pageLabel=null,y.status=null,y.search=null,y.uploadCtrl=null,y.edges){for(var e=0;e<y.edges.length;e++)y.edges[e]=null;y.edges=[]}for(var t in j)j.hasOwnProperty(t)&&null!==j[t]&&(j[t].dispose(),j[t]=null);N={prpr:0,batchoperation:0,loading:(q={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,itch:!1}},c.empty=It,c.fit=lt,c.getZoom=function(){return W.zoom},c.isReady=Vt,c.scrollTo=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);be(e,t,n,null,o)}
/**
   * Scrolls by the given deltas, does not account for zoom, i.e. `dx` and `dy` values are passed in window coordinate space.
   * @param {number} dx - Indicating delta of the x axis.
   * @param {number} dy - Indicating delta of the y axis .
   * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function scrollBy
   */,c.scrollBy=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);i=e,a=t,r=n,l=null,s=o,be(y.scroller.scrollLeft()+i,y.scroller.scrollTop()+a,r,l,s);var i,a,r,l,s},c.next=Me,c.previous=Ce,c.zoom=et,c.zoomIn=Ht,c.zoomOut=Lt,c.openUrl=c.OpenUrl=Rt,c.save=Bt,c.uploadFiles=
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
function(e,t,n){j.upload.uploadFiles(e,t,n)}
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
   */,c.uploadFile=function(e,t,n){j.upload.uploadFile(e,t,n)}
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
   */,c.filterFilesForUpload=function(e,t,n){return j.upload.filterFilesPublic(e,t,n)},c.getCurrentPageIndex=jt,c.bind=qt,c.unbind=Nt,c.trigger=Wt,c.getDocumentInfo=function(){return{count:j.document.getPageCount(),dpi:q.dpi,size:{height:q.size.height,width:q.size.width},vector:q.vector}},c.setMouseTool=function(e){for(var t in on)if(on.hasOwnProperty(t)&&on[t]===e){j.mouseTool.setTool(e);break}},c.isPageLoaded=
/**
   * Checks whether specified document page have been loaded.
   * @param {number} index - Page index.
   * @returns {boolean} `true` if page have already been loaded; `false` otherwise.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function isPageLoaded
   */
function(e){var t=j.document.getPageDefinition(e);return 0<=t.cacheIndex&&y.loadedImgs[t.cacheIndex]&&y.loadedImgs[t.cacheIndex]._loaded}
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
   */,c.reloadPage=function(o,e,t,n,i){var a=en.Deferred(),r=en.Deferred(),l=en.Deferred(),s=en.Deferred();"function"==typeof n&&(i=n,n=void 0),"function"==typeof t&&(i=t,t=!1),"function"==typeof e&&(i=e,e=!1),"function"==typeof i&&a.done(i);var c=j.document.getPageDefinition(o);if(!c)return a.resolve(),a.promise();0<=c.cacheIndex&&y.loadedImgs[c.cacheIndex]?s=je(c,n):qe(o,n,function(){s.resolve()});var u="string"==typeof e?e:c.uri?null:W.annotationsurl;W.allowannotations&&e&&(u||c.uri)?j.annotations.loadAnnotationsUrl(W.serverurl,u,c.uri,c.index,1,o,function(){r.resolve(!0)}):(e&&j.annotations.loadAnnotations({layers:[[]],offset:o}),r.resolve(!!e));var d="string"==typeof t?t:c.uri?null:W.formsurl;return W.allowforms&&t&&(W.formsurl||d)?j.forms.loadFormUrl(W.serverurl,d,c.uri,c.index,1,o,function(){l.resolve(!0)}):l.resolve(),en.when(s,r,l).done(function(e,t,n){(t||n)&&Mt(o,!0),a.resolve(o)}),a.promise()},c.showPage=Ee,c.showPageNumber=Se,wn(),Dn(),zn(),Tn(),c.annotations=wn.__exposedApi,c.document=Dn.__exposedApi,c.forms=zn.__exposedApi,c.text=Tn.__exposedApi,function(){Vt()||(N={prpr:0,batchoperation:0,loading:(q={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,itch:!1});var e={_config:W,_id:s,_dom:y,_document:y.loadedImgs,_pages:y.pageDivs,_state:N,_internalEvents:a,_controllers:j,createDOM:w,createDiv:Z,createDialog:k,createDropDownButton:C,createDropDownMenu:M,createMenu:D,drawAnnotation:ht,redrawVisiblePages:Ct,adjustVisiblePages:rt,startDomManipulation:Ye,endDomManipulation:Qe,redrawPageFromIndex:Mt,makeHandlerRequest:At,getPageScale:ct,getPageSize:he,getSourcePageSize:ue,getPageRotation:ut,getViewerTransform:dt,isPageInView:Ne,findPageFromIndex:We,showPagePoint:Ue};j.document=new Dn(c,e,s),c.document=j.document.__exposedApi,W.allowannotations?(j.annotations=new wn(c,e,!1),c.annotations=j.annotations.__exposedApi):(c.deselectAll=pt,c.createAnnotationOnPage=pt,c.getAnnotationsFromPage=pt,c.deleteAnnotationOnPageAtIndex=pt,c.setAnnotationDefaults=pt,c.setImages=pt,c.setStamps=pt),W.allowforms&&!j.forms&&(j.forms=new zn(c,e),c.forms=j.forms.__exposedApi),W.allowtext&&(j.text=new Tn(c,e,W.mousetool?W.mousetool.text:{}),c.text=j.text.__exposedApi),j.upload=new Pn(c,e),!1===N.initialized&&(N.initialized=!0,qt({throwerror:x,pagedivsresized:g,documentchanged:wt,pagesizechanged:f}),W.parent?(W.parent instanceof en||(W.parent=en(W.parent)),W.parent.length||U("InitError","Parent element not found.")):U("InitError","No parent element given."),y.toolbar=(t=W.toolbarparent||W.parent,(n=function(e){var t=this,n={id:s+"_toolbar",parent:e,children:[{type:"button",id:"Button_PagePrev",cls:cn.atala_tool_button_page_prev,icon:"page-prev",tooltip:"Previous Page",text:null,onclick:function(){Ce()}},{type:"pagelabel",id:"Label_PageNumber",cls:cn.atala_page_label},{type:"button",id:"Button_PageNext",cls:cn.atala_tool_button_page_next,icon:"page-next",tooltip:"Next Page",text:null,onclick:function(){Me()}},{type:"button",id:"Button_ZoomOut",cls:cn.atala_tool_button_zoom_out,icon:"zoom-out",tooltip:"Zoom Out",text:"",onclick:function(){Lt()}},{type:"button",id:"Button_ZoomIn",cls:cn.atala_tool_button_zoom_in,icon:"zoom-in",tooltip:"Zoom In",text:"",onclick:function(){Ht()}},{type:"button",id:"Button_FitNone",cls:cn.atala_tool_button_fit_none,icon:"zoom-full",tooltip:"Full Size",text:"",onclick:function(){et(1)}},{type:"button",id:"Button_FitBest",cls:cn.atala_tool_button_fit_best,icon:"fit-best",tooltip:"Best Fit",text:"",onclick:function(){lt(rn.Best)}},{type:"button",id:"Button_FitWidth",cls:cn.atala_tool_button_fit_width,icon:"fit-width",tooltip:"Fit To Width",text:"",onclick:function(){lt(rn.Width)}}]};return W.showselecttools&&n.children.splice(5,0,{type:"button",id:"Button_ZoomArea",cls:cn.atala_tool_button_zoom_area,icon:"zoom-area",tooltip:"Zoom Area",text:"",onclick:I}),W.allowtext&&(n.children.splice(3,0,{type:"button",id:"Button_Text",cls:cn.atala_tool_button_text_tool,icon:"text-tool",tooltip:"Text Selection",text:"",onclick:function(){j.mouseTool.setTool(on.Text)}}),n.children.splice(3,0,{type:"button",id:"Button_Text",cls:cn.atala_tool_button_pan_tool,icon:"pan-tool",tooltip:"Pan",text:"",onclick:function(){j.mouseTool.setTool(on.Pan)}})),W.showrotatetools&&(n.children.push({type:"button",id:"Button_RotateLeft",cls:cn.atala_tool_button_rotate_left,icon:"rotate-left",tooltip:"Rotate Left",text:"",onclick:O(270)}),n.children.push({type:"button",id:"Button_RotateRight",cls:cn.atala_tool_button_rotate_right,icon:"rotate-right",tooltip:"Rotate Right",text:"",onclick:O(90)})),0<W.savepath.length&&n.children.unshift({type:"button",id:"Button_Save",cls:cn.atala_tool_button_save,icon:"save",tooltip:"Save Changes",text:null,onclick:function(){Bt()}}),!1!==W.upload.enabled&&n.children.unshift({type:"button",id:"Button_Upload",cls:cn.atala_tool_button_upload,icon:"upload",tooltip:"Upload document",text:null,onclick:function(){!function(){var t=this;j.upload.uploadWithUi(function(e){Ut(this,t),e?(y.toolbar.controlgroup("enable"),W.allowannotations&&y.toolbar.annoToolbar.controlgroup("enable"),y.toolbar.find(".atala_page_label, .atala_search_container").removeClass("ui-state-disabled")):(y.toolbar.controlgroup("disable"),y.toolbar.annoToolbar&&y.toolbar.annoToolbar.controlgroup("disable"),y.toolbar.find(".atala_page_label, .atala_search_container").addClass("ui-state-disabled"))}.bind(this))}()}}),W.toolbarbuttons&&W.toolbarbuttons.reverse().forEach(function(e){Ut(this,t),n.children.unshift({type:"button",id:e.id,cls:e.class,tooltip:e.tooltip,onclick:e.onclick,text:null,icon:e.icon,custom:!0})}.bind(this)),P(n)}(t)).controlgroup(),W.allowannotations&&(n.annoToolbar=P({id:s+"_toolbar",parent:t,children:[{type:"button",id:"Button_Ellipse",cls:cn.atala_tool_button_ellipse_anno,icon:"ellipse",tooltip:"Draw Ellipse",text:"",onclick:ht},{type:"button",id:"Button_Highlight",cls:cn.atala_tool_button_highlight_anno,icon:"highlight",tooltip:"Draw Highlight",text:"",onclick:ht},{type:"button",id:"Button_Line",cls:cn.atala_tool_button_line_anno,icon:"line",tooltip:"Draw Line",text:"",onclick:ht},{type:"button",id:"Button_Lines",cls:cn.atala_tool_button_lines_anno,icon:"lines",tooltip:"Draw Poly Lines",text:"",onclick:ht},{type:"button",id:"Button_Freehand",cls:cn.atala_tool_button_freehand_anno,icon:"freehand",tooltip:"Draw Freehand",text:"",onclick:ht},{type:"button",id:"Button_Polygon",cls:cn.atala_tool_button_polygon_anno,icon:"polygon",tooltip:"Draw Polygon",text:"",onclick:ht},{type:"button",id:"Button_Rectangle",cls:cn.atala_tool_button_rect_anno,icon:"rectangle",tooltip:"Draw Rectangle",text:"",onclick:ht},{type:"button",id:"Button_Text",cls:cn.atala_tool_button_text_anno,icon:"text",tooltip:"Draw Text",text:"",onclick:ht}]}),n.annoToolbar.addClass(cn.atala_annotation_toolbar),n.annoToolbar.controlgroup()),W.showstatus&&(y.status=en('<div id="'+s+'_status" style="display:inline"></div>'),y.status.addClass(cn.atala_statusbar),n.append("Status:"),n.append(y.status)),W.allowtext&&W.mousetool.text.allowsearch&&(y.search=new A({parent:n})),n),y.toolbar.addClass(cn.atala_toolbar),y.main=Z(W.parent),y.main.addClass(cn.atala_main_container),y.scroller=Z(y.main),y.scroller.addClass(cn.atala_scroller),y.main.on({selectstart:v}),y.toolbar.attr("id",s+"_toolbar"),y.main.attr("id",s+"_main"),y.scroller.attr("id",s+"_scroller"),y.main.css({height:"100%",width:"100%",position:"relative"}),y.scroller.css({height:"100%",width:"100%",position:"relative"}),y.viewport=Z(y.scroller,s+"_vp"),y.viewport.css({overflow:"hidden",fontSize:0,"touch-action":"none"}),y.viewport.addClass(cn.atala_viewport),y.viewport.attr("tabindex",-1),y.edges[0]=H(y.viewport,s+"_e0"),y.edges[0].addClass(cn.atala_dom_edge_first),y.content=Z(y.viewport,s+"_ct"),y.content.addClass(cn.atala_content),y.content.css({"-ms-touch-action":"none",fontSize:0,overflow:"hidden"}),W.direction===an.Horizontal&&y.content.css({display:"inline-block"}),y.edges[1]=H(y.viewport,s+"_e1"),y.edges[1].addClass(cn.atala_dom_edge_last),nn.Features.Compatibility&&U("InitError","Compatibility Mode is not supported."),!1!==W.upload.enabled&&(y.uploadCtrl=j.upload.getUploadControl()),nn.Mobile.Any()?y.scroller.css({overflow:"hidden"}):W.showscrollbars?(y.scroller.css({overflow:"scroll"}),y.scrollH=G(y.main,an.Horizontal),y.scrollH.attr("id",s+"_sH"),y.scrollH.addClass(cn.atala_scroll_horizontal),y.scrollV=G(y.main,an.Vertical),y.scrollV.attr("id",s+"_sV"),y.scrollV.addClass(cn.atala_scroll_vertical)):y.scroller.css({overflow:"hidden"}),j.mouseTool=new kn(c,{_internalEvents:a,_controllers:j,zoomStart:Je,zoom:Ke,zoomEnd:$e,getActivePage:ke,raiseDrawLayer:mt,resetDrawLayer:vt,getViewerTransform:dt},y.viewport,y.scroller,en.extend({allowflick:W.allowflick},W.mousetool)),j.memory=new bn({highWaterMark:W.memorythreshold}),j.memory.bind({exceededhighwatermark:h}),j.annotations&&j.annotations.setViewPort(y.viewport),Wt("initialized"),W.direction===an.Horizontal&&y.viewport.css({"white-space":"nowrap"}),y.viewport.css({display:"table-cell"}),Q(y.scroller),y.scrollH&&y.edges[1].height(y.scrollH.scrollbarHeight()),j.mouseTool.setTool(on.Pan,on.None),(W.documenturl||W.annotationsurl||W.formurl)&&Rt(W.documenturl,W.annotationsurl,W.formurl,o),en(m));var t,n}(),c}function Mn(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that views, modifies, and saves documents, annotations and forms.
 * @param {WebDocumentViewerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @returns {WebDocumentViewer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */var Ke=function(e,o){if(!dn())return null;var t,c={typeOf:e.type||"Atalasoft.Controls.WebDocumentViewer"},R="Atalasoft.Controls.WebDocumentThumbnailer"===c.typeOf,s="",T=150,u=500,b="atala-ui-icon",n=document.createElement("div"),B=4,j=1500,i=en({}),a=en({}),r=new _n({get:function(){return c},isInitialized:Nt,switchDocument:Dt,closeDocument:Tt}),y={
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
uploadCtrl:null},q={annotations:null,document:null,forms:null,mouseTool:null,memory:null,text:null,upload:null},N={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},W={prpr:0,batchoperation:0,loading:!1,zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,scrollTargetPage:0,hidden:!1,itch:!1},d={
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
fileaddedtoupload:null},U={
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
direction:an.Vertical,
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
fitting:rn.Width,
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
pageselectlocation:en.extend({},ln.TopLeft),
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
type:on.Pan,
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
scrolltriggerarea:sn.Normal,
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
localization:gn,
/**
     * @property {boolean} [tiling=false] - Specifies whether the PDF document pages should be loading using tiling
     * */
tiling:!1};if(e){var l=e.mousetool;e.mousetool&&"object"!=typeof e.mousetool&&(e.mousetool=en.extend({},U.mousetool,{type:l})),!e.tabular||e.direction!==an.Horizontal&&1!==e.columns||(e.tabular=!1),en.extend(!0,U,e),e.mousetool=l,e.localization&&xn.SetLocalizationStrings(e.localization)}if(U.direction=U.direction===an.Vertical||U.direction===an.Horizontal?U.direction:an.Vertical,U.fitting=U.fitting===rn.None||U.fitting===rn.Best||U.fitting===rn.Width||U.fitting===rn.Height?U.fitting:rn.Width,U.pageborderwidth=we(U.pageborderwidth)?parseInt(U.pageborderwidth,10):1,U.pagespacing=we(U.pagespacing)?parseInt(U.pagespacing,10):4,U.showpageborder=!!U.showpageborder,U.showpagenumber=!!U.showpagenumber,U.showstatus=!!U.showstatus,U.zoom=we(U.zoom,!0)?parseFloat(U.zoom):1,U.scripturl=0<(t=U.scripturl).length&&-1===t.indexOf("/",t.length-1)&&-1===t.indexOf("\\",t.length-1)?U.scripturl+"/":U.scripturl,function(){if((U.mousetool.type===on.ZoomArea||U.mousetool.type===on.Selection||U.mousetool.type===on.Text)&&!U.showselecttools){if(null!==e.showselecttools&&void 0!==e.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value.Please change the tool type or enable selection tools.";U.showselecttools=!0}}(),function(){U.upload||(U.upload={enabled:!1});var e=U.upload;!1!==e.enabled&&(e.allowedmaxfilesize=mn(e.allowedmaxfilesize)?e.allowedmaxfilesize:Number.MAX_VALUE,e.allowdragdrop=!!e.allowdragdrop,e.allowmultiplefiles=!!e.allowmultiplefiles,e.allowedfiletypes="string"==typeof e.allowedfiletypes?e.allowedfiletypes:"",e.uploadpath="string"==typeof e.uploadpath?e.uploadpath:".",e.filesuploadconcurrency=mn(e.filesuploadconcurrency)?e.filesuploadconcurrency:1,e.closeuiafterupload=!1!==e.closeuiafterupload)}(),!hn(U.allowannotations,U.allowtext))return null;function h(){var e=q.memory.deallocateOldestEntry();!function(e){try{e.parentNode&&e.parentNode.removeChild(e),n.appendChild(e),n.innerHTML=""}catch(e){}}(e[0]),0<=e._cacheIndex&&(y.loadedImgs[e._cacheIndex]=null,e._cacheIndex=-1),e.remove(),e.length=0,e=null}function g(e){W.newpagedivsize={height:e.height,width:e.width},W.newpagedivfullzoom=e.fullzoom,U.minwidth=e.minwidth,U.zoom=e.fullzoom,Mt()}function f(e){var t=!1;if((N.smallest.width<=0||e.width<N.smallest.width)&&(N.smallest.width=e.width,t=!0),(N.smallest.height<=0||e.height<N.smallest.height)&&(N.smallest.height=e.height,t=!0),!R){var n=W.scrollTargetPage-1;if(e.index<=n)if(U.direction===an.Vertical){var o=ce(y.pageDivs[0]._index).height;y.edges[0].height(o),Se(y.pageDivs[0]._index,null),ze(null,ce(n).height,!1)}else if(U.direction===an.Horizontal&&1<Math.abs(e.dx)){var i=ce(y.pageDivs[0]._index).width;y.edges[0].width(i),Se(y.pageDivs[0]._index,null),Ee(),ze(ce(n).width,null,!1)}!function(e,t){if(U.direction===an.Vertical){if(y.scrollV)if(y.scrollV.scrollSize(Math.max(y.scrollV._scrollSize+t,0)),1===y.scrollV._ratio&&y.scrollV._scrollSize+t<3e4)y.scrollV._tray.height(y.scrollV._tray.height()+t),y.scrollV._max=Math.max(y.scrollV._tray.height()-y.scrollV[0].clientHeight,0)+1;else{var n=y.scrollV.height()-y.scrollH.scrollbarHeight()-1,o=(3e4-n)*y.scrollV._ratio;3e4<o+t?y.scrollV.ratio((o+t)/(3e4-n)):De()}ke(y.scrollV),Te(y.scrollH,"width")}else if(U.direction===an.Horizontal){if(y.scrollH)if(y.scrollH.scrollSize(Math.max(y.scrollH._scrollSize+e,0)),1===y.scrollH._ratio&&y.scrollH._scrollSize+e<3e4)y.scrollH._tray.width(y.scrollH._tray.width()+e),y.scrollH._max=Math.max(y.scrollH._tray.width()-y.scrollH[0].clientWidth,0)+1,y.scrollH.ratio(y.scrollH._scrollSize/y.scrollH._max);else{var i=y.scrollH.width()-y.scrollV.width()-1,a=(3e4-i)*y.scrollH._ratio;3e4<a+e?y.scrollH.ratio((a+e)/(3e4-i)):De()}ke(y.scrollH),Te(y.scrollV,"height")}if((0!==e||0!==t)&&0!==t){var r=y.scroller[0].scrollLeft,l=y.scroller[0].scrollTop;Le(ae(r,l)+1),$t({type:"scroll",x:r,y:l,dx:0,dy:0})}}(e.dx,e.dy),le.zero(),se();var a=y.scroller[0].scrollLeft,r=y.scroller[0].scrollTop;if(!y.scroller.propagationPaused()&&y.scrollH&&y.scrollV){var l=Math.round(a/y.scrollH._ratio),s=Math.round(r/y.scrollV._ratio);l!==y.scrollH.scrollLeft()&&(y.scrollH.pauseEventPropagation(!0),y.scrollH.scrollLeft(l)),s!==y.scrollV.scrollTop()&&(y.scrollV.pauseEventPropagation(!0),y.scrollV.scrollTop(s))}t&&K(ee())>y.pageDivs.length&&Mt()}}function p(e,t,n,o){var i=t.getPageSize(e.index,s);if(!i){var a=t.getPageFitMultiplier(e.index,s),r=a,l={width:e.width,height:e.height};1===r&&U.forcepagefit&&(l.width!==n.width||l.height!==n.height)&&0<l.width&&0<l.height&&(r=l.width/n.width>l.height/n.height?n.width/l.width:n.height/l.height,t.setPageFitMultiplier(e.index,r,s)),t.setPageSize(e.index,en.extend({},l),s),o&&(l.width*=U.zoom*r,l.height*=U.zoom*r,(i=en.extend({},N.size)).width*=U.zoom*a,i.height*=U.zoom*a,e.dx=l.width-i.width,e.dy=l.height-i.height,f(e))}}function m(){nn.Mobile.Any()?window.addEventListener("orientationchange",tt):window.addEventListener("resize",tt),y.scroller.scroll(Ce),L(N.buffer)}function v(e){var t=e.target||e.srcElement;return("TEXTAREA"===t.nodeName||"INPUT"===t.nodeName||"text"===t.type)&&((!t.attributes.selectable||"false"!==t.attributes.selectable.value)&&void 0)}function _(t,n){return function(e){try{e.currentTarget=n&&0<n.length?n[0]:e.currentTarget,t&&t(e)}catch(e){ye(e.message)}}}function Z(e,t){if(U.showerrors)throw void 0===t?e:e+": "+t;ye(e+": "+t),$t({type:"error",name:e,message:t})}function x(e){Z(e.name,e.msg)}function w(e,t,n,o){var i=en("<"+e+"></"+e+">");return t&&t.append&&i.appendTo(t),n&&i.attr("id",n),o&&i.html(o),i}function X(e,t,n){return w("div",e,t,n)}function z(e){var t=en('<div style="width:100%; height:100%; position:absolute; left: 0px; top: 0px; background: #F00; opacity:0.0;"></div>');return t.toFront=function(){t.css({"z-index":"10"}),t.reflow&&t.reflow()},t.reset=function(){t.css({"z-index":""}),t.reflow&&t.reflow()},e&&e.prepend(t),t}function P(e){var t=X(e.parent),n=s+"_toolbar";t.buttons=[];for(var o=0;e.children&&o<e.children.length;o++){var i=null;switch(e.children[o].type){case"button":if(nn.Features.Touch&&("lines"===e.children[o].icon||"polygon"===e.children[o].icon))continue;e.children[o].id=n+"_"+e.children[o].id,(i=F(e.children[o],t)).addClass(cn.atala_toolbar_button),t.buttons.push(i);break;case"pagelabel":y.pageLabel=w("span",t,n+"_"+e.children[o].id),(i=y.pageLabel).addClass("ui-controlgroup-item")}i&&e.children[o].cls&&i.addClass(e.children[o].cls)}return t}function D(e){var t=en("<ul/>");for(var n in t.css({fontSize:"medium"}),t.addClass(cn.atala_context_menu),e)if(e.hasOwnProperty(n)){var o=en('<li><div href="#"> '+n+" </div></li>");nn.Features.Touch&&o.on({touchend:e[n]}),o.click(e[n]),o.appendTo(t)}return t.menu(),t}function k(e,t,n){var o=en('<div title="'+t+'" />');return n&&o.append(n),o.dialog(),o}function C(e){var t=w("span",y.toolbar.annoToolbar).addClass("ui-controlgroup-item");return F(e,t),S(t,e.id+"_Drop","ui-icon-triangle-1-s","Click To Choose",null,function(){var e=en(this).next();if(e.is(":visible"))return e.hide(),!1;var t=e.prev().prev().parent();return e.menu().show().css({position:"absolute",top:0,left:0,"min-width":t.width()+"px","z-index":11}).position({my:"left top",at:"left bottom",of:t}),!1}),t.controlgroup(),y.toolbar.annoToolbar.controlgroup("refresh"),t}function M(e,t,n){for(var o=en(e.children().first()),i={},a=0;a<n.length;a++)i[n[a].name]=E(o,t,n[a]);o.menu=D(i),e.append(o.menu),o.menu.hide()}function E(e,t,n){var o=function(){return e.button("option","label","Draw "+n.name),e.data("_annoConfig",n),e.click(t.onclick),e.menu.hide(),e.trigger("click"),!1};return Jt("menuselect"+t.icon+n.name,_(o,e)),o}function S(e,t,n,o,i,a){var r=en('<button id="'+t+'" title="'+o+'">'+(i||o)+"</button>");return a&&r.click(a),r.button({icon:n,showLabel:null!=i&&U.showbuttontext}),r.addClass("atala-ui-button"),e&&r.appendTo(e),r}function F(e,t){var n,o="menuclick"+(e.custom?e.id:e.icon),i=S(t,e.id,e.custom?e.icon:b+" "+b+"-"+e.icon,e.tooltip,e.text,(n=o,function(e){e.preventDefault(),$t(n,arguments)}));return i.data("_config",e),Jt(o,_(e.onclick,i)),i}function A(e){var t,n,o={clearable:"atala_search_input_clearable",onclear:"atala_search_input_clear_hover",inputEmpty:"atala_search_input_empty",loading:"atala_search_input_loading"},i=e.parent||y.toolbar,a=null,r=null;function l(){var e=n.val();return e?n.addClass(o.clearable):n.removeClass(o.clearable),!!(e&&a&&a.isValid()&&e===a.getQuery())||(clearTimeout(r),a=null,e&&3<=e.length?(f(!0),r=setTimeout(function(){a=q.text.search(e,Qt(),h),g(!0)},U.mousetool.text.searchdelay),!1):void d())}function s(e){var t=n.val();return 13===e.keyCode&&a&&t&&a.isValid()&&a.getQuery()===t?(e.shiftKey?u():c(),!1):13!==e.keyCode||a&&a.isValid()?27===e.keyCode?(d(),_(),!1):void 0:(l(),!1)}function c(){a&&(g(!0),a.next(h))}function u(){a&&(g(!0),a.prev(h))}function d(){a=null,q.text.search(""),q.text.clearSelection(),g(!1),f(!0)}function h(e,t){e.isValid()&&(g(!1),e.wrap=U.mousetool.text.wrapsearch,t||f(t))}function g(e){m(o.loading,e)}function f(e){m(o.inputEmpty,!e)}function p(t){return function(e){e.preventDefault(),t&&t()}}function m(e,t){t?n.addClass(e):n.removeClass(e)}function v(e){m(o.onclear,this.offsetWidth-18<e.clientX-this.getBoundingClientRect().left)}function _(e){e&&e.preventDefault(),n.removeClass(o.clearable).removeClass(o.onclear).val("").change(),l()}!function(){t=X().addClass(cn.atala_search_container).addClass("ui-controlgroup-item"),(n=en('<input type="text" placeholder="Search..." />').addClass(cn.atala_search_input).addClass("ui-widget")).on({keydown:s,"input propertychange":l}),w("span",t).css({width:"100%"}).append(n);var e=w("span",t);S(e,null,b+" "+b+"-search-next","Next",null,p(c)).addClass(cn.atala_search_next).addClass(cn.atala_toolbar_button),S(e,null,b+" "+b+"-search-prev","Previous",null,p(u)).addClass(cn.atala_search_prev).addClass(cn.atala_toolbar_button),t.on("mousemove","."+o.clearable,v).on("touchstart click","."+o.onclear,_),i.append(t),i.append(en('<div style="clear:both;"></div>'))}(),this.dispose=function(){n.off({keypress:s,"input propertychange":l}),t.off("mousemove","."+o.clearable,v).off("touchstart click","."+o.onclear,_),a&&a.dispose();t.remove()}}function I(){U.allowannotations&&c.annotations.cancelDraw(),q.mouseTool.setTool(on.ZoomArea)}function O(o){return function(){var t=this,e=V(N),i=e[0],n=[];e.forEach(function(e){return Mn(this,t),n.push(q.document.getPageRotation(e)+o)}.bind(this)),q.document.rotatePages(e,n,function(){var e=mt(i),t=fe(i),n=U.direction===an.Vertical?t.height*e:0;$e(U.pageselectlocation,ln.Center)||$e(U.pageselectlocation,ln.MiddleLeft)?n/=2:$e(U.pageselectlocation,ln.TopLeft)&&(n=0);var o={x:U.direction===an.Vertical?0:n,y:U.direction===an.Vertical?n:0};Ke(i,o,U.pageselectlocation,!0)})}}!function(){var e=U.parent.attr("id")+"_wdv";++vn.instanceCounter;for(;document.getElementById(e+vn.instanceCounter);)++vn.instanceCounter;s=e+vn.instanceCounter}(),
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
c.domclasses=cn,
/** WARNING: Changing values from these references can cause instability.*/
c.domattributes=un;var V=function(e){return[e.number-1]};function H(e,t){var n=X(e,t);return U.direction===an.Vertical?(n.height(1),n.css({display:"block"})):U.direction===an.Horizontal&&(n.width(1),n.css({display:"inline-block",overflow:"hidden"})),n._zoom=1,U.backcolor&&n.css({backgroundColor:U.backcolor}),n}function L(e){if(void 0===e){var t=K(R&&W.newpagedivsize&&0<U.zoom&&isFinite(U.zoom)?U.zoom:ee());N.buffer<t&&(N.buffer=t),N.buffer=Math.min(N.buffer,q.document.getPageCount()),e=N.buffer}function n(t){return function(){var e;e=t,W.activepage=e}}if(y.pageDivs.length<e)for(var o=y.pageDivs.length;o<e;o++)y.pageDivs[o]=X(),y.pageDivs[o].addClass(cn.atala_page_div),U.showselecttools&&(y.pageDivs[o]._rubberband=new Cn(c,{},y.pageDivs[o],{getViewportSize:me,getMaxZoom:te,getPageOffsets:ce,raiseDrawLayer:zt,resetDrawLayer:Pt})),y.pageDivs[o].on({touchstart:n(y.pageDivs[o]),mousedown:n(y.pageDivs[o])}),q.annotations&&q.annotations.addDrawingSurface(y.pageDivs[o]),(U.showselecttools||U.allowannotations||U.allowforms||U.allowtext)&&(y.pageDivs[o]._draw=z(y.pageDivs[o])),q.forms&&!R&&q.forms.addFormLayer(y.pageDivs[o]),q.text&&!R&&q.text.addTextLayer(y.pageDivs[o]);else if(y.pageDivs.length>e)for(;y.pageDivs.length>e&&0!==y.pageDivs.length;){var i=y.pageDivs.pop();i._rubberband&&i._rubberband.dispose(),q.annotations&&q.annotations.removeDrawingSurface(i),q.forms&&!R&&q.forms.removeFormLayer(i),q.text&&!R&&q.text.removeTextLayer(i),i&&je(i),i=null}}function G(e,M,t,n){"function"==typeof t&&(n=t,t=void 0);var E,o="function"==typeof n?[n]:[];E=en(new Image);var i=.9,S=en.extend(!0,{atala_cb:void 0},t||{});E._domEl=X(),E._domEl.addClass(cn.atala_page_image_anchor),E.addClass(cn.atala_page_image),E._domEl.append(E);var a={load:H,error:function(){b(),Z("ImageError","Image at frameIndex "+F()+" failed to load.")},inserted:function(){E._loaded&&h()}};function F(){return E._page?E._page._index:q.document.getPageIndexByImageIndex(E._index)}function A(){return E._domEl}function r(e){return q.document.getPageFitMultiplier(void 0!==e?e:F())}function I(e,t){return(e=void 0===e?U.zoom:e)*r(t)}function s(){var e=fe(F())||N.size;return{height:e.height,width:e.width}}
/**
     * Returns physical size of the image without client transformations applied(like view rotation)
     */function c(){var e=s();return 90===E._viewrotation||270===E._viewrotation?D(e):e}function O(e,t){return t=t||s(),{height:Math.round(t.height*I(e)),width:Math.round(t.width*I(e))}}function l(){var n=this;if(E._tiled){var o=0;return E.find("."+cn.atala_tile_column).first().find("img").each(function(e,t){Mn(this,n),o+=t.naturalHeight}.bind(this)),o}return E.prop("naturalHeight")}function u(){var e=this;if(E._tiled){var t=0;return E.find("."+cn.atala_tile_column).each(function(){Mn(this,e),t+=en(this).find("img").first().prop("naturalWidth")}.bind(this)),t}return E.prop("naturalWidth")}function V(e){var n=this,t=F(),s=N.vector&&(!M||!M.uri)?I():Math.min(I(),1),c=q.document.getPageRotation(t);if(e||s!==E._zoom||E._rotation!==c){var u=en.extend({atala_docurl:M?M.uri:E.documenturl,atala_doczoom:s,atala_thumbpadding:!1},S);if(c&&(u.atala_angle=c),U.jpeg&&(u.atala_jpeg=!0),U.tiling&&U.forcepagefit&&!E._loaded)if(pe(j*N.dpi/96,t)){var o,i=me(),a=fe(t);o=a.width>a.height?i.width/a.width:i.height/a.height,$(s,o)||(s=o,u.atala_doczoom=s)}if(E._tiled=function(e,t){var n=!1,o=j*N.dpi/96;if(U.tiling&&!R&&pe(o,e)){var i=me(),a=fe(e);a.height>o&&a.width>o&&(2<a.height*t/i.height||2<a.width*t/i.width)&&(n=!0)}return n}(t,s),E._tiled){var d=fe(t),r=O(),l=me(),h=Math.min(B,Math.floor(r.height/l.height)),g=Math.min(B,Math.floor(r.width/l.width)),f={width:Math.ceil(d.width/g),height:Math.ceil(d.height/h)};if(h!==E._tilesV||g!==E._tilesH){Ze();var p=A(),m=E;E=X(),p.children().replaceWith(E),L(m),E.addClass(cn.atala_tiled_page_image);for(var v=0;v<g;v++){var _=X(E);_.addClass(cn.atala_tile_column);for(var b=0;b<h;b++){var y=X(_);y.attr("tile_index_h",v).attr("tile_index_v",b),y.width(f.width*s),y.height(f.height*s),y.addClass(cn.atala_page_loading);var x=en(new Image);x.css("display","none"),y.append(x)}}E._tilesH=g,E._tilesV=h}E.__tileRequests=[],E.__tilesArray=[];for(var w=0;w<g;w++)for(var z=0;z<h;z++)E.__tilesArray.push({x:w,y:z});var P={x:0,y:0},D=function(e,t){return Mn(this,n),Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)}.bind(this);E.__tilesArray.sort(function(e,t){return Mn(this,n),D(P,e)-D(P,t)}.bind(this)),E.__tilesArray.forEach(function(e){var t,n,o,i,a=e.x,r=e.y;switch(c){case 0:t=Math.ceil(a*f.width),n=Math.ceil(r*f.height),o=a<g-1?f.width:d.width-t,i=r<h-1?f.height:d.height-n;break;case 90:t=Math.ceil(r*f.height),n=Math.ceil((g-1-a)*f.width),o=r<h-1?f.height:d.height-t,i=0!==a?f.width:d.width-n;break;case 270:t=Math.ceil((h-1-r)*f.height),n=Math.ceil(a*f.width),o=0!==r?f.height:d.height-t,i=a<g-1?f.width:d.width-n;break;case 180:t=Math.ceil((g-1-a)*f.width),n=Math.ceil((h-1-r)*f.height),o=0!==a?f.width:d.width-t,i=0!==r?f.height:d.height-n;break;default:Z("ImageError","Invalid rotation angle: "+c)}var l=en.extend(!0,{},u,{atala_tilestart:t+"x"+n,atala_pagesize:o+"x"+i});l.atala_doczoom=s,E.__tileRequests.push({type:"docpage",serverurl:U.serverurl,query:"?ataladocpage="+(null===M?E._index:void 0!==M.index?M.index:M),method:"GET",data:l,cancel:!1})}),E._reqzoom=s,E._reqangle=c,setTimeout(function(){Mn(this,n),W.itch=!1,function t(n,o){if(W.itch||E._reqzoom!==I()||E._reqangle!==q.document.getPageRotation(F())||void 0===E.__tileRequests[n]||void 0===E.__tilesArray[n])V();else{var e=E.__tileRequests[n],i=E.__tilesArray[n].x,a=E.__tilesArray[n].y,r=E.find('div[tile_index_h="'+i+'"][tile_index_v="'+a+'"]').find("img");r.attr("tile_index",n),r.attr("src",e.serverurl+e.query+"&"+en.param(e.data)),r[0].onload=function(){if(E){if(r.css("display","block"),r.parent().css({width:"auto",height:"auto"}),r.parent().removeClass(cn.atala_page_loading),0===n){var e=O();E.trigger({type:"pageresize",image:E,index:F(),width:e.width,height:e.height})}0===r.width()&&0===r.height()&&r.css({width:"auto",height:"auto"}),n<E.__tilesArray.length-1?t(n+1,o):H()}}}}(0,f)}.bind(this),0)}else{if(1<E._tilesV||1<E._tilesH){var T=A(),k=E;E=en(new Image),T.children().replaceWith(E),L(k),E.addClass(cn.atala_page_image),T.addClass(cn.atala_page_loading),E._tilesV=1,E._tilesH=1,E.__tilesArray=[]}var C={type:"docpage",serverurl:U.serverurl,query:"?ataladocpage="+(null===M?E._index:void 0!==M.index?M.index:M),method:"GET",data:u,cancel:!1,info:E};E._reqzoom=s,E._reqangle=c,Bt(C,H,H)}}}function H(){E._loaded||E._domEl.removeClass(cn.atala_page_loading),E._tiled&&W.zooming&&st(),E._loaded=!0,E._zoom=E._reqzoom,E._rotation=E._reqangle;var e=F();if(0<=e){if(E._rotation!==q.document.getPageRotation(e))return void V();(E._viewrotation=0)<E.parent().length&&h(),w(E._viewrotation);var t=N.vector?I():Math.min(I(),1);p()&&E._zoom<t*i&&!$(E._zoom,t)&&f(!1)}b()}function L(e){E._loaded=e._loaded,E._zoom=e._zoom,E._rotation=e._rotation,E._prevzoom=e._prevzoom,E._scaledzoom=e._scaledzoom,E._binds=e._binds,E.documenturl=e.documenturl,E._index=e._index,E._size=e._size,E._viewrotation=e._viewrotation,E._tiled=e._tiled,E._page=e._page,E._reqzoom=e._reqzoom,E._domEl=e._domEl,E.dispose=g,E.zoom=f,E.needsZoom=p,E.getSize=s,E.getScaledSize=O,E.getFitZoom=I,E.getFitMultiplier=r,E.needsRotate=y,E.rotate=x,E.getDomElement=A,E.invalidate=P,E.naturalHeight=l,E.naturalWidth=u,E.on(a)}function d(e){e&&(e.removeAttr("width height"),e.css({width:"auto",height:"auto"}))}function h(){d(E);var e=E.naturalWidth()||0,t=E.naturalHeight()||0,n=e||E.width(),o=t||E.height(),i=s(),a=I(),r=!1;if(nn.Explorer&&!R&&n<40&&E._zoom>ee()&&(n=i.width*a,o=i.height*a),0!==n&&0!==o){E._size.width=Math.round(n/E._zoom),E._size.height=Math.round(o/E._zoom),90!==E._viewrotation&&270!==E._viewrotation||(E._size=D(E._size)),E._size.width===N.size.width&&E._size.height===N.size.height||$(E._size.width,i.width)&&$(E._size.height,i.height)||(r=!0,q.document.setPageSize(F(),E._size)),null===q.document.getPageSize(F())&&(r=!0,q.document.setPageSize(fe,E._size)),U.forcepagefit?_():(E._zoom!==U.zoom||r||0!==E._viewrotation)&&v();var l=O();r&&E.trigger({type:"pagesizechanged",image:E,index:F(),width:E._size.width,height:E._size.height,dx:Math.round(l.width-i.width*a),dy:Math.round(l.height-i.height*a)}),E.trigger({type:"pageresize",image:E,index:F(),width:l.width,height:l.height})}}function g(){E.off(a),E._page=null,E=null}function f(e,t){!p()||E._size.isEmpty()&&!E._tiled?"function"==typeof t&&t.call(this,E):("function"==typeof t&&o.push(t),E._prevzoom=E._reqzoom,e&&!W.loading?E._tiled?E.find("img").each(function(){var e=en(this);e.animate({height:Math.round(e.height()/E._reqzoom*I()),width:Math.round(e.width()/E._reqzoom*I())},{duration:T,easing:"easeOutQuad",complete:m,queue:!1})}):E.animate({height:Math.round(E._size.height*I()),width:Math.round(E._size.width*I())},{duration:T,easing:"easeOutQuad",complete:m,queue:!1}):(v(),m()))}function p(){if(!E._loaded&&!E._tiled)return!1;var e=!N.vector&&1===E._reqzoom&&1===E._prevzoom&&1<I(),t=$(E._reqzoom,I())||e;if(!t){var n=Math.abs(E._reqzoom*E._size.width-I()*E._size.width),o=Math.abs(E._reqzoom*E._size.height-I()*E._size.height);n<1&&o<1&&(t=!0)}return!t||!$(E._scaledzoom,I())}function m(){var e=I();E.trigger({type:"pagezoom",index:F(),height:Math.round(E._size.height*e),width:Math.round(E._size.width*e),prevzoom:E._prevzoom,zoom:e}),0===W.prpr?V():b()}function v(){var e,t,n,o=O(void 0,c()),i=O(),a=E.naturalWidth()||0,r=E.naturalHeight()||0,l=a&&Math.abs(a-o.width)/o.width<.01,s=r&&Math.abs(r-o.height)/o.height<.01;l&&s||(E._tiled&&0!==r&&0!==a?E.find("img").each(function(){var e=en(this),t=e.prop("naturalHeight"),n=e.prop("naturalWidth");0!==t&&0!==n&&(e.height(t*I()),e.width(n*I()))}):(E.height(o.height),E.width(o.width))),E._domEl.width(i.width),E._domEl.height(i.height),E._scaledzoom=I(),E._tiled?z(E._viewrotation):w(E._viewrotation),e=F(),t=i.width,i.height,null!=(n=Je(e))&&null!=n._num&&n._num.css({left:t-20,right:0})}function _(){var e,t=function(e){var t=1;e=e||E._size;var n={width:U.forcepagesize.width*(R?1:U.zoom),height:U.forcepagesize.height*(R?1:U.zoom)};(n.width<1||n.height<1)&&(n.width=N.size.width*U.zoom,n.height=N.size.height*U.zoom);t=e.width/n.width>e.height/n.height?n.width/e.width:n.height/e.height;return t}();e=t/U.zoom,q.document.setPageFitMultiplier(F(),e),v()}function b(){0<o.length&&function(e){var t=Array.prototype.slice.call(arguments,1);for(;e.length;)e.shift().apply(this,t)}(o,E)}function y(){var e=q.document.getPageRotation(F());return 0===E._viewrotation&&e!==E._rotation||0!==E._viewrotation}function x(e){if("function"==typeof e&&o.push(e),y()){var t=q.document.getPageRotation(F());if(n=q.document.getPageRotation(F()),(0===E._viewrotation&&n!==E._rotation||0!==E._viewrotation&&(E._viewrotation+E._rotation)%360!==n)&&E&&E._page&&(t=(360+t-E._rotation)%360,!E._tiled&&E._loaded?(w(t),h()):E._tiled&&(z(t),function(){d(E);var e=q.document.getPageSize(F());if(90===E._viewrotation||270===E._viewrotation){var t=D(e);E._size.width=t.width,E._size.height=t.height,q.document.setPageSize(F(),E._size)}U.forcepagefit?_():E._zoom===U.zoom&&0===E._viewrotation||v()}(),0!==(i=t)&&E.find("img").each(function(){var e=en(this),t={width:e.width(),height:e.height()};90!==i&&270!==i||(t=D(t));var n=e.parent();0!==t.width&&0!==t.height&&(n.width(t.width),n.height(t.height)),n.addClass(cn.atala_page_loading);var o=en(new Image);o.css("display","none"),n.children().replaceWith(o)}))),0===W.prpr&&E._loaded)return void V()}var i,n;b()}function w(e){var t=c(),n=O(void 0,t),o=0,i=0,a="";90!==e&&270!==e||(o=(n.height-n.width)/2,R&&t.width<t.height&&(o=0),i=(n.width-n.height)/2,n=D(n)),0!==e?(a+=" translate("+o+"px,"+i+"px)",a+="rotate("+e+"deg)",E.css(pn(a))):E.css(pn("")),A().css({width:n.width,height:n.height}),E._viewrotation=e}function z(e){var t=O(void 0,c());90!==e&&270!==e||(t=D(t)),A().css({width:t.width,height:t.height}),E._viewrotation=e}function P(e,t){"function"==typeof e&&(t=e,e={}),(S=en.extend(!0,{},e)).atala_cb=Math.floor(1e9*Math.random()),"function"==typeof t&&o.push(t),V(!0)}function D(e){var t=e.width;return e.width=e.height,e.height=t,e}return E._binds=a,E.documenturl=U.documenturl,E._index=M?M.mapsto:e,E._loaded=!1,E._size={width:0,height:0,isEmpty:function(){return 0===this.width&&0===this.height}},E._zoom=-1,E._prevzoom=E._zoom,E._scaledzoom=-1,E._rotation=0,E._viewrotation=0,E._tiled=!1,E._tilesV=1,E._tilesH=1,E.dispose=g,E.zoom=f,E.needsZoom=p,E.getSize=s,E.getScaledSize=O,E.getFitZoom=I,E.getFitMultiplier=r,E.needsRotate=y,E.rotate=x,E.getDomElement=A,E.invalidate=P,E.naturalHeight=l,E.naturalWidth=u,function(){E.on(a);var e=U.pageborderwidth,t={bottom:0,top:0,right:0,left:0};E._loaded=!1,E._reqzoom=-1,(U.direction===an.Vertical||U.tabular)&&(t.bottom=U.pagespacing);(U.direction===an.Horizontal||U.tabular)&&(t.right=U.pagespacing);var n=A();U.showpageborder&&n.css({"border-bottom":e+"px solid black","border-right":e+"px solid black","border-top":e+"px solid silver","border-left":e+"px solid silver","margin-bottom":t.bottom+"px","margin-right":t.right+"px"});n.css({display:"inline-block"}),n.addClass(cn.atala_page_loading),V()}(),E}function Y(e,t){var n="overflow:scroll; position:absolute; background-color:Transparent;",o=X(e);o.css({position:"absolute",display:"none","background-color":"white"});var i=null,a=!1;function r(){i._tooltip.hide(),N.number===i._pagenum||Qe(i._pagenum)||Ve(i._pagenum),Ot()}function l(e,t){if(U.forcepagefit){t*=e._ratio;var n=e.ScrollDirection===an.Vertical?{x:0,y:t}:{x:t,y:0};return ae(n.x,n.y)+1}return Math.floor(t/(e._max/q.document.getPageCount()))+1}return t===an.Horizontal?(nn.Firefox&&(n=n.replace("overflow","overflow-x")),(i=en('<div style="'+n+'bottom:0px; left:0px; width:100%;z-index:10"></div>').appendTo(e))._tray=en('<div style="height:1px;"></div>').appendTo(i)):(nn.Firefox&&(n=n.replace("overflow","overflow-y"),n+="width:"+(function(){var e=X(en("body")),t=X(e);e.css({width:"50px",height:"50px",overflow:"hidden",position:"absolute",visibility:"hidden"}),t.css({width:"100px",height:"100px"});var n=e.width();e.css({"overflow-y":"scroll"});var o=n-e[0].clientWidth;return en(e).remove(),o}()+1)+"px;",a=!0),(i=en('<div style="'+n+'top:0px; right:0px; height:100%;z-index:10"></div>').appendTo(e))._explicitSize=a,i._tray=en('<div style="width:1px;"></div>').appendTo(i)),J(i),i._ratio=1,i.ScrollDirection=t,i._tooltip=o,i._pagenum=-1,i._scrollSize=0,i.pageNum=function(e){i._pagenum=e},i.scrollbarHeight=function(){return i.height()-i[0].clientHeight},i.scrollSize=function(e){i._scrollSize=e},i.ratio=function(e){i._ratio=e},i.on({scroll:function(){if(!i.propagationPaused()){clearTimeout(i._tooltip._timeout),y.scroller.stop(),y.scroller.pauseEventPropagation(!0);var e={};i.ScrollDirection===an.Vertical?(y.scroller.scrollTop(i[0].scrollTop*i._ratio),i._pagenum=l(i,i[0].scrollTop),e.right=i.outerWidth()+10+"px",e.top=16+Math.round((i[0].offsetHeight-48)/i[0].scrollHeight*i[0].scrollTop)+"px"):i.ScrollDirection===an.Horizontal&&(y.scroller.scrollLeft(i[0].scrollLeft*i._ratio),i._pagenum=l(i,i[0].scrollLeft),e.bottom=i.outerHeight()+10+"px",e.left=16+Math.round((i[0].offsetWidth-48)/i[0].scrollWidth*i[0].scrollLeft)+"px"),i.ScrollDirection===U.direction&&U.showpagenumbertooltip&&("none"===i._tooltip.css("display")&&(i._tooltip.css(e),i._tooltip.show()),U.showpagenumbertooltip&&i._tooltip.html("Page "+i._pagenum),i._tooltip._timeout=setTimeout(r,1e3))}}}),i}function Q(e){e&&e._tooltip&&(clearTimeout(e._tooltip._timeout),e._tooltip.hide())}function J(t){var n={scroll:function(){t.off(n),t.resumeEventPropagation()}};t._pauseEP=0,t.propagationPaused=function(){return 0<t._pauseEP},t.pauseEventPropagation=function(e){t._pauseEP++,e&&t.on(n)},t.resumeEventPropagation=function(){0<t._pauseEP&&t._pauseEP--}}function K(e){var t=me(),n=ne(0,e);!W.hidden&&t.height<=0&&t.width<=0&&(W.hidden=!0,function(){var e=this;if(nn.Edge||nn.Explorer)var t=setInterval(function(){Mn(this,e),0!==y.scroller.height()&&0!==y.scroller.width()&&(clearInterval(t),W.hidden=!1,$t("viewportunhide"))}.bind(this),500);else{var n=new ResizeObserver(function(){Mn(this,e),W.hidden=!1,$t("viewportunhide"),n.unobserve(y.scroller[0])}.bind(this));n.observe(y.scroller[0])}}()),n.width=0<N.smallest.width&&N.smallest.width<n.width&&!R?N.smallest.width:n.width,n.height=0<N.smallest.height&&N.smallest.height<n.height&&!R?N.smallest.height:n.height;var o,i=Math.ceil(t.width/n.width)+2,a=Math.ceil(t.height/n.height)+2;return U.tabular?(U.direction===an.Vertical&&0<U.columns?i=U.columns:U.direction===an.Horizontal&&0<U.rows&&(a=U.rows),o=i*a):U.direction===an.Vertical?o=a:U.direction===an.Horizontal&&(o=i),o}function $(e,t){return t<e+.001&&e-.001<t}function ee(){return 0!==N.size.width?U.minwidth/N.size.width:1}function te(){return 0!==N.size.width?U.maxwidth/N.size.width:1}function ne(e,t,n){if(q.document.getPageCount()<=0)return{width:0,height:0};if(n=void 0===n||n,W.newpagedivsize){var o={width:W.newpagedivsize.width,height:W.newpagedivsize.height},i=U.showpageborder&&n?2*U.pageborderwidth:0,a=(t||U.zoom)/W.newpagedivfullzoom;return o.height=Math.round(o.height*a)+i,o.width=Math.round(o.width*a)+i,o}return oe(e,t||U.zoom,U.showpageborder&&n)}function oe(e,t,n){var o,i=en.extend({},fe(e)),a=n?2*U.pageborderwidth:0;return t*=(o=e,q.document.getPageFitMultiplier(o)),i.height=Math.round(i.height*t)+a,i.width=Math.round(i.width*t)+a,i}function ie(e,t){return ce(null,e,t).index}function ae(e,t){var n=se(),o=me();if(U.direction===an.Vertical){var i=0;if(y.scrollH&&(i=1,"none"!==y.scrollH.find("div").css("display")||nn.Firefox||(i=y.scrollH.outerHeight(!0))),t>=n.height-o.height-i&&0<W.scrollTargetPage)return W.scrollTargetPage-1}var a=y.scrollV&&"none"!==y.scrollV.find("div").css("display")?1:0;if(U.direction===an.Horizontal&&e===n.width-o.width-a&&0<W.scrollTargetPage)return W.scrollTargetPage-1;var r={x:e+U.pageselectlocation.x*o.width,y:t+U.pageselectlocation.y*o.height};return ie(r.x,r.y)}function re(e,t){for(var n={left:0,top:0},o=e;null!=o&&o!==t;o=o.offsetParent)n.left+=o.offsetLeft,n.top+=o.offsetTop;return n}var le={height:0,isEmpty:function(){return 0===this.width&&0===this.height},width:0,zero:function(){this.width=0,this.height=0},zoom:1};function se(){if(le.isEmpty()||le.zoom!==U.zoom){var e=ce(null,null,null,U.zoom);le.height=e.height,le.width=e.width,le.zoom=U.zoom}return le}function ce(e,t,n,o){return ue(0,e,t,n,o)}function ue(e,t,n,o,i){if(U.tabular)return function(e,t,n,o,i){if(t<e)return{width:0,height:0,index:t};var a=de(e,n,o,i),r=de(t,n,o,i);return r.height=U.direction===an.Vertical?r.height-a.height:r.height,r.width=U.direction===an.Horizontal?r.width-a.width:r.width,r}(e,t,n,o,i);var a=q.document.getPageCount();t=t||0===t?t:a;var r={height:0,width:0,index:e=e||0};if(U.direction===an.Vertical)for(var l=null,s=e;s<a&&s<t&&(r.height+(l=ne(s,i).height)<=o||null==o);s++)r.height+=l+U.pagespacing,r.index++;else if(U.direction===an.Horizontal)for(var c=null,u=e;u<a&&u<t&&(r.width+(c=ne(u,i).width)<=n||null==n);u++)r.width+=c+U.pagespacing,r.index++;return r.index>=a&&0<a&&(r.index=a-1),r}function de(e,t,n,o){var i,a,r=q.document.getPageCount(),l={height:0,width:0,index:0},s=he(o);e=null==e?e=r:e,U.direction===an.Vertical?(i=s||1,a=Math.ceil(r/i)):U.direction===an.Horizontal&&(a=s||1,i=Math.ceil(r/a));var c=ne(0,o);c.width+=U.pagespacing,c.height+=U.pagespacing;var u=null==n?Math.floor(e/i):Math.floor(n/c.height),d=null==t?e%i:Math.ceil(t/c.width);return l.height=u*c.height,l.width=d*c.width,l.index=u*i+d,l.index>=r&&0<r&&(l.index=r-1),l}function he(e){var t=1;if(U.tabular){var n=U.pagespacing||0,o=ne(0,e);U.direction===an.Vertical?(t=Math.floor(y.content.width()/o.width),t=Math.min(t,Math.floor((y.content.width()-t*n)/o.width))):U.direction===an.Horizontal&&(t=Math.floor(y.content.height()/o.height),t=Math.min(t,Math.floor((y.content.height()-t*n)/o.height)))}return t||1}function ge(e,t){var n=fe(e);return(vt(e)+(t||0))%180==0?n:{width:n.height,height:n.width}}function fe(e){var t=q.document.getPageSize(e);return t||N.size}function pe(e,t){return q.document.canBeTiled(e,t)}function me(){return{width:y.scrollV?y.main.width()-y.scrollV.outerWidth():y.main.width(),height:y.scrollH?y.main.height()-y.scrollH.outerHeight():y.main.height()}}function ve(e,t){var n={status:"fail",started:!1,reason:e};return"function"==typeof t&&t.call(),n}function _e(e,t,n,o,i,a){var r=re(e,t);return r.left<=i&&r.left+e.clientWidth>=n&&r.top<=a&&r.top+e.clientHeight>=o}function be(e,t,n){return t<e.length&&(e.splice(n,0,e.splice(t,1)[0]),!0)}function ye(e){U.showstatus&&y.status&&y.status.html(e),$t({type:"statusmessage",message:e})}function xe(e,t){var n;if(1===e.length&&"object"==typeof e[0])n=e[0];else if("string"==typeof e[0]){n={};var o=null;3===e.length?o=e[2]:2===e.length&&(o=e[1]);for(var i=-1<e[0].indexOf(" ")?e[0].split(" "):[e[0]],a=0;a<i.length;a++)n[i[a]]=o}for(var r in n)if(n.hasOwnProperty(r)){var l=null;if(r in d?l=d:c&&r in c.annotations.events?l=c.annotations.events:c&&r in c.forms.events?l=c.forms.events:c&&r in c.document.events&&(l=c.document.events),null==l&&(l=d),null==l[r])t&&(l[r]=[n[r]]);else if(t)l[r].push(n[r]);else if(n[r])for(var s=0;s<l[r].length;s++)l[r][s]===n[r]&&l[r].splice(s,1);else l[r].length=0}}function we(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function ze(e,t,n,o,i){if(null==i&&"function"==typeof o&&(i=o,o=null),e=null==e?y.scroller.scrollLeft():e,t=null==t?y.scroller.scrollTop():t,U.direction===an.Horizontal){if(e>y.viewport.width()){var a=se();if(e<a.width&&0<y.content.width()){var r=a.width-(y.edges[0].width()+y.content.width());y.edges[1].width(r)}}}else if(U.direction===an.Vertical&&t>y.viewport.height()){var l=se();if(t<l.height&&0<y.content.height()){var s=l.height-(y.edges[0].height()+y.content.height());y.edges[1].height(s)}}y.scroller.stop(),!n||W.loading||W.scrollPos.x===e&&W.scrollPos.y===t?(y.scroller.scrollLeft(e),y.scroller.scrollTop(t),"function"==typeof i&&i.call()):en.when(y.scroller.animate({scrollLeft:e,scrollTop:t},{duration:o||u,easing:"easeOutQuad",queue:!1})).done(i)}function Pe(e,t){if(y.scroller.is(":animated"))return ve("scrolling",t);var n=ce(N.number+e-1);ze(n.width,n.height,!0,t)}function De(){if(y.scrollH&&y.scrollV){var e=q.document.getPageCount();if(y.scrollH.pauseEventPropagation(),y.scrollV.pauseEventPropagation(),U.direction===an.Vertical){Te(y.scrollH,"width");var t=Math.round(ce(e-1).height+ne(e-1).height);nn.Firefox&&(t+=Math.round(y.scrollH.scrollbarHeight())),y.scrollV.scrollSize(t-(y.scrollV.height()-y.scrollH.scrollbarHeight()-1)),3e4<t?(y.scrollV.ratio(t/(3e4-(y.scrollV.height()-y.scrollH.scrollbarHeight()-1))),y.scrollV._tray.height(3e4)):(y.scrollV._tray.height(t),y.scrollV.ratio(1)),ke(y.scrollV)}else if(U.direction===an.Horizontal){Te(y.scrollV,"height");var n=Math.round(ce(e-1).width+ne(e-1).width);y.scrollH.scrollSize(n),3e4<n?(y.scrollH.ratio(n/(3e4-(y.scrollH.width()-y.scrollV.width()-1))),y.scrollH._tray.width(3e4)):(y.scrollH._tray.width(n),y.scrollH.ratio(1)),ke(y.scrollH)}y.scrollV._max=Math.max(y.scrollV._tray.height()-y.scrollV.height(),0)+1,y.scrollH._max=Math.max(y.scrollH._tray.width()-y.scrollH.width(),0)+1,y.scrollH.resumeEventPropagation(),y.scrollV.resumeEventPropagation()}}function Te(e,t){if(e){var n=Math.round(N.size[t]*U.zoom);if(U.tabular)n=y.content[t]();else for(var o=0;o<y.pageDivs.length;o++)null!=y.pageDivs[o]._index&&(n=Math.max(ne(y.pageDivs[o]._index)[t],n));e._tray[t](n),e.scrollSize(n-e[t]()),ke(e),e.ratio(1)}}function ke(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}function Ce(e){if(!W.zooming&&!W.scrollBuffer&&y.pageDivs.length){var t=(new Date).getTime(),a=y.scroller[0].scrollLeft,r=y.scroller[0].scrollTop,n=a+y.scroller[0].clientWidth,o=r+y.scroller[0].clientHeight,i=ie(a,r)+1,l=Math.abs(i-N.number)/he();if(!W.loading){var s=q.document.getPageCount(),c=y.pageDivs[0]._index,u=y.pageDivs[y.pageDivs.length-1]._index,d=0===l&&(N.number-1<c||N.number-1>u);l<y.pageDivs.length&&!d?_e(y.edges[1][0],y.scroller[0],a,r,n,o)&&u<s-1?Ie(l):_e(y.edges[0][0],y.scroller[0],a,r,n,o)&&0<c?Ae(l):i!==N.number&&null===Je(i-1)&&Ve(i):He(i,!1,null),gt()}if(Le(ae(a,r)+1),!y.scroller.propagationPaused()&&y.scrollH&&y.scrollV){var h=Math.round(a/y.scrollH._ratio),g=Math.round(r/y.scrollV._ratio);h!==y.scrollH.scrollLeft()&&(y.scrollH.pauseEventPropagation(!0),y.scrollH.scrollLeft(h)),g!==y.scrollV.scrollTop()&&(y.scrollV.pauseEventPropagation(!0),y.scrollV.scrollTop(g))}$t({type:"scroll",x:a,y:r,dx:a-W.scrollPos.x,dy:r-W.scrollPos.y}),e&&(W.scrollTimeout&&clearTimeout(W.scrollTimeout),W.scrollTimeout=setTimeout(function(){var e,t,n,o,i;e=a,t=r,n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop,i=n===W.scrollPos.x&&o===W.scrollPos.y,e===W.scrollPos.x&&t===W.scrollPos.y&&i?(Ot(),W.scrollTimeout=null,W.loading||gt()):i||(Ce({}),W.scrollTimeout=null)},500),W.scrollPos.x=y.scroller[0].scrollLeft,W.scrollPos.y=y.scroller[0].scrollTop,W.scrollPos.t=t),W.scrollBuffer=e?setTimeout(Me,50):null}}function Me(){null!==W.scrollBuffer&&(clearTimeout(W.scrollBuffer),W.scrollBuffer=null)}function Ee(){if(U.direction===an.Horizontal){var e=y.pageDivs.length?(R?Math.max(N.size.height,N.size.width):N.size.height)*U.zoom:0;U.thumbpadding&&"number"==typeof U.thumbpadding&&(e+=2*U.thumbpadding),y.edges[0].height(e),y.edges[1].height(e)}}function Se(e,t){t=t||0===t?t:e+y.pageDivs.length-1,t=Math.max(e,t);var n=U.tabular?he():1,o=U.tabular?(Math.floor(t/n)+1)*n-t:1,i=ce(e),a=q.document.getPageCount(),r=t<a?ne(t):{width:0,height:0},l=t<a-n?ne(a-1):{width:0,height:0},s=ue(e,t);s.width+=r.width,s.height+=r.height;var c=ue(t+1,a-1);if(c.width+=l.width,c.height+=l.height,U.direction===an.Vertical)if(y.edges[0].height(i.height),t+o>=q.document.getPageCount()){var u=i.height+s.height+c.height;y.scrollH&&u>y.scroller[0].clientHeight&&y.content.width()<=y.scroller[0].clientWidth?y.edges[1].height(y.scrollH.scrollbarHeight()):y.edges[1].height(0)}else y.edges[1].height(c.height),nn.Chrome&&y.content.height("");else if(U.direction===an.Horizontal)if(y.edges[0].width(i.width),t+o>=q.document.getPageCount()){var d=i.width+s.width+c.width;y.scrollV&&d>y.scroller[0].clientWidth&&y.content.height()<=y.scroller[0].clientHeight?y.scrollV._explicitSize?y.edges[1].width(y.scrollV.height()<y.scrollV._tray.height()?y.scrollV.width():0):y.edges[1].width(y.scrollV.width()):y.edges[1].width(0)}else y.edges[1].width(c.width),y.edges[1].height(1)}function Fe(){return W.activepage}function Ae(e){if(e=e||1,0===W.prpr&&0<y.pageDivs.length){var t=he(U.zoom);We();for(var n=e;0<n;n--){var o=y.pageDivs[0]._index-t;if(0<=o&&o<q.document.getPageCount()){for(var i=t-1;0<=i;i--){var a=Xe(-1);Be(a),y.content.prepend(a),qe(a,Ye(o+i),o+i)}Se(o,null),Ee()}}setTimeout(Ue,10)}}function Ie(e){e=e||1;var t=y.pageDivs[y.pageDivs.length-1]._index+1;if(0===W.prpr&&0<y.pageDivs.length&&t<q.document.getPageCount()){We();for(var n=he(U.zoom),o=q.document.getPageCount(),i=e;0<i;i--){var a=y.pageDivs[y.pageDivs.length-1]._index+1;if(a<o){for(var r=a+n-1-y.pageDivs.length,l=0;l<n;l++){var s=Xe(1);Be(s),y.content.append(s),qe(s,Ye(a+l),a+l)}Se(r+1,a),Ee()}}setTimeout(Ue,10)}}
/**
   * Scrolls the viewer to the given page index and executes the callback when finished.
   * @param {number} index - Index of the page to show.
   * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
   *  @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPage
   */function Oe(e,t){Ve(e+1,t)}
/**
   * Scrolls the viewer to the given page number and executes the callback when finished.
   * @param {number} pageNumber - Number of the page to show. Note that page number is expected 1-based.
   * @param {NotificationCallback} [callback]: function to execute after this operation is done
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function showPageNumber
   * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer#showPage|showPage} instead.
   */function Ve(e,t){var n=this;if(U.direction===an.Vertical?y.scrollV&&clearTimeout(y.scrollV._tooltip._timeout):U.direction===an.Horizontal&&y.scrollH&&clearTimeout(y.scrollH._tooltip._timeout),e=Math.max(1,e),e=Math.min(q.document.getPageCount(),e),R||W.zooming||(W.scrollTargetPage=e),N.number!==e){var o=e-N.number;Math.abs(o)<y.pageDivs.length?Pe(o,t):He(e,!0,t)}else Pe(0,t);setTimeout(function(){return Mn(this,n),W.scrollTargetPage=0}.bind(this),1e4)}function He(e,t,n){var o=q.document.getPageCount(),i=e-1;if(0===W.prpr&&0<o){var a=function(){Ue(!t),"function"==typeof n&&n.call()};We();var r=0,l=0,s=i<=0?0:i;if(s+y.pageDivs.length>=o){if(s=o-y.pageDivs.length,U.tabular){var c=he();s=Math.ceil(s/c)*c}s=Math.max(s,0)}if(U.direction===an.Vertical){r=ce(s).height,y.edges[0].height(r),Se(s,null),Ee(),Re();for(var u=0;u<y.pageDivs.length;u++)y.content.append(y.pageDivs[u]),qe(y.pageDivs[u],null,s+u);var d=ce(Math.max(i,0)).height,h=N.number<e?-N.size.height:N.size.height;t&&d!==W.scrollPos.y?(ze(null,d+h,!1),ze(null,d,!0,a)):a.call()}else if(U.direction===an.Horizontal){l=ce(s).width,y.edges[0].width(l),Se(s,null),Ee(),Re();for(var g=0;g<y.pageDivs.length;g++)y.content.append(y.pageDivs[g]),qe(y.pageDivs[g],null,s+g);var f=ce(Math.max(i,0)).width,p=N.number<e?-N.size.width:N.size.width;t&&f!==W.scrollPos.x?(ze(f+p,null,!1),ze(f,null,!0,a)):a.call()}}else ve("paused",n)}function Le(e){var t=q.document.getPageCount();if(0<e&&e<=t){if(N.number!==e||N.numberoutof!==t){if(y.pageLabel.html(e+" / "+t),N.number!==e){N.number=e;for(var n=0;n<y.pageDivs.length;n++){var o=y.pageDivs[n];o._index===e-1?o.addClass(cn.atala_active_page):o.removeClass(cn.atala_active_page)}$t({type:"pagenumberchanged",number:N.number})}N.numberoutof!==t&&(N.numberoutof=t)}}else y.pageLabel.html(""),y.viewport.find("."+cn.atala_active_page).removeClass(cn.atala_active_page),N.numberoutof=0}function Re(){for(var e=y.pageDivs.length-1;0<=e;e--)Be(y.pageDivs[e])}function Be(e){nn.Explorer&&document.activeElement&&e.has(document.activeElement).length&&y.scroller.focus(),U.allowannotations&&(nn.Firefox||nn.Edge)&&q.annotations.__clearAllSelection(e),e.detach(),null!=e._img&&(e._img._page=null,e._img.getDomElement().detach(),e._img=null),$t({type:"pagerecycled",index:e._index,page:e}),e._index=-1,e.removeAttr(un.atala_page_index)}function je(e){Be(e),e._index=-1,e.removeAttr(un.atala_page_index),e._img=null,e.remove()}function qe(t,e,n,o){if(t._index===n&&t._img===e&&!o)return!1;if(o&&!t.nullinserted&&n<0)return!1;if(t._index=n,t.attr(un.atala_page_index,n),n>=q.document.getPageCount())return t.hide(),!1;if(t._img&&t._img!==e&&(t._img._page=null,0<t.has(t._img.getDomElement()).length&&t._img.getDomElement().detach(void 0,!0)),t._rubberband&&t._rubberband.reset(),t._img=e,t._img&&(t._img._page=t),t.css({display:U.tabular||U.direction===an.Horizontal?"inline-block":"block"}),U.showpagenumber&&(t.css({position:"relative"}),t._num||(t._num=en('<div style="position:absolute; right:20px; bottom:16px;z-index:1"/>'),t._num.addClass(cn.atala_page_number),t.append(t._num)),t._num.text(t._index+1)),t._img&&t._img._binds&&(t._img._binds.pageresize||(t._img._binds.pageresize=function(e){$t({type:"pageresize",page:e.image._page,image:e.image,index:e.image._page?e.image._page._index:q.document.getPageIndexByImageIndex(e.image._index),width:e.width,height:e.height})},t._img.on({pageresize:t._img._binds.pageresize})),t._img._binds.pagesizechanged||(t._img._binds.pagesizechanged=function(e){$t({type:"pagesizechanged",page:t,image:e.image,index:e.index,width:e.width,height:e.height,dx:e.dx,dy:e.dy})},t._img.on({pagesizechanged:t._img._binds.pagesizechanged}))),t._img){var i=t._img.getDomElement();if(t.append(i),t._img.trigger({type:"inserted",page:t}),!t._img._loaded)if(t.nullinserted)if(!R&&U.tiling&&U.forcepagefit){var a,r=t.width(),l=t.height();U.fitting===rn.Width?(a=(r=Math.ceil(N.size.width*U.zoom))/t.width(),l=Math.ceil(t.height()*a)):U.fitting===rn.Height&&(a=(l=Math.ceil(N.size.height*U.zoom))/t.height(),r=Math.ceil(t.width()*a)),t._img.css({width:r,height:l}),q.document.setPageFitMultiplier(t._index,a)}else t._img.css({width:t.width(),height:t.height()});else Ne(t._img,t._index);W.newpagedivsize||t.css({width:"",height:""}),t.nullinserted=!1}else t.nullinserted=!0,W.newpagedivsize||Ne(t,t._index);return $t({type:"pageshown",page:t,index:t._index}),!0}function Ne(e,t){var n=ne(t,null,!1);e.css({width:n.width,height:n.height})}function We(){W.prpr++}function Ue(e){0!==W.prpr&&(W.prpr--,0!==W.prpr||e||Ce())}function Ze(){W.itch=!0}function Xe(e){return 0<e?(be(y.pageDivs,0,y.pageDivs.length-1),y.pageDivs[y.pageDivs.length-1]):(be(y.pageDivs,y.pageDivs.length-1,0),y.pageDivs[0])}
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
function Ge(e,t){var n=en.Deferred();0<=e.cacheIndex&&y.loadedImgs[e.cacheIndex]?y.loadedImgs[e.cacheIndex].invalidate(t,function(){n.resolve()}):n.resolve();return n.promise()}function Ye(e,t,n){"function"==typeof t&&(n=t,t=void 0);var o=q.document.getPageDefinition(e);if(o){if(o.cacheIndex<0||!y.loadedImgs[o.cacheIndex]){var i=W.nextImageCacheIndex++;o.cacheIndex=i,q.document.setPageCacheIndex(e,i),y.loadedImgs[i]=G(o.index,o.ref,t,function(e){e&&((y.loadedImgs[i]=e)._cacheIndex=i,q.memory.allocate(e)),"function"==typeof n&&n.call()}),U.allowtext&&q.text&&!R&&q.text.ensurePageTextLoaded(e)}else"function"==typeof n&&n.call();return y.loadedImgs[o.cacheIndex]}}function Qe(e){var t=Je(e);if(t){var n=y.scroller[0].scrollLeft,o=y.scroller[0].scrollTop;return _e(t[0],y.scroller[0],n,o,n+y.scroller[0].clientWidth,o+y.scroller[0].clientHeight)}return!1}function Je(e){for(var t=null,n=0;n<y.pageDivs.length&&null===t;n++)y.pageDivs[n]._index===e&&(t=y.pageDivs[n]);return t}function Ke(e,t,n,o,i){o&&"function"==typeof o&&(i=o,o=!1);var a,r=Je(e);if(r){var l=y.scroller[0].scrollLeft,s=y.scroller[0].scrollTop;if((a=re(r[0],y.scroller[0])).left+=t.x,a.top+=t.y,!o&&a.left>=l&&a.left<=l+l+y.scroller[0].clientWidth&&a.top>=s&&a.top<=s+y.scroller[0].clientHeight)return void(i&&i())}else(a=ce(e)).left=a.width+t.x,a.top=a.height+t.y;var c={x:y.scroller[0].clientWidth/2,y:y.scroller[0].clientHeight/2};$e(n,ln.BottomLeft)?(c.x=y.scroller[0].clientWidth,c.y=y.scroller[0].clientHeight):$e(n,ln.TopLeft)&&(c.x=0,c.y=0),ze(a.left-c.x,a.top-c.y,!0,i)}function $e(e,t){return e&&t&&e.x===t.x&&e.y===t.y}var et=null;function tt(){et&&clearTimeout(et),et=setTimeout(function(){$t("documentchanged")},200)}function nt(){y.scroller.stop(),y.scroller.pauseEventPropagation(),We(),U.tiling&&Ze()}function ot(){De(),0<y.pageDivs.length&&Qe(q.document.getPageCount()-1)&&Se(y.pageDivs[0]._index),Ee(),y.scroller.resumeEventPropagation(),Ue()}function it(){W.zooming=!0,nt(),$t("zoomstarted")}function at(e){var t,n,o,i,a,r,l;e=Math.min(e,te()),e=Math.max(e,ee()),t=e,n=!1,i=ce(N.number,null,null),a=ce(N.number,null,null,t),r=(y.scroller.scrollLeft()-i.width)/U.zoom*t,l=(y.scroller.scrollTop()-i.height)/U.zoom*t,ze(a.width+r,a.height+l,n,T,o),U.zoom=e,gt(!1),dt(e,!1)}function rt(){W.zooming=!1,ot(),$t({type:"zoomchanged",zoom:U.zoom})}
/**
   * Asynchronously zooms the viewer to the given zoom over the default zoom duration
   * @param {number} zoom - Desired zoom level to zoom to.
   * @param {NotificationCallback} [callback] - function to execute after the zoom is finished animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoom
   */function lt(e,n){var o=this;if(W.zooming)ve("zooming",n);else if(W.zooming=!0,nt(),$t("zoomstarted"),e!==U.zoom){e=Math.min(e,te()),e=Math.max(e,ee());var t=ce(N.number,null,null),i=ce(N.number,null,null,e),a=(y.scroller.scrollLeft()-t.width)/U.zoom*e,r=(y.scroller.scrollTop()-t.height)/U.zoom*e;U.zoom=e,gt(!0,function(){var t=this;Mn(this,o),dt(e,!0,function(){var e=this;Mn(this,t),st(),ze(i.width+a,i.height+r,!1,T,function(){Mn(this,e),y.scrollH&&y.scrollH.scrollLeft(y.scroller.scrollLeft()),y.scrollV&&y.scrollV.scrollTop(y.scroller.scrollTop()),null!=n&&n()}.bind(this))}.bind(this))}.bind(this))}else st(),"function"==typeof n&&n.call()}function st(){W.zooming=!1,ot(),$t({type:"zoomchanged",zoom:U.zoom})}function ct(e,t){lt(U.zoom+(e?-1:1)*U.zoom*.3,t)}function ut(){y.edges[0]._z=U.zoom}function dt(e,t,n){if(0<y.edges.length){n="function"==typeof n?fn([ut,n]):ut;var o=U.direction===an.Vertical,i=ce(y.pageDivs[0]&&y.pageDivs[0]._img?y.pageDivs[0]._index:0,null,null,e),a=o?i.height:i.width;if(t&&!W.loading){var r=o?{height:a}:{width:a};y.edges[0].animate(r,{duration:T,easing:"easeOutQuad",complete:n,queue:!1})}else o?y.edges[0].height(a):y.edges[0].width(a),"function"==typeof n&&n.call();ht()}}function ht(u){setTimeout(function(){var e=en("<canvas/>");u=u||U.zoom;var t=U.direction===an.Vertical,n=W.newpagedivsize?W.newpagedivsize:{width:N.size.width*u,height:N.size.height*u},o=Math.max(1,U.pagespacing),i=he();e[0].width=(n.width+o)*(t?i:1),e[0].height=n.height*(t?1:i);var a=e[0].getContext("2d");a.lineWidth=U.pageborderwidth,U.backcolor&&(a.fillStyle=U.backcolor);for(var r=0;r<i;++r){var l=t?1+r*n.width:1,s=t?1:1+r*n.height;a.strokeRect(l,s,n.width-2,n.height-2),U.backcolor&&a.fillRect(l+a.lineWidth,s+a.lineWidth,n.width-2*(1+a.lineWidth),n.height-2*(1+a.lineWidth))}var c={backgroundImage:"url("+e[0].toDataURL()+")",backgroundSize:"auto auto",backgroundRepeat:t?"repeat-y":"repeat-x"};y.edges[0].css(c),y.edges[1].css(c)},0)}function gt(e,t){for(var n=0,o=!0,i=function(){if(--n<=0){if(U.direction===an.Horizontal){var e=se().width;y.spacer||(y.spacer=X(),y.spacer.css({position:"absolute",top:"-1px",height:"1px"}),y.viewport.append(y.spacer)),y.spacer.width(e)}"function"==typeof t&&t.call(),0===W.prpr&&(nn.Safari||nn.Chrome)&&y.edges[1].hide().show()}},a=0;a<y.pageDivs.length;a++){if(y.pageDivs[a]._img)(y.pageDivs[a]._img.needsZoom()||y.pageDivs[a]._img.needsRotate())&&(o=!1,n++,y.pageDivs[a]._img.needsRotate()?y.pageDivs[a]._img.rotate(i):y.pageDivs[a]._img.needsZoom()&&y.pageDivs[a]._img.zoom(e,i))}o&&i.call()}
/**
   * Asynchronously zooms the viewer to fit to a page.
   * @param {Atalasoft.Utils.Fitting} fit - Type of fitting to fit the page to.
   * @param {number} pageNumber - Page number to fit to.  Note, that it's 1-based.
   * @param {NotificationCallback} callback - Function to execute after the fit is done animating.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function fit
   */function ft(e,t,n){null!=t?"function"==typeof t&&(n=t,t=N.number):t=N.number;var o=pt(e,t-1),i=o.zoom,a=rn.Width===o.fit&&an.Vertical===U.direction,r=rn.Height===o.height;a&&ze(0,null,!1),r&&ze(null,0,!1),lt(i,n)}function pt(e,t){var n,o,i,a=(n=me(),o=U.showpageborder?2*U.pageborderwidth:0,i={width:n.width-o,height:n.height-o},U.tabular&&(1<U.columns&&(i.width=Math.floor((n.width-(U.pagespacing+o)*U.columns)/U.columns)),1<U.rows&&(i.height=Math.floor((n.height-(U.pagespacing+o)*U.rows)/U.rows))),i),r=oe(t,1,!1);0!==r.width&&0!==r.height||(e=null);var l=U.zoom;switch(e){case rn.None:break;case rn.Best:e=r.width/a.width>r.height/a.height?(l=a.width/r.width,rn.Width):(l=a.height/r.height,rn.Height);break;case rn.Height:l=a.height/r.height;break;case rn.Width:l=a.width/r.width;break;default:l=1,e=rn.None}return{zoom:l,fit:e}}function mt(e){return U.zoom*q.document.getPageFitMultiplier(e)}function vt(e){return q.document.getPageRotation(e)}function _t(e,t){t=t||0;var n=vt(e),o=mt(e),i=ge(e,t),a=tn.matrix();a.scale(o,o,0,0),a.rotate(n+t,0,0);var r,l,s=(r=a,l={x:i.width,y:i.height},{x:r.x(l.x,l.y),y:r.y(l.x,l.y)}),c=Math.min(0,s.x),u=Math.min(0,s.y),d=a.invert(),h=d.x(-c,-u),g=d.y(-c,-u);return a.translate(h,g),a}function bt(e){var t=en.data(e.currentTarget,"_config"),n=en.data(e.currentTarget,"_annoConfig");!n&&t&&(n={type:t.icon,rotatable:U.showrotatetools}),n&&(q.mouseTool.setTool(on.None,on.None),q.annotations.drawAnnotation(n,!1,xt,yt))}function yt(){q.mouseTool.setTool(on.Pan,on.None)}function xt(){q.mouseTool.setTool(on.Pan,on.None)}
/**
   * Checks whether annotations support is enabled.
   * @private
   */function wt(){return!1===U.allowannotations&&Z("InitError",'The "allowannotations" property in the WebDocumentViewer config is set to false.'),U.allowannotations}function zt(){for(var e=0;e<y.pageDivs.length;e++)y.pageDivs[e]._draw.toFront()}function Pt(){for(var e=0;e<y.pageDivs.length;e++)y.pageDivs[e]._draw.reset()}function Dt(e,t,n){if(e){if(W.loading=!0,Re(),N.size.width=e.pagewidth,N.size.height=e.pageheight,N.count=e.pagecount,N.buffer=U.pagebuffersize,N.dpi=e.dpi,N.vector=!0===e.vector,U.allowannotations=n.allowannotations,U.allowforms=n.allowforms,U.allowtext=n.allowtext,U.tiling=n.tiling,U.documenturl=n.documenturl,U.annotationsurl=n.annotationsurl,U.formsurl=n.formsurl,q.document.__linkChanges(t),q.annotations&&(q.annotations.clear(),q.annotations.loadAnnotations(e)),q.forms&&(q.forms.clear(),e.forms&&q.forms.loadForms(e)),q.text&&q.text.search(""),W.scrollTargetPage=0,W.zooming=!1,e.zoom)U.zoom=e.zoom;else{var o=pt(U.fitting,0);U.zoom=o.zoom}Et(e.pagenumber||0),q.mouseTool.setTool(U.mousetool.type&&!R?U.mousetool.type:on.Pan,on.None),ht(),W.loading=!1,gt(),V=t.__getSelectedPagesIndices,$t({type:"activedocumentchanged"})}}function Tt(e,t){t&&qt(!0);for(var n=0;n<e._controllers.document.getPageCount();++n){var o=e._controllers.document.getPageDefinition(n,s);o&&0<=o.cacheIndex&&y.loadedImgs[o.cacheIndex]&&(q.memory.deallocate(y.loadedImgs[o.cacheIndex]),y.loadedImgs[o.cacheIndex].dispose(),y.loadedImgs[o.cacheIndex].remove(),y.loadedImgs[o.cacheIndex]=void 0)}}function kt(e,o){W.loading=!0;var t={atala_docurl:U.documenturl,atala_pagebuffer:U.pagebuffersize,atala_minwidth:U.minwidth,atala_tiling:U.tiling};R&&(t.atala_thumb=R,t.atala_capt_format=U.thumbcaptionformat),U.tiling&&y.scroller.addClass(cn.atala_page_loading),null!=e&&("function"==typeof e&&(o=e,e=null),en.extend(t,e)),Bt({type:"docinfo",serverurl:U.serverurl,query:"?ataladocinfo=",method:"GET",data:t,cancel:!1,info:{pagewidth:-1,pageheight:-1,pagecount:-1}},function(e){Ct(e,o)},function(e,t,n){!function(e,t,n,o){if(U.tiling&&y.scroller.removeClass(cn.atala_page_loading),e.responseText){var i=e.responseText.substr(e.responseText.indexOf("</html>")+7);0<=i.indexOf("\x3c!--")?0<(i=i.replace("\x3c!--","").replace("--\x3e","")).length&&(n="<pre>"+i+"</pre>"):0<e.responseText.indexOf("web.config")&&0<e.responseText.indexOf("customErrors")&&(n+=": web.config customErrors attribute has disabled remote error messages.")}Z("DocumentLoadError",n),"function"==typeof o&&o.call(void 0,n)}(e,0,n,o)})}function Ct(t,n){var e,o;(U.tiling&&y.scroller.removeClass(cn.atala_page_loading),t&&!1!==t.licensed)?(N.size.width=t.pagewidth,N.size.height=t.pageheight,N.count=t.pagecount,N.buffer=U.pagebuffersize,N.dpi=t.dpi,N.vector=!0===t.vector,N.caption=t.thumbcaptionformat||(U.showthumbcaption?"{0}":""),le.zero(),q.memory.clearEntries(),q.memory.colorDepth=t.colordepth,q.memory.pageSize={width:t.pagewidth,height:t.pageheight},$t({type:"documentinfochanged",info:{count:N.count,dpi:N.dpi,size:{height:N.size.height,width:N.size.width},vector:N.vector,pagesizes:t.pagesizes},customData:t.customData}),q.text&&(q.text.clear(),t.text&&q.text.loadText(t)),W.loading&&(U.zoom=1,L(),ze(0,0),y.scrollV&&y.scrollV.pageNum(1),Le(1),ft(U.fitting,1,function(){Ee(),Se(0,y.pageDivs.length-1);for(var e=0;e<y.pageDivs.length&&e<N.count;e++)y.content.append(y.pageDivs[e]),qe(y.pageDivs[e],null,e);0<y.pageDivs.length&&y.pageDivs[0].addClass(cn.atala_active_page),t.layers&&t.layers.length?q.annotations.loadAnnotations(t):U.annotationsurl&&q.annotations&&q.annotations.clear(),q.forms&&(q.forms.clear(),t.forms&&q.forms.loadForms(t)),q.mouseTool.setTool(U.mousetool.type&&!R?U.mousetool.type:on.Pan,on.None),W.loading=!1,ht(),"function"==typeof n&&n(t.error,t),t.error&&setTimeout(function(){Z("DocumentLoadError",t.error)},0)})),W.loading=!1):(o=t&&!1===t.licensed?(e="LicenseException",t.error?t.error:"LicenseException: Handler was unable to find a valid license."):(e="DocumentLoadError","HandlerException: Handler did not return any data."),W.loading=!1,"function"==typeof n&&n.call(void 0,o),e&&o&&Z(e,o))}function Mt(){Et()}function Et(e){if(L(),0<y.pageDivs.length){var t=q.document.getPageCount(),n="number"==typeof e?e:y.pageDivs[0]._index;n=0<=n?Math.min(n,t-y.pageDivs.length):0;for(var o=0;o<y.pageDivs.length&&o<t;o++){var i=n+o;Be(y.pageDivs[o]),y.content.append(y.pageDivs[o]),qe(y.pageDivs[o],null,i)}}Se(0<y.pageDivs.length?y.pageDivs[0]._index:0,null),Ee(),Ot(),De();var a=ae(y.scroller[0].scrollLeft,y.scroller[0].scrollTop);Le(a+1),0<=e&&a!==e&&Oe(e)}function St(e,t){var n={atala_docurl:U.documenturl,atala_spath:U.savepath};function o(e){!function(e){e.error?Z("DocumentSaveError",e.error):ye("DocumentSave: success="+e.success);$t({type:"documentsaved",success:e.success,customData:e.customData,fileName:e.fileName})}(e),"function"==typeof t&&t.call()}en.extend(n,e),Bt({type:"docsave",serverurl:U.serverurl,query:"?ataladocsave=",method:"POST",data:n,cancel:!1,info:{success:void 0,error:void 0}},o,function(e){var t=[];t.error=e.responseText,o(t)})}function Ft(e,t,n){var o=null;return"string"==typeof e?(o={},W.initialized&&n&&(0<e.length?(n.clear(),o=n.createHandlerRequest(U.serverurl,e,t)):0===e.length&&n.clear()),o.url=e):void 0!==e&&null!=e&&Z("openUrlError","string input expected for url."),o}function At(){Jt({annotationsloaded:Lt})}function It(){Jt({formsloaded:Rt})}function Ot(e){if(!(0<y.pageDivs.length&&void 0===y.pageDivs[0]._index))for(var t=0;t<y.pageDivs.length;t++)Ht(y.pageDivs[t],e)}function Vt(e,t){var n=Je(e);n&&Ht(n,t)}function Ht(e,t){(qe(e,Ye(e._index),e._index)||t)&&(q.annotations&&q.annotations.showLayer(e._index,e),q.forms&&!R&&q.forms.showLayer(e._index,e),q.text&&!R&&U.allowtext&&q.text.showLayer(e._index,e))}function Lt(e){e.error&&(Z("AnnotationsLoadError",e.error),U.annotationsurl=""),q.annotations&&Kt({annotationsloaded:Lt})}function Rt(e){e.error&&(Z("FormsLoadError",e.error),U.formsurl=""),q.forms&&Kt({formsloaded:Rt})}function Bt(o,t,i,n){var a,r,e,l=this,s=(a=o,r=function(e){t(e.request.info)},Jt({handlerreturned:e=function e(t){t.request===a&&(Kt({handlerreturned:e}),"function"==typeof r&&r.call(this,t))}}),e);if($t({type:"beforehandlerrequest",request:o}),!o.cancel&&(Kt({handlerreturned:s}),o.serverurl&&!en.isEmptyObject(o.data))){if(!(o.info instanceof en&&"docpage"===o.type)){if("fileupload"!==o.type)return en.ajax({type:o.method,url:o.serverurl+o.query+"?",dataType:"json",data:o.data,success:t,error:i,crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0});var c="&"+en.param(o.data),u=new FormData;u.append("file",o.file,o.file.name);var d=en.ajax({type:o.method,url:o.serverurl+o.query+"??"+c,dataType:"json",data:u,contentType:!1,processData:!1,success:function(e){Mn(this,l),e.success&&(e.success=JSON.parse(e.success)),e.canceled&&(e.canceled=JSON.parse(e.canceled)),t(e,o.file.name)}.bind(this),error:function(e,t,n){Mn(this,l),i(t,n,o.file.name)}.bind(this),crossDomain:("string"!=typeof o.method||"post"!==o.method.toLowerCase())&&void 0,xhr:function(){var t=this;Mn(this,l);var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){Mn(this,t),e.lengthComputable&&(n(o.file.name,e.loaded,e.total)||d.abort())}.bind(this),!1),e}.bind(this)});return d}o.info.attr("src",o.serverurl+o.query+"&"+en.param(o.data))}}
/**
   * Resets the viewer to its default state.
   * @param {OpenUrlCallback} [callback]  - Function to execute when the empty process is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function empty
   */
function jt(e){W.loading=!0;qt(),Ct({pagewidth:0,pageheight:0,pagecount:-1},function(){De(),$t({type:"documentunloaded"}),"function"==typeof e&&e.call()})}function qt(e){var t;W.initialized&&(Re(),L(0),e||function(){for(var e=0;e<y.loadedImgs.length;e++)y.loadedImgs[e]&&(y.loadedImgs[e].dispose(),y.loadedImgs[e].remove());y.loadedImgs.length=0}(),y.edges[0].width(0).height(0),y.edges[1].width(0).height(0),y.scrollH&&(y.scrollH.scrollSize(0),ke(y.scrollH)),y.scrollV&&(y.scrollV.scrollSize(0),ke(y.scrollV)),t={backgroundImage:"",backgroundSize:"",backgroundRepeat:"",backgroundColor:""},y.edges[0].css(t),y.edges[1].css(t))}
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
function Nt(){return W.initialized}
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
function Wt(e,t){var n=U.direction===an.Vertical?he():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),Pe(e,t)}
/**
   * Scrolls to the previous viewable page.
   * @param {number} n - Number of pages to scroll backward.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function previous
   */function Ut(e,t){var n=U.direction===an.Vertical?he():1;null==t&&"function"==typeof e&&(t=e,e=n),isFinite(e)||(e=n),Pe(-e,t)}
/**
   * Zooms in one level.
   * @param {NotificationCallback} [callback] - Function to execute when the zoom operation is finished
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomIn
   */function Zt(e){ct(!1,e)}
/**
   * Zooms out one level.
   * @param  {NotificationCallback} [callback] - Function to execute when the zoom operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function zoomOut
   */function Xt(e){ct(!0,e)}
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
   */function Gt(e,t,n,o){null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null));var i=0,a=!1,r=Ft(t,e,q.annotations),l=Ft(n||e,e,q.forms);U.annotationsurl=r?r.url:U.annotationsurl,U.formsurl=l?l.url:U.formsurl;var s,c,u,d,h=function(e,t){--i<=0&&(Ot(!0),$t({type:"documentloaded",customData:null==t?void 0:t.customData}),"function"==typeof o&&o.call(void 0,e,t))};if("string"==typeof e){if(0===e.length)jt(h);else if(U.documenturl=e,W.initialized){qt(),Q(y.scrollH),Q(y.scrollV),i++;var g={};U.allowannotations&&r&&r.data&&(At(),en.extend(g,r.data)),U.allowforms&&l&&l.data&&(It(),en.extend(g,l.data)),a=!0,kt(g,h)}}else!(e||!(0<U.documenturl.length)||!t&&""!==t&&!n&&""!==n)||Z("openUrlError","string input expected for document url.");a||(r&&(i++,u=r,d=h,q.annotations&&(At(),q.annotations.makeHandlerRequest(u,d))),l&&(i++,s=l,c=h,q.forms&&(It(),q.forms.makeHandlerRequest(s,c))))}
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
   */function Yt(e,t,n,o){"function"==typeof n&&(o=n,n={}),"function"==typeof t&&(o=t,t=U.savefileformat),"function"==typeof e&&(o=e,e=null),void 0===t&&(t=U.savefileformat);var i=en.extend(!0,n,{atala_subpath:e||"",atala_sformat:t});q.annotations&&en.extend(i,{atala_iuname:U.annotations.saveusername,atala_annos:q.annotations.stringifyChanges()}),q.forms&&en.extend(i,{atala_forms:q.forms.stringifyChanges()}),q.document&&en.extend(i,{atala_document:q.document.stringifyChanges()}),St(i,o)}
/**
   * Gets the current page index
   * @returns {number} Zero based index of the current page.
   *
   * Note, that current page index detection could be affected by {@link WebDocumentViewerConfig.pageselectlocation|pageselectlocation} configuration parameter.
   * @instance
   * @memberof Atalasoft.Controls.WebDocumentViewer
   * @function getCurrentPageIndex
   */
function Qt(){return N.number-1}
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
function Jt(e,t){return xe(arguments,!0),i.on.apply(i,arguments),c}
/**
   * Detaches the handler from the event.
   * @param {string} event - the name of the event to unbind.
   * @param {function} [handler] -  the event handler to unbind. If not specified, all handlers are unbound.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function unbind
   */function Kt(e,t){return xe(arguments,!1),i.off.apply(i,arguments),c}
/**
   * Triggers the event.
   * @param {string} event - the name of the event to trigger.
   * @param {Object} [parameters] - the event data.
   * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function trigger
   */function $t(e,t){return i.trigger.apply(i,arguments),c}
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
return c.__getDebugInfo=function(){var e={version:yn.join(".")};U.debug&&en.extend(!0,e,{dom:y,controllers:q,page:N});return e}
/**
   * [Internal] Gets the viewer linkage for controls that inherit this one
   * @param viewer object of type WebDocumentViewer
   * @returns linker object if possible, otherwise undefined
   */,c.__getViewerLink=function(e){if(e&&"Atalasoft.Controls.WebDocumentThumbnailer"===e.typeOf){var t=new function(){this.typeOf="__LVlinker",this._id=s,this._config=U,this._controllers=q,this._dom=y,this._page=N,this._state=W,this._annos=null,this._fields=null,this.stateManager=r,this.__createDialog=k,this.__createDiv=X,this.__createDOM=w,this.__createDropDownButton=C,this.__createDropDownMenu=M,this.__createMenu=D,this.__getPageSize=fe,this.__getTabularIndexOffset=he,this.__redrawVisiblePages=Ot,this.__adjustVisiblePages=gt,this.__onDocumentChanged=Mt,this.__startDomManipulation=nt,this.__endDomManipulation=ot,this.__status=ye,this.__updatePageSize=p,this.__silentReloadPage=Ge,this.__isObjectInRect=_e,this.__getIndexFromPos=ie,this.__showNext=Ie,this.__showPrevious=Ae,this.__showPageAsync=He,this.__adjustEdgeHeights=Se,this.__getSelectedPagesIndices=V};return q.document.__linkChanges(t),U.allowannotations&&(e!==c&&0<U.annotationsurl.length&&(U.annotationsurl=""),q.annotations.__linkAnnotations(t)),U.allowforms&&(e!==c&&0<U.formurl.length&&(U.formurl=""),q.forms.__linkForms(t)),U.allowtext&&q.text&&q.text.__linkText(t),t}},c.dispose=
/**
   * Removes all DOM elements, internal references, and empties memory intensive objects.
   * The WebDocumentViewer will no longer function after a call to this method.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function dispose
   */
function(){if(!R&&r&&r.closeDocument(),qt(),y.main&&y.main.remove(),y.toolbar&&(y.toolbar.controlgroup("destroy"),y.toolbar.remove(),y.toolbar.annoToolbar&&(y.toolbar.annoToolbar.controlgroup("destroy"),y.toolbar.annoToolbar.remove())),y.search&&y.search.dispose(),y.uploadCtrl&&y.uploadCtrl.remove(),y.main=null,y.toolbar=null,y.scroller=null,y.viewport=null,y.content=null,y.scrollH=null,y.scrollV=null,y.loadedImgs.length=0,y.pageDivs.length=0,y.pageLabel=null,y.status=null,y.search=null,y.uploadCtrl=null,y.edges){for(var e=0;e<y.edges.length;e++)y.edges[e]=null;y.edges=[]}for(var t in q)q.hasOwnProperty(t)&&null!==q[t]&&(q[t].dispose(),q[t]=null);W={prpr:0,batchoperation:0,loading:(N={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,scrollTargetPage:0,hidden:!1,itch:!1}},c.empty=jt,c.fit=ft,c.getZoom=function(){return U.zoom},c.isReady=Nt,c.scrollTo=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);ze(e,t,n,null,o)}
/**
   * Scrolls by the given deltas, does not account for zoom, i.e. `dx` and `dy` values are passed in window coordinate space.
   * @param {number} dx - Indicating delta of the x axis.
   * @param {number} dy - Indicating delta of the y axis .
   * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
   * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
   * @instance
   * @memberOf Atalasoft.Controls.WebDocumentViewer
   * @function scrollBy
   */,c.scrollBy=function(e,t,n,o){null==o&&"function"==typeof n&&(o=n,n=!1);i=e,a=t,r=n,l=null,s=o,ze(y.scroller.scrollLeft()+i,y.scroller.scrollTop()+a,r,l,s);var i,a,r,l,s},c.next=Wt,c.previous=Ut,c.zoom=lt,c.zoomIn=Zt,c.zoomOut=Xt,c.openUrl=c.OpenUrl=Gt,c.save=Yt,c.uploadFiles=
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
function(e,t,n){if(R)return;q.upload.uploadFiles(e,t,n)}
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
   */,c.uploadFile=function(e,t,n){if(R)return;q.upload.uploadFile(e,t,n)}
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
   */,c.filterFilesForUpload=function(e,t,n){if(R)return;return q.upload.filterFilesPublic(e,t,n)},c.getCurrentPageIndex=Qt,c.bind=Jt,c.unbind=Kt,c.trigger=$t,c.getDocumentInfo=function(){return{count:q.document.getPageCount(),dpi:N.dpi,size:{height:N.size.height,width:N.size.width},vector:N.vector}},c.setMouseTool=function(e){for(var t in on)if(on.hasOwnProperty(t)&&on[t]===e){q.mouseTool.setTool(e);break}},c.isPageLoaded=function(e){var t=q.document.getPageDefinition(e);return 0<=t.cacheIndex&&y.loadedImgs[t.cacheIndex]&&y.loadedImgs[t.cacheIndex]._loaded}
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
   */,c.reloadPage=function(o,e,t,n,i){var a=en.Deferred(),r=en.Deferred(),l=en.Deferred(),s=en.Deferred();"function"==typeof n&&(i=n,n=void 0),"function"==typeof t&&(i=t,t=!1),"function"==typeof e&&(i=e,e=!1),"function"==typeof i&&a.done(i);var c=q.document.getPageDefinition(o);if(!c)return a.resolve(),a.promise();0<=c.cacheIndex&&y.loadedImgs[c.cacheIndex]?s=Ge(c,n):Ye(o,n,function(){s.resolve()});var u="string"==typeof e?e:c.uri?null:U.annotationsurl;U.allowannotations&&e&&(u||c.uri)?q.annotations.loadAnnotationsUrl(U.serverurl,u,c.uri,c.index,1,o,function(){r.resolve(!0)}):(e&&q.annotations.loadAnnotations({layers:[[]],offset:o}),r.resolve(!!e));var d="string"==typeof t?t:c.uri?null:U.formsurl;return U.allowforms&&t&&(U.formsurl||d)?q.forms.loadFormUrl(U.serverurl,d,c.uri,c.index,1,o,function(){l.resolve(!0)}):l.resolve(),en.when(s,r,l).done(function(e,t,n){(t||n)&&Vt(o,!0),a.resolve(o)}),a.promise()},c.showPage=Oe,c.showPageNumber=Ve,wn(),Dn(),zn(),Tn(),c.annotations=wn.__exposedApi,c.document=Dn.__exposedApi,c.forms=zn.__exposedApi,c.text=Tn.__exposedApi,function(){Nt()||(W={prpr:0,batchoperation:0,loading:(N={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0,scrollTargetPage:0,hidden:!1,itch:!1});var e={_config:U,_id:s,_dom:y,_document:y.loadedImgs,_pages:y.pageDivs,_state:W,_internalEvents:a,_controllers:q,createDOM:w,createDiv:X,createDialog:k,createDropDownButton:C,createDropDownMenu:M,createMenu:D,drawAnnotation:bt,redrawVisiblePages:Ot,adjustVisiblePages:gt,startDomManipulation:nt,endDomManipulation:ot,redrawPageFromIndex:Vt,makeHandlerRequest:Bt,getPageScale:mt,getPageSize:fe,getSourcePageSize:ge,getPageRotation:vt,getViewerTransform:_t,isPageInView:Qe,findPageFromIndex:Je,showPagePoint:Ke};q.document=new Dn(c,e,s),c.document=q.document.__exposedApi,U.allowannotations?(q.annotations=new wn(c,e,R),c.annotations=q.annotations.__exposedApi):(c.deselectAll=wt,c.createAnnotationOnPage=wt,c.getAnnotationsFromPage=wt,c.deleteAnnotationOnPageAtIndex=wt,c.setAnnotationDefaults=wt,c.setImages=wt,c.setStamps=wt),U.allowforms&&!q.forms&&(q.forms=new zn(c,e),c.forms=q.forms.__exposedApi),U.allowtext&&(q.text=new Tn(c,e,U.mousetool?U.mousetool.text:{}),c.text=q.text.__exposedApi),q.upload=new Pn(c,e),!1===W.initialized&&(W.initialized=!0,Jt({throwerror:x,pagedivsresized:g,documentchanged:Mt,pagesizechanged:f}),U.parent?(U.parent instanceof en||(U.parent=en(U.parent)),U.parent.length||Z("InitError","Parent element not found.")):Z("InitError","No parent element given."),y.toolbar=(t=U.toolbarparent||U.parent,(n=function(e){var t=this,n={id:s+"_toolbar",parent:e,children:[{type:"button",id:"Button_PagePrev",cls:cn.atala_tool_button_page_prev,icon:"page-prev",tooltip:"Previous Page",text:null,onclick:function(){Ut()}},{type:"pagelabel",id:"Label_PageNumber",cls:cn.atala_page_label},{type:"button",id:"Button_PageNext",cls:cn.atala_tool_button_page_next,icon:"page-next",tooltip:"Next Page",text:null,onclick:function(){Wt()}},{type:"button",id:"Button_ZoomOut",cls:cn.atala_tool_button_zoom_out,icon:"zoom-out",tooltip:"Zoom Out",text:"",onclick:function(){Xt()}},{type:"button",id:"Button_ZoomIn",cls:cn.atala_tool_button_zoom_in,icon:"zoom-in",tooltip:"Zoom In",text:"",onclick:function(){Zt()}},{type:"button",id:"Button_FitNone",cls:cn.atala_tool_button_fit_none,icon:"zoom-full",tooltip:"Full Size",text:"",onclick:function(){lt(1)}},{type:"button",id:"Button_FitBest",cls:cn.atala_tool_button_fit_best,icon:"fit-best",tooltip:"Best Fit",text:"",onclick:function(){ft(rn.Best)}},{type:"button",id:"Button_FitWidth",cls:cn.atala_tool_button_fit_width,icon:"fit-width",tooltip:"Fit To Width",text:"",onclick:function(){ft(rn.Width)}}]};return U.showselecttools&&n.children.splice(5,0,{type:"button",id:"Button_ZoomArea",cls:cn.atala_tool_button_zoom_area,icon:"zoom-area",tooltip:"Zoom Area",text:"",onclick:I}),U.allowtext&&(n.children.splice(3,0,{type:"button",id:"Button_Text",cls:cn.atala_tool_button_text_tool,icon:"text-tool",tooltip:"Text Selection",text:"",onclick:function(){q.mouseTool.setTool(on.Text)}}),n.children.splice(3,0,{type:"button",id:"Button_Text",cls:cn.atala_tool_button_pan_tool,icon:"pan-tool",tooltip:"Pan",text:"",onclick:function(){q.mouseTool.setTool(on.Pan)}})),U.showrotatetools&&(n.children.push({type:"button",id:"Button_RotateLeft",cls:cn.atala_tool_button_rotate_left,icon:"rotate-left",tooltip:"Rotate Left",text:"",onclick:O(270)}),n.children.push({type:"button",id:"Button_RotateRight",cls:cn.atala_tool_button_rotate_right,icon:"rotate-right",tooltip:"Rotate Right",text:"",onclick:O(90)})),0<U.savepath.length&&n.children.unshift({type:"button",id:"Button_Save",cls:cn.atala_tool_button_save,icon:"save",tooltip:"Save Changes",text:null,onclick:function(){Yt()}}),!1!==U.upload.enabled&&n.children.unshift({type:"button",id:"Button_Upload",cls:cn.atala_tool_button_upload,icon:"upload",tooltip:"Upload document",text:null,onclick:function(){!function(){var t=this;R||q.upload.uploadWithUi(function(e){Mn(this,t),e?(y.toolbar.controlgroup("enable"),U.allowannotations&&y.toolbar.annoToolbar.controlgroup("enable"),y.toolbar.find(".atala_page_label, .atala_search_container").removeClass("ui-state-disabled")):(y.toolbar.controlgroup("disable"),y.toolbar.annoToolbar&&y.toolbar.annoToolbar.controlgroup("disable"),y.toolbar.find(".atala_page_label, .atala_search_container").addClass("ui-state-disabled"))}.bind(this))}()}}),U.toolbarbuttons&&U.toolbarbuttons.reverse().forEach(function(e){Mn(this,t),n.children.unshift({type:"button",id:e.id,cls:e.class,tooltip:e.tooltip,onclick:e.onclick,text:null,icon:e.icon,custom:!0})}.bind(this)),P(n)}(t)).controlgroup(),U.allowannotations&&(n.annoToolbar=P({id:s+"_toolbar",parent:t,children:[{type:"button",id:"Button_Ellipse",cls:cn.atala_tool_button_ellipse_anno,icon:"ellipse",tooltip:"Draw Ellipse",text:"",onclick:bt},{type:"button",id:"Button_Highlight",cls:cn.atala_tool_button_highlight_anno,icon:"highlight",tooltip:"Draw Highlight",text:"",onclick:bt},{type:"button",id:"Button_Line",cls:cn.atala_tool_button_line_anno,icon:"line",tooltip:"Draw Line",text:"",onclick:bt},{type:"button",id:"Button_Lines",cls:cn.atala_tool_button_lines_anno,icon:"lines",tooltip:"Draw Poly Lines",text:"",onclick:bt},{type:"button",id:"Button_Freehand",cls:cn.atala_tool_button_freehand_anno,icon:"freehand",tooltip:"Draw Freehand",text:"",onclick:bt},{type:"button",id:"Button_Polygon",cls:cn.atala_tool_button_polygon_anno,icon:"polygon",tooltip:"Draw Polygon",text:"",onclick:bt},{type:"button",id:"Button_Rectangle",cls:cn.atala_tool_button_rect_anno,icon:"rectangle",tooltip:"Draw Rectangle",text:"",onclick:bt},{type:"button",id:"Button_Text",cls:cn.atala_tool_button_text_anno,icon:"text",tooltip:"Draw Text",text:"",onclick:bt}]}),n.annoToolbar.addClass(cn.atala_annotation_toolbar),n.annoToolbar.controlgroup()),U.showstatus&&(y.status=en('<div id="'+s+'_status" style="display:inline"></div>'),y.status.addClass(cn.atala_statusbar),n.append("Status:"),n.append(y.status)),U.allowtext&&U.mousetool.text.allowsearch&&(y.search=new A({parent:n})),n),y.toolbar.addClass(cn.atala_toolbar),y.main=X(U.parent),y.main.addClass(cn.atala_main_container),y.scroller=X(y.main),y.scroller.addClass(cn.atala_scroller),y.main.on({selectstart:v}),y.toolbar.attr("id",s+"_toolbar"),y.main.attr("id",s+"_main"),y.scroller.attr("id",s+"_scroller"),y.main.css({height:"100%",width:"100%",position:"relative"}),y.scroller.css({height:"100%",width:"100%",position:"relative"}),y.viewport=X(y.scroller,s+"_vp"),y.viewport.css({overflow:"hidden",fontSize:0,"touch-action":"none"}),y.viewport.addClass(cn.atala_viewport),y.viewport.attr("tabindex",-1),y.edges[0]=H(y.viewport,s+"_e0"),y.edges[0].addClass(cn.atala_dom_edge_first),y.content=X(y.viewport,s+"_ct"),y.content.addClass(cn.atala_content),y.content.css({"-ms-touch-action":"none",fontSize:0,overflow:"hidden"}),U.direction===an.Horizontal&&y.content.css({display:"inline-block"}),y.edges[1]=H(y.viewport,s+"_e1"),y.edges[1].addClass(cn.atala_dom_edge_last),nn.Features.Compatibility&&Z("InitError","Compatibility Mode is not supported."),!1===U.upload.enabled||R||(y.uploadCtrl=q.upload.getUploadControl()),nn.Mobile.Any()?y.scroller.css({overflow:"hidden"}):U.showscrollbars?(y.scroller.css({overflow:"auto"}),y.scrollH=Y(y.main,an.Horizontal),y.scrollH.attr("id",s+"_sH"),y.scrollH.addClass(cn.atala_scroll_horizontal),y.scrollV=Y(y.main,an.Vertical),y.scrollV.attr("id",s+"_sV"),y.scrollV.addClass(cn.atala_scroll_vertical)):y.scroller.css({overflow:"hidden"}),q.mouseTool=new kn(c,{_internalEvents:a,_controllers:q,zoomStart:it,zoom:at,zoomEnd:rt,getActivePage:Fe,raiseDrawLayer:zt,resetDrawLayer:Pt,getViewerTransform:_t},y.viewport,y.scroller,en.extend({allowflick:U.allowflick},U.mousetool)),q.memory=new bn({highWaterMark:U.memorythreshold}),q.memory.bind({exceededhighwatermark:h}),q.annotations&&q.annotations.setViewPort(y.viewport),$t("initialized"),U.direction===an.Horizontal&&y.viewport.css({"white-space":"nowrap"}),y.viewport.css({display:"table-cell"}),J(y.scroller),y.scrollH&&y.edges[1].height(y.scrollH.scrollbarHeight()),q.mouseTool.setTool(on.Pan,on.None),(U.documenturl||U.annotationsurl||U.formurl)&&Gt(U.documenturl,U.annotationsurl,U.formurl,o),en(m));var t,n}(),c};function Se(e,t){return e.singlepage?new Ee(e,t):new Ke(e,t)}function $e(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}
/**
 * Control that shows thumbnails of document pages and annotations.
 * @param {WebThumbnailerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @augments Atalasoft.Controls.WebDocumentViewer
 * @returns {WebDocumentThumbnailer} A new control with the given settings.
 * @memberof Atalasoft.Controls
 */Se.domclasses=cn,Se.domattributes=un;function Fe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){Ae(t,e,n[e])})}return t}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Main Atalasoft Namespace definition(s)
 * @namespace Atalasoft
 */n.d(t,"Utils",function(){return Le}),n.d(t,"Annotations",function(){return Ue}),n.d(t,"Controls",function(){return Ze}),n.d(t,"Logger",function(){return Xe});var Ie={WebDocumentThumbnailer:function(e,n){var s,l,h=null,g=e.viewer||null,f=[],p=[],c=null,m=null,u=null,v="atala_dragdata",d="ui-sortable",_="sortable",b="atala_scroll_parent",y=null,x={size:{width:0,height:0},sizes:[{width:0,height:0}],count:0,number:-1,dpi:96,vector:!1},w={base:null,loading:!1,initialized:!1,scrolling:!1,dragdropping:!1,viewer:{zoom:0,pagenumber:0,api:{}},selfapi:{}},o={moves:0,start:{x:NaN,y:NaN}},z={divsize:-1,scale:1,size:0,zoom:1,zoomfull:1},P={direction:an.Vertical,
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
selecteditemsorder:Qe.ItemIndexOrder},t={type:"Atalasoft.Controls.WebDocumentThumbnailer",debug:!0,showpageborder:!0,forcepagefit:!0,toolbarparent:en("<div/>")},i={
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
thumbdragcomplete:null};function D(){return{get:function(){return h},detachViewer:M,activateViewer:C}}function T(e,t){if(e){var n=t?e.bind:e.unbind,o=t?h.unbind:h.bind;n.call(e,{beforehandlerrequest:De,documentloaded:ge,scroll:be,pagerotated:ze,pageinserted:pe,pageremoved:ve,pagemoved:_e}),o.call(h,{pagerotated:fe,pageinserted:fe,pageremoved:fe,pagemoved:fe}),a(e,e.document.events,n),P.allowannotations&&(n.call(e,{annotationresized:Pe,annotationmoved:Pe,annotationrotated:Pe,annotationchanged:Pe,annotationcreated:xe,annotationdeleted:we}),e.annotations&&a(e,e.annotations.events,n))}}function a(e,t,n){var o={};for(var i in t)t.hasOwnProperty(i)&&(o[i]=r);n.call(e,o)}function r(){h.trigger.apply(h,arguments)}
/**
   * Checks whether current thumbnailer is controlling referenced viewer.
   *
   * If viewer is linked only to the current thumbnailer, this method always return `true`.
   *
   * If thumbnailer is not linked to any viewer, this method always return `false`.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#isActive
   * @returns {boolean} `true` if current thumbnailer instance is controlling referenced viewer; `false` otherwise.
   */function k(){return g&&(!y||y&&y.isThumbnailerActive(D()))}
/**
   * Takes ownership over referenced viewer, i.e. if shared viewer is currently displaying other document, it's switched to display document from calling thumbnailer.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#activate
   */function C(e,t,n){if(!g&&e&&(m=(g=e).__getViewerLink(h,u),y=m.stateManager),g&&g.isReady()&&(!k()||n)){var o=g&&!k(),i=(a={pagewidth:x.size.width,pageheight:x.size.height,pagecount:x.count,dpi:x.dpi,colordepth:w.base.controllers.memory.colorDepth,vector:x.vector,pagenumber:w.viewer.pagenumber,zoom:w.viewer.zoom},P.allowannotations&&u._annos&&(a.layers=se(u._annos,"items")),P.allowforms&&u._fields&&(a.forms={fields:se(u._fields)}),a);i.customData=null==t?void 0:t.customData,y.activateThumbnailer(D(),i,u,P,n),o&&(T(g,!0),E((l={thumb:{annotations:null,document:null,text:null,getCurrentPageIndex:null,getZoom:null,zoom:null,zoomIn:null,zoomOut:null,next:null,previous:null,save:null,showPage:null,setMouseTool:null},viewer:{reloadPage:function(e){return s=e.reloadPage,X}}}).viewer,r=g,h,w.viewer.api),E(l.thumb,h,r,w.selfapi))}var a,r,l;N(!0)}function M(){if(g&&g.isReady()&&(w.viewer.zoom=g.getZoom(),w.viewer.pagenumber=g.getCurrentPageIndex(),P.allowforms&&w.base.controllers.forms&&m._fields)){var e={forms:{fields:se(m._fields)}};w.base.controllers.forms.loadForms(e)}var t;T(g,!1),t=g,E(S(w.viewer.api),t,w.viewer.api,{}),E(S(w.selfapi),h,w.selfapi,{}),N(!1)}function E(e,t,n,o){for(var i in e)e.hasOwnProperty(i)&&(t.hasOwnProperty(i)&&t[i]&&(o[i]=t[i]),"function"==typeof e[i]?t[i]=e[i](t,n):n.hasOwnProperty(i)&&n[i]&&(t[i]=n[i]))}function S(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=null);return t}e&&("thumbsize"in e&&isFinite(e.thumbsize)&&0<e.thumbsize&&(ue(e.thumbsize),t.forcepagesize={width:e.thumbsize,height:e.thumbsize}),en.extend(P,e),en.extend(P,t),P.showpagenumber=P.showpagenumber&&!P.showthumbcaption,"fitting"in e||(P.fitting=P.direction===an.Vertical?rn.Width:rn.Height),g&&g.config&&(P.allowtext=g.config.allowtext,P.tiling=g.config.tiling)),h=Ke.call(this,P,function(e,t){Ee(e,t,n)}),u=h.__getViewerLink(h),P=u._config,F=u.__createDiv,u.__getSelectedPagesIndices=V,P.allowdragdrop=!!P.allowdragdrop,P.selectedindex=he(P.selectedindex)?parseInt(P.selectedindex,10):0,P.thumbpadding=he(P.thumbpadding)?parseInt(P.thumbpadding,10):8,P.backcolor=de(P.backcolor,"#DCDCDC"),P.hovercolor=de(P.hovercolor,"#667F9F"),P.selectedcolor=de(P.selectedcolor,"#E0872D"),P.selectedhovercolor=de(P.selectedhovercolor,"#FFC060");var F=function(){},A=function(){};function I(){if(P.debug){var e=A(),t=V();return en.extend(!0,e,{thumbnailer:{config:P,index:t[0],indices:t,links:{viewer:m,self:u},page:x,thumb:z,state:w}}),e}return null}
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
function V(){var n=this,e=f.slice(0);return P.selecteditemsorder===Qe.ItemIndexOrder&&e.sort(function(e,t){return $e(this,n),e-t}.bind(this)),e}function H(e){var t=1,n=function(){--t<=0&&(k()&&y&&g&&C(g,h.getDocumentInfo(),!0),"function"==typeof e&&e.call())};k()&&(y?y.closeDocument(D(),u):g.isReady()&&(t++,g.empty(n))),L(n)}h.getSelectedPageIndex=
/**
   * @summary Gets the selected thumbnail index.
   * @description Gets the selected thumbnail index when Web Document Thumbnailer (WDT) setup to use singleselect. When WDT setup to use multiselect, then this method returns the first element of the selected page indices, with respect of {@link WebDocumentViewerConfig.selecteditemsorder| selecteditemsorder} parameter value.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPageIndex
   * @returns {number}
   */
function(){return V()[0]},h.getSelectedPagesIndices=V,h.selectThumb=W,h.deselectThumb=U,h.isActive=k,h.activate=function(){C(g,h.getDocumentInfo())};var L=function(){};function R(){k()&&(y?y.closeDocument(D(),u):g.empty(),M()),B(),m=g=null}var B=function(){};function j(e,t,n,o){w.base&&en.each(w.base.dom.pageDivs,function(e,t){t.off(c),t.thumbInitialized=!1}),null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof n&&(o=n,n=null)),"string"==typeof e&&(y.closeDocument(D(),u),w.viewer.pagenumber=0,w.base&&(w.base.state.scrollPos.x=0,w.base.state.scrollPos.x=0)),q(e,t,n,function(e,t){h.scrollTo(0,0,!1),Ee(e,t,o)})}var q=function(){};function N(e){if(w.base){0===f.length&&f.push(0);for(var t=0;t<w.base.dom.pageDivs.length;t++){var n=0<t?w.base.dom.pageDivs[t-1]:null,o=w.base.dom.pageDivs[t],i=!1;-1<f.indexOf(o._index)&&e?(o.removeClass("atala_grouped_selection"),o.addClass(h.domclasses.atala_active_thumb),null!==n&&-1<f.indexOf(n._index)&&(o.addClass("atala_grouped_selection"),n.addClass("atala_grouped_selection")),i=!0):(o.removeClass(h.domclasses.atala_active_thumb),o.removeClass("atala_grouped_selection")),J(o,i)}}}
/** 
   * Highlights the thumbnail at the given index, and scrolls to it in the linked viewer, if possible.
   * @param {number|string} index - Index of the page to select. Can be passed as string representation of a number
   * @param {boolean} [append] - Append index to the already selected thumbs or not. Its value ignores in single select mode.
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been selected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#selectThumb
   */function W(e,t,n){var o=this;if(m._controllers.upload&&m._controllers.upload.abort(),!(null===(e=Je(e))||e<0||e>=h.getDocumentInfo().count||void 0!==t&&"boolean"!=typeof t&&null!==t||void 0!==n&&"function"!=typeof n&&null!==n)){if(t=!!t&&P.selectionmode!==Ye.SingleSelect){if(-1<f.indexOf(e))return;f.push(e)}else V().forEach(function(e){$e(this,o),h.trigger({type:"thumbdeselected",index:e})}.bind(this)),f.length=0,f.push(e);Z(),h.trigger({type:"thumbselected",index:e}),"function"==typeof n&&n()}}
/** 
   * Resets the thumbnail highlight at the given index, and scrolls to the next selected thumbnail in the linked viewer, if possible.
   *
   * This function doesn't deselect the given index in the single select mode, and in multi select mode, if one page is selected.
   * @param {number|string} index - Index of the page to deselect. Can be passed as string representation of a number
   * @param {NotificationCallback} [callback] - function that is called when thumbnail has been deselected.
   * @function Atalasoft.Controls.WebDocumentThumbnailer#deselectThumb
   */function U(e,t){if(null!==(e=Je(e))&&(void 0===t||"function"==typeof t||null===t)){var n=f.indexOf(e);-1!==n&&1!==f.length&&(f.splice(n,1),Z(),h.trigger({type:"thumbdeselected",index:e}),"function"==typeof t&&t())}}function Z(){var e=V();if(y?(w.viewer.pagenumber=e[0],C(g,h.getDocumentInfo())):N(!0),!(1<f.length)&&g){var t=g.getCurrentPageIndex(),n=e[0];0<=t&&n!==t&&(w.scrolling=!0,g.showPage(n,ye))}}
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
   */function X(e,t,n,o,i){if(l){var a=Array.prototype.slice.call(arguments);if(g&&g.isReady())if(k()){var r=Array.prototype.slice.call(a);"function"!=typeof(i=a.pop())&&(a=Array.prototype.slice.call(r)),l.apply(this,a).then(function(){s&&s.apply(this,r)})}else l.apply(this,arguments);else l.apply(this,arguments)}}function G(){if(w.base){if(w.initialized&&0<w.base.dom.pageDivs.length&&null!=w.base.dom.pageDivs[0]._img&&!w.base.dom.pageDivs[0]._img._size.isEmpty()){var e=w.base.dom.pageDivs[0]._img._size;e.width>e.height?z.scale=z.size/e.width:z.scale=z.size/e.height,P.tabular&&1<P.columns&&P.direction===an.Vertical&&ce()}else{var t=w.base.page.size.width/w.base.page.size.height<1,n=Math.ceil(w.base.page.size.height*w.base.config.zoom),o=Math.ceil(w.base.page.size.width*w.base.config.zoom),i=z.size;P.direction===an.Vertical?z.divsize=Math.ceil(w.base.page.size.width*w.base.config.zoom):P.direction===an.Horizontal&&(z.divsize=Math.ceil(w.base.page.size.height*w.base.config.zoom)),ue(i=i<=0?z.divsize-2*P.thumbpadding:i),P.tabular&&1<P.columns&&P.direction===an.Vertical&&ce();var a=t?n:o;z.scale=a?w.base.config.zoom*(z.size/a):1,z.zoomfull=z.scale,P.minwidth>w.base.page.size.width*z.scale&&w.base.page.size.width&&(P.minwidth=w.base.page.size.width*z.scale),w.initialized=!0}var r=P.showpageborder?2*P.pageborderwidth:0,l=z.size+2*P.thumbpadding-r;if(h.trigger({type:"pagedivsresized",height:l,width:l,fullzoom:z.zoomfull,minwidth:P.minwidth}),P.allowdragdrop){w.base.dom.content.addClass(h.domclasses.atala_thumb_draggable),w.base.dom.content.css({minWidth:l,minHeight:l});var s=Math.round(z.size/2);w.base.dom.content.sortable({containment:"window",connectWith:"."+h.domclasses.atala_thumb_draggable,appendTo:document.body,placeholder:h.domclasses.atala_drag_placeholder,cursorAt:{left:s,top:s},delay:P.dragdelay,distance:4,helper:$,opacity:.65,scroll:!0,scrollSensitivity:s,scrollSpeed:10,start:ee,receive:ie,stop:oe,over:te,change:ne,tolerance:"pointer",update:ae,zIndex:100})}en.each(w.base.dom.pageDivs,function(e,t){t.width(z.size),t.height(z.size),t.thumbInitialized||(t.on(c),t.css({padding:P.thumbpadding,"background-color":P.backcolor,cursor:"pointer","margin-bottom":P.pagespacing+"px","text-align":"center",position:"relative"}),P.tabular?t.css({"margin-right":P.pagespacing+"px"}):P.direction===an.Horizontal&&t.css({"margin-right":P.pagespacing+"px","margin-bottom":"0px"}),t._paper&&nn.Explorer&&(t._paper.canvas.style.top="",t._paper.canvas.style.width="",t._paper.canvas.style.height=""),t._grips&&(t._grips.push=function(){}),t.thumbInitialized=!0),Y(t._img,t._paper)}),0<w.base.dom.pageDivs.length&&u.__adjustEdgeHeights(w.base.dom.pageDivs[0]._index)}}function Y(e,t,n,o){if(w.base){var i=o||e&&e.getScaledSize(n);if(!i)return;var a=i.width,r=i.height,l=z.size*(w.base.config.zoom/z.zoomfull);if(l<a||l<r){var s,c=a/r<1;r=P.tiling&&0===e._size.width&&0===e._size.height?(s=(n=e.getFitZoom())*(l/(c?r:a)),a=Math.round(e.getSize().width*s),Math.round(e.getSize().height*s)):(s=n*(l/(c?r:a)),a=Math.round(e._size.width*s),Math.round(e._size.height*s)),n=s}e.width(a),e.height(r);var u=e.getDomElement();u[0].style.left="50%",u[0].style.top="50%",u[0].style.position="absolute",u[0].style.marginLeft=-Math.round(a/2)+"px",u[0].style.marginTop=-Math.round(r/2)+"px",t&&(t.canvas.style.left="50%",t.canvas.style.top="50%",t.canvas.style.marginLeft=-Math.round(a/2)+"px",t.canvas.style.marginTop=-Math.round(r/2)+"px",t.canvas.style.zIndex=1),e.trigger({type:"pagezoom",index:e._page._index,height:Math.round(r),width:Math.round(a),prevzoom:w.base.config.zoom,zoom:n})}}function Q(e,t,n){var o=e.data("selected")?t:n;e.css("background-color",o)}function J(e,t){var n=t?P.selectedcolor:P.backcolor;e.data("selected",t),e.css("background-color",n)}function K(e){var t=this;this._initial=e,this._actual=e,this.scrollTop=function(){t._actual.scrollTop()},this.scrollLeft=function(){t._actual.scrollTop()},this.setObject=function(e){t._actual=e,this[0]=t._actual[0]},this.offset=function(){return t._actual.offset()},this.setObject(e)}function $(e,t){w.dragdropping=!0,N(k());var n=en('<div class="atala_drag_helper"></div>'),o=function(e){var n=this,o=[];return e.hasClass(h.domclasses.atala_active_thumb)&&k()?V().forEach(function(e){$e(this,n);for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t]._index===e){o.push(w.base.dom.pageDivs[t]);break}}.bind(this)):o.push(e),o}(t);1<o.length&&(en(this).sortable("option","items","> *:not(.atala_grouped_selection)"),en(this).sortable("refresh"));for(var i=t.hasClass(h.domclasses.atala_active_thumb)&&k()?Math.min(3,V().length):1,a=0;a<o.length||a<i;a++){var r=a<o.length?o[a]:o[0];if(a<i){var l=r.find("."+h.domclasses.atala_page_image_anchor).first().clone();l.css({position:"absolute",left:10*a+"px",top:-10*a+"px",right:"0px",bottom:"0px",margin:"","z-index":-a}),n.append(l)}}w.base.dom.content.append(n);var s=n.scrollParent(),c=w.base.dom.content.data(d)||w.base.dom.content.data(_);return n.hide(),setTimeout(function(){var t=this;c&&(c.scrollParent=new K(s),o.forEach(function(e){$e(this,t),e.data(b,c.scrollParent)}.bind(this))),n.appendTo("body"),n.show()},1),n}function ee(e,t){var n=this;m._controllers.upload.abort();var o=function(e){if(e.hasClass(h.domclasses.atala_active_thumb)&&k())return V();for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t][0]===e[0])return[w.base.dom.pageDivs[t]._index];return null}(t.item);if(null!==o){var i=[];o.forEach(function(e){$e(this,n),i.push(h.document.getPageReference(e))}.bind(this));var a={start:o,end:o[0],updateHandled:!1,pageRefs:i,documenturl:"object"==typeof i[0]&&i[0].uri?i[0].uri:w.base.config.documenturl,thumbLink:u,thumb:h,thumbId:u._id,viewerId:m._id,state:w,externalDropIndex:null,insertAfterSelf:!1};t.item.data(v,a),w.base.controllers.mouseTool.pauseTool(),t.placeholder.width(t.item.width()),t.placeholder.height(t.item.height()),t.placeholder.css({margin:t.item.css("margin"),display:w.base.config.tabular||w.base.config.direction===an.Horizontal?"inline-block":"block",padding:Math.max(0,w.base.config.thumbpadding-1)}),h.trigger({type:"thumbdragstart",dragindex:a.start[0],dragindices:a.start})}}function te(e,t){if(!nn.Mobile.Any()){var n=t.placeholder.parents("."+h.domclasses.atala_scroller),o=t.item.data(b);n.length&&o&&o[0]!==n.first()[0]&&o.setObject(n.first())}}function ne(e,t){var n=t.item.data(v);if(n){var o=t.placeholder.prev();n.insertAfterSelf=o.length&&t.item[0]===o.first()[0]}}function oe(e,t){var n=this,o=t.item.data(v),i=P.parent.offset().left,a=P.parent.offset().left+P.parent.width(),r=P.parent.offset().top,l=P.parent.offset().top+P.parent.height(),s=t.position.left+t.item.width()/2,c=t.position.top+t.item.height()/2,u=i<s&&s<a&&r<c&&c<l;if(o&&u){w.base.controllers.mouseTool.resumeTool(),o.updateHandled||(o.end=re(t),o.updateHandled=!0),o.insertAfterSelf&&++o.end,o.end=o.start[0]<o.end?o.end-1:o.end;var d={type:"thumbdragend",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,sourcedocument:o.documenturl,target:h,external:!1,pageref:o.pageRefs[0],pagerefs:o.pageRefs,cancel:!1};h.trigger(d,d),d.cancel?en(this).sortable("cancel"):(m&&k()&&g.isReady()?m._controllers.document.movePages(o.start,o.end):w.base.controllers.document.movePages(o.start,o.end),le(),(f.length=0)<p.length?(p.sort(function(e,t){return $e(this,n),e-t}.bind(this)).forEach(function(e){$e(this,n),W(e,!0)}.bind(this)),p.length=0):W(o.end,!1),d={type:"thumbdragcomplete",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,target:h},w.dragdropping=!1,h.trigger(d,d))}else o&&!u&&en(this).sortable("cancel");en(this).sortable("option","items","> *"),en(this).sortable("refresh"),t.item.data(v,null)}function ie(e,t){var o=this;en(t.sender).sortable("cancel");var i=t.item.data(v);if(i){i.thumbLink._controllers.mouseTool.resumeTool();var n=w.base.dom.pageDivs.length?w.base.dom.pageDivs[0]._index:0;i.end=i.externalDropIndex+n||0;var a={type:"thumbdragend",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,sourcedocument:i.documenturl,target:h,pageref:i.pageRefs[0],pagerefs:i.pageRefs,external:!0,cancel:!1,copyannotations:!0};if(h.trigger(a.type,a),!a.cancel){var r=[];a.copyannotations&&i.thumb.config.allowannotations&&h.config.allowannotations&&i.start.forEach(function(e){$e(this,o),r.push(i.thumb.annotations.getFromPage(e))}.bind(this)),i.viewerId!==m._id&&i.thumb.selectThumb(i.thumb.getCurrentPageIndex(),!1),w.scrolling=!0,i.thumb.document.removePages(i.start),h.document.insertPages(null,i.pageRefs,i.end),g&&(w.viewer.pagenumber=i.end,C(g,h.getDocumentInfo(),!0)),le(),f.length=0,P.selectionmode===Ye.SingleSelect?W(i.end):i.start.forEach(function(e,t){W(i.end+t,!0)}),r.forEach(function(e,t){if($e(this,o),e)for(var n=0;n<e.length;n++)h.annotations.createOnPage(e[n],i.end+t)}.bind(this)),h.trigger("thumbdragcomplete",{type:"thumbdragcomplete",dragindex:i.start[0],dragindices:i.start,dropindex:i.end,source:i.thumb,target:h}),w.dragdropping=!1,i.state.dragdropping=!1}}t.item.data(v,null)}function ae(e,t){var n=t.item.data(v);n&&(w.base.dom.content.has(t.item).length?(n.end=re(t),n.thumbId===u._id&&h.trigger({type:"thumbsreordered",dragindex:n.start[0],dragindices:n.start,dropindex:n.end})):n.externalDropIndex=t.item.index(),n.updateHandled=!0)}function re(e){for(var t=-1,n=e.item.prev().length?e.item.prev().first():[null],o=0;o<w.base.dom.pageDivs.length;++o)if(w.base.dom.pageDivs[o][0]===n[0]){t=w.base.dom.pageDivs[o]._index;break}return t+1}function le(){var e=w.base.dom.scroller[0];if(u.__isObjectInRect(w.base.dom.edges[1][0],e,e.scrollLeft,e.scrollTop,e.scrollLeft+e.clientWidth,e.scrollTop+e.clientHeight)){var t=w.base.dom.pageDivs[0]._index,n=u.__getIndexFromPos(e.scrollLeft,e.scrollTop),o=n-t;o<w.base.dom.pageDivs.length&&0<o?u.__showNext(o):(u.__showPageAsync(n,!1),u.__redrawVisiblePages())}}function se(e,t){var n=[];for(var o in e)if(e.hasOwnProperty(o)){var i=[],a=t?{}:i;for(var r in t&&(a[t]=i),e[o])e[o].hasOwnProperty(r)&&(i[r]=e[o][r].get(),i[r].multiview=!0);n[o]=a}return n}function ce(){if(P.tabular){var e;if(1<P.columns)e=(z.size+2*P.thumbpadding+P.pagespacing)*Math.min(w.base.controllers.document.getPageCount(),P.columns);else if(1<P.rows){var t=Math.ceil(w.base.controllers.document.getPageCount()/P.rows);e=(z.size+2*P.thumbpadding+P.pagespacing)*t}e&&w.base.dom.content.width(e)}}function ue(e){e<=0&&h.trigger({type:"throwerror",name:"Invalid thumb size",msg:"Thumb size cannot be "+e+". Check configuration parameters 'minwidth', 'thumbpadding' and 'thumbsize'. If 'thumbsize' is not specified, then 'minwidth' should be at least (2 * thumbpadding + 1)."}),z.size=e,w.base&&w.base.config.forcepagesize&&(w.base.config.forcepagesize.width=e,w.base.config.forcepagesize.height=e)}function de(e,t){var n="#FFFFFF",o="#FFF",i="white",a="rgb(255, 255, 255)",r=F(null,"dummy");return r.css("backgroundColor",i),r.css("backgroundColor",e),r.css("backgroundColor")===a&&(e=e.toLowerCase())!==i&&e!==n&&e!==o&&e!==a&&(e=t),e}function he(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function ge(){}function fe(e,t){0<w.base.state.batchoperation||("function"==typeof e&&(t=e),G(),u.__redrawVisiblePages(!0),u.__adjustVisiblePages(),w.base&&m&&k()&&g.isReady()?(m.__redrawVisiblePages(!0),m.__adjustVisiblePages(!1,t)):"function"==typeof t&&t())}function pe(e){w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.insertLayer(null,null,e.destindex),w.base.controllers.forms&&w.base.controllers.forms.insertForm(null,null,e.destindex),m._state.batchoperation<=0&&fe())}function me(){fe();var e=g.getCurrentPageIndex();O(e)}function ve(e){w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.removeLayer(e.index),w.base.controllers.forms&&w.base.controllers.forms.removeForm(e.index),m._state.batchoperation<=0&&fe())}function _e(e){var n=this;if(w.base&&(w.base.controllers.annotations&&w.base.controllers.annotations.moveLayer(e.shiftedsrcindex,e.destindex),w.base.controllers.forms&&w.base.controllers.forms.moveForm(e.shiftedsrcindex,e.destindex),function(){var e=w.base.dom.pageDivs[0]._index;w.base.dom.pageDivs.sort(function(e,t){return e.index()-t.index()});for(var t=0;t<w.base.dom.pageDivs.length;t++){var n=w.base.dom.pageDivs[t];n._index=e+t,null!=n._num&&n._num.text(n._index+1)}}(),m._state.batchoperation<=0&&fe(),w.dragdropping)){var t=e.destindex;p.sort(function(e,t){return $e(this,n),t-e}.bind(this)).forEach(function(e){$e(this,n),e===t&&t--}.bind(this)),p.push(t)}}function be(){var e=g.getCurrentPageIndex(),t=V();t.length<=1&&t[0]!==e&&!w.scrolling&&W(e)}function ye(){w.scrolling=!1}function xe(e){if(w.base){var t=m._annos[e.page]||null,n=null;t&&(n=t[t.length-1].get()),n&&n.type===e.anno.type&&(n.multiview=!0,w.base.controllers.annotations.createAnnotation(n,e.page))}}function we(e){w.base&&w.base.controllers.annotations.deleteAnnoOnPage(e.page,e.index)}function ze(){w.base&&m._state.batchoperation<=0&&fe()}function Pe(e){if(w.base){var t=e.anno.getPageIndex();if(function(e){for(var t=0;t<w.base.dom.pageDivs.length;t++)if(w.base.dom.pageDivs[t]._index===e)return!0;return!1}(t))for(var n=w.base.controllers.annotations.getAnnosFromPage(t),o=0;o<n.length;o++)n[o].type===e.anno.type&&n[o].update(!0)}}function De(e){if(("docinfo"===e.request.type||"annodata"===e.request.type||"formdata"===e.request.type)&&w.base){e.request.cancel=!0,"docinfo"===e.request.type&&(e.request.info.pagewidth=x.size.width,e.request.info.pageheight=x.size.height,e.request.info.pagecount=x.count,e.request.info.dpi=x.dpi,e.request.info.colordepth=w.base.controllers.memory.colorDepth,e.request.info.vector=x.vector);var t=void 0!==e.request.info.docIndex?e.request.info.docIndex:e.request.info.offset||0,n=-1<e.request.info.length?e.request.info.length+t:void 0;if(e.request.info.offset=e.request.info.offset||0,P.allowannotations&&("annodata"===e.request.type||e.request.data.atala_annurl)){var o=w.base.controllers.annotations.__getDebugInfo().data;e.request.info.layers=se(o.annos.slice(t,n),"items")}if(P.allowforms&&("formdata"===e.request.type||e.request.data.atala_formurl)){var i=w.base.controllers.forms.__getDebugInfo().data;e.request.info.forms={fields:se(i.fields.slice(t,n))}}g.trigger({type:"handlerreturned",request:e.request})}}function Te(){}function ke(){}function Ce(e,t,n){for(var o in n)n.hasOwnProperty(o)&&delete n[o]}function Me(){w.base={config:u._config,controllers:u._controllers,dom:u._dom,page:u._page,state:u._state,stateManager:u.stateManager}}function Ee(e,t,n){x.size.width=w.base.page.size.width,x.size.height=w.base.page.size.height,x.count=w.base.page.count,x.dpi=w.base.page.dpi,x.vector=w.base.page.vector,G(),Xe(w.base.dom.scrollH),Xe(w.base.dom.scrollV);var o=function(){k()&&W(P.selectedindex),n&&"function"==typeof n&&n(e)};w.viewer.zoom=0,(k()||y&&!y.isViewerActive())&&C(g,t,!0),o()}function Se(){Q(en(this),P.selectedhovercolor,P.hovercolor)}function Fe(){Q(en(this),P.selectedcolor,P.backcolor)}function Ae(e){if(0===e.button){for(var t=e.currentTarget,n=-1,o=0;o<w.base.dom.pageDivs.length;o++)if(w.base.dom.pageDivs[o][0]===t){n=w.base.dom.pageDivs[o]._index;break}if(-1!==n)if(P.selectionmode===Ye.MultiSelect){var i=e.shiftKey,a=nn.Platform!==Ge.Mac?e.ctrlKey:e.metaKey;if(i){var r=f[f.length-1];if(n<r)for(var l=r-1;n<=l;l--)Ie(l,!0);else for(var s=r+1;s<=n;s++)Ie(s,!0)}else Ie(n,a)}else W(n)}}function Ie(e,t){t=t&&k(),-1!==f.indexOf(e)&&t?U(e):W(e,t)}function Oe(e,t,n){if(!(1<e.originalEvent.touches.length)){e.preventDefault();var o=e.originalEvent.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent(t,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,n,null),e.target.dispatchEvent(i)}}function Ve(e){if(o.moves=0,o.start={x:NaN,y:NaN},e.originalEvent.touches&&1===e.originalEvent.touches.length){var t=e.originalEvent.touches[0];o.start.x=t.screenX,o.start.y=t.screenY}Oe(e,"mouseover",0),Oe(e,"mousedown",0)}function He(e){if(e.originalEvent.touches&&e.originalEvent.touches.length){var t=e.originalEvent.touches[0];(1<e.originalEvent.touches.length||5<Math.abs(o.start.x-t.screenX)||5<Math.abs(o.start.y-t.screenY))&&o.moves++,Oe(e,"mousemove",0)}}function Le(e){Oe(e,"mouseup",0),0<o.moves?o.moves=0:Oe(e,"click",0),Oe(e,"mouseout",0)}function Re(){w.dragdropping&&(N(k()),w.base.dom.content.sortable("refresh"))}function Be(e){if(P.showthumbcaption){if(!e.page._caption){var t=en("<div/>");t.css({left:"3%",bottom:"16px",width:"94%",position:"absolute",zIndex:1,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),t.addClass(h.domclasses.atala_thumb_caption),e.page._caption=t,e.page.append(t)}var n=e.page._index+1+"";u._page.caption&&(n=u._page.caption.replace("{0}",n),e.page.attr("title",n)),e.page._caption.text(n)}e.page&&e.page._img&&!e.page._img._loaded&&Y(e.page._img,e.page._paper),J(e.page,-1<f.indexOf(e.page._index)&&k())}function je(e){e.image&&(e.image._loaded?e.page&&Y(e.image,e.page._paper,z.scale,{width:e.width,height:e.height}):e.image.css({position:"absolute"}))}function qe(e){m&&m.__status&&m.__status(e.message)}function Ne(){if(w.base){var e=w.base.page.size.width/w.base.page.size.height<1,t=Math.ceil(w.base.page.size.height*w.base.config.zoom),n=Math.ceil(w.base.page.size.width*w.base.config.zoom),o=Math.max(t,n),i=w.base.config.zoom*(o/(e?t:n));z.zoom=w.base.config.zoom/z.zoomfull,z.scale=i,en.each(w.base.dom.pageDivs,function(e,t){t.width(o),t.height(o)})}}function We(){}function Ue(){}function Ze(e){m&&y&&g&&g.isReady()&&m.__updatePageSize(e,w.base.controllers.document,w.base.page.size,y.isThumbnailerActive(D()))}function Xe(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}return g&&(m=g.__getViewerLink(h,u),y=m.stateManager),h.bind({statusmessage:qe,pagerotated:fe,pageinserted:fe,pageremoved:fe,pagemoved:fe,viewportunhide:me}),h.bind({annotationsloaded:Te,formsloaded:ke,contextmenu:Ce,documentloaded:Me,pageshown:Be,pageresize:je,scroll:Re,zoomchanged:Ne,zoomstarted:We,zoomfinished:Ue,pagesizechanged:Ze}),L=h.empty,B=h.dispose,q=h.openUrl,A=h.__getDebugInfo,O=h.showPage,h.empty=H,h.dispose=R,h.openUrl=h.OpenUrl=j,h.__getDebugInfo=I,h.scrollToThumb=O,h.zoom=h.zoomIn=h.zoomOut=function(){},l=h.reloadPage,h.reloadPage=X,delete h.fit,en.extend(h.events,i),c={click:Ae,touchstart:Ve,touchmove:He,touchend:Le,mouseenter:Se,mouseleave:Fe},h},WebDocumentViewer:Se,Version:yn};function Oe(){return"object"==typeof exports&&"object"==typeof e}function Ve(){return"function"==typeof define&&n(118)}function He(){return!!self.Atalasoft}
/**
 * @namespace Utils
 * @memberof Atalasoft
 */
var Le=x,Ue={AnnotationTypes:ye},Ze=Oe()||Ve()||!He()?Ie:Fe({},self.Atalasoft.Controls,Ie),Xe=Oe()||Ve()||!He()?{}:Fe({},self.Atalasoft.Logger);
/**
 * @namespace Annotations
 * @memberof Atalasoft
 */}])});