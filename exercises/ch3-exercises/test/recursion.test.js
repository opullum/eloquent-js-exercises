import { isEven } from '../solutions/recursion-solution.js';

describe('Solution testing for exercise "Recursion" from Chapter 2', () => {
    describe('Testing recursive function isEven()', () => {
      it('Should return true when value 50 is provided', () => {
        const result = isEven(50);
        expect(result).to.equal(true);
      });

      it('Should return false when value 75 is provided', () => {
        const result = isEven(75);
        expect(result).to.equal(false);
      });

      it('Should return ?? or undefined when a non-positive value is provided.', () => {
        const result = isEven(-1);
        expect(result).to.be.oneOf(['??', undefined]);
      })
    })
});