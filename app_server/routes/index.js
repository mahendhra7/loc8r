var express = require('express');
var router = express.Router();
var ctrllocation = require('../controller/locations');
 

/* GET Locations page */
router.get('/', ctrllocation.homeList);
router.get('/location', ctrllocation.locationInfo);
router.get('/location/review/new', ctrllocation.addReview);
 
 
module.exports = router;