/**
 * Describes a color chooser i18n
 */
export type BbjColorChooserI18n = {
    approve?: string;
    cancel?: string;
    swatches?: string;
    themeSwatches?: string;
    copy?: string;
    pick?: string;
    themeColors?: string;
};
/**
 * Describes a color chooser swatch
 */
export type BbjColorChooserSwatch = {
    name: string;
    colors: string[];
};
