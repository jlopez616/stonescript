const {
  Arg, Array, Assignment, BinaryExp, Conditional, Call, Declaration, 
  ForLoop, ForIncrement, Parameter, Postfix, RelExp, RipAssignment, Func, Return, 
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
  if (/SQUISH/.test(this.op)) {
    check.expressionHaveTheSameType(this.left, this.right);
    check.isInteger(this.left);
    check.isInteger(this.right);
    this.type = CounterType;
  } else if (/RIP/.test(this.op)) {
    check.expressionHaveTheSameType(this.left, this.right);
    check.isInteger(this.left);
    check.isInteger(this.right);
  } else if (/OOGA/.test(this.op)) {
    check.expressionHaveTheSameType(this.left, this.right);
    this.type = YesnosType;
  } else if (/NOOGA/.test(this.op)) {
    check.expressionHaveTheSameType(this.left, this.right);
    this.type = YesnosType;
  } else {
    check.expressionsHaveTheSameType(this.left, this.right);
  }
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
  // Unsure if correct but I'm trying >.<
  this.testExp.analyze(context);
};

ForIncrement.prototype.analyze = (context) => {
  //to do
}

Func.prototype.analyze = (context) => {
  // THIS is the ONE TRUE FUNCTION!
  // Do Later
};

Literal.prototype.analyze = (context) => {
  if (typeof this.value === 'number') {
    this.type = CounterType;
  } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
    this.type = YesNosType;
  } else if (typeof this.value === 'string') {
    this.type = WorderType;
  }
};

Parameter.prototype.analyze = (context) => {
  this.id = context.lookupValue(this.id);
  this.defaultExpression.analyze(context) // unsure if i need to lookup value or just do this

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