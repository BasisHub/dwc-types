/**
 * Describes a color chooser i18n
 */
export type DwcColorChooserI18n = {
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
export type DwcColorChooserSwatch = {
    name: string;
    colors: string[];
};
