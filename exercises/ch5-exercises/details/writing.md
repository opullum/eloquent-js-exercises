# Chapter 5: Higher-Order Functions
🔗 [Link to Chapter](https://eloquentjavascript.net/05_higher_order.html)
📂 [Starter File](../base/writing-base.js)
🛠️ [Solution File](../solutions/writing-solution.js)
🧪 [Open in Sandbox](https://eloquentjavascript.net/code/#5.4)

## Exercise 3: Everything

Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The **dominant direction** is the direction of a majority of the characters that have a script associated with them. The `characterScript` and `countBy` functions defined earlier in the chapter are probably useful here.

<details>
    <summary><b>Exercise Hints</b></summary>
    Your solution might look a lot like the first half of the textScripts example. You again have to count characters by a criterion based on characterScript and then filter out the part of the result that refers to uninteresting (script-less) characters.

    Finding the direction with the highest character count can be done with reduce. If it’s not clear how, refer to the example earlier in the chapter, where reduce was used to find the script with the most characters.
</details>