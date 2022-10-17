const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) return false;
  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) != 'string') continue
    let mem = members[i].trim();
    arr.push(mem[0]);
  }
  return arr.map(el => el.toUpperCase()).sort().join('')
  
// function createDreamTeam(/* members */) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
