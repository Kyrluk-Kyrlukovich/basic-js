const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain = [
      ...this.chain.slice(0, position - 1),
      ...this.chain.slice(position),
    ];
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
