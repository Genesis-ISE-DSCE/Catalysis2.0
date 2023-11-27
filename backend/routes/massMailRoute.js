const express = require('express');
const router = express.Router();

const { mailAll } = require('../controllers/massMailer');

router.route('/sendMassMail').post(mailAll);

module.exports = router;