class Argument {
    constructor(expression) {
        Object.assign(this, { expression });
    }
};
class Array {
  constructor(args) {
    Object.assign(this, { args });
  }
};
class Assignment {
  constructor(target, source) {
    Object.assign(this, { target, source });
  }
};
