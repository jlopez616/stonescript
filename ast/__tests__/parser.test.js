
 /* Grammar Tests
 * Made using the template from Ray Toal's Plainscript
 * https://github.com/rtoal/plainscript/blob/master/test/grammar/grammar-test.js
 *
 * Tests that the we've constructed our grammar correctly, by checking that
 * programs that we expect to be matched by the grammar are matched, and
 * those that we expect not to cause an error to be thrown.
 */


const fs = require('fs');
const util = require('util');
const parse = require('../parser');

describe('The parser', () => {
  fs.readdirSync(__dirname).forEach((name) => {
    if (name.endsWith('.rock')) {
      test(`produces the correct AST for ${name}`, (done) => {
        fs.readFile(`${__dirname}/${name}`, 'utf-8', (err, input) => {
          const ast = parse(input);
          const astText = util.inspect(ast, { depth: null });
          fs.readFile(`${__dirname}/${name.slice(0, -4)}ast`, 'utf-8', (_err, expected) => {
            expect(astText).toEqual(expected.trim());
            done();
          });
        });
      });
    }
  });
});
