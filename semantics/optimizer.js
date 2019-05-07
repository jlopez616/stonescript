// const util = require('util');

const {
    Arg, Array, Assignment, BinaryExp, Conditional, Call, Declaration, TypeDec,
    ForLoop, ForIncrement, Postfix, Program, Func, Literal, WhileLoop, Break,// RelExp, RipAssignment,
    // SquishAssignment, Statement, UnaryExpression, VariableDeclaration
    // Parameter, Return intlit, Obj,
  } = require('../ast');
  
  function isZero(e) {
    return e instanceof Literal && e.value === 0;
  };
  
  function isOne(e) {
    return e instanceof Literal && e.value === 1;
  };

  // TODO
  Arg.prototype.optimize = function (context) {
    this.type = context.lookup(this.type);
    this.id = context.lookupValue(this.id); 
  };
  
  // TODO
  Array.prototype.optimze = function (context) {
    this.args = context.lookup(this.args);
  };
  
  Assignment.prototype.optimize = function () {
    this.target = this.target.optimize();
    this.source = this.source.optimize();
    if (this.target === this.source) {
      return null;
    }
    return this;
  };
  
  BinaryExp.prototype.optimize = function () {
    this.left = this.left.optimize();
    this.right = this.right.optimize();
    if (this.op === 'SQUISH' && isZero(this.right)) return this.left;
    if (this.op === 'SQUISH' && isZero(this.left)) return this.right;
    if (this.op === 'MANY' && isZero(this.right)) return new Literal(0);
    if (this.op === 'MANY' && isZero(this.left)) return new Literal(0);
    if (this.op === 'MANY' && isOne(this.right)) return this.left;
    if (this.op === 'MANY' && isOne(this.left)) return this.right;
    if (bothLiterals(this)) {
        const [x, y] = [this.left.value, this.right.value];
        if (this.op === 'SQUISH') return new Literal(x + y);
        if (this.op === 'MANY') return new Literal(x * y);
        if (this.op === 'CUT') return new Literal(x / y);
    }
    return this;
  };
  
  Conditional.prototype.optimize = function () {
    this.testExp = this.testExp.optimize();
    this.consequent = this.consequent.optimize();
    this.alternate = this.alternate.optimize();
    if (isZero(this.testExp)) {
      return this.alternate;
    }
    return this;
  };
  
  Call.prototype.optimize = function () {
    this.args = this.args.map(a => a.optimize());
    this.id = this.id.optimize();
    return this;
  };
  
  // TODO
  Declaration.prototype.optimize = function () {
    this.typeDec.analyze(context);
    this.id = context.lookupValue(this.id);
    this.exp.analyze(context);
    if (typeof this.value === 'number') {
      this.type = CounterType;
    } else if (this.value === 'OOGA' || this.value === 'NOOGA') {
      this.type = YesnosType;
    } else if (typeof this.value === 'string') {
      this.type = WorderType;
    }
    this.source.analyze(context);
  
    // if (this.type) {
    //   this.type = context.lookup(this.type);
    //   // check.isAssignableTo(this.source, this.type); //do in morning?
    // }
    
    //context.add(this);
  };
  
  ForLoop.prototype.optimize = function () {
    this.setup = this.setup.optimize();
    this.testExp = this.testExp.optimize();
    this.increment = this.increment.optimize();
    this.body = this.body.optimize();
    return this;
  };
  
  ForIncrement.prototype.optimize = function () {
    this.id1 = this.id1.optimize();
    this.id2 = this.id2.optimize();
    this.intlit = this.intlit.optimize();
    return this; 
  };
  
  // TODO
  Func.prototype.optimize = function () {
    const bodyContext = context.createChildContextForBlock();
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
  
  Literal.prototype.optimize = function () {
    return this;
  };


// TODO
Program.prototype.optimize = function () {
  const newContext = context.createChildContextForBlock();
  this.statements.forEach(s => s.analyze(newContext));
};

// TODO
TypeDec.prototype.optimize = function () {
  check.mutabilityCheck(this.mutability);
  this.type.analyze(context);
  this.array.analyze(context);
};

Return.prototype.optimize = function () {
  return this;
};

WhileLoop.prototype.optimize = function () {
  this.test = this.test.optimize();
  this.body = this.body.optimize();
  return this;
};

Break.prototype.optimize = function () {
  return this;
};
