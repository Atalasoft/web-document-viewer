//-------------------------------------------------------------------------------------------------
//
//  Web Document Viewer object cross browser client-side script. 
//  Copyright 2003-2018 Atalasoft, Inc. All Rights Reserved.
//
//  This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)
//  Permission for usage and modification of this code is only permitted 
//  with the purchase of a source code license.
//-------------------------------------------------------------------------------------------------

"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t){for(var e=0,o=(""+t).replace("_",".").replace(/[^0-9.]/g,"").split("."),n=0;n<o.length;++n)e+=Number(o[n])/Math.pow(10,3*n);return e}var e="1.7.1";if("undefined"==typeof jQuery)throw"jQuery not found. The WebDocumentViewer requires jQuery version "+e+" or later.";if(t(jQuery().jquery)<t(e))throw"Early jQuery version found: "+jQuery().jquery+", version expected: "+e;jQuery.isFunction(jQuery.fn.parseVersionFloat)||(jQuery.parseVersionFloat=t,jQuery.fn.parseVersionFloat=t)}();/**
 *  Main Atalasoft Namespace definition(s)
 *  @namespace Atalasoft
 */
var Atalasoft=jQuery.extend(!0,{},Atalasoft,{$:jQuery,/**
     * @namespace Atalasoft.Annotations
     */
Annotations:{},/**
     * Contains Atalasoft imaging controls.
     * @namespace Atalasoft.Controls
     */
Controls:{},/**
     * @namespace Atalasoft.Document
     * @private
     */
Document:{},/**
     * @namespace Atalasoft.Forms
     * @private
     */
Forms:{},/**
     * @namespace Atalasoft.Text
     * @private
     */
Text:{},/**
     * @namespace Atalasoft.Utils
     */
Utils:{}});!function(){Atalasoft.Controls.Version=[11,0,0,418];var t={instanceCounter:0};/**
         * Control that views, modifies, and saves documents, annotations and forms.
         * @param {WebDocumentViewerConfig} [settings] Object of key value pairs representing initial settings
         * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
         * @class
         * @returns {WebDocumentViewer} A new control with the given settings.
         */
Atalasoft.Controls.WebDocumentViewer=function(e,o){/**
         * @member {Atalasoft.Controls.WebDocumentViewer~AnnotationController} annotations - Annotations API. Will be available if {@link WebDocumentViewerConfig.allowannotations| config.allowannotations} is set to `true`. Otherwise will be `undefined`
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         */
/**
         * @member {Atalasoft.Controls.WebDocumentViewer~DocumentController} document - Document operations API.
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         */
/**
         * @member {Atalasoft.Controls.WebDocumentViewer~TextController} text - Text selection API.
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         */
function n(){return{get:function(){return Dn},isInitialized:sn,switchDocument:Eo,closeDocument:So}}function i(){sn()||(Fn=a(),Wn=r()),Atalasoft.Utils._scriptLoader=Atalasoft.Utils.__loadDependencies(Nn.scripturl,Nn.allowannotations,w);var t={_config:Nn,_id:Tn,_dom:En,_document:En.loadedImgs,_pages:En.pageDivs,_state:Wn,_internalEvents:In,_controllers:Sn,createDOM:b,createDiv:y,createDialog:C,createDropDownButton:H,createDropDownMenu:M,createMenu:V,drawAnnotation:Vo,redrawVisiblePages:Go,adjustVisiblePages:xo,startDomManipulation:ro,endDomManipulation:lo,redrawPageFromIndex:Xo,makeHandlerRequest:tn,getPageScale:Do,getPageSize:se,getSourcePageSize:le,getPageRotation:Po,getViewerTransform:To,isPageInView:Ye,findPageFromIndex:to,showPagePoint:eo};Sn.document=new Atalasoft.Document.ManipulationController(Dn,t,Tn),Dn.document=Sn.document.__exposedApi,Nn.allowannotations?(Sn.annotations=new Atalasoft.Annotations.AnnotationController(Dn,t,Pn),Dn.annotations=Sn.annotations.__exposedApi):(Dn.deselectAll=Mo,Dn.createAnnotationOnPage=Mo,Dn.getAnnotationsFromPage=Mo,Dn.deleteAnnotationOnPageAtIndex=Mo,Dn.setAnnotationDefaults=Mo,Dn.setImages=Mo,Dn.setStamps=Mo),Nn.allowforms&&!Sn.forms&&(Sn.forms=new Atalasoft.Forms.FormController(Dn,t),Dn.forms=Sn.forms.__exposedApi),Nn.allowtext&&!Atalasoft.Utils.Browser.Explorer8&&(Sn.text=new Atalasoft.Text.TextController(Dn,t,Nn.mousetool?Nn.mousetool.text:{}),Dn.text=Sn.text.__exposedApi);var e="undefined"==typeof zn.easing||"undefined"==typeof zn.ui||Nn.allowannotations&&"undefined"==typeof Raphael;e?Atalasoft.Utils._scriptLoader&&Atalasoft.Utils._scriptLoader.bind({scriptsloaded:l}):l()}function a(){return{size:{width:0,height:0},sizes:[{width:0,height:0}],smallest:{width:0,height:0},count:0,number:-1,numberoutof:-1,buffer:3,dpi:96,vector:!1,caption:""}}function r(){return{prpr:0,loading:!1,zooming:!1,initialized:!1,newpagedivsize:null,newpagedivfullzoom:1,scrollPos:{x:0,y:0,t:0},scrollBuffer:null,scrollTimeout:null,activepage:null,nextImageCacheIndex:0}}function l(){Wn.initialized===!1&&(Wn.initialized=!0,wn({throwerror:x,pagedivsresized:h,documentchanged:Fo,pagesizechanged:g}),Nn.parent?(Nn.parent instanceof jQuery||(Nn.parent=zn(Nn.parent)),Nn.parent.length||w("InitError","Parent element not found.")):w("InitError","No parent element given."),En.toolbar=D(Nn.toolbarparent||Nn.parent),En.toolbar.addClass(Rn.atala_toolbar),En.main=y(Nn.parent),En.main.addClass(Rn.atala_main_container),En.scroller=y(En.main),En.scroller.addClass(Rn.atala_scroller),En.main.bind({selectstart:m}),En.toolbar.attr("id",Tn+"_toolbar"),En.main.attr("id",Tn+"_main"),En.scroller.attr("id",Tn+"_scroller"),En.main.css({height:"100%",width:"100%",position:"relative"}),En.scroller.css({height:"100%",width:"100%",position:"relative"}),En.viewport=y(En.scroller,Tn+"_vp"),En.viewport.css({overflow:"hidden",fontSize:0}),En.viewport.addClass(Rn.atala_viewport),En.viewport.attr("tabindex",-1),En.edges[0]=L(En.viewport,Tn+"_e0"),En.edges[0].addClass(Rn.atala_dom_edge_first),En.content=y(En.viewport,Tn+"_ct"),En.content.addClass(Rn.atala_content),En.content.css({"-ms-touch-action":"none",fontSize:0,overflow:"hidden"}),Nn.direction===Un.Horizontal&&En.content.css({display:"inline-block"}),En.edges[1]=L(En.viewport,Tn+"_e1"),En.edges[1].addClass(Rn.atala_dom_edge_last),Atalasoft.Utils.Browser.Features.Compatibility&&w("InitError","Compatibility Mode is not supported."),Atalasoft.Utils.Browser.Mobile.Any()?En.scroller.css({overflow:"hidden"}):Nn.showscrollbars?(En.scroller.css({overflow:"auto"}),En.scrollH=R(En.main,Un.Horizontal),En.scrollH.attr("id",Tn+"_sH"),En.scrollH.addClass(Rn.atala_scroll_horizontal),En.scrollV=R(En.main,Un.Vertical),En.scrollV.attr("id",Tn+"_sV"),En.scrollV.addClass(Rn.atala_scroll_vertical)):En.scroller.css({overflow:"hidden"}),Sn.mouseTool=new Atalasoft.Controls.ToolController(Dn,{_internalEvents:In,_controllers:Sn,zoomStart:so,zoom:co,zoomEnd:uo,getActivePage:Ie,raiseDrawLayer:Io,resetDrawLayer:ko,getViewerTransform:To},En.viewport,En.scroller,zn.extend({allowflick:Nn.allowflick},Nn.mousetool)),Sn.memory=new Atalasoft.Document.MemoryTracker({highWaterMark:Nn.memorythreshold}),Sn.memory.bind({exceededhighwatermark:d}),Sn.annotations&&Sn.annotations.setViewPort(En.viewport),bn("initialized"),c(),zn(document).ready(p))}function s(){var e=Nn.parent.attr("id")+"_wdv";for(++t.instanceCounter;document.getElementById(e+t.instanceCounter);)++t.instanceCounter;Tn=e+t.instanceCounter}function c(){Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8?En.viewport.css({"float":"left"}):(Nn.direction===Un.Horizontal&&En.viewport.css({"white-space":"nowrap"}),En.viewport.css({display:"table-cell"})),q(En.scroller),En.scrollH&&En.edges[1].height(En.scrollH.scrollbarHeight()),Sn.mouseTool.setTool(Ln.Pan,Ln.None),(Nn.documenturl||Nn.annotationsurl||Nn.formurl)&&pn(Nn.documenturl,Nn.annotationsurl,Nn.formurl,o)}/**
         * Removes all DOM elements, internal references, and empties memory intensive objects.
         * The WebDocumentViewer will no longer function after a call to this method.
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function dispose
         */
function u(){if(!Pn&&kn&&kn.closeDocument(),rn(),En.main&&En.main.remove(),En.toolbar&&(En.toolbar.remove(),En.toolbar.annoToolbar&&En.toolbar.annoToolbar.remove()),En.search&&En.search.dispose(),En.main=null,En.toolbar=null,En.scroller=null,En.viewport=null,En.content=null,En.scrollH=null,En.scrollV=null,En.loadedImgs.length=0,En.pageDivs.length=0,En.pageLabel=null,En.status=null,En.search=null,En.edges){for(var t=0;t<En.edges.length;t++)En.edges[t]=null;En.edges=[]}for(var e in Sn)Sn.hasOwnProperty(e)&&null!==Sn[e]&&(Sn[e].dispose(),Sn[e]=null);Fn=a(),Wn=r()}function d(){var t=Sn.memory.deallocateOldestEntry();Q(t[0]),t._cacheIndex>=0&&(En.loadedImgs[t._cacheIndex]=null,t._cacheIndex=-1),t.remove(),t.length=0,t=null}function h(t){Wn.newpagedivsize={height:t.height,width:t.width},Wn.newpagedivfullzoom=t.fullzoom,Nn.minwidth=t.minwidth,Nn.zoom=t.fullzoom,Fo()}function g(t){var e=!1;(Fn.smallest.width<=0||t.width<Fn.smallest.width)&&(Fn.smallest.width=t.width,e=!0),(Fn.smallest.height<=0||t.height<Fn.smallest.height)&&(Fn.smallest.height=t.height,e=!0),Pn||(De(t.dx,t.dy),e&&N(G())>En.pageDivs.length&&Fo(t))}function f(t,e,o,n){var i=e.getPageSize(t.index,Tn);if(!i){var a=e.getPageFitMultiplier(t.index,Tn),r=a,l={width:t.width,height:t.height};1===r&&Nn.forcepagefit&&(l.width!==o.width||l.height!==o.height)&&l.width>0&&l.height>0&&(r=l.width/o.width>l.height/o.height?o.width/l.width:o.height/l.height,e.setPageFitMultiplier(t.index,r,Tn)),e.setPageSize(t.index,zn.extend({},l),Tn),n&&(l.width*=Nn.zoom*r,l.height*=Nn.zoom*r,i=zn.extend({},Fn.size),i.width*=Nn.zoom*a,i.height*=Nn.zoom*a,t.dx=l.width-i.width,t.dy=l.height-i.height,g(t))}}function p(){zn(window).on({resize:io}),En.scroller.scroll(Ae),F(Fn.buffer)}function m(t){var e=t.target||t.srcElement;return Atalasoft.Utils.Browser.Explorer8?Atalasoft.Utils.__rf():"TEXTAREA"!==e.nodeName&&"INPUT"!==e.nodeName&&"text"!==e.type?Atalasoft.Utils.__rf():e.attributes.selectable&&"false"===e.attributes.selectable.value?Atalasoft.Utils.__rf():void 0}function _(t){return function(e){e.preventDefault(),bn(t,arguments)}}function v(t,e){return function(o){try{o.currentTarget=e&&e.length>0?e[0]:o.currentTarget,t&&t(o)}catch(n){pe(n.message)}}}function w(t,e){if(Nn.showerrors)throw"undefined"==typeof e?t:t+": "+e;pe(t+": "+e),bn({type:"error",name:t,message:e})}function x(t){w(t.name,t.msg)}function b(t,e,o,n){var i=zn("<"+t+"></"+t+">");return e&&e.append&&i.appendTo(e),o&&i.attr("id",o),n&&i.html(n),i}function y(t,e,o){return b("div",t,e,o)}function z(t){var e=zn('<div style="width:100%; height:100%; position:absolute; left: 0px; top: 0px; background: #F00; opacity:0.0;"></div>');if(Atalasoft.Utils.Browser.Explorer)if(parseInt(Atalasoft.Utils.Browser.Version,10)<=8)e.css({filter:"alpha(opacity=0)"});else if(10===parseInt(Atalasoft.Utils.Browser.Version,10)){var o=!1;e.reflow=function(){if(o)e.empty();else{var t=zn("<hr/>");e.append(t)}o=!o}}return e.toFront=function(){e.css({"z-index":"10"}),e.reflow&&e.reflow()},e.reset=function(){e.css({"z-index":""}),e.reflow&&e.reflow()},t&&t.prepend(e),e}function D(t){var e=P(t);return Nn.allowannotations&&(e.annoToolbar=T(t),e.annoToolbar.addClass(Rn.atala_annotation_toolbar)),Nn.showstatus&&(En.status=zn('<div id="'+Tn+'_status" style="display:inline"></div>'),En.status.addClass(Rn.atala_statusbar),e.append("Status:"),e.append(En.status)),Nn.allowtext&&Nn.mousetool.text.allowsearch&&(En.search=new S({parent:e})),e}function P(t){var e={id:Tn+"_toolbar",parent:t,children:[{type:"button",id:"Button_PagePrev",cls:Rn.atala_tool_button_page_prev,icon:"page-prev",tooltip:"Previous Page",text:null,onclick:function(){hn()}},{type:"pagelabel",id:"Label_PageNumber",cls:Rn.atala_page_label},{type:"button",id:"Button_PageNext",cls:Rn.atala_tool_button_page_next,icon:"page-next",tooltip:"Next Page",text:null,onclick:function(){dn()}},{type:"button",id:"Button_ZoomOut",cls:Rn.atala_tool_button_zoom_out,icon:"zoom-out",tooltip:"Zoom Out",text:"",onclick:function(){fn()}},{type:"button",id:"Button_ZoomIn",cls:Rn.atala_tool_button_zoom_in,icon:"zoom-in",tooltip:"Zoom In",text:"",onclick:function(){gn()}},{type:"button",id:"Button_FitNone",cls:Rn.atala_tool_button_fit_none,icon:"zoom-full",tooltip:"Full Size",text:"",onclick:function(){ho(1)}},{type:"button",id:"Button_FitBest",cls:Rn.atala_tool_button_fit_best,icon:"fit-best",tooltip:"Best Fit",text:"",onclick:function(){bo(Bn.Best)}},{type:"button",id:"Button_FitWidth",cls:Rn.atala_tool_button_fit_width,icon:"fit-width",tooltip:"Fit To Width",text:"",onclick:function(){bo(Bn.Width)}}]};return Nn.showselecttools&&e.children.splice(5,0,{type:"button",id:"Button_ZoomArea",cls:Rn.atala_tool_button_zoom_area,icon:"zoom-area",tooltip:"Zoom Area",text:"",onclick:B}),Nn.allowtext&&(e.children.splice(3,0,{type:"button",id:"Button_Text",cls:Rn.atala_tool_button_text_tool,icon:"text-tool",tooltip:"Text Selection",text:"",onclick:function(){Sn.mouseTool.setTool(Ln.Text)}}),e.children.splice(3,0,{type:"button",id:"Button_Text",cls:Rn.atala_tool_button_pan_tool,icon:"pan-tool",tooltip:"Pan",text:"",onclick:function(){Sn.mouseTool.setTool(Ln.Pan)}})),Nn.showrotatetools&&(e.children.push({type:"button",id:"Button_RotateLeft",cls:Rn.atala_tool_button_rotate_left,icon:"rotate-left",tooltip:"Rotate Left",text:"",onclick:U(270)}),e.children.push({type:"button",id:"Button_RotateRight",cls:Rn.atala_tool_button_rotate_right,icon:"rotate-right",tooltip:"Rotate Right",text:"",onclick:U(90)})),Nn.savepath.length>0&&e.children.unshift({type:"button",id:"Button_Save",cls:Rn.atala_tool_button_save,icon:"save",tooltip:"Save Changes",text:null,onclick:function(){mn()}}),A(e)}function T(t){var e={id:Tn+"_toolbar",parent:t,children:[{type:"button",id:"Button_Ellipse",cls:Rn.atala_tool_button_ellipse_anno,icon:"ellipse",tooltip:"Draw Ellipse",text:"",onclick:Vo},{type:"button",id:"Button_Highlight",cls:Rn.atala_tool_button_highlight_anno,icon:"highlight",tooltip:"Draw Highlight",text:"",onclick:Vo},{type:"button",id:"Button_Line",cls:Rn.atala_tool_button_line_anno,icon:"line",tooltip:"Draw Line",text:"",onclick:Vo},{type:"button",id:"Button_Lines",cls:Rn.atala_tool_button_lines_anno,icon:"lines",tooltip:"Draw Poly Lines",text:"",onclick:Vo},{type:"button",id:"Button_Freehand",cls:Rn.atala_tool_button_freehand_anno,icon:"freehand",tooltip:"Draw Freehand",text:"",onclick:Vo},{type:"button",id:"Button_Rectangle",cls:Rn.atala_tool_button_rect_anno,icon:"rectangle",tooltip:"Draw Rectangle",text:"",onclick:Vo},{type:"button",id:"Button_Text",cls:Rn.atala_tool_button_text_anno,icon:"text",tooltip:"Draw Text",text:"",onclick:Vo}]};return A(e)}function A(t){var e=y(t.parent),o=Tn+"_toolbar";e.buttons=[];for(var n=0;t.children&&n<t.children.length;n++){var i=null;switch(t.children[n].type){case"button":if(!Atalasoft.Utils.Browser.Features.Touch||"lines"!==t.children[n].icon){t.children[n].id=o+"_"+t.children[n].id;var a=E(t.children[n],e);a.addClass(Rn.atala_toolbar_button),i=a,e.buttons.push(a)}break;case"pagelabel":En.pageLabel=b("span",e,o+"_"+t.children[n].id),i=En.pageLabel}i&&t.children[n].cls&&i.addClass(t.children[n].cls)}return e}function V(t){var e=zn("<ul/>");e.css({fontSize:"medium"}),e.addClass(Rn.atala_context_menu);for(var o in t)if(t.hasOwnProperty(o)){var n="1.12",i=Atalasoft.Utils.flattenVersionSting(zn.ui.version)>=Atalasoft.Utils.flattenVersionSting(n)?"div":"a",a=zn("<li><"+i+' href="#"> '+o+" </"+i+"></li>");Atalasoft.Utils.Browser.Features.Touch&&!Atalasoft.Utils.Browser.Mobile.iOS&&a.bind({touchend:t[o]}),a.click(t[o]),a.appendTo(e)}return e.menu(),e}function C(t,e,o){var n=zn('<div title="'+e+'" />');return o&&n.append(o),n.dialog(),n}function H(t){var e=b("span",En.toolbar.annoToolbar);return E(t,e),k(e,t.id+"_Drop","ui-icon-triangle-1-s","Click To Choose",null,function(){var t=zn(this).next();if(t.is(":visible"))return t.hide(),!1;var e=t.prev().prev().parent();return t.menu().show().css({position:"absolute",top:0,left:0,"min-width":e.width()+"px","z-index":11}).position({my:"left top",at:"left bottom",of:e}),!1}),e.buttonset(),e}function M(t,e,o){for(var n=zn(t.children().first()),i={},a=0;a<o.length;a++)i[o[a].name]=I(n,e,o[a]);n.menu=V(i),t.append(n.menu),n.menu.hide()}function I(t,e,o){var n="menuselect"+e.icon+o.name,i=function(){return t.button("option","label","Draw "+o.name),t.data("_annoConfig",o),t.click(e.onclick),t.menu.hide(),t.trigger("click"),!1};return wn(n,v(i,t)),i}function k(t,e,o,n,i,a){var r=zn('<button id="'+e+'" title="'+n+'">'+(i||n)+"</button>");return a&&r.click(a),r.button({icons:{primary:o},text:null!=i&&Nn.showbuttontext}),r.addClass("atala-ui-button"),t&&r.appendTo(t),r}function E(t,e){var o="menuclick"+t.icon,n=k(e,t.id,Cn+" "+Cn+"-"+t.icon,t.tooltip,t.text,_(o));return n.data("_config",t),wn(o,v(t.onclick,n)),n}function S(t){function e(){p=y().addClass(Rn.atala_search_container),m=zn('<input type="text" placeholder="Search..." />').addClass(Rn.atala_search_input).addClass("ui-widget"),m.bind({keydown:i,"input propertychange":n});var t=b("span",p).css({width:"100%"});t.append(m);var e=b("span",p);_=k(e,null,Cn+" "+Cn+"-search-next","Next",null,d(a)).addClass(Rn.atala_search_next),v=k(e,null,Cn+" "+Cn+"-search-prev","Previous",null,d(r)).addClass(Rn.atala_search_prev),p.on("mousemove","."+w.clearable,g).on("touchstart click","."+w.onclear,f),x.append(p),x.append(zn('<div style="clear:both;"></div>'))}function o(){m.unbind({keypress:i,"input propertychange":n}),p.off("mousemove","."+w.clearable,g).off("touchstart click","."+w.onclear,f),z&&z.dispose(),p.remove()}function n(){var t=m.val();return t?m.addClass(w.clearable):m.removeClass(w.clearable),t&&z&&z.isValid()&&t===z.getQuery()?!0:(clearTimeout(D),z=null,t&&t.length>=3?(u(!0),D=setTimeout(function(){z=Sn.text.search(t,_n(),s),c(!0)},Nn.mousetool.text.searchdelay),!1):(l(),void 0))}function i(t){var e=m.val();return 13===t.keyCode&&z&&e&&z.isValid()&&z.getQuery()===e?(t.shiftKey?r():a(),!1):13!==t.keyCode||z&&z.isValid()?27===t.keyCode?(l(),f(),!1):(Atalasoft.Utils.Browser.Explorer&&Atalasoft.Utils.Browser.Version<=9&&(8===t.keyCode||46===t.keyCode)&&(clearTimeout(D),D=setTimeout(function(){n()},Nn.mousetool.text.searchdelay)),void 0):(n(),!1)}function a(){z&&(c(!0),z.next(s))}function r(){z&&(c(!0),z.prev(s))}function l(){z=null,Sn.text.search(""),c(!1),u(!0)}function s(t,e){t.isValid()&&(c(!1),t.wrap=Nn.mousetool.text.wrapsearch,e||u(e))}function c(t){h(w.loading,t)}function u(t){h(w.inputEmpty,!t)}function d(t){return function(e){e.preventDefault(),t&&t()}}function h(t,e){e?m.addClass(t):m.removeClass(t)}function g(t){h(w.onclear,this.offsetWidth-18<t.clientX-this.getBoundingClientRect().left)}function f(t){t&&t.preventDefault(),m.removeClass(w.clearable).removeClass(w.onclear).val("").change(),n()}var p,m,_,v,w={clearable:"atala_search_input_clearable",onclear:"atala_search_input_clear_hover",inputEmpty:"atala_search_input_empty",loading:"atala_search_input_loading"},x=t.parent||En.toolbar,z=null,D=null;e(),this.dispose=o}function B(){Nn.allowannotations&&Dn.annotations.cancelDraw(),Sn.mouseTool.setTool(Ln.ZoomArea)}function U(t){return function(){var e=Fn.number-1;Sn.document.rotatePage(e,Sn.document.getPageRotation(e)+t,function(){var t=Do(e),o=se(e),n=Nn.direction===Un.Vertical?o.height*t:0;oo(Nn.pageselectlocation,Atalasoft.Utils.PageSelection.Center)||oo(Nn.pageselectlocation,Atalasoft.Utils.PageSelection.MiddleLeft)?n/=2:oo(Nn.pageselectlocation,Atalasoft.Utils.PageSelection.TopLeft)&&(n=0);var i={x:Nn.direction===Un.Vertical?0:n,y:Nn.direction===Un.Vertical?n:0};eo(e,i,Nn.pageselectlocation,!0)})}}function L(t,e){var o=Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8,n=y(t,e);return Nn.direction===Un.Vertical?(n.height(1),n.css({display:"block"})):Nn.direction===Un.Horizontal&&(n.width(1),n.css({display:"inline-block",overflow:"hidden"})),n._zoom=1,Nn.backcolor&&n.css({backgroundColor:Nn.backcolor}),o&&n.html("&nbsp;"),n}function F(t){function e(t){return function(){Le(t)}}if("undefined"==typeof t){var o=N(Pn&&Wn.newpagedivsize&&Nn.zoom>0&&isFinite(Nn.zoom)?Nn.zoom:G());Fn.buffer<o&&(Fn.buffer=o),Fn.buffer=Math.min(Fn.buffer,Sn.document.getPageCount()),t=Fn.buffer}if(En.pageDivs.length<t)for(var n=En.pageDivs.length;t>n;n++)En.pageDivs[n]=y(),En.pageDivs[n].addClass(Rn.atala_page_div),Nn.showselecttools&&(En.pageDivs[n]._rubberband=new Atalasoft.Controls.RubberBandTool(Dn,{},En.pageDivs[n],{getViewportSize:ue,getMaxZoom:X,getPageOffsets:oe,raiseDrawLayer:Io,resetDrawLayer:ko})),En.pageDivs[n].bind({touchstart:e(En.pageDivs[n]),mousedown:e(En.pageDivs[n])}),Sn.annotations&&Sn.annotations.addDrawingSurface(En.pageDivs[n]),(Nn.showselecttools||Nn.allowannotations||Nn.allowforms||Nn.allowtext)&&(En.pageDivs[n]._draw=z(En.pageDivs[n])),Sn.forms&&!Pn&&Sn.forms.addFormLayer(En.pageDivs[n]),Sn.text&&!Pn&&Sn.text.addTextLayer(En.pageDivs[n]);else if(En.pageDivs.length>t)for(;En.pageDivs.length>t&&0!==En.pageDivs.length;){var i=En.pageDivs.pop();i._rubberband&&i._rubberband.dispose(),Sn.annotations&&Sn.annotations.removeDrawingSurface(i),Sn.forms&&!Pn&&Sn.forms.removeFormLayer(i),Sn.text&&!Pn&&Sn.text.removeTextLayer(i),i&&qe(i),i=null}}function W(t,e,o,n){function i(){return L._page?L._page._index:Sn.document.getPageIndexByImageIndex(L._index)}function a(){return L._domEl}function r(t){return Sn.document.getPageFitMultiplier("undefined"!=typeof t?t:i())}function l(t,e){return t="undefined"==typeof t?Nn.zoom:t,t*r(e)}function s(t){return Sn.document.setPageFitMultiplier(i(),t)}function c(){var t=se(i())||Fn.size;return{height:t.height,width:t.width}}/**
            * Returns physical size of the image without client transformations applied(like view rotation)
            */
function u(){var t=c();return 90===L._viewrotation||270===L._viewrotation?B(t):t}function d(t,e){return e=e||c(),{height:Math.round(e.height*l(t)),width:Math.round(e.width*l(t))}}function h(){L.bind(O);var t=Nn.pageborderwidth,e={bottom:0,top:0,right:0,left:0};L._loaded=!1,L._reqzoom=-1,(Nn.direction===Un.Vertical||Nn.tabular)&&(e.bottom=Nn.pagespacing),(Nn.direction===Un.Horizontal||Nn.tabular)&&(e.right=Nn.pagespacing);var o=a();Nn.showpageborder&&o.css({"border-bottom":t+"px solid black","border-right":t+"px solid black","border-top":t+"px solid silver","border-left":t+"px solid silver","margin-bottom":e.bottom+"px","margin-right":e.right+"px"}),o.css({display:"inline-block"}),o.addClass(Rn.atala_page_loading),g()}function g(t){var o=i(),n=Fn.vector&&(!e||!e.uri),a=n?l():Math.min(l(),1),r=Sn.document.getPageRotation(o);if(t||a!==L._zoom||L._rotation!==r){var s=zn.extend({atala_docurl:e?e.uri:L.documenturl,atala_doczoom:a,atala_thumbpadding:!1},R);r&&(s.atala_angle=r),Nn.jpeg&&(s.atala_jpeg=!0);var c={type:"docpage",serverurl:Nn.serverurl,query:"?ataladocpage="+(null===e?L._index:void 0!==e.index?e.index:e),method:"GET",data:s,cancel:!1,info:L};L._reqzoom=a,L._reqangle=r,tn(c,f,f)}}function f(){L._loaded||L._domEl.removeClass(Rn.atala_page_loading),L._loaded=!0,L._zoom=L._reqzoom,L._rotation=L._reqangle;var t=i();if(t>=0){if(L._rotation!==Sn.document.getPageRotation(t))return g(),void 0;k(),L.parent().length>0?_():F&&L._page&&L._page.nullinserted&&(Ne(L._page,L,t,!0),_()),E(L._viewrotation);var e=Fn.vector?l():Math.min(l(),1);b()&&L._zoom<e*W&&!j(L._zoom,e)&&x(!1)}C()}function p(){L._loaded&&_()}function m(t){t&&(t.removeAttr("width height"),t.css({width:"auto",height:"auto"}))}function _(){m(L);var t=L.prop("naturalWidth")||0,e=L.prop("naturalHeight")||0,o=t||L.width(),n=e||L.height(),r=c(),s=l(),h=!1;if(0!==o&&0!==n){L._size.width=Math.round(o/L._zoom),L._size.height=Math.round(n/L._zoom),(90===L._viewrotation||270===L._viewrotation)&&(L._size=B(L._size)),(L._size.width!==Fn.size.width||L._size.height!==Fn.size.height)&&(j(L._size.width,r.width)&&j(L._size.height,r.height)||(h=!0,Sn.document.setPageSize(i(),L._size))),Nn.forcepagefit?A():(L._zoom!==Nn.zoom||h||0!==L._viewrotation)&&P();var g=d();h&&L.trigger({type:"pagesizechanged",image:L,index:i(),width:L._size.width,height:L._size.height,dx:Math.round(g.width-r.width*s),dy:Math.round(g.height-r.height*s)}),L.trigger({type:"pageresize",image:L,index:i(),width:g.width,height:g.height})}else if(F){var f=u(),p=V(f);return f.width*=p,f.height*=p,a().css(f),L.trigger({type:"pageresize",image:L,index:i(),width:f.width,height:f.height}),void 0}}function v(){L.unbind(O),L._page=null,L=null}function x(t,e){b()&&!L._size.isEmpty()?("function"==typeof e&&U.push(e),L._prevzoom=L._reqzoom,t&&!Wn.loading?L.animate({height:Math.round(L._size.height*l()),width:Math.round(L._size.width*l())},{duration:An,easing:"easeOutQuad",complete:D,queue:!1}):(P(),D())):"function"==typeof e&&e.call(this,L)}function b(){if(!L._loaded)return!1;var t=!Fn.vector&&1===L._reqzoom&&1===L._prevzoom&&l()>1,e=j(L._reqzoom,l())||t;if(!e){var o=Math.abs(L._reqzoom*L._size.width-l()*L._size.width),n=Math.abs(L._reqzoom*L._size.height-l()*L._size.height);1>o&&1>n&&(e=!0)}return!e||z()}function z(){return!j(L._scaledzoom,l())}function D(){L.trigger({type:"pagezoom",index:i(),height:Math.round(L._size.height*l()),width:Math.round(L._size.width*l()),prevzoom:L._prevzoom,zoom:l()}),0===Wn.prpr?g():C()}function P(){var t=.01,e=d(void 0,u()),o=d(),n=L.prop("naturalWidth")||0,a=L.prop("naturalHeight")||0,r=n&&Math.abs(n-e.width)/e.width<t,s=a&&Math.abs(a-e.height)/e.height<t;r&&s||(L.height(e.height),L.width(e.width)),L._domEl.width(o.width),L._domEl.height(o.height),L._scaledzoom=l(),E(L._viewrotation),no(i(),o.width,o.height)}function T(){C();var t=i();w("ImageError","Image at frameIndex "+t+" failed to load.")}function A(){var t=V();s(t/Nn.zoom),P()}function V(t){var e=1;t=t||L._size;var o={width:Nn.forcepagesize.width*(Pn?1:Nn.zoom),height:Nn.forcepagesize.height*(Pn?1:Nn.zoom)};return(o.width<1||o.height<1)&&(o.width=Fn.size.width*Nn.zoom,o.height=Fn.size.height*Nn.zoom),e=t.width/o.width>t.height/o.height?o.width/t.width:o.height/t.height}function C(){U.length>0&&Z(U,L)}function H(){var t=Sn.document.getPageRotation(i());return 0===L._viewrotation&&t!==L._rotation||0!==L._viewrotation}function M(){var t=Sn.document.getPageRotation(i());return 0===L._viewrotation&&t!==L._rotation||0!==L._viewrotation&&(L._viewrotation+L._rotation)%360!==t}function I(t){if("function"==typeof t&&U.push(t),H()){var e=Sn.document.getPageRotation(i());if(M()&&L&&L._loaded&&L._page&&(e=(360+e-L._rotation)%360,E(e),_()),0===Wn.prpr&&L._loaded)return g(),void 0}C()}function k(){L._viewrotation=0}function E(t){F&&0!==t&&(L.remove(void 0,!0),L._page.nullinserted=!0);var e=u(),o=d(void 0,e),n=0,i=0,r="";(90===t||270===t)&&(n=(o.height-o.width)/2,Pn&&e.width<e.height&&(n=0),i=(o.width-o.height)/2,o=B(o)),0!==t?(r+=" translate("+n+"px,"+i+"px)",r+="rotate("+t+"deg)",L.css(Atalasoft.Utils.__htmlTransformStyle(r))):L.css(Atalasoft.Utils.__htmlTransformStyle("")),a().css({width:o.width,height:o.height}),L._viewrotation=t}function S(t,e){"function"==typeof t&&(e=t,t={}),R=zn.extend(!0,{},t),R.atala_cb=Math.floor(1e9*Math.random()),"function"==typeof e&&U.push(e),g(!0)}function B(t){var e=t.width;return t.width=t.height,t.height=e,t}"function"==typeof o&&(n=o,o=void 0);var U="function"==typeof n?[n]:[],L=zn(new Image),F=Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<=8,W=.9,R=zn.extend(!0,{atala_cb:void 0},o||{});L._domEl=y(),L._domEl.addClass(Rn.atala_page_image_anchor),L.addClass(Rn.atala_page_image),F||L._domEl.append(L);var O={load:f,error:T,inserted:p};return L._binds=O,L.documenturl=Nn.documenturl,L._index=e?e.mapsto:t,L._loaded=!1,L._size={width:0,height:0,isEmpty:function(){return 0===this.width&&0===this.height}},L._zoom=-1,L._prevzoom=L._zoom,L._scaledzoom=-1,L._rotation=0,L._viewrotation=0,L.dispose=v,L.zoom=x,L.needsZoom=b,L.getSize=c,L.getScaledSize=d,L.getFitZoom=l,L.getFitMultiplier=r,L.needsRotate=H,L.rotate=I,L.getDomElement=a,L.invalidate=S,h(),L}function R(t,e){function o(t){h._pagenum=t}function n(){return h.height()-h[0].clientHeight}function i(t){h._scrollSize=t}function a(t){h._ratio=t}function r(){if(!h.propagationPaused()){clearTimeout(h._tooltip._timeout),En.scroller.stop(),En.scroller.pauseEventPropagation(!0);var t={};h._direction===Un.Vertical?(En.scroller.scrollTop(h[0].scrollTop*h._ratio),h._pagenum=s(h,h[0].scrollTop),t.right=h.width()+10+"px",t.top=16+Math.round((h[0].offsetHeight-48)/h[0].scrollHeight*h[0].scrollTop)+"px"):h._direction===Un.Horizontal&&(En.scroller.scrollLeft(h[0].scrollLeft*h._ratio),h._pagenum=s(h,h[0].scrollLeft),t.bottom=h.height()+10+"px",t.left=16+Math.round((h[0].offsetWidth-48)/h[0].scrollWidth*h[0].scrollLeft)+"px"),h._direction===Nn.direction&&Nn.showpagenumbertooltip&&("none"===h._tooltip.css("display")&&(h._tooltip.css(t),h._tooltip.show()),Nn.showpagenumbertooltip&&h._tooltip.html("Page "+h._pagenum),h._tooltip._timeout=setTimeout(l,1e3))}}function l(){h._tooltip.hide(),Fn.number===h._pagenum||Ye(h._pagenum)||Be(h._pagenum),Go()}function s(t,e){if(Nn.forcepagefit){e*=t._ratio;var o=t._direction===Un.Vertical?{x:0,y:e}:{x:e,y:0};return Y(o.x,o.y)+1}return Math.floor(e/(t._max/Sn.document.getPageCount()))+1}var c=Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8,u="overflow:scroll; position:absolute; background-color:Transparent;",d=y(t);d.css({position:"absolute",display:"none","background-color":"white"});var h=null,g=!1;return e===Un.Horizontal?((c||Atalasoft.Utils.Browser.Firefox)&&(u=u.replace("overflow","overflow-x")),h=zn('<div style="'+u+'bottom:0px; left:0px; width:100%;z-index:10"></div>').appendTo(t),h._tray=zn('<div style="height:1px;"></div>').appendTo(h)):((c||Atalasoft.Utils.Browser.Firefox)&&(u=u.replace("overflow","overflow-y"),u+="width:"+(ce()+1)+"px;",g=!0),h=zn('<div style="'+u+'top:0px; right:0px; height:100%;z-index:10"></div>').appendTo(t),h._explicitSize=g,h._tray=zn('<div style="width:1px;"></div>').appendTo(h)),q(h),h._ratio=1,h._direction=e,h._tooltip=d,h._pagenum=-1,h._scrollSize=0,h.pageNum=o,h.scrollbarHeight=n,h.scrollSize=i,h.ratio=a,h.bind({scroll:r}),h}function O(t){t&&t._tooltip&&(clearTimeout(t._tooltip._timeout),t._tooltip.hide())}function q(t){function e(){t.unbind(o),t.resumeEventPropagation()}var o={scroll:e};t._pauseEP=0,t.propagationPaused=function(){return t._pauseEP>0},t.pauseEventPropagation=function(e){t._pauseEP++,e&&t.bind(o)},t.resumeEventPropagation=function(){t._pauseEP>0&&t._pauseEP--}}function N(t){var e=ue(),o=$(0,t);o.width=Fn.smallest.width>0&&Fn.smallest.width<o.width&&!Pn?Fn.smallest.width:o.width,o.height=Fn.smallest.height>0&&Fn.smallest.height<o.height&&!Pn?Fn.smallest.height:o.height;var n,i=Math.ceil(e.width/o.width)+2,a=Math.ceil(e.height/o.height)+2;return Nn.tabular?(Nn.direction===Un.Vertical&&Nn.columns>0?i=Nn.columns:Nn.direction===Un.Horizontal&&Nn.rows>0&&(a=Nn.rows),n=i*a):Nn.direction===Un.Vertical?n=a:Nn.direction===Un.Horizontal&&(n=i),n}function j(t,e){return t+.001>e&&e>t-.001}function Q(t){try{t.parentNode&&t.parentNode.removeChild(t),Hn.appendChild(t),Hn.innerHTML=""}catch(e){}}function Z(t){for(var e=Array.prototype.slice.call(arguments,1);t.length;)t.shift().apply(this,e)}function G(){return 0!==Fn.size.width?Nn.minwidth/Fn.size.width:1}function X(){return 0!==Fn.size.width?Nn.maxwidth/Fn.size.width:1}function $(t,e,o){if(Sn.document.getPageCount()<=0)return{width:0,height:0};if(o="undefined"==typeof o?!0:o,Wn.newpagedivsize){var n={width:Wn.newpagedivsize.width,height:Wn.newpagedivsize.height},i=Nn.showpageborder&&o?2*Nn.pageborderwidth:0,a=(e||Nn.zoom)/Wn.newpagedivfullzoom;return n.height=Math.round(n.height*a)+i,n.width=Math.round(n.width*a)+i,n}return K(t,e||Nn.zoom,Nn.showpageborder&&o)}function K(t,e,o){var n=zn.extend({},se(t)),i=o?2*Nn.pageborderwidth:0;return e*=zo(t),n.height=Math.round(n.height*e)+i,n.width=Math.round(n.width*e)+i,n}function J(t,e){return oe(null,t,e).index}function Y(t,e){var o=ue(),n={x:t+Nn.pageselectlocation.x*o.width,y:e+Nn.pageselectlocation.y*o.height};return J(n.x,n.y)}function te(t,e){for(var o={left:0,top:0},n=t;null!=n&&n!==e;n=n.offsetParent)o.left+=n.offsetLeft,o.top+=n.offsetTop;return o}function ee(){if(Qn.isEmpty()||Qn.zoom!==Nn.zoom){var t=oe(null,null,null,Nn.zoom);Qn.height=t.height,Qn.width=t.width,Qn.zoom=Nn.zoom}return Qn}function oe(t,e,o,n){return ne(0,t,e,o,n)}function ne(t,e,o,n,i){if(Nn.tabular)return ie(t,e,o,n,i);var a=Sn.document.getPageCount();t=t?t:0,e=e||0===e?e:a;var r={height:0,width:0,index:t};if(Nn.direction===Un.Vertical)for(var l=null,s=t;a>s&&e>s&&(r.height+(l=$(s,i).height)<=n||null==n);s++)r.height+=l+Nn.pagespacing,r.index++;else if(Nn.direction===Un.Horizontal)for(var c=null,u=t;a>u&&e>u&&(r.width+(c=$(u,i).width)<=o||null==o);u++)r.width+=c+Nn.pagespacing,r.index++;return r.index>=a&&a>0&&(r.index=a-1),r}function ie(t,e,o,n,i){if(t>e)return{width:0,height:0,index:e};var a=ae(t,o,n,i),r=ae(e,o,n,i);return r.height=Nn.direction===Un.Vertical?r.height-a.height:r.height,r.width=Nn.direction===Un.Horizontal?r.width-a.width:r.width,r}function ae(t,e,o,n){var i=Sn.document.getPageCount(),a={height:0,width:0,index:0},r=re(n);t=null==t?t=i:t;var l,s;Nn.direction===Un.Vertical?(l=r||1,s=Math.ceil(i/l)):Nn.direction===Un.Horizontal&&(s=r||1,l=Math.ceil(i/s));var c=$(0,n);c.width+=Nn.pagespacing,c.height+=Nn.pagespacing;var u=null==o?Math.floor(t/l):Math.floor(o/c.height),d=null==e?t%l:Math.ceil(e/c.width);return a.height=u*c.height,a.width=d*c.width,a.index=u*l+d,a.index>=i&&i>0&&(a.index=i-1),a}function re(t){var e=1;if(Nn.tabular){var o=Nn.pagespacing||0,n=$(0,t);Nn.direction===Un.Vertical?(e=Math.floor(En.content.width()/n.width),e=Math.min(e,Math.floor((En.content.width()-e*o)/n.width))):Nn.direction===Un.Horizontal&&(e=Math.floor(En.content.height()/n.height),e=Math.min(e,Math.floor((En.content.height()-e*o)/n.height)))}return e||1}function le(t,e){var o=se(t),n=Po(t)+(e||0);return n%180===0?o:{width:o.height,height:o.width}}function se(t){var e=Sn.document.getPageSize(t);return e?e:Fn.size}function ce(){var t=y(zn("body")),e=y(t);t.css({width:"50px",height:"50px",overflow:"hidden",position:"absolute",visibility:"hidden"}),e.css({width:"100px",height:"100px"});var o=t.width();t.css({"overflow-y":"scroll"});var n=o-t[0].clientWidth;return zn(t).remove(),n}function ue(){return{width:En.scrollV?En.main.width()-En.scrollV.width():En.main.width(),height:En.scrollH?En.main.height()-En.scrollH.scrollbarHeight():En.main.height()}}function de(){var t=ue(),e=Nn.showpageborder?2*Nn.pageborderwidth:0,o={width:t.width-e,height:t.height-e};return Nn.tabular&&(Nn.columns>1&&(o.width=Math.floor((t.width-(Nn.pagespacing+e)*Nn.columns)/Nn.columns)),Nn.rows>1&&(o.height=Math.floor((t.height-(Nn.pagespacing+e)*Nn.rows)/Nn.rows))),o}function he(t,e){var o={status:"fail",started:!1,reason:t};return"function"==typeof e&&e.call(),o}function ge(t,e,o,n,i,a){var r=te(t,e);return r.left<=i&&r.left+t.clientWidth>=o&&r.top<=a&&r.top+t.clientHeight>=n}function fe(t,e,o){return e<t.length?(t.splice(o,0,t.splice(e,1)[0]),!0):!1}function pe(t){Nn.showstatus&&En.status&&En.status.html(t),bn({type:"statusmessage",message:t})}function me(t,e){var o;if(1===t.length&&"object"===_typeof(t[0]))o=t[0];else if("string"==typeof t[0]){o={};var n=null;3===t.length?n=t[2]:2===t.length&&(n=t[1]);for(var i=t[0].indexOf(" ")>-1?t[0].split(" "):[t[0]],a=0;a<i.length;a++)o[i[a]]=n}for(var r in o)if(o.hasOwnProperty(r)){var l=null;if(r in qn?l=qn:Dn&&r in Dn.annotations.events?l=Dn.annotations.events:Dn&&r in Dn.forms.events?l=Dn.forms.events:Dn&&r in Dn.document.events&&(l=Dn.document.events),null==l&&(l=qn),null==l[r]&&e)l[r]=[o[r]];else if(e)l[r].push(o[r]);else if(o[r])for(var s=0;s<l[r].length;s++)l[r][s]===o[r]&&l[r].splice(s,1);else l[r].length=0}}function _e(){Nn.direction=Nn.direction===Un.Vertical||Nn.direction===Un.Horizontal?Nn.direction:Un.Vertical,Nn.fitting=Nn.fitting===Bn.None||Nn.fitting===Bn.Best||Nn.fitting===Bn.Width||Nn.fitting===Bn.Height?Nn.fitting:Bn.Width,Nn.pageborderwidth=we(Nn.pageborderwidth)?parseInt(Nn.pageborderwidth,10):1,Nn.pagespacing=we(Nn.pagespacing)?parseInt(Nn.pagespacing,10):4,Nn.showpageborder=Nn.showpageborder?!0:!1,Nn.showpagenumber=Nn.showpagenumber?!0:!1,Nn.showstatus=Nn.showstatus?!0:!1,Nn.zoom=we(Nn.zoom,!0)?parseFloat(Nn.zoom):1,Nn.scripturl=ve(Nn.scripturl)?Nn.scripturl:Nn.scripturl+"/"}function ve(t){return t.length>0?-1!==t.indexOf("/",t.length-1)||-1!==t.indexOf("\\",t.length-1)?!0:!1:!0}function we(t,e){return e?isFinite(parseFloat(t)):isFinite(parseInt(t,10))}function xe(t,e,o,n,i){if(null==i&&"function"==typeof n&&(i=n,n=null),t=null==t?En.scroller.scrollLeft():t,e=null==e?En.scroller.scrollTop():e,Nn.direction===Un.Horizontal){if(t>En.viewport.width()){var a=ee();if(t<a.width&&En.content.width()>0){var r=a.width-(En.edges[0].width()+En.content.width());En.edges[1].width(r)}}}else if(Nn.direction===Un.Vertical&&e>En.viewport.height()){var l=ee();if(e<l.height&&En.content.height()>0){var s=l.height-(En.edges[0].height()+En.content.height());En.edges[1].height(s)}}En.scroller.stop(),!o||Wn.loading||Wn.scrollPos.x===t&&Wn.scrollPos.y===e?(En.scroller.scrollLeft(t),En.scroller.scrollTop(e),"function"==typeof i&&i.call()):zn.when(En.scroller.animate({scrollLeft:t,scrollTop:e},{duration:n||Vn,easing:"easeOutQuad",queue:!1})).done(i)}function be(t,e,o,n,i){var a=En.scroller.scrollLeft()+t,r=En.scroller.scrollTop()+e;xe(a,r,o,n,i)}function ye(t,e){if(En.scroller.is(":animated"))return he("scrolling",e);var o=oe(Fn.number+t-1);xe(o.width,o.height,!0,e)}function ze(){if(En.scrollH&&En.scrollV){var t=3e4,e=Sn.document.getPageCount();if(En.scrollH.pauseEventPropagation(),En.scrollV.pauseEventPropagation(),Nn.direction===Un.Vertical){Pe(En.scrollH,"width");var o=Math.round(oe(e-1).height+$(e-1).height);En.scrollV.scrollSize(o-(En.scrollV.height()-En.scrollH.scrollbarHeight()-1)),o>t?(En.scrollV.ratio(o/(t-(En.scrollV.height()-En.scrollH.scrollbarHeight()-1))),En.scrollV._tray.height(t)):(En.scrollV._tray.height(o),En.scrollV.ratio(1)),Te(En.scrollV)}else if(Nn.direction===Un.Horizontal){Pe(En.scrollV,"height");var n=Math.round(oe(e-1).width+$(e-1).width);En.scrollH.scrollSize(n),n>t?(En.scrollH.ratio(n/(t-(En.scrollH.width()-En.scrollV.width()-1))),En.scrollH._tray.width(t)):(En.scrollH._tray.width(n),En.scrollH.ratio(1)),Te(En.scrollH)}En.scrollV._max=Math.max(En.scrollV._tray.height()-En.scrollV.height(),0)+1,En.scrollH._max=Math.max(En.scrollH._tray.width()-En.scrollH.width(),0)+1,En.scrollH.resumeEventPropagation(),En.scrollV.resumeEventPropagation()}}function De(t,e){var o=3e4;if(Nn.direction===Un.Vertical){if(En.scrollV)if(En.scrollV.scrollSize(Math.max(En.scrollV._scrollSize+e,0)),1===En.scrollV._ratio&&En.scrollV._scrollSize+e<o)En.scrollV._tray.height(En.scrollV._tray.height()+e),En.scrollV._max=Math.max(En.scrollV._tray.height()-En.scrollV[0].clientHeight,0)+1;else{var n=En.scrollV.height()-En.scrollH.scrollbarHeight()-1,i=(o-n)*En.scrollV._ratio;i+e>o?En.scrollV.ratio((i+e)/(o-n)):ze()}Te(En.scrollV),Pe(En.scrollH,"width")}else if(Nn.direction===Un.Horizontal){if(En.scrollH)if(En.scrollH.scrollSize(Math.max(En.scrollH._scrollSize+t,0)),1===En.scrollH._ratio&&En.scrollH._scrollSize+t<o)En.scrollH._tray.width(En.scrollH._tray.width()+t),En.scrollH._max=Math.max(En.scrollH._tray.width()-En.scrollH[0].clientWidth,0)+1,En.scrollH.ratio(En.scrollH._scrollSize/En.scrollH._max);else{var a=En.scrollH.width()-En.scrollV.width()-1,r=(o-a)*En.scrollH._ratio;r+t>o?En.scrollH.ratio((r+t)/(o-a)):ze()}Te(En.scrollH),Pe(En.scrollV,"height")}if((0!==t||0!==e)&&0!==e){var l=En.scroller[0].scrollLeft,s=En.scroller[0].scrollTop;Fe(Y(l,s)+1),bn({type:"scroll",x:l,y:s,dx:0,dy:0})}}function Pe(t,e){if(t){var o=Math.round(Fn.size[e]*Nn.zoom);if(Nn.tabular)o=En.content[e]();else for(var n=0;n<En.pageDivs.length;n++)null!=En.pageDivs[n]._index&&(o=Math.max($(En.pageDivs[n]._index)[e],o));t._tray[e](o),t.scrollSize(o-t[e]()),Te(t),t.ratio(1)}}function Te(t){t&&(t._scrollSize<=0?t._tray.hide():t._tray.show())}function Ae(t){if(!Wn.zooming&&!Wn.scrollBuffer&&En.pageDivs.length){var e=(new Date).getTime(),o=En.scroller[0].scrollLeft,n=En.scroller[0].scrollTop,i=o+En.scroller[0].clientWidth,a=n+En.scroller[0].clientHeight,r=J(o,n)+1,l=Math.abs(r-Fn.number)/re();if(!Wn.loading){var s=Sn.document.getPageCount(),c=En.pageDivs[0]._index,u=En.pageDivs[En.pageDivs.length-1]._index,d=0===l&&(Fn.number-1<c||Fn.number-1>u);l<En.pageDivs.length&&!d?ge(En.edges[1][0],En.scroller[0],o,n,i,a)&&s-1>u?Ee(l):ge(En.edges[0][0],En.scroller[0],o,n,i,a)&&c>0?ke(l):r!==Fn.number&&null===to(r-1)&&Be(r):Ue(r,!1,null),xo()}if(Fe(Y(o,n)+1),!En.scroller.propagationPaused()&&En.scrollH&&En.scrollV){var h=Math.round(o/En.scrollH._ratio),g=Math.round(n/En.scrollV._ratio);h!==En.scrollH.scrollLeft()&&(En.scrollH.pauseEventPropagation(!0),En.scrollH.scrollLeft(h)),g!==En.scrollV.scrollTop()&&(En.scrollV.pauseEventPropagation(!0),En.scrollV.scrollTop(g))}bn({type:"scroll",x:o,y:n,dx:o-Wn.scrollPos.x,dy:n-Wn.scrollPos.y}),t&&(Wn.scrollTimeout&&clearTimeout(Wn.scrollTimeout),Wn.scrollTimeout=setTimeout(function(){Ve(o,n)},500),Wn.scrollPos.x=En.scroller[0].scrollLeft,Wn.scrollPos.y=En.scroller[0].scrollTop,Wn.scrollPos.t=e),Wn.scrollBuffer=t?setTimeout(Ce,50):null}}function Ve(t,e){var o=En.scroller[0].scrollLeft,n=En.scroller[0].scrollTop,i=o===Wn.scrollPos.x&&n===Wn.scrollPos.y;t===Wn.scrollPos.x&&e===Wn.scrollPos.y&&i?(Go(),Wn.scrollTimeout=null,Wn.loading||xo()):i||(Ae({}),Wn.scrollTimeout=null)}function Ce(){null!==Wn.scrollBuffer&&(clearTimeout(Wn.scrollBuffer),Wn.scrollBuffer=null)}function He(){if(Nn.direction===Un.Vertical)Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8&&(En.edges[0].width(En.content.width()),En.edges[1].width(En.content.width()));else if(Nn.direction===Un.Horizontal){var t=En.pageDivs.length?(Pn?Math.max(Fn.size.height,Fn.size.width):Fn.size.height)*Nn.zoom:0;Nn.thumbpadding&&"number"==typeof Nn.thumbpadding&&(t+=2*Nn.thumbpadding),En.edges[0].height(t),En.edges[1].height(t)}}function Me(t,e){e=e||0===e?e:t+En.pageDivs.length-1,e=Math.max(t,e);var o=Nn.tabular?re():1,n=Nn.tabular?(Math.floor(e/o)+1)*o-e:1,i=oe(t),a=Sn.document.getPageCount(),r=a>e?$(e):{width:0,height:0},l=a-o>e?$(a-1):{width:0,height:0},s=ne(t,e);s.width+=r.width,s.height+=r.height;var c=ne(e+1,a-1);if(c.width+=l.width,c.height+=l.height,Nn.direction===Un.Vertical)if(En.edges[0].height(i.height),e+n>=Sn.document.getPageCount()){var u=i.height+s.height+c.height;En.scrollH&&u>En.scroller[0].clientHeight&&En.content.width()<=En.scroller[0].clientWidth?En.edges[1].height(En.scrollH.scrollbarHeight()):En.edges[1].height(0)}else En.edges[1].height(c.height),Atalasoft.Utils.Browser.Chrome&&En.content.height("");else if(Nn.direction===Un.Horizontal)if(En.edges[0].width(i.width),e+n>=Sn.document.getPageCount()){var d=i.width+s.width+c.width;En.scrollV&&d>En.scroller[0].clientWidth&&En.content.height()<=En.scroller[0].clientHeight?En.scrollV._explicitSize?En.edges[1].width(En.scrollV.height()<En.scrollV._tray.height()?En.scrollV.width():0):En.edges[1].width(En.scrollV.width()):En.edges[1].width(0)}else En.edges[1].width(c.width),En.edges[1].height(1)}function Ie(){return Wn.activepage}function ke(t){if(t=t?t:1,0===Wn.prpr&&En.pageDivs.length>0){var e=re(Nn.zoom);Qe();for(var o=t;o>0;o--){var n=En.pageDivs[0]._index-e;if(n>=0&&n<Sn.document.getPageCount()){for(var i=e-1;i>=0;i--){var a=Ge(-1);Oe(a),En.content.prepend(a),Ne(a,Je(n+i),n+i)}Me(n,null),He(),Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<=8&&(En.content[0].className=En.content[0].className)}}setTimeout(Ze,10)}}function Ee(t){t=t?t:1;var e=En.pageDivs[En.pageDivs.length-1]._index+1;if(0===Wn.prpr&&En.pageDivs.length>0&&e<Sn.document.getPageCount()){Qe();for(var o=re(Nn.zoom),n=Sn.document.getPageCount(),i=t;i>0;i--){var a=En.pageDivs[En.pageDivs.length-1]._index+1;if(n>a){for(var r=a+o-1-En.pageDivs.length,l=0;o>l;l++){var s=Ge(1);Oe(s),En.content.append(s),Ne(s,Je(a+l),a+l)}Me(r+1,a),He()}}setTimeout(Ze,10)}}/**
        * Scrolls the viewer to the given page index and executes the callback when finished.
        * @param {number} index - Index of the page to show.
        * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
        *  @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function showPage
        */
function Se(t,e){Be(t+1,e)}/**
        * Scrolls the viewer to the given page number and executes the callback when finished.
        * @param {number} pageNumber - Number of the page to show. Note that page number is expected 1-based.
        * @param {NotificationCallback} [callback]: function to execute after this operation is done
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function showPageNumber
        * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer#showPage|showPage} instead.
        */
function Be(t,e){if(t=Math.max(1,t),t=Math.min(Sn.document.getPageCount(),t),Fn.number!==t){var o=t-Fn.number;Math.abs(o)<En.pageDivs.length?ye(o,e):Ue(t,!0,e)}else"function"==typeof e&&e.call()}function Ue(t,e,o){var n=Sn.document.getPageCount(),i=t-1;if(0===Wn.prpr&&n>0){var a=function(){Ze(!e),"function"==typeof o&&o.call()};Qe();var r=0,l=0,s=0>=i?0:i;if(s+En.pageDivs.length>=n){if(s=n-En.pageDivs.length,Nn.tabular){var c=re();s=Math.ceil(s/c)*c}s=Math.max(s,0)}if(Nn.direction===Un.Vertical){r=oe(s).height,En.edges[0].height(r),Me(s,null),He(),We();for(var u=0;u<En.pageDivs.length;u++)En.content.append(En.pageDivs[u]),Ne(En.pageDivs[u],null,s+u);var d=oe(Math.max(i,0)).height,h=Fn.number<t?-Fn.size.height:Fn.size.height;e&&d!==Wn.scrollPos.y?(xe(null,d+h,!1),xe(null,d,!0,a)):a.call()}else if(Nn.direction===Un.Horizontal){l=oe(s).width,En.edges[0].width(l),Me(s,null),He(),We();for(var g=0;g<En.pageDivs.length;g++)En.content.append(En.pageDivs[g]),Ne(En.pageDivs[g],null,s+g);var f=oe(Math.max(i,0)).width,p=Fn.number<t?-Fn.size.width:Fn.size.width;e&&f!==Wn.scrollPos.x?(xe(f+p,null,!1),xe(f,null,!0,a)):a.call()}}else he("paused",o)}function Le(t){Wn.activepage=t}function Fe(t){var e=Sn.document.getPageCount();if(t>0&&e>=t){if(Fn.number!==t||Fn.numberoutof!==e){if(En.pageLabel.html(t+" / "+e),Fn.number!==t){Fn.number=t;for(var o=0;o<En.pageDivs.length;o++){var n=En.pageDivs[o];n._index===t-1?n.addClass(Rn.atala_active_page):n.removeClass(Rn.atala_active_page)}bn({type:"pagenumberchanged",number:Fn.number})}Fn.numberoutof!==e&&(Fn.numberoutof=e)}}else En.pageLabel.html(""),En.viewport.find("."+Rn.atala_active_page).removeClass(Rn.atala_active_page),Fn.numberoutof=0}function We(){for(var t=En.pageDivs.length-1;t>=0;t--)Oe(En.pageDivs[t])}function Re(){for(var t=0;t<En.loadedImgs.length;t++)En.loadedImgs[t]&&(En.loadedImgs[t].dispose(),En.loadedImgs[t].remove());En.loadedImgs.length=0}function Oe(t){Atalasoft.Utils.Browser.Explorer&&document.activeElement&&t.has(document.activeElement).length&&En.scroller.focus(),t.detach(),null!=t._img&&(t._img._page=null,t._img.getDomElement().detach(),t._img=null),bn({type:"pagerecycled",index:t._index,page:t}),t._index=-1,t.removeAttr(On.atala_page_index)}function qe(t){Oe(t),t._index=-1,t.removeAttr(On.atala_page_index),t._img=null,t.remove()}function Ne(t,e,o,n){if(t._index===o&&t._img===e&&!n)return!1;if(n&&!t.nullinserted&&0>o)return!1;if(t._index=o,t.attr(On.atala_page_index,o),o>=Sn.document.getPageCount())return t.hide(),!1;t._img&&t._img!==e&&(t._img._page=null,t.has(t._img.getDomElement()).length>0&&t._img.getDomElement().detach(void 0,!0)),t._rubberband&&t._rubberband.reset(),t._img=e,t._img&&(t._img._page=t),t.css({display:Nn.tabular||Nn.direction===Un.Horizontal?"inline-block":"block"}),Nn.showpagenumber&&(t.css({position:"relative"}),t._num||(t._num=zn('<div style="position:absolute; right:20px; bottom:16px;z-index:1"/>'),t._num.addClass(Rn.atala_page_number),t.append(t._num)),t._num.text(t._index+1));var i=Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<=8,a=i&&t._img&&!t._img._loaded;if(t._img&&t._img._binds&&(t._img._binds.pageresize||(t._img._binds.pageresize=function(t){bn({type:"pageresize",page:t.image._page,image:t.image,index:t.image._page?t.image._page._index:Sn.document.getPageIndexByImageIndex(t.image._index),width:t.width,height:t.height})},t._img.bind({pageresize:t._img._binds.pageresize})),t._img._binds.pagesizechanged||(t._img._binds.pagesizechanged=function(e){bn({type:"pagesizechanged",page:t,image:e.image,index:e.index,width:e.width,height:e.height,dx:e.dx,dy:e.dy})},t._img.bind({pagesizechanged:t._img._binds.pagesizechanged}))),t._img&&!a){var r=t._img.getDomElement();i&&0===r.find(t._img).length&&r.append(t._img),t.append(r),t._img.trigger({type:"inserted",page:t}),t._img._loaded||(t.nullinserted?t._img.css({width:t.width(),height:t.height()}):je(t._img,t._index)),Wn.newpagedivsize||t.css({width:"",height:""}),t.nullinserted=!1}else t.nullinserted=!0,Wn.newpagedivsize||je(t,t._index);return bn({type:"pageshown",page:t,index:t._index}),!0}function je(t,e){var o=$(e,null,!1);t.css({width:o.width,height:o.height})}function Qe(){Wn.prpr++}function Ze(t){0!==Wn.prpr&&(Wn.prpr--,0!==Wn.prpr||t||Ae())}function Ge(t){return t>0?(fe(En.pageDivs,0,En.pageDivs.length-1),En.pageDivs[En.pageDivs.length-1]):(fe(En.pageDivs,En.pageDivs.length-1,0),En.pageDivs[0])}/**
         * Checks whether specified document page have been loaded. 
         * @param {number} index - Page index.
         * @returns {boolean} `true` if page have already been loaded; `false` otherwise.
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function isPageLoaded
         */
function Xe(t){var e=Sn.document.getPageDefinition(t);return e.cacheIndex>=0&&En.loadedImgs[e.cacheIndex]&&En.loadedImgs[e.cacheIndex]._loaded}/**
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
        */
function $e(t,e,o,n,i){var a=zn.Deferred(),r=zn.Deferred(),l=zn.Deferred(),s=zn.Deferred();"function"==typeof n&&(i=n,n=void 0),"function"==typeof o&&(i=o,o=!1),"function"==typeof e&&(i=e,e=!1),"function"==typeof i&&a.done(i);var c=Sn.document.getPageDefinition(t);if(!c)return a.resolve(),a.promise();c.cacheIndex>=0&&En.loadedImgs[c.cacheIndex]?r=Ke(c,n):Je(t,n,function(){r.resolve()});var u="string"==typeof e?e:c.uri?null:Nn.annotationsurl;Nn.allowannotations&&e&&(u||c.uri)?Sn.annotations.loadAnnotationsUrl(Nn.serverurl,u,c.uri,c.index,1,t,function(){l.resolve(!0)}):(e&&Sn.annotations.loadAnnotations({layers:[[]],offset:t}),l.resolve(!!e));var d="string"==typeof o?o:c.uri?null:Nn.formsurl;return Nn.allowforms&&o&&(Nn.formsurl||d)?Sn.forms.loadFormUrl(Nn.serverurl,d,c.uri,c.index,1,t,function(){s.resolve(!0)}):s.resolve(),zn.when(r,l,s).done(function(e,o,n){(o||n)&&Xo(t,!0),a.resolve(t)}),a.promise()}/**
        * Silently reloads the specified page if it has already been loaded before. Not creates new page.
        * @private
        * @return {object} page reload promise
        */
function Ke(t,e){var o=zn.Deferred();if(t.cacheIndex>=0&&En.loadedImgs[t.cacheIndex]){var n=En.loadedImgs[t.cacheIndex];n.invalidate(e,function(){o.resolve()})}else o.resolve();return o.promise()}function Je(t,e,o){"function"==typeof e&&(o=e,e=void 0);var n=Sn.document.getPageDefinition(t);if(n){if(n.cacheIndex<0||!En.loadedImgs[n.cacheIndex]){var i=Wn.nextImageCacheIndex++;n.cacheIndex=i,Sn.document.setPageCacheIndex(t,i),En.loadedImgs[i]=W(n.index,n.ref,e,function(t){t&&(En.loadedImgs[i]=t,t._cacheIndex=i,Sn.memory.allocate(t)),"function"==typeof o&&o.call()}),Nn.allowtext&&Sn.text&&!Pn&&Sn.text.ensurePageTextLoaded(t)}else"function"==typeof o&&o.call();return En.loadedImgs[n.cacheIndex]}}function Ye(t){var e=to(t);if(e){var o=En.scroller[0].scrollLeft,n=En.scroller[0].scrollTop;return ge(e[0],En.scroller[0],o,n,o+En.scroller[0].clientWidth,n+En.scroller[0].clientHeight)}return!1}function to(t){for(var e=null,o=0;o<En.pageDivs.length&&null===e;o++)En.pageDivs[o]._index===t&&(e=En.pageDivs[o]);return e}function eo(t,e,o,n,i){n&&"function"==typeof n&&(i=n,n=!1);var a,r=to(t);if(r){var l=En.scroller[0].scrollLeft,s=En.scroller[0].scrollTop;if(a=te(r[0],En.scroller[0]),a.left+=e.x,a.top+=e.y,!n&&a.left>=l&&a.left<=l+l+En.scroller[0].clientWidth&&a.top>=s&&a.top<=s+En.scroller[0].clientHeight)return i&&i(),void 0}else a=oe(t),a.left=a.width+e.x,a.top=a.height+e.y;var c={x:En.scroller[0].clientWidth/2,y:En.scroller[0].clientHeight/2};oo(o,Atalasoft.Utils.PageSelection.BottomLeft)?(c.x=En.scroller[0].clientWidth,c.y=En.scroller[0].clientHeight):oo(o,Atalasoft.Utils.PageSelection.TopLeft)&&(c.x=0,c.y=0),xe(a.left-c.x,a.top-c.y,!0,i)}function oo(t,e){return t&&e&&t.x===e.x&&t.y===e.y}function no(t,e){var o=to(t);null!=o&&null!=o._num&&o._num.css({left:e-20,right:0})}function io(){Zn&&clearTimeout(Zn),Zn=setTimeout(function(){bn("documentchanged")},200)}function ao(){0===Wn.prpr&&(Atalasoft.Utils.Browser.Safari||Atalasoft.Utils.Browser.Chrome?En.edges[1].hide().show():En.edges[1][0].className=En.edges[1][0].className)}function ro(){En.scroller.stop(),En.scroller.pauseEventPropagation(),Qe()}function lo(){ze(),En.pageDivs.length>0&&Ye(Sn.document.getPageCount()-1)&&Me(En.pageDivs[0]._index),He(),En.scroller.resumeEventPropagation(),Ze()}function so(){Wn.zooming=!0,ro(),bn("zoomstarted")}function co(t){t=Math.min(t,X()),t=Math.max(t,G()),po(t,!1),Nn.zoom=t,xo(!1),_o(t,!1)}function uo(){Wn.zooming=!1,lo(),bn({type:"zoomchanged",zoom:Nn.zoom})}/**
        * Asynchronously zooms the viewer to the given zoom over the default zoom duration
        * @param {number} zoom - Desired zoom level to zoom to.
        * @param {NotificationCallback} [callback] - function to execute after the zoom is finished animating.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function zoom
        */
function ho(t,e){Wn.zooming?he("zooming",e):(Wn.zooming=!0,ro(),bn("zoomstarted"),e=null==e?go:Atalasoft.Utils.__functionFromArray([go,e]),t!==Nn.zoom?(t=Math.min(t,X()),t=Math.max(t,G()),po(t,!0),Nn.zoom=t,xo(!0),_o(t,!0,e)):"function"==typeof e&&e.call())}function go(){Wn.zooming=!1,lo(),Ae(),bn({type:"zoomchanged",zoom:Nn.zoom})}function fo(t,e){var o=Nn.zoom+(t?-1:1)*Nn.zoom*.3;ho(o,e)}function po(t,e,o){var n=oe(Fn.number,null,null),i=oe(Fn.number,null,null,t),a=(En.scroller.scrollLeft()-n.width)/Nn.zoom*t,r=(En.scroller.scrollTop()-n.height)/Nn.zoom*t;xe(i.width+a,i.height+r,e,An,o)}function mo(){En.edges[0]._z=Nn.zoom}function _o(t,e,o){if(En.edges.length>0){o="function"==typeof o?Atalasoft.Utils.__functionFromArray([mo,o]):mo;var n=Nn.direction===Un.Vertical,i=En.pageDivs[0]&&En.pageDivs[0]._img?En.pageDivs[0]._index:0,a=oe(i,null,null,t),r=n?a.height:a.width;if(e&&!Wn.loading){var l=n?{height:r}:{width:r};En.edges[0].animate(l,{duration:An,easing:"easeOutQuad",complete:o,queue:!1})}else n?En.edges[0].height(r):En.edges[0].width(r),"function"==typeof o&&o.call();vo()}}function vo(t){setTimeout(function(){var e=zn("<canvas/>"),o=zn('<span style="position:absolute; visibility:hidden; left: -5000px;">{[|,0123456789Thqkbfjplyg</span>');zn(document.body).append(o),t=t||Nn.zoom;var n=Nn.direction===Un.Vertical,i=Wn.newpagedivsize?Wn.newpagedivsize:{width:Fn.size.width*t,height:Fn.size.height*t},a=Math.max(1,Nn.pagespacing),r=re();e[0].width=(i.width+a)*(n?r:1),e[0].height=i.height*(n?1:r);var l=e[0].getContext("2d");l.lineWidth=Nn.pageborderwidth,Nn.backcolor&&(l.fillStyle=Nn.backcolor);for(var s=1,c=0;r>c;++c){var u=n?s+c*i.width:s,d=n?s:s+c*i.height;l.strokeRect(u,d,i.width-2*s,i.height-2*s),Nn.backcolor&&l.fillRect(u+l.lineWidth,d+l.lineWidth,i.width-2*(s+l.lineWidth),i.height-2*(s+l.lineWidth))}var h=e[0].toDataURL(),g={backgroundImage:"url("+h+")",backgroundSize:"auto auto",backgroundRepeat:n?"repeat-y":"repeat-x"};En.edges[0].css(g),En.edges[1].css(g),o.remove()},0)}function wo(){var t={backgroundImage:"",backgroundSize:"",backgroundRepeat:"",backgroundColor:""};En.edges[0].css(t),En.edges[1].css(t)}function xo(t,e){for(var o=0,n=!0,i=function(){if(o--,0>=o){if(Nn.direction===Un.Horizontal){var t=ee().width;En.spacer||(En.spacer=y(),En.spacer.css({position:"absolute",top:"-1px",height:"1px"}),En.viewport.append(En.spacer)),En.spacer.width(t)}"function"==typeof e&&e.call(),ao()}},a=0;a<En.pageDivs.length;a++)if(En.pageDivs[a]._img){var r=En.pageDivs[a]._img.needsZoom()||En.pageDivs[a]._img.needsRotate();r&&(n=!1,o++,En.pageDivs[a]._img.needsRotate()?En.pageDivs[a]._img.rotate(i):En.pageDivs[a]._img.needsZoom()&&En.pageDivs[a]._img.zoom(t,i))}n&&i.call()}/**
        * Asynchronously zooms the viewer to fit to a page.
        * @param {Atalasoft.Utils.Fitting} fit - Type of fitting to fit the page to.
        * @param {number} pageNumber - Page number to fit to.  Note, that it's 1-based.
        * @param {NotificationCallback} callback - Function to execute after the fit is done animating.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function fit
        */
function bo(t,e,o){null!=e?"function"==typeof e&&(o=e,e=Fn.number):e=Fn.number;var n=yo(t,e-1),i=n.zoom,a=Bn.Width===n.fit,r=Bn.Height===n.height;a&&xe(0,null,!1),r&&xe(null,0,!1),ho(i,o)}function yo(t,e){var o=de(),n=K(e,1,!1);(0===n.width||0===n.height)&&(t=null);var i=Nn.zoom;switch(t){case Bn.None:break;case Bn.Best:n.width/o.width>n.height/o.height?(i=o.width/n.width,t=Bn.Width):(i=o.height/n.height,t=Bn.Height);break;case Bn.Height:i=o.height/n.height;break;case Bn.Width:i=o.width/n.width;break;default:i=1,t=Bn.None}return{zoom:i,fit:t}}function zo(t){return Sn.document.getPageFitMultiplier(t)}function Do(t){return Nn.zoom*Sn.document.getPageFitMultiplier(t)}function Po(t){return Sn.document.getPageRotation(t)}function To(t,e){e=e||0;var o=Po(t),n=Do(t),i=le(t,e),a=Raphael.matrix();a.scale(n,n,0,0),a.rotate(o+e,0,0);var r=Ao(a,{x:i.width,y:i.height}),l=Math.min(0,r.x),s=Math.min(0,r.y),c=a.invert(),u=c.x(-l,-s),d=c.y(-l,-s);return a.translate(u,d),a}function Ao(t,e){return{x:t.x(e.x,e.y),y:t.y(e.x,e.y)}}function Vo(t){var e=zn.data(t.currentTarget,"_config"),o=zn.data(t.currentTarget,"_annoConfig");!o&&e&&(o={type:e.icon,rotatable:Nn.showrotatetools}),o&&(Sn.mouseTool.setTool(Ln.None,Ln.None),Sn.annotations.drawAnnotation(o,!1,Ho,Co))}function Co(){Sn.mouseTool.setTool(Ln.Pan,Ln.None)}function Ho(){Sn.mouseTool.setTool(Ln.Pan,Ln.None)}/**
        * Checks whether annotations support is enabled.
        * @private
        */
function Mo(){return Nn.allowannotations===!1&&w("InitError",'The "allowannotations" property in the WebDocumentViewer config is set to false.'),Nn.allowannotations}function Io(){for(var t=0;t<En.pageDivs.length;t++)En.pageDivs[t]._draw.toFront()}function ko(){for(var t=0;t<En.pageDivs.length;t++)En.pageDivs[t]._draw.reset()}function Eo(t,e,o){if(t){if(Wn.loading=!0,Fn.size.width=t.pagewidth,Fn.size.height=t.pageheight,Fn.count=t.pagecount,Fn.buffer=Nn.pagebuffersize,Fn.dpi=t.dpi,Fn.vector=t.vector===!0,Nn.allowannotations=o.allowannotations,Nn.allowforms=o.allowforms,Nn.allowtext=o.allowtext,Nn.documenturl=o.documenturl,Nn.annotationsurl=o.annotationsurl,Nn.formsurl=o.formsurl,Sn.document.__linkChanges(e),Sn.annotations&&(Sn.annotations.clear(),Sn.annotations.loadAnnotations(t)),Sn.forms&&(Sn.forms.clear(),t.forms&&Sn.forms.loadForms(t)),Sn.text&&Sn.text.search(""),Sn.mouseTool.setTool(Nn.mousetool.type&&!Pn?Nn.mousetool.type:Ln.Pan,Ln.None),Wn.zooming=!1,t.zoom)Nn.zoom=t.zoom;else{var n=yo(Nn.fitting,1);Nn.zoom=n.zoom}Wo(t.pagenumber||0),vo(),Wn.loading=!1,xo(),bn({type:"activedocumentchanged"})}}function So(t,e){e&&rn(!0);for(var o=0;o<t._controllers.document.getPageCount();++o){var n=t._controllers.document.getPageDefinition(o,Tn);n&&n.cacheIndex>=0&&En.loadedImgs[n.cacheIndex]&&(Sn.memory.deallocate(En.loadedImgs[n.cacheIndex]),En.loadedImgs[n.cacheIndex].dispose(),En.loadedImgs[n.cacheIndex].remove(),En.loadedImgs[n.cacheIndex]=void 0)}}function Bo(t,e){function o(t){Uo(t,e)}function n(t,o,n){Lo(t,o,n,e)}Wn.loading=!0;var i={atala_docurl:Nn.documenturl,atala_pagebuffer:Nn.pagebuffersize,atala_minwidth:Nn.minwidth};Pn&&(i.atala_thumb=Pn,i.atala_capt_format=Nn.thumbcaptionformat),null!=t&&("function"==typeof t&&(e=t,t=null),zn.extend(i,t));var a={type:"docinfo",serverurl:Nn.serverurl,query:"?ataladocinfo=",method:"GET",data:i,cancel:!1,info:{pagewidth:-1,pageheight:-1,pagecount:-1}};tn(a,o,n)}function Uo(t,e){if(t&&t.licensed!==!1)Fn.size.width=t.pagewidth,Fn.size.height=t.pageheight,Fn.count=t.pagecount,Fn.buffer=Nn.pagebuffersize,Fn.dpi=t.dpi,Fn.vector=t.vector===!0,Fn.caption=t.thumbcaptionformat||(Nn.showthumbcaption?"{0}":""),Qn.zero(),Sn.memory.clearEntries(),Sn.memory.setColorDepth(t.colordepth),Sn.memory.setPageSize(t.pagewidth,t.pageheight),bn({type:"documentinfochanged",info:{count:Fn.count,dpi:Fn.dpi,size:{height:Fn.size.height,width:Fn.size.width},vector:Fn.vector}}),Sn.text&&(Sn.text.clear(),t.text&&Sn.text.loadText(t)),Wn.loading&&(Nn.zoom=1,F(),xe(0,0),En.scrollV&&En.scrollV.pageNum(1),Fe(1),bo(Nn.fitting,1,function(){He(),Me(0,En.pageDivs.length-1);for(var o=0;o<En.pageDivs.length&&o<Fn.count;o++)En.content.append(En.pageDivs[o]),Ne(En.pageDivs[o],null,o);En.pageDivs.length>0&&En.pageDivs[0].addClass(Rn.atala_active_page),t.layers&&t.layers.length?Sn.annotations.loadAnnotations(t):Nn.annotationsurl&&Sn.annotations&&Sn.annotations.clear(),Sn.forms&&(Sn.forms.clear(),t.forms&&Sn.forms.loadForms(t)),Sn.mouseTool.setTool(Nn.mousetool.type&&!Pn?Nn.mousetool.type:Ln.Pan,Ln.None),Wn.loading=!1,vo(),"function"==typeof e&&e(t.error),t.error&&setTimeout(function(){w("DocumentLoadError",t.error)},0)})),Wn.loading=!1;else{var o,n;t&&t.licensed===!1?(o="LicenseException",n=t.error?t.error:"LicenseException: Handler was unable to find a valid license."):(o="DocumentLoadError",n="HandlerException: Handler did not return any data."),Wn.loading=!1,"function"==typeof e&&e.call(void 0,n),o&&n&&w(o,n)}}function Lo(t,e,o,n){if(t.responseText){var i=t.responseText.substr(t.responseText.indexOf("</html>")+7);i.indexOf("<!--")>=0?(i=i.replace("<!--","").replace("-->",""),i.length>0&&(o="<pre>"+i+"</pre>")):t.responseText.indexOf("web.config")>0&&t.responseText.indexOf("customErrors")>0&&(o+=": web.config customErrors attribute has disabled remote error messages.")}w("DocumentLoadError",o),"function"==typeof n&&n.call(void 0,o)}function Fo(){Wo()}function Wo(t){if(F(),En.pageDivs.length>0){var e=Sn.document.getPageCount(),o="number"==typeof t?t:En.pageDivs[0]._index;o=o>=0?Math.min(o,e-En.pageDivs.length):0;for(var n=0;n<En.pageDivs.length&&e>n;n++){var i=o+n;Oe(En.pageDivs[n]),En.content.append(En.pageDivs[n]),Ne(En.pageDivs[n],null,i)}}Me(En.pageDivs.length>0?En.pageDivs[0]._index:0,null),He(),Go(),ze();var a=En.scroller[0].scrollLeft,r=En.scroller[0].scrollTop,l=Y(a,r);Fe(l+1),t>=0&&l!==t&&Se(t)}function Ro(t,e){function o(t){Oo(t),"function"==typeof e&&e.call()}function n(t){var e=[];e.error=t.responseText,o(e)}var i={atala_docurl:Nn.documenturl,atala_spath:Nn.savepath};zn.extend(i,t);var a={type:"docsave",serverurl:Nn.serverurl,query:"?ataladocsave=",method:"POST",data:i,cancel:!1,info:{success:void 0,error:void 0}};tn(a,o,n)}function Oo(t){t.error?w("DocumentSaveError",t.error):pe("DocumentSave: success="+t.success),bn({type:"documentsaved",success:t.success})}function qo(t,e,o){var n=null;return"string"==typeof t?(n={},Wn.initialized&&o&&(t.length>0?n=o.createHandlerRequest(Nn.serverurl,t,e):0===t.length&&o.clear()),n.url=t):"undefined"!=typeof t&&null!=t&&w("openUrlError","string input expected for url."),n}function No(){wn({annotationsloaded:Ko})}function jo(t,e){Sn.annotations&&(No(),Sn.annotations.makeHandlerRequest(t,e))}function Qo(){wn({formsloaded:Jo})}function Zo(t,e){Sn.forms&&(Qo(),Sn.forms.makeHandlerRequest(t,e))}function Go(t){if(!(En.pageDivs.length>0&&"undefined"==typeof En.pageDivs[0]._index))for(var e=0;e<En.pageDivs.length;e++)$o(En.pageDivs[e],t)}function Xo(t,e){var o=to(t);o&&$o(o,e)}function $o(t,e){(Ne(t,Je(t._index),t._index)||e)&&(Sn.annotations&&Sn.annotations.showLayer(t._index,t),Sn.forms&&!Pn&&Sn.forms.showLayer(t._index,t),Sn.text&&!Pn&&Nn.allowtext&&Sn.text.showLayer(t._index,t))}function Ko(t){t.error&&(w("AnnotationsLoadError",t.error),Nn.annotationsurl=""),Sn.annotations&&xn({annotationsloaded:Ko})}function Jo(t){t.error&&(w("FormsLoadError",t.error),Nn.formsurl=""),Sn.forms&&xn({formsloaded:Jo})}function Yo(t){bn({type:"beforehandlerrequest",request:t})}function tn(t,e,o){var n=en(t,function(t){e(t.request.info)});Yo(t),t.cancel||(xn({handlerreturned:n}),t.serverurl&&!zn.isEmptyObject(t.data)&&(t.info instanceof jQuery&&"docpage"===t.type?t.info.attr("src",t.serverurl+t.query+"&"+zn.param(t.data)):zn.ajax({type:t.method,url:t.serverurl+t.query+"?",dataType:"json",data:t.data,success:e,error:o,crossDomain:"string"==typeof t.method&&"post"===t.method.toLowerCase()?!1:void 0})))}function en(t,e){var o=function n(o){o.request===t&&(xn({handlerreturned:n}),"function"==typeof e&&e.call(this,o))};return wn({handlerreturned:o}),o}function on(){var t={version:Atalasoft.Controls.Version.join(".")};return Nn.debug&&zn.extend(!0,t,{dom:En,controllers:Sn,page:Fn}),t}function nn(t){function e(){this.typeOf="__LVlinker",this._id=Tn,this._config=Nn,this._controllers=Sn,this._dom=En,this._page=Fn,this._state=Wn,this._annos=null,this._fields=null,this.stateManager=kn,this.__createDialog=C,this.__createDiv=y,this.__createDOM=b,this.__createDropDownButton=H,this.__createDropDownMenu=M,this.__createMenu=V,this.__getPageSize=se,this.__getTabularIndexOffset=re,this.__redrawVisiblePages=Go,this.__adjustVisiblePages=xo,this.__onDocumentChanged=Fo,this.__startDomManipulation=ro,this.__endDomManipulation=lo,this.__status=pe,this.__updatePageSize=f,this.__silentReloadPage=Ke,this.__isObjectInRect=ge,this.__getIndexFromPos=J,this.__showNext=Ee,this.__showPrevious=ke,this.__showPageAsync=Ue,this.__redrawVisiblePages=Go,this.__adjustEdgeHeights=Me}if(t&&"Atalasoft.Controls.WebDocumentThumbnailer"===t.typeOf){var o=new e;return Sn.document.__linkChanges(o),Nn.allowannotations&&(t!==Dn&&Nn.annotationsurl.length>0&&(Nn.annotationsurl=""),Sn.annotations.__linkAnnotations(o)),Nn.allowforms&&(t!==Dn&&Nn.formurl.length>0&&(Nn.formurl=""),Sn.forms.__linkForms(o)),Nn.allowtext&&Sn.text&&Sn.text.__linkText(o),o}}/**
         * Resets the viewer to its default state.
         * @param {OpenUrlCallback} [callback]  - Function to execute when the empty process is finished
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function empty
        */
function an(t){Wn.loading=!0;var e=function(){ze(),bn({type:"documentunloaded"}),"function"==typeof t&&t.call()};rn(),Uo({pagewidth:0,pageheight:0,pagecount:-1},e)}function rn(t){Wn.initialized&&(We(),F(0),t||Re(),En.edges[0].width(0).height(0),En.edges[1].width(0).height(0),En.scrollH&&(En.scrollH.scrollSize(0),Te(En.scrollH)),En.scrollV&&(En.scrollV.scrollSize(0),Te(En.scrollV)),wo())}/**
        * Gets the current zoom level of the viewer.
        * @returns {number}
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function getZoom
        */
function ln(){return Nn.zoom}/**
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
function sn(){return Wn.initialized}/**
        * Scrolls to the given coordinates, does not account for zoom, i.e. `x` and `y` values are passed in window coordinate space.
        * @param {number} x - Indicating the coordinate of the x axis.
        * @param {number} y - Indicating the coordinate of the y axis.
        * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
        * @param {NotificationCallback} [callback] - function to execute when the scroll operation is finished.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function scrollTo
         */
function cn(t,e,o,n){null==n&&"function"==typeof o&&(n=o,o=!1),xe(t,e,o,null,n)}/**
        * Scrolls by the given deltas, does not account for zoom, i.e. `dx` and `dy` values are passed in window coordinate space.
        * @param {number} dx - Indicating delta of the x axis.
        * @param {number} dy - Indicating delta of the y axis .
        * @param {boolean} [ani=false] - Indicating whether to animate this scroll.
        * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function scrollBy
        */
function un(t,e,o,n){null==n&&"function"==typeof o&&(n=o,o=!1),be(t,e,o,null,n)}/**
        * Scrolls to the next viewable page.
        * @param {number} n - Number of pages to scroll forward.
        * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function next
        */
function dn(t,e){var o=Nn.direction===Un.Vertical?re():1;null==e&&"function"==typeof t&&(e=t,t=o),isFinite(t)||(t=o),ye(t,e)}/**
        * Scrolls to the previous viewable page.
        * @param {number} n - Number of pages to scroll backward.
        * @param {NotificationCallback} [callback] - Function to execute when the scroll operation is finished.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function previous
        */
function hn(t,e){var o=Nn.direction===Un.Vertical?re():1;null==e&&"function"==typeof t&&(e=t,t=o),isFinite(t)||(t=o),ye(-t,e)}/**
         * Zooms in one level.
         * @param {NotificationCallback} [callback] - Function to execute when the zoom operation is finished
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function zoomIn
         */
function gn(t){fo(!1,t)}/**
        * Zooms out one level.
        * @param  {NotificationCallback} [callback] - Function to execute when the zoom operation is finished.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function zoomOut
        */
function fn(t){fo(!0,t)}/**
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
        * @param {string} [formurl] - url of the form file with respect to the @link WebDocumentViewerConfig.serverurl| config.serverurl}.
        * @param {OpenUrlCallback} [callback] - Function to execute when the open operation is finished.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function openUrl
        */
function pn(t,e,o,n){null==n&&("function"==typeof e?(n=e,e=null):"function"==typeof o&&(n=o,o=null));var i=0,a=!1,r={},l=qo(e,t,Sn.annotations),s=qo(o||t,t,Sn.forms);Nn.annotationsurl=l?l.url:Nn.annotationsurl,Nn.formsurl=s?s.url:Nn.formsurl;var c=function(t){i--,0>=i&&(Go(!0),bn({type:"documentloaded"}),"function"==typeof n&&n.call(void 0,t))};if("string"==typeof t)0===t.length?an(c):(Nn.documenturl=t,Wn.initialized&&(rn(),O(En.scrollH),O(En.scrollV),i++,0===t.length&&an(c),Nn.allowannotations&&l&&l.data&&(No(),zn.extend(r,l.data)),Nn.allowforms&&s&&s.data&&(Qo(),zn.extend(r,s.data)),a=!0,Bo(r,c)));else{var u=!(t||!(Nn.documenturl.length>0)||!e&&""!==e&&!o&&""!==o);u||w("openUrlError","string input expected for document url.")}a||(l&&(i++,jo(l,c)),s&&(i++,Zo(s,c)))}/**
        * Saves the client changes in this document to the pre defined save folder or to the given path.
        * @param {string} [subpath] - Relative path to save to starting from {@link WebDocumentViewerConfig.savepath | savepath}. Must be writable.
        * @param {string} [saveformat] - Save file format. If specified, the value overrides {@link WebDocumentViewerConfig.savefileformat | savefileformat} form config.
        * @param {object} [params] - A plain object containing optional reload parameters that will be passed to server.
        * @param {NotificationCallback} [callback]  to execute when the save has finished
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function save
         *
         * @example
         * var _viewer = new Atalasoft.Controls.WebDocumentViewer({
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
         */
function mn(t,e,o,n){"function"==typeof o&&(n=o,o={}),"function"==typeof e&&(n=e,e=Nn.savefileformat),"function"==typeof t&&(n=t,t=null),void 0===e&&(e=Nn.savefileformat);var i=zn.extend(!0,o,{atala_subpath:t||"",atala_sformat:e});Sn.annotations&&zn.extend(i,{atala_iuname:Nn.annotations.saveusername,atala_annos:Sn.annotations.stringifyChanges()}),Sn.forms&&zn.extend(i,{atala_forms:Sn.forms.stringifyChanges()}),Sn.document&&zn.extend(i,{atala_document:Sn.document.stringifyChanges()}),Ro(i,n)}/**
        * Gets the current page index
        * @returns {number} Zero based index of the current page.
        *
        * Note, that current page index detection could be affected by {@link WebDocumentViewerConfig.pageselectlocation|pageselectlocation} configuration parameter.
        *  @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function getCurrentPageIndex
        */
function _n(){return Fn.number-1}/**
         * Sets the current mouse tool
         * @param {Atalasoft.Utils.MouseToolType} tool - Type of the tool to set.
         *
         * Mouse tool configuration could be passed using {@link WebDocumentViewerConfig.mousetool| mousetool} configuration option.
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function setMouseTool
         */
function vn(t){for(var e in Atalasoft.Utils.MouseToolType)if(Atalasoft.Utils.MouseToolType.hasOwnProperty(e)&&Atalasoft.Utils.MouseToolType[e]===t){Sn.mouseTool.setTool(t);break}}/**
        *  Attaches a handler to an event.
        * @param {string} event - the name of the event to bind to.
        * @param {function} handler - event handler.
        * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
        * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function bind
         */
function wn(){return me(arguments,!0),Mn.bind.apply(Mn,arguments),Dn}/**
        * Detaches the handler from the event.
        * @param {string} event - the name of the event to unbind.
        * @param {function} [handler] -  the event handler to unbind. If not specified, all handlers are unbound.
        * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function unbind
        */
function xn(){return me(arguments,!1),Mn.unbind.apply(Mn,arguments),Dn}/**
        * Triggers the event.
        * @param {string} event - the name of the event to trigger.
        * @param {Object} [parameters] - the event data.
        * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
        * @instance
        * @memberOf Atalasoft.Controls.WebDocumentViewer
        * @function trigger
        */
function bn(){return Mn.trigger.apply(Mn,arguments),Dn}/**
         * Gets the current document info
         * @return {{count: *, dpi: number, size: {height: number, width: number}, vector: boolean}} object indicating document main page size, and number of pages
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function getDocumentInfo
         */
function yn(){return{count:Sn.document.getPageCount(),dpi:Fn.dpi,size:{height:Fn.size.height,width:Fn.size.width},vector:Fn.vector}}var zn=Atalasoft.$,Dn={typeOf:e.type||"Atalasoft.Controls.WebDocumentViewer"},Pn="Atalasoft.Controls.WebDocumentThumbnailer"===Dn.typeOf,Tn="",An=150,Vn=500,Cn="atala-ui-icon",Hn=document.createElement("div"),Mn=zn({}),In=zn({}),kn=new Atalasoft.Controls.DocumentStateManager(n()),En={/** Main outer object that holds the scrollbars */
main:null,/** Toolbar wrapper object */
toolbar:null,/** Inner object that controls scrolling */
scroller:null,/** Inner object that defines the viewable area */
viewport:null,/** Inner content container object */
content:null,/** Inner horizontal scroll bar object */
scrollH:null,/** Inner vertical scroll bar object */
scrollV:null,/** Edge objects of viewable area */
edges:[],/** Image objects already requested */
loadedImgs:[],/** Page wrapper objects recycle pool */
pageDivs:[],/** Span tag containing the page number */
pageLabel:null,/** Status div */
status:null},Sn={annotations:null,document:null,forms:null,mouseTool:null,memory:null,text:null},Bn=Atalasoft.Utils.Fitting,Un=Atalasoft.Utils.ScrollDirection,Ln=Atalasoft.Utils.MouseToolType,Fn=a(),Wn=r(),Rn=Atalasoft.Controls.WebDocumentViewer.domclasses,On=Atalasoft.Controls.WebDocumentViewer.domattributes,qn={/**
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
beforehandlerrequest:null,/**
             *  Triggers when the document info has changed, usually after a new document is opened.
             *  @event Atalasoft.Controls.WebDocumentViewer#documentinfochanged
             *  @type {NotificationCallback}
             */
documentinfochanged:null,/** Triggers when the document is done loading.
             * @event Atalasoft.Controls.WebDocumentViewer#documentloaded
             * @type {NotificationCallback}
             */
documentloaded:null,/**
             * Triggers when viewer has been activated by another thumbnailer or reactivated by the same thumbnailer with changed document data.
             */
activedocumentchanged:null,/** Triggers after a response from the server while saving the document.
             * @event Atalasoft.Controls.WebDocumentViewer#documentsaved
             * @param {Object} event - The event object.
             * @param {boolean} event.success - Flag indicating whether save were successful.
             */
documentsaved:null,/**
             * Triggers when the document has been unloaded from the control.
             * @event Atalasoft.Controls.WebDocumentViewer#documentunloaded
             * @type {NotificationCallback}
             */
documentunloaded:null,/**
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
error:null,/** Triggers when the control has completed asynchronous initialization.
             *
             * Asynchronous initialization happens when some dependent scripts are not included to web page and control trying to load them on background.
             * In case of synchronous initialization, this event won't be fired. {@link Atalasoft.Controls.WebDocumentViewer#isReady| isReady} method could be used after construction to check whether control is initialized.
             * @event Atalasoft.Controls.WebDocumentViewer#initialized
             * @type {NotificationCallback}
             */
initialized:null,/**
             * Triggers when the page number has changed. Populated keys: e.number
             * @event Atalasoft.Controls.WebDocumentViewer#pagenumberchanged
             * @param {Object} event - The event object.
             */
pagenumberchanged:null,/** Triggers when the control has recycled a pageDiv object.
             * @event Atalasoft.Controls.WebDocumentViewer#pagerecycled
             * @param {Object} event - The event object.
             * @param {number} event.index - Index of the recycled page.
             */
pagerecycled:null,/**
             * Triggers when the control has resized a pageDiv object.
             * @event Atalasoft.Controls.WebDocumentViewer#pageresize
             * @param {Object} event - The event object.
             * @param {number} event.index - Index of the resized page.
             * @param {number} event.width - Width of the page after resize.
             * @param {number} event.height - Height of the recycled page.
             */
pageresize:null,/** Triggers when the control has shown a page in the viewable area.
             * @event Atalasoft.Controls.WebDocumentViewer#pageshown
             * @param {Object} event - The event object.
             * @param {number} event.index - Index of the page.
             */
pageshown:null,/** Triggers when the page size returned from the server is different than expected. The expected page size is the size returned from server along with other document info.
             * @event Atalasoft.Controls.WebDocumentViewer#pagesizechanged
             * @param {Object} event - The event object.
             * @param {number} event.index - Index of the resized page.
             * @param {number} event.width - Width of the page after resize.
             * @param {number} event.height - Height of the recycled page.
             * @param {number} event.dx - Difference with the previous(expected) page width. Scaled images are compared.
             * @param {number} event.dy - Difference with the previous(expected) page height. Scaled images are compared.
             */
pagesizechanged:null,/** Triggers for every pixel movement registered by the scrollable area.
             * @event Atalasoft.Controls.WebDocumentViewer#scroll
             * @param {Object} event - The event object.
             * @param {number} event.x - Horizontal scroll position.
             * @param {number} event.y - Vertical scroll position.
             * @param {number} event.dx - Distance scrolled horizontally.
             * @param {number} event.dy - Distance scrolled vertically.
             */
scroll:null,/** Triggers when dependencies have finished loading.
             * @event Atalasoft.Controls.WebDocumentViewer#scriptsloaded
             * @type {NotificationCallback}
             */
scriptsloaded:null,/** Triggers when the control has updated the status bar.
             * @event Atalasoft.Controls.WebDocumentViewer#statusmessage
             * @param {Object} event - The event object.
             * @param {string} event.message - The status message.
             */
statusmessage:null,/** Triggers when a zoom operation has been started.
             * @event Atalasoft.Controls.WebDocumentViewer#zoomstarted
             * @type {NotificationCallback}
             */
zoomstarted:null,/** Triggers when the zoom level of the control has changed.
             * @event Atalasoft.Controls.WebDocumentViewer#zoomchanged
             * @param {Object} event - The event object.
             * @param {number} zoom - Current document zoom value.
             */
zoomchanged:null},Nn={/**
             * @property {boolean} [allowannotations=false] - Turns annotation support on or off.
             * This affects both UI annotations toolbar appearance and corresponding API methods behavior.
             * If set to `false`, {@link Atalasoft.Controls.WebDocumentViewer#annotations|WebDocumentViewer.annotations} will be set to `null` and annotation-related methods of {@link Atalasoft.Controls.WebDocumentViewer |WebDocumentViewer} will throw errors.
             */
allowannotations:!1,/**
             * @property {boolean} [allowflick=true] - Turns flick scrolling support on or off.
             */
allowflick:!0,/**
             * @property {boolean} [allowforms=false] - Turns forms support on or off.
             */
allowforms:!1,/**
             * @property {boolean} [allowtext=false] - Turns text selection support on or off.
             */
allowtext:!1,/**
             * @property {AnnotationsConfig} [annotations] - Annotations specific config options, including predefined configurations for particular annotation types.
             */
annotations:{/**
                 * Represents default configuration for various types of annotations.
                 * @typedef {Object} AnnotationsConfig
                 * @property {AnnotationData[]} [defaults] - Pre defined annotations to be drawn with the mouse.
                 * @property {AnnotationData[]} [stamps] - Pre defined stamp annotations to be drawn with the mouse.
                 * @property {AnnotationData[]} [images] - Pre defined image annotations to be drawn with the mouse.
                 * @property {AnnotationData[]} [custom] - Custom annotation types.
                 * @property {boolean} [saveusername] - Indicates whether the server handler will save the username property when saving all
                 */
/**
                 * Predefined annotations to be drawn with the mouse.
                 */
defaults:null,/**
                 * Predefined stamp annotations to be drawn with the mouse.
                 */
stamps:null,/**
                 * Pre defined image annotations to be drawn with the mouse.
                 */
images:null,/**
                 * Indicates whether the server handler will save the username property when saving all annotations.
                 */
saveusername:!1},/**
             * @property {number} [columns] - Number of columns to show when displaying tabular pages, -1 is automatic. */
columns:-1,/** @property {Atalasoft.Utils.ScrollDirection} [direction = Vertical] - Scroll direction of the viewer.
             *
             * i.e. controls whether document pages positioned in vertical or horizontal direction.
             */
direction:Un.Vertical,/**
             * @property {string} [documenturl] - Identifier of the document (that is on the server) to be displayed when the document is first opened.
             *
             * By default `documenturl` is treated as an url to the image file on server. Application could customize server behavior and in this case `documenturl` could contain arbitrary string.
             * If this parameter is specified, document will be opened right after viewer initialization completes. Otherwise document should be opened using {@link Atalasoft.Controls.WebDocumentViewer.openUrl | openUrl} method.
             *
             * This property on the {@link Atalasoft.Controls.WebDocumentViewer#config|viewer.config} is updated internally each time new document is opened.
             */
documenturl:"",/**
             *  @property {string} [annotationsurl] Identifier of the annotation data (an .xmp file on the server) that should be displayed along with the displayed document.
             *
             *  By default `annotationsurl` is treated as an url to the serialized annotations data file on server(usually .xmp). Application could customize server behavior and in this case `annotationsurl` could contain arbitrary string.
             *
             *  This property on the {@link Atalasoft.Controls.WebDocumentViewer#config|viewer.config} is updated internally each time new document is opened.
             */
annotationsurl:"",/**
             * @property {string} [formurl] - Identifier of the annotation data PDF form data (.pdf file on the server) that should be displayed along with the displayed document.
             *
             * In most cases this option should be omitted, so forms will be loaded from the PDF document specified by {@link WebDocumentViewerConfig.documenturl | documenturl}
             *
             * This property on the {@link Atalasoft.Controls.WebDocumentViewer#config|viewer.config} is updated internally each time new document is opened.
             */
formurl:"",/**
             * @property {Atalasoft.Utils.Fitting} [fitting = Width] - Specifies the initial page image fit when document is opened in the viewer.
             *
             * Usually it makes sense to set initial fit to viewer width for vertical scrolling {@link WebDocumentViewerConfig.direction|direction} and to height for horizontal.
             */
fitting:Bn.Width,/**
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
forcepagefit:!1,/**
             * @property [forcepagesize] - Allows a custom page size to be used for force fitting all pages to. Ignored if forcepagefit is false.
             * @private
             */
forcepagesize:{height:-1,width:-1},/**
             *  @property {boolean} [jpeg=false] - Allows page images to be returned as jpeg instead of png.
             */
jpeg:!1,/**
             *  @property {number} [maxwidth=3000] - Specifies the maximum amount of pixel width allowed for zooming in.
             *
             *  This property is intended to limit size of the images data transferred over the wire on big zoom values.
             */
maxwidth:3e3,/**
             *  @property {number} [memorythreshold=500000000] - Maximum number of bytes in memory before larger memory objects are recycled.
             *
             *  DOM image objects are cached internally. This option allows to control memory usage on the browser page. Note, that estimated image sizes are not exactly match actual values - estimation is based on the expected document images color format and size. So actual memory usage in browser process could differ from the configured value.
             */
memorythreshold:5e8,/**
             *  @property {number} [minwidth=150] - Specifies the minimum amount of pixel width allowed for zooming out.
             */
minwidth:150,/**
             *  @property {number} [pageborderwidth=1] - Specifies the pixel border width around each page in a document.
             *  */
pageborderwidth:1,/**
             * @property {number} [pagebuffersize] - The number of pages to keep in memory while scrolling. Negative values will automatically calculate the optimal number based on available screen space. Values lower than can be displayed will be ignored, and higher values will cause a degradation in performance. */
pagebuffersize:-1,/**
             *  @property {number} [pagespacing=4] - Specifies the distance (in pixels) between pages displayed.
             */
pagespacing:4,/**
             * @property {Atalasoft.Utils.PageSelection} [pageselectlocation] - Specifies the location to determine the current page number.
             *
             * Current page number is displayed on the document toolbar, and also current page is used in some operation in default UI, like page rotation is applied to the current page or in {@link Atalasoft.Controls.WebDocumentViewer.next | next}, {@link Atalasoft.Controls.WebDocumentViewer.previous | previous}, {@link Atalasoft.Controls.WebDocumentViewer.showPage | showPage} methods.
             */
pageselectlocation:zn.extend({},Atalasoft.Utils.PageSelection.TopLeft),/**
             * @property {Object} parent - jQuery object that the control will contain the control. */
parent:null,/** @property {number} [rows] - Number of rows to show when displaying tabular pages, -1 is automatic.
             * @deprecated tabular horizontal layout is not consistent with horizontal scrolling and will be removed. Use tabular layout with vertical scrolling and columns configuration. The value of this property will be ignored.
             * @ignore
             */
rows:-1,/**
             * @property {string} [savefileformat] - Specifies the default file format for the document that will be used when saving multipage document to the server.
             *
             * The following formats are supported: pdf, tiff (or tif), jpeg (or jpg), png, bmp, tga, pcx, psd, tla, wbmp, emf, wmf.
             *
             * If set, this value is used when document save is performed using default UI or when {@link Atalasoft.Controls.WebDocumentViewer.save | save} is called without save format parameter passed.
             *
             * If not specified, document is saved in it's own format. Note that it's not possible to save multipage documents(for example when document pages was added using JavaScript API) to the single page image format by default. Server behavior on save could be highly customized.
             */
savefileformat:"",/**
             * @property {string} [savepath] - Specifies the path that the document, annotation data, and form data will be saved to on the server.
             */
savepath:"",/**
             *  @property {string} [scripturl] - Url location to the server where all JavaScript files are put when not in the default location.
             */
scripturl:"",/**
             *  @property {string} serverurl - Url location to the server handler.
             */
serverurl:"",/**
             *  @property {boolean} [showbuttontext=true] - If the toolbar is displayed, this can be used to hide or show the button text for the toolbar items.
             */
showbuttontext:!0,/**
             * @property {boolean} [showpageborder=true] - Specifies whether a black border will be added around each page in the displayed document. */
showpageborder:!0,/**
             * @property {boolean} [showpagenumber=true] - Specifies whether a page number will be added to the bottom left of each page. */
showpagenumber:!0,/**
             * @property {boolean} [showpagenumbertooltip=true] - Specifies whether a tooltip containing estimated current page number should be shown during fast scrolling. */
showpagenumbertooltip:!0,/**
             * @property {boolean} [showerrors=false] - Specifies whether error messages are allowed to show up in the console instead of being caught. */
showerrors:!1,/**
             * @property {boolean} [showstatus=false] - Specifies whether status messages will be output to an area in the toolbar. */
showstatus:!1,/**
             * @property {boolean} [showscrollbars=true] - Specifies whether scrollbars will be shown. */
showscrollbars:!0,/**
             * @property {boolean} [showselecttools=false] - Specifies whether rubberband selection tools are shown in the toolbar. */
showselecttools:!1,/**
             * @property {boolean} [tabular=false] - Specifies whether pages should be displayed in a tabular(grid) fashion, rather than one row or column. */
tabular:!1,/**
             * @property {Object} [toolbarparent] - Specifies the jQuery object where the toolbar will be created. */
toolbarparent:null,/** @property {number} [zoom] - Sets the initial zoom level of the document. Ignored when fitting set to anything besides Fitting.None. */
zoom:1,/**
             * @ignore
             */
showthumbcaption:!1,/**
             * @ignore
             */
thumbcaptionformat:"",/**
             * @property {boolean} [persistrotation=true] - Specifies whether to persist page rotation on document save.
             *
             * I.e of set to `false`, rotation applied in 'view-only' mode and ignored when document is saved.
             */
persistrotation:!0,/**
             * @property {boolean} [showrotatetools=true] - Specifies whether page and annotations rotation UI handles and buttons are shown.
             *
             * Annotation rotation could be explicitly enabled or disabled for individual types of annotations using {@link WebDocumentViewerConfig.annotations|annotations.defaults}. */
showrotatetools:!0,/** @property {MouseToolConfig|Atalasoft.Utils.MouseToolType} [mousetool] - Specifies the mouse tools settings. Could be set to Atalasoft.Utils.MouseToolType if no advanced settings specified.
             *
             * Mouse tool identifies how user mouse or touch actions ar interpreted. For example, this could be Pan tool to scroll pages, Zoom-Area tool to select image region and zoom to it, Text tool to select and copy document text, etc.
             *
             * Active mouse tool could be changed using {@link Atalasoft.Controls.WebDocumentViewer.setMouseTool | setMouseTool} method.
             */
mousetool:{/**
                 * @typedef {Object} MouseToolConfig
                 *
                 * @property {Atalasoft.Utils.MouseToolType} [type = Pan] - default mouse tool. This tool is enabled each time new document is loaded.
                 * @property {TextMouseToolConfig} [text] - Text selection behavior configuration.
                 */
type:Ln.Pan,/** Specifies the default text selection settings*/
text:{/**
                     * @typedef {Object} TextMouseToolConfig
                     *
                     * @property [Atalasoft.Utils.ScrollArea] [scrolltriggerarea = Normal] - Specifies the percentage of type of scroll trigger area. When selecting text in that area around page bounds scrolling will be triggered for corresponding direction.
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
scrolltriggerarea:Atalasoft.Utils.ScrollArea.Normal,/**
                     *  Specifies scroll delta in pixels that are applied when selecting text within viewport scroll trigger area
                     *  @private
                     */
innerscrolldelta:10,/**
                     * Specifies scroll delta in pixels that are applied when selecting text and mouse goes out of viewport.
                     * @private
                     */
outerscrolldelta:20,/** Specifies  */
throttlingtreshold:40,selection:{color:"blue",alpha:.25},highlight:{color:"yellow",alpha:.7},hookcopy:!1,allowsearch:!0,wrapsearch:!0,searchdelay:400}}};if(e){var jn=e.mousetool;e.mousetool&&"object"!==_typeof(e.mousetool)&&(e.mousetool=zn.extend({},Nn.mousetool,{type:jn})),!e.tabular||e.direction!==Atalasoft.Utils.ScrollDirection.Horizontal&&1!==e.columns||(e.tabular=!1),zn.extend(!0,Nn,e),e.mousetool=jn}_e(),s(),/**
         * @member {WebDocumentViewerConfig} config - Current control configuration.
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @instance
         * @alias config
         */
Dn.config=Nn,/** WARNING: Changing values from these references can cause instability.*/
Dn.events=qn,/** WARNING: Changing values from these references can cause instability.*/
Dn.domclasses=Rn,/** WARNING: Changing values from these references can cause instability.*/
Dn.domattributes=On;var Qn={height:0,isEmpty:function(){return 0===this.width&&0===this.height},width:0,zero:function(){this.width=0,this.height=0},zoom:1},Zn=null;/**
        * [Internal] Gets debug info object
        * @returns debug info object if available, otherwise null
        */
return Dn.__getDebugInfo=on,/**
        * [Internal] Gets the viewer linkage for controls that inherit this one
        * @param viewer object of type WebDocumentViewer
        * @param linker internal object of type __LVlinker
        * @returns linker object if possible, otherwise undefined
        */
Dn.__getViewerLink=nn,Dn.dispose=u,Dn.empty=an,Dn.fit=bo,Dn.getZoom=ln,Dn.isReady=sn,Dn.scrollTo=cn,Dn.scrollBy=un,Dn.next=dn,Dn.previous=hn,Dn.zoom=ho,Dn.zoomIn=gn,Dn.zoomOut=fn,Dn.openUrl=Dn.OpenUrl=pn,Dn.save=mn,Dn.getCurrentPageIndex=_n,Dn.bind=wn,Dn.unbind=xn,Dn.trigger=bn,Dn.getDocumentInfo=yn,Dn.setMouseTool=vn,Dn.isPageLoaded=Xe,Dn.reloadPage=$e,Dn.showPage=Se,Dn.showPageNumber=Be,Atalasoft.Annotations.AnnotationController(),Atalasoft.Document.ManipulationController(),Atalasoft.Forms.FormController(),Atalasoft.Text.TextController(),Dn.annotations=Atalasoft.Annotations.AnnotationController.__exposedApi,Dn.document=Atalasoft.Document.ManipulationController.__exposedApi,Dn.forms=Atalasoft.Forms.FormController.__exposedApi,Dn.text=Atalasoft.Text.TextController.__exposedApi,i(),Dn}}();
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/**
 * WebDocuemntViewer Document operations API.
 * @class
 * @name DocumentController
 * @inner
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */
Atalasoft.Document.ManipulationController=function(e,n,t){function i(){G.bind({pagerecycled:z,pageshown:I,documentinfochanged:o}),H._state.initialized?a():G.bind({initialized:a})}function a(){X=!0}function o(e){Y.info=e.info,Y.mapping=null,Y.changes.length=0,Y.count=0,Y.inserted=0,Y.length=0}function r(){E=null,G=null,H=null}function g(){"Atalasoft.Controls.WebDocumentViewer"===G.typeOf&&q.extend(G,Q)}function p(e,n){G.trigger({type:"throwerror",name:e,msg:n})}function u(){null==Y.mapping&&s()}function l(e,n){u(),Y.mapping[e]&&(Y.mapping[e].viewestate[n]||(Y.mapping[e].viewestate[n]={size:null,fitmultiplier:null}))}function c(e){if(e<Y.info.count){for(var n=0;n<Y.mapping.length;n++)if(Y.mapping[n].index===e)return n}else for(var t=0;t<Y.mapping.length;t++)if(Y.mapping[t].pageref&&Y.mapping[t].pageref.mapsto===e)return t;return-1}function s(){var e=Math.max(Y.info.count,0);Y.mapping=new Array(e);for(var n=0;e>n;++n)Y.mapping[n]=f(n)}function f(e){return{index:e,viewestate:{},pageref:null,angle:0,text:null}}function m(e,n){l(e,K),Y.mapping[e]&&Y.mapping[e].viewestate&&(Y.mapping[e].viewestate[K].cacheIndex=n)}function d(e,n){n=n||K,u();var t=null,i=null;if(e>=0&&e<Y.mapping.length&&Y.mapping[e]){var a=Y.mapping[e];if(-1===a)return null;null!=a.pageref?(t=a.pageref,e=t.index,i=t.uri):e=a.index;var o=a.viewestate[n]&&a.viewestate[n].cacheIndex>=0?a.viewestate[n].cacheIndex:-1;return{index:e,ref:t,cacheIndex:o,uri:i}}return null}function h(e){return u(),e>=0&&e<Y.mapping.length?null!=Y.mapping[e].pageref?Y.mapping[e].pageref:Y.mapping[e].index:null}function v(e,n){return n=n||K,u(),l(e,n),e>=0&&e<Y.mapping.length&&Y.mapping[e].viewestate[n].fitmultiplier?Y.mapping[e].viewestate[n].fitmultiplier:1}function x(e,n,t){t=t||K,u(),l(e,t),e>=0&&e<Y.mapping.length&&(Y.mapping[e].viewestate[t].fitmultiplier=n)}function y(e){return u(),e>=0&&e<Y.mapping.length?Y.mapping[e].angle:0}function _(e,n){u(),e>=0&&e<Y.mapping.length&&(Y.mapping[e].angle=n)}function P(n,t,i){var a=t;n&&n!==e.config.documenturl&&(a.pageref={uri:n,index:t.index,mapsto:Y.info.count+Y.inserted}),Y.count++,Y.inserted++,Y.mapping.splice(i,0,a)}function w(e){return e>=Y.mapping.length?-1:(Y.count--,Y.mapping.splice(e,1)[0])}function b(e,n){P(null,w(e),n)}function I(){}function z(){}function D(n){var t=h(n);return t&&"object"===("undefined"==typeof t?"undefined":_typeof(t))?{uri:t.uri,index:t.index}:q.isNumeric(t)?{uri:e.config.documenturl,index:t}:t}function S(e,n,t,i){if(null===n||void 0===n)return p("Source page index cannot be "+n),void 0;"object"===("undefined"==typeof n?"undefined":_typeof(n))&&(e=n.uri,n=n.index);var a=f(n);t=J(t),P(e,a,t),H._controllers.annotations&&H._controllers.annotations.insertLayer(null,null,t),H._controllers.forms&&H._controllers.forms.insertForm(null,null,t),Y.changes.push({type:"insertpage",uri:e,src:a.index,dest:t}),"function"==typeof i&&i(),G.trigger({type:Z.inserted,srcuri:e,srcindex:n,destindex:t}),G.trigger(Z.changed)}function A(e,n){e=U(e),w(e),H._controllers.annotations&&H._controllers.annotations.removeLayer(e),H._controllers.forms&&H._controllers.forms.removeForm(e),Y.changes.push({type:"removepage",index:e}),"function"==typeof n&&n(),G.trigger({type:Z.removed,index:e}),G.trigger(Z.changed)}function M(e,n,t){e=U(e),n=J(n),b(e,n),H._controllers.annotations&&H._controllers.annotations.moveLayer(e,n),H._controllers.forms&&H._controllers.forms.moveForm(e,n),Y.changes.push({type:"movepage",src:e,dest:n}),"function"==typeof t&&t(),G.trigger({type:Z.moved,srcindex:e,destindex:n}),G.trigger(Z.changed)}function C(e,n,t){u(),e=U(e);var i=F(e,n,t);Y.changes.push({type:"rotatepage",index:e,angle:n}),G.trigger({type:Z.rotated,index:e,page:i,angle:n})}function F(e,n,t){if(0>e)return!1;if(e>=Y.mapping.length)return!1;n=(n-n%90)%360,_(e,n);for(var i=null,a=0;a<H._pages.length;++a){var o=H._pages[a];if(o._index===e){i=o;break}}var r=!!i&&!!i._img;return r?(H.startDomManipulation(),t="function"==typeof t?Atalasoft.Utils.__functionFromArray([H.endDomManipulation,t]):H.endDomManipulation,H.adjustVisiblePages(!0,t)):"function"==typeof t&&t(),i}function k(e,n){u(),e>=0&&e<Y.mapping.length&&(Y.mapping[e].text=n)}function O(e){return e>=0&&e<Y.mapping.length?Y.mapping[e].text:null}function j(e){if(e&&e.pages){u();for(var n=0;n<Y.mapping.length;++n)if(n<e.pages.length)if(Y.mapping[n].index===n)Y.mapping[n].text=e.pages[n];else for(var t=0;t<Y.mapping.length;++t)Y.mapping[t].index===n&&(Y.mapping[t].text=e.pages[n]);else Y.mapping[n].text=null}}function L(){var e={};return q.extend(!0,e,{data:Y,changes:Y.changes}),e}function R(e){e&&(e._changes?Y=e._changes:e._changes=Y)}function T(e){Y.clear(),"function"==typeof e&&e(),G.trigger(Z.changed)}function N(){return Y.info.count+Y.count}function V(e,n){if(n=n||K,u(),l(e,n),e>=0&&e<Y.mapping.length){var t=Y.mapping[e].viewestate[n].size;if(!t){var i=Y.info;if(i.pagesizes&&i.pagesizes[e])return i.pagesizes[e]}return t}}function B(e,n,t){t=t||K,u(),l(e,t),e>=0&&e<Y.mapping.length&&(Y.mapping[e].viewestate[t].size=n)}function J(e){return W(e,Y.mapping.length+1)}function U(e){return W(e,Y.mapping.length)}function W(e,n){if(0>e){var t=parseInt(e,10)+n;0>t&&p("Page index "+e+" is outside the document."),e=t}return e>=n&&p("Page index "+e+" is outside the document."),e}function $(){var e=[],n={type:"docinfo",pagescount:Y.info.count};e.push(n);for(var t in Y.changes)if(Y.changes.hasOwnProperty(t)&&(G.config.persistrotation||"rotatepage"!==Y.changes[t].type)){var i={};for(var a in Y.changes[t])Y.changes[t].hasOwnProperty(a)&&(i[a]=Y.changes[t][a]);e.push(i)}return JSON.stringify({changes:e})}var q=Atalasoft.$,E=this,G=e,H=n,K=t,Q={document:{events:{/**
                 * Triggers when a page is added to the document.
                 * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#pageinserted
                 * @param {Object} e - Event arguments.
                 * @param {string} e.srcuri - Source document identifier.
                 * @param {number} e.srcindex - Index of the inserted page in the source document.
                 * @param {number} e.index - Page insert index.
                 */
pageinserted:null,/** Triggers when a page is removed from the document.
                 * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#pageremoved
                 * @param {Object} e - Event arguments.
                 * @param {number} e.index - Index of the removed page.
                 */
pageremoved:null,/**
                 * Triggers when a page is moved within the same document.
                 * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#pagemoved
                 * @param {Object} e - Event arguments.
                 * @param {number} e.srcindex - Initial page index.
                 * @param {number} e.destindex - Destination page index.
                 */
pagemoved:null,/**
                 * Triggers when the document is changed.
                 * This event indicates document structure or internal state changes and causes visible pages repaint.
                 * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#documentchanged
                 */
documentchanged:null,/**
                 * Fired when document page has been rotated.
                 * @event Atalasoft.Controls.WebDocumentViewer~DocumentController#pagerotated
                 * @param {Object} e - Event arguments
                 * @param {number} e.index - Index of the rotated page.
                 * @param {number} e.angle - Clockwise page rotation angle.
                 */
pagerotated:null},/**
             * Inserts a page at the destination index from the given source uri and index.
             * @param {string} [documenturl] - The identifier of the document which contains the page. If empty, `src` numeric value is considered as referencing currently opened document.
             * @param {number|DocumentPageReference} src - zero based index of the page in the source document. Or page descriptor returned by the {@link Atalasoft.Controls.WebDocumentViewer~DocumentController#getPageReference|getPageReference}.
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
             * both having document opened. To copy firs page of one control into first position of another
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
insertPage:S,/**
             * Removes the page at the given index.
             * @param {number} index - Index of the page to remove.
             * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
             * @instance
             * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
             * @function
             */
removePage:A,/**
             * Moves a page from the source index to the destination index within single document.
             * @param {number} sourceIndex - Source index to get the page from.
             * @param {number} destinationIndex - Destination index to insert the page.
             * @param {NotificationCallback} [callback] - Function to execute when the operation has completed.
             *
             * @instance
             * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
             * @function
             */
movePage:M,/**
             * Rotates the specified angle page to the specified angle.
             *
             * Note, that `angle` represents final rotation value that will be applied to the original page.			 *
             * @param {number} index - Index of the page to rotate.
             * @param {number} angle - Clockwise rotation angle in degrees.
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
rotatePage:C,/**
             * Gets the rotation angle of the specified page.
             * @param {number} index - Index of the page to retrieve rotation angle.
             * @returns {number} Clockwise rotation angle of the specified page.
             *
             * @instance
             * @memberOf Atalasoft.Controls.WebDocumentViewer~DocumentController
             * @function
             */
getPageRotation:y,/**
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
getPageReference:D}};if(Atalasoft.Document.ManipulationController.__exposedApi=Q.document,!e)return null;var X=!1,Y={changes:[],mapping:null,count:0,inserted:0,info:{count:0,dpi:96,size:{width:0,height:0},vector:!1}},Z={inserted:"pageinserted",removed:"pageremoved",moved:"pagemoved",changed:"documentchanged",rotated:"pagerotated"};E.dispose=r,E.__exposedApi=Q.document,E.getPageDefinition=d,E.setPageCacheIndex=m,E.insertPage=S,E.removePage=A,E.movePage=M,E.rotatePage=C,E.getPageFitMultiplier=v,E.setPageFitMultiplier=x,E.getPageRotation=y,E.getPageSize=V,E.setPageSize=B,E.updatePageText=k,E.getPageText=O,E.initDocumentText=j,E.getPageIndexByImageIndex=c,E.__getDebugInfo=L,E.__linkChanges=R,E.clear=T,E.getPageCount=N,E.checkDestIndex=J,E.checkSrcIndex=U,E.checkIndex=W,E.stringifyChanges=$,g(),i()};
"use strict";Atalasoft.Document.MemoryTracker=function(e){function t(){f()}function n(){return U.bytesInUse}function r(e){k.colorDepth=e}function i(){return k.colorDepth}function o(e){k.highWaterMark=e}function s(){return k.highWaterMark}function a(e,t){k.pageSize.width=e,k.pageSize.height=t}function u(){return k.pageSize}function c(){return b.bind.apply(b,arguments),d}function h(){return b.unbind.apply(b,arguments),d}function g(){return b.trigger.apply(b,arguments),d}function p(e){return I.memoryEntries.push(e),U.bytesInUse+=l(e),U.bytesInUse>k.highWaterMark&&g("exceededhighwatermark"),U.bytesInUse}function y(){var e=I.memoryEntries.shift();return m(e),e}function f(){I.memoryEntries.length=0,U.bytesInUse=0}function l(e){var t=e.width()||k.pageSize.width,n=e.height()||k.pageSize.height,r=t*n*k.colorDepth/8*k.compression;return r}function m(e){return U.bytesInUse-=l(e),U.bytesInUse<0&&(U.bytesInUse=0),U.bytesInUse}var d={typeOf:"Atalasoft.Document.MemoryTracker"},b=$({}),I={memoryEntries:[]},U={bytesInUse:0},k={colorDepth:8,compression:1,highWaterMark:5e8,pageSize:{width:800,height:1132}};return e&&$.extend(k,e),d.dispose=t,d.getBytesInUse=n,d.setColorDepth=r,d.getColorDepth=i,d.setHighWatermark=o,d.getHighWatermark=s,d.setPageSize=a,d.getPageSize=u,d.bind=c,d.unbind=h,d.trigger=g,d.allocate=p,d.deallocateOldestEntry=y,d.clearEntries=f,d.deallocate=m,d};
"use strict";Atalasoft.Controls.ToolController=function(t,e,o,n,l){function r(){R=new Atalasoft.Controls.PointerTool,Q.bind(R.events.viewport),R.events.wdv&&V.bind(R.events.wdv),R.bind({clickzoom:h,fit:m,panstart:y,panmove:T,panend:E,zoomstart:D,zoommove:_,zoomend:z,selectstart:b,selectmove:w,selectend:A,zoomareastart:b,zoomareamove:w,zoomareaend:A,textselectstart:k,textselectmove:C,textselectend:L,textselectscroll:M,textselectcopy:S})}function a(){R&&R.events&&(R.events.wdv&&V&&V.unbind&&V.unbind(R.events.wdv),R.events.viewport&&Q&&Q.unbind&&Q.unbind(R.events.viewport)),le&&le.length>0&&(le.length=0),R&&R.dispose&&R.dispose(),J=null,G=null,$=null,Q=null,V=null,F=null}function s(){return q.bind.apply(q,arguments),F}function i(){return q.unbind.apply(q,arguments),F}function c(){return q.trigger.apply(q,arguments),F}function u(t,e){switch(Atalasoft.Utils.Browser.Explorer8&&(t=t!==Atalasoft.Utils.MouseToolType.Text?t:Atalasoft.Utils.MouseToolType.Arrow,e=e!==Atalasoft.Utils.MouseToolType.Text?e:Atalasoft.Utils.MouseToolType.Arrow),R.setTool(t,e),N(t,e),t){case G.None:p(J.Arrow);break;case G.Pan:p(J.Move);break;case G.ZoomIn:p(J.ZoomIn);break;case G.ZoomOut:p(J.ZoomOut);break;case G.Selection:j.raiseDrawLayer(),se=1,p(J.Crosshair);break;case G.ZoomArea:j.raiseDrawLayer(),se=1,p(J.Crosshair);break;case G.Text:j.raiseDrawLayer(),p(J.Text);break;default:p(J.Arrow)}}function v(){var t={};return Y.extend(!0,t,{cursor:oe,custom:ne,flick:le,resourcepath:ee,flickdelay:re,scroller:$,tool:R,toolcusors:J,tooltypes:G,viewport:Q,zoom:te}),t}function f(){return R.getTool()}function d(){return R.pauseTool()}function g(){return R.resumeTool()}function p(t){var e=""===ee?"?atalacsr=":ee;oe="%2"===t?oe=ne:t.replace("%1",e),Q.css({cursor:oe})}function x(t){ne=t}function m(t){V.fit(t.fit)}function h(t){t.zoomout?V.zoomOut():V.zoomIn()}function y(t){$.data("ox",$.scrollLeft()+t.x).data("oy",$.scrollTop()+t.y),$.stop()}function T(t){$.scrollLeft($.data("ox")-t.x),$.scrollTop($.data("oy")-t.y),ce.allowflick&&(le.push({x:t.x,y:t.y,time:(new Date).getTime()}),le.length>10&&le.shift())}function E(){if(ce.allowflick){if(le.length>1){var t=(new Date).getTime(),e=le.pop();if(t-e.time<100){var o=le.shift(),n=-o.time+e.time;$.animate({scrollLeft:$.scrollLeft()+Math.round((o.x-e.x)/n*250),scrollTop:$.scrollTop()+Math.round((o.y-e.y)/n*250)},re,"easeOutQuad")}}le.length=0}}function b(t){ae=j.getActivePage(),ae&&ae._rubberband.startSelect(t)}function w(t){ae=j.getActivePage(),ae&&ae._rubberband.moveSelect(t)}function A(t){ae=j.getActivePage(),ae&&(ae._rubberband.endSelect(t),"zoomareaend"===t.type&&(ae._rubberband.hide(),ae._rubberband.zoomToSelection())),se--,0===se&&(se=-1,j.resetDrawLayer(),u(W,H))}function D(){j.zoomStart(),te=V.getZoom()}function _(t){var e=te*t.scale;j.zoom(e)}function z(){j.zoomEnd()}function k(t){var e=X(t);if(e){if(e.cursor=oe,e.complete=!1,e.rectangular=t.toolEvent?t.toolEvent.altKey:!1,e.interval=t.toolEvent?t.toolEvent.shiftKey:!1,!e.rectangular&&!e.interval){var o=t.toolEvent&&t.toolEvent.originalEvent&&t.toolEvent.originalEvent.detail?t.toolEvent.originalEvent.detail%3:1;1!==o&&(e.word=2===o,e.line=0===o)}c({type:ue.textselectstart,eventData:e}),t.eventData.handled=e.handled,e.complete&&e.handled&&(L(t),t.eventData.complete=!0)}}function C(t){U();var e=X(t);if(e){e.cursor=oe,e.selecting=t.eventData.selecting,c({type:ue.textselectmove,eventData:e}),t.eventData.handled=e.handled;var o=e.handled&&e.cursor?e.cursor:J.Arrow;o!==oe&&p(o),t.eventData.handled&&t.eventData.selecting&&t.toolEvent&&t.toolEvent.target&&P(t)}}function L(t){U();var e=X(t);e&&(c({type:ue.textselectend,eventData:e}),t.eventData.handled=e.handled)}function M(t){U(),P(t)}function S(){ce.text.hookcopy&&c({type:ue.textselectcopy})}function U(){ie&&(clearTimeout(ie),ie=null)}function P(t){if(U(),t&&t.toolEvent){var e=B.offset(),o=null;if(void 0!==t.toolEvent.pageX&&void 0!==t.toolEvent.pageY?o=t.toolEvent:t.toolEvent.originalEvent&&t.toolEvent.originalEvent.touches&&1===t.toolEvent.originalEvent.touches.length&&void 0!==t.toolEvent.originalEvent.touches[0].pageX&&void 0!==t.toolEvent.originalEvent.touches[0].pageY&&(o=t.toolEvent.originalEvent.touches[0]),o){var n={x:o.pageX-e.left,y:o.pageY-e.top},l=B.width(),r=B.height(),a=0,s=0;n.y<r*ce.text.scrolltriggerarea&&$.scrollTop()>0?a=n.y>0?-ce.text.innerscrolldelta:-ce.text.outerscrolldelta:n.y>r*(1-ce.text.scrolltriggerarea)?a=n.y<r?ce.text.innerscrolldelta:ce.text.outerscrolldelta:n.x<l*ce.text.scrolltriggerarea&&$.scrollLeft()>0?s=n.x>0?-ce.text.innerscrolldelta:-ce.text.outerscrolldelta:n.x>l*(1-ce.text.scrolltriggerarea)&&(s=n.x<l?ce.text.innerscrolldelta:ce.text.outerscrolldelta),(a||s)&&ce.text.scrolltriggerarea!==Atalasoft.Utils.ScrollArea.None&&($.scrollTop($.scrollTop()+a),$.scrollLeft($.scrollLeft()+s),ie=setTimeout(P,K,t))}}}function Z(t){var e=Y(t).parents("."+V.domclasses.atala_page_div).first();if(e){var o=e.attr(V.domattributes.atala_page_index);return parseInt(o,10)}return null}function I(t,e){var o=Atalasoft.Utils.getMousePositionJquery(t.toolEvent?t.toolEvent:t);if(e&&e._paper){var n=Atalasoft.Utils.getSVGOffset(e._paper.canvas,e);o.x-=n.left,o.y-=n.top}return o}function O(t,e){var o=0;if(j._controllers.text){var n=j._controllers.document.getPageText(e);n&&isFinite(n.rotation)&&(o=n.rotation)}var l=j.getViewerTransform(e,o).invert();return{x:l.x(t.x,t.y),y:l.y(t.x,t.y)}}function N(t,e){var o=(W===G.Text||H===G.Text)&&t!==G.Text&&e!==G.Text;o&&j.resetDrawLayer(),t!==G.Selection&&t!==G.ZoomArea&&(W=t),e!==G.Selection&&e!==G.ZoomArea&&(H=e)}function X(t){var e={cursor:null,handled:!1};if(t&&t.toolEvent){var o=t.toolEvent.originalEvent.touches&&1===t.toolEvent.originalEvent.touches.length,n=o?document.elementFromPoint(t.toolEvent.originalEvent.touches[0].clientX,t.toolEvent.originalEvent.touches[0].clientY):t.toolEvent.target,l=Z(n);if(isFinite(l)&&l>=0){var r=I(t),a=O(r,l);Atalasoft.$.extend(e,{page:l,point:a,viewerPoint:r})}}return e}if(!o||!n)return Atalasoft.Event.Throw("Atalasoft.Controls.ToolController",0,null,"ToolController requires a WDV and two jQuery objects passed in as input, one for mouse events, the other for scrolling."),!1;var Y=Atalasoft.$,F=this,V=t,j=e,q=(e?e._internalEvents:null)||Y({}),K=50,Q=o,$=n,B=Q.parents("."+V.domclasses.atala_main_container).first(),G=Atalasoft.Utils.MouseToolType,J=Atalasoft.Utils.MouseToolCursor,W=G.Pan,H=G.None,R=null,te=1,ee="",oe=null,ne="",le=[],re=1e3,ae=null,se=-1,ie=null,ce={allowflick:!0,text:{scrolltriggerarea:Atalasoft.Utils.ScrollArea.Normal,innerscrolldelta:10,outerscrolldelta:20}};/**
     * Internal events for conditional input handling.
     */
F.events=ue;var ue={textselectstart:"textselectstart",textselectmove:"textselectmove",textselectend:"textselectend",textselectcopy:"textselectcopy"};l&&(Y.extend(ce,l),ce.text.scrolltriggerarea=Math.max(0,Math.min(ce.text.scrolltriggerarea,.3))),r(),F.dispose=a,F.bind=s,F.unbind=i,F.trigger=c,F.setTool=u,F.__getDebugInfo=v,F.getTool=f,F.pauseTool=d,F.resumeTool=g,F.setCursor=p,F.setCustomCursor=x};
"use strict";Atalasoft.Controls.PointerTool=function(){function t(){N(),ln.events={viewport:{click:Y,dblclick:D,mousedown:S,mousemove:C,mouseout:I,mouseover:O,mouseup:q,contextmenu:Z,mousewheel:B,keydown:M}},Atalasoft.Utils.Browser.Features.Touch&&un.extend(!0,ln.events,{viewport:{touchstart:V,touchmove:W,touchend:tn},wdv:{annotationdrawstart:c,annotationdrawend:s,annotationdragstart:c,annotationdragend:s}})}function n(){sn&&(sn=null),pn&&(pn=null),ln=null}function e(){return cn.bind.apply(cn,arguments),ln}function o(){return cn.unbind.apply(cn,arguments),ln}function i(){return cn.trigger.apply(cn,arguments),ln}function a(t,n){switch(vn=t,gn=n,N(),vn){case fn.None:J=Atalasoft.Utils.__rf;break;case fn.Pan:j=m;break;case fn.ZoomIn:J=L;break;case fn.ZoomOut:J=Q;break;case fn.Selection:j=A;break;case fn.ZoomArea:j=A;break;case fn.PassThrough:break;case fn.Text:j=y,F=x,H=E}switch(gn){case fn.None:break;case fn.Pan:G=m;break;case fn.ZoomIn:K=L;break;case fn.ZoomOut:K=Q;break;case fn.Selection:G=A;break;case fn.ZoomArea:G=A;break;case fn.PassThrough:}}function r(){return{primary:vn,secondary:gn}}function u(){sn.prpt++}function l(){sn.prpt>0&&sn.prpt--}function c(){sn&&(sn.drawing=!0)}function s(){sn&&(sn.drawing=!1)}function p(t){if(!sn.prpt){t.stopPropagation(),sn.pinching=!0;var n=t.originalEvent.touches[0],e=t.originalEvent.touches[1];pn={start:Atalasoft.Utils.CalcDistance(n.clientX,n.clientY,e.clientX,e.clientY)},i({type:"zoomstart",touches:t.originalEvent.touches})}}function f(t){if(!sn.prpt&&(t.stopPropagation(),!sn.zooming)){sn.zooming=!0;var n=t.originalEvent.touches[0],e=t.originalEvent.touches[1],o=Atalasoft.Utils.CalcDistance(n.clientX,n.clientY,e.clientX,e.clientY,pn.start),a=o.x/pn.start.x,r=o.y/pn.start.y;setTimeout(v,40),i({type:"zoommove",touches:t.originalEvent.touches,scale:a,scalex:a,scaley:r,dx:o.dx,dy:o.dy})}}function v(){sn.zooming=!1}function g(t){sn.prpt||(t.stopPropagation(),sn.pinching=!1,i({type:"zoomend",touches:t.originalEvent.touches}),1===t.originalEvent.touches.length&&V(t))}function m(t){return sn.prmt?void 0:(i({type:"panstart",x:t.clientX,y:t.clientY}),un(document).bind({mousemove:d,mouseup:h,ondrag:Atalasoft.Utils.__rf}),!1)}function d(t){return t=null==t?event:t,sn.prpt?void 0:0===t.which?(h(),void 0):(i({type:"panmove",x:t.clientX,y:t.clientY}),!1)}function h(){return sn.prpt?void 0:(un(document).unbind({mousemove:d,mouseup:h,ondrag:Atalasoft.Utils.__rf}),i({type:"panend"}),!1)}function y(t){if(sn.prmt)return!1;t.stopPropagation();var n={handled:!1,complete:!1};return i({type:"textselectstart",toolEvent:t,eventData:n}),n.complete||(sn.textselection=!0,un(document).bind({mouseup:_,mousemove:b,ondrag:Atalasoft.Utils.__rf})),!1}function x(t){if(sn.prmt)return!0;if(!(0!==t.which||t.originalEvent.touches&&t.originalEvent.touches.length))return _(),!0;var n={handled:!1,selecting:sn.textselection};return i({type:"textselectmove",toolEvent:t,eventData:n}),!1}function _(t){if(sn.prmt||!sn.textselection)return!1;sn.textselection=!1,un(document).unbind({mouseup:_,mousemove:b,ondrag:Atalasoft.Utils.__rf});var n={handled:!1};return i({type:"textselectend",toolEvent:t,eventData:n}),!1}function b(t){return sn.textselection?sn.prmt?!0:0!==t.which||t.originalEvent.touches&&t.originalEvent.touches.length?(i({type:"textselectscroll",toolEvent:t}),!1):(_(),!0):void 0}function E(t){67===t.keyCode&&t.ctrlKey&&i({type:"textselectcopy",toolEvent:t})}function A(t){return sn.prmt?!0:(i({type:vn===fn.Selection?"selectstart":"zoomareastart",x:t.clientX,y:t.clientY,toolEvent:t}),mn=un(t.target),mn._binds={mousemove:w,mouseup:U,ondrag:Atalasoft.Utils.__rf},mn.bind(mn._binds),!1)}function w(t){return t=null==t?event:t,sn.prpt?!0:0===t.which?(U(),void 0):(i({type:vn===fn.Selection?"selectmove":"zoomareamove",x:t.clientX,y:t.clientY,toolEvent:t}),!1)}function U(t){return sn.prpt?void 0:(mn.unbind(mn._binds),mn=null,i({type:vn===fn.Selection?"selectend":"zoomareaend",toolEvent:t}),!1)}function k(t){vn===fn.Pan&&(t.type="panstart",i(t))}function T(t){vn===fn.Pan&&(t.type="panmove",i(t))}function P(t){vn===fn.Pan&&(t.type="panend",i(t))}function z(t){t.type="contextmenu",i(t)}function X(t){t.type="fit",i(t)}function Y(t){return t=null==t?event:t,J(t)}function D(t){t=null==t?event:t}function Z(t){return t=null==t?event:t,K(t)}function S(t){return t=null==t?event:t,2===t.button?G(t):j(t),$(t)}function C(t){return t=null==t?event:t,F(t)}function M(t){return t=null==t?event:t,H(t)}function N(){J=vn===fn.PassThrough?Atalasoft.Utils.__ef:Atalasoft.Utils.__rf,K=gn===fn.PassThrough?Atalasoft.Utils.__ef:Atalasoft.Utils.__rf,$=Atalasoft.Utils.__ef,j=Atalasoft.Utils.__ef,G=Atalasoft.Utils.__ef,F=Atalasoft.Utils.__ef,H=Atalasoft.Utils.__ef}function I(){}function O(){}function q(){}function B(){}function F(){}function J(){}function K(){}function $(){}function j(){}function G(){}function H(){}function L(t){return sn.prpt?void 0:(R(t,!1),!1)}function Q(t){return sn.prpt?void 0:(R(t,!0),!1)}function R(t,n){return sn.prpt?void 0:(i({type:"clickzoom",x:t.clientX,y:t.clientY,zoomout:n}),!1)}function V(t){sn.prpt||sn.drawing||sn.pinching||un(t.target).is(".ui-menu,.ui-menu-item,.ui-corner-all")||(t.preventDefault(),sn.e=t,2===t.originalEvent.touches.length&&rn(t.originalEvent.touches)?(an(),sn.touching=!1,p(t)):vn===fn.Text?y(t):1===t.originalEvent.touches.length&&(sn.touching=!0,sn.point.x=t.originalEvent.touches[0].pageX,sn.point.y=t.originalEvent.touches[0].pageY,sn.hold=setTimeout(on,1500),k({x:sn.point.x,y:sn.point.y})))}function W(t){if(!sn.prpt&&!sn.drawing)if(t.preventDefault(),sn.e=t,sn.pinching)f(t);else if(sn.touching){var n=t.originalEvent.touches[0];sn.moves++,sn.touching=!0,T({x:n.pageX,y:n.pageY})}else sn.textselection&&x(t)}function tn(t){sn.prpt||sn.drawing||(t.preventDefault(),sn.pinching?g(t):sn.textselection?_(t):(sn.touching=!1,an(),sn.moves>0?(sn.moves=0,P({})):sn.tapped?en(t):(sn.tapped=!0,setTimeout(nn,300))))}function nn(){sn.tapped=!1}function en(t){X(t)}function on(){if(sn.moves>0&&null!=sn.e){var t=Atalasoft.Utils.getMousePositionJquery(sn.e);Math.abs(sn.point.x-t.x)<5&&Math.abs(sn.point.y-t.y)<5&&(sn.moves=0)}0===sn.moves&&sn.touching&&z({x:sn.point.x,y:sn.point.y})}function an(){null!=sn.hold&&(clearTimeout(sn.hold),sn.hold=null)}function rn(t){for(var n=null,e=0;e<t.length;e++){var o=t[e].target;if(o)if(null==n)n=o;else if(n!==o)return!1}return!0}var un=Atalasoft.$,ln=this,cn=un({}),sn={tapped:!1,touching:!1,pinching:!1,zooming:!1,textselection:!1,origin:{x:0,y:0},point:{x:0,y:0},delta:{x:0,y:0},drawing:!1,moves:0,prpt:0},pn=null,fn=Atalasoft.Utils.MouseToolType,vn=fn.None,gn=fn.None,mn=null;return t(),ln.dispose=n,ln.bind=e,ln.unbind=o,ln.trigger=i,ln.setTool=a,ln.getTool=r,ln.pauseTool=u,ln.resumeTool=l,ln};
"use strict";Atalasoft.Controls.RubberBandTool=function(t,e,o,i){function n(){e&&ne.extend(!0,ue,e),le.rect=l(),le.rectback=l(),le.mask.top=d(),le.mask.bottom=d(),le.mask.left=d(),le.mask.right=d(),ie=u("div"),ie.addClass(he.domclasses.atala_tool_selection_tooltip),ie.hide(),ie.css({fontFamily:"Arial, helvetica, san-serif",fontSize:"8pt",padding:"1px",backgroundColor:"#FFFFE1",border:"1px solid #000000",position:"absolute",zIndex:999}),ge.append(le.rectback),ge.append(le.rect),ge.append(ie),ge.append(le.mask.top),ge.append(le.mask.bottom),ge.append(le.mask.left),ge.append(le.mask.right),oe=new h,I(),ue.visible?E():D(),ge.bind({pageresize:r,pagezoom:a})}function s(){null!=oe&&(oe.dispose(),oe=null),re=null,le.rect=null,le.rectback=null,ie=null,le.mask.top=null,le.mask.bottom=null,le.mask.left=null,le.mask.right=null}function r(){te(),V()}function a(){te(),V()}function h(){function t(){for(var t=0;9>t;t++)l[t].dispose(),l[t]=null;u=null,l=null,d=null,c=null}function e(t,e,o,i){g=o,m=i,l[0].setPos(t,e),l[1].setPos(t-4,e-4),l[3].setPos(t+o-4,e-4),l[6].setPos(t-4,e+i-4),l[8].setPos(t+o-4,e+i-4),l[0].setSize(o,i),ue.showgrips?(l[2].setPos(t+Math.round(o/2)-4,e-4),l[4].setPos(t-4,e+Math.round(i/2)-4),l[5].setPos(t+o-4,e+Math.round(i/2)-4),l[7].setPos(t+Math.round(o/2)-4,e+i-4)):(l[2].setPos(t+4,e-4),l[4].setPos(t-4,e+4),l[5].setPos(t+o-4,e+4),l[7].setPos(t+4,e+i-4),l[2].setSize(o-8,8),l[4].setSize(8,i-8),l[5].setSize(8,i-8),l[7].setSize(o-8,8)),r()}function o(){for(var t=0;9>t;t++)l[t].resetColors()}function i(){for(var t=0;9>t;t++)l[t].resetGripSize(),l[t].resetColors()}function n(){for(var t=0;9>t;t++)l[t].hide()}function s(){for(var t=0;9>t;t++)c[t]===!0?l[t].show():l[t].hide()}function r(){for(var t=0;9>t;t++)c[t]=!0;c[0]=!0,8>g&&8>m&&(c[1]=!1),(12>g||12>m)&&(c[3]=!1,c[6]=!1),(16>g||8>m)&&(c[2]=!1,c[7]=!1),(16>m||8>g)&&(c[4]=!1,c[5]=!1),s()}function a(){x()===!0?(l[0].grip.onmousedown=W,l[0].grip.style.cursor="move"):(l[0].grip.onmousedown=Atalasoft.Utils.__rf,l[0].grip.style.cursor="default");for(var t=1;9>t;t++)v()===!0?(l[t].bind({mousedown:l[t].onResize}),l[t].grip.style.cursor=u[t]+"-resize"):(l[t].unbind({mousedown:l[t].onResize}),l[t].grip.style.cursor="default")}function h(t){function e(){x=null,c=null,g=null,w=null}function o(){return m.bind.apply(m,arguments),m}function i(){return m.unbind.apply(m,arguments),m}function n(t,e){g.left=t+"px",g.top=e+"px"}function s(t,e){z()===!0&&"move"!==w&&(t-=2,e-=2),0>=t&&(t=1),0>=e&&(e=1),g.width=t+"px",g.height=e+"px"}function r(){y&&(g.visibility="hidden",y=!1)}function a(){y||(g.visibility="visible",y=!0)}function h(){"move"!==w&&(ue.showgrips===!0?b()===!0?(g.backgroundColor="#"+p(),g.border="1px solid #"+f()):(g.backgroundColor="#"+f(),g.border="1px solid #"+f()):(g.backgroundColor="",g.border=""))}function l(){ue.showgrips===!0?(g.width="6px",g.height="6px"):(g.width="8px",g.height="8px")}function d(t){return H(t,w)}var c,g,m,x=this,w=u[t],y=!1;c=document.createElement("div"),g=c.style,m=ne(c),m.addClass(he.domclasses.atala_tool_selection_grip),h(),l(),x.grip=c,x.dispose=e,x.setPos=n,x.setSize=s,x.hide=r,x.show=a,x.resetColors=h,x.resetGripSize=l,x.onResize=d,x.bind=o,x.unbind=i,g.display="block",g.position="absolute",g.visibility="hidden",g.zIndex=se,c.onclick=Atalasoft.Utils.__rf,c.onselectstart=Atalasoft.Utils.__rf,c.onselect=Atalasoft.Utils.__rf,c.oncontextmenu=Atalasoft.Utils.__rf}for(var u=new Array("move","nw","n","ne","w","e","sw","s","se"),l=[],d=!1,c=[],g=0,m=0,w=0;9>w;w++)l[w]=new h(w),ge.append(l[w].grip);this.dispose=t,this.setRectangle=e,this.resetColors=o,this.resetGrips=i,this.hide=n,this.show=s,this.showGrips=r,this.resetEvents=a,a()}function u(t,e,o,i){var n=ne("<"+t+"></"+t+">");return e&&e.append&&n.appendTo(e),o&&n.attr("id",o),i&&n.html(i),n}function l(){var t=u("div");return t.addClass(he.domclasses.atala_tool_selection_band),t.css({position:"absolute",zIndex:se}),t}function d(){var t=u("div");return t.addClass(he.domclasses.atala_tool_selection_mask),t.hide(),t.css({left:"0px",top:"0px",width:"1px",height:"1px",position:"absolute",background:"#000",opacity:"0.6",zIndex:"0"}),t}function c(){return ue.animated}function g(){return ue.aspectratio}function p(){return ue.backcolor}function f(){return ue.forecolor}function m(){return ue.height}function x(){return ue.movable}function b(){return ue.multicolor}function w(){return{x:ue.x,y:ue.y}}function y(){return{x:ue.x,y:ue.y,width:ue.width,height:ue.height}}function v(){return ue.resizable}function z(){return ue.showgrips}function k(){return ue.showmask}function M(){return ue.showtooltip}function _(){return{width:ue.width,height:ue.height}}function P(){return ue.visible}function S(){return ue.width}function A(){return ae.bind.apply(ae,arguments),re}function C(){return ae.unbind.apply(ae,arguments),re}function U(){return ae.trigger.apply(ae,arguments),re}function R(){D(),ue.x=0,ue.y=0,ue.width=0,ue.height=0}function F(){le.mask.left.hide(),le.mask.right.hide(),le.mask.top.hide(),le.mask.bottom.hide()}function G(t,e,o,i){return ue.showmask?(e>0?(le.mask.top.css({left:de.pageoffset.x,top:de.pageoffset.y,width:X(),height:e}),le.mask.top.show()):le.mask.top.hide(),e+i<Q()?(le.mask.bottom.css({left:de.pageoffset.x,top:de.pageoffset.y+e+i,width:X(),height:Q()-(e+i)}),le.mask.bottom.show()):le.mask.bottom.hide(),t>0?(le.mask.left.css({left:de.pageoffset.x,top:de.pageoffset.y+e,width:t,height:i}),le.mask.left.show()):le.mask.left.hide(),t+o<X()?(le.mask.right.css({left:de.pageoffset.x+t+o,top:de.pageoffset.y+e,width:X()-(t+o),height:i}),le.mask.right.show()):le.mask.right.hide(),void 0):(F(),void 0)}function T(){ie.css({left:(ue.x+ue.width)*de.zoom+8+"px",top:(ue.y+ue.height)*de.zoom+4+"px"}),ie.text(Math.round(ue.width/de.zoom)+"x"+Math.round(ue.height/de.zoom)),ie.is(":hidden")&&ie.show()}function E(){ue.visible=!0,le.rectback.show(),le.rect.show(),c()===!0&&b()===!0&&K()}function D(){ue.visible=!1,F(),oe.hide(),le.rectback.hide(),le.rect.hide()}function I(){var t=ue.multicolor?"dashed":"solid",e="1px solid #"+ue.backcolor,o="1px "+t+" #"+ue.forecolor;le.rectback.css("border",e),le.rect.css("border",o),oe.resetColors()}function B(){V()}function V(){var t=ue.x,e=ue.y,o=de.pagesize.width,i=de.pagesize.height;(t>=o||t+ue.width>o)&&(t=o-ue.width,0>t&&(t=0)),(e>=i||e+ue.height>i)&&(e=i-ue.height,0>e&&(e=0)),t!==ue.x&&(ue.x=t),e!==ue.y&&(ue.y=e);var n=Math.round(ue.x*de.zoom),s=Math.round(ue.y*de.zoom),r=Math.round(ue.width*de.zoom),a=Math.round(ue.height*de.zoom);Z(n,s),q(r,a),oe.setRectangle(n,s,r,a),ue.visible?(E(),G(n,s,r,a)):D()}function Z(t,e){le.rectback.css({left:t+"px",top:e+"px"}),le.rect.css({left:t+"px",top:e+"px"})}function q(t,e){0===t&&(t=1),le.rectback.css({width:t+"px",height:e+"px"}),le.rect.css({width:t+"px",height:e+"px"})}function J(t){t.stopPropagation(),t.preventDefault(),te();var e=N(t);return E(),de.origin.x=e.x,de.origin.y=e.y,ue.x=Math.round(e.x/de.zoom),ue.y=Math.round(e.y/de.zoom),ue.width=1,ue.height=1,de.changing=!0,de.vert=0,de.horiz=0,V(),ue.showtooltip===!0&&T(),!1}function L(t,e){t.stopPropagation(),t.preventDefault();var o=e?e:N(t),i=Math.round(de.origin.x/de.zoom),n=Math.round(de.origin.y/de.zoom),s=Math.abs((o.x-de.origin.x)/de.zoom),r=Math.abs((o.y-de.origin.y)/de.zoom);if(ue.aspectratio>0){var a=Math.abs((o.y-de.origin.y)/(o.x-de.origin.x));a>1/ue.aspectratio&&0===de.horiz||1===de.vert?s=Math.round(r*ue.aspectratio):r=Math.round(s/ue.aspectratio)}return o.x<de.origin.x?(i-=s,i-de.pageoffset.x<0&&(s=de.origin.x-de.pageoffset.x,ue.aspectratio>0&&(r=Math.round(s/ue.aspectratio)),i=de.origin.x-s)):i+s>de.pagesize.width+de.pageoffset.x&&(s=de.pagesize.width-i+de.pageoffset.x,ue.aspectratio>0&&(r=Math.round(s/ue.aspectratio))),o.y<de.origin.y?(n-=r,n-de.pageoffset.y<0&&(r=de.origin.y-de.pageoffset.y,ue.aspectratio>0&&(s=Math.round(r*ue.aspectratio)),n=de.origin.y-r,o.x<de.origin.x&&(i=de.origin.x-s))):n+r>de.pagesize.height+de.pageoffset.y&&(r=de.pagesize.height-n+de.pageoffset.y,ue.aspectratio>0&&(s=Math.round(r*ue.aspectratio)),o.x<de.origin.x&&(i=de.origin.x-s)),(0===de.vert||ue.aspectratio>0)&&(ue.x=i-de.pageoffset.x,ue.width=s),(0===de.horiz||ue.aspectratio>0)&&(ue.y=n-de.pageoffset.y,ue.height=r),V(),ue.showtooltip===!0&&T(),!1}function O(t){return L(t,Atalasoft.Utils.getMousePositionJquery(t,null,!0))}function H(t,e){t=t||event,Y(t),de.vert=0,de.horiz=0,de.changing=!0;var o={x:0,y:0};switch(e){case"nw":o.x=ue.x+ue.width,o.y=ue.y+ue.height;break;case"n":o.x=ue.x,o.y=ue.y+ue.height,de.vert=1;break;case"ne":o.x=ue.x,o.y=ue.y+ue.height;break;case"w":o.x=ue.x+ue.width,o.y=ue.y+ue.height,de.horiz=1;break;case"e":o.x=ue.x,o.y=ue.y+ue.height,de.horiz=1;break;case"sw":o.x=ue.x+ue.width,o.y=ue.y;break;case"s":o.x=ue.x,o.y=ue.y,de.vert=1;break;case"se":o.x=ue.x,o.y=ue.y}de.origin.x=Math.round(o.x*de.zoom)+de.pageoffset.x,de.origin.y=Math.round(o.y*de.zoom)+de.pageoffset.y,ce.raiseDrawLayer();var i={mousemove:O,mouseup:j};return null!==de.boundevents?ne.extend(de.boundevents,i):de.boundevents=i,ge.bind(i),!1}function W(t){t=t||event,Y(t);var e=Atalasoft.Utils.getMousePosition(t,null,ge[0]);de.origin.x=e.x-Math.round(ue.x*de.zoom),de.origin.y=e.y-Math.round(ue.y*de.zoom),de.changing=!0;var o={mousemove:$,mouseup:j,ondrag:Atalasoft.Utils.__rf};return null!==de.boundevents?ne.extend(de.boundevents,o):de.boundevents=o,ge.bind(o),!1}function $(t){t=t||event,Y(t);var e=Atalasoft.Utils.getMousePosition(t,null,ge[0]),o={x:0,y:0};return o.x=Math.round((e.x-de.origin.x)/de.zoom),o.y=Math.round((e.y-de.origin.y)/de.zoom),o.x>de.pagesize.width-ue.width&&(o.x=de.pagesize.width-ue.width),o.x<0&&(o.x=0),o.y>de.pagesize.height-ue.height&&(o.y=de.pagesize.height-ue.height),o.y<0&&(o.y=0),ue.x=o.x,ue.y=o.y,V(),!1}function j(t){return t=t||event,Y(t),de.changing=!1,ue.showtooltip===!0&&ie.hide(),de.changing&&(de.changing=!1,U("changed")),null!==de.boundevents&&(ge.unbind(de.boundevents),de.boundevents=null,ce.resetDrawLayer()),!1}function K(){ue.animated===!0&&0===de.colorswap?(le.rect.css("border","1px dashed #"+p()),le.rectback.css("border","1px solid #"+f()),de.colorswap=1):(le.rect.css("border","1px dashed #"+f()),le.rectback.css("border","1px solid #"+p()),de.colorswap=0),ue.animated!==!0||le.rect.is(":hidden")||de.animating||(de.animating=setTimeout(function(){de.animating=!1,K()},250))}function N(t){var e=Atalasoft.Utils.getMousePositionJquery(t.toolEvent?t.toolEvent:t);if(ge._paper){var o=Atalasoft.Utils.getSVGOffset(ge._paper.canvas,ge);e.x-=o.left,e.y-=o.top}return e}function Q(){return Math.round(de.pagesize.height*de.zoom)}function X(){return Math.round(de.pagesize.width*de.zoom)}function Y(t){"undefined"!=typeof t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function te(){var t=ge._img.getSize();de.zoom=ge._img.getFitZoom(),de.pagesize.width=t.width,de.pagesize.height=t.height}function ee(){var t=ce.getMaxZoom();if(he.getZoom()<t){var e,o=ce.getViewportSize(),i=ge._img.getFitMultiplier(),n=1,s=0,r=0;e=o.width/ue.width===o.height/ue.height?Math.min(o.width/(ue.width*i),o.height/(ue.height*i),t):o.width/ue.width<o.height/ue.height?Math.min(o.width/(ue.width*i),t):Math.min(o.height/(ue.height*i),t),n=i*e,s=Math.round(ue.x*n),r=Math.round(ue.y*n),r-=Math.max(0,Math.round((o.height-ue.height*n)/2)),s-=Math.max(0,Math.round((o.width-ue.width*n)/2));var a=ce.getPageOffsets(ge._index,null,null,e);he.zoom(e,function(){he.scrollTo(a.width+s,a.height+r)})}}var oe,ie,ne=Atalasoft.$,se=3,re=this,ae=ne({}),he=t,ue={animated:!1,aspectratio:0,backcolor:"fff",forecolor:"000",movable:!0,multicolor:!0,resizable:!0,showgrips:!1,showmask:!1,showtooltip:!1,visible:!1,x:0,y:0,width:0,height:0},le={/** Main RubberBand dom object */
rect:null,/** Dom object underneath Main RubberBand */
rectback:null,/** Mask objects */
mask:{top:null,bottom:null,left:null,right:null}},de={animating:!1,boundevents:null,changing:!1,colorswap:0,origin:{x:0,y:0},pagesize:{width:0,height:0},pageoffset:{x:0,y:0},vert:!1,horiz:!1,zoom:1},ce=i,ge=o;return re.dispose=s,re.getAnimated=c,re.getAspectRatio=g,re.getBackColor=p,re.getForeColor=f,re.getHeight=m,re.getMovable=x,re.getMultiColor=b,re.getPosition=w,re.getRectangle=y,re.getResizable=v,re.getShowGrips=z,re.getShowMask=k,re.getShowTooltip=M,re.getSize=_,re.getVisible=P,re.getWidth=S,re.bind=A,re.hide=D,re.reset=R,re.show=E,re.synchronize=B,re.trigger=U,re.unbind=C,re.zoomToSelection=ee,re.startSelect=J,re.moveSelect=L,re.endSelect=j,n(),re};
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/**
 * @private
 */
Atalasoft.Utils.getMousePosition=function(t,e,a){return e||(e={x:0,y:0}),Atalasoft.Utils.Browser.Explorer?(null==t&&(t=event),"CSS1Compat"===document.compatMode?(e.x=t.x+document.documentElement.scrollLeft,e.y=t.y+document.documentElement.scrollTop):(e.x=t.x+document.body.scrollLeft,e.y=t.y+document.body.scrollTop)):(e.x=t.pageX,e.y=t.pageY),a&&(e.x-=a.offsetLeft,e.y-=a.offsetTop),e},/**
 * @private
 */
Atalasoft.Utils.getMousePositionJquery=function(t,e,a){e||(e={x:0,y:0});var o=Atalasoft.Utils.Browser.Explorer&&Atalasoft.Utils.Browser.Version<=9;if(!t.offsetX&&!t.offsetY||o)if(Atalasoft.Utils.Browser.Explorer&&!o)e.x=t.originalEvent.x,e.y=t.originalEvent.y;else{var r=null,i=t.originalEvent.touches&&1===t.originalEvent.touches.length,s=i?document.elementFromPoint(t.originalEvent.touches[0].clientX,t.originalEvent.touches[0].clientY):t.target;s=Atalasoft.$(s);var n=Atalasoft.Utils.Browser.Features.Touch?t.originalEvent.touches[0]:t.originalEvent;n.pageX||n.pageY||(n.pageX=t.pageX,n.pageY=t.pageY),t.target.raphael?r=s.parents("div:eq(0)").offset():(t.target.raphaelParent||s.parents("svg").length>0)&&(r=s.parents("svg").parents("div:eq(0)").offset()),r||(r=s.offset()),e.x=n.pageX-r.left,e.y=n.pageY-r.top}else if(Atalasoft.Utils.Browser.Firefox){var l;l=t.target.raphaelParent?Atalasoft.$(t.target).parents("svg").offset():Atalasoft.$(t.target.offsetParent||t.target.parentNode).offset(),e.x=t.pageX-l.left,e.y=t.pageY-l.top}else if(t.originalEvent.currentTarget===t.originalEvent.target||a)Atalasoft.Utils.Browser.Explorer&&Atalasoft.Utils.Browser.Version<10?(e.x=t.originalEvent.x,e.y=t.originalEvent.y):(e.x=t.offsetX,e.y=t.offsetY);else if(t.originalEvent.currentTarget.offsetLeft||t.originalEvent.currentTarget.offsetTop||!t.originalEvent.currentTarget.ownerSVGElement)e.x=t.originalEvent.currentTarget.offsetLeft+t.offsetX,e.y=t.originalEvent.currentTarget.offsetTop+t.offsetY;else{var f=Atalasoft.Utils.Browser.Explorer?t.originalEvent.currentTarget.ownerSVGElement.getBBox():t.originalEvent.currentTarget.getBBox();e.x=Math.round(f.x),e.y=Math.round(f.y)}return e},/**
* Gets the normalized offsetLeft and offsetTop from an SVG element
* with respect to its parent jQuery object
* @private
* @param objSVG: object, svg object from the dom
* @param parent: object, jQuery object representing the parent DOM node
*/
Atalasoft.Utils.getSVGOffset=function(t,e){var a={left:0,top:0};if("offsetLeft"in t)a.left=t.offsetLeft,a.top=t.offsetTop;else{var o=Atalasoft.$(t).offset(),r=e.offset();a.left=o.left-r.left,a.top=o.top-r.top}return a},/**
 * @private
 */
Atalasoft.Utils.getJSPath=function(t){var e=Atalasoft.$('script[src*="'+t+'"]');return e.length>0?e.attr("src").replace(t,""):""},/**
 * @private
 */
Atalasoft.Utils.CalcDistance=function(t,e,a,o,r){var i=Math.max(t,a),s=Math.min(t,a),n=Math.max(e,o),l=Math.min(e,o);return{x:i-s,y:n-l,dx:r?r.left-s:0,dy:r?r.top-l:0,left:s,right:i,top:l,bottom:n}},/**
 * Creates a rectangle object.
 * @private
 */
Atalasoft.Utils.makeRect=function(t,e,a,o){return{x:t,y:e,width:a,height:o}},/**
 * Calculates rectangle bounds for the clockwise page rotation to the specified angle.
 * @private
 * @param rect
 * @param page
 * @param angle positive number, must be exactly divisible by 90.
 */
Atalasoft.Utils.rotateRect=function(t,e,a){if(0===a)return t;a=(a-a%90)%360;var o=t.x,r=t.y;switch(a){case 90:o=e.height-t.y-t.height,r=t.x;break;case 180:o=e.width-t.x-t.width,r=e.height-t.y-t.height;break;case 270:o=t.y,r=e.width-t.x-t.width}return Atalasoft.Utils.makeRect(o,r,90===a||270===a?t.height:t.width,90===a||270===a?t.width:t.height)},/**
 * Calculates new point coordinates for the clockwise page rotation to the specified angle.
 * @private
 * @param point
 * @param page
 * @param angle positive number, must be exactly divisible by 90.
 */
Atalasoft.Utils.rotatePoint=function(t,e,a){return Atalasoft.Utils.rotateRect({x:t.x,y:t.y,width:0,height:0},e,a)},/**
 * @private
 */
Atalasoft.Utils.__atalaNull=function(){this.typeOf=null},/**
 * @private
 */
Atalasoft.Utils.__rf=function(){return!1},/**
 * @private
 */
Atalasoft.Utils.__ef=function(){},/**
 * @private
 */
Atalasoft.Utils.__sp=function(t){t.stopPropagation()},/**
 * Creates a function that wraps multiple functions into one
 * @private
 * @param arr: array of functions
 * @param arguments to pass to called functions
 */
Atalasoft.Utils.__functionFromArray=function(t){return function(){for(;t.length;)t.shift().apply(this,arguments)}},/**
 * @private
 */
Atalasoft.Utils.__supportsVML=function(){var t;if("undefined"==typeof t){var e=Atalasoft.$("<div/>").appendTo("body"),a=Atalasoft.$('<v:shape id="vml_flag1" adj="1" />').appendTo(e);a.css("behavior","url(#default#VML)"),t=a[0]?"object"===_typeof(a[0].adj):!0,e.remove()}return t},/**
 * @private
 */
Atalasoft.Utils.__htmlTransformStyle=function(t){return{" transform":t,"-moz-transform":t,"-webkit-transform":t,"-o-transform":t,"-ms-transform":t}},/**
 * @private
 */
Atalasoft.Utils.__calcPathBounds=function(t,e){var a={x:0,y:0,width:0,height:0};if(!t||!t.length)return a;e=e||Raphael.matrix(),a.x=e.x(t[0].x,t[0].y),a.y=e.y(t[0].x,t[0].y);for(var o=0;o<t.length;o++){var r={x:e.x(t[o].x,t[o].y),y:e.y(t[o].x,t[o].y)};a.x=r.x<a.x?r.x:a.x,a.y=r.y<a.y?r.y:a.y,a.width=r.x>a.width?r.x:a.width,a.height=r.y>a.height?r.y:a.height}return a.width-=a.x,a.height-=a.y,a},/**
 * @private
 */
Atalasoft.Utils.__loadDependencies=function(t,e,a){function o(){var t="undefined"!=typeof $.easing,o="undefined"!=typeof $.ui,r=!e||"undefined"!=typeof Raphael;if(t&&o&&r)Atalasoft.Utils._scriptLoader&&Atalasoft.Utils._scriptLoader===n&&(delete Atalasoft.Utils._scriptsLoading,delete Atalasoft.Utils._scriptLoader),l("scriptsloaded");else{if(Atalasoft.Utils._scriptLoader&&Atalasoft.Utils._scriptsLoading)for(var i in Atalasoft.Utils._scriptsLoading)if(Atalasoft.Utils._scriptsLoading.hasOwnProperty(i)){var s=Atalasoft.Utils._scriptsLoading[i];s.indexOf("easing")>=0&&(t=!0),s.indexOf("ui")>=0&&(o=!0),!r&&s.indexOf("raphael")>=0&&(r=!0)}if(!t||!o||!r){var f=t?"":" jQuery.easing";f+=o?"":" jQuery.ui",f+=r?"":" Raphael",a("InitError","Unable to find dependencies:"+f)}}}function r(){0===i.length?o():$.getScript(p+i.shift(),r)}a=a||Atalasoft.Utils.__ef;var i=[],s="1.8.14",n=$({}),l=function(){n.trigger.apply(n,arguments)};if("undefined"==typeof $.easing&&i.push("jquery.easing.1.3.js"),"undefined"==typeof $.ui&&i.push("jquery-ui-"+s+".custom.min.js"),e&&"undefined"==typeof Raphael&&i.push("raphael-min.js"),i.length>0){if(Atalasoft.Utils._scriptsLoading&&Atalasoft.Utils._scriptLoader)for(Atalasoft.Utils._scriptLoader.bind({scriptsloaded:o});i.length>0;){var f=i.shift();-1===$.inArray(f,Atalasoft.Utils._scriptsLoading)&&Atalasoft.Utils._scriptsLoading.push(f)}else{var p=t||Atalasoft.Utils.getJSPath("jquery-"+$().jquery+".min.js");if(""===p)return a("InitError",'Unable to find dependencies, use config option "scripturl" to define root script url.'),void 0;Atalasoft.Utils._scriptsLoading=i.slice(0),Atalasoft.Utils._scriptLoader=n}return r(),Atalasoft.Utils._scriptLoader}return null},/**
 * @private
 */
Atalasoft.Utils.flattenVersionSting=function(t){for(var e=0,a=(""+t).replace("_",".").replace(/[^0-9.]/g,"").split("."),o=0;o<a.length;++o)e+=Number(a[o])/Math.pow(10,3*o);return e};
"use strict";/**
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
 */
Atalasoft.Annotations.AnnotationTypes={/**
     * Image annotation.
     */
image:"image",/**
     * Highlight annotation.
     */
highlight:"highlight",/**
     * Rectangle annotation.
     */
rectangle:"rectangle",/**
     * Filled rectangle annotation.
     */
fillrect:"fillrect",/**
     * Text annotation.
     */
text:"text",/**
     * Stamp annotation.
     */
stamp:"stamp",/**
     * Ellipse annotation.
     */
ellipse:"ellipse",/**
     * Single line annotation.
     */
line:"line",/**
     * Multiline annotation. Similar to `polygon` but represents not enclosed shape, first and last points are not joined.
     */
lines:"lines",/**
     * Freehand annotation.
     */
freehand:"freehand",/**
     * Polygon annotation. Similar to `lines` but represents enclosed shape.
     */
polygon:"polygon",/**
     * Custom annotation type. Behavior is defined by the application.
     */
custom:"custom"},/**
 * The current browser metadata.
 * @type {Atalasoft.Utils.BrowserMetadata}
 */
Atalasoft.Utils.Browser={Explorer:navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident")>=0,Firefox:navigator.userAgent.indexOf("Firefox")>=0||navigator.userAgent.indexOf("Minefield")>=0,Safari:navigator.userAgent.indexOf("Safari")>=0&&navigator.userAgent.indexOf("Chrome")<0,Opera:navigator.userAgent.indexOf("Opera")>=0,Chrome:navigator.userAgent.indexOf("Safari")>=0&&navigator.userAgent.indexOf("Chrome")>=0,/**
     * @private
     */
Features:{SVG:!(!window.SVGAngle&&!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")),Touch:!!("ontouchstart"in window),VML:Atalasoft.Utils.__supportsVML(),foreignObject:document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Extensibility","1.1"),Compatibility:"undefined"!=typeof document.documentMode&&7===document.documentMode,FlexBox:"flex"in document.documentElement.style||"WebkitFlex"in document.documentElement.style||"msFlex"in document.documentElement.style},/**
     * @private
     */
Layout:{Gecko:!!navigator.userAgent.match(/(Gecko)/i),Presto:!!navigator.userAgent.match(/(Presto)/i),Trident:!!navigator.userAgent.match(/(Trident)/i),Webkit:!!navigator.userAgent.match(/(WebKit)/i),Version:(Atalasoft.Utils.__blv=navigator.userAgent.match(/(?:Gecko|Presto|Trident|WebKit).[\d\.]*/))?Atalasoft.Utils.__blv[0].replace(/\D*/,""):null},Mobile:{iOS:!!navigator.userAgent.match(/(iPad|iPhone|iPod)/i),Android:!!navigator.userAgent.match(/(Android)/i),IEMobile:!!navigator.userAgent.match(/(IEMobile)/i),Any:function(){return this.iOS||this.Android||this.IEMobile}},Version:(Atalasoft.Utils.__bv=navigator.userAgent.match(/(?:MSIE|Firefox|Chrome|Safari|Opera| rv).[\d\.]*/))?Atalasoft.Utils.__bv[0].replace(/\D*/,""):null},Atalasoft.Utils.Browser.Explorer8=Atalasoft.Utils.Browser.Explorer&&8===parseInt(Atalasoft.Utils.Browser.Version,10),/**
 *  Specifies the behavior of the mouse from within the WebDocumentViewer.
 *  @enum {number}
 */
Atalasoft.Utils.MouseToolType={/** Specify no mouse behavior at all. */
None:0,/** Clicking and dragging the mouse will scroll the image. */
Pan:1,/** Clicking will zoom in. */
ZoomIn:2,/** Clicking will zoom out. */
ZoomOut:3,/** Shows a context menu for the clicked object (where applicable). */
ContextMenu:4,/** Allows mouse events to pass through the DOM without any handling. */
PassThrough:5,/** Mouse will be set to crosshairs and can be used to drag and modify a selection rectangle on the image. */
Selection:6,/** Zoom in on a specified area defined by dragging a rectangle onto the image. */
ZoomArea:7,/** Input actions are interpreted as text selection */
Text:8},/** Specifies the cursor used with the mouse tool.
 * @enum {number}
 */
Atalasoft.Utils.MouseToolCursor={/** Automatically determined by the browser. */
Auto:"",/** An arrow pointer. */
Arrow:"default",/** A crosshair usually used in drawing a box. */
Crosshair:"crosshair",/** A grabbing cursor. Usually changes to gabbed while the mouse button is down. */
Grab:Atalasoft.Utils.Browser.Firefox?"-moz-grab":"hand",/** A hand with a finger pointing. Usually what the browser uses for clicking hyperlinks. */
Hand:"pointer",/** A crosshair pointer with arrowheads on the ends indicating movement. */
Move:"move",/** A magnifying glass with a plus sign in it. */
ZoomIn:Atalasoft.Utils.Browser.Firefox?"-moz-zoom-in":'url("%1ZoomIn.cur"pointer), pointer',/** A magnifying glass with a minus sign in it. */
ZoomOut:Atalasoft.Utils.Browser.Firefox?"-moz-zoom-out":'url("%1ZoomOut.cur"), pointer',/** A selection editing cursor. */
Text:"text",/** A vertical text editing cursor. */
VerticalText:"vertical-text",/** A wait cursor. */
Wait:"wait",/** A custom CSS cursor string provided by the user. */
Custom:"%2"},/** Specifies the direction of the scrolling.
 * @enum {number}
 */
Atalasoft.Utils.ScrollDirection={/** Scrolls horizontally. */
Horizontal:"horizontal",/** Scrolls vertically. */
Vertical:"vertical"},/** Specifies the fitting options.
 * @enum {number}
 */
Atalasoft.Utils.Fitting={/** No fitting will be applied to the image */
None:0,/** Finds the best option between width or height based fitting. */
Best:1,/** Fits the image to the available width. */
Width:2,/** Fits the image to the available height. */
Height:3},/** Specifies the page selection method.
 *  @enum {number}
 */
Atalasoft.Utils.PageSelection={/** Selects the page under the top left corner of the viewer  */
TopLeft:{x:0,y:0},/** Selects the page under the middle left of the viewer  */
MiddleLeft:{x:0,y:.5},/** Selects the page under the bottom left corner of the viewer  */
BottomLeft:{x:0,y:1},/** Selects the page under the center location of viewer  */
Center:{x:.5,y:.5}},/** Specifies the size of the viewport area that triggers document scroll when text selection enters it.
 * @enum {number}
 */
Atalasoft.Utils.ScrollArea={/** Text selection scrolling is disabled */
None:0,/** Normal scroll area. Around 10% of the corresponding viewport dimension */
Normal:.1,/** Normal scroll area. Around 20% of the corresponding viewport dimension */
Large:.2},/**
 * Exposes the list of internal DOM elements classes that could be used to query and customize UI behavior.
 * @enum {string}
 * @readonly
 */
Atalasoft.Controls.WebDocumentViewer.domclasses={/** Page element class. Container for all page elements - image, annotations, forms, text, etc layers. */
atala_page_div:"atala_page_div",/** Page image container that is in initial image load state */
atala_page_loading:"atala_page_loading",/** Page image anchor container element class*/
atala_page_image_anchor:"atala_page_image_anchor",/** Page image element class*/
atala_page_image:"atala_page_image",/** Page index element class. see {@link WebDocumentViewerConfig.showpagenumber | showpagenumber} config option */
atala_page_number:"atala_page_number",/** Active page class */
atala_active_page:"atala_active_page",/** Active thumbnail class */
atala_active_thumb:"atala_active_thumb",/** Thumbnail caption class */
atala_thumb_caption:"atala_thumb_caption",/** Document toolbar element class */
atala_toolbar:"atala_toolbar",/** Annotations toolbar element class */
atala_annotation_toolbar:"atala_annotation_toolbar",/** Toolbar button element class */
atala_toolbar_button:"atala_toolbar_button",/** Class of the main outer object that holds the scrollbars */
atala_main_container:"atala_main_container",/** Class of the inner object that controls scrolling */
atala_scroller:"atala_scroller",/** Class of the inner object that defines the viewable area */
atala_viewport:"atala_viewport",/** Inner content container object class */
atala_content:"atala_content",/** Thumbnailer draggable area */
atala_thumb_draggable:"atala_thumb_draggable",/** Placeholder element that is inserted into Thumbnailer to highlight drop location */
atala_drag_placeholder:"atala_drag_placeholder",/** Placeholder inserted before page dom object that is used in virtual scrolling */
atala_dom_edge_first:"atala_dom_edge_first",/** Placeholder inserted after page dom object that is used in virtual scrolling */
atala_dom_edge_last:"atala_dom_edge_last",/** Inner horizontal scroll bar object class */
atala_scroll_horizontal:"atala_scroll_horizontal",/** Inner vertical scroll bar object */
atala_scroll_vertical:"atala_scroll_vertical",/** Toolbar span element containing the page number */
atala_page_label:"atala_page_label",/** Context or dropdown menu element. Could be multiple instances within same viewer DOM sub tree */
atala_context_menu:"atala_context_menu",/** Status div */
atala_statusbar:"atala_statusbar",/** "Save Changes" toolbar button */
atala_tool_button_save:"atala_tool_button_save",/** "Previous Page" toolbar button */
atala_tool_button_page_prev:"atala_tool_button_page_prev",/** "Next Page" toolbar button */
atala_tool_button_page_next:"atala_tool_button_page_next",/** "Zoom Out" toolbar button */
atala_tool_button_zoom_out:"atala_tool_button_zoom_out",/** "Zoom In" toolbar button */
atala_tool_button_zoom_in:"atala_tool_button_zoom_in",/** "Full Size" toolbar button */
atala_tool_button_fit_none:"atala_tool_button_fit_none",/** "Best Fit" toolbar button */
atala_tool_button_fit_best:"atala_tool_button_fit_best",/** "Fit To Width" toolbar button */
atala_tool_button_fit_width:"atala_tool_button_fit_width",/** "Zoom Area" toolbar button */
atala_tool_button_zoom_area:"atala_tool_button_zoom_area",/** "Rotate Left" tooltip button */
atala_tool_button_rotate_left:"atala_tool_button_rotate_left",/** "Rotate Right" tooltip button */
atala_tool_button_rotate_right:"atala_tool_button_rotate_right",/** "Text selection" toolbar button */
atala_tool_button_text_tool:"atala_tool_button_text_tool",/** "Pan" toolbar button */
atala_tool_button_pan_tool:"atala_tool_button_pan_tool",/** "Draw Ellipse" annotation toolbar button */
atala_tool_button_ellipse_anno:"atala_tool_button_ellipse_anno",/** "Draw Highlight" annotation toolbar button */
atala_tool_button_highlight_anno:"atala_tool_button_highlight_anno",/** "Draw Line" annotation toolbar button */
atala_tool_button_line_anno:"atala_tool_button_line_anno",/** "Draw Poly Lines" annotation toolbar button */
atala_tool_button_lines_anno:"atala_tool_button_lines_anno",/** "Draw Freehand" annotation toolbar button */
atala_tool_button_freehand_anno:"atala_tool_button_freehand_anno",/** "Draw Polygon" annotation toolbar button */
atala_tool_button_polygon_anno:"atala_tool_button_polygon_anno",/** "Draw Rectangle" annotation toolbar button */
atala_tool_button_rect_anno:"atala_tool_button_rect_anno",/** "Filled Rectangle" annotation toolbar button */
atala_tool_button_fillrect_anno:"atala_tool_button_fillrect_anno",/** "Draw Text" annotation toolbar button */
atala_tool_button_text_anno:"atala_tool_button_text_anno",/** "Add a Stamp" annotation toolbar button */
atala_tool_button_stamp_anno:"atala_tool_button_stamp_anno",/** "Add a Sticky Note" annotation toolbar button */
atala_tool_button_note_anno:"atala_tool_button_note_anno",/** "Add a Comment" annotation toolbar button */
atala_tool_button_commment_anno:"atala_tool_button_commment_anno",/** Selection Rubberband div object */
atala_tool_selection_band:"atala_tool_selection_band",/** Selection Rubberband grip div object */
atala_tool_selection_grip:"atala_tool_selection_grip",/** Selection Rubberband mask div object */
atala_tool_selection_mask:"atala_tool_selection_mask",/** Selection Rubberband tooltip div object */
atala_tool_selection_tooltip:"atala_tool_selection_tooltip",/** Text search containing div object */
atala_search_container:"atala_search_container",/** Text search input box */
atala_search_input:"atala_search_input",/** Text search next match button */
atala_search_next:"atala_search_next",/** Text search previous match button */
atala_search_prev:"atala_search_prev"},/**
 * Exposes list of well-known attributes that are used to provide additional information for DOM elements
 * @enum {string}
 */
Atalasoft.Controls.WebDocumentViewer.domattributes={/** Index of the page currently displayed within the element. applies to elements having `.atala_page_div` class */
atala_page_index:"atala_page_index"};
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/**
 * WebDocuemntViewer Annotations API.
 * @class
 * @inner
 * @name AnnotationController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */
Atalasoft.Annotations.AnnotationController=function(e,t,n){function a(e){Ht.push(e)}function o(){Ut.setAnnos(Gt.annos),Ut.setPages(Bt)}function r(){if(o(),"undefined"==typeof Raphael)return d("DependencyError","Raphael did not load properly."),void 0;for(parseFloat(Raphael.version)<Ct&&d("DependencyError","Raphael versions 2.1 and higher are supported, other versions may cause instability."),Atalasoft.Utils._raphaelLoader&&Atalasoft.Utils._raphaelLoader===Ot&&delete Atalasoft.Utils._raphaelLoader,Ot.trigger("raphaelloaded"),l(),Ot.trigger("raphaelextended");Ht.length;)Ht.shift().call();qt=Raphael.matrix(1,0,0,1,0,0),Ot.bind({scroll:c,pagerecycled:D,pageshown:_,zoomchanged:u,pagerotated:P}),Nt={Delete:U,Properties:W},zt._state.initialized?i():Ot.bind({initialized:i})}function i(){It=!0,Gt.readonly||(Lt=O(Nt),jt=new V,null!=Mt.annotations.defaults&&G(Mt.annotations.defaults),null!=Mt.annotations.stamps&&Q(Mt.annotations.stamps),null!=Mt.annotations.images&&J(Mt.annotations.images),null!=Mt.annotations.custom&&X(Mt.annotations.custom))}/**
    * [Internal] Disposes memory intensive objects
    * @returns undefined
    */
function s(){St=null,Ot=null,zt=null,Mt=null,Bt=null,Et=null,Lt=null,Nt=null,jt=null,Ht.length=0,Gt.annos.length=0,Gt.activepage=null,Gt.activeanno=null,Gt.zoom=null,Ut.dispose(),Ut=null}function l(){function e(e,t,n,a,r){function i(e){var t=s.matrix.split();if(e.hasOwnProperty("x")&&"undefined"!=typeof e.x&&e.hasOwnProperty("y")&&"undefined"!=typeof e.y){var n={x:e.x*t.scalex,y:e.y*t.scaley};if(0!==t.rotate){var a=Atalasoft.Utils.__calcPathBounds([{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x+e.width,y:e.y+e.height},{x:e.x,y:e.y+e.height}],s.matrix);n=a}l.style.left=Math.round(n.x)+"px",l.style.top=Math.round(n.y)+"px"}}var s=o(this,this,null,"div",t,n,a,r),l=s.node;return l.innerHTML=e?e:"",s.innerDom=l,l.style.position="absolute",s.__tsfm=s.transform,s.transform=function(){this.__tsfm.apply(this,arguments),this.repaint(),i(this.attrs)},s.backgroundColor=function(e){l.style.backgroundColor=e,this.repaint()},s.repaint=function(){l.style.filter='progid:DXImageTransform.Microsoft.Chroma(color="'+l.style.backgroundColor+'"); '+this.matrix.toFilter()},s.__attr=s.attr,s.attr=function(e){this.__attr.apply(this,arguments),e&&(i(e),e.hasOwnProperty("width")&&(l.style.width=e.width+"px"),e.hasOwnProperty("height")&&(l.style.height=e.height+"px"))},s.isHtml=!0,s}function t(e,t,n,o,r){return a.call(this,e,t,n,o,r,!0)}function n(e,t,n,o,r){return a.call(this,e,t,n,o,r)}function a(e,t,n,a,r,s){var l="http://www.w3.org/1999/xhtml",p="http://www.w3.org/2000/xmlns/",c="http://www.w3.org/2000/svg",d=i||s?"image":"foreignObject",u=o(this,this,c,d,t,n,a,r),f=null;return i||(f=document.createElementNS(l,"div"),f.setAttributeNS(p,"xmlns",p),f.innerHTML=e?e:"",u.node.appendChild(f),u.isHtml=!0),u.innerDom=f,u}function o(e,t,n,a,o,r,i,s,l){var p=null===n?document.createElement(a):document.createElementNS(n,a);t.canvas&&t.canvas.appendChild&&t.canvas.appendChild(p);var c=new e.constructor.el.constructor(p,e);c.attrs={x:o,y:r,width:i,height:s,r:l||0,rx:l||0,ry:l||0,fill:"none",stroke:"#000"},c.skew={},c.type=a,"g"===a&&(c.canvas=c.node);for(var d in c.attrs)c.attrs.hasOwnProperty(d)&&void 0!==c.attrs[d]&&p.setAttribute(d,c.attrs[d]+"");return c}function r(){var e={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},t={},n=function a(e,t){if(t){"string"==typeof e&&(e=a(e));for(var n in t)t.hasOwnProperty(n)&&("xlink:"===n.substring(0,6)?e.setAttributeNS("http://www.w3.org/1999/xlink",n.substring(6),String(t[n])):e.setAttribute(n,String(t[n])))}else e=Raphael._g.doc.createElementNS("http://www.w3.org/2000/svg",e),e.style&&(e.style.webkitTapHighlightColor="rgba(0,0,0,0)");return e};Raphael.fn.addArrow=function(a,o,r){if("path"===a.type){for(var i,s,l,p,c,d=String(o).toLowerCase().split("-"),u=a.paper,f=r?"end":"start",g=a.node,h=a.attrs,v=h["stroke-width"],y=d.length,m="classic",w=3,_=3,x=5;y--;)switch(d[y]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":m=d[y];break;case"wide":_=5;break;case"narrow":_=2;break;case"long":w=5;break;case"short":w=2}if("open"===m?(w+=2,_+=2,x+=2,l=1,p=r?4:1,c={fill:"none",stroke:h.stroke}):(p=l=w/2,c={fill:h.stroke,stroke:"none"}),a._.WDVarrows?r?(a._.WDVarrows.endPath&&t[a._.WDVarrows.endPath]--,a._.WDVarrows.endMarker&&t[a._.WDVarrows.endMarker]--):(a._.WDVarrows.startPath&&t[a._.WDVarrows.startPath]--,a._.WDVarrows.startMarker&&t[a._.WDVarrows.startMarker]--):a._.WDVarrows={},"none"!==m){var b=Math.random().toString(36).substring(7),A="dave-marker-"+m,D="dave-marker-"+f+m+w+_+b;Raphael._g.doc.getElementById(A)?t[A]++:(u.defs.appendChild(n(n("path"),{"stroke-linecap":"round",d:e[m],id:A})),t[A]=1);var k,P=Raphael._g.doc.getElementById(D);P?(t[D]++,k=P.getElementsByTagName("use")[0]):(P=n(n("marker"),{id:D,markerHeight:_,markerWidth:w,orient:"auto",refX:p,refY:_/2}),k=n(n("use"),{"xlink:href":"#"+A,transform:(r?"rotate(180 "+w/2+" "+_/2+") ":"")+"scale("+w/x+","+_/x+")","stroke-width":(1/((w/x+_/x)/2)).toFixed(4)}),P.appendChild(k),u.defs.appendChild(P),t[D]=1),n(k,c);var T=l*("diamond"!==m&&"oval"!==m);r?(i=a._.WDVarrows.startdx*v||0,s=Raphael.getTotalLength(h.path)-T*v):(i=T*v,s=Raphael.getTotalLength(h.path)-(a._.WDVarrows.enddx*v||0)),s=0>s?0:s,c={},c["marker-"+f]="url(#"+D+")",(s||i)&&(c.d=Raphael.getSubpath(h.path,i,s)),n(g,c),a._.WDVarrows[f+"Path"]=A,a._.WDVarrows[f+"Marker"]=D,a._.WDVarrows[f+"dx"]=T,a._.WDVarrows[f+"Type"]=m,a._.WDVarrows[f+"String"]=o}else r?(i=a._.WDVarrows.startdx*v||0,s=Raphael.getTotalLength(h.path)-i):(i=0,s=Raphael.getTotalLength(h.path)-(a._.WDVarrows.enddx*v||0)),a._.WDVarrows[f+"Path"]&&n(g,{d:Raphael.getSubpath(h.path,i,s)}),delete a._.WDVarrows[f+"Path"],delete a._.WDVarrows[f+"Marker"],delete a._.WDVarrows[f+"dx"],delete a._.WDVarrows[f+"Type"],delete a._.WDVarrows[f+"String"];for(c in t)if(t.hasOwnProperty(c)&&!t[c]){var V=Raphael._g.doc.getElementById(c);V&&V.parentNode.removeChild(V)}}}}var i=Raphael.svg&&!Atalasoft.Utils.Browser.Features.foreignObject;Raphael.vml?Raphael.fn.html=e:(Raphael.fn.html=n,r()),Raphael.fn.atalaImage=t}function p(){"Atalasoft.Controls.WebDocumentViewer"===Ot.typeOf&&Rt.extend(Ot,Ft)}function c(e){qt.translate(e.dx,e.dy)}function d(e,t){Ot.trigger({type:"throwerror",name:e,msg:t})}function u(e){Gt.zoom=e.zoom}function f(e){if(e instanceof jQuery){if("undefined"!=typeof Raphael){e._paper=Raphael(e[0]),e._paper.canvas.style.position="absolute",e._paper.canvas.style.zIndex="2",Mt.pageborderwidth>0&&(e._paper.canvas.style.left=Mt.pageborderwidth+"px",e._paper.canvas.style.top=Mt.pageborderwidth+"px"),Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<=10&&(e._paper.canvas.style.backgroundColor="rgba(255,255,255,0.01)"),e._paper._annos=e._paper.set(),e._paper._trash=e._paper.set(),e._paper._page=e,e._matrix=Raphael.matrix(1,0,0,1,0,0),e._matrix.translate(-e.offset().left,-e.offset().top),e._grips=new Atalasoft.Annotations.Grips(e,Gt);var t=function(){A(e),Ut.deselectPage(e),S()};e.bind("mousedown",t),Atalasoft.Utils.Browser.Features.Touch&&e.bind("touchstart",t),e.bind({pageresize:function(t){t.page=e,w(t)},pagezoom:function(t){t.page=e,k(t)}})}else a(function(){f(e)});return!0}return!1}function g(e){return e instanceof jQuery?("undefined"!=typeof Raphael&&(e._paper&&(e._paper._annos=null,e._paper._page=null,e._paper=null),e._matrix=null,e._grips=null),!0):!1}function h(e,t,n){if(e||"number"!=typeof t||(t=v(t)),t=t||[],null==n?n=Gt.annos.length:0>n&&(n=0),n>Gt.annos.length){var a=Gt.annos.length;Gt.annos[n]=t;for(var o=a;o<Gt.annos.length;++o)Gt.annos[o]||(Gt.annos[o]=[])}else Gt.annos.splice(n,0,t);return n}function v(e){return e<Gt.annos.length?Gt.annos.splice(e,1)[0]:null}function y(e,t){return h(null,v(e),t)}function m(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}function w(e){e.page._paper.setSize(e.width,e.height),e.page._paper.canvas.style.width=e.width,e.page._paper.canvas.style.height=e.height,T(e.page)}function _(e){x(e.index,e.page)}function x(e,t){if("undefined"!=typeof Raphael){if(e<Gt.annos.length&&(b(t),Gt.annos[e]&&Gt.annos[e].length))for(var n,o=0;o<Gt.annos[e].length;o++)n=Gt.annos[e][o],n._pageindex=e,n.repaint(t._paper),n.get("selected")&&Ut.select(n,e,!0)}else a(function(){x(e,t)})}function b(e){e._grips.clear(),e._paper._annos.remove(),e._paper._annos.clear(),e._paper.forEach(function(e){e&&e.remove&&!e.grip&&e.paper&&e.paper._trash&&e.paper._trash.push(e)}),e._paper._trash.remove(),e._paper._trash.clear(),ut()}function A(e){Gt.activepage=e}function D(e){e.page._paper&&(b(e.page),e.page.append(e.page._paper.canvas))}function k(e){isFinite(e.width)&&isFinite(e.height)&&e.width&&e.height&&(Gt.zoom=e.zoom,e.page._paper.setSize(e.width,e.height),e.page._paper.canvas.style.width=e.width,e.page._paper.canvas.style.height=e.height,e.page._paper.forEach(function(t){if(t&&t.transform&&!t.grip){"undefined"!=typeof t._linewidth&&t.attr("stroke-width",t._linewidth*Gt.zoom);var n=t.attr("clip-rect");if("object"===("undefined"==typeof n?"undefined":_typeof(n))&&"number"==typeof n.length){if(Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<9)for(var a=0;a<n.length;a++)n[a]=n[a]/e.prevzoom*e.zoom;t.attr("clip-rect",n)}}}),T(e.page))}function P(e){T(e.page)}function T(e){if(e&&e._index>=0&&Gt.annos[e._index]){for(var t=0;t<Gt.annos[e._index].length;t++)Gt.annos[e._index][t].repaint();e&&e._grips.repaint()}}function V(){function e(){g.appendTo(f),f.dialog({minWidth:320,dialogClass:"atala-ui",resizable:!1,autoOpen:!1,buttons:{Ok:n,Reset:r,Cancel:o}})}function t(e){h=e,g.empty(),v={};for(var t in y)if(y.hasOwnProperty(t)){var n={};n[t]=h.get(t),Rt.extend(!0,v,n)}i(h.get(),"",y),f.dialog("open")}function n(){f.dialog("close")}function a(){return f.dialog("isOpen")}function o(){r(),n()}function r(){h.set(v,!0),h.updateView(),h.repaint(),g.empty(),i(h.get(),"",y),d()}function i(e,t,n){function a(t){if(this.value&&"boolean"!=typeof this.value)if("number"==typeof e[this.title]){var n=parseFloat(this.value);isNaN(n)||"rotation"!==this.title||n===e[this.title]?"opacity"===this.title&&n>=0&&1>=n||"opacity"!==this.title&&this.value>=0?e[this.title]=n:this.value=e[this.title]:(h.set({rotation:n}),h.repaint())}else e[this.title]=this.value;else t&&"boolean"==typeof this.value?e[this.title]=t.target.id.indexOf("true")>=0:this.value=e[this.title];h.updateView(),h.repaint(),d()}for(var o in e)if(e.hasOwnProperty(o))if("object"===_typeof(e[o])){var r="text"!==o?c(o):"";n[o]&&("text"!==o||"text"===o&&"text"===h.get("type"))&&i(e[o],(t?t+" ":t)+r,n[o])}else if("type"===o)f.dialog("option","title",c(e[o].replace("fillrect","rectangle"))+" Annotation Properties");else if(n[o]){var l=Rt("<div/>"),u=s(o,e[o],a,n[o]);l.addClass("ui-helper-clearfix atala-ui-dialog-clearfix"),l.css({overflow:"hidden"}),u.appendTo(l),p(l,(t?t+" ":t)+c(o)+":"),l.appendTo(g)}}function s(e,t,n,a){var o="undefined"==typeof t?"undefined":_typeof(t),r=null;if(Rt.isArray(a))r=Rt("<select/>").attr({title:e}),Rt.each(a,function(e,t){var n=t,a=t,o=t.split(":");o.length>1&&(a=o[0],n=o[1]),r.append(Rt("<option/>",{value:n,text:a}))}),r.change(n),r.val(t);else if("string"===o||"number"===o)r=Rt("<input/>").attr({type:"text",title:e}),r.val(t),r.change(n),r.focus(function(){this.select(),this._focused=!0}),r.mouseup(function(e){this._focused&&(e.preventDefault(),this._focused=!1)});else if("boolean"===o){var i="bool"+e;r=Rt("<div/>").attr({title:e}),l(r,i+!0,i,"True",t),l(r,i+!1,i,"False",!t),r.buttonset(),r.change(n),r[0].value=t}else r=Rt("<div>"+t+"</div>");return r.css({"float":"right"}),r}function l(e,t,n,a,o){e.append(Rt("<input/>").attr({type:"radio",id:t,name:n,checked:o})),e.append(Rt("<label/>").attr({"for":t}).text(a))}function p(e,t){e.append(Rt("<span/>").text(t))}function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(){var e=h.getObject();e&&e.paper&&e.paper._page&&e.paper._page._grips.repaint()}var u=this,f=Rt("<div />"),g=Rt("<div />"),h=null,v=null,y={fill:{color:!0,opacity:!0},rotation:!0,outline:{color:!0,opacity:!0,width:!0,startcap:{style:["None:none","Arrow:open","Filled Arrow:block","Filled Ellipse:oval","Filled Diamond:diamond"],width:["medium","long","short"],height:["medium","wide","narrow"]},endcap:{style:["None:none","Arrow:open","Filled Arrow:block","Filled Ellipse:oval","Filled Diamond:diamond"],width:["medium","long","short"],height:["medium","wide","narrow"]}},text:{font:{bold:!0,italic:!0,color:!0,family:!0,size:!0}}};return u.show=t,u.hide=n,u.isVisible=a,u.cancel=o,u.reset=r,e(),u}function R(e){if(Lt){if(Gt.activeanno.get("readonly"))Lt.children(":contains(Properties)").unbind("click").children("a, div").css("color","#cdc9c9");else{var t=Lt.children(":contains(Properties)");void 0!==t.data("events")&&"click"in t.data("events")||t.bind("click",W),t.children("a").css("color","#000000")}0===Lt.closest().length&&Et.prepend(Lt);var n={x:e.x-6,y:e.y-6};Lt.css({left:n.x,top:n.y}),Lt.show(),Lt.visible=!0}}function C(e){Lt&&(Lt.visible&&S(),Lt.remove());var t=Rt.extend(!0,{},Nt);if(Ot.trigger("contextmenu",[Gt.activeanno.getClonedData(),t]),Rt.isEmptyObject(t))Lt=null;else{for(var n in t)t.hasOwnProperty(n)&&(t[n]=z(t[n]));Lt=O(t)}R(e)}function S(){Lt&&(Lt.hide(),Lt.visible=!1)}function O(e){var t=zt.createMenu(e);return t.css({position:"fixed","z-index":99999}),t.mouseleave(S),t.visible=!1,t}function z(e){return function(){return S(),e.call(this,Gt.activeanno.getClonedData())}}function U(){var e=Gt.activepage?Gt.activepage._index:0;if(Gt.annos[e]){var t=Rt.inArray(Gt.activeanno,Gt.annos[e]);-1!==t&&(Gt.activeanno=null,E(t,e))}S()}function W(){S(),jt.show(Gt.activeanno)}/**
    * Clears the annotations and related data from all pages
    */
function F(){if(Gt.annos.length>0){if(Gt.annos.length=0,Bt)for(var e=0;e<Bt.length;e++)Bt[e]._grips.clear(),Bt[e]._paper.forEach(m),Bt[e]._paper._trash.remove(),Bt[e]._paper._trash.clear(),Bt[e]._paper._annos.remove(),Bt[e]._paper._annos.clear();Ot.trigger({type:"annotationscleared"})}}/**
    * Creates an annotation on the desired page with the given annotation data.
    * @param aConfig: object, Key value pairs representing annotation data.
    * @param pgNum: number, The zero based index of the page the annotation should be created on.
    * @param callback: function, Function to be called when the operation has completed.
    * @returns object: Atalasoft.Annotations.Annotation.
    */
function M(e,t,n){var a={};e.multiview?a=e:(e&&e.type&&Qt[e.type]&&Rt.extend(!0,a,Qt[e.type]),Rt.extend(!0,a,e));var o=new Atalasoft.Annotations.Annotation(a,Gt);return o._pageindex=t,"undefined"==typeof Gt.annos[t]&&(Gt.annos[t]=[]),Gt.annos[t].push(o),zt.redrawPageFromIndex(t,!0),"function"==typeof n&&n(o),ht(o),o}function B(e,t,n){var a=M(e,t,n).getClonedData();return Ot.trigger({type:Zt.annocreate,anno:a,annotation:a,page:t}),a}function I(e,t){E(t,e)}/**
    * Deletes an annotation on the given z-index and zero based page index.
    * @param annIndex: number, Zero based z-index of the annotation.
    * @param pgNum: number, Zero based page index the annotation is located on.
    */
function E(e,t){var n=Gt.annos[t].splice(e,1)[0];Gt.activepage&&Gt.activepage._paper&&Gt.activepage._paper._annos.exclude(n.getObject()),Gt.activeanno===n&&(Gt.activeanno=null),n.dispose(),Gt.activepage&&Gt.activepage._grips&&Gt.activepage._grips.repaint(),Ot.trigger({type:"annotationdeleted",page:t,index:e})}function L(e){var t=[];if(0===Gt.annos.length||"undefined"==typeof Gt.annos[e])return t;for(var n=0;n<Gt.annos[e].length;n++)t[n]=Gt.annos[e][n].getClonedData();return t}function N(e,t){var n;if(isFinite(t)){if(t<Gt.annos.length)for(n=0;n<Gt.annos[t].length;++n)if(Gt.annos[t][n].isCloneSource(e))return Gt.annos[t][n]}else for(n=0;n<Gt.annos.length;++n){var a=N(e,n);if(a)return a}return null}function j(e,t,n,a){n=h(e,t,n),"function"==typeof a&&a(),Ot.trigger({type:Zt.layerinserted,srcurl:e,srcindex:t,index:n}),Ot.trigger(Zt.layerschanged)}function H(e,t){var n=v(e);"function"==typeof t&&t(),Ot.trigger({type:Zt.layerremoved,layer:n,index:e}),Ot.trigger(Zt.layerschanged)}function q(e,t,n){t=y(e,t),"function"==typeof n&&n(),Ot.trigger({type:Zt.layermoved,srcindex:e,destindex:t}),Ot.trigger(Zt.layerschanged)}function G(e){Mt.annotations.defaults=e;for(var t=0;t<e.length;t++)"string"==typeof e[t].type&&(Qt[e[t].type]=e[t]);return Ot}function Q(e){Mt.annotations.stamps=e;for(var t=0;t<e.length;t++)kt(e[t]);if(It){var n={type:"button",id:zt._id+"_toolbar_Button_Stamp",icon:"stamp",tooltip:"Draw Stamp",text:""},a=zt.createDropDownButton(n);n.onclick=zt.drawAnnotation,zt.createDropDownMenu(a,n,e)}return Ot}function J(e){Mt.annotations.images=e;for(var t=0;t<e.length;t++)Tt(e[t]);if(It){var n={type:"button",id:zt._id+"_toolbar_Button_Image",icon:"image",tooltip:"Draw Image",text:""},a=zt.createDropDownButton(n);n.onclick=zt.drawAnnotation,zt.createDropDownMenu(a,n,e)}return Ot}/**
    * Sets the default annotation properties for initially created custom annotations.  This accepts the same input as the main config.
    * @param cConfig: array, An array of JSON objects representing custom annotation types.
    * @returns object: Atalasoft.Controls.WebDocumentViewer
    */
function X(e){Mt.annotations.custom=e;for(var t=0;t<e.length;t++)Vt(e[t]);if(It){var n={type:"button",id:zt._id+"_toolbar_Button_Custom",icon:"image",tooltip:"Draw Custom",text:""},a=zt.createDropDownButton(n);n.onclick=zt.drawAnnotation,zt.createDropDownMenu(a,n,e)}return Ot}function Z(e){return $(e,!0)}function Y(e){return $(e,!1)}function $(e,t){if("text"===e.type&&e){var n=e.getPageIndex(),a=N(e,n);if(t){var o=e.visible;o&&(zt.isPageInView(n)?K(a,n):Ot.showPage(e.getPageIndex(),function(){K(a,n)}))}else a.trigger("hideeditor")}}function K(e,t){e&&(e.get("selectable")!==!1&&Ut.select(e,t,!1),e.trigger("showeditor"))}function et(){var e={};return Rt.extend(!0,e,{data:Gt,defaults:Qt,drawing:Jt,drawready:Xt,matrix:qt,menu:Lt,menuconfig:Nt,pages:Bt,props:jt,viewport:Et}),e}function tt(e){e&&(e._annos?Rt.isArray(e._annos)&&(Gt.annos=e._annos):e._annos=Gt.annos)}function nt(e){e&&(e instanceof jQuery||(e=Rt(e)),Et=e)}function at(e,t,n,a){if(Jt)return null;var o=Rt.extend(!0,{},e);return e&&e.type&&Qt[e.type]&&(o=Rt.extend(!0,o,Qt[e.type]),t&&(o=Rt.extend(!0,o,e))),o.rotation=0,Gt.activeanno&&null===Gt.activeanno.getObject()&&dt(),st(),Gt.activeanno=new Atalasoft.Annotations.Annotation(o,Gt),Gt.activeanno.bind({drawn:ct,cancelled:dt}),"function"==typeof n&&(rt=n),"function"==typeof a&&(it=a),Gt.activeanno}function ot(e,t,n){zt._controllers.mouseTool.setTool(Atalasoft.Utils.MouseToolType.None,Atalasoft.Utils.MouseToolType.None);var a=function(){zt._controllers.mouseTool.setTool(Atalasoft.Utils.MouseToolType.Pan,Atalasoft.Utils.MouseToolType.None),"function"==typeof t&&t()},o=function(){zt._controllers.mouseTool.setTool(Atalasoft.Utils.MouseToolType.Pan,Atalasoft.Utils.MouseToolType.None),"function"==typeof n&&n()};at(e,!0,a,o)}function rt(){}function it(){}function st(){if(!Xt){Et.bind("mousedown",pt),Atalasoft.Utils.Browser.Features.Touch&&Et.bind("touchstart",pt);for(var e=0;e<Bt.length;e++)Bt[e]._draw.toFront();Xt=!0}}function lt(){if(Xt){Et.unbind("mousedown",pt),Atalasoft.Utils.Browser.Features.Touch&&Et.unbind("touchstart",pt);for(var e=0;e<Bt.length;e++)Bt[e]._draw.reset();Xt=!1}}function pt(e){Jt=!0,Et.unbind("mousedown",pt),Atalasoft.Utils.Browser.Features.Touch&&Et.unbind("touchstart",pt);var t=Gt.activeanno.getClonedData();Ot.trigger({type:"annotationdrawstart",annotation:t,ann:t}),Gt.activeanno._pageindex=Gt.activepage._index,Gt.activeanno.startDraw(e,Gt.activepage._paper,{}),Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8&&Gt.activepage._draw.height(Gt.activepage.height())}function ct(){ft(),gt(Gt.activeanno),Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8&&Gt.activepage._draw.height("100%")}function dt(){Gt.activeanno.dispose(),Gt.activeanno=null,Jt&&ft(!0)}function ut(){Xt&&(Jt?dt():(Gt.activeanno&&(Gt.activeanno.dispose(),Gt.activeanno=null),lt()),it({annotation:null}),it=function(){})}function ft(e){Jt=!1,lt();var t=e?null:Gt.activeanno.getClonedData();Ot.trigger({type:"annotationdrawend",annotation:t,ann:t,cancelled:e?!0:!1})}function gt(e){var t=Gt.activepage,n=t?t._index:0;Gt.annos[n]?Gt.annos[n].push(e):Gt.annos[n]=[e],Gt.activeanno.unbind({drawn:ct,cancelled:dt}),ht(Gt.activeanno),Ut.select(Gt.activeanno,t,!1),rt({annotation:e}),rt=function(){};var a=e.getClonedData();Ot.trigger({type:Zt.annocreate,anno:a,annotation:a,page:n})}function ht(e){function t(t){var n=e.getClonedData();Ot.trigger({type:Zt[t.type],anno:n,annotation:n})}e.bind({dragstart:function(){var t=e.getClonedData();Ot.trigger({type:"annotationdragstart",ann:t,annotation:t})},dragend:function(){var t=e.getClonedData();Ot.trigger({type:"annotationdragend",annotation:t,ann:t})},interactstart:function(){Gt.activepage&&Gt.activepage._paper===e.getObject().paper||A(e.getObject().paper._page),Gt.activeanno=e},selected:vt,deselected:vt,reselected:vt,contextmenu:C,serverrenderurlrequested:yt,moved:t,rotated:t,annoresized:t,interactend:t,touchstart:t,touchmove:t,pinchmove:t,click:t,dblclick:t,rightclick:t,mousedown:t,mousedownleft:t,mousedownright:t,mousemove:t,mouseout:t,mouseup:t,mouseover:t,repaint:t})}function vt(e){var t=e.page||e.pageindex>=0?e.pageindex:Gt.activepage,n=Ut.resolvePage(t);n&&(t=n),"selected"===e.type||"reselected"===e.type?(Gt.activeanno=e.ann,Ut.select(e.ann,t,e.append),jt&&jt.isVisible()&&jt.show(e.ann)):(Ut.deselect(e.ann,t,e.append),jt&&jt.isVisible()&&jt.cancel()),n&&n._grips&&n._grips.repaint()}function yt(e){var t=e.complete,n=wt(e.data);"function"==typeof t&&t.call(n)}function mt(){var e=[];for(var t in Gt.annos)if(Gt.annos.hasOwnProperty(t)){e[t]={items:[]};var n=0,a=zt.getPageScale(t),o=Raphael.matrix();if(zt._config.persistrotation){n=zt.getPageRotation(t),o=zt.getViewerTransform(t);var r=1/a;o.scale(r,r,0,0),o.e*=r,o.f*=r}for(var i in Gt.annos[t])if(Gt.annos[t].hasOwnProperty(i)){var s=Rt.extend(!0,{},Gt.annos[t][i].get());if(s.rotation||n){var l=Gt.annos[t][i].getBox(),p=l.width/2,c=l.height/2,d=Raphael.matrix(),u=Gt.annos[t][i].getTransform();d.add(o.a,o.b,o.c,o.d,o.e,o.f),d.add(u.a,u.b,u.c,u.d,u.e,u.f);var f={x:d.x(l.x+p,l.y+c),y:d.y(l.x+p,l.y+c)},g=f.x-p-l.x,h=f.y-c-l.y;if(s.points)for(var v=0;v<s.points.length;v++)if("line"===s.type){var y=d.x(s.points[v].x,s.points[v].y);s.points[v].y=d.y(s.points[v].x,s.points[v].y),s.points[v].x=y}else s.points[v].x+=g,s.points[v].y+=h;else"custom"!==s.type&&s.points||(s.x+=g,s.y+=h);s.rotation="line"!==s.type?(s.rotation+n)%360:0}e[t].items[i]=s,_t(s)}}return JSON.stringify(e)}function wt(e){return _t(e),JSON.stringify(e)}function _t(e){for(var t in e)if("color"===t&&null!=e[t]){var n=Raphael.getRGB(e[t]);n.error&&(n.hex="#000000"),e[t]=n.hex}else"points"!==t&&"object"===_typeof(e[t])&&_t(e[t])}function xt(e,t,n,a,o){n=n||Ot.config.documenturl;var r={type:"annodata",serverurl:e,query:"?atalaanndata=",method:"GET",data:{atala_annurl:t,atala_docurl:n,atala_a_ofs:a,atala_a_len:o},cancel:!1,info:{layers:[],offset:a||0,length:o,error:void 0}};for(var i in r.data)r.data.hasOwnProperty(i)&&null===r.data[i]&&(r.data[i]=void 0);return r}function bt(e,t,n){function a(a){if(void 0!==e.info.docIndex&&(a.offset=e.info.docIndex),!a.layers&&a.error&&t)for(var o=a.offset;o<a.offset+e.info.length;o++)Gt.annos[o]=[];Dt(a),"function"==typeof n&&n.call()}"function"==typeof t&&(n=t,t=!1),t||F(),zt.makeHandlerRequest(e,a,a)}function At(e,t,n,a,o,r,i){var s=Array.prototype.slice.call(arguments);i=s.pop(),"function"!=typeof i&&s.push(i),e=s.shift(),t=s.shift(),n=s.shift(),a=s.shift(),o=s.shift(),r=s.shift();var l=xt(e,t,n,a,o);void 0!==r&&(l.info.docIndex=r),bt(l,a>=0&&o>=1,i)}function Dt(e){if(e)if("undefined"!=typeof Raphael){var t={type:"annotationsloaded"};if(e.layers)for(var n=0;n<e.layers.length;n++){e.offset=e.offset||0;var o=e.offset+n;Gt.annos[o]&&Gt.annos[o].length>0?Gt.annos[o].length=0:Gt.annos[o]=[];var r=e.layers[n];if(r&&(r._index=isFinite(r._index)&&r._index>=0?r._index:o,r.visible=void 0!==r.visible?r.visible:!0,r.items))for(var i=0;i<r.items.length;i++){r.items[i].visible=r.items[i].visible&&r.visible,Gt.annos[o][i]=new Atalasoft.Annotations.Annotation(r.items[i],Gt),Gt.annos[o][i]._pageindex=r._index;var s=Gt.annos[o][i].getClonedData();Ot.trigger({type:Zt.annoload,anno:s,annotation:s}),ht(Gt.annos[o][i])}}else e.error&&(t.error=e.error);t.offset=e.offset,t.length=e.layers?e.layers.length:0,Ot.trigger(t)}else a(function(){Dt(e)})}function kt(e){return e.type="stamp",e.text&&(Pt(e.text),e.text.readonly=!0),e}function Pt(e){return e&&e.font&&e.font.size&&(e.font.size=parseFloat(e.font.size)),e}function Tt(e){return e.type="image",e}function Vt(e){e.type="custom"}var Rt=Atalasoft.$,Ct=2.1,St=this,Ot=e,zt=t,Ut=new Atalasoft.Annotations.AnnotationSelector,Wt={/**
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
annotationclicked:null,/**
         * This event is triggered when annotation is created, whether through mouse/touch events or programmatically.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationcreated
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {number} page - event.Index of the page where annotation is created.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationcreated:null,/**
         * Triggers when the user uses the mouse to double-click on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdoubleclicked
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationdoubleclicked:null,/**
         *  Triggers when an annotation is loaded into the document. There are multiple ways how annotaions could be loaded, for example passing the {@link WebDocumentViewerConfig.annotationsurl| annotationsurl} in the constructor, or by calling {@link Atalasoft.Controls.WebDocumentViewer#openUrl | viewer.openUrl}. In this case event will be fired for each loaded annotation from all layers.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationloaded
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationloaded:null,/** Triggers when the user has depressed a mouse button on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmousedown
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationmousedown:null,/** Triggers when the user has depressed the left mouse button on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmousedownleft
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationmousedownleft:null,/** Triggers when the user has depressed the right mouse button on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmousedownright
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationmousedownright:null,/** Triggers when the user moves the mouse pointer over an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmousemove
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationmousemove:null,/** Triggers when the user has moved the mouse pointer out of the bounds of the annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmouseout
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationmouseout:null,/** Triggers when the user has moved the mouse pointer into the bounds of the annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmouseover
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationmouseover:null,/** Triggers when the user has released a mouse button on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmouseup
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationmouseup:null,/** Triggers when an annotation has been moved.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationmoved
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationmoved:null,/** Triggers when an annotation has been rotated.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationrotated
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationrotated:null,/** Triggers when a pinch gesture has been detected on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationpinchresize
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationpinchresize:null,/** Triggers when an annotation has been repainted.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationrepainted
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationrepainted:null,/** Triggers when an annotation has been resized.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationresized
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationresized:null,/** Triggers when the user right clicks on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationrightclicked
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationrightclicked:null,/** Triggers when a touch end event has been finished on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationtouchend
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationtouchend:null,/** Triggers when a touch move event is happening on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationtouchmove
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationtouchmove:null,/** Triggers when a touch event has started on an annotation.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationtouchstart
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.anno - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationtouchstart:null,/** Triggers when a layer has been inserted into the document.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#layerinserted
         * @param {Object} event - Event data object.
         * @param {number} event.index - Index of the inserted layer.
         */
layerinserted:null,/** Triggers when a layer has moved from one index to another within the document.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#layermoved
         * @param {Object} event - Event arguments.
         * @param {number} event.srcindex - Index from which layer was moved.
         * @param {number} event.destindex - Index of the moved layer.
         */
layermoved:null,/** Triggers when a layer has been removed from the document.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#layerremoved
         * @param {Object} event - Event arguments.
         * @param {number} event.index - Index from which layer was removed.
         * @param {AnnotationData[]} event.layer - The removed layer data.
         */
layerremoved:null,/** Triggers when a layer has been changed. Fired by any type of layers structure: {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#insertLayer|insertLayer},  {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#moveLayer|moveLayer} or {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#removeLayer|removeLayer}.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#layerschanged
         * @type {NotificationCallback}
         */
layerschanged:null,/** Triggers when all annotations have been deleted.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationscleared
         */
annotationscleared:null,/** Triggers when an annotation is deleted.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdeleted
         * @param {Object} event - Event arguments.
         * @param {number} event.page - Index of the page where annotation has been removed.
         * @param {number} event.index - Index at which annotation has been removed.
         */
annotationdeleted:null,/** Triggers when a user has started drawing an annotation with the mouse or a touch event.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdrawstart
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.ann - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationdrawstart:null,/** Triggers when a user has finished drawing an annotation with the mouse or a touch event.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdrawend
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {boolean} event.cancelled - Indicates whether annotation draw was cancelled.
         * @param {AnnotationData} event.ann - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationdrawend:null,/** Triggers when an annotation has started dragging.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdragstart
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.ann - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationdragstart:null,/** Triggers when an annotation has finished dragging.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#annotationdragend
         * @type {AnnotationCallback}
         * @param {Object} event - Event data object.
         * @param {AnnotationData} event.annotation - Annotation object related to the event.
         * @param {AnnotationData} event.ann - Deprecated. Please use `annotation` property. This property will be removed soon.
         */
annotationdragend:null,/**
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
contextmenu:null,/** Triggers when the Raphael dependency has finished loading.
         * @event Atalasoft.Controls.WebDocumentViewer~AnnotationController#raphaelloaded
         */
raphaelloaded:null},Ft={/** @lends Atalasoft.Controls.WebDocumentViewer~AnnotationController */
annotations:{events:Wt,/**
             * Gets an array of selected annotation data objects.
             * @returns {AnnotationData[]} - Annotation data objects for selected annotations only.
             * @instance
             * @function
             */
getSelected:Ut.getSelected,/**
             * Selects all annotations on every page.
             * @instance
             * @function
             */
selectAll:Ut.selectAll,/**
             * Deselects all annotations on every page.
             * @instance
             * @function
             */
deselectAll:Ut.deselectAll,/**
             * Selects all annotations on the given page.
             * @param {number} index - The index of the page the annotations should be selected on.
             * @instance
             * @function
             */
selectAllOnPage:Ut.selectPage,/**
             * Deselects all annotations on the given page.
             * @param {number} index - The index of the page the annotations should be deselected on.
             * @instance
             * @function
             */
deselectAllOnPage:Ut.deselectPage,/**
             * Cancels the drawing of an annotation and returns the viewer to the previous tool.
             * @instance
             * @function
             */
cancelDraw:ut,/**
             * Setups the viewport to create an annotation
             * @param {AnnotationData} aConfig - Configuration for the annotation to draw
             * @param {NotificationCallback} [callback] - function to call when the annotation has finished drawing.
             * @param {NotificationCallback} [cancelled] - function to call when the annotation draw was canceled.
             * @instance
             * @function
             */
drawAnnotation:ot,/**
             * Gets an array of annotion data objects located on the given zero based page index.
             * @param {number} index - The page index the annotations are located on.
             * @returns {AnnotationData[]} Annotation data objects on the given page.
             * @instance
             * @function
             */
getFromPage:L,/**
             * Creates an annotation on the desired page with the given annotation data.
             * @param {AnnotationData} annotationConfig - Key value pairs representing annotation data.
             * @param {number} index - The index of the page the annotation should be created on.
             * @returns {AnnotationData} - Annotation data.
             * @instance
             * @function
             */
createOnPage:B,/**
             * Deletes an annotation on the given page by it's index on the page.
             * @param {number} pageIndex - Page index the annotation is located on.
             * @param {number} annIndex - Index of the annotation on the page.
             * @instance
             * @function
             */
deleteFromPage:I,/**
             * Shows the editor dialog for text annotations. Ignores other types of annotations.
             * @param {AnnotationData} annotation - the annotation object to show editor for.
             *
             * Annotation object should be retrieved using corresponding API. If it's constructed by the application, annotation won't be matched.
             * @instance
             * @function
             */
showEditor:Z,/**
             * Hides the text annotation editor. Applies only to text annotations and ignores other types of annotations.
             * @param {AnnotationData} annotation - The annotation object to hide editor for.
             * @instance
             * @function
             */
hideEditor:Y,/**
             * Sets the default annotation properties for initially created annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.defaults}.
             * @param {AnnotationData[]} aConfig - Default configurations for different types of the annotations.
             * @returns {Atalasoft.Controls.WebDocumentViewer}
             * @instance
             * @function
             */
setDefaults:G,/**
             * Sets the default annotation properties for image annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.images}
             * @param {AnnotationData[]} aConfig - Default configurations image annotations.
             * @returns {Atalasoft.Controls.WebDocumentViewer}
             * @instance
             * @function
             */
setImages:J,/**
             * Sets the default annotation properties for stamp annotations. This accepts the same input as the {@link WebDocumentViewerConfig.annotations|config.annotations.stamps}.
             * @param {AnnotationData[]} aConfig - Default configurations stamp annotations.
             * @returns {Atalasoft.Controls.WebDocumentViewer}
             * @instance
             * @function
             */
setStamps:Q,/**
             * Inserts a layer of annotations at the source URL and index into the given page index. Single layer of annotations corresponds to single document page.
             * @param {string} sourceUrl - Reserved for future use.
             * @param {AnnotationData[]} layer - The annotation layer data.
             * @param {number} index - Index the layer is to be inserted into.
             * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
             * @instance
             * @function
             */
insertLayer:j,/**
             * Removes a layer(page annotation) of annotations. All other layers are shifted. This operation corresponds to removing page from the document.
             * @param {number} index - index of the layer to be removed.
             * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
             * @instance
             * @function
             */
removeLayer:H,/**
             * Moves a layer of annotations from one page index to another.
             * @param {number} sourceIndex - index of the layer to be moved.
             * @param {number} destIndex - Destination zero based page index.
             * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
             * @instance
             * @function
             */
moveLayer:q},/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#deselectAll|annotations.deselectAll} instead.
         */
deselectAll:Ut.deselectAll,/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#createOnPage|annotations.createOnPage} instead.
         */
createAnnotationOnPage:B,/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#getFromPage|annotations.getFromPage} instead.
         */
getAnnotationsFromPage:L,/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#deleteFromPage|annotations.deleteFromPage} instead.
         */
deleteAnnotationOnPageAtIndex:I,/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setDefaults|annotations.setDefaults} instead.
         */
setAnnotationDefaults:G,/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setImages|annotations.setImages} instead.
         */
setImages:J,/**
         * @instance
         * @memberOf Atalasoft.Controls.WebDocumentViewer
         * @function
         * @deprecated Please use {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#setStamps|annotations.setStamps} instead.
         */
setStamps:Q};if(Atalasoft.Annotations.AnnotationController.__exposedApi=Ft.annotations,!e)return null;var Mt=t._config,Bt=t._pages,It=!1,Et=null,Lt=null,Nt=null,jt=null,Ht=[],qt=null,Gt={annos:[],activepage:null,activeanno:null,readonly:n?!0:!1,zoom:Ot.getZoom(),getZoom:zt.getPageScale,getViewerTransform:zt.getViewerTransform,getPageRotation:zt.getPageRotation},Qt={},Jt=!1,Xt=!1,Zt={click:"annotationclicked",dblclick:"annotationdoubleclicked",touchstart:"annotationtouchstart",interactend:"annotationtouchend",touchmove:"annotationtouchmove",pinchmove:"annotationpinchresize",rightclick:"annotationrightclicked",mousedown:"annotationmousedown",mousedownleft:"annotationmousedownleft",mousedownright:"annotationmousedownright",mousemove:"annotationmousemove",mouseout:"annotationmouseout",mouseup:"annotationmouseup",mouseover:"annotationmouseover",annocreate:"annotationcreated",annoload:"annotationloaded",moved:"annotationmoved",rotated:"annotationrotated",annoresized:"annotationresized",repaint:"annotationrepainted",layerinserted:"layerinserted",layerremoved:"layerremoved",layermoved:"layermoved",layerschanged:"layerschanged"};"undefined"==typeof Raphael?(Atalasoft.Utils._scriptLoader=Atalasoft.Utils.__loadDependencies(Mt.scripturl,Mt.allowannotations),Atalasoft.Utils._scriptLoader&&Atalasoft.Utils._scriptLoader.bind({scriptsloaded:r})):r(),p(),St.__exposedApi=Ft.annotations,St.addDrawingSurface=f,St.removeDrawingSurface=g,St.insertLayer=h,St.removeLayer=v,St.moveLayer=y,St.showLayer=x,St.clear=F,St.createAnnotation=M,St.deleteAnnoOnPage=I,St.drawAnnotation=at,St.getAnnosFromPage=L,St.setStamps=Q,St.setAnnotationDefaults=G,St.setImages=J,St.setCustom=X,St.dispose=s,/**
    * [Internal] Gets debug info object
    * @returns debug info object if available, otherwise null
    */
St.__getDebugInfo=et,/**
    * [Internal] Links the annotation data between two controls
    * @param linker internal object of type __LVlinker
    * @returns undefined
    */
St.__linkAnnotations=tt,St.setViewPort=nt,St.stringifyChanges=mt,St.stringifyAnnotationData=wt,St.createHandlerRequest=xt,St.makeHandlerRequest=bt,St.loadAnnotationsUrl=At,St.loadAnnotations=Dt};
"use strict";Atalasoft.Annotations.Grips=function(t,e){function n(){var e;for(var n in z)if(z.hasOwnProperty(n)){var a=t._paper.rect(0,0,B,B),o=r(a,n);U.push(o),U[z[n]]=o,e=Raphael.matrix(),e.rotate(z[n]),R[n]={x:e.x(1,0),y:e.y(1,0)}}S=i(),_()}function r(t,e){return t.attr({fill:"#FFFFE1",cursor:(e||"ne")+"-resize"}),t.grip=!0,t.rect=t.getBBox(),t.hide(),t.center=function(t,e,n,r){n=n||1;var i=B/n,a=B/n,o=i/2,s=Math.round(i/2)+.5,h=Math.round(a/2)+.5;Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)>8&&(h-=.5);var u=Math.round(t)-s,d=Math.round(e)-h;this.ellipse?(u+=o,this.attr({cx:u,cy:d,r:o,"stroke-width":1})):this.attr({x:u,y:d,width:i,height:a,"stroke-width":1}),this.node.setAttribute("stroke-width",1),this.transform(r)},e&&(t.d={key:e,n:~e.indexOf("n"),s:~e.indexOf("s"),w:~e.indexOf("w"),e:~e.indexOf("e")},t.mousedown(function(t){return m(t,this.d)})),t}function i(){var e=t._paper.circle(0,0,B/2),n=r(e).attr({fill:"#00FF40",cursor:"pointer"});return n.ellipse=!0,U.push(n),n.mousedown(function(t){return p(t,n)}),n}function a(t){return-1!==j.inArray(t,I)}function o(){for(var t=0;t<I.length;t++)h(I[t]);I.length=0,G.clear(),U.hide()}function s(t){t.getEventObject().bind(Z)}function h(t){t.getEventObject().unbind(Z)}function u(){G.length>0?f():I.length>0?o():U.hide()}function d(t){for(var e in z)z.hasOwnProperty(e)&&P(U[z[e]],t)}function f(){if(G.length>0){var t=1===G.length?I[0].getBox():G.getBBox();Y.x=t.x,Y.y=t.y,Y.width=t.width,Y.height=t.height,Y.x2=t.x+t.width,Y.y2=t.y+t.height,Y.xmid=t.x+t.width/2,Y.ymid=t.y+t.height/2,g()}}function x(t,e,n,r){0===X&&(Y.x=t,Y.width=Math.max(n,1),Y.x2=t+Y.width,Y.xmid=t+Y.width/2),0===A&&(Y.y=e,Y.height=Math.max(r,1),Y.y2=e+Y.height,Y.ymid=e+Y.height/2),g()}function y(){for(var t=0;t<I.length;t++)I[t].transform(Y.x,Y.y,Y.width,Y.height)}function g(){var e=1===G.length,n=Raphael.matrix(),r=1,i="",a=V.getViewerTransform(t._index);if(n.add(a.a,a.b,a.c,a.d,a.e,a.f),e){var o=I[0].getTransform();o&&n.add(o.a,o.b,o.c,o.d,o.e,o.f),r=V.getZoom(t._index),i=n.toTransformString(!0)}U[z.nw].center(Y.x,Y.y,r,i),U[z.ne].center(Y.x2,Y.y,r,i),U[z.sw].center(Y.x,Y.y2,r,i),U[z.se].center(Y.x2,Y.y2,r,i),U[z.n].center(Y.xmid,Y.y,r,i),U[z.w].center(Y.x,Y.ymid,r,i),U[z.e].center(Y.x2,Y.ymid,r,i),U[z.s].center(Y.xmid,Y.y2,r,i);var s=I[0].get();s.rotatable||!s.hasOwnProperty("rotatable")?(S.show(),S.center(Y.xmid,Y.y-E/r,r,i)):S.hide();var h=1===I.length?I[0].get().rotation:0;d(h+V.getPageRotation(t._index))}function c(e){var n=t.offset(),r=Atalasoft.Utils.getSVGOffset(t._paper.canvas,t),i={x:e.pageX-(n.left+r.left),y:e.pageY-(n.top+r.top)};return i}function p(e){if(e.stopPropagation(),1===I.length&&1===G.length){for(var n=0;n<I.length;n++){var r=I[n].get();if(r.hasOwnProperty("rotatable")&&!r.rotatable)return}j.extend(C,Y);var i=I[0].getTransform(),a=i.x(C.xmid,C.ymid);C.ymid=i.y(C.xmid,C.ymid),C.xmid=a,j(t._paper.canvas).bind({mouseup:v,mousemove:l})}}function l(e){e.stopPropagation();var n=k(c(e)),r=180*Math.atan2(n.y-C.ymid,n.x-C.xmid)/Math.PI+90;return 1===I.length&&(I[0].set({rotation:r}),I[0].repaint()),t._grips.repaint(),!1}function v(e){return e.stopPropagation(),j(t._paper.canvas).unbind({mouseup:v,mousemove:l}),1===I.length&&I[0].getEventObject().trigger("rotated"),!1}function m(e,n){if(e.stopPropagation(),!(I.length>1)){for(var r=0;r<I.length;r++)if(!I[r].get("resizable"))return;return j.extend(C,Y),X=z[n.key]===z.n||z[n.key]===z.s?1:0,A=z[n.key]===z.w||z[n.key]===z.e?1:0,(n.n||1===A)&&(C.y=C.y2),n.w&&(C.x=C.x2),j(t._paper.canvas).bind({mouseup:b,mousemove:w}),!1}}function w(t){if(t.stopPropagation(),1===G.length){var e=O(c(t)),n=Math.abs(e.x-C.x),r=Math.abs(e.y-C.y),i=e.x<C.x?C.x-n:C.x,a=e.y<C.y?C.y-r:C.y;x(i,a,n,r),y()}return!1}function b(e){e.stopPropagation();for(var n=0;n<I.length;n++)I[n].getEventObject().trigger("resized"),I[n].getEventObject().trigger("annoresized"),I[n].repaint();return G.length>0&&f(),j(t._paper.canvas).unbind({mouseup:b,mousemove:w}),!1}function O(t){if(G.length>0){var e="set"===G[0].type?G[0][0]:G[0],n=e.matrix.invert(),r={x:n.x(t.x,t.y),y:n.y(t.x,t.y)};return r}return t}function k(e){var n=V.getViewerTransform(t._index).invert(),r=n.x(e.x,e.y);return e.y=n.y(e.x,e.y),e.x=r,e}function P(t,e){if(t&&t.d&&t.d.key){var n=Raphael.matrix();n.rotate(e);var r={x:n.x(R[t.d.key].x,R[t.d.key].y),y:n.y(R[t.d.key].x,R[t.d.key].y)};for(var i in T)if(T.hasOwnProperty(i)&&M(r,T[i].start,T[i].end)){t.attr({cursor:(T[i].dir||"ne")+"-resize"});break}}}function _(){var t=Raphael.matrix();t.rotate(F,0,0);for(var e=function(e,n){var r={dir:n,start:{x:t.x(R[e].x,R[e].y),y:t.y(R[e].x,R[e].y)},end:{x:t.x(R[n].x,R[n].y),y:t.y(R[n].x,R[n].y)}};return r},n=["e","ne","n","nw","w","sw","s","se"],r=0;r<n.length-1;++r)0===r&&(T[n[r]]=e(n[n.length-1],n[r])),T[n[r+1]]=e(n[r],n[r+1])}function M(t,e,n){function r(t,e){return-t.x*e.y+t.y*e.x>0}return!r(e,t)&&r(n,t)}var A,j=Atalasoft.$,B=8,E=25,F=-22.5,z={e:0,ne:315,n:270,nw:225,w:180,sw:135,s:90,se:45},R={},T={},V=e,U=t._paper.set(),G=t._paper.set(),I=[],S=null,C={},X=null,Y={x:0,y:0,width:1,height:1,x2:1,y2:1},Z={dragstart:function(){},dragmove:function(){U.hide()},moved:function(){u(),U.show();for(var t=0;t<I.length;++t){var e=I[t].get();e.hasOwnProperty("rotatable")&&!e.rotatable&&S.hide()}}};n(),this.push=function(t){a(t)||(I.push(t),G.push(t.getObject()),t.get("selectable")===!0&&s(t),u(),U.toFront(),U.show())},this.contains=a,this.remove=function(t){for(var e=0;e<I.length;e++)I[e]===t&&I.splice(e,1);G.exclude(t.getObject()),h(t)},this.clear=o,this.repaint=u,this.updateCursor=d};
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Atalasoft.Annotations.AnnotationSelector=function(e,n){function t(e){b=e}function o(e){m=e}function r(){_=null,b=null,m=null,A.length=0}function l(e,n,t){f(!0,e,n,t)}function i(e,n,t){f(!1,e,n,t)}function f(e,n,t,o){var r,l,i=[].concat(n),f=null;f=a(t),f===t&&null!==f&&(t=f._index),o||p(f||t);for(var u=0;u<i.length;u++)r=i[u],l=h.inArray(r,A[t]),l>=0?e||A[t][l]!==r||A[t].splice(l,1):e&&(A[t]?A[t].push(r):A[t]=[r]),f&&(e?f._grips.push(r):f._grips.remove(r)),r.get("selected")!==e&&r.toggleSelected({append:!0,pageindex:t,page:f})}function u(e,n){var t="object"===("undefined"==typeof n?"undefined":_typeof(n))?n._index:n;b[t]&&f(e,b[t],n,!0)}function c(e){for(var n=[],t=0;t<e.length;t++)if(e[t]){n[t]=[];for(var o=0;o<e[t].length;o++)n[t][o]=e[t][o].getClonedData()}return n}function a(e){var n=null;if("object"===("undefined"==typeof e?"undefined":_typeof(e)))n=e;else{e=Math.max(e,0);var t=h.grep(m,function(n){return n._index===e});t.length>=1&&(n=t[0])}return n}function s(e){u(!0,e)}function p(e){u(!1,e);var n=a(e);n&&n._grips&&n._grips.repaint()}function g(){for(var e=0;e<b.length;e++)s(e)}function d(){for(var e=0;e<b.length;e++)p(e)}function y(){return c(A)}/**
    * Gets an array of all annotation data objects.
    * @returns array of arrays containing annotation data objects for each page of the document.
    */
function v(){return c(b)}var h=Atalasoft.$,_=this,b=e,m=n,A=[];_.dispose=r,_.select=l,_.deselect=i,_.setAnnos=t,_.setPages=o,_.resolvePage=a,_.deselectAll=d,_.deselectPage=p,_.getAnnotations=v,_.getSelected=y,_.selectAll=g,_.selectPage=s};
"use strict";Atalasoft.Annotations.Annotation=function(e,t){function n(){e.multiview||z(e.type),f(e,!0),c(),"custom"===nt.type&&(Y=new Atalasoft.Annotations.AnnotationCustomRenderer(nt,G)),X=new Atalasoft.Annotations.DrawHandler(nt,$,G,q,Y),i({repaint:X.events.update,viewchanged:X.events.viewchanged,drawn:B,resized:d}),nt.points&&(nt.x>0||nt.y>0)&&(E(nt.x,nt.y),nt.x=0,nt.y=0,nt.width=1,nt.height=1),a()}function a(){ot={selectable:{selectchange:w},movable:{dragstart:X.events.dragstart,dragmove:X.events.dragmove,dragend:X.events.dragend},resizable:{pinchstart:X.events.pinchstart,pinchmove:X.events.pinchmove,pinchend:X.events.pinchend},boundEvents:{resizable:!1,movable:!1,selectable:!1},isBound:function(e){return this.boundEvents[e]},bound:function(e){this.boundEvents[e]=!0},unbound:function(e){this.boundEvents[e]=!1}}}function o(){nt.selected&&w(),G&&G.unbind(),M&&M.remove(),Q&&Q.dispose(),W&&W.remove(),X&&X.unbindEvents(),X=null,$=null,q=null,G=null,M=null,Q=null,W=null,nt=null}function i(){G.bind.apply(G,arguments)}function l(){G.unbind.apply(G,arguments)}function r(){return G.trigger.apply(G,arguments),q}function s(){/**
         * Represents generic annotation data object.
         *
         * This basic object structure is applied to all annotations. Individual types of annotation could ignored some of those properties.
         * This structure is used when configuring default values for particular annotation types using {@link WebDocumentViewerConfig.annotations}, creating annotations using {@link Atalasoft.Controls.WebDocumentViewer~AnnotationController#createOnPage|annotations.createOnPage} or retrieving annotations data using corresponding api.
         *
         * *Note*, Annotation could have only one of two positioning models
         * - Box model, i.e. annotation position and size is defined by {@link AnnotationData.x | X}, {@link AnnotationData.y | Y}, {@link AnnotationData.width | width} and {@link AnnotationData.height | height} properties.
         * For example, `rectangle` or `text` annotations.
         *
         * - Points model, which means that annotation consist of an array of individual points stored in {@link AnnotationData.points | points} property.
         * For example, `lines` or `freehand` annotations.
         *
         * It's expected that annotation have only one of positioning model, and often rendering is performed basing on existence or absence of {@link AnnotationData.points | points} value. I.e. in case if {@link AnnotationData.points | points} is set, {@link AnnotationData.x | X}, {@link AnnotationData.y | Y}, {@link AnnotationData.width | width} and {@link AnnotationData.height | height} values could be ignored.
         *
         * @atalaconfig
         * @alias AnnotationData
         */
var e={/**
             * @property {Atalasoft.Annotations.AnnotationTypes} type - Annotation type.
             */
type:"",/**
             * @property {number} [x=0] - X axis annotation coordinate in document coordinate space.
             */
x:0,/**
             * @property {number} [y=0] - Y axis annotation coordinate in document coordinate space.
             */
y:0,/**
             * @property {number} [width=0] - Width of the annotation box.
             */
width:0,/**
             * @property {number} [height=0] - Height of the annotation box.
             */
height:0,/**
             * @property {Point[]} [points=undefined] - Array of annotation points.
             */
points:void 0,/**
             * @property {number} [rotation=0] - Represents annotation rotation angle.
             *
             * Note, this property is ignored when annotation is created from UI, i.e. when specified in {@link WebDocumentViewerConfig.annotations} configurations.
             */
rotation:0,/**
             * @private
             */
transform:Raphael.matrix(),/**
             * @property {boolean} [visible=true] - Indicates whether annotation is visible.
             */
visible:!0,/**
             * @property {boolean} [movable=true] - Indicates whether annotation could be moved through UI.
             */
movable:!0,/**
             * @property {boolean} [rotatable=true] -Indicates whether annotation could be rotated through UI.
             */
rotatable:!0,/**
             * @property {boolean} [resizable=true] - Indicates whether annotation could be resized through UI.
             */
resizable:!0,/**
             * @property {boolean} [selected=false] - Indicates whether annotation is currently selected.
             */
selected:!1,/**
             * @property {boolean} [selectable=true] - Indicates whether annotation is selectable.
             */
selectable:!0,/**
             * @property {boolean} [readonly=false] - Indicates whether annotation is readonly. If set to true annotation couldn't be modified through UI and context menu couldn't be shown for it.
             */
readonly:!1,/**
             * @property {boolean} [burn=false] - Indicates whether this annotation should be "burned" to output document on save. If set to true, annotation will be rendered on top of the image for all output formats except PDF. For PDF documents, annotations will be rendered and added as a separate layer on top of the document content.
             */
burn:!1,/**
             * @property {string} [tooltip] - Annotation tooltip.
             */
tooltip:"",/**
             * @property {string} name - Annotation type title. This will be shown as a caption for toolbar buttons representing "extended" types annotations. This applies to `stamp`, `image` and `custom` types of annotation. I.e. name should be set to annotations defined by application using {@link WebDocumentViewerConfig.annotations| annotations.stamps}, {@link WebDocumentViewerConfig.annotations| annotations.images} and {@link WebDocumentViewerConfig.annotations| annotations.custom}.
             */
name:"",/**
             * @property {string} [username] - Corresponds to server side `AnnotationData.UserName` property.
             */
username:"",/**
             * @ignore
             */
aspectratio:0,/**
             * @property {number} [cornerradius=0] - Represents corner rounding radius for Stamp annotations.
             *
             */
cornerradius:0,/**
             * Represents annotation fill configuration.
             * @typedef {Object} AnnotationFill
             * @property {string} [color='white'] - Fill color.
             * @property {number} [opacity=1] - Opacity level.
             */
/**
             * @property {AnnotationFill} [fill] - Represents annotation fill.
             */
fill:{color:"white",opacity:1},/**
             * @typedef AnnotationLineCap
             * @property {string} [style] - Style of the cap. Valid values are `'classic'`, `'block'`, `'open'`, `'oval'`, `'diamond'`, and `'none'`.
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
outline:{color:"black",opacity:1,width:2,startcap:null,endcap:null},/**
             * @property {string} [src] - Url of the image displayed by the "image" annotation.
             */
src:"",/**
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
text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12},readonly:!1,replies:null,parent:null,autoscale:!1},/**
             * @property {Object} [extra] - Additional data that could be stored along with annotation. Application specific properties is expected to be inserted into this object.
             * Those data will be transacted to extra properties of the server-side `AnnotationData` object.
             */
extra:{}};/**
         * Synchronizes user instance of the annotation data with corresponding internal state. Triggers UI invalidation if necessary.
         *
         * This method should be called to apply any property changes made by applicaion.
         * @function AnnotationData#update
         * @instance
         */
/**
         * Returns the page index for particular annotation.
         * @function AnnotationData#getPageIndex
         * @instance
         * @returns {number}
         */
return e}function u(e,t){var n=(e-t+360)%360,a=Raphael.matrix(),o=h();a.add(o.a,o.b,o.c,o.d,o.e,o.f);var i=_();a.rotate(n,i.x+i.width/2,i.y+i.height/2);var l=a.x(i.x,i.y),r=a.y(i.x,i.y);E(l-i.x,r-i.y),c()}function c(){var e=Raphael.matrix(),t=_();e.rotate(nt.rotation,t.x,t.y),nt.transform=e}function d(){var e=_(),t=K(h(),e);(t.x!==e.x||t.y!==e.y)&&E(t.x-e.x,t.y-e.y)}function p(e,t){if(e){var n=nt.rotation;e.hasOwnProperty("rotation")&&(e.rotation=(e.rotation+360)%360),f(e,t,!1),n!==nt.rotation&&u(nt.rotation,n)}}function f(e,t){t?N.extend(!0,nt,e):N.extend(nt,e)}function b(e){return e?nt[e]:nt}function h(){return nt.transform}function y(){function e(){delete nt.update,delete nt.getPageIndex}et={update:function(t){nt.selected!==et.selected&&w(),t||p(et,!0),e(),C(),j(),T()},getPageIndex:function(){return q._pageindex}},N.extend(!0,et,nt)}function g(){return et?N.extend(!0,et,nt):y(),delete et.transform,et}function m(){return M}function v(){return G}function x(){return JSON.stringify(nt)}function w(e){if(nt){var t={ann:q,append:!0,page:null,pageindex:q._pageindex,type:""};e&&(t.append=e.shiftKey||e.ctrlKey||"undefined"!=typeof e.append&&e.append,t.page=e.page,t.pageindex=e.pageindex),t.append||!nt.selected?(nt.selected=!nt.selected,t.type=nt.selected?"selected":"deselected"):nt.selected&&!t.append&&(t.type="reselected"),""!==t.type&&r(t)}}function A(e){return et&&et===e}function z(e){N.extend(!0,nt,at[e])}function k(e){var t=null;switch(nt.type){case"image":t=e.image(),t.attr("src",nt.src);break;case"highlight":t=e.rect();break;case"rectangle":t=e.rect();break;case"fillrect":t=e.rect();break;case"text":t=e.rect();break;case"stamp":t=e.rect();break;case"ellipse":t=e.path();break;case"line":t=e.path();break;case"lines":t=e.path();break;case"freehand":t=e.path();break;case"polygon":t=e.path();break;case"custom":t=Y.construct(e)}return e._annos&&e._annos.push(t),t}function B(){null!==L&&(M?G.unbind(M,L):G.unbind(L));var e={};nt.selectable&&(N.extend(e,ot.selectable),ot.bound("selectable"),!$.readonly&&nt.movable&&(N.extend(e,ot.movable),ot.bound("movable")),!$.readonly&&nt.resizable&&Atalasoft.Utils.Browser.Features.Touch&&(N.extend(e,ot.resizable),ot.bound("resizable"))),L=e,G.bind(M,e)}function T(){null!==L&&(nt.selectable?(ot.isBound("selectable")||(G.bind(ot.selectable),ot.bound("selectable")),nt.movable&&!ot.isBound("movable")?(G.bind(ot.movable),ot.bound("movable")):!nt.movable&&ot.isBound("movable")&&(G.unbind(ot.movable),ot.unbound("movable")),Atalasoft.Utils.Browser.Features.Touch&&(nt.resizable&&!ot.isBound("resizable")?(G.bind(ot.resizable),ot.bound("resizable")):!nt.resizable&&ot.isBound("resizable")&&(G.unbind(ot.resizable),ot.unbound("resizable")))):!nt.selectable&&ot.isBound("selectable")&&(G.unbind(ot.selectable),ot.unbound("selectable"),G.unbind(ot.movable),ot.unbound("movable"),G.unbind(ot.resizable),ot.unbound("resizable")))}/**
     * Returns bounding box of the annotation in document space.
    */
function _(){!tt&&nt.points&&(tt=Atalasoft.Utils.__calcPathBounds(nt.points));var e=nt.points?tt:nt;return{x:e.x,y:e.y,width:e.width,height:e.height}}function E(e,t){if(nt.points){for(var n=0;n<nt.points.length;n++)nt.points[n].x+=e,nt.points[n].y+=t;tt&&(tt.x+=e,tt.y+=t)}"custom"!==nt.type&&nt.points||(nt.x+=e,nt.y+=t),c(),O()}function R(e,t,n,a){var o=_(),i=n/o.width,l=a/o.height;if(nt.points&&nt.points.length>0&&"custom"!==nt.type){for(var s=0;s<nt.points.length;s++)nt.points[s].x=e+(nt.points[s].x-o.x)*i,nt.points[s].y=t+(nt.points[s].y-o.y)*l;tt.x=e,tt.y=t,tt.width*=i,tt.height*=l}else nt.x=e,nt.y=t,nt.width*=i,nt.height*=l;r({type:"annoresizing"}),O()}function U(){X.transformUI.apply(X,arguments)}function I(){X.commitTransform()}function O(){it||(it=!0,setTimeout(S,lt))}function S(){it=!1,j()}function P(e,t,n){p(n),M=k(t),M.transform(X.getTransform()),("text"===nt.type||"stamp"===nt.type)&&(Q=new Atalasoft.Annotations.TextAnnotationUI(q,t,$)),C(),X.drawStart(e,M,Q)}function j(e){e&&(W&&(W=null),M=k(e),Y&&Y.render(M,nt),C(),B(),"text"!==nt.type&&"stamp"!==nt.type||null!==Q||(Q=new Atalasoft.Annotations.TextAnnotationUI(q,e,$)),Q&&Q.changepaper(e),r({type:"viewchanged",annview:M,textview:Q})),r("repaint")}function C(){if(M){var e=Z();N.extend(e,F()),M.attr(e),H(),nt.visible?M.show():M.hide()}D(),V()}function D(){Q&&(Q.set(nt.text),Q.updateView())}function V(){M&&""!==nt.src&&"image"===nt.type&&("unknown"!=typeof M.node.src&&M.node.src?M.node.src=nt.src:M.node.href.baseVal=nt.src)}function Z(){return{fill:nt.fill.color,"fill-opacity":nt.fill.opacity}}function F(){var e={stroke:nt.outline.color,"stroke-width":nt.outline.width*$.getZoom(q._pageindex),"stroke-opacity":nt.outline.opacity};return M._linewidth=nt.outline.width,Raphael.fn.addArrow||(nt.outline.startcap&&(e["arrow-start"]=J(nt.outline.startcap)),nt.outline.endcap&&(e["arrow-end"]=J(nt.outline.endcap))),e}function H(){Raphael.fn.addArrow&&(nt.outline.startcap&&Raphael.fn.addArrow(M,J(nt.outline.startcap),!1),nt.outline.endcap&&Raphael.fn.addArrow(M,J(nt.outline.endcap),!0))}function J(e){return[e.style,"-",e.width,"-",e.height].join("")}function K(e,t){return{x:e.x(t.x,t.y),y:e.y(t.x,t.y)}}var N=Atalasoft.$,$=t,q=this,G=new Atalasoft.Annotations.EventHelper(q),L=null,M=null,Q=null,W=null,X=null,Y=null,et=null,tt=null,nt=e.multiview?e:s(),at={highlight:{readonly:!0,fill:{color:"yellow",opacity:.5},outline:{opacity:0}},image:{readonly:!0,fill:{color:null},outline:{opacity:0}},rectangle:{fill:{opacity:0}},stamp:{readonly:!0,cornerradius:0,text:{autoscale:!0}},line:{fill:{color:null},outline:{opacity:1,startcap:{width:"medium",height:"medium",style:"none"},endcap:{width:"medium",height:"medium",style:"none"}}},lines:{fill:{color:null},outline:{opacity:1}},freehand:{fill:{color:null},outline:{opacity:1}},ellipse:{},fillrect:{},polygon:{},text:{}},ot={};n(),q.dispose=o,q.bind=i,q.unbind=l,q.trigger=r,q.set=p,q.get=b,q.getTransform=h,q.getClonedData=g,q.getObject=m,q.getEventObject=v,q.getZoom=function(){return $.getZoom(q._pageindex)},q.stringify=x,q.getJSON=x,q.toggleSelected=w,q.isCloneSource=A,q.getBox=_,q.translate=E,q.transform=R,q.transformUI=U,q.commitTransform=I;var it=!1,lt=Atalasoft.Utils.Browser.Explorer?20:5;return q.startDraw=P,q.repaint=j,q.updateView=C,q};
"use strict";Atalasoft.Annotations.EventHelper=function(t){function n(){P=new Atalasoft.Annotations.PointerHandler,P.bind({click:b,dblclick:w,mousedown:A,mousemove:E,mouseover:R,mouseout:T,mouseup:k,touchmove:X,touchstart:B,interactstart:a,interactend:c,pinchstart:m,pinchmove:f,pinchend:h,selectchange:d,contextmenu:x,showeditor:v,annoresized:Y})}function e(t){$.px=$.mx,$.py=$.my,t.originalEvent?($.mx=t.originalEvent.targetTouches[0].pageX,$.my=t.originalEvent.targetTouches[0].pageY):($.mx=t.targetTouches[0].pageX,$.my=t.targetTouches[0].pageY),$.dx=$.mx-$.px,$.dy=$.my-$.py}function o(t){$.px=$.mx,$.py=$.my,$.mx=t.screenX,$.my=t.screenY,$.dx=$.mx-$.px,$.dy=$.my-$.py}function r(t){var n=arguments;!t||t.constructor.prototype!==Raphael.el&&t.constructor.prototype!==Raphael.st||(t.drag(l,s,p),t.hover(y,g),"set"!==t.type?F(t[0]).bind(P.events):t.forEach(function(t){F(t[0]).bind(P.events)}),n=Array.prototype.slice.call(n,1)),n.length>0&&U.bind.apply(U,n)}function u(t){var n=arguments;!t||t.constructor.prototype!==Raphael.el&&t.constructor.prototype!==Raphael.st?null===t&&n.length>1&&(n=Array.prototype.slice.call(n,1)):(t.undrag(),t.unhover(y,g),"set"!==t.type?F(t[0]).unbind(P.events):t.forEach(function(t){F(t[0]).unbind(P.events)}),n=Array.prototype.slice.call(n,1)),U.unbind.apply(U,n)}function i(){U.trigger.apply(U,arguments)}function a(){i({type:"interactstart",target:z})}function c(){i({type:"interactend",target:z})}function l(t,n,r,u,a){(t||n)&&(Atalasoft.Utils.Browser.Features.Touch&&a.target!==$.target||(null===$.px&&s(null,null,a),a.touches?e(a):o(a),i({type:"dragmove",dx:$.dx,dy:$.dy,mx:$.mx,my:$.my,originalEvent:a})))}function s(t,n,r){$.target=r.target,a(),r.touches?e(r):o(r),i({type:"dragstart",mx:$.mx,my:$.my,originalEvent:r})}function p(t){Atalasoft.Utils.Browser.Features.Touch&&t.target!==$.target||($.target=null,$.px=null,$.py=null,$.mx=null,$.my=null,i({type:"dragend",originalEvent:t}))}function y(){i("hoverin")}function g(){i("hoverout")}function m(t){i(t)}function f(t){i(t)}function h(t){$.px=null,$.py=null,i(t)}function d(t){i(t)}function x(t){i(t)}function v(t){i(t)}function b(t){i(t)}function w(t){i(t)}function A(t){i(t),1===t.which?i("mousedownleft"):3===t.which&&i("mousedownright")}function E(t){i(t)}function T(t){i(t)}function R(t){i(t)}function k(t){i(t),3===t.which&&i("rightclick")}function X(t){i(t)}function Y(t){i(t)}function B(t){i(t)}var F=Atalasoft.$,H=this,U=F({}),z=t,P=null,$={target:null,mx:null,my:null,px:null,py:null,dx:null,dy:null};n(),H.bind=r,H.unbind=u,H.trigger=i};
"use strict";Atalasoft.Annotations.DrawHandler=function(t,e,n,a,i){function r(){}function o(t){var e=Atalasoft.Utils.getMousePositionJquery(t);if(q.paper){var n=Atalasoft.Utils.getSVGOffset(q.paper.canvas,q.paper._page);e.x-=n.left,e.y-=n.top}return e}function s(t){var e=L.getViewerTransform(J._pageindex).invert(),n=e.x(t.x,t.y);return t.y=e.y(t.x,t.y),t.x=n,t}function p(){N.trigger.apply(N,arguments)}function u(t,e,n){q=e,G=n,t.stopPropagation(),t.preventDefault();var a=s(o(t));I.visible=!0,$={x:a.x,y:a.y},I.x=Math.round(a.x),I.y=Math.round(a.y),I.width=1,I.height=1,"path"===q.type&&"custom"!==I.type?"ellipse"!==I.type?(I.points=[{x:I.x,y:I.y}],("lines"===I.type||"polygon"===I.type)&&I.points.push({x:I.x,y:I.y}),I.x=0,I.y=0,Q=l,W=C):(Q=y,W=P):(Q=y,W=U),B(),O={events:Atalasoft.Utils.Browser.Features.Touch?{touchend:d,touchmove:h,mouseup:d,mousemove:h}:{mouseup:d,mousemove:h},src:z(t.srcElement||t.target),main:z(t.currentTarget)},O.src.bind(O.events),O.main.bind({mouseup:d})}function c(){O&&(O.src.unbind(O.events),O.main.unbind({mouseup:d}))}function h(t){t.stopPropagation(),Q(t),B()}function l(t){var e=s(o(t));switch(I.type){case"line":I.points[1]=e;break;case"freehand":I.points.push(e);break;case"lines":I.points[I.points.length-1]=e;break;case"polygon":I.points[I.points.length-1]=e}"path"===q.type&&("ellipse"===I.type?E():V(),q._&&0===q._.dirty&&(q._.dirty=1))}function y(t){var e=s(o(t)),n=$.x,a=$.y,i=Math.max(Math.abs(e.x-$.x),1),r=Math.max(Math.abs(e.y-$.y),1);if(I.aspectratio>0){var p=Math.abs((e.y-$.y)/(e.x-$.x));p>1/I.aspectratio?i=Math.round(r/I.aspectratio):r=Math.round(i/I.aspectratio)}e.x<$.x&&(n=$.x-i),e.y<$.y&&(a=$.y-r),I.x=n,I.y=a,I.width=i,I.height=r}function d(t){t.stopPropagation();var e=!1;if("lines"===I.type||"polygon"===I.type){if(L.activepage._index!==J._pageindex)return;if(I.points.push(s(o(t))),2!==t.button)return}else I.points?I.points&&I.points.length<2&&"custom"!==I.type&&(e=!0):(I.width<4&&I.height<4&&(I.width=100,I.height=100),B());c(),O=null,e?p("cancelled"):p("drawn")}function f(t){if(!L.readonly){t.originalEvent.stopPropagation();var e=J.getBox();$={x:e.x,y:e.y}}}function x(t){if(!L.readonly){t.originalEvent.stopPropagation();var e=s({x:0,y:0}),n=s({x:t.dx,y:t.dy});J.translate(n.x-e.x,n.y-e.y),p("moving")}}function g(t){if(!L.readonly){t.originalEvent.stopPropagation();var e=J.getBox();if(q.paper&&q.paper._page){var n=q.getBBox(),a={x:0,y:0,width:q.paper._page.width(),height:q.paper._page.height()};if(!X(a,n))return J.translate($.x-e.x,$.y-e.y),void 0}($.x!==e.x||$.y!==e.y)&&p("moved")}}function v(t){if(!I.points&&!L.readonly){var e=s({x:t.touches[0].clientX,y:t.touches[0].clientY}),n=s({x:t.touches[1].clientX,y:t.touches[1].clientY}),a=J.getBox();K={start:Atalasoft.Utils.CalcDistance(e.x,e.y,n.x,n.y),rect:a}}}function m(t){if(K){var e=s({x:t.touches[0].clientX,y:t.touches[0].clientY}),n=s({x:t.touches[1].clientX,y:t.touches[1].clientY}),a=Atalasoft.Utils.CalcDistance(e.x,e.y,n.x,n.y,K.start),i=a.x-K.start.x,r=a.y-K.start.y,o=K.rect.x-a.dx,p=K.rect.y-a.dy,u=K.rect.width+i,c=K.rect.height+r;I.points?J.transform(o,p,u,c):(I.x=o,I.y=p,I.width=u,I.height=c),q.paper&&q.paper._page&&q.paper._page._grips&&q.paper._page._grips.repaint(),B()}}function w(){p("resized"),p("annoresized"),K=null}function _(){B()}function b(t){q=t.annview,G=t.textview,"path"===q.type&&"custom"!==I.type?"ellipse"!==I.type?(Q=l,W=C):(Q=y,W=P):(Q=y,W=U)}function M(){q.transform(j.toTransformString()),G&&G.repaint()}function A(){q.transform(T()),B()}function B(){W(),q&&q.transform(T()),G&&G.repaint()}function T(){var t=Raphael.matrix(),e=L.getViewerTransform(J._pageindex),n=J.getTransform();return t.add(e.a,e.b,e.c,e.d,e.e,e.f),t.add(n.a,n.b,n.c,n.d,n.e,n.f),t.toTransformString()}function U(){q.attr({x:I.x,y:I.y,width:I.width,height:I.height}),H&&H.render(q,I),Atalasoft.Utils.Browser.Features.VML&&q.transform(T())}function P(){E(),q._&&0===q._.dirty&&(q._.dirty=1)}function C(){V(),q._&&0===q._.dirty&&(q._.dirty=1)}function E(){var t=I.width/2,e=I.height/2,n=te*t,a=te*e,i=I.x+I.width/2,r=I.y+I.height/2,o=["M",i,r-e,"C",i+n,r-e,i+t,r-a,i+t,r,"C",i+t,r+a,i+n,r+e,i,r+e,"C",i-n,r+e,i-t,r+a,i-t,r,"C",i-t,r-a,i-n,r-e,i,r-e,"Z"];q.attr({path:o})}function V(){if(I.points&&0!==I.points.length){for(var t=["M",I.points[0].x,I.points[0].y],e=1;e<I.points.length;e++)t=t.concat(["L",I.points[e].x,I.points[e].y]);"polygon"===I.type&&t.push("Z"),q.attr({path:t}),D()}}/**
    * Work around outlined by this post:
    * http://stackoverflow.com/questions/15693178/svg-line-markers-not-updating-when-line-moves-in-ie10
    */
function D(){if(Atalasoft.Utils.Browser.Explorer){var t=parseInt(Atalasoft.Utils.Browser.Version,10);t>=10&&12>t&&q.node&&q.node.parentNode&&q.node.parentNode.insertBefore(q.node,q.node)}}function R(){z.extend(I,Z(j,L.getZoom(J._pageindex))),A(),ee=null}function S(t,e,n,a){j=Raphael.matrix(n,0,0,a,t,e),ee||(ee=k(I,1)),j.add(ee.a,ee.b,ee.c,ee.d,ee.e,ee.f),M()}function X(t,e){return Y(t,e.x,e.y)||Y(t,e.x+e.width,e.y)||Y(t,e.x,e.y+e.height)||Y(t,e.x+e.width,e.y+e.height)}function Y(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height}function k(t,e){var n;if(t.points&&t.points.length>1){var a=J.getBox();n=Raphael.matrix(1,0,0,1,0,0),n.scale(1/a.width,1/a.height,0,0),n.translate(-a.x,-a.y)}else n=Raphael.matrix(e,0,0,e,0,0),n.translate(t.x,t.y),n.scale(t.width,t.height,0,0);return n}function Z(t,e){var n=t.split(),a={x:n.dx/e,y:n.dy/e,width:n.scalex/e,height:n.scaley/e};return a}var z=Atalasoft.$,F=this,I=t,L=e,N=n,q=null,G=null,H=i,J=a,O=null,$=null,j=null,K=null,Q=function(){},W=function(){};F.events={drawstart:u,drawmove:h,drawend:d,dragstart:f,dragmove:x,dragend:g,update:_,viewchanged:b,pinchstart:v,pinchmove:m,pinchend:w},r(),F.drawStart=u,F.unbindEvents=c,F.repaint=B,F.getTransform=T;var te=.5522847498307936;F.commitTransform=R,F.transformUI=S;var ee=null};
"use strict";/**
* Mouse and Touch event handler for annotations
* @private
*/
Atalasoft.Annotations.PointerHandler=function(){function t(){return M.bind.apply(M,arguments),w}function n(){return M.unbind.apply(M,arguments),w}function e(){M.trigger.apply(M,arguments)}function o(){e({type:"interactstart"})}function i(){e({type:"interactend"})}function u(t){e(t)}function a(t){e(t);var n=Atalasoft.Utils.getMousePositionJquery(t);e({type:"showeditor",x:n.x,y:n.y})}function c(t){return o(),e(t),e({type:"selectchange",shiftKey:t.shiftKey,ctrlKey:t.ctrlKey}),3===t.which&&e({type:"contextmenu",x:t.pageX,y:t.pageY,event:t}),!1}function s(t){e(t)}function r(t){e(t)}function l(t){e(t)}function p(t){e(t),i()}function h(t){t.stopPropagation(),t.preventDefault(),K.pinching=!0,e({type:"pinchstart",touches:t.originalEvent.touches})}function g(t){t.stopPropagation(),t.preventDefault(),e({type:"pinchmove",touches:t.originalEvent.touches})}function f(t){t.stopPropagation(),t.preventDefault(),K.pinching=!1,e({type:"pinchend",touches:t.originalEvent.touches}),1===t.originalEvent.touches.length&&y(t)}function y(t){if(K.e=t,o(),e(t),2===t.originalEvent.touches.length&&b(t.originalEvent.touches))P(),K.touching=!1,h(t);else if(1===t.originalEvent.touches.length){e("selectchange"),K.touching=!0;var n=Atalasoft.Utils.getMousePositionJquery(t);K.point.x=n.x,K.point.y=n.y,K.hold=setTimeout(E,1500)}}function v(t){K.e=t,e(t),K.pinching?g(t):K.moves++}function d(t){K.e=t,e(t),K.pinching?f(t):K.touching&&(K.touching=!1,P(),K.moves>0?K.moves=0:K.tapped?x(t):(K.tapped=!0,setTimeout(m,300))),i()}function m(){K.tapped=!1}function x(t){K.e=t,e({type:"showeditor",x:K.point.x,y:K.point.y})}function E(){if(K.moves>0&&null!==K.e){var t=Atalasoft.Utils.getMousePositionJquery(K.e);Math.abs(K.point.x-t.x)<5&&Math.abs(K.point.y-t.y)<5&&(K.moves=0)}0===K.moves&&K.touching&&K.e&&(K.touching=!1,e({type:"contextmenu",x:K.e.originalEvent.touches[0].pageX,y:K.e.originalEvent.touches[0].pageY}))}function P(){null!==K.hold&&(clearTimeout(K.hold),K.hold=null)}function b(t){for(var n=null,e=0;e<t.length;e++){var o=t[e].target;if(!o||!o.raphael&&!o.raphaelParent)return!1;if(null===n)n=o;else if(n!==o)return!1}return!0}var A=Atalasoft.$,w=this,M=A({}),K={drawing:!1,hold:null,pinching:!1,tapped:!1,touching:!1,delta:{x:0,y:0},origin:{x:0,y:0},point:{x:0,y:0},moves:0,e:null};w.events={click:u,dblclick:a,mousedown:c,mousemove:s,mouseout:r,mouseover:l,mouseup:p},Atalasoft.Utils.Browser.Features.Touch&&A.extend(!0,w.events,{touchstart:y,touchmove:v,touchend:d}),w.bind=t,w.unbind=n,w.trigger=e};
"use strict";Atalasoft.Annotations.FontUI=function(n,t){function o(){e(n)}function i(){h=null,w=null,A=null}function e(n){n&&m.extend(A,n),r()}function l(n){return n?A[n]:A}function r(n,t,o){n=n?n:w,n&&(t=void 0!==t?t:g,o||s(),u(n,t))}function u(n,t){var o="none";(A.strike||A.underline)&&(o=A.strike?"line-through ":"",o+=A.underline?"underline":""),n.css({color:A.color,"font-family":A.family,"font-style":A.italic?"italic":"normal","font-weight":A.bold?"bold":"normal","font-size":A.size*(t||1)+"pt","text-decoration":o})}function s(){var n=document.width||window.outerWidth,t=n/window.innerWidth;p!==t&&(p=t),g=A.size*y<z?z/p/A.size:y}function a(){return s(),g}function c(){return s(),p}function f(){return y}function d(n){y=n,r()}var m=Atalasoft.$,h=this,w=t,A={bold:!1,italic:!1,strike:!1,underline:!1,color:"#000000",family:"Arial",size:12},g=1,y=1,p=1,z=Atalasoft.Utils.Browser.Mobile.Any()?18:8;o(),h.dispose=i,h.set=e,h.get=l,h.repaint=r,h.applyTo=u,h.getAdjustedZoom=a,h.getUserZoom=c,h.getZoom=f,h.setZoom=d};
"use strict";Atalasoft.Annotations.AnnotationTextRenderer=function(t,e){function n(){i(),d=s("<canvas "+(p?'dir="rtl"':"")+"/>"),c=s('<span style="position:absolute; visibility:hidden; left: -5000px;">{[|,0123456789Thqkbfjplyg</span>'),s(document.body).append(c)}function i(){var t,e=document.body;e.currentStyle?t=e.currentStyle.direction:window.getComputedStyle&&(t=document.defaultView.getComputedStyle(e,null).getPropertyValue("direction")),"rtl"===t.toLowerCase()&&(p=!0)}function l(){g=null,x=null,f=null,d&&d.remove&&(d.remove(),d=null),c&&c.remove&&(c.remove(),c=null)}function a(t){d&&c||n(),f.applyTo(c),d[0].width=t.width,d[0].height=t.height;var e=d[0].getContext("2d"),i=h(e,x.text.value,t.width),l=r(i.length),a=x.text.autoscale?l:x.text.font.size,o=[x.text.font.italic?"italic":"normal",x.text.font.bold?"bold":"normal",a+"px",x.text.font.family];e.font=o.join(" "),e.fillStyle=x.text.font.color,e.textBaseline="top";var u,s=0,g=i.length?i[0]:"";for(u=0;u<i.length;u++)i[u].length>g.length&&(g=i[u]);var w=e.measureText(g).width,v=p?w:0;if(x.text.autoscale&&"left"!==x.text.align)switch(x.text.align){case"center":e.textAlign=x.text.align,v=w/2;break;case"right":e.textAlign=x.text.align,v=p?0:w;break;default:e.textAlign="start",v=p?w:0}if(x.text.autoscale){var m=t.width/w;e.scale(m,1)}if(!x.text.autoscale)switch(x.text.align){case"center":e.textAlign=x.text.align,v=t.width/2;break;case"right":e.textAlign=x.text.align,v=t.width}for(u=0;u<i.length;u++)e.fillText(i[u],v,s,w),s+=l;return d[0].toDataURL()}function o(e,n){var i=v;i&&i.width===n.width&&i.height===n.height&&i.text===t.text.value&&i.align===t.text.align||(v={width:n.width,height:n.height,text:t.text.value,align:t.text.align},e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a(n)))}function r(t){if(x.text.autoscale){var e=Math.max(0,x.height-2*x.outline.width);return t>0?Math.floor(e/t):e}return f.applyTo(c,1),c[0].offsetHeight}function h(t,e,n){var i=[];if("string"==typeof e){var l="\n";if(x.text.autoscale)return e.split(l);for(var a=e,o=n,r=u(a),h="",g="",f=[],d=0;d<r.length;d++)if(h=g,g=r[d],t.measureText(g).width>o)for(var c=g.split(""),p=0;p<c.length;p++)f.push(c[p]),t.measureText(f.join("")).width>o&&(f.pop(),i.push(f.join("")),f.length=0,f.push(c[p]));else f.push(g),(t.measureText(s.trim(f.join(""))).width>o||h.indexOf(l)>=0)&&(f.pop(),i.push(f.join("")),f.length=0,f.push(g));f.length>0&&(i.push(f.join("")),f.length=0)}return i}function u(t){for(var e=[],n="",i=0,l=0;l<t.length;l++){var a=t[l];w[n]&&(e.push(t.substr(i,l-i)),i=l),n=a}return l>i&&e.push(t.substr(i,l-i)),e}var s=Atalasoft.$,g=this,x=t,f=e,d=null,c=null,p=!1,w={" ":!0,"-":!0,"?":!0,"\n":!0,"	":!0},v=null;g.dispose=l,g.renderToDataURL=a,g.renderToSVGImage=o};
"use strict";Atalasoft.Annotations.AnnotationCustomRenderer=function(n,r){function t(){p=g.constructor?g.constructor:s,b=g.renderer?g.renderer:a}function u(){m=null,g=null,p=null,b=null}function e(){return y.bind.apply(y,arguments),m}function o(){return y.unbind.apply(y,arguments),m}function c(){return y.trigger.apply(y,arguments),m}function i(n){return p(n,g)}function l(n){b(n,g)}function s(n){return n.image()}function a(n){g.customurl?n.attr("src",g.customurl):f()}function f(){c("serverrenderurlrequested",{data:g,complete:d})}function d(n){n.customurl=n}var m=this,g=n,p=null,b=null,y=r;return m.dispose=u,m.bind=e,m.unbind=o,m.trigger=c,m.construct=i,m.render=l,t(),m};
"use strict";Atalasoft.Annotations.PathHelper=function(n){function o(){A.points&&(A.points.length=0)}function t(){v=null,A=null,m.length=0,m=null}function c(n,o,t){m=m.concat([t?"m":"M",n,o]),p(n,o)}function i(n,o,t){m=m.concat([t?"l":"L",n,o]),p(n,o)}function u(n,o){m=m.concat([o?"h":"H",n]),p(n,null)}function l(n,o){m=m.concat([o?"v":"V",n]),p(null,n)}function a(n,o,t,c,i,u,l){m=m.concat([l?"c":"C",n,o,t,c,i,u]),p(i,u)}function e(n,o,t,c,i){m=m.concat([i?"s":"S",n,o,t,c])}function r(n,o,t,c,i){m=m.concat([i?"q":"Q",n,o,t,c])}function f(n,o,t){m=m.concat([t?"t":"T",n,o])}function s(n,o,t,c,i,u,l,a){m=m.concat([a?"a":"A",n,o,t,c,i,u,l])}function h(){m.push("Z")}function T(){return m}function p(n,o){A.points.push({x:n,y:o})}var v=this,A=n,m=[];return v.dispose=t,v.moveTo=c,v.lineTo=i,v.lineToHorizontal=u,v.lineToVertical=l,v.curveTo=a,v.curveToSmooth=e,v.curveToQuadratic=r,v.curveToQuadraticSmooth=f,v.ellipticalArc=s,v.close=h,v.toArray=T,o(),v};
"use strict";Atalasoft.Forms.Field=function(e,t,n){function i(){Atalasoft.Forms.Field.__staticInitOccured||(Atalasoft.Forms.Field.__staticInitOccured=!0,Atalasoft.Utils.Browser.Explorer&&Atalasoft.Utils.Browser.Version<=9&&!function(){var e=null,t=null,n=null,i={get:function(){return n.get.call(this)},set:function(e){t=e,n.set.call(this,e)}},a=function(n){if("value"===n.propertyName){var i=n.srcElement.value;i!==t&&(t=i,null!=R(n.srcElement).data("ataladata")&&R(e).trigger("input"))}},o=function(o){e=o,t=o.value,n=Object.getOwnPropertyDescriptor(o.constructor.prototype,"value"),Object.defineProperty(e,"value",i),e.attachEvent("onpropertychange",a)},r=function(){e&&(delete e.value,e.detachEvent("onpropertychange",a),e=null,t=null,n=null)};R(document).on("focusin",function(e){("TEXTAREA"===e.target.nodeName||"INPUT"===e.target.nodeName&&("text"===e.target.type||"password"===e.target.type))&&(r(),o(e.target))}),R(document).on("focusout",function(){r()}),R(document).on("selectionchange keyup keydown",function(n){e&&e.value!==t&&(t=e.value,null!=R(n.srcElement).data("ataladata")&&R(e).trigger("input"))})}())}function a(){V._pageindex=n,o(e.type),c(e,!0)}function o(e){R.extend(!0,W,L[e])}function r(){j&&j.unbind(),H=null,V=null,j=null,W=null}function l(){j.bind.apply(j,arguments)}function s(){j.unbind.apply(j,arguments)}function u(){return j.trigger.apply(j,arguments),V}function c(e,t){e&&(t?R.extend(!0,W,e):R.extend(W,e))}function d(e){return e?W[e]:W}function g(e){J=e,V.hasOwnProperty("_pageindex")&&(V._pageindex=e)}function f(){function e(){delete W.update}D={update:function(){R.extend(!0,W,D),e(),S(),B(),w()}},R.extend(!0,D,W)}function h(){return D?R.extend(!0,D,W):f(),D}function p(){return Z}function x(){return j}function b(){return JSON.stringify(W)}function m(e){var t,n,i,a,o,r=0,l=0;return"number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd?(r=e.selectionStart,l=e.selectionEnd):(n=document.selection.createRange(),n&&n.parentElement()===e&&(a=e.value.length,t=e.value.replace(/\r\n/g,"\n"),i=e.createTextRange(),i.moveToBookmark(n.getBookmark()),o=e.createTextRange(),o.collapse(!1),i.compareEndPoints("StartToEnd",o)>-1?r=l=a:(r=-i.moveStart("character",-a),r+=t.slice(0,r).split("\n").length-1,i.compareEndPoints("EndToEnd",o)>-1?l=a:(l=-i.moveEnd("character",-a),l+=t.slice(0,l).split("\n").length-1)))),{start:r,end:l}}function v(e,t){return t-(e.value.slice(0,t).split("\r\n").length-1)}function y(e,t){if("number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd)e.selectionStart=t.start,e.selectionEnd=t.end;else{var n=e.createTextRange(),i=v(e,t.start);n.collapse(!0),t.start===t.end?n.move("character",i):(n.moveEnd("character",v(e,t.end)),n.moveStart("character",i)),n.select()}}function k(e){var t=null;switch(W.type){case"button":t=R("<button/>"),t.click(function(){return u({type:"buttonclicked",name:W.fieldname}),!1});break;case"textbox":case"signature":t=W.text.multiline?R('<textarea style="overflow-y:'+(W.text.scrollable?"auto":"hidden")+';resize:none"></textarea>'):R('<input type="text" />'),W.text.value=t.val(W.text.value).val();var n=!1;t.on("paste",function(){return n=!0,!0}),t.on("input",function(e){-1===W.text.maximumfieldheight&&(W.text.maximumfieldheight=R(this).get(0).scrollHeight);var t=W.text.maxlength>0&&R(this).val().length>W.text.maxlength,i=!W.text.scrollable&&R(this).get(0).scrollHeight>W.text.maximumfieldheight,a=R(this).val().length>W.text.value.length;if(a&&(t||i)){var o=m(e.target);if(n&&W.text.maxlength>0){var r=R(this).val(),l=r.length===o.start;if(l)R(this).val(r.substr(0,W.text.maxlength));else{var s=r.length-W.text.value.length,u=W.text.maxlength-W.text.value.length,c=r.substr(0,o.start-s+u),d=W.text.value.substr(o.start-s);R(this).val(c+d),y(e.target,{start:c.length,end:c.length})}}else R(this).val(W.text.value),y(e.target,{start:o.start-1,end:o.start-1})}!W.text.preserveoverflow&&R(this).get(0).scrollHeight<W.text.maximumfieldheight&&(W.text.maximumfieldheight=R(this).get(0).scrollHeight),W.text.value=R(this).val(),n=!1});break;case"checkbox":t=R('<input type="checkbox" />').prop({name:W.group,checked:W.checked}),t.val(W.value);break;case"radio":t=R('<input type="radio" />').prop({name:W.group,checked:W.checked}),t.val(W.value);break;case"choice":if(t=R("<select></select>"),t.text(W.value),t.attr({multiple:W.multiple,size:W.multiline&&W.items?W.items.length:0}),W.items){t.items=[];for(var i in W.items)if(W.items.hasOwnProperty(i)){var a=R("<option></option>",{selected:W.items[i].checked,value:W.items[i].value,text:W.items[i].text});t.append(a),t.items[i]=a}}if(W.multiline&&W.items){var o=function(){R(this).trigger("change")};t.bind({mouseup:o,touchend:o})}break;case"generic":t=R("<div></div>")}if(t){if("textbox"===W.type||"signature"===W.type){var r=W.text.font.paddingtop,l=W.text.font.linespacing>0?W.text.font.linespacing+"px":"1.14pt";t.css({resize:"none",position:"absolute",paddingTop:W.multiline?r:0,paddingBottom:W.multiline?"2pt":0,lineHeight:l,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"})}else t.css({resize:"none",position:"absolute",padding:0,margin:0,"-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});t.bind({click:Atalasoft.Utils.__sp,mousedown:Atalasoft.Utils.__sp,mouseup:Atalasoft.Utils.__sp,change:A,uncheck:_,focusin:O,focusout:P})}return e._fields&&e._fields.push(t),Atalasoft.Utils.Browser.Explorer&&Atalasoft.Utils.Browser.Version<=9&&t.data("ataladata",{}),e.append(t),t}function w(){null!==M&&(W.selectable?(X.isBound("selectable")||(j.bind(X.selectable),X.bound("selectable")),W.movable&&!X.isBound("movable")?(j.bind(X.movable),X.bound("movable")):!W.movable&&X.isBound("movable")&&(j.unbind(X.movable),X.unbound("movable")),Atalasoft.Utils.Browser.Features.Touch&&(W.resizable&&!X.isBound("resizable")?(j.bind(X.resizable),X.bound("resizable")):!W.resizable&&X.isBound("resizable")&&(j.unbind(X.resizable),X.unbound("resizable")))):!W.selectable&&X.isBound("selectable")&&(j.unbind(X.selectable),X.unbound("selectable"),j.unbind(X.movable),X.unbound("movable"),j.unbind(X.resizable),X.unbound("resizable")))}function z(){var e=W.fieldname.lastIndexOf(".");return e>=0?W.fieldname.substr(0,e):null}function E(){var e=W.fieldname.lastIndexOf(".");return e>=0?W.fieldname.substr(e+1):W.fieldname}function A(e){switch(W.type){case"button":break;case"textbox":case"signature":W.text.value=this.value;var t=z(W);if(H.multiviewFields.hasOwnProperty(t)){var n=H.multiviewFields[t];for(var i in n)if(n.hasOwnProperty(i)){var a=n[i];if(a!==V){var o=a.get();o.text.value=this.value,a.updateView()}}}break;case"checkbox":W.checked=this.checked,W.group&&W.checked&&(R('input[name="'+W.group+'"]').trigger("uncheck"),W.checked=!0,this.checked=!0);break;case"radio":W.group&&R('input[name="'+W.group+'"]').trigger("uncheck"),W.checked=this.checked;break;case"choice":var r=[];if("undefined"!=typeof e.target.selectedOptions)r=e.target.selectedOptions;else if(e.target.multiple)for(var l=0;l<e.target.options.length;l++)e.target.options[l].selected&&r.push(e.target.options[l]);else e.target.selectedIndex>=0&&r.push(e.target.options[e.target.selectedIndex]);for(var s in W.items)if(W.items.hasOwnProperty(s)){var u=W.items[s];u.checked=!1;for(var c in r)if(r.hasOwnProperty(c)){var d=r[c];d.value===u.value&&(u.checked=!0)}}}}function _(e){"checkbox"===e.target.type&&(e.target.checked=!1),W.checked=!1}function O(){U(!0),u({type:"fieldfocusin",field:V})}function P(){U(!1),u({type:"fieldfocusout",field:V})}function B(e){e&&(Z=k(e),Z.zoom=q,S(),u({type:"viewchanged",fieldview:Z})),u("repaint")}function S(){if(Z){if(W.hidden||W.noview)return Z.hide(),void 0;Z.show();var e=R.extend({},F(),T());Z.css(e),I(),N(),"textbox"===W.type?U(Z.is(":focus")):"button"===W.type&&Z.text(W.text.value)}}function T(){var e=W.border&&"underline"===W.border.style;return{backgroundColor:W.backgroundcolor,color:W.color||W.text.font.color,borderStyle:W.border&&W.border.style&&!e?W.border.style:"none",borderBottomStyle:e?"solid":"inherit",borderColor:W.border?W.border.color:null,fontFamily:W.text.font.family,fontStyle:W.text.font.italic?"italic":W.text.font.oblique?"oblique":"normal",fontWeight:W.text.font.bold?"bold":"",textAlign:W.text.align}}function F(){var e=H.getViewerTransform(J),t=C(e,W.x,W.y),n=C(e,W.x+W.width,W.y+W.height),i=H.getZoom(J),a=W.width*i,o=W.height*i,r={x:(t.x+n.x-a)/2,y:(t.y+n.y-o)/2},l=H.getPageRotation(J)+W.rotation,s="rotate("+l+"deg)",u={left:Math.round(r.x)+"px",top:Math.round(r.y)+"px",width:a+"px",height:o+"px","max-width":a+"px","max-height":o+"px"},c=0!==l?Atalasoft.Utils.__htmlTransformStyle(s):Atalasoft.Utils.__htmlTransformStyle("");return R.extend(u,c),("textbox"===W.type||"signature"===W.type)&&(u.cursor=l%180===0?"text":"vertical-text"),u.visibility=Atalasoft.Utils.Browser.Explorer8&&l%180!==0?"hidden":"visible",u}function U(e){"textbox"===W.type&&(e||(W.text.value?Z.val()!==W.text.value&&Z.val(W.text.value):Z.val(W.text.defaultvalue)))}function I(){H.highlighted?(Z.addClass("atala-ui-form-highlight"),W.required?Z.addClass("atala-ui-form-required"):Z.removeClass("atala-ui-form-required")):Z.removeClass("atala-ui-form-highlight")}function N(){W.readonly?Z.attr("readonly","readonly"):Z.removeAttr("readonly")}function q(e){e=e||H.getZoom(J),Z.css({fontSize:Math.round((W.text.font.size||12)*e*(H.dpi/96)),borderWidth:W.border?Math.round(W.border.width*e):0}),W.text&&W.text.align&&Z.css({paddingLeft:W.text.leftPadding*e+"px",paddingRight:W.text.rightPadding*e+"px"}),S()}function C(e,t,n){return{x:e.x(t,n),y:e.y(t,n)}}var R=Atalasoft.$,H=t,V=this,j=R({}),M=null,Z=null,D=null,J=n,W={type:"",backgroundcolor:"",color:null,fieldname:"",hidden:!1,isfieldrequired:!1,items:null,locked:!1,norotate:!1,noview:!1,nozoom:!1,readonly:!1,required:!1,x:0,y:0,width:0,height:0,rotation:0,border:{color:"#000",style:"none",radius:{vertical:0,horizontal:0},width:0},text:{value:null,align:"left",font:{bold:!1,italic:!1,strike:!1,underline:!1,color:"black",family:"Arial",size:12,paddingtop:0,linespacing:0},ismultiline:!1,ispassword:!1,isrichtext:!1,scrollable:!1,maxlength:0,maximumfieldheight:-1,preserveoverflow:!1}},L={button:{},checkbox:{checked:!1,group:null},radio:{checked:!1,group:null},textbox:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},signature:{text:{leftPadding:2,rightPadding:2,preserveoverflow:!1}},choice:{multiline:!1}},X={};return i(),a(),V.dispose=r,V.bind=l,V.unbind=s,V.trigger=u,V.set=c,V.get=d,V.setPageIndex=g,V.getClonedData=h,V.getObject=p,V.getEventObject=x,V.getZoom=function(){return H.zoom},V.stringify=b,V.getJSON=b,V.getParentName=z,V.getName=E,V.repaint=B,V.updateView=S,V.zoom=q,V},Atalasoft.Forms.Field.__staticInitOccured=!1;
"use strict";/**
 * WebDocuemntViewer PDF Forms API.
 * @class
 * @inner
 * @name FormController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 * @ignore
 */
Atalasoft.Forms.FormController=function(e,i,t){function l(){ti.bind({pagerecycled:h,pageshown:p,zoomchanged:r,pagerotated:F}),li._state.initialized?n():ti.bind({initialized:n})}function n(){fi=!0}function o(){ii=null,ti=null,li=null,oi=null,ri=null,di.fields.length=0,di.multiviewFields=null,di.activepage=null,di.activefield=null}function f(){"Atalasoft.Controls.WebDocumentViewer"===ti.typeOf&&ei.extend(ti,ni)}function r(){}function d(e){if(e instanceof jQuery){e._form=li.createDiv(e),e._form.css({position:"absolute",zIndex:4}),e._form._fields=[],e._form._page=e;var i=function(){w(e)};return e.bind("mousedown",i),Atalasoft.Utils.Browser.Features.Touch&&e.bind("touchstart",i),e.bind({pageresize:function(i){i.page=e,_(i)},pagezoom:function(i){i.page=e,y(i)}}),!0}return!1}function a(e,i,t){if(null==e&&"number"==typeof i&&(i=s(i)),i=i||[],null==t?t=di.fields.length:0>t&&(t=0),t>di.fields.length){var l=di.fields.length;di.fields[t]=i;for(var n=l;n<di.fields.length;++n)di.fields[n]||(di.fields[n]=[])}else di.fields.splice(t,0,i)}function s(e){return e<di.fields.length?di.fields.splice(e,1)[0]:null}function u(e,i){a(null,s(e),i)}function c(e){return e instanceof jQuery?(e._form&&(e._form._fields=null,e._form._page=null,e._form=null),!0):!1}function g(e,i){if(e<di.fields.length&&di.fields[e]&&di.fields[e].length){var t;m(i);for(var l=0;l<di.fields[e].length;l++)t=di.fields[e][l],t.setPageIndex(e),t.repaint(i._form)}}function m(e){e._form&&e._form._fields&&(e._form._fields.length=0,e._form.empty())}function p(e){g(e.index,e.page)}function v(){null!=ci.field&&ci.field.getObject()[0].blur()}function h(e){e.page._form&&m(e.page)}function _(e){b(e.page)}function w(e){di.activepage=e}function y(e){for(var i in e.page._form._fields)e.page._form._fields.hasOwnProperty(i)&&e.page._form._fields[i].zoom(li.getPageScale(e.index))}function F(e){b(e.page)}function b(e){if(e&&di.fields.length&&di.fields[e._index])for(var i=0;i<di.fields[e._index].length;i++)di.fields[e._index][i].updateView()}/**
    * Creates a field on the desired page with the given field data.
    * @param fConfig: object, Key value pairs representing field data.
    * @param pgNum: number, The zero based index of the page the field should be created on.
    * @param callback: function, Function to be called when the operation has completed.
    * @returns object, Key value pairs representing field data.
    */
function x(e,i,t){var l=B(e,i,t).getClonedData();return ti.trigger({type:gi.fieldcreate,field:l}),l}/**
    * Deletes a field on the given z-index and zero based page index.
    * @param pgNum: number, Zero based page index the field is located on.
    * @param fieldIndex: number, Zero based z-index of the field.
    */
function A(e,i){I(i,e)}/**
    * Gets an array of field data objects located on the given zero based page index.
    * @param pageNum: number, Zero based page index the fields are located on.
    * @returns array: Array of field data objects on the given page index. 
    */
function P(e){var i=[];if(0===di.fields.length||"undefined"==typeof di.fields[e])return i;for(var t=0;t<di.fields[e].length;t++)i[t]=di.fields[e][t].getClonedData();return i}/**
    * Inserts a form from the source URL and index into the given page index.
    * @param sourceUrl: string, Url of the desired form.
    * @param sourceIndex: number, Zero based page index the form is copied from.
    * @param index: number, Zero based page index the form is to be inserted into.
    * @param callback: function, Function to be called when the operation has completed.
    */
function k(e,i,t,l){a(e,i,t),"function"==typeof l&&l(),ti.trigger({type:gi.forminserted,srcurl:e,srcindex:i,index:t}),ti.trigger(gi.formschanged)}/**
    * Removes a form from the given page index.
    * @param index: number, Zero based page index of the form to be removed.
    * @param callback: function, Function to be called when the operation has completed.
    */
function O(e,i){s(e),"function"==typeof i&&i(),ti.trigger({type:gi.formremoved,index:e}),ti.trigger(gi.formschanged)}/**
    * Moves a form from one page index to another.
    * @param sourceIndex: number, Zero based page index of the form to be moved.
    * @param destIndex: number, Destination zero based page index.
    * @param callback: function, Function to be called when the operation has completed.
    */
function z(e,i,t){u(e,i),"function"==typeof t&&t(),ti.trigger({type:gi.formmoved,srcindex:e,destindex:i}),ti.trigger(gi.formschanged)}function C(){var e={};return ei.extend(!0,e,{data:di,pages:oi,viewport:ri}),e}function D(e){e&&(e._fields?ei.isArray(e._fields)&&(di.fields=e._fields):e._fields=di.fields)}function U(){if(di.fields.length>0){if(di.fields.length=0,oi)for(var e=0;e<oi.length;e++)m(oi[e]);ti.trigger({type:"formscleared"})}}function B(e,i,t){var l={};e&&e.type&&ai[e.type]&&ei.extend(!0,l,ai[e.type]),ei.extend(!0,l,e);var n=new Atalasoft.Forms.Field(l,di,i);return"undefined"==typeof di.fields[i]&&(di.fields[i]=[]),di.fields[i].push(n),li.redrawVisiblePages(),"function"==typeof t&&t(n),W(n),n}function I(e,i){var t=di.fields[i].splice(e,1)[0];di.activepage&&di.activepage._form._fields.splice(e,1),t.dispose(),ti.trigger({type:"fielddeleted",page:i,index:e})}function V(e){e&&(e instanceof jQuery||(e=ei(e)),ri=e)}function j(e,i,t){return si?null:(e&&e.type&&ai[e.type]&&ei.extend(!0,e,ai[e.type]),di.activefield&&null===di.activefield.getObject()&&N(),q(),di.activefield=new Atalasoft.Forms.Field(e,di,di.activepage?di.activepage._index:void 0),di.activefield.bind({drawn:L,cancelled:N}),"function"==typeof i&&(T=i),"function"==typeof t&&(R=t),di.activefield)}function T(){}function R(){}function q(){if(!ui){ri.bind("mousedown",H),Atalasoft.Utils.Browser.Features.Touch&&ri.bind("touchstart",H);for(var e=0;e<oi.length;e++)oi[e]._draw.toFront();ui=!0}}function E(){if(ui){ri.unbind("mousedown",H),Atalasoft.Utils.Browser.Features.Touch&&ri.unbind("touchstart",H);for(var e=0;e<oi.length;e++)oi[e]._draw.reset();ui=!1}}function H(e){si=!0,ri.unbind("mousedown",H),Atalasoft.Utils.Browser.Features.Touch&&ri.unbind("touchstart",H),ti.trigger({type:"fielddrawstart",field:di.activefield.getClonedData()}),di.activefield._pageindex=di.activepage._index,di.activefield.startDraw(e,di.activepage._form,{}),Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8&&di.activepage._draw.height(di.activepage.height())}function L(){J(di.activefield),Q(),Atalasoft.Utils.Browser.Explorer&&parseInt(Atalasoft.Utils.Browser.Version,10)<8&&di.activepage._draw.height("100%")}function N(){di.activefield.dispose(),di.activefield=null,si&&Q(!0)}function Q(e){si=!1,E(),ti.trigger({type:"fielddrawend",field:e?null:di.activefield.getClonedData(),cancelled:e?!0:!1})}function S(e){ci=e,ti.bind("scroll",v)}function G(){ti.unbind("scroll",v)}function J(e){var i=di.activepage,t=i?i._index:0;di.fields[t]?di.fields[t].push(e):di.fields[t]=[e],di.activefield.unbind({}),W(di.activefield),T({field:e}),T=function(){},ti.trigger({type:gi.fieldcreate,field:e.getClonedData()})}function W(e){function i(i){ti.trigger({type:gi[i.type],field:e.getClonedData()})}e.bind({interactstart:function(){di.activepage&&di.activepage._form===e.getObject().form||w(e.getObject().form._page),di.activefield=e},moved:i,resized:i,interactend:i,touchstart:i,touchmove:i,pinchmove:i,click:i,dblclick:i,rightclick:i,mousedown:i,mousedownleft:i,mousedownright:i,mousemove:i,mouseout:i,mouseup:i,mouseover:i,repaint:i,fieldfocusin:S,fieldfocusout:G})}function Z(){var e={},i=!1;for(var t in di.fields)if(di.fields.hasOwnProperty(t)&&di.fields[t].length>0){e[t]=[];for(var l in di.fields[t])di.fields[t].hasOwnProperty(l)&&(i=!0,e[t][l]=di.fields[t][l].get())}return i?JSON.stringify({forms:{fields:e}}):void 0}function $(e){var i=e.getParentName(),t=e.getName();t.indexOf("<~Atala_Unnamed_")>=0&&(di.multiviewFields.hasOwnProperty(i)?di.multiviewFields[i].push(e):di.multiviewFields[i]=[e])}function K(e,i,t,l,n){t=t||ti.config.documenturl;var o={type:"formdata",serverurl:e,query:"?atalaformdata=",method:"GET",data:{atala_formurl:i,atala_docurl:t,atala_a_ofs:l,atala_a_len:n},cancel:!1,info:{fields:[],length:n,error:void 0}};for(var f in o.data)o.data.hasOwnProperty(f)&&null===o.data[f]&&(o.data[f]=void 0);return o}function M(e,i,t){function l(i){void 0!==e.info.docIndex&&(i.offset=e.info.docIndex),Y(i),"function"==typeof t&&t.call()}"function"==typeof i&&(t=i,i=!1),i||U(),li.makeHandlerRequest(e,l,l)}function X(e,i,t,l,n,o,f){var r=Array.prototype.slice.call(arguments);f=r.pop(),"function"!=typeof f&&r.push(f),e=r.shift(),i=r.shift(),t=r.shift(),l=r.shift(),n=r.shift(),o=r.shift();var d=K(e,i,t,l,n);void 0!==o&&(d.info.docIndex=o),M(d,l>=0&&n>=1,f)}function Y(e){if(e){var i={type:"formsloaded"};if(e.dpi&&(di.dpi=e.dpi),e.forms&&e.forms.fields)for(var t=0;t<e.forms.fields.length;t++){e.offset=e.offset||0;var l=e.offset+t;di.fields[l]&&di.fields[l].length>0?di.fields[l].length=0:di.fields[l]=[];var n=e.forms.fields[t];if(n&&n.length>0)for(var o=0;o<n.length;o++)di.fields[l][o]=new Atalasoft.Forms.Field(n[o],di,l),$(di.fields[l][o]),ti.trigger({type:gi.load,field:di.fields[l][o].getClonedData()}),W(di.fields[l][o])}else e.error&&(i.error=e.error);ti.trigger(i)}}var ei=Atalasoft.$,ii=this,ti=e,li=i,ni={forms:{events:{/** Triggers when the user uses the mouse to click on a field. Populated keys: e.field */
fieldclicked:null,/** Triggers when the user uses the mouse to create a field. Populated keys: e.field */
fieldcreated:null,/** Triggers when the user uses the mouse to double-click on a field. Populated keys: e.field */
fielddoubleclicked:null,/** Triggers when a field is loaded into the document. Populated keys: e.field */
fieldloaded:null,/** Triggers when the user has depressed a mouse button on a field. Populated keys: e.field */
fieldmousedown:null,/** Triggers when the user has depressed the left mouse button on a field. Populated keys: e.field */
fieldmousedownleft:null,/** Triggers when the user has depressed the right mouse button on a field. Populated keys: e.field */
fieldmousedownright:null,/** Triggers when the user moves the mouse pointer over a field. Populated keys: e.field */
fieldmousemove:null,/** Triggers when the user has moved the mouse pointer out of the bounds of the field. Populated keys: e.field */
fieldmouseout:null,/** Triggers when the user has moved the mouse pointer into the bounds of the field. Populated keys: e.field */
fieldmouseover:null,/** Triggers when the user has released a mouse button on a field. Populated keys: e.field */
fieldmouseup:null,/** Triggers when a field has been moved. Populated keys: e.field */
fieldmoved:null,/** Triggers when a pinch gesture has been detected on a field. Populated keys: e.field */
fieldpinchresize:null,/** Triggers when a field has been repainted. Populated keys: e.field */
fieldrepainted:null,/** Triggers when a field has been resized. Populated keys: e.field */
fieldresized:null,/** Triggers when the user right clicks on a field. Populated keys: e.field */
fieldrightclicked:null,/** Triggers when a touch end event has finished on a field. Populated keys: e.field */
fieldtouchend:null,/** Triggers when a touch move event is happening on a field. Populated keys: e.field */
fieldtouchmove:null,/** Triggers when a touch event has started on a field. Populated keys: e.field */
fieldtouchstart:null},createOnPage:x,deleteFromPage:A,getFromPage:P,insertForm:k,moveForm:z,removeForm:O}};if(Atalasoft.Forms.FormController.__exposedApi=ni.forms,!e)return null;var oi=i._pages,fi=!1,ri=null,di={fields:[],multiviewFields:{},activepage:null,activefield:null,highlighted:!0,readonly:t?!0:!1,getZoom:li.getPageScale,getViewerTransform:li.getViewerTransform,getPageRotation:li.getPageRotation,dpi:96},ai={},si=!1,ui=!1,ci=null,gi={click:"fieldclicked",dblclick:"fielddoubleclicked",touchstart:"fieldtouchstart",interactend:"fieldtouchend",touchmove:"fieldtouchmove",pinchmove:"fieldpinchresize",rightclick:"fieldrightclicked",mousedown:"fieldmousedown",mousedownleft:"fieldmousedownleft",mousedownright:"fieldmousedownright",mousemove:"fieldmousemove",mouseout:"fieldmouseout",mouseup:"fieldmouseup",mouseover:"fieldmouseover",create:"fieldcreated",load:"fieldloaded",moved:"fieldmoved",resized:"fieldresized",repaint:"fieldrepainted"};ii.dispose=o,ii.addFormLayer=d,ii.insertForm=a,ii.removeForm=s,ii.moveForm=u,ii.removeFormLayer=c,ii.showLayer=g,ii.__exposedApi=ni.forms,ii.__getDebugInfo=C,ii.__linkForms=D,ii.clear=U,ii.createField=B,ii.deleteFieldOnPage=A,ii.getFieldsFromPage=P,ii.setViewPort=V,ii.drawField=j,ii.stringifyChanges=Z,ii.createHandlerRequest=K,ii.makeHandlerRequest=M,ii.loadFormUrl=X,ii.loadForms=Y,f(),l()};
"use strict";/**
 * WebDocuemntViewer Text Layer operations API.
 * @class
 * @inner
 * @name TextController
 * @memberOf Atalasoft.Controls.WebDocumentViewer
 */
Atalasoft.Text.TextController=function(e,t,n){function r(){Gt.bind({pagerecycled:x,pageshown:v,zoomchanged:c,documentchanged:w}),Wt.bind({textselectstart:L,textselectmove:O,textselectend:k,textselectcopy:U}),It._state.initialized?o():Gt.bind({initialized:o})}function o(){$t=!0}function i(){Gt.unbind({pagerecycled:x,pageshown:v,zoomchanged:c,documentchanged:w}),Wt.unbind({textselectstart:L,textselectmove:O,textselectend:k}),Et=null,Gt=null,Kt=null,Yt.searchQuery=null,Yt.selectionCache=[],$t=!1,Yt.activepage=null}function a(e){return It._controllers.document.getPageText(e)}function s(){"Atalasoft.Controls.WebDocumentViewer"===Gt.typeOf&&Vt.extend(Gt,Ht)}/**
    * jQuery trigger shortcut
    * @returns object, WebDocumentViewer
    */
function l(e){return Gt.trigger(e),Et}function u(){return Wt.trigger.apply(Wt,arguments),Et}function g(e,t){Gt.trigger({type:"throwerror",name:e,msg:t})}function c(){}function d(e){return e instanceof jQuery?(e._text&&(e._text._page=null,e._text=null),!0):!1}function h(e){return e instanceof jQuery?(e._text=It.createDOM("canvas",e),e._text.css({width:"100%",height:"100%",position:"absolute",zIndex:0}),e._text.attr("width",e.width()).attr("height",e.height()),e._text._page=e,e.bind(Atalasoft.Utils.Browser.Features.Touch?"touchstart":"mousedown",function(){b(e)}),e.bind({pageresize:function(t){t.page=e,y(t)},pagezoom:function(t){t.page=e,m(t)}}),!0):!1}function f(e,t){if(t._text){p(t);var n=a(e);if(n){var r=yt(t,n);if(r&&n.searchResult&&j(r,n),r&&n.selection)for(var o=n.selection,i=0;i<o.regions.length;i++)for(var s=0;s<o.regions[i].lines.length;s++)for(var l=o.regions[i].lines[s],u=0;l.words&&u<l.words.length;u++){var g=l.words[u];et(r,g.bounds.x,g.bounds.y,g.bounds.width,g.bounds.height,Zt.selection)}}}}function x(e){p(e.page)}function v(e){f(e.index,e.page)}function p(e){e._text&&Q(e._index)}function y(e){e.page._text.attr("width",e.width).attr("height",e.height),e.page._text.width(e.width),e.page._text.height(e.height),f(e.index,e.page)}function b(e){Yt.activepage=e}function m(e){y(e)}function w(){if(Yt.searchQuery&&Yt.searchQuery.iterator){Yt.searchQuery.iterator.dispose(),Yt.searchQuery=null,gt();for(var e=0;e<Xt.length;e++)f(Xt[e]._index,Xt[e])}}function _(e){var t=a(e);return!(!t||t.loading)}function P(e,t,n,r,o,i){var a=Vt.Deferred(),s=Array.prototype.slice.call(arguments,1);return s.length>2&&"function"==typeof s[s.length-2]?(i=s.pop(),o=s.pop()):s.length>1&&"function"==typeof s[s.length-1]&&(o=s.pop()),t=s[0],n=s[1],r=s[2],ft(e).done(function(e,i){var s=i.bounds;void 0===t||!i.regions[t]||void 0!==n&&i.regions[t].lines[n]?(t=i.regions[t],void 0!==n&&t.lines[n]&&(n=t.lines[n],s=Z(n.bounds,t),void 0!==r&&n.words[r]&&(s=Z(n.words[r].bounds,t))),W(e,Ft(s.x,s.y),e,Ft(s.right,s.bottom))):I(e,t);var l=function(){Gt.config.mousetool.text.hookcopy&&It._dom.viewport.focus(),a.resolve(),o&&"function"==typeof o&&o()};It.isPageInView(e)?l():Gt.showPage(e,l)}).fail(function(){a.reject(),i&&"function"==typeof i&&i()}),a.promise()}function T(e,t,n){var r=Vt.Deferred();return ft(e).done(function(){var n="",o=a(e);if(o)for(var i=0;i<o.regions.length;i++){var s=N(o.regions[i]);s&&(n+=s)}r.resolve(n),t&&"function"==typeof t&&t(n)}).fail(function(){r.reject(),n&&"function"==typeof n&&n()}),r.promise()}function C(e){if(void 0===e||null===e)for(var t=0;t<It._controllers.document.getPageCount();t++)C(t);var n=a(e);n&&(It._controllers.document.updatePageText(e,null),Yt.selectionCache[e]&&(Yt.selectionCache[e]=null,It.findPageFromIndex(e)&&Q(e,null)))}function R(e,t,n){return C(e),ft(e).done(function(){t&&"function"==typeof t&&t(e)}).fail(function(){n&&"function"==typeof n&&n(e)})}function M(){var e={};return Vt.extend(!0,e,{data:Yt,pages:Xt,viewport:Kt}),e}function A(){}function S(){if(Yt.searchQuery=null,Yt.selectionCache=[],It._controllers.document.initDocumentText({pages:[]}),Xt)for(var e=0;e<Xt.length;e++)p(Xt[e])}function z(e){e&&(e instanceof jQuery||(e=Vt(e)),Kt=e)}function D(){for(var e=0;e<It._controllers.document.getPageCount();e++){var t=a(e);t&&t.selection&&(Q(e,t,!0),t.selection=null)}Yt.selectionCache.length=0}/** Clears the text selection */
function Q(e,t,n){for(var r=0;r<Xt.length;r++)if(!isFinite(e)||Xt[r]._index===e){t=isFinite(e)&&r===e?t:a(Xt[r]._index);var o=yt(Xt[r],t);if(o){var i=It.getSourcePageSize(Xt[r]._index,t?t.rotation:0);o.clearRect(0,0,i.width,i.height),n&&j(o,t)}}}function j(e,t){if(t&&t.searchResult)for(var n=0;n<t.searchResult.length;n++){var r=t.searchResult[n].bounds;et(e,r.x,r.y,r.width,r.height,Zt.highlight)}}function L(e){var t=e.eventData,n=t.page,r=t.point;D();var o=a(n);o&&(o.selection=st(t.point,t.point),t.interval&&Yt.origin&&Yt.originPage>=0?(W(Yt.originPage,Yt.origin,n,r),t.complete=!0):(t.line||t.word)&&Math.abs(t.point.x-Yt.origin.x)<10&&Math.abs(t.point.y-Yt.origin.y)<10?(E(n,r,t.line,t.word),t.complete=!0):(Yt.origin=t.rectangular?t.viewerPoint:t.point,Yt.originPage=n,Yt.rectangular=t.rectangular)),t.handled=!0}function O(e){var t=e.eventData,n=t.page,r=Yt.rectangular?t.viewerPoint:t.point,o=a(n);if(o)if(o.loading)t.cursor=Atalasoft.Utils.MouseToolCursor.Wait;else{if(0===o.regions.length)return t.handled=!1,!0;var i=It.getPageRotation(n)+o.rotation;if(o.rotatedRegions)for(var s=0;s<o.rotatedRegions.length;s++)if(Qt(t.point,o.rotatedRegions[s].bounds)){i+=o.rotatedRegions[s].rotation;break}t.cursor=i%180===0?Atalasoft.Utils.MouseToolCursor.Text:Atalasoft.Utils.MouseToolCursor.VerticalText,t.selecting&&en(Yt.originPage,Vt.extend({},Yt.origin),n,r,Yt.rectangular)}return t.handled=!0,!1}function k(e){var t=e?e.eventData:{},n=!1;for(var r in Yt.selectionCache)if(Yt.selectionCache.hasOwnProperty(r)&&Yt.selectionCache[r].selection&&Yt.selectionCache[r].selection.regions.length){n=!0;break}n&&l({type:"textselected"}),Yt.rectangular=!1,t.handled=!0}function U(){q()}function q(){var e=It.createDiv();if(e[0]){var t=new Clipboard("wdv-dummy-selection-trigger",{text:function(){return B()}});t.on("success",function(){t.destroy()}),t.on("error",function(){t.destroy(),g("TextCopyError")}),t.onClick({currentTarget:e[0]})}}function B(){for(var e="",t=0;t<Yt.selectionCache.length;t++)if(Yt.selectionCache[t]){var n=Yt.selectionCache[t].selection;if(n&&n.regions&&n.regions.length>0)for(var r=0;r<n.regions.length;r++){var o=N(n.regions[r]);o&&(e+=o)}}return e}function F(e){for(var t="",n=0;e.words&&n<e.words.length;n++)if(Ut(e.words[n],n>=1?e.words[n-1]:null)&&(t+=" "),e.words[n].text)t+=e.words[n].text;else if(e.words[n].glyphs&&e.words[n].glyphs.length)for(var r=0;r<e.words[n].glyphs.length;r++)t+=e.words[n].glyphs[r].text;return t}function N(e){for(var t="",n=0;n<e.lines.length;n++){var r=F(e.lines[n]);r&&(t+=V(r))}return t}function V(e){return e+"\n"}function E(e,t,n,r){var o=a(e);if(o&&(n||r))for(var i=0;i<o.regions.length;i++){var s=o.regions[i];if(Qt(t,s.bounds))for(var l=0;l<s.lines.length;l++){var u=s.lines[l];if(Qt(t,u.bounds)){var g={region:i,line:l,bounds:u.bounds};if(r){for(var c=0;c<u.words.length;c++)if(Qt(t,u.words[c].bounds))return g.word=c,g.bounds=u.words[c].bounds,G(e,g),void 0}else if(n)return G(e,g),void 0}}}}function G(e,t){var n=a(e);if(n&&t&&n.regions[t.region]){D();var r=n.regions[t.region],o=yt(pt(e),n);if(Vt.isNumeric(t.line)&&r.lines[t.line]){for(var i=r.lines[t.line],s={words:[]},l={lines:[s],bounds:Vt.extend({},r.bounds)},u=Vt.isNumeric(t.word)&&i.words[t.word]?t.word:0,g=Vt.isNumeric(t.endWord)&&i.words[t.endWord]?t.endWord:Vt.isNumeric(t.word)?u:i.words.length-1,c=u;g>=c;++c){var d=i.words[c],h=!!d.glyphs.length;h&&c===u&&Vt.isNumeric(t.glyph)?d=X(d,t.glyph,u===g&&Vt.isNumeric(t.endGlyph)?t.endGlyph:d.glyphs.length-1):h&&c===g&&Vt.isNumeric(t.endGlyph)&&(d=X(d,0,t.endGlyph)),s.words.push(Vt.extend({},d)),o&&et(o,d.bounds.x,d.bounds.y,d.bounds.width,d.bounds.height)}n.selection=st(Ft(t.bounds.x,t.bounds.y),Ft(t.bounds.right,t.bounds.bottom)),at(n.selection.regions,l),Yt.selectionCache[e]=n}else I(e,t.region)}}function I(e,t){D();var n=a(e);if(n&&n.regions[t]){var r=n.regions[t],o=yt(pt(e),n);n.selection=st(Ft(r.bounds.x,r.bounds.y),Ft(r.bounds.right,r.bounds.bottom),!1);var i=$(o,r,n.selection.origin,n.selection.point);i&&i.lines.length>0&&(at(n.selection.regions,i),Yt.selectionCache[e]=n)}}function W(e,t,n,r,o){var i=Math.min(e,n),a=Math.max(e,n);for(var s in Yt.selectionCache)if(Yt.selectionCache.hasOwnProperty(s)){var l=parseInt(s,10);(i>l||l>a)&&(Q(l,Yt.selectionCache[l],!0),Yt.selectionCache[l].selection=null)}for(var u=o?Math.min(t.x,r.x):0,g=Ft(u,0),c=i;a>=c;c++){var d=It.getSourcePageSize(c);o&&(d=Vt.extend({},It.getPageSize(c)),d.width*=It.getPageScale(c),d.height*=It.getPageScale(c));var h,f,x=o?Math.max(t.x,r.x):d.width,v=Ft(x,d.height);i===a?(h=t,f=r):c===e?(h=t,f=c===i?v:g):c===a||c===i?(f=r,h=c===i?v:g):(h=g,f=v);var p=pt(c);o?Y(c,Ft(u,h.y),Ft(x,f.y),p):H(c,h,f,p)}}function H(e,t,n,r){var o=a(e);if(o&&tt(o,t,n,!1)&&o.regions.length>0){r&&r._text&&Q(e,o,!0),o.selection=st(t,n,!1);var i=J(o,t,n);if(i&&i.start&&i.end)for(var s=yt(r,o),l=0;l<o.regions.length;l++){var u=o.regions[l],g=null;u===i.start?g=u===i.end?$(s,u,i.startPoint,i.endPoint):$(s,u,i.startPoint,Bt(u)):u===i.end?g=$(s,u,qt(u),i.endPoint):nt(u,i.start,i.end)&&(g=$(s,u,qt(u),Bt(u))),g&&g.lines&&g.lines.length>0&&(at(o.selection.regions,g),Yt.selectionCache[e]=o)}}}function J(e,t,n){for(var r=Ft(Math.min(t.x,n.x),Math.min(t.y,n.y)),o=Ft(Math.max(t.x,n.x),Math.max(t.y,n.y)),i=Mt({x:r.x,y:r.y,width:o.x-r.x,height:o.y-r.y}),a=Mt({x:0,y:r.y,width:e.bounds.width,height:o.y-r.y}),s=t,l=n,u=null,g=null,c=null,d=null,h=0;h<e.regions.length&&(!u||!g);h++){var f=e.regions[h].bounds;jt(a,f)&&(c=!c||it(e.regions[h],c)?e.regions[h]:c),jt(i,f)&&(u=!u&&Qt(s,e.regions[h].bounds)?e.regions[h]:u,g=!g&&Qt(l,e.regions[h].bounds)?e.regions[h]:g,d=!d||rt(e.regions[h],d)?e.regions[h]:d)}if(u&&g){if(it(g,u)){var x=g;g=u,u=x,s=n,l=t}}else if(c&&d){var v;u?(v=ot(l),it(u,v)?(g=d,l=null):(g=u,l=s,u=c,s=null)):g?(v=ot(s),rt(g,v)?(u=c,s=null):(u=g,s=l,g=d,l=null)):(u=c,g=d,l=null,s=null),s=s||qt(u),l=l||Bt(g)}return{start:u,startPoint:s,end:g,endPoint:l}}function $(e,t,n,r){var o={lines:[],bounds:Vt.extend({},t.bounds)},i=a(t.page).bounds;if(0!==t.rotation&&(n=Atalasoft.Utils.rotatePoint(n,i,360-t.rotation),r=Atalasoft.Utils.rotatePoint(r,i,360-t.rotation)),St(n.y,r.y)){var s=n;n=r,r=s}for(var l=0;l<t.lines.length;l++){var u=t.lines[l],g={words:[]},c=Rt(u,i,t.rotation),d=St(c.y,n.y)&&At(c.bottom,r.y),h=!d&&Dt(n.y,c.y,c.bottom),f=!d&&Dt(r.y,c.y,c.bottom);if(h&&l>1){var x=Rt(t.lines[l-1],i,t.rotation);h=!Dt(n.y,x.y,x.bottom),d=!h&&!f}if(f&&l<t.lines.length-1){var v=Rt(t.lines[l+1],i,t.rotation);f=!Dt(r.y,v.y,v.bottom),d=!h&&!f}if(d||h||f){for(var p=0;u.words&&p<u.words.length;p++){var y=u.words[p],b=Rt(y,i,t.rotation),m=y.glyphs&&y.glyphs.length,w=d;if(!w){if(h&&f){if(St(n.x,r.x)){var _=n;n=r,r=_}w=St(m?b.x:b.right,n.x)&&At(m?b.right:b.x,r.x)}else h?w=St(m?b.x:b.right,n.x):f&&(w=At(m?b.right:b.x,r.x));if(!w&&m){var P=null;if(h&&Dt(n.x,b.x,b.right)){var T=f?Math.min(b.right,r.x):b.right;P=K(y,n.x,T)}if(f&&Dt(r.x,b.x,b.right)){var C=h?Math.max(b.x,n.x):b.x;P=K(y,C,r.x)}P&&(y=P,w=!0)}}w&&(g.words.push(Vt.extend({},y)),e&&et(e,y.bounds.x,y.bounds.y,y.bounds.width,y.bounds.height))}g.words.length>0&&o.lines.push(g)}}return o}function K(e,t,n){for(var r=null,o=null,i=0;i<e.glyphs.length;++i){var a=e.glyphs[i].normalizedBounds;if(null===r&&St(a.right,t)&&(r=i),!At(a.x,n))break;o=i}return null!==r&&null!==o?X(e,r,o):null}function X(e,t,n){var r={glyphs:[],text:"",omitSpace:e.omitSpace};if(t>=0&&n>=t&&e.glyphs[n]){r.glyphs=e.glyphs.slice(t,n+1);var o=e.glyphs[t].bounds,i=e.glyphs[n].bounds,a=Math.min(o.x,i.x),s=Math.min(o.y,i.y),l=Math.max(o.right,i.right),u=Math.max(o.bottom,i.bottom);return r.bounds={x:a,y:s,width:Math.abs(l-a),height:Math.abs(u-s)},Mt(r.bounds),r}return null}function Y(e,t,n,r){var o=a(e);if(o&&tt(o,t,n,!0)&&o.regions.length>0){r&&r._text&&Q(e,o,!0);var i=kt(e,o,t),s=kt(e,o,n);o.selection=st(t,n,!0);var l=Mt({x:Math.min(i.x,s.x),y:Math.min(i.y,s.y),width:Math.abs(s.x-i.x),height:Math.abs(s.y-i.y)});if(l=Ot(l,o.bounds)){for(var u,g=0;g<o.regions.length;g++)if(jt(l,o.regions[g].bounds)){u=u||yt(r,o);for(var c={lines:[],bounds:Vt.extend({},o.regions[g].bounds)},d=0;d<o.regions[g].lines.length;d++){for(var h=o.regions[g].lines[d],f={words:[]},x=0;h.words&&x<h.words.length;x++){var v=h.words[x];if(jt(l,v.bounds)){var p=Mt(Atalasoft.Utils.rotateRect(l,o.bounds,(360-o.regions[g].rotation)%360)),y=v.normalizedBounds,b=St(y.x,p.x),m=At(y.right,p.right);b&&m||(v=K(v,Math.max(y.x,p.x),Math.min(y.right,p.right))),v&&(f.words.push(Vt.extend({},v)),u&&et(u,v.bounds.x,v.bounds.y,v.bounds.width,v.bounds.height))}}f.words.length>0&&c.lines.push(f)}c.lines.length&&at(o.selection.regions,c)}o.selection.regions.length&&(o.selection.bounds=l,Yt.selectionCache[e]=o)}}}function Z(e,t){if(t){if(t.rotation%180===0){var n=(e.bottom+e.y)/2;return Mt({x:e.x,y:n,width:e.width,height:0})}var r=(e.right+e.x)/2;return Mt({x:r,y:e.y,width:0,height:e.height})}return null}function et(e,t,n,r,o,i){e&&(e.clearRect(t,n,r,o),i=i||Zt.selection,e.fillStyle=i.color,e.globalAlpha=i.alpha,e.fillRect(t,n,r,o))}function tt(e,t,n,r){return r=!!r,!e.selection||!zt(e.selection.origin,t)||!zt(e.selection.point,n)||r!==e.selection.rectangular}function nt(e,t,n){return rt(e,t)&&it(e,n)}function rt(e,t){if(St(e.bounds.bottom,t.bounds.y)){if(Lt(e.bounds,t.bounds))return e.bounds.x>t.bounds.x;var n=Ot(e.bounds,t.bounds);if(n)return n.width/n.height>=1?St(e.bounds.y,t.bounds.y):St(e.bounds.x,t.bounds.x);if(St(e.bounds.y,t.bounds.bottom))return!0;if(At(e.bounds.bottom,t.bounds.y))return!1;if(St(e.bounds.x,t.bounds.x))return!0}return!1}function ot(e){var t=Mt({x:e.x,y:e.y,width:0,height:0});return{lines:[],bounds:t}}function it(e,t){return!rt(e,t)}function at(e,t){for(var n=0;n<e.length&&!it(t,e[n]);n++);Array.prototype.splice.call(e,n,0,t)}function st(e,t,n){return{origin:e,point:t,rectangular:!!n,regions:[]}}function lt(e,t,n){if("function"==typeof t&&(n=t,t=0),gt(),e&&e.length>2&&n){var r={sourceQuery:e,text:e.toLocaleLowerCase(),start:t};Yt.searchQuery=r;var o=new ut(r,n);return Yt.searchQuery.iterator=o,o}for(var i=0;i<Xt.length;i++)f(Xt[i]._index,Xt[i])}/**
     * Callback signature for {@link Atalasoft.Controls.WebDocumentViewer~TextController#search|text.search}, {@link Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#next|next}, {@link Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#prev|prev} methods.
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
     * WebDocuemntViewer Search Results Iterator.
     * @class
     * @inner
     * @name TextSearchIterator
     * @alias TextSearchIterator
     * @memberOf Atalasoft.Controls.WebDocumentViewer~TextController
     */
function ut(e,t){function n(){/**
             * Indicates whether search should be wrapped around when first or last document page is match is reached.
             * @name Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#wrap
             * @type {boolean}
             */
z.wrap=!0,Wt.bind("pagetextloaded",m),Gt.bind({pageshown:w}),setTimeout(function(){if(Xt.length&&R>=Xt[0]._index&&R<=Xt[Xt.length-1]._index)for(var n=0;n<Xt.length;n++){var o=a(Xt[n]._index);o&&!o.loading&&(o.searchResult=v(o,e.text),o.searchResult.length&&(f(Xt[n]._index,Xt[n]),Xt[n]._index===R&&(S=o.searchResult.length,M=R)))}r(t)},0)}function r(e){Q.push({action:s,args:[!0,_(e)]}),i()}function o(e){Q.push({action:s,args:[!1,_(e)]}),i()}function i(){if(!T&&Q.length){var e=Q.shift();e&&"function"==typeof e.action&&e.action.apply(z,e.args)}}function s(t,n){if(u()){var r=t?1:-1,o=a(M),i=o&&o.searchResult&&o.searchResult.length,l=t?A>=-1&&S-1>A:A>0&&S>=A;if(i&&l){A+=r;var g=o.searchResult[A];j=P(M,g),G(M,g);var c=o?o.rotation:0,h=It.getViewerTransform(M,c),f=Z(g.bounds,o.regions[g.region]),x=Ft(h.x(f.x,f.y),h.y(f.x,f.y));It.showPagePoint(M,x,Atalasoft.Utils.PageSelection.Center,function(){n(z,P(M,g))})}else T=T||d(e.text,M>=0?M+r:R,t).done(function(e,r){u()?e>=0&&r&&(M=e,S=r.searchResult.length,A=t?-1:S,s(t,n)):n(z,null)}).fail(function(){n(z,null)})}else n(z,null)}function l(){return e.sourceQuery}function u(){var t=Yt.searchQuery===e;return t||b(),t}function g(){return u()&&(T||Q.length>0)}function c(){if(u()&&j&&j.page>=0){var e=a(j.page);if(e&&e.regions[j.region]&&e.regions[j.region].lines[j.line])return F(e.regions[j.region].lines[j.line])}return null}function d(t,n,r,o,i){o=o||Vt.Deferred();var s;return u()&&setTimeout(function(){for(;n>=0&&n<It._controllers.document.getPageCount();n+=r?1:-1){var l=a(n);if(l&&!l.loading){if(l.searchResult=v(l,e.text),l.searchResult.length>0)return o.resolve(n,l),void 0}else{if(l&&l.loading&&l.promise)return h(t,n,r,o,i,l),void 0;if(!l){if(D[n])continue;return s=!0,x(t,n,r,o),void 0}}}return!z.wrap||s||i?(o.reject(),void 0):(0>n&&!r?n=It._controllers.document.getPageCount()-1:n>=It._controllers.document.getPageCount()&&r&&(n=0),d(t,n,r,o,!0),void 0)},0),o.promise()}function h(e,t,n,r,o,i){i.promise.then(function(){d(e,t,n,r,o)})}function x(e,t,n,r){var o=p(t,n);o.pages.length?y(e,o,C).done(function(t){if(null===t)if(u()){var i=o.pages[o.pages.length-1],s=i.hasOwnProperty("di")?i.di:i.i;d(e,s,n,r)}else r.reject();else{var l=a(t);r.resolve(t,l)}}).fail(function(){r.reject()}):r.reject()}function v(e,t){var n=t.length,r=[];if(e.searchResult)r=e.searchResult;else for(var o=0;o<e.regions.length;o++)for(var i=0;i<e.regions[o].lines.length;i++){for(var a=e.regions[o].lines[i],s=0,l=[],u="",g=0;g<a.words.length;g++){var c=a.words[g],d=c.glyphs&&c.glyphs.length;Ut(c,g>=1?a.words[g-1]:null)&&(u+=" ",++s);for(var h=0;h<(d?c.glyphs.length:c.text.length);h++)l[s++]={bounds:d?c.glyphs[h].bounds:c.bounds,region:o,line:i,word:g,glyph:I?h:-1},u+=(d?c.glyphs[h].text:c.text[h]).toLocaleLowerCase()}var f=0;do if(f=u.indexOf(t,f),f>=0){for(var x=l[f],v=Math.min(f+n-1,l.length);!l[v]&&v>f;)--v;var p=l[v],y=Mt({x:x.bounds.x,y:x.bounds.y,width:Math.abs(p.bounds.right-x.bounds.x),height:Math.abs(p.bounds.bottom-x.bounds.y)});r.push({bounds:y,region:x.region,line:x.line,word:x.word,glyph:x.glyph,endWord:p.word,endGlyph:p.glyph})}while(f++>=0)}return r}function p(e,t){for(var n=e,r=null,o=[];n>=0&&n<It._controllers.document.getPageCount()&&o.length<=20;n+=t?1:-1){var i=null,s=It._controllers.document.getPageDefinition(n),l=s.index;if(s.uri&&(i=s.uri),r!==i&&n!==e)break;r=i;var u={i:l};l!==n&&(u.di=n),o.push(u);var g=a(n);if(g&&!g.loading)break}var c={textUrl:r||Gt.config.documenturl,pages:o};return c}function y(e,t,n){var r=Vt.Deferred(),o={type:"pagetextsearch",serverurl:Gt.config.serverurl,query:"?pagetextsearch=",method:"POST",data:{atala_query:e,atala_docurl:t.textUrl,atala_maxcount:n||C,atala_pages:JSON.stringify(t.pages)},cancel:!1},i=function(e){if(u()){var t=-1;if(e&&e.length)for(var n=0;n<e.length;n++){var o=e[n],i=o.hasOwnProperty("di")?o.di:o.i,s=a(i);!s&&o.text&&(It._controllers.document.updatePageText(i,o.text),vt(o.text,o.text,i)),o.count<=0&&0>t?s?s.searchResult=[]:D[i]=[]:0>t&&o.count>0&&(t=i)}r.resolve(t>=0?t:null)}else r.reject()},s=function(){r.reject()};return It.makeHandlerRequest(o,i,s),r.promise()}function b(){Wt.unbind("pagetextloaded",m),Gt.unbind({pageshown:w}),D=[]}function m(t){var n=t.text,r=t.index;if(u()&&n&&(n.searchResult=v(n,e.text),D[r]&&Array.prototype.splice.call(D,r,1),n.searchResult.length)){var o=It.findPageFromIndex(r);o&&f(r,o)}}function w(t){if(u()&&t.page&&t.index>=0){var n=a(t.index);!n||n.loading||n.searchResult||setTimeout(function(){n.searchResult=v(n,e.text),f(t.index,t.page)},0)}}function _(e){return function(){T=null,e&&e.apply(this,arguments),i()}}function P(e,t){return{page:e,region:t?t.region:0,line:t?t.line:0,word:t?t.word:0}}var T,C=3,R=e.start||0,M=-1,A=-1,S=0,z=this,D=[],Q=[],j=P(-1);n(),/**
         * Advances current item to the next query match or adds operation to the queue in case if next match is currently awaited.
         * @param {TextSearchCallback} callback - function that that is called when next match is found.
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#next
         */
z.next=r,/**
         * Advances current item to the previous query match or adds operation to the queue in case if next match is currently awaited.
         * @param {TextSearchCallback} callback - Function that that is called when previous match is found.
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#prev
         */
z.prev=o,/**
        * Gets the query text for this iterator.
        * @returns {string}
        * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getQuery
        */
z.getQuery=l,/**
         * Indicates whether this iterator corresponds to the active search.
         *
         * If `false`, next/prev methods are always returning `null` match.
         * @returns {boolean}
         *
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isValid
         */
z.isValid=u,/**
         * Indicates whether this is executing background search.
         * If `true`, subsequent next/prev calls are stored into the search queue.
         *
         * Method could be used, for example, to determine whether search will be continued after particular callback call, and thus to hide or preserve search loading mask.
         *
         * @returns {boolean}
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#isSearching
         */
z.isSearching=g,/**
         * Returns the formatted text for the whole line containing current match.
         * @returns {string}
         *
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#getCurrentLineText
         */
z.getCurrentLineText=c,/**
         * Disposes the current iterator. Calling this method is optional. Abandoned iterators will be disposed automatically.
         * @ignore
         *
         * @function Atalasoft.Controls.WebDocumentViewer~TextController~TextSearchIterator#dispose
         */
z.dispose=b}function gt(){for(var e=[],t=0;t<It._controllers.document.getPageCount();t++){var n=a(t);n&&n.searchResult&&(n.searchResult.length&&(e[t]=!0),n.searchResult=null)}for(var r=0;r<Xt.length;++r)e[r]&&f(r,Xt[r]);Yt.searchQuery=null}function ct(e,t){var n={type:"textdata",serverurl:e,query:"?atalatextdata=",method:"GET",data:{atala_docurl:t},cancel:!1,info:{ocr:{},error:void 0}};return n}function dt(e,t){function n(e){ht(e),"function"==typeof t&&t.call()}S(),It.makeHandlerRequest(e,n,n)}function ht(e){if(e){if(e.error&&(g("TextLoadError",e.error),S()),e.text.pages)for(var t=0;t<e.text.pages.length;++t)mt(e.text.pages[t],t);It._controllers.document.initDocumentText(e.text),l({type:"textloaded"})}}function ft(e){var t=Vt.Deferred(),n=a(e),r=It._controllers.document.getPageDefinition(e);if(!n&&r){n={loading:!0,regions:[],promise:t},It._controllers.document.updatePageText(e,n);var o=r.uri||Gt.config.documenturl,i=Gt.config.serverurl;setTimeout(function(){var a={type:"pagetextdata",serverurl:i,query:"?atalapagetext=",method:"GET",data:{atala_docurl:o,atala_index:r.index},cancel:!1,info:{page:n,error:void 0}},s=bt(n,e,t);It.makeHandlerRequest(a,s,s)},0)}else t.resolve(e,n);return t.promise()}function xt(e,t,n){var r=ct(e,t);dt(r,n)}function vt(e,t,n,r){if(e)if(t.promise===r&&(t.loading=!1,t.promise=void 0),e.error)g("TextLoadError",e.error),t.regions=[],r&&r.reject&&r.reject(n);else{mt(e,n),t.regions=e.regions?e.regions:[],Vt.extend(t,e);var o={type:"pagetextloaded",index:n,text:t};u(o),l(o),r&&r.resolve&&r.resolve(n,t)}}function pt(e){for(var t=0;t<Xt.length;t++)if(Xt[t]._index===e)return Xt[t];return null}function yt(e,t){if(e&&e._text){var n=e._text[0];if(n.getContext){var r=n.getContext("2d"),o=t?t.rotation:0,i=It.getViewerTransform(e._index,o);return r.setTransform(i.a,i.b,i.c,i.d,i.e,i.f),r}}return null}function bt(e,t,n){return function(r){vt(r,e,t,n)}}function mt(e,t){if(e){Ct(e),e.regions=e.regions||[],e.rotatedRegions=[],e.rotation=e.rotation||0;for(var n=e.regions.length-1;n>=0;--n)e.regions[n].page=t,wt(e.regions[n],e.bounds)?(e.regions[n].index=n,e.regions[n].rotation&&e.rotatedRegions.push(e.regions[n])):Array.prototype.splice.call(e.regions,n,1);e.regions.sort(function(e,t){return it(e,t)?-1:1})}}function wt(e,t){if(!Ct(e))return!1;e.rotation=e.rotation||0,e.lines=e.lines||[];for(var n=e.lines.length,r=e.lines.length-1;r>=0;--r)_t(e.lines[r],t,e.rotation)||Array.prototype.splice.call(e.lines,r,1);return n>0&&0===e.lines.length&&g("TextLoadError","Invalid region data received."),n>0?e.lines.length>0:!0}function _t(e,t,n){if(!Ct(e,t,n))return!1;e.words=e.words||[];for(var r=e.words.length,o=e.words.length-1;o>=0;--o)Pt(e.words[o],t,n)||Array.prototype.splice.call(e.words,o,1);return r>0?e.words.length>0:!0}function Pt(e,t,n){if(!Ct(e,t,n))return!1;e.glyphs=e.glyphs||[],e.text=e.text||"",e.os&&(e.omitSpace=e.os,delete e.os);for(var r=e.glyphs.length-1;r>=0;--r){var o=e.glyphs[r];Tt(o,t,n)||Array.prototype.splice.call(e.glyphs,r,1)}return!0}function Tt(e,t,n){return Ct(e,t,n)?e.text?!0:!1:!1}function Ct(e,t,n){var r=!1;if(e)if(e.b&&"string"==typeof e.b){var o=e.b.split(";");e.bounds={x:parseFloat(o[0]),y:parseFloat(o[1]),width:parseFloat(o[2]),height:parseFloat(o[3])},delete e.b,r=!0}else e.bounds&&e.bounds.hasOwnProperty("x")&&e.bounds.hasOwnProperty("y")&&e.bounds.hasOwnProperty("width")&&e.bounds.hasOwnProperty("height")&&(Mt(e.bounds),r=!0);else e={};return e.bounds||(e.bounds={x:0,y:0,width:0,height:0}),Mt(e.bounds),e.bounds&&(e.normalizedBounds=Rt(e,t,n)),r}function Rt(e,t,n){if(!e.normalizedBounds){if(n%360===0)return e.normalizedBounds=e.bounds,e.normalizedBounds;e.normalizedBounds=Mt(Atalasoft.Utils.rotateRect(e.bounds,t,360-n))}return e.normalizedBounds}function Mt(e){return e.right=e.x+e.width,e.bottom=e.y+e.height,e}function At(e,t){return t+Jt>e}function St(e,t){return e>t-Jt}function zt(e,t){return e&&t&&e.x===t.x&&e.y===t.y}function Dt(e,t,n){return St(e,t)&&At(e,n)}function Qt(e,t){return t?Dt(e.x,t.x,t.right)&&Dt(e.y,t.y,t.bottom):!1}function jt(e,t){if(!e&&!t)return!1;var n=St(e.right,t.x)&&St(t.right,e.x)&&St(e.bottom,t.y)&&St(t.bottom,e.y)||Lt(e,t);return n}function Lt(e,t){if(!e&&!t)return!1;var n=e.width>t.width?e:t;return t=n===e?t:e,At(n.x,t.x)&&St(n.right,t.right)&&At(n.y,t.y)&&St(n.bottom,t.bottom)}function Ot(e,t){if(!jt(e,t))return null;var n={x:Math.max(e.x,t.x),y:Math.max(e.y,t.y),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)};return n.x<n.right&&n.y<n.bottom?(n.width=Math.abs(n.right-n.x),n.height=Math.abs(n.bottom-n.y),n):null}function kt(e,t,n){var r=It.getViewerTransform(e,t.rotation?t.rotation:0).invert();return Ft(r.x(n.x,n.y),r.y(n.x,n.y))}function Ut(e,t){return e&&t&&!t.omitSpace?!0:!1}function qt(e){return Ft(e.bounds.x,e.bounds.y)}function Bt(e){return Ft(e.bounds.right,e.bounds.bottom)}function Ft(e,t){return{x:e,y:t}}function Nt(e,t){var n,r,o,i,a=0,s=function(){a=(new Date).getTime(),i=null,o=e.apply(n,r),i||(n=r=null)};return function(){var l=(new Date).getTime();a||(a=l-t);var u=t-(l-a);return n=this,r=arguments,0>=u||u>t?(i&&(clearTimeout(i),i=null),a=l,o=e.apply(n,r),i||(n=r=null)):i||(i=setTimeout(s,u)),o}}var Vt=Atalasoft.$,Et=this,Gt=e,It=t,Wt=(t?t._internalEvents:null)||Vt({}),Ht={/**
         * @lends Atalasoft.Controls.WebDocumentViewer~TextController
         */
text:{events:{/**
                 * Triggers when page text loaded.
                 * @event Atalasoft.Controls.WebDocumentViewer#pagetextloaded
                 * @type {LoadPageTextCallback}
                 * @param {Object} event - The event object.
                 * @param {number} event.index - index of the page for which text data has been loaded.
                 */
pagetextloaded:null,/**
                 * Triggers when UI text selection complete.
                 * @event Atalasoft.Controls.WebDocumentViewer#textselected
                 * @type {NotificationCallback}
                 */
textselected:null},/**
             * Retrieves the selected text.
             * @return {string} Selected text. Line break is inserted after each line and region.
             * @instance
             * @function
             */
getSelected:B,/**
             * Copies selected text to clipboard. This method don't depend on {@link TextMouseToolConfig| TextMouseToolConfig.hookcopy} config option, i.e. text will be copied if `ctrl+c` copying is disabled for user.
             * @instance
             * @function
             */
copySelected:q,/** Selects all text on the page.
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
selectPageText:P,/**
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
getPageText:T,/**
             * Clears all text selection for the document.
             * @instance
             * @function
             */
clearSelection:D,/**
            * Marks page text data for reload. After this call text data will be loaded next time page will be inserted into DOM on scrolling. I.e. this method won't triggered immediate text reload, even for visible pages.
            * @param {number} [index] - Index of the page to reset text data. If not specified whole document text data is reset.
            * @instance
            * @function
            */
resetPageText:C,/**
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
reloadPageText:R,/**             
            * Indicates whether page text is loaded.             
            * @param {number} index - Index of the page to check text data state.
            * @instance
            * @function
            */
isPageTextLoaded:_,/**
             * Triggers text search. This method also triggers UI search behavior - highlight for matched text occurrences selection of current text result and scrolling during text results iteration.
             * @param {string} [text] - Text to search for. Is empty, previous search results are dropped.
             * @param {number} [startPage] - Index of the page to start search from. If not specified first page in document is assumed to be the first in search.
             * @param {TextSearchCallback} callback - Search callback that receives search results iterator.
             * @returns search results iterator that allows navigation over search results
             *
             * @instance
             * @function
             */
search:lt}};if(Atalasoft.Text.TextController.__exposedApi=Ht.text,!e)return null;var Jt=.1,$t=!1,Kt=null,Xt=t._pages,Yt={activepage:null,origin:Ft(0,0),originPage:-1,rectangular:!1,selectionCache:[],searchQuery:null},Zt={};Vt.extend(Zt,n||{}),Et.dispose=i,Et.removeTextLayer=d,Et.addTextLayer=h,Et.showLayer=f,Et.__exposedApi=Ht.text,Et.__getDebugInfo=M,Et.__linkText=A,Et.clear=S,Et.setViewPort=z,Et.search=lt,Et.clearSelection=D,Et.ensurePageTextLoaded=ft;var en=Nt(W,Gt.config.mousetool.text.throttlingtreshold);Et.createHandlerRequest=ct,Et.makeHandlerRequest=dt,Et.loadText=ht,Et.loadPageText=xt,s(),r()};
"use strict";Atalasoft.Annotations.TextAnnotationUI=function(t,e,o){function n(){a(),x(),t.bind(R)}function a(){if(null==B&&(B=new Atalasoft.Annotations.FontUI(O.font)),S){var o=S.removed!==!0?S:null;k.unbind(o,{showeditor:d,hideeditor:c})}var n=j,a=O.autoscale;S=a?e.atalaImage():e.html(),(!S.isHtml||a)&&(S.renderer=new Atalasoft.Annotations.AnnotationTextRenderer(t.get(),B),m=w),null!=U&&e._page&&(e._page.append(U),e._page.bind(I)),Raphael.vml&&(t.getObject().node.style.overflow="hidden"),S.transform(v().toTransformString(!0)),k.bind(S,{showeditor:d,hideeditor:c}),n&&d()}function r(){U&&U.remove(),T&&T.remove(),B&&B.dispose(),S&&S.remove(),e&&e._page&&e._page.unbind(I),t.unbind(R),M=null,k=null,U=null,B=null,T=null,S=null,O=null}function i(t){t&&A.extend(O,t)}function l(t){return t?O[t]:O}function s(){return B}function d(){U||u(),g()}function h(e){e.stopPropagation(),O.value!==U.val()&&(O.value=U.val(),t.set({text:O}))}function u(){U=A("<textarea/>").hide(),e._page&&(e._page.append(U),e._page.bind(I)),U.bind("change keydown mouseup mousemove mousedown",h),U.bind({blur:c}),t.bind({deselected:c});var o=t.getObject();if(U.css({position:"absolute","overflow-x":"auto","overflow-y":"auto","z-index":99999,border:"0px solid",padding:"0px","background-color":"transparent","text-align":O.align}),Atalasoft.Utils.Browser.Mobile.Any()){var n=t.get(),a=Atalasoft.Utils.getSVGOffset(e.canvas,e._page);U.css({left:n.x+a.left+"px",top:n.y+a.top+"px",width:n.width+"px","max-width":n.width+"px",height:n.height+"px","max-height":n.height+"px",border:o.attr("stroke")+" "+o.attr("strokewidth")+"px","background-color":o.attr("fill")})}B.setZoom(t.getZoom()),(Atalasoft.Utils.Browser.Chrome||Atalasoft.Utils.Browser.Safari)&&U.css({resize:"none"}),null!=O.value&&U.val(O.value),O.readonly&&U.prop("readonly","readonly"),B.repaint(U)}function g(){var e=t?t.get("visible"):!0;e&&((U.is(":hidden")||!j)&&(S.hide(),U.prop("readonly",O.readonly?"readonly":""),U.show(),x()),Atalasoft.Utils.Browser.Touch&&U.focus(function(){U[0].setSelectionRange(0,9999)}),Atalasoft.Utils.Browser.Explorer&&7===parseInt(Atalasoft.Utils.Browser.Version,10)||U[0].focus(),j=!0)}function c(){U&&((U.is(":visible")||j)&&(U.hide(),S.show(),x()),U[0].blur(),j=!1)}function f(){var e=t?t.get("visible"):!0;e?j?d():S.show():S.hide(),S.backgroundColor&&S.backgroundColor(t.get("fill").color)}function p(t){t&&(e!==t||S.removed)&&(e=t,null!=T&&(T.remove(),T=null),a(),f())}function x(o){if(p(o),m(),U&&(!U.is(":hidden")||j)){var n=t.get("outline").width/2,a=t.get(),r=t.getZoom(),i=t.getBox(),l=v(),s=y(l,i.x,i.y),d=y(l,i.x+i.width,i.y+i.height),h=i.width*r,u=i.height*r,g={x:(s.x+d.x-h)/2,y:(s.y+d.y-u)/2},c=V*r,f=n*r,x=2*(c+f),w=Math.max(Math.ceil(h-x),z.width),b=Math.max(Math.ceil(u-x),z.height),M=Atalasoft.Utils.getSVGOffset(e.canvas,e._page),k=a.rotation+_.getPageRotation(t._pageindex),T=0!==k?"rotate("+k+"deg)":"",S={left:Math.round(g.x+M.left+f)+"px",top:Math.round(g.y+M.top+f)+"px",width:w+"px",height:b+"px","max-width":w+"px","max-height":b+"px",padding:Math.ceil(c)+"px"};if(A.extend(S,Atalasoft.Utils.__htmlTransformStyle(T)),Atalasoft.Utils.Browser.Explorer8){var I=t.getObject(),R=I.attr("strokewidth")||1;U.css({border:"solid "+R+"px "+I.attr("stroke"),"background-color":I.attr("fill")})}U.css(S)}B&&(B.set(O.font),B.setZoom(t.getZoom()),B.repaint(U))}function m(){var e=t.get();T||(T=A('<textarea selectable="false"/>'),A(S.innerDom).append(T),T.css({"background-color":"transparent",border:"0px solid","overflow-x":"hidden","overflow-y":"hidden","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none",resize:"none",cursor:"inherit"}),T.attr("readonly","readonly"),T.bind({focus:function(){return this.blur(),!1}}),T[0].raphaelParent=!0),T.val(O.value);var o=t.get("outline").width/2,n=Math.max(Math.ceil(e.width-2*(o+V)),1),a=Math.max(Math.ceil(e.height-2*(o+V)),1);if(B&&(B.set(O.font),B.repaint(T,1,!0)),T.css({width:n+"px",height:a+"px","max-width":n+"px","max-height":a+"px",padding:V+"px","text-align":O.align}),S.attr({x:Math.round(o+e.x),y:Math.round(o+e.y),width:e.width,height:e.height}),e.cornerradius>=0){var r=t.getObject();A(r[0]).attr({rx:e.cornerradius||0,ry:e.cornerradius||0})}S.transform(v().toTransformString(!0))}function w(){var e=t.get("outline").width/2,o=t.get(),n=Math.max(Math.ceil(o.width-2*(e+V)),0),a=Math.max(Math.ceil(o.height-2*(e+V)),0);if(B&&B.set(O.font),S.attr({x:Math.round(e+V+o.x),y:Math.round(e+V+o.y),width:n,height:a}),o.cornerradius>=0){var r=t.getObject();A(r[0]).attr({rx:o.cornerradius||0,ry:o.cornerradius||0})}S.renderer&&S.renderer.renderToSVGImage(S[0],{width:n,height:a}),S.transform(v().toTransformString(!0))}function v(){var e=Raphael.matrix(),o=_.getViewerTransform(t._pageindex),n=t.getTransform();return e.add(o.a,o.b,o.c,o.d,o.e,o.f),e.add(n.a,n.b,n.c,n.d,n.e,n.f),e}function b(){S&&x()}function y(t,e,o){return{x:t.x(e,o),y:t.y(e,o)}}var A=Atalasoft.$,M=this,_=o,k=t.getEventObject(),U=null,T=null,B=null,S=null,O=t.get("text"),j=!1,V=3,z=Atalasoft.Utils.Browser.Mobile.Any()?{width:200,height:200}:{width:1,height:1},I={},R={moving:b,resized:b,moved:b,rotated:b};n(),M.dispose=r,M.set=i,M.get=l,M.getFont=s,M.updateView=f,M.changepaper=p,M.repaint=x};
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},JSON;JSON||(JSON={}),function(){function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var n,r,o,f,u,i=gap,p=e[t];switch(p&&"object"===("undefined"==typeof p?"undefined":_typeof(p))&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),"function"==typeof rep&&(p=rep.call(e,t,p)),"undefined"==typeof p?"undefined":_typeof(p)){case"string":return quote(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){for(f=p.length,n=0;f>n;n+=1)u[n]=str(n,p)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",gap=i,o}if(rep&&"object"===("undefined"==typeof rep?"undefined":_typeof(rep)))for(f=rep.length,n=0;f>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],o=str(r,p),o&&u.push(quote(r)+(gap?": ":":")+o));else for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(o=str(r,p),o&&u.push(quote(r)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",gap=i,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(t,e,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=e,e&&"function"!=typeof e&&("object"!==("undefined"==typeof e?"undefined":_typeof(e))||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var n,r,o=t[e];if(o&&"object"===("undefined"==typeof o?"undefined":_typeof(o)))for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r=walk(o,n),void 0!==r?o[n]=r:delete o[n]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/**
 * Control that shows thumbnails of document pages and annotations.
 * @param {WebThumbnailerConfig} [settings] Object of key value pairs representing initial settings
 * @param {OpenUrlCallback} [openCallback] callback that is called when document load complete(if {@link WebDocumentViewerConfig.documenturl| documenturl} is specified).
 * @class
 * @augments Atalasoft.Controls.WebDocumentViewer
 * @returns {WebDocumentThumbnailer} A new control with the given settings.
 */
Atalasoft.Controls.WebDocumentThumbnailer=function(e,t){function n(){return{get:function(){return Bt},detachViewer:u,activateViewer:d}}function o(){Zt&&(Gt=Zt.__getViewerLink(Bt,Jt),an=Gt.stateManager),Bt.bind({statusmessage:Vt,pagerotated:ut,pageinserted:ut,pageremoved:ut,pagemoved:ut}),Bt.bind({annotationsloaded:zt,formsloaded:xt,contextmenu:Dt,documentloaded:Pt,pageshown:Ot,pageresize:St,scroll:Et,zoomchanged:Lt,zoomstarted:Rt,zoomfinished:Ht,pagesizechanged:jt}),_(),$t={click:Ct,touchstart:qt,touchmove:At,touchend:kt,mouseenter:Mt,mouseleave:Tt},a()}function a(){}function i(e,t){if(e){var n=t?e.bind:e.unbind,o=t?Bt.unbind:Bt.bind;n.call(e,{beforehandlerrequest:yt,documentloaded:dt,scroll:ft,pagerotated:_t,pageinserted:gt,pageremoved:pt,pagemoved:mt}),o.call(Bt,{pagerotated:ut,pageinserted:ut,pageremoved:ut,pagemoved:ut}),r(e,e.document.events,n),dn.allowannotations&&(n.call(e,{annotationresized:wt,annotationmoved:wt,annotationrotated:wt,annotationcreated:bt,annotationdeleted:vt}),e.annotations&&r(e,e.annotations.events,n))}}function r(e,t,n){var o={};for(var a in t)t.hasOwnProperty(a)&&(o[a]=s);n.call(e,o)}function s(){Bt.trigger.apply(Bt,arguments)}/**
     * Checks whether current thumbnailer is controlling referenced viewer.
     *
     * If viewer is linked only to the current thumbnailer, this method always return `true`.
     *
     * If thumbnailer is not linked to any viewer, this method always return `false`.
     * @function Atalasoft.Controls.WebDocumentThumbnailer#isActive
     * @returns {boolean} `true` if current thumbnailer instance is controlling referenced viewer; `false` otherwise.
     */
function l(){return Zt&&(!an||an&&an.isThumbnailerActive(n()))}/**
     * Takes ownership over referenced viewer, i.e. if shared viewer is currently displaying other document, it's switched to display document from calling thumbnailer.
     * @function Atalasoft.Controls.WebDocumentThumbnailer#activate
     */
function c(){d(Zt)}function d(e,t){if(!Zt&&e&&(Zt=e,Gt=Zt.__getViewerLink(Bt,Jt),an=Gt.stateManager),Zt&&Zt.isReady()&&(!l()||t)){var o=Zt&&!l();an.activateThumbnailer(n(),g(),Jt,dn,t),o&&(i(Zt,!0),f(Zt))}S(!0)}function u(){if(Zt&&Zt.isReady()&&(sn.viewer.zoom=Zt.getZoom(),sn.viewer.pagenumber=Zt.getCurrentPageIndex(),dn.allowforms&&sn.base.controllers.forms&&Gt._fields)){var e={forms:{fields:Q(Gt._fields)}};sn.base.controllers.forms.loadForms(e)}i(Zt,!1),h(Zt),S(!1)}function g(){var e={pagewidth:rn.size.width,pageheight:rn.size.height,pagecount:rn.count,dpi:rn.dpi,colordepth:sn.base.controllers.memory.getColorDepth(),vector:rn.vector,pagenumber:sn.viewer.pagenumber,zoom:sn.viewer.zoom};return dn.allowannotations&&Jt._annos&&(e.layers=Q(Jt._annos,"items")),dn.allowforms&&Jt._fields&&(e.forms={fields:Q(Jt._fields)}),e}function p(){y=Jt.__createDiv,w=Jt.__createDOM}function m(){return{thumb:{annotations:null,document:null,text:null,getCurrentPageIndex:null,getZoom:null,zoom:null,zoomIn:null,zoomOut:null,next:null,previous:null,save:null,showPage:null,setMouseTool:null},viewer:{reloadPage:function(e){return Wt=e.reloadPage,L}}}}function f(e){var t=m();b(t.viewer,e,Bt,sn.viewer.api),b(t.thumb,Bt,e,sn.selfapi)}function h(e){var t=v(sn.viewer.api);b(t,e,sn.viewer.api,{});var n=v(sn.selfapi);b(n,Bt,sn.selfapi,{})}function b(e,t,n,o){for(var a in e)e.hasOwnProperty(a)&&(t.hasOwnProperty(a)&&t[a]&&(o[a]=t[a]),"function"==typeof e[a]?t[a]=e[a](t,n):n.hasOwnProperty(a)&&n[a]&&(t[a]=n[a]))}function v(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=null);return t}function _(){F=Bt.empty,A=Bt.dispose,E=Bt.openUrl,z=Bt.getCurrentPageIndex,x=Bt.__getDebugInfo,M=Bt.next,I=Bt.previous,P=Bt.showPage,Bt.empty=C,Bt.dispose=q,Bt.openUrl=Bt.OpenUrl=k,Bt.__getDebugInfo=D,Bt.scrollToThumb=P,Bt.zoom=Bt.zoomIn=Bt.zoomOut=function(){},Xt=Bt.reloadPage,Bt.reloadPage=L,delete Bt.fit,Yt.extend(Bt.events,gn)}function w(){}function y(){}function z(){}function x(){}function D(){if(dn.debug){var e=x();return Yt.extend(!0,e,{thumbnailer:{config:dn,index:Nt,links:{viewer:Gt,self:Jt},page:rn,thumb:cn,state:sn}}),e}return null}/**
    * Scrolls the viewer to the given page number and executes the callback when finished
    * @function Atalasoft.Controls.WebDocumentThumbnailer#scrollToThumb
    * @param {number} index - Index of the page to scroll to.
    * @param {NotificationCallback} [callback] - Function to execute after this operation is done.
    */
function P(){}function I(){}function M(){}/**
     * Gets the selected thumbnail index.
     * @function Atalasoft.Controls.WebDocumentThumbnailer#getSelectedPageIndex
     * @returns {number}
     */
function T(){return Nt}function C(e){var t=1,o=function(){t--,0>=t&&(l()&&an&&Zt&&d(Zt,!0),"function"==typeof e&&e.call())};l()&&(an?an.closeDocument(n(),Jt):Zt.isReady()&&(t++,Zt.empty(o))),F(o)}function F(){}function q(){l()&&(an?an.closeDocument(n(),Jt):Zt.empty(),u()),A(),Zt=null,Gt=null}function A(){}function k(e,t,o,a){ct(),null==a&&("function"==typeof t?(a=t,t=null):"function"==typeof o&&(a=o,o=null));var i=function(e){O(),It(e,a)};"string"==typeof e&&(an.closeDocument(n(),Jt),sn.viewer.pagenumber=0),E(e,t,o,i)}function E(){}function O(){Bt.scrollTo(0,0,!1)}function S(e){sn.base&&(0>Nt&&(Nt=0),Yt.each(sn.base.dom.pageDivs,function(t,n){var o=!1;n._index===Nt&&e?(n.addClass(Bt.domclasses.atala_active_thumb),o=!0):n.removeClass(Bt.domclasses.atala_active_thumb),U(n,o)}))}/**
    * Highlights the thumbnail at the given index, and scrolls to it in the linked viewer, if possible.
    * @param {number} index - Index of the page to select.
    * @function Atalasoft.Controls.WebDocumentThumbnailer#selectThumb
    */
function V(e){if(!sn.scrolling){if(Nt=e,an?(sn.viewer.pagenumber=Nt,d(Zt)):S(!0),Zt){var t=Zt.getCurrentPageIndex();t>=0&&Nt!==t&&(sn.scrolling=!0,Nt===t-1?Zt.previous(1,ht):Nt===t+1?Zt.next(1,ht):Zt.showPage(Nt,ht))}Bt.trigger({type:"thumbselected",index:e})}}/**
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
    */
function L(e,t,n,o,a){if(Xt){var i=Array.prototype.slice.call(arguments);if(Zt&&Zt.isReady())if(l()){var r=Array.prototype.slice.call(i);a=i.pop(),"function"!=typeof a&&(i=Array.prototype.slice.call(r)),Xt.apply(this,i).then(function(){Wt&&Wt.apply(this,r)})}else Xt.apply(this,arguments);else Xt.apply(this,arguments)}}function R(){if(sn.base){if(sn.initialized&&sn.base.dom.pageDivs.length>0&&null!=sn.base.dom.pageDivs[0]._img&&!sn.base.dom.pageDivs[0]._img._size.isEmpty()){var e=sn.base.dom.pageDivs[0]._img._size;cn.scale=e.width>e.height?cn.size/e.width:cn.size/e.height}else{var t=sn.base.page.size.width/sn.base.page.size.height<1,n=Math.ceil(sn.base.page.size.height*sn.base.config.zoom),o=Math.ceil(sn.base.page.size.width*sn.base.config.zoom),a=cn.size;dn.direction===on.Vertical?cn.divsize=Math.ceil(sn.base.page.size.width*sn.base.config.zoom):dn.direction===on.Horizontal&&(cn.divsize=Math.ceil(sn.base.page.size.height*sn.base.config.zoom)),a=0>=a?cn.divsize-2*dn.thumbpadding:a,it(a),dn.tabular&&dn.columns>1&&dn.direction===on.Vertical&&tt();var i=t?n:o;cn.scale=i?sn.base.config.zoom*(cn.size/i):1,cn.zoomfull=cn.scale,dn.minwidth>sn.base.page.size.width*cn.scale&&sn.base.page.size.width&&(dn.minwidth=sn.base.page.size.width*cn.scale),sn.initialized=!0}var r=dn.showpageborder?2*dn.pageborderwidth:0,s=cn.size+2*dn.thumbpadding-r;if(Bt.trigger({type:"pagedivsresized",height:s,width:s,fullzoom:cn.zoomfull,minwidth:dn.minwidth}),dn.allowdragdrop){sn.base.dom.content.addClass(Bt.domclasses.atala_thumb_draggable),sn.base.dom.content.css({minWidth:s,minHeight:s});var l=Math.round(cn.size/2);sn.base.dom.content.sortable({containment:"body",connectWith:"."+Bt.domclasses.atala_thumb_draggable,appendTo:document.body,placeholder:Bt.domclasses.atala_drag_placeholder,cursorAt:{left:l,top:l},delay:dn.dragdelay,distance:4,helper:X,opacity:.65,scroll:!0,scrollSensitivity:l,scrollSpeed:10,start:Y,receive:$,stop:N,over:B,change:Z,tolerance:"pointer",update:G,zIndex:100})}Yt.each(sn.base.dom.pageDivs,function(e,t){t.width(cn.size),t.height(cn.size),t.thumbInitialized||(t.bind($t),t.css({padding:dn.thumbpadding,"background-color":dn.backcolor,cursor:"pointer","margin-bottom":dn.pagespacing+"px","text-align":"center",position:"relative"}),dn.tabular?t.css({"margin-right":dn.pagespacing+"px"}):dn.direction===on.Horizontal&&t.css({"margin-right":dn.pagespacing+"px","margin-bottom":"0px"}),t._paper&&Atalasoft.Utils.Browser.Explorer&&(t._paper.canvas.style.top="",t._paper.canvas.style.width="",t._paper.canvas.style.height=""),t._grips&&(t._grips.push=function(){}),t.thumbInitialized=!0),H(t._img,t._paper)}),sn.base.dom.pageDivs.length>0&&Jt.__adjustEdgeHeights(sn.base.dom.pageDivs[0]._index)}}function H(e,t,n,o){if(sn.base){var a=o||e&&e.getScaledSize(n);if(!a)return;var i=a.width,r=a.height,s=cn.size*(sn.base.config.zoom/cn.zoomfull);if(i>s||r>s){var l=1>i/r,c=n*(s/(l?r:i));i=Math.round(e._size.width*c),r=Math.round(e._size.height*c),n=c}e.width(i),e.height(r);var d=e.getDomElement();d[0].style.left="50%",d[0].style.top="50%",d[0].style.position="absolute",d[0].style.marginLeft=-Math.round(i/2)+"px",d[0].style.marginTop=-Math.round(r/2)+"px",t&&(t.canvas.style.left="50%",t.canvas.style.top="50%",t.canvas.style.marginLeft=-Math.round(i/2)+"px",t.canvas.style.marginTop=-Math.round(r/2)+"px",t.canvas.style.zIndex=1),e.trigger({type:"pagezoom",index:e._page._index,height:Math.round(r),width:Math.round(i),prevzoom:sn.base.config.zoom,zoom:n})}}function j(e,t,n){var o=e.data("selected")?t:n;e.css("background-color",o)}function U(e,t){var n=t?dn.selectedcolor:dn.backcolor;e.data("selected",t),e.css("background-color",n)}function W(e){var t=this;this._initial=e,this._actual=e,this.scrollTop=function(){t._actual.scrollTop()},this.scrollLeft=function(){t._actual.scrollTop()},this.setObject=function(e){t._actual=e,this[0]=t._actual[0]},this.offset=function(){return t._actual.offset()},this.setObject(e)}function X(e,t){var n=Yt('<div class="atala_drag_helper"></div>');n.append(t.find("."+Bt.domclasses.atala_page_image_anchor).first().clone()),sn.base.dom.content.append(n);var o=n.scrollParent(),a=sn.base.dom.content.data(Qt)||sn.base.dom.content.data(en);return n.hide(),setTimeout(function(){a&&(a.scrollParent=new W(o),t.data(tn,a.scrollParent)),n.appendTo("body"),n.show()},1),n}function Y(e,t){var n=et(t.item);if(n>=0){var o=Bt.document.getPageReference(n),a={start:n,end:n,updateHandled:!1,pageRef:o,documenturl:"object"===("undefined"==typeof o?"undefined":_typeof(o))&&o.uri?o.uri:sn.base.config.documenturl,thumbLink:Jt,thumb:Bt,thumbId:Jt._id,externalDropIndex:null,insertAfterSelf:!1};t.item.data(Kt,a),sn.base.controllers.mouseTool.pauseTool(),t.placeholder.width(t.item.width()),t.placeholder.height(t.item.height()),t.placeholder.css({margin:t.item.css("margin"),display:sn.base.config.tabular||sn.base.config.direction===on.Horizontal?"inline-block":"block",padding:Math.max(0,sn.base.config.thumbpadding-1)}),Bt.trigger({type:"thumbdragstart",dragindex:a.start})}}function B(e,t){if(!Atalasoft.Utils.Browser.Mobile.Any()){var n=t.placeholder.parents("."+Bt.domclasses.atala_scroller),o=t.item.data(tn);n.length&&o&&o[0]!==n.first()[0]&&o.setObject(n.first())}}function Z(e,t){var n=t.item.data(Kt);if(n){var o=t.placeholder.prev();n.insertAfterSelf=o.length&&t.item[0]===o.first()[0]}}function N(e,t){var n=t.item.data(Kt);if(n){sn.base.controllers.mouseTool.resumeTool(),n.updateHandled||(n.end=J(t),n.updateHandled=!0),n.insertAfterSelf&&++n.end;var o={type:"thumbdragend",dragindex:n.start,dropindex:n.end,source:n.thumb,sourcedocument:n.documenturl,target:Bt,external:!1,pageref:n.pageRef,cancel:!1};if(Bt.trigger(o,o),o.cancel)Yt(this).sortable("cancel");else{var a=n.start<n.end&&n.start>=0?n.end-1:n.end;Gt&&l()&&Zt.isReady()?Gt._controllers.document.movePage(n.start,a):sn.base.controllers.document.movePage(n.start,a),K(),V(a),o={type:"thumbdragcomplete",dragindex:n.start,dropindex:n.end,source:n.thumb,target:Bt},Bt.trigger(o,o)}}t.item.data(Kt,null)}function $(e,t){Yt(t.sender).sortable("cancel");var n=t.item.data(Kt);if(n){n.thumbLink._controllers.mouseTool.resumeTool();var o=sn.base.dom.pageDivs.length?sn.base.dom.pageDivs[0]._index:0;n.end=n.externalDropIndex+o||0;var a={type:"thumbdragend",dragindex:n.start,dropindex:n.end,source:n.thumb,sourcedocument:n.documenturl,target:Bt,pageref:n.pageRef,external:!0,cancel:!1,copyannotations:!0};if(Bt.trigger(a.type,a),!a.cancel){var i;if(a.copyannotations&&n.thumb.config.allowannotations&&Bt.config.allowannotations&&(i=n.thumb.annotations.getFromPage(n.start)),Zt&&d(Zt,!0),sn.scrolling=!0,n.thumb.document.removePage(n.start),Bt.document.insertPage(n.documenturl,n.pageRef,n.end),K(),Nt=n.end,S(!0),ut(function(){ht(),V(n.end)}),i)for(var r=0;r<i.length;r++)Bt.annotations.createOnPage(i[r],n.end);Bt.trigger("thumbdragcomplete",{type:"thumbdragcomplete",dragindex:n.start,dropindex:n.end,source:n.thumb,target:Bt})}}t.item.data(Kt,null)}function G(e,t){var n=t.item.data(Kt);n&&(sn.base.dom.content.has(t.item).length?(n.end=J(t),n.thumbId===Jt._id&&Bt.trigger({type:"thumbsreordered",dragindex:n.start,dropindex:n.end})):n.externalDropIndex=t.item.index(),n.updateHandled=!0)}function J(e){for(var t=-1,n=e.item.prev().length?e.item.prev().first():[null],o=0;o<sn.base.dom.pageDivs.length;++o)if(sn.base.dom.pageDivs[o][0]===n[0]){t=sn.base.dom.pageDivs[o]._index;break}return t+1}function K(){var e=sn.base.dom.scroller[0];if(Jt.__isObjectInRect(sn.base.dom.edges[1][0],e,e.scrollLeft,e.scrollTop,e.scrollLeft+e.clientWidth,e.scrollTop+e.clientHeight)){var t=sn.base.dom.pageDivs[0]._index,n=Jt.__getIndexFromPos(e.scrollLeft,e.scrollTop),o=n-t;o<sn.base.dom.pageDivs.length&&o>0?Jt.__showNext(o):(Jt.__showPageAsync(n,!1),Jt.__redrawVisiblePages())}}function Q(e,t){var n=[];for(var o in e)if(e.hasOwnProperty(o)){var a=[],i=t?{}:a;t&&(i[t]=a);for(var r in e[o])e[o].hasOwnProperty(r)&&(a[r]=e[o][r].get(),a[r].multiview=!0);n[o]=i}return n}function et(e){for(var t=0;t<sn.base.dom.pageDivs.length;t++)if(sn.base.dom.pageDivs[t][0]===e[0])return sn.base.dom.pageDivs[t]._index;return-1}function tt(){if(dn.tabular){var e;if(dn.columns>1)e=(cn.size+2*dn.thumbpadding+dn.pagespacing)*Math.min(sn.base.controllers.document.getPageCount(),dn.columns);else if(dn.rows>1){var t=Math.ceil(nt()/dn.rows);e=(cn.size+2*dn.thumbpadding+dn.pagespacing)*t}e&&sn.base.dom.content.width(e)}}function nt(){return sn.base.controllers.document.getPageCount()}function ot(e){for(var t=0;t<sn.base.dom.pageDivs.length;t++)if(sn.base.dom.pageDivs[t]._index===e)return!0;return!1}function at(){var e=sn.base.dom.pageDivs[0]._index;sn.base.dom.pageDivs.sort(function(e,t){return e.index()-t.index()});for(var t=0;t<sn.base.dom.pageDivs.length;t++){var n=sn.base.dom.pageDivs[t];n._index=e+t,null!=n._num&&n._num.text(n._index+1)}}function it(e){0>=e&&Bt.trigger({type:"throwerror",name:"Invalid thumb size",msg:"Thumb size cannot be "+e+". Check configuration parameters 'minwidth', 'thumbpadding' and 'thumbsize'. If 'thumbsize' is not specified, then 'minwidth' should be at least (2 * thumbpadding + 1)"}),cn.size=e,sn.base&&sn.base.config.forcepagesize&&(sn.base.config.forcepagesize.width=e,sn.base.config.forcepagesize.height=e)}function rt(){dn.allowdragdrop=dn.allowdragdrop?!0:!1,dn.selectedindex=lt(dn.selectedindex)?parseInt(dn.selectedindex,10):0,dn.thumbpadding=lt(dn.thumbpadding)?parseInt(dn.thumbpadding,10):8,dn.backcolor=st(dn.backcolor,"#DCDCDC"),dn.hovercolor=st(dn.hovercolor,"#667F9F"),dn.selectedcolor=st(dn.selectedcolor,"#E0872D"),dn.selectedhovercolor=st(dn.selectedhovercolor,"#FFC060")}function st(e,t){var n={hex:"#FFFFFF",hexs:"#FFF",name:"white",rgb:"rgb(255, 255, 255)"},o=y(null,"dummy");return o.css("backgroundColor",n.name),o.css("backgroundColor",e),o.css("backgroundColor")===n.rgb&&(e=e.toLowerCase(),e!==n.name&&e!==n.hex&&e!==n.hexs&&e!==n.rgb&&(e=t)),e}function lt(e,t){return t?isFinite(parseFloat(e)):isFinite(parseInt(e,10))}function ct(){sn.base&&Yt.each(sn.base.dom.pageDivs,function(e,t){t.unbind($t),t.thumbInitialized=!1})}function dt(){}function ut(e,t){"function"==typeof e&&(t=e,e=void 0),R(),Jt.__redrawVisiblePages(!0),Jt.__adjustVisiblePages(),sn.base&&Gt&&l()&&Zt.isReady()?(Gt.__redrawVisiblePages(!0),Gt.__adjustVisiblePages(!1,t)):"function"==typeof t&&t()}function gt(e){sn.base&&(sn.base.controllers.annotations&&sn.base.controllers.annotations.insertLayer(null,null,e.destindex),sn.base.controllers.forms&&sn.base.controllers.forms.insertForm(null,null,e.destindex),ut())}function pt(e){sn.base&&(sn.base.controllers.annotations&&sn.base.controllers.annotations.removeLayer(e.index),sn.base.controllers.forms&&sn.base.controllers.forms.removeForm(e.index),ut())}function mt(e){sn.base&&(sn.base.controllers.annotations&&sn.base.controllers.annotations.moveLayer(e.srcindex,e.destindex),sn.base.controllers.forms&&sn.base.controllers.forms.moveForm(e.srcindex,e.destindex),at(),ut())}function ft(){var e=Zt.getCurrentPageIndex();Nt!==e&&V(e)}function ht(){sn.scrolling=!1}function bt(e){if(sn.base){var t=Gt._annos[e.page]||null,n=null,o=null;t&&(n=t[t.length-1],o=n.get()),o&&o.type===e.anno.type&&(o.multiview=!0,sn.base.controllers.annotations.createAnnotation(o,e.page))}}function vt(e){sn.base&&sn.base.controllers.annotations.deleteAnnoOnPage(e.page,e.index)}function _t(){sn.base&&ut()}function wt(e){if(sn.base&&ot(Nt))for(var t=sn.base.controllers.annotations.getAnnosFromPage(Nt),n=0;n<t.length;n++)t[n].type===e.anno.type&&t[n].update(!0)}function yt(e){if(("docinfo"===e.request.type||"annodata"===e.request.type||"formdata"===e.request.type)&&sn.base){e.request.cancel=!0,"docinfo"===e.request.type&&(e.request.info.pagewidth=rn.size.width,e.request.info.pageheight=rn.size.height,e.request.info.pagecount=rn.count,e.request.info.dpi=rn.dpi,e.request.info.colordepth=sn.base.controllers.memory.getColorDepth(),e.request.info.vector=rn.vector);var t=void 0!==e.request.info.docIndex?e.request.info.docIndex:e.request.info.offset||0,n=e.request.info.length>-1?e.request.info.length+t:void 0;if(e.request.info.offset=e.request.info.offset||0,dn.allowannotations&&("annodata"===e.request.type||e.request.data.atala_annurl)){var o=sn.base.controllers.annotations.__getDebugInfo().data;e.request.info.layers=Q(o.annos.slice(t,n),"items")}if(dn.allowforms&&("formdata"===e.request.type||e.request.data.atala_formurl)){var a=sn.base.controllers.forms.__getDebugInfo().data;e.request.info.forms={fields:Q(a.fields.slice(t,n))}}Zt.trigger({type:"handlerreturned",request:e.request})}}function zt(){}function xt(){}function Dt(e,t,n){for(var o in n)n.hasOwnProperty(o)&&delete n[o]}function Pt(){sn.base={config:Jt._config,controllers:Jt._controllers,dom:Jt._dom,page:Jt._page,stateManager:Jt.stateManager}}function It(e,t){rn.size.width=sn.base.page.size.width,rn.size.height=sn.base.page.size.height,rn.count=sn.base.page.count,rn.dpi=sn.base.page.dpi,rn.vector=sn.base.page.vector,R(),Ut(sn.base.dom.scrollH),Ut(sn.base.dom.scrollV);var n=function(){l()&&V(dn.selectedindex),t&&"function"==typeof t&&t(e)};sn.viewer.zoom=0,l()||an&&!an.isViewerActive()?(d(Zt,!0),n()):n()}function Mt(){j(Yt(this),dn.selectedhovercolor,dn.hovercolor)}function Tt(){j(Yt(this),dn.selectedcolor,dn.backcolor)}function Ct(e){var t=e.currentTarget;Yt.each(sn.base.dom.pageDivs,function(e,n){n[0]===t&&V(n._index)})}function Ft(e,t,n){if(!(e.originalEvent.touches.length>1)){e.preventDefault();var o=e.originalEvent.changedTouches[0],a=document.createEvent("MouseEvents");a.initMouseEvent(t,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,n,null),e.target.dispatchEvent(a)}}function qt(e){if(ln.moves=0,ln.start={x:0/0,y:0/0},e.originalEvent.touches&&1===e.originalEvent.touches.length){var t=e.originalEvent.touches[0];ln.start.x=t.screenX,ln.start.y=t.screenY}Ft(e,"mouseover",0),Ft(e,"mousedown",0)}function At(e){var t=5;if(e.originalEvent.touches&&e.originalEvent.touches.length){var n=e.originalEvent.touches[0];(e.originalEvent.touches.length>1||Math.abs(ln.start.x-n.screenX)>t||Math.abs(ln.start.y-n.screenY)>t)&&ln.moves++,Ft(e,"mousemove",0)}}function kt(e){Ft(e,"mouseup",0),ln.moves>0?ln.moves=0:Ft(e,"click",0),Ft(e,"mouseout",0)}function Et(){}function Ot(e){if(dn.showthumbcaption){if(!e.page._caption){var t=Yt("<div/>");t.css({left:"3%",bottom:"16px",width:"94%",position:"absolute",zIndex:1,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),t.addClass(Bt.domclasses.atala_thumb_caption),e.page._caption=t,e.page.append(t)}var n=e.page._index+1+"";Jt._page.caption&&(n=Jt._page.caption.replace("{0}",n),e.page.attr("title",n)),e.page._caption.text(n)}e.page&&e.page._img&&!e.page._img._loaded&&H(e.page._img,e.page._paper),U(e.page,e.page._index===Nt&&l())}function St(e){e.image&&(e.image._loaded?e.page&&H(e.image,e.page._paper,cn.scale,{width:e.width,height:e.height}):e.image.css({position:"absolute"}))}function Vt(e){Gt&&Gt.__status&&Gt.__status(e.message)}function Lt(){if(sn.base){var e=sn.base.page.size.width/sn.base.page.size.height<1,t=Math.ceil(sn.base.page.size.height*sn.base.config.zoom),n=Math.ceil(sn.base.page.size.width*sn.base.config.zoom),o=Math.max(t,n),a=sn.base.config.zoom*(o/(e?t:n));cn.zoom=sn.base.config.zoom/cn.zoomfull,cn.scale=a,Yt.each(sn.base.dom.pageDivs,function(e,t){t.width(o),t.height(o)})}}function Rt(){}function Ht(){}function jt(e){Gt&&an&&Zt&&Zt.isReady()&&Gt.__updatePageSize(e,sn.base.controllers.document,sn.base.page.size,an.isThumbnailerActive(n()))}function Ut(e){e&&(e._scrollSize<=0?e._tray.hide():e._tray.show())}var Wt,Xt,Yt=Atalasoft.$,Bt=null,Zt=e.viewer||null,Nt=-1,$t=null,Gt=null,Jt=null,Kt="atala_dragdata",Qt="ui-sortable",en="sortable",tn="atala_scroll_parent",nn=Atalasoft.Utils.Fitting,on=Atalasoft.Utils.ScrollDirection,an=null,rn={size:{width:0,height:0},sizes:[{width:0,height:0}],count:0,number:-1,dpi:96,vector:!1},sn={base:null,loading:!1,initialized:!1,scrolling:!1,viewer:{zoom:0,pagenumber:0,api:{}},selfapi:{}},ln={moves:0,start:{x:0/0,y:0/0}},cn={divsize:-1,scale:1,size:0,zoom:1,zoomfull:1},dn={direction:on.Vertical,/**
        *  @property {number} [maxwidth=300] - Specifies the maximum amount of pixel width allowed for zooming in.
        *
        *  This property is intended to limit size of the images data transferred over the wire on big zoom values.
        */
maxwidth:300,/**
         *  @property {number} [minwidth=80] - Specifies the minimum amount of pixel width allowed for zooming out.
         */
minwidth:80,pageborderwidth:1,pagespacing:2,parent:null,showpagenumber:!1,toolbarparent:null,/**
         * @property {boolean} [showthumbcaption=false] - Specifies whether captions will be added to the each thumbnail page. */
showthumbcaption:!1,/**
         * @property {string} [thumbcaptionformat] - Specifies default thumbnail caption format.
         *
         * {0} - will be substituted with page number.
         * {1} - will be substituted with the document file name.
         * Could also be set on server using DocumentInfoRequestedEventArgs arguments of DocumentInfoRequested event.
         */
thumbcaptionformat:"",/**
         * @property {boolean} [allowdragdrop=false] - Indicates whether drag&drop through UI is enabled.
         */
allowdragdrop:!1,/**
         * @property {number} [dragdelay=250] - Delay in milliseconds before drag&drop operation is started.
         *
         * This delay is intended to support "pan" behavior when UI drag&drop support is enabled.
         *
         * @example
        * <caption>It's recommended to increase this value on touch device. For example </caption>
        *  _thumbs = new Atalasoft.Controls.WebDocumentThumbnailer({
        *  	parent: $(".atala-document-thumbs"),
        *  	serverurl: _serverUrl, // server handler url to send image requests to
        *  	documenturl: _docUrl, // + _docFile, 	// document url relative to the server handler url
        * 	allowannotations: true,
        *  	allowdragdrop: true,
        * 	dragdelay: Atalasoft.Utils.Browser.Mobile.Any() ? 750 : 250,
        *  	viewer: _viewer
        *  });
        */
dragdelay:250,/**
         * @property {number} [selectedindex=0] - Index of the initially selected page. This page will be selected after each new document will be loaded.
         */
selectedindex:0,/**
         * @property {number} [thumbpadding=8] - Padding of the thumbnail image.
         */
thumbpadding:8,/**
         * @property {string} [backcolor='#DCDCDC'] - Thumbnail background color.
         */
backcolor:"#DCDCDC",/**
         * @property {string} [hovercolor='#667F9F'] - Thumbnail :hover color.
         */
hovercolor:"#667F9F",/**
         * @property {string} [selectedcolor='#E0872D'] - Selected thumbnail background color.
         */
selectedcolor:"#E0872D",/**
         * @property {string} [selectedhovercolor='#FFC060'] - Selected thumbnail :hover background color.
         */
selectedhovercolor:"#FFC060"},un={type:"Atalasoft.Controls.WebDocumentThumbnailer",debug:!0,showpageborder:!0,forcepagefit:!0,toolbarparent:Yt("<div/>")},gn={/**
         * Triggers when thumbnail is selected.
         * @event Atalasoft.Controls.WebDocumentThumbnailer#thumbselected
         * @param {Object} event - The event object.
         * @param {number} event.index - Index of the page that was selected.
         */
thumbselected:null,/**
         *  Triggers when thumbnail drag & drop operation is started.
         *  @event Atalasoft.Controls.WebDocumentThumbnailer#thumbdragstart
         *  @param {Object} event - The event object.
         *  @param {number} event.dragindex - Index of the page being dragged.
         */
thumbdragstart:null,/**
         * Callback signature for {@link Atalasoft.Controls.WebDocumentThumbnailer#event:thumbdragend| WebDocumentThumbnailer.thumbdragend} event.
         * @callback ThumbDragEndCallback
         * @param {Object} event - The event object.
         * @param {ThumbDragEndEventArgs} args - The event data.
         */
/**
         * @typedef {Object} ThumbDragEndEventArgs
         * @property {number} dragindex - The index of the page being dragged.
         * @property {number} dropindex - The index where the page was dropped in the target document.
         * @property {string} sourcedocument - The identifier of the source document. Corresponds to {@link WebDocumentViewerConfig.documenturl|config.documenturl}
         * @property {Atalasoft.Controls.WebDocumentThumbnailer} source - The source thumbnailer control.
         * @property {Atalasoft.Controls.WebDocumentThumbnailer} target - The target thumbnailer control.
         * @property {boolean} external - Indicates whether page is being dropped into external document(not the one dragged page originally belong to).
         *
         * @property {DocumentPageReference} pageref - Reference to the page in the source document. See {@link Atalasoft.Controls.WebDocumentViewer~DocumentController#insertPage| document.insertPage} for usage sample.
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
thumbdragend:null,/**
         * Callback signature for {@link Atalasoft.Controls.WebDocumentThumbnailer#event:thumbdragcomplete| WebDocumentThumbnailer.thumbdragcomplete} event.
         * @param {Object} event - The event object.
         * @param {ThumbDragCompleteEventArgs} args - The event data.
         */
/**
         * @typedef {Object} ThumbDragCompleteEventArgs
         * @property {number} dragindex - The index of the page being dragged.
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
thumbdragcomplete:null};return e&&("thumbsize"in e&&isFinite(e.thumbsize)&&e.thumbsize>0&&(it(e.thumbsize),un.forcepagesize={width:e.thumbsize,height:e.thumbsize}),Yt.extend(dn,e),Yt.extend(dn,un),dn.showpagenumber=dn.showpagenumber&&!dn.showthumbcaption,"fitting"in e||(dn.fitting=dn.direction===on.Vertical?nn.Width:nn.Height),Zt&&Zt.config&&(dn.allowtext=Zt.config.allowtext)),Bt=Atalasoft.Controls.WebDocumentViewer.call(this,dn,function(e){It(e,t)}),Jt=Bt.__getViewerLink(Bt),dn=Jt._config,p(),rt(),Bt.getSelectedPageIndex=T,Bt.selectThumb=V,Bt.isActive=l,Bt.activate=c,o(),Bt};
"use strict";var Atalasoft;!function(t){var e;!function(t){var e=function(){function t(t){this._viewer=null,this._currentThumb=null,this._viewer=t}return t.prototype.isViewerActive=function(){return!(!this._viewer||!this._currentThumb)},t.prototype.isThumbnailerActive=function(t){return t&&this._currentThumb&&this._currentThumb.get()===t.get()},t.prototype.activateThumbnailer=function(t,e,i,r,n){var u=this.isThumbnailerActive(t);(!u||n)&&(this._currentThumb&&!u&&this._currentThumb.detachViewer(),this._currentThumb=t,this._viewer&&this._viewer.isInitialized()&&(this._viewer.switchDocument(e,i,r),this._currentThumb.activateViewer()))},t.prototype.closeDocument=function(t,e){t=t||this._currentThumb;var i=this.isThumbnailerActive(t);i&&(t.detachViewer(),this._currentThumb=null),this._viewer&&this._viewer.isInitialized()&&e&&this._viewer.closeDocument(e,i)},t}();t.DocumentStateManager=e}(e=t.Controls||(t.Controls={}))}(Atalasoft||(Atalasoft={}));