/**
 * EXERCISE 2: Reversing an Array
 *
 * SUMMARY:
 *
 * Create two functions to reverse arrays:
 * - reverseArray: returns a NEW array with elements in reverse order (non-mutating)
 * - reverseArrayInPlace: modifies the original array by reversing it in place (mutating)
 *
 * REQUIREMENTS:
 *
 * reverseArray(array):
 * - Parameters: an array to reverse
 * - Return: a NEW array with elements in reverse order
 * - The original array must NOT be modified
 * - Examples:
 *   - reverseArray([1, 2, 3]) returns [3, 2, 1]
 *   - Original array stays [1, 2, 3]
 * - Approach: iterate from the end of the input array and push values to a new array
 *
 * reverseArrayInPlace(array):
 * - Parameters: an array to reverse
 * - Return: the same (modified) array
 * - The original array IS modified (mutating operation)
 * - Examples:
 *   - reverseArrayInPlace([1, 2, 3]) returns [3, 2, 1]
 *   - Original array becomes [3, 2, 1]
 * - Approach: swap mirrored positions (first with last, second with second-to-last, etc.)
 * - Tip: only loop halfway through the array using Math.floor(array.length / 2)
 * - Use a temporary variable to hold values during swapping
 *
 * LEARNING GOALS:
 *
 * - Difference between mutating and non-mutating operations
 * - Array element swapping techniques
 * - Mirrored position calculation
 * - Loop bounds and Math functions (Math.floor)
 * - Understanding side effects in functions
 */

export function reverseArray(array) {
	// Your code here.
}

export function reverseArrayInPlace(array) {
	// Your code here.
}
