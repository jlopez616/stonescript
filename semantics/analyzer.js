const {
  Arg, Array, Assignment, BinaryExp,
  Conditional, Call, Declaration, ForLoop, FunctionDeclaration, FunctionObject,
  IfStatement, NumericLiteral, Parameter, Postfix, RelExp, ReturnStatement,
  RipAssignment, Func, Return, SquishAssignment, Statement, StringLiteral, UnaryExpression,
  VariableDeclaration, WhileLoop, Literal, intlit, Obj, Break
} = require('../ast');

const { CounterType, WorderType, YesnosType, WhatType, TabletType } = require('./builtins');

const check = require('./check');

Argument.prototype.analyze = (context) => {
  this.type = context.lookupType(this.type);
  this.id = context.lookupValue(this.id); // I think this is right?

};

Array.prototype.analyze = (context) => {
    this.args = context.lookupType(this.args); //tells us the type of the array - idk if this is right :(
};

Assignment.prototype.analyze = (context) => {
  this.source.analyze(context);
  this.target.analyze(context);
};

BinaryExp.prototype.analyze = (context) => {
  this.left.analyze(context);
  this.right.analyze(context);
  check.isInteger(this.left);
  check.isInteger(this.right);
  this.type = CounterType;
};

Exp2_binary.prototype.analyze = (context) => {
  this.left.analyze(context);
  this.right.analyze(context);
  check.expressionHaveTheSameType(this.left, this.right);
  if (/SQUISH/.test(this.op)) {
    check.isInteger(this.left);
    check.isInteger(this.right);
  } else if (/RIP/.test(this.op)) {
    check.isInteger(this.left);
    check.isInteger(this.right);
  }
  this.type = CounterType;
};

Exp3_binary.prototype.analyze = (context) => {
  this.left.analyze(context);
  this.right.analyze(context);
  check.expressionHaveTheSameType(this.left, this.right);
  this.type = YesnosType;
};

Conditional.prototype.analyze = (context) => {
  this.testExp.analyze(context);
  this.consequent.analyze(context);
  if (this.alternate) {
    this.alternate.analyze(context);
  }
  if (this.final) {
    this.final.analyze(context);
  }
};

Call.prototype.analyze = (context) => {
  //is this even needed?
};

Declaration.prototype.analyze = (context) => {
  // TODO
};

ForLoop.prototype.analyze = (context) => {
  // Unsure if correct but I'm trying >.<
  this.testExp.analyze(context);
};

Func.prototype.analyze = (context) => {
  // THIS is the ONE TRUE FUNCTION!
  // Do Later
};

FunctionDeclaration.prototype.analyze = (context) => {
  // Is this needed?
};

FunctionObject.prototype.analyze = (context) => {
  // Is this needed?
};

/* IfStatement.prototype.analyze = (context) => {
  // I have no idea if we actually need this :/
}; */

Literal.prototype.analyze = (context) => {
  if (typeof this.value === 'number') {
    this.type = CounterType;
  } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
    this.type = YesNosType;
  } else if (typeof this.value === 'string') {
    this.type = WorderType;
  }
};

NumericLiteral.prototype.analyze = (context) => {
  // Do.. do we really need this? - we don't
};

Parameter.prototype.analyze = (context) => {
  this.id = context.lookupValue(this.id);

};

Postfix.prototype.analyze = (context) => {
  // Broken alongside unary
};


RelExp.prototype.analyze = (context) => {
  // TODO
};

ReturnStatement.prototype.analyze = (context) => {
  // is this needed?
};

RipAssignment.prototype.analyze = (context) => {
  // Is this needed?
};


Return.prototype.analyze = (context) => {
  // TODO
};

SquishAssignment.prototype.analyze = (context) => {
  // Is this needed?
};

Statement.prototype.analyze = (context) => {
  // TODO
};

UnaryExpression.prototype.analyze = (context) => {
  //broken < is really postfix
  this.type = context.lookupType(this.type);
};

VariableDeclaration.prototype.analyze = (context) => {
  // Not needed?
};

WhileLoop.prototype.analyze = (context) => {
  this.testExp.analyze(context);
  const bodyContext = context.createChildContextForLoop();
  this.body.forEach(line => line.analyze(bodyContext));
};


intlit.prototype.analyze = (context) => {
  // Not needed?
};

Obj.prototype.analyze = (context) => {
  // TODO : Next Patch
};

Break.prototype.analyze = (context) => {
  // TODO
};