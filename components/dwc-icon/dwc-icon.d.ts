import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `<dwc-icon>` provides methods for displaying a UI icon.
 *
 * An icon is a unelectable SVG image that represents an application, a capability, or some other concept or
 * specific entity with meaning for the user.
 *
 * BBj does not bundle an icons library by default. but it configure several icons pools that the user can choose from.
 * Then the icons will be loaded from a CDN on demand.
 *
 *
 * ## Configured Pools
 *
 * BBj configures the following list of pools which can be used with `dwc-icon`
 *
 * 1. [Tabler](https://tabler-icons.io/)
 * 2. [Feather](https://feathericons.com/)
 * 3. [fa (Font Awesome Free)](https://fontawesome.com/)
 * 4. and `bbj` which is a small subset of Tabler Icons
 *
 *
 * ## Usage
 *
 * You can use this component like this:
 *
 * ```html
 * <dwc-icon pool="POOL_NAME" name="ICON_NAME"></dwc-icon>
 * ```
 *
 * ?> **Note:**: The default pool name is `tabler`
 *
 * In BBj you can use it through the `BBjStaticText` control like this:
 *
 * ```BBj
 * wnd!.addStaticText(101,50,100,90,30,"<html><dwc-icon name=""alien""></dwc-icon></html>",$0000$)
 * ```
 *
 * ### Custom Pools
 *
 * You can register additional pools to use with `dwc-icon`.
 *
 * ```javascript
 * (window.BBj ??= {}).IconsPools ??= [];
 * window.BBj.IconsPools.push({
 *   name: 'POOL_NAME',
 *   resolver: name => {return 'SVG_URL'}
 *});
 * ````
 *
 * For instance , This is how the [feather pool](https://feathericons.com/) is registered.
 * ```javascript
 * (window.BBj ??= {}).IconsPools ??= [];
 * window.BBj.IconsPools.push({
 *   name: 'feather',
 *   resolver: name => `https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/${name}.svg`
 *});
 * ````
 *
 * Then in your code
 *
 * ```html
 * <dwc-icon pool="feather" name="activity"></dwc-icon>
 * ```
 *
 * ## BBj Pool
 *
 * All used icons in BBj components use the `bbj` pool , You can override the pool like this:
 *
 * ``` javascript
 *const BBjIcons = {
 * 'calendar': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <rect x="4" y="5" width="16" height="16" rx="2"/> <line x1="16" y1="3" x2="16" y2="7"/> <line x1="8" y1="3" x2="8" y2="7"/> <line x1="4" y1="11" x2="20" y2="11"/> <line x1="11" y1="15" x2="12" y2="15"/> <line x1="12" y1="15" x2="12" y2="18"/></svg>`,
 * 'check': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M5 12l5 5l10 -10"/></svg>`,
 * 'chevron-down': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="6 9 12 15 18 9"/></svg>`,
 * 'chevron-left': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="15 6 9 12 15 18"/></svg>`,
 * 'chevron-right': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="9 6 15 12 9 18"/></svg>`,
 * 'chevron-up': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="6 15 12 9 18 15"/></svg>`,
 * 'chevrons-left': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="11 7 6 12 11 17"></polyline><polyline points="17 7 12 12 17 17"></polyline></svg>`,
 * 'chevrons-right': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="7 7 12 12 7 17"></polyline><polyline points="13 7 18 12 13 17"></polyline></svg>`,
 * 'eye-off': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="3" y1="3" x2="21" y2="21"/> <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"/> <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"/></svg>`,
 * 'eye': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="12" r="2"/> <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"/></svg>`,
 * 'icon-x': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="18" y1="6" x2="6" y2="18"/> <line x1="6" y1="6" x2="18" y2="18"/></svg>`,
 * 'plus': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>`,
 * 'minus': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /></svg>`,
 * 'square-plus': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><line x1="9" y1="12" x2="15" y2="12"></line><line x1="12" y1="9" x2="12" y2="15"></line></svg>`,
 * 'square-minus': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><line x1="9" y1="12" x2="15" y2="12"></line></svg>`,
 * 'file': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><line x1="9" y1="9" x2="10" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg>`,
 * 'folder': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folder" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /></svg>`,
 * 'folder-opened': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folder-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /><line x1="9" y1="13" x2="15" y2="13" /></svg>`,
 * 'stop': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hand-stop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5"></path><path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5"></path><path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5"></path><path d="M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path></svg>`,
 * 'question': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
 * 'warning': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 9v2m0 4v.01"></path><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path></svg>`,
 * 'info': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12.01" y2="8"></line><polyline points="11 12 12 12 12 16 13 16"></polyline></svg>`,
 * 'color-picker': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-color-picker" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 7l6 6"></path><path d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"></path></svg>`,
 * 'copy': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg>`,
 * 'checks': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 12l5 5l10 -10"></path><path d="M2 12l5 5m5 -5l5 -5"></path></svg>`,
 * 'upload': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-upload" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><polyline points="7 9 12 4 17 9"></polyline><line x1="12" y1="4" x2="12" y2="16"></line></svg>`,
 * 'refresh': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rotate" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5"></path></svg>`,
 * 'play': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg>`,
 * 'animated-spinner': `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" ><path fill="currentColor" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.5s" repeatCount="indefinite"/></path></svg>`,
 * 'arrow-down': `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="12" y1="5" x2="12" y2="19"/> <line x1="18" y1="13" x2="12" y2="19"/> <line x1="6" y1="13" x2="12" y2="19"/></svg>`,
 * };
 *
 * (window.BBj ??= {}).IconsPools ??= [];
 * window.BBj.IconsPools.push({
 *   name: 'bbj',
 *   resolver: BBjIcons[name] ? `data:image/svg+xml,${encodeURIComponent(BBjIcons[name])}` : ''
 *});
 * ```
 *
 * @part control - The component's base wrapper
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcIcon {
    innerHTML: string;
    isImage: boolean;
    /** The icon's expanse */
    expanse: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | null;
    /** The icon's label */
    label: string;
    /** An icon modified function */
    modifier: (icon: SVGElement | HTMLImageElement) => void;
    /** The icon's name */
    name: string;
    /** The icon's pool name */
    pool: string;
    /** The icon's src */
    src: string;
    /** The theme name */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | null;
    /** Emitted when the icon is loaded. */
    loadedEvent: EventEmitter<void>;
    /** Emitted when the icon loading is failed. */
    failedEvent: EventEmitter<{
        error: string;
    }>;
    handleChange(): void;
    onPoolChange(ev: CustomEvent): void;
    componentDidLoad(): void;
    private figureLabel;
    private load;
    render(): any;
}
