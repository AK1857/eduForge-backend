const express = require('express');
const { streamVideo } = require('../controllers/streamControlers');
const router = express.Router();


router.get('/video/:filename', streamVideo);

module.exports = router;
