import { min } from '../solutions/minimum-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Minimum" from Chapter 2', () => {
	describe('Testing function min()', () => {
		it('Should return value 10 when values (0, 10) is provided', () => {
			const result = min(0, 10);
			expect(result).to.equal(0);
		});

		it('Should return -10 when values (0, -10) is provided', () => {
			const result = min(10, -10);
			expect(result).to.equal(-10);
		});
	});
});
