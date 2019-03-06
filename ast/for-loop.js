module.exports = class ForLoop {
  constructor(setup, textExp, increment, body) {
    Object.assign(this, { setup, textExp, increment, body });
  }
};
