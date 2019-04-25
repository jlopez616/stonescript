const { Func, /*Param,*/ PrimitiveType } = require('../ast');

const CounterType = new PrimitiveType('counter'); // number
const WorderType = new PrimitiveType('worder');   // string
const YesnosType = new PrimitiveType('yesno');    // boolean
const WhatType = new PrimitiveType('what');       // undefined
const TabletType = new PrimitiveType('tablet');   // object

const standardFunctions = [
  
  new Func('HUNTDOWN', WorderType),
  new Func('SPEAK', WorderType),
  //new Func('WHATIS', )     // what was that supposed to be?  -Anthony
  new Func('TYPE', [new Param('x', PrimitiveType)], WorderType), // gives type of param; does that work?????
  new Func('DATE', [
    new Param('month', CounterType),
    new Param('day', CounterType),
    new Param('year', CounterType),
  ], WorderType),
  new Func('SIZE', [new Param('s', WorderType)], CounterType),
  new Func('DACHAR', [new Param('n', CounterType)], WorderType),   // gets character at position 'n'; check charAt
  new Func('GOAWAY', [                                             // replace 'current' string to 'new' string; check 'replace'
    new Param('current', WorderType), 
    new Param('new', WorderType),
  ], WorderType),
  new Func('GOHIGH', [], WorderType),                              // uppercase; perfect for our language don't you think ;)
  new Func('DALENGTH', [], CounterType),                           // gives length of string
  new Func('BIGHUG', [                                             // concat two strings
    new Param('s', WorderType),
    new Param('t', WorderType),
  ], WorderType),



  /* new Func('print', [new Param('s', StringType)]),
  new Func('flush', []),
  new Func('getchar', [], StringType),
  new Func('ord', [new Param('s', StringType)], IntType),
  new Func('chr', [new Param('x', IntType)], StringType),
  new Func('size', [new Param('s', StringType)], IntType),
  new Func('substring', [
    new Param('s', StringType),
    new Param('first', IntType),
    new Param('n', IntType),
  ], StringType),
  new Func('concat', [
    new Param('s', StringType),
    new Param('t', StringType),
  ], StringType),
  new Func('not', [new Param('x', IntType)], IntType),
  new Func('exit', [new Param('code', IntType)]), */
];

module.exports = { CounterType, WorderType, YesnosType, WhatType, TabletType, standardFunctions };