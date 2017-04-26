var express = require('express');
var bodyParser = require('body-parser');

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
  .all(function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
  })

  .get(function (req, res, next) {
    res.end('Will return all dishes');
  })

  .post(function (req, res, next) {
    res.end('Will post ' + req.body.name + ' with details: ' + req.body.description);
  })

  .delete(function (req, res, next) {
    res.end('Deleting all dishes');
  });

  dishRouter.route('/:dishId')
    .all(function (req, res, next) {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      next();
    })

    .get(function (req, res, next) {
      res.end('Will send details of the dish ' + req.params.dishId);
    })

    .put(function (req, res, next) {
      res.write('Updating ' + req.params.dishId + ' dish');
      res.end('Will update ' + req.body.name + ' with details : ' + req.body.description);
    })

    .delete(function (req, res, next) {
      res.end('Will delete dish ' + req.params.dishId);
    });


module.exports = dishRouter;
