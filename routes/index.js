var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var result = {'ip-address': req.headers['x-forwarded-for'],
      'language': req.headers['accept-language'].split(",")[0],
      'software': req.headers['user-agent'].split("(")[1].split(")")[0]
  };
  res.json(result);
});

module.exports = router;


