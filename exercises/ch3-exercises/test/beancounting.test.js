import { countBs, countChar } from '../solutions/beancounting-solution.js';

describe('Solution testing for exercise "Bean Counting" from Chapter 2', () => {
    describe('Testing function countBs() to count capital Bs in given string', () => {
        const count = countBs("BOB");
        expect(count).to.equal(2);
    });

    describe('Testing function countChars() to count any given character as second arg', () => {
        const count = countChar("kakkerlak", "k");
        expect(count).to.equal(4);
    });
});