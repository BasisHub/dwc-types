/**
 * Defines a resolver function for icon pool.
 * It takes the name of an icon and returns its corresponding url.
 *
 * @param name - The name of the icon to resolve.
 * @returns The string representation of the icon.
 */
export type DwcIconPoolResolver = (name: string) => string;
/**
 * Defines a modifier function for an icon.
 * It can be used to modify SVG or HTML image elements.
 *
 * @param icon - The SVGElement or HTMLImageElement to modify.
 */
export type DwcIconPoolModifier = (icon: SVGElement | HTMLImageElement) => void;
/**
 * Represents an icon pool containing a set of icons.
 *
 * @property name - The name of the icon pool.
 * @property resolver - The resolver function used to get the url of an icon.
 * @property modifier - An optional modifier function to apply custom modifications to icons.
 */
export interface DwcIconPool {
    name: string;
    resolver: DwcIconPoolResolver;
    modifier?: DwcIconPoolModifier;
}
