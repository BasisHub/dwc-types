import { FunctionalComponent } from '../../../stencil-public-runtime';
/**
 * Props for the `DwcHelperText` functional component.
 *
 * @see {@link DwcHelperText}
 */
export type DwcHelperTextProps = {
    id?: string;
    helperText: string;
    visible?: boolean;
};
/**
 * A functional component that renders helper text.
 *
 * @param id - The ID of the helper text. Default is `helper-text`.
 * @param helperText - The helper text to display.
 *
 * @see {@link DwcHelperTextProps}
 */
export declare const DwcHelperText: FunctionalComponent<DwcHelperTextProps>;
