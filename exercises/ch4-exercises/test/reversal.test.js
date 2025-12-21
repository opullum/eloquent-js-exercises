import { reverseArray, reverseArrayInPlace } from '../solutions/reversal-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Reversing an Array" from Chapter 4', () => {
  describe('Verifying functionality for reverseArray()', () => {
    it('Returns a reversed copy of the original array', () => {
      const original = ['A', 'B', 'C'];
      const reversed = reverseArray(original);

      expect(reversed).to.deep.equal(['C', 'B', 'A']);
      expect(reversed).to.not.equal(original);
      expect(original).to.deep.equal(['A', 'B', 'C']);
    });
  });

  describe('Verifying functionality for reverseArrayInPlace()', () => {
    it('Returns the original array reversed', () => {
      const arrayValue = [1, 2, 3, 4, 5];
      reverseArrayInPlace(arrayValue);
      expect(arrayValue).to.deep.equal([5, 4, 3, 2, 1]);
    });
  });
});
