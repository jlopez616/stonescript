const {
  Arg, Array, Assignment, BinaryExp, Conditional, Call, Declaration, 
  ForLoop, ForIncrement, Parameter, Postfix, Program, RelExp, RipAssignment, Func, Return, 
  SquishAssignment, Statement, UnaryExpression, VariableDeclaration, 
  WhileLoop, Literal, intlit, Obj, Break
} = require('../ast');

const { CounterType, WorderType, YesnosType, WhatType, TabletType } = require('./builtins');

const check = require('./check');

Arg.prototype.analyze = (context) => {
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

Conditional.prototype.analyze = (context) => {
  this.testExp.analyze(context);
  this.consequent.analyze(context);
  check.isBoolean(this.testExp.op);
  if (this.alternate) {
    this.alternate.analyze(context);
  }
  if (this.final) {
    this.final.analyze(context);
  }
};

Call.prototype.analyze = (context) => {
  this.id.analyze(context);
  this.args.analyze(context);
};

Declaration.prototype.analyze = (context) => {
   this.target.analyze(context);
   this.source.analyze(context);
   this.type = context.lookupType(context);
   this.array.analyze(context);
};

ForLoop.prototype.analyze = (context) => {
  this.setup.analyze(context);
  this.testExp.analyze(context);
  check.isInteger(this.setup.source);
  this.increment.analyze(context);
  const bodyContext = context.createChildContextForLoop();
  this.body.forEach(line => line.analyze(bodyContext));
};

ForIncrement.prototype.analyze = (context) => {
  this.id1 = lookupValue(id1);
  this.id2 = lookupValue(id2);
  this.addop.analyze(id1);
  this.intlit.analyze(context);
}

Func.prototype.analyze = (context) => {
  const bodyContext = context.createChildContextForLoop();
  this.params.forEach(line => line.analyze(bodyContext));
  this.statements.forEach(line => line.analyze(bodyContext));
  this.returnType = context.lookupType(this.returnType);
};

Literal.prototype.analyze = (context) => {
  if (typeof this.value === 'number') {
    this.type = CounterType;
  } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
    this.type = YesnosType;
  } else if (typeof this.value === 'string') {
    this.type = WorderType;
  }
};

Parameter.prototype.analyze = (context) => {

  this.id = context.lookupValue(this.id);
  this.defaultExpression.analyze(context) // unsure if i need to lookup value or just do this

};

Program.prototype.analyze = (context) => {
  const newContext = context.createChildContextForBlock();
  console.log(this);
  //console.log(newContext);
  /// console.log(this.statements);
  this.statements.forEach(s => s.analyze(newContext));
};


Postfix.prototype.analyze = (context) => {
  this.left.analyze(context);
  //unsure if anything needs to be done with thi
};

Return.prototype.analyze = (context) => {
  this.value = lookupValue(value);
};

WhileLoop.prototype.analyze = (context) => {
  this.testExp.analyze(context);
  const bodyContext = context.createChildContextForLoop();
  this.body.forEach(line => line.analyze(bodyContext));

};

Break.prototype.analyze = (context) => {
  // TODO
};