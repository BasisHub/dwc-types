import template from 'lodash/template';
import { AbstractExpressionEngine, BbjExpression } from './bbj-expression';
/**
 * A template engine class leveraging Lodash's template functionality.
 *
 * This class compiles and executes templates using provided parameters.
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjTemplateExpressionEngine extends AbstractExpressionEngine {
    private store;
    private firstExecution;
    /**
     * Compiles and executes a template with the provided parameters.
     *
     * @param expression The template expression to be executed, either a string or a function.
     * @param params An object containing the parameters for the template.
     *
     * @return The result of the template execution as a string, or null if an error occurs.
     */
    evaluate(expression: BbjExpression, params: object): any;
    /**
     * Compiles the given template expression into a reusable function.
     *
     * @param templateExpression The template expression to compile, can be a
     *                           string or a pre-defined function.
     *
     * @return A compiled template function ready for execution with parameters.
     */
    protected compile(templateExpression: BbjExpression): ReturnType<typeof template>;
}
