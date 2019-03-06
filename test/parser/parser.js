const fs = require('fs');
const ohm = require('ohm-js');
const Program = require('../ast/program.js');
const VariableDeclaration = require('../ast/variable-declaration.js');
const Assignment = require('../ast/assignment.js');
const Squish = require('../ast/squish-assignment.js');
const Rip = require('../ast/rip-assignment.js');

const grammar = ohm.grammar(fs.readFileSync('./syntax/stonescript.ohm', 'utf-8'));

/* eslint-disable no-unused-vars */
const astGenerator = grammar.createSemantics().addOperation('ast', {
  Program(statements) { return new Program(statements.ast()); },
  Declaration(_1, id, _2, exp) { return new VariableDeclaration(id.ast(), exp.ast()); },
  NormalAssignment(id, _1, exp) { return new Assignment(id.ast(), exp.ast()); },
  LittleAssignment_squish(id, _1, _2) { return new Squish(id.ast()); },
  LittleAssignment_rip(id, _1, _2) { return new Rip(id.ast()); },
  /* Call(functionName, _1, params, _2) { return new Call(functionName.ast(), params.ast())} */
});
/* eslint-enable no-unused-vars */

module.exports = (text) => {
  const match = grammar.match(text);
  if (!match.succeeded()) {
    return false;
  }
  return astGenerator(match).ast();
};
