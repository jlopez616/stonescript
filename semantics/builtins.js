const { Func, Parameter, PrimitiveType } = require('../ast');

const CounterType = new PrimitiveType('counter'); // number
const WorderType = new PrimitiveType('worder');   // string
const YesnosType = new PrimitiveType('yesno');    // boolean
const WhatType = new PrimitiveType('what');       // undefined
const TabletType = new PrimitiveType('tablet');   // object

const standardFunctions = [
  
  new Func('HUNTDOWN', WorderType),
  new Func('SPEAK', WorderType),
  //new Func('WHATIS', )     // what was that supposed to be?  -Anthony
  new Func('TYPE', [new Parameter('x', PrimitiveType)], WorderType), // gives type of Parameter; does that work?????
  new Func('DATE', [
    new Parameter('month', CounterType),
    new Parameter('day', CounterType),
    new Parameter('year', CounterType),
  ], WorderType),
  new Func('SIZE', [new Parameter('s', WorderType)], CounterType),
  new Func('DACHAR', [new Parameter('n', CounterType)], WorderType),   // gets character at position 'n'; check charAt
  new Func('GOAWAY', [                                             // replace 'current' string to 'new' string; check 'replace'
    new Parameter('current', WorderType), 
    new Parameter('new', WorderType),
  ], WorderType),
  new Func('GOHIGH', [], WorderType),                              // uppercase; perfect for our language don't you think ;)
  new Func('DALENGTH', [], CounterType),                           // gives length of string
  new Func('BIGHUG', [                                             // concat two strings
    new Parameter('s', WorderType),
    new Parameter('t', WorderType),
  ], WorderType),



  /* new Func('print', [new Parameter('s', StringType)]),
  new Func('flush', []),
  new Func('getchar', [], StringType),
  new Func('ord', [new Parameter('s', StringType)], IntType),
  new Func('chr', [new Parameter('x', IntType)], StringType),
  new Func('size', [new Parameter('s', StringType)], IntType),
  new Func('substring', [
    new Parameter('s', StringType),
    new Parameter('first', IntType),
    new Parameter('n', IntType),
  ], StringType),
  new Func('concat', [
    new Parameter('s', StringType),
    new Parameter('t', StringType),
  ], StringType),
  new Func('not', [new Parameter('x', IntType)], IntType),
  new Func('exit', [new Parameter('code', IntType)]), */
];

module.exports = { CounterType, WorderType, YesnosType, WhatType, TabletType, standardFunctions };