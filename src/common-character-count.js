const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount(/* s1, s2 */) {
function getCommonCharacterCount(s1, s2) {
  debugger
  let sum = 0;
  const objS1 = {};
  const objS2 = {};
  function AddToObj (arr, obj) {
    for (let i = 0; i < arr.length; i ++) {
      if (obj[arr[i]]) {
        obj[arr[i]] += 1;
      } else obj[arr[i]] = 1;
    }
  }
  AddToObj(s1, objS1);
  AddToObj(s2, objS2);

  // for (let i = 0; i < s1.length; i++) {
  //   for (let j = 0; j < s2.length; j++) {
  //     if (s1[i] == s2[j]) sum += 1;
  //   }
  // }
  const k1 = Object.keys(objS1);
  const k2 = Object.keys(objS2);

  for (let i = 0; i < k1.length; i++) {
    if (k1[i] in objS2) {
      if (objS1[k1[i]] > objS2[k1[i]]) {
        sum += objS2[k1[i]]
      } else sum += objS1[k1[i]];
    }
  }
  return sum;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
