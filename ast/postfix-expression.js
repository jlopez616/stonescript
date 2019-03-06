module.exports = class Postfix {
  constructor(op, left) {
    Object.assign(this, { op, left });
  }
};
