const fs = require('fs');
const util = require('util');
const ohm = require('ohm-js');

const {
  Argument, Arg, Array, Assignment, BinaryExp, ForIncrement,
  Conditional, Call, Declaration, ForLoop,
  IfStatement, Postfix, Program,
  Func, Return, WhileLoop, Literal, Tablet, Break,
} = require('../ast');

const grammar = ohm.grammar(fs.readFileSync('syntax/stonescript.ohm', 'utf-8'));

// Ohm turns `x?` into either [x] or [], which we should clean up for our AST.
function arrayToNullable(a) {
  return a.length === 0 ? null : a[0];
}


/* eslint-disable no-unused-vars */
const astGenerator = grammar.createSemantics().addOperation('ast', {
  Program(statements) {
    return new Program(statements.ast());
  },
  Statement(value, _1) {
    return value.ast();
  },
  ForLoop(_kw, _lp, setup, _em1, testExp, _em2, increment, _rp, _p, body, _np) {
    return new ForLoop(setup.ast(), testExp.ast(), increment.ast(), body.ast());
  },
  ForIncrement(id1, _is, id2, addop, intlit) {
    return new ForIncrement(id1.ast(), id2.ast(), addop.ast(), intlit.ast());
  },
  WhileLoop(_kw, _lp, testExp, _rp, _p, body, _np) {
    return new WhileLoop(testExp.ast(), body.ast());
  },
  Conditional(_1, _2, testExp, _3, _4, body, _5, _6, _7, consequent, _8, _9, alternate, _10, _11, _12, final, _13) { // arrayToNullable alternate?
    return new Conditional(testExp.ast(), consequent.ast(), arrayToNullable(alternate.ast()), arrayToNullable(final.ast()));
  },
  Assignment(target, _1, source) {
    return new Assignment(target.ast(), source.ast());
  },
  Tablet(id, _1, fields, _2, _3) {
    return null; // TODO: new Tablet(id.ast(), fields.ast());
  },
  Call(id, _1, args, _2) {
    return new Call(id.ast(), args.ast());
  },
  Return(_1, value, _2) {
    return new Return(value.ast());
  },
  Declaration(_1, type, array, target, _2, source) {
    return new Declaration(target.ast(), source.ast(), type.ast(), arrayToNullable(array.ast()));
  },
  Func(_1, _2, params, _3, _4, statements, returnType, _5) {
    return new Func(params.ast(), statements.ast(), returnType.ast());
  },
  Exp_or(op, left, right) {
    return new BinaryExp(op.ast(), left.ast(), right.ast());
  },
  Exp_and(op, left, right) {
    return new BinaryExp(op.ast(), left.ast(), right.ast());
  },
  Exp1_binary(op, left, right) {
    return new BinaryExp(op.ast(), left.ast(), right.ast());
  },
  Exp2_binary(op, left, right) {
    return new BinaryExp(op.ast(), left.ast(), right.ast());
  },
  Exp3_binary(op, left, right) {
    return new BinaryExp(op.ast(), left.ast(), right.ast());
  },
  RelExp(id, relop, primary) {
    return new BinaryExp(relop.ast(), id.ast(), primary.ast());
  },
  Exp4_unary(_1, right) {
    return new Postfix(right.ast());
  },
  Array(_1, args, _2) {
    return new Array(args.ast());
  },
  Arg(type, id) {
    return new Arg(type.ast(), id.ast());
  },
  NonemptyListOf(first, _, rest) {
    return [first.ast(), ...rest.ast()];
  },
  nonemptyListOf(first, _, rest) {
    return [first.ast(), ...rest.ast()];
  },
  EmptyListOf() {
    return [];
  },
  strlit(_1, chars, _6) {
    return new Literal(this.sourceString.slice(1, -1));
  },
  id(_1, _2) {
    return this.sourceString;
  },
  _terminal() {
    return this.sourceString;
  },
  intlit(_1) {
    return new Literal(+this.sourceString);
  },
  Break(_1) {
    return new Break();
  },
});

/* eslint-enable no-unused-vars */

module.exports = (text) => {
  const match = grammar.match(text);
  if (!match.succeeded()) {
    throw new Error(`Syntax Error: ${match.message}`);
  }
  // console.log(util.inspect(astGenerator(match).ast(), { depth: null }));
  return astGenerator(match).ast();
};
