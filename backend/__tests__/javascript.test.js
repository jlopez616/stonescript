/*
 * JavaScript Code Generator Tests
 *
 * These tests check that the JavaScript generator produces the target
 * JavaScript that we expect.
 */

const parse = require('../../ast/parser');
// const analyze = require('../../semantics/analyzer');
const generate = require('../javascript-generator');
const Context = require('../../semantics/context');

const fixture = {
  hello: [
    String.raw`SPEAK("Hello, world")!`,
    String.raw`console.log("Hello, world");`
  ],

  arithmetic: [String.raw`5 MANY 2!`, String.raw `5 * 2;`],

  // letAndAssign: [
  //   String.raw`ROCK WORDERS a IS "YA BOI"!`,
  //   String.raw`let a = "YA BOI";`
  // ], 

  // ifThen: [String.raw`OOF (5 SMASH 6) PART x IS 5! NOT PART!`, 
  //          String.raw`if (5 > 6) { x = 5; };`],

  // forLoop: [
  //   String.raw`FOR (ROCK COUNTERS i IS 0! i NOT SMASH 5! i IS i SQUISH 1) PART BREAK! NOT PART!`,
  //   String.raw`FOR (int i = 0; i < 5; i = i + 1) { break; };`
  // ],

  

  /* While loops to be added in Homework 5
  whileLoop: [
    String.raw`WHILE (OOGA) PART RAGEQUIT! NOT PART!`,
    /while \(7\) \{\s*break\s*\}/
  ]



  ifThen: [String.raw`OOF 3 OOOF 5`, "((3) ? (5) : (null))"],

  ifThenElse: [String.raw`OOF 3 OOOF 5 OOFF 8`, "((3) ? (5) : (8))"],



  func: [
    String.raw`ROCK F IS YABBADABBADOO (COUNTERS N) GIVES COUNTERS PART N IS N SQUISH 1! GIVE N! NOT PART `,
    String.raw`let f = (n) => { n = n + 1; return n; }`
  ]
 */
};
describe('The JavaScript generator', () => {
    Object.entries(fixture).forEach(([name, [source, expected]]) => {
        test(`produces the correct output for ${name}`, (done) => {
            const ast = parse(source);
            ast.analyze(Context.INITIAL);
            expect(generate(ast)).toMatch(expected);
            done();
        });
    });
});
