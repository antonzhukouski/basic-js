const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// function getDNSStats(/* domains */) {
function getDNSStats(domains) {
  // let arr = [];
  debugger
  let obj = {};
  let newStr;
  let arr = [];
  for (let i = 0; i < domains.length; i++) {
    
    let arrOfParts = domains[i].split('.');
    let el;
    for (let j = arrOfParts.length - 1; j >= 0; j--) {
      arrOfParts[j] = '.' + arrOfParts[j];
      if (j === arrOfParts.length - 1) {
        el = arrOfParts[j];
      } else el = el + arrOfParts[j];
      !obj[el] ? obj[el] = 1 : obj[el] += 1
    };
    
  }
  console.log(obj)
    return obj
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
