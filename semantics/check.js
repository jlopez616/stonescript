const util = require('util');
const { CounterType, WorderType, YesnosType, WhatType, TabletType } = require('./builtins');
const { Array, Func } = require('../ast'); //not sure if this is all we need

function doCheck(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

module.exports = {
  //add ALL the type checking functions!
  isArray(expression) {
    doCheck(expression.type.constructor === Array, 'Not an array');
  }, 

  isInteger(expression) {
    doCheck(expression.type === CounterType, 'Not an integer');
  },

  isString(expression) {
    doCheck(expression.type === WorderType, 'Not a string');
  },

  isIntegerOrString(expression) {
    doCheck(
      expression.type === CounterType || expression.type === WorderType,
      'Not an integer or string',
    );
  },

  isBoolean(expression) {
    doCheck(expression.type === YesnosType, 'Not a boolean');
  },

  isUndefined(expression) {
    doCheck(expression.type === WhatType, 'Not undefined');
  },

  isFunction(value) {
    doCheck(value.constructor === Func, 'Not a function');
  },

  // Are two types exactly the same?
  expressionsHaveTheSameType(e1, e2) {
    doCheck(e1.type === e2.type, 'Types must match exactly');
  },

  // Can we assign expression to a variable/param/field of type type?
  // uncertain if we need this   -Anthony
  isAssignableTo(expression, type) {
    doCheck(
      (expression.type === type),
      `Expression of type ${util.format(expression.type)} not compatible with type ${util.format(type)}`,
    );
  },

  isNotReadOnly(lvalue) {
    doCheck(
      !(lvalue.constructor === IdExp && lvalue.ref.readOnly),
      'Assignment to read-only variable',
    );
  },

  fieldHasNotBeenUsed(field, usedFields) {
    doCheck(!usedFields.has(field), `Field ${field} already declared`);
  },

  // Same number of args and params; all types compatible
  legalArguments(args, params) {
    doCheck(args.length === params.length,
      `Expected ${params.length} args in call, got ${args.length}`);
    args.forEach((arg, i) => this.isAssignableTo(arg, params[i].type));
  },

};