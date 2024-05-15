/**
 * The payload of the dwc-tabbed-pane's selection event
 */
export type DwcTabbedPaneSelectionPayload = {
    /** The tab's index */
    index: number;
    /** The tab's element */
    tab: HTMLDwcTabElement;
};
