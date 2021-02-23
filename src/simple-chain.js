const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],

  getLength() {
    return Number(this.chainArray.length);
  },
  addLink(value) {
    this.chainArray.push(`( ${value} )`) 
    return this;
  },
  removeLink(position) {
  if (position >= 1 && position <= this.chainArray.length){
      this.chainArray.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.chainArray = [];
      throw new Error()
    }
  },
  reverseChain() {
    this.chainArray.reverse();
    return chainMaker;
  },
  finishChain() {
    let result = this.chainArray.join('~~');
    this.chainArray= [];
    return result;
  }
};


module.exports = chainMaker;
