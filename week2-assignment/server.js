var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes');

var url = "mongodb://localhost:7890/conFusion";

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));

db.once('open', function () {
  console.log('connection established successfully!');

  Dishes.create({
      "name": "Uthapizza",
      "image": "images/uthapizza.png",
      "category": "mains",
      "label": "Hot",
      "price": "4.99",
      "description": "A unique . . .",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites"
        }
      ]
}, function(err, dish) {
    if(err) throw err;
    console.log('Dish created successfully!');
    console.log(dish);

    var id = dish._id;
    setTimeout(function () {
      Dishes.findByIdAndUpdate(id, {
        $set: {
          description: 'Updated description'
        }
      }, {
        new: true
      }, function (err, dish) {
        if(err) throw err;
        console.log('Dish updated successfully!');
        console.log(dish);

        dish.comments.push({
          rating: 5,
          comment: 'I\'m getting a sinking feeling',
          author: 'Leonardo DeCaprio'
        });

        dish.save(function(err, dish) {
          console.log('Updated dish comment');
          console.log(dish);

          db.collection('dishes').drop(function () {
            db.close();
          });
        });
      });
    }, 3000);
  });
});
