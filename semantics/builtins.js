const { Func, /*Param,*/ PrimitiveType } = require('../ast');

const CounterType = new PrimitiveType('counter'); // number
const WorderType = new PrimitiveType('worder'); //string
const YesnosType = new PrimitiveType('yesno'); //Boolean
const WhatType = new PrimitiveType('what'); //undefined
const TabletType = new PrimitiveType('tablet'); //object

const standardFunctions = [
  //we need to decide what standard functions we want to include
  
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

module.exports = { /* IntType, StringType, NilType,*/ standardFunctions };