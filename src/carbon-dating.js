const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
let k = 0.693/HALF_LIFE_PERIOD;
let year = 0;
const activity = parseFloat(sampleActivity);
if (activity <= 0 || activity > 15) {
  return false;
} else if (typeof activity === 'Number') {  
  return year =  Math.ceil(Math.log(MODERN_ACTIVITY/activity)/k);
} else {
  return false;
}
};

