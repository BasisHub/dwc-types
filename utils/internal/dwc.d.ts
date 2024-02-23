/**
 * Generates an object containing class names for a host element based on the provided conditions.
 * This function checks if the `basis.noclass` attribute is present on the document's root element
 * (html element). If it is not present, the function returns the original object; if the attribute is present, it returns an empty object.
 *
 * @param {Object.<string, boolean>} obj - An object where keys are class names and values are conditions.
 *   If the condition (value) is `true`, the class name (key) is considered valid.
 * @returns {Object.<string, boolean>} An object with class names as keys and boolean values.
 *   Returns the input object if `basis.noclass` attribute is not present on the document's root element,
 *   otherwise returns an empty object.
 *
 * @example
 * // Returns { 'class1': true, 'class2': false } if 'basis.noclass' attribute is not present on <html>
 * hostClasses({ 'class1': true, 'class2': false });
 *
 * // Returns {} if 'basis.noclass' attribute is present on <html>
 * hostClasses({ 'class1': true, 'class2': false });
 */
export declare const hostClasses: (obj: {
    [key: string]: boolean;
}) => {
    [key: string]: boolean;
};
