const fs = require('fs');
const ohm = require('ohm-js');

const {
  Argument, Array, Assignment, BinaryExp, BooleanLiteral, BreakStatement,
  Conditional, Call, Declaration, ForLoop, FunctionDeclaration, FunctionObject,
  IfStatement, NumericLiteral, Parameter, Postfix, Program, ReturnStatement,
  RipAssignment, SquishAssignment, StringLiteral, UnaryExpression,
  VariableDeclaration, WhileLoop } = require.('../ast');

const grammar = ohm.grammar(fs.readFileSync('../syntax/stonescript.ohm', 'utf-8'));

// Ohm turns `x?` into either [x] or [], which we should clean up for our AST.
function arrayToNullable(a) {
  return a.length === 0 ? null : a[0];
}


/* eslint-disable no-unused-vars */
const astGenerator = grammar.createSemantics().addOperation('ast', {
  Program(statements) {
    return new Program(statements.ast());
  },
  ForLoop(_1, setup, _2, textExp, _3, increment, _4, body) { // Will likely need to be changed
    return new ForLoop(setup.ast(), textExp.ast(), increment.ast(), body.ast());
  },
  WhileLoop(_1, _2, testExp, _3, _4, body _5) {
    return new WhileLoop(testExp, body);
  },
  Conditional(_1, _2, testExp, _3, consequent, _4, _5, alternate, final) { // arrayToNullable alternate?
    return new Conditional(testExp.ast(), consequent.ast(), arrayToNullable(alternate.ast(), arrayToNullable(final.ast()));
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
  Declaration(_1, target, _2, source) {
    return new Declaration(target.ast(), source.ast());
  },
  Func(_1, _2, id, params, _3, _4, statements, _5) {
    return new Func(id.ast(), statements.ast(), body.ast());
  },
  BinaryExp(op, left, right) {
    return new BinaryExp(op.ast(), left.ast(), right.ast());
  },
  RelExp(id, relop, primary) {
    return new RelExp(id.ast(), relop.ast(), primary.ast());
  }
  NotExp(_1, right) {
    return new Postfix(right.ast());
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
