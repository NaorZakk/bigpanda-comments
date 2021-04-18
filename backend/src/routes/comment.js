const router = require('express').Router();
const commentController = require("../controllers/commentController");

router.get('/api/comments', commentController.getComments);

router.post('/api/comments', commentController.createComment);

module.exports = router;
