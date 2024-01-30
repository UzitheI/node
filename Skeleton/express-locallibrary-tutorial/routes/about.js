const express = require('express');
const router = express.Router();


router.get('/', function(req,res) {
    console.log('has started')
    res.send('the about page');
  });


module.exports=router;

