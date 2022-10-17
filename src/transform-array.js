const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

//  --discard-next excludes the next element of the array from the transformed array.
//  --discard-prev excludes the previous element of the array from the transformed array.
//  --double-next duplicates the next element of the array in the transformed array.
//  --double-prev duplicates the previous element of the array in the transformed array.
//  For example:
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  // debugger
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] === undefined) continue
    if (arr[i] === '--discard-next') {
      // newArr.push(arr[i])
      i += 1;
      continue
    }
    if (arr[i] === '--discard-prev') {
      if (arr[i-2] === '--discard-next') {
        continue;
      }
      // if (arr[i-2] === '--double-next') {

      // }
      newArr = newArr.slice(0, -1);
      // newArr.push(arr[i]);
      continue;
    }
    if (arr[i] === '--double-next') {
      // newArr.push(arr[i]);
      if (arr[i+1]) {
        newArr.push(arr[i + 1], arr[i + 1]);
      }
      
      i += 1;
      continue
    }
    if (arr[i] === '--double-prev') {
      if (newArr[newArr.length-1] === undefined) {
        newArr = newArr.slice(0, newArr[newArr.length-1]);
        // newArr.push(true);
        continue;
      }
      if (arr[i-2] === '--discard-next') {
        continue;
      }
      if (arr[i-2] === '--double-prev') {
        newArr.push(arr[i-1]);
        continue;
      }
      newArr.push(newArr[newArr.length - 1]);
      continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
// function transform(/* arr */) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
