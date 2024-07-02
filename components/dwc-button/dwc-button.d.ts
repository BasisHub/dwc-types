import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `{{CONTROL_NAME}}<dwc-button>` provides methods for manipulating a UI
 * {{#if IS_CONTROL}} {{CONTROL_NAME_WITH_LINK}} {{else}}button {{/if}} control.
 *
 * @slot - The button's label
 * @slot prefix - The button's prefix
 * @slot suffix - The button's suffix
 *
 * @part control - The component's base wrapper
 * @part label -  The button's label
 * @part suffix -  The button's suffix
 * @part prefix -  The button's prefix
 * @part dropdown -  The button's dropdown button
 * @part dropdown-icon -  The button's dropdown icon
 * @part dropdown-separator -  The button's dropdown separator which separates the icon from the actual button
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjButton - Applied when the component is used as a normal button
 * @hostClass BBjToolButton - Applied when the component is a toggleable button
 * @hostClass BBjMenuButton - Applied when the component has a dropdown menu
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-selected - Applied when the button is toggleable and selected
 * @hostClass bbj-transparent - `[optional]` can be added manually to remove the component background
 * @hostClass bbj-noborder - `[optional]` can be added manually to remove the component border
 * @hostClass bbj-nopadding - `[optional]` can be added to remove the button's label padding. Useful if the label is only an icon
 *
 *
 * @bbjControl BBjButton, BBjToolButton, BBjMenuButton
 * @bbjControlLink
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjbutton/BBjButton.htm?Highlight=BBjButton,
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjtoolbutton/BBjToolButton.htm?Highlight=%20BBjToolButton,
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjmenubutton/bbjmenubutton.htm?Highlight=BBjMenuButton
 *
 * @bbjMessage {{#eq CONTROL_NAME "BBjButton"}}BuildButtonMessage{{/eq}}
 *
 * @bbjMessage {{#eq CONTROL_NAME "BBjToolButton"}}BuildToolButtonMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjToolButton"}}IsToolButtonDownMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjToolButton"}}SetToggleableMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjToolButton"}}SetToolButtonDownMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjToolButton"}}SetBooleanValueMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjToolButton"}}GetBooleanValueMessage{{/eq}}
 *
 * @bbjMessage {{#eq CONTROL_NAME "BBjMenuButton"}}BuildMenuButtonMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjMenuButton"}}SetDropdownButtonWidthMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjMenuButton"}}GetDropdownButtonWidthMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjMenuButton"}}SetDropdownMenuVisibleMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjMenuButton"}}IsDropdownMenuVisibleMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjMenuButton"}}RemoveDropdownMenuMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME "BBjMenuButton"}}SetDropdownMenuMessage{{/eq}}
 *
 * @bbjMessage SetFocusMessage
 * @bbjMessage SetStyleMessage
 * @bbjMessage GetStyleMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcButton {
    private $button;
    el: HTMLDwcButtonElement;
    /** Automatically focuses the button when the page is loaded. */
    autofocus: boolean;
    /** When true, the component cannot be interacted with. */
    disabled: boolean;
    /**
     * @bbjIgnore
     * Associate a popup menu with the button.
     **/
    dropdown: HTMLDwcPopupmenuElement;
    onDropdownChanged(newDropdown: any, oldDropdown: any): void;
    /** Sets the dropdown button's width. */
    dropdownButtonWidth: string;
    /**
     * When true, the dropdown menu is opened, otherwise it is closed.
     * @readonly
     **/
    dropdownOpened: boolean;
    /** The distance in pixels to offset the dropdown away from the button. */
    distance: number;
    /**
     * The component's expanse.
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /**
     * When true, the button is has a dropdown menu, otherwise it does not.
     * @readonly
     **/
    hasDropdown: boolean;
    /**
     * When true, the button is focused, otherwise it is not.
     * @readonly
     **/
    hasFocus: boolean;
    /** The button's label. */
    label: string;
    /** The button's name. */
    name: string;
    /** When true then the button will look like it is hovered/selected. */
    selected: boolean;
    /** The distance in pixels to offset the dropdown along the button. */
    skidding: number;
    /** The theme name. */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outlined-default' | 'outlined-gray' | 'outlined-primary' | 'outlined-success' | 'outlined-warning' | 'outlined-danger' | 'outlined-info' | null;
    /** Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /** By default, the tool button is not toggleable. If set to toggleable, the tool button will appear "pushed in" when selected. */
    toggleable: boolean;
    /** The button's value. Useful when it is being used inside a form. */
    value: string;
    onProperOptionsChanged(): void;
    /** Emitted after the component has been focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the component has been blurred. */
    blurredEvent: EventEmitter<void>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /** disable clicks if disabled */
    handleClick(ev: MouseEvent): void;
    handleKeydown(ev: KeyboardEvent): Promise<void>;
    /** Sets focus on the component. */
    setFocus(): Promise<void>;
    /** Removes focus from the component. */
    removeFocus(): Promise<void>;
    /** Queries one of the component supported parts. */
    getPart(part: string): Promise<unknown>;
    /** Open the dropdown */
    open(): Promise<void>;
    /** Closes the dropdown. */
    close(): Promise<void>;
    /** Forces the component update. */
    forceUpdate(): Promise<void>;
    private getButtonBottomLeftCoordinates;
    private updateDropdownCoordinates;
    private updateDropdownContext;
    private bindDropdown;
    private handleFocus;
    private handleBlur;
    private handleDropdownButtonClick;
    private handleDropdownOpened;
    private handleDropdownClosed;
    private handleOnLabelSlotChanged;
    render(): any;
}
