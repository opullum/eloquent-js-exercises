import { loop } from '../solutions/loop-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Your Own Loop" from Chapter 5', () => {

  describe('Testing function loop()', () => {
    it('Should execute the body function for each iteration', () => {
      const results = [];
      loop(3, n => n > 0, n => n - 1, n => results.push(n));
      expect(results).to.deep.equal([3, 2, 1]);
    });

    it('Should stop when test function returns false', () => {
      const results = [];
      loop(5, n => n > 2, n => n - 1, n => results.push(n));
      expect(results).to.deep.equal([5, 4, 3]);
    });

    it('Should work with incrementing values', () => {
      const results = [];
      loop(0, n => n < 5, n => n + 1, n => results.push(n));
      expect(results).to.deep.equal([0, 1, 2, 3, 4]);
    });

    it('Should not execute body if test fails on first iteration', () => {
      const results = [];
      loop(0, n => n > 0, n => n - 1, n => results.push(n));
      expect(results).to.deep.equal([]);
    });

    it('Should work with custom update function', () => {
      const results = [];
      loop(1, n => n < 100, n => n * 2, n => results.push(n));
      expect(results).to.deep.equal([1, 2, 4, 8, 16, 32, 64]);
    });

    it('Should work with string values', () => {
      const results = [];
      loop('aaa', s => s.length <= 5, s => s + 'a', s => results.push(s));
      expect(results).to.deep.equal(['aaa', 'aaaa', 'aaaaa']);
    });

    it('Should handle complex body operations', () => {
      let sum = 0;
      loop(1, n => n <= 5, n => n + 1, n => { sum += n; });
      expect(sum).to.equal(15);
    });
  });
});
