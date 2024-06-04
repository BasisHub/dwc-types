import { DwcUploadI18n } from './dwc-upload.types';
/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 *
 * @see https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string/10420404
 */
export declare const formatBytes: (bytes: any, si?: boolean, dp?: number) => string;
export declare const DwcUploadDefaultI18n: DwcUploadI18n;
