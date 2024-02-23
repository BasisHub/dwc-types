/**
 * The payload of the bbj-tabs-list's selection event
 */
export type BbjTabsListSelectionPayload = {
    /** The tab's index */
    index: number;
    /** The tab's element */
    tab: HTMLBbjTabElement;
};
