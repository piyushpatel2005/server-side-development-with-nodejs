var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

//connection url
var url = 'mongodb://localhost:27017/conFusion';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(err, null);
  console.log('Connected correctly to the server');
  var collection = db.collection('dishes');
  collection.insertOne({name: "Uthapizza", description: "test"}, function (err, result) {
    assert.equal(err, null);
    console.log('After insertion: ');
    console.log(result.ops);
    collection.find({}).toArray(function (err, docs) {
      assert.equal(err, null);
      console.log('Found: ');
      console.log(docs);
      db.dropCollection('dishes', function (err, result) {
        assert.equal(err, null);
        db.close();
      });
    });
  });
});
