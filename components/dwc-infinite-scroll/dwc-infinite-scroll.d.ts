import { EventEmitter } from '../../stencil-public-runtime';
/**
 * `BBjInfiniteScroll<dwc-infinite-scroll>` Loads content continuously as the user scrolls down, eliminating the need for pagination.
 *
 * @part sentinel - The sentinel container
 * @part content -  The component content (can be used to create custom loading message)
 * @part icon -  The loading icon
 * @part text - The loading text
 *
 * @bbjControl BBjInfiniteScroll
 * @bbjControlLink https://bbj-plugins.github.io/BBjInfiniteScroll/#/
 * @bbjWidget
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcInfiniteScroll {
    private io;
    private $sentinel;
    el: HTMLDwcInfiniteScrollElement;
    /** When true, the component is loading. */
    loading: boolean;
    /** When true, the component will not ask to load any more items. */
    completed: boolean;
    onCompletedChanged(completed: any): void;
    /**
     * The refresh icon to use when loading more data.
     * The icon can be in any of the following formats:
     *
     * <ol>
     * <li> <b>URL</b>: (ex: /path/to/image.png)
     * <li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)
     * <li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: `folder`)
     * <li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: `feather:folder`)
     * <li> <b>An object</b> which provides all the required properties to build the icon.
     *    for instance:
     *    <ol>
     *      <li> {name: 'spinner'}
     *      <li> {pool: 'feather' name: 'spinner}
     *      <li> {src: 'image/path'}
     *    </ol>
     * </ol>
     **/
    icon: string;
    /** The element that is used as the viewport. Must be the ancestor of the `dwc-infinite-scroll` or null. */
    root: HTMLElement | "self";
    onRootChanged(): void;
    /** The instructions string */
    text: string;
    /**
     * Event emitted when the infinite scroll is triggered.
     */
    infinityEvent: EventEmitter<void>;
    componentDidLoad(): void;
    /**
     * Updates the component; this method should be called after updating
     * the content of the component.
     **/
    update(): Promise<void>;
    private init;
    private observe;
    private unobserve;
    render(): any;
}
