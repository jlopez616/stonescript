const {
  Argument, Array, Assignment, Exp1_binary, Exp2_binary, Exp3_binary, BooleanLiteral,
  Conditional, Call, Declaration, ForLoop, FunctionDeclaration, FunctionObject,
  IfStatement, NumericLiteral, Parameter, Postfix, Program, RelExp, ReturnStatement,
  RipAssignment, Func, Return, SquishAssignment, Statement, StringLiteral, UnaryExpression,
  VariableDeclaration, WhileLoop, Literal, intlit, Obj, Exp_or, Break} = require('../ast');

const { CounterType, WorderType, YesnosType, WhatType, TabletType } = require('./builtins');

const check = require('./check');

Argument.prototype.analyze = (context) => {

};

Array.prototype.analyze = (context) => {
    this.args = context.lookupType(this.args); //tells us the type of the array
};

Assignment.prototype.analyze = (context) => {
  // TODO
};

Exp1_binary.prototype.analyze = (context) => {
  // TODO
};

Exp2_binary.prototype.analyze = (context) => {
  // TODO
};

Exp3_binary.prototype.analyze = (context) => {
  // TODO
};

BooleanLiteral.prototype.analyze = (context) => {
  // TODO
};

Conditional.prototype.analyze = (context) => {
  // TODO
};

BooleanLiteral.prototype.analyze = (context) => {
  // TODO
};

Call.prototype.analyze = (context) => {
  // TODO
};

Declaration.prototype.analyze = (context) => {
  // TODO
};

ForLoop.prototype.analyze = (context) => {
  // TODO
};

FunctionDeclaration.prototype.analyze = (context) => {
  // TODO
};

FunctionObject.prototype.analyze = (context) => {
  // TODO
};

IfStatement.prototype.analyze = (context) => {
  // TODO
};

NumericLiteral.prototype.analyze = (context) => {
  // TODO
};

Parameter.prototype.analyze = (context) => {
  // TODO
};

Postfix.prototype.analyze = (context) => {
  // TODO
};

Program.prototype.analyze = (context) => {
  // TODO
};

RelExp.prototype.analyze = (context) => {
  // TODO
};

ReturnStatement.prototype.analyze = (context) => {
  // TODO
};

RipAssignment.prototype.analyze = (context) => {
  // TODO
};

Func.prototype.analyze = (context) => {
  // TODO
};

Return.prototype.analyze = (context) => {
  // TODO
};

SquishAssignment.prototype.analyze = (context) => {
  // TODO
};

Statement.prototype.analyze = (context) => {
  // TODO
};

StringLiteral.prototype.analyze = (context) => {
  // TODO
};

UnaryExpression.prototype.analyze = (context) => {
  // TODO
};

VariableDeclaration.prototype.analyze = (context) => {
  // TODO
};

WhileLoop.prototype.analyze = (context) => {
  // TODO
};

Literal.prototype.analyze = (context) => {
  // TODO
};

intlit.prototype.analyze = (context) => {
  // TODO
};

Obj.prototype.analyze = (context) => {
  // TODO
};

Exp_or.prototype.analyze = (context) => {
  // TODO
};

Break.prototype.analyze = (context) => {
  // TODO
};