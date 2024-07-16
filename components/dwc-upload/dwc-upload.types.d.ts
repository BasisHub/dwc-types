export type DwcUploadPayload = {
    request: XMLHttpRequest;
    file: File;
};
export type DwcUploadProgressPayload = DwcUploadPayload & {
    request: XMLHttpRequest;
    file: File;
    progress: number;
};
export type DwcUploadRequestPayload = DwcUploadPayload & {
    form: FormData;
};
export type DwcUploadFailedPayload = DwcUploadPayload & {
    error: string;
};
export type DwcUploadFilter = {
    id?: string | number;
    name: string;
    globs: string;
};
export type DwcUploadI18n = {
    approve?: string;
    cancel?: string;
    dropFile?: string;
    dropFiles?: string;
    addFile?: string;
    addFiles?: string;
    uploadFile?: string;
    clearFile?: string;
    retryFile?: string;
    filterAll?: string;
    statusMaxed?: string;
    statusTooBig?: string;
    statusNotAllowedType?: string;
    statusConnecting?: string;
    statusQueued?: string;
    statusCanceled?: string;
    errorUnavailable?: string;
    errorUnexpected?: string;
    errorForbidden?: string;
};
