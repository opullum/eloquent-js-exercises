/**
 * EXERCISE 1: The Sum of a Range
 *
 * SUMMARY:
 * Create two utility functions:
 * - range: builds an array of numbers from start to end with a configurable step
 * - sum: calculates the total of all numbers in an array
 *
 * REQUIREMENTS:
 *
 * range(start, end, step):
 * - Parameters:
 *   - start: the first number (required)
 *   - end: the last number, inclusive (required)
 *   - step: the increment between numbers (optional, default depends on direction)
 *     - If not provided, default to 1 when start < end
 *     - If not provided, default to -1 when start >= end
 * - Return: an array containing all numbers from start to end
 * - Examples:
 *   - range(1, 7) returns [1, 2, 3, 4, 5, 6, 7]
 *   - range(3, 0, -1) returns [3, 2, 1, 0]
 *   - range(1, 10, 2) returns [1, 3, 5, 7, 9]
 *
 * sum(array):
 * - Parameters: an array of numbers
 * - Return: the sum of all elements in the array
 * - Return 0 if the array is empty
 * - Examples:
 *   - sum([1, 2, 3]) returns 6
 *   - sum([]) returns 0
 *
 * LEARNING GOALS:
 * - Array creation and manipulation with push()
 * - Default parameter values
 * - Using loops to iterate and accumulate values
 * - Conditional logic for loop termination
 * - Using for...of loop for iteration
 */

export function range(start, end, step = start < end ? 1 : -1) {
	// Your code here.
}

export function sum(array) {
	// Your code here.
}
