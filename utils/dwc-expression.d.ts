export type DwcExpression = string | ((...args: any[]) => any);
export interface ExpressionEngine {
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
    evaluate(expression: DwcExpression, params: object): any;
}
export declare abstract class AbstractExpressionEngine implements ExpressionEngine {
    private type;
    private params;
    constructor(type: string, params: string[]);
    /**
     * {@inheritDoc}
     */
    getType(): string;
    /**
     * {@inheritDoc}
     */
    getParams(): string[];
    /**
     * {@inheritDoc}
     */
    abstract evaluate(expression: DwcExpression, params: object): any;
}
/**
 * @author Hyyan Abo Fakher
 */
export declare class DwcExpressionEngine extends AbstractExpressionEngine {
    protected store: any[];
    /**
     * Build and execute an expression with the passed params
     *
     * @param expression the expression to be executed
     * @param params the expression parameters
     *
     * @return mixed
     */
    evaluate(expression: DwcExpression, params: object): any;
    /**
     * Build a js function from the given expression
     *
     * @param expression the expression to be executed
     *
     * @return A function to be executed
     */
    private compile;
}
