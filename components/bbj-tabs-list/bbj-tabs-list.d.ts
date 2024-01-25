import { EventEmitter } from '../../stencil-public-runtime';
import { BbjTabsListSelectionPayload } from './bbj-tabs-list.types';
/**
 * The `BBjTabCtrl<bbj-tabs-list>` provides methods for manipulating a UI tab control.
 *
 * @slot - The place where `bbj-tab-panel` should be inserted
 * @slot nav - The place where `bbj-tab` should be inserted
 *
 * @part control - The component's base wrapper.
 * @part nav-container - The place where tabs and advancers are inserted
 * @part advancer - The advancer button
 * @part advancer-left - The advancer left button
 * @part advancer-left-icon - The advancer left icon
 * @part advancer-right - The advancer right button
 * @part advancer-right-icon - The advancer right icon
 * @part advancer-top - The advancer top button
 * @part advancer-top-icon - The advancer top icon
 * @part advancer-bottom - The advancer bottom button
 * @part advancer-bottom-icon - The advancer bottom icon
 * @part nav - The place where tabs and active-tabs-indicator are inserted
 * @part tabs - The `bbj-tab(s)` wrapper
 * @part active-tab-indicator - The active tab indicator
 * @part body - The `bbj-tab-panel(s)` wrapper
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjTabCtrl - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 *
 * @bbjControl BBjTabCtrl
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjtabctrl/BBjTabCtrl.htm?Highlight=BBjTabCtrl
 *
 * @bbjMessage BuildTabPanelMessage
 * @bbjMessage SetEnabledMessage
 * @bbjMessage InsertTabItemMessage
 * @bbjMessage SetTabItemMessage
 * @bbjMessage RemoveTabItemMessage
 * @bbjMessage SetTabTextMessage
 * @bbjMessage SetTabCloseableMessage
 * @bbjMessage IsTabCloseableMessage
 * @bbjMessage SetTabEnabledMessage
 * @bbjMessage IsTabEnabledMessage
 * @bbjMessage SetTabAccessKeyMessage
 * @bbjMessage SetTabTitleMessage
 * @bbjMessage SetTabStyleMessage
 * @bbjMessage SetTabHeightMessage
 * @bbjMessage SetImageAtIndexMessage
 * @bbjMessage SetImageSizeAtIndexMessage
 * @bbjMessage GetTabBoundsMessage
 * @bbjMessage SetTabPlacementMessage
 * @bbjMessage TabCloseEventCallbackMessage
 * @bbjMessage TabSelectedEventCallbackMessage
 * @bbjMessage TabDeselectedEventCallbackMessage
 * @bbjMessage TabPopupEventCallbackMessage
 * @bbjMessage TabKeypressEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjTabsList {
    private $activeTab;
    private $activeTabIndicator;
    private $body;
    private mutationObserver;
    private $nav;
    private resizeObserver;
    private $tabs;
    private ticking;
    private swipeInstance;
    el: HTMLBbjTabsListElement;
    canScrollLeft: boolean;
    canScrollRight: boolean;
    canScrollTop: boolean;
    canScrollBottom: boolean;
    isEmpty: boolean;
    /**
     * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
     * manual, the tab will receive focus but will not show until the user presses space or enter.
     */
    activation: 'auto' | 'manual';
    /** The alignments of the tabs. */
    alignment: 'start' | 'end' | 'center' | 'stretch' | 'auto';
    /** True to disable the tabs, false to enable them  */
    disabled: boolean;
    /**
     * The component's expanse.
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When true, the active indicator is hidden, visible otherwise. */
    hideActiveIndicator: boolean;
    /** The tab group label */
    label: string;
    /** When true, the body will be hidden. Useful when the tabs-list is used in `bbj-toolbar`. */
    nobody: boolean;
    /** When true then the will be no border for list */
    borderless: boolean;
    /** The placement of the tabs. */
    placement: 'top' | 'bottom' | 'left' | 'right' | 'hidden';
    onPlacementChanged(): void;
    /**
     * When set to auto, tabs will be removed directly when the user clicks the close button,
     * otherwise, the tab is kept but the `bbj-closed` event bubbles so it can be handled outside the component.
     */
    removal: 'auto' | 'manual';
    /** The theme name */
    theme: 'default' | 'gray' | 'success' | 'info' | 'warning' | 'danger' | null;
    /**
     * @bbjIgnore
     * The current selected tab.
     **/
    selected: number;
    onSelectedChanged(newSelected: any, oldSelected: any): void;
    /**
     * True when the user is swiping, false otherwise.
     * @readonly
     */
    swiping: boolean;
    /** When true the swipe gesture will work with touch. */
    swipeWithTouch: boolean;
    /** When true the swipe gesture will work with mouse. */
    swipeWithMouse: boolean;
    /** Prevents page scrolling when swiping on the tabs panel.  */
    swipePreventScroll: ((ev: CustomEvent) => boolean) | boolean;
    /** When true, active tab can be changed by swiping the tab panels. */
    swipeable: boolean;
    onSwipeOptionsChanged(): void;
    onPropertiesChanged(): void;
    /** Emitted When a tab is selected*/
    selectedEvent: EventEmitter<BbjTabsListSelectionPayload>;
    /** Emitted When a tab is deselected*/
    deselectedEvent: EventEmitter<BbjTabsListSelectionPayload>;
    connectedCallback(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleTabClose(ev: CustomEvent): void;
    /** Selects a specific tab by name , index or instance. */
    select(tab: HTMLBbjTabElement | string | number): Promise<void>;
    /** Deletes a specific tab by name, index or instance. */
    removeTab(tab: HTMLBbjTabElement | string | number, removePanel?: boolean): Promise<void>;
    private getTabsList;
    private getPanelsList;
    private getActiveTab;
    private findTab;
    private setActiveTab;
    private doRemoveTab;
    private setAriaLabels;
    private positionActiveTabIndicator;
    private syncProperties;
    private handleTabsSlotChange;
    private handlePanelsSlotChange;
    private handleClick;
    private handleKeyDown;
    private updateSwipeListener;
    private handleSwipe;
    private handleScroll;
    private handleScrollLeft;
    private handleScrollRight;
    private handleScrollTop;
    private handleScrollBottom;
    render(): any;
}
