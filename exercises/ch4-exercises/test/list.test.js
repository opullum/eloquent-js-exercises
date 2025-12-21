import { arrayToList, listToArray, prepend, nth } from '../solutions/list-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "A List" from Chapter 4', () => {

  it('Verifying function arrayToList transforms array [10, 20] into a nested list', () => {
    const list = arrayToList([10, 20]);
    expect(list).to.deep.equal({ value: 10, rest: { value: 20, rest: null } });
  });

  it('Verifying function listToArray transforms given list back to the original array', () => {
    const array = listToArray(arrayToList([10, 20, 30]));
    expect(array).to.deep.equal([10, 20, 30]);
  });

  it('Verifying function prepend correctly prepends a value to a list', () => {
    const list = prepend(10, prepend(20, null));
    expect(list).to.deep.equal({ value: 10, rest: { value: 20, rest: null } });
  });

  it('Verifying function nth correctly retrieves a value from list and undefined if not found', () => {
    const list = arrayToList([10, 20, 30]);
    expect(nth(list, 1)).to.equal(20);
    expect(nth(list, 3)).to.equal(undefined);
  });
});
