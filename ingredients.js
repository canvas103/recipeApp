var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('hello');
    res.end();
});
router.get('/', function(req, res) {
    res.sendfile("./view/index.html");
});
module.exports = router;