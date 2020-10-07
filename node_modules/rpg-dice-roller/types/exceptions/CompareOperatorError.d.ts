export default CompareOperatorError;
/**
 * An error thrown when a comparison operator is invalid
 */
declare class CompareOperatorError extends TypeError {
    /**
     * Create a `CompareOperatorError`
     *
     * @param {*} operator The invalid operator
     */
    constructor(operator: any);
    operator: any;
}
