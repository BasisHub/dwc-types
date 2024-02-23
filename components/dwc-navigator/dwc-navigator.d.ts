import { EventEmitter } from '../../stencil-public-runtime';
import { DwcNavigatorEventPayload } from './dwc-navigator.types';
/**
 * The `BBjNavigator/<dwc-navigator>` provides methods for manipulating a UI navigator control.
 *
 * ## Text Expressions
 *
 * All text properties `textFirst` , `textFirst` , `textLast` , `textNumbered` , ... are evaluated as Javascript expressions.
 * The text expression is evaluated with the following parameters:
 *
 * - `component`: The current component instance.
 * - `control`: Alias for `component`.
 * - `current`: The current page number.
 * - `x`: Alias for `current`.
 * -  `startIndex`: The start index of the current page.
 * - `endIndex`: The end index of the current page.
 * - `startPage`: The index of the first page
 * - `endPage`: The index of the last page
 * - `totalPages`: The total number of pages.
 * - `totalItems`:The total number of items.
 *
 * For instance
 *
 * ```javascript
 * component.textPreview = `Showing ${startIndex}-${endIndex} of ${totalItems}`
 * ```
 *
 * @part control - The component's base wrapper.
 * @part area - The left, middle and right areas of the control.
 * @part area-left -  The left area of the control where the first and previous buttons are placed
 * @part button - Any of the buttons
 * @part button-first - The first button
 * @part button-previous - The previous button
 * @part area-middle - The middle area where the layouts are placed
 * @part layout-numbered - The wrapper of the numbered buttons
 * @part button-separator - The separator button
 * @part button-separator-left - The left separator button
 * @part button-separator-right - The right separator button
 * @part numbered-button - One of the numbered buttons
 * @part numbered-button-selected - The current selected button
 * @part layout - Any of the layouts
 * @part layout-preview - The preview container where the `text-preview` text is placed
 * @part layout-quick-jump - The quick jump container where the input is placed
 * @part input - The quick jump input
 * @part area-right - The right area of the control where the next and last buttons are placed
 * @part button-next - The next button
 * @part button-last - The last button
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjNavigator - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-readonly - Applied when the component is readonly
 *
 * @bbjControl BBjNavigator
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjnavigator/bbjnavigator.htm?Highlight=BBjNavigator
 *
 * @bbjMessage BuildNavigatorMessage
 * @bbjMessage SetNavigatorButtonWidthMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage GetTextMessage
 * @bbjMessage NavigatorFirstEventCallbackMessage
 * @bbjMessage NavigatorPreviousEventCallbackMessage
 * @bbjMessage NavigatorNextEventCallbackMessage
 * @bbjMessage NavigatorLastEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcNavigator {
    private $middleArea;
    private $layoutEl;
    private layoutResizeObserver;
    el: HTMLDwcNavigatorElement;
    canScrollRight: boolean;
    canScrollLeft: boolean;
    state: {
        totalItems: number;
        currentPage: number;
        pageSize: number;
        totalPages: number;
        startPage: number;
        endPage: number;
        startIndex: number;
        endIndex: number;
        pages: number[];
    };
    /**
     * When true, the `first` , `previous` , `next` and `last` buttons will be auto disabled based on the total items and the current page.
     *
     * @bbjDefault false
     **/
    autoDisable: boolean;
    /** The current active page. */
    current: number;
    /** When true, the component will be disabled; otherwise it is disabled.*/
    disabled: boolean;
    /**
     * The last index of the current page.
     * @readonly
     */
    endIndex: number;
    /**
     * The index of the last page
     * @readonly
     */
    endPage: number;
    /**
     * The component's expanse
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** The label of the component */
    label: string;
    /** The label of the `first` button */
    labelFirst: string;
    /** The label of the `previous` button */
    labelPrevious: string;
    /** The label of the `next` button */
    labelNext: string;
    /** The label of the `last` button */
    labelLast: string;
    /** The label of the numbered button. The page number will be appended to this string*/
    labelPage: string;
    /**
     * The layout of the middle area of the Navigator. <br><br>
     *
     * 1. preview: Only the current page and the number of pages will be rendered.<br>
     * 2. numbered: The numbered buttons will be rendered.<br>
     * 3. quick-jump: The quick jump input will be rendered.<br>
     * 4. none: no layout will be rendered.<br>
     *
     * @bbjDefault preview
     */
    layout: 'preview' | 'numbered' | 'quick-jump' | 'none';
    onLayoutChange(): void;
    /** the maximum number of page navigation buttons to display */
    max: number;
    /** Alias for `disabled` When true, the component will be disabled , enabled otherwise*/
    readonly: boolean;
    /** The total number of items per page.  */
    size: number;
    /**
     * The start index of the current page.
     * @readonly
    */
    startIndex: number;
    /**
     * The index of the first page
     * @readonly
     */
    startPage: number;
    /** When true, the first button will be hidden, visible otherwise. */
    suppressFirst: boolean;
    /** When true, the previous button will be hidden, visible otherwise. */
    suppressPrevious: boolean;
    /** When true, the next button will be hidden, visible otherwise. */
    suppressNext: boolean;
    /** When true, the last button will be hidden, visible otherwise. */
    suppressLast: boolean;
    /** The text of the first button as string or expression. */
    textFirst: string;
    /** The text of the previous button as string or expression. */
    textPrevious: string;
    /** The text of the numbered buttons as string or expression. */
    textNumbered: string;
    /** The text of the next button as string or expression. */
    textNext: string;
    /** The text of the last button as string or expression. */
    textLast: string;
    /** The text of the separator as string or expression. */
    textSeparator: string;
    /** The text of the preview area*/
    textPreview: string;
    /** The total number of items */
    totalItems: number;
    /**
     * The number of total pages to display
     * @readonly
     */
    totalPages: number;
    /** Emitted when moved to the next page. */
    nextEvent: EventEmitter<DwcNavigatorEventPayload>;
    /** Emitted when moved to the previous page. */
    previousEvent: EventEmitter<DwcNavigatorEventPayload>;
    /** Emitted when moved to the first page */
    firstEvent: EventEmitter<DwcNavigatorEventPayload>;
    /** Emitted when moved to the last page */
    lastEvent: EventEmitter<DwcNavigatorEventPayload>;
    /** Emitted when the page is changed */
    changedEvent: EventEmitter<DwcNavigatorEventPayload>;
    onChanged(): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private calculate;
    private scrollToPage;
    private updatePage;
    private getText;
    private updateOverflow;
    private handleInputBlurred;
    render(): any;
}
