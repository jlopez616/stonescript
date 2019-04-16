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
  
}