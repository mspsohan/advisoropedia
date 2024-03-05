const Post = require('../models/postModel');

const getPosts = async (req, res) => {
   const page = parseInt(req.query.page) || 1;
   const limit = parseInt(req.query.limit) || 10;

   try {
      const posts = await Post.find()
         .skip((page - 1) * limit)
         .limit(limit)
         .exec();

      res.json(posts);
   } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
   }
};

module.exports = { getPosts };

