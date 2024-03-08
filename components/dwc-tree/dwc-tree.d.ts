import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `BBjTree<dwc-tree>` provides methods for manipulating a UI tree control.
 *
 * ?> **Note:** The `dwc-tree` component is used to build the [BBjFileChooser(tree) version](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfilechooser/bbjfilechooser.htm).
 *
 * @slot - The place where `dwc-tree-node' elements are inserted.
 *
 * @part control - The component's base wrapper.
 * @part input - The input element (search box).
 * @part tree - The tree element.
 * @part tree-wrapper - The wrapper element for the tree.
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjTree - Always applied.
 * @hostClass bbj-disabled - Applied when the component is disabled.
 * @hostClass bbj-readonly - Applied when the component is readonly.
 *
 * @bbjControl BBjTree
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/BBjTree/BBjTree.htm
 *
 * @bbjMessage AddTreeItemMessage
 * @bbjMessage BuildTreeItemMessage
 * @bbjMessage BuildTreeMessage
 * @bbjMessage ClearTreeMessage
 * @bbjMessage ClearTreeSelectionMessage
 * @bbjMessage EditTreeItemMessage
 * @bbjMessage GetBackgroundSelectionColorMessage
 * @bbjMessage GetExpandedTreeItemsMessage
 * @bbjMessage GetLastCollapsedTreeItemMessage
 * @bbjMessage GetLastExpandedTreeItemMessage
 * @bbjMessage GetLastSelectedTreeItemMessage
 * @bbjMessage GetSelectedTreeItemsMessage
 * @bbjMessage GetTextSelectionColorMessage
 * @bbjMessage GetTreeItemStateMessage
 * @bbjMessage GetTreeItemTextMessage
 * @bbjMessage IsTreeItemSelectedMessage
 * @bbjMessage RemoveTreeItemMessage
 * @bbjMessage ScrollTreeItemToVisibleMessage
 * @bbjMessage SetBackgroundSelectionColorMessage
 * @bbjMessage SetTextSelectionColorMessage
 * @bbjMessage SetTreeCollapsedIconMessage
 * @bbjMessage SetTreeEditableMessage
 * @bbjMessage SetTreeExpandedIconMessage
 * @bbjMessage SetTreeImageSizeMessage
 * @bbjMessage SetTreeItemEditableMessage
 * @bbjMessage SetTreeItemInfoMessage
 * @bbjMessage SetTreeItemSelectedMessage
 * @bbjMessage SetTreeItemStateMessage
 * @bbjMessage SetTreeLeafIconMessage
 * @bbjMessage SetTreeRootMessage
 * @bbjMessage SetTreeRootVisibleMessage
 * @bbjMessage SetTreeSelectedIconMessage
 * @bbjMessage SetTreeSelectionModeMessage
 * @bbjMessage TreeMouseDoubleClickEventCallbackMessage
 * @bbjMessage TreeMouseDownEventCallbackMessage
 * @bbjMessage TreeMouseUpEventCallbackMessage
 * @bbjMessage TreeNodeCollapsedEventCallbackMessage
 * @bbjMessage TreeNodeDeselectedEventCallbackMessage
 * @bbjMessage TreeNodeEditStoppedEventCallbackMessage
 * @bbjMessage TreeNodeExpandedEventCallbackMessage
 * @bbjMessage TreeNodeSelectedEventCallbackMessage
 * @bbjMessage TreeRightMouseDownEventCallbackMessage
 * @bbjMessage TreeRightMouseUpEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcTree {
    private $tree;
    private $lastSelectedItem;
    private $lastExpandedNode;
    private $lastCollapsedNode;
    private disableClickHandling;
    el: HTMLDwcTreeElement;
    /** When true, the if you click a selected node, it will be deselected. */
    allowDeselectionByClick: boolean;
    /** When true, the nodes will be connected with lines to clarify the tree structure. */
    connect: boolean;
    onConnectChanged(): void;
    /** When true and multi-selecting is enabled. then multiple contiguous tree nodes can be selected. */
    contiguousSelection: boolean;
    /** True to disable the tree, false to enable it.  */
    disabled: boolean;
    /** Tree nodes are not editable by default. If this property is used to set tree nodes to be editable generally, then node descriptions can be changed by using a triple-click or a click-hold-click on editable nodes to go into edit mode.*/
    editable: boolean;
    /**
     * The component's expanse
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /**
     * The node collapsed icon.<br>
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
    iconCollapsed: string | object;
    /** The node icon when it is expanded. See `iconCollapsed` to learn about accepted icon formats*/
    iconExpanded: string | object;
    /** The node icon when it is leaf. See `iconCollapsed` to learn about accepted icon formats*/
    iconLeaf: string | object;
    /** The node icon when it is leaf and selected. See `iconCollapsed` to learn about accepted icon formats*/
    iconLeafSelected: string | object;
    /** The tree's label */
    label: string;
    /** When true then multi selection will be allowed. */
    multiSelection: boolean;
    /** When true and multi selection is enabled, the user will be able to select and deselect nodes by clicking. */
    multiSelectionByClick: boolean;
    /** When true, a search is preformed and there were no results found. */
    nodata: boolean;
    /** When true, node group icons will be removed. */
    noGroupIcons: boolean;
    /** When true, node leaf icon will be removed */
    noLeafIcons: boolean;
    /** True to put the tree in readonly mode */
    readonly: boolean;
    /** When true, the search will be case sensitive, case insensitive otherwise. */
    searchCaseSensitive: boolean;
    /** When true, an field will be shown above the tree to filter items on the client side. */
    searchInput: boolean;
    /** A message to display when there is no data to display after performing a search. */
    searchNodata: string;
    /** The search input's placeholder */
    searchPlaceholder: string;
    /** When provided, items will be filtered based on the content of this property. Regular expressions are supported */
    searchTerm: string;
    onSearchTermChanged(): void;
    /** When true, the user won't be able to expand all nodes by pressing `*` on the keyboard. */
    suppressExpandAll: boolean;
    /** Emitted When an item is selected. */
    selectedEvent: EventEmitter<HTMLDwcTreeNodeElement>;
    /** Emitted When an item is deselected. */
    deselectedEvent: EventEmitter<HTMLDwcTreeNodeElement>;
    /** Emitted when selection is changed */
    changedEvent: EventEmitter<void>;
    /** Emitted When a search is performed. The event can be prevented to implement a new search routine */
    searchedEvent: EventEmitter<{
        term: string;
        done: () => void;
    }>;
    onIconsChanged(): void;
    onNoIconsChanged(): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    /**
     * Expand all groups starting at the given tree node.
     *
     * @param from The tree node instance or the tree node id to use as starting point.
     *             If no tree node is provided then we start at root.
     * @param deep When true then all sub groups will be expanded otherwise only the first level of groups
     **/
    expand(from?: HTMLDwcTreeNodeElement | string, deep?: boolean): Promise<void>;
    /**
     * Collapse all groups starting at the given tree item.
     *
     * @param from The tree node instance or the tree node id to use as starting point.
     *             If no tree node is provided then we start at root.
     * @param deep When true then all sub groups will be collapsed otherwise only the first level of groups
     **/
    collapse(from?: HTMLDwcTreeNodeElement | string, deep?: boolean): Promise<void>;
    /**
     * Gets the next node of the passed node
     *
     * @param node The node instance or the node id
     */
    getNextNode(node: HTMLDwcTreeNodeElement | string): Promise<HTMLDwcTreeNodeElement>;
    /**
     * Gets the previous node of the passed node
     *
     * @param node The node instance or the node id
     */
    getPreviousNode(node: HTMLDwcTreeNodeElement | string): Promise<HTMLDwcTreeNodeElement>;
    /** Gets the first node of the tree */
    getFirstNode(): Promise<HTMLDwcTreeNodeElement>;
    /** Gets the last node of the tree */
    getLastNode(): Promise<HTMLDwcTreeNodeElement>;
    /** Gets the list of selected nodes */
    getSelectedNodes(): Promise<NodeListOf<HTMLDwcTreeNodeElement>>;
    /** Gets the first selected node */
    getFirstSelectedNode(): Promise<HTMLDwcTreeNodeElement>;
    /** Gets the last selected node */
    getLastSelectedNode(): Promise<HTMLDwcTreeNodeElement>;
    /** Clears all tree selections */
    clearSelections(): Promise<void>;
    /**
     * Ensures the given node is visible.
     *
     * The method will make sure all parent are expanded so the node can be visible.
     *
     * @param node The node instance or the node id
     */
    ensureVisible(node: HTMLDwcTreeNodeElement | string): Promise<void>;
    /**
     * Scrolls into the given node
     *
     * @param node The node instance or the node id
     */
    scrollToNode(node: HTMLDwcTreeNodeElement | string): Promise<void>;
    /** Gets the list of expanded nodes */
    getExpandedNodes(): Promise<NodeListOf<HTMLDwcTreeNodeElement>>;
    /** Gets the node which was most recently collapsed. */
    getCollapsedNode(): Promise<HTMLDwcTreeNodeElement>;
    /** Gets the node which was most recently expanded. */
    getExpandedNode(): Promise<HTMLDwcTreeNodeElement>;
    /** Queries one of the component supported parts */
    getPart(part: string): Promise<HTMLElement>;
    /**
     * Queries the nodes of the tree
     *
     * @param from The tree node instance or the node instance to use as starting point
     * @param firstLevel When true,  only the first level of nodes will be rendered
     * @param grouped When true,  only group nodes will be returned
     */
    private getNodes;
    /**
     * Resolves the instance of the passed node.
     *
     * If the node is already instance of HTMLDwcTreeNodeElement
     * then we return it with no change , otherwise we query the tree by id to find the node.
     *
     * @param item The item instance of the item id
     */
    private getNodeInstance;
    /**
     * Finds out the next or the previous item of the given tree item
     *
     * @param node The node instance
     * @param location The location of the node to find.
     */
    private getNodeByLocation;
    private toggleSelection;
    private syncIconProperties;
    private updateIconsProperties;
    private updateConnect;
    private updateNoIcons;
    private search;
    private handleKeyDown;
    private handleSlotChange;
    private handleNodeClick;
    private handleNodePressed;
    private handleNodeSelectionChanged;
    private handleNodeCollapsed;
    private handleNodeExpanded;
    private handleNodeStateChanged;
    private handleSearch;
    render(): any;
}
