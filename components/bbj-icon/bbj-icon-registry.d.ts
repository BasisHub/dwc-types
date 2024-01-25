import { BbjIconPool, BbjIconPoolModifier, BbjIconPoolResolver } from './bbj-icon.types';
export declare class BbjIconRegistry {
    /** The collection of pools */
    protected pools: BbjIconPool[];
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
    register(name: string, resolver: BbjIconPoolResolver, modifier?: BbjIconPoolModifier): this;
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
    get(name: string): BbjIconPool | null;
}
