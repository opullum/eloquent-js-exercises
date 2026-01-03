import { deepEqual } from '../solutions/deepcompare-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Deep Comparison" from Chapter 4', () => {
	it('Identifies the same reference as equal and returns true', () => {
		const obj = { here: { is: 'an' }, object: 2 };
		expect(deepEqual(obj, obj)).to.equal(true);
	});

	it('Detects differences in nested structures', () => {
		const obj = { here: { is: 'an' }, object: 2 };
		expect(deepEqual(obj, { here: 1, object: 2 })).to.equal(false);
	});

	it('Compares separate objects with the same shape and values', () => {
		const obj = { here: { is: 'an' }, object: 2 };
		const copy = { here: { is: 'an' }, object: 2 };
		expect(deepEqual(obj, copy)).to.equal(true);
	});
});
