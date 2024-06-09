const express = require('express');
const { getFlights, addFlight, updateFlight } = require('../controller/flights');

const router = express.Router();


router.get('/', getFlights)
router.post('/', addFlight)
router.put('/', updateFlight)


module.exports = router;