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
class Exp_or {
  constructor(op, left, right) {
    Object.assign(this, { op, left, right });
  }
};
class Exp1_binary {
  constructor(op, left, right) {
    Object.assign(this, { op, left, right });
  }
};
class Exp2_binary {
  constructor(op, left, right) {
    Object.assign(this, { op, left, right });
  }
};
class Exp3_binary {
  constructor(op, left, right) {
    Object.assign(this, { op, left, right });
  }
};
class BooleanLiteral {
  constructor(value) {
      this.value = value;
  }
};

class Conditional {
  constructor(testExp, consequent, alternate, final){
    Object.assign(this, {testExp, consequent, alternate, final})
  }
}
class Call {
  constructor(id, args) {
    Object.assign(this, { id, args });
  }
};

class Declaration {
  constructor(target, source) {
    Object.assign(this, { target, source });
  }
};
class ForLoop {
  constructor(setup, textExp, increment, body) {
    Object.assign(this, { setup, textExp, increment, body });
  }
};

class Func {
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
class Obj {
  constructor(field) {
    this.field = field;
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
  constructor(statements) {
    this.statements = statements;
  }
};
class Literal {
  constructor(value) {
    Object.assign(this, { value });
  }
};
class Return {
  constructor(value) {
    this.value = value;
  }
};
class RelExp {
  constructor(id, relop, primary) {
    Object.assign(this, { id, relop, primary })
  }
}
class RipAssignment {
  constructor(id) {
    this.id = id;
  }
};
class Statement {
  constructor(val) {
    this.val = val;
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

module.exports = {
  Argument, Array, Assignment, Exp1_binary, Exp2_binary, Exp3_binary, BooleanLiteral,
  Conditional, Call, Declaration, ForLoop, Func,
  IfStatement, NumericLiteral, Parameter, Postfix, Program, Return,
  RipAssignment, Statement, SquishAssignment, StringLiteral, UnaryExpression,
  VariableDeclaration, WhileLoop, Literal, Obj, RelExp, Exp_or
}
