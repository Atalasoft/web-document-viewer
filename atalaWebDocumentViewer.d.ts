//-------------------------------------------------------------------------------------------------
//
//  Type definition file for Atalasoft Web Document Viewer. 
//  (C) 2000-2024 Tungsten Automation. All Rights Reserved.
//
//  This source code is property of Atalasoft, Inc. (http://www.atalasoft.com/)
//  Permission for usage and modification of this code is only permitted 
//  with the purchase of a source code license.
//-------------------------------------------------------------------------------------------------
// Version 11,5,0,205

export as namespace Atalasoft;
interface NotificationCallback {
    ():  any;
}

interface AnnotationCallback {
    (event:  object):  any;
}

interface AnnotationContextMenuCallback{
    (event:  object, annotation: Controls.AnnotationData, menu: AnnotationContextMenu): any;
}

interface BeforeHandlerRequestCallback{
    (event: Controls.BeforeHandlerRequestEvent): any;
}

interface GetPageTextCallback{
    (text:  string):  any;
}

interface ErrorCallback{
    (event: ErrorEvent): any;
}

interface OpenUrlCallback {
    (error:  string):  any;
}

interface ReloadPageTextCallback {
    (index:  number):  any;
}

interface TextSearchCallback{
    (iterator:  Controls.TextSearchIterator, match:  TextSearchResult):  any;
}

interface TextSearchResult{
    page:  number;
    region:  number;
    line:  number;
    word:  number;
}

interface DocumentPageReference{
    uri:  string;
    index:  number;
}

interface BookmarkData{
    id: number;
    Page: number;
    Top: number;
    Text: string;
    Children: BookmarkData[];
}

interface DocumentInfo{
    count:  number;
    dpi:  number;
    size:  Record<string,any>;
    vector:  boolean;
}

interface AnnotationFill{
    color?:  string;
    opacity?:  number;
}

interface AnnotationLineCap{
    style?:  string;
    width?:  string;
    height?:  string;
}

interface AnnotationOutline{
    color?: string;
    opacity?: number; 
    width?: number;
    startcap?:  AnnotationLineCap;
    endcap?:  AnnotationLineCap;
}

interface AnnotationContextMenu{
    menuItemTitle:  AnnotationHandler;
}

interface AnnotationHandler{
    annotation: Controls.AnnotationData;
}

interface Point{
    x:  number;
    y:  number;
}

interface AnnotationTextConfig{
    value?:  string;
    align?:  string;
    font?:  object;
    readonly?:  boolean;
    autoscale?:  boolean;
}

interface TextMouseToolConfig{
    scrolltriggerarea?:  Utils.ScrollArea;
    throttlingtreshold?:  number;
    selection?:  Record<string, any>;
    highlight?:  Record<string, any>;
    hookcopy?:  boolean;
    allowsearch?:  boolean;
    wrapsearch?:  boolean;
    searchdelay?:  number;
}

interface MouseToolConfig{
    type?:  Utils.MouseToolType;
    text?:  TextMouseToolConfig;
}

interface FileUploadConfig{
    enabled?:  boolean;
    uploadpath?:  string;
    allowedfiletypes?:  string;
    allowedmaxfilesize?:  number;
    allowmultiplefiles?:  boolean;
    allowdragdrop?:  boolean;
    filesuploadconcurrency?:  number;
    closeuiafterupload?:  boolean;
}

interface AtalaRequest{
    method: string;
    data: Record<string, any>;
    type: string;
}

interface ToolbarButtonConfig{
    id:  string;
    class?:  string;
    icon:  string;
    tooltip?:  string;
    onclick?:  NotificationCallback;
}

interface ThumbDragCompleteEventArgs{
    dragindex:  number;
    dragindices:  number[];
    dropindex:  number;
    source: 	Controls.WebDocumentThumbnailer;
    target:  Controls.WebDocumentThumbnailer;
}

interface ThumbDragEndEventArgs{
    dragindex:  number;
    dragindices:  number[];
    dropindex:  number;
    source: 	Controls.WebDocumentThumbnailer;
    target:  Controls.WebDocumentThumbnailer;
    external:  boolean;
    pageref:  DocumentPageReference;
    pagerefs:  DocumentPageReference[];
    cancel?:  boolean;
    copyannotations?:  boolean;
}

interface ThumbDragEndCallback {
    (event:  object,args:  ThumbDragEndEventArgs):  any;
}

interface UploadFileErrorInfo{
    filename:  string;
    error:  string;
    canceled:  boolean;
    customData:  Record<string, any>;
}

interface UploadFileInfo{
    filename:  string;
    size:  number;
    cancel:  boolean;
}

interface UploadingFileInfo{
    filename: string;
    uploadedbytes: number;
    totalbytes: number;
    cancel: boolean;
}

interface UploadStartInfo{
    cancel: boolean;
}

export namespace Controls {

    export class AnnotationController{
        public constructor();
        //#region Methods

        /**
             * Inserts a layer of annotations at the source URL and index into the given page index. Single layer of annotations corresponds to single document page.
             * @param sourceUrl Reserved for future use.
             * @param layer     The annotation layer data.
             * @param index     Index the layer is to be inserted into.
             * @param callback  Function to be called when the operation has completed.
             */
        public insertLayer(sourceUrl:  string, layer:  AnnotationData[], index:  number, callback?:  NotificationCallback):  void;

        /**
             * Cancels the drawing of an annotation and returns the viewer to the previous tool.
             */
        public cancelDraw(): void;

        /**
             * Deletes an annotation on the given page by it's index on the page.
             * @param pageIndex  Page index the annotation is located on.
             * @param annIndex   Index of the annotation on the page.
             */
        public deleteFromPage(pageIndex: number, annIndex: number): void;

        /**
             * Deselects all annotations on every page.
             */
        public deselectAll(): void;

        /**
             * Deselects all annotations on the given page.
             * @param index The index of the page the annotations should be deselected on.
             */
        public deselectAllOnPage(index: number): void;

        /**
             * Setups the viewport to create an annotation
             * @param aConfig   Configuration for the annotation to draw
             * @param callback  function to call when the annotation has finished drawing.
             * @param cancelled function to call when the annotation draw was canceled.
             */
        public drawAnnotation(aConfig: AnnotationData, callback?: NotificationCallback, cancelled?: NotificationCallback): void;

        /**
             * Gets an array of annotation data objects located on the given zero based page index.
             * @param index The page index the annotations are located on.
             */
        public getFromPage(index: number): AnnotationData[];

        /**
             * Gets an array of selected annotation data objects.
             */
        public getSelected(): AnnotationData[];

        /**
             * Hides the text annotation editor. Applies only to text annotations and ignores other types of annotations.
             * @param annotation The annotation object to hide editor for.
             */
        public hideEditor(annotation: AnnotationData): void;

        /**
             * Creates an annotation on the desired page with the given annotation data.
             * @param annotationConfig Key value pairs representing annotation data.
             * @param index            The index of the page the annotation should be created on.
             */
        public createOnPage(annotationConfig: AnnotationData, index: number): AnnotationData;

        /**
             * Moves a layer of annotations from one page index to another.
             * @param sourceIndex index of the layer to be moved.
             * @param destIndex   Destination zero based page index.
             * @param callback    Function to be called when the operation has completed.
             */
        public moveLayer(sourceIndex: number, destIndex: number, callback?: NotificationCallback): void;

        /**
             * Removes a layer(page annotation) of annotations. All other layers are shifted. This operation corresponds to removing page from the document.
             * @param index    index of the layer to be removed.
             * @param callback Function to be called when the operation has completed.
             */
        public removeLayer(index: number, callback?: NotificationCallback): void;

        /**
             * Scrolls viewer to the specified annotation.
             * @param anno the annotation object to scroll to.
             * @param callback  Function to be called when the operation has completed.
             */
        public scrollTo(anno: AnnotationData,callback?: NotificationCallback): void;

        /**
             * Selects all annotations on every page.
             */
        public selectAll(): void;

        /**
             * Selects all annotations on the given page.
             * @param index The index of the page the annotations should be selected on.
             */
        public selectAllOnPage(index: number): void;

        /**
             * Sets the default annotation properties for initially created annotations.
             * @param aConfig Default configurations for different types of the annotations.
             */
        public setDefaults(aConfig: AnnotationData[]): WebDocumentViewer;

        /**
             * Sets the default annotation properties for image annotations
             * @param aConfig Default configurations image annotations.
             */
        public setImages(aConfig: AnnotationData[]): WebDocumentViewer;

        /**
             * Sets the default annotation properties for stamp annotations.
             * @param aConfig Default configurations stamp annotations.
             */
        public setStamps(aConfig: AnnotationData[]): WebDocumentViewer;

        /**
             * Shows the editor dialog for text annotations. Ignores other types of annotations.
             * @param annotation the annotation object to show editor for.
             */
        public showEditor(annotation: AnnotationData): void;
        //#endregion

    }
    
    /**
     * WebDocumentViewer Document operations API
     */
    export class DocumentController{
        public constructor();

        //#region Methods
        /**
         * Gets the page reference object for the specified page. This can be passed as a 'srcindex' parameter into document.insertPage method.
         * @param index Index of the page to get the reference.
         */
        public getPageReference(index: number): DocumentPageReference;

        /**
         * Gets the rotation angle of the specified page.
         * @param index Index of the page to retrieve rotation angle.
         */
        public getPageRotation(index: number): number;

        /**
         * Inserts a page at the destination index from the given source uri and index.
         * @param documenturl The identifier of the document which contains the page. If empty, src numeric value is considered as referencing currently opened document.
         * @param src         Zero based index of the page in the source document. Can be passed as string representation of a number. Or page descriptor returned by the getPageReference.
         * @param destination Index in the target document to insert the page.
         * @param callback    Function to execute when the operation has completed.
         */
        public insertPage(documenturl: string, src: number|string|DocumentPageReference,
            destination: number, callback?: NotificationCallback): void;
        // eslint-disable-next-line no-dupe-class-members
        public insertPage(src: number|string|DocumentPageReference, destination: number, callback?: NotificationCallback): void;

        /**
         * Inserts a page at the destination index from the given source uri and index.
         * @param documenturl The identifier of the document which contains the page. If empty, src numeric value is considered as referencing currently opened document.
         * @param src         Zero based indices of the pages in the source document. Can be passed as string representation of numbers. Or page descriptors returned by the getPageReference.
         * @param destination Index in the target document to insert the page. 
         * @param callback    Function to execute when the operation has completed.
         */
        public insertPages(documenturl: string, src: number[]|string[]|DocumentPageReference[],
            destination: number, callback?: NotificationCallback): void;
        // eslint-disable-next-line no-dupe-class-members
        public insertPages(src: number[]|string[]|DocumentPageReference[],
            destination: number, callback?: NotificationCallback): void;

        /**
         * Moves a page from the source index to the destination index within single document.
         * @param sourceIndex      Source index to get the page from. Can be passed as string representation of a number
         * @param destinationIndex Destination index to insert the page. Can be passed as string representation of a number 
         * @param callback         Function to execute when the operation has completed.
         */
        public movePage(sourceIndex: number|string, destinationIndex: number|string, callback?: NotificationCallback): void;

        /**
         * Moves pages from the source indices to the destination index within single document.
         * @param sourceIndices      Source indices to get pages from. Can be passed as string representation of numbers
         * @param destinationIndex Destination index to insert pages. Can be passed as string representation of a number
         * @param callback         Function to execute when the operation has completed.
         */
        public movePages(sourceIndices: number[]|string[], destinationIndex: number|string, callback?: NotificationCallback): void;

        /**
         * Removes the page at the given index.
         * @param index    Index of the page to remove. Can be passed as string representation of a number
         * @param callback Function to execute when the operation has completed.
         */
        public removePage(index: number|string, callback?: NotificationCallback): void;

        /**
         * Removes pages at given indices.
         * @param indices  Indices of pages to remove. Can be passed as string representation of numbers
         * @param callback Function to execute when the operation has completed.
         */
        public removePages(indices: number[]|string[], callback?: NotificationCallback): void;

        /**
         * Rotates the specified angle page to the specified angle.
         * @param index Index of the page to rotate. Can be passed as string representation of a number
         * @param angle Clockwise rotation angle in degrees. Can be passed as string representation of a number
         * @param callback Function to execute when the operation has completed.
         */
        public rotatePage(index: number|string, angle: number|string, callback?: NotificationCallback): void;

        /**
         * Rotates specified angle pages to specified angles.
         * @param indices Indices of pages to rotate.
         * @param angles  Clockwise rotation angles in degrees. Can be passed as string representation of a number If angles is a number|string or an number[]|string[] with length 1, then all pages will be rotated to this angle, otherwise each page will be rotated to the specified angle in array.
         * @param callback Function to execute when the operation has completed.
         */
        public rotatePages(indices: number[]|string[], angles: number|number[]|string[], callback?: NotificationCallback): void;
        
        /**
        * Gets all bookmarks for PDF document.
        */
        public getBookmarks(): BookmarkData[];

        /**
        * Gets an array of child bookmarks relative to specified.
        * @param {BookmarkData} bookmark - the bookmark object for which children are searched.
        */
        public getChildBookmarks(bookmark: BookmarkData): BookmarkData[];

        /**
        * Scrolls viewer to the specified bookmark.
        * @param {BookmarkData} bookmark - the bookmark object to scroll to.
        * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
        */
        public scrollToBookmark(bookmark: BookmarkData, callback?: NotificationCallback): void;

            
        /**
        * Removes whole information about the bookmarks from PDF document.
        * @param {NotificationCallback} [callback] - Function to be called when the operation has completed.
        */
        public removeAllBookmarks(callback?: NotificationCallback): void;
        
        //#endregion
    }
   
    /**
     * WebDocumentViewer Text Layer operations API.
     */
    export class TextController{
        public constructor();
        //#region Methods
        
        /**
         * Clears all text selection for the document.
         */
        public clearSelection(): void;

        /**
         * Copies selected text to clipboard.
         */
        public copySelected(): void;

        /**
         * Returns all text for the specified page.
         * @param index   Index of the page to retrieve text.
         * @param success Function that that is called when page text is loaded and formatted. 
         * @param fail    Function that that is called when page text load is failed. 
         */
        public getPageText(index: number, success?: GetPageTextCallback, fail?: NotificationCallback): string;

        /**
         * Retrieves the selected text.
         * Returns:  Selected text. Line break is inserted after each line and region.
         */
        public getSelected(): string;

        /**
         * Indicates whether page text is loaded.
         * @param index Index of the page to check text data state.
         */
        public isPageTextLoaded(index: number): boolean;

        /**
         * Forcibly triggers page text load.
         * @param index Index of the page to reset text data.
         * @param success Function that that is called when page text is loaded successfully.
         * @param fail 	Function that that is called when page text load is failed.
         */
        public reloadPageText(index: number, success?: Function, fail?: Function): void;

        /**
         * Marks page text data for reload. After this call text data will be loaded next time page will be inserted into DOM on scrolling
         * @param index Index of the page to reset text data. If not specified whole document text data is reset.
         */
        public resetPageText(index?: number): void;

        /**
         * Triggers text search for the specified pages. 
         * @param text Text to search for. If empty, previous search results are dropped.
         * @param startPage Index of the page to start search from. If not specified first page in document is assumed to be the first in search.
         * @param endPage Index of the page to end search where. If not specified last page in document is assumed to be the last in search.
         * @param activePage Index of the page from that viewer should start scrolling to the next search result.
         * @param callback Search callback that receives search results iterator.
         */
        public searchOnPages(text?: string, startPage?: number, endPage?: number,
            activePage?: number, callback?: TextSearchCallback): TextSearchIterator;

        /**
         * Selects all text on the page. Any optional arguments could be omitted and callback could be passed instead of it. 
         * @param index Index of the page to select page on.
         * @param region Index of the region to select.
         * @param line Index of the line to select.
         * @param word Index of the word to select.
         * @param success 
         * @param fail 
         */
        public selectPageText(index: number, region?: number, line?: number, word?: number,
            success?: NotificationCallback, fail?: NotificationCallback): void;

        /**
         * Deprecated:  Use the searchOnPages method instead
         * Triggers text search.
         * @param text Text to search for. If empty, previous search results are dropped.
         * @param startPage Index of the page to start search from. If not specified first page in document is assumed to be the first in search.
         * @param callback Search callback that receives search results iterator.
         */
        public search(text?: string, startPage?: number, callback?: TextSearchCallback): TextSearchIterator;
        //#endregion
    }

    export class TextSearchIterator{
        public constructor();
        public wrap: boolean;
        /**
         * Returns the formatted text for the whole line containing current match.
         */
        public getCurrentLineText(): string;

        /**
         * Gets the query text for this iterator.
         */
        public getQuery(): string;

        /**
         * Indicates whether this is executing background search. If true, subsequent next/prev calls are stored into the search queue.
         */
        public isSearching(): boolean;

        /**
         * Indicates whether this iterator corresponds to the active search.
         */
        public isValid(): boolean;

        /**
         * Advances current item to the next query match or adds operation to the queue in case if next match is currently awaited.
         * @param callback function that that is called when next match is found.
         */
        public next(callback: TextSearchCallback): void;

        /**
         * Advances current item to the previous query match or adds operation to the queue in case if next match is currently awaited.
         * @param callback Function that that is called when previous match is found.
         */
        public prev(callback: TextSearchCallback): void;
    }

    export interface WebDocumentViewerConfig{
        parent: object;
        serverurl: string;
        allowannotations?: boolean;
        allowforms?: boolean;
        allowtext?: boolean;
        annotations?: AnnotationsConfig;
        annotationsurl?: string;
        columns?: number;
        direction?: 	Utils.ScrollDirection;
        documenturl?: string;
        fitting?: Utils.Fitting;
        forcepagefit?: boolean;
        formurl?: string;
        jpeg?: boolean;
        localization?: Utils.LocalizationStrings;
        maxwidth?: number;
        memorythreshold?: number;
        minwidth?: number;
        mousetool?: MouseToolConfig | Utils.MouseToolType;
        pageborderwidth?: number;
        pagebuffersize?: number;
        maxpagebuffersize?: number;
        pageselectlocation?: Utils.PageSelection;
        pagespacing?: number;
        allowflick?: boolean;
        persistrotation?: boolean;
        savefileformat?: string;
        savepath?: string;
        scripturl?: string;
        savepreviouslysigneddocument?: boolean;
        showbookmarks?: boolean;
        showbuttontext?: boolean;
        showerrors?: boolean;
        showpageborder?: boolean;
        showpagenumber?: boolean;
        showpagenumbertooltip?: boolean;
        showrotatetools?: boolean;
        showscrollbars?: boolean;
        showselecttools?: boolean;
        showstatus?: boolean;
        singlepage?: boolean;
        tabular?: boolean;
        tiling?: boolean;
        toolbarbuttons?: ToolbarButtonConfig[];
        toolbarparent?: Record<string, any>;
        upload?: FileUploadConfig;
        zoom?: number;
    }

    export interface WebThumbnailerConfig extends WebDocumentViewerConfig{
        viewer?: WebDocumentViewer;
        selectedhovercolor?: string;
        allowdragdrop?: boolean;
        dragdelay?: number;
        hovercolor?: string;
        maxwidth?: number;
        minwidth?: number;
        selectedcolor?: string;
        backcolor?: string;
        selectedindex?: number;
        selecteditemsorder?: Utils.SelectedItemsOrder;
        selectionmode?: Utils.SelectionMode;
        showthumbcaption?: boolean;
        thumbcaptionformat?: string;
        thumbpadding?: number;
    }


    export interface AnnotationsConfig{
        defaults?: AnnotationDataConfig[];
        stamps?: AnnotationDataConfig[];
        images?: AnnotationDataConfig[];
        saveusername?: boolean;
    }

    export class AnnotationData {
        public constructor(config: AnnotationDataConfig)
        // Methods
        public update(): void;
        public getPageIndex(): number;
        // Properties
        public name: string;
        public type: Annotations.AnnotationTypes;
        public rotation?: number;
        public burn?: boolean;
        public extra?: Record<string, any>;
        public fill?: AnnotationFill;
        public height?: number;
        public movable?: boolean;
        public outline?: AnnotationOutline;
        public points?: Point[];
        public readonly?: boolean;
        public resizable?: boolean;
        public rotatable?: boolean;
        public cornerradius?: number;
        public selectable?: boolean;
        public selected?: boolean;
        public src?: string;
        public text?: AnnotationTextConfig;
        public tooltip?: string;
        public username?: string;
        public visible?: boolean;
        public width?: number;
        public x?: number;
        public y?: number;
    }
    
    export interface AnnotationDataConfig{
        name: string;
        type: Annotations.AnnotationTypes;
        rotation?: number;
        burn?: boolean;
        extra?: Record<string, any>;
        fill?: AnnotationFill;
        height?: number;
        movable?: boolean;
        outline?: AnnotationOutline;
        points?: Point[];
        readonly?: boolean;
        resizable?: boolean;
        rotatable?: boolean;
        cornerradius?: number;
        selectable?: boolean;
        selected?: boolean;
        src?: string;
        text?: AnnotationTextConfig;
        tooltip?: string;
        username?: string;
        visible?: boolean;
        width?: number;
        x?: number;
        y?: number;
    }

    export class WebDocumentViewer {
        public constructor(config: WebDocumentViewerConfig);
        // eslint-disable-next-line no-dupe-class-members
        public constructor(config: WebDocumentViewerConfig,openCallback: OpenUrlCallback);
        
        //#region Methods

        /**
         * Reloads the specified page.
         * @param {number} index - The index of the page to reload.
         * @param {string|boolean} [annotations=false] - Url of the annotation xmp file or flag indicating whether to reload annotations of boolean flag indicating whether to load annotations data.
         * @param {string|boolean} [forms] - Url of the form file or flag indicating whether to reload forms of boolean flag indicating whether to load forms data.
         * @param {Object} [params] - A plain object containing optional parameters that will be passed to server.
         *
         * Params could contain any application specific information that should be passed to server.
         * For example, this could be the aggregated list of the parameters that was used in {@link Atalasoft.Controls.WebDocumentViewer#reloadPage|reloadPage} calls for different pages.
         * @param {NotificationCallback} [callback] - function that is called when page have been loaded.
         *
        */
        public reloadPage(index:  number,annotations?: string|boolean,forms?: string|boolean,params?: any,
            callback?: NotificationCallback): void;

        /**
         *  Attaches a handler to an event.
         * @param {string} event - the name of the event to bind to.
         * @param {function} handler - event handler.
         * @returns {Atalasoft.Controls.WebDocumentViewer} reference to `this`.
         */
        public bind(event: string,handler: Function): WebDocumentViewer;

        /**
         * Zooms in one level.
         * @param callback Function to execute when the zoom operation is finished
         */
        public zoomIn(callback?: NotificationCallback): void;

        /**
         * Asynchronously zooms the viewer to the given zoom over the default zoom duration
         * @param zoom Desired zoom level to zoom to.
         * @param callback function to execute after the zoom is finished animating.
         */
        public zoom(zoom: number,callback?: NotificationCallback): void;

        /**
         * Removes all DOM elements, internal references, and empties memory intensive objects. The WebDocumentViewer will no longer function after a call to this method.
         */
        public dispose(): void;

        /**
         * Resets the viewer to its default state.
         * @param callback Function to execute when the empty process is finished
         */
        public empty(callback?: OpenUrlCallback): void;

        /**
         * Filters files for upload using the settings from config upload section.

        Filters files that should be uploaded using the settings from config upload section. This includes filtering by size, by type and even by name in order to find out files for upload that have same names. It can be useful, because all events in WDV related to upload use filename as a key, thus you can find duplicates and upload such files in separate uploadFiles method calls.

        This method is fully optional and even if some files failed to pass this filtering, they still can be uploaded to server;
         * @param files An array of file objects that can be used for upload.
         * @param filteredFiles An array of filenames that previously were filtered. It's used for find duplicates in a new bunch of files.
         * @param callback Function to execute when the filtering has finished.
         */
        public filterFilesForUpload(files: File[],filteredFiles?: string[],callback?: NotificationCallback): File[];
        /**
         * Asynchronously zooms the viewer to fit to a page.
         * @param fit Type of fitting to fit the page to.
         * @param pageNumber Page number to fit to. Note, that it's 1-based.
         * @param callback Function to execute after the fit is done animating.
         */
        public fit(fit: Atalasoft.Utils.Fitting,pageNumber: number,callback: NotificationCallback): void;

        /**
         * Uploads several files on server to the predefined upload folder or to the given path.
         * @param files     Array of file objects that should be uploaded.
         * @param uploadpath Relative path to upload to starting from uploadpath. Must be writable.
         * @param callback Function to execute when the upload has requested.
         */
        public uploadFiles(files: File[], uploadpath?: string, callback?: NotificationCallback): void;

        /**
         * Gets the current page index
         * Returns:  Zero based index of the current page.
         */
        public getCurrentPageIndex(): number;

        /**
         * Gets the current document info
         * Returns:  object indicating document main page size, and number of pages
         */
        public getDocumentInfo(): DocumentInfo;

        /**
         * Gets the current zoom level of the viewer.
         */
        public getZoom(): number;

        /**
         * Checks whether specified document page have been loaded.
         * @param index Page index.
         */
        public isPageLoaded(index: number): boolean;

        /**
         * Indicates whether the viewer is ready to receive commands.
         */
        public isReady(): boolean;

        /**
         * Scrolls to the next viewable page.
         * @param n        Number of pages to scroll forward.
         * @param callback Function to execute when the scroll operation is finished.
         */
        public next(n: number,callback: NotificationCallback): void;

        /**
         * Opens the document at the given urls. It's possible to call this method multiple times for the same document to load document and the forms or annotations data separately.
         * @param documenturl    url of the document file with respect to the config.serverurl. 
         * @param annotationsurl url of the annotation xmp file with respect to the config.serverurl
         * @param formurl        url of the form file with respect to the config.serverurl.
         * @param callback       Function to execute when the open operation is finished.
         */
        public openUrl(documenturl?: string, annotationsurl?: string, formurl?: string, callback?: OpenUrlCallback): void;

        /**
         * Scrolls to the previous viewable page.
         * @param n        Number of pages to scroll backward.
         * @param callback Function to execute when the scroll operation is finished.
         */
        public previous(n: number,callback?: NotificationCallback): void;

        /**
         * Uploads one file on server to the predefined upload folder or to the given path.
         * @param file       File object that should be uploaded.
         * @param uploadpath Relative path to upload to starting from uploadpath. Must be writable.
         * @param callback   Function to execute when the upload has requested.
         */
        public uploadFile(file: File, uploadpath?: string, callback?: NotificationCallback): void;

        /**
         * Saves the client changes in this document to the predefined save folder or to the given path.
         * @param subpath    Relative path to save to starting from savepath. Must be writable.
         * @param saveformat Save file format. If specified, the value overrides savefileformat form config.
         * @param params     A plain object containing optional reload parameters that will be passed to server.
         * @param callback   to execute when the save has finished
         */
        public save(subpath?: string, saveformat?: string, params?: object, callback?: NotificationCallback): void;

        /**
         * Scrolls by the given deltas, does not account for zoom, i.e. dx and dy values are passed in window coordinate space.
         * @param dx Indicating delta of the x axis.
         * @param dy Indicating delta of the y axis .
         * @param ani Indicating whether to animate this scroll.
         * @param callback Function to execute when the scroll operation is finished. 
         */
        public scrollBy(dx: number, dy: number, ani?: boolean, callback?: NotificationCallback): void;

        /**
         * Scrolls to the given coordinates, does not account for zoom, i.e. x and y values are passed in window coordinate space.
         * @param x     Indicating the coordinate of the x axis.
         * @param y     Indicating the coordinate of the y axis.
         * @param ani   Indicating whether to animate this scroll.
         * @param callback function to execute when the scroll operation is finished.
         */
        public scrollTo(x: number, y: number, ani?: boolean, callback?: NotificationCallback): void;

        /**
         * Detaches the handler from the event.
         * @param event   the name of the event to unbind.
         * @param handler the event handler to unbind. If not specified, all handlers are unbound.
         */
        public unbind(event: string,handler?: Function): WebDocumentViewer;

        /**
         * Triggers the event.
         * @param even       the name of the event to trigger.
         * @param parameters the event data.
         */
        public trigger(even: string,parameters?: object): WebDocumentViewer;

        /**
         * Specifies the behavior of the mouse from within the WebDocumentViewer.
         * @param tool 
         */
        public setMouseTool(tool: Utils.MouseToolType): void;

        /**
         * Scrolls the viewer to the given page index and executes the callback when finished.
         * @param index    Index of the page to show. 
         * @param callback Function to execute after this operation is done.
         */
        public showPage(index: number,callback?: NotificationCallback): void;

        /**
         * Zooms out one level.
         * @param callback 
         */
        public zoomOut(callback?: NotificationCallback): void;

        /**
         * Scrolls the viewer to the given page number and executes the callback when finished.
         * @param pageNumber Number of the page to show. Note that page number is expected 1-based.
         * @param callback   Function to execute after this operation is done
         */
        public showPageNumber(pageNumber: number, callback?: NotificationCallback): void;

        //#endregion

        public annotations: AnnotationController;
        public document: DocumentController;
    }

    export class WebDocumentThumbnailer extends WebDocumentViewer{
        public constructor(config?: WebThumbnailerConfig,openCallback?: OpenUrlCallback);
        /**
         * Takes ownership over referenced viewer, i.e. if shared viewer is currently displaying other document, it's switched to display document from calling thumbnailer.
         */
        public activate(): void;

        /**
         * Resets the thumbnail highlight at the given index, and scrolls to the next selected thumbnail in the linked viewer, if possible.
         * This function doesn't deselect the given index in the single select mode, and in multi select mode, if one page is selected.
         * @param index Index of the page to deselect. Can be passed as string representation of a number
         * @param callback 	function that is called when thumbnail has been deselected.
         */
        public deselectThumb(index: number|string, callback?: NotificationCallback): void;

        /**
         * Gets the selected thumbnail index.
         */
        public getSelectedPageIndex(): number;

        /**
         * Gets the selected thumbnails indices with respect of selecteditemsorder parameter value.
         */
        public getSelectedPagesIndices(): number[];

        /**
         * Checks whether current thumbnailer is controlling referenced viewer.
         */
        public isActive(): boolean;

        /**
         * Scrolls the viewer to the given page number and executes the callback when finished
         * @param index Index of the page to scroll to.
         * @param callback Function to execute after this operation is done.
         */
        public scrollToThumb(index: number, callback?: NotificationCallback): void;

        /**
         * Highlights the thumbnail at the given index, and scrolls to it in the linked viewer, if possible.
         * @param index Index of the page to select. Can be passed as string representation of a number
         * @param append Append index to the already selected thumbs or not. Its value ignores in single select mode.
         * @param callback function that is called when thumbnail has been selected.
         */
        public selectThumb(index: number|string, append?: boolean, callback?: NotificationCallback): void;
    }
    
    //#region WDV Events
    interface BeforeHandlerRequestEvent{
        request: AtalaRequest;
    }

    interface DocumentInfoChangedEvent{
        info: DocumentInfo;
        customData: Record<string, any>;
    }

    interface DocumentLoadedEvent{
        customData: Record<string, any>;
    }

    interface DocumentSavedEvent{
        success: boolean;
        fileName: string;
        customData: Record<string, any>;
    }

    interface ErrorEvent{
        name: string;
        message: string;
    }

    interface FileAddedToUploadEvent{
        filename: string;
        reason: Utils.FileUploadRejectReason;
        success: boolean;
    }

    interface FileuploaderrorEvent{
        errorinfo: UploadFileErrorInfo;
    }

    interface FileUploadFinishedEvent{
        filename: string;
        filepath: string;
        customData: Record<string, any>;
    }

    interface FileuploadingEvent{
        uploadinfo: UploadFileInfo;
    }

    interface FileUploadStartedEvent{
        uploadinfo: UploadFileInfo;
    }

    interface PageRecycledEvent{
        index: number;
    }

    interface PageResizeEvent{
        index: number;
        width: number;
        height: number;
    }

    interface PageShownEvent{
        index: number;
    }

    interface PageSizechangedEvent{
        index: number;
        width: number;
        height: number;
        dx: number;
        dy: number;
    }

    interface PagetextloadedEvent{
        index: number;
        customData: Record<string, any>;
    }

    interface ScrollEvent{
        x: number;
        y: number;
        dx: number;
        dy: number;
    }

    interface StatusMessageEvent{
        message: string;
    }

    interface UploadFinishedEvent{
        success: boolean;
        canceled: boolean;
    }

    interface UploadStartedEvent{
        info: UploadStartInfo;
    }

    interface ZoomChangedEvent{
        zoom: number;
    }
    //#endregion
    //#region WDT events
    interface ThumbDeselectedEvent{
        index: number;
    }

    interface ThumbDragCompleteEvent{
        event: Record<string, any>;
        args: ThumbDragCompleteEventArgs;
    }

    interface ThumbdragendEvent{
        event: Record<string, any>;
        args: ThumbDragEndEventArgs;
    }

    interface ThumbdragstartEvent{
        dragindex: number;
        dragindices: number[];
    }

    interface ThumbselectedEvent{
        index: number;
    }
    //#endregion
    //#region Annotation Controller events
    interface AnnotationclickedEvent{
        annotation: AnnotationData;
    }

    interface AnnotationDoubleClickedEvent{
        annotation: AnnotationData;
    }

    interface AnnotationDragEndEvent{
        annotation: AnnotationData;
    }

    interface AnnotationDragStartEvent{
        annotation: AnnotationData;
    }

    interface AnnotationCreatedEvent{
        annotation: AnnotationData;
        page: number;
    }

    interface AnnotationDeletedEvent{
        page: number;
        index: number;
    }

    interface AnnotationDrawEndEvent{
        annotation: AnnotationData;
        canceled: boolean;
    }

    interface AnnotationDrawStartEvent{
        annotation: AnnotationData;
        canceled: boolean;
    }

    interface AnnotationLoadedEvent{
        annotation: AnnotationData;
        customData: Record<string, any>;
    }

    interface AnnotationMouseDownEvent{
        annotation: AnnotationData;
    }

    interface AnnotationMouseDownLeftEvent{
        annotation: AnnotationData;
    }

    interface AnnotationMouseDownRightEvent{
        annotation: AnnotationData;
    }

    interface AnnotationMouseMoveEvent{
        annotation: AnnotationData;
    }

    interface AnnotationMouseOutEvent{
        annotation: AnnotationData;
    }

    interface AnnotationMouseOverEvent{
        annotation: AnnotationData;
    }

    interface AnnotationMouseUpEvent{
        annotation: AnnotationData;
    }

    interface AnnotationMovedEvent{
        annotation: AnnotationData;
    }

    interface AnnotationPinchResizeEvent{
        annotation: AnnotationData;
    }

    interface AnnotationRepaintedEvent{
        annotation: AnnotationData;
    }
    interface AnnotationResizedEvent{
        annotation: AnnotationData;
    }
    interface AnnotationRightClickedEvent{
        annotation: AnnotationData;
    }
    interface AnnotationRotatedEvent{
        annotation: AnnotationData;
    }
    interface AnnotationTextChangedEvent{
        annotation: AnnotationData;
    }

    interface AnnotationChangedEvent{
        annotation: AnnotationData;
        annobefore: AnnotationData;
    }

    interface AnnotationsLoadedEvent{
        annotation: AnnotationData;
    }

    interface AnnotationTouchEndEvent{
        annotation: AnnotationData;
    }

    interface AnnotationTouchMoveEvent{
        annotation: AnnotationData;
    }

    interface AnnotationTouchStartEvent{
        annotation: AnnotationData;
    }

    interface ContextMenuEvent{
        annotation: AnnotationData;
        menu: AnnotationContextMenu;
    }

    interface LayerInsertedEvent{
        index: number;
    }

    interface LayerMovedEvent{
        srcindex: number;
        destindex: number;
    }

    interface LayerRemovedEvent{
        index: number;
        layer: AnnotationData[];
    }
    //#endregion

    //#region Document events
    interface PageInsertedEvent{
        srcuri: string;
        srcindex: number;
        index: number;
    }

    interface PageMovedEvent{
        shiftedsrcindex: number;
        srcindex: number;
        index: number;
    }

    interface PageRemovedEvent{
        index: number;
    }

    interface PageRotatedEvent{
        index: number;
        angle: number;
    }
    //#endregion
}

export namespace Utils{
    export const enum Fitting{None,Best,Width,Height}
    export const enum MouseToolType{None,Pan,ZoomIn,ZoomOut,ContextMenu,PassThrough,Selection,ZoomArea,Text}
    export const enum MouseToolCursor{Auto,Arrow,Crosshair,Grab,Hand,Move,ZoomIn,ZoomOut,Text,VerticalText,Wait,Custom}
    export const enum ScrollDirection{Horizontal,Vertical}
    export const enum ScrollArea{None,Normal,Large}
    export const enum PageSelection{TopLeft,MiddleLeft,BottomLeft,Center}
    export const enum SelectedItemsOrder{ItemIndexOrder,SelectedOrder}
    export const enum SelectionMode{SingleSelect,MultiSelect}
    export const enum FileUploadRejectReason{None,Size,Type,Name}
    
    export const Browser: BrowserMetadata;

    interface MobileObject{
        iOS: boolean;
        Android: boolean;
        IEMobile: boolean;
        Any(): boolean;
    }

    interface BrowserMetadata{
        Explorer: boolean;
        Firefox: boolean;
        Safari: boolean;
        Opera: boolean;
        Chrome: boolean;
        Mobile: MobileObject;
    }

    interface LocalizationStrings{
        annotations: LocalizationAnnotationStrings;
    }

    interface LocalizationAnnotationStrings{
        menuDeleteButton: string;
        menuPropertiesButton: string;
        dialogButtonOk: string;
        dialogButtonReset: string;
        dialogButtonCancel: string;
        rectangleDialogTitle: string;
        textDialogTitle: string;
        ellipseDialogTitle: string;
        lineDialogTitle: string;
        linesDialogTitle: string;
        freehandDialogTitle: string;
        polygonDialogTitle:	string;
        labelFillColor:	string;
        labelFillOpacity: string;
        labelRotation: string;
        labelOutlineColor: string;
        labelOutlineOpacity: string;
        labelOutlineWidth: string;
        labelOutlineStartcapWidth: string;
        labelOutlineStartcapHeight:	string;
        labelOutlineStartcapStyle: string;
        labelOutlineEndcapWidth: string;
        labelOutlineEndcapHeight: string;
        labelOutlineEndcapStyle: string;
        labelFontBold: string;
        labelFontItalic: string;
        labelFontColor:	string;
        labelFontFamily: string;
        labelFontSize: string;
        radioButtonTrue: string;
        radioButtonFalse: string;
        valueStyleNone: string;
        valueStyleOpen: string;
        valueStyleBlock: string;
        valueStyleOval: string;
        valueStyleDiamond: string;
        valueWidthMedium: string;
        valueWidthWide: string;
        valueWidthNarrow: string;
        valueHeightMedium: string;
        valueHeightLong: string;
        valueHeightShort: string;
    }
}

export namespace Annotations{
    /**
     * Represents supported annotation types.
     */
    export class AnnotationTypes{
        /**
         * Image annotation.
         */
        public static image: string;

        /**
         * Highlight annotation.
         */
        public static highlight:  string;

        /**
         * Rectangle annotation.
         */
        public static rectangle:  string;

        /**
         * Filled rectangle annotation.
         */
        public static fillrect:  string;

        /**
         * Text annotation.
         */
        public static text:  string;

        /**
         * Stamp annotation.
         */
        public static stamp:  string;

        /**
         * Ellipse annotation.
         */
        public static ellipse:  string;

        /**
         * Single line annotation.
         */
        public static line:  string;

        /**
         * Multiline annotation. Similar to `polygon` but represents not enclosed shape, first and last points are not joined.
         */
        public static lines:  string;

        /**
         * Freehand annotation.
         */
        public static freehand:  string;

        /**
         * Polygon annotation. Similar to `lines` but represents enclosed shape.
         */
        public static polygon:  string;
    } 
}