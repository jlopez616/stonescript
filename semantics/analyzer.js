// const util = require('util');

const {
  Arg, Array, Assignment, Break, BinaryExp, Conditional, Call, Declaration, TypeDec,
  ForLoop, ForIncrement, Postfix, Program, Func, Literal, WhileLoop, // RelExp, RipAssignment,
  // SquishAssignment, Statement, UnaryExpression, VariableDeclaration
  // Parameter, Return intlit, Obj, Break,
} = require('../ast');

const { CounterType, WorderType, YesnosType /* WhatType TabletType */ } = require('./builtins');
const check = require('./check');
// const Context = require('./context');

Arg.prototype.analyze = function (context) {
  this.type = context.lookup(this.type);
  this.id = context.lookup(this.id); // I think this is right?
};

Array.prototype.analyze = function (context) {
  if (!this === null) {
    const newContext = context.createChildContextForBlock();
    this.args.forEach(line => line.analyze(newContext));
  }
};

Assignment.prototype.analyze = function (context) {
  this.target = context.lookup(this.target);
  // Make sure that this.target is mutable
  // check.isMutable(this.target);
  this.source.analyze(context);
};

// TODO: Implement 'CUT'
BinaryExp.prototype.analyze = function (/* context */) {
  // console.log('RIP', this.op === 'RIP');
  check.expressionsHaveTheSameType(this.left, this.right);
  if (this.op === 'RIP' || this.op === 'SQUISH' || this.op === 'MANY') {
    check.isInteger(this.left);
    check.isInteger(this.right);
    this.type = CounterType;
  } else if (this.op === 'OOGA') {
    check.isBoolean(this.type);
    this.type = YesnosType;
  } else if (this.op === 'NOOGA') {
    check.isBoolean(this.type);
    this.type = YesnosType;
  }
};

Break.prototype.analyze = function (context) {
  check.inLoop(context, 'break');
};

Conditional.prototype.analyze = function (context) {
  this.testExp.analyze(context);
  const consequentContext = context.createChildContextForBlock();
  this.consequent.forEach(line => line.analyze(consequentContext));
  if (this.alternate) {
    const alternateContext = context.createChildContextForBlock();
    this.alternate.forEach(line => line.analyze(alternateContext));
  }
  if (this.final) {
    const finalContext = context.createChildContextForBlock();
    this.final.forEach(line => line.analyze(finalContext));
  }
};

Call.prototype.analyze = function (context) {
  context.lookup(this.id);
};

Declaration.prototype.analyze = function (context) {
  context.add(this);
  // console.log(context);

  check.mutabilityCheck(this.mutability);
  this.typeDec.analyze(context);
  if (this.exp !== 'OOGA' && this.exp !== 'NOOGA') {
    this.exp.analyze(context);
  }


  /*  if (typeof this.value === 'number') {
    this.type = CounterType;
  } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
    this.type = YesnosType;
  } else if (typeof this.value === 'string') {
    this.type = WorderType;
  } */

  // if (this.type) {
  //   this.type = context.lookup(this.type);
  //   // check.isAssignableTo(this.source, this.type); //do in morning?
  // }

  // context.add(this);
};

ForLoop.prototype.analyze = function (context) {
  this.setup.analyze(context);
  this.testExp.analyze(context);
  // check.isInteger(this.setup.exp.value);
  context.add(this.setup.id);
  this.increment.analyze(context);
  const bodyContext = context.createChildContextForLoop();
  this.body.forEach(line => line.analyze(bodyContext));
};

ForIncrement.prototype.analyze = function (context) {
  this.id1 = context.lookup(this.id1);
  this.id2 = context.lookup(this.id2);
  this.intlit.analyze(context);
};

Func.prototype.analyze = function (context) {
  const paramContext = context.createChildContextForBlock();
  if (!this.params === null) {
    this.params.forEach(line => line.analyze(paramContext));
  }

  // const statementContext = context.createChildContextForBlock();
  if (!this.statements === null) {
    this.statements.forEach(line => line.analyze(paramContext));
  }

  // this.returnType.forEach(line => line.analyze(bodyContext));
  /* if (typeof this.value === 'number') {
    this.type = CounterType;
  } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
    this.type = YesnosType;
  } else if (typeof this.value === 'string') {
    this.type = WorderType;
  } else if (typeof this.value === 'undefined') {
    this.type = WhatType;
  } */
};

Literal.prototype.analyze = function (/* context */) {
  check.isMutable(this.type);
  if (typeof this.value === 'number') {
    this.type = CounterType;
  } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
    this.type = YesnosType;
  } else if (typeof this.value === 'string') {
    this.type = WorderType;
  }
};

/* Parameter.prototype.analyze = function (context) {
  this.id = context.lookupValue(this.id);
  this.defaultExpression.analyze(context); // unsure if i need to lookup value or just do this
}; */

Program.prototype.analyze = function (context) {
  this.statements.forEach(s => s.analyze(context));
};

Postfix.prototype.analyze = function (context) {
  this.left.analyze(context);
  // unsure if anything needs to be done with thi
};

TypeDec.prototype.analyze = function (context) {
  if (this.op === 'RIP' | this.op === 'SQUISH' | this.op === 'MANY') {
    check.isInteger(this.left);
    check.isInteger(this.right);
    this.type = CounterType;
  } 
  else if (this.op === 'OOGA') {
    check.isBoolean(this.type);
    this.type = YesnosType;
  } else if (this.op === 'NOOGA') {
    check.isBoolean(this.type);
    this.type = YesnosType;
  } 
  if (!this.array === null) {
    this.array.analyze(context);
  }
};

/* Return.prototype.analyze = function (context) {
  this.value = context.lookupValue(this.value);
}; */

WhileLoop.prototype.analyze = function (context) {
  this.testExp.analyze(context);
  const bodyContext = context.createChildContextForLoop();
  this.body.forEach(line => line.analyze(bodyContext));
};

/* Break.prototype.analyze = function (context) {
  // TODO
}
*/
