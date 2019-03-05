const fs = require('fs');
const ohm = require('ohm-js');

const grammar = ohm.grammar(fs.readFileSync('./syntax/stonescript.ohm', "utf-8"));

const astGenerator = grammar.createSemantics().addOperation('ast', {
  Program(statement) {return new Program(body.ast()) }
})

module.exports = (text) => {
  const match = grammar.match(text);
  if (!match.succeeded()) {
    return false;
  }
  return astGenerator(match).ast();
};
