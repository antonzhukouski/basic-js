const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(/* n */) {
function deleteDigit(n) {
  debugger
  const str = String(n);
  let max = Number(str.slice(1));
  let strBefore, strAfter;
  for (let i = 1; i < str.length; i++) {
    strBefore = str.slice(0, i);
    strAfter = str.slice(i + 1);
    let result = Number (strBefore + strAfter);
    if (result > max) max = result;
  }
  return max;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
