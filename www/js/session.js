var mongoose = require('mongoose');

var Session = mongoose.model('Session', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  number: {
    type: String
  },
  type: {
    type: String
  },
  register: {
    councilman_id: { type : String },
    is_present: { type : Boolean },
    time : { type : Date }
  }
});

module.exports = {Session};
