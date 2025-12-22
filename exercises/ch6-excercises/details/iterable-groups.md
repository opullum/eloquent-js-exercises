# Chapter 6: The Secret Life of Objects
🔗 [Link to Chapter](https://eloquentjavascript.net/06_object.html)
📂 [Starter File](../base/iterable-groups-base.js)
🛠️ [Solution File](../solutions/iterable-groups-solution.js)
🧪 [Open in Sandbox](https://eloquentjavascript.net/code/#6.3)

## Exercise 3: Iterable Groups
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
<details> 
  <summary><b>Exercise Hints</b></summary>
  It is probably worthwhile to define a new class GroupIterator. Iterator instances should have a property that tracks the current position in the group. Every time next is called, it checks whether it is done and, if not, moves past the current value and returns it.

  The Group class itself gets a method named by Symbol.iterator that, when called, returns a new instance of the iterator class for that group.
</detials>