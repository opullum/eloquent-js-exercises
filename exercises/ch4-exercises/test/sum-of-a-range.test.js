import { range, sum } from '../solutions/sum-of-a-range-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "The Sum of a Range" from Chapter 4', () => {
  describe('range()', () => {
    it('creates an ascending range when step is omitted', () => {
      const values = range(1, 5);
      expect(values).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('creates a descending range when a negative step is provided', () => {
      const values = range(5, 1, -2);
      expect(values).to.deep.equal([5, 3, 1]);
    });
  });

  describe('sum()', () => {
    it('adds all numbers in the provided array', () => {
      const total = sum([1, 2, 3, 4]);
      expect(total).to.equal(10);
    });

    it('adds together a generated range', () => {
      const total = sum(range(1, 10));
      expect(total).to.equal(55);
    });
  });
});
