# Chapter 4: Data Structures: Objects and Arrays
🔗 [Link to Chapter](https://eloquentjavascript.net/04_data.html)
📂 [Starter File](../base/reversal-base.js)
🛠️ [Solution File](../solutions/reversal-solution.js)
🧪 [Open in Sandbox](https://eloquentjavascript.net/code/#4.2)

## Exercise 2: Reversing an Array
Build two functions. `reverseArray(array)` should return a *new* array containing the original values in reverse order. `reverseArrayInPlace(array)` should rearrange the elements of the supplied array without creating a second array, effectively reversing it in place. Demonstrate that the first function leaves the original array untouched while the second mutates it.

<details>
    <summary><b>Exercise Hints</b></summary>

    For the non-mutating variant, iterating from the end of the array and pushing values into a new array keeps the code compact. You can also use the spread operator, but try to stick with the basic control-flow tools introduced in the chapter.

    Reversing in place requires swapping mirrored positions: the first with the last, the second with the second-to-last, and so on. Loop only halfway through the array (using `Math.floor(array.length / 2)`) and use a temporary variable to hold the value you are swapping out.
</details>
