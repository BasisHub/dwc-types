import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `<bbj-tree-node>` provides methods for manipulating a UI tree node.
 *
 * @slot - The place where `bbj-tree-node' elements are inserted.
 *
 * @part control - The component's base wrapper.
 * @part label-wrapper - The icons , label & input container.
 * @part icons - The icons container.
 * @part icon - The node's icon.
 * @part icon-toggle - The toggle icon.
 * @part icon-type - The node type icon (group , leaf).
 * @part label - The node's label.
 * @part input - The node's input which is used when the node is in editing mode.
 * @part list - The wrapper of child nodes.
 *
 * @hostClass BBjTree-node - Always applied
 * @hostClass bbj-leaf - Applied when the node is a leaf node.
 * @hostClass bbj-group - Applied when the node is a group node.
 * @hostClass bbj-expanded - Applied when the node is expanded.
 * @hostClass bbj-selected - Applied when the node is selected.
 * @hostClass bbj-first - Applied when the node is the first node in its parent.
 * @hostClass bbj-last - Applied when the node is the last node in its parent.
 * @hostClass bbj-editing - Applied when the node is in editing mode.
 * @hostClass bbj-flat - Applied when the node is flattened.
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjTreeNode {
    private itemId;
    private $itemEl;
    private $labelEl;
    private $inputEl;
    private oldValue;
    private newValue;
    private mutationObserver;
    el: HTMLBbjTreeNodeElement;
    editing: boolean;
    /** Items are editable by default when the `bbj-tree` is editable. This property can then be used to set specific items to not be editable.*/
    editable: boolean;
    /** True when the node is expanded, false if collapsed.*/
    expanded: boolean;
    /**
     * When true then the node is node is the first item in its parent
     * @readonly
     **/
    first: boolean;
    /**
     * When true, the node label will not be visible and the node will not have any margin
     * @readonly
     **/
    flat: boolean;
    /**
     * True when the node is group for other nodes, false otherwise
     * @readonly
     **/
    group: boolean;
    /** When true, the node is focused, blurred otherwise */
    hasFocus: boolean;
    /**
     * The node icon. When this property is used, it will override all other icons.<br>
     *
     * The icons properties can be set in any of the following formats:
     * <ol>
     * <li> <b>URL</b>: (ex: /path/to/image.png)
     * <li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)
     * <li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: `folder`)
     * <li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: `feather:folder`)
     * <li> <b>An object</b> which provides all the required properties to build the icon.
     *    for instance:
     *    <ol>
     *      <li> {name: 'folder}
     *      <li> {pool: 'feather' name: 'folder}
     *      <li> {src: 'image/path'}
     *      <li> {src: 'image/path' , x: 'x attribute' , y: 'y attribute'  , ...}
     *    </ol>
     * </ol>
     **/
    icon: string | object;
    /** The node selected icon. See `icon` to learn about accepted icon formats. */
    iconSelected: string | object;
    /** @internal */
    iconTreeCollapsed: string | object;
    /** @internal */
    iconTreeExpanded: string | object;
    /** @internal */
    iconTreeLeaf: string | object;
    /** @internal */
    iconTreeLeafSelected: string | object;
    /**
     * When true, the node is the last item in its parent
     * @readonly
     **/
    last: boolean;
    /** The node's label */
    label: string;
    /**
     * True when the item is a leaf, false otherwise
     * @readonly
     **/
    leaf: boolean;
    /** When true the node is selected, de-selected otherwise*/
    selected: boolean;
    onSelectedChanged(newSelected: any): void;
    /** Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /** Emitted after the control is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the control is blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted When the item is expanded. */
    expandedEvent: EventEmitter<void>;
    /** Emitted When the item is collapsed. */
    collapsedEvent: EventEmitter<void>;
    /** Emitted When the item is clicked. */
    clickedEvent: EventEmitter<MouseEvent>;
    /** Emitted When the item is pressed (long press). */
    pressedEvent: EventEmitter<{
        downEvent: PointerEvent;
        upEvent: PointerEvent;
    }>;
    /** Emitted when the item selected property is changed */
    selectedChangedEvent: EventEmitter<boolean>;
    /** Emitted when the item flat property is changed */
    flatChangedEvent: EventEmitter<boolean>;
    /** Emitted when the item editing has stopped and the new value is different from the old value. */
    editedEvent: EventEmitter<{
        oldValue: string;
        newValue: string;
    }>;
    connectedCallback(): void;
    componentDidLoad(): void;
    /** Sets focus on the tab */
    setFocus(): Promise<void>;
    /** Removes focus from the tab */
    removeFocus(): Promise<void>;
    /** Expands the item if it has children */
    toggle(): Promise<void>;
    /** Starts editing the item */
    startEdit(): Promise<void>;
    /**
     * Stops editing the item
     *
     * @returns
     */
    stopEdit(): Promise<void>;
    private handleToggle;
    private handleClick;
    private handlePressed;
    private handleFocus;
    private handleBlur;
    private handleInputKeydown;
    private handleInputBlur;
    render(): any;
}
