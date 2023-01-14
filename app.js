//importing express
const express = require('express');

//importing bodyparser

const bodyParser = require('body-parser')

const path = require('path')

const app = express();

const adminRoutes = require('./routes/admin')

const shopRoutes= require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin" ,adminRoutes)

app.use(shopRoutes)

//for error page

app.use((req,res,next)=>{
    res.status(404).sendfile(path.join(__dirname, 'view' , '404.html'))
})

app.listen(3000)