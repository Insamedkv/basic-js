const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let result = ''
repeatTimes = options.repeatTimes !== undefined ? Number(options.repeatTimes) : 1;
separator = options.separator !== undefined ? String(options.separator) :'+';
addition = options.addition !== undefined ? String(options.addition) : '';
additionRepeatTimes = options.additionRepeatTimes !== undefined ? Number(options.additionRepeatTimes) : 1;
additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';
  for (let i = 1; i <= repeatTimes; i++) {
    result += str;
    for (let j = 1; j <= additionRepeatTimes; j++) {
      result += addition
        if(j < additionRepeatTimes) {
          result += additionSeparator;
        }  
      }
    if(i < repeatTimes) {
      result += separator;
    }  
  }
return result
}
  
