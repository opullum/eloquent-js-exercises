import { every } from '../solutions/everything-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Everything" from Chapter 5', () => {

  describe('Verifying functionality for every()', () => {
    it('Returns true when provided array [1, 3, 5] and test (n < 10)', () => {
      const result = every([1, 3, 5], n => n < 10);
      expect(result).to.be.true;
    });

    it('Returns false when provided array [2, 4, 6] and test (n < 10)', () => {
      const result = every([2, 4, 16], n => n < 10);
      expect(result).to.be.false;
    });

    it('Returns true when an empty array is passed to the function', () => {
      const result = every([], n => n < 10);
      expect(result).to.be.true;
    });

    it('Provides correct functionality for predicate functions', () => {
      const result = every([2, 4, 6, 8], n => n % 2 === 0);
      expect(result).to.be.true;
    });

    it('Returns false when the first element fails the test', () => {
      const result = every([10, 2, 4], n => n < 10);
      expect(result).to.be.false;
    });

    it('Returns false when the last element fails the test', () => {
      const result = every([2, 4, 10], n => n < 10);
      expect(result).to.be.false;
    });

    it('Provides correct functionality when provided string predicates', () => {
      const result = every(['hello', 'world', 'test'], s => s.length > 2);
      expect(result).to.be.true;
    });

    it('Provides correct functionality when provided negative numbers', () => {
      const result = every([-5, -3, -1], n => n < 0);
      expect(result).to.be.true;
    });

    it('Provides correct functionality when provided boolean predicates', () => {
      const result = every([true, true, true], b => b === true);
      expect(result).to.be.true;
    });


