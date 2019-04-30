const util = require('util');

const {
  Arg, Array, Assignment, BinaryExp, Conditional, Call, Declaration,
  ForLoop, ForIncrement, Parameter, Postfix, Program, Func, Return, // RelExp, RipAssignment,
  // SquishAssignment, Statement, UnaryExpression, VariableDeclaration  intlit, Obj, Break,
  WhileLoop, Literal,
} = require('../ast');

const { CounterType, WorderType, YesnosType, WhatType, TabletType } = require('./builtins');

const check = require('./check');

Arg.prototype.analyze = function (context) {
  this.type = context.lookupType(this.type);
  this.id = context.lookupValue(this.id); // I think this is right?
};

Array.prototype.analyze = function (context) {
  this.args = context.lookupType(this.args);
  // tells us the type of the array - idk if this is right :(
};

Assignment.prototype.analyze = function (context) {
  this.source.analyze(context);
};

BinaryExp.prototype.analyze = function (context) {
  if (this.op === 'SQUISH') {
    check.expressionHaveTheSameType(this.left, this.right);
    check.isInteger(this.left);
    check.isInteger(this.right);
    this.type = CounterType;
  } else if (this.op === 'RIP') {
    check.expressionHaveTheSameType(this.left, this.right);
    check.isInteger(this.left);
    check.isInteger(this.right);
  } else if (this.op === 'OOGA') {
    check.expressionHaveTheSameType(this.left, this.right);
    this.type = YesnosType;
  } else if (this.op === 'NOOGA') {
    check.expressionHaveTheSameType(this.left, this.right);
    this.type = YesnosType;
  } else {
    check.expressionsHaveTheSameType(this.left, this.right);
  }
};

Conditional.prototype.analyze = function (context) {
  this.testExp.analyze(context);
  
  check.isBoolean(this.testExp);
  this.consequent.analyze(context);
  if (this.alternate) {
    this.alternate.analyze(context);
  }
  if (this.final) {
    this.final.analyze(context);
  }
};

Call.prototype.analyze = function (context) {
  this.id.analyze(context);
  this.args.analyze(context);
};

Declaration.prototype.analyze = function (context) {
  if (typeof this.value === 'number') {
    this.type = CounterType;
  } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
    this.type = YesnosType;
  } else if (typeof this.value === 'string') {
    this.type = WorderType;
  }
  this.source.analyze(context);

  // if (this.type) {
  //   this.type = context.lookupType(this.type);
  //   // check.isAssignableTo(this.source, this.type); //do in morning?
  // }
  context.add(this);
};

ForLoop.prototype.analyze = function (context) {
  this.setup.analyze(context);
  this.testExp.analyze(context);
  check.isInteger(this.setup.source);
  this.increment.analyze(context);
  const bodyContext = context.createChildContextForLoop();
  //this.body.analyze(context);
};

ForIncrement.prototype.analyze = function (context) {
  this.id1 = context.lookupValue(this.id1);
  this.id2 = context.lookupValue(this.id2);
  this.intlit.analyze(context);
};

Func.prototype.analyze = function (context) {
  const bodyContext = context.createChildContextForLoop();
  this.params.forEach(line => line.analyze(bodyContext));
  this.statements.forEach(line => line.analyze(bodyContext));
  // this.returnType.forEach(line => line.analyze(bodyContext));
  if (typeof this.value === 'number') {
    this.type = CounterType;
  } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
    this.type = YesnosType;
  } else if (typeof this.value === 'string') {
    this.type = WorderType;
  } else if (typeof this.value === 'undefined') {
      this.type = WhatType;
  }
};

Literal.prototype.analyze = function (context) {
  if (typeof this.value === 'number') {
    this.type = CounterType;
  } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
    this.type = YesnosType;
  } else if (typeof this.value === 'string') {
    this.type = WorderType;
  }
};

Parameter.prototype.analyze = function (context) {
  this.id = context.lookupValue(this.id);
  this.defaultExpression.analyze(context); // unsure if i need to lookup value or just do this
};

Program.prototype.analyze = function (context) {
  const newContext = context.createChildContextForBlock();
  this.statements.forEach(s => s.analyze(newContext));
};


Postfix.prototype.analyze = function (context) {
  this.left.analyze(context);
  // unsure if anything needs to be done with thi
};

Return.prototype.analyze = function (context) {
  this.value = context.lookupValue(this.value);
};

WhileLoop.prototype.analyze = function (context) {
  this.testExp.analyze(context);
  const bodyContext = context.createChildContextForLoop();
  this.body.forEach(line => line.analyze(bodyContext));
};

/* Break.prototype.analyze = function (context) {
  // TODO
}
*/
