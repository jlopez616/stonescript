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
  isArrayType(type) {
    doCheck(type.constructor === Array, 'Not an array type');
  },

  isCounterType(type) {
    doCheck(type.constructor === CounterType, 'Not a counter type');
  },

  isWorderType(type) {
    doCheck(type.constructor === WorderType, 'Not a worder type');
  },

  isYesnosType(type) {
    doCheck(type.constructor === YesnosType, 'Not a yesnos type');
  },

  isWhatType(type) {
    doCheck(type.constructor === WhatType, 'Not a what type');
  },

  isTabletType(type) {
    doCheck(type.constructor === TabletType, 'Not a tablet type');
  },

  // Is the type of this expression an array type?
  isArray(expression) {
    doCheck(expression.type.constructor === Array, 'Not an array');
  },

  isCounter(expression) {
    doCheck(expression.type.constructor === CounterType, 'Not a counter');
  },

  isWorder(expression) {
    doCheck(expression.type.constructor === WorderType, 'Not a worder');
  },

  isWhat(expression) {
    doCheck(expression.type.constructor === WhatType, 'Not a what');
  },

  isTablet(expression) {
    doCheck(expression.type.constructor === TabletType, 'Not a tablet');
  },

  isFunction(value) {
    doCheck(value.constructor === Func, 'Not a function');
  },

  isFieldOfRecord(id, record) {
    doCheck(record.type.fields.find(field => id === field.id), `No such field: ${id}`);
  },

  // Are two types exactly the same?
  expressionsHaveTheSameType(e1, e2) {
    doCheck(e1.type === e2.type, 'Types must match exactly');
  },

  // Can we assign expression to a variable/param/field of type type?
  isAssignableTo(expression, type) {
    doCheck(
      (expression.type === NilType && type.constructor === RecordType)
      || (expression.type === type),
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

  // If there is a cycle in types, they must go through a record
  noRecursiveTypeCyclesWithoutRecordTypes() {
    /* TODO */
  },
}