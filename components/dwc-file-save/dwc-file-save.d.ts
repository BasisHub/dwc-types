import { EventEmitter } from '../../stencil-public-runtime';
import { DwcUploadFilter } from '../dwc-upload/dwc-upload.types';
import { DwcFileSaveI18n } from './dwc-file-save.types';
/**
 * The `{{CONTROL_NAME}}<dwc-file-save>` provides methods for manipulating a UI file chooser to save file.
 *
 * @part control - The control wrapper
 * @part inputs - The control inputs wrapper
 * @part filename - The filename input
 * @part filters - The filters list
 * @part buttons - The control buttons wrapper
 * @part button - A control button
 * @part approve-button - The approve button
 * @part cancel-button - The cancel button
 *
 * @hostClass BBjFileChooser - Always applied
 * @hostClass bbj-file-save - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 *
 * @bbjControl BBjFileChooser(FileSave)
 * @bbjControlLink
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfilechooser/bbjfilechooser.htm,
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/commands/filesave_function_create_a_file_save_dialog.htm
 *
 * @bbjMessage {{#eq CONTROL_NAME 'FILESAVE'}}ShowFileChooserDialogMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'FILESAVE'}}RemoveFileChooserDialogMessage{{/eq}}
 *
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}BuildClientFileSaveMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}SetTextMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}GetTextMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}AddFileFilterMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}RemoveFileFilterMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}SetFileFilterMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}GetFileFilterMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}SetShowAllFilesMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}GetShowAllFilesMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}SetChooserButtonsVisibleMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}SetChooserButtonTextMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}GetChooserButtonTextMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}SetChooserButtonAccessKeyMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}ClickChooserButtonMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}FileChooserApproveEventCallbackMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}FileChooserCancelEventCallbackMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(FileSave)'}}FileChooserFilterEventCallbackMessage{{/eq}}
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcFileSave {
    private $editBox;
    private _i18n;
    private _filters;
    private _activeFilter;
    validationMessage: string;
    el: HTMLDwcFileSaveElement;
    /** When true, `No Extension` filter will be added. */
    noExtensionFilterEnabled: boolean;
    /** The id of one of the provided filters. */
    activeFilter: string;
    /** The approve button's access key. */
    approveAccesskey: string;
    /** The approve button's label. */
    approveLabel: string;
    /** When true, the approve button will be visible; otherwise hidden*/
    approveVisible: boolean;
    /** The cancel button access key. */
    cancelAccesskey: string;
    /** The cancel button's label. */
    cancelLabel: string;
    /** When true, the cancel button will be visible; otherwise it will be hidden. */
    cancelVisible: boolean;
    /** True to disable the component, false to enable it. */
    disabled: boolean;
    /**
     * Array of filters to show.
     **/
    filters: Array<DwcUploadFilter>;
    /** The component's translation object */
    i18n: DwcFileSaveI18n | string;
    onI18nChanged(val: any): void;
    /** The component's value */
    value: string;
    /** True when the filename is valid, false otherwise. */
    valid: boolean;
    /** Fired when the approve button is clicked. */
    approvedEvent: EventEmitter<void>;
    /** Fired when the cancel button is clicked. */
    canceledEvent: EventEmitter<void>;
    /** Fired when the active filter is changed. */
    filterChangedEvent: EventEmitter<string>;
    onPropertiesChanged(): void;
    /** Sets focus on the component. */
    setFocus(): Promise<void>;
    /** Removes focus from the component. */
    removeFocus(): Promise<void>;
    /**
     * Clicks the approve button.
     */
    approve(): Promise<void>;
    /**
     * Clicks the cancel button.
     **/
    cancel(): Promise<void>;
    connectedCallback(): void;
    componentWillLoad(): void;
    /**
     * Parsees the given filters object array of filters.
     *
     * @returns The parsed filters
     */
    private resolveFilters;
    /**
     * Parsees the given i18n object or string into an i18n object.
     *
     * @param i18n  The i18n object or string to parse
     * @returns The parsed i18n object
     */
    private resolveI18n;
    /**
     * Returns the computed filters list.
     *
     * @returns The computed filters list
     */
    private computedFiltersList;
    /**
     * Given a value, returns true if the value is a valid filename, false otherwise.
     *
     * @param params  The validation parameters
     * @returns     True if the value is a valid filename, false otherwise
     */
    private validateValue;
    private handleValueChanged;
    private handleValueValidated;
    private handleFilterChanged;
    private handleApprove;
    private handleCancel;
    render(): any;
}
