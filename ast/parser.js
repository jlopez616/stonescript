const fs = require('fs');
const ohm = require('ohm-js');
const Program = require('../ast/program.js');
const VariableDeclaration = require('../ast/variable-declaration.js');
const Assignment = require('../ast/assignment.js');
const Squish = require('../ast/squish-assignment.js');
const Rip = require('../ast/rip-assignment.js');

const grammar = ohm.grammar(fs.readFileSync('./syntax/stonescript.ohm', 'utf-8'));

/* eslint-disable no-unused-vars */
const astGenerator = grammar.createSemantics().addOperation('ast', {
  Program(statements) { return new Program(statements.ast()); },
  ForLoop(_1, setup, _2, text_exp, _3, increment, _4, body) { return new ForLoop(setup.ast(), test_exp.ast(), increment.ast(), body.ast())},   //Will likely need to be changed
  WhileLoop(_1, test_exp, _2, body) { return new WhileLoop(test_exp, body)},
  Conditional(_1, test_exp, _2, consequent, _3, alternate?) { return new Conditional(test_exp.ast(), consequent.ast(), arrayToNullable(alternate.ast()))},
  Assignment(target, _1, source) { return new Assignment(target.ast(), source.ast())},
  Call(id, _1, args, _2) { return new Call(id.ast(), source.ast())},
  Return(_1, target) { return new Return(target,ast())},
  Declaration(target, _1, source) { return new Declaration(target.ast(), source.ast())},
  Func(_1, id, _2, body, _3) { return new Func(id.ast(), body.ast())},
  BinaryExp(op, left, right) { return  new Binary(op.ast(), left.ast(), right.ast())},
  Postfix(op, left) { return new Postfix(op.ast(), left.ast())},
  Parenthesis(_1, exp, _2) { return new Parenthesis(exp.ast())},
  Array(_1, args, _2) { return new Array(args.ast())}
});
/* eslint-enable no-unused-vars */

module.exports = (text) => {
  const match = grammar.match(text);
  if (!match.succeeded()) {
    return throw new Error(`Syntax Error: ${match.message}`);
  }
  return astGenerator(match).ast();
};
