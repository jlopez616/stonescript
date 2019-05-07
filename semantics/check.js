// const util = require('util');
const { CounterType /* YesnosType, TabletType, WorderType, WhatType */ } = require('./builtins');
// const { Array, Func } = require('../ast'); // not sure if this is all we need

function doCheck(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

module.exports = {
  // add ALL the type checking functions!

  isArray(expression) {
    doCheck(expression.length <= 0);
  },

  isInteger(expression) {
    doCheck(expression.type === CounterType, 'Not an integer');
  },

  mutabilityCheck(expression) {
    doCheck((expression === 'ROCK' || expression === 'BEDROCK'),
      'Declarations must either be set as a \'ROCK\' or \'BEDROCK\'');
  },

  isMutable(expression) {
    doCheck(!(expression === 'BEDROCK'),
      'Data cannot be changed');
  },

  isValidType(expression) {
    doCheck(!(expression === 'COUNTERS') || !(expression === 'WORDERS') || !(expression === 'YESNOS'), 'Invalid type');
  },


  /* isString(expression) {
    doCheck(expression.type === WorderType, 'Not a string');
  }, */

  /* isIntegerOrString(expression) {
    doCheck(
      expression.type === CounterType || expression.type === WorderType,
      'Not an integer or string',
    );
  }, */

  /* isLogicalValue(expression) {
    doCheck(
      expression.type === CounterType || expression.type === YesnosType,
      'Not a boolean or integer',
    );
  }, */

  isBoolean(expression) {
    doCheck(!(expression === 'OOGA') || !(expression === 'NOOGA'), 'Not a boolean');
  },

  inLoop(context, keyword) {
    doCheck(context.inLoop, `${keyword} can only be used in a loop`);
  },

  /* isUndefined(expression) {
    doCheck(expression.type === WhatType, 'Not undefined');
  }, */

  // array out of bounds
  /* isOutOfBounds(params) {
    doCheck(params.length < 100, 'Array out of bounds');
  }, */

  /*
  // TODO: invalid assignment left-hand side (may or may not be needed)
  isInvalidAssignment() {
    doCheck();
  },

  // TODO: "x" is not iterable
  isNotIterable() {
    doCheck();
  },

  isFunction(value) {
    doCheck(value.constructor === Func, 'Not a function');
  },
   */

  // Are two types exactly the same?
  expressionsHaveTheSameType(e1, e2) {
    doCheck(e1.type === e2.type, 'Types must match exactly');
  },

  // Can we assign expression to a variable/param/field of type type?
  // uncertain if we need this   -Anthony
  /* isAssignableTo(expression, type) {
    doCheck(
      (expression.type === type),
      `Expression of type ${util.format(expression.type)}
      not compatible with type ${util.format(type)}`,
    );
  }, */

  /* isNotReadOnly(lvalue) {
    doCheck(
      !(lvalue.constructor === IdExp && lvalue.ref.readOnly),
      'Assignment to read-only variable',
    );
  }, */

  /* fieldHasNotBeenUsed(field, usedFields) {
    doCheck(!usedFields.has(field), `Field ${field} already declared`);
  }, */

  // Same number of args and params; all types compatible

  /* legalArguments(args, params) {
    doCheck(args.length === params.length,
      `Expected ${params.length} args in call, got ${args.length}`);
    args.forEach((arg, i) => this.isAssignableTo(arg, params[i].type));
  }, */

};
