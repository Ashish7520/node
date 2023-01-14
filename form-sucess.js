const path= require('path')


const express = require('express')

const router=express.Router()

router.get( "/success" , (req, res, next) => {
    res.send('<h1> Form Filled Successfully</h1>')
});

module.exports = router
