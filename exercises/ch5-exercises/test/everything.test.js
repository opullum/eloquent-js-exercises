import { every } from '../solutions/everything-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Everything" from Chapter 5', () => {

  describe('Testing function every()', () => {
    it('Should return true when all elements pass the test', () => {
      const result = every([1, 3, 5], n => n < 10);
      expect(result).to.be.true;
    });

    it('Should return false when at least one element fails the test', () => {
      const result = every([2, 4, 16], n => n < 10);
      expect(result).to.be.false;
    });

    it('Should return true for an empty array', () => {
      const result = every([], n => n < 10);
      expect(result).to.be.true;
    });

    it('Should work with different predicate functions', () => {
      const result = every([2, 4, 6, 8], n => n % 2 === 0);
      expect(result).to.be.true;
    });

    it('Should return false when first element fails', () => {
      const result = every([10, 2, 4], n => n < 10);
      expect(result).to.be.false;
    });

    it('Should return false when last element fails', () => {
      const result = every([2, 4, 10], n => n < 10);
      expect(result).to.be.false;
    });

    it('Should work with string predicates', () => {
      const result = every(['hello', 'world', 'test'], s => s.length > 2);
      expect(result).to.be.true;
    });

    it('Should return false for strings when one is too short', () => {
      const result = every(['hello', 'hi', 'world'], s => s.length > 3);
      expect(result).to.be.false;
    });

    it('Should work with arrays containing negative numbers', () => {
      const result = every([-5, -3, -1], n => n < 0);
      expect(result).to.be.true;
    });

    it('Should handle boolean predicates', () => {
      const result = every([true, true, true], b => b === true);
      expect(result).to.be.true;
    });

    it('Should return false when one boolean is false', () => {
      const result = every([true, false, true], b => b === true);
      expect(result).to.be.false;
    });
  });
});
