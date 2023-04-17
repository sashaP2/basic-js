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
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] === '--discard-next') {
      if(arr.length > i+1){
        i= i + 1;
      }
    }
    if(arr[i] === '--discard-prev'){
      newArr.pop();
    }
    if(arr[i] === '--double-next'){
      newArr.push(arr[i+1]);
    }
    if(arr[i] === '--double-prev'){
      newArr.push(arr[i-1]);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

module.exports = {
  transform
};
