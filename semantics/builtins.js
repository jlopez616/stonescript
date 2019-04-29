const { Func, Parameter, PrimitiveType } = require('../ast');

const CounterType = new PrimitiveType('counter'); // number
const WorderType = new PrimitiveType('worder'); // string
const YesnosType = new PrimitiveType('yesno'); // boolean
const WhatType = new PrimitiveType('what'); // undefined
const TabletType = new PrimitiveType('tablet'); // object

const standardFunctions = [
  new Func('HUNTDOWN', WorderType),
  new Func('SPEAK', WorderType),
  new Func('TYPE', [new Parameter('x', PrimitiveType)], WorderType), // gives type of Parameter; does that work?????
  new Func('DATE', [
    new Parameter('month', CounterType),
    new Parameter('day', CounterType),
    new Parameter('year', CounterType),
  ], WorderType),
  new Func('SIZE', [new Parameter('s', WorderType)], CounterType),
  new Func('DACHAR', [new Parameter('n', CounterType)], WorderType), // gets character at position 'n'; check charAt
  new Func('GOAWAY', [ // replace 'current' string to 'new' string; check 'replace'
    new Parameter('current', WorderType),
    new Parameter('new', WorderType),
  ], WorderType),
  new Func('GOHIGH', [], WorderType), // uppercase; perfect for our language don't you think ;)
  new Func('DALENGTH', [], CounterType), // gives length of string
  new Func('BIGHUG', [ // concat two strings
    new Parameter('s', WorderType),
    new Parameter('t', WorderType),
  ], WorderType),
];

module.exports = {
  CounterType,
  WorderType,
  YesnosType,
  WhatType,
  TabletType,
  standardFunctions,
};
