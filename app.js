const http = require('http');

const Sequelize = require('sequelize');
const sequelize = require('./util/database');
const Expense = require('./model/expense');
const mainRoutes=require('./routes/route')


const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(mainRoutes)



app.get('/expense/get-expense/:id', async(req,res,next)=>{
    try {
        const expense = await Expense.findByPk(req.params.id);
        console.log('req.param.id=',req.params.id)
    
        if (!expense) {
          return res.status(404).send('Expense not found');
        }
    
        res.send(expense);
      } catch (err) {
        next(err);
      }
    });




sequelize.sync()
.then(result=>{
    app.listen(5500)
})
.catch(err=>{
    console.log(err)
})