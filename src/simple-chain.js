const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
// let arr = [];
const chainMaker = {
  // cons() {
  //   console.log(arr)
  //   console.log(this.arr)
  // },
  arr: [],
  getLength() {
    return chainMaker.arr.length
  },
  addLink(value) {
    chainMaker.arr.push(`( ${value} )`)
  },
  removeLink(position) {
    chainMaker.arr =  chainMaker.arr.splice(position - 1, 1);
  },
  reverseChain() {
    let newArr = [];
    for (let j = chainMaker.arr.length; j >= 0; j--) {
      newArr.push(chainMaker.arr[j]); 
    }
    chainMaker.arr = newArr;
  },
  finishChain() {
    chainMaker.arr.join('~~')
  }
};

module.exports = {
  chainMaker
};
