import { countBs, countChar } from '../solutions/beancounting-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Bean Counting" from Chapter 2', () => {
    describe('Testing function countBs() to count capital Bs in given string', () => {
        it('Should return 2 when value BOB is provided', () => {
            const count = countBs("BOB");
            expect(count).to.equal(2);
        });
    });

    describe('Testing function countChars() to count any given character as second arg', () => {
        it('Should return 4 when counting char "k" in string "kakkerlak"', () => {
            const count = countChar("kakkerlak", "k");
            expect(count).to.equal(4);
        });
    });
});