export default RequiredArgumentError;
/**
 * An error thrown when a required argument is missing
 */
declare class RequiredArgumentError extends Error {
    /**
     * Create a `RequiredArgumentError`
     *
     * @param {string|null} [argumentName=null] The argument name
     */
    constructor(argumentName?: string | null | undefined);
    argumentName: string | null;
}
