export declare const offsetModifier: (skidding?: number, distance?: number) => {
    name: string;
    options: {
        offset: number[];
    };
};
export declare const flipModifier: (boundary?: string | HTMLElement, preventOverflow?: boolean) => {
    name: string;
    options: {
        boundary: string | HTMLElement;
        preventOverflow: boolean;
    };
};
export declare const preventOverflowModifier: (boundary?: string | HTMLElement, altAxis?: boolean) => {
    name: string;
    options: {
        boundary: string | HTMLElement;
        altAxis: boolean;
    };
};
export declare const hideModifier: () => {
    name: string;
};
export declare const arrowHideModifier: () => {
    name: string;
    enabled: boolean;
    phase: string;
    fn({ state }: {
        state: any;
    }): void;
};
