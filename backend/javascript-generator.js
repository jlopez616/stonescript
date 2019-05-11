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
  Array, BinaryExp, Break, Call, Declaration, Program, Literal,
} = require('../ast');


const Context = require('../semantics/context');
// const { StringType } = require('../semantics/builtins');

// TO Do for Kevin (I commented this out so the linter doesn't give me trouble):

function makeOp(op) {
  return { MANY: '*',
    SQUISH: '+',
    RIP: '-',
    AND: '&&',
    OR: '||',
    'NOT IS': '!=',
    'IS IS': '==' }[op] || op;
} // note that the use of == and != is intended because cavemen didn't care about exact matches


function rockType(op) {
  return (op === 'BEDROCK') ? 'const' : 'let';
}
// javaScriptId(e) takes any Tiger object with an id property, such as a Variable,
// Param, or Func, and produces a JavaScript name by appending a unique identifying
// suffix, such as '_1' or '_503'. It uses a cache so it can return the same exact
// string each time it is called with a particular entity.


const libFuncs = new Map();
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


Array.prototype.gen = function () {
  return `[${this.args.forEach((x) => { x.gen(); })}]`;
};

Break.prototype.gen = function () {
  return `break`;
};

BinaryExp.prototype.gen = function () {
  return `${this.left.gen()} ${makeOp(this.op)} ${this.right.gen()}`;
};

Call.prototype.gen = function () {
  if (Context.INITIAL.locals.has(this.id)) {
    this.id = getLibraryFunction(this.id);
    // USE WITH ABSOLUTE CAUTION: MUST DOCUMENT THAT THE CHILDREN OF ALL BUILT IN FUNCTIONS
    // RETURN THE TYPE OF THEIR PARENTS
    this.args.forEach((x) => { x.type = this.type; });
  }

  return `${this.id}(${this.args.map(a => a.gen()).join(',')})`;
};

Declaration.prototype.gen = function () {
  return `${rockType(this.mutability)} ${this.id} = ${this.exp.gen()}`;
};

Program.prototype.gen = function () {
  return `${this.statements.map(d => d.gen()).join(';')};`;
};

Literal.prototype.gen = function () {
  return this.type === 'WORDERS' ? `\"${this.value}\"` : this.value;
};

/* eslint-disable eol-last */
