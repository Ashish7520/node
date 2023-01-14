const path= require('path')


const express = require('express')

const router=express.Router()

router.get( "/contact-us" , (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'view', 'contact-us.html'))
});

module.exports = router
