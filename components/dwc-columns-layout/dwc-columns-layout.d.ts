import { DwcColumnsLayoutBreakpoint } from './dwc-columns-layout.types';
/**
 * The `dwc-columns-layout` component provides a flexible layout with dynamic columns based on the width of the layout.
 * It adjusts the number of columns automatically according to the specified breakpoints.
 *
 * @slot - This is where the content of the columns layout should be placed.
 *
 * @part control - The base wrapper for the component.
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcColumnsLayout {
    private resizeObserver;
    private mutationObserver;
    el: HTMLDwcColumnsLayoutElement;
    currentColumns: number;
    currentBreakpoint: string | null;
    /**
     * Breakpoints for the number of columns depending on the layout width.
     */
    breakpoints: DwcColumnsLayoutBreakpoint[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    componentDidLoad(): void;
    private setupResizeObserver;
    private setupMutationObserver;
    private convertToPixels;
    private updateLayout;
    private handleResize;
    private handleMutations;
    render(): any;
}
