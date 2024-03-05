const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const postController = require('../controllers/postControllers');

router.route("/").get(postController.getPosts)

module.exports = router;
