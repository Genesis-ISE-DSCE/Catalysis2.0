const express = require('express');
const router = express.Router();

const { register, getRegistrations, getEventDetails } = require('../controllers/register');

router.route('/register').post(register);
router.route('/getAllRegistrations').get(getRegistrations);
router.route('/getEventDetails').get(getEventDetails);

module.exports = router;