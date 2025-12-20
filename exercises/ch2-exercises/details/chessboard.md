# Chapter 2: Program Structure
🔗 [Link to Chapter](https://eloquentjavascript.net/02_program_structure.html)
📂 [Starter file](../base/chessboard-base.js)
🛠️ [Solution File](../solutions/chessboard-solution.js)

## Exercise 3: FizzBuzz
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

<details>
    <summary><b>Exercise Hints</b></summary>

    You can build the string by starting with an empty one ("") and repeatedly adding characters. A newline character is written "\n".

    To work with two dimensions, you will need a loop inside of a loop. Put braces around the bodies of both loops to make it easy to see where they start and end. Try to properly indent these bodies. The order of the loops must follow the order in which we build up the string (line by line, left to right, top to bottom). So the outer loop handles the lines, and the inner loop handles the characters on a line.

    You’ll need two bindings to track your progress. To know whether to put a space or a hash sign at a given position, you could test whether the sum of the two counters is even (% 2).

    Terminating a line by adding a newline character must happen after the line has been built up, so do this after the inner loop but inside the outer loop.
</details>

