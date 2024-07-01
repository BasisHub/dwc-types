import { FunctionalComponent } from '../../../stencil-public-runtime';
/**
 * Interface for DwcValidationInline component props.
 * {@link DwcValidationInline}
 */
export type DwcValidationInlineProps = {
    invalidMessage: string;
    icon: string | object;
};
/**
 * A functional component that renders inline validation block.
 *
 * @param invalidMessage - The message to display when validation fails.
 * @param validationIcon - The icon to display when validation fails.
 *
 * @see {@link DwcValidationInlineProps}
 */
export declare const DwcValidationInline: FunctionalComponent<DwcValidationInlineProps>;
