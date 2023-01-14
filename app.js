//importing express
const express = require('express');

//importing bodyparser

const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin')

const shopRoutes= require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin" ,adminRoutes)

app.use(shopRoutes)

//for error page

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found!</h1>')
})

app.listen(3000)