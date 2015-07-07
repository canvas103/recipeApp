/**
 * Created by Chenghuijin on 2015/7/6.
 */

var express= require('express');
var ingredients = require('./ingredients');
var handler = express();

handler.use('/',ingredients);
module.exports = handler;