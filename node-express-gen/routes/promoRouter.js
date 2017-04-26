var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
  .all (function (req, res, nextwhat) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    nextwhat();
  })

  .get(function (req, res, next) {
    res.end('Will send all promotions');
  })

  .post(function (req, res, next) {
    res.end('Will post promotions with ' + req.body.name + ' with details ' + req.body.description);
  })

  .delete(function (req, res, next) {
    res.end('Will delete all promotions');
  });

promoRouter.route('/:promoId')
  .all(function (req, res, next) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    next();
  })

  .get(function (req, res, next) {
    res.end('Will send details of ' + req.params.promoId + ' dish');
  })

  .put(function (req, res, next) {
    res.write('Updating dish with id ' + req.params.promoId);
    res.write('will update dish with ' + req.body.name + ' and description ' + req.body.description);
    res.end();
  })

  .delete (function (req, res, next) {
    res.write('Will delete promotion with id ' + req.params.promoId);
    res.end();
  });

module.exports = promoRouter;
