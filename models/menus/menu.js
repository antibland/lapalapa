var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MenuSchema = new Schema({
  type: String,
  name: String,
  description: String,
  price: String
});

module.exports = mongoose.model('Menu', MenuSchema);