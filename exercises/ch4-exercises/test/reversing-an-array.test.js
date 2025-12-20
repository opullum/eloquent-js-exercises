import { reverseArray, reverseArrayInPlace } from '../solutions/reversing-an-array-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Reversing an Array" from Chapter 4', () => {
  describe('reverseArray()', () => {
    it('returns a new reversed copy', () => {
      const original = ['A', 'B', 'C'];
      const reversed = reverseArray(original);

      expect(reversed).to.deep.equal(['C', 'B', 'A']);
      expect(reversed).to.not.equal(original);
      expect(original).to.deep.equal(['A', 'B', 'C']);
    });
  });

  describe('reverseArrayInPlace()', () => {
    it('reorders the provided array in place', () => {
      const arrayValue = [1, 2, 3, 4, 5];
      reverseArrayInPlace(arrayValue);
      expect(arrayValue).to.deep.equal([5, 4, 3, 2, 1]);
    });
  });
});
