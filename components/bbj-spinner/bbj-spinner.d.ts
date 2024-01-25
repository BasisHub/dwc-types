/**
 * The `bbj-spinner` provide a way to show the progress of an indeterminate operation.
 *
 * @part control - The component's base wrapper.
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjSpinner {
    el: HTMLBbjSpinnerElement;
    /** When true, the animation will be played clockwise, counter clockwise otherwise. */
    clockwise: boolean;
    /** The component's expanse */
    expanse: '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
    /** When true, the animation will be paused, played otherwise. */
    paused: boolean;
    /** The animation speed in milliseconds */
    speed: number;
    onSpeedChanged(): void;
    /** The theme name */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | null;
    componentWillLoad(): void;
    private updateSpeed;
    render(): any;
}
