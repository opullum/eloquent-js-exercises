# Chapter 4: Data Structures: Objects and Arrays
🔗 [Link to Chapter](https://eloquentjavascript.net/04_data.html)
📂 [Starter File](../base/a-list-base.js)
🛠️ [Solution File](../solutions/a-list-solution.js)
🧪 [Open in Sandbox](https://eloquentjavascript.net/code/#4.3)

## Exercise 3: A List
The chapter shows how a list (a nested set of `{value, rest}` objects) can model sequences. Implement the helper functions from the text:

- `arrayToList(array)` converts an array into the list format.
- `listToArray(list)` performs the reverse conversion.
- `prepend(value, list)` adds a new element at the front of an existing list.
- `nth(list, number)` returns the element at the given position (where zero refers to the first element). When the element does not exist, it should return `undefined`.

Bonus: make `nth` recursive in addition to an iterative implementation.

<details>
    <summary><b>Exercise Hints</b></summary>

    Converting an array to a list is easiest when iterating from the back so that you always know what the rest of the list should be. Start with `null` and wrap it successively.

    To go the other direction, walk the chained `rest` references until you reach `null`, collecting the `value` fields along the way.

    `prepend` is just a convenience wrapper that returns a new object with the provided value and list.

    For `nth`, consider writing a helper that decrements the counter on each recursive call until it hits zero.
</details>
