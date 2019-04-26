class Argument {
  constructor(expression) {
    Object.assign(this, { expression });
  }
}
class Arg { //what is this????
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
  constructor(op, left, right) {
    Object.assign(this, { op, left, right });
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
    Object.assign(this, { params, statements, returnType});
  }
}
class IfStatement {
  constructor(cases, alternate) {
    Object.assign(this, { cases, alternate });
  }
}
class NumericLiteral {
  constructor(value) {
    this.value = value;
  }
}
class Tablet {
  constructor(id, fields) {
    Object.assign(this, { id, fields });
  }
}
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
class Literal {
  constructor(value) {
    Object.assign(this, { value });
  }
}
class Return {
  constructor(value) {
    this.value = value;
  }
}
class Break {
}
class RipAssignment {
  constructor(id) {
    this.id = id;
  }
}
class Statement {
  constructor(val) {
    this.val = val;
  }
}
class SquishAssignment {
  constructor(id) {
    this.id = id;
  }
}
class UnaryExpression {
  constructor(op, operand) {
    Object.assign(this, { op, operand });
  }
}
class VariableDeclaration {
  constructor(id, exp) {
    Object.assign(this, { id, exp });
  }
}
class WhileLoop {
  constructor(testExp, body) {
    Object.assign(this, { testExp, body });
  }
}

module.exports = {
  Argument,
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
  IfStatement,
  NumericLiteral,
  Parameter,
  Postfix,
  Program,
  PrimitiveType,
  Return,
  RipAssignment,
  Statement,
  SquishAssignment,
  UnaryExpression,
  VariableDeclaration,
  WhileLoop,
  Literal,
  Tablet,
};
