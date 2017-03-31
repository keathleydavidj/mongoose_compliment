// How can we set up the Compliment model to talk to our database?
// Look at past examples
var mongoose = require('mongoose');

var complimentSchema = new mongoose.Schema({
  compliment: { type: String, required: true }
});

complimentSchema.statics.justPickOne = function(callback) {
  var model = this.model('Compliment');

  model
  .count()
  .exec(function(err, count) {
    var random = Math.floor(Math.random() * count);

    model
    .findOne()
    .skip(random)
    .exec(callback);
  });
}

var Compliment = mongoose.model('Compliment', complimentSchema);

// Make this available to our other files
module.exports = Compliment;
