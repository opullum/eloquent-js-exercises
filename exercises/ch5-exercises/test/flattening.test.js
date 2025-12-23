import { solution } from '../solutions/flattening-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Flattening" from Chapter 5', () => {

  describe('Verifying solution flattens arrays into a single array', () => {
    it('Correctly flattens into a single array when provided simple arrays', () => {
      const arrays = [[1, 2, 3], [4, 5], [6]];
      const result = solution(arrays);
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('Correctly flatten when provided varying array', () => {
      const arrays = [[1], [2, 3, 4], [5, 6]];
      const result = solution(arrays);
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('Correctly handles flattening when provided one array is an empty array', () => {
      const arrays = [[1, 2], [], [3, 4]];
      const result = solution(arrays);
      expect(result).to.deep.equal([1, 2, 3, 4]);
    });

    it('Returns an empty array when an empty array is provided', () => {
      const arrays = [];
      const result = solution(arrays);
      expect(result).to.deep.equal([]);
    });

    it('Correctly handles flattening when provided arrays with varying data types', () => {
      const arrays = [['a', 'b'], ['c'], ['d', 'e', 'f']];
      const result = solution(arrays);
      expect(result).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    it('Correctly handles flattening when provided a single array', () => {
      const arrays = [[1, 2, 3, 4, 5]];
      const result = solution(arrays);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });
});
