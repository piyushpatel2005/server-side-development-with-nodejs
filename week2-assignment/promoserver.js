var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Promotions = require('./models/promotions');
var url = "mongodb://localhost:7890/conFusion";

mongoose.connect(url);

var db = mongoose.connection;

db.on('error', function(error) {
  console.error('Connection error occured!');
});

db.once('open', function () {
  console.log('Connection established successfully!');
});

Promotions.create({
      "name": "Weekend Grand Buffet",
      "image": "images/buffet.png",
      "label": "New",
      "price": "19.99",
      "description": "Featuring . . ."
}, function (err, promotion) {
  if(err) throw err;
  console.log('promotion created');
  console.log(promotion);

  var id = promotion._id;
  setTimeout(function () {
    Promotions.findByIdAndUpdate(id, {
      $set: {
        description: "New Featuring..."
      }
    }, {
      new: true
    }, function (err, promotion) {
      if(err) throw err;
      console.log('Promotion updated successfully!');
      console.log(promotion);

      db.collection('promotions').drop(function () {
        db.close();
      });
    });
  }, 3000);
});
