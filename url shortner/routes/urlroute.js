const express = require('express');
const router = express.Router();

const { createUrl, redirectUrl } = require('../controllers/urlcontroller');

router.post('/url', createUrl);
router.get('/:shortId', redirectUrl);   // VERY IMPORTANT

module.exports = router;
