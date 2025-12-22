import { solution } from '../solutions/flattening-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Flattening" from Chapter 5', () => {

  describe('Testing function solution()', () => {
    it('Should flatten a simple array of arrays', () => {
      const arrays = [[1, 2, 3], [4, 5], [6]];
      const result = solution(arrays);
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('Should handle arrays with varying lengths', () => {
      const arrays = [[1], [2, 3, 4], [5, 6]];
      const result = solution(arrays);
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('Should handle empty arrays within the array', () => {
      const arrays = [[1, 2], [], [3, 4]];
      const result = solution(arrays);
      expect(result).to.deep.equal([1, 2, 3, 4]);
    });

    it('Should return an empty array when given an empty array', () => {
      const arrays = [];
      const result = solution(arrays);
      expect(result).to.deep.equal([]);
    });

    it('Should work with arrays containing different data types', () => {
      const arrays = [['a', 'b'], ['c'], ['d', 'e', 'f']];
      const result = solution(arrays);
      expect(result).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    it('Should handle a single array', () => {
      const arrays = [[1, 2, 3, 4, 5]];
      const result = solution(arrays);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });
});
