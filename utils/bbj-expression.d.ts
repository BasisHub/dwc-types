export type BbjExpression = string | ((...args: any[]) => any);
/**
 * @author Hyyan Abo Fakher
 */
export declare class BbjExpressionEngine {
    protected type: string;
    protected params: string[];
    protected store: any[];
    /**
     * Construct a new expression engine
     *
     * @param type The type of the engine
     * @param params The expression supported parameters
     */
    constructor(type: string, params: string[]);
    /**
     * Get the engine type
     *
     * @returns The engine type as string
     */
    getType(): string;
    /**
     * Get the name of the params that the expression needs
     *
     * @return The params as strings array
     */
    getParams(): string[];
    /**
     * Build and execute an expression with the passed params
     *
     * @param expression the expression to be executed
     * @param params the expression parameters
     *
     * @return mixed
     */
    evaluate(expression: BbjExpression, params: object): any;
    /**
     * Build a js function from the given expression
     *
     * @param expression the expression to be executed
     *
     * @return A function to be executed
     */
    protected compile(expression: any): any;
}
