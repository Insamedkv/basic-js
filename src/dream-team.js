const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let teamName = [];
let wordFromArray;
if (members == null) {
  return false;
}
for (i = 0; i < members.length; i++) {
  if (typeof members[i] == "string") {
    wordFromArray = members[i].trim().toUpperCase();
    teamName.push(wordFromArray[0]);
  }
}
return teamName.sort().join('');
};
