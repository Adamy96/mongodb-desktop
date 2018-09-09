let mongoose = require('mongoose');

//User model
  // email - require it - trim it - set type - set min length of 1
let User = mongoose.model('User', {
  email: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  }
});

let newUser = new User({
  email: 'vinici usbad amy@gmail.com'
});

newUser.save().then((doc) => {
  console.log(doc);
}).catch((e) => {
  console.log(e);
});

module.exports = {User};
