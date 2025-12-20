import { arrayToList, listToArray, prepend, nth } from '../solutions/a-list-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "A List" from Chapter 4', () => {
  it('transforms an array into a nested list structure', () => {
    const list = arrayToList([10, 20]);
    expect(list).to.deep.equal({ value: 10, rest: { value: 20, rest: null } });
  });

  it('transforms a nested list back into an array', () => {
    const array = listToArray({ value: 'a', rest: { value: 'b', rest: null } });
    expect(array).to.deep.equal(['a', 'b']);
  });

  it('prepends a new value to a list', () => {
    const list = prepend(10, prepend(20, null));
    expect(list).to.deep.equal({ value: 10, rest: { value: 20, rest: null } });
  });

  it('retrieves the nth value from the list', () => {
    const list = arrayToList([10, 20, 30]);
    expect(nth(list, 1)).to.equal(20);
    expect(nth(list, 3)).to.equal(undefined);
  });
});
