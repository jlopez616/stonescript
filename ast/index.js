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
  constructor(args) {
    Object.assign(this, { args });
  }
}
class Assignment {
  constructor(target, source) {
    Object.assign(this, { target, source });
  }
}
class BinaryExp {
  constructor(left, op, right) {
    Object.assign(this, { left, op, right });
  }
}
class Conditional {
  constructor(testExp, consequent, alternate, final) {
    Object.assign(this, { testExp, consequent, alternate, final });
  }
}
class Call {
  constructor(id, args) {
    Object.assign(this, { id, args });
  }
}
class Declaration {
  constructor(typeDec, id, exp) {
    Object.assign(this, { typeDec, id, exp });
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
  constructor(id) {
    Object.assign(this, { id });
  }
}

class Return {
  constructor(value) {
    this.value = value;
  }
}

class TypeDec {
  constructor(mutability, type, array) {
    Object.assign(this, { mutability, type, array });
  }
}

class Break {
  constructor(value) {
    Object.assign(this);
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
  TypeDec,
  WhileLoop,
  Literal,
  // Tablet, TO DO BY RELEASE
  // EmptyArray,
};
