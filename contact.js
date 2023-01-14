const path = require('path');

const express = require('express');

const contactController=require('../controller/contact')


const router = express.Router();

router.get('/contact', exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'view1', 'contact.html'))
} );

module.exports = router;