/**
 * Created by Chenghuijin on 2015/7/5.
 */
var http = require('http');
var server = http.createServer();
var handler = require('./handler');

server.on('request',handler);
server.listen(8888);
