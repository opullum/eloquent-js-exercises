/**\n * EXERCISE 3: A List\n * \n * SUMMARY:\n * Implement helper functions to work with linked list data structure.\n * A list is represented as nested objects with {value, rest} structure:\n * - value: the data stored at this node\n * - rest: reference to the next node (or null for the last node)\n * \n * Example list structure:\n * {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}\n * \n * REQUIREMENTS:\n * \n * arrayToList(array):\n * - Converts a regular array into a linked list structure\n * - Parameters: an array of values\n * - Return: a nested {value, rest} object representing the list\n * - Approach: iterate from the END of the array backwards, wrapping each value\n * - Start with null and successively wrap elements\n * - Example: [1, 2, 3] becomes {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}\n * \n * listToArray(list):\n * - Converts a linked list back into a regular array\n * - Parameters: a list object (or null)\n * - Return: an array with all values from the list\n * - Approach: follow rest references until null, collecting values\n * - Example: {value: 1, rest: {value: 2, rest: null}} becomes [1, 2]\n * \n * prepend(value, list):\n * - Adds a new element to the front of a list\n * - Parameters: a value to add and an existing list\n * - Return: a new list with the value prepended\n * - This is a convenience wrapper: just return {value, rest: list}\n * - Example: prepend(0, [1, 2]) results in [0, 1, 2]\n * \n * nth(list, n):\n * - Returns the element at a given position in the list\n * - Parameters: a list object and a position index (0-based)\n * - Return: the value at position n, or undefined if it doesn't exist\n * - Bonus: implement both iterative and recursive versions\n * - Example: nth(myList, 1) returns the second element\n * \n * LEARNING GOALS:\n * - Understanding recursive data structures (linked lists)\n * - Working with nested objects\n * - Recursive list traversal\n * - Array-to-list and list-to-array conversions\n * - Node structure: {value, rest}\n */

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
