class Argument {
    constructor(expression) {
        Object.assign(this, { expression });
    }
};
class Array {
  constructor(args) {
    Object.assign(this, { args });
  }
};
class Assignment {
  constructor(target, source) {
    Object.assign(this, { target, source });
  }
};
class BinaryExp {
  constructor(op, left, right) {
    Object.assign(this, { op, left, right });
  }
};
class BooleanLiteral {
  constructor(value) {
      this.value = value;
  }
};
class BreakStatement {
  constructor() { // eslint-disable-line
    // Intentionally empty
  }
};
class Call {
  constructor(id, args) {
    Object.assign(this, { id, args });
  }
};
class WhileLoop {
  constructor(testExp, consequent, alternate) {
    Object.assign(this, { testExp, consequent, alternate });
  }
};
class Declaration {
  constructor(id, value) {
    Object.assign(this, { id, value });
  }
};
class ForLoop {
  constructor(setup, textExp, increment, body) {
    Object.assign(this, { setup, textExp, increment, body });
  }
};
class ForStatement {
  constructor() {
      // todo
  }
};
class FunctionDeclaration {
  constructor(id, params, body) {
      this.id = id;
      this.function = new FunctionObject(id, params, body);
  }
};
class FunctionObject {
  constructor(id, params, body) {
    Object.assign(this, { id, params, body });
  }
};
class IfStatement {
  constructor(cases, alternate) {
    Object.assign(this, { cases, alternate });
  }
};
class NumericLiteral {
  constructor(value) {
    this.value = value;
  }
};
class Parameter {
  constructor(id, defaultExpression) {
      Object.assign(this, { id, defaultExpression });
  }
};
class Postfix {
  constructor(op, left) {
    Object.assign(this, { op, left });
  }
};
class Program {
  constructor(stmts) {
    this.stmts = stmts;
  }
};
class ReturnStatement {
  constructor(value) {
    this.value = value;
  }
};
class RipAssignment {
  constructor(id) {
    this.id = id;
  }
};
class SquishAssignment {
  constructor(id) {
    this.id = id;
  }
};
class StringLiteral {
  constructor(value) {
    this.value = value;
  }
};
class UnaryExpression {
  constructor(op, operand) {
      Object.assign(this, { op, operand });
  }
};
class VariableDeclaration {
  constructor(id, exp) {
    Object.assign(this, { id, exp });
  }
};
class WhileLoop {
  constructor(testExp, body) {
    Object.assign(this, { testExp, body });
  }
};