export declare class BbjIconLoader {
    cache: Map<string, string>;
    requests: Map<string, Promise<string>>;
    protected warnMissingSvg: (url: any) => void;
    /**
     * Load an icon from the given url
     *
     * @param url the icon's url
     *
     * @returns The request instance which was initialized to load the icon
     */
    load(url: string): Promise<string>;
}
