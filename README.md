# Atalasoft Web Document Viewer control
[![npm version](https://badge.fury.io/js/web-document-viewer.svg)](https://badge.fury.io/js/web-document-viewer)
[![NuGet version](https://badge.fury.io/nu/Atalasoft.Web.Document.Viewer.svg)](https://badge.fury.io/nu/Atalasoft.Web.Document.Viewer)
[![Bower version](https://badge.fury.io/bo/web-document-viewer.svg)](https://badge.fury.io/bo/web-document-viewer)

The WebDocumentViewer(aka WDV) and WebDocumentThumbnailer(aka WDT) are JavaScript based image viewing controls that could be easily created by adding fex snippets of HTML and JavaScript on your web page and a separate bare-bones requests handler on the server side.

### Introduction

There currently is a gap of functionality on the internet in that browsers currently only display "web native" image formats (PNG, JPEG, GIF, and SVG). Popular multipage document formats like PDF, TIFF and Office formats (like Excel and Word), all cannot be displayed natively on a web page. Atalasoft web controls solves this problem and provide JavaScript APIs to build viewer apps that:

* Work on every HTML5 browser (including mobile browsers).
* Display different types of images. PDF, TIFF, PNG, JPEG, BMP, GIF, PCX, PSD, PCD, RAW, WMF/EMF, TGA, JBIG2, Jpeg2000, DICOM, DWG, Xps, etc.
* Modify document structure and save modified documents.
* Enable annotations, thumbnails, and mobile support for a document.
* Display and fill PDF forms.
* Support text selection basing on PDF text layer or OCR data.
* Effectively work with big documents - make it possible to stream individual pages on demand without downloading the entire document first.
* Can be embedded into an existing web page or application.

### Installation

#### Bower
```bash
bower install web-document-viewer
```

#### Nuget
```bash
PM> Install-Package Atalasoft.Web.Document.Viewer
```

#### NPM
```bash
npm install web-document-viewer
```

### Backend Overview

Atalasoft HTML5 imaging controls are support following server environments

* ASP.NET

    Server side functionality is exposed using separate HttpHandler.
    See [ASP.NET demo application](https://atalasoft.github.io/web-document-viewer/tutorial-demo-application.html) tutorial for details.

- ASP.NET Core on full .net platform

    Server side functionality is exposed using WebDocumentViewerMiddleware that is registered to handle WDV requests.
    See [ASP.NET Core demo application](https://atalasoft.github.io/web-document-viewer/tutorial-demo-application-aspnet-core.html) tutorial for details.


### Frontend Overview

WebDocumentViewer and WebDocumentThumbnailer requires [Jquery](https://github.com/jquery/jquery) and [Jquery UI](https://github.com/jquery/jquery-ui) libraries. If annotations support are enabled, [Raphael.js](https://github.com/DmitryBaranovskiy/raphael) library is also required. If text support is enabled, then [Raphael.js](https://github.com/DmitryBaranovskiy/raphael) and [ClipboardJS](https://github.com/zenorocha/clipboard.js) are both required.

[Jquery](https://github.com/jquery/jquery) should be included into web page by the application. If some of the other dependent libraries don't exist in the web page scope, controls are trying to automatically load them(using file names from dotImage web resources bundle shipped by installer).
When controls are delivered by NuGet or Bower it's required to manually deploy them on the page(since file names could differ for different versions).

### Sample application
You can find a [demo application](https://github.com/Atalasoft/web-document-viewer-demo) shows basic usage of Web Document Viewer component of DotImage product.
Live version of the demo is hosted on Azure: http://atalasoft-viewer-demo.azurewebsites.net/

### Licensing 

To run the projects locally, you need to have a DotImage license. There are various way to acquire the license:

 - Use [DotImage Activation Wizard Visual Studio extension](https://visualstudiogallery.msdn.microsoft.com/88ff07c9-fe68-48bd-bfdc-3fbc8a0ec1db)
 - Download a complete DotImage installation package from the [Atalasoft web site](https://atalasoft.com). You will be prompted to activate the product during installation

This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)  
Permission for usage and modification of this code is only permitted 
with the purchase of a source code license.

### Related Articles
 - [Web Document Viewer documentation](https://atalasoft.github.io/web-document-viewer/)
 - [Introducing NuGet Packages](http://atalasoft.github.io/2016/05/03/introducing-nuget/)
 - [Introducing Activation Wizard Extension](http://atalasoft.github.io/2016/05/14/introducing-activation-wizard-extension/) 
 - [NuGet Tutorial I - Web Document Viewer](http://atalasoft.github.io/2016/06/21/nuget-tutorial-wdv/)
