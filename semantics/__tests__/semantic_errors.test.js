/*
 * Semantic Error Tests
 *
 * These tests check that the analyzer will reject programs with various
 * static semantic errors.
 */

const parse = require('../../ast/parser');
const Context = require('../context');

const errors = [
  ['use of undeclared variable', 'x IS 1!'],
  ['non integer while condition', 'WHILE ("OOGA") PART SPEAK("OOGA")! NOT PART!'],
  ['non integer if condition', 'OOF("OOGA) PART SPEAK("OOGA")! NOT PART!'],
  ['non integer in add', '3 SQUISH "ROCK"!'],
  ['non integer in subtract', '3 RIP "ROCK"!'],
  ['types do not match in equality test', '1 IS IS "ROCK"!'],
  ['types do not match in inequality test', '2 SMASH "ROCK"!'],
  ['types do not match in declaration', 'ROCK COUNTERS n IS "ROCK"!'],
  ['undeclared because in other scope', 'FOR(ROCK COUNTERS x IS 0; x NOT SMASH 5; x IS x SQUISH 1) PART ROCK COUNTERS y IS 1 SQUISH x! NOT PART! y SQUISH 1!'],
  ['redeclaration of variable', 'ROCK WORDERS w IS "OOGA"! ROCK WORDERS is "OOGA OOGA!"'],
  ['type mismatch in assignment', 'ROCK WORDERS w IS 2!'],
  ['writing to for loop index', 'FOR(ROCK COUNTERS x IS 0; x NOT SMASH 5; x IS x SQUISH 1) PART x IS 5! NOT PART!'],
  ['too many function arguments', 'SIZE("CAT", "DOG", "FISH")!'],
  ['too few function arguments', 'BIGHUG("YABBADABBADOO!!!!")!'],
  ['wrong type of function argument', 'SIZE(33)!'],
  ['redeclared field', 'let type p = {r: int, r: int} in 0 end'],
  ['no such field', 'let type p = {r: int} var s: p := nil in s.zzz end'],
  ['member of nonrecord', 'let var x := 3 in x.y end'],
  ['subscript of nonarray', 'let var x := 3 in x[0] end'],
  ['call of nonfunction', 'ROCK COUNTERS x IS 1! x(3)!'],
  ['non integer subscript', 'let type list = array of int var a := list [1] of 0 in a["x"] end'],
  // TODO: We need dozens more here....
];

describe('The semantic analyzer', () => {
  errors.forEach(([scenario, program]) => {
    test(`detects the error ${scenario}`, (done) => {
      const astRoot = parse(program);
      expect(astRoot).toBeTruthy();
      expect(() => astRoot.analyze(Context.INITIAL)).toThrow();
      done();
    });
  });
});
