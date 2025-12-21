# Chapter 3: Functions
🔗 [Link to Chapter](https://eloquentjavascript.net/03_functions.html)
📂 [Starter File](../base/recursion-base.js)
🛠️ [Solution File](../solutions/recursion-solution.js)
🧪 [Open in Sandbox](https://eloquentjavascript.net/code/#3.2)

## Exercise 3: Recursion
We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

- Zero is even.

- One is odd.

- For any other number N, its evenness is the same as N - 2.

Define a recursive function `isEven` corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

<details>
    <summary><b>Exercise Hints</b></summary>

    Your function will likely look somewhat similar to the inner find function in the recursive findSolution example in this chapter, with an if/else if/else chain that tests which of the three cases applies. The final else, corresponding to the third case, makes the recursive call. Each of the branches should contain a return statement or in some other way arrange for a specific value to be returned.

    When given a negative number, the function will recurse again and again, passing itself an ever more negative number, thus getting further and further away from returning a result. It will eventually run out of stack space and abort.

</details>

