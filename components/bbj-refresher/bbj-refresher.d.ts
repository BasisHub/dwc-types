import { EventEmitter } from '../../stencil-public-runtime';
/**
 * `BBjPullToRefresh<bbj-refresher>` lets a user pull down on a container using
 * touch in order to refresh or retrieve more data.
 *
 * Pull-to-refresh is widely used on devices with a touch screen.
 * You can use the APIs shown here to implement pull-to-refresh in your app.
 *
 * @part control - The component's base wrapper.
 * @part content -  The refresher content wrapper
 * @part icon -  The refresher icon
 * @part text - The refresher text
 *
 * @hostClass bbj-disabled - When component is disabled
 * @hostClass bbj-initial - When stage is initial
 * @hostClass bbj-pull - When stage is pull
 * @hostClass bbj-release - When stage is release
 * @hostClass bbj-refresh - When stage is refresh
 *
 * @bbjControl BBjPullToRefresh
 * @bbjControlLink https://bbj-plugins.github.io/BBjPullToRefresh/#/
 * @bbjWidget
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjRefresher {
    private dragging;
    private startY;
    private currentY;
    private loaded;
    el: HTMLBbjRefresherElement;
    height: number;
    /** When true,  the refresher will be disabled, enabled otherwise */
    disabled: boolean;
    onDisabledChanged(value: any): void;
    /**
     * The arrow icon to use when the `stage` is `pull` or `release`.
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
     *      <li> {name: 'arrow'}
     *      <li> {pool: 'feather' name: 'arrow}
     *      <li> {src: 'image/path'}
     *    </ol>
     * </ol>
     **/
    iconArrow: string;
    /**
     * The refresh icon to use when the `stage` is `refresh`.
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
    iconRefresh: string;
    /** The minimum distance of the pull until the refresher will go into the release state. */
    threshold: number;
    /** The maximum distance of the pull. */
    thresholdMax: number;
    /** The theme name */
    theme: 'gray' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | null;
    /** The current refresher stage. */
    stage: 'pull' | 'release' | 'refresh' | 'initial';
    onStageChanged(value: any): void;
    /** The initial instructions string. */
    textPull: string;
    /** The release instructions text. */
    textRelease: string;
    /** The refresh instructions text. */
    textRefresh: string;
    /**
     * Fired when the refresh is requested.
     *
     * This event must be handled and when the refresh is done , the `finish` method
     * must be called to return the refresher to the `initial` state.
     */
    refreshEvent: EventEmitter<void>;
    /** Fired when the target is being is pulled. The event payload contains the height of the refresher */
    pullEvent: EventEmitter<number>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /** Put the refresh in the `initial` stage */
    finish(): Promise<void>;
    private activate;
    private handleStart;
    private handleMove;
    private handleEnd;
    render(): any;
}
