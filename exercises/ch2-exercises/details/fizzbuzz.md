# Chapter 2: Program Structure
🔗 [Link to Chapter](https://eloquentjavascript.net/02_program_structure.html)
📂 [Starter file](../base/fizzbuzz-base.js)
🛠️ [Solution File](../solutions/fizzbuzz-solution.js)

## Exercise 2: FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

<details>
    <summary><b>Exercise Hints</b></summary>

    Going over the numbers is clearly a looping job, and selecting what to print is a matter of conditional execution. Remember the trick of using the remainder (%) operator for checking whether a number is divisible by another number (has a remainder of zero).

    In the first version, there are three possible outcomes for every number, so you’ll have to create an if/else if/else chain.

    The second version of the program has a straightforward solution and a clever one. The simple solution is to add another conditional “branch” to precisely test the given condition. For the clever solution, build up a string containing the word or words to output and print either this word or the number if there is no word, potentially by making good use of the || operator.
</details>

