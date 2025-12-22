/**
 * EXERCISE 3: A List
 * 
 * SUMMARY: 
 * Implement helper functions to work with linked list data structure.
 * A list is represented as nested objects with {value, rest} structure:
 * - value: the data stored at this node\n 
 * - rest: reference to the next node (or null for the last node)
 * Example list structure: {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
 * 
 * REQUIREMENTS:
 * arrayToList(array):
 * - Converts a regular array into a linked list structure
 * - Parameters: an array of values
 * - Return: a nested {value, rest} object representing the list
 * - Approach: iterate from the END of the array backwards, wrapping each value
 * - Start with null and successively wrap elements
 * - Example: [1, 2, 3] becomes {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
 * 
 * listToArray(list):
 * - Converts a linked list back into a regular array
 * - Parameters: a list object (or null)
 * - Return: an array with all values from the list
 * - Approach: follow rest references until null, collecting values
 * - Example: {value: 1, rest: {value: 2, rest: null}} becomes [1, 2]
 * 
 * prepend(value, list):
 * - Adds a new element to the front of a list
 * - Parameters: a value to add and an existing list
 * - Return: a new list with the value prepended
 * - This is a convenience wrapper: just return {value, rest: list}
 * - Example: prepend(0, [1, 2]) results in [0, 1, 2]
 * 
 * nth(list, n):
 * - Returns the element at a given position in the list
 * - Parameters: a list object and a position index (0-based)
 * - Return: the value at position n, or undefined if it doesn't exist
 * - Bonus: implement both iterative and recursive versions
 * - Example: nth(myList, 1) returns the second element
 * 
 * LEARNING GOALS:
 * - Understanding recursive data structures (linked lists)
 * - Working with nested objects
 * - Recursive list traversal
 * - Array-to-list and list-to-array conversions
 * - Node structure: {value, rest}
 */

export function arrayToList(array) {
  // Your code here.
}

export function listToArray(list) {
  // Your code here.
}

export function prepend(value, list) {
  // Your code here.
}

export function nth(list, n) {
  // Your code here.
}
