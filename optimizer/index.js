/* class Argument {
  constructor(expression) {
    Object.assign(this, { expression });
  }
} */
class Arg {
    constructor(type, id) {
      Object.assign(this, { type, id });
    }
  }
  class Array {
    // remove constructors, and add optimize function; check parse to see what we have
    // constructor(args) {
    //   Object.assign(this, { args });
    // }
    optimize() {
      this.size = this.size.optimize();
      this.full = this.fill.optimize();
      return this;
    }
  }
  class Assignment {
    // constructor(target, source) {
    //   Object.assign(this, { target, source });
    // }
    optimize() {
      this.target = this.target.optimize();
      this.source = this.source.optimize();
      if (this.target === this.source) {
        return null;
      }
      return this;
    }
  }
  class BinaryExp {
    // constructor(left, op, right) {
    //   Object.assign(this, { left, op, right });
    // }
    optimize() {
      this.left = this.left.optimize();
      this.right = this.right.optimize();
      if (op === '+' && this.left instanceof Literal && this.left.value === 0) {
        return this.left;
      }
    }
  }
  class Conditional {
    constructor(testExp, consequent, alternate, final) {
      Object.assign(this, { testExp, consequent, alternate, final });
    }
  }
  class Call {
    // constructor(id, args) {
    //   Object.assign(this, { id, args });
    // }
    optimize () {
      return this;
    }
  }
  class Declaration {
    constructor(target, source, type, array) {
      Object.assign(this, { target, source, type, array });
    }
  }
  class ForLoop {
    constructor(setup, testExp, increment, body) {
      Object.assign(this, { setup, testExp, increment, body });
    }
  }
  class ForIncrement {
    constructor(id1, id2, addop, intlit) {
      Object.assign(this, { id1, id2, addop, intlit });
    }
  }
  class Func {
    constructor(params, statements, returnType) {
      Object.assign(this, { params, statements, returnType });
    }
  }
  class Literal {
    constructor(value) {
      Object.assign(this, { value });
    }
  }
  /* class IfStatement {
    constructor(cases, alternate) {
      Object.assign(this, { cases, alternate });
    }
  } */
  /* class NumericLiteral {
    constructor(value) {
      this.value = value;
    }
  } */
  /* class Tablet {
    constructor(id, fields) {
      Object.assign(this, { id, fields }); //To Do by release
    }
  } */
  class Parameter {
    constructor(id, defaultExpression) {
      Object.assign(this, { id, defaultExpression });
    }
  }
  class Postfix {
    constructor(op, left) {
      Object.assign(this, { op, left });
    }
  }
  class Program {
    constructor(statements) {
      this.statements = statements;
    }
  }
  class PrimitiveType {
    constructor(name) {
      Object.assign(this, { name });
    }
  }
  
  class Return {
    // constructor(value) {
    //   this.value = value;
    // }
    optimize () {
      return this;
    }
  }
  class Break {
    optimize () {
      return this;
    }
  }
  /* class RipAssignment {
    constructor(id) {
      this.id = id;
    }
  } */
  /* class Statement {
    constructor(val) {
      this.val = val;
    }
  } */
  /* class SquishAssignment {
    constructor(id) {
      Object.assign(this, { id });
    }
  } */
  class WhileLoop {
    constructor(testExp, body) {
      Object.assign(this, { testExp, body });
    }
  }
  /* class EmptyArray {
    constructor(_1, _2) {
    }
  } */
  
  module.exports = {
    // Argument,
    Arg,
    Array,
    Assignment,
    BinaryExp,
    Conditional,
    Call,
    Declaration,
    ForLoop,
    ForIncrement,
    Func,
    Break,
    // IfStatement,
    // NumericLiteral,
    Parameter,
    Postfix,
    Program,
    PrimitiveType,
    // Rip Assignment
    Return,
    // SquishAssignment
    // Statement,
    WhileLoop,
    Literal,
    // Tablet, TO DO BY RELEASE
    // EmptyArray,
  };
  