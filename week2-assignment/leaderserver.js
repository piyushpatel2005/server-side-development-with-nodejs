var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Leaders = require('./models/leadership');
var url = 'mongodb://localhost:7890/conFusion';
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', function () {
  console.error('Connection error occured');
});

db.once('open', function () {
  console.log('Connection established successfully!');
});

Leaders.create(
  {
      "name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, . . ."
}, function (err, leader) {
  if(err) throw err;
  console.log('Leader data created successfully!');
  console.log(leader);

  var id = leader._id;

  setTimeout(function () {
    Leaders.findByIdAndUpdate(id, {
      $set: {
        description: "Our new CEO, Peter,..."
      }
    }, {
      new: true
    }, function (err, leader) {
      console.log("Leader data updated successfully!");
      console.log(leader);

      db.collection('leadership').drop(function () {
        db.close();
      });
    });
  }, 3000);
});
