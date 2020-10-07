export default NotationError;
/**
 * An error thrown when the notation is invalid
 */
declare class NotationError extends Error {
    /**
     * Create a `NotationError`
     *
     * @param {*} notation The invalid notation
     */
    constructor(notation: any);
    notation: any;
}
