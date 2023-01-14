//importing express
const express = require('express');

//importing bodyparser

const bodyParser = require('body-parser')

const path = require('path')

const app = express();

const adminRoutes = require('./routes/admin')

const shopRoutes= require('./routes/shop')

const contactRoutes= require('./routes/contact-us')

const successMsg = require('./routes/form-sucess')

app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin" ,adminRoutes)

app.use(shopRoutes)

app.use(contactRoutes)

app.use(successMsg)

//for error page

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'view' , '404.html'))
})

app.listen(3000)