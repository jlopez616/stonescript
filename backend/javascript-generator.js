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
  ArrayExp, Assignment, BinaryExp, Binding, Break, Call, ExpSeq, ForExp, Func, Program,
  IdExp, IfExp, LetExp, Literal, MemberExp, NegationExp, Nil, Param, RecordExp,
  SubscriptedExp, TypeDec, Variable, WhileExp,
} = require('../ast');

const Context = require('../semantics/context');
// const { StringType } = require('../semantics/builtins');

// TO Do for Kevin (I commented this out so the linter doesn't give me trouble):

function makeOp(op) {
  return { AND: '&&', OR: '||', 'NOT IS': '!=', 'IS IS': '==' }[op] || op;
} // note that the use of == and != is intended because cavemen didn't care about exact matches

// javaScriptId(e) takes any Tiger object with an id property, such as a Variable,
// Param, or Func, and produces a JavaScript name by appending a unique identifying
// suffix, such as '_1' or '_503'. It uses a cache so it can return the same exact
// string each time it is called with a particular entity.
const javaScriptId = (() => {
  let lastId = 0;
  const map = new Map();
  return (v) => {
    if (!(map.has(v))) {
      map.set(v, ++lastId); // eslint-disable-line no-plusplus
    }
    return `${v.id}_${map.get(v)}`;
  };
})();

let libFuncs = new Map();
libFuncs.set('SPEAK', 'console.log');
// I don't understand this tiger stuff so I made my own :) - John
function getLibraryFunction(name) {
  const entity = Context.INITIAL.locals.get(name);
  return `${libFuncs.get(entity.id)}`;

}

function generateLibraryFunctions() {
  function generateLibraryStub(name, params, body) {
    const entity = Context.INITIAL.locals.get(name);
    //return `${javaScriptId(entity)}(${params}) {${body}}`;
    return `${entity.id}${body}`;
  }
  return [
    //generateLibraryStub('HUNTDOWN', 's', 'console.log(s);'), // WAIT TO SEE WHAT IT DOES
    generateLibraryStub('SPEAK', '_', 'console.log("_")'),
  /*  generateLibraryStub('TYPE', 'x', ` function stonescriptType(x) {
                                        if (Array.isArray(x)) {
                                          return 'CAVES';
                                        } else if (typeof x === 'number') {
                                           return 'COUNTERS';
                                        } else if (typeof x === 'string'){
                                          return 'WORDERS';
                                        } else if (typeof x === 'boolean'){
                                          return 'YESNOS';
                                        } else if (typeof x === 'undefined'){
                                          return 'WHUTS';
                                        } else if (typeof x === 'object'){
                                          return 'TABLETS';
                                        } else if (typeof x === 'function'){
                                          return 'YABBADABBADOO';
                                        }`),
    generateLibraryStub('DATE', `var today = new Date();
                                var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
                                return date`), // if we want we can edit date and have it take in no args but return the current date
    generateLibraryStub('SIZE', 's', 'return s.length;'),
    generateLibraryStub('DACHAR', 'n', 'return Array.charAt(n);'),
    generateLibraryStub('GOAWAY', 's1, s2', 'return '), // what??? do we want this
    generateLibraryStub('GOHIGH', 'return String.toUpperCase();'), // DOES THIS HAVE AN ARG PASSED IN?
    generateLibraryStub('DALENGTH', 'String.size();'), // i hope this is right
    generateLibraryStub('BIGHUG', 's, t', 'return s.concat(t);'),
  */].join('');
}

module.exports = function (exp) {
  //const libraryFunctions = generateLibraryFunctions();
  const program =  /*`${libraryFunctions}*/  `${exp.gen()}`;
  return prettyJs(program, { indent: '  ' });
};

/* ArrayExp.prototype.gen = function () {
  return `Array(${this.size.gen()}).fill(${this.fill.gen()})`;
};

Assignment.prototype.gen = function () {
  return `${this.target.gen()} = ${this.source.gen()}`;
};

BinaryExp.prototype.gen = function () {
  return `(${this.left.gen()} ${makeOp(this.op)} ${this.right.gen()})`;
};

Binding.prototype.gen = function () {
  return `${this.id} : ${this.value.gen()}`;
};

Break.prototype.gen = function () {
  return 'break';
};
*/
Call.prototype.gen = function () {
  if (Context.INITIAL.locals.has(this.id)) {
    this.id = getLibraryFunction(this.id);
  }
  return `${this.id}(${this.args.map(a => a.gen()).join(',')})`;
};

Program.prototype.gen = function () {
  return `${this.statements.map(d => d.gen()).join(';')};`;
};

Literal.prototype.gen = function () {
//  return this.type === 'WORDERS' ? `"${this.value}"` : this.value;
  return `\"${this.value}\"`;
}
/*
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

Literal.prototype.gen = function () {
  return this.type === StringType ? `"${this.value}"` : this.value;
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
