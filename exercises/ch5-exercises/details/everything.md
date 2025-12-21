# Chapter 5: Higher-Order Functions
🔗 [Link to Chapter](https://eloquentjavascript.net/05_higher_order.html)
📂 [Starter File](../base/everything-base.js)
🛠️ [Solution File](../solutions/everything-solution.js)
🧪 [Open in Sandbox](https://eloquentjavascript.net/code/#5.3)

## Exercise 3: Everything
Arrays also have an `every` method analogous to the `some` method. **This method returns true when the given function returns true for every element in the array.** In a way, `some` is a version of the `||` operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the `some` method.

<details>
    <summary><b>Exercise Hints</b></summary>
    
    Like the && operator, the every method can stop evaluating further elements as soon as it has found one that doesn’t match. So the loop-based version can jump out of the loop—with break or return—as soon as it runs into an element for which the predicate function returns false. If the loop runs to its end without finding such an element, we know that all elements matched and we should return true.

    To build every on top of some, we can apply De Morgan’s laws, which state that a && b equals !(!a || !b). This can be generalized to arrays, where all elements in the array match if there is no element in the array that does not match.

</details>