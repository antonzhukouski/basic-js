const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// function dateSample(/* sampleActivity */) {
  function dateSample(sampleActivity) {
    if (typeof sampleActivity == 'string') {
      let numActiv =  parseFloat(sampleActivity);
      if (numActiv > 0 && numActiv <= 15) {
        return (Math.ceil(Math.log(15/sampleActivity)/(0.693/HALF_LIFE_PERIOD)))
      }
    }
    return false;
    // console.log(sampleActivity)
    
  //   t = (ln(N0 / N)) / k
  //   N0 = 15;
  //   n = sampleActivity
  // throw new NotImplementedError('Not implemented');

  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
