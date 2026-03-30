const mongoose = require('mongoose');

mongoose.connect('your_mongodb_url')
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

module.exports = mongoose;
