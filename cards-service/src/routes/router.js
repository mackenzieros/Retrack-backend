const express = require('express');
const router = express.Router();

const contentController = require('../controllers/contentController');

router.get('/autopopcontent', contentController.autopop);

module.exports = router;