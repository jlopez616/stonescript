/*
 * Semantic Error Tests
 *
 * These tests check that the analyzer will reject programs with various
 * static semantic errors.
 */

const parse = require('../../ast/parser');
const Context = require('../context');

const errors = [
  // TODO: have to decide how we want to call builtins
  ['use of undeclared variable', 'x IS 1!'],
  ['writing to a const variable', 'BEDROCK COUNTERS x IS 33! x IS 42!'],
  ['non boolean while condition', 'WHILE ("OOGA") PART SPEAK("OOGA")! NOT PART!'],
  ['non boolean if condition', 'OOF("OOGA) PART SPEAK("OOGA")! NOT PART!'],
  ['non integer in add', '3 SQUISH "ROCK"!'],
  ['non integer in subtract', '3 RIP "ROCK"!'],
  ['non integer in multiply', '3 MANY "ROCK"!'],
  ['non integer in divide', '3 CUT "ROCK"!'],
  ['non integer in modulus', '3 LEFT "ROCK"!'],
  ['non boolean in logical operations', '3 SMASH 1 OR "OOGA WORLD!"!'],
  ['non boolean in logical negation', 'ROCK YESNOS b IS NOT 33 > 7!'],
  ['non boolean in conditionals', 'OOF("ROCK") PART ROCK COUNTERS c IS 7! NOT PART!'],
  ['types do not match in equality test', '1 IS IS "ROCK"!'],
  ['types do not match in inequality test', '2 SMASH "ROCK"!'],
  ['types do not match in declaration', 'ROCK COUNTERS n IS "ROCK"!'],
  ['undeclared because in other scope', 'FOR(ROCK COUNTERS x IS 0! x NOT SMASH 5! x IS x SQUISH 1) PART ROCK COUNTERS y IS 1 SQUISH x! NOT PART! y SQUISH 1!'],
  ['redeclaration of variable', 'ROCK WORDERS w IS "OOGA"! ROCK WORDERS w IS "OOGA OOGA!"'],
  ['type mismatch in assignment', 'ROCK WORDERS w IS 2!'],
  ['incorrect type assignment in for loop', 'FOR(ROCK WORDERS x IS "WORDUP"; x NOT SMASH 5; x IS x SQUISH 1) PART ROCK COUNTERS r IS 5! NOT PART!'],
  ['writing to for loop index', 'FOR(ROCK COUNTERS x IS 0; x NOT SMASH 5; x IS x SQUISH 1) PART x IS 5! NOT PART!'],
  ['wrong var called in for loop', 'FOR(ROCK COUNTERS x IS 0; y NOT SMASH 5; x IS x SQUISH 1) PART ROCK COUNTERS r IS 5! NOT PART!'],
  ['wrong type inside of the while loop relExp', 'WHILE( x NOT SMASH OR IS "ROCKY") PART NOT PART!'],
  ['using a reserved keyword', 'ROCK COUNTERS OOF IS 3!'],
  ['using break outside a loop', 'ROCK COUNTERS C IS 15! RAGEQUIT! C IS C SQUISH 5!'],

  ['too many function arguments', 'SIZE("CAT", "DOG", "FISH")!'],
  ['too few function arguments', 'BIGHUG("YABBADABBADOO!!!!")!'],
  ['wrong type of function argument', 'SIZE(33)!'],
  ['empty function argument', 'SIZE()!'],
  ['redeclared field', 'ROCK COUNTERS x IS 5! ROCK COUNTERS x IS 5!'],
  // ['no such field', 'let type p = {r: int} var s: p := nil in s.zzz end'],
  // don't have working tablets yet... do later
  // ['member of nonrecord', 'let var x := 3 in x.y end'], // once tablets are working
  ['subscript of nonarray', 'ROCK COUNTER c IS 68! c.DACHAR(3)!'],
  ['call of nonfunction', 'ROCK COUNTERS x IS 1! x(3)!'],
  // TODO: We need dozens more here....

  // return type error within a function?
  // empty array substring
  // potential tablet errors: too many/too few tablet assignments,
  // (cont.) assigning args/types that dont exist in the TABLET
  // Are calls to built-ins fixed? Have some tests already
  // Do we want to check strings with illegal characters? -how?
  // need some comment errors, probably just if multiline is missing end emoji
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
