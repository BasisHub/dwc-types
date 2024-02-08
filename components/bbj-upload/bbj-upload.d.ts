import { EventEmitter } from '../../stencil-public-runtime';
import { BbjUploadPayload, BbjUploadFailedPayload, BbjUploadProgressPayload, BbjUploadRequestPayload, BbjUploadFilter, BbjUploadI18n } from './bbj-upload.types';
/**
 * The `BBjFileChooser<bbj-upload>` provides methods for manipulating a UI file uploader control.
 *
 * @part control - The component's base wrapper.
 * @part add-files - The wrapper around the label and the upload button
 * @part button-upload - The upload button
 * @part label-wrapper - The wrapper around the upload icon and the label
 * @part label - The label
 * @part list-wrapper - The wrapper around the files list
 * @part list - The list of files
 * @part file - The file
 * @part file-name - The name of the file
 * @part file-status - The status of the file
 * @part file-prefix - The file's prefix
 * @part file-body - The file's body
 * @part file-suffix - The file's suffix
 * @part buttons - The buttons wrapper
 * @part button-approve - The approve button
 * @part button-cancel - The cancel button
 * @part icon-upload - The upload icon
 * @part icon-failed - The failed icon
 * @part icon-succeeded - The succeed icon
 * @part icon-file - The file icon
 * @part icon-retry - The retry icon
 * @part icon-start - The start icon (start upload)
 * @part icon-clear - The clear icon
 *
 * @hostClass BBjFileChooser - Always applied
 * @hostClass bbj-client - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 *
 * @bbjControl BBjFileChooser(Upload)
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfilechooser/bbjfilechooser.htm
 *
 * @bbjMessage BuildClientFileChooserMessage
 * @bbjMessage AddFileFilterMessageParams
 * @bbjMessage RemoveFileFilterMessage
 * @bbjMessage SetFileFilterMessage
 * @bbjMessage GetFileFilterMessage
 * @bbjMessage SetShowAllFilesMessage
 * @bbjMessage GetShowAllFilesMessage
 * @bbjMessage SetFileChooserMultipleSelectMessage
 * @bbjMessage SetChooserButtonsVisibleMessage
 * @bbjMessage SetChooserButtonTextMessage
 * @bbjMessage GetChooserButtonTextMessage
 * @bbjMessage SetChooserButtonAccessKeyMessage
 * @bbjMessage ClickChooserButtonMessage
 * @bbjMessage GetStringArrayValueMessage
 * @bbjMessage SetFileChooserDropZoneVisibleMessage
 * @bbjMessage SetFileSelectionModeMessage
 * @bbjMessage FileChooserChangeEventCallbackMessage
 * @bbjMessage FileChooserApproveEventCallbackMessage
 * @bbjMessage FileChooserCancelEventCallbackMessage
 * @bbjMessage FileChooserFilterEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjUpload {
    private inputId;
    private $popup;
    private $button;
    private __suspendApproveEvent;
    el: HTMLBbjUploadElement;
    accept: string;
    dragOver: boolean;
    /** When true, the `All Files` filter will be enabled in the filters list. */
    allFilesFilterEnabled: boolean;
    /**
     * The id of one of the provided filters or a comma separated list of ids.
     * If `fs` attribute is true and the browser support the File System Access API , then setting multiple active
     * filters is not possible and only the first active filter will be used.
     **/
    activeFilter: string;
    /**
     * When true new selected files will be uploaded automatically.
     * This setting does not apply to dropped files @see `autoUploadOnDrop`
     **/
    autoUpload: boolean;
    /** When true, new dropped files will be uploaded automatically. */
    autoUploadOnDrop: boolean;
    /** When true and the user selects new files, current files in the list will be cleared according to the `autoClearBehaviour` attribute. */
    autoClear: boolean;
    /** The approve button's access key */
    approveButtonAccesskey: string;
    /** The approve button's label */
    approveButtonLabel: string;
    /** When true, the approve button will be visible, hidden otherwise */
    approveButtonVisible: boolean;
    /** The cancel button access key */
    cancelButtonAccesskey: string;
    /** The cancel button's label */
    cancelButtonLabel: string;
    /** When true, the cancel button will be visible, hidden otherwise */
    cancelButtonVisible: boolean;
    /**
     * Allow the user to trigger device inputs like camera. <br><br>
     *
     *  1. **user:** The user-facing camera and/or microphone should be used.<br>
     *  2. **environment:** The outward-facing camera and/or microphone should be used
     **/
    capture: 'user' | 'environment' | '';
    /** Define the `autoClear` behaviour */
    autoClearBehavior: 'both' | 'completed' | 'in-progress';
    /**
     * @bbjIgnore
     * When true, the request will set the withCredential flag.
     **/
    credentials: boolean;
    /** True to disable the component , false to enable it */
    disabled: boolean;
    /** When true, the user will be able to drop files on the element for uploading. */
    drop: boolean;
    /** The drop label */
    dropLabel: string;
    /** When true, the user will be able to select directories instead of files */
    directory: boolean;
    /** When true and the `directory` attribute is true, the user will be able to select directories and their suborders to upload */
    directoryRecursive: boolean;
    /**
     * @bbjIgnore
     * The array of [files](https://developer.mozilla.org/en-US/docs/Web/API/File) being processed, or already processed.
     **/
    files: Array<File>;
    /**
     * Array of filters to show as button dropdown or in the files picker dialog.
     *
     * If `fs` attribute is true and the browser support the File System Access API, filters
     * will appear in the System Files Picker dialog.
     **/
    filters: Array<BbjUploadFilter>;
    /**
     * When true the filters dropdown will be visible, hidden otherwise.
     *
     * If `fs` attribute is true and the browser support the File System Access API , this attribute
     * will be ignored.
     **/
    filtersVisible: boolean;
    /**
     * @bbjIgnore
     * The 'name' property of the Content-Disposition.
     **/
    formDataName: string;
    /**
     * When true, the component will try first to use File System Access API when available.
     * If the browser does not support the File System Access API, the component will fallback to its generic implementation which will work for all supported browsers.
     **/
    fs: boolean;
    /**
     * @bbjIgnore
     * A key/value map to send to server as headers
     **/
    headers: Record<string, unknown> | string;
    /** The component's translation object */
    i18n: BbjUploadI18n | string;
    /** The upload button label */
    label: string;
    /** The max number of files to upload */
    maxFiles: number;
    /** The maximum file size in bytes allowed to upload. This setting works per file. */
    maxSize: number;
    /**
     * @bbjIgnore
     * The HTTP method to use when sending the files to the server.
     **/
    method: 'POST' | 'PUT';
    /**
     * When true, multi filter selection will be enabled. Otherwise only one filter can be selected.
     *
     * If `fs` attribute is true and the browser support the File System Access API then this attribute will be ignored.
     **/
    multiFilterSelection: boolean;
    /**
     * @bbjIgnore
     * Time in milliseconds for the files upload process. if timedout then the request will be aborted.
     **/
    timeout: number;
    /** The theme name */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outlined-default' | 'outlined-gray' | 'outlined-primary' | 'outlined-success' | 'outlined-warning' | 'outlined-danger' | 'outlined-info' | null;
    /**
     * @bbjIgnore
     * The server url. if not provided then the current window location will be used.
     **/
    url: string;
    onFiltersChanged(_n: any, _o: any, prop: any): void;
    /** Emitted when the selected files are changed */
    listChangedEvent: EventEmitter<Array<File>>;
    /** Emitted when a file cannot be added */
    rejectedEvent: EventEmitter<string>;
    /** Fired when the upload is stated */
    startedEvent: EventEmitter<BbjUploadPayload>;
    /** Emitted when a file is being uploaded */
    progressEvent: EventEmitter<BbjUploadProgressPayload>;
    /** Fired when the actual server response is ready. */
    respondedEvent: EventEmitter<BbjUploadPayload>;
    /** Emitted when a file is upload is complete */
    uploadedEvent: EventEmitter<BbjUploadPayload>;
    /** Emitted when a file is upload is failed */
    failedEvent: EventEmitter<BbjUploadFailedPayload>;
    /** Fired when the upload request is being sent */
    requestEvent: EventEmitter<BbjUploadRequestPayload>;
    /** Fired when the file is aborted */
    abortedEvent: EventEmitter<BbjUploadPayload>;
    /** Fired when the approve button is clicked , approve `method` is invoked or when `autoUpload` is enabled and the file upload is complete. */
    approvedEvent: EventEmitter<Array<File>>;
    /** Fired when the cancel button is clicked or when the `cancel` method is invoked. */
    canceledEvent: EventEmitter<Array<File>>;
    /** Fired when the active filter is changed */
    filterChangedEvent: EventEmitter<string>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    componentDidRender(): void;
    handleDragOver(ev: DragEvent): void;
    handleDragLeave(ev: DragEvent): void;
    handleDrop(ev: DragEvent): Promise<void>;
    /**
     * Queues a file for upload.
     *
     * If auto upload is enabled , then the file upload process will start automatically
     *
     * @param file
     **/
    addFile(file: File): Promise<BbjUploadPayload | BbjUploadFailedPayload>;
    /**
     * Queues a list of files for upload.
     *
     * If auto upload is enabled , then the file upload process will start automatically
     *
     * @param files
     **/
    addFiles(files: Array<File>): Promise<(BbjUploadPayload | BbjUploadFailedPayload)[]>;
    /**
     * Uploads the given file.
     *
     * If the file is already uploaded or it is being uploaded , then calling
     * this method will have not affect
     *
     * @param file The file to upload
     **/
    uploadFile(file: File): Promise<BbjUploadPayload | BbjUploadFailedPayload>;
    /**
     * Uploads the given list of files.
     *
     * If the files parameter is omitted , then the method will try to upload all files
     * which already in the queue.
     *
     * @param files
     */
    uploadFiles(files?: Array<File>): Promise<void>;
    /**
     * Aborts uploading the given file.
     *
     * @param file
     */
    abortFile(file: File): Promise<void>;
    /**
     * Abort uploading the given list of files.
     *
     * @param files
     */
    abortFiles(files?: Array<File>): Promise<void>;
    /**
     * Removes file from the upload queue.
     *
     * If a file is being uploaded, then the upload will be aborted.
     *
     * @param file
     */
    clearFile(file: File): Promise<void>;
    /**
     * Removes the list of the given files from the upload queue.
     *
     * If a file is being uploaded, then the upload will be aborted.
     *
     * @param files
     */
    clearFiles(files?: Array<File>): Promise<void>;
    /** Clicks the approve button */
    approve(): Promise<void>;
    /** Clicks the cancel button */
    cancel(): Promise<void>;
    private open;
    private fsFilesOpen;
    private inputFilesOpen;
    private inputDirsOpen;
    private applyAutoClearBehaviour;
    private computeActiveFilterAndAccept;
    private getLocalization;
    private getFilesFromDataTransformItems;
    private handleButtonClick;
    private handleApprove;
    private handleCancel;
    private handleFilterSelected;
    render(): any;
}
