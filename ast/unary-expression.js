const BooleanLiteral = require('./boolean-literal');
const NumericLiteral = require('./numeric-literal');

// operators that act upon a single operand to produce a new value
module.exports = class UnaryExpression {
    constructor(op, operand) {
        Object.assign(this, { op, operand });
    }
};