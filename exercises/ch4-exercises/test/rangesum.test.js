import { range, sum } from '../solutions/rangesum-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "The Sum of a Range" from Chapter 4', () => {
	describe('Verifying functionality for range()', () => {
		it('Creates an ascending range when argument step is omitted', () => {
			const values = range(1, 5);
			expect(values).to.deep.equal([1, 2, 3, 4, 5]);
		});

		it('Creates a descending range when argument step is negative', () => {
			const values = range(5, 1, -2);
			expect(values).to.deep.equal([5, 3, 1]);
		});
	});

	describe('Verifying functionality for sum()', () => {
		it('Correctly adds all values in provided array', () => {
			const total = sum([1, 2, 3, 4]);
			expect(total).to.equal(10);
		});

		it('Correctly adds all values when provided a generated range', () => {
			const total = sum(range(1, 10));
			expect(total).to.equal(55);
		});
	});
});
