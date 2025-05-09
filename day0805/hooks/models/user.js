const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});


userSchema.pre('save', function (next) {
  console.log('[Hook] Before saving user:', this.name);
  next();
});

userSchema.post('save', function (doc) {
  console.log('[Hook] After saving user:', doc.name);
});

userSchema.pre('find', function (next) {
  console.log('[Hook] Before find:', this.getQuery());
  next();
});

userSchema.post('find', function (docs) {
  console.log('[Hook] After find - Total:', docs.length);
});

userSchema.pre('updateOne', function (next) {
  console.log('[Hook] Before updateOne:', this.getUpdate());
  next();
});

userSchema.post('updateOne', function () {
  console.log('[Hook] After updateOne');
});

userSchema.pre('deleteOne', { document: true, query: false }, function (next) {
  console.log('[Hook] Before deleteOne:', this.name);
  next();
});

userSchema.post('deleteOne', { document: true, query: false }, function () {
  console.log('[Hook] After deleteOne');
});

const User = mongoose.model('User', userSchema);
module.exports = User;

