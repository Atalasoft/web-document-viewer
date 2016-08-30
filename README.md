<a href="http://www.atalasoft.com/" style="display:inline-block"><img src="http://atalasoft.github.io/public/butterfly.png" alt="Atalasoft" display="inline" height="200px"></a>
<a href="https://bower.io/" style="display:inline-block">
<img src="https://bower.io/img/bower-logo.svg" alt="Bower" display="inline" height="200px"></a> 


# Atalasoft Web Document Viewer control
[Atalasoft](http://www.atalasoft.com/) Web Document Viewer repository is for distribution on [Bower](https://bower.io/). 

### Installation
You can install this package locally with bower.io.
```shell
# To get the latest stable version, use bower from the command line.
bower install web-document-viewer

# To get the specific 10.7.0 version use:
bower install web-document-viewer#10.7.0

# To save the bower settings for future use:
bower install web-document-viewer --save

# Later, you can use easily update with:
bower update
```
> Note that web-document-viewer requires Jquery, Jquery-ui, Jquery.easing, Raphael packages as dependencies.

### Using web-document-viewer
Here is a sample on how to create a client-side view for web-document-viewer.
All installed dependencies should be referenced in the head section.

```html
<head>
    <meta charset="utf-8" />
    <title>Web Document Viewer Sample</title>
    <link href="bower_components/jquery-ui/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="bower_components/web-document-viewer/atalaWebDocumentViewer.css" rel="stylesheet" type="text/css" />

    <script src="bower_components/jquery/jquery.min.js" type="text/javascript"></script>
    <script src="bower_components/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
    <script src="bower_components/jquery.easing/jquery.easing.min.js" type="text/javascript"></script>
    <script src="bower_components/raphael/raphael.min.js" type="text/javascript"></script>

    <script src="bower_components/web-document-viewer/atalaWebDocumentViewer.js" type="text/javascript"></script>
    <style type="text/css">
		#atala-document-toolbar
		{
		    width: 800px;
		}
		
		#atala-document-thumbs
		{
		    float:left;
		    display: inline-block;
		    width:150px;
		    height:600px;
		}	
		
		#atala-document-container
		{
			height:600px;
			width: 600px;
			display: inline-block;
		}
	</style>
</head>
<body>
    <div>
        <div id="atala-document-toolbar"></div>
        <div>
            <div id="atala-document-thumbs"></div>
            <div id="atala-document-container"></div>
        </div>
    </div>

<script>
    var _viewer;
    var _thumbs;

    (function() {
        _viewer = new Atalasoft.Controls.WebDocumentViewer({
            parent: $('#atala-document-container'),
            toolbarparent: $('#atala-document-toolbar'),
            serverurl: 'WDVHandler.ashx',
            savepath: 'Save/',
        });

        _thumbs = new Atalasoft.Controls.WebDocumentThumbnailer({
            parent: $('#atala-document-thumbs'),
            serverurl: 'WDVHandler.ashx',
            viewer: _viewer
        });
    })();
</script>
</body>
```
WDVHandler.ashx as serverurl is the name of the class inherited from IHttpHandler [C#].
See [NuGet Tutorial I - Web Document Viewer](http://atalasoft.github.io/2016/06/21/nuget-tutorial-wdv/) to deploy server-side using NuGet packages.

### Licensing 

To run the projects locally, you need to have a DotImage license. There are various way to acquire the license:

 - Use [DotImage Activation Wizard Visual Studio extension](https://visualstudiogallery.msdn.microsoft.com/88ff07c9-fe68-48bd-bfdc-3fbc8a0ec1db)
 - Download a complete DotImage installation package from the [Atalasoft web site](https://atalasoft.com). You will be prompted to activate the product during installation

Web Document Viewer object cross browser client-side script. 
Copyright 2003-2016 Atalasoft Inc. All Rights Reserved.

This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)
Permission for usage and modification of this code is only permitted 
with the purchase of a source code license.

### Related Articles

 - [Introducing NuGet Packages](http://atalasoft.github.io/2016/05/03/introducing-nuget/)
 - [Introducing Activation Wizard Extension](http://atalasoft.github.io/2016/05/14/introducing-activation-wizard-extension/) 
