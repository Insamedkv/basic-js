const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
if (Array.isArray(arr) == false) {
  throw new Error;
} 
if(arr.length == 0){
  return arr;
}
let finalArray = [];
 for (let i = 0; i < arr.length; i++) {
   switch (arr[i]) {
     case '--discard-next':
       i++;
       break;
     case '--discard-prev':
       if(arr[i-2] !== '--discard-next'){
         finalArray.pop();
       }
       break;
     case '--double-next':
       if(arr[i+1] !== undefined){
         finalArray.push(arr[i+1]);
       }
       break;
     case '--double-prev':
       if(arr[i-1] !== undefined && arr[i-2] !== '--discard-next'){
        finalArray.push(arr[i-1]);
       }
       break;
     default:
      finalArray.push(arr[i]);
       break;
     }
   }
   return finalArray;
}
