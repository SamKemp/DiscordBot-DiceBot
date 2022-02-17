export default RollResults;
/**
 * A collection of die roll results
 *
 * ::: tip
 * You will probably not need to create your own `RollResults` instances, unless you're importing
 * rolls, but RollResults objects will be returned when rolling dice.
 * :::
 */
declare class RollResults {
    /**
     * Create a `RollResults` instance.
     *
     * @example <caption>`RollResult` objects</caption>
     * const results = new RollResults([
     *  new RollResult(4),
     *  new RollResult(3),
     *  new RollResult(5),
     * ]);
     *
     * @example <caption>Numerical results</caption>
     * const results = new RollResults([4, 3, 5]);
     *
     * @example <caption>A mix</caption>
     * const results = new RollResults([
     *  new RollResult(4),
     *  3,
     *  new RollResult(5),
     * ]);
     *
     * @param {Array.<RollResult|number>} [rolls=[]] The roll results
     *
     * @throws {TypeError} Rolls must be an array
     */
    constructor(rolls?: (number | RollResult)[] | undefined);
    /**
     * Set the rolls.
     *
     * @param {RollResult[]|number[]} rolls
     *
     * @throws {TypeError} Rolls must be an array
     */
    set rolls(arg: RollResult[]);
    /**
     * List of roll results.
     *
     * @returns {RollResult[]}
     */
    get rolls(): RollResult[];
    /**
     * The number of roll results.
     *
     * @returns {number}
     */
    get length(): number;
    /**
     * The total value of all the rolls after modifiers have been applied.
     *
     * @returns {number}
     */
    get value(): number;
    /**
     * Add a single roll to the list.
     *
     * @param {RollResult|number} value
     */
    addRoll(value: RollResult | number): void;
    /**
     * Return an object for JSON serialising.
     *
     * This is called automatically when JSON encoding the object.
     *
     * @returns {{rolls: RollResult[], value: number}}
     */
    toJSON(): {
        rolls: RollResult[];
        value: number;
    };
    /**
     * Return the String representation of the object.
     *
     * This is called automatically when casting the object to a string.
     *
     * @returns {string}
     */
    toString(): string;
    [rollsSymbol]: any[] | undefined;
}
import RollResult from "./RollResult.js";
declare const rollsSymbol: unique symbol;
