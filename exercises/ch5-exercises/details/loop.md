# Chapter 5: Higher-Order Functions
🔗 [Link to Chapter](https://eloquentjavascript.net/05_higher_order.html)
📂 [Starter File](../base/loop-base.js)
🛠️ [Solution File](../solutions/loop-solution.js)
🧪 [Open in Sandbox](https://eloquentjavascript.net/code/#5.2)

## Exercise 2: Your Own Loop
Write a higher-order function `loop` that provides something like a for loop statement. **It should take a value, a test function, an update function, and a body function.** Each iteration, it should first run the test function on the current loop value and stop if that returns false. It should then call the body function, giving it the current value, and finally call the update function to create a new value and start over from the beginning.

When defining the function, you can use a regular loop to do the actual looping.

**This exercise contains no hints**