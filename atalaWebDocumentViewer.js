//-------------------------------------------------------------------------------------------------
//
//  Web Document Viewer object cross browser client-side script. 
//  Copyright 2003-2019 Atalasoft, Inc. All Rights Reserved.
//
//  This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)
//  Permission for usage and modification of this code is only permitted 
//  with the purchase of a source code license.
//-------------------------------------------------------------------------------------------------

"use strict";var Atalasoft,_get=function e(t,a,l){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,a);if(void 0===o){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,a,l)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(l):void 0},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function l(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,a){return t&&l(e.prototype,t),a&&l(e,a),e}}();function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(e){!function(e){var t,s=void 0;function a(e){var t=new n,a=function(e,t){console.error("The dependency verification for '"+e+"' has failed. "+t)},l=o(t,"undefined"==typeof jQuery?null:jQuery,s.Jquery,a);return e.checkjQueryOnly||(l&&(l=o(t,jQuery.ui,s.JqueryUI,a)),e.checkRaphael&&(l=o(t,"undefined"==typeof Raphael?null:Raphael,s.RaphaelJS,a)&&l),e.checkClipboard&&(l=o(t,"undefined"==typeof ClipboardJS?null:ClipboardJS,s.Clibpoard,a,function(e,t){})&&l)),l}function o(e,t,a,l,o){var n=e.checkDependency(t,a);return n.success?(o&&o(a,n.reason),!0):(l(a,n.reason),!1)}(t=s||(s={})).Jquery="jQuery",t.JqueryUI="jQuery UI",t.RaphaelJS="Raphaël",t.Clibpoard="clipboard.js",e.checkJQueryDepependency=function(){return a({checkjQueryOnly:!0,checkRaphael:!1,checkClipboard:!1})},e.checkViewerDependencies=function(e,t){return a({checkjQueryOnly:!1,checkRaphael:e||t,checkClipboard:t})};var n=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"checkDependency",value:function(e,t){var a=n.requiredDependencies.filter(function(e){return e.name===t})[0],l={dependency:a,success:!1,reason:"Dependency is not loaded or not found."};if(e){var o="";switch(e.fn&&e.fn.jquery?o=e.fn.jquery:e.version&&(o=e.version),t){case s.Clibpoard:l.success=!0,l.reason="WDV can't verify the version of the dependency.";break;case s.Jquery:case s.JqueryUI:case s.RaphaelJS:this.hasNewerVersion(o,a.version)?(l.success=!0,l.reason=""):l.reason="Dependency has a lower version ("+o+") than required."}}return 0<l.reason.length&&(l.reason+=" The minimal required version is '"+a.version+"'."),l}},{key:"hasNewerVersion",value:function(e,t){if(/^[0-9]+\.[0-9]+\.[0-9]+(-([A-Za-z0-9-]+\.?)+)?(\+([A-Za-z0-9-]+\.?)+)?$/.test(e)){for(var a=/^[0-9]+\.[0-9]+\.[0-9]+/,l=function(e){return a.exec(e)[0].split(".").map(function(e){return parseInt(e)})},o=l(e),n=l(t),s=0;s<3;s++){if(o[s]<n[s])return!1;if(o[s]>n[s])return!0}var i=e.replace(a,"");return 0===i.length||"+"===i[0]}return!1}}]),n}();n.requiredDependencies=[{name:s.Jquery,version:"1.12.4"},{name:s.JqueryUI,version:"1.12.1"},{name:s.RaphaelJS,version:"2.1.0"},{name:s.Clibpoard,version:"2.0.0"}]}(e.Utils||(e.Utils={}))}(Atalasoft||(Atalasoft={})),function(e){var t,a;t=e.Controls||(e.Controls={}),a=function(){function t(e){_classCallCheck(this,t),this.viewer=e,this.currentThumb=null}return _createClass(t,[{key:"isViewerActive",value:function(){return!(!this.viewer||!this.currentThumb)}},{key:"isThumbnailerActive",value:function(e){return e&&!!this.currentThumb&&this.currentThumb.get()===e.get()}},{key:"activateThumbnailer",value:function(e,t,a,l,o){var n=this.isThumbnailerActive(e);n&&!o||(this.currentThumb&&!n&&this.currentThumb.detachViewer(),this.currentThumb=e,this.viewer&&this.viewer.isInitialized()&&(this.viewer.switchDocument(t,a,l),this.currentThumb.activateViewer()))}},{key:"closeDocument",value:function(e,t){e=e||this.currentThumb;var a=this.isThumbnailerActive(e);a&&(e.detachViewer(),this.currentThumb=null),this.viewer&&this.viewer.isInitialized()&&t&&this.viewer.closeDocument(t,a)}}]),t}(),t.DocumentStateManager=a}(Atalasoft||(Atalasoft={})),function(p){p.$="undefined"==typeof jQuery?null:jQuery;!function(c){
/**
         * Creates a rectangle object.
         * @private
         */
function n(e,t,a,l){return{x:e,y:t,width:a,height:l}}
/**
         * Calculates rectangle bounds for the clockwise page rotation to the specified angle.
         * @private
         * @param rect
         * @param page
         * @param angle positive number, must be exactly divisible by 90.
         */
function l(e,t,a){if(0===a)return e;a=(a-a%90)%360;var l=e.x,o=e.y;switch(a){case 90:l=t.height-e.y-e.height,o=e.x;break;case 180:l=t.width-e.x-e.width,o=t.height-e.y-e.height;break;case 270:l=e.y,o=t.width-e.x-e.width}return n(l,o,90===a||270===a?e.height:e.width,90===a||270===a?e.width:e.height)}c.getMousePosition=
/**
         * @private
         */
function(e,t,a){return t||(t={x:0,y:0}),c.Browser.Explorer?(null===e&&(e=event),"CSS1Compat"===document.compatMode?(t.x=e.x+document.documentElement.scrollLeft,t.y=e.y+document.documentElement.scrollTop):(t.x=e.x+document.body.scrollLeft,t.y=e.y+document.body.scrollTop)):(t.x=e.pageX,t.y=e.pageY),a&&(t.x-=a.offsetLeft,t.y-=a.offsetTop),t},c.getMousePositionJquery=
/**
         * @private
         */
function(e,t,a){t||(t={x:0,y:0});var l=e.originalEvent;if(e.offsetX||e.offsetY)if(c.Browser.Firefox){var o=e.target.raphelParent?p.$(e.target).parents("svg").offset():p.$(e.target.offsetParent||e.target.parentNode).offset();t.y=o?(t.x=e.pageX-o.left,e.pageY-o.top):(t.x=e.pageX,e.pageY)}else if(l.currentTarget===l.target||a)t.x=e.offsetX,t.y=e.offsetY;else if(l.currentTarget.offsetLeft||l.currentTarget.offsetTop||!l.currentTarget.ownerSVGElement)t.x=l.currentTarget.offsetLeft+e.offsetX,t.y=l.currentTarget.offsetTop+e.offsetY;else{var n=c.Browser.Explorer?l.currentTarget.ownerSVGElement.getBBox():l.currentTarget.getBBox();t.x=Math.round(n.x),t.y=Math.round(n.y)}else if(c.Browser.Explorer)l instanceof MouseEvent?(t.x=l.x,t.y=l.y):(t.x=0,t.y=0);else{var s=null,i=e.target;l instanceof TouchEvent&&1===l.touches.length&&(i=document.elementFromPoint(l.touches[0].clientX,l.touches[0].clientY));var r=c.Browser.Features.Touch&&l instanceof TouchEvent?l.touches[0]:null,u=p.$(i),d={pageX:0,pageY:0};null!==r?(d.pageX=r.pageX,d.pageY=r.pageY):l instanceof MouseEvent&&(d.pageX=l.pageX,d.pageY=l.pageY),d.pageX||d.pageY||(d.pageX=e.pageX,d.pageY=e.pageY),e.target.raphael?s=u.parents("div:eq(0)").offset():(e.target.raphaelParent||0<u.parents("svg").length)&&(s=u.parents("svg").parents("div:eq(0)").offset()),s||(s=u.offset()),t.y=s?(t.x=d.pageX-s.left,d.pageY-s.top):(t.x=d.pageX,d.pageY)}return t},c.getSVGOffset=
/**
         * Gets the normalized offsetLeft and offsetTop from an SVG element
         * with respect to its parent jQuery object
         * @private
         * @param objSVG: object, svg object from the dom
         * @param parent: object, jQuery object representing the parent DOM node
         */
function(e,t){var a={left:0,top:0};if(e instanceof HTMLElement)a.left=e.offsetLeft,a.top=e.offsetTop;else{var l=p.$(e).offset(),o=t.offset();l&&o&&(a.left=l.left-o.left,a.top=l.top-o.top)}return a},c.getJSPath=
/**
         * @private
         */
function(e){var t=p.$('script[src*="'+e+'"]');if(0<t.length){var a=t.attr("src");return a?a.replace(e,""):""}return""},c.CalcDistance=
/**
         * @private
         */
function(e,t,a,l,o){var n=Math.max(e,a),s=Math.min(e,a),i=Math.max(t,l),r=Math.min(t,l);return{x:n-s,y:i-r,dx:o?o.left-s:0,dy:o?o.top-r:0,left:s,right:n,top:r,bottom:i}},c.makeRect=n,c.rotateRect=l,c.rotatePoint=
/**
         * Calculates new point coordinates for the clockwise page rotation to the specified angle.
         * @private
         * @param point
         * @param page
         * @param angle positive number, must be exactly divisible by 90.
         */
function(e,t,a){return l({x:e.x,y:e.y,width:0,height:0},t,a)},c.__rf=
/**
         * just a simple function to return false without writing it repeatedly
         * @private
         */
function(){return!1},c.__ef=
/**
         * just a simple empty function
         * @private
         */
function(){},c.__sp=
/**
         * just a simple event handler to stop the propagation of an event.
         * @private
         */
function(e){e.stopPropagation()},c.__functionFromArray=
/**
         * Creates a function that wraps multiple functions into one
         * @private
         * @param arr: array of functions
         * @param arguments to pass to called functions
         */
function(t){return function(){for(;t.length;){var e=t.shift();e&&e.apply(this,arguments)}}},c.__htmlTransformStyle=
/**
         * @private
         */
function(e){return{" transform":e,"-moz-transform":e,"-webkit-transform":e,"-o-transform":e,"-ms-transform":e}},c.__calcPathBounds=
/**
         * @private
         */
function(e,a){var l={x:0,y:0,width:0,height:0};return e&&e.length&&(a=a||Raphael.matrix(),l.x=a.x(e[0].x,e[0].y),l.y=a.y(e[0].x,e[0].y),e.forEach(function(e){var t={x:a.x(e.x,e.y),y:a.y(e.x,e.y)};l.x=t.x<l.x?t.x:l.x,l.y=t.y<l.y?t.y:l.y,l.width=t.x>l.width?t.x:l.width,l.height=t.y>l.height?t.y:l.height}),l.width-=l.x,l.height-=l.y),l},c.flattenVersionSting=
/**
         * @private
         */
function(e){var a=0;return(""+e).replace("_",".").replace(/[^0-9.]/g,"").split(".").forEach(function(e,t){a+=Number(e)/Math.pow(10,3*t)}),a},c.ParseInt=
/**
         * @private
         */
function(e){if("string"==typeof e){var t=e.trim(),a=parseInt(t);if(/^([\+|-]?[0-9]+)$/.test(t))return a}return"number"!=typeof e?null:e},c.IsInteger=
/**
         * @private
         */
function(e){return isFinite(e)&&!(e%1)}}(p.Utils||(p.Utils={}))}(Atalasoft||(Atalasoft={})),function(a){var e,t;e=a.Document||(a.Document={}),t=function(){function t(e){_classCallCheck(this,t),this.jqe=a.$({}),this.memoryEntries=[],this.config={colorDepth:8,compression:1,highWaterMark:5e8,pageSize:{width:800,height:1132}},this.bytesInUse=0,e&&a.$.extend(this.config,e)}return _createClass(t,[{key:"dispose",value:function(){this.clearEntries()}},{key:"bind",value:function(){return this.jqe.bind.apply(this.jqe,arguments),this}},{key:"unbind",value:function(){return this.jqe.unbind.apply(this.jqe,arguments),this}},{key:"trigger",value:function(e){return this.jqe.trigger.apply(this.jqe,arguments),this}},{key:"allocate",value:function(e){return this.memoryEntries.push(e),this.bytesInUse+=this.calcBytes(e),this.bytesInUse>this.config.highWaterMark&&this.trigger("exceededhighwatermark"),this.bytesInUse}},{key:"deallocateOldestEntry",value:function(){var e=this.memoryEntries.shift();return void 0!==e&&this.deallocate(e),e}},{key:"clearEntries",value:function(){this.memoryEntries.length=0,this.bytesInUse=0}},{key:"deallocate",value:function(e){return this.bytesInUse-=this.calcBytes(e),this.bytesInUse<0&&(this.bytesInUse=0),this.bytesInUse}},{key:"calcBytes",value:function(e){return(e.width()||this.config.pageSize.width)*(e.height()||this.config.pageSize.height)*this.config.colorDepth/8*this.config.compression}},{key:"typeOf",get:function(){return"Atalasoft.Document.MemoryTacker"}},{key:"colorDepth",set:function(e){this.config.colorDepth=e},get:function(){return this.config.colorDepth}},{key:"highWatermark",set:function(e){this.config.highWaterMark=e},get:function(){return this.config.highWaterMark}},{key:"pageSize",set:function(e){this.config.pageSize={width:e.width,height:e.height}},get:function(){return this.config.pageSize}}]),t}(),e.MemoryTracker=t}(Atalasoft||(Atalasoft={})),function(n){!function(e){var t=function(){function e(){_classCallCheck(this,e),this.mobile=new a,this.features=new o,this.layout=new l,this.Edge&&(this.bv=navigator.userAgent.match(/(?:Edge).[\d\.]*/)),this.bv||(this.bv=navigator.userAgent.match(/(?:MSIE|Firefox|Chrome|Safari|Opera| rv|Edge).[\d\.]*/))}return _createClass(e,[{key:"Explorer",get:function(){return 0<=navigator.userAgent.indexOf("MSIE")||0<=navigator.userAgent.indexOf("Trident")}},{key:"Explorer8",get:function(){return this.Explorer&&8===parseInt(this.Version,10)}},{key:"Firefox",get:function(){return 0<=navigator.userAgent.indexOf("Firefox")||0<=navigator.userAgent.indexOf("Minefield")}},{key:"Safari",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&navigator.userAgent.indexOf("Chrome")<0&&navigator.userAgent.indexOf("Edge")<0}},{key:"Opera",get:function(){return 0<=navigator.userAgent.indexOf("Opera")}},{key:"Chrome",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")<0}},{key:"Edge",get:function(){return 0<=navigator.userAgent.indexOf("Safari")&&0<=navigator.userAgent.indexOf("Chrome")&&0<=navigator.userAgent.indexOf("Edge")}
/**
                 * @private
                 */},{key:"Features",get:function(){return this.features}
/**
                 * @private
                 */},{key:"Layout",get:function(){return this.layout}},{key:"Mobile",get:function(){return this.mobile}},{key:"Version",get:function(){return this.bv?this.bv[0].replace(/\D*/,""):null}}]),e}();e.BrowserImpl=t;var a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"Any",value:function(){return this.iOS||this.Android||this.IEMobile}},{key:"iOS",get:function(){return!!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)}},{key:"Android",get:function(){return!!navigator.userAgent.match(/(Android)/i)}},{key:"IEMobile",get:function(){return!!navigator.userAgent.match(/(IEMobile)/i)}}]),e}(),l=function(){function e(){_classCallCheck(this,e),this.blv=navigator.userAgent.match(/(?:Gecko|Presto|Trident|WebKit).[\d\.]*/)}return _createClass(e,[{key:"Gecko",get:function(){return!!navigator.userAgent.match(/(Gecko)/i)}},{key:"Presto",get:function(){return!!navigator.userAgent.match(/(Presto)/i)}},{key:"Trident",get:function(){return!!navigator.userAgent.match(/(Trident)/i)}},{key:"Webkit",get:function(){return!!navigator.userAgent.match(/(WebKit)/i)}},{key:"Version",get:function(){return this.blv?this.blv[0].replace(/\D*/,""):null}}]),e}(),o=function(){function e(){_classCallCheck(this,e),this.supportsVml=e.supportsVML()}return _createClass(e,[{key:"SVG",get:function(){return!(!window.SVGAngle&&!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"))}},{key:"Touch",get:function(){return!!("ontouchstart"in window)}},{key:"VML",get:function(){return this.supportsVml}},{key:"foreignObject",get:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Extensibility","1.1")}},{key:"Compatibility",get:function(){return void 0!==document.documentMode&&7===document.documentMode}},{key:"FlexBox",get:function(){return"flex"in document.documentElement.style||"WebkitFlex"in document.documentElement.style||"msFlex"in document.documentElement.style}}],[{key:"supportsVML",value:function(){var e=void 0;if(void 0===e){var t=n.$("<div/>").appendTo("body"),a=n.$('<v:shape id="vml_flag1" adj="1" />').appendTo(t);a.css("behavior","url(#default#VML)"),e=!a[0]||"object"===_typeof(a[0].adj),t.remove()}return e}}]),e}()}(n.Utils||(n.Utils={}))}(Atalasoft||(Atalasoft={})),function(l){!function(e){var a=function(){function a(e,t){_classCallCheck(this,a),this.control=e,this.allowMultipleFiles=t,this.enterLeaveLevel=0,this.dragEffect=""}return _createClass(a,[{key:"onDragEnter",value:function(e){""===this.dragEffect&&0===this.enterLeaveLevel&&(this.dragEffect=this.calcDragEffect(e.dataTransfer)),e.dataTransfer.dropEffect=this.dragEffect,this.enterLeaveLevel++}},{key:"onDrop",value:function(e){"none"!==this.dragEffect&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer)),this.resetState()}},{key:"onDragLeave",value:function(e){this.enterLeaveLevel--,0===this.enterLeaveLevel&&(this.dragEffect="")}},{key:"onDragOver",value:function(e){e.dataTransfer.dropEffect=this.dragEffect}},{key:"calcDragEffect",value:function(e){if(this.control.uploadRequested)return"none";return(l.Utils.Browser.Firefox?2===e.types.length&&e.types.some(function(e){return"Files"===e}):1===e.types.length&&"Files"===e.types[0])&&(this.allowMultipleFiles||1===e.items.length)?"copy":"none"}},{key:"processDragAndDropEvent",value:function(e){e.preventDefault();var t=e.originalEvent;if(t instanceof DragEvent)switch(t.type){case"dragenter":this.onDragEnter(t);break;case"dragover":this.onDragOver(t);break;case"drop":this.onDrop(t);break;case"dragleave":this.onDragLeave(t)}}},{key:"getFilesFromDataTransfer",value:function(e){for(var t=[],a=0;a<e.files.length;a++)t.push(e.files[a]);return t}},{key:"resetState",value:function(){this.dragEffect="",this.enterLeaveLevel=0}}]),a}();e.DragAndDropHandler=a;var t=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,a),_createClass(t,[{key:"onDragEnter",value:function(e){}},{key:"onDragOver",value:function(e){}},{key:"onDragLeave",value:function(e){}},{key:"onDrop",value:function(e){this.control.uploadRequested||1===e.dataTransfer.types.length&&"Files"===e.dataTransfer.types[0]&&(this.allowMultipleFiles||1===e.dataTransfer.files.length)&&this.control.processFiles(this.getFilesFromDataTransfer(e.dataTransfer))}}]),t}();e.DragAndDropHandlerIE=t}(l.Upload||(l.Upload={}))}(Atalasoft||(Atalasoft={})),function(e){var t,a;t=e.Upload||(e.Upload={}),a=function(){function a(e,t){_classCallCheck(this,a),this.filename=e,this.statusText=t,this.cancel=!1,this.progressCounter=0}return _createClass(a,[{key:"handler",value:function(e){this.isUploadStartEventData(e)?e.fileinfo.filename===this.filename&&this.cancel&&(e.fileinfo.cancel=!0):e.uploadinfo.filename===this.filename&&(this.cancel&&(e.uploadinfo.cancel=!0),this.progressCounter%5==0&&this.statusText.text("Uploading ("+(e.uploadinfo.uploadedbytes/e.uploadinfo.totalbytes*100).toFixed(0)+" %)"),this.progressCounter++)}},{key:"isUploadStartEventData",value:function(e){return void 0!==e.fileinfo}}]),a}(),t.FileUploadProgressHandler=a}(Atalasoft||(Atalasoft={})),function(i){var r,e;r=i.Upload||(i.Upload={}),e=function(){function n(e){var a=this;_classCallCheck(this,n),this.controller=e,this.callbackToManipulateParentUi=function(){},this.isVisible=!1,this.progressHandlers=[],this.uploadRequested=!1,this.reinitNeeded=!1,this.processFileFinishedUpload=function(e){},this.openFileDlgChangeHandler=function(){var e=a.openFileDlgBtn[0].files;a.processFiles(a.convertFileListToFilesArray(e)),a.openFileForm[0].reset()},this.handleUploadFinished=function(){a.uiShouldBeClosedAfterUpload?a.controller.finish(!1):(a.control.find("."+r.UploadControlCssClasses.CancelButton).css("display","none"),a.control.find("."+r.UploadControlCssClasses.CloseButton).css("display",""))},this.processProgressHandlers=function(t){a.progressHandlers.forEach(function(e){return e.handler(t)})};var t=i.$("<div/>").addClass(r.UploadControlCssClasses.Control).css("flex-flow","column").css("height","100%").css("width","100%").addClass("ui-widget"),l=i.$("<div/>").addClass(r.UploadControlCssClasses.AreaContainer).css("display","flex").css("flex-flow","column").css("flex","1 1 auto").css("align-content","center").css("overflow","auto"),o=i.$("<div/>").addClass(r.UploadControlCssClasses.ButtonsContainer).css("flex","0 1 auto");t.append(l),t.append(o),this.control=t,this.openFileDlgBtn=i.$("<input/>").attr("type","file").change(this.openFileDlgChangeHandler),this.openFileForm=i.$("<form/>").css("display","none"),this.openFileDlgBtn.appendTo(this.openFileForm),this.openFileForm.appendTo(this.control),this.allowedDragAndDrop=!1,this.uiShouldBeClosedAfterUpload=!1}return _createClass(n,[{key:"init",value:function(e,t){this.openFileDlgBtn.attr("accept",t.allowedFileTypes);var a=i.$(this.control.children("."+r.UploadControlCssClasses.ButtonsContainer));if(this.initArea(t),this.initButtons(a,t),this.control.css("display","none"),this.control.appendTo(e),this.allowedDragAndDrop=t.allowDragDrop,this.uiShouldBeClosedAfterUpload=t.closeUiAfterUpload,this.allowedDragAndDrop){var l=i.Utils.Browser.Explorer?new r.DragAndDropHandlerIE(this,t.allowMultipleFiles):new r.DragAndDropHandler(this,t.allowMultipleFiles);this.area.on("dragenter",function(e){l.processDragAndDropEvent(e)}).on("dragover",function(e){l.processDragAndDropEvent(e)}).on("drop",function(e){l.processDragAndDropEvent(e)}).on("dragleave",function(e){l.processDragAndDropEvent(e)})}}},{key:"activate",value:function(e){this.callbackToManipulateParentUi=e,this.allowedDragAndDrop?(this.callbackToManipulateParentUi(!1),this.show()):this.openFileDlgBtn.click()}},{key:"close",value:function(){this.unbindEvents(),this.hide()}},{key:"getControlDom",value:function(){return this.control}},{key:"initButtons",value:function(e,t){var a=this,l=i.$("<div/>").addClass(r.UploadControlCssClasses.Buttons).css("float","right"),o=i.$("<button/>").addClass(r.UploadControlCssClasses.Button).addClass(r.UploadControlCssClasses.AddButton).button({label:"Add..."}).click(function(e){e.preventDefault(),a.openFileDlgBtn.click()}),n=i.$("<button/>").addClass(r.UploadControlCssClasses.Button).addClass(r.UploadControlCssClasses.CloseButton).button({label:"Close"}).css("display","none").click(function(e){e.preventDefault(),a.close()}),s=i.$("<button/>").addClass(r.UploadControlCssClasses.Button).addClass(r.UploadControlCssClasses.CancelButton).button({label:"Cancel"}).click(function(e){e.preventDefault(),a.controller.abort(),a.close()});(t.allowMultipleFiles||t.allowDragDrop)&&l.prepend(o),l.append(s),t.closeUiAfterUpload||l.append(n),l.appendTo(e)}},{key:"initAreaImpl",value:function(e,t,a){var l=i.$("<div/>").addClass(e).addClass(r.UploadControlCssClasses.TextElement);return this.initAreaContents(l,t,a),l}},{key:"initAreaContents",value:function(e,t,a){var l=i.$("<div/>").addClass(t?r.UploadControlCssClasses.FileProgressImage:r.UploadControlCssClasses.DragAndDropImage),o=i.$("<span/>").addClass(t?r.UploadControlCssClasses.FileProgress:r.UploadControlCssClasses.DragAndDrop).text(a);e.append(l).append(o)}},{key:"reinitArea",value:function(e,t){var a=this.area.children().first();return a.children().remove(),this.initAreaContents(a,e,t),a}},{key:"processFiles",value:function(e){if(!this.uploadRequested)if(0<e.length){var t=this.filterFiles(e);0<t.length&&(this.allowedDragAndDrop||(this.callbackToManipulateParentUi(!1),this.show()),this.addFilesToUi(t))}else this.allowedDragAndDrop||this.controller.abort()}},{key:"filterFiles",value:function(e,t){for(var a=this.controller.filterFiles(e,void 0===t?[]:t),l=[],o=0;o<e.length;o++)a[0]===e[o].name?a.shift():l.push(e[o]);return l}},{key:"bindEvents",value:function(){this.controller.bind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})}},{key:"unbindEvents",value:function(){this.controller.unbind({fileuploadstarted:this.processProgressHandlers,fileuploadfinished:this.processFileFinishedUpload,fileuploaderror:this.processFileFinishedUpload,fileuploading:this.processProgressHandlers,uploadfinished:this.handleUploadFinished})}},{key:"show",value:function(){this.control.css("display","flex"),this.controlParent.children().first().css("display","none"),this.isVisible=!0}},{key:"hide",value:function(){this.control.css("display","none"),this.controlParent.children().first().css("display","block"),this.isVisible=!1,this.progressHandlers.length=0,this.callbackToManipulateParentUi(!0),this.callbackToManipulateParentUi=function(){},this.uploadRequested=!1,this.reinitNeeded=this.allowedDragAndDrop,this.switchButtonEnabledState(r.UploadControlCssClasses.AddButton,!0),this.uiShouldBeClosedAfterUpload||(this.control.find("."+r.UploadControlCssClasses.CloseButton).css("display","none"),this.control.find("."+r.UploadControlCssClasses.CancelButton).css("display",""))}},{key:"convertSize",value:function(e){for(var t=e,a=0;1024<t;)t/=1024,a++;return t.toFixed(2)+" "+["B","KB","MB","GB","TB"][a]}},{key:"addProgressHandler",value:function(e,t){this.progressHandlers.push(new r.FileUploadProgressHandler(e,t))}},{key:"removeProgressHandler",value:function(t){var e=this.progressHandlers.filter(function(e){return e.filename===t})[0];null!==e&&this.progressHandlers.splice(this.progressHandlers.indexOf(e),1)}},{key:"cancelUpload",value:function(t){var e=this.progressHandlers.filter(function(e){return e.filename===t})[0];null!=e&&(e.cancel=!0)}},{key:"convertFileListToFilesArray",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a]);return t}},{key:"switchButtonEnabledState",value:function(e,t){var a=t?"enable":"disable";this.control.find("."+e).button(a)}},{key:"isFileSuccessEventData",value:function(e){return void 0!==e.filepath}},{key:"controlParent",get:function(){return this.control.parent()}},{key:"area",get:function(){return i.$(this.control.children("."+r.UploadControlCssClasses.AreaContainer))}}]),n}(),r.UploadBaseControl=e}(Atalasoft||(Atalasoft={})),function(e){var t,a;t=e.Upload||(e.Upload={}),(a=t.UploadControlCssClasses||(t.UploadControlCssClasses={})).Button="atala-upload-button",a.DragAndDrop="atala-upload-drag-and-drop",a.DragAndDropImage="atala-upload-drag-and-drop-image",a.FileProgress="atala-upload-progress-file",a.FileProgressImage="atala-upload-progress-file-image",a.MultipleFilesHeaderRow="atala-upload-files-header-row",a.MultipleFilesHeader="atala-upload-files-header",a.TextElement="atala-upload-text-element",a.Control="atala-upload-control",a.AreaContainer="atala-upload-flex-area",a.AreaNonTable="atala-upload-flex-area-non-table",a.AreaSingleFile="atala-upload-single-file",a.AreaSingleFileNoDragDrop="atala-upload-single-file-no-drag-drop",a.AreaMultipleFile="atala-upload-multiple-files",a.AreaMultipleFileDragDrop="atala-upload-multiple-files-drag-and-drop",a.ButtonsContainer="atala-upload-flex-buttons",a.Buttons="atala-upload-buttons",a.CloseButton="atala-upload-close-button",a.CancelButton="atala-upload-cancel-button",a.OkButton="atala-upload-ok-button",a.AddButton="atala-upload-add-button",a.MultipleFilesHeaderName="atala-upload-files-header-name",a.MultipleFilesHeaderSize="atala-upload-files-header-size",a.MultipleFilesHeaderStatus="atala-upload-files-header-status",a.MultipleFilesRow="atala-upload-files-row",a.MultipleFilesCell="atala-upload-files-cell",a.MultipleFilesCellName="atala-upload-files-cell-name",a.MultipleFilesCellSize="atala-upload-files-cell-size",a.MultipleFilesCellStatus="atala-upload-files-cell-status",a.MultipleFilesCellCancelButton="atala-upload-files-cancel-button"}(Atalasoft||(Atalasoft={})),function(F){!function(a){var e=function(){function l(e,t){var s=this;_classCallCheck(this,l),this.uploadButton=null,this.uploadControlField=null,this.state=i.Idle,this.filesToUpload=[],this.uploadingFiles=[],this.hasErrors=!1,this.wasCanceled=!1,this.uploadCallback=null,this.abort=function(){s.state===i.Uploading&&(s.hasErrors=!0,s.wasCanceled=!0,s.state=i.Canceling,s.abortActiveRequests()),s.finish(!0)},this.finish=function(e){(s.config.closeUiAfterUpload||e)&&s.uploadControl.close()},this.onFileUploadStarted=function(e,t){if(s.state===i.Canceling)return!1;var a={type:"fileuploadstarted",fileinfo:{filename:e,size:t,cancel:!1}};return s.trigger(a),!a.fileinfo.cancel},this.onFileUploadFinished=function(e,t){if(!e.success||e.canceled||void 0!==e.error){var a={type:"fileuploaderror",errorinfo:{filename:t,canceled:e.canceled,customData:e.customData}};s.hasErrors=!0,a.errorinfo.canceled?s.wasCanceled=!0:a.errorinfo.error=e.error,s.trigger(a)}else s.trigger({type:"fileuploadfinished",filepath:e.filename,filename:t,customData:e.customData});s.tryToFinishUpload(t)},this.onFileUploadFailed=function(e,t,a){var l={type:"fileuploaderror",errorinfo:{filename:a,canceled:"abort"===e}};s.hasErrors=!0,l.errorinfo.canceled?s.wasCanceled=!0:(l.errorinfo.error=e,t&&(l.errorinfo.error+=": "+t)),s.trigger(l),s.tryToFinishUpload(a)},this.onUploadStarted=function(){var e={type:"uploadstarted",info:{cancel:!1}};return s.trigger(e),!e.info.cancel},this.onUploadFinished=function(){var e={type:"uploadfinished",canceled:s.wasCanceled,success:!s.hasErrors};s.trigger(e)},this.onFileUploading=function(t,e,a){if(s.state===i.Canceling)return!1;var l=s.uploadingFiles.filter(function(e){return e.filename===t});if(0===l.length||1<l.length)return!0;var o=l[0];if(o.canceled)return!0;var n={type:"fileuploading",uploadinfo:{filename:t,uploadedbytes:e,totalbytes:a,cancel:!1}};return s.trigger(n),o.canceled=n.uploadinfo.cancel,!n.uploadinfo.cancel},this.trigger=e.trigger,this.sendRequest=t.makeHandlerRequest,this.bind=e.bind,this.unbind=e.unbind;var a=e.config;this.config={serverUrl:e.config.serverurl,enabled:!1!==a.upload.enabled,allowMultipleFiles:!!a.upload.allowmultiplefiles,allowedFileTypes:a.upload.allowedfiletypes,allowDragDrop:!!a.upload.allowdragdrop,allowedMaxFileSize:a.upload.allowedmaxfilesize,uploadPath:a.upload.uploadpath,uiParent:e.config.parent,filesUploadConcurrency:e.config.upload.filesuploadconcurrency,closeUiAfterUpload:e.config.upload.closeuiafterupload}}return _createClass(l,[{key:"dispose",value:function(){}},{key:"uploadWithUi",value:function(e){this.uploadControl.activate(e)}},{key:"uploadFiles",value:function(e,t,a){var l=this;if(this.checkControllerState()&&this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkUploadPath(t)&&this.checkCallback(a)){if(this.state=i.Uploading,!this.fireUploadStartedEvent())return this.abort(),void this.tryToFinishUpload();for(e.forEach(function(e){return l.uploadFileOnServer(t,e)});this.uploadingFiles.length<this.config.filesUploadConcurrency&&0<this.filesToUpload.length;)this.startFileUpload(this.filesToUpload.pop());"function"==typeof a&&(this.uploadCallback=a)}}},{key:"uploadFile",value:function(e,t,a){this.uploadFiles([e],t,a)}},{key:"uploadFileOnServer",value:function(e,t){var a={atala_upath:this.config.uploadPath,atala_subpath:e},l=F.$.extend(!0,{},a,{atala_filename:t.name,atala_filetype:t.type}),o={type:"fileupload",serverurl:this.config.serverUrl,query:"?atalafileupload=",method:"POST",data:l,file:t,cancel:!1};this.filesToUpload.push(o)}},{key:"startFileUpload",value:function(e){this.onFileUploadStarted(e.file.name,e.file.size)?this.uploadingFiles.push({filename:e.file.name,canceled:!1,jqxhr:this.sendRequest(e,this.onFileUploadFinished,this.onFileUploadFailed,this.onFileUploading)}):this.onFileUploadFailed("abort","",e.file.name)}},{key:"fireUploadStartedEvent",value:function(){return this.onUploadStarted()}},{key:"checkControllerState",value:function(){return!(this.state===i.Uploading||this.state===i.Canceling&&0<this.uploadingFiles.length)||(this.throwError("checkControllerState","Web Document Viewer already performs an upload operation and can start the another one. Please try again later"),!1)}},{key:"checkUploadPath",value:function(e){return!e||"string"==typeof e||(this.throwError("checkUploadPath","uploadpath object '"+e+"' is not a string. Please check your input parameters and try again."),!1)}},{key:"checkIfUploadDisabled",value:function(){return!!this.config.enabled||(this.throwError("checkUploadEnabled","Upload is not enabled in this Web Document Viewer instance. Please check the viewer configuration and try again."),!1)}},{key:"checkFilesToUpload",value:function(e){if(!Array.isArray(e))return this.throwError("checkFilesToUpload","The parameter is not an array. Please check your input parameters."),!1;for(var t=0;t<e.length;t++){var a=e[t];if(!(a instanceof File))return this.throwError("checkFilesToUpload","An object "+a+" doesn't implement File interface object. Please check your input parameters and try again."),!1}return!0}},{key:"checkAlreadyAddedFiles",value:function(e){if(!e)return!0;if(!Array.isArray(e))return this.throwError("checkAlreadyAddedFiles","The parameter is not an array. Please check your input data."),!1;for(var t=0;t<e.length;t++){var a=e[t];if("string"!=typeof a)return this.throwError("checkAlreadyAddedFiles","An object "+a+" doesn't implement File interface object. Please check your input parameters."),!1}return!0}},{key:"checkCallback",value:function(e){return!e||"function"==typeof e||(this.throwError("checkCallback","callback object '"+e+"' is not a function. Please check your input parameters and try again."),!1)}},{key:"throwError",value:function(e,t){this.trigger({type:"throwerror",name:e,msg:t})}},{key:"tryToFinishUpload",value:function(t){t&&this.uploadingFiles.splice(this.uploadingFiles.indexOf(this.uploadingFiles.filter(function(e){return e.filename===t})[0]),1),0<this.filesToUpload.length?this.startFileUpload(this.filesToUpload.pop()):0===this.uploadingFiles.length&&(this.state!==i.Idle&&(this.state=i.Idle,this.onUploadFinished(),null!==this.uploadCallback&&this.uploadCallback()),this.hasErrors=!1,this.wasCanceled=!1)}},{key:"filterFilesPublic",value:function(e,t,a){var l=[];if(this.checkIfUploadDisabled()&&this.checkFilesToUpload(e)&&this.checkAlreadyAddedFiles(t)&&this.checkCallback(a)){var o=void 0;o=t?this.filterFiles(e,t):this.filterFiles(e,[]),l=e.filter(function(t){return!o.some(function(e){return e===t.name})}),"function"==typeof a&&a()}return l}},{key:"filterFiles",value:function(e,t){for(var a=[],l=this.config.allowedFileTypes.toLowerCase().split(","),o=t.map(function(e){return e}),n=e.length,s=0;s<n;s++){var i=e[s],r=i.name,u=F.Utils.FileUploadRejectReason.None;if(i.size>this.config.allowedMaxFileSize)a.push(r),u=F.Utils.FileUploadRejectReason.Size;else{for(var d=!1,c=o.length,p=0;p<c;p++)if(o[p]===r){d=!0;break}if(d)a.push(r),u=F.Utils.FileUploadRejectReason.Name;else{for(var h=r.split(".").pop(),f="."+(h?h.toLowerCase():""),g=i.type.toLowerCase(),C=!1,y=0;y<l.length;y++){var v=l[y];if(v===f||""===v.trim()){C=!0;break}var m=v.split("/"),k=g.split("/");if(2===m.length&&2===k.length&&m[0]===k[0]&&(m[1]===k[1]||"*"===m[1])){C=!0;break}}C||(a.push(r),u=F.Utils.FileUploadRejectReason.Type)}}this.onFileAddedToUpload(i,u),o.push(r)}return a}},{key:"abortActiveRequests",value:function(){this.uploadingFiles.forEach(function(e){return e.jqxhr.abort()})}},{key:"onFileAddedToUpload",value:function(e,t){var a={type:"fileaddedtoupload",filename:e.name,success:0===t,reason:t};this.trigger(a)}},{key:"getUploadControl",value:function(){return this.uploadControl.getControlDom()}
/**
                 *
                 * Creates a jQuery UI upload control.
                 * @param {any} parent - parent object to append to.
                 */},{key:"createUploadControl",value:function(e){var t=void 0;return(t=this.config.allowMultipleFiles?new a.UploadMultilpeFilesControl(this):new a.UploadSingleFileControl(this)).init(e,this.config),t}},{key:"uploadControl",get:function(){return null===this.uploadControlField&&(this.uploadControlField=this.createUploadControl(this.config.uiParent)),this.uploadControlField}}]),l}();a.UploadController=e;var t,i=void 0;(t=i||(i={}))[t.Idle=0]="Idle",t[t.Canceling=1]="Canceling",t[t.Uploading=2]="Uploading"}(F.Upload||(F.Upload={}))}(Atalasoft||(Atalasoft={})),function(r){var u,e;u=r.Upload||(r.Upload={}),(e=function(e){function i(e){_classCallCheck(this,i);var t=_possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));return t.files=[],t.uploadElems=[],t.processFileFinishedUpload=function(e){t.isFileSuccessEventData(e)?t.markStatusFinished(e.filename,!0):t.markStatusFinished(e.errorinfo.filename,!1,e.errorinfo.canceled)},t}return _inherits(i,u.UploadBaseControl),_createClass(i,[{key:"init",value:function(e,t){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e,t),this.openFileDlgBtn.attr("multiple",!0)}},{key:"initArea",value:function(e){var t=void 0;e.allowDragDrop?((t=this.initAreaImpl(u.UploadControlCssClasses.AreaMultipleFile,!1,"Drop files here")).addClass(u.UploadControlCssClasses.AreaMultipleFileDragDrop),this.area.addClass(u.UploadControlCssClasses.AreaNonTable)):(t=r.$("<div/>").addClass(u.UploadControlCssClasses.AreaMultipleFile).addClass(u.UploadControlCssClasses.TextElement),this.initFilesTable(t)),t.appendTo(this.area)}},{key:"initFilesTable",value:function(e){this.area.removeClass(u.UploadControlCssClasses.AreaNonTable);var t=r.$("<div/>").addClass(u.UploadControlCssClasses.MultipleFilesHeaderRow).addClass("ui-widget-header"),a=r.$("<div/>").addClass(u.UploadControlCssClasses.MultipleFilesHeaderName).addClass(u.UploadControlCssClasses.MultipleFilesHeader).text("Name"),l=r.$("<div/>").addClass(u.UploadControlCssClasses.MultipleFilesHeaderSize).addClass(u.UploadControlCssClasses.MultipleFilesHeader).text("Size"),o=r.$("<div/>").addClass(u.UploadControlCssClasses.MultipleFilesHeaderStatus).addClass(u.UploadControlCssClasses.MultipleFilesHeader).text("Status");t.append(a).append(l).append(o).appendTo(e),this.table=e}},{key:"initButtons",value:function(e,t){var a=this;_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"initButtons",this).call(this,e,t);var l=e.children().first(),o=r.$("<button/>").addClass(u.UploadControlCssClasses.OkButton).button({label:"OK"}).addClass(u.UploadControlCssClasses.Button).click(function(e){e.preventDefault(),a.bindEvents(),a.uploadRequested=!0,a.switchButtonEnabledState(u.UploadControlCssClasses.AddButton,!1),a.switchButtonEnabledState(u.UploadControlCssClasses.OkButton,!1),a.controller.uploadFiles(a.files)});l.children("."+u.UploadControlCssClasses.AddButton).first().after(o)}},{key:"processFiles",value:function(e){if(this.isVisible){if(this.uploadRequested)return;if(0<e.length){var t=this.filterFiles(e,this.files.map(function(e){return e.name}));0<t.length&&(this.switchButtonEnabledState(u.UploadControlCssClasses.OkButton,!0),this.addFilesToUi(t))}}else _get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"processFiles",this).call(this,e)}},{key:"addFilesToUi",value:function(e){var t,a;if(this.allowedDragAndDrop&&void 0===this.table){var l=this.area.children().first();l.children().remove(),l.removeClass(u.UploadControlCssClasses.AreaMultipleFileDragDrop),this.initFilesTable(l)}for(var o=[],n=0;n<e.length;n++)o.push(this.addRowToFilesTable(e[n]));(t=this.files).push.apply(t,_toConsumableArray(e)),(a=this.table).append.apply(a,o)}},{key:"addRowToFilesTable",value:function(t){var a=this,l=t.name,o=i.rowTemplate.clone();r.$("."+u.UploadControlCssClasses.MultipleFilesCellName,o).text(l),r.$("."+u.UploadControlCssClasses.MultipleFilesCellSize,o).text(this.convertSize(t.size));var n=r.$("."+u.UploadControlCssClasses.FileProgress,o),s=r.$("."+u.UploadControlCssClasses.MultipleFilesCellCancelButton,o).click(function(e){e.preventDefault(),a.uploadRequested?(a.cancelUpload(l),s.css("display","none"),n.text("Canceled")):(a.files.splice(a.files.indexOf(t,0),1),a.removeProgressHandler(l),o.remove(),0===a.files.length&&(a.controller.abort(),a.close()))});return this.addProgressHandler(t.name,n),this.addFinishHandler(t.name,n,s),o}},{key:"show",value:function(){this.switchButtonEnabledState(u.UploadControlCssClasses.OkButton,!this.allowedDragAndDrop),this.reinitNeeded&&(this.reinitArea(!1,"Drop files here").addClass(u.UploadControlCssClasses.AreaMultipleFileDragDrop),this.area.addClass(u.UploadControlCssClasses.AreaNonTable),this.table=void 0),_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"show",this).call(this)}},{key:"hide",value:function(){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"hide",this).call(this),this.files.length=0,void(this.uploadElems.length=0)!==this.table&&this.table.children(".atala-upload-files-row").remove()}},{key:"addFinishHandler",value:function(e,t,a){this.uploadElems.push({filename:e,statusTextElem:t,cancelUploadBtn:a})}},{key:"markStatusFinished",value:function(t,e){var a=2<arguments.length&&void 0!==arguments[2]&&arguments[2],l=this.uploadElems.filter(function(e){return e.filename===t})[0];null!=l&&(l.cancelUploadBtn.css("display","none"),e?l.statusTextElem.text("Finished"):a?l.statusTextElem.text("Canceled"):l.statusTextElem.text("Error"))}}],[{key:"getFileRowTemplate",value:function(){var e=r.$('<div class="'+u.UploadControlCssClasses.MultipleFilesRow+'">\n<div class="'+u.UploadControlCssClasses.MultipleFilesCell+" "+u.UploadControlCssClasses.MultipleFilesCellName+'"/>\n<div class="'+u.UploadControlCssClasses.MultipleFilesCell+" "+u.UploadControlCssClasses.MultipleFilesCellSize+'"/>\n<div class="'+u.UploadControlCssClasses.MultipleFilesCell+" "+u.UploadControlCssClasses.MultipleFilesCellStatus+'">\n<span class="'+u.UploadControlCssClasses.FileProgress+'">Upload pending</span>\n<button title="Removes file from upload queue" class="atala-ui-button '+u.UploadControlCssClasses.MultipleFilesCellCancelButton+'"/>\n</div>\n</div>');return r.$("."+u.UploadControlCssClasses.MultipleFilesCellCancelButton,e).button({icon:"atala-ui-icon atala-ui-icon-upload-cancel",showLabel:!1}),e}},{key:"rowTemplate",get:function(){return null===this.rowTemplateField&&(this.rowTemplateField=this.getFileRowTemplate()),this.rowTemplateField}}]),i}()).rowTemplateField=null,u.UploadMultilpeFilesControl=e}(Atalasoft||(Atalasoft={})),function(e){var o,t;o=e.Upload||(e.Upload={}),t=function(e){function l(e){_classCallCheck(this,l);var t=_possibleConstructorReturn(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.progressCounter=0,t.fileName="",t.uploadProgressSpan=null,t.uploadProgressImage=null,t.processFileFinishedUpload=function(e){t.isFileSuccessEventData(e)?t.uploadProgressSpan.text("Upload finished"):e.errorinfo.canceled?t.uploadProgressSpan.text("Upload canceled"):t.uploadProgressSpan.text("An error occured during upload"),t.uploadProgressImage.css("display","none")},t}return _inherits(l,o.UploadBaseControl),_createClass(l,[{key:"initArea",value:function(e){var t=o.UploadControlCssClasses.AreaSingleFile,a="Uploading...";e.allowDragDrop&&(a="Drop file here");var l=this.initAreaImpl(t,!e.allowDragDrop,a);e.allowDragDrop||(this.uploadProgressSpan=l.children("."+o.UploadControlCssClasses.FileProgress).first(),this.uploadProgressImage=l.children("."+o.UploadControlCssClasses.FileProgressImage).first(),l.addClass(o.UploadControlCssClasses.AreaSingleFileNoDragDrop)),l.appendTo(this.area),this.area.addClass(o.UploadControlCssClasses.AreaNonTable)}},{key:"addFilesToUi",value:function(e){this.allowedDragAndDrop&&this.reinitArea(!0,"Uploading..."),this.uploadRequested=!0,this.fileName=e[0].name,this.addProgressHandler(this.fileName,this.uploadProgressSpan),this.bindEvents(),this.switchButtonEnabledState(o.UploadControlCssClasses.AddButton,!1),this.controller.uploadFile(e[0])}},{key:"show",value:function(){this.reinitNeeded&&this.reinitArea(!1,"Drop file here"),_get(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"show",this).call(this)}},{key:"hide",value:function(){_get(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"hide",this).call(this),null!==this.uploadProgressImage&&this.uploadProgressImage.css("display","")}},{key:"reinitArea",value:function(e,t){var a=_get(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"reinitArea",this).call(this,e,t);e?(this.uploadProgressSpan=a.children("."+o.UploadControlCssClasses.FileProgress).first(),this.uploadProgressImage=a.children("."+o.UploadControlCssClasses.FileProgressImage).first(),a.addClass(o.UploadControlCssClasses.AreaSingleFileNoDragDrop)):(a.removeClass(o.UploadControlCssClasses.AreaSingleFileNoDragDrop),this.uploadProgressSpan=null,this.uploadProgressImage=null)}}]),l}(),o.UploadSingleFileControl=t}(Atalasoft||(Atalasoft={}));
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};
/**
 * Main Atalasoft Namespace definition(s)
 *  @namespace Atalasoft
 */Atalasoft={
/**
     * @private
     */
$:Atalasoft.$,
/**
     * @namespace Atalasoft.Annotations
     */
Annotations:Atalasoft.Annotations||{},
/**
     * Contains Atalasoft imaging controls.
     * @namespace Atalasoft.Controls
     */
Controls:Atalasoft.Controls||{},
/**
     * @namespace Atalasoft.Document
     * @private
     */
Document:Atalasoft.Document||{},
/**
     * @namespace Atalasoft.Forms
     * @private
     */
Forms:Atalasoft.Forms||{},
/**
     * @namespace Atalasoft.Text
     * @private
     */
Text:Atalasoft.Text||{},
/**
     * @namespace Atalasoft.Utils
     */
Utils:Atalasoft.Utils||{},
/**
     * @namespace Atalasoft.Upload
     * @private
     */
Upload:Atalasoft.Upload||{}},Atalasoft.Controls.Version=[11,1,0,340];var _Statics={instanceCounter:0};
/**
  * Control that views, modifies, and saves documents, annotations and forms.
  * @param {WebDocumentViewerConfig} [settings] Object of key value pairs representing initial settings
  * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
  * @class
  * @returns {WebDocumentViewer} A new control with the given settings.
  */Atalasoft.Controls.WebDocumentViewer=function(t,i){if(!Atalasoft.Utils.checkJQueryDepependency())return null;var e,C=Atalasoft.$,c={typeOf:t.type||"Atalasoft.Controls.WebDocumentViewer"},A="Atalasoft.Controls.WebDocumentThumbnailer"===c.typeOf,s="",H=150,u=500,w="atala-ui-icon",o=document.createElement("div"),n=C({}),a=C({}),l=new Atalasoft.Controls.DocumentStateManager({get:function(){return c},isInitialized:je,switchDocument:Ce,closeDocument:Ae}),b={
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
uploadCtrl:null},V={annotations:null,document:null,forms:null,mouseTool:null,memory:null,text:null,upload:null},d=Atalasoft.Utils.Fitting,M=Atalasoft.Utils.ScrollDirection,r=Atalasoft.Utils.MouseToolType,I={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},k={prpr:0,batchoperation:0,loading:!1,zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0},S=Atalasoft.Controls.WebDocumentViewer.domclasses,h=Atalasoft.Controls.WebDocumentViewer.domattributes,g={
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
         * @typedef {Object} UploadStartInfo - The upload start infromation structure.
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
fileaddedtoupload:null},E={
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
direction:M.Vertical,
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
fitting:d.Width,
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
pageselectlocation:C.extend({},Atalasoft.Utils.PageSelection.TopLeft),
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
type:r.Pan,
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
scrolltriggerarea:Atalasoft.Utils.ScrollArea.Normal,
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
         * @property {boolean} allowmultiplefiles - a flag inidicating whether or not it is allowed to perform multiple files upload.
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
upload:null};if(t){var p=t.mousetool;t.mousetool&&"object"!==_typeof(t.mousetool)&&(t.mousetool=C.extend({},E.mousetool,{type:p})),!t.tabular||t.direction!==Atalasoft.Utils.ScrollDirection.Horizontal&&1!==t.columns||(t.tabular=!1),C.extend(!0,E,t),t.mousetool=p}if(E.direction=E.direction===M.Vertical||E.direction===M.Horizontal?E.direction:M.Vertical,E.fitting=E.fitting===d.None||E.fitting===d.Best||E.fitting===d.Width||E.fitting===d.Height?E.fitting:d.Width,E.pageborderwidth=Tt(E.pageborderwidth)?parseInt(E.pageborderwidth,10):1,E.pagespacing=Tt(E.pagespacing)?parseInt(E.pagespacing,10):4,E.showpageborder=!!E.showpageborder,E.showpagenumber=!!E.showpagenumber,E.showstatus=!!E.showstatus,E.zoom=Tt(E.zoom,!0)?parseFloat(E.zoom):1,E.scripturl=0<(e=E.scripturl).length&&-1===e.indexOf("/",e.length-1)&&-1===e.indexOf("\\",e.length-1)?E.scripturl+"/":E.scripturl,function(){if((E.mousetool.type===r.ZoomArea||E.mousetool.type===r.Selection||E.mousetool.type===r.Text)&&!E.showselecttools){if(null!==t.showselecttols&&void 0!==t.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";E.showselecttools=!0}}(),function(){E.upload||(E.upload={enabled:!1});var t=E.upload;!1!==t.enabled&&(t.allowedmaxfilesize=Atalasoft.Utils.IsInteger(t.allowedmaxfilesize)?t.allowedmaxfilesize:Number.MAX_VALUE,t.allowdragdrop=!!t.allowdragdrop,t.allowmultiplefiles=!!t.allowmultiplefiles,t.allowedfiletypes="string"==typeof t.allowedfiletypes?t.allowedfiletypes:"",t.uploadpath="string"==typeof t.uploadpath?t.uploadpath:".",t.filesuploadconcurrency=Atalasoft.Utils.IsInteger(t.filesuploadconcurrency)?t.filesuploadconcurrency:1,t.closeuiafterupload=!1!==t.closeuiafterupload)}(),!Atalasoft.Utils.checkViewerDependencies(E.allowannotations,E.allowtext))return null;function f(t){var e=V.memory.deallocateOldestEntry();!function(t){try{t.parentNode&&t.parentNode.removeChild(t),o.appendChild(t),o.innerHTML=""}catch(t){}}(e[0]),0<=e._cacheIndex&&(b.loadedImgs[e._cacheIndex]=null,e._cacheIndex=-1),e.remove(),e.length=0,e=null}function m(t){k.newpagedivsize={height:t.height,width:t.width},k.newpagedivfullzoom=t.fullzoom,E.minwidth=t.minwidth,E.zoom=t.fullzoom,Me()}function _(t){var e=!1;(I.smallest.width<=0||t.width<I.smallest.width)&&(I.smallest.width=t.width,e=!0),(I.smallest.height<=0||t.height<I.smallest.height)&&(I.smallest.height=t.height,e=!0),A||(!function(t,e){var o=3e4;if(E.direction===M.Vertical){if(b.scrollV)if(b.scrollV.scrollSize(Math.max(b.scrollV._scrollSize+e,0)),1===b.scrollV._ratio&&b.scrollV._scrollSize+e<o)b.scrollV._tray.height(b.scrollV._tray.height()+e),b.scrollV._max=Math.max(b.scrollV._tray.height()-b.scrollV[0].clientHeight,0)+1;else{var n=b.scrollV.height()-b.scrollH.scrollbarHeight()-1,i=(o-n)*b.scrollV._ratio;o<i+e?b.scrollV.ratio((i+e)/(o-n)):At()}Vt(b.scrollV),Ht(b.scrollH,"width")}else if(E.direction===M.Horizontal){if(b.scrollH)if(b.scrollH.scrollSize(Math.max(b.scrollH._scrollSize+t,0)),1===b.scrollH._ratio&&b.scrollH._scrollSize+t<o)b.scrollH._tray.width(b.scrollH._tray.width()+t),b.scrollH._max=Math.max(b.scrollH._tray.width()-b.scrollH[0].clientWidth,0)+1,b.scrollH.ratio(b.scrollH._scrollSize/b.scrollH._max);else{var a=b.scrollH.width()-b.scrollV.width()-1,l=(o-a)*b.scrollH._ratio;o<l+t?b.scrollH.ratio((l+t)/(o-a)):At()}Vt(b.scrollH),Ht(b.scrollV,"height")}if((0!==t||0!==e)&&0!==e){var r=b.scroller[0].scrollLeft,s=b.scroller[0].scrollTop;Rt(ct(r,s)+1),eo({type:"scroll",x:r,y:s,dx:0,dy:0})}}(t.dx,t.dy),e&&ot(it())>b.pageDivs.length&&Me(t))}function v(t,e,o,n){var i=e.getPageSize(t.index,s);if(!i){var a=e.getPageFitMultiplier(t.index,s),l=a,r={width:t.width,height:t.height};1===l&&E.forcepagefit&&(r.width!==o.width||r.height!==o.height)&&0<r.width&&0<r.height&&(l=r.width/o.width>r.height/o.height?o.width/r.width:o.height/r.height,e.setPageFitMultiplier(t.index,l,s)),e.setPageSize(t.index,C.extend({},r),s),n&&(r.width*=E.zoom*l,r.height*=E.zoom*l,(i=C.extend({},I.size)).width*=E.zoom*a,i.height*=E.zoom*a,t.dx=r.width-i.width,t.dy=r.height-i.height,_(t))}}function x(){Atalasoft.Utils.Browser.Mobile.Any()?C(window).on({orientationchange:ne}):C(window).on({resize:ne}),b.scroller.scroll(Mt),G(I.buffer)}function y(t){var e=t.target||t.srcElement;return"TEXTAREA"!==e.nodeName&&"INPUT"!==e.nodeName&&"text"!==e.type?Atalasoft.Utils.__rf():e.attributes.selectable&&"false"===e.attributes.selectable.value?Atalasoft.Utils.__rf():void 0}function z(e,o){return function(t){try{t.currentTarget=o&&0<o.length?o[0]:t.currentTarget,e&&e(t)}catch(t){zt(t.message)}}}function L(t,e){if(E.showerrors)throw void 0===e?t:t+": "+e;zt(t+": "+e),eo({type:"error",name:t,message:e})}function D(t){L(t.name,t.msg)}function T(t,e,o,n){var i=C("<"+t+"></"+t+">");return e&&e.append&&i.appendTo(e),o&&i.attr("id",o),n&&i.html(n),i}function F(t,e,o){return T("div",t,e,o)}function P(t){var e=C('<div style="width:100%; height:100%; position:absolute; left: 0px; top: 0px; background: #F00; opacity:0.0;"></div>');return e.toFront=function(){e.css({"z-index":"10"}),e.reflow&&e.reflow()},e.reset=function(){e.css({"z-index":""}),e.reflow&&e.reflow()},t&&t.prepend(e),e}function U(t){var e=F(t.parent),o=s+"_toolbar";e.buttons=[];for(var n=0;t.children&&n<t.children.length;n++){var i=null;switch(t.children[n].type){case"button":if(!Atalasoft.Utils.Browser.Features.Touch||"lines"!==t.children[n].icon){t.children[n].id=o+"_"+t.children[n].id;var a=j(t.children[n],e);a.addClass(S.atala_toolbar_button),i=a,e.buttons.push(a)}break;case"pagelabel":b.pageLabel=T("span",e,o+"_"+t.children[n].id),(i=b.pageLabel).addClass("ui-controlgroup-item")}i&&t.children[n].cls&&i.addClass(t.children[n].cls)}return e}function B(t){var e=C("<ul/>");for(var o in e.css({fontSize:"medium"}),e.addClass(S.atala_context_menu),t)if(t.hasOwnProperty(o)){var n=Atalasoft.Utils.flattenVersionSting(C.ui.version)>=Atalasoft.Utils.flattenVersionSting("1.12")?"div":"a",i=C("<li><"+n+' href="#"> '+o+" </"+n+"></li>");Atalasoft.Utils.Browser.Features.Touch&&!Atalasoft.Utils.Browser.Mobile.iOS&&i.bind({touchend:t[o]}),i.click(t[o]),i.appendTo(e)}return e.menu(),e}function W(t,e,o){var n=C('<div title="'+e+'" />');return o&&n.append(o),n.dialog(),n}function R(t){var e=T("span",b.toolbar.annoToolbar).addClass("ui-controlgroup-item");return j(t,e),q(e,t.id+"_Drop","ui-icon-triangle-1-s","Click To Choose",null,function(){var t=C(this).next();if(t.is(":visible"))return t.hide(),!1;var e=t.prev().prev().parent();return t.menu().show().css({position:"absolute",top:0,left:0,"min-width":e.width()+"px","z-index":11}).position({my:"left top",at:"left bottom",of:e}),!1}),e.controlgroup(),b.toolbar.annoToolbar.controlgroup("refresh"),e}function O(t,e,o){for(var n=C(t.children().first()),i={},a=0;a<o.length;a++)i[o[a].name]=N(n,e,o[a]);n.menu=B(i),t.append(n.menu),n.menu.hide()}function N(t,e,o){var n=function(){return t.button("option","label","Draw "+o.name),t.data("_annoConfig",o),t.click(e.onclick),t.menu.hide(),t.trigger("click"),!1};return Ye("menuselect"+e.icon+o.name,z(n,t)),n}function q(t,e,o,n,i,a){var l=C('<button id="'+e+'" title="'+n+'">'+(i||n)+"</button>");return a&&l.click(a),l.button({icon:o,showLabel:null!=i&&E.showbuttontext}),l.addClass("atala-ui-button"),t&&l.appendTo(t),l}function j(t,e){var o,n="menuclick"+t.icon,i=q(e,t.id,w+" "+w+"-"+t.icon,t.tooltip,t.text,(o=n,function(t){t.preventDefault(),eo(o,arguments)}));return i.data("_config",t),Ye(n,z(t.onclick,i)),i}function Z(t){var e={clearable:"atala_search_input_clearable",onclear:"atala_search_input_clear_hover",inputEmpty:"atala_search_input_empty",loading:"atala_search_input_loading"},o=t.parent||b.toolbar,n=null,i=null,a=void 0,l=void 0;function r(){var t=l.val();return t?l.addClass(e.clearable):l.removeClass(e.clearable),!!(t&&n&&n.isValid()&&t===n.getQuery())||(clearTimeout(i),n=null,t&&3<=t.length?(p(!0),i=setTimeout(function(){n=V.text.search(t,Ke(),h),g(!0)},E.mousetool.text.searchdelay),!1):void d())}function s(t){var e=l.val();return 13===t.keyCode&&n&&e&&n.isValid()&&n.getQuery()===e?(t.shiftKey?u():c(),!1):13!==t.keyCode||n&&n.isValid()?27===t.keyCode?(d(),v(),!1):void 0:(r(),!1)}function c(){n&&(g(!0),n.next(h))}function u(){n&&(g(!0),n.prev(h))}function d(){n=null,V.text.search(""),V.text.clearSelection(),g(!1),p(!0)}function h(t,e){t.isValid()&&(g(!1),t.wrap=E.mousetool.text.wrapsearch,e||p(e))}function g(t){m(e.loading,t)}function p(t){m(e.inputEmpty,!t)}function f(e){return function(t){t.preventDefault(),e&&e()}}function m(t,e){e?l.addClass(t):l.removeClass(t)}function _(t){m(e.onclear,this.offsetWidth-18<t.clientX-this.getBoundingClientRect().left)}function v(t){t&&t.preventDefault(),l.removeClass(e.clearable).removeClass(e.onclear).val("").change(),r()}!function(){a=F().addClass(S.atala_search_container).addClass("ui-controlgroup-item"),(l=C('<input type="text" placeholder="Search..." />').addClass(S.atala_search_input).addClass("ui-widget")).bind({keydown:s,"input propertychange":r}),T("span",a).css({width:"100%"}).append(l);var t=T("span",a);q(t,null,w+" "+w+"-search-next","Next",null,f(c)).addClass(S.atala_search_next).addClass(S.atala_toolbar_button),q(t,null,w+" "+w+"-search-prev","Previous",null,f(u)).addClass(S.atala_search_prev).addClass(S.atala_toolbar_button),a.on("mousemove","."+e.clearable,_).on("touchstart click","."+e.onclear,v),o.append(a),o.append(C('<div style="clear:both;"></div>'))}(),this.dispose=function(){l.unbind({keypress:s,"input propertychange":r}),a.off("mousemove","."+e.clearable,_).off("touchstart click","."+e.onclear,v),n&&n.dispose();a.remove()}}function Q(){E.allowannotations&&c.annotations.cancelDraw(),V.mouseTool.setTool(r.ZoomArea)}function X(o){return function(){var t=J(I),i=t[0],e=[];t.forEach(function(t){return e.push(V.document.getPageRotation(t)+o)}),V.document.rotatePages(t,e,function(){var t=ve(i),e=vt(i),o=E.direction===M.Vertical?e.height*t:0;ee(E.pageselectlocation,Atalasoft.Utils.PageSelection.Center)||ee(E.pageselectlocation,Atalasoft.Utils.PageSelection.MiddleLeft)?o/=2:ee(E.pageselectlocation,Atalasoft.Utils.PageSelection.TopLeft)&&(o=0);var n={x:E.direction===M.Vertical?0:o,y:E.direction===M.Vertical?o:0};te(i,n,E.pageselectlocation,!0)})}}function J(t){return[t.number-1]}function $(t,e){var o=F(t,e);return E.direction===M.Vertical?(o.height(1),o.css({display:"block"})):E.direction===M.Horizontal&&(o.width(1),o.css({display:"inline-block",overflow:"hidden"})),o._zoom=1,E.backcolor&&o.css({backgroundColor:E.backcolor}),o}function G(t){if(void 0===t){var e=ot(A&&k.newpagedivsize&&0<E.zoom&&isFinite(E.zoom)?E.zoom:it());I.buffer<e&&(I.buffer=e),I.buffer=Math.min(I.buffer,V.document.getPageCount()),t=I.buffer}function o(e){return function(){var t;t=e,k.activepage=t}}if(b.pageDivs.length<t)for(var n=b.pageDivs.length;n<t;n++)b.pageDivs[n]=F(),b.pageDivs[n].addClass(S.atala_page_div),E.showselecttools&&(b.pageDivs[n]._rubberband=new Atalasoft.Controls.RubberBandTool(c,{},b.pageDivs[n],{getViewportSize:wt,getMaxZoom:at,getPageOffsets:gt,raiseDrawLayer:Te,resetDrawLayer:Pe})),b.pageDivs[n].bind({touchstart:o(b.pageDivs[n]),mousedown:o(b.pageDivs[n])}),V.annotations&&V.annotations.addDrawingSurface(b.pageDivs[n]),(E.showselecttools||E.allowannotations||E.allowforms||E.allowtext)&&(b.pageDivs[n]._draw=P(b.pageDivs[n])),V.forms&&!A&&V.forms.addFormLayer(b.pageDivs[n]),V.text&&!A&&V.text.addTextLayer(b.pageDivs[n]);else if(b.pageDivs.length>t)for(;b.pageDivs.length>t&&0!==b.pageDivs.length;){var i=b.pageDivs.pop();i._rubberband&&i._rubberband.dispose(),V.annotations&&V.annotations.removeDrawingSurface(i),V.forms&&!A&&V.forms.removeFormLayer(i),V.text&&!A&&V.text.removeTextLayer(i),i&&qt(i),i=null}}function K(t,l,e,o){"function"==typeof e&&(o=e,e=void 0);var n="function"==typeof o?[o]:[],u=C(new Image),i=.9,r=C.extend(!0,{atala_cb:void 0},e||{});u._domEl=F(),u._domEl.addClass(S.atala_page_image_anchor),u.addClass(S.atala_page_image),u._domEl.append(u);var a={load:_,error:function(){z(),L("ImageError","Image at frameIndex "+d()+" failed to load.")},inserted:function(t){u._loaded&&v()}};function d(){return u._page?u._page._index:V.document.getPageIndexByImageIndex(u._index)}function s(){return u._domEl}function c(t){return V.document.getPageFitMultiplier(void 0!==t?t:d())}function h(t,e){return(t=void 0===t?E.zoom:t)*c(e)}function g(){var t=vt(d())||I.size;return{height:t.height,width:t.width}}
/**
        * Returns physical size of the image without client transformations applied(like view rotation)
        */function p(){var t=g();return 90===u._viewrotation||270===u._viewrotation?P(t):t}function f(t,e){return e=e||g(),{height:Math.round(e.height*h(t)),width:Math.round(e.width*h(t))}}function m(t){var e=d(),o=I.vector&&(!l||!l.uri)?h():Math.min(h(),1),n=V.document.getPageRotation(e);if(t||o!==u._zoom||u._rotation!==n){var i=C.extend({atala_docurl:l?l.uri:u.documenturl,atala_doczoom:o,atala_thumbpadding:!1},r);n&&(i.atala_angle=n),E.jpeg&&(i.atala_jpeg=!0);var a={type:"docpage",serverurl:E.serverurl,query:"?ataladocpage="+(null===l?u._index:void 0!==l.index?l.index:l),method:"GET",data:i,cancel:!1,info:u};u._reqzoom=o,u._reqangle=n,Oe(a,_,_)}}function _(){u._loaded||u._domEl.removeClass(S.atala_page_loading),u._loaded=!0,u._zoom=u._reqzoom,u._rotation=u._reqangle;var t=d();if(0<=t){if(u._rotation!==V.document.getPageRotation(t))return void m();(u._viewrotation=0)<u.parent().length&&v(),T(u._viewrotation);var e=I.vector?h():Math.min(h(),1);b()&&u._zoom<e*i&&!nt(u._zoom,e)&&w(!1)}z()}function v(){var t;(t=u)&&(t.removeAttr("width height"),t.css({width:"auto",height:"auto"}));var e=u.prop("naturalWidth")||0,o=u.prop("naturalHeight")||0,n=e||u.width(),i=o||u.height(),a=g(),l=h(),r=!1;if(0!==n&&0!==i){var s;u._size.width=Math.round(n/u._zoom),u._size.height=Math.round(i/u._zoom),90!==u._viewrotation&&270!==u._viewrotation||(u._size=P(u._size)),u._size.width===I.size.width&&u._size.height===I.size.height||nt(u._size.width,a.width)&&nt(u._size.height,a.height)||(r=!0,V.document.setPageSize(d(),u._size)),null===V.document.getPageSize(d())&&(r=!0,V.document.setPageSize(vt,u._size)),E.forcepagefit?(s=function(t){t=t||u._size;var e={width:E.forcepagesize.width*(A?1:E.zoom),height:E.forcepagesize.height*(A?1:E.zoom)};return(e.width<1||e.height<1)&&(e.width=I.size.width*E.zoom,e.height=I.size.height*E.zoom),t.width/e.width>t.height/e.height?e.width/t.width:e.height/t.height}()/E.zoom,V.document.setPageFitMultiplier(d(),s),y()):(u._zoom!==E.zoom||r||0!==u._viewrotation)&&y();var c=f();r&&u.trigger({type:"pagesizechanged",image:u,index:d(),width:u._size.width,height:u._size.height,dx:Math.round(c.width-a.width*l),dy:Math.round(c.height-a.height*l)}),u.trigger({type:"pageresize",image:u,index:d(),width:c.width,height:c.height})}}function w(t,e){b()&&!u._size.isEmpty()?("function"==typeof e&&n.push(e),u._prevzoom=u._reqzoom,t&&!k.loading?u.animate({height:Math.round(u._size.height*h()),width:Math.round(u._size.width*h())},{duration:H,easing:"easeOutQuad",complete:x,queue:!1}):(y(),x())):"function"==typeof e&&e.call(this,u)}function b(){if(!u._loaded)return!1;var t=!I.vector&&1===u._reqzoom&&1===u._prevzoom&&1<h(),e=nt(u._reqzoom,h())||t;if(!e){var o=Math.abs(u._reqzoom*u._size.width-h()*u._size.width),n=Math.abs(u._reqzoom*u._size.height-h()*u._size.height);o<1&&n<1&&(e=!0)}return!e||!nt(u._scaledzoom,h())}function x(){u.trigger({type:"pagezoom",index:d(),height:Math.round(u._size.height*h()),width:Math.round(u._size.width*h()),prevzoom:u._prevzoom,zoom:h()}),0===k.prpr?m():z()}function y(){var t,e,o,n=f(void 0,p()),i=f(),a=u.prop("naturalWidth")||0,l=u.prop("naturalHeight")||0,r=a&&Math.abs(a-n.width)/n.width<.01,s=l&&Math.abs(l-n.height)/n.height<.01;r&&s||(u.height(n.height),u.width(n.width)),u._domEl.width(i.width),u._domEl.height(i.height),u._scaledzoom=h(),T(u._viewrotation),t=d(),e=i.width,i.height,null!=(o=Yt(t))&&null!=o._num&&o._num.css({left:e-20,right:0})}function z(){0<n.length&&function(t){var e=Array.prototype.slice.call(arguments,1);for(;t.length;)t.shift().apply(this,e)}(n,u)}function D(){var t=V.document.getPageRotation(d());return 0===u._viewrotation&&t!==u._rotation||0!==u._viewrotation}function T(t){var e=p(),o=f(void 0,e),n=0,i=0,a="";90!==t&&270!==t||(n=(o.height-o.width)/2,A&&e.width<e.height&&(n=0),i=(o.width-o.height)/2,o=P(o)),0!==t?(a+=" translate("+n+"px,"+i+"px)",a+="rotate("+t+"deg)",u.css(Atalasoft.Utils.__htmlTransformStyle(a))):u.css(Atalasoft.Utils.__htmlTransformStyle("")),s().css({width:o.width,height:o.height}),u._viewrotation=t}function P(t){var e=t.width;return t.width=t.height,t.height=e,t}return u._binds=a,u.documenturl=E.documenturl,u._index=l?l.mapsto:t,u._loaded=!1,u._size={width:0,height:0,isEmpty:function(){return 0===this.width&&0===this.height}},u._zoom=-1,u._prevzoom=u._zoom,u._scaledzoom=-1,u._rotation=0,u._viewrotation=0,u.dispose=function(){u.unbind(a),u._page=null,u=null},u.zoom=w,u.needsZoom=b,u.getSize=g,u.getScaledSize=f,u.getFitZoom=h,u.getFitMultiplier=c,u.needsRotate=D,u.rotate=function(t){"function"==typeof t&&n.push(t);if(D()){var e=V.document.getPageRotation(d());if(o=V.document.getPageRotation(d()),(0===u._viewrotation&&o!==u._rotation||0!==u._viewrotation&&(u._viewrotation+u._rotation)%360!==o)&&u&&u._loaded&&u._page&&(T(e=(360+e-u._rotation)%360),v()),0===k.prpr&&u._loaded)return void m()}var o;z()},u.getDomElement=s,u.invalidate=function(t,e){"function"==typeof t&&(e=t,t={});(r=C.extend(!0,{},t)).atala_cb=Math.floor(1e9*Math.random()),"function"==typeof e&&n.push(e);m(!0)},function(){u.bind(a);var t=E.pageborderwidth,e={bottom:0,top:0,right:0,left:0};u._loaded=!1,u._reqzoom=-1,(E.direction===M.Vertical||E.tabular)&&(e.bottom=E.pagespacing);(E.direction===M.Horizontal||E.tabular)&&(e.right=E.pagespacing);var o=s();E.showpageborder&&o.css({"border-bottom":t+"px solid black","border-right":t+"px solid black","border-top":t+"px solid silver","border-left":t+"px solid silver","margin-bottom":e.bottom+"px","margin-right":e.right+"px"});o.css({display:"inline-block"}),o.addClass(S.atala_page_loading),m()}(),u}function Y(t,e){var o="overflow:scroll; position:absolute; background-color:Transparent;",n=F(t);n.css({position:"absolute",display:"none","background-color":"white"});var i=null,a=!1;function l(){i._tooltip.hide(),I.number===i._pagenum||Kt(i._pagenum)||Bt(i._pagenum),Fe()}function r(t,e){if(E.forcepagefit){e*=t._ratio;var o=t._direction===M.Vertical?{x:0,y:e}:{x:e,y:0};return ct(o.x,o.y)+1}return Math.floor(e/(t._max/V.document.getPageCount()))+1}return e===M.Horizontal?(Atalasoft.Utils.Browser.Firefox&&(o=o.replace("overflow","overflow-x")),(i=C('<div style="'+o+'bottom:0px; left:0px; width:100%;z-index:10"></div>').appendTo(t))._tray=C('<div style="height:1px;"></div>').appendTo(i)):(Atalasoft.Utils.Browser.Firefox&&(o=o.replace("overflow","overflow-y"),o+="width:"+(function(){var t=F(C("body")),e=F(t);t.css({width:"50px",height:"50px",overflow:"hidden",position:"absolute",visibility:"hidden"}),e.css({width:"100px",height:"100px"});var o=t.width();t.css({"overflow-y":"scroll"});var n=o-t[0].clientWidth;return C(t).remove(),n}()+1)+"px;",a=!0),(i=C('<div style="'+o+'top:0px; right:0px; height:100%;z-index:10"></div>').appendTo(t))._explicitSize=a,i._tray=C('<div style="width:1px;"></div>').appendTo(i)),et(i),i._ratio=1,i._direction=e,i._tooltip=n,i._pagenum=-1,i._scrollSize=0,i.pageNum=function(t){i._pagenum=t},i.scrollbarHeight=function(){return i.height()-i[0].clientHeight},i.scrollSize=function(t){i._scrollSize=t},i.ratio=function(t){i._ratio=t},i.bind({scroll:function(t){if(!i.propagationPaused()){clearTimeout(i._tooltip._timeout),b.scroller.stop(),b.scroller.pauseEventPropagation(!0);var e={};i._direction===M.Vertical?(b.scroller.scrollTop(i[0].scrollTop*i._ratio),i._pagenum=r(i,i[0].scrollTop),e.right=i.width()+10+"px",e.top=16+Math.round((i[0].offsetHeight-48)/i[0].scrollHeight*i[0].scrollTop)+"px"):i._direction===M.Horizontal&&(b.scroller.scrollLeft(i[0].scrollLeft*i._ratio),i._pagenum=r(i,i[0].scrollLeft),e.bottom=i.height()+10+"px",e.left=16+Math.round((i[0].offsetWidth-48)/i[0].scrollWidth*i[0].scrollLeft)+"px"),i._direction===E.direction&&E.showpagenumbertooltip&&("none"===i._tooltip.css("display")&&(i._tooltip.css(e),i._tooltip.show()),E.showpagenumbertooltip&&i._tooltip.html("Page "+i._pagenum),i._tooltip._timeout=setTimeout(l,1e3))}}}),i}function tt(t){t&&t._tooltip&&(clearTimeout(t._tooltip._timeout),t._tooltip.hide())}function et(e){var o={scroll:function(){e.unbind(o),e.resumeEventPropagation()}};e._pauseEP=0,e.propagationPaused=function(){return 0<e._pauseEP},e.pauseEventPropagation=function(t){e._pauseEP++,t&&e.bind(o)},e.resumeEventPropagation=function(){0<e._pauseEP&&e._pauseEP--}}function ot(t){var e=wt(),o=lt(0,t);o.width=0<I.smallest.width&&I.smallest.width<o.width&&!A?I.smallest.width:o.width,o.height=0<I.smallest.height&&I.smallest.height<o.height&&!A?I.smallest.height:o.height;var n=Math.ceil(e.width/o.width)+2,i=Math.ceil(e.height/o.height)+2,a=void 0;return E.tabular?(E.direction===M.Vertical&&0<E.columns?n=E.columns:E.direction===M.Horizontal&&0<E.rows&&(i=E.rows),a=n*i):E.direction===M.Vertical?a=i:E.direction===M.Horizontal&&(a=n),a}function nt(t,e){return e<t+.001&&t-.001<e}function it(){return 0!==I.size.width?E.minwidth/I.size.width:1}function at(){return 0!==I.size.width?E.maxwidth/I.size.width:1}function lt(t,e,o){if(V.document.getPageCount()<=0)return{width:0,height:0};if(o=void 0===o||o,k.newpagedivsize){var n={width:k.newpagedivsize.width,height:k.newpagedivsize.height},i=E.showpageborder&&o?2*E.pageborderwidth:0,a=(e||E.zoom)/k.newpagedivfullzoom;return n.height=Math.round(n.height*a)+i,n.width=Math.round(n.width*a)+i,n}return rt(t,e||E.zoom,E.showpageborder&&o)}function rt(t,e,o){var n,i=C.extend({},vt(t)),a=o?2*E.pageborderwidth:0;return e*=(n=t,V.document.getPageFitMultiplier(n)),i.height=Math.round(i.height*e)+a,i.width=Math.round(i.width*e)+a,i}function st(t,e){return gt(null,t,e).index}function ct(t,e){var o=wt(),n={x:t+E.pageselectlocation.x*o.width,y:e+E.pageselectlocation.y*o.height};return st(n.x,n.y)}function ut(t,e){for(var o={left:0,top:0},n=t;null!=n&&n!==e;n=n.offsetParent)o.left+=n.offsetLeft,o.top+=n.offsetTop;return o}!function(){var t=E.parent.attr("id")+"_wdv";++_Statics.instanceCounter;for(;document.getElementById(t+_Statics.instanceCounter);)++_Statics.instanceCounter;s=t+_Statics.instanceCounter}(),
/**
     * @member {WebDocumentViewerConfig} config - Current control configuration.
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @instance
     * @alias config
     */
c.config=E,
/** WARNING: Changing values from these references can cause instability.*/
c.events=g,
/** WARNING: Changing values from these references can cause instability.*/
c.domclasses=S,
/** WARNING: Changing values from these references can cause instability.*/
c.domattributes=h;var dt={height:0,isEmpty:function(){return 0===this.width&&0===this.height},width:0,zero:function(){this.width=0,this.height=0},zoom:1};function ht(){if(dt.isEmpty()||dt.zoom!==E.zoom){var t=gt(null,null,null,E.zoom);dt.height=t.height,dt.width=t.width,dt.zoom=E.zoom}return dt}function gt(t,e,o,n){return pt(0,t,e,o,n)}function pt(t,e,o,n,i){if(E.tabular)return function(t,e,o,n,i){if(e<t)return{width:0,height:0,index:e};var a=ft(t,o,n,i),l=ft(e,o,n,i);return l.height=E.direction===M.Vertical?l.height-a.height:l.height,l.width=E.direction===M.Horizontal?l.width-a.width:l.width,l}(t,e,o,n,i);var a=V.document.getPageCount();e=e||0===e?e:a;var l={height:0,width:0,index:t=t||0};if(E.direction===M.Vertical)for(var r=null,s=t;s<a&&s<e&&(l.height+(r=lt(s,i).height)<=n||null==n);s++)l.height+=r+E.pagespacing,l.index++;else if(E.direction===M.Horizontal)for(var c=null,u=t;u<a&&u<e&&(l.width+(c=lt(u,i).width)<=o||null==o);u++)l.width+=c+E.pagespacing,l.index++;return l.index>=a&&0<a&&(l.index=a-1),l}function ft(t,e,o,n){var i=V.document.getPageCount(),a={height:0,width:0,index:0},l=mt(n);t=null==t?t=i:t;var r=void 0,s=void 0;E.direction===M.Vertical?(r=l||1,s=Math.ceil(i/r)):E.direction===M.Horizontal&&(s=l||1,r=Math.ceil(i/s));var c=lt(0,n);c.width+=E.pagespacing,c.height+=E.pagespacing;var u=null==o?Math.floor(t/r):Math.floor(o/c.height),d=null==e?t%r:Math.ceil(e/c.width);return a.height=u*c.height,a.width=d*c.width,a.index=u*r+d,a.index>=i&&0<i&&(a.index=i-1),a}function mt(t){var e=1;if(E.tabular){var o=E.pagespacing||0,n=lt(0,t);E.direction===M.Vertical?(e=Math.floor(b.content.width()/n.width),e=Math.min(e,Math.floor((b.content.width()-e*o)/n.width))):E.direction===M.Horizontal&&(e=Math.floor(b.content.height()/n.height),e=Math.min(e,Math.floor((b.content.height()-e*o)/n.height)))}return e||1}function _t(t,e){var o=vt(t);return(we(t)+(e||0))%180==0?o:{width:o.height,height:o.width}}function vt(t){var e=V.document.getPageSize(t);return e||I.size}function wt(){return{width:b.scrollV?b.main.width()-b.scrollV.width():b.main.width(),height:b.scrollH?b.main.height()-b.scrollH.scrollbarHeight():b.main.height()}}function bt(t,e){var o={status:"fail",started:!1,reason:t};return"function"==typeof e&&e.call(),o}function xt(t,e,o,n,i,a){var l=ut(t,e);return l.left<=i&&l.left+t.clientWidth>=o&&l.top<=a&&l.top+t.clientHeight>=n}function yt(t,e,o){return e<t.length&&(t.splice(o,0,t.splice(e,1)[0]),!0)}function zt(t){E.showstatus&&b.status&&b.status.html(t),eo({type:"statusmessage",message:t})}function Dt(t,e){var o=void 0;if(1===t.length&&"object"===_typeof(t[0]))o=t[0];else if("string"==typeof t[0]){o={};var n=null;3===t.length?n=t[2]:2===t.length&&(n=t[1]);for(var i=-1<t[0].indexOf(" ")?t[0].split(" "):[t[0]],a=0;a<i.length;a++)o[i[a]]=n}for(var l in o)if(o.hasOwnProperty(l)){var r=null;if(l in g?r=g:c&&l in c.annotations.events?r=c.annotations.events:c&&l in c.forms.events?r=c.forms.events:c&&l in c.document.events&&(r=c.document.events),null==r&&(r=g),null==r[l])e&&(r[l]=[o[l]]);else if(e)r[l].push(o[l]);else if(o[l])for(var s=0;s<r[l].length;s++)r[l][s]===o[l]&&r[l].splice(s,1);else r[l].length=0}}function Tt(t,e){return e?isFinite(parseFloat(t)):isFinite(parseInt(t,10))}function Pt(t,e,o,n,i){if(null==i&&"function"==typeof n&&(i=n,n=null),t=null==t?b.scroller.scrollLeft():t,e=null==e?b.scroller.scrollTop():e,E.direction===M.Horizontal){if(t>b.viewport.width()){var a=ht();if(t<a.width&&0<b.content.width()){var l=a.width-(b.edges[0].width()+b.content.width());b.edges[1].width(l)}}}else if(E.direction===M.Vertical&&e>b.viewport.height()){var r=ht();if(e<r.height&&0<b.content.height()){var s=r.height-(b.edges[0].height()+b.content.height());b.edges[1].height(s)}}b.scroller.stop(),!o||k.loading||k.scrollPos.x===t&&k.scrollPos.y===e?(b.scroller.scrollLeft(t),b.scroller.scrollTop(e),"function"==typeof i&&i.call()):C.when(b.scroller.animate({scrollLeft:t,scrollTop:e},{duration:n||u,easing:"easeOutQuad",queue:!1})).done(i)}function Ct(t,e){if(b.scroller.is(":animated"))return bt("scrolling",e);var o=gt(I.number+t-1);Pt(o.width,o.height,!0,e)}function At(){if(b.scrollH&&b.scrollV){var t=V.document.getPageCount();if(b.scrollH.pauseEventPropagation(),b.scrollV.pauseEventPropagation(),E.direction===M.Vertical){Ht(b.scrollH,"width");var e=Math.round(gt(t-1).height+lt(t-1).height);Atalasoft.Utils.Browser.Firefox&&(e+=Math.round(b.scrollH.scrollbarHeight())),b.scrollV.scrollSize(e-(b.scrollV.height()-b.scrollH.scrollbarHeight()-1)),3e4<e?(b.scrollV.ratio(e/(3e4-(b.scrollV.height()-b.scrollH.scrollbarHeight()-1))),b.scrollV._tray.height(3e4)):(b.scrollV._tray.height(e),b.scrollV.ratio(1)),Vt(b.scrollV)}else if(E.direction===M.Horizontal){Ht(b.scrollV,"height");var o=Math.round(gt(t-1).width+lt(t-1).width);b.scrollH.scrollSize(o),3e4<o?(b.scrollH.ratio(o/(3e4-(b.scrollH.width()-b.scrollV.width()-1))),b.scrollH._tray.width(3e4)):(b.scrollH._tray.width(o),b.scrollH.ratio(1)),Vt(b.scrollH)}b.scrollV._max=Math.max(b.scrollV._tray.height()-b.scrollV.height(),0)+1,b.scrollH._max=Math.max(b.scrollH._tray.width()-b.scrollH.width(),0)+1,b.scrollH.resumeEventPropagation(),b.scrollV.resumeEventPropagation()}}function Ht(t,e){if(t){var o=Math.round(I.size[e]*E.zoom);if(E.tabular)o=b.content[e]();else for(var n=0;n<b.pageDivs.length;n++)null!=b.pageDivs[n]._index&&(o=Math.max(lt(b.pageDivs[n]._index)[e],o));t._tray[e](o),t.scrollSize(o-t[e]()),Vt(t),t.ratio(1)}}function Vt(t){t&&(t._scrollSize<=0?t._tray.hide():t._tray.show())}function Mt(t){if(!k.zooming&&!k.scrollBuffer&&b.pageDivs.length){var e=(new Date).getTime(),a=b.scroller[0].scrollLeft,l=b.scroller[0].scrollTop,o=a+b.scroller[0].clientWidth,n=l+b.scroller[0].clientHeight,i=st(a,l)+1,r=Math.abs(i-I.number)/mt();if(!k.loading){var s=V.document.getPageCount(),c=b.pageDivs[0]._index,u=b.pageDivs[b.pageDivs.length-1]._index,d=0===r&&(I.number-1<c||I.number-1>u);r<b.pageDivs.length&&!d?xt(b.edges[1][0],b.scroller[0],a,l,o,n)&&u<s-1?Ft(r):xt(b.edges[0][0],b.scroller[0],a,l,o,n)&&0<c?Lt(r):i!==I.number&&null===Yt(i-1)&&Bt(i):Wt(i,!1,null),fe()}if(Rt(ct(a,l)+1),!b.scroller.propagationPaused()&&b.scrollH&&b.scrollV){var h=Math.round(a/b.scrollH._ratio),g=Math.round(l/b.scrollV._ratio);h!==b.scrollH.scrollLeft()&&(b.scrollH.pauseEventPropagation(!0),b.scrollH.scrollLeft(h)),g!==b.scrollV.scrollTop()&&(b.scrollV.pauseEventPropagation(!0),b.scrollV.scrollTop(g))}eo({type:"scroll",x:a,y:l,dx:a-k.scrollPos.x,dy:l-k.scrollPos.y}),t&&(k.scrollTimeout&&clearTimeout(k.scrollTimeout),k.scrollTimeout=setTimeout(function(){var t,e,o,n,i;t=a,e=l,o=b.scroller[0].scrollLeft,n=b.scroller[0].scrollTop,i=o===k.scrollPos.x&&n===k.scrollPos.y,t===k.scrollPos.x&&e===k.scrollPos.y&&i?(Fe(),k.scrollTimeout=null,k.loading||fe()):i||(Mt({}),k.scrollTimeout=null)},500),k.scrollPos.x=b.scroller[0].scrollLeft,k.scrollPos.y=b.scroller[0].scrollTop,k.scrollPos.t=e),k.scrollBuffer=t?setTimeout(It,50):null}}function It(){null!==k.scrollBuffer&&(clearTimeout(k.scrollBuffer),k.scrollBuffer=null)}function kt(){if(E.direction===M.Horizontal){var t=b.pageDivs.length?(A?Math.max(I.size.height,I.size.width):I.size.height)*E.zoom:0;E.thumbpadding&&"number"==typeof E.thumbpadding&&(t+=2*E.thumbpadding),b.edges[0].height(t),b.edges[1].height(t)}}function St(t,e){e=e||0===e?e:t+b.pageDivs.length-1,e=Math.max(t,e);var o=E.tabular?mt():1,n=E.tabular?(Math.floor(e/o)+1)*o-e:1,i=gt(t),a=V.document.getPageCount(),l=e<a?lt(e):{width:0,height:0},r=e<a-o?lt(a-1):{width:0,height:0},s=pt(t,e);s.width+=l.width,s.height+=l.height;var c=pt(e+1,a-1);if(c.width+=r.width,c.height+=r.height,E.direction===M.Vertical)if(b.edges[0].height(i.height),e+n>=V.document.getPageCount()){var u=i.height+s.height+c.height;b.scrollH&&u>b.scroller[0].clientHeight&&b.content.width()<=b.scroller[0].clientWidth?b.edges[1].height(b.scrollH.scrollbarHeight()):b.edges[1].height(0)}else b.edges[1].height(c.height),Atalasoft.Utils.Browser.Chrome&&b.content.height("");else if(E.direction===M.Horizontal)if(b.edges[0].width(i.width),e+n>=V.document.getPageCount()){var d=i.width+s.width+c.width;b.scrollV&&d>b.scroller[0].clientWidth&&b.content.height()<=b.scroller[0].clientHeight?b.scrollV._explicitSize?b.edges[1].width(b.scrollV.height()<b.scrollV._tray.height()?b.scrollV.width():0):b.edges[1].width(b.scrollV.width()):b.edges[1].width(0)}else b.edges[1].width(c.width),b.edges[1].height(1)}function Et(){return k.activepage}function Lt(t){if(t=t||1,0===k.prpr&&0<b.pageDivs.length){var e=mt(E.zoom);Qt();for(var o=t;0<o;o--){var n=b.pageDivs[0]._index-e;if(0<=n&&n<V.document.getPageCount()){for(var i=e-1;0<=i;i--){var a=Jt(-1);Nt(a),b.content.prepend(a),jt(a,Gt(n+i),n+i)}St(n,null),kt()}}setTimeout(Xt,10)}}function Ft(t){t=t||1;var e=b.pageDivs[b.pageDivs.length-1]._index+1;if(0===k.prpr&&0<b.pageDivs.length&&e<V.document.getPageCount()){Qt();for(var o=mt(E.zoom),n=V.document.getPageCount(),i=t;0<i;i--){var a=b.pageDivs[b.pageDivs.length-1]._index+1;if(a<n){for(var l=a+o-1-b.pageDivs.length,r=0;r<o;r++){var s=Jt(1);Nt(s),b.content.append(s),jt(s,Gt(a+r),a+r)}St(l+1,a),kt()}}setTimeout(Xt,10)}}
/**
    * Scrolls the viewer to the given page index and executes the callback when finished.
    * @param {number} index - Index of the page to show.
    * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
    *  @instance
    * @memberOf Atalasoft.Controls.WebDocumentViewer
    * @function showPage
    */function Ut(t,e){Bt(t+1,e)}
/**
    * Scrolls the viewer to the given page number and executes the callback when finished.
    * @param {number} pageNumber - Number of the page to show. Note that page number is expected 1-based.
    * @param {NotificationCallback} [callback]: function to execute after this operation is done
    * @instance
    * @memberOf Atalasoft.Controls.WebDocumentViewer
    * @function showPageNumber
    * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer#showPage|showPage} instead.
    */function Bt(t,e){if(t=Math.max(1,t),t=Math.min(V.document.getPageCount(),t),I.number!==t){var o=t-I.number;Math.abs(o)<b.pageDivs.length?Ct(o,e):Wt(t,!0,e)}else"function"==typeof e&&e.call()}function Wt(t,e,o){var n=V.document.getPageCount(),i=t-1;if(0===k.prpr&&0<n){var a=function(){Xt(!e),"function"==typeof o&&o.call()};Qt();var l=0,r=0,s=i<=0?0:i;if(s+b.pageDivs.length>=n){if(s=n-b.pageDivs.length,E.tabular){var c=mt();s=Math.ceil(s/c)*c}s=Math.max(s,0)}if(E.direction===M.Vertical){l=gt(s).height,b.edges[0].height(l),St(s,null),kt(),Ot();for(var u=0;u<b.pageDivs.length;u++)b.content.append(b.pageDivs[u]),jt(b.pageDivs[u],null,s+u);var d=gt(Math.max(i,0)).height,h=I.number<t?-I.size.height:I.size.height;e&&d!==k.scrollPos.y?(Pt(null,d+h,!1),Pt(null,d,!0,a)):a.call()}else if(E.direction===M.Horizontal){r=gt(s).width,b.edges[0].width(r),St(s,null),kt(),Ot();for(var g=0;g<b.pageDivs.length;g++)b.content.append(b.pageDivs[g]),jt(b.pageDivs[g],null,s+g);var p=gt(Math.max(i,0)).width,f=I.number<t?-I.size.width:I.size.width;e&&p!==k.scrollPos.x?(Pt(p+f,null,!1),Pt(p,null,!0,a)):a.call()}}else bt("paused",o)}function Rt(t){var e=V.document.getPageCount();if(0<t&&t<=e){if(I.number!==t||I.numberoutof!==e){if(b.pageLabel.html(t+" / "+e),I.number!==t){I.number=t;for(var o=0;o<b.pageDivs.length;o++){var n=b.pageDivs[o];n._index===t-1?n.addClass(S.atala_active_page):n.removeClass(S.atala_active_page)}eo({type:"pagenumberchanged",number:I.number})}I.numberoutof!==e&&(I.numberoutof=e)}}else b.pageLabel.html(""),b.viewport.find("."+S.atala_active_page).removeClass(S.atala_active_page),I.numberoutof=0}function Ot(){for(var t=b.pageDivs.length-1;0<=t;t--)Nt(b.pageDivs[t])}function Nt(t){Atalasoft.Utils.Browser.Explorer&&document.activeElement&&t.has(document.activeElement).length&&b.scroller.focus(),E.allowannotations&&(Atalasoft.Utils.Browser.Firefox||Atalasoft.Utils.Browser.Edge)&&V.annotations.__clearAllSelection(t),t.detach(),null!=t._img&&(t._img._page=null,t._img.getDomElement().detach(),t._img=null),eo({type:"pagerecycled",index:t._index,page:t}),t._index=-1,t.removeAttr(h.atala_page_index)}function qt(t){Nt(t),t._index=-1,t.removeAttr(h.atala_page_index),t._img=null,t.remove()}function jt(e,t,o,n){if(e._index===o&&e._img===t&&!n)return!1;if(n&&!e.nullinserted&&o<0)return!1;if(e._index=o,e.attr(h.atala_page_index,o),o>=V.document.getPageCount())return e.hide(),!1;if(e._img&&e._img!==t&&(e._img._page=null,0<e.has(e._img.getDomElement()).length&&e._img.getDomElement().detach(void 0,!0)),e._rubberband&&e._rubberband.reset(),e._img=t,e._img&&(e._img._page=e),e.css({display:E.tabular||E.direction===M.Horizontal?"inline-block":"block"}),E.showpagenumber&&(e.css({position:"relative"}),e._num||(e._num=C('<div style="position:absolute; right:20px; bottom:16px;z-index:1"/>'),e._num.addClass(S.atala_page_number),e.append(e._num)),e._num.text(e._index+1)),e._img&&e._img._binds&&(e._img._binds.pageresize||(e._img._binds.pageresize=function(t){eo({type:"pageresize",page:t.image._page,image:t.image,index:t.image._page?t.image._page._index:V.document.getPageIndexByImageIndex(t.image._index),width:t.width,height:t.height})},e._img.bind({pageresize:e._img._binds.pageresize})),e._img._binds.pagesizechanged||(e._img._binds.pagesizechanged=function(t){eo({type:"pagesizechanged",page:e,image:t.image,index:t.index,width:t.width,height:t.height,dx:t.dx,dy:t.dy})},e._img.bind({pagesizechanged:e._img._binds.pagesizechanged}))),e._img){var i=e._img.getDomElement();e.append(i),e._img.trigger({type:"inserted",page:e}),e._img._loaded||(e.nullinserted?e._img.css({width:e.width(),height:e.height()}):Zt(e._img,e._index)),k.newpagedivsize||e.css({width:"",height:""}),e.nullinserted=!1}else e.nullinserted=!0,k.newpagedivsize||Zt(e,e._index);return eo({type:"pageshown",page:e,index:e._index}),!0}function Zt(t,e){var o=lt(e,null,!1);t.css({width:o.width,height:o.height})}function Qt(){k.prpr++}function Xt(t){0!==k.prpr&&(k.prpr--,0!==k.prpr||t||Mt())}function Jt(t){return 0<t?(yt(b.pageDivs,0,b.pageDivs.length-1),b.pageDivs[b.pageDivs.length-1]):(yt(b.pageDivs,b.pageDivs.length-1,0),b.pageDivs[0])}
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
function $t(t,e){var o=C.Deferred();0<=t.cacheIndex&&b.loadedImgs[t.cacheIndex]?b.loadedImgs[t.cacheIndex].invalidate(e,function(){o.resolve()}):o.resolve();return o.promise()}function Gt(t,e,o){"function"==typeof e&&(o=e,e=void 0);var n=V.document.getPageDefinition(t);if(n){if(n.cacheIndex<0||!b.loadedImgs[n.cacheIndex]){var i=k.nextImageCacheIndex++;n.cacheIndex=i,V.document.setPageCacheIndex(t,i),b.loadedImgs[i]=K(n.index,n.ref,e,function(t){t&&((b.loadedImgs[i]=t)._cacheIndex=i,V.memory.allocate(t)),"function"==typeof o&&o.call()}),E.allowtext&&V.text&&!A&&V.text.ensurePageTextLoaded(t)}else"function"==typeof o&&o.call();return b.loadedImgs[n.cacheIndex]}}function Kt(t){var e=Yt(t);if(e){var o=b.scroller[0].scrollLeft,n=b.scroller[0].scrollTop;return xt(e[0],b.scroller[0],o,n,o+b.scroller[0].clientWidth,n+b.scroller[0].clientHeight)}return!1}function Yt(t){for(var e=null,o=0;o<b.pageDivs.length&&null===e;o++)b.pageDivs[o]._index===t&&(e=b.pageDivs[o]);return e}function te(t,e,o,n,i){n&&"function"==typeof n&&(i=n,n=!1);var a=Yt(t),l=void 0;if(a){var r=b.scroller[0].scrollLeft,s=b.scroller[0].scrollTop;if((l=ut(a[0],b.scroller[0])).left+=e.x,l.top+=e.y,!n&&l.left>=r&&l.left<=r+r+b.scroller[0].clientWidth&&l.top>=s&&l.top<=s+b.scroller[0].clientHeight)return void(i&&i())}else(l=gt(t)).left=l.width+e.x,l.top=l.height+e.y;var c={x:b.scroller[0].clientWidth/2,y:b.scroller[0].clientHeight/2};ee(o,Atalasoft.Utils.PageSelection.BottomLeft)?(c.x=b.scroller[0].clientWidth,c.y=b.scroller[0].clientHeight):ee(o,Atalasoft.Utils.PageSelection.TopLeft)&&(c.x=0,c.y=0),Pt(l.left-c.x,l.top-c.y,!0,i)}function ee(t,e){return t&&e&&t.x===e.x&&t.y===e.y}var oe=null;function ne(t){oe&&clearTimeout(oe),oe=setTimeout(function(){eo("documentchanged")},200)}function ie(){b.scroller.stop(),b.scroller.pauseEventPropagation(),Qt()}function ae(){At(),0<b.pageDivs.length&&Kt(V.document.getPageCount()-1)&&St(b.pageDivs[0]._index),kt(),b.scroller.resumeEventPropagation(),Xt()}function le(){k.zooming=!0,ie(),eo("zoomstarted")}function re(t){var e,o,n,i,a,l,r;t=Math.min(t,at()),t=Math.max(t,it()),e=t,o=!1,i=gt(I.number,null,null),a=gt(I.number,null,null,e),l=(b.scroller.scrollLeft()-i.width)/E.zoom*e,r=(b.scroller.scrollTop()-i.height)/E.zoom*e,Pt(a.width+l,a.height+r,o,H,n),E.zoom=t,fe(!1),ge(t,!1)}function se(){k.zooming=!1,ae(),eo({type:"zoomchanged",zoom:E.zoom})}
/**
    * Asynchronously zooms the viewer to the given zoom over the default zoom duration
    * @param {number} zoom - Desired zoom level to zoom to.
    * @param {NotificationCallback} [callback] - function to execute after the zoom is finished animating.
    * @instance
    * @memberOf Atalasoft.Controls.WebDocumentViewer
    * @function zoom
    */function ce(t,e){if(k.zooming)bt("zooming",e);else if(k.zooming=!0,ie(),eo("zoomstarted"),t!==E.zoom){t=Math.min(t,at()),t=Math.max(t,it());var o=gt(I.number,null,null),n=gt(I.number,null,null,t),i=(b.scroller.scrollLeft()-o.width)/E.zoom*t,a=(b.scroller.scrollTop()-o.height)/E.zoom*t;E.zoom=t,fe(!0,function(){ge(t,!0,function(){ue(),Pt(n.width+i,n.height+a,!1,H,function(){b.scrollH&&b.scrollH.scrollLeft(b.scroller.scrollLeft()),b.scrollV&&b.scrollV.scrollTop(b.scroller.scrollTop()),null!=e&&e()})})})}else ue(),"function"==typeof e&&e.call()}function ue(){k.zooming=!1,ae(),eo({type:"zoomchanged",zoom:E.zoom})}function de(t,e){ce(E.zoom+(t?-1:1)*E.zoom*.3,e)}function he(){b.edges[0]._z=E.zoom}function ge(t,e,o){if(0<b.edges.length){o="function"==typeof o?Atalasoft.Utils.__functionFromArray([he,o]):he;var n=E.direction===M.Vertical,i=gt(b.pageDivs[0]&&b.pageDivs[0]._img?b.pageDivs[0]._index:0,null,null,t),a=n?i.height:i.width;if(e&&!k.loading){var l=n?{height:a}:{width:a};b.edges[0].animate(l,{duration:H,easing:"easeOutQuad",complete:o,queue:!1})}else n?b.edges[0].height(a):b.edges[0].width(a),"function"==typeof o&&o.call();pe()}}function pe(d){setTimeout(function(){var t=C("<canvas/>"),e=C('<span style="position:absolute; visibility:hidden; left: -5000px;">{[|,0123456789Thqkbfjplyg</span>');C(document.body).append(e),d=d||E.zoom;var o=E.direction===M.Vertical,n=k.newpagedivsize?k.newpagedivsize:{width:I.size.width*d,height:I.size.height*d},i=Math.max(1,E.pagespacing),a=mt();t[0].width=(n.width+i)*(o?a:1),t[0].height=n.height*(o?1:a);var l=t[0].getContext("2d");l.lineWidth=E.pageborderwidth,E.backcolor&&(l.fillStyle=E.backcolor);for(var r=0;r<a;++r){var s=o?1+r*n.width:1,c=o?1:1+r*n.height;l.strokeRect(s,c,n.width-2,n.height-2),E.backcolor&&l.fillRect(s+l.lineWidth,c+l.lineWidth,n.width-2*(1+l.lineWidth),n.height-2*(1+l.lineWidth))}var u={backgroundImage:"url("+t[0].toDataURL()+")",backgroundSize:"auto auto",backgroundRepeat:o?"repeat-y":"repeat-x"};b.edges[0].css(u),b.edges[1].css(u),e.remove()},0)}function fe(t,e){for(var o=0,n=!0,i=function(){if(--o<=0){if(E.direction===M.Horizontal){var t=ht().width;b.spacer||(b.spacer=F(),b.spacer.css({position:"absolute",top:"-1px",height:"1px"}),b.viewport.append(b.spacer)),b.spacer.width(t)}"function"==typeof e&&e.call(),0===k.prpr&&(Atalasoft.Utils.Browser.Safari||Atalasoft.Utils.Browser.Chrome?b.edges[1].hide().show():b.edges[1][0].className=b.edges[1][0].className)}},a=0;a<b.pageDivs.length;a++){if(b.pageDivs[a]._img)(b.pageDivs[a]._img.needsZoom()||b.pageDivs[a]._img.needsRotate())&&(n=!1,o++,b.pageDivs[a]._img.needsRotate()?b.pageDivs[a]._img.rotate(i):b.pageDivs[a]._img.needsZoom()&&b.pageDivs[a]._img.zoom(t,i))}n&&i.call()}
/**
    * Asynchronously zooms the viewer to fit to a page.
    * @param {Atalasoft.Utils.Fitting} fit - Type of fitting to fit the page to.
    * @param {number} pageNumber - Page number to fit to.  Note, that it's 1-based.
    * @param {NotificationCallback} callback - Function to execute after the fit is done animating.
    * @instance
    * @memberOf Atalasoft.Controls.WebDocumentViewer
    * @function fit
    */function me(t,e,o){null!=e?"function"==typeof e&&(o=e,e=I.number):e=I.number;var n=_e(t,e-1),i=n.zoom,a=d.Width===n.fit&&M.Vertical===E.direction,l=d.Height===n.height;a&&Pt(0,null,!1),l&&Pt(null,0,!1),ce(i,o)}function _e(t,e){var o,n,i,a=(o=wt(),n=E.showpageborder?2*E.pageborderwidth:0,i={width:o.width-n,height:o.height-n},E.tabular&&(1<E.columns&&(i.width=Math.floor((o.width-(E.pagespacing+n)*E.columns)/E.columns)),1<E.rows&&(i.height=Math.floor((o.height-(E.pagespacing+n)*E.rows)/E.rows))),i),l=rt(e,1,!1);0!==l.width&&0!==l.height||(t=null);var r=E.zoom;switch(t){case d.None:break;case d.Best:t=l.width/a.width>l.height/a.height?(r=a.width/l.width,d.Width):(r=a.height/l.height,d.Height);break;case d.Height:r=a.height/l.height;break;case d.Width:r=a.width/l.width;break;default:r=1,t=d.None}return{zoom:r,fit:t}}function ve(t){return E.zoom*V.document.getPageFitMultiplier(t)}function we(t){return V.document.getPageRotation(t)}function be(t,e){e=e||0;var o=we(t),n=ve(t),i=_t(t,e),a=Raphael.matrix();a.scale(n,n,0,0),a.rotate(o+e,0,0);var l,r,s=(l=a,r={x:i.width,y:i.height},{x:l.x(r.x,r.y),y:l.y(r.x,r.y)}),c=Math.min(0,s.x),u=Math.min(0,s.y),d=a.invert(),h=d.x(-c,-u),g=d.y(-c,-u);return a.translate(h,g),a}function xe(t){var e=C.data(t.currentTarget,"_config"),o=C.data(t.currentTarget,"_annoConfig");!o&&e&&(o={type:e.icon,rotatable:E.showrotatetools}),o&&(V.mouseTool.setTool(r.None,r.None),V.annotations.drawAnnotation(o,!1,ze,ye))}function ye(t){V.mouseTool.setTool(r.Pan,r.None)}function ze(t){V.mouseTool.setTool(r.Pan,r.None)}
/**
    * Checks whether annotations support is enabled.
    * @private
    */function De(){return!1===E.allowannotations&&L("InitError",'The "allowannotations" property in the WebDocumentViewer config is set to false.'),E.allowannotations}function Te(){for(var t=0;t<b.pageDivs.length;t++)b.pageDivs[t]._draw.toFront()}function Pe(){for(var t=0;t<b.pageDivs.length;t++)b.pageDivs[t]._draw.reset()}function Ce(t,e,o){if(t){if(k.loading=!0,Ot(),I.size.width=t.pagewidth,I.size.height=t.pageheight,I.count=t.pagecount,I.buffer=E.pagebuffersize,I.dpi=t.dpi,I.vector=!0===t.vector,E.allowannotations=o.allowannotations,E.allowforms=o.allowforms,E.allowtext=o.allowtext,E.documenturl=o.documenturl,E.annotationsurl=o.annotationsurl,E.formsurl=o.formsurl,V.document.__linkChanges(e),V.annotations&&(V.annotations.clear(),V.annotations.loadAnnotations(t)),V.forms&&(V.forms.clear(),t.forms&&V.forms.loadForms(t)),V.text&&V.text.search(""),V.mouseTool.setTool(E.mousetool.type&&!A?E.mousetool.type:r.Pan,r.None),k.zooming=!1,t.zoom)E.zoom=t.zoom;else{var n=_e(E.fitting,1);E.zoom=n.zoom}Ie(t.pagenumber||0),pe(),k.loading=!1,fe(),J=e.__getSelectedPagesIndices,eo({type:"activedocumentchanged"})}}function Ae(t,e){e&&qe(!0);for(var o=0;o<t._controllers.document.getPageCount();++o){var n=t._controllers.document.getPageDefinition(o,s);n&&0<=n.cacheIndex&&b.loadedImgs[n.cacheIndex]&&(V.memory.deallocate(b.loadedImgs[n.cacheIndex]),b.loadedImgs[n.cacheIndex].dispose(),b.loadedImgs[n.cacheIndex].remove(),b.loadedImgs[n.cacheIndex]=void 0)}}function He(t,n){k.loading=!0;var e={atala_docurl:E.documenturl,atala_pagebuffer:E.pagebuffersize,atala_minwidth:E.minwidth};A&&(e.atala_thumb=A,e.atala_capt_format=E.thumbcaptionformat),null!=t&&("function"==typeof t&&(n=t,t=null),C.extend(e,t)),Oe({type:"docinfo",serverurl:E.serverurl,query:"?ataladocinfo=",method:"GET",data:e,cancel:!1,info:{pagewidth:-1,pageheight:-1,pagecount:-1}},function(t){Ve(t,n)},function(t,e,o){!function(t,e,o,n){if(t.responseText){var i=t.responseText.substr(t.responseText.indexOf("</html>")+7);0<=i.indexOf("\x3c!--")?0<(i=i.replace("\x3c!--","").replace("--\x3e","")).length&&(o="<pre>"+i+"</pre>"):0<t.responseText.indexOf("web.config")&&0<t.responseText.indexOf("customErrors")&&(o+=": web.config customErrors attribute has disabled remote error messages.")}L("DocumentLoadError",o),"function"==typeof n&&n.call(void 0,o)}(t,0,o,n)})}function Ve(e,o){if(e&&!1!==e.licensed)I.size.width=e.pagewidth,I.size.height=e.pageheight,I.count=e.pagecount,I.buffer=E.pagebuffersize,I.dpi=e.dpi,I.vector=!0===e.vector,I.caption=e.thumbcaptionformat||(E.showthumbcaption?"{0}":""),dt.zero(),V.memory.clearEntries(),V.memory.colorDepth=e.colordepth,V.memory.pageSize={width:e.pagewidth,height:e.pageheight},eo({type:"documentinfochanged",info:{count:I.count,dpi:I.dpi,size:{height:I.size.height,width:I.size.width},vector:I.vector},customData:e.customData}),V.text&&(V.text.clear(),e.text&&V.text.loadText(e)),k.loading&&(E.zoom=1,G(),Pt(0,0),b.scrollV&&b.scrollV.pageNum(1),Rt(1),me(E.fitting,1,function(){kt(),St(0,b.pageDivs.length-1);for(var t=0;t<b.pageDivs.length&&t<I.count;t++)b.content.append(b.pageDivs[t]),jt(b.pageDivs[t],null,t);0<b.pageDivs.length&&b.pageDivs[0].addClass(S.atala_active_page),e.layers&&e.layers.length?V.annotations.loadAnnotations(e):E.annotationsurl&&V.annotations&&V.annotations.clear(),V.forms&&(V.forms.clear(),e.forms&&V.forms.loadForms(e)),V.mouseTool.setTool(E.mousetool.type&&!A?E.mousetool.type:r.Pan,r.None),k.loading=!1,pe(),"function"==typeof o&&o(e.error,e),e.error&&setTimeout(function(){L("DocumentLoadError",e.error)},0)})),k.loading=!1;else{var t=void 0,n=void 0;n=e&&!1===e.licensed?(t="LicenseException",e.error?e.error:"LicenseException: Handler was unable to find a valid license."):(t="DocumentLoadError","HandlerException: Handler did not return any data."),k.loading=!1,"function"==typeof o&&o.call(void 0,n),t&&n&&L(t,n)}}function Me(t){Ie()}function Ie(t){if(G(),0<b.pageDivs.length){var e=V.document.getPageCount(),o="number"==typeof t?t:b.pageDivs[0]._index;o=0<=o?Math.min(o,e-b.pageDivs.length):0;for(var n=0;n<b.pageDivs.length&&n<e;n++){var i=o+n;Nt(b.pageDivs[n]),b.content.append(b.pageDivs[n]),jt(b.pageDivs[n],null,i)}}St(0<b.pageDivs.length?b.pageDivs[0]._index:0,null),kt(),Fe(),At();var a=ct(b.scroller[0].scrollLeft,b.scroller[0].scrollTop);Rt(a+1),0<=t&&a!==t&&Ut(t)}function ke(t,e){var o={atala_docurl:E.documenturl,atala_spath:E.savepath};function n(t){!function(t){t.error?L("DocumentSaveError",t.error):zt("DocumentSave: success="+t.success);eo({type:"documentsaved",success:t.success,customData:t.customData,fileName:t.fileName})}(t),"function"==typeof e&&e.call()}C.extend(o,t),Oe({type:"docsave",serverurl:E.serverurl,query:"?ataladocsave=",method:"POST",data:o,cancel:!1,info:{success:void 0,error:void 0}},n,function(t){var e=[];e.error=t.responseText,n(e)})}function Se(t,e,o){var n=null;return"string"==typeof t?(n={},k.initialized&&o&&(0<t.length?n=o.createHandlerRequest(E.serverurl,t,e):0===t.length&&o.clear()),n.url=t):void 0!==t&&null!=t&&L("openUrlError","string input expected for url."),n}function Ee(){Ye({annotationsloaded:We})}function Le(){Ye({formsloaded:Re})}function Fe(t){if(!(0<b.pageDivs.length&&void 0===b.pageDivs[0]._index))for(var e=0;e<b.pageDivs.length;e++)Be(b.pageDivs[e],t)}function Ue(t,e){var o=Yt(t);o&&Be(o,e)}function Be(t,e){(jt(t,Gt(t._index),t._index)||e)&&(V.annotations&&V.annotations.showLayer(t._index,t),V.forms&&!A&&V.forms.showLayer(t._index,t),V.text&&!A&&E.allowtext&&V.text.showLayer(t._index,t))}function We(t){t.error&&(L("AnnotationsLoadError",t.error),E.annotationsurl=""),V.annotations&&to({annotationsloaded:We})}function Re(t){t.error&&(L("FormsLoadError",t.error),E.formsurl=""),V.forms&&to({formsloaded:Re})}function Oe(n,e,i,o){var a,l,t,r=(a=n,l=function(t){e(t.request.info)},Ye({handlerreturned:t=function t(e){e.request===a&&(to({handlerreturned:t}),"function"==typeof l&&l.call(this,e))}}),t);if(eo({type:"beforehandlerrequest",request:n}),!n.cancel&&(to({handlerreturned:r}),n.serverurl&&!C.isEmptyObject(n.data))){if(!(n.info instanceof jQuery&&"docpage"===n.type)){if("fileupload"!==n.type)return C.ajax({type:n.method,url:n.serverurl+n.query+"?",dataType:"json",data:n.data,success:e,error:i,crossDomain:("string"!=typeof n.method||"post"!==n.method.toLowerCase())&&void 0});var s="&"+C.param(n.data),c=new FormData;c.append("file",n.file,n.file.name);var u=C.ajax({type:n.method,url:n.serverurl+n.query+"??"+s,dataType:"json",data:c,contentType:!1,processData:!1,success:function(t){t.success&&(t.success=JSON.parse(t.success)),t.canceled&&(t.canceled=JSON.parse(t.canceled)),e(t,n.file.name)},error:function(t,e,o){i(e,o,n.file.name)},crossDomain:("string"!=typeof n.method||"post"!==n.method.toLowerCase())&&void 0,xhr:function(){var t=new XMLHttpRequest;return t.upload.addEventListener("progress",function(t){t.lengthComputable&&(o(n.file.name,t.loaded,t.total)||u.abort())},!1),t}});return u}n.info.attr("src",n.serverurl+n.query+"&"+C.param(n.data))}}
/**
     * Resets the viewer to its default state.
     * @param {OpenUrlCallback} [callback]  - Function to execute when the empty process is finished
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function empty
    */
function Ne(t){k.loading=!0;qe(),Ve({pagewidth:0,pageheight:0,pagecount:-1},function(){At(),eo({type:"documentunloaded"}),"function"==typeof t&&t.call()})}function qe(t){var e;k.initialized&&(Ot(),G(0),t||function(){for(var t=0;t<b.loadedImgs.length;t++)b.loadedImgs[t]&&(b.loadedImgs[t].dispose(),b.loadedImgs[t].remove());b.loadedImgs.length=0}(),b.edges[0].width(0).height(0),b.edges[1].width(0).height(0),b.scrollH&&(b.scrollH.scrollSize(0),Vt(b.scrollH)),b.scrollV&&(b.scrollV.scrollSize(0),Vt(b.scrollV)),e={backgroundImage:"",backgroundSize:"",backgroundRepeat:"",backgroundColor:""},b.edges[0].css(e),b.edges[1].css(e))}
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
function je(){return k.initialized}
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
function Ze(t,e){var o=E.direction===M.Vertical?mt():1;null==e&&"function"==typeof t&&(e=t,t=o),isFinite(t)||(t=o),Ct(t,e)}
/**
    * Scrolls to the previous viewable page.
    * @param {number} n - Number of pages to scroll backward.
    * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
    * @instance
    * @memberOf Atalasoft.Controls.WebDocumentViewer
    * @function previous
    */function Qe(t,e){var o=E.direction===M.Vertical?mt():1;null==e&&"function"==typeof t&&(e=t,t=o),isFinite(t)||(t=o),Ct(-t,e)}
/**
     * Zooms in one level.
     * @param {NotificationCallback} [callback] - Function to execute when the zoom operation is finished
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function zoomIn
     */function Xe(t){de(!1,t)}
/**
    * Zooms out one level.
    * @param  {NotificationCallback} [callback] - Function to execute when the zoom operation is finished.
    * @instance
    * @memberOf Atalasoft.Controls.WebDocumentViewer
    * @function zoomOut
    */function Je(t){de(!0,t)}
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
    */function $e(t,e,o,n){null==n&&("function"==typeof e?(n=e,e=null):"function"==typeof o&&(n=o,o=null));var i=0,a=!1,l=Se(e,t,V.annotations),r=Se(o||t,t,V.forms);E.annotationsurl=l?l.url:E.annotationsurl,E.formsurl=r?r.url:E.formsurl;var s,c,u,d,h=function(t,e){--i<=0&&(Fe(!0),eo({type:"documentloaded",customData:null==e?void 0:e.customData}),"function"==typeof n&&n.call(void 0,t,e))};if("string"==typeof t){if(0===t.length)Ne(h);else if(E.documenturl=t,k.initialized){qe(),tt(b.scrollH),tt(b.scrollV),i++,0===t.length&&Ne(h);var g={};E.allowannotations&&l&&l.data&&(Ee(),C.extend(g,l.data)),E.allowforms&&r&&r.data&&(Le(),C.extend(g,r.data)),a=!0,He(g,h)}}else!(t||!(0<E.documenturl.length)||!e&&""!==e&&!o&&""!==o)||L("openUrlError","string input expected for document url.");a||(l&&(i++,u=l,d=h,V.annotations&&(Ee(),V.annotations.makeHandlerRequest(u,d))),r&&(i++,s=r,c=h,V.forms&&(Le(),V.forms.makeHandlerRequest(s,c))))}
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
     * 		parent: $('#atala-document-container-left'),
     * 		toolbarparent: $('#atala-document-toolbar-left'),
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
     * // document will be saved to ‘Save/’ foler in ‘tif’ format.
     * _viewer.save(‘’, ‘tif’)
     */function Ge(t,e,o,n){"function"==typeof o&&(n=o,o={}),"function"==typeof e&&(n=e,e=E.savefileformat),"function"==typeof t&&(n=t,t=null),void 0===e&&(e=E.savefileformat);var i=C.extend(!0,o,{atala_subpath:t||"",atala_sformat:e});V.annotations&&C.extend(i,{atala_iuname:E.annotations.saveusername,atala_annos:V.annotations.stringifyChanges()}),V.forms&&C.extend(i,{atala_forms:V.forms.stringifyChanges()}),V.document&&C.extend(i,{atala_document:V.document.stringifyChanges()}),ke(i,n)}
/**
    * Gets the current page index
    * @returns {number} Zero based index of the current page.
    *
    * Note, that current page index detection could be affected by {@link WebDocumentViewerConfig.pageselectlocation|pageselectlocation} configuration parameter.
    * @instance
    * @memberof Atalasoft.Controls.WebDocumentViewer
    * @function getCurrentPageIndex
    */
function Ke(){return I.number-1}
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
function Ye(t,e){return Dt(arguments,!0),n.bind.apply(n,arguments),c}
/**
    * Detaches the handler from the event.
    * @param {string} event - the name of the event to unbind.
    * @param {function} [handler] -  the event handler to unbind. If not specified, all handlers are unbound.
    * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
    * @instance
    * @memberOf Atalasoft.Controls.WebDocumentViewer
    * @function unbind
    */function to(t,e){return Dt(arguments,!1),n.unbind.apply(n,arguments),c}
/**
    * Triggers the event.
    * @param {string} event - the name of the event to trigger.
    * @param {Object} [parameters] - the event data.
    * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
    * @instance
    * @memberOf Atalasoft.Controls.WebDocumentViewer
    * @function trigger
    */function eo(t,e){return n.trigger.apply(n,arguments),c}
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
return c.__getDebugInfo=function(){var t={version:Atalasoft.Controls.Version.join(".")};E.debug&&C.extend(!0,t,{dom:b,controllers:V,page:I});return t}
/**
    * [Internal] Gets the viewer linkage for controls that inherit this one
    * @param viewer object of type WebDocumentViewer
    * @param linker internal object of type __LVlinker
    * @returns linker object if possible, otherwise undefined
    */,c.__getViewerLink=function(t,e){if(t&&"Atalasoft.Controls.WebDocumentThumbnailer"===t.typeOf){var o=new function(){this.typeOf="__LVlinker",this._id=s,this._config=E,this._controllers=V,this._dom=b,this._page=I,this._state=k,this._annos=null,this._fields=null,this.stateManager=l,this.__createDialog=W,this.__createDiv=F,this.__createDOM=T,this.__createDropDownButton=R,this.__createDropDownMenu=O,this.__createMenu=B,this.__getPageSize=vt,this.__getTabularIndexOffset=mt,this.__redrawVisiblePages=Fe,this.__adjustVisiblePages=fe,this.__onDocumentChanged=Me,this.__startDomManipulation=ie,this.__endDomManipulation=ae,this.__status=zt,this.__updatePageSize=v,this.__silentReloadPage=$t,this.__isObjectInRect=xt,this.__getIndexFromPos=st,this.__showNext=Ft,this.__showPrevious=Lt,this.__showPageAsync=Wt,this.__adjustEdgeHeights=St,this.__getSelectedPagesIndices=J};return V.document.__linkChanges(o),E.allowannotations&&(t!==c&&0<E.annotationsurl.length&&(E.annotationsurl=""),V.annotations.__linkAnnotations(o)),E.allowforms&&(t!==c&&0<E.formurl.length&&(E.formurl=""),V.forms.__linkForms(o)),E.allowtext&&V.text&&V.text.__linkText(o),o}},c.dispose=
/**
     * Removes all DOM elements, internal references, and empties memory intensive objects.
     * The WebDocumentViewer will no longer function after a call to this method.
     * @instance
     * @memberOf Atalasoft.Controls.WebDocumentViewer
     * @function dispose
     */
function(){if(!A&&l&&l.closeDocument(),qe(),b.main&&b.main.remove(),b.toolbar&&(b.toolbar.controlgroup("destroy"),b.toolbar.remove(),b.toolbar.annoToolbar&&(b.toolbar.annoToolbar.controlgroup("destroy"),b.toolbar.annoToolbar.remove())),b.search&&b.search.dispose(),b.uploadCtrl&&b.uploadCtrl.remove(),b.main=null,b.toolbar=null,b.scroller=null,b.viewport=null,b.content=null,b.scrollH=null,b.scrollV=null,b.loadedImgs.length=0,b.pageDivs.length=0,b.pageLabel=null,b.status=null,b.search=null,b.uploadCtrl=null,b.edges){for(var t=0;t<b.edges.length;t++)b.edges[t]=null;b.edges=[]}for(var e in V)V.hasOwnProperty(e)&&null!==V[e]&&(V[e].dispose(),V[e]=null);k={prpr:0,batchoperation:0,loading:(I={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0}},c.empty=Ne,c.fit=me,c.getZoom=function(){return E.zoom},c.isReady=je,c.scrollTo=function(t,e,o,n){null==n&&"function"==typeof o&&(n=o,o=!1);Pt(t,e,o,null,n)}
/**
    * Scrolls by the given deltas, does not account for zoom, i.e. `dx` and `dy` values are passed in window coordinate space.
    * @param {number} dx - Indicating delta of the x axis.
    * @param {number} dy - Indicating delta of the y axis .
    * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
    * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
    * @instance
    * @memberOf Atalasoft.Controls.WebDocumentViewer
    * @function scrollBy
    */,c.scrollBy=function(t,e,o,n){null==n&&"function"==typeof o&&(n=o,o=!1);i=t,a=e,l=o,r=null,s=n,Pt(b.scroller.scrollLeft()+i,b.scroller.scrollTop()+a,l,r,s);var i,a,l,r,s},c.next=Ze,c.previous=Qe,c.zoom=ce,c.zoomIn=Xe,c.zoomOut=Je,c.openUrl=c.OpenUrl=$e,c.save=Ge,c.uploadFiles=
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
function(t,e,o){if(A)return;V.upload.uploadFiles(t,e,o)}
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
     */,c.uploadFile=function(t,e,o){if(A)return;V.upload.uploadFile(t,e,o)}
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
     */,c.filterFilesForUpload=function(t,e,o){if(A)return;return V.upload.filterFilesPublic(t,e,o)},c.getCurrentPageIndex=Ke,c.bind=Ye,c.unbind=to,c.trigger=eo,c.getDocumentInfo=function(){return{count:V.document.getPageCount(),dpi:I.dpi,size:{height:I.size.height,width:I.size.width},vector:I.vector}},c.setMouseTool=function(t){for(var e in Atalasoft.Utils.MouseToolType)if(Atalasoft.Utils.MouseToolType.hasOwnProperty(e)&&Atalasoft.Utils.MouseToolType[e]===t){V.mouseTool.setTool(t);break}},c.isPageLoaded=function(t){var e=V.document.getPageDefinition(t);return 0<=e.cacheIndex&&b.loadedImgs[e.cacheIndex]&&b.loadedImgs[e.cacheIndex]._loaded}
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
    * This object will be available on the server side hander as an key-values collection. This allows to pass specific load options for individual pages.
    * @function Atalasoft.Controls.WebDocumentViewer#reloadPage
    */,c.reloadPage=function(n,t,e,o,i){var a=C.Deferred(),l=C.Deferred(),r=C.Deferred(),s=C.Deferred();"function"==typeof o&&(i=o,o=void 0),"function"==typeof e&&(i=e,e=!1),"function"==typeof t&&(i=t,t=!1),"function"==typeof i&&a.done(i);var c=V.document.getPageDefinition(n);if(!c)return a.resolve(),a.promise();0<=c.cacheIndex&&b.loadedImgs[c.cacheIndex]?s=$t(c,o):Gt(n,o,function(){s.resolve()});var u="string"==typeof t?t:c.uri?null:E.annotationsurl;E.allowannotations&&t&&(u||c.uri)?V.annotations.loadAnnotationsUrl(E.serverurl,u,c.uri,c.index,1,n,function(){l.resolve(!0)}):(t&&V.annotations.loadAnnotations({layers:[[]],offset:n}),l.resolve(!!t));var d="string"==typeof e?e:c.uri?null:E.formsurl;return E.allowforms&&e&&(E.formsurl||d)?V.forms.loadFormUrl(E.serverurl,d,c.uri,c.index,1,n,function(){r.resolve(!0)}):r.resolve(),C.when(s,l,r).done(function(t,e,o){(e||o)&&Ue(n,!0),a.resolve(n)}),a.promise()},c.showPage=Ut,c.showPageNumber=Bt,Atalasoft.Annotations.AnnotationController(),Atalasoft.Document.ManipulationController(),Atalasoft.Forms.FormController(),Atalasoft.Text.TextController(),c.annotations=Atalasoft.Annotations.AnnotationController.__exposedApi,c.document=Atalasoft.Document.ManipulationController.__exposedApi,c.forms=Atalasoft.Forms.FormController.__exposedApi,c.text=Atalasoft.Text.TextController.__exposedApi,function(){je()||(k={prpr:0,batchoperation:0,loading:(I={size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:"",customData:null},!1),zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0});var t={_config:E,_id:s,_dom:b,_document:b.loadedImgs,_pages:b.pageDivs,_state:k,_internalEvents:a,_controllers:V,createDOM:T,createDiv:F,createDialog:W,createDropDownButton:R,createDropDownMenu:O,createMenu:B,drawAnnotation:xe,redrawVisiblePages:Fe,adjustVisiblePages:fe,startDomManipulation:ie,endDomManipulation:ae,redrawPageFromIndex:Ue,makeHandlerRequest:Oe,getPageScale:ve,getPageSize:vt,getSourcePageSize:_t,getPageRotation:we,getViewerTransform:be,isPageInView:Kt,findPageFromIndex:Yt,showPagePoint:te};V.document=new Atalasoft.Document.ManipulationController(c,t,s),c.document=V.document.__exposedApi,E.allowannotations?(V.annotations=new Atalasoft.Annotations.AnnotationController(c,t,A),c.annotations=V.annotations.__exposedApi):(c.deselectAll=De,c.createAnnotationOnPage=De,c.getAnnotationsFromPage=De,c.deleteAnnotationOnPageAtIndex=De,c.setAnnotationDefaults=De,c.setImages=De,c.setStamps=De),E.allowforms&&!V.forms&&(V.forms=new Atalasoft.Forms.FormController(c,t),c.forms=V.forms.__exposedApi),E.allowtext&&(V.text=new Atalasoft.Text.TextController(c,t,E.mousetool?E.mousetool.text:{}),c.text=V.text.__exposedApi),A||(V.upload=new Atalasoft.Upload.UploadController(c,t)),!1===k.initialized&&(k.initialized=!0,Ye({throwerror:D,pagedivsresized:m,documentchanged:Me,pagesizechanged:_}),E.parent?(E.parent instanceof jQuery||(E.parent=C(E.parent)),E.parent.length||L("InitError","Parent element not found.")):L("InitError","No parent element given."),b.toolbar=(e=E.toolbarparent||E.parent,o={id:s+"_toolbar",parent:e,children:[{type:"button",id:"Button_PagePrev",cls:S.atala_tool_button_page_prev,icon:"page-prev",tooltip:"Previous Page",text:null,onclick:function(){Qe()}},{type:"pagelabel",id:"Label_PageNumber",cls:S.atala_page_label},{type:"button",id:"Button_PageNext",cls:S.atala_tool_button_page_next,icon:"page-next",tooltip:"Next Page",text:null,onclick:function(){Ze()}},{type:"button",id:"Button_ZoomOut",cls:S.atala_tool_button_zoom_out,icon:"zoom-out",tooltip:"Zoom Out",text:"",onclick:function(){Je()}},{type:"button",id:"Button_ZoomIn",cls:S.atala_tool_button_zoom_in,icon:"zoom-in",tooltip:"Zoom In",text:"",onclick:function(){Xe()}},{type:"button",id:"Button_FitNone",cls:S.atala_tool_button_fit_none,icon:"zoom-full",tooltip:"Full Size",text:"",onclick:function(){ce(1)}},{type:"button",id:"Button_FitBest",cls:S.atala_tool_button_fit_best,icon:"fit-best",tooltip:"Best Fit",text:"",onclick:function(){me(d.Best)}},{type:"button",id:"Button_FitWidth",cls:S.atala_tool_button_fit_width,icon:"fit-width",tooltip:"Fit To Width",text:"",onclick:function(){me(d.Width)}}]},E.showselecttools&&o.children.splice(5,0,{type:"button",id:"Button_ZoomArea",cls:S.atala_tool_button_zoom_area,icon:"zoom-area",tooltip:"Zoom Area",text:"",onclick:Q}),E.allowtext&&(o.children.splice(3,0,{type:"button",id:"Button_Text",cls:S.atala_tool_button_text_tool,icon:"text-tool",tooltip:"Text Selection",text:"",onclick:function(){V.mouseTool.setTool(r.Text)}}),o.children.splice(3,0,{type:"button",id:"Button_Text",cls:S.atala_tool_button_pan_tool,icon:"pan-tool",tooltip:"Pan",text:"",onclick:function(){V.mouseTool.setTool(r.Pan)}})),E.showrotatetools&&(o.children.push({type:"button",id:"Button_RotateLeft",cls:S.atala_tool_button_rotate_left,icon:"rotate-left",tooltip:"Rotate Left",text:"",onclick:X(270)}),o.children.push({type:"button",id:"Button_RotateRight",cls:S.atala_tool_button_rotate_right,icon:"rotate-right",tooltip:"Rotate Right",text:"",onclick:X(90)})),0<E.savepath.length&&o.children.unshift({type:"button",id:"Button_Save",cls:S.atala_tool_button_save,icon:"save",tooltip:"Save Changes",text:null,onclick:function(){Ge()}}),!1!==E.upload.enabled&&o.children.unshift({type:"button",id:"Button_Upload",cls:S.atala_tool_button_upload,icon:"upload",tooltip:"Upload document",text:null,onclick:function(){A||V.upload.uploadWithUi(function(t){t?(b.toolbar.controlgroup("enable"),E.allowannotations&&b.toolbar.annoToolbar.controlgroup("enable"),b.toolbar.find(".atala_page_label, .atala_search_container").removeClass("ui-state-disabled")):(b.toolbar.controlgroup("disable"),b.toolbar.annoToolbar&&b.toolbar.annoToolbar.controlgroup("disable"),b.toolbar.find(".atala_page_label, .atala_search_container").addClass("ui-state-disabled"))})}}),(n=U(o)).controlgroup(),E.allowannotations&&(n.annoToolbar=U({id:s+"_toolbar",parent:e,children:[{type:"button",id:"Button_Ellipse",cls:S.atala_tool_button_ellipse_anno,icon:"ellipse",tooltip:"Draw Ellipse",text:"",onclick:xe},{type:"button",id:"Button_Highlight",cls:S.atala_tool_button_highlight_anno,icon:"highlight",tooltip:"Draw Highlight",text:"",onclick:xe},{type:"button",id:"Button_Line",cls:S.atala_tool_button_line_anno,icon:"line",tooltip:"Draw Line",text:"",onclick:xe},{type:"button",id:"Button_Lines",cls:S.atala_tool_button_lines_anno,icon:"lines",tooltip:"Draw Poly Lines",text:"",onclick:xe},{type:"button",id:"Button_Freehand",cls:S.atala_tool_button_freehand_anno,icon:"freehand",tooltip:"Draw Freehand",text:"",onclick:xe},{type:"button",id:"Button_Polygon",cls:S.atala_tool_button_polygon_anno,icon:"polygon",tooltip:"Draw Polygon",text:"",onclick:xe},{type:"button",id:"Button_Rectangle",cls:S.atala_tool_button_rect_anno,icon:"rectangle",tooltip:"Draw Rectangle",text:"",onclick:xe},{type:"button",id:"Button_Text",cls:S.atala_tool_button_text_anno,icon:"text",tooltip:"Draw Text",text:"",onclick:xe}]}),n.annoToolbar.addClass(S.atala_annotation_toolbar),n.annoToolbar.controlgroup()),E.showstatus&&(b.status=C('<div id="'+s+'_status" style="display:inline"></div>'),b.status.addClass(S.atala_statusbar),n.append("Status:"),n.append(b.status)),E.allowtext&&E.mousetool.text.allowsearch&&(b.search=new Z({parent:n})),n),b.toolbar.addClass(S.atala_toolbar),b.main=F(E.parent),b.main.addClass(S.atala_main_container),b.scroller=F(b.main),b.scroller.addClass(S.atala_scroller),b.main.bind({selectstart:y}),b.toolbar.attr("id",s+"_toolbar"),b.main.attr("id",s+"_main"),b.scroller.attr("id",s+"_scroller"),b.main.css({height:"100%",width:"100%",position:"relative"}),b.scroller.css({height:"100%",width:"100%",position:"relative"}),b.viewport=F(b.scroller,s+"_vp"),b.viewport.css({overflow:"hidden",fontSize:0,"touch-action":"none"}),b.viewport.addClass(S.atala_viewport),b.viewport.attr("tabindex",-1),b.edges[0]=$(b.viewport,s+"_e0"),b.edges[0].addClass(S.atala_dom_edge_first),b.content=F(b.viewport,s+"_ct"),b.content.addClass(S.atala_content),b.content.css({"-ms-touch-action":"none",fontSize:0,overflow:"hidden"}),E.direction===M.Horizontal&&b.content.css({display:"inline-block"}),b.edges[1]=$(b.viewport,s+"_e1"),b.edges[1].addClass(S.atala_dom_edge_last),Atalasoft.Utils.Browser.Features.Compatibility&&L("InitError","Compatibility Mode is not supported."),!1===E.upload.enabled||A||(b.uploadCtrl=V.upload.getUploadControl()),Atalasoft.Utils.Browser.Mobile.Any()?b.scroller.css({overflow:"hidden"}):E.showscrollbars?(b.scroller.css({overflow:"auto"}),b.scrollH=Y(b.main,M.Horizontal),b.scrollH.attr("id",s+"_sH"),b.scrollH.addClass(S.atala_scroll_horizontal),b.scrollV=Y(b.main,M.Vertical),b.scrollV.attr("id",s+"_sV"),b.scrollV.addClass(S.atala_scroll_vertical)):b.scroller.css({overflow:"hidden"}),V.mouseTool=new Atalasoft.Controls.ToolController(c,{_internalEvents:a,_controllers:V,zoomStart:le,zoom:re,zoomEnd:se,getActivePage:Et,raiseDrawLayer:Te,resetDrawLayer:Pe,getViewerTransform:be},b.viewport,b.scroller,C.extend({allowflick:E.allowflick},E.mousetool)),V.memory=new Atalasoft.Document.MemoryTracker({highWaterMark:E.memorythreshold}),V.memory.bind({exceededhighwatermark:f}),V.annotations&&V.annotations.setViewPort(b.viewport),eo("initialized"),E.direction===M.Horizontal&&b.viewport.css({"white-space":"nowrap"}),b.viewport.css({display:"table-cell"}),et(b.scroller),b.scrollH&&b.edges[1].height(b.scrollH.scrollbarHeight()),V.mouseTool.setTool(r.Pan,r.None),(E.documenturl||E.annotationsurl||E.formurl)&&$e(E.documenturl,E.annotationsurl,E.formurl,i),C(document).ready(x));var e,o,n}(),c};
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
/**
 * WebDocumentViewer Document operations API.
 * @class
 * @name DocumentController
 * @inner
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */Atalasoft.Document.ManipulationController=function(a,e,n){var r=Atalasoft.$,t=this,c=a,p=e,o=n,i={document:{events:{
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
insertPage:A,
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
insertPages:w,
/**
             * Removes the page at the given index.
             * @param {number|string} index - Index of the page to remove. Can be passed as string representation of a number
             * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
             * @instance
             * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
             * @function
             */
removePage:j,
/**
             * Removes pages at given indices.
             * @param {number[]|string[]} indices - Indices of pages to remove. Can be passed as string representation of numbers
             * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
             * @instance
             * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
             * @function
             */
removePages:O,
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
movePage:z,
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
rotatePages:D,
/**
             * Gets the rotation angle of the specified page.
             * @param {number} index - Index of the page to retrieve rotation angle.
             * @returns {number} Clockwise rotation angle of the specified page.
             *
             * @instance
             * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
             * @function
             */
getPageRotation:s,
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
getPageReference:I}};if(Atalasoft.Document.ManipulationController.__exposedApi=i.document,!a)return null;var f={changes:[],mapping:null,count:0,inserted:0,info:{count:0,dpi:96,size:{width:0,height:0},vector:!1}},m={inserted:"pageinserted",removed:"pageremoved",moved:"pagemoved",changed:"documentchanged",rotated:"pagerotated"};function g(){!0}function u(e){f.info=e.info,f.mapping=null,f.changes.length=0,f.count=0,f.inserted=0,f.length=0}t.dispose=function(){p=c=t=null};var h=null;function d(e,n,t){t?null===h?h={name:e,message:n}:h.message+="\r\n"+n:c.trigger({type:"throwerror",name:e,msg:n})}function v(){null==f.mapping&&function(){var e=Math.max(f.info.count,0);f.mapping=new Array(e);for(var n=0;n<e;++n)f.mapping[n]=y(n)}()}function l(e,n){v(),f.mapping[e]&&(f.mapping[e].viewestate[n]||(f.mapping[e].viewestate[n]={size:null,fitmultiplier:null}))}function y(e){return{index:e,viewestate:{},pageref:null,angle:0,text:null}}function s(e){return v(),0<=e&&e<f.mapping.length?f.mapping[e].angle:0}function x(e,n,t){var r=n;e&&e!==a.config.documenturl&&(r.pageref={uri:e,index:n.index,mapsto:f.info.count+f.inserted}),f.count++,f.inserted++,f.mapping.splice(t,0,r)}function P(e){return f.count--,f.mapping.splice(e,1)[0]}function b(e){}function _(e){}function I(e){var n,t=(n=e,v(),0<=n&&n<f.mapping.length?null!==f.mapping[n].pageref?f.mapping[n].pageref:f.mapping[n].index:null);if(null!==t){if("object"===(void 0===t?"undefined":_typeof(t)))return{uri:t.uri,index:t.index};if(r.isNumeric(t))return{uri:a.config.documenturl,index:t}}return t}function A(e,n,t,r){Array.isArray(n)?d("IncorrectIndex","Source index can not be an array."):w(e,[n],t,r)}function w(e,n,t,r){v();var a=void 0,i=void 0;if("string"==typeof e&&0<e.trim().length)h=null,a=E(n,Number.MAX_VALUE,!1,!0),i=!0,null!==h&&("IncorrectNumbers"===h.name?d("IncorrectIndices","When this methods has set srcUri, then srcIndices should be an array of numbers representing page indices from an external document. Please check your input parameters and try again.\r\n\tInner error: "+h.message):d(h.name,h.message));else{if(null!=e)return void d("IncorrectUri",'Uri has invalid value "'+e+'". It must be an uri to the source document or not set.');i=!1,a=function(e){var n,t,r=[],a=null,i=null;if(!Array.isArray(e))return d("IncorrectPageReferences","Objects "+e+" are not an array."),a;if(n=e,t=[],Array.isArray(n)&&(n.forEach(function(e){null===Atalasoft.Utils.ParseInt(e)&&t.push(e)}),0===t.length)){i=new Array(e.length);for(var o=0;o<e.length;o++)i[o]=I(e[o])}for(var g=0;g<e.length;g++){var u=null!==i?i[g]:e[g];if("object"===(void 0===u?"undefined":_typeof(u))&&null!==u&&"string"==typeof u.uri&&0!==u.uri.trim().length){var l=E([u.index],Number.MAX_VALUE);null!==l?u.index=l[0]:r.push(u)}else r.push(u)}return 1<r.length?d("IncorrectPageReferences",'Objects "'+r.join('", "')+'" are not correct page references.'):0<r.length?d("IncorrectPageReferences",'Object "'+r[0]+'" is not a correct page reference.'):a=null!==i?i:e,a}(n)}var o=N(t,!1);if(null!==a&&null!==o){p._state.batchoperation++;for(var g=0;g<a.length;g++){var u=i?e:a[g].uri,l=i?a[g]:a[g].index;g===a.length-1&&p._state.batchoperation--;var s=y(l);x(u,s,o),p._controllers.annotations&&p._controllers.annotations.insertLayer(null,null,o),p._controllers.forms&&p._controllers.forms.insertForm(null,null,o),f.changes.push({type:"insertpage",uri:u,src:s.index,dest:o}),c.trigger({type:m.inserted,srcuri:u,srcindex:l,destindex:o}),o++}"function"==typeof r&&r(),c.trigger(m.changed)}}function j(e,n){O([e],n)}function O(e,n){v();var t=C(e,!0);null!==t&&(p._state.batchoperation++,t.sort(function(e,n){return n-e}).forEach(function(e,n){n===t.length-1&&p._state.batchoperation--,P(e),p._controllers.annotations&&p._controllers.annotations.removeLayer(e),p._controllers.forms&&p._controllers.forms.removeForm(e),f.changes.push({type:"removepage",index:e}),c.trigger({type:m.removed,index:e})}),"function"==typeof n&&n(),c.trigger(m.changed))}function z(e,n,t){M([e],n,t)}function M(e,n,t){v();var i=C(e,!0),o=N(n,!0);if(null!==i&&null!==o){var g=o,u=i[0]>o?1:-1;p._state.batchoperation++;for(var r=function(e){var t=e,r=i[t],n=0,a=0;n=r<o?-i.filter(function(e,n){return n<t&&e<r&&e<o}).length:o<r?i.filter(function(e,n){return n<t&&r<e}).length:u<0?-i.filter(function(e,n){return n<t&&e<r&&e<o}).length:i.filter(function(e,n){return n<t&&r<e}).length,0<e&&(n<0||r<o)&&(a=-1),g+=a,e===i.length-1&&p._state.batchoperation--,x(null,P(r+n),g),p._controllers.annotations&&p._controllers.annotations.moveLayer(r+n,g),p._controllers.forms&&p._controllers.forms.moveForm(r+n,g),f.changes.push({type:"movepage",src:r+n,dest:g}),c.trigger({type:m.moved,shiftedsrcindex:r+n,srcindex:r,destindex:g}),g++},a=0;a<i.length;a++)r(a);"function"==typeof t&&t(),c.trigger(m.changed)}}function S(e,n,t){Array.isArray(n)?d("rotatePage","angle "+n+" is array."):D([e],n,t)}function D(e,n,t){v();var a=C(e),r="number"==typeof n||"string"==typeof n,i=function(e,n){var t=U(n?[e]:e);if(t)for(var r=0;r<t.length;r++){if(t[r]%90)return d("rotatePages","Angle must be a multiple of 90 degrees."),null;t[r]=t[r]%360}return t}(n,r);null!==a&&null!==i&&(r||a.length===i.length?(p._state.batchoperation++,a.forEach(function(e,n){var t=1<i.length?i[n]:i[0];n===a.length-1&&p._state.batchoperation--;var r=function(e,n){f.mapping[e].angle=n;for(var t=null,r=0;r<p._pages.length;++r){var a=p._pages[r];if(a._index===e){t=a;break}}t&&t._img&&(p.startDomManipulation(),p.adjustVisiblePages(!0,p.endDomManipulation));return t}(e,t);f.changes.push({type:"rotatepage",index:e,angle:t}),c.trigger({type:m.rotated,index:e,page:r,angle:t})}),"function"==typeof t&&t()):d("rotatePages","Indices array and angles array have different lengths."))}function N(e,n){var t=E([e],f.mapping.length+(n?0:1));return t?t[0]:t}function C(e,n){return E(e,f.mapping.length,n)}function E(e,r,a,n){var i=[],o=[],t=null,g="IncorrectIndices";return Array.isArray(e)?((e=U(e,n))&&e.forEach(function(n,e,t){(n<0||r<=n)&&i.push(n),a&&1<t.filter(function(e){return e===n}).length&&-1===o.indexOf(n)&&o.push(n)}),1<i.length?d(g,"Page indices "+i.join(", ")+" are outside of the document.",n):0<i.length?d(g,"Page index "+i[0]+" is outside of the document.",n):1<o.length?d(g,"Page indices "+o.join(", ")+" are included more than once.",n):0<o.length?d(g,"Page index "+o[0]+" is included more than once.",n):t=e):d(g,"Object "+e+" is not an array.",n),t}function U(e,n){var t=[],r=[];return Array.isArray(e)?(e.forEach(function(e){var n=Atalasoft.Utils.ParseInt(e);null===n?t.push(e):r.push(n)}),1<t.length?(d("IncorrectNumbers",'Objects "'+t.join('", "')+'" are not numbers.',n),r=null):0<t.length&&(d("IncorrectNumbers",'Object "'+t[0]+'" is not a number.',n),r=null)):d("IncorrectNumbers","Object "+e+" is not an array.",n),r}t.__exposedApi=i.document,t.getPageDefinition=function(e,n){if(n=n||o,v(),0<=e&&e<f.mapping.length&&f.mapping[e]){var t=f.mapping[e],r=null,a=null;if(-1===t)return null;null!=t.pageref?(r=t.pageref,e=r.index,a=r.uri):e=t.index;var i=t.viewestate[n]&&0<=t.viewestate[n].cacheIndex?t.viewestate[n].cacheIndex:-1;return{index:e,ref:r,cacheIndex:i,uri:a}}return null},t.setPageCacheIndex=function(e,n){l(e,o),f.mapping[e]&&f.mapping[e].viewestate&&(f.mapping[e].viewestate[o].cacheIndex=n)},t.insertPage=A,t.removePage=j,t.movePage=z,t.rotatePage=S,t.insertPages=w,t.removePages=O,t.movePages=M,t.rotatePages=D,t.getPageFitMultiplier=function(e,n){return n=n||o,v(),l(e,n),0<=e&&e<f.mapping.length&&f.mapping[e].viewestate[n].fitmultiplier?f.mapping[e].viewestate[n].fitmultiplier:1},t.setPageFitMultiplier=function(e,n,t){t=t||o,v(),l(e,t),0<=e&&e<f.mapping.length&&(f.mapping[e].viewestate[t].fitmultiplier=n)},t.getPageRotation=s,t.getPageSize=function(e,n){if(n=n||o,v(),l(e,n),0<=e&&e<f.mapping.length){var t=f.mapping[e].viewestate[n].size;if(!t){var r=f.info;if(r.pagesizes&&r.pagesizes[e])return r.pagesizes[e]}return t}},t.setPageSize=function(e,n,t){t=t||o,v(),l(e,t),0<=e&&e<f.mapping.length&&(f.mapping[e].viewestate[t].size=n)},t.updatePageText=function(e,n){v(),0<=e&&e<f.mapping.length&&(f.mapping[e].text=n)},t.getPageText=function(e){if(0<=e&&e<f.mapping.length)return f.mapping[e].text;return null},t.initDocumentText=function(e){if(e&&e.pages){v();for(var n=0;n<f.mapping.length;++n)if(n<e.pages.length)if(f.mapping[n].index===n)f.mapping[n].text=e.pages[n];else for(var t=0;t<f.mapping.length;++t)f.mapping[t].index===n&&(f.mapping[t].text=e.pages[n]);else f.mapping[n].text=null}},t.getPageIndexByImageIndex=function(e){if(e<f.info.count){for(var n=0;n<f.mapping.length;n++)if(f.mapping[n].index===e)return n}else for(var t=0;t<f.mapping.length;t++)if(f.mapping[t].pageref&&f.mapping[t].pageref.mapsto===e)return t;return-1},t.__getDebugInfo=function(){var e={};return r.extend(!0,e,{data:f,changes:f.changes}),e},t.__linkChanges=function(e){e&&(e._changes?f=e._changes:e._changes=f)},t.clear=function(e){f.clear(),"function"==typeof e&&e();c.trigger(m.changed)},t.getPageCount=function(){return f.info.count+f.count},t.stringifyChanges=function(e){var n=[],t={type:"docinfo",pagescount:f.info.count};for(var r in n.push(t),f.changes)if(f.changes.hasOwnProperty(r)&&(c.config.persistrotation||"rotatepage"!==f.changes[r].type)){var a={};for(var i in f.changes[r])f.changes[r].hasOwnProperty(i)&&(a[i]=f.changes[r][i]);n.push(a)}return JSON.stringify({changes:n})},"Atalasoft.Controls.WebDocumentViewer"===c.typeOf&&r.extend(c,i),c.bind({pagerecycled:_,pageshown:b,documentinfochanged:u}),p._state.initialized?g():c.bind({initialized:g})};
"use strict";Atalasoft.Controls.ToolController=function(t,e,o,n,l){if(!o||!n)return Atalasoft.Event.Throw("Atalasoft.Controls.ToolController",0,null,"ToolController requires a WDV and two jQuery objects passed in as input, one for mouse events, the other for scrolling."),!1;var r=Atalasoft.$,a=this,s=t,i=e,c=(e?e._internalEvents:null)||r({}),u=50,v=o,f=n,d=v.parents("."+s.domclasses.atala_main_container).first(),g=Atalasoft.Utils.MouseToolType,p=Atalasoft.Utils.MouseToolCursor,m=g.Pan,h=g.None,x=null,E=1,y="",b=null,T="",w=[],A=1e3,D=null,_=-1,z=null,k={allowflick:!0,text:{scrolltriggerarea:Atalasoft.Utils.ScrollArea.Normal,innerscrolldelta:10,outerscrolldelta:20}};
/**
     * Internal events for conditional input handling.
     */
a.events=P;var P={textselectstart:"textselectstart",textselectmove:"textselectmove",textselectend:"textselectend",textselectcopy:"textselectcopy"};function C(){return c.trigger.apply(c,arguments),a}function L(t,e){switch(x.setTool(t,e),function(t,e){m!==g.Text&&h!==g.Text||t===g.Text||e===g.Text||i.resetDrawLayer();t!==g.Selection&&t!==g.ZoomArea&&(m=t);e!==g.Selection&&e!==g.ZoomArea&&(h=e)}(t,e),t){case g.None:S(p.Arrow);break;case g.Pan:S(p.Move);break;case g.ZoomIn:S(p.ZoomIn);break;case g.ZoomOut:S(p.ZoomOut);break;case g.Selection:case g.ZoomArea:if(!s.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";i.raiseDrawLayer(),_=1,S(p.Crosshair);break;case g.Text:if(!s.config.showselecttools)throw"The mouse tool type is incompatible with 'showselecttools' flag value. Please change the tool type or enable selection tools.";i.raiseDrawLayer(),S(p.Text);break;default:S(p.Arrow)}}function S(t){var e=""===y?"?atalacsr=":y;b="%2"===t?b=T:t.replace("%1",e),v.css({cursor:b})}function M(t){s.fit(t.fit)}function Z(t){t.zoomout?s.zoomOut():s.zoomIn()}function U(t){f.data("ox",f.scrollLeft()+t.x).data("oy",f.scrollTop()+t.y),f.stop()}function I(t){f.scrollLeft(f.data("ox")-t.x),f.scrollTop(f.data("oy")-t.y),k.allowflick&&(w.push({x:t.x,y:t.y,time:(new Date).getTime()}),10<w.length&&w.shift())}function O(t){if(k.allowflick){if(1<w.length){var e=(new Date).getTime(),o=w.pop();if(e-o.time<100){var n=w.shift(),l=-n.time+o.time;f.animate({scrollLeft:f.scrollLeft()+Math.round((n.x-o.x)/l*250),scrollTop:f.scrollTop()+Math.round((n.y-o.y)/l*250)},A,"easeOutQuad")}}w.length=0}}function N(t){(D=i.getActivePage())&&D._rubberband.startSelect(t)}function X(t){(D=i.getActivePage())&&D._rubberband.moveSelect(t)}function Y(t){(D=i.getActivePage())&&(D._rubberband.endSelect(t),"zoomareaend"===t.type&&(D._rubberband.hide(),D._rubberband.zoomToSelection())),0===--_&&(_=-1,i.resetDrawLayer(),L(m,h))}function F(t){i.zoomStart(),E=s.getZoom()}function V(t){var e=E*t.scale;i.zoom(e)}function j(t){i.zoomEnd()}function q(t){var e=B(t);if(e){if(e.cursor=b,e.complete=!1,e.rectangular=!!t.toolEvent&&t.toolEvent.altKey,e.interval=!!t.toolEvent&&t.toolEvent.shiftKey,!e.rectangular&&!e.interval){var o=t.toolEvent&&t.toolEvent.originalEvent&&t.toolEvent.originalEvent.detail?t.toolEvent.originalEvent.detail%3:1;1!==o&&(e.word=2===o,e.line=0===o)}C({type:P.textselectstart,eventData:e}),t.eventData.handled=e.handled,e.complete&&e.handled&&(Q(t),t.eventData.complete=!0)}}function K(t){J();var e=B(t);if(e){e.cursor=b,e.selecting=t.eventData.selecting,C({type:P.textselectmove,eventData:e}),t.eventData.handled=e.handled;var o=e.handled&&e.cursor?e.cursor:p.Arrow;o!==b&&S(o),t.eventData.handled&&t.eventData.selecting&&t.toolEvent&&t.toolEvent.target&&W(t)}}function Q(t){J();var e=B(t);e&&(C({type:P.textselectend,eventData:e}),t.eventData.handled=e.handled)}function $(t){J(),W(t)}function G(t){k.text.hookcopy&&C({type:P.textselectcopy})}function J(){z&&(clearTimeout(z),z=null)}function W(t){if(J(),t&&t.toolEvent){var e=d.offset(),o=null;if(void 0!==t.toolEvent.pageX&&void 0!==t.toolEvent.pageY?o=t.toolEvent:t.toolEvent.originalEvent&&t.toolEvent.originalEvent.touches&&1===t.toolEvent.originalEvent.touches.length&&void 0!==t.toolEvent.originalEvent.touches[0].pageX&&void 0!==t.toolEvent.originalEvent.touches[0].pageY&&(o=t.toolEvent.originalEvent.touches[0]),o){var n=o.pageX-e.left,l=o.pageY-e.top,r=d.width(),a=d.height(),s=0,i=0;l<a*k.text.scrolltriggerarea&&0<f.scrollTop()?s=0<l?-k.text.innerscrolldelta:-k.text.outerscrolldelta:l>a*(1-k.text.scrolltriggerarea)?s=l<a?k.text.innerscrolldelta:k.text.outerscrolldelta:n<r*k.text.scrolltriggerarea&&0<f.scrollLeft()?i=0<n?-k.text.innerscrolldelta:-k.text.outerscrolldelta:n>r*(1-k.text.scrolltriggerarea)&&(i=n<r?k.text.innerscrolldelta:k.text.outerscrolldelta),(s||i)&&k.text.scrolltriggerarea!==Atalasoft.Utils.ScrollArea.None&&(f.scrollTop(f.scrollTop()+s),f.scrollLeft(f.scrollLeft()+i),z=setTimeout(W,u,t))}}}function B(t){var e={cursor:null,handled:!1};if(t&&t.toolEvent){var o=function(t){var e=r(t).parents("."+s.domclasses.atala_page_div).first();if(e){var o=e.attr(s.domattributes.atala_page_index);return parseInt(o,10)}return null}(t.toolEvent.originalEvent.touches&&1===t.toolEvent.originalEvent.touches.length?document.elementFromPoint(t.toolEvent.originalEvent.touches[0].clientX,t.toolEvent.originalEvent.touches[0].clientY):t.toolEvent.target);if(isFinite(o)&&0<=o){var n=function(t,e){var o=Atalasoft.Utils.getMousePositionJquery(t.toolEvent?t.toolEvent:t);if(e&&e._paper){var n=Atalasoft.Utils.getSVGOffset(e._paper.canvas,e);o.x-=n.left,o.y-=n.top}return o}(t),l=function(t,e){var o=0;if(i._controllers.text){var n=i._controllers.document.getPageText(e);n&&isFinite(n.rotation)&&(o=n.rotation)}var l=i.getViewerTransform(e,o).invert();return{x:l.x(t.x,t.y),y:l.y(t.x,t.y)}}(n,o);Atalasoft.$.extend(e,{page:o,point:l,viewerPoint:n})}}return e}l&&(r.extend(k,l),k.text.scrolltriggerarea=Math.max(0,Math.min(k.text.scrolltriggerarea,.3))),function(){x=new Atalasoft.Controls.PointerTool,v.bind(x.events.viewport),x.events.wdv&&s.bind(x.events.wdv);x.bind({clickzoom:Z,fit:M,panstart:U,panmove:I,panend:O,zoomstart:F,zoommove:V,zoomend:j,selectstart:N,selectmove:X,selectend:Y,zoomareastart:N,zoomareamove:X,zoomareaend:Y,textselectstart:q,textselectmove:K,textselectend:Q,textselectscroll:$,textselectcopy:G})}(),a.dispose=function(){x&&x.events&&(x.events.wdv&&s&&s.unbind&&s.unbind(x.events.wdv),x.events.viewport&&v&&v.unbind&&v.unbind(x.events.viewport));w&&0<w.length&&(w.length=0);x&&x.dispose&&x.dispose();a=s=v=f=g=p=null},a.bind=function(){return c.bind.apply(c,arguments),a},a.unbind=function(){return c.unbind.apply(c,arguments),a},a.trigger=C,a.setTool=L,a.__getDebugInfo=function(){var t={};return r.extend(!0,t,{cursor:b,custom:T,flick:w,resourcepath:y,flickdelay:A,scroller:f,tool:x,toolcusors:p,tooltypes:g,viewport:v,zoom:E}),t},a.getTool=function(){return x.getTool()},a.pauseTool=function(){return x.pauseTool()},a.resumeTool=function(){return x.resumeTool()},a.setCursor=S,a.setCustomCursor=function(t){T=t}};
"use strict";Atalasoft.Controls.PointerTool=function(){var n=Atalasoft.$,t=this,e=n({}),r={tapped:!1,touching:!1,pinching:!1,zooming:!1,textselection:!1,origin:{x:0,y:0},point:{x:0,y:0},delta:{x:0,y:0},drawing:!1,moves:0,prpt:0},l=null,i=Atalasoft.Utils.MouseToolType,a=i.None,o=i.None,u=null;function c(){return e.trigger.apply(e,arguments),t}function s(t){r&&(r.drawing=!0)}function p(t){r&&(r.drawing=!1)}function f(){r.zooming=!1}function v(t){if(!r.prmt)return c({type:"panstart",x:t.clientX,y:t.clientY}),n(document).bind({mousemove:g,mouseup:m,ondrag:Atalasoft.Utils.__rf}),!1}function g(t){if(t=null==t?event:t,!r.prpt){if(0!==t.which)return c({type:"panmove",x:t.clientX,y:t.clientY}),!1;m()}}function m(){if(!r.prpt)return n(document).unbind({mousemove:g,mouseup:m,ondrag:Atalasoft.Utils.__rf}),c({type:"panend"}),!1}function h(t){if(r.prmt)return!1;t.stopPropagation();var e={handled:!1,complete:!1};return c({type:"textselectstart",toolEvent:t,eventData:e}),e.complete||(r.textselection=!0,n(document).bind({mouseup:y,mousemove:x,ondrag:Atalasoft.Utils.__rf})),!1}function d(t){return!!r.prmt||(0!==t.which||t.originalEvent.touches&&t.originalEvent.touches.length?(c({type:"textselectmove",toolEvent:t,eventData:{handled:!1,selecting:r.textselection}}),!1):(y(),!0))}function y(t){if(r.prmt||!r.textselection)return!1;r.textselection=!1,n(document).unbind({mouseup:y,mousemove:x,ondrag:Atalasoft.Utils.__rf});return c({type:"textselectend",toolEvent:t,eventData:{handled:!1}}),!1}function x(t){if(r.textselection)return!!r.prmt||(0!==t.which||t.originalEvent.touches&&t.originalEvent.touches.length?(c({type:"textselectscroll",toolEvent:t}),!1):(y(),!0))}function _(t){67===t.keyCode&&t.ctrlKey&&c({type:"textselectcopy",toolEvent:t})}function b(t){return!!r.prmt||(c({type:a===i.Selection?"selectstart":"zoomareastart",x:t.clientX,y:t.clientY,toolEvent:t}),(u=n(t.target))._binds={mousemove:E,mouseup:A,ondrag:Atalasoft.Utils.__rf},u.bind(u._binds),!1)}function E(t){return t=null==t?event:t,!!r.prpt||(0!==t.which?(c({type:a===i.Selection?"selectmove":"zoomareamove",x:t.clientX,y:t.clientY,toolEvent:t}),!1):void A())}function A(t){if(!r.prpt)return u.unbind(u._binds),u=null,c({type:a===i.Selection?"selectend":"zoomareaend",toolEvent:t}),!1}function w(t){return M(t=null==t?event:t)}function U(t){t=null==t?event:t}function T(t){return N(t=null==t?event:t)}function k(t){return 2===(t=null==t?event:t).button?q(t):O(t),I(t)}function P(t){return C(t=null==t?event:t)}function z(t){return B(t=null==t?event:t)}function X(){M=a===i.PassThrough?Atalasoft.Utils.__ef:Atalasoft.Utils.__rf,N=o===i.PassThrough?Atalasoft.Utils.__ef:Atalasoft.Utils.__rf,I=Atalasoft.Utils.__ef,O=Atalasoft.Utils.__ef,q=Atalasoft.Utils.__ef,C=Atalasoft.Utils.__ef,B=Atalasoft.Utils.__ef}function Y(){}function D(){}function Z(){}function S(){}function C(){}function M(){}function N(){}function I(){}function O(){}function q(){}function B(){}function F(t){if(!r.prpt)return K(t,!1),!1}function J(t){if(!r.prpt)return K(t,!0),!1}function K(t,e){if(!r.prpt)return c({type:"clickzoom",x:t.clientX,y:t.clientY,zoomout:e}),!1}function $(t){var e;r.prpt||r.drawing||r.pinching||n(t.target).is(".ui-menu,.ui-menu-item,.ui-corner-all")||(t.preventDefault(),2===(r.e=t).originalEvent.touches.length&&function(t){for(var e=null,n=0;n<t.length;n++){var o=t[n].target;if(o)if(null==e)e=o;else if(e!==o)return!1}return!0}(t.originalEvent.touches)?(Q(),r.touching=!1,function(t){if(!r.prpt){t.stopPropagation(),r.pinching=!0;var e=t.originalEvent.touches[0],n=t.originalEvent.touches[1];l={start:Atalasoft.Utils.CalcDistance(e.clientX,e.clientY,n.clientX,n.clientY)},c({type:"zoomstart",touches:t.originalEvent.touches})}}(t)):a===i.Text?h(t):1===t.originalEvent.touches.length&&(r.touching=!0,r.point.x=t.originalEvent.touches[0].pageX,r.point.y=t.originalEvent.touches[0].pageY,r.hold=setTimeout(L,1500),e={x:r.point.x,y:r.point.y},a===i.Pan&&(e.type="panstart",c(e))))}function j(t){var e;if(!r.prpt&&!r.drawing)if(t.preventDefault(),r.e=t,r.pinching)!function(t){if(!r.prpt&&(t.stopPropagation(),!r.zooming)){r.zooming=!0;var e=t.originalEvent.touches[0],n=t.originalEvent.touches[1],o=Atalasoft.Utils.CalcDistance(e.clientX,e.clientY,n.clientX,n.clientY,l.start),i=o.x/l.start.x,a=o.y/l.start.y;setTimeout(f,40),c({type:"zoommove",touches:t.originalEvent.touches,scale:i,scalex:i,scaley:a,dx:o.dx,dy:o.dy})}}(t);else if(r.touching){var n=t.originalEvent.touches[0];r.moves++,r.touching=!0,e={x:n.pageX,y:n.pageY},a===i.Pan&&(e.type="panmove",c(e))}else r.textselection&&d(t)}function G(t){var e,n,o;r.prpt||r.drawing||(t.preventDefault(),r.pinching?(o=t,r.prpt||(o.stopPropagation(),r.pinching=!1,c({type:"zoomend",touches:o.originalEvent.touches}),1===o.originalEvent.touches.length&&$(o))):r.textselection?y(t):(r.touching=!1,Q(),0<r.moves?(r.moves=0,n={},a===i.Pan&&(n.type="panend",c(n))):r.tapped?((e=t).type="fit",c(e)):(r.tapped=!0,setTimeout(H,300))))}function H(){r.tapped=!1}function L(){if(0<r.moves&&null!=r.e){var t=Atalasoft.Utils.getMousePositionJquery(r.e);Math.abs(r.point.x-t.x)<5&&Math.abs(r.point.y-t.y)<5&&(r.moves=0)}0===r.moves&&r.touching&&c({x:r.point.x,y:r.point.y,type:"contextmenu"})}function Q(){null!=r.hold&&(clearTimeout(r.hold),r.hold=null)}return X(),t.events={viewport:{click:w,dblclick:U,mousedown:k,mousemove:P,mouseout:Y,mouseover:D,mouseup:Z,contextmenu:T,mousewheel:S,keydown:z}},Atalasoft.Utils.Browser.Features.Touch&&n.extend(!0,t.events,{viewport:{touchstart:$,touchmove:j,touchend:G},wdv:{annotationdrawstart:s,annotationdrawend:p,annotationdragstart:s,annotationdragend:p}}),t.dispose=function(){r&&(r=null);l&&(l=null);t=null},t.bind=function(){return e.bind.apply(e,arguments),t},t.unbind=function(){return e.unbind.apply(e,arguments),t},t.trigger=c,t.setTool=function(t,e){switch(a=t,o=e,X(),a){case i.None:M=Atalasoft.Utils.__rf;break;case i.Pan:O=v;break;case i.ZoomIn:M=F;break;case i.ZoomOut:M=J;break;case i.Selection:case i.ZoomArea:O=b;break;case i.PassThrough:break;case i.Text:O=h,C=d,B=_}switch(o){case i.None:break;case i.Pan:q=v;break;case i.ZoomIn:N=F;break;case i.ZoomOut:N=J;break;case i.Selection:case i.ZoomArea:q=b;break;case i.PassThrough:}},t.getTool=function(){return{primary:a,secondary:o}},t.pauseTool=function(){r.prpt++},t.resumeTool=function(){0<r.prpt&&r.prpt--},t};
"use strict";Atalasoft.Controls.RubberBandTool=function(t,e,o,i){var p,n,s,r,a,l=Atalasoft.$,d=3,h=this,u=l({}),c=t,f={animated:!1,aspectratio:0,backcolor:"fff",forecolor:"000",movable:!0,multicolor:!0,resizable:!0,showgrips:!1,showmask:!1,showtooltip:!1,visible:!1,x:0,y:0,width:0,height:0},x={
/** Main RubberBand dom object */
rect:null,
/** Dom object underneath Main RubberBand */
rectback:null,
/** Mask objects */
mask:{top:null,bottom:null,left:null,right:null}},m={animating:!1,boundevents:null,changing:!1,colorswap:0,origin:{x:0,y:0},pagesize:{width:0,height:0},pageoffset:{x:0,y:0},vert:!1,horiz:!1,zoom:1},g=i,w=o;function b(t){$(),I()}function y(t){$(),I()}function v(){for(var u=new Array("move","nw","n","ne","w","e","sw","s","se"),n=[],e=[],s=0,r=0,t=0;t<9;t++)n[t]=new h(t),w.append(n[t].grip);function o(){for(var t=0;t<9;t++)!0===e[t]?n[t].show():n[t].hide()}function a(){for(var t=0;t<9;t++)e[t]=!0;e[0]=!0,s<8&&r<8&&(e[1]=!1),(s<12||r<12)&&(e[3]=!1,e[6]=!1),(s<16||r<8)&&(e[2]=!1,e[7]=!1),(r<16||s<8)&&(e[4]=!1,e[5]=!1),o()}function i(){!0===A()?(n[0].grip.onmousedown=Z,n[0].grip.style.cursor="move"):(n[0].grip.onmousedown=Atalasoft.Utils.__rf,n[0].grip.style.cursor="default");for(var t=1;t<9;t++)!0===U()?(n[t].bind({mousedown:n[t].onResize}),n[t].grip.style.cursor=u[t]+"-resize"):(n[t].unbind({mousedown:n[t].onResize}),n[t].grip.style.cursor="default")}function h(t){var e,o,i,n=this,s=u[t],r=!1;function a(){"move"!==s&&(!0===f.showgrips?(!0===C()?o.backgroundColor="#"+P():o.backgroundColor="#"+S(),o.border="1px solid #"+S()):(o.backgroundColor="",o.border=""))}function h(){!0===f.showgrips?(o.width="6px",o.height="6px"):(o.width="8px",o.height="8px")}e=document.createElement("div"),o=e.style,(i=l(e)).addClass(c.domclasses.atala_tool_selection_grip),a(),h(),n.grip=e,n.dispose=function(){s=o=e=n=null},n.setPos=function(t,e){o.left=t+"px",o.top=e+"px"},n.setSize=function(t,e){!0===R()&&"move"!==s&&(t-=2,e-=2);t<=0&&(t=1);e<=0&&(e=1);o.width=t+"px",o.height=e+"px"},n.hide=function(){r&&(o.visibility="hidden",r=!1)},n.show=function(){r||(o.visibility="visible",r=!0)},n.resetColors=a,n.resetGripSize=h,n.onResize=function(t){return function(t,e){W(t=t||event),m.vert=0,m.horiz=0,m.changing=!0;var o={x:0,y:0};switch(e){case"nw":o.x=f.x+f.width,o.y=f.y+f.height;break;case"n":o.x=f.x,o.y=f.y+f.height,m.vert=1;break;case"ne":o.x=f.x,o.y=f.y+f.height;break;case"w":o.x=f.x+f.width,o.y=f.y+f.height,m.horiz=1;break;case"e":o.x=f.x,o.y=f.y+f.height,m.horiz=1;break;case"sw":o.x=f.x+f.width,o.y=f.y;break;case"s":o.x=f.x,o.y=f.y,m.vert=1;break;case"se":o.x=f.x,o.y=f.y}m.origin.x=Math.round(o.x*m.zoom)+m.pageoffset.x,m.origin.y=Math.round(o.y*m.zoom)+m.pageoffset.y,g.raiseDrawLayer();var i={mousemove:V,mouseup:J};null!==m.boundevents?l.extend(m.boundevents,i):m.boundevents=i;return w.bind(i),!1}(t,s)},n.bind=function(){return i.bind.apply(i,arguments),i},n.unbind=function(){return i.unbind.apply(i,arguments),i},o.display="block",o.position="absolute",o.visibility="hidden",o.zIndex=d,e.onclick=Atalasoft.Utils.__rf,e.onselectstart=Atalasoft.Utils.__rf,e.onselect=Atalasoft.Utils.__rf,e.oncontextmenu=Atalasoft.Utils.__rf}this.dispose=function(){for(var t=0;t<9;t++)n[t].dispose(),n[t]=null;e=n=u=null},this.setRectangle=function(t,e,o,i){s=o,r=i,n[0].setPos(t,e),n[1].setPos(t-4,e-4),n[3].setPos(t+o-4,e-4),n[6].setPos(t-4,e+i-4),n[8].setPos(t+o-4,e+i-4),n[0].setSize(o,i),f.showgrips?(n[2].setPos(t+Math.round(o/2)-4,e-4),n[4].setPos(t-4,e+Math.round(i/2)-4),n[5].setPos(t+o-4,e+Math.round(i/2)-4),n[7].setPos(t+Math.round(o/2)-4,e+i-4)):(n[2].setPos(t+4,e-4),n[4].setPos(t-4,e+4),n[5].setPos(t+o-4,e+4),n[7].setPos(t+4,e+i-4),n[2].setSize(o-8,8),n[4].setSize(8,i-8),n[5].setSize(8,i-8),n[7].setSize(o-8,8));a()},this.resetColors=function(){for(var t=0;t<9;t++)n[t].resetColors()},this.resetGrips=function(){for(var t=0;t<9;t++)n[t].resetGripSize(),n[t].resetColors()},this.hide=function(){for(var t=0;t<9;t++)n[t].hide()},this.show=o,this.showGrips=a,(this.resetEvents=i)()}function z(t,e,o,i){var n=l("<"+t+"></"+t+">");return e&&e.append&&n.appendTo(e),o&&n.attr("id",o),i&&n.html(i),n}function k(){var t=z("div");return t.addClass(c.domclasses.atala_tool_selection_band),t.css({position:"absolute",zIndex:d}),t}function M(){var t=z("div");return t.addClass(c.domclasses.atala_tool_selection_mask),t.hide(),t.css({left:"0px",top:"0px",width:"1px",height:"1px",position:"absolute",background:"#000",opacity:"0.6",zIndex:"0"}),t}function _(){return f.animated}function P(){return f.backcolor}function S(){return f.forecolor}function A(){return f.movable}function C(){return f.multicolor}function U(){return f.resizable}function R(){return f.showgrips}function F(){return u.trigger.apply(u,arguments),h}function G(){x.mask.left.hide(),x.mask.right.hide(),x.mask.top.hide(),x.mask.bottom.hide()}function T(){n.css({left:(f.x+f.width)*m.zoom+8+"px",top:(f.y+f.height)*m.zoom+4+"px"}),n.text(Math.round(f.width/m.zoom)+"x"+Math.round(f.height/m.zoom)),n.is(":hidden")&&n.show()}function E(){f.visible=!0,x.rectback.show(),x.rect.show(),!0===_()&&!0===C()&&function t(){!0===f.animated&&0===m.colorswap?(x.rect.css("border","1px dashed #"+P()),x.rectback.css("border","1px solid #"+S()),m.colorswap=1):(x.rect.css("border","1px dashed #"+S()),x.rectback.css("border","1px solid #"+P()),m.colorswap=0);!0!==f.animated||x.rect.is(":hidden")||m.animating||(m.animating=setTimeout(function(){m.animating=!1,t()},250))}()}function D(){f.visible=!1,G(),p.hide(),x.rectback.hide(),x.rect.hide()}function I(){var t=f.x,e=f.y,o=m.pagesize.width,i=m.pagesize.height;(o<=t||t+f.width>o)&&(t=o-f.width)<0&&(t=0),(i<=e||e+f.height>i)&&(e=i-f.height)<0&&(e=0),t!==f.x&&(f.x=t),e!==f.y&&(f.y=e);var n,s,r,a,h,u,l=Math.round(f.x*m.zoom),d=Math.round(f.y*m.zoom),c=Math.round(f.width*m.zoom),g=Math.round(f.height*m.zoom);n=l,s=d,x.rectback.css({left:n+"px",top:s+"px"}),x.rect.css({left:n+"px",top:s+"px"}),function(t,e){0===t&&(t=1);x.rectback.css({width:t+"px",height:e+"px"}),x.rect.css({width:t+"px",height:e+"px"})}(c,g),p.setRectangle(l,d,c,g),f.visible?(E(),r=l,a=d,h=c,u=g,f.showmask?(0<a?(x.mask.top.css({left:m.pageoffset.x,top:m.pageoffset.y,width:H(),height:a}),x.mask.top.show()):x.mask.top.hide(),a+u<O()?(x.mask.bottom.css({left:m.pageoffset.x,top:m.pageoffset.y+a+u,width:H(),height:O()-(a+u)}),x.mask.bottom.show()):x.mask.bottom.hide(),0<r?(x.mask.left.css({left:m.pageoffset.x,top:m.pageoffset.y+a,width:r,height:u}),x.mask.left.show()):x.mask.left.hide(),r+h<H()?(x.mask.right.css({left:m.pageoffset.x+r+h,top:m.pageoffset.y+a,width:H()-(r+h),height:u}),x.mask.right.show()):x.mask.right.hide()):G()):D()}function B(t,e){t.stopPropagation(),t.preventDefault();var o=e||L(t),i=Math.round(m.origin.x/m.zoom),n=Math.round(m.origin.y/m.zoom),s=Math.abs((o.x-m.origin.x)/m.zoom),r=Math.abs((o.y-m.origin.y)/m.zoom);0<f.aspectratio&&(Math.abs((o.y-m.origin.y)/(o.x-m.origin.x))>1/f.aspectratio&&0===m.horiz||1===m.vert?s=Math.round(r*f.aspectratio):r=Math.round(s/f.aspectratio));return o.x<m.origin.x?(i-=s)-m.pageoffset.x<0&&(s=m.origin.x-m.pageoffset.x,0<f.aspectratio&&(r=Math.round(s/f.aspectratio)),i=m.origin.x-s):i+s>m.pagesize.width+m.pageoffset.x&&(s=m.pagesize.width-i+m.pageoffset.x,0<f.aspectratio&&(r=Math.round(s/f.aspectratio))),o.y<m.origin.y?(n-=r)-m.pageoffset.y<0&&(r=m.origin.y-m.pageoffset.y,0<f.aspectratio&&(s=Math.round(r*f.aspectratio)),n=m.origin.y-r,o.x<m.origin.x&&(i=m.origin.x-s)):n+r>m.pagesize.height+m.pageoffset.y&&(r=m.pagesize.height-n+m.pageoffset.y,0<f.aspectratio&&(s=Math.round(r*f.aspectratio)),o.x<m.origin.x&&(i=m.origin.x-s)),(0===m.vert||0<f.aspectratio)&&(f.x=i-m.pageoffset.x,f.width=s),(0===m.horiz||0<f.aspectratio)&&(f.y=n-m.pageoffset.y,f.height=r),I(),!0===f.showtooltip&&T(),!1}function V(t){return B(t,Atalasoft.Utils.getMousePositionJquery(t,null,!0))}function Z(t){W(t=t||event);var e=Atalasoft.Utils.getMousePosition(t,null,w[0]);m.origin.x=e.x-Math.round(f.x*m.zoom),m.origin.y=e.y-Math.round(f.y*m.zoom),m.changing=!0;var o={mousemove:q,mouseup:J,ondrag:Atalasoft.Utils.__rf};return null!==m.boundevents?l.extend(m.boundevents,o):m.boundevents=o,w.bind(o),!1}function q(t){W(t=t||event);var e=Atalasoft.Utils.getMousePosition(t,null,w[0]),o={x:0,y:0};return o.x=Math.round((e.x-m.origin.x)/m.zoom),o.y=Math.round((e.y-m.origin.y)/m.zoom),o.x>m.pagesize.width-f.width&&(o.x=m.pagesize.width-f.width),o.x<0&&(o.x=0),o.y>m.pagesize.height-f.height&&(o.y=m.pagesize.height-f.height),o.y<0&&(o.y=0),f.x=o.x,f.y=o.y,I(),!1}function J(t){return W(t=t||event),!(m.changing=!1)===f.showtooltip&&n.hide(),m.changing&&(m.changing=!1,F("changed")),null!==m.boundevents&&(w.unbind(m.boundevents),m.boundevents=null,g.resetDrawLayer()),!1}function L(t){var e=Atalasoft.Utils.getMousePositionJquery(t.toolEvent?t.toolEvent:t);if(w._paper){var o=Atalasoft.Utils.getSVGOffset(w._paper.canvas,w);e.x-=o.left,e.y-=o.top}return e}function O(){return Math.round(m.pagesize.height*m.zoom)}function H(){return Math.round(m.pagesize.width*m.zoom)}function W(t){void 0!==t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function $(){var t=w._img.getSize();m.zoom=w._img.getFitZoom(),m.pagesize.width=t.width,m.pagesize.height=t.height}return h.dispose=function(){null!=p&&(p.dispose(),p=null);h=null,x.rect=null,x.rectback=null,n=null,x.mask.top=null,x.mask.bottom=null,x.mask.left=null,x.mask.right=null},h.getAnimated=_,h.getAspectRatio=function(){return f.aspectratio},h.getBackColor=P,h.getForeColor=S,h.getHeight=function(){return f.height},h.getMovable=A,h.getMultiColor=C,h.getPosition=function(){return{x:f.x,y:f.y}},h.getRectangle=function(){return{x:f.x,y:f.y,width:f.width,height:f.height}},h.getResizable=U,h.getShowGrips=R,h.getShowMask=function(){return f.showmask},h.getShowTooltip=function(){return f.showtooltip},h.getSize=function(){return{width:f.width,height:f.height}},h.getVisible=function(){return f.visible},h.getWidth=function(){return f.width},h.bind=function(){return u.bind.apply(u,arguments),h},h.hide=D,h.reset=function(){D(),f.x=0,f.y=0,f.width=0,f.height=0},h.show=E,h.synchronize=function(){I()},h.trigger=F,h.unbind=function(){return u.unbind.apply(u,arguments),h},h.zoomToSelection=function(){var t=g.getMaxZoom();if(c.getZoom()<t){var e,o=g.getViewportSize(),i=w._img.getFitMultiplier(),n=1,s=0,r=0;e=o.width/f.width==o.height/f.height?Math.min(o.width/(f.width*i),o.height/(f.height*i),t):o.width/f.width<o.height/f.height?Math.min(o.width/(f.width*i),t):Math.min(o.height/(f.height*i),t),n=i*e,s=Math.round(f.x*n),r=Math.round(f.y*n),r-=Math.max(0,Math.round((o.height-f.height*n)/2)),s-=Math.max(0,Math.round((o.width-f.width*n)/2));var a=g.getPageOffsets(w._index,null,null,e);c.zoom(e,function(){c.scrollTo(a.width+s,a.height+r)})}},h.startSelect=function(t){t.stopPropagation(),t.preventDefault(),$();var e=L(t);E(),m.origin.x=e.x,m.origin.y=e.y,f.x=Math.round(e.x/m.zoom),f.y=Math.round(e.y/m.zoom),f.width=1,f.height=1,m.changing=!0,m.vert=0,m.horiz=0,I(),!0===f.showtooltip&&T();return!1},h.moveSelect=B,h.endSelect=J,e&&l.extend(!0,f,e),x.rect=k(),x.rectback=k(),x.mask.top=M(),x.mask.bottom=M(),x.mask.left=M(),x.mask.right=M(),(n=z("div")).addClass(c.domclasses.atala_tool_selection_tooltip),n.hide(),n.css({fontFamily:"Arial, helvetica, san-serif",fontSize:"8pt",padding:"1px",backgroundColor:"#FFFFE1",border:"1px solid #000000",position:"absolute",zIndex:999}),w.append(x.rectback),w.append(x.rect),w.append(n),w.append(x.mask.top),w.append(x.mask.bottom),w.append(x.mask.left),w.append(x.mask.right),p=new v,s=f.multicolor?"dashed":"solid",r="1px solid #"+f.backcolor,a="1px "+s+" #"+f.forecolor,x.rectback.css("border",r),x.rect.css("border",a),p.resetColors(),f.visible?E():D(),w.bind({pageresize:b,pagezoom:y}),h};
"use strict";
/**
 * Notification callback signature. The callback function that is called without parameters.
 * @callback NotificationCallback
 */
/**
 * Represents point structure.
 * @typedef {Object} Point
 * @property {number} x - X axis coordinate.
 * @property {number} y - Y axis coordinate.
 */
/**
 * Represents supported annotation types.
 * @enum {string} AnnotationTypes
 * @memberOf Atalasoft.Annotations
 */Atalasoft.Annotations.AnnotationTypes={
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
polygon:"polygon"},
/**
 * The current browser metadata.
 * @type {Atalasoft.Utils.BrowserMetadata}
 */
Atalasoft.Utils.Browser=new Atalasoft.Utils.BrowserImpl,
/**
 *  Specifies the behavior of the mouse from within the WebDocumentViewer.
 *  @enum {number}
 */
Atalasoft.Utils.MouseToolType={
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
Text:8},
/** Specifies the cursor used with the mouse tool.
 * @enum {number}
 */
Atalasoft.Utils.MouseToolCursor={
/** Automatically determined by the browser. */
Auto:"",
/** An arrow pointer. */
Arrow:"default",
/** A crosshair usually used in drawing a box. */
Crosshair:"crosshair",
/** A grabbing cursor. Usually changes to gabbed while the mouse button is down. */
Grab:Atalasoft.Utils.Browser.Firefox?"-moz-grab":"hand",
/** A hand with a finger pointing. Usually what the browser uses for clicking hyperlinks. */
Hand:"pointer",
/** A crosshair pointer with arrowheads on the ends indicating movement. */
Move:"move",
/** A magnifying glass with a plus sign in it. */
ZoomIn:Atalasoft.Utils.Browser.Firefox?"-moz-zoom-in":'url("%1ZoomIn.cur"pointer), pointer',
/** A magnifying glass with a minus sign in it. */
ZoomOut:Atalasoft.Utils.Browser.Firefox?"-moz-zoom-out":'url("%1ZoomOut.cur"), pointer',
/** A selection editing cursor. */
Text:"text",
/** A vertical text editing cursor. */
VerticalText:"vertical-text",
/** A wait cursor. */
Wait:"wait",
/** A custom CSS cursor string provided by the user. */
Custom:"%2"},
/** Specifies the direction of the scrolling.
 * @enum {number}
 */
Atalasoft.Utils.ScrollDirection={
/** Scrolls horizontally. */
Horizontal:"horizontal",
/** Scrolls vertically. */
Vertical:"vertical"},
/** Specifies the fitting options.
 * @enum {number}
 */
Atalasoft.Utils.Fitting={
/** No fitting will be applied to the image */
None:0,
/** Finds the best option between width or height based fitting. */
Best:1,
/** Fits the image to the available width. */
Width:2,
/** Fits the image to the available height. */
Height:3},
/** Specifies the page selection method.
 *  @enum {number}
 */
Atalasoft.Utils.PageSelection={
/** Selects the page under the top left corner of the viewer  */
TopLeft:{x:0,y:0},
/** Selects the page under the middle left of the viewer  */
MiddleLeft:{x:0,y:.5},
/** Selects the page under the bottom left corner of the viewer  */
BottomLeft:{x:0,y:1},
/** Selects the page under the center location of viewer  */
Center:{x:.5,y:.5}},
/** Specifies the size of the viewport area that triggers document scroll when text selection enters it.
 * @enum {number}
 */
Atalasoft.Utils.ScrollArea={
/** Text selection scrolling is disabled */
None:0,
/** Normal scroll area. Around 10% of the corresponding viewport dimension */
Normal:.1,
/** Normal scroll area. Around 20% of the corresponding viewport dimension */
Large:.2},
/**
 * Exposes the list of internal DOM elements classes that could be used to query and customize UI behavior.
 * @enum {string}
 * @readonly
 */
Atalasoft.Controls.WebDocumentViewer.domclasses={
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
atala_tool_button_commment_anno:"atala_tool_button_commment_anno",
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
atala_upload_files_header_status:"atala-upload-files-header-status"},
/**
 * Exposes list of well-known attributes that are used to provide additional information for DOM elements
 * @enum {string}
 */
Atalasoft.Controls.WebDocumentViewer.domattributes={
/** Index of the page currently displayed within the element. applies to elements having `.atala_page_div` class */
atala_page_index:"atala_page_index"},
/**
 * Defines Web Document Thumbnailer selection mode.
 * @enum {number}
 * @readonly 
 */
Atalasoft.Utils.SelectionMode={
/**
     * Only one thumbnail can be selected 
     */
SingleSelect:0,
/**
     * Multiple thumbnails can be selected
     */
MultiSelect:1},
/**
 * Defines the order in which selected thumbnails are ordered
 * @enum {number}
 * @readonly 
 */
Atalasoft.Utils.SelectedItemsOrder={
/**
     * Items are sorted in their index order.
     */
ItemIndexOrder:0,
/**
     * Items are sorted in the order they were selected.
     */
SelectedOrder:1},
/**
 * Represents a reason why a file has been rejected by WDV from upload.
 * @enum {number}
 * @readonly 
 */
Atalasoft.Utils.FileUploadRejectReason={
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
Name:3};
/**
 * Represents the current browser metadata.
 * @typedef {Object} BrowserMetadata
 * @memberOf Atalasoft.Utils
 * @property {boolean} Explorer - Indicates whether current browser is Internet Explorer.
 * @property {boolean} Firefox - Indicates whether current browser is Firefox.
 * @property {boolean} Safari -  Indicates whether current browser is Safari.
 * @property {boolean} Opera -  Indicates whether current browser is Opera.
 * @property {boolean} Chrome -  Indicates whether current browser is Google Chrome.
 * @property {Object} Mobile - Represents mobile browser indicators.
 * @property {boolean} Mobile.iOS - Indicates that current device runs on iOS device.
 * @property {boolean} Mobile.Android - Indicates that current device runs on Android device.
 * @property {boolean} Mobile.IEMobile - Indicates that current device runs on mobile internet explorer.
 * @property {function} Mobile.Any - Checks whether current platform is mobile device.
 * @returns {boolean}
 */
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}
/**
 * WebDocumentViewer Annotations API.
 * @class
 * @inner
 * @name AnnotationController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */Atalasoft.Annotations.AnnotationController=function(t,e,n){var _=Atalasoft.$,a=this,s=t,w=e,o=new Atalasoft.Annotations.AnnotationSelector,i={
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
         *  Triggers when an annotation is loaded into the document. There are multiple ways how annotaions could be loaded, for example passing the {@link WebDocumentViewerConfig.annotationsurl| annotationsurl} in the constructor, or by calling {@link Atalasoft.Controls.WebDocumentViewer#openUrl | viewer.openUrl}. In this case event will be fired for each loaded annotation from all layers.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationloaded
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         * @param {Object} event.customData - The event customer data from server.
         */
annotationloaded:null,
/**
         *  Triggers when all annotations are loaded into the document. There are multiple ways how annotaions could be loaded, for example passing the {@link WebDocumentViewerConfig.annotationsurl| annotationsurl} in the constructor, or by calling {@link Atalasoft.Controls.WebDocumentViewer#openUrl | viewer.openUrl}. In this case event will be fired for each loaded annotation from all layers.
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
         * @param {AnnotationData} annotation - The data of the annotationon which context menu were activated.
         * @param {AnnotationContextMenu} menu - The menu configuration. Keys of this object is treated as menu titles and values under those keys are handler functions.
         * This object could be modified by application to extend or modify current menu instance.
         */
/** Triggers when the context menu is shown for an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#contextmenu
         * @type {AnnotationContextMenuCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} annotation - The data of the annotationon which context menu were activated.
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
getSelected:o.getSelected,
/**
             * Selects all annotations on every page.
             * @instance
             * @function
             */
selectAll:o.selectAll,
/**
             * Deselects all annotations on every page.
             * @instance
             * @function
             */
deselectAll:o.deselectAll,
/**
             * Selects all annotations on the given page.
             * @param {number} index - The index of the page the annotations should be selected on.
             * @instance
             * @function
             */
selectAllOnPage:o.selectPage,
/**
             * Deselects all annotations on the given page.
             * @param {number} index - The index of the page the annotations should be deselected on.
             * @instance
             * @function
             */
deselectAllOnPage:o.deselectPage,
/**
             * Cancels the drawing of an annotation and returns the viewer to the previous tool.
             * @instance
             * @function
             */
cancelDraw:pt,
/**
             * Setups the viewport to create an annotation
             * @param {AnnotationData} aConfig - Configuration for the annotation to draw
             * @param {NotificationCallback} [callback] - function to call when the annotation has finished drawing.
             * @param {NotificationCallback} [cancelled] - function to call when the annotation draw was canceled.
             * @instance
             * @function
             */
drawAnnotation:function(t,e,n){w._controllers.mouseTool.setTool(Atalasoft.Utils.MouseToolType.None,Atalasoft.Utils.MouseToolType.None),at(t,!0,function(){w._controllers.mouseTool.setTool(Atalasoft.Utils.MouseToolType.Pan,Atalasoft.Utils.MouseToolType.None),"function"==typeof e&&e()},function(){w._controllers.mouseTool.setTool(Atalasoft.Utils.MouseToolType.Pan,Atalasoft.Utils.MouseToolType.None),"function"==typeof n&&n()})},
/**
             * Gets an array of annotion data objects located on the given zero based page index.
             * @param {number} index - The page index the annotations are located on.
             * @returns {AnnotationData[]} Annotation data objects on the given page.
             * @instance
             * @function
             */
getFromPage:Z,
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
deleteFromPage:G,
/**
             * Shows the editor dialog for text annotations. Ignores other types of annotations.
             * @param {AnnotationData} annotation - the annotation object to show editor for.
             *
             * Annotation object should be retrieved using corresponding API. If it's constructed by the application, annotation won't be matched.
             * @instance
             * @function
             */
showEditor:function(t){return tt(t,!0)},
/**
             * Hides the text annotation editor. Applies only to text annotations and ignores other types of annotations.
             * @param {AnnotationData} annotation - The annotation object to hide editor for.
             * @instance
             * @function
             */
hideEditor:function(t){return tt(t,!1)},
/**
             * Sets the default annotation properties for initially created annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.defaults}.
             * @param {AnnotationData[]} aConfig - Default configurations for different types of the annotations.
             * @returns {Atalasoft.Controls.WebDocumentViewer}
             * @instance
             * @function
             */
setDefaults:X,
/**
             * Sets the default annotation properties for image annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.images}
             * @param {AnnotationData[]} aConfig - Default configurations image annotations.
             * @returns {Atalasoft.Controls.WebDocumentViewer}
             * @instance
             * @function
             */
setImages:$,
/**
             * Sets the default annotation properties for stamp annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.stamps}.
             * @param {AnnotationData[]} aConfig - Default configurations stamp annotations.
             * @returns {Atalasoft.Controls.WebDocumentViewer}
             * @instance
             * @function
             */
setStamps:Y,
/**
             * Inserts a layer of annotations at the source URL and index into the given page index. Single layer of annotations corresponds to single document page.
             * @param {string} sourceUrl - Reserved for future use.
             * @param {AnnotationData[]} layer - The annotation layer data.
             * @param {number} index - Index the layer is to be inserted into.
             * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
             * @instance
             * @function
             */
insertLayer:function(t,e,n,a){n=k(t,e,n),"function"==typeof a&&a();s.trigger({type:m.layerinserted,srcurl:t,srcindex:e,index:n}),s.trigger(m.layerschanged)},
/**
             * Removes a layer(page annotation) of annotations. All other layers are shifted. This operation corresponds to removing page from the document.
             * @param {number} index - index of the layer to be removed.
             * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
             * @instance
             * @function
             */
removeLayer:function(t,e){var n=P(t);"function"==typeof e&&e();s.trigger({type:m.layerremoved,layer:n,index:t}),s.trigger(m.layerschanged)},
/**
             * Moves a layer of annotations from one page index to another.
             * @param {number} sourceIndex - index of the layer to be moved.
             * @param {number} destIndex - Destination zero based page index.
             * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
             * @instance
             * @function
             */
moveLayer:function(t,e,n){e=T(t,e),"function"==typeof n&&n();s.trigger({type:m.layermoved,srcindex:t,destindex:e}),s.trigger(m.layerschanged)},
/**
             * Scrolls viewer to the specified annotation.
             * @param {AnnotationData} anno - the annotation object to scroll to.
             * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
             * @instance
             * @function 
             */
scrollTo:function(t,e){var n=function(){"function"==typeof e&&e()},a=t.getPageIndex(),o=J(t,a);if(o){var i=o.getZoom(),r=Atalasoft.Annotations.AnnotationTypes,s={x:0,y:0};if(t.type===r.line||t.type===r.lines||t.type===r.freehand){var l=t.points.map(function(t){return t.x}),c=t.points.map(function(t){return t.y});s.x=(Math.min.apply(Math,_toConsumableArray(l))+Math.max.apply(Math,_toConsumableArray(l)))/2,s.y=(Math.min.apply(Math,_toConsumableArray(c))+Math.max.apply(Math,_toConsumableArray(c)))/2}else s.x=t.x+t.width/2,s.y=t.y+t.height/2;s.x*=i,s.y*=i,w.showPagePoint(a,s,Atalasoft.Utils.PageSelection.Center,!0,n)}else n();return}},
/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#deselectAll|annotations.deselectAll} instead.
         */
deselectAll:o.deselectAll,
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
getAnnotationsFromPage:Z,
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
setAnnotationDefaults:X,
/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setImages|annotations.setImages} instead.
         */
setImages:$,
/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setStamps|annotations.setStamps} instead.
         */
setStamps:Y};if(Atalasoft.Annotations.AnnotationController.__exposedApi=i.annotations,!t)return null;var r=e._config,l=e._pages,c=!1,p=null,u=null,d=null,f=null,g=null,x={annos:[],activepage:null,activeanno:null,readonly:!!n,zoom:s.getZoom(),getZoom:w.getPageScale,getViewerTransform:w.getViewerTransform,getPageRotation:w.getPageRotation},h={},v=!1,y=!1,m={click:"annotationclicked",dblclick:"annotationdoubleclicked",touchstart:"annotationtouchstart",interactend:"annotationtouchend",touchmove:"annotationtouchmove",pinchmove:"annotationpinchresize",rightclick:"annotationrightclicked",mousedown:"annotationmousedown",mousedownleft:"annotationmousedownleft",mousedownright:"annotationmousedownright",mousemove:"annotationmousemove",mouseout:"annotationmouseout",mouseup:"annotationmouseup",mouseover:"annotationmouseover",annocreate:"annotationcreated",annoload:"annotationloaded",moved:"annotationmoved",rotated:"annotationrotated",annoresized:"annotationresized",repaint:"annotationrepainted",layerinserted:"layerinserted",layerremoved:"layerremoved",layermoved:"layermoved",layerschanged:"layerschanged",annotationchanged:"annotationchanged",annotationtextchanged:"annotationtextchanged"};function b(){c=!0,x.readonly||(u=E(d),f=new F,null!=r.annotations.defaults&&X(r.annotations.defaults),null!=r.annotations.stamps&&Y(r.annotations.stamps),null!=r.annotations.images&&$(r.annotations.images),null!=r.annotations.custom&&K(r.annotations.custom))}
/**
    * [Internal] Disposes memory intensive objects
    * @returns undefined
    */function A(t){g.translate(t.dx,t.dy)}function D(t){x.zoom=t.zoom}function k(t,e,n){if(t||"number"!=typeof e||(e=P(e)),e=e||[],null==n?n=x.annos.length:n<0&&(n=0),n>x.annos.length){var a=x.annos.length;x.annos[n]=e;for(var o=a;o<x.annos.length;++o)x.annos[o]||(x.annos[o]=[])}else x.annos.splice(n,0,e);return n}function P(t){return t<x.annos.length?x.annos.splice(t,1)[0]:null}function T(t,e){return k(null,P(t),e)}function C(t){t&&t.remove&&!t.grip&&t.paper&&t.paper._trash&&t.paper._trash.push(t)}function S(t){V(t.index,t.page)}function V(t,e){if(t<x.annos.length&&(M(e),x.annos[t]&&x.annos[t].length))for(var n=void 0,a=0;a<x.annos[t].length;a++)(n=x.annos[t][a])._pageindex=t,n.repaint(e._paper),n.get("selected")&&o.select(n,t,!0)}function M(t){t._grips.clear(),t._paper._annos.remove(),t._paper._annos.clear(),t._paper.forEach(function(t){t&&t.remove&&!t.grip&&t.paper&&t.paper._trash&&t.paper._trash.push(t)}),t._paper._trash.remove(),t._paper._trash.clear(),pt()}function O(t){x.activepage=t}function z(t){t.page._paper&&(M(t.page),t.page.append(t.page._paper.canvas))}function R(t){W(t.page)}function W(t){if(t&&0<=t._index&&x.annos[t._index]){for(var e=0;e<x.annos[t._index].length;e++)x.annos[t._index][e].repaint();t&&t._grips.repaint()}}function F(){var t=this,p=_("<div />"),u=_("<div />"),d=null,a=null,o={fill:{color:!0,opacity:!0},rotation:!0,outline:{color:!0,opacity:!0,width:!0,startcap:{style:["None:none","Arrow:open","Filled Arrow:block","Filled Ellipse:oval","Filled Diamond:diamond"],width:["medium","long","short"],height:["medium","wide","narrow"]},endcap:{style:["None:none","Arrow:open","Filled Arrow:block","Filled Ellipse:oval","Filled Diamond:diamond"],width:["medium","long","short"],height:["medium","wide","narrow"]}},text:{font:{bold:!0,italic:!0,color:!0,family:!0,size:!0}}};function e(){p.dialog("close")}function n(){i(),e()}function i(){d.set(a,!0),d.updateView(),d.repaint(),u.empty(),f(d.get(),"",o),v()}function f(n,t,e){function a(t){if(this.value&&"boolean"!=typeof this.value)if("number"==typeof n[this.title]){var e=parseFloat(this.value);isNaN(e)||"rotation"!==this.title||e===n[this.title]?"opacity"===this.title&&0<=e&&e<=1||"opacity"!==this.title&&0<=this.value?n[this.title]=e:this.value=n[this.title]:(d.set({rotation:e}),d.repaint())}else n[this.title]=this.value;else t&&"boolean"==typeof this.value?n[this.title]=0<=t.target.id.indexOf("true"):this.value=n[this.title];d.updateView(),d.repaint(),v()}for(var o in n)if(n.hasOwnProperty(o))if("object"===_typeof(n[o])){var i="text"!==o?h(o):"";e[o]&&("text"!==o||"text"===o&&"text"===d.get("type"))&&f(n[o],(t?t+" ":t)+i,e[o])}else if("type"===o)p.dialog("option","title",h(n[o].replace("fillrect","rectangle"))+" Annotation Properties");else if(e[o]){var r=_("<div/>"),s=g(o,n[o],a,e[o]);r.addClass("ui-helper-clearfix atala-ui-dialog-clearfix"),r.css({overflow:"hidden"}),s.appendTo(r),l=r,c=(t?t+" ":t)+h(o)+":",l.append(_("<span/>").text(c)),r.appendTo(u)}var l,c}function g(t,e,n,a){var o=void 0===e?"undefined":_typeof(e),i=null;if(_.isArray(a))i=_("<select/>").attr({title:t}),_.each(a,function(t,e){var n=e,a=e,o=e.split(":");1<o.length&&(a=o[0],n=o[1]),i.append(_("<option/>",{value:n,text:a}))}),i.change(n),i.val(e);else if("string"===o||"number"===o)(i=_("<input/>").attr({type:"text",title:t})).val(e),i.change(n),i.focus(function(){this.select(),this._focused=!0}),i.mouseup(function(t){this._focused&&(t.preventDefault(),this._focused=!1)});else if("boolean"===o){var r="bool"+t;s(i=_("<div/>").attr({title:t}),r+!0,r,"True",e),s(i,r+!1,r,"False",!e),i.controlgroup(),i.change(n),i[0].value=e}else i=_("<div>"+e+"</div>");return i.css({float:"right"}),i}function s(t,e,n,a,o){t.append(_("<input/>").attr({type:"radio",id:e,name:n,checked:o})),t.append(_("<label/>").attr({for:e}).text(a))}function h(t){return t.charAt(0).toUpperCase()+t.slice(1)}function v(){var t=d.getObject();t&&t.paper&&t.paper._page&&t.paper._page._grips.repaint()}return t.show=function(t){for(var e in d=t,u.empty(),a={},o)if(o.hasOwnProperty(e)){var n={};n[e]=d.get(e),_.extend(!0,a,n)}f(d.get(),"",o),p.dialog("open")},t.hide=e,t.isVisible=function(){return p.dialog("isOpen")},t.cancel=n,t.reset=i,u.appendTo(p),p.dialog({minWidth:320,classes:{"ui-dialog":"atala-ui"},resizable:!1,autoOpen:!1,buttons:{Ok:e,Reset:i,Cancel:n}}),t}function I(t){u&&(u.visible&&B(),u.remove());var e=_.extend(!0,{},d);if(s.trigger("contextmenu",[x.activeanno.getClonedData(),e]),_.isEmptyObject(e))u=null;else{for(var n in e)e.hasOwnProperty(n)&&(e[n]=N(e[n]));u=E(e)}!function(t){if(u){if(x.activeanno.get("readonly"))u.children(":contains(Properties)").unbind("click").children("a, div").css("color","#cdc9c9");else{var e=u.children(":contains(Properties)");void 0!==e.data("events")&&"click"in e.data("events")||e.bind("click",j),e.children("a").css("color","#000000")}0===u.closest().length&&p.prepend(u);var n={x:t.x-6,y:t.y-6};u.css({left:n.x,top:n.y}),u.show(),u.visible=!0}}(t)}function B(){u&&(u.hide(),u.visible=!1)}function E(t){var e=w.createMenu(t);return e.css({position:"fixed","z-index":99999}),e.mouseleave(B),e.visible=!1,e}function N(t){return function(){return B(),t.call(this,x.activeanno.getClonedData())}}function U(){var t=x.activepage?x.activepage._index:0;if(x.annos[t]){var e=_.inArray(x.activeanno,x.annos[t]);-1!==e&&(x.activeanno=null,Q(e,t))}B()}function j(){B(),f.show(x.activeanno)}
/**
    * Clears the annotations and related data from all pages
    */
function L(){if(0<x.annos.length){if(x.annos.length=0,l)for(var t=0;t<l.length;t++)l[t]._grips.clear(),l[t]._paper.forEach(C),l[t]._paper._trash.remove(),l[t]._paper._trash.clear(),l[t]._paper._annos.remove(),l[t]._paper._annos.clear();s.trigger({type:"annotationscleared"})}}
/**
    * Creates an annotation on the desired page with the given annotation data.
    * @param aConfig: object, Key value pairs representing annotation data.
    * @param pgNum: number, The zero based index of the page the annotation should be created on.
    * @param callback: function, Function to be called when the operation has completed.
    * @returns object: Atalasoft.Annotations.Annotation.
    */function H(t,e,n){var a={};t.multiview?a=t:(t&&t.type&&h[t.type]&&_.extend(!0,a,h[t.type]),_.extend(!0,a,t));var o=new Atalasoft.Annotations.Annotation(a,x);return o._pageindex=e,void 0===x.annos[e]&&(x.annos[e]=[]),x.annos[e].push(o),w.redrawPageFromIndex(e,!0),"function"==typeof n&&n(o),dt(o),o}function q(t,e,n){var a=H(t,e,n).getClonedData();return s.trigger({type:m.annocreate,anno:a,annotation:a,page:e}),a}function G(t,e){Q(e,t)}
/**
    * Deletes an annotation on the given z-index and zero based page index.
    * @param annIndex: number, Zero based z-index of the annotation.
    * @param pgNum: number, Zero based page index the annotation is located on.
    */function Q(t,e){var n=x.annos[e].splice(t,1)[0];x.activepage&&x.activepage._paper&&x.activepage._paper._annos.exclude(n.getObject()),x.activeanno===n&&(x.activeanno=null),n.dispose(),x.activepage&&x.activepage._grips&&x.activepage._grips.repaint(),s.trigger({type:"annotationdeleted",page:e,index:t})}function Z(t){var e=[];if(0===x.annos.length||void 0===x.annos[t])return e;for(var n=0;n<x.annos[t].length;n++)e[n]=x.annos[t][n].getClonedData();return e}function J(t,e){if(isFinite(e)){if(e<x.annos.length)for(var n=0;n<x.annos[e].length;++n)if(x.annos[e][n].isCloneSource(t))return x.annos[e][n]}else for(var a=0;a<x.annos.length;++a){var o=J(t,a);if(o)return o}return null}function X(t){r.annotations.defaults=t;for(var e=0;e<t.length;e++)"string"==typeof t[e].type&&(h[t[e].type]=t[e]);return s}function Y(t){r.annotations.stamps=t;for(var e=0;e<t.length;e++)wt(t[e]);if(c){var n={type:"button",id:w._id+"_toolbar_Button_Stamp",icon:"stamp",tooltip:"Draw Stamp",text:""},a=w.createDropDownButton(n);n.onclick=w.drawAnnotation,w.createDropDownMenu(a,n,t)}return s}function $(t){r.annotations.images=t;for(var e=0;e<t.length;e++)xt(t[e]);if(c){var n={type:"button",id:w._id+"_toolbar_Button_Image",icon:"image",tooltip:"Draw Image",text:""},a=w.createDropDownButton(n);n.onclick=w.drawAnnotation,w.createDropDownMenu(a,n,t)}return s}
/**
    * Sets the default annotation properties for initially created custom annotations.  This accepts the same input as the main config.
    * @param cConfig: array, An array of JSON objects representing custom annotation types.
    * @returns object: Atalasoft.Controls.WebDocumentViewer
    */function K(t){r.annotations.custom=t;for(var e=0;e<t.length;e++)t[e].type="custom";if(c){var n={type:"button",id:w._id+"_toolbar_Button_Custom",icon:"image",tooltip:"Draw Custom",text:""},a=w.createDropDownButton(n);n.onclick=w.drawAnnotation,w.createDropDownMenu(a,n,t)}return s}function tt(t,e){if("text"===t.type&&t){var n=t.getPageIndex(),a=J(t,n);if(e)t.visible&&(w.isPageInView(n)?et(a,n):s.showPage(t.getPageIndex(),function(){et(a,n)}));else a.trigger("hideeditor")}}function et(t,e){t&&(!1!==t.get("selectable")&&o.select(t,e,!1),t.trigger("showeditor"))}function nt(t){O(t),o.deselectPage(t),B()}function at(t,e,n,a){if(v)return null;var o=_.extend(!0,{},t);return t&&t.type&&h[t.type]&&(o=_.extend(!0,o,h[t.type]),e&&(o=_.extend(!0,o,t))),o.rotation=0,x.activeanno&&null===x.activeanno.getObject()&&ct(),function(){if(!y){p.bind("mousedown",st),Atalasoft.Utils.Browser.Features.Touch&&p.bind("touchstart",st);for(var t=0;t<l.length;t++)l[t]._draw.toFront();y=!0}}(),x.activeanno=new Atalasoft.Annotations.Annotation(o,x),x.activeanno.bind({drawn:lt,cancelled:ct}),"function"==typeof n&&(ot=n),"function"==typeof a&&(it=a),x.activeanno}function ot(){}function it(){}function rt(){if(y){p.unbind("mousedown",st),Atalasoft.Utils.Browser.Features.Touch&&p.unbind("touchstart",st);for(var t=0;t<l.length;t++)l[t]._draw.reset();y=!1}}function st(t){v=!0,p.unbind("mousedown",st),Atalasoft.Utils.Browser.Features.Touch&&p.unbind("touchstart",st);var e=x.activeanno.getClonedData();s.trigger({type:"annotationdrawstart",annotation:e,ann:e}),x.activeanno._pageindex=x.activepage._index,x.activeanno.startDraw(t,x.activepage._paper,{})}function lt(){ut(),function(t){var e=x.activepage,n=e?e._index:0;x.annos[n]?x.annos[n].push(t):x.annos[n]=[t];x.activeanno.unbind({drawn:lt,cancelled:ct}),dt(x.activeanno),o.select(x.activeanno,e,!1),ot({annotation:t}),ot=function(){};var a=t.getClonedData();s.trigger({type:m.annocreate,anno:a,annotation:a,page:n})}(x.activeanno)}function ct(){x.activeanno.dispose(),x.activeanno=null,v&&ut(!0)}function pt(){y&&(v?ct():(x.activeanno&&(x.activeanno.dispose(),x.activeanno=null),rt()),it({annotation:null}),it=function(){})}function ut(t){v=!1,rt();var e=t?null:x.activeanno.getClonedData();s.trigger({type:"annotationdrawend",annotation:e,ann:e,cancelled:!!t})}function dt(n){function t(t){var e=n.getClonedData();s.trigger({type:m[t.type],anno:e,annotation:e})}n.bind({dragstart:function(){var t=n.getClonedData();s.trigger({type:"annotationdragstart",ann:t,annotation:t})},dragend:function(){var t=n.getClonedData();s.trigger({type:"annotationdragend",annotation:t,ann:t})},interactstart:function(t){x.activepage&&x.activepage._paper===n.getObject().paper||O(n.getObject().paper._page),x.activeanno=n},selected:ft,deselected:ft,reselected:ft,contextmenu:I,serverrenderurlrequested:gt,moved:t,rotated:t,annoresized:t,interactend:t,touchstart:t,touchmove:t,pinchmove:t,click:t,dblclick:t,rightclick:t,mousedown:t,mousedownleft:t,mousedownright:t,mousemove:t,mouseout:t,mouseup:t,mouseover:t,repaint:t,annotationchanged:t,annotationtextchanged:t})}function ft(t){var e=t.page||0<=t.pageindex?t.pageindex:x.activepage,n=o.resolvePage(e);n&&(e=n),"selected"===t.type||"reselected"===t.type?(x.activeanno=t.ann,o.select(t.ann,e,t.append),f&&f.isVisible()&&f.show(t.ann)):(o.deselect(t.ann,e,t.append),f&&f.isVisible()&&f.cancel()),n&&n._grips&&n._grips.repaint()}function gt(t){var e=t.complete,n=ht(t.data);"function"==typeof e&&e.call(n)}function ht(t){return vt(t),JSON.stringify(t)}function vt(t){for(var e in t)if("color"===e&&null!=t[e]){var n=Raphael.getRGB(t[e]);n.error&&(n.hex="#000000"),t[e]=n.hex}else"points"!==e&&"object"===_typeof(t[e])&&vt(t[e])}function yt(t,e,n,a,o){var i={type:"annodata",serverurl:t,query:"?atalaanndata=",method:"GET",data:{atala_annurl:e,atala_docurl:n=n||s.config.documenturl,atala_a_ofs:a,atala_a_len:o},cancel:!1,info:{layers:[],offset:a||0,length:o,error:void 0}};for(var r in i.data)i.data.hasOwnProperty(r)&&null===i.data[r]&&(i.data[r]=void 0);return i}function mt(n,a,o){function t(t){if(void 0!==n.info.docIndex&&(t.offset=n.info.docIndex),!t.layers&&t.error&&a)for(var e=t.offset;e<t.offset+n.info.length;e++)x.annos[e]=[];_t(t),"function"==typeof o&&o.call(void 0,t.error,t)}"function"==typeof a&&(o=a,a=!1),a||L(),w.makeHandlerRequest(n,t,t)}function _t(t){if(t){var e={type:"annotationsloaded",customData:t.customData};if(t.layers)for(var n=0;n<t.layers.length;n++){t.offset=t.offset||0;var a=t.offset+n;x.annos[a]&&0<x.annos[a].length?x.annos[a].length=0:x.annos[a]=[];var o=t.layers[n];if(o&&(o._index=isFinite(o._index)&&0<=o._index?o._index:a,o.visible=void 0===o.visible||o.visible,o.items))for(var i=0;i<o.items.length;i++){o.items[i].visible=o.items[i].visible&&o.visible,x.annos[a][i]=new Atalasoft.Annotations.Annotation(o.items[i],x),x.annos[a][i]._pageindex=o._index;var r=x.annos[a][i].getClonedData();s.trigger({type:m.annoload,anno:r,annotation:r,customData:t.customData}),dt(x.annos[a][i])}}else t.error&&(e.error=t.error);e.offset=t.offset,e.length=t.layers?t.layers.length:0,s.trigger(e)}}function wt(t){var e;return t.type="stamp",t.text&&((e=t.text)&&e.font&&e.font.size&&(e.font.size=parseFloat(e.font.size)),t.text.readonly=!0),t}function xt(t){return t.type="image",t}o.setAnnos(x.annos),o.setPages(l),function(){var P,T,C,p=Raphael.svg&&!Atalasoft.Utils.Browser.Features.foreignObject;function i(t,e,n,a,o,i){var r=p||i?"image":"foreignObject",s=u(this,this,"http://www.w3.org/2000/svg",r,e,n,a,o),l=null;if(!p){l=document.createElementNS("http://www.w3.org/1999/xhtml","div");var c="http://www.w3.org/2000/xmlns/";l.setAttributeNS(c,"xmlns",c),l.innerHTML=t||"",s.node.appendChild(l),s.isHtml=!0}return s.innerDom=l,s}function u(t,e,n,a,o,i,r,s,l){var c=null===n?document.createElement(a):document.createElementNS(n,a);e.canvas&&e.canvas.appendChild&&e.canvas.appendChild(c);var p=new t.constructor.el.constructor(c,t);for(var u in p.attrs={x:o,y:i,width:r,height:s,r:l||0,rx:l||0,ry:l||0,fill:"none",stroke:"#000"},p.skew={},"g"===(p.type=a)&&(p.canvas=p.node),p.attrs)p.attrs.hasOwnProperty(u)&&void 0!==p.attrs[u]&&c.setAttribute(u,p.attrs[u]+"");return p}Raphael.vml?Raphael.fn.html=function(t,e,n,a,o){var i=u(this,this,null,"div",e,n,a,o),r=i.node;function s(t){var e=i.matrix.split();if(t.hasOwnProperty("x")&&void 0!==t.x&&t.hasOwnProperty("y")&&void 0!==t.y){var n={x:t.x*e.scalex,y:t.y*e.scaley};if(0!==e.rotate){var a=Atalasoft.Utils.__calcPathBounds([{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}],i.matrix);n=a}r.style.left=Math.round(n.x)+"px",r.style.top=Math.round(n.y)+"px"}}return r.innerHTML=t||"",(i.innerDom=r).style.position="absolute",i.__tsfm=i.transform,i.transform=function(){this.__tsfm.apply(this,arguments),this.repaint(),s(this.attrs)},i.backgroundColor=function(t){r.style.backgroundColor=t,this.repaint()},i.repaint=function(){r.style.filter='progid:DXImageTransform.Microsoft.Chroma(color="'+r.style.backgroundColor+'"); '+this.matrix.toFilter()},i.__attr=i.attr,i.attr=function(t){this.__attr.apply(this,arguments),t&&(s(t),t.hasOwnProperty("width")&&(r.style.width=t.width+"px"),t.hasOwnProperty("height")&&(r.style.height=t.height+"px"))},i.isHtml=!0,i}:(Raphael.fn.html=function(t,e,n,a,o){return i.call(this,t,e,n,a,o)},P={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},T={},C=function t(e,n){if(n)for(var a in"string"==typeof e&&(e=t(e)),n)n.hasOwnProperty(a)&&("xlink:"===a.substring(0,6)?e.setAttributeNS("http://www.w3.org/1999/xlink",a.substring(6),String(n[a])):e.setAttribute(a,String(n[a])));else(e=Raphael._g.doc.createElementNS("http://www.w3.org/2000/svg",e)).style&&(e.style.webkitTapHighlightColor="rgba(0,0,0,0)");return e},Raphael.fn.addArrow=function(t,e,n){if("path"===t.type){for(var a=String(e).toLowerCase().split("-"),o=t.paper,i=n?"end":"start",r=t.node,s=t.attrs,l=s["stroke-width"],c=a.length,p="classic",u=void 0,d=void 0,f=void 0,g=void 0,h=void 0,v=3,y=3,m=5;c--;)switch(a[c]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":p=a[c];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":v=5;break;case"short":v=2}if(h="open"===p?(v+=2,y+=2,m+=2,f=1,g=n?4:1,{fill:"none",stroke:s.stroke}):(g=f=v/2,{fill:s.stroke,stroke:"none"}),t._.WDVarrows?n?(t._.WDVarrows.endPath&&T[t._.WDVarrows.endPath]--,t._.WDVarrows.endMarker&&T[t._.WDVarrows.endMarker]--):(t._.WDVarrows.startPath&&T[t._.WDVarrows.startPath]--,t._.WDVarrows.startMarker&&T[t._.WDVarrows.startMarker]--):t._.WDVarrows={},"none"!==p){var _=Math.random().toString(36).substring(7),w="dave-marker-"+p,x="dave-marker-"+i+p+v+y+_;Raphael._g.doc.getElementById(w)?T[w]++:(o.defs.appendChild(C(C("path"),{"stroke-linecap":"round",d:P[p],id:w})),T[w]=1);var b=Raphael._g.doc.getElementById(x),A=void 0;b?(T[x]++,A=b.getElementsByTagName("use")[0]):(b=C(C("marker"),{id:x,markerHeight:y,markerWidth:v,orient:"auto",refX:g,refY:y/2}),A=C(C("use"),{"xlink:href":"#"+w,transform:(n?"rotate(180 "+v/2+" "+y/2+") ":"")+"scale("+v/m+","+y/m+")","stroke-width":(1/((v/m+y/m)/2)).toFixed(4)}),b.appendChild(A),o.defs.appendChild(b),T[x]=1),C(A,h);var D=f*("diamond"!==p&&"oval"!==p);d=(d=n?(u=t._.WDVarrows.startdx*l||0,Raphael.getTotalLength(s.path)-D*l):(u=D*l,Raphael.getTotalLength(s.path)-(t._.WDVarrows.enddx*l||0)))<0?0:d,(h={})["marker-"+i]="url(#"+x+")",(d||u)&&(h.d=Raphael.getSubpath(s.path,u,d)),C(r,h),t._.WDVarrows[i+"Path"]=w,t._.WDVarrows[i+"Marker"]=x,t._.WDVarrows[i+"dx"]=D,t._.WDVarrows[i+"Type"]=p,t._.WDVarrows[i+"String"]=e}else d=n?(u=t._.WDVarrows.startdx*l||0,Raphael.getTotalLength(s.path)-u):(u=0,Raphael.getTotalLength(s.path)-(t._.WDVarrows.enddx*l||0)),t._.WDVarrows[i+"Path"]&&C(r,{d:Raphael.getSubpath(s.path,u,d)}),delete t._.WDVarrows[i+"Path"],delete t._.WDVarrows[i+"Marker"],delete t._.WDVarrows[i+"dx"],delete t._.WDVarrows[i+"Type"],delete t._.WDVarrows[i+"String"];for(h in T)if(T.hasOwnProperty(h)&&!T[h]){var k=Raphael._g.doc.getElementById(h);k&&k.parentNode.removeChild(k)}}}),Raphael.fn.atalaImage=function(t,e,n,a,o){return i.call(this,t,e,n,a,o,!0)}}(),g=Raphael.matrix(1,0,0,1,0,0),s.bind({scroll:A,pagerecycled:z,pageshown:S,zoomchanged:D,pagerotated:R}),d={Delete:U,Properties:j},w._state.initialized?b():s.bind({initialized:b}),"Atalasoft.Controls.WebDocumentViewer"===s.typeOf&&_.extend(s,i),a.__exposedApi=i.annotations,a.addDrawingSurface=function(n){if(n instanceof jQuery){n._paper=Raphael(n[0]),n._paper.canvas.style.position="absolute",n._paper.canvas.style.zIndex="2",0<r.pageborderwidth&&(n._paper.canvas.style.left=r.pageborderwidth+"px",n._paper.canvas.style.top=r.pageborderwidth+"px"),n._paper._annos=n._paper.set(),n._paper._trash=n._paper.set(),(n._paper._page=n)._matrix=Raphael.matrix(1,0,0,1,0,0),n._matrix.translate(-n.offset().left,-n.offset().top),n._grips=new Atalasoft.Annotations.Grips(n,x);var t=function(){nt(n)};return n.bind("mousedown",t),Atalasoft.Utils.Browser.Features.Touch&&n.bind("touchstart",t),n.bind({pageresize:function(t){var e;t.page=n,(e=t).page._paper.setSize(e.width,e.height),e.page._paper.canvas.style.width=e.width,e.page._paper.canvas.style.height=e.height,W(e.page)},pagezoom:function(t){var e;t.page=n,e=t,isFinite(e.width)&&isFinite(e.height)&&e.width&&e.height&&(x.zoom=e.zoom,e.page._paper.setSize(e.width,e.height),e.page._paper.canvas.style.width=e.width,e.page._paper.canvas.style.height=e.height,e.page._paper.forEach(function(t){if(t&&t.transform&&!t.grip){void 0!==t._linewidth&&t.attr("stroke-width",t._linewidth*x.zoom);var e=t.attr("clip-rect");"object"===(void 0===e?"undefined":_typeof(e))&&"number"==typeof e.length&&t.attr("clip-rect",e)}}),W(e.page))}}),!0}return!1},a.removeDrawingSurface=function(t){if(t instanceof jQuery)return t._paper&&(t._paper._annos=null,t._paper._page=null,t._paper=null),t._matrix=null,!(t._grips=null);return!1},a.insertLayer=k,a.removeLayer=P,a.moveLayer=T,a.showLayer=V,a.clear=L,a.createAnnotation=H,a.deleteAnnoOnPage=G,a.drawAnnotation=at,a.getAnnosFromPage=Z,a.setStamps=Y,a.setAnnotationDefaults=X,a.setImages=$,a.setCustom=K,a.dispose=function(){f=d=u=p=l=r=w=s=a=null,x.annos.length=0,x.activepage=null,x.activeanno=null,x.zoom=null,o.dispose(),o=null},
/**
    * [Internal] Gets debug info object
    * @returns debug info object if available, otherwise null
    */
a.__getDebugInfo=function(){var t={};return _.extend(!0,t,{data:x,defaults:h,drawing:v,drawready:y,matrix:g,menu:u,menuconfig:d,pages:l,props:f,viewport:p}),t}
/**
    * [Internal] Links the annotation data between two controls
    * @param linker internal object of type __LVlinker
    * @returns undefined
    */,a.__linkAnnotations=function(t){t&&(t._annos?_.isArray(t._annos)&&(x.annos=t._annos):t._annos=x.annos)}
/**
     * [Internal] Clears all selection of annotations
     */,a.__clearAllSelection=nt,a.setViewPort=function(t){t&&(t instanceof jQuery||(t=_(t)),p=t)},a.stringifyChanges=function(t){var e=[];for(var n in x.annos)if(x.annos.hasOwnProperty(n)){e[n]={items:[]};var a=0,o=w.getPageScale(n),i=Raphael.matrix();if(w._config.persistrotation){a=w.getPageRotation(n),i=w.getViewerTransform(n);var r=1/o;i.scale(r,r,0,0),i.e*=r,i.f*=r}for(var s in x.annos[n])if(x.annos[n].hasOwnProperty(s)){var l=_.extend(!0,{},x.annos[n][s].get());if(l.rotation||a){var c=x.annos[n][s].getBox(),p=c.width/2,u=c.height/2,d=Raphael.matrix(),f=x.annos[n][s].getTransform();d.add(i.a,i.b,i.c,i.d,i.e,i.f),d.add(f.a,f.b,f.c,f.d,f.e,f.f);var g={x:d.x(c.x+p,c.y+u),y:d.y(c.x+p,c.y+u)},h=g.x-p-c.x,v=g.y-u-c.y;if(l.points)for(var y=0;y<l.points.length;y++)if("line"===l.type){var m=d.x(l.points[y].x,l.points[y].y);l.points[y].y=d.y(l.points[y].x,l.points[y].y),l.points[y].x=m}else l.points[y].x+=h,l.points[y].y+=v;else"custom"!==l.type&&l.points||(l.x+=h,l.y+=v);l.rotation="line"!==l.type?(l.rotation+a)%360:0}vt(e[n].items[s]=l)}}return JSON.stringify(e)},a.stringifyAnnotationData=ht,a.createHandlerRequest=yt,a.makeHandlerRequest=mt,a.loadAnnotationsUrl=function(t,e,n,a,o,i,r){var s=Array.prototype.slice.call(arguments);"function"!=typeof(r=s.pop())&&s.push(r);t=s.shift(),e=s.shift(),n=s.shift(),a=s.shift(),o=s.shift(),i=s.shift();var l=yt(t,e,n,a,o);void 0!==i&&(l.info.docIndex=i);mt(l,0<=a&&1<=o,r)},a.loadAnnotations=_t};
"use strict";Atalasoft.Annotations.Grips=function(s,t){var d,a=Atalasoft.$,x=8,h=25,o=-22.5,u={e:0,ne:315,n:270,nw:225,w:180,sw:135,s:90,se:45},y={},f={},g=t,c=s._paper.set(),p=s._paper.set(),l=[],v=null,m={},w=null,b={x:0,y:0,width:1,height:1,x2:1,y2:1},e={dragstart:function(){},dragmove:function(){c.hide()},moved:function(){k(),c.show();for(var t=0;t<l.length;++t){var e=l[t].get();e.hasOwnProperty("rotatable")&&!e.rotatable&&v.hide()}}};function O(t,e){return t.attr({fill:"#FFFFE1",cursor:(e||"ne")+"-resize"}),t.grip=!0,t.rect=t.getBBox(),t.hide(),t.center=function(t,e,r,n){var i=x/(r=r||1),a=x/r,o=i/2,s=Math.round(i/2)+.5,h=Math.round(a/2)+.5;Atalasoft.Utils.Browser.Explorer&&(h-=.5);var u=Math.round(t)-s,d=Math.round(e)-h;this.ellipse?(u+=o,this.attr({cx:u,cy:d,r:o,"stroke-width":1})):this.attr({x:u,y:d,width:i,height:a,"stroke-width":1}),this.node.setAttribute("stroke-width",1),this.transform(n)},e&&(t.d={key:e,n:~e.indexOf("n"),s:~e.indexOf("s"),w:~e.indexOf("w"),e:~e.indexOf("e")},t.mousedown(function(t){return function(t,e){if(t.stopPropagation(),1<l.length)return;for(var r=0;r<l.length;r++)if(!l[r].get("resizable"))return;a.extend(m,b),w=u[e.key]===u.n||u[e.key]===u.s?1:0,d=u[e.key]===u.w||u[e.key]===u.e?1:0,(e.n||1===d)&&(m.y=m.y2);e.w&&(m.x=m.x2);return a(s._paper.canvas).bind({mouseup:B,mousemove:F}),!1}(t,this.d)})),t}function r(t){return-1!==a.inArray(t,l)}function n(){for(var t=0;t<l.length;t++)i(l[t]);l.length=0,p.clear(),c.hide()}function i(t){t.getEventObject().unbind(e)}function k(){0<p.length?_():0<l.length?n():c.hide()}function P(t){for(var e in u)u.hasOwnProperty(e)&&z(c[u[e]],t)}function _(){if(0<p.length){var t=1===p.length?l[0].getBox():p.getBBox();b.x=t.x,b.y=t.y,b.width=t.width,b.height=t.height,b.x2=t.x+t.width,b.y2=t.y+t.height,b.xmid=t.x+t.width/2,b.ymid=t.y+t.height/2,M()}}function M(){var t=1===p.length,e=Raphael.matrix(),r=1,n="",i=g.getViewerTransform(s._index);if(e.add(i.a,i.b,i.c,i.d,i.e,i.f),t){var a=l[0].getTransform();a&&e.add(a.a,a.b,a.c,a.d,a.e,a.f),r=g.getZoom(s._index),n=e.toTransformString(!0)}c[u.nw].center(b.x,b.y,r,n),c[u.ne].center(b.x2,b.y,r,n),c[u.sw].center(b.x,b.y2,r,n),c[u.se].center(b.x2,b.y2,r,n),c[u.n].center(b.xmid,b.y,r,n),c[u.w].center(b.x,b.ymid,r,n),c[u.e].center(b.x2,b.ymid,r,n),c[u.s].center(b.xmid,b.y2,r,n);var o=l[0].get();o.rotatable||!o.hasOwnProperty("rotatable")?(v.show(),v.center(b.xmid,b.y-h/r,r,n)):v.hide(),P((1===l.length?l[0].get().rotation:0)+g.getPageRotation(s._index))}function j(t){var e=s.offset(),r=Atalasoft.Utils.getSVGOffset(s._paper.canvas,s);return{x:t.pageX-(e.left+r.left),y:t.pageY-(e.top+r.top)}}function A(t){t.stopPropagation();var e,r,n,i=(e=j(t),r=g.getViewerTransform(s._index).invert(),n=r.x(e.x,e.y),e.y=r.y(e.x,e.y),e.x=n,e),a=180*Math.atan2(i.y-m.ymid,i.x-m.xmid)/Math.PI+90;return 1===l.length&&(l[0].set({rotation:a}),l[0].repaint()),s._grips.repaint(),!1}function E(t){return t.stopPropagation(),a(s._paper.canvas).unbind({mouseup:E,mousemove:A}),1===l.length&&l[0].getEventObject().trigger("rotated"),!1}function F(t){if(t.stopPropagation(),1===p.length){var e=function(t){if(0<p.length){var e="set"===p[0].type?p[0][0]:p[0],r=e.matrix.invert(),n={x:r.x(t.x,t.y),y:r.y(t.x,t.y)};return n}return t}(j(t)),r=Math.abs(e.x-m.x),n=Math.abs(e.y-m.y),i=e.x<m.x?m.x-r:m.x,a=e.y<m.y?m.y-n:m.y;o=i,s=a,h=r,u=n,0===w&&(b.x=o,b.width=Math.max(h,1),b.x2=o+b.width,b.xmid=o+b.width/2),0===d&&(b.y=s,b.height=Math.max(u,1),b.y2=s+b.height,b.ymid=s+b.height/2),M(),function(){for(var t=0;t<l.length;t++)l[t].transform(b.x,b.y,b.width,b.height)}()}var o,s,h,u;return!1}function B(t){t.stopPropagation();for(var e=0;e<l.length;e++)l[e].getEventObject().trigger("resized"),l[e].getEventObject().trigger("annoresized"),l[e].repaint();return 0<p.length&&_(),a(s._paper.canvas).unbind({mouseup:B,mousemove:F}),!1}function z(t,e){if(t&&t.d&&t.d.key){var r=Raphael.matrix();r.rotate(e);var n={x:r.x(y[t.d.key].x,y[t.d.key].y),y:r.y(y[t.d.key].x,y[t.d.key].y)};for(var i in f)if(f.hasOwnProperty(i)&&R(n,f[i].start,f[i].end)){t.attr({cursor:(f[i].dir||"ne")+"-resize"});break}}}function R(t,e,r){function n(t,e){return 0<-t.x*e.y+t.y*e.x}return!n(e,t)&&n(r,t)}!function(){var t;for(var e in u)if(u.hasOwnProperty(e)){var r=s._paper.rect(0,0,x,x),n=O(r,e);c.push(n),c[u[e]]=n,(t=Raphael.matrix()).rotate(u[e]),y[e]={x:t.x(1,0),y:t.y(1,0)}}i=O(s._paper.circle(0,0,x/2)).attr({fill:"#00FF40",cursor:"pointer"}),i.ellipse=!0,c.push(i),i.mousedown(function(t){return function(t){if(t.stopPropagation(),1===l.length&&1===p.length){for(var e=0;e<l.length;e++){var r=l[e].get();if(r.hasOwnProperty("rotatable")&&!r.rotatable)return}a.extend(m,b);var n=l[0].getTransform(),i=n.x(m.xmid,m.ymid);m.ymid=n.y(m.xmid,m.ymid),m.xmid=i,a(s._paper.canvas).bind({mouseup:E,mousemove:A})}}(t)}),v=i,function(){var n=Raphael.matrix();n.rotate(o,0,0);for(var t=function(t,e){var r={dir:e,start:{x:n.x(y[t].x,y[t].y),y:n.y(y[t].x,y[t].y)},end:{x:n.x(y[e].x,y[e].y),y:n.y(y[e].x,y[e].y)}};return r},e=["e","ne","n","nw","w","sw","s","se"],r=0;r<e.length-1;++r)0===r&&(f[e[r]]=t(e[e.length-1],e[r])),f[e[r+1]]=t(e[r],e[r+1])}();var i}(),this.push=function(t){r(t)||(l.push(t),p.push(t.getObject()),!0===t.get("selectable")&&t.getEventObject().bind(e),k(),c.toFront(),c.show())},this.contains=r,this.remove=function(t){for(var e=0;e<l.length;e++)l[e]===t&&l.splice(e,1);p.exclude(t.getObject()),i(t)},this.clear=n,this.repaint=k,this.updateCursor=P};
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Atalasoft.Annotations.AnnotationSelector=function(e,n){var u=Atalasoft.$,t=this,o=e,r=n,a=[];function i(e,n,t,o){var r,i,l=[].concat(n),f=null;(f=s(t))===t&&null!==f&&(t=f._index),o||g(f||t);for(var c=0;c<l.length;c++)r=l[c],0<=(i=u.inArray(r,a[t]))?e||a[t][i]!==r||a[t].splice(i,1):e&&(a[t]?a[t].push(r):a[t]=[r]),f&&(e?f._grips.push(r):f._grips.remove(r)),r.get("selected")!==e&&r.toggleSelected({append:!0,pageindex:t,page:f})}function l(e,n){var t="object"===(void 0===n?"undefined":_typeof(n))?n._index:n;o[t]&&i(e,o[t],n,!0)}function f(e){for(var n=[],t=0;t<e.length;t++)if(e[t]){n[t]=[];for(var o=0;o<e[t].length;o++)n[t][o]=e[t][o].getClonedData()}return n}function s(n){var e=null;if("object"===(void 0===n?"undefined":_typeof(n)))e=n;else{n=Math.max(n,0);var t=u.grep(r,function(e){return e._index===n});1<=t.length&&(e=t[0])}return e}function c(e){l(!0,e)}function g(e){l(!1,e);var n=s(e);n&&n._grips&&n._grips.repaint()}t.dispose=function(){r=o=t=null,a.length=0},t.select=function(e,n,t){i(!0,e,n,t)},t.deselect=function(e,n,t){i(!1,e,n,t)},t.setAnnos=function(e){o=e},t.setPages=function(e){r=e},t.resolvePage=s,t.deselectAll=function(){for(var e=0;e<o.length;e++)g(e)},t.deselectPage=g,t.getAnnotations=
/**
    * Gets an array of all annotation data objects.
    * @returns array of arrays containing annotation data objects for each page of the document.
    */
function(){return f(o)},t.getSelected=function(){return f(a)},t.selectAll=function(){for(var e=0;e<o.length;e++)c(e)},t.selectPage=c};
"use strict";Atalasoft.Annotations.Annotation=function(t,e){var n=Atalasoft.$,a=e,i=this,o=new Atalasoft.Annotations.EventHelper(i),l=null,r=null,s=null,u=null,d=null,c=null,p=null,f=null,b=t.multiview?t:{
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
transform:Raphael.matrix(),
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
extra:{}},h={highlight:{readonly:!0,fill:{color:"yellow",opacity:.5},outline:{opacity:0}},image:{readonly:!0,fill:{color:null},outline:{opacity:0}},rectangle:{fill:{opacity:0}},stamp:{readonly:!0,cornerradius:0,text:{autoscale:!0}},line:{fill:{color:null},outline:{opacity:1,startcap:{width:"medium",height:"medium",style:"none"},endcap:{width:"medium",height:"medium",style:"none"}}},lines:{fill:{color:null},outline:{opacity:1}},freehand:{fill:{color:null},outline:{opacity:1}},ellipse:{},fillrect:{},polygon:{},text:{}},y={};function g(){o.bind.apply(o,arguments)}function m(){return o.trigger.apply(o,arguments),i}function v(){var e=Raphael.matrix(),t=O();e.rotate(b.rotation,t.x,t.y),b.transform=e}function x(){var e,t,n=O(),a=(e=z(),t=n,{x:e.x(t.x,t.y),y:e.y(t.x,t.y)});a.x===n.x&&a.y===n.y||R(a.x-n.x,a.y-n.y)}function w(e,t){if(e){var n=b.rotation;e.hasOwnProperty("rotation")&&(e.rotation=(e.rotation+360)%360),A(e,t),n!==b.rotation&&function(e,t){var n=(e-t+360)%360,a=Raphael.matrix(),i=z();a.add(i.a,i.b,i.c,i.d,i.e,i.f);var o=O();a.rotate(n,o.x+o.width/2,o.y+o.height/2);var l=a.x(o.x,o.y),r=a.y(o.x,o.y);R(l-o.x,r-o.y),v()}(b.rotation,n)}}function A(e,t){t?n.extend(!0,b,e):n.extend(b,e)}function z(){return b.transform}function B(){p={update:function(e){b.selected!==p.selected&&T();var t=!1;e||(t=function e(t,n,a){if(t!==n)return!!t;for(var i in t)if(t.hasOwnProperty(i)){if("extra"===i)continue;if(n.hasOwnProperty(i)){if("points"===i){if(t.points===n.points)return!t.points;if(t.points.length!==n.points.length)return!0;for(var o=0;o<t.points.length;o++)if(e(t.points[o],n.points[o],[]))return!0}if(-1<a.indexOf(i)){if(e(t[i],n[i],V[i]))return!0}else if(t[i]!==n[i])return!0}}return!1}(p,b,["fill","outline","text"]),w(p,!0)),b.update&&delete b.update,b.getPageIndex&&delete b.getPageIndex,C(),j(),null!==l&&(b.selectable?(y.isBound("selectable")||(o.bind(y.selectable),y.bound("selectable")),b.movable&&!y.isBound("movable")?(o.bind(y.movable),y.bound("movable")):!b.movable&&y.isBound("movable")&&(o.unbind(y.movable),y.unbound("movable")),Atalasoft.Utils.Browser.Features.Touch&&(b.resizable&&!y.isBound("resizable")?(o.bind(y.resizable),y.bound("resizable")):!b.resizable&&y.isBound("resizable")&&(o.unbind(y.resizable),y.unbound("resizable")))):!b.selectable&&y.isBound("selectable")&&(o.unbind(y.selectable),y.unbound("selectable"),o.unbind(y.movable),y.unbound("movable"),o.unbind(y.resizable),y.unbound("resizable"))),t&&m({type:"annotationchanged",ann:i})},getPageIndex:function(){return i._pageindex}},n.extend(!0,p,b)}function k(){return JSON.stringify(b)}function T(e){if(b){var t={ann:i,append:!0,page:null,pageindex:i._pageindex,type:""};e&&(t.append=e.shiftKey||e.ctrlKey||void 0!==e.append&&e.append,t.page=e.page,t.pageindex=e.pageindex),t.append||!b.selected?(b.selected=!b.selected,t.type=b.selected?"selected":"deselected"):b.selected&&!t.append&&(t.type="reselected"),""!==t.type&&m(t)}}function _(e){var t=null;switch(b.type){case"image":(t=e.image()).attr("src",b.src);break;case"highlight":case"rectangle":case"fillrect":case"text":case"stamp":t=e.rect();break;case"ellipse":case"line":case"lines":case"freehand":case"polygon":t=e.path();break;case"custom":t=c.construct(e)}return e._annos&&e._annos.push(t),t}function E(){null!==l&&(r?o.unbind(r,l):o.unbind(l));var e={};b.selectable&&(n.extend(e,y.selectable),y.bound("selectable"),!a.readonly&&b.movable&&(n.extend(e,y.movable),y.bound("movable")),!a.readonly&&b.resizable&&Atalasoft.Utils.Browser.Features.Touch&&(n.extend(e,y.resizable),y.bound("resizable"))),l=e,o.bind(r,e)}
/**
     * Returns bounding box of the annotation in document space.
    */
function O(){!f&&b.points&&(f=Atalasoft.Utils.__calcPathBounds(b.points));var e=b.points?f:b;return{x:e.x,y:e.y,width:e.width,height:e.height}}function R(e,t){if(b.points){for(var n=0;n<b.points.length;n++)b.points[n].x+=e,b.points[n].y+=t;f&&(f.x+=e,f.y+=t)}"custom"!==b.type&&b.points||(b.x+=e,b.y+=t),v(),P()}!function(){t.multiview||(e=t.type,n.extend(!0,b,h[e]));var e;A(t,!0),v(),"custom"===b.type&&(c=new Atalasoft.Annotations.AnnotationCustomRenderer(b,o));g({repaint:(d=new Atalasoft.Annotations.DrawHandler(b,a,o,i,c)).events.update,viewchanged:d.events.viewchanged,drawn:E,resized:x}),b.points&&(0<b.x||0<b.y)&&(R(b.x,b.y),b.x=0,b.y=0,b.width=1,b.height=1);y={selectable:{selectchange:T},movable:{dragstart:d.events.dragstart,dragmove:d.events.dragmove,dragend:d.events.dragend},resizable:{pinchstart:d.events.pinchstart,pinchmove:d.events.pinchmove,pinchend:d.events.pinchend},boundEvents:{resizable:!1,movable:!1,selectable:!1},isBound:function(e){return this.boundEvents[e]},bound:function(e){this.boundEvents[e]=!0},unbound:function(e){this.boundEvents[e]=!1}}}(),i.dispose=function(){b.selected&&T();o&&o.unbind();r&&r.remove();s&&s.dispose();u&&u.remove();d&&d.unbindEvents();b=u=s=r=o=i=a=d=null},i.bind=g,i.unbind=function(){o.unbind.apply(o,arguments)},i.trigger=m,i.set=w,i.get=function(e){return e?b[e]:b},i.getTransform=z,i.getClonedData=function(){p?n.extend(!0,p,b):B();return delete p.transform,p},i.getObject=function(){return r},i.getEventObject=function(){return o},i.getZoom=function(){return a.getZoom(i._pageindex)},i.stringify=k,i.getJSON=k,i.toggleSelected=T,i.isCloneSource=function(e){return p&&p===e},i.getBox=O,i.translate=R,i.transform=function(e,t,n,a){var i=O(),o=n/i.width,l=a/i.height;if(b.points&&0<b.points.length&&"custom"!==b.type){for(var r=0;r<b.points.length;r++)b.points[r].x=e+(b.points[r].x-i.x)*o,b.points[r].y=t+(b.points[r].y-i.y)*l;f.x=e,f.y=t,f.width*=o,f.height*=l}else b.x=e,b.y=t,b.width*=o,b.height*=l;m({type:"annoresizing"}),P()},i.transformUI=function(){d.transformUI.apply(d,arguments)};var U=!(i.commitTransform=function(){d.commitTransform()}),I=Atalasoft.Utils.Browser.Explorer?20:5;function P(){U||(U=!0,setTimeout(S,I))}function S(){U=!1,j()}function j(e){e&&(u&&(u=null),r=_(e),c&&c.render(r,b),C(),E(),"text"!==b.type&&"stamp"!==b.type||null!==s||(s=new Atalasoft.Annotations.TextAnnotationUI(i,e,a)),s&&s.changepaper(e),m({type:"viewchanged",annview:r,textview:s})),m("repaint")}function C(){if(r){var e={fill:b.fill.color,"fill-opacity":b.fill.opacity};n.extend(e,function(){var e={stroke:b.outline.color,"stroke-width":b.outline.width*a.getZoom(i._pageindex),"stroke-opacity":b.outline.opacity};r._linewidth=b.outline.width,Raphael.fn.addArrow||(b.outline.startcap&&(e["arrow-start"]=D(b.outline.startcap)),b.outline.endcap&&(e["arrow-end"]=D(b.outline.endcap)));return e}()),r.attr(e),Raphael.fn.addArrow&&(b.outline.startcap&&Raphael.fn.addArrow(r,D(b.outline.startcap),!1),b.outline.endcap&&Raphael.fn.addArrow(r,D(b.outline.endcap),!0)),b.visible?r.show():r.hide()}s&&(s.set(b.text),s.updateView()),r&&r.node&&""!==b.src&&"image"===b.type&&("unknown"!=typeof r.node.src&&r.node.src?r.node.src=b.src:r.node.href.baseVal=b.src)}function D(e){return[e.style,"-",e.width,"-",e.height].join("")}i.startDraw=function(e,t,n){w(n),(r=_(t)).transform(d.getTransform()),("text"===b.type||"stamp"===b.type)&&(s=new Atalasoft.Annotations.TextAnnotationUI(i,t,a));C(),d.drawStart(e,r,s)},i.repaint=j,i.updateView=C;var V={fill:[],outline:["startcap","endcap"],text:["font"],font:[],startcap:[],endcap:[]};return i};
"use strict";Atalasoft.Annotations.EventHelper=function(t){var e=Atalasoft.$,n=this,o=e({}),r=t,u=null,i={target:null,mx:null,my:null,px:null,py:null,dx:null,dy:null};function c(t){i.px=i.mx,i.py=i.my,t.originalEvent?(i.mx=t.originalEvent.targetTouches[0].pageX,i.my=t.originalEvent.targetTouches[0].pageY):(i.mx=t.targetTouches[0].pageX,i.my=t.targetTouches[0].pageY),i.dx=i.mx-i.px,i.dy=i.my-i.py}function l(t){i.px=i.mx,i.py=i.my,i.mx=t.screenX,i.my=t.screenY,i.dx=i.mx-i.px,i.dy=i.my-i.py}function a(){o.trigger.apply(o,arguments)}function p(t){a({type:"interactstart",target:r})}function s(t){a({type:"interactend",target:r})}function y(t,n,e,o,r){(t||n)&&(Atalasoft.Utils.Browser.Features.Touch&&r.target!==i.target||(null===i.px&&f(null,null,r),r.touches?c(r):l(r),a({type:"dragmove",dx:i.dx,dy:i.dy,mx:i.mx,my:i.my,originalEvent:r})))}function f(t,n,e){i.target=e.target,p(),e.touches?c(e):l(e),a({type:"dragstart",mx:i.mx,my:i.my,originalEvent:e})}function g(t){Atalasoft.Utils.Browser.Features.Touch&&t.target!==i.target||(i.target=null,i.px=null,i.py=null,i.mx=null,i.my=null,a({type:"dragend",originalEvent:t}))}function m(){a("hoverin")}function h(){a("hoverout")}function d(t){a(t)}function x(t){a(t)}function v(t){i.px=null,i.py=null,a(t)}function b(t){a(t)}function w(t){a(t)}function A(t){a(t)}function E(t){a(t)}function T(t){a(t)}function R(t){a(t),1===t.which?a("mousedownleft"):3===t.which&&a("mousedownright")}function k(t){a(t)}function X(t){a(t)}function Y(t){a(t)}function B(t){a(t),3===t.which&&a("rightclick")}function F(t){a(t)}function H(t){a(t)}function U(t){a(t)}(u=new Atalasoft.Annotations.PointerHandler).bind({click:E,dblclick:T,mousedown:R,mousemove:k,mouseover:Y,mouseout:X,mouseup:B,touchmove:F,touchstart:U,interactstart:p,interactend:s,pinchstart:d,pinchmove:x,pinchend:v,selectchange:b,contextmenu:w,showeditor:A,annoresized:H}),n.bind=function(t){var n=arguments;!t||t.constructor.prototype!==Raphael.el&&t.constructor.prototype!==Raphael.st||(t.drag(y,f,g),t.hover(m,h),"set"!==t.type?e(t[0]).bind(u.events):t.forEach(function(t){e(t[0]).bind(u.events)}),n=Array.prototype.slice.call(n,1));0<n.length&&o.bind.apply(o,n)},n.unbind=function(t){var n=arguments;!t||t.constructor.prototype!==Raphael.el&&t.constructor.prototype!==Raphael.st?null===t&&1<n.length&&(n=Array.prototype.slice.call(n,1)):(t.undrag(),t.unhover(m,h),"set"!==t.type?e(t[0]).unbind(u.events):t.forEach(function(t){e(t[0]).unbind(u.events)}),n=Array.prototype.slice.call(n,1));o.unbind.apply(o,n)},n.trigger=a};
"use strict";Atalasoft.Annotations.DrawHandler=function(t,e,n,a,i){var r=Atalasoft.$,o=this,u=t,s=e,p=n,l=null,h=null,c=i,y=a,d=null,x=null,f=null,g=null,v=function(){},m=function(){};function w(t){var e=Atalasoft.Utils.getMousePositionJquery(t);if(l.paper){var n=Atalasoft.Utils.getSVGOffset(l.paper.canvas,l.paper._page);e.x-=n.left,e.y-=n.top}return e}function _(t){var e=s.getViewerTransform(y._pageindex).invert(),n=e.x(t.x,t.y);return t.y=e.y(t.x,t.y),t.x=n,t}function b(){p.trigger.apply(p,arguments)}function M(t,e,n){l=e,h=n,t.stopPropagation(),t.preventDefault();var a=_(w(t));u.visible=!0,x={x:a.x,y:a.y},u.x=Math.round(a.x),u.y=Math.round(a.y),u.width=1,u.height=1,m="path"===l.type&&"custom"!==u.type?"ellipse"!==u.type?(u.points=[{x:u.x,y:u.y}],"lines"!==u.type&&"polygon"!==u.type||u.points.push({x:u.x,y:u.y}),u.x=0,u.y=0,v=T,R):(v=U,D):(v=U,V),C(),(d={events:Atalasoft.Utils.Browser.Features.Touch?{touchend:P,touchmove:B,mouseup:P,mousemove:B}:{mouseup:P,mousemove:B},src:r(t.srcElement||t.target),main:r(t.currentTarget)}).src.bind(d.events),d.main.bind({mouseup:P})}function A(){d&&(d.src.unbind(d.events),d.main.unbind({mouseup:P}))}function B(t){t.stopPropagation(),v(t),C()}function T(t){var e=_(w(t));switch(u.type){case"line":u.points[1]=e;break;case"freehand":u.points.push(e);break;case"lines":case"polygon":u.points[u.points.length-1]=e}"path"===l.type&&("ellipse"===u.type?X():Y(),l._&&0===l._.dirty&&(l._.dirty=1))}function U(t){var e=_(w(t)),n=x.x,a=x.y,i=Math.max(Math.abs(e.x-x.x),1),r=Math.max(Math.abs(e.y-x.y),1);0<u.aspectratio&&(Math.abs((e.y-x.y)/(e.x-x.x))>1/u.aspectratio?i=Math.round(r/u.aspectratio):r=Math.round(i/u.aspectratio));e.x<x.x&&(n=x.x-i),e.y<x.y&&(a=x.y-r),u.x=n,u.y=a,u.width=i,u.height=r}function P(t){t.stopPropagation();var e=!1;if("lines"===u.type||"polygon"===u.type){if(s.activepage._index!==y._pageindex)return;if(u.points.push(_(w(t))),2!==t.button)return}else u.points?u.points&&u.points.length<2&&"custom"!==u.type&&(e=!0):(u.width<4&&u.height<4&&(u.width=100,u.height=100),C());A(),d=null,b(e?"cancelled":"drawn")}function C(){m(),l&&l.transform(E()),h&&h.repaint()}function E(){var t=Raphael.matrix(),e=s.getViewerTransform(y._pageindex),n=y.getTransform();return t.add(e.a,e.b,e.c,e.d,e.e,e.f),t.add(n.a,n.b,n.c,n.d,n.e,n.f),t.toTransformString()}function V(){l.attr({x:u.x,y:u.y,width:u.width,height:u.height}),c&&c.render(l,u),Atalasoft.Utils.Browser.Features.VML&&l.transform(E())}function D(){X(),l._&&0===l._.dirty&&(l._.dirty=1)}function R(){Y(),l._&&0===l._.dirty&&(l._.dirty=1)}o.events={drawstart:M,drawmove:B,drawend:P,dragstart:function(t){if(s.readonly)return;t.originalEvent.stopPropagation();var e=y.getBox();x={x:e.x,y:e.y}},dragmove:function(t){if(s.readonly)return;t.originalEvent.stopPropagation();var e=_({x:0,y:0}),n=_({x:t.dx,y:t.dy});y.translate(n.x-e.x,n.y-e.y),b("moving")},dragend:function(t){if(s.readonly)return;t.originalEvent.stopPropagation();var e=y.getBox();if(l.paper&&l.paper._page){var n=l.getBBox(),a={x:0,y:0,width:l.paper._page.width(),height:l.paper._page.height()};if(!(k(i=a,(r=n).x,r.y)||k(i,r.x+r.width,r.y)||k(i,r.x,r.y+r.height)||k(i,r.x+r.width,r.y+r.height)))return void y.translate(x.x-e.x,x.y-e.y)}var i,r;x.x===e.x&&x.y===e.y||b("moved")},update:function(t){C()},viewchanged:function(t){l=t.annview,h=t.textview,m="path"===l.type&&"custom"!==u.type?"ellipse"!==u.type?(v=T,R):(v=U,D):(v=U,V)},pinchstart:function(t){if(u.points||s.readonly)return;var e=_({x:t.touches[0].clientX,y:t.touches[0].clientY}),n=_({x:t.touches[1].clientX,y:t.touches[1].clientY}),a=y.getBox();g={start:Atalasoft.Utils.CalcDistance(e.x,e.y,n.x,n.y),rect:a}},pinchmove:function(t){if(!g)return;var e=_({x:t.touches[0].clientX,y:t.touches[0].clientY}),n=_({x:t.touches[1].clientX,y:t.touches[1].clientY}),a=Atalasoft.Utils.CalcDistance(e.x,e.y,n.x,n.y,g.start),i=a.x-g.start.x,r=a.y-g.start.y,o=g.rect.x-a.dx,s=g.rect.y-a.dy,p=g.rect.width+i,h=g.rect.height+r;u.points?y.transform(o,s,p,h):(u.x=o,u.y=s,u.width=p,u.height=h);l.paper&&l.paper._page&&l.paper._page._grips&&l.paper._page._grips.repaint();C()},pinchend:function(t){b("resized"),b("annoresized"),g=null}},o.drawStart=M,o.unbindEvents=A,o.repaint=C,o.getTransform=E;var S=.5522847498307936;function X(){var t=u.width/2,e=u.height/2,n=S*t,a=S*e,i=u.x+u.width/2,r=u.y+u.height/2,o=["M",i,r-e,"C",i+n,r-e,i+t,r-a,i+t,r,"C",i+t,r+a,i+n,r+e,i,r+e,"C",i-n,r+e,i-t,r+a,i-t,r,"C",i-t,r-a,i-n,r-e,i,r-e,"Z"];l.attr({path:o})}function Y(){if(u.points&&0!==u.points.length){for(var t=["M",u.points[0].x,u.points[0].y],e=1;e<u.points.length;e++)t=t.concat(["L",u.points[e].x,u.points[e].y]);"polygon"===u.type&&t.push("Z"),l.attr({path:t}),
/**
    * Work around outlined by this post:
    * http://stackoverflow.com/questions/15693178/svg-line-markers-not-updating-when-line-moves-in-ie10
    */
function(){if(Atalasoft.Utils.Browser.Explorer){var t=parseInt(Atalasoft.Utils.Browser.Version,10);10<=t&&t<12&&l.node&&l.node.parentNode&&l.node.parentNode.insertBefore(l.node,l.node)}}()}}o.commitTransform=function(){r.extend(u,(t=f,e=s.getZoom(y._pageindex),n=t.split(),{x:n.dx/e,y:n.dy/e,width:n.scalex/e,height:n.scaley/e})),l.transform(E()),C(),Z=null;var t,e,n},o.transformUI=function(t,e,n,a){f=Raphael.matrix(n,0,0,a,t,e),Z||(Z=function(t,e){var n;if(t.points&&1<t.points.length){var a=y.getBox();(n=Raphael.matrix(1,0,0,1,0,0)).scale(1/a.width,1/a.height,0,0),n.translate(-a.x,-a.y)}else(n=Raphael.matrix(e,0,0,e,0,0)).translate(t.x,t.y),n.scale(t.width,t.height,0,0);return n}(u,1));f.add(Z.a,Z.b,Z.c,Z.d,Z.e,Z.f),l.transform(f.toTransformString()),h&&h.repaint()};var Z=null;function k(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height}};
"use strict";
/**
* Mouse and Touch event handler for annotations
* @private
*/Atalasoft.Annotations.PointerHandler=function(){var t=Atalasoft.$,e=this,n=t({}),o={drawing:!1,hold:null,pinching:!1,tapped:!1,touching:!1,delta:{x:0,y:0},origin:{x:0,y:0},point:{x:0,y:0},moves:0,e:null};function i(){n.trigger.apply(n,arguments)}function u(){i({type:"interactstart"})}function a(){i({type:"interactend"})}function c(t){if(o.e=t,u(),i(t),2===t.originalEvent.touches.length&&function(t){for(var e=null,n=0;n<t.length;n++){var o=t[n].target;if(!o||!o.raphael&&!o.raphaelParent)return!1;if(null===e)e=o;else if(e!==o)return!1}return!0}(t.originalEvent.touches))l(),o.touching=!1,(n=t).stopPropagation(),n.preventDefault(),o.pinching=!0,i({type:"pinchstart",touches:n.originalEvent.touches});else if(1===t.originalEvent.touches.length){i("selectchange"),o.touching=!0;var e=Atalasoft.Utils.getMousePositionJquery(t);o.point.x=e.x,o.point.y=e.y,o.hold=setTimeout(s,1500)}var n}function r(){o.tapped=!1}function s(){if(0<o.moves&&null!==o.e){var t=Atalasoft.Utils.getMousePositionJquery(o.e);Math.abs(o.point.x-t.x)<5&&Math.abs(o.point.y-t.y)<5&&(o.moves=0)}0===o.moves&&o.touching&&o.e&&(o.touching=!1,i({type:"contextmenu",x:o.e.originalEvent.touches[0].pageX,y:o.e.originalEvent.touches[0].pageY}))}function l(){null!==o.hold&&(clearTimeout(o.hold),o.hold=null)}e.events={click:function(t){i(t)},dblclick:function(t){i(t);var e=Atalasoft.Utils.getMousePositionJquery(t);i({type:"showeditor",x:e.x,y:e.y})},mousedown:function(t){u(),i(t),i({type:"selectchange",shiftKey:t.shiftKey,ctrlKey:t.ctrlKey}),3===t.which&&i({type:"contextmenu",x:t.pageX,y:t.pageY,event:t});return!1},mousemove:function(t){i(t)},mouseout:function(t){i(t)},mouseover:function(t){i(t)},mouseup:function(t){i(t),a()}},Atalasoft.Utils.Browser.Features.Touch&&t.extend(!0,e.events,{touchstart:c,touchmove:function(t){i(o.e=t),o.pinching?((e=t).stopPropagation(),e.preventDefault(),i({type:"pinchmove",touches:e.originalEvent.touches})):o.moves++;var e},touchend:function(t){i(o.e=t),o.pinching?((n=t).stopPropagation(),n.preventDefault(),o.pinching=!1,i({type:"pinchend",touches:n.originalEvent.touches}),1===n.originalEvent.touches.length&&c(n)):o.touching&&(o.touching=!1,l(),o.moves=0,o.tapped?(e=t,o.e=e,i({type:"showeditor",x:o.point.x,y:o.point.y})):(o.tapped=!0,setTimeout(r,300)));var e;var n;a()}}),e.bind=function(){return n.bind.apply(n,arguments),e},e.unbind=function(){return n.unbind.apply(n,arguments),e},e.trigger=i};
"use strict";Atalasoft.Annotations.FontUI=function(t,n){var o=Atalasoft.$,i=this,e=n,r={bold:!1,italic:!1,strike:!1,underline:!1,color:"#000000",family:"Arial",size:12},l=1,s=1,u=1,a=Atalasoft.Utils.Browser.Mobile.Any()?18:8;function c(t){t&&o.extend(r,t),f()}function f(t,n,o){(t=t||e)&&(n=void 0!==n?n:l,o||m(),d(t,n))}function d(t,n){var o="none";(r.strike||r.underline)&&(o=r.strike?"line-through ":"",o+=r.underline?"underline":""),t.css({color:r.color,"font-family":r.family,"font-style":r.italic?"italic":"normal","font-weight":r.bold?"bold":"normal","font-size":r.size*(n||1)+"pt","text-decoration":o})}function m(){var t=(document.width||window.outerWidth)/window.innerWidth;u!==t&&(u=t),l=r.size*s<a?a/u/r.size:s}c(t),i.dispose=function(){r=e=i=null},i.set=c,i.get=function(t){return t?r[t]:r},i.repaint=f,i.applyTo=d,i.getAdjustedZoom=function(){return m(),l},i.getUserZoom=function(){return m(),u},i.getZoom=function(){return s},i.setZoom=function(t){s=t,f()}};
"use strict";Atalasoft.Annotations.AnnotationTextRenderer=function(i,t){var f=Atalasoft.$,e=this,d=i,x=t,c=null,p=null,w=!1,v={" ":!0,"-":!0,"?":!0,"\n":!0,"\t":!0},l=null;function m(){!function(){var t,e=document.body;e.currentStyle?t=e.currentStyle.direction:window.getComputedStyle&&(t=document.defaultView.getComputedStyle(e,null).getPropertyValue("direction"));"rtl"===t.toLowerCase()&&(w=!0)}(),c=f("<canvas "+(w?'dir="rtl"':"")+"/>"),p=f('<span style="position:absolute; visibility:hidden; left: -5000px;">{[|,0123456789Thqkbfjplyg</span>'),f(document.body).append(p)}function a(t){c&&p||m(),x.applyTo(p),c[0].width=t.width,c[0].height=t.height;var e=c[0].getContext("2d"),n=function(t,e,n){var i=[];if("string"==typeof e){if(d.text.autoscale)return e.split("\n");for(var l=e,a=n,o=function(t){for(var e=[],n="",i=0,l=0;l<t.length;l++){var a=t[l];v[n]&&(e.push(t.substr(i,l-i)),i=l),n=a}i<l&&e.push(t.substr(i,l-i));return e}(l),r="",h="",u=[],s=0;s<o.length;s++)if(r=h,h=o[s],t.measureText(h).width>a)for(var g=h.split(""),x=0;x<g.length;x++)u.push(g[x]),t.measureText(u.join("")).width>a&&(u.pop(),i.push(u.join("")),u.length=0,u.push(g[x]));else u.push(h),(t.measureText(f.trim(u.join(""))).width>a||0<=r.indexOf("\n"))&&(u.pop(),i.push(u.join("")),u.length=0,u.push(h));0<u.length&&(i.push(u.join("")),u.length=0)}return i}(e,d.text.value,t.width),i=function(t){{if(d.text.autoscale){var e=Math.max(0,d.height-2*d.outline.width);return 0<t?Math.floor(e/t):e}return x.applyTo(p,1),p[0].offsetHeight}}(n.length),l=d.text.autoscale?i:d.text.font.size,a=[d.text.font.italic?"italic":"normal",d.text.font.bold?"bold":"normal",l+"px",d.text.font.family];e.font=a.join(" "),e.fillStyle=d.text.font.color,e.textBaseline="top";var o,r=0,h=n.length?n[0]:"";for(o=0;o<n.length;o++)n[o].length>h.length&&(h=n[o]);var u=e.measureText(h).width,s=w?u:0;if(d.text.autoscale&&"left"!==d.text.align)switch(d.text.align){case"center":e.textAlign=d.text.align,s=u/2;break;case"right":e.textAlign=d.text.align,s=w?0:u;break;default:e.textAlign="start",s=w?u:0}if(d.text.autoscale){var g=t.width/u;e.scale(g,1)}if(!d.text.autoscale)switch(d.text.align){case"center":e.textAlign=d.text.align,s=t.width/2;break;case"right":e.textAlign=d.text.align,s=t.width}for(o=0;o<n.length;o++)e.fillText(n[o],s,r,u),r+=i;return c[0].toDataURL()}e.dispose=function(){x=d=e=null,c&&c.remove&&(c.remove(),c=null);p&&p.remove&&(p.remove(),p=null)},e.renderToDataURL=a,e.renderToSVGImage=function(t,e){var n=l;n&&n.width===e.width&&n.height===e.height&&n.text===i.text.value&&n.align===i.text.align||(l={width:e.width,height:e.height,text:i.text.value,align:i.text.align},t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a(e)))}};
"use strict";Atalasoft.Annotations.AnnotationCustomRenderer=function(n,r){var t=this,u=n,e=null,o=null,c=r;function i(){return c.trigger.apply(c,arguments),t}function s(n){return n.image()}function l(n){u.customurl?n.attr("src",u.customurl):i("serverrenderurlrequested",{data:u,complete:a})}function a(n){n.customurl=n}return t.dispose=function(){o=e=u=t=null},t.bind=function(){return c.bind.apply(c,arguments),t},t.unbind=function(){return c.unbind.apply(c,arguments),t},t.trigger=i,t.construct=function(n){return e(n,u)},t.render=function(n){o(n,u)},e=u.constructor?u.constructor:s,o=u.renderer?u.renderer:l,t};
"use strict";Atalasoft.Annotations.PathHelper=function(n){var o=this,t=n,e=[];function l(n,o){t.points.push({x:n,y:o})}return o.dispose=function(){t=o=null,e.length=0,e=null},o.moveTo=function(n,o,t){e=e.concat([t?"m":"M",n,o]),l(n,o)},o.lineTo=function(n,o,t){e=e.concat([t?"l":"L",n,o]),l(n,o)},o.lineToHorizontal=function(n,o){e=e.concat([o?"h":"H",n]),l(n,null)},o.lineToVertical=function(n,o){e=e.concat([o?"v":"V",n]),l(null,n)},o.curveTo=function(n,o,t,c,i,u,a){e=e.concat([a?"c":"C",n,o,t,c,i,u]),l(i,u)},o.curveToSmooth=function(n,o,t,c,i){e=e.concat([i?"s":"S",n,o,t,c])},o.curveToQuadratic=function(n,o,t,c,i){e=e.concat([i?"q":"Q",n,o,t,c])},o.curveToQuadraticSmooth=function(n,o,t){e=e.concat([t?"t":"T",n,o])},o.ellipticalArc=function(n,o,t,c,i,u,a,l){e=e.concat([l?"a":"A",n,o,t,c,i,u,a])},o.close=function(){e.push("Z")},o.toArray=function(){return e},t.points&&(t.points.length=0),o};
"use strict";Atalasoft.Forms.Field=function(e,t,n){var i,m=Atalasoft.$,d=t,c=this,a=m({}),o=null,r=null,l=null,g=n,v={type:"",backgroundcolor:"",color:null,fieldname:"",hidden:!1,isfieldrequired:!1,items:null,locked:!1,norotate:!1,noview:!1,nozoom:!1,readonly:!1,required:!1,x:0,y:0,width:0,height:0,rotation:0,border:{color:"#000",style:"none",radius:{vertical:0,horizontal:0},width:0},text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12,paddingtop:0,linespacing:0},ismultiline:!1,ispassword:!1,isrichtext:!1,scrollable:!1,maxlength:0,maximumfieldheight:-1,preserveoverflow:!1}},s={button:{},checkbox:{checked:!1,group:null},radio:{checked:!1,group:null},textbox:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},signature:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},choice:{multiline:!1}},u={};function h(){return a.trigger.apply(a,arguments),c}function f(e,t){e&&(t?m.extend(!0,v,e):m.extend(v,e))}function p(){l={update:function(){m.extend(!0,v,l),v.update&&delete v.update,A(),P(),null!==o&&(v.selectable?(u.isBound("selectable")||(a.bind(u.selectable),u.bound("selectable")),v.movable&&!u.isBound("movable")?(a.bind(u.movable),u.bound("movable")):!v.movable&&u.isBound("movable")&&(a.unbind(u.movable),u.unbound("movable")),Atalasoft.Utils.Browser.Features.Touch&&(v.resizable&&!u.isBound("resizable")?(a.bind(u.resizable),u.bound("resizable")):!v.resizable&&u.isBound("resizable")&&(a.unbind(u.resizable),u.unbound("resizable")))):!v.selectable&&u.isBound("selectable")&&(a.unbind(u.selectable),u.unbound("selectable"),a.unbind(u.movable),u.unbound("movable"),a.unbind(u.resizable),u.unbound("resizable")))}},m.extend(!0,l,v)}function b(){return JSON.stringify(v)}function x(e,t){return t-(e.value.slice(0,t).split("\r\n").length-1)}function y(e,t){if("number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd)e.selectionStart=t.start,e.selectionEnd=t.end;else{var n=e.createTextRange(),i=x(e,t.start);n.collapse(!0),t.start===t.end?n.move("character",i):(n.moveEnd("character",x(e,t.end)),n.moveStart("character",i)),n.select()}}function k(e){var t=null;switch(v.type){case"button":(t=m("<button/>")).click(function(){return h({type:"buttonclicked",name:v.fieldname}),!1});break;case"textbox":case"signature":t=v.text.multiline?m('<textarea style="overflow-y:'+(v.text.scrollable?"auto":"hidden")+';resize:none"></textarea>'):m('<input type="text" />'),v.text.value=t.val(v.text.value).val();var x=!1;t.on("paste",function(){return x=!0}),t.on("input",function(e){-1===v.text.maximumfieldheight&&(v.text.maximumfieldheight=m(this).get(0).scrollHeight);var t,n,i,a,o,r,l,s,u=0<v.text.maxlength&&m(this).val().length>v.text.maxlength,c=!v.text.scrollable&&m(this).get(0).scrollHeight>v.text.maximumfieldheight;if(m(this).val().length>v.text.value.length&&(u||c)){var d=(t=e.target,s=l=0,"number"==typeof t.selectionStart&&"number"==typeof t.selectionEnd?(l=t.selectionStart,s=t.selectionEnd):(i=document.selection.createRange())&&i.parentElement()===t&&(o=t.value.length,n=t.value.replace(/\r\n/g,"\n"),(a=t.createTextRange()).moveToBookmark(i.getBookmark()),(r=t.createTextRange()).collapse(!1),-1<a.compareEndPoints("StartToEnd",r)?l=s=o:(l=-a.moveStart("character",-o),l+=n.slice(0,l).split("\n").length-1,-1<a.compareEndPoints("EndToEnd",r)?s=o:(s=-a.moveEnd("character",-o),s+=n.slice(0,s).split("\n").length-1))),{start:l,end:s});if(x&&0<v.text.maxlength){var g=m(this).val();if(g.length===d.start)m(this).val(g.substr(0,v.text.maxlength));else{var h=g.length-v.text.value.length,f=v.text.maxlength-v.text.value.length,p=g.substr(0,d.start-h+f),b=v.text.value.substr(d.start-h);m(this).val(p+b),y(e.target,{start:p.length,end:p.length})}}else m(this).val(v.text.value),y(e.target,{start:d.start-1,end:d.start-1})}!v.text.preserveoverflow&&m(this).get(0).scrollHeight<v.text.maximumfieldheight&&(v.text.maximumfieldheight=m(this).get(0).scrollHeight),v.text.value=m(this).val(),x=!1});break;case"checkbox":(t=m('<input type="checkbox" />').prop({name:v.group,checked:v.checked})).val(v.value);break;case"radio":(t=m('<input type="radio" />').prop({name:v.group,checked:v.checked})).val(v.value);break;case"choice":if((t=m("<select></select>")).text(v.value),t.attr({multiple:v.multiple,size:v.multiline&&v.items?v.items.length:0}),v.items)for(var n in t.items=[],v.items)if(v.items.hasOwnProperty(n)){var i=m("<option></option>",{selected:v.items[n].checked,value:v.items[n].value,text:v.items[n].text});t.append(i),t.items[n]=i}if(v.multiline&&v.items){var a=function(e){m(this).trigger("change")};t.bind({mouseup:a,touchend:a})}break;case"generic":t=m("<div></div>")}if(t){if("textbox"===v.type||"signature"===v.type){var o=v.text.font.paddingtop,r=0<v.text.font.linespacing?v.text.font.linespacing+"px":"1.14pt";t.css({resize:"none",position:"absolute",paddingTop:v.multiline?o:0,paddingBottom:v.multiline?"2pt":0,lineHeight:r,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"})}else t.css({resize:"none",position:"absolute",padding:0,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});t.bind({click:Atalasoft.Utils.__sp,mousedown:Atalasoft.Utils.__sp,mouseup:Atalasoft.Utils.__sp,change:z,uncheck:E,focusin:_,focusout:O})}return e._fields&&e._fields.push(t),e.append(t),t}function w(){var e=v.fieldname.lastIndexOf(".");return 0<=e?v.fieldname.substr(0,e):null}function z(e){switch(v.type){case"button":break;case"textbox":case"signature":v.text.value=this.value;var t=w();if(d.multiviewFields.hasOwnProperty(t)){var n=d.multiviewFields[t];for(var i in n)if(n.hasOwnProperty(i)){var a=n[i];if(a!==c)a.get().text.value=this.value,a.updateView()}}break;case"checkbox":v.checked=this.checked,v.group&&v.checked&&(m('input[name="'+v.group+'"]').trigger("uncheck"),v.checked=!0,this.checked=!0);break;case"radio":v.group&&m('input[name="'+v.group+'"]').trigger("uncheck"),v.checked=this.checked;break;case"choice":var o=[];if(void 0!==e.target.selectedOptions)o=e.target.selectedOptions;else if(e.target.multiple)for(var r=0;r<e.target.options.length;r++)e.target.options[r].selected&&o.push(e.target.options[r]);else 0<=e.target.selectedIndex&&o.push(e.target.options[e.target.selectedIndex]);for(var l in v.items)if(v.items.hasOwnProperty(l)){var s=v.items[l];for(var u in s.checked=!1,o){if(o.hasOwnProperty(u))o[u].value===s.value&&(s.checked=!0)}}}}function E(e){"checkbox"===e.target.type&&(e.target.checked=!1),v.checked=!1}function _(e){S(!0),h({type:"fieldfocusin",field:c})}function O(e){S(!1),h({type:"fieldfocusout",field:c})}function P(e){e&&((r=k(e)).zoom=T,A(),h({type:"viewchanged",fieldview:r})),h("repaint")}function A(){if(r){if(v.hidden||v.noview)return void r.hide();r.show();var e=m.extend({},function(){var e=d.getViewerTransform(g),t=B(e,v.x,v.y),n=B(e,v.x+v.width,v.y+v.height),i=d.getZoom(g),a=v.width*i,o=v.height*i,r={x:(t.x+n.x-a)/2,y:(t.y+n.y-o)/2},l=d.getPageRotation(g)+v.rotation,s="rotate("+l+"deg)",u={left:Math.round(r.x)+"px",top:Math.round(r.y)+"px",width:a+"px",height:o+"px","max-width":a+"px","max-height":o+"px"},c=0!==l?Atalasoft.Utils.__htmlTransformStyle(s):Atalasoft.Utils.__htmlTransformStyle("");m.extend(u,c),("textbox"===v.type||"signature"===v.type)&&(u.cursor=l%180==0?"text":"vertical-text");u.visibility=l%180==0?"visible":"hidden";return u}(),(t=v.border&&"underline"===v.border.style,{backgroundColor:v.backgroundcolor,color:v.color||v.text.font.color,borderStyle:v.border&&v.border.style&&!t?v.border.style:"none",borderBottomStyle:t?"solid":"inherit",borderColor:v.border?v.border.color:null,fontFamily:v.text.font.family,fontStyle:v.text.font.italic?"italic":v.text.font.oblique?"oblique":"normal",fontWeight:v.text.font.bold?"bold":"",textAlign:v.text.align}));r.css(e),d.highlighted?(r.addClass("atala-ui-form-highlight"),v.required?r.addClass("atala-ui-form-required"):r.removeClass("atala-ui-form-required")):r.removeClass("atala-ui-form-highlight"),v.readonly?r.attr("readonly","readonly"):r.removeAttr("readonly"),"textbox"===v.type?S(r.is(":focus")):"button"===v.type&&r.text(v.text.value)}var t}function S(e){"textbox"===v.type&&(e||(v.text.value?r.val()!==v.text.value&&r.val(v.text.value):r.val(v.text.defaultvalue)))}function T(e){e=e||d.getZoom(g),r.css({fontSize:Math.round((v.text.font.size||12)*e*(d.dpi/96)),borderWidth:v.border?Math.round(v.border.width*e):0}),v.text&&v.text.align&&r.css({paddingLeft:v.text.leftPadding*e+"px",paddingRight:v.text.rightPadding*e+"px"}),A()}function B(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}return function(){{if(Atalasoft.Forms.Field.__staticInitOccured)return;Atalasoft.Forms.Field.__staticInitOccured=!0}Atalasoft.Utils.Browser.Explorer&&Atalasoft.Utils.Browser.Version<=9&&(a=i=n=null,o={get:function(){return a.get.call(this)},set:function(e){i=e,a.set.call(this,e)}},r=function(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==i&&(i=t,null!=m(e.srcElement).data("ataladata")&&m(n).trigger("input"))}},l=function(){n&&(delete n.value,n.detachEvent("onpropertychange",r),a=i=n=null)},m(document).on("focusin",function(e){var t;"TEXTAREA"!==e.target.nodeName&&("INPUT"!==e.target.nodeName||"text"!==e.target.type&&"password"!==e.target.type)||(l(),t=e.target,i=(n=t).value,a=Object.getOwnPropertyDescriptor(t.constructor.prototype,"value"),Object.defineProperty(n,"value",o),n.attachEvent("onpropertychange",r))}),m(document).on("focusout",function(){l()}),m(document).on("selectionchange keyup keydown",function(e){n&&n.value!==i&&(i=n.value,null!=m(e.srcElement).data("ataladata")&&m(n).trigger("input"))}));var n,i,a,o,r,l}(),c._pageindex=n,i=e.type,m.extend(!0,v,s[i]),f(e,!0),c.dispose=function(){a&&a.unbind();v=a=c=d=null},c.bind=function(){a.bind.apply(a,arguments)},c.unbind=function(){a.unbind.apply(a,arguments)},c.trigger=h,c.set=f,c.get=function(e){return e?v[e]:v},c.setPageIndex=function(e){g=e,c.hasOwnProperty("_pageindex")&&(c._pageindex=e)},c.getClonedData=function(){l?m.extend(!0,l,v):p();return l},c.getObject=function(){return r},c.getEventObject=function(){return a},c.getZoom=function(){return d.zoom},c.stringify=b,c.getJSON=b,c.getParentName=w,c.getName=function(){var e=v.fieldname.lastIndexOf(".");if(0<=e)return v.fieldname.substr(e+1);return v.fieldname},c.repaint=P,c.updateView=A,c.zoom=T,c},Atalasoft.Forms.Field.__staticInitOccured=!1;
"use strict";
/**
 * WebDocumentViewer PDF Forms API.
 * @class
 * @inner
 * @name FormController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 * @ignore
 */Atalasoft.Forms.FormController=function(e,i,t){var n=Atalasoft.$,l=this,d=e,r=i,o={forms:{events:{
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
function(e,i,t){var l=B(e,i,t).getClonedData();return d.trigger({type:p.fieldcreate,field:l}),l}
/**
    * Deletes a field on the given z-index and zero based page index.
    * @param pgNum: number, Zero based page index the field is located on.
    * @param fieldIndex: number, Zero based z-index of the field.
    */,deleteFromPage:D,getFromPage:C,insertForm:
/**
    * Inserts a form from the source URL and index into the given page index.
    * @param sourceUrl: string, Url of the desired form.
    * @param sourceIndex: number, Zero based page index the form is copied from.
    * @param index: number, Zero based page index the form is to be inserted into.
    * @param callback: function, Function to be called when the operation has completed.
    */
function(e,i,t,l){_(e,i,t),"function"==typeof l&&l();d.trigger({type:p.forminserted,srcurl:e,srcindex:i,index:t}),d.trigger(p.formschanged)}
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
function(e,i,t){y(e,i),"function"==typeof t&&t();d.trigger({type:p.formmoved,srcindex:e,destindex:i}),d.trigger(p.formschanged)},removeForm:function(e,i){w(e),"function"==typeof i&&i();d.trigger({type:p.formremoved,index:e}),d.trigger(p.formschanged)}}};if(Atalasoft.Forms.FormController.__exposedApi=o.forms,!e)return null;var f=i._pages,a=null,s={fields:[],multiviewFields:{},activepage:null,activefield:null,highlighted:!0,readonly:!!t,getZoom:r.getPageScale,getViewerTransform:r.getViewerTransform,getPageRotation:r.getPageRotation,dpi:96},u={},c=!1,g=!1,m=null,p={click:"fieldclicked",dblclick:"fielddoubleclicked",touchstart:"fieldtouchstart",interactend:"fieldtouchend",touchmove:"fieldtouchmove",pinchmove:"fieldpinchresize",rightclick:"fieldrightclicked",mousedown:"fieldmousedown",mousedownleft:"fieldmousedownleft",mousedownright:"fieldmousedownright",mousemove:"fieldmousemove",mouseout:"fieldmouseout",mouseup:"fieldmouseup",mouseover:"fieldmouseover",create:"fieldcreated",load:"fieldloaded",moved:"fieldmoved",resized:"fieldresized",repaint:"fieldrepainted"};function v(){!0}function h(e){}function _(e,i,t){if(null==e&&"number"==typeof i&&(i=w(i)),i=i||[],null==t?t=s.fields.length:t<0&&(t=0),t>s.fields.length){var l=s.fields.length;s.fields[t]=i;for(var o=l;o<s.fields.length;++o)s.fields[o]||(s.fields[o]=[])}else s.fields.splice(t,0,i)}function w(e){return e<s.fields.length?s.fields.splice(e,1)[0]:null}function y(e,i){_(null,w(e),i)}function F(e,i){if(e<s.fields.length&&s.fields[e]&&s.fields[e].length){var t;b(i);for(var l=0;l<s.fields[e].length;l++)(t=s.fields[e][l]).setPageIndex(e),t.repaint(i._form)}}function b(e){e._form&&e._form._fields&&(e._form._fields.length=0,e._form.empty())}function x(e){F(e.index,e.page)}function A(e){null!=m.field&&m.field.getObject()[0].blur()}function P(e){e.page._form&&b(e.page)}function k(e){s.activepage=e}function O(e){z(e.page)}function z(e){if(e&&s.fields.length&&s.fields[e._index])for(var i=0;i<s.fields[e._index].length;i++)s.fields[e._index][i].updateView()}function D(e,i){!function(e,i){var t=s.fields[i].splice(e,1)[0];s.activepage&&s.activepage._form._fields.splice(e,1);t.dispose(),d.trigger({type:"fielddeleted",page:i,index:e})}(i,e)}
/**
    * Gets an array of field data objects located on the given zero based page index.
    * @param pageNum: number, Zero based page index the fields are located on.
    * @returns array: Array of field data objects on the given page index. 
    */function C(e){var i=[];if(0===s.fields.length||void 0===s.fields[e])return i;for(var t=0;t<s.fields[e].length;t++)i[t]=s.fields[e][t].getClonedData();return i}function U(){if(0<s.fields.length){if(s.fields.length=0,f)for(var e=0;e<f.length;e++)b(f[e]);d.trigger({type:"formscleared"})}}function B(e,i,t){var l={};e&&e.type&&u[e.type]&&n.extend(!0,l,u[e.type]),n.extend(!0,l,e);var o=new Atalasoft.Forms.Field(l,s,i);return void 0===s.fields[i]&&(s.fields[i]=[]),s.fields[i].push(o),r.redrawVisiblePages(),"function"==typeof t&&t(o),H(o),o}function I(){}function V(e){c=!0,a.unbind("mousedown",V),Atalasoft.Utils.Browser.Features.Touch&&a.unbind("touchstart",V),d.trigger({type:"fielddrawstart",field:s.activefield.getClonedData()}),s.activefield._pageindex=s.activepage._index,s.activefield.startDraw(e,s.activepage._form,{}),Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8&&s.activepage._draw.height(s.activepage.height())}function j(){!function(e){var i=s.activepage,t=i?i._index:0;s.fields[t]?s.fields[t].push(e):s.fields[t]=[e];s.activefield.unbind({}),H(s.activefield),I({field:e}),I=function(){},d.trigger({type:p.fieldcreate,field:e.getClonedData()})}(s.activefield),R(),Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8&&s.activepage._draw.height("100%")}function T(){s.activefield.dispose(),s.activefield=null,c&&R(!0)}function R(e){c=!1,function(){if(g){a.unbind("mousedown",V),Atalasoft.Utils.Browser.Features.Touch&&a.unbind("touchstart",V);for(var e=0;e<f.length;e++)f[e]._draw.reset();g=!1}}(),d.trigger({type:"fielddrawend",field:e?null:s.activefield.getClonedData(),cancelled:!!e})}function q(e){m=e,d.bind("scroll",A)}function E(e){d.unbind("scroll",A)}function H(i){function e(e){d.trigger({type:p[e.type],field:i.getClonedData()})}i.bind({interactstart:function(e){s.activepage&&s.activepage._form===i.getObject().form||k(i.getObject().form._page),s.activefield=i},moved:e,resized:e,interactend:e,touchstart:e,touchmove:e,pinchmove:e,click:e,dblclick:e,rightclick:e,mousedown:e,mousedownleft:e,mousedownright:e,mousemove:e,mouseout:e,mouseup:e,mouseover:e,repaint:e,fieldfocusin:q,fieldfocusout:E})}function L(e,i,t,l,o){var n={type:"formdata",serverurl:e,query:"?atalaformdata=",method:"GET",data:{atala_formurl:i,atala_docurl:t=t||d.config.documenturl,atala_a_ofs:l,atala_a_len:o},cancel:!1,info:{fields:[],length:o,error:void 0}};for(var r in n.data)n.data.hasOwnProperty(r)&&null===n.data[r]&&(n.data[r]=void 0);return n}function N(i,e,t){function l(e){void 0!==i.info.docIndex&&(e.offset=i.info.docIndex),Q(e),"function"==typeof t&&t.call(void 0,e.error,e)}"function"==typeof e&&(t=e,e=!1),e||U(),r.makeHandlerRequest(i,l,l)}function Q(e){if(e){var i={type:"formsloaded",forms:e.forms,customData:e.customData};if(e.dpi&&(s.dpi=e.dpi),e.forms&&e.forms.fields)for(var t=0;t<e.forms.fields.length;t++){e.offset=e.offset||0;var l=e.offset+t;s.fields[l]&&0<s.fields[l].length?s.fields[l].length=0:s.fields[l]=[];var o=e.forms.fields[t];if(o&&0<o.length)for(var n=0;n<o.length;n++)s.fields[l][n]=new Atalasoft.Forms.Field(o[n],s,l),r=s.fields[l][n],void 0,f=r.getParentName(),0<=r.getName().indexOf("<~Atala_Unnamed_")&&(s.multiviewFields.hasOwnProperty(f)?s.multiviewFields[f].push(r):s.multiviewFields[f]=[r]),d.trigger({type:p.load,field:s.fields[l][n].getClonedData()}),H(s.fields[l][n])}else e.error&&(i.error=e.error);d.trigger(i)}var r,f}l.dispose=function(){a=f=r=d=l=null,s.fields.length=0,s.multiviewFields=null,s.activepage=null,s.activefield=null},l.addFormLayer=function(i){if(i instanceof jQuery){i._form=r.createDiv(i),i._form.css({position:"absolute",zIndex:4}),i._form._fields=[],i._form._page=i;var e=function(){k(i)};return i.bind("mousedown",e),Atalasoft.Utils.Browser.Features.Touch&&i.bind("touchstart",e),i.bind({pageresize:function(e){e.page=i,z(e.page)},pagezoom:function(e){e.page=i,function(e){for(var i in e.page._form._fields)e.page._form._fields.hasOwnProperty(i)&&e.page._form._fields[i].zoom(r.getPageScale(e.index))}(e)}}),!0}return!1},l.insertForm=_,l.removeForm=w,l.moveForm=y,l.removeFormLayer=function(e){if(e instanceof jQuery)return e._form&&(e._form._fields=null,e._form._page=null,e._form=null),!0;return!1},l.showLayer=F,l.__exposedApi=o.forms,l.__getDebugInfo=function(){var e={};return n.extend(!0,e,{data:s,pages:f,viewport:a}),e},l.__linkForms=function(e){e&&(e._fields?n.isArray(e._fields)&&(s.fields=e._fields):e._fields=s.fields)},l.clear=U,l.createField=B,l.deleteFieldOnPage=D,l.getFieldsFromPage=C,l.setViewPort=function(e){e&&(e instanceof jQuery||(e=n(e)),a=e)},l.drawField=function(e,i,t){if(c)return null;e&&e.type&&u[e.type]&&n.extend(!0,e,u[e.type]);s.activefield&&null===s.activefield.getObject()&&T();(function(){if(!g){a.bind("mousedown",V),Atalasoft.Utils.Browser.Features.Touch&&a.bind("touchstart",V);for(var e=0;e<f.length;e++)f[e]._draw.toFront();g=!0}})(),s.activefield=new Atalasoft.Forms.Field(e,s,s.activepage?s.activepage._index:void 0),s.activefield.bind({drawn:j,cancelled:T}),"function"==typeof i&&(I=i);"function"==typeof t&&t;return s.activefield},l.stringifyChanges=function(e){var i={},t=!1;for(var l in s.fields)if(s.fields.hasOwnProperty(l)&&0<s.fields[l].length)for(var o in i[l]=[],s.fields[l])s.fields[l].hasOwnProperty(o)&&(t=!0,i[l][o]=s.fields[l][o].get());return t?JSON.stringify({forms:{fields:i}}):void 0},l.createHandlerRequest=L,l.makeHandlerRequest=N,l.loadFormUrl=function(e,i,t,l,o,n,r){var f=Array.prototype.slice.call(arguments);"function"!=typeof(r=f.pop())&&f.push(r);e=f.shift(),i=f.shift(),t=f.shift(),l=f.shift(),o=f.shift(),n=f.shift();var d=L(e,i,t,l,o);void 0!==n&&(d.info.docIndex=n);N(d,0<=l&&1<=o,r)},l.loadForms=Q,"Atalasoft.Controls.WebDocumentViewer"===d.typeOf&&n.extend(d,o),d.bind({pagerecycled:P,pageshown:x,zoomchanged:h,pagerotated:O}),r._state.initialized?v():d.bind({initialized:v})};
"use strict";
/**
 * WebDocumentViewer Text Layer operations API.
 * @class
 * @inner
 * @name TextController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */Atalasoft.Text.TextController=function(e,t,n){var M=Atalasoft.$,r=this,A=e,S=t,O=(t?t._internalEvents:null)||M({}),o={
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
getSelected:V,
/**
             * Copies selected text to clipboard. This method don't depend on {@link TextMouseToolConfig| TextMouseToolConfig.hookcopy} config option, i.e. text will be copied if `ctrl+c` copying is disabled for user.
             * @instance
             * @function
             */
copySelected:F,
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
            * @tutorial search result match object could be used to retrieve region line and word indexes of the match starting object.
            * @example
            * <caption> Search text occurrence and automatically select it. Note, that `match.word` is the index of the first word in matched text. If search phrase contain multiple words, only firs will be selected in this example. </caption>
            *  _viewer.text.search('findme', 0, function (it, match) {
            *       if (it.isValid()) {
            *           _viewer.text.selectPageText(match.page, match.region, match.line, match.word);
            *       }
            *  });
            */
selectPageText:function(e,o,i,a,s,t){var l=M.Deferred(),n=Array.prototype.slice.call(arguments,1);2<n.length&&"function"==typeof n[n.length-2]?(t=n.pop(),s=n.pop()):1<n.length&&"function"==typeof n[n.length-1]&&(s=n.pop());return o=n[0],i=n[1],a=n[2],pe(e).done(function(e,t){var n=t.bounds;void 0===o||!t.regions[o]||void 0!==i&&t.regions[o].lines[i]?(o=t.regions[o],void 0!==i&&o.lines[i]&&(n=te((i=o.lines[i]).bounds,o),void 0!==a&&i.words[a]&&(n=te(i.words[a].bounds,o))),$(e,Ee(n.x,n.y),e,Ee(n.right,n.bottom))):J(e,o);var r=function(){A.config.mousetool.text.hookcopy&&S._dom.viewport.focus(),l.resolve(),s&&"function"==typeof s&&s()};S.isPageInView(e)?r():A.showPage(e,r)}).fail(function(){l.reject(),t&&"function"==typeof t&&t()}),l.promise()},
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
getPageText:function(o,i,e){var a=M.Deferred();return pe(o).done(function(){var e="",t=Q(o);if(t)for(var n=0;n<t.regions.length;n++){var r=W(t.regions[n]);r&&(e+=r)}a.resolve(e),i&&"function"==typeof i&&i(e)}).fail(function(){a.reject(),e&&"function"==typeof e&&e()}),a.promise()},
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
reloadPageText:function(e,t,n){return v(e),pe(e).done(function(){t&&"function"==typeof t&&t(e)}).fail(function(){n&&"function"==typeof n&&n(e)})},
/**             
            * Indicates whether page text is loaded.             
            * @param {number} index - Index of the page to check text data state.
            * @instance
            * @function
            */
isPageTextLoaded:function(e){var t=Q(e);return!(!t||t.loading)},
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
search:ue,
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
searchOnPages:ge}};if(Atalasoft.Text.TextController.__exposedApi=o.text,!e)return null;var i=.1,a=null,D=t._pages,z={activepage:null,origin:Ee(0,0),originPage:-1,rectangular:!1,selectionCache:[],searchQuery:null},g={};function s(){!0}function Q(e){return S._controllers.document.getPageText(e)}
/**
    * jQuery trigger shortcut
    * @returns object, WebDocumentViewer
    */
function l(e){return A.trigger(e),r}function h(e,t){A.trigger({type:"throwerror",name:e,msg:t})}function u(e){}function U(e,t){if(t._text){f(t);var n=Q(e);if(n){var r=be(t,n);if(r&&n.searchResult&&w(r,n),r&&n.selection)for(var o=n.selection,i=0;i<o.regions.length;i++)for(var a=0;a<o.regions[i].lines.length;a++)for(var s=o.regions[i].lines[a],l=0;s.words&&l<s.words.length;l++){var u=s.words[l];ne(r,u.bounds.x,u.bounds.y,u.bounds.width,u.bounds.height,g.selection)}}}}function c(e){f(e.page)}function d(e){U(e.index,e.page)}function f(e){e._text&&m(e._index)}function x(e){e.page._text.attr("width",e.width).attr("height",e.height),e.page._text.width(e.width),e.page._text.height(e.height),U(e.index,e.page)}function p(){if(z.searchQuery&&z.searchQuery.iterator){z.searchQuery.iterator.dispose(),z.searchQuery=null,de();for(var e=0;e<D.length;e++)U(D[e]._index,D[e])}}function v(e){if(null==e)for(var t=0;t<S._controllers.document.getPageCount();t++)v(t);Q(e)&&(S._controllers.document.updatePageText(e,null),z.selectionCache[e]&&(z.selectionCache[e]=null,S.findPageFromIndex(e)&&m(e,null)))}function y(){if(z.searchQuery=null,z.selectionCache=[],S._controllers.document.initDocumentText({pages:[]}),D)for(var e=0;e<D.length;e++)f(D[e])}function b(){for(var e=0;e<S._controllers.document.getPageCount();e++){var t=Q(e);t&&t.selection&&(m(e,t,!0),t.selection=null)}z.selectionCache.length=0}
/** Clears the text selection */function m(e,t,n){for(var r=0;r<D.length;r++)if(!isFinite(e)||D[r]._index===e){t=isFinite(e)&&r===e?t:Q(D[r]._index);var o=be(D[r],t);if(o){var i=S.getSourcePageSize(D[r]._index,t?t.rotation:0);o.clearRect(0,0,i.width,i.height),n&&w(o,t)}}}function w(e,t){if(t&&t.searchResult)for(var n=0;n<t.searchResult.length;n++){var r=t.searchResult[n].bounds;ne(e,r.x,r.y,r.width,r.height,g.highlight)}}function P(e){var t=e.eventData,n=t.page,r=t.point;b();var o=Q(n);o&&(o.selection=le(t.point,t.point),t.interval&&z.origin&&0<=z.originPage?($(z.originPage,z.origin,n,r),t.complete=!0):(t.line||t.word)&&Math.abs(t.point.x-z.origin.x)<10&&Math.abs(t.point.y-z.origin.y)<10?(!function(e,t,n,r){var o=Q(e);if(o&&(n||r))for(var i=0;i<o.regions.length;i++){var a=o.regions[i];if(ze(t,a.bounds))for(var s=0;s<a.lines.length;s++){var l=a.lines[s];if(ze(t,l.bounds)){var u={region:i,line:s,bounds:l.bounds};if(r){for(var g=0;g<l.words.length;g++)if(ze(t,l.words[g].bounds))return u.word=g,u.bounds=l.words[g].bounds,H(e,u)}else if(n)return H(e,u)}}}}(n,r,t.line,t.word),t.complete=!0):(z.origin=t.rectangular?t.viewerPoint:t.point,z.originPage=n,z.rectangular=t.rectangular)),t.handled=!0}M.extend(g,n||{}),r.dispose=function(){A.unbind({pagerecycled:c,pageshown:d,zoomchanged:u,documentchanged:p}),O.unbind({textselectstart:P,textselectmove:E,textselectend:q}),a=A=r=null,z.searchQuery=null,z.selectionCache=[],!1,z.activepage=null},r.removeTextLayer=function(e){if(e instanceof jQuery)return e._text&&(e._text._page=null,e._text=null),!0;return!1},r.addTextLayer=function(t){if(t instanceof jQuery)return t._text=S.createDOM("canvas",t),t._text.css({width:"100%",height:"100%",position:"absolute",zIndex:0}),t._text.attr("width",t.width()).attr("height",t.height()),(t._text._page=t).bind(Atalasoft.Utils.Browser.Features.Touch?"touchstart":"mousedown",function(){var e;e=t,z.activepage=e}),t.bind({pageresize:function(e){e.page=t,x(e)},pagezoom:function(e){e.page=t,x(e)}}),!0;return!1},r.showLayer=U,r.__exposedApi=o.text,r.__getDebugInfo=function(){var e={};return M.extend(!0,e,{data:z,pages:D,viewport:a}),e},r.__linkText=function(e){},r.clear=y,r.setViewPort=function(e){e&&(e instanceof jQuery||(e=M(e)),a=e)},r.search=ue,r.clearSelection=b,r.ensurePageTextLoaded=pe;var _,T,R,C,k,I,j,L,N=(_=$,T=A.config.mousetool.text.throttlingtreshold,I=k=C=R=void 0,j=0,L=function(){j=(new Date).getTime(),I=null,k=_.apply(R,C),I||(R=C=null)},function(){var e=(new Date).getTime();j||(j=e-T);var t=T-(e-j);return R=this,C=arguments,t<=0||T<t?(I&&(clearTimeout(I),I=null),j=e,k=_.apply(R,C),I||(R=C=null)):I||(I=setTimeout(L,t)),k});function E(e){var t=e.eventData,n=t.page,r=z.rectangular?t.viewerPoint:t.point,o=Q(n);if(o)if(o.loading)t.cursor=Atalasoft.Utils.MouseToolCursor.Wait;else{if(0===o.regions.length)return!(t.handled=!1);var i=S.getPageRotation(n)+o.rotation;if(o.rotatedRegions)for(var a=0;a<o.rotatedRegions.length;a++)if(ze(t.point,o.rotatedRegions[a].bounds)){i+=o.rotatedRegions[a].rotation;break}t.cursor=i%180==0?Atalasoft.Utils.MouseToolCursor.Text:Atalasoft.Utils.MouseToolCursor.VerticalText,t.selecting&&N(z.originPage,M.extend({},z.origin),n,r,z.rectangular)}return!(t.handled=!0)}function q(e){var t=e?e.eventData:{},n=!1;for(var r in z.selectionCache)if(z.selectionCache.hasOwnProperty(r)&&z.selectionCache[r].selection&&z.selectionCache[r].selection.regions.length){n=!0;break}n&&l({type:"textselected"}),z.rectangular=!1,t.handled=!0}function B(e){F()}function F(){var e=S.createDiv();if(e[0]){var t=new ClipboardJS("wdv-dummy-selection-trigger",{text:function(){return V()}});t.on("success",function(e){t.destroy()}),t.on("error",function(e){t.destroy(),h("TextCopyError")}),t.onClick({currentTarget:e[0]})}}function V(){for(var e="",t=0;t<z.selectionCache.length;t++)if(z.selectionCache[t]){var n=z.selectionCache[t].selection;if(n&&n.regions&&0<n.regions.length)for(var r=0;r<n.regions.length;r++){var o=W(n.regions[r]);o&&(e+=o)}}return e}function G(e){for(var t="",n=0;e.words&&n<e.words.length;n++)if(je(e.words[n],1<=n?e.words[n-1]:null)&&(t+=" "),e.words[n].text)t+=e.words[n].text;else if(e.words[n].glyphs&&e.words[n].glyphs.length)for(var r=0;r<e.words[n].glyphs.length;r++)t+=e.words[n].glyphs[r].text;return t}function W(e){for(var t="",n=0;n<e.lines.length;n++){var r=G(e.lines[n]);r&&(t+=r+"\n")}return t}function H(e,t){var n=Q(e);if(n&&t&&n.regions[t.region]){b();var r=n.regions[t.region],o=be(ye(e),n);if(M.isNumeric(t.line)&&r.lines[t.line]){for(var i=r.lines[t.line],a={words:[]},s={lines:[a],bounds:M.extend({},r.bounds)},l=M.isNumeric(t.word)&&i.words[t.word]?t.word:0,u=M.isNumeric(t.endWord)&&i.words[t.endWord]?t.endWord:M.isNumeric(t.word)?l:i.words.length-1,g=l;g<=u;++g){var c=i.words[g],d=!!c.glyphs.length;d&&g===l&&M.isNumeric(t.glyph)?c=Z(c,t.glyph,l===u&&M.isNumeric(t.endGlyph)?t.endGlyph:c.glyphs.length-1):d&&g===u&&M.isNumeric(t.endGlyph)&&(c=Z(c,0,t.endGlyph)),a.words.push(M.extend({},c)),o&&ne(o,c.bounds.x,c.bounds.y,c.bounds.width,c.bounds.height)}n.selection=le(Ee(t.bounds.x,t.bounds.y),Ee(t.bounds.right,t.bounds.bottom)),se(n.selection.regions,s),z.selectionCache[e]=n}else J(e,t.region)}}function J(e,t){b();var n=Q(e);if(n&&n.regions[t]){var r=n.regions[t],o=be(ye(e),n);n.selection=le(Ee(r.bounds.x,r.bounds.y),Ee(r.bounds.right,r.bounds.bottom),!1);var i=X(o,r,n.selection.origin,n.selection.point);i&&0<i.lines.length&&(se(n.selection.regions,i),z.selectionCache[e]=n)}}function $(e,t,n,r,o){var i=Math.min(e,n),a=Math.max(e,n);for(var s in z.selectionCache)if(z.selectionCache.hasOwnProperty(s)){var l=parseInt(s,10);(l<i||a<l)&&(m(l,z.selectionCache[l],!0),z.selectionCache[l].selection=null)}for(var u=o?Math.min(t.x,r.x):0,g=Ee(u,0),c=i;c<=a;c++){var d=S.getSourcePageSize(c);o&&((d=M.extend({},S.getPageSize(c))).width*=S.getPageScale(c),d.height*=S.getPageScale(c));var h=o?Math.max(t.x,r.x):d.width,f=Ee(h,d.height),x=void 0,p=void 0;i===a?(x=t,p=r):c===e?(x=t,p=c===i?f:g):c===a||c===i?(p=r,x=c===i?f:g):(x=g,p=f);var v=ye(c);o?ee(c,Ee(u,x.y),Ee(h,p.y),v):K(c,x,p,v)}}function K(e,t,n,r){var o,i,a,s=Q(e);if(s&&re(s,t,n,!1)&&0<s.regions.length){r&&r._text&&m(e,s,!0),s.selection=le(t,n,!1);var l=function(e,t,n){for(var r=Ee(Math.min(t.x,n.x),Math.min(t.y,n.y)),o=Ee(Math.max(t.x,n.x),Math.max(t.y,n.y)),i=Me({x:r.x,y:r.y,width:o.x-r.x,height:o.y-r.y}),a=Me({x:0,y:r.y,width:e.bounds.width,height:o.y-r.y}),s=t,l=n,u=null,g=null,c=null,d=null,h=0;h<e.regions.length&&(!u||!g);h++){var f=e.regions[h].bounds;Qe(a,f)&&(c=!c||ae(e.regions[h],c)?e.regions[h]:c),Qe(i,f)&&(u=!u&&ze(s,e.regions[h].bounds)?e.regions[h]:u,g=!g&&ze(l,e.regions[h].bounds)?e.regions[h]:g,d=!d||oe(e.regions[h],d)?e.regions[h]:d)}if(u&&g){if(ae(g,u)){var x=g;g=u,u=x,s=n,l=t}}else if(c&&d){var p=void 0;u?(p=ie(l),ae(u,p)?(g=d,l=null):(g=u,l=s,u=c,s=null)):g?(p=ie(s),oe(g,p)?(u=c,s=null):(u=g,s=l,g=d,l=null)):(u=c,g=d,s=l=null),s=s||Le(u),l=l||Ne(g)}return{start:u,startPoint:s,end:g,endPoint:l}}(s,t,n);if(l&&l.start&&l.end)for(var u=be(r,s),g=0;g<s.regions.length;g++){var c=s.regions[g],d=null;c===l.start?d=c===l.end?X(u,c,l.startPoint,l.endPoint):X(u,c,l.startPoint,Ne(c)):c===l.end?d=X(u,c,Le(c),l.endPoint):(o=c,i=l.start,a=l.end,oe(o,i)&&ae(o,a)&&(d=X(u,c,Le(c),Ne(c)))),d&&d.lines&&0<d.lines.length&&(se(s.selection.regions,d),z.selectionCache[e]=s)}}}function X(e,t,n,r){var o={lines:[],bounds:M.extend({},t.bounds)},i=Q(t.page).bounds;if(0!==t.rotation&&(n=Atalasoft.Utils.rotatePoint(n,i,360-t.rotation),r=Atalasoft.Utils.rotatePoint(r,i,360-t.rotation)),Se(n.y,r.y)){var a=n;n=r,r=a}for(var s=0;s<t.lines.length;s++){var l=t.lines[s],u={words:[]},g=Ce(l,i,t.rotation),c=Se(g.y,n.y)&&Ae(g.bottom,r.y),d=!c&&De(n.y,g.y,g.bottom),h=!c&&De(r.y,g.y,g.bottom);if(d&&1<s){var f=Ce(t.lines[s-1],i,t.rotation);c=!(d=!De(n.y,f.y,f.bottom))&&!h}if(h&&s<t.lines.length-1){var x=Ce(t.lines[s+1],i,t.rotation);h=!De(r.y,x.y,x.bottom),c=!d&&!h}if(c||d||h){for(var p=0;l.words&&p<l.words.length;p++){var v=l.words[p],y=Ce(v,i,t.rotation),b=v.glyphs&&v.glyphs.length,m=c;if(!m){if(d&&h){if(Se(n.x,r.x)){var w=n;n=r,r=w}m=Se(b?y.x:y.right,n.x)&&Ae(b?y.right:y.x,r.x)}else d?m=Se(b?y.x:y.right,n.x):h&&(m=Ae(b?y.right:y.x,r.x));if(!m&&b){var P=null;if(d&&De(n.x,y.x,y.right)){var _=h?Math.min(y.right,r.x):y.right;P=Y(v,n.x,_)}if(h&&De(r.x,y.x,y.right))P=Y(v,d?Math.max(y.x,n.x):y.x,r.x);P&&(v=P,m=!0)}}m&&(u.words.push(M.extend({},v)),e&&ne(e,v.bounds.x,v.bounds.y,v.bounds.width,v.bounds.height))}0<u.words.length&&o.lines.push(u)}}return o}function Y(e,t,n){for(var r=null,o=null,i=0;i<e.glyphs.length;++i){var a=e.glyphs[i].normalizedBounds;if(null===r&&Se(a.right,t)&&(r=i),!Ae(a.x,n))break;o=i}return null!==r&&null!==o?Z(e,r,o):null}function Z(e,t,n){var r={glyphs:[],text:"",omitSpace:e.omitSpace};if(0<=t&&t<=n&&e.glyphs[n]){r.glyphs=e.glyphs.slice(t,n+1);var o=e.glyphs[t].bounds,i=e.glyphs[n].bounds,a=Math.min(o.x,i.x),s=Math.min(o.y,i.y),l=Math.max(o.right,i.right),u=Math.max(o.bottom,i.bottom);return r.bounds={x:a,y:s,width:Math.abs(l-a),height:Math.abs(u-s)},Me(r.bounds),r}return null}function ee(e,t,n,r){var o=Q(e);if(o&&re(o,t,n,!0)&&0<o.regions.length){r&&r._text&&m(e,o,!0);var i=Ie(e,o,t),a=Ie(e,o,n);o.selection=le(t,n,!0);var s=Me({x:Math.min(i.x,a.x),y:Math.min(i.y,a.y),width:Math.abs(a.x-i.x),height:Math.abs(a.y-i.y)});if(s=ke(s,o.bounds)){for(var l=void 0,u=0;u<o.regions.length;u++)if(Qe(s,o.regions[u].bounds)){l=l||be(r,o);for(var g={lines:[],bounds:M.extend({},o.regions[u].bounds)},c=0;c<o.regions[u].lines.length;c++){for(var d=o.regions[u].lines[c],h={words:[]},f=0;d.words&&f<d.words.length;f++){var x=d.words[f];if(Qe(s,x.bounds)){var p=Me(Atalasoft.Utils.rotateRect(s,o.bounds,(360-o.regions[u].rotation)%360)),v=x.normalizedBounds,y=Se(v.x,p.x),b=Ae(v.right,p.right);y&&b||(x=Y(x,Math.max(v.x,p.x),Math.min(v.right,p.right))),x&&(h.words.push(M.extend({},x)),l&&ne(l,x.bounds.x,x.bounds.y,x.bounds.width,x.bounds.height))}}0<h.words.length&&g.lines.push(h)}g.lines.length&&se(o.selection.regions,g)}o.selection.regions.length&&(o.selection.bounds=s,z.selectionCache[e]=o)}}}function te(e,t){if(t){if(t.rotation%180!=0)return Me({x:(e.right+e.x)/2,y:e.y,width:0,height:e.height});var n=(e.bottom+e.y)/2;return Me({x:e.x,y:n,width:e.width,height:0})}return null}function ne(e,t,n,r,o,i){e&&(e.clearRect(t,n,r,o),i=i||g.selection,e.fillStyle=i.color,e.globalAlpha=i.alpha,e.fillRect(t,n,r,o))}function re(e,t,n,r){return r=!!r,!e.selection||!Oe(e.selection.origin,t)||!Oe(e.selection.point,n)||r!==e.selection.rectangular}function oe(e,t){if(Se(e.bounds.bottom,t.bounds.y)){if(Ue(e.bounds,t.bounds))return e.bounds.x>t.bounds.x;var n=ke(e.bounds,t.bounds);if(n)return 1<=n.width/n.height?Se(e.bounds.y,t.bounds.y):Se(e.bounds.x,t.bounds.x);if(Se(e.bounds.y,t.bounds.bottom))return!0;if(Ae(e.bounds.bottom,t.bounds.y))return!1;if(Se(e.bounds.x,t.bounds.x))return!0}return!1}function ie(e){return{lines:[],bounds:Me({x:e.x,y:e.y,width:0,height:0})}}function ae(e,t){return!oe(e,t)}function se(e,t){for(var n=0;n<e.length&&!ae(t,e[n]);n++);Array.prototype.splice.call(e,n,0,t)}function le(e,t,n){return{origin:e,point:t,rectangular:!!n,regions:[]}}function ue(e,t,n){return"function"==typeof t&&(n=t,t=0),ge(e,0,S._controllers.document.getPageCount()-1,t,n)}function ge(e,t,n,r,o){var i=S._controllers.document.getPageCount(),a=!1,s=function(e,t){if(a)return null;var n=!1,r=e;return"string"==typeof e&&(r=Atalasoft.Utils.ParseInt(e),n=!0),null===r&&!n||void 0===r||"number"==typeof r?r:(h("searchOnPages",t+" page '"+JSON.stringify(e)+"' is not a correct page index."),a=!0,null)},l=s(t,"Start"),u=s(n,"End"),g=s(r,"Active");if(a)return null;if(Atalasoft.Utils.IsInteger(l)||(l=0),Atalasoft.Utils.IsInteger(u)||(u=i-1),Atalasoft.Utils.IsInteger(g)||(g=l),l<0||i<=l)return h("searchOnPages","Start page "+l+" is out of range."),null;if(u<0||i<=u)return h("searchOnPages","End page "+u+" is out of range."),null;if(u<l)return h("searchOnPages","Start page is greater than end page."),null;if(g<l||u<g)return h("searchOnPages","Active page "+g+" is out of range."),null;if(null!=e&&"string"!=typeof e)return h("searchOnPages","Text to search value "+JSON.stringify(e)+" is not a valid text to search."),null;if(null!=o&&"function"!=typeof o)return h("searchOnPages","Callback value "+JSON.stringify(o)+" is not a valid callback function."),null;if(de(),e&&2<e.length&&o){var c={sourceQuery:e,text:e.toLocaleLowerCase(),start:l,end:u,active:g},d=new ce(z.searchQuery=c,o);return z.searchQuery.iterator=d}return D.forEach(function(e){e._index>=l&&e._index<=u&&U(e._index,e)}),null}
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
     */function ce(u,r){var g=3,c=u.start,d=u.end,h=u.active,f=-1,x=-1,p=0,v=this,y=[],b=void 0,t=[],m=C(-1);function o(e){t.push({action:w,args:[!0,R(e)]}),n()}
/**
         * Advances current item to the previous query match or adds operation to the queue in case if next match is currently awaited.
         * @param {TextSearchCallback} callback - Function that that is called when previous match is found.
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#prev
         */function n(){if(!b&&t.length){var e=t.shift();e&&"function"==typeof e.action&&e.action.apply(v,e.args)}}function w(n,r){if(P()){var e=n?1:-1,t=Q(f);if(t&&t.searchResult&&t.searchResult.length&&(n?-1<=x&&x<p-1:0<x&&x<=p)){x+=e;var o=t.searchResult[x];m=C(f,o),H(f,o);var i=t?t.rotation:0,a=S.getViewerTransform(f,i),s=te(o.bounds,t.regions[o.region]),l=Ee(a.x(s.x,s.y),a.y(s.x,s.y));S.showPagePoint(f,l,Atalasoft.Utils.PageSelection.Center,function(){r(v,C(f,o))})}else b=b||_(u.text,0<=f?f+e:h,n).done(function(e,t){P()?0<=e&&t&&(f=e,p=t.searchResult.length,x=n?-1:p,w(n,r)):r(v,null)}).fail(function(){r(v,null)})}else r(v,null)}
/**
        * Gets the query text for this iterator.
        * @returns {string}
        * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getQuery
        */function P(){var e=z.searchQuery===u;return e||i(),e}
/**
         * Indicates whether this is executing background search.
         * If `true`, subsequent next/prev calls are stored into the search queue.
         *
         * Method could be used, for example, to determine whether search will be continued after particular callback call, and thus to hide or preserve search loading mask.
         *
         * @returns {boolean}
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isSearching
         */function _(t,n,r,o,i){o=o||M.Deferred();var a=void 0;return P()&&setTimeout(function(){for(;c<=n&&n<=d;n+=r?1:-1){var e=Q(n);if(e&&!e.loading){if(e.searchResult=T(e,u.text),0<e.searchResult.length)return void o.resolve(n,e)}else{if(e&&e.loading&&e.promise)return void s(t,n,r,o,i,e);if(!e){if(y[n])continue;return a=!0,void l(t,n,r,o)}}}if(v.wrap&&!a&&!i)return n<c&&!r?n=d:d<n&&r&&(n=c),void _(t,n,r,o,!0);o.reject()},0),o.promise()}function s(e,t,n,r,o,i){i.promise.then(function(){_(e,t,n,r,o)})}function l(o,e,i,a){var t,n,r,s,l,u=function(e,t){for(var n=e,r=null,o=[];c<=n&&n<=d&&o.length<=20;n+=t?1:-1){var i=null,a=S._controllers.document.getPageDefinition(n),s=a.index;if(a.uri&&(i=a.uri),r!==i&&n!==e)break;r=i;var l={i:s};s!==n&&(l.di=n),o.push(l);var u=Q(n);if(u&&!u.loading)break}return{textUrl:r||A.config.documenturl,pages:o}}(e,i);u.pages.length?(t=o,n=u,r=g,s=M.Deferred(),l={type:"pagetextsearch",serverurl:A.config.serverurl,query:"?pagetextsearch=",method:"POST",data:{atala_query:t,atala_docurl:n.textUrl,atala_maxcount:r||g,atala_pages:JSON.stringify(n.pages)},cancel:!1},S.makeHandlerRequest(l,function(e){if(P()){var t=-1;if(e&&e.searchResults&&e.searchResults.length)for(var n=0;n<e.searchResults.length;n++){var r=e.searchResults[n],o=r.hasOwnProperty("di")?r.di:r.i,i=Q(o);!i&&r.text&&(S._controllers.document.updatePageText(o,r.text),ve({pageText:r.text,customData:e.customData},r.text,o)),r.count<=0&&t<0?i?i.searchResult=[]:y[o]=[]:t<0&&0<r.count&&(t=o)}s.resolve(0<=t?t:null)}else s.reject()},function(){s.reject()}),s.promise()).done(function(e){if(null===e)if(P()){var t=u.pages[u.pages.length-1],n=t.hasOwnProperty("di")?t.di:t.i;_(o,n,i,a)}else a.reject();else{var r=Q(e);a.resolve(e,r)}}).fail(function(){a.reject()}):a.reject()}function T(e,t){var n=t.length,r=[];if(e.searchResult)r=e.searchResult;else for(var o=0;o<e.regions.length;o++)for(var i=0;i<e.regions[o].lines.length;i++){for(var a=e.regions[o].lines[i],s=0,l=[],u="",g=0;g<a.words.length;g++){var c=a.words[g],d=c.glyphs&&c.glyphs.length;je(c,1<=g?a.words[g-1]:null)&&(u+=" ",++s);for(var h=0;h<(d?c.glyphs.length:c.text.length);h++)l[s++]={bounds:d?c.glyphs[h].bounds:c.bounds,region:o,line:i,word:g,glyph:h},u+=(d?c.glyphs[h].text:c.text[h]).toLocaleLowerCase()}var f=0;do{if(0<=(f=u.indexOf(t,f))){for(var x=l[f],p=Math.min(f+n-1,l.length);!l[p]&&f<p;)--p;var v=l[p],y=Me({x:x.bounds.x,y:x.bounds.y,width:Math.abs(v.bounds.right-x.bounds.x),height:Math.abs(v.bounds.bottom-x.bounds.y)});r.push({bounds:y,region:x.region,line:x.line,word:x.word,glyph:x.glyph,endWord:v.word,endGlyph:v.glyph})}}while(0<=f++)}return r}function i(){O.unbind("pagetextloaded",e),A.unbind({pageshown:a}),y=[]}function e(e){var t=e.text,n=e.index;if(P()&&t&&c<=n&&n<=d&&(t.searchResult=T(t,u.text),y[n]&&Array.prototype.splice.call(y,n,1),t.searchResult.length)){var r=S.findPageFromIndex(n);r&&U(n,r)}}function a(e){if(P()&&e.page&&e.index>=c&&e.index<=d){var t=Q(e.index);!t||t.loading||t.searchResult||setTimeout(function(){t.searchResult=T(t,u.text),U(e.index,e.page)},0)}}function R(e){return function(){b=null,e&&e.apply(this,arguments),n()}}function C(e,t){return{page:e,region:t?t.region:0,line:t?t.line:0,word:t?t.word:0}}
/**
             * Indicates whether search should be wrapped around when first or last document page is match is reached.
             * @name Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#wrap
             * @type {boolean}
             */
v.wrap=!0,O.bind("pagetextloaded",e),A.bind({pageshown:a}),setTimeout(function(){for(var e=0;e<D.length;e++){var t=D[e]._index;if(!(t<c||d<t)){var n=Q(t);n&&!n.loading&&(n.searchResult=T(n,u.text),n.searchResult.length&&(U(t,D[e]),t===h&&(p=n.searchResult.length,f=h)))}}o(r)},0),
/**
         * Advances current item to the next query match or adds operation to the queue in case if next match is currently awaited.
         * @param {TextSearchCallback} callback - function that that is called when next match is found.
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#next
         */
v.next=o,v.prev=function(e){t.push({action:w,args:[!1,R(e)]}),n()},v.getQuery=function(){return u.sourceQuery}
/**
         * Indicates whether this iterator corresponds to the active search.
         *
         * If `false`, next/prev methods are always returning `null` match.
         * @returns {boolean}
         *
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isValid
         */,v.isValid=P,v.isSearching=function(){return P()&&(b||0<t.length)}
/**
         * Returns the formatted text for the whole line containing current match.
         * @returns {string}
         *
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getCurrentLineText
         */,v.getCurrentLineText=function(){if(P()&&m&&0<=m.page){var e=Q(m.page);if(e&&e.regions[m.region]&&e.regions[m.region].lines[m.line])return G(e.regions[m.region].lines[m.line])}return null},
/**
         * Disposes the current iterator. Calling this method is optional. Abandoned iterators will be disposed automatically.
         * @ignore
         *
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#dispose
         */
v.dispose=i}function de(){for(var e=[],t=0;t<S._controllers.document.getPageCount();t++){var n=Q(t);n&&n.searchResult&&(n.searchResult.length&&(e[t]=!0),n.searchResult=null)}for(var r=0;r<D.length;++r)e[r]&&U(r,D[r]);z.searchQuery=null}function he(e,t){return{type:"textdata",serverurl:e,query:"?atalatextdata=",method:"GET",data:{atala_docurl:t},cancel:!1,info:{ocr:{},error:void 0}}}function fe(e,t){function n(e){xe(e),"function"==typeof t&&t.call()}y(),S.makeHandlerRequest(e,n,n)}function xe(e){if(e){if(e.error&&(h("TextLoadError",e.error),y()),e.text.pages)for(var t=0;t<e.text.pages.length;++t)me(e.text.pages[t],t);S._controllers.document.initDocumentText(e.text),l({type:"textloaded"})}}function pe(i){var a=M.Deferred(),s=Q(i),l=S._controllers.document.getPageDefinition(i);if(!s&&l){s={loading:!0,regions:[],promise:a},S._controllers.document.updatePageText(i,s);var u=l.uri||A.config.documenturl,g=A.config.serverurl;setTimeout(function(){var t,n,r,e={type:"pagetextdata",serverurl:g,query:"?atalapagetext=",method:"GET",data:{atala_docurl:u,atala_index:l.index},cancel:!1,info:{page:s,error:void 0}},o=(t=s,n=i,r=a,function(e){ve(e,t,n,r)});S.makeHandlerRequest(e,o,o)},0)}else a.resolve(i,s);return a.promise()}function ve(e,t,n,r){if(e&&e.pageText)if(t.promise===r&&(t.loading=!1,t.promise=void 0),e.error)h("TextLoadError",e.error),t.regions=[],r&&r.reject&&r.reject(n);else{me(e.pageText,n),t.regions=e.pageText.regions?e.pageText.regions:[],M.extend(t,e.pageText);var o={type:"pagetextloaded",index:n,text:t,customData:e.customData};!function(){O.trigger.apply(O,arguments)}(o),l(o),r&&r.resolve&&r.resolve(n,t)}}function ye(e){for(var t=0;t<D.length;t++)if(D[t]._index===e)return D[t];return null}function be(e,t){if(e&&e._text){var n=e._text[0];if(n.getContext){var r=n.getContext("2d"),o=t?t.rotation:0,i=S.getViewerTransform(e._index,o);return r.setTransform(i.a,i.b,i.c,i.d,i.e,i.f),r}}return null}function me(e,t){if(e){Re(e),e.regions=e.regions||[],e.rotatedRegions=[],e.rotation=e.rotation||0;for(var n=e.regions.length-1;0<=n;--n)e.regions[n].page=t,we(e.regions[n],e.bounds)?(e.regions[n].index=n,e.regions[n].rotation&&e.rotatedRegions.push(e.regions[n])):Array.prototype.splice.call(e.regions,n,1);e.regions.sort(function(e,t){return ae(e,t)?-1:1})}}function we(e,t){if(!Re(e))return!1;e.rotation=e.rotation||0,e.lines=e.lines||[];for(var n=e.lines.length,r=e.lines.length-1;0<=r;--r)Pe(e.lines[r],t,e.rotation)||Array.prototype.splice.call(e.lines,r,1);return 0<n&&0===e.lines.length&&h("TextLoadError","Invalid region data received."),!(0<n)||0<e.lines.length}function Pe(e,t,n){if(!Re(e,t,n))return!1;e.words=e.words||[];for(var r=e.words.length,o=e.words.length-1;0<=o;--o)_e(e.words[o],t,n)||Array.prototype.splice.call(e.words,o,1);return!(0<r)||0<e.words.length}function _e(e,t,n){if(!Re(e,t,n))return!1;e.glyphs=e.glyphs||[],e.text=e.text||"",e.os&&(e.omitSpace=e.os,delete e.os);for(var r=e.glyphs.length-1;0<=r;--r){Te(e.glyphs[r],t,n)||Array.prototype.splice.call(e.glyphs,r,1)}return!0}function Te(e,t,n){return!!Re(e,t,n)&&!!e.text}function Re(e,t,n){var r=!1;if(e)if(e.b&&"string"==typeof e.b){var o=e.b.split(";");e.bounds={x:parseFloat(o[0]),y:parseFloat(o[1]),width:parseFloat(o[2]),height:parseFloat(o[3])},delete e.b,r=!0}else e.bounds&&e.bounds.hasOwnProperty("x")&&e.bounds.hasOwnProperty("y")&&e.bounds.hasOwnProperty("width")&&e.bounds.hasOwnProperty("height")&&(Me(e.bounds),r=!0);else e={};return e.bounds||(e.bounds={x:0,y:0,width:0,height:0}),Me(e.bounds),e.bounds&&(e.normalizedBounds=Ce(e,t,n)),r}function Ce(e,t,n){if(!e.normalizedBounds){if(n%360==0)return e.normalizedBounds=e.bounds,e.normalizedBounds;e.normalizedBounds=Me(Atalasoft.Utils.rotateRect(e.bounds,t,360-n))}return e.normalizedBounds}function Me(e){return e.right=e.x+e.width,e.bottom=e.y+e.height,e}function Ae(e,t){return e<t+i}function Se(e,t){return t-i<e}function Oe(e,t){return e&&t&&e.x===t.x&&e.y===t.y}function De(e,t,n){return Se(e,t)&&Ae(e,n)}function ze(e,t){return!!t&&(De(e.x,t.x,t.right)&&De(e.y,t.y,t.bottom))}function Qe(e,t){return!(!e&&!t)&&(Se(e.right,t.x)&&Se(t.right,e.x)&&Se(e.bottom,t.y)&&Se(t.bottom,e.y)||Ue(e,t))}function Ue(e,t){if(!e&&!t)return!1;var n=e.width>t.width?e:t;return t=n===e?t:e,Ae(n.x,t.x)&&Se(n.right,t.right)&&Ae(n.y,t.y)&&Se(n.bottom,t.bottom)}function ke(e,t){if(!Qe(e,t))return null;var n={x:Math.max(e.x,t.x),y:Math.max(e.y,t.y),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)};return n.x<n.right&&n.y<n.bottom?(n.width=Math.abs(n.right-n.x),n.height=Math.abs(n.bottom-n.y),n):null}function Ie(e,t,n){var r=S.getViewerTransform(e,t.rotation?t.rotation:0).invert();return Ee(r.x(n.x,n.y),r.y(n.x,n.y))}function je(e,t){return!(!e||!t||t.omitSpace)}function Le(e){return Ee(e.bounds.x,e.bounds.y)}function Ne(e){return Ee(e.bounds.right,e.bounds.bottom)}function Ee(e,t){return{x:e,y:t}}r.createHandlerRequest=he,r.makeHandlerRequest=fe,r.loadText=xe,r.loadPageText=function(e,t,n){fe(he(e,t),n)},"Atalasoft.Controls.WebDocumentViewer"===A.typeOf&&M.extend(A,o),A.bind({pagerecycled:c,pageshown:d,zoomchanged:u,documentchanged:p}),O.bind({textselectstart:P,textselectmove:E,textselectend:q,textselectcopy:B}),S._state.initialized?s():A.bind({initialized:s})};
"use strict";Atalasoft.Annotations.TextAnnotationUI=function(y,M,t){var A=Atalasoft.$,e=this,_=t,o=y.getEventObject(),k=null,r=null,T=null,i=null,U=y.get("text"),S=!1,O=3,B=Atalasoft.Utils.Browser.Mobile.Any()?{width:200,height:200}:{width:1,height:1},a={},n={moving:f,resized:f,moved:f,rotated:f};function l(){if(null==T&&(T=new Atalasoft.Annotations.FontUI(U.font)),i){var t=!0!==i.removed?i:null;o.unbind(t,{showeditor:d,hideeditor:h})}var e=S,n=U.autoscale;(i=n?M.atalaImage():M.html()).isHtml&&!n||(i.renderer=new Atalasoft.Annotations.AnnotationTextRenderer(y.get(),T),z=c),null!=k&&M._page&&(M._page.append(k),M._page.bind(a)),Raphael.vml&&(y.getObject().node.style.overflow="hidden"),i.transform(R().toTransformString(!0)),o.bind(i,{showeditor:d,hideeditor:h}),e&&d()}function d(t){k||function(){k=A("<textarea/>").hide(),M._page&&(M._page.append(k),M._page.bind(a));k.bind("change keydown mouseup mousemove mousedown",s),k.bind({blur:h}),y.bind({deselected:h});var t=y.getObject();if(k.css({position:"absolute","overflow-x":"auto","overflow-y":"auto","z-index":99999,border:"0px solid",padding:"0px","background-color":"transparent","text-align":U.align}),Atalasoft.Utils.Browser.Mobile.Any()){var e=y.get(),n=Atalasoft.Utils.getSVGOffset(M.canvas,M._page);k.css({left:e.x+n.left+"px",top:e.y+n.top+"px",width:e.width+"px","max-width":e.width+"px",height:e.height+"px","max-height":e.height+"px",border:t.attr("stroke")+" "+t.attr("strokewidth")+"px","background-color":t.attr("fill")})}T.setZoom(y.getZoom()),(Atalasoft.Utils.Browser.Chrome||Atalasoft.Utils.Browser.Safari)&&k.css({resize:"none"});null!=U.value&&k.val(U.value);U.readonly&&k.prop("readonly","readonly");T.repaint(k)}(),function(){if(y&&!y.get("visible"))return;!k.is(":hidden")&&S||(i.hide(),k.prop("readonly",U.readonly?"readonly":""),k.show(),g());Atalasoft.Utils.Browser.Touch&&k.focus(function(){k[0].setSelectionRange(0,9999)});k[0].focus(),S=!0}()}function s(t){t.stopPropagation(),U.value!==k.val()&&(U.value=k.val(),y.set({text:U}))}function h(){k&&((k.is(":visible")||S)&&(k.hide(),i.show(),g()),1==S&&(0==arguments.length||1==arguments.length&&"blur"==arguments[0].type)&&o.trigger("annotationtextchanged"),k[0].blur(),S=!1)}function u(){!y||y.get("visible")?S?d():i.show():i.hide(),i.backgroundColor&&i.backgroundColor(y.get("fill").color)}function j(t){t&&(M!==t||i.removed)&&(M=t,null!=r&&(r.remove(),r=null),l(),u())}function g(t){if(j(t),z(),k&&(!k.is(":hidden")||S)){var e=y.get("outline").width/2,n=y.get(),o=y.getZoom(),a=y.getBox(),r=R(),i=V(r,a.x,a.y),l=V(r,a.x+a.width,a.y+a.height),d=a.width*o,s=a.height*o,h=(i.x+l.x-d)/2,u=(i.y+l.y-s)/2,g=O*o,c=e*o,f=2*(g+c),p=Math.max(Math.ceil(d-f),B.width),x=Math.max(Math.ceil(s-f),B.height),m=Atalasoft.Utils.getSVGOffset(M.canvas,M._page),w=n.rotation+_.getPageRotation(y._pageindex),v=0!==w?"rotate("+w+"deg)":"",b={left:Math.round(h+m.left+c)+"px",top:Math.round(u+m.top+c)+"px",width:p+"px",height:x+"px","max-width":p+"px","max-height":x+"px",padding:Math.ceil(g)+"px"};A.extend(b,Atalasoft.Utils.__htmlTransformStyle(v)),k.css(b)}T&&(T.set(U.font),T.setZoom(y.getZoom()),T.repaint(k))}function z(){var t=y.get();r||(r=A('<textarea selectable="false"/>'),A(i.innerDom).append(r),r.css({"background-color":"transparent",border:"0px solid","overflow-x":"hidden","overflow-y":"hidden","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none",resize:"none",cursor:"inherit"}),r.attr("readonly","readonly"),r.bind({focus:function(){return this.blur(),!1}}),r[0].raphaelParent=!0),r.val(U.value);var e=y.get("outline").width/2,n=Math.max(Math.ceil(t.width-2*(e+O)),1),o=Math.max(Math.ceil(t.height-2*(e+O)),1);if(T&&(T.set(U.font),T.repaint(r,1,!0)),r.css({width:n+"px",height:o+"px","max-width":n+"px","max-height":o+"px",padding:O+"px","text-align":U.align}),i.attr({x:Math.round(e+t.x),y:Math.round(e+t.y),width:t.width,height:t.height}),0<=t.cornerradius){var a=y.getObject();A(a[0]).attr({rx:t.cornerradius||0,ry:t.cornerradius||0})}i.transform(R().toTransformString(!0))}function c(){var t=y.get("outline").width/2,e=y.get(),n=Math.max(Math.ceil(e.width-2*(t+O)),0),o=Math.max(Math.ceil(e.height-2*(t+O)),0);if(T&&T.set(U.font),i.attr({x:Math.round(t+O+e.x),y:Math.round(t+O+e.y),width:n,height:o}),0<=e.cornerradius){var a=y.getObject();A(a[0]).attr({rx:e.cornerradius||0,ry:e.cornerradius||0})}i.renderer&&i.renderer.renderToSVGImage(i[0],{width:n,height:o}),i.transform(R().toTransformString(!0))}function R(){var t=Raphael.matrix(),e=_.getViewerTransform(y._pageindex),n=y.getTransform();return t.add(e.a,e.b,e.c,e.d,e.e,e.f),t.add(n.a,n.b,n.c,n.d,n.e,n.f),t}function f(){i&&g()}function V(t,e,n){return{x:t.x(e,n),y:t.y(e,n)}}l(),g(),y.bind(n),e.dispose=function(){k&&k.remove();r&&r.remove();T&&T.dispose();i&&i.remove();M&&M._page&&M._page.unbind(a);y.unbind(n),U=i=r=T=k=o=e=null},e.set=function(t){t&&A.extend(U,t)},e.get=function(t){return t?U[t]:U},e.getFont=function(){return T},e.updateView=u,e.changepaper=j,e.repaint=g};
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
/**
 * Control that shows thumbnails of document pages and annotations.
 * @param {WebThumbnailerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @augments Atalasoft.Controls.WebDocumentViewer
 * @returns {WebDocumentThumbnailer} A new control with the given settings.
 */Atalasoft.Controls.WebDocumentThumbnailer=function(e,a){var g=Atalasoft.$,p=null,u=e.viewer||null,f=[],m=[],c=null,h=null,d=null,b="atala_dragdata",v="ui-sortable",_="sortable",w="atala_scroll_parent",t=Atalasoft.Utils.Fitting,y=Atalasoft.Utils.ScrollDirection,x=Atalasoft.Utils.SelectionMode,o=Atalasoft.Utils.SelectedItemsOrder,r=null,l={size:{width:0,height:0},sizes:[{width:0,height:0}],count:0,number:-1,dpi:96,vector:!1},z={base:null,loading:!1,initialized:!1,scrolling:!1,dragdropping:!1,viewer:{zoom:0,pagenumber:0,api:{}},selfapi:{}},n={moves:0,start:{x:NaN,y:NaN}},D={divsize:-1,scale:1,size:0,zoom:1,zoomfull:1},I={direction:y.Vertical,
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
selectionmode:Atalasoft.Utils.SelectionMode.SingleSelect,
/**
         * @property {Atalasoft.Utils.SelectedItemsOrder} [selecteditemsorder=ItemIndexOrder] - Defines the order in which selected pages are to be processed.
         */
selecteditemsorder:Atalasoft.Utils.SelectedItemsOrder.ItemIndexOrder},i={type:"Atalasoft.Controls.WebDocumentThumbnailer",debug:!0,showpageborder:!0,forcepagefit:!0,toolbarparent:g("<div/>")},s={
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
thumbdragcomplete:null},P=void 0,C=void 0;function M(){return{get:function(){return p},detachViewer:E,activateViewer:O}}function T(e,t){if(e){var a=t?e.bind:e.unbind,o=t?p.unbind:p.bind;a.call(e,{beforehandlerrequest:Ce,documentloaded:be,scroll:xe,pagerotated:Ie,pageinserted:_e,pageremoved:we,pagemoved:ye}),o.call(p,{pagerotated:ve,pageinserted:ve,pageremoved:ve,pagemoved:ve}),A(e,e.document.events,a),I.allowannotations&&(a.call(e,{annotationresized:Pe,annotationmoved:Pe,annotationrotated:Pe,annotationchanged:Pe,annotationcreated:ze,annotationdeleted:De}),e.annotations&&A(e,e.annotations.events,a))}}function A(e,t,a){var o={};for(var n in t)t.hasOwnProperty(n)&&(o[n]=S);a.call(e,o)}function S(){p.trigger.apply(p,arguments)}
/**
     * Checks whether current thumbnailer is controlling referenced viewer.
     *
     * If viewer is linked only to the current thumbnailer, this method always return `true`.
     *
     * If thumbnailer is not linked to any viewer, this method always return `false`.
     * @function Atalasoft.Controls.WebDocumentThumbnailer#isActive
     * @returns {boolean} `true` if current thumbnailer instance is controlling referenced viewer; `false` otherwise.
     */function F(){return u&&(!r||r&&r.isThumbnailerActive(M()))}
/**
     * Takes ownership over referenced viewer, i.e. if shared viewer is currently displaying other document, it's switched to display document from calling thumbnailer.
     * @function Atalasoft.Controls.WebDocumentThumbnailer#activate
     */function O(e,t,a){if(!u&&e&&(h=(u=e).__getViewerLink(p,d),r=h.stateManager),u&&u.isReady()&&(!F()||a)){var o=u&&!F(),n=function(){var e={pagewidth:l.size.width,pageheight:l.size.height,pagecount:l.count,dpi:l.dpi,colordepth:z.base.controllers.memory.colorDepth,vector:l.vector,pagenumber:z.viewer.pagenumber,zoom:z.viewer.zoom};I.allowannotations&&d._annos&&(e.layers=pe(d._annos,"items"));I.allowforms&&d._fields&&(e.forms={fields:pe(d._fields)});return e}();n.customData=null==t?void 0:t.customData,r.activateThumbnailer(M(),n,d,I,a),o&&(T(u,!0),q((s={thumb:{annotations:null,document:null,text:null,getCurrentPageIndex:null,getZoom:null,zoom:null,zoomIn:null,zoomOut:null,next:null,previous:null,save:null,showPage:null,setMouseTool:null},viewer:{reloadPage:function(e,t){return P=e.reloadPage,J}}}).viewer,i=u,p,z.viewer.api),q(s.thumb,p,i,z.selfapi))}var i,s;K(!0)}function E(){if(u&&u.isReady()&&(z.viewer.zoom=u.getZoom(),z.viewer.pagenumber=u.getCurrentPageIndex(),I.allowforms&&z.base.controllers.forms&&h._fields)){var e={forms:{fields:pe(h._fields)}};z.base.controllers.forms.loadForms(e)}var t;T(u,!1),t=u,q(k(z.viewer.api),t,z.viewer.api,{}),q(k(z.selfapi),p,z.selfapi,{}),K(!1)}function q(e,t,a,o){for(var n in e)e.hasOwnProperty(n)&&(t.hasOwnProperty(n)&&t[n]&&(o[n]=t[n]),"function"==typeof e[n]?t[n]=e[n](t,a):a.hasOwnProperty(n)&&a[n]&&(t[n]=a[n]))}function k(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=null);return t}function V(e,t,a){}function L(){}function R(){if(I.debug){var e=L(),t=H();return g.extend(!0,e,{thumbnailer:{config:I,index:t[0],indices:t,links:{viewer:h,self:d},page:l,thumb:D,state:z}}),e}return null}
/**
    * Scrolls the viewer to the given page number and executes the callback when finished
    * @function Atalasoft.Controls.WebDocumentThumbnailer#scrollToThumb
    * @param {number} index - Index of the page to scroll to.
    * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
    */
function U(){}
/**
     * @summary Gets the selected thumbnails indices.
     * @description Gets the selected thumbnails indices with respect of {@link WebDocumentViewerConfig.selecteditemsorder| selecteditemsorder} parameter value.
     * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPagesIndices
     * @returns {number[]}
     */
function H(){var e=f.slice(0);return I.selecteditemsorder===o.ItemIndexOrder&&e.sort(function(e,t){return e-t}),e}function N(e){var t=1,a=function(){--t<=0&&(F()&&r&&u&&O(u,p.getDocumentInfo(),!0),"function"==typeof e&&e.call())};F()&&(r?r.closeDocument(M(),d):u.isReady()&&(t++,u.empty(a))),j(a)}function j(e){}function W(){F()&&(r?r.closeDocument(M(),d):u.empty(),E()),X(),h=u=null}function X(){}function Y(e,t,a,o){z.base&&g.each(z.base.dom.pageDivs,function(e,t){t.unbind(c),t.thumbInitialized=!1}),null==o&&("function"==typeof t?(o=t,t=null):"function"==typeof a&&(o=a,a=null));"string"==typeof e&&(r.closeDocument(M(),d),z.viewer.pagenumber=0),B(e,t,a,function(e,t){p.scrollTo(0,0,!1),Fe(e,t,o)})}function B(e,t,a,o){}function K(e){if(z.base){0===f.length&&f.push(0);for(var t=0;t<z.base.dom.pageDivs.length;t++){var a=0<t?z.base.dom.pageDivs[t-1]:null,o=z.base.dom.pageDivs[t],n=!1;-1<f.indexOf(o._index)&&e?(o.removeClass("atala_groupped_selection"),o.addClass(p.domclasses.atala_active_thumb),null!==a&&-1<f.indexOf(a._index)&&(o.addClass("atala_groupped_selection"),a.addClass("atala_groupped_selection")),n=!0):(o.removeClass(p.domclasses.atala_active_thumb),o.removeClass("atala_groupped_selection")),ae(o,n)}}}
/** 
     * Highlights the thumbnail at the given index, and scrolls to it in the linked viewer, if possible.
     * @param {number|string} index - Index of the page to select. Can be passed as string representation of a number
     * @param {boolean} [append] - Append index to the already selected thumbs or not. Its value ignores in single select mode.
     * @param {NotificationCallback} [callback] - function that is called when thumbnail has been selected.
     * @function Atalasoft.Controls.WebDocumentThumbnailer#selectThumb
     */function Z(e,t,a){if(h._controllers.upload.abort(),!(null===(e=Atalasoft.Utils.ParseInt(e))||e<0||e>=p.getDocumentInfo().count||void 0!==t&&"boolean"!=typeof t&&null!==t||void 0!==a&&"function"!=typeof a&&null!==a)){if(t=!!t&&I.selectionmode!==x.SingleSelect){if(-1<f.indexOf(e))return;f.push(e)}else H().forEach(function(e){p.trigger({type:"thumbdeselected",index:e})}),f.length=0,f.push(e);G(),p.trigger({type:"thumbselected",index:e}),"function"==typeof a&&a()}}
/** 
     * Resets the thumbnail highlight at the given index, and scrolls to the next selected thumbnail in the linked viewer, if possible.
     *
     * This function does't deselect the given index in the single select mode, and in multi select mode, if one page is selected.
     * @param {number|string} index - Index of the page to deselect. Can be passed as string representation of a number
     * @param {NotificationCallback} [callback] - function that is called when thumbnail has been deselected.
     * @function Atalasoft.Controls.WebDocumentThumbnailer#deselectThumb
     */function $(e,t){if(null!==(e=Atalasoft.Utils.ParseInt(e))&&(void 0===t||"function"==typeof t||null===t)){var a=f.indexOf(e);-1!==a&&1!==f.length&&(f.splice(a,1),G(),p.trigger({type:"thumbdeselected",index:e}),"function"==typeof t&&t())}}function G(){var e=H();if(r?(z.viewer.pagenumber=e[0],O(u,p.getDocumentInfo())):K(!0),!(1<f.length)&&u){var t=u.getCurrentPageIndex(),a=e[0];0<=t&&a!==t&&(z.scrolling=!0,a===t-1?u.previous(1):a===t+1?u.next(1):u.showPage(a))}}
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
     */function J(e,t,a,o,n){if(C){var i=Array.prototype.slice.call(arguments);if(u&&u.isReady())if(F()){var s=Array.prototype.slice.call(i);"function"!=typeof(n=i.pop())&&(i=Array.prototype.slice.call(s)),C.apply(this,i).then(function(){P&&P.apply(this,s)})}else C.apply(this,arguments);else C.apply(this,arguments)}}function Q(){if(z.base){if(z.initialized&&0<z.base.dom.pageDivs.length&&null!=z.base.dom.pageDivs[0]._img&&!z.base.dom.pageDivs[0]._img._size.isEmpty()){var e=z.base.dom.pageDivs[0]._img._size;e.width>e.height?D.scale=D.size/e.width:D.scale=D.size/e.height}else{var t=z.base.page.size.width/z.base.page.size.height<1,a=Math.ceil(z.base.page.size.height*z.base.config.zoom),o=Math.ceil(z.base.page.size.width*z.base.config.zoom),n=D.size;I.direction===y.Vertical?D.divsize=Math.ceil(z.base.page.size.width*z.base.config.zoom):I.direction===y.Horizontal&&(D.divsize=Math.ceil(z.base.page.size.height*z.base.config.zoom)),fe(n=n<=0?D.divsize-2*I.thumbpadding:n),I.tabular&&1<I.columns&&I.direction===y.Vertical&&function(){if(I.tabular){var e=void 0;if(1<I.columns)e=(D.size+2*I.thumbpadding+I.pagespacing)*Math.min(z.base.controllers.document.getPageCount(),I.columns);else if(1<I.rows){var t=Math.ceil(z.base.controllers.document.getPageCount()/I.rows);e=(D.size+2*I.thumbpadding+I.pagespacing)*t}e&&z.base.dom.content.width(e)}}();var i=t?a:o;D.scale=i?z.base.config.zoom*(D.size/i):1,D.zoomfull=D.scale,I.minwidth>z.base.page.size.width*D.scale&&z.base.page.size.width&&(I.minwidth=z.base.page.size.width*D.scale),z.initialized=!0}var s=I.showpageborder?2*I.pageborderwidth:0,r=D.size+2*I.thumbpadding-s;if(p.trigger({type:"pagedivsresized",height:r,width:r,fullzoom:D.zoomfull,minwidth:I.minwidth}),I.allowdragdrop){z.base.dom.content.addClass(p.domclasses.atala_thumb_draggable),z.base.dom.content.css({minWidth:r,minHeight:r});var l=Math.round(D.size/2);z.base.dom.content.sortable({containment:"window",connectWith:"."+p.domclasses.atala_thumb_draggable,appendTo:document.body,placeholder:p.domclasses.atala_drag_placeholder,cursorAt:{left:l,top:l},delay:I.dragdelay,distance:4,helper:ne,opacity:.65,scroll:!0,scrollSensitivity:l,scrollSpeed:10,start:ie,receive:ce,stop:le,over:se,change:re,tolerance:"pointer",update:de,zIndex:100})}g.each(z.base.dom.pageDivs,function(e,t){t.width(D.size),t.height(D.size),t.thumbInitialized||(t.bind(c),t.css({padding:I.thumbpadding,"background-color":I.backcolor,cursor:"pointer","margin-bottom":I.pagespacing+"px","text-align":"center",position:"relative"}),I.tabular?t.css({"margin-right":I.pagespacing+"px"}):I.direction===y.Horizontal&&t.css({"margin-right":I.pagespacing+"px","margin-bottom":"0px"}),t._paper&&Atalasoft.Utils.Browser.Explorer&&(t._paper.canvas.style.top="",t._paper.canvas.style.width="",t._paper.canvas.style.height=""),t._grips&&(t._grips.push=function(){}),t.thumbInitialized=!0),ee(t._img,t._paper)}),0<z.base.dom.pageDivs.length&&d.__adjustEdgeHeights(z.base.dom.pageDivs[0]._index)}}function ee(e,t,a,o){if(z.base){var n=o||e&&e.getScaledSize(a);if(!n)return;var i=n.width,s=n.height,r=D.size*(z.base.config.zoom/D.zoomfull);if(r<i||r<s){var l=a*(r/(i/s<1?s:i));i=Math.round(e._size.width*l),s=Math.round(e._size.height*l),a=l}e.width(i),e.height(s);var c=e.getDomElement();c[0].style.left="50%",c[0].style.top="50%",c[0].style.position="absolute",c[0].style.marginLeft=-Math.round(i/2)+"px",c[0].style.marginTop=-Math.round(s/2)+"px",t&&(t.canvas.style.left="50%",t.canvas.style.top="50%",t.canvas.style.marginLeft=-Math.round(i/2)+"px",t.canvas.style.marginTop=-Math.round(s/2)+"px",t.canvas.style.zIndex=1),e.trigger({type:"pagezoom",index:e._page._index,height:Math.round(s),width:Math.round(i),prevzoom:z.base.config.zoom,zoom:a})}}function te(e,t,a){var o=e.data("selected")?t:a;e.css("background-color",o)}function ae(e,t){var a=t?I.selectedcolor:I.backcolor;e.data("selected",t),e.css("background-color",a)}function oe(e){var t=this;this._initial=e,this._actual=e,this.scrollTop=function(){t._actual.scrollTop()},this.scrollLeft=function(){t._actual.scrollTop()},this.setObject=function(e){t._actual=e,this[0]=t._actual[0]},this.offset=function(){return t._actual.offset()},this.setObject(e)}function ne(e,t){z.dragdropping=!0,K(F());var a,o,n=g('<div class="atala_drag_helper"></div>'),i=(o=[],(a=t).hasClass(p.domclasses.atala_active_thumb)&&F()?H().forEach(function(e){for(var t=0;t<z.base.dom.pageDivs.length;t++)if(z.base.dom.pageDivs[t]._index===e){o.push(z.base.dom.pageDivs[t]);break}}):o.push(a),o);1<i.length&&(g(this).sortable("option","items","> *:not(.atala_groupped_selection)"),g(this).sortable("refresh"));for(var s=t.hasClass(p.domclasses.atala_active_thumb)&&F()?Math.min(3,H().length):1,r=0;r<i.length||r<s;r++){var l=r<i.length?i[r]:i[0];if(r<s){var c=l.find("."+p.domclasses.atala_page_image_anchor).first().clone();c.css({position:"absolute",left:10*r+"px",top:-10*r+"px",right:"0px",bottom:"0px",margin:"","z-index":-r}),n.append(c)}}z.base.dom.content.append(n);var d=n.scrollParent(),u=z.base.dom.content.data(v)||z.base.dom.content.data(_);return n.hide(),setTimeout(function(){u&&(u.scrollParent=new oe(d),i.forEach(function(e){e.data(w,u.scrollParent)})),n.appendTo("body"),n.show()},1),n}function ie(e,t){h._controllers.upload.abort();var a=function(e){if(e.hasClass(p.domclasses.atala_active_thumb)&&F())return H();for(var t=0;t<z.base.dom.pageDivs.length;t++)if(z.base.dom.pageDivs[t][0]===e[0])return[z.base.dom.pageDivs[t]._index];return null}(t.item);if(null!==a){var o=[];a.forEach(function(e){o.push(p.document.getPageReference(e))});var n={start:a,end:a[0],updateHandled:!1,pageRefs:o,documenturl:"object"===_typeof(o[0])&&o[0].uri?o[0].uri:z.base.config.documenturl,thumbLink:d,thumb:p,thumbId:d._id,viewerId:h._id,state:z,externalDropIndex:null,insertAfterSelf:!1};t.item.data(b,n),z.base.controllers.mouseTool.pauseTool(),t.placeholder.width(t.item.width()),t.placeholder.height(t.item.height()),t.placeholder.css({margin:t.item.css("margin"),display:z.base.config.tabular||z.base.config.direction===y.Horizontal?"inline-block":"block",padding:Math.max(0,z.base.config.thumbpadding-1)}),p.trigger({type:"thumbdragstart",dragindex:n.start[0],dragindices:n.start})}}function se(e,t){if(!Atalasoft.Utils.Browser.Mobile.Any()){var a=t.placeholder.parents("."+p.domclasses.atala_scroller),o=t.item.data(w);a.length&&o&&o[0]!==a.first()[0]&&o.setObject(a.first())}}function re(e,t){var a=t.item.data(b);if(a){var o=t.placeholder.prev();a.insertAfterSelf=o.length&&t.item[0]===o.first()[0]}}function le(e,t){var a=t.item.data(b),o=I.parent.offset().left,n=I.parent.offset().left+I.parent.width(),i=I.parent.offset().top,s=I.parent.offset().top+I.parent.height(),r=t.position.left+t.item.width()/2,l=t.position.top+t.item.height()/2,c=o<r&&r<n&&i<l&&l<s;if(a&&c){z.base.controllers.mouseTool.resumeTool(),a.updateHandled||(a.end=ue(t),a.updateHandled=!0),a.insertAfterSelf&&++a.end,a.end=a.start[0]<a.end?a.end-1:a.end;var d={type:"thumbdragend",dragindex:a.start[0],dragindices:a.start,dropindex:a.end,source:a.thumb,sourcedocument:a.documenturl,target:p,external:!1,pageref:a.pageRefs[0],pagerefs:a.pageRefs,cancel:!1};p.trigger(d,d),d.cancel?g(this).sortable("cancel"):(h&&F()&&u.isReady()?h._controllers.document.movePages(a.start,a.end):z.base.controllers.document.movePages(a.start,a.end),ge(),(f.length=0)<m.length?(m.sort(function(e,t){return e-t}).forEach(function(e){Z(e,!0)}),m.length=0):Z(a.end,!1),d={type:"thumbdragcomplete",dragindex:a.start[0],dragindices:a.start,dropindex:a.end,source:a.thumb,target:p},z.dragdropping=!1,p.trigger(d,d))}else a&&!c&&g(this).sortable("cancel");g(this).sortable("option","items","> *"),g(this).sortable("refresh"),t.item.data(b,null)}function ce(e,t){g(t.sender).sortable("cancel");var o=t.item.data(b);if(o){o.thumbLink._controllers.mouseTool.resumeTool();var a=z.base.dom.pageDivs.length?z.base.dom.pageDivs[0]._index:0;o.end=o.externalDropIndex+a||0;var n={type:"thumbdragend",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,sourcedocument:o.documenturl,target:p,pageref:o.pageRefs[0],pagerefs:o.pageRefs,external:!0,cancel:!1,copyannotations:!0};if(p.trigger(n.type,n),!n.cancel){var i=[];n.copyannotations&&o.thumb.config.allowannotations&&p.config.allowannotations&&o.start.forEach(function(e){i.push(o.thumb.annotations.getFromPage(e))}),o.viewerId!==h._id&&o.thumb.selectThumb(o.thumb.getCurrentPageIndex(),!1),z.scrolling=!0,o.thumb.document.removePages(o.start),p.document.insertPages(null,o.pageRefs,o.end),u&&(z.viewer.pagenumber=o.end,O(u,p.getDocumentInfo(),!0)),ge(),f.length=0,I.selectionmode===x.SingleSelect?Z(o.end):o.start.forEach(function(e,t){Z(o.end+t,!0)}),i.forEach(function(e,t){if(e)for(var a=0;a<e.length;a++)p.annotations.createOnPage(e[a],o.end+t)}),p.trigger("thumbdragcomplete",{type:"thumbdragcomplete",dragindex:o.start[0],dragindices:o.start,dropindex:o.end,source:o.thumb,target:p}),z.dragdropping=!1,o.state.dragdropping=!1}}t.item.data(b,null)}function de(e,t){var a=t.item.data(b);a&&(z.base.dom.content.has(t.item).length?(a.end=ue(t),a.thumbId===d._id&&p.trigger({type:"thumbsreordered",dragindex:a.start[0],dragindices:a.start,dropindex:a.end})):a.externalDropIndex=t.item.index(),a.updateHandled=!0)}function ue(e){for(var t=-1,a=e.item.prev().length?e.item.prev().first():[null],o=0;o<z.base.dom.pageDivs.length;++o)if(z.base.dom.pageDivs[o][0]===a[0]){t=z.base.dom.pageDivs[o]._index;break}return t+1}function ge(){var e=z.base.dom.scroller[0];if(d.__isObjectInRect(z.base.dom.edges[1][0],e,e.scrollLeft,e.scrollTop,e.scrollLeft+e.clientWidth,e.scrollTop+e.clientHeight)){var t=z.base.dom.pageDivs[0]._index,a=d.__getIndexFromPos(e.scrollLeft,e.scrollTop),o=a-t;o<z.base.dom.pageDivs.length&&0<o?d.__showNext(o):(d.__showPageAsync(a,!1),d.__redrawVisiblePages())}}function pe(e,t){var a=[];for(var o in e)if(e.hasOwnProperty(o)){var n=[],i=t?{}:n;for(var s in t&&(i[t]=n),e[o])e[o].hasOwnProperty(s)&&(n[s]=e[o][s].get(),n[s].multiview=!0);a[o]=i}return a}function fe(e){e<=0&&p.trigger({type:"throwerror",name:"Invalid thumb size",msg:"Thumb size cannot be "+e+". Check configuration parameters 'minwidth', 'thumbpadding' and 'thumbsize'. If 'thumbsize' is not specified, then 'minwidth' should be at least (2 * thumbpadding + 1)"}),D.size=e,z.base&&z.base.config.forcepagesize&&(z.base.config.forcepagesize.width=e,z.base.config.forcepagesize.height=e)}function me(e,t){var a="#FFFFFF",o="#FFF",n="white",i="rgb(255, 255, 255)",s=V(null,"dummy");return s.css("backgroundColor",n),s.css("backgroundColor",e),s.css("backgroundColor")===i&&(e=e.toLowerCase())!==n&&e!==a&&e!==o&&e!==i&&(e=t),e}function he(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function be(e){}function ve(e,t){0<z.base.state.batchoperation||("function"==typeof e&&(t=e),Q(),d.__redrawVisiblePages(!0),d.__adjustVisiblePages(),z.base&&h&&F()&&u.isReady()?(h.__redrawVisiblePages(!0),h.__adjustVisiblePages(!1,t)):"function"==typeof t&&t())}function _e(e){z.base&&(z.base.controllers.annotations&&z.base.controllers.annotations.insertLayer(null,null,e.destindex),z.base.controllers.forms&&z.base.controllers.forms.insertForm(null,null,e.destindex),h._state.batchoperation<=0&&ve())}function we(e){z.base&&(z.base.controllers.annotations&&z.base.controllers.annotations.removeLayer(e.index),z.base.controllers.forms&&z.base.controllers.forms.removeForm(e.index),h._state.batchoperation<=0&&ve())}function ye(e){if(z.base&&(z.base.controllers.annotations&&z.base.controllers.annotations.moveLayer(e.shiftedsrcindex,e.destindex),z.base.controllers.forms&&z.base.controllers.forms.moveForm(e.shiftedsrcindex,e.destindex),function(){var e=z.base.dom.pageDivs[0]._index;z.base.dom.pageDivs.sort(function(e,t){return e.index()-t.index()});for(var t=0;t<z.base.dom.pageDivs.length;t++){var a=z.base.dom.pageDivs[t];a._index=e+t,null!=a._num&&a._num.text(a._index+1)}}(),h._state.batchoperation<=0&&ve(),z.dragdropping)){var t=e.destindex;m.sort(function(e,t){return t-e}).forEach(function(e){e===t&&t--}),m.push(t)}}function xe(e){var t=u.getCurrentPageIndex(),a=H();a.length<=1&&a[0]!==t&&!z.scrolling&&Z(t)}function ze(e){if(z.base){var t=h._annos[e.page]||null,a=null;if(t)a=t[t.length-1].get();a&&a.type===e.anno.type&&(a.multiview=!0,z.base.controllers.annotations.createAnnotation(a,e.page))}}function De(e){z.base&&z.base.controllers.annotations.deleteAnnoOnPage(e.page,e.index)}function Ie(e){z.base&&h._state.batchoperation<=0&&ve()}function Pe(e){if(z.base){var t=e.anno.getPageIndex();if(function(e){for(var t=0;t<z.base.dom.pageDivs.length;t++)if(z.base.dom.pageDivs[t]._index===e)return!0;return!1}(t))for(var a=z.base.controllers.annotations.getAnnosFromPage(t),o=0;o<a.length;o++)a[o].type===e.anno.type&&a[o].update(!0)}}function Ce(e){if(("docinfo"===e.request.type||"annodata"===e.request.type||"formdata"===e.request.type)&&z.base){e.request.cancel=!0,"docinfo"===e.request.type&&(e.request.info.pagewidth=l.size.width,e.request.info.pageheight=l.size.height,e.request.info.pagecount=l.count,e.request.info.dpi=l.dpi,e.request.info.colordepth=z.base.controllers.memory.colorDepth,e.request.info.vector=l.vector);var t=void 0!==e.request.info.docIndex?e.request.info.docIndex:e.request.info.offset||0,a=-1<e.request.info.length?e.request.info.length+t:void 0;if(e.request.info.offset=e.request.info.offset||0,I.allowannotations&&("annodata"===e.request.type||e.request.data.atala_annurl)){var o=z.base.controllers.annotations.__getDebugInfo().data;e.request.info.layers=pe(o.annos.slice(t,a),"items")}if(I.allowforms&&("formdata"===e.request.type||e.request.data.atala_formurl)){var n=z.base.controllers.forms.__getDebugInfo().data;e.request.info.forms={fields:pe(n.fields.slice(t,a))}}u.trigger({type:"handlerreturned",request:e.request})}}function Me(e){}function Te(e){}function Ae(e,t,a){for(var o in a)a.hasOwnProperty(o)&&delete a[o]}function Se(){z.base={config:d._config,controllers:d._controllers,dom:d._dom,page:d._page,state:d._state,stateManager:d.stateManager}}function Fe(e,t,a){l.size.width=z.base.page.size.width,l.size.height=z.base.page.size.height,l.count=z.base.page.count,l.dpi=z.base.page.dpi,l.vector=z.base.page.vector,Q(),Ze(z.base.dom.scrollH),Ze(z.base.dom.scrollV);var o=function(){F()&&Z(I.selectedindex),a&&"function"==typeof a&&a(e)};z.viewer.zoom=0,(F()||r&&!r.isViewerActive())&&O(u,t,!0),o()}function Oe(e){te(g(this),I.selectedhovercolor,I.hovercolor)}function Ee(e){te(g(this),I.selectedcolor,I.backcolor)}function qe(e){if(0===e.button){for(var t=e.currentTarget,a=-1,o=0;o<z.base.dom.pageDivs.length;o++)if(z.base.dom.pageDivs[o][0]===t){a=z.base.dom.pageDivs[o]._index;break}if(-1!==a)if(I.selectionmode===x.MultiSelect){var n=e.shiftKey,i=e.ctrlKey;if(n){var s=f[f.length-1];if(a<s)for(var r=s-1;a<=r;r--)ke(r,!0);else for(var l=s+1;l<=a;l++)ke(l,!0)}else ke(a,i)}else Z(a)}}function ke(e,t){t=t&&F(),-1!==f.indexOf(e)&&t?$(e):Z(e,t)}function Ve(e,t,a){if(!(1<e.originalEvent.touches.length)){e.preventDefault();var o=e.originalEvent.changedTouches[0],n=document.createEvent("MouseEvents");n.initMouseEvent(t,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,a,null),e.target.dispatchEvent(n)}}function Le(e){if(n.moves=0,n.start={x:NaN,y:NaN},e.originalEvent.touches&&1===e.originalEvent.touches.length){var t=e.originalEvent.touches[0];n.start.x=t.screenX,n.start.y=t.screenY}Ve(e,"mouseover",0),Ve(e,"mousedown",0)}function Re(e){if(e.originalEvent.touches&&e.originalEvent.touches.length){var t=e.originalEvent.touches[0];(1<e.originalEvent.touches.length||5<Math.abs(n.start.x-t.screenX)||5<Math.abs(n.start.y-t.screenY))&&n.moves++,Ve(e,"mousemove",0)}}function Ue(e){Ve(e,"mouseup",0),0<n.moves?n.moves=0:Ve(e,"click",0),Ve(e,"mouseout",0)}function He(e){z.dragdropping&&(K(F()),z.base.dom.content.sortable("refresh"))}function Ne(e){if(I.showthumbcaption){if(!e.page._caption){var t=g("<div/>");t.css({left:"3%",bottom:"16px",width:"94%",position:"absolute",zIndex:1,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),t.addClass(p.domclasses.atala_thumb_caption),e.page._caption=t,e.page.append(t)}var a=e.page._index+1+"";d._page.caption&&(a=d._page.caption.replace("{0}",a),e.page.attr("title",a)),e.page._caption.text(a)}e.page&&e.page._img&&!e.page._img._loaded&&ee(e.page._img,e.page._paper),ae(e.page,-1<f.indexOf(e.page._index)&&F())}function je(e){e.image&&(e.image._loaded?e.page&&ee(e.image,e.page._paper,D.scale,{width:e.width,height:e.height}):e.image.css({position:"absolute"}))}function We(e){h&&h.__status&&h.__status(e.message)}function Xe(e){if(z.base){var t=z.base.page.size.width/z.base.page.size.height<1,a=Math.ceil(z.base.page.size.height*z.base.config.zoom),o=Math.ceil(z.base.page.size.width*z.base.config.zoom),n=Math.max(a,o),i=z.base.config.zoom*(n/(t?a:o));D.zoom=z.base.config.zoom/D.zoomfull,D.scale=i,g.each(z.base.dom.pageDivs,function(e,t){t.width(n),t.height(n)})}}function Ye(e){}function Be(e){}function Ke(e){h&&r&&u&&u.isReady()&&h.__updatePageSize(e,z.base.controllers.document,z.base.page.size,r.isThumbnailerActive(M()))}function Ze(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}return e&&("thumbsize"in e&&isFinite(e.thumbsize)&&0<e.thumbsize&&(fe(e.thumbsize),i.forcepagesize={width:e.thumbsize,height:e.thumbsize}),g.extend(I,e),g.extend(I,i),I.showpagenumber=I.showpagenumber&&!I.showthumbcaption,"fitting"in e||(I.fitting=I.direction===y.Vertical?t.Width:t.Height),u&&u.config&&(I.allowtext=u.config.allowtext)),p=Atalasoft.Controls.WebDocumentViewer.call(this,I,function(e,t){Fe(e,t,a)}),d=p.__getViewerLink(p),I=d._config,V=d.__createDiv,d.__createDOM,d.__getSelectedPagesIndices,d.__getSelectedPagesIndices=H,I.allowdragdrop=!!I.allowdragdrop,I.selectedindex=he(I.selectedindex)?parseInt(I.selectedindex,10):0,I.thumbpadding=he(I.thumbpadding)?parseInt(I.thumbpadding,10):8,I.backcolor=me(I.backcolor,"#DCDCDC"),I.hovercolor=me(I.hovercolor,"#667F9F"),I.selectedcolor=me(I.selectedcolor,"#E0872D"),I.selectedhovercolor=me(I.selectedhovercolor,"#FFC060"),p.getSelectedPageIndex=
/**
     * @summary Gets the selected thumbnail index.
     * @description Gets the selected thumbnail index when Web Document Thumbnailer (WDT) setup to use singleselect. When WDT setup to use multiselect, then this method returns the first element of the selected page indices, with respect of {@link WebDocumentViewerConfig.selecteditemsorder| selecteditemsorder} parameter value.
     * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPageIndex
     * @returns {number}
     */
function(){return H()[0]},p.getSelectedPagesIndices=H,p.selectThumb=Z,p.deselectThumb=$,p.isActive=F,p.activate=function(){O(u,p.getDocumentInfo())},u&&(h=u.__getViewerLink(p,d),r=h.stateManager),p.bind({statusmessage:We,pagerotated:ve,pageinserted:ve,pageremoved:ve,pagemoved:ve}),p.bind({annotationsloaded:Me,formsloaded:Te,contextmenu:Ae,documentloaded:Se,pageshown:Ne,pageresize:je,scroll:He,zoomchanged:Xe,zoomstarted:Ye,zoomfinished:Be,pagesizechanged:Ke}),j=p.empty,X=p.dispose,B=p.openUrl,p.getCurrentPageIndex,L=p.__getDebugInfo,p.next,p.previous,U=p.showPage,p.empty=N,p.dispose=W,p.openUrl=p.OpenUrl=Y,p.__getDebugInfo=R,p.scrollToThumb=U,p.zoom=p.zoomIn=p.zoomOut=function(){},C=p.reloadPage,p.reloadPage=J,delete p.fit,g.extend(p.events,s),c={click:qe,touchstart:Le,touchmove:Re,touchend:Ue,mouseenter:Oe,mouseleave:Ee},p};