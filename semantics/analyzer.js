const {
  Argument, Array, Assignment, Exp1_binary, Exp2_binary, Exp3_binary, BooleanLiteral,
  Conditional, Call, Declaration, ForLoop, FunctionDeclaration, FunctionObject,
  IfStatement, NumericLiteral, Parameter, Postfix, Program, RelExp, ReturnStatement,
  RipAssignment, Func, Return, SquishAssignment, Statement, StringLiteral, UnaryExpression,
  VariableDeclaration, WhileLoop, Literal, intlit, Obj, Exp_or} = require('../ast');

const { CounterType, WorderType, YesnosType, WhatType, TabletType } = require('./builtins');

const check = require('./check');

Array.prototype.analyze = (context) => {
  constructor(args) {
    this.args = context.lookupType(this.args); //tells us the type of the array
  }
  
}