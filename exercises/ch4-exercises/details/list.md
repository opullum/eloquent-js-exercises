# Chapter 4: Objects and Arrays
🔗 [Link to Chapter](https://eloquentjavascript.net/04_data.html)
📂 [Starter File](../base/list-base.js)
🛠️ [Solution File](../solutions/list-solution.js)

## Exercise 3: A List
Write a function `arrayToList` that **builds up a list structure like the one shown when given [1, 2, 3] as argument.** Also write a `listToArray` function that **produces an array from a list.** Add the helper functions `prepend`, which **takes an element and a list and creates a new list that adds the element to the front of the input list**, and `nth`, which **takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.**

If you haven’t already, also write a recursive version of nth.

<details>
    <summary><b>Exercise Hints</b></summary>
    
    Building up a list is easier when done back to front. So arrayToList could iterate over the array backward (see the previous exercise) and, for each element, add an object to the list. You can use a local binding to hold the part of the list that was built so far and use an assignment like list = {value: X, rest: list} to add an element.

    To run over a list (in listToArray and nth), a for loop specification like this can be used:

    for (let node = list; node; node = node.rest) {}
    
    Can you see how that works? Every iteration of the loop, node points to the current sublist, and the body can read its value property to get the current element. At the end of an iteration, node moves to the next sublist. When that is null, we have reached the end of the list, and the loop is finished.

    The recursive version of nth will, similarly, look at an ever smaller part of the “tail” of the list and at the same time count down the index until it reaches zero, at which point it can return the value property of the node it is looking at. To get the zeroth element of a list, you simply take the value property of its head node. To get element N + 1, you take the Nth element of the list that’s in this list’s rest property.

</details>