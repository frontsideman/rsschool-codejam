const assert = require('assert');
const sumOfOther = require('./sumOfOther');

describe('sumOfOther', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [-1, 2, 3];
  const arr3 = [0, 2, -3];

  it('equals arr1', () => {
    assert.deepEqual(sumOfOther(arr1), [5, 4, 3]);
  });

  it('equals arr2', () => {
    assert.deepEqual(sumOfOther(arr2), [5, 2, 1]);
  });

  it('equals arr3', () => {
    assert.deepEqual(sumOfOther(arr3), [-1, -3, 2]);
  });
});
