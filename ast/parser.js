const fs = require('fs');
const ohm = require('ohm-js');
const Program = require('../ast/program.js');
const ForLoop = require('../ast/for-loop.js');
const Conditional = require('../ast/conditional');
const WhileLoop = require('../ast/while-loop.js');
const Assignment = require('../ast/assignment.js');
const Call = require('../ast/call-statement.js');
const Return = require('../ast/return-statement.js');
const Declaration = require('../ast/declaration.js');
const Func = require('../ast/function-object');
const BinaryExp = require('../ast/binary-expression');
const Postfix = require('../ast/postfix-expression');
const Array = require('../ast/array');
const Paren = require('../ast/paren');

const grammar = ohm.grammar(fs.readFileSync('../syntax/stonescript.ohm', 'utf-8'));

/* eslint-disable no-unused-vars */
const astGenerator = grammar.createSemantics().addOperation('ast', {
  Program(statements) {
    return new Program(statements.ast());
  },
  ForLoop(_1, setup, _2, textExp, _3, increment, _4, body) { // Will likely need to be changed
    return new ForLoop(setup.ast(), textExp.ast(), increment.ast(), body.ast());
  },
  WhileLoop(_1, testExp, _2, body) {
    return new WhileLoop(testExp, body);
  },
  Conditional(_1, testExp, _2, consequent, _3, alternate) { // arrayToNullable alternate?
    return new Conditional(testExp.ast(), consequent.ast(), alternate.ast());
  },
  Assignment(target, _1, source) {
    return new Assignment(target.ast(), source.ast());
  },
  Call(id, _1, args, _2) {
    return new Call(id.ast(), args.ast());
  },
  Return(_1, value) {
    return new Return(value.ast());
  },
  Declaration(target, _1, source) {
    return new Declaration(target.ast(), source.ast());
  },
  Func(_1, id, params, _2, body, _3) {
    return new Func(id.ast(), params.ast(), body.ast());
  },
  BinaryExp(op, left, right) {
    return new BinaryExp(op.ast(), left.ast(), right.ast());
  },
  Postfix(op, left) {
    return new Postfix(op.ast(), left.ast());
  },
  Array(_1, args, _2) {
    return new Array(args.ast());
  },
  Paren(_1, exp, _2) {
    return new Paren(exp.ast());
  },
});
/* eslint-enable no-unused-vars */

module.exports = (text) => {
  const match = grammar.match(text);
  if (!match.succeeded()) {
    throw new Error(`Syntax Error: ${match.message}`);
  }
  return astGenerator(match).ast();
};
