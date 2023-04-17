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
function deleteDigit(n) {
  let arr = n.toString().split('').map(el => Number(el))
  return Math.max(...arr.map((el,i)=>{
  let copyArr = arr.slice()
  copyArr.splice(i,1); 
  return Number( copyArr.join(''))
}
)
)
}


module.exports = {
  deleteDigit
};
