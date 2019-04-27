/*
 * Semantics Success Test
 *
 * These tests check that the semantic analyzer correctly accepts a program that passes
 * all of semantic constraints specified by the language.
 */

const parse = require('../../ast/parser');
const Context = require('../context');

// TODO!!!!!

const program = String.raw`
BEDROCK COUNTERS x IS 5!
ROCK WORDERS s IS "welcome"!

YABBADABBADOO (WORDERS intro, COUNTERS count) PART
	intro IS "My name is "!
    count IS 10!
    🦖 Will loop ten times, printing "kratos" each time
    FOR (ROCK COUNTERS i IS 0! i NOT SMASH 10! i IS i SQUISH 1) PART
    	SPEAK(kratos)!        
    NOT PART!
NOT PART!


`;

// const program = String.raw`
// let
//   type Circle = {
//     x: int,
//     y: int,
//     color: string
//   }
//   type list = array of string
//   var c: Circle := Circle {y = 2, x = 5<3&2<>1, color = "blue"}
//   var dogs: list := list [3] of "woof"
// in
//   dogs[1] := "Sparky";
//   for i := 1 to 10 do
//     print(concat(chr(2), "xyz"))
//     /*
//      *
//      * NEEDS A ZILLION MORE THINGS
//      *
//      */
// end
// `;

describe('The semantic analyzer', () => {
  test('accepts the mega program with all syntactic forms', (done) => {
    const astRoot = parse(program);
    expect(astRoot).toBeTruthy();
    astRoot.analyze(Context.INITIAL);
    expect(astRoot).toBeTruthy();
    done();
  });
});
