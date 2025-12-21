/**
 * EXERCISE 4: Deep Comparison
 * 
 * SUMMARY:
 * Implement a function that performs deep equality comparison of values.
 * Unlike === which only checks reference equality for objects,
 * deepEqual checks if two values have the same structure and values recursively.
 * 
 * REQUIREMENTS:
 * 
 * deepEqual(a, b):
 * - Parameters: any two values to compare
 * - Return: true if values are deeply equal, false otherwise
 * 
 * BEHAVIOR:
 * - For primitive values (numbers, strings, booleans, etc.):
 *   - Behaves like === operator
 *   - Example: deepEqual(5, 5) returns true
 *   - Example: deepEqual("hello", "hello") returns true
 * 
 * - For objects and arrays:
 *   - Compares structure and all properties recursively
 *   - Two separate objects with identical content are considered equal
 *   - Example: deepEqual({a: 1}, {a: 1}) returns true
 *   - Example: deepEqual([1, 2], [1, 2]) returns true
 * 
 * - For null values:
 *   - null === null should be checked (not treated as an object)
 * 
 * APPROACH:
 * 1. Quick check: if a === b, return true immediately
 * 2. Type check: if either is null or not an object, they're not equal
 * 3. Key check: compare Object.keys() of both objects
 *    - If different number of keys, return false
 * 4. Recursive check: iterate keys and recursively call deepEqual on values
 *    - Ensure the other object has each key
 *    - Recursively compare the values at each key
 * 
 * LEARNING GOALS:
 * - Recursive comparison algorithms
 * - Distinguishing primitive from reference types
 * - Working with Object.keys() and property access
 * - Understanding deep vs shallow equality
 * - Handling null and edge cases
 */

export function deepEqual(a, b) {
  // Your code here.
}
