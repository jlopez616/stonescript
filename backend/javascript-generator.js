/*
 * Translation to JavaScript
 *
 * Requiring this module adds a gen() method to each of the AST classes, except
 * for types, and fields, which don’t figure into code generation. It exports a
 * function that generates a complete, pretty-printed JavaScript program for a
 * Tiger expression, bundling the translation of the Tiger standard library with
 * the expression's translation.
 *
 * Each gen() method returns a fragment of JavaScript.
 *
 *   const generate = require('./backend/javascript-generator');
 *   generate(tigerExpression);
 */

const prettyJs = require('pretty-js');

const {
  Array, Assignment, BinaryExp, Binding, Break, Call, Declaration, ExpSeq, ForExp, Func, Program,
  IdExp, IfExp, LetExp, Literal, MemberExp, NegationExp, Nil, Param, RecordExp,
  SubscriptedExp, TypeDec, Variable, WhileLoop,
} = require('../ast');

const { CounterType, YesnosType, WorderType} = require('../semantics/builtins');

const Context = require('../semantics/context');
// const { StringType } = require('../semantics/builtins');

// TO Do for Kevin (I commented this out so the linter doesn't give me trouble):

function makeOp(op) {
  return { 'MANY': '*',
          'SQUISH': '+',
          'RIP': '-',
          'AND': '&&', 'OR': '||', 'NOT IS': '!=', 'IS IS': '==' }[op] || op;
} // note that the use of == and != is intended because cavemen didn't care about exact matches

function rockType(op) {
  return (op === 'BEDROCK') ? 'const' : 'let';
}
// javaScriptId(e) takes any Tiger object with an id property, such as a Variable,
// Param, or Func, and produces a JavaScript name by appending a unique identifying
// suffix, such as '_1' or '_503'. It uses a cache so it can return the same exact
// string each time it is called with a particular entity.


let libFuncs = new Map();
libFuncs.set('SPEAK', 'console.log');
// I don't understand this tiger stuff so I made my own :) - John
function getLibraryFunction(name) {
  const entity = Context.INITIAL.locals.get(name);
  return `${libFuncs.get(entity.id)}`;

}


module.exports = function (exp) {
  const program = `${exp.gen()}`;
  return prettyJs(program, { indent: '  ' });
};

/* ArrayExp.prototype.gen = function () {
  return `Array(${this.size.gen()}).fill(${this.fill.gen()})`;
};

Assignment.prototype.gen = function () {
  return `${this.target.gen()} = ${this.source.gen()}`;
};
*/

/*

Binding.prototype.gen = function () {
  return `${this.id} : ${this.value.gen()}`;
};

Break.prototype.gen = function () {
  return 'break';
};
*/

Array.prototype.gen = function() {
  console.log(this);
  return `[${this.args.forEach(x => {x.gen()})}]`;
};

Break.prototype.gen = function() {
  return `break`;
};

BinaryExp.prototype.gen = function () {
  console.log(this);
  return `${this.left.gen()} ${makeOp(this.op)} ${this.right.gen()}`;
};

Call.prototype.gen = function () {
  if (Context.INITIAL.locals.has(this.id)) {
    this.id = getLibraryFunction(this.id);
    // USE WITH ABSOLUTE CAUTION: MUST DOCUMENT THAT THE CHILDREN OF ALL BUILT IN FUNCTIONS
    // RETURN THE TYPE OF THEIR PARENTS
    this.args.forEach(x => {x.type = this.type});
  };

  return `${this.id}(${this.args.map(a => a.gen()).join(',')})`;
};

Declaration.prototype.gen = function() {
  return `${rockType(this.mutability)} ${this.id} = ${this.exp.gen()}`;
};

Program.prototype.gen = function () {
  return `${this.statements.map(d => d.gen()).join(';')};`;
};

Literal.prototype.gen = function () {
 return this.type.id === 'WORDERS' ? `\"${this.value}\"` : this.value;
};

// While Loops to be done by Homework 5

/*WhileLoop.prototype.gen = function() {
  return `while (${this.testExp.gen()}) {
    {${this.body.gen()}}
  }`
}

ExpSeq.prototype.gen = function () {
  return this.exps.map(s => `${s.gen()};`).join('');
};

ForExp.prototype.gen = function () {
  const i = javaScriptId(this.index);
  const low = this.low.gen();
  const hi = javaScriptId(new Variable('hi'));
  const body = this.body.gen();
  return `${hi} = ${this.high.gen()}; for (let ${i} = ${low}; ${i} <= ${hi}; ${i}++) {${body}}`;
};

Func.prototype.gen = function () {
  const name = javaScriptId(this);
  const params = this.params.map(javaScriptId);
  let body = this.body.gen();
  if (this.body.type) {
    // "Void" functions do not have a JS return, others do
    body = `return ${body};`;
    // TODO THIS DOES NOT WORK FOR LET EXPRESSIONS!!!!
  }
  return `function ${name} (${params.join(',')}) {${body}}`;
};

IdExp.prototype.gen = function () {
  return javaScriptId(this.ref);
};

IfExp.prototype.gen = function () {
  const thenPart = this.consequent;
  const elsePart = this.alternate ? this.alternate.gen() : '';
  return `if (${test.gen()}) ${thenPart} ${elsePart}`;
};

LetExp.prototype.gen = function () {
  const decs = this.decs.filter(d => d.constructor !== TypeDec);
  return `{ ${decs.map(d => d.gen()).join(';')} ; ${this.body.map(e => e.gen()).join(';')} }`;
};
MemberExp.prototype.gen = function () {
  return `${this.record.gen()}.${javaScriptId(this)}`;
};

SubscriptedExp.prototype.gen = function () {
  return `${this.array.gen()}[${this.subscript.gen()}]`;
};

NegationExp.prototype.gen = function () {
  return `(- (${this.operand.gen()}))`;
};

Nil.prototype.gen = function () {
  return 'null';
};

Param.prototype.gen = function () {
  return javaScriptId(this);
};

RecordExp.prototype.gen = function () {
  return `{${this.bindings.map(b => b.gen()).join(',')}}`;
};

Variable.prototype.gen = function () {
  return `let ${javaScriptId(this)} = ${this.init.gen()}`;
};

WhileExp.prototype.gen = function () {
  return `while (${this.test.gen()}) { ${this.body.gen()} }`;
};
*/
/* eslint-disable eol-last */
