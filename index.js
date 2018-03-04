'use strict';
const { charsMap } = require('./charsMap.js')

const latinize = string => string.replace(/[^A-Za-z\[\] ]/g, c => charsMap[c] || c)
module.exports.toLatin = input => ((typeof input === 'string') ? latinize(input) : input)
