const express = require('express');
const router = express.Router();
const { adminData  ,update_Job_Role} = require('../controllers/homeController');

// Route for fetching admin members
router.get('/adminMember', adminData);
router.post('/updateJobRole' , update_Job_Role)
module.exports = router;
