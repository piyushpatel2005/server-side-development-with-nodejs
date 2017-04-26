var express = require('express');
var bodyParser = require('body-parser');

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
  .all(function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    next();
  })

  .get(function (req, res, next) {
    res.write('Will return all leaders information');
    res.end();
  })

  .post(function (req, res, next) {
    res.write('Will post : ' + req.body.name + ' with details: ' + req.body.description);
    res.end();
  })

  .delete(function (req, res, next) {
    res.write('Wiill delete all leaders');
    res.end();
  });

leaderRouter.route('/:leaderId')
  .all(function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    next();
  })

  .get(function(req, res, next) {
    res.write('will send details of leader with id ' + req.params.leaderId);
    res.end();
  })

  .put(function (req, res, next) {
    res.write('Updating details for ' + req.params.leaderId);
    res.write('Will update ' + req.body.name + ' with details : ' + req.body.description);
    res.end();
  })

  .delete(function (req, res, next ) {
    res.write('Will delete details for ' + req.params.leaderId);
    res.end();
  });

module.exports = leaderRouter;
