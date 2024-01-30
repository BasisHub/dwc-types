export type BbjUploadPayload = {
    request: XMLHttpRequest;
    file: File;
};
export type BbjUploadProgressPayload = BbjUploadPayload & {
    request: XMLHttpRequest;
    file: File;
    progress: number;
};
export type BbjUploadRequestPayload = BbjUploadPayload & {
    form: FormData;
};
export type BbjUploadFailedPayload = BbjUploadPayload & {
    error: string;
};
export type BbjUploadFilter = {
    id?: string | number;
    name: string;
    globs: string;
};
export type BbjUploadI18n = {
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
