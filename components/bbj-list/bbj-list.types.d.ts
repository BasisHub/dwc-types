import { BbjExpression } from '../../utils/bbj-expression';
/**
 * Represents a list item in bbj-list.
 */
export type BbjListItem = {
    /** The item's value */
    value: string;
    /** The item's label */
    label: string;
    /** The item's prefix (HTML is supported) */
    prefix?: string;
    /** The item's suffix (HTML is supported) */
    suffix?: string;
    /** When true, item is disabled; otherwise it is enabled.*/
    disabled?: boolean;
};
/**
 * Represents a list event payload
 */
export type BbjListEventPayload = {
    /** The item's index */
    index: number;
    /** The item object */
    item: BbjListItem;
};
/**
 * A BBj expression or a function to render the list item's label.
 */
export type BbjListItemRenderer = BbjExpression | ((
/** The item object */
item: BbjListItem) => string);
