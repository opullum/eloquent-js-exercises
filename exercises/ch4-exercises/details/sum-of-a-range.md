# Chapter 4: Data Structures: Objects and Arrays
🔗 [Link to Chapter](https://eloquentjavascript.net/04_data.html)
📂 [Starter File](../base/sum-of-a-range-base.js)
🛠️ [Solution File](../solutions/sum-of-a-range-solution.js)
🧪 [Open in Sandbox](https://eloquentjavascript.net/code/#4.1)

## Exercise 1: The Sum of a Range
Write a function `range(start, end, step)` that returns an array holding all numbers from `start` to `end` (inclusive). By default, the step should be `1` when counting up and `-1` when counting down, but callers should also be able to provide a custom positive or negative step. Next, write a `sum` function that takes such an array and returns the total of its elements. Make sure the `range` function works for both ascending and descending sequences so that the second part of the exercise can reuse it.

<details>
    <summary><b>Exercise Hints</b></summary>

    A simple for-loop that pushes the current value into an array works well for range creation. When no explicit step is supplied, you can infer the correct direction by comparing start and end. Remember to stop looping once the range passes the end condition to avoid infinite loops.

    For `sum`, loop over the provided array (a `for...of` loop keeps the code readable) and accumulate the running total in a local binding. Returning the final total completes the exercise.
</details>
