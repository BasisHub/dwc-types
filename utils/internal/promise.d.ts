/**
 * Wait the given amount of time then resolve the promise
 *
 * @param {Number} time
 *
 * @returns {Promise}
 */
export declare const delay: (time: number) => Promise<null>;
export declare const defer: () => Promise<unknown>;
