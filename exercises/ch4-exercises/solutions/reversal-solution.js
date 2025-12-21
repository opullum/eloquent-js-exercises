/**\n * EXERCISE 2: Reversing an Array\n * \n * SUMMARY:\n * Create two functions to reverse arrays:\n * - reverseArray: returns a NEW array with elements in reverse order (non-mutating)\n * - reverseArrayInPlace: modifies the original array by reversing it in place (mutating)\n * \n * REQUIREMENTS:\n * \n * reverseArray(array):\n * - Parameters: an array to reverse\n * - Return: a NEW array with elements in reverse order\n * - The original array must NOT be modified\n * - Examples:\n *   - reverseArray([1, 2, 3]) returns [3, 2, 1]\n *   - Original array stays [1, 2, 3]\n * - Approach: iterate from the end of the input array and push values to a new array\n * \n * reverseArrayInPlace(array):\n * - Parameters: an array to reverse\n * - Return: the same (modified) array\n * - The original array IS modified (mutating operation)\n * - Examples:\n *   - reverseArrayInPlace([1, 2, 3]) returns [3, 2, 1]\n *   - Original array becomes [3, 2, 1]\n * - Approach: swap mirrored positions (first with last, second with second-to-last, etc.)\n * - Tip: only loop halfway through the array using Math.floor(array.length / 2)\n * - Use a temporary variable to hold values during swapping\n * \n * LEARNING GOALS:\n * - Difference between mutating and non-mutating operations\n * - Array element swapping techniques\n * - Mirrored position calculation\n * - Loop bounds and Math functions (Math.floor)\n * - Understanding side effects in functions\n */

export function reverseArray(array) {
  // Your code here.
}

export function reverseArrayInPlace(array) {
  // Your code here.
}
