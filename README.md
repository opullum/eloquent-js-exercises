# eloquent-js-exercises
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)

Repository to hold the exercises for *Eloquent JavaScript (4th ed.)* by Marjin Haverbeke. Includes problem details and solution testing via. Mocha. Created to conveniently complete problems and test solutions in IDEs.

🔗 [Eloquent JavaScript (4th. Edition) by Marjin Haverbeke](https://eloquentjavascript.net/index.html)<br>
🔗 [Eloquent JavaScript Code Sandbox + Solutions](https://eloquentjavascript.net/code/)

## Progress Checklist
Below are the current tasks left to complete in this repository. This checklist will be removed once all the chapters, details, exercises, and tests are added. Contributions are welcome!

**Key**: ✅ (Completed), 🚧 (In Progress), ❌ (Not Started)

- [🚧] Add exercise details from all chapters 
  - [❌] Update exercise details to include a link to the sandbox solution
- [🚧] Complete unit tests for all exercises 
- [❌] Add comments to all base solution files to describe the requirements 


## Usage
```
[Exercise File Structure]

├───exercises
│   ├───ch2-exercises
│   │   ├───base
│   │   ├───details
│   │   ├───solutions
│   │   └───test
│   └───ch3-exercises
│       ├───base
│       ├───details
│       ├───solutions
│       └───test
├──────Rest of exercises...
```

Directory [exercises](./exercises/) contains the exercises for each chapter from the text. Separate directories are included for the base problem, problem details, and the solution file where the exercise should be solved.

After creating a solution for the given exercise, run the corresponding test in the tests/ directory for the chapter. This can be done using `npx mocha [test_file]` (example: `npx mocha beancounting.test.js`). Verify if all tests pass. If not, retry the problem and/or refer to the hints or online solution for further details.


## Requirements
This project depends on **Mocha** for testing and **Sinon** for console stubbing. Both can be installed via. `npm`.

From the project root:
```
npm install
```
Alternatively, you may run `npm ci` if you would like to utilize package-lock.json instead. Both methods will work.