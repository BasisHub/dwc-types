/**
 * The `<bbj-icon-button>` provides methods for displaying a UI icon button.
 *
 * An icon button is an selectable SVG image that represents a capability, or some other concept or
 * specific entity with meaning for the user.
 *
 * @part control - The component's base wrapper
 * @part icon - The bbj-icon component
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjIconButton {
    private $button;
    el: HTMLBbjIconButtonElement;
    /** True to disable the button, false to enable it.  */
    disabled: boolean;
    /** The button's expanse */
    expanse: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | null;
    /** When true, The button will show the focus ring when it is focused by keyboard. */
    focusVisible: boolean;
    /** The button's label */
    label: string;
    /** The button's name */
    name: string;
    /** The button's src */
    src: string;
    /** The button's pool name */
    pool: string;
    /** The theme name */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | null;
    /** Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    componentDidLoad(): void;
    /** disable clicks if disabled */
    handleClick(ev: MouseEvent): void;
    /** Set focus on the button */
    setFocus(): Promise<void>;
    /** Remove focus on the button */
    removeFocus(): Promise<void>;
    private figureLabel;
    render(): any;
}
