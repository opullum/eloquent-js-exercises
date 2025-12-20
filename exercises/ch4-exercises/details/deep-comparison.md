# Chapter 4: Data Structures: Objects and Arrays
🔗 [Link to Chapter](https://eloquentjavascript.net/04_data.html)
📂 [Starter File](../base/deep-comparison-base.js)
🛠️ [Solution File](../solutions/deep-comparison-solution.js)
🧪 [Open in Sandbox](https://eloquentjavascript.net/code/#4.4)

## Exercise 4: Deep Comparison
Write a function `deepEqual(a, b)` that returns true only when the two arguments have the same structure and values. When passed primitive values, it should act like the `===` operator. For objects, it needs to compare every property (and nested property) recursively so that separate objects that look the same are considered equal.

<details>
    <summary><b>Exercise Hints</b></summary>

    The first quick win is to return `true` immediately when `a === b`. After that, rule out any `null` values or non-object types, because the rest of the logic assumes you can inspect properties.

    When comparing two non-null objects, grab their keys with `Object.keys`. If they do not have the same number of keys, you already know the objects differ. Otherwise, iterate over one set of keys and ensure the other object contains the key and that the values associated with that key also satisfy `deepEqual`.
</details>
