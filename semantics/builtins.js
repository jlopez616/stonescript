const { Call, Parameter, PrimitiveType } = require('../ast');

const CounterType = new PrimitiveType('COUNTERS'); // number
const WorderType = new PrimitiveType('WORDERS'); // string
const YesnosType = new PrimitiveType('YESNOS'); // boolean
// const WhatType = new PrimitiveType('what'); // undefined
// const TabletType = new PrimitiveType('tablet'); // object

const standardFunctions = [
  new Call('HUNTDOWN', WorderType),
  new Call('SPEAK', WorderType),
  new Call('TYPE', [new Parameter('x', PrimitiveType)], WorderType), // gives type of Parameter; does that work?????
  new Call('DATE', [
    new Parameter('month', CounterType),
    new Parameter('day', CounterType),
    new Parameter('year', CounterType),
  ], WorderType),
  new Call('SIZE', [new Parameter('s', WorderType)], CounterType),
  new Call('DACHAR', [new Parameter('n', CounterType)], WorderType), // gets character at position 'n'; check charAt
  new Call('GOAWAY', [ // replace 'current' string to 'new' string; check 'replace'
    new Parameter('current', WorderType),
    new Parameter('new', WorderType),
  ], WorderType),
  new Call('GOHIGH', [], WorderType), // uppercase; perfect for our language don't you think ;)
  new Call('DALENGTH', [], CounterType), // gives length of string
  new Call('BIGHUG', [ // concat two strings
    new Parameter('s', WorderType),
    new Parameter('t', WorderType),
  ], WorderType),
];

module.exports = {
  CounterType,
  WorderType,
  YesnosType,
  //  WhatType,
  //  TabletType,
  standardFunctions,
};
