const mongoose = require('mongoose');
const User = require("../models/userModel");

const postSchema = new mongoose.Schema({
   title: {
      type: String,
   },
   content: {
      type: String,
   },
   author: {
      type: Object,
      ref: 'User',
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   updatedAt: {
      type: Date,
      default: Date.now
   }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
