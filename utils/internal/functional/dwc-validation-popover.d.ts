import { FunctionalComponent } from '../../../stencil-public-runtime';
import { DwcAlertPopoverPlacement } from '../../../components';
/**
 * Props for the `DwcValidationPopover` functional component.
 *
 * @see {@link DwcValidationPopover}
 */
export type DwcValidationPopoverProps = {
    invalidMessage: string;
    icon: string | object;
    hasFocus: boolean;
    popoverDistance: number;
    popoverPlacement: DwcAlertPopoverPlacement;
    popoverSkidding: number;
};
/**
 * A functional component that renders popover validation block.
 *
 * @param invalidMessage - The message to display when validation fails.
 * @param validationIcon - The icon to display when validation fails.
 * @param hasFocus - Whether the input has focus.
 * @param validationPopoverDistance - The distance between the popover and the input.
 * @param validationPopoverPlacement - The placement of the popover.
 * @param validationPopoverSkidding - The skidding of the popover.
 *
 * @see {@link DwcValidationPopoverProps}
 */
export declare const DwcValidationPopover: FunctionalComponent<DwcValidationPopoverProps>;
