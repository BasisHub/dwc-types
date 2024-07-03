import { DwcIconPool, DwcIconPoolModifier, DwcIconPoolResolver } from './dwc-icon.types';
export declare class DwcIconRegistry {
    /** The collection of pools */
    protected pools: DwcIconPool[];
    constructor();
    /**
     * Register a new pool
     *
     * @param name The pool's name
     * @param resolver The pool's resolver
     * @param modifier The pool's modifier
     *
     * @returns The pool manger instance
     */
    register(name: string, resolver: DwcIconPoolResolver, modifier?: DwcIconPoolModifier): this;
    /**
     * Unregister a pool
     *
     * @param name The pool's name
     *
     * @returns The pool manger instance
     */
    unregister(name: string): this;
    /**
     * Get the pool instance
     *
     * @param name The name of the pool
     *
     * @returns The pool instance
     */
    get(name: string): DwcIconPool | null;
}
