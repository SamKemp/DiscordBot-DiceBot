export default DataFormatError;
/**
 * An error thrown when a data format is invalid
 */
declare class DataFormatError extends Error {
    /**
     * Create a `DataFormatError`
     *
     * @param {*} data The invalid data
     */
    constructor(data: any);
    data: any;
}
