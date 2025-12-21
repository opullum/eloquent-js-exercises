# Eloquent JavaScript Exercises

## How do I contribute to this Repository?
This project is largely documentation based, making it a good first issue for those new to GitHub. 
Contributions generally consist of copying information from the [online Eloquent JavaScript (4th Edition) book by Marjin Haverbeke](https://eloquentjavascript.net/index.html) and writing unit tests
using Mocha. 

Typically, issues will be opened regarding new chapters to be added. Anyone is free to take these.
When adding new exercises, please refer to the following structure:

```
exercises
│   ├───ch?-exercises
│   │   ├───base
│   │   ├───details
│   │   ├───solutions
│   │   └───test
│   ├───...
├──────────────────────
```

- `base` contains the original, unmodified exercises. 
- `details` contains exercise information. These should be unmodified/minimally modified.
- `solutions` contains the solution files where exercises are to be completed.
- `test` contains the Mocha test files to verify solutions.

## Formatting and Styling

This project does not contain strict formatting guidelines in both code and documentation. However, here are some recommendations to create consistency.

### Details
When copying exercise information from the text, the following is observed:
- Functions should be in small blocks. For example, `sum()`, `range()`.
- Important details and information *should* be in **bold**, especially if they are related to requirements for the exercise.
- Refrain from modifying the original text details unless deemed *absolutely necessary* for transferring the information.
- You may reference previous exercises for more information regarding details and documentation.

### Tests

When creating Unit Tests with Mocha, assertions should be formatted in the following grammatical fashion:

 ❌ "tests function range for correct values" <br>
 ✅ "Verifies function range for expected values" <br>
 ☑️ "Function range produces expected results for values [...]"

 As additional example, below is an acceptable output for a given Mocha test:
 ```
Solution testing for exercise "Reversing an Array" from Chapter 4
    Verifying functionality for reverseArray()
      ✔ Returns a reversed copy of the original array
    Verifying functionality for reverseArrayInPlace()
      ✔ Returns the original array reversed
 ```

These are not required to be overly detailed or complex. However, they *must* be clean and consistent with other tests written. Once again, **you may refer to previous exercises for information regarding output.**

## How do I get started?

If you are working on an **open issue**, create a branch/fork of the repository, make changes, and then submit a **pull request** linking to the issue. For example, in the request description:

```
Description of Changes:
- Adjusted markdown files for Chapter 3 exercise details.

fixes #3  << Assigns the PR to the issue noted
```
You may also create **new issues** if you are working on problems without created issues or adding contents for a chapter without one. The process is identical.

When creating issues or pull requests, please enable **Allow edits from maintainers**. This will allow me (@opullum) to modify your contributions to fix details related to formatting, stylizing, or anything related to consistency.


